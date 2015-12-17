(ns weather-app.rest
  (:require
   [ajax.core :as aj :refer [GET POST]]
   [cljs.core.async :refer [chan <! >! put! take!]]
   )
  (:require-macros [cljs.core.async.macros :refer [go]])
  )



(defn GET< [url]
  (go
   (<! (let [ch (chan)]
         (aj/GET url {:handler (fn [resp]
                              (put! ch resp))})
         ch))))
