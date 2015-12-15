// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19845,handler){
var map__19846 = p__19845;
var map__19846__$1 = ((((!((map__19846 == null)))?((((map__19846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19846):map__19846);
var uri = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19846,map__19846__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19844_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19844_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__19846,map__19846__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___19854 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___19854)){
var response_type_19855 = temp__4425__auto___19854;
this$__$1.responseType = cljs.core.name.call(null,response_type_19855);
} else {
}

var seq__19848_19856 = cljs.core.seq.call(null,headers);
var chunk__19849_19857 = null;
var count__19850_19858 = (0);
var i__19851_19859 = (0);
while(true){
if((i__19851_19859 < count__19850_19858)){
var vec__19852_19860 = cljs.core._nth.call(null,chunk__19849_19857,i__19851_19859);
var k_19861 = cljs.core.nth.call(null,vec__19852_19860,(0),null);
var v_19862 = cljs.core.nth.call(null,vec__19852_19860,(1),null);
this$__$1.setRequestHeader(k_19861,v_19862);

var G__19863 = seq__19848_19856;
var G__19864 = chunk__19849_19857;
var G__19865 = count__19850_19858;
var G__19866 = (i__19851_19859 + (1));
seq__19848_19856 = G__19863;
chunk__19849_19857 = G__19864;
count__19850_19858 = G__19865;
i__19851_19859 = G__19866;
continue;
} else {
var temp__4425__auto___19867 = cljs.core.seq.call(null,seq__19848_19856);
if(temp__4425__auto___19867){
var seq__19848_19868__$1 = temp__4425__auto___19867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19848_19868__$1)){
var c__17631__auto___19869 = cljs.core.chunk_first.call(null,seq__19848_19868__$1);
var G__19870 = cljs.core.chunk_rest.call(null,seq__19848_19868__$1);
var G__19871 = c__17631__auto___19869;
var G__19872 = cljs.core.count.call(null,c__17631__auto___19869);
var G__19873 = (0);
seq__19848_19856 = G__19870;
chunk__19849_19857 = G__19871;
count__19850_19858 = G__19872;
i__19851_19859 = G__19873;
continue;
} else {
var vec__19853_19874 = cljs.core.first.call(null,seq__19848_19868__$1);
var k_19875 = cljs.core.nth.call(null,vec__19853_19874,(0),null);
var v_19876 = cljs.core.nth.call(null,vec__19853_19874,(1),null);
this$__$1.setRequestHeader(k_19875,v_19876);

var G__19877 = cljs.core.next.call(null,seq__19848_19868__$1);
var G__19878 = null;
var G__19879 = (0);
var G__19880 = (0);
seq__19848_19856 = G__19877;
chunk__19849_19857 = G__19878;
count__19850_19858 = G__19879;
i__19851_19859 = G__19880;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16828__auto__ = body;
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map