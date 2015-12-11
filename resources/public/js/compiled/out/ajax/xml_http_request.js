// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19534,handler){
var map__19535 = p__19534;
var map__19535__$1 = ((((!((map__19535 == null)))?((((map__19535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19535):map__19535);
var uri = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19535,map__19535__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19533_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19533_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__19535,map__19535__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___19543 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___19543)){
var response_type_19544 = temp__4425__auto___19543;
this$__$1.responseType = cljs.core.name.call(null,response_type_19544);
} else {
}

var seq__19537_19545 = cljs.core.seq.call(null,headers);
var chunk__19538_19546 = null;
var count__19539_19547 = (0);
var i__19540_19548 = (0);
while(true){
if((i__19540_19548 < count__19539_19547)){
var vec__19541_19549 = cljs.core._nth.call(null,chunk__19538_19546,i__19540_19548);
var k_19550 = cljs.core.nth.call(null,vec__19541_19549,(0),null);
var v_19551 = cljs.core.nth.call(null,vec__19541_19549,(1),null);
this$__$1.setRequestHeader(k_19550,v_19551);

var G__19552 = seq__19537_19545;
var G__19553 = chunk__19538_19546;
var G__19554 = count__19539_19547;
var G__19555 = (i__19540_19548 + (1));
seq__19537_19545 = G__19552;
chunk__19538_19546 = G__19553;
count__19539_19547 = G__19554;
i__19540_19548 = G__19555;
continue;
} else {
var temp__4425__auto___19556 = cljs.core.seq.call(null,seq__19537_19545);
if(temp__4425__auto___19556){
var seq__19537_19557__$1 = temp__4425__auto___19556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19537_19557__$1)){
var c__17629__auto___19558 = cljs.core.chunk_first.call(null,seq__19537_19557__$1);
var G__19559 = cljs.core.chunk_rest.call(null,seq__19537_19557__$1);
var G__19560 = c__17629__auto___19558;
var G__19561 = cljs.core.count.call(null,c__17629__auto___19558);
var G__19562 = (0);
seq__19537_19545 = G__19559;
chunk__19538_19546 = G__19560;
count__19539_19547 = G__19561;
i__19540_19548 = G__19562;
continue;
} else {
var vec__19542_19563 = cljs.core.first.call(null,seq__19537_19557__$1);
var k_19564 = cljs.core.nth.call(null,vec__19542_19563,(0),null);
var v_19565 = cljs.core.nth.call(null,vec__19542_19563,(1),null);
this$__$1.setRequestHeader(k_19564,v_19565);

var G__19566 = cljs.core.next.call(null,seq__19537_19557__$1);
var G__19567 = null;
var G__19568 = (0);
var G__19569 = (0);
seq__19537_19545 = G__19566;
chunk__19538_19546 = G__19567;
count__19539_19547 = G__19568;
i__19540_19548 = G__19569;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1449832770801