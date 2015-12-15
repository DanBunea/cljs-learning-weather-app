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
var pred__33219 = cljs.core._EQ_;
var expr__33220 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__33219.call(null,"true",expr__33220))){
return true;
} else {
if(cljs.core.truth_(pred__33219.call(null,"false",expr__33220))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33220)].join('')));
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
var G__33222__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33223__i = 0, G__33223__a = new Array(arguments.length -  0);
while (G__33223__i < G__33223__a.length) {G__33223__a[G__33223__i] = arguments[G__33223__i + 0]; ++G__33223__i;}
  args = new cljs.core.IndexedSeq(G__33223__a,0);
} 
return G__33222__delegate.call(this,args);};
G__33222.cljs$lang$maxFixedArity = 0;
G__33222.cljs$lang$applyTo = (function (arglist__33224){
var args = cljs.core.seq(arglist__33224);
return G__33222__delegate(args);
});
G__33222.cljs$core$IFn$_invoke$arity$variadic = G__33222__delegate;
return G__33222;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33225){
var map__33228 = p__33225;
var map__33228__$1 = ((((!((map__33228 == null)))?((((map__33228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33228):map__33228);
var message = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20078__auto___33390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___33390,ch){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___33390,ch){
return (function (state_33359){
var state_val_33360 = (state_33359[(1)]);
if((state_val_33360 === (7))){
var inst_33355 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33361_33391 = state_33359__$1;
(statearr_33361_33391[(2)] = inst_33355);

(statearr_33361_33391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (1))){
var state_33359__$1 = state_33359;
var statearr_33362_33392 = state_33359__$1;
(statearr_33362_33392[(2)] = null);

(statearr_33362_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (4))){
var inst_33312 = (state_33359[(7)]);
var inst_33312__$1 = (state_33359[(2)]);
var state_33359__$1 = (function (){var statearr_33363 = state_33359;
(statearr_33363[(7)] = inst_33312__$1);

return statearr_33363;
})();
if(cljs.core.truth_(inst_33312__$1)){
var statearr_33364_33393 = state_33359__$1;
(statearr_33364_33393[(1)] = (5));

} else {
var statearr_33365_33394 = state_33359__$1;
(statearr_33365_33394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (15))){
var inst_33319 = (state_33359[(8)]);
var inst_33334 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33319);
var inst_33335 = cljs.core.first.call(null,inst_33334);
var inst_33336 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33335);
var inst_33337 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33336)].join('');
var inst_33338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33337);
var state_33359__$1 = state_33359;
var statearr_33366_33395 = state_33359__$1;
(statearr_33366_33395[(2)] = inst_33338);

(statearr_33366_33395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (13))){
var inst_33343 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33367_33396 = state_33359__$1;
(statearr_33367_33396[(2)] = inst_33343);

(statearr_33367_33396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (6))){
var state_33359__$1 = state_33359;
var statearr_33368_33397 = state_33359__$1;
(statearr_33368_33397[(2)] = null);

(statearr_33368_33397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (17))){
var inst_33341 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33369_33398 = state_33359__$1;
(statearr_33369_33398[(2)] = inst_33341);

(statearr_33369_33398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (3))){
var inst_33357 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33359__$1,inst_33357);
} else {
if((state_val_33360 === (12))){
var inst_33318 = (state_33359[(9)]);
var inst_33332 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33318,opts);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33332)){
var statearr_33370_33399 = state_33359__$1;
(statearr_33370_33399[(1)] = (15));

} else {
var statearr_33371_33400 = state_33359__$1;
(statearr_33371_33400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (2))){
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33359__$1,(4),ch);
} else {
if((state_val_33360 === (11))){
var inst_33319 = (state_33359[(8)]);
var inst_33324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33325 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33319);
var inst_33326 = cljs.core.async.timeout.call(null,(1000));
var inst_33327 = [inst_33325,inst_33326];
var inst_33328 = (new cljs.core.PersistentVector(null,2,(5),inst_33324,inst_33327,null));
var state_33359__$1 = state_33359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33359__$1,(14),inst_33328);
} else {
if((state_val_33360 === (9))){
var inst_33319 = (state_33359[(8)]);
var inst_33345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33319);
var inst_33347 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33346);
var inst_33348 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33347)].join('');
var inst_33349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33348);
var state_33359__$1 = (function (){var statearr_33372 = state_33359;
(statearr_33372[(10)] = inst_33345);

return statearr_33372;
})();
var statearr_33373_33401 = state_33359__$1;
(statearr_33373_33401[(2)] = inst_33349);

(statearr_33373_33401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (5))){
var inst_33312 = (state_33359[(7)]);
var inst_33314 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33315 = (new cljs.core.PersistentArrayMap(null,2,inst_33314,null));
var inst_33316 = (new cljs.core.PersistentHashSet(null,inst_33315,null));
var inst_33317 = figwheel.client.focus_msgs.call(null,inst_33316,inst_33312);
var inst_33318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33317);
var inst_33319 = cljs.core.first.call(null,inst_33317);
var inst_33320 = figwheel.client.autoload_QMARK_.call(null);
var state_33359__$1 = (function (){var statearr_33374 = state_33359;
(statearr_33374[(9)] = inst_33318);

(statearr_33374[(8)] = inst_33319);

return statearr_33374;
})();
if(cljs.core.truth_(inst_33320)){
var statearr_33375_33402 = state_33359__$1;
(statearr_33375_33402[(1)] = (8));

} else {
var statearr_33376_33403 = state_33359__$1;
(statearr_33376_33403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (14))){
var inst_33330 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33377_33404 = state_33359__$1;
(statearr_33377_33404[(2)] = inst_33330);

(statearr_33377_33404[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (16))){
var state_33359__$1 = state_33359;
var statearr_33378_33405 = state_33359__$1;
(statearr_33378_33405[(2)] = null);

(statearr_33378_33405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (10))){
var inst_33351 = (state_33359[(2)]);
var state_33359__$1 = (function (){var statearr_33379 = state_33359;
(statearr_33379[(11)] = inst_33351);

return statearr_33379;
})();
var statearr_33380_33406 = state_33359__$1;
(statearr_33380_33406[(2)] = null);

(statearr_33380_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (8))){
var inst_33318 = (state_33359[(9)]);
var inst_33322 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33318,opts);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33322)){
var statearr_33381_33407 = state_33359__$1;
(statearr_33381_33407[(1)] = (11));

} else {
var statearr_33382_33408 = state_33359__$1;
(statearr_33382_33408[(1)] = (12));

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
});})(c__20078__auto___33390,ch))
;
return ((function (switch__19966__auto__,c__20078__auto___33390,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1 = (function (state_33359){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object)){
var ex__19970__auto__ = e33387;
var statearr_33388_33409 = state_33359;
(statearr_33388_33409[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33410 = state_33359;
state_33359 = G__33410;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__ = function(state_33359){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1.call(this,state_33359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___33390,ch))
})();
var state__20080__auto__ = (function (){var statearr_33389 = f__20079__auto__.call(null);
(statearr_33389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___33390);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___33390,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33411_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33411_SHARP_));
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
var base_path_33418 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33418){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_33416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33417 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33416,_STAR_print_newline_STAR_33417,base_path_33418){
return (function() { 
var G__33419__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33420__i = 0, G__33420__a = new Array(arguments.length -  0);
while (G__33420__i < G__33420__a.length) {G__33420__a[G__33420__i] = arguments[G__33420__i + 0]; ++G__33420__i;}
  args = new cljs.core.IndexedSeq(G__33420__a,0);
} 
return G__33419__delegate.call(this,args);};
G__33419.cljs$lang$maxFixedArity = 0;
G__33419.cljs$lang$applyTo = (function (arglist__33421){
var args = cljs.core.seq(arglist__33421);
return G__33419__delegate(args);
});
G__33419.cljs$core$IFn$_invoke$arity$variadic = G__33419__delegate;
return G__33419;
})()
;})(_STAR_print_fn_STAR_33416,_STAR_print_newline_STAR_33417,base_path_33418))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33417;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33416;
}}catch (e33415){if((e33415 instanceof Error)){
var e = e33415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33418], null));
} else {
var e = e33415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33418))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33422){
var map__33429 = p__33422;
var map__33429__$1 = ((((!((map__33429 == null)))?((((map__33429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33429):map__33429);
var opts = map__33429__$1;
var build_id = cljs.core.get.call(null,map__33429__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33429,map__33429__$1,opts,build_id){
return (function (p__33431){
var vec__33432 = p__33431;
var map__33433 = cljs.core.nth.call(null,vec__33432,(0),null);
var map__33433__$1 = ((((!((map__33433 == null)))?((((map__33433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33433):map__33433);
var msg = map__33433__$1;
var msg_name = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33432,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33432,map__33433,map__33433__$1,msg,msg_name,_,map__33429,map__33429__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33432,map__33433,map__33433__$1,msg,msg_name,_,map__33429,map__33429__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33429,map__33429__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33439){
var vec__33440 = p__33439;
var map__33441 = cljs.core.nth.call(null,vec__33440,(0),null);
var map__33441__$1 = ((((!((map__33441 == null)))?((((map__33441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33441):map__33441);
var msg = map__33441__$1;
var msg_name = cljs.core.get.call(null,map__33441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33440,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33443){
var map__33453 = p__33443;
var map__33453__$1 = ((((!((map__33453 == null)))?((((map__33453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33453):map__33453);
var on_compile_warning = cljs.core.get.call(null,map__33453__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33453__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33453,map__33453__$1,on_compile_warning,on_compile_fail){
return (function (p__33455){
var vec__33456 = p__33455;
var map__33457 = cljs.core.nth.call(null,vec__33456,(0),null);
var map__33457__$1 = ((((!((map__33457 == null)))?((((map__33457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33457):map__33457);
var msg = map__33457__$1;
var msg_name = cljs.core.get.call(null,map__33457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33456,(1));
var pred__33459 = cljs.core._EQ_;
var expr__33460 = msg_name;
if(cljs.core.truth_(pred__33459.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33460))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33459.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33460))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33453,map__33453__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,msg_hist,msg_names,msg){
return (function (state_33676){
var state_val_33677 = (state_33676[(1)]);
if((state_val_33677 === (7))){
var inst_33600 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33600)){
var statearr_33678_33724 = state_33676__$1;
(statearr_33678_33724[(1)] = (8));

} else {
var statearr_33679_33725 = state_33676__$1;
(statearr_33679_33725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (20))){
var inst_33670 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33680_33726 = state_33676__$1;
(statearr_33680_33726[(2)] = inst_33670);

(statearr_33680_33726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (27))){
var inst_33666 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33681_33727 = state_33676__$1;
(statearr_33681_33727[(2)] = inst_33666);

(statearr_33681_33727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (1))){
var inst_33593 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33593)){
var statearr_33682_33728 = state_33676__$1;
(statearr_33682_33728[(1)] = (2));

} else {
var statearr_33683_33729 = state_33676__$1;
(statearr_33683_33729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (24))){
var inst_33668 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33684_33730 = state_33676__$1;
(statearr_33684_33730[(2)] = inst_33668);

(statearr_33684_33730[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (4))){
var inst_33674 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33676__$1,inst_33674);
} else {
if((state_val_33677 === (15))){
var inst_33672 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33685_33731 = state_33676__$1;
(statearr_33685_33731[(2)] = inst_33672);

(statearr_33685_33731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (21))){
var inst_33631 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33686_33732 = state_33676__$1;
(statearr_33686_33732[(2)] = inst_33631);

(statearr_33686_33732[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (31))){
var inst_33655 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33655)){
var statearr_33687_33733 = state_33676__$1;
(statearr_33687_33733[(1)] = (34));

} else {
var statearr_33688_33734 = state_33676__$1;
(statearr_33688_33734[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (32))){
var inst_33664 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33689_33735 = state_33676__$1;
(statearr_33689_33735[(2)] = inst_33664);

(statearr_33689_33735[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (33))){
var inst_33653 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33690_33736 = state_33676__$1;
(statearr_33690_33736[(2)] = inst_33653);

(statearr_33690_33736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (13))){
var inst_33614 = figwheel.client.heads_up.clear.call(null);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(16),inst_33614);
} else {
if((state_val_33677 === (22))){
var inst_33635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33636 = figwheel.client.heads_up.append_message.call(null,inst_33635);
var state_33676__$1 = state_33676;
var statearr_33691_33737 = state_33676__$1;
(statearr_33691_33737[(2)] = inst_33636);

(statearr_33691_33737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (36))){
var inst_33662 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33692_33738 = state_33676__$1;
(statearr_33692_33738[(2)] = inst_33662);

(statearr_33692_33738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (29))){
var inst_33646 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33693_33739 = state_33676__$1;
(statearr_33693_33739[(2)] = inst_33646);

(statearr_33693_33739[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (6))){
var inst_33595 = (state_33676[(7)]);
var state_33676__$1 = state_33676;
var statearr_33694_33740 = state_33676__$1;
(statearr_33694_33740[(2)] = inst_33595);

(statearr_33694_33740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (28))){
var inst_33642 = (state_33676[(2)]);
var inst_33643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33644 = figwheel.client.heads_up.display_warning.call(null,inst_33643);
var state_33676__$1 = (function (){var statearr_33695 = state_33676;
(statearr_33695[(8)] = inst_33642);

return statearr_33695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(29),inst_33644);
} else {
if((state_val_33677 === (25))){
var inst_33640 = figwheel.client.heads_up.clear.call(null);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(28),inst_33640);
} else {
if((state_val_33677 === (34))){
var inst_33657 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(37),inst_33657);
} else {
if((state_val_33677 === (17))){
var inst_33622 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33696_33741 = state_33676__$1;
(statearr_33696_33741[(2)] = inst_33622);

(statearr_33696_33741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (3))){
var inst_33612 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33612)){
var statearr_33697_33742 = state_33676__$1;
(statearr_33697_33742[(1)] = (13));

} else {
var statearr_33698_33743 = state_33676__$1;
(statearr_33698_33743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (12))){
var inst_33608 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33699_33744 = state_33676__$1;
(statearr_33699_33744[(2)] = inst_33608);

(statearr_33699_33744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (2))){
var inst_33595 = (state_33676[(7)]);
var inst_33595__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33676__$1 = (function (){var statearr_33700 = state_33676;
(statearr_33700[(7)] = inst_33595__$1);

return statearr_33700;
})();
if(cljs.core.truth_(inst_33595__$1)){
var statearr_33701_33745 = state_33676__$1;
(statearr_33701_33745[(1)] = (5));

} else {
var statearr_33702_33746 = state_33676__$1;
(statearr_33702_33746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (23))){
var inst_33638 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33638)){
var statearr_33703_33747 = state_33676__$1;
(statearr_33703_33747[(1)] = (25));

} else {
var statearr_33704_33748 = state_33676__$1;
(statearr_33704_33748[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (35))){
var state_33676__$1 = state_33676;
var statearr_33705_33749 = state_33676__$1;
(statearr_33705_33749[(2)] = null);

(statearr_33705_33749[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (19))){
var inst_33633 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33633)){
var statearr_33706_33750 = state_33676__$1;
(statearr_33706_33750[(1)] = (22));

} else {
var statearr_33707_33751 = state_33676__$1;
(statearr_33707_33751[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (11))){
var inst_33604 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33708_33752 = state_33676__$1;
(statearr_33708_33752[(2)] = inst_33604);

(statearr_33708_33752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (9))){
var inst_33606 = figwheel.client.heads_up.clear.call(null);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(12),inst_33606);
} else {
if((state_val_33677 === (5))){
var inst_33597 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33676__$1 = state_33676;
var statearr_33709_33753 = state_33676__$1;
(statearr_33709_33753[(2)] = inst_33597);

(statearr_33709_33753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (14))){
var inst_33624 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33624)){
var statearr_33710_33754 = state_33676__$1;
(statearr_33710_33754[(1)] = (18));

} else {
var statearr_33711_33755 = state_33676__$1;
(statearr_33711_33755[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (26))){
var inst_33648 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33676__$1 = state_33676;
if(cljs.core.truth_(inst_33648)){
var statearr_33712_33756 = state_33676__$1;
(statearr_33712_33756[(1)] = (30));

} else {
var statearr_33713_33757 = state_33676__$1;
(statearr_33713_33757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (16))){
var inst_33616 = (state_33676[(2)]);
var inst_33617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33618 = figwheel.client.format_messages.call(null,inst_33617);
var inst_33619 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33620 = figwheel.client.heads_up.display_error.call(null,inst_33618,inst_33619);
var state_33676__$1 = (function (){var statearr_33714 = state_33676;
(statearr_33714[(9)] = inst_33616);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(17),inst_33620);
} else {
if((state_val_33677 === (30))){
var inst_33650 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33651 = figwheel.client.heads_up.display_warning.call(null,inst_33650);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(33),inst_33651);
} else {
if((state_val_33677 === (10))){
var inst_33610 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33715_33758 = state_33676__$1;
(statearr_33715_33758[(2)] = inst_33610);

(statearr_33715_33758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (18))){
var inst_33626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33627 = figwheel.client.format_messages.call(null,inst_33626);
var inst_33628 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33629 = figwheel.client.heads_up.display_error.call(null,inst_33627,inst_33628);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(21),inst_33629);
} else {
if((state_val_33677 === (37))){
var inst_33659 = (state_33676[(2)]);
var state_33676__$1 = state_33676;
var statearr_33716_33759 = state_33676__$1;
(statearr_33716_33759[(2)] = inst_33659);

(statearr_33716_33759[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33677 === (8))){
var inst_33602 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33676__$1 = state_33676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33676__$1,(11),inst_33602);
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
});})(c__20078__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19966__auto__,c__20078__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0 = (function (){
var statearr_33720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33720[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__);

(statearr_33720[(1)] = (1));

return statearr_33720;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1 = (function (state_33676){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33721){if((e33721 instanceof Object)){
var ex__19970__auto__ = e33721;
var statearr_33722_33760 = state_33676;
(statearr_33722_33760[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33761 = state_33676;
state_33676 = G__33761;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__ = function(state_33676){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1.call(this,state_33676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,msg_hist,msg_names,msg))
})();
var state__20080__auto__ = (function (){var statearr_33723 = f__20079__auto__.call(null);
(statearr_33723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_33723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,msg_hist,msg_names,msg))
);

return c__20078__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20078__auto___33824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___33824,ch){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___33824,ch){
return (function (state_33807){
var state_val_33808 = (state_33807[(1)]);
if((state_val_33808 === (1))){
var state_33807__$1 = state_33807;
var statearr_33809_33825 = state_33807__$1;
(statearr_33809_33825[(2)] = null);

(statearr_33809_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (2))){
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33807__$1,(4),ch);
} else {
if((state_val_33808 === (3))){
var inst_33805 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33807__$1,inst_33805);
} else {
if((state_val_33808 === (4))){
var inst_33795 = (state_33807[(7)]);
var inst_33795__$1 = (state_33807[(2)]);
var state_33807__$1 = (function (){var statearr_33810 = state_33807;
(statearr_33810[(7)] = inst_33795__$1);

return statearr_33810;
})();
if(cljs.core.truth_(inst_33795__$1)){
var statearr_33811_33826 = state_33807__$1;
(statearr_33811_33826[(1)] = (5));

} else {
var statearr_33812_33827 = state_33807__$1;
(statearr_33812_33827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (5))){
var inst_33795 = (state_33807[(7)]);
var inst_33797 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33795);
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33807__$1,(8),inst_33797);
} else {
if((state_val_33808 === (6))){
var state_33807__$1 = state_33807;
var statearr_33813_33828 = state_33807__$1;
(statearr_33813_33828[(2)] = null);

(statearr_33813_33828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (7))){
var inst_33803 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
var statearr_33814_33829 = state_33807__$1;
(statearr_33814_33829[(2)] = inst_33803);

(statearr_33814_33829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (8))){
var inst_33799 = (state_33807[(2)]);
var state_33807__$1 = (function (){var statearr_33815 = state_33807;
(statearr_33815[(8)] = inst_33799);

return statearr_33815;
})();
var statearr_33816_33830 = state_33807__$1;
(statearr_33816_33830[(2)] = null);

(statearr_33816_33830[(1)] = (2));


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
});})(c__20078__auto___33824,ch))
;
return ((function (switch__19966__auto__,c__20078__auto___33824,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_33820 = [null,null,null,null,null,null,null,null,null];
(statearr_33820[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19967__auto__);

(statearr_33820[(1)] = (1));

return statearr_33820;
});
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1 = (function (state_33807){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33821){if((e33821 instanceof Object)){
var ex__19970__auto__ = e33821;
var statearr_33822_33831 = state_33807;
(statearr_33822_33831[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33832 = state_33807;
state_33807 = G__33832;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__ = function(state_33807){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1.call(this,state_33807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___33824,ch))
})();
var state__20080__auto__ = (function (){var statearr_33823 = f__20079__auto__.call(null);
(statearr_33823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___33824);

return statearr_33823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___33824,ch))
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
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_33853){
var state_val_33854 = (state_33853[(1)]);
if((state_val_33854 === (1))){
var inst_33848 = cljs.core.async.timeout.call(null,(3000));
var state_33853__$1 = state_33853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33853__$1,(2),inst_33848);
} else {
if((state_val_33854 === (2))){
var inst_33850 = (state_33853[(2)]);
var inst_33851 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33853__$1 = (function (){var statearr_33855 = state_33853;
(statearr_33855[(7)] = inst_33850);

return statearr_33855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33853__$1,inst_33851);
} else {
return null;
}
}
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_33859 = [null,null,null,null,null,null,null,null];
(statearr_33859[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__);

(statearr_33859[(1)] = (1));

return statearr_33859;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1 = (function (state_33853){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33860){if((e33860 instanceof Object)){
var ex__19970__auto__ = e33860;
var statearr_33861_33863 = state_33853;
(statearr_33861_33863[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33864 = state_33853;
state_33853 = G__33864;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__ = function(state_33853){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1.call(this,state_33853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_33862 = f__20079__auto__.call(null);
(statearr_33862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33865){
var map__33872 = p__33865;
var map__33872__$1 = ((((!((map__33872 == null)))?((((map__33872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33872):map__33872);
var ed = map__33872__$1;
var formatted_exception = cljs.core.get.call(null,map__33872__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33872__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33872__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33874_33878 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33875_33879 = null;
var count__33876_33880 = (0);
var i__33877_33881 = (0);
while(true){
if((i__33877_33881 < count__33876_33880)){
var msg_33882 = cljs.core._nth.call(null,chunk__33875_33879,i__33877_33881);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33882);

var G__33883 = seq__33874_33878;
var G__33884 = chunk__33875_33879;
var G__33885 = count__33876_33880;
var G__33886 = (i__33877_33881 + (1));
seq__33874_33878 = G__33883;
chunk__33875_33879 = G__33884;
count__33876_33880 = G__33885;
i__33877_33881 = G__33886;
continue;
} else {
var temp__4425__auto___33887 = cljs.core.seq.call(null,seq__33874_33878);
if(temp__4425__auto___33887){
var seq__33874_33888__$1 = temp__4425__auto___33887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33874_33888__$1)){
var c__17630__auto___33889 = cljs.core.chunk_first.call(null,seq__33874_33888__$1);
var G__33890 = cljs.core.chunk_rest.call(null,seq__33874_33888__$1);
var G__33891 = c__17630__auto___33889;
var G__33892 = cljs.core.count.call(null,c__17630__auto___33889);
var G__33893 = (0);
seq__33874_33878 = G__33890;
chunk__33875_33879 = G__33891;
count__33876_33880 = G__33892;
i__33877_33881 = G__33893;
continue;
} else {
var msg_33894 = cljs.core.first.call(null,seq__33874_33888__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33894);

var G__33895 = cljs.core.next.call(null,seq__33874_33888__$1);
var G__33896 = null;
var G__33897 = (0);
var G__33898 = (0);
seq__33874_33878 = G__33895;
chunk__33875_33879 = G__33896;
count__33876_33880 = G__33897;
i__33877_33881 = G__33898;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33899){
var map__33902 = p__33899;
var map__33902__$1 = ((((!((map__33902 == null)))?((((map__33902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33902):map__33902);
var w = map__33902__$1;
var message = cljs.core.get.call(null,map__33902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__33910 = cljs.core.seq.call(null,plugins);
var chunk__33911 = null;
var count__33912 = (0);
var i__33913 = (0);
while(true){
if((i__33913 < count__33912)){
var vec__33914 = cljs.core._nth.call(null,chunk__33911,i__33913);
var k = cljs.core.nth.call(null,vec__33914,(0),null);
var plugin = cljs.core.nth.call(null,vec__33914,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33916 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33910,chunk__33911,count__33912,i__33913,pl_33916,vec__33914,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33916.call(null,msg_hist);
});})(seq__33910,chunk__33911,count__33912,i__33913,pl_33916,vec__33914,k,plugin))
);
} else {
}

var G__33917 = seq__33910;
var G__33918 = chunk__33911;
var G__33919 = count__33912;
var G__33920 = (i__33913 + (1));
seq__33910 = G__33917;
chunk__33911 = G__33918;
count__33912 = G__33919;
i__33913 = G__33920;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33910);
if(temp__4425__auto__){
var seq__33910__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33910__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__33910__$1);
var G__33921 = cljs.core.chunk_rest.call(null,seq__33910__$1);
var G__33922 = c__17630__auto__;
var G__33923 = cljs.core.count.call(null,c__17630__auto__);
var G__33924 = (0);
seq__33910 = G__33921;
chunk__33911 = G__33922;
count__33912 = G__33923;
i__33913 = G__33924;
continue;
} else {
var vec__33915 = cljs.core.first.call(null,seq__33910__$1);
var k = cljs.core.nth.call(null,vec__33915,(0),null);
var plugin = cljs.core.nth.call(null,vec__33915,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33925 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33910,chunk__33911,count__33912,i__33913,pl_33925,vec__33915,k,plugin,seq__33910__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33925.call(null,msg_hist);
});})(seq__33910,chunk__33911,count__33912,i__33913,pl_33925,vec__33915,k,plugin,seq__33910__$1,temp__4425__auto__))
);
} else {
}

var G__33926 = cljs.core.next.call(null,seq__33910__$1);
var G__33927 = null;
var G__33928 = (0);
var G__33929 = (0);
seq__33910 = G__33926;
chunk__33911 = G__33927;
count__33912 = G__33928;
i__33913 = G__33929;
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
var args33930 = [];
var len__17885__auto___33933 = arguments.length;
var i__17886__auto___33934 = (0);
while(true){
if((i__17886__auto___33934 < len__17885__auto___33933)){
args33930.push((arguments[i__17886__auto___33934]));

var G__33935 = (i__17886__auto___33934 + (1));
i__17886__auto___33934 = G__33935;
continue;
} else {
}
break;
}

var G__33932 = args33930.length;
switch (G__33932) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33930.length)].join('')));

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
var args__17892__auto__ = [];
var len__17885__auto___33941 = arguments.length;
var i__17886__auto___33942 = (0);
while(true){
if((i__17886__auto___33942 < len__17885__auto___33941)){
args__17892__auto__.push((arguments[i__17886__auto___33942]));

var G__33943 = (i__17886__auto___33942 + (1));
i__17886__auto___33942 = G__33943;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((0) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17893__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33938){
var map__33939 = p__33938;
var map__33939__$1 = ((((!((map__33939 == null)))?((((map__33939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33939):map__33939);
var opts = map__33939__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33937){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33937));
});

//# sourceMappingURL=client.js.map