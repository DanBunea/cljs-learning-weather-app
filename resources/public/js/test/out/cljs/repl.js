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
var seq__25463_25477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25464_25478 = null;
var count__25465_25479 = (0);
var i__25466_25480 = (0);
while(true){
if((i__25466_25480 < count__25465_25479)){
var f_25481 = cljs.core._nth.call(null,chunk__25464_25478,i__25466_25480);
cljs.core.println.call(null,"  ",f_25481);

var G__25482 = seq__25463_25477;
var G__25483 = chunk__25464_25478;
var G__25484 = count__25465_25479;
var G__25485 = (i__25466_25480 + (1));
seq__25463_25477 = G__25482;
chunk__25464_25478 = G__25483;
count__25465_25479 = G__25484;
i__25466_25480 = G__25485;
continue;
} else {
var temp__4425__auto___25486 = cljs.core.seq.call(null,seq__25463_25477);
if(temp__4425__auto___25486){
var seq__25463_25487__$1 = temp__4425__auto___25486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25463_25487__$1)){
var c__17629__auto___25488 = cljs.core.chunk_first.call(null,seq__25463_25487__$1);
var G__25489 = cljs.core.chunk_rest.call(null,seq__25463_25487__$1);
var G__25490 = c__17629__auto___25488;
var G__25491 = cljs.core.count.call(null,c__17629__auto___25488);
var G__25492 = (0);
seq__25463_25477 = G__25489;
chunk__25464_25478 = G__25490;
count__25465_25479 = G__25491;
i__25466_25480 = G__25492;
continue;
} else {
var f_25493 = cljs.core.first.call(null,seq__25463_25487__$1);
cljs.core.println.call(null,"  ",f_25493);

var G__25494 = cljs.core.next.call(null,seq__25463_25487__$1);
var G__25495 = null;
var G__25496 = (0);
var G__25497 = (0);
seq__25463_25477 = G__25494;
chunk__25464_25478 = G__25495;
count__25465_25479 = G__25496;
i__25466_25480 = G__25497;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25498 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25498);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25498)))?cljs.core.second.call(null,arglists_25498):arglists_25498));
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
var seq__25467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25468 = null;
var count__25469 = (0);
var i__25470 = (0);
while(true){
if((i__25470 < count__25469)){
var vec__25471 = cljs.core._nth.call(null,chunk__25468,i__25470);
var name = cljs.core.nth.call(null,vec__25471,(0),null);
var map__25472 = cljs.core.nth.call(null,vec__25471,(1),null);
var map__25472__$1 = ((((!((map__25472 == null)))?((((map__25472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);
var doc = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25499 = seq__25467;
var G__25500 = chunk__25468;
var G__25501 = count__25469;
var G__25502 = (i__25470 + (1));
seq__25467 = G__25499;
chunk__25468 = G__25500;
count__25469 = G__25501;
i__25470 = G__25502;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25467);
if(temp__4425__auto__){
var seq__25467__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25467__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25467__$1);
var G__25503 = cljs.core.chunk_rest.call(null,seq__25467__$1);
var G__25504 = c__17629__auto__;
var G__25505 = cljs.core.count.call(null,c__17629__auto__);
var G__25506 = (0);
seq__25467 = G__25503;
chunk__25468 = G__25504;
count__25469 = G__25505;
i__25470 = G__25506;
continue;
} else {
var vec__25474 = cljs.core.first.call(null,seq__25467__$1);
var name = cljs.core.nth.call(null,vec__25474,(0),null);
var map__25475 = cljs.core.nth.call(null,vec__25474,(1),null);
var map__25475__$1 = ((((!((map__25475 == null)))?((((map__25475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var doc = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25507 = cljs.core.next.call(null,seq__25467__$1);
var G__25508 = null;
var G__25509 = (0);
var G__25510 = (0);
seq__25467 = G__25507;
chunk__25468 = G__25508;
count__25469 = G__25509;
i__25470 = G__25510;
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