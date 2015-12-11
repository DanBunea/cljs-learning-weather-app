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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22309_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22309_SHARP_));
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
var seq__22314 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22315 = null;
var count__22316 = (0);
var i__22317 = (0);
while(true){
if((i__22317 < count__22316)){
var n = cljs.core._nth.call(null,chunk__22315,i__22317);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22318 = seq__22314;
var G__22319 = chunk__22315;
var G__22320 = count__22316;
var G__22321 = (i__22317 + (1));
seq__22314 = G__22318;
chunk__22315 = G__22319;
count__22316 = G__22320;
i__22317 = G__22321;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22314);
if(temp__4425__auto__){
var seq__22314__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22314__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22314__$1);
var G__22322 = cljs.core.chunk_rest.call(null,seq__22314__$1);
var G__22323 = c__17629__auto__;
var G__22324 = cljs.core.count.call(null,c__17629__auto__);
var G__22325 = (0);
seq__22314 = G__22322;
chunk__22315 = G__22323;
count__22316 = G__22324;
i__22317 = G__22325;
continue;
} else {
var n = cljs.core.first.call(null,seq__22314__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22326 = cljs.core.next.call(null,seq__22314__$1);
var G__22327 = null;
var G__22328 = (0);
var G__22329 = (0);
seq__22314 = G__22326;
chunk__22315 = G__22327;
count__22316 = G__22328;
i__22317 = G__22329;
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

var seq__22368_22375 = cljs.core.seq.call(null,deps);
var chunk__22369_22376 = null;
var count__22370_22377 = (0);
var i__22371_22378 = (0);
while(true){
if((i__22371_22378 < count__22370_22377)){
var dep_22379 = cljs.core._nth.call(null,chunk__22369_22376,i__22371_22378);
topo_sort_helper_STAR_.call(null,dep_22379,(depth + (1)),state);

var G__22380 = seq__22368_22375;
var G__22381 = chunk__22369_22376;
var G__22382 = count__22370_22377;
var G__22383 = (i__22371_22378 + (1));
seq__22368_22375 = G__22380;
chunk__22369_22376 = G__22381;
count__22370_22377 = G__22382;
i__22371_22378 = G__22383;
continue;
} else {
var temp__4425__auto___22384 = cljs.core.seq.call(null,seq__22368_22375);
if(temp__4425__auto___22384){
var seq__22368_22385__$1 = temp__4425__auto___22384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22368_22385__$1)){
var c__17629__auto___22386 = cljs.core.chunk_first.call(null,seq__22368_22385__$1);
var G__22387 = cljs.core.chunk_rest.call(null,seq__22368_22385__$1);
var G__22388 = c__17629__auto___22386;
var G__22389 = cljs.core.count.call(null,c__17629__auto___22386);
var G__22390 = (0);
seq__22368_22375 = G__22387;
chunk__22369_22376 = G__22388;
count__22370_22377 = G__22389;
i__22371_22378 = G__22390;
continue;
} else {
var dep_22391 = cljs.core.first.call(null,seq__22368_22385__$1);
topo_sort_helper_STAR_.call(null,dep_22391,(depth + (1)),state);

var G__22392 = cljs.core.next.call(null,seq__22368_22385__$1);
var G__22393 = null;
var G__22394 = (0);
var G__22395 = (0);
seq__22368_22375 = G__22392;
chunk__22369_22376 = G__22393;
count__22370_22377 = G__22394;
i__22371_22378 = G__22395;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22372){
var vec__22374 = p__22372;
var x = cljs.core.nth.call(null,vec__22374,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22374,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22374,x,xs,get_deps__$1){
return (function (p1__22330_SHARP_){
return clojure.set.difference.call(null,p1__22330_SHARP_,x);
});})(vec__22374,x,xs,get_deps__$1))
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
var seq__22408 = cljs.core.seq.call(null,provides);
var chunk__22409 = null;
var count__22410 = (0);
var i__22411 = (0);
while(true){
if((i__22411 < count__22410)){
var prov = cljs.core._nth.call(null,chunk__22409,i__22411);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22412_22420 = cljs.core.seq.call(null,requires);
var chunk__22413_22421 = null;
var count__22414_22422 = (0);
var i__22415_22423 = (0);
while(true){
if((i__22415_22423 < count__22414_22422)){
var req_22424 = cljs.core._nth.call(null,chunk__22413_22421,i__22415_22423);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22424,prov);

var G__22425 = seq__22412_22420;
var G__22426 = chunk__22413_22421;
var G__22427 = count__22414_22422;
var G__22428 = (i__22415_22423 + (1));
seq__22412_22420 = G__22425;
chunk__22413_22421 = G__22426;
count__22414_22422 = G__22427;
i__22415_22423 = G__22428;
continue;
} else {
var temp__4425__auto___22429 = cljs.core.seq.call(null,seq__22412_22420);
if(temp__4425__auto___22429){
var seq__22412_22430__$1 = temp__4425__auto___22429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22412_22430__$1)){
var c__17629__auto___22431 = cljs.core.chunk_first.call(null,seq__22412_22430__$1);
var G__22432 = cljs.core.chunk_rest.call(null,seq__22412_22430__$1);
var G__22433 = c__17629__auto___22431;
var G__22434 = cljs.core.count.call(null,c__17629__auto___22431);
var G__22435 = (0);
seq__22412_22420 = G__22432;
chunk__22413_22421 = G__22433;
count__22414_22422 = G__22434;
i__22415_22423 = G__22435;
continue;
} else {
var req_22436 = cljs.core.first.call(null,seq__22412_22430__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22436,prov);

var G__22437 = cljs.core.next.call(null,seq__22412_22430__$1);
var G__22438 = null;
var G__22439 = (0);
var G__22440 = (0);
seq__22412_22420 = G__22437;
chunk__22413_22421 = G__22438;
count__22414_22422 = G__22439;
i__22415_22423 = G__22440;
continue;
}
} else {
}
}
break;
}

var G__22441 = seq__22408;
var G__22442 = chunk__22409;
var G__22443 = count__22410;
var G__22444 = (i__22411 + (1));
seq__22408 = G__22441;
chunk__22409 = G__22442;
count__22410 = G__22443;
i__22411 = G__22444;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22408);
if(temp__4425__auto__){
var seq__22408__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22408__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22408__$1);
var G__22445 = cljs.core.chunk_rest.call(null,seq__22408__$1);
var G__22446 = c__17629__auto__;
var G__22447 = cljs.core.count.call(null,c__17629__auto__);
var G__22448 = (0);
seq__22408 = G__22445;
chunk__22409 = G__22446;
count__22410 = G__22447;
i__22411 = G__22448;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22408__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22416_22449 = cljs.core.seq.call(null,requires);
var chunk__22417_22450 = null;
var count__22418_22451 = (0);
var i__22419_22452 = (0);
while(true){
if((i__22419_22452 < count__22418_22451)){
var req_22453 = cljs.core._nth.call(null,chunk__22417_22450,i__22419_22452);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22453,prov);

var G__22454 = seq__22416_22449;
var G__22455 = chunk__22417_22450;
var G__22456 = count__22418_22451;
var G__22457 = (i__22419_22452 + (1));
seq__22416_22449 = G__22454;
chunk__22417_22450 = G__22455;
count__22418_22451 = G__22456;
i__22419_22452 = G__22457;
continue;
} else {
var temp__4425__auto___22458__$1 = cljs.core.seq.call(null,seq__22416_22449);
if(temp__4425__auto___22458__$1){
var seq__22416_22459__$1 = temp__4425__auto___22458__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22416_22459__$1)){
var c__17629__auto___22460 = cljs.core.chunk_first.call(null,seq__22416_22459__$1);
var G__22461 = cljs.core.chunk_rest.call(null,seq__22416_22459__$1);
var G__22462 = c__17629__auto___22460;
var G__22463 = cljs.core.count.call(null,c__17629__auto___22460);
var G__22464 = (0);
seq__22416_22449 = G__22461;
chunk__22417_22450 = G__22462;
count__22418_22451 = G__22463;
i__22419_22452 = G__22464;
continue;
} else {
var req_22465 = cljs.core.first.call(null,seq__22416_22459__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22465,prov);

var G__22466 = cljs.core.next.call(null,seq__22416_22459__$1);
var G__22467 = null;
var G__22468 = (0);
var G__22469 = (0);
seq__22416_22449 = G__22466;
chunk__22417_22450 = G__22467;
count__22418_22451 = G__22468;
i__22419_22452 = G__22469;
continue;
}
} else {
}
}
break;
}

var G__22470 = cljs.core.next.call(null,seq__22408__$1);
var G__22471 = null;
var G__22472 = (0);
var G__22473 = (0);
seq__22408 = G__22470;
chunk__22409 = G__22471;
count__22410 = G__22472;
i__22411 = G__22473;
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
var seq__22478_22482 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22479_22483 = null;
var count__22480_22484 = (0);
var i__22481_22485 = (0);
while(true){
if((i__22481_22485 < count__22480_22484)){
var ns_22486 = cljs.core._nth.call(null,chunk__22479_22483,i__22481_22485);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22486);

var G__22487 = seq__22478_22482;
var G__22488 = chunk__22479_22483;
var G__22489 = count__22480_22484;
var G__22490 = (i__22481_22485 + (1));
seq__22478_22482 = G__22487;
chunk__22479_22483 = G__22488;
count__22480_22484 = G__22489;
i__22481_22485 = G__22490;
continue;
} else {
var temp__4425__auto___22491 = cljs.core.seq.call(null,seq__22478_22482);
if(temp__4425__auto___22491){
var seq__22478_22492__$1 = temp__4425__auto___22491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22478_22492__$1)){
var c__17629__auto___22493 = cljs.core.chunk_first.call(null,seq__22478_22492__$1);
var G__22494 = cljs.core.chunk_rest.call(null,seq__22478_22492__$1);
var G__22495 = c__17629__auto___22493;
var G__22496 = cljs.core.count.call(null,c__17629__auto___22493);
var G__22497 = (0);
seq__22478_22482 = G__22494;
chunk__22479_22483 = G__22495;
count__22480_22484 = G__22496;
i__22481_22485 = G__22497;
continue;
} else {
var ns_22498 = cljs.core.first.call(null,seq__22478_22492__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22498);

var G__22499 = cljs.core.next.call(null,seq__22478_22492__$1);
var G__22500 = null;
var G__22501 = (0);
var G__22502 = (0);
seq__22478_22482 = G__22499;
chunk__22479_22483 = G__22500;
count__22480_22484 = G__22501;
i__22481_22485 = G__22502;
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
var G__22503__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22504__i = 0, G__22504__a = new Array(arguments.length -  0);
while (G__22504__i < G__22504__a.length) {G__22504__a[G__22504__i] = arguments[G__22504__i + 0]; ++G__22504__i;}
  args = new cljs.core.IndexedSeq(G__22504__a,0);
} 
return G__22503__delegate.call(this,args);};
G__22503.cljs$lang$maxFixedArity = 0;
G__22503.cljs$lang$applyTo = (function (arglist__22505){
var args = cljs.core.seq(arglist__22505);
return G__22503__delegate(args);
});
G__22503.cljs$core$IFn$_invoke$arity$variadic = G__22503__delegate;
return G__22503;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22507 = cljs.core._EQ_;
var expr__22508 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22507.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22508))){
var path_parts = ((function (pred__22507,expr__22508){
return (function (p1__22506_SHARP_){
return clojure.string.split.call(null,p1__22506_SHARP_,/[\/\\]/);
});})(pred__22507,expr__22508))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22507,expr__22508){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22510){if((e22510 instanceof Error)){
var e = e22510;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22510;

}
}})());
});
;})(path_parts,sep,root,pred__22507,expr__22508))
} else {
if(cljs.core.truth_(pred__22507.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22508))){
return ((function (pred__22507,expr__22508){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22507,expr__22508){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22507,expr__22508))
);

return deferred.addErrback(((function (deferred,pred__22507,expr__22508){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22507,expr__22508))
);
});
;})(pred__22507,expr__22508))
} else {
return ((function (pred__22507,expr__22508){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22507,expr__22508))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22511,callback){
var map__22514 = p__22511;
var map__22514__$1 = ((((!((map__22514 == null)))?((((map__22514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22514):map__22514);
var file_msg = map__22514__$1;
var request_url = cljs.core.get.call(null,map__22514__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22514,map__22514__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22514,map__22514__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__){
return (function (state_22538){
var state_val_22539 = (state_22538[(1)]);
if((state_val_22539 === (7))){
var inst_22534 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22540_22560 = state_22538__$1;
(statearr_22540_22560[(2)] = inst_22534);

(statearr_22540_22560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (1))){
var state_22538__$1 = state_22538;
var statearr_22541_22561 = state_22538__$1;
(statearr_22541_22561[(2)] = null);

(statearr_22541_22561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (4))){
var inst_22518 = (state_22538[(7)]);
var inst_22518__$1 = (state_22538[(2)]);
var state_22538__$1 = (function (){var statearr_22542 = state_22538;
(statearr_22542[(7)] = inst_22518__$1);

return statearr_22542;
})();
if(cljs.core.truth_(inst_22518__$1)){
var statearr_22543_22562 = state_22538__$1;
(statearr_22543_22562[(1)] = (5));

} else {
var statearr_22544_22563 = state_22538__$1;
(statearr_22544_22563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (6))){
var state_22538__$1 = state_22538;
var statearr_22545_22564 = state_22538__$1;
(statearr_22545_22564[(2)] = null);

(statearr_22545_22564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (3))){
var inst_22536 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22538__$1,inst_22536);
} else {
if((state_val_22539 === (2))){
var state_22538__$1 = state_22538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22538__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22539 === (11))){
var inst_22530 = (state_22538[(2)]);
var state_22538__$1 = (function (){var statearr_22546 = state_22538;
(statearr_22546[(8)] = inst_22530);

return statearr_22546;
})();
var statearr_22547_22565 = state_22538__$1;
(statearr_22547_22565[(2)] = null);

(statearr_22547_22565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (9))){
var inst_22524 = (state_22538[(9)]);
var inst_22522 = (state_22538[(10)]);
var inst_22526 = inst_22524.call(null,inst_22522);
var state_22538__$1 = state_22538;
var statearr_22548_22566 = state_22538__$1;
(statearr_22548_22566[(2)] = inst_22526);

(statearr_22548_22566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (5))){
var inst_22518 = (state_22538[(7)]);
var inst_22520 = figwheel.client.file_reloading.blocking_load.call(null,inst_22518);
var state_22538__$1 = state_22538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22538__$1,(8),inst_22520);
} else {
if((state_val_22539 === (10))){
var inst_22522 = (state_22538[(10)]);
var inst_22528 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22522);
var state_22538__$1 = state_22538;
var statearr_22549_22567 = state_22538__$1;
(statearr_22549_22567[(2)] = inst_22528);

(statearr_22549_22567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (8))){
var inst_22524 = (state_22538[(9)]);
var inst_22518 = (state_22538[(7)]);
var inst_22522 = (state_22538[(2)]);
var inst_22523 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22524__$1 = cljs.core.get.call(null,inst_22523,inst_22518);
var state_22538__$1 = (function (){var statearr_22550 = state_22538;
(statearr_22550[(9)] = inst_22524__$1);

(statearr_22550[(10)] = inst_22522);

return statearr_22550;
})();
if(cljs.core.truth_(inst_22524__$1)){
var statearr_22551_22568 = state_22538__$1;
(statearr_22551_22568[(1)] = (9));

} else {
var statearr_22552_22569 = state_22538__$1;
(statearr_22552_22569[(1)] = (10));

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
});})(c__19415__auto__))
;
return ((function (switch__19303__auto__,c__19415__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19304__auto__ = null;
var figwheel$client$file_reloading$state_machine__19304__auto____0 = (function (){
var statearr_22556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22556[(0)] = figwheel$client$file_reloading$state_machine__19304__auto__);

(statearr_22556[(1)] = (1));

return statearr_22556;
});
var figwheel$client$file_reloading$state_machine__19304__auto____1 = (function (state_22538){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_22538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e22557){if((e22557 instanceof Object)){
var ex__19307__auto__ = e22557;
var statearr_22558_22570 = state_22538;
(statearr_22558_22570[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22571 = state_22538;
state_22538 = G__22571;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19304__auto__ = function(state_22538){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19304__auto____1.call(this,state_22538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19304__auto____0;
figwheel$client$file_reloading$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19304__auto____1;
return figwheel$client$file_reloading$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__))
})();
var state__19417__auto__ = (function (){var statearr_22559 = f__19416__auto__.call(null);
(statearr_22559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_22559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__))
);

return c__19415__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22572,callback){
var map__22575 = p__22572;
var map__22575__$1 = ((((!((map__22575 == null)))?((((map__22575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22575):map__22575);
var file_msg = map__22575__$1;
var namespace = cljs.core.get.call(null,map__22575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22575,map__22575__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22575,map__22575__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22577){
var map__22580 = p__22577;
var map__22580__$1 = ((((!((map__22580 == null)))?((((map__22580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22580):map__22580);
var file_msg = map__22580__$1;
var namespace = cljs.core.get.call(null,map__22580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22582,callback){
var map__22585 = p__22582;
var map__22585__$1 = ((((!((map__22585 == null)))?((((map__22585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22585):map__22585);
var file_msg = map__22585__$1;
var request_url = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19415__auto___22673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___22673,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___22673,out){
return (function (state_22655){
var state_val_22656 = (state_22655[(1)]);
if((state_val_22656 === (1))){
var inst_22633 = cljs.core.nth.call(null,files,(0),null);
var inst_22634 = cljs.core.nthnext.call(null,files,(1));
var inst_22635 = files;
var state_22655__$1 = (function (){var statearr_22657 = state_22655;
(statearr_22657[(7)] = inst_22634);

(statearr_22657[(8)] = inst_22635);

(statearr_22657[(9)] = inst_22633);

return statearr_22657;
})();
var statearr_22658_22674 = state_22655__$1;
(statearr_22658_22674[(2)] = null);

(statearr_22658_22674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (2))){
var inst_22638 = (state_22655[(10)]);
var inst_22635 = (state_22655[(8)]);
var inst_22638__$1 = cljs.core.nth.call(null,inst_22635,(0),null);
var inst_22639 = cljs.core.nthnext.call(null,inst_22635,(1));
var inst_22640 = (inst_22638__$1 == null);
var inst_22641 = cljs.core.not.call(null,inst_22640);
var state_22655__$1 = (function (){var statearr_22659 = state_22655;
(statearr_22659[(10)] = inst_22638__$1);

(statearr_22659[(11)] = inst_22639);

return statearr_22659;
})();
if(inst_22641){
var statearr_22660_22675 = state_22655__$1;
(statearr_22660_22675[(1)] = (4));

} else {
var statearr_22661_22676 = state_22655__$1;
(statearr_22661_22676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (3))){
var inst_22653 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22655__$1,inst_22653);
} else {
if((state_val_22656 === (4))){
var inst_22638 = (state_22655[(10)]);
var inst_22643 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22638);
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22655__$1,(7),inst_22643);
} else {
if((state_val_22656 === (5))){
var inst_22649 = cljs.core.async.close_BANG_.call(null,out);
var state_22655__$1 = state_22655;
var statearr_22662_22677 = state_22655__$1;
(statearr_22662_22677[(2)] = inst_22649);

(statearr_22662_22677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (6))){
var inst_22651 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
var statearr_22663_22678 = state_22655__$1;
(statearr_22663_22678[(2)] = inst_22651);

(statearr_22663_22678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (7))){
var inst_22639 = (state_22655[(11)]);
var inst_22645 = (state_22655[(2)]);
var inst_22646 = cljs.core.async.put_BANG_.call(null,out,inst_22645);
var inst_22635 = inst_22639;
var state_22655__$1 = (function (){var statearr_22664 = state_22655;
(statearr_22664[(12)] = inst_22646);

(statearr_22664[(8)] = inst_22635);

return statearr_22664;
})();
var statearr_22665_22679 = state_22655__$1;
(statearr_22665_22679[(2)] = null);

(statearr_22665_22679[(1)] = (2));


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
});})(c__19415__auto___22673,out))
;
return ((function (switch__19303__auto__,c__19415__auto___22673,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto____0 = (function (){
var statearr_22669 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22669[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto__);

(statearr_22669[(1)] = (1));

return statearr_22669;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto____1 = (function (state_22655){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_22655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e22670){if((e22670 instanceof Object)){
var ex__19307__auto__ = e22670;
var statearr_22671_22680 = state_22655;
(statearr_22671_22680[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22681 = state_22655;
state_22655 = G__22681;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto__ = function(state_22655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto____1.call(this,state_22655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___22673,out))
})();
var state__19417__auto__ = (function (){var statearr_22672 = f__19416__auto__.call(null);
(statearr_22672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___22673);

return statearr_22672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___22673,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22682,opts){
var map__22686 = p__22682;
var map__22686__$1 = ((((!((map__22686 == null)))?((((map__22686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22686):map__22686);
var eval_body__$1 = cljs.core.get.call(null,map__22686__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22686__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e22688){var e = e22688;
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
return (function (p1__22689_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22689_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__22694){
var vec__22695 = p__22694;
var k = cljs.core.nth.call(null,vec__22695,(0),null);
var v = cljs.core.nth.call(null,vec__22695,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22696){
var vec__22697 = p__22696;
var k = cljs.core.nth.call(null,vec__22697,(0),null);
var v = cljs.core.nth.call(null,vec__22697,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22701,p__22702){
var map__22949 = p__22701;
var map__22949__$1 = ((((!((map__22949 == null)))?((((map__22949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22949):map__22949);
var opts = map__22949__$1;
var before_jsload = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22950 = p__22702;
var map__22950__$1 = ((((!((map__22950 == null)))?((((map__22950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22950):map__22950);
var msg = map__22950__$1;
var files = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23103){
var state_val_23104 = (state_23103[(1)]);
if((state_val_23104 === (7))){
var inst_22965 = (state_23103[(7)]);
var inst_22967 = (state_23103[(8)]);
var inst_22964 = (state_23103[(9)]);
var inst_22966 = (state_23103[(10)]);
var inst_22972 = cljs.core._nth.call(null,inst_22965,inst_22967);
var inst_22973 = figwheel.client.file_reloading.eval_body.call(null,inst_22972,opts);
var inst_22974 = (inst_22967 + (1));
var tmp23105 = inst_22965;
var tmp23106 = inst_22964;
var tmp23107 = inst_22966;
var inst_22964__$1 = tmp23106;
var inst_22965__$1 = tmp23105;
var inst_22966__$1 = tmp23107;
var inst_22967__$1 = inst_22974;
var state_23103__$1 = (function (){var statearr_23108 = state_23103;
(statearr_23108[(11)] = inst_22973);

(statearr_23108[(7)] = inst_22965__$1);

(statearr_23108[(8)] = inst_22967__$1);

(statearr_23108[(9)] = inst_22964__$1);

(statearr_23108[(10)] = inst_22966__$1);

return statearr_23108;
})();
var statearr_23109_23195 = state_23103__$1;
(statearr_23109_23195[(2)] = null);

(statearr_23109_23195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (20))){
var inst_23007 = (state_23103[(12)]);
var inst_23015 = figwheel.client.file_reloading.sort_files.call(null,inst_23007);
var state_23103__$1 = state_23103;
var statearr_23110_23196 = state_23103__$1;
(statearr_23110_23196[(2)] = inst_23015);

(statearr_23110_23196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (27))){
var state_23103__$1 = state_23103;
var statearr_23111_23197 = state_23103__$1;
(statearr_23111_23197[(2)] = null);

(statearr_23111_23197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (1))){
var inst_22956 = (state_23103[(13)]);
var inst_22953 = before_jsload.call(null,files);
var inst_22954 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22955 = (function (){return ((function (inst_22956,inst_22953,inst_22954,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22698_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22698_SHARP_);
});
;})(inst_22956,inst_22953,inst_22954,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22956__$1 = cljs.core.filter.call(null,inst_22955,files);
var inst_22957 = cljs.core.not_empty.call(null,inst_22956__$1);
var state_23103__$1 = (function (){var statearr_23112 = state_23103;
(statearr_23112[(14)] = inst_22954);

(statearr_23112[(13)] = inst_22956__$1);

(statearr_23112[(15)] = inst_22953);

return statearr_23112;
})();
if(cljs.core.truth_(inst_22957)){
var statearr_23113_23198 = state_23103__$1;
(statearr_23113_23198[(1)] = (2));

} else {
var statearr_23114_23199 = state_23103__$1;
(statearr_23114_23199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (24))){
var state_23103__$1 = state_23103;
var statearr_23115_23200 = state_23103__$1;
(statearr_23115_23200[(2)] = null);

(statearr_23115_23200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (39))){
var inst_23057 = (state_23103[(16)]);
var state_23103__$1 = state_23103;
var statearr_23116_23201 = state_23103__$1;
(statearr_23116_23201[(2)] = inst_23057);

(statearr_23116_23201[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (46))){
var inst_23098 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
var statearr_23117_23202 = state_23103__$1;
(statearr_23117_23202[(2)] = inst_23098);

(statearr_23117_23202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (4))){
var inst_23001 = (state_23103[(2)]);
var inst_23002 = cljs.core.List.EMPTY;
var inst_23003 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23002);
var inst_23004 = (function (){return ((function (inst_23001,inst_23002,inst_23003,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22699_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22699_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22699_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23001,inst_23002,inst_23003,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23005 = cljs.core.filter.call(null,inst_23004,files);
var inst_23006 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23007 = cljs.core.concat.call(null,inst_23005,inst_23006);
var state_23103__$1 = (function (){var statearr_23118 = state_23103;
(statearr_23118[(12)] = inst_23007);

(statearr_23118[(17)] = inst_23001);

(statearr_23118[(18)] = inst_23003);

return statearr_23118;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23119_23203 = state_23103__$1;
(statearr_23119_23203[(1)] = (16));

} else {
var statearr_23120_23204 = state_23103__$1;
(statearr_23120_23204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (15))){
var inst_22991 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
var statearr_23121_23205 = state_23103__$1;
(statearr_23121_23205[(2)] = inst_22991);

(statearr_23121_23205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (21))){
var inst_23017 = (state_23103[(19)]);
var inst_23017__$1 = (state_23103[(2)]);
var inst_23018 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23017__$1);
var state_23103__$1 = (function (){var statearr_23122 = state_23103;
(statearr_23122[(19)] = inst_23017__$1);

return statearr_23122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23103__$1,(22),inst_23018);
} else {
if((state_val_23104 === (31))){
var inst_23101 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23103__$1,inst_23101);
} else {
if((state_val_23104 === (32))){
var inst_23057 = (state_23103[(16)]);
var inst_23062 = inst_23057.cljs$lang$protocol_mask$partition0$;
var inst_23063 = (inst_23062 & (64));
var inst_23064 = inst_23057.cljs$core$ISeq$;
var inst_23065 = (inst_23063) || (inst_23064);
var state_23103__$1 = state_23103;
if(cljs.core.truth_(inst_23065)){
var statearr_23123_23206 = state_23103__$1;
(statearr_23123_23206[(1)] = (35));

} else {
var statearr_23124_23207 = state_23103__$1;
(statearr_23124_23207[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (40))){
var inst_23078 = (state_23103[(20)]);
var inst_23077 = (state_23103[(2)]);
var inst_23078__$1 = cljs.core.get.call(null,inst_23077,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23079 = cljs.core.get.call(null,inst_23077,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23080 = cljs.core.not_empty.call(null,inst_23078__$1);
var state_23103__$1 = (function (){var statearr_23125 = state_23103;
(statearr_23125[(20)] = inst_23078__$1);

(statearr_23125[(21)] = inst_23079);

return statearr_23125;
})();
if(cljs.core.truth_(inst_23080)){
var statearr_23126_23208 = state_23103__$1;
(statearr_23126_23208[(1)] = (41));

} else {
var statearr_23127_23209 = state_23103__$1;
(statearr_23127_23209[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (33))){
var state_23103__$1 = state_23103;
var statearr_23128_23210 = state_23103__$1;
(statearr_23128_23210[(2)] = false);

(statearr_23128_23210[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (13))){
var inst_22977 = (state_23103[(22)]);
var inst_22981 = cljs.core.chunk_first.call(null,inst_22977);
var inst_22982 = cljs.core.chunk_rest.call(null,inst_22977);
var inst_22983 = cljs.core.count.call(null,inst_22981);
var inst_22964 = inst_22982;
var inst_22965 = inst_22981;
var inst_22966 = inst_22983;
var inst_22967 = (0);
var state_23103__$1 = (function (){var statearr_23129 = state_23103;
(statearr_23129[(7)] = inst_22965);

(statearr_23129[(8)] = inst_22967);

(statearr_23129[(9)] = inst_22964);

(statearr_23129[(10)] = inst_22966);

return statearr_23129;
})();
var statearr_23130_23211 = state_23103__$1;
(statearr_23130_23211[(2)] = null);

(statearr_23130_23211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (22))){
var inst_23017 = (state_23103[(19)]);
var inst_23020 = (state_23103[(23)]);
var inst_23025 = (state_23103[(24)]);
var inst_23021 = (state_23103[(25)]);
var inst_23020__$1 = (state_23103[(2)]);
var inst_23021__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23020__$1);
var inst_23022 = (function (){var all_files = inst_23017;
var res_SINGLEQUOTE_ = inst_23020__$1;
var res = inst_23021__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23017,inst_23020,inst_23025,inst_23021,inst_23020__$1,inst_23021__$1,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22700_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22700_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23017,inst_23020,inst_23025,inst_23021,inst_23020__$1,inst_23021__$1,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23023 = cljs.core.filter.call(null,inst_23022,inst_23020__$1);
var inst_23024 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23025__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23024);
var inst_23026 = cljs.core.not_empty.call(null,inst_23025__$1);
var state_23103__$1 = (function (){var statearr_23131 = state_23103;
(statearr_23131[(26)] = inst_23023);

(statearr_23131[(23)] = inst_23020__$1);

(statearr_23131[(24)] = inst_23025__$1);

(statearr_23131[(25)] = inst_23021__$1);

return statearr_23131;
})();
if(cljs.core.truth_(inst_23026)){
var statearr_23132_23212 = state_23103__$1;
(statearr_23132_23212[(1)] = (23));

} else {
var statearr_23133_23213 = state_23103__$1;
(statearr_23133_23213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (36))){
var state_23103__$1 = state_23103;
var statearr_23134_23214 = state_23103__$1;
(statearr_23134_23214[(2)] = false);

(statearr_23134_23214[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (41))){
var inst_23078 = (state_23103[(20)]);
var inst_23082 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23083 = cljs.core.map.call(null,inst_23082,inst_23078);
var inst_23084 = cljs.core.pr_str.call(null,inst_23083);
var inst_23085 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23084)].join('');
var inst_23086 = figwheel.client.utils.log.call(null,inst_23085);
var state_23103__$1 = state_23103;
var statearr_23135_23215 = state_23103__$1;
(statearr_23135_23215[(2)] = inst_23086);

(statearr_23135_23215[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (43))){
var inst_23079 = (state_23103[(21)]);
var inst_23089 = (state_23103[(2)]);
var inst_23090 = cljs.core.not_empty.call(null,inst_23079);
var state_23103__$1 = (function (){var statearr_23136 = state_23103;
(statearr_23136[(27)] = inst_23089);

return statearr_23136;
})();
if(cljs.core.truth_(inst_23090)){
var statearr_23137_23216 = state_23103__$1;
(statearr_23137_23216[(1)] = (44));

} else {
var statearr_23138_23217 = state_23103__$1;
(statearr_23138_23217[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (29))){
var inst_23057 = (state_23103[(16)]);
var inst_23017 = (state_23103[(19)]);
var inst_23023 = (state_23103[(26)]);
var inst_23020 = (state_23103[(23)]);
var inst_23025 = (state_23103[(24)]);
var inst_23021 = (state_23103[(25)]);
var inst_23053 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23056 = (function (){var all_files = inst_23017;
var res_SINGLEQUOTE_ = inst_23020;
var res = inst_23021;
var files_not_loaded = inst_23023;
var dependencies_that_loaded = inst_23025;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23057,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23053,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23055){
var map__23139 = p__23055;
var map__23139__$1 = ((((!((map__23139 == null)))?((((map__23139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23139):map__23139);
var namespace = cljs.core.get.call(null,map__23139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23057,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23053,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23057__$1 = cljs.core.group_by.call(null,inst_23056,inst_23023);
var inst_23059 = (inst_23057__$1 == null);
var inst_23060 = cljs.core.not.call(null,inst_23059);
var state_23103__$1 = (function (){var statearr_23141 = state_23103;
(statearr_23141[(16)] = inst_23057__$1);

(statearr_23141[(28)] = inst_23053);

return statearr_23141;
})();
if(inst_23060){
var statearr_23142_23218 = state_23103__$1;
(statearr_23142_23218[(1)] = (32));

} else {
var statearr_23143_23219 = state_23103__$1;
(statearr_23143_23219[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (44))){
var inst_23079 = (state_23103[(21)]);
var inst_23092 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23079);
var inst_23093 = cljs.core.pr_str.call(null,inst_23092);
var inst_23094 = [cljs.core.str("not required: "),cljs.core.str(inst_23093)].join('');
var inst_23095 = figwheel.client.utils.log.call(null,inst_23094);
var state_23103__$1 = state_23103;
var statearr_23144_23220 = state_23103__$1;
(statearr_23144_23220[(2)] = inst_23095);

(statearr_23144_23220[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (6))){
var inst_22998 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
var statearr_23145_23221 = state_23103__$1;
(statearr_23145_23221[(2)] = inst_22998);

(statearr_23145_23221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (28))){
var inst_23023 = (state_23103[(26)]);
var inst_23050 = (state_23103[(2)]);
var inst_23051 = cljs.core.not_empty.call(null,inst_23023);
var state_23103__$1 = (function (){var statearr_23146 = state_23103;
(statearr_23146[(29)] = inst_23050);

return statearr_23146;
})();
if(cljs.core.truth_(inst_23051)){
var statearr_23147_23222 = state_23103__$1;
(statearr_23147_23222[(1)] = (29));

} else {
var statearr_23148_23223 = state_23103__$1;
(statearr_23148_23223[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (25))){
var inst_23021 = (state_23103[(25)]);
var inst_23037 = (state_23103[(2)]);
var inst_23038 = cljs.core.not_empty.call(null,inst_23021);
var state_23103__$1 = (function (){var statearr_23149 = state_23103;
(statearr_23149[(30)] = inst_23037);

return statearr_23149;
})();
if(cljs.core.truth_(inst_23038)){
var statearr_23150_23224 = state_23103__$1;
(statearr_23150_23224[(1)] = (26));

} else {
var statearr_23151_23225 = state_23103__$1;
(statearr_23151_23225[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (34))){
var inst_23072 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
if(cljs.core.truth_(inst_23072)){
var statearr_23152_23226 = state_23103__$1;
(statearr_23152_23226[(1)] = (38));

} else {
var statearr_23153_23227 = state_23103__$1;
(statearr_23153_23227[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (17))){
var state_23103__$1 = state_23103;
var statearr_23154_23228 = state_23103__$1;
(statearr_23154_23228[(2)] = recompile_dependents);

(statearr_23154_23228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (3))){
var state_23103__$1 = state_23103;
var statearr_23155_23229 = state_23103__$1;
(statearr_23155_23229[(2)] = null);

(statearr_23155_23229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (12))){
var inst_22994 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
var statearr_23156_23230 = state_23103__$1;
(statearr_23156_23230[(2)] = inst_22994);

(statearr_23156_23230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (2))){
var inst_22956 = (state_23103[(13)]);
var inst_22963 = cljs.core.seq.call(null,inst_22956);
var inst_22964 = inst_22963;
var inst_22965 = null;
var inst_22966 = (0);
var inst_22967 = (0);
var state_23103__$1 = (function (){var statearr_23157 = state_23103;
(statearr_23157[(7)] = inst_22965);

(statearr_23157[(8)] = inst_22967);

(statearr_23157[(9)] = inst_22964);

(statearr_23157[(10)] = inst_22966);

return statearr_23157;
})();
var statearr_23158_23231 = state_23103__$1;
(statearr_23158_23231[(2)] = null);

(statearr_23158_23231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (23))){
var inst_23017 = (state_23103[(19)]);
var inst_23023 = (state_23103[(26)]);
var inst_23020 = (state_23103[(23)]);
var inst_23025 = (state_23103[(24)]);
var inst_23021 = (state_23103[(25)]);
var inst_23028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23030 = (function (){var all_files = inst_23017;
var res_SINGLEQUOTE_ = inst_23020;
var res = inst_23021;
var files_not_loaded = inst_23023;
var dependencies_that_loaded = inst_23025;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23028,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23029){
var map__23159 = p__23029;
var map__23159__$1 = ((((!((map__23159 == null)))?((((map__23159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23159):map__23159);
var request_url = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23028,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23031 = cljs.core.reverse.call(null,inst_23025);
var inst_23032 = cljs.core.map.call(null,inst_23030,inst_23031);
var inst_23033 = cljs.core.pr_str.call(null,inst_23032);
var inst_23034 = figwheel.client.utils.log.call(null,inst_23033);
var state_23103__$1 = (function (){var statearr_23161 = state_23103;
(statearr_23161[(31)] = inst_23028);

return statearr_23161;
})();
var statearr_23162_23232 = state_23103__$1;
(statearr_23162_23232[(2)] = inst_23034);

(statearr_23162_23232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (35))){
var state_23103__$1 = state_23103;
var statearr_23163_23233 = state_23103__$1;
(statearr_23163_23233[(2)] = true);

(statearr_23163_23233[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (19))){
var inst_23007 = (state_23103[(12)]);
var inst_23013 = figwheel.client.file_reloading.expand_files.call(null,inst_23007);
var state_23103__$1 = state_23103;
var statearr_23164_23234 = state_23103__$1;
(statearr_23164_23234[(2)] = inst_23013);

(statearr_23164_23234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (11))){
var state_23103__$1 = state_23103;
var statearr_23165_23235 = state_23103__$1;
(statearr_23165_23235[(2)] = null);

(statearr_23165_23235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (9))){
var inst_22996 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
var statearr_23166_23236 = state_23103__$1;
(statearr_23166_23236[(2)] = inst_22996);

(statearr_23166_23236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (5))){
var inst_22967 = (state_23103[(8)]);
var inst_22966 = (state_23103[(10)]);
var inst_22969 = (inst_22967 < inst_22966);
var inst_22970 = inst_22969;
var state_23103__$1 = state_23103;
if(cljs.core.truth_(inst_22970)){
var statearr_23167_23237 = state_23103__$1;
(statearr_23167_23237[(1)] = (7));

} else {
var statearr_23168_23238 = state_23103__$1;
(statearr_23168_23238[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (14))){
var inst_22977 = (state_23103[(22)]);
var inst_22986 = cljs.core.first.call(null,inst_22977);
var inst_22987 = figwheel.client.file_reloading.eval_body.call(null,inst_22986,opts);
var inst_22988 = cljs.core.next.call(null,inst_22977);
var inst_22964 = inst_22988;
var inst_22965 = null;
var inst_22966 = (0);
var inst_22967 = (0);
var state_23103__$1 = (function (){var statearr_23169 = state_23103;
(statearr_23169[(7)] = inst_22965);

(statearr_23169[(32)] = inst_22987);

(statearr_23169[(8)] = inst_22967);

(statearr_23169[(9)] = inst_22964);

(statearr_23169[(10)] = inst_22966);

return statearr_23169;
})();
var statearr_23170_23239 = state_23103__$1;
(statearr_23170_23239[(2)] = null);

(statearr_23170_23239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (45))){
var state_23103__$1 = state_23103;
var statearr_23171_23240 = state_23103__$1;
(statearr_23171_23240[(2)] = null);

(statearr_23171_23240[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (26))){
var inst_23017 = (state_23103[(19)]);
var inst_23023 = (state_23103[(26)]);
var inst_23020 = (state_23103[(23)]);
var inst_23025 = (state_23103[(24)]);
var inst_23021 = (state_23103[(25)]);
var inst_23040 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23042 = (function (){var all_files = inst_23017;
var res_SINGLEQUOTE_ = inst_23020;
var res = inst_23021;
var files_not_loaded = inst_23023;
var dependencies_that_loaded = inst_23025;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23040,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23041){
var map__23172 = p__23041;
var map__23172__$1 = ((((!((map__23172 == null)))?((((map__23172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23172):map__23172);
var namespace = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23040,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23043 = cljs.core.map.call(null,inst_23042,inst_23021);
var inst_23044 = cljs.core.pr_str.call(null,inst_23043);
var inst_23045 = figwheel.client.utils.log.call(null,inst_23044);
var inst_23046 = (function (){var all_files = inst_23017;
var res_SINGLEQUOTE_ = inst_23020;
var res = inst_23021;
var files_not_loaded = inst_23023;
var dependencies_that_loaded = inst_23025;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23040,inst_23042,inst_23043,inst_23044,inst_23045,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23017,inst_23023,inst_23020,inst_23025,inst_23021,inst_23040,inst_23042,inst_23043,inst_23044,inst_23045,state_val_23104,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23047 = setTimeout(inst_23046,(10));
var state_23103__$1 = (function (){var statearr_23174 = state_23103;
(statearr_23174[(33)] = inst_23040);

(statearr_23174[(34)] = inst_23045);

return statearr_23174;
})();
var statearr_23175_23241 = state_23103__$1;
(statearr_23175_23241[(2)] = inst_23047);

(statearr_23175_23241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (16))){
var state_23103__$1 = state_23103;
var statearr_23176_23242 = state_23103__$1;
(statearr_23176_23242[(2)] = reload_dependents);

(statearr_23176_23242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (38))){
var inst_23057 = (state_23103[(16)]);
var inst_23074 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23057);
var state_23103__$1 = state_23103;
var statearr_23177_23243 = state_23103__$1;
(statearr_23177_23243[(2)] = inst_23074);

(statearr_23177_23243[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (30))){
var state_23103__$1 = state_23103;
var statearr_23178_23244 = state_23103__$1;
(statearr_23178_23244[(2)] = null);

(statearr_23178_23244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (10))){
var inst_22977 = (state_23103[(22)]);
var inst_22979 = cljs.core.chunked_seq_QMARK_.call(null,inst_22977);
var state_23103__$1 = state_23103;
if(inst_22979){
var statearr_23179_23245 = state_23103__$1;
(statearr_23179_23245[(1)] = (13));

} else {
var statearr_23180_23246 = state_23103__$1;
(statearr_23180_23246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (18))){
var inst_23011 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
if(cljs.core.truth_(inst_23011)){
var statearr_23181_23247 = state_23103__$1;
(statearr_23181_23247[(1)] = (19));

} else {
var statearr_23182_23248 = state_23103__$1;
(statearr_23182_23248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (42))){
var state_23103__$1 = state_23103;
var statearr_23183_23249 = state_23103__$1;
(statearr_23183_23249[(2)] = null);

(statearr_23183_23249[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (37))){
var inst_23069 = (state_23103[(2)]);
var state_23103__$1 = state_23103;
var statearr_23184_23250 = state_23103__$1;
(statearr_23184_23250[(2)] = inst_23069);

(statearr_23184_23250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23104 === (8))){
var inst_22964 = (state_23103[(9)]);
var inst_22977 = (state_23103[(22)]);
var inst_22977__$1 = cljs.core.seq.call(null,inst_22964);
var state_23103__$1 = (function (){var statearr_23185 = state_23103;
(statearr_23185[(22)] = inst_22977__$1);

return statearr_23185;
})();
if(inst_22977__$1){
var statearr_23186_23251 = state_23103__$1;
(statearr_23186_23251[(1)] = (10));

} else {
var statearr_23187_23252 = state_23103__$1;
(statearr_23187_23252[(1)] = (11));

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
});})(c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19303__auto__,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto____0 = (function (){
var statearr_23191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23191[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto__);

(statearr_23191[(1)] = (1));

return statearr_23191;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto____1 = (function (state_23103){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_23103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e23192){if((e23192 instanceof Object)){
var ex__19307__auto__ = e23192;
var statearr_23193_23253 = state_23103;
(statearr_23193_23253[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23254 = state_23103;
state_23103 = G__23254;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto__ = function(state_23103){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto____1.call(this,state_23103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19417__auto__ = (function (){var statearr_23194 = f__19416__auto__.call(null);
(statearr_23194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_23194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__,map__22949,map__22949__$1,opts,before_jsload,on_jsload,reload_dependents,map__22950,map__22950__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19415__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23257,link){
var map__23260 = p__23257;
var map__23260__$1 = ((((!((map__23260 == null)))?((((map__23260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23260):map__23260);
var file = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23260,map__23260__$1,file){
return (function (p1__23255_SHARP_,p2__23256_SHARP_){
if(cljs.core._EQ_.call(null,p1__23255_SHARP_,p2__23256_SHARP_)){
return p1__23255_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23260,map__23260__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23266){
var map__23267 = p__23266;
var map__23267__$1 = ((((!((map__23267 == null)))?((((map__23267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23267):map__23267);
var match_length = cljs.core.get.call(null,map__23267__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23267__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23262_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23262_SHARP_);
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
var args23269 = [];
var len__17884__auto___23272 = arguments.length;
var i__17885__auto___23273 = (0);
while(true){
if((i__17885__auto___23273 < len__17884__auto___23272)){
args23269.push((arguments[i__17885__auto___23273]));

var G__23274 = (i__17885__auto___23273 + (1));
i__17885__auto___23273 = G__23274;
continue;
} else {
}
break;
}

var G__23271 = args23269.length;
switch (G__23271) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23269.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23276_SHARP_,p2__23277_SHARP_){
return cljs.core.assoc.call(null,p1__23276_SHARP_,cljs.core.get.call(null,p2__23277_SHARP_,key),p2__23277_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23278){
var map__23281 = p__23278;
var map__23281__$1 = ((((!((map__23281 == null)))?((((map__23281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23281):map__23281);
var f_data = map__23281__$1;
var file = cljs.core.get.call(null,map__23281__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23283,files_msg){
var map__23290 = p__23283;
var map__23290__$1 = ((((!((map__23290 == null)))?((((map__23290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23290):map__23290);
var opts = map__23290__$1;
var on_cssload = cljs.core.get.call(null,map__23290__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23292_23296 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23293_23297 = null;
var count__23294_23298 = (0);
var i__23295_23299 = (0);
while(true){
if((i__23295_23299 < count__23294_23298)){
var f_23300 = cljs.core._nth.call(null,chunk__23293_23297,i__23295_23299);
figwheel.client.file_reloading.reload_css_file.call(null,f_23300);

var G__23301 = seq__23292_23296;
var G__23302 = chunk__23293_23297;
var G__23303 = count__23294_23298;
var G__23304 = (i__23295_23299 + (1));
seq__23292_23296 = G__23301;
chunk__23293_23297 = G__23302;
count__23294_23298 = G__23303;
i__23295_23299 = G__23304;
continue;
} else {
var temp__4425__auto___23305 = cljs.core.seq.call(null,seq__23292_23296);
if(temp__4425__auto___23305){
var seq__23292_23306__$1 = temp__4425__auto___23305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23292_23306__$1)){
var c__17629__auto___23307 = cljs.core.chunk_first.call(null,seq__23292_23306__$1);
var G__23308 = cljs.core.chunk_rest.call(null,seq__23292_23306__$1);
var G__23309 = c__17629__auto___23307;
var G__23310 = cljs.core.count.call(null,c__17629__auto___23307);
var G__23311 = (0);
seq__23292_23296 = G__23308;
chunk__23293_23297 = G__23309;
count__23294_23298 = G__23310;
i__23295_23299 = G__23311;
continue;
} else {
var f_23312 = cljs.core.first.call(null,seq__23292_23306__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23312);

var G__23313 = cljs.core.next.call(null,seq__23292_23306__$1);
var G__23314 = null;
var G__23315 = (0);
var G__23316 = (0);
seq__23292_23296 = G__23313;
chunk__23293_23297 = G__23314;
count__23294_23298 = G__23315;
i__23295_23299 = G__23316;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23290,map__23290__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23290,map__23290__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1449829727450