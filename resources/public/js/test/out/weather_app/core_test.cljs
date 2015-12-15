(ns weather-app.core-test
  (:require
   [reagent.core :as r :refer [atom]]
   [cljs.test :refer-macros [deftest testing is]]
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
           )
  )
  )

(deftest center-test
  (let [after-select (select 0)]
    (is (= true (get-in after-select  [:storyboard :pages 0 :layers 0 :children 0 :is_selected])  ))
    (is (= "tab_properties" (get-in after-select  [:selected :selected_tab])))
    (is (= [0] (get-in after-select  [:selected :page_object_cursor])))
    ))
