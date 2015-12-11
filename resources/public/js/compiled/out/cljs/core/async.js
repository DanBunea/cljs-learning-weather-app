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
var args19460 = [];
var len__17884__auto___19466 = arguments.length;
var i__17885__auto___19467 = (0);
while(true){
if((i__17885__auto___19467 < len__17884__auto___19466)){
args19460.push((arguments[i__17885__auto___19467]));

var G__19468 = (i__17885__auto___19467 + (1));
i__17885__auto___19467 = G__19468;
continue;
} else {
}
break;
}

var G__19462 = args19460.length;
switch (G__19462) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19460.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19463 = (function (f,blockable,meta19464){
this.f = f;
this.blockable = blockable;
this.meta19464 = meta19464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19465,meta19464__$1){
var self__ = this;
var _19465__$1 = this;
return (new cljs.core.async.t_cljs$core$async19463(self__.f,self__.blockable,meta19464__$1));
});

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19465){
var self__ = this;
var _19465__$1 = this;
return self__.meta19464;
});

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19464","meta19464",813048646,null)], null);
});

cljs.core.async.t_cljs$core$async19463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19463";

cljs.core.async.t_cljs$core$async19463.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19463");
});

cljs.core.async.__GT_t_cljs$core$async19463 = (function cljs$core$async$__GT_t_cljs$core$async19463(f__$1,blockable__$1,meta19464){
return (new cljs.core.async.t_cljs$core$async19463(f__$1,blockable__$1,meta19464));
});

}

return (new cljs.core.async.t_cljs$core$async19463(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19472 = [];
var len__17884__auto___19475 = arguments.length;
var i__17885__auto___19476 = (0);
while(true){
if((i__17885__auto___19476 < len__17884__auto___19475)){
args19472.push((arguments[i__17885__auto___19476]));

var G__19477 = (i__17885__auto___19476 + (1));
i__17885__auto___19476 = G__19477;
continue;
} else {
}
break;
}

var G__19474 = args19472.length;
switch (G__19474) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19472.length)].join('')));

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
var args19479 = [];
var len__17884__auto___19482 = arguments.length;
var i__17885__auto___19483 = (0);
while(true){
if((i__17885__auto___19483 < len__17884__auto___19482)){
args19479.push((arguments[i__17885__auto___19483]));

var G__19484 = (i__17885__auto___19483 + (1));
i__17885__auto___19483 = G__19484;
continue;
} else {
}
break;
}

var G__19481 = args19479.length;
switch (G__19481) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19479.length)].join('')));

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
var args19486 = [];
var len__17884__auto___19489 = arguments.length;
var i__17885__auto___19490 = (0);
while(true){
if((i__17885__auto___19490 < len__17884__auto___19489)){
args19486.push((arguments[i__17885__auto___19490]));

var G__19491 = (i__17885__auto___19490 + (1));
i__17885__auto___19490 = G__19491;
continue;
} else {
}
break;
}

var G__19488 = args19486.length;
switch (G__19488) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19486.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19493 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19493);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19493,ret){
return (function (){
return fn1.call(null,val_19493);
});})(val_19493,ret))
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
var args19494 = [];
var len__17884__auto___19497 = arguments.length;
var i__17885__auto___19498 = (0);
while(true){
if((i__17885__auto___19498 < len__17884__auto___19497)){
args19494.push((arguments[i__17885__auto___19498]));

var G__19499 = (i__17885__auto___19498 + (1));
i__17885__auto___19498 = G__19499;
continue;
} else {
}
break;
}

var G__19496 = args19494.length;
switch (G__19496) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19494.length)].join('')));

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
var n__17729__auto___19501 = n;
var x_19502 = (0);
while(true){
if((x_19502 < n__17729__auto___19501)){
(a[x_19502] = (0));

var G__19503 = (x_19502 + (1));
x_19502 = G__19503;
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

var G__19504 = (i + (1));
i = G__19504;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19508 = (function (alt_flag,flag,meta19509){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19509 = meta19509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19510,meta19509__$1){
var self__ = this;
var _19510__$1 = this;
return (new cljs.core.async.t_cljs$core$async19508(self__.alt_flag,self__.flag,meta19509__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19510){
var self__ = this;
var _19510__$1 = this;
return self__.meta19509;
});})(flag))
;

cljs.core.async.t_cljs$core$async19508.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19508.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19509","meta19509",1747216583,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19508";

cljs.core.async.t_cljs$core$async19508.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19508");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19508 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19508(alt_flag__$1,flag__$1,meta19509){
return (new cljs.core.async.t_cljs$core$async19508(alt_flag__$1,flag__$1,meta19509));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19508(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19514 = (function (alt_handler,flag,cb,meta19515){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19515 = meta19515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19516,meta19515__$1){
var self__ = this;
var _19516__$1 = this;
return (new cljs.core.async.t_cljs$core$async19514(self__.alt_handler,self__.flag,self__.cb,meta19515__$1));
});

cljs.core.async.t_cljs$core$async19514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19516){
var self__ = this;
var _19516__$1 = this;
return self__.meta19515;
});

cljs.core.async.t_cljs$core$async19514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19515","meta19515",-339876608,null)], null);
});

cljs.core.async.t_cljs$core$async19514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19514";

cljs.core.async.t_cljs$core$async19514.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19514");
});

cljs.core.async.__GT_t_cljs$core$async19514 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19514(alt_handler__$1,flag__$1,cb__$1,meta19515){
return (new cljs.core.async.t_cljs$core$async19514(alt_handler__$1,flag__$1,cb__$1,meta19515));
});

}

return (new cljs.core.async.t_cljs$core$async19514(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19517_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19517_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19518_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19518_SHARP_,port], null));
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
var G__19519 = (i + (1));
i = G__19519;
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
var args__17891__auto__ = [];
var len__17884__auto___19525 = arguments.length;
var i__17885__auto___19526 = (0);
while(true){
if((i__17885__auto___19526 < len__17884__auto___19525)){
args__17891__auto__.push((arguments[i__17885__auto___19526]));

var G__19527 = (i__17885__auto___19526 + (1));
i__17885__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19522){
var map__19523 = p__19522;
var map__19523__$1 = ((((!((map__19523 == null)))?((((map__19523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19523):map__19523);
var opts = map__19523__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19520){
var G__19521 = cljs.core.first.call(null,seq19520);
var seq19520__$1 = cljs.core.next.call(null,seq19520);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19521,seq19520__$1);
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
var args19528 = [];
var len__17884__auto___19578 = arguments.length;
var i__17885__auto___19579 = (0);
while(true){
if((i__17885__auto___19579 < len__17884__auto___19578)){
args19528.push((arguments[i__17885__auto___19579]));

var G__19580 = (i__17885__auto___19579 + (1));
i__17885__auto___19579 = G__19580;
continue;
} else {
}
break;
}

var G__19530 = args19528.length;
switch (G__19530) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19528.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19415__auto___19582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___19582){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___19582){
return (function (state_19554){
var state_val_19555 = (state_19554[(1)]);
if((state_val_19555 === (7))){
var inst_19550 = (state_19554[(2)]);
var state_19554__$1 = state_19554;
var statearr_19556_19583 = state_19554__$1;
(statearr_19556_19583[(2)] = inst_19550);

(statearr_19556_19583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (1))){
var state_19554__$1 = state_19554;
var statearr_19557_19584 = state_19554__$1;
(statearr_19557_19584[(2)] = null);

(statearr_19557_19584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (4))){
var inst_19533 = (state_19554[(7)]);
var inst_19533__$1 = (state_19554[(2)]);
var inst_19534 = (inst_19533__$1 == null);
var state_19554__$1 = (function (){var statearr_19558 = state_19554;
(statearr_19558[(7)] = inst_19533__$1);

return statearr_19558;
})();
if(cljs.core.truth_(inst_19534)){
var statearr_19559_19585 = state_19554__$1;
(statearr_19559_19585[(1)] = (5));

} else {
var statearr_19560_19586 = state_19554__$1;
(statearr_19560_19586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (13))){
var state_19554__$1 = state_19554;
var statearr_19561_19587 = state_19554__$1;
(statearr_19561_19587[(2)] = null);

(statearr_19561_19587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (6))){
var inst_19533 = (state_19554[(7)]);
var state_19554__$1 = state_19554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19554__$1,(11),to,inst_19533);
} else {
if((state_val_19555 === (3))){
var inst_19552 = (state_19554[(2)]);
var state_19554__$1 = state_19554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19554__$1,inst_19552);
} else {
if((state_val_19555 === (12))){
var state_19554__$1 = state_19554;
var statearr_19562_19588 = state_19554__$1;
(statearr_19562_19588[(2)] = null);

(statearr_19562_19588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (2))){
var state_19554__$1 = state_19554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19554__$1,(4),from);
} else {
if((state_val_19555 === (11))){
var inst_19543 = (state_19554[(2)]);
var state_19554__$1 = state_19554;
if(cljs.core.truth_(inst_19543)){
var statearr_19563_19589 = state_19554__$1;
(statearr_19563_19589[(1)] = (12));

} else {
var statearr_19564_19590 = state_19554__$1;
(statearr_19564_19590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (9))){
var state_19554__$1 = state_19554;
var statearr_19565_19591 = state_19554__$1;
(statearr_19565_19591[(2)] = null);

(statearr_19565_19591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (5))){
var state_19554__$1 = state_19554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19566_19592 = state_19554__$1;
(statearr_19566_19592[(1)] = (8));

} else {
var statearr_19567_19593 = state_19554__$1;
(statearr_19567_19593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (14))){
var inst_19548 = (state_19554[(2)]);
var state_19554__$1 = state_19554;
var statearr_19568_19594 = state_19554__$1;
(statearr_19568_19594[(2)] = inst_19548);

(statearr_19568_19594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (10))){
var inst_19540 = (state_19554[(2)]);
var state_19554__$1 = state_19554;
var statearr_19569_19595 = state_19554__$1;
(statearr_19569_19595[(2)] = inst_19540);

(statearr_19569_19595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19555 === (8))){
var inst_19537 = cljs.core.async.close_BANG_.call(null,to);
var state_19554__$1 = state_19554;
var statearr_19570_19596 = state_19554__$1;
(statearr_19570_19596[(2)] = inst_19537);

(statearr_19570_19596[(1)] = (10));


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
});})(c__19415__auto___19582))
;
return ((function (switch__19303__auto__,c__19415__auto___19582){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_19574 = [null,null,null,null,null,null,null,null];
(statearr_19574[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_19574[(1)] = (1));

return statearr_19574;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_19554){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_19554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e19575){if((e19575 instanceof Object)){
var ex__19307__auto__ = e19575;
var statearr_19576_19597 = state_19554;
(statearr_19576_19597[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19598 = state_19554;
state_19554 = G__19598;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_19554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_19554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___19582))
})();
var state__19417__auto__ = (function (){var statearr_19577 = f__19416__auto__.call(null);
(statearr_19577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___19582);

return statearr_19577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___19582))
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
return (function (p__19782){
var vec__19783 = p__19782;
var v = cljs.core.nth.call(null,vec__19783,(0),null);
var p = cljs.core.nth.call(null,vec__19783,(1),null);
var job = vec__19783;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19415__auto___19965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___19965,res,vec__19783,v,p,job,jobs,results){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___19965,res,vec__19783,v,p,job,jobs,results){
return (function (state_19788){
var state_val_19789 = (state_19788[(1)]);
if((state_val_19789 === (1))){
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19788__$1,(2),res,v);
} else {
if((state_val_19789 === (2))){
var inst_19785 = (state_19788[(2)]);
var inst_19786 = cljs.core.async.close_BANG_.call(null,res);
var state_19788__$1 = (function (){var statearr_19790 = state_19788;
(statearr_19790[(7)] = inst_19785);

return statearr_19790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19788__$1,inst_19786);
} else {
return null;
}
}
});})(c__19415__auto___19965,res,vec__19783,v,p,job,jobs,results))
;
return ((function (switch__19303__auto__,c__19415__auto___19965,res,vec__19783,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0 = (function (){
var statearr_19794 = [null,null,null,null,null,null,null,null];
(statearr_19794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__);

(statearr_19794[(1)] = (1));

return statearr_19794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1 = (function (state_19788){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_19788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e19795){if((e19795 instanceof Object)){
var ex__19307__auto__ = e19795;
var statearr_19796_19966 = state_19788;
(statearr_19796_19966[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19967 = state_19788;
state_19788 = G__19967;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = function(state_19788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1.call(this,state_19788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___19965,res,vec__19783,v,p,job,jobs,results))
})();
var state__19417__auto__ = (function (){var statearr_19797 = f__19416__auto__.call(null);
(statearr_19797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___19965);

return statearr_19797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___19965,res,vec__19783,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19798){
var vec__19799 = p__19798;
var v = cljs.core.nth.call(null,vec__19799,(0),null);
var p = cljs.core.nth.call(null,vec__19799,(1),null);
var job = vec__19799;
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
var n__17729__auto___19968 = n;
var __19969 = (0);
while(true){
if((__19969 < n__17729__auto___19968)){
var G__19800_19970 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19800_19970) {
case "compute":
var c__19415__auto___19972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19969,c__19415__auto___19972,G__19800_19970,n__17729__auto___19968,jobs,results,process,async){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (__19969,c__19415__auto___19972,G__19800_19970,n__17729__auto___19968,jobs,results,process,async){
return (function (state_19813){
var state_val_19814 = (state_19813[(1)]);
if((state_val_19814 === (1))){
var state_19813__$1 = state_19813;
var statearr_19815_19973 = state_19813__$1;
(statearr_19815_19973[(2)] = null);

(statearr_19815_19973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (2))){
var state_19813__$1 = state_19813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19813__$1,(4),jobs);
} else {
if((state_val_19814 === (3))){
var inst_19811 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19813__$1,inst_19811);
} else {
if((state_val_19814 === (4))){
var inst_19803 = (state_19813[(2)]);
var inst_19804 = process.call(null,inst_19803);
var state_19813__$1 = state_19813;
if(cljs.core.truth_(inst_19804)){
var statearr_19816_19974 = state_19813__$1;
(statearr_19816_19974[(1)] = (5));

} else {
var statearr_19817_19975 = state_19813__$1;
(statearr_19817_19975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (5))){
var state_19813__$1 = state_19813;
var statearr_19818_19976 = state_19813__$1;
(statearr_19818_19976[(2)] = null);

(statearr_19818_19976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (6))){
var state_19813__$1 = state_19813;
var statearr_19819_19977 = state_19813__$1;
(statearr_19819_19977[(2)] = null);

(statearr_19819_19977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (7))){
var inst_19809 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
var statearr_19820_19978 = state_19813__$1;
(statearr_19820_19978[(2)] = inst_19809);

(statearr_19820_19978[(1)] = (3));


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
});})(__19969,c__19415__auto___19972,G__19800_19970,n__17729__auto___19968,jobs,results,process,async))
;
return ((function (__19969,switch__19303__auto__,c__19415__auto___19972,G__19800_19970,n__17729__auto___19968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0 = (function (){
var statearr_19824 = [null,null,null,null,null,null,null];
(statearr_19824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__);

(statearr_19824[(1)] = (1));

return statearr_19824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1 = (function (state_19813){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_19813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e19825){if((e19825 instanceof Object)){
var ex__19307__auto__ = e19825;
var statearr_19826_19979 = state_19813;
(statearr_19826_19979[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19980 = state_19813;
state_19813 = G__19980;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = function(state_19813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1.call(this,state_19813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__;
})()
;})(__19969,switch__19303__auto__,c__19415__auto___19972,G__19800_19970,n__17729__auto___19968,jobs,results,process,async))
})();
var state__19417__auto__ = (function (){var statearr_19827 = f__19416__auto__.call(null);
(statearr_19827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___19972);

return statearr_19827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(__19969,c__19415__auto___19972,G__19800_19970,n__17729__auto___19968,jobs,results,process,async))
);


break;
case "async":
var c__19415__auto___19981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19969,c__19415__auto___19981,G__19800_19970,n__17729__auto___19968,jobs,results,process,async){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (__19969,c__19415__auto___19981,G__19800_19970,n__17729__auto___19968,jobs,results,process,async){
return (function (state_19840){
var state_val_19841 = (state_19840[(1)]);
if((state_val_19841 === (1))){
var state_19840__$1 = state_19840;
var statearr_19842_19982 = state_19840__$1;
(statearr_19842_19982[(2)] = null);

(statearr_19842_19982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19841 === (2))){
var state_19840__$1 = state_19840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19840__$1,(4),jobs);
} else {
if((state_val_19841 === (3))){
var inst_19838 = (state_19840[(2)]);
var state_19840__$1 = state_19840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19840__$1,inst_19838);
} else {
if((state_val_19841 === (4))){
var inst_19830 = (state_19840[(2)]);
var inst_19831 = async.call(null,inst_19830);
var state_19840__$1 = state_19840;
if(cljs.core.truth_(inst_19831)){
var statearr_19843_19983 = state_19840__$1;
(statearr_19843_19983[(1)] = (5));

} else {
var statearr_19844_19984 = state_19840__$1;
(statearr_19844_19984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19841 === (5))){
var state_19840__$1 = state_19840;
var statearr_19845_19985 = state_19840__$1;
(statearr_19845_19985[(2)] = null);

(statearr_19845_19985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19841 === (6))){
var state_19840__$1 = state_19840;
var statearr_19846_19986 = state_19840__$1;
(statearr_19846_19986[(2)] = null);

(statearr_19846_19986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19841 === (7))){
var inst_19836 = (state_19840[(2)]);
var state_19840__$1 = state_19840;
var statearr_19847_19987 = state_19840__$1;
(statearr_19847_19987[(2)] = inst_19836);

(statearr_19847_19987[(1)] = (3));


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
});})(__19969,c__19415__auto___19981,G__19800_19970,n__17729__auto___19968,jobs,results,process,async))
;
return ((function (__19969,switch__19303__auto__,c__19415__auto___19981,G__19800_19970,n__17729__auto___19968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0 = (function (){
var statearr_19851 = [null,null,null,null,null,null,null];
(statearr_19851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__);

(statearr_19851[(1)] = (1));

return statearr_19851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1 = (function (state_19840){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_19840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e19852){if((e19852 instanceof Object)){
var ex__19307__auto__ = e19852;
var statearr_19853_19988 = state_19840;
(statearr_19853_19988[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19989 = state_19840;
state_19840 = G__19989;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = function(state_19840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1.call(this,state_19840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__;
})()
;})(__19969,switch__19303__auto__,c__19415__auto___19981,G__19800_19970,n__17729__auto___19968,jobs,results,process,async))
})();
var state__19417__auto__ = (function (){var statearr_19854 = f__19416__auto__.call(null);
(statearr_19854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___19981);

return statearr_19854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(__19969,c__19415__auto___19981,G__19800_19970,n__17729__auto___19968,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19990 = (__19969 + (1));
__19969 = G__19990;
continue;
} else {
}
break;
}

var c__19415__auto___19991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___19991,jobs,results,process,async){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___19991,jobs,results,process,async){
return (function (state_19876){
var state_val_19877 = (state_19876[(1)]);
if((state_val_19877 === (1))){
var state_19876__$1 = state_19876;
var statearr_19878_19992 = state_19876__$1;
(statearr_19878_19992[(2)] = null);

(statearr_19878_19992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (2))){
var state_19876__$1 = state_19876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19876__$1,(4),from);
} else {
if((state_val_19877 === (3))){
var inst_19874 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19876__$1,inst_19874);
} else {
if((state_val_19877 === (4))){
var inst_19857 = (state_19876[(7)]);
var inst_19857__$1 = (state_19876[(2)]);
var inst_19858 = (inst_19857__$1 == null);
var state_19876__$1 = (function (){var statearr_19879 = state_19876;
(statearr_19879[(7)] = inst_19857__$1);

return statearr_19879;
})();
if(cljs.core.truth_(inst_19858)){
var statearr_19880_19993 = state_19876__$1;
(statearr_19880_19993[(1)] = (5));

} else {
var statearr_19881_19994 = state_19876__$1;
(statearr_19881_19994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (5))){
var inst_19860 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19876__$1 = state_19876;
var statearr_19882_19995 = state_19876__$1;
(statearr_19882_19995[(2)] = inst_19860);

(statearr_19882_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (6))){
var inst_19857 = (state_19876[(7)]);
var inst_19862 = (state_19876[(8)]);
var inst_19862__$1 = cljs.core.async.chan.call(null,(1));
var inst_19863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19864 = [inst_19857,inst_19862__$1];
var inst_19865 = (new cljs.core.PersistentVector(null,2,(5),inst_19863,inst_19864,null));
var state_19876__$1 = (function (){var statearr_19883 = state_19876;
(statearr_19883[(8)] = inst_19862__$1);

return statearr_19883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19876__$1,(8),jobs,inst_19865);
} else {
if((state_val_19877 === (7))){
var inst_19872 = (state_19876[(2)]);
var state_19876__$1 = state_19876;
var statearr_19884_19996 = state_19876__$1;
(statearr_19884_19996[(2)] = inst_19872);

(statearr_19884_19996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19877 === (8))){
var inst_19862 = (state_19876[(8)]);
var inst_19867 = (state_19876[(2)]);
var state_19876__$1 = (function (){var statearr_19885 = state_19876;
(statearr_19885[(9)] = inst_19867);

return statearr_19885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19876__$1,(9),results,inst_19862);
} else {
if((state_val_19877 === (9))){
var inst_19869 = (state_19876[(2)]);
var state_19876__$1 = (function (){var statearr_19886 = state_19876;
(statearr_19886[(10)] = inst_19869);

return statearr_19886;
})();
var statearr_19887_19997 = state_19876__$1;
(statearr_19887_19997[(2)] = null);

(statearr_19887_19997[(1)] = (2));


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
});})(c__19415__auto___19991,jobs,results,process,async))
;
return ((function (switch__19303__auto__,c__19415__auto___19991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0 = (function (){
var statearr_19891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__);

(statearr_19891[(1)] = (1));

return statearr_19891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1 = (function (state_19876){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_19876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e19892){if((e19892 instanceof Object)){
var ex__19307__auto__ = e19892;
var statearr_19893_19998 = state_19876;
(statearr_19893_19998[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19999 = state_19876;
state_19876 = G__19999;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = function(state_19876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1.call(this,state_19876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___19991,jobs,results,process,async))
})();
var state__19417__auto__ = (function (){var statearr_19894 = f__19416__auto__.call(null);
(statearr_19894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___19991);

return statearr_19894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___19991,jobs,results,process,async))
);


var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__,jobs,results,process,async){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__,jobs,results,process,async){
return (function (state_19932){
var state_val_19933 = (state_19932[(1)]);
if((state_val_19933 === (7))){
var inst_19928 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
var statearr_19934_20000 = state_19932__$1;
(statearr_19934_20000[(2)] = inst_19928);

(statearr_19934_20000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (20))){
var state_19932__$1 = state_19932;
var statearr_19935_20001 = state_19932__$1;
(statearr_19935_20001[(2)] = null);

(statearr_19935_20001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (1))){
var state_19932__$1 = state_19932;
var statearr_19936_20002 = state_19932__$1;
(statearr_19936_20002[(2)] = null);

(statearr_19936_20002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (4))){
var inst_19897 = (state_19932[(7)]);
var inst_19897__$1 = (state_19932[(2)]);
var inst_19898 = (inst_19897__$1 == null);
var state_19932__$1 = (function (){var statearr_19937 = state_19932;
(statearr_19937[(7)] = inst_19897__$1);

return statearr_19937;
})();
if(cljs.core.truth_(inst_19898)){
var statearr_19938_20003 = state_19932__$1;
(statearr_19938_20003[(1)] = (5));

} else {
var statearr_19939_20004 = state_19932__$1;
(statearr_19939_20004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (15))){
var inst_19910 = (state_19932[(8)]);
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19932__$1,(18),to,inst_19910);
} else {
if((state_val_19933 === (21))){
var inst_19923 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
var statearr_19940_20005 = state_19932__$1;
(statearr_19940_20005[(2)] = inst_19923);

(statearr_19940_20005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (13))){
var inst_19925 = (state_19932[(2)]);
var state_19932__$1 = (function (){var statearr_19941 = state_19932;
(statearr_19941[(9)] = inst_19925);

return statearr_19941;
})();
var statearr_19942_20006 = state_19932__$1;
(statearr_19942_20006[(2)] = null);

(statearr_19942_20006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (6))){
var inst_19897 = (state_19932[(7)]);
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19932__$1,(11),inst_19897);
} else {
if((state_val_19933 === (17))){
var inst_19918 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
if(cljs.core.truth_(inst_19918)){
var statearr_19943_20007 = state_19932__$1;
(statearr_19943_20007[(1)] = (19));

} else {
var statearr_19944_20008 = state_19932__$1;
(statearr_19944_20008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (3))){
var inst_19930 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19932__$1,inst_19930);
} else {
if((state_val_19933 === (12))){
var inst_19907 = (state_19932[(10)]);
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19932__$1,(14),inst_19907);
} else {
if((state_val_19933 === (2))){
var state_19932__$1 = state_19932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19932__$1,(4),results);
} else {
if((state_val_19933 === (19))){
var state_19932__$1 = state_19932;
var statearr_19945_20009 = state_19932__$1;
(statearr_19945_20009[(2)] = null);

(statearr_19945_20009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (11))){
var inst_19907 = (state_19932[(2)]);
var state_19932__$1 = (function (){var statearr_19946 = state_19932;
(statearr_19946[(10)] = inst_19907);

return statearr_19946;
})();
var statearr_19947_20010 = state_19932__$1;
(statearr_19947_20010[(2)] = null);

(statearr_19947_20010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (9))){
var state_19932__$1 = state_19932;
var statearr_19948_20011 = state_19932__$1;
(statearr_19948_20011[(2)] = null);

(statearr_19948_20011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (5))){
var state_19932__$1 = state_19932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19949_20012 = state_19932__$1;
(statearr_19949_20012[(1)] = (8));

} else {
var statearr_19950_20013 = state_19932__$1;
(statearr_19950_20013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (14))){
var inst_19912 = (state_19932[(11)]);
var inst_19910 = (state_19932[(8)]);
var inst_19910__$1 = (state_19932[(2)]);
var inst_19911 = (inst_19910__$1 == null);
var inst_19912__$1 = cljs.core.not.call(null,inst_19911);
var state_19932__$1 = (function (){var statearr_19951 = state_19932;
(statearr_19951[(11)] = inst_19912__$1);

(statearr_19951[(8)] = inst_19910__$1);

return statearr_19951;
})();
if(inst_19912__$1){
var statearr_19952_20014 = state_19932__$1;
(statearr_19952_20014[(1)] = (15));

} else {
var statearr_19953_20015 = state_19932__$1;
(statearr_19953_20015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (16))){
var inst_19912 = (state_19932[(11)]);
var state_19932__$1 = state_19932;
var statearr_19954_20016 = state_19932__$1;
(statearr_19954_20016[(2)] = inst_19912);

(statearr_19954_20016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (10))){
var inst_19904 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
var statearr_19955_20017 = state_19932__$1;
(statearr_19955_20017[(2)] = inst_19904);

(statearr_19955_20017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (18))){
var inst_19915 = (state_19932[(2)]);
var state_19932__$1 = state_19932;
var statearr_19956_20018 = state_19932__$1;
(statearr_19956_20018[(2)] = inst_19915);

(statearr_19956_20018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19933 === (8))){
var inst_19901 = cljs.core.async.close_BANG_.call(null,to);
var state_19932__$1 = state_19932;
var statearr_19957_20019 = state_19932__$1;
(statearr_19957_20019[(2)] = inst_19901);

(statearr_19957_20019[(1)] = (10));


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
});})(c__19415__auto__,jobs,results,process,async))
;
return ((function (switch__19303__auto__,c__19415__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0 = (function (){
var statearr_19961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__);

(statearr_19961[(1)] = (1));

return statearr_19961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1 = (function (state_19932){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_19932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e19962){if((e19962 instanceof Object)){
var ex__19307__auto__ = e19962;
var statearr_19963_20020 = state_19932;
(statearr_19963_20020[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20021 = state_19932;
state_19932 = G__20021;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__ = function(state_19932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1.call(this,state_19932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__,jobs,results,process,async))
})();
var state__19417__auto__ = (function (){var statearr_19964 = f__19416__auto__.call(null);
(statearr_19964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_19964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__,jobs,results,process,async))
);

return c__19415__auto__;
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
var args20022 = [];
var len__17884__auto___20025 = arguments.length;
var i__17885__auto___20026 = (0);
while(true){
if((i__17885__auto___20026 < len__17884__auto___20025)){
args20022.push((arguments[i__17885__auto___20026]));

var G__20027 = (i__17885__auto___20026 + (1));
i__17885__auto___20026 = G__20027;
continue;
} else {
}
break;
}

var G__20024 = args20022.length;
switch (G__20024) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20022.length)].join('')));

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
var args20029 = [];
var len__17884__auto___20032 = arguments.length;
var i__17885__auto___20033 = (0);
while(true){
if((i__17885__auto___20033 < len__17884__auto___20032)){
args20029.push((arguments[i__17885__auto___20033]));

var G__20034 = (i__17885__auto___20033 + (1));
i__17885__auto___20033 = G__20034;
continue;
} else {
}
break;
}

var G__20031 = args20029.length;
switch (G__20031) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20029.length)].join('')));

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
var args20036 = [];
var len__17884__auto___20089 = arguments.length;
var i__17885__auto___20090 = (0);
while(true){
if((i__17885__auto___20090 < len__17884__auto___20089)){
args20036.push((arguments[i__17885__auto___20090]));

var G__20091 = (i__17885__auto___20090 + (1));
i__17885__auto___20090 = G__20091;
continue;
} else {
}
break;
}

var G__20038 = args20036.length;
switch (G__20038) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20036.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19415__auto___20093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___20093,tc,fc){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___20093,tc,fc){
return (function (state_20064){
var state_val_20065 = (state_20064[(1)]);
if((state_val_20065 === (7))){
var inst_20060 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
var statearr_20066_20094 = state_20064__$1;
(statearr_20066_20094[(2)] = inst_20060);

(statearr_20066_20094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (1))){
var state_20064__$1 = state_20064;
var statearr_20067_20095 = state_20064__$1;
(statearr_20067_20095[(2)] = null);

(statearr_20067_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (4))){
var inst_20041 = (state_20064[(7)]);
var inst_20041__$1 = (state_20064[(2)]);
var inst_20042 = (inst_20041__$1 == null);
var state_20064__$1 = (function (){var statearr_20068 = state_20064;
(statearr_20068[(7)] = inst_20041__$1);

return statearr_20068;
})();
if(cljs.core.truth_(inst_20042)){
var statearr_20069_20096 = state_20064__$1;
(statearr_20069_20096[(1)] = (5));

} else {
var statearr_20070_20097 = state_20064__$1;
(statearr_20070_20097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (13))){
var state_20064__$1 = state_20064;
var statearr_20071_20098 = state_20064__$1;
(statearr_20071_20098[(2)] = null);

(statearr_20071_20098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (6))){
var inst_20041 = (state_20064[(7)]);
var inst_20047 = p.call(null,inst_20041);
var state_20064__$1 = state_20064;
if(cljs.core.truth_(inst_20047)){
var statearr_20072_20099 = state_20064__$1;
(statearr_20072_20099[(1)] = (9));

} else {
var statearr_20073_20100 = state_20064__$1;
(statearr_20073_20100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (3))){
var inst_20062 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20064__$1,inst_20062);
} else {
if((state_val_20065 === (12))){
var state_20064__$1 = state_20064;
var statearr_20074_20101 = state_20064__$1;
(statearr_20074_20101[(2)] = null);

(statearr_20074_20101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (2))){
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20064__$1,(4),ch);
} else {
if((state_val_20065 === (11))){
var inst_20041 = (state_20064[(7)]);
var inst_20051 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20064__$1,(8),inst_20051,inst_20041);
} else {
if((state_val_20065 === (9))){
var state_20064__$1 = state_20064;
var statearr_20075_20102 = state_20064__$1;
(statearr_20075_20102[(2)] = tc);

(statearr_20075_20102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (5))){
var inst_20044 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20045 = cljs.core.async.close_BANG_.call(null,fc);
var state_20064__$1 = (function (){var statearr_20076 = state_20064;
(statearr_20076[(8)] = inst_20044);

return statearr_20076;
})();
var statearr_20077_20103 = state_20064__$1;
(statearr_20077_20103[(2)] = inst_20045);

(statearr_20077_20103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (14))){
var inst_20058 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
var statearr_20078_20104 = state_20064__$1;
(statearr_20078_20104[(2)] = inst_20058);

(statearr_20078_20104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (10))){
var state_20064__$1 = state_20064;
var statearr_20079_20105 = state_20064__$1;
(statearr_20079_20105[(2)] = fc);

(statearr_20079_20105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (8))){
var inst_20053 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
if(cljs.core.truth_(inst_20053)){
var statearr_20080_20106 = state_20064__$1;
(statearr_20080_20106[(1)] = (12));

} else {
var statearr_20081_20107 = state_20064__$1;
(statearr_20081_20107[(1)] = (13));

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
});})(c__19415__auto___20093,tc,fc))
;
return ((function (switch__19303__auto__,c__19415__auto___20093,tc,fc){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_20085 = [null,null,null,null,null,null,null,null,null];
(statearr_20085[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_20085[(1)] = (1));

return statearr_20085;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_20064){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_20064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e20086){if((e20086 instanceof Object)){
var ex__19307__auto__ = e20086;
var statearr_20087_20108 = state_20064;
(statearr_20087_20108[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20109 = state_20064;
state_20064 = G__20109;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_20064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_20064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___20093,tc,fc))
})();
var state__19417__auto__ = (function (){var statearr_20088 = f__19416__auto__.call(null);
(statearr_20088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___20093);

return statearr_20088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___20093,tc,fc))
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
var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__){
return (function (state_20173){
var state_val_20174 = (state_20173[(1)]);
if((state_val_20174 === (7))){
var inst_20169 = (state_20173[(2)]);
var state_20173__$1 = state_20173;
var statearr_20175_20196 = state_20173__$1;
(statearr_20175_20196[(2)] = inst_20169);

(statearr_20175_20196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (1))){
var inst_20153 = init;
var state_20173__$1 = (function (){var statearr_20176 = state_20173;
(statearr_20176[(7)] = inst_20153);

return statearr_20176;
})();
var statearr_20177_20197 = state_20173__$1;
(statearr_20177_20197[(2)] = null);

(statearr_20177_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (4))){
var inst_20156 = (state_20173[(8)]);
var inst_20156__$1 = (state_20173[(2)]);
var inst_20157 = (inst_20156__$1 == null);
var state_20173__$1 = (function (){var statearr_20178 = state_20173;
(statearr_20178[(8)] = inst_20156__$1);

return statearr_20178;
})();
if(cljs.core.truth_(inst_20157)){
var statearr_20179_20198 = state_20173__$1;
(statearr_20179_20198[(1)] = (5));

} else {
var statearr_20180_20199 = state_20173__$1;
(statearr_20180_20199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (6))){
var inst_20156 = (state_20173[(8)]);
var inst_20153 = (state_20173[(7)]);
var inst_20160 = (state_20173[(9)]);
var inst_20160__$1 = f.call(null,inst_20153,inst_20156);
var inst_20161 = cljs.core.reduced_QMARK_.call(null,inst_20160__$1);
var state_20173__$1 = (function (){var statearr_20181 = state_20173;
(statearr_20181[(9)] = inst_20160__$1);

return statearr_20181;
})();
if(inst_20161){
var statearr_20182_20200 = state_20173__$1;
(statearr_20182_20200[(1)] = (8));

} else {
var statearr_20183_20201 = state_20173__$1;
(statearr_20183_20201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (3))){
var inst_20171 = (state_20173[(2)]);
var state_20173__$1 = state_20173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20173__$1,inst_20171);
} else {
if((state_val_20174 === (2))){
var state_20173__$1 = state_20173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20173__$1,(4),ch);
} else {
if((state_val_20174 === (9))){
var inst_20160 = (state_20173[(9)]);
var inst_20153 = inst_20160;
var state_20173__$1 = (function (){var statearr_20184 = state_20173;
(statearr_20184[(7)] = inst_20153);

return statearr_20184;
})();
var statearr_20185_20202 = state_20173__$1;
(statearr_20185_20202[(2)] = null);

(statearr_20185_20202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (5))){
var inst_20153 = (state_20173[(7)]);
var state_20173__$1 = state_20173;
var statearr_20186_20203 = state_20173__$1;
(statearr_20186_20203[(2)] = inst_20153);

(statearr_20186_20203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (10))){
var inst_20167 = (state_20173[(2)]);
var state_20173__$1 = state_20173;
var statearr_20187_20204 = state_20173__$1;
(statearr_20187_20204[(2)] = inst_20167);

(statearr_20187_20204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (8))){
var inst_20160 = (state_20173[(9)]);
var inst_20163 = cljs.core.deref.call(null,inst_20160);
var state_20173__$1 = state_20173;
var statearr_20188_20205 = state_20173__$1;
(statearr_20188_20205[(2)] = inst_20163);

(statearr_20188_20205[(1)] = (10));


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
});})(c__19415__auto__))
;
return ((function (switch__19303__auto__,c__19415__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19304__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19304__auto____0 = (function (){
var statearr_20192 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20192[(0)] = cljs$core$async$reduce_$_state_machine__19304__auto__);

(statearr_20192[(1)] = (1));

return statearr_20192;
});
var cljs$core$async$reduce_$_state_machine__19304__auto____1 = (function (state_20173){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_20173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e20193){if((e20193 instanceof Object)){
var ex__19307__auto__ = e20193;
var statearr_20194_20206 = state_20173;
(statearr_20194_20206[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20207 = state_20173;
state_20173 = G__20207;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19304__auto__ = function(state_20173){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19304__auto____1.call(this,state_20173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19304__auto____0;
cljs$core$async$reduce_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19304__auto____1;
return cljs$core$async$reduce_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__))
})();
var state__19417__auto__ = (function (){var statearr_20195 = f__19416__auto__.call(null);
(statearr_20195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_20195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__))
);

return c__19415__auto__;
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
var args20208 = [];
var len__17884__auto___20260 = arguments.length;
var i__17885__auto___20261 = (0);
while(true){
if((i__17885__auto___20261 < len__17884__auto___20260)){
args20208.push((arguments[i__17885__auto___20261]));

var G__20262 = (i__17885__auto___20261 + (1));
i__17885__auto___20261 = G__20262;
continue;
} else {
}
break;
}

var G__20210 = args20208.length;
switch (G__20210) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20208.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__){
return (function (state_20235){
var state_val_20236 = (state_20235[(1)]);
if((state_val_20236 === (7))){
var inst_20217 = (state_20235[(2)]);
var state_20235__$1 = state_20235;
var statearr_20237_20264 = state_20235__$1;
(statearr_20237_20264[(2)] = inst_20217);

(statearr_20237_20264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (1))){
var inst_20211 = cljs.core.seq.call(null,coll);
var inst_20212 = inst_20211;
var state_20235__$1 = (function (){var statearr_20238 = state_20235;
(statearr_20238[(7)] = inst_20212);

return statearr_20238;
})();
var statearr_20239_20265 = state_20235__$1;
(statearr_20239_20265[(2)] = null);

(statearr_20239_20265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (4))){
var inst_20212 = (state_20235[(7)]);
var inst_20215 = cljs.core.first.call(null,inst_20212);
var state_20235__$1 = state_20235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20235__$1,(7),ch,inst_20215);
} else {
if((state_val_20236 === (13))){
var inst_20229 = (state_20235[(2)]);
var state_20235__$1 = state_20235;
var statearr_20240_20266 = state_20235__$1;
(statearr_20240_20266[(2)] = inst_20229);

(statearr_20240_20266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (6))){
var inst_20220 = (state_20235[(2)]);
var state_20235__$1 = state_20235;
if(cljs.core.truth_(inst_20220)){
var statearr_20241_20267 = state_20235__$1;
(statearr_20241_20267[(1)] = (8));

} else {
var statearr_20242_20268 = state_20235__$1;
(statearr_20242_20268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (3))){
var inst_20233 = (state_20235[(2)]);
var state_20235__$1 = state_20235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20235__$1,inst_20233);
} else {
if((state_val_20236 === (12))){
var state_20235__$1 = state_20235;
var statearr_20243_20269 = state_20235__$1;
(statearr_20243_20269[(2)] = null);

(statearr_20243_20269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (2))){
var inst_20212 = (state_20235[(7)]);
var state_20235__$1 = state_20235;
if(cljs.core.truth_(inst_20212)){
var statearr_20244_20270 = state_20235__$1;
(statearr_20244_20270[(1)] = (4));

} else {
var statearr_20245_20271 = state_20235__$1;
(statearr_20245_20271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (11))){
var inst_20226 = cljs.core.async.close_BANG_.call(null,ch);
var state_20235__$1 = state_20235;
var statearr_20246_20272 = state_20235__$1;
(statearr_20246_20272[(2)] = inst_20226);

(statearr_20246_20272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (9))){
var state_20235__$1 = state_20235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20247_20273 = state_20235__$1;
(statearr_20247_20273[(1)] = (11));

} else {
var statearr_20248_20274 = state_20235__$1;
(statearr_20248_20274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (5))){
var inst_20212 = (state_20235[(7)]);
var state_20235__$1 = state_20235;
var statearr_20249_20275 = state_20235__$1;
(statearr_20249_20275[(2)] = inst_20212);

(statearr_20249_20275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (10))){
var inst_20231 = (state_20235[(2)]);
var state_20235__$1 = state_20235;
var statearr_20250_20276 = state_20235__$1;
(statearr_20250_20276[(2)] = inst_20231);

(statearr_20250_20276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20236 === (8))){
var inst_20212 = (state_20235[(7)]);
var inst_20222 = cljs.core.next.call(null,inst_20212);
var inst_20212__$1 = inst_20222;
var state_20235__$1 = (function (){var statearr_20251 = state_20235;
(statearr_20251[(7)] = inst_20212__$1);

return statearr_20251;
})();
var statearr_20252_20277 = state_20235__$1;
(statearr_20252_20277[(2)] = null);

(statearr_20252_20277[(1)] = (2));


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
});})(c__19415__auto__))
;
return ((function (switch__19303__auto__,c__19415__auto__){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_20256 = [null,null,null,null,null,null,null,null];
(statearr_20256[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_20256[(1)] = (1));

return statearr_20256;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_20235){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_20235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e20257){if((e20257 instanceof Object)){
var ex__19307__auto__ = e20257;
var statearr_20258_20278 = state_20235;
(statearr_20258_20278[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20279 = state_20235;
state_20235 = G__20279;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_20235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_20235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__))
})();
var state__19417__auto__ = (function (){var statearr_20259 = f__19416__auto__.call(null);
(statearr_20259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_20259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__))
);

return c__19415__auto__;
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
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20501 = (function (mult,ch,cs,meta20502){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20502 = meta20502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20503,meta20502__$1){
var self__ = this;
var _20503__$1 = this;
return (new cljs.core.async.t_cljs$core$async20501(self__.mult,self__.ch,self__.cs,meta20502__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20503){
var self__ = this;
var _20503__$1 = this;
return self__.meta20502;
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20502","meta20502",-1898063762,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20501";

cljs.core.async.t_cljs$core$async20501.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20501");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20501 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20501(mult__$1,ch__$1,cs__$1,meta20502){
return (new cljs.core.async.t_cljs$core$async20501(mult__$1,ch__$1,cs__$1,meta20502));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20501(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19415__auto___20722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___20722,cs,m,dchan,dctr,done){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___20722,cs,m,dchan,dctr,done){
return (function (state_20634){
var state_val_20635 = (state_20634[(1)]);
if((state_val_20635 === (7))){
var inst_20630 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20636_20723 = state_20634__$1;
(statearr_20636_20723[(2)] = inst_20630);

(statearr_20636_20723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (20))){
var inst_20535 = (state_20634[(7)]);
var inst_20545 = cljs.core.first.call(null,inst_20535);
var inst_20546 = cljs.core.nth.call(null,inst_20545,(0),null);
var inst_20547 = cljs.core.nth.call(null,inst_20545,(1),null);
var state_20634__$1 = (function (){var statearr_20637 = state_20634;
(statearr_20637[(8)] = inst_20546);

return statearr_20637;
})();
if(cljs.core.truth_(inst_20547)){
var statearr_20638_20724 = state_20634__$1;
(statearr_20638_20724[(1)] = (22));

} else {
var statearr_20639_20725 = state_20634__$1;
(statearr_20639_20725[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (27))){
var inst_20582 = (state_20634[(9)]);
var inst_20506 = (state_20634[(10)]);
var inst_20575 = (state_20634[(11)]);
var inst_20577 = (state_20634[(12)]);
var inst_20582__$1 = cljs.core._nth.call(null,inst_20575,inst_20577);
var inst_20583 = cljs.core.async.put_BANG_.call(null,inst_20582__$1,inst_20506,done);
var state_20634__$1 = (function (){var statearr_20640 = state_20634;
(statearr_20640[(9)] = inst_20582__$1);

return statearr_20640;
})();
if(cljs.core.truth_(inst_20583)){
var statearr_20641_20726 = state_20634__$1;
(statearr_20641_20726[(1)] = (30));

} else {
var statearr_20642_20727 = state_20634__$1;
(statearr_20642_20727[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (1))){
var state_20634__$1 = state_20634;
var statearr_20643_20728 = state_20634__$1;
(statearr_20643_20728[(2)] = null);

(statearr_20643_20728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (24))){
var inst_20535 = (state_20634[(7)]);
var inst_20552 = (state_20634[(2)]);
var inst_20553 = cljs.core.next.call(null,inst_20535);
var inst_20515 = inst_20553;
var inst_20516 = null;
var inst_20517 = (0);
var inst_20518 = (0);
var state_20634__$1 = (function (){var statearr_20644 = state_20634;
(statearr_20644[(13)] = inst_20518);

(statearr_20644[(14)] = inst_20515);

(statearr_20644[(15)] = inst_20516);

(statearr_20644[(16)] = inst_20552);

(statearr_20644[(17)] = inst_20517);

return statearr_20644;
})();
var statearr_20645_20729 = state_20634__$1;
(statearr_20645_20729[(2)] = null);

(statearr_20645_20729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (39))){
var state_20634__$1 = state_20634;
var statearr_20649_20730 = state_20634__$1;
(statearr_20649_20730[(2)] = null);

(statearr_20649_20730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (4))){
var inst_20506 = (state_20634[(10)]);
var inst_20506__$1 = (state_20634[(2)]);
var inst_20507 = (inst_20506__$1 == null);
var state_20634__$1 = (function (){var statearr_20650 = state_20634;
(statearr_20650[(10)] = inst_20506__$1);

return statearr_20650;
})();
if(cljs.core.truth_(inst_20507)){
var statearr_20651_20731 = state_20634__$1;
(statearr_20651_20731[(1)] = (5));

} else {
var statearr_20652_20732 = state_20634__$1;
(statearr_20652_20732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (15))){
var inst_20518 = (state_20634[(13)]);
var inst_20515 = (state_20634[(14)]);
var inst_20516 = (state_20634[(15)]);
var inst_20517 = (state_20634[(17)]);
var inst_20531 = (state_20634[(2)]);
var inst_20532 = (inst_20518 + (1));
var tmp20646 = inst_20515;
var tmp20647 = inst_20516;
var tmp20648 = inst_20517;
var inst_20515__$1 = tmp20646;
var inst_20516__$1 = tmp20647;
var inst_20517__$1 = tmp20648;
var inst_20518__$1 = inst_20532;
var state_20634__$1 = (function (){var statearr_20653 = state_20634;
(statearr_20653[(13)] = inst_20518__$1);

(statearr_20653[(14)] = inst_20515__$1);

(statearr_20653[(18)] = inst_20531);

(statearr_20653[(15)] = inst_20516__$1);

(statearr_20653[(17)] = inst_20517__$1);

return statearr_20653;
})();
var statearr_20654_20733 = state_20634__$1;
(statearr_20654_20733[(2)] = null);

(statearr_20654_20733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (21))){
var inst_20556 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20658_20734 = state_20634__$1;
(statearr_20658_20734[(2)] = inst_20556);

(statearr_20658_20734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (31))){
var inst_20582 = (state_20634[(9)]);
var inst_20586 = done.call(null,null);
var inst_20587 = cljs.core.async.untap_STAR_.call(null,m,inst_20582);
var state_20634__$1 = (function (){var statearr_20659 = state_20634;
(statearr_20659[(19)] = inst_20586);

return statearr_20659;
})();
var statearr_20660_20735 = state_20634__$1;
(statearr_20660_20735[(2)] = inst_20587);

(statearr_20660_20735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (32))){
var inst_20574 = (state_20634[(20)]);
var inst_20575 = (state_20634[(11)]);
var inst_20577 = (state_20634[(12)]);
var inst_20576 = (state_20634[(21)]);
var inst_20589 = (state_20634[(2)]);
var inst_20590 = (inst_20577 + (1));
var tmp20655 = inst_20574;
var tmp20656 = inst_20575;
var tmp20657 = inst_20576;
var inst_20574__$1 = tmp20655;
var inst_20575__$1 = tmp20656;
var inst_20576__$1 = tmp20657;
var inst_20577__$1 = inst_20590;
var state_20634__$1 = (function (){var statearr_20661 = state_20634;
(statearr_20661[(20)] = inst_20574__$1);

(statearr_20661[(22)] = inst_20589);

(statearr_20661[(11)] = inst_20575__$1);

(statearr_20661[(12)] = inst_20577__$1);

(statearr_20661[(21)] = inst_20576__$1);

return statearr_20661;
})();
var statearr_20662_20736 = state_20634__$1;
(statearr_20662_20736[(2)] = null);

(statearr_20662_20736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (40))){
var inst_20602 = (state_20634[(23)]);
var inst_20606 = done.call(null,null);
var inst_20607 = cljs.core.async.untap_STAR_.call(null,m,inst_20602);
var state_20634__$1 = (function (){var statearr_20663 = state_20634;
(statearr_20663[(24)] = inst_20606);

return statearr_20663;
})();
var statearr_20664_20737 = state_20634__$1;
(statearr_20664_20737[(2)] = inst_20607);

(statearr_20664_20737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (33))){
var inst_20593 = (state_20634[(25)]);
var inst_20595 = cljs.core.chunked_seq_QMARK_.call(null,inst_20593);
var state_20634__$1 = state_20634;
if(inst_20595){
var statearr_20665_20738 = state_20634__$1;
(statearr_20665_20738[(1)] = (36));

} else {
var statearr_20666_20739 = state_20634__$1;
(statearr_20666_20739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (13))){
var inst_20525 = (state_20634[(26)]);
var inst_20528 = cljs.core.async.close_BANG_.call(null,inst_20525);
var state_20634__$1 = state_20634;
var statearr_20667_20740 = state_20634__$1;
(statearr_20667_20740[(2)] = inst_20528);

(statearr_20667_20740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (22))){
var inst_20546 = (state_20634[(8)]);
var inst_20549 = cljs.core.async.close_BANG_.call(null,inst_20546);
var state_20634__$1 = state_20634;
var statearr_20668_20741 = state_20634__$1;
(statearr_20668_20741[(2)] = inst_20549);

(statearr_20668_20741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (36))){
var inst_20593 = (state_20634[(25)]);
var inst_20597 = cljs.core.chunk_first.call(null,inst_20593);
var inst_20598 = cljs.core.chunk_rest.call(null,inst_20593);
var inst_20599 = cljs.core.count.call(null,inst_20597);
var inst_20574 = inst_20598;
var inst_20575 = inst_20597;
var inst_20576 = inst_20599;
var inst_20577 = (0);
var state_20634__$1 = (function (){var statearr_20669 = state_20634;
(statearr_20669[(20)] = inst_20574);

(statearr_20669[(11)] = inst_20575);

(statearr_20669[(12)] = inst_20577);

(statearr_20669[(21)] = inst_20576);

return statearr_20669;
})();
var statearr_20670_20742 = state_20634__$1;
(statearr_20670_20742[(2)] = null);

(statearr_20670_20742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (41))){
var inst_20593 = (state_20634[(25)]);
var inst_20609 = (state_20634[(2)]);
var inst_20610 = cljs.core.next.call(null,inst_20593);
var inst_20574 = inst_20610;
var inst_20575 = null;
var inst_20576 = (0);
var inst_20577 = (0);
var state_20634__$1 = (function (){var statearr_20671 = state_20634;
(statearr_20671[(20)] = inst_20574);

(statearr_20671[(11)] = inst_20575);

(statearr_20671[(27)] = inst_20609);

(statearr_20671[(12)] = inst_20577);

(statearr_20671[(21)] = inst_20576);

return statearr_20671;
})();
var statearr_20672_20743 = state_20634__$1;
(statearr_20672_20743[(2)] = null);

(statearr_20672_20743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (43))){
var state_20634__$1 = state_20634;
var statearr_20673_20744 = state_20634__$1;
(statearr_20673_20744[(2)] = null);

(statearr_20673_20744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (29))){
var inst_20618 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20674_20745 = state_20634__$1;
(statearr_20674_20745[(2)] = inst_20618);

(statearr_20674_20745[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (44))){
var inst_20627 = (state_20634[(2)]);
var state_20634__$1 = (function (){var statearr_20675 = state_20634;
(statearr_20675[(28)] = inst_20627);

return statearr_20675;
})();
var statearr_20676_20746 = state_20634__$1;
(statearr_20676_20746[(2)] = null);

(statearr_20676_20746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (6))){
var inst_20566 = (state_20634[(29)]);
var inst_20565 = cljs.core.deref.call(null,cs);
var inst_20566__$1 = cljs.core.keys.call(null,inst_20565);
var inst_20567 = cljs.core.count.call(null,inst_20566__$1);
var inst_20568 = cljs.core.reset_BANG_.call(null,dctr,inst_20567);
var inst_20573 = cljs.core.seq.call(null,inst_20566__$1);
var inst_20574 = inst_20573;
var inst_20575 = null;
var inst_20576 = (0);
var inst_20577 = (0);
var state_20634__$1 = (function (){var statearr_20677 = state_20634;
(statearr_20677[(20)] = inst_20574);

(statearr_20677[(29)] = inst_20566__$1);

(statearr_20677[(11)] = inst_20575);

(statearr_20677[(30)] = inst_20568);

(statearr_20677[(12)] = inst_20577);

(statearr_20677[(21)] = inst_20576);

return statearr_20677;
})();
var statearr_20678_20747 = state_20634__$1;
(statearr_20678_20747[(2)] = null);

(statearr_20678_20747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (28))){
var inst_20574 = (state_20634[(20)]);
var inst_20593 = (state_20634[(25)]);
var inst_20593__$1 = cljs.core.seq.call(null,inst_20574);
var state_20634__$1 = (function (){var statearr_20679 = state_20634;
(statearr_20679[(25)] = inst_20593__$1);

return statearr_20679;
})();
if(inst_20593__$1){
var statearr_20680_20748 = state_20634__$1;
(statearr_20680_20748[(1)] = (33));

} else {
var statearr_20681_20749 = state_20634__$1;
(statearr_20681_20749[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (25))){
var inst_20577 = (state_20634[(12)]);
var inst_20576 = (state_20634[(21)]);
var inst_20579 = (inst_20577 < inst_20576);
var inst_20580 = inst_20579;
var state_20634__$1 = state_20634;
if(cljs.core.truth_(inst_20580)){
var statearr_20682_20750 = state_20634__$1;
(statearr_20682_20750[(1)] = (27));

} else {
var statearr_20683_20751 = state_20634__$1;
(statearr_20683_20751[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (34))){
var state_20634__$1 = state_20634;
var statearr_20684_20752 = state_20634__$1;
(statearr_20684_20752[(2)] = null);

(statearr_20684_20752[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (17))){
var state_20634__$1 = state_20634;
var statearr_20685_20753 = state_20634__$1;
(statearr_20685_20753[(2)] = null);

(statearr_20685_20753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (3))){
var inst_20632 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20634__$1,inst_20632);
} else {
if((state_val_20635 === (12))){
var inst_20561 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20686_20754 = state_20634__$1;
(statearr_20686_20754[(2)] = inst_20561);

(statearr_20686_20754[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (2))){
var state_20634__$1 = state_20634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20634__$1,(4),ch);
} else {
if((state_val_20635 === (23))){
var state_20634__$1 = state_20634;
var statearr_20687_20755 = state_20634__$1;
(statearr_20687_20755[(2)] = null);

(statearr_20687_20755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (35))){
var inst_20616 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20688_20756 = state_20634__$1;
(statearr_20688_20756[(2)] = inst_20616);

(statearr_20688_20756[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (19))){
var inst_20535 = (state_20634[(7)]);
var inst_20539 = cljs.core.chunk_first.call(null,inst_20535);
var inst_20540 = cljs.core.chunk_rest.call(null,inst_20535);
var inst_20541 = cljs.core.count.call(null,inst_20539);
var inst_20515 = inst_20540;
var inst_20516 = inst_20539;
var inst_20517 = inst_20541;
var inst_20518 = (0);
var state_20634__$1 = (function (){var statearr_20689 = state_20634;
(statearr_20689[(13)] = inst_20518);

(statearr_20689[(14)] = inst_20515);

(statearr_20689[(15)] = inst_20516);

(statearr_20689[(17)] = inst_20517);

return statearr_20689;
})();
var statearr_20690_20757 = state_20634__$1;
(statearr_20690_20757[(2)] = null);

(statearr_20690_20757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (11))){
var inst_20515 = (state_20634[(14)]);
var inst_20535 = (state_20634[(7)]);
var inst_20535__$1 = cljs.core.seq.call(null,inst_20515);
var state_20634__$1 = (function (){var statearr_20691 = state_20634;
(statearr_20691[(7)] = inst_20535__$1);

return statearr_20691;
})();
if(inst_20535__$1){
var statearr_20692_20758 = state_20634__$1;
(statearr_20692_20758[(1)] = (16));

} else {
var statearr_20693_20759 = state_20634__$1;
(statearr_20693_20759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (9))){
var inst_20563 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20694_20760 = state_20634__$1;
(statearr_20694_20760[(2)] = inst_20563);

(statearr_20694_20760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (5))){
var inst_20513 = cljs.core.deref.call(null,cs);
var inst_20514 = cljs.core.seq.call(null,inst_20513);
var inst_20515 = inst_20514;
var inst_20516 = null;
var inst_20517 = (0);
var inst_20518 = (0);
var state_20634__$1 = (function (){var statearr_20695 = state_20634;
(statearr_20695[(13)] = inst_20518);

(statearr_20695[(14)] = inst_20515);

(statearr_20695[(15)] = inst_20516);

(statearr_20695[(17)] = inst_20517);

return statearr_20695;
})();
var statearr_20696_20761 = state_20634__$1;
(statearr_20696_20761[(2)] = null);

(statearr_20696_20761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (14))){
var state_20634__$1 = state_20634;
var statearr_20697_20762 = state_20634__$1;
(statearr_20697_20762[(2)] = null);

(statearr_20697_20762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (45))){
var inst_20624 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20698_20763 = state_20634__$1;
(statearr_20698_20763[(2)] = inst_20624);

(statearr_20698_20763[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (26))){
var inst_20566 = (state_20634[(29)]);
var inst_20620 = (state_20634[(2)]);
var inst_20621 = cljs.core.seq.call(null,inst_20566);
var state_20634__$1 = (function (){var statearr_20699 = state_20634;
(statearr_20699[(31)] = inst_20620);

return statearr_20699;
})();
if(inst_20621){
var statearr_20700_20764 = state_20634__$1;
(statearr_20700_20764[(1)] = (42));

} else {
var statearr_20701_20765 = state_20634__$1;
(statearr_20701_20765[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (16))){
var inst_20535 = (state_20634[(7)]);
var inst_20537 = cljs.core.chunked_seq_QMARK_.call(null,inst_20535);
var state_20634__$1 = state_20634;
if(inst_20537){
var statearr_20702_20766 = state_20634__$1;
(statearr_20702_20766[(1)] = (19));

} else {
var statearr_20703_20767 = state_20634__$1;
(statearr_20703_20767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (38))){
var inst_20613 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20704_20768 = state_20634__$1;
(statearr_20704_20768[(2)] = inst_20613);

(statearr_20704_20768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (30))){
var state_20634__$1 = state_20634;
var statearr_20705_20769 = state_20634__$1;
(statearr_20705_20769[(2)] = null);

(statearr_20705_20769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (10))){
var inst_20518 = (state_20634[(13)]);
var inst_20516 = (state_20634[(15)]);
var inst_20524 = cljs.core._nth.call(null,inst_20516,inst_20518);
var inst_20525 = cljs.core.nth.call(null,inst_20524,(0),null);
var inst_20526 = cljs.core.nth.call(null,inst_20524,(1),null);
var state_20634__$1 = (function (){var statearr_20706 = state_20634;
(statearr_20706[(26)] = inst_20525);

return statearr_20706;
})();
if(cljs.core.truth_(inst_20526)){
var statearr_20707_20770 = state_20634__$1;
(statearr_20707_20770[(1)] = (13));

} else {
var statearr_20708_20771 = state_20634__$1;
(statearr_20708_20771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (18))){
var inst_20559 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
var statearr_20709_20772 = state_20634__$1;
(statearr_20709_20772[(2)] = inst_20559);

(statearr_20709_20772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (42))){
var state_20634__$1 = state_20634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20634__$1,(45),dchan);
} else {
if((state_val_20635 === (37))){
var inst_20593 = (state_20634[(25)]);
var inst_20506 = (state_20634[(10)]);
var inst_20602 = (state_20634[(23)]);
var inst_20602__$1 = cljs.core.first.call(null,inst_20593);
var inst_20603 = cljs.core.async.put_BANG_.call(null,inst_20602__$1,inst_20506,done);
var state_20634__$1 = (function (){var statearr_20710 = state_20634;
(statearr_20710[(23)] = inst_20602__$1);

return statearr_20710;
})();
if(cljs.core.truth_(inst_20603)){
var statearr_20711_20773 = state_20634__$1;
(statearr_20711_20773[(1)] = (39));

} else {
var statearr_20712_20774 = state_20634__$1;
(statearr_20712_20774[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20635 === (8))){
var inst_20518 = (state_20634[(13)]);
var inst_20517 = (state_20634[(17)]);
var inst_20520 = (inst_20518 < inst_20517);
var inst_20521 = inst_20520;
var state_20634__$1 = state_20634;
if(cljs.core.truth_(inst_20521)){
var statearr_20713_20775 = state_20634__$1;
(statearr_20713_20775[(1)] = (10));

} else {
var statearr_20714_20776 = state_20634__$1;
(statearr_20714_20776[(1)] = (11));

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
});})(c__19415__auto___20722,cs,m,dchan,dctr,done))
;
return ((function (switch__19303__auto__,c__19415__auto___20722,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19304__auto__ = null;
var cljs$core$async$mult_$_state_machine__19304__auto____0 = (function (){
var statearr_20718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20718[(0)] = cljs$core$async$mult_$_state_machine__19304__auto__);

(statearr_20718[(1)] = (1));

return statearr_20718;
});
var cljs$core$async$mult_$_state_machine__19304__auto____1 = (function (state_20634){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_20634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e20719){if((e20719 instanceof Object)){
var ex__19307__auto__ = e20719;
var statearr_20720_20777 = state_20634;
(statearr_20720_20777[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20778 = state_20634;
state_20634 = G__20778;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19304__auto__ = function(state_20634){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19304__auto____1.call(this,state_20634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19304__auto____0;
cljs$core$async$mult_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19304__auto____1;
return cljs$core$async$mult_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___20722,cs,m,dchan,dctr,done))
})();
var state__19417__auto__ = (function (){var statearr_20721 = f__19416__auto__.call(null);
(statearr_20721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___20722);

return statearr_20721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___20722,cs,m,dchan,dctr,done))
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
var args20779 = [];
var len__17884__auto___20782 = arguments.length;
var i__17885__auto___20783 = (0);
while(true){
if((i__17885__auto___20783 < len__17884__auto___20782)){
args20779.push((arguments[i__17885__auto___20783]));

var G__20784 = (i__17885__auto___20783 + (1));
i__17885__auto___20783 = G__20784;
continue;
} else {
}
break;
}

var G__20781 = args20779.length;
switch (G__20781) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20779.length)].join('')));

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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20796 = arguments.length;
var i__17885__auto___20797 = (0);
while(true){
if((i__17885__auto___20797 < len__17884__auto___20796)){
args__17891__auto__.push((arguments[i__17885__auto___20797]));

var G__20798 = (i__17885__auto___20797 + (1));
i__17885__auto___20797 = G__20798;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20790){
var map__20791 = p__20790;
var map__20791__$1 = ((((!((map__20791 == null)))?((((map__20791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20791):map__20791);
var opts = map__20791__$1;
var statearr_20793_20799 = state;
(statearr_20793_20799[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20791,map__20791__$1,opts){
return (function (val){
var statearr_20794_20800 = state;
(statearr_20794_20800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20791,map__20791__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20795_20801 = state;
(statearr_20795_20801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20786){
var G__20787 = cljs.core.first.call(null,seq20786);
var seq20786__$1 = cljs.core.next.call(null,seq20786);
var G__20788 = cljs.core.first.call(null,seq20786__$1);
var seq20786__$2 = cljs.core.next.call(null,seq20786__$1);
var G__20789 = cljs.core.first.call(null,seq20786__$2);
var seq20786__$3 = cljs.core.next.call(null,seq20786__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20787,G__20788,G__20789,seq20786__$3);
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
if(typeof cljs.core.async.t_cljs$core$async20965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20965 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20966){
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
this.meta20966 = meta20966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20967,meta20966__$1){
var self__ = this;
var _20967__$1 = this;
return (new cljs.core.async.t_cljs$core$async20965(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20966__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20967){
var self__ = this;
var _20967__$1 = this;
return self__.meta20966;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20965.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20966","meta20966",-741069151,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20965";

cljs.core.async.t_cljs$core$async20965.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20965");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20965 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20966){
return (new cljs.core.async.t_cljs$core$async20965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20966));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20965(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19415__auto___21128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21065){
var state_val_21066 = (state_21065[(1)]);
if((state_val_21066 === (7))){
var inst_20983 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21067_21129 = state_21065__$1;
(statearr_21067_21129[(2)] = inst_20983);

(statearr_21067_21129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (20))){
var inst_20995 = (state_21065[(7)]);
var state_21065__$1 = state_21065;
var statearr_21068_21130 = state_21065__$1;
(statearr_21068_21130[(2)] = inst_20995);

(statearr_21068_21130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (27))){
var state_21065__$1 = state_21065;
var statearr_21069_21131 = state_21065__$1;
(statearr_21069_21131[(2)] = null);

(statearr_21069_21131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (1))){
var inst_20971 = (state_21065[(8)]);
var inst_20971__$1 = calc_state.call(null);
var inst_20973 = (inst_20971__$1 == null);
var inst_20974 = cljs.core.not.call(null,inst_20973);
var state_21065__$1 = (function (){var statearr_21070 = state_21065;
(statearr_21070[(8)] = inst_20971__$1);

return statearr_21070;
})();
if(inst_20974){
var statearr_21071_21132 = state_21065__$1;
(statearr_21071_21132[(1)] = (2));

} else {
var statearr_21072_21133 = state_21065__$1;
(statearr_21072_21133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (24))){
var inst_21039 = (state_21065[(9)]);
var inst_21025 = (state_21065[(10)]);
var inst_21018 = (state_21065[(11)]);
var inst_21039__$1 = inst_21018.call(null,inst_21025);
var state_21065__$1 = (function (){var statearr_21073 = state_21065;
(statearr_21073[(9)] = inst_21039__$1);

return statearr_21073;
})();
if(cljs.core.truth_(inst_21039__$1)){
var statearr_21074_21134 = state_21065__$1;
(statearr_21074_21134[(1)] = (29));

} else {
var statearr_21075_21135 = state_21065__$1;
(statearr_21075_21135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (4))){
var inst_20986 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_20986)){
var statearr_21076_21136 = state_21065__$1;
(statearr_21076_21136[(1)] = (8));

} else {
var statearr_21077_21137 = state_21065__$1;
(statearr_21077_21137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (15))){
var inst_21012 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21012)){
var statearr_21078_21138 = state_21065__$1;
(statearr_21078_21138[(1)] = (19));

} else {
var statearr_21079_21139 = state_21065__$1;
(statearr_21079_21139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (21))){
var inst_21017 = (state_21065[(12)]);
var inst_21017__$1 = (state_21065[(2)]);
var inst_21018 = cljs.core.get.call(null,inst_21017__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21019 = cljs.core.get.call(null,inst_21017__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21020 = cljs.core.get.call(null,inst_21017__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21065__$1 = (function (){var statearr_21080 = state_21065;
(statearr_21080[(12)] = inst_21017__$1);

(statearr_21080[(11)] = inst_21018);

(statearr_21080[(13)] = inst_21019);

return statearr_21080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21065__$1,(22),inst_21020);
} else {
if((state_val_21066 === (31))){
var inst_21047 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21047)){
var statearr_21081_21140 = state_21065__$1;
(statearr_21081_21140[(1)] = (32));

} else {
var statearr_21082_21141 = state_21065__$1;
(statearr_21082_21141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (32))){
var inst_21024 = (state_21065[(14)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21065__$1,(35),out,inst_21024);
} else {
if((state_val_21066 === (33))){
var inst_21017 = (state_21065[(12)]);
var inst_20995 = inst_21017;
var state_21065__$1 = (function (){var statearr_21083 = state_21065;
(statearr_21083[(7)] = inst_20995);

return statearr_21083;
})();
var statearr_21084_21142 = state_21065__$1;
(statearr_21084_21142[(2)] = null);

(statearr_21084_21142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (13))){
var inst_20995 = (state_21065[(7)]);
var inst_21002 = inst_20995.cljs$lang$protocol_mask$partition0$;
var inst_21003 = (inst_21002 & (64));
var inst_21004 = inst_20995.cljs$core$ISeq$;
var inst_21005 = (inst_21003) || (inst_21004);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21005)){
var statearr_21085_21143 = state_21065__$1;
(statearr_21085_21143[(1)] = (16));

} else {
var statearr_21086_21144 = state_21065__$1;
(statearr_21086_21144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (22))){
var inst_21024 = (state_21065[(14)]);
var inst_21025 = (state_21065[(10)]);
var inst_21023 = (state_21065[(2)]);
var inst_21024__$1 = cljs.core.nth.call(null,inst_21023,(0),null);
var inst_21025__$1 = cljs.core.nth.call(null,inst_21023,(1),null);
var inst_21026 = (inst_21024__$1 == null);
var inst_21027 = cljs.core._EQ_.call(null,inst_21025__$1,change);
var inst_21028 = (inst_21026) || (inst_21027);
var state_21065__$1 = (function (){var statearr_21087 = state_21065;
(statearr_21087[(14)] = inst_21024__$1);

(statearr_21087[(10)] = inst_21025__$1);

return statearr_21087;
})();
if(cljs.core.truth_(inst_21028)){
var statearr_21088_21145 = state_21065__$1;
(statearr_21088_21145[(1)] = (23));

} else {
var statearr_21089_21146 = state_21065__$1;
(statearr_21089_21146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (36))){
var inst_21017 = (state_21065[(12)]);
var inst_20995 = inst_21017;
var state_21065__$1 = (function (){var statearr_21090 = state_21065;
(statearr_21090[(7)] = inst_20995);

return statearr_21090;
})();
var statearr_21091_21147 = state_21065__$1;
(statearr_21091_21147[(2)] = null);

(statearr_21091_21147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (29))){
var inst_21039 = (state_21065[(9)]);
var state_21065__$1 = state_21065;
var statearr_21092_21148 = state_21065__$1;
(statearr_21092_21148[(2)] = inst_21039);

(statearr_21092_21148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (6))){
var state_21065__$1 = state_21065;
var statearr_21093_21149 = state_21065__$1;
(statearr_21093_21149[(2)] = false);

(statearr_21093_21149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (28))){
var inst_21035 = (state_21065[(2)]);
var inst_21036 = calc_state.call(null);
var inst_20995 = inst_21036;
var state_21065__$1 = (function (){var statearr_21094 = state_21065;
(statearr_21094[(15)] = inst_21035);

(statearr_21094[(7)] = inst_20995);

return statearr_21094;
})();
var statearr_21095_21150 = state_21065__$1;
(statearr_21095_21150[(2)] = null);

(statearr_21095_21150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (25))){
var inst_21061 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21096_21151 = state_21065__$1;
(statearr_21096_21151[(2)] = inst_21061);

(statearr_21096_21151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (34))){
var inst_21059 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21097_21152 = state_21065__$1;
(statearr_21097_21152[(2)] = inst_21059);

(statearr_21097_21152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (17))){
var state_21065__$1 = state_21065;
var statearr_21098_21153 = state_21065__$1;
(statearr_21098_21153[(2)] = false);

(statearr_21098_21153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (3))){
var state_21065__$1 = state_21065;
var statearr_21099_21154 = state_21065__$1;
(statearr_21099_21154[(2)] = false);

(statearr_21099_21154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (12))){
var inst_21063 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21065__$1,inst_21063);
} else {
if((state_val_21066 === (2))){
var inst_20971 = (state_21065[(8)]);
var inst_20976 = inst_20971.cljs$lang$protocol_mask$partition0$;
var inst_20977 = (inst_20976 & (64));
var inst_20978 = inst_20971.cljs$core$ISeq$;
var inst_20979 = (inst_20977) || (inst_20978);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_20979)){
var statearr_21100_21155 = state_21065__$1;
(statearr_21100_21155[(1)] = (5));

} else {
var statearr_21101_21156 = state_21065__$1;
(statearr_21101_21156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (23))){
var inst_21024 = (state_21065[(14)]);
var inst_21030 = (inst_21024 == null);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21030)){
var statearr_21102_21157 = state_21065__$1;
(statearr_21102_21157[(1)] = (26));

} else {
var statearr_21103_21158 = state_21065__$1;
(statearr_21103_21158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (35))){
var inst_21050 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21050)){
var statearr_21104_21159 = state_21065__$1;
(statearr_21104_21159[(1)] = (36));

} else {
var statearr_21105_21160 = state_21065__$1;
(statearr_21105_21160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (19))){
var inst_20995 = (state_21065[(7)]);
var inst_21014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20995);
var state_21065__$1 = state_21065;
var statearr_21106_21161 = state_21065__$1;
(statearr_21106_21161[(2)] = inst_21014);

(statearr_21106_21161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (11))){
var inst_20995 = (state_21065[(7)]);
var inst_20999 = (inst_20995 == null);
var inst_21000 = cljs.core.not.call(null,inst_20999);
var state_21065__$1 = state_21065;
if(inst_21000){
var statearr_21107_21162 = state_21065__$1;
(statearr_21107_21162[(1)] = (13));

} else {
var statearr_21108_21163 = state_21065__$1;
(statearr_21108_21163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (9))){
var inst_20971 = (state_21065[(8)]);
var state_21065__$1 = state_21065;
var statearr_21109_21164 = state_21065__$1;
(statearr_21109_21164[(2)] = inst_20971);

(statearr_21109_21164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (5))){
var state_21065__$1 = state_21065;
var statearr_21110_21165 = state_21065__$1;
(statearr_21110_21165[(2)] = true);

(statearr_21110_21165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (14))){
var state_21065__$1 = state_21065;
var statearr_21111_21166 = state_21065__$1;
(statearr_21111_21166[(2)] = false);

(statearr_21111_21166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (26))){
var inst_21025 = (state_21065[(10)]);
var inst_21032 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21025);
var state_21065__$1 = state_21065;
var statearr_21112_21167 = state_21065__$1;
(statearr_21112_21167[(2)] = inst_21032);

(statearr_21112_21167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (16))){
var state_21065__$1 = state_21065;
var statearr_21113_21168 = state_21065__$1;
(statearr_21113_21168[(2)] = true);

(statearr_21113_21168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (38))){
var inst_21055 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21114_21169 = state_21065__$1;
(statearr_21114_21169[(2)] = inst_21055);

(statearr_21114_21169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (30))){
var inst_21025 = (state_21065[(10)]);
var inst_21018 = (state_21065[(11)]);
var inst_21019 = (state_21065[(13)]);
var inst_21042 = cljs.core.empty_QMARK_.call(null,inst_21018);
var inst_21043 = inst_21019.call(null,inst_21025);
var inst_21044 = cljs.core.not.call(null,inst_21043);
var inst_21045 = (inst_21042) && (inst_21044);
var state_21065__$1 = state_21065;
var statearr_21115_21170 = state_21065__$1;
(statearr_21115_21170[(2)] = inst_21045);

(statearr_21115_21170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (10))){
var inst_20971 = (state_21065[(8)]);
var inst_20991 = (state_21065[(2)]);
var inst_20992 = cljs.core.get.call(null,inst_20991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20993 = cljs.core.get.call(null,inst_20991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20994 = cljs.core.get.call(null,inst_20991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20995 = inst_20971;
var state_21065__$1 = (function (){var statearr_21116 = state_21065;
(statearr_21116[(16)] = inst_20994);

(statearr_21116[(7)] = inst_20995);

(statearr_21116[(17)] = inst_20992);

(statearr_21116[(18)] = inst_20993);

return statearr_21116;
})();
var statearr_21117_21171 = state_21065__$1;
(statearr_21117_21171[(2)] = null);

(statearr_21117_21171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (18))){
var inst_21009 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21118_21172 = state_21065__$1;
(statearr_21118_21172[(2)] = inst_21009);

(statearr_21118_21172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (37))){
var state_21065__$1 = state_21065;
var statearr_21119_21173 = state_21065__$1;
(statearr_21119_21173[(2)] = null);

(statearr_21119_21173[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (8))){
var inst_20971 = (state_21065[(8)]);
var inst_20988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20971);
var state_21065__$1 = state_21065;
var statearr_21120_21174 = state_21065__$1;
(statearr_21120_21174[(2)] = inst_20988);

(statearr_21120_21174[(1)] = (10));


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
});})(c__19415__auto___21128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19303__auto__,c__19415__auto___21128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19304__auto__ = null;
var cljs$core$async$mix_$_state_machine__19304__auto____0 = (function (){
var statearr_21124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21124[(0)] = cljs$core$async$mix_$_state_machine__19304__auto__);

(statearr_21124[(1)] = (1));

return statearr_21124;
});
var cljs$core$async$mix_$_state_machine__19304__auto____1 = (function (state_21065){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21125){if((e21125 instanceof Object)){
var ex__19307__auto__ = e21125;
var statearr_21126_21175 = state_21065;
(statearr_21126_21175[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21176 = state_21065;
state_21065 = G__21176;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19304__auto__ = function(state_21065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19304__auto____1.call(this,state_21065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19304__auto____0;
cljs$core$async$mix_$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19304__auto____1;
return cljs$core$async$mix_$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19417__auto__ = (function (){var statearr_21127 = f__19416__auto__.call(null);
(statearr_21127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21128);

return statearr_21127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21177 = [];
var len__17884__auto___21180 = arguments.length;
var i__17885__auto___21181 = (0);
while(true){
if((i__17885__auto___21181 < len__17884__auto___21180)){
args21177.push((arguments[i__17885__auto___21181]));

var G__21182 = (i__17885__auto___21181 + (1));
i__17885__auto___21181 = G__21182;
continue;
} else {
}
break;
}

var G__21179 = args21177.length;
switch (G__21179) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21177.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
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
var args21185 = [];
var len__17884__auto___21310 = arguments.length;
var i__17885__auto___21311 = (0);
while(true){
if((i__17885__auto___21311 < len__17884__auto___21310)){
args21185.push((arguments[i__17885__auto___21311]));

var G__21312 = (i__17885__auto___21311 + (1));
i__17885__auto___21311 = G__21312;
continue;
} else {
}
break;
}

var G__21187 = args21185.length;
switch (G__21187) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21185.length)].join('')));

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
return (function (p1__21184_SHARP_){
if(cljs.core.truth_(p1__21184_SHARP_.call(null,topic))){
return p1__21184_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21184_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21188 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21189){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21189 = meta21189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21190,meta21189__$1){
var self__ = this;
var _21190__$1 = this;
return (new cljs.core.async.t_cljs$core$async21188(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21189__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21190){
var self__ = this;
var _21190__$1 = this;
return self__.meta21189;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21189","meta21189",-2044618485,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21188";

cljs.core.async.t_cljs$core$async21188.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21188");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21188 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21189){
return (new cljs.core.async.t_cljs$core$async21188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21189));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21188(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19415__auto___21314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21314,mults,ensure_mult,p){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21314,mults,ensure_mult,p){
return (function (state_21262){
var state_val_21263 = (state_21262[(1)]);
if((state_val_21263 === (7))){
var inst_21258 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21264_21315 = state_21262__$1;
(statearr_21264_21315[(2)] = inst_21258);

(statearr_21264_21315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (20))){
var state_21262__$1 = state_21262;
var statearr_21265_21316 = state_21262__$1;
(statearr_21265_21316[(2)] = null);

(statearr_21265_21316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (1))){
var state_21262__$1 = state_21262;
var statearr_21266_21317 = state_21262__$1;
(statearr_21266_21317[(2)] = null);

(statearr_21266_21317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (24))){
var inst_21241 = (state_21262[(7)]);
var inst_21250 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21241);
var state_21262__$1 = state_21262;
var statearr_21267_21318 = state_21262__$1;
(statearr_21267_21318[(2)] = inst_21250);

(statearr_21267_21318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (4))){
var inst_21193 = (state_21262[(8)]);
var inst_21193__$1 = (state_21262[(2)]);
var inst_21194 = (inst_21193__$1 == null);
var state_21262__$1 = (function (){var statearr_21268 = state_21262;
(statearr_21268[(8)] = inst_21193__$1);

return statearr_21268;
})();
if(cljs.core.truth_(inst_21194)){
var statearr_21269_21319 = state_21262__$1;
(statearr_21269_21319[(1)] = (5));

} else {
var statearr_21270_21320 = state_21262__$1;
(statearr_21270_21320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (15))){
var inst_21235 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21271_21321 = state_21262__$1;
(statearr_21271_21321[(2)] = inst_21235);

(statearr_21271_21321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (21))){
var inst_21255 = (state_21262[(2)]);
var state_21262__$1 = (function (){var statearr_21272 = state_21262;
(statearr_21272[(9)] = inst_21255);

return statearr_21272;
})();
var statearr_21273_21322 = state_21262__$1;
(statearr_21273_21322[(2)] = null);

(statearr_21273_21322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (13))){
var inst_21217 = (state_21262[(10)]);
var inst_21219 = cljs.core.chunked_seq_QMARK_.call(null,inst_21217);
var state_21262__$1 = state_21262;
if(inst_21219){
var statearr_21274_21323 = state_21262__$1;
(statearr_21274_21323[(1)] = (16));

} else {
var statearr_21275_21324 = state_21262__$1;
(statearr_21275_21324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (22))){
var inst_21247 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
if(cljs.core.truth_(inst_21247)){
var statearr_21276_21325 = state_21262__$1;
(statearr_21276_21325[(1)] = (23));

} else {
var statearr_21277_21326 = state_21262__$1;
(statearr_21277_21326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (6))){
var inst_21241 = (state_21262[(7)]);
var inst_21243 = (state_21262[(11)]);
var inst_21193 = (state_21262[(8)]);
var inst_21241__$1 = topic_fn.call(null,inst_21193);
var inst_21242 = cljs.core.deref.call(null,mults);
var inst_21243__$1 = cljs.core.get.call(null,inst_21242,inst_21241__$1);
var state_21262__$1 = (function (){var statearr_21278 = state_21262;
(statearr_21278[(7)] = inst_21241__$1);

(statearr_21278[(11)] = inst_21243__$1);

return statearr_21278;
})();
if(cljs.core.truth_(inst_21243__$1)){
var statearr_21279_21327 = state_21262__$1;
(statearr_21279_21327[(1)] = (19));

} else {
var statearr_21280_21328 = state_21262__$1;
(statearr_21280_21328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (25))){
var inst_21252 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21281_21329 = state_21262__$1;
(statearr_21281_21329[(2)] = inst_21252);

(statearr_21281_21329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (17))){
var inst_21217 = (state_21262[(10)]);
var inst_21226 = cljs.core.first.call(null,inst_21217);
var inst_21227 = cljs.core.async.muxch_STAR_.call(null,inst_21226);
var inst_21228 = cljs.core.async.close_BANG_.call(null,inst_21227);
var inst_21229 = cljs.core.next.call(null,inst_21217);
var inst_21203 = inst_21229;
var inst_21204 = null;
var inst_21205 = (0);
var inst_21206 = (0);
var state_21262__$1 = (function (){var statearr_21282 = state_21262;
(statearr_21282[(12)] = inst_21205);

(statearr_21282[(13)] = inst_21203);

(statearr_21282[(14)] = inst_21206);

(statearr_21282[(15)] = inst_21228);

(statearr_21282[(16)] = inst_21204);

return statearr_21282;
})();
var statearr_21283_21330 = state_21262__$1;
(statearr_21283_21330[(2)] = null);

(statearr_21283_21330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (3))){
var inst_21260 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21262__$1,inst_21260);
} else {
if((state_val_21263 === (12))){
var inst_21237 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21284_21331 = state_21262__$1;
(statearr_21284_21331[(2)] = inst_21237);

(statearr_21284_21331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (2))){
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21262__$1,(4),ch);
} else {
if((state_val_21263 === (23))){
var state_21262__$1 = state_21262;
var statearr_21285_21332 = state_21262__$1;
(statearr_21285_21332[(2)] = null);

(statearr_21285_21332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (19))){
var inst_21243 = (state_21262[(11)]);
var inst_21193 = (state_21262[(8)]);
var inst_21245 = cljs.core.async.muxch_STAR_.call(null,inst_21243);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21262__$1,(22),inst_21245,inst_21193);
} else {
if((state_val_21263 === (11))){
var inst_21203 = (state_21262[(13)]);
var inst_21217 = (state_21262[(10)]);
var inst_21217__$1 = cljs.core.seq.call(null,inst_21203);
var state_21262__$1 = (function (){var statearr_21286 = state_21262;
(statearr_21286[(10)] = inst_21217__$1);

return statearr_21286;
})();
if(inst_21217__$1){
var statearr_21287_21333 = state_21262__$1;
(statearr_21287_21333[(1)] = (13));

} else {
var statearr_21288_21334 = state_21262__$1;
(statearr_21288_21334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (9))){
var inst_21239 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21289_21335 = state_21262__$1;
(statearr_21289_21335[(2)] = inst_21239);

(statearr_21289_21335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (5))){
var inst_21200 = cljs.core.deref.call(null,mults);
var inst_21201 = cljs.core.vals.call(null,inst_21200);
var inst_21202 = cljs.core.seq.call(null,inst_21201);
var inst_21203 = inst_21202;
var inst_21204 = null;
var inst_21205 = (0);
var inst_21206 = (0);
var state_21262__$1 = (function (){var statearr_21290 = state_21262;
(statearr_21290[(12)] = inst_21205);

(statearr_21290[(13)] = inst_21203);

(statearr_21290[(14)] = inst_21206);

(statearr_21290[(16)] = inst_21204);

return statearr_21290;
})();
var statearr_21291_21336 = state_21262__$1;
(statearr_21291_21336[(2)] = null);

(statearr_21291_21336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (14))){
var state_21262__$1 = state_21262;
var statearr_21295_21337 = state_21262__$1;
(statearr_21295_21337[(2)] = null);

(statearr_21295_21337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (16))){
var inst_21217 = (state_21262[(10)]);
var inst_21221 = cljs.core.chunk_first.call(null,inst_21217);
var inst_21222 = cljs.core.chunk_rest.call(null,inst_21217);
var inst_21223 = cljs.core.count.call(null,inst_21221);
var inst_21203 = inst_21222;
var inst_21204 = inst_21221;
var inst_21205 = inst_21223;
var inst_21206 = (0);
var state_21262__$1 = (function (){var statearr_21296 = state_21262;
(statearr_21296[(12)] = inst_21205);

(statearr_21296[(13)] = inst_21203);

(statearr_21296[(14)] = inst_21206);

(statearr_21296[(16)] = inst_21204);

return statearr_21296;
})();
var statearr_21297_21338 = state_21262__$1;
(statearr_21297_21338[(2)] = null);

(statearr_21297_21338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (10))){
var inst_21205 = (state_21262[(12)]);
var inst_21203 = (state_21262[(13)]);
var inst_21206 = (state_21262[(14)]);
var inst_21204 = (state_21262[(16)]);
var inst_21211 = cljs.core._nth.call(null,inst_21204,inst_21206);
var inst_21212 = cljs.core.async.muxch_STAR_.call(null,inst_21211);
var inst_21213 = cljs.core.async.close_BANG_.call(null,inst_21212);
var inst_21214 = (inst_21206 + (1));
var tmp21292 = inst_21205;
var tmp21293 = inst_21203;
var tmp21294 = inst_21204;
var inst_21203__$1 = tmp21293;
var inst_21204__$1 = tmp21294;
var inst_21205__$1 = tmp21292;
var inst_21206__$1 = inst_21214;
var state_21262__$1 = (function (){var statearr_21298 = state_21262;
(statearr_21298[(17)] = inst_21213);

(statearr_21298[(12)] = inst_21205__$1);

(statearr_21298[(13)] = inst_21203__$1);

(statearr_21298[(14)] = inst_21206__$1);

(statearr_21298[(16)] = inst_21204__$1);

return statearr_21298;
})();
var statearr_21299_21339 = state_21262__$1;
(statearr_21299_21339[(2)] = null);

(statearr_21299_21339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (18))){
var inst_21232 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21300_21340 = state_21262__$1;
(statearr_21300_21340[(2)] = inst_21232);

(statearr_21300_21340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (8))){
var inst_21205 = (state_21262[(12)]);
var inst_21206 = (state_21262[(14)]);
var inst_21208 = (inst_21206 < inst_21205);
var inst_21209 = inst_21208;
var state_21262__$1 = state_21262;
if(cljs.core.truth_(inst_21209)){
var statearr_21301_21341 = state_21262__$1;
(statearr_21301_21341[(1)] = (10));

} else {
var statearr_21302_21342 = state_21262__$1;
(statearr_21302_21342[(1)] = (11));

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
});})(c__19415__auto___21314,mults,ensure_mult,p))
;
return ((function (switch__19303__auto__,c__19415__auto___21314,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_21306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21306[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_21306[(1)] = (1));

return statearr_21306;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_21262){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21307){if((e21307 instanceof Object)){
var ex__19307__auto__ = e21307;
var statearr_21308_21343 = state_21262;
(statearr_21308_21343[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21344 = state_21262;
state_21262 = G__21344;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_21262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_21262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21314,mults,ensure_mult,p))
})();
var state__19417__auto__ = (function (){var statearr_21309 = f__19416__auto__.call(null);
(statearr_21309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21314);

return statearr_21309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21314,mults,ensure_mult,p))
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
var args21345 = [];
var len__17884__auto___21348 = arguments.length;
var i__17885__auto___21349 = (0);
while(true){
if((i__17885__auto___21349 < len__17884__auto___21348)){
args21345.push((arguments[i__17885__auto___21349]));

var G__21350 = (i__17885__auto___21349 + (1));
i__17885__auto___21349 = G__21350;
continue;
} else {
}
break;
}

var G__21347 = args21345.length;
switch (G__21347) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21345.length)].join('')));

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
var args21352 = [];
var len__17884__auto___21355 = arguments.length;
var i__17885__auto___21356 = (0);
while(true){
if((i__17885__auto___21356 < len__17884__auto___21355)){
args21352.push((arguments[i__17885__auto___21356]));

var G__21357 = (i__17885__auto___21356 + (1));
i__17885__auto___21356 = G__21357;
continue;
} else {
}
break;
}

var G__21354 = args21352.length;
switch (G__21354) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21352.length)].join('')));

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
var args21359 = [];
var len__17884__auto___21430 = arguments.length;
var i__17885__auto___21431 = (0);
while(true){
if((i__17885__auto___21431 < len__17884__auto___21430)){
args21359.push((arguments[i__17885__auto___21431]));

var G__21432 = (i__17885__auto___21431 + (1));
i__17885__auto___21431 = G__21432;
continue;
} else {
}
break;
}

var G__21361 = args21359.length;
switch (G__21361) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21359.length)].join('')));

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
var c__19415__auto___21434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21400){
var state_val_21401 = (state_21400[(1)]);
if((state_val_21401 === (7))){
var state_21400__$1 = state_21400;
var statearr_21402_21435 = state_21400__$1;
(statearr_21402_21435[(2)] = null);

(statearr_21402_21435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (1))){
var state_21400__$1 = state_21400;
var statearr_21403_21436 = state_21400__$1;
(statearr_21403_21436[(2)] = null);

(statearr_21403_21436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (4))){
var inst_21364 = (state_21400[(7)]);
var inst_21366 = (inst_21364 < cnt);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21366)){
var statearr_21404_21437 = state_21400__$1;
(statearr_21404_21437[(1)] = (6));

} else {
var statearr_21405_21438 = state_21400__$1;
(statearr_21405_21438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (15))){
var inst_21396 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21406_21439 = state_21400__$1;
(statearr_21406_21439[(2)] = inst_21396);

(statearr_21406_21439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (13))){
var inst_21389 = cljs.core.async.close_BANG_.call(null,out);
var state_21400__$1 = state_21400;
var statearr_21407_21440 = state_21400__$1;
(statearr_21407_21440[(2)] = inst_21389);

(statearr_21407_21440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (6))){
var state_21400__$1 = state_21400;
var statearr_21408_21441 = state_21400__$1;
(statearr_21408_21441[(2)] = null);

(statearr_21408_21441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (3))){
var inst_21398 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21400__$1,inst_21398);
} else {
if((state_val_21401 === (12))){
var inst_21386 = (state_21400[(8)]);
var inst_21386__$1 = (state_21400[(2)]);
var inst_21387 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21386__$1);
var state_21400__$1 = (function (){var statearr_21409 = state_21400;
(statearr_21409[(8)] = inst_21386__$1);

return statearr_21409;
})();
if(cljs.core.truth_(inst_21387)){
var statearr_21410_21442 = state_21400__$1;
(statearr_21410_21442[(1)] = (13));

} else {
var statearr_21411_21443 = state_21400__$1;
(statearr_21411_21443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (2))){
var inst_21363 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21364 = (0);
var state_21400__$1 = (function (){var statearr_21412 = state_21400;
(statearr_21412[(7)] = inst_21364);

(statearr_21412[(9)] = inst_21363);

return statearr_21412;
})();
var statearr_21413_21444 = state_21400__$1;
(statearr_21413_21444[(2)] = null);

(statearr_21413_21444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (11))){
var inst_21364 = (state_21400[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21400,(10),Object,null,(9));
var inst_21373 = chs__$1.call(null,inst_21364);
var inst_21374 = done.call(null,inst_21364);
var inst_21375 = cljs.core.async.take_BANG_.call(null,inst_21373,inst_21374);
var state_21400__$1 = state_21400;
var statearr_21414_21445 = state_21400__$1;
(statearr_21414_21445[(2)] = inst_21375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (9))){
var inst_21364 = (state_21400[(7)]);
var inst_21377 = (state_21400[(2)]);
var inst_21378 = (inst_21364 + (1));
var inst_21364__$1 = inst_21378;
var state_21400__$1 = (function (){var statearr_21415 = state_21400;
(statearr_21415[(7)] = inst_21364__$1);

(statearr_21415[(10)] = inst_21377);

return statearr_21415;
})();
var statearr_21416_21446 = state_21400__$1;
(statearr_21416_21446[(2)] = null);

(statearr_21416_21446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (5))){
var inst_21384 = (state_21400[(2)]);
var state_21400__$1 = (function (){var statearr_21417 = state_21400;
(statearr_21417[(11)] = inst_21384);

return statearr_21417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21400__$1,(12),dchan);
} else {
if((state_val_21401 === (14))){
var inst_21386 = (state_21400[(8)]);
var inst_21391 = cljs.core.apply.call(null,f,inst_21386);
var state_21400__$1 = state_21400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21400__$1,(16),out,inst_21391);
} else {
if((state_val_21401 === (16))){
var inst_21393 = (state_21400[(2)]);
var state_21400__$1 = (function (){var statearr_21418 = state_21400;
(statearr_21418[(12)] = inst_21393);

return statearr_21418;
})();
var statearr_21419_21447 = state_21400__$1;
(statearr_21419_21447[(2)] = null);

(statearr_21419_21447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (10))){
var inst_21368 = (state_21400[(2)]);
var inst_21369 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21400__$1 = (function (){var statearr_21420 = state_21400;
(statearr_21420[(13)] = inst_21368);

return statearr_21420;
})();
var statearr_21421_21448 = state_21400__$1;
(statearr_21421_21448[(2)] = inst_21369);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (8))){
var inst_21382 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21422_21449 = state_21400__$1;
(statearr_21422_21449[(2)] = inst_21382);

(statearr_21422_21449[(1)] = (5));


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
});})(c__19415__auto___21434,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19303__auto__,c__19415__auto___21434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_21426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21426[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_21426[(1)] = (1));

return statearr_21426;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_21400){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21427){if((e21427 instanceof Object)){
var ex__19307__auto__ = e21427;
var statearr_21428_21450 = state_21400;
(statearr_21428_21450[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21451 = state_21400;
state_21400 = G__21451;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_21400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_21400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21434,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19417__auto__ = (function (){var statearr_21429 = f__19416__auto__.call(null);
(statearr_21429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21434);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21434,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21453 = [];
var len__17884__auto___21509 = arguments.length;
var i__17885__auto___21510 = (0);
while(true){
if((i__17885__auto___21510 < len__17884__auto___21509)){
args21453.push((arguments[i__17885__auto___21510]));

var G__21511 = (i__17885__auto___21510 + (1));
i__17885__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var G__21455 = args21453.length;
switch (G__21455) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21453.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19415__auto___21513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21513,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21513,out){
return (function (state_21485){
var state_val_21486 = (state_21485[(1)]);
if((state_val_21486 === (7))){
var inst_21465 = (state_21485[(7)]);
var inst_21464 = (state_21485[(8)]);
var inst_21464__$1 = (state_21485[(2)]);
var inst_21465__$1 = cljs.core.nth.call(null,inst_21464__$1,(0),null);
var inst_21466 = cljs.core.nth.call(null,inst_21464__$1,(1),null);
var inst_21467 = (inst_21465__$1 == null);
var state_21485__$1 = (function (){var statearr_21487 = state_21485;
(statearr_21487[(7)] = inst_21465__$1);

(statearr_21487[(8)] = inst_21464__$1);

(statearr_21487[(9)] = inst_21466);

return statearr_21487;
})();
if(cljs.core.truth_(inst_21467)){
var statearr_21488_21514 = state_21485__$1;
(statearr_21488_21514[(1)] = (8));

} else {
var statearr_21489_21515 = state_21485__$1;
(statearr_21489_21515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (1))){
var inst_21456 = cljs.core.vec.call(null,chs);
var inst_21457 = inst_21456;
var state_21485__$1 = (function (){var statearr_21490 = state_21485;
(statearr_21490[(10)] = inst_21457);

return statearr_21490;
})();
var statearr_21491_21516 = state_21485__$1;
(statearr_21491_21516[(2)] = null);

(statearr_21491_21516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (4))){
var inst_21457 = (state_21485[(10)]);
var state_21485__$1 = state_21485;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21485__$1,(7),inst_21457);
} else {
if((state_val_21486 === (6))){
var inst_21481 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
var statearr_21492_21517 = state_21485__$1;
(statearr_21492_21517[(2)] = inst_21481);

(statearr_21492_21517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (3))){
var inst_21483 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21485__$1,inst_21483);
} else {
if((state_val_21486 === (2))){
var inst_21457 = (state_21485[(10)]);
var inst_21459 = cljs.core.count.call(null,inst_21457);
var inst_21460 = (inst_21459 > (0));
var state_21485__$1 = state_21485;
if(cljs.core.truth_(inst_21460)){
var statearr_21494_21518 = state_21485__$1;
(statearr_21494_21518[(1)] = (4));

} else {
var statearr_21495_21519 = state_21485__$1;
(statearr_21495_21519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (11))){
var inst_21457 = (state_21485[(10)]);
var inst_21474 = (state_21485[(2)]);
var tmp21493 = inst_21457;
var inst_21457__$1 = tmp21493;
var state_21485__$1 = (function (){var statearr_21496 = state_21485;
(statearr_21496[(10)] = inst_21457__$1);

(statearr_21496[(11)] = inst_21474);

return statearr_21496;
})();
var statearr_21497_21520 = state_21485__$1;
(statearr_21497_21520[(2)] = null);

(statearr_21497_21520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (9))){
var inst_21465 = (state_21485[(7)]);
var state_21485__$1 = state_21485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21485__$1,(11),out,inst_21465);
} else {
if((state_val_21486 === (5))){
var inst_21479 = cljs.core.async.close_BANG_.call(null,out);
var state_21485__$1 = state_21485;
var statearr_21498_21521 = state_21485__$1;
(statearr_21498_21521[(2)] = inst_21479);

(statearr_21498_21521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (10))){
var inst_21477 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
var statearr_21499_21522 = state_21485__$1;
(statearr_21499_21522[(2)] = inst_21477);

(statearr_21499_21522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (8))){
var inst_21465 = (state_21485[(7)]);
var inst_21464 = (state_21485[(8)]);
var inst_21457 = (state_21485[(10)]);
var inst_21466 = (state_21485[(9)]);
var inst_21469 = (function (){var cs = inst_21457;
var vec__21462 = inst_21464;
var v = inst_21465;
var c = inst_21466;
return ((function (cs,vec__21462,v,c,inst_21465,inst_21464,inst_21457,inst_21466,state_val_21486,c__19415__auto___21513,out){
return (function (p1__21452_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21452_SHARP_);
});
;})(cs,vec__21462,v,c,inst_21465,inst_21464,inst_21457,inst_21466,state_val_21486,c__19415__auto___21513,out))
})();
var inst_21470 = cljs.core.filterv.call(null,inst_21469,inst_21457);
var inst_21457__$1 = inst_21470;
var state_21485__$1 = (function (){var statearr_21500 = state_21485;
(statearr_21500[(10)] = inst_21457__$1);

return statearr_21500;
})();
var statearr_21501_21523 = state_21485__$1;
(statearr_21501_21523[(2)] = null);

(statearr_21501_21523[(1)] = (2));


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
});})(c__19415__auto___21513,out))
;
return ((function (switch__19303__auto__,c__19415__auto___21513,out){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_21505 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21505[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_21505[(1)] = (1));

return statearr_21505;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_21485){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21506){if((e21506 instanceof Object)){
var ex__19307__auto__ = e21506;
var statearr_21507_21524 = state_21485;
(statearr_21507_21524[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21525 = state_21485;
state_21485 = G__21525;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_21485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_21485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21513,out))
})();
var state__19417__auto__ = (function (){var statearr_21508 = f__19416__auto__.call(null);
(statearr_21508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21513);

return statearr_21508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21513,out))
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
var args21526 = [];
var len__17884__auto___21575 = arguments.length;
var i__17885__auto___21576 = (0);
while(true){
if((i__17885__auto___21576 < len__17884__auto___21575)){
args21526.push((arguments[i__17885__auto___21576]));

var G__21577 = (i__17885__auto___21576 + (1));
i__17885__auto___21576 = G__21577;
continue;
} else {
}
break;
}

var G__21528 = args21526.length;
switch (G__21528) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21526.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19415__auto___21579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21579,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21579,out){
return (function (state_21552){
var state_val_21553 = (state_21552[(1)]);
if((state_val_21553 === (7))){
var inst_21534 = (state_21552[(7)]);
var inst_21534__$1 = (state_21552[(2)]);
var inst_21535 = (inst_21534__$1 == null);
var inst_21536 = cljs.core.not.call(null,inst_21535);
var state_21552__$1 = (function (){var statearr_21554 = state_21552;
(statearr_21554[(7)] = inst_21534__$1);

return statearr_21554;
})();
if(inst_21536){
var statearr_21555_21580 = state_21552__$1;
(statearr_21555_21580[(1)] = (8));

} else {
var statearr_21556_21581 = state_21552__$1;
(statearr_21556_21581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (1))){
var inst_21529 = (0);
var state_21552__$1 = (function (){var statearr_21557 = state_21552;
(statearr_21557[(8)] = inst_21529);

return statearr_21557;
})();
var statearr_21558_21582 = state_21552__$1;
(statearr_21558_21582[(2)] = null);

(statearr_21558_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (4))){
var state_21552__$1 = state_21552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21552__$1,(7),ch);
} else {
if((state_val_21553 === (6))){
var inst_21547 = (state_21552[(2)]);
var state_21552__$1 = state_21552;
var statearr_21559_21583 = state_21552__$1;
(statearr_21559_21583[(2)] = inst_21547);

(statearr_21559_21583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (3))){
var inst_21549 = (state_21552[(2)]);
var inst_21550 = cljs.core.async.close_BANG_.call(null,out);
var state_21552__$1 = (function (){var statearr_21560 = state_21552;
(statearr_21560[(9)] = inst_21549);

return statearr_21560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21552__$1,inst_21550);
} else {
if((state_val_21553 === (2))){
var inst_21529 = (state_21552[(8)]);
var inst_21531 = (inst_21529 < n);
var state_21552__$1 = state_21552;
if(cljs.core.truth_(inst_21531)){
var statearr_21561_21584 = state_21552__$1;
(statearr_21561_21584[(1)] = (4));

} else {
var statearr_21562_21585 = state_21552__$1;
(statearr_21562_21585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (11))){
var inst_21529 = (state_21552[(8)]);
var inst_21539 = (state_21552[(2)]);
var inst_21540 = (inst_21529 + (1));
var inst_21529__$1 = inst_21540;
var state_21552__$1 = (function (){var statearr_21563 = state_21552;
(statearr_21563[(8)] = inst_21529__$1);

(statearr_21563[(10)] = inst_21539);

return statearr_21563;
})();
var statearr_21564_21586 = state_21552__$1;
(statearr_21564_21586[(2)] = null);

(statearr_21564_21586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (9))){
var state_21552__$1 = state_21552;
var statearr_21565_21587 = state_21552__$1;
(statearr_21565_21587[(2)] = null);

(statearr_21565_21587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (5))){
var state_21552__$1 = state_21552;
var statearr_21566_21588 = state_21552__$1;
(statearr_21566_21588[(2)] = null);

(statearr_21566_21588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (10))){
var inst_21544 = (state_21552[(2)]);
var state_21552__$1 = state_21552;
var statearr_21567_21589 = state_21552__$1;
(statearr_21567_21589[(2)] = inst_21544);

(statearr_21567_21589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21553 === (8))){
var inst_21534 = (state_21552[(7)]);
var state_21552__$1 = state_21552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21552__$1,(11),out,inst_21534);
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
});})(c__19415__auto___21579,out))
;
return ((function (switch__19303__auto__,c__19415__auto___21579,out){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_21571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21571[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_21571[(1)] = (1));

return statearr_21571;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_21552){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21572){if((e21572 instanceof Object)){
var ex__19307__auto__ = e21572;
var statearr_21573_21590 = state_21552;
(statearr_21573_21590[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21591 = state_21552;
state_21552 = G__21591;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_21552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_21552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21579,out))
})();
var state__19417__auto__ = (function (){var statearr_21574 = f__19416__auto__.call(null);
(statearr_21574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21579);

return statearr_21574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21579,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21599 = (function (map_LT_,f,ch,meta21600){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21600 = meta21600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21601,meta21600__$1){
var self__ = this;
var _21601__$1 = this;
return (new cljs.core.async.t_cljs$core$async21599(self__.map_LT_,self__.f,self__.ch,meta21600__$1));
});

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21601){
var self__ = this;
var _21601__$1 = this;
return self__.meta21600;
});

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21602 = (function (map_LT_,f,ch,meta21600,_,fn1,meta21603){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21600 = meta21600;
this._ = _;
this.fn1 = fn1;
this.meta21603 = meta21603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21604,meta21603__$1){
var self__ = this;
var _21604__$1 = this;
return (new cljs.core.async.t_cljs$core$async21602(self__.map_LT_,self__.f,self__.ch,self__.meta21600,self__._,self__.fn1,meta21603__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21604){
var self__ = this;
var _21604__$1 = this;
return self__.meta21603;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21602.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21592_SHARP_){
return f1.call(null,(((p1__21592_SHARP_ == null))?null:self__.f.call(null,p1__21592_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21602.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21600","meta21600",-2018322973,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21599","cljs.core.async/t_cljs$core$async21599",-340327738,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21603","meta21603",-2074072668,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21602";

cljs.core.async.t_cljs$core$async21602.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21602");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21602 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21602(map_LT___$1,f__$1,ch__$1,meta21600__$1,___$2,fn1__$1,meta21603){
return (new cljs.core.async.t_cljs$core$async21602(map_LT___$1,f__$1,ch__$1,meta21600__$1,___$2,fn1__$1,meta21603));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21602(self__.map_LT_,self__.f,self__.ch,self__.meta21600,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21600","meta21600",-2018322973,null)], null);
});

cljs.core.async.t_cljs$core$async21599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21599";

cljs.core.async.t_cljs$core$async21599.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21599");
});

cljs.core.async.__GT_t_cljs$core$async21599 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21599(map_LT___$1,f__$1,ch__$1,meta21600){
return (new cljs.core.async.t_cljs$core$async21599(map_LT___$1,f__$1,ch__$1,meta21600));
});

}

return (new cljs.core.async.t_cljs$core$async21599(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21608 = (function (map_GT_,f,ch,meta21609){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21609 = meta21609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21610,meta21609__$1){
var self__ = this;
var _21610__$1 = this;
return (new cljs.core.async.t_cljs$core$async21608(self__.map_GT_,self__.f,self__.ch,meta21609__$1));
});

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21610){
var self__ = this;
var _21610__$1 = this;
return self__.meta21609;
});

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21609","meta21609",1896825225,null)], null);
});

cljs.core.async.t_cljs$core$async21608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21608";

cljs.core.async.t_cljs$core$async21608.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21608");
});

cljs.core.async.__GT_t_cljs$core$async21608 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21608(map_GT___$1,f__$1,ch__$1,meta21609){
return (new cljs.core.async.t_cljs$core$async21608(map_GT___$1,f__$1,ch__$1,meta21609));
});

}

return (new cljs.core.async.t_cljs$core$async21608(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21614 = (function (filter_GT_,p,ch,meta21615){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21615 = meta21615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21616,meta21615__$1){
var self__ = this;
var _21616__$1 = this;
return (new cljs.core.async.t_cljs$core$async21614(self__.filter_GT_,self__.p,self__.ch,meta21615__$1));
});

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21616){
var self__ = this;
var _21616__$1 = this;
return self__.meta21615;
});

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21615","meta21615",-197523873,null)], null);
});

cljs.core.async.t_cljs$core$async21614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21614";

cljs.core.async.t_cljs$core$async21614.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21614");
});

cljs.core.async.__GT_t_cljs$core$async21614 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21614(filter_GT___$1,p__$1,ch__$1,meta21615){
return (new cljs.core.async.t_cljs$core$async21614(filter_GT___$1,p__$1,ch__$1,meta21615));
});

}

return (new cljs.core.async.t_cljs$core$async21614(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21617 = [];
var len__17884__auto___21661 = arguments.length;
var i__17885__auto___21662 = (0);
while(true){
if((i__17885__auto___21662 < len__17884__auto___21661)){
args21617.push((arguments[i__17885__auto___21662]));

var G__21663 = (i__17885__auto___21662 + (1));
i__17885__auto___21662 = G__21663;
continue;
} else {
}
break;
}

var G__21619 = args21617.length;
switch (G__21619) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21617.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19415__auto___21665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21665,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21665,out){
return (function (state_21640){
var state_val_21641 = (state_21640[(1)]);
if((state_val_21641 === (7))){
var inst_21636 = (state_21640[(2)]);
var state_21640__$1 = state_21640;
var statearr_21642_21666 = state_21640__$1;
(statearr_21642_21666[(2)] = inst_21636);

(statearr_21642_21666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (1))){
var state_21640__$1 = state_21640;
var statearr_21643_21667 = state_21640__$1;
(statearr_21643_21667[(2)] = null);

(statearr_21643_21667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (4))){
var inst_21622 = (state_21640[(7)]);
var inst_21622__$1 = (state_21640[(2)]);
var inst_21623 = (inst_21622__$1 == null);
var state_21640__$1 = (function (){var statearr_21644 = state_21640;
(statearr_21644[(7)] = inst_21622__$1);

return statearr_21644;
})();
if(cljs.core.truth_(inst_21623)){
var statearr_21645_21668 = state_21640__$1;
(statearr_21645_21668[(1)] = (5));

} else {
var statearr_21646_21669 = state_21640__$1;
(statearr_21646_21669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (6))){
var inst_21622 = (state_21640[(7)]);
var inst_21627 = p.call(null,inst_21622);
var state_21640__$1 = state_21640;
if(cljs.core.truth_(inst_21627)){
var statearr_21647_21670 = state_21640__$1;
(statearr_21647_21670[(1)] = (8));

} else {
var statearr_21648_21671 = state_21640__$1;
(statearr_21648_21671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (3))){
var inst_21638 = (state_21640[(2)]);
var state_21640__$1 = state_21640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21640__$1,inst_21638);
} else {
if((state_val_21641 === (2))){
var state_21640__$1 = state_21640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21640__$1,(4),ch);
} else {
if((state_val_21641 === (11))){
var inst_21630 = (state_21640[(2)]);
var state_21640__$1 = state_21640;
var statearr_21649_21672 = state_21640__$1;
(statearr_21649_21672[(2)] = inst_21630);

(statearr_21649_21672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (9))){
var state_21640__$1 = state_21640;
var statearr_21650_21673 = state_21640__$1;
(statearr_21650_21673[(2)] = null);

(statearr_21650_21673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (5))){
var inst_21625 = cljs.core.async.close_BANG_.call(null,out);
var state_21640__$1 = state_21640;
var statearr_21651_21674 = state_21640__$1;
(statearr_21651_21674[(2)] = inst_21625);

(statearr_21651_21674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (10))){
var inst_21633 = (state_21640[(2)]);
var state_21640__$1 = (function (){var statearr_21652 = state_21640;
(statearr_21652[(8)] = inst_21633);

return statearr_21652;
})();
var statearr_21653_21675 = state_21640__$1;
(statearr_21653_21675[(2)] = null);

(statearr_21653_21675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21641 === (8))){
var inst_21622 = (state_21640[(7)]);
var state_21640__$1 = state_21640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21640__$1,(11),out,inst_21622);
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
});})(c__19415__auto___21665,out))
;
return ((function (switch__19303__auto__,c__19415__auto___21665,out){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_21657 = [null,null,null,null,null,null,null,null,null];
(statearr_21657[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_21657[(1)] = (1));

return statearr_21657;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_21640){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21658){if((e21658 instanceof Object)){
var ex__19307__auto__ = e21658;
var statearr_21659_21676 = state_21640;
(statearr_21659_21676[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21677 = state_21640;
state_21640 = G__21677;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_21640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_21640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21665,out))
})();
var state__19417__auto__ = (function (){var statearr_21660 = f__19416__auto__.call(null);
(statearr_21660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21665);

return statearr_21660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21665,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21678 = [];
var len__17884__auto___21681 = arguments.length;
var i__17885__auto___21682 = (0);
while(true){
if((i__17885__auto___21682 < len__17884__auto___21681)){
args21678.push((arguments[i__17885__auto___21682]));

var G__21683 = (i__17885__auto___21682 + (1));
i__17885__auto___21682 = G__21683;
continue;
} else {
}
break;
}

var G__21680 = args21678.length;
switch (G__21680) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21678.length)].join('')));

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
var c__19415__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto__){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto__){
return (function (state_21850){
var state_val_21851 = (state_21850[(1)]);
if((state_val_21851 === (7))){
var inst_21846 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21852_21893 = state_21850__$1;
(statearr_21852_21893[(2)] = inst_21846);

(statearr_21852_21893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (20))){
var inst_21816 = (state_21850[(7)]);
var inst_21827 = (state_21850[(2)]);
var inst_21828 = cljs.core.next.call(null,inst_21816);
var inst_21802 = inst_21828;
var inst_21803 = null;
var inst_21804 = (0);
var inst_21805 = (0);
var state_21850__$1 = (function (){var statearr_21853 = state_21850;
(statearr_21853[(8)] = inst_21827);

(statearr_21853[(9)] = inst_21802);

(statearr_21853[(10)] = inst_21805);

(statearr_21853[(11)] = inst_21803);

(statearr_21853[(12)] = inst_21804);

return statearr_21853;
})();
var statearr_21854_21894 = state_21850__$1;
(statearr_21854_21894[(2)] = null);

(statearr_21854_21894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (1))){
var state_21850__$1 = state_21850;
var statearr_21855_21895 = state_21850__$1;
(statearr_21855_21895[(2)] = null);

(statearr_21855_21895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (4))){
var inst_21791 = (state_21850[(13)]);
var inst_21791__$1 = (state_21850[(2)]);
var inst_21792 = (inst_21791__$1 == null);
var state_21850__$1 = (function (){var statearr_21856 = state_21850;
(statearr_21856[(13)] = inst_21791__$1);

return statearr_21856;
})();
if(cljs.core.truth_(inst_21792)){
var statearr_21857_21896 = state_21850__$1;
(statearr_21857_21896[(1)] = (5));

} else {
var statearr_21858_21897 = state_21850__$1;
(statearr_21858_21897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (15))){
var state_21850__$1 = state_21850;
var statearr_21862_21898 = state_21850__$1;
(statearr_21862_21898[(2)] = null);

(statearr_21862_21898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (21))){
var state_21850__$1 = state_21850;
var statearr_21863_21899 = state_21850__$1;
(statearr_21863_21899[(2)] = null);

(statearr_21863_21899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (13))){
var inst_21802 = (state_21850[(9)]);
var inst_21805 = (state_21850[(10)]);
var inst_21803 = (state_21850[(11)]);
var inst_21804 = (state_21850[(12)]);
var inst_21812 = (state_21850[(2)]);
var inst_21813 = (inst_21805 + (1));
var tmp21859 = inst_21802;
var tmp21860 = inst_21803;
var tmp21861 = inst_21804;
var inst_21802__$1 = tmp21859;
var inst_21803__$1 = tmp21860;
var inst_21804__$1 = tmp21861;
var inst_21805__$1 = inst_21813;
var state_21850__$1 = (function (){var statearr_21864 = state_21850;
(statearr_21864[(14)] = inst_21812);

(statearr_21864[(9)] = inst_21802__$1);

(statearr_21864[(10)] = inst_21805__$1);

(statearr_21864[(11)] = inst_21803__$1);

(statearr_21864[(12)] = inst_21804__$1);

return statearr_21864;
})();
var statearr_21865_21900 = state_21850__$1;
(statearr_21865_21900[(2)] = null);

(statearr_21865_21900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (22))){
var state_21850__$1 = state_21850;
var statearr_21866_21901 = state_21850__$1;
(statearr_21866_21901[(2)] = null);

(statearr_21866_21901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (6))){
var inst_21791 = (state_21850[(13)]);
var inst_21800 = f.call(null,inst_21791);
var inst_21801 = cljs.core.seq.call(null,inst_21800);
var inst_21802 = inst_21801;
var inst_21803 = null;
var inst_21804 = (0);
var inst_21805 = (0);
var state_21850__$1 = (function (){var statearr_21867 = state_21850;
(statearr_21867[(9)] = inst_21802);

(statearr_21867[(10)] = inst_21805);

(statearr_21867[(11)] = inst_21803);

(statearr_21867[(12)] = inst_21804);

return statearr_21867;
})();
var statearr_21868_21902 = state_21850__$1;
(statearr_21868_21902[(2)] = null);

(statearr_21868_21902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (17))){
var inst_21816 = (state_21850[(7)]);
var inst_21820 = cljs.core.chunk_first.call(null,inst_21816);
var inst_21821 = cljs.core.chunk_rest.call(null,inst_21816);
var inst_21822 = cljs.core.count.call(null,inst_21820);
var inst_21802 = inst_21821;
var inst_21803 = inst_21820;
var inst_21804 = inst_21822;
var inst_21805 = (0);
var state_21850__$1 = (function (){var statearr_21869 = state_21850;
(statearr_21869[(9)] = inst_21802);

(statearr_21869[(10)] = inst_21805);

(statearr_21869[(11)] = inst_21803);

(statearr_21869[(12)] = inst_21804);

return statearr_21869;
})();
var statearr_21870_21903 = state_21850__$1;
(statearr_21870_21903[(2)] = null);

(statearr_21870_21903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (3))){
var inst_21848 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21850__$1,inst_21848);
} else {
if((state_val_21851 === (12))){
var inst_21836 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21871_21904 = state_21850__$1;
(statearr_21871_21904[(2)] = inst_21836);

(statearr_21871_21904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (2))){
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21850__$1,(4),in$);
} else {
if((state_val_21851 === (23))){
var inst_21844 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21872_21905 = state_21850__$1;
(statearr_21872_21905[(2)] = inst_21844);

(statearr_21872_21905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (19))){
var inst_21831 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21873_21906 = state_21850__$1;
(statearr_21873_21906[(2)] = inst_21831);

(statearr_21873_21906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (11))){
var inst_21816 = (state_21850[(7)]);
var inst_21802 = (state_21850[(9)]);
var inst_21816__$1 = cljs.core.seq.call(null,inst_21802);
var state_21850__$1 = (function (){var statearr_21874 = state_21850;
(statearr_21874[(7)] = inst_21816__$1);

return statearr_21874;
})();
if(inst_21816__$1){
var statearr_21875_21907 = state_21850__$1;
(statearr_21875_21907[(1)] = (14));

} else {
var statearr_21876_21908 = state_21850__$1;
(statearr_21876_21908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (9))){
var inst_21838 = (state_21850[(2)]);
var inst_21839 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21850__$1 = (function (){var statearr_21877 = state_21850;
(statearr_21877[(15)] = inst_21838);

return statearr_21877;
})();
if(cljs.core.truth_(inst_21839)){
var statearr_21878_21909 = state_21850__$1;
(statearr_21878_21909[(1)] = (21));

} else {
var statearr_21879_21910 = state_21850__$1;
(statearr_21879_21910[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (5))){
var inst_21794 = cljs.core.async.close_BANG_.call(null,out);
var state_21850__$1 = state_21850;
var statearr_21880_21911 = state_21850__$1;
(statearr_21880_21911[(2)] = inst_21794);

(statearr_21880_21911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (14))){
var inst_21816 = (state_21850[(7)]);
var inst_21818 = cljs.core.chunked_seq_QMARK_.call(null,inst_21816);
var state_21850__$1 = state_21850;
if(inst_21818){
var statearr_21881_21912 = state_21850__$1;
(statearr_21881_21912[(1)] = (17));

} else {
var statearr_21882_21913 = state_21850__$1;
(statearr_21882_21913[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (16))){
var inst_21834 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21883_21914 = state_21850__$1;
(statearr_21883_21914[(2)] = inst_21834);

(statearr_21883_21914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (10))){
var inst_21805 = (state_21850[(10)]);
var inst_21803 = (state_21850[(11)]);
var inst_21810 = cljs.core._nth.call(null,inst_21803,inst_21805);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21850__$1,(13),out,inst_21810);
} else {
if((state_val_21851 === (18))){
var inst_21816 = (state_21850[(7)]);
var inst_21825 = cljs.core.first.call(null,inst_21816);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21850__$1,(20),out,inst_21825);
} else {
if((state_val_21851 === (8))){
var inst_21805 = (state_21850[(10)]);
var inst_21804 = (state_21850[(12)]);
var inst_21807 = (inst_21805 < inst_21804);
var inst_21808 = inst_21807;
var state_21850__$1 = state_21850;
if(cljs.core.truth_(inst_21808)){
var statearr_21884_21915 = state_21850__$1;
(statearr_21884_21915[(1)] = (10));

} else {
var statearr_21885_21916 = state_21850__$1;
(statearr_21885_21916[(1)] = (11));

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
});})(c__19415__auto__))
;
return ((function (switch__19303__auto__,c__19415__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19304__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19304__auto____0 = (function (){
var statearr_21889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21889[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19304__auto__);

(statearr_21889[(1)] = (1));

return statearr_21889;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19304__auto____1 = (function (state_21850){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21890){if((e21890 instanceof Object)){
var ex__19307__auto__ = e21890;
var statearr_21891_21917 = state_21850;
(statearr_21891_21917[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21918 = state_21850;
state_21850 = G__21918;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19304__auto__ = function(state_21850){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19304__auto____1.call(this,state_21850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19304__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19304__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto__))
})();
var state__19417__auto__ = (function (){var statearr_21892 = f__19416__auto__.call(null);
(statearr_21892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto__);

return statearr_21892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto__))
);

return c__19415__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21919 = [];
var len__17884__auto___21922 = arguments.length;
var i__17885__auto___21923 = (0);
while(true){
if((i__17885__auto___21923 < len__17884__auto___21922)){
args21919.push((arguments[i__17885__auto___21923]));

var G__21924 = (i__17885__auto___21923 + (1));
i__17885__auto___21923 = G__21924;
continue;
} else {
}
break;
}

var G__21921 = args21919.length;
switch (G__21921) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21919.length)].join('')));

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
var args21926 = [];
var len__17884__auto___21929 = arguments.length;
var i__17885__auto___21930 = (0);
while(true){
if((i__17885__auto___21930 < len__17884__auto___21929)){
args21926.push((arguments[i__17885__auto___21930]));

var G__21931 = (i__17885__auto___21930 + (1));
i__17885__auto___21930 = G__21931;
continue;
} else {
}
break;
}

var G__21928 = args21926.length;
switch (G__21928) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21926.length)].join('')));

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
var args21933 = [];
var len__17884__auto___21984 = arguments.length;
var i__17885__auto___21985 = (0);
while(true){
if((i__17885__auto___21985 < len__17884__auto___21984)){
args21933.push((arguments[i__17885__auto___21985]));

var G__21986 = (i__17885__auto___21985 + (1));
i__17885__auto___21985 = G__21986;
continue;
} else {
}
break;
}

var G__21935 = args21933.length;
switch (G__21935) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21933.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19415__auto___21988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___21988,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___21988,out){
return (function (state_21959){
var state_val_21960 = (state_21959[(1)]);
if((state_val_21960 === (7))){
var inst_21954 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
var statearr_21961_21989 = state_21959__$1;
(statearr_21961_21989[(2)] = inst_21954);

(statearr_21961_21989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (1))){
var inst_21936 = null;
var state_21959__$1 = (function (){var statearr_21962 = state_21959;
(statearr_21962[(7)] = inst_21936);

return statearr_21962;
})();
var statearr_21963_21990 = state_21959__$1;
(statearr_21963_21990[(2)] = null);

(statearr_21963_21990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (4))){
var inst_21939 = (state_21959[(8)]);
var inst_21939__$1 = (state_21959[(2)]);
var inst_21940 = (inst_21939__$1 == null);
var inst_21941 = cljs.core.not.call(null,inst_21940);
var state_21959__$1 = (function (){var statearr_21964 = state_21959;
(statearr_21964[(8)] = inst_21939__$1);

return statearr_21964;
})();
if(inst_21941){
var statearr_21965_21991 = state_21959__$1;
(statearr_21965_21991[(1)] = (5));

} else {
var statearr_21966_21992 = state_21959__$1;
(statearr_21966_21992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (6))){
var state_21959__$1 = state_21959;
var statearr_21967_21993 = state_21959__$1;
(statearr_21967_21993[(2)] = null);

(statearr_21967_21993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (3))){
var inst_21956 = (state_21959[(2)]);
var inst_21957 = cljs.core.async.close_BANG_.call(null,out);
var state_21959__$1 = (function (){var statearr_21968 = state_21959;
(statearr_21968[(9)] = inst_21956);

return statearr_21968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21959__$1,inst_21957);
} else {
if((state_val_21960 === (2))){
var state_21959__$1 = state_21959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21959__$1,(4),ch);
} else {
if((state_val_21960 === (11))){
var inst_21939 = (state_21959[(8)]);
var inst_21948 = (state_21959[(2)]);
var inst_21936 = inst_21939;
var state_21959__$1 = (function (){var statearr_21969 = state_21959;
(statearr_21969[(10)] = inst_21948);

(statearr_21969[(7)] = inst_21936);

return statearr_21969;
})();
var statearr_21970_21994 = state_21959__$1;
(statearr_21970_21994[(2)] = null);

(statearr_21970_21994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (9))){
var inst_21939 = (state_21959[(8)]);
var state_21959__$1 = state_21959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21959__$1,(11),out,inst_21939);
} else {
if((state_val_21960 === (5))){
var inst_21936 = (state_21959[(7)]);
var inst_21939 = (state_21959[(8)]);
var inst_21943 = cljs.core._EQ_.call(null,inst_21939,inst_21936);
var state_21959__$1 = state_21959;
if(inst_21943){
var statearr_21972_21995 = state_21959__$1;
(statearr_21972_21995[(1)] = (8));

} else {
var statearr_21973_21996 = state_21959__$1;
(statearr_21973_21996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (10))){
var inst_21951 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
var statearr_21974_21997 = state_21959__$1;
(statearr_21974_21997[(2)] = inst_21951);

(statearr_21974_21997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (8))){
var inst_21936 = (state_21959[(7)]);
var tmp21971 = inst_21936;
var inst_21936__$1 = tmp21971;
var state_21959__$1 = (function (){var statearr_21975 = state_21959;
(statearr_21975[(7)] = inst_21936__$1);

return statearr_21975;
})();
var statearr_21976_21998 = state_21959__$1;
(statearr_21976_21998[(2)] = null);

(statearr_21976_21998[(1)] = (2));


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
});})(c__19415__auto___21988,out))
;
return ((function (switch__19303__auto__,c__19415__auto___21988,out){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_21980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21980[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_21980[(1)] = (1));

return statearr_21980;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_21959){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_21959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e21981){if((e21981 instanceof Object)){
var ex__19307__auto__ = e21981;
var statearr_21982_21999 = state_21959;
(statearr_21982_21999[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22000 = state_21959;
state_21959 = G__22000;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_21959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_21959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___21988,out))
})();
var state__19417__auto__ = (function (){var statearr_21983 = f__19416__auto__.call(null);
(statearr_21983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___21988);

return statearr_21983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___21988,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22001 = [];
var len__17884__auto___22071 = arguments.length;
var i__17885__auto___22072 = (0);
while(true){
if((i__17885__auto___22072 < len__17884__auto___22071)){
args22001.push((arguments[i__17885__auto___22072]));

var G__22073 = (i__17885__auto___22072 + (1));
i__17885__auto___22072 = G__22073;
continue;
} else {
}
break;
}

var G__22003 = args22001.length;
switch (G__22003) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22001.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19415__auto___22075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___22075,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___22075,out){
return (function (state_22041){
var state_val_22042 = (state_22041[(1)]);
if((state_val_22042 === (7))){
var inst_22037 = (state_22041[(2)]);
var state_22041__$1 = state_22041;
var statearr_22043_22076 = state_22041__$1;
(statearr_22043_22076[(2)] = inst_22037);

(statearr_22043_22076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (1))){
var inst_22004 = (new Array(n));
var inst_22005 = inst_22004;
var inst_22006 = (0);
var state_22041__$1 = (function (){var statearr_22044 = state_22041;
(statearr_22044[(7)] = inst_22006);

(statearr_22044[(8)] = inst_22005);

return statearr_22044;
})();
var statearr_22045_22077 = state_22041__$1;
(statearr_22045_22077[(2)] = null);

(statearr_22045_22077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (4))){
var inst_22009 = (state_22041[(9)]);
var inst_22009__$1 = (state_22041[(2)]);
var inst_22010 = (inst_22009__$1 == null);
var inst_22011 = cljs.core.not.call(null,inst_22010);
var state_22041__$1 = (function (){var statearr_22046 = state_22041;
(statearr_22046[(9)] = inst_22009__$1);

return statearr_22046;
})();
if(inst_22011){
var statearr_22047_22078 = state_22041__$1;
(statearr_22047_22078[(1)] = (5));

} else {
var statearr_22048_22079 = state_22041__$1;
(statearr_22048_22079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (15))){
var inst_22031 = (state_22041[(2)]);
var state_22041__$1 = state_22041;
var statearr_22049_22080 = state_22041__$1;
(statearr_22049_22080[(2)] = inst_22031);

(statearr_22049_22080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (13))){
var state_22041__$1 = state_22041;
var statearr_22050_22081 = state_22041__$1;
(statearr_22050_22081[(2)] = null);

(statearr_22050_22081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (6))){
var inst_22006 = (state_22041[(7)]);
var inst_22027 = (inst_22006 > (0));
var state_22041__$1 = state_22041;
if(cljs.core.truth_(inst_22027)){
var statearr_22051_22082 = state_22041__$1;
(statearr_22051_22082[(1)] = (12));

} else {
var statearr_22052_22083 = state_22041__$1;
(statearr_22052_22083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (3))){
var inst_22039 = (state_22041[(2)]);
var state_22041__$1 = state_22041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22041__$1,inst_22039);
} else {
if((state_val_22042 === (12))){
var inst_22005 = (state_22041[(8)]);
var inst_22029 = cljs.core.vec.call(null,inst_22005);
var state_22041__$1 = state_22041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22041__$1,(15),out,inst_22029);
} else {
if((state_val_22042 === (2))){
var state_22041__$1 = state_22041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22041__$1,(4),ch);
} else {
if((state_val_22042 === (11))){
var inst_22021 = (state_22041[(2)]);
var inst_22022 = (new Array(n));
var inst_22005 = inst_22022;
var inst_22006 = (0);
var state_22041__$1 = (function (){var statearr_22053 = state_22041;
(statearr_22053[(7)] = inst_22006);

(statearr_22053[(10)] = inst_22021);

(statearr_22053[(8)] = inst_22005);

return statearr_22053;
})();
var statearr_22054_22084 = state_22041__$1;
(statearr_22054_22084[(2)] = null);

(statearr_22054_22084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (9))){
var inst_22005 = (state_22041[(8)]);
var inst_22019 = cljs.core.vec.call(null,inst_22005);
var state_22041__$1 = state_22041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22041__$1,(11),out,inst_22019);
} else {
if((state_val_22042 === (5))){
var inst_22006 = (state_22041[(7)]);
var inst_22009 = (state_22041[(9)]);
var inst_22005 = (state_22041[(8)]);
var inst_22014 = (state_22041[(11)]);
var inst_22013 = (inst_22005[inst_22006] = inst_22009);
var inst_22014__$1 = (inst_22006 + (1));
var inst_22015 = (inst_22014__$1 < n);
var state_22041__$1 = (function (){var statearr_22055 = state_22041;
(statearr_22055[(12)] = inst_22013);

(statearr_22055[(11)] = inst_22014__$1);

return statearr_22055;
})();
if(cljs.core.truth_(inst_22015)){
var statearr_22056_22085 = state_22041__$1;
(statearr_22056_22085[(1)] = (8));

} else {
var statearr_22057_22086 = state_22041__$1;
(statearr_22057_22086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (14))){
var inst_22034 = (state_22041[(2)]);
var inst_22035 = cljs.core.async.close_BANG_.call(null,out);
var state_22041__$1 = (function (){var statearr_22059 = state_22041;
(statearr_22059[(13)] = inst_22034);

return statearr_22059;
})();
var statearr_22060_22087 = state_22041__$1;
(statearr_22060_22087[(2)] = inst_22035);

(statearr_22060_22087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (10))){
var inst_22025 = (state_22041[(2)]);
var state_22041__$1 = state_22041;
var statearr_22061_22088 = state_22041__$1;
(statearr_22061_22088[(2)] = inst_22025);

(statearr_22061_22088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22042 === (8))){
var inst_22005 = (state_22041[(8)]);
var inst_22014 = (state_22041[(11)]);
var tmp22058 = inst_22005;
var inst_22005__$1 = tmp22058;
var inst_22006 = inst_22014;
var state_22041__$1 = (function (){var statearr_22062 = state_22041;
(statearr_22062[(7)] = inst_22006);

(statearr_22062[(8)] = inst_22005__$1);

return statearr_22062;
})();
var statearr_22063_22089 = state_22041__$1;
(statearr_22063_22089[(2)] = null);

(statearr_22063_22089[(1)] = (2));


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
});})(c__19415__auto___22075,out))
;
return ((function (switch__19303__auto__,c__19415__auto___22075,out){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_22067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22067[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_22067[(1)] = (1));

return statearr_22067;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_22041){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_22041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e22068){if((e22068 instanceof Object)){
var ex__19307__auto__ = e22068;
var statearr_22069_22090 = state_22041;
(statearr_22069_22090[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22091 = state_22041;
state_22041 = G__22091;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_22041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_22041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___22075,out))
})();
var state__19417__auto__ = (function (){var statearr_22070 = f__19416__auto__.call(null);
(statearr_22070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___22075);

return statearr_22070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___22075,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22092 = [];
var len__17884__auto___22166 = arguments.length;
var i__17885__auto___22167 = (0);
while(true){
if((i__17885__auto___22167 < len__17884__auto___22166)){
args22092.push((arguments[i__17885__auto___22167]));

var G__22168 = (i__17885__auto___22167 + (1));
i__17885__auto___22167 = G__22168;
continue;
} else {
}
break;
}

var G__22094 = args22092.length;
switch (G__22094) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22092.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19415__auto___22170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19415__auto___22170,out){
return (function (){
var f__19416__auto__ = (function (){var switch__19303__auto__ = ((function (c__19415__auto___22170,out){
return (function (state_22136){
var state_val_22137 = (state_22136[(1)]);
if((state_val_22137 === (7))){
var inst_22132 = (state_22136[(2)]);
var state_22136__$1 = state_22136;
var statearr_22138_22171 = state_22136__$1;
(statearr_22138_22171[(2)] = inst_22132);

(statearr_22138_22171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (1))){
var inst_22095 = [];
var inst_22096 = inst_22095;
var inst_22097 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22136__$1 = (function (){var statearr_22139 = state_22136;
(statearr_22139[(7)] = inst_22096);

(statearr_22139[(8)] = inst_22097);

return statearr_22139;
})();
var statearr_22140_22172 = state_22136__$1;
(statearr_22140_22172[(2)] = null);

(statearr_22140_22172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (4))){
var inst_22100 = (state_22136[(9)]);
var inst_22100__$1 = (state_22136[(2)]);
var inst_22101 = (inst_22100__$1 == null);
var inst_22102 = cljs.core.not.call(null,inst_22101);
var state_22136__$1 = (function (){var statearr_22141 = state_22136;
(statearr_22141[(9)] = inst_22100__$1);

return statearr_22141;
})();
if(inst_22102){
var statearr_22142_22173 = state_22136__$1;
(statearr_22142_22173[(1)] = (5));

} else {
var statearr_22143_22174 = state_22136__$1;
(statearr_22143_22174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (15))){
var inst_22126 = (state_22136[(2)]);
var state_22136__$1 = state_22136;
var statearr_22144_22175 = state_22136__$1;
(statearr_22144_22175[(2)] = inst_22126);

(statearr_22144_22175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (13))){
var state_22136__$1 = state_22136;
var statearr_22145_22176 = state_22136__$1;
(statearr_22145_22176[(2)] = null);

(statearr_22145_22176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (6))){
var inst_22096 = (state_22136[(7)]);
var inst_22121 = inst_22096.length;
var inst_22122 = (inst_22121 > (0));
var state_22136__$1 = state_22136;
if(cljs.core.truth_(inst_22122)){
var statearr_22146_22177 = state_22136__$1;
(statearr_22146_22177[(1)] = (12));

} else {
var statearr_22147_22178 = state_22136__$1;
(statearr_22147_22178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (3))){
var inst_22134 = (state_22136[(2)]);
var state_22136__$1 = state_22136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22136__$1,inst_22134);
} else {
if((state_val_22137 === (12))){
var inst_22096 = (state_22136[(7)]);
var inst_22124 = cljs.core.vec.call(null,inst_22096);
var state_22136__$1 = state_22136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22136__$1,(15),out,inst_22124);
} else {
if((state_val_22137 === (2))){
var state_22136__$1 = state_22136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22136__$1,(4),ch);
} else {
if((state_val_22137 === (11))){
var inst_22104 = (state_22136[(10)]);
var inst_22100 = (state_22136[(9)]);
var inst_22114 = (state_22136[(2)]);
var inst_22115 = [];
var inst_22116 = inst_22115.push(inst_22100);
var inst_22096 = inst_22115;
var inst_22097 = inst_22104;
var state_22136__$1 = (function (){var statearr_22148 = state_22136;
(statearr_22148[(11)] = inst_22116);

(statearr_22148[(7)] = inst_22096);

(statearr_22148[(8)] = inst_22097);

(statearr_22148[(12)] = inst_22114);

return statearr_22148;
})();
var statearr_22149_22179 = state_22136__$1;
(statearr_22149_22179[(2)] = null);

(statearr_22149_22179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (9))){
var inst_22096 = (state_22136[(7)]);
var inst_22112 = cljs.core.vec.call(null,inst_22096);
var state_22136__$1 = state_22136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22136__$1,(11),out,inst_22112);
} else {
if((state_val_22137 === (5))){
var inst_22104 = (state_22136[(10)]);
var inst_22097 = (state_22136[(8)]);
var inst_22100 = (state_22136[(9)]);
var inst_22104__$1 = f.call(null,inst_22100);
var inst_22105 = cljs.core._EQ_.call(null,inst_22104__$1,inst_22097);
var inst_22106 = cljs.core.keyword_identical_QMARK_.call(null,inst_22097,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22107 = (inst_22105) || (inst_22106);
var state_22136__$1 = (function (){var statearr_22150 = state_22136;
(statearr_22150[(10)] = inst_22104__$1);

return statearr_22150;
})();
if(cljs.core.truth_(inst_22107)){
var statearr_22151_22180 = state_22136__$1;
(statearr_22151_22180[(1)] = (8));

} else {
var statearr_22152_22181 = state_22136__$1;
(statearr_22152_22181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (14))){
var inst_22129 = (state_22136[(2)]);
var inst_22130 = cljs.core.async.close_BANG_.call(null,out);
var state_22136__$1 = (function (){var statearr_22154 = state_22136;
(statearr_22154[(13)] = inst_22129);

return statearr_22154;
})();
var statearr_22155_22182 = state_22136__$1;
(statearr_22155_22182[(2)] = inst_22130);

(statearr_22155_22182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (10))){
var inst_22119 = (state_22136[(2)]);
var state_22136__$1 = state_22136;
var statearr_22156_22183 = state_22136__$1;
(statearr_22156_22183[(2)] = inst_22119);

(statearr_22156_22183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (8))){
var inst_22096 = (state_22136[(7)]);
var inst_22104 = (state_22136[(10)]);
var inst_22100 = (state_22136[(9)]);
var inst_22109 = inst_22096.push(inst_22100);
var tmp22153 = inst_22096;
var inst_22096__$1 = tmp22153;
var inst_22097 = inst_22104;
var state_22136__$1 = (function (){var statearr_22157 = state_22136;
(statearr_22157[(7)] = inst_22096__$1);

(statearr_22157[(8)] = inst_22097);

(statearr_22157[(14)] = inst_22109);

return statearr_22157;
})();
var statearr_22158_22184 = state_22136__$1;
(statearr_22158_22184[(2)] = null);

(statearr_22158_22184[(1)] = (2));


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
});})(c__19415__auto___22170,out))
;
return ((function (switch__19303__auto__,c__19415__auto___22170,out){
return (function() {
var cljs$core$async$state_machine__19304__auto__ = null;
var cljs$core$async$state_machine__19304__auto____0 = (function (){
var statearr_22162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22162[(0)] = cljs$core$async$state_machine__19304__auto__);

(statearr_22162[(1)] = (1));

return statearr_22162;
});
var cljs$core$async$state_machine__19304__auto____1 = (function (state_22136){
while(true){
var ret_value__19305__auto__ = (function (){try{while(true){
var result__19306__auto__ = switch__19303__auto__.call(null,state_22136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19306__auto__;
}
break;
}
}catch (e22163){if((e22163 instanceof Object)){
var ex__19307__auto__ = e22163;
var statearr_22164_22185 = state_22136;
(statearr_22164_22185[(5)] = ex__19307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22186 = state_22136;
state_22136 = G__22186;
continue;
} else {
return ret_value__19305__auto__;
}
break;
}
});
cljs$core$async$state_machine__19304__auto__ = function(state_22136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19304__auto____1.call(this,state_22136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19304__auto____0;
cljs$core$async$state_machine__19304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19304__auto____1;
return cljs$core$async$state_machine__19304__auto__;
})()
;})(switch__19303__auto__,c__19415__auto___22170,out))
})();
var state__19417__auto__ = (function (){var statearr_22165 = f__19416__auto__.call(null);
(statearr_22165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19415__auto___22170);

return statearr_22165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19417__auto__);
});})(c__19415__auto___22170,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449829726272