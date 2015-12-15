// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25882 = cljs.core._EQ_;
var expr__25883 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25882.call(null,"true",expr__25883))){
return true;
} else {
if(cljs.core.truth_(pred__25882.call(null,"false",expr__25883))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25883)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25885__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25886__i = 0, G__25886__a = new Array(arguments.length -  0);
while (G__25886__i < G__25886__a.length) {G__25886__a[G__25886__i] = arguments[G__25886__i + 0]; ++G__25886__i;}
  args = new cljs.core.IndexedSeq(G__25886__a,0);
} 
return G__25885__delegate.call(this,args);};
G__25885.cljs$lang$maxFixedArity = 0;
G__25885.cljs$lang$applyTo = (function (arglist__25887){
var args = cljs.core.seq(arglist__25887);
return G__25885__delegate(args);
});
G__25885.cljs$core$IFn$_invoke$arity$variadic = G__25885__delegate;
return G__25885;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25888){
var map__25891 = p__25888;
var map__25891__$1 = ((((!((map__25891 == null)))?((((map__25891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25891):map__25891);
var message = cljs.core.get.call(null,map__25891__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18851__auto___26053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___26053,ch){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___26053,ch){
return (function (state_26022){
var state_val_26023 = (state_26022[(1)]);
if((state_val_26023 === (7))){
var inst_26018 = (state_26022[(2)]);
var state_26022__$1 = state_26022;
var statearr_26024_26054 = state_26022__$1;
(statearr_26024_26054[(2)] = inst_26018);

(statearr_26024_26054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (1))){
var state_26022__$1 = state_26022;
var statearr_26025_26055 = state_26022__$1;
(statearr_26025_26055[(2)] = null);

(statearr_26025_26055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (4))){
var inst_25975 = (state_26022[(7)]);
var inst_25975__$1 = (state_26022[(2)]);
var state_26022__$1 = (function (){var statearr_26026 = state_26022;
(statearr_26026[(7)] = inst_25975__$1);

return statearr_26026;
})();
if(cljs.core.truth_(inst_25975__$1)){
var statearr_26027_26056 = state_26022__$1;
(statearr_26027_26056[(1)] = (5));

} else {
var statearr_26028_26057 = state_26022__$1;
(statearr_26028_26057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (15))){
var inst_25982 = (state_26022[(8)]);
var inst_25997 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25982);
var inst_25998 = cljs.core.first.call(null,inst_25997);
var inst_25999 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25998);
var inst_26000 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25999)].join('');
var inst_26001 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26000);
var state_26022__$1 = state_26022;
var statearr_26029_26058 = state_26022__$1;
(statearr_26029_26058[(2)] = inst_26001);

(statearr_26029_26058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (13))){
var inst_26006 = (state_26022[(2)]);
var state_26022__$1 = state_26022;
var statearr_26030_26059 = state_26022__$1;
(statearr_26030_26059[(2)] = inst_26006);

(statearr_26030_26059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (6))){
var state_26022__$1 = state_26022;
var statearr_26031_26060 = state_26022__$1;
(statearr_26031_26060[(2)] = null);

(statearr_26031_26060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (17))){
var inst_26004 = (state_26022[(2)]);
var state_26022__$1 = state_26022;
var statearr_26032_26061 = state_26022__$1;
(statearr_26032_26061[(2)] = inst_26004);

(statearr_26032_26061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (3))){
var inst_26020 = (state_26022[(2)]);
var state_26022__$1 = state_26022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26022__$1,inst_26020);
} else {
if((state_val_26023 === (12))){
var inst_25981 = (state_26022[(9)]);
var inst_25995 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25981,opts);
var state_26022__$1 = state_26022;
if(cljs.core.truth_(inst_25995)){
var statearr_26033_26062 = state_26022__$1;
(statearr_26033_26062[(1)] = (15));

} else {
var statearr_26034_26063 = state_26022__$1;
(statearr_26034_26063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (2))){
var state_26022__$1 = state_26022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26022__$1,(4),ch);
} else {
if((state_val_26023 === (11))){
var inst_25982 = (state_26022[(8)]);
var inst_25987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25988 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25982);
var inst_25989 = cljs.core.async.timeout.call(null,(1000));
var inst_25990 = [inst_25988,inst_25989];
var inst_25991 = (new cljs.core.PersistentVector(null,2,(5),inst_25987,inst_25990,null));
var state_26022__$1 = state_26022;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26022__$1,(14),inst_25991);
} else {
if((state_val_26023 === (9))){
var inst_25982 = (state_26022[(8)]);
var inst_26008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26009 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25982);
var inst_26010 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26009);
var inst_26011 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26010)].join('');
var inst_26012 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26011);
var state_26022__$1 = (function (){var statearr_26035 = state_26022;
(statearr_26035[(10)] = inst_26008);

return statearr_26035;
})();
var statearr_26036_26064 = state_26022__$1;
(statearr_26036_26064[(2)] = inst_26012);

(statearr_26036_26064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (5))){
var inst_25975 = (state_26022[(7)]);
var inst_25977 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25978 = (new cljs.core.PersistentArrayMap(null,2,inst_25977,null));
var inst_25979 = (new cljs.core.PersistentHashSet(null,inst_25978,null));
var inst_25980 = figwheel.client.focus_msgs.call(null,inst_25979,inst_25975);
var inst_25981 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25980);
var inst_25982 = cljs.core.first.call(null,inst_25980);
var inst_25983 = figwheel.client.autoload_QMARK_.call(null);
var state_26022__$1 = (function (){var statearr_26037 = state_26022;
(statearr_26037[(8)] = inst_25982);

(statearr_26037[(9)] = inst_25981);

return statearr_26037;
})();
if(cljs.core.truth_(inst_25983)){
var statearr_26038_26065 = state_26022__$1;
(statearr_26038_26065[(1)] = (8));

} else {
var statearr_26039_26066 = state_26022__$1;
(statearr_26039_26066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (14))){
var inst_25993 = (state_26022[(2)]);
var state_26022__$1 = state_26022;
var statearr_26040_26067 = state_26022__$1;
(statearr_26040_26067[(2)] = inst_25993);

(statearr_26040_26067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (16))){
var state_26022__$1 = state_26022;
var statearr_26041_26068 = state_26022__$1;
(statearr_26041_26068[(2)] = null);

(statearr_26041_26068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (10))){
var inst_26014 = (state_26022[(2)]);
var state_26022__$1 = (function (){var statearr_26042 = state_26022;
(statearr_26042[(11)] = inst_26014);

return statearr_26042;
})();
var statearr_26043_26069 = state_26022__$1;
(statearr_26043_26069[(2)] = null);

(statearr_26043_26069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26023 === (8))){
var inst_25981 = (state_26022[(9)]);
var inst_25985 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25981,opts);
var state_26022__$1 = state_26022;
if(cljs.core.truth_(inst_25985)){
var statearr_26044_26070 = state_26022__$1;
(statearr_26044_26070[(1)] = (11));

} else {
var statearr_26045_26071 = state_26022__$1;
(statearr_26045_26071[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18851__auto___26053,ch))
;
return ((function (switch__18830__auto__,c__18851__auto___26053,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____0 = (function (){
var statearr_26049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26049[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__);

(statearr_26049[(1)] = (1));

return statearr_26049;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____1 = (function (state_26022){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_26022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e26050){if((e26050 instanceof Object)){
var ex__18834__auto__ = e26050;
var statearr_26051_26072 = state_26022;
(statearr_26051_26072[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26073 = state_26022;
state_26022 = G__26073;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__ = function(state_26022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____1.call(this,state_26022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___26053,ch))
})();
var state__18853__auto__ = (function (){var statearr_26052 = f__18852__auto__.call(null);
(statearr_26052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___26053);

return statearr_26052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___26053,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26074_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26074_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26081 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26081){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26080 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26079,_STAR_print_newline_STAR_26080,base_path_26081){
return (function() { 
var G__26082__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26083__i = 0, G__26083__a = new Array(arguments.length -  0);
while (G__26083__i < G__26083__a.length) {G__26083__a[G__26083__i] = arguments[G__26083__i + 0]; ++G__26083__i;}
  args = new cljs.core.IndexedSeq(G__26083__a,0);
} 
return G__26082__delegate.call(this,args);};
G__26082.cljs$lang$maxFixedArity = 0;
G__26082.cljs$lang$applyTo = (function (arglist__26084){
var args = cljs.core.seq(arglist__26084);
return G__26082__delegate(args);
});
G__26082.cljs$core$IFn$_invoke$arity$variadic = G__26082__delegate;
return G__26082;
})()
;})(_STAR_print_fn_STAR_26079,_STAR_print_newline_STAR_26080,base_path_26081))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26080;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26079;
}}catch (e26078){if((e26078 instanceof Error)){
var e = e26078;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26081], null));
} else {
var e = e26078;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26081))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26085){
var map__26092 = p__26085;
var map__26092__$1 = ((((!((map__26092 == null)))?((((map__26092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26092):map__26092);
var opts = map__26092__$1;
var build_id = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26092,map__26092__$1,opts,build_id){
return (function (p__26094){
var vec__26095 = p__26094;
var map__26096 = cljs.core.nth.call(null,vec__26095,(0),null);
var map__26096__$1 = ((((!((map__26096 == null)))?((((map__26096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26096):map__26096);
var msg = map__26096__$1;
var msg_name = cljs.core.get.call(null,map__26096__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26095,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26095,map__26096,map__26096__$1,msg,msg_name,_,map__26092,map__26092__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26095,map__26096,map__26096__$1,msg,msg_name,_,map__26092,map__26092__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26092,map__26092__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26102){
var vec__26103 = p__26102;
var map__26104 = cljs.core.nth.call(null,vec__26103,(0),null);
var map__26104__$1 = ((((!((map__26104 == null)))?((((map__26104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26104):map__26104);
var msg = map__26104__$1;
var msg_name = cljs.core.get.call(null,map__26104__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26103,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26106){
var map__26116 = p__26106;
var map__26116__$1 = ((((!((map__26116 == null)))?((((map__26116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26116):map__26116);
var on_compile_warning = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26116,map__26116__$1,on_compile_warning,on_compile_fail){
return (function (p__26118){
var vec__26119 = p__26118;
var map__26120 = cljs.core.nth.call(null,vec__26119,(0),null);
var map__26120__$1 = ((((!((map__26120 == null)))?((((map__26120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26120):map__26120);
var msg = map__26120__$1;
var msg_name = cljs.core.get.call(null,map__26120__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26119,(1));
var pred__26122 = cljs.core._EQ_;
var expr__26123 = msg_name;
if(cljs.core.truth_(pred__26122.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26123))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26122.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26123))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26116,map__26116__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__,msg_hist,msg_names,msg){
return (function (state_26339){
var state_val_26340 = (state_26339[(1)]);
if((state_val_26340 === (7))){
var inst_26263 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26263)){
var statearr_26341_26387 = state_26339__$1;
(statearr_26341_26387[(1)] = (8));

} else {
var statearr_26342_26388 = state_26339__$1;
(statearr_26342_26388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (20))){
var inst_26333 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26343_26389 = state_26339__$1;
(statearr_26343_26389[(2)] = inst_26333);

(statearr_26343_26389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (27))){
var inst_26329 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26344_26390 = state_26339__$1;
(statearr_26344_26390[(2)] = inst_26329);

(statearr_26344_26390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (1))){
var inst_26256 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26256)){
var statearr_26345_26391 = state_26339__$1;
(statearr_26345_26391[(1)] = (2));

} else {
var statearr_26346_26392 = state_26339__$1;
(statearr_26346_26392[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (24))){
var inst_26331 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26347_26393 = state_26339__$1;
(statearr_26347_26393[(2)] = inst_26331);

(statearr_26347_26393[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (4))){
var inst_26337 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26339__$1,inst_26337);
} else {
if((state_val_26340 === (15))){
var inst_26335 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26348_26394 = state_26339__$1;
(statearr_26348_26394[(2)] = inst_26335);

(statearr_26348_26394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (21))){
var inst_26294 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26349_26395 = state_26339__$1;
(statearr_26349_26395[(2)] = inst_26294);

(statearr_26349_26395[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (31))){
var inst_26318 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26318)){
var statearr_26350_26396 = state_26339__$1;
(statearr_26350_26396[(1)] = (34));

} else {
var statearr_26351_26397 = state_26339__$1;
(statearr_26351_26397[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (32))){
var inst_26327 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26352_26398 = state_26339__$1;
(statearr_26352_26398[(2)] = inst_26327);

(statearr_26352_26398[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (33))){
var inst_26316 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26353_26399 = state_26339__$1;
(statearr_26353_26399[(2)] = inst_26316);

(statearr_26353_26399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (13))){
var inst_26277 = figwheel.client.heads_up.clear.call(null);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(16),inst_26277);
} else {
if((state_val_26340 === (22))){
var inst_26298 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26299 = figwheel.client.heads_up.append_message.call(null,inst_26298);
var state_26339__$1 = state_26339;
var statearr_26354_26400 = state_26339__$1;
(statearr_26354_26400[(2)] = inst_26299);

(statearr_26354_26400[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (36))){
var inst_26325 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26355_26401 = state_26339__$1;
(statearr_26355_26401[(2)] = inst_26325);

(statearr_26355_26401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (29))){
var inst_26309 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26356_26402 = state_26339__$1;
(statearr_26356_26402[(2)] = inst_26309);

(statearr_26356_26402[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (6))){
var inst_26258 = (state_26339[(7)]);
var state_26339__$1 = state_26339;
var statearr_26357_26403 = state_26339__$1;
(statearr_26357_26403[(2)] = inst_26258);

(statearr_26357_26403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (28))){
var inst_26305 = (state_26339[(2)]);
var inst_26306 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26307 = figwheel.client.heads_up.display_warning.call(null,inst_26306);
var state_26339__$1 = (function (){var statearr_26358 = state_26339;
(statearr_26358[(8)] = inst_26305);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(29),inst_26307);
} else {
if((state_val_26340 === (25))){
var inst_26303 = figwheel.client.heads_up.clear.call(null);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(28),inst_26303);
} else {
if((state_val_26340 === (34))){
var inst_26320 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(37),inst_26320);
} else {
if((state_val_26340 === (17))){
var inst_26285 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26359_26404 = state_26339__$1;
(statearr_26359_26404[(2)] = inst_26285);

(statearr_26359_26404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (3))){
var inst_26275 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26275)){
var statearr_26360_26405 = state_26339__$1;
(statearr_26360_26405[(1)] = (13));

} else {
var statearr_26361_26406 = state_26339__$1;
(statearr_26361_26406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (12))){
var inst_26271 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26362_26407 = state_26339__$1;
(statearr_26362_26407[(2)] = inst_26271);

(statearr_26362_26407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (2))){
var inst_26258 = (state_26339[(7)]);
var inst_26258__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26339__$1 = (function (){var statearr_26363 = state_26339;
(statearr_26363[(7)] = inst_26258__$1);

return statearr_26363;
})();
if(cljs.core.truth_(inst_26258__$1)){
var statearr_26364_26408 = state_26339__$1;
(statearr_26364_26408[(1)] = (5));

} else {
var statearr_26365_26409 = state_26339__$1;
(statearr_26365_26409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (23))){
var inst_26301 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26301)){
var statearr_26366_26410 = state_26339__$1;
(statearr_26366_26410[(1)] = (25));

} else {
var statearr_26367_26411 = state_26339__$1;
(statearr_26367_26411[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (35))){
var state_26339__$1 = state_26339;
var statearr_26368_26412 = state_26339__$1;
(statearr_26368_26412[(2)] = null);

(statearr_26368_26412[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (19))){
var inst_26296 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26296)){
var statearr_26369_26413 = state_26339__$1;
(statearr_26369_26413[(1)] = (22));

} else {
var statearr_26370_26414 = state_26339__$1;
(statearr_26370_26414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (11))){
var inst_26267 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26371_26415 = state_26339__$1;
(statearr_26371_26415[(2)] = inst_26267);

(statearr_26371_26415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (9))){
var inst_26269 = figwheel.client.heads_up.clear.call(null);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(12),inst_26269);
} else {
if((state_val_26340 === (5))){
var inst_26260 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26339__$1 = state_26339;
var statearr_26372_26416 = state_26339__$1;
(statearr_26372_26416[(2)] = inst_26260);

(statearr_26372_26416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (14))){
var inst_26287 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26287)){
var statearr_26373_26417 = state_26339__$1;
(statearr_26373_26417[(1)] = (18));

} else {
var statearr_26374_26418 = state_26339__$1;
(statearr_26374_26418[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (26))){
var inst_26311 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26339__$1 = state_26339;
if(cljs.core.truth_(inst_26311)){
var statearr_26375_26419 = state_26339__$1;
(statearr_26375_26419[(1)] = (30));

} else {
var statearr_26376_26420 = state_26339__$1;
(statearr_26376_26420[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (16))){
var inst_26279 = (state_26339[(2)]);
var inst_26280 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26281 = figwheel.client.format_messages.call(null,inst_26280);
var inst_26282 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26283 = figwheel.client.heads_up.display_error.call(null,inst_26281,inst_26282);
var state_26339__$1 = (function (){var statearr_26377 = state_26339;
(statearr_26377[(9)] = inst_26279);

return statearr_26377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(17),inst_26283);
} else {
if((state_val_26340 === (30))){
var inst_26313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26314 = figwheel.client.heads_up.display_warning.call(null,inst_26313);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(33),inst_26314);
} else {
if((state_val_26340 === (10))){
var inst_26273 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26378_26421 = state_26339__$1;
(statearr_26378_26421[(2)] = inst_26273);

(statearr_26378_26421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (18))){
var inst_26289 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26290 = figwheel.client.format_messages.call(null,inst_26289);
var inst_26291 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26292 = figwheel.client.heads_up.display_error.call(null,inst_26290,inst_26291);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(21),inst_26292);
} else {
if((state_val_26340 === (37))){
var inst_26322 = (state_26339[(2)]);
var state_26339__$1 = state_26339;
var statearr_26379_26422 = state_26339__$1;
(statearr_26379_26422[(2)] = inst_26322);

(statearr_26379_26422[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26340 === (8))){
var inst_26265 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26339__$1 = state_26339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26339__$1,(11),inst_26265);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18851__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18830__auto__,c__18851__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____0 = (function (){
var statearr_26383 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26383[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__);

(statearr_26383[(1)] = (1));

return statearr_26383;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____1 = (function (state_26339){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_26339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e26384){if((e26384 instanceof Object)){
var ex__18834__auto__ = e26384;
var statearr_26385_26423 = state_26339;
(statearr_26385_26423[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26424 = state_26339;
state_26339 = G__26424;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__ = function(state_26339){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____1.call(this,state_26339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__,msg_hist,msg_names,msg))
})();
var state__18853__auto__ = (function (){var statearr_26386 = f__18852__auto__.call(null);
(statearr_26386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__,msg_hist,msg_names,msg))
);

return c__18851__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18851__auto___26487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___26487,ch){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___26487,ch){
return (function (state_26470){
var state_val_26471 = (state_26470[(1)]);
if((state_val_26471 === (1))){
var state_26470__$1 = state_26470;
var statearr_26472_26488 = state_26470__$1;
(statearr_26472_26488[(2)] = null);

(statearr_26472_26488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (2))){
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26470__$1,(4),ch);
} else {
if((state_val_26471 === (3))){
var inst_26468 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26470__$1,inst_26468);
} else {
if((state_val_26471 === (4))){
var inst_26458 = (state_26470[(7)]);
var inst_26458__$1 = (state_26470[(2)]);
var state_26470__$1 = (function (){var statearr_26473 = state_26470;
(statearr_26473[(7)] = inst_26458__$1);

return statearr_26473;
})();
if(cljs.core.truth_(inst_26458__$1)){
var statearr_26474_26489 = state_26470__$1;
(statearr_26474_26489[(1)] = (5));

} else {
var statearr_26475_26490 = state_26470__$1;
(statearr_26475_26490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (5))){
var inst_26458 = (state_26470[(7)]);
var inst_26460 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26458);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26470__$1,(8),inst_26460);
} else {
if((state_val_26471 === (6))){
var state_26470__$1 = state_26470;
var statearr_26476_26491 = state_26470__$1;
(statearr_26476_26491[(2)] = null);

(statearr_26476_26491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (7))){
var inst_26466 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26477_26492 = state_26470__$1;
(statearr_26477_26492[(2)] = inst_26466);

(statearr_26477_26492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (8))){
var inst_26462 = (state_26470[(2)]);
var state_26470__$1 = (function (){var statearr_26478 = state_26470;
(statearr_26478[(8)] = inst_26462);

return statearr_26478;
})();
var statearr_26479_26493 = state_26470__$1;
(statearr_26479_26493[(2)] = null);

(statearr_26479_26493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18851__auto___26487,ch))
;
return ((function (switch__18830__auto__,c__18851__auto___26487,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18831__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18831__auto____0 = (function (){
var statearr_26483 = [null,null,null,null,null,null,null,null,null];
(statearr_26483[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18831__auto__);

(statearr_26483[(1)] = (1));

return statearr_26483;
});
var figwheel$client$heads_up_plugin_$_state_machine__18831__auto____1 = (function (state_26470){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_26470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object)){
var ex__18834__auto__ = e26484;
var statearr_26485_26494 = state_26470;
(statearr_26485_26494[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26495 = state_26470;
state_26470 = G__26495;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18831__auto__ = function(state_26470){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18831__auto____1.call(this,state_26470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18831__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18831__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___26487,ch))
})();
var state__18853__auto__ = (function (){var statearr_26486 = f__18852__auto__.call(null);
(statearr_26486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___26487);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___26487,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_26516){
var state_val_26517 = (state_26516[(1)]);
if((state_val_26517 === (1))){
var inst_26511 = cljs.core.async.timeout.call(null,(3000));
var state_26516__$1 = state_26516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26516__$1,(2),inst_26511);
} else {
if((state_val_26517 === (2))){
var inst_26513 = (state_26516[(2)]);
var inst_26514 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26516__$1 = (function (){var statearr_26518 = state_26516;
(statearr_26518[(7)] = inst_26513);

return statearr_26518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26516__$1,inst_26514);
} else {
return null;
}
}
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____0 = (function (){
var statearr_26522 = [null,null,null,null,null,null,null,null];
(statearr_26522[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__);

(statearr_26522[(1)] = (1));

return statearr_26522;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____1 = (function (state_26516){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_26516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e26523){if((e26523 instanceof Object)){
var ex__18834__auto__ = e26523;
var statearr_26524_26526 = state_26516;
(statearr_26524_26526[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26527 = state_26516;
state_26516 = G__26527;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__ = function(state_26516){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____1.call(this,state_26516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_26525 = f__18852__auto__.call(null);
(statearr_26525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_26525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26528){
var map__26535 = p__26528;
var map__26535__$1 = ((((!((map__26535 == null)))?((((map__26535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26535):map__26535);
var ed = map__26535__$1;
var formatted_exception = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26537_26541 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26538_26542 = null;
var count__26539_26543 = (0);
var i__26540_26544 = (0);
while(true){
if((i__26540_26544 < count__26539_26543)){
var msg_26545 = cljs.core._nth.call(null,chunk__26538_26542,i__26540_26544);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26545);

var G__26546 = seq__26537_26541;
var G__26547 = chunk__26538_26542;
var G__26548 = count__26539_26543;
var G__26549 = (i__26540_26544 + (1));
seq__26537_26541 = G__26546;
chunk__26538_26542 = G__26547;
count__26539_26543 = G__26548;
i__26540_26544 = G__26549;
continue;
} else {
var temp__4425__auto___26550 = cljs.core.seq.call(null,seq__26537_26541);
if(temp__4425__auto___26550){
var seq__26537_26551__$1 = temp__4425__auto___26550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26537_26551__$1)){
var c__17629__auto___26552 = cljs.core.chunk_first.call(null,seq__26537_26551__$1);
var G__26553 = cljs.core.chunk_rest.call(null,seq__26537_26551__$1);
var G__26554 = c__17629__auto___26552;
var G__26555 = cljs.core.count.call(null,c__17629__auto___26552);
var G__26556 = (0);
seq__26537_26541 = G__26553;
chunk__26538_26542 = G__26554;
count__26539_26543 = G__26555;
i__26540_26544 = G__26556;
continue;
} else {
var msg_26557 = cljs.core.first.call(null,seq__26537_26551__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26557);

var G__26558 = cljs.core.next.call(null,seq__26537_26551__$1);
var G__26559 = null;
var G__26560 = (0);
var G__26561 = (0);
seq__26537_26541 = G__26558;
chunk__26538_26542 = G__26559;
count__26539_26543 = G__26560;
i__26540_26544 = G__26561;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26562){
var map__26565 = p__26562;
var map__26565__$1 = ((((!((map__26565 == null)))?((((map__26565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26565):map__26565);
var w = map__26565__$1;
var message = cljs.core.get.call(null,map__26565__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26573 = cljs.core.seq.call(null,plugins);
var chunk__26574 = null;
var count__26575 = (0);
var i__26576 = (0);
while(true){
if((i__26576 < count__26575)){
var vec__26577 = cljs.core._nth.call(null,chunk__26574,i__26576);
var k = cljs.core.nth.call(null,vec__26577,(0),null);
var plugin = cljs.core.nth.call(null,vec__26577,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26579 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26573,chunk__26574,count__26575,i__26576,pl_26579,vec__26577,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26579.call(null,msg_hist);
});})(seq__26573,chunk__26574,count__26575,i__26576,pl_26579,vec__26577,k,plugin))
);
} else {
}

var G__26580 = seq__26573;
var G__26581 = chunk__26574;
var G__26582 = count__26575;
var G__26583 = (i__26576 + (1));
seq__26573 = G__26580;
chunk__26574 = G__26581;
count__26575 = G__26582;
i__26576 = G__26583;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26573);
if(temp__4425__auto__){
var seq__26573__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26573__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26573__$1);
var G__26584 = cljs.core.chunk_rest.call(null,seq__26573__$1);
var G__26585 = c__17629__auto__;
var G__26586 = cljs.core.count.call(null,c__17629__auto__);
var G__26587 = (0);
seq__26573 = G__26584;
chunk__26574 = G__26585;
count__26575 = G__26586;
i__26576 = G__26587;
continue;
} else {
var vec__26578 = cljs.core.first.call(null,seq__26573__$1);
var k = cljs.core.nth.call(null,vec__26578,(0),null);
var plugin = cljs.core.nth.call(null,vec__26578,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26588 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26573,chunk__26574,count__26575,i__26576,pl_26588,vec__26578,k,plugin,seq__26573__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26588.call(null,msg_hist);
});})(seq__26573,chunk__26574,count__26575,i__26576,pl_26588,vec__26578,k,plugin,seq__26573__$1,temp__4425__auto__))
);
} else {
}

var G__26589 = cljs.core.next.call(null,seq__26573__$1);
var G__26590 = null;
var G__26591 = (0);
var G__26592 = (0);
seq__26573 = G__26589;
chunk__26574 = G__26590;
count__26575 = G__26591;
i__26576 = G__26592;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26593 = [];
var len__17884__auto___26596 = arguments.length;
var i__17885__auto___26597 = (0);
while(true){
if((i__17885__auto___26597 < len__17884__auto___26596)){
args26593.push((arguments[i__17885__auto___26597]));

var G__26598 = (i__17885__auto___26597 + (1));
i__17885__auto___26597 = G__26598;
continue;
} else {
}
break;
}

var G__26595 = args26593.length;
switch (G__26595) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26593.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26604 = arguments.length;
var i__17885__auto___26605 = (0);
while(true){
if((i__17885__auto___26605 < len__17884__auto___26604)){
args__17891__auto__.push((arguments[i__17885__auto___26605]));

var G__26606 = (i__17885__auto___26605 + (1));
i__17885__auto___26605 = G__26606;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26601){
var map__26602 = p__26601;
var map__26602__$1 = ((((!((map__26602 == null)))?((((map__26602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26602):map__26602);
var opts = map__26602__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26600){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26600));
});

//# sourceMappingURL=client.js.map