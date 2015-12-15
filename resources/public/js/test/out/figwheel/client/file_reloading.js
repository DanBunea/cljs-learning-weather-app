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
var or__16828__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16828__auto__){
return or__16828__auto__;
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
var or__16828__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24682_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24682_SHARP_));
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
var seq__24687 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24688 = null;
var count__24689 = (0);
var i__24690 = (0);
while(true){
if((i__24690 < count__24689)){
var n = cljs.core._nth.call(null,chunk__24688,i__24690);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24691 = seq__24687;
var G__24692 = chunk__24688;
var G__24693 = count__24689;
var G__24694 = (i__24690 + (1));
seq__24687 = G__24691;
chunk__24688 = G__24692;
count__24689 = G__24693;
i__24690 = G__24694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24687);
if(temp__4425__auto__){
var seq__24687__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24687__$1)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,seq__24687__$1);
var G__24695 = cljs.core.chunk_rest.call(null,seq__24687__$1);
var G__24696 = c__17631__auto__;
var G__24697 = cljs.core.count.call(null,c__17631__auto__);
var G__24698 = (0);
seq__24687 = G__24695;
chunk__24688 = G__24696;
count__24689 = G__24697;
i__24690 = G__24698;
continue;
} else {
var n = cljs.core.first.call(null,seq__24687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24699 = cljs.core.next.call(null,seq__24687__$1);
var G__24700 = null;
var G__24701 = (0);
var G__24702 = (0);
seq__24687 = G__24699;
chunk__24688 = G__24700;
count__24689 = G__24701;
i__24690 = G__24702;
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

var seq__24741_24748 = cljs.core.seq.call(null,deps);
var chunk__24742_24749 = null;
var count__24743_24750 = (0);
var i__24744_24751 = (0);
while(true){
if((i__24744_24751 < count__24743_24750)){
var dep_24752 = cljs.core._nth.call(null,chunk__24742_24749,i__24744_24751);
topo_sort_helper_STAR_.call(null,dep_24752,(depth + (1)),state);

var G__24753 = seq__24741_24748;
var G__24754 = chunk__24742_24749;
var G__24755 = count__24743_24750;
var G__24756 = (i__24744_24751 + (1));
seq__24741_24748 = G__24753;
chunk__24742_24749 = G__24754;
count__24743_24750 = G__24755;
i__24744_24751 = G__24756;
continue;
} else {
var temp__4425__auto___24757 = cljs.core.seq.call(null,seq__24741_24748);
if(temp__4425__auto___24757){
var seq__24741_24758__$1 = temp__4425__auto___24757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24741_24758__$1)){
var c__17631__auto___24759 = cljs.core.chunk_first.call(null,seq__24741_24758__$1);
var G__24760 = cljs.core.chunk_rest.call(null,seq__24741_24758__$1);
var G__24761 = c__17631__auto___24759;
var G__24762 = cljs.core.count.call(null,c__17631__auto___24759);
var G__24763 = (0);
seq__24741_24748 = G__24760;
chunk__24742_24749 = G__24761;
count__24743_24750 = G__24762;
i__24744_24751 = G__24763;
continue;
} else {
var dep_24764 = cljs.core.first.call(null,seq__24741_24758__$1);
topo_sort_helper_STAR_.call(null,dep_24764,(depth + (1)),state);

var G__24765 = cljs.core.next.call(null,seq__24741_24758__$1);
var G__24766 = null;
var G__24767 = (0);
var G__24768 = (0);
seq__24741_24748 = G__24765;
chunk__24742_24749 = G__24766;
count__24743_24750 = G__24767;
i__24744_24751 = G__24768;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24745){
var vec__24747 = p__24745;
var x = cljs.core.nth.call(null,vec__24747,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24747,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24747,x,xs,get_deps__$1){
return (function (p1__24703_SHARP_){
return clojure.set.difference.call(null,p1__24703_SHARP_,x);
});})(vec__24747,x,xs,get_deps__$1))
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
var seq__24781 = cljs.core.seq.call(null,provides);
var chunk__24782 = null;
var count__24783 = (0);
var i__24784 = (0);
while(true){
if((i__24784 < count__24783)){
var prov = cljs.core._nth.call(null,chunk__24782,i__24784);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24785_24793 = cljs.core.seq.call(null,requires);
var chunk__24786_24794 = null;
var count__24787_24795 = (0);
var i__24788_24796 = (0);
while(true){
if((i__24788_24796 < count__24787_24795)){
var req_24797 = cljs.core._nth.call(null,chunk__24786_24794,i__24788_24796);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24797,prov);

var G__24798 = seq__24785_24793;
var G__24799 = chunk__24786_24794;
var G__24800 = count__24787_24795;
var G__24801 = (i__24788_24796 + (1));
seq__24785_24793 = G__24798;
chunk__24786_24794 = G__24799;
count__24787_24795 = G__24800;
i__24788_24796 = G__24801;
continue;
} else {
var temp__4425__auto___24802 = cljs.core.seq.call(null,seq__24785_24793);
if(temp__4425__auto___24802){
var seq__24785_24803__$1 = temp__4425__auto___24802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24785_24803__$1)){
var c__17631__auto___24804 = cljs.core.chunk_first.call(null,seq__24785_24803__$1);
var G__24805 = cljs.core.chunk_rest.call(null,seq__24785_24803__$1);
var G__24806 = c__17631__auto___24804;
var G__24807 = cljs.core.count.call(null,c__17631__auto___24804);
var G__24808 = (0);
seq__24785_24793 = G__24805;
chunk__24786_24794 = G__24806;
count__24787_24795 = G__24807;
i__24788_24796 = G__24808;
continue;
} else {
var req_24809 = cljs.core.first.call(null,seq__24785_24803__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24809,prov);

var G__24810 = cljs.core.next.call(null,seq__24785_24803__$1);
var G__24811 = null;
var G__24812 = (0);
var G__24813 = (0);
seq__24785_24793 = G__24810;
chunk__24786_24794 = G__24811;
count__24787_24795 = G__24812;
i__24788_24796 = G__24813;
continue;
}
} else {
}
}
break;
}

var G__24814 = seq__24781;
var G__24815 = chunk__24782;
var G__24816 = count__24783;
var G__24817 = (i__24784 + (1));
seq__24781 = G__24814;
chunk__24782 = G__24815;
count__24783 = G__24816;
i__24784 = G__24817;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24781);
if(temp__4425__auto__){
var seq__24781__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24781__$1)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,seq__24781__$1);
var G__24818 = cljs.core.chunk_rest.call(null,seq__24781__$1);
var G__24819 = c__17631__auto__;
var G__24820 = cljs.core.count.call(null,c__17631__auto__);
var G__24821 = (0);
seq__24781 = G__24818;
chunk__24782 = G__24819;
count__24783 = G__24820;
i__24784 = G__24821;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24781__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24789_24822 = cljs.core.seq.call(null,requires);
var chunk__24790_24823 = null;
var count__24791_24824 = (0);
var i__24792_24825 = (0);
while(true){
if((i__24792_24825 < count__24791_24824)){
var req_24826 = cljs.core._nth.call(null,chunk__24790_24823,i__24792_24825);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24826,prov);

var G__24827 = seq__24789_24822;
var G__24828 = chunk__24790_24823;
var G__24829 = count__24791_24824;
var G__24830 = (i__24792_24825 + (1));
seq__24789_24822 = G__24827;
chunk__24790_24823 = G__24828;
count__24791_24824 = G__24829;
i__24792_24825 = G__24830;
continue;
} else {
var temp__4425__auto___24831__$1 = cljs.core.seq.call(null,seq__24789_24822);
if(temp__4425__auto___24831__$1){
var seq__24789_24832__$1 = temp__4425__auto___24831__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24789_24832__$1)){
var c__17631__auto___24833 = cljs.core.chunk_first.call(null,seq__24789_24832__$1);
var G__24834 = cljs.core.chunk_rest.call(null,seq__24789_24832__$1);
var G__24835 = c__17631__auto___24833;
var G__24836 = cljs.core.count.call(null,c__17631__auto___24833);
var G__24837 = (0);
seq__24789_24822 = G__24834;
chunk__24790_24823 = G__24835;
count__24791_24824 = G__24836;
i__24792_24825 = G__24837;
continue;
} else {
var req_24838 = cljs.core.first.call(null,seq__24789_24832__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24838,prov);

var G__24839 = cljs.core.next.call(null,seq__24789_24832__$1);
var G__24840 = null;
var G__24841 = (0);
var G__24842 = (0);
seq__24789_24822 = G__24839;
chunk__24790_24823 = G__24840;
count__24791_24824 = G__24841;
i__24792_24825 = G__24842;
continue;
}
} else {
}
}
break;
}

var G__24843 = cljs.core.next.call(null,seq__24781__$1);
var G__24844 = null;
var G__24845 = (0);
var G__24846 = (0);
seq__24781 = G__24843;
chunk__24782 = G__24844;
count__24783 = G__24845;
i__24784 = G__24846;
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
var seq__24851_24855 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24852_24856 = null;
var count__24853_24857 = (0);
var i__24854_24858 = (0);
while(true){
if((i__24854_24858 < count__24853_24857)){
var ns_24859 = cljs.core._nth.call(null,chunk__24852_24856,i__24854_24858);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24859);

var G__24860 = seq__24851_24855;
var G__24861 = chunk__24852_24856;
var G__24862 = count__24853_24857;
var G__24863 = (i__24854_24858 + (1));
seq__24851_24855 = G__24860;
chunk__24852_24856 = G__24861;
count__24853_24857 = G__24862;
i__24854_24858 = G__24863;
continue;
} else {
var temp__4425__auto___24864 = cljs.core.seq.call(null,seq__24851_24855);
if(temp__4425__auto___24864){
var seq__24851_24865__$1 = temp__4425__auto___24864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24851_24865__$1)){
var c__17631__auto___24866 = cljs.core.chunk_first.call(null,seq__24851_24865__$1);
var G__24867 = cljs.core.chunk_rest.call(null,seq__24851_24865__$1);
var G__24868 = c__17631__auto___24866;
var G__24869 = cljs.core.count.call(null,c__17631__auto___24866);
var G__24870 = (0);
seq__24851_24855 = G__24867;
chunk__24852_24856 = G__24868;
count__24853_24857 = G__24869;
i__24854_24858 = G__24870;
continue;
} else {
var ns_24871 = cljs.core.first.call(null,seq__24851_24865__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24871);

var G__24872 = cljs.core.next.call(null,seq__24851_24865__$1);
var G__24873 = null;
var G__24874 = (0);
var G__24875 = (0);
seq__24851_24855 = G__24872;
chunk__24852_24856 = G__24873;
count__24853_24857 = G__24874;
i__24854_24858 = G__24875;
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
goog.require_figwheel_backup_ = (function (){var or__16828__auto__ = goog.require__;
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
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
var G__24876__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24877__i = 0, G__24877__a = new Array(arguments.length -  0);
while (G__24877__i < G__24877__a.length) {G__24877__a[G__24877__i] = arguments[G__24877__i + 0]; ++G__24877__i;}
  args = new cljs.core.IndexedSeq(G__24877__a,0);
} 
return G__24876__delegate.call(this,args);};
G__24876.cljs$lang$maxFixedArity = 0;
G__24876.cljs$lang$applyTo = (function (arglist__24878){
var args = cljs.core.seq(arglist__24878);
return G__24876__delegate(args);
});
G__24876.cljs$core$IFn$_invoke$arity$variadic = G__24876__delegate;
return G__24876;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24880 = cljs.core._EQ_;
var expr__24881 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24880.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24881))){
var path_parts = ((function (pred__24880,expr__24881){
return (function (p1__24879_SHARP_){
return clojure.string.split.call(null,p1__24879_SHARP_,/[\/\\]/);
});})(pred__24880,expr__24881))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24880,expr__24881){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24883){if((e24883 instanceof Error)){
var e = e24883;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24883;

}
}})());
});
;})(path_parts,sep,root,pred__24880,expr__24881))
} else {
if(cljs.core.truth_(pred__24880.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24881))){
return ((function (pred__24880,expr__24881){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24880,expr__24881){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24880,expr__24881))
);

return deferred.addErrback(((function (deferred,pred__24880,expr__24881){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24880,expr__24881))
);
});
;})(pred__24880,expr__24881))
} else {
return ((function (pred__24880,expr__24881){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24880,expr__24881))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24884,callback){
var map__24887 = p__24884;
var map__24887__$1 = ((((!((map__24887 == null)))?((((map__24887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24887):map__24887);
var file_msg = map__24887__$1;
var request_url = cljs.core.get.call(null,map__24887__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24887,map__24887__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24887,map__24887__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__){
return (function (state_24911){
var state_val_24912 = (state_24911[(1)]);
if((state_val_24912 === (7))){
var inst_24907 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24913_24933 = state_24911__$1;
(statearr_24913_24933[(2)] = inst_24907);

(statearr_24913_24933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (1))){
var state_24911__$1 = state_24911;
var statearr_24914_24934 = state_24911__$1;
(statearr_24914_24934[(2)] = null);

(statearr_24914_24934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (4))){
var inst_24891 = (state_24911[(7)]);
var inst_24891__$1 = (state_24911[(2)]);
var state_24911__$1 = (function (){var statearr_24915 = state_24911;
(statearr_24915[(7)] = inst_24891__$1);

return statearr_24915;
})();
if(cljs.core.truth_(inst_24891__$1)){
var statearr_24916_24935 = state_24911__$1;
(statearr_24916_24935[(1)] = (5));

} else {
var statearr_24917_24936 = state_24911__$1;
(statearr_24917_24936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (6))){
var state_24911__$1 = state_24911;
var statearr_24918_24937 = state_24911__$1;
(statearr_24918_24937[(2)] = null);

(statearr_24918_24937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (3))){
var inst_24909 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24911__$1,inst_24909);
} else {
if((state_val_24912 === (2))){
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24911__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24912 === (11))){
var inst_24903 = (state_24911[(2)]);
var state_24911__$1 = (function (){var statearr_24919 = state_24911;
(statearr_24919[(8)] = inst_24903);

return statearr_24919;
})();
var statearr_24920_24938 = state_24911__$1;
(statearr_24920_24938[(2)] = null);

(statearr_24920_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (9))){
var inst_24897 = (state_24911[(9)]);
var inst_24895 = (state_24911[(10)]);
var inst_24899 = inst_24897.call(null,inst_24895);
var state_24911__$1 = state_24911;
var statearr_24921_24939 = state_24911__$1;
(statearr_24921_24939[(2)] = inst_24899);

(statearr_24921_24939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (5))){
var inst_24891 = (state_24911[(7)]);
var inst_24893 = figwheel.client.file_reloading.blocking_load.call(null,inst_24891);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24911__$1,(8),inst_24893);
} else {
if((state_val_24912 === (10))){
var inst_24895 = (state_24911[(10)]);
var inst_24901 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24895);
var state_24911__$1 = state_24911;
var statearr_24922_24940 = state_24911__$1;
(statearr_24922_24940[(2)] = inst_24901);

(statearr_24922_24940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (8))){
var inst_24891 = (state_24911[(7)]);
var inst_24897 = (state_24911[(9)]);
var inst_24895 = (state_24911[(2)]);
var inst_24896 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24897__$1 = cljs.core.get.call(null,inst_24896,inst_24891);
var state_24911__$1 = (function (){var statearr_24923 = state_24911;
(statearr_24923[(9)] = inst_24897__$1);

(statearr_24923[(10)] = inst_24895);

return statearr_24923;
})();
if(cljs.core.truth_(inst_24897__$1)){
var statearr_24924_24941 = state_24911__$1;
(statearr_24924_24941[(1)] = (9));

} else {
var statearr_24925_24942 = state_24911__$1;
(statearr_24925_24942[(1)] = (10));

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
});})(c__18854__auto__))
;
return ((function (switch__18833__auto__,c__18854__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18834__auto__ = null;
var figwheel$client$file_reloading$state_machine__18834__auto____0 = (function (){
var statearr_24929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24929[(0)] = figwheel$client$file_reloading$state_machine__18834__auto__);

(statearr_24929[(1)] = (1));

return statearr_24929;
});
var figwheel$client$file_reloading$state_machine__18834__auto____1 = (function (state_24911){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_24911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e24930){if((e24930 instanceof Object)){
var ex__18837__auto__ = e24930;
var statearr_24931_24943 = state_24911;
(statearr_24931_24943[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24944 = state_24911;
state_24911 = G__24944;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18834__auto__ = function(state_24911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18834__auto____1.call(this,state_24911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18834__auto____0;
figwheel$client$file_reloading$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18834__auto____1;
return figwheel$client$file_reloading$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__))
})();
var state__18856__auto__ = (function (){var statearr_24932 = f__18855__auto__.call(null);
(statearr_24932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_24932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__))
);

return c__18854__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24945,callback){
var map__24948 = p__24945;
var map__24948__$1 = ((((!((map__24948 == null)))?((((map__24948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24948):map__24948);
var file_msg = map__24948__$1;
var namespace = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24948,map__24948__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24948,map__24948__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24950){
var map__24953 = p__24950;
var map__24953__$1 = ((((!((map__24953 == null)))?((((map__24953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24953):map__24953);
var file_msg = map__24953__$1;
var namespace = cljs.core.get.call(null,map__24953__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16816__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16816__auto__){
var or__16828__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
var or__16828__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16828__auto____$1)){
return or__16828__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16816__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24955,callback){
var map__24958 = p__24955;
var map__24958__$1 = ((((!((map__24958 == null)))?((((map__24958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24958):map__24958);
var file_msg = map__24958__$1;
var request_url = cljs.core.get.call(null,map__24958__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18854__auto___25046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___25046,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___25046,out){
return (function (state_25028){
var state_val_25029 = (state_25028[(1)]);
if((state_val_25029 === (1))){
var inst_25006 = cljs.core.nth.call(null,files,(0),null);
var inst_25007 = cljs.core.nthnext.call(null,files,(1));
var inst_25008 = files;
var state_25028__$1 = (function (){var statearr_25030 = state_25028;
(statearr_25030[(7)] = inst_25006);

(statearr_25030[(8)] = inst_25008);

(statearr_25030[(9)] = inst_25007);

return statearr_25030;
})();
var statearr_25031_25047 = state_25028__$1;
(statearr_25031_25047[(2)] = null);

(statearr_25031_25047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (2))){
var inst_25008 = (state_25028[(8)]);
var inst_25011 = (state_25028[(10)]);
var inst_25011__$1 = cljs.core.nth.call(null,inst_25008,(0),null);
var inst_25012 = cljs.core.nthnext.call(null,inst_25008,(1));
var inst_25013 = (inst_25011__$1 == null);
var inst_25014 = cljs.core.not.call(null,inst_25013);
var state_25028__$1 = (function (){var statearr_25032 = state_25028;
(statearr_25032[(10)] = inst_25011__$1);

(statearr_25032[(11)] = inst_25012);

return statearr_25032;
})();
if(inst_25014){
var statearr_25033_25048 = state_25028__$1;
(statearr_25033_25048[(1)] = (4));

} else {
var statearr_25034_25049 = state_25028__$1;
(statearr_25034_25049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (3))){
var inst_25026 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25028__$1,inst_25026);
} else {
if((state_val_25029 === (4))){
var inst_25011 = (state_25028[(10)]);
var inst_25016 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25011);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25028__$1,(7),inst_25016);
} else {
if((state_val_25029 === (5))){
var inst_25022 = cljs.core.async.close_BANG_.call(null,out);
var state_25028__$1 = state_25028;
var statearr_25035_25050 = state_25028__$1;
(statearr_25035_25050[(2)] = inst_25022);

(statearr_25035_25050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (6))){
var inst_25024 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25036_25051 = state_25028__$1;
(statearr_25036_25051[(2)] = inst_25024);

(statearr_25036_25051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (7))){
var inst_25012 = (state_25028[(11)]);
var inst_25018 = (state_25028[(2)]);
var inst_25019 = cljs.core.async.put_BANG_.call(null,out,inst_25018);
var inst_25008 = inst_25012;
var state_25028__$1 = (function (){var statearr_25037 = state_25028;
(statearr_25037[(12)] = inst_25019);

(statearr_25037[(8)] = inst_25008);

return statearr_25037;
})();
var statearr_25038_25052 = state_25028__$1;
(statearr_25038_25052[(2)] = null);

(statearr_25038_25052[(1)] = (2));


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
});})(c__18854__auto___25046,out))
;
return ((function (switch__18833__auto__,c__18854__auto___25046,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto____0 = (function (){
var statearr_25042 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25042[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto__);

(statearr_25042[(1)] = (1));

return statearr_25042;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto____1 = (function (state_25028){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_25028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e25043){if((e25043 instanceof Object)){
var ex__18837__auto__ = e25043;
var statearr_25044_25053 = state_25028;
(statearr_25044_25053[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25054 = state_25028;
state_25028 = G__25054;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto__ = function(state_25028){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto____1.call(this,state_25028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___25046,out))
})();
var state__18856__auto__ = (function (){var statearr_25045 = f__18855__auto__.call(null);
(statearr_25045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___25046);

return statearr_25045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___25046,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25055,opts){
var map__25059 = p__25055;
var map__25059__$1 = ((((!((map__25059 == null)))?((((map__25059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25059):map__25059);
var eval_body__$1 = cljs.core.get.call(null,map__25059__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16816__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16816__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16816__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25061){var e = e25061;
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
return (function (p1__25062_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25062_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25067){
var vec__25068 = p__25067;
var k = cljs.core.nth.call(null,vec__25068,(0),null);
var v = cljs.core.nth.call(null,vec__25068,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25069){
var vec__25070 = p__25069;
var k = cljs.core.nth.call(null,vec__25070,(0),null);
var v = cljs.core.nth.call(null,vec__25070,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25074,p__25075){
var map__25322 = p__25074;
var map__25322__$1 = ((((!((map__25322 == null)))?((((map__25322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25322):map__25322);
var opts = map__25322__$1;
var before_jsload = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25323 = p__25075;
var map__25323__$1 = ((((!((map__25323 == null)))?((((map__25323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25323):map__25323);
var msg = map__25323__$1;
var files = cljs.core.get.call(null,map__25323__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25323__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25323__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25476){
var state_val_25477 = (state_25476[(1)]);
if((state_val_25477 === (7))){
var inst_25339 = (state_25476[(7)]);
var inst_25338 = (state_25476[(8)]);
var inst_25337 = (state_25476[(9)]);
var inst_25340 = (state_25476[(10)]);
var inst_25345 = cljs.core._nth.call(null,inst_25338,inst_25340);
var inst_25346 = figwheel.client.file_reloading.eval_body.call(null,inst_25345,opts);
var inst_25347 = (inst_25340 + (1));
var tmp25478 = inst_25339;
var tmp25479 = inst_25338;
var tmp25480 = inst_25337;
var inst_25337__$1 = tmp25480;
var inst_25338__$1 = tmp25479;
var inst_25339__$1 = tmp25478;
var inst_25340__$1 = inst_25347;
var state_25476__$1 = (function (){var statearr_25481 = state_25476;
(statearr_25481[(7)] = inst_25339__$1);

(statearr_25481[(8)] = inst_25338__$1);

(statearr_25481[(9)] = inst_25337__$1);

(statearr_25481[(10)] = inst_25340__$1);

(statearr_25481[(11)] = inst_25346);

return statearr_25481;
})();
var statearr_25482_25568 = state_25476__$1;
(statearr_25482_25568[(2)] = null);

(statearr_25482_25568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (20))){
var inst_25380 = (state_25476[(12)]);
var inst_25388 = figwheel.client.file_reloading.sort_files.call(null,inst_25380);
var state_25476__$1 = state_25476;
var statearr_25483_25569 = state_25476__$1;
(statearr_25483_25569[(2)] = inst_25388);

(statearr_25483_25569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (27))){
var state_25476__$1 = state_25476;
var statearr_25484_25570 = state_25476__$1;
(statearr_25484_25570[(2)] = null);

(statearr_25484_25570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (1))){
var inst_25329 = (state_25476[(13)]);
var inst_25326 = before_jsload.call(null,files);
var inst_25327 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25328 = (function (){return ((function (inst_25329,inst_25326,inst_25327,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25071_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25071_SHARP_);
});
;})(inst_25329,inst_25326,inst_25327,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25329__$1 = cljs.core.filter.call(null,inst_25328,files);
var inst_25330 = cljs.core.not_empty.call(null,inst_25329__$1);
var state_25476__$1 = (function (){var statearr_25485 = state_25476;
(statearr_25485[(13)] = inst_25329__$1);

(statearr_25485[(14)] = inst_25326);

(statearr_25485[(15)] = inst_25327);

return statearr_25485;
})();
if(cljs.core.truth_(inst_25330)){
var statearr_25486_25571 = state_25476__$1;
(statearr_25486_25571[(1)] = (2));

} else {
var statearr_25487_25572 = state_25476__$1;
(statearr_25487_25572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (24))){
var state_25476__$1 = state_25476;
var statearr_25488_25573 = state_25476__$1;
(statearr_25488_25573[(2)] = null);

(statearr_25488_25573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (39))){
var inst_25430 = (state_25476[(16)]);
var state_25476__$1 = state_25476;
var statearr_25489_25574 = state_25476__$1;
(statearr_25489_25574[(2)] = inst_25430);

(statearr_25489_25574[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (46))){
var inst_25471 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25490_25575 = state_25476__$1;
(statearr_25490_25575[(2)] = inst_25471);

(statearr_25490_25575[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (4))){
var inst_25374 = (state_25476[(2)]);
var inst_25375 = cljs.core.List.EMPTY;
var inst_25376 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25375);
var inst_25377 = (function (){return ((function (inst_25374,inst_25375,inst_25376,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25072_SHARP_){
var and__16816__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25072_SHARP_);
if(cljs.core.truth_(and__16816__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25072_SHARP_));
} else {
return and__16816__auto__;
}
});
;})(inst_25374,inst_25375,inst_25376,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25378 = cljs.core.filter.call(null,inst_25377,files);
var inst_25379 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25380 = cljs.core.concat.call(null,inst_25378,inst_25379);
var state_25476__$1 = (function (){var statearr_25491 = state_25476;
(statearr_25491[(17)] = inst_25374);

(statearr_25491[(12)] = inst_25380);

(statearr_25491[(18)] = inst_25376);

return statearr_25491;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25492_25576 = state_25476__$1;
(statearr_25492_25576[(1)] = (16));

} else {
var statearr_25493_25577 = state_25476__$1;
(statearr_25493_25577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (15))){
var inst_25364 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25494_25578 = state_25476__$1;
(statearr_25494_25578[(2)] = inst_25364);

(statearr_25494_25578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (21))){
var inst_25390 = (state_25476[(19)]);
var inst_25390__$1 = (state_25476[(2)]);
var inst_25391 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25390__$1);
var state_25476__$1 = (function (){var statearr_25495 = state_25476;
(statearr_25495[(19)] = inst_25390__$1);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25476__$1,(22),inst_25391);
} else {
if((state_val_25477 === (31))){
var inst_25474 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25476__$1,inst_25474);
} else {
if((state_val_25477 === (32))){
var inst_25430 = (state_25476[(16)]);
var inst_25435 = inst_25430.cljs$lang$protocol_mask$partition0$;
var inst_25436 = (inst_25435 & (64));
var inst_25437 = inst_25430.cljs$core$ISeq$;
var inst_25438 = (inst_25436) || (inst_25437);
var state_25476__$1 = state_25476;
if(cljs.core.truth_(inst_25438)){
var statearr_25496_25579 = state_25476__$1;
(statearr_25496_25579[(1)] = (35));

} else {
var statearr_25497_25580 = state_25476__$1;
(statearr_25497_25580[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (40))){
var inst_25451 = (state_25476[(20)]);
var inst_25450 = (state_25476[(2)]);
var inst_25451__$1 = cljs.core.get.call(null,inst_25450,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25452 = cljs.core.get.call(null,inst_25450,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25453 = cljs.core.not_empty.call(null,inst_25451__$1);
var state_25476__$1 = (function (){var statearr_25498 = state_25476;
(statearr_25498[(21)] = inst_25452);

(statearr_25498[(20)] = inst_25451__$1);

return statearr_25498;
})();
if(cljs.core.truth_(inst_25453)){
var statearr_25499_25581 = state_25476__$1;
(statearr_25499_25581[(1)] = (41));

} else {
var statearr_25500_25582 = state_25476__$1;
(statearr_25500_25582[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (33))){
var state_25476__$1 = state_25476;
var statearr_25501_25583 = state_25476__$1;
(statearr_25501_25583[(2)] = false);

(statearr_25501_25583[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (13))){
var inst_25350 = (state_25476[(22)]);
var inst_25354 = cljs.core.chunk_first.call(null,inst_25350);
var inst_25355 = cljs.core.chunk_rest.call(null,inst_25350);
var inst_25356 = cljs.core.count.call(null,inst_25354);
var inst_25337 = inst_25355;
var inst_25338 = inst_25354;
var inst_25339 = inst_25356;
var inst_25340 = (0);
var state_25476__$1 = (function (){var statearr_25502 = state_25476;
(statearr_25502[(7)] = inst_25339);

(statearr_25502[(8)] = inst_25338);

(statearr_25502[(9)] = inst_25337);

(statearr_25502[(10)] = inst_25340);

return statearr_25502;
})();
var statearr_25503_25584 = state_25476__$1;
(statearr_25503_25584[(2)] = null);

(statearr_25503_25584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (22))){
var inst_25394 = (state_25476[(23)]);
var inst_25390 = (state_25476[(19)]);
var inst_25398 = (state_25476[(24)]);
var inst_25393 = (state_25476[(25)]);
var inst_25393__$1 = (state_25476[(2)]);
var inst_25394__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25393__$1);
var inst_25395 = (function (){var all_files = inst_25390;
var res_SINGLEQUOTE_ = inst_25393__$1;
var res = inst_25394__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25394,inst_25390,inst_25398,inst_25393,inst_25393__$1,inst_25394__$1,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25073_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25073_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25394,inst_25390,inst_25398,inst_25393,inst_25393__$1,inst_25394__$1,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25396 = cljs.core.filter.call(null,inst_25395,inst_25393__$1);
var inst_25397 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25398__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25397);
var inst_25399 = cljs.core.not_empty.call(null,inst_25398__$1);
var state_25476__$1 = (function (){var statearr_25504 = state_25476;
(statearr_25504[(26)] = inst_25396);

(statearr_25504[(23)] = inst_25394__$1);

(statearr_25504[(24)] = inst_25398__$1);

(statearr_25504[(25)] = inst_25393__$1);

return statearr_25504;
})();
if(cljs.core.truth_(inst_25399)){
var statearr_25505_25585 = state_25476__$1;
(statearr_25505_25585[(1)] = (23));

} else {
var statearr_25506_25586 = state_25476__$1;
(statearr_25506_25586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (36))){
var state_25476__$1 = state_25476;
var statearr_25507_25587 = state_25476__$1;
(statearr_25507_25587[(2)] = false);

(statearr_25507_25587[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (41))){
var inst_25451 = (state_25476[(20)]);
var inst_25455 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25456 = cljs.core.map.call(null,inst_25455,inst_25451);
var inst_25457 = cljs.core.pr_str.call(null,inst_25456);
var inst_25458 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25457)].join('');
var inst_25459 = figwheel.client.utils.log.call(null,inst_25458);
var state_25476__$1 = state_25476;
var statearr_25508_25588 = state_25476__$1;
(statearr_25508_25588[(2)] = inst_25459);

(statearr_25508_25588[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (43))){
var inst_25452 = (state_25476[(21)]);
var inst_25462 = (state_25476[(2)]);
var inst_25463 = cljs.core.not_empty.call(null,inst_25452);
var state_25476__$1 = (function (){var statearr_25509 = state_25476;
(statearr_25509[(27)] = inst_25462);

return statearr_25509;
})();
if(cljs.core.truth_(inst_25463)){
var statearr_25510_25589 = state_25476__$1;
(statearr_25510_25589[(1)] = (44));

} else {
var statearr_25511_25590 = state_25476__$1;
(statearr_25511_25590[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (29))){
var inst_25396 = (state_25476[(26)]);
var inst_25394 = (state_25476[(23)]);
var inst_25430 = (state_25476[(16)]);
var inst_25390 = (state_25476[(19)]);
var inst_25398 = (state_25476[(24)]);
var inst_25393 = (state_25476[(25)]);
var inst_25426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25429 = (function (){var all_files = inst_25390;
var res_SINGLEQUOTE_ = inst_25393;
var res = inst_25394;
var files_not_loaded = inst_25396;
var dependencies_that_loaded = inst_25398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25430,inst_25390,inst_25398,inst_25393,inst_25426,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25428){
var map__25512 = p__25428;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var namespace = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25430,inst_25390,inst_25398,inst_25393,inst_25426,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25430__$1 = cljs.core.group_by.call(null,inst_25429,inst_25396);
var inst_25432 = (inst_25430__$1 == null);
var inst_25433 = cljs.core.not.call(null,inst_25432);
var state_25476__$1 = (function (){var statearr_25514 = state_25476;
(statearr_25514[(16)] = inst_25430__$1);

(statearr_25514[(28)] = inst_25426);

return statearr_25514;
})();
if(inst_25433){
var statearr_25515_25591 = state_25476__$1;
(statearr_25515_25591[(1)] = (32));

} else {
var statearr_25516_25592 = state_25476__$1;
(statearr_25516_25592[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (44))){
var inst_25452 = (state_25476[(21)]);
var inst_25465 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25452);
var inst_25466 = cljs.core.pr_str.call(null,inst_25465);
var inst_25467 = [cljs.core.str("not required: "),cljs.core.str(inst_25466)].join('');
var inst_25468 = figwheel.client.utils.log.call(null,inst_25467);
var state_25476__$1 = state_25476;
var statearr_25517_25593 = state_25476__$1;
(statearr_25517_25593[(2)] = inst_25468);

(statearr_25517_25593[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (6))){
var inst_25371 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25518_25594 = state_25476__$1;
(statearr_25518_25594[(2)] = inst_25371);

(statearr_25518_25594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (28))){
var inst_25396 = (state_25476[(26)]);
var inst_25423 = (state_25476[(2)]);
var inst_25424 = cljs.core.not_empty.call(null,inst_25396);
var state_25476__$1 = (function (){var statearr_25519 = state_25476;
(statearr_25519[(29)] = inst_25423);

return statearr_25519;
})();
if(cljs.core.truth_(inst_25424)){
var statearr_25520_25595 = state_25476__$1;
(statearr_25520_25595[(1)] = (29));

} else {
var statearr_25521_25596 = state_25476__$1;
(statearr_25521_25596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (25))){
var inst_25394 = (state_25476[(23)]);
var inst_25410 = (state_25476[(2)]);
var inst_25411 = cljs.core.not_empty.call(null,inst_25394);
var state_25476__$1 = (function (){var statearr_25522 = state_25476;
(statearr_25522[(30)] = inst_25410);

return statearr_25522;
})();
if(cljs.core.truth_(inst_25411)){
var statearr_25523_25597 = state_25476__$1;
(statearr_25523_25597[(1)] = (26));

} else {
var statearr_25524_25598 = state_25476__$1;
(statearr_25524_25598[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (34))){
var inst_25445 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
if(cljs.core.truth_(inst_25445)){
var statearr_25525_25599 = state_25476__$1;
(statearr_25525_25599[(1)] = (38));

} else {
var statearr_25526_25600 = state_25476__$1;
(statearr_25526_25600[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (17))){
var state_25476__$1 = state_25476;
var statearr_25527_25601 = state_25476__$1;
(statearr_25527_25601[(2)] = recompile_dependents);

(statearr_25527_25601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (3))){
var state_25476__$1 = state_25476;
var statearr_25528_25602 = state_25476__$1;
(statearr_25528_25602[(2)] = null);

(statearr_25528_25602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (12))){
var inst_25367 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25529_25603 = state_25476__$1;
(statearr_25529_25603[(2)] = inst_25367);

(statearr_25529_25603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (2))){
var inst_25329 = (state_25476[(13)]);
var inst_25336 = cljs.core.seq.call(null,inst_25329);
var inst_25337 = inst_25336;
var inst_25338 = null;
var inst_25339 = (0);
var inst_25340 = (0);
var state_25476__$1 = (function (){var statearr_25530 = state_25476;
(statearr_25530[(7)] = inst_25339);

(statearr_25530[(8)] = inst_25338);

(statearr_25530[(9)] = inst_25337);

(statearr_25530[(10)] = inst_25340);

return statearr_25530;
})();
var statearr_25531_25604 = state_25476__$1;
(statearr_25531_25604[(2)] = null);

(statearr_25531_25604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (23))){
var inst_25396 = (state_25476[(26)]);
var inst_25394 = (state_25476[(23)]);
var inst_25390 = (state_25476[(19)]);
var inst_25398 = (state_25476[(24)]);
var inst_25393 = (state_25476[(25)]);
var inst_25401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25403 = (function (){var all_files = inst_25390;
var res_SINGLEQUOTE_ = inst_25393;
var res = inst_25394;
var files_not_loaded = inst_25396;
var dependencies_that_loaded = inst_25398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25390,inst_25398,inst_25393,inst_25401,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25402){
var map__25532 = p__25402;
var map__25532__$1 = ((((!((map__25532 == null)))?((((map__25532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25532):map__25532);
var request_url = cljs.core.get.call(null,map__25532__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25390,inst_25398,inst_25393,inst_25401,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25404 = cljs.core.reverse.call(null,inst_25398);
var inst_25405 = cljs.core.map.call(null,inst_25403,inst_25404);
var inst_25406 = cljs.core.pr_str.call(null,inst_25405);
var inst_25407 = figwheel.client.utils.log.call(null,inst_25406);
var state_25476__$1 = (function (){var statearr_25534 = state_25476;
(statearr_25534[(31)] = inst_25401);

return statearr_25534;
})();
var statearr_25535_25605 = state_25476__$1;
(statearr_25535_25605[(2)] = inst_25407);

(statearr_25535_25605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (35))){
var state_25476__$1 = state_25476;
var statearr_25536_25606 = state_25476__$1;
(statearr_25536_25606[(2)] = true);

(statearr_25536_25606[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (19))){
var inst_25380 = (state_25476[(12)]);
var inst_25386 = figwheel.client.file_reloading.expand_files.call(null,inst_25380);
var state_25476__$1 = state_25476;
var statearr_25537_25607 = state_25476__$1;
(statearr_25537_25607[(2)] = inst_25386);

(statearr_25537_25607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (11))){
var state_25476__$1 = state_25476;
var statearr_25538_25608 = state_25476__$1;
(statearr_25538_25608[(2)] = null);

(statearr_25538_25608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (9))){
var inst_25369 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25539_25609 = state_25476__$1;
(statearr_25539_25609[(2)] = inst_25369);

(statearr_25539_25609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (5))){
var inst_25339 = (state_25476[(7)]);
var inst_25340 = (state_25476[(10)]);
var inst_25342 = (inst_25340 < inst_25339);
var inst_25343 = inst_25342;
var state_25476__$1 = state_25476;
if(cljs.core.truth_(inst_25343)){
var statearr_25540_25610 = state_25476__$1;
(statearr_25540_25610[(1)] = (7));

} else {
var statearr_25541_25611 = state_25476__$1;
(statearr_25541_25611[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (14))){
var inst_25350 = (state_25476[(22)]);
var inst_25359 = cljs.core.first.call(null,inst_25350);
var inst_25360 = figwheel.client.file_reloading.eval_body.call(null,inst_25359,opts);
var inst_25361 = cljs.core.next.call(null,inst_25350);
var inst_25337 = inst_25361;
var inst_25338 = null;
var inst_25339 = (0);
var inst_25340 = (0);
var state_25476__$1 = (function (){var statearr_25542 = state_25476;
(statearr_25542[(7)] = inst_25339);

(statearr_25542[(8)] = inst_25338);

(statearr_25542[(9)] = inst_25337);

(statearr_25542[(32)] = inst_25360);

(statearr_25542[(10)] = inst_25340);

return statearr_25542;
})();
var statearr_25543_25612 = state_25476__$1;
(statearr_25543_25612[(2)] = null);

(statearr_25543_25612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (45))){
var state_25476__$1 = state_25476;
var statearr_25544_25613 = state_25476__$1;
(statearr_25544_25613[(2)] = null);

(statearr_25544_25613[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (26))){
var inst_25396 = (state_25476[(26)]);
var inst_25394 = (state_25476[(23)]);
var inst_25390 = (state_25476[(19)]);
var inst_25398 = (state_25476[(24)]);
var inst_25393 = (state_25476[(25)]);
var inst_25413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25415 = (function (){var all_files = inst_25390;
var res_SINGLEQUOTE_ = inst_25393;
var res = inst_25394;
var files_not_loaded = inst_25396;
var dependencies_that_loaded = inst_25398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25390,inst_25398,inst_25393,inst_25413,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25414){
var map__25545 = p__25414;
var map__25545__$1 = ((((!((map__25545 == null)))?((((map__25545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25545):map__25545);
var namespace = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25390,inst_25398,inst_25393,inst_25413,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25416 = cljs.core.map.call(null,inst_25415,inst_25394);
var inst_25417 = cljs.core.pr_str.call(null,inst_25416);
var inst_25418 = figwheel.client.utils.log.call(null,inst_25417);
var inst_25419 = (function (){var all_files = inst_25390;
var res_SINGLEQUOTE_ = inst_25393;
var res = inst_25394;
var files_not_loaded = inst_25396;
var dependencies_that_loaded = inst_25398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25390,inst_25398,inst_25393,inst_25413,inst_25415,inst_25416,inst_25417,inst_25418,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25394,inst_25390,inst_25398,inst_25393,inst_25413,inst_25415,inst_25416,inst_25417,inst_25418,state_val_25477,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25420 = setTimeout(inst_25419,(10));
var state_25476__$1 = (function (){var statearr_25547 = state_25476;
(statearr_25547[(33)] = inst_25418);

(statearr_25547[(34)] = inst_25413);

return statearr_25547;
})();
var statearr_25548_25614 = state_25476__$1;
(statearr_25548_25614[(2)] = inst_25420);

(statearr_25548_25614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (16))){
var state_25476__$1 = state_25476;
var statearr_25549_25615 = state_25476__$1;
(statearr_25549_25615[(2)] = reload_dependents);

(statearr_25549_25615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (38))){
var inst_25430 = (state_25476[(16)]);
var inst_25447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25430);
var state_25476__$1 = state_25476;
var statearr_25550_25616 = state_25476__$1;
(statearr_25550_25616[(2)] = inst_25447);

(statearr_25550_25616[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (30))){
var state_25476__$1 = state_25476;
var statearr_25551_25617 = state_25476__$1;
(statearr_25551_25617[(2)] = null);

(statearr_25551_25617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (10))){
var inst_25350 = (state_25476[(22)]);
var inst_25352 = cljs.core.chunked_seq_QMARK_.call(null,inst_25350);
var state_25476__$1 = state_25476;
if(inst_25352){
var statearr_25552_25618 = state_25476__$1;
(statearr_25552_25618[(1)] = (13));

} else {
var statearr_25553_25619 = state_25476__$1;
(statearr_25553_25619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (18))){
var inst_25384 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
if(cljs.core.truth_(inst_25384)){
var statearr_25554_25620 = state_25476__$1;
(statearr_25554_25620[(1)] = (19));

} else {
var statearr_25555_25621 = state_25476__$1;
(statearr_25555_25621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (42))){
var state_25476__$1 = state_25476;
var statearr_25556_25622 = state_25476__$1;
(statearr_25556_25622[(2)] = null);

(statearr_25556_25622[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (37))){
var inst_25442 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25557_25623 = state_25476__$1;
(statearr_25557_25623[(2)] = inst_25442);

(statearr_25557_25623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (8))){
var inst_25337 = (state_25476[(9)]);
var inst_25350 = (state_25476[(22)]);
var inst_25350__$1 = cljs.core.seq.call(null,inst_25337);
var state_25476__$1 = (function (){var statearr_25558 = state_25476;
(statearr_25558[(22)] = inst_25350__$1);

return statearr_25558;
})();
if(inst_25350__$1){
var statearr_25559_25624 = state_25476__$1;
(statearr_25559_25624[(1)] = (10));

} else {
var statearr_25560_25625 = state_25476__$1;
(statearr_25560_25625[(1)] = (11));

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
});})(c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18833__auto__,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto____0 = (function (){
var statearr_25564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25564[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto__);

(statearr_25564[(1)] = (1));

return statearr_25564;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto____1 = (function (state_25476){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_25476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e25565){if((e25565 instanceof Object)){
var ex__18837__auto__ = e25565;
var statearr_25566_25626 = state_25476;
(statearr_25566_25626[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25627 = state_25476;
state_25476 = G__25627;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto__ = function(state_25476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto____1.call(this,state_25476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18856__auto__ = (function (){var statearr_25567 = f__18855__auto__.call(null);
(statearr_25567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_25567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__,map__25322,map__25322__$1,opts,before_jsload,on_jsload,reload_dependents,map__25323,map__25323__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18854__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25630,link){
var map__25633 = p__25630;
var map__25633__$1 = ((((!((map__25633 == null)))?((((map__25633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25633):map__25633);
var file = cljs.core.get.call(null,map__25633__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25633,map__25633__$1,file){
return (function (p1__25628_SHARP_,p2__25629_SHARP_){
if(cljs.core._EQ_.call(null,p1__25628_SHARP_,p2__25629_SHARP_)){
return p1__25628_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25633,map__25633__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25639){
var map__25640 = p__25639;
var map__25640__$1 = ((((!((map__25640 == null)))?((((map__25640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25640):map__25640);
var match_length = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25635_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25635_SHARP_);
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
var args25642 = [];
var len__17887__auto___25645 = arguments.length;
var i__17888__auto___25646 = (0);
while(true){
if((i__17888__auto___25646 < len__17887__auto___25645)){
args25642.push((arguments[i__17888__auto___25646]));

var G__25647 = (i__17888__auto___25646 + (1));
i__17888__auto___25646 = G__25647;
continue;
} else {
}
break;
}

var G__25644 = args25642.length;
switch (G__25644) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25642.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25649_SHARP_,p2__25650_SHARP_){
return cljs.core.assoc.call(null,p1__25649_SHARP_,cljs.core.get.call(null,p2__25650_SHARP_,key),p2__25650_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25651){
var map__25654 = p__25651;
var map__25654__$1 = ((((!((map__25654 == null)))?((((map__25654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25654):map__25654);
var f_data = map__25654__$1;
var file = cljs.core.get.call(null,map__25654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25656,files_msg){
var map__25663 = p__25656;
var map__25663__$1 = ((((!((map__25663 == null)))?((((map__25663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25663):map__25663);
var opts = map__25663__$1;
var on_cssload = cljs.core.get.call(null,map__25663__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25665_25669 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25666_25670 = null;
var count__25667_25671 = (0);
var i__25668_25672 = (0);
while(true){
if((i__25668_25672 < count__25667_25671)){
var f_25673 = cljs.core._nth.call(null,chunk__25666_25670,i__25668_25672);
figwheel.client.file_reloading.reload_css_file.call(null,f_25673);

var G__25674 = seq__25665_25669;
var G__25675 = chunk__25666_25670;
var G__25676 = count__25667_25671;
var G__25677 = (i__25668_25672 + (1));
seq__25665_25669 = G__25674;
chunk__25666_25670 = G__25675;
count__25667_25671 = G__25676;
i__25668_25672 = G__25677;
continue;
} else {
var temp__4425__auto___25678 = cljs.core.seq.call(null,seq__25665_25669);
if(temp__4425__auto___25678){
var seq__25665_25679__$1 = temp__4425__auto___25678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25665_25679__$1)){
var c__17631__auto___25680 = cljs.core.chunk_first.call(null,seq__25665_25679__$1);
var G__25681 = cljs.core.chunk_rest.call(null,seq__25665_25679__$1);
var G__25682 = c__17631__auto___25680;
var G__25683 = cljs.core.count.call(null,c__17631__auto___25680);
var G__25684 = (0);
seq__25665_25669 = G__25681;
chunk__25666_25670 = G__25682;
count__25667_25671 = G__25683;
i__25668_25672 = G__25684;
continue;
} else {
var f_25685 = cljs.core.first.call(null,seq__25665_25679__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25685);

var G__25686 = cljs.core.next.call(null,seq__25665_25679__$1);
var G__25687 = null;
var G__25688 = (0);
var G__25689 = (0);
seq__25665_25669 = G__25686;
chunk__25666_25670 = G__25687;
count__25667_25671 = G__25688;
i__25668_25672 = G__25689;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25663,map__25663__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25663,map__25663__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map