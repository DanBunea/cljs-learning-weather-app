// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('weather_app.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39956__delegate = function (x){
if(cljs.core.truth_(weather_app.core.on_js_reload)){
return cljs.core.apply.call(null,weather_app.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'weather-app.core/on-js-reload' is missing");
}
};
var G__39956 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39957__i = 0, G__39957__a = new Array(arguments.length -  0);
while (G__39957__i < G__39957__a.length) {G__39957__a[G__39957__i] = arguments[G__39957__i + 0]; ++G__39957__i;}
  x = new cljs.core.IndexedSeq(G__39957__a,0);
} 
return G__39956__delegate.call(this,x);};
G__39956.cljs$lang$maxFixedArity = 0;
G__39956.cljs$lang$applyTo = (function (arglist__39958){
var x = cljs.core.seq(arglist__39958);
return G__39956__delegate(x);
});
G__39956.cljs$core$IFn$_invoke$arity$variadic = G__39956__delegate;
return G__39956;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1450190107073