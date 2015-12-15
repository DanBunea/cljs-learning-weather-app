// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18175,handler){
var map__18176 = p__18175;
var map__18176__$1 = ((((!((map__18176 == null)))?((((map__18176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18176):map__18176);
var uri = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18176,map__18176__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18174_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18174_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18176,map__18176__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___18184 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___18184)){
var response_type_18185 = temp__4425__auto___18184;
this$__$1.responseType = cljs.core.name.call(null,response_type_18185);
} else {
}

var seq__18178_18186 = cljs.core.seq.call(null,headers);
var chunk__18179_18187 = null;
var count__18180_18188 = (0);
var i__18181_18189 = (0);
while(true){
if((i__18181_18189 < count__18180_18188)){
var vec__18182_18190 = cljs.core._nth.call(null,chunk__18179_18187,i__18181_18189);
var k_18191 = cljs.core.nth.call(null,vec__18182_18190,(0),null);
var v_18192 = cljs.core.nth.call(null,vec__18182_18190,(1),null);
this$__$1.setRequestHeader(k_18191,v_18192);

var G__18193 = seq__18178_18186;
var G__18194 = chunk__18179_18187;
var G__18195 = count__18180_18188;
var G__18196 = (i__18181_18189 + (1));
seq__18178_18186 = G__18193;
chunk__18179_18187 = G__18194;
count__18180_18188 = G__18195;
i__18181_18189 = G__18196;
continue;
} else {
var temp__4425__auto___18197 = cljs.core.seq.call(null,seq__18178_18186);
if(temp__4425__auto___18197){
var seq__18178_18198__$1 = temp__4425__auto___18197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18178_18198__$1)){
var c__17630__auto___18199 = cljs.core.chunk_first.call(null,seq__18178_18198__$1);
var G__18200 = cljs.core.chunk_rest.call(null,seq__18178_18198__$1);
var G__18201 = c__17630__auto___18199;
var G__18202 = cljs.core.count.call(null,c__17630__auto___18199);
var G__18203 = (0);
seq__18178_18186 = G__18200;
chunk__18179_18187 = G__18201;
count__18180_18188 = G__18202;
i__18181_18189 = G__18203;
continue;
} else {
var vec__18183_18204 = cljs.core.first.call(null,seq__18178_18198__$1);
var k_18205 = cljs.core.nth.call(null,vec__18183_18204,(0),null);
var v_18206 = cljs.core.nth.call(null,vec__18183_18204,(1),null);
this$__$1.setRequestHeader(k_18205,v_18206);

var G__18207 = cljs.core.next.call(null,seq__18178_18198__$1);
var G__18208 = null;
var G__18209 = (0);
var G__18210 = (0);
seq__18178_18186 = G__18207;
chunk__18179_18187 = G__18208;
count__18180_18188 = G__18209;
i__18181_18189 = G__18210;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1450189821649