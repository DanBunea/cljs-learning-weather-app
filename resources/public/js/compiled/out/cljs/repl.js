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
var seq__23333_23347 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23334_23348 = null;
var count__23335_23349 = (0);
var i__23336_23350 = (0);
while(true){
if((i__23336_23350 < count__23335_23349)){
var f_23351 = cljs.core._nth.call(null,chunk__23334_23348,i__23336_23350);
cljs.core.println.call(null,"  ",f_23351);

var G__23352 = seq__23333_23347;
var G__23353 = chunk__23334_23348;
var G__23354 = count__23335_23349;
var G__23355 = (i__23336_23350 + (1));
seq__23333_23347 = G__23352;
chunk__23334_23348 = G__23353;
count__23335_23349 = G__23354;
i__23336_23350 = G__23355;
continue;
} else {
var temp__4425__auto___23356 = cljs.core.seq.call(null,seq__23333_23347);
if(temp__4425__auto___23356){
var seq__23333_23357__$1 = temp__4425__auto___23356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23333_23357__$1)){
var c__17629__auto___23358 = cljs.core.chunk_first.call(null,seq__23333_23357__$1);
var G__23359 = cljs.core.chunk_rest.call(null,seq__23333_23357__$1);
var G__23360 = c__17629__auto___23358;
var G__23361 = cljs.core.count.call(null,c__17629__auto___23358);
var G__23362 = (0);
seq__23333_23347 = G__23359;
chunk__23334_23348 = G__23360;
count__23335_23349 = G__23361;
i__23336_23350 = G__23362;
continue;
} else {
var f_23363 = cljs.core.first.call(null,seq__23333_23357__$1);
cljs.core.println.call(null,"  ",f_23363);

var G__23364 = cljs.core.next.call(null,seq__23333_23357__$1);
var G__23365 = null;
var G__23366 = (0);
var G__23367 = (0);
seq__23333_23347 = G__23364;
chunk__23334_23348 = G__23365;
count__23335_23349 = G__23366;
i__23336_23350 = G__23367;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23368 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23368);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23368)))?cljs.core.second.call(null,arglists_23368):arglists_23368));
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
var seq__23337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23338 = null;
var count__23339 = (0);
var i__23340 = (0);
while(true){
if((i__23340 < count__23339)){
var vec__23341 = cljs.core._nth.call(null,chunk__23338,i__23340);
var name = cljs.core.nth.call(null,vec__23341,(0),null);
var map__23342 = cljs.core.nth.call(null,vec__23341,(1),null);
var map__23342__$1 = ((((!((map__23342 == null)))?((((map__23342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23342):map__23342);
var doc = cljs.core.get.call(null,map__23342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23369 = seq__23337;
var G__23370 = chunk__23338;
var G__23371 = count__23339;
var G__23372 = (i__23340 + (1));
seq__23337 = G__23369;
chunk__23338 = G__23370;
count__23339 = G__23371;
i__23340 = G__23372;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23337);
if(temp__4425__auto__){
var seq__23337__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23337__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23337__$1);
var G__23373 = cljs.core.chunk_rest.call(null,seq__23337__$1);
var G__23374 = c__17629__auto__;
var G__23375 = cljs.core.count.call(null,c__17629__auto__);
var G__23376 = (0);
seq__23337 = G__23373;
chunk__23338 = G__23374;
count__23339 = G__23375;
i__23340 = G__23376;
continue;
} else {
var vec__23344 = cljs.core.first.call(null,seq__23337__$1);
var name = cljs.core.nth.call(null,vec__23344,(0),null);
var map__23345 = cljs.core.nth.call(null,vec__23344,(1),null);
var map__23345__$1 = ((((!((map__23345 == null)))?((((map__23345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23345):map__23345);
var doc = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23377 = cljs.core.next.call(null,seq__23337__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__23337 = G__23377;
chunk__23338 = G__23378;
count__23339 = G__23379;
i__23340 = G__23380;
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

//# sourceMappingURL=repl.js.map?rel=1449829727613