// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20123 = [];
var len__17885__auto___20129 = arguments.length;
var i__17886__auto___20130 = (0);
while(true){
if((i__17886__auto___20130 < len__17885__auto___20129)){
args20123.push((arguments[i__17886__auto___20130]));

var G__20131 = (i__17886__auto___20130 + (1));
i__17886__auto___20130 = G__20131;
continue;
} else {
}
break;
}

var G__20125 = args20123.length;
switch (G__20125) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20123.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20126 = (function (f,blockable,meta20127){
this.f = f;
this.blockable = blockable;
this.meta20127 = meta20127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20128,meta20127__$1){
var self__ = this;
var _20128__$1 = this;
return (new cljs.core.async.t_cljs$core$async20126(self__.f,self__.blockable,meta20127__$1));
});

cljs.core.async.t_cljs$core$async20126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20128){
var self__ = this;
var _20128__$1 = this;
return self__.meta20127;
});

cljs.core.async.t_cljs$core$async20126.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20127","meta20127",769810526,null)], null);
});

cljs.core.async.t_cljs$core$async20126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20126";

cljs.core.async.t_cljs$core$async20126.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async20126");
});

cljs.core.async.__GT_t_cljs$core$async20126 = (function cljs$core$async$__GT_t_cljs$core$async20126(f__$1,blockable__$1,meta20127){
return (new cljs.core.async.t_cljs$core$async20126(f__$1,blockable__$1,meta20127));
});

}

return (new cljs.core.async.t_cljs$core$async20126(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20135 = [];
var len__17885__auto___20138 = arguments.length;
var i__17886__auto___20139 = (0);
while(true){
if((i__17886__auto___20139 < len__17885__auto___20138)){
args20135.push((arguments[i__17886__auto___20139]));

var G__20140 = (i__17886__auto___20139 + (1));
i__17886__auto___20139 = G__20140;
continue;
} else {
}
break;
}

var G__20137 = args20135.length;
switch (G__20137) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20135.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20142 = [];
var len__17885__auto___20145 = arguments.length;
var i__17886__auto___20146 = (0);
while(true){
if((i__17886__auto___20146 < len__17885__auto___20145)){
args20142.push((arguments[i__17886__auto___20146]));

var G__20147 = (i__17886__auto___20146 + (1));
i__17886__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var G__20144 = args20142.length;
switch (G__20144) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20142.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20149 = [];
var len__17885__auto___20152 = arguments.length;
var i__17886__auto___20153 = (0);
while(true){
if((i__17886__auto___20153 < len__17885__auto___20152)){
args20149.push((arguments[i__17886__auto___20153]));

var G__20154 = (i__17886__auto___20153 + (1));
i__17886__auto___20153 = G__20154;
continue;
} else {
}
break;
}

var G__20151 = args20149.length;
switch (G__20151) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20149.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20156 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20156);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20156,ret){
return (function (){
return fn1.call(null,val_20156);
});})(val_20156,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20157 = [];
var len__17885__auto___20160 = arguments.length;
var i__17886__auto___20161 = (0);
while(true){
if((i__17886__auto___20161 < len__17885__auto___20160)){
args20157.push((arguments[i__17886__auto___20161]));

var G__20162 = (i__17886__auto___20161 + (1));
i__17886__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var G__20159 = args20157.length;
switch (G__20159) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20157.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17730__auto___20164 = n;
var x_20165 = (0);
while(true){
if((x_20165 < n__17730__auto___20164)){
(a[x_20165] = (0));

var G__20166 = (x_20165 + (1));
x_20165 = G__20166;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20167 = (i + (1));
i = G__20167;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20171 = (function (alt_flag,flag,meta20172){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20172 = meta20172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20173,meta20172__$1){
var self__ = this;
var _20173__$1 = this;
return (new cljs.core.async.t_cljs$core$async20171(self__.alt_flag,self__.flag,meta20172__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20173){
var self__ = this;
var _20173__$1 = this;
return self__.meta20172;
});})(flag))
;

cljs.core.async.t_cljs$core$async20171.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20171.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20172","meta20172",285771560,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20171";

cljs.core.async.t_cljs$core$async20171.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async20171");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20171 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20171(alt_flag__$1,flag__$1,meta20172){
return (new cljs.core.async.t_cljs$core$async20171(alt_flag__$1,flag__$1,meta20172));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20171(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20177 = (function (alt_handler,flag,cb,meta20178){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20178 = meta20178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20179,meta20178__$1){
var self__ = this;
var _20179__$1 = this;
return (new cljs.core.async.t_cljs$core$async20177(self__.alt_handler,self__.flag,self__.cb,meta20178__$1));
});

cljs.core.async.t_cljs$core$async20177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20179){
var self__ = this;
var _20179__$1 = this;
return self__.meta20178;
});

cljs.core.async.t_cljs$core$async20177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20178","meta20178",-713212863,null)], null);
});

cljs.core.async.t_cljs$core$async20177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20177";

cljs.core.async.t_cljs$core$async20177.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async20177");
});

cljs.core.async.__GT_t_cljs$core$async20177 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20177(alt_handler__$1,flag__$1,cb__$1,meta20178){
return (new cljs.core.async.t_cljs$core$async20177(alt_handler__$1,flag__$1,cb__$1,meta20178));
});

}

return (new cljs.core.async.t_cljs$core$async20177(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20180_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20180_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20181_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20181_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20182 = (i + (1));
i = G__20182;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17892__auto__ = [];
var len__17885__auto___20188 = arguments.length;
var i__17886__auto___20189 = (0);
while(true){
if((i__17886__auto___20189 < len__17885__auto___20188)){
args__17892__auto__.push((arguments[i__17886__auto___20189]));

var G__20190 = (i__17886__auto___20189 + (1));
i__17886__auto___20189 = G__20190;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((1) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17893__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20185){
var map__20186 = p__20185;
var map__20186__$1 = ((((!((map__20186 == null)))?((((map__20186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20186):map__20186);
var opts = map__20186__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20183){
var G__20184 = cljs.core.first.call(null,seq20183);
var seq20183__$1 = cljs.core.next.call(null,seq20183);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20184,seq20183__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20191 = [];
var len__17885__auto___20241 = arguments.length;
var i__17886__auto___20242 = (0);
while(true){
if((i__17886__auto___20242 < len__17885__auto___20241)){
args20191.push((arguments[i__17886__auto___20242]));

var G__20243 = (i__17886__auto___20242 + (1));
i__17886__auto___20242 = G__20243;
continue;
} else {
}
break;
}

var G__20193 = args20191.length;
switch (G__20193) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20191.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20078__auto___20245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___20245){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___20245){
return (function (state_20217){
var state_val_20218 = (state_20217[(1)]);
if((state_val_20218 === (7))){
var inst_20213 = (state_20217[(2)]);
var state_20217__$1 = state_20217;
var statearr_20219_20246 = state_20217__$1;
(statearr_20219_20246[(2)] = inst_20213);

(statearr_20219_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (1))){
var state_20217__$1 = state_20217;
var statearr_20220_20247 = state_20217__$1;
(statearr_20220_20247[(2)] = null);

(statearr_20220_20247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (4))){
var inst_20196 = (state_20217[(7)]);
var inst_20196__$1 = (state_20217[(2)]);
var inst_20197 = (inst_20196__$1 == null);
var state_20217__$1 = (function (){var statearr_20221 = state_20217;
(statearr_20221[(7)] = inst_20196__$1);

return statearr_20221;
})();
if(cljs.core.truth_(inst_20197)){
var statearr_20222_20248 = state_20217__$1;
(statearr_20222_20248[(1)] = (5));

} else {
var statearr_20223_20249 = state_20217__$1;
(statearr_20223_20249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (13))){
var state_20217__$1 = state_20217;
var statearr_20224_20250 = state_20217__$1;
(statearr_20224_20250[(2)] = null);

(statearr_20224_20250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (6))){
var inst_20196 = (state_20217[(7)]);
var state_20217__$1 = state_20217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20217__$1,(11),to,inst_20196);
} else {
if((state_val_20218 === (3))){
var inst_20215 = (state_20217[(2)]);
var state_20217__$1 = state_20217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20217__$1,inst_20215);
} else {
if((state_val_20218 === (12))){
var state_20217__$1 = state_20217;
var statearr_20225_20251 = state_20217__$1;
(statearr_20225_20251[(2)] = null);

(statearr_20225_20251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (2))){
var state_20217__$1 = state_20217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20217__$1,(4),from);
} else {
if((state_val_20218 === (11))){
var inst_20206 = (state_20217[(2)]);
var state_20217__$1 = state_20217;
if(cljs.core.truth_(inst_20206)){
var statearr_20226_20252 = state_20217__$1;
(statearr_20226_20252[(1)] = (12));

} else {
var statearr_20227_20253 = state_20217__$1;
(statearr_20227_20253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (9))){
var state_20217__$1 = state_20217;
var statearr_20228_20254 = state_20217__$1;
(statearr_20228_20254[(2)] = null);

(statearr_20228_20254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (5))){
var state_20217__$1 = state_20217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20229_20255 = state_20217__$1;
(statearr_20229_20255[(1)] = (8));

} else {
var statearr_20230_20256 = state_20217__$1;
(statearr_20230_20256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (14))){
var inst_20211 = (state_20217[(2)]);
var state_20217__$1 = state_20217;
var statearr_20231_20257 = state_20217__$1;
(statearr_20231_20257[(2)] = inst_20211);

(statearr_20231_20257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (10))){
var inst_20203 = (state_20217[(2)]);
var state_20217__$1 = state_20217;
var statearr_20232_20258 = state_20217__$1;
(statearr_20232_20258[(2)] = inst_20203);

(statearr_20232_20258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20218 === (8))){
var inst_20200 = cljs.core.async.close_BANG_.call(null,to);
var state_20217__$1 = state_20217;
var statearr_20233_20259 = state_20217__$1;
(statearr_20233_20259[(2)] = inst_20200);

(statearr_20233_20259[(1)] = (10));


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
});})(c__20078__auto___20245))
;
return ((function (switch__19966__auto__,c__20078__auto___20245){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_20237 = [null,null,null,null,null,null,null,null];
(statearr_20237[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_20237[(1)] = (1));

return statearr_20237;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_20217){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20238){if((e20238 instanceof Object)){
var ex__19970__auto__ = e20238;
var statearr_20239_20260 = state_20217;
(statearr_20239_20260[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20261 = state_20217;
state_20217 = G__20261;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_20217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_20217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___20245))
})();
var state__20080__auto__ = (function (){var statearr_20240 = f__20079__auto__.call(null);
(statearr_20240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___20245);

return statearr_20240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___20245))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20445){
var vec__20446 = p__20445;
var v = cljs.core.nth.call(null,vec__20446,(0),null);
var p = cljs.core.nth.call(null,vec__20446,(1),null);
var job = vec__20446;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20078__auto___20628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___20628,res,vec__20446,v,p,job,jobs,results){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___20628,res,vec__20446,v,p,job,jobs,results){
return (function (state_20451){
var state_val_20452 = (state_20451[(1)]);
if((state_val_20452 === (1))){
var state_20451__$1 = state_20451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20451__$1,(2),res,v);
} else {
if((state_val_20452 === (2))){
var inst_20448 = (state_20451[(2)]);
var inst_20449 = cljs.core.async.close_BANG_.call(null,res);
var state_20451__$1 = (function (){var statearr_20453 = state_20451;
(statearr_20453[(7)] = inst_20448);

return statearr_20453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20451__$1,inst_20449);
} else {
return null;
}
}
});})(c__20078__auto___20628,res,vec__20446,v,p,job,jobs,results))
;
return ((function (switch__19966__auto__,c__20078__auto___20628,res,vec__20446,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_20457 = [null,null,null,null,null,null,null,null];
(statearr_20457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_20457[(1)] = (1));

return statearr_20457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_20451){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20458){if((e20458 instanceof Object)){
var ex__19970__auto__ = e20458;
var statearr_20459_20629 = state_20451;
(statearr_20459_20629[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20630 = state_20451;
state_20451 = G__20630;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_20451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_20451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___20628,res,vec__20446,v,p,job,jobs,results))
})();
var state__20080__auto__ = (function (){var statearr_20460 = f__20079__auto__.call(null);
(statearr_20460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___20628);

return statearr_20460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___20628,res,vec__20446,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20461){
var vec__20462 = p__20461;
var v = cljs.core.nth.call(null,vec__20462,(0),null);
var p = cljs.core.nth.call(null,vec__20462,(1),null);
var job = vec__20462;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17730__auto___20631 = n;
var __20632 = (0);
while(true){
if((__20632 < n__17730__auto___20631)){
var G__20463_20633 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20463_20633) {
case "compute":
var c__20078__auto___20635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20632,c__20078__auto___20635,G__20463_20633,n__17730__auto___20631,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (__20632,c__20078__auto___20635,G__20463_20633,n__17730__auto___20631,jobs,results,process,async){
return (function (state_20476){
var state_val_20477 = (state_20476[(1)]);
if((state_val_20477 === (1))){
var state_20476__$1 = state_20476;
var statearr_20478_20636 = state_20476__$1;
(statearr_20478_20636[(2)] = null);

(statearr_20478_20636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (2))){
var state_20476__$1 = state_20476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20476__$1,(4),jobs);
} else {
if((state_val_20477 === (3))){
var inst_20474 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20476__$1,inst_20474);
} else {
if((state_val_20477 === (4))){
var inst_20466 = (state_20476[(2)]);
var inst_20467 = process.call(null,inst_20466);
var state_20476__$1 = state_20476;
if(cljs.core.truth_(inst_20467)){
var statearr_20479_20637 = state_20476__$1;
(statearr_20479_20637[(1)] = (5));

} else {
var statearr_20480_20638 = state_20476__$1;
(statearr_20480_20638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (5))){
var state_20476__$1 = state_20476;
var statearr_20481_20639 = state_20476__$1;
(statearr_20481_20639[(2)] = null);

(statearr_20481_20639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (6))){
var state_20476__$1 = state_20476;
var statearr_20482_20640 = state_20476__$1;
(statearr_20482_20640[(2)] = null);

(statearr_20482_20640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20477 === (7))){
var inst_20472 = (state_20476[(2)]);
var state_20476__$1 = state_20476;
var statearr_20483_20641 = state_20476__$1;
(statearr_20483_20641[(2)] = inst_20472);

(statearr_20483_20641[(1)] = (3));


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
});})(__20632,c__20078__auto___20635,G__20463_20633,n__17730__auto___20631,jobs,results,process,async))
;
return ((function (__20632,switch__19966__auto__,c__20078__auto___20635,G__20463_20633,n__17730__auto___20631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_20487 = [null,null,null,null,null,null,null];
(statearr_20487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_20487[(1)] = (1));

return statearr_20487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_20476){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20488){if((e20488 instanceof Object)){
var ex__19970__auto__ = e20488;
var statearr_20489_20642 = state_20476;
(statearr_20489_20642[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20643 = state_20476;
state_20476 = G__20643;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_20476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_20476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(__20632,switch__19966__auto__,c__20078__auto___20635,G__20463_20633,n__17730__auto___20631,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_20490 = f__20079__auto__.call(null);
(statearr_20490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___20635);

return statearr_20490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(__20632,c__20078__auto___20635,G__20463_20633,n__17730__auto___20631,jobs,results,process,async))
);


break;
case "async":
var c__20078__auto___20644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20632,c__20078__auto___20644,G__20463_20633,n__17730__auto___20631,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (__20632,c__20078__auto___20644,G__20463_20633,n__17730__auto___20631,jobs,results,process,async){
return (function (state_20503){
var state_val_20504 = (state_20503[(1)]);
if((state_val_20504 === (1))){
var state_20503__$1 = state_20503;
var statearr_20505_20645 = state_20503__$1;
(statearr_20505_20645[(2)] = null);

(statearr_20505_20645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20504 === (2))){
var state_20503__$1 = state_20503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20503__$1,(4),jobs);
} else {
if((state_val_20504 === (3))){
var inst_20501 = (state_20503[(2)]);
var state_20503__$1 = state_20503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20503__$1,inst_20501);
} else {
if((state_val_20504 === (4))){
var inst_20493 = (state_20503[(2)]);
var inst_20494 = async.call(null,inst_20493);
var state_20503__$1 = state_20503;
if(cljs.core.truth_(inst_20494)){
var statearr_20506_20646 = state_20503__$1;
(statearr_20506_20646[(1)] = (5));

} else {
var statearr_20507_20647 = state_20503__$1;
(statearr_20507_20647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20504 === (5))){
var state_20503__$1 = state_20503;
var statearr_20508_20648 = state_20503__$1;
(statearr_20508_20648[(2)] = null);

(statearr_20508_20648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20504 === (6))){
var state_20503__$1 = state_20503;
var statearr_20509_20649 = state_20503__$1;
(statearr_20509_20649[(2)] = null);

(statearr_20509_20649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20504 === (7))){
var inst_20499 = (state_20503[(2)]);
var state_20503__$1 = state_20503;
var statearr_20510_20650 = state_20503__$1;
(statearr_20510_20650[(2)] = inst_20499);

(statearr_20510_20650[(1)] = (3));


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
});})(__20632,c__20078__auto___20644,G__20463_20633,n__17730__auto___20631,jobs,results,process,async))
;
return ((function (__20632,switch__19966__auto__,c__20078__auto___20644,G__20463_20633,n__17730__auto___20631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_20514 = [null,null,null,null,null,null,null];
(statearr_20514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_20514[(1)] = (1));

return statearr_20514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_20503){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20515){if((e20515 instanceof Object)){
var ex__19970__auto__ = e20515;
var statearr_20516_20651 = state_20503;
(statearr_20516_20651[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20652 = state_20503;
state_20503 = G__20652;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_20503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_20503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(__20632,switch__19966__auto__,c__20078__auto___20644,G__20463_20633,n__17730__auto___20631,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_20517 = f__20079__auto__.call(null);
(statearr_20517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___20644);

return statearr_20517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(__20632,c__20078__auto___20644,G__20463_20633,n__17730__auto___20631,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20653 = (__20632 + (1));
__20632 = G__20653;
continue;
} else {
}
break;
}

var c__20078__auto___20654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___20654,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___20654,jobs,results,process,async){
return (function (state_20539){
var state_val_20540 = (state_20539[(1)]);
if((state_val_20540 === (1))){
var state_20539__$1 = state_20539;
var statearr_20541_20655 = state_20539__$1;
(statearr_20541_20655[(2)] = null);

(statearr_20541_20655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (2))){
var state_20539__$1 = state_20539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20539__$1,(4),from);
} else {
if((state_val_20540 === (3))){
var inst_20537 = (state_20539[(2)]);
var state_20539__$1 = state_20539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20539__$1,inst_20537);
} else {
if((state_val_20540 === (4))){
var inst_20520 = (state_20539[(7)]);
var inst_20520__$1 = (state_20539[(2)]);
var inst_20521 = (inst_20520__$1 == null);
var state_20539__$1 = (function (){var statearr_20542 = state_20539;
(statearr_20542[(7)] = inst_20520__$1);

return statearr_20542;
})();
if(cljs.core.truth_(inst_20521)){
var statearr_20543_20656 = state_20539__$1;
(statearr_20543_20656[(1)] = (5));

} else {
var statearr_20544_20657 = state_20539__$1;
(statearr_20544_20657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (5))){
var inst_20523 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20539__$1 = state_20539;
var statearr_20545_20658 = state_20539__$1;
(statearr_20545_20658[(2)] = inst_20523);

(statearr_20545_20658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (6))){
var inst_20520 = (state_20539[(7)]);
var inst_20525 = (state_20539[(8)]);
var inst_20525__$1 = cljs.core.async.chan.call(null,(1));
var inst_20526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20527 = [inst_20520,inst_20525__$1];
var inst_20528 = (new cljs.core.PersistentVector(null,2,(5),inst_20526,inst_20527,null));
var state_20539__$1 = (function (){var statearr_20546 = state_20539;
(statearr_20546[(8)] = inst_20525__$1);

return statearr_20546;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20539__$1,(8),jobs,inst_20528);
} else {
if((state_val_20540 === (7))){
var inst_20535 = (state_20539[(2)]);
var state_20539__$1 = state_20539;
var statearr_20547_20659 = state_20539__$1;
(statearr_20547_20659[(2)] = inst_20535);

(statearr_20547_20659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (8))){
var inst_20525 = (state_20539[(8)]);
var inst_20530 = (state_20539[(2)]);
var state_20539__$1 = (function (){var statearr_20548 = state_20539;
(statearr_20548[(9)] = inst_20530);

return statearr_20548;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20539__$1,(9),results,inst_20525);
} else {
if((state_val_20540 === (9))){
var inst_20532 = (state_20539[(2)]);
var state_20539__$1 = (function (){var statearr_20549 = state_20539;
(statearr_20549[(10)] = inst_20532);

return statearr_20549;
})();
var statearr_20550_20660 = state_20539__$1;
(statearr_20550_20660[(2)] = null);

(statearr_20550_20660[(1)] = (2));


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
});})(c__20078__auto___20654,jobs,results,process,async))
;
return ((function (switch__19966__auto__,c__20078__auto___20654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_20554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_20554[(1)] = (1));

return statearr_20554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_20539){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20555){if((e20555 instanceof Object)){
var ex__19970__auto__ = e20555;
var statearr_20556_20661 = state_20539;
(statearr_20556_20661[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20662 = state_20539;
state_20539 = G__20662;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_20539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_20539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___20654,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_20557 = f__20079__auto__.call(null);
(statearr_20557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___20654);

return statearr_20557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___20654,jobs,results,process,async))
);


var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,jobs,results,process,async){
return (function (state_20595){
var state_val_20596 = (state_20595[(1)]);
if((state_val_20596 === (7))){
var inst_20591 = (state_20595[(2)]);
var state_20595__$1 = state_20595;
var statearr_20597_20663 = state_20595__$1;
(statearr_20597_20663[(2)] = inst_20591);

(statearr_20597_20663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (20))){
var state_20595__$1 = state_20595;
var statearr_20598_20664 = state_20595__$1;
(statearr_20598_20664[(2)] = null);

(statearr_20598_20664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (1))){
var state_20595__$1 = state_20595;
var statearr_20599_20665 = state_20595__$1;
(statearr_20599_20665[(2)] = null);

(statearr_20599_20665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (4))){
var inst_20560 = (state_20595[(7)]);
var inst_20560__$1 = (state_20595[(2)]);
var inst_20561 = (inst_20560__$1 == null);
var state_20595__$1 = (function (){var statearr_20600 = state_20595;
(statearr_20600[(7)] = inst_20560__$1);

return statearr_20600;
})();
if(cljs.core.truth_(inst_20561)){
var statearr_20601_20666 = state_20595__$1;
(statearr_20601_20666[(1)] = (5));

} else {
var statearr_20602_20667 = state_20595__$1;
(statearr_20602_20667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (15))){
var inst_20573 = (state_20595[(8)]);
var state_20595__$1 = state_20595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20595__$1,(18),to,inst_20573);
} else {
if((state_val_20596 === (21))){
var inst_20586 = (state_20595[(2)]);
var state_20595__$1 = state_20595;
var statearr_20603_20668 = state_20595__$1;
(statearr_20603_20668[(2)] = inst_20586);

(statearr_20603_20668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (13))){
var inst_20588 = (state_20595[(2)]);
var state_20595__$1 = (function (){var statearr_20604 = state_20595;
(statearr_20604[(9)] = inst_20588);

return statearr_20604;
})();
var statearr_20605_20669 = state_20595__$1;
(statearr_20605_20669[(2)] = null);

(statearr_20605_20669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (6))){
var inst_20560 = (state_20595[(7)]);
var state_20595__$1 = state_20595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20595__$1,(11),inst_20560);
} else {
if((state_val_20596 === (17))){
var inst_20581 = (state_20595[(2)]);
var state_20595__$1 = state_20595;
if(cljs.core.truth_(inst_20581)){
var statearr_20606_20670 = state_20595__$1;
(statearr_20606_20670[(1)] = (19));

} else {
var statearr_20607_20671 = state_20595__$1;
(statearr_20607_20671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (3))){
var inst_20593 = (state_20595[(2)]);
var state_20595__$1 = state_20595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20595__$1,inst_20593);
} else {
if((state_val_20596 === (12))){
var inst_20570 = (state_20595[(10)]);
var state_20595__$1 = state_20595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20595__$1,(14),inst_20570);
} else {
if((state_val_20596 === (2))){
var state_20595__$1 = state_20595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20595__$1,(4),results);
} else {
if((state_val_20596 === (19))){
var state_20595__$1 = state_20595;
var statearr_20608_20672 = state_20595__$1;
(statearr_20608_20672[(2)] = null);

(statearr_20608_20672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (11))){
var inst_20570 = (state_20595[(2)]);
var state_20595__$1 = (function (){var statearr_20609 = state_20595;
(statearr_20609[(10)] = inst_20570);

return statearr_20609;
})();
var statearr_20610_20673 = state_20595__$1;
(statearr_20610_20673[(2)] = null);

(statearr_20610_20673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (9))){
var state_20595__$1 = state_20595;
var statearr_20611_20674 = state_20595__$1;
(statearr_20611_20674[(2)] = null);

(statearr_20611_20674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (5))){
var state_20595__$1 = state_20595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20612_20675 = state_20595__$1;
(statearr_20612_20675[(1)] = (8));

} else {
var statearr_20613_20676 = state_20595__$1;
(statearr_20613_20676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (14))){
var inst_20573 = (state_20595[(8)]);
var inst_20575 = (state_20595[(11)]);
var inst_20573__$1 = (state_20595[(2)]);
var inst_20574 = (inst_20573__$1 == null);
var inst_20575__$1 = cljs.core.not.call(null,inst_20574);
var state_20595__$1 = (function (){var statearr_20614 = state_20595;
(statearr_20614[(8)] = inst_20573__$1);

(statearr_20614[(11)] = inst_20575__$1);

return statearr_20614;
})();
if(inst_20575__$1){
var statearr_20615_20677 = state_20595__$1;
(statearr_20615_20677[(1)] = (15));

} else {
var statearr_20616_20678 = state_20595__$1;
(statearr_20616_20678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (16))){
var inst_20575 = (state_20595[(11)]);
var state_20595__$1 = state_20595;
var statearr_20617_20679 = state_20595__$1;
(statearr_20617_20679[(2)] = inst_20575);

(statearr_20617_20679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (10))){
var inst_20567 = (state_20595[(2)]);
var state_20595__$1 = state_20595;
var statearr_20618_20680 = state_20595__$1;
(statearr_20618_20680[(2)] = inst_20567);

(statearr_20618_20680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (18))){
var inst_20578 = (state_20595[(2)]);
var state_20595__$1 = state_20595;
var statearr_20619_20681 = state_20595__$1;
(statearr_20619_20681[(2)] = inst_20578);

(statearr_20619_20681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20596 === (8))){
var inst_20564 = cljs.core.async.close_BANG_.call(null,to);
var state_20595__$1 = state_20595;
var statearr_20620_20682 = state_20595__$1;
(statearr_20620_20682[(2)] = inst_20564);

(statearr_20620_20682[(1)] = (10));


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
});})(c__20078__auto__,jobs,results,process,async))
;
return ((function (switch__19966__auto__,c__20078__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_20624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_20624[(1)] = (1));

return statearr_20624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_20595){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20625){if((e20625 instanceof Object)){
var ex__19970__auto__ = e20625;
var statearr_20626_20683 = state_20595;
(statearr_20626_20683[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20684 = state_20595;
state_20595 = G__20684;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_20595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_20595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_20627 = f__20079__auto__.call(null);
(statearr_20627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_20627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__,jobs,results,process,async))
);

return c__20078__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20685 = [];
var len__17885__auto___20688 = arguments.length;
var i__17886__auto___20689 = (0);
while(true){
if((i__17886__auto___20689 < len__17885__auto___20688)){
args20685.push((arguments[i__17886__auto___20689]));

var G__20690 = (i__17886__auto___20689 + (1));
i__17886__auto___20689 = G__20690;
continue;
} else {
}
break;
}

var G__20687 = args20685.length;
switch (G__20687) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20685.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20692 = [];
var len__17885__auto___20695 = arguments.length;
var i__17886__auto___20696 = (0);
while(true){
if((i__17886__auto___20696 < len__17885__auto___20695)){
args20692.push((arguments[i__17886__auto___20696]));

var G__20697 = (i__17886__auto___20696 + (1));
i__17886__auto___20696 = G__20697;
continue;
} else {
}
break;
}

var G__20694 = args20692.length;
switch (G__20694) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20692.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20699 = [];
var len__17885__auto___20752 = arguments.length;
var i__17886__auto___20753 = (0);
while(true){
if((i__17886__auto___20753 < len__17885__auto___20752)){
args20699.push((arguments[i__17886__auto___20753]));

var G__20754 = (i__17886__auto___20753 + (1));
i__17886__auto___20753 = G__20754;
continue;
} else {
}
break;
}

var G__20701 = args20699.length;
switch (G__20701) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20699.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20078__auto___20756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___20756,tc,fc){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___20756,tc,fc){
return (function (state_20727){
var state_val_20728 = (state_20727[(1)]);
if((state_val_20728 === (7))){
var inst_20723 = (state_20727[(2)]);
var state_20727__$1 = state_20727;
var statearr_20729_20757 = state_20727__$1;
(statearr_20729_20757[(2)] = inst_20723);

(statearr_20729_20757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (1))){
var state_20727__$1 = state_20727;
var statearr_20730_20758 = state_20727__$1;
(statearr_20730_20758[(2)] = null);

(statearr_20730_20758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (4))){
var inst_20704 = (state_20727[(7)]);
var inst_20704__$1 = (state_20727[(2)]);
var inst_20705 = (inst_20704__$1 == null);
var state_20727__$1 = (function (){var statearr_20731 = state_20727;
(statearr_20731[(7)] = inst_20704__$1);

return statearr_20731;
})();
if(cljs.core.truth_(inst_20705)){
var statearr_20732_20759 = state_20727__$1;
(statearr_20732_20759[(1)] = (5));

} else {
var statearr_20733_20760 = state_20727__$1;
(statearr_20733_20760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (13))){
var state_20727__$1 = state_20727;
var statearr_20734_20761 = state_20727__$1;
(statearr_20734_20761[(2)] = null);

(statearr_20734_20761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (6))){
var inst_20704 = (state_20727[(7)]);
var inst_20710 = p.call(null,inst_20704);
var state_20727__$1 = state_20727;
if(cljs.core.truth_(inst_20710)){
var statearr_20735_20762 = state_20727__$1;
(statearr_20735_20762[(1)] = (9));

} else {
var statearr_20736_20763 = state_20727__$1;
(statearr_20736_20763[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (3))){
var inst_20725 = (state_20727[(2)]);
var state_20727__$1 = state_20727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20727__$1,inst_20725);
} else {
if((state_val_20728 === (12))){
var state_20727__$1 = state_20727;
var statearr_20737_20764 = state_20727__$1;
(statearr_20737_20764[(2)] = null);

(statearr_20737_20764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (2))){
var state_20727__$1 = state_20727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20727__$1,(4),ch);
} else {
if((state_val_20728 === (11))){
var inst_20704 = (state_20727[(7)]);
var inst_20714 = (state_20727[(2)]);
var state_20727__$1 = state_20727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20727__$1,(8),inst_20714,inst_20704);
} else {
if((state_val_20728 === (9))){
var state_20727__$1 = state_20727;
var statearr_20738_20765 = state_20727__$1;
(statearr_20738_20765[(2)] = tc);

(statearr_20738_20765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (5))){
var inst_20707 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20708 = cljs.core.async.close_BANG_.call(null,fc);
var state_20727__$1 = (function (){var statearr_20739 = state_20727;
(statearr_20739[(8)] = inst_20707);

return statearr_20739;
})();
var statearr_20740_20766 = state_20727__$1;
(statearr_20740_20766[(2)] = inst_20708);

(statearr_20740_20766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (14))){
var inst_20721 = (state_20727[(2)]);
var state_20727__$1 = state_20727;
var statearr_20741_20767 = state_20727__$1;
(statearr_20741_20767[(2)] = inst_20721);

(statearr_20741_20767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (10))){
var state_20727__$1 = state_20727;
var statearr_20742_20768 = state_20727__$1;
(statearr_20742_20768[(2)] = fc);

(statearr_20742_20768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20728 === (8))){
var inst_20716 = (state_20727[(2)]);
var state_20727__$1 = state_20727;
if(cljs.core.truth_(inst_20716)){
var statearr_20743_20769 = state_20727__$1;
(statearr_20743_20769[(1)] = (12));

} else {
var statearr_20744_20770 = state_20727__$1;
(statearr_20744_20770[(1)] = (13));

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
});})(c__20078__auto___20756,tc,fc))
;
return ((function (switch__19966__auto__,c__20078__auto___20756,tc,fc){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_20748 = [null,null,null,null,null,null,null,null,null];
(statearr_20748[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_20748[(1)] = (1));

return statearr_20748;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_20727){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20749){if((e20749 instanceof Object)){
var ex__19970__auto__ = e20749;
var statearr_20750_20771 = state_20727;
(statearr_20750_20771[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20772 = state_20727;
state_20727 = G__20772;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_20727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_20727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___20756,tc,fc))
})();
var state__20080__auto__ = (function (){var statearr_20751 = f__20079__auto__.call(null);
(statearr_20751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___20756);

return statearr_20751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___20756,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_20836){
var state_val_20837 = (state_20836[(1)]);
if((state_val_20837 === (7))){
var inst_20832 = (state_20836[(2)]);
var state_20836__$1 = state_20836;
var statearr_20838_20859 = state_20836__$1;
(statearr_20838_20859[(2)] = inst_20832);

(statearr_20838_20859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (1))){
var inst_20816 = init;
var state_20836__$1 = (function (){var statearr_20839 = state_20836;
(statearr_20839[(7)] = inst_20816);

return statearr_20839;
})();
var statearr_20840_20860 = state_20836__$1;
(statearr_20840_20860[(2)] = null);

(statearr_20840_20860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (4))){
var inst_20819 = (state_20836[(8)]);
var inst_20819__$1 = (state_20836[(2)]);
var inst_20820 = (inst_20819__$1 == null);
var state_20836__$1 = (function (){var statearr_20841 = state_20836;
(statearr_20841[(8)] = inst_20819__$1);

return statearr_20841;
})();
if(cljs.core.truth_(inst_20820)){
var statearr_20842_20861 = state_20836__$1;
(statearr_20842_20861[(1)] = (5));

} else {
var statearr_20843_20862 = state_20836__$1;
(statearr_20843_20862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (6))){
var inst_20823 = (state_20836[(9)]);
var inst_20819 = (state_20836[(8)]);
var inst_20816 = (state_20836[(7)]);
var inst_20823__$1 = f.call(null,inst_20816,inst_20819);
var inst_20824 = cljs.core.reduced_QMARK_.call(null,inst_20823__$1);
var state_20836__$1 = (function (){var statearr_20844 = state_20836;
(statearr_20844[(9)] = inst_20823__$1);

return statearr_20844;
})();
if(inst_20824){
var statearr_20845_20863 = state_20836__$1;
(statearr_20845_20863[(1)] = (8));

} else {
var statearr_20846_20864 = state_20836__$1;
(statearr_20846_20864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (3))){
var inst_20834 = (state_20836[(2)]);
var state_20836__$1 = state_20836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20836__$1,inst_20834);
} else {
if((state_val_20837 === (2))){
var state_20836__$1 = state_20836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20836__$1,(4),ch);
} else {
if((state_val_20837 === (9))){
var inst_20823 = (state_20836[(9)]);
var inst_20816 = inst_20823;
var state_20836__$1 = (function (){var statearr_20847 = state_20836;
(statearr_20847[(7)] = inst_20816);

return statearr_20847;
})();
var statearr_20848_20865 = state_20836__$1;
(statearr_20848_20865[(2)] = null);

(statearr_20848_20865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (5))){
var inst_20816 = (state_20836[(7)]);
var state_20836__$1 = state_20836;
var statearr_20849_20866 = state_20836__$1;
(statearr_20849_20866[(2)] = inst_20816);

(statearr_20849_20866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (10))){
var inst_20830 = (state_20836[(2)]);
var state_20836__$1 = state_20836;
var statearr_20850_20867 = state_20836__$1;
(statearr_20850_20867[(2)] = inst_20830);

(statearr_20850_20867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (8))){
var inst_20823 = (state_20836[(9)]);
var inst_20826 = cljs.core.deref.call(null,inst_20823);
var state_20836__$1 = state_20836;
var statearr_20851_20868 = state_20836__$1;
(statearr_20851_20868[(2)] = inst_20826);

(statearr_20851_20868[(1)] = (10));


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
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19967__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19967__auto____0 = (function (){
var statearr_20855 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20855[(0)] = cljs$core$async$reduce_$_state_machine__19967__auto__);

(statearr_20855[(1)] = (1));

return statearr_20855;
});
var cljs$core$async$reduce_$_state_machine__19967__auto____1 = (function (state_20836){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20856){if((e20856 instanceof Object)){
var ex__19970__auto__ = e20856;
var statearr_20857_20869 = state_20836;
(statearr_20857_20869[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20870 = state_20836;
state_20836 = G__20870;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19967__auto__ = function(state_20836){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19967__auto____1.call(this,state_20836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19967__auto____0;
cljs$core$async$reduce_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19967__auto____1;
return cljs$core$async$reduce_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_20858 = f__20079__auto__.call(null);
(statearr_20858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_20858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20871 = [];
var len__17885__auto___20923 = arguments.length;
var i__17886__auto___20924 = (0);
while(true){
if((i__17886__auto___20924 < len__17885__auto___20923)){
args20871.push((arguments[i__17886__auto___20924]));

var G__20925 = (i__17886__auto___20924 + (1));
i__17886__auto___20924 = G__20925;
continue;
} else {
}
break;
}

var G__20873 = args20871.length;
switch (G__20873) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20871.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_20898){
var state_val_20899 = (state_20898[(1)]);
if((state_val_20899 === (7))){
var inst_20880 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
var statearr_20900_20927 = state_20898__$1;
(statearr_20900_20927[(2)] = inst_20880);

(statearr_20900_20927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (1))){
var inst_20874 = cljs.core.seq.call(null,coll);
var inst_20875 = inst_20874;
var state_20898__$1 = (function (){var statearr_20901 = state_20898;
(statearr_20901[(7)] = inst_20875);

return statearr_20901;
})();
var statearr_20902_20928 = state_20898__$1;
(statearr_20902_20928[(2)] = null);

(statearr_20902_20928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (4))){
var inst_20875 = (state_20898[(7)]);
var inst_20878 = cljs.core.first.call(null,inst_20875);
var state_20898__$1 = state_20898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20898__$1,(7),ch,inst_20878);
} else {
if((state_val_20899 === (13))){
var inst_20892 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
var statearr_20903_20929 = state_20898__$1;
(statearr_20903_20929[(2)] = inst_20892);

(statearr_20903_20929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (6))){
var inst_20883 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
if(cljs.core.truth_(inst_20883)){
var statearr_20904_20930 = state_20898__$1;
(statearr_20904_20930[(1)] = (8));

} else {
var statearr_20905_20931 = state_20898__$1;
(statearr_20905_20931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (3))){
var inst_20896 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20898__$1,inst_20896);
} else {
if((state_val_20899 === (12))){
var state_20898__$1 = state_20898;
var statearr_20906_20932 = state_20898__$1;
(statearr_20906_20932[(2)] = null);

(statearr_20906_20932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (2))){
var inst_20875 = (state_20898[(7)]);
var state_20898__$1 = state_20898;
if(cljs.core.truth_(inst_20875)){
var statearr_20907_20933 = state_20898__$1;
(statearr_20907_20933[(1)] = (4));

} else {
var statearr_20908_20934 = state_20898__$1;
(statearr_20908_20934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (11))){
var inst_20889 = cljs.core.async.close_BANG_.call(null,ch);
var state_20898__$1 = state_20898;
var statearr_20909_20935 = state_20898__$1;
(statearr_20909_20935[(2)] = inst_20889);

(statearr_20909_20935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (9))){
var state_20898__$1 = state_20898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20910_20936 = state_20898__$1;
(statearr_20910_20936[(1)] = (11));

} else {
var statearr_20911_20937 = state_20898__$1;
(statearr_20911_20937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (5))){
var inst_20875 = (state_20898[(7)]);
var state_20898__$1 = state_20898;
var statearr_20912_20938 = state_20898__$1;
(statearr_20912_20938[(2)] = inst_20875);

(statearr_20912_20938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (10))){
var inst_20894 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
var statearr_20913_20939 = state_20898__$1;
(statearr_20913_20939[(2)] = inst_20894);

(statearr_20913_20939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (8))){
var inst_20875 = (state_20898[(7)]);
var inst_20885 = cljs.core.next.call(null,inst_20875);
var inst_20875__$1 = inst_20885;
var state_20898__$1 = (function (){var statearr_20914 = state_20898;
(statearr_20914[(7)] = inst_20875__$1);

return statearr_20914;
})();
var statearr_20915_20940 = state_20898__$1;
(statearr_20915_20940[(2)] = null);

(statearr_20915_20940[(1)] = (2));


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
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_20919 = [null,null,null,null,null,null,null,null];
(statearr_20919[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_20919[(1)] = (1));

return statearr_20919;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_20898){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_20898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e20920){if((e20920 instanceof Object)){
var ex__19970__auto__ = e20920;
var statearr_20921_20941 = state_20898;
(statearr_20921_20941[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20942 = state_20898;
state_20898 = G__20942;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_20898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_20898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_20922 = f__20079__auto__.call(null);
(statearr_20922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_20922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17482__auto__ = (((_ == null))?null:_);
var m__17483__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,_);
} else {
var m__17483__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17483__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m,ch);
} else {
var m__17483__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m);
} else {
var m__17483__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21164 = (function (mult,ch,cs,meta21165){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21165 = meta21165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21166,meta21165__$1){
var self__ = this;
var _21166__$1 = this;
return (new cljs.core.async.t_cljs$core$async21164(self__.mult,self__.ch,self__.cs,meta21165__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21166){
var self__ = this;
var _21166__$1 = this;
return self__.meta21165;
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21165","meta21165",809373433,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21164";

cljs.core.async.t_cljs$core$async21164.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async21164");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21164 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21164(mult__$1,ch__$1,cs__$1,meta21165){
return (new cljs.core.async.t_cljs$core$async21164(mult__$1,ch__$1,cs__$1,meta21165));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21164(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20078__auto___21385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___21385,cs,m,dchan,dctr,done){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___21385,cs,m,dchan,dctr,done){
return (function (state_21297){
var state_val_21298 = (state_21297[(1)]);
if((state_val_21298 === (7))){
var inst_21293 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21299_21386 = state_21297__$1;
(statearr_21299_21386[(2)] = inst_21293);

(statearr_21299_21386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (20))){
var inst_21198 = (state_21297[(7)]);
var inst_21208 = cljs.core.first.call(null,inst_21198);
var inst_21209 = cljs.core.nth.call(null,inst_21208,(0),null);
var inst_21210 = cljs.core.nth.call(null,inst_21208,(1),null);
var state_21297__$1 = (function (){var statearr_21300 = state_21297;
(statearr_21300[(8)] = inst_21209);

return statearr_21300;
})();
if(cljs.core.truth_(inst_21210)){
var statearr_21301_21387 = state_21297__$1;
(statearr_21301_21387[(1)] = (22));

} else {
var statearr_21302_21388 = state_21297__$1;
(statearr_21302_21388[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (27))){
var inst_21238 = (state_21297[(9)]);
var inst_21245 = (state_21297[(10)]);
var inst_21240 = (state_21297[(11)]);
var inst_21169 = (state_21297[(12)]);
var inst_21245__$1 = cljs.core._nth.call(null,inst_21238,inst_21240);
var inst_21246 = cljs.core.async.put_BANG_.call(null,inst_21245__$1,inst_21169,done);
var state_21297__$1 = (function (){var statearr_21303 = state_21297;
(statearr_21303[(10)] = inst_21245__$1);

return statearr_21303;
})();
if(cljs.core.truth_(inst_21246)){
var statearr_21304_21389 = state_21297__$1;
(statearr_21304_21389[(1)] = (30));

} else {
var statearr_21305_21390 = state_21297__$1;
(statearr_21305_21390[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (1))){
var state_21297__$1 = state_21297;
var statearr_21306_21391 = state_21297__$1;
(statearr_21306_21391[(2)] = null);

(statearr_21306_21391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (24))){
var inst_21198 = (state_21297[(7)]);
var inst_21215 = (state_21297[(2)]);
var inst_21216 = cljs.core.next.call(null,inst_21198);
var inst_21178 = inst_21216;
var inst_21179 = null;
var inst_21180 = (0);
var inst_21181 = (0);
var state_21297__$1 = (function (){var statearr_21307 = state_21297;
(statearr_21307[(13)] = inst_21178);

(statearr_21307[(14)] = inst_21215);

(statearr_21307[(15)] = inst_21180);

(statearr_21307[(16)] = inst_21179);

(statearr_21307[(17)] = inst_21181);

return statearr_21307;
})();
var statearr_21308_21392 = state_21297__$1;
(statearr_21308_21392[(2)] = null);

(statearr_21308_21392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (39))){
var state_21297__$1 = state_21297;
var statearr_21312_21393 = state_21297__$1;
(statearr_21312_21393[(2)] = null);

(statearr_21312_21393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (4))){
var inst_21169 = (state_21297[(12)]);
var inst_21169__$1 = (state_21297[(2)]);
var inst_21170 = (inst_21169__$1 == null);
var state_21297__$1 = (function (){var statearr_21313 = state_21297;
(statearr_21313[(12)] = inst_21169__$1);

return statearr_21313;
})();
if(cljs.core.truth_(inst_21170)){
var statearr_21314_21394 = state_21297__$1;
(statearr_21314_21394[(1)] = (5));

} else {
var statearr_21315_21395 = state_21297__$1;
(statearr_21315_21395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (15))){
var inst_21178 = (state_21297[(13)]);
var inst_21180 = (state_21297[(15)]);
var inst_21179 = (state_21297[(16)]);
var inst_21181 = (state_21297[(17)]);
var inst_21194 = (state_21297[(2)]);
var inst_21195 = (inst_21181 + (1));
var tmp21309 = inst_21178;
var tmp21310 = inst_21180;
var tmp21311 = inst_21179;
var inst_21178__$1 = tmp21309;
var inst_21179__$1 = tmp21311;
var inst_21180__$1 = tmp21310;
var inst_21181__$1 = inst_21195;
var state_21297__$1 = (function (){var statearr_21316 = state_21297;
(statearr_21316[(13)] = inst_21178__$1);

(statearr_21316[(15)] = inst_21180__$1);

(statearr_21316[(16)] = inst_21179__$1);

(statearr_21316[(17)] = inst_21181__$1);

(statearr_21316[(18)] = inst_21194);

return statearr_21316;
})();
var statearr_21317_21396 = state_21297__$1;
(statearr_21317_21396[(2)] = null);

(statearr_21317_21396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (21))){
var inst_21219 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21321_21397 = state_21297__$1;
(statearr_21321_21397[(2)] = inst_21219);

(statearr_21321_21397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (31))){
var inst_21245 = (state_21297[(10)]);
var inst_21249 = done.call(null,null);
var inst_21250 = cljs.core.async.untap_STAR_.call(null,m,inst_21245);
var state_21297__$1 = (function (){var statearr_21322 = state_21297;
(statearr_21322[(19)] = inst_21249);

return statearr_21322;
})();
var statearr_21323_21398 = state_21297__$1;
(statearr_21323_21398[(2)] = inst_21250);

(statearr_21323_21398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (32))){
var inst_21237 = (state_21297[(20)]);
var inst_21238 = (state_21297[(9)]);
var inst_21240 = (state_21297[(11)]);
var inst_21239 = (state_21297[(21)]);
var inst_21252 = (state_21297[(2)]);
var inst_21253 = (inst_21240 + (1));
var tmp21318 = inst_21237;
var tmp21319 = inst_21238;
var tmp21320 = inst_21239;
var inst_21237__$1 = tmp21318;
var inst_21238__$1 = tmp21319;
var inst_21239__$1 = tmp21320;
var inst_21240__$1 = inst_21253;
var state_21297__$1 = (function (){var statearr_21324 = state_21297;
(statearr_21324[(20)] = inst_21237__$1);

(statearr_21324[(9)] = inst_21238__$1);

(statearr_21324[(11)] = inst_21240__$1);

(statearr_21324[(22)] = inst_21252);

(statearr_21324[(21)] = inst_21239__$1);

return statearr_21324;
})();
var statearr_21325_21399 = state_21297__$1;
(statearr_21325_21399[(2)] = null);

(statearr_21325_21399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (40))){
var inst_21265 = (state_21297[(23)]);
var inst_21269 = done.call(null,null);
var inst_21270 = cljs.core.async.untap_STAR_.call(null,m,inst_21265);
var state_21297__$1 = (function (){var statearr_21326 = state_21297;
(statearr_21326[(24)] = inst_21269);

return statearr_21326;
})();
var statearr_21327_21400 = state_21297__$1;
(statearr_21327_21400[(2)] = inst_21270);

(statearr_21327_21400[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (33))){
var inst_21256 = (state_21297[(25)]);
var inst_21258 = cljs.core.chunked_seq_QMARK_.call(null,inst_21256);
var state_21297__$1 = state_21297;
if(inst_21258){
var statearr_21328_21401 = state_21297__$1;
(statearr_21328_21401[(1)] = (36));

} else {
var statearr_21329_21402 = state_21297__$1;
(statearr_21329_21402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (13))){
var inst_21188 = (state_21297[(26)]);
var inst_21191 = cljs.core.async.close_BANG_.call(null,inst_21188);
var state_21297__$1 = state_21297;
var statearr_21330_21403 = state_21297__$1;
(statearr_21330_21403[(2)] = inst_21191);

(statearr_21330_21403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (22))){
var inst_21209 = (state_21297[(8)]);
var inst_21212 = cljs.core.async.close_BANG_.call(null,inst_21209);
var state_21297__$1 = state_21297;
var statearr_21331_21404 = state_21297__$1;
(statearr_21331_21404[(2)] = inst_21212);

(statearr_21331_21404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (36))){
var inst_21256 = (state_21297[(25)]);
var inst_21260 = cljs.core.chunk_first.call(null,inst_21256);
var inst_21261 = cljs.core.chunk_rest.call(null,inst_21256);
var inst_21262 = cljs.core.count.call(null,inst_21260);
var inst_21237 = inst_21261;
var inst_21238 = inst_21260;
var inst_21239 = inst_21262;
var inst_21240 = (0);
var state_21297__$1 = (function (){var statearr_21332 = state_21297;
(statearr_21332[(20)] = inst_21237);

(statearr_21332[(9)] = inst_21238);

(statearr_21332[(11)] = inst_21240);

(statearr_21332[(21)] = inst_21239);

return statearr_21332;
})();
var statearr_21333_21405 = state_21297__$1;
(statearr_21333_21405[(2)] = null);

(statearr_21333_21405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (41))){
var inst_21256 = (state_21297[(25)]);
var inst_21272 = (state_21297[(2)]);
var inst_21273 = cljs.core.next.call(null,inst_21256);
var inst_21237 = inst_21273;
var inst_21238 = null;
var inst_21239 = (0);
var inst_21240 = (0);
var state_21297__$1 = (function (){var statearr_21334 = state_21297;
(statearr_21334[(20)] = inst_21237);

(statearr_21334[(9)] = inst_21238);

(statearr_21334[(11)] = inst_21240);

(statearr_21334[(27)] = inst_21272);

(statearr_21334[(21)] = inst_21239);

return statearr_21334;
})();
var statearr_21335_21406 = state_21297__$1;
(statearr_21335_21406[(2)] = null);

(statearr_21335_21406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (43))){
var state_21297__$1 = state_21297;
var statearr_21336_21407 = state_21297__$1;
(statearr_21336_21407[(2)] = null);

(statearr_21336_21407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (29))){
var inst_21281 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21337_21408 = state_21297__$1;
(statearr_21337_21408[(2)] = inst_21281);

(statearr_21337_21408[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (44))){
var inst_21290 = (state_21297[(2)]);
var state_21297__$1 = (function (){var statearr_21338 = state_21297;
(statearr_21338[(28)] = inst_21290);

return statearr_21338;
})();
var statearr_21339_21409 = state_21297__$1;
(statearr_21339_21409[(2)] = null);

(statearr_21339_21409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (6))){
var inst_21229 = (state_21297[(29)]);
var inst_21228 = cljs.core.deref.call(null,cs);
var inst_21229__$1 = cljs.core.keys.call(null,inst_21228);
var inst_21230 = cljs.core.count.call(null,inst_21229__$1);
var inst_21231 = cljs.core.reset_BANG_.call(null,dctr,inst_21230);
var inst_21236 = cljs.core.seq.call(null,inst_21229__$1);
var inst_21237 = inst_21236;
var inst_21238 = null;
var inst_21239 = (0);
var inst_21240 = (0);
var state_21297__$1 = (function (){var statearr_21340 = state_21297;
(statearr_21340[(20)] = inst_21237);

(statearr_21340[(9)] = inst_21238);

(statearr_21340[(29)] = inst_21229__$1);

(statearr_21340[(11)] = inst_21240);

(statearr_21340[(30)] = inst_21231);

(statearr_21340[(21)] = inst_21239);

return statearr_21340;
})();
var statearr_21341_21410 = state_21297__$1;
(statearr_21341_21410[(2)] = null);

(statearr_21341_21410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (28))){
var inst_21237 = (state_21297[(20)]);
var inst_21256 = (state_21297[(25)]);
var inst_21256__$1 = cljs.core.seq.call(null,inst_21237);
var state_21297__$1 = (function (){var statearr_21342 = state_21297;
(statearr_21342[(25)] = inst_21256__$1);

return statearr_21342;
})();
if(inst_21256__$1){
var statearr_21343_21411 = state_21297__$1;
(statearr_21343_21411[(1)] = (33));

} else {
var statearr_21344_21412 = state_21297__$1;
(statearr_21344_21412[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (25))){
var inst_21240 = (state_21297[(11)]);
var inst_21239 = (state_21297[(21)]);
var inst_21242 = (inst_21240 < inst_21239);
var inst_21243 = inst_21242;
var state_21297__$1 = state_21297;
if(cljs.core.truth_(inst_21243)){
var statearr_21345_21413 = state_21297__$1;
(statearr_21345_21413[(1)] = (27));

} else {
var statearr_21346_21414 = state_21297__$1;
(statearr_21346_21414[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (34))){
var state_21297__$1 = state_21297;
var statearr_21347_21415 = state_21297__$1;
(statearr_21347_21415[(2)] = null);

(statearr_21347_21415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (17))){
var state_21297__$1 = state_21297;
var statearr_21348_21416 = state_21297__$1;
(statearr_21348_21416[(2)] = null);

(statearr_21348_21416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (3))){
var inst_21295 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21297__$1,inst_21295);
} else {
if((state_val_21298 === (12))){
var inst_21224 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21349_21417 = state_21297__$1;
(statearr_21349_21417[(2)] = inst_21224);

(statearr_21349_21417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (2))){
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21297__$1,(4),ch);
} else {
if((state_val_21298 === (23))){
var state_21297__$1 = state_21297;
var statearr_21350_21418 = state_21297__$1;
(statearr_21350_21418[(2)] = null);

(statearr_21350_21418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (35))){
var inst_21279 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21351_21419 = state_21297__$1;
(statearr_21351_21419[(2)] = inst_21279);

(statearr_21351_21419[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (19))){
var inst_21198 = (state_21297[(7)]);
var inst_21202 = cljs.core.chunk_first.call(null,inst_21198);
var inst_21203 = cljs.core.chunk_rest.call(null,inst_21198);
var inst_21204 = cljs.core.count.call(null,inst_21202);
var inst_21178 = inst_21203;
var inst_21179 = inst_21202;
var inst_21180 = inst_21204;
var inst_21181 = (0);
var state_21297__$1 = (function (){var statearr_21352 = state_21297;
(statearr_21352[(13)] = inst_21178);

(statearr_21352[(15)] = inst_21180);

(statearr_21352[(16)] = inst_21179);

(statearr_21352[(17)] = inst_21181);

return statearr_21352;
})();
var statearr_21353_21420 = state_21297__$1;
(statearr_21353_21420[(2)] = null);

(statearr_21353_21420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (11))){
var inst_21178 = (state_21297[(13)]);
var inst_21198 = (state_21297[(7)]);
var inst_21198__$1 = cljs.core.seq.call(null,inst_21178);
var state_21297__$1 = (function (){var statearr_21354 = state_21297;
(statearr_21354[(7)] = inst_21198__$1);

return statearr_21354;
})();
if(inst_21198__$1){
var statearr_21355_21421 = state_21297__$1;
(statearr_21355_21421[(1)] = (16));

} else {
var statearr_21356_21422 = state_21297__$1;
(statearr_21356_21422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (9))){
var inst_21226 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21357_21423 = state_21297__$1;
(statearr_21357_21423[(2)] = inst_21226);

(statearr_21357_21423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (5))){
var inst_21176 = cljs.core.deref.call(null,cs);
var inst_21177 = cljs.core.seq.call(null,inst_21176);
var inst_21178 = inst_21177;
var inst_21179 = null;
var inst_21180 = (0);
var inst_21181 = (0);
var state_21297__$1 = (function (){var statearr_21358 = state_21297;
(statearr_21358[(13)] = inst_21178);

(statearr_21358[(15)] = inst_21180);

(statearr_21358[(16)] = inst_21179);

(statearr_21358[(17)] = inst_21181);

return statearr_21358;
})();
var statearr_21359_21424 = state_21297__$1;
(statearr_21359_21424[(2)] = null);

(statearr_21359_21424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (14))){
var state_21297__$1 = state_21297;
var statearr_21360_21425 = state_21297__$1;
(statearr_21360_21425[(2)] = null);

(statearr_21360_21425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (45))){
var inst_21287 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21361_21426 = state_21297__$1;
(statearr_21361_21426[(2)] = inst_21287);

(statearr_21361_21426[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (26))){
var inst_21229 = (state_21297[(29)]);
var inst_21283 = (state_21297[(2)]);
var inst_21284 = cljs.core.seq.call(null,inst_21229);
var state_21297__$1 = (function (){var statearr_21362 = state_21297;
(statearr_21362[(31)] = inst_21283);

return statearr_21362;
})();
if(inst_21284){
var statearr_21363_21427 = state_21297__$1;
(statearr_21363_21427[(1)] = (42));

} else {
var statearr_21364_21428 = state_21297__$1;
(statearr_21364_21428[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (16))){
var inst_21198 = (state_21297[(7)]);
var inst_21200 = cljs.core.chunked_seq_QMARK_.call(null,inst_21198);
var state_21297__$1 = state_21297;
if(inst_21200){
var statearr_21365_21429 = state_21297__$1;
(statearr_21365_21429[(1)] = (19));

} else {
var statearr_21366_21430 = state_21297__$1;
(statearr_21366_21430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (38))){
var inst_21276 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21367_21431 = state_21297__$1;
(statearr_21367_21431[(2)] = inst_21276);

(statearr_21367_21431[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (30))){
var state_21297__$1 = state_21297;
var statearr_21368_21432 = state_21297__$1;
(statearr_21368_21432[(2)] = null);

(statearr_21368_21432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (10))){
var inst_21179 = (state_21297[(16)]);
var inst_21181 = (state_21297[(17)]);
var inst_21187 = cljs.core._nth.call(null,inst_21179,inst_21181);
var inst_21188 = cljs.core.nth.call(null,inst_21187,(0),null);
var inst_21189 = cljs.core.nth.call(null,inst_21187,(1),null);
var state_21297__$1 = (function (){var statearr_21369 = state_21297;
(statearr_21369[(26)] = inst_21188);

return statearr_21369;
})();
if(cljs.core.truth_(inst_21189)){
var statearr_21370_21433 = state_21297__$1;
(statearr_21370_21433[(1)] = (13));

} else {
var statearr_21371_21434 = state_21297__$1;
(statearr_21371_21434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (18))){
var inst_21222 = (state_21297[(2)]);
var state_21297__$1 = state_21297;
var statearr_21372_21435 = state_21297__$1;
(statearr_21372_21435[(2)] = inst_21222);

(statearr_21372_21435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (42))){
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21297__$1,(45),dchan);
} else {
if((state_val_21298 === (37))){
var inst_21265 = (state_21297[(23)]);
var inst_21256 = (state_21297[(25)]);
var inst_21169 = (state_21297[(12)]);
var inst_21265__$1 = cljs.core.first.call(null,inst_21256);
var inst_21266 = cljs.core.async.put_BANG_.call(null,inst_21265__$1,inst_21169,done);
var state_21297__$1 = (function (){var statearr_21373 = state_21297;
(statearr_21373[(23)] = inst_21265__$1);

return statearr_21373;
})();
if(cljs.core.truth_(inst_21266)){
var statearr_21374_21436 = state_21297__$1;
(statearr_21374_21436[(1)] = (39));

} else {
var statearr_21375_21437 = state_21297__$1;
(statearr_21375_21437[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21298 === (8))){
var inst_21180 = (state_21297[(15)]);
var inst_21181 = (state_21297[(17)]);
var inst_21183 = (inst_21181 < inst_21180);
var inst_21184 = inst_21183;
var state_21297__$1 = state_21297;
if(cljs.core.truth_(inst_21184)){
var statearr_21376_21438 = state_21297__$1;
(statearr_21376_21438[(1)] = (10));

} else {
var statearr_21377_21439 = state_21297__$1;
(statearr_21377_21439[(1)] = (11));

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
});})(c__20078__auto___21385,cs,m,dchan,dctr,done))
;
return ((function (switch__19966__auto__,c__20078__auto___21385,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19967__auto__ = null;
var cljs$core$async$mult_$_state_machine__19967__auto____0 = (function (){
var statearr_21381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21381[(0)] = cljs$core$async$mult_$_state_machine__19967__auto__);

(statearr_21381[(1)] = (1));

return statearr_21381;
});
var cljs$core$async$mult_$_state_machine__19967__auto____1 = (function (state_21297){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_21297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e21382){if((e21382 instanceof Object)){
var ex__19970__auto__ = e21382;
var statearr_21383_21440 = state_21297;
(statearr_21383_21440[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21441 = state_21297;
state_21297 = G__21441;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19967__auto__ = function(state_21297){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19967__auto____1.call(this,state_21297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19967__auto____0;
cljs$core$async$mult_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19967__auto____1;
return cljs$core$async$mult_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___21385,cs,m,dchan,dctr,done))
})();
var state__20080__auto__ = (function (){var statearr_21384 = f__20079__auto__.call(null);
(statearr_21384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___21385);

return statearr_21384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___21385,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21442 = [];
var len__17885__auto___21445 = arguments.length;
var i__17886__auto___21446 = (0);
while(true){
if((i__17886__auto___21446 < len__17885__auto___21445)){
args21442.push((arguments[i__17886__auto___21446]));

var G__21447 = (i__17886__auto___21446 + (1));
i__17886__auto___21446 = G__21447;
continue;
} else {
}
break;
}

var G__21444 = args21442.length;
switch (G__21444) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21442.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m,ch);
} else {
var m__17483__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m,ch);
} else {
var m__17483__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m);
} else {
var m__17483__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m,state_map);
} else {
var m__17483__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17482__auto__ = (((m == null))?null:m);
var m__17483__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,m,mode);
} else {
var m__17483__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17892__auto__ = [];
var len__17885__auto___21459 = arguments.length;
var i__17886__auto___21460 = (0);
while(true){
if((i__17886__auto___21460 < len__17885__auto___21459)){
args__17892__auto__.push((arguments[i__17886__auto___21460]));

var G__21461 = (i__17886__auto___21460 + (1));
i__17886__auto___21460 = G__21461;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((3) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17893__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21453){
var map__21454 = p__21453;
var map__21454__$1 = ((((!((map__21454 == null)))?((((map__21454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21454):map__21454);
var opts = map__21454__$1;
var statearr_21456_21462 = state;
(statearr_21456_21462[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21454,map__21454__$1,opts){
return (function (val){
var statearr_21457_21463 = state;
(statearr_21457_21463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21454,map__21454__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21458_21464 = state;
(statearr_21458_21464[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21449){
var G__21450 = cljs.core.first.call(null,seq21449);
var seq21449__$1 = cljs.core.next.call(null,seq21449);
var G__21451 = cljs.core.first.call(null,seq21449__$1);
var seq21449__$2 = cljs.core.next.call(null,seq21449__$1);
var G__21452 = cljs.core.first.call(null,seq21449__$2);
var seq21449__$3 = cljs.core.next.call(null,seq21449__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21450,G__21451,G__21452,seq21449__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21629 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21630){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21630 = meta21630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21631,meta21630__$1){
var self__ = this;
var _21631__$1 = this;
return (new cljs.core.async.t_cljs$core$async21629(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21630__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21631){
var self__ = this;
var _21631__$1 = this;
return self__.meta21630;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21630","meta21630",1457532137,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21629";

cljs.core.async.t_cljs$core$async21629.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async21629");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21629 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21629(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21630){
return (new cljs.core.async.t_cljs$core$async21629(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21630));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21629(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20078__auto___21792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___21792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___21792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (7))){
var inst_21647 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21731_21793 = state_21729__$1;
(statearr_21731_21793[(2)] = inst_21647);

(statearr_21731_21793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (20))){
var inst_21659 = (state_21729[(7)]);
var state_21729__$1 = state_21729;
var statearr_21732_21794 = state_21729__$1;
(statearr_21732_21794[(2)] = inst_21659);

(statearr_21732_21794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (27))){
var state_21729__$1 = state_21729;
var statearr_21733_21795 = state_21729__$1;
(statearr_21733_21795[(2)] = null);

(statearr_21733_21795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (1))){
var inst_21635 = (state_21729[(8)]);
var inst_21635__$1 = calc_state.call(null);
var inst_21637 = (inst_21635__$1 == null);
var inst_21638 = cljs.core.not.call(null,inst_21637);
var state_21729__$1 = (function (){var statearr_21734 = state_21729;
(statearr_21734[(8)] = inst_21635__$1);

return statearr_21734;
})();
if(inst_21638){
var statearr_21735_21796 = state_21729__$1;
(statearr_21735_21796[(1)] = (2));

} else {
var statearr_21736_21797 = state_21729__$1;
(statearr_21736_21797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (24))){
var inst_21689 = (state_21729[(9)]);
var inst_21703 = (state_21729[(10)]);
var inst_21682 = (state_21729[(11)]);
var inst_21703__$1 = inst_21682.call(null,inst_21689);
var state_21729__$1 = (function (){var statearr_21737 = state_21729;
(statearr_21737[(10)] = inst_21703__$1);

return statearr_21737;
})();
if(cljs.core.truth_(inst_21703__$1)){
var statearr_21738_21798 = state_21729__$1;
(statearr_21738_21798[(1)] = (29));

} else {
var statearr_21739_21799 = state_21729__$1;
(statearr_21739_21799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (4))){
var inst_21650 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21650)){
var statearr_21740_21800 = state_21729__$1;
(statearr_21740_21800[(1)] = (8));

} else {
var statearr_21741_21801 = state_21729__$1;
(statearr_21741_21801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (15))){
var inst_21676 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21676)){
var statearr_21742_21802 = state_21729__$1;
(statearr_21742_21802[(1)] = (19));

} else {
var statearr_21743_21803 = state_21729__$1;
(statearr_21743_21803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (21))){
var inst_21681 = (state_21729[(12)]);
var inst_21681__$1 = (state_21729[(2)]);
var inst_21682 = cljs.core.get.call(null,inst_21681__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21683 = cljs.core.get.call(null,inst_21681__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21684 = cljs.core.get.call(null,inst_21681__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21729__$1 = (function (){var statearr_21744 = state_21729;
(statearr_21744[(13)] = inst_21683);

(statearr_21744[(12)] = inst_21681__$1);

(statearr_21744[(11)] = inst_21682);

return statearr_21744;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21729__$1,(22),inst_21684);
} else {
if((state_val_21730 === (31))){
var inst_21711 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21711)){
var statearr_21745_21804 = state_21729__$1;
(statearr_21745_21804[(1)] = (32));

} else {
var statearr_21746_21805 = state_21729__$1;
(statearr_21746_21805[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (32))){
var inst_21688 = (state_21729[(14)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21729__$1,(35),out,inst_21688);
} else {
if((state_val_21730 === (33))){
var inst_21681 = (state_21729[(12)]);
var inst_21659 = inst_21681;
var state_21729__$1 = (function (){var statearr_21747 = state_21729;
(statearr_21747[(7)] = inst_21659);

return statearr_21747;
})();
var statearr_21748_21806 = state_21729__$1;
(statearr_21748_21806[(2)] = null);

(statearr_21748_21806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (13))){
var inst_21659 = (state_21729[(7)]);
var inst_21666 = inst_21659.cljs$lang$protocol_mask$partition0$;
var inst_21667 = (inst_21666 & (64));
var inst_21668 = inst_21659.cljs$core$ISeq$;
var inst_21669 = (inst_21667) || (inst_21668);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21669)){
var statearr_21749_21807 = state_21729__$1;
(statearr_21749_21807[(1)] = (16));

} else {
var statearr_21750_21808 = state_21729__$1;
(statearr_21750_21808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (22))){
var inst_21689 = (state_21729[(9)]);
var inst_21688 = (state_21729[(14)]);
var inst_21687 = (state_21729[(2)]);
var inst_21688__$1 = cljs.core.nth.call(null,inst_21687,(0),null);
var inst_21689__$1 = cljs.core.nth.call(null,inst_21687,(1),null);
var inst_21690 = (inst_21688__$1 == null);
var inst_21691 = cljs.core._EQ_.call(null,inst_21689__$1,change);
var inst_21692 = (inst_21690) || (inst_21691);
var state_21729__$1 = (function (){var statearr_21751 = state_21729;
(statearr_21751[(9)] = inst_21689__$1);

(statearr_21751[(14)] = inst_21688__$1);

return statearr_21751;
})();
if(cljs.core.truth_(inst_21692)){
var statearr_21752_21809 = state_21729__$1;
(statearr_21752_21809[(1)] = (23));

} else {
var statearr_21753_21810 = state_21729__$1;
(statearr_21753_21810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (36))){
var inst_21681 = (state_21729[(12)]);
var inst_21659 = inst_21681;
var state_21729__$1 = (function (){var statearr_21754 = state_21729;
(statearr_21754[(7)] = inst_21659);

return statearr_21754;
})();
var statearr_21755_21811 = state_21729__$1;
(statearr_21755_21811[(2)] = null);

(statearr_21755_21811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (29))){
var inst_21703 = (state_21729[(10)]);
var state_21729__$1 = state_21729;
var statearr_21756_21812 = state_21729__$1;
(statearr_21756_21812[(2)] = inst_21703);

(statearr_21756_21812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var state_21729__$1 = state_21729;
var statearr_21757_21813 = state_21729__$1;
(statearr_21757_21813[(2)] = false);

(statearr_21757_21813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (28))){
var inst_21699 = (state_21729[(2)]);
var inst_21700 = calc_state.call(null);
var inst_21659 = inst_21700;
var state_21729__$1 = (function (){var statearr_21758 = state_21729;
(statearr_21758[(7)] = inst_21659);

(statearr_21758[(15)] = inst_21699);

return statearr_21758;
})();
var statearr_21759_21814 = state_21729__$1;
(statearr_21759_21814[(2)] = null);

(statearr_21759_21814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (25))){
var inst_21725 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21760_21815 = state_21729__$1;
(statearr_21760_21815[(2)] = inst_21725);

(statearr_21760_21815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (34))){
var inst_21723 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21761_21816 = state_21729__$1;
(statearr_21761_21816[(2)] = inst_21723);

(statearr_21761_21816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (17))){
var state_21729__$1 = state_21729;
var statearr_21762_21817 = state_21729__$1;
(statearr_21762_21817[(2)] = false);

(statearr_21762_21817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (3))){
var state_21729__$1 = state_21729;
var statearr_21763_21818 = state_21729__$1;
(statearr_21763_21818[(2)] = false);

(statearr_21763_21818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (12))){
var inst_21727 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (2))){
var inst_21635 = (state_21729[(8)]);
var inst_21640 = inst_21635.cljs$lang$protocol_mask$partition0$;
var inst_21641 = (inst_21640 & (64));
var inst_21642 = inst_21635.cljs$core$ISeq$;
var inst_21643 = (inst_21641) || (inst_21642);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21643)){
var statearr_21764_21819 = state_21729__$1;
(statearr_21764_21819[(1)] = (5));

} else {
var statearr_21765_21820 = state_21729__$1;
(statearr_21765_21820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (23))){
var inst_21688 = (state_21729[(14)]);
var inst_21694 = (inst_21688 == null);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21694)){
var statearr_21766_21821 = state_21729__$1;
(statearr_21766_21821[(1)] = (26));

} else {
var statearr_21767_21822 = state_21729__$1;
(statearr_21767_21822[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (35))){
var inst_21714 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21714)){
var statearr_21768_21823 = state_21729__$1;
(statearr_21768_21823[(1)] = (36));

} else {
var statearr_21769_21824 = state_21729__$1;
(statearr_21769_21824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (19))){
var inst_21659 = (state_21729[(7)]);
var inst_21678 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21659);
var state_21729__$1 = state_21729;
var statearr_21770_21825 = state_21729__$1;
(statearr_21770_21825[(2)] = inst_21678);

(statearr_21770_21825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (11))){
var inst_21659 = (state_21729[(7)]);
var inst_21663 = (inst_21659 == null);
var inst_21664 = cljs.core.not.call(null,inst_21663);
var state_21729__$1 = state_21729;
if(inst_21664){
var statearr_21771_21826 = state_21729__$1;
(statearr_21771_21826[(1)] = (13));

} else {
var statearr_21772_21827 = state_21729__$1;
(statearr_21772_21827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (9))){
var inst_21635 = (state_21729[(8)]);
var state_21729__$1 = state_21729;
var statearr_21773_21828 = state_21729__$1;
(statearr_21773_21828[(2)] = inst_21635);

(statearr_21773_21828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var state_21729__$1 = state_21729;
var statearr_21774_21829 = state_21729__$1;
(statearr_21774_21829[(2)] = true);

(statearr_21774_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (14))){
var state_21729__$1 = state_21729;
var statearr_21775_21830 = state_21729__$1;
(statearr_21775_21830[(2)] = false);

(statearr_21775_21830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (26))){
var inst_21689 = (state_21729[(9)]);
var inst_21696 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21689);
var state_21729__$1 = state_21729;
var statearr_21776_21831 = state_21729__$1;
(statearr_21776_21831[(2)] = inst_21696);

(statearr_21776_21831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (16))){
var state_21729__$1 = state_21729;
var statearr_21777_21832 = state_21729__$1;
(statearr_21777_21832[(2)] = true);

(statearr_21777_21832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (38))){
var inst_21719 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21778_21833 = state_21729__$1;
(statearr_21778_21833[(2)] = inst_21719);

(statearr_21778_21833[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (30))){
var inst_21683 = (state_21729[(13)]);
var inst_21689 = (state_21729[(9)]);
var inst_21682 = (state_21729[(11)]);
var inst_21706 = cljs.core.empty_QMARK_.call(null,inst_21682);
var inst_21707 = inst_21683.call(null,inst_21689);
var inst_21708 = cljs.core.not.call(null,inst_21707);
var inst_21709 = (inst_21706) && (inst_21708);
var state_21729__$1 = state_21729;
var statearr_21779_21834 = state_21729__$1;
(statearr_21779_21834[(2)] = inst_21709);

(statearr_21779_21834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (10))){
var inst_21635 = (state_21729[(8)]);
var inst_21655 = (state_21729[(2)]);
var inst_21656 = cljs.core.get.call(null,inst_21655,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21657 = cljs.core.get.call(null,inst_21655,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21658 = cljs.core.get.call(null,inst_21655,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21659 = inst_21635;
var state_21729__$1 = (function (){var statearr_21780 = state_21729;
(statearr_21780[(7)] = inst_21659);

(statearr_21780[(16)] = inst_21657);

(statearr_21780[(17)] = inst_21658);

(statearr_21780[(18)] = inst_21656);

return statearr_21780;
})();
var statearr_21781_21835 = state_21729__$1;
(statearr_21781_21835[(2)] = null);

(statearr_21781_21835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (18))){
var inst_21673 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21782_21836 = state_21729__$1;
(statearr_21782_21836[(2)] = inst_21673);

(statearr_21782_21836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (37))){
var state_21729__$1 = state_21729;
var statearr_21783_21837 = state_21729__$1;
(statearr_21783_21837[(2)] = null);

(statearr_21783_21837[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (8))){
var inst_21635 = (state_21729[(8)]);
var inst_21652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21635);
var state_21729__$1 = state_21729;
var statearr_21784_21838 = state_21729__$1;
(statearr_21784_21838[(2)] = inst_21652);

(statearr_21784_21838[(1)] = (10));


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
});})(c__20078__auto___21792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19966__auto__,c__20078__auto___21792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19967__auto__ = null;
var cljs$core$async$mix_$_state_machine__19967__auto____0 = (function (){
var statearr_21788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21788[(0)] = cljs$core$async$mix_$_state_machine__19967__auto__);

(statearr_21788[(1)] = (1));

return statearr_21788;
});
var cljs$core$async$mix_$_state_machine__19967__auto____1 = (function (state_21729){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_21729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e21789){if((e21789 instanceof Object)){
var ex__19970__auto__ = e21789;
var statearr_21790_21839 = state_21729;
(statearr_21790_21839[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21840 = state_21729;
state_21729 = G__21840;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19967__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19967__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19967__auto____0;
cljs$core$async$mix_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19967__auto____1;
return cljs$core$async$mix_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___21792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20080__auto__ = (function (){var statearr_21791 = f__20079__auto__.call(null);
(statearr_21791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___21792);

return statearr_21791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___21792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17482__auto__ = (((p == null))?null:p);
var m__17483__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17483__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17482__auto__ = (((p == null))?null:p);
var m__17483__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,p,v,ch);
} else {
var m__17483__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21841 = [];
var len__17885__auto___21844 = arguments.length;
var i__17886__auto___21845 = (0);
while(true){
if((i__17886__auto___21845 < len__17885__auto___21844)){
args21841.push((arguments[i__17886__auto___21845]));

var G__21846 = (i__17886__auto___21845 + (1));
i__17886__auto___21845 = G__21846;
continue;
} else {
}
break;
}

var G__21843 = args21841.length;
switch (G__21843) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21841.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17482__auto__ = (((p == null))?null:p);
var m__17483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,p);
} else {
var m__17483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17482__auto__ = (((p == null))?null:p);
var m__17483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17482__auto__)]);
if(!((m__17483__auto__ == null))){
return m__17483__auto__.call(null,p,v);
} else {
var m__17483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17483__auto____$1 == null))){
return m__17483__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21849 = [];
var len__17885__auto___21974 = arguments.length;
var i__17886__auto___21975 = (0);
while(true){
if((i__17886__auto___21975 < len__17885__auto___21974)){
args21849.push((arguments[i__17886__auto___21975]));

var G__21976 = (i__17886__auto___21975 + (1));
i__17886__auto___21975 = G__21976;
continue;
} else {
}
break;
}

var G__21851 = args21849.length;
switch (G__21851) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21849.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__21848_SHARP_){
if(cljs.core.truth_(p1__21848_SHARP_.call(null,topic))){
return p1__21848_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21848_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21852 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21853){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21853 = meta21853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21854,meta21853__$1){
var self__ = this;
var _21854__$1 = this;
return (new cljs.core.async.t_cljs$core$async21852(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21853__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21854){
var self__ = this;
var _21854__$1 = this;
return self__.meta21853;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21853","meta21853",-1011917596,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21852";

cljs.core.async.t_cljs$core$async21852.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async21852");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21852 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21852(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21853){
return (new cljs.core.async.t_cljs$core$async21852(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21853));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21852(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20078__auto___21978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___21978,mults,ensure_mult,p){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___21978,mults,ensure_mult,p){
return (function (state_21926){
var state_val_21927 = (state_21926[(1)]);
if((state_val_21927 === (7))){
var inst_21922 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21928_21979 = state_21926__$1;
(statearr_21928_21979[(2)] = inst_21922);

(statearr_21928_21979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (20))){
var state_21926__$1 = state_21926;
var statearr_21929_21980 = state_21926__$1;
(statearr_21929_21980[(2)] = null);

(statearr_21929_21980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (1))){
var state_21926__$1 = state_21926;
var statearr_21930_21981 = state_21926__$1;
(statearr_21930_21981[(2)] = null);

(statearr_21930_21981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (24))){
var inst_21905 = (state_21926[(7)]);
var inst_21914 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21905);
var state_21926__$1 = state_21926;
var statearr_21931_21982 = state_21926__$1;
(statearr_21931_21982[(2)] = inst_21914);

(statearr_21931_21982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (4))){
var inst_21857 = (state_21926[(8)]);
var inst_21857__$1 = (state_21926[(2)]);
var inst_21858 = (inst_21857__$1 == null);
var state_21926__$1 = (function (){var statearr_21932 = state_21926;
(statearr_21932[(8)] = inst_21857__$1);

return statearr_21932;
})();
if(cljs.core.truth_(inst_21858)){
var statearr_21933_21983 = state_21926__$1;
(statearr_21933_21983[(1)] = (5));

} else {
var statearr_21934_21984 = state_21926__$1;
(statearr_21934_21984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (15))){
var inst_21899 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21935_21985 = state_21926__$1;
(statearr_21935_21985[(2)] = inst_21899);

(statearr_21935_21985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (21))){
var inst_21919 = (state_21926[(2)]);
var state_21926__$1 = (function (){var statearr_21936 = state_21926;
(statearr_21936[(9)] = inst_21919);

return statearr_21936;
})();
var statearr_21937_21986 = state_21926__$1;
(statearr_21937_21986[(2)] = null);

(statearr_21937_21986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (13))){
var inst_21881 = (state_21926[(10)]);
var inst_21883 = cljs.core.chunked_seq_QMARK_.call(null,inst_21881);
var state_21926__$1 = state_21926;
if(inst_21883){
var statearr_21938_21987 = state_21926__$1;
(statearr_21938_21987[(1)] = (16));

} else {
var statearr_21939_21988 = state_21926__$1;
(statearr_21939_21988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (22))){
var inst_21911 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
if(cljs.core.truth_(inst_21911)){
var statearr_21940_21989 = state_21926__$1;
(statearr_21940_21989[(1)] = (23));

} else {
var statearr_21941_21990 = state_21926__$1;
(statearr_21941_21990[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (6))){
var inst_21907 = (state_21926[(11)]);
var inst_21905 = (state_21926[(7)]);
var inst_21857 = (state_21926[(8)]);
var inst_21905__$1 = topic_fn.call(null,inst_21857);
var inst_21906 = cljs.core.deref.call(null,mults);
var inst_21907__$1 = cljs.core.get.call(null,inst_21906,inst_21905__$1);
var state_21926__$1 = (function (){var statearr_21942 = state_21926;
(statearr_21942[(11)] = inst_21907__$1);

(statearr_21942[(7)] = inst_21905__$1);

return statearr_21942;
})();
if(cljs.core.truth_(inst_21907__$1)){
var statearr_21943_21991 = state_21926__$1;
(statearr_21943_21991[(1)] = (19));

} else {
var statearr_21944_21992 = state_21926__$1;
(statearr_21944_21992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (25))){
var inst_21916 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21945_21993 = state_21926__$1;
(statearr_21945_21993[(2)] = inst_21916);

(statearr_21945_21993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (17))){
var inst_21881 = (state_21926[(10)]);
var inst_21890 = cljs.core.first.call(null,inst_21881);
var inst_21891 = cljs.core.async.muxch_STAR_.call(null,inst_21890);
var inst_21892 = cljs.core.async.close_BANG_.call(null,inst_21891);
var inst_21893 = cljs.core.next.call(null,inst_21881);
var inst_21867 = inst_21893;
var inst_21868 = null;
var inst_21869 = (0);
var inst_21870 = (0);
var state_21926__$1 = (function (){var statearr_21946 = state_21926;
(statearr_21946[(12)] = inst_21869);

(statearr_21946[(13)] = inst_21870);

(statearr_21946[(14)] = inst_21868);

(statearr_21946[(15)] = inst_21867);

(statearr_21946[(16)] = inst_21892);

return statearr_21946;
})();
var statearr_21947_21994 = state_21926__$1;
(statearr_21947_21994[(2)] = null);

(statearr_21947_21994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (3))){
var inst_21924 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21926__$1,inst_21924);
} else {
if((state_val_21927 === (12))){
var inst_21901 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21948_21995 = state_21926__$1;
(statearr_21948_21995[(2)] = inst_21901);

(statearr_21948_21995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (2))){
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21926__$1,(4),ch);
} else {
if((state_val_21927 === (23))){
var state_21926__$1 = state_21926;
var statearr_21949_21996 = state_21926__$1;
(statearr_21949_21996[(2)] = null);

(statearr_21949_21996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (19))){
var inst_21907 = (state_21926[(11)]);
var inst_21857 = (state_21926[(8)]);
var inst_21909 = cljs.core.async.muxch_STAR_.call(null,inst_21907);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21926__$1,(22),inst_21909,inst_21857);
} else {
if((state_val_21927 === (11))){
var inst_21867 = (state_21926[(15)]);
var inst_21881 = (state_21926[(10)]);
var inst_21881__$1 = cljs.core.seq.call(null,inst_21867);
var state_21926__$1 = (function (){var statearr_21950 = state_21926;
(statearr_21950[(10)] = inst_21881__$1);

return statearr_21950;
})();
if(inst_21881__$1){
var statearr_21951_21997 = state_21926__$1;
(statearr_21951_21997[(1)] = (13));

} else {
var statearr_21952_21998 = state_21926__$1;
(statearr_21952_21998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (9))){
var inst_21903 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21953_21999 = state_21926__$1;
(statearr_21953_21999[(2)] = inst_21903);

(statearr_21953_21999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (5))){
var inst_21864 = cljs.core.deref.call(null,mults);
var inst_21865 = cljs.core.vals.call(null,inst_21864);
var inst_21866 = cljs.core.seq.call(null,inst_21865);
var inst_21867 = inst_21866;
var inst_21868 = null;
var inst_21869 = (0);
var inst_21870 = (0);
var state_21926__$1 = (function (){var statearr_21954 = state_21926;
(statearr_21954[(12)] = inst_21869);

(statearr_21954[(13)] = inst_21870);

(statearr_21954[(14)] = inst_21868);

(statearr_21954[(15)] = inst_21867);

return statearr_21954;
})();
var statearr_21955_22000 = state_21926__$1;
(statearr_21955_22000[(2)] = null);

(statearr_21955_22000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (14))){
var state_21926__$1 = state_21926;
var statearr_21959_22001 = state_21926__$1;
(statearr_21959_22001[(2)] = null);

(statearr_21959_22001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (16))){
var inst_21881 = (state_21926[(10)]);
var inst_21885 = cljs.core.chunk_first.call(null,inst_21881);
var inst_21886 = cljs.core.chunk_rest.call(null,inst_21881);
var inst_21887 = cljs.core.count.call(null,inst_21885);
var inst_21867 = inst_21886;
var inst_21868 = inst_21885;
var inst_21869 = inst_21887;
var inst_21870 = (0);
var state_21926__$1 = (function (){var statearr_21960 = state_21926;
(statearr_21960[(12)] = inst_21869);

(statearr_21960[(13)] = inst_21870);

(statearr_21960[(14)] = inst_21868);

(statearr_21960[(15)] = inst_21867);

return statearr_21960;
})();
var statearr_21961_22002 = state_21926__$1;
(statearr_21961_22002[(2)] = null);

(statearr_21961_22002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (10))){
var inst_21869 = (state_21926[(12)]);
var inst_21870 = (state_21926[(13)]);
var inst_21868 = (state_21926[(14)]);
var inst_21867 = (state_21926[(15)]);
var inst_21875 = cljs.core._nth.call(null,inst_21868,inst_21870);
var inst_21876 = cljs.core.async.muxch_STAR_.call(null,inst_21875);
var inst_21877 = cljs.core.async.close_BANG_.call(null,inst_21876);
var inst_21878 = (inst_21870 + (1));
var tmp21956 = inst_21869;
var tmp21957 = inst_21868;
var tmp21958 = inst_21867;
var inst_21867__$1 = tmp21958;
var inst_21868__$1 = tmp21957;
var inst_21869__$1 = tmp21956;
var inst_21870__$1 = inst_21878;
var state_21926__$1 = (function (){var statearr_21962 = state_21926;
(statearr_21962[(17)] = inst_21877);

(statearr_21962[(12)] = inst_21869__$1);

(statearr_21962[(13)] = inst_21870__$1);

(statearr_21962[(14)] = inst_21868__$1);

(statearr_21962[(15)] = inst_21867__$1);

return statearr_21962;
})();
var statearr_21963_22003 = state_21926__$1;
(statearr_21963_22003[(2)] = null);

(statearr_21963_22003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (18))){
var inst_21896 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21964_22004 = state_21926__$1;
(statearr_21964_22004[(2)] = inst_21896);

(statearr_21964_22004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (8))){
var inst_21869 = (state_21926[(12)]);
var inst_21870 = (state_21926[(13)]);
var inst_21872 = (inst_21870 < inst_21869);
var inst_21873 = inst_21872;
var state_21926__$1 = state_21926;
if(cljs.core.truth_(inst_21873)){
var statearr_21965_22005 = state_21926__$1;
(statearr_21965_22005[(1)] = (10));

} else {
var statearr_21966_22006 = state_21926__$1;
(statearr_21966_22006[(1)] = (11));

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
});})(c__20078__auto___21978,mults,ensure_mult,p))
;
return ((function (switch__19966__auto__,c__20078__auto___21978,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_21970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21970[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_21970[(1)] = (1));

return statearr_21970;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_21926){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_21926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e21971){if((e21971 instanceof Object)){
var ex__19970__auto__ = e21971;
var statearr_21972_22007 = state_21926;
(statearr_21972_22007[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22008 = state_21926;
state_21926 = G__22008;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_21926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_21926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___21978,mults,ensure_mult,p))
})();
var state__20080__auto__ = (function (){var statearr_21973 = f__20079__auto__.call(null);
(statearr_21973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___21978);

return statearr_21973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___21978,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22009 = [];
var len__17885__auto___22012 = arguments.length;
var i__17886__auto___22013 = (0);
while(true){
if((i__17886__auto___22013 < len__17885__auto___22012)){
args22009.push((arguments[i__17886__auto___22013]));

var G__22014 = (i__17886__auto___22013 + (1));
i__17886__auto___22013 = G__22014;
continue;
} else {
}
break;
}

var G__22011 = args22009.length;
switch (G__22011) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22009.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22016 = [];
var len__17885__auto___22019 = arguments.length;
var i__17886__auto___22020 = (0);
while(true){
if((i__17886__auto___22020 < len__17885__auto___22019)){
args22016.push((arguments[i__17886__auto___22020]));

var G__22021 = (i__17886__auto___22020 + (1));
i__17886__auto___22020 = G__22021;
continue;
} else {
}
break;
}

var G__22018 = args22016.length;
switch (G__22018) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22016.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22023 = [];
var len__17885__auto___22094 = arguments.length;
var i__17886__auto___22095 = (0);
while(true){
if((i__17886__auto___22095 < len__17885__auto___22094)){
args22023.push((arguments[i__17886__auto___22095]));

var G__22096 = (i__17886__auto___22095 + (1));
i__17886__auto___22095 = G__22096;
continue;
} else {
}
break;
}

var G__22025 = args22023.length;
switch (G__22025) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22023.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20078__auto___22098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22064){
var state_val_22065 = (state_22064[(1)]);
if((state_val_22065 === (7))){
var state_22064__$1 = state_22064;
var statearr_22066_22099 = state_22064__$1;
(statearr_22066_22099[(2)] = null);

(statearr_22066_22099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (1))){
var state_22064__$1 = state_22064;
var statearr_22067_22100 = state_22064__$1;
(statearr_22067_22100[(2)] = null);

(statearr_22067_22100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (4))){
var inst_22028 = (state_22064[(7)]);
var inst_22030 = (inst_22028 < cnt);
var state_22064__$1 = state_22064;
if(cljs.core.truth_(inst_22030)){
var statearr_22068_22101 = state_22064__$1;
(statearr_22068_22101[(1)] = (6));

} else {
var statearr_22069_22102 = state_22064__$1;
(statearr_22069_22102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (15))){
var inst_22060 = (state_22064[(2)]);
var state_22064__$1 = state_22064;
var statearr_22070_22103 = state_22064__$1;
(statearr_22070_22103[(2)] = inst_22060);

(statearr_22070_22103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (13))){
var inst_22053 = cljs.core.async.close_BANG_.call(null,out);
var state_22064__$1 = state_22064;
var statearr_22071_22104 = state_22064__$1;
(statearr_22071_22104[(2)] = inst_22053);

(statearr_22071_22104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (6))){
var state_22064__$1 = state_22064;
var statearr_22072_22105 = state_22064__$1;
(statearr_22072_22105[(2)] = null);

(statearr_22072_22105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (3))){
var inst_22062 = (state_22064[(2)]);
var state_22064__$1 = state_22064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22064__$1,inst_22062);
} else {
if((state_val_22065 === (12))){
var inst_22050 = (state_22064[(8)]);
var inst_22050__$1 = (state_22064[(2)]);
var inst_22051 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22050__$1);
var state_22064__$1 = (function (){var statearr_22073 = state_22064;
(statearr_22073[(8)] = inst_22050__$1);

return statearr_22073;
})();
if(cljs.core.truth_(inst_22051)){
var statearr_22074_22106 = state_22064__$1;
(statearr_22074_22106[(1)] = (13));

} else {
var statearr_22075_22107 = state_22064__$1;
(statearr_22075_22107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (2))){
var inst_22027 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22028 = (0);
var state_22064__$1 = (function (){var statearr_22076 = state_22064;
(statearr_22076[(7)] = inst_22028);

(statearr_22076[(9)] = inst_22027);

return statearr_22076;
})();
var statearr_22077_22108 = state_22064__$1;
(statearr_22077_22108[(2)] = null);

(statearr_22077_22108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (11))){
var inst_22028 = (state_22064[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22064,(10),Object,null,(9));
var inst_22037 = chs__$1.call(null,inst_22028);
var inst_22038 = done.call(null,inst_22028);
var inst_22039 = cljs.core.async.take_BANG_.call(null,inst_22037,inst_22038);
var state_22064__$1 = state_22064;
var statearr_22078_22109 = state_22064__$1;
(statearr_22078_22109[(2)] = inst_22039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (9))){
var inst_22028 = (state_22064[(7)]);
var inst_22041 = (state_22064[(2)]);
var inst_22042 = (inst_22028 + (1));
var inst_22028__$1 = inst_22042;
var state_22064__$1 = (function (){var statearr_22079 = state_22064;
(statearr_22079[(10)] = inst_22041);

(statearr_22079[(7)] = inst_22028__$1);

return statearr_22079;
})();
var statearr_22080_22110 = state_22064__$1;
(statearr_22080_22110[(2)] = null);

(statearr_22080_22110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (5))){
var inst_22048 = (state_22064[(2)]);
var state_22064__$1 = (function (){var statearr_22081 = state_22064;
(statearr_22081[(11)] = inst_22048);

return statearr_22081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22064__$1,(12),dchan);
} else {
if((state_val_22065 === (14))){
var inst_22050 = (state_22064[(8)]);
var inst_22055 = cljs.core.apply.call(null,f,inst_22050);
var state_22064__$1 = state_22064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22064__$1,(16),out,inst_22055);
} else {
if((state_val_22065 === (16))){
var inst_22057 = (state_22064[(2)]);
var state_22064__$1 = (function (){var statearr_22082 = state_22064;
(statearr_22082[(12)] = inst_22057);

return statearr_22082;
})();
var statearr_22083_22111 = state_22064__$1;
(statearr_22083_22111[(2)] = null);

(statearr_22083_22111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (10))){
var inst_22032 = (state_22064[(2)]);
var inst_22033 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22064__$1 = (function (){var statearr_22084 = state_22064;
(statearr_22084[(13)] = inst_22032);

return statearr_22084;
})();
var statearr_22085_22112 = state_22064__$1;
(statearr_22085_22112[(2)] = inst_22033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (8))){
var inst_22046 = (state_22064[(2)]);
var state_22064__$1 = state_22064;
var statearr_22086_22113 = state_22064__$1;
(statearr_22086_22113[(2)] = inst_22046);

(statearr_22086_22113[(1)] = (5));


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
});})(c__20078__auto___22098,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19966__auto__,c__20078__auto___22098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22090[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22090[(1)] = (1));

return statearr_22090;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22064){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22091){if((e22091 instanceof Object)){
var ex__19970__auto__ = e22091;
var statearr_22092_22114 = state_22064;
(statearr_22092_22114[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22115 = state_22064;
state_22064 = G__22115;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22098,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20080__auto__ = (function (){var statearr_22093 = f__20079__auto__.call(null);
(statearr_22093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22098);

return statearr_22093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22098,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22117 = [];
var len__17885__auto___22173 = arguments.length;
var i__17886__auto___22174 = (0);
while(true){
if((i__17886__auto___22174 < len__17885__auto___22173)){
args22117.push((arguments[i__17886__auto___22174]));

var G__22175 = (i__17886__auto___22174 + (1));
i__17886__auto___22174 = G__22175;
continue;
} else {
}
break;
}

var G__22119 = args22117.length;
switch (G__22119) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22117.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___22177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22177,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22177,out){
return (function (state_22149){
var state_val_22150 = (state_22149[(1)]);
if((state_val_22150 === (7))){
var inst_22129 = (state_22149[(7)]);
var inst_22128 = (state_22149[(8)]);
var inst_22128__$1 = (state_22149[(2)]);
var inst_22129__$1 = cljs.core.nth.call(null,inst_22128__$1,(0),null);
var inst_22130 = cljs.core.nth.call(null,inst_22128__$1,(1),null);
var inst_22131 = (inst_22129__$1 == null);
var state_22149__$1 = (function (){var statearr_22151 = state_22149;
(statearr_22151[(7)] = inst_22129__$1);

(statearr_22151[(8)] = inst_22128__$1);

(statearr_22151[(9)] = inst_22130);

return statearr_22151;
})();
if(cljs.core.truth_(inst_22131)){
var statearr_22152_22178 = state_22149__$1;
(statearr_22152_22178[(1)] = (8));

} else {
var statearr_22153_22179 = state_22149__$1;
(statearr_22153_22179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (1))){
var inst_22120 = cljs.core.vec.call(null,chs);
var inst_22121 = inst_22120;
var state_22149__$1 = (function (){var statearr_22154 = state_22149;
(statearr_22154[(10)] = inst_22121);

return statearr_22154;
})();
var statearr_22155_22180 = state_22149__$1;
(statearr_22155_22180[(2)] = null);

(statearr_22155_22180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (4))){
var inst_22121 = (state_22149[(10)]);
var state_22149__$1 = state_22149;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22149__$1,(7),inst_22121);
} else {
if((state_val_22150 === (6))){
var inst_22145 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22156_22181 = state_22149__$1;
(statearr_22156_22181[(2)] = inst_22145);

(statearr_22156_22181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (3))){
var inst_22147 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22149__$1,inst_22147);
} else {
if((state_val_22150 === (2))){
var inst_22121 = (state_22149[(10)]);
var inst_22123 = cljs.core.count.call(null,inst_22121);
var inst_22124 = (inst_22123 > (0));
var state_22149__$1 = state_22149;
if(cljs.core.truth_(inst_22124)){
var statearr_22158_22182 = state_22149__$1;
(statearr_22158_22182[(1)] = (4));

} else {
var statearr_22159_22183 = state_22149__$1;
(statearr_22159_22183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (11))){
var inst_22121 = (state_22149[(10)]);
var inst_22138 = (state_22149[(2)]);
var tmp22157 = inst_22121;
var inst_22121__$1 = tmp22157;
var state_22149__$1 = (function (){var statearr_22160 = state_22149;
(statearr_22160[(11)] = inst_22138);

(statearr_22160[(10)] = inst_22121__$1);

return statearr_22160;
})();
var statearr_22161_22184 = state_22149__$1;
(statearr_22161_22184[(2)] = null);

(statearr_22161_22184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (9))){
var inst_22129 = (state_22149[(7)]);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22149__$1,(11),out,inst_22129);
} else {
if((state_val_22150 === (5))){
var inst_22143 = cljs.core.async.close_BANG_.call(null,out);
var state_22149__$1 = state_22149;
var statearr_22162_22185 = state_22149__$1;
(statearr_22162_22185[(2)] = inst_22143);

(statearr_22162_22185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (10))){
var inst_22141 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22163_22186 = state_22149__$1;
(statearr_22163_22186[(2)] = inst_22141);

(statearr_22163_22186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (8))){
var inst_22129 = (state_22149[(7)]);
var inst_22128 = (state_22149[(8)]);
var inst_22130 = (state_22149[(9)]);
var inst_22121 = (state_22149[(10)]);
var inst_22133 = (function (){var cs = inst_22121;
var vec__22126 = inst_22128;
var v = inst_22129;
var c = inst_22130;
return ((function (cs,vec__22126,v,c,inst_22129,inst_22128,inst_22130,inst_22121,state_val_22150,c__20078__auto___22177,out){
return (function (p1__22116_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22116_SHARP_);
});
;})(cs,vec__22126,v,c,inst_22129,inst_22128,inst_22130,inst_22121,state_val_22150,c__20078__auto___22177,out))
})();
var inst_22134 = cljs.core.filterv.call(null,inst_22133,inst_22121);
var inst_22121__$1 = inst_22134;
var state_22149__$1 = (function (){var statearr_22164 = state_22149;
(statearr_22164[(10)] = inst_22121__$1);

return statearr_22164;
})();
var statearr_22165_22187 = state_22149__$1;
(statearr_22165_22187[(2)] = null);

(statearr_22165_22187[(1)] = (2));


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
});})(c__20078__auto___22177,out))
;
return ((function (switch__19966__auto__,c__20078__auto___22177,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22169 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22169[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22169[(1)] = (1));

return statearr_22169;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22149){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22170){if((e22170 instanceof Object)){
var ex__19970__auto__ = e22170;
var statearr_22171_22188 = state_22149;
(statearr_22171_22188[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22189 = state_22149;
state_22149 = G__22189;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22177,out))
})();
var state__20080__auto__ = (function (){var statearr_22172 = f__20079__auto__.call(null);
(statearr_22172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22177);

return statearr_22172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22177,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22190 = [];
var len__17885__auto___22239 = arguments.length;
var i__17886__auto___22240 = (0);
while(true){
if((i__17886__auto___22240 < len__17885__auto___22239)){
args22190.push((arguments[i__17886__auto___22240]));

var G__22241 = (i__17886__auto___22240 + (1));
i__17886__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var G__22192 = args22190.length;
switch (G__22192) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22190.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___22243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22243,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22243,out){
return (function (state_22216){
var state_val_22217 = (state_22216[(1)]);
if((state_val_22217 === (7))){
var inst_22198 = (state_22216[(7)]);
var inst_22198__$1 = (state_22216[(2)]);
var inst_22199 = (inst_22198__$1 == null);
var inst_22200 = cljs.core.not.call(null,inst_22199);
var state_22216__$1 = (function (){var statearr_22218 = state_22216;
(statearr_22218[(7)] = inst_22198__$1);

return statearr_22218;
})();
if(inst_22200){
var statearr_22219_22244 = state_22216__$1;
(statearr_22219_22244[(1)] = (8));

} else {
var statearr_22220_22245 = state_22216__$1;
(statearr_22220_22245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (1))){
var inst_22193 = (0);
var state_22216__$1 = (function (){var statearr_22221 = state_22216;
(statearr_22221[(8)] = inst_22193);

return statearr_22221;
})();
var statearr_22222_22246 = state_22216__$1;
(statearr_22222_22246[(2)] = null);

(statearr_22222_22246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (4))){
var state_22216__$1 = state_22216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22216__$1,(7),ch);
} else {
if((state_val_22217 === (6))){
var inst_22211 = (state_22216[(2)]);
var state_22216__$1 = state_22216;
var statearr_22223_22247 = state_22216__$1;
(statearr_22223_22247[(2)] = inst_22211);

(statearr_22223_22247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (3))){
var inst_22213 = (state_22216[(2)]);
var inst_22214 = cljs.core.async.close_BANG_.call(null,out);
var state_22216__$1 = (function (){var statearr_22224 = state_22216;
(statearr_22224[(9)] = inst_22213);

return statearr_22224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22216__$1,inst_22214);
} else {
if((state_val_22217 === (2))){
var inst_22193 = (state_22216[(8)]);
var inst_22195 = (inst_22193 < n);
var state_22216__$1 = state_22216;
if(cljs.core.truth_(inst_22195)){
var statearr_22225_22248 = state_22216__$1;
(statearr_22225_22248[(1)] = (4));

} else {
var statearr_22226_22249 = state_22216__$1;
(statearr_22226_22249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (11))){
var inst_22193 = (state_22216[(8)]);
var inst_22203 = (state_22216[(2)]);
var inst_22204 = (inst_22193 + (1));
var inst_22193__$1 = inst_22204;
var state_22216__$1 = (function (){var statearr_22227 = state_22216;
(statearr_22227[(8)] = inst_22193__$1);

(statearr_22227[(10)] = inst_22203);

return statearr_22227;
})();
var statearr_22228_22250 = state_22216__$1;
(statearr_22228_22250[(2)] = null);

(statearr_22228_22250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (9))){
var state_22216__$1 = state_22216;
var statearr_22229_22251 = state_22216__$1;
(statearr_22229_22251[(2)] = null);

(statearr_22229_22251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (5))){
var state_22216__$1 = state_22216;
var statearr_22230_22252 = state_22216__$1;
(statearr_22230_22252[(2)] = null);

(statearr_22230_22252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (10))){
var inst_22208 = (state_22216[(2)]);
var state_22216__$1 = state_22216;
var statearr_22231_22253 = state_22216__$1;
(statearr_22231_22253[(2)] = inst_22208);

(statearr_22231_22253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (8))){
var inst_22198 = (state_22216[(7)]);
var state_22216__$1 = state_22216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22216__$1,(11),out,inst_22198);
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
});})(c__20078__auto___22243,out))
;
return ((function (switch__19966__auto__,c__20078__auto___22243,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22235[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22235[(1)] = (1));

return statearr_22235;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22216){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22236){if((e22236 instanceof Object)){
var ex__19970__auto__ = e22236;
var statearr_22237_22254 = state_22216;
(statearr_22237_22254[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22255 = state_22216;
state_22216 = G__22255;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22243,out))
})();
var state__20080__auto__ = (function (){var statearr_22238 = f__20079__auto__.call(null);
(statearr_22238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22243);

return statearr_22238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22243,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22263 = (function (map_LT_,f,ch,meta22264){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22264 = meta22264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22265,meta22264__$1){
var self__ = this;
var _22265__$1 = this;
return (new cljs.core.async.t_cljs$core$async22263(self__.map_LT_,self__.f,self__.ch,meta22264__$1));
});

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22265){
var self__ = this;
var _22265__$1 = this;
return self__.meta22264;
});

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22266 = (function (map_LT_,f,ch,meta22264,_,fn1,meta22267){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22264 = meta22264;
this._ = _;
this.fn1 = fn1;
this.meta22267 = meta22267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22268,meta22267__$1){
var self__ = this;
var _22268__$1 = this;
return (new cljs.core.async.t_cljs$core$async22266(self__.map_LT_,self__.f,self__.ch,self__.meta22264,self__._,self__.fn1,meta22267__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22268){
var self__ = this;
var _22268__$1 = this;
return self__.meta22267;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22256_SHARP_){
return f1.call(null,(((p1__22256_SHARP_ == null))?null:self__.f.call(null,p1__22256_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22266.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22264","meta22264",483613266,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22263","cljs.core.async/t_cljs$core$async22263",-275717731,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22267","meta22267",1789438768,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22266";

cljs.core.async.t_cljs$core$async22266.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async22266");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22266 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22266(map_LT___$1,f__$1,ch__$1,meta22264__$1,___$2,fn1__$1,meta22267){
return (new cljs.core.async.t_cljs$core$async22266(map_LT___$1,f__$1,ch__$1,meta22264__$1,___$2,fn1__$1,meta22267));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22266(self__.map_LT_,self__.f,self__.ch,self__.meta22264,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22264","meta22264",483613266,null)], null);
});

cljs.core.async.t_cljs$core$async22263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22263";

cljs.core.async.t_cljs$core$async22263.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async22263");
});

cljs.core.async.__GT_t_cljs$core$async22263 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22263(map_LT___$1,f__$1,ch__$1,meta22264){
return (new cljs.core.async.t_cljs$core$async22263(map_LT___$1,f__$1,ch__$1,meta22264));
});

}

return (new cljs.core.async.t_cljs$core$async22263(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22272 = (function (map_GT_,f,ch,meta22273){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22273 = meta22273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22274,meta22273__$1){
var self__ = this;
var _22274__$1 = this;
return (new cljs.core.async.t_cljs$core$async22272(self__.map_GT_,self__.f,self__.ch,meta22273__$1));
});

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22274){
var self__ = this;
var _22274__$1 = this;
return self__.meta22273;
});

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22273","meta22273",-620350937,null)], null);
});

cljs.core.async.t_cljs$core$async22272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22272";

cljs.core.async.t_cljs$core$async22272.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async22272");
});

cljs.core.async.__GT_t_cljs$core$async22272 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22272(map_GT___$1,f__$1,ch__$1,meta22273){
return (new cljs.core.async.t_cljs$core$async22272(map_GT___$1,f__$1,ch__$1,meta22273));
});

}

return (new cljs.core.async.t_cljs$core$async22272(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22278 = (function (filter_GT_,p,ch,meta22279){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22279 = meta22279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22280,meta22279__$1){
var self__ = this;
var _22280__$1 = this;
return (new cljs.core.async.t_cljs$core$async22278(self__.filter_GT_,self__.p,self__.ch,meta22279__$1));
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22280){
var self__ = this;
var _22280__$1 = this;
return self__.meta22279;
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22279","meta22279",-1003790602,null)], null);
});

cljs.core.async.t_cljs$core$async22278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22278";

cljs.core.async.t_cljs$core$async22278.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async22278");
});

cljs.core.async.__GT_t_cljs$core$async22278 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22278(filter_GT___$1,p__$1,ch__$1,meta22279){
return (new cljs.core.async.t_cljs$core$async22278(filter_GT___$1,p__$1,ch__$1,meta22279));
});

}

return (new cljs.core.async.t_cljs$core$async22278(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22281 = [];
var len__17885__auto___22325 = arguments.length;
var i__17886__auto___22326 = (0);
while(true){
if((i__17886__auto___22326 < len__17885__auto___22325)){
args22281.push((arguments[i__17886__auto___22326]));

var G__22327 = (i__17886__auto___22326 + (1));
i__17886__auto___22326 = G__22327;
continue;
} else {
}
break;
}

var G__22283 = args22281.length;
switch (G__22283) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22281.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___22329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22329,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22329,out){
return (function (state_22304){
var state_val_22305 = (state_22304[(1)]);
if((state_val_22305 === (7))){
var inst_22300 = (state_22304[(2)]);
var state_22304__$1 = state_22304;
var statearr_22306_22330 = state_22304__$1;
(statearr_22306_22330[(2)] = inst_22300);

(statearr_22306_22330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (1))){
var state_22304__$1 = state_22304;
var statearr_22307_22331 = state_22304__$1;
(statearr_22307_22331[(2)] = null);

(statearr_22307_22331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (4))){
var inst_22286 = (state_22304[(7)]);
var inst_22286__$1 = (state_22304[(2)]);
var inst_22287 = (inst_22286__$1 == null);
var state_22304__$1 = (function (){var statearr_22308 = state_22304;
(statearr_22308[(7)] = inst_22286__$1);

return statearr_22308;
})();
if(cljs.core.truth_(inst_22287)){
var statearr_22309_22332 = state_22304__$1;
(statearr_22309_22332[(1)] = (5));

} else {
var statearr_22310_22333 = state_22304__$1;
(statearr_22310_22333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (6))){
var inst_22286 = (state_22304[(7)]);
var inst_22291 = p.call(null,inst_22286);
var state_22304__$1 = state_22304;
if(cljs.core.truth_(inst_22291)){
var statearr_22311_22334 = state_22304__$1;
(statearr_22311_22334[(1)] = (8));

} else {
var statearr_22312_22335 = state_22304__$1;
(statearr_22312_22335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (3))){
var inst_22302 = (state_22304[(2)]);
var state_22304__$1 = state_22304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22304__$1,inst_22302);
} else {
if((state_val_22305 === (2))){
var state_22304__$1 = state_22304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22304__$1,(4),ch);
} else {
if((state_val_22305 === (11))){
var inst_22294 = (state_22304[(2)]);
var state_22304__$1 = state_22304;
var statearr_22313_22336 = state_22304__$1;
(statearr_22313_22336[(2)] = inst_22294);

(statearr_22313_22336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (9))){
var state_22304__$1 = state_22304;
var statearr_22314_22337 = state_22304__$1;
(statearr_22314_22337[(2)] = null);

(statearr_22314_22337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (5))){
var inst_22289 = cljs.core.async.close_BANG_.call(null,out);
var state_22304__$1 = state_22304;
var statearr_22315_22338 = state_22304__$1;
(statearr_22315_22338[(2)] = inst_22289);

(statearr_22315_22338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (10))){
var inst_22297 = (state_22304[(2)]);
var state_22304__$1 = (function (){var statearr_22316 = state_22304;
(statearr_22316[(8)] = inst_22297);

return statearr_22316;
})();
var statearr_22317_22339 = state_22304__$1;
(statearr_22317_22339[(2)] = null);

(statearr_22317_22339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22305 === (8))){
var inst_22286 = (state_22304[(7)]);
var state_22304__$1 = state_22304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22304__$1,(11),out,inst_22286);
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
});})(c__20078__auto___22329,out))
;
return ((function (switch__19966__auto__,c__20078__auto___22329,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22321 = [null,null,null,null,null,null,null,null,null];
(statearr_22321[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22321[(1)] = (1));

return statearr_22321;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22304){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22322){if((e22322 instanceof Object)){
var ex__19970__auto__ = e22322;
var statearr_22323_22340 = state_22304;
(statearr_22323_22340[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22341 = state_22304;
state_22304 = G__22341;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22329,out))
})();
var state__20080__auto__ = (function (){var statearr_22324 = f__20079__auto__.call(null);
(statearr_22324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22329);

return statearr_22324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22329,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22342 = [];
var len__17885__auto___22345 = arguments.length;
var i__17886__auto___22346 = (0);
while(true){
if((i__17886__auto___22346 < len__17885__auto___22345)){
args22342.push((arguments[i__17886__auto___22346]));

var G__22347 = (i__17886__auto___22346 + (1));
i__17886__auto___22346 = G__22347;
continue;
} else {
}
break;
}

var G__22344 = args22342.length;
switch (G__22344) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22342.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__){
return (function (state_22514){
var state_val_22515 = (state_22514[(1)]);
if((state_val_22515 === (7))){
var inst_22510 = (state_22514[(2)]);
var state_22514__$1 = state_22514;
var statearr_22516_22557 = state_22514__$1;
(statearr_22516_22557[(2)] = inst_22510);

(statearr_22516_22557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (20))){
var inst_22480 = (state_22514[(7)]);
var inst_22491 = (state_22514[(2)]);
var inst_22492 = cljs.core.next.call(null,inst_22480);
var inst_22466 = inst_22492;
var inst_22467 = null;
var inst_22468 = (0);
var inst_22469 = (0);
var state_22514__$1 = (function (){var statearr_22517 = state_22514;
(statearr_22517[(8)] = inst_22467);

(statearr_22517[(9)] = inst_22469);

(statearr_22517[(10)] = inst_22466);

(statearr_22517[(11)] = inst_22491);

(statearr_22517[(12)] = inst_22468);

return statearr_22517;
})();
var statearr_22518_22558 = state_22514__$1;
(statearr_22518_22558[(2)] = null);

(statearr_22518_22558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (1))){
var state_22514__$1 = state_22514;
var statearr_22519_22559 = state_22514__$1;
(statearr_22519_22559[(2)] = null);

(statearr_22519_22559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (4))){
var inst_22455 = (state_22514[(13)]);
var inst_22455__$1 = (state_22514[(2)]);
var inst_22456 = (inst_22455__$1 == null);
var state_22514__$1 = (function (){var statearr_22520 = state_22514;
(statearr_22520[(13)] = inst_22455__$1);

return statearr_22520;
})();
if(cljs.core.truth_(inst_22456)){
var statearr_22521_22560 = state_22514__$1;
(statearr_22521_22560[(1)] = (5));

} else {
var statearr_22522_22561 = state_22514__$1;
(statearr_22522_22561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (15))){
var state_22514__$1 = state_22514;
var statearr_22526_22562 = state_22514__$1;
(statearr_22526_22562[(2)] = null);

(statearr_22526_22562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (21))){
var state_22514__$1 = state_22514;
var statearr_22527_22563 = state_22514__$1;
(statearr_22527_22563[(2)] = null);

(statearr_22527_22563[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (13))){
var inst_22467 = (state_22514[(8)]);
var inst_22469 = (state_22514[(9)]);
var inst_22466 = (state_22514[(10)]);
var inst_22468 = (state_22514[(12)]);
var inst_22476 = (state_22514[(2)]);
var inst_22477 = (inst_22469 + (1));
var tmp22523 = inst_22467;
var tmp22524 = inst_22466;
var tmp22525 = inst_22468;
var inst_22466__$1 = tmp22524;
var inst_22467__$1 = tmp22523;
var inst_22468__$1 = tmp22525;
var inst_22469__$1 = inst_22477;
var state_22514__$1 = (function (){var statearr_22528 = state_22514;
(statearr_22528[(8)] = inst_22467__$1);

(statearr_22528[(14)] = inst_22476);

(statearr_22528[(9)] = inst_22469__$1);

(statearr_22528[(10)] = inst_22466__$1);

(statearr_22528[(12)] = inst_22468__$1);

return statearr_22528;
})();
var statearr_22529_22564 = state_22514__$1;
(statearr_22529_22564[(2)] = null);

(statearr_22529_22564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (22))){
var state_22514__$1 = state_22514;
var statearr_22530_22565 = state_22514__$1;
(statearr_22530_22565[(2)] = null);

(statearr_22530_22565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (6))){
var inst_22455 = (state_22514[(13)]);
var inst_22464 = f.call(null,inst_22455);
var inst_22465 = cljs.core.seq.call(null,inst_22464);
var inst_22466 = inst_22465;
var inst_22467 = null;
var inst_22468 = (0);
var inst_22469 = (0);
var state_22514__$1 = (function (){var statearr_22531 = state_22514;
(statearr_22531[(8)] = inst_22467);

(statearr_22531[(9)] = inst_22469);

(statearr_22531[(10)] = inst_22466);

(statearr_22531[(12)] = inst_22468);

return statearr_22531;
})();
var statearr_22532_22566 = state_22514__$1;
(statearr_22532_22566[(2)] = null);

(statearr_22532_22566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (17))){
var inst_22480 = (state_22514[(7)]);
var inst_22484 = cljs.core.chunk_first.call(null,inst_22480);
var inst_22485 = cljs.core.chunk_rest.call(null,inst_22480);
var inst_22486 = cljs.core.count.call(null,inst_22484);
var inst_22466 = inst_22485;
var inst_22467 = inst_22484;
var inst_22468 = inst_22486;
var inst_22469 = (0);
var state_22514__$1 = (function (){var statearr_22533 = state_22514;
(statearr_22533[(8)] = inst_22467);

(statearr_22533[(9)] = inst_22469);

(statearr_22533[(10)] = inst_22466);

(statearr_22533[(12)] = inst_22468);

return statearr_22533;
})();
var statearr_22534_22567 = state_22514__$1;
(statearr_22534_22567[(2)] = null);

(statearr_22534_22567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (3))){
var inst_22512 = (state_22514[(2)]);
var state_22514__$1 = state_22514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22514__$1,inst_22512);
} else {
if((state_val_22515 === (12))){
var inst_22500 = (state_22514[(2)]);
var state_22514__$1 = state_22514;
var statearr_22535_22568 = state_22514__$1;
(statearr_22535_22568[(2)] = inst_22500);

(statearr_22535_22568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (2))){
var state_22514__$1 = state_22514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22514__$1,(4),in$);
} else {
if((state_val_22515 === (23))){
var inst_22508 = (state_22514[(2)]);
var state_22514__$1 = state_22514;
var statearr_22536_22569 = state_22514__$1;
(statearr_22536_22569[(2)] = inst_22508);

(statearr_22536_22569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (19))){
var inst_22495 = (state_22514[(2)]);
var state_22514__$1 = state_22514;
var statearr_22537_22570 = state_22514__$1;
(statearr_22537_22570[(2)] = inst_22495);

(statearr_22537_22570[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (11))){
var inst_22480 = (state_22514[(7)]);
var inst_22466 = (state_22514[(10)]);
var inst_22480__$1 = cljs.core.seq.call(null,inst_22466);
var state_22514__$1 = (function (){var statearr_22538 = state_22514;
(statearr_22538[(7)] = inst_22480__$1);

return statearr_22538;
})();
if(inst_22480__$1){
var statearr_22539_22571 = state_22514__$1;
(statearr_22539_22571[(1)] = (14));

} else {
var statearr_22540_22572 = state_22514__$1;
(statearr_22540_22572[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (9))){
var inst_22502 = (state_22514[(2)]);
var inst_22503 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22514__$1 = (function (){var statearr_22541 = state_22514;
(statearr_22541[(15)] = inst_22502);

return statearr_22541;
})();
if(cljs.core.truth_(inst_22503)){
var statearr_22542_22573 = state_22514__$1;
(statearr_22542_22573[(1)] = (21));

} else {
var statearr_22543_22574 = state_22514__$1;
(statearr_22543_22574[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (5))){
var inst_22458 = cljs.core.async.close_BANG_.call(null,out);
var state_22514__$1 = state_22514;
var statearr_22544_22575 = state_22514__$1;
(statearr_22544_22575[(2)] = inst_22458);

(statearr_22544_22575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (14))){
var inst_22480 = (state_22514[(7)]);
var inst_22482 = cljs.core.chunked_seq_QMARK_.call(null,inst_22480);
var state_22514__$1 = state_22514;
if(inst_22482){
var statearr_22545_22576 = state_22514__$1;
(statearr_22545_22576[(1)] = (17));

} else {
var statearr_22546_22577 = state_22514__$1;
(statearr_22546_22577[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (16))){
var inst_22498 = (state_22514[(2)]);
var state_22514__$1 = state_22514;
var statearr_22547_22578 = state_22514__$1;
(statearr_22547_22578[(2)] = inst_22498);

(statearr_22547_22578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22515 === (10))){
var inst_22467 = (state_22514[(8)]);
var inst_22469 = (state_22514[(9)]);
var inst_22474 = cljs.core._nth.call(null,inst_22467,inst_22469);
var state_22514__$1 = state_22514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22514__$1,(13),out,inst_22474);
} else {
if((state_val_22515 === (18))){
var inst_22480 = (state_22514[(7)]);
var inst_22489 = cljs.core.first.call(null,inst_22480);
var state_22514__$1 = state_22514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22514__$1,(20),out,inst_22489);
} else {
if((state_val_22515 === (8))){
var inst_22469 = (state_22514[(9)]);
var inst_22468 = (state_22514[(12)]);
var inst_22471 = (inst_22469 < inst_22468);
var inst_22472 = inst_22471;
var state_22514__$1 = state_22514;
if(cljs.core.truth_(inst_22472)){
var statearr_22548_22579 = state_22514__$1;
(statearr_22548_22579[(1)] = (10));

} else {
var statearr_22549_22580 = state_22514__$1;
(statearr_22549_22580[(1)] = (11));

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
});})(c__20078__auto__))
;
return ((function (switch__19966__auto__,c__20078__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_22553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22553[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__);

(statearr_22553[(1)] = (1));

return statearr_22553;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1 = (function (state_22514){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22554){if((e22554 instanceof Object)){
var ex__19970__auto__ = e22554;
var statearr_22555_22581 = state_22514;
(statearr_22555_22581[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22582 = state_22514;
state_22514 = G__22582;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__ = function(state_22514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1.call(this,state_22514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_22556 = f__20079__auto__.call(null);
(statearr_22556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_22556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto__))
);

return c__20078__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22583 = [];
var len__17885__auto___22586 = arguments.length;
var i__17886__auto___22587 = (0);
while(true){
if((i__17886__auto___22587 < len__17885__auto___22586)){
args22583.push((arguments[i__17886__auto___22587]));

var G__22588 = (i__17886__auto___22587 + (1));
i__17886__auto___22587 = G__22588;
continue;
} else {
}
break;
}

var G__22585 = args22583.length;
switch (G__22585) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22583.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22590 = [];
var len__17885__auto___22593 = arguments.length;
var i__17886__auto___22594 = (0);
while(true){
if((i__17886__auto___22594 < len__17885__auto___22593)){
args22590.push((arguments[i__17886__auto___22594]));

var G__22595 = (i__17886__auto___22594 + (1));
i__17886__auto___22594 = G__22595;
continue;
} else {
}
break;
}

var G__22592 = args22590.length;
switch (G__22592) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22590.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22597 = [];
var len__17885__auto___22648 = arguments.length;
var i__17886__auto___22649 = (0);
while(true){
if((i__17886__auto___22649 < len__17885__auto___22648)){
args22597.push((arguments[i__17886__auto___22649]));

var G__22650 = (i__17886__auto___22649 + (1));
i__17886__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var G__22599 = args22597.length;
switch (G__22599) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22597.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___22652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22652,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22652,out){
return (function (state_22623){
var state_val_22624 = (state_22623[(1)]);
if((state_val_22624 === (7))){
var inst_22618 = (state_22623[(2)]);
var state_22623__$1 = state_22623;
var statearr_22625_22653 = state_22623__$1;
(statearr_22625_22653[(2)] = inst_22618);

(statearr_22625_22653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (1))){
var inst_22600 = null;
var state_22623__$1 = (function (){var statearr_22626 = state_22623;
(statearr_22626[(7)] = inst_22600);

return statearr_22626;
})();
var statearr_22627_22654 = state_22623__$1;
(statearr_22627_22654[(2)] = null);

(statearr_22627_22654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (4))){
var inst_22603 = (state_22623[(8)]);
var inst_22603__$1 = (state_22623[(2)]);
var inst_22604 = (inst_22603__$1 == null);
var inst_22605 = cljs.core.not.call(null,inst_22604);
var state_22623__$1 = (function (){var statearr_22628 = state_22623;
(statearr_22628[(8)] = inst_22603__$1);

return statearr_22628;
})();
if(inst_22605){
var statearr_22629_22655 = state_22623__$1;
(statearr_22629_22655[(1)] = (5));

} else {
var statearr_22630_22656 = state_22623__$1;
(statearr_22630_22656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (6))){
var state_22623__$1 = state_22623;
var statearr_22631_22657 = state_22623__$1;
(statearr_22631_22657[(2)] = null);

(statearr_22631_22657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (3))){
var inst_22620 = (state_22623[(2)]);
var inst_22621 = cljs.core.async.close_BANG_.call(null,out);
var state_22623__$1 = (function (){var statearr_22632 = state_22623;
(statearr_22632[(9)] = inst_22620);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22623__$1,inst_22621);
} else {
if((state_val_22624 === (2))){
var state_22623__$1 = state_22623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22623__$1,(4),ch);
} else {
if((state_val_22624 === (11))){
var inst_22603 = (state_22623[(8)]);
var inst_22612 = (state_22623[(2)]);
var inst_22600 = inst_22603;
var state_22623__$1 = (function (){var statearr_22633 = state_22623;
(statearr_22633[(10)] = inst_22612);

(statearr_22633[(7)] = inst_22600);

return statearr_22633;
})();
var statearr_22634_22658 = state_22623__$1;
(statearr_22634_22658[(2)] = null);

(statearr_22634_22658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (9))){
var inst_22603 = (state_22623[(8)]);
var state_22623__$1 = state_22623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22623__$1,(11),out,inst_22603);
} else {
if((state_val_22624 === (5))){
var inst_22600 = (state_22623[(7)]);
var inst_22603 = (state_22623[(8)]);
var inst_22607 = cljs.core._EQ_.call(null,inst_22603,inst_22600);
var state_22623__$1 = state_22623;
if(inst_22607){
var statearr_22636_22659 = state_22623__$1;
(statearr_22636_22659[(1)] = (8));

} else {
var statearr_22637_22660 = state_22623__$1;
(statearr_22637_22660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (10))){
var inst_22615 = (state_22623[(2)]);
var state_22623__$1 = state_22623;
var statearr_22638_22661 = state_22623__$1;
(statearr_22638_22661[(2)] = inst_22615);

(statearr_22638_22661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22624 === (8))){
var inst_22600 = (state_22623[(7)]);
var tmp22635 = inst_22600;
var inst_22600__$1 = tmp22635;
var state_22623__$1 = (function (){var statearr_22639 = state_22623;
(statearr_22639[(7)] = inst_22600__$1);

return statearr_22639;
})();
var statearr_22640_22662 = state_22623__$1;
(statearr_22640_22662[(2)] = null);

(statearr_22640_22662[(1)] = (2));


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
});})(c__20078__auto___22652,out))
;
return ((function (switch__19966__auto__,c__20078__auto___22652,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22644[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22644[(1)] = (1));

return statearr_22644;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22623){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22645){if((e22645 instanceof Object)){
var ex__19970__auto__ = e22645;
var statearr_22646_22663 = state_22623;
(statearr_22646_22663[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22664 = state_22623;
state_22623 = G__22664;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22652,out))
})();
var state__20080__auto__ = (function (){var statearr_22647 = f__20079__auto__.call(null);
(statearr_22647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22652);

return statearr_22647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22652,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22665 = [];
var len__17885__auto___22735 = arguments.length;
var i__17886__auto___22736 = (0);
while(true){
if((i__17886__auto___22736 < len__17885__auto___22735)){
args22665.push((arguments[i__17886__auto___22736]));

var G__22737 = (i__17886__auto___22736 + (1));
i__17886__auto___22736 = G__22737;
continue;
} else {
}
break;
}

var G__22667 = args22665.length;
switch (G__22667) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22665.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___22739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22739,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22739,out){
return (function (state_22705){
var state_val_22706 = (state_22705[(1)]);
if((state_val_22706 === (7))){
var inst_22701 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22707_22740 = state_22705__$1;
(statearr_22707_22740[(2)] = inst_22701);

(statearr_22707_22740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (1))){
var inst_22668 = (new Array(n));
var inst_22669 = inst_22668;
var inst_22670 = (0);
var state_22705__$1 = (function (){var statearr_22708 = state_22705;
(statearr_22708[(7)] = inst_22670);

(statearr_22708[(8)] = inst_22669);

return statearr_22708;
})();
var statearr_22709_22741 = state_22705__$1;
(statearr_22709_22741[(2)] = null);

(statearr_22709_22741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (4))){
var inst_22673 = (state_22705[(9)]);
var inst_22673__$1 = (state_22705[(2)]);
var inst_22674 = (inst_22673__$1 == null);
var inst_22675 = cljs.core.not.call(null,inst_22674);
var state_22705__$1 = (function (){var statearr_22710 = state_22705;
(statearr_22710[(9)] = inst_22673__$1);

return statearr_22710;
})();
if(inst_22675){
var statearr_22711_22742 = state_22705__$1;
(statearr_22711_22742[(1)] = (5));

} else {
var statearr_22712_22743 = state_22705__$1;
(statearr_22712_22743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (15))){
var inst_22695 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22713_22744 = state_22705__$1;
(statearr_22713_22744[(2)] = inst_22695);

(statearr_22713_22744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (13))){
var state_22705__$1 = state_22705;
var statearr_22714_22745 = state_22705__$1;
(statearr_22714_22745[(2)] = null);

(statearr_22714_22745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (6))){
var inst_22670 = (state_22705[(7)]);
var inst_22691 = (inst_22670 > (0));
var state_22705__$1 = state_22705;
if(cljs.core.truth_(inst_22691)){
var statearr_22715_22746 = state_22705__$1;
(statearr_22715_22746[(1)] = (12));

} else {
var statearr_22716_22747 = state_22705__$1;
(statearr_22716_22747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (3))){
var inst_22703 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22705__$1,inst_22703);
} else {
if((state_val_22706 === (12))){
var inst_22669 = (state_22705[(8)]);
var inst_22693 = cljs.core.vec.call(null,inst_22669);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22705__$1,(15),out,inst_22693);
} else {
if((state_val_22706 === (2))){
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22705__$1,(4),ch);
} else {
if((state_val_22706 === (11))){
var inst_22685 = (state_22705[(2)]);
var inst_22686 = (new Array(n));
var inst_22669 = inst_22686;
var inst_22670 = (0);
var state_22705__$1 = (function (){var statearr_22717 = state_22705;
(statearr_22717[(7)] = inst_22670);

(statearr_22717[(8)] = inst_22669);

(statearr_22717[(10)] = inst_22685);

return statearr_22717;
})();
var statearr_22718_22748 = state_22705__$1;
(statearr_22718_22748[(2)] = null);

(statearr_22718_22748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (9))){
var inst_22669 = (state_22705[(8)]);
var inst_22683 = cljs.core.vec.call(null,inst_22669);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22705__$1,(11),out,inst_22683);
} else {
if((state_val_22706 === (5))){
var inst_22678 = (state_22705[(11)]);
var inst_22673 = (state_22705[(9)]);
var inst_22670 = (state_22705[(7)]);
var inst_22669 = (state_22705[(8)]);
var inst_22677 = (inst_22669[inst_22670] = inst_22673);
var inst_22678__$1 = (inst_22670 + (1));
var inst_22679 = (inst_22678__$1 < n);
var state_22705__$1 = (function (){var statearr_22719 = state_22705;
(statearr_22719[(11)] = inst_22678__$1);

(statearr_22719[(12)] = inst_22677);

return statearr_22719;
})();
if(cljs.core.truth_(inst_22679)){
var statearr_22720_22749 = state_22705__$1;
(statearr_22720_22749[(1)] = (8));

} else {
var statearr_22721_22750 = state_22705__$1;
(statearr_22721_22750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (14))){
var inst_22698 = (state_22705[(2)]);
var inst_22699 = cljs.core.async.close_BANG_.call(null,out);
var state_22705__$1 = (function (){var statearr_22723 = state_22705;
(statearr_22723[(13)] = inst_22698);

return statearr_22723;
})();
var statearr_22724_22751 = state_22705__$1;
(statearr_22724_22751[(2)] = inst_22699);

(statearr_22724_22751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (10))){
var inst_22689 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22725_22752 = state_22705__$1;
(statearr_22725_22752[(2)] = inst_22689);

(statearr_22725_22752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (8))){
var inst_22678 = (state_22705[(11)]);
var inst_22669 = (state_22705[(8)]);
var tmp22722 = inst_22669;
var inst_22669__$1 = tmp22722;
var inst_22670 = inst_22678;
var state_22705__$1 = (function (){var statearr_22726 = state_22705;
(statearr_22726[(7)] = inst_22670);

(statearr_22726[(8)] = inst_22669__$1);

return statearr_22726;
})();
var statearr_22727_22753 = state_22705__$1;
(statearr_22727_22753[(2)] = null);

(statearr_22727_22753[(1)] = (2));


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
});})(c__20078__auto___22739,out))
;
return ((function (switch__19966__auto__,c__20078__auto___22739,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22731[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22731[(1)] = (1));

return statearr_22731;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22705){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22732){if((e22732 instanceof Object)){
var ex__19970__auto__ = e22732;
var statearr_22733_22754 = state_22705;
(statearr_22733_22754[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22755 = state_22705;
state_22705 = G__22755;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22739,out))
})();
var state__20080__auto__ = (function (){var statearr_22734 = f__20079__auto__.call(null);
(statearr_22734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22739);

return statearr_22734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22739,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22756 = [];
var len__17885__auto___22830 = arguments.length;
var i__17886__auto___22831 = (0);
while(true){
if((i__17886__auto___22831 < len__17885__auto___22830)){
args22756.push((arguments[i__17886__auto___22831]));

var G__22832 = (i__17886__auto___22831 + (1));
i__17886__auto___22831 = G__22832;
continue;
} else {
}
break;
}

var G__22758 = args22756.length;
switch (G__22758) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22756.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___22834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___22834,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___22834,out){
return (function (state_22800){
var state_val_22801 = (state_22800[(1)]);
if((state_val_22801 === (7))){
var inst_22796 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22802_22835 = state_22800__$1;
(statearr_22802_22835[(2)] = inst_22796);

(statearr_22802_22835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (1))){
var inst_22759 = [];
var inst_22760 = inst_22759;
var inst_22761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22800__$1 = (function (){var statearr_22803 = state_22800;
(statearr_22803[(7)] = inst_22760);

(statearr_22803[(8)] = inst_22761);

return statearr_22803;
})();
var statearr_22804_22836 = state_22800__$1;
(statearr_22804_22836[(2)] = null);

(statearr_22804_22836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (4))){
var inst_22764 = (state_22800[(9)]);
var inst_22764__$1 = (state_22800[(2)]);
var inst_22765 = (inst_22764__$1 == null);
var inst_22766 = cljs.core.not.call(null,inst_22765);
var state_22800__$1 = (function (){var statearr_22805 = state_22800;
(statearr_22805[(9)] = inst_22764__$1);

return statearr_22805;
})();
if(inst_22766){
var statearr_22806_22837 = state_22800__$1;
(statearr_22806_22837[(1)] = (5));

} else {
var statearr_22807_22838 = state_22800__$1;
(statearr_22807_22838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (15))){
var inst_22790 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22808_22839 = state_22800__$1;
(statearr_22808_22839[(2)] = inst_22790);

(statearr_22808_22839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (13))){
var state_22800__$1 = state_22800;
var statearr_22809_22840 = state_22800__$1;
(statearr_22809_22840[(2)] = null);

(statearr_22809_22840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (6))){
var inst_22760 = (state_22800[(7)]);
var inst_22785 = inst_22760.length;
var inst_22786 = (inst_22785 > (0));
var state_22800__$1 = state_22800;
if(cljs.core.truth_(inst_22786)){
var statearr_22810_22841 = state_22800__$1;
(statearr_22810_22841[(1)] = (12));

} else {
var statearr_22811_22842 = state_22800__$1;
(statearr_22811_22842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (3))){
var inst_22798 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22800__$1,inst_22798);
} else {
if((state_val_22801 === (12))){
var inst_22760 = (state_22800[(7)]);
var inst_22788 = cljs.core.vec.call(null,inst_22760);
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22800__$1,(15),out,inst_22788);
} else {
if((state_val_22801 === (2))){
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22800__$1,(4),ch);
} else {
if((state_val_22801 === (11))){
var inst_22764 = (state_22800[(9)]);
var inst_22768 = (state_22800[(10)]);
var inst_22778 = (state_22800[(2)]);
var inst_22779 = [];
var inst_22780 = inst_22779.push(inst_22764);
var inst_22760 = inst_22779;
var inst_22761 = inst_22768;
var state_22800__$1 = (function (){var statearr_22812 = state_22800;
(statearr_22812[(7)] = inst_22760);

(statearr_22812[(8)] = inst_22761);

(statearr_22812[(11)] = inst_22780);

(statearr_22812[(12)] = inst_22778);

return statearr_22812;
})();
var statearr_22813_22843 = state_22800__$1;
(statearr_22813_22843[(2)] = null);

(statearr_22813_22843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (9))){
var inst_22760 = (state_22800[(7)]);
var inst_22776 = cljs.core.vec.call(null,inst_22760);
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22800__$1,(11),out,inst_22776);
} else {
if((state_val_22801 === (5))){
var inst_22761 = (state_22800[(8)]);
var inst_22764 = (state_22800[(9)]);
var inst_22768 = (state_22800[(10)]);
var inst_22768__$1 = f.call(null,inst_22764);
var inst_22769 = cljs.core._EQ_.call(null,inst_22768__$1,inst_22761);
var inst_22770 = cljs.core.keyword_identical_QMARK_.call(null,inst_22761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22771 = (inst_22769) || (inst_22770);
var state_22800__$1 = (function (){var statearr_22814 = state_22800;
(statearr_22814[(10)] = inst_22768__$1);

return statearr_22814;
})();
if(cljs.core.truth_(inst_22771)){
var statearr_22815_22844 = state_22800__$1;
(statearr_22815_22844[(1)] = (8));

} else {
var statearr_22816_22845 = state_22800__$1;
(statearr_22816_22845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (14))){
var inst_22793 = (state_22800[(2)]);
var inst_22794 = cljs.core.async.close_BANG_.call(null,out);
var state_22800__$1 = (function (){var statearr_22818 = state_22800;
(statearr_22818[(13)] = inst_22793);

return statearr_22818;
})();
var statearr_22819_22846 = state_22800__$1;
(statearr_22819_22846[(2)] = inst_22794);

(statearr_22819_22846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (10))){
var inst_22783 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22820_22847 = state_22800__$1;
(statearr_22820_22847[(2)] = inst_22783);

(statearr_22820_22847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (8))){
var inst_22760 = (state_22800[(7)]);
var inst_22764 = (state_22800[(9)]);
var inst_22768 = (state_22800[(10)]);
var inst_22773 = inst_22760.push(inst_22764);
var tmp22817 = inst_22760;
var inst_22760__$1 = tmp22817;
var inst_22761 = inst_22768;
var state_22800__$1 = (function (){var statearr_22821 = state_22800;
(statearr_22821[(14)] = inst_22773);

(statearr_22821[(7)] = inst_22760__$1);

(statearr_22821[(8)] = inst_22761);

return statearr_22821;
})();
var statearr_22822_22848 = state_22800__$1;
(statearr_22822_22848[(2)] = null);

(statearr_22822_22848[(1)] = (2));


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
});})(c__20078__auto___22834,out))
;
return ((function (switch__19966__auto__,c__20078__auto___22834,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_22826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22826[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_22826[(1)] = (1));

return statearr_22826;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_22800){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_22800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e22827){if((e22827 instanceof Object)){
var ex__19970__auto__ = e22827;
var statearr_22828_22849 = state_22800;
(statearr_22828_22849[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22850 = state_22800;
state_22800 = G__22850;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_22800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_22800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___22834,out))
})();
var state__20080__auto__ = (function (){var statearr_22829 = f__20079__auto__.call(null);
(statearr_22829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___22834);

return statearr_22829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___22834,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1450189826850