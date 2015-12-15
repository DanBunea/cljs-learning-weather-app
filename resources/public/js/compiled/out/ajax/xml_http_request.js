// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__34233,handler){
var map__34234 = p__34233;
var map__34234__$1 = ((((!((map__34234 == null)))?((((map__34234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34234):map__34234);
var uri = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__34234,map__34234__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__34232_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__34232_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__34234,map__34234__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___34242 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___34242)){
var response_type_34243 = temp__4425__auto___34242;
this$__$1.responseType = cljs.core.name.call(null,response_type_34243);
} else {
}

var seq__34236_34244 = cljs.core.seq.call(null,headers);
var chunk__34237_34245 = null;
var count__34238_34246 = (0);
var i__34239_34247 = (0);
while(true){
if((i__34239_34247 < count__34238_34246)){
var vec__34240_34248 = cljs.core._nth.call(null,chunk__34237_34245,i__34239_34247);
var k_34249 = cljs.core.nth.call(null,vec__34240_34248,(0),null);
var v_34250 = cljs.core.nth.call(null,vec__34240_34248,(1),null);
this$__$1.setRequestHeader(k_34249,v_34250);

var G__34251 = seq__34236_34244;
var G__34252 = chunk__34237_34245;
var G__34253 = count__34238_34246;
var G__34254 = (i__34239_34247 + (1));
seq__34236_34244 = G__34251;
chunk__34237_34245 = G__34252;
count__34238_34246 = G__34253;
i__34239_34247 = G__34254;
continue;
} else {
var temp__4425__auto___34255 = cljs.core.seq.call(null,seq__34236_34244);
if(temp__4425__auto___34255){
var seq__34236_34256__$1 = temp__4425__auto___34255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34236_34256__$1)){
var c__17630__auto___34257 = cljs.core.chunk_first.call(null,seq__34236_34256__$1);
var G__34258 = cljs.core.chunk_rest.call(null,seq__34236_34256__$1);
var G__34259 = c__17630__auto___34257;
var G__34260 = cljs.core.count.call(null,c__17630__auto___34257);
var G__34261 = (0);
seq__34236_34244 = G__34258;
chunk__34237_34245 = G__34259;
count__34238_34246 = G__34260;
i__34239_34247 = G__34261;
continue;
} else {
var vec__34241_34262 = cljs.core.first.call(null,seq__34236_34256__$1);
var k_34263 = cljs.core.nth.call(null,vec__34241_34262,(0),null);
var v_34264 = cljs.core.nth.call(null,vec__34241_34262,(1),null);
this$__$1.setRequestHeader(k_34263,v_34264);

var G__34265 = cljs.core.next.call(null,seq__34236_34256__$1);
var G__34266 = null;
var G__34267 = (0);
var G__34268 = (0);
seq__34236_34244 = G__34265;
chunk__34237_34245 = G__34266;
count__34238_34246 = G__34267;
i__34239_34247 = G__34268;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1450190098958