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
var seq__23997_24011 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23998_24012 = null;
var count__23999_24013 = (0);
var i__24000_24014 = (0);
while(true){
if((i__24000_24014 < count__23999_24013)){
var f_24015 = cljs.core._nth.call(null,chunk__23998_24012,i__24000_24014);
cljs.core.println.call(null,"  ",f_24015);

var G__24016 = seq__23997_24011;
var G__24017 = chunk__23998_24012;
var G__24018 = count__23999_24013;
var G__24019 = (i__24000_24014 + (1));
seq__23997_24011 = G__24016;
chunk__23998_24012 = G__24017;
count__23999_24013 = G__24018;
i__24000_24014 = G__24019;
continue;
} else {
var temp__4425__auto___24020 = cljs.core.seq.call(null,seq__23997_24011);
if(temp__4425__auto___24020){
var seq__23997_24021__$1 = temp__4425__auto___24020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23997_24021__$1)){
var c__17630__auto___24022 = cljs.core.chunk_first.call(null,seq__23997_24021__$1);
var G__24023 = cljs.core.chunk_rest.call(null,seq__23997_24021__$1);
var G__24024 = c__17630__auto___24022;
var G__24025 = cljs.core.count.call(null,c__17630__auto___24022);
var G__24026 = (0);
seq__23997_24011 = G__24023;
chunk__23998_24012 = G__24024;
count__23999_24013 = G__24025;
i__24000_24014 = G__24026;
continue;
} else {
var f_24027 = cljs.core.first.call(null,seq__23997_24021__$1);
cljs.core.println.call(null,"  ",f_24027);

var G__24028 = cljs.core.next.call(null,seq__23997_24021__$1);
var G__24029 = null;
var G__24030 = (0);
var G__24031 = (0);
seq__23997_24011 = G__24028;
chunk__23998_24012 = G__24029;
count__23999_24013 = G__24030;
i__24000_24014 = G__24031;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24032 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24032);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24032)))?cljs.core.second.call(null,arglists_24032):arglists_24032));
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
var seq__24001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24002 = null;
var count__24003 = (0);
var i__24004 = (0);
while(true){
if((i__24004 < count__24003)){
var vec__24005 = cljs.core._nth.call(null,chunk__24002,i__24004);
var name = cljs.core.nth.call(null,vec__24005,(0),null);
var map__24006 = cljs.core.nth.call(null,vec__24005,(1),null);
var map__24006__$1 = ((((!((map__24006 == null)))?((((map__24006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24006):map__24006);
var doc = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24033 = seq__24001;
var G__24034 = chunk__24002;
var G__24035 = count__24003;
var G__24036 = (i__24004 + (1));
seq__24001 = G__24033;
chunk__24002 = G__24034;
count__24003 = G__24035;
i__24004 = G__24036;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24001);
if(temp__4425__auto__){
var seq__24001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24001__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__24001__$1);
var G__24037 = cljs.core.chunk_rest.call(null,seq__24001__$1);
var G__24038 = c__17630__auto__;
var G__24039 = cljs.core.count.call(null,c__17630__auto__);
var G__24040 = (0);
seq__24001 = G__24037;
chunk__24002 = G__24038;
count__24003 = G__24039;
i__24004 = G__24040;
continue;
} else {
var vec__24008 = cljs.core.first.call(null,seq__24001__$1);
var name = cljs.core.nth.call(null,vec__24008,(0),null);
var map__24009 = cljs.core.nth.call(null,vec__24008,(1),null);
var map__24009__$1 = ((((!((map__24009 == null)))?((((map__24009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24009):map__24009);
var doc = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24041 = cljs.core.next.call(null,seq__24001__$1);
var G__24042 = null;
var G__24043 = (0);
var G__24044 = (0);
seq__24001 = G__24041;
chunk__24002 = G__24042;
count__24003 = G__24043;
i__24004 = G__24044;
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

//# sourceMappingURL=repl.js.map?rel=1450189828192