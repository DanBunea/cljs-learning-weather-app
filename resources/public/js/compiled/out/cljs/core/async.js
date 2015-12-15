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
var args35076 = [];
var len__17885__auto___35082 = arguments.length;
var i__17886__auto___35083 = (0);
while(true){
if((i__17886__auto___35083 < len__17885__auto___35082)){
args35076.push((arguments[i__17886__auto___35083]));

var G__35084 = (i__17886__auto___35083 + (1));
i__17886__auto___35083 = G__35084;
continue;
} else {
}
break;
}

var G__35078 = args35076.length;
switch (G__35078) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35076.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35079 = (function (f,blockable,meta35080){
this.f = f;
this.blockable = blockable;
this.meta35080 = meta35080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35081,meta35080__$1){
var self__ = this;
var _35081__$1 = this;
return (new cljs.core.async.t_cljs$core$async35079(self__.f,self__.blockable,meta35080__$1));
});

cljs.core.async.t_cljs$core$async35079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35081){
var self__ = this;
var _35081__$1 = this;
return self__.meta35080;
});

cljs.core.async.t_cljs$core$async35079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35080","meta35080",1129579729,null)], null);
});

cljs.core.async.t_cljs$core$async35079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35079";

cljs.core.async.t_cljs$core$async35079.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async35079");
});

cljs.core.async.__GT_t_cljs$core$async35079 = (function cljs$core$async$__GT_t_cljs$core$async35079(f__$1,blockable__$1,meta35080){
return (new cljs.core.async.t_cljs$core$async35079(f__$1,blockable__$1,meta35080));
});

}

return (new cljs.core.async.t_cljs$core$async35079(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args35088 = [];
var len__17885__auto___35091 = arguments.length;
var i__17886__auto___35092 = (0);
while(true){
if((i__17886__auto___35092 < len__17885__auto___35091)){
args35088.push((arguments[i__17886__auto___35092]));

var G__35093 = (i__17886__auto___35092 + (1));
i__17886__auto___35092 = G__35093;
continue;
} else {
}
break;
}

var G__35090 = args35088.length;
switch (G__35090) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35088.length)].join('')));

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
var args35095 = [];
var len__17885__auto___35098 = arguments.length;
var i__17886__auto___35099 = (0);
while(true){
if((i__17886__auto___35099 < len__17885__auto___35098)){
args35095.push((arguments[i__17886__auto___35099]));

var G__35100 = (i__17886__auto___35099 + (1));
i__17886__auto___35099 = G__35100;
continue;
} else {
}
break;
}

var G__35097 = args35095.length;
switch (G__35097) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35095.length)].join('')));

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
var args35102 = [];
var len__17885__auto___35105 = arguments.length;
var i__17886__auto___35106 = (0);
while(true){
if((i__17886__auto___35106 < len__17885__auto___35105)){
args35102.push((arguments[i__17886__auto___35106]));

var G__35107 = (i__17886__auto___35106 + (1));
i__17886__auto___35106 = G__35107;
continue;
} else {
}
break;
}

var G__35104 = args35102.length;
switch (G__35104) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35102.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35109 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35109);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35109,ret){
return (function (){
return fn1.call(null,val_35109);
});})(val_35109,ret))
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
var args35110 = [];
var len__17885__auto___35113 = arguments.length;
var i__17886__auto___35114 = (0);
while(true){
if((i__17886__auto___35114 < len__17885__auto___35113)){
args35110.push((arguments[i__17886__auto___35114]));

var G__35115 = (i__17886__auto___35114 + (1));
i__17886__auto___35114 = G__35115;
continue;
} else {
}
break;
}

var G__35112 = args35110.length;
switch (G__35112) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35110.length)].join('')));

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
var n__17730__auto___35117 = n;
var x_35118 = (0);
while(true){
if((x_35118 < n__17730__auto___35117)){
(a[x_35118] = (0));

var G__35119 = (x_35118 + (1));
x_35118 = G__35119;
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

var G__35120 = (i + (1));
i = G__35120;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35124 = (function (alt_flag,flag,meta35125){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35125 = meta35125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35126,meta35125__$1){
var self__ = this;
var _35126__$1 = this;
return (new cljs.core.async.t_cljs$core$async35124(self__.alt_flag,self__.flag,meta35125__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35126){
var self__ = this;
var _35126__$1 = this;
return self__.meta35125;
});})(flag))
;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35124.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35125","meta35125",1751536498,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35124";

cljs.core.async.t_cljs$core$async35124.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async35124");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35124 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35124(alt_flag__$1,flag__$1,meta35125){
return (new cljs.core.async.t_cljs$core$async35124(alt_flag__$1,flag__$1,meta35125));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35124(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35130 = (function (alt_handler,flag,cb,meta35131){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35131 = meta35131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35132,meta35131__$1){
var self__ = this;
var _35132__$1 = this;
return (new cljs.core.async.t_cljs$core$async35130(self__.alt_handler,self__.flag,self__.cb,meta35131__$1));
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35132){
var self__ = this;
var _35132__$1 = this;
return self__.meta35131;
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35131","meta35131",1939261768,null)], null);
});

cljs.core.async.t_cljs$core$async35130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35130";

cljs.core.async.t_cljs$core$async35130.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async35130");
});

cljs.core.async.__GT_t_cljs$core$async35130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35130(alt_handler__$1,flag__$1,cb__$1,meta35131){
return (new cljs.core.async.t_cljs$core$async35130(alt_handler__$1,flag__$1,cb__$1,meta35131));
});

}

return (new cljs.core.async.t_cljs$core$async35130(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35133_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35133_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35134_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35134_SHARP_,port], null));
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
var G__35135 = (i + (1));
i = G__35135;
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
var len__17885__auto___35141 = arguments.length;
var i__17886__auto___35142 = (0);
while(true){
if((i__17886__auto___35142 < len__17885__auto___35141)){
args__17892__auto__.push((arguments[i__17886__auto___35142]));

var G__35143 = (i__17886__auto___35142 + (1));
i__17886__auto___35142 = G__35143;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((1) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17893__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35138){
var map__35139 = p__35138;
var map__35139__$1 = ((((!((map__35139 == null)))?((((map__35139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35139):map__35139);
var opts = map__35139__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35136){
var G__35137 = cljs.core.first.call(null,seq35136);
var seq35136__$1 = cljs.core.next.call(null,seq35136);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35137,seq35136__$1);
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
var args35144 = [];
var len__17885__auto___35194 = arguments.length;
var i__17886__auto___35195 = (0);
while(true){
if((i__17886__auto___35195 < len__17885__auto___35194)){
args35144.push((arguments[i__17886__auto___35195]));

var G__35196 = (i__17886__auto___35195 + (1));
i__17886__auto___35195 = G__35196;
continue;
} else {
}
break;
}

var G__35146 = args35144.length;
switch (G__35146) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35144.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20078__auto___35198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___35198){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___35198){
return (function (state_35170){
var state_val_35171 = (state_35170[(1)]);
if((state_val_35171 === (7))){
var inst_35166 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35172_35199 = state_35170__$1;
(statearr_35172_35199[(2)] = inst_35166);

(statearr_35172_35199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (1))){
var state_35170__$1 = state_35170;
var statearr_35173_35200 = state_35170__$1;
(statearr_35173_35200[(2)] = null);

(statearr_35173_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (4))){
var inst_35149 = (state_35170[(7)]);
var inst_35149__$1 = (state_35170[(2)]);
var inst_35150 = (inst_35149__$1 == null);
var state_35170__$1 = (function (){var statearr_35174 = state_35170;
(statearr_35174[(7)] = inst_35149__$1);

return statearr_35174;
})();
if(cljs.core.truth_(inst_35150)){
var statearr_35175_35201 = state_35170__$1;
(statearr_35175_35201[(1)] = (5));

} else {
var statearr_35176_35202 = state_35170__$1;
(statearr_35176_35202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (13))){
var state_35170__$1 = state_35170;
var statearr_35177_35203 = state_35170__$1;
(statearr_35177_35203[(2)] = null);

(statearr_35177_35203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (6))){
var inst_35149 = (state_35170[(7)]);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35170__$1,(11),to,inst_35149);
} else {
if((state_val_35171 === (3))){
var inst_35168 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35170__$1,inst_35168);
} else {
if((state_val_35171 === (12))){
var state_35170__$1 = state_35170;
var statearr_35178_35204 = state_35170__$1;
(statearr_35178_35204[(2)] = null);

(statearr_35178_35204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (2))){
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35170__$1,(4),from);
} else {
if((state_val_35171 === (11))){
var inst_35159 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
if(cljs.core.truth_(inst_35159)){
var statearr_35179_35205 = state_35170__$1;
(statearr_35179_35205[(1)] = (12));

} else {
var statearr_35180_35206 = state_35170__$1;
(statearr_35180_35206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (9))){
var state_35170__$1 = state_35170;
var statearr_35181_35207 = state_35170__$1;
(statearr_35181_35207[(2)] = null);

(statearr_35181_35207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (5))){
var state_35170__$1 = state_35170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35182_35208 = state_35170__$1;
(statearr_35182_35208[(1)] = (8));

} else {
var statearr_35183_35209 = state_35170__$1;
(statearr_35183_35209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (14))){
var inst_35164 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35184_35210 = state_35170__$1;
(statearr_35184_35210[(2)] = inst_35164);

(statearr_35184_35210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (10))){
var inst_35156 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35185_35211 = state_35170__$1;
(statearr_35185_35211[(2)] = inst_35156);

(statearr_35185_35211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (8))){
var inst_35153 = cljs.core.async.close_BANG_.call(null,to);
var state_35170__$1 = state_35170;
var statearr_35186_35212 = state_35170__$1;
(statearr_35186_35212[(2)] = inst_35153);

(statearr_35186_35212[(1)] = (10));


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
});})(c__20078__auto___35198))
;
return ((function (switch__19966__auto__,c__20078__auto___35198){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_35190 = [null,null,null,null,null,null,null,null];
(statearr_35190[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_35190[(1)] = (1));

return statearr_35190;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_35170){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35191){if((e35191 instanceof Object)){
var ex__19970__auto__ = e35191;
var statearr_35192_35213 = state_35170;
(statearr_35192_35213[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35214 = state_35170;
state_35170 = G__35214;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_35170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_35170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___35198))
})();
var state__20080__auto__ = (function (){var statearr_35193 = f__20079__auto__.call(null);
(statearr_35193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___35198);

return statearr_35193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___35198))
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
return (function (p__35398){
var vec__35399 = p__35398;
var v = cljs.core.nth.call(null,vec__35399,(0),null);
var p = cljs.core.nth.call(null,vec__35399,(1),null);
var job = vec__35399;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20078__auto___35581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___35581,res,vec__35399,v,p,job,jobs,results){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___35581,res,vec__35399,v,p,job,jobs,results){
return (function (state_35404){
var state_val_35405 = (state_35404[(1)]);
if((state_val_35405 === (1))){
var state_35404__$1 = state_35404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35404__$1,(2),res,v);
} else {
if((state_val_35405 === (2))){
var inst_35401 = (state_35404[(2)]);
var inst_35402 = cljs.core.async.close_BANG_.call(null,res);
var state_35404__$1 = (function (){var statearr_35406 = state_35404;
(statearr_35406[(7)] = inst_35401);

return statearr_35406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35404__$1,inst_35402);
} else {
return null;
}
}
});})(c__20078__auto___35581,res,vec__35399,v,p,job,jobs,results))
;
return ((function (switch__19966__auto__,c__20078__auto___35581,res,vec__35399,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_35410 = [null,null,null,null,null,null,null,null];
(statearr_35410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_35410[(1)] = (1));

return statearr_35410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_35404){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35411){if((e35411 instanceof Object)){
var ex__19970__auto__ = e35411;
var statearr_35412_35582 = state_35404;
(statearr_35412_35582[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35583 = state_35404;
state_35404 = G__35583;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_35404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_35404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___35581,res,vec__35399,v,p,job,jobs,results))
})();
var state__20080__auto__ = (function (){var statearr_35413 = f__20079__auto__.call(null);
(statearr_35413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___35581);

return statearr_35413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___35581,res,vec__35399,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35414){
var vec__35415 = p__35414;
var v = cljs.core.nth.call(null,vec__35415,(0),null);
var p = cljs.core.nth.call(null,vec__35415,(1),null);
var job = vec__35415;
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
var n__17730__auto___35584 = n;
var __35585 = (0);
while(true){
if((__35585 < n__17730__auto___35584)){
var G__35416_35586 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35416_35586) {
case "compute":
var c__20078__auto___35588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35585,c__20078__auto___35588,G__35416_35586,n__17730__auto___35584,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (__35585,c__20078__auto___35588,G__35416_35586,n__17730__auto___35584,jobs,results,process,async){
return (function (state_35429){
var state_val_35430 = (state_35429[(1)]);
if((state_val_35430 === (1))){
var state_35429__$1 = state_35429;
var statearr_35431_35589 = state_35429__$1;
(statearr_35431_35589[(2)] = null);

(statearr_35431_35589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (2))){
var state_35429__$1 = state_35429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35429__$1,(4),jobs);
} else {
if((state_val_35430 === (3))){
var inst_35427 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35429__$1,inst_35427);
} else {
if((state_val_35430 === (4))){
var inst_35419 = (state_35429[(2)]);
var inst_35420 = process.call(null,inst_35419);
var state_35429__$1 = state_35429;
if(cljs.core.truth_(inst_35420)){
var statearr_35432_35590 = state_35429__$1;
(statearr_35432_35590[(1)] = (5));

} else {
var statearr_35433_35591 = state_35429__$1;
(statearr_35433_35591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (5))){
var state_35429__$1 = state_35429;
var statearr_35434_35592 = state_35429__$1;
(statearr_35434_35592[(2)] = null);

(statearr_35434_35592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (6))){
var state_35429__$1 = state_35429;
var statearr_35435_35593 = state_35429__$1;
(statearr_35435_35593[(2)] = null);

(statearr_35435_35593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (7))){
var inst_35425 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
var statearr_35436_35594 = state_35429__$1;
(statearr_35436_35594[(2)] = inst_35425);

(statearr_35436_35594[(1)] = (3));


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
});})(__35585,c__20078__auto___35588,G__35416_35586,n__17730__auto___35584,jobs,results,process,async))
;
return ((function (__35585,switch__19966__auto__,c__20078__auto___35588,G__35416_35586,n__17730__auto___35584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_35440 = [null,null,null,null,null,null,null];
(statearr_35440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_35440[(1)] = (1));

return statearr_35440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_35429){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35441){if((e35441 instanceof Object)){
var ex__19970__auto__ = e35441;
var statearr_35442_35595 = state_35429;
(statearr_35442_35595[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35596 = state_35429;
state_35429 = G__35596;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_35429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_35429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(__35585,switch__19966__auto__,c__20078__auto___35588,G__35416_35586,n__17730__auto___35584,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_35443 = f__20079__auto__.call(null);
(statearr_35443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___35588);

return statearr_35443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(__35585,c__20078__auto___35588,G__35416_35586,n__17730__auto___35584,jobs,results,process,async))
);


break;
case "async":
var c__20078__auto___35597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35585,c__20078__auto___35597,G__35416_35586,n__17730__auto___35584,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (__35585,c__20078__auto___35597,G__35416_35586,n__17730__auto___35584,jobs,results,process,async){
return (function (state_35456){
var state_val_35457 = (state_35456[(1)]);
if((state_val_35457 === (1))){
var state_35456__$1 = state_35456;
var statearr_35458_35598 = state_35456__$1;
(statearr_35458_35598[(2)] = null);

(statearr_35458_35598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (2))){
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35456__$1,(4),jobs);
} else {
if((state_val_35457 === (3))){
var inst_35454 = (state_35456[(2)]);
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35456__$1,inst_35454);
} else {
if((state_val_35457 === (4))){
var inst_35446 = (state_35456[(2)]);
var inst_35447 = async.call(null,inst_35446);
var state_35456__$1 = state_35456;
if(cljs.core.truth_(inst_35447)){
var statearr_35459_35599 = state_35456__$1;
(statearr_35459_35599[(1)] = (5));

} else {
var statearr_35460_35600 = state_35456__$1;
(statearr_35460_35600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (5))){
var state_35456__$1 = state_35456;
var statearr_35461_35601 = state_35456__$1;
(statearr_35461_35601[(2)] = null);

(statearr_35461_35601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (6))){
var state_35456__$1 = state_35456;
var statearr_35462_35602 = state_35456__$1;
(statearr_35462_35602[(2)] = null);

(statearr_35462_35602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (7))){
var inst_35452 = (state_35456[(2)]);
var state_35456__$1 = state_35456;
var statearr_35463_35603 = state_35456__$1;
(statearr_35463_35603[(2)] = inst_35452);

(statearr_35463_35603[(1)] = (3));


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
});})(__35585,c__20078__auto___35597,G__35416_35586,n__17730__auto___35584,jobs,results,process,async))
;
return ((function (__35585,switch__19966__auto__,c__20078__auto___35597,G__35416_35586,n__17730__auto___35584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_35467 = [null,null,null,null,null,null,null];
(statearr_35467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_35467[(1)] = (1));

return statearr_35467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_35456){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35468){if((e35468 instanceof Object)){
var ex__19970__auto__ = e35468;
var statearr_35469_35604 = state_35456;
(statearr_35469_35604[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35605 = state_35456;
state_35456 = G__35605;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_35456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_35456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(__35585,switch__19966__auto__,c__20078__auto___35597,G__35416_35586,n__17730__auto___35584,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_35470 = f__20079__auto__.call(null);
(statearr_35470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___35597);

return statearr_35470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(__35585,c__20078__auto___35597,G__35416_35586,n__17730__auto___35584,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35606 = (__35585 + (1));
__35585 = G__35606;
continue;
} else {
}
break;
}

var c__20078__auto___35607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___35607,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___35607,jobs,results,process,async){
return (function (state_35492){
var state_val_35493 = (state_35492[(1)]);
if((state_val_35493 === (1))){
var state_35492__$1 = state_35492;
var statearr_35494_35608 = state_35492__$1;
(statearr_35494_35608[(2)] = null);

(statearr_35494_35608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35493 === (2))){
var state_35492__$1 = state_35492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35492__$1,(4),from);
} else {
if((state_val_35493 === (3))){
var inst_35490 = (state_35492[(2)]);
var state_35492__$1 = state_35492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35492__$1,inst_35490);
} else {
if((state_val_35493 === (4))){
var inst_35473 = (state_35492[(7)]);
var inst_35473__$1 = (state_35492[(2)]);
var inst_35474 = (inst_35473__$1 == null);
var state_35492__$1 = (function (){var statearr_35495 = state_35492;
(statearr_35495[(7)] = inst_35473__$1);

return statearr_35495;
})();
if(cljs.core.truth_(inst_35474)){
var statearr_35496_35609 = state_35492__$1;
(statearr_35496_35609[(1)] = (5));

} else {
var statearr_35497_35610 = state_35492__$1;
(statearr_35497_35610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35493 === (5))){
var inst_35476 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35492__$1 = state_35492;
var statearr_35498_35611 = state_35492__$1;
(statearr_35498_35611[(2)] = inst_35476);

(statearr_35498_35611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35493 === (6))){
var inst_35478 = (state_35492[(8)]);
var inst_35473 = (state_35492[(7)]);
var inst_35478__$1 = cljs.core.async.chan.call(null,(1));
var inst_35479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35480 = [inst_35473,inst_35478__$1];
var inst_35481 = (new cljs.core.PersistentVector(null,2,(5),inst_35479,inst_35480,null));
var state_35492__$1 = (function (){var statearr_35499 = state_35492;
(statearr_35499[(8)] = inst_35478__$1);

return statearr_35499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35492__$1,(8),jobs,inst_35481);
} else {
if((state_val_35493 === (7))){
var inst_35488 = (state_35492[(2)]);
var state_35492__$1 = state_35492;
var statearr_35500_35612 = state_35492__$1;
(statearr_35500_35612[(2)] = inst_35488);

(statearr_35500_35612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35493 === (8))){
var inst_35478 = (state_35492[(8)]);
var inst_35483 = (state_35492[(2)]);
var state_35492__$1 = (function (){var statearr_35501 = state_35492;
(statearr_35501[(9)] = inst_35483);

return statearr_35501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35492__$1,(9),results,inst_35478);
} else {
if((state_val_35493 === (9))){
var inst_35485 = (state_35492[(2)]);
var state_35492__$1 = (function (){var statearr_35502 = state_35492;
(statearr_35502[(10)] = inst_35485);

return statearr_35502;
})();
var statearr_35503_35613 = state_35492__$1;
(statearr_35503_35613[(2)] = null);

(statearr_35503_35613[(1)] = (2));


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
});})(c__20078__auto___35607,jobs,results,process,async))
;
return ((function (switch__19966__auto__,c__20078__auto___35607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_35507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_35507[(1)] = (1));

return statearr_35507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_35492){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35508){if((e35508 instanceof Object)){
var ex__19970__auto__ = e35508;
var statearr_35509_35614 = state_35492;
(statearr_35509_35614[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35615 = state_35492;
state_35492 = G__35615;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_35492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_35492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___35607,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_35510 = f__20079__auto__.call(null);
(statearr_35510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___35607);

return statearr_35510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___35607,jobs,results,process,async))
);


var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,jobs,results,process,async){
return (function (state_35548){
var state_val_35549 = (state_35548[(1)]);
if((state_val_35549 === (7))){
var inst_35544 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35550_35616 = state_35548__$1;
(statearr_35550_35616[(2)] = inst_35544);

(statearr_35550_35616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (20))){
var state_35548__$1 = state_35548;
var statearr_35551_35617 = state_35548__$1;
(statearr_35551_35617[(2)] = null);

(statearr_35551_35617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (1))){
var state_35548__$1 = state_35548;
var statearr_35552_35618 = state_35548__$1;
(statearr_35552_35618[(2)] = null);

(statearr_35552_35618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (4))){
var inst_35513 = (state_35548[(7)]);
var inst_35513__$1 = (state_35548[(2)]);
var inst_35514 = (inst_35513__$1 == null);
var state_35548__$1 = (function (){var statearr_35553 = state_35548;
(statearr_35553[(7)] = inst_35513__$1);

return statearr_35553;
})();
if(cljs.core.truth_(inst_35514)){
var statearr_35554_35619 = state_35548__$1;
(statearr_35554_35619[(1)] = (5));

} else {
var statearr_35555_35620 = state_35548__$1;
(statearr_35555_35620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (15))){
var inst_35526 = (state_35548[(8)]);
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35548__$1,(18),to,inst_35526);
} else {
if((state_val_35549 === (21))){
var inst_35539 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35556_35621 = state_35548__$1;
(statearr_35556_35621[(2)] = inst_35539);

(statearr_35556_35621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (13))){
var inst_35541 = (state_35548[(2)]);
var state_35548__$1 = (function (){var statearr_35557 = state_35548;
(statearr_35557[(9)] = inst_35541);

return statearr_35557;
})();
var statearr_35558_35622 = state_35548__$1;
(statearr_35558_35622[(2)] = null);

(statearr_35558_35622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (6))){
var inst_35513 = (state_35548[(7)]);
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35548__$1,(11),inst_35513);
} else {
if((state_val_35549 === (17))){
var inst_35534 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
if(cljs.core.truth_(inst_35534)){
var statearr_35559_35623 = state_35548__$1;
(statearr_35559_35623[(1)] = (19));

} else {
var statearr_35560_35624 = state_35548__$1;
(statearr_35560_35624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (3))){
var inst_35546 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35548__$1,inst_35546);
} else {
if((state_val_35549 === (12))){
var inst_35523 = (state_35548[(10)]);
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35548__$1,(14),inst_35523);
} else {
if((state_val_35549 === (2))){
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35548__$1,(4),results);
} else {
if((state_val_35549 === (19))){
var state_35548__$1 = state_35548;
var statearr_35561_35625 = state_35548__$1;
(statearr_35561_35625[(2)] = null);

(statearr_35561_35625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (11))){
var inst_35523 = (state_35548[(2)]);
var state_35548__$1 = (function (){var statearr_35562 = state_35548;
(statearr_35562[(10)] = inst_35523);

return statearr_35562;
})();
var statearr_35563_35626 = state_35548__$1;
(statearr_35563_35626[(2)] = null);

(statearr_35563_35626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (9))){
var state_35548__$1 = state_35548;
var statearr_35564_35627 = state_35548__$1;
(statearr_35564_35627[(2)] = null);

(statearr_35564_35627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (5))){
var state_35548__$1 = state_35548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35565_35628 = state_35548__$1;
(statearr_35565_35628[(1)] = (8));

} else {
var statearr_35566_35629 = state_35548__$1;
(statearr_35566_35629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (14))){
var inst_35526 = (state_35548[(8)]);
var inst_35528 = (state_35548[(11)]);
var inst_35526__$1 = (state_35548[(2)]);
var inst_35527 = (inst_35526__$1 == null);
var inst_35528__$1 = cljs.core.not.call(null,inst_35527);
var state_35548__$1 = (function (){var statearr_35567 = state_35548;
(statearr_35567[(8)] = inst_35526__$1);

(statearr_35567[(11)] = inst_35528__$1);

return statearr_35567;
})();
if(inst_35528__$1){
var statearr_35568_35630 = state_35548__$1;
(statearr_35568_35630[(1)] = (15));

} else {
var statearr_35569_35631 = state_35548__$1;
(statearr_35569_35631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (16))){
var inst_35528 = (state_35548[(11)]);
var state_35548__$1 = state_35548;
var statearr_35570_35632 = state_35548__$1;
(statearr_35570_35632[(2)] = inst_35528);

(statearr_35570_35632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (10))){
var inst_35520 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35571_35633 = state_35548__$1;
(statearr_35571_35633[(2)] = inst_35520);

(statearr_35571_35633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (18))){
var inst_35531 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35572_35634 = state_35548__$1;
(statearr_35572_35634[(2)] = inst_35531);

(statearr_35572_35634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35549 === (8))){
var inst_35517 = cljs.core.async.close_BANG_.call(null,to);
var state_35548__$1 = state_35548;
var statearr_35573_35635 = state_35548__$1;
(statearr_35573_35635[(2)] = inst_35517);

(statearr_35573_35635[(1)] = (10));


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
var statearr_35577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_35577[(1)] = (1));

return statearr_35577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_35548){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35578){if((e35578 instanceof Object)){
var ex__19970__auto__ = e35578;
var statearr_35579_35636 = state_35548;
(statearr_35579_35636[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_35548;
state_35548 = G__35637;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_35548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_35548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_35580 = f__20079__auto__.call(null);
(statearr_35580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_35580;
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
var args35638 = [];
var len__17885__auto___35641 = arguments.length;
var i__17886__auto___35642 = (0);
while(true){
if((i__17886__auto___35642 < len__17885__auto___35641)){
args35638.push((arguments[i__17886__auto___35642]));

var G__35643 = (i__17886__auto___35642 + (1));
i__17886__auto___35642 = G__35643;
continue;
} else {
}
break;
}

var G__35640 = args35638.length;
switch (G__35640) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35638.length)].join('')));

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
var args35645 = [];
var len__17885__auto___35648 = arguments.length;
var i__17886__auto___35649 = (0);
while(true){
if((i__17886__auto___35649 < len__17885__auto___35648)){
args35645.push((arguments[i__17886__auto___35649]));

var G__35650 = (i__17886__auto___35649 + (1));
i__17886__auto___35649 = G__35650;
continue;
} else {
}
break;
}

var G__35647 = args35645.length;
switch (G__35647) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35645.length)].join('')));

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
var args35652 = [];
var len__17885__auto___35705 = arguments.length;
var i__17886__auto___35706 = (0);
while(true){
if((i__17886__auto___35706 < len__17885__auto___35705)){
args35652.push((arguments[i__17886__auto___35706]));

var G__35707 = (i__17886__auto___35706 + (1));
i__17886__auto___35706 = G__35707;
continue;
} else {
}
break;
}

var G__35654 = args35652.length;
switch (G__35654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35652.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20078__auto___35709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___35709,tc,fc){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___35709,tc,fc){
return (function (state_35680){
var state_val_35681 = (state_35680[(1)]);
if((state_val_35681 === (7))){
var inst_35676 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
var statearr_35682_35710 = state_35680__$1;
(statearr_35682_35710[(2)] = inst_35676);

(statearr_35682_35710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (1))){
var state_35680__$1 = state_35680;
var statearr_35683_35711 = state_35680__$1;
(statearr_35683_35711[(2)] = null);

(statearr_35683_35711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (4))){
var inst_35657 = (state_35680[(7)]);
var inst_35657__$1 = (state_35680[(2)]);
var inst_35658 = (inst_35657__$1 == null);
var state_35680__$1 = (function (){var statearr_35684 = state_35680;
(statearr_35684[(7)] = inst_35657__$1);

return statearr_35684;
})();
if(cljs.core.truth_(inst_35658)){
var statearr_35685_35712 = state_35680__$1;
(statearr_35685_35712[(1)] = (5));

} else {
var statearr_35686_35713 = state_35680__$1;
(statearr_35686_35713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (13))){
var state_35680__$1 = state_35680;
var statearr_35687_35714 = state_35680__$1;
(statearr_35687_35714[(2)] = null);

(statearr_35687_35714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (6))){
var inst_35657 = (state_35680[(7)]);
var inst_35663 = p.call(null,inst_35657);
var state_35680__$1 = state_35680;
if(cljs.core.truth_(inst_35663)){
var statearr_35688_35715 = state_35680__$1;
(statearr_35688_35715[(1)] = (9));

} else {
var statearr_35689_35716 = state_35680__$1;
(statearr_35689_35716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (3))){
var inst_35678 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35680__$1,inst_35678);
} else {
if((state_val_35681 === (12))){
var state_35680__$1 = state_35680;
var statearr_35690_35717 = state_35680__$1;
(statearr_35690_35717[(2)] = null);

(statearr_35690_35717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (2))){
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35680__$1,(4),ch);
} else {
if((state_val_35681 === (11))){
var inst_35657 = (state_35680[(7)]);
var inst_35667 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35680__$1,(8),inst_35667,inst_35657);
} else {
if((state_val_35681 === (9))){
var state_35680__$1 = state_35680;
var statearr_35691_35718 = state_35680__$1;
(statearr_35691_35718[(2)] = tc);

(statearr_35691_35718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (5))){
var inst_35660 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35661 = cljs.core.async.close_BANG_.call(null,fc);
var state_35680__$1 = (function (){var statearr_35692 = state_35680;
(statearr_35692[(8)] = inst_35660);

return statearr_35692;
})();
var statearr_35693_35719 = state_35680__$1;
(statearr_35693_35719[(2)] = inst_35661);

(statearr_35693_35719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (14))){
var inst_35674 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
var statearr_35694_35720 = state_35680__$1;
(statearr_35694_35720[(2)] = inst_35674);

(statearr_35694_35720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (10))){
var state_35680__$1 = state_35680;
var statearr_35695_35721 = state_35680__$1;
(statearr_35695_35721[(2)] = fc);

(statearr_35695_35721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (8))){
var inst_35669 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
if(cljs.core.truth_(inst_35669)){
var statearr_35696_35722 = state_35680__$1;
(statearr_35696_35722[(1)] = (12));

} else {
var statearr_35697_35723 = state_35680__$1;
(statearr_35697_35723[(1)] = (13));

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
});})(c__20078__auto___35709,tc,fc))
;
return ((function (switch__19966__auto__,c__20078__auto___35709,tc,fc){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_35701 = [null,null,null,null,null,null,null,null,null];
(statearr_35701[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_35701[(1)] = (1));

return statearr_35701;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_35680){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35702){if((e35702 instanceof Object)){
var ex__19970__auto__ = e35702;
var statearr_35703_35724 = state_35680;
(statearr_35703_35724[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35725 = state_35680;
state_35680 = G__35725;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_35680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_35680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___35709,tc,fc))
})();
var state__20080__auto__ = (function (){var statearr_35704 = f__20079__auto__.call(null);
(statearr_35704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___35709);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___35709,tc,fc))
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
return (function (state_35789){
var state_val_35790 = (state_35789[(1)]);
if((state_val_35790 === (7))){
var inst_35785 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35791_35812 = state_35789__$1;
(statearr_35791_35812[(2)] = inst_35785);

(statearr_35791_35812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (1))){
var inst_35769 = init;
var state_35789__$1 = (function (){var statearr_35792 = state_35789;
(statearr_35792[(7)] = inst_35769);

return statearr_35792;
})();
var statearr_35793_35813 = state_35789__$1;
(statearr_35793_35813[(2)] = null);

(statearr_35793_35813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (4))){
var inst_35772 = (state_35789[(8)]);
var inst_35772__$1 = (state_35789[(2)]);
var inst_35773 = (inst_35772__$1 == null);
var state_35789__$1 = (function (){var statearr_35794 = state_35789;
(statearr_35794[(8)] = inst_35772__$1);

return statearr_35794;
})();
if(cljs.core.truth_(inst_35773)){
var statearr_35795_35814 = state_35789__$1;
(statearr_35795_35814[(1)] = (5));

} else {
var statearr_35796_35815 = state_35789__$1;
(statearr_35796_35815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (6))){
var inst_35769 = (state_35789[(7)]);
var inst_35772 = (state_35789[(8)]);
var inst_35776 = (state_35789[(9)]);
var inst_35776__$1 = f.call(null,inst_35769,inst_35772);
var inst_35777 = cljs.core.reduced_QMARK_.call(null,inst_35776__$1);
var state_35789__$1 = (function (){var statearr_35797 = state_35789;
(statearr_35797[(9)] = inst_35776__$1);

return statearr_35797;
})();
if(inst_35777){
var statearr_35798_35816 = state_35789__$1;
(statearr_35798_35816[(1)] = (8));

} else {
var statearr_35799_35817 = state_35789__$1;
(statearr_35799_35817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (3))){
var inst_35787 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35789__$1,inst_35787);
} else {
if((state_val_35790 === (2))){
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35789__$1,(4),ch);
} else {
if((state_val_35790 === (9))){
var inst_35776 = (state_35789[(9)]);
var inst_35769 = inst_35776;
var state_35789__$1 = (function (){var statearr_35800 = state_35789;
(statearr_35800[(7)] = inst_35769);

return statearr_35800;
})();
var statearr_35801_35818 = state_35789__$1;
(statearr_35801_35818[(2)] = null);

(statearr_35801_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (5))){
var inst_35769 = (state_35789[(7)]);
var state_35789__$1 = state_35789;
var statearr_35802_35819 = state_35789__$1;
(statearr_35802_35819[(2)] = inst_35769);

(statearr_35802_35819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (10))){
var inst_35783 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35803_35820 = state_35789__$1;
(statearr_35803_35820[(2)] = inst_35783);

(statearr_35803_35820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (8))){
var inst_35776 = (state_35789[(9)]);
var inst_35779 = cljs.core.deref.call(null,inst_35776);
var state_35789__$1 = state_35789;
var statearr_35804_35821 = state_35789__$1;
(statearr_35804_35821[(2)] = inst_35779);

(statearr_35804_35821[(1)] = (10));


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
var statearr_35808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35808[(0)] = cljs$core$async$reduce_$_state_machine__19967__auto__);

(statearr_35808[(1)] = (1));

return statearr_35808;
});
var cljs$core$async$reduce_$_state_machine__19967__auto____1 = (function (state_35789){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35809){if((e35809 instanceof Object)){
var ex__19970__auto__ = e35809;
var statearr_35810_35822 = state_35789;
(statearr_35810_35822[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35823 = state_35789;
state_35789 = G__35823;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19967__auto__ = function(state_35789){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19967__auto____1.call(this,state_35789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19967__auto____0;
cljs$core$async$reduce_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19967__auto____1;
return cljs$core$async$reduce_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_35811 = f__20079__auto__.call(null);
(statearr_35811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_35811;
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
var args35824 = [];
var len__17885__auto___35876 = arguments.length;
var i__17886__auto___35877 = (0);
while(true){
if((i__17886__auto___35877 < len__17885__auto___35876)){
args35824.push((arguments[i__17886__auto___35877]));

var G__35878 = (i__17886__auto___35877 + (1));
i__17886__auto___35877 = G__35878;
continue;
} else {
}
break;
}

var G__35826 = args35824.length;
switch (G__35826) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35824.length)].join('')));

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
return (function (state_35851){
var state_val_35852 = (state_35851[(1)]);
if((state_val_35852 === (7))){
var inst_35833 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
var statearr_35853_35880 = state_35851__$1;
(statearr_35853_35880[(2)] = inst_35833);

(statearr_35853_35880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (1))){
var inst_35827 = cljs.core.seq.call(null,coll);
var inst_35828 = inst_35827;
var state_35851__$1 = (function (){var statearr_35854 = state_35851;
(statearr_35854[(7)] = inst_35828);

return statearr_35854;
})();
var statearr_35855_35881 = state_35851__$1;
(statearr_35855_35881[(2)] = null);

(statearr_35855_35881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (4))){
var inst_35828 = (state_35851[(7)]);
var inst_35831 = cljs.core.first.call(null,inst_35828);
var state_35851__$1 = state_35851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35851__$1,(7),ch,inst_35831);
} else {
if((state_val_35852 === (13))){
var inst_35845 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
var statearr_35856_35882 = state_35851__$1;
(statearr_35856_35882[(2)] = inst_35845);

(statearr_35856_35882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (6))){
var inst_35836 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
if(cljs.core.truth_(inst_35836)){
var statearr_35857_35883 = state_35851__$1;
(statearr_35857_35883[(1)] = (8));

} else {
var statearr_35858_35884 = state_35851__$1;
(statearr_35858_35884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (3))){
var inst_35849 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35851__$1,inst_35849);
} else {
if((state_val_35852 === (12))){
var state_35851__$1 = state_35851;
var statearr_35859_35885 = state_35851__$1;
(statearr_35859_35885[(2)] = null);

(statearr_35859_35885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (2))){
var inst_35828 = (state_35851[(7)]);
var state_35851__$1 = state_35851;
if(cljs.core.truth_(inst_35828)){
var statearr_35860_35886 = state_35851__$1;
(statearr_35860_35886[(1)] = (4));

} else {
var statearr_35861_35887 = state_35851__$1;
(statearr_35861_35887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (11))){
var inst_35842 = cljs.core.async.close_BANG_.call(null,ch);
var state_35851__$1 = state_35851;
var statearr_35862_35888 = state_35851__$1;
(statearr_35862_35888[(2)] = inst_35842);

(statearr_35862_35888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (9))){
var state_35851__$1 = state_35851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35863_35889 = state_35851__$1;
(statearr_35863_35889[(1)] = (11));

} else {
var statearr_35864_35890 = state_35851__$1;
(statearr_35864_35890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (5))){
var inst_35828 = (state_35851[(7)]);
var state_35851__$1 = state_35851;
var statearr_35865_35891 = state_35851__$1;
(statearr_35865_35891[(2)] = inst_35828);

(statearr_35865_35891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (10))){
var inst_35847 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
var statearr_35866_35892 = state_35851__$1;
(statearr_35866_35892[(2)] = inst_35847);

(statearr_35866_35892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (8))){
var inst_35828 = (state_35851[(7)]);
var inst_35838 = cljs.core.next.call(null,inst_35828);
var inst_35828__$1 = inst_35838;
var state_35851__$1 = (function (){var statearr_35867 = state_35851;
(statearr_35867[(7)] = inst_35828__$1);

return statearr_35867;
})();
var statearr_35868_35893 = state_35851__$1;
(statearr_35868_35893[(2)] = null);

(statearr_35868_35893[(1)] = (2));


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
var statearr_35872 = [null,null,null,null,null,null,null,null];
(statearr_35872[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_35872[(1)] = (1));

return statearr_35872;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_35851){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_35851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e35873){if((e35873 instanceof Object)){
var ex__19970__auto__ = e35873;
var statearr_35874_35894 = state_35851;
(statearr_35874_35894[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35895 = state_35851;
state_35851 = G__35895;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_35851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_35851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_35875 = f__20079__auto__.call(null);
(statearr_35875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_35875;
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
if(typeof cljs.core.async.t_cljs$core$async36117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36117 = (function (mult,ch,cs,meta36118){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36118 = meta36118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36119,meta36118__$1){
var self__ = this;
var _36119__$1 = this;
return (new cljs.core.async.t_cljs$core$async36117(self__.mult,self__.ch,self__.cs,meta36118__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36119){
var self__ = this;
var _36119__$1 = this;
return self__.meta36118;
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36118","meta36118",-153865952,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36117";

cljs.core.async.t_cljs$core$async36117.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async36117");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36117 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36117(mult__$1,ch__$1,cs__$1,meta36118){
return (new cljs.core.async.t_cljs$core$async36117(mult__$1,ch__$1,cs__$1,meta36118));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36117(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20078__auto___36338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___36338,cs,m,dchan,dctr,done){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___36338,cs,m,dchan,dctr,done){
return (function (state_36250){
var state_val_36251 = (state_36250[(1)]);
if((state_val_36251 === (7))){
var inst_36246 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36252_36339 = state_36250__$1;
(statearr_36252_36339[(2)] = inst_36246);

(statearr_36252_36339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (20))){
var inst_36151 = (state_36250[(7)]);
var inst_36161 = cljs.core.first.call(null,inst_36151);
var inst_36162 = cljs.core.nth.call(null,inst_36161,(0),null);
var inst_36163 = cljs.core.nth.call(null,inst_36161,(1),null);
var state_36250__$1 = (function (){var statearr_36253 = state_36250;
(statearr_36253[(8)] = inst_36162);

return statearr_36253;
})();
if(cljs.core.truth_(inst_36163)){
var statearr_36254_36340 = state_36250__$1;
(statearr_36254_36340[(1)] = (22));

} else {
var statearr_36255_36341 = state_36250__$1;
(statearr_36255_36341[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (27))){
var inst_36122 = (state_36250[(9)]);
var inst_36191 = (state_36250[(10)]);
var inst_36198 = (state_36250[(11)]);
var inst_36193 = (state_36250[(12)]);
var inst_36198__$1 = cljs.core._nth.call(null,inst_36191,inst_36193);
var inst_36199 = cljs.core.async.put_BANG_.call(null,inst_36198__$1,inst_36122,done);
var state_36250__$1 = (function (){var statearr_36256 = state_36250;
(statearr_36256[(11)] = inst_36198__$1);

return statearr_36256;
})();
if(cljs.core.truth_(inst_36199)){
var statearr_36257_36342 = state_36250__$1;
(statearr_36257_36342[(1)] = (30));

} else {
var statearr_36258_36343 = state_36250__$1;
(statearr_36258_36343[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (1))){
var state_36250__$1 = state_36250;
var statearr_36259_36344 = state_36250__$1;
(statearr_36259_36344[(2)] = null);

(statearr_36259_36344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (24))){
var inst_36151 = (state_36250[(7)]);
var inst_36168 = (state_36250[(2)]);
var inst_36169 = cljs.core.next.call(null,inst_36151);
var inst_36131 = inst_36169;
var inst_36132 = null;
var inst_36133 = (0);
var inst_36134 = (0);
var state_36250__$1 = (function (){var statearr_36260 = state_36250;
(statearr_36260[(13)] = inst_36132);

(statearr_36260[(14)] = inst_36133);

(statearr_36260[(15)] = inst_36168);

(statearr_36260[(16)] = inst_36131);

(statearr_36260[(17)] = inst_36134);

return statearr_36260;
})();
var statearr_36261_36345 = state_36250__$1;
(statearr_36261_36345[(2)] = null);

(statearr_36261_36345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (39))){
var state_36250__$1 = state_36250;
var statearr_36265_36346 = state_36250__$1;
(statearr_36265_36346[(2)] = null);

(statearr_36265_36346[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (4))){
var inst_36122 = (state_36250[(9)]);
var inst_36122__$1 = (state_36250[(2)]);
var inst_36123 = (inst_36122__$1 == null);
var state_36250__$1 = (function (){var statearr_36266 = state_36250;
(statearr_36266[(9)] = inst_36122__$1);

return statearr_36266;
})();
if(cljs.core.truth_(inst_36123)){
var statearr_36267_36347 = state_36250__$1;
(statearr_36267_36347[(1)] = (5));

} else {
var statearr_36268_36348 = state_36250__$1;
(statearr_36268_36348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (15))){
var inst_36132 = (state_36250[(13)]);
var inst_36133 = (state_36250[(14)]);
var inst_36131 = (state_36250[(16)]);
var inst_36134 = (state_36250[(17)]);
var inst_36147 = (state_36250[(2)]);
var inst_36148 = (inst_36134 + (1));
var tmp36262 = inst_36132;
var tmp36263 = inst_36133;
var tmp36264 = inst_36131;
var inst_36131__$1 = tmp36264;
var inst_36132__$1 = tmp36262;
var inst_36133__$1 = tmp36263;
var inst_36134__$1 = inst_36148;
var state_36250__$1 = (function (){var statearr_36269 = state_36250;
(statearr_36269[(18)] = inst_36147);

(statearr_36269[(13)] = inst_36132__$1);

(statearr_36269[(14)] = inst_36133__$1);

(statearr_36269[(16)] = inst_36131__$1);

(statearr_36269[(17)] = inst_36134__$1);

return statearr_36269;
})();
var statearr_36270_36349 = state_36250__$1;
(statearr_36270_36349[(2)] = null);

(statearr_36270_36349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (21))){
var inst_36172 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36274_36350 = state_36250__$1;
(statearr_36274_36350[(2)] = inst_36172);

(statearr_36274_36350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (31))){
var inst_36198 = (state_36250[(11)]);
var inst_36202 = done.call(null,null);
var inst_36203 = cljs.core.async.untap_STAR_.call(null,m,inst_36198);
var state_36250__$1 = (function (){var statearr_36275 = state_36250;
(statearr_36275[(19)] = inst_36202);

return statearr_36275;
})();
var statearr_36276_36351 = state_36250__$1;
(statearr_36276_36351[(2)] = inst_36203);

(statearr_36276_36351[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (32))){
var inst_36190 = (state_36250[(20)]);
var inst_36191 = (state_36250[(10)]);
var inst_36192 = (state_36250[(21)]);
var inst_36193 = (state_36250[(12)]);
var inst_36205 = (state_36250[(2)]);
var inst_36206 = (inst_36193 + (1));
var tmp36271 = inst_36190;
var tmp36272 = inst_36191;
var tmp36273 = inst_36192;
var inst_36190__$1 = tmp36271;
var inst_36191__$1 = tmp36272;
var inst_36192__$1 = tmp36273;
var inst_36193__$1 = inst_36206;
var state_36250__$1 = (function (){var statearr_36277 = state_36250;
(statearr_36277[(20)] = inst_36190__$1);

(statearr_36277[(22)] = inst_36205);

(statearr_36277[(10)] = inst_36191__$1);

(statearr_36277[(21)] = inst_36192__$1);

(statearr_36277[(12)] = inst_36193__$1);

return statearr_36277;
})();
var statearr_36278_36352 = state_36250__$1;
(statearr_36278_36352[(2)] = null);

(statearr_36278_36352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (40))){
var inst_36218 = (state_36250[(23)]);
var inst_36222 = done.call(null,null);
var inst_36223 = cljs.core.async.untap_STAR_.call(null,m,inst_36218);
var state_36250__$1 = (function (){var statearr_36279 = state_36250;
(statearr_36279[(24)] = inst_36222);

return statearr_36279;
})();
var statearr_36280_36353 = state_36250__$1;
(statearr_36280_36353[(2)] = inst_36223);

(statearr_36280_36353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (33))){
var inst_36209 = (state_36250[(25)]);
var inst_36211 = cljs.core.chunked_seq_QMARK_.call(null,inst_36209);
var state_36250__$1 = state_36250;
if(inst_36211){
var statearr_36281_36354 = state_36250__$1;
(statearr_36281_36354[(1)] = (36));

} else {
var statearr_36282_36355 = state_36250__$1;
(statearr_36282_36355[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (13))){
var inst_36141 = (state_36250[(26)]);
var inst_36144 = cljs.core.async.close_BANG_.call(null,inst_36141);
var state_36250__$1 = state_36250;
var statearr_36283_36356 = state_36250__$1;
(statearr_36283_36356[(2)] = inst_36144);

(statearr_36283_36356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (22))){
var inst_36162 = (state_36250[(8)]);
var inst_36165 = cljs.core.async.close_BANG_.call(null,inst_36162);
var state_36250__$1 = state_36250;
var statearr_36284_36357 = state_36250__$1;
(statearr_36284_36357[(2)] = inst_36165);

(statearr_36284_36357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (36))){
var inst_36209 = (state_36250[(25)]);
var inst_36213 = cljs.core.chunk_first.call(null,inst_36209);
var inst_36214 = cljs.core.chunk_rest.call(null,inst_36209);
var inst_36215 = cljs.core.count.call(null,inst_36213);
var inst_36190 = inst_36214;
var inst_36191 = inst_36213;
var inst_36192 = inst_36215;
var inst_36193 = (0);
var state_36250__$1 = (function (){var statearr_36285 = state_36250;
(statearr_36285[(20)] = inst_36190);

(statearr_36285[(10)] = inst_36191);

(statearr_36285[(21)] = inst_36192);

(statearr_36285[(12)] = inst_36193);

return statearr_36285;
})();
var statearr_36286_36358 = state_36250__$1;
(statearr_36286_36358[(2)] = null);

(statearr_36286_36358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (41))){
var inst_36209 = (state_36250[(25)]);
var inst_36225 = (state_36250[(2)]);
var inst_36226 = cljs.core.next.call(null,inst_36209);
var inst_36190 = inst_36226;
var inst_36191 = null;
var inst_36192 = (0);
var inst_36193 = (0);
var state_36250__$1 = (function (){var statearr_36287 = state_36250;
(statearr_36287[(20)] = inst_36190);

(statearr_36287[(10)] = inst_36191);

(statearr_36287[(21)] = inst_36192);

(statearr_36287[(12)] = inst_36193);

(statearr_36287[(27)] = inst_36225);

return statearr_36287;
})();
var statearr_36288_36359 = state_36250__$1;
(statearr_36288_36359[(2)] = null);

(statearr_36288_36359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (43))){
var state_36250__$1 = state_36250;
var statearr_36289_36360 = state_36250__$1;
(statearr_36289_36360[(2)] = null);

(statearr_36289_36360[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (29))){
var inst_36234 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36290_36361 = state_36250__$1;
(statearr_36290_36361[(2)] = inst_36234);

(statearr_36290_36361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (44))){
var inst_36243 = (state_36250[(2)]);
var state_36250__$1 = (function (){var statearr_36291 = state_36250;
(statearr_36291[(28)] = inst_36243);

return statearr_36291;
})();
var statearr_36292_36362 = state_36250__$1;
(statearr_36292_36362[(2)] = null);

(statearr_36292_36362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (6))){
var inst_36182 = (state_36250[(29)]);
var inst_36181 = cljs.core.deref.call(null,cs);
var inst_36182__$1 = cljs.core.keys.call(null,inst_36181);
var inst_36183 = cljs.core.count.call(null,inst_36182__$1);
var inst_36184 = cljs.core.reset_BANG_.call(null,dctr,inst_36183);
var inst_36189 = cljs.core.seq.call(null,inst_36182__$1);
var inst_36190 = inst_36189;
var inst_36191 = null;
var inst_36192 = (0);
var inst_36193 = (0);
var state_36250__$1 = (function (){var statearr_36293 = state_36250;
(statearr_36293[(29)] = inst_36182__$1);

(statearr_36293[(20)] = inst_36190);

(statearr_36293[(30)] = inst_36184);

(statearr_36293[(10)] = inst_36191);

(statearr_36293[(21)] = inst_36192);

(statearr_36293[(12)] = inst_36193);

return statearr_36293;
})();
var statearr_36294_36363 = state_36250__$1;
(statearr_36294_36363[(2)] = null);

(statearr_36294_36363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (28))){
var inst_36190 = (state_36250[(20)]);
var inst_36209 = (state_36250[(25)]);
var inst_36209__$1 = cljs.core.seq.call(null,inst_36190);
var state_36250__$1 = (function (){var statearr_36295 = state_36250;
(statearr_36295[(25)] = inst_36209__$1);

return statearr_36295;
})();
if(inst_36209__$1){
var statearr_36296_36364 = state_36250__$1;
(statearr_36296_36364[(1)] = (33));

} else {
var statearr_36297_36365 = state_36250__$1;
(statearr_36297_36365[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (25))){
var inst_36192 = (state_36250[(21)]);
var inst_36193 = (state_36250[(12)]);
var inst_36195 = (inst_36193 < inst_36192);
var inst_36196 = inst_36195;
var state_36250__$1 = state_36250;
if(cljs.core.truth_(inst_36196)){
var statearr_36298_36366 = state_36250__$1;
(statearr_36298_36366[(1)] = (27));

} else {
var statearr_36299_36367 = state_36250__$1;
(statearr_36299_36367[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (34))){
var state_36250__$1 = state_36250;
var statearr_36300_36368 = state_36250__$1;
(statearr_36300_36368[(2)] = null);

(statearr_36300_36368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (17))){
var state_36250__$1 = state_36250;
var statearr_36301_36369 = state_36250__$1;
(statearr_36301_36369[(2)] = null);

(statearr_36301_36369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (3))){
var inst_36248 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36250__$1,inst_36248);
} else {
if((state_val_36251 === (12))){
var inst_36177 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36302_36370 = state_36250__$1;
(statearr_36302_36370[(2)] = inst_36177);

(statearr_36302_36370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (2))){
var state_36250__$1 = state_36250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36250__$1,(4),ch);
} else {
if((state_val_36251 === (23))){
var state_36250__$1 = state_36250;
var statearr_36303_36371 = state_36250__$1;
(statearr_36303_36371[(2)] = null);

(statearr_36303_36371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (35))){
var inst_36232 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36304_36372 = state_36250__$1;
(statearr_36304_36372[(2)] = inst_36232);

(statearr_36304_36372[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (19))){
var inst_36151 = (state_36250[(7)]);
var inst_36155 = cljs.core.chunk_first.call(null,inst_36151);
var inst_36156 = cljs.core.chunk_rest.call(null,inst_36151);
var inst_36157 = cljs.core.count.call(null,inst_36155);
var inst_36131 = inst_36156;
var inst_36132 = inst_36155;
var inst_36133 = inst_36157;
var inst_36134 = (0);
var state_36250__$1 = (function (){var statearr_36305 = state_36250;
(statearr_36305[(13)] = inst_36132);

(statearr_36305[(14)] = inst_36133);

(statearr_36305[(16)] = inst_36131);

(statearr_36305[(17)] = inst_36134);

return statearr_36305;
})();
var statearr_36306_36373 = state_36250__$1;
(statearr_36306_36373[(2)] = null);

(statearr_36306_36373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (11))){
var inst_36131 = (state_36250[(16)]);
var inst_36151 = (state_36250[(7)]);
var inst_36151__$1 = cljs.core.seq.call(null,inst_36131);
var state_36250__$1 = (function (){var statearr_36307 = state_36250;
(statearr_36307[(7)] = inst_36151__$1);

return statearr_36307;
})();
if(inst_36151__$1){
var statearr_36308_36374 = state_36250__$1;
(statearr_36308_36374[(1)] = (16));

} else {
var statearr_36309_36375 = state_36250__$1;
(statearr_36309_36375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (9))){
var inst_36179 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36310_36376 = state_36250__$1;
(statearr_36310_36376[(2)] = inst_36179);

(statearr_36310_36376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (5))){
var inst_36129 = cljs.core.deref.call(null,cs);
var inst_36130 = cljs.core.seq.call(null,inst_36129);
var inst_36131 = inst_36130;
var inst_36132 = null;
var inst_36133 = (0);
var inst_36134 = (0);
var state_36250__$1 = (function (){var statearr_36311 = state_36250;
(statearr_36311[(13)] = inst_36132);

(statearr_36311[(14)] = inst_36133);

(statearr_36311[(16)] = inst_36131);

(statearr_36311[(17)] = inst_36134);

return statearr_36311;
})();
var statearr_36312_36377 = state_36250__$1;
(statearr_36312_36377[(2)] = null);

(statearr_36312_36377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (14))){
var state_36250__$1 = state_36250;
var statearr_36313_36378 = state_36250__$1;
(statearr_36313_36378[(2)] = null);

(statearr_36313_36378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (45))){
var inst_36240 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36314_36379 = state_36250__$1;
(statearr_36314_36379[(2)] = inst_36240);

(statearr_36314_36379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (26))){
var inst_36182 = (state_36250[(29)]);
var inst_36236 = (state_36250[(2)]);
var inst_36237 = cljs.core.seq.call(null,inst_36182);
var state_36250__$1 = (function (){var statearr_36315 = state_36250;
(statearr_36315[(31)] = inst_36236);

return statearr_36315;
})();
if(inst_36237){
var statearr_36316_36380 = state_36250__$1;
(statearr_36316_36380[(1)] = (42));

} else {
var statearr_36317_36381 = state_36250__$1;
(statearr_36317_36381[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (16))){
var inst_36151 = (state_36250[(7)]);
var inst_36153 = cljs.core.chunked_seq_QMARK_.call(null,inst_36151);
var state_36250__$1 = state_36250;
if(inst_36153){
var statearr_36318_36382 = state_36250__$1;
(statearr_36318_36382[(1)] = (19));

} else {
var statearr_36319_36383 = state_36250__$1;
(statearr_36319_36383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (38))){
var inst_36229 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36320_36384 = state_36250__$1;
(statearr_36320_36384[(2)] = inst_36229);

(statearr_36320_36384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (30))){
var state_36250__$1 = state_36250;
var statearr_36321_36385 = state_36250__$1;
(statearr_36321_36385[(2)] = null);

(statearr_36321_36385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (10))){
var inst_36132 = (state_36250[(13)]);
var inst_36134 = (state_36250[(17)]);
var inst_36140 = cljs.core._nth.call(null,inst_36132,inst_36134);
var inst_36141 = cljs.core.nth.call(null,inst_36140,(0),null);
var inst_36142 = cljs.core.nth.call(null,inst_36140,(1),null);
var state_36250__$1 = (function (){var statearr_36322 = state_36250;
(statearr_36322[(26)] = inst_36141);

return statearr_36322;
})();
if(cljs.core.truth_(inst_36142)){
var statearr_36323_36386 = state_36250__$1;
(statearr_36323_36386[(1)] = (13));

} else {
var statearr_36324_36387 = state_36250__$1;
(statearr_36324_36387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (18))){
var inst_36175 = (state_36250[(2)]);
var state_36250__$1 = state_36250;
var statearr_36325_36388 = state_36250__$1;
(statearr_36325_36388[(2)] = inst_36175);

(statearr_36325_36388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (42))){
var state_36250__$1 = state_36250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36250__$1,(45),dchan);
} else {
if((state_val_36251 === (37))){
var inst_36218 = (state_36250[(23)]);
var inst_36122 = (state_36250[(9)]);
var inst_36209 = (state_36250[(25)]);
var inst_36218__$1 = cljs.core.first.call(null,inst_36209);
var inst_36219 = cljs.core.async.put_BANG_.call(null,inst_36218__$1,inst_36122,done);
var state_36250__$1 = (function (){var statearr_36326 = state_36250;
(statearr_36326[(23)] = inst_36218__$1);

return statearr_36326;
})();
if(cljs.core.truth_(inst_36219)){
var statearr_36327_36389 = state_36250__$1;
(statearr_36327_36389[(1)] = (39));

} else {
var statearr_36328_36390 = state_36250__$1;
(statearr_36328_36390[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36251 === (8))){
var inst_36133 = (state_36250[(14)]);
var inst_36134 = (state_36250[(17)]);
var inst_36136 = (inst_36134 < inst_36133);
var inst_36137 = inst_36136;
var state_36250__$1 = state_36250;
if(cljs.core.truth_(inst_36137)){
var statearr_36329_36391 = state_36250__$1;
(statearr_36329_36391[(1)] = (10));

} else {
var statearr_36330_36392 = state_36250__$1;
(statearr_36330_36392[(1)] = (11));

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
});})(c__20078__auto___36338,cs,m,dchan,dctr,done))
;
return ((function (switch__19966__auto__,c__20078__auto___36338,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19967__auto__ = null;
var cljs$core$async$mult_$_state_machine__19967__auto____0 = (function (){
var statearr_36334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36334[(0)] = cljs$core$async$mult_$_state_machine__19967__auto__);

(statearr_36334[(1)] = (1));

return statearr_36334;
});
var cljs$core$async$mult_$_state_machine__19967__auto____1 = (function (state_36250){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_36250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e36335){if((e36335 instanceof Object)){
var ex__19970__auto__ = e36335;
var statearr_36336_36393 = state_36250;
(statearr_36336_36393[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36394 = state_36250;
state_36250 = G__36394;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19967__auto__ = function(state_36250){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19967__auto____1.call(this,state_36250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19967__auto____0;
cljs$core$async$mult_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19967__auto____1;
return cljs$core$async$mult_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___36338,cs,m,dchan,dctr,done))
})();
var state__20080__auto__ = (function (){var statearr_36337 = f__20079__auto__.call(null);
(statearr_36337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___36338);

return statearr_36337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___36338,cs,m,dchan,dctr,done))
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
var args36395 = [];
var len__17885__auto___36398 = arguments.length;
var i__17886__auto___36399 = (0);
while(true){
if((i__17886__auto___36399 < len__17885__auto___36398)){
args36395.push((arguments[i__17886__auto___36399]));

var G__36400 = (i__17886__auto___36399 + (1));
i__17886__auto___36399 = G__36400;
continue;
} else {
}
break;
}

var G__36397 = args36395.length;
switch (G__36397) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36395.length)].join('')));

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
var len__17885__auto___36412 = arguments.length;
var i__17886__auto___36413 = (0);
while(true){
if((i__17886__auto___36413 < len__17885__auto___36412)){
args__17892__auto__.push((arguments[i__17886__auto___36413]));

var G__36414 = (i__17886__auto___36413 + (1));
i__17886__auto___36413 = G__36414;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((3) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17893__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36406){
var map__36407 = p__36406;
var map__36407__$1 = ((((!((map__36407 == null)))?((((map__36407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36407):map__36407);
var opts = map__36407__$1;
var statearr_36409_36415 = state;
(statearr_36409_36415[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__36407,map__36407__$1,opts){
return (function (val){
var statearr_36410_36416 = state;
(statearr_36410_36416[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36407,map__36407__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_36411_36417 = state;
(statearr_36411_36417[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36402){
var G__36403 = cljs.core.first.call(null,seq36402);
var seq36402__$1 = cljs.core.next.call(null,seq36402);
var G__36404 = cljs.core.first.call(null,seq36402__$1);
var seq36402__$2 = cljs.core.next.call(null,seq36402__$1);
var G__36405 = cljs.core.first.call(null,seq36402__$2);
var seq36402__$3 = cljs.core.next.call(null,seq36402__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36403,G__36404,G__36405,seq36402__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36581 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36582){
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
this.meta36582 = meta36582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36583,meta36582__$1){
var self__ = this;
var _36583__$1 = this;
return (new cljs.core.async.t_cljs$core$async36581(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36582__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36583){
var self__ = this;
var _36583__$1 = this;
return self__.meta36582;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36581.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36582","meta36582",-1336223997,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36581";

cljs.core.async.t_cljs$core$async36581.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async36581");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36581 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36581(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36582){
return (new cljs.core.async.t_cljs$core$async36581(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36582));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36581(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20078__auto___36744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___36744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___36744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36681){
var state_val_36682 = (state_36681[(1)]);
if((state_val_36682 === (7))){
var inst_36599 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36683_36745 = state_36681__$1;
(statearr_36683_36745[(2)] = inst_36599);

(statearr_36683_36745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (20))){
var inst_36611 = (state_36681[(7)]);
var state_36681__$1 = state_36681;
var statearr_36684_36746 = state_36681__$1;
(statearr_36684_36746[(2)] = inst_36611);

(statearr_36684_36746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (27))){
var state_36681__$1 = state_36681;
var statearr_36685_36747 = state_36681__$1;
(statearr_36685_36747[(2)] = null);

(statearr_36685_36747[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (1))){
var inst_36587 = (state_36681[(8)]);
var inst_36587__$1 = calc_state.call(null);
var inst_36589 = (inst_36587__$1 == null);
var inst_36590 = cljs.core.not.call(null,inst_36589);
var state_36681__$1 = (function (){var statearr_36686 = state_36681;
(statearr_36686[(8)] = inst_36587__$1);

return statearr_36686;
})();
if(inst_36590){
var statearr_36687_36748 = state_36681__$1;
(statearr_36687_36748[(1)] = (2));

} else {
var statearr_36688_36749 = state_36681__$1;
(statearr_36688_36749[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (24))){
var inst_36655 = (state_36681[(9)]);
var inst_36634 = (state_36681[(10)]);
var inst_36641 = (state_36681[(11)]);
var inst_36655__$1 = inst_36634.call(null,inst_36641);
var state_36681__$1 = (function (){var statearr_36689 = state_36681;
(statearr_36689[(9)] = inst_36655__$1);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36655__$1)){
var statearr_36690_36750 = state_36681__$1;
(statearr_36690_36750[(1)] = (29));

} else {
var statearr_36691_36751 = state_36681__$1;
(statearr_36691_36751[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (4))){
var inst_36602 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36602)){
var statearr_36692_36752 = state_36681__$1;
(statearr_36692_36752[(1)] = (8));

} else {
var statearr_36693_36753 = state_36681__$1;
(statearr_36693_36753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (15))){
var inst_36628 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36628)){
var statearr_36694_36754 = state_36681__$1;
(statearr_36694_36754[(1)] = (19));

} else {
var statearr_36695_36755 = state_36681__$1;
(statearr_36695_36755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (21))){
var inst_36633 = (state_36681[(12)]);
var inst_36633__$1 = (state_36681[(2)]);
var inst_36634 = cljs.core.get.call(null,inst_36633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36635 = cljs.core.get.call(null,inst_36633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36636 = cljs.core.get.call(null,inst_36633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36681__$1 = (function (){var statearr_36696 = state_36681;
(statearr_36696[(13)] = inst_36635);

(statearr_36696[(10)] = inst_36634);

(statearr_36696[(12)] = inst_36633__$1);

return statearr_36696;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36681__$1,(22),inst_36636);
} else {
if((state_val_36682 === (31))){
var inst_36663 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36663)){
var statearr_36697_36756 = state_36681__$1;
(statearr_36697_36756[(1)] = (32));

} else {
var statearr_36698_36757 = state_36681__$1;
(statearr_36698_36757[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (32))){
var inst_36640 = (state_36681[(14)]);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36681__$1,(35),out,inst_36640);
} else {
if((state_val_36682 === (33))){
var inst_36633 = (state_36681[(12)]);
var inst_36611 = inst_36633;
var state_36681__$1 = (function (){var statearr_36699 = state_36681;
(statearr_36699[(7)] = inst_36611);

return statearr_36699;
})();
var statearr_36700_36758 = state_36681__$1;
(statearr_36700_36758[(2)] = null);

(statearr_36700_36758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (13))){
var inst_36611 = (state_36681[(7)]);
var inst_36618 = inst_36611.cljs$lang$protocol_mask$partition0$;
var inst_36619 = (inst_36618 & (64));
var inst_36620 = inst_36611.cljs$core$ISeq$;
var inst_36621 = (inst_36619) || (inst_36620);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36621)){
var statearr_36701_36759 = state_36681__$1;
(statearr_36701_36759[(1)] = (16));

} else {
var statearr_36702_36760 = state_36681__$1;
(statearr_36702_36760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (22))){
var inst_36640 = (state_36681[(14)]);
var inst_36641 = (state_36681[(11)]);
var inst_36639 = (state_36681[(2)]);
var inst_36640__$1 = cljs.core.nth.call(null,inst_36639,(0),null);
var inst_36641__$1 = cljs.core.nth.call(null,inst_36639,(1),null);
var inst_36642 = (inst_36640__$1 == null);
var inst_36643 = cljs.core._EQ_.call(null,inst_36641__$1,change);
var inst_36644 = (inst_36642) || (inst_36643);
var state_36681__$1 = (function (){var statearr_36703 = state_36681;
(statearr_36703[(14)] = inst_36640__$1);

(statearr_36703[(11)] = inst_36641__$1);

return statearr_36703;
})();
if(cljs.core.truth_(inst_36644)){
var statearr_36704_36761 = state_36681__$1;
(statearr_36704_36761[(1)] = (23));

} else {
var statearr_36705_36762 = state_36681__$1;
(statearr_36705_36762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (36))){
var inst_36633 = (state_36681[(12)]);
var inst_36611 = inst_36633;
var state_36681__$1 = (function (){var statearr_36706 = state_36681;
(statearr_36706[(7)] = inst_36611);

return statearr_36706;
})();
var statearr_36707_36763 = state_36681__$1;
(statearr_36707_36763[(2)] = null);

(statearr_36707_36763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (29))){
var inst_36655 = (state_36681[(9)]);
var state_36681__$1 = state_36681;
var statearr_36708_36764 = state_36681__$1;
(statearr_36708_36764[(2)] = inst_36655);

(statearr_36708_36764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (6))){
var state_36681__$1 = state_36681;
var statearr_36709_36765 = state_36681__$1;
(statearr_36709_36765[(2)] = false);

(statearr_36709_36765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (28))){
var inst_36651 = (state_36681[(2)]);
var inst_36652 = calc_state.call(null);
var inst_36611 = inst_36652;
var state_36681__$1 = (function (){var statearr_36710 = state_36681;
(statearr_36710[(7)] = inst_36611);

(statearr_36710[(15)] = inst_36651);

return statearr_36710;
})();
var statearr_36711_36766 = state_36681__$1;
(statearr_36711_36766[(2)] = null);

(statearr_36711_36766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (25))){
var inst_36677 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36712_36767 = state_36681__$1;
(statearr_36712_36767[(2)] = inst_36677);

(statearr_36712_36767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (34))){
var inst_36675 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36713_36768 = state_36681__$1;
(statearr_36713_36768[(2)] = inst_36675);

(statearr_36713_36768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (17))){
var state_36681__$1 = state_36681;
var statearr_36714_36769 = state_36681__$1;
(statearr_36714_36769[(2)] = false);

(statearr_36714_36769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (3))){
var state_36681__$1 = state_36681;
var statearr_36715_36770 = state_36681__$1;
(statearr_36715_36770[(2)] = false);

(statearr_36715_36770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (12))){
var inst_36679 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36681__$1,inst_36679);
} else {
if((state_val_36682 === (2))){
var inst_36587 = (state_36681[(8)]);
var inst_36592 = inst_36587.cljs$lang$protocol_mask$partition0$;
var inst_36593 = (inst_36592 & (64));
var inst_36594 = inst_36587.cljs$core$ISeq$;
var inst_36595 = (inst_36593) || (inst_36594);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36595)){
var statearr_36716_36771 = state_36681__$1;
(statearr_36716_36771[(1)] = (5));

} else {
var statearr_36717_36772 = state_36681__$1;
(statearr_36717_36772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (23))){
var inst_36640 = (state_36681[(14)]);
var inst_36646 = (inst_36640 == null);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36646)){
var statearr_36718_36773 = state_36681__$1;
(statearr_36718_36773[(1)] = (26));

} else {
var statearr_36719_36774 = state_36681__$1;
(statearr_36719_36774[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (35))){
var inst_36666 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36666)){
var statearr_36720_36775 = state_36681__$1;
(statearr_36720_36775[(1)] = (36));

} else {
var statearr_36721_36776 = state_36681__$1;
(statearr_36721_36776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (19))){
var inst_36611 = (state_36681[(7)]);
var inst_36630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36611);
var state_36681__$1 = state_36681;
var statearr_36722_36777 = state_36681__$1;
(statearr_36722_36777[(2)] = inst_36630);

(statearr_36722_36777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (11))){
var inst_36611 = (state_36681[(7)]);
var inst_36615 = (inst_36611 == null);
var inst_36616 = cljs.core.not.call(null,inst_36615);
var state_36681__$1 = state_36681;
if(inst_36616){
var statearr_36723_36778 = state_36681__$1;
(statearr_36723_36778[(1)] = (13));

} else {
var statearr_36724_36779 = state_36681__$1;
(statearr_36724_36779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (9))){
var inst_36587 = (state_36681[(8)]);
var state_36681__$1 = state_36681;
var statearr_36725_36780 = state_36681__$1;
(statearr_36725_36780[(2)] = inst_36587);

(statearr_36725_36780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (5))){
var state_36681__$1 = state_36681;
var statearr_36726_36781 = state_36681__$1;
(statearr_36726_36781[(2)] = true);

(statearr_36726_36781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (14))){
var state_36681__$1 = state_36681;
var statearr_36727_36782 = state_36681__$1;
(statearr_36727_36782[(2)] = false);

(statearr_36727_36782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (26))){
var inst_36641 = (state_36681[(11)]);
var inst_36648 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36641);
var state_36681__$1 = state_36681;
var statearr_36728_36783 = state_36681__$1;
(statearr_36728_36783[(2)] = inst_36648);

(statearr_36728_36783[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (16))){
var state_36681__$1 = state_36681;
var statearr_36729_36784 = state_36681__$1;
(statearr_36729_36784[(2)] = true);

(statearr_36729_36784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (38))){
var inst_36671 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36730_36785 = state_36681__$1;
(statearr_36730_36785[(2)] = inst_36671);

(statearr_36730_36785[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (30))){
var inst_36635 = (state_36681[(13)]);
var inst_36634 = (state_36681[(10)]);
var inst_36641 = (state_36681[(11)]);
var inst_36658 = cljs.core.empty_QMARK_.call(null,inst_36634);
var inst_36659 = inst_36635.call(null,inst_36641);
var inst_36660 = cljs.core.not.call(null,inst_36659);
var inst_36661 = (inst_36658) && (inst_36660);
var state_36681__$1 = state_36681;
var statearr_36731_36786 = state_36681__$1;
(statearr_36731_36786[(2)] = inst_36661);

(statearr_36731_36786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (10))){
var inst_36587 = (state_36681[(8)]);
var inst_36607 = (state_36681[(2)]);
var inst_36608 = cljs.core.get.call(null,inst_36607,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36609 = cljs.core.get.call(null,inst_36607,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36610 = cljs.core.get.call(null,inst_36607,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36611 = inst_36587;
var state_36681__$1 = (function (){var statearr_36732 = state_36681;
(statearr_36732[(16)] = inst_36610);

(statearr_36732[(7)] = inst_36611);

(statearr_36732[(17)] = inst_36609);

(statearr_36732[(18)] = inst_36608);

return statearr_36732;
})();
var statearr_36733_36787 = state_36681__$1;
(statearr_36733_36787[(2)] = null);

(statearr_36733_36787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (18))){
var inst_36625 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36734_36788 = state_36681__$1;
(statearr_36734_36788[(2)] = inst_36625);

(statearr_36734_36788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (37))){
var state_36681__$1 = state_36681;
var statearr_36735_36789 = state_36681__$1;
(statearr_36735_36789[(2)] = null);

(statearr_36735_36789[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (8))){
var inst_36587 = (state_36681[(8)]);
var inst_36604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36587);
var state_36681__$1 = state_36681;
var statearr_36736_36790 = state_36681__$1;
(statearr_36736_36790[(2)] = inst_36604);

(statearr_36736_36790[(1)] = (10));


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
});})(c__20078__auto___36744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19966__auto__,c__20078__auto___36744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19967__auto__ = null;
var cljs$core$async$mix_$_state_machine__19967__auto____0 = (function (){
var statearr_36740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36740[(0)] = cljs$core$async$mix_$_state_machine__19967__auto__);

(statearr_36740[(1)] = (1));

return statearr_36740;
});
var cljs$core$async$mix_$_state_machine__19967__auto____1 = (function (state_36681){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_36681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e36741){if((e36741 instanceof Object)){
var ex__19970__auto__ = e36741;
var statearr_36742_36791 = state_36681;
(statearr_36742_36791[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36792 = state_36681;
state_36681 = G__36792;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19967__auto__ = function(state_36681){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19967__auto____1.call(this,state_36681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19967__auto____0;
cljs$core$async$mix_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19967__auto____1;
return cljs$core$async$mix_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___36744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20080__auto__ = (function (){var statearr_36743 = f__20079__auto__.call(null);
(statearr_36743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___36744);

return statearr_36743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___36744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args36793 = [];
var len__17885__auto___36796 = arguments.length;
var i__17886__auto___36797 = (0);
while(true){
if((i__17886__auto___36797 < len__17885__auto___36796)){
args36793.push((arguments[i__17886__auto___36797]));

var G__36798 = (i__17886__auto___36797 + (1));
i__17886__auto___36797 = G__36798;
continue;
} else {
}
break;
}

var G__36795 = args36793.length;
switch (G__36795) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36793.length)].join('')));

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
var args36801 = [];
var len__17885__auto___36926 = arguments.length;
var i__17886__auto___36927 = (0);
while(true){
if((i__17886__auto___36927 < len__17885__auto___36926)){
args36801.push((arguments[i__17886__auto___36927]));

var G__36928 = (i__17886__auto___36927 + (1));
i__17886__auto___36927 = G__36928;
continue;
} else {
}
break;
}

var G__36803 = args36801.length;
switch (G__36803) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36801.length)].join('')));

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
return (function (p1__36800_SHARP_){
if(cljs.core.truth_(p1__36800_SHARP_.call(null,topic))){
return p1__36800_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36800_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36804 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36805){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36805 = meta36805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36806,meta36805__$1){
var self__ = this;
var _36806__$1 = this;
return (new cljs.core.async.t_cljs$core$async36804(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36805__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36806){
var self__ = this;
var _36806__$1 = this;
return self__.meta36805;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36805","meta36805",-1924176140,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36804";

cljs.core.async.t_cljs$core$async36804.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async36804");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36804 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36804(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36805){
return (new cljs.core.async.t_cljs$core$async36804(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36805));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36804(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20078__auto___36930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___36930,mults,ensure_mult,p){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___36930,mults,ensure_mult,p){
return (function (state_36878){
var state_val_36879 = (state_36878[(1)]);
if((state_val_36879 === (7))){
var inst_36874 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36880_36931 = state_36878__$1;
(statearr_36880_36931[(2)] = inst_36874);

(statearr_36880_36931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (20))){
var state_36878__$1 = state_36878;
var statearr_36881_36932 = state_36878__$1;
(statearr_36881_36932[(2)] = null);

(statearr_36881_36932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (1))){
var state_36878__$1 = state_36878;
var statearr_36882_36933 = state_36878__$1;
(statearr_36882_36933[(2)] = null);

(statearr_36882_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (24))){
var inst_36857 = (state_36878[(7)]);
var inst_36866 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36857);
var state_36878__$1 = state_36878;
var statearr_36883_36934 = state_36878__$1;
(statearr_36883_36934[(2)] = inst_36866);

(statearr_36883_36934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (4))){
var inst_36809 = (state_36878[(8)]);
var inst_36809__$1 = (state_36878[(2)]);
var inst_36810 = (inst_36809__$1 == null);
var state_36878__$1 = (function (){var statearr_36884 = state_36878;
(statearr_36884[(8)] = inst_36809__$1);

return statearr_36884;
})();
if(cljs.core.truth_(inst_36810)){
var statearr_36885_36935 = state_36878__$1;
(statearr_36885_36935[(1)] = (5));

} else {
var statearr_36886_36936 = state_36878__$1;
(statearr_36886_36936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (15))){
var inst_36851 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36887_36937 = state_36878__$1;
(statearr_36887_36937[(2)] = inst_36851);

(statearr_36887_36937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (21))){
var inst_36871 = (state_36878[(2)]);
var state_36878__$1 = (function (){var statearr_36888 = state_36878;
(statearr_36888[(9)] = inst_36871);

return statearr_36888;
})();
var statearr_36889_36938 = state_36878__$1;
(statearr_36889_36938[(2)] = null);

(statearr_36889_36938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (13))){
var inst_36833 = (state_36878[(10)]);
var inst_36835 = cljs.core.chunked_seq_QMARK_.call(null,inst_36833);
var state_36878__$1 = state_36878;
if(inst_36835){
var statearr_36890_36939 = state_36878__$1;
(statearr_36890_36939[(1)] = (16));

} else {
var statearr_36891_36940 = state_36878__$1;
(statearr_36891_36940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (22))){
var inst_36863 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36863)){
var statearr_36892_36941 = state_36878__$1;
(statearr_36892_36941[(1)] = (23));

} else {
var statearr_36893_36942 = state_36878__$1;
(statearr_36893_36942[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (6))){
var inst_36859 = (state_36878[(11)]);
var inst_36809 = (state_36878[(8)]);
var inst_36857 = (state_36878[(7)]);
var inst_36857__$1 = topic_fn.call(null,inst_36809);
var inst_36858 = cljs.core.deref.call(null,mults);
var inst_36859__$1 = cljs.core.get.call(null,inst_36858,inst_36857__$1);
var state_36878__$1 = (function (){var statearr_36894 = state_36878;
(statearr_36894[(11)] = inst_36859__$1);

(statearr_36894[(7)] = inst_36857__$1);

return statearr_36894;
})();
if(cljs.core.truth_(inst_36859__$1)){
var statearr_36895_36943 = state_36878__$1;
(statearr_36895_36943[(1)] = (19));

} else {
var statearr_36896_36944 = state_36878__$1;
(statearr_36896_36944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (25))){
var inst_36868 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36897_36945 = state_36878__$1;
(statearr_36897_36945[(2)] = inst_36868);

(statearr_36897_36945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (17))){
var inst_36833 = (state_36878[(10)]);
var inst_36842 = cljs.core.first.call(null,inst_36833);
var inst_36843 = cljs.core.async.muxch_STAR_.call(null,inst_36842);
var inst_36844 = cljs.core.async.close_BANG_.call(null,inst_36843);
var inst_36845 = cljs.core.next.call(null,inst_36833);
var inst_36819 = inst_36845;
var inst_36820 = null;
var inst_36821 = (0);
var inst_36822 = (0);
var state_36878__$1 = (function (){var statearr_36898 = state_36878;
(statearr_36898[(12)] = inst_36821);

(statearr_36898[(13)] = inst_36819);

(statearr_36898[(14)] = inst_36822);

(statearr_36898[(15)] = inst_36820);

(statearr_36898[(16)] = inst_36844);

return statearr_36898;
})();
var statearr_36899_36946 = state_36878__$1;
(statearr_36899_36946[(2)] = null);

(statearr_36899_36946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (3))){
var inst_36876 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36878__$1,inst_36876);
} else {
if((state_val_36879 === (12))){
var inst_36853 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36900_36947 = state_36878__$1;
(statearr_36900_36947[(2)] = inst_36853);

(statearr_36900_36947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (2))){
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36878__$1,(4),ch);
} else {
if((state_val_36879 === (23))){
var state_36878__$1 = state_36878;
var statearr_36901_36948 = state_36878__$1;
(statearr_36901_36948[(2)] = null);

(statearr_36901_36948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (19))){
var inst_36859 = (state_36878[(11)]);
var inst_36809 = (state_36878[(8)]);
var inst_36861 = cljs.core.async.muxch_STAR_.call(null,inst_36859);
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36878__$1,(22),inst_36861,inst_36809);
} else {
if((state_val_36879 === (11))){
var inst_36833 = (state_36878[(10)]);
var inst_36819 = (state_36878[(13)]);
var inst_36833__$1 = cljs.core.seq.call(null,inst_36819);
var state_36878__$1 = (function (){var statearr_36902 = state_36878;
(statearr_36902[(10)] = inst_36833__$1);

return statearr_36902;
})();
if(inst_36833__$1){
var statearr_36903_36949 = state_36878__$1;
(statearr_36903_36949[(1)] = (13));

} else {
var statearr_36904_36950 = state_36878__$1;
(statearr_36904_36950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (9))){
var inst_36855 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36905_36951 = state_36878__$1;
(statearr_36905_36951[(2)] = inst_36855);

(statearr_36905_36951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (5))){
var inst_36816 = cljs.core.deref.call(null,mults);
var inst_36817 = cljs.core.vals.call(null,inst_36816);
var inst_36818 = cljs.core.seq.call(null,inst_36817);
var inst_36819 = inst_36818;
var inst_36820 = null;
var inst_36821 = (0);
var inst_36822 = (0);
var state_36878__$1 = (function (){var statearr_36906 = state_36878;
(statearr_36906[(12)] = inst_36821);

(statearr_36906[(13)] = inst_36819);

(statearr_36906[(14)] = inst_36822);

(statearr_36906[(15)] = inst_36820);

return statearr_36906;
})();
var statearr_36907_36952 = state_36878__$1;
(statearr_36907_36952[(2)] = null);

(statearr_36907_36952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (14))){
var state_36878__$1 = state_36878;
var statearr_36911_36953 = state_36878__$1;
(statearr_36911_36953[(2)] = null);

(statearr_36911_36953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (16))){
var inst_36833 = (state_36878[(10)]);
var inst_36837 = cljs.core.chunk_first.call(null,inst_36833);
var inst_36838 = cljs.core.chunk_rest.call(null,inst_36833);
var inst_36839 = cljs.core.count.call(null,inst_36837);
var inst_36819 = inst_36838;
var inst_36820 = inst_36837;
var inst_36821 = inst_36839;
var inst_36822 = (0);
var state_36878__$1 = (function (){var statearr_36912 = state_36878;
(statearr_36912[(12)] = inst_36821);

(statearr_36912[(13)] = inst_36819);

(statearr_36912[(14)] = inst_36822);

(statearr_36912[(15)] = inst_36820);

return statearr_36912;
})();
var statearr_36913_36954 = state_36878__$1;
(statearr_36913_36954[(2)] = null);

(statearr_36913_36954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (10))){
var inst_36821 = (state_36878[(12)]);
var inst_36819 = (state_36878[(13)]);
var inst_36822 = (state_36878[(14)]);
var inst_36820 = (state_36878[(15)]);
var inst_36827 = cljs.core._nth.call(null,inst_36820,inst_36822);
var inst_36828 = cljs.core.async.muxch_STAR_.call(null,inst_36827);
var inst_36829 = cljs.core.async.close_BANG_.call(null,inst_36828);
var inst_36830 = (inst_36822 + (1));
var tmp36908 = inst_36821;
var tmp36909 = inst_36819;
var tmp36910 = inst_36820;
var inst_36819__$1 = tmp36909;
var inst_36820__$1 = tmp36910;
var inst_36821__$1 = tmp36908;
var inst_36822__$1 = inst_36830;
var state_36878__$1 = (function (){var statearr_36914 = state_36878;
(statearr_36914[(17)] = inst_36829);

(statearr_36914[(12)] = inst_36821__$1);

(statearr_36914[(13)] = inst_36819__$1);

(statearr_36914[(14)] = inst_36822__$1);

(statearr_36914[(15)] = inst_36820__$1);

return statearr_36914;
})();
var statearr_36915_36955 = state_36878__$1;
(statearr_36915_36955[(2)] = null);

(statearr_36915_36955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (18))){
var inst_36848 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36916_36956 = state_36878__$1;
(statearr_36916_36956[(2)] = inst_36848);

(statearr_36916_36956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (8))){
var inst_36821 = (state_36878[(12)]);
var inst_36822 = (state_36878[(14)]);
var inst_36824 = (inst_36822 < inst_36821);
var inst_36825 = inst_36824;
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36825)){
var statearr_36917_36957 = state_36878__$1;
(statearr_36917_36957[(1)] = (10));

} else {
var statearr_36918_36958 = state_36878__$1;
(statearr_36918_36958[(1)] = (11));

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
});})(c__20078__auto___36930,mults,ensure_mult,p))
;
return ((function (switch__19966__auto__,c__20078__auto___36930,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_36922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36922[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_36922[(1)] = (1));

return statearr_36922;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_36878){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_36878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e36923){if((e36923 instanceof Object)){
var ex__19970__auto__ = e36923;
var statearr_36924_36959 = state_36878;
(statearr_36924_36959[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36960 = state_36878;
state_36878 = G__36960;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_36878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_36878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___36930,mults,ensure_mult,p))
})();
var state__20080__auto__ = (function (){var statearr_36925 = f__20079__auto__.call(null);
(statearr_36925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___36930);

return statearr_36925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___36930,mults,ensure_mult,p))
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
var args36961 = [];
var len__17885__auto___36964 = arguments.length;
var i__17886__auto___36965 = (0);
while(true){
if((i__17886__auto___36965 < len__17885__auto___36964)){
args36961.push((arguments[i__17886__auto___36965]));

var G__36966 = (i__17886__auto___36965 + (1));
i__17886__auto___36965 = G__36966;
continue;
} else {
}
break;
}

var G__36963 = args36961.length;
switch (G__36963) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36961.length)].join('')));

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
var args36968 = [];
var len__17885__auto___36971 = arguments.length;
var i__17886__auto___36972 = (0);
while(true){
if((i__17886__auto___36972 < len__17885__auto___36971)){
args36968.push((arguments[i__17886__auto___36972]));

var G__36973 = (i__17886__auto___36972 + (1));
i__17886__auto___36972 = G__36973;
continue;
} else {
}
break;
}

var G__36970 = args36968.length;
switch (G__36970) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36968.length)].join('')));

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
var args36975 = [];
var len__17885__auto___37046 = arguments.length;
var i__17886__auto___37047 = (0);
while(true){
if((i__17886__auto___37047 < len__17885__auto___37046)){
args36975.push((arguments[i__17886__auto___37047]));

var G__37048 = (i__17886__auto___37047 + (1));
i__17886__auto___37047 = G__37048;
continue;
} else {
}
break;
}

var G__36977 = args36975.length;
switch (G__36977) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36975.length)].join('')));

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
var c__20078__auto___37050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37050,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37050,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37016){
var state_val_37017 = (state_37016[(1)]);
if((state_val_37017 === (7))){
var state_37016__$1 = state_37016;
var statearr_37018_37051 = state_37016__$1;
(statearr_37018_37051[(2)] = null);

(statearr_37018_37051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (1))){
var state_37016__$1 = state_37016;
var statearr_37019_37052 = state_37016__$1;
(statearr_37019_37052[(2)] = null);

(statearr_37019_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (4))){
var inst_36980 = (state_37016[(7)]);
var inst_36982 = (inst_36980 < cnt);
var state_37016__$1 = state_37016;
if(cljs.core.truth_(inst_36982)){
var statearr_37020_37053 = state_37016__$1;
(statearr_37020_37053[(1)] = (6));

} else {
var statearr_37021_37054 = state_37016__$1;
(statearr_37021_37054[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (15))){
var inst_37012 = (state_37016[(2)]);
var state_37016__$1 = state_37016;
var statearr_37022_37055 = state_37016__$1;
(statearr_37022_37055[(2)] = inst_37012);

(statearr_37022_37055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (13))){
var inst_37005 = cljs.core.async.close_BANG_.call(null,out);
var state_37016__$1 = state_37016;
var statearr_37023_37056 = state_37016__$1;
(statearr_37023_37056[(2)] = inst_37005);

(statearr_37023_37056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (6))){
var state_37016__$1 = state_37016;
var statearr_37024_37057 = state_37016__$1;
(statearr_37024_37057[(2)] = null);

(statearr_37024_37057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (3))){
var inst_37014 = (state_37016[(2)]);
var state_37016__$1 = state_37016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37016__$1,inst_37014);
} else {
if((state_val_37017 === (12))){
var inst_37002 = (state_37016[(8)]);
var inst_37002__$1 = (state_37016[(2)]);
var inst_37003 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37002__$1);
var state_37016__$1 = (function (){var statearr_37025 = state_37016;
(statearr_37025[(8)] = inst_37002__$1);

return statearr_37025;
})();
if(cljs.core.truth_(inst_37003)){
var statearr_37026_37058 = state_37016__$1;
(statearr_37026_37058[(1)] = (13));

} else {
var statearr_37027_37059 = state_37016__$1;
(statearr_37027_37059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (2))){
var inst_36979 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36980 = (0);
var state_37016__$1 = (function (){var statearr_37028 = state_37016;
(statearr_37028[(7)] = inst_36980);

(statearr_37028[(9)] = inst_36979);

return statearr_37028;
})();
var statearr_37029_37060 = state_37016__$1;
(statearr_37029_37060[(2)] = null);

(statearr_37029_37060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (11))){
var inst_36980 = (state_37016[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37016,(10),Object,null,(9));
var inst_36989 = chs__$1.call(null,inst_36980);
var inst_36990 = done.call(null,inst_36980);
var inst_36991 = cljs.core.async.take_BANG_.call(null,inst_36989,inst_36990);
var state_37016__$1 = state_37016;
var statearr_37030_37061 = state_37016__$1;
(statearr_37030_37061[(2)] = inst_36991);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (9))){
var inst_36980 = (state_37016[(7)]);
var inst_36993 = (state_37016[(2)]);
var inst_36994 = (inst_36980 + (1));
var inst_36980__$1 = inst_36994;
var state_37016__$1 = (function (){var statearr_37031 = state_37016;
(statearr_37031[(10)] = inst_36993);

(statearr_37031[(7)] = inst_36980__$1);

return statearr_37031;
})();
var statearr_37032_37062 = state_37016__$1;
(statearr_37032_37062[(2)] = null);

(statearr_37032_37062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (5))){
var inst_37000 = (state_37016[(2)]);
var state_37016__$1 = (function (){var statearr_37033 = state_37016;
(statearr_37033[(11)] = inst_37000);

return statearr_37033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37016__$1,(12),dchan);
} else {
if((state_val_37017 === (14))){
var inst_37002 = (state_37016[(8)]);
var inst_37007 = cljs.core.apply.call(null,f,inst_37002);
var state_37016__$1 = state_37016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37016__$1,(16),out,inst_37007);
} else {
if((state_val_37017 === (16))){
var inst_37009 = (state_37016[(2)]);
var state_37016__$1 = (function (){var statearr_37034 = state_37016;
(statearr_37034[(12)] = inst_37009);

return statearr_37034;
})();
var statearr_37035_37063 = state_37016__$1;
(statearr_37035_37063[(2)] = null);

(statearr_37035_37063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (10))){
var inst_36984 = (state_37016[(2)]);
var inst_36985 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37016__$1 = (function (){var statearr_37036 = state_37016;
(statearr_37036[(13)] = inst_36984);

return statearr_37036;
})();
var statearr_37037_37064 = state_37016__$1;
(statearr_37037_37064[(2)] = inst_36985);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37017 === (8))){
var inst_36998 = (state_37016[(2)]);
var state_37016__$1 = state_37016;
var statearr_37038_37065 = state_37016__$1;
(statearr_37038_37065[(2)] = inst_36998);

(statearr_37038_37065[(1)] = (5));


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
});})(c__20078__auto___37050,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19966__auto__,c__20078__auto___37050,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37042[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37042[(1)] = (1));

return statearr_37042;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37016){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37043){if((e37043 instanceof Object)){
var ex__19970__auto__ = e37043;
var statearr_37044_37066 = state_37016;
(statearr_37044_37066[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37067 = state_37016;
state_37016 = G__37067;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37050,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20080__auto__ = (function (){var statearr_37045 = f__20079__auto__.call(null);
(statearr_37045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37050);

return statearr_37045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37050,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args37069 = [];
var len__17885__auto___37125 = arguments.length;
var i__17886__auto___37126 = (0);
while(true){
if((i__17886__auto___37126 < len__17885__auto___37125)){
args37069.push((arguments[i__17886__auto___37126]));

var G__37127 = (i__17886__auto___37126 + (1));
i__17886__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var G__37071 = args37069.length;
switch (G__37071) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37069.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___37129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37129,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37129,out){
return (function (state_37101){
var state_val_37102 = (state_37101[(1)]);
if((state_val_37102 === (7))){
var inst_37080 = (state_37101[(7)]);
var inst_37081 = (state_37101[(8)]);
var inst_37080__$1 = (state_37101[(2)]);
var inst_37081__$1 = cljs.core.nth.call(null,inst_37080__$1,(0),null);
var inst_37082 = cljs.core.nth.call(null,inst_37080__$1,(1),null);
var inst_37083 = (inst_37081__$1 == null);
var state_37101__$1 = (function (){var statearr_37103 = state_37101;
(statearr_37103[(9)] = inst_37082);

(statearr_37103[(7)] = inst_37080__$1);

(statearr_37103[(8)] = inst_37081__$1);

return statearr_37103;
})();
if(cljs.core.truth_(inst_37083)){
var statearr_37104_37130 = state_37101__$1;
(statearr_37104_37130[(1)] = (8));

} else {
var statearr_37105_37131 = state_37101__$1;
(statearr_37105_37131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (1))){
var inst_37072 = cljs.core.vec.call(null,chs);
var inst_37073 = inst_37072;
var state_37101__$1 = (function (){var statearr_37106 = state_37101;
(statearr_37106[(10)] = inst_37073);

return statearr_37106;
})();
var statearr_37107_37132 = state_37101__$1;
(statearr_37107_37132[(2)] = null);

(statearr_37107_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (4))){
var inst_37073 = (state_37101[(10)]);
var state_37101__$1 = state_37101;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37101__$1,(7),inst_37073);
} else {
if((state_val_37102 === (6))){
var inst_37097 = (state_37101[(2)]);
var state_37101__$1 = state_37101;
var statearr_37108_37133 = state_37101__$1;
(statearr_37108_37133[(2)] = inst_37097);

(statearr_37108_37133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (3))){
var inst_37099 = (state_37101[(2)]);
var state_37101__$1 = state_37101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37101__$1,inst_37099);
} else {
if((state_val_37102 === (2))){
var inst_37073 = (state_37101[(10)]);
var inst_37075 = cljs.core.count.call(null,inst_37073);
var inst_37076 = (inst_37075 > (0));
var state_37101__$1 = state_37101;
if(cljs.core.truth_(inst_37076)){
var statearr_37110_37134 = state_37101__$1;
(statearr_37110_37134[(1)] = (4));

} else {
var statearr_37111_37135 = state_37101__$1;
(statearr_37111_37135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (11))){
var inst_37073 = (state_37101[(10)]);
var inst_37090 = (state_37101[(2)]);
var tmp37109 = inst_37073;
var inst_37073__$1 = tmp37109;
var state_37101__$1 = (function (){var statearr_37112 = state_37101;
(statearr_37112[(11)] = inst_37090);

(statearr_37112[(10)] = inst_37073__$1);

return statearr_37112;
})();
var statearr_37113_37136 = state_37101__$1;
(statearr_37113_37136[(2)] = null);

(statearr_37113_37136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (9))){
var inst_37081 = (state_37101[(8)]);
var state_37101__$1 = state_37101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37101__$1,(11),out,inst_37081);
} else {
if((state_val_37102 === (5))){
var inst_37095 = cljs.core.async.close_BANG_.call(null,out);
var state_37101__$1 = state_37101;
var statearr_37114_37137 = state_37101__$1;
(statearr_37114_37137[(2)] = inst_37095);

(statearr_37114_37137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (10))){
var inst_37093 = (state_37101[(2)]);
var state_37101__$1 = state_37101;
var statearr_37115_37138 = state_37101__$1;
(statearr_37115_37138[(2)] = inst_37093);

(statearr_37115_37138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37102 === (8))){
var inst_37082 = (state_37101[(9)]);
var inst_37080 = (state_37101[(7)]);
var inst_37073 = (state_37101[(10)]);
var inst_37081 = (state_37101[(8)]);
var inst_37085 = (function (){var cs = inst_37073;
var vec__37078 = inst_37080;
var v = inst_37081;
var c = inst_37082;
return ((function (cs,vec__37078,v,c,inst_37082,inst_37080,inst_37073,inst_37081,state_val_37102,c__20078__auto___37129,out){
return (function (p1__37068_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37068_SHARP_);
});
;})(cs,vec__37078,v,c,inst_37082,inst_37080,inst_37073,inst_37081,state_val_37102,c__20078__auto___37129,out))
})();
var inst_37086 = cljs.core.filterv.call(null,inst_37085,inst_37073);
var inst_37073__$1 = inst_37086;
var state_37101__$1 = (function (){var statearr_37116 = state_37101;
(statearr_37116[(10)] = inst_37073__$1);

return statearr_37116;
})();
var statearr_37117_37139 = state_37101__$1;
(statearr_37117_37139[(2)] = null);

(statearr_37117_37139[(1)] = (2));


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
});})(c__20078__auto___37129,out))
;
return ((function (switch__19966__auto__,c__20078__auto___37129,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37121 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37121[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37121[(1)] = (1));

return statearr_37121;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37101){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37122){if((e37122 instanceof Object)){
var ex__19970__auto__ = e37122;
var statearr_37123_37140 = state_37101;
(statearr_37123_37140[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37141 = state_37101;
state_37101 = G__37141;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37129,out))
})();
var state__20080__auto__ = (function (){var statearr_37124 = f__20079__auto__.call(null);
(statearr_37124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37129);

return statearr_37124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37129,out))
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
var args37142 = [];
var len__17885__auto___37191 = arguments.length;
var i__17886__auto___37192 = (0);
while(true){
if((i__17886__auto___37192 < len__17885__auto___37191)){
args37142.push((arguments[i__17886__auto___37192]));

var G__37193 = (i__17886__auto___37192 + (1));
i__17886__auto___37192 = G__37193;
continue;
} else {
}
break;
}

var G__37144 = args37142.length;
switch (G__37144) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37142.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___37195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37195,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37195,out){
return (function (state_37168){
var state_val_37169 = (state_37168[(1)]);
if((state_val_37169 === (7))){
var inst_37150 = (state_37168[(7)]);
var inst_37150__$1 = (state_37168[(2)]);
var inst_37151 = (inst_37150__$1 == null);
var inst_37152 = cljs.core.not.call(null,inst_37151);
var state_37168__$1 = (function (){var statearr_37170 = state_37168;
(statearr_37170[(7)] = inst_37150__$1);

return statearr_37170;
})();
if(inst_37152){
var statearr_37171_37196 = state_37168__$1;
(statearr_37171_37196[(1)] = (8));

} else {
var statearr_37172_37197 = state_37168__$1;
(statearr_37172_37197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (1))){
var inst_37145 = (0);
var state_37168__$1 = (function (){var statearr_37173 = state_37168;
(statearr_37173[(8)] = inst_37145);

return statearr_37173;
})();
var statearr_37174_37198 = state_37168__$1;
(statearr_37174_37198[(2)] = null);

(statearr_37174_37198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (4))){
var state_37168__$1 = state_37168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37168__$1,(7),ch);
} else {
if((state_val_37169 === (6))){
var inst_37163 = (state_37168[(2)]);
var state_37168__$1 = state_37168;
var statearr_37175_37199 = state_37168__$1;
(statearr_37175_37199[(2)] = inst_37163);

(statearr_37175_37199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (3))){
var inst_37165 = (state_37168[(2)]);
var inst_37166 = cljs.core.async.close_BANG_.call(null,out);
var state_37168__$1 = (function (){var statearr_37176 = state_37168;
(statearr_37176[(9)] = inst_37165);

return statearr_37176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37168__$1,inst_37166);
} else {
if((state_val_37169 === (2))){
var inst_37145 = (state_37168[(8)]);
var inst_37147 = (inst_37145 < n);
var state_37168__$1 = state_37168;
if(cljs.core.truth_(inst_37147)){
var statearr_37177_37200 = state_37168__$1;
(statearr_37177_37200[(1)] = (4));

} else {
var statearr_37178_37201 = state_37168__$1;
(statearr_37178_37201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (11))){
var inst_37145 = (state_37168[(8)]);
var inst_37155 = (state_37168[(2)]);
var inst_37156 = (inst_37145 + (1));
var inst_37145__$1 = inst_37156;
var state_37168__$1 = (function (){var statearr_37179 = state_37168;
(statearr_37179[(10)] = inst_37155);

(statearr_37179[(8)] = inst_37145__$1);

return statearr_37179;
})();
var statearr_37180_37202 = state_37168__$1;
(statearr_37180_37202[(2)] = null);

(statearr_37180_37202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (9))){
var state_37168__$1 = state_37168;
var statearr_37181_37203 = state_37168__$1;
(statearr_37181_37203[(2)] = null);

(statearr_37181_37203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (5))){
var state_37168__$1 = state_37168;
var statearr_37182_37204 = state_37168__$1;
(statearr_37182_37204[(2)] = null);

(statearr_37182_37204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (10))){
var inst_37160 = (state_37168[(2)]);
var state_37168__$1 = state_37168;
var statearr_37183_37205 = state_37168__$1;
(statearr_37183_37205[(2)] = inst_37160);

(statearr_37183_37205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37169 === (8))){
var inst_37150 = (state_37168[(7)]);
var state_37168__$1 = state_37168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37168__$1,(11),out,inst_37150);
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
});})(c__20078__auto___37195,out))
;
return ((function (switch__19966__auto__,c__20078__auto___37195,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37187[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37187[(1)] = (1));

return statearr_37187;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37168){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37188){if((e37188 instanceof Object)){
var ex__19970__auto__ = e37188;
var statearr_37189_37206 = state_37168;
(statearr_37189_37206[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37207 = state_37168;
state_37168 = G__37207;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37195,out))
})();
var state__20080__auto__ = (function (){var statearr_37190 = f__20079__auto__.call(null);
(statearr_37190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37195);

return statearr_37190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37195,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37215 = (function (map_LT_,f,ch,meta37216){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37216 = meta37216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37217,meta37216__$1){
var self__ = this;
var _37217__$1 = this;
return (new cljs.core.async.t_cljs$core$async37215(self__.map_LT_,self__.f,self__.ch,meta37216__$1));
});

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37217){
var self__ = this;
var _37217__$1 = this;
return self__.meta37216;
});

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37218 = (function (map_LT_,f,ch,meta37216,_,fn1,meta37219){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37216 = meta37216;
this._ = _;
this.fn1 = fn1;
this.meta37219 = meta37219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37220,meta37219__$1){
var self__ = this;
var _37220__$1 = this;
return (new cljs.core.async.t_cljs$core$async37218(self__.map_LT_,self__.f,self__.ch,self__.meta37216,self__._,self__.fn1,meta37219__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37220){
var self__ = this;
var _37220__$1 = this;
return self__.meta37219;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37218.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37208_SHARP_){
return f1.call(null,(((p1__37208_SHARP_ == null))?null:self__.f.call(null,p1__37208_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37218.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37216","meta37216",-1543176011,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37215","cljs.core.async/t_cljs$core$async37215",1402246997,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37219","meta37219",1281448910,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37218";

cljs.core.async.t_cljs$core$async37218.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async37218");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37218 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37218(map_LT___$1,f__$1,ch__$1,meta37216__$1,___$2,fn1__$1,meta37219){
return (new cljs.core.async.t_cljs$core$async37218(map_LT___$1,f__$1,ch__$1,meta37216__$1,___$2,fn1__$1,meta37219));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37218(self__.map_LT_,self__.f,self__.ch,self__.meta37216,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37216","meta37216",-1543176011,null)], null);
});

cljs.core.async.t_cljs$core$async37215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37215";

cljs.core.async.t_cljs$core$async37215.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async37215");
});

cljs.core.async.__GT_t_cljs$core$async37215 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37215(map_LT___$1,f__$1,ch__$1,meta37216){
return (new cljs.core.async.t_cljs$core$async37215(map_LT___$1,f__$1,ch__$1,meta37216));
});

}

return (new cljs.core.async.t_cljs$core$async37215(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37224 = (function (map_GT_,f,ch,meta37225){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37225 = meta37225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37226,meta37225__$1){
var self__ = this;
var _37226__$1 = this;
return (new cljs.core.async.t_cljs$core$async37224(self__.map_GT_,self__.f,self__.ch,meta37225__$1));
});

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37226){
var self__ = this;
var _37226__$1 = this;
return self__.meta37225;
});

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37225","meta37225",670208434,null)], null);
});

cljs.core.async.t_cljs$core$async37224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37224";

cljs.core.async.t_cljs$core$async37224.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async37224");
});

cljs.core.async.__GT_t_cljs$core$async37224 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37224(map_GT___$1,f__$1,ch__$1,meta37225){
return (new cljs.core.async.t_cljs$core$async37224(map_GT___$1,f__$1,ch__$1,meta37225));
});

}

return (new cljs.core.async.t_cljs$core$async37224(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37230 = (function (filter_GT_,p,ch,meta37231){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37231 = meta37231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37232,meta37231__$1){
var self__ = this;
var _37232__$1 = this;
return (new cljs.core.async.t_cljs$core$async37230(self__.filter_GT_,self__.p,self__.ch,meta37231__$1));
});

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37232){
var self__ = this;
var _37232__$1 = this;
return self__.meta37231;
});

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37231","meta37231",1486143296,null)], null);
});

cljs.core.async.t_cljs$core$async37230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37230";

cljs.core.async.t_cljs$core$async37230.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async37230");
});

cljs.core.async.__GT_t_cljs$core$async37230 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37230(filter_GT___$1,p__$1,ch__$1,meta37231){
return (new cljs.core.async.t_cljs$core$async37230(filter_GT___$1,p__$1,ch__$1,meta37231));
});

}

return (new cljs.core.async.t_cljs$core$async37230(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args37233 = [];
var len__17885__auto___37277 = arguments.length;
var i__17886__auto___37278 = (0);
while(true){
if((i__17886__auto___37278 < len__17885__auto___37277)){
args37233.push((arguments[i__17886__auto___37278]));

var G__37279 = (i__17886__auto___37278 + (1));
i__17886__auto___37278 = G__37279;
continue;
} else {
}
break;
}

var G__37235 = args37233.length;
switch (G__37235) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37233.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___37281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37281,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37281,out){
return (function (state_37256){
var state_val_37257 = (state_37256[(1)]);
if((state_val_37257 === (7))){
var inst_37252 = (state_37256[(2)]);
var state_37256__$1 = state_37256;
var statearr_37258_37282 = state_37256__$1;
(statearr_37258_37282[(2)] = inst_37252);

(statearr_37258_37282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (1))){
var state_37256__$1 = state_37256;
var statearr_37259_37283 = state_37256__$1;
(statearr_37259_37283[(2)] = null);

(statearr_37259_37283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (4))){
var inst_37238 = (state_37256[(7)]);
var inst_37238__$1 = (state_37256[(2)]);
var inst_37239 = (inst_37238__$1 == null);
var state_37256__$1 = (function (){var statearr_37260 = state_37256;
(statearr_37260[(7)] = inst_37238__$1);

return statearr_37260;
})();
if(cljs.core.truth_(inst_37239)){
var statearr_37261_37284 = state_37256__$1;
(statearr_37261_37284[(1)] = (5));

} else {
var statearr_37262_37285 = state_37256__$1;
(statearr_37262_37285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (6))){
var inst_37238 = (state_37256[(7)]);
var inst_37243 = p.call(null,inst_37238);
var state_37256__$1 = state_37256;
if(cljs.core.truth_(inst_37243)){
var statearr_37263_37286 = state_37256__$1;
(statearr_37263_37286[(1)] = (8));

} else {
var statearr_37264_37287 = state_37256__$1;
(statearr_37264_37287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (3))){
var inst_37254 = (state_37256[(2)]);
var state_37256__$1 = state_37256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37256__$1,inst_37254);
} else {
if((state_val_37257 === (2))){
var state_37256__$1 = state_37256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37256__$1,(4),ch);
} else {
if((state_val_37257 === (11))){
var inst_37246 = (state_37256[(2)]);
var state_37256__$1 = state_37256;
var statearr_37265_37288 = state_37256__$1;
(statearr_37265_37288[(2)] = inst_37246);

(statearr_37265_37288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (9))){
var state_37256__$1 = state_37256;
var statearr_37266_37289 = state_37256__$1;
(statearr_37266_37289[(2)] = null);

(statearr_37266_37289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (5))){
var inst_37241 = cljs.core.async.close_BANG_.call(null,out);
var state_37256__$1 = state_37256;
var statearr_37267_37290 = state_37256__$1;
(statearr_37267_37290[(2)] = inst_37241);

(statearr_37267_37290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (10))){
var inst_37249 = (state_37256[(2)]);
var state_37256__$1 = (function (){var statearr_37268 = state_37256;
(statearr_37268[(8)] = inst_37249);

return statearr_37268;
})();
var statearr_37269_37291 = state_37256__$1;
(statearr_37269_37291[(2)] = null);

(statearr_37269_37291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37257 === (8))){
var inst_37238 = (state_37256[(7)]);
var state_37256__$1 = state_37256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37256__$1,(11),out,inst_37238);
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
});})(c__20078__auto___37281,out))
;
return ((function (switch__19966__auto__,c__20078__auto___37281,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37273 = [null,null,null,null,null,null,null,null,null];
(statearr_37273[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37273[(1)] = (1));

return statearr_37273;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37256){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37274){if((e37274 instanceof Object)){
var ex__19970__auto__ = e37274;
var statearr_37275_37292 = state_37256;
(statearr_37275_37292[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37293 = state_37256;
state_37256 = G__37293;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37281,out))
})();
var state__20080__auto__ = (function (){var statearr_37276 = f__20079__auto__.call(null);
(statearr_37276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37281);

return statearr_37276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37281,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args37294 = [];
var len__17885__auto___37297 = arguments.length;
var i__17886__auto___37298 = (0);
while(true){
if((i__17886__auto___37298 < len__17885__auto___37297)){
args37294.push((arguments[i__17886__auto___37298]));

var G__37299 = (i__17886__auto___37298 + (1));
i__17886__auto___37298 = G__37299;
continue;
} else {
}
break;
}

var G__37296 = args37294.length;
switch (G__37296) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37294.length)].join('')));

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
return (function (state_37466){
var state_val_37467 = (state_37466[(1)]);
if((state_val_37467 === (7))){
var inst_37462 = (state_37466[(2)]);
var state_37466__$1 = state_37466;
var statearr_37468_37509 = state_37466__$1;
(statearr_37468_37509[(2)] = inst_37462);

(statearr_37468_37509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (20))){
var inst_37432 = (state_37466[(7)]);
var inst_37443 = (state_37466[(2)]);
var inst_37444 = cljs.core.next.call(null,inst_37432);
var inst_37418 = inst_37444;
var inst_37419 = null;
var inst_37420 = (0);
var inst_37421 = (0);
var state_37466__$1 = (function (){var statearr_37469 = state_37466;
(statearr_37469[(8)] = inst_37421);

(statearr_37469[(9)] = inst_37419);

(statearr_37469[(10)] = inst_37418);

(statearr_37469[(11)] = inst_37420);

(statearr_37469[(12)] = inst_37443);

return statearr_37469;
})();
var statearr_37470_37510 = state_37466__$1;
(statearr_37470_37510[(2)] = null);

(statearr_37470_37510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (1))){
var state_37466__$1 = state_37466;
var statearr_37471_37511 = state_37466__$1;
(statearr_37471_37511[(2)] = null);

(statearr_37471_37511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (4))){
var inst_37407 = (state_37466[(13)]);
var inst_37407__$1 = (state_37466[(2)]);
var inst_37408 = (inst_37407__$1 == null);
var state_37466__$1 = (function (){var statearr_37472 = state_37466;
(statearr_37472[(13)] = inst_37407__$1);

return statearr_37472;
})();
if(cljs.core.truth_(inst_37408)){
var statearr_37473_37512 = state_37466__$1;
(statearr_37473_37512[(1)] = (5));

} else {
var statearr_37474_37513 = state_37466__$1;
(statearr_37474_37513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (15))){
var state_37466__$1 = state_37466;
var statearr_37478_37514 = state_37466__$1;
(statearr_37478_37514[(2)] = null);

(statearr_37478_37514[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (21))){
var state_37466__$1 = state_37466;
var statearr_37479_37515 = state_37466__$1;
(statearr_37479_37515[(2)] = null);

(statearr_37479_37515[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (13))){
var inst_37421 = (state_37466[(8)]);
var inst_37419 = (state_37466[(9)]);
var inst_37418 = (state_37466[(10)]);
var inst_37420 = (state_37466[(11)]);
var inst_37428 = (state_37466[(2)]);
var inst_37429 = (inst_37421 + (1));
var tmp37475 = inst_37419;
var tmp37476 = inst_37418;
var tmp37477 = inst_37420;
var inst_37418__$1 = tmp37476;
var inst_37419__$1 = tmp37475;
var inst_37420__$1 = tmp37477;
var inst_37421__$1 = inst_37429;
var state_37466__$1 = (function (){var statearr_37480 = state_37466;
(statearr_37480[(8)] = inst_37421__$1);

(statearr_37480[(9)] = inst_37419__$1);

(statearr_37480[(14)] = inst_37428);

(statearr_37480[(10)] = inst_37418__$1);

(statearr_37480[(11)] = inst_37420__$1);

return statearr_37480;
})();
var statearr_37481_37516 = state_37466__$1;
(statearr_37481_37516[(2)] = null);

(statearr_37481_37516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (22))){
var state_37466__$1 = state_37466;
var statearr_37482_37517 = state_37466__$1;
(statearr_37482_37517[(2)] = null);

(statearr_37482_37517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (6))){
var inst_37407 = (state_37466[(13)]);
var inst_37416 = f.call(null,inst_37407);
var inst_37417 = cljs.core.seq.call(null,inst_37416);
var inst_37418 = inst_37417;
var inst_37419 = null;
var inst_37420 = (0);
var inst_37421 = (0);
var state_37466__$1 = (function (){var statearr_37483 = state_37466;
(statearr_37483[(8)] = inst_37421);

(statearr_37483[(9)] = inst_37419);

(statearr_37483[(10)] = inst_37418);

(statearr_37483[(11)] = inst_37420);

return statearr_37483;
})();
var statearr_37484_37518 = state_37466__$1;
(statearr_37484_37518[(2)] = null);

(statearr_37484_37518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (17))){
var inst_37432 = (state_37466[(7)]);
var inst_37436 = cljs.core.chunk_first.call(null,inst_37432);
var inst_37437 = cljs.core.chunk_rest.call(null,inst_37432);
var inst_37438 = cljs.core.count.call(null,inst_37436);
var inst_37418 = inst_37437;
var inst_37419 = inst_37436;
var inst_37420 = inst_37438;
var inst_37421 = (0);
var state_37466__$1 = (function (){var statearr_37485 = state_37466;
(statearr_37485[(8)] = inst_37421);

(statearr_37485[(9)] = inst_37419);

(statearr_37485[(10)] = inst_37418);

(statearr_37485[(11)] = inst_37420);

return statearr_37485;
})();
var statearr_37486_37519 = state_37466__$1;
(statearr_37486_37519[(2)] = null);

(statearr_37486_37519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (3))){
var inst_37464 = (state_37466[(2)]);
var state_37466__$1 = state_37466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37466__$1,inst_37464);
} else {
if((state_val_37467 === (12))){
var inst_37452 = (state_37466[(2)]);
var state_37466__$1 = state_37466;
var statearr_37487_37520 = state_37466__$1;
(statearr_37487_37520[(2)] = inst_37452);

(statearr_37487_37520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (2))){
var state_37466__$1 = state_37466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37466__$1,(4),in$);
} else {
if((state_val_37467 === (23))){
var inst_37460 = (state_37466[(2)]);
var state_37466__$1 = state_37466;
var statearr_37488_37521 = state_37466__$1;
(statearr_37488_37521[(2)] = inst_37460);

(statearr_37488_37521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (19))){
var inst_37447 = (state_37466[(2)]);
var state_37466__$1 = state_37466;
var statearr_37489_37522 = state_37466__$1;
(statearr_37489_37522[(2)] = inst_37447);

(statearr_37489_37522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (11))){
var inst_37418 = (state_37466[(10)]);
var inst_37432 = (state_37466[(7)]);
var inst_37432__$1 = cljs.core.seq.call(null,inst_37418);
var state_37466__$1 = (function (){var statearr_37490 = state_37466;
(statearr_37490[(7)] = inst_37432__$1);

return statearr_37490;
})();
if(inst_37432__$1){
var statearr_37491_37523 = state_37466__$1;
(statearr_37491_37523[(1)] = (14));

} else {
var statearr_37492_37524 = state_37466__$1;
(statearr_37492_37524[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (9))){
var inst_37454 = (state_37466[(2)]);
var inst_37455 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37466__$1 = (function (){var statearr_37493 = state_37466;
(statearr_37493[(15)] = inst_37454);

return statearr_37493;
})();
if(cljs.core.truth_(inst_37455)){
var statearr_37494_37525 = state_37466__$1;
(statearr_37494_37525[(1)] = (21));

} else {
var statearr_37495_37526 = state_37466__$1;
(statearr_37495_37526[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (5))){
var inst_37410 = cljs.core.async.close_BANG_.call(null,out);
var state_37466__$1 = state_37466;
var statearr_37496_37527 = state_37466__$1;
(statearr_37496_37527[(2)] = inst_37410);

(statearr_37496_37527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (14))){
var inst_37432 = (state_37466[(7)]);
var inst_37434 = cljs.core.chunked_seq_QMARK_.call(null,inst_37432);
var state_37466__$1 = state_37466;
if(inst_37434){
var statearr_37497_37528 = state_37466__$1;
(statearr_37497_37528[(1)] = (17));

} else {
var statearr_37498_37529 = state_37466__$1;
(statearr_37498_37529[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (16))){
var inst_37450 = (state_37466[(2)]);
var state_37466__$1 = state_37466;
var statearr_37499_37530 = state_37466__$1;
(statearr_37499_37530[(2)] = inst_37450);

(statearr_37499_37530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37467 === (10))){
var inst_37421 = (state_37466[(8)]);
var inst_37419 = (state_37466[(9)]);
var inst_37426 = cljs.core._nth.call(null,inst_37419,inst_37421);
var state_37466__$1 = state_37466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37466__$1,(13),out,inst_37426);
} else {
if((state_val_37467 === (18))){
var inst_37432 = (state_37466[(7)]);
var inst_37441 = cljs.core.first.call(null,inst_37432);
var state_37466__$1 = state_37466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37466__$1,(20),out,inst_37441);
} else {
if((state_val_37467 === (8))){
var inst_37421 = (state_37466[(8)]);
var inst_37420 = (state_37466[(11)]);
var inst_37423 = (inst_37421 < inst_37420);
var inst_37424 = inst_37423;
var state_37466__$1 = state_37466;
if(cljs.core.truth_(inst_37424)){
var statearr_37500_37531 = state_37466__$1;
(statearr_37500_37531[(1)] = (10));

} else {
var statearr_37501_37532 = state_37466__$1;
(statearr_37501_37532[(1)] = (11));

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
var statearr_37505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37505[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__);

(statearr_37505[(1)] = (1));

return statearr_37505;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1 = (function (state_37466){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37506){if((e37506 instanceof Object)){
var ex__19970__auto__ = e37506;
var statearr_37507_37533 = state_37466;
(statearr_37507_37533[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37534 = state_37466;
state_37466 = G__37534;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__ = function(state_37466){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1.call(this,state_37466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_37508 = f__20079__auto__.call(null);
(statearr_37508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_37508;
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
var args37535 = [];
var len__17885__auto___37538 = arguments.length;
var i__17886__auto___37539 = (0);
while(true){
if((i__17886__auto___37539 < len__17885__auto___37538)){
args37535.push((arguments[i__17886__auto___37539]));

var G__37540 = (i__17886__auto___37539 + (1));
i__17886__auto___37539 = G__37540;
continue;
} else {
}
break;
}

var G__37537 = args37535.length;
switch (G__37537) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37535.length)].join('')));

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
var args37542 = [];
var len__17885__auto___37545 = arguments.length;
var i__17886__auto___37546 = (0);
while(true){
if((i__17886__auto___37546 < len__17885__auto___37545)){
args37542.push((arguments[i__17886__auto___37546]));

var G__37547 = (i__17886__auto___37546 + (1));
i__17886__auto___37546 = G__37547;
continue;
} else {
}
break;
}

var G__37544 = args37542.length;
switch (G__37544) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37542.length)].join('')));

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
var args37549 = [];
var len__17885__auto___37600 = arguments.length;
var i__17886__auto___37601 = (0);
while(true){
if((i__17886__auto___37601 < len__17885__auto___37600)){
args37549.push((arguments[i__17886__auto___37601]));

var G__37602 = (i__17886__auto___37601 + (1));
i__17886__auto___37601 = G__37602;
continue;
} else {
}
break;
}

var G__37551 = args37549.length;
switch (G__37551) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37549.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___37604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37604,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37604,out){
return (function (state_37575){
var state_val_37576 = (state_37575[(1)]);
if((state_val_37576 === (7))){
var inst_37570 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37577_37605 = state_37575__$1;
(statearr_37577_37605[(2)] = inst_37570);

(statearr_37577_37605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (1))){
var inst_37552 = null;
var state_37575__$1 = (function (){var statearr_37578 = state_37575;
(statearr_37578[(7)] = inst_37552);

return statearr_37578;
})();
var statearr_37579_37606 = state_37575__$1;
(statearr_37579_37606[(2)] = null);

(statearr_37579_37606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (4))){
var inst_37555 = (state_37575[(8)]);
var inst_37555__$1 = (state_37575[(2)]);
var inst_37556 = (inst_37555__$1 == null);
var inst_37557 = cljs.core.not.call(null,inst_37556);
var state_37575__$1 = (function (){var statearr_37580 = state_37575;
(statearr_37580[(8)] = inst_37555__$1);

return statearr_37580;
})();
if(inst_37557){
var statearr_37581_37607 = state_37575__$1;
(statearr_37581_37607[(1)] = (5));

} else {
var statearr_37582_37608 = state_37575__$1;
(statearr_37582_37608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (6))){
var state_37575__$1 = state_37575;
var statearr_37583_37609 = state_37575__$1;
(statearr_37583_37609[(2)] = null);

(statearr_37583_37609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (3))){
var inst_37572 = (state_37575[(2)]);
var inst_37573 = cljs.core.async.close_BANG_.call(null,out);
var state_37575__$1 = (function (){var statearr_37584 = state_37575;
(statearr_37584[(9)] = inst_37572);

return statearr_37584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37575__$1,inst_37573);
} else {
if((state_val_37576 === (2))){
var state_37575__$1 = state_37575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37575__$1,(4),ch);
} else {
if((state_val_37576 === (11))){
var inst_37555 = (state_37575[(8)]);
var inst_37564 = (state_37575[(2)]);
var inst_37552 = inst_37555;
var state_37575__$1 = (function (){var statearr_37585 = state_37575;
(statearr_37585[(10)] = inst_37564);

(statearr_37585[(7)] = inst_37552);

return statearr_37585;
})();
var statearr_37586_37610 = state_37575__$1;
(statearr_37586_37610[(2)] = null);

(statearr_37586_37610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (9))){
var inst_37555 = (state_37575[(8)]);
var state_37575__$1 = state_37575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37575__$1,(11),out,inst_37555);
} else {
if((state_val_37576 === (5))){
var inst_37555 = (state_37575[(8)]);
var inst_37552 = (state_37575[(7)]);
var inst_37559 = cljs.core._EQ_.call(null,inst_37555,inst_37552);
var state_37575__$1 = state_37575;
if(inst_37559){
var statearr_37588_37611 = state_37575__$1;
(statearr_37588_37611[(1)] = (8));

} else {
var statearr_37589_37612 = state_37575__$1;
(statearr_37589_37612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (10))){
var inst_37567 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37590_37613 = state_37575__$1;
(statearr_37590_37613[(2)] = inst_37567);

(statearr_37590_37613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (8))){
var inst_37552 = (state_37575[(7)]);
var tmp37587 = inst_37552;
var inst_37552__$1 = tmp37587;
var state_37575__$1 = (function (){var statearr_37591 = state_37575;
(statearr_37591[(7)] = inst_37552__$1);

return statearr_37591;
})();
var statearr_37592_37614 = state_37575__$1;
(statearr_37592_37614[(2)] = null);

(statearr_37592_37614[(1)] = (2));


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
});})(c__20078__auto___37604,out))
;
return ((function (switch__19966__auto__,c__20078__auto___37604,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37596[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37596[(1)] = (1));

return statearr_37596;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37575){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37597){if((e37597 instanceof Object)){
var ex__19970__auto__ = e37597;
var statearr_37598_37615 = state_37575;
(statearr_37598_37615[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37616 = state_37575;
state_37575 = G__37616;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37604,out))
})();
var state__20080__auto__ = (function (){var statearr_37599 = f__20079__auto__.call(null);
(statearr_37599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37604);

return statearr_37599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37604,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37617 = [];
var len__17885__auto___37687 = arguments.length;
var i__17886__auto___37688 = (0);
while(true){
if((i__17886__auto___37688 < len__17885__auto___37687)){
args37617.push((arguments[i__17886__auto___37688]));

var G__37689 = (i__17886__auto___37688 + (1));
i__17886__auto___37688 = G__37689;
continue;
} else {
}
break;
}

var G__37619 = args37617.length;
switch (G__37619) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37617.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___37691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37691,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37691,out){
return (function (state_37657){
var state_val_37658 = (state_37657[(1)]);
if((state_val_37658 === (7))){
var inst_37653 = (state_37657[(2)]);
var state_37657__$1 = state_37657;
var statearr_37659_37692 = state_37657__$1;
(statearr_37659_37692[(2)] = inst_37653);

(statearr_37659_37692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (1))){
var inst_37620 = (new Array(n));
var inst_37621 = inst_37620;
var inst_37622 = (0);
var state_37657__$1 = (function (){var statearr_37660 = state_37657;
(statearr_37660[(7)] = inst_37622);

(statearr_37660[(8)] = inst_37621);

return statearr_37660;
})();
var statearr_37661_37693 = state_37657__$1;
(statearr_37661_37693[(2)] = null);

(statearr_37661_37693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (4))){
var inst_37625 = (state_37657[(9)]);
var inst_37625__$1 = (state_37657[(2)]);
var inst_37626 = (inst_37625__$1 == null);
var inst_37627 = cljs.core.not.call(null,inst_37626);
var state_37657__$1 = (function (){var statearr_37662 = state_37657;
(statearr_37662[(9)] = inst_37625__$1);

return statearr_37662;
})();
if(inst_37627){
var statearr_37663_37694 = state_37657__$1;
(statearr_37663_37694[(1)] = (5));

} else {
var statearr_37664_37695 = state_37657__$1;
(statearr_37664_37695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (15))){
var inst_37647 = (state_37657[(2)]);
var state_37657__$1 = state_37657;
var statearr_37665_37696 = state_37657__$1;
(statearr_37665_37696[(2)] = inst_37647);

(statearr_37665_37696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (13))){
var state_37657__$1 = state_37657;
var statearr_37666_37697 = state_37657__$1;
(statearr_37666_37697[(2)] = null);

(statearr_37666_37697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (6))){
var inst_37622 = (state_37657[(7)]);
var inst_37643 = (inst_37622 > (0));
var state_37657__$1 = state_37657;
if(cljs.core.truth_(inst_37643)){
var statearr_37667_37698 = state_37657__$1;
(statearr_37667_37698[(1)] = (12));

} else {
var statearr_37668_37699 = state_37657__$1;
(statearr_37668_37699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (3))){
var inst_37655 = (state_37657[(2)]);
var state_37657__$1 = state_37657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37657__$1,inst_37655);
} else {
if((state_val_37658 === (12))){
var inst_37621 = (state_37657[(8)]);
var inst_37645 = cljs.core.vec.call(null,inst_37621);
var state_37657__$1 = state_37657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37657__$1,(15),out,inst_37645);
} else {
if((state_val_37658 === (2))){
var state_37657__$1 = state_37657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37657__$1,(4),ch);
} else {
if((state_val_37658 === (11))){
var inst_37637 = (state_37657[(2)]);
var inst_37638 = (new Array(n));
var inst_37621 = inst_37638;
var inst_37622 = (0);
var state_37657__$1 = (function (){var statearr_37669 = state_37657;
(statearr_37669[(7)] = inst_37622);

(statearr_37669[(8)] = inst_37621);

(statearr_37669[(10)] = inst_37637);

return statearr_37669;
})();
var statearr_37670_37700 = state_37657__$1;
(statearr_37670_37700[(2)] = null);

(statearr_37670_37700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (9))){
var inst_37621 = (state_37657[(8)]);
var inst_37635 = cljs.core.vec.call(null,inst_37621);
var state_37657__$1 = state_37657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37657__$1,(11),out,inst_37635);
} else {
if((state_val_37658 === (5))){
var inst_37622 = (state_37657[(7)]);
var inst_37621 = (state_37657[(8)]);
var inst_37630 = (state_37657[(11)]);
var inst_37625 = (state_37657[(9)]);
var inst_37629 = (inst_37621[inst_37622] = inst_37625);
var inst_37630__$1 = (inst_37622 + (1));
var inst_37631 = (inst_37630__$1 < n);
var state_37657__$1 = (function (){var statearr_37671 = state_37657;
(statearr_37671[(11)] = inst_37630__$1);

(statearr_37671[(12)] = inst_37629);

return statearr_37671;
})();
if(cljs.core.truth_(inst_37631)){
var statearr_37672_37701 = state_37657__$1;
(statearr_37672_37701[(1)] = (8));

} else {
var statearr_37673_37702 = state_37657__$1;
(statearr_37673_37702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (14))){
var inst_37650 = (state_37657[(2)]);
var inst_37651 = cljs.core.async.close_BANG_.call(null,out);
var state_37657__$1 = (function (){var statearr_37675 = state_37657;
(statearr_37675[(13)] = inst_37650);

return statearr_37675;
})();
var statearr_37676_37703 = state_37657__$1;
(statearr_37676_37703[(2)] = inst_37651);

(statearr_37676_37703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (10))){
var inst_37641 = (state_37657[(2)]);
var state_37657__$1 = state_37657;
var statearr_37677_37704 = state_37657__$1;
(statearr_37677_37704[(2)] = inst_37641);

(statearr_37677_37704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (8))){
var inst_37621 = (state_37657[(8)]);
var inst_37630 = (state_37657[(11)]);
var tmp37674 = inst_37621;
var inst_37621__$1 = tmp37674;
var inst_37622 = inst_37630;
var state_37657__$1 = (function (){var statearr_37678 = state_37657;
(statearr_37678[(7)] = inst_37622);

(statearr_37678[(8)] = inst_37621__$1);

return statearr_37678;
})();
var statearr_37679_37705 = state_37657__$1;
(statearr_37679_37705[(2)] = null);

(statearr_37679_37705[(1)] = (2));


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
});})(c__20078__auto___37691,out))
;
return ((function (switch__19966__auto__,c__20078__auto___37691,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37683[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37683[(1)] = (1));

return statearr_37683;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37657){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37684){if((e37684 instanceof Object)){
var ex__19970__auto__ = e37684;
var statearr_37685_37706 = state_37657;
(statearr_37685_37706[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37707 = state_37657;
state_37657 = G__37707;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37691,out))
})();
var state__20080__auto__ = (function (){var statearr_37686 = f__20079__auto__.call(null);
(statearr_37686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37691);

return statearr_37686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37691,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37708 = [];
var len__17885__auto___37782 = arguments.length;
var i__17886__auto___37783 = (0);
while(true){
if((i__17886__auto___37783 < len__17885__auto___37782)){
args37708.push((arguments[i__17886__auto___37783]));

var G__37784 = (i__17886__auto___37783 + (1));
i__17886__auto___37783 = G__37784;
continue;
} else {
}
break;
}

var G__37710 = args37708.length;
switch (G__37710) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37708.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___37786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___37786,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___37786,out){
return (function (state_37752){
var state_val_37753 = (state_37752[(1)]);
if((state_val_37753 === (7))){
var inst_37748 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37754_37787 = state_37752__$1;
(statearr_37754_37787[(2)] = inst_37748);

(statearr_37754_37787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (1))){
var inst_37711 = [];
var inst_37712 = inst_37711;
var inst_37713 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37752__$1 = (function (){var statearr_37755 = state_37752;
(statearr_37755[(7)] = inst_37713);

(statearr_37755[(8)] = inst_37712);

return statearr_37755;
})();
var statearr_37756_37788 = state_37752__$1;
(statearr_37756_37788[(2)] = null);

(statearr_37756_37788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (4))){
var inst_37716 = (state_37752[(9)]);
var inst_37716__$1 = (state_37752[(2)]);
var inst_37717 = (inst_37716__$1 == null);
var inst_37718 = cljs.core.not.call(null,inst_37717);
var state_37752__$1 = (function (){var statearr_37757 = state_37752;
(statearr_37757[(9)] = inst_37716__$1);

return statearr_37757;
})();
if(inst_37718){
var statearr_37758_37789 = state_37752__$1;
(statearr_37758_37789[(1)] = (5));

} else {
var statearr_37759_37790 = state_37752__$1;
(statearr_37759_37790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (15))){
var inst_37742 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37760_37791 = state_37752__$1;
(statearr_37760_37791[(2)] = inst_37742);

(statearr_37760_37791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (13))){
var state_37752__$1 = state_37752;
var statearr_37761_37792 = state_37752__$1;
(statearr_37761_37792[(2)] = null);

(statearr_37761_37792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (6))){
var inst_37712 = (state_37752[(8)]);
var inst_37737 = inst_37712.length;
var inst_37738 = (inst_37737 > (0));
var state_37752__$1 = state_37752;
if(cljs.core.truth_(inst_37738)){
var statearr_37762_37793 = state_37752__$1;
(statearr_37762_37793[(1)] = (12));

} else {
var statearr_37763_37794 = state_37752__$1;
(statearr_37763_37794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (3))){
var inst_37750 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37752__$1,inst_37750);
} else {
if((state_val_37753 === (12))){
var inst_37712 = (state_37752[(8)]);
var inst_37740 = cljs.core.vec.call(null,inst_37712);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37752__$1,(15),out,inst_37740);
} else {
if((state_val_37753 === (2))){
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37752__$1,(4),ch);
} else {
if((state_val_37753 === (11))){
var inst_37720 = (state_37752[(10)]);
var inst_37716 = (state_37752[(9)]);
var inst_37730 = (state_37752[(2)]);
var inst_37731 = [];
var inst_37732 = inst_37731.push(inst_37716);
var inst_37712 = inst_37731;
var inst_37713 = inst_37720;
var state_37752__$1 = (function (){var statearr_37764 = state_37752;
(statearr_37764[(11)] = inst_37732);

(statearr_37764[(7)] = inst_37713);

(statearr_37764[(12)] = inst_37730);

(statearr_37764[(8)] = inst_37712);

return statearr_37764;
})();
var statearr_37765_37795 = state_37752__$1;
(statearr_37765_37795[(2)] = null);

(statearr_37765_37795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (9))){
var inst_37712 = (state_37752[(8)]);
var inst_37728 = cljs.core.vec.call(null,inst_37712);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37752__$1,(11),out,inst_37728);
} else {
if((state_val_37753 === (5))){
var inst_37720 = (state_37752[(10)]);
var inst_37716 = (state_37752[(9)]);
var inst_37713 = (state_37752[(7)]);
var inst_37720__$1 = f.call(null,inst_37716);
var inst_37721 = cljs.core._EQ_.call(null,inst_37720__$1,inst_37713);
var inst_37722 = cljs.core.keyword_identical_QMARK_.call(null,inst_37713,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37723 = (inst_37721) || (inst_37722);
var state_37752__$1 = (function (){var statearr_37766 = state_37752;
(statearr_37766[(10)] = inst_37720__$1);

return statearr_37766;
})();
if(cljs.core.truth_(inst_37723)){
var statearr_37767_37796 = state_37752__$1;
(statearr_37767_37796[(1)] = (8));

} else {
var statearr_37768_37797 = state_37752__$1;
(statearr_37768_37797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (14))){
var inst_37745 = (state_37752[(2)]);
var inst_37746 = cljs.core.async.close_BANG_.call(null,out);
var state_37752__$1 = (function (){var statearr_37770 = state_37752;
(statearr_37770[(13)] = inst_37745);

return statearr_37770;
})();
var statearr_37771_37798 = state_37752__$1;
(statearr_37771_37798[(2)] = inst_37746);

(statearr_37771_37798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (10))){
var inst_37735 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37772_37799 = state_37752__$1;
(statearr_37772_37799[(2)] = inst_37735);

(statearr_37772_37799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (8))){
var inst_37720 = (state_37752[(10)]);
var inst_37716 = (state_37752[(9)]);
var inst_37712 = (state_37752[(8)]);
var inst_37725 = inst_37712.push(inst_37716);
var tmp37769 = inst_37712;
var inst_37712__$1 = tmp37769;
var inst_37713 = inst_37720;
var state_37752__$1 = (function (){var statearr_37773 = state_37752;
(statearr_37773[(7)] = inst_37713);

(statearr_37773[(14)] = inst_37725);

(statearr_37773[(8)] = inst_37712__$1);

return statearr_37773;
})();
var statearr_37774_37800 = state_37752__$1;
(statearr_37774_37800[(2)] = null);

(statearr_37774_37800[(1)] = (2));


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
});})(c__20078__auto___37786,out))
;
return ((function (switch__19966__auto__,c__20078__auto___37786,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_37778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37778[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_37778[(1)] = (1));

return statearr_37778;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_37752){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_37752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e37779){if((e37779 instanceof Object)){
var ex__19970__auto__ = e37779;
var statearr_37780_37801 = state_37752;
(statearr_37780_37801[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37802 = state_37752;
state_37752 = G__37802;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_37752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_37752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___37786,out))
})();
var state__20080__auto__ = (function (){var statearr_37781 = f__20079__auto__.call(null);
(statearr_37781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___37786);

return statearr_37781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___37786,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1450190104525