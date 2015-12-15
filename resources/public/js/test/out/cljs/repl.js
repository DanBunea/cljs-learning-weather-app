// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25706_25720 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25707_25721 = null;
var count__25708_25722 = (0);
var i__25709_25723 = (0);
while(true){
if((i__25709_25723 < count__25708_25722)){
var f_25724 = cljs.core._nth.call(null,chunk__25707_25721,i__25709_25723);
cljs.core.println.call(null,"  ",f_25724);

var G__25725 = seq__25706_25720;
var G__25726 = chunk__25707_25721;
var G__25727 = count__25708_25722;
var G__25728 = (i__25709_25723 + (1));
seq__25706_25720 = G__25725;
chunk__25707_25721 = G__25726;
count__25708_25722 = G__25727;
i__25709_25723 = G__25728;
continue;
} else {
var temp__4425__auto___25729 = cljs.core.seq.call(null,seq__25706_25720);
if(temp__4425__auto___25729){
var seq__25706_25730__$1 = temp__4425__auto___25729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25706_25730__$1)){
var c__17631__auto___25731 = cljs.core.chunk_first.call(null,seq__25706_25730__$1);
var G__25732 = cljs.core.chunk_rest.call(null,seq__25706_25730__$1);
var G__25733 = c__17631__auto___25731;
var G__25734 = cljs.core.count.call(null,c__17631__auto___25731);
var G__25735 = (0);
seq__25706_25720 = G__25732;
chunk__25707_25721 = G__25733;
count__25708_25722 = G__25734;
i__25709_25723 = G__25735;
continue;
} else {
var f_25736 = cljs.core.first.call(null,seq__25706_25730__$1);
cljs.core.println.call(null,"  ",f_25736);

var G__25737 = cljs.core.next.call(null,seq__25706_25730__$1);
var G__25738 = null;
var G__25739 = (0);
var G__25740 = (0);
seq__25706_25720 = G__25737;
chunk__25707_25721 = G__25738;
count__25708_25722 = G__25739;
i__25709_25723 = G__25740;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25741 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16828__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25741);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25741)))?cljs.core.second.call(null,arglists_25741):arglists_25741));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25711 = null;
var count__25712 = (0);
var i__25713 = (0);
while(true){
if((i__25713 < count__25712)){
var vec__25714 = cljs.core._nth.call(null,chunk__25711,i__25713);
var name = cljs.core.nth.call(null,vec__25714,(0),null);
var map__25715 = cljs.core.nth.call(null,vec__25714,(1),null);
var map__25715__$1 = ((((!((map__25715 == null)))?((((map__25715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25715):map__25715);
var doc = cljs.core.get.call(null,map__25715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25715__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25742 = seq__25710;
var G__25743 = chunk__25711;
var G__25744 = count__25712;
var G__25745 = (i__25713 + (1));
seq__25710 = G__25742;
chunk__25711 = G__25743;
count__25712 = G__25744;
i__25713 = G__25745;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25710);
if(temp__4425__auto__){
var seq__25710__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25710__$1)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,seq__25710__$1);
var G__25746 = cljs.core.chunk_rest.call(null,seq__25710__$1);
var G__25747 = c__17631__auto__;
var G__25748 = cljs.core.count.call(null,c__17631__auto__);
var G__25749 = (0);
seq__25710 = G__25746;
chunk__25711 = G__25747;
count__25712 = G__25748;
i__25713 = G__25749;
continue;
} else {
var vec__25717 = cljs.core.first.call(null,seq__25710__$1);
var name = cljs.core.nth.call(null,vec__25717,(0),null);
var map__25718 = cljs.core.nth.call(null,vec__25717,(1),null);
var map__25718__$1 = ((((!((map__25718 == null)))?((((map__25718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25718):map__25718);
var doc = cljs.core.get.call(null,map__25718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25750 = cljs.core.next.call(null,seq__25710__$1);
var G__25751 = null;
var G__25752 = (0);
var G__25753 = (0);
seq__25710 = G__25750;
chunk__25711 = G__25751;
count__25712 = G__25752;
i__25713 = G__25753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map