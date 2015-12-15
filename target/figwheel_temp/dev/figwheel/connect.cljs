(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [weather-app.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/weather-app.core.on-js-reload (apply js/weather-app.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'weather-app.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

