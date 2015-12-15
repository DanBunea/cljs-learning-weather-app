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
var seq__32800_32814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32801_32815 = null;
var count__32802_32816 = (0);
var i__32803_32817 = (0);
while(true){
if((i__32803_32817 < count__32802_32816)){
var f_32818 = cljs.core._nth.call(null,chunk__32801_32815,i__32803_32817);
cljs.core.println.call(null,"  ",f_32818);

var G__32819 = seq__32800_32814;
var G__32820 = chunk__32801_32815;
var G__32821 = count__32802_32816;
var G__32822 = (i__32803_32817 + (1));
seq__32800_32814 = G__32819;
chunk__32801_32815 = G__32820;
count__32802_32816 = G__32821;
i__32803_32817 = G__32822;
continue;
} else {
var temp__4425__auto___32823 = cljs.core.seq.call(null,seq__32800_32814);
if(temp__4425__auto___32823){
var seq__32800_32824__$1 = temp__4425__auto___32823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32800_32824__$1)){
var c__17630__auto___32825 = cljs.core.chunk_first.call(null,seq__32800_32824__$1);
var G__32826 = cljs.core.chunk_rest.call(null,seq__32800_32824__$1);
var G__32827 = c__17630__auto___32825;
var G__32828 = cljs.core.count.call(null,c__17630__auto___32825);
var G__32829 = (0);
seq__32800_32814 = G__32826;
chunk__32801_32815 = G__32827;
count__32802_32816 = G__32828;
i__32803_32817 = G__32829;
continue;
} else {
var f_32830 = cljs.core.first.call(null,seq__32800_32824__$1);
cljs.core.println.call(null,"  ",f_32830);

var G__32831 = cljs.core.next.call(null,seq__32800_32824__$1);
var G__32832 = null;
var G__32833 = (0);
var G__32834 = (0);
seq__32800_32814 = G__32831;
chunk__32801_32815 = G__32832;
count__32802_32816 = G__32833;
i__32803_32817 = G__32834;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32835 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32835);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32835)))?cljs.core.second.call(null,arglists_32835):arglists_32835));
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
var seq__32804 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32805 = null;
var count__32806 = (0);
var i__32807 = (0);
while(true){
if((i__32807 < count__32806)){
var vec__32808 = cljs.core._nth.call(null,chunk__32805,i__32807);
var name = cljs.core.nth.call(null,vec__32808,(0),null);
var map__32809 = cljs.core.nth.call(null,vec__32808,(1),null);
var map__32809__$1 = ((((!((map__32809 == null)))?((((map__32809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32809):map__32809);
var doc = cljs.core.get.call(null,map__32809__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32809__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32836 = seq__32804;
var G__32837 = chunk__32805;
var G__32838 = count__32806;
var G__32839 = (i__32807 + (1));
seq__32804 = G__32836;
chunk__32805 = G__32837;
count__32806 = G__32838;
i__32807 = G__32839;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32804);
if(temp__4425__auto__){
var seq__32804__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32804__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__32804__$1);
var G__32840 = cljs.core.chunk_rest.call(null,seq__32804__$1);
var G__32841 = c__17630__auto__;
var G__32842 = cljs.core.count.call(null,c__17630__auto__);
var G__32843 = (0);
seq__32804 = G__32840;
chunk__32805 = G__32841;
count__32806 = G__32842;
i__32807 = G__32843;
continue;
} else {
var vec__32811 = cljs.core.first.call(null,seq__32804__$1);
var name = cljs.core.nth.call(null,vec__32811,(0),null);
var map__32812 = cljs.core.nth.call(null,vec__32811,(1),null);
var map__32812__$1 = ((((!((map__32812 == null)))?((((map__32812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32812):map__32812);
var doc = cljs.core.get.call(null,map__32812__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32812__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32844 = cljs.core.next.call(null,seq__32804__$1);
var G__32845 = null;
var G__32846 = (0);
var G__32847 = (0);
seq__32804 = G__32844;
chunk__32805 = G__32845;
count__32806 = G__32846;
i__32807 = G__32847;
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