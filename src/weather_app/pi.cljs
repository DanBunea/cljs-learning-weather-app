(ns weather-app.pi
  (:require
   [reagent.core :as r :refer [atom]]
   [ajax.core :refer [GET POST]]
   ))


(def errors (r/atom []))

(defn add-error [error]
  (swap! errors conj error))


(defn clear-errors []
  (reset! errors []))



(defn safe-run [func]
  (try
    (func )
    (catch :default e
      (add-error e)
      (.log js/console 5 (pr-str e ))
      )))


