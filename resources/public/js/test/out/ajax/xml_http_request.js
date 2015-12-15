// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26939,handler){
var map__26940 = p__26939;
var map__26940__$1 = ((((!((map__26940 == null)))?((((map__26940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26940):map__26940);
var uri = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26940,map__26940__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26938_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__26938_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__26940,map__26940__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___26948 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___26948)){
var response_type_26949 = temp__4425__auto___26948;
this$__$1.responseType = cljs.core.name.call(null,response_type_26949);
} else {
}

var seq__26942_26950 = cljs.core.seq.call(null,headers);
var chunk__26943_26951 = null;
var count__26944_26952 = (0);
var i__26945_26953 = (0);
while(true){
if((i__26945_26953 < count__26944_26952)){
var vec__26946_26954 = cljs.core._nth.call(null,chunk__26943_26951,i__26945_26953);
var k_26955 = cljs.core.nth.call(null,vec__26946_26954,(0),null);
var v_26956 = cljs.core.nth.call(null,vec__26946_26954,(1),null);
this$__$1.setRequestHeader(k_26955,v_26956);

var G__26957 = seq__26942_26950;
var G__26958 = chunk__26943_26951;
var G__26959 = count__26944_26952;
var G__26960 = (i__26945_26953 + (1));
seq__26942_26950 = G__26957;
chunk__26943_26951 = G__26958;
count__26944_26952 = G__26959;
i__26945_26953 = G__26960;
continue;
} else {
var temp__4425__auto___26961 = cljs.core.seq.call(null,seq__26942_26950);
if(temp__4425__auto___26961){
var seq__26942_26962__$1 = temp__4425__auto___26961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26942_26962__$1)){
var c__17630__auto___26963 = cljs.core.chunk_first.call(null,seq__26942_26962__$1);
var G__26964 = cljs.core.chunk_rest.call(null,seq__26942_26962__$1);
var G__26965 = c__17630__auto___26963;
var G__26966 = cljs.core.count.call(null,c__17630__auto___26963);
var G__26967 = (0);
seq__26942_26950 = G__26964;
chunk__26943_26951 = G__26965;
count__26944_26952 = G__26966;
i__26945_26953 = G__26967;
continue;
} else {
var vec__26947_26968 = cljs.core.first.call(null,seq__26942_26962__$1);
var k_26969 = cljs.core.nth.call(null,vec__26947_26968,(0),null);
var v_26970 = cljs.core.nth.call(null,vec__26947_26968,(1),null);
this$__$1.setRequestHeader(k_26969,v_26970);

var G__26971 = cljs.core.next.call(null,seq__26942_26962__$1);
var G__26972 = null;
var G__26973 = (0);
var G__26974 = (0);
seq__26942_26950 = G__26971;
chunk__26943_26951 = G__26972;
count__26944_26952 = G__26973;
i__26945_26953 = G__26974;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16826__auto__ = body;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
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