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
var pred__24416 = cljs.core._EQ_;
var expr__24417 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24416.call(null,"true",expr__24417))){
return true;
} else {
if(cljs.core.truth_(pred__24416.call(null,"false",expr__24417))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24417)].join('')));
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
var G__24419__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24420__i = 0, G__24420__a = new Array(arguments.length -  0);
while (G__24420__i < G__24420__a.length) {G__24420__a[G__24420__i] = arguments[G__24420__i + 0]; ++G__24420__i;}
  args = new cljs.core.IndexedSeq(G__24420__a,0);
} 
return G__24419__delegate.call(this,args);};
G__24419.cljs$lang$maxFixedArity = 0;
G__24419.cljs$lang$applyTo = (function (arglist__24421){
var args = cljs.core.seq(arglist__24421);
return G__24419__delegate(args);
});
G__24419.cljs$core$IFn$_invoke$arity$variadic = G__24419__delegate;
return G__24419;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24422){
var map__24425 = p__24422;
var map__24425__$1 = ((((!((map__24425 == null)))?((((map__24425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24425):map__24425);
var message = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20078__auto___24587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___24587,ch){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___24587,ch){
return (function (state_24556){
var state_val_24557 = (state_24556[(1)]);
if((state_val_24557 === (7))){
var inst_24552 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24558_24588 = state_24556__$1;
(statearr_24558_24588[(2)] = inst_24552);

(statearr_24558_24588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (1))){
var state_24556__$1 = state_24556;
var statearr_24559_24589 = state_24556__$1;
(statearr_24559_24589[(2)] = null);

(statearr_24559_24589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (4))){
var inst_24509 = (state_24556[(7)]);
var inst_24509__$1 = (state_24556[(2)]);
var state_24556__$1 = (function (){var statearr_24560 = state_24556;
(statearr_24560[(7)] = inst_24509__$1);

return statearr_24560;
})();
if(cljs.core.truth_(inst_24509__$1)){
var statearr_24561_24590 = state_24556__$1;
(statearr_24561_24590[(1)] = (5));

} else {
var statearr_24562_24591 = state_24556__$1;
(statearr_24562_24591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (15))){
var inst_24516 = (state_24556[(8)]);
var inst_24531 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24516);
var inst_24532 = cljs.core.first.call(null,inst_24531);
var inst_24533 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24532);
var inst_24534 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24533)].join('');
var inst_24535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24534);
var state_24556__$1 = state_24556;
var statearr_24563_24592 = state_24556__$1;
(statearr_24563_24592[(2)] = inst_24535);

(statearr_24563_24592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (13))){
var inst_24540 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24564_24593 = state_24556__$1;
(statearr_24564_24593[(2)] = inst_24540);

(statearr_24564_24593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (6))){
var state_24556__$1 = state_24556;
var statearr_24565_24594 = state_24556__$1;
(statearr_24565_24594[(2)] = null);

(statearr_24565_24594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (17))){
var inst_24538 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24566_24595 = state_24556__$1;
(statearr_24566_24595[(2)] = inst_24538);

(statearr_24566_24595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (3))){
var inst_24554 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24556__$1,inst_24554);
} else {
if((state_val_24557 === (12))){
var inst_24515 = (state_24556[(9)]);
var inst_24529 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24515,opts);
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24529)){
var statearr_24567_24596 = state_24556__$1;
(statearr_24567_24596[(1)] = (15));

} else {
var statearr_24568_24597 = state_24556__$1;
(statearr_24568_24597[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (2))){
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24556__$1,(4),ch);
} else {
if((state_val_24557 === (11))){
var inst_24516 = (state_24556[(8)]);
var inst_24521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24522 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24516);
var inst_24523 = cljs.core.async.timeout.call(null,(1000));
var inst_24524 = [inst_24522,inst_24523];
var inst_24525 = (new cljs.core.PersistentVector(null,2,(5),inst_24521,inst_24524,null));
var state_24556__$1 = state_24556;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24556__$1,(14),inst_24525);
} else {
if((state_val_24557 === (9))){
var inst_24516 = (state_24556[(8)]);
var inst_24542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24543 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24516);
var inst_24544 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24543);
var inst_24545 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24544)].join('');
var inst_24546 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24545);
var state_24556__$1 = (function (){var statearr_24569 = state_24556;
(statearr_24569[(10)] = inst_24542);

return statearr_24569;
})();
var statearr_24570_24598 = state_24556__$1;
(statearr_24570_24598[(2)] = inst_24546);

(statearr_24570_24598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (5))){
var inst_24509 = (state_24556[(7)]);
var inst_24511 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24512 = (new cljs.core.PersistentArrayMap(null,2,inst_24511,null));
var inst_24513 = (new cljs.core.PersistentHashSet(null,inst_24512,null));
var inst_24514 = figwheel.client.focus_msgs.call(null,inst_24513,inst_24509);
var inst_24515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24514);
var inst_24516 = cljs.core.first.call(null,inst_24514);
var inst_24517 = figwheel.client.autoload_QMARK_.call(null);
var state_24556__$1 = (function (){var statearr_24571 = state_24556;
(statearr_24571[(8)] = inst_24516);

(statearr_24571[(9)] = inst_24515);

return statearr_24571;
})();
if(cljs.core.truth_(inst_24517)){
var statearr_24572_24599 = state_24556__$1;
(statearr_24572_24599[(1)] = (8));

} else {
var statearr_24573_24600 = state_24556__$1;
(statearr_24573_24600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (14))){
var inst_24527 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24574_24601 = state_24556__$1;
(statearr_24574_24601[(2)] = inst_24527);

(statearr_24574_24601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (16))){
var state_24556__$1 = state_24556;
var statearr_24575_24602 = state_24556__$1;
(statearr_24575_24602[(2)] = null);

(statearr_24575_24602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (10))){
var inst_24548 = (state_24556[(2)]);
var state_24556__$1 = (function (){var statearr_24576 = state_24556;
(statearr_24576[(11)] = inst_24548);

return statearr_24576;
})();
var statearr_24577_24603 = state_24556__$1;
(statearr_24577_24603[(2)] = null);

(statearr_24577_24603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (8))){
var inst_24515 = (state_24556[(9)]);
var inst_24519 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24515,opts);
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24519)){
var statearr_24578_24604 = state_24556__$1;
(statearr_24578_24604[(1)] = (11));

} else {
var statearr_24579_24605 = state_24556__$1;
(statearr_24579_24605[(1)] = (12));

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
});})(c__20078__auto___24587,ch))
;
return ((function (switch__19966__auto__,c__20078__auto___24587,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_24583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24583[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__);

(statearr_24583[(1)] = (1));

return statearr_24583;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1 = (function (state_24556){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_24556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e24584){if((e24584 instanceof Object)){
var ex__19970__auto__ = e24584;
var statearr_24585_24606 = state_24556;
(statearr_24585_24606[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24607 = state_24556;
state_24556 = G__24607;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__ = function(state_24556){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1.call(this,state_24556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19967__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___24587,ch))
})();
var state__20080__auto__ = (function (){var statearr_24586 = f__20079__auto__.call(null);
(statearr_24586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___24587);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___24587,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24608_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24608_SHARP_));
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
var base_path_24615 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24615){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24613 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24614 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24613,_STAR_print_newline_STAR_24614,base_path_24615){
return (function() { 
var G__24616__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24617__i = 0, G__24617__a = new Array(arguments.length -  0);
while (G__24617__i < G__24617__a.length) {G__24617__a[G__24617__i] = arguments[G__24617__i + 0]; ++G__24617__i;}
  args = new cljs.core.IndexedSeq(G__24617__a,0);
} 
return G__24616__delegate.call(this,args);};
G__24616.cljs$lang$maxFixedArity = 0;
G__24616.cljs$lang$applyTo = (function (arglist__24618){
var args = cljs.core.seq(arglist__24618);
return G__24616__delegate(args);
});
G__24616.cljs$core$IFn$_invoke$arity$variadic = G__24616__delegate;
return G__24616;
})()
;})(_STAR_print_fn_STAR_24613,_STAR_print_newline_STAR_24614,base_path_24615))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24614;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24613;
}}catch (e24612){if((e24612 instanceof Error)){
var e = e24612;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24615], null));
} else {
var e = e24612;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24615))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24619){
var map__24626 = p__24619;
var map__24626__$1 = ((((!((map__24626 == null)))?((((map__24626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24626):map__24626);
var opts = map__24626__$1;
var build_id = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24626,map__24626__$1,opts,build_id){
return (function (p__24628){
var vec__24629 = p__24628;
var map__24630 = cljs.core.nth.call(null,vec__24629,(0),null);
var map__24630__$1 = ((((!((map__24630 == null)))?((((map__24630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24630):map__24630);
var msg = map__24630__$1;
var msg_name = cljs.core.get.call(null,map__24630__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24629,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24629,map__24630,map__24630__$1,msg,msg_name,_,map__24626,map__24626__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24629,map__24630,map__24630__$1,msg,msg_name,_,map__24626,map__24626__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24626,map__24626__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24636){
var vec__24637 = p__24636;
var map__24638 = cljs.core.nth.call(null,vec__24637,(0),null);
var map__24638__$1 = ((((!((map__24638 == null)))?((((map__24638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24638):map__24638);
var msg = map__24638__$1;
var msg_name = cljs.core.get.call(null,map__24638__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24637,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24640){
var map__24650 = p__24640;
var map__24650__$1 = ((((!((map__24650 == null)))?((((map__24650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24650):map__24650);
var on_compile_warning = cljs.core.get.call(null,map__24650__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24650__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24650,map__24650__$1,on_compile_warning,on_compile_fail){
return (function (p__24652){
var vec__24653 = p__24652;
var map__24654 = cljs.core.nth.call(null,vec__24653,(0),null);
var map__24654__$1 = ((((!((map__24654 == null)))?((((map__24654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24654):map__24654);
var msg = map__24654__$1;
var msg_name = cljs.core.get.call(null,map__24654__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24653,(1));
var pred__24656 = cljs.core._EQ_;
var expr__24657 = msg_name;
if(cljs.core.truth_(pred__24656.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24657))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24656.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24657))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24650,map__24650__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,msg_hist,msg_names,msg){
return (function (state_24873){
var state_val_24874 = (state_24873[(1)]);
if((state_val_24874 === (7))){
var inst_24797 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24797)){
var statearr_24875_24921 = state_24873__$1;
(statearr_24875_24921[(1)] = (8));

} else {
var statearr_24876_24922 = state_24873__$1;
(statearr_24876_24922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (20))){
var inst_24867 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24877_24923 = state_24873__$1;
(statearr_24877_24923[(2)] = inst_24867);

(statearr_24877_24923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (27))){
var inst_24863 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24878_24924 = state_24873__$1;
(statearr_24878_24924[(2)] = inst_24863);

(statearr_24878_24924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (1))){
var inst_24790 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24790)){
var statearr_24879_24925 = state_24873__$1;
(statearr_24879_24925[(1)] = (2));

} else {
var statearr_24880_24926 = state_24873__$1;
(statearr_24880_24926[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (24))){
var inst_24865 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24881_24927 = state_24873__$1;
(statearr_24881_24927[(2)] = inst_24865);

(statearr_24881_24927[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (4))){
var inst_24871 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24873__$1,inst_24871);
} else {
if((state_val_24874 === (15))){
var inst_24869 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24882_24928 = state_24873__$1;
(statearr_24882_24928[(2)] = inst_24869);

(statearr_24882_24928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (21))){
var inst_24828 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24883_24929 = state_24873__$1;
(statearr_24883_24929[(2)] = inst_24828);

(statearr_24883_24929[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (31))){
var inst_24852 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24852)){
var statearr_24884_24930 = state_24873__$1;
(statearr_24884_24930[(1)] = (34));

} else {
var statearr_24885_24931 = state_24873__$1;
(statearr_24885_24931[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (32))){
var inst_24861 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24886_24932 = state_24873__$1;
(statearr_24886_24932[(2)] = inst_24861);

(statearr_24886_24932[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (33))){
var inst_24850 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24887_24933 = state_24873__$1;
(statearr_24887_24933[(2)] = inst_24850);

(statearr_24887_24933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (13))){
var inst_24811 = figwheel.client.heads_up.clear.call(null);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(16),inst_24811);
} else {
if((state_val_24874 === (22))){
var inst_24832 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24833 = figwheel.client.heads_up.append_message.call(null,inst_24832);
var state_24873__$1 = state_24873;
var statearr_24888_24934 = state_24873__$1;
(statearr_24888_24934[(2)] = inst_24833);

(statearr_24888_24934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (36))){
var inst_24859 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24889_24935 = state_24873__$1;
(statearr_24889_24935[(2)] = inst_24859);

(statearr_24889_24935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (29))){
var inst_24843 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24890_24936 = state_24873__$1;
(statearr_24890_24936[(2)] = inst_24843);

(statearr_24890_24936[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (6))){
var inst_24792 = (state_24873[(7)]);
var state_24873__$1 = state_24873;
var statearr_24891_24937 = state_24873__$1;
(statearr_24891_24937[(2)] = inst_24792);

(statearr_24891_24937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (28))){
var inst_24839 = (state_24873[(2)]);
var inst_24840 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24841 = figwheel.client.heads_up.display_warning.call(null,inst_24840);
var state_24873__$1 = (function (){var statearr_24892 = state_24873;
(statearr_24892[(8)] = inst_24839);

return statearr_24892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(29),inst_24841);
} else {
if((state_val_24874 === (25))){
var inst_24837 = figwheel.client.heads_up.clear.call(null);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(28),inst_24837);
} else {
if((state_val_24874 === (34))){
var inst_24854 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(37),inst_24854);
} else {
if((state_val_24874 === (17))){
var inst_24819 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24893_24938 = state_24873__$1;
(statearr_24893_24938[(2)] = inst_24819);

(statearr_24893_24938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (3))){
var inst_24809 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24809)){
var statearr_24894_24939 = state_24873__$1;
(statearr_24894_24939[(1)] = (13));

} else {
var statearr_24895_24940 = state_24873__$1;
(statearr_24895_24940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (12))){
var inst_24805 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24896_24941 = state_24873__$1;
(statearr_24896_24941[(2)] = inst_24805);

(statearr_24896_24941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (2))){
var inst_24792 = (state_24873[(7)]);
var inst_24792__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24873__$1 = (function (){var statearr_24897 = state_24873;
(statearr_24897[(7)] = inst_24792__$1);

return statearr_24897;
})();
if(cljs.core.truth_(inst_24792__$1)){
var statearr_24898_24942 = state_24873__$1;
(statearr_24898_24942[(1)] = (5));

} else {
var statearr_24899_24943 = state_24873__$1;
(statearr_24899_24943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (23))){
var inst_24835 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24835)){
var statearr_24900_24944 = state_24873__$1;
(statearr_24900_24944[(1)] = (25));

} else {
var statearr_24901_24945 = state_24873__$1;
(statearr_24901_24945[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (35))){
var state_24873__$1 = state_24873;
var statearr_24902_24946 = state_24873__$1;
(statearr_24902_24946[(2)] = null);

(statearr_24902_24946[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (19))){
var inst_24830 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24830)){
var statearr_24903_24947 = state_24873__$1;
(statearr_24903_24947[(1)] = (22));

} else {
var statearr_24904_24948 = state_24873__$1;
(statearr_24904_24948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (11))){
var inst_24801 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24905_24949 = state_24873__$1;
(statearr_24905_24949[(2)] = inst_24801);

(statearr_24905_24949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (9))){
var inst_24803 = figwheel.client.heads_up.clear.call(null);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(12),inst_24803);
} else {
if((state_val_24874 === (5))){
var inst_24794 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24873__$1 = state_24873;
var statearr_24906_24950 = state_24873__$1;
(statearr_24906_24950[(2)] = inst_24794);

(statearr_24906_24950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (14))){
var inst_24821 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24821)){
var statearr_24907_24951 = state_24873__$1;
(statearr_24907_24951[(1)] = (18));

} else {
var statearr_24908_24952 = state_24873__$1;
(statearr_24908_24952[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (26))){
var inst_24845 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24845)){
var statearr_24909_24953 = state_24873__$1;
(statearr_24909_24953[(1)] = (30));

} else {
var statearr_24910_24954 = state_24873__$1;
(statearr_24910_24954[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (16))){
var inst_24813 = (state_24873[(2)]);
var inst_24814 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24815 = figwheel.client.format_messages.call(null,inst_24814);
var inst_24816 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24817 = figwheel.client.heads_up.display_error.call(null,inst_24815,inst_24816);
var state_24873__$1 = (function (){var statearr_24911 = state_24873;
(statearr_24911[(9)] = inst_24813);

return statearr_24911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(17),inst_24817);
} else {
if((state_val_24874 === (30))){
var inst_24847 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24848 = figwheel.client.heads_up.display_warning.call(null,inst_24847);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(33),inst_24848);
} else {
if((state_val_24874 === (10))){
var inst_24807 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24912_24955 = state_24873__$1;
(statearr_24912_24955[(2)] = inst_24807);

(statearr_24912_24955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (18))){
var inst_24823 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24824 = figwheel.client.format_messages.call(null,inst_24823);
var inst_24825 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24826 = figwheel.client.heads_up.display_error.call(null,inst_24824,inst_24825);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(21),inst_24826);
} else {
if((state_val_24874 === (37))){
var inst_24856 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24913_24956 = state_24873__$1;
(statearr_24913_24956[(2)] = inst_24856);

(statearr_24913_24956[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (8))){
var inst_24799 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(11),inst_24799);
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
var statearr_24917 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24917[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__);

(statearr_24917[(1)] = (1));

return statearr_24917;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1 = (function (state_24873){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_24873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e24918){if((e24918 instanceof Object)){
var ex__19970__auto__ = e24918;
var statearr_24919_24957 = state_24873;
(statearr_24919_24957[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24958 = state_24873;
state_24873 = G__24958;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__ = function(state_24873){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1.call(this,state_24873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,msg_hist,msg_names,msg))
})();
var state__20080__auto__ = (function (){var statearr_24920 = f__20079__auto__.call(null);
(statearr_24920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_24920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,msg_hist,msg_names,msg))
);

return c__20078__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20078__auto___25021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___25021,ch){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___25021,ch){
return (function (state_25004){
var state_val_25005 = (state_25004[(1)]);
if((state_val_25005 === (1))){
var state_25004__$1 = state_25004;
var statearr_25006_25022 = state_25004__$1;
(statearr_25006_25022[(2)] = null);

(statearr_25006_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25005 === (2))){
var state_25004__$1 = state_25004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25004__$1,(4),ch);
} else {
if((state_val_25005 === (3))){
var inst_25002 = (state_25004[(2)]);
var state_25004__$1 = state_25004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25004__$1,inst_25002);
} else {
if((state_val_25005 === (4))){
var inst_24992 = (state_25004[(7)]);
var inst_24992__$1 = (state_25004[(2)]);
var state_25004__$1 = (function (){var statearr_25007 = state_25004;
(statearr_25007[(7)] = inst_24992__$1);

return statearr_25007;
})();
if(cljs.core.truth_(inst_24992__$1)){
var statearr_25008_25023 = state_25004__$1;
(statearr_25008_25023[(1)] = (5));

} else {
var statearr_25009_25024 = state_25004__$1;
(statearr_25009_25024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25005 === (5))){
var inst_24992 = (state_25004[(7)]);
var inst_24994 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24992);
var state_25004__$1 = state_25004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25004__$1,(8),inst_24994);
} else {
if((state_val_25005 === (6))){
var state_25004__$1 = state_25004;
var statearr_25010_25025 = state_25004__$1;
(statearr_25010_25025[(2)] = null);

(statearr_25010_25025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25005 === (7))){
var inst_25000 = (state_25004[(2)]);
var state_25004__$1 = state_25004;
var statearr_25011_25026 = state_25004__$1;
(statearr_25011_25026[(2)] = inst_25000);

(statearr_25011_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25005 === (8))){
var inst_24996 = (state_25004[(2)]);
var state_25004__$1 = (function (){var statearr_25012 = state_25004;
(statearr_25012[(8)] = inst_24996);

return statearr_25012;
})();
var statearr_25013_25027 = state_25004__$1;
(statearr_25013_25027[(2)] = null);

(statearr_25013_25027[(1)] = (2));


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
});})(c__20078__auto___25021,ch))
;
return ((function (switch__19966__auto__,c__20078__auto___25021,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0 = (function (){
var statearr_25017 = [null,null,null,null,null,null,null,null,null];
(statearr_25017[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19967__auto__);

(statearr_25017[(1)] = (1));

return statearr_25017;
});
var figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1 = (function (state_25004){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_25004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e25018){if((e25018 instanceof Object)){
var ex__19970__auto__ = e25018;
var statearr_25019_25028 = state_25004;
(statearr_25019_25028[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25029 = state_25004;
state_25004 = G__25029;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__ = function(state_25004){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1.call(this,state_25004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19967__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19967__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___25021,ch))
})();
var state__20080__auto__ = (function (){var statearr_25020 = f__20079__auto__.call(null);
(statearr_25020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___25021);

return statearr_25020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___25021,ch))
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
return (function (state_25050){
var state_val_25051 = (state_25050[(1)]);
if((state_val_25051 === (1))){
var inst_25045 = cljs.core.async.timeout.call(null,(3000));
var state_25050__$1 = state_25050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25050__$1,(2),inst_25045);
} else {
if((state_val_25051 === (2))){
var inst_25047 = (state_25050[(2)]);
var inst_25048 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25050__$1 = (function (){var statearr_25052 = state_25050;
(statearr_25052[(7)] = inst_25047);

return statearr_25052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25050__$1,inst_25048);
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
var statearr_25056 = [null,null,null,null,null,null,null,null];
(statearr_25056[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__);

(statearr_25056[(1)] = (1));

return statearr_25056;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1 = (function (state_25050){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_25050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e25057){if((e25057 instanceof Object)){
var ex__19970__auto__ = e25057;
var statearr_25058_25060 = state_25050;
(statearr_25058_25060[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25061 = state_25050;
state_25050 = G__25061;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__ = function(state_25050){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1.call(this,state_25050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19967__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_25059 = f__20079__auto__.call(null);
(statearr_25059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_25059;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25062){
var map__25069 = p__25062;
var map__25069__$1 = ((((!((map__25069 == null)))?((((map__25069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);
var ed = map__25069__$1;
var formatted_exception = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25071_25075 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25072_25076 = null;
var count__25073_25077 = (0);
var i__25074_25078 = (0);
while(true){
if((i__25074_25078 < count__25073_25077)){
var msg_25079 = cljs.core._nth.call(null,chunk__25072_25076,i__25074_25078);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25079);

var G__25080 = seq__25071_25075;
var G__25081 = chunk__25072_25076;
var G__25082 = count__25073_25077;
var G__25083 = (i__25074_25078 + (1));
seq__25071_25075 = G__25080;
chunk__25072_25076 = G__25081;
count__25073_25077 = G__25082;
i__25074_25078 = G__25083;
continue;
} else {
var temp__4425__auto___25084 = cljs.core.seq.call(null,seq__25071_25075);
if(temp__4425__auto___25084){
var seq__25071_25085__$1 = temp__4425__auto___25084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25071_25085__$1)){
var c__17630__auto___25086 = cljs.core.chunk_first.call(null,seq__25071_25085__$1);
var G__25087 = cljs.core.chunk_rest.call(null,seq__25071_25085__$1);
var G__25088 = c__17630__auto___25086;
var G__25089 = cljs.core.count.call(null,c__17630__auto___25086);
var G__25090 = (0);
seq__25071_25075 = G__25087;
chunk__25072_25076 = G__25088;
count__25073_25077 = G__25089;
i__25074_25078 = G__25090;
continue;
} else {
var msg_25091 = cljs.core.first.call(null,seq__25071_25085__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25091);

var G__25092 = cljs.core.next.call(null,seq__25071_25085__$1);
var G__25093 = null;
var G__25094 = (0);
var G__25095 = (0);
seq__25071_25075 = G__25092;
chunk__25072_25076 = G__25093;
count__25073_25077 = G__25094;
i__25074_25078 = G__25095;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25096){
var map__25099 = p__25096;
var map__25099__$1 = ((((!((map__25099 == null)))?((((map__25099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25099):map__25099);
var w = map__25099__$1;
var message = cljs.core.get.call(null,map__25099__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25107 = cljs.core.seq.call(null,plugins);
var chunk__25108 = null;
var count__25109 = (0);
var i__25110 = (0);
while(true){
if((i__25110 < count__25109)){
var vec__25111 = cljs.core._nth.call(null,chunk__25108,i__25110);
var k = cljs.core.nth.call(null,vec__25111,(0),null);
var plugin = cljs.core.nth.call(null,vec__25111,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25113 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25107,chunk__25108,count__25109,i__25110,pl_25113,vec__25111,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25113.call(null,msg_hist);
});})(seq__25107,chunk__25108,count__25109,i__25110,pl_25113,vec__25111,k,plugin))
);
} else {
}

var G__25114 = seq__25107;
var G__25115 = chunk__25108;
var G__25116 = count__25109;
var G__25117 = (i__25110 + (1));
seq__25107 = G__25114;
chunk__25108 = G__25115;
count__25109 = G__25116;
i__25110 = G__25117;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25107);
if(temp__4425__auto__){
var seq__25107__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25107__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__25107__$1);
var G__25118 = cljs.core.chunk_rest.call(null,seq__25107__$1);
var G__25119 = c__17630__auto__;
var G__25120 = cljs.core.count.call(null,c__17630__auto__);
var G__25121 = (0);
seq__25107 = G__25118;
chunk__25108 = G__25119;
count__25109 = G__25120;
i__25110 = G__25121;
continue;
} else {
var vec__25112 = cljs.core.first.call(null,seq__25107__$1);
var k = cljs.core.nth.call(null,vec__25112,(0),null);
var plugin = cljs.core.nth.call(null,vec__25112,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25122 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25107,chunk__25108,count__25109,i__25110,pl_25122,vec__25112,k,plugin,seq__25107__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25122.call(null,msg_hist);
});})(seq__25107,chunk__25108,count__25109,i__25110,pl_25122,vec__25112,k,plugin,seq__25107__$1,temp__4425__auto__))
);
} else {
}

var G__25123 = cljs.core.next.call(null,seq__25107__$1);
var G__25124 = null;
var G__25125 = (0);
var G__25126 = (0);
seq__25107 = G__25123;
chunk__25108 = G__25124;
count__25109 = G__25125;
i__25110 = G__25126;
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
var args25127 = [];
var len__17885__auto___25130 = arguments.length;
var i__17886__auto___25131 = (0);
while(true){
if((i__17886__auto___25131 < len__17885__auto___25130)){
args25127.push((arguments[i__17886__auto___25131]));

var G__25132 = (i__17886__auto___25131 + (1));
i__17886__auto___25131 = G__25132;
continue;
} else {
}
break;
}

var G__25129 = args25127.length;
switch (G__25129) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25127.length)].join('')));

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
var len__17885__auto___25138 = arguments.length;
var i__17886__auto___25139 = (0);
while(true){
if((i__17886__auto___25139 < len__17885__auto___25138)){
args__17892__auto__.push((arguments[i__17886__auto___25139]));

var G__25140 = (i__17886__auto___25139 + (1));
i__17886__auto___25139 = G__25140;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((0) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17893__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25135){
var map__25136 = p__25135;
var map__25136__$1 = ((((!((map__25136 == null)))?((((map__25136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25136):map__25136);
var opts = map__25136__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25134){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25134));
});

//# sourceMappingURL=client.js.map?rel=1450189829490