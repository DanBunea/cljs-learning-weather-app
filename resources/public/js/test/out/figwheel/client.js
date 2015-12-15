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
var pred__26125 = cljs.core._EQ_;
var expr__26126 = (function (){var or__16828__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26125.call(null,"true",expr__26126))){
return true;
} else {
if(cljs.core.truth_(pred__26125.call(null,"false",expr__26126))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26126)].join('')));
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
var G__26128__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26129__i = 0, G__26129__a = new Array(arguments.length -  0);
while (G__26129__i < G__26129__a.length) {G__26129__a[G__26129__i] = arguments[G__26129__i + 0]; ++G__26129__i;}
  args = new cljs.core.IndexedSeq(G__26129__a,0);
} 
return G__26128__delegate.call(this,args);};
G__26128.cljs$lang$maxFixedArity = 0;
G__26128.cljs$lang$applyTo = (function (arglist__26130){
var args = cljs.core.seq(arglist__26130);
return G__26128__delegate(args);
});
G__26128.cljs$core$IFn$_invoke$arity$variadic = G__26128__delegate;
return G__26128;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26131){
var map__26134 = p__26131;
var map__26134__$1 = ((((!((map__26134 == null)))?((((map__26134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26134):map__26134);
var message = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16828__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16816__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16816__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16816__auto__;
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
var c__18854__auto___26296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___26296,ch){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___26296,ch){
return (function (state_26265){
var state_val_26266 = (state_26265[(1)]);
if((state_val_26266 === (7))){
var inst_26261 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
var statearr_26267_26297 = state_26265__$1;
(statearr_26267_26297[(2)] = inst_26261);

(statearr_26267_26297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (1))){
var state_26265__$1 = state_26265;
var statearr_26268_26298 = state_26265__$1;
(statearr_26268_26298[(2)] = null);

(statearr_26268_26298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (4))){
var inst_26218 = (state_26265[(7)]);
var inst_26218__$1 = (state_26265[(2)]);
var state_26265__$1 = (function (){var statearr_26269 = state_26265;
(statearr_26269[(7)] = inst_26218__$1);

return statearr_26269;
})();
if(cljs.core.truth_(inst_26218__$1)){
var statearr_26270_26299 = state_26265__$1;
(statearr_26270_26299[(1)] = (5));

} else {
var statearr_26271_26300 = state_26265__$1;
(statearr_26271_26300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (15))){
var inst_26225 = (state_26265[(8)]);
var inst_26240 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26225);
var inst_26241 = cljs.core.first.call(null,inst_26240);
var inst_26242 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26241);
var inst_26243 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26242)].join('');
var inst_26244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26243);
var state_26265__$1 = state_26265;
var statearr_26272_26301 = state_26265__$1;
(statearr_26272_26301[(2)] = inst_26244);

(statearr_26272_26301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (13))){
var inst_26249 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
var statearr_26273_26302 = state_26265__$1;
(statearr_26273_26302[(2)] = inst_26249);

(statearr_26273_26302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (6))){
var state_26265__$1 = state_26265;
var statearr_26274_26303 = state_26265__$1;
(statearr_26274_26303[(2)] = null);

(statearr_26274_26303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (17))){
var inst_26247 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
var statearr_26275_26304 = state_26265__$1;
(statearr_26275_26304[(2)] = inst_26247);

(statearr_26275_26304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (3))){
var inst_26263 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26265__$1,inst_26263);
} else {
if((state_val_26266 === (12))){
var inst_26224 = (state_26265[(9)]);
var inst_26238 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26224,opts);
var state_26265__$1 = state_26265;
if(cljs.core.truth_(inst_26238)){
var statearr_26276_26305 = state_26265__$1;
(statearr_26276_26305[(1)] = (15));

} else {
var statearr_26277_26306 = state_26265__$1;
(statearr_26277_26306[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (2))){
var state_26265__$1 = state_26265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26265__$1,(4),ch);
} else {
if((state_val_26266 === (11))){
var inst_26225 = (state_26265[(8)]);
var inst_26230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26231 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26225);
var inst_26232 = cljs.core.async.timeout.call(null,(1000));
var inst_26233 = [inst_26231,inst_26232];
var inst_26234 = (new cljs.core.PersistentVector(null,2,(5),inst_26230,inst_26233,null));
var state_26265__$1 = state_26265;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26265__$1,(14),inst_26234);
} else {
if((state_val_26266 === (9))){
var inst_26225 = (state_26265[(8)]);
var inst_26251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26252 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26225);
var inst_26253 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26252);
var inst_26254 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26253)].join('');
var inst_26255 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26254);
var state_26265__$1 = (function (){var statearr_26278 = state_26265;
(statearr_26278[(10)] = inst_26251);

return statearr_26278;
})();
var statearr_26279_26307 = state_26265__$1;
(statearr_26279_26307[(2)] = inst_26255);

(statearr_26279_26307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (5))){
var inst_26218 = (state_26265[(7)]);
var inst_26220 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26221 = (new cljs.core.PersistentArrayMap(null,2,inst_26220,null));
var inst_26222 = (new cljs.core.PersistentHashSet(null,inst_26221,null));
var inst_26223 = figwheel.client.focus_msgs.call(null,inst_26222,inst_26218);
var inst_26224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26223);
var inst_26225 = cljs.core.first.call(null,inst_26223);
var inst_26226 = figwheel.client.autoload_QMARK_.call(null);
var state_26265__$1 = (function (){var statearr_26280 = state_26265;
(statearr_26280[(8)] = inst_26225);

(statearr_26280[(9)] = inst_26224);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26226)){
var statearr_26281_26308 = state_26265__$1;
(statearr_26281_26308[(1)] = (8));

} else {
var statearr_26282_26309 = state_26265__$1;
(statearr_26282_26309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (14))){
var inst_26236 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
var statearr_26283_26310 = state_26265__$1;
(statearr_26283_26310[(2)] = inst_26236);

(statearr_26283_26310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (16))){
var state_26265__$1 = state_26265;
var statearr_26284_26311 = state_26265__$1;
(statearr_26284_26311[(2)] = null);

(statearr_26284_26311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (10))){
var inst_26257 = (state_26265[(2)]);
var state_26265__$1 = (function (){var statearr_26285 = state_26265;
(statearr_26285[(11)] = inst_26257);

return statearr_26285;
})();
var statearr_26286_26312 = state_26265__$1;
(statearr_26286_26312[(2)] = null);

(statearr_26286_26312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (8))){
var inst_26224 = (state_26265[(9)]);
var inst_26228 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26224,opts);
var state_26265__$1 = state_26265;
if(cljs.core.truth_(inst_26228)){
var statearr_26287_26313 = state_26265__$1;
(statearr_26287_26313[(1)] = (11));

} else {
var statearr_26288_26314 = state_26265__$1;
(statearr_26288_26314[(1)] = (12));

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
});})(c__18854__auto___26296,ch))
;
return ((function (switch__18833__auto__,c__18854__auto___26296,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18834__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18834__auto____0 = (function (){
var statearr_26292 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26292[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18834__auto__);

(statearr_26292[(1)] = (1));

return statearr_26292;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18834__auto____1 = (function (state_26265){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_26265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e26293){if((e26293 instanceof Object)){
var ex__18837__auto__ = e26293;
var statearr_26294_26315 = state_26265;
(statearr_26294_26315[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26316 = state_26265;
state_26265 = G__26316;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18834__auto__ = function(state_26265){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18834__auto____1.call(this,state_26265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18834__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18834__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___26296,ch))
})();
var state__18856__auto__ = (function (){var statearr_26295 = f__18855__auto__.call(null);
(statearr_26295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___26296);

return statearr_26295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___26296,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26317_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26317_SHARP_));
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
var base_path_26324 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26324){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26322 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26323 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26322,_STAR_print_newline_STAR_26323,base_path_26324){
return (function() { 
var G__26325__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26326__i = 0, G__26326__a = new Array(arguments.length -  0);
while (G__26326__i < G__26326__a.length) {G__26326__a[G__26326__i] = arguments[G__26326__i + 0]; ++G__26326__i;}
  args = new cljs.core.IndexedSeq(G__26326__a,0);
} 
return G__26325__delegate.call(this,args);};
G__26325.cljs$lang$maxFixedArity = 0;
G__26325.cljs$lang$applyTo = (function (arglist__26327){
var args = cljs.core.seq(arglist__26327);
return G__26325__delegate(args);
});
G__26325.cljs$core$IFn$_invoke$arity$variadic = G__26325__delegate;
return G__26325;
})()
;})(_STAR_print_fn_STAR_26322,_STAR_print_newline_STAR_26323,base_path_26324))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26323;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26322;
}}catch (e26321){if((e26321 instanceof Error)){
var e = e26321;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26324], null));
} else {
var e = e26321;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26324))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26328){
var map__26335 = p__26328;
var map__26335__$1 = ((((!((map__26335 == null)))?((((map__26335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26335):map__26335);
var opts = map__26335__$1;
var build_id = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26335,map__26335__$1,opts,build_id){
return (function (p__26337){
var vec__26338 = p__26337;
var map__26339 = cljs.core.nth.call(null,vec__26338,(0),null);
var map__26339__$1 = ((((!((map__26339 == null)))?((((map__26339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26339):map__26339);
var msg = map__26339__$1;
var msg_name = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26338,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26338,map__26339,map__26339__$1,msg,msg_name,_,map__26335,map__26335__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26338,map__26339,map__26339__$1,msg,msg_name,_,map__26335,map__26335__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26335,map__26335__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26345){
var vec__26346 = p__26345;
var map__26347 = cljs.core.nth.call(null,vec__26346,(0),null);
var map__26347__$1 = ((((!((map__26347 == null)))?((((map__26347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26347):map__26347);
var msg = map__26347__$1;
var msg_name = cljs.core.get.call(null,map__26347__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26346,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26349){
var map__26359 = p__26349;
var map__26359__$1 = ((((!((map__26359 == null)))?((((map__26359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26359):map__26359);
var on_compile_warning = cljs.core.get.call(null,map__26359__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26359__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26359,map__26359__$1,on_compile_warning,on_compile_fail){
return (function (p__26361){
var vec__26362 = p__26361;
var map__26363 = cljs.core.nth.call(null,vec__26362,(0),null);
var map__26363__$1 = ((((!((map__26363 == null)))?((((map__26363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26363):map__26363);
var msg = map__26363__$1;
var msg_name = cljs.core.get.call(null,map__26363__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26362,(1));
var pred__26365 = cljs.core._EQ_;
var expr__26366 = msg_name;
if(cljs.core.truth_(pred__26365.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26366))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26365.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26366))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26359,map__26359__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__,msg_hist,msg_names,msg){
return (function (state_26582){
var state_val_26583 = (state_26582[(1)]);
if((state_val_26583 === (7))){
var inst_26506 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26506)){
var statearr_26584_26630 = state_26582__$1;
(statearr_26584_26630[(1)] = (8));

} else {
var statearr_26585_26631 = state_26582__$1;
(statearr_26585_26631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (20))){
var inst_26576 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26586_26632 = state_26582__$1;
(statearr_26586_26632[(2)] = inst_26576);

(statearr_26586_26632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (27))){
var inst_26572 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26587_26633 = state_26582__$1;
(statearr_26587_26633[(2)] = inst_26572);

(statearr_26587_26633[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (1))){
var inst_26499 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26499)){
var statearr_26588_26634 = state_26582__$1;
(statearr_26588_26634[(1)] = (2));

} else {
var statearr_26589_26635 = state_26582__$1;
(statearr_26589_26635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (24))){
var inst_26574 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26590_26636 = state_26582__$1;
(statearr_26590_26636[(2)] = inst_26574);

(statearr_26590_26636[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (4))){
var inst_26580 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26582__$1,inst_26580);
} else {
if((state_val_26583 === (15))){
var inst_26578 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26591_26637 = state_26582__$1;
(statearr_26591_26637[(2)] = inst_26578);

(statearr_26591_26637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (21))){
var inst_26537 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26592_26638 = state_26582__$1;
(statearr_26592_26638[(2)] = inst_26537);

(statearr_26592_26638[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (31))){
var inst_26561 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26561)){
var statearr_26593_26639 = state_26582__$1;
(statearr_26593_26639[(1)] = (34));

} else {
var statearr_26594_26640 = state_26582__$1;
(statearr_26594_26640[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (32))){
var inst_26570 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26595_26641 = state_26582__$1;
(statearr_26595_26641[(2)] = inst_26570);

(statearr_26595_26641[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (33))){
var inst_26559 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26596_26642 = state_26582__$1;
(statearr_26596_26642[(2)] = inst_26559);

(statearr_26596_26642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (13))){
var inst_26520 = figwheel.client.heads_up.clear.call(null);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(16),inst_26520);
} else {
if((state_val_26583 === (22))){
var inst_26541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26542 = figwheel.client.heads_up.append_message.call(null,inst_26541);
var state_26582__$1 = state_26582;
var statearr_26597_26643 = state_26582__$1;
(statearr_26597_26643[(2)] = inst_26542);

(statearr_26597_26643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (36))){
var inst_26568 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26598_26644 = state_26582__$1;
(statearr_26598_26644[(2)] = inst_26568);

(statearr_26598_26644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (29))){
var inst_26552 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26599_26645 = state_26582__$1;
(statearr_26599_26645[(2)] = inst_26552);

(statearr_26599_26645[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (6))){
var inst_26501 = (state_26582[(7)]);
var state_26582__$1 = state_26582;
var statearr_26600_26646 = state_26582__$1;
(statearr_26600_26646[(2)] = inst_26501);

(statearr_26600_26646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (28))){
var inst_26548 = (state_26582[(2)]);
var inst_26549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26550 = figwheel.client.heads_up.display_warning.call(null,inst_26549);
var state_26582__$1 = (function (){var statearr_26601 = state_26582;
(statearr_26601[(8)] = inst_26548);

return statearr_26601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(29),inst_26550);
} else {
if((state_val_26583 === (25))){
var inst_26546 = figwheel.client.heads_up.clear.call(null);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(28),inst_26546);
} else {
if((state_val_26583 === (34))){
var inst_26563 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(37),inst_26563);
} else {
if((state_val_26583 === (17))){
var inst_26528 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26602_26647 = state_26582__$1;
(statearr_26602_26647[(2)] = inst_26528);

(statearr_26602_26647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (3))){
var inst_26518 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26518)){
var statearr_26603_26648 = state_26582__$1;
(statearr_26603_26648[(1)] = (13));

} else {
var statearr_26604_26649 = state_26582__$1;
(statearr_26604_26649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (12))){
var inst_26514 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26605_26650 = state_26582__$1;
(statearr_26605_26650[(2)] = inst_26514);

(statearr_26605_26650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (2))){
var inst_26501 = (state_26582[(7)]);
var inst_26501__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26582__$1 = (function (){var statearr_26606 = state_26582;
(statearr_26606[(7)] = inst_26501__$1);

return statearr_26606;
})();
if(cljs.core.truth_(inst_26501__$1)){
var statearr_26607_26651 = state_26582__$1;
(statearr_26607_26651[(1)] = (5));

} else {
var statearr_26608_26652 = state_26582__$1;
(statearr_26608_26652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (23))){
var inst_26544 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26544)){
var statearr_26609_26653 = state_26582__$1;
(statearr_26609_26653[(1)] = (25));

} else {
var statearr_26610_26654 = state_26582__$1;
(statearr_26610_26654[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (35))){
var state_26582__$1 = state_26582;
var statearr_26611_26655 = state_26582__$1;
(statearr_26611_26655[(2)] = null);

(statearr_26611_26655[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (19))){
var inst_26539 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26539)){
var statearr_26612_26656 = state_26582__$1;
(statearr_26612_26656[(1)] = (22));

} else {
var statearr_26613_26657 = state_26582__$1;
(statearr_26613_26657[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (11))){
var inst_26510 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26614_26658 = state_26582__$1;
(statearr_26614_26658[(2)] = inst_26510);

(statearr_26614_26658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (9))){
var inst_26512 = figwheel.client.heads_up.clear.call(null);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(12),inst_26512);
} else {
if((state_val_26583 === (5))){
var inst_26503 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26582__$1 = state_26582;
var statearr_26615_26659 = state_26582__$1;
(statearr_26615_26659[(2)] = inst_26503);

(statearr_26615_26659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (14))){
var inst_26530 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26530)){
var statearr_26616_26660 = state_26582__$1;
(statearr_26616_26660[(1)] = (18));

} else {
var statearr_26617_26661 = state_26582__$1;
(statearr_26617_26661[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (26))){
var inst_26554 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26554)){
var statearr_26618_26662 = state_26582__$1;
(statearr_26618_26662[(1)] = (30));

} else {
var statearr_26619_26663 = state_26582__$1;
(statearr_26619_26663[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (16))){
var inst_26522 = (state_26582[(2)]);
var inst_26523 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26524 = figwheel.client.format_messages.call(null,inst_26523);
var inst_26525 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26526 = figwheel.client.heads_up.display_error.call(null,inst_26524,inst_26525);
var state_26582__$1 = (function (){var statearr_26620 = state_26582;
(statearr_26620[(9)] = inst_26522);

return statearr_26620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(17),inst_26526);
} else {
if((state_val_26583 === (30))){
var inst_26556 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26557 = figwheel.client.heads_up.display_warning.call(null,inst_26556);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(33),inst_26557);
} else {
if((state_val_26583 === (10))){
var inst_26516 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26621_26664 = state_26582__$1;
(statearr_26621_26664[(2)] = inst_26516);

(statearr_26621_26664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (18))){
var inst_26532 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26533 = figwheel.client.format_messages.call(null,inst_26532);
var inst_26534 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26535 = figwheel.client.heads_up.display_error.call(null,inst_26533,inst_26534);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(21),inst_26535);
} else {
if((state_val_26583 === (37))){
var inst_26565 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26622_26665 = state_26582__$1;
(statearr_26622_26665[(2)] = inst_26565);

(statearr_26622_26665[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (8))){
var inst_26508 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(11),inst_26508);
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
});})(c__18854__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18833__auto__,c__18854__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto____0 = (function (){
var statearr_26626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26626[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto__);

(statearr_26626[(1)] = (1));

return statearr_26626;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto____1 = (function (state_26582){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_26582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object)){
var ex__18837__auto__ = e26627;
var statearr_26628_26666 = state_26582;
(statearr_26628_26666[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26667 = state_26582;
state_26582 = G__26667;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto__ = function(state_26582){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto____1.call(this,state_26582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__,msg_hist,msg_names,msg))
})();
var state__18856__auto__ = (function (){var statearr_26629 = f__18855__auto__.call(null);
(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__,msg_hist,msg_names,msg))
);

return c__18854__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18854__auto___26730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___26730,ch){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___26730,ch){
return (function (state_26713){
var state_val_26714 = (state_26713[(1)]);
if((state_val_26714 === (1))){
var state_26713__$1 = state_26713;
var statearr_26715_26731 = state_26713__$1;
(statearr_26715_26731[(2)] = null);

(statearr_26715_26731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (2))){
var state_26713__$1 = state_26713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26713__$1,(4),ch);
} else {
if((state_val_26714 === (3))){
var inst_26711 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26713__$1,inst_26711);
} else {
if((state_val_26714 === (4))){
var inst_26701 = (state_26713[(7)]);
var inst_26701__$1 = (state_26713[(2)]);
var state_26713__$1 = (function (){var statearr_26716 = state_26713;
(statearr_26716[(7)] = inst_26701__$1);

return statearr_26716;
})();
if(cljs.core.truth_(inst_26701__$1)){
var statearr_26717_26732 = state_26713__$1;
(statearr_26717_26732[(1)] = (5));

} else {
var statearr_26718_26733 = state_26713__$1;
(statearr_26718_26733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (5))){
var inst_26701 = (state_26713[(7)]);
var inst_26703 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26701);
var state_26713__$1 = state_26713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26713__$1,(8),inst_26703);
} else {
if((state_val_26714 === (6))){
var state_26713__$1 = state_26713;
var statearr_26719_26734 = state_26713__$1;
(statearr_26719_26734[(2)] = null);

(statearr_26719_26734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (7))){
var inst_26709 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26720_26735 = state_26713__$1;
(statearr_26720_26735[(2)] = inst_26709);

(statearr_26720_26735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (8))){
var inst_26705 = (state_26713[(2)]);
var state_26713__$1 = (function (){var statearr_26721 = state_26713;
(statearr_26721[(8)] = inst_26705);

return statearr_26721;
})();
var statearr_26722_26736 = state_26713__$1;
(statearr_26722_26736[(2)] = null);

(statearr_26722_26736[(1)] = (2));


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
});})(c__18854__auto___26730,ch))
;
return ((function (switch__18833__auto__,c__18854__auto___26730,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18834__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18834__auto____0 = (function (){
var statearr_26726 = [null,null,null,null,null,null,null,null,null];
(statearr_26726[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18834__auto__);

(statearr_26726[(1)] = (1));

return statearr_26726;
});
var figwheel$client$heads_up_plugin_$_state_machine__18834__auto____1 = (function (state_26713){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_26713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e26727){if((e26727 instanceof Object)){
var ex__18837__auto__ = e26727;
var statearr_26728_26737 = state_26713;
(statearr_26728_26737[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26738 = state_26713;
state_26713 = G__26738;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18834__auto__ = function(state_26713){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18834__auto____1.call(this,state_26713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18834__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18834__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___26730,ch))
})();
var state__18856__auto__ = (function (){var statearr_26729 = f__18855__auto__.call(null);
(statearr_26729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___26730);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___26730,ch))
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
var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (1))){
var inst_26754 = cljs.core.async.timeout.call(null,(3000));
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(2),inst_26754);
} else {
if((state_val_26760 === (2))){
var inst_26756 = (state_26759[(2)]);
var inst_26757 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26759__$1 = (function (){var statearr_26761 = state_26759;
(statearr_26761[(7)] = inst_26756);

return statearr_26761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
return null;
}
}
});})(c__18854__auto__))
;
return ((function (switch__18833__auto__,c__18854__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18834__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18834__auto____0 = (function (){
var statearr_26765 = [null,null,null,null,null,null,null,null];
(statearr_26765[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18834__auto__);

(statearr_26765[(1)] = (1));

return statearr_26765;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18834__auto____1 = (function (state_26759){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e26766){if((e26766 instanceof Object)){
var ex__18837__auto__ = e26766;
var statearr_26767_26769 = state_26759;
(statearr_26767_26769[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26770 = state_26759;
state_26759 = G__26770;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18834__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18834__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18834__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18834__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__))
})();
var state__18856__auto__ = (function (){var statearr_26768 = f__18855__auto__.call(null);
(statearr_26768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_26768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__))
);

return c__18854__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26771){
var map__26778 = p__26771;
var map__26778__$1 = ((((!((map__26778 == null)))?((((map__26778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26778):map__26778);
var ed = map__26778__$1;
var formatted_exception = cljs.core.get.call(null,map__26778__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26778__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26778__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26780_26784 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26781_26785 = null;
var count__26782_26786 = (0);
var i__26783_26787 = (0);
while(true){
if((i__26783_26787 < count__26782_26786)){
var msg_26788 = cljs.core._nth.call(null,chunk__26781_26785,i__26783_26787);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26788);

var G__26789 = seq__26780_26784;
var G__26790 = chunk__26781_26785;
var G__26791 = count__26782_26786;
var G__26792 = (i__26783_26787 + (1));
seq__26780_26784 = G__26789;
chunk__26781_26785 = G__26790;
count__26782_26786 = G__26791;
i__26783_26787 = G__26792;
continue;
} else {
var temp__4425__auto___26793 = cljs.core.seq.call(null,seq__26780_26784);
if(temp__4425__auto___26793){
var seq__26780_26794__$1 = temp__4425__auto___26793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26780_26794__$1)){
var c__17631__auto___26795 = cljs.core.chunk_first.call(null,seq__26780_26794__$1);
var G__26796 = cljs.core.chunk_rest.call(null,seq__26780_26794__$1);
var G__26797 = c__17631__auto___26795;
var G__26798 = cljs.core.count.call(null,c__17631__auto___26795);
var G__26799 = (0);
seq__26780_26784 = G__26796;
chunk__26781_26785 = G__26797;
count__26782_26786 = G__26798;
i__26783_26787 = G__26799;
continue;
} else {
var msg_26800 = cljs.core.first.call(null,seq__26780_26794__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26800);

var G__26801 = cljs.core.next.call(null,seq__26780_26794__$1);
var G__26802 = null;
var G__26803 = (0);
var G__26804 = (0);
seq__26780_26784 = G__26801;
chunk__26781_26785 = G__26802;
count__26782_26786 = G__26803;
i__26783_26787 = G__26804;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26805){
var map__26808 = p__26805;
var map__26808__$1 = ((((!((map__26808 == null)))?((((map__26808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26808):map__26808);
var w = map__26808__$1;
var message = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16816__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16816__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16816__auto__;
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
var seq__26816 = cljs.core.seq.call(null,plugins);
var chunk__26817 = null;
var count__26818 = (0);
var i__26819 = (0);
while(true){
if((i__26819 < count__26818)){
var vec__26820 = cljs.core._nth.call(null,chunk__26817,i__26819);
var k = cljs.core.nth.call(null,vec__26820,(0),null);
var plugin = cljs.core.nth.call(null,vec__26820,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26822 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26816,chunk__26817,count__26818,i__26819,pl_26822,vec__26820,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26822.call(null,msg_hist);
});})(seq__26816,chunk__26817,count__26818,i__26819,pl_26822,vec__26820,k,plugin))
);
} else {
}

var G__26823 = seq__26816;
var G__26824 = chunk__26817;
var G__26825 = count__26818;
var G__26826 = (i__26819 + (1));
seq__26816 = G__26823;
chunk__26817 = G__26824;
count__26818 = G__26825;
i__26819 = G__26826;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26816);
if(temp__4425__auto__){
var seq__26816__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26816__$1)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,seq__26816__$1);
var G__26827 = cljs.core.chunk_rest.call(null,seq__26816__$1);
var G__26828 = c__17631__auto__;
var G__26829 = cljs.core.count.call(null,c__17631__auto__);
var G__26830 = (0);
seq__26816 = G__26827;
chunk__26817 = G__26828;
count__26818 = G__26829;
i__26819 = G__26830;
continue;
} else {
var vec__26821 = cljs.core.first.call(null,seq__26816__$1);
var k = cljs.core.nth.call(null,vec__26821,(0),null);
var plugin = cljs.core.nth.call(null,vec__26821,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26831 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26816,chunk__26817,count__26818,i__26819,pl_26831,vec__26821,k,plugin,seq__26816__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26831.call(null,msg_hist);
});})(seq__26816,chunk__26817,count__26818,i__26819,pl_26831,vec__26821,k,plugin,seq__26816__$1,temp__4425__auto__))
);
} else {
}

var G__26832 = cljs.core.next.call(null,seq__26816__$1);
var G__26833 = null;
var G__26834 = (0);
var G__26835 = (0);
seq__26816 = G__26832;
chunk__26817 = G__26833;
count__26818 = G__26834;
i__26819 = G__26835;
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
var args26836 = [];
var len__17887__auto___26839 = arguments.length;
var i__17888__auto___26840 = (0);
while(true){
if((i__17888__auto___26840 < len__17887__auto___26839)){
args26836.push((arguments[i__17888__auto___26840]));

var G__26841 = (i__17888__auto___26840 + (1));
i__17888__auto___26840 = G__26841;
continue;
} else {
}
break;
}

var G__26838 = args26836.length;
switch (G__26838) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26836.length)].join('')));

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
var args__17894__auto__ = [];
var len__17887__auto___26847 = arguments.length;
var i__17888__auto___26848 = (0);
while(true){
if((i__17888__auto___26848 < len__17887__auto___26847)){
args__17894__auto__.push((arguments[i__17888__auto___26848]));

var G__26849 = (i__17888__auto___26848 + (1));
i__17888__auto___26848 = G__26849;
continue;
} else {
}
break;
}

var argseq__17895__auto__ = ((((0) < args__17894__auto__.length))?(new cljs.core.IndexedSeq(args__17894__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17895__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26844){
var map__26845 = p__26844;
var map__26845__$1 = ((((!((map__26845 == null)))?((((map__26845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26845):map__26845);
var opts = map__26845__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26843){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26843));
});

//# sourceMappingURL=client.js.map