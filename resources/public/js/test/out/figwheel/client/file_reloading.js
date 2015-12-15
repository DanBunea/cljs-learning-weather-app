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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31776_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31776_SHARP_));
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
var seq__31781 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31782 = null;
var count__31783 = (0);
var i__31784 = (0);
while(true){
if((i__31784 < count__31783)){
var n = cljs.core._nth.call(null,chunk__31782,i__31784);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31785 = seq__31781;
var G__31786 = chunk__31782;
var G__31787 = count__31783;
var G__31788 = (i__31784 + (1));
seq__31781 = G__31785;
chunk__31782 = G__31786;
count__31783 = G__31787;
i__31784 = G__31788;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31781);
if(temp__4425__auto__){
var seq__31781__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31781__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__31781__$1);
var G__31789 = cljs.core.chunk_rest.call(null,seq__31781__$1);
var G__31790 = c__17630__auto__;
var G__31791 = cljs.core.count.call(null,c__17630__auto__);
var G__31792 = (0);
seq__31781 = G__31789;
chunk__31782 = G__31790;
count__31783 = G__31791;
i__31784 = G__31792;
continue;
} else {
var n = cljs.core.first.call(null,seq__31781__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31793 = cljs.core.next.call(null,seq__31781__$1);
var G__31794 = null;
var G__31795 = (0);
var G__31796 = (0);
seq__31781 = G__31793;
chunk__31782 = G__31794;
count__31783 = G__31795;
i__31784 = G__31796;
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

var seq__31835_31842 = cljs.core.seq.call(null,deps);
var chunk__31836_31843 = null;
var count__31837_31844 = (0);
var i__31838_31845 = (0);
while(true){
if((i__31838_31845 < count__31837_31844)){
var dep_31846 = cljs.core._nth.call(null,chunk__31836_31843,i__31838_31845);
topo_sort_helper_STAR_.call(null,dep_31846,(depth + (1)),state);

var G__31847 = seq__31835_31842;
var G__31848 = chunk__31836_31843;
var G__31849 = count__31837_31844;
var G__31850 = (i__31838_31845 + (1));
seq__31835_31842 = G__31847;
chunk__31836_31843 = G__31848;
count__31837_31844 = G__31849;
i__31838_31845 = G__31850;
continue;
} else {
var temp__4425__auto___31851 = cljs.core.seq.call(null,seq__31835_31842);
if(temp__4425__auto___31851){
var seq__31835_31852__$1 = temp__4425__auto___31851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31835_31852__$1)){
var c__17630__auto___31853 = cljs.core.chunk_first.call(null,seq__31835_31852__$1);
var G__31854 = cljs.core.chunk_rest.call(null,seq__31835_31852__$1);
var G__31855 = c__17630__auto___31853;
var G__31856 = cljs.core.count.call(null,c__17630__auto___31853);
var G__31857 = (0);
seq__31835_31842 = G__31854;
chunk__31836_31843 = G__31855;
count__31837_31844 = G__31856;
i__31838_31845 = G__31857;
continue;
} else {
var dep_31858 = cljs.core.first.call(null,seq__31835_31852__$1);
topo_sort_helper_STAR_.call(null,dep_31858,(depth + (1)),state);

var G__31859 = cljs.core.next.call(null,seq__31835_31852__$1);
var G__31860 = null;
var G__31861 = (0);
var G__31862 = (0);
seq__31835_31842 = G__31859;
chunk__31836_31843 = G__31860;
count__31837_31844 = G__31861;
i__31838_31845 = G__31862;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31839){
var vec__31841 = p__31839;
var x = cljs.core.nth.call(null,vec__31841,(0),null);
var xs = cljs.core.nthnext.call(null,vec__31841,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31841,x,xs,get_deps__$1){
return (function (p1__31797_SHARP_){
return clojure.set.difference.call(null,p1__31797_SHARP_,x);
});})(vec__31841,x,xs,get_deps__$1))
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
var seq__31875 = cljs.core.seq.call(null,provides);
var chunk__31876 = null;
var count__31877 = (0);
var i__31878 = (0);
while(true){
if((i__31878 < count__31877)){
var prov = cljs.core._nth.call(null,chunk__31876,i__31878);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31879_31887 = cljs.core.seq.call(null,requires);
var chunk__31880_31888 = null;
var count__31881_31889 = (0);
var i__31882_31890 = (0);
while(true){
if((i__31882_31890 < count__31881_31889)){
var req_31891 = cljs.core._nth.call(null,chunk__31880_31888,i__31882_31890);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31891,prov);

var G__31892 = seq__31879_31887;
var G__31893 = chunk__31880_31888;
var G__31894 = count__31881_31889;
var G__31895 = (i__31882_31890 + (1));
seq__31879_31887 = G__31892;
chunk__31880_31888 = G__31893;
count__31881_31889 = G__31894;
i__31882_31890 = G__31895;
continue;
} else {
var temp__4425__auto___31896 = cljs.core.seq.call(null,seq__31879_31887);
if(temp__4425__auto___31896){
var seq__31879_31897__$1 = temp__4425__auto___31896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31879_31897__$1)){
var c__17630__auto___31898 = cljs.core.chunk_first.call(null,seq__31879_31897__$1);
var G__31899 = cljs.core.chunk_rest.call(null,seq__31879_31897__$1);
var G__31900 = c__17630__auto___31898;
var G__31901 = cljs.core.count.call(null,c__17630__auto___31898);
var G__31902 = (0);
seq__31879_31887 = G__31899;
chunk__31880_31888 = G__31900;
count__31881_31889 = G__31901;
i__31882_31890 = G__31902;
continue;
} else {
var req_31903 = cljs.core.first.call(null,seq__31879_31897__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31903,prov);

var G__31904 = cljs.core.next.call(null,seq__31879_31897__$1);
var G__31905 = null;
var G__31906 = (0);
var G__31907 = (0);
seq__31879_31887 = G__31904;
chunk__31880_31888 = G__31905;
count__31881_31889 = G__31906;
i__31882_31890 = G__31907;
continue;
}
} else {
}
}
break;
}

var G__31908 = seq__31875;
var G__31909 = chunk__31876;
var G__31910 = count__31877;
var G__31911 = (i__31878 + (1));
seq__31875 = G__31908;
chunk__31876 = G__31909;
count__31877 = G__31910;
i__31878 = G__31911;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31875);
if(temp__4425__auto__){
var seq__31875__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31875__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__31875__$1);
var G__31912 = cljs.core.chunk_rest.call(null,seq__31875__$1);
var G__31913 = c__17630__auto__;
var G__31914 = cljs.core.count.call(null,c__17630__auto__);
var G__31915 = (0);
seq__31875 = G__31912;
chunk__31876 = G__31913;
count__31877 = G__31914;
i__31878 = G__31915;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31875__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31883_31916 = cljs.core.seq.call(null,requires);
var chunk__31884_31917 = null;
var count__31885_31918 = (0);
var i__31886_31919 = (0);
while(true){
if((i__31886_31919 < count__31885_31918)){
var req_31920 = cljs.core._nth.call(null,chunk__31884_31917,i__31886_31919);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31920,prov);

var G__31921 = seq__31883_31916;
var G__31922 = chunk__31884_31917;
var G__31923 = count__31885_31918;
var G__31924 = (i__31886_31919 + (1));
seq__31883_31916 = G__31921;
chunk__31884_31917 = G__31922;
count__31885_31918 = G__31923;
i__31886_31919 = G__31924;
continue;
} else {
var temp__4425__auto___31925__$1 = cljs.core.seq.call(null,seq__31883_31916);
if(temp__4425__auto___31925__$1){
var seq__31883_31926__$1 = temp__4425__auto___31925__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31883_31926__$1)){
var c__17630__auto___31927 = cljs.core.chunk_first.call(null,seq__31883_31926__$1);
var G__31928 = cljs.core.chunk_rest.call(null,seq__31883_31926__$1);
var G__31929 = c__17630__auto___31927;
var G__31930 = cljs.core.count.call(null,c__17630__auto___31927);
var G__31931 = (0);
seq__31883_31916 = G__31928;
chunk__31884_31917 = G__31929;
count__31885_31918 = G__31930;
i__31886_31919 = G__31931;
continue;
} else {
var req_31932 = cljs.core.first.call(null,seq__31883_31926__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31932,prov);

var G__31933 = cljs.core.next.call(null,seq__31883_31926__$1);
var G__31934 = null;
var G__31935 = (0);
var G__31936 = (0);
seq__31883_31916 = G__31933;
chunk__31884_31917 = G__31934;
count__31885_31918 = G__31935;
i__31886_31919 = G__31936;
continue;
}
} else {
}
}
break;
}

var G__31937 = cljs.core.next.call(null,seq__31875__$1);
var G__31938 = null;
var G__31939 = (0);
var G__31940 = (0);
seq__31875 = G__31937;
chunk__31876 = G__31938;
count__31877 = G__31939;
i__31878 = G__31940;
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
var seq__31945_31949 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31946_31950 = null;
var count__31947_31951 = (0);
var i__31948_31952 = (0);
while(true){
if((i__31948_31952 < count__31947_31951)){
var ns_31953 = cljs.core._nth.call(null,chunk__31946_31950,i__31948_31952);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31953);

var G__31954 = seq__31945_31949;
var G__31955 = chunk__31946_31950;
var G__31956 = count__31947_31951;
var G__31957 = (i__31948_31952 + (1));
seq__31945_31949 = G__31954;
chunk__31946_31950 = G__31955;
count__31947_31951 = G__31956;
i__31948_31952 = G__31957;
continue;
} else {
var temp__4425__auto___31958 = cljs.core.seq.call(null,seq__31945_31949);
if(temp__4425__auto___31958){
var seq__31945_31959__$1 = temp__4425__auto___31958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31945_31959__$1)){
var c__17630__auto___31960 = cljs.core.chunk_first.call(null,seq__31945_31959__$1);
var G__31961 = cljs.core.chunk_rest.call(null,seq__31945_31959__$1);
var G__31962 = c__17630__auto___31960;
var G__31963 = cljs.core.count.call(null,c__17630__auto___31960);
var G__31964 = (0);
seq__31945_31949 = G__31961;
chunk__31946_31950 = G__31962;
count__31947_31951 = G__31963;
i__31948_31952 = G__31964;
continue;
} else {
var ns_31965 = cljs.core.first.call(null,seq__31945_31959__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31965);

var G__31966 = cljs.core.next.call(null,seq__31945_31959__$1);
var G__31967 = null;
var G__31968 = (0);
var G__31969 = (0);
seq__31945_31949 = G__31966;
chunk__31946_31950 = G__31967;
count__31947_31951 = G__31968;
i__31948_31952 = G__31969;
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
var G__31970__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31971__i = 0, G__31971__a = new Array(arguments.length -  0);
while (G__31971__i < G__31971__a.length) {G__31971__a[G__31971__i] = arguments[G__31971__i + 0]; ++G__31971__i;}
  args = new cljs.core.IndexedSeq(G__31971__a,0);
} 
return G__31970__delegate.call(this,args);};
G__31970.cljs$lang$maxFixedArity = 0;
G__31970.cljs$lang$applyTo = (function (arglist__31972){
var args = cljs.core.seq(arglist__31972);
return G__31970__delegate(args);
});
G__31970.cljs$core$IFn$_invoke$arity$variadic = G__31970__delegate;
return G__31970;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31974 = cljs.core._EQ_;
var expr__31975 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31974.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31975))){
var path_parts = ((function (pred__31974,expr__31975){
return (function (p1__31973_SHARP_){
return clojure.string.split.call(null,p1__31973_SHARP_,/[\/\\]/);
});})(pred__31974,expr__31975))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31974,expr__31975){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31977){if((e31977 instanceof Error)){
var e = e31977;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31977;

}
}})());
});
;})(path_parts,sep,root,pred__31974,expr__31975))
} else {
if(cljs.core.truth_(pred__31974.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31975))){
return ((function (pred__31974,expr__31975){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31974,expr__31975){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31974,expr__31975))
);

return deferred.addErrback(((function (deferred,pred__31974,expr__31975){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31974,expr__31975))
);
});
;})(pred__31974,expr__31975))
} else {
return ((function (pred__31974,expr__31975){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31974,expr__31975))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31978,callback){
var map__31981 = p__31978;
var map__31981__$1 = ((((!((map__31981 == null)))?((((map__31981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31981):map__31981);
var file_msg = map__31981__$1;
var request_url = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31981,map__31981__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31981,map__31981__$1,file_msg,request_url))
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
return (function (state_32005){
var state_val_32006 = (state_32005[(1)]);
if((state_val_32006 === (7))){
var inst_32001 = (state_32005[(2)]);
var state_32005__$1 = state_32005;
var statearr_32007_32027 = state_32005__$1;
(statearr_32007_32027[(2)] = inst_32001);

(statearr_32007_32027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (1))){
var state_32005__$1 = state_32005;
var statearr_32008_32028 = state_32005__$1;
(statearr_32008_32028[(2)] = null);

(statearr_32008_32028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (4))){
var inst_31985 = (state_32005[(7)]);
var inst_31985__$1 = (state_32005[(2)]);
var state_32005__$1 = (function (){var statearr_32009 = state_32005;
(statearr_32009[(7)] = inst_31985__$1);

return statearr_32009;
})();
if(cljs.core.truth_(inst_31985__$1)){
var statearr_32010_32029 = state_32005__$1;
(statearr_32010_32029[(1)] = (5));

} else {
var statearr_32011_32030 = state_32005__$1;
(statearr_32011_32030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (6))){
var state_32005__$1 = state_32005;
var statearr_32012_32031 = state_32005__$1;
(statearr_32012_32031[(2)] = null);

(statearr_32012_32031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (3))){
var inst_32003 = (state_32005[(2)]);
var state_32005__$1 = state_32005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32005__$1,inst_32003);
} else {
if((state_val_32006 === (2))){
var state_32005__$1 = state_32005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32005__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32006 === (11))){
var inst_31997 = (state_32005[(2)]);
var state_32005__$1 = (function (){var statearr_32013 = state_32005;
(statearr_32013[(8)] = inst_31997);

return statearr_32013;
})();
var statearr_32014_32032 = state_32005__$1;
(statearr_32014_32032[(2)] = null);

(statearr_32014_32032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (9))){
var inst_31991 = (state_32005[(9)]);
var inst_31989 = (state_32005[(10)]);
var inst_31993 = inst_31991.call(null,inst_31989);
var state_32005__$1 = state_32005;
var statearr_32015_32033 = state_32005__$1;
(statearr_32015_32033[(2)] = inst_31993);

(statearr_32015_32033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (5))){
var inst_31985 = (state_32005[(7)]);
var inst_31987 = figwheel.client.file_reloading.blocking_load.call(null,inst_31985);
var state_32005__$1 = state_32005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32005__$1,(8),inst_31987);
} else {
if((state_val_32006 === (10))){
var inst_31989 = (state_32005[(10)]);
var inst_31995 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31989);
var state_32005__$1 = state_32005;
var statearr_32016_32034 = state_32005__$1;
(statearr_32016_32034[(2)] = inst_31995);

(statearr_32016_32034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32006 === (8))){
var inst_31991 = (state_32005[(9)]);
var inst_31985 = (state_32005[(7)]);
var inst_31989 = (state_32005[(2)]);
var inst_31990 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31991__$1 = cljs.core.get.call(null,inst_31990,inst_31985);
var state_32005__$1 = (function (){var statearr_32017 = state_32005;
(statearr_32017[(9)] = inst_31991__$1);

(statearr_32017[(10)] = inst_31989);

return statearr_32017;
})();
if(cljs.core.truth_(inst_31991__$1)){
var statearr_32018_32035 = state_32005__$1;
(statearr_32018_32035[(1)] = (9));

} else {
var statearr_32019_32036 = state_32005__$1;
(statearr_32019_32036[(1)] = (10));

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
var statearr_32023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32023[(0)] = figwheel$client$file_reloading$state_machine__19967__auto__);

(statearr_32023[(1)] = (1));

return statearr_32023;
});
var figwheel$client$file_reloading$state_machine__19967__auto____1 = (function (state_32005){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_32005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e32024){if((e32024 instanceof Object)){
var ex__19970__auto__ = e32024;
var statearr_32025_32037 = state_32005;
(statearr_32025_32037[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32038 = state_32005;
state_32005 = G__32038;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19967__auto__ = function(state_32005){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19967__auto____1.call(this,state_32005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19967__auto____0;
figwheel$client$file_reloading$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19967__auto____1;
return figwheel$client$file_reloading$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_32026 = f__20079__auto__.call(null);
(statearr_32026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_32026;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32039,callback){
var map__32042 = p__32039;
var map__32042__$1 = ((((!((map__32042 == null)))?((((map__32042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32042):map__32042);
var file_msg = map__32042__$1;
var namespace = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32042,map__32042__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32042,map__32042__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32044){
var map__32047 = p__32044;
var map__32047__$1 = ((((!((map__32047 == null)))?((((map__32047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32047):map__32047);
var file_msg = map__32047__$1;
var namespace = cljs.core.get.call(null,map__32047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32049,callback){
var map__32052 = p__32049;
var map__32052__$1 = ((((!((map__32052 == null)))?((((map__32052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32052):map__32052);
var file_msg = map__32052__$1;
var request_url = cljs.core.get.call(null,map__32052__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20078__auto___32140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___32140,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___32140,out){
return (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (1))){
var inst_32100 = cljs.core.nth.call(null,files,(0),null);
var inst_32101 = cljs.core.nthnext.call(null,files,(1));
var inst_32102 = files;
var state_32122__$1 = (function (){var statearr_32124 = state_32122;
(statearr_32124[(7)] = inst_32101);

(statearr_32124[(8)] = inst_32100);

(statearr_32124[(9)] = inst_32102);

return statearr_32124;
})();
var statearr_32125_32141 = state_32122__$1;
(statearr_32125_32141[(2)] = null);

(statearr_32125_32141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (2))){
var inst_32105 = (state_32122[(10)]);
var inst_32102 = (state_32122[(9)]);
var inst_32105__$1 = cljs.core.nth.call(null,inst_32102,(0),null);
var inst_32106 = cljs.core.nthnext.call(null,inst_32102,(1));
var inst_32107 = (inst_32105__$1 == null);
var inst_32108 = cljs.core.not.call(null,inst_32107);
var state_32122__$1 = (function (){var statearr_32126 = state_32122;
(statearr_32126[(10)] = inst_32105__$1);

(statearr_32126[(11)] = inst_32106);

return statearr_32126;
})();
if(inst_32108){
var statearr_32127_32142 = state_32122__$1;
(statearr_32127_32142[(1)] = (4));

} else {
var statearr_32128_32143 = state_32122__$1;
(statearr_32128_32143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (3))){
var inst_32120 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32122__$1,inst_32120);
} else {
if((state_val_32123 === (4))){
var inst_32105 = (state_32122[(10)]);
var inst_32110 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32105);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32122__$1,(7),inst_32110);
} else {
if((state_val_32123 === (5))){
var inst_32116 = cljs.core.async.close_BANG_.call(null,out);
var state_32122__$1 = state_32122;
var statearr_32129_32144 = state_32122__$1;
(statearr_32129_32144[(2)] = inst_32116);

(statearr_32129_32144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (6))){
var inst_32118 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32130_32145 = state_32122__$1;
(statearr_32130_32145[(2)] = inst_32118);

(statearr_32130_32145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (7))){
var inst_32106 = (state_32122[(11)]);
var inst_32112 = (state_32122[(2)]);
var inst_32113 = cljs.core.async.put_BANG_.call(null,out,inst_32112);
var inst_32102 = inst_32106;
var state_32122__$1 = (function (){var statearr_32131 = state_32122;
(statearr_32131[(12)] = inst_32113);

(statearr_32131[(9)] = inst_32102);

return statearr_32131;
})();
var statearr_32132_32146 = state_32122__$1;
(statearr_32132_32146[(2)] = null);

(statearr_32132_32146[(1)] = (2));


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
});})(c__20078__auto___32140,out))
;
return ((function (switch__19966__auto__,c__20078__auto___32140,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0 = (function (){
var statearr_32136 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32136[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__);

(statearr_32136[(1)] = (1));

return statearr_32136;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1 = (function (state_32122){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_32122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e32137){if((e32137 instanceof Object)){
var ex__19970__auto__ = e32137;
var statearr_32138_32147 = state_32122;
(statearr_32138_32147[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32148 = state_32122;
state_32122 = G__32148;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___32140,out))
})();
var state__20080__auto__ = (function (){var statearr_32139 = f__20079__auto__.call(null);
(statearr_32139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___32140);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___32140,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32149,opts){
var map__32153 = p__32149;
var map__32153__$1 = ((((!((map__32153 == null)))?((((map__32153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32153):map__32153);
var eval_body__$1 = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32155){var e = e32155;
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
return (function (p1__32156_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32156_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32161){
var vec__32162 = p__32161;
var k = cljs.core.nth.call(null,vec__32162,(0),null);
var v = cljs.core.nth.call(null,vec__32162,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32163){
var vec__32164 = p__32163;
var k = cljs.core.nth.call(null,vec__32164,(0),null);
var v = cljs.core.nth.call(null,vec__32164,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32168,p__32169){
var map__32416 = p__32168;
var map__32416__$1 = ((((!((map__32416 == null)))?((((map__32416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32416):map__32416);
var opts = map__32416__$1;
var before_jsload = cljs.core.get.call(null,map__32416__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32416__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32416__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32417 = p__32169;
var map__32417__$1 = ((((!((map__32417 == null)))?((((map__32417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32417):map__32417);
var msg = map__32417__$1;
var files = cljs.core.get.call(null,map__32417__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32417__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32417__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32570){
var state_val_32571 = (state_32570[(1)]);
if((state_val_32571 === (7))){
var inst_32434 = (state_32570[(7)]);
var inst_32433 = (state_32570[(8)]);
var inst_32432 = (state_32570[(9)]);
var inst_32431 = (state_32570[(10)]);
var inst_32439 = cljs.core._nth.call(null,inst_32432,inst_32434);
var inst_32440 = figwheel.client.file_reloading.eval_body.call(null,inst_32439,opts);
var inst_32441 = (inst_32434 + (1));
var tmp32572 = inst_32433;
var tmp32573 = inst_32432;
var tmp32574 = inst_32431;
var inst_32431__$1 = tmp32574;
var inst_32432__$1 = tmp32573;
var inst_32433__$1 = tmp32572;
var inst_32434__$1 = inst_32441;
var state_32570__$1 = (function (){var statearr_32575 = state_32570;
(statearr_32575[(7)] = inst_32434__$1);

(statearr_32575[(8)] = inst_32433__$1);

(statearr_32575[(9)] = inst_32432__$1);

(statearr_32575[(11)] = inst_32440);

(statearr_32575[(10)] = inst_32431__$1);

return statearr_32575;
})();
var statearr_32576_32662 = state_32570__$1;
(statearr_32576_32662[(2)] = null);

(statearr_32576_32662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (20))){
var inst_32474 = (state_32570[(12)]);
var inst_32482 = figwheel.client.file_reloading.sort_files.call(null,inst_32474);
var state_32570__$1 = state_32570;
var statearr_32577_32663 = state_32570__$1;
(statearr_32577_32663[(2)] = inst_32482);

(statearr_32577_32663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (27))){
var state_32570__$1 = state_32570;
var statearr_32578_32664 = state_32570__$1;
(statearr_32578_32664[(2)] = null);

(statearr_32578_32664[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (1))){
var inst_32423 = (state_32570[(13)]);
var inst_32420 = before_jsload.call(null,files);
var inst_32421 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32422 = (function (){return ((function (inst_32423,inst_32420,inst_32421,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32165_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32165_SHARP_);
});
;})(inst_32423,inst_32420,inst_32421,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32423__$1 = cljs.core.filter.call(null,inst_32422,files);
var inst_32424 = cljs.core.not_empty.call(null,inst_32423__$1);
var state_32570__$1 = (function (){var statearr_32579 = state_32570;
(statearr_32579[(14)] = inst_32420);

(statearr_32579[(15)] = inst_32421);

(statearr_32579[(13)] = inst_32423__$1);

return statearr_32579;
})();
if(cljs.core.truth_(inst_32424)){
var statearr_32580_32665 = state_32570__$1;
(statearr_32580_32665[(1)] = (2));

} else {
var statearr_32581_32666 = state_32570__$1;
(statearr_32581_32666[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (24))){
var state_32570__$1 = state_32570;
var statearr_32582_32667 = state_32570__$1;
(statearr_32582_32667[(2)] = null);

(statearr_32582_32667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (39))){
var inst_32524 = (state_32570[(16)]);
var state_32570__$1 = state_32570;
var statearr_32583_32668 = state_32570__$1;
(statearr_32583_32668[(2)] = inst_32524);

(statearr_32583_32668[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (46))){
var inst_32565 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32584_32669 = state_32570__$1;
(statearr_32584_32669[(2)] = inst_32565);

(statearr_32584_32669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (4))){
var inst_32468 = (state_32570[(2)]);
var inst_32469 = cljs.core.List.EMPTY;
var inst_32470 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32469);
var inst_32471 = (function (){return ((function (inst_32468,inst_32469,inst_32470,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32166_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32166_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32166_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_32468,inst_32469,inst_32470,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32472 = cljs.core.filter.call(null,inst_32471,files);
var inst_32473 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32474 = cljs.core.concat.call(null,inst_32472,inst_32473);
var state_32570__$1 = (function (){var statearr_32585 = state_32570;
(statearr_32585[(12)] = inst_32474);

(statearr_32585[(17)] = inst_32468);

(statearr_32585[(18)] = inst_32470);

return statearr_32585;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32586_32670 = state_32570__$1;
(statearr_32586_32670[(1)] = (16));

} else {
var statearr_32587_32671 = state_32570__$1;
(statearr_32587_32671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (15))){
var inst_32458 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32588_32672 = state_32570__$1;
(statearr_32588_32672[(2)] = inst_32458);

(statearr_32588_32672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (21))){
var inst_32484 = (state_32570[(19)]);
var inst_32484__$1 = (state_32570[(2)]);
var inst_32485 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32484__$1);
var state_32570__$1 = (function (){var statearr_32589 = state_32570;
(statearr_32589[(19)] = inst_32484__$1);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32570__$1,(22),inst_32485);
} else {
if((state_val_32571 === (31))){
var inst_32568 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32570__$1,inst_32568);
} else {
if((state_val_32571 === (32))){
var inst_32524 = (state_32570[(16)]);
var inst_32529 = inst_32524.cljs$lang$protocol_mask$partition0$;
var inst_32530 = (inst_32529 & (64));
var inst_32531 = inst_32524.cljs$core$ISeq$;
var inst_32532 = (inst_32530) || (inst_32531);
var state_32570__$1 = state_32570;
if(cljs.core.truth_(inst_32532)){
var statearr_32590_32673 = state_32570__$1;
(statearr_32590_32673[(1)] = (35));

} else {
var statearr_32591_32674 = state_32570__$1;
(statearr_32591_32674[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (40))){
var inst_32545 = (state_32570[(20)]);
var inst_32544 = (state_32570[(2)]);
var inst_32545__$1 = cljs.core.get.call(null,inst_32544,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32546 = cljs.core.get.call(null,inst_32544,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32547 = cljs.core.not_empty.call(null,inst_32545__$1);
var state_32570__$1 = (function (){var statearr_32592 = state_32570;
(statearr_32592[(20)] = inst_32545__$1);

(statearr_32592[(21)] = inst_32546);

return statearr_32592;
})();
if(cljs.core.truth_(inst_32547)){
var statearr_32593_32675 = state_32570__$1;
(statearr_32593_32675[(1)] = (41));

} else {
var statearr_32594_32676 = state_32570__$1;
(statearr_32594_32676[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (33))){
var state_32570__$1 = state_32570;
var statearr_32595_32677 = state_32570__$1;
(statearr_32595_32677[(2)] = false);

(statearr_32595_32677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (13))){
var inst_32444 = (state_32570[(22)]);
var inst_32448 = cljs.core.chunk_first.call(null,inst_32444);
var inst_32449 = cljs.core.chunk_rest.call(null,inst_32444);
var inst_32450 = cljs.core.count.call(null,inst_32448);
var inst_32431 = inst_32449;
var inst_32432 = inst_32448;
var inst_32433 = inst_32450;
var inst_32434 = (0);
var state_32570__$1 = (function (){var statearr_32596 = state_32570;
(statearr_32596[(7)] = inst_32434);

(statearr_32596[(8)] = inst_32433);

(statearr_32596[(9)] = inst_32432);

(statearr_32596[(10)] = inst_32431);

return statearr_32596;
})();
var statearr_32597_32678 = state_32570__$1;
(statearr_32597_32678[(2)] = null);

(statearr_32597_32678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (22))){
var inst_32488 = (state_32570[(23)]);
var inst_32487 = (state_32570[(24)]);
var inst_32492 = (state_32570[(25)]);
var inst_32484 = (state_32570[(19)]);
var inst_32487__$1 = (state_32570[(2)]);
var inst_32488__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32487__$1);
var inst_32489 = (function (){var all_files = inst_32484;
var res_SINGLEQUOTE_ = inst_32487__$1;
var res = inst_32488__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32488,inst_32487,inst_32492,inst_32484,inst_32487__$1,inst_32488__$1,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32167_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32167_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32488,inst_32487,inst_32492,inst_32484,inst_32487__$1,inst_32488__$1,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32490 = cljs.core.filter.call(null,inst_32489,inst_32487__$1);
var inst_32491 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32492__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32491);
var inst_32493 = cljs.core.not_empty.call(null,inst_32492__$1);
var state_32570__$1 = (function (){var statearr_32598 = state_32570;
(statearr_32598[(23)] = inst_32488__$1);

(statearr_32598[(24)] = inst_32487__$1);

(statearr_32598[(25)] = inst_32492__$1);

(statearr_32598[(26)] = inst_32490);

return statearr_32598;
})();
if(cljs.core.truth_(inst_32493)){
var statearr_32599_32679 = state_32570__$1;
(statearr_32599_32679[(1)] = (23));

} else {
var statearr_32600_32680 = state_32570__$1;
(statearr_32600_32680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (36))){
var state_32570__$1 = state_32570;
var statearr_32601_32681 = state_32570__$1;
(statearr_32601_32681[(2)] = false);

(statearr_32601_32681[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (41))){
var inst_32545 = (state_32570[(20)]);
var inst_32549 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32550 = cljs.core.map.call(null,inst_32549,inst_32545);
var inst_32551 = cljs.core.pr_str.call(null,inst_32550);
var inst_32552 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32551)].join('');
var inst_32553 = figwheel.client.utils.log.call(null,inst_32552);
var state_32570__$1 = state_32570;
var statearr_32602_32682 = state_32570__$1;
(statearr_32602_32682[(2)] = inst_32553);

(statearr_32602_32682[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (43))){
var inst_32546 = (state_32570[(21)]);
var inst_32556 = (state_32570[(2)]);
var inst_32557 = cljs.core.not_empty.call(null,inst_32546);
var state_32570__$1 = (function (){var statearr_32603 = state_32570;
(statearr_32603[(27)] = inst_32556);

return statearr_32603;
})();
if(cljs.core.truth_(inst_32557)){
var statearr_32604_32683 = state_32570__$1;
(statearr_32604_32683[(1)] = (44));

} else {
var statearr_32605_32684 = state_32570__$1;
(statearr_32605_32684[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (29))){
var inst_32524 = (state_32570[(16)]);
var inst_32488 = (state_32570[(23)]);
var inst_32487 = (state_32570[(24)]);
var inst_32492 = (state_32570[(25)]);
var inst_32484 = (state_32570[(19)]);
var inst_32490 = (state_32570[(26)]);
var inst_32520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32523 = (function (){var all_files = inst_32484;
var res_SINGLEQUOTE_ = inst_32487;
var res = inst_32488;
var files_not_loaded = inst_32490;
var dependencies_that_loaded = inst_32492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32524,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32520,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32522){
var map__32606 = p__32522;
var map__32606__$1 = ((((!((map__32606 == null)))?((((map__32606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32606):map__32606);
var namespace = cljs.core.get.call(null,map__32606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32524,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32520,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32524__$1 = cljs.core.group_by.call(null,inst_32523,inst_32490);
var inst_32526 = (inst_32524__$1 == null);
var inst_32527 = cljs.core.not.call(null,inst_32526);
var state_32570__$1 = (function (){var statearr_32608 = state_32570;
(statearr_32608[(16)] = inst_32524__$1);

(statearr_32608[(28)] = inst_32520);

return statearr_32608;
})();
if(inst_32527){
var statearr_32609_32685 = state_32570__$1;
(statearr_32609_32685[(1)] = (32));

} else {
var statearr_32610_32686 = state_32570__$1;
(statearr_32610_32686[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (44))){
var inst_32546 = (state_32570[(21)]);
var inst_32559 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32546);
var inst_32560 = cljs.core.pr_str.call(null,inst_32559);
var inst_32561 = [cljs.core.str("not required: "),cljs.core.str(inst_32560)].join('');
var inst_32562 = figwheel.client.utils.log.call(null,inst_32561);
var state_32570__$1 = state_32570;
var statearr_32611_32687 = state_32570__$1;
(statearr_32611_32687[(2)] = inst_32562);

(statearr_32611_32687[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (6))){
var inst_32465 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32612_32688 = state_32570__$1;
(statearr_32612_32688[(2)] = inst_32465);

(statearr_32612_32688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (28))){
var inst_32490 = (state_32570[(26)]);
var inst_32517 = (state_32570[(2)]);
var inst_32518 = cljs.core.not_empty.call(null,inst_32490);
var state_32570__$1 = (function (){var statearr_32613 = state_32570;
(statearr_32613[(29)] = inst_32517);

return statearr_32613;
})();
if(cljs.core.truth_(inst_32518)){
var statearr_32614_32689 = state_32570__$1;
(statearr_32614_32689[(1)] = (29));

} else {
var statearr_32615_32690 = state_32570__$1;
(statearr_32615_32690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (25))){
var inst_32488 = (state_32570[(23)]);
var inst_32504 = (state_32570[(2)]);
var inst_32505 = cljs.core.not_empty.call(null,inst_32488);
var state_32570__$1 = (function (){var statearr_32616 = state_32570;
(statearr_32616[(30)] = inst_32504);

return statearr_32616;
})();
if(cljs.core.truth_(inst_32505)){
var statearr_32617_32691 = state_32570__$1;
(statearr_32617_32691[(1)] = (26));

} else {
var statearr_32618_32692 = state_32570__$1;
(statearr_32618_32692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (34))){
var inst_32539 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
if(cljs.core.truth_(inst_32539)){
var statearr_32619_32693 = state_32570__$1;
(statearr_32619_32693[(1)] = (38));

} else {
var statearr_32620_32694 = state_32570__$1;
(statearr_32620_32694[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (17))){
var state_32570__$1 = state_32570;
var statearr_32621_32695 = state_32570__$1;
(statearr_32621_32695[(2)] = recompile_dependents);

(statearr_32621_32695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (3))){
var state_32570__$1 = state_32570;
var statearr_32622_32696 = state_32570__$1;
(statearr_32622_32696[(2)] = null);

(statearr_32622_32696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (12))){
var inst_32461 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32623_32697 = state_32570__$1;
(statearr_32623_32697[(2)] = inst_32461);

(statearr_32623_32697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (2))){
var inst_32423 = (state_32570[(13)]);
var inst_32430 = cljs.core.seq.call(null,inst_32423);
var inst_32431 = inst_32430;
var inst_32432 = null;
var inst_32433 = (0);
var inst_32434 = (0);
var state_32570__$1 = (function (){var statearr_32624 = state_32570;
(statearr_32624[(7)] = inst_32434);

(statearr_32624[(8)] = inst_32433);

(statearr_32624[(9)] = inst_32432);

(statearr_32624[(10)] = inst_32431);

return statearr_32624;
})();
var statearr_32625_32698 = state_32570__$1;
(statearr_32625_32698[(2)] = null);

(statearr_32625_32698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (23))){
var inst_32488 = (state_32570[(23)]);
var inst_32487 = (state_32570[(24)]);
var inst_32492 = (state_32570[(25)]);
var inst_32484 = (state_32570[(19)]);
var inst_32490 = (state_32570[(26)]);
var inst_32495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32497 = (function (){var all_files = inst_32484;
var res_SINGLEQUOTE_ = inst_32487;
var res = inst_32488;
var files_not_loaded = inst_32490;
var dependencies_that_loaded = inst_32492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32495,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32496){
var map__32626 = p__32496;
var map__32626__$1 = ((((!((map__32626 == null)))?((((map__32626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32626):map__32626);
var request_url = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32495,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32498 = cljs.core.reverse.call(null,inst_32492);
var inst_32499 = cljs.core.map.call(null,inst_32497,inst_32498);
var inst_32500 = cljs.core.pr_str.call(null,inst_32499);
var inst_32501 = figwheel.client.utils.log.call(null,inst_32500);
var state_32570__$1 = (function (){var statearr_32628 = state_32570;
(statearr_32628[(31)] = inst_32495);

return statearr_32628;
})();
var statearr_32629_32699 = state_32570__$1;
(statearr_32629_32699[(2)] = inst_32501);

(statearr_32629_32699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (35))){
var state_32570__$1 = state_32570;
var statearr_32630_32700 = state_32570__$1;
(statearr_32630_32700[(2)] = true);

(statearr_32630_32700[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (19))){
var inst_32474 = (state_32570[(12)]);
var inst_32480 = figwheel.client.file_reloading.expand_files.call(null,inst_32474);
var state_32570__$1 = state_32570;
var statearr_32631_32701 = state_32570__$1;
(statearr_32631_32701[(2)] = inst_32480);

(statearr_32631_32701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (11))){
var state_32570__$1 = state_32570;
var statearr_32632_32702 = state_32570__$1;
(statearr_32632_32702[(2)] = null);

(statearr_32632_32702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (9))){
var inst_32463 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32633_32703 = state_32570__$1;
(statearr_32633_32703[(2)] = inst_32463);

(statearr_32633_32703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (5))){
var inst_32434 = (state_32570[(7)]);
var inst_32433 = (state_32570[(8)]);
var inst_32436 = (inst_32434 < inst_32433);
var inst_32437 = inst_32436;
var state_32570__$1 = state_32570;
if(cljs.core.truth_(inst_32437)){
var statearr_32634_32704 = state_32570__$1;
(statearr_32634_32704[(1)] = (7));

} else {
var statearr_32635_32705 = state_32570__$1;
(statearr_32635_32705[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (14))){
var inst_32444 = (state_32570[(22)]);
var inst_32453 = cljs.core.first.call(null,inst_32444);
var inst_32454 = figwheel.client.file_reloading.eval_body.call(null,inst_32453,opts);
var inst_32455 = cljs.core.next.call(null,inst_32444);
var inst_32431 = inst_32455;
var inst_32432 = null;
var inst_32433 = (0);
var inst_32434 = (0);
var state_32570__$1 = (function (){var statearr_32636 = state_32570;
(statearr_32636[(7)] = inst_32434);

(statearr_32636[(8)] = inst_32433);

(statearr_32636[(32)] = inst_32454);

(statearr_32636[(9)] = inst_32432);

(statearr_32636[(10)] = inst_32431);

return statearr_32636;
})();
var statearr_32637_32706 = state_32570__$1;
(statearr_32637_32706[(2)] = null);

(statearr_32637_32706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (45))){
var state_32570__$1 = state_32570;
var statearr_32638_32707 = state_32570__$1;
(statearr_32638_32707[(2)] = null);

(statearr_32638_32707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (26))){
var inst_32488 = (state_32570[(23)]);
var inst_32487 = (state_32570[(24)]);
var inst_32492 = (state_32570[(25)]);
var inst_32484 = (state_32570[(19)]);
var inst_32490 = (state_32570[(26)]);
var inst_32507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32509 = (function (){var all_files = inst_32484;
var res_SINGLEQUOTE_ = inst_32487;
var res = inst_32488;
var files_not_loaded = inst_32490;
var dependencies_that_loaded = inst_32492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32507,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32508){
var map__32639 = p__32508;
var map__32639__$1 = ((((!((map__32639 == null)))?((((map__32639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32639):map__32639);
var namespace = cljs.core.get.call(null,map__32639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32507,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32510 = cljs.core.map.call(null,inst_32509,inst_32488);
var inst_32511 = cljs.core.pr_str.call(null,inst_32510);
var inst_32512 = figwheel.client.utils.log.call(null,inst_32511);
var inst_32513 = (function (){var all_files = inst_32484;
var res_SINGLEQUOTE_ = inst_32487;
var res = inst_32488;
var files_not_loaded = inst_32490;
var dependencies_that_loaded = inst_32492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32507,inst_32509,inst_32510,inst_32511,inst_32512,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32488,inst_32487,inst_32492,inst_32484,inst_32490,inst_32507,inst_32509,inst_32510,inst_32511,inst_32512,state_val_32571,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32514 = setTimeout(inst_32513,(10));
var state_32570__$1 = (function (){var statearr_32641 = state_32570;
(statearr_32641[(33)] = inst_32507);

(statearr_32641[(34)] = inst_32512);

return statearr_32641;
})();
var statearr_32642_32708 = state_32570__$1;
(statearr_32642_32708[(2)] = inst_32514);

(statearr_32642_32708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (16))){
var state_32570__$1 = state_32570;
var statearr_32643_32709 = state_32570__$1;
(statearr_32643_32709[(2)] = reload_dependents);

(statearr_32643_32709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (38))){
var inst_32524 = (state_32570[(16)]);
var inst_32541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32524);
var state_32570__$1 = state_32570;
var statearr_32644_32710 = state_32570__$1;
(statearr_32644_32710[(2)] = inst_32541);

(statearr_32644_32710[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (30))){
var state_32570__$1 = state_32570;
var statearr_32645_32711 = state_32570__$1;
(statearr_32645_32711[(2)] = null);

(statearr_32645_32711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (10))){
var inst_32444 = (state_32570[(22)]);
var inst_32446 = cljs.core.chunked_seq_QMARK_.call(null,inst_32444);
var state_32570__$1 = state_32570;
if(inst_32446){
var statearr_32646_32712 = state_32570__$1;
(statearr_32646_32712[(1)] = (13));

} else {
var statearr_32647_32713 = state_32570__$1;
(statearr_32647_32713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (18))){
var inst_32478 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
if(cljs.core.truth_(inst_32478)){
var statearr_32648_32714 = state_32570__$1;
(statearr_32648_32714[(1)] = (19));

} else {
var statearr_32649_32715 = state_32570__$1;
(statearr_32649_32715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (42))){
var state_32570__$1 = state_32570;
var statearr_32650_32716 = state_32570__$1;
(statearr_32650_32716[(2)] = null);

(statearr_32650_32716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (37))){
var inst_32536 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32651_32717 = state_32570__$1;
(statearr_32651_32717[(2)] = inst_32536);

(statearr_32651_32717[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (8))){
var inst_32444 = (state_32570[(22)]);
var inst_32431 = (state_32570[(10)]);
var inst_32444__$1 = cljs.core.seq.call(null,inst_32431);
var state_32570__$1 = (function (){var statearr_32652 = state_32570;
(statearr_32652[(22)] = inst_32444__$1);

return statearr_32652;
})();
if(inst_32444__$1){
var statearr_32653_32718 = state_32570__$1;
(statearr_32653_32718[(1)] = (10));

} else {
var statearr_32654_32719 = state_32570__$1;
(statearr_32654_32719[(1)] = (11));

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
});})(c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19966__auto__,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1 = (function (state_32570){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_32570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e32659){if((e32659 instanceof Object)){
var ex__19970__auto__ = e32659;
var statearr_32660_32720 = state_32570;
(statearr_32660_32720[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32721 = state_32570;
state_32570 = G__32721;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__ = function(state_32570){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1.call(this,state_32570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20080__auto__ = (function (){var statearr_32661 = f__20079__auto__.call(null);
(statearr_32661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,map__32416,map__32416__$1,opts,before_jsload,on_jsload,reload_dependents,map__32417,map__32417__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20078__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32724,link){
var map__32727 = p__32724;
var map__32727__$1 = ((((!((map__32727 == null)))?((((map__32727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32727):map__32727);
var file = cljs.core.get.call(null,map__32727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32727,map__32727__$1,file){
return (function (p1__32722_SHARP_,p2__32723_SHARP_){
if(cljs.core._EQ_.call(null,p1__32722_SHARP_,p2__32723_SHARP_)){
return p1__32722_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32727,map__32727__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32733){
var map__32734 = p__32733;
var map__32734__$1 = ((((!((map__32734 == null)))?((((map__32734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32734):map__32734);
var match_length = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32729_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32729_SHARP_);
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
var args32736 = [];
var len__17885__auto___32739 = arguments.length;
var i__17886__auto___32740 = (0);
while(true){
if((i__17886__auto___32740 < len__17885__auto___32739)){
args32736.push((arguments[i__17886__auto___32740]));

var G__32741 = (i__17886__auto___32740 + (1));
i__17886__auto___32740 = G__32741;
continue;
} else {
}
break;
}

var G__32738 = args32736.length;
switch (G__32738) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32736.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32743_SHARP_,p2__32744_SHARP_){
return cljs.core.assoc.call(null,p1__32743_SHARP_,cljs.core.get.call(null,p2__32744_SHARP_,key),p2__32744_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32745){
var map__32748 = p__32745;
var map__32748__$1 = ((((!((map__32748 == null)))?((((map__32748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32748):map__32748);
var f_data = map__32748__$1;
var file = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32750,files_msg){
var map__32757 = p__32750;
var map__32757__$1 = ((((!((map__32757 == null)))?((((map__32757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32757):map__32757);
var opts = map__32757__$1;
var on_cssload = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32759_32763 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32760_32764 = null;
var count__32761_32765 = (0);
var i__32762_32766 = (0);
while(true){
if((i__32762_32766 < count__32761_32765)){
var f_32767 = cljs.core._nth.call(null,chunk__32760_32764,i__32762_32766);
figwheel.client.file_reloading.reload_css_file.call(null,f_32767);

var G__32768 = seq__32759_32763;
var G__32769 = chunk__32760_32764;
var G__32770 = count__32761_32765;
var G__32771 = (i__32762_32766 + (1));
seq__32759_32763 = G__32768;
chunk__32760_32764 = G__32769;
count__32761_32765 = G__32770;
i__32762_32766 = G__32771;
continue;
} else {
var temp__4425__auto___32772 = cljs.core.seq.call(null,seq__32759_32763);
if(temp__4425__auto___32772){
var seq__32759_32773__$1 = temp__4425__auto___32772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32759_32773__$1)){
var c__17630__auto___32774 = cljs.core.chunk_first.call(null,seq__32759_32773__$1);
var G__32775 = cljs.core.chunk_rest.call(null,seq__32759_32773__$1);
var G__32776 = c__17630__auto___32774;
var G__32777 = cljs.core.count.call(null,c__17630__auto___32774);
var G__32778 = (0);
seq__32759_32763 = G__32775;
chunk__32760_32764 = G__32776;
count__32761_32765 = G__32777;
i__32762_32766 = G__32778;
continue;
} else {
var f_32779 = cljs.core.first.call(null,seq__32759_32773__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32779);

var G__32780 = cljs.core.next.call(null,seq__32759_32773__$1);
var G__32781 = null;
var G__32782 = (0);
var G__32783 = (0);
seq__32759_32763 = G__32780;
chunk__32760_32764 = G__32781;
count__32761_32765 = G__32782;
i__32762_32766 = G__32783;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32757,map__32757__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32757,map__32757__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map