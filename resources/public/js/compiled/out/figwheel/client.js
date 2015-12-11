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
var pred__23752 = cljs.core._EQ_;
var expr__23753 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23752.call(null,"true",expr__23753))){
return true;
} else {
if(cljs.core.truth_(pred__23752.call(null,"false",expr__23753))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23753)].join('')));
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
var G__23755__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23756__i = 0, G__23756__a = new Array(arguments.length -  0);
while (G__23756__i < G__23756__a.length) {G__23756__a[G__23756__i] = arguments[G__23756__i + 0]; ++G__23756__i;}
  args = new cljs.core.IndexedSeq(G__23756__a,0);
} 
return G__23755__delegate.call(this,args);};
G__23755.cljs$lang$maxFixedArity = 0;
G__23755.cljs$lang$applyTo = (function (arglist__23757){
var args = cljs.core.seq(arglist__23757);
return G__23755__delegate(args);
});
G__23755.cljs$core$IFn$_invoke$arity$variadic = G__23755__delegate;
return G__23755;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23758){
var map__23761 = p__23758;
var map__23761__$1 = ((((!((map__23761 == null)))?((((map__23761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23761):map__23761);
var message = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19415__auto___23923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___23923,ch){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___23923,ch){
return (function (state_23892){
var state_val_23893 = (state_23892[(1)]);
if((state_val_23893 === (7))){
var inst_23888 = (state_23892[(2)]);
var state_23892__$1 = state_23892;
var statearr_23894_23924 = state_23892__$1;
(statearr_23894_23924[(2)] = inst_23888);

(statearr_23894_23924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (1))){
var state_23892__$1 = state_23892;
var statearr_23895_23925 = state_23892__$1;
(statearr_23895_23925[(2)] = null);

(statearr_23895_23925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (4))){
var inst_23845 = (state_23892[(7)]);
var inst_23845__$1 = (state_23892[(2)]);
var state_23892__$1 = (function (){var statearr_23896 = state_23892;
(statearr_23896[(7)] = inst_23845__$1);

return statearr_23896;
})();
if(cljs.core.truth_(inst_23845__$1)){
var statearr_23897_23926 = state_23892__$1;
(statearr_23897_23926[(1)] = (5));

} else {
var statearr_23898_23927 = state_23892__$1;
(statearr_23898_23927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (15))){
var inst_23852 = (state_23892[(8)]);
var inst_23867 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23852);
var inst_23868 = cljs.core.first.call(null,inst_23867);
var inst_23869 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23868);
var inst_23870 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23869)].join('');
var inst_23871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23870);
var state_23892__$1 = state_23892;
var statearr_23899_23928 = state_23892__$1;
(statearr_23899_23928[(2)] = inst_23871);

(statearr_23899_23928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (13))){
var inst_23876 = (state_23892[(2)]);
var state_23892__$1 = state_23892;
var statearr_23900_23929 = state_23892__$1;
(statearr_23900_23929[(2)] = inst_23876);

(statearr_23900_23929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (6))){
var state_23892__$1 = state_23892;
var statearr_23901_23930 = state_23892__$1;
(statearr_23901_23930[(2)] = null);

(statearr_23901_23930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (17))){
var inst_23874 = (state_23892[(2)]);
var state_23892__$1 = state_23892;
var statearr_23902_23931 = state_23892__$1;
(statearr_23902_23931[(2)] = inst_23874);

(statearr_23902_23931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (3))){
var inst_23890 = (state_23892[(2)]);
var state_23892__$1 = state_23892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23892__$1,inst_23890);
} else {
if((state_val_23893 === (12))){
var inst_23851 = (state_23892[(9)]);
var inst_23865 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23851,opts);
var state_23892__$1 = state_23892;
if(cljs.core.truth_(inst_23865)){
var statearr_23903_23932 = state_23892__$1;
(statearr_23903_23932[(1)] = (15));

} else {
var statearr_23904_23933 = state_23892__$1;
(statearr_23904_23933[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (2))){
var state_23892__$1 = state_23892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23892__$1,(4),ch);
} else {
if((state_val_23893 === (11))){
var inst_23852 = (state_23892[(8)]);
var inst_23857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23858 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23852);
var inst_23859 = cljs.core.async.timeout.call(null,(1000));
var inst_23860 = [inst_23858,inst_23859];
var inst_23861 = (new cljs.core.PersistentVector(null,2,(5),inst_23857,inst_23860,null));
var state_23892__$1 = state_23892;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23892__$1,(14),inst_23861);
} else {
if((state_val_23893 === (9))){
var inst_23852 = (state_23892[(8)]);
var inst_23878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23879 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23852);
var inst_23880 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23879);
var inst_23881 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23880)].join('');
var inst_23882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23881);
var state_23892__$1 = (function (){var statearr_23905 = state_23892;
(statearr_23905[(10)] = inst_23878);

return statearr_23905;
})();
var statearr_23906_23934 = state_23892__$1;
(statearr_23906_23934[(2)] = inst_23882);

(statearr_23906_23934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (5))){
var inst_23845 = (state_23892[(7)]);
var inst_23847 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23848 = (new cljs.core.PersistentArrayMap(null,2,inst_23847,null));
var inst_23849 = (new cljs.core.PersistentHashSet(null,inst_23848,null));
var inst_23850 = figwheel.client.focus_msgs.call(null,inst_23849,inst_23845);
var inst_23851 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23850);
var inst_23852 = cljs.core.first.call(null,inst_23850);
var inst_23853 = figwheel.client.autoload_QMARK_.call(null);
var state_23892__$1 = (function (){var statearr_23907 = state_23892;
(statearr_23907[(9)] = inst_23851);

(statearr_23907[(8)] = inst_23852);

return statearr_23907;
})();
if(cljs.core.truth_(inst_23853)){
var statearr_23908_23935 = state_23892__$1;
(statearr_23908_23935[(1)] = (8));

} else {
var statearr_23909_23936 = state_23892__$1;
(statearr_23909_23936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (14))){
var inst_23863 = (state_23892[(2)]);
var state_23892__$1 = state_23892;
var statearr_23910_23937 = state_23892__$1;
(statearr_23910_23937[(2)] = inst_23863);

(statearr_23910_23937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (16))){
var state_23892__$1 = state_23892;
var statearr_23911_23938 = state_23892__$1;
(statearr_23911_23938[(2)] = null);

(statearr_23911_23938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (10))){
var inst_23884 = (state_23892[(2)]);
var state_23892__$1 = (function (){var statearr_23912 = state_23892;
(statearr_23912[(11)] = inst_23884);

return statearr_23912;
})();
var statearr_23913_23939 = state_23892__$1;
(statearr_23913_23939[(2)] = null);

(statearr_23913_23939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23893 === (8))){
var inst_23851 = (state_23892[(9)]);
var inst_23855 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23851,opts);
var state_23892__$1 = state_23892;
if(cljs.core.truth_(inst_23855)){
var statearr_23914_23940 = state_23892__$1;
(statearr_23914_23940[(1)] = (11));

} else {
var statearr_23915_23941 = state_23892__$1;
(statearr_23915_23941[(1)] = (12));

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
});})(c__19415__auto___23923,ch))
;
return ((function (switch__19303__auto__,c__19415__auto___23923,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19304__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19304__auto____0 = (function (){
var statearr_23919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23919[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19304__auto__);

(statearr_23919[(1)] = (1));

return statearr_23919;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19304__auto____1 = (function (state_23892){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_23892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e23920){if((e23920 instanceof Object)){
var ex__19307__auto__ = e23920;
var statearr_23921_23942 = state_23892;
(statearr_23921_23942[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23943 = state_23892;
state_23892 = G__23943;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19304__auto__ = function(state_23892){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19304__auto____1.call(this,state_23892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19304__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19304__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___23923,ch))
})();
var state__19417__auto__ = (function (){var statearr_23922 = f__19416__auto__.call(null);
(statearr_23922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___23923);

return statearr_23922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___23923,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23944_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23944_SHARP_));
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
var base_path_23951 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23951){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23949 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23950 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23949,_STAR_print_newline_STAR_23950,base_path_23951){
return (function() { 
var G__23952__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23953__i = 0, G__23953__a = new Array(arguments.length -  0);
while (G__23953__i < G__23953__a.length) {G__23953__a[G__23953__i] = arguments[G__23953__i + 0]; ++G__23953__i;}
  args = new cljs.core.IndexedSeq(G__23953__a,0);
} 
return G__23952__delegate.call(this,args);};
G__23952.cljs$lang$maxFixedArity = 0;
G__23952.cljs$lang$applyTo = (function (arglist__23954){
var args = cljs.core.seq(arglist__23954);
return G__23952__delegate(args);
});
G__23952.cljs$core$IFn$_invoke$arity$variadic = G__23952__delegate;
return G__23952;
})()
;})(_STAR_print_fn_STAR_23949,_STAR_print_newline_STAR_23950,base_path_23951))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23950;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23949;
}}catch (e23948){if((e23948 instanceof Error)){
var e = e23948;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23951], null));
} else {
var e = e23948;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23951))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23955){
var map__23962 = p__23955;
var map__23962__$1 = ((((!((map__23962 == null)))?((((map__23962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23962):map__23962);
var opts = map__23962__$1;
var build_id = cljs.core.get.call(null,map__23962__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23962,map__23962__$1,opts,build_id){
return (function (p__23964){
var vec__23965 = p__23964;
var map__23966 = cljs.core.nth.call(null,vec__23965,(0),null);
var map__23966__$1 = ((((!((map__23966 == null)))?((((map__23966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23966):map__23966);
var msg = map__23966__$1;
var msg_name = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23965,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23965,map__23966,map__23966__$1,msg,msg_name,_,map__23962,map__23962__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23965,map__23966,map__23966__$1,msg,msg_name,_,map__23962,map__23962__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23962,map__23962__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23972){
var vec__23973 = p__23972;
var map__23974 = cljs.core.nth.call(null,vec__23973,(0),null);
var map__23974__$1 = ((((!((map__23974 == null)))?((((map__23974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23974):map__23974);
var msg = map__23974__$1;
var msg_name = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23973,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23976){
var map__23986 = p__23976;
var map__23986__$1 = ((((!((map__23986 == null)))?((((map__23986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23986):map__23986);
var on_compile_warning = cljs.core.get.call(null,map__23986__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23986__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23986,map__23986__$1,on_compile_warning,on_compile_fail){
return (function (p__23988){
var vec__23989 = p__23988;
var map__23990 = cljs.core.nth.call(null,vec__23989,(0),null);
var map__23990__$1 = ((((!((map__23990 == null)))?((((map__23990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23990):map__23990);
var msg = map__23990__$1;
var msg_name = cljs.core.get.call(null,map__23990__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23989,(1));
var pred__23992 = cljs.core._EQ_;
var expr__23993 = msg_name;
if(cljs.core.truth_(pred__23992.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23993))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23992.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23993))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23986,map__23986__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__,msg_hist,msg_names,msg){
return (function (state_24209){
var state_val_24210 = (state_24209[(1)]);
if((state_val_24210 === (7))){
var inst_24133 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24133)){
var statearr_24211_24257 = state_24209__$1;
(statearr_24211_24257[(1)] = (8));

} else {
var statearr_24212_24258 = state_24209__$1;
(statearr_24212_24258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (20))){
var inst_24203 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24213_24259 = state_24209__$1;
(statearr_24213_24259[(2)] = inst_24203);

(statearr_24213_24259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (27))){
var inst_24199 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24214_24260 = state_24209__$1;
(statearr_24214_24260[(2)] = inst_24199);

(statearr_24214_24260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (1))){
var inst_24126 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24126)){
var statearr_24215_24261 = state_24209__$1;
(statearr_24215_24261[(1)] = (2));

} else {
var statearr_24216_24262 = state_24209__$1;
(statearr_24216_24262[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (24))){
var inst_24201 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24217_24263 = state_24209__$1;
(statearr_24217_24263[(2)] = inst_24201);

(statearr_24217_24263[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (4))){
var inst_24207 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24209__$1,inst_24207);
} else {
if((state_val_24210 === (15))){
var inst_24205 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24218_24264 = state_24209__$1;
(statearr_24218_24264[(2)] = inst_24205);

(statearr_24218_24264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (21))){
var inst_24164 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24219_24265 = state_24209__$1;
(statearr_24219_24265[(2)] = inst_24164);

(statearr_24219_24265[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (31))){
var inst_24188 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24188)){
var statearr_24220_24266 = state_24209__$1;
(statearr_24220_24266[(1)] = (34));

} else {
var statearr_24221_24267 = state_24209__$1;
(statearr_24221_24267[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (32))){
var inst_24197 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24222_24268 = state_24209__$1;
(statearr_24222_24268[(2)] = inst_24197);

(statearr_24222_24268[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (33))){
var inst_24186 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24223_24269 = state_24209__$1;
(statearr_24223_24269[(2)] = inst_24186);

(statearr_24223_24269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (13))){
var inst_24147 = figwheel.client.heads_up.clear.call(null);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(16),inst_24147);
} else {
if((state_val_24210 === (22))){
var inst_24168 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24169 = figwheel.client.heads_up.append_message.call(null,inst_24168);
var state_24209__$1 = state_24209;
var statearr_24224_24270 = state_24209__$1;
(statearr_24224_24270[(2)] = inst_24169);

(statearr_24224_24270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (36))){
var inst_24195 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24225_24271 = state_24209__$1;
(statearr_24225_24271[(2)] = inst_24195);

(statearr_24225_24271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (29))){
var inst_24179 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24226_24272 = state_24209__$1;
(statearr_24226_24272[(2)] = inst_24179);

(statearr_24226_24272[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (6))){
var inst_24128 = (state_24209[(7)]);
var state_24209__$1 = state_24209;
var statearr_24227_24273 = state_24209__$1;
(statearr_24227_24273[(2)] = inst_24128);

(statearr_24227_24273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (28))){
var inst_24175 = (state_24209[(2)]);
var inst_24176 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24177 = figwheel.client.heads_up.display_warning.call(null,inst_24176);
var state_24209__$1 = (function (){var statearr_24228 = state_24209;
(statearr_24228[(8)] = inst_24175);

return statearr_24228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(29),inst_24177);
} else {
if((state_val_24210 === (25))){
var inst_24173 = figwheel.client.heads_up.clear.call(null);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(28),inst_24173);
} else {
if((state_val_24210 === (34))){
var inst_24190 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(37),inst_24190);
} else {
if((state_val_24210 === (17))){
var inst_24155 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24229_24274 = state_24209__$1;
(statearr_24229_24274[(2)] = inst_24155);

(statearr_24229_24274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (3))){
var inst_24145 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24145)){
var statearr_24230_24275 = state_24209__$1;
(statearr_24230_24275[(1)] = (13));

} else {
var statearr_24231_24276 = state_24209__$1;
(statearr_24231_24276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (12))){
var inst_24141 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24232_24277 = state_24209__$1;
(statearr_24232_24277[(2)] = inst_24141);

(statearr_24232_24277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (2))){
var inst_24128 = (state_24209[(7)]);
var inst_24128__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24209__$1 = (function (){var statearr_24233 = state_24209;
(statearr_24233[(7)] = inst_24128__$1);

return statearr_24233;
})();
if(cljs.core.truth_(inst_24128__$1)){
var statearr_24234_24278 = state_24209__$1;
(statearr_24234_24278[(1)] = (5));

} else {
var statearr_24235_24279 = state_24209__$1;
(statearr_24235_24279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (23))){
var inst_24171 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24171)){
var statearr_24236_24280 = state_24209__$1;
(statearr_24236_24280[(1)] = (25));

} else {
var statearr_24237_24281 = state_24209__$1;
(statearr_24237_24281[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (35))){
var state_24209__$1 = state_24209;
var statearr_24238_24282 = state_24209__$1;
(statearr_24238_24282[(2)] = null);

(statearr_24238_24282[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (19))){
var inst_24166 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24166)){
var statearr_24239_24283 = state_24209__$1;
(statearr_24239_24283[(1)] = (22));

} else {
var statearr_24240_24284 = state_24209__$1;
(statearr_24240_24284[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (11))){
var inst_24137 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24241_24285 = state_24209__$1;
(statearr_24241_24285[(2)] = inst_24137);

(statearr_24241_24285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (9))){
var inst_24139 = figwheel.client.heads_up.clear.call(null);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(12),inst_24139);
} else {
if((state_val_24210 === (5))){
var inst_24130 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24209__$1 = state_24209;
var statearr_24242_24286 = state_24209__$1;
(statearr_24242_24286[(2)] = inst_24130);

(statearr_24242_24286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (14))){
var inst_24157 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24157)){
var statearr_24243_24287 = state_24209__$1;
(statearr_24243_24287[(1)] = (18));

} else {
var statearr_24244_24288 = state_24209__$1;
(statearr_24244_24288[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (26))){
var inst_24181 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24181)){
var statearr_24245_24289 = state_24209__$1;
(statearr_24245_24289[(1)] = (30));

} else {
var statearr_24246_24290 = state_24209__$1;
(statearr_24246_24290[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (16))){
var inst_24149 = (state_24209[(2)]);
var inst_24150 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24151 = figwheel.client.format_messages.call(null,inst_24150);
var inst_24152 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24153 = figwheel.client.heads_up.display_error.call(null,inst_24151,inst_24152);
var state_24209__$1 = (function (){var statearr_24247 = state_24209;
(statearr_24247[(9)] = inst_24149);

return statearr_24247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(17),inst_24153);
} else {
if((state_val_24210 === (30))){
var inst_24183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24184 = figwheel.client.heads_up.display_warning.call(null,inst_24183);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(33),inst_24184);
} else {
if((state_val_24210 === (10))){
var inst_24143 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24248_24291 = state_24209__$1;
(statearr_24248_24291[(2)] = inst_24143);

(statearr_24248_24291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (18))){
var inst_24159 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24160 = figwheel.client.format_messages.call(null,inst_24159);
var inst_24161 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24162 = figwheel.client.heads_up.display_error.call(null,inst_24160,inst_24161);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(21),inst_24162);
} else {
if((state_val_24210 === (37))){
var inst_24192 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24249_24292 = state_24209__$1;
(statearr_24249_24292[(2)] = inst_24192);

(statearr_24249_24292[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (8))){
var inst_24135 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(11),inst_24135);
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
});})(c__19415__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19303__auto__,c__19415__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto____0 = (function (){
var statearr_24253 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24253[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto__);

(statearr_24253[(1)] = (1));

return statearr_24253;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto____1 = (function (state_24209){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_24209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e24254){if((e24254 instanceof Object)){
var ex__19307__auto__ = e24254;
var statearr_24255_24293 = state_24209;
(statearr_24255_24293[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24294 = state_24209;
state_24209 = G__24294;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto__ = function(state_24209){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto____1.call(this,state_24209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__,msg_hist,msg_names,msg))
})();
var state__19417__auto__ = (function (){var statearr_24256 = f__19416__auto__.call(null);
(statearr_24256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_24256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__,msg_hist,msg_names,msg))
);

return c__19415__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19415__auto___24357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___24357,ch){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___24357,ch){
return (function (state_24340){
var state_val_24341 = (state_24340[(1)]);
if((state_val_24341 === (1))){
var state_24340__$1 = state_24340;
var statearr_24342_24358 = state_24340__$1;
(statearr_24342_24358[(2)] = null);

(statearr_24342_24358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (2))){
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24340__$1,(4),ch);
} else {
if((state_val_24341 === (3))){
var inst_24338 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24340__$1,inst_24338);
} else {
if((state_val_24341 === (4))){
var inst_24328 = (state_24340[(7)]);
var inst_24328__$1 = (state_24340[(2)]);
var state_24340__$1 = (function (){var statearr_24343 = state_24340;
(statearr_24343[(7)] = inst_24328__$1);

return statearr_24343;
})();
if(cljs.core.truth_(inst_24328__$1)){
var statearr_24344_24359 = state_24340__$1;
(statearr_24344_24359[(1)] = (5));

} else {
var statearr_24345_24360 = state_24340__$1;
(statearr_24345_24360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (5))){
var inst_24328 = (state_24340[(7)]);
var inst_24330 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24328);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24340__$1,(8),inst_24330);
} else {
if((state_val_24341 === (6))){
var state_24340__$1 = state_24340;
var statearr_24346_24361 = state_24340__$1;
(statearr_24346_24361[(2)] = null);

(statearr_24346_24361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (7))){
var inst_24336 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24347_24362 = state_24340__$1;
(statearr_24347_24362[(2)] = inst_24336);

(statearr_24347_24362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (8))){
var inst_24332 = (state_24340[(2)]);
var state_24340__$1 = (function (){var statearr_24348 = state_24340;
(statearr_24348[(8)] = inst_24332);

return statearr_24348;
})();
var statearr_24349_24363 = state_24340__$1;
(statearr_24349_24363[(2)] = null);

(statearr_24349_24363[(1)] = (2));


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
});})(c__19415__auto___24357,ch))
;
return ((function (switch__19303__auto__,c__19415__auto___24357,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19304__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19304__auto____0 = (function (){
var statearr_24353 = [null,null,null,null,null,null,null,null,null];
(statearr_24353[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19304__auto__);

(statearr_24353[(1)] = (1));

return statearr_24353;
});
var figwheel$client$heads_up_plugin_$_state_machine__19304__auto____1 = (function (state_24340){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_24340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e24354){if((e24354 instanceof Object)){
var ex__19307__auto__ = e24354;
var statearr_24355_24364 = state_24340;
(statearr_24355_24364[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24365 = state_24340;
state_24340 = G__24365;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19304__auto__ = function(state_24340){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19304__auto____1.call(this,state_24340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19304__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19304__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___24357,ch))
})();
var state__19417__auto__ = (function (){var statearr_24356 = f__19416__auto__.call(null);
(statearr_24356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___24357);

return statearr_24356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___24357,ch))
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
var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__){
return (function (state_24386){
var state_val_24387 = (state_24386[(1)]);
if((state_val_24387 === (1))){
var inst_24381 = cljs.core.async.timeout.call(null,(3000));
var state_24386__$1 = state_24386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24386__$1,(2),inst_24381);
} else {
if((state_val_24387 === (2))){
var inst_24383 = (state_24386[(2)]);
var inst_24384 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24386__$1 = (function (){var statearr_24388 = state_24386;
(statearr_24388[(7)] = inst_24383);

return statearr_24388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24386__$1,inst_24384);
} else {
return null;
}
}
});})(c__19415__auto__))
;
return ((function (switch__19303__auto__,c__19415__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19304__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19304__auto____0 = (function (){
var statearr_24392 = [null,null,null,null,null,null,null,null];
(statearr_24392[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19304__auto__);

(statearr_24392[(1)] = (1));

return statearr_24392;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19304__auto____1 = (function (state_24386){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_24386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e24393){if((e24393 instanceof Object)){
var ex__19307__auto__ = e24393;
var statearr_24394_24396 = state_24386;
(statearr_24394_24396[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24397 = state_24386;
state_24386 = G__24397;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19304__auto__ = function(state_24386){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19304__auto____1.call(this,state_24386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19304__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19304__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__))
})();
var state__19417__auto__ = (function (){var statearr_24395 = f__19416__auto__.call(null);
(statearr_24395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_24395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__))
);

return c__19415__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24398){
var map__24405 = p__24398;
var map__24405__$1 = ((((!((map__24405 == null)))?((((map__24405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405):map__24405);
var ed = map__24405__$1;
var formatted_exception = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24407_24411 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24408_24412 = null;
var count__24409_24413 = (0);
var i__24410_24414 = (0);
while(true){
if((i__24410_24414 < count__24409_24413)){
var msg_24415 = cljs.core._nth.call(null,chunk__24408_24412,i__24410_24414);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24415);

var G__24416 = seq__24407_24411;
var G__24417 = chunk__24408_24412;
var G__24418 = count__24409_24413;
var G__24419 = (i__24410_24414 + (1));
seq__24407_24411 = G__24416;
chunk__24408_24412 = G__24417;
count__24409_24413 = G__24418;
i__24410_24414 = G__24419;
continue;
} else {
var temp__4425__auto___24420 = cljs.core.seq.call(null,seq__24407_24411);
if(temp__4425__auto___24420){
var seq__24407_24421__$1 = temp__4425__auto___24420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24407_24421__$1)){
var c__17629__auto___24422 = cljs.core.chunk_first.call(null,seq__24407_24421__$1);
var G__24423 = cljs.core.chunk_rest.call(null,seq__24407_24421__$1);
var G__24424 = c__17629__auto___24422;
var G__24425 = cljs.core.count.call(null,c__17629__auto___24422);
var G__24426 = (0);
seq__24407_24411 = G__24423;
chunk__24408_24412 = G__24424;
count__24409_24413 = G__24425;
i__24410_24414 = G__24426;
continue;
} else {
var msg_24427 = cljs.core.first.call(null,seq__24407_24421__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24427);

var G__24428 = cljs.core.next.call(null,seq__24407_24421__$1);
var G__24429 = null;
var G__24430 = (0);
var G__24431 = (0);
seq__24407_24411 = G__24428;
chunk__24408_24412 = G__24429;
count__24409_24413 = G__24430;
i__24410_24414 = G__24431;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24432){
var map__24435 = p__24432;
var map__24435__$1 = ((((!((map__24435 == null)))?((((map__24435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24435):map__24435);
var w = map__24435__$1;
var message = cljs.core.get.call(null,map__24435__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24443 = cljs.core.seq.call(null,plugins);
var chunk__24444 = null;
var count__24445 = (0);
var i__24446 = (0);
while(true){
if((i__24446 < count__24445)){
var vec__24447 = cljs.core._nth.call(null,chunk__24444,i__24446);
var k = cljs.core.nth.call(null,vec__24447,(0),null);
var plugin = cljs.core.nth.call(null,vec__24447,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24449 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24443,chunk__24444,count__24445,i__24446,pl_24449,vec__24447,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24449.call(null,msg_hist);
});})(seq__24443,chunk__24444,count__24445,i__24446,pl_24449,vec__24447,k,plugin))
);
} else {
}

var G__24450 = seq__24443;
var G__24451 = chunk__24444;
var G__24452 = count__24445;
var G__24453 = (i__24446 + (1));
seq__24443 = G__24450;
chunk__24444 = G__24451;
count__24445 = G__24452;
i__24446 = G__24453;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24443);
if(temp__4425__auto__){
var seq__24443__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24443__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24443__$1);
var G__24454 = cljs.core.chunk_rest.call(null,seq__24443__$1);
var G__24455 = c__17629__auto__;
var G__24456 = cljs.core.count.call(null,c__17629__auto__);
var G__24457 = (0);
seq__24443 = G__24454;
chunk__24444 = G__24455;
count__24445 = G__24456;
i__24446 = G__24457;
continue;
} else {
var vec__24448 = cljs.core.first.call(null,seq__24443__$1);
var k = cljs.core.nth.call(null,vec__24448,(0),null);
var plugin = cljs.core.nth.call(null,vec__24448,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24458 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24443,chunk__24444,count__24445,i__24446,pl_24458,vec__24448,k,plugin,seq__24443__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24458.call(null,msg_hist);
});})(seq__24443,chunk__24444,count__24445,i__24446,pl_24458,vec__24448,k,plugin,seq__24443__$1,temp__4425__auto__))
);
} else {
}

var G__24459 = cljs.core.next.call(null,seq__24443__$1);
var G__24460 = null;
var G__24461 = (0);
var G__24462 = (0);
seq__24443 = G__24459;
chunk__24444 = G__24460;
count__24445 = G__24461;
i__24446 = G__24462;
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
var args24463 = [];
var len__17884__auto___24466 = arguments.length;
var i__17885__auto___24467 = (0);
while(true){
if((i__17885__auto___24467 < len__17884__auto___24466)){
args24463.push((arguments[i__17885__auto___24467]));

var G__24468 = (i__17885__auto___24467 + (1));
i__17885__auto___24467 = G__24468;
continue;
} else {
}
break;
}

var G__24465 = args24463.length;
switch (G__24465) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24463.length)].join('')));

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
var len__17884__auto___24474 = arguments.length;
var i__17885__auto___24475 = (0);
while(true){
if((i__17885__auto___24475 < len__17884__auto___24474)){
args__17891__auto__.push((arguments[i__17885__auto___24475]));

var G__24476 = (i__17885__auto___24475 + (1));
i__17885__auto___24475 = G__24476;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24471){
var map__24472 = p__24471;
var map__24472__$1 = ((((!((map__24472 == null)))?((((map__24472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24472):map__24472);
var opts = map__24472__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24470){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24470));
});

//# sourceMappingURL=client.js.map?rel=1449829728894