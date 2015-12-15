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
var seq__34275_34279 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__34276_34280 = null;
var count__34277_34281 = (0);
var i__34278_34282 = (0);
while(true){
if((i__34278_34282 < count__34277_34281)){
var k_34283 = cljs.core._nth.call(null,chunk__34276_34280,i__34278_34282);
var v_34284 = (b[k_34283]);
(a[k_34283] = v_34284);

var G__34285 = seq__34275_34279;
var G__34286 = chunk__34276_34280;
var G__34287 = count__34277_34281;
var G__34288 = (i__34278_34282 + (1));
seq__34275_34279 = G__34285;
chunk__34276_34280 = G__34286;
count__34277_34281 = G__34287;
i__34278_34282 = G__34288;
continue;
} else {
var temp__4425__auto___34289 = cljs.core.seq.call(null,seq__34275_34279);
if(temp__4425__auto___34289){
var seq__34275_34290__$1 = temp__4425__auto___34289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34275_34290__$1)){
var c__17630__auto___34291 = cljs.core.chunk_first.call(null,seq__34275_34290__$1);
var G__34292 = cljs.core.chunk_rest.call(null,seq__34275_34290__$1);
var G__34293 = c__17630__auto___34291;
var G__34294 = cljs.core.count.call(null,c__17630__auto___34291);
var G__34295 = (0);
seq__34275_34279 = G__34292;
chunk__34276_34280 = G__34293;
count__34277_34281 = G__34294;
i__34278_34282 = G__34295;
continue;
} else {
var k_34296 = cljs.core.first.call(null,seq__34275_34290__$1);
var v_34297 = (b[k_34296]);
(a[k_34296] = v_34297);

var G__34298 = cljs.core.next.call(null,seq__34275_34290__$1);
var G__34299 = null;
var G__34300 = (0);
var G__34301 = (0);
seq__34275_34279 = G__34298;
chunk__34276_34280 = G__34299;
count__34277_34281 = G__34300;
i__34278_34282 = G__34301;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/VectorBuilder");
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
var args34302 = [];
var len__17885__auto___34305 = arguments.length;
var i__17886__auto___34306 = (0);
while(true){
if((i__17886__auto___34306 < len__17885__auto___34305)){
args34302.push((arguments[i__17886__auto___34306]));

var G__34307 = (i__17886__auto___34306 + (1));
i__17886__auto___34306 = G__34307;
continue;
} else {
}
break;
}

var G__34304 = args34302.length;
switch (G__34304) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34302.length)].join('')));

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
var G__34309 = (i + (2));
var G__34310 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__34309;
ret = G__34310;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/SymbolHandler");
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
var seq__34311_34315 = cljs.core.seq.call(null,v);
var chunk__34312_34316 = null;
var count__34313_34317 = (0);
var i__34314_34318 = (0);
while(true){
if((i__34314_34318 < count__34313_34317)){
var x_34319 = cljs.core._nth.call(null,chunk__34312_34316,i__34314_34318);
ret.push(x_34319);

var G__34320 = seq__34311_34315;
var G__34321 = chunk__34312_34316;
var G__34322 = count__34313_34317;
var G__34323 = (i__34314_34318 + (1));
seq__34311_34315 = G__34320;
chunk__34312_34316 = G__34321;
count__34313_34317 = G__34322;
i__34314_34318 = G__34323;
continue;
} else {
var temp__4425__auto___34324 = cljs.core.seq.call(null,seq__34311_34315);
if(temp__4425__auto___34324){
var seq__34311_34325__$1 = temp__4425__auto___34324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34311_34325__$1)){
var c__17630__auto___34326 = cljs.core.chunk_first.call(null,seq__34311_34325__$1);
var G__34327 = cljs.core.chunk_rest.call(null,seq__34311_34325__$1);
var G__34328 = c__17630__auto___34326;
var G__34329 = cljs.core.count.call(null,c__17630__auto___34326);
var G__34330 = (0);
seq__34311_34315 = G__34327;
chunk__34312_34316 = G__34328;
count__34313_34317 = G__34329;
i__34314_34318 = G__34330;
continue;
} else {
var x_34331 = cljs.core.first.call(null,seq__34311_34325__$1);
ret.push(x_34331);

var G__34332 = cljs.core.next.call(null,seq__34311_34325__$1);
var G__34333 = null;
var G__34334 = (0);
var G__34335 = (0);
seq__34311_34315 = G__34332;
chunk__34312_34316 = G__34333;
count__34313_34317 = G__34334;
i__34314_34318 = G__34335;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/MapHandler");
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
var seq__34336_34340 = cljs.core.seq.call(null,v);
var chunk__34337_34341 = null;
var count__34338_34342 = (0);
var i__34339_34343 = (0);
while(true){
if((i__34339_34343 < count__34338_34342)){
var x_34344 = cljs.core._nth.call(null,chunk__34337_34341,i__34339_34343);
ret.push(x_34344);

var G__34345 = seq__34336_34340;
var G__34346 = chunk__34337_34341;
var G__34347 = count__34338_34342;
var G__34348 = (i__34339_34343 + (1));
seq__34336_34340 = G__34345;
chunk__34337_34341 = G__34346;
count__34338_34342 = G__34347;
i__34339_34343 = G__34348;
continue;
} else {
var temp__4425__auto___34349 = cljs.core.seq.call(null,seq__34336_34340);
if(temp__4425__auto___34349){
var seq__34336_34350__$1 = temp__4425__auto___34349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34336_34350__$1)){
var c__17630__auto___34351 = cljs.core.chunk_first.call(null,seq__34336_34350__$1);
var G__34352 = cljs.core.chunk_rest.call(null,seq__34336_34350__$1);
var G__34353 = c__17630__auto___34351;
var G__34354 = cljs.core.count.call(null,c__17630__auto___34351);
var G__34355 = (0);
seq__34336_34340 = G__34352;
chunk__34337_34341 = G__34353;
count__34338_34342 = G__34354;
i__34339_34343 = G__34355;
continue;
} else {
var x_34356 = cljs.core.first.call(null,seq__34336_34350__$1);
ret.push(x_34356);

var G__34357 = cljs.core.next.call(null,seq__34336_34350__$1);
var G__34358 = null;
var G__34359 = (0);
var G__34360 = (0);
seq__34336_34340 = G__34357;
chunk__34337_34341 = G__34358;
count__34338_34342 = G__34359;
i__34339_34343 = G__34360;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/SetHandler");
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
var seq__34361_34365 = cljs.core.seq.call(null,v);
var chunk__34362_34366 = null;
var count__34363_34367 = (0);
var i__34364_34368 = (0);
while(true){
if((i__34364_34368 < count__34363_34367)){
var x_34369 = cljs.core._nth.call(null,chunk__34362_34366,i__34364_34368);
ret.push(x_34369);

var G__34370 = seq__34361_34365;
var G__34371 = chunk__34362_34366;
var G__34372 = count__34363_34367;
var G__34373 = (i__34364_34368 + (1));
seq__34361_34365 = G__34370;
chunk__34362_34366 = G__34371;
count__34363_34367 = G__34372;
i__34364_34368 = G__34373;
continue;
} else {
var temp__4425__auto___34374 = cljs.core.seq.call(null,seq__34361_34365);
if(temp__4425__auto___34374){
var seq__34361_34375__$1 = temp__4425__auto___34374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34361_34375__$1)){
var c__17630__auto___34376 = cljs.core.chunk_first.call(null,seq__34361_34375__$1);
var G__34377 = cljs.core.chunk_rest.call(null,seq__34361_34375__$1);
var G__34378 = c__17630__auto___34376;
var G__34379 = cljs.core.count.call(null,c__17630__auto___34376);
var G__34380 = (0);
seq__34361_34365 = G__34377;
chunk__34362_34366 = G__34378;
count__34363_34367 = G__34379;
i__34364_34368 = G__34380;
continue;
} else {
var x_34381 = cljs.core.first.call(null,seq__34361_34375__$1);
ret.push(x_34381);

var G__34382 = cljs.core.next.call(null,seq__34361_34375__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__34361_34365 = G__34382;
chunk__34362_34366 = G__34383;
count__34363_34367 = G__34384;
i__34364_34368 = G__34385;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/UUIDHandler");
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
var args34386 = [];
var len__17885__auto___34397 = arguments.length;
var i__17886__auto___34398 = (0);
while(true){
if((i__17886__auto___34398 < len__17885__auto___34397)){
args34386.push((arguments[i__17886__auto___34398]));

var G__34399 = (i__17886__auto___34398 + (1));
i__17886__auto___34398 = G__34399;
continue;
} else {
}
break;
}

var G__34388 = args34386.length;
switch (G__34388) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34386.length)].join('')));

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
var G__34389 = obj;
G__34389.push(kfn.call(null,k),vfn.call(null,v));

return G__34389;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x34390 = cljs.core.clone.call(null,handlers);
x34390.forEach = ((function (x34390,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__34391 = cljs.core.seq.call(null,coll);
var chunk__34392 = null;
var count__34393 = (0);
var i__34394 = (0);
while(true){
if((i__34394 < count__34393)){
var vec__34395 = cljs.core._nth.call(null,chunk__34392,i__34394);
var k = cljs.core.nth.call(null,vec__34395,(0),null);
var v = cljs.core.nth.call(null,vec__34395,(1),null);
f.call(null,v,k);

var G__34401 = seq__34391;
var G__34402 = chunk__34392;
var G__34403 = count__34393;
var G__34404 = (i__34394 + (1));
seq__34391 = G__34401;
chunk__34392 = G__34402;
count__34393 = G__34403;
i__34394 = G__34404;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34391);
if(temp__4425__auto__){
var seq__34391__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34391__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__34391__$1);
var G__34405 = cljs.core.chunk_rest.call(null,seq__34391__$1);
var G__34406 = c__17630__auto__;
var G__34407 = cljs.core.count.call(null,c__17630__auto__);
var G__34408 = (0);
seq__34391 = G__34405;
chunk__34392 = G__34406;
count__34393 = G__34407;
i__34394 = G__34408;
continue;
} else {
var vec__34396 = cljs.core.first.call(null,seq__34391__$1);
var k = cljs.core.nth.call(null,vec__34396,(0),null);
var v = cljs.core.nth.call(null,vec__34396,(1),null);
f.call(null,v,k);

var G__34409 = cljs.core.next.call(null,seq__34391__$1);
var G__34410 = null;
var G__34411 = (0);
var G__34412 = (0);
seq__34391 = G__34409;
chunk__34392 = G__34410;
count__34393 = G__34411;
i__34394 = G__34412;
continue;
}
} else {
return null;
}
}
break;
}
});})(x34390,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x34390;
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
var args34413 = [];
var len__17885__auto___34419 = arguments.length;
var i__17886__auto___34420 = (0);
while(true){
if((i__17886__auto___34420 < len__17885__auto___34419)){
args34413.push((arguments[i__17886__auto___34420]));

var G__34421 = (i__17886__auto___34420 + (1));
i__17886__auto___34420 = G__34421;
continue;
} else {
}
break;
}

var G__34415 = args34413.length;
switch (G__34415) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34413.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit34416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit34416 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34417){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta34417 = meta34417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit34416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34418,meta34417__$1){
var self__ = this;
var _34418__$1 = this;
return (new cognitect.transit.t_cognitect$transit34416(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta34417__$1));
});

cognitect.transit.t_cognitect$transit34416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34418){
var self__ = this;
var _34418__$1 = this;
return self__.meta34417;
});

cognitect.transit.t_cognitect$transit34416.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34416.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34416.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34416.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta34417","meta34417",719617664,null)], null);
});

cognitect.transit.t_cognitect$transit34416.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit34416.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit34416";

cognitect.transit.t_cognitect$transit34416.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/t_cognitect$transit34416");
});

cognitect.transit.__GT_t_cognitect$transit34416 = (function cognitect$transit$__GT_t_cognitect$transit34416(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34417){
return (new cognitect.transit.t_cognitect$transit34416(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34417));
});

}

return (new cognitect.transit.t_cognitect$transit34416(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__16826__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1450190099292