// Compiled by ClojureScript 1.7.170 {}
goog.provide('weather_app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof weather_app.core.model !== 'undefined'){
} else {
weather_app.core.model = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Weather app",new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city","city",-393302614),"Timisoara",new cljs.core.Keyword(null,"country","country",312965309),"RO",new cljs.core.Keyword(null,"temp","temp",1791541284),"+3"], null)], null));
}
weather_app.core.log = (function weather_app$core$log(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26739 = arguments.length;
var i__17885__auto___26740 = (0);
while(true){
if((i__17885__auto___26740 < len__17884__auto___26739)){
args__17891__auto__.push((arguments[i__17885__auto___26740]));

var G__26741 = (i__17885__auto___26740 + (1));
i__17885__auto___26740 = G__26741;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return weather_app.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

weather_app.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return console.log(params);
});

weather_app.core.log.cljs$lang$maxFixedArity = (0);

weather_app.core.log.cljs$lang$applyTo = (function (seq26738){
return weather_app.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26738));
});
weather_app.core.fetch_weather = (function weather_app$core$fetch_weather(query){
return ajax.core.GET.call(null,[cljs.core.str(" http://api.openweathermap.org/data/2.5/weather?appid=22f30c03f6fa4e96955fd942787dab02&q="),cljs.core.str(query)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__26742_SHARP_){
return cljs.core.swap_BANG_.call(null,weather_app.core.model,cljs.core.assoc,new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp","temp",1791541284),(cljs.core.get_in.call(null,p1__26742_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main","temp"], null)) - 273.15),new cljs.core.Keyword(null,"city","city",-393302614),query,new cljs.core.Keyword(null,"country","country",312965309),cljs.core.get_in.call(null,p1__26742_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sys","country"], null))], null));
})], null),false);
});
weather_app.core.weather_component = (function weather_app$core$weather_component(city,temp,country){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#weather","div#weather",-734174009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#city","h2#city",110263571),city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#temp","h3#temp",2134803015),temp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#contry","h3#contry",-1725140222),country], null)], null);
});
weather_app.core.choose_city_component = (function weather_app$core$choose_city_component(){
var inner_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
return ((function (inner_state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,inner_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (inner_state){
return (function (p1__26743_SHARP_){
return cljs.core.swap_BANG_.call(null,inner_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),p1__26743_SHARP_.target.value);
});})(inner_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"GO",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (inner_state){
return (function (){
return weather_app.core.fetch_weather.call(null,cljs.core.deref.call(null,inner_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)));
});})(inner_state))
], null)], null)], null);
});
;})(inner_state))
});
weather_app.core.main_component = (function weather_app$core$main_component(){
console.log((1),cljs.core.pr_str.call(null,cljs.core.deref.call(null,weather_app.core.model)));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#app-title","h2#app-title",1695200234),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,weather_app.core.model))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather_app.core.choose_city_component], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather_app.core.weather_component,cljs.core.get_in.call(null,cljs.core.deref.call(null,weather_app.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"city","city",-393302614)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,weather_app.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"temp","temp",1791541284)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,weather_app.core.model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"country","country",312965309)], null))], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather_app.core.main_component], null),document.getElementById("app"));
weather_app.core.on_js_reload = (function weather_app$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1450181244647