(ns weather-app.rest
  (:require
   [ajax.core :refer [GET POST]]
   [cljs.core.async :refer [chan <! >! put! take!]]
   )
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  )



(defn GET< [state url]
  (let [res
    (go
     (assoc state :data (<! (let [ch (chan)]
           (GET url {:handler (fn [resp]
                                (put! ch resp))})
           ch))))]
    (print res)
    res))



