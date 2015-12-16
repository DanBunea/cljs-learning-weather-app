(ns weather-app.core-test
  (:require
   [reagent.core :as r :refer [atom]]
   [cljs.test :refer-macros [deftest testing is]]
   [weather-app.core :as w :refer [weather-component]]
   [weather-app.core]))



(def model (r/atom {:storyboard {
                               :pages [
                                       {
                                        :layers [{
                                                 :children [
                                                            {}
                                                            ]
                                                  }
                                                 ]
                                        }
                                       ]
                               }}))





(defn select [index]
    (swap! model
           #(-> %
                (assoc-in [:storyboard :pages 0 :layers 0 :children 0 :is_selected] true)
                (assoc-in [:selected :selected_tab] "tab_properties")
                (assoc-in [:selected :page_object_cursor] [0])
             )))




(deftest center-test
  (let [after-select (select 0)]
    (is (= true (get-in after-select  [:storyboard :pages 0 :layers 0 :children 0 :is_selected])  ))
    (is (= "tab_properties" (get-in after-select  [:selected :selected_tab])))
    (is (= [0] (get-in after-select  [:selected :page_object_cursor])))
    ))

(defn found-in [re div]
  (let [res (.-innerHTML div)]
    (if (re-find re res)
      true
      (do (println "Not found: " res)
          false))))

(deftest component-test
  (let [comp (r/render-component [w/weather-component "a" 12]
        (. js/document (getElementById "test")))]
    (print 1 (pr-str comp))
    (is (= 1 1))))

