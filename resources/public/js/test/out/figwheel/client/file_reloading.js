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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24439_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24439_SHARP_));
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
var seq__24444 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24445 = null;
var count__24446 = (0);
var i__24447 = (0);
while(true){
if((i__24447 < count__24446)){
var n = cljs.core._nth.call(null,chunk__24445,i__24447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24448 = seq__24444;
var G__24449 = chunk__24445;
var G__24450 = count__24446;
var G__24451 = (i__24447 + (1));
seq__24444 = G__24448;
chunk__24445 = G__24449;
count__24446 = G__24450;
i__24447 = G__24451;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24444);
if(temp__4425__auto__){
var seq__24444__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24444__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24444__$1);
var G__24452 = cljs.core.chunk_rest.call(null,seq__24444__$1);
var G__24453 = c__17629__auto__;
var G__24454 = cljs.core.count.call(null,c__17629__auto__);
var G__24455 = (0);
seq__24444 = G__24452;
chunk__24445 = G__24453;
count__24446 = G__24454;
i__24447 = G__24455;
continue;
} else {
var n = cljs.core.first.call(null,seq__24444__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24456 = cljs.core.next.call(null,seq__24444__$1);
var G__24457 = null;
var G__24458 = (0);
var G__24459 = (0);
seq__24444 = G__24456;
chunk__24445 = G__24457;
count__24446 = G__24458;
i__24447 = G__24459;
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

var seq__24498_24505 = cljs.core.seq.call(null,deps);
var chunk__24499_24506 = null;
var count__24500_24507 = (0);
var i__24501_24508 = (0);
while(true){
if((i__24501_24508 < count__24500_24507)){
var dep_24509 = cljs.core._nth.call(null,chunk__24499_24506,i__24501_24508);
topo_sort_helper_STAR_.call(null,dep_24509,(depth + (1)),state);

var G__24510 = seq__24498_24505;
var G__24511 = chunk__24499_24506;
var G__24512 = count__24500_24507;
var G__24513 = (i__24501_24508 + (1));
seq__24498_24505 = G__24510;
chunk__24499_24506 = G__24511;
count__24500_24507 = G__24512;
i__24501_24508 = G__24513;
continue;
} else {
var temp__4425__auto___24514 = cljs.core.seq.call(null,seq__24498_24505);
if(temp__4425__auto___24514){
var seq__24498_24515__$1 = temp__4425__auto___24514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24498_24515__$1)){
var c__17629__auto___24516 = cljs.core.chunk_first.call(null,seq__24498_24515__$1);
var G__24517 = cljs.core.chunk_rest.call(null,seq__24498_24515__$1);
var G__24518 = c__17629__auto___24516;
var G__24519 = cljs.core.count.call(null,c__17629__auto___24516);
var G__24520 = (0);
seq__24498_24505 = G__24517;
chunk__24499_24506 = G__24518;
count__24500_24507 = G__24519;
i__24501_24508 = G__24520;
continue;
} else {
var dep_24521 = cljs.core.first.call(null,seq__24498_24515__$1);
topo_sort_helper_STAR_.call(null,dep_24521,(depth + (1)),state);

var G__24522 = cljs.core.next.call(null,seq__24498_24515__$1);
var G__24523 = null;
var G__24524 = (0);
var G__24525 = (0);
seq__24498_24505 = G__24522;
chunk__24499_24506 = G__24523;
count__24500_24507 = G__24524;
i__24501_24508 = G__24525;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24502){
var vec__24504 = p__24502;
var x = cljs.core.nth.call(null,vec__24504,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24504,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24504,x,xs,get_deps__$1){
return (function (p1__24460_SHARP_){
return clojure.set.difference.call(null,p1__24460_SHARP_,x);
});})(vec__24504,x,xs,get_deps__$1))
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
var seq__24538 = cljs.core.seq.call(null,provides);
var chunk__24539 = null;
var count__24540 = (0);
var i__24541 = (0);
while(true){
if((i__24541 < count__24540)){
var prov = cljs.core._nth.call(null,chunk__24539,i__24541);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24542_24550 = cljs.core.seq.call(null,requires);
var chunk__24543_24551 = null;
var count__24544_24552 = (0);
var i__24545_24553 = (0);
while(true){
if((i__24545_24553 < count__24544_24552)){
var req_24554 = cljs.core._nth.call(null,chunk__24543_24551,i__24545_24553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24554,prov);

var G__24555 = seq__24542_24550;
var G__24556 = chunk__24543_24551;
var G__24557 = count__24544_24552;
var G__24558 = (i__24545_24553 + (1));
seq__24542_24550 = G__24555;
chunk__24543_24551 = G__24556;
count__24544_24552 = G__24557;
i__24545_24553 = G__24558;
continue;
} else {
var temp__4425__auto___24559 = cljs.core.seq.call(null,seq__24542_24550);
if(temp__4425__auto___24559){
var seq__24542_24560__$1 = temp__4425__auto___24559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24542_24560__$1)){
var c__17629__auto___24561 = cljs.core.chunk_first.call(null,seq__24542_24560__$1);
var G__24562 = cljs.core.chunk_rest.call(null,seq__24542_24560__$1);
var G__24563 = c__17629__auto___24561;
var G__24564 = cljs.core.count.call(null,c__17629__auto___24561);
var G__24565 = (0);
seq__24542_24550 = G__24562;
chunk__24543_24551 = G__24563;
count__24544_24552 = G__24564;
i__24545_24553 = G__24565;
continue;
} else {
var req_24566 = cljs.core.first.call(null,seq__24542_24560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24566,prov);

var G__24567 = cljs.core.next.call(null,seq__24542_24560__$1);
var G__24568 = null;
var G__24569 = (0);
var G__24570 = (0);
seq__24542_24550 = G__24567;
chunk__24543_24551 = G__24568;
count__24544_24552 = G__24569;
i__24545_24553 = G__24570;
continue;
}
} else {
}
}
break;
}

var G__24571 = seq__24538;
var G__24572 = chunk__24539;
var G__24573 = count__24540;
var G__24574 = (i__24541 + (1));
seq__24538 = G__24571;
chunk__24539 = G__24572;
count__24540 = G__24573;
i__24541 = G__24574;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24538);
if(temp__4425__auto__){
var seq__24538__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24538__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24538__$1);
var G__24575 = cljs.core.chunk_rest.call(null,seq__24538__$1);
var G__24576 = c__17629__auto__;
var G__24577 = cljs.core.count.call(null,c__17629__auto__);
var G__24578 = (0);
seq__24538 = G__24575;
chunk__24539 = G__24576;
count__24540 = G__24577;
i__24541 = G__24578;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24538__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24546_24579 = cljs.core.seq.call(null,requires);
var chunk__24547_24580 = null;
var count__24548_24581 = (0);
var i__24549_24582 = (0);
while(true){
if((i__24549_24582 < count__24548_24581)){
var req_24583 = cljs.core._nth.call(null,chunk__24547_24580,i__24549_24582);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24583,prov);

var G__24584 = seq__24546_24579;
var G__24585 = chunk__24547_24580;
var G__24586 = count__24548_24581;
var G__24587 = (i__24549_24582 + (1));
seq__24546_24579 = G__24584;
chunk__24547_24580 = G__24585;
count__24548_24581 = G__24586;
i__24549_24582 = G__24587;
continue;
} else {
var temp__4425__auto___24588__$1 = cljs.core.seq.call(null,seq__24546_24579);
if(temp__4425__auto___24588__$1){
var seq__24546_24589__$1 = temp__4425__auto___24588__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24546_24589__$1)){
var c__17629__auto___24590 = cljs.core.chunk_first.call(null,seq__24546_24589__$1);
var G__24591 = cljs.core.chunk_rest.call(null,seq__24546_24589__$1);
var G__24592 = c__17629__auto___24590;
var G__24593 = cljs.core.count.call(null,c__17629__auto___24590);
var G__24594 = (0);
seq__24546_24579 = G__24591;
chunk__24547_24580 = G__24592;
count__24548_24581 = G__24593;
i__24549_24582 = G__24594;
continue;
} else {
var req_24595 = cljs.core.first.call(null,seq__24546_24589__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24595,prov);

var G__24596 = cljs.core.next.call(null,seq__24546_24589__$1);
var G__24597 = null;
var G__24598 = (0);
var G__24599 = (0);
seq__24546_24579 = G__24596;
chunk__24547_24580 = G__24597;
count__24548_24581 = G__24598;
i__24549_24582 = G__24599;
continue;
}
} else {
}
}
break;
}

var G__24600 = cljs.core.next.call(null,seq__24538__$1);
var G__24601 = null;
var G__24602 = (0);
var G__24603 = (0);
seq__24538 = G__24600;
chunk__24539 = G__24601;
count__24540 = G__24602;
i__24541 = G__24603;
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
var seq__24608_24612 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24609_24613 = null;
var count__24610_24614 = (0);
var i__24611_24615 = (0);
while(true){
if((i__24611_24615 < count__24610_24614)){
var ns_24616 = cljs.core._nth.call(null,chunk__24609_24613,i__24611_24615);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24616);

var G__24617 = seq__24608_24612;
var G__24618 = chunk__24609_24613;
var G__24619 = count__24610_24614;
var G__24620 = (i__24611_24615 + (1));
seq__24608_24612 = G__24617;
chunk__24609_24613 = G__24618;
count__24610_24614 = G__24619;
i__24611_24615 = G__24620;
continue;
} else {
var temp__4425__auto___24621 = cljs.core.seq.call(null,seq__24608_24612);
if(temp__4425__auto___24621){
var seq__24608_24622__$1 = temp__4425__auto___24621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24608_24622__$1)){
var c__17629__auto___24623 = cljs.core.chunk_first.call(null,seq__24608_24622__$1);
var G__24624 = cljs.core.chunk_rest.call(null,seq__24608_24622__$1);
var G__24625 = c__17629__auto___24623;
var G__24626 = cljs.core.count.call(null,c__17629__auto___24623);
var G__24627 = (0);
seq__24608_24612 = G__24624;
chunk__24609_24613 = G__24625;
count__24610_24614 = G__24626;
i__24611_24615 = G__24627;
continue;
} else {
var ns_24628 = cljs.core.first.call(null,seq__24608_24622__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24628);

var G__24629 = cljs.core.next.call(null,seq__24608_24622__$1);
var G__24630 = null;
var G__24631 = (0);
var G__24632 = (0);
seq__24608_24612 = G__24629;
chunk__24609_24613 = G__24630;
count__24610_24614 = G__24631;
i__24611_24615 = G__24632;
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
var G__24633__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24634__i = 0, G__24634__a = new Array(arguments.length -  0);
while (G__24634__i < G__24634__a.length) {G__24634__a[G__24634__i] = arguments[G__24634__i + 0]; ++G__24634__i;}
  args = new cljs.core.IndexedSeq(G__24634__a,0);
} 
return G__24633__delegate.call(this,args);};
G__24633.cljs$lang$maxFixedArity = 0;
G__24633.cljs$lang$applyTo = (function (arglist__24635){
var args = cljs.core.seq(arglist__24635);
return G__24633__delegate(args);
});
G__24633.cljs$core$IFn$_invoke$arity$variadic = G__24633__delegate;
return G__24633;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24637 = cljs.core._EQ_;
var expr__24638 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24637.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24638))){
var path_parts = ((function (pred__24637,expr__24638){
return (function (p1__24636_SHARP_){
return clojure.string.split.call(null,p1__24636_SHARP_,/[\/\\]/);
});})(pred__24637,expr__24638))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24637,expr__24638){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24640){if((e24640 instanceof Error)){
var e = e24640;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24640;

}
}})());
});
;})(path_parts,sep,root,pred__24637,expr__24638))
} else {
if(cljs.core.truth_(pred__24637.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24638))){
return ((function (pred__24637,expr__24638){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24637,expr__24638){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24637,expr__24638))
);

return deferred.addErrback(((function (deferred,pred__24637,expr__24638){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24637,expr__24638))
);
});
;})(pred__24637,expr__24638))
} else {
return ((function (pred__24637,expr__24638){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24637,expr__24638))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24641,callback){
var map__24644 = p__24641;
var map__24644__$1 = ((((!((map__24644 == null)))?((((map__24644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24644):map__24644);
var file_msg = map__24644__$1;
var request_url = cljs.core.get.call(null,map__24644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24644,map__24644__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24644,map__24644__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_24668){
var state_val_24669 = (state_24668[(1)]);
if((state_val_24669 === (7))){
var inst_24664 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24670_24690 = state_24668__$1;
(statearr_24670_24690[(2)] = inst_24664);

(statearr_24670_24690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (1))){
var state_24668__$1 = state_24668;
var statearr_24671_24691 = state_24668__$1;
(statearr_24671_24691[(2)] = null);

(statearr_24671_24691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (4))){
var inst_24648 = (state_24668[(7)]);
var inst_24648__$1 = (state_24668[(2)]);
var state_24668__$1 = (function (){var statearr_24672 = state_24668;
(statearr_24672[(7)] = inst_24648__$1);

return statearr_24672;
})();
if(cljs.core.truth_(inst_24648__$1)){
var statearr_24673_24692 = state_24668__$1;
(statearr_24673_24692[(1)] = (5));

} else {
var statearr_24674_24693 = state_24668__$1;
(statearr_24674_24693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (6))){
var state_24668__$1 = state_24668;
var statearr_24675_24694 = state_24668__$1;
(statearr_24675_24694[(2)] = null);

(statearr_24675_24694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (3))){
var inst_24666 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24668__$1,inst_24666);
} else {
if((state_val_24669 === (2))){
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24669 === (11))){
var inst_24660 = (state_24668[(2)]);
var state_24668__$1 = (function (){var statearr_24676 = state_24668;
(statearr_24676[(8)] = inst_24660);

return statearr_24676;
})();
var statearr_24677_24695 = state_24668__$1;
(statearr_24677_24695[(2)] = null);

(statearr_24677_24695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (9))){
var inst_24654 = (state_24668[(9)]);
var inst_24652 = (state_24668[(10)]);
var inst_24656 = inst_24654.call(null,inst_24652);
var state_24668__$1 = state_24668;
var statearr_24678_24696 = state_24668__$1;
(statearr_24678_24696[(2)] = inst_24656);

(statearr_24678_24696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (5))){
var inst_24648 = (state_24668[(7)]);
var inst_24650 = figwheel.client.file_reloading.blocking_load.call(null,inst_24648);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(8),inst_24650);
} else {
if((state_val_24669 === (10))){
var inst_24652 = (state_24668[(10)]);
var inst_24658 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24652);
var state_24668__$1 = state_24668;
var statearr_24679_24697 = state_24668__$1;
(statearr_24679_24697[(2)] = inst_24658);

(statearr_24679_24697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (8))){
var inst_24654 = (state_24668[(9)]);
var inst_24648 = (state_24668[(7)]);
var inst_24652 = (state_24668[(2)]);
var inst_24653 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24654__$1 = cljs.core.get.call(null,inst_24653,inst_24648);
var state_24668__$1 = (function (){var statearr_24680 = state_24668;
(statearr_24680[(9)] = inst_24654__$1);

(statearr_24680[(10)] = inst_24652);

return statearr_24680;
})();
if(cljs.core.truth_(inst_24654__$1)){
var statearr_24681_24698 = state_24668__$1;
(statearr_24681_24698[(1)] = (9));

} else {
var statearr_24682_24699 = state_24668__$1;
(statearr_24682_24699[(1)] = (10));

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
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18831__auto__ = null;
var figwheel$client$file_reloading$state_machine__18831__auto____0 = (function (){
var statearr_24686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24686[(0)] = figwheel$client$file_reloading$state_machine__18831__auto__);

(statearr_24686[(1)] = (1));

return statearr_24686;
});
var figwheel$client$file_reloading$state_machine__18831__auto____1 = (function (state_24668){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_24668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e24687){if((e24687 instanceof Object)){
var ex__18834__auto__ = e24687;
var statearr_24688_24700 = state_24668;
(statearr_24688_24700[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24701 = state_24668;
state_24668 = G__24701;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18831__auto__ = function(state_24668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18831__auto____1.call(this,state_24668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18831__auto____0;
figwheel$client$file_reloading$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18831__auto____1;
return figwheel$client$file_reloading$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_24689 = f__18852__auto__.call(null);
(statearr_24689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_24689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24702,callback){
var map__24705 = p__24702;
var map__24705__$1 = ((((!((map__24705 == null)))?((((map__24705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24705):map__24705);
var file_msg = map__24705__$1;
var namespace = cljs.core.get.call(null,map__24705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24705,map__24705__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24705,map__24705__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24707){
var map__24710 = p__24707;
var map__24710__$1 = ((((!((map__24710 == null)))?((((map__24710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24710):map__24710);
var file_msg = map__24710__$1;
var namespace = cljs.core.get.call(null,map__24710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24712,callback){
var map__24715 = p__24712;
var map__24715__$1 = ((((!((map__24715 == null)))?((((map__24715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24715):map__24715);
var file_msg = map__24715__$1;
var request_url = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18851__auto___24803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___24803,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___24803,out){
return (function (state_24785){
var state_val_24786 = (state_24785[(1)]);
if((state_val_24786 === (1))){
var inst_24763 = cljs.core.nth.call(null,files,(0),null);
var inst_24764 = cljs.core.nthnext.call(null,files,(1));
var inst_24765 = files;
var state_24785__$1 = (function (){var statearr_24787 = state_24785;
(statearr_24787[(7)] = inst_24763);

(statearr_24787[(8)] = inst_24764);

(statearr_24787[(9)] = inst_24765);

return statearr_24787;
})();
var statearr_24788_24804 = state_24785__$1;
(statearr_24788_24804[(2)] = null);

(statearr_24788_24804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (2))){
var inst_24768 = (state_24785[(10)]);
var inst_24765 = (state_24785[(9)]);
var inst_24768__$1 = cljs.core.nth.call(null,inst_24765,(0),null);
var inst_24769 = cljs.core.nthnext.call(null,inst_24765,(1));
var inst_24770 = (inst_24768__$1 == null);
var inst_24771 = cljs.core.not.call(null,inst_24770);
var state_24785__$1 = (function (){var statearr_24789 = state_24785;
(statearr_24789[(10)] = inst_24768__$1);

(statearr_24789[(11)] = inst_24769);

return statearr_24789;
})();
if(inst_24771){
var statearr_24790_24805 = state_24785__$1;
(statearr_24790_24805[(1)] = (4));

} else {
var statearr_24791_24806 = state_24785__$1;
(statearr_24791_24806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (3))){
var inst_24783 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24785__$1,inst_24783);
} else {
if((state_val_24786 === (4))){
var inst_24768 = (state_24785[(10)]);
var inst_24773 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24768);
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24785__$1,(7),inst_24773);
} else {
if((state_val_24786 === (5))){
var inst_24779 = cljs.core.async.close_BANG_.call(null,out);
var state_24785__$1 = state_24785;
var statearr_24792_24807 = state_24785__$1;
(statearr_24792_24807[(2)] = inst_24779);

(statearr_24792_24807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (6))){
var inst_24781 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24793_24808 = state_24785__$1;
(statearr_24793_24808[(2)] = inst_24781);

(statearr_24793_24808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (7))){
var inst_24769 = (state_24785[(11)]);
var inst_24775 = (state_24785[(2)]);
var inst_24776 = cljs.core.async.put_BANG_.call(null,out,inst_24775);
var inst_24765 = inst_24769;
var state_24785__$1 = (function (){var statearr_24794 = state_24785;
(statearr_24794[(9)] = inst_24765);

(statearr_24794[(12)] = inst_24776);

return statearr_24794;
})();
var statearr_24795_24809 = state_24785__$1;
(statearr_24795_24809[(2)] = null);

(statearr_24795_24809[(1)] = (2));


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
});})(c__18851__auto___24803,out))
;
return ((function (switch__18830__auto__,c__18851__auto___24803,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24799[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____1 = (function (state_24785){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_24785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__18834__auto__ = e24800;
var statearr_24801_24810 = state_24785;
(statearr_24801_24810[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24811 = state_24785;
state_24785 = G__24811;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__ = function(state_24785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____1.call(this,state_24785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___24803,out))
})();
var state__18853__auto__ = (function (){var statearr_24802 = f__18852__auto__.call(null);
(statearr_24802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___24803);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___24803,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24812,opts){
var map__24816 = p__24812;
var map__24816__$1 = ((((!((map__24816 == null)))?((((map__24816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24816):map__24816);
var eval_body__$1 = cljs.core.get.call(null,map__24816__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24818){var e = e24818;
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
return (function (p1__24819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24819_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24824){
var vec__24825 = p__24824;
var k = cljs.core.nth.call(null,vec__24825,(0),null);
var v = cljs.core.nth.call(null,vec__24825,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24826){
var vec__24827 = p__24826;
var k = cljs.core.nth.call(null,vec__24827,(0),null);
var v = cljs.core.nth.call(null,vec__24827,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24831,p__24832){
var map__25079 = p__24831;
var map__25079__$1 = ((((!((map__25079 == null)))?((((map__25079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25079):map__25079);
var opts = map__25079__$1;
var before_jsload = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25080 = p__24832;
var map__25080__$1 = ((((!((map__25080 == null)))?((((map__25080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25080):map__25080);
var msg = map__25080__$1;
var files = cljs.core.get.call(null,map__25080__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25080__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25080__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25233){
var state_val_25234 = (state_25233[(1)]);
if((state_val_25234 === (7))){
var inst_25094 = (state_25233[(7)]);
var inst_25097 = (state_25233[(8)]);
var inst_25095 = (state_25233[(9)]);
var inst_25096 = (state_25233[(10)]);
var inst_25102 = cljs.core._nth.call(null,inst_25095,inst_25097);
var inst_25103 = figwheel.client.file_reloading.eval_body.call(null,inst_25102,opts);
var inst_25104 = (inst_25097 + (1));
var tmp25235 = inst_25094;
var tmp25236 = inst_25095;
var tmp25237 = inst_25096;
var inst_25094__$1 = tmp25235;
var inst_25095__$1 = tmp25236;
var inst_25096__$1 = tmp25237;
var inst_25097__$1 = inst_25104;
var state_25233__$1 = (function (){var statearr_25238 = state_25233;
(statearr_25238[(7)] = inst_25094__$1);

(statearr_25238[(8)] = inst_25097__$1);

(statearr_25238[(11)] = inst_25103);

(statearr_25238[(9)] = inst_25095__$1);

(statearr_25238[(10)] = inst_25096__$1);

return statearr_25238;
})();
var statearr_25239_25325 = state_25233__$1;
(statearr_25239_25325[(2)] = null);

(statearr_25239_25325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (20))){
var inst_25137 = (state_25233[(12)]);
var inst_25145 = figwheel.client.file_reloading.sort_files.call(null,inst_25137);
var state_25233__$1 = state_25233;
var statearr_25240_25326 = state_25233__$1;
(statearr_25240_25326[(2)] = inst_25145);

(statearr_25240_25326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (27))){
var state_25233__$1 = state_25233;
var statearr_25241_25327 = state_25233__$1;
(statearr_25241_25327[(2)] = null);

(statearr_25241_25327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (1))){
var inst_25086 = (state_25233[(13)]);
var inst_25083 = before_jsload.call(null,files);
var inst_25084 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25085 = (function (){return ((function (inst_25086,inst_25083,inst_25084,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24828_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24828_SHARP_);
});
;})(inst_25086,inst_25083,inst_25084,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25086__$1 = cljs.core.filter.call(null,inst_25085,files);
var inst_25087 = cljs.core.not_empty.call(null,inst_25086__$1);
var state_25233__$1 = (function (){var statearr_25242 = state_25233;
(statearr_25242[(14)] = inst_25084);

(statearr_25242[(15)] = inst_25083);

(statearr_25242[(13)] = inst_25086__$1);

return statearr_25242;
})();
if(cljs.core.truth_(inst_25087)){
var statearr_25243_25328 = state_25233__$1;
(statearr_25243_25328[(1)] = (2));

} else {
var statearr_25244_25329 = state_25233__$1;
(statearr_25244_25329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (24))){
var state_25233__$1 = state_25233;
var statearr_25245_25330 = state_25233__$1;
(statearr_25245_25330[(2)] = null);

(statearr_25245_25330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (39))){
var inst_25187 = (state_25233[(16)]);
var state_25233__$1 = state_25233;
var statearr_25246_25331 = state_25233__$1;
(statearr_25246_25331[(2)] = inst_25187);

(statearr_25246_25331[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (46))){
var inst_25228 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25247_25332 = state_25233__$1;
(statearr_25247_25332[(2)] = inst_25228);

(statearr_25247_25332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (4))){
var inst_25131 = (state_25233[(2)]);
var inst_25132 = cljs.core.List.EMPTY;
var inst_25133 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25132);
var inst_25134 = (function (){return ((function (inst_25131,inst_25132,inst_25133,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24829_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24829_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24829_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_25131,inst_25132,inst_25133,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25135 = cljs.core.filter.call(null,inst_25134,files);
var inst_25136 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25137 = cljs.core.concat.call(null,inst_25135,inst_25136);
var state_25233__$1 = (function (){var statearr_25248 = state_25233;
(statearr_25248[(17)] = inst_25131);

(statearr_25248[(18)] = inst_25133);

(statearr_25248[(12)] = inst_25137);

return statearr_25248;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25249_25333 = state_25233__$1;
(statearr_25249_25333[(1)] = (16));

} else {
var statearr_25250_25334 = state_25233__$1;
(statearr_25250_25334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (15))){
var inst_25121 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25251_25335 = state_25233__$1;
(statearr_25251_25335[(2)] = inst_25121);

(statearr_25251_25335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (21))){
var inst_25147 = (state_25233[(19)]);
var inst_25147__$1 = (state_25233[(2)]);
var inst_25148 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25147__$1);
var state_25233__$1 = (function (){var statearr_25252 = state_25233;
(statearr_25252[(19)] = inst_25147__$1);

return statearr_25252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25233__$1,(22),inst_25148);
} else {
if((state_val_25234 === (31))){
var inst_25231 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25233__$1,inst_25231);
} else {
if((state_val_25234 === (32))){
var inst_25187 = (state_25233[(16)]);
var inst_25192 = inst_25187.cljs$lang$protocol_mask$partition0$;
var inst_25193 = (inst_25192 & (64));
var inst_25194 = inst_25187.cljs$core$ISeq$;
var inst_25195 = (inst_25193) || (inst_25194);
var state_25233__$1 = state_25233;
if(cljs.core.truth_(inst_25195)){
var statearr_25253_25336 = state_25233__$1;
(statearr_25253_25336[(1)] = (35));

} else {
var statearr_25254_25337 = state_25233__$1;
(statearr_25254_25337[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (40))){
var inst_25208 = (state_25233[(20)]);
var inst_25207 = (state_25233[(2)]);
var inst_25208__$1 = cljs.core.get.call(null,inst_25207,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25209 = cljs.core.get.call(null,inst_25207,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25210 = cljs.core.not_empty.call(null,inst_25208__$1);
var state_25233__$1 = (function (){var statearr_25255 = state_25233;
(statearr_25255[(21)] = inst_25209);

(statearr_25255[(20)] = inst_25208__$1);

return statearr_25255;
})();
if(cljs.core.truth_(inst_25210)){
var statearr_25256_25338 = state_25233__$1;
(statearr_25256_25338[(1)] = (41));

} else {
var statearr_25257_25339 = state_25233__$1;
(statearr_25257_25339[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (33))){
var state_25233__$1 = state_25233;
var statearr_25258_25340 = state_25233__$1;
(statearr_25258_25340[(2)] = false);

(statearr_25258_25340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (13))){
var inst_25107 = (state_25233[(22)]);
var inst_25111 = cljs.core.chunk_first.call(null,inst_25107);
var inst_25112 = cljs.core.chunk_rest.call(null,inst_25107);
var inst_25113 = cljs.core.count.call(null,inst_25111);
var inst_25094 = inst_25112;
var inst_25095 = inst_25111;
var inst_25096 = inst_25113;
var inst_25097 = (0);
var state_25233__$1 = (function (){var statearr_25259 = state_25233;
(statearr_25259[(7)] = inst_25094);

(statearr_25259[(8)] = inst_25097);

(statearr_25259[(9)] = inst_25095);

(statearr_25259[(10)] = inst_25096);

return statearr_25259;
})();
var statearr_25260_25341 = state_25233__$1;
(statearr_25260_25341[(2)] = null);

(statearr_25260_25341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (22))){
var inst_25155 = (state_25233[(23)]);
var inst_25147 = (state_25233[(19)]);
var inst_25150 = (state_25233[(24)]);
var inst_25151 = (state_25233[(25)]);
var inst_25150__$1 = (state_25233[(2)]);
var inst_25151__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25150__$1);
var inst_25152 = (function (){var all_files = inst_25147;
var res_SINGLEQUOTE_ = inst_25150__$1;
var res = inst_25151__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25155,inst_25147,inst_25150,inst_25151,inst_25150__$1,inst_25151__$1,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24830_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24830_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25155,inst_25147,inst_25150,inst_25151,inst_25150__$1,inst_25151__$1,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25153 = cljs.core.filter.call(null,inst_25152,inst_25150__$1);
var inst_25154 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25154);
var inst_25156 = cljs.core.not_empty.call(null,inst_25155__$1);
var state_25233__$1 = (function (){var statearr_25261 = state_25233;
(statearr_25261[(23)] = inst_25155__$1);

(statearr_25261[(26)] = inst_25153);

(statearr_25261[(24)] = inst_25150__$1);

(statearr_25261[(25)] = inst_25151__$1);

return statearr_25261;
})();
if(cljs.core.truth_(inst_25156)){
var statearr_25262_25342 = state_25233__$1;
(statearr_25262_25342[(1)] = (23));

} else {
var statearr_25263_25343 = state_25233__$1;
(statearr_25263_25343[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (36))){
var state_25233__$1 = state_25233;
var statearr_25264_25344 = state_25233__$1;
(statearr_25264_25344[(2)] = false);

(statearr_25264_25344[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (41))){
var inst_25208 = (state_25233[(20)]);
var inst_25212 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25213 = cljs.core.map.call(null,inst_25212,inst_25208);
var inst_25214 = cljs.core.pr_str.call(null,inst_25213);
var inst_25215 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25214)].join('');
var inst_25216 = figwheel.client.utils.log.call(null,inst_25215);
var state_25233__$1 = state_25233;
var statearr_25265_25345 = state_25233__$1;
(statearr_25265_25345[(2)] = inst_25216);

(statearr_25265_25345[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (43))){
var inst_25209 = (state_25233[(21)]);
var inst_25219 = (state_25233[(2)]);
var inst_25220 = cljs.core.not_empty.call(null,inst_25209);
var state_25233__$1 = (function (){var statearr_25266 = state_25233;
(statearr_25266[(27)] = inst_25219);

return statearr_25266;
})();
if(cljs.core.truth_(inst_25220)){
var statearr_25267_25346 = state_25233__$1;
(statearr_25267_25346[(1)] = (44));

} else {
var statearr_25268_25347 = state_25233__$1;
(statearr_25268_25347[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (29))){
var inst_25155 = (state_25233[(23)]);
var inst_25153 = (state_25233[(26)]);
var inst_25147 = (state_25233[(19)]);
var inst_25150 = (state_25233[(24)]);
var inst_25151 = (state_25233[(25)]);
var inst_25187 = (state_25233[(16)]);
var inst_25183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25186 = (function (){var all_files = inst_25147;
var res_SINGLEQUOTE_ = inst_25150;
var res = inst_25151;
var files_not_loaded = inst_25153;
var dependencies_that_loaded = inst_25155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25187,inst_25183,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25185){
var map__25269 = p__25185;
var map__25269__$1 = ((((!((map__25269 == null)))?((((map__25269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25269):map__25269);
var namespace = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25187,inst_25183,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25187__$1 = cljs.core.group_by.call(null,inst_25186,inst_25153);
var inst_25189 = (inst_25187__$1 == null);
var inst_25190 = cljs.core.not.call(null,inst_25189);
var state_25233__$1 = (function (){var statearr_25271 = state_25233;
(statearr_25271[(28)] = inst_25183);

(statearr_25271[(16)] = inst_25187__$1);

return statearr_25271;
})();
if(inst_25190){
var statearr_25272_25348 = state_25233__$1;
(statearr_25272_25348[(1)] = (32));

} else {
var statearr_25273_25349 = state_25233__$1;
(statearr_25273_25349[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (44))){
var inst_25209 = (state_25233[(21)]);
var inst_25222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25209);
var inst_25223 = cljs.core.pr_str.call(null,inst_25222);
var inst_25224 = [cljs.core.str("not required: "),cljs.core.str(inst_25223)].join('');
var inst_25225 = figwheel.client.utils.log.call(null,inst_25224);
var state_25233__$1 = state_25233;
var statearr_25274_25350 = state_25233__$1;
(statearr_25274_25350[(2)] = inst_25225);

(statearr_25274_25350[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (6))){
var inst_25128 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25275_25351 = state_25233__$1;
(statearr_25275_25351[(2)] = inst_25128);

(statearr_25275_25351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (28))){
var inst_25153 = (state_25233[(26)]);
var inst_25180 = (state_25233[(2)]);
var inst_25181 = cljs.core.not_empty.call(null,inst_25153);
var state_25233__$1 = (function (){var statearr_25276 = state_25233;
(statearr_25276[(29)] = inst_25180);

return statearr_25276;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25277_25352 = state_25233__$1;
(statearr_25277_25352[(1)] = (29));

} else {
var statearr_25278_25353 = state_25233__$1;
(statearr_25278_25353[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (25))){
var inst_25151 = (state_25233[(25)]);
var inst_25167 = (state_25233[(2)]);
var inst_25168 = cljs.core.not_empty.call(null,inst_25151);
var state_25233__$1 = (function (){var statearr_25279 = state_25233;
(statearr_25279[(30)] = inst_25167);

return statearr_25279;
})();
if(cljs.core.truth_(inst_25168)){
var statearr_25280_25354 = state_25233__$1;
(statearr_25280_25354[(1)] = (26));

} else {
var statearr_25281_25355 = state_25233__$1;
(statearr_25281_25355[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (34))){
var inst_25202 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
if(cljs.core.truth_(inst_25202)){
var statearr_25282_25356 = state_25233__$1;
(statearr_25282_25356[(1)] = (38));

} else {
var statearr_25283_25357 = state_25233__$1;
(statearr_25283_25357[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (17))){
var state_25233__$1 = state_25233;
var statearr_25284_25358 = state_25233__$1;
(statearr_25284_25358[(2)] = recompile_dependents);

(statearr_25284_25358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (3))){
var state_25233__$1 = state_25233;
var statearr_25285_25359 = state_25233__$1;
(statearr_25285_25359[(2)] = null);

(statearr_25285_25359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (12))){
var inst_25124 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25286_25360 = state_25233__$1;
(statearr_25286_25360[(2)] = inst_25124);

(statearr_25286_25360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (2))){
var inst_25086 = (state_25233[(13)]);
var inst_25093 = cljs.core.seq.call(null,inst_25086);
var inst_25094 = inst_25093;
var inst_25095 = null;
var inst_25096 = (0);
var inst_25097 = (0);
var state_25233__$1 = (function (){var statearr_25287 = state_25233;
(statearr_25287[(7)] = inst_25094);

(statearr_25287[(8)] = inst_25097);

(statearr_25287[(9)] = inst_25095);

(statearr_25287[(10)] = inst_25096);

return statearr_25287;
})();
var statearr_25288_25361 = state_25233__$1;
(statearr_25288_25361[(2)] = null);

(statearr_25288_25361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (23))){
var inst_25155 = (state_25233[(23)]);
var inst_25153 = (state_25233[(26)]);
var inst_25147 = (state_25233[(19)]);
var inst_25150 = (state_25233[(24)]);
var inst_25151 = (state_25233[(25)]);
var inst_25158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25160 = (function (){var all_files = inst_25147;
var res_SINGLEQUOTE_ = inst_25150;
var res = inst_25151;
var files_not_loaded = inst_25153;
var dependencies_that_loaded = inst_25155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25158,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25159){
var map__25289 = p__25159;
var map__25289__$1 = ((((!((map__25289 == null)))?((((map__25289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25289):map__25289);
var request_url = cljs.core.get.call(null,map__25289__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25158,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25161 = cljs.core.reverse.call(null,inst_25155);
var inst_25162 = cljs.core.map.call(null,inst_25160,inst_25161);
var inst_25163 = cljs.core.pr_str.call(null,inst_25162);
var inst_25164 = figwheel.client.utils.log.call(null,inst_25163);
var state_25233__$1 = (function (){var statearr_25291 = state_25233;
(statearr_25291[(31)] = inst_25158);

return statearr_25291;
})();
var statearr_25292_25362 = state_25233__$1;
(statearr_25292_25362[(2)] = inst_25164);

(statearr_25292_25362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (35))){
var state_25233__$1 = state_25233;
var statearr_25293_25363 = state_25233__$1;
(statearr_25293_25363[(2)] = true);

(statearr_25293_25363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (19))){
var inst_25137 = (state_25233[(12)]);
var inst_25143 = figwheel.client.file_reloading.expand_files.call(null,inst_25137);
var state_25233__$1 = state_25233;
var statearr_25294_25364 = state_25233__$1;
(statearr_25294_25364[(2)] = inst_25143);

(statearr_25294_25364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (11))){
var state_25233__$1 = state_25233;
var statearr_25295_25365 = state_25233__$1;
(statearr_25295_25365[(2)] = null);

(statearr_25295_25365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (9))){
var inst_25126 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25296_25366 = state_25233__$1;
(statearr_25296_25366[(2)] = inst_25126);

(statearr_25296_25366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (5))){
var inst_25097 = (state_25233[(8)]);
var inst_25096 = (state_25233[(10)]);
var inst_25099 = (inst_25097 < inst_25096);
var inst_25100 = inst_25099;
var state_25233__$1 = state_25233;
if(cljs.core.truth_(inst_25100)){
var statearr_25297_25367 = state_25233__$1;
(statearr_25297_25367[(1)] = (7));

} else {
var statearr_25298_25368 = state_25233__$1;
(statearr_25298_25368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (14))){
var inst_25107 = (state_25233[(22)]);
var inst_25116 = cljs.core.first.call(null,inst_25107);
var inst_25117 = figwheel.client.file_reloading.eval_body.call(null,inst_25116,opts);
var inst_25118 = cljs.core.next.call(null,inst_25107);
var inst_25094 = inst_25118;
var inst_25095 = null;
var inst_25096 = (0);
var inst_25097 = (0);
var state_25233__$1 = (function (){var statearr_25299 = state_25233;
(statearr_25299[(7)] = inst_25094);

(statearr_25299[(8)] = inst_25097);

(statearr_25299[(32)] = inst_25117);

(statearr_25299[(9)] = inst_25095);

(statearr_25299[(10)] = inst_25096);

return statearr_25299;
})();
var statearr_25300_25369 = state_25233__$1;
(statearr_25300_25369[(2)] = null);

(statearr_25300_25369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (45))){
var state_25233__$1 = state_25233;
var statearr_25301_25370 = state_25233__$1;
(statearr_25301_25370[(2)] = null);

(statearr_25301_25370[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (26))){
var inst_25155 = (state_25233[(23)]);
var inst_25153 = (state_25233[(26)]);
var inst_25147 = (state_25233[(19)]);
var inst_25150 = (state_25233[(24)]);
var inst_25151 = (state_25233[(25)]);
var inst_25170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25172 = (function (){var all_files = inst_25147;
var res_SINGLEQUOTE_ = inst_25150;
var res = inst_25151;
var files_not_loaded = inst_25153;
var dependencies_that_loaded = inst_25155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25170,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25171){
var map__25302 = p__25171;
var map__25302__$1 = ((((!((map__25302 == null)))?((((map__25302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);
var namespace = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25170,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25173 = cljs.core.map.call(null,inst_25172,inst_25151);
var inst_25174 = cljs.core.pr_str.call(null,inst_25173);
var inst_25175 = figwheel.client.utils.log.call(null,inst_25174);
var inst_25176 = (function (){var all_files = inst_25147;
var res_SINGLEQUOTE_ = inst_25150;
var res = inst_25151;
var files_not_loaded = inst_25153;
var dependencies_that_loaded = inst_25155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25170,inst_25172,inst_25173,inst_25174,inst_25175,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25155,inst_25153,inst_25147,inst_25150,inst_25151,inst_25170,inst_25172,inst_25173,inst_25174,inst_25175,state_val_25234,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25177 = setTimeout(inst_25176,(10));
var state_25233__$1 = (function (){var statearr_25304 = state_25233;
(statearr_25304[(33)] = inst_25175);

(statearr_25304[(34)] = inst_25170);

return statearr_25304;
})();
var statearr_25305_25371 = state_25233__$1;
(statearr_25305_25371[(2)] = inst_25177);

(statearr_25305_25371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (16))){
var state_25233__$1 = state_25233;
var statearr_25306_25372 = state_25233__$1;
(statearr_25306_25372[(2)] = reload_dependents);

(statearr_25306_25372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (38))){
var inst_25187 = (state_25233[(16)]);
var inst_25204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25187);
var state_25233__$1 = state_25233;
var statearr_25307_25373 = state_25233__$1;
(statearr_25307_25373[(2)] = inst_25204);

(statearr_25307_25373[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (30))){
var state_25233__$1 = state_25233;
var statearr_25308_25374 = state_25233__$1;
(statearr_25308_25374[(2)] = null);

(statearr_25308_25374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (10))){
var inst_25107 = (state_25233[(22)]);
var inst_25109 = cljs.core.chunked_seq_QMARK_.call(null,inst_25107);
var state_25233__$1 = state_25233;
if(inst_25109){
var statearr_25309_25375 = state_25233__$1;
(statearr_25309_25375[(1)] = (13));

} else {
var statearr_25310_25376 = state_25233__$1;
(statearr_25310_25376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (18))){
var inst_25141 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
if(cljs.core.truth_(inst_25141)){
var statearr_25311_25377 = state_25233__$1;
(statearr_25311_25377[(1)] = (19));

} else {
var statearr_25312_25378 = state_25233__$1;
(statearr_25312_25378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (42))){
var state_25233__$1 = state_25233;
var statearr_25313_25379 = state_25233__$1;
(statearr_25313_25379[(2)] = null);

(statearr_25313_25379[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (37))){
var inst_25199 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25314_25380 = state_25233__$1;
(statearr_25314_25380[(2)] = inst_25199);

(statearr_25314_25380[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (8))){
var inst_25107 = (state_25233[(22)]);
var inst_25094 = (state_25233[(7)]);
var inst_25107__$1 = cljs.core.seq.call(null,inst_25094);
var state_25233__$1 = (function (){var statearr_25315 = state_25233;
(statearr_25315[(22)] = inst_25107__$1);

return statearr_25315;
})();
if(inst_25107__$1){
var statearr_25316_25381 = state_25233__$1;
(statearr_25316_25381[(1)] = (10));

} else {
var statearr_25317_25382 = state_25233__$1;
(statearr_25317_25382[(1)] = (11));

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
});})(c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18830__auto__,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____0 = (function (){
var statearr_25321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25321[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__);

(statearr_25321[(1)] = (1));

return statearr_25321;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____1 = (function (state_25233){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_25233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e25322){if((e25322 instanceof Object)){
var ex__18834__auto__ = e25322;
var statearr_25323_25383 = state_25233;
(statearr_25323_25383[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25384 = state_25233;
state_25233 = G__25384;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__ = function(state_25233){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____1.call(this,state_25233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18853__auto__ = (function (){var statearr_25324 = f__18852__auto__.call(null);
(statearr_25324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_25324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,reload_dependents,map__25080,map__25080__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18851__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25387,link){
var map__25390 = p__25387;
var map__25390__$1 = ((((!((map__25390 == null)))?((((map__25390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25390):map__25390);
var file = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25390,map__25390__$1,file){
return (function (p1__25385_SHARP_,p2__25386_SHARP_){
if(cljs.core._EQ_.call(null,p1__25385_SHARP_,p2__25386_SHARP_)){
return p1__25385_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25390,map__25390__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25396){
var map__25397 = p__25396;
var map__25397__$1 = ((((!((map__25397 == null)))?((((map__25397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25397):map__25397);
var match_length = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25392_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25392_SHARP_);
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
var args25399 = [];
var len__17884__auto___25402 = arguments.length;
var i__17885__auto___25403 = (0);
while(true){
if((i__17885__auto___25403 < len__17884__auto___25402)){
args25399.push((arguments[i__17885__auto___25403]));

var G__25404 = (i__17885__auto___25403 + (1));
i__17885__auto___25403 = G__25404;
continue;
} else {
}
break;
}

var G__25401 = args25399.length;
switch (G__25401) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25399.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25406_SHARP_,p2__25407_SHARP_){
return cljs.core.assoc.call(null,p1__25406_SHARP_,cljs.core.get.call(null,p2__25407_SHARP_,key),p2__25407_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25408){
var map__25411 = p__25408;
var map__25411__$1 = ((((!((map__25411 == null)))?((((map__25411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25411):map__25411);
var f_data = map__25411__$1;
var file = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25413,files_msg){
var map__25420 = p__25413;
var map__25420__$1 = ((((!((map__25420 == null)))?((((map__25420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25420):map__25420);
var opts = map__25420__$1;
var on_cssload = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25422_25426 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25423_25427 = null;
var count__25424_25428 = (0);
var i__25425_25429 = (0);
while(true){
if((i__25425_25429 < count__25424_25428)){
var f_25430 = cljs.core._nth.call(null,chunk__25423_25427,i__25425_25429);
figwheel.client.file_reloading.reload_css_file.call(null,f_25430);

var G__25431 = seq__25422_25426;
var G__25432 = chunk__25423_25427;
var G__25433 = count__25424_25428;
var G__25434 = (i__25425_25429 + (1));
seq__25422_25426 = G__25431;
chunk__25423_25427 = G__25432;
count__25424_25428 = G__25433;
i__25425_25429 = G__25434;
continue;
} else {
var temp__4425__auto___25435 = cljs.core.seq.call(null,seq__25422_25426);
if(temp__4425__auto___25435){
var seq__25422_25436__$1 = temp__4425__auto___25435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25422_25436__$1)){
var c__17629__auto___25437 = cljs.core.chunk_first.call(null,seq__25422_25436__$1);
var G__25438 = cljs.core.chunk_rest.call(null,seq__25422_25436__$1);
var G__25439 = c__17629__auto___25437;
var G__25440 = cljs.core.count.call(null,c__17629__auto___25437);
var G__25441 = (0);
seq__25422_25426 = G__25438;
chunk__25423_25427 = G__25439;
count__25424_25428 = G__25440;
i__25425_25429 = G__25441;
continue;
} else {
var f_25442 = cljs.core.first.call(null,seq__25422_25436__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25442);

var G__25443 = cljs.core.next.call(null,seq__25422_25436__$1);
var G__25444 = null;
var G__25445 = (0);
var G__25446 = (0);
seq__25422_25426 = G__25443;
chunk__25423_25427 = G__25444;
count__25424_25428 = G__25445;
i__25425_25429 = G__25446;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25420,map__25420__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25420,map__25420__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map