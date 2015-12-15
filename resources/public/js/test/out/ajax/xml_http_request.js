// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__20635,handler){
var map__20636 = p__20635;
var map__20636__$1 = ((((!((map__20636 == null)))?((((map__20636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20636):map__20636);
var uri = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__20636,map__20636__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__20634_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__20634_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__20636,map__20636__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___20644 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___20644)){
var response_type_20645 = temp__4425__auto___20644;
this$__$1.responseType = cljs.core.name.call(null,response_type_20645);
} else {
}

var seq__20638_20646 = cljs.core.seq.call(null,headers);
var chunk__20639_20647 = null;
var count__20640_20648 = (0);
var i__20641_20649 = (0);
while(true){
if((i__20641_20649 < count__20640_20648)){
var vec__20642_20650 = cljs.core._nth.call(null,chunk__20639_20647,i__20641_20649);
var k_20651 = cljs.core.nth.call(null,vec__20642_20650,(0),null);
var v_20652 = cljs.core.nth.call(null,vec__20642_20650,(1),null);
this$__$1.setRequestHeader(k_20651,v_20652);

var G__20653 = seq__20638_20646;
var G__20654 = chunk__20639_20647;
var G__20655 = count__20640_20648;
var G__20656 = (i__20641_20649 + (1));
seq__20638_20646 = G__20653;
chunk__20639_20647 = G__20654;
count__20640_20648 = G__20655;
i__20641_20649 = G__20656;
continue;
} else {
var temp__4425__auto___20657 = cljs.core.seq.call(null,seq__20638_20646);
if(temp__4425__auto___20657){
var seq__20638_20658__$1 = temp__4425__auto___20657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20638_20658__$1)){
var c__17629__auto___20659 = cljs.core.chunk_first.call(null,seq__20638_20658__$1);
var G__20660 = cljs.core.chunk_rest.call(null,seq__20638_20658__$1);
var G__20661 = c__17629__auto___20659;
var G__20662 = cljs.core.count.call(null,c__17629__auto___20659);
var G__20663 = (0);
seq__20638_20646 = G__20660;
chunk__20639_20647 = G__20661;
count__20640_20648 = G__20662;
i__20641_20649 = G__20663;
continue;
} else {
var vec__20643_20664 = cljs.core.first.call(null,seq__20638_20658__$1);
var k_20665 = cljs.core.nth.call(null,vec__20643_20664,(0),null);
var v_20666 = cljs.core.nth.call(null,vec__20643_20664,(1),null);
this$__$1.setRequestHeader(k_20665,v_20666);

var G__20667 = cljs.core.next.call(null,seq__20638_20658__$1);
var G__20668 = null;
var G__20669 = (0);
var G__20670 = (0);
seq__20638_20646 = G__20667;
chunk__20639_20647 = G__20668;
count__20640_20648 = G__20669;
i__20641_20649 = G__20670;
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