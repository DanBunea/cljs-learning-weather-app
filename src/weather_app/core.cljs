(ns weather-app.core
  (:require
   [reagent.core :as r :refer [atom]]
   [weather-app.pi :refer [safe-run errors add-error clear-errors]]
   [weather-app.rest :refer [GET<]]
   [weather-app.generic-components :refer [errors-component]]
   [cljs.core.async :refer [chan <! >! put! take!]]
   )
   (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(println "Edi1ts to  his te xt sh ould show  up in your developer console.")

;; define your app data so that it doesn't get over-written on reload




;;MODEL
(defonce model (r/atom
                {
                 :text "Weather app"
                 :weather {
                           :city "Timisoara"
                           :country "RO"
                           :temp "+3"
                           }
                 }))





;;CONTROLLER

(defn swapm! [x y]
  (swap! y (fn [xx] x)))



(defn select [index]
  (-> @model
      (assoc-in [:storyboard :pages 0 :layers 0 :children 0 :is_selected] true)
      (assoc-in [:selected :selected_tab] "tab_properties")
      (assoc-in [:selected :page_object_cursor] [0])
      (swapm! model)
      ))





;;AJAX
(defn fetch-weather [query]
  (safe-run
   #(go
     (-> @model
         (assoc :text (str "Data for " query))
         (assoc :weather
           (let [data (<! (GET< (str " http://api.openweathermap.org/data/2.5/weather?appid=22f30c03f6fa4e96955fd942787dab02&q=" query)))]
             {
              :temp (- (get-in data ["main" "temp"]) 273.15)
              :city query
              :country (get-in data ["sys" "country"])
              }))
         (swapm! model)))))



;;EXCEPTION
(defn change-title [title]
  (safe-run
   #(-> @model
       (assoc :text title)
       ((fn [state]
          (throw "there is an error")))
       (swapm! model)
       )))






;;VIEWS


(defn weather-component [city temp country]
  [:div#weather
    [:h2#city city]
    [:h3#temp temp]
    [:h3#contry country]
   ])


(defn choose-city-component []
  (let [inner-state (r/atom {:text ""})]
    (fn []
      [:div
       [:input {
                :type "text"
                :value (@inner-state :text)
                :on-change #(swap! inner-state assoc :text (-> % .-target .-value))
                } ]
       [:input
        {
         :type "button"
         :value "GO"
         :on-click #(fetch-weather (@inner-state :text))
         }]
       ]
      )))




(defn main-component []

  (.log js/console 1 (pr-str @model))
  [:div#main
   (if (> (count @errors) 0) [errors-component ])
   [:h2#app-title { :on-click #(change-title "abc") } (@model :text)]
   [choose-city-component]
   [weather-component
    (get-in @model [:weather :city])
    (get-in @model [:weather :temp])
    (get-in @model [:weather :country])
    ]])






(r/render-component [main-component ]
                          (. js/document (getElementById "app")))





(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! model update-in [:__figwheel_counter] inc)
)
