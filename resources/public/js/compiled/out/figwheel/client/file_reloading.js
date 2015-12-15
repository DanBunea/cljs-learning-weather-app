// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22973_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22973_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22978 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22979 = null;
var count__22980 = (0);
var i__22981 = (0);
while(true){
if((i__22981 < count__22980)){
var n = cljs.core._nth.call(null,chunk__22979,i__22981);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22982 = seq__22978;
var G__22983 = chunk__22979;
var G__22984 = count__22980;
var G__22985 = (i__22981 + (1));
seq__22978 = G__22982;
chunk__22979 = G__22983;
count__22980 = G__22984;
i__22981 = G__22985;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22978);
if(temp__4425__auto__){
var seq__22978__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22978__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__22978__$1);
var G__22986 = cljs.core.chunk_rest.call(null,seq__22978__$1);
var G__22987 = c__17630__auto__;
var G__22988 = cljs.core.count.call(null,c__17630__auto__);
var G__22989 = (0);
seq__22978 = G__22986;
chunk__22979 = G__22987;
count__22980 = G__22988;
i__22981 = G__22989;
continue;
} else {
var n = cljs.core.first.call(null,seq__22978__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22990 = cljs.core.next.call(null,seq__22978__$1);
var G__22991 = null;
var G__22992 = (0);
var G__22993 = (0);
seq__22978 = G__22990;
chunk__22979 = G__22991;
count__22980 = G__22992;
i__22981 = G__22993;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23032_23039 = cljs.core.seq.call(null,deps);
var chunk__23033_23040 = null;
var count__23034_23041 = (0);
var i__23035_23042 = (0);
while(true){
if((i__23035_23042 < count__23034_23041)){
var dep_23043 = cljs.core._nth.call(null,chunk__23033_23040,i__23035_23042);
topo_sort_helper_STAR_.call(null,dep_23043,(depth + (1)),state);

var G__23044 = seq__23032_23039;
var G__23045 = chunk__23033_23040;
var G__23046 = count__23034_23041;
var G__23047 = (i__23035_23042 + (1));
seq__23032_23039 = G__23044;
chunk__23033_23040 = G__23045;
count__23034_23041 = G__23046;
i__23035_23042 = G__23047;
continue;
} else {
var temp__4425__auto___23048 = cljs.core.seq.call(null,seq__23032_23039);
if(temp__4425__auto___23048){
var seq__23032_23049__$1 = temp__4425__auto___23048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23032_23049__$1)){
var c__17630__auto___23050 = cljs.core.chunk_first.call(null,seq__23032_23049__$1);
var G__23051 = cljs.core.chunk_rest.call(null,seq__23032_23049__$1);
var G__23052 = c__17630__auto___23050;
var G__23053 = cljs.core.count.call(null,c__17630__auto___23050);
var G__23054 = (0);
seq__23032_23039 = G__23051;
chunk__23033_23040 = G__23052;
count__23034_23041 = G__23053;
i__23035_23042 = G__23054;
continue;
} else {
var dep_23055 = cljs.core.first.call(null,seq__23032_23049__$1);
topo_sort_helper_STAR_.call(null,dep_23055,(depth + (1)),state);

var G__23056 = cljs.core.next.call(null,seq__23032_23049__$1);
var G__23057 = null;
var G__23058 = (0);
var G__23059 = (0);
seq__23032_23039 = G__23056;
chunk__23033_23040 = G__23057;
count__23034_23041 = G__23058;
i__23035_23042 = G__23059;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23036){
var vec__23038 = p__23036;
var x = cljs.core.nth.call(null,vec__23038,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23038,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23038,x,xs,get_deps__$1){
return (function (p1__22994_SHARP_){
return clojure.set.difference.call(null,p1__22994_SHARP_,x);
});})(vec__23038,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23072 = cljs.core.seq.call(null,provides);
var chunk__23073 = null;
var count__23074 = (0);
var i__23075 = (0);
while(true){
if((i__23075 < count__23074)){
var prov = cljs.core._nth.call(null,chunk__23073,i__23075);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23076_23084 = cljs.core.seq.call(null,requires);
var chunk__23077_23085 = null;
var count__23078_23086 = (0);
var i__23079_23087 = (0);
while(true){
if((i__23079_23087 < count__23078_23086)){
var req_23088 = cljs.core._nth.call(null,chunk__23077_23085,i__23079_23087);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23088,prov);

var G__23089 = seq__23076_23084;
var G__23090 = chunk__23077_23085;
var G__23091 = count__23078_23086;
var G__23092 = (i__23079_23087 + (1));
seq__23076_23084 = G__23089;
chunk__23077_23085 = G__23090;
count__23078_23086 = G__23091;
i__23079_23087 = G__23092;
continue;
} else {
var temp__4425__auto___23093 = cljs.core.seq.call(null,seq__23076_23084);
if(temp__4425__auto___23093){
var seq__23076_23094__$1 = temp__4425__auto___23093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23076_23094__$1)){
var c__17630__auto___23095 = cljs.core.chunk_first.call(null,seq__23076_23094__$1);
var G__23096 = cljs.core.chunk_rest.call(null,seq__23076_23094__$1);
var G__23097 = c__17630__auto___23095;
var G__23098 = cljs.core.count.call(null,c__17630__auto___23095);
var G__23099 = (0);
seq__23076_23084 = G__23096;
chunk__23077_23085 = G__23097;
count__23078_23086 = G__23098;
i__23079_23087 = G__23099;
continue;
} else {
var req_23100 = cljs.core.first.call(null,seq__23076_23094__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23100,prov);

var G__23101 = cljs.core.next.call(null,seq__23076_23094__$1);
var G__23102 = null;
var G__23103 = (0);
var G__23104 = (0);
seq__23076_23084 = G__23101;
chunk__23077_23085 = G__23102;
count__23078_23086 = G__23103;
i__23079_23087 = G__23104;
continue;
}
} else {
}
}
break;
}

var G__23105 = seq__23072;
var G__23106 = chunk__23073;
var G__23107 = count__23074;
var G__23108 = (i__23075 + (1));
seq__23072 = G__23105;
chunk__23073 = G__23106;
count__23074 = G__23107;
i__23075 = G__23108;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23072);
if(temp__4425__auto__){
var seq__23072__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23072__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__23072__$1);
var G__23109 = cljs.core.chunk_rest.call(null,seq__23072__$1);
var G__23110 = c__17630__auto__;
var G__23111 = cljs.core.count.call(null,c__17630__auto__);
var G__23112 = (0);
seq__23072 = G__23109;
chunk__23073 = G__23110;
count__23074 = G__23111;
i__23075 = G__23112;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23072__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23080_23113 = cljs.core.seq.call(null,requires);
var chunk__23081_23114 = null;
var count__23082_23115 = (0);
var i__23083_23116 = (0);
while(true){
if((i__23083_23116 < count__23082_23115)){
var req_23117 = cljs.core._nth.call(null,chunk__23081_23114,i__23083_23116);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23117,prov);

var G__23118 = seq__23080_23113;
var G__23119 = chunk__23081_23114;
var G__23120 = count__23082_23115;
var G__23121 = (i__23083_23116 + (1));
seq__23080_23113 = G__23118;
chunk__23081_23114 = G__23119;
count__23082_23115 = G__23120;
i__23083_23116 = G__23121;
continue;
} else {
var temp__4425__auto___23122__$1 = cljs.core.seq.call(null,seq__23080_23113);
if(temp__4425__auto___23122__$1){
var seq__23080_23123__$1 = temp__4425__auto___23122__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23080_23123__$1)){
var c__17630__auto___23124 = cljs.core.chunk_first.call(null,seq__23080_23123__$1);
var G__23125 = cljs.core.chunk_rest.call(null,seq__23080_23123__$1);
var G__23126 = c__17630__auto___23124;
var G__23127 = cljs.core.count.call(null,c__17630__auto___23124);
var G__23128 = (0);
seq__23080_23113 = G__23125;
chunk__23081_23114 = G__23126;
count__23082_23115 = G__23127;
i__23083_23116 = G__23128;
continue;
} else {
var req_23129 = cljs.core.first.call(null,seq__23080_23123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23129,prov);

var G__23130 = cljs.core.next.call(null,seq__23080_23123__$1);
var G__23131 = null;
var G__23132 = (0);
var G__23133 = (0);
seq__23080_23113 = G__23130;
chunk__23081_23114 = G__23131;
count__23082_23115 = G__23132;
i__23083_23116 = G__23133;
continue;
}
} else {
}
}
break;
}

var G__23134 = cljs.core.next.call(null,seq__23072__$1);
var G__23135 = null;
var G__23136 = (0);
var G__23137 = (0);
seq__23072 = G__23134;
chunk__23073 = G__23135;
count__23074 = G__23136;
i__23075 = G__23137;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23142_23146 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23143_23147 = null;
var count__23144_23148 = (0);
var i__23145_23149 = (0);
while(true){
if((i__23145_23149 < count__23144_23148)){
var ns_23150 = cljs.core._nth.call(null,chunk__23143_23147,i__23145_23149);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23150);

var G__23151 = seq__23142_23146;
var G__23152 = chunk__23143_23147;
var G__23153 = count__23144_23148;
var G__23154 = (i__23145_23149 + (1));
seq__23142_23146 = G__23151;
chunk__23143_23147 = G__23152;
count__23144_23148 = G__23153;
i__23145_23149 = G__23154;
continue;
} else {
var temp__4425__auto___23155 = cljs.core.seq.call(null,seq__23142_23146);
if(temp__4425__auto___23155){
var seq__23142_23156__$1 = temp__4425__auto___23155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23142_23156__$1)){
var c__17630__auto___23157 = cljs.core.chunk_first.call(null,seq__23142_23156__$1);
var G__23158 = cljs.core.chunk_rest.call(null,seq__23142_23156__$1);
var G__23159 = c__17630__auto___23157;
var G__23160 = cljs.core.count.call(null,c__17630__auto___23157);
var G__23161 = (0);
seq__23142_23146 = G__23158;
chunk__23143_23147 = G__23159;
count__23144_23148 = G__23160;
i__23145_23149 = G__23161;
continue;
} else {
var ns_23162 = cljs.core.first.call(null,seq__23142_23156__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23162);

var G__23163 = cljs.core.next.call(null,seq__23142_23156__$1);
var G__23164 = null;
var G__23165 = (0);
var G__23166 = (0);
seq__23142_23146 = G__23163;
chunk__23143_23147 = G__23164;
count__23144_23148 = G__23165;
i__23145_23149 = G__23166;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23167__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23168__i = 0, G__23168__a = new Array(arguments.length -  0);
while (G__23168__i < G__23168__a.length) {G__23168__a[G__23168__i] = arguments[G__23168__i + 0]; ++G__23168__i;}
  args = new cljs.core.IndexedSeq(G__23168__a,0);
} 
return G__23167__delegate.call(this,args);};
G__23167.cljs$lang$maxFixedArity = 0;
G__23167.cljs$lang$applyTo = (function (arglist__23169){
var args = cljs.core.seq(arglist__23169);
return G__23167__delegate(args);
});
G__23167.cljs$core$IFn$_invoke$arity$variadic = G__23167__delegate;
return G__23167;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23171 = cljs.core._EQ_;
var expr__23172 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23171.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23172))){
var path_parts = ((function (pred__23171,expr__23172){
return (function (p1__23170_SHARP_){
return clojure.string.split.call(null,p1__23170_SHARP_,/[\/\\]/);
});})(pred__23171,expr__23172))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23171,expr__23172){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23174){if((e23174 instanceof Error)){
var e = e23174;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23174;

}
}})());
});
;})(path_parts,sep,root,pred__23171,expr__23172))
} else {
if(cljs.core.truth_(pred__23171.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23172))){
return ((function (pred__23171,expr__23172){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23171,expr__23172){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23171,expr__23172))
);

return deferred.addErrback(((function (deferred,pred__23171,expr__23172){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23171,expr__23172))
);
});
;})(pred__23171,expr__23172))
} else {
return ((function (pred__23171,expr__23172){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23171,expr__23172))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23175,callback){
var map__23178 = p__23175;
var map__23178__$1 = ((((!((map__23178 == null)))?((((map__23178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23178):map__23178);
var file_msg = map__23178__$1;
var request_url = cljs.core.get.call(null,map__23178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23178,map__23178__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23178,map__23178__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_23202){
var state_val_23203 = (state_23202[(1)]);
if((state_val_23203 === (7))){
var inst_23198 = (state_23202[(2)]);
var state_23202__$1 = state_23202;
var statearr_23204_23224 = state_23202__$1;
(statearr_23204_23224[(2)] = inst_23198);

(statearr_23204_23224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (1))){
var state_23202__$1 = state_23202;
var statearr_23205_23225 = state_23202__$1;
(statearr_23205_23225[(2)] = null);

(statearr_23205_23225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (4))){
var inst_23182 = (state_23202[(7)]);
var inst_23182__$1 = (state_23202[(2)]);
var state_23202__$1 = (function (){var statearr_23206 = state_23202;
(statearr_23206[(7)] = inst_23182__$1);

return statearr_23206;
})();
if(cljs.core.truth_(inst_23182__$1)){
var statearr_23207_23226 = state_23202__$1;
(statearr_23207_23226[(1)] = (5));

} else {
var statearr_23208_23227 = state_23202__$1;
(statearr_23208_23227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (6))){
var state_23202__$1 = state_23202;
var statearr_23209_23228 = state_23202__$1;
(statearr_23209_23228[(2)] = null);

(statearr_23209_23228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (3))){
var inst_23200 = (state_23202[(2)]);
var state_23202__$1 = state_23202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23202__$1,inst_23200);
} else {
if((state_val_23203 === (2))){
var state_23202__$1 = state_23202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23202__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23203 === (11))){
var inst_23194 = (state_23202[(2)]);
var state_23202__$1 = (function (){var statearr_23210 = state_23202;
(statearr_23210[(8)] = inst_23194);

return statearr_23210;
})();
var statearr_23211_23229 = state_23202__$1;
(statearr_23211_23229[(2)] = null);

(statearr_23211_23229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (9))){
var inst_23186 = (state_23202[(9)]);
var inst_23188 = (state_23202[(10)]);
var inst_23190 = inst_23188.call(null,inst_23186);
var state_23202__$1 = state_23202;
var statearr_23212_23230 = state_23202__$1;
(statearr_23212_23230[(2)] = inst_23190);

(statearr_23212_23230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (5))){
var inst_23182 = (state_23202[(7)]);
var inst_23184 = figwheel.client.file_reloading.blocking_load.call(null,inst_23182);
var state_23202__$1 = state_23202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23202__$1,(8),inst_23184);
} else {
if((state_val_23203 === (10))){
var inst_23186 = (state_23202[(9)]);
var inst_23192 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23186);
var state_23202__$1 = state_23202;
var statearr_23213_23231 = state_23202__$1;
(statearr_23213_23231[(2)] = inst_23192);

(statearr_23213_23231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23203 === (8))){
var inst_23182 = (state_23202[(7)]);
var inst_23188 = (state_23202[(10)]);
var inst_23186 = (state_23202[(2)]);
var inst_23187 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23188__$1 = cljs.core.get.call(null,inst_23187,inst_23182);
var state_23202__$1 = (function (){var statearr_23214 = state_23202;
(statearr_23214[(9)] = inst_23186);

(statearr_23214[(10)] = inst_23188__$1);

return statearr_23214;
})();
if(cljs.core.truth_(inst_23188__$1)){
var statearr_23215_23232 = state_23202__$1;
(statearr_23215_23232[(1)] = (9));

} else {
var statearr_23216_23233 = state_23202__$1;
(statearr_23216_23233[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$state_machine__19967__auto____0 = (function (){
var statearr_23220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23220[(0)] = figwheel$client$file_reloading$state_machine__19967__auto__);

(statearr_23220[(1)] = (1));

return statearr_23220;
});
var figwheel$client$file_reloading$state_machine__19967__auto____1 = (function (state_23202){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_23202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e23221){if((e23221 instanceof Object)){
var ex__19970__auto__ = e23221;
var statearr_23222_23234 = state_23202;
(statearr_23222_23234[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23235 = state_23202;
state_23202 = G__23235;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19967__auto__ = function(state_23202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19967__auto____1.call(this,state_23202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19967__auto____0;
figwheel$client$file_reloading$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19967__auto____1;
return figwheel$client$file_reloading$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_23223 = f__20079__auto__.call(null);
(statearr_23223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_23223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23236,callback){
var map__23239 = p__23236;
var map__23239__$1 = ((((!((map__23239 == null)))?((((map__23239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23239):map__23239);
var file_msg = map__23239__$1;
var namespace = cljs.core.get.call(null,map__23239__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23239,map__23239__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23239,map__23239__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23241){
var map__23244 = p__23241;
var map__23244__$1 = ((((!((map__23244 == null)))?((((map__23244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23244):map__23244);
var file_msg = map__23244__$1;
var namespace = cljs.core.get.call(null,map__23244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23246,callback){
var map__23249 = p__23246;
var map__23249__$1 = ((((!((map__23249 == null)))?((((map__23249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23249):map__23249);
var file_msg = map__23249__$1;
var request_url = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20078__auto___23337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___23337,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___23337,out){
return (function (state_23319){
var state_val_23320 = (state_23319[(1)]);
if((state_val_23320 === (1))){
var inst_23297 = cljs.core.nth.call(null,files,(0),null);
var inst_23298 = cljs.core.nthnext.call(null,files,(1));
var inst_23299 = files;
var state_23319__$1 = (function (){var statearr_23321 = state_23319;
(statearr_23321[(7)] = inst_23298);

(statearr_23321[(8)] = inst_23297);

(statearr_23321[(9)] = inst_23299);

return statearr_23321;
})();
var statearr_23322_23338 = state_23319__$1;
(statearr_23322_23338[(2)] = null);

(statearr_23322_23338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (2))){
var inst_23302 = (state_23319[(10)]);
var inst_23299 = (state_23319[(9)]);
var inst_23302__$1 = cljs.core.nth.call(null,inst_23299,(0),null);
var inst_23303 = cljs.core.nthnext.call(null,inst_23299,(1));
var inst_23304 = (inst_23302__$1 == null);
var inst_23305 = cljs.core.not.call(null,inst_23304);
var state_23319__$1 = (function (){var statearr_23323 = state_23319;
(statearr_23323[(10)] = inst_23302__$1);

(statearr_23323[(11)] = inst_23303);

return statearr_23323;
})();
if(inst_23305){
var statearr_23324_23339 = state_23319__$1;
(statearr_23324_23339[(1)] = (4));

} else {
var statearr_23325_23340 = state_23319__$1;
(statearr_23325_23340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (3))){
var inst_23317 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else {
if((state_val_23320 === (4))){
var inst_23302 = (state_23319[(10)]);
var inst_23307 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23302);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(7),inst_23307);
} else {
if((state_val_23320 === (5))){
var inst_23313 = cljs.core.async.close_BANG_.call(null,out);
var state_23319__$1 = state_23319;
var statearr_23326_23341 = state_23319__$1;
(statearr_23326_23341[(2)] = inst_23313);

(statearr_23326_23341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (6))){
var inst_23315 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23327_23342 = state_23319__$1;
(statearr_23327_23342[(2)] = inst_23315);

(statearr_23327_23342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (7))){
var inst_23303 = (state_23319[(11)]);
var inst_23309 = (state_23319[(2)]);
var inst_23310 = cljs.core.async.put_BANG_.call(null,out,inst_23309);
var inst_23299 = inst_23303;
var state_23319__$1 = (function (){var statearr_23328 = state_23319;
(statearr_23328[(12)] = inst_23310);

(statearr_23328[(9)] = inst_23299);

return statearr_23328;
})();
var statearr_23329_23343 = state_23319__$1;
(statearr_23329_23343[(2)] = null);

(statearr_23329_23343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20078__auto___23337,out))
;
return ((function (switch__19966__auto__,c__20078__auto___23337,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0 = (function (){
var statearr_23333 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23333[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__);

(statearr_23333[(1)] = (1));

return statearr_23333;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1 = (function (state_23319){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_23319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e23334){if((e23334 instanceof Object)){
var ex__19970__auto__ = e23334;
var statearr_23335_23344 = state_23319;
(statearr_23335_23344[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23345 = state_23319;
state_23319 = G__23345;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___23337,out))
})();
var state__20080__auto__ = (function (){var statearr_23336 = f__20079__auto__.call(null);
(statearr_23336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___23337);

return statearr_23336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___23337,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23346,opts){
var map__23350 = p__23346;
var map__23350__$1 = ((((!((map__23350 == null)))?((((map__23350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23350):map__23350);
var eval_body__$1 = cljs.core.get.call(null,map__23350__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23352){var e = e23352;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23353_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23353_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23358){
var vec__23359 = p__23358;
var k = cljs.core.nth.call(null,vec__23359,(0),null);
var v = cljs.core.nth.call(null,vec__23359,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23360){
var vec__23361 = p__23360;
var k = cljs.core.nth.call(null,vec__23361,(0),null);
var v = cljs.core.nth.call(null,vec__23361,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23365,p__23366){
var map__23613 = p__23365;
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var opts = map__23613__$1;
var before_jsload = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23614 = p__23366;
var map__23614__$1 = ((((!((map__23614 == null)))?((((map__23614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23614):map__23614);
var msg = map__23614__$1;
var files = cljs.core.get.call(null,map__23614__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23614__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23614__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (7))){
var inst_23630 = (state_23767[(7)]);
var inst_23628 = (state_23767[(8)]);
var inst_23631 = (state_23767[(9)]);
var inst_23629 = (state_23767[(10)]);
var inst_23636 = cljs.core._nth.call(null,inst_23629,inst_23631);
var inst_23637 = figwheel.client.file_reloading.eval_body.call(null,inst_23636,opts);
var inst_23638 = (inst_23631 + (1));
var tmp23769 = inst_23630;
var tmp23770 = inst_23628;
var tmp23771 = inst_23629;
var inst_23628__$1 = tmp23770;
var inst_23629__$1 = tmp23771;
var inst_23630__$1 = tmp23769;
var inst_23631__$1 = inst_23638;
var state_23767__$1 = (function (){var statearr_23772 = state_23767;
(statearr_23772[(11)] = inst_23637);

(statearr_23772[(7)] = inst_23630__$1);

(statearr_23772[(8)] = inst_23628__$1);

(statearr_23772[(9)] = inst_23631__$1);

(statearr_23772[(10)] = inst_23629__$1);

return statearr_23772;
})();
var statearr_23773_23859 = state_23767__$1;
(statearr_23773_23859[(2)] = null);

(statearr_23773_23859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (20))){
var inst_23671 = (state_23767[(12)]);
var inst_23679 = figwheel.client.file_reloading.sort_files.call(null,inst_23671);
var state_23767__$1 = state_23767;
var statearr_23774_23860 = state_23767__$1;
(statearr_23774_23860[(2)] = inst_23679);

(statearr_23774_23860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (27))){
var state_23767__$1 = state_23767;
var statearr_23775_23861 = state_23767__$1;
(statearr_23775_23861[(2)] = null);

(statearr_23775_23861[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (1))){
var inst_23620 = (state_23767[(13)]);
var inst_23617 = before_jsload.call(null,files);
var inst_23618 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23619 = (function (){return ((function (inst_23620,inst_23617,inst_23618,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23362_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23362_SHARP_);
});
;})(inst_23620,inst_23617,inst_23618,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23620__$1 = cljs.core.filter.call(null,inst_23619,files);
var inst_23621 = cljs.core.not_empty.call(null,inst_23620__$1);
var state_23767__$1 = (function (){var statearr_23776 = state_23767;
(statearr_23776[(14)] = inst_23618);

(statearr_23776[(15)] = inst_23617);

(statearr_23776[(13)] = inst_23620__$1);

return statearr_23776;
})();
if(cljs.core.truth_(inst_23621)){
var statearr_23777_23862 = state_23767__$1;
(statearr_23777_23862[(1)] = (2));

} else {
var statearr_23778_23863 = state_23767__$1;
(statearr_23778_23863[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (24))){
var state_23767__$1 = state_23767;
var statearr_23779_23864 = state_23767__$1;
(statearr_23779_23864[(2)] = null);

(statearr_23779_23864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (39))){
var inst_23721 = (state_23767[(16)]);
var state_23767__$1 = state_23767;
var statearr_23780_23865 = state_23767__$1;
(statearr_23780_23865[(2)] = inst_23721);

(statearr_23780_23865[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (46))){
var inst_23762 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23781_23866 = state_23767__$1;
(statearr_23781_23866[(2)] = inst_23762);

(statearr_23781_23866[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (4))){
var inst_23665 = (state_23767[(2)]);
var inst_23666 = cljs.core.List.EMPTY;
var inst_23667 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23666);
var inst_23668 = (function (){return ((function (inst_23665,inst_23666,inst_23667,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23363_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23363_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23363_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23665,inst_23666,inst_23667,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23669 = cljs.core.filter.call(null,inst_23668,files);
var inst_23670 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23671 = cljs.core.concat.call(null,inst_23669,inst_23670);
var state_23767__$1 = (function (){var statearr_23782 = state_23767;
(statearr_23782[(17)] = inst_23665);

(statearr_23782[(18)] = inst_23667);

(statearr_23782[(12)] = inst_23671);

return statearr_23782;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23783_23867 = state_23767__$1;
(statearr_23783_23867[(1)] = (16));

} else {
var statearr_23784_23868 = state_23767__$1;
(statearr_23784_23868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (15))){
var inst_23655 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23785_23869 = state_23767__$1;
(statearr_23785_23869[(2)] = inst_23655);

(statearr_23785_23869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (21))){
var inst_23681 = (state_23767[(19)]);
var inst_23681__$1 = (state_23767[(2)]);
var inst_23682 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23681__$1);
var state_23767__$1 = (function (){var statearr_23786 = state_23767;
(statearr_23786[(19)] = inst_23681__$1);

return statearr_23786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(22),inst_23682);
} else {
if((state_val_23768 === (31))){
var inst_23765 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (32))){
var inst_23721 = (state_23767[(16)]);
var inst_23726 = inst_23721.cljs$lang$protocol_mask$partition0$;
var inst_23727 = (inst_23726 & (64));
var inst_23728 = inst_23721.cljs$core$ISeq$;
var inst_23729 = (inst_23727) || (inst_23728);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23729)){
var statearr_23787_23870 = state_23767__$1;
(statearr_23787_23870[(1)] = (35));

} else {
var statearr_23788_23871 = state_23767__$1;
(statearr_23788_23871[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (40))){
var inst_23742 = (state_23767[(20)]);
var inst_23741 = (state_23767[(2)]);
var inst_23742__$1 = cljs.core.get.call(null,inst_23741,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23743 = cljs.core.get.call(null,inst_23741,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23744 = cljs.core.not_empty.call(null,inst_23742__$1);
var state_23767__$1 = (function (){var statearr_23789 = state_23767;
(statearr_23789[(20)] = inst_23742__$1);

(statearr_23789[(21)] = inst_23743);

return statearr_23789;
})();
if(cljs.core.truth_(inst_23744)){
var statearr_23790_23872 = state_23767__$1;
(statearr_23790_23872[(1)] = (41));

} else {
var statearr_23791_23873 = state_23767__$1;
(statearr_23791_23873[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (33))){
var state_23767__$1 = state_23767;
var statearr_23792_23874 = state_23767__$1;
(statearr_23792_23874[(2)] = false);

(statearr_23792_23874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (13))){
var inst_23641 = (state_23767[(22)]);
var inst_23645 = cljs.core.chunk_first.call(null,inst_23641);
var inst_23646 = cljs.core.chunk_rest.call(null,inst_23641);
var inst_23647 = cljs.core.count.call(null,inst_23645);
var inst_23628 = inst_23646;
var inst_23629 = inst_23645;
var inst_23630 = inst_23647;
var inst_23631 = (0);
var state_23767__$1 = (function (){var statearr_23793 = state_23767;
(statearr_23793[(7)] = inst_23630);

(statearr_23793[(8)] = inst_23628);

(statearr_23793[(9)] = inst_23631);

(statearr_23793[(10)] = inst_23629);

return statearr_23793;
})();
var statearr_23794_23875 = state_23767__$1;
(statearr_23794_23875[(2)] = null);

(statearr_23794_23875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (22))){
var inst_23684 = (state_23767[(23)]);
var inst_23685 = (state_23767[(24)]);
var inst_23681 = (state_23767[(19)]);
var inst_23689 = (state_23767[(25)]);
var inst_23684__$1 = (state_23767[(2)]);
var inst_23685__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23684__$1);
var inst_23686 = (function (){var all_files = inst_23681;
var res_SINGLEQUOTE_ = inst_23684__$1;
var res = inst_23685__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23684,inst_23685,inst_23681,inst_23689,inst_23684__$1,inst_23685__$1,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23364_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23364_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23684,inst_23685,inst_23681,inst_23689,inst_23684__$1,inst_23685__$1,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23687 = cljs.core.filter.call(null,inst_23686,inst_23684__$1);
var inst_23688 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23689__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23688);
var inst_23690 = cljs.core.not_empty.call(null,inst_23689__$1);
var state_23767__$1 = (function (){var statearr_23795 = state_23767;
(statearr_23795[(26)] = inst_23687);

(statearr_23795[(23)] = inst_23684__$1);

(statearr_23795[(24)] = inst_23685__$1);

(statearr_23795[(25)] = inst_23689__$1);

return statearr_23795;
})();
if(cljs.core.truth_(inst_23690)){
var statearr_23796_23876 = state_23767__$1;
(statearr_23796_23876[(1)] = (23));

} else {
var statearr_23797_23877 = state_23767__$1;
(statearr_23797_23877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (36))){
var state_23767__$1 = state_23767;
var statearr_23798_23878 = state_23767__$1;
(statearr_23798_23878[(2)] = false);

(statearr_23798_23878[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (41))){
var inst_23742 = (state_23767[(20)]);
var inst_23746 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23747 = cljs.core.map.call(null,inst_23746,inst_23742);
var inst_23748 = cljs.core.pr_str.call(null,inst_23747);
var inst_23749 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23748)].join('');
var inst_23750 = figwheel.client.utils.log.call(null,inst_23749);
var state_23767__$1 = state_23767;
var statearr_23799_23879 = state_23767__$1;
(statearr_23799_23879[(2)] = inst_23750);

(statearr_23799_23879[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (43))){
var inst_23743 = (state_23767[(21)]);
var inst_23753 = (state_23767[(2)]);
var inst_23754 = cljs.core.not_empty.call(null,inst_23743);
var state_23767__$1 = (function (){var statearr_23800 = state_23767;
(statearr_23800[(27)] = inst_23753);

return statearr_23800;
})();
if(cljs.core.truth_(inst_23754)){
var statearr_23801_23880 = state_23767__$1;
(statearr_23801_23880[(1)] = (44));

} else {
var statearr_23802_23881 = state_23767__$1;
(statearr_23802_23881[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (29))){
var inst_23687 = (state_23767[(26)]);
var inst_23721 = (state_23767[(16)]);
var inst_23684 = (state_23767[(23)]);
var inst_23685 = (state_23767[(24)]);
var inst_23681 = (state_23767[(19)]);
var inst_23689 = (state_23767[(25)]);
var inst_23717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23720 = (function (){var all_files = inst_23681;
var res_SINGLEQUOTE_ = inst_23684;
var res = inst_23685;
var files_not_loaded = inst_23687;
var dependencies_that_loaded = inst_23689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23721,inst_23684,inst_23685,inst_23681,inst_23689,inst_23717,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23719){
var map__23803 = p__23719;
var map__23803__$1 = ((((!((map__23803 == null)))?((((map__23803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23803):map__23803);
var namespace = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23721,inst_23684,inst_23685,inst_23681,inst_23689,inst_23717,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23721__$1 = cljs.core.group_by.call(null,inst_23720,inst_23687);
var inst_23723 = (inst_23721__$1 == null);
var inst_23724 = cljs.core.not.call(null,inst_23723);
var state_23767__$1 = (function (){var statearr_23805 = state_23767;
(statearr_23805[(16)] = inst_23721__$1);

(statearr_23805[(28)] = inst_23717);

return statearr_23805;
})();
if(inst_23724){
var statearr_23806_23882 = state_23767__$1;
(statearr_23806_23882[(1)] = (32));

} else {
var statearr_23807_23883 = state_23767__$1;
(statearr_23807_23883[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (44))){
var inst_23743 = (state_23767[(21)]);
var inst_23756 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23743);
var inst_23757 = cljs.core.pr_str.call(null,inst_23756);
var inst_23758 = [cljs.core.str("not required: "),cljs.core.str(inst_23757)].join('');
var inst_23759 = figwheel.client.utils.log.call(null,inst_23758);
var state_23767__$1 = state_23767;
var statearr_23808_23884 = state_23767__$1;
(statearr_23808_23884[(2)] = inst_23759);

(statearr_23808_23884[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (6))){
var inst_23662 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23809_23885 = state_23767__$1;
(statearr_23809_23885[(2)] = inst_23662);

(statearr_23809_23885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (28))){
var inst_23687 = (state_23767[(26)]);
var inst_23714 = (state_23767[(2)]);
var inst_23715 = cljs.core.not_empty.call(null,inst_23687);
var state_23767__$1 = (function (){var statearr_23810 = state_23767;
(statearr_23810[(29)] = inst_23714);

return statearr_23810;
})();
if(cljs.core.truth_(inst_23715)){
var statearr_23811_23886 = state_23767__$1;
(statearr_23811_23886[(1)] = (29));

} else {
var statearr_23812_23887 = state_23767__$1;
(statearr_23812_23887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (25))){
var inst_23685 = (state_23767[(24)]);
var inst_23701 = (state_23767[(2)]);
var inst_23702 = cljs.core.not_empty.call(null,inst_23685);
var state_23767__$1 = (function (){var statearr_23813 = state_23767;
(statearr_23813[(30)] = inst_23701);

return statearr_23813;
})();
if(cljs.core.truth_(inst_23702)){
var statearr_23814_23888 = state_23767__$1;
(statearr_23814_23888[(1)] = (26));

} else {
var statearr_23815_23889 = state_23767__$1;
(statearr_23815_23889[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (34))){
var inst_23736 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23736)){
var statearr_23816_23890 = state_23767__$1;
(statearr_23816_23890[(1)] = (38));

} else {
var statearr_23817_23891 = state_23767__$1;
(statearr_23817_23891[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (17))){
var state_23767__$1 = state_23767;
var statearr_23818_23892 = state_23767__$1;
(statearr_23818_23892[(2)] = recompile_dependents);

(statearr_23818_23892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (3))){
var state_23767__$1 = state_23767;
var statearr_23819_23893 = state_23767__$1;
(statearr_23819_23893[(2)] = null);

(statearr_23819_23893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (12))){
var inst_23658 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23820_23894 = state_23767__$1;
(statearr_23820_23894[(2)] = inst_23658);

(statearr_23820_23894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (2))){
var inst_23620 = (state_23767[(13)]);
var inst_23627 = cljs.core.seq.call(null,inst_23620);
var inst_23628 = inst_23627;
var inst_23629 = null;
var inst_23630 = (0);
var inst_23631 = (0);
var state_23767__$1 = (function (){var statearr_23821 = state_23767;
(statearr_23821[(7)] = inst_23630);

(statearr_23821[(8)] = inst_23628);

(statearr_23821[(9)] = inst_23631);

(statearr_23821[(10)] = inst_23629);

return statearr_23821;
})();
var statearr_23822_23895 = state_23767__$1;
(statearr_23822_23895[(2)] = null);

(statearr_23822_23895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (23))){
var inst_23687 = (state_23767[(26)]);
var inst_23684 = (state_23767[(23)]);
var inst_23685 = (state_23767[(24)]);
var inst_23681 = (state_23767[(19)]);
var inst_23689 = (state_23767[(25)]);
var inst_23692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23694 = (function (){var all_files = inst_23681;
var res_SINGLEQUOTE_ = inst_23684;
var res = inst_23685;
var files_not_loaded = inst_23687;
var dependencies_that_loaded = inst_23689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23684,inst_23685,inst_23681,inst_23689,inst_23692,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23693){
var map__23823 = p__23693;
var map__23823__$1 = ((((!((map__23823 == null)))?((((map__23823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23823):map__23823);
var request_url = cljs.core.get.call(null,map__23823__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23684,inst_23685,inst_23681,inst_23689,inst_23692,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23695 = cljs.core.reverse.call(null,inst_23689);
var inst_23696 = cljs.core.map.call(null,inst_23694,inst_23695);
var inst_23697 = cljs.core.pr_str.call(null,inst_23696);
var inst_23698 = figwheel.client.utils.log.call(null,inst_23697);
var state_23767__$1 = (function (){var statearr_23825 = state_23767;
(statearr_23825[(31)] = inst_23692);

return statearr_23825;
})();
var statearr_23826_23896 = state_23767__$1;
(statearr_23826_23896[(2)] = inst_23698);

(statearr_23826_23896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (35))){
var state_23767__$1 = state_23767;
var statearr_23827_23897 = state_23767__$1;
(statearr_23827_23897[(2)] = true);

(statearr_23827_23897[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (19))){
var inst_23671 = (state_23767[(12)]);
var inst_23677 = figwheel.client.file_reloading.expand_files.call(null,inst_23671);
var state_23767__$1 = state_23767;
var statearr_23828_23898 = state_23767__$1;
(statearr_23828_23898[(2)] = inst_23677);

(statearr_23828_23898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (11))){
var state_23767__$1 = state_23767;
var statearr_23829_23899 = state_23767__$1;
(statearr_23829_23899[(2)] = null);

(statearr_23829_23899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (9))){
var inst_23660 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23830_23900 = state_23767__$1;
(statearr_23830_23900[(2)] = inst_23660);

(statearr_23830_23900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (5))){
var inst_23630 = (state_23767[(7)]);
var inst_23631 = (state_23767[(9)]);
var inst_23633 = (inst_23631 < inst_23630);
var inst_23634 = inst_23633;
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23634)){
var statearr_23831_23901 = state_23767__$1;
(statearr_23831_23901[(1)] = (7));

} else {
var statearr_23832_23902 = state_23767__$1;
(statearr_23832_23902[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (14))){
var inst_23641 = (state_23767[(22)]);
var inst_23650 = cljs.core.first.call(null,inst_23641);
var inst_23651 = figwheel.client.file_reloading.eval_body.call(null,inst_23650,opts);
var inst_23652 = cljs.core.next.call(null,inst_23641);
var inst_23628 = inst_23652;
var inst_23629 = null;
var inst_23630 = (0);
var inst_23631 = (0);
var state_23767__$1 = (function (){var statearr_23833 = state_23767;
(statearr_23833[(7)] = inst_23630);

(statearr_23833[(32)] = inst_23651);

(statearr_23833[(8)] = inst_23628);

(statearr_23833[(9)] = inst_23631);

(statearr_23833[(10)] = inst_23629);

return statearr_23833;
})();
var statearr_23834_23903 = state_23767__$1;
(statearr_23834_23903[(2)] = null);

(statearr_23834_23903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (45))){
var state_23767__$1 = state_23767;
var statearr_23835_23904 = state_23767__$1;
(statearr_23835_23904[(2)] = null);

(statearr_23835_23904[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (26))){
var inst_23687 = (state_23767[(26)]);
var inst_23684 = (state_23767[(23)]);
var inst_23685 = (state_23767[(24)]);
var inst_23681 = (state_23767[(19)]);
var inst_23689 = (state_23767[(25)]);
var inst_23704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23706 = (function (){var all_files = inst_23681;
var res_SINGLEQUOTE_ = inst_23684;
var res = inst_23685;
var files_not_loaded = inst_23687;
var dependencies_that_loaded = inst_23689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23684,inst_23685,inst_23681,inst_23689,inst_23704,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23705){
var map__23836 = p__23705;
var map__23836__$1 = ((((!((map__23836 == null)))?((((map__23836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23836):map__23836);
var namespace = cljs.core.get.call(null,map__23836__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23684,inst_23685,inst_23681,inst_23689,inst_23704,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23707 = cljs.core.map.call(null,inst_23706,inst_23685);
var inst_23708 = cljs.core.pr_str.call(null,inst_23707);
var inst_23709 = figwheel.client.utils.log.call(null,inst_23708);
var inst_23710 = (function (){var all_files = inst_23681;
var res_SINGLEQUOTE_ = inst_23684;
var res = inst_23685;
var files_not_loaded = inst_23687;
var dependencies_that_loaded = inst_23689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23684,inst_23685,inst_23681,inst_23689,inst_23704,inst_23706,inst_23707,inst_23708,inst_23709,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23687,inst_23684,inst_23685,inst_23681,inst_23689,inst_23704,inst_23706,inst_23707,inst_23708,inst_23709,state_val_23768,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23711 = setTimeout(inst_23710,(10));
var state_23767__$1 = (function (){var statearr_23838 = state_23767;
(statearr_23838[(33)] = inst_23704);

(statearr_23838[(34)] = inst_23709);

return statearr_23838;
})();
var statearr_23839_23905 = state_23767__$1;
(statearr_23839_23905[(2)] = inst_23711);

(statearr_23839_23905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (16))){
var state_23767__$1 = state_23767;
var statearr_23840_23906 = state_23767__$1;
(statearr_23840_23906[(2)] = reload_dependents);

(statearr_23840_23906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (38))){
var inst_23721 = (state_23767[(16)]);
var inst_23738 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23721);
var state_23767__$1 = state_23767;
var statearr_23841_23907 = state_23767__$1;
(statearr_23841_23907[(2)] = inst_23738);

(statearr_23841_23907[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (30))){
var state_23767__$1 = state_23767;
var statearr_23842_23908 = state_23767__$1;
(statearr_23842_23908[(2)] = null);

(statearr_23842_23908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (10))){
var inst_23641 = (state_23767[(22)]);
var inst_23643 = cljs.core.chunked_seq_QMARK_.call(null,inst_23641);
var state_23767__$1 = state_23767;
if(inst_23643){
var statearr_23843_23909 = state_23767__$1;
(statearr_23843_23909[(1)] = (13));

} else {
var statearr_23844_23910 = state_23767__$1;
(statearr_23844_23910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (18))){
var inst_23675 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23675)){
var statearr_23845_23911 = state_23767__$1;
(statearr_23845_23911[(1)] = (19));

} else {
var statearr_23846_23912 = state_23767__$1;
(statearr_23846_23912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (42))){
var state_23767__$1 = state_23767;
var statearr_23847_23913 = state_23767__$1;
(statearr_23847_23913[(2)] = null);

(statearr_23847_23913[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (37))){
var inst_23733 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23848_23914 = state_23767__$1;
(statearr_23848_23914[(2)] = inst_23733);

(statearr_23848_23914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (8))){
var inst_23628 = (state_23767[(8)]);
var inst_23641 = (state_23767[(22)]);
var inst_23641__$1 = cljs.core.seq.call(null,inst_23628);
var state_23767__$1 = (function (){var statearr_23849 = state_23767;
(statearr_23849[(22)] = inst_23641__$1);

return statearr_23849;
})();
if(inst_23641__$1){
var statearr_23850_23915 = state_23767__$1;
(statearr_23850_23915[(1)] = (10));

} else {
var statearr_23851_23916 = state_23767__$1;
(statearr_23851_23916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19966__auto__,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0 = (function (){
var statearr_23855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23855[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__);

(statearr_23855[(1)] = (1));

return statearr_23855;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1 = (function (state_23767){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e23856){if((e23856 instanceof Object)){
var ex__19970__auto__ = e23856;
var statearr_23857_23917 = state_23767;
(statearr_23857_23917[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23918 = state_23767;
state_23767 = G__23918;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20080__auto__ = (function (){var statearr_23858 = f__20079__auto__.call(null);
(statearr_23858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_23858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,map__23613,map__23613__$1,opts,before_jsload,on_jsload,reload_dependents,map__23614,map__23614__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20078__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23921,link){
var map__23924 = p__23921;
var map__23924__$1 = ((((!((map__23924 == null)))?((((map__23924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23924):map__23924);
var file = cljs.core.get.call(null,map__23924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23924,map__23924__$1,file){
return (function (p1__23919_SHARP_,p2__23920_SHARP_){
if(cljs.core._EQ_.call(null,p1__23919_SHARP_,p2__23920_SHARP_)){
return p1__23919_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23924,map__23924__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23930){
var map__23931 = p__23930;
var map__23931__$1 = ((((!((map__23931 == null)))?((((map__23931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23931):map__23931);
var match_length = cljs.core.get.call(null,map__23931__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23931__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23926_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23926_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23933 = [];
var len__17885__auto___23936 = arguments.length;
var i__17886__auto___23937 = (0);
while(true){
if((i__17886__auto___23937 < len__17885__auto___23936)){
args23933.push((arguments[i__17886__auto___23937]));

var G__23938 = (i__17886__auto___23937 + (1));
i__17886__auto___23937 = G__23938;
continue;
} else {
}
break;
}

var G__23935 = args23933.length;
switch (G__23935) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23933.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23940_SHARP_,p2__23941_SHARP_){
return cljs.core.assoc.call(null,p1__23940_SHARP_,cljs.core.get.call(null,p2__23941_SHARP_,key),p2__23941_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23942){
var map__23945 = p__23942;
var map__23945__$1 = ((((!((map__23945 == null)))?((((map__23945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23945):map__23945);
var f_data = map__23945__$1;
var file = cljs.core.get.call(null,map__23945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23947,files_msg){
var map__23954 = p__23947;
var map__23954__$1 = ((((!((map__23954 == null)))?((((map__23954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23954):map__23954);
var opts = map__23954__$1;
var on_cssload = cljs.core.get.call(null,map__23954__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23956_23960 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23957_23961 = null;
var count__23958_23962 = (0);
var i__23959_23963 = (0);
while(true){
if((i__23959_23963 < count__23958_23962)){
var f_23964 = cljs.core._nth.call(null,chunk__23957_23961,i__23959_23963);
figwheel.client.file_reloading.reload_css_file.call(null,f_23964);

var G__23965 = seq__23956_23960;
var G__23966 = chunk__23957_23961;
var G__23967 = count__23958_23962;
var G__23968 = (i__23959_23963 + (1));
seq__23956_23960 = G__23965;
chunk__23957_23961 = G__23966;
count__23958_23962 = G__23967;
i__23959_23963 = G__23968;
continue;
} else {
var temp__4425__auto___23969 = cljs.core.seq.call(null,seq__23956_23960);
if(temp__4425__auto___23969){
var seq__23956_23970__$1 = temp__4425__auto___23969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23956_23970__$1)){
var c__17630__auto___23971 = cljs.core.chunk_first.call(null,seq__23956_23970__$1);
var G__23972 = cljs.core.chunk_rest.call(null,seq__23956_23970__$1);
var G__23973 = c__17630__auto___23971;
var G__23974 = cljs.core.count.call(null,c__17630__auto___23971);
var G__23975 = (0);
seq__23956_23960 = G__23972;
chunk__23957_23961 = G__23973;
count__23958_23962 = G__23974;
i__23959_23963 = G__23975;
continue;
} else {
var f_23976 = cljs.core.first.call(null,seq__23956_23970__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23976);

var G__23977 = cljs.core.next.call(null,seq__23956_23970__$1);
var G__23978 = null;
var G__23979 = (0);
var G__23980 = (0);
seq__23956_23960 = G__23977;
chunk__23957_23961 = G__23978;
count__23958_23962 = G__23979;
i__23959_23963 = G__23980;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23954,map__23954__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23954,map__23954__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1450189828031