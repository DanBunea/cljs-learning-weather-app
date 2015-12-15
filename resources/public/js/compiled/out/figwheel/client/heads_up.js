// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17892__auto__ = [];
var len__17885__auto___24182 = arguments.length;
var i__17886__auto___24183 = (0);
while(true){
if((i__17886__auto___24183 < len__17885__auto___24182)){
args__17892__auto__.push((arguments[i__17886__auto___24183]));

var G__24184 = (i__17886__auto___24183 + (1));
i__17886__auto___24183 = G__24184;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((2) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17893__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24174_24185 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24175_24186 = null;
var count__24176_24187 = (0);
var i__24177_24188 = (0);
while(true){
if((i__24177_24188 < count__24176_24187)){
var k_24189 = cljs.core._nth.call(null,chunk__24175_24186,i__24177_24188);
e.setAttribute(cljs.core.name.call(null,k_24189),cljs.core.get.call(null,attrs,k_24189));

var G__24190 = seq__24174_24185;
var G__24191 = chunk__24175_24186;
var G__24192 = count__24176_24187;
var G__24193 = (i__24177_24188 + (1));
seq__24174_24185 = G__24190;
chunk__24175_24186 = G__24191;
count__24176_24187 = G__24192;
i__24177_24188 = G__24193;
continue;
} else {
var temp__4425__auto___24194 = cljs.core.seq.call(null,seq__24174_24185);
if(temp__4425__auto___24194){
var seq__24174_24195__$1 = temp__4425__auto___24194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24174_24195__$1)){
var c__17630__auto___24196 = cljs.core.chunk_first.call(null,seq__24174_24195__$1);
var G__24197 = cljs.core.chunk_rest.call(null,seq__24174_24195__$1);
var G__24198 = c__17630__auto___24196;
var G__24199 = cljs.core.count.call(null,c__17630__auto___24196);
var G__24200 = (0);
seq__24174_24185 = G__24197;
chunk__24175_24186 = G__24198;
count__24176_24187 = G__24199;
i__24177_24188 = G__24200;
continue;
} else {
var k_24201 = cljs.core.first.call(null,seq__24174_24195__$1);
e.setAttribute(cljs.core.name.call(null,k_24201),cljs.core.get.call(null,attrs,k_24201));

var G__24202 = cljs.core.next.call(null,seq__24174_24195__$1);
var G__24203 = null;
var G__24204 = (0);
var G__24205 = (0);
seq__24174_24185 = G__24202;
chunk__24175_24186 = G__24203;
count__24176_24187 = G__24204;
i__24177_24188 = G__24205;
continue;
}
} else {
}
}
break;
}

var seq__24178_24206 = cljs.core.seq.call(null,children);
var chunk__24179_24207 = null;
var count__24180_24208 = (0);
var i__24181_24209 = (0);
while(true){
if((i__24181_24209 < count__24180_24208)){
var ch_24210 = cljs.core._nth.call(null,chunk__24179_24207,i__24181_24209);
e.appendChild(ch_24210);

var G__24211 = seq__24178_24206;
var G__24212 = chunk__24179_24207;
var G__24213 = count__24180_24208;
var G__24214 = (i__24181_24209 + (1));
seq__24178_24206 = G__24211;
chunk__24179_24207 = G__24212;
count__24180_24208 = G__24213;
i__24181_24209 = G__24214;
continue;
} else {
var temp__4425__auto___24215 = cljs.core.seq.call(null,seq__24178_24206);
if(temp__4425__auto___24215){
var seq__24178_24216__$1 = temp__4425__auto___24215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24178_24216__$1)){
var c__17630__auto___24217 = cljs.core.chunk_first.call(null,seq__24178_24216__$1);
var G__24218 = cljs.core.chunk_rest.call(null,seq__24178_24216__$1);
var G__24219 = c__17630__auto___24217;
var G__24220 = cljs.core.count.call(null,c__17630__auto___24217);
var G__24221 = (0);
seq__24178_24206 = G__24218;
chunk__24179_24207 = G__24219;
count__24180_24208 = G__24220;
i__24181_24209 = G__24221;
continue;
} else {
var ch_24222 = cljs.core.first.call(null,seq__24178_24216__$1);
e.appendChild(ch_24222);

var G__24223 = cljs.core.next.call(null,seq__24178_24216__$1);
var G__24224 = null;
var G__24225 = (0);
var G__24226 = (0);
seq__24178_24206 = G__24223;
chunk__24179_24207 = G__24224;
count__24180_24208 = G__24225;
i__24181_24209 = G__24226;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24171){
var G__24172 = cljs.core.first.call(null,seq24171);
var seq24171__$1 = cljs.core.next.call(null,seq24171);
var G__24173 = cljs.core.first.call(null,seq24171__$1);
var seq24171__$2 = cljs.core.next.call(null,seq24171__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24172,G__24173,seq24171__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17743__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17744__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17740__auto__,prefer_table__17741__auto__,method_cache__17742__auto__,cached_hierarchy__17743__auto__,hierarchy__17744__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17740__auto__,prefer_table__17741__auto__,method_cache__17742__auto__,cached_hierarchy__17743__auto__,hierarchy__17744__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17744__auto__,method_table__17740__auto__,prefer_table__17741__auto__,method_cache__17742__auto__,cached_hierarchy__17743__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24227 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24227.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24227.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24227.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24227);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24228,st_map){
var map__24233 = p__24228;
var map__24233__$1 = ((((!((map__24233 == null)))?((((map__24233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24233):map__24233);
var container_el = cljs.core.get.call(null,map__24233__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24233,map__24233__$1,container_el){
return (function (p__24235){
var vec__24236 = p__24235;
var k = cljs.core.nth.call(null,vec__24236,(0),null);
var v = cljs.core.nth.call(null,vec__24236,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24233,map__24233__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24237,dom_str){
var map__24240 = p__24237;
var map__24240__$1 = ((((!((map__24240 == null)))?((((map__24240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24240):map__24240);
var c = map__24240__$1;
var content_area_el = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24242){
var map__24245 = p__24242;
var map__24245__$1 = ((((!((map__24245 == null)))?((((map__24245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24245):map__24245);
var content_area_el = cljs.core.get.call(null,map__24245__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_24288){
var state_val_24289 = (state_24288[(1)]);
if((state_val_24289 === (1))){
var inst_24273 = (state_24288[(7)]);
var inst_24273__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24274 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24275 = ["10px","10px","100%","68px","1.0"];
var inst_24276 = cljs.core.PersistentHashMap.fromArrays(inst_24274,inst_24275);
var inst_24277 = cljs.core.merge.call(null,inst_24276,style);
var inst_24278 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24273__$1,inst_24277);
var inst_24279 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24273__$1,msg);
var inst_24280 = cljs.core.async.timeout.call(null,(300));
var state_24288__$1 = (function (){var statearr_24290 = state_24288;
(statearr_24290[(8)] = inst_24278);

(statearr_24290[(7)] = inst_24273__$1);

(statearr_24290[(9)] = inst_24279);

return statearr_24290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24288__$1,(2),inst_24280);
} else {
if((state_val_24289 === (2))){
var inst_24273 = (state_24288[(7)]);
var inst_24282 = (state_24288[(2)]);
var inst_24283 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24284 = ["auto"];
var inst_24285 = cljs.core.PersistentHashMap.fromArrays(inst_24283,inst_24284);
var inst_24286 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24273,inst_24285);
var state_24288__$1 = (function (){var statearr_24291 = state_24288;
(statearr_24291[(10)] = inst_24282);

return statearr_24291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24288__$1,inst_24286);
} else {
return null;
}
}
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____0 = (function (){
var statearr_24295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24295[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__);

(statearr_24295[(1)] = (1));

return statearr_24295;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____1 = (function (state_24288){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_24288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e24296){if((e24296 instanceof Object)){
var ex__19970__auto__ = e24296;
var statearr_24297_24299 = state_24288;
(statearr_24297_24299[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24300 = state_24288;
state_24288 = G__24300;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__ = function(state_24288){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____1.call(this,state_24288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_24298 = f__20079__auto__.call(null);
(statearr_24298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_24298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24302 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24302,(0),null);
var ln = cljs.core.nth.call(null,vec__24302,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24305 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24305,(0),null);
var file_line = cljs.core.nth.call(null,vec__24305,(1),null);
var file_column = cljs.core.nth.call(null,vec__24305,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24305,file_name,file_line,file_column){
return (function (p1__24303_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24303_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24305,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24308 = figwheel.client.heads_up.ensure_container.call(null);
var map__24308__$1 = ((((!((map__24308 == null)))?((((map__24308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24308):map__24308);
var content_area_el = cljs.core.get.call(null,map__24308__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_24356){
var state_val_24357 = (state_24356[(1)]);
if((state_val_24357 === (1))){
var inst_24339 = (state_24356[(7)]);
var inst_24339__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24340 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24341 = ["0.0"];
var inst_24342 = cljs.core.PersistentHashMap.fromArrays(inst_24340,inst_24341);
var inst_24343 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24339__$1,inst_24342);
var inst_24344 = cljs.core.async.timeout.call(null,(300));
var state_24356__$1 = (function (){var statearr_24358 = state_24356;
(statearr_24358[(8)] = inst_24343);

(statearr_24358[(7)] = inst_24339__$1);

return statearr_24358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24356__$1,(2),inst_24344);
} else {
if((state_val_24357 === (2))){
var inst_24339 = (state_24356[(7)]);
var inst_24346 = (state_24356[(2)]);
var inst_24347 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24348 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24349 = cljs.core.PersistentHashMap.fromArrays(inst_24347,inst_24348);
var inst_24350 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24339,inst_24349);
var inst_24351 = cljs.core.async.timeout.call(null,(200));
var state_24356__$1 = (function (){var statearr_24359 = state_24356;
(statearr_24359[(9)] = inst_24350);

(statearr_24359[(10)] = inst_24346);

return statearr_24359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24356__$1,(3),inst_24351);
} else {
if((state_val_24357 === (3))){
var inst_24339 = (state_24356[(7)]);
var inst_24353 = (state_24356[(2)]);
var inst_24354 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24339,"");
var state_24356__$1 = (function (){var statearr_24360 = state_24356;
(statearr_24360[(11)] = inst_24353);

return statearr_24360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24356__$1,inst_24354);
} else {
return null;
}
}
}
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19967__auto____0 = (function (){
var statearr_24364 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24364[(0)] = figwheel$client$heads_up$clear_$_state_machine__19967__auto__);

(statearr_24364[(1)] = (1));

return statearr_24364;
});
var figwheel$client$heads_up$clear_$_state_machine__19967__auto____1 = (function (state_24356){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_24356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e24365){if((e24365 instanceof Object)){
var ex__19970__auto__ = e24365;
var statearr_24366_24368 = state_24356;
(statearr_24366_24368[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24369 = state_24356;
state_24356 = G__24369;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19967__auto__ = function(state_24356){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19967__auto____1.call(this,state_24356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19967__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19967__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_24367 = f__20079__auto__.call(null);
(statearr_24367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_24367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_24401){
var state_val_24402 = (state_24401[(1)]);
if((state_val_24402 === (1))){
var inst_24391 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24401__$1,(2),inst_24391);
} else {
if((state_val_24402 === (2))){
var inst_24393 = (state_24401[(2)]);
var inst_24394 = cljs.core.async.timeout.call(null,(400));
var state_24401__$1 = (function (){var statearr_24403 = state_24401;
(statearr_24403[(7)] = inst_24393);

return statearr_24403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24401__$1,(3),inst_24394);
} else {
if((state_val_24402 === (3))){
var inst_24396 = (state_24401[(2)]);
var inst_24397 = figwheel.client.heads_up.clear.call(null);
var state_24401__$1 = (function (){var statearr_24404 = state_24401;
(statearr_24404[(8)] = inst_24396);

return statearr_24404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24401__$1,(4),inst_24397);
} else {
if((state_val_24402 === (4))){
var inst_24399 = (state_24401[(2)]);
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24401__$1,inst_24399);
} else {
return null;
}
}
}
}
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____0 = (function (){
var statearr_24408 = [null,null,null,null,null,null,null,null,null];
(statearr_24408[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__);

(statearr_24408[(1)] = (1));

return statearr_24408;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____1 = (function (state_24401){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_24401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e24409){if((e24409 instanceof Object)){
var ex__19970__auto__ = e24409;
var statearr_24410_24412 = state_24401;
(statearr_24410_24412[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24413 = state_24401;
state_24401 = G__24413;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__ = function(state_24401){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____1.call(this,state_24401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_24411 = f__20079__auto__.call(null);
(statearr_24411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_24411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1450189828927