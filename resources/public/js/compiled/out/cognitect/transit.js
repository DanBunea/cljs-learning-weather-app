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
var seq__18217_18221 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18218_18222 = null;
var count__18219_18223 = (0);
var i__18220_18224 = (0);
while(true){
if((i__18220_18224 < count__18219_18223)){
var k_18225 = cljs.core._nth.call(null,chunk__18218_18222,i__18220_18224);
var v_18226 = (b[k_18225]);
(a[k_18225] = v_18226);

var G__18227 = seq__18217_18221;
var G__18228 = chunk__18218_18222;
var G__18229 = count__18219_18223;
var G__18230 = (i__18220_18224 + (1));
seq__18217_18221 = G__18227;
chunk__18218_18222 = G__18228;
count__18219_18223 = G__18229;
i__18220_18224 = G__18230;
continue;
} else {
var temp__4425__auto___18231 = cljs.core.seq.call(null,seq__18217_18221);
if(temp__4425__auto___18231){
var seq__18217_18232__$1 = temp__4425__auto___18231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18217_18232__$1)){
var c__17630__auto___18233 = cljs.core.chunk_first.call(null,seq__18217_18232__$1);
var G__18234 = cljs.core.chunk_rest.call(null,seq__18217_18232__$1);
var G__18235 = c__17630__auto___18233;
var G__18236 = cljs.core.count.call(null,c__17630__auto___18233);
var G__18237 = (0);
seq__18217_18221 = G__18234;
chunk__18218_18222 = G__18235;
count__18219_18223 = G__18236;
i__18220_18224 = G__18237;
continue;
} else {
var k_18238 = cljs.core.first.call(null,seq__18217_18232__$1);
var v_18239 = (b[k_18238]);
(a[k_18238] = v_18239);

var G__18240 = cljs.core.next.call(null,seq__18217_18232__$1);
var G__18241 = null;
var G__18242 = (0);
var G__18243 = (0);
seq__18217_18221 = G__18240;
chunk__18218_18222 = G__18241;
count__18219_18223 = G__18242;
i__18220_18224 = G__18243;
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
var args18244 = [];
var len__17885__auto___18247 = arguments.length;
var i__17886__auto___18248 = (0);
while(true){
if((i__17886__auto___18248 < len__17885__auto___18247)){
args18244.push((arguments[i__17886__auto___18248]));

var G__18249 = (i__17886__auto___18248 + (1));
i__17886__auto___18248 = G__18249;
continue;
} else {
}
break;
}

var G__18246 = args18244.length;
switch (G__18246) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18244.length)].join('')));

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
var G__18251 = (i + (2));
var G__18252 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18251;
ret = G__18252;
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
var seq__18253_18257 = cljs.core.seq.call(null,v);
var chunk__18254_18258 = null;
var count__18255_18259 = (0);
var i__18256_18260 = (0);
while(true){
if((i__18256_18260 < count__18255_18259)){
var x_18261 = cljs.core._nth.call(null,chunk__18254_18258,i__18256_18260);
ret.push(x_18261);

var G__18262 = seq__18253_18257;
var G__18263 = chunk__18254_18258;
var G__18264 = count__18255_18259;
var G__18265 = (i__18256_18260 + (1));
seq__18253_18257 = G__18262;
chunk__18254_18258 = G__18263;
count__18255_18259 = G__18264;
i__18256_18260 = G__18265;
continue;
} else {
var temp__4425__auto___18266 = cljs.core.seq.call(null,seq__18253_18257);
if(temp__4425__auto___18266){
var seq__18253_18267__$1 = temp__4425__auto___18266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18253_18267__$1)){
var c__17630__auto___18268 = cljs.core.chunk_first.call(null,seq__18253_18267__$1);
var G__18269 = cljs.core.chunk_rest.call(null,seq__18253_18267__$1);
var G__18270 = c__17630__auto___18268;
var G__18271 = cljs.core.count.call(null,c__17630__auto___18268);
var G__18272 = (0);
seq__18253_18257 = G__18269;
chunk__18254_18258 = G__18270;
count__18255_18259 = G__18271;
i__18256_18260 = G__18272;
continue;
} else {
var x_18273 = cljs.core.first.call(null,seq__18253_18267__$1);
ret.push(x_18273);

var G__18274 = cljs.core.next.call(null,seq__18253_18267__$1);
var G__18275 = null;
var G__18276 = (0);
var G__18277 = (0);
seq__18253_18257 = G__18274;
chunk__18254_18258 = G__18275;
count__18255_18259 = G__18276;
i__18256_18260 = G__18277;
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
var seq__18278_18282 = cljs.core.seq.call(null,v);
var chunk__18279_18283 = null;
var count__18280_18284 = (0);
var i__18281_18285 = (0);
while(true){
if((i__18281_18285 < count__18280_18284)){
var x_18286 = cljs.core._nth.call(null,chunk__18279_18283,i__18281_18285);
ret.push(x_18286);

var G__18287 = seq__18278_18282;
var G__18288 = chunk__18279_18283;
var G__18289 = count__18280_18284;
var G__18290 = (i__18281_18285 + (1));
seq__18278_18282 = G__18287;
chunk__18279_18283 = G__18288;
count__18280_18284 = G__18289;
i__18281_18285 = G__18290;
continue;
} else {
var temp__4425__auto___18291 = cljs.core.seq.call(null,seq__18278_18282);
if(temp__4425__auto___18291){
var seq__18278_18292__$1 = temp__4425__auto___18291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18278_18292__$1)){
var c__17630__auto___18293 = cljs.core.chunk_first.call(null,seq__18278_18292__$1);
var G__18294 = cljs.core.chunk_rest.call(null,seq__18278_18292__$1);
var G__18295 = c__17630__auto___18293;
var G__18296 = cljs.core.count.call(null,c__17630__auto___18293);
var G__18297 = (0);
seq__18278_18282 = G__18294;
chunk__18279_18283 = G__18295;
count__18280_18284 = G__18296;
i__18281_18285 = G__18297;
continue;
} else {
var x_18298 = cljs.core.first.call(null,seq__18278_18292__$1);
ret.push(x_18298);

var G__18299 = cljs.core.next.call(null,seq__18278_18292__$1);
var G__18300 = null;
var G__18301 = (0);
var G__18302 = (0);
seq__18278_18282 = G__18299;
chunk__18279_18283 = G__18300;
count__18280_18284 = G__18301;
i__18281_18285 = G__18302;
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
var seq__18303_18307 = cljs.core.seq.call(null,v);
var chunk__18304_18308 = null;
var count__18305_18309 = (0);
var i__18306_18310 = (0);
while(true){
if((i__18306_18310 < count__18305_18309)){
var x_18311 = cljs.core._nth.call(null,chunk__18304_18308,i__18306_18310);
ret.push(x_18311);

var G__18312 = seq__18303_18307;
var G__18313 = chunk__18304_18308;
var G__18314 = count__18305_18309;
var G__18315 = (i__18306_18310 + (1));
seq__18303_18307 = G__18312;
chunk__18304_18308 = G__18313;
count__18305_18309 = G__18314;
i__18306_18310 = G__18315;
continue;
} else {
var temp__4425__auto___18316 = cljs.core.seq.call(null,seq__18303_18307);
if(temp__4425__auto___18316){
var seq__18303_18317__$1 = temp__4425__auto___18316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18303_18317__$1)){
var c__17630__auto___18318 = cljs.core.chunk_first.call(null,seq__18303_18317__$1);
var G__18319 = cljs.core.chunk_rest.call(null,seq__18303_18317__$1);
var G__18320 = c__17630__auto___18318;
var G__18321 = cljs.core.count.call(null,c__17630__auto___18318);
var G__18322 = (0);
seq__18303_18307 = G__18319;
chunk__18304_18308 = G__18320;
count__18305_18309 = G__18321;
i__18306_18310 = G__18322;
continue;
} else {
var x_18323 = cljs.core.first.call(null,seq__18303_18317__$1);
ret.push(x_18323);

var G__18324 = cljs.core.next.call(null,seq__18303_18317__$1);
var G__18325 = null;
var G__18326 = (0);
var G__18327 = (0);
seq__18303_18307 = G__18324;
chunk__18304_18308 = G__18325;
count__18305_18309 = G__18326;
i__18306_18310 = G__18327;
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
var args18328 = [];
var len__17885__auto___18339 = arguments.length;
var i__17886__auto___18340 = (0);
while(true){
if((i__17886__auto___18340 < len__17885__auto___18339)){
args18328.push((arguments[i__17886__auto___18340]));

var G__18341 = (i__17886__auto___18340 + (1));
i__17886__auto___18340 = G__18341;
continue;
} else {
}
break;
}

var G__18330 = args18328.length;
switch (G__18330) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18328.length)].join('')));

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
var G__18331 = obj;
G__18331.push(kfn.call(null,k),vfn.call(null,v));

return G__18331;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18332 = cljs.core.clone.call(null,handlers);
x18332.forEach = ((function (x18332,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18333 = cljs.core.seq.call(null,coll);
var chunk__18334 = null;
var count__18335 = (0);
var i__18336 = (0);
while(true){
if((i__18336 < count__18335)){
var vec__18337 = cljs.core._nth.call(null,chunk__18334,i__18336);
var k = cljs.core.nth.call(null,vec__18337,(0),null);
var v = cljs.core.nth.call(null,vec__18337,(1),null);
f.call(null,v,k);

var G__18343 = seq__18333;
var G__18344 = chunk__18334;
var G__18345 = count__18335;
var G__18346 = (i__18336 + (1));
seq__18333 = G__18343;
chunk__18334 = G__18344;
count__18335 = G__18345;
i__18336 = G__18346;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18333);
if(temp__4425__auto__){
var seq__18333__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18333__$1)){
var c__17630__auto__ = cljs.core.chunk_first.call(null,seq__18333__$1);
var G__18347 = cljs.core.chunk_rest.call(null,seq__18333__$1);
var G__18348 = c__17630__auto__;
var G__18349 = cljs.core.count.call(null,c__17630__auto__);
var G__18350 = (0);
seq__18333 = G__18347;
chunk__18334 = G__18348;
count__18335 = G__18349;
i__18336 = G__18350;
continue;
} else {
var vec__18338 = cljs.core.first.call(null,seq__18333__$1);
var k = cljs.core.nth.call(null,vec__18338,(0),null);
var v = cljs.core.nth.call(null,vec__18338,(1),null);
f.call(null,v,k);

var G__18351 = cljs.core.next.call(null,seq__18333__$1);
var G__18352 = null;
var G__18353 = (0);
var G__18354 = (0);
seq__18333 = G__18351;
chunk__18334 = G__18352;
count__18335 = G__18353;
i__18336 = G__18354;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18332,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18332;
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
var args18355 = [];
var len__17885__auto___18361 = arguments.length;
var i__17886__auto___18362 = (0);
while(true){
if((i__17886__auto___18362 < len__17885__auto___18361)){
args18355.push((arguments[i__17886__auto___18362]));

var G__18363 = (i__17886__auto___18362 + (1));
i__17886__auto___18362 = G__18363;
continue;
} else {
}
break;
}

var G__18357 = args18355.length;
switch (G__18357) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18355.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18358 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18359){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18359 = meta18359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18360,meta18359__$1){
var self__ = this;
var _18360__$1 = this;
return (new cognitect.transit.t_cognitect$transit18358(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18359__$1));
});

cognitect.transit.t_cognitect$transit18358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18360){
var self__ = this;
var _18360__$1 = this;
return self__.meta18359;
});

cognitect.transit.t_cognitect$transit18358.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18358.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18358.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18358.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18359","meta18359",-1931246011,null)], null);
});

cognitect.transit.t_cognitect$transit18358.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18358.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18358";

cognitect.transit.t_cognitect$transit18358.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cognitect.transit/t_cognitect$transit18358");
});

cognitect.transit.__GT_t_cognitect$transit18358 = (function cognitect$transit$__GT_t_cognitect$transit18358(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18359){
return (new cognitect.transit.t_cognitect$transit18358(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18359));
});

}

return (new cognitect.transit.t_cognitect$transit18358(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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

//# sourceMappingURL=transit.js.map?rel=1450189821970