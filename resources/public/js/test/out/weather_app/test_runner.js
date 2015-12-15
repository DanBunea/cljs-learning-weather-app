// Compiled by ClojureScript 1.7.170 {}
goog.provide('weather_app.test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('weather_app.core_test');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
weather_app.test_runner.color_favicon_data_url = (function weather_app$test_runner$color_favicon_data_url(color){
var cvs = document.createElement("canvas");
cvs.width = (16);

cvs.height = (16);

var ctx_40021 = cvs.getContext("2d");
ctx_40021.fillStyle = color;

ctx_40021.fillRect((0),(0),(16),(16));

return cvs.toDataURL();
});
weather_app.test_runner.change_favicon_to_color = (function weather_app$test_runner$change_favicon_to_color(color){
var icon = document.getElementById("favicon");
return icon.href = weather_app.test_runner.color_favicon_data_url.call(null,color);
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");

cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors.");

if(((0) < (new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)))){
return weather_app.test_runner.change_favicon_to_color.call(null,"#d00");
} else {
return weather_app.test_runner.change_favicon_to_color.call(null,"#0d0");
}
}));
weather_app.test_runner.runner = (function weather_app$test_runner$runner(){
return cljs.test.run_block.call(null,(function (){var env40024 = cljs.test.empty_env.call(null);
var summary40025 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env40024,summary40025){
return (function (){
cljs.test.set_env_BANG_.call(null,env40024);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"weather-app.core-test","weather-app.core-test",-155678549,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__26582__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__26582__auto__,env40024,summary40025){
return (function (){
if((env__26582__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__26582__auto__,env40024,summary40025))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return weather_app.core_test.center_test;},new cljs.core.Symbol("weather-app.core-test","center-test","weather-app.core-test/center-test",1020634579,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"weather-app.core-test","weather-app.core-test",-155678549,null),new cljs.core.Symbol(null,"center-test","center-test",1580211577,null),"test/weather_app/core_test.cljs",21,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(weather_app.core_test.center_test)?weather_app.core_test.center_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__26582__auto__,env40024,summary40025){
return (function (){
if((env__26582__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__26582__auto__,env40024,summary40025))
], null));
})());
});})(env40024,summary40025))
,((function (env40024,summary40025){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"weather-app.core-test","weather-app.core-test",-155678549,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env40024,summary40025))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env40024,summary40025){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary40025,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary40025),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env40024,summary40025))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env40024,summary40025){
return (function (){
cljs.test.set_env_BANG_.call(null,env40024);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary40025));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary40025),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env40024,summary40025))
], null));
})());
});
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"build-id","build-id",1642831089),"test",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return weather_app.test_runner.runner.call(null);
})], null));

//# sourceMappingURL=test_runner.js.map