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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37893_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37893_SHARP_));
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
var seq__37898 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37899 = null;
var count__37900 = (0);
var i__37901 = (0);
while(true){
if((i__37901 < count__37900)){
var n = cljs.core._nth.call(null,chunk__37899,i__37901);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37902 = seq__37898;
var G__37903 = chunk__37899;
var G__37904 = count__37900;
var G__37905 = (i__37901 + (1));
seq__37898 = G__37902;
chunk__37899 = G__37903;
count__37900 = G__37904;
i__37901 = G__37905;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37898);
if(temp__4425__auto__){
var seq__37898__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37898__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__37898__$1);
var G__37906 = cljs.core.chunk_rest.call(null,seq__37898__$1);
var G__37907 = c__17630__auto__;
var G__37908 = cljs.core.count.call(null,c__17630__auto__);
var G__37909 = (0);
seq__37898 = G__37906;
chunk__37899 = G__37907;
count__37900 = G__37908;
i__37901 = G__37909;
continue;
} else {
var n = cljs.core.first.call(null,seq__37898__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37910 = cljs.core.next.call(null,seq__37898__$1);
var G__37911 = null;
var G__37912 = (0);
var G__37913 = (0);
seq__37898 = G__37910;
chunk__37899 = G__37911;
count__37900 = G__37912;
i__37901 = G__37913;
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

var seq__37952_37959 = cljs.core.seq.call(null,deps);
var chunk__37953_37960 = null;
var count__37954_37961 = (0);
var i__37955_37962 = (0);
while(true){
if((i__37955_37962 < count__37954_37961)){
var dep_37963 = cljs.core._nth.call(null,chunk__37953_37960,i__37955_37962);
topo_sort_helper_STAR_.call(null,dep_37963,(depth + (1)),state);

var G__37964 = seq__37952_37959;
var G__37965 = chunk__37953_37960;
var G__37966 = count__37954_37961;
var G__37967 = (i__37955_37962 + (1));
seq__37952_37959 = G__37964;
chunk__37953_37960 = G__37965;
count__37954_37961 = G__37966;
i__37955_37962 = G__37967;
continue;
} else {
var temp__4425__auto___37968 = cljs.core.seq.call(null,seq__37952_37959);
if(temp__4425__auto___37968){
var seq__37952_37969__$1 = temp__4425__auto___37968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37952_37969__$1)){
var c__17630__auto___37970 = cljs.core.chunk_first.call(null,seq__37952_37969__$1);
var G__37971 = cljs.core.chunk_rest.call(null,seq__37952_37969__$1);
var G__37972 = c__17630__auto___37970;
var G__37973 = cljs.core.count.call(null,c__17630__auto___37970);
var G__37974 = (0);
seq__37952_37959 = G__37971;
chunk__37953_37960 = G__37972;
count__37954_37961 = G__37973;
i__37955_37962 = G__37974;
continue;
} else {
var dep_37975 = cljs.core.first.call(null,seq__37952_37969__$1);
topo_sort_helper_STAR_.call(null,dep_37975,(depth + (1)),state);

var G__37976 = cljs.core.next.call(null,seq__37952_37969__$1);
var G__37977 = null;
var G__37978 = (0);
var G__37979 = (0);
seq__37952_37959 = G__37976;
chunk__37953_37960 = G__37977;
count__37954_37961 = G__37978;
i__37955_37962 = G__37979;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37956){
var vec__37958 = p__37956;
var x = cljs.core.nth.call(null,vec__37958,(0),null);
var xs = cljs.core.nthnext.call(null,vec__37958,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37958,x,xs,get_deps__$1){
return (function (p1__37914_SHARP_){
return clojure.set.difference.call(null,p1__37914_SHARP_,x);
});})(vec__37958,x,xs,get_deps__$1))
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
var seq__37992 = cljs.core.seq.call(null,provides);
var chunk__37993 = null;
var count__37994 = (0);
var i__37995 = (0);
while(true){
if((i__37995 < count__37994)){
var prov = cljs.core._nth.call(null,chunk__37993,i__37995);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37996_38004 = cljs.core.seq.call(null,requires);
var chunk__37997_38005 = null;
var count__37998_38006 = (0);
var i__37999_38007 = (0);
while(true){
if((i__37999_38007 < count__37998_38006)){
var req_38008 = cljs.core._nth.call(null,chunk__37997_38005,i__37999_38007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38008,prov);

var G__38009 = seq__37996_38004;
var G__38010 = chunk__37997_38005;
var G__38011 = count__37998_38006;
var G__38012 = (i__37999_38007 + (1));
seq__37996_38004 = G__38009;
chunk__37997_38005 = G__38010;
count__37998_38006 = G__38011;
i__37999_38007 = G__38012;
continue;
} else {
var temp__4425__auto___38013 = cljs.core.seq.call(null,seq__37996_38004);
if(temp__4425__auto___38013){
var seq__37996_38014__$1 = temp__4425__auto___38013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37996_38014__$1)){
var c__17630__auto___38015 = cljs.core.chunk_first.call(null,seq__37996_38014__$1);
var G__38016 = cljs.core.chunk_rest.call(null,seq__37996_38014__$1);
var G__38017 = c__17630__auto___38015;
var G__38018 = cljs.core.count.call(null,c__17630__auto___38015);
var G__38019 = (0);
seq__37996_38004 = G__38016;
chunk__37997_38005 = G__38017;
count__37998_38006 = G__38018;
i__37999_38007 = G__38019;
continue;
} else {
var req_38020 = cljs.core.first.call(null,seq__37996_38014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38020,prov);

var G__38021 = cljs.core.next.call(null,seq__37996_38014__$1);
var G__38022 = null;
var G__38023 = (0);
var G__38024 = (0);
seq__37996_38004 = G__38021;
chunk__37997_38005 = G__38022;
count__37998_38006 = G__38023;
i__37999_38007 = G__38024;
continue;
}
} else {
}
}
break;
}

var G__38025 = seq__37992;
var G__38026 = chunk__37993;
var G__38027 = count__37994;
var G__38028 = (i__37995 + (1));
seq__37992 = G__38025;
chunk__37993 = G__38026;
count__37994 = G__38027;
i__37995 = G__38028;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37992);
if(temp__4425__auto__){
var seq__37992__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37992__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__37992__$1);
var G__38029 = cljs.core.chunk_rest.call(null,seq__37992__$1);
var G__38030 = c__17630__auto__;
var G__38031 = cljs.core.count.call(null,c__17630__auto__);
var G__38032 = (0);
seq__37992 = G__38029;
chunk__37993 = G__38030;
count__37994 = G__38031;
i__37995 = G__38032;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37992__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38000_38033 = cljs.core.seq.call(null,requires);
var chunk__38001_38034 = null;
var count__38002_38035 = (0);
var i__38003_38036 = (0);
while(true){
if((i__38003_38036 < count__38002_38035)){
var req_38037 = cljs.core._nth.call(null,chunk__38001_38034,i__38003_38036);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38037,prov);

var G__38038 = seq__38000_38033;
var G__38039 = chunk__38001_38034;
var G__38040 = count__38002_38035;
var G__38041 = (i__38003_38036 + (1));
seq__38000_38033 = G__38038;
chunk__38001_38034 = G__38039;
count__38002_38035 = G__38040;
i__38003_38036 = G__38041;
continue;
} else {
var temp__4425__auto___38042__$1 = cljs.core.seq.call(null,seq__38000_38033);
if(temp__4425__auto___38042__$1){
var seq__38000_38043__$1 = temp__4425__auto___38042__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38000_38043__$1)){
var c__17630__auto___38044 = cljs.core.chunk_first.call(null,seq__38000_38043__$1);
var G__38045 = cljs.core.chunk_rest.call(null,seq__38000_38043__$1);
var G__38046 = c__17630__auto___38044;
var G__38047 = cljs.core.count.call(null,c__17630__auto___38044);
var G__38048 = (0);
seq__38000_38033 = G__38045;
chunk__38001_38034 = G__38046;
count__38002_38035 = G__38047;
i__38003_38036 = G__38048;
continue;
} else {
var req_38049 = cljs.core.first.call(null,seq__38000_38043__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38049,prov);

var G__38050 = cljs.core.next.call(null,seq__38000_38043__$1);
var G__38051 = null;
var G__38052 = (0);
var G__38053 = (0);
seq__38000_38033 = G__38050;
chunk__38001_38034 = G__38051;
count__38002_38035 = G__38052;
i__38003_38036 = G__38053;
continue;
}
} else {
}
}
break;
}

var G__38054 = cljs.core.next.call(null,seq__37992__$1);
var G__38055 = null;
var G__38056 = (0);
var G__38057 = (0);
seq__37992 = G__38054;
chunk__37993 = G__38055;
count__37994 = G__38056;
i__37995 = G__38057;
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
var seq__38062_38066 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38063_38067 = null;
var count__38064_38068 = (0);
var i__38065_38069 = (0);
while(true){
if((i__38065_38069 < count__38064_38068)){
var ns_38070 = cljs.core._nth.call(null,chunk__38063_38067,i__38065_38069);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38070);

var G__38071 = seq__38062_38066;
var G__38072 = chunk__38063_38067;
var G__38073 = count__38064_38068;
var G__38074 = (i__38065_38069 + (1));
seq__38062_38066 = G__38071;
chunk__38063_38067 = G__38072;
count__38064_38068 = G__38073;
i__38065_38069 = G__38074;
continue;
} else {
var temp__4425__auto___38075 = cljs.core.seq.call(null,seq__38062_38066);
if(temp__4425__auto___38075){
var seq__38062_38076__$1 = temp__4425__auto___38075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38062_38076__$1)){
var c__17630__auto___38077 = cljs.core.chunk_first.call(null,seq__38062_38076__$1);
var G__38078 = cljs.core.chunk_rest.call(null,seq__38062_38076__$1);
var G__38079 = c__17630__auto___38077;
var G__38080 = cljs.core.count.call(null,c__17630__auto___38077);
var G__38081 = (0);
seq__38062_38066 = G__38078;
chunk__38063_38067 = G__38079;
count__38064_38068 = G__38080;
i__38065_38069 = G__38081;
continue;
} else {
var ns_38082 = cljs.core.first.call(null,seq__38062_38076__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38082);

var G__38083 = cljs.core.next.call(null,seq__38062_38076__$1);
var G__38084 = null;
var G__38085 = (0);
var G__38086 = (0);
seq__38062_38066 = G__38083;
chunk__38063_38067 = G__38084;
count__38064_38068 = G__38085;
i__38065_38069 = G__38086;
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
var G__38087__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38088__i = 0, G__38088__a = new Array(arguments.length -  0);
while (G__38088__i < G__38088__a.length) {G__38088__a[G__38088__i] = arguments[G__38088__i + 0]; ++G__38088__i;}
  args = new cljs.core.IndexedSeq(G__38088__a,0);
} 
return G__38087__delegate.call(this,args);};
G__38087.cljs$lang$maxFixedArity = 0;
G__38087.cljs$lang$applyTo = (function (arglist__38089){
var args = cljs.core.seq(arglist__38089);
return G__38087__delegate(args);
});
G__38087.cljs$core$IFn$_invoke$arity$variadic = G__38087__delegate;
return G__38087;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38091 = cljs.core._EQ_;
var expr__38092 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38091.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38092))){
var path_parts = ((function (pred__38091,expr__38092){
return (function (p1__38090_SHARP_){
return clojure.string.split.call(null,p1__38090_SHARP_,/[\/\\]/);
});})(pred__38091,expr__38092))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38091,expr__38092){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38094){if((e38094 instanceof Error)){
var e = e38094;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38094;

}
}})());
});
;})(path_parts,sep,root,pred__38091,expr__38092))
} else {
if(cljs.core.truth_(pred__38091.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38092))){
return ((function (pred__38091,expr__38092){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38091,expr__38092){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38091,expr__38092))
);

return deferred.addErrback(((function (deferred,pred__38091,expr__38092){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38091,expr__38092))
);
});
;})(pred__38091,expr__38092))
} else {
return ((function (pred__38091,expr__38092){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38091,expr__38092))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38095,callback){
var map__38098 = p__38095;
var map__38098__$1 = ((((!((map__38098 == null)))?((((map__38098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38098):map__38098);
var file_msg = map__38098__$1;
var request_url = cljs.core.get.call(null,map__38098__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38098,map__38098__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38098,map__38098__$1,file_msg,request_url))
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
return (function (state_38122){
var state_val_38123 = (state_38122[(1)]);
if((state_val_38123 === (7))){
var inst_38118 = (state_38122[(2)]);
var state_38122__$1 = state_38122;
var statearr_38124_38144 = state_38122__$1;
(statearr_38124_38144[(2)] = inst_38118);

(statearr_38124_38144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (1))){
var state_38122__$1 = state_38122;
var statearr_38125_38145 = state_38122__$1;
(statearr_38125_38145[(2)] = null);

(statearr_38125_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (4))){
var inst_38102 = (state_38122[(7)]);
var inst_38102__$1 = (state_38122[(2)]);
var state_38122__$1 = (function (){var statearr_38126 = state_38122;
(statearr_38126[(7)] = inst_38102__$1);

return statearr_38126;
})();
if(cljs.core.truth_(inst_38102__$1)){
var statearr_38127_38146 = state_38122__$1;
(statearr_38127_38146[(1)] = (5));

} else {
var statearr_38128_38147 = state_38122__$1;
(statearr_38128_38147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (6))){
var state_38122__$1 = state_38122;
var statearr_38129_38148 = state_38122__$1;
(statearr_38129_38148[(2)] = null);

(statearr_38129_38148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (3))){
var inst_38120 = (state_38122[(2)]);
var state_38122__$1 = state_38122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38122__$1,inst_38120);
} else {
if((state_val_38123 === (2))){
var state_38122__$1 = state_38122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38122__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38123 === (11))){
var inst_38114 = (state_38122[(2)]);
var state_38122__$1 = (function (){var statearr_38130 = state_38122;
(statearr_38130[(8)] = inst_38114);

return statearr_38130;
})();
var statearr_38131_38149 = state_38122__$1;
(statearr_38131_38149[(2)] = null);

(statearr_38131_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (9))){
var inst_38108 = (state_38122[(9)]);
var inst_38106 = (state_38122[(10)]);
var inst_38110 = inst_38108.call(null,inst_38106);
var state_38122__$1 = state_38122;
var statearr_38132_38150 = state_38122__$1;
(statearr_38132_38150[(2)] = inst_38110);

(statearr_38132_38150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (5))){
var inst_38102 = (state_38122[(7)]);
var inst_38104 = figwheel.client.file_reloading.blocking_load.call(null,inst_38102);
var state_38122__$1 = state_38122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38122__$1,(8),inst_38104);
} else {
if((state_val_38123 === (10))){
var inst_38106 = (state_38122[(10)]);
var inst_38112 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38106);
var state_38122__$1 = state_38122;
var statearr_38133_38151 = state_38122__$1;
(statearr_38133_38151[(2)] = inst_38112);

(statearr_38133_38151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38123 === (8))){
var inst_38108 = (state_38122[(9)]);
var inst_38102 = (state_38122[(7)]);
var inst_38106 = (state_38122[(2)]);
var inst_38107 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38108__$1 = cljs.core.get.call(null,inst_38107,inst_38102);
var state_38122__$1 = (function (){var statearr_38134 = state_38122;
(statearr_38134[(9)] = inst_38108__$1);

(statearr_38134[(10)] = inst_38106);

return statearr_38134;
})();
if(cljs.core.truth_(inst_38108__$1)){
var statearr_38135_38152 = state_38122__$1;
(statearr_38135_38152[(1)] = (9));

} else {
var statearr_38136_38153 = state_38122__$1;
(statearr_38136_38153[(1)] = (10));

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
var statearr_38140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38140[(0)] = figwheel$client$file_reloading$state_machine__19967__auto__);

(statearr_38140[(1)] = (1));

return statearr_38140;
});
var figwheel$client$file_reloading$state_machine__19967__auto____1 = (function (state_38122){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_38122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e38141){if((e38141 instanceof Object)){
var ex__19970__auto__ = e38141;
var statearr_38142_38154 = state_38122;
(statearr_38142_38154[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38155 = state_38122;
state_38122 = G__38155;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19967__auto__ = function(state_38122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19967__auto____1.call(this,state_38122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19967__auto____0;
figwheel$client$file_reloading$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19967__auto____1;
return figwheel$client$file_reloading$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_38143 = f__20079__auto__.call(null);
(statearr_38143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_38143;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38156,callback){
var map__38159 = p__38156;
var map__38159__$1 = ((((!((map__38159 == null)))?((((map__38159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38159):map__38159);
var file_msg = map__38159__$1;
var namespace = cljs.core.get.call(null,map__38159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38159,map__38159__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38159,map__38159__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38161){
var map__38164 = p__38161;
var map__38164__$1 = ((((!((map__38164 == null)))?((((map__38164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38164):map__38164);
var file_msg = map__38164__$1;
var namespace = cljs.core.get.call(null,map__38164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38166,callback){
var map__38169 = p__38166;
var map__38169__$1 = ((((!((map__38169 == null)))?((((map__38169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38169):map__38169);
var file_msg = map__38169__$1;
var request_url = cljs.core.get.call(null,map__38169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20078__auto___38257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___38257,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___38257,out){
return (function (state_38239){
var state_val_38240 = (state_38239[(1)]);
if((state_val_38240 === (1))){
var inst_38217 = cljs.core.nth.call(null,files,(0),null);
var inst_38218 = cljs.core.nthnext.call(null,files,(1));
var inst_38219 = files;
var state_38239__$1 = (function (){var statearr_38241 = state_38239;
(statearr_38241[(7)] = inst_38218);

(statearr_38241[(8)] = inst_38219);

(statearr_38241[(9)] = inst_38217);

return statearr_38241;
})();
var statearr_38242_38258 = state_38239__$1;
(statearr_38242_38258[(2)] = null);

(statearr_38242_38258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38240 === (2))){
var inst_38222 = (state_38239[(10)]);
var inst_38219 = (state_38239[(8)]);
var inst_38222__$1 = cljs.core.nth.call(null,inst_38219,(0),null);
var inst_38223 = cljs.core.nthnext.call(null,inst_38219,(1));
var inst_38224 = (inst_38222__$1 == null);
var inst_38225 = cljs.core.not.call(null,inst_38224);
var state_38239__$1 = (function (){var statearr_38243 = state_38239;
(statearr_38243[(10)] = inst_38222__$1);

(statearr_38243[(11)] = inst_38223);

return statearr_38243;
})();
if(inst_38225){
var statearr_38244_38259 = state_38239__$1;
(statearr_38244_38259[(1)] = (4));

} else {
var statearr_38245_38260 = state_38239__$1;
(statearr_38245_38260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38240 === (3))){
var inst_38237 = (state_38239[(2)]);
var state_38239__$1 = state_38239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38239__$1,inst_38237);
} else {
if((state_val_38240 === (4))){
var inst_38222 = (state_38239[(10)]);
var inst_38227 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38222);
var state_38239__$1 = state_38239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38239__$1,(7),inst_38227);
} else {
if((state_val_38240 === (5))){
var inst_38233 = cljs.core.async.close_BANG_.call(null,out);
var state_38239__$1 = state_38239;
var statearr_38246_38261 = state_38239__$1;
(statearr_38246_38261[(2)] = inst_38233);

(statearr_38246_38261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38240 === (6))){
var inst_38235 = (state_38239[(2)]);
var state_38239__$1 = state_38239;
var statearr_38247_38262 = state_38239__$1;
(statearr_38247_38262[(2)] = inst_38235);

(statearr_38247_38262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38240 === (7))){
var inst_38223 = (state_38239[(11)]);
var inst_38229 = (state_38239[(2)]);
var inst_38230 = cljs.core.async.put_BANG_.call(null,out,inst_38229);
var inst_38219 = inst_38223;
var state_38239__$1 = (function (){var statearr_38248 = state_38239;
(statearr_38248[(8)] = inst_38219);

(statearr_38248[(12)] = inst_38230);

return statearr_38248;
})();
var statearr_38249_38263 = state_38239__$1;
(statearr_38249_38263[(2)] = null);

(statearr_38249_38263[(1)] = (2));


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
});})(c__20078__auto___38257,out))
;
return ((function (switch__19966__auto__,c__20078__auto___38257,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0 = (function (){
var statearr_38253 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38253[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__);

(statearr_38253[(1)] = (1));

return statearr_38253;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1 = (function (state_38239){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_38239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e38254){if((e38254 instanceof Object)){
var ex__19970__auto__ = e38254;
var statearr_38255_38264 = state_38239;
(statearr_38255_38264[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38265 = state_38239;
state_38239 = G__38265;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__ = function(state_38239){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1.call(this,state_38239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___38257,out))
})();
var state__20080__auto__ = (function (){var statearr_38256 = f__20079__auto__.call(null);
(statearr_38256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___38257);

return statearr_38256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___38257,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38266,opts){
var map__38270 = p__38266;
var map__38270__$1 = ((((!((map__38270 == null)))?((((map__38270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38270):map__38270);
var eval_body__$1 = cljs.core.get.call(null,map__38270__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38272){var e = e38272;
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
return (function (p1__38273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38273_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38278){
var vec__38279 = p__38278;
var k = cljs.core.nth.call(null,vec__38279,(0),null);
var v = cljs.core.nth.call(null,vec__38279,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38280){
var vec__38281 = p__38280;
var k = cljs.core.nth.call(null,vec__38281,(0),null);
var v = cljs.core.nth.call(null,vec__38281,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38285,p__38286){
var map__38533 = p__38285;
var map__38533__$1 = ((((!((map__38533 == null)))?((((map__38533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38533):map__38533);
var opts = map__38533__$1;
var before_jsload = cljs.core.get.call(null,map__38533__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38533__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38533__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38534 = p__38286;
var map__38534__$1 = ((((!((map__38534 == null)))?((((map__38534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38534):map__38534);
var msg = map__38534__$1;
var files = cljs.core.get.call(null,map__38534__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38534__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38534__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38687){
var state_val_38688 = (state_38687[(1)]);
if((state_val_38688 === (7))){
var inst_38548 = (state_38687[(7)]);
var inst_38550 = (state_38687[(8)]);
var inst_38551 = (state_38687[(9)]);
var inst_38549 = (state_38687[(10)]);
var inst_38556 = cljs.core._nth.call(null,inst_38549,inst_38551);
var inst_38557 = figwheel.client.file_reloading.eval_body.call(null,inst_38556,opts);
var inst_38558 = (inst_38551 + (1));
var tmp38689 = inst_38548;
var tmp38690 = inst_38550;
var tmp38691 = inst_38549;
var inst_38548__$1 = tmp38689;
var inst_38549__$1 = tmp38691;
var inst_38550__$1 = tmp38690;
var inst_38551__$1 = inst_38558;
var state_38687__$1 = (function (){var statearr_38692 = state_38687;
(statearr_38692[(7)] = inst_38548__$1);

(statearr_38692[(11)] = inst_38557);

(statearr_38692[(8)] = inst_38550__$1);

(statearr_38692[(9)] = inst_38551__$1);

(statearr_38692[(10)] = inst_38549__$1);

return statearr_38692;
})();
var statearr_38693_38779 = state_38687__$1;
(statearr_38693_38779[(2)] = null);

(statearr_38693_38779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (20))){
var inst_38591 = (state_38687[(12)]);
var inst_38599 = figwheel.client.file_reloading.sort_files.call(null,inst_38591);
var state_38687__$1 = state_38687;
var statearr_38694_38780 = state_38687__$1;
(statearr_38694_38780[(2)] = inst_38599);

(statearr_38694_38780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (27))){
var state_38687__$1 = state_38687;
var statearr_38695_38781 = state_38687__$1;
(statearr_38695_38781[(2)] = null);

(statearr_38695_38781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (1))){
var inst_38540 = (state_38687[(13)]);
var inst_38537 = before_jsload.call(null,files);
var inst_38538 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38539 = (function (){return ((function (inst_38540,inst_38537,inst_38538,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38282_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38282_SHARP_);
});
;})(inst_38540,inst_38537,inst_38538,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38540__$1 = cljs.core.filter.call(null,inst_38539,files);
var inst_38541 = cljs.core.not_empty.call(null,inst_38540__$1);
var state_38687__$1 = (function (){var statearr_38696 = state_38687;
(statearr_38696[(14)] = inst_38538);

(statearr_38696[(15)] = inst_38537);

(statearr_38696[(13)] = inst_38540__$1);

return statearr_38696;
})();
if(cljs.core.truth_(inst_38541)){
var statearr_38697_38782 = state_38687__$1;
(statearr_38697_38782[(1)] = (2));

} else {
var statearr_38698_38783 = state_38687__$1;
(statearr_38698_38783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (24))){
var state_38687__$1 = state_38687;
var statearr_38699_38784 = state_38687__$1;
(statearr_38699_38784[(2)] = null);

(statearr_38699_38784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (39))){
var inst_38641 = (state_38687[(16)]);
var state_38687__$1 = state_38687;
var statearr_38700_38785 = state_38687__$1;
(statearr_38700_38785[(2)] = inst_38641);

(statearr_38700_38785[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (46))){
var inst_38682 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38701_38786 = state_38687__$1;
(statearr_38701_38786[(2)] = inst_38682);

(statearr_38701_38786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (4))){
var inst_38585 = (state_38687[(2)]);
var inst_38586 = cljs.core.List.EMPTY;
var inst_38587 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38586);
var inst_38588 = (function (){return ((function (inst_38585,inst_38586,inst_38587,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38283_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38283_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38283_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_38585,inst_38586,inst_38587,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38589 = cljs.core.filter.call(null,inst_38588,files);
var inst_38590 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38591 = cljs.core.concat.call(null,inst_38589,inst_38590);
var state_38687__$1 = (function (){var statearr_38702 = state_38687;
(statearr_38702[(17)] = inst_38587);

(statearr_38702[(12)] = inst_38591);

(statearr_38702[(18)] = inst_38585);

return statearr_38702;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38703_38787 = state_38687__$1;
(statearr_38703_38787[(1)] = (16));

} else {
var statearr_38704_38788 = state_38687__$1;
(statearr_38704_38788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (15))){
var inst_38575 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38705_38789 = state_38687__$1;
(statearr_38705_38789[(2)] = inst_38575);

(statearr_38705_38789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (21))){
var inst_38601 = (state_38687[(19)]);
var inst_38601__$1 = (state_38687[(2)]);
var inst_38602 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38601__$1);
var state_38687__$1 = (function (){var statearr_38706 = state_38687;
(statearr_38706[(19)] = inst_38601__$1);

return statearr_38706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38687__$1,(22),inst_38602);
} else {
if((state_val_38688 === (31))){
var inst_38685 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38687__$1,inst_38685);
} else {
if((state_val_38688 === (32))){
var inst_38641 = (state_38687[(16)]);
var inst_38646 = inst_38641.cljs$lang$protocol_mask$partition0$;
var inst_38647 = (inst_38646 & (64));
var inst_38648 = inst_38641.cljs$core$ISeq$;
var inst_38649 = (inst_38647) || (inst_38648);
var state_38687__$1 = state_38687;
if(cljs.core.truth_(inst_38649)){
var statearr_38707_38790 = state_38687__$1;
(statearr_38707_38790[(1)] = (35));

} else {
var statearr_38708_38791 = state_38687__$1;
(statearr_38708_38791[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (40))){
var inst_38662 = (state_38687[(20)]);
var inst_38661 = (state_38687[(2)]);
var inst_38662__$1 = cljs.core.get.call(null,inst_38661,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38663 = cljs.core.get.call(null,inst_38661,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38664 = cljs.core.not_empty.call(null,inst_38662__$1);
var state_38687__$1 = (function (){var statearr_38709 = state_38687;
(statearr_38709[(20)] = inst_38662__$1);

(statearr_38709[(21)] = inst_38663);

return statearr_38709;
})();
if(cljs.core.truth_(inst_38664)){
var statearr_38710_38792 = state_38687__$1;
(statearr_38710_38792[(1)] = (41));

} else {
var statearr_38711_38793 = state_38687__$1;
(statearr_38711_38793[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (33))){
var state_38687__$1 = state_38687;
var statearr_38712_38794 = state_38687__$1;
(statearr_38712_38794[(2)] = false);

(statearr_38712_38794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (13))){
var inst_38561 = (state_38687[(22)]);
var inst_38565 = cljs.core.chunk_first.call(null,inst_38561);
var inst_38566 = cljs.core.chunk_rest.call(null,inst_38561);
var inst_38567 = cljs.core.count.call(null,inst_38565);
var inst_38548 = inst_38566;
var inst_38549 = inst_38565;
var inst_38550 = inst_38567;
var inst_38551 = (0);
var state_38687__$1 = (function (){var statearr_38713 = state_38687;
(statearr_38713[(7)] = inst_38548);

(statearr_38713[(8)] = inst_38550);

(statearr_38713[(9)] = inst_38551);

(statearr_38713[(10)] = inst_38549);

return statearr_38713;
})();
var statearr_38714_38795 = state_38687__$1;
(statearr_38714_38795[(2)] = null);

(statearr_38714_38795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (22))){
var inst_38609 = (state_38687[(23)]);
var inst_38604 = (state_38687[(24)]);
var inst_38601 = (state_38687[(19)]);
var inst_38605 = (state_38687[(25)]);
var inst_38604__$1 = (state_38687[(2)]);
var inst_38605__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38604__$1);
var inst_38606 = (function (){var all_files = inst_38601;
var res_SINGLEQUOTE_ = inst_38604__$1;
var res = inst_38605__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38609,inst_38604,inst_38601,inst_38605,inst_38604__$1,inst_38605__$1,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38284_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38284_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38609,inst_38604,inst_38601,inst_38605,inst_38604__$1,inst_38605__$1,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38607 = cljs.core.filter.call(null,inst_38606,inst_38604__$1);
var inst_38608 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38609__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38608);
var inst_38610 = cljs.core.not_empty.call(null,inst_38609__$1);
var state_38687__$1 = (function (){var statearr_38715 = state_38687;
(statearr_38715[(23)] = inst_38609__$1);

(statearr_38715[(24)] = inst_38604__$1);

(statearr_38715[(26)] = inst_38607);

(statearr_38715[(25)] = inst_38605__$1);

return statearr_38715;
})();
if(cljs.core.truth_(inst_38610)){
var statearr_38716_38796 = state_38687__$1;
(statearr_38716_38796[(1)] = (23));

} else {
var statearr_38717_38797 = state_38687__$1;
(statearr_38717_38797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (36))){
var state_38687__$1 = state_38687;
var statearr_38718_38798 = state_38687__$1;
(statearr_38718_38798[(2)] = false);

(statearr_38718_38798[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (41))){
var inst_38662 = (state_38687[(20)]);
var inst_38666 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38667 = cljs.core.map.call(null,inst_38666,inst_38662);
var inst_38668 = cljs.core.pr_str.call(null,inst_38667);
var inst_38669 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_38668)].join('');
var inst_38670 = figwheel.client.utils.log.call(null,inst_38669);
var state_38687__$1 = state_38687;
var statearr_38719_38799 = state_38687__$1;
(statearr_38719_38799[(2)] = inst_38670);

(statearr_38719_38799[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (43))){
var inst_38663 = (state_38687[(21)]);
var inst_38673 = (state_38687[(2)]);
var inst_38674 = cljs.core.not_empty.call(null,inst_38663);
var state_38687__$1 = (function (){var statearr_38720 = state_38687;
(statearr_38720[(27)] = inst_38673);

return statearr_38720;
})();
if(cljs.core.truth_(inst_38674)){
var statearr_38721_38800 = state_38687__$1;
(statearr_38721_38800[(1)] = (44));

} else {
var statearr_38722_38801 = state_38687__$1;
(statearr_38722_38801[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (29))){
var inst_38609 = (state_38687[(23)]);
var inst_38604 = (state_38687[(24)]);
var inst_38607 = (state_38687[(26)]);
var inst_38601 = (state_38687[(19)]);
var inst_38605 = (state_38687[(25)]);
var inst_38641 = (state_38687[(16)]);
var inst_38637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38640 = (function (){var all_files = inst_38601;
var res_SINGLEQUOTE_ = inst_38604;
var res = inst_38605;
var files_not_loaded = inst_38607;
var dependencies_that_loaded = inst_38609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38641,inst_38637,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38639){
var map__38723 = p__38639;
var map__38723__$1 = ((((!((map__38723 == null)))?((((map__38723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38723):map__38723);
var namespace = cljs.core.get.call(null,map__38723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38641,inst_38637,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38641__$1 = cljs.core.group_by.call(null,inst_38640,inst_38607);
var inst_38643 = (inst_38641__$1 == null);
var inst_38644 = cljs.core.not.call(null,inst_38643);
var state_38687__$1 = (function (){var statearr_38725 = state_38687;
(statearr_38725[(16)] = inst_38641__$1);

(statearr_38725[(28)] = inst_38637);

return statearr_38725;
})();
if(inst_38644){
var statearr_38726_38802 = state_38687__$1;
(statearr_38726_38802[(1)] = (32));

} else {
var statearr_38727_38803 = state_38687__$1;
(statearr_38727_38803[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (44))){
var inst_38663 = (state_38687[(21)]);
var inst_38676 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38663);
var inst_38677 = cljs.core.pr_str.call(null,inst_38676);
var inst_38678 = [cljs.core.str("not required: "),cljs.core.str(inst_38677)].join('');
var inst_38679 = figwheel.client.utils.log.call(null,inst_38678);
var state_38687__$1 = state_38687;
var statearr_38728_38804 = state_38687__$1;
(statearr_38728_38804[(2)] = inst_38679);

(statearr_38728_38804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (6))){
var inst_38582 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38729_38805 = state_38687__$1;
(statearr_38729_38805[(2)] = inst_38582);

(statearr_38729_38805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (28))){
var inst_38607 = (state_38687[(26)]);
var inst_38634 = (state_38687[(2)]);
var inst_38635 = cljs.core.not_empty.call(null,inst_38607);
var state_38687__$1 = (function (){var statearr_38730 = state_38687;
(statearr_38730[(29)] = inst_38634);

return statearr_38730;
})();
if(cljs.core.truth_(inst_38635)){
var statearr_38731_38806 = state_38687__$1;
(statearr_38731_38806[(1)] = (29));

} else {
var statearr_38732_38807 = state_38687__$1;
(statearr_38732_38807[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (25))){
var inst_38605 = (state_38687[(25)]);
var inst_38621 = (state_38687[(2)]);
var inst_38622 = cljs.core.not_empty.call(null,inst_38605);
var state_38687__$1 = (function (){var statearr_38733 = state_38687;
(statearr_38733[(30)] = inst_38621);

return statearr_38733;
})();
if(cljs.core.truth_(inst_38622)){
var statearr_38734_38808 = state_38687__$1;
(statearr_38734_38808[(1)] = (26));

} else {
var statearr_38735_38809 = state_38687__$1;
(statearr_38735_38809[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (34))){
var inst_38656 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
if(cljs.core.truth_(inst_38656)){
var statearr_38736_38810 = state_38687__$1;
(statearr_38736_38810[(1)] = (38));

} else {
var statearr_38737_38811 = state_38687__$1;
(statearr_38737_38811[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (17))){
var state_38687__$1 = state_38687;
var statearr_38738_38812 = state_38687__$1;
(statearr_38738_38812[(2)] = recompile_dependents);

(statearr_38738_38812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (3))){
var state_38687__$1 = state_38687;
var statearr_38739_38813 = state_38687__$1;
(statearr_38739_38813[(2)] = null);

(statearr_38739_38813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (12))){
var inst_38578 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38740_38814 = state_38687__$1;
(statearr_38740_38814[(2)] = inst_38578);

(statearr_38740_38814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (2))){
var inst_38540 = (state_38687[(13)]);
var inst_38547 = cljs.core.seq.call(null,inst_38540);
var inst_38548 = inst_38547;
var inst_38549 = null;
var inst_38550 = (0);
var inst_38551 = (0);
var state_38687__$1 = (function (){var statearr_38741 = state_38687;
(statearr_38741[(7)] = inst_38548);

(statearr_38741[(8)] = inst_38550);

(statearr_38741[(9)] = inst_38551);

(statearr_38741[(10)] = inst_38549);

return statearr_38741;
})();
var statearr_38742_38815 = state_38687__$1;
(statearr_38742_38815[(2)] = null);

(statearr_38742_38815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (23))){
var inst_38609 = (state_38687[(23)]);
var inst_38604 = (state_38687[(24)]);
var inst_38607 = (state_38687[(26)]);
var inst_38601 = (state_38687[(19)]);
var inst_38605 = (state_38687[(25)]);
var inst_38612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38614 = (function (){var all_files = inst_38601;
var res_SINGLEQUOTE_ = inst_38604;
var res = inst_38605;
var files_not_loaded = inst_38607;
var dependencies_that_loaded = inst_38609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38612,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38613){
var map__38743 = p__38613;
var map__38743__$1 = ((((!((map__38743 == null)))?((((map__38743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38743):map__38743);
var request_url = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38612,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38615 = cljs.core.reverse.call(null,inst_38609);
var inst_38616 = cljs.core.map.call(null,inst_38614,inst_38615);
var inst_38617 = cljs.core.pr_str.call(null,inst_38616);
var inst_38618 = figwheel.client.utils.log.call(null,inst_38617);
var state_38687__$1 = (function (){var statearr_38745 = state_38687;
(statearr_38745[(31)] = inst_38612);

return statearr_38745;
})();
var statearr_38746_38816 = state_38687__$1;
(statearr_38746_38816[(2)] = inst_38618);

(statearr_38746_38816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (35))){
var state_38687__$1 = state_38687;
var statearr_38747_38817 = state_38687__$1;
(statearr_38747_38817[(2)] = true);

(statearr_38747_38817[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (19))){
var inst_38591 = (state_38687[(12)]);
var inst_38597 = figwheel.client.file_reloading.expand_files.call(null,inst_38591);
var state_38687__$1 = state_38687;
var statearr_38748_38818 = state_38687__$1;
(statearr_38748_38818[(2)] = inst_38597);

(statearr_38748_38818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (11))){
var state_38687__$1 = state_38687;
var statearr_38749_38819 = state_38687__$1;
(statearr_38749_38819[(2)] = null);

(statearr_38749_38819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (9))){
var inst_38580 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38750_38820 = state_38687__$1;
(statearr_38750_38820[(2)] = inst_38580);

(statearr_38750_38820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (5))){
var inst_38550 = (state_38687[(8)]);
var inst_38551 = (state_38687[(9)]);
var inst_38553 = (inst_38551 < inst_38550);
var inst_38554 = inst_38553;
var state_38687__$1 = state_38687;
if(cljs.core.truth_(inst_38554)){
var statearr_38751_38821 = state_38687__$1;
(statearr_38751_38821[(1)] = (7));

} else {
var statearr_38752_38822 = state_38687__$1;
(statearr_38752_38822[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (14))){
var inst_38561 = (state_38687[(22)]);
var inst_38570 = cljs.core.first.call(null,inst_38561);
var inst_38571 = figwheel.client.file_reloading.eval_body.call(null,inst_38570,opts);
var inst_38572 = cljs.core.next.call(null,inst_38561);
var inst_38548 = inst_38572;
var inst_38549 = null;
var inst_38550 = (0);
var inst_38551 = (0);
var state_38687__$1 = (function (){var statearr_38753 = state_38687;
(statearr_38753[(7)] = inst_38548);

(statearr_38753[(32)] = inst_38571);

(statearr_38753[(8)] = inst_38550);

(statearr_38753[(9)] = inst_38551);

(statearr_38753[(10)] = inst_38549);

return statearr_38753;
})();
var statearr_38754_38823 = state_38687__$1;
(statearr_38754_38823[(2)] = null);

(statearr_38754_38823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (45))){
var state_38687__$1 = state_38687;
var statearr_38755_38824 = state_38687__$1;
(statearr_38755_38824[(2)] = null);

(statearr_38755_38824[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (26))){
var inst_38609 = (state_38687[(23)]);
var inst_38604 = (state_38687[(24)]);
var inst_38607 = (state_38687[(26)]);
var inst_38601 = (state_38687[(19)]);
var inst_38605 = (state_38687[(25)]);
var inst_38624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38626 = (function (){var all_files = inst_38601;
var res_SINGLEQUOTE_ = inst_38604;
var res = inst_38605;
var files_not_loaded = inst_38607;
var dependencies_that_loaded = inst_38609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38624,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38625){
var map__38756 = p__38625;
var map__38756__$1 = ((((!((map__38756 == null)))?((((map__38756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38756):map__38756);
var namespace = cljs.core.get.call(null,map__38756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38624,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38627 = cljs.core.map.call(null,inst_38626,inst_38605);
var inst_38628 = cljs.core.pr_str.call(null,inst_38627);
var inst_38629 = figwheel.client.utils.log.call(null,inst_38628);
var inst_38630 = (function (){var all_files = inst_38601;
var res_SINGLEQUOTE_ = inst_38604;
var res = inst_38605;
var files_not_loaded = inst_38607;
var dependencies_that_loaded = inst_38609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38624,inst_38626,inst_38627,inst_38628,inst_38629,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38609,inst_38604,inst_38607,inst_38601,inst_38605,inst_38624,inst_38626,inst_38627,inst_38628,inst_38629,state_val_38688,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38631 = setTimeout(inst_38630,(10));
var state_38687__$1 = (function (){var statearr_38758 = state_38687;
(statearr_38758[(33)] = inst_38629);

(statearr_38758[(34)] = inst_38624);

return statearr_38758;
})();
var statearr_38759_38825 = state_38687__$1;
(statearr_38759_38825[(2)] = inst_38631);

(statearr_38759_38825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (16))){
var state_38687__$1 = state_38687;
var statearr_38760_38826 = state_38687__$1;
(statearr_38760_38826[(2)] = reload_dependents);

(statearr_38760_38826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (38))){
var inst_38641 = (state_38687[(16)]);
var inst_38658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38641);
var state_38687__$1 = state_38687;
var statearr_38761_38827 = state_38687__$1;
(statearr_38761_38827[(2)] = inst_38658);

(statearr_38761_38827[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (30))){
var state_38687__$1 = state_38687;
var statearr_38762_38828 = state_38687__$1;
(statearr_38762_38828[(2)] = null);

(statearr_38762_38828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (10))){
var inst_38561 = (state_38687[(22)]);
var inst_38563 = cljs.core.chunked_seq_QMARK_.call(null,inst_38561);
var state_38687__$1 = state_38687;
if(inst_38563){
var statearr_38763_38829 = state_38687__$1;
(statearr_38763_38829[(1)] = (13));

} else {
var statearr_38764_38830 = state_38687__$1;
(statearr_38764_38830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (18))){
var inst_38595 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
if(cljs.core.truth_(inst_38595)){
var statearr_38765_38831 = state_38687__$1;
(statearr_38765_38831[(1)] = (19));

} else {
var statearr_38766_38832 = state_38687__$1;
(statearr_38766_38832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (42))){
var state_38687__$1 = state_38687;
var statearr_38767_38833 = state_38687__$1;
(statearr_38767_38833[(2)] = null);

(statearr_38767_38833[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (37))){
var inst_38653 = (state_38687[(2)]);
var state_38687__$1 = state_38687;
var statearr_38768_38834 = state_38687__$1;
(statearr_38768_38834[(2)] = inst_38653);

(statearr_38768_38834[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38688 === (8))){
var inst_38548 = (state_38687[(7)]);
var inst_38561 = (state_38687[(22)]);
var inst_38561__$1 = cljs.core.seq.call(null,inst_38548);
var state_38687__$1 = (function (){var statearr_38769 = state_38687;
(statearr_38769[(22)] = inst_38561__$1);

return statearr_38769;
})();
if(inst_38561__$1){
var statearr_38770_38835 = state_38687__$1;
(statearr_38770_38835[(1)] = (10));

} else {
var statearr_38771_38836 = state_38687__$1;
(statearr_38771_38836[(1)] = (11));

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
});})(c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19966__auto__,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0 = (function (){
var statearr_38775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38775[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__);

(statearr_38775[(1)] = (1));

return statearr_38775;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1 = (function (state_38687){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_38687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e38776){if((e38776 instanceof Object)){
var ex__19970__auto__ = e38776;
var statearr_38777_38837 = state_38687;
(statearr_38777_38837[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38838 = state_38687;
state_38687 = G__38838;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__ = function(state_38687){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1.call(this,state_38687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20080__auto__ = (function (){var statearr_38778 = f__20079__auto__.call(null);
(statearr_38778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_38778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,map__38533,map__38533__$1,opts,before_jsload,on_jsload,reload_dependents,map__38534,map__38534__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20078__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38841,link){
var map__38844 = p__38841;
var map__38844__$1 = ((((!((map__38844 == null)))?((((map__38844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38844):map__38844);
var file = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__38844,map__38844__$1,file){
return (function (p1__38839_SHARP_,p2__38840_SHARP_){
if(cljs.core._EQ_.call(null,p1__38839_SHARP_,p2__38840_SHARP_)){
return p1__38839_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__38844,map__38844__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38850){
var map__38851 = p__38850;
var map__38851__$1 = ((((!((map__38851 == null)))?((((map__38851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38851):map__38851);
var match_length = cljs.core.get.call(null,map__38851__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38851__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38846_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38846_SHARP_);
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
var args38853 = [];
var len__17885__auto___38856 = arguments.length;
var i__17886__auto___38857 = (0);
while(true){
if((i__17886__auto___38857 < len__17885__auto___38856)){
args38853.push((arguments[i__17886__auto___38857]));

var G__38858 = (i__17886__auto___38857 + (1));
i__17886__auto___38857 = G__38858;
continue;
} else {
}
break;
}

var G__38855 = args38853.length;
switch (G__38855) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38853.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38860_SHARP_,p2__38861_SHARP_){
return cljs.core.assoc.call(null,p1__38860_SHARP_,cljs.core.get.call(null,p2__38861_SHARP_,key),p2__38861_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__38862){
var map__38865 = p__38862;
var map__38865__$1 = ((((!((map__38865 == null)))?((((map__38865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38865):map__38865);
var f_data = map__38865__$1;
var file = cljs.core.get.call(null,map__38865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38867,files_msg){
var map__38874 = p__38867;
var map__38874__$1 = ((((!((map__38874 == null)))?((((map__38874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38874):map__38874);
var opts = map__38874__$1;
var on_cssload = cljs.core.get.call(null,map__38874__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__38876_38880 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__38877_38881 = null;
var count__38878_38882 = (0);
var i__38879_38883 = (0);
while(true){
if((i__38879_38883 < count__38878_38882)){
var f_38884 = cljs.core._nth.call(null,chunk__38877_38881,i__38879_38883);
figwheel.client.file_reloading.reload_css_file.call(null,f_38884);

var G__38885 = seq__38876_38880;
var G__38886 = chunk__38877_38881;
var G__38887 = count__38878_38882;
var G__38888 = (i__38879_38883 + (1));
seq__38876_38880 = G__38885;
chunk__38877_38881 = G__38886;
count__38878_38882 = G__38887;
i__38879_38883 = G__38888;
continue;
} else {
var temp__4425__auto___38889 = cljs.core.seq.call(null,seq__38876_38880);
if(temp__4425__auto___38889){
var seq__38876_38890__$1 = temp__4425__auto___38889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38876_38890__$1)){
var c__17630__auto___38891 = cljs.core.chunk_first.call(null,seq__38876_38890__$1);
var G__38892 = cljs.core.chunk_rest.call(null,seq__38876_38890__$1);
var G__38893 = c__17630__auto___38891;
var G__38894 = cljs.core.count.call(null,c__17630__auto___38891);
var G__38895 = (0);
seq__38876_38880 = G__38892;
chunk__38877_38881 = G__38893;
count__38878_38882 = G__38894;
i__38879_38883 = G__38895;
continue;
} else {
var f_38896 = cljs.core.first.call(null,seq__38876_38890__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38896);

var G__38897 = cljs.core.next.call(null,seq__38876_38890__$1);
var G__38898 = null;
var G__38899 = (0);
var G__38900 = (0);
seq__38876_38880 = G__38897;
chunk__38877_38881 = G__38898;
count__38878_38882 = G__38899;
i__38879_38883 = G__38900;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__38874,map__38874__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__38874,map__38874__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1450190105785