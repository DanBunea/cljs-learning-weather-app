(ns weather-app.core
  (:require
   [reagent.core :as r :refer [atom]]
   [ajax.core :refer [GET POST]]
   [weather-app.pi :refer [swap-model! errors]]
   ))

(enable-console-print!)

(println "Edi1ts to  his te xt sh ould show  up in your developer console.")

;; define your app data so that it doesn't get over-written on reload




;;MODEL
(defonce model (r/atom
                {
                 :text "Weather app"
                 :weather {
                           :city "enter city above"
                           :country ""
                           :temp "__"
                           :wind [{
                                  :speed 0
                                  :deg 0
                                  }]
                           }
                 }))





;;CONTROLLER
(defn log [& params]
  (.log js/console params))



;; http://api.openweathermap.org - data example
;; {
;;  "coord":{"lon":21.23,"lat":45.75},
;;  "weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],
;;  "base":"cmc stations",
;;  "main":{"temp":275.6,"pressure":1028,"humidity":93,"temp_min":275.15,"temp_max":276.15},
;;  "wind":{"speed":2.6,"deg":320},
;;  "clouds":{"all":75},
;;  "dt":1450186200,
;;  "sys":{"type":1,"id":6000,"message":0.004,"country":"RO","sunrise":1450159759,"sunset":1450191076},
;;  "id":665087,
;;  "name":"Timisoara",
;;  "cod":200
;;  }

(defn fetch-weather [query]
  (GET (str " http://api.openweathermap.org/data/2.5/weather?appid=22f30c03f6fa4e96955fd942787dab02&q=" query)
       {:handler #(swap! model
                         assoc :weather
                         {
                          :temp (.toFixed (.parseFloat js/window (- (get-in %1 ["main" "temp"]) 273.15)) 0)
                          :city query
                          :country (get-in %1 ["sys" "country"])
                          :wind [{
                                  :speed  (get-in %1 ["wind" "speed"])
                                  :deg  (get-in %1 ["wind" "deg"])
                                 }]
                          }
                         )}
       false))




(defn change-title [title]
  (swap-model! model
               #(-> %
                    (assoc :text title)
                    ((fn [state]
                       (throw "there is an error")))
                    )))






;;VIEWS
(defn weather-component [city temp country]

  [:div#weather
   [:h2#city "Weather in " (.toUpperCase city)
    [:span#contry ", " country]
    ]
   [:h3#temp
    [:span "Temperature: "]
    [:span temp]
;;     [:span temp]
    [:sup " o"]
    [:span "C"]
    ]
   ]
  )



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


(defn weather-wind-component [wind]
  (print (get-in wind [0 :speed]))
  [:div
   [:div#wind_speed [:h3 "Wind speed: " (get-in wind [0 :speed]) " m/s"]]
   [:div#wind_direction [:h3 "Wind direction: " (get-in wind [0 :deg])[:sup " o"]] ]
   ]
  )



(defn main-component []

  (.log js/console 1 (pr-str @model))
  [:div#main
   [:h2#app-title {
                   :on-click #(change-title "abc")
                   }
    (@model :text)]
   [choose-city-component]
   [weather-component
    (get-in @model [:weather :city])
    (get-in @model [:weather :temp])
    (get-in @model [:weather :country])
    ]
   [:div#wind
    [weather-wind-component
     (get-in @model [:weather :wind])
     ]
    ]])


(r/render-component [main-component ]
                          (. js/document (getElementById "app")))





(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! model update-in [:__figwheel_counter] inc)
)
