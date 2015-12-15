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
var pred__39221 = cljs.core._EQ_;
var expr__39222 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39221.call(null,"true",expr__39222))){
return true;
} else {
if(cljs.core.truth_(pred__39221.call(null,"false",expr__39222))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39222)].join('')));
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
var G__39224__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39225__i = 0, G__39225__a = new Array(arguments.length -  0);
while (G__39225__i < G__39225__a.length) {G__39225__a[G__39225__i] = arguments[G__39225__i + 0]; ++G__39225__i;}
  args = new cljs.core.IndexedSeq(G__39225__a,0);
} 
return G__39224__delegate.call(this,args);};
G__39224.cljs$lang$maxFixedArity = 0;
G__39224.cljs$lang$applyTo = (function (arglist__39226){
var args = cljs.core.seq(arglist__39226);
return G__39224__delegate(args);
});
G__39224.cljs$core$IFn$_invoke$arity$variadic = G__39224__delegate;
return G__39224;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39227){
var map__39230 = p__39227;
var map__39230__$1 = ((((!((map__39230 == null)))?((((map__39230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39230):map__39230);
var message = cljs.core.get.call(null,map__39230__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20078__auto___39392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___39392,ch){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___39392,ch){
return (function (state_39361){
var state_val_39362 = (state_39361[(1)]);
if((state_val_39362 === (7))){
var inst_39357 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39363_39393 = state_39361__$1;
(statearr_39363_39393[(2)] = inst_39357);

(statearr_39363_39393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (1))){
var state_39361__$1 = state_39361;
var statearr_39364_39394 = state_39361__$1;
(statearr_39364_39394[(2)] = null);

(statearr_39364_39394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (4))){
var inst_39314 = (state_39361[(7)]);
var inst_39314__$1 = (state_39361[(2)]);
var state_39361__$1 = (function (){var statearr_39365 = state_39361;
(statearr_39365[(7)] = inst_39314__$1);

return statearr_39365;
})();
if(cljs.core.truth_(inst_39314__$1)){
var statearr_39366_39395 = state_39361__$1;
(statearr_39366_39395[(1)] = (5));

} else {
var statearr_39367_39396 = state_39361__$1;
(statearr_39367_39396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (15))){
var inst_39321 = (state_39361[(8)]);
var inst_39336 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39321);
var inst_39337 = cljs.core.first.call(null,inst_39336);
var inst_39338 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39337);
var inst_39339 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39338)].join('');
var inst_39340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39339);
var state_39361__$1 = state_39361;
var statearr_39368_39397 = state_39361__$1;
(statearr_39368_39397[(2)] = inst_39340);

(statearr_39368_39397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (13))){
var inst_39345 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39369_39398 = state_39361__$1;
(statearr_39369_39398[(2)] = inst_39345);

(statearr_39369_39398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (6))){
var state_39361__$1 = state_39361;
var statearr_39370_39399 = state_39361__$1;
(statearr_39370_39399[(2)] = null);

(statearr_39370_39399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (17))){
var inst_39343 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39371_39400 = state_39361__$1;
(statearr_39371_39400[(2)] = inst_39343);

(statearr_39371_39400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (3))){
var inst_39359 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39361__$1,inst_39359);
} else {
if((state_val_39362 === (12))){
var inst_39320 = (state_39361[(9)]);
var inst_39334 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39320,opts);
var state_39361__$1 = state_39361;
if(cljs.core.truth_(inst_39334)){
var statearr_39372_39401 = state_39361__$1;
(statearr_39372_39401[(1)] = (15));

} else {
var statearr_39373_39402 = state_39361__$1;
(statearr_39373_39402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (2))){
var state_39361__$1 = state_39361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39361__$1,(4),ch);
} else {
if((state_val_39362 === (11))){
var inst_39321 = (state_39361[(8)]);
var inst_39326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39327 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39321);
var inst_39328 = cljs.core.async.timeout.call(null,(1000));
var inst_39329 = [inst_39327,inst_39328];
var inst_39330 = (new cljs.core.PersistentVector(null,2,(5),inst_39326,inst_39329,null));
var state_39361__$1 = state_39361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39361__$1,(14),inst_39330);
} else {
if((state_val_39362 === (9))){
var inst_39321 = (state_39361[(8)]);
var inst_39347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39321);
var inst_39349 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39348);
var inst_39350 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39349)].join('');
var inst_39351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39350);
var state_39361__$1 = (function (){var statearr_39374 = state_39361;
(statearr_39374[(10)] = inst_39347);

return statearr_39374;
})();
var statearr_39375_39403 = state_39361__$1;
(statearr_39375_39403[(2)] = inst_39351);

(statearr_39375_39403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (5))){
var inst_39314 = (state_39361[(7)]);
var inst_39316 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39317 = (new cljs.core.PersistentArrayMap(null,2,inst_39316,null));
var inst_39318 = (new cljs.core.PersistentHashSet(null,inst_39317,null));
var inst_39319 = figwheel.client.focus_msgs.call(null,inst_39318,inst_39314);
var inst_39320 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39319);
var inst_39321 = cljs.core.first.call(null,inst_39319);
var inst_39322 = figwheel.client.autoload_QMARK_.call(null);
var state_39361__$1 = (function (){var statearr_39376 = state_39361;
(statearr_39376[(9)] = inst_39320);

(statearr_39376[(8)] = inst_39321);

return statearr_39376;
})();
if(cljs.core.truth_(inst_39322)){
var statearr_39377_39404 = state_39361__$1;
(statearr_39377_39404[(1)] = (8));

} else {
var statearr_39378_39405 = state_39361__$1;
(statearr_39378_39405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (14))){
var inst_39332 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39379_39406 = state_39361__$1;
(statearr_39379_39406[(2)] = inst_39332);

(statearr_39379_39406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (16))){
var state_39361__$1 = state_39361;
var statearr_39380_39407 = state_39361__$1;
(statearr_39380_39407[(2)] = null);

(statearr_39380_39407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (10))){
var inst_39353 = (state_39361[(2)]);
var state_39361__$1 = (function (){var statearr_39381 = state_39361;
(statearr_39381[(11)] = inst_39353);

return statearr_39381;
})();
var statearr_39382_39408 = state_39361__$1;
(statearr_39382_39408[(2)] = null);

(statearr_39382_39408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (8))){
var inst_39320 = (state_39361[(9)]);
var inst_39324 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39320,opts);
var state_39361__$1 = state_39361;
if(cljs.core.truth_(inst_39324)){
var statearr_39383_39409 = state_39361__$1;
(statearr_39383_39409[(1)] = (11));

} else {
var statearr_39384_39410 = state_39361__$1;
(statearr_39384_39410[(1)] = (12));

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
});})(c__20078__auto___39392,ch))
;
return ((function (switch__19966__auto__,c__20078__auto___39392,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_39388 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39388[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__);

(statearr_39388[(1)] = (1));

return statearr_39388;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1 = (function (state_39361){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_39361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e39389){if((e39389 instanceof Object)){
var ex__19970__auto__ = e39389;
var statearr_39390_39411 = state_39361;
(statearr_39390_39411[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39412 = state_39361;
state_39361 = G__39412;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__ = function(state_39361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1.call(this,state_39361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___39392,ch))
})();
var state__20080__auto__ = (function (){var statearr_39391 = f__20079__auto__.call(null);
(statearr_39391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___39392);

return statearr_39391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___39392,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39413_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39413_SHARP_));
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
var base_path_39420 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39420){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_39418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_39419 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_39418,_STAR_print_newline_STAR_39419,base_path_39420){
return (function() { 
var G__39421__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39422__i = 0, G__39422__a = new Array(arguments.length -  0);
while (G__39422__i < G__39422__a.length) {G__39422__a[G__39422__i] = arguments[G__39422__i + 0]; ++G__39422__i;}
  args = new cljs.core.IndexedSeq(G__39422__a,0);
} 
return G__39421__delegate.call(this,args);};
G__39421.cljs$lang$maxFixedArity = 0;
G__39421.cljs$lang$applyTo = (function (arglist__39423){
var args = cljs.core.seq(arglist__39423);
return G__39421__delegate(args);
});
G__39421.cljs$core$IFn$_invoke$arity$variadic = G__39421__delegate;
return G__39421;
})()
;})(_STAR_print_fn_STAR_39418,_STAR_print_newline_STAR_39419,base_path_39420))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39419;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39418;
}}catch (e39417){if((e39417 instanceof Error)){
var e = e39417;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39420], null));
} else {
var e = e39417;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39420))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39424){
var map__39431 = p__39424;
var map__39431__$1 = ((((!((map__39431 == null)))?((((map__39431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39431):map__39431);
var opts = map__39431__$1;
var build_id = cljs.core.get.call(null,map__39431__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39431,map__39431__$1,opts,build_id){
return (function (p__39433){
var vec__39434 = p__39433;
var map__39435 = cljs.core.nth.call(null,vec__39434,(0),null);
var map__39435__$1 = ((((!((map__39435 == null)))?((((map__39435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39435):map__39435);
var msg = map__39435__$1;
var msg_name = cljs.core.get.call(null,map__39435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__39434,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39434,map__39435,map__39435__$1,msg,msg_name,_,map__39431,map__39431__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39434,map__39435,map__39435__$1,msg,msg_name,_,map__39431,map__39431__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39431,map__39431__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39441){
var vec__39442 = p__39441;
var map__39443 = cljs.core.nth.call(null,vec__39442,(0),null);
var map__39443__$1 = ((((!((map__39443 == null)))?((((map__39443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39443):map__39443);
var msg = map__39443__$1;
var msg_name = cljs.core.get.call(null,map__39443__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__39442,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39445){
var map__39455 = p__39445;
var map__39455__$1 = ((((!((map__39455 == null)))?((((map__39455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39455):map__39455);
var on_compile_warning = cljs.core.get.call(null,map__39455__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39455__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39455,map__39455__$1,on_compile_warning,on_compile_fail){
return (function (p__39457){
var vec__39458 = p__39457;
var map__39459 = cljs.core.nth.call(null,vec__39458,(0),null);
var map__39459__$1 = ((((!((map__39459 == null)))?((((map__39459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39459):map__39459);
var msg = map__39459__$1;
var msg_name = cljs.core.get.call(null,map__39459__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__39458,(1));
var pred__39461 = cljs.core._EQ_;
var expr__39462 = msg_name;
if(cljs.core.truth_(pred__39461.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39462))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39461.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39462))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39455,map__39455__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,msg_hist,msg_names,msg){
return (function (state_39678){
var state_val_39679 = (state_39678[(1)]);
if((state_val_39679 === (7))){
var inst_39602 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39602)){
var statearr_39680_39726 = state_39678__$1;
(statearr_39680_39726[(1)] = (8));

} else {
var statearr_39681_39727 = state_39678__$1;
(statearr_39681_39727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (20))){
var inst_39672 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39682_39728 = state_39678__$1;
(statearr_39682_39728[(2)] = inst_39672);

(statearr_39682_39728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (27))){
var inst_39668 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39683_39729 = state_39678__$1;
(statearr_39683_39729[(2)] = inst_39668);

(statearr_39683_39729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (1))){
var inst_39595 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39595)){
var statearr_39684_39730 = state_39678__$1;
(statearr_39684_39730[(1)] = (2));

} else {
var statearr_39685_39731 = state_39678__$1;
(statearr_39685_39731[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (24))){
var inst_39670 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39686_39732 = state_39678__$1;
(statearr_39686_39732[(2)] = inst_39670);

(statearr_39686_39732[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (4))){
var inst_39676 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39678__$1,inst_39676);
} else {
if((state_val_39679 === (15))){
var inst_39674 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39687_39733 = state_39678__$1;
(statearr_39687_39733[(2)] = inst_39674);

(statearr_39687_39733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (21))){
var inst_39633 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39688_39734 = state_39678__$1;
(statearr_39688_39734[(2)] = inst_39633);

(statearr_39688_39734[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (31))){
var inst_39657 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39657)){
var statearr_39689_39735 = state_39678__$1;
(statearr_39689_39735[(1)] = (34));

} else {
var statearr_39690_39736 = state_39678__$1;
(statearr_39690_39736[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (32))){
var inst_39666 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39691_39737 = state_39678__$1;
(statearr_39691_39737[(2)] = inst_39666);

(statearr_39691_39737[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (33))){
var inst_39655 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39692_39738 = state_39678__$1;
(statearr_39692_39738[(2)] = inst_39655);

(statearr_39692_39738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (13))){
var inst_39616 = figwheel.client.heads_up.clear.call(null);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(16),inst_39616);
} else {
if((state_val_39679 === (22))){
var inst_39637 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39638 = figwheel.client.heads_up.append_message.call(null,inst_39637);
var state_39678__$1 = state_39678;
var statearr_39693_39739 = state_39678__$1;
(statearr_39693_39739[(2)] = inst_39638);

(statearr_39693_39739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (36))){
var inst_39664 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39694_39740 = state_39678__$1;
(statearr_39694_39740[(2)] = inst_39664);

(statearr_39694_39740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (29))){
var inst_39648 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39695_39741 = state_39678__$1;
(statearr_39695_39741[(2)] = inst_39648);

(statearr_39695_39741[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (6))){
var inst_39597 = (state_39678[(7)]);
var state_39678__$1 = state_39678;
var statearr_39696_39742 = state_39678__$1;
(statearr_39696_39742[(2)] = inst_39597);

(statearr_39696_39742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (28))){
var inst_39644 = (state_39678[(2)]);
var inst_39645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39646 = figwheel.client.heads_up.display_warning.call(null,inst_39645);
var state_39678__$1 = (function (){var statearr_39697 = state_39678;
(statearr_39697[(8)] = inst_39644);

return statearr_39697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(29),inst_39646);
} else {
if((state_val_39679 === (25))){
var inst_39642 = figwheel.client.heads_up.clear.call(null);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(28),inst_39642);
} else {
if((state_val_39679 === (34))){
var inst_39659 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(37),inst_39659);
} else {
if((state_val_39679 === (17))){
var inst_39624 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39698_39743 = state_39678__$1;
(statearr_39698_39743[(2)] = inst_39624);

(statearr_39698_39743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (3))){
var inst_39614 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39614)){
var statearr_39699_39744 = state_39678__$1;
(statearr_39699_39744[(1)] = (13));

} else {
var statearr_39700_39745 = state_39678__$1;
(statearr_39700_39745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (12))){
var inst_39610 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39701_39746 = state_39678__$1;
(statearr_39701_39746[(2)] = inst_39610);

(statearr_39701_39746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (2))){
var inst_39597 = (state_39678[(7)]);
var inst_39597__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39678__$1 = (function (){var statearr_39702 = state_39678;
(statearr_39702[(7)] = inst_39597__$1);

return statearr_39702;
})();
if(cljs.core.truth_(inst_39597__$1)){
var statearr_39703_39747 = state_39678__$1;
(statearr_39703_39747[(1)] = (5));

} else {
var statearr_39704_39748 = state_39678__$1;
(statearr_39704_39748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (23))){
var inst_39640 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39640)){
var statearr_39705_39749 = state_39678__$1;
(statearr_39705_39749[(1)] = (25));

} else {
var statearr_39706_39750 = state_39678__$1;
(statearr_39706_39750[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (35))){
var state_39678__$1 = state_39678;
var statearr_39707_39751 = state_39678__$1;
(statearr_39707_39751[(2)] = null);

(statearr_39707_39751[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (19))){
var inst_39635 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39635)){
var statearr_39708_39752 = state_39678__$1;
(statearr_39708_39752[(1)] = (22));

} else {
var statearr_39709_39753 = state_39678__$1;
(statearr_39709_39753[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (11))){
var inst_39606 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39710_39754 = state_39678__$1;
(statearr_39710_39754[(2)] = inst_39606);

(statearr_39710_39754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (9))){
var inst_39608 = figwheel.client.heads_up.clear.call(null);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(12),inst_39608);
} else {
if((state_val_39679 === (5))){
var inst_39599 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39678__$1 = state_39678;
var statearr_39711_39755 = state_39678__$1;
(statearr_39711_39755[(2)] = inst_39599);

(statearr_39711_39755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (14))){
var inst_39626 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39626)){
var statearr_39712_39756 = state_39678__$1;
(statearr_39712_39756[(1)] = (18));

} else {
var statearr_39713_39757 = state_39678__$1;
(statearr_39713_39757[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (26))){
var inst_39650 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39678__$1 = state_39678;
if(cljs.core.truth_(inst_39650)){
var statearr_39714_39758 = state_39678__$1;
(statearr_39714_39758[(1)] = (30));

} else {
var statearr_39715_39759 = state_39678__$1;
(statearr_39715_39759[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (16))){
var inst_39618 = (state_39678[(2)]);
var inst_39619 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39620 = figwheel.client.format_messages.call(null,inst_39619);
var inst_39621 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39622 = figwheel.client.heads_up.display_error.call(null,inst_39620,inst_39621);
var state_39678__$1 = (function (){var statearr_39716 = state_39678;
(statearr_39716[(9)] = inst_39618);

return statearr_39716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(17),inst_39622);
} else {
if((state_val_39679 === (30))){
var inst_39652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39653 = figwheel.client.heads_up.display_warning.call(null,inst_39652);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(33),inst_39653);
} else {
if((state_val_39679 === (10))){
var inst_39612 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39717_39760 = state_39678__$1;
(statearr_39717_39760[(2)] = inst_39612);

(statearr_39717_39760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (18))){
var inst_39628 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39629 = figwheel.client.format_messages.call(null,inst_39628);
var inst_39630 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39631 = figwheel.client.heads_up.display_error.call(null,inst_39629,inst_39630);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(21),inst_39631);
} else {
if((state_val_39679 === (37))){
var inst_39661 = (state_39678[(2)]);
var state_39678__$1 = state_39678;
var statearr_39718_39761 = state_39678__$1;
(statearr_39718_39761[(2)] = inst_39661);

(statearr_39718_39761[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39679 === (8))){
var inst_39604 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39678__$1 = state_39678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39678__$1,(11),inst_39604);
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
var statearr_39722 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39722[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__);

(statearr_39722[(1)] = (1));

return statearr_39722;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1 = (function (state_39678){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_39678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e39723){if((e39723 instanceof Object)){
var ex__19970__auto__ = e39723;
var statearr_39724_39762 = state_39678;
(statearr_39724_39762[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39763 = state_39678;
state_39678 = G__39763;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__ = function(state_39678){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1.call(this,state_39678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,msg_hist,msg_names,msg))
})();
var state__20080__auto__ = (function (){var statearr_39725 = f__20079__auto__.call(null);
(statearr_39725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_39725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,msg_hist,msg_names,msg))
);

return c__20078__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20078__auto___39826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___39826,ch){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___39826,ch){
return (function (state_39809){
var state_val_39810 = (state_39809[(1)]);
if((state_val_39810 === (1))){
var state_39809__$1 = state_39809;
var statearr_39811_39827 = state_39809__$1;
(statearr_39811_39827[(2)] = null);

(statearr_39811_39827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (2))){
var state_39809__$1 = state_39809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39809__$1,(4),ch);
} else {
if((state_val_39810 === (3))){
var inst_39807 = (state_39809[(2)]);
var state_39809__$1 = state_39809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39809__$1,inst_39807);
} else {
if((state_val_39810 === (4))){
var inst_39797 = (state_39809[(7)]);
var inst_39797__$1 = (state_39809[(2)]);
var state_39809__$1 = (function (){var statearr_39812 = state_39809;
(statearr_39812[(7)] = inst_39797__$1);

return statearr_39812;
})();
if(cljs.core.truth_(inst_39797__$1)){
var statearr_39813_39828 = state_39809__$1;
(statearr_39813_39828[(1)] = (5));

} else {
var statearr_39814_39829 = state_39809__$1;
(statearr_39814_39829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (5))){
var inst_39797 = (state_39809[(7)]);
var inst_39799 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39797);
var state_39809__$1 = state_39809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39809__$1,(8),inst_39799);
} else {
if((state_val_39810 === (6))){
var state_39809__$1 = state_39809;
var statearr_39815_39830 = state_39809__$1;
(statearr_39815_39830[(2)] = null);

(statearr_39815_39830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (7))){
var inst_39805 = (state_39809[(2)]);
var state_39809__$1 = state_39809;
var statearr_39816_39831 = state_39809__$1;
(statearr_39816_39831[(2)] = inst_39805);

(statearr_39816_39831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (8))){
var inst_39801 = (state_39809[(2)]);
var state_39809__$1 = (function (){var statearr_39817 = state_39809;
(statearr_39817[(8)] = inst_39801);

return statearr_39817;
})();
var statearr_39818_39832 = state_39809__$1;
(statearr_39818_39832[(2)] = null);

(statearr_39818_39832[(1)] = (2));


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
});})(c__20078__auto___39826,ch))
;
return ((function (switch__19966__auto__,c__20078__auto___39826,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_39822 = [null,null,null,null,null,null,null,null,null];
(statearr_39822[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19967__auto__);

(statearr_39822[(1)] = (1));

return statearr_39822;
});
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1 = (function (state_39809){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_39809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e39823){if((e39823 instanceof Object)){
var ex__19970__auto__ = e39823;
var statearr_39824_39833 = state_39809;
(statearr_39824_39833[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39834 = state_39809;
state_39809 = G__39834;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__ = function(state_39809){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1.call(this,state_39809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___39826,ch))
})();
var state__20080__auto__ = (function (){var statearr_39825 = f__20079__auto__.call(null);
(statearr_39825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___39826);

return statearr_39825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___39826,ch))
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
return (function (state_39855){
var state_val_39856 = (state_39855[(1)]);
if((state_val_39856 === (1))){
var inst_39850 = cljs.core.async.timeout.call(null,(3000));
var state_39855__$1 = state_39855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39855__$1,(2),inst_39850);
} else {
if((state_val_39856 === (2))){
var inst_39852 = (state_39855[(2)]);
var inst_39853 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39855__$1 = (function (){var statearr_39857 = state_39855;
(statearr_39857[(7)] = inst_39852);

return statearr_39857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39855__$1,inst_39853);
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
var statearr_39861 = [null,null,null,null,null,null,null,null];
(statearr_39861[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__);

(statearr_39861[(1)] = (1));

return statearr_39861;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1 = (function (state_39855){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_39855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e39862){if((e39862 instanceof Object)){
var ex__19970__auto__ = e39862;
var statearr_39863_39865 = state_39855;
(statearr_39863_39865[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39866 = state_39855;
state_39855 = G__39866;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__ = function(state_39855){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1.call(this,state_39855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_39864 = f__20079__auto__.call(null);
(statearr_39864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_39864;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39867){
var map__39874 = p__39867;
var map__39874__$1 = ((((!((map__39874 == null)))?((((map__39874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39874):map__39874);
var ed = map__39874__$1;
var formatted_exception = cljs.core.get.call(null,map__39874__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39874__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39874__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39876_39880 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39877_39881 = null;
var count__39878_39882 = (0);
var i__39879_39883 = (0);
while(true){
if((i__39879_39883 < count__39878_39882)){
var msg_39884 = cljs.core._nth.call(null,chunk__39877_39881,i__39879_39883);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39884);

var G__39885 = seq__39876_39880;
var G__39886 = chunk__39877_39881;
var G__39887 = count__39878_39882;
var G__39888 = (i__39879_39883 + (1));
seq__39876_39880 = G__39885;
chunk__39877_39881 = G__39886;
count__39878_39882 = G__39887;
i__39879_39883 = G__39888;
continue;
} else {
var temp__4425__auto___39889 = cljs.core.seq.call(null,seq__39876_39880);
if(temp__4425__auto___39889){
var seq__39876_39890__$1 = temp__4425__auto___39889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39876_39890__$1)){
var c__17630__auto___39891 = cljs.core.chunk_first.call(null,seq__39876_39890__$1);
var G__39892 = cljs.core.chunk_rest.call(null,seq__39876_39890__$1);
var G__39893 = c__17630__auto___39891;
var G__39894 = cljs.core.count.call(null,c__17630__auto___39891);
var G__39895 = (0);
seq__39876_39880 = G__39892;
chunk__39877_39881 = G__39893;
count__39878_39882 = G__39894;
i__39879_39883 = G__39895;
continue;
} else {
var msg_39896 = cljs.core.first.call(null,seq__39876_39890__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39896);

var G__39897 = cljs.core.next.call(null,seq__39876_39890__$1);
var G__39898 = null;
var G__39899 = (0);
var G__39900 = (0);
seq__39876_39880 = G__39897;
chunk__39877_39881 = G__39898;
count__39878_39882 = G__39899;
i__39879_39883 = G__39900;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39901){
var map__39904 = p__39901;
var map__39904__$1 = ((((!((map__39904 == null)))?((((map__39904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39904):map__39904);
var w = map__39904__$1;
var message = cljs.core.get.call(null,map__39904__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39912 = cljs.core.seq.call(null,plugins);
var chunk__39913 = null;
var count__39914 = (0);
var i__39915 = (0);
while(true){
if((i__39915 < count__39914)){
var vec__39916 = cljs.core._nth.call(null,chunk__39913,i__39915);
var k = cljs.core.nth.call(null,vec__39916,(0),null);
var plugin = cljs.core.nth.call(null,vec__39916,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39912,chunk__39913,count__39914,i__39915,pl_39918,vec__39916,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39918.call(null,msg_hist);
});})(seq__39912,chunk__39913,count__39914,i__39915,pl_39918,vec__39916,k,plugin))
);
} else {
}

var G__39919 = seq__39912;
var G__39920 = chunk__39913;
var G__39921 = count__39914;
var G__39922 = (i__39915 + (1));
seq__39912 = G__39919;
chunk__39913 = G__39920;
count__39914 = G__39921;
i__39915 = G__39922;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39912);
if(temp__4425__auto__){
var seq__39912__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39912__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__39912__$1);
var G__39923 = cljs.core.chunk_rest.call(null,seq__39912__$1);
var G__39924 = c__17630__auto__;
var G__39925 = cljs.core.count.call(null,c__17630__auto__);
var G__39926 = (0);
seq__39912 = G__39923;
chunk__39913 = G__39924;
count__39914 = G__39925;
i__39915 = G__39926;
continue;
} else {
var vec__39917 = cljs.core.first.call(null,seq__39912__$1);
var k = cljs.core.nth.call(null,vec__39917,(0),null);
var plugin = cljs.core.nth.call(null,vec__39917,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39927 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39912,chunk__39913,count__39914,i__39915,pl_39927,vec__39917,k,plugin,seq__39912__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39927.call(null,msg_hist);
});})(seq__39912,chunk__39913,count__39914,i__39915,pl_39927,vec__39917,k,plugin,seq__39912__$1,temp__4425__auto__))
);
} else {
}

var G__39928 = cljs.core.next.call(null,seq__39912__$1);
var G__39929 = null;
var G__39930 = (0);
var G__39931 = (0);
seq__39912 = G__39928;
chunk__39913 = G__39929;
count__39914 = G__39930;
i__39915 = G__39931;
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
var args39932 = [];
var len__17885__auto___39935 = arguments.length;
var i__17886__auto___39936 = (0);
while(true){
if((i__17886__auto___39936 < len__17885__auto___39935)){
args39932.push((arguments[i__17886__auto___39936]));

var G__39937 = (i__17886__auto___39936 + (1));
i__17886__auto___39936 = G__39937;
continue;
} else {
}
break;
}

var G__39934 = args39932.length;
switch (G__39934) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39932.length)].join('')));

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
var len__17885__auto___39943 = arguments.length;
var i__17886__auto___39944 = (0);
while(true){
if((i__17886__auto___39944 < len__17885__auto___39943)){
args__17892__auto__.push((arguments[i__17886__auto___39944]));

var G__39945 = (i__17886__auto___39944 + (1));
i__17886__auto___39944 = G__39945;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((0) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17893__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39940){
var map__39941 = p__39940;
var map__39941__$1 = ((((!((map__39941 == null)))?((((map__39941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39941):map__39941);
var opts = map__39941__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39939){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39939));
});

//# sourceMappingURL=client.js.map?rel=1450190106913