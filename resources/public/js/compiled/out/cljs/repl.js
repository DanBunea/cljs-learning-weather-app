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
var seq__38917_38931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38918_38932 = null;
var count__38919_38933 = (0);
var i__38920_38934 = (0);
while(true){
if((i__38920_38934 < count__38919_38933)){
var f_38935 = cljs.core._nth.call(null,chunk__38918_38932,i__38920_38934);
cljs.core.println.call(null,"  ",f_38935);

var G__38936 = seq__38917_38931;
var G__38937 = chunk__38918_38932;
var G__38938 = count__38919_38933;
var G__38939 = (i__38920_38934 + (1));
seq__38917_38931 = G__38936;
chunk__38918_38932 = G__38937;
count__38919_38933 = G__38938;
i__38920_38934 = G__38939;
continue;
} else {
var temp__4425__auto___38940 = cljs.core.seq.call(null,seq__38917_38931);
if(temp__4425__auto___38940){
var seq__38917_38941__$1 = temp__4425__auto___38940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38917_38941__$1)){
var c__17630__auto___38942 = cljs.core.chunk_first.call(null,seq__38917_38941__$1);
var G__38943 = cljs.core.chunk_rest.call(null,seq__38917_38941__$1);
var G__38944 = c__17630__auto___38942;
var G__38945 = cljs.core.count.call(null,c__17630__auto___38942);
var G__38946 = (0);
seq__38917_38931 = G__38943;
chunk__38918_38932 = G__38944;
count__38919_38933 = G__38945;
i__38920_38934 = G__38946;
continue;
} else {
var f_38947 = cljs.core.first.call(null,seq__38917_38941__$1);
cljs.core.println.call(null,"  ",f_38947);

var G__38948 = cljs.core.next.call(null,seq__38917_38941__$1);
var G__38949 = null;
var G__38950 = (0);
var G__38951 = (0);
seq__38917_38931 = G__38948;
chunk__38918_38932 = G__38949;
count__38919_38933 = G__38950;
i__38920_38934 = G__38951;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38952 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38952);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38952)))?cljs.core.second.call(null,arglists_38952):arglists_38952));
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
var seq__38921 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38922 = null;
var count__38923 = (0);
var i__38924 = (0);
while(true){
if((i__38924 < count__38923)){
var vec__38925 = cljs.core._nth.call(null,chunk__38922,i__38924);
var name = cljs.core.nth.call(null,vec__38925,(0),null);
var map__38926 = cljs.core.nth.call(null,vec__38925,(1),null);
var map__38926__$1 = ((((!((map__38926 == null)))?((((map__38926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38926):map__38926);
var doc = cljs.core.get.call(null,map__38926__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38926__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38953 = seq__38921;
var G__38954 = chunk__38922;
var G__38955 = count__38923;
var G__38956 = (i__38924 + (1));
seq__38921 = G__38953;
chunk__38922 = G__38954;
count__38923 = G__38955;
i__38924 = G__38956;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38921);
if(temp__4425__auto__){
var seq__38921__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38921__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__38921__$1);
var G__38957 = cljs.core.chunk_rest.call(null,seq__38921__$1);
var G__38958 = c__17630__auto__;
var G__38959 = cljs.core.count.call(null,c__17630__auto__);
var G__38960 = (0);
seq__38921 = G__38957;
chunk__38922 = G__38958;
count__38923 = G__38959;
i__38924 = G__38960;
continue;
} else {
var vec__38928 = cljs.core.first.call(null,seq__38921__$1);
var name = cljs.core.nth.call(null,vec__38928,(0),null);
var map__38929 = cljs.core.nth.call(null,vec__38928,(1),null);
var map__38929__$1 = ((((!((map__38929 == null)))?((((map__38929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38929):map__38929);
var doc = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38961 = cljs.core.next.call(null,seq__38921__$1);
var G__38962 = null;
var G__38963 = (0);
var G__38964 = (0);
seq__38921 = G__38961;
chunk__38922 = G__38962;
count__38923 = G__38963;
i__38924 = G__38964;
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

//# sourceMappingURL=repl.js.map?rel=1450190105938