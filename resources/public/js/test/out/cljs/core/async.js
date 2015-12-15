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
var args21865 = [];
var len__17887__auto___21871 = arguments.length;
var i__17888__auto___21872 = (0);
while(true){
if((i__17888__auto___21872 < len__17887__auto___21871)){
args21865.push((arguments[i__17888__auto___21872]));

var G__21873 = (i__17888__auto___21872 + (1));
i__17888__auto___21872 = G__21873;
continue;
} else {
}
break;
}

var G__21867 = args21865.length;
switch (G__21867) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21865.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21868 = (function (f,blockable,meta21869){
this.f = f;
this.blockable = blockable;
this.meta21869 = meta21869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21870,meta21869__$1){
var self__ = this;
var _21870__$1 = this;
return (new cljs.core.async.t_cljs$core$async21868(self__.f,self__.blockable,meta21869__$1));
});

cljs.core.async.t_cljs$core$async21868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21870){
var self__ = this;
var _21870__$1 = this;
return self__.meta21869;
});

cljs.core.async.t_cljs$core$async21868.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21869","meta21869",423001173,null)], null);
});

cljs.core.async.t_cljs$core$async21868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21868";

cljs.core.async.t_cljs$core$async21868.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async21868");
});

cljs.core.async.__GT_t_cljs$core$async21868 = (function cljs$core$async$__GT_t_cljs$core$async21868(f__$1,blockable__$1,meta21869){
return (new cljs.core.async.t_cljs$core$async21868(f__$1,blockable__$1,meta21869));
});

}

return (new cljs.core.async.t_cljs$core$async21868(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21877 = [];
var len__17887__auto___21880 = arguments.length;
var i__17888__auto___21881 = (0);
while(true){
if((i__17888__auto___21881 < len__17887__auto___21880)){
args21877.push((arguments[i__17888__auto___21881]));

var G__21882 = (i__17888__auto___21881 + (1));
i__17888__auto___21881 = G__21882;
continue;
} else {
}
break;
}

var G__21879 = args21877.length;
switch (G__21879) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21877.length)].join('')));

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
var args21884 = [];
var len__17887__auto___21887 = arguments.length;
var i__17888__auto___21888 = (0);
while(true){
if((i__17888__auto___21888 < len__17887__auto___21887)){
args21884.push((arguments[i__17888__auto___21888]));

var G__21889 = (i__17888__auto___21888 + (1));
i__17888__auto___21888 = G__21889;
continue;
} else {
}
break;
}

var G__21886 = args21884.length;
switch (G__21886) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21884.length)].join('')));

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
var args21891 = [];
var len__17887__auto___21894 = arguments.length;
var i__17888__auto___21895 = (0);
while(true){
if((i__17888__auto___21895 < len__17887__auto___21894)){
args21891.push((arguments[i__17888__auto___21895]));

var G__21896 = (i__17888__auto___21895 + (1));
i__17888__auto___21895 = G__21896;
continue;
} else {
}
break;
}

var G__21893 = args21891.length;
switch (G__21893) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21891.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21898 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21898);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21898,ret){
return (function (){
return fn1.call(null,val_21898);
});})(val_21898,ret))
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
var args21899 = [];
var len__17887__auto___21902 = arguments.length;
var i__17888__auto___21903 = (0);
while(true){
if((i__17888__auto___21903 < len__17887__auto___21902)){
args21899.push((arguments[i__17888__auto___21903]));

var G__21904 = (i__17888__auto___21903 + (1));
i__17888__auto___21903 = G__21904;
continue;
} else {
}
break;
}

var G__21901 = args21899.length;
switch (G__21901) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21899.length)].join('')));

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
var n__17731__auto___21906 = n;
var x_21907 = (0);
while(true){
if((x_21907 < n__17731__auto___21906)){
(a[x_21907] = (0));

var G__21908 = (x_21907 + (1));
x_21907 = G__21908;
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

var G__21909 = (i + (1));
i = G__21909;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21913 = (function (alt_flag,flag,meta21914){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21914 = meta21914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21915,meta21914__$1){
var self__ = this;
var _21915__$1 = this;
return (new cljs.core.async.t_cljs$core$async21913(self__.alt_flag,self__.flag,meta21914__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21915){
var self__ = this;
var _21915__$1 = this;
return self__.meta21914;
});})(flag))
;

cljs.core.async.t_cljs$core$async21913.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21913.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21914","meta21914",1211839232,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21913";

cljs.core.async.t_cljs$core$async21913.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async21913");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21913 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21913(alt_flag__$1,flag__$1,meta21914){
return (new cljs.core.async.t_cljs$core$async21913(alt_flag__$1,flag__$1,meta21914));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21913(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21919 = (function (alt_handler,flag,cb,meta21920){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21920 = meta21920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21921,meta21920__$1){
var self__ = this;
var _21921__$1 = this;
return (new cljs.core.async.t_cljs$core$async21919(self__.alt_handler,self__.flag,self__.cb,meta21920__$1));
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21921){
var self__ = this;
var _21921__$1 = this;
return self__.meta21920;
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21920","meta21920",-838899658,null)], null);
});

cljs.core.async.t_cljs$core$async21919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21919";

cljs.core.async.t_cljs$core$async21919.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async21919");
});

cljs.core.async.__GT_t_cljs$core$async21919 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21919(alt_handler__$1,flag__$1,cb__$1,meta21920){
return (new cljs.core.async.t_cljs$core$async21919(alt_handler__$1,flag__$1,cb__$1,meta21920));
});

}

return (new cljs.core.async.t_cljs$core$async21919(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21922_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21922_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21923_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21923_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16828__auto__ = wport;
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21924 = (i + (1));
i = G__21924;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16828__auto__ = ret;
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16816__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16816__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16816__auto__;
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
var args__17894__auto__ = [];
var len__17887__auto___21930 = arguments.length;
var i__17888__auto___21931 = (0);
while(true){
if((i__17888__auto___21931 < len__17887__auto___21930)){
args__17894__auto__.push((arguments[i__17888__auto___21931]));

var G__21932 = (i__17888__auto___21931 + (1));
i__17888__auto___21931 = G__21932;
continue;
} else {
}
break;
}

var argseq__17895__auto__ = ((((1) < args__17894__auto__.length))?(new cljs.core.IndexedSeq(args__17894__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17895__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21927){
var map__21928 = p__21927;
var map__21928__$1 = ((((!((map__21928 == null)))?((((map__21928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21928):map__21928);
var opts = map__21928__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21925){
var G__21926 = cljs.core.first.call(null,seq21925);
var seq21925__$1 = cljs.core.next.call(null,seq21925);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21926,seq21925__$1);
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
var args21933 = [];
var len__17887__auto___21983 = arguments.length;
var i__17888__auto___21984 = (0);
while(true){
if((i__17888__auto___21984 < len__17887__auto___21983)){
args21933.push((arguments[i__17888__auto___21984]));

var G__21985 = (i__17888__auto___21984 + (1));
i__17888__auto___21984 = G__21985;
continue;
} else {
}
break;
}

var G__21935 = args21933.length;
switch (G__21935) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21933.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18854__auto___21987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___21987){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___21987){
return (function (state_21959){
var state_val_21960 = (state_21959[(1)]);
if((state_val_21960 === (7))){
var inst_21955 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
var statearr_21961_21988 = state_21959__$1;
(statearr_21961_21988[(2)] = inst_21955);

(statearr_21961_21988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (1))){
var state_21959__$1 = state_21959;
var statearr_21962_21989 = state_21959__$1;
(statearr_21962_21989[(2)] = null);

(statearr_21962_21989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (4))){
var inst_21938 = (state_21959[(7)]);
var inst_21938__$1 = (state_21959[(2)]);
var inst_21939 = (inst_21938__$1 == null);
var state_21959__$1 = (function (){var statearr_21963 = state_21959;
(statearr_21963[(7)] = inst_21938__$1);

return statearr_21963;
})();
if(cljs.core.truth_(inst_21939)){
var statearr_21964_21990 = state_21959__$1;
(statearr_21964_21990[(1)] = (5));

} else {
var statearr_21965_21991 = state_21959__$1;
(statearr_21965_21991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (13))){
var state_21959__$1 = state_21959;
var statearr_21966_21992 = state_21959__$1;
(statearr_21966_21992[(2)] = null);

(statearr_21966_21992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (6))){
var inst_21938 = (state_21959[(7)]);
var state_21959__$1 = state_21959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21959__$1,(11),to,inst_21938);
} else {
if((state_val_21960 === (3))){
var inst_21957 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21959__$1,inst_21957);
} else {
if((state_val_21960 === (12))){
var state_21959__$1 = state_21959;
var statearr_21967_21993 = state_21959__$1;
(statearr_21967_21993[(2)] = null);

(statearr_21967_21993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (2))){
var state_21959__$1 = state_21959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21959__$1,(4),from);
} else {
if((state_val_21960 === (11))){
var inst_21948 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
if(cljs.core.truth_(inst_21948)){
var statearr_21968_21994 = state_21959__$1;
(statearr_21968_21994[(1)] = (12));

} else {
var statearr_21969_21995 = state_21959__$1;
(statearr_21969_21995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (9))){
var state_21959__$1 = state_21959;
var statearr_21970_21996 = state_21959__$1;
(statearr_21970_21996[(2)] = null);

(statearr_21970_21996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (5))){
var state_21959__$1 = state_21959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21971_21997 = state_21959__$1;
(statearr_21971_21997[(1)] = (8));

} else {
var statearr_21972_21998 = state_21959__$1;
(statearr_21972_21998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (14))){
var inst_21953 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
var statearr_21973_21999 = state_21959__$1;
(statearr_21973_21999[(2)] = inst_21953);

(statearr_21973_21999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (10))){
var inst_21945 = (state_21959[(2)]);
var state_21959__$1 = state_21959;
var statearr_21974_22000 = state_21959__$1;
(statearr_21974_22000[(2)] = inst_21945);

(statearr_21974_22000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21960 === (8))){
var inst_21942 = cljs.core.async.close_BANG_.call(null,to);
var state_21959__$1 = state_21959;
var statearr_21975_22001 = state_21959__$1;
(statearr_21975_22001[(2)] = inst_21942);

(statearr_21975_22001[(1)] = (10));


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
});})(c__18854__auto___21987))
;
return ((function (switch__18833__auto__,c__18854__auto___21987){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_21979 = [null,null,null,null,null,null,null,null];
(statearr_21979[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_21979[(1)] = (1));

return statearr_21979;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_21959){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_21959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e21980){if((e21980 instanceof Object)){
var ex__18837__auto__ = e21980;
var statearr_21981_22002 = state_21959;
(statearr_21981_22002[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22003 = state_21959;
state_21959 = G__22003;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_21959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_21959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___21987))
})();
var state__18856__auto__ = (function (){var statearr_21982 = f__18855__auto__.call(null);
(statearr_21982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___21987);

return statearr_21982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___21987))
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
return (function (p__22187){
var vec__22188 = p__22187;
var v = cljs.core.nth.call(null,vec__22188,(0),null);
var p = cljs.core.nth.call(null,vec__22188,(1),null);
var job = vec__22188;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18854__auto___22370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___22370,res,vec__22188,v,p,job,jobs,results){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___22370,res,vec__22188,v,p,job,jobs,results){
return (function (state_22193){
var state_val_22194 = (state_22193[(1)]);
if((state_val_22194 === (1))){
var state_22193__$1 = state_22193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22193__$1,(2),res,v);
} else {
if((state_val_22194 === (2))){
var inst_22190 = (state_22193[(2)]);
var inst_22191 = cljs.core.async.close_BANG_.call(null,res);
var state_22193__$1 = (function (){var statearr_22195 = state_22193;
(statearr_22195[(7)] = inst_22190);

return statearr_22195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22193__$1,inst_22191);
} else {
return null;
}
}
});})(c__18854__auto___22370,res,vec__22188,v,p,job,jobs,results))
;
return ((function (switch__18833__auto__,c__18854__auto___22370,res,vec__22188,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0 = (function (){
var statearr_22199 = [null,null,null,null,null,null,null,null];
(statearr_22199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__);

(statearr_22199[(1)] = (1));

return statearr_22199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1 = (function (state_22193){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22200){if((e22200 instanceof Object)){
var ex__18837__auto__ = e22200;
var statearr_22201_22371 = state_22193;
(statearr_22201_22371[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22372 = state_22193;
state_22193 = G__22372;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = function(state_22193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1.call(this,state_22193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___22370,res,vec__22188,v,p,job,jobs,results))
})();
var state__18856__auto__ = (function (){var statearr_22202 = f__18855__auto__.call(null);
(statearr_22202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___22370);

return statearr_22202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___22370,res,vec__22188,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22203){
var vec__22204 = p__22203;
var v = cljs.core.nth.call(null,vec__22204,(0),null);
var p = cljs.core.nth.call(null,vec__22204,(1),null);
var job = vec__22204;
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
var n__17731__auto___22373 = n;
var __22374 = (0);
while(true){
if((__22374 < n__17731__auto___22373)){
var G__22205_22375 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22205_22375) {
case "compute":
var c__18854__auto___22377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22374,c__18854__auto___22377,G__22205_22375,n__17731__auto___22373,jobs,results,process,async){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (__22374,c__18854__auto___22377,G__22205_22375,n__17731__auto___22373,jobs,results,process,async){
return (function (state_22218){
var state_val_22219 = (state_22218[(1)]);
if((state_val_22219 === (1))){
var state_22218__$1 = state_22218;
var statearr_22220_22378 = state_22218__$1;
(statearr_22220_22378[(2)] = null);

(statearr_22220_22378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22219 === (2))){
var state_22218__$1 = state_22218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22218__$1,(4),jobs);
} else {
if((state_val_22219 === (3))){
var inst_22216 = (state_22218[(2)]);
var state_22218__$1 = state_22218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22218__$1,inst_22216);
} else {
if((state_val_22219 === (4))){
var inst_22208 = (state_22218[(2)]);
var inst_22209 = process.call(null,inst_22208);
var state_22218__$1 = state_22218;
if(cljs.core.truth_(inst_22209)){
var statearr_22221_22379 = state_22218__$1;
(statearr_22221_22379[(1)] = (5));

} else {
var statearr_22222_22380 = state_22218__$1;
(statearr_22222_22380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22219 === (5))){
var state_22218__$1 = state_22218;
var statearr_22223_22381 = state_22218__$1;
(statearr_22223_22381[(2)] = null);

(statearr_22223_22381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22219 === (6))){
var state_22218__$1 = state_22218;
var statearr_22224_22382 = state_22218__$1;
(statearr_22224_22382[(2)] = null);

(statearr_22224_22382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22219 === (7))){
var inst_22214 = (state_22218[(2)]);
var state_22218__$1 = state_22218;
var statearr_22225_22383 = state_22218__$1;
(statearr_22225_22383[(2)] = inst_22214);

(statearr_22225_22383[(1)] = (3));


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
});})(__22374,c__18854__auto___22377,G__22205_22375,n__17731__auto___22373,jobs,results,process,async))
;
return ((function (__22374,switch__18833__auto__,c__18854__auto___22377,G__22205_22375,n__17731__auto___22373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0 = (function (){
var statearr_22229 = [null,null,null,null,null,null,null];
(statearr_22229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__);

(statearr_22229[(1)] = (1));

return statearr_22229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1 = (function (state_22218){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22230){if((e22230 instanceof Object)){
var ex__18837__auto__ = e22230;
var statearr_22231_22384 = state_22218;
(statearr_22231_22384[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22385 = state_22218;
state_22218 = G__22385;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = function(state_22218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1.call(this,state_22218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__;
})()
;})(__22374,switch__18833__auto__,c__18854__auto___22377,G__22205_22375,n__17731__auto___22373,jobs,results,process,async))
})();
var state__18856__auto__ = (function (){var statearr_22232 = f__18855__auto__.call(null);
(statearr_22232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___22377);

return statearr_22232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(__22374,c__18854__auto___22377,G__22205_22375,n__17731__auto___22373,jobs,results,process,async))
);


break;
case "async":
var c__18854__auto___22386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22374,c__18854__auto___22386,G__22205_22375,n__17731__auto___22373,jobs,results,process,async){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (__22374,c__18854__auto___22386,G__22205_22375,n__17731__auto___22373,jobs,results,process,async){
return (function (state_22245){
var state_val_22246 = (state_22245[(1)]);
if((state_val_22246 === (1))){
var state_22245__$1 = state_22245;
var statearr_22247_22387 = state_22245__$1;
(statearr_22247_22387[(2)] = null);

(statearr_22247_22387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (2))){
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22245__$1,(4),jobs);
} else {
if((state_val_22246 === (3))){
var inst_22243 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22245__$1,inst_22243);
} else {
if((state_val_22246 === (4))){
var inst_22235 = (state_22245[(2)]);
var inst_22236 = async.call(null,inst_22235);
var state_22245__$1 = state_22245;
if(cljs.core.truth_(inst_22236)){
var statearr_22248_22388 = state_22245__$1;
(statearr_22248_22388[(1)] = (5));

} else {
var statearr_22249_22389 = state_22245__$1;
(statearr_22249_22389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (5))){
var state_22245__$1 = state_22245;
var statearr_22250_22390 = state_22245__$1;
(statearr_22250_22390[(2)] = null);

(statearr_22250_22390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (6))){
var state_22245__$1 = state_22245;
var statearr_22251_22391 = state_22245__$1;
(statearr_22251_22391[(2)] = null);

(statearr_22251_22391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (7))){
var inst_22241 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
var statearr_22252_22392 = state_22245__$1;
(statearr_22252_22392[(2)] = inst_22241);

(statearr_22252_22392[(1)] = (3));


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
});})(__22374,c__18854__auto___22386,G__22205_22375,n__17731__auto___22373,jobs,results,process,async))
;
return ((function (__22374,switch__18833__auto__,c__18854__auto___22386,G__22205_22375,n__17731__auto___22373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0 = (function (){
var statearr_22256 = [null,null,null,null,null,null,null];
(statearr_22256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__);

(statearr_22256[(1)] = (1));

return statearr_22256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1 = (function (state_22245){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22257){if((e22257 instanceof Object)){
var ex__18837__auto__ = e22257;
var statearr_22258_22393 = state_22245;
(statearr_22258_22393[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22394 = state_22245;
state_22245 = G__22394;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = function(state_22245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1.call(this,state_22245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__;
})()
;})(__22374,switch__18833__auto__,c__18854__auto___22386,G__22205_22375,n__17731__auto___22373,jobs,results,process,async))
})();
var state__18856__auto__ = (function (){var statearr_22259 = f__18855__auto__.call(null);
(statearr_22259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___22386);

return statearr_22259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(__22374,c__18854__auto___22386,G__22205_22375,n__17731__auto___22373,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22395 = (__22374 + (1));
__22374 = G__22395;
continue;
} else {
}
break;
}

var c__18854__auto___22396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___22396,jobs,results,process,async){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___22396,jobs,results,process,async){
return (function (state_22281){
var state_val_22282 = (state_22281[(1)]);
if((state_val_22282 === (1))){
var state_22281__$1 = state_22281;
var statearr_22283_22397 = state_22281__$1;
(statearr_22283_22397[(2)] = null);

(statearr_22283_22397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22282 === (2))){
var state_22281__$1 = state_22281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22281__$1,(4),from);
} else {
if((state_val_22282 === (3))){
var inst_22279 = (state_22281[(2)]);
var state_22281__$1 = state_22281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22281__$1,inst_22279);
} else {
if((state_val_22282 === (4))){
var inst_22262 = (state_22281[(7)]);
var inst_22262__$1 = (state_22281[(2)]);
var inst_22263 = (inst_22262__$1 == null);
var state_22281__$1 = (function (){var statearr_22284 = state_22281;
(statearr_22284[(7)] = inst_22262__$1);

return statearr_22284;
})();
if(cljs.core.truth_(inst_22263)){
var statearr_22285_22398 = state_22281__$1;
(statearr_22285_22398[(1)] = (5));

} else {
var statearr_22286_22399 = state_22281__$1;
(statearr_22286_22399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22282 === (5))){
var inst_22265 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22281__$1 = state_22281;
var statearr_22287_22400 = state_22281__$1;
(statearr_22287_22400[(2)] = inst_22265);

(statearr_22287_22400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22282 === (6))){
var inst_22267 = (state_22281[(8)]);
var inst_22262 = (state_22281[(7)]);
var inst_22267__$1 = cljs.core.async.chan.call(null,(1));
var inst_22268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22269 = [inst_22262,inst_22267__$1];
var inst_22270 = (new cljs.core.PersistentVector(null,2,(5),inst_22268,inst_22269,null));
var state_22281__$1 = (function (){var statearr_22288 = state_22281;
(statearr_22288[(8)] = inst_22267__$1);

return statearr_22288;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22281__$1,(8),jobs,inst_22270);
} else {
if((state_val_22282 === (7))){
var inst_22277 = (state_22281[(2)]);
var state_22281__$1 = state_22281;
var statearr_22289_22401 = state_22281__$1;
(statearr_22289_22401[(2)] = inst_22277);

(statearr_22289_22401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22282 === (8))){
var inst_22267 = (state_22281[(8)]);
var inst_22272 = (state_22281[(2)]);
var state_22281__$1 = (function (){var statearr_22290 = state_22281;
(statearr_22290[(9)] = inst_22272);

return statearr_22290;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22281__$1,(9),results,inst_22267);
} else {
if((state_val_22282 === (9))){
var inst_22274 = (state_22281[(2)]);
var state_22281__$1 = (function (){var statearr_22291 = state_22281;
(statearr_22291[(10)] = inst_22274);

return statearr_22291;
})();
var statearr_22292_22402 = state_22281__$1;
(statearr_22292_22402[(2)] = null);

(statearr_22292_22402[(1)] = (2));


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
});})(c__18854__auto___22396,jobs,results,process,async))
;
return ((function (switch__18833__auto__,c__18854__auto___22396,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0 = (function (){
var statearr_22296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__);

(statearr_22296[(1)] = (1));

return statearr_22296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1 = (function (state_22281){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22297){if((e22297 instanceof Object)){
var ex__18837__auto__ = e22297;
var statearr_22298_22403 = state_22281;
(statearr_22298_22403[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22404 = state_22281;
state_22281 = G__22404;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = function(state_22281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1.call(this,state_22281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___22396,jobs,results,process,async))
})();
var state__18856__auto__ = (function (){var statearr_22299 = f__18855__auto__.call(null);
(statearr_22299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___22396);

return statearr_22299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___22396,jobs,results,process,async))
);


var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__,jobs,results,process,async){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__,jobs,results,process,async){
return (function (state_22337){
var state_val_22338 = (state_22337[(1)]);
if((state_val_22338 === (7))){
var inst_22333 = (state_22337[(2)]);
var state_22337__$1 = state_22337;
var statearr_22339_22405 = state_22337__$1;
(statearr_22339_22405[(2)] = inst_22333);

(statearr_22339_22405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (20))){
var state_22337__$1 = state_22337;
var statearr_22340_22406 = state_22337__$1;
(statearr_22340_22406[(2)] = null);

(statearr_22340_22406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (1))){
var state_22337__$1 = state_22337;
var statearr_22341_22407 = state_22337__$1;
(statearr_22341_22407[(2)] = null);

(statearr_22341_22407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (4))){
var inst_22302 = (state_22337[(7)]);
var inst_22302__$1 = (state_22337[(2)]);
var inst_22303 = (inst_22302__$1 == null);
var state_22337__$1 = (function (){var statearr_22342 = state_22337;
(statearr_22342[(7)] = inst_22302__$1);

return statearr_22342;
})();
if(cljs.core.truth_(inst_22303)){
var statearr_22343_22408 = state_22337__$1;
(statearr_22343_22408[(1)] = (5));

} else {
var statearr_22344_22409 = state_22337__$1;
(statearr_22344_22409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (15))){
var inst_22315 = (state_22337[(8)]);
var state_22337__$1 = state_22337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22337__$1,(18),to,inst_22315);
} else {
if((state_val_22338 === (21))){
var inst_22328 = (state_22337[(2)]);
var state_22337__$1 = state_22337;
var statearr_22345_22410 = state_22337__$1;
(statearr_22345_22410[(2)] = inst_22328);

(statearr_22345_22410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (13))){
var inst_22330 = (state_22337[(2)]);
var state_22337__$1 = (function (){var statearr_22346 = state_22337;
(statearr_22346[(9)] = inst_22330);

return statearr_22346;
})();
var statearr_22347_22411 = state_22337__$1;
(statearr_22347_22411[(2)] = null);

(statearr_22347_22411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (6))){
var inst_22302 = (state_22337[(7)]);
var state_22337__$1 = state_22337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22337__$1,(11),inst_22302);
} else {
if((state_val_22338 === (17))){
var inst_22323 = (state_22337[(2)]);
var state_22337__$1 = state_22337;
if(cljs.core.truth_(inst_22323)){
var statearr_22348_22412 = state_22337__$1;
(statearr_22348_22412[(1)] = (19));

} else {
var statearr_22349_22413 = state_22337__$1;
(statearr_22349_22413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (3))){
var inst_22335 = (state_22337[(2)]);
var state_22337__$1 = state_22337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22337__$1,inst_22335);
} else {
if((state_val_22338 === (12))){
var inst_22312 = (state_22337[(10)]);
var state_22337__$1 = state_22337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22337__$1,(14),inst_22312);
} else {
if((state_val_22338 === (2))){
var state_22337__$1 = state_22337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22337__$1,(4),results);
} else {
if((state_val_22338 === (19))){
var state_22337__$1 = state_22337;
var statearr_22350_22414 = state_22337__$1;
(statearr_22350_22414[(2)] = null);

(statearr_22350_22414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (11))){
var inst_22312 = (state_22337[(2)]);
var state_22337__$1 = (function (){var statearr_22351 = state_22337;
(statearr_22351[(10)] = inst_22312);

return statearr_22351;
})();
var statearr_22352_22415 = state_22337__$1;
(statearr_22352_22415[(2)] = null);

(statearr_22352_22415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (9))){
var state_22337__$1 = state_22337;
var statearr_22353_22416 = state_22337__$1;
(statearr_22353_22416[(2)] = null);

(statearr_22353_22416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (5))){
var state_22337__$1 = state_22337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22354_22417 = state_22337__$1;
(statearr_22354_22417[(1)] = (8));

} else {
var statearr_22355_22418 = state_22337__$1;
(statearr_22355_22418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (14))){
var inst_22317 = (state_22337[(11)]);
var inst_22315 = (state_22337[(8)]);
var inst_22315__$1 = (state_22337[(2)]);
var inst_22316 = (inst_22315__$1 == null);
var inst_22317__$1 = cljs.core.not.call(null,inst_22316);
var state_22337__$1 = (function (){var statearr_22356 = state_22337;
(statearr_22356[(11)] = inst_22317__$1);

(statearr_22356[(8)] = inst_22315__$1);

return statearr_22356;
})();
if(inst_22317__$1){
var statearr_22357_22419 = state_22337__$1;
(statearr_22357_22419[(1)] = (15));

} else {
var statearr_22358_22420 = state_22337__$1;
(statearr_22358_22420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (16))){
var inst_22317 = (state_22337[(11)]);
var state_22337__$1 = state_22337;
var statearr_22359_22421 = state_22337__$1;
(statearr_22359_22421[(2)] = inst_22317);

(statearr_22359_22421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (10))){
var inst_22309 = (state_22337[(2)]);
var state_22337__$1 = state_22337;
var statearr_22360_22422 = state_22337__$1;
(statearr_22360_22422[(2)] = inst_22309);

(statearr_22360_22422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (18))){
var inst_22320 = (state_22337[(2)]);
var state_22337__$1 = state_22337;
var statearr_22361_22423 = state_22337__$1;
(statearr_22361_22423[(2)] = inst_22320);

(statearr_22361_22423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22338 === (8))){
var inst_22306 = cljs.core.async.close_BANG_.call(null,to);
var state_22337__$1 = state_22337;
var statearr_22362_22424 = state_22337__$1;
(statearr_22362_22424[(2)] = inst_22306);

(statearr_22362_22424[(1)] = (10));


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
});})(c__18854__auto__,jobs,results,process,async))
;
return ((function (switch__18833__auto__,c__18854__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0 = (function (){
var statearr_22366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__);

(statearr_22366[(1)] = (1));

return statearr_22366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1 = (function (state_22337){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22367){if((e22367 instanceof Object)){
var ex__18837__auto__ = e22367;
var statearr_22368_22425 = state_22337;
(statearr_22368_22425[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22426 = state_22337;
state_22337 = G__22426;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__ = function(state_22337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1.call(this,state_22337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__,jobs,results,process,async))
})();
var state__18856__auto__ = (function (){var statearr_22369 = f__18855__auto__.call(null);
(statearr_22369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_22369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__,jobs,results,process,async))
);

return c__18854__auto__;
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
var args22427 = [];
var len__17887__auto___22430 = arguments.length;
var i__17888__auto___22431 = (0);
while(true){
if((i__17888__auto___22431 < len__17887__auto___22430)){
args22427.push((arguments[i__17888__auto___22431]));

var G__22432 = (i__17888__auto___22431 + (1));
i__17888__auto___22431 = G__22432;
continue;
} else {
}
break;
}

var G__22429 = args22427.length;
switch (G__22429) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22427.length)].join('')));

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
var args22434 = [];
var len__17887__auto___22437 = arguments.length;
var i__17888__auto___22438 = (0);
while(true){
if((i__17888__auto___22438 < len__17887__auto___22437)){
args22434.push((arguments[i__17888__auto___22438]));

var G__22439 = (i__17888__auto___22438 + (1));
i__17888__auto___22438 = G__22439;
continue;
} else {
}
break;
}

var G__22436 = args22434.length;
switch (G__22436) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22434.length)].join('')));

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
var args22441 = [];
var len__17887__auto___22494 = arguments.length;
var i__17888__auto___22495 = (0);
while(true){
if((i__17888__auto___22495 < len__17887__auto___22494)){
args22441.push((arguments[i__17888__auto___22495]));

var G__22496 = (i__17888__auto___22495 + (1));
i__17888__auto___22495 = G__22496;
continue;
} else {
}
break;
}

var G__22443 = args22441.length;
switch (G__22443) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22441.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18854__auto___22498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___22498,tc,fc){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___22498,tc,fc){
return (function (state_22469){
var state_val_22470 = (state_22469[(1)]);
if((state_val_22470 === (7))){
var inst_22465 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
var statearr_22471_22499 = state_22469__$1;
(statearr_22471_22499[(2)] = inst_22465);

(statearr_22471_22499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (1))){
var state_22469__$1 = state_22469;
var statearr_22472_22500 = state_22469__$1;
(statearr_22472_22500[(2)] = null);

(statearr_22472_22500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (4))){
var inst_22446 = (state_22469[(7)]);
var inst_22446__$1 = (state_22469[(2)]);
var inst_22447 = (inst_22446__$1 == null);
var state_22469__$1 = (function (){var statearr_22473 = state_22469;
(statearr_22473[(7)] = inst_22446__$1);

return statearr_22473;
})();
if(cljs.core.truth_(inst_22447)){
var statearr_22474_22501 = state_22469__$1;
(statearr_22474_22501[(1)] = (5));

} else {
var statearr_22475_22502 = state_22469__$1;
(statearr_22475_22502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (13))){
var state_22469__$1 = state_22469;
var statearr_22476_22503 = state_22469__$1;
(statearr_22476_22503[(2)] = null);

(statearr_22476_22503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (6))){
var inst_22446 = (state_22469[(7)]);
var inst_22452 = p.call(null,inst_22446);
var state_22469__$1 = state_22469;
if(cljs.core.truth_(inst_22452)){
var statearr_22477_22504 = state_22469__$1;
(statearr_22477_22504[(1)] = (9));

} else {
var statearr_22478_22505 = state_22469__$1;
(statearr_22478_22505[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (3))){
var inst_22467 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22469__$1,inst_22467);
} else {
if((state_val_22470 === (12))){
var state_22469__$1 = state_22469;
var statearr_22479_22506 = state_22469__$1;
(statearr_22479_22506[(2)] = null);

(statearr_22479_22506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (2))){
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22469__$1,(4),ch);
} else {
if((state_val_22470 === (11))){
var inst_22446 = (state_22469[(7)]);
var inst_22456 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22469__$1,(8),inst_22456,inst_22446);
} else {
if((state_val_22470 === (9))){
var state_22469__$1 = state_22469;
var statearr_22480_22507 = state_22469__$1;
(statearr_22480_22507[(2)] = tc);

(statearr_22480_22507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (5))){
var inst_22449 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22450 = cljs.core.async.close_BANG_.call(null,fc);
var state_22469__$1 = (function (){var statearr_22481 = state_22469;
(statearr_22481[(8)] = inst_22449);

return statearr_22481;
})();
var statearr_22482_22508 = state_22469__$1;
(statearr_22482_22508[(2)] = inst_22450);

(statearr_22482_22508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (14))){
var inst_22463 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
var statearr_22483_22509 = state_22469__$1;
(statearr_22483_22509[(2)] = inst_22463);

(statearr_22483_22509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (10))){
var state_22469__$1 = state_22469;
var statearr_22484_22510 = state_22469__$1;
(statearr_22484_22510[(2)] = fc);

(statearr_22484_22510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (8))){
var inst_22458 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
if(cljs.core.truth_(inst_22458)){
var statearr_22485_22511 = state_22469__$1;
(statearr_22485_22511[(1)] = (12));

} else {
var statearr_22486_22512 = state_22469__$1;
(statearr_22486_22512[(1)] = (13));

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
});})(c__18854__auto___22498,tc,fc))
;
return ((function (switch__18833__auto__,c__18854__auto___22498,tc,fc){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_22469){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__18837__auto__ = e22491;
var statearr_22492_22513 = state_22469;
(statearr_22492_22513[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22514 = state_22469;
state_22469 = G__22514;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_22469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_22469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___22498,tc,fc))
})();
var state__18856__auto__ = (function (){var statearr_22493 = f__18855__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___22498);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___22498,tc,fc))
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
var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__){
return (function (state_22578){
var state_val_22579 = (state_22578[(1)]);
if((state_val_22579 === (7))){
var inst_22574 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22580_22601 = state_22578__$1;
(statearr_22580_22601[(2)] = inst_22574);

(statearr_22580_22601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (1))){
var inst_22558 = init;
var state_22578__$1 = (function (){var statearr_22581 = state_22578;
(statearr_22581[(7)] = inst_22558);

return statearr_22581;
})();
var statearr_22582_22602 = state_22578__$1;
(statearr_22582_22602[(2)] = null);

(statearr_22582_22602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (4))){
var inst_22561 = (state_22578[(8)]);
var inst_22561__$1 = (state_22578[(2)]);
var inst_22562 = (inst_22561__$1 == null);
var state_22578__$1 = (function (){var statearr_22583 = state_22578;
(statearr_22583[(8)] = inst_22561__$1);

return statearr_22583;
})();
if(cljs.core.truth_(inst_22562)){
var statearr_22584_22603 = state_22578__$1;
(statearr_22584_22603[(1)] = (5));

} else {
var statearr_22585_22604 = state_22578__$1;
(statearr_22585_22604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (6))){
var inst_22565 = (state_22578[(9)]);
var inst_22561 = (state_22578[(8)]);
var inst_22558 = (state_22578[(7)]);
var inst_22565__$1 = f.call(null,inst_22558,inst_22561);
var inst_22566 = cljs.core.reduced_QMARK_.call(null,inst_22565__$1);
var state_22578__$1 = (function (){var statearr_22586 = state_22578;
(statearr_22586[(9)] = inst_22565__$1);

return statearr_22586;
})();
if(inst_22566){
var statearr_22587_22605 = state_22578__$1;
(statearr_22587_22605[(1)] = (8));

} else {
var statearr_22588_22606 = state_22578__$1;
(statearr_22588_22606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (3))){
var inst_22576 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22578__$1,inst_22576);
} else {
if((state_val_22579 === (2))){
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22578__$1,(4),ch);
} else {
if((state_val_22579 === (9))){
var inst_22565 = (state_22578[(9)]);
var inst_22558 = inst_22565;
var state_22578__$1 = (function (){var statearr_22589 = state_22578;
(statearr_22589[(7)] = inst_22558);

return statearr_22589;
})();
var statearr_22590_22607 = state_22578__$1;
(statearr_22590_22607[(2)] = null);

(statearr_22590_22607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (5))){
var inst_22558 = (state_22578[(7)]);
var state_22578__$1 = state_22578;
var statearr_22591_22608 = state_22578__$1;
(statearr_22591_22608[(2)] = inst_22558);

(statearr_22591_22608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (10))){
var inst_22572 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22592_22609 = state_22578__$1;
(statearr_22592_22609[(2)] = inst_22572);

(statearr_22592_22609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (8))){
var inst_22565 = (state_22578[(9)]);
var inst_22568 = cljs.core.deref.call(null,inst_22565);
var state_22578__$1 = state_22578;
var statearr_22593_22610 = state_22578__$1;
(statearr_22593_22610[(2)] = inst_22568);

(statearr_22593_22610[(1)] = (10));


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
});})(c__18854__auto__))
;
return ((function (switch__18833__auto__,c__18854__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18834__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18834__auto____0 = (function (){
var statearr_22597 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22597[(0)] = cljs$core$async$reduce_$_state_machine__18834__auto__);

(statearr_22597[(1)] = (1));

return statearr_22597;
});
var cljs$core$async$reduce_$_state_machine__18834__auto____1 = (function (state_22578){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22598){if((e22598 instanceof Object)){
var ex__18837__auto__ = e22598;
var statearr_22599_22611 = state_22578;
(statearr_22599_22611[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22612 = state_22578;
state_22578 = G__22612;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18834__auto__ = function(state_22578){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18834__auto____1.call(this,state_22578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18834__auto____0;
cljs$core$async$reduce_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18834__auto____1;
return cljs$core$async$reduce_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__))
})();
var state__18856__auto__ = (function (){var statearr_22600 = f__18855__auto__.call(null);
(statearr_22600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_22600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__))
);

return c__18854__auto__;
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
var args22613 = [];
var len__17887__auto___22665 = arguments.length;
var i__17888__auto___22666 = (0);
while(true){
if((i__17888__auto___22666 < len__17887__auto___22665)){
args22613.push((arguments[i__17888__auto___22666]));

var G__22667 = (i__17888__auto___22666 + (1));
i__17888__auto___22666 = G__22667;
continue;
} else {
}
break;
}

var G__22615 = args22613.length;
switch (G__22615) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22613.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__){
return (function (state_22640){
var state_val_22641 = (state_22640[(1)]);
if((state_val_22641 === (7))){
var inst_22622 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
var statearr_22642_22669 = state_22640__$1;
(statearr_22642_22669[(2)] = inst_22622);

(statearr_22642_22669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (1))){
var inst_22616 = cljs.core.seq.call(null,coll);
var inst_22617 = inst_22616;
var state_22640__$1 = (function (){var statearr_22643 = state_22640;
(statearr_22643[(7)] = inst_22617);

return statearr_22643;
})();
var statearr_22644_22670 = state_22640__$1;
(statearr_22644_22670[(2)] = null);

(statearr_22644_22670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (4))){
var inst_22617 = (state_22640[(7)]);
var inst_22620 = cljs.core.first.call(null,inst_22617);
var state_22640__$1 = state_22640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22640__$1,(7),ch,inst_22620);
} else {
if((state_val_22641 === (13))){
var inst_22634 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
var statearr_22645_22671 = state_22640__$1;
(statearr_22645_22671[(2)] = inst_22634);

(statearr_22645_22671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (6))){
var inst_22625 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
if(cljs.core.truth_(inst_22625)){
var statearr_22646_22672 = state_22640__$1;
(statearr_22646_22672[(1)] = (8));

} else {
var statearr_22647_22673 = state_22640__$1;
(statearr_22647_22673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (3))){
var inst_22638 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22640__$1,inst_22638);
} else {
if((state_val_22641 === (12))){
var state_22640__$1 = state_22640;
var statearr_22648_22674 = state_22640__$1;
(statearr_22648_22674[(2)] = null);

(statearr_22648_22674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (2))){
var inst_22617 = (state_22640[(7)]);
var state_22640__$1 = state_22640;
if(cljs.core.truth_(inst_22617)){
var statearr_22649_22675 = state_22640__$1;
(statearr_22649_22675[(1)] = (4));

} else {
var statearr_22650_22676 = state_22640__$1;
(statearr_22650_22676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (11))){
var inst_22631 = cljs.core.async.close_BANG_.call(null,ch);
var state_22640__$1 = state_22640;
var statearr_22651_22677 = state_22640__$1;
(statearr_22651_22677[(2)] = inst_22631);

(statearr_22651_22677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (9))){
var state_22640__$1 = state_22640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22652_22678 = state_22640__$1;
(statearr_22652_22678[(1)] = (11));

} else {
var statearr_22653_22679 = state_22640__$1;
(statearr_22653_22679[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (5))){
var inst_22617 = (state_22640[(7)]);
var state_22640__$1 = state_22640;
var statearr_22654_22680 = state_22640__$1;
(statearr_22654_22680[(2)] = inst_22617);

(statearr_22654_22680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (10))){
var inst_22636 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
var statearr_22655_22681 = state_22640__$1;
(statearr_22655_22681[(2)] = inst_22636);

(statearr_22655_22681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (8))){
var inst_22617 = (state_22640[(7)]);
var inst_22627 = cljs.core.next.call(null,inst_22617);
var inst_22617__$1 = inst_22627;
var state_22640__$1 = (function (){var statearr_22656 = state_22640;
(statearr_22656[(7)] = inst_22617__$1);

return statearr_22656;
})();
var statearr_22657_22682 = state_22640__$1;
(statearr_22657_22682[(2)] = null);

(statearr_22657_22682[(1)] = (2));


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
});})(c__18854__auto__))
;
return ((function (switch__18833__auto__,c__18854__auto__){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_22661 = [null,null,null,null,null,null,null,null];
(statearr_22661[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_22661[(1)] = (1));

return statearr_22661;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_22640){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_22640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e22662){if((e22662 instanceof Object)){
var ex__18837__auto__ = e22662;
var statearr_22663_22683 = state_22640;
(statearr_22663_22683[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22684 = state_22640;
state_22640 = G__22684;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_22640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_22640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__))
})();
var state__18856__auto__ = (function (){var statearr_22664 = f__18855__auto__.call(null);
(statearr_22664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_22664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__))
);

return c__18854__auto__;
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
var x__17483__auto__ = (((_ == null))?null:_);
var m__17484__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,_);
} else {
var m__17484__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,_);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17484__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m,ch);
} else {
var m__17484__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m,ch);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m);
} else {
var m__17484__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22906 = (function (mult,ch,cs,meta22907){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22907 = meta22907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22908,meta22907__$1){
var self__ = this;
var _22908__$1 = this;
return (new cljs.core.async.t_cljs$core$async22906(self__.mult,self__.ch,self__.cs,meta22907__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22908){
var self__ = this;
var _22908__$1 = this;
return self__.meta22907;
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22907","meta22907",-656830583,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22906";

cljs.core.async.t_cljs$core$async22906.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async22906");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22906 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22906(mult__$1,ch__$1,cs__$1,meta22907){
return (new cljs.core.async.t_cljs$core$async22906(mult__$1,ch__$1,cs__$1,meta22907));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22906(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18854__auto___23127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___23127,cs,m,dchan,dctr,done){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___23127,cs,m,dchan,dctr,done){
return (function (state_23039){
var state_val_23040 = (state_23039[(1)]);
if((state_val_23040 === (7))){
var inst_23035 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23041_23128 = state_23039__$1;
(statearr_23041_23128[(2)] = inst_23035);

(statearr_23041_23128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (20))){
var inst_22940 = (state_23039[(7)]);
var inst_22950 = cljs.core.first.call(null,inst_22940);
var inst_22951 = cljs.core.nth.call(null,inst_22950,(0),null);
var inst_22952 = cljs.core.nth.call(null,inst_22950,(1),null);
var state_23039__$1 = (function (){var statearr_23042 = state_23039;
(statearr_23042[(8)] = inst_22951);

return statearr_23042;
})();
if(cljs.core.truth_(inst_22952)){
var statearr_23043_23129 = state_23039__$1;
(statearr_23043_23129[(1)] = (22));

} else {
var statearr_23044_23130 = state_23039__$1;
(statearr_23044_23130[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (27))){
var inst_22980 = (state_23039[(9)]);
var inst_22987 = (state_23039[(10)]);
var inst_22982 = (state_23039[(11)]);
var inst_22911 = (state_23039[(12)]);
var inst_22987__$1 = cljs.core._nth.call(null,inst_22980,inst_22982);
var inst_22988 = cljs.core.async.put_BANG_.call(null,inst_22987__$1,inst_22911,done);
var state_23039__$1 = (function (){var statearr_23045 = state_23039;
(statearr_23045[(10)] = inst_22987__$1);

return statearr_23045;
})();
if(cljs.core.truth_(inst_22988)){
var statearr_23046_23131 = state_23039__$1;
(statearr_23046_23131[(1)] = (30));

} else {
var statearr_23047_23132 = state_23039__$1;
(statearr_23047_23132[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (1))){
var state_23039__$1 = state_23039;
var statearr_23048_23133 = state_23039__$1;
(statearr_23048_23133[(2)] = null);

(statearr_23048_23133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (24))){
var inst_22940 = (state_23039[(7)]);
var inst_22957 = (state_23039[(2)]);
var inst_22958 = cljs.core.next.call(null,inst_22940);
var inst_22920 = inst_22958;
var inst_22921 = null;
var inst_22922 = (0);
var inst_22923 = (0);
var state_23039__$1 = (function (){var statearr_23049 = state_23039;
(statearr_23049[(13)] = inst_22921);

(statearr_23049[(14)] = inst_22923);

(statearr_23049[(15)] = inst_22957);

(statearr_23049[(16)] = inst_22920);

(statearr_23049[(17)] = inst_22922);

return statearr_23049;
})();
var statearr_23050_23134 = state_23039__$1;
(statearr_23050_23134[(2)] = null);

(statearr_23050_23134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (39))){
var state_23039__$1 = state_23039;
var statearr_23054_23135 = state_23039__$1;
(statearr_23054_23135[(2)] = null);

(statearr_23054_23135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (4))){
var inst_22911 = (state_23039[(12)]);
var inst_22911__$1 = (state_23039[(2)]);
var inst_22912 = (inst_22911__$1 == null);
var state_23039__$1 = (function (){var statearr_23055 = state_23039;
(statearr_23055[(12)] = inst_22911__$1);

return statearr_23055;
})();
if(cljs.core.truth_(inst_22912)){
var statearr_23056_23136 = state_23039__$1;
(statearr_23056_23136[(1)] = (5));

} else {
var statearr_23057_23137 = state_23039__$1;
(statearr_23057_23137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (15))){
var inst_22921 = (state_23039[(13)]);
var inst_22923 = (state_23039[(14)]);
var inst_22920 = (state_23039[(16)]);
var inst_22922 = (state_23039[(17)]);
var inst_22936 = (state_23039[(2)]);
var inst_22937 = (inst_22923 + (1));
var tmp23051 = inst_22921;
var tmp23052 = inst_22920;
var tmp23053 = inst_22922;
var inst_22920__$1 = tmp23052;
var inst_22921__$1 = tmp23051;
var inst_22922__$1 = tmp23053;
var inst_22923__$1 = inst_22937;
var state_23039__$1 = (function (){var statearr_23058 = state_23039;
(statearr_23058[(18)] = inst_22936);

(statearr_23058[(13)] = inst_22921__$1);

(statearr_23058[(14)] = inst_22923__$1);

(statearr_23058[(16)] = inst_22920__$1);

(statearr_23058[(17)] = inst_22922__$1);

return statearr_23058;
})();
var statearr_23059_23138 = state_23039__$1;
(statearr_23059_23138[(2)] = null);

(statearr_23059_23138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (21))){
var inst_22961 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23063_23139 = state_23039__$1;
(statearr_23063_23139[(2)] = inst_22961);

(statearr_23063_23139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (31))){
var inst_22987 = (state_23039[(10)]);
var inst_22991 = done.call(null,null);
var inst_22992 = cljs.core.async.untap_STAR_.call(null,m,inst_22987);
var state_23039__$1 = (function (){var statearr_23064 = state_23039;
(statearr_23064[(19)] = inst_22991);

return statearr_23064;
})();
var statearr_23065_23140 = state_23039__$1;
(statearr_23065_23140[(2)] = inst_22992);

(statearr_23065_23140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (32))){
var inst_22981 = (state_23039[(20)]);
var inst_22980 = (state_23039[(9)]);
var inst_22982 = (state_23039[(11)]);
var inst_22979 = (state_23039[(21)]);
var inst_22994 = (state_23039[(2)]);
var inst_22995 = (inst_22982 + (1));
var tmp23060 = inst_22981;
var tmp23061 = inst_22980;
var tmp23062 = inst_22979;
var inst_22979__$1 = tmp23062;
var inst_22980__$1 = tmp23061;
var inst_22981__$1 = tmp23060;
var inst_22982__$1 = inst_22995;
var state_23039__$1 = (function (){var statearr_23066 = state_23039;
(statearr_23066[(20)] = inst_22981__$1);

(statearr_23066[(9)] = inst_22980__$1);

(statearr_23066[(11)] = inst_22982__$1);

(statearr_23066[(22)] = inst_22994);

(statearr_23066[(21)] = inst_22979__$1);

return statearr_23066;
})();
var statearr_23067_23141 = state_23039__$1;
(statearr_23067_23141[(2)] = null);

(statearr_23067_23141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (40))){
var inst_23007 = (state_23039[(23)]);
var inst_23011 = done.call(null,null);
var inst_23012 = cljs.core.async.untap_STAR_.call(null,m,inst_23007);
var state_23039__$1 = (function (){var statearr_23068 = state_23039;
(statearr_23068[(24)] = inst_23011);

return statearr_23068;
})();
var statearr_23069_23142 = state_23039__$1;
(statearr_23069_23142[(2)] = inst_23012);

(statearr_23069_23142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (33))){
var inst_22998 = (state_23039[(25)]);
var inst_23000 = cljs.core.chunked_seq_QMARK_.call(null,inst_22998);
var state_23039__$1 = state_23039;
if(inst_23000){
var statearr_23070_23143 = state_23039__$1;
(statearr_23070_23143[(1)] = (36));

} else {
var statearr_23071_23144 = state_23039__$1;
(statearr_23071_23144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (13))){
var inst_22930 = (state_23039[(26)]);
var inst_22933 = cljs.core.async.close_BANG_.call(null,inst_22930);
var state_23039__$1 = state_23039;
var statearr_23072_23145 = state_23039__$1;
(statearr_23072_23145[(2)] = inst_22933);

(statearr_23072_23145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (22))){
var inst_22951 = (state_23039[(8)]);
var inst_22954 = cljs.core.async.close_BANG_.call(null,inst_22951);
var state_23039__$1 = state_23039;
var statearr_23073_23146 = state_23039__$1;
(statearr_23073_23146[(2)] = inst_22954);

(statearr_23073_23146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (36))){
var inst_22998 = (state_23039[(25)]);
var inst_23002 = cljs.core.chunk_first.call(null,inst_22998);
var inst_23003 = cljs.core.chunk_rest.call(null,inst_22998);
var inst_23004 = cljs.core.count.call(null,inst_23002);
var inst_22979 = inst_23003;
var inst_22980 = inst_23002;
var inst_22981 = inst_23004;
var inst_22982 = (0);
var state_23039__$1 = (function (){var statearr_23074 = state_23039;
(statearr_23074[(20)] = inst_22981);

(statearr_23074[(9)] = inst_22980);

(statearr_23074[(11)] = inst_22982);

(statearr_23074[(21)] = inst_22979);

return statearr_23074;
})();
var statearr_23075_23147 = state_23039__$1;
(statearr_23075_23147[(2)] = null);

(statearr_23075_23147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (41))){
var inst_22998 = (state_23039[(25)]);
var inst_23014 = (state_23039[(2)]);
var inst_23015 = cljs.core.next.call(null,inst_22998);
var inst_22979 = inst_23015;
var inst_22980 = null;
var inst_22981 = (0);
var inst_22982 = (0);
var state_23039__$1 = (function (){var statearr_23076 = state_23039;
(statearr_23076[(20)] = inst_22981);

(statearr_23076[(9)] = inst_22980);

(statearr_23076[(27)] = inst_23014);

(statearr_23076[(11)] = inst_22982);

(statearr_23076[(21)] = inst_22979);

return statearr_23076;
})();
var statearr_23077_23148 = state_23039__$1;
(statearr_23077_23148[(2)] = null);

(statearr_23077_23148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (43))){
var state_23039__$1 = state_23039;
var statearr_23078_23149 = state_23039__$1;
(statearr_23078_23149[(2)] = null);

(statearr_23078_23149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (29))){
var inst_23023 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23079_23150 = state_23039__$1;
(statearr_23079_23150[(2)] = inst_23023);

(statearr_23079_23150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (44))){
var inst_23032 = (state_23039[(2)]);
var state_23039__$1 = (function (){var statearr_23080 = state_23039;
(statearr_23080[(28)] = inst_23032);

return statearr_23080;
})();
var statearr_23081_23151 = state_23039__$1;
(statearr_23081_23151[(2)] = null);

(statearr_23081_23151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (6))){
var inst_22971 = (state_23039[(29)]);
var inst_22970 = cljs.core.deref.call(null,cs);
var inst_22971__$1 = cljs.core.keys.call(null,inst_22970);
var inst_22972 = cljs.core.count.call(null,inst_22971__$1);
var inst_22973 = cljs.core.reset_BANG_.call(null,dctr,inst_22972);
var inst_22978 = cljs.core.seq.call(null,inst_22971__$1);
var inst_22979 = inst_22978;
var inst_22980 = null;
var inst_22981 = (0);
var inst_22982 = (0);
var state_23039__$1 = (function (){var statearr_23082 = state_23039;
(statearr_23082[(30)] = inst_22973);

(statearr_23082[(20)] = inst_22981);

(statearr_23082[(9)] = inst_22980);

(statearr_23082[(29)] = inst_22971__$1);

(statearr_23082[(11)] = inst_22982);

(statearr_23082[(21)] = inst_22979);

return statearr_23082;
})();
var statearr_23083_23152 = state_23039__$1;
(statearr_23083_23152[(2)] = null);

(statearr_23083_23152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (28))){
var inst_22979 = (state_23039[(21)]);
var inst_22998 = (state_23039[(25)]);
var inst_22998__$1 = cljs.core.seq.call(null,inst_22979);
var state_23039__$1 = (function (){var statearr_23084 = state_23039;
(statearr_23084[(25)] = inst_22998__$1);

return statearr_23084;
})();
if(inst_22998__$1){
var statearr_23085_23153 = state_23039__$1;
(statearr_23085_23153[(1)] = (33));

} else {
var statearr_23086_23154 = state_23039__$1;
(statearr_23086_23154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (25))){
var inst_22981 = (state_23039[(20)]);
var inst_22982 = (state_23039[(11)]);
var inst_22984 = (inst_22982 < inst_22981);
var inst_22985 = inst_22984;
var state_23039__$1 = state_23039;
if(cljs.core.truth_(inst_22985)){
var statearr_23087_23155 = state_23039__$1;
(statearr_23087_23155[(1)] = (27));

} else {
var statearr_23088_23156 = state_23039__$1;
(statearr_23088_23156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (34))){
var state_23039__$1 = state_23039;
var statearr_23089_23157 = state_23039__$1;
(statearr_23089_23157[(2)] = null);

(statearr_23089_23157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (17))){
var state_23039__$1 = state_23039;
var statearr_23090_23158 = state_23039__$1;
(statearr_23090_23158[(2)] = null);

(statearr_23090_23158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (3))){
var inst_23037 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23039__$1,inst_23037);
} else {
if((state_val_23040 === (12))){
var inst_22966 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23091_23159 = state_23039__$1;
(statearr_23091_23159[(2)] = inst_22966);

(statearr_23091_23159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (2))){
var state_23039__$1 = state_23039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23039__$1,(4),ch);
} else {
if((state_val_23040 === (23))){
var state_23039__$1 = state_23039;
var statearr_23092_23160 = state_23039__$1;
(statearr_23092_23160[(2)] = null);

(statearr_23092_23160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (35))){
var inst_23021 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23093_23161 = state_23039__$1;
(statearr_23093_23161[(2)] = inst_23021);

(statearr_23093_23161[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (19))){
var inst_22940 = (state_23039[(7)]);
var inst_22944 = cljs.core.chunk_first.call(null,inst_22940);
var inst_22945 = cljs.core.chunk_rest.call(null,inst_22940);
var inst_22946 = cljs.core.count.call(null,inst_22944);
var inst_22920 = inst_22945;
var inst_22921 = inst_22944;
var inst_22922 = inst_22946;
var inst_22923 = (0);
var state_23039__$1 = (function (){var statearr_23094 = state_23039;
(statearr_23094[(13)] = inst_22921);

(statearr_23094[(14)] = inst_22923);

(statearr_23094[(16)] = inst_22920);

(statearr_23094[(17)] = inst_22922);

return statearr_23094;
})();
var statearr_23095_23162 = state_23039__$1;
(statearr_23095_23162[(2)] = null);

(statearr_23095_23162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (11))){
var inst_22940 = (state_23039[(7)]);
var inst_22920 = (state_23039[(16)]);
var inst_22940__$1 = cljs.core.seq.call(null,inst_22920);
var state_23039__$1 = (function (){var statearr_23096 = state_23039;
(statearr_23096[(7)] = inst_22940__$1);

return statearr_23096;
})();
if(inst_22940__$1){
var statearr_23097_23163 = state_23039__$1;
(statearr_23097_23163[(1)] = (16));

} else {
var statearr_23098_23164 = state_23039__$1;
(statearr_23098_23164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (9))){
var inst_22968 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23099_23165 = state_23039__$1;
(statearr_23099_23165[(2)] = inst_22968);

(statearr_23099_23165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (5))){
var inst_22918 = cljs.core.deref.call(null,cs);
var inst_22919 = cljs.core.seq.call(null,inst_22918);
var inst_22920 = inst_22919;
var inst_22921 = null;
var inst_22922 = (0);
var inst_22923 = (0);
var state_23039__$1 = (function (){var statearr_23100 = state_23039;
(statearr_23100[(13)] = inst_22921);

(statearr_23100[(14)] = inst_22923);

(statearr_23100[(16)] = inst_22920);

(statearr_23100[(17)] = inst_22922);

return statearr_23100;
})();
var statearr_23101_23166 = state_23039__$1;
(statearr_23101_23166[(2)] = null);

(statearr_23101_23166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (14))){
var state_23039__$1 = state_23039;
var statearr_23102_23167 = state_23039__$1;
(statearr_23102_23167[(2)] = null);

(statearr_23102_23167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (45))){
var inst_23029 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23103_23168 = state_23039__$1;
(statearr_23103_23168[(2)] = inst_23029);

(statearr_23103_23168[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (26))){
var inst_22971 = (state_23039[(29)]);
var inst_23025 = (state_23039[(2)]);
var inst_23026 = cljs.core.seq.call(null,inst_22971);
var state_23039__$1 = (function (){var statearr_23104 = state_23039;
(statearr_23104[(31)] = inst_23025);

return statearr_23104;
})();
if(inst_23026){
var statearr_23105_23169 = state_23039__$1;
(statearr_23105_23169[(1)] = (42));

} else {
var statearr_23106_23170 = state_23039__$1;
(statearr_23106_23170[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (16))){
var inst_22940 = (state_23039[(7)]);
var inst_22942 = cljs.core.chunked_seq_QMARK_.call(null,inst_22940);
var state_23039__$1 = state_23039;
if(inst_22942){
var statearr_23107_23171 = state_23039__$1;
(statearr_23107_23171[(1)] = (19));

} else {
var statearr_23108_23172 = state_23039__$1;
(statearr_23108_23172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (38))){
var inst_23018 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23109_23173 = state_23039__$1;
(statearr_23109_23173[(2)] = inst_23018);

(statearr_23109_23173[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (30))){
var state_23039__$1 = state_23039;
var statearr_23110_23174 = state_23039__$1;
(statearr_23110_23174[(2)] = null);

(statearr_23110_23174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (10))){
var inst_22921 = (state_23039[(13)]);
var inst_22923 = (state_23039[(14)]);
var inst_22929 = cljs.core._nth.call(null,inst_22921,inst_22923);
var inst_22930 = cljs.core.nth.call(null,inst_22929,(0),null);
var inst_22931 = cljs.core.nth.call(null,inst_22929,(1),null);
var state_23039__$1 = (function (){var statearr_23111 = state_23039;
(statearr_23111[(26)] = inst_22930);

return statearr_23111;
})();
if(cljs.core.truth_(inst_22931)){
var statearr_23112_23175 = state_23039__$1;
(statearr_23112_23175[(1)] = (13));

} else {
var statearr_23113_23176 = state_23039__$1;
(statearr_23113_23176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (18))){
var inst_22964 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23114_23177 = state_23039__$1;
(statearr_23114_23177[(2)] = inst_22964);

(statearr_23114_23177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (42))){
var state_23039__$1 = state_23039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23039__$1,(45),dchan);
} else {
if((state_val_23040 === (37))){
var inst_23007 = (state_23039[(23)]);
var inst_22911 = (state_23039[(12)]);
var inst_22998 = (state_23039[(25)]);
var inst_23007__$1 = cljs.core.first.call(null,inst_22998);
var inst_23008 = cljs.core.async.put_BANG_.call(null,inst_23007__$1,inst_22911,done);
var state_23039__$1 = (function (){var statearr_23115 = state_23039;
(statearr_23115[(23)] = inst_23007__$1);

return statearr_23115;
})();
if(cljs.core.truth_(inst_23008)){
var statearr_23116_23178 = state_23039__$1;
(statearr_23116_23178[(1)] = (39));

} else {
var statearr_23117_23179 = state_23039__$1;
(statearr_23117_23179[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (8))){
var inst_22923 = (state_23039[(14)]);
var inst_22922 = (state_23039[(17)]);
var inst_22925 = (inst_22923 < inst_22922);
var inst_22926 = inst_22925;
var state_23039__$1 = state_23039;
if(cljs.core.truth_(inst_22926)){
var statearr_23118_23180 = state_23039__$1;
(statearr_23118_23180[(1)] = (10));

} else {
var statearr_23119_23181 = state_23039__$1;
(statearr_23119_23181[(1)] = (11));

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
});})(c__18854__auto___23127,cs,m,dchan,dctr,done))
;
return ((function (switch__18833__auto__,c__18854__auto___23127,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18834__auto__ = null;
var cljs$core$async$mult_$_state_machine__18834__auto____0 = (function (){
var statearr_23123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23123[(0)] = cljs$core$async$mult_$_state_machine__18834__auto__);

(statearr_23123[(1)] = (1));

return statearr_23123;
});
var cljs$core$async$mult_$_state_machine__18834__auto____1 = (function (state_23039){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_23039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e23124){if((e23124 instanceof Object)){
var ex__18837__auto__ = e23124;
var statearr_23125_23182 = state_23039;
(statearr_23125_23182[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23183 = state_23039;
state_23039 = G__23183;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18834__auto__ = function(state_23039){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18834__auto____1.call(this,state_23039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18834__auto____0;
cljs$core$async$mult_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18834__auto____1;
return cljs$core$async$mult_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___23127,cs,m,dchan,dctr,done))
})();
var state__18856__auto__ = (function (){var statearr_23126 = f__18855__auto__.call(null);
(statearr_23126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___23127);

return statearr_23126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___23127,cs,m,dchan,dctr,done))
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
var args23184 = [];
var len__17887__auto___23187 = arguments.length;
var i__17888__auto___23188 = (0);
while(true){
if((i__17888__auto___23188 < len__17887__auto___23187)){
args23184.push((arguments[i__17888__auto___23188]));

var G__23189 = (i__17888__auto___23188 + (1));
i__17888__auto___23188 = G__23189;
continue;
} else {
}
break;
}

var G__23186 = args23184.length;
switch (G__23186) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23184.length)].join('')));

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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m,ch);
} else {
var m__17484__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m,ch);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m,ch);
} else {
var m__17484__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m,ch);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m);
} else {
var m__17484__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m,state_map);
} else {
var m__17484__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m,state_map);
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
var x__17483__auto__ = (((m == null))?null:m);
var m__17484__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,m,mode);
} else {
var m__17484__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17894__auto__ = [];
var len__17887__auto___23201 = arguments.length;
var i__17888__auto___23202 = (0);
while(true){
if((i__17888__auto___23202 < len__17887__auto___23201)){
args__17894__auto__.push((arguments[i__17888__auto___23202]));

var G__23203 = (i__17888__auto___23202 + (1));
i__17888__auto___23202 = G__23203;
continue;
} else {
}
break;
}

var argseq__17895__auto__ = ((((3) < args__17894__auto__.length))?(new cljs.core.IndexedSeq(args__17894__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17895__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23195){
var map__23196 = p__23195;
var map__23196__$1 = ((((!((map__23196 == null)))?((((map__23196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23196):map__23196);
var opts = map__23196__$1;
var statearr_23198_23204 = state;
(statearr_23198_23204[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23196,map__23196__$1,opts){
return (function (val){
var statearr_23199_23205 = state;
(statearr_23199_23205[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23196,map__23196__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23200_23206 = state;
(statearr_23200_23206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23191){
var G__23192 = cljs.core.first.call(null,seq23191);
var seq23191__$1 = cljs.core.next.call(null,seq23191);
var G__23193 = cljs.core.first.call(null,seq23191__$1);
var seq23191__$2 = cljs.core.next.call(null,seq23191__$1);
var G__23194 = cljs.core.first.call(null,seq23191__$2);
var seq23191__$3 = cljs.core.next.call(null,seq23191__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23192,G__23193,G__23194,seq23191__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23370 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23371){
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
this.meta23371 = meta23371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23372,meta23371__$1){
var self__ = this;
var _23372__$1 = this;
return (new cljs.core.async.t_cljs$core$async23370(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23371__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23372){
var self__ = this;
var _23372__$1 = this;
return self__.meta23371;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23370.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23371","meta23371",1209057803,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23370";

cljs.core.async.t_cljs$core$async23370.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async23370");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23370 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23370(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23371){
return (new cljs.core.async.t_cljs$core$async23370(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23371));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23370(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18854__auto___23533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___23533,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___23533,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23470){
var state_val_23471 = (state_23470[(1)]);
if((state_val_23471 === (7))){
var inst_23388 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23472_23534 = state_23470__$1;
(statearr_23472_23534[(2)] = inst_23388);

(statearr_23472_23534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (20))){
var inst_23400 = (state_23470[(7)]);
var state_23470__$1 = state_23470;
var statearr_23473_23535 = state_23470__$1;
(statearr_23473_23535[(2)] = inst_23400);

(statearr_23473_23535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (27))){
var state_23470__$1 = state_23470;
var statearr_23474_23536 = state_23470__$1;
(statearr_23474_23536[(2)] = null);

(statearr_23474_23536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (1))){
var inst_23376 = (state_23470[(8)]);
var inst_23376__$1 = calc_state.call(null);
var inst_23378 = (inst_23376__$1 == null);
var inst_23379 = cljs.core.not.call(null,inst_23378);
var state_23470__$1 = (function (){var statearr_23475 = state_23470;
(statearr_23475[(8)] = inst_23376__$1);

return statearr_23475;
})();
if(inst_23379){
var statearr_23476_23537 = state_23470__$1;
(statearr_23476_23537[(1)] = (2));

} else {
var statearr_23477_23538 = state_23470__$1;
(statearr_23477_23538[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (24))){
var inst_23444 = (state_23470[(9)]);
var inst_23423 = (state_23470[(10)]);
var inst_23430 = (state_23470[(11)]);
var inst_23444__$1 = inst_23423.call(null,inst_23430);
var state_23470__$1 = (function (){var statearr_23478 = state_23470;
(statearr_23478[(9)] = inst_23444__$1);

return statearr_23478;
})();
if(cljs.core.truth_(inst_23444__$1)){
var statearr_23479_23539 = state_23470__$1;
(statearr_23479_23539[(1)] = (29));

} else {
var statearr_23480_23540 = state_23470__$1;
(statearr_23480_23540[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (4))){
var inst_23391 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23391)){
var statearr_23481_23541 = state_23470__$1;
(statearr_23481_23541[(1)] = (8));

} else {
var statearr_23482_23542 = state_23470__$1;
(statearr_23482_23542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (15))){
var inst_23417 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23417)){
var statearr_23483_23543 = state_23470__$1;
(statearr_23483_23543[(1)] = (19));

} else {
var statearr_23484_23544 = state_23470__$1;
(statearr_23484_23544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (21))){
var inst_23422 = (state_23470[(12)]);
var inst_23422__$1 = (state_23470[(2)]);
var inst_23423 = cljs.core.get.call(null,inst_23422__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23424 = cljs.core.get.call(null,inst_23422__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23425 = cljs.core.get.call(null,inst_23422__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23470__$1 = (function (){var statearr_23485 = state_23470;
(statearr_23485[(10)] = inst_23423);

(statearr_23485[(13)] = inst_23424);

(statearr_23485[(12)] = inst_23422__$1);

return statearr_23485;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23470__$1,(22),inst_23425);
} else {
if((state_val_23471 === (31))){
var inst_23452 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23452)){
var statearr_23486_23545 = state_23470__$1;
(statearr_23486_23545[(1)] = (32));

} else {
var statearr_23487_23546 = state_23470__$1;
(statearr_23487_23546[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (32))){
var inst_23429 = (state_23470[(14)]);
var state_23470__$1 = state_23470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23470__$1,(35),out,inst_23429);
} else {
if((state_val_23471 === (33))){
var inst_23422 = (state_23470[(12)]);
var inst_23400 = inst_23422;
var state_23470__$1 = (function (){var statearr_23488 = state_23470;
(statearr_23488[(7)] = inst_23400);

return statearr_23488;
})();
var statearr_23489_23547 = state_23470__$1;
(statearr_23489_23547[(2)] = null);

(statearr_23489_23547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (13))){
var inst_23400 = (state_23470[(7)]);
var inst_23407 = inst_23400.cljs$lang$protocol_mask$partition0$;
var inst_23408 = (inst_23407 & (64));
var inst_23409 = inst_23400.cljs$core$ISeq$;
var inst_23410 = (inst_23408) || (inst_23409);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23410)){
var statearr_23490_23548 = state_23470__$1;
(statearr_23490_23548[(1)] = (16));

} else {
var statearr_23491_23549 = state_23470__$1;
(statearr_23491_23549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (22))){
var inst_23429 = (state_23470[(14)]);
var inst_23430 = (state_23470[(11)]);
var inst_23428 = (state_23470[(2)]);
var inst_23429__$1 = cljs.core.nth.call(null,inst_23428,(0),null);
var inst_23430__$1 = cljs.core.nth.call(null,inst_23428,(1),null);
var inst_23431 = (inst_23429__$1 == null);
var inst_23432 = cljs.core._EQ_.call(null,inst_23430__$1,change);
var inst_23433 = (inst_23431) || (inst_23432);
var state_23470__$1 = (function (){var statearr_23492 = state_23470;
(statearr_23492[(14)] = inst_23429__$1);

(statearr_23492[(11)] = inst_23430__$1);

return statearr_23492;
})();
if(cljs.core.truth_(inst_23433)){
var statearr_23493_23550 = state_23470__$1;
(statearr_23493_23550[(1)] = (23));

} else {
var statearr_23494_23551 = state_23470__$1;
(statearr_23494_23551[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (36))){
var inst_23422 = (state_23470[(12)]);
var inst_23400 = inst_23422;
var state_23470__$1 = (function (){var statearr_23495 = state_23470;
(statearr_23495[(7)] = inst_23400);

return statearr_23495;
})();
var statearr_23496_23552 = state_23470__$1;
(statearr_23496_23552[(2)] = null);

(statearr_23496_23552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (29))){
var inst_23444 = (state_23470[(9)]);
var state_23470__$1 = state_23470;
var statearr_23497_23553 = state_23470__$1;
(statearr_23497_23553[(2)] = inst_23444);

(statearr_23497_23553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (6))){
var state_23470__$1 = state_23470;
var statearr_23498_23554 = state_23470__$1;
(statearr_23498_23554[(2)] = false);

(statearr_23498_23554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (28))){
var inst_23440 = (state_23470[(2)]);
var inst_23441 = calc_state.call(null);
var inst_23400 = inst_23441;
var state_23470__$1 = (function (){var statearr_23499 = state_23470;
(statearr_23499[(7)] = inst_23400);

(statearr_23499[(15)] = inst_23440);

return statearr_23499;
})();
var statearr_23500_23555 = state_23470__$1;
(statearr_23500_23555[(2)] = null);

(statearr_23500_23555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (25))){
var inst_23466 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23501_23556 = state_23470__$1;
(statearr_23501_23556[(2)] = inst_23466);

(statearr_23501_23556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (34))){
var inst_23464 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23502_23557 = state_23470__$1;
(statearr_23502_23557[(2)] = inst_23464);

(statearr_23502_23557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (17))){
var state_23470__$1 = state_23470;
var statearr_23503_23558 = state_23470__$1;
(statearr_23503_23558[(2)] = false);

(statearr_23503_23558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (3))){
var state_23470__$1 = state_23470;
var statearr_23504_23559 = state_23470__$1;
(statearr_23504_23559[(2)] = false);

(statearr_23504_23559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (12))){
var inst_23468 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23470__$1,inst_23468);
} else {
if((state_val_23471 === (2))){
var inst_23376 = (state_23470[(8)]);
var inst_23381 = inst_23376.cljs$lang$protocol_mask$partition0$;
var inst_23382 = (inst_23381 & (64));
var inst_23383 = inst_23376.cljs$core$ISeq$;
var inst_23384 = (inst_23382) || (inst_23383);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23384)){
var statearr_23505_23560 = state_23470__$1;
(statearr_23505_23560[(1)] = (5));

} else {
var statearr_23506_23561 = state_23470__$1;
(statearr_23506_23561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (23))){
var inst_23429 = (state_23470[(14)]);
var inst_23435 = (inst_23429 == null);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23435)){
var statearr_23507_23562 = state_23470__$1;
(statearr_23507_23562[(1)] = (26));

} else {
var statearr_23508_23563 = state_23470__$1;
(statearr_23508_23563[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (35))){
var inst_23455 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23455)){
var statearr_23509_23564 = state_23470__$1;
(statearr_23509_23564[(1)] = (36));

} else {
var statearr_23510_23565 = state_23470__$1;
(statearr_23510_23565[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (19))){
var inst_23400 = (state_23470[(7)]);
var inst_23419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23400);
var state_23470__$1 = state_23470;
var statearr_23511_23566 = state_23470__$1;
(statearr_23511_23566[(2)] = inst_23419);

(statearr_23511_23566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (11))){
var inst_23400 = (state_23470[(7)]);
var inst_23404 = (inst_23400 == null);
var inst_23405 = cljs.core.not.call(null,inst_23404);
var state_23470__$1 = state_23470;
if(inst_23405){
var statearr_23512_23567 = state_23470__$1;
(statearr_23512_23567[(1)] = (13));

} else {
var statearr_23513_23568 = state_23470__$1;
(statearr_23513_23568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (9))){
var inst_23376 = (state_23470[(8)]);
var state_23470__$1 = state_23470;
var statearr_23514_23569 = state_23470__$1;
(statearr_23514_23569[(2)] = inst_23376);

(statearr_23514_23569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (5))){
var state_23470__$1 = state_23470;
var statearr_23515_23570 = state_23470__$1;
(statearr_23515_23570[(2)] = true);

(statearr_23515_23570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (14))){
var state_23470__$1 = state_23470;
var statearr_23516_23571 = state_23470__$1;
(statearr_23516_23571[(2)] = false);

(statearr_23516_23571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (26))){
var inst_23430 = (state_23470[(11)]);
var inst_23437 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23430);
var state_23470__$1 = state_23470;
var statearr_23517_23572 = state_23470__$1;
(statearr_23517_23572[(2)] = inst_23437);

(statearr_23517_23572[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (16))){
var state_23470__$1 = state_23470;
var statearr_23518_23573 = state_23470__$1;
(statearr_23518_23573[(2)] = true);

(statearr_23518_23573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (38))){
var inst_23460 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23519_23574 = state_23470__$1;
(statearr_23519_23574[(2)] = inst_23460);

(statearr_23519_23574[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (30))){
var inst_23423 = (state_23470[(10)]);
var inst_23424 = (state_23470[(13)]);
var inst_23430 = (state_23470[(11)]);
var inst_23447 = cljs.core.empty_QMARK_.call(null,inst_23423);
var inst_23448 = inst_23424.call(null,inst_23430);
var inst_23449 = cljs.core.not.call(null,inst_23448);
var inst_23450 = (inst_23447) && (inst_23449);
var state_23470__$1 = state_23470;
var statearr_23520_23575 = state_23470__$1;
(statearr_23520_23575[(2)] = inst_23450);

(statearr_23520_23575[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (10))){
var inst_23376 = (state_23470[(8)]);
var inst_23396 = (state_23470[(2)]);
var inst_23397 = cljs.core.get.call(null,inst_23396,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23398 = cljs.core.get.call(null,inst_23396,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23399 = cljs.core.get.call(null,inst_23396,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23400 = inst_23376;
var state_23470__$1 = (function (){var statearr_23521 = state_23470;
(statearr_23521[(7)] = inst_23400);

(statearr_23521[(16)] = inst_23397);

(statearr_23521[(17)] = inst_23398);

(statearr_23521[(18)] = inst_23399);

return statearr_23521;
})();
var statearr_23522_23576 = state_23470__$1;
(statearr_23522_23576[(2)] = null);

(statearr_23522_23576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (18))){
var inst_23414 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23523_23577 = state_23470__$1;
(statearr_23523_23577[(2)] = inst_23414);

(statearr_23523_23577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (37))){
var state_23470__$1 = state_23470;
var statearr_23524_23578 = state_23470__$1;
(statearr_23524_23578[(2)] = null);

(statearr_23524_23578[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (8))){
var inst_23376 = (state_23470[(8)]);
var inst_23393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23376);
var state_23470__$1 = state_23470;
var statearr_23525_23579 = state_23470__$1;
(statearr_23525_23579[(2)] = inst_23393);

(statearr_23525_23579[(1)] = (10));


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
});})(c__18854__auto___23533,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18833__auto__,c__18854__auto___23533,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18834__auto__ = null;
var cljs$core$async$mix_$_state_machine__18834__auto____0 = (function (){
var statearr_23529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23529[(0)] = cljs$core$async$mix_$_state_machine__18834__auto__);

(statearr_23529[(1)] = (1));

return statearr_23529;
});
var cljs$core$async$mix_$_state_machine__18834__auto____1 = (function (state_23470){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_23470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e23530){if((e23530 instanceof Object)){
var ex__18837__auto__ = e23530;
var statearr_23531_23580 = state_23470;
(statearr_23531_23580[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23581 = state_23470;
state_23470 = G__23581;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18834__auto__ = function(state_23470){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18834__auto____1.call(this,state_23470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18834__auto____0;
cljs$core$async$mix_$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18834__auto____1;
return cljs$core$async$mix_$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___23533,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18856__auto__ = (function (){var statearr_23532 = f__18855__auto__.call(null);
(statearr_23532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___23533);

return statearr_23532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___23533,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17483__auto__ = (((p == null))?null:p);
var m__17484__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17484__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17483__auto__ = (((p == null))?null:p);
var m__17484__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,p,v,ch);
} else {
var m__17484__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23582 = [];
var len__17887__auto___23585 = arguments.length;
var i__17888__auto___23586 = (0);
while(true){
if((i__17888__auto___23586 < len__17887__auto___23585)){
args23582.push((arguments[i__17888__auto___23586]));

var G__23587 = (i__17888__auto___23586 + (1));
i__17888__auto___23586 = G__23587;
continue;
} else {
}
break;
}

var G__23584 = args23582.length;
switch (G__23584) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23582.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17483__auto__ = (((p == null))?null:p);
var m__17484__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,p);
} else {
var m__17484__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,p);
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
var x__17483__auto__ = (((p == null))?null:p);
var m__17484__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17483__auto__)]);
if(!((m__17484__auto__ == null))){
return m__17484__auto__.call(null,p,v);
} else {
var m__17484__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17484__auto____$1 == null))){
return m__17484__auto____$1.call(null,p,v);
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
var args23590 = [];
var len__17887__auto___23715 = arguments.length;
var i__17888__auto___23716 = (0);
while(true){
if((i__17888__auto___23716 < len__17887__auto___23715)){
args23590.push((arguments[i__17888__auto___23716]));

var G__23717 = (i__17888__auto___23716 + (1));
i__17888__auto___23716 = G__23717;
continue;
} else {
}
break;
}

var G__23592 = args23590.length;
switch (G__23592) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23590.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16828__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16828__auto__)){
return or__16828__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16828__auto__,mults){
return (function (p1__23589_SHARP_){
if(cljs.core.truth_(p1__23589_SHARP_.call(null,topic))){
return p1__23589_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23589_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16828__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23593 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23594){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23594 = meta23594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23595,meta23594__$1){
var self__ = this;
var _23595__$1 = this;
return (new cljs.core.async.t_cljs$core$async23593(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23594__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23595){
var self__ = this;
var _23595__$1 = this;
return self__.meta23594;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23594","meta23594",1972463730,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23593";

cljs.core.async.t_cljs$core$async23593.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async23593");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23593 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23593(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23594){
return (new cljs.core.async.t_cljs$core$async23593(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23594));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23593(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18854__auto___23719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___23719,mults,ensure_mult,p){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___23719,mults,ensure_mult,p){
return (function (state_23667){
var state_val_23668 = (state_23667[(1)]);
if((state_val_23668 === (7))){
var inst_23663 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23669_23720 = state_23667__$1;
(statearr_23669_23720[(2)] = inst_23663);

(statearr_23669_23720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (20))){
var state_23667__$1 = state_23667;
var statearr_23670_23721 = state_23667__$1;
(statearr_23670_23721[(2)] = null);

(statearr_23670_23721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (1))){
var state_23667__$1 = state_23667;
var statearr_23671_23722 = state_23667__$1;
(statearr_23671_23722[(2)] = null);

(statearr_23671_23722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (24))){
var inst_23646 = (state_23667[(7)]);
var inst_23655 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23646);
var state_23667__$1 = state_23667;
var statearr_23672_23723 = state_23667__$1;
(statearr_23672_23723[(2)] = inst_23655);

(statearr_23672_23723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (4))){
var inst_23598 = (state_23667[(8)]);
var inst_23598__$1 = (state_23667[(2)]);
var inst_23599 = (inst_23598__$1 == null);
var state_23667__$1 = (function (){var statearr_23673 = state_23667;
(statearr_23673[(8)] = inst_23598__$1);

return statearr_23673;
})();
if(cljs.core.truth_(inst_23599)){
var statearr_23674_23724 = state_23667__$1;
(statearr_23674_23724[(1)] = (5));

} else {
var statearr_23675_23725 = state_23667__$1;
(statearr_23675_23725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (15))){
var inst_23640 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23676_23726 = state_23667__$1;
(statearr_23676_23726[(2)] = inst_23640);

(statearr_23676_23726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (21))){
var inst_23660 = (state_23667[(2)]);
var state_23667__$1 = (function (){var statearr_23677 = state_23667;
(statearr_23677[(9)] = inst_23660);

return statearr_23677;
})();
var statearr_23678_23727 = state_23667__$1;
(statearr_23678_23727[(2)] = null);

(statearr_23678_23727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (13))){
var inst_23622 = (state_23667[(10)]);
var inst_23624 = cljs.core.chunked_seq_QMARK_.call(null,inst_23622);
var state_23667__$1 = state_23667;
if(inst_23624){
var statearr_23679_23728 = state_23667__$1;
(statearr_23679_23728[(1)] = (16));

} else {
var statearr_23680_23729 = state_23667__$1;
(statearr_23680_23729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (22))){
var inst_23652 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
if(cljs.core.truth_(inst_23652)){
var statearr_23681_23730 = state_23667__$1;
(statearr_23681_23730[(1)] = (23));

} else {
var statearr_23682_23731 = state_23667__$1;
(statearr_23682_23731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (6))){
var inst_23598 = (state_23667[(8)]);
var inst_23646 = (state_23667[(7)]);
var inst_23648 = (state_23667[(11)]);
var inst_23646__$1 = topic_fn.call(null,inst_23598);
var inst_23647 = cljs.core.deref.call(null,mults);
var inst_23648__$1 = cljs.core.get.call(null,inst_23647,inst_23646__$1);
var state_23667__$1 = (function (){var statearr_23683 = state_23667;
(statearr_23683[(7)] = inst_23646__$1);

(statearr_23683[(11)] = inst_23648__$1);

return statearr_23683;
})();
if(cljs.core.truth_(inst_23648__$1)){
var statearr_23684_23732 = state_23667__$1;
(statearr_23684_23732[(1)] = (19));

} else {
var statearr_23685_23733 = state_23667__$1;
(statearr_23685_23733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (25))){
var inst_23657 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23686_23734 = state_23667__$1;
(statearr_23686_23734[(2)] = inst_23657);

(statearr_23686_23734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (17))){
var inst_23622 = (state_23667[(10)]);
var inst_23631 = cljs.core.first.call(null,inst_23622);
var inst_23632 = cljs.core.async.muxch_STAR_.call(null,inst_23631);
var inst_23633 = cljs.core.async.close_BANG_.call(null,inst_23632);
var inst_23634 = cljs.core.next.call(null,inst_23622);
var inst_23608 = inst_23634;
var inst_23609 = null;
var inst_23610 = (0);
var inst_23611 = (0);
var state_23667__$1 = (function (){var statearr_23687 = state_23667;
(statearr_23687[(12)] = inst_23633);

(statearr_23687[(13)] = inst_23609);

(statearr_23687[(14)] = inst_23608);

(statearr_23687[(15)] = inst_23610);

(statearr_23687[(16)] = inst_23611);

return statearr_23687;
})();
var statearr_23688_23735 = state_23667__$1;
(statearr_23688_23735[(2)] = null);

(statearr_23688_23735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (3))){
var inst_23665 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23667__$1,inst_23665);
} else {
if((state_val_23668 === (12))){
var inst_23642 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23689_23736 = state_23667__$1;
(statearr_23689_23736[(2)] = inst_23642);

(statearr_23689_23736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (2))){
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23667__$1,(4),ch);
} else {
if((state_val_23668 === (23))){
var state_23667__$1 = state_23667;
var statearr_23690_23737 = state_23667__$1;
(statearr_23690_23737[(2)] = null);

(statearr_23690_23737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (19))){
var inst_23598 = (state_23667[(8)]);
var inst_23648 = (state_23667[(11)]);
var inst_23650 = cljs.core.async.muxch_STAR_.call(null,inst_23648);
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23667__$1,(22),inst_23650,inst_23598);
} else {
if((state_val_23668 === (11))){
var inst_23608 = (state_23667[(14)]);
var inst_23622 = (state_23667[(10)]);
var inst_23622__$1 = cljs.core.seq.call(null,inst_23608);
var state_23667__$1 = (function (){var statearr_23691 = state_23667;
(statearr_23691[(10)] = inst_23622__$1);

return statearr_23691;
})();
if(inst_23622__$1){
var statearr_23692_23738 = state_23667__$1;
(statearr_23692_23738[(1)] = (13));

} else {
var statearr_23693_23739 = state_23667__$1;
(statearr_23693_23739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (9))){
var inst_23644 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23694_23740 = state_23667__$1;
(statearr_23694_23740[(2)] = inst_23644);

(statearr_23694_23740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (5))){
var inst_23605 = cljs.core.deref.call(null,mults);
var inst_23606 = cljs.core.vals.call(null,inst_23605);
var inst_23607 = cljs.core.seq.call(null,inst_23606);
var inst_23608 = inst_23607;
var inst_23609 = null;
var inst_23610 = (0);
var inst_23611 = (0);
var state_23667__$1 = (function (){var statearr_23695 = state_23667;
(statearr_23695[(13)] = inst_23609);

(statearr_23695[(14)] = inst_23608);

(statearr_23695[(15)] = inst_23610);

(statearr_23695[(16)] = inst_23611);

return statearr_23695;
})();
var statearr_23696_23741 = state_23667__$1;
(statearr_23696_23741[(2)] = null);

(statearr_23696_23741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (14))){
var state_23667__$1 = state_23667;
var statearr_23700_23742 = state_23667__$1;
(statearr_23700_23742[(2)] = null);

(statearr_23700_23742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (16))){
var inst_23622 = (state_23667[(10)]);
var inst_23626 = cljs.core.chunk_first.call(null,inst_23622);
var inst_23627 = cljs.core.chunk_rest.call(null,inst_23622);
var inst_23628 = cljs.core.count.call(null,inst_23626);
var inst_23608 = inst_23627;
var inst_23609 = inst_23626;
var inst_23610 = inst_23628;
var inst_23611 = (0);
var state_23667__$1 = (function (){var statearr_23701 = state_23667;
(statearr_23701[(13)] = inst_23609);

(statearr_23701[(14)] = inst_23608);

(statearr_23701[(15)] = inst_23610);

(statearr_23701[(16)] = inst_23611);

return statearr_23701;
})();
var statearr_23702_23743 = state_23667__$1;
(statearr_23702_23743[(2)] = null);

(statearr_23702_23743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (10))){
var inst_23609 = (state_23667[(13)]);
var inst_23608 = (state_23667[(14)]);
var inst_23610 = (state_23667[(15)]);
var inst_23611 = (state_23667[(16)]);
var inst_23616 = cljs.core._nth.call(null,inst_23609,inst_23611);
var inst_23617 = cljs.core.async.muxch_STAR_.call(null,inst_23616);
var inst_23618 = cljs.core.async.close_BANG_.call(null,inst_23617);
var inst_23619 = (inst_23611 + (1));
var tmp23697 = inst_23609;
var tmp23698 = inst_23608;
var tmp23699 = inst_23610;
var inst_23608__$1 = tmp23698;
var inst_23609__$1 = tmp23697;
var inst_23610__$1 = tmp23699;
var inst_23611__$1 = inst_23619;
var state_23667__$1 = (function (){var statearr_23703 = state_23667;
(statearr_23703[(13)] = inst_23609__$1);

(statearr_23703[(17)] = inst_23618);

(statearr_23703[(14)] = inst_23608__$1);

(statearr_23703[(15)] = inst_23610__$1);

(statearr_23703[(16)] = inst_23611__$1);

return statearr_23703;
})();
var statearr_23704_23744 = state_23667__$1;
(statearr_23704_23744[(2)] = null);

(statearr_23704_23744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (18))){
var inst_23637 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23705_23745 = state_23667__$1;
(statearr_23705_23745[(2)] = inst_23637);

(statearr_23705_23745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (8))){
var inst_23610 = (state_23667[(15)]);
var inst_23611 = (state_23667[(16)]);
var inst_23613 = (inst_23611 < inst_23610);
var inst_23614 = inst_23613;
var state_23667__$1 = state_23667;
if(cljs.core.truth_(inst_23614)){
var statearr_23706_23746 = state_23667__$1;
(statearr_23706_23746[(1)] = (10));

} else {
var statearr_23707_23747 = state_23667__$1;
(statearr_23707_23747[(1)] = (11));

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
});})(c__18854__auto___23719,mults,ensure_mult,p))
;
return ((function (switch__18833__auto__,c__18854__auto___23719,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_23711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23711[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_23711[(1)] = (1));

return statearr_23711;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_23667){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_23667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e23712){if((e23712 instanceof Object)){
var ex__18837__auto__ = e23712;
var statearr_23713_23748 = state_23667;
(statearr_23713_23748[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23749 = state_23667;
state_23667 = G__23749;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_23667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_23667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___23719,mults,ensure_mult,p))
})();
var state__18856__auto__ = (function (){var statearr_23714 = f__18855__auto__.call(null);
(statearr_23714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___23719);

return statearr_23714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___23719,mults,ensure_mult,p))
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
var args23750 = [];
var len__17887__auto___23753 = arguments.length;
var i__17888__auto___23754 = (0);
while(true){
if((i__17888__auto___23754 < len__17887__auto___23753)){
args23750.push((arguments[i__17888__auto___23754]));

var G__23755 = (i__17888__auto___23754 + (1));
i__17888__auto___23754 = G__23755;
continue;
} else {
}
break;
}

var G__23752 = args23750.length;
switch (G__23752) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23750.length)].join('')));

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
var args23757 = [];
var len__17887__auto___23760 = arguments.length;
var i__17888__auto___23761 = (0);
while(true){
if((i__17888__auto___23761 < len__17887__auto___23760)){
args23757.push((arguments[i__17888__auto___23761]));

var G__23762 = (i__17888__auto___23761 + (1));
i__17888__auto___23761 = G__23762;
continue;
} else {
}
break;
}

var G__23759 = args23757.length;
switch (G__23759) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23757.length)].join('')));

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
var args23764 = [];
var len__17887__auto___23835 = arguments.length;
var i__17888__auto___23836 = (0);
while(true){
if((i__17888__auto___23836 < len__17887__auto___23835)){
args23764.push((arguments[i__17888__auto___23836]));

var G__23837 = (i__17888__auto___23836 + (1));
i__17888__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23766 = args23764.length;
switch (G__23766) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23764.length)].join('')));

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
var c__18854__auto___23839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___23839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___23839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23805){
var state_val_23806 = (state_23805[(1)]);
if((state_val_23806 === (7))){
var state_23805__$1 = state_23805;
var statearr_23807_23840 = state_23805__$1;
(statearr_23807_23840[(2)] = null);

(statearr_23807_23840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (1))){
var state_23805__$1 = state_23805;
var statearr_23808_23841 = state_23805__$1;
(statearr_23808_23841[(2)] = null);

(statearr_23808_23841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (4))){
var inst_23769 = (state_23805[(7)]);
var inst_23771 = (inst_23769 < cnt);
var state_23805__$1 = state_23805;
if(cljs.core.truth_(inst_23771)){
var statearr_23809_23842 = state_23805__$1;
(statearr_23809_23842[(1)] = (6));

} else {
var statearr_23810_23843 = state_23805__$1;
(statearr_23810_23843[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (15))){
var inst_23801 = (state_23805[(2)]);
var state_23805__$1 = state_23805;
var statearr_23811_23844 = state_23805__$1;
(statearr_23811_23844[(2)] = inst_23801);

(statearr_23811_23844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (13))){
var inst_23794 = cljs.core.async.close_BANG_.call(null,out);
var state_23805__$1 = state_23805;
var statearr_23812_23845 = state_23805__$1;
(statearr_23812_23845[(2)] = inst_23794);

(statearr_23812_23845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (6))){
var state_23805__$1 = state_23805;
var statearr_23813_23846 = state_23805__$1;
(statearr_23813_23846[(2)] = null);

(statearr_23813_23846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (3))){
var inst_23803 = (state_23805[(2)]);
var state_23805__$1 = state_23805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23805__$1,inst_23803);
} else {
if((state_val_23806 === (12))){
var inst_23791 = (state_23805[(8)]);
var inst_23791__$1 = (state_23805[(2)]);
var inst_23792 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23791__$1);
var state_23805__$1 = (function (){var statearr_23814 = state_23805;
(statearr_23814[(8)] = inst_23791__$1);

return statearr_23814;
})();
if(cljs.core.truth_(inst_23792)){
var statearr_23815_23847 = state_23805__$1;
(statearr_23815_23847[(1)] = (13));

} else {
var statearr_23816_23848 = state_23805__$1;
(statearr_23816_23848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (2))){
var inst_23768 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23769 = (0);
var state_23805__$1 = (function (){var statearr_23817 = state_23805;
(statearr_23817[(7)] = inst_23769);

(statearr_23817[(9)] = inst_23768);

return statearr_23817;
})();
var statearr_23818_23849 = state_23805__$1;
(statearr_23818_23849[(2)] = null);

(statearr_23818_23849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (11))){
var inst_23769 = (state_23805[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23805,(10),Object,null,(9));
var inst_23778 = chs__$1.call(null,inst_23769);
var inst_23779 = done.call(null,inst_23769);
var inst_23780 = cljs.core.async.take_BANG_.call(null,inst_23778,inst_23779);
var state_23805__$1 = state_23805;
var statearr_23819_23850 = state_23805__$1;
(statearr_23819_23850[(2)] = inst_23780);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (9))){
var inst_23769 = (state_23805[(7)]);
var inst_23782 = (state_23805[(2)]);
var inst_23783 = (inst_23769 + (1));
var inst_23769__$1 = inst_23783;
var state_23805__$1 = (function (){var statearr_23820 = state_23805;
(statearr_23820[(7)] = inst_23769__$1);

(statearr_23820[(10)] = inst_23782);

return statearr_23820;
})();
var statearr_23821_23851 = state_23805__$1;
(statearr_23821_23851[(2)] = null);

(statearr_23821_23851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (5))){
var inst_23789 = (state_23805[(2)]);
var state_23805__$1 = (function (){var statearr_23822 = state_23805;
(statearr_23822[(11)] = inst_23789);

return statearr_23822;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23805__$1,(12),dchan);
} else {
if((state_val_23806 === (14))){
var inst_23791 = (state_23805[(8)]);
var inst_23796 = cljs.core.apply.call(null,f,inst_23791);
var state_23805__$1 = state_23805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23805__$1,(16),out,inst_23796);
} else {
if((state_val_23806 === (16))){
var inst_23798 = (state_23805[(2)]);
var state_23805__$1 = (function (){var statearr_23823 = state_23805;
(statearr_23823[(12)] = inst_23798);

return statearr_23823;
})();
var statearr_23824_23852 = state_23805__$1;
(statearr_23824_23852[(2)] = null);

(statearr_23824_23852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (10))){
var inst_23773 = (state_23805[(2)]);
var inst_23774 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23805__$1 = (function (){var statearr_23825 = state_23805;
(statearr_23825[(13)] = inst_23773);

return statearr_23825;
})();
var statearr_23826_23853 = state_23805__$1;
(statearr_23826_23853[(2)] = inst_23774);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23806 === (8))){
var inst_23787 = (state_23805[(2)]);
var state_23805__$1 = state_23805;
var statearr_23827_23854 = state_23805__$1;
(statearr_23827_23854[(2)] = inst_23787);

(statearr_23827_23854[(1)] = (5));


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
});})(c__18854__auto___23839,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18833__auto__,c__18854__auto___23839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_23831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23831[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_23831[(1)] = (1));

return statearr_23831;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_23805){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_23805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e23832){if((e23832 instanceof Object)){
var ex__18837__auto__ = e23832;
var statearr_23833_23855 = state_23805;
(statearr_23833_23855[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23856 = state_23805;
state_23805 = G__23856;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_23805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_23805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___23839,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18856__auto__ = (function (){var statearr_23834 = f__18855__auto__.call(null);
(statearr_23834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___23839);

return statearr_23834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___23839,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23858 = [];
var len__17887__auto___23914 = arguments.length;
var i__17888__auto___23915 = (0);
while(true){
if((i__17888__auto___23915 < len__17887__auto___23914)){
args23858.push((arguments[i__17888__auto___23915]));

var G__23916 = (i__17888__auto___23915 + (1));
i__17888__auto___23915 = G__23916;
continue;
} else {
}
break;
}

var G__23860 = args23858.length;
switch (G__23860) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23858.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18854__auto___23918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___23918,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___23918,out){
return (function (state_23890){
var state_val_23891 = (state_23890[(1)]);
if((state_val_23891 === (7))){
var inst_23869 = (state_23890[(7)]);
var inst_23870 = (state_23890[(8)]);
var inst_23869__$1 = (state_23890[(2)]);
var inst_23870__$1 = cljs.core.nth.call(null,inst_23869__$1,(0),null);
var inst_23871 = cljs.core.nth.call(null,inst_23869__$1,(1),null);
var inst_23872 = (inst_23870__$1 == null);
var state_23890__$1 = (function (){var statearr_23892 = state_23890;
(statearr_23892[(9)] = inst_23871);

(statearr_23892[(7)] = inst_23869__$1);

(statearr_23892[(8)] = inst_23870__$1);

return statearr_23892;
})();
if(cljs.core.truth_(inst_23872)){
var statearr_23893_23919 = state_23890__$1;
(statearr_23893_23919[(1)] = (8));

} else {
var statearr_23894_23920 = state_23890__$1;
(statearr_23894_23920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (1))){
var inst_23861 = cljs.core.vec.call(null,chs);
var inst_23862 = inst_23861;
var state_23890__$1 = (function (){var statearr_23895 = state_23890;
(statearr_23895[(10)] = inst_23862);

return statearr_23895;
})();
var statearr_23896_23921 = state_23890__$1;
(statearr_23896_23921[(2)] = null);

(statearr_23896_23921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (4))){
var inst_23862 = (state_23890[(10)]);
var state_23890__$1 = state_23890;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23890__$1,(7),inst_23862);
} else {
if((state_val_23891 === (6))){
var inst_23886 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23897_23922 = state_23890__$1;
(statearr_23897_23922[(2)] = inst_23886);

(statearr_23897_23922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (3))){
var inst_23888 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23890__$1,inst_23888);
} else {
if((state_val_23891 === (2))){
var inst_23862 = (state_23890[(10)]);
var inst_23864 = cljs.core.count.call(null,inst_23862);
var inst_23865 = (inst_23864 > (0));
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23865)){
var statearr_23899_23923 = state_23890__$1;
(statearr_23899_23923[(1)] = (4));

} else {
var statearr_23900_23924 = state_23890__$1;
(statearr_23900_23924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (11))){
var inst_23862 = (state_23890[(10)]);
var inst_23879 = (state_23890[(2)]);
var tmp23898 = inst_23862;
var inst_23862__$1 = tmp23898;
var state_23890__$1 = (function (){var statearr_23901 = state_23890;
(statearr_23901[(10)] = inst_23862__$1);

(statearr_23901[(11)] = inst_23879);

return statearr_23901;
})();
var statearr_23902_23925 = state_23890__$1;
(statearr_23902_23925[(2)] = null);

(statearr_23902_23925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (9))){
var inst_23870 = (state_23890[(8)]);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23890__$1,(11),out,inst_23870);
} else {
if((state_val_23891 === (5))){
var inst_23884 = cljs.core.async.close_BANG_.call(null,out);
var state_23890__$1 = state_23890;
var statearr_23903_23926 = state_23890__$1;
(statearr_23903_23926[(2)] = inst_23884);

(statearr_23903_23926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (10))){
var inst_23882 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23904_23927 = state_23890__$1;
(statearr_23904_23927[(2)] = inst_23882);

(statearr_23904_23927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (8))){
var inst_23871 = (state_23890[(9)]);
var inst_23862 = (state_23890[(10)]);
var inst_23869 = (state_23890[(7)]);
var inst_23870 = (state_23890[(8)]);
var inst_23874 = (function (){var cs = inst_23862;
var vec__23867 = inst_23869;
var v = inst_23870;
var c = inst_23871;
return ((function (cs,vec__23867,v,c,inst_23871,inst_23862,inst_23869,inst_23870,state_val_23891,c__18854__auto___23918,out){
return (function (p1__23857_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23857_SHARP_);
});
;})(cs,vec__23867,v,c,inst_23871,inst_23862,inst_23869,inst_23870,state_val_23891,c__18854__auto___23918,out))
})();
var inst_23875 = cljs.core.filterv.call(null,inst_23874,inst_23862);
var inst_23862__$1 = inst_23875;
var state_23890__$1 = (function (){var statearr_23905 = state_23890;
(statearr_23905[(10)] = inst_23862__$1);

return statearr_23905;
})();
var statearr_23906_23928 = state_23890__$1;
(statearr_23906_23928[(2)] = null);

(statearr_23906_23928[(1)] = (2));


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
});})(c__18854__auto___23918,out))
;
return ((function (switch__18833__auto__,c__18854__auto___23918,out){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_23910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23910[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_23910[(1)] = (1));

return statearr_23910;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_23890){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_23890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e23911){if((e23911 instanceof Object)){
var ex__18837__auto__ = e23911;
var statearr_23912_23929 = state_23890;
(statearr_23912_23929[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23930 = state_23890;
state_23890 = G__23930;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_23890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_23890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___23918,out))
})();
var state__18856__auto__ = (function (){var statearr_23913 = f__18855__auto__.call(null);
(statearr_23913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___23918);

return statearr_23913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___23918,out))
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
var args23931 = [];
var len__17887__auto___23980 = arguments.length;
var i__17888__auto___23981 = (0);
while(true){
if((i__17888__auto___23981 < len__17887__auto___23980)){
args23931.push((arguments[i__17888__auto___23981]));

var G__23982 = (i__17888__auto___23981 + (1));
i__17888__auto___23981 = G__23982;
continue;
} else {
}
break;
}

var G__23933 = args23931.length;
switch (G__23933) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23931.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18854__auto___23984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___23984,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___23984,out){
return (function (state_23957){
var state_val_23958 = (state_23957[(1)]);
if((state_val_23958 === (7))){
var inst_23939 = (state_23957[(7)]);
var inst_23939__$1 = (state_23957[(2)]);
var inst_23940 = (inst_23939__$1 == null);
var inst_23941 = cljs.core.not.call(null,inst_23940);
var state_23957__$1 = (function (){var statearr_23959 = state_23957;
(statearr_23959[(7)] = inst_23939__$1);

return statearr_23959;
})();
if(inst_23941){
var statearr_23960_23985 = state_23957__$1;
(statearr_23960_23985[(1)] = (8));

} else {
var statearr_23961_23986 = state_23957__$1;
(statearr_23961_23986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (1))){
var inst_23934 = (0);
var state_23957__$1 = (function (){var statearr_23962 = state_23957;
(statearr_23962[(8)] = inst_23934);

return statearr_23962;
})();
var statearr_23963_23987 = state_23957__$1;
(statearr_23963_23987[(2)] = null);

(statearr_23963_23987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (4))){
var state_23957__$1 = state_23957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23957__$1,(7),ch);
} else {
if((state_val_23958 === (6))){
var inst_23952 = (state_23957[(2)]);
var state_23957__$1 = state_23957;
var statearr_23964_23988 = state_23957__$1;
(statearr_23964_23988[(2)] = inst_23952);

(statearr_23964_23988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (3))){
var inst_23954 = (state_23957[(2)]);
var inst_23955 = cljs.core.async.close_BANG_.call(null,out);
var state_23957__$1 = (function (){var statearr_23965 = state_23957;
(statearr_23965[(9)] = inst_23954);

return statearr_23965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23957__$1,inst_23955);
} else {
if((state_val_23958 === (2))){
var inst_23934 = (state_23957[(8)]);
var inst_23936 = (inst_23934 < n);
var state_23957__$1 = state_23957;
if(cljs.core.truth_(inst_23936)){
var statearr_23966_23989 = state_23957__$1;
(statearr_23966_23989[(1)] = (4));

} else {
var statearr_23967_23990 = state_23957__$1;
(statearr_23967_23990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (11))){
var inst_23934 = (state_23957[(8)]);
var inst_23944 = (state_23957[(2)]);
var inst_23945 = (inst_23934 + (1));
var inst_23934__$1 = inst_23945;
var state_23957__$1 = (function (){var statearr_23968 = state_23957;
(statearr_23968[(8)] = inst_23934__$1);

(statearr_23968[(10)] = inst_23944);

return statearr_23968;
})();
var statearr_23969_23991 = state_23957__$1;
(statearr_23969_23991[(2)] = null);

(statearr_23969_23991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (9))){
var state_23957__$1 = state_23957;
var statearr_23970_23992 = state_23957__$1;
(statearr_23970_23992[(2)] = null);

(statearr_23970_23992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (5))){
var state_23957__$1 = state_23957;
var statearr_23971_23993 = state_23957__$1;
(statearr_23971_23993[(2)] = null);

(statearr_23971_23993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (10))){
var inst_23949 = (state_23957[(2)]);
var state_23957__$1 = state_23957;
var statearr_23972_23994 = state_23957__$1;
(statearr_23972_23994[(2)] = inst_23949);

(statearr_23972_23994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (8))){
var inst_23939 = (state_23957[(7)]);
var state_23957__$1 = state_23957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23957__$1,(11),out,inst_23939);
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
});})(c__18854__auto___23984,out))
;
return ((function (switch__18833__auto__,c__18854__auto___23984,out){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23976[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_23957){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_23957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__18837__auto__ = e23977;
var statearr_23978_23995 = state_23957;
(statearr_23978_23995[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23996 = state_23957;
state_23957 = G__23996;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_23957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_23957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___23984,out))
})();
var state__18856__auto__ = (function (){var statearr_23979 = f__18855__auto__.call(null);
(statearr_23979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___23984);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___23984,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24004 = (function (map_LT_,f,ch,meta24005){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24005 = meta24005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24006,meta24005__$1){
var self__ = this;
var _24006__$1 = this;
return (new cljs.core.async.t_cljs$core$async24004(self__.map_LT_,self__.f,self__.ch,meta24005__$1));
});

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24006){
var self__ = this;
var _24006__$1 = this;
return self__.meta24005;
});

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24007 = (function (map_LT_,f,ch,meta24005,_,fn1,meta24008){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24005 = meta24005;
this._ = _;
this.fn1 = fn1;
this.meta24008 = meta24008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24009,meta24008__$1){
var self__ = this;
var _24009__$1 = this;
return (new cljs.core.async.t_cljs$core$async24007(self__.map_LT_,self__.f,self__.ch,self__.meta24005,self__._,self__.fn1,meta24008__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24009){
var self__ = this;
var _24009__$1 = this;
return self__.meta24008;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23997_SHARP_){
return f1.call(null,(((p1__23997_SHARP_ == null))?null:self__.f.call(null,p1__23997_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24007.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24005","meta24005",-1896711309,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24004","cljs.core.async/t_cljs$core$async24004",-897312967,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24008","meta24008",1129746970,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24007";

cljs.core.async.t_cljs$core$async24007.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async24007");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24007 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24007(map_LT___$1,f__$1,ch__$1,meta24005__$1,___$2,fn1__$1,meta24008){
return (new cljs.core.async.t_cljs$core$async24007(map_LT___$1,f__$1,ch__$1,meta24005__$1,___$2,fn1__$1,meta24008));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24007(self__.map_LT_,self__.f,self__.ch,self__.meta24005,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16816__auto__ = ret;
if(cljs.core.truth_(and__16816__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16816__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24005","meta24005",-1896711309,null)], null);
});

cljs.core.async.t_cljs$core$async24004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24004";

cljs.core.async.t_cljs$core$async24004.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async24004");
});

cljs.core.async.__GT_t_cljs$core$async24004 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24004(map_LT___$1,f__$1,ch__$1,meta24005){
return (new cljs.core.async.t_cljs$core$async24004(map_LT___$1,f__$1,ch__$1,meta24005));
});

}

return (new cljs.core.async.t_cljs$core$async24004(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24013 = (function (map_GT_,f,ch,meta24014){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24014 = meta24014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24015,meta24014__$1){
var self__ = this;
var _24015__$1 = this;
return (new cljs.core.async.t_cljs$core$async24013(self__.map_GT_,self__.f,self__.ch,meta24014__$1));
});

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24015){
var self__ = this;
var _24015__$1 = this;
return self__.meta24014;
});

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24014","meta24014",-159455698,null)], null);
});

cljs.core.async.t_cljs$core$async24013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24013";

cljs.core.async.t_cljs$core$async24013.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async24013");
});

cljs.core.async.__GT_t_cljs$core$async24013 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24013(map_GT___$1,f__$1,ch__$1,meta24014){
return (new cljs.core.async.t_cljs$core$async24013(map_GT___$1,f__$1,ch__$1,meta24014));
});

}

return (new cljs.core.async.t_cljs$core$async24013(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24019 = (function (filter_GT_,p,ch,meta24020){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24020 = meta24020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24021,meta24020__$1){
var self__ = this;
var _24021__$1 = this;
return (new cljs.core.async.t_cljs$core$async24019(self__.filter_GT_,self__.p,self__.ch,meta24020__$1));
});

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24021){
var self__ = this;
var _24021__$1 = this;
return self__.meta24020;
});

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24020","meta24020",1904392145,null)], null);
});

cljs.core.async.t_cljs$core$async24019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24019";

cljs.core.async.t_cljs$core$async24019.cljs$lang$ctorPrWriter = (function (this__17426__auto__,writer__17427__auto__,opt__17428__auto__){
return cljs.core._write.call(null,writer__17427__auto__,"cljs.core.async/t_cljs$core$async24019");
});

cljs.core.async.__GT_t_cljs$core$async24019 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24019(filter_GT___$1,p__$1,ch__$1,meta24020){
return (new cljs.core.async.t_cljs$core$async24019(filter_GT___$1,p__$1,ch__$1,meta24020));
});

}

return (new cljs.core.async.t_cljs$core$async24019(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24022 = [];
var len__17887__auto___24066 = arguments.length;
var i__17888__auto___24067 = (0);
while(true){
if((i__17888__auto___24067 < len__17887__auto___24066)){
args24022.push((arguments[i__17888__auto___24067]));

var G__24068 = (i__17888__auto___24067 + (1));
i__17888__auto___24067 = G__24068;
continue;
} else {
}
break;
}

var G__24024 = args24022.length;
switch (G__24024) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24022.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18854__auto___24070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___24070,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___24070,out){
return (function (state_24045){
var state_val_24046 = (state_24045[(1)]);
if((state_val_24046 === (7))){
var inst_24041 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24047_24071 = state_24045__$1;
(statearr_24047_24071[(2)] = inst_24041);

(statearr_24047_24071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (1))){
var state_24045__$1 = state_24045;
var statearr_24048_24072 = state_24045__$1;
(statearr_24048_24072[(2)] = null);

(statearr_24048_24072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (4))){
var inst_24027 = (state_24045[(7)]);
var inst_24027__$1 = (state_24045[(2)]);
var inst_24028 = (inst_24027__$1 == null);
var state_24045__$1 = (function (){var statearr_24049 = state_24045;
(statearr_24049[(7)] = inst_24027__$1);

return statearr_24049;
})();
if(cljs.core.truth_(inst_24028)){
var statearr_24050_24073 = state_24045__$1;
(statearr_24050_24073[(1)] = (5));

} else {
var statearr_24051_24074 = state_24045__$1;
(statearr_24051_24074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (6))){
var inst_24027 = (state_24045[(7)]);
var inst_24032 = p.call(null,inst_24027);
var state_24045__$1 = state_24045;
if(cljs.core.truth_(inst_24032)){
var statearr_24052_24075 = state_24045__$1;
(statearr_24052_24075[(1)] = (8));

} else {
var statearr_24053_24076 = state_24045__$1;
(statearr_24053_24076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (3))){
var inst_24043 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24045__$1,inst_24043);
} else {
if((state_val_24046 === (2))){
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24045__$1,(4),ch);
} else {
if((state_val_24046 === (11))){
var inst_24035 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24054_24077 = state_24045__$1;
(statearr_24054_24077[(2)] = inst_24035);

(statearr_24054_24077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (9))){
var state_24045__$1 = state_24045;
var statearr_24055_24078 = state_24045__$1;
(statearr_24055_24078[(2)] = null);

(statearr_24055_24078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (5))){
var inst_24030 = cljs.core.async.close_BANG_.call(null,out);
var state_24045__$1 = state_24045;
var statearr_24056_24079 = state_24045__$1;
(statearr_24056_24079[(2)] = inst_24030);

(statearr_24056_24079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (10))){
var inst_24038 = (state_24045[(2)]);
var state_24045__$1 = (function (){var statearr_24057 = state_24045;
(statearr_24057[(8)] = inst_24038);

return statearr_24057;
})();
var statearr_24058_24080 = state_24045__$1;
(statearr_24058_24080[(2)] = null);

(statearr_24058_24080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (8))){
var inst_24027 = (state_24045[(7)]);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24045__$1,(11),out,inst_24027);
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
});})(c__18854__auto___24070,out))
;
return ((function (switch__18833__auto__,c__18854__auto___24070,out){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_24062 = [null,null,null,null,null,null,null,null,null];
(statearr_24062[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_24062[(1)] = (1));

return statearr_24062;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_24045){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_24045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e24063){if((e24063 instanceof Object)){
var ex__18837__auto__ = e24063;
var statearr_24064_24081 = state_24045;
(statearr_24064_24081[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24082 = state_24045;
state_24045 = G__24082;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_24045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_24045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___24070,out))
})();
var state__18856__auto__ = (function (){var statearr_24065 = f__18855__auto__.call(null);
(statearr_24065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___24070);

return statearr_24065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___24070,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24083 = [];
var len__17887__auto___24086 = arguments.length;
var i__17888__auto___24087 = (0);
while(true){
if((i__17888__auto___24087 < len__17887__auto___24086)){
args24083.push((arguments[i__17888__auto___24087]));

var G__24088 = (i__17888__auto___24087 + (1));
i__17888__auto___24087 = G__24088;
continue;
} else {
}
break;
}

var G__24085 = args24083.length;
switch (G__24085) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24083.length)].join('')));

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
var c__18854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto__){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto__){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (7))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24257_24298 = state_24255__$1;
(statearr_24257_24298[(2)] = inst_24251);

(statearr_24257_24298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (20))){
var inst_24221 = (state_24255[(7)]);
var inst_24232 = (state_24255[(2)]);
var inst_24233 = cljs.core.next.call(null,inst_24221);
var inst_24207 = inst_24233;
var inst_24208 = null;
var inst_24209 = (0);
var inst_24210 = (0);
var state_24255__$1 = (function (){var statearr_24258 = state_24255;
(statearr_24258[(8)] = inst_24232);

(statearr_24258[(9)] = inst_24209);

(statearr_24258[(10)] = inst_24208);

(statearr_24258[(11)] = inst_24210);

(statearr_24258[(12)] = inst_24207);

return statearr_24258;
})();
var statearr_24259_24299 = state_24255__$1;
(statearr_24259_24299[(2)] = null);

(statearr_24259_24299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (1))){
var state_24255__$1 = state_24255;
var statearr_24260_24300 = state_24255__$1;
(statearr_24260_24300[(2)] = null);

(statearr_24260_24300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (4))){
var inst_24196 = (state_24255[(13)]);
var inst_24196__$1 = (state_24255[(2)]);
var inst_24197 = (inst_24196__$1 == null);
var state_24255__$1 = (function (){var statearr_24261 = state_24255;
(statearr_24261[(13)] = inst_24196__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24197)){
var statearr_24262_24301 = state_24255__$1;
(statearr_24262_24301[(1)] = (5));

} else {
var statearr_24263_24302 = state_24255__$1;
(statearr_24263_24302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (15))){
var state_24255__$1 = state_24255;
var statearr_24267_24303 = state_24255__$1;
(statearr_24267_24303[(2)] = null);

(statearr_24267_24303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (21))){
var state_24255__$1 = state_24255;
var statearr_24268_24304 = state_24255__$1;
(statearr_24268_24304[(2)] = null);

(statearr_24268_24304[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (13))){
var inst_24209 = (state_24255[(9)]);
var inst_24208 = (state_24255[(10)]);
var inst_24210 = (state_24255[(11)]);
var inst_24207 = (state_24255[(12)]);
var inst_24217 = (state_24255[(2)]);
var inst_24218 = (inst_24210 + (1));
var tmp24264 = inst_24209;
var tmp24265 = inst_24208;
var tmp24266 = inst_24207;
var inst_24207__$1 = tmp24266;
var inst_24208__$1 = tmp24265;
var inst_24209__$1 = tmp24264;
var inst_24210__$1 = inst_24218;
var state_24255__$1 = (function (){var statearr_24269 = state_24255;
(statearr_24269[(9)] = inst_24209__$1);

(statearr_24269[(10)] = inst_24208__$1);

(statearr_24269[(14)] = inst_24217);

(statearr_24269[(11)] = inst_24210__$1);

(statearr_24269[(12)] = inst_24207__$1);

return statearr_24269;
})();
var statearr_24270_24305 = state_24255__$1;
(statearr_24270_24305[(2)] = null);

(statearr_24270_24305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (22))){
var state_24255__$1 = state_24255;
var statearr_24271_24306 = state_24255__$1;
(statearr_24271_24306[(2)] = null);

(statearr_24271_24306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var inst_24196 = (state_24255[(13)]);
var inst_24205 = f.call(null,inst_24196);
var inst_24206 = cljs.core.seq.call(null,inst_24205);
var inst_24207 = inst_24206;
var inst_24208 = null;
var inst_24209 = (0);
var inst_24210 = (0);
var state_24255__$1 = (function (){var statearr_24272 = state_24255;
(statearr_24272[(9)] = inst_24209);

(statearr_24272[(10)] = inst_24208);

(statearr_24272[(11)] = inst_24210);

(statearr_24272[(12)] = inst_24207);

return statearr_24272;
})();
var statearr_24273_24307 = state_24255__$1;
(statearr_24273_24307[(2)] = null);

(statearr_24273_24307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (17))){
var inst_24221 = (state_24255[(7)]);
var inst_24225 = cljs.core.chunk_first.call(null,inst_24221);
var inst_24226 = cljs.core.chunk_rest.call(null,inst_24221);
var inst_24227 = cljs.core.count.call(null,inst_24225);
var inst_24207 = inst_24226;
var inst_24208 = inst_24225;
var inst_24209 = inst_24227;
var inst_24210 = (0);
var state_24255__$1 = (function (){var statearr_24274 = state_24255;
(statearr_24274[(9)] = inst_24209);

(statearr_24274[(10)] = inst_24208);

(statearr_24274[(11)] = inst_24210);

(statearr_24274[(12)] = inst_24207);

return statearr_24274;
})();
var statearr_24275_24308 = state_24255__$1;
(statearr_24275_24308[(2)] = null);

(statearr_24275_24308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (3))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (12))){
var inst_24241 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24276_24309 = state_24255__$1;
(statearr_24276_24309[(2)] = inst_24241);

(statearr_24276_24309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),in$);
} else {
if((state_val_24256 === (23))){
var inst_24249 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24277_24310 = state_24255__$1;
(statearr_24277_24310[(2)] = inst_24249);

(statearr_24277_24310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (19))){
var inst_24236 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24278_24311 = state_24255__$1;
(statearr_24278_24311[(2)] = inst_24236);

(statearr_24278_24311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (11))){
var inst_24207 = (state_24255[(12)]);
var inst_24221 = (state_24255[(7)]);
var inst_24221__$1 = cljs.core.seq.call(null,inst_24207);
var state_24255__$1 = (function (){var statearr_24279 = state_24255;
(statearr_24279[(7)] = inst_24221__$1);

return statearr_24279;
})();
if(inst_24221__$1){
var statearr_24280_24312 = state_24255__$1;
(statearr_24280_24312[(1)] = (14));

} else {
var statearr_24281_24313 = state_24255__$1;
(statearr_24281_24313[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (9))){
var inst_24243 = (state_24255[(2)]);
var inst_24244 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24255__$1 = (function (){var statearr_24282 = state_24255;
(statearr_24282[(15)] = inst_24243);

return statearr_24282;
})();
if(cljs.core.truth_(inst_24244)){
var statearr_24283_24314 = state_24255__$1;
(statearr_24283_24314[(1)] = (21));

} else {
var statearr_24284_24315 = state_24255__$1;
(statearr_24284_24315[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (5))){
var inst_24199 = cljs.core.async.close_BANG_.call(null,out);
var state_24255__$1 = state_24255;
var statearr_24285_24316 = state_24255__$1;
(statearr_24285_24316[(2)] = inst_24199);

(statearr_24285_24316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (14))){
var inst_24221 = (state_24255[(7)]);
var inst_24223 = cljs.core.chunked_seq_QMARK_.call(null,inst_24221);
var state_24255__$1 = state_24255;
if(inst_24223){
var statearr_24286_24317 = state_24255__$1;
(statearr_24286_24317[(1)] = (17));

} else {
var statearr_24287_24318 = state_24255__$1;
(statearr_24287_24318[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (16))){
var inst_24239 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24288_24319 = state_24255__$1;
(statearr_24288_24319[(2)] = inst_24239);

(statearr_24288_24319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (10))){
var inst_24208 = (state_24255[(10)]);
var inst_24210 = (state_24255[(11)]);
var inst_24215 = cljs.core._nth.call(null,inst_24208,inst_24210);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(13),out,inst_24215);
} else {
if((state_val_24256 === (18))){
var inst_24221 = (state_24255[(7)]);
var inst_24230 = cljs.core.first.call(null,inst_24221);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(20),out,inst_24230);
} else {
if((state_val_24256 === (8))){
var inst_24209 = (state_24255[(9)]);
var inst_24210 = (state_24255[(11)]);
var inst_24212 = (inst_24210 < inst_24209);
var inst_24213 = inst_24212;
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24213)){
var statearr_24289_24320 = state_24255__$1;
(statearr_24289_24320[(1)] = (10));

} else {
var statearr_24290_24321 = state_24255__$1;
(statearr_24290_24321[(1)] = (11));

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
});})(c__18854__auto__))
;
return ((function (switch__18833__auto__,c__18854__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18834__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18834__auto____0 = (function (){
var statearr_24294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24294[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18834__auto__);

(statearr_24294[(1)] = (1));

return statearr_24294;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18834__auto____1 = (function (state_24255){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e24295){if((e24295 instanceof Object)){
var ex__18837__auto__ = e24295;
var statearr_24296_24322 = state_24255;
(statearr_24296_24322[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24323 = state_24255;
state_24255 = G__24323;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18834__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18834__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18834__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18834__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto__))
})();
var state__18856__auto__ = (function (){var statearr_24297 = f__18855__auto__.call(null);
(statearr_24297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto__);

return statearr_24297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto__))
);

return c__18854__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24324 = [];
var len__17887__auto___24327 = arguments.length;
var i__17888__auto___24328 = (0);
while(true){
if((i__17888__auto___24328 < len__17887__auto___24327)){
args24324.push((arguments[i__17888__auto___24328]));

var G__24329 = (i__17888__auto___24328 + (1));
i__17888__auto___24328 = G__24329;
continue;
} else {
}
break;
}

var G__24326 = args24324.length;
switch (G__24326) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24324.length)].join('')));

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
var args24331 = [];
var len__17887__auto___24334 = arguments.length;
var i__17888__auto___24335 = (0);
while(true){
if((i__17888__auto___24335 < len__17887__auto___24334)){
args24331.push((arguments[i__17888__auto___24335]));

var G__24336 = (i__17888__auto___24335 + (1));
i__17888__auto___24335 = G__24336;
continue;
} else {
}
break;
}

var G__24333 = args24331.length;
switch (G__24333) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24331.length)].join('')));

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
var args24338 = [];
var len__17887__auto___24389 = arguments.length;
var i__17888__auto___24390 = (0);
while(true){
if((i__17888__auto___24390 < len__17887__auto___24389)){
args24338.push((arguments[i__17888__auto___24390]));

var G__24391 = (i__17888__auto___24390 + (1));
i__17888__auto___24390 = G__24391;
continue;
} else {
}
break;
}

var G__24340 = args24338.length;
switch (G__24340) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24338.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18854__auto___24393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___24393,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___24393,out){
return (function (state_24364){
var state_val_24365 = (state_24364[(1)]);
if((state_val_24365 === (7))){
var inst_24359 = (state_24364[(2)]);
var state_24364__$1 = state_24364;
var statearr_24366_24394 = state_24364__$1;
(statearr_24366_24394[(2)] = inst_24359);

(statearr_24366_24394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (1))){
var inst_24341 = null;
var state_24364__$1 = (function (){var statearr_24367 = state_24364;
(statearr_24367[(7)] = inst_24341);

return statearr_24367;
})();
var statearr_24368_24395 = state_24364__$1;
(statearr_24368_24395[(2)] = null);

(statearr_24368_24395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (4))){
var inst_24344 = (state_24364[(8)]);
var inst_24344__$1 = (state_24364[(2)]);
var inst_24345 = (inst_24344__$1 == null);
var inst_24346 = cljs.core.not.call(null,inst_24345);
var state_24364__$1 = (function (){var statearr_24369 = state_24364;
(statearr_24369[(8)] = inst_24344__$1);

return statearr_24369;
})();
if(inst_24346){
var statearr_24370_24396 = state_24364__$1;
(statearr_24370_24396[(1)] = (5));

} else {
var statearr_24371_24397 = state_24364__$1;
(statearr_24371_24397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (6))){
var state_24364__$1 = state_24364;
var statearr_24372_24398 = state_24364__$1;
(statearr_24372_24398[(2)] = null);

(statearr_24372_24398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (3))){
var inst_24361 = (state_24364[(2)]);
var inst_24362 = cljs.core.async.close_BANG_.call(null,out);
var state_24364__$1 = (function (){var statearr_24373 = state_24364;
(statearr_24373[(9)] = inst_24361);

return statearr_24373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24364__$1,inst_24362);
} else {
if((state_val_24365 === (2))){
var state_24364__$1 = state_24364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24364__$1,(4),ch);
} else {
if((state_val_24365 === (11))){
var inst_24344 = (state_24364[(8)]);
var inst_24353 = (state_24364[(2)]);
var inst_24341 = inst_24344;
var state_24364__$1 = (function (){var statearr_24374 = state_24364;
(statearr_24374[(7)] = inst_24341);

(statearr_24374[(10)] = inst_24353);

return statearr_24374;
})();
var statearr_24375_24399 = state_24364__$1;
(statearr_24375_24399[(2)] = null);

(statearr_24375_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (9))){
var inst_24344 = (state_24364[(8)]);
var state_24364__$1 = state_24364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24364__$1,(11),out,inst_24344);
} else {
if((state_val_24365 === (5))){
var inst_24344 = (state_24364[(8)]);
var inst_24341 = (state_24364[(7)]);
var inst_24348 = cljs.core._EQ_.call(null,inst_24344,inst_24341);
var state_24364__$1 = state_24364;
if(inst_24348){
var statearr_24377_24400 = state_24364__$1;
(statearr_24377_24400[(1)] = (8));

} else {
var statearr_24378_24401 = state_24364__$1;
(statearr_24378_24401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (10))){
var inst_24356 = (state_24364[(2)]);
var state_24364__$1 = state_24364;
var statearr_24379_24402 = state_24364__$1;
(statearr_24379_24402[(2)] = inst_24356);

(statearr_24379_24402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24365 === (8))){
var inst_24341 = (state_24364[(7)]);
var tmp24376 = inst_24341;
var inst_24341__$1 = tmp24376;
var state_24364__$1 = (function (){var statearr_24380 = state_24364;
(statearr_24380[(7)] = inst_24341__$1);

return statearr_24380;
})();
var statearr_24381_24403 = state_24364__$1;
(statearr_24381_24403[(2)] = null);

(statearr_24381_24403[(1)] = (2));


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
});})(c__18854__auto___24393,out))
;
return ((function (switch__18833__auto__,c__18854__auto___24393,out){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_24385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24385[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_24385[(1)] = (1));

return statearr_24385;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_24364){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_24364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e24386){if((e24386 instanceof Object)){
var ex__18837__auto__ = e24386;
var statearr_24387_24404 = state_24364;
(statearr_24387_24404[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24405 = state_24364;
state_24364 = G__24405;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_24364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_24364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___24393,out))
})();
var state__18856__auto__ = (function (){var statearr_24388 = f__18855__auto__.call(null);
(statearr_24388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___24393);

return statearr_24388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___24393,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24406 = [];
var len__17887__auto___24476 = arguments.length;
var i__17888__auto___24477 = (0);
while(true){
if((i__17888__auto___24477 < len__17887__auto___24476)){
args24406.push((arguments[i__17888__auto___24477]));

var G__24478 = (i__17888__auto___24477 + (1));
i__17888__auto___24477 = G__24478;
continue;
} else {
}
break;
}

var G__24408 = args24406.length;
switch (G__24408) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24406.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18854__auto___24480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___24480,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___24480,out){
return (function (state_24446){
var state_val_24447 = (state_24446[(1)]);
if((state_val_24447 === (7))){
var inst_24442 = (state_24446[(2)]);
var state_24446__$1 = state_24446;
var statearr_24448_24481 = state_24446__$1;
(statearr_24448_24481[(2)] = inst_24442);

(statearr_24448_24481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (1))){
var inst_24409 = (new Array(n));
var inst_24410 = inst_24409;
var inst_24411 = (0);
var state_24446__$1 = (function (){var statearr_24449 = state_24446;
(statearr_24449[(7)] = inst_24411);

(statearr_24449[(8)] = inst_24410);

return statearr_24449;
})();
var statearr_24450_24482 = state_24446__$1;
(statearr_24450_24482[(2)] = null);

(statearr_24450_24482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (4))){
var inst_24414 = (state_24446[(9)]);
var inst_24414__$1 = (state_24446[(2)]);
var inst_24415 = (inst_24414__$1 == null);
var inst_24416 = cljs.core.not.call(null,inst_24415);
var state_24446__$1 = (function (){var statearr_24451 = state_24446;
(statearr_24451[(9)] = inst_24414__$1);

return statearr_24451;
})();
if(inst_24416){
var statearr_24452_24483 = state_24446__$1;
(statearr_24452_24483[(1)] = (5));

} else {
var statearr_24453_24484 = state_24446__$1;
(statearr_24453_24484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (15))){
var inst_24436 = (state_24446[(2)]);
var state_24446__$1 = state_24446;
var statearr_24454_24485 = state_24446__$1;
(statearr_24454_24485[(2)] = inst_24436);

(statearr_24454_24485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (13))){
var state_24446__$1 = state_24446;
var statearr_24455_24486 = state_24446__$1;
(statearr_24455_24486[(2)] = null);

(statearr_24455_24486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (6))){
var inst_24411 = (state_24446[(7)]);
var inst_24432 = (inst_24411 > (0));
var state_24446__$1 = state_24446;
if(cljs.core.truth_(inst_24432)){
var statearr_24456_24487 = state_24446__$1;
(statearr_24456_24487[(1)] = (12));

} else {
var statearr_24457_24488 = state_24446__$1;
(statearr_24457_24488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (3))){
var inst_24444 = (state_24446[(2)]);
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24446__$1,inst_24444);
} else {
if((state_val_24447 === (12))){
var inst_24410 = (state_24446[(8)]);
var inst_24434 = cljs.core.vec.call(null,inst_24410);
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24446__$1,(15),out,inst_24434);
} else {
if((state_val_24447 === (2))){
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24446__$1,(4),ch);
} else {
if((state_val_24447 === (11))){
var inst_24426 = (state_24446[(2)]);
var inst_24427 = (new Array(n));
var inst_24410 = inst_24427;
var inst_24411 = (0);
var state_24446__$1 = (function (){var statearr_24458 = state_24446;
(statearr_24458[(7)] = inst_24411);

(statearr_24458[(8)] = inst_24410);

(statearr_24458[(10)] = inst_24426);

return statearr_24458;
})();
var statearr_24459_24489 = state_24446__$1;
(statearr_24459_24489[(2)] = null);

(statearr_24459_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (9))){
var inst_24410 = (state_24446[(8)]);
var inst_24424 = cljs.core.vec.call(null,inst_24410);
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24446__$1,(11),out,inst_24424);
} else {
if((state_val_24447 === (5))){
var inst_24411 = (state_24446[(7)]);
var inst_24410 = (state_24446[(8)]);
var inst_24414 = (state_24446[(9)]);
var inst_24419 = (state_24446[(11)]);
var inst_24418 = (inst_24410[inst_24411] = inst_24414);
var inst_24419__$1 = (inst_24411 + (1));
var inst_24420 = (inst_24419__$1 < n);
var state_24446__$1 = (function (){var statearr_24460 = state_24446;
(statearr_24460[(12)] = inst_24418);

(statearr_24460[(11)] = inst_24419__$1);

return statearr_24460;
})();
if(cljs.core.truth_(inst_24420)){
var statearr_24461_24490 = state_24446__$1;
(statearr_24461_24490[(1)] = (8));

} else {
var statearr_24462_24491 = state_24446__$1;
(statearr_24462_24491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (14))){
var inst_24439 = (state_24446[(2)]);
var inst_24440 = cljs.core.async.close_BANG_.call(null,out);
var state_24446__$1 = (function (){var statearr_24464 = state_24446;
(statearr_24464[(13)] = inst_24439);

return statearr_24464;
})();
var statearr_24465_24492 = state_24446__$1;
(statearr_24465_24492[(2)] = inst_24440);

(statearr_24465_24492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (10))){
var inst_24430 = (state_24446[(2)]);
var state_24446__$1 = state_24446;
var statearr_24466_24493 = state_24446__$1;
(statearr_24466_24493[(2)] = inst_24430);

(statearr_24466_24493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24447 === (8))){
var inst_24410 = (state_24446[(8)]);
var inst_24419 = (state_24446[(11)]);
var tmp24463 = inst_24410;
var inst_24410__$1 = tmp24463;
var inst_24411 = inst_24419;
var state_24446__$1 = (function (){var statearr_24467 = state_24446;
(statearr_24467[(7)] = inst_24411);

(statearr_24467[(8)] = inst_24410__$1);

return statearr_24467;
})();
var statearr_24468_24494 = state_24446__$1;
(statearr_24468_24494[(2)] = null);

(statearr_24468_24494[(1)] = (2));


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
});})(c__18854__auto___24480,out))
;
return ((function (switch__18833__auto__,c__18854__auto___24480,out){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_24472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24472[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_24472[(1)] = (1));

return statearr_24472;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_24446){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_24446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e24473){if((e24473 instanceof Object)){
var ex__18837__auto__ = e24473;
var statearr_24474_24495 = state_24446;
(statearr_24474_24495[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24496 = state_24446;
state_24446 = G__24496;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_24446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_24446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___24480,out))
})();
var state__18856__auto__ = (function (){var statearr_24475 = f__18855__auto__.call(null);
(statearr_24475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___24480);

return statearr_24475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___24480,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24497 = [];
var len__17887__auto___24571 = arguments.length;
var i__17888__auto___24572 = (0);
while(true){
if((i__17888__auto___24572 < len__17887__auto___24571)){
args24497.push((arguments[i__17888__auto___24572]));

var G__24573 = (i__17888__auto___24572 + (1));
i__17888__auto___24572 = G__24573;
continue;
} else {
}
break;
}

var G__24499 = args24497.length;
switch (G__24499) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24497.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18854__auto___24575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18854__auto___24575,out){
return (function (){
var f__18855__auto__ = (function (){var switch__18833__auto__ = ((function (c__18854__auto___24575,out){
return (function (state_24541){
var state_val_24542 = (state_24541[(1)]);
if((state_val_24542 === (7))){
var inst_24537 = (state_24541[(2)]);
var state_24541__$1 = state_24541;
var statearr_24543_24576 = state_24541__$1;
(statearr_24543_24576[(2)] = inst_24537);

(statearr_24543_24576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (1))){
var inst_24500 = [];
var inst_24501 = inst_24500;
var inst_24502 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24541__$1 = (function (){var statearr_24544 = state_24541;
(statearr_24544[(7)] = inst_24501);

(statearr_24544[(8)] = inst_24502);

return statearr_24544;
})();
var statearr_24545_24577 = state_24541__$1;
(statearr_24545_24577[(2)] = null);

(statearr_24545_24577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (4))){
var inst_24505 = (state_24541[(9)]);
var inst_24505__$1 = (state_24541[(2)]);
var inst_24506 = (inst_24505__$1 == null);
var inst_24507 = cljs.core.not.call(null,inst_24506);
var state_24541__$1 = (function (){var statearr_24546 = state_24541;
(statearr_24546[(9)] = inst_24505__$1);

return statearr_24546;
})();
if(inst_24507){
var statearr_24547_24578 = state_24541__$1;
(statearr_24547_24578[(1)] = (5));

} else {
var statearr_24548_24579 = state_24541__$1;
(statearr_24548_24579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (15))){
var inst_24531 = (state_24541[(2)]);
var state_24541__$1 = state_24541;
var statearr_24549_24580 = state_24541__$1;
(statearr_24549_24580[(2)] = inst_24531);

(statearr_24549_24580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (13))){
var state_24541__$1 = state_24541;
var statearr_24550_24581 = state_24541__$1;
(statearr_24550_24581[(2)] = null);

(statearr_24550_24581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (6))){
var inst_24501 = (state_24541[(7)]);
var inst_24526 = inst_24501.length;
var inst_24527 = (inst_24526 > (0));
var state_24541__$1 = state_24541;
if(cljs.core.truth_(inst_24527)){
var statearr_24551_24582 = state_24541__$1;
(statearr_24551_24582[(1)] = (12));

} else {
var statearr_24552_24583 = state_24541__$1;
(statearr_24552_24583[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (3))){
var inst_24539 = (state_24541[(2)]);
var state_24541__$1 = state_24541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24541__$1,inst_24539);
} else {
if((state_val_24542 === (12))){
var inst_24501 = (state_24541[(7)]);
var inst_24529 = cljs.core.vec.call(null,inst_24501);
var state_24541__$1 = state_24541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24541__$1,(15),out,inst_24529);
} else {
if((state_val_24542 === (2))){
var state_24541__$1 = state_24541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24541__$1,(4),ch);
} else {
if((state_val_24542 === (11))){
var inst_24509 = (state_24541[(10)]);
var inst_24505 = (state_24541[(9)]);
var inst_24519 = (state_24541[(2)]);
var inst_24520 = [];
var inst_24521 = inst_24520.push(inst_24505);
var inst_24501 = inst_24520;
var inst_24502 = inst_24509;
var state_24541__$1 = (function (){var statearr_24553 = state_24541;
(statearr_24553[(7)] = inst_24501);

(statearr_24553[(11)] = inst_24521);

(statearr_24553[(12)] = inst_24519);

(statearr_24553[(8)] = inst_24502);

return statearr_24553;
})();
var statearr_24554_24584 = state_24541__$1;
(statearr_24554_24584[(2)] = null);

(statearr_24554_24584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (9))){
var inst_24501 = (state_24541[(7)]);
var inst_24517 = cljs.core.vec.call(null,inst_24501);
var state_24541__$1 = state_24541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24541__$1,(11),out,inst_24517);
} else {
if((state_val_24542 === (5))){
var inst_24509 = (state_24541[(10)]);
var inst_24502 = (state_24541[(8)]);
var inst_24505 = (state_24541[(9)]);
var inst_24509__$1 = f.call(null,inst_24505);
var inst_24510 = cljs.core._EQ_.call(null,inst_24509__$1,inst_24502);
var inst_24511 = cljs.core.keyword_identical_QMARK_.call(null,inst_24502,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24512 = (inst_24510) || (inst_24511);
var state_24541__$1 = (function (){var statearr_24555 = state_24541;
(statearr_24555[(10)] = inst_24509__$1);

return statearr_24555;
})();
if(cljs.core.truth_(inst_24512)){
var statearr_24556_24585 = state_24541__$1;
(statearr_24556_24585[(1)] = (8));

} else {
var statearr_24557_24586 = state_24541__$1;
(statearr_24557_24586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (14))){
var inst_24534 = (state_24541[(2)]);
var inst_24535 = cljs.core.async.close_BANG_.call(null,out);
var state_24541__$1 = (function (){var statearr_24559 = state_24541;
(statearr_24559[(13)] = inst_24534);

return statearr_24559;
})();
var statearr_24560_24587 = state_24541__$1;
(statearr_24560_24587[(2)] = inst_24535);

(statearr_24560_24587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (10))){
var inst_24524 = (state_24541[(2)]);
var state_24541__$1 = state_24541;
var statearr_24561_24588 = state_24541__$1;
(statearr_24561_24588[(2)] = inst_24524);

(statearr_24561_24588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24542 === (8))){
var inst_24509 = (state_24541[(10)]);
var inst_24501 = (state_24541[(7)]);
var inst_24505 = (state_24541[(9)]);
var inst_24514 = inst_24501.push(inst_24505);
var tmp24558 = inst_24501;
var inst_24501__$1 = tmp24558;
var inst_24502 = inst_24509;
var state_24541__$1 = (function (){var statearr_24562 = state_24541;
(statearr_24562[(14)] = inst_24514);

(statearr_24562[(7)] = inst_24501__$1);

(statearr_24562[(8)] = inst_24502);

return statearr_24562;
})();
var statearr_24563_24589 = state_24541__$1;
(statearr_24563_24589[(2)] = null);

(statearr_24563_24589[(1)] = (2));


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
});})(c__18854__auto___24575,out))
;
return ((function (switch__18833__auto__,c__18854__auto___24575,out){
return (function() {
var cljs$core$async$state_machine__18834__auto__ = null;
var cljs$core$async$state_machine__18834__auto____0 = (function (){
var statearr_24567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24567[(0)] = cljs$core$async$state_machine__18834__auto__);

(statearr_24567[(1)] = (1));

return statearr_24567;
});
var cljs$core$async$state_machine__18834__auto____1 = (function (state_24541){
while(true){
var ret_value__18835__auto__ = (function (){try{while(true){
var result__18836__auto__ = switch__18833__auto__.call(null,state_24541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18836__auto__;
}
break;
}
}catch (e24568){if((e24568 instanceof Object)){
var ex__18837__auto__ = e24568;
var statearr_24569_24590 = state_24541;
(statearr_24569_24590[(5)] = ex__18837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24591 = state_24541;
state_24541 = G__24591;
continue;
} else {
return ret_value__18835__auto__;
}
break;
}
});
cljs$core$async$state_machine__18834__auto__ = function(state_24541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18834__auto____1.call(this,state_24541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18834__auto____0;
cljs$core$async$state_machine__18834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18834__auto____1;
return cljs$core$async$state_machine__18834__auto__;
})()
;})(switch__18833__auto__,c__18854__auto___24575,out))
})();
var state__18856__auto__ = (function (){var statearr_24570 = f__18855__auto__.call(null);
(statearr_24570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18854__auto___24575);

return statearr_24570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18856__auto__);
});})(c__18854__auto___24575,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map