// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('weather_app.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40076__delegate = function (x){
if(cljs.core.truth_(weather_app.core.on_js_reload)){
return cljs.core.apply.call(null,weather_app.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'weather-app.core/on-js-reload' is missing");
}
};
var G__40076 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40077__i = 0, G__40077__a = new Array(arguments.length -  0);
while (G__40077__i < G__40077__a.length) {G__40077__a[G__40077__i] = arguments[G__40077__i + 0]; ++G__40077__i;}
  x = new cljs.core.IndexedSeq(G__40077__a,0);
} 
return G__40076__delegate.call(this,x);};
G__40076.cljs$lang$maxFixedArity = 0;
G__40076.cljs$lang$applyTo = (function (arglist__40078){
var x = cljs.core.seq(arglist__40078);
return G__40076__delegate(x);
});
G__40076.cljs$core$IFn$_invoke$arity$variadic = G__40076__delegate;
return G__40076;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1450190322475