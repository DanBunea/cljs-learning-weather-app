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
var args28959 = [];
var len__17885__auto___28965 = arguments.length;
var i__17886__auto___28966 = (0);
while(true){
if((i__17886__auto___28966 < len__17885__auto___28965)){
args28959.push((arguments[i__17886__auto___28966]));

var G__28967 = (i__17886__auto___28966 + (1));
i__17886__auto___28966 = G__28967;
continue;
} else {
}
break;
}

var G__28961 = args28959.length;
switch (G__28961) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28959.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28962 = (function (f,blockable,meta28963){
this.f = f;
this.blockable = blockable;
this.meta28963 = meta28963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28964,meta28963__$1){
var self__ = this;
var _28964__$1 = this;
return (new cljs.core.async.t_cljs$core$async28962(self__.f,self__.blockable,meta28963__$1));
});

cljs.core.async.t_cljs$core$async28962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28964){
var self__ = this;
var _28964__$1 = this;
return self__.meta28963;
});

cljs.core.async.t_cljs$core$async28962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28963","meta28963",-1090590622,null)], null);
});

cljs.core.async.t_cljs$core$async28962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28962";

cljs.core.async.t_cljs$core$async28962.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async28962");
});

cljs.core.async.__GT_t_cljs$core$async28962 = (function cljs$core$async$__GT_t_cljs$core$async28962(f__$1,blockable__$1,meta28963){
return (new cljs.core.async.t_cljs$core$async28962(f__$1,blockable__$1,meta28963));
});

}

return (new cljs.core.async.t_cljs$core$async28962(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28971 = [];
var len__17885__auto___28974 = arguments.length;
var i__17886__auto___28975 = (0);
while(true){
if((i__17886__auto___28975 < len__17885__auto___28974)){
args28971.push((arguments[i__17886__auto___28975]));

var G__28976 = (i__17886__auto___28975 + (1));
i__17886__auto___28975 = G__28976;
continue;
} else {
}
break;
}

var G__28973 = args28971.length;
switch (G__28973) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28971.length)].join('')));

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
var args28978 = [];
var len__17885__auto___28981 = arguments.length;
var i__17886__auto___28982 = (0);
while(true){
if((i__17886__auto___28982 < len__17885__auto___28981)){
args28978.push((arguments[i__17886__auto___28982]));

var G__28983 = (i__17886__auto___28982 + (1));
i__17886__auto___28982 = G__28983;
continue;
} else {
}
break;
}

var G__28980 = args28978.length;
switch (G__28980) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28978.length)].join('')));

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
var args28985 = [];
var len__17885__auto___28988 = arguments.length;
var i__17886__auto___28989 = (0);
while(true){
if((i__17886__auto___28989 < len__17885__auto___28988)){
args28985.push((arguments[i__17886__auto___28989]));

var G__28990 = (i__17886__auto___28989 + (1));
i__17886__auto___28989 = G__28990;
continue;
} else {
}
break;
}

var G__28987 = args28985.length;
switch (G__28987) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28985.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28992 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28992);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28992,ret){
return (function (){
return fn1.call(null,val_28992);
});})(val_28992,ret))
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
var args28993 = [];
var len__17885__auto___28996 = arguments.length;
var i__17886__auto___28997 = (0);
while(true){
if((i__17886__auto___28997 < len__17885__auto___28996)){
args28993.push((arguments[i__17886__auto___28997]));

var G__28998 = (i__17886__auto___28997 + (1));
i__17886__auto___28997 = G__28998;
continue;
} else {
}
break;
}

var G__28995 = args28993.length;
switch (G__28995) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28993.length)].join('')));

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
var n__17730__auto___29000 = n;
var x_29001 = (0);
while(true){
if((x_29001 < n__17730__auto___29000)){
(a[x_29001] = (0));

var G__29002 = (x_29001 + (1));
x_29001 = G__29002;
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

var G__29003 = (i + (1));
i = G__29003;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29007 = (function (alt_flag,flag,meta29008){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29008 = meta29008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29009,meta29008__$1){
var self__ = this;
var _29009__$1 = this;
return (new cljs.core.async.t_cljs$core$async29007(self__.alt_flag,self__.flag,meta29008__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29009){
var self__ = this;
var _29009__$1 = this;
return self__.meta29008;
});})(flag))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29007.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29008","meta29008",-1954074914,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29007";

cljs.core.async.t_cljs$core$async29007.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async29007");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29007 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29007(alt_flag__$1,flag__$1,meta29008){
return (new cljs.core.async.t_cljs$core$async29007(alt_flag__$1,flag__$1,meta29008));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29007(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29013 = (function (alt_handler,flag,cb,meta29014){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29014 = meta29014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29015,meta29014__$1){
var self__ = this;
var _29015__$1 = this;
return (new cljs.core.async.t_cljs$core$async29013(self__.alt_handler,self__.flag,self__.cb,meta29014__$1));
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29015){
var self__ = this;
var _29015__$1 = this;
return self__.meta29014;
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29014","meta29014",1906307392,null)], null);
});

cljs.core.async.t_cljs$core$async29013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29013";

cljs.core.async.t_cljs$core$async29013.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async29013");
});

cljs.core.async.__GT_t_cljs$core$async29013 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29013(alt_handler__$1,flag__$1,cb__$1,meta29014){
return (new cljs.core.async.t_cljs$core$async29013(alt_handler__$1,flag__$1,cb__$1,meta29014));
});

}

return (new cljs.core.async.t_cljs$core$async29013(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29016_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29016_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29017_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29017_SHARP_,port], null));
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
var G__29018 = (i + (1));
i = G__29018;
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
var len__17885__auto___29024 = arguments.length;
var i__17886__auto___29025 = (0);
while(true){
if((i__17886__auto___29025 < len__17885__auto___29024)){
args__17892__auto__.push((arguments[i__17886__auto___29025]));

var G__29026 = (i__17886__auto___29025 + (1));
i__17886__auto___29025 = G__29026;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((1) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17893__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29021){
var map__29022 = p__29021;
var map__29022__$1 = ((((!((map__29022 == null)))?((((map__29022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29022):map__29022);
var opts = map__29022__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29019){
var G__29020 = cljs.core.first.call(null,seq29019);
var seq29019__$1 = cljs.core.next.call(null,seq29019);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29020,seq29019__$1);
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
var args29027 = [];
var len__17885__auto___29077 = arguments.length;
var i__17886__auto___29078 = (0);
while(true){
if((i__17886__auto___29078 < len__17885__auto___29077)){
args29027.push((arguments[i__17886__auto___29078]));

var G__29079 = (i__17886__auto___29078 + (1));
i__17886__auto___29078 = G__29079;
continue;
} else {
}
break;
}

var G__29029 = args29027.length;
switch (G__29029) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29027.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20078__auto___29081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___29081){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___29081){
return (function (state_29053){
var state_val_29054 = (state_29053[(1)]);
if((state_val_29054 === (7))){
var inst_29049 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29055_29082 = state_29053__$1;
(statearr_29055_29082[(2)] = inst_29049);

(statearr_29055_29082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (1))){
var state_29053__$1 = state_29053;
var statearr_29056_29083 = state_29053__$1;
(statearr_29056_29083[(2)] = null);

(statearr_29056_29083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (4))){
var inst_29032 = (state_29053[(7)]);
var inst_29032__$1 = (state_29053[(2)]);
var inst_29033 = (inst_29032__$1 == null);
var state_29053__$1 = (function (){var statearr_29057 = state_29053;
(statearr_29057[(7)] = inst_29032__$1);

return statearr_29057;
})();
if(cljs.core.truth_(inst_29033)){
var statearr_29058_29084 = state_29053__$1;
(statearr_29058_29084[(1)] = (5));

} else {
var statearr_29059_29085 = state_29053__$1;
(statearr_29059_29085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (13))){
var state_29053__$1 = state_29053;
var statearr_29060_29086 = state_29053__$1;
(statearr_29060_29086[(2)] = null);

(statearr_29060_29086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (6))){
var inst_29032 = (state_29053[(7)]);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29053__$1,(11),to,inst_29032);
} else {
if((state_val_29054 === (3))){
var inst_29051 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29053__$1,inst_29051);
} else {
if((state_val_29054 === (12))){
var state_29053__$1 = state_29053;
var statearr_29061_29087 = state_29053__$1;
(statearr_29061_29087[(2)] = null);

(statearr_29061_29087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (2))){
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(4),from);
} else {
if((state_val_29054 === (11))){
var inst_29042 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29042)){
var statearr_29062_29088 = state_29053__$1;
(statearr_29062_29088[(1)] = (12));

} else {
var statearr_29063_29089 = state_29053__$1;
(statearr_29063_29089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (9))){
var state_29053__$1 = state_29053;
var statearr_29064_29090 = state_29053__$1;
(statearr_29064_29090[(2)] = null);

(statearr_29064_29090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (5))){
var state_29053__$1 = state_29053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29065_29091 = state_29053__$1;
(statearr_29065_29091[(1)] = (8));

} else {
var statearr_29066_29092 = state_29053__$1;
(statearr_29066_29092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (14))){
var inst_29047 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29067_29093 = state_29053__$1;
(statearr_29067_29093[(2)] = inst_29047);

(statearr_29067_29093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (10))){
var inst_29039 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29068_29094 = state_29053__$1;
(statearr_29068_29094[(2)] = inst_29039);

(statearr_29068_29094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (8))){
var inst_29036 = cljs.core.async.close_BANG_.call(null,to);
var state_29053__$1 = state_29053;
var statearr_29069_29095 = state_29053__$1;
(statearr_29069_29095[(2)] = inst_29036);

(statearr_29069_29095[(1)] = (10));


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
});})(c__20078__auto___29081))
;
return ((function (switch__19966__auto__,c__20078__auto___29081){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_29073 = [null,null,null,null,null,null,null,null];
(statearr_29073[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_29073[(1)] = (1));

return statearr_29073;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_29053){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29074){if((e29074 instanceof Object)){
var ex__19970__auto__ = e29074;
var statearr_29075_29096 = state_29053;
(statearr_29075_29096[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29097 = state_29053;
state_29053 = G__29097;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_29053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_29053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___29081))
})();
var state__20080__auto__ = (function (){var statearr_29076 = f__20079__auto__.call(null);
(statearr_29076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___29081);

return statearr_29076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___29081))
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
return (function (p__29281){
var vec__29282 = p__29281;
var v = cljs.core.nth.call(null,vec__29282,(0),null);
var p = cljs.core.nth.call(null,vec__29282,(1),null);
var job = vec__29282;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20078__auto___29464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___29464,res,vec__29282,v,p,job,jobs,results){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___29464,res,vec__29282,v,p,job,jobs,results){
return (function (state_29287){
var state_val_29288 = (state_29287[(1)]);
if((state_val_29288 === (1))){
var state_29287__$1 = state_29287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29287__$1,(2),res,v);
} else {
if((state_val_29288 === (2))){
var inst_29284 = (state_29287[(2)]);
var inst_29285 = cljs.core.async.close_BANG_.call(null,res);
var state_29287__$1 = (function (){var statearr_29289 = state_29287;
(statearr_29289[(7)] = inst_29284);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29287__$1,inst_29285);
} else {
return null;
}
}
});})(c__20078__auto___29464,res,vec__29282,v,p,job,jobs,results))
;
return ((function (switch__19966__auto__,c__20078__auto___29464,res,vec__29282,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_29293 = [null,null,null,null,null,null,null,null];
(statearr_29293[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_29293[(1)] = (1));

return statearr_29293;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_29287){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29294){if((e29294 instanceof Object)){
var ex__19970__auto__ = e29294;
var statearr_29295_29465 = state_29287;
(statearr_29295_29465[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29466 = state_29287;
state_29287 = G__29466;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_29287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_29287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___29464,res,vec__29282,v,p,job,jobs,results))
})();
var state__20080__auto__ = (function (){var statearr_29296 = f__20079__auto__.call(null);
(statearr_29296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___29464);

return statearr_29296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___29464,res,vec__29282,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29297){
var vec__29298 = p__29297;
var v = cljs.core.nth.call(null,vec__29298,(0),null);
var p = cljs.core.nth.call(null,vec__29298,(1),null);
var job = vec__29298;
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
var n__17730__auto___29467 = n;
var __29468 = (0);
while(true){
if((__29468 < n__17730__auto___29467)){
var G__29299_29469 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29299_29469) {
case "compute":
var c__20078__auto___29471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29468,c__20078__auto___29471,G__29299_29469,n__17730__auto___29467,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (__29468,c__20078__auto___29471,G__29299_29469,n__17730__auto___29467,jobs,results,process,async){
return (function (state_29312){
var state_val_29313 = (state_29312[(1)]);
if((state_val_29313 === (1))){
var state_29312__$1 = state_29312;
var statearr_29314_29472 = state_29312__$1;
(statearr_29314_29472[(2)] = null);

(statearr_29314_29472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (2))){
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29312__$1,(4),jobs);
} else {
if((state_val_29313 === (3))){
var inst_29310 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29312__$1,inst_29310);
} else {
if((state_val_29313 === (4))){
var inst_29302 = (state_29312[(2)]);
var inst_29303 = process.call(null,inst_29302);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29303)){
var statearr_29315_29473 = state_29312__$1;
(statearr_29315_29473[(1)] = (5));

} else {
var statearr_29316_29474 = state_29312__$1;
(statearr_29316_29474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (5))){
var state_29312__$1 = state_29312;
var statearr_29317_29475 = state_29312__$1;
(statearr_29317_29475[(2)] = null);

(statearr_29317_29475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (6))){
var state_29312__$1 = state_29312;
var statearr_29318_29476 = state_29312__$1;
(statearr_29318_29476[(2)] = null);

(statearr_29318_29476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (7))){
var inst_29308 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29319_29477 = state_29312__$1;
(statearr_29319_29477[(2)] = inst_29308);

(statearr_29319_29477[(1)] = (3));


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
});})(__29468,c__20078__auto___29471,G__29299_29469,n__17730__auto___29467,jobs,results,process,async))
;
return ((function (__29468,switch__19966__auto__,c__20078__auto___29471,G__29299_29469,n__17730__auto___29467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_29323 = [null,null,null,null,null,null,null];
(statearr_29323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_29323[(1)] = (1));

return statearr_29323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_29312){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29324){if((e29324 instanceof Object)){
var ex__19970__auto__ = e29324;
var statearr_29325_29478 = state_29312;
(statearr_29325_29478[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29479 = state_29312;
state_29312 = G__29479;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_29312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_29312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(__29468,switch__19966__auto__,c__20078__auto___29471,G__29299_29469,n__17730__auto___29467,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_29326 = f__20079__auto__.call(null);
(statearr_29326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___29471);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(__29468,c__20078__auto___29471,G__29299_29469,n__17730__auto___29467,jobs,results,process,async))
);


break;
case "async":
var c__20078__auto___29480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29468,c__20078__auto___29480,G__29299_29469,n__17730__auto___29467,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (__29468,c__20078__auto___29480,G__29299_29469,n__17730__auto___29467,jobs,results,process,async){
return (function (state_29339){
var state_val_29340 = (state_29339[(1)]);
if((state_val_29340 === (1))){
var state_29339__$1 = state_29339;
var statearr_29341_29481 = state_29339__$1;
(statearr_29341_29481[(2)] = null);

(statearr_29341_29481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (2))){
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29339__$1,(4),jobs);
} else {
if((state_val_29340 === (3))){
var inst_29337 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29339__$1,inst_29337);
} else {
if((state_val_29340 === (4))){
var inst_29329 = (state_29339[(2)]);
var inst_29330 = async.call(null,inst_29329);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29330)){
var statearr_29342_29482 = state_29339__$1;
(statearr_29342_29482[(1)] = (5));

} else {
var statearr_29343_29483 = state_29339__$1;
(statearr_29343_29483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (5))){
var state_29339__$1 = state_29339;
var statearr_29344_29484 = state_29339__$1;
(statearr_29344_29484[(2)] = null);

(statearr_29344_29484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (6))){
var state_29339__$1 = state_29339;
var statearr_29345_29485 = state_29339__$1;
(statearr_29345_29485[(2)] = null);

(statearr_29345_29485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (7))){
var inst_29335 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29346_29486 = state_29339__$1;
(statearr_29346_29486[(2)] = inst_29335);

(statearr_29346_29486[(1)] = (3));


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
});})(__29468,c__20078__auto___29480,G__29299_29469,n__17730__auto___29467,jobs,results,process,async))
;
return ((function (__29468,switch__19966__auto__,c__20078__auto___29480,G__29299_29469,n__17730__auto___29467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_29350 = [null,null,null,null,null,null,null];
(statearr_29350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_29350[(1)] = (1));

return statearr_29350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_29339){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29351){if((e29351 instanceof Object)){
var ex__19970__auto__ = e29351;
var statearr_29352_29487 = state_29339;
(statearr_29352_29487[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29488 = state_29339;
state_29339 = G__29488;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_29339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_29339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(__29468,switch__19966__auto__,c__20078__auto___29480,G__29299_29469,n__17730__auto___29467,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_29353 = f__20079__auto__.call(null);
(statearr_29353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___29480);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(__29468,c__20078__auto___29480,G__29299_29469,n__17730__auto___29467,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29489 = (__29468 + (1));
__29468 = G__29489;
continue;
} else {
}
break;
}

var c__20078__auto___29490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___29490,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___29490,jobs,results,process,async){
return (function (state_29375){
var state_val_29376 = (state_29375[(1)]);
if((state_val_29376 === (1))){
var state_29375__$1 = state_29375;
var statearr_29377_29491 = state_29375__$1;
(statearr_29377_29491[(2)] = null);

(statearr_29377_29491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (2))){
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29375__$1,(4),from);
} else {
if((state_val_29376 === (3))){
var inst_29373 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29375__$1,inst_29373);
} else {
if((state_val_29376 === (4))){
var inst_29356 = (state_29375[(7)]);
var inst_29356__$1 = (state_29375[(2)]);
var inst_29357 = (inst_29356__$1 == null);
var state_29375__$1 = (function (){var statearr_29378 = state_29375;
(statearr_29378[(7)] = inst_29356__$1);

return statearr_29378;
})();
if(cljs.core.truth_(inst_29357)){
var statearr_29379_29492 = state_29375__$1;
(statearr_29379_29492[(1)] = (5));

} else {
var statearr_29380_29493 = state_29375__$1;
(statearr_29380_29493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (5))){
var inst_29359 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29375__$1 = state_29375;
var statearr_29381_29494 = state_29375__$1;
(statearr_29381_29494[(2)] = inst_29359);

(statearr_29381_29494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (6))){
var inst_29356 = (state_29375[(7)]);
var inst_29361 = (state_29375[(8)]);
var inst_29361__$1 = cljs.core.async.chan.call(null,(1));
var inst_29362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29363 = [inst_29356,inst_29361__$1];
var inst_29364 = (new cljs.core.PersistentVector(null,2,(5),inst_29362,inst_29363,null));
var state_29375__$1 = (function (){var statearr_29382 = state_29375;
(statearr_29382[(8)] = inst_29361__$1);

return statearr_29382;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29375__$1,(8),jobs,inst_29364);
} else {
if((state_val_29376 === (7))){
var inst_29371 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29383_29495 = state_29375__$1;
(statearr_29383_29495[(2)] = inst_29371);

(statearr_29383_29495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (8))){
var inst_29361 = (state_29375[(8)]);
var inst_29366 = (state_29375[(2)]);
var state_29375__$1 = (function (){var statearr_29384 = state_29375;
(statearr_29384[(9)] = inst_29366);

return statearr_29384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29375__$1,(9),results,inst_29361);
} else {
if((state_val_29376 === (9))){
var inst_29368 = (state_29375[(2)]);
var state_29375__$1 = (function (){var statearr_29385 = state_29375;
(statearr_29385[(10)] = inst_29368);

return statearr_29385;
})();
var statearr_29386_29496 = state_29375__$1;
(statearr_29386_29496[(2)] = null);

(statearr_29386_29496[(1)] = (2));


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
});})(c__20078__auto___29490,jobs,results,process,async))
;
return ((function (switch__19966__auto__,c__20078__auto___29490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0 = (function (){
var statearr_29390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_29390[(1)] = (1));

return statearr_29390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_29375){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29391){if((e29391 instanceof Object)){
var ex__19970__auto__ = e29391;
var statearr_29392_29497 = state_29375;
(statearr_29392_29497[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29498 = state_29375;
state_29375 = G__29498;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_29375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_29375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___29490,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_29393 = f__20079__auto__.call(null);
(statearr_29393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___29490);

return statearr_29393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___29490,jobs,results,process,async))
);


var c__20078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto__,jobs,results,process,async){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto__,jobs,results,process,async){
return (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (7))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29433_29499 = state_29431__$1;
(statearr_29433_29499[(2)] = inst_29427);

(statearr_29433_29499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (20))){
var state_29431__$1 = state_29431;
var statearr_29434_29500 = state_29431__$1;
(statearr_29434_29500[(2)] = null);

(statearr_29434_29500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (1))){
var state_29431__$1 = state_29431;
var statearr_29435_29501 = state_29431__$1;
(statearr_29435_29501[(2)] = null);

(statearr_29435_29501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (4))){
var inst_29396 = (state_29431[(7)]);
var inst_29396__$1 = (state_29431[(2)]);
var inst_29397 = (inst_29396__$1 == null);
var state_29431__$1 = (function (){var statearr_29436 = state_29431;
(statearr_29436[(7)] = inst_29396__$1);

return statearr_29436;
})();
if(cljs.core.truth_(inst_29397)){
var statearr_29437_29502 = state_29431__$1;
(statearr_29437_29502[(1)] = (5));

} else {
var statearr_29438_29503 = state_29431__$1;
(statearr_29438_29503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (15))){
var inst_29409 = (state_29431[(8)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29431__$1,(18),to,inst_29409);
} else {
if((state_val_29432 === (21))){
var inst_29422 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29439_29504 = state_29431__$1;
(statearr_29439_29504[(2)] = inst_29422);

(statearr_29439_29504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (13))){
var inst_29424 = (state_29431[(2)]);
var state_29431__$1 = (function (){var statearr_29440 = state_29431;
(statearr_29440[(9)] = inst_29424);

return statearr_29440;
})();
var statearr_29441_29505 = state_29431__$1;
(statearr_29441_29505[(2)] = null);

(statearr_29441_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (6))){
var inst_29396 = (state_29431[(7)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(11),inst_29396);
} else {
if((state_val_29432 === (17))){
var inst_29417 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29417)){
var statearr_29442_29506 = state_29431__$1;
(statearr_29442_29506[(1)] = (19));

} else {
var statearr_29443_29507 = state_29431__$1;
(statearr_29443_29507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (12))){
var inst_29406 = (state_29431[(10)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(14),inst_29406);
} else {
if((state_val_29432 === (2))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(4),results);
} else {
if((state_val_29432 === (19))){
var state_29431__$1 = state_29431;
var statearr_29444_29508 = state_29431__$1;
(statearr_29444_29508[(2)] = null);

(statearr_29444_29508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (11))){
var inst_29406 = (state_29431[(2)]);
var state_29431__$1 = (function (){var statearr_29445 = state_29431;
(statearr_29445[(10)] = inst_29406);

return statearr_29445;
})();
var statearr_29446_29509 = state_29431__$1;
(statearr_29446_29509[(2)] = null);

(statearr_29446_29509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (9))){
var state_29431__$1 = state_29431;
var statearr_29447_29510 = state_29431__$1;
(statearr_29447_29510[(2)] = null);

(statearr_29447_29510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (5))){
var state_29431__$1 = state_29431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29448_29511 = state_29431__$1;
(statearr_29448_29511[(1)] = (8));

} else {
var statearr_29449_29512 = state_29431__$1;
(statearr_29449_29512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (14))){
var inst_29411 = (state_29431[(11)]);
var inst_29409 = (state_29431[(8)]);
var inst_29409__$1 = (state_29431[(2)]);
var inst_29410 = (inst_29409__$1 == null);
var inst_29411__$1 = cljs.core.not.call(null,inst_29410);
var state_29431__$1 = (function (){var statearr_29450 = state_29431;
(statearr_29450[(11)] = inst_29411__$1);

(statearr_29450[(8)] = inst_29409__$1);

return statearr_29450;
})();
if(inst_29411__$1){
var statearr_29451_29513 = state_29431__$1;
(statearr_29451_29513[(1)] = (15));

} else {
var statearr_29452_29514 = state_29431__$1;
(statearr_29452_29514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (16))){
var inst_29411 = (state_29431[(11)]);
var state_29431__$1 = state_29431;
var statearr_29453_29515 = state_29431__$1;
(statearr_29453_29515[(2)] = inst_29411);

(statearr_29453_29515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (10))){
var inst_29403 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29454_29516 = state_29431__$1;
(statearr_29454_29516[(2)] = inst_29403);

(statearr_29454_29516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (18))){
var inst_29414 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29455_29517 = state_29431__$1;
(statearr_29455_29517[(2)] = inst_29414);

(statearr_29455_29517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (8))){
var inst_29400 = cljs.core.async.close_BANG_.call(null,to);
var state_29431__$1 = state_29431;
var statearr_29456_29518 = state_29431__$1;
(statearr_29456_29518[(2)] = inst_29400);

(statearr_29456_29518[(1)] = (10));


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
var statearr_29460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__);

(statearr_29460[(1)] = (1));

return statearr_29460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1 = (function (state_29431){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29461){if((e29461 instanceof Object)){
var ex__19970__auto__ = e29461;
var statearr_29462_29519 = state_29431;
(statearr_29462_29519[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29520 = state_29431;
state_29431 = G__29520;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__,jobs,results,process,async))
})();
var state__20080__auto__ = (function (){var statearr_29463 = f__20079__auto__.call(null);
(statearr_29463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_29463;
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
var args29521 = [];
var len__17885__auto___29524 = arguments.length;
var i__17886__auto___29525 = (0);
while(true){
if((i__17886__auto___29525 < len__17885__auto___29524)){
args29521.push((arguments[i__17886__auto___29525]));

var G__29526 = (i__17886__auto___29525 + (1));
i__17886__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var G__29523 = args29521.length;
switch (G__29523) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29521.length)].join('')));

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
var args29528 = [];
var len__17885__auto___29531 = arguments.length;
var i__17886__auto___29532 = (0);
while(true){
if((i__17886__auto___29532 < len__17885__auto___29531)){
args29528.push((arguments[i__17886__auto___29532]));

var G__29533 = (i__17886__auto___29532 + (1));
i__17886__auto___29532 = G__29533;
continue;
} else {
}
break;
}

var G__29530 = args29528.length;
switch (G__29530) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29528.length)].join('')));

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
var args29535 = [];
var len__17885__auto___29588 = arguments.length;
var i__17886__auto___29589 = (0);
while(true){
if((i__17886__auto___29589 < len__17885__auto___29588)){
args29535.push((arguments[i__17886__auto___29589]));

var G__29590 = (i__17886__auto___29589 + (1));
i__17886__auto___29589 = G__29590;
continue;
} else {
}
break;
}

var G__29537 = args29535.length;
switch (G__29537) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29535.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20078__auto___29592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___29592,tc,fc){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___29592,tc,fc){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (7))){
var inst_29559 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29565_29593 = state_29563__$1;
(statearr_29565_29593[(2)] = inst_29559);

(statearr_29565_29593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (1))){
var state_29563__$1 = state_29563;
var statearr_29566_29594 = state_29563__$1;
(statearr_29566_29594[(2)] = null);

(statearr_29566_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (4))){
var inst_29540 = (state_29563[(7)]);
var inst_29540__$1 = (state_29563[(2)]);
var inst_29541 = (inst_29540__$1 == null);
var state_29563__$1 = (function (){var statearr_29567 = state_29563;
(statearr_29567[(7)] = inst_29540__$1);

return statearr_29567;
})();
if(cljs.core.truth_(inst_29541)){
var statearr_29568_29595 = state_29563__$1;
(statearr_29568_29595[(1)] = (5));

} else {
var statearr_29569_29596 = state_29563__$1;
(statearr_29569_29596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (13))){
var state_29563__$1 = state_29563;
var statearr_29570_29597 = state_29563__$1;
(statearr_29570_29597[(2)] = null);

(statearr_29570_29597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (6))){
var inst_29540 = (state_29563[(7)]);
var inst_29546 = p.call(null,inst_29540);
var state_29563__$1 = state_29563;
if(cljs.core.truth_(inst_29546)){
var statearr_29571_29598 = state_29563__$1;
(statearr_29571_29598[(1)] = (9));

} else {
var statearr_29572_29599 = state_29563__$1;
(statearr_29572_29599[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (3))){
var inst_29561 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (12))){
var state_29563__$1 = state_29563;
var statearr_29573_29600 = state_29563__$1;
(statearr_29573_29600[(2)] = null);

(statearr_29573_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (2))){
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(4),ch);
} else {
if((state_val_29564 === (11))){
var inst_29540 = (state_29563[(7)]);
var inst_29550 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29563__$1,(8),inst_29550,inst_29540);
} else {
if((state_val_29564 === (9))){
var state_29563__$1 = state_29563;
var statearr_29574_29601 = state_29563__$1;
(statearr_29574_29601[(2)] = tc);

(statearr_29574_29601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (5))){
var inst_29543 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29544 = cljs.core.async.close_BANG_.call(null,fc);
var state_29563__$1 = (function (){var statearr_29575 = state_29563;
(statearr_29575[(8)] = inst_29543);

return statearr_29575;
})();
var statearr_29576_29602 = state_29563__$1;
(statearr_29576_29602[(2)] = inst_29544);

(statearr_29576_29602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (14))){
var inst_29557 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29577_29603 = state_29563__$1;
(statearr_29577_29603[(2)] = inst_29557);

(statearr_29577_29603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (10))){
var state_29563__$1 = state_29563;
var statearr_29578_29604 = state_29563__$1;
(statearr_29578_29604[(2)] = fc);

(statearr_29578_29604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29552 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
if(cljs.core.truth_(inst_29552)){
var statearr_29579_29605 = state_29563__$1;
(statearr_29579_29605[(1)] = (12));

} else {
var statearr_29580_29606 = state_29563__$1;
(statearr_29580_29606[(1)] = (13));

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
});})(c__20078__auto___29592,tc,fc))
;
return ((function (switch__19966__auto__,c__20078__auto___29592,tc,fc){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null,null,null];
(statearr_29584[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_29563){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__19970__auto__ = e29585;
var statearr_29586_29607 = state_29563;
(statearr_29586_29607[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29608 = state_29563;
state_29563 = G__29608;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___29592,tc,fc))
})();
var state__20080__auto__ = (function (){var statearr_29587 = f__20079__auto__.call(null);
(statearr_29587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___29592);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___29592,tc,fc))
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
return (function (state_29672){
var state_val_29673 = (state_29672[(1)]);
if((state_val_29673 === (7))){
var inst_29668 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29674_29695 = state_29672__$1;
(statearr_29674_29695[(2)] = inst_29668);

(statearr_29674_29695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (1))){
var inst_29652 = init;
var state_29672__$1 = (function (){var statearr_29675 = state_29672;
(statearr_29675[(7)] = inst_29652);

return statearr_29675;
})();
var statearr_29676_29696 = state_29672__$1;
(statearr_29676_29696[(2)] = null);

(statearr_29676_29696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (4))){
var inst_29655 = (state_29672[(8)]);
var inst_29655__$1 = (state_29672[(2)]);
var inst_29656 = (inst_29655__$1 == null);
var state_29672__$1 = (function (){var statearr_29677 = state_29672;
(statearr_29677[(8)] = inst_29655__$1);

return statearr_29677;
})();
if(cljs.core.truth_(inst_29656)){
var statearr_29678_29697 = state_29672__$1;
(statearr_29678_29697[(1)] = (5));

} else {
var statearr_29679_29698 = state_29672__$1;
(statearr_29679_29698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (6))){
var inst_29652 = (state_29672[(7)]);
var inst_29655 = (state_29672[(8)]);
var inst_29659 = (state_29672[(9)]);
var inst_29659__$1 = f.call(null,inst_29652,inst_29655);
var inst_29660 = cljs.core.reduced_QMARK_.call(null,inst_29659__$1);
var state_29672__$1 = (function (){var statearr_29680 = state_29672;
(statearr_29680[(9)] = inst_29659__$1);

return statearr_29680;
})();
if(inst_29660){
var statearr_29681_29699 = state_29672__$1;
(statearr_29681_29699[(1)] = (8));

} else {
var statearr_29682_29700 = state_29672__$1;
(statearr_29682_29700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (3))){
var inst_29670 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29672__$1,inst_29670);
} else {
if((state_val_29673 === (2))){
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29672__$1,(4),ch);
} else {
if((state_val_29673 === (9))){
var inst_29659 = (state_29672[(9)]);
var inst_29652 = inst_29659;
var state_29672__$1 = (function (){var statearr_29683 = state_29672;
(statearr_29683[(7)] = inst_29652);

return statearr_29683;
})();
var statearr_29684_29701 = state_29672__$1;
(statearr_29684_29701[(2)] = null);

(statearr_29684_29701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (5))){
var inst_29652 = (state_29672[(7)]);
var state_29672__$1 = state_29672;
var statearr_29685_29702 = state_29672__$1;
(statearr_29685_29702[(2)] = inst_29652);

(statearr_29685_29702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (10))){
var inst_29666 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29686_29703 = state_29672__$1;
(statearr_29686_29703[(2)] = inst_29666);

(statearr_29686_29703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (8))){
var inst_29659 = (state_29672[(9)]);
var inst_29662 = cljs.core.deref.call(null,inst_29659);
var state_29672__$1 = state_29672;
var statearr_29687_29704 = state_29672__$1;
(statearr_29687_29704[(2)] = inst_29662);

(statearr_29687_29704[(1)] = (10));


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
var statearr_29691 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29691[(0)] = cljs$core$async$reduce_$_state_machine__19967__auto__);

(statearr_29691[(1)] = (1));

return statearr_29691;
});
var cljs$core$async$reduce_$_state_machine__19967__auto____1 = (function (state_29672){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29692){if((e29692 instanceof Object)){
var ex__19970__auto__ = e29692;
var statearr_29693_29705 = state_29672;
(statearr_29693_29705[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29706 = state_29672;
state_29672 = G__29706;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19967__auto__ = function(state_29672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19967__auto____1.call(this,state_29672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19967__auto____0;
cljs$core$async$reduce_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19967__auto____1;
return cljs$core$async$reduce_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_29694 = f__20079__auto__.call(null);
(statearr_29694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_29694;
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
var args29707 = [];
var len__17885__auto___29759 = arguments.length;
var i__17886__auto___29760 = (0);
while(true){
if((i__17886__auto___29760 < len__17885__auto___29759)){
args29707.push((arguments[i__17886__auto___29760]));

var G__29761 = (i__17886__auto___29760 + (1));
i__17886__auto___29760 = G__29761;
continue;
} else {
}
break;
}

var G__29709 = args29707.length;
switch (G__29709) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29707.length)].join('')));

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
return (function (state_29734){
var state_val_29735 = (state_29734[(1)]);
if((state_val_29735 === (7))){
var inst_29716 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29736_29763 = state_29734__$1;
(statearr_29736_29763[(2)] = inst_29716);

(statearr_29736_29763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (1))){
var inst_29710 = cljs.core.seq.call(null,coll);
var inst_29711 = inst_29710;
var state_29734__$1 = (function (){var statearr_29737 = state_29734;
(statearr_29737[(7)] = inst_29711);

return statearr_29737;
})();
var statearr_29738_29764 = state_29734__$1;
(statearr_29738_29764[(2)] = null);

(statearr_29738_29764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (4))){
var inst_29711 = (state_29734[(7)]);
var inst_29714 = cljs.core.first.call(null,inst_29711);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(7),ch,inst_29714);
} else {
if((state_val_29735 === (13))){
var inst_29728 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29739_29765 = state_29734__$1;
(statearr_29739_29765[(2)] = inst_29728);

(statearr_29739_29765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (6))){
var inst_29719 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29719)){
var statearr_29740_29766 = state_29734__$1;
(statearr_29740_29766[(1)] = (8));

} else {
var statearr_29741_29767 = state_29734__$1;
(statearr_29741_29767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (3))){
var inst_29732 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else {
if((state_val_29735 === (12))){
var state_29734__$1 = state_29734;
var statearr_29742_29768 = state_29734__$1;
(statearr_29742_29768[(2)] = null);

(statearr_29742_29768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (2))){
var inst_29711 = (state_29734[(7)]);
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29711)){
var statearr_29743_29769 = state_29734__$1;
(statearr_29743_29769[(1)] = (4));

} else {
var statearr_29744_29770 = state_29734__$1;
(statearr_29744_29770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (11))){
var inst_29725 = cljs.core.async.close_BANG_.call(null,ch);
var state_29734__$1 = state_29734;
var statearr_29745_29771 = state_29734__$1;
(statearr_29745_29771[(2)] = inst_29725);

(statearr_29745_29771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (9))){
var state_29734__$1 = state_29734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29746_29772 = state_29734__$1;
(statearr_29746_29772[(1)] = (11));

} else {
var statearr_29747_29773 = state_29734__$1;
(statearr_29747_29773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (5))){
var inst_29711 = (state_29734[(7)]);
var state_29734__$1 = state_29734;
var statearr_29748_29774 = state_29734__$1;
(statearr_29748_29774[(2)] = inst_29711);

(statearr_29748_29774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (10))){
var inst_29730 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29749_29775 = state_29734__$1;
(statearr_29749_29775[(2)] = inst_29730);

(statearr_29749_29775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (8))){
var inst_29711 = (state_29734[(7)]);
var inst_29721 = cljs.core.next.call(null,inst_29711);
var inst_29711__$1 = inst_29721;
var state_29734__$1 = (function (){var statearr_29750 = state_29734;
(statearr_29750[(7)] = inst_29711__$1);

return statearr_29750;
})();
var statearr_29751_29776 = state_29734__$1;
(statearr_29751_29776[(2)] = null);

(statearr_29751_29776[(1)] = (2));


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
var statearr_29755 = [null,null,null,null,null,null,null,null];
(statearr_29755[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_29755[(1)] = (1));

return statearr_29755;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_29734){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_29734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e29756){if((e29756 instanceof Object)){
var ex__19970__auto__ = e29756;
var statearr_29757_29777 = state_29734;
(statearr_29757_29777[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_29734;
state_29734 = G__29778;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_29758 = f__20079__auto__.call(null);
(statearr_29758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_29758;
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
if(typeof cljs.core.async.t_cljs$core$async30000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30000 = (function (mult,ch,cs,meta30001){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30001 = meta30001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30002,meta30001__$1){
var self__ = this;
var _30002__$1 = this;
return (new cljs.core.async.t_cljs$core$async30000(self__.mult,self__.ch,self__.cs,meta30001__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30002){
var self__ = this;
var _30002__$1 = this;
return self__.meta30001;
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30001","meta30001",1287873564,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30000";

cljs.core.async.t_cljs$core$async30000.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async30000");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30000 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30000(mult__$1,ch__$1,cs__$1,meta30001){
return (new cljs.core.async.t_cljs$core$async30000(mult__$1,ch__$1,cs__$1,meta30001));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30000(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20078__auto___30221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___30221,cs,m,dchan,dctr,done){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___30221,cs,m,dchan,dctr,done){
return (function (state_30133){
var state_val_30134 = (state_30133[(1)]);
if((state_val_30134 === (7))){
var inst_30129 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30135_30222 = state_30133__$1;
(statearr_30135_30222[(2)] = inst_30129);

(statearr_30135_30222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (20))){
var inst_30034 = (state_30133[(7)]);
var inst_30044 = cljs.core.first.call(null,inst_30034);
var inst_30045 = cljs.core.nth.call(null,inst_30044,(0),null);
var inst_30046 = cljs.core.nth.call(null,inst_30044,(1),null);
var state_30133__$1 = (function (){var statearr_30136 = state_30133;
(statearr_30136[(8)] = inst_30045);

return statearr_30136;
})();
if(cljs.core.truth_(inst_30046)){
var statearr_30137_30223 = state_30133__$1;
(statearr_30137_30223[(1)] = (22));

} else {
var statearr_30138_30224 = state_30133__$1;
(statearr_30138_30224[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (27))){
var inst_30005 = (state_30133[(9)]);
var inst_30081 = (state_30133[(10)]);
var inst_30076 = (state_30133[(11)]);
var inst_30074 = (state_30133[(12)]);
var inst_30081__$1 = cljs.core._nth.call(null,inst_30074,inst_30076);
var inst_30082 = cljs.core.async.put_BANG_.call(null,inst_30081__$1,inst_30005,done);
var state_30133__$1 = (function (){var statearr_30139 = state_30133;
(statearr_30139[(10)] = inst_30081__$1);

return statearr_30139;
})();
if(cljs.core.truth_(inst_30082)){
var statearr_30140_30225 = state_30133__$1;
(statearr_30140_30225[(1)] = (30));

} else {
var statearr_30141_30226 = state_30133__$1;
(statearr_30141_30226[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (1))){
var state_30133__$1 = state_30133;
var statearr_30142_30227 = state_30133__$1;
(statearr_30142_30227[(2)] = null);

(statearr_30142_30227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (24))){
var inst_30034 = (state_30133[(7)]);
var inst_30051 = (state_30133[(2)]);
var inst_30052 = cljs.core.next.call(null,inst_30034);
var inst_30014 = inst_30052;
var inst_30015 = null;
var inst_30016 = (0);
var inst_30017 = (0);
var state_30133__$1 = (function (){var statearr_30143 = state_30133;
(statearr_30143[(13)] = inst_30015);

(statearr_30143[(14)] = inst_30016);

(statearr_30143[(15)] = inst_30014);

(statearr_30143[(16)] = inst_30017);

(statearr_30143[(17)] = inst_30051);

return statearr_30143;
})();
var statearr_30144_30228 = state_30133__$1;
(statearr_30144_30228[(2)] = null);

(statearr_30144_30228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (39))){
var state_30133__$1 = state_30133;
var statearr_30148_30229 = state_30133__$1;
(statearr_30148_30229[(2)] = null);

(statearr_30148_30229[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (4))){
var inst_30005 = (state_30133[(9)]);
var inst_30005__$1 = (state_30133[(2)]);
var inst_30006 = (inst_30005__$1 == null);
var state_30133__$1 = (function (){var statearr_30149 = state_30133;
(statearr_30149[(9)] = inst_30005__$1);

return statearr_30149;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30150_30230 = state_30133__$1;
(statearr_30150_30230[(1)] = (5));

} else {
var statearr_30151_30231 = state_30133__$1;
(statearr_30151_30231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (15))){
var inst_30015 = (state_30133[(13)]);
var inst_30016 = (state_30133[(14)]);
var inst_30014 = (state_30133[(15)]);
var inst_30017 = (state_30133[(16)]);
var inst_30030 = (state_30133[(2)]);
var inst_30031 = (inst_30017 + (1));
var tmp30145 = inst_30015;
var tmp30146 = inst_30016;
var tmp30147 = inst_30014;
var inst_30014__$1 = tmp30147;
var inst_30015__$1 = tmp30145;
var inst_30016__$1 = tmp30146;
var inst_30017__$1 = inst_30031;
var state_30133__$1 = (function (){var statearr_30152 = state_30133;
(statearr_30152[(13)] = inst_30015__$1);

(statearr_30152[(14)] = inst_30016__$1);

(statearr_30152[(15)] = inst_30014__$1);

(statearr_30152[(18)] = inst_30030);

(statearr_30152[(16)] = inst_30017__$1);

return statearr_30152;
})();
var statearr_30153_30232 = state_30133__$1;
(statearr_30153_30232[(2)] = null);

(statearr_30153_30232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (21))){
var inst_30055 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30157_30233 = state_30133__$1;
(statearr_30157_30233[(2)] = inst_30055);

(statearr_30157_30233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (31))){
var inst_30081 = (state_30133[(10)]);
var inst_30085 = done.call(null,null);
var inst_30086 = cljs.core.async.untap_STAR_.call(null,m,inst_30081);
var state_30133__$1 = (function (){var statearr_30158 = state_30133;
(statearr_30158[(19)] = inst_30085);

return statearr_30158;
})();
var statearr_30159_30234 = state_30133__$1;
(statearr_30159_30234[(2)] = inst_30086);

(statearr_30159_30234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (32))){
var inst_30073 = (state_30133[(20)]);
var inst_30076 = (state_30133[(11)]);
var inst_30075 = (state_30133[(21)]);
var inst_30074 = (state_30133[(12)]);
var inst_30088 = (state_30133[(2)]);
var inst_30089 = (inst_30076 + (1));
var tmp30154 = inst_30073;
var tmp30155 = inst_30075;
var tmp30156 = inst_30074;
var inst_30073__$1 = tmp30154;
var inst_30074__$1 = tmp30156;
var inst_30075__$1 = tmp30155;
var inst_30076__$1 = inst_30089;
var state_30133__$1 = (function (){var statearr_30160 = state_30133;
(statearr_30160[(20)] = inst_30073__$1);

(statearr_30160[(22)] = inst_30088);

(statearr_30160[(11)] = inst_30076__$1);

(statearr_30160[(21)] = inst_30075__$1);

(statearr_30160[(12)] = inst_30074__$1);

return statearr_30160;
})();
var statearr_30161_30235 = state_30133__$1;
(statearr_30161_30235[(2)] = null);

(statearr_30161_30235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (40))){
var inst_30101 = (state_30133[(23)]);
var inst_30105 = done.call(null,null);
var inst_30106 = cljs.core.async.untap_STAR_.call(null,m,inst_30101);
var state_30133__$1 = (function (){var statearr_30162 = state_30133;
(statearr_30162[(24)] = inst_30105);

return statearr_30162;
})();
var statearr_30163_30236 = state_30133__$1;
(statearr_30163_30236[(2)] = inst_30106);

(statearr_30163_30236[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (33))){
var inst_30092 = (state_30133[(25)]);
var inst_30094 = cljs.core.chunked_seq_QMARK_.call(null,inst_30092);
var state_30133__$1 = state_30133;
if(inst_30094){
var statearr_30164_30237 = state_30133__$1;
(statearr_30164_30237[(1)] = (36));

} else {
var statearr_30165_30238 = state_30133__$1;
(statearr_30165_30238[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (13))){
var inst_30024 = (state_30133[(26)]);
var inst_30027 = cljs.core.async.close_BANG_.call(null,inst_30024);
var state_30133__$1 = state_30133;
var statearr_30166_30239 = state_30133__$1;
(statearr_30166_30239[(2)] = inst_30027);

(statearr_30166_30239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (22))){
var inst_30045 = (state_30133[(8)]);
var inst_30048 = cljs.core.async.close_BANG_.call(null,inst_30045);
var state_30133__$1 = state_30133;
var statearr_30167_30240 = state_30133__$1;
(statearr_30167_30240[(2)] = inst_30048);

(statearr_30167_30240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (36))){
var inst_30092 = (state_30133[(25)]);
var inst_30096 = cljs.core.chunk_first.call(null,inst_30092);
var inst_30097 = cljs.core.chunk_rest.call(null,inst_30092);
var inst_30098 = cljs.core.count.call(null,inst_30096);
var inst_30073 = inst_30097;
var inst_30074 = inst_30096;
var inst_30075 = inst_30098;
var inst_30076 = (0);
var state_30133__$1 = (function (){var statearr_30168 = state_30133;
(statearr_30168[(20)] = inst_30073);

(statearr_30168[(11)] = inst_30076);

(statearr_30168[(21)] = inst_30075);

(statearr_30168[(12)] = inst_30074);

return statearr_30168;
})();
var statearr_30169_30241 = state_30133__$1;
(statearr_30169_30241[(2)] = null);

(statearr_30169_30241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (41))){
var inst_30092 = (state_30133[(25)]);
var inst_30108 = (state_30133[(2)]);
var inst_30109 = cljs.core.next.call(null,inst_30092);
var inst_30073 = inst_30109;
var inst_30074 = null;
var inst_30075 = (0);
var inst_30076 = (0);
var state_30133__$1 = (function (){var statearr_30170 = state_30133;
(statearr_30170[(20)] = inst_30073);

(statearr_30170[(27)] = inst_30108);

(statearr_30170[(11)] = inst_30076);

(statearr_30170[(21)] = inst_30075);

(statearr_30170[(12)] = inst_30074);

return statearr_30170;
})();
var statearr_30171_30242 = state_30133__$1;
(statearr_30171_30242[(2)] = null);

(statearr_30171_30242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (43))){
var state_30133__$1 = state_30133;
var statearr_30172_30243 = state_30133__$1;
(statearr_30172_30243[(2)] = null);

(statearr_30172_30243[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (29))){
var inst_30117 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30173_30244 = state_30133__$1;
(statearr_30173_30244[(2)] = inst_30117);

(statearr_30173_30244[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (44))){
var inst_30126 = (state_30133[(2)]);
var state_30133__$1 = (function (){var statearr_30174 = state_30133;
(statearr_30174[(28)] = inst_30126);

return statearr_30174;
})();
var statearr_30175_30245 = state_30133__$1;
(statearr_30175_30245[(2)] = null);

(statearr_30175_30245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (6))){
var inst_30065 = (state_30133[(29)]);
var inst_30064 = cljs.core.deref.call(null,cs);
var inst_30065__$1 = cljs.core.keys.call(null,inst_30064);
var inst_30066 = cljs.core.count.call(null,inst_30065__$1);
var inst_30067 = cljs.core.reset_BANG_.call(null,dctr,inst_30066);
var inst_30072 = cljs.core.seq.call(null,inst_30065__$1);
var inst_30073 = inst_30072;
var inst_30074 = null;
var inst_30075 = (0);
var inst_30076 = (0);
var state_30133__$1 = (function (){var statearr_30176 = state_30133;
(statearr_30176[(29)] = inst_30065__$1);

(statearr_30176[(20)] = inst_30073);

(statearr_30176[(30)] = inst_30067);

(statearr_30176[(11)] = inst_30076);

(statearr_30176[(21)] = inst_30075);

(statearr_30176[(12)] = inst_30074);

return statearr_30176;
})();
var statearr_30177_30246 = state_30133__$1;
(statearr_30177_30246[(2)] = null);

(statearr_30177_30246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (28))){
var inst_30073 = (state_30133[(20)]);
var inst_30092 = (state_30133[(25)]);
var inst_30092__$1 = cljs.core.seq.call(null,inst_30073);
var state_30133__$1 = (function (){var statearr_30178 = state_30133;
(statearr_30178[(25)] = inst_30092__$1);

return statearr_30178;
})();
if(inst_30092__$1){
var statearr_30179_30247 = state_30133__$1;
(statearr_30179_30247[(1)] = (33));

} else {
var statearr_30180_30248 = state_30133__$1;
(statearr_30180_30248[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (25))){
var inst_30076 = (state_30133[(11)]);
var inst_30075 = (state_30133[(21)]);
var inst_30078 = (inst_30076 < inst_30075);
var inst_30079 = inst_30078;
var state_30133__$1 = state_30133;
if(cljs.core.truth_(inst_30079)){
var statearr_30181_30249 = state_30133__$1;
(statearr_30181_30249[(1)] = (27));

} else {
var statearr_30182_30250 = state_30133__$1;
(statearr_30182_30250[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (34))){
var state_30133__$1 = state_30133;
var statearr_30183_30251 = state_30133__$1;
(statearr_30183_30251[(2)] = null);

(statearr_30183_30251[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (17))){
var state_30133__$1 = state_30133;
var statearr_30184_30252 = state_30133__$1;
(statearr_30184_30252[(2)] = null);

(statearr_30184_30252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (3))){
var inst_30131 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30133__$1,inst_30131);
} else {
if((state_val_30134 === (12))){
var inst_30060 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30185_30253 = state_30133__$1;
(statearr_30185_30253[(2)] = inst_30060);

(statearr_30185_30253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (2))){
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(4),ch);
} else {
if((state_val_30134 === (23))){
var state_30133__$1 = state_30133;
var statearr_30186_30254 = state_30133__$1;
(statearr_30186_30254[(2)] = null);

(statearr_30186_30254[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (35))){
var inst_30115 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30187_30255 = state_30133__$1;
(statearr_30187_30255[(2)] = inst_30115);

(statearr_30187_30255[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (19))){
var inst_30034 = (state_30133[(7)]);
var inst_30038 = cljs.core.chunk_first.call(null,inst_30034);
var inst_30039 = cljs.core.chunk_rest.call(null,inst_30034);
var inst_30040 = cljs.core.count.call(null,inst_30038);
var inst_30014 = inst_30039;
var inst_30015 = inst_30038;
var inst_30016 = inst_30040;
var inst_30017 = (0);
var state_30133__$1 = (function (){var statearr_30188 = state_30133;
(statearr_30188[(13)] = inst_30015);

(statearr_30188[(14)] = inst_30016);

(statearr_30188[(15)] = inst_30014);

(statearr_30188[(16)] = inst_30017);

return statearr_30188;
})();
var statearr_30189_30256 = state_30133__$1;
(statearr_30189_30256[(2)] = null);

(statearr_30189_30256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (11))){
var inst_30014 = (state_30133[(15)]);
var inst_30034 = (state_30133[(7)]);
var inst_30034__$1 = cljs.core.seq.call(null,inst_30014);
var state_30133__$1 = (function (){var statearr_30190 = state_30133;
(statearr_30190[(7)] = inst_30034__$1);

return statearr_30190;
})();
if(inst_30034__$1){
var statearr_30191_30257 = state_30133__$1;
(statearr_30191_30257[(1)] = (16));

} else {
var statearr_30192_30258 = state_30133__$1;
(statearr_30192_30258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (9))){
var inst_30062 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30193_30259 = state_30133__$1;
(statearr_30193_30259[(2)] = inst_30062);

(statearr_30193_30259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (5))){
var inst_30012 = cljs.core.deref.call(null,cs);
var inst_30013 = cljs.core.seq.call(null,inst_30012);
var inst_30014 = inst_30013;
var inst_30015 = null;
var inst_30016 = (0);
var inst_30017 = (0);
var state_30133__$1 = (function (){var statearr_30194 = state_30133;
(statearr_30194[(13)] = inst_30015);

(statearr_30194[(14)] = inst_30016);

(statearr_30194[(15)] = inst_30014);

(statearr_30194[(16)] = inst_30017);

return statearr_30194;
})();
var statearr_30195_30260 = state_30133__$1;
(statearr_30195_30260[(2)] = null);

(statearr_30195_30260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (14))){
var state_30133__$1 = state_30133;
var statearr_30196_30261 = state_30133__$1;
(statearr_30196_30261[(2)] = null);

(statearr_30196_30261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (45))){
var inst_30123 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30197_30262 = state_30133__$1;
(statearr_30197_30262[(2)] = inst_30123);

(statearr_30197_30262[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (26))){
var inst_30065 = (state_30133[(29)]);
var inst_30119 = (state_30133[(2)]);
var inst_30120 = cljs.core.seq.call(null,inst_30065);
var state_30133__$1 = (function (){var statearr_30198 = state_30133;
(statearr_30198[(31)] = inst_30119);

return statearr_30198;
})();
if(inst_30120){
var statearr_30199_30263 = state_30133__$1;
(statearr_30199_30263[(1)] = (42));

} else {
var statearr_30200_30264 = state_30133__$1;
(statearr_30200_30264[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (16))){
var inst_30034 = (state_30133[(7)]);
var inst_30036 = cljs.core.chunked_seq_QMARK_.call(null,inst_30034);
var state_30133__$1 = state_30133;
if(inst_30036){
var statearr_30201_30265 = state_30133__$1;
(statearr_30201_30265[(1)] = (19));

} else {
var statearr_30202_30266 = state_30133__$1;
(statearr_30202_30266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (38))){
var inst_30112 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30203_30267 = state_30133__$1;
(statearr_30203_30267[(2)] = inst_30112);

(statearr_30203_30267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (30))){
var state_30133__$1 = state_30133;
var statearr_30204_30268 = state_30133__$1;
(statearr_30204_30268[(2)] = null);

(statearr_30204_30268[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (10))){
var inst_30015 = (state_30133[(13)]);
var inst_30017 = (state_30133[(16)]);
var inst_30023 = cljs.core._nth.call(null,inst_30015,inst_30017);
var inst_30024 = cljs.core.nth.call(null,inst_30023,(0),null);
var inst_30025 = cljs.core.nth.call(null,inst_30023,(1),null);
var state_30133__$1 = (function (){var statearr_30205 = state_30133;
(statearr_30205[(26)] = inst_30024);

return statearr_30205;
})();
if(cljs.core.truth_(inst_30025)){
var statearr_30206_30269 = state_30133__$1;
(statearr_30206_30269[(1)] = (13));

} else {
var statearr_30207_30270 = state_30133__$1;
(statearr_30207_30270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (18))){
var inst_30058 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30208_30271 = state_30133__$1;
(statearr_30208_30271[(2)] = inst_30058);

(statearr_30208_30271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (42))){
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(45),dchan);
} else {
if((state_val_30134 === (37))){
var inst_30005 = (state_30133[(9)]);
var inst_30092 = (state_30133[(25)]);
var inst_30101 = (state_30133[(23)]);
var inst_30101__$1 = cljs.core.first.call(null,inst_30092);
var inst_30102 = cljs.core.async.put_BANG_.call(null,inst_30101__$1,inst_30005,done);
var state_30133__$1 = (function (){var statearr_30209 = state_30133;
(statearr_30209[(23)] = inst_30101__$1);

return statearr_30209;
})();
if(cljs.core.truth_(inst_30102)){
var statearr_30210_30272 = state_30133__$1;
(statearr_30210_30272[(1)] = (39));

} else {
var statearr_30211_30273 = state_30133__$1;
(statearr_30211_30273[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (8))){
var inst_30016 = (state_30133[(14)]);
var inst_30017 = (state_30133[(16)]);
var inst_30019 = (inst_30017 < inst_30016);
var inst_30020 = inst_30019;
var state_30133__$1 = state_30133;
if(cljs.core.truth_(inst_30020)){
var statearr_30212_30274 = state_30133__$1;
(statearr_30212_30274[(1)] = (10));

} else {
var statearr_30213_30275 = state_30133__$1;
(statearr_30213_30275[(1)] = (11));

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
});})(c__20078__auto___30221,cs,m,dchan,dctr,done))
;
return ((function (switch__19966__auto__,c__20078__auto___30221,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19967__auto__ = null;
var cljs$core$async$mult_$_state_machine__19967__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30217[(0)] = cljs$core$async$mult_$_state_machine__19967__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var cljs$core$async$mult_$_state_machine__19967__auto____1 = (function (state_30133){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_30133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e30218){if((e30218 instanceof Object)){
var ex__19970__auto__ = e30218;
var statearr_30219_30276 = state_30133;
(statearr_30219_30276[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30277 = state_30133;
state_30133 = G__30277;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19967__auto__ = function(state_30133){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19967__auto____1.call(this,state_30133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19967__auto____0;
cljs$core$async$mult_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19967__auto____1;
return cljs$core$async$mult_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___30221,cs,m,dchan,dctr,done))
})();
var state__20080__auto__ = (function (){var statearr_30220 = f__20079__auto__.call(null);
(statearr_30220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___30221);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___30221,cs,m,dchan,dctr,done))
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
var args30278 = [];
var len__17885__auto___30281 = arguments.length;
var i__17886__auto___30282 = (0);
while(true){
if((i__17886__auto___30282 < len__17885__auto___30281)){
args30278.push((arguments[i__17886__auto___30282]));

var G__30283 = (i__17886__auto___30282 + (1));
i__17886__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var G__30280 = args30278.length;
switch (G__30280) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30278.length)].join('')));

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
var len__17885__auto___30295 = arguments.length;
var i__17886__auto___30296 = (0);
while(true){
if((i__17886__auto___30296 < len__17885__auto___30295)){
args__17892__auto__.push((arguments[i__17886__auto___30296]));

var G__30297 = (i__17886__auto___30296 + (1));
i__17886__auto___30296 = G__30297;
continue;
} else {
}
break;
}

var argseq__17893__auto__ = ((((3) < args__17892__auto__.length))?(new cljs.core.IndexedSeq(args__17892__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17893__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30289){
var map__30290 = p__30289;
var map__30290__$1 = ((((!((map__30290 == null)))?((((map__30290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30290):map__30290);
var opts = map__30290__$1;
var statearr_30292_30298 = state;
(statearr_30292_30298[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30290,map__30290__$1,opts){
return (function (val){
var statearr_30293_30299 = state;
(statearr_30293_30299[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30290,map__30290__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30294_30300 = state;
(statearr_30294_30300[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30285){
var G__30286 = cljs.core.first.call(null,seq30285);
var seq30285__$1 = cljs.core.next.call(null,seq30285);
var G__30287 = cljs.core.first.call(null,seq30285__$1);
var seq30285__$2 = cljs.core.next.call(null,seq30285__$1);
var G__30288 = cljs.core.first.call(null,seq30285__$2);
var seq30285__$3 = cljs.core.next.call(null,seq30285__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30286,G__30287,G__30288,seq30285__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30464 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30465){
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
this.meta30465 = meta30465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30466,meta30465__$1){
var self__ = this;
var _30466__$1 = this;
return (new cljs.core.async.t_cljs$core$async30464(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30465__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30466){
var self__ = this;
var _30466__$1 = this;
return self__.meta30465;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30464.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30465","meta30465",-774264074,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30464";

cljs.core.async.t_cljs$core$async30464.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async30464");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30464 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30464(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30465){
return (new cljs.core.async.t_cljs$core$async30464(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30465));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30464(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20078__auto___30627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___30627,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___30627,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (7))){
var inst_30482 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30566_30628 = state_30564__$1;
(statearr_30566_30628[(2)] = inst_30482);

(statearr_30566_30628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (20))){
var inst_30494 = (state_30564[(7)]);
var state_30564__$1 = state_30564;
var statearr_30567_30629 = state_30564__$1;
(statearr_30567_30629[(2)] = inst_30494);

(statearr_30567_30629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (27))){
var state_30564__$1 = state_30564;
var statearr_30568_30630 = state_30564__$1;
(statearr_30568_30630[(2)] = null);

(statearr_30568_30630[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (1))){
var inst_30470 = (state_30564[(8)]);
var inst_30470__$1 = calc_state.call(null);
var inst_30472 = (inst_30470__$1 == null);
var inst_30473 = cljs.core.not.call(null,inst_30472);
var state_30564__$1 = (function (){var statearr_30569 = state_30564;
(statearr_30569[(8)] = inst_30470__$1);

return statearr_30569;
})();
if(inst_30473){
var statearr_30570_30631 = state_30564__$1;
(statearr_30570_30631[(1)] = (2));

} else {
var statearr_30571_30632 = state_30564__$1;
(statearr_30571_30632[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (24))){
var inst_30517 = (state_30564[(9)]);
var inst_30524 = (state_30564[(10)]);
var inst_30538 = (state_30564[(11)]);
var inst_30538__$1 = inst_30517.call(null,inst_30524);
var state_30564__$1 = (function (){var statearr_30572 = state_30564;
(statearr_30572[(11)] = inst_30538__$1);

return statearr_30572;
})();
if(cljs.core.truth_(inst_30538__$1)){
var statearr_30573_30633 = state_30564__$1;
(statearr_30573_30633[(1)] = (29));

} else {
var statearr_30574_30634 = state_30564__$1;
(statearr_30574_30634[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (4))){
var inst_30485 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30485)){
var statearr_30575_30635 = state_30564__$1;
(statearr_30575_30635[(1)] = (8));

} else {
var statearr_30576_30636 = state_30564__$1;
(statearr_30576_30636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (15))){
var inst_30511 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30511)){
var statearr_30577_30637 = state_30564__$1;
(statearr_30577_30637[(1)] = (19));

} else {
var statearr_30578_30638 = state_30564__$1;
(statearr_30578_30638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (21))){
var inst_30516 = (state_30564[(12)]);
var inst_30516__$1 = (state_30564[(2)]);
var inst_30517 = cljs.core.get.call(null,inst_30516__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30518 = cljs.core.get.call(null,inst_30516__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30519 = cljs.core.get.call(null,inst_30516__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30564__$1 = (function (){var statearr_30579 = state_30564;
(statearr_30579[(9)] = inst_30517);

(statearr_30579[(13)] = inst_30518);

(statearr_30579[(12)] = inst_30516__$1);

return statearr_30579;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30564__$1,(22),inst_30519);
} else {
if((state_val_30565 === (31))){
var inst_30546 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30546)){
var statearr_30580_30639 = state_30564__$1;
(statearr_30580_30639[(1)] = (32));

} else {
var statearr_30581_30640 = state_30564__$1;
(statearr_30581_30640[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (32))){
var inst_30523 = (state_30564[(14)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30564__$1,(35),out,inst_30523);
} else {
if((state_val_30565 === (33))){
var inst_30516 = (state_30564[(12)]);
var inst_30494 = inst_30516;
var state_30564__$1 = (function (){var statearr_30582 = state_30564;
(statearr_30582[(7)] = inst_30494);

return statearr_30582;
})();
var statearr_30583_30641 = state_30564__$1;
(statearr_30583_30641[(2)] = null);

(statearr_30583_30641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (13))){
var inst_30494 = (state_30564[(7)]);
var inst_30501 = inst_30494.cljs$lang$protocol_mask$partition0$;
var inst_30502 = (inst_30501 & (64));
var inst_30503 = inst_30494.cljs$core$ISeq$;
var inst_30504 = (inst_30502) || (inst_30503);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30504)){
var statearr_30584_30642 = state_30564__$1;
(statearr_30584_30642[(1)] = (16));

} else {
var statearr_30585_30643 = state_30564__$1;
(statearr_30585_30643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (22))){
var inst_30523 = (state_30564[(14)]);
var inst_30524 = (state_30564[(10)]);
var inst_30522 = (state_30564[(2)]);
var inst_30523__$1 = cljs.core.nth.call(null,inst_30522,(0),null);
var inst_30524__$1 = cljs.core.nth.call(null,inst_30522,(1),null);
var inst_30525 = (inst_30523__$1 == null);
var inst_30526 = cljs.core._EQ_.call(null,inst_30524__$1,change);
var inst_30527 = (inst_30525) || (inst_30526);
var state_30564__$1 = (function (){var statearr_30586 = state_30564;
(statearr_30586[(14)] = inst_30523__$1);

(statearr_30586[(10)] = inst_30524__$1);

return statearr_30586;
})();
if(cljs.core.truth_(inst_30527)){
var statearr_30587_30644 = state_30564__$1;
(statearr_30587_30644[(1)] = (23));

} else {
var statearr_30588_30645 = state_30564__$1;
(statearr_30588_30645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (36))){
var inst_30516 = (state_30564[(12)]);
var inst_30494 = inst_30516;
var state_30564__$1 = (function (){var statearr_30589 = state_30564;
(statearr_30589[(7)] = inst_30494);

return statearr_30589;
})();
var statearr_30590_30646 = state_30564__$1;
(statearr_30590_30646[(2)] = null);

(statearr_30590_30646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (29))){
var inst_30538 = (state_30564[(11)]);
var state_30564__$1 = state_30564;
var statearr_30591_30647 = state_30564__$1;
(statearr_30591_30647[(2)] = inst_30538);

(statearr_30591_30647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (6))){
var state_30564__$1 = state_30564;
var statearr_30592_30648 = state_30564__$1;
(statearr_30592_30648[(2)] = false);

(statearr_30592_30648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (28))){
var inst_30534 = (state_30564[(2)]);
var inst_30535 = calc_state.call(null);
var inst_30494 = inst_30535;
var state_30564__$1 = (function (){var statearr_30593 = state_30564;
(statearr_30593[(7)] = inst_30494);

(statearr_30593[(15)] = inst_30534);

return statearr_30593;
})();
var statearr_30594_30649 = state_30564__$1;
(statearr_30594_30649[(2)] = null);

(statearr_30594_30649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (25))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30595_30650 = state_30564__$1;
(statearr_30595_30650[(2)] = inst_30560);

(statearr_30595_30650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (34))){
var inst_30558 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30596_30651 = state_30564__$1;
(statearr_30596_30651[(2)] = inst_30558);

(statearr_30596_30651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (17))){
var state_30564__$1 = state_30564;
var statearr_30597_30652 = state_30564__$1;
(statearr_30597_30652[(2)] = false);

(statearr_30597_30652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (3))){
var state_30564__$1 = state_30564;
var statearr_30598_30653 = state_30564__$1;
(statearr_30598_30653[(2)] = false);

(statearr_30598_30653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (12))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30564__$1,inst_30562);
} else {
if((state_val_30565 === (2))){
var inst_30470 = (state_30564[(8)]);
var inst_30475 = inst_30470.cljs$lang$protocol_mask$partition0$;
var inst_30476 = (inst_30475 & (64));
var inst_30477 = inst_30470.cljs$core$ISeq$;
var inst_30478 = (inst_30476) || (inst_30477);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30478)){
var statearr_30599_30654 = state_30564__$1;
(statearr_30599_30654[(1)] = (5));

} else {
var statearr_30600_30655 = state_30564__$1;
(statearr_30600_30655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (23))){
var inst_30523 = (state_30564[(14)]);
var inst_30529 = (inst_30523 == null);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30529)){
var statearr_30601_30656 = state_30564__$1;
(statearr_30601_30656[(1)] = (26));

} else {
var statearr_30602_30657 = state_30564__$1;
(statearr_30602_30657[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (35))){
var inst_30549 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30549)){
var statearr_30603_30658 = state_30564__$1;
(statearr_30603_30658[(1)] = (36));

} else {
var statearr_30604_30659 = state_30564__$1;
(statearr_30604_30659[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (19))){
var inst_30494 = (state_30564[(7)]);
var inst_30513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30494);
var state_30564__$1 = state_30564;
var statearr_30605_30660 = state_30564__$1;
(statearr_30605_30660[(2)] = inst_30513);

(statearr_30605_30660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (11))){
var inst_30494 = (state_30564[(7)]);
var inst_30498 = (inst_30494 == null);
var inst_30499 = cljs.core.not.call(null,inst_30498);
var state_30564__$1 = state_30564;
if(inst_30499){
var statearr_30606_30661 = state_30564__$1;
(statearr_30606_30661[(1)] = (13));

} else {
var statearr_30607_30662 = state_30564__$1;
(statearr_30607_30662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (9))){
var inst_30470 = (state_30564[(8)]);
var state_30564__$1 = state_30564;
var statearr_30608_30663 = state_30564__$1;
(statearr_30608_30663[(2)] = inst_30470);

(statearr_30608_30663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (5))){
var state_30564__$1 = state_30564;
var statearr_30609_30664 = state_30564__$1;
(statearr_30609_30664[(2)] = true);

(statearr_30609_30664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (14))){
var state_30564__$1 = state_30564;
var statearr_30610_30665 = state_30564__$1;
(statearr_30610_30665[(2)] = false);

(statearr_30610_30665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (26))){
var inst_30524 = (state_30564[(10)]);
var inst_30531 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30524);
var state_30564__$1 = state_30564;
var statearr_30611_30666 = state_30564__$1;
(statearr_30611_30666[(2)] = inst_30531);

(statearr_30611_30666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (16))){
var state_30564__$1 = state_30564;
var statearr_30612_30667 = state_30564__$1;
(statearr_30612_30667[(2)] = true);

(statearr_30612_30667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (38))){
var inst_30554 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30613_30668 = state_30564__$1;
(statearr_30613_30668[(2)] = inst_30554);

(statearr_30613_30668[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (30))){
var inst_30517 = (state_30564[(9)]);
var inst_30518 = (state_30564[(13)]);
var inst_30524 = (state_30564[(10)]);
var inst_30541 = cljs.core.empty_QMARK_.call(null,inst_30517);
var inst_30542 = inst_30518.call(null,inst_30524);
var inst_30543 = cljs.core.not.call(null,inst_30542);
var inst_30544 = (inst_30541) && (inst_30543);
var state_30564__$1 = state_30564;
var statearr_30614_30669 = state_30564__$1;
(statearr_30614_30669[(2)] = inst_30544);

(statearr_30614_30669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (10))){
var inst_30470 = (state_30564[(8)]);
var inst_30490 = (state_30564[(2)]);
var inst_30491 = cljs.core.get.call(null,inst_30490,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30492 = cljs.core.get.call(null,inst_30490,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30493 = cljs.core.get.call(null,inst_30490,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30494 = inst_30470;
var state_30564__$1 = (function (){var statearr_30615 = state_30564;
(statearr_30615[(16)] = inst_30491);

(statearr_30615[(17)] = inst_30492);

(statearr_30615[(7)] = inst_30494);

(statearr_30615[(18)] = inst_30493);

return statearr_30615;
})();
var statearr_30616_30670 = state_30564__$1;
(statearr_30616_30670[(2)] = null);

(statearr_30616_30670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (18))){
var inst_30508 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30617_30671 = state_30564__$1;
(statearr_30617_30671[(2)] = inst_30508);

(statearr_30617_30671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (37))){
var state_30564__$1 = state_30564;
var statearr_30618_30672 = state_30564__$1;
(statearr_30618_30672[(2)] = null);

(statearr_30618_30672[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (8))){
var inst_30470 = (state_30564[(8)]);
var inst_30487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30470);
var state_30564__$1 = state_30564;
var statearr_30619_30673 = state_30564__$1;
(statearr_30619_30673[(2)] = inst_30487);

(statearr_30619_30673[(1)] = (10));


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
});})(c__20078__auto___30627,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19966__auto__,c__20078__auto___30627,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19967__auto__ = null;
var cljs$core$async$mix_$_state_machine__19967__auto____0 = (function (){
var statearr_30623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30623[(0)] = cljs$core$async$mix_$_state_machine__19967__auto__);

(statearr_30623[(1)] = (1));

return statearr_30623;
});
var cljs$core$async$mix_$_state_machine__19967__auto____1 = (function (state_30564){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_30564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e30624){if((e30624 instanceof Object)){
var ex__19970__auto__ = e30624;
var statearr_30625_30674 = state_30564;
(statearr_30625_30674[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30675 = state_30564;
state_30564 = G__30675;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19967__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19967__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19967__auto____0;
cljs$core$async$mix_$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19967__auto____1;
return cljs$core$async$mix_$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___30627,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20080__auto__ = (function (){var statearr_30626 = f__20079__auto__.call(null);
(statearr_30626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___30627);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___30627,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30676 = [];
var len__17885__auto___30679 = arguments.length;
var i__17886__auto___30680 = (0);
while(true){
if((i__17886__auto___30680 < len__17885__auto___30679)){
args30676.push((arguments[i__17886__auto___30680]));

var G__30681 = (i__17886__auto___30680 + (1));
i__17886__auto___30680 = G__30681;
continue;
} else {
}
break;
}

var G__30678 = args30676.length;
switch (G__30678) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30676.length)].join('')));

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
var args30684 = [];
var len__17885__auto___30809 = arguments.length;
var i__17886__auto___30810 = (0);
while(true){
if((i__17886__auto___30810 < len__17885__auto___30809)){
args30684.push((arguments[i__17886__auto___30810]));

var G__30811 = (i__17886__auto___30810 + (1));
i__17886__auto___30810 = G__30811;
continue;
} else {
}
break;
}

var G__30686 = args30684.length;
switch (G__30686) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30684.length)].join('')));

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
return (function (p1__30683_SHARP_){
if(cljs.core.truth_(p1__30683_SHARP_.call(null,topic))){
return p1__30683_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30683_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30687 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30688){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30688 = meta30688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30689,meta30688__$1){
var self__ = this;
var _30689__$1 = this;
return (new cljs.core.async.t_cljs$core$async30687(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30688__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30689){
var self__ = this;
var _30689__$1 = this;
return self__.meta30688;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30688","meta30688",-736001228,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30687";

cljs.core.async.t_cljs$core$async30687.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async30687");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30687 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30687(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30688){
return (new cljs.core.async.t_cljs$core$async30687(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30688));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30687(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20078__auto___30813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___30813,mults,ensure_mult,p){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___30813,mults,ensure_mult,p){
return (function (state_30761){
var state_val_30762 = (state_30761[(1)]);
if((state_val_30762 === (7))){
var inst_30757 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
var statearr_30763_30814 = state_30761__$1;
(statearr_30763_30814[(2)] = inst_30757);

(statearr_30763_30814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (20))){
var state_30761__$1 = state_30761;
var statearr_30764_30815 = state_30761__$1;
(statearr_30764_30815[(2)] = null);

(statearr_30764_30815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (1))){
var state_30761__$1 = state_30761;
var statearr_30765_30816 = state_30761__$1;
(statearr_30765_30816[(2)] = null);

(statearr_30765_30816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (24))){
var inst_30740 = (state_30761[(7)]);
var inst_30749 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30740);
var state_30761__$1 = state_30761;
var statearr_30766_30817 = state_30761__$1;
(statearr_30766_30817[(2)] = inst_30749);

(statearr_30766_30817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (4))){
var inst_30692 = (state_30761[(8)]);
var inst_30692__$1 = (state_30761[(2)]);
var inst_30693 = (inst_30692__$1 == null);
var state_30761__$1 = (function (){var statearr_30767 = state_30761;
(statearr_30767[(8)] = inst_30692__$1);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30693)){
var statearr_30768_30818 = state_30761__$1;
(statearr_30768_30818[(1)] = (5));

} else {
var statearr_30769_30819 = state_30761__$1;
(statearr_30769_30819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (15))){
var inst_30734 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
var statearr_30770_30820 = state_30761__$1;
(statearr_30770_30820[(2)] = inst_30734);

(statearr_30770_30820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (21))){
var inst_30754 = (state_30761[(2)]);
var state_30761__$1 = (function (){var statearr_30771 = state_30761;
(statearr_30771[(9)] = inst_30754);

return statearr_30771;
})();
var statearr_30772_30821 = state_30761__$1;
(statearr_30772_30821[(2)] = null);

(statearr_30772_30821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (13))){
var inst_30716 = (state_30761[(10)]);
var inst_30718 = cljs.core.chunked_seq_QMARK_.call(null,inst_30716);
var state_30761__$1 = state_30761;
if(inst_30718){
var statearr_30773_30822 = state_30761__$1;
(statearr_30773_30822[(1)] = (16));

} else {
var statearr_30774_30823 = state_30761__$1;
(statearr_30774_30823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (22))){
var inst_30746 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
if(cljs.core.truth_(inst_30746)){
var statearr_30775_30824 = state_30761__$1;
(statearr_30775_30824[(1)] = (23));

} else {
var statearr_30776_30825 = state_30761__$1;
(statearr_30776_30825[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (6))){
var inst_30692 = (state_30761[(8)]);
var inst_30742 = (state_30761[(11)]);
var inst_30740 = (state_30761[(7)]);
var inst_30740__$1 = topic_fn.call(null,inst_30692);
var inst_30741 = cljs.core.deref.call(null,mults);
var inst_30742__$1 = cljs.core.get.call(null,inst_30741,inst_30740__$1);
var state_30761__$1 = (function (){var statearr_30777 = state_30761;
(statearr_30777[(11)] = inst_30742__$1);

(statearr_30777[(7)] = inst_30740__$1);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30742__$1)){
var statearr_30778_30826 = state_30761__$1;
(statearr_30778_30826[(1)] = (19));

} else {
var statearr_30779_30827 = state_30761__$1;
(statearr_30779_30827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (25))){
var inst_30751 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
var statearr_30780_30828 = state_30761__$1;
(statearr_30780_30828[(2)] = inst_30751);

(statearr_30780_30828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (17))){
var inst_30716 = (state_30761[(10)]);
var inst_30725 = cljs.core.first.call(null,inst_30716);
var inst_30726 = cljs.core.async.muxch_STAR_.call(null,inst_30725);
var inst_30727 = cljs.core.async.close_BANG_.call(null,inst_30726);
var inst_30728 = cljs.core.next.call(null,inst_30716);
var inst_30702 = inst_30728;
var inst_30703 = null;
var inst_30704 = (0);
var inst_30705 = (0);
var state_30761__$1 = (function (){var statearr_30781 = state_30761;
(statearr_30781[(12)] = inst_30704);

(statearr_30781[(13)] = inst_30702);

(statearr_30781[(14)] = inst_30727);

(statearr_30781[(15)] = inst_30703);

(statearr_30781[(16)] = inst_30705);

return statearr_30781;
})();
var statearr_30782_30829 = state_30761__$1;
(statearr_30782_30829[(2)] = null);

(statearr_30782_30829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (3))){
var inst_30759 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30761__$1,inst_30759);
} else {
if((state_val_30762 === (12))){
var inst_30736 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
var statearr_30783_30830 = state_30761__$1;
(statearr_30783_30830[(2)] = inst_30736);

(statearr_30783_30830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (2))){
var state_30761__$1 = state_30761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30761__$1,(4),ch);
} else {
if((state_val_30762 === (23))){
var state_30761__$1 = state_30761;
var statearr_30784_30831 = state_30761__$1;
(statearr_30784_30831[(2)] = null);

(statearr_30784_30831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (19))){
var inst_30692 = (state_30761[(8)]);
var inst_30742 = (state_30761[(11)]);
var inst_30744 = cljs.core.async.muxch_STAR_.call(null,inst_30742);
var state_30761__$1 = state_30761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30761__$1,(22),inst_30744,inst_30692);
} else {
if((state_val_30762 === (11))){
var inst_30702 = (state_30761[(13)]);
var inst_30716 = (state_30761[(10)]);
var inst_30716__$1 = cljs.core.seq.call(null,inst_30702);
var state_30761__$1 = (function (){var statearr_30785 = state_30761;
(statearr_30785[(10)] = inst_30716__$1);

return statearr_30785;
})();
if(inst_30716__$1){
var statearr_30786_30832 = state_30761__$1;
(statearr_30786_30832[(1)] = (13));

} else {
var statearr_30787_30833 = state_30761__$1;
(statearr_30787_30833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (9))){
var inst_30738 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
var statearr_30788_30834 = state_30761__$1;
(statearr_30788_30834[(2)] = inst_30738);

(statearr_30788_30834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (5))){
var inst_30699 = cljs.core.deref.call(null,mults);
var inst_30700 = cljs.core.vals.call(null,inst_30699);
var inst_30701 = cljs.core.seq.call(null,inst_30700);
var inst_30702 = inst_30701;
var inst_30703 = null;
var inst_30704 = (0);
var inst_30705 = (0);
var state_30761__$1 = (function (){var statearr_30789 = state_30761;
(statearr_30789[(12)] = inst_30704);

(statearr_30789[(13)] = inst_30702);

(statearr_30789[(15)] = inst_30703);

(statearr_30789[(16)] = inst_30705);

return statearr_30789;
})();
var statearr_30790_30835 = state_30761__$1;
(statearr_30790_30835[(2)] = null);

(statearr_30790_30835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (14))){
var state_30761__$1 = state_30761;
var statearr_30794_30836 = state_30761__$1;
(statearr_30794_30836[(2)] = null);

(statearr_30794_30836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (16))){
var inst_30716 = (state_30761[(10)]);
var inst_30720 = cljs.core.chunk_first.call(null,inst_30716);
var inst_30721 = cljs.core.chunk_rest.call(null,inst_30716);
var inst_30722 = cljs.core.count.call(null,inst_30720);
var inst_30702 = inst_30721;
var inst_30703 = inst_30720;
var inst_30704 = inst_30722;
var inst_30705 = (0);
var state_30761__$1 = (function (){var statearr_30795 = state_30761;
(statearr_30795[(12)] = inst_30704);

(statearr_30795[(13)] = inst_30702);

(statearr_30795[(15)] = inst_30703);

(statearr_30795[(16)] = inst_30705);

return statearr_30795;
})();
var statearr_30796_30837 = state_30761__$1;
(statearr_30796_30837[(2)] = null);

(statearr_30796_30837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (10))){
var inst_30704 = (state_30761[(12)]);
var inst_30702 = (state_30761[(13)]);
var inst_30703 = (state_30761[(15)]);
var inst_30705 = (state_30761[(16)]);
var inst_30710 = cljs.core._nth.call(null,inst_30703,inst_30705);
var inst_30711 = cljs.core.async.muxch_STAR_.call(null,inst_30710);
var inst_30712 = cljs.core.async.close_BANG_.call(null,inst_30711);
var inst_30713 = (inst_30705 + (1));
var tmp30791 = inst_30704;
var tmp30792 = inst_30702;
var tmp30793 = inst_30703;
var inst_30702__$1 = tmp30792;
var inst_30703__$1 = tmp30793;
var inst_30704__$1 = tmp30791;
var inst_30705__$1 = inst_30713;
var state_30761__$1 = (function (){var statearr_30797 = state_30761;
(statearr_30797[(17)] = inst_30712);

(statearr_30797[(12)] = inst_30704__$1);

(statearr_30797[(13)] = inst_30702__$1);

(statearr_30797[(15)] = inst_30703__$1);

(statearr_30797[(16)] = inst_30705__$1);

return statearr_30797;
})();
var statearr_30798_30838 = state_30761__$1;
(statearr_30798_30838[(2)] = null);

(statearr_30798_30838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (18))){
var inst_30731 = (state_30761[(2)]);
var state_30761__$1 = state_30761;
var statearr_30799_30839 = state_30761__$1;
(statearr_30799_30839[(2)] = inst_30731);

(statearr_30799_30839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30762 === (8))){
var inst_30704 = (state_30761[(12)]);
var inst_30705 = (state_30761[(16)]);
var inst_30707 = (inst_30705 < inst_30704);
var inst_30708 = inst_30707;
var state_30761__$1 = state_30761;
if(cljs.core.truth_(inst_30708)){
var statearr_30800_30840 = state_30761__$1;
(statearr_30800_30840[(1)] = (10));

} else {
var statearr_30801_30841 = state_30761__$1;
(statearr_30801_30841[(1)] = (11));

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
});})(c__20078__auto___30813,mults,ensure_mult,p))
;
return ((function (switch__19966__auto__,c__20078__auto___30813,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_30805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30805[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_30805[(1)] = (1));

return statearr_30805;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_30761){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_30761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e30806){if((e30806 instanceof Object)){
var ex__19970__auto__ = e30806;
var statearr_30807_30842 = state_30761;
(statearr_30807_30842[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30843 = state_30761;
state_30761 = G__30843;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_30761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_30761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___30813,mults,ensure_mult,p))
})();
var state__20080__auto__ = (function (){var statearr_30808 = f__20079__auto__.call(null);
(statearr_30808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___30813);

return statearr_30808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___30813,mults,ensure_mult,p))
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
var args30844 = [];
var len__17885__auto___30847 = arguments.length;
var i__17886__auto___30848 = (0);
while(true){
if((i__17886__auto___30848 < len__17885__auto___30847)){
args30844.push((arguments[i__17886__auto___30848]));

var G__30849 = (i__17886__auto___30848 + (1));
i__17886__auto___30848 = G__30849;
continue;
} else {
}
break;
}

var G__30846 = args30844.length;
switch (G__30846) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30844.length)].join('')));

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
var args30851 = [];
var len__17885__auto___30854 = arguments.length;
var i__17886__auto___30855 = (0);
while(true){
if((i__17886__auto___30855 < len__17885__auto___30854)){
args30851.push((arguments[i__17886__auto___30855]));

var G__30856 = (i__17886__auto___30855 + (1));
i__17886__auto___30855 = G__30856;
continue;
} else {
}
break;
}

var G__30853 = args30851.length;
switch (G__30853) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30851.length)].join('')));

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
var args30858 = [];
var len__17885__auto___30929 = arguments.length;
var i__17886__auto___30930 = (0);
while(true){
if((i__17886__auto___30930 < len__17885__auto___30929)){
args30858.push((arguments[i__17886__auto___30930]));

var G__30931 = (i__17886__auto___30930 + (1));
i__17886__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var G__30860 = args30858.length;
switch (G__30860) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30858.length)].join('')));

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
var c__20078__auto___30933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30899){
var state_val_30900 = (state_30899[(1)]);
if((state_val_30900 === (7))){
var state_30899__$1 = state_30899;
var statearr_30901_30934 = state_30899__$1;
(statearr_30901_30934[(2)] = null);

(statearr_30901_30934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (1))){
var state_30899__$1 = state_30899;
var statearr_30902_30935 = state_30899__$1;
(statearr_30902_30935[(2)] = null);

(statearr_30902_30935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (4))){
var inst_30863 = (state_30899[(7)]);
var inst_30865 = (inst_30863 < cnt);
var state_30899__$1 = state_30899;
if(cljs.core.truth_(inst_30865)){
var statearr_30903_30936 = state_30899__$1;
(statearr_30903_30936[(1)] = (6));

} else {
var statearr_30904_30937 = state_30899__$1;
(statearr_30904_30937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (15))){
var inst_30895 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30905_30938 = state_30899__$1;
(statearr_30905_30938[(2)] = inst_30895);

(statearr_30905_30938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (13))){
var inst_30888 = cljs.core.async.close_BANG_.call(null,out);
var state_30899__$1 = state_30899;
var statearr_30906_30939 = state_30899__$1;
(statearr_30906_30939[(2)] = inst_30888);

(statearr_30906_30939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (6))){
var state_30899__$1 = state_30899;
var statearr_30907_30940 = state_30899__$1;
(statearr_30907_30940[(2)] = null);

(statearr_30907_30940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (3))){
var inst_30897 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30899__$1,inst_30897);
} else {
if((state_val_30900 === (12))){
var inst_30885 = (state_30899[(8)]);
var inst_30885__$1 = (state_30899[(2)]);
var inst_30886 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30885__$1);
var state_30899__$1 = (function (){var statearr_30908 = state_30899;
(statearr_30908[(8)] = inst_30885__$1);

return statearr_30908;
})();
if(cljs.core.truth_(inst_30886)){
var statearr_30909_30941 = state_30899__$1;
(statearr_30909_30941[(1)] = (13));

} else {
var statearr_30910_30942 = state_30899__$1;
(statearr_30910_30942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (2))){
var inst_30862 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30863 = (0);
var state_30899__$1 = (function (){var statearr_30911 = state_30899;
(statearr_30911[(9)] = inst_30862);

(statearr_30911[(7)] = inst_30863);

return statearr_30911;
})();
var statearr_30912_30943 = state_30899__$1;
(statearr_30912_30943[(2)] = null);

(statearr_30912_30943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (11))){
var inst_30863 = (state_30899[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30899,(10),Object,null,(9));
var inst_30872 = chs__$1.call(null,inst_30863);
var inst_30873 = done.call(null,inst_30863);
var inst_30874 = cljs.core.async.take_BANG_.call(null,inst_30872,inst_30873);
var state_30899__$1 = state_30899;
var statearr_30913_30944 = state_30899__$1;
(statearr_30913_30944[(2)] = inst_30874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (9))){
var inst_30863 = (state_30899[(7)]);
var inst_30876 = (state_30899[(2)]);
var inst_30877 = (inst_30863 + (1));
var inst_30863__$1 = inst_30877;
var state_30899__$1 = (function (){var statearr_30914 = state_30899;
(statearr_30914[(10)] = inst_30876);

(statearr_30914[(7)] = inst_30863__$1);

return statearr_30914;
})();
var statearr_30915_30945 = state_30899__$1;
(statearr_30915_30945[(2)] = null);

(statearr_30915_30945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (5))){
var inst_30883 = (state_30899[(2)]);
var state_30899__$1 = (function (){var statearr_30916 = state_30899;
(statearr_30916[(11)] = inst_30883);

return statearr_30916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30899__$1,(12),dchan);
} else {
if((state_val_30900 === (14))){
var inst_30885 = (state_30899[(8)]);
var inst_30890 = cljs.core.apply.call(null,f,inst_30885);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30899__$1,(16),out,inst_30890);
} else {
if((state_val_30900 === (16))){
var inst_30892 = (state_30899[(2)]);
var state_30899__$1 = (function (){var statearr_30917 = state_30899;
(statearr_30917[(12)] = inst_30892);

return statearr_30917;
})();
var statearr_30918_30946 = state_30899__$1;
(statearr_30918_30946[(2)] = null);

(statearr_30918_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (10))){
var inst_30867 = (state_30899[(2)]);
var inst_30868 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30899__$1 = (function (){var statearr_30919 = state_30899;
(statearr_30919[(13)] = inst_30867);

return statearr_30919;
})();
var statearr_30920_30947 = state_30899__$1;
(statearr_30920_30947[(2)] = inst_30868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (8))){
var inst_30881 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30921_30948 = state_30899__$1;
(statearr_30921_30948[(2)] = inst_30881);

(statearr_30921_30948[(1)] = (5));


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
});})(c__20078__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19966__auto__,c__20078__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_30925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30925[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_30925[(1)] = (1));

return statearr_30925;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_30899){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_30899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e30926){if((e30926 instanceof Object)){
var ex__19970__auto__ = e30926;
var statearr_30927_30949 = state_30899;
(statearr_30927_30949[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30950 = state_30899;
state_30899 = G__30950;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_30899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_30899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20080__auto__ = (function (){var statearr_30928 = f__20079__auto__.call(null);
(statearr_30928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___30933);

return statearr_30928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___30933,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30952 = [];
var len__17885__auto___31008 = arguments.length;
var i__17886__auto___31009 = (0);
while(true){
if((i__17886__auto___31009 < len__17885__auto___31008)){
args30952.push((arguments[i__17886__auto___31009]));

var G__31010 = (i__17886__auto___31009 + (1));
i__17886__auto___31009 = G__31010;
continue;
} else {
}
break;
}

var G__30954 = args30952.length;
switch (G__30954) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30952.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___31012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___31012,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___31012,out){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (7))){
var inst_30963 = (state_30984[(7)]);
var inst_30964 = (state_30984[(8)]);
var inst_30963__$1 = (state_30984[(2)]);
var inst_30964__$1 = cljs.core.nth.call(null,inst_30963__$1,(0),null);
var inst_30965 = cljs.core.nth.call(null,inst_30963__$1,(1),null);
var inst_30966 = (inst_30964__$1 == null);
var state_30984__$1 = (function (){var statearr_30986 = state_30984;
(statearr_30986[(7)] = inst_30963__$1);

(statearr_30986[(8)] = inst_30964__$1);

(statearr_30986[(9)] = inst_30965);

return statearr_30986;
})();
if(cljs.core.truth_(inst_30966)){
var statearr_30987_31013 = state_30984__$1;
(statearr_30987_31013[(1)] = (8));

} else {
var statearr_30988_31014 = state_30984__$1;
(statearr_30988_31014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (1))){
var inst_30955 = cljs.core.vec.call(null,chs);
var inst_30956 = inst_30955;
var state_30984__$1 = (function (){var statearr_30989 = state_30984;
(statearr_30989[(10)] = inst_30956);

return statearr_30989;
})();
var statearr_30990_31015 = state_30984__$1;
(statearr_30990_31015[(2)] = null);

(statearr_30990_31015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (4))){
var inst_30956 = (state_30984[(10)]);
var state_30984__$1 = state_30984;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30984__$1,(7),inst_30956);
} else {
if((state_val_30985 === (6))){
var inst_30980 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30991_31016 = state_30984__$1;
(statearr_30991_31016[(2)] = inst_30980);

(statearr_30991_31016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (3))){
var inst_30982 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else {
if((state_val_30985 === (2))){
var inst_30956 = (state_30984[(10)]);
var inst_30958 = cljs.core.count.call(null,inst_30956);
var inst_30959 = (inst_30958 > (0));
var state_30984__$1 = state_30984;
if(cljs.core.truth_(inst_30959)){
var statearr_30993_31017 = state_30984__$1;
(statearr_30993_31017[(1)] = (4));

} else {
var statearr_30994_31018 = state_30984__$1;
(statearr_30994_31018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (11))){
var inst_30956 = (state_30984[(10)]);
var inst_30973 = (state_30984[(2)]);
var tmp30992 = inst_30956;
var inst_30956__$1 = tmp30992;
var state_30984__$1 = (function (){var statearr_30995 = state_30984;
(statearr_30995[(10)] = inst_30956__$1);

(statearr_30995[(11)] = inst_30973);

return statearr_30995;
})();
var statearr_30996_31019 = state_30984__$1;
(statearr_30996_31019[(2)] = null);

(statearr_30996_31019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (9))){
var inst_30964 = (state_30984[(8)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30984__$1,(11),out,inst_30964);
} else {
if((state_val_30985 === (5))){
var inst_30978 = cljs.core.async.close_BANG_.call(null,out);
var state_30984__$1 = state_30984;
var statearr_30997_31020 = state_30984__$1;
(statearr_30997_31020[(2)] = inst_30978);

(statearr_30997_31020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (10))){
var inst_30976 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30998_31021 = state_30984__$1;
(statearr_30998_31021[(2)] = inst_30976);

(statearr_30998_31021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (8))){
var inst_30963 = (state_30984[(7)]);
var inst_30964 = (state_30984[(8)]);
var inst_30965 = (state_30984[(9)]);
var inst_30956 = (state_30984[(10)]);
var inst_30968 = (function (){var cs = inst_30956;
var vec__30961 = inst_30963;
var v = inst_30964;
var c = inst_30965;
return ((function (cs,vec__30961,v,c,inst_30963,inst_30964,inst_30965,inst_30956,state_val_30985,c__20078__auto___31012,out){
return (function (p1__30951_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30951_SHARP_);
});
;})(cs,vec__30961,v,c,inst_30963,inst_30964,inst_30965,inst_30956,state_val_30985,c__20078__auto___31012,out))
})();
var inst_30969 = cljs.core.filterv.call(null,inst_30968,inst_30956);
var inst_30956__$1 = inst_30969;
var state_30984__$1 = (function (){var statearr_30999 = state_30984;
(statearr_30999[(10)] = inst_30956__$1);

return statearr_30999;
})();
var statearr_31000_31022 = state_30984__$1;
(statearr_31000_31022[(2)] = null);

(statearr_31000_31022[(1)] = (2));


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
});})(c__20078__auto___31012,out))
;
return ((function (switch__19966__auto__,c__20078__auto___31012,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_31004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31004[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_31004[(1)] = (1));

return statearr_31004;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_30984){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_30984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31005){if((e31005 instanceof Object)){
var ex__19970__auto__ = e31005;
var statearr_31006_31023 = state_30984;
(statearr_31006_31023[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31024 = state_30984;
state_30984 = G__31024;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___31012,out))
})();
var state__20080__auto__ = (function (){var statearr_31007 = f__20079__auto__.call(null);
(statearr_31007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___31012);

return statearr_31007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___31012,out))
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
var args31025 = [];
var len__17885__auto___31074 = arguments.length;
var i__17886__auto___31075 = (0);
while(true){
if((i__17886__auto___31075 < len__17885__auto___31074)){
args31025.push((arguments[i__17886__auto___31075]));

var G__31076 = (i__17886__auto___31075 + (1));
i__17886__auto___31075 = G__31076;
continue;
} else {
}
break;
}

var G__31027 = args31025.length;
switch (G__31027) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31025.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___31078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___31078,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___31078,out){
return (function (state_31051){
var state_val_31052 = (state_31051[(1)]);
if((state_val_31052 === (7))){
var inst_31033 = (state_31051[(7)]);
var inst_31033__$1 = (state_31051[(2)]);
var inst_31034 = (inst_31033__$1 == null);
var inst_31035 = cljs.core.not.call(null,inst_31034);
var state_31051__$1 = (function (){var statearr_31053 = state_31051;
(statearr_31053[(7)] = inst_31033__$1);

return statearr_31053;
})();
if(inst_31035){
var statearr_31054_31079 = state_31051__$1;
(statearr_31054_31079[(1)] = (8));

} else {
var statearr_31055_31080 = state_31051__$1;
(statearr_31055_31080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (1))){
var inst_31028 = (0);
var state_31051__$1 = (function (){var statearr_31056 = state_31051;
(statearr_31056[(8)] = inst_31028);

return statearr_31056;
})();
var statearr_31057_31081 = state_31051__$1;
(statearr_31057_31081[(2)] = null);

(statearr_31057_31081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (4))){
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31051__$1,(7),ch);
} else {
if((state_val_31052 === (6))){
var inst_31046 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31058_31082 = state_31051__$1;
(statearr_31058_31082[(2)] = inst_31046);

(statearr_31058_31082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (3))){
var inst_31048 = (state_31051[(2)]);
var inst_31049 = cljs.core.async.close_BANG_.call(null,out);
var state_31051__$1 = (function (){var statearr_31059 = state_31051;
(statearr_31059[(9)] = inst_31048);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31051__$1,inst_31049);
} else {
if((state_val_31052 === (2))){
var inst_31028 = (state_31051[(8)]);
var inst_31030 = (inst_31028 < n);
var state_31051__$1 = state_31051;
if(cljs.core.truth_(inst_31030)){
var statearr_31060_31083 = state_31051__$1;
(statearr_31060_31083[(1)] = (4));

} else {
var statearr_31061_31084 = state_31051__$1;
(statearr_31061_31084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (11))){
var inst_31028 = (state_31051[(8)]);
var inst_31038 = (state_31051[(2)]);
var inst_31039 = (inst_31028 + (1));
var inst_31028__$1 = inst_31039;
var state_31051__$1 = (function (){var statearr_31062 = state_31051;
(statearr_31062[(10)] = inst_31038);

(statearr_31062[(8)] = inst_31028__$1);

return statearr_31062;
})();
var statearr_31063_31085 = state_31051__$1;
(statearr_31063_31085[(2)] = null);

(statearr_31063_31085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (9))){
var state_31051__$1 = state_31051;
var statearr_31064_31086 = state_31051__$1;
(statearr_31064_31086[(2)] = null);

(statearr_31064_31086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (5))){
var state_31051__$1 = state_31051;
var statearr_31065_31087 = state_31051__$1;
(statearr_31065_31087[(2)] = null);

(statearr_31065_31087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (10))){
var inst_31043 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31066_31088 = state_31051__$1;
(statearr_31066_31088[(2)] = inst_31043);

(statearr_31066_31088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (8))){
var inst_31033 = (state_31051[(7)]);
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31051__$1,(11),out,inst_31033);
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
});})(c__20078__auto___31078,out))
;
return ((function (switch__19966__auto__,c__20078__auto___31078,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_31070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31070[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_31070[(1)] = (1));

return statearr_31070;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_31051){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_31051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31071){if((e31071 instanceof Object)){
var ex__19970__auto__ = e31071;
var statearr_31072_31089 = state_31051;
(statearr_31072_31089[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31090 = state_31051;
state_31051 = G__31090;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_31051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_31051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___31078,out))
})();
var state__20080__auto__ = (function (){var statearr_31073 = f__20079__auto__.call(null);
(statearr_31073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___31078);

return statearr_31073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___31078,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31098 = (function (map_LT_,f,ch,meta31099){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31099 = meta31099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31100,meta31099__$1){
var self__ = this;
var _31100__$1 = this;
return (new cljs.core.async.t_cljs$core$async31098(self__.map_LT_,self__.f,self__.ch,meta31099__$1));
});

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31100){
var self__ = this;
var _31100__$1 = this;
return self__.meta31099;
});

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31101 = (function (map_LT_,f,ch,meta31099,_,fn1,meta31102){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31099 = meta31099;
this._ = _;
this.fn1 = fn1;
this.meta31102 = meta31102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31103,meta31102__$1){
var self__ = this;
var _31103__$1 = this;
return (new cljs.core.async.t_cljs$core$async31101(self__.map_LT_,self__.f,self__.ch,self__.meta31099,self__._,self__.fn1,meta31102__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31103){
var self__ = this;
var _31103__$1 = this;
return self__.meta31102;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31091_SHARP_){
return f1.call(null,(((p1__31091_SHARP_ == null))?null:self__.f.call(null,p1__31091_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31101.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31099","meta31099",311324001,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31098","cljs.core.async/t_cljs$core$async31098",-1786186998,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31102","meta31102",-706429532,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31101";

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async31101");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31101 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31101(map_LT___$1,f__$1,ch__$1,meta31099__$1,___$2,fn1__$1,meta31102){
return (new cljs.core.async.t_cljs$core$async31101(map_LT___$1,f__$1,ch__$1,meta31099__$1,___$2,fn1__$1,meta31102));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31101(self__.map_LT_,self__.f,self__.ch,self__.meta31099,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31099","meta31099",311324001,null)], null);
});

cljs.core.async.t_cljs$core$async31098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31098";

cljs.core.async.t_cljs$core$async31098.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async31098");
});

cljs.core.async.__GT_t_cljs$core$async31098 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31098(map_LT___$1,f__$1,ch__$1,meta31099){
return (new cljs.core.async.t_cljs$core$async31098(map_LT___$1,f__$1,ch__$1,meta31099));
});

}

return (new cljs.core.async.t_cljs$core$async31098(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31107 = (function (map_GT_,f,ch,meta31108){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31108 = meta31108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31109,meta31108__$1){
var self__ = this;
var _31109__$1 = this;
return (new cljs.core.async.t_cljs$core$async31107(self__.map_GT_,self__.f,self__.ch,meta31108__$1));
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31109){
var self__ = this;
var _31109__$1 = this;
return self__.meta31108;
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31108","meta31108",-918816022,null)], null);
});

cljs.core.async.t_cljs$core$async31107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31107";

cljs.core.async.t_cljs$core$async31107.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async31107");
});

cljs.core.async.__GT_t_cljs$core$async31107 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31107(map_GT___$1,f__$1,ch__$1,meta31108){
return (new cljs.core.async.t_cljs$core$async31107(map_GT___$1,f__$1,ch__$1,meta31108));
});

}

return (new cljs.core.async.t_cljs$core$async31107(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31113 = (function (filter_GT_,p,ch,meta31114){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31114 = meta31114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31115,meta31114__$1){
var self__ = this;
var _31115__$1 = this;
return (new cljs.core.async.t_cljs$core$async31113(self__.filter_GT_,self__.p,self__.ch,meta31114__$1));
});

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31115){
var self__ = this;
var _31115__$1 = this;
return self__.meta31114;
});

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31114","meta31114",802595479,null)], null);
});

cljs.core.async.t_cljs$core$async31113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31113";

cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorPrWriter = (function (this__17425__auto__,writer__17426__auto__,opt__17427__auto__){
return cljs.core._write.call(null,writer__17426__auto__,"cljs.core.async/t_cljs$core$async31113");
});

cljs.core.async.__GT_t_cljs$core$async31113 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31113(filter_GT___$1,p__$1,ch__$1,meta31114){
return (new cljs.core.async.t_cljs$core$async31113(filter_GT___$1,p__$1,ch__$1,meta31114));
});

}

return (new cljs.core.async.t_cljs$core$async31113(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31116 = [];
var len__17885__auto___31160 = arguments.length;
var i__17886__auto___31161 = (0);
while(true){
if((i__17886__auto___31161 < len__17885__auto___31160)){
args31116.push((arguments[i__17886__auto___31161]));

var G__31162 = (i__17886__auto___31161 + (1));
i__17886__auto___31161 = G__31162;
continue;
} else {
}
break;
}

var G__31118 = args31116.length;
switch (G__31118) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31116.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___31164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___31164,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___31164,out){
return (function (state_31139){
var state_val_31140 = (state_31139[(1)]);
if((state_val_31140 === (7))){
var inst_31135 = (state_31139[(2)]);
var state_31139__$1 = state_31139;
var statearr_31141_31165 = state_31139__$1;
(statearr_31141_31165[(2)] = inst_31135);

(statearr_31141_31165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (1))){
var state_31139__$1 = state_31139;
var statearr_31142_31166 = state_31139__$1;
(statearr_31142_31166[(2)] = null);

(statearr_31142_31166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (4))){
var inst_31121 = (state_31139[(7)]);
var inst_31121__$1 = (state_31139[(2)]);
var inst_31122 = (inst_31121__$1 == null);
var state_31139__$1 = (function (){var statearr_31143 = state_31139;
(statearr_31143[(7)] = inst_31121__$1);

return statearr_31143;
})();
if(cljs.core.truth_(inst_31122)){
var statearr_31144_31167 = state_31139__$1;
(statearr_31144_31167[(1)] = (5));

} else {
var statearr_31145_31168 = state_31139__$1;
(statearr_31145_31168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (6))){
var inst_31121 = (state_31139[(7)]);
var inst_31126 = p.call(null,inst_31121);
var state_31139__$1 = state_31139;
if(cljs.core.truth_(inst_31126)){
var statearr_31146_31169 = state_31139__$1;
(statearr_31146_31169[(1)] = (8));

} else {
var statearr_31147_31170 = state_31139__$1;
(statearr_31147_31170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (3))){
var inst_31137 = (state_31139[(2)]);
var state_31139__$1 = state_31139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31139__$1,inst_31137);
} else {
if((state_val_31140 === (2))){
var state_31139__$1 = state_31139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31139__$1,(4),ch);
} else {
if((state_val_31140 === (11))){
var inst_31129 = (state_31139[(2)]);
var state_31139__$1 = state_31139;
var statearr_31148_31171 = state_31139__$1;
(statearr_31148_31171[(2)] = inst_31129);

(statearr_31148_31171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (9))){
var state_31139__$1 = state_31139;
var statearr_31149_31172 = state_31139__$1;
(statearr_31149_31172[(2)] = null);

(statearr_31149_31172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (5))){
var inst_31124 = cljs.core.async.close_BANG_.call(null,out);
var state_31139__$1 = state_31139;
var statearr_31150_31173 = state_31139__$1;
(statearr_31150_31173[(2)] = inst_31124);

(statearr_31150_31173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (10))){
var inst_31132 = (state_31139[(2)]);
var state_31139__$1 = (function (){var statearr_31151 = state_31139;
(statearr_31151[(8)] = inst_31132);

return statearr_31151;
})();
var statearr_31152_31174 = state_31139__$1;
(statearr_31152_31174[(2)] = null);

(statearr_31152_31174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31140 === (8))){
var inst_31121 = (state_31139[(7)]);
var state_31139__$1 = state_31139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31139__$1,(11),out,inst_31121);
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
});})(c__20078__auto___31164,out))
;
return ((function (switch__19966__auto__,c__20078__auto___31164,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_31156 = [null,null,null,null,null,null,null,null,null];
(statearr_31156[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_31156[(1)] = (1));

return statearr_31156;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_31139){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_31139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31157){if((e31157 instanceof Object)){
var ex__19970__auto__ = e31157;
var statearr_31158_31175 = state_31139;
(statearr_31158_31175[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31176 = state_31139;
state_31139 = G__31176;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_31139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_31139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___31164,out))
})();
var state__20080__auto__ = (function (){var statearr_31159 = f__20079__auto__.call(null);
(statearr_31159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___31164);

return statearr_31159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___31164,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31177 = [];
var len__17885__auto___31180 = arguments.length;
var i__17886__auto___31181 = (0);
while(true){
if((i__17886__auto___31181 < len__17885__auto___31180)){
args31177.push((arguments[i__17886__auto___31181]));

var G__31182 = (i__17886__auto___31181 + (1));
i__17886__auto___31181 = G__31182;
continue;
} else {
}
break;
}

var G__31179 = args31177.length;
switch (G__31179) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31177.length)].join('')));

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
return (function (state_31349){
var state_val_31350 = (state_31349[(1)]);
if((state_val_31350 === (7))){
var inst_31345 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31351_31392 = state_31349__$1;
(statearr_31351_31392[(2)] = inst_31345);

(statearr_31351_31392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (20))){
var inst_31315 = (state_31349[(7)]);
var inst_31326 = (state_31349[(2)]);
var inst_31327 = cljs.core.next.call(null,inst_31315);
var inst_31301 = inst_31327;
var inst_31302 = null;
var inst_31303 = (0);
var inst_31304 = (0);
var state_31349__$1 = (function (){var statearr_31352 = state_31349;
(statearr_31352[(8)] = inst_31302);

(statearr_31352[(9)] = inst_31301);

(statearr_31352[(10)] = inst_31326);

(statearr_31352[(11)] = inst_31303);

(statearr_31352[(12)] = inst_31304);

return statearr_31352;
})();
var statearr_31353_31393 = state_31349__$1;
(statearr_31353_31393[(2)] = null);

(statearr_31353_31393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (1))){
var state_31349__$1 = state_31349;
var statearr_31354_31394 = state_31349__$1;
(statearr_31354_31394[(2)] = null);

(statearr_31354_31394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (4))){
var inst_31290 = (state_31349[(13)]);
var inst_31290__$1 = (state_31349[(2)]);
var inst_31291 = (inst_31290__$1 == null);
var state_31349__$1 = (function (){var statearr_31355 = state_31349;
(statearr_31355[(13)] = inst_31290__$1);

return statearr_31355;
})();
if(cljs.core.truth_(inst_31291)){
var statearr_31356_31395 = state_31349__$1;
(statearr_31356_31395[(1)] = (5));

} else {
var statearr_31357_31396 = state_31349__$1;
(statearr_31357_31396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (15))){
var state_31349__$1 = state_31349;
var statearr_31361_31397 = state_31349__$1;
(statearr_31361_31397[(2)] = null);

(statearr_31361_31397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (21))){
var state_31349__$1 = state_31349;
var statearr_31362_31398 = state_31349__$1;
(statearr_31362_31398[(2)] = null);

(statearr_31362_31398[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (13))){
var inst_31302 = (state_31349[(8)]);
var inst_31301 = (state_31349[(9)]);
var inst_31303 = (state_31349[(11)]);
var inst_31304 = (state_31349[(12)]);
var inst_31311 = (state_31349[(2)]);
var inst_31312 = (inst_31304 + (1));
var tmp31358 = inst_31302;
var tmp31359 = inst_31301;
var tmp31360 = inst_31303;
var inst_31301__$1 = tmp31359;
var inst_31302__$1 = tmp31358;
var inst_31303__$1 = tmp31360;
var inst_31304__$1 = inst_31312;
var state_31349__$1 = (function (){var statearr_31363 = state_31349;
(statearr_31363[(8)] = inst_31302__$1);

(statearr_31363[(9)] = inst_31301__$1);

(statearr_31363[(11)] = inst_31303__$1);

(statearr_31363[(12)] = inst_31304__$1);

(statearr_31363[(14)] = inst_31311);

return statearr_31363;
})();
var statearr_31364_31399 = state_31349__$1;
(statearr_31364_31399[(2)] = null);

(statearr_31364_31399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (22))){
var state_31349__$1 = state_31349;
var statearr_31365_31400 = state_31349__$1;
(statearr_31365_31400[(2)] = null);

(statearr_31365_31400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (6))){
var inst_31290 = (state_31349[(13)]);
var inst_31299 = f.call(null,inst_31290);
var inst_31300 = cljs.core.seq.call(null,inst_31299);
var inst_31301 = inst_31300;
var inst_31302 = null;
var inst_31303 = (0);
var inst_31304 = (0);
var state_31349__$1 = (function (){var statearr_31366 = state_31349;
(statearr_31366[(8)] = inst_31302);

(statearr_31366[(9)] = inst_31301);

(statearr_31366[(11)] = inst_31303);

(statearr_31366[(12)] = inst_31304);

return statearr_31366;
})();
var statearr_31367_31401 = state_31349__$1;
(statearr_31367_31401[(2)] = null);

(statearr_31367_31401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (17))){
var inst_31315 = (state_31349[(7)]);
var inst_31319 = cljs.core.chunk_first.call(null,inst_31315);
var inst_31320 = cljs.core.chunk_rest.call(null,inst_31315);
var inst_31321 = cljs.core.count.call(null,inst_31319);
var inst_31301 = inst_31320;
var inst_31302 = inst_31319;
var inst_31303 = inst_31321;
var inst_31304 = (0);
var state_31349__$1 = (function (){var statearr_31368 = state_31349;
(statearr_31368[(8)] = inst_31302);

(statearr_31368[(9)] = inst_31301);

(statearr_31368[(11)] = inst_31303);

(statearr_31368[(12)] = inst_31304);

return statearr_31368;
})();
var statearr_31369_31402 = state_31349__$1;
(statearr_31369_31402[(2)] = null);

(statearr_31369_31402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (3))){
var inst_31347 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31349__$1,inst_31347);
} else {
if((state_val_31350 === (12))){
var inst_31335 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31370_31403 = state_31349__$1;
(statearr_31370_31403[(2)] = inst_31335);

(statearr_31370_31403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (2))){
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31349__$1,(4),in$);
} else {
if((state_val_31350 === (23))){
var inst_31343 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31371_31404 = state_31349__$1;
(statearr_31371_31404[(2)] = inst_31343);

(statearr_31371_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (19))){
var inst_31330 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31372_31405 = state_31349__$1;
(statearr_31372_31405[(2)] = inst_31330);

(statearr_31372_31405[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (11))){
var inst_31301 = (state_31349[(9)]);
var inst_31315 = (state_31349[(7)]);
var inst_31315__$1 = cljs.core.seq.call(null,inst_31301);
var state_31349__$1 = (function (){var statearr_31373 = state_31349;
(statearr_31373[(7)] = inst_31315__$1);

return statearr_31373;
})();
if(inst_31315__$1){
var statearr_31374_31406 = state_31349__$1;
(statearr_31374_31406[(1)] = (14));

} else {
var statearr_31375_31407 = state_31349__$1;
(statearr_31375_31407[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (9))){
var inst_31337 = (state_31349[(2)]);
var inst_31338 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31349__$1 = (function (){var statearr_31376 = state_31349;
(statearr_31376[(15)] = inst_31337);

return statearr_31376;
})();
if(cljs.core.truth_(inst_31338)){
var statearr_31377_31408 = state_31349__$1;
(statearr_31377_31408[(1)] = (21));

} else {
var statearr_31378_31409 = state_31349__$1;
(statearr_31378_31409[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (5))){
var inst_31293 = cljs.core.async.close_BANG_.call(null,out);
var state_31349__$1 = state_31349;
var statearr_31379_31410 = state_31349__$1;
(statearr_31379_31410[(2)] = inst_31293);

(statearr_31379_31410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (14))){
var inst_31315 = (state_31349[(7)]);
var inst_31317 = cljs.core.chunked_seq_QMARK_.call(null,inst_31315);
var state_31349__$1 = state_31349;
if(inst_31317){
var statearr_31380_31411 = state_31349__$1;
(statearr_31380_31411[(1)] = (17));

} else {
var statearr_31381_31412 = state_31349__$1;
(statearr_31381_31412[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (16))){
var inst_31333 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31382_31413 = state_31349__$1;
(statearr_31382_31413[(2)] = inst_31333);

(statearr_31382_31413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (10))){
var inst_31302 = (state_31349[(8)]);
var inst_31304 = (state_31349[(12)]);
var inst_31309 = cljs.core._nth.call(null,inst_31302,inst_31304);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31349__$1,(13),out,inst_31309);
} else {
if((state_val_31350 === (18))){
var inst_31315 = (state_31349[(7)]);
var inst_31324 = cljs.core.first.call(null,inst_31315);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31349__$1,(20),out,inst_31324);
} else {
if((state_val_31350 === (8))){
var inst_31303 = (state_31349[(11)]);
var inst_31304 = (state_31349[(12)]);
var inst_31306 = (inst_31304 < inst_31303);
var inst_31307 = inst_31306;
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31307)){
var statearr_31383_31414 = state_31349__$1;
(statearr_31383_31414[(1)] = (10));

} else {
var statearr_31384_31415 = state_31349__$1;
(statearr_31384_31415[(1)] = (11));

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
var statearr_31388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31388[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__);

(statearr_31388[(1)] = (1));

return statearr_31388;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1 = (function (state_31349){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_31349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31389){if((e31389 instanceof Object)){
var ex__19970__auto__ = e31389;
var statearr_31390_31416 = state_31349;
(statearr_31390_31416[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31417 = state_31349;
state_31349 = G__31417;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__ = function(state_31349){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1.call(this,state_31349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19967__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto__))
})();
var state__20080__auto__ = (function (){var statearr_31391 = f__20079__auto__.call(null);
(statearr_31391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto__);

return statearr_31391;
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
var args31418 = [];
var len__17885__auto___31421 = arguments.length;
var i__17886__auto___31422 = (0);
while(true){
if((i__17886__auto___31422 < len__17885__auto___31421)){
args31418.push((arguments[i__17886__auto___31422]));

var G__31423 = (i__17886__auto___31422 + (1));
i__17886__auto___31422 = G__31423;
continue;
} else {
}
break;
}

var G__31420 = args31418.length;
switch (G__31420) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31418.length)].join('')));

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
var args31425 = [];
var len__17885__auto___31428 = arguments.length;
var i__17886__auto___31429 = (0);
while(true){
if((i__17886__auto___31429 < len__17885__auto___31428)){
args31425.push((arguments[i__17886__auto___31429]));

var G__31430 = (i__17886__auto___31429 + (1));
i__17886__auto___31429 = G__31430;
continue;
} else {
}
break;
}

var G__31427 = args31425.length;
switch (G__31427) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31425.length)].join('')));

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
var args31432 = [];
var len__17885__auto___31483 = arguments.length;
var i__17886__auto___31484 = (0);
while(true){
if((i__17886__auto___31484 < len__17885__auto___31483)){
args31432.push((arguments[i__17886__auto___31484]));

var G__31485 = (i__17886__auto___31484 + (1));
i__17886__auto___31484 = G__31485;
continue;
} else {
}
break;
}

var G__31434 = args31432.length;
switch (G__31434) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31432.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___31487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___31487,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___31487,out){
return (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31453 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31460_31488 = state_31458__$1;
(statearr_31460_31488[(2)] = inst_31453);

(statearr_31460_31488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (1))){
var inst_31435 = null;
var state_31458__$1 = (function (){var statearr_31461 = state_31458;
(statearr_31461[(7)] = inst_31435);

return statearr_31461;
})();
var statearr_31462_31489 = state_31458__$1;
(statearr_31462_31489[(2)] = null);

(statearr_31462_31489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (4))){
var inst_31438 = (state_31458[(8)]);
var inst_31438__$1 = (state_31458[(2)]);
var inst_31439 = (inst_31438__$1 == null);
var inst_31440 = cljs.core.not.call(null,inst_31439);
var state_31458__$1 = (function (){var statearr_31463 = state_31458;
(statearr_31463[(8)] = inst_31438__$1);

return statearr_31463;
})();
if(inst_31440){
var statearr_31464_31490 = state_31458__$1;
(statearr_31464_31490[(1)] = (5));

} else {
var statearr_31465_31491 = state_31458__$1;
(statearr_31465_31491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (6))){
var state_31458__$1 = state_31458;
var statearr_31466_31492 = state_31458__$1;
(statearr_31466_31492[(2)] = null);

(statearr_31466_31492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (3))){
var inst_31455 = (state_31458[(2)]);
var inst_31456 = cljs.core.async.close_BANG_.call(null,out);
var state_31458__$1 = (function (){var statearr_31467 = state_31458;
(statearr_31467[(9)] = inst_31455);

return statearr_31467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (2))){
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31458__$1,(4),ch);
} else {
if((state_val_31459 === (11))){
var inst_31438 = (state_31458[(8)]);
var inst_31447 = (state_31458[(2)]);
var inst_31435 = inst_31438;
var state_31458__$1 = (function (){var statearr_31468 = state_31458;
(statearr_31468[(7)] = inst_31435);

(statearr_31468[(10)] = inst_31447);

return statearr_31468;
})();
var statearr_31469_31493 = state_31458__$1;
(statearr_31469_31493[(2)] = null);

(statearr_31469_31493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (9))){
var inst_31438 = (state_31458[(8)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31458__$1,(11),out,inst_31438);
} else {
if((state_val_31459 === (5))){
var inst_31435 = (state_31458[(7)]);
var inst_31438 = (state_31458[(8)]);
var inst_31442 = cljs.core._EQ_.call(null,inst_31438,inst_31435);
var state_31458__$1 = state_31458;
if(inst_31442){
var statearr_31471_31494 = state_31458__$1;
(statearr_31471_31494[(1)] = (8));

} else {
var statearr_31472_31495 = state_31458__$1;
(statearr_31472_31495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (10))){
var inst_31450 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31473_31496 = state_31458__$1;
(statearr_31473_31496[(2)] = inst_31450);

(statearr_31473_31496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (8))){
var inst_31435 = (state_31458[(7)]);
var tmp31470 = inst_31435;
var inst_31435__$1 = tmp31470;
var state_31458__$1 = (function (){var statearr_31474 = state_31458;
(statearr_31474[(7)] = inst_31435__$1);

return statearr_31474;
})();
var statearr_31475_31497 = state_31458__$1;
(statearr_31475_31497[(2)] = null);

(statearr_31475_31497[(1)] = (2));


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
});})(c__20078__auto___31487,out))
;
return ((function (switch__19966__auto__,c__20078__auto___31487,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_31479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31479[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_31479[(1)] = (1));

return statearr_31479;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_31458){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_31458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31480){if((e31480 instanceof Object)){
var ex__19970__auto__ = e31480;
var statearr_31481_31498 = state_31458;
(statearr_31481_31498[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31499 = state_31458;
state_31458 = G__31499;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___31487,out))
})();
var state__20080__auto__ = (function (){var statearr_31482 = f__20079__auto__.call(null);
(statearr_31482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___31487);

return statearr_31482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___31487,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31500 = [];
var len__17885__auto___31570 = arguments.length;
var i__17886__auto___31571 = (0);
while(true){
if((i__17886__auto___31571 < len__17885__auto___31570)){
args31500.push((arguments[i__17886__auto___31571]));

var G__31572 = (i__17886__auto___31571 + (1));
i__17886__auto___31571 = G__31572;
continue;
} else {
}
break;
}

var G__31502 = args31500.length;
switch (G__31502) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31500.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___31574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___31574,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___31574,out){
return (function (state_31540){
var state_val_31541 = (state_31540[(1)]);
if((state_val_31541 === (7))){
var inst_31536 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31542_31575 = state_31540__$1;
(statearr_31542_31575[(2)] = inst_31536);

(statearr_31542_31575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (1))){
var inst_31503 = (new Array(n));
var inst_31504 = inst_31503;
var inst_31505 = (0);
var state_31540__$1 = (function (){var statearr_31543 = state_31540;
(statearr_31543[(7)] = inst_31505);

(statearr_31543[(8)] = inst_31504);

return statearr_31543;
})();
var statearr_31544_31576 = state_31540__$1;
(statearr_31544_31576[(2)] = null);

(statearr_31544_31576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (4))){
var inst_31508 = (state_31540[(9)]);
var inst_31508__$1 = (state_31540[(2)]);
var inst_31509 = (inst_31508__$1 == null);
var inst_31510 = cljs.core.not.call(null,inst_31509);
var state_31540__$1 = (function (){var statearr_31545 = state_31540;
(statearr_31545[(9)] = inst_31508__$1);

return statearr_31545;
})();
if(inst_31510){
var statearr_31546_31577 = state_31540__$1;
(statearr_31546_31577[(1)] = (5));

} else {
var statearr_31547_31578 = state_31540__$1;
(statearr_31547_31578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (15))){
var inst_31530 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31548_31579 = state_31540__$1;
(statearr_31548_31579[(2)] = inst_31530);

(statearr_31548_31579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (13))){
var state_31540__$1 = state_31540;
var statearr_31549_31580 = state_31540__$1;
(statearr_31549_31580[(2)] = null);

(statearr_31549_31580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (6))){
var inst_31505 = (state_31540[(7)]);
var inst_31526 = (inst_31505 > (0));
var state_31540__$1 = state_31540;
if(cljs.core.truth_(inst_31526)){
var statearr_31550_31581 = state_31540__$1;
(statearr_31550_31581[(1)] = (12));

} else {
var statearr_31551_31582 = state_31540__$1;
(statearr_31551_31582[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (3))){
var inst_31538 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31540__$1,inst_31538);
} else {
if((state_val_31541 === (12))){
var inst_31504 = (state_31540[(8)]);
var inst_31528 = cljs.core.vec.call(null,inst_31504);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31540__$1,(15),out,inst_31528);
} else {
if((state_val_31541 === (2))){
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31540__$1,(4),ch);
} else {
if((state_val_31541 === (11))){
var inst_31520 = (state_31540[(2)]);
var inst_31521 = (new Array(n));
var inst_31504 = inst_31521;
var inst_31505 = (0);
var state_31540__$1 = (function (){var statearr_31552 = state_31540;
(statearr_31552[(7)] = inst_31505);

(statearr_31552[(10)] = inst_31520);

(statearr_31552[(8)] = inst_31504);

return statearr_31552;
})();
var statearr_31553_31583 = state_31540__$1;
(statearr_31553_31583[(2)] = null);

(statearr_31553_31583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (9))){
var inst_31504 = (state_31540[(8)]);
var inst_31518 = cljs.core.vec.call(null,inst_31504);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31540__$1,(11),out,inst_31518);
} else {
if((state_val_31541 === (5))){
var inst_31508 = (state_31540[(9)]);
var inst_31513 = (state_31540[(11)]);
var inst_31505 = (state_31540[(7)]);
var inst_31504 = (state_31540[(8)]);
var inst_31512 = (inst_31504[inst_31505] = inst_31508);
var inst_31513__$1 = (inst_31505 + (1));
var inst_31514 = (inst_31513__$1 < n);
var state_31540__$1 = (function (){var statearr_31554 = state_31540;
(statearr_31554[(12)] = inst_31512);

(statearr_31554[(11)] = inst_31513__$1);

return statearr_31554;
})();
if(cljs.core.truth_(inst_31514)){
var statearr_31555_31584 = state_31540__$1;
(statearr_31555_31584[(1)] = (8));

} else {
var statearr_31556_31585 = state_31540__$1;
(statearr_31556_31585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (14))){
var inst_31533 = (state_31540[(2)]);
var inst_31534 = cljs.core.async.close_BANG_.call(null,out);
var state_31540__$1 = (function (){var statearr_31558 = state_31540;
(statearr_31558[(13)] = inst_31533);

return statearr_31558;
})();
var statearr_31559_31586 = state_31540__$1;
(statearr_31559_31586[(2)] = inst_31534);

(statearr_31559_31586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (10))){
var inst_31524 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31560_31587 = state_31540__$1;
(statearr_31560_31587[(2)] = inst_31524);

(statearr_31560_31587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (8))){
var inst_31513 = (state_31540[(11)]);
var inst_31504 = (state_31540[(8)]);
var tmp31557 = inst_31504;
var inst_31504__$1 = tmp31557;
var inst_31505 = inst_31513;
var state_31540__$1 = (function (){var statearr_31561 = state_31540;
(statearr_31561[(7)] = inst_31505);

(statearr_31561[(8)] = inst_31504__$1);

return statearr_31561;
})();
var statearr_31562_31588 = state_31540__$1;
(statearr_31562_31588[(2)] = null);

(statearr_31562_31588[(1)] = (2));


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
});})(c__20078__auto___31574,out))
;
return ((function (switch__19966__auto__,c__20078__auto___31574,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_31566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31566[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_31566[(1)] = (1));

return statearr_31566;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_31540){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_31540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31567){if((e31567 instanceof Object)){
var ex__19970__auto__ = e31567;
var statearr_31568_31589 = state_31540;
(statearr_31568_31589[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31590 = state_31540;
state_31540 = G__31590;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_31540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_31540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___31574,out))
})();
var state__20080__auto__ = (function (){var statearr_31569 = f__20079__auto__.call(null);
(statearr_31569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___31574);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___31574,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31591 = [];
var len__17885__auto___31665 = arguments.length;
var i__17886__auto___31666 = (0);
while(true){
if((i__17886__auto___31666 < len__17885__auto___31665)){
args31591.push((arguments[i__17886__auto___31666]));

var G__31667 = (i__17886__auto___31666 + (1));
i__17886__auto___31666 = G__31667;
continue;
} else {
}
break;
}

var G__31593 = args31591.length;
switch (G__31593) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31591.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20078__auto___31669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20078__auto___31669,out){
return (function (){
var f__20079__auto__ = (function (){var switch__19966__auto__ = ((function (c__20078__auto___31669,out){
return (function (state_31635){
var state_val_31636 = (state_31635[(1)]);
if((state_val_31636 === (7))){
var inst_31631 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31637_31670 = state_31635__$1;
(statearr_31637_31670[(2)] = inst_31631);

(statearr_31637_31670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (1))){
var inst_31594 = [];
var inst_31595 = inst_31594;
var inst_31596 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31635__$1 = (function (){var statearr_31638 = state_31635;
(statearr_31638[(7)] = inst_31595);

(statearr_31638[(8)] = inst_31596);

return statearr_31638;
})();
var statearr_31639_31671 = state_31635__$1;
(statearr_31639_31671[(2)] = null);

(statearr_31639_31671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (4))){
var inst_31599 = (state_31635[(9)]);
var inst_31599__$1 = (state_31635[(2)]);
var inst_31600 = (inst_31599__$1 == null);
var inst_31601 = cljs.core.not.call(null,inst_31600);
var state_31635__$1 = (function (){var statearr_31640 = state_31635;
(statearr_31640[(9)] = inst_31599__$1);

return statearr_31640;
})();
if(inst_31601){
var statearr_31641_31672 = state_31635__$1;
(statearr_31641_31672[(1)] = (5));

} else {
var statearr_31642_31673 = state_31635__$1;
(statearr_31642_31673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (15))){
var inst_31625 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31643_31674 = state_31635__$1;
(statearr_31643_31674[(2)] = inst_31625);

(statearr_31643_31674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (13))){
var state_31635__$1 = state_31635;
var statearr_31644_31675 = state_31635__$1;
(statearr_31644_31675[(2)] = null);

(statearr_31644_31675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (6))){
var inst_31595 = (state_31635[(7)]);
var inst_31620 = inst_31595.length;
var inst_31621 = (inst_31620 > (0));
var state_31635__$1 = state_31635;
if(cljs.core.truth_(inst_31621)){
var statearr_31645_31676 = state_31635__$1;
(statearr_31645_31676[(1)] = (12));

} else {
var statearr_31646_31677 = state_31635__$1;
(statearr_31646_31677[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (3))){
var inst_31633 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31635__$1,inst_31633);
} else {
if((state_val_31636 === (12))){
var inst_31595 = (state_31635[(7)]);
var inst_31623 = cljs.core.vec.call(null,inst_31595);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31635__$1,(15),out,inst_31623);
} else {
if((state_val_31636 === (2))){
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31635__$1,(4),ch);
} else {
if((state_val_31636 === (11))){
var inst_31599 = (state_31635[(9)]);
var inst_31603 = (state_31635[(10)]);
var inst_31613 = (state_31635[(2)]);
var inst_31614 = [];
var inst_31615 = inst_31614.push(inst_31599);
var inst_31595 = inst_31614;
var inst_31596 = inst_31603;
var state_31635__$1 = (function (){var statearr_31647 = state_31635;
(statearr_31647[(7)] = inst_31595);

(statearr_31647[(11)] = inst_31615);

(statearr_31647[(8)] = inst_31596);

(statearr_31647[(12)] = inst_31613);

return statearr_31647;
})();
var statearr_31648_31678 = state_31635__$1;
(statearr_31648_31678[(2)] = null);

(statearr_31648_31678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (9))){
var inst_31595 = (state_31635[(7)]);
var inst_31611 = cljs.core.vec.call(null,inst_31595);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31635__$1,(11),out,inst_31611);
} else {
if((state_val_31636 === (5))){
var inst_31599 = (state_31635[(9)]);
var inst_31596 = (state_31635[(8)]);
var inst_31603 = (state_31635[(10)]);
var inst_31603__$1 = f.call(null,inst_31599);
var inst_31604 = cljs.core._EQ_.call(null,inst_31603__$1,inst_31596);
var inst_31605 = cljs.core.keyword_identical_QMARK_.call(null,inst_31596,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31606 = (inst_31604) || (inst_31605);
var state_31635__$1 = (function (){var statearr_31649 = state_31635;
(statearr_31649[(10)] = inst_31603__$1);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31606)){
var statearr_31650_31679 = state_31635__$1;
(statearr_31650_31679[(1)] = (8));

} else {
var statearr_31651_31680 = state_31635__$1;
(statearr_31651_31680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (14))){
var inst_31628 = (state_31635[(2)]);
var inst_31629 = cljs.core.async.close_BANG_.call(null,out);
var state_31635__$1 = (function (){var statearr_31653 = state_31635;
(statearr_31653[(13)] = inst_31628);

return statearr_31653;
})();
var statearr_31654_31681 = state_31635__$1;
(statearr_31654_31681[(2)] = inst_31629);

(statearr_31654_31681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (10))){
var inst_31618 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31655_31682 = state_31635__$1;
(statearr_31655_31682[(2)] = inst_31618);

(statearr_31655_31682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (8))){
var inst_31599 = (state_31635[(9)]);
var inst_31595 = (state_31635[(7)]);
var inst_31603 = (state_31635[(10)]);
var inst_31608 = inst_31595.push(inst_31599);
var tmp31652 = inst_31595;
var inst_31595__$1 = tmp31652;
var inst_31596 = inst_31603;
var state_31635__$1 = (function (){var statearr_31656 = state_31635;
(statearr_31656[(7)] = inst_31595__$1);

(statearr_31656[(8)] = inst_31596);

(statearr_31656[(14)] = inst_31608);

return statearr_31656;
})();
var statearr_31657_31683 = state_31635__$1;
(statearr_31657_31683[(2)] = null);

(statearr_31657_31683[(1)] = (2));


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
});})(c__20078__auto___31669,out))
;
return ((function (switch__19966__auto__,c__20078__auto___31669,out){
return (function() {
var cljs$core$async$state_machine__19967__auto__ = null;
var cljs$core$async$state_machine__19967__auto____0 = (function (){
var statearr_31661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31661[(0)] = cljs$core$async$state_machine__19967__auto__);

(statearr_31661[(1)] = (1));

return statearr_31661;
});
var cljs$core$async$state_machine__19967__auto____1 = (function (state_31635){
while(true){
var ret_value__19968__auto__ = (function (){try{while(true){
var result__19969__auto__ = switch__19966__auto__.call(null,state_31635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19969__auto__;
}
break;
}
}catch (e31662){if((e31662 instanceof Object)){
var ex__19970__auto__ = e31662;
var statearr_31663_31684 = state_31635;
(statearr_31663_31684[(5)] = ex__19970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31685 = state_31635;
state_31635 = G__31685;
continue;
} else {
return ret_value__19968__auto__;
}
break;
}
});
cljs$core$async$state_machine__19967__auto__ = function(state_31635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19967__auto____1.call(this,state_31635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19967__auto____0;
cljs$core$async$state_machine__19967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19967__auto____1;
return cljs$core$async$state_machine__19967__auto__;
})()
;})(switch__19966__auto__,c__20078__auto___31669,out))
})();
var state__20080__auto__ = (function (){var statearr_31664 = f__20079__auto__.call(null);
(statearr_31664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20078__auto___31669);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20080__auto__);
});})(c__20078__auto___31669,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map