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
var len__17885__auto___32985 = arguments.length;
var i__17886__auto___32986 = (0);
while(true){
if((i__17886__auto___32986 < len__17885__auto___32985)){
args__17892__auto__.push((arguments[i__17886__auto___32986]));

var G__32987 = (i__17886__auto___32986 + (1));
i__17886__auto___32986 = G__32987;
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
var seq__32977_32988 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32978_32989 = null;
var count__32979_32990 = (0);
var i__32980_32991 = (0);
while(true){
if((i__32980_32991 < count__32979_32990)){
var k_32992 = cljs.core._nth.call(null,chunk__32978_32989,i__32980_32991);
e.setAttribute(cljs.core.name.call(null,k_32992),cljs.core.get.call(null,attrs,k_32992));

var G__32993 = seq__32977_32988;
var G__32994 = chunk__32978_32989;
var G__32995 = count__32979_32990;
var G__32996 = (i__32980_32991 + (1));
seq__32977_32988 = G__32993;
chunk__32978_32989 = G__32994;
count__32979_32990 = G__32995;
i__32980_32991 = G__32996;
continue;
} else {
var temp__4425__auto___32997 = cljs.core.seq.call(null,seq__32977_32988);
if(temp__4425__auto___32997){
var seq__32977_32998__$1 = temp__4425__auto___32997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32977_32998__$1)){
var c__17630__auto___32999 = cljs.core.chunk_first.call(null,seq__32977_32998__$1);
var G__33000 = cljs.core.chunk_rest.call(null,seq__32977_32998__$1);
var G__33001 = c__17630__auto___32999;
var G__33002 = cljs.core.count.call(null,c__17630__auto___32999);
var G__33003 = (0);
seq__32977_32988 = G__33000;
chunk__32978_32989 = G__33001;
count__32979_32990 = G__33002;
i__32980_32991 = G__33003;
continue;
} else {
var k_33004 = cljs.core.first.call(null,seq__32977_32998__$1);
e.setAttribute(cljs.core.name.call(null,k_33004),cljs.core.get.call(null,attrs,k_33004));

var G__33005 = cljs.core.next.call(null,seq__32977_32998__$1);
var G__33006 = null;
var G__33007 = (0);
var G__33008 = (0);
seq__32977_32988 = G__33005;
chunk__32978_32989 = G__33006;
count__32979_32990 = G__33007;
i__32980_32991 = G__33008;
continue;
}
} else {
}
}
break;
}

var seq__32981_33009 = cljs.core.seq.call(null,children);
var chunk__32982_33010 = null;
var count__32983_33011 = (0);
var i__32984_33012 = (0);
while(true){
if((i__32984_33012 < count__32983_33011)){
var ch_33013 = cljs.core._nth.call(null,chunk__32982_33010,i__32984_33012);
e.appendChild(ch_33013);

var G__33014 = seq__32981_33009;
var G__33015 = chunk__32982_33010;
var G__33016 = count__32983_33011;
var G__33017 = (i__32984_33012 + (1));
seq__32981_33009 = G__33014;
chunk__32982_33010 = G__33015;
count__32983_33011 = G__33016;
i__32984_33012 = G__33017;
continue;
} else {
var temp__4425__auto___33018 = cljs.core.seq.call(null,seq__32981_33009);
if(temp__4425__auto___33018){
var seq__32981_33019__$1 = temp__4425__auto___33018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32981_33019__$1)){
var c__17630__auto___33020 = cljs.core.chunk_first.call(null,seq__32981_33019__$1);
var G__33021 = cljs.core.chunk_rest.call(null,seq__32981_33019__$1);
var G__33022 = c__17630__auto___33020;
var G__33023 = cljs.core.count.call(null,c__17630__auto___33020);
var G__33024 = (0);
seq__32981_33009 = G__33021;
chunk__32982_33010 = G__33022;
count__32983_33011 = G__33023;
i__32984_33012 = G__33024;
continue;
} else {
var ch_33025 = cljs.core.first.call(null,seq__32981_33019__$1);
e.appendChild(ch_33025);

var G__33026 = cljs.core.next.call(null,seq__32981_33019__$1);
var G__33027 = null;
var G__33028 = (0);
var G__33029 = (0);
seq__32981_33009 = G__33026;
chunk__32982_33010 = G__33027;
count__32983_33011 = G__33028;
i__32984_33012 = G__33029;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32974){
var G__32975 = cljs.core.first.call(null,seq32974);
var seq32974__$1 = cljs.core.next.call(null,seq32974);
var G__32976 = cljs.core.first.call(null,seq32974__$1);
var seq32974__$2 = cljs.core.next.call(null,seq32974__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32975,G__32976,seq32974__$2);
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
var el_33030 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33030.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33030.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_33030.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33030);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33031,st_map){
var map__33036 = p__33031;
var map__33036__$1 = ((((!((map__33036 == null)))?((((map__33036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33036):map__33036);
var container_el = cljs.core.get.call(null,map__33036__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33036,map__33036__$1,container_el){
return (function (p__33038){
var vec__33039 = p__33038;
var k = cljs.core.nth.call(null,vec__33039,(0),null);
var v = cljs.core.nth.call(null,vec__33039,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33036,map__33036__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33040,dom_str){
var map__33043 = p__33040;
var map__33043__$1 = ((((!((map__33043 == null)))?((((map__33043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33043):map__33043);
var c = map__33043__$1;
var content_area_el = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33045){
var map__33048 = p__33045;
var map__33048__$1 = ((((!((map__33048 == null)))?((((map__33048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33048):map__33048);
var content_area_el = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_33091){
var state_val_33092 = (state_33091[(1)]);
if((state_val_33092 === (1))){
var inst_33076 = (state_33091[(7)]);
var inst_33076__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33077 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33078 = ["10px","10px","100%","68px","1.0"];
var inst_33079 = cljs.core.PersistentHashMap.fromArrays(inst_33077,inst_33078);
var inst_33080 = cljs.core.merge.call(null,inst_33079,style);
var inst_33081 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33076__$1,inst_33080);
var inst_33082 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33076__$1,msg);
var inst_33083 = cljs.core.async.timeout.call(null,(300));
var state_33091__$1 = (function (){var statearr_33093 = state_33091;
(statearr_33093[(8)] = inst_33081);

(statearr_33093[(7)] = inst_33076__$1);

(statearr_33093[(9)] = inst_33082);

return statearr_33093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33091__$1,(2),inst_33083);
} else {
if((state_val_33092 === (2))){
var inst_33076 = (state_33091[(7)]);
var inst_33085 = (state_33091[(2)]);
var inst_33086 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33087 = ["auto"];
var inst_33088 = cljs.core.PersistentHashMap.fromArrays(inst_33086,inst_33087);
var inst_33089 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33076,inst_33088);
var state_33091__$1 = (function (){var statearr_33094 = state_33091;
(statearr_33094[(10)] = inst_33085);

return statearr_33094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33091__$1,inst_33089);
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
var statearr_33098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____1 = (function (state_33091){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33099){if((e33099 instanceof Object)){
var ex__19970__auto__ = e33099;
var statearr_33100_33102 = state_33091;
(statearr_33100_33102[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33103 = state_33091;
state_33091 = G__33103;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__ = function(state_33091){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____1.call(this,state_33091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_33101 = f__20079__auto__.call(null);
(statearr_33101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_33101;
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
var vec__33105 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__33105,(0),null);
var ln = cljs.core.nth.call(null,vec__33105,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__33108 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__33108,(0),null);
var file_line = cljs.core.nth.call(null,vec__33108,(1),null);
var file_column = cljs.core.nth.call(null,vec__33108,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33108,file_name,file_line,file_column){
return (function (p1__33106_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__33106_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__33108,file_name,file_line,file_column))
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
var map__33111 = figwheel.client.heads_up.ensure_container.call(null);
var map__33111__$1 = ((((!((map__33111 == null)))?((((map__33111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33111):map__33111);
var content_area_el = cljs.core.get.call(null,map__33111__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (1))){
var inst_33142 = (state_33159[(7)]);
var inst_33142__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33143 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33144 = ["0.0"];
var inst_33145 = cljs.core.PersistentHashMap.fromArrays(inst_33143,inst_33144);
var inst_33146 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33142__$1,inst_33145);
var inst_33147 = cljs.core.async.timeout.call(null,(300));
var state_33159__$1 = (function (){var statearr_33161 = state_33159;
(statearr_33161[(8)] = inst_33146);

(statearr_33161[(7)] = inst_33142__$1);

return statearr_33161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33159__$1,(2),inst_33147);
} else {
if((state_val_33160 === (2))){
var inst_33142 = (state_33159[(7)]);
var inst_33149 = (state_33159[(2)]);
var inst_33150 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33151 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33152 = cljs.core.PersistentHashMap.fromArrays(inst_33150,inst_33151);
var inst_33153 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33142,inst_33152);
var inst_33154 = cljs.core.async.timeout.call(null,(200));
var state_33159__$1 = (function (){var statearr_33162 = state_33159;
(statearr_33162[(9)] = inst_33153);

(statearr_33162[(10)] = inst_33149);

return statearr_33162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33159__$1,(3),inst_33154);
} else {
if((state_val_33160 === (3))){
var inst_33142 = (state_33159[(7)]);
var inst_33156 = (state_33159[(2)]);
var inst_33157 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33142,"");
var state_33159__$1 = (function (){var statearr_33163 = state_33159;
(statearr_33163[(11)] = inst_33156);

return statearr_33163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33159__$1,inst_33157);
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
var statearr_33167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33167[(0)] = figwheel$client$heads_up$clear_$_state_machine__19967__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var figwheel$client$heads_up$clear_$_state_machine__19967__auto____1 = (function (state_33159){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33168){if((e33168 instanceof Object)){
var ex__19970__auto__ = e33168;
var statearr_33169_33171 = state_33159;
(statearr_33169_33171[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33172 = state_33159;
state_33159 = G__33172;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19967__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19967__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19967__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19967__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_33170 = f__20079__auto__.call(null);
(statearr_33170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_33170;
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
return (function (state_33204){
var state_val_33205 = (state_33204[(1)]);
if((state_val_33205 === (1))){
var inst_33194 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33204__$1,(2),inst_33194);
} else {
if((state_val_33205 === (2))){
var inst_33196 = (state_33204[(2)]);
var inst_33197 = cljs.core.async.timeout.call(null,(400));
var state_33204__$1 = (function (){var statearr_33206 = state_33204;
(statearr_33206[(7)] = inst_33196);

return statearr_33206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33204__$1,(3),inst_33197);
} else {
if((state_val_33205 === (3))){
var inst_33199 = (state_33204[(2)]);
var inst_33200 = figwheel.client.heads_up.clear.call(null);
var state_33204__$1 = (function (){var statearr_33207 = state_33204;
(statearr_33207[(8)] = inst_33199);

return statearr_33207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33204__$1,(4),inst_33200);
} else {
if((state_val_33205 === (4))){
var inst_33202 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33204__$1,inst_33202);
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
var statearr_33211 = [null,null,null,null,null,null,null,null,null];
(statearr_33211[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__);

(statearr_33211[(1)] = (1));

return statearr_33211;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____1 = (function (state_33204){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_33204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e33212){if((e33212 instanceof Object)){
var ex__19970__auto__ = e33212;
var statearr_33213_33215 = state_33204;
(statearr_33213_33215[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33216 = state_33204;
state_33204 = G__33216;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__ = function(state_33204){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____1.call(this,state_33204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_33214 = f__20079__auto__.call(null);
(statearr_33214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_33214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map