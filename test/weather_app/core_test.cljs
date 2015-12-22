(ns weather-app.core-test
  (:require
   [reagent.core :as r :refer [atom]]
   [cljs.test :refer-macros [deftest testing is]]
   [weather-app.core :as w :refer [weather-component choose-city-component do-something]]
   [weather-app.core]
   [jayq.core :refer [$ css html val trigger]]
   [cljs.core.async :refer [<!]]

   [cljs-react-test.simulate :as sim]
   [dommy.core :as dommy :refer-macros [sel1 sel]]

   )
;;   (:use [jayq.core :only [$ css html]])
)


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




;; (deftest center-test
;;   (let [after-select (select 0)]
;;     (is (= true (get-in after-select  [:storyboard :pages 0 :layers 0 :children 0 :is_selected])  ))
;;     (is (= "tab_properties" (get-in after-select  [:selected :selected_tab])))
;;     (is (= [0] (get-in after-select  [:selected :page_object_cursor])))
;;     ))




;;COMPONENT TESTS
(deftest weather-component-test-in
  ;;WHEN render component in test
  (let [comp (r/render-component [w/weather-component "Paris" 12]
                                 (. js/document (getElementById "test")))]
    ;;ASSERT
    ;;city name rendered as Paris
    (is (= (html ($ :#city)) "Paris"))
    ;;temp is rendered as 12
    (is (= (html ($ :#temp)) "12"))))

(deftest weather-component-test-out
  ;;WHEN render component in test
  (let [comp (r/render-component [w/weather-component "London" 0]
                                 (. js/document (getElementById "test")))
        expected-invocations (atom [])]
    (with-redefs [weather-app.core/do-something #(swap! expected-invocations conj %)]
      ;;ASSERT
      ;;city name rendered as Paris
      (.click ($ :#city))
      (is (=[101] @expected-invocations))
      )))

(deftest choose-city-component-test-in
  ;;WHEN render component in test
  (let [comp (r/render-component [w/choose-city-component]
                                 (. js/document (getElementById "test")))]
    ;;ASSERT
    ;;there is a textbox
    (is (complement nil? (html ($ :#txt_city))))
    ;;there is a button
    (is (complement nil? (html ($ :#btn_go))))))


(deftest choose-city-component-test-out
  (let [comp (r/render-component [w/choose-city-component]
                                 (. js/document (getElementById "test")))
        expected-invocations (atom [])]
    (with-redefs [weather-app.core/fetch-weather #(swap! expected-invocations conj %)]
      ;;GIVEN render component in test
      ;;WHEN changing the city and submitting
      (sim/change (sel1 :#txt_city) {:target {:value "london"}})
      (sim/click  (sel1 :#btn_go) nil)
      ;;ASSERT london should be sent to fetch-weather
      (is (=["london"] @expected-invocations))
      )))
