

==== Unit Testing Project Setup  =====


                    -- 1 --

Trebuie adaugat in project.clj

===============================================================
:cljsbuild [

              {:id "test"
               :source-paths ["src" "test"]
               :compiler {:output-to "resources/public/js/test/test.js"
                          :output-dir "resources/public/js/test/out"
                          :optimizations :none
                          :main hello_reagent.test-runner
                          :asset-path "js/test/out"
                          :source-map true
                          ;; :source-map-timestamp true
                          :cache-analysis true }}
]

===============================================================


                          -- 2 --

Inainte de figheel trebuie introdus:

===============================================================
:aliases {"test" ["cljsbuild" "test"]}
===============================================================


                          -- 3 --

In proiect se va pastra urmatoarea structura de foldere:

test/whether_app/core_test.cljs
test/whether_app/core_test_runner.cljs



                          -- 4 --

In core_test trebuie adaugate urmatoarele:
===============================================================
(ns weather-app.core-test
 (:require
  [cljs.test :refer-macros [deftest testing is]]
  [weather-app.core]))

(deftest center-test
 (is (= 1 1))
 (is (= 2 0))
 )
===============================================================


                           -- 5 --

 In test_runner trebuie adaugate urmatoarele:

===============================================================
 (ns ^:figwheel-always weather-app.test-runner
 (:require
  [cljs.test :as test :include-macros true :refer [report]]
  [weather-app.core-test]
  [figwheel.client :as fw]))

(enable-console-print!)

(defn color-favicon-data-url [color]
 (let [cvs (.createElement js/document "canvas")]
   (set! (.-width cvs) 16)
   (set! (.-height cvs) 16)
   (let [ctx (.getContext cvs "2d")]
     (set! (.-fillStyle ctx) color)
     (.fillRect ctx 0 0 16 16))
   (.toDataURL cvs)))

(defn change-favicon-to-color [color]
 (let [icon (.getElementById js/document "favicon")]
   (set! (.-href icon) (color-favicon-data-url color))))

(defmethod report [::test/default :summary] [m]
 (println "\nRan" (:test m) "tests containing"
          (+ (:pass m) (:fail m) (:error m)) "assertions.")
 (println (:fail m) "failures," (:error m) "errors.")
 (if (< 0 (+ (:fail m) (:error m)))
   (change-favicon-to-color "#d00")
   (change-favicon-to-color "#0d0"))) ;;<<-- change color

(defn runner []
 (test/run-tests
  'weather-app.core-test))

(fw/start {
          :websocket-url "ws://localhost:3449/figwheel-ws"
          ;; :autoload false
          :build-id "test"
          :on-jsload (fn [] (runner))})
===============================================================

                          -- 6 --

In resources/public/ se va adauga un fisier html :
===============================================================
<!DOCTYPE html>
<html>
 <head>
   <link href="css/style.css" rel="stylesheet" type="text/css">
   <link id="favicon" rel="shortcut icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2NMS0v7z0ABYBw1gGE0DBhGwwCYh4ZBOgAAcQUjIUXh8RYAAAAASUVORK5CYII=" />
 </head>
 <body>
   <script src="js/test/test.js" type="text/javascript"></script>
 </body>
</html>
===============================================================


                          -- 7 --

In consola se va da urmatoarea comanda
===============================================================
(start-autobuild dev test)
===============================================================



                           -- 8 --

Nota: In Safari se pot deschide in paralel pentru mai multe devices/rezolutions (ex: mobile) astfel incat se va face refresh pe toate si si vor rula testele in acelasi timp.
