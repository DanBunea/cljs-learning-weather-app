(ns weather-app.generic-components
  (:require
   [reagent.core :as r :refer [atom]]
   [weather-app.pi :refer [errors clear-errors]]
   ))


(defn errors-component []
  [:div#errors_container {:on-click #(clear-errors)}
   (for [err @errors]
     ^{:key err} [:li "Error " err])])

