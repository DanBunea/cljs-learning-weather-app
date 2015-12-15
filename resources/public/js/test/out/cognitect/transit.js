// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__19887_19891 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19888_19892 = null;
var count__19889_19893 = (0);
var i__19890_19894 = (0);
while(true){
if((i__19890_19894 < count__19889_19893)){
var k_19895 = cljs.core._nth.call(null,chunk__19888_19892,i__19890_19894);
var v_19896 = (b[k_19895]);
(a[k_19895] = v_19896);

var G__19897 = seq__19887_19891;
var G__19898 = chunk__19888_19892;
var G__19899 = count__19889_19893;
var G__19900 = (i__19890_19894 + (1));
seq__19887_19891 = G__19897;
chunk__19888_19892 = G__19898;
count__19889_19893 = G__19899;
i__19890_19894 = G__19900;
continue;
} else {
var temp__4425__auto___19901 = cljs.core.seq.call(null,seq__19887_19891);
if(temp__4425__auto___19901){
var seq__19887_19902__$1 = temp__4425__auto___19901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19887_19902__$1)){
var c__17631__auto___19903 = cljs.core.chunk_first.call(null,seq__19887_19902__$1);
var G__19904 = cljs.core.chunk_rest.call(null,seq__19887_19902__$1);
var G__19905 = c__17631__auto___19903;
var G__19906 = cljs.core.count.call(null,c__17631__auto___19903);
var G__19907 = (0);
seq__19887_19891 = G__19904;
chunk__19888_19892 = G__19905;
count__19889_19893 = G__19906;
i__19890_19894 = G__19907;
continue;
} else {
var k_19908 = cljs.core.first.call(null,seq__19887_19902__$1);
var v_19909 = (b[k_19908]);
(a[k_19908] = v_19909);

var G__19910 = cljs.core.next.call(null,seq__19887_19902__$1);
var G__19911 = null;
var G__19912 = (0);
var G__19913 = (0);
seq__19887_19891 = G__19910;
chunk__19888_19892 = G__19911;
count__19889_19893 = G__19912;
i__19890_19894 = G__19913;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args19914 = [];
var len__17887__auto___19917 = arguments.length;
var i__17888__auto___19918 = (0);
while(true){
if((i__17888__auto___19918 < len__17887__auto___19917)){
args19914.push((arguments[i__17888__auto___19918]));

var G__19919 = (i__17888__auto___19918 + (1));
i__17888__auto___19918 = G__19919;
continue;
} else {
}
break;
}

var G__19916 = args19914.length;
switch (G__19916) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19914.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__19921 = (i + (2));
var G__19922 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19921;
ret = G__19922;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19923_19927 = cljs.core.seq.call(null,v);
var chunk__19924_19928 = null;
var count__19925_19929 = (0);
var i__19926_19930 = (0);
while(true){
if((i__19926_19930 < count__19925_19929)){
var x_19931 = cljs.core._nth.call(null,chunk__19924_19928,i__19926_19930);
ret.push(x_19931);

var G__19932 = seq__19923_19927;
var G__19933 = chunk__19924_19928;
var G__19934 = count__19925_19929;
var G__19935 = (i__19926_19930 + (1));
seq__19923_19927 = G__19932;
chunk__19924_19928 = G__19933;
count__19925_19929 = G__19934;
i__19926_19930 = G__19935;
continue;
} else {
var temp__4425__auto___19936 = cljs.core.seq.call(null,seq__19923_19927);
if(temp__4425__auto___19936){
var seq__19923_19937__$1 = temp__4425__auto___19936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19923_19937__$1)){
var c__17631__auto___19938 = cljs.core.chunk_first.call(null,seq__19923_19937__$1);
var G__19939 = cljs.core.chunk_rest.call(null,seq__19923_19937__$1);
var G__19940 = c__17631__auto___19938;
var G__19941 = cljs.core.count.call(null,c__17631__auto___19938);
var G__19942 = (0);
seq__19923_19927 = G__19939;
chunk__19924_19928 = G__19940;
count__19925_19929 = G__19941;
i__19926_19930 = G__19942;
continue;
} else {
var x_19943 = cljs.core.first.call(null,seq__19923_19937__$1);
ret.push(x_19943);

var G__19944 = cljs.core.next.call(null,seq__19923_19937__$1);
var G__19945 = null;
var G__19946 = (0);
var G__19947 = (0);
seq__19923_19927 = G__19944;
chunk__19924_19928 = G__19945;
count__19925_19929 = G__19946;
i__19926_19930 = G__19947;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19948_19952 = cljs.core.seq.call(null,v);
var chunk__19949_19953 = null;
var count__19950_19954 = (0);
var i__19951_19955 = (0);
while(true){
if((i__19951_19955 < count__19950_19954)){
var x_19956 = cljs.core._nth.call(null,chunk__19949_19953,i__19951_19955);
ret.push(x_19956);

var G__19957 = seq__19948_19952;
var G__19958 = chunk__19949_19953;
var G__19959 = count__19950_19954;
var G__19960 = (i__19951_19955 + (1));
seq__19948_19952 = G__19957;
chunk__19949_19953 = G__19958;
count__19950_19954 = G__19959;
i__19951_19955 = G__19960;
continue;
} else {
var temp__4425__auto___19961 = cljs.core.seq.call(null,seq__19948_19952);
if(temp__4425__auto___19961){
var seq__19948_19962__$1 = temp__4425__auto___19961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19948_19962__$1)){
var c__17631__auto___19963 = cljs.core.chunk_first.call(null,seq__19948_19962__$1);
var G__19964 = cljs.core.chunk_rest.call(null,seq__19948_19962__$1);
var G__19965 = c__17631__auto___19963;
var G__19966 = cljs.core.count.call(null,c__17631__auto___19963);
var G__19967 = (0);
seq__19948_19952 = G__19964;
chunk__19949_19953 = G__19965;
count__19950_19954 = G__19966;
i__19951_19955 = G__19967;
continue;
} else {
var x_19968 = cljs.core.first.call(null,seq__19948_19962__$1);
ret.push(x_19968);

var G__19969 = cljs.core.next.call(null,seq__19948_19962__$1);
var G__19970 = null;
var G__19971 = (0);
var G__19972 = (0);
seq__19948_19952 = G__19969;
chunk__19949_19953 = G__19970;
count__19950_19954 = G__19971;
i__19951_19955 = G__19972;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19973_19977 = cljs.core.seq.call(null,v);
var chunk__19974_19978 = null;
var count__19975_19979 = (0);
var i__19976_19980 = (0);
while(true){
if((i__19976_19980 < count__19975_19979)){
var x_19981 = cljs.core._nth.call(null,chunk__19974_19978,i__19976_19980);
ret.push(x_19981);

var G__19982 = seq__19973_19977;
var G__19983 = chunk__19974_19978;
var G__19984 = count__19975_19979;
var G__19985 = (i__19976_19980 + (1));
seq__19973_19977 = G__19982;
chunk__19974_19978 = G__19983;
count__19975_19979 = G__19984;
i__19976_19980 = G__19985;
continue;
} else {
var temp__4425__auto___19986 = cljs.core.seq.call(null,seq__19973_19977);
if(temp__4425__auto___19986){
var seq__19973_19987__$1 = temp__4425__auto___19986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19973_19987__$1)){
var c__17631__auto___19988 = cljs.core.chunk_first.call(null,seq__19973_19987__$1);
var G__19989 = cljs.core.chunk_rest.call(null,seq__19973_19987__$1);
var G__19990 = c__17631__auto___19988;
var G__19991 = cljs.core.count.call(null,c__17631__auto___19988);
var G__19992 = (0);
seq__19973_19977 = G__19989;
chunk__19974_19978 = G__19990;
count__19975_19979 = G__19991;
i__19976_19980 = G__19992;
continue;
} else {
var x_19993 = cljs.core.first.call(null,seq__19973_19987__$1);
ret.push(x_19993);

var G__19994 = cljs.core.next.call(null,seq__19973_19987__$1);
var G__19995 = null;
var G__19996 = (0);
var G__19997 = (0);
seq__19973_19977 = G__19994;
chunk__19974_19978 = G__19995;
count__19975_19979 = G__19996;
i__19976_19980 = G__19997;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args19998 = [];
var len__17887__auto___20009 = arguments.length;
var i__17888__auto___20010 = (0);
while(true){
if((i__17888__auto___20010 < len__17887__auto___20009)){
args19998.push((arguments[i__17888__auto___20010]));

var G__20011 = (i__17888__auto___20010 + (1));
i__17888__auto___20010 = G__20011;
continue;
} else {
}
break;
}

var G__20000 = args19998.length;
switch (G__20000) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19998.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20001 = obj;
G__20001.push(kfn.call(null,k),vfn.call(null,v));

return G__20001;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20002 = cljs.core.clone.call(null,handlers);
x20002.forEach = ((function (x20002,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20003 = cljs.core.seq.call(null,coll);
var chunk__20004 = null;
var count__20005 = (0);
var i__20006 = (0);
while(true){
if((i__20006 < count__20005)){
var vec__20007 = cljs.core._nth.call(null,chunk__20004,i__20006);
var k = cljs.core.nth.call(null,vec__20007,(0),null);
var v = cljs.core.nth.call(null,vec__20007,(1),null);
f.call(null,v,k);

var G__20013 = seq__20003;
var G__20014 = chunk__20004;
var G__20015 = count__20005;
var G__20016 = (i__20006 + (1));
seq__20003 = G__20013;
chunk__20004 = G__20014;
count__20005 = G__20015;
i__20006 = G__20016;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20003);
if(temp__4425__auto__){
var seq__20003__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20003__$1)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,seq__20003__$1);
var G__20017 = cljs.core.chunk_rest.call(null,seq__20003__$1);
var G__20018 = c__17631__auto__;
var G__20019 = cljs.core.count.call(null,c__17631__auto__);
var G__20020 = (0);
seq__20003 = G__20017;
chunk__20004 = G__20018;
count__20005 = G__20019;
i__20006 = G__20020;
continue;
} else {
var vec__20008 = cljs.core.first.call(null,seq__20003__$1);
var k = cljs.core.nth.call(null,vec__20008,(0),null);
var v = cljs.core.nth.call(null,vec__20008,(1),null);
f.call(null,v,k);

var G__20021 = cljs.core.next.call(null,seq__20003__$1);
var G__20022 = null;
var G__20023 = (0);
var G__20024 = (0);
seq__20003 = G__20021;
chunk__20004 = G__20022;
count__20005 = G__20023;
i__20006 = G__20024;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20002,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20002;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20025 = [];
var len__17887__auto___20031 = arguments.length;
var i__17888__auto___20032 = (0);
while(true){
if((i__17888__auto___20032 < len__17887__auto___20031)){
args20025.push((arguments[i__17888__auto___20032]));

var G__20033 = (i__17888__auto___20032 + (1));
i__17888__auto___20032 = G__20033;
continue;
} else {
}
break;
}

var G__20027 = args20025.length;
switch (G__20027) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20025.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20028 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20029){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20029 = meta20029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20030,meta20029__$1){
var self__ = this;
var _20030__$1 = this;
return (new cognitect.transit.t_cognitect$transit20028(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20029__$1));
});

cognitect.transit.t_cognitect$transit20028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20030){
var self__ = this;
var _20030__$1 = this;
return self__.meta20029;
});

cognitect.transit.t_cognitect$transit20028.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20028.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20028.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20028.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20029","meta20029",875679944,null)], null);
});

cognitect.transit.t_cognitect$transit20028.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20028.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20028";

cognitect.transit.t_cognitect$transit20028.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cognitect.transit/t_cognitect$transit20028");
});

cognitect.transit.__GT_t_cognitect$transit20028 = (function cognitect$transit$__GT_t_cognitect$transit20028(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20029){
return (new cognitect.transit.t_cognitect$transit20028(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20029));
});

}

return (new cognitect.transit.t_cognitect$transit20028(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16828__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map