// Compiled by ClojureScript 1.7.170 {}
goog.provide('weather_app.core_test');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('weather_app.core');
weather_app.core_test.model = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storyboard","storyboard",-435969347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)], null)], null)], null)], null)], null)], null));
weather_app.core_test.select = (function weather_app$core_test$select(index){
return cljs.core.swap_BANG_.call(null,weather_app.core_test.model,(function (p1__26742_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__26742_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storyboard","storyboard",-435969347),new cljs.core.Keyword(null,"pages","pages",-285406513),(0),new cljs.core.Keyword(null,"layers","layers",1944875032),(0),new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"is_selected","is_selected",1554675798)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected_tab","selected_tab",1528321764)], null),"tab_properties"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"page_object_cursor","page_object_cursor",-179120498)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
}));
});
weather_app.core_test.center_test = (function weather_app$core_test$center_test(){
return cljs.test.test_var.call(null,weather_app$core_test$center_test.cljs$lang$var);
});
weather_app.core_test.center_test.cljs$lang$test = (function (){
var after_select = weather_app.core_test.select.call(null,(0));
try{var values__26477__auto___26746 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get_in.call(null,after_select,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storyboard","storyboard",-435969347),new cljs.core.Keyword(null,"pages","pages",-285406513),(0),new cljs.core.Keyword(null,"layers","layers",1944875032),(0),new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"is_selected","is_selected",1554675798)], null))),true);
var result__26478__auto___26747 = cljs.core.apply.call(null,cljs.core._EQ_,values__26477__auto___26746);
if(cljs.core.truth_(result__26478__auto___26747)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storyboard","storyboard",-435969347),new cljs.core.Keyword(null,"pages","pages",-285406513),(0),new cljs.core.Keyword(null,"layers","layers",1944875032),(0),new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"is_selected","is_selected",1554675798)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__26477__auto___26746),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storyboard","storyboard",-435969347),new cljs.core.Keyword(null,"pages","pages",-285406513),(0),new cljs.core.Keyword(null,"layers","layers",1944875032),(0),new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"is_selected","is_selected",1554675798)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__26477__auto___26746)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26743){var t__26515__auto___26748 = e26743;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storyboard","storyboard",-435969347),new cljs.core.Keyword(null,"pages","pages",-285406513),(0),new cljs.core.Keyword(null,"layers","layers",1944875032),(0),new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"is_selected","is_selected",1554675798)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__26515__auto___26748,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__26477__auto___26749 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get_in.call(null,after_select,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected_tab","selected_tab",1528321764)], null))),"tab_properties");
var result__26478__auto___26750 = cljs.core.apply.call(null,cljs.core._EQ_,values__26477__auto___26749);
if(cljs.core.truth_(result__26478__auto___26750)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"tab_properties",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected_tab","selected_tab",1528321764)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__26477__auto___26749),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"tab_properties",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected_tab","selected_tab",1528321764)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__26477__auto___26749)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26744){var t__26515__auto___26751 = e26744;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"tab_properties",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected_tab","selected_tab",1528321764)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__26515__auto___26751,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__26477__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get_in.call(null,after_select,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"page_object_cursor","page_object_cursor",-179120498)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
var result__26478__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__26477__auto__);
if(cljs.core.truth_(result__26478__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"page_object_cursor","page_object_cursor",-179120498)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__26477__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"page_object_cursor","page_object_cursor",-179120498)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__26477__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__26478__auto__;
}catch (e26745){var t__26515__auto__ = e26745;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"after-select","after-select",1938053218,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"page_object_cursor","page_object_cursor",-179120498)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__26515__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

weather_app.core_test.center_test.cljs$lang$var = new cljs.core.Var(function(){return weather_app.core_test.center_test;},new cljs.core.Symbol("weather-app.core-test","center-test","weather-app.core-test/center-test",1020634579,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"weather-app.core-test","weather-app.core-test",-155678549,null),new cljs.core.Symbol(null,"center-test","center-test",1580211577,null),"test/weather_app/core_test.cljs",21,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(weather_app.core_test.center_test)?weather_app.core_test.center_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map