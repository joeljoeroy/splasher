! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("photoswipe"), require("photoswipe/dist/photoswipe-ui-default")) : "function" == typeof define && define.amd ? define("NaturalGallery", ["photoswipe", "photoswipe/dist/photoswipe-ui-default"], e) : "object" == typeof exports ? exports.NaturalGallery = e(require("photoswipe"), require("photoswipe/dist/photoswipe-ui-default")) : t.NaturalGallery = e(t.PhotoSwipe, t.PhotoSwipeUI_Default)
}(this, (function(t, e) {
    return (() => {
        "use strict";
        var i = {
                229: e => {
                    e.exports = t
                },
                204: t => {
                    t.exports = e
                }
            },
            n = {};

        function o(t) {
            var e = n[t];
            if (void 0 !== e) return e.exports;
            var s = n[t] = {
                exports: {}
            };
            return i[t](s, s.exports, o), s.exports
        }
        o.n = t => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return o.d(e, {
                a: e
            }), e
        }, o.d = (t, e) => {
            for (var i in e) o.o(e, i) && !o.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
        }, o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), o.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        };
        var s = {};
        return (() => {
            function t(t, e) {
                const i = t.createElement("div");
                return i.innerHTML = '<svg viewBox="0 0 100 100"><use xlink:href="#' + e + '"></use></svg>', i.querySelector("svg")
            }

            function e(t, e) {
                let i = Number(t.enlargedWidth) / Number(t.enlargedHeight);
                return e && (e.min && i < e.min ? i = e.min : e.max && i > e.max && (i = e.max)), i
            }
            o.r(s), o.d(s, {
                Masonry: () => oi,
                Natural: () => ii,
                Square: () => si
            });
            const i = function(t) {
                return t
            };
            const n = function(t, e, i) {
                switch (i.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, i[0]);
                    case 2:
                        return t.call(e, i[0], i[1]);
                    case 3:
                        return t.call(e, i[0], i[1], i[2])
                }
                return t.apply(e, i)
            };
            var r = Math.max;
            const l = function(t, e, i) {
                return e = r(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var o = arguments, s = -1, l = r(o.length - e, 0), c = Array(l); ++s < l;) c[s] = o[e + s];
                        s = -1;
                        for (var h = Array(e + 1); ++s < e;) h[s] = o[s];
                        return h[e] = i(c), n(t, this, h)
                    }
            };
            const c = function(t) {
                return function() {
                    return t
                }
            };
            const h = "object" == typeof global && global && global.Object === Object && global;
            var a = "object" == typeof self && self && self.Object === Object && self;
            const u = h || a || Function("return this")();
            const d = u.Symbol;
            var p = Object.prototype,
                f = p.hasOwnProperty,
                m = p.toString,
                g = d ? d.toStringTag : void 0;
            const v = function(t) {
                var e = f.call(t, g),
                    i = t[g];
                try {
                    t[g] = void 0;
                    var n = !0
                } catch (t) {}
                var o = m.call(t);
                return n && (e ? t[g] = i : delete t[g]), o
            };
            var b = Object.prototype.toString;
            const y = function(t) {
                return b.call(t)
            };
            var w = d ? d.toStringTag : void 0;
            const _ = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : w && w in Object(t) ? v(t) : y(t)
            };
            const R = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            };
            const E = function(t) {
                if (!R(t)) return !1;
                var e = _(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            };
            const x = u["__core-js_shared__"];
            var C, I = (C = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "";
            const P = function(t) {
                return !!I && I in t
            };
            var j = Function.prototype.toString;
            const L = function(t) {
                if (null != t) {
                    try {
                        return j.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            };
            var O = /^\[object .+?Constructor\]$/,
                S = Function.prototype,
                z = Object.prototype,
                T = S.toString,
                B = z.hasOwnProperty,
                A = RegExp("^" + T.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const M = function(t) {
                return !(!R(t) || P(t)) && (E(t) ? A : O).test(L(t))
            };
            const k = function(t, e) {
                return null == t ? void 0 : t[e]
            };
            const H = function(t, e) {
                var i = k(t, e);
                return M(i) ? i : void 0
            };
            const W = function() {
                try {
                    var t = H(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }();
            const D = W ? function(t, e) {
                return W(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: c(e),
                    writable: !0
                })
            } : i;
            var N = Date.now;
            const q = function(t) {
                var e = 0,
                    i = 0;
                return function() {
                    var n = N(),
                        o = 16 - (n - i);
                    if (i = n, o > 0) {
                        if (++e >= 800) return arguments[0]
                    } else e = 0;
                    return t.apply(void 0, arguments)
                }
            }(D);
            const F = function(t, e) {
                return q(l(t, e, i), t + "")
            };
            const V = function(t, e) {
                return t === e || t != t && e != e
            };
            const $ = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            };
            const G = function(t) {
                return null != t && $(t.length) && !E(t)
            };
            var U = /^(?:0|[1-9]\d*)$/;
            const J = function(t, e) {
                var i = typeof t;
                return !!(e = null == e ? 9007199254740991 : e) && ("number" == i || "symbol" != i && U.test(t)) && t > -1 && t % 1 == 0 && t < e
            };
            const K = function(t, e, i) {
                if (!R(i)) return !1;
                var n = typeof e;
                return !!("number" == n ? G(i) && J(e, i.length) : "string" == n && e in i) && V(i[e], t)
            };
            const Q = function(t, e) {
                for (var i = -1, n = Array(t); ++i < t;) n[i] = e(i);
                return n
            };
            const X = function(t) {
                return null != t && "object" == typeof t
            };
            const Y = function(t) {
                return X(t) && "[object Arguments]" == _(t)
            };
            var Z = Object.prototype,
                tt = Z.hasOwnProperty,
                et = Z.propertyIsEnumerable;
            const it = Y(function() {
                return arguments
            }()) ? Y : function(t) {
                return X(t) && tt.call(t, "callee") && !et.call(t, "callee")
            };
            const nt = Array.isArray;
            const ot = function() {
                return !1
            };
            var st = "object" == typeof exports && exports && !exports.nodeType && exports,
                rt = st && "object" == typeof module && module && !module.nodeType && module,
                lt = rt && rt.exports === st ? u.Buffer : void 0;
            const ct = (lt ? lt.isBuffer : void 0) || ot;
            var ht = {};
            ht["[object Float32Array]"] = ht["[object Float64Array]"] = ht["[object Int8Array]"] = ht["[object Int16Array]"] = ht["[object Int32Array]"] = ht["[object Uint8Array]"] = ht["[object Uint8ClampedArray]"] = ht["[object Uint16Array]"] = ht["[object Uint32Array]"] = !0, ht["[object Arguments]"] = ht["[object Array]"] = ht["[object ArrayBuffer]"] = ht["[object Boolean]"] = ht["[object DataView]"] = ht["[object Date]"] = ht["[object Error]"] = ht["[object Function]"] = ht["[object Map]"] = ht["[object Number]"] = ht["[object Object]"] = ht["[object RegExp]"] = ht["[object Set]"] = ht["[object String]"] = ht["[object WeakMap]"] = !1;
            const at = function(t) {
                return X(t) && $(t.length) && !!ht[_(t)]
            };
            const ut = function(t) {
                return function(e) {
                    return t(e)
                }
            };
            var dt = "object" == typeof exports && exports && !exports.nodeType && exports,
                pt = dt && "object" == typeof module && module && !module.nodeType && module,
                ft = pt && pt.exports === dt && h.process,
                mt = function() {
                    try {
                        var t = pt && pt.require && pt.require("util").types;
                        return t || ft && ft.binding && ft.binding("util")
                    } catch (t) {}
                }();
            var gt = mt && mt.isTypedArray;
            const vt = gt ? ut(gt) : at;
            var bt = Object.prototype.hasOwnProperty;
            const yt = function(t, e) {
                var i = nt(t),
                    n = !i && it(t),
                    o = !i && !n && ct(t),
                    s = !i && !n && !o && vt(t),
                    r = i || n || o || s,
                    l = r ? Q(t.length, String) : [],
                    c = l.length;
                for (var h in t) !e && !bt.call(t, h) || r && ("length" == h || o && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || J(h, c)) || l.push(h);
                return l
            };
            var wt = Object.prototype;
            const _t = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || wt)
            };
            const Rt = function(t) {
                var e = [];
                if (null != t)
                    for (var i in Object(t)) e.push(i);
                return e
            };
            var Et = Object.prototype.hasOwnProperty;
            const xt = function(t) {
                if (!R(t)) return Rt(t);
                var e = _t(t),
                    i = [];
                for (var n in t)("constructor" != n || !e && Et.call(t, n)) && i.push(n);
                return i
            };
            const Ct = function(t) {
                return G(t) ? yt(t, !0) : xt(t)
            };
            var It = Object.prototype,
                Pt = It.hasOwnProperty;
            const jt = F((function(t, e) {
                t = Object(t);
                var i = -1,
                    n = e.length,
                    o = n > 2 ? e[2] : void 0;
                for (o && K(e[0], e[1], o) && (n = 1); ++i < n;)
                    for (var s = e[i], r = Ct(s), l = -1, c = r.length; ++l < c;) {
                        var h = r[l],
                            a = t[h];
                        (void 0 === a || V(a, It[h]) && !Pt.call(t, h)) && (t[h] = s[h])
                    }
                return t
            }));
            const Lt = function() {
                return u.Date.now()
            };
            var Ot = /\s/;
            const St = function(t) {
                for (var e = t.length; e-- && Ot.test(t.charAt(e)););
                return e
            };
            var zt = /^\s+/;
            const Tt = function(t) {
                return t ? t.slice(0, St(t) + 1).replace(zt, "") : t
            };
            const Bt = function(t) {
                return "symbol" == typeof t || X(t) && "[object Symbol]" == _(t)
            };
            var At = /^[-+]0x[0-9a-f]+$/i,
                Mt = /^0b[01]+$/i,
                kt = /^0o[0-7]+$/i,
                Ht = parseInt;
            const Wt = function(t) {
                if ("number" == typeof t) return t;
                if (Bt(t)) return NaN;
                if (R(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = R(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = Tt(t);
                var i = Mt.test(t);
                return i || kt.test(t) ? Ht(t.slice(2), i ? 2 : 8) : At.test(t) ? NaN : +t
            };
            var Dt = Math.max,
                Nt = Math.min;
            const qt = function(t, e, i) {
                var n, o, s, r, l, c, h = 0,
                    a = !1,
                    u = !1,
                    d = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function p(e) {
                    var i = n,
                        s = o;
                    return n = o = void 0, h = e, r = t.apply(s, i)
                }

                function f(t) {
                    return h = t, l = setTimeout(g, e), a ? p(t) : r
                }

                function m(t) {
                    var i = t - c;
                    return void 0 === c || i >= e || i < 0 || u && t - h >= s
                }

                function g() {
                    var t = Lt();
                    if (m(t)) return v(t);
                    l = setTimeout(g, function(t) {
                        var i = e - (t - c);
                        return u ? Nt(i, s - (t - h)) : i
                    }(t))
                }

                function v(t) {
                    return l = void 0, d && n ? p(t) : (n = o = void 0, r)
                }

                function b() {
                    var t = Lt(),
                        i = m(t);
                    if (n = arguments, o = this, c = t, i) {
                        if (void 0 === l) return f(c);
                        if (u) return clearTimeout(l), l = setTimeout(g, e), p(c)
                    }
                    return void 0 === l && (l = setTimeout(g, e)), r
                }
                return e = Wt(e) || 0, R(i) && (a = !!i.leading, s = (u = "maxWait" in i) ? Dt(Wt(i.maxWait) || 0, e) : s, d = "trailing" in i ? !!i.trailing : d), b.cancel = function() {
                    void 0 !== l && clearTimeout(l), h = 0, n = c = o = l = void 0
                }, b.flush = function() {
                    return void 0 === l ? r : v(Lt())
                }, b
            };
            var Ft = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Vt = /^\w*$/;
            const $t = function(t, e) {
                if (nt(t)) return !1;
                var i = typeof t;
                return !("number" != i && "symbol" != i && "boolean" != i && null != t && !Bt(t)) || (Vt.test(t) || !Ft.test(t) || null != e && t in Object(e))
            };
            const Gt = H(Object, "create");
            const Ut = function() {
                this.__data__ = Gt ? Gt(null) : {}, this.size = 0
            };
            const Jt = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            };
            var Kt = Object.prototype.hasOwnProperty;
            const Qt = function(t) {
                var e = this.__data__;
                if (Gt) {
                    var i = e[t];
                    return "__lodash_hash_undefined__" === i ? void 0 : i
                }
                return Kt.call(e, t) ? e[t] : void 0
            };
            var Xt = Object.prototype.hasOwnProperty;
            const Yt = function(t) {
                var e = this.__data__;
                return Gt ? void 0 !== e[t] : Xt.call(e, t)
            };
            const Zt = function(t, e) {
                var i = this.__data__;
                return this.size += this.has(t) ? 0 : 1, i[t] = Gt && void 0 === e ? "__lodash_hash_undefined__" : e, this
            };

            function te(t) {
                var e = -1,
                    i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            te.prototype.clear = Ut, te.prototype.delete = Jt, te.prototype.get = Qt, te.prototype.has = Yt, te.prototype.set = Zt;
            const ee = te;
            const ie = function() {
                this.__data__ = [], this.size = 0
            };
            const ne = function(t, e) {
                for (var i = t.length; i--;)
                    if (V(t[i][0], e)) return i;
                return -1
            };
            var oe = Array.prototype.splice;
            const se = function(t) {
                var e = this.__data__,
                    i = ne(e, t);
                return !(i < 0) && (i == e.length - 1 ? e.pop() : oe.call(e, i, 1), --this.size, !0)
            };
            const re = function(t) {
                var e = this.__data__,
                    i = ne(e, t);
                return i < 0 ? void 0 : e[i][1]
            };
            const le = function(t) {
                return ne(this.__data__, t) > -1
            };
            const ce = function(t, e) {
                var i = this.__data__,
                    n = ne(i, t);
                return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e, this
            };

            function he(t) {
                var e = -1,
                    i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            he.prototype.clear = ie, he.prototype.delete = se, he.prototype.get = re, he.prototype.has = le, he.prototype.set = ce;
            const ae = he;
            const ue = H(u, "Map");
            const de = function() {
                this.size = 0, this.__data__ = {
                    hash: new ee,
                    map: new(ue || ae),
                    string: new ee
                }
            };
            const pe = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            };
            const fe = function(t, e) {
                var i = t.__data__;
                return pe(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
            };
            const me = function(t) {
                var e = fe(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            };
            const ge = function(t) {
                return fe(this, t).get(t)
            };
            const ve = function(t) {
                return fe(this, t).has(t)
            };
            const be = function(t, e) {
                var i = fe(this, t),
                    n = i.size;
                return i.set(t, e), this.size += i.size == n ? 0 : 1, this
            };

            function ye(t) {
                var e = -1,
                    i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            ye.prototype.clear = de, ye.prototype.delete = me, ye.prototype.get = ge, ye.prototype.has = ve, ye.prototype.set = be;
            const we = ye;

            function _e(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var i = function() {
                    var n = arguments,
                        o = e ? e.apply(this, n) : n[0],
                        s = i.cache;
                    if (s.has(o)) return s.get(o);
                    var r = t.apply(this, n);
                    return i.cache = s.set(o, r) || s, r
                };
                return i.cache = new(_e.Cache || we), i
            }
            _e.Cache = we;
            const Re = _e;
            var Ee = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                xe = /\\(\\)?/g;
            const Ce = function(t) {
                var e = Re(t, (function(t) {
                        return 500 === i.size && i.clear(), t
                    })),
                    i = e.cache;
                return e
            }((function(t) {
                var e = [];
                return 46 === t.charCodeAt(0) && e.push(""), t.replace(Ee, (function(t, i, n, o) {
                    e.push(n ? o.replace(xe, "$1") : i || t)
                })), e
            }));
            const Ie = function(t, e) {
                for (var i = -1, n = null == t ? 0 : t.length, o = Array(n); ++i < n;) o[i] = e(t[i], i, t);
                return o
            };
            var Pe = d ? d.prototype : void 0,
                je = Pe ? Pe.toString : void 0;
            const Le = function t(e) {
                if ("string" == typeof e) return e;
                if (nt(e)) return Ie(e, t) + "";
                if (Bt(e)) return je ? je.call(e) : "";
                var i = e + "";
                return "0" == i && 1 / e == -Infinity ? "-0" : i
            };
            const Oe = function(t) {
                return null == t ? "" : Le(t)
            };
            const Se = function(t, e) {
                return nt(t) ? t : $t(t, e) ? [t] : Ce(Oe(t))
            };
            const ze = function(t) {
                if ("string" == typeof t || Bt(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -Infinity ? "-0" : e
            };
            const Te = function(t, e) {
                for (var i = 0, n = (e = Se(e, t)).length; null != t && i < n;) t = t[ze(e[i++])];
                return i && i == n ? t : void 0
            };
            const Be = function(t, e, i) {
                "__proto__" == e && W ? W(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                }) : t[e] = i
            };
            var Ae = Object.prototype.hasOwnProperty;
            const Me = function(t, e, i) {
                var n = t[e];
                Ae.call(t, e) && V(n, i) && (void 0 !== i || e in t) || Be(t, e, i)
            };
            const ke = function(t, e, i, n) {
                if (!R(t)) return t;
                for (var o = -1, s = (e = Se(e, t)).length, r = s - 1, l = t; null != l && ++o < s;) {
                    var c = ze(e[o]),
                        h = i;
                    if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
                    if (o != r) {
                        var a = l[c];
                        void 0 === (h = n ? n(a, c, l) : void 0) && (h = R(a) ? a : J(e[o + 1]) ? [] : {})
                    }
                    Me(l, c, h), l = l[c]
                }
                return t
            };
            const He = function(t, e, i) {
                for (var n = -1, o = e.length, s = {}; ++n < o;) {
                    var r = e[n],
                        l = Te(t, r);
                    i(l, r) && ke(s, Se(r, t), l)
                }
                return s
            };
            const We = function(t, e) {
                return null != t && e in Object(t)
            };
            const De = function(t, e, i) {
                for (var n = -1, o = (e = Se(e, t)).length, s = !1; ++n < o;) {
                    var r = ze(e[n]);
                    if (!(s = null != t && i(t, r))) break;
                    t = t[r]
                }
                return s || ++n != o ? s : !!(o = null == t ? 0 : t.length) && $(o) && J(r, o) && (nt(t) || it(t))
            };
            const Ne = function(t, e) {
                return null != t && De(t, e, We)
            };
            const qe = function(t, e) {
                return He(t, e, (function(e, i) {
                    return Ne(t, i)
                }))
            };
            const Fe = function(t, e) {
                for (var i = -1, n = e.length, o = t.length; ++i < n;) t[o + i] = e[i];
                return t
            };
            var Ve = d ? d.isConcatSpreadable : void 0;
            const $e = function(t) {
                return nt(t) || it(t) || !!(Ve && t && t[Ve])
            };
            const Ge = function t(e, i, n, o, s) {
                var r = -1,
                    l = e.length;
                for (n || (n = $e), s || (s = []); ++r < l;) {
                    var c = e[r];
                    i > 0 && n(c) ? i > 1 ? t(c, i - 1, n, o, s) : Fe(s, c) : o || (s[s.length] = c)
                }
                return s
            };
            const Ue = function(t) {
                return (null == t ? 0 : t.length) ? Ge(t, 1) : []
            };
            const Je = function(t) {
                return q(l(t, void 0, Ue), t + "")
            }((function(t, e) {
                return null == t ? {} : qe(t, e)
            }));
            var Ke = o(229),
                Qe = o.n(Ke),
                Xe = o(204),
                Ye = o.n(Xe);
            class Ze {
                constructor(t, e, i) {
                    this.document = t, this.options = e, this.model = i, this._selected = !1, this.title = this.getTitleDetails(i.title)
                }
                getTitleDetails(t) {
                    return t ? t.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "") : ""
                }
                init() {
                    let e = !1,
                        i = null;
                    this.title && this.options.showLabels && ["always", "hover"].includes(this.options.showLabels) && (e = !0);
                    const n = this.document.createElement("div");
                    let o = this.document.createElement("div");
                    const s = this.getLinkElement();
                    let r = null,
                        l = null;
                    return this.options.lightbox && e && s ? (i = s, i.classList.add("button"), r = o, l = s) : this.options.lightbox && e && !s ? (i = this.document.createElement("div"), this.options.activable ? (l = i, i.classList.add("button"), r = o) : r = n) : this.options.lightbox && !e ? r = n : !this.options.lightbox && e && s ? (o = this.getLinkElement(), i = s, i.classList.add("button"), l = n) : this.options.lightbox || !e || s ? this.options.lightbox || e || !s || (o = s, l = s) : (i = this.document.createElement("div"), this.options.activable && (l = n, i.classList.add("button"))), r && (r.classList.add("zoomable"), r.addEventListener("click", (() => {
                        const t = new CustomEvent("zoom", {
                            detail: this
                        });
                        this._element.dispatchEvent(t)
                    }))), l && (l.classList.add("activable"), l.addEventListener("click", (t => {
                        const e = new CustomEvent("activate", {
                            detail: {
                                item: this,
                                clickEvent: t
                            }
                        });
                        this._element.dispatchEvent(e)
                    }))), o.style.backgroundSize = this.model.backgroundSize || "cover", o.style.backgroundPosition = this.model.backgroundPosition || "center", o.classList.add("image"), n.classList.add("figure"), n.appendChild(o), this.model.color && (n.style.backgroundColor = this.model.color + "11"), this._element = n, this._image = o, i && (i.innerHTML = this.title, i.classList.add("title"), "hover" === this.options.showLabels && i.classList.add("hover"), n.appendChild(i)), this.options.selectable && (this.model.selected && this.select(), this._selectBtn = this.document.createElement("div"), this._selectBtn.appendChild(t(this.document, "natural-gallery-icon-select")), this._selectBtn.classList.add("selectBtn"), this._selectBtn.addEventListener("click", (t => {
                        t.stopPropagation(), this.toggleSelect();
                        const e = new CustomEvent("select", {
                            detail: this
                        });
                        this._element.dispatchEvent(e)
                    })), this._element.appendChild(this._selectBtn)), this.style(), n
                }
                style() {
                    this._element && (this._element.style.width = String(this.width + "px"), this._element.style.height = String(this.height + "px"), this._element.style.marginBottom = String(this.options.gap + "px"), this.last ? this._element.style.marginRight = "0" : this._element.style.marginRight = String(this.options.gap + "px"))
                }
                loadImage() {
                    const t = this.document.createElement("img");
                    t.setAttribute("src", this.model.thumbnailSrc), this._image.style.backgroundImage = "url(" + this.model.thumbnailSrc + ")", t.addEventListener("load", (() => {
                        this._element.classList.add("loaded")
                    })), t.addEventListener("error", (() => {
                        this._element.classList.add("errored")
                    }))
                }
                toggleSelect() {
                    this._selected ? this.unselect() : this.select()
                }
                select() {
                    this._selected = !0, this._element.classList.add("selected")
                }
                unselect() {
                    this._selected = !1, this._element.classList.remove("selected")
                }
                getLinkElement() {
                    if (this.model.link) {
                        const t = this.document.createElement("a");
                        return t.setAttribute("href", this.model.link), t.classList.add("link"), this.model.linkTarget && t.setAttribute("target", this.model.linkTarget), t
                    }
                    return null
                }
                remove() {
                    this._element.parentNode && this._element.parentNode.removeChild(this._element)
                }
                get last() {
                    return this._last
                }
                set last(t) {
                    this._last = t
                }
                get row() {
                    return this._row
                }
                set row(t) {
                    this._row = t
                }
                get height() {
                    return this._height
                }
                set height(t) {
                    this._height = t
                }
                get width() {
                    return this._width
                }
                set width(t) {
                    this._width = t
                }
                get enlargedWidth() {
                    return this.model.enlargedWidth
                }
                get enlargedHeight() {
                    return this.model.enlargedHeight
                }
                get selected() {
                    return this._selected
                }
                get element() {
                    return this._element
                }
            }
            class ti {
                constructor(t, e, i, n) {
                    this.elementRef = t, this.photoswipeElementRef = i, this.scrollElementRef = n, this.options = {
                        gap: 3,
                        rowsPerPage: 0,
                        showLabels: "hover",
                        lightbox: !1,
                        minRowsAtStart: 2,
                        selectable: !1,
                        activable: !1,
                        infiniteScrollOffset: 0,
                        photoSwipeOptions: null,
                        ssr: {
                            galleryWidth: 480
                        }
                    }, this.photoswipeDefaultOptions = {
                        bgOpacity: .85,
                        showHideOpacity: !1
                    }, this.bodyElementRef = null, this.scrollBufferedItems = [], this.requiredItems = 0, this.old_scroll_top = 0, this.photoswipeCollection = [], this.nextButton = null, this._collection = [], this._visibleCollection = [], this.document = this.elementRef.ownerDocument, this.options = jt(e, this.options), this.options.lightbox && !this.photoswipeElementRef && console.error("Lightbox option is set to true, but no PhotoSwipe reference is given"), this.flushBufferedItems = qt((() => {
                        this.scrollBufferedItems.forEach((t => {
                            t.loadImage(), this.dispatchEvent("item-displayed", t.model)
                        })), this.scrollBufferedItems = [], this.requiredItems && (this.dispatchEvent("pagination", {
                            offset: this.collection.length,
                            limit: this.requiredItems
                        }), this.requiredItems = 0)
                    }), 500, {
                        leading: !1,
                        trailing: !0
                    })
                }
                get collection() {
                    return this._collection
                }
                get visibleCollection() {
                    return this._visibleCollection
                }
                get selectedItems() {
                    return this.visibleCollection.filter((t => t.selected)).map((t => t.model))
                }
                get width() {
                    var t, e, i;
                    return Math.floor(null !== (i = null === (e = (t = this.elementRef).getBoundingClientRect) || void 0 === e ? void 0 : e.call(t).width) && void 0 !== i ? i : this.options.ssr.galleryWidth)
                }
                get collectionLength() {
                    return this.collection.length
                }
                get visibleCollectionLength() {
                    return this.visibleCollection.length
                }
                init() {
                    var e;
                    this.elementRef.classList.add("natural-gallery-js"), this.nextButton = this.document.createElement("div"), this.nextButton.classList.add("natural-gallery-next"), this.nextButton.appendChild(t(this.document, "natural-gallery-icon-next")), this.nextButton.style.display = "none", this.nextButton.addEventListener("click", (t => {
                        t.preventDefault(), this.onPageAdd()
                    })), this.bodyElementRef = this.document.createElement("div"), this.bodyElementRef.classList.add("natural-gallery-body"), this.extendToFreeViewport();
                    const i = this.document.createElement("iframe");
                    this.elementRef.appendChild(i);
                    const n = qt((() => this.startResize()), 500, {
                            leading: !0,
                            trailing: !1
                        }),
                        o = qt((() => this.endResize()), 500, {
                            leading: !1,
                            trailing: !0
                        });
                    null === (e = i.contentWindow) || void 0 === e || e.addEventListener("resize", (() => {
                        o(), n()
                    })), this.elementRef.appendChild(this.bodyElementRef), this.elementRef.appendChild(this.nextButton), this.options.rowsPerPage || this.bindScroll(this.scrollElementRef || this.document), this.initItems()
                }
                addItems(t) {
                    if (t.constructor !== Array || !t.length) return;
                    const e = this.collection.length === this.visibleCollection.length;
                    t.forEach((t => {
                        const e = Je(this.options, ["lightbox", "selectable", "activable", "gap", "showLabels"]),
                            i = new Ze(this.document, e, t);
                        this._collection.push(i), this.photoswipeElementRef && this.photoswipeCollection.push(this.getPhotoswipeItem(i))
                    })), e && this.bodyElementRef && this.onPageAdd()
                }
                selectVisibleItems() {
                    return this.visibleCollection.forEach((t => t.select())), this.selectedItems
                }
                unselectAllItems() {
                    this.visibleCollection.forEach((t => t.unselect()))
                }
                addEventListener(t, e) {
                    this.elementRef.addEventListener(t, e), "pagination" === t && this.bodyElementRef && this.requestItems()
                }
                clear() {
                    this.empty(), this.requestItems()
                }
                getOptions() {
                    return this.options
                }
                setItems(t) {
                    this.empty(), this.addItems(t)
                }
                initItems() {
                    if (!this.collection.length) return void this.requestItems();
                    const t = this.getEstimatedRowsPerPage(),
                        e = t * this.getEstimatedColumnsPerRow(),
                        i = this.collection.slice(0, e);
                    this.organizeItems(i, 0, t), i.forEach((t => this.addItemToDOM(t))), this.scrollBufferedItems = i;
                    const n = this.collection.slice(this.visibleCollection.length),
                        o = n.length - e;
                    this.requiredItems = Math.min(o, n.length, 0), this.flushBufferedItems(), this.updateNextButtonVisibility()
                }
                requestItems() {
                    const t = this.getEstimatedColumnsPerRow() * this.getRowsPerPage() + 1;
                    this.dispatchEvent("pagination", {
                        offset: this.collection.length,
                        limit: t
                    })
                }
                getRowsPerPage() {
                    if (this.options.rowsPerPage > 0) return this.options.rowsPerPage;
                    const t = this.getEstimatedRowsPerPage();
                    return t < this.options.minRowsAtStart ? this.options.minRowsAtStart : t
                }
                addItemToDOM(t, e = this.bodyElementRef) {
                    if (!e) throw new Error("Gallery not initialized");
                    this.visibleCollection.push(t), e.appendChild(t.init()), this.scrollBufferedItems.push(t), this.requiredItems++, this.dispatchEvent("item-added-to-dom", t.model), t.element.addEventListener("select", (() => {
                        this.dispatchEvent("select", this.visibleCollection.filter((t => t.selected)).map((t => t.model)))
                    })), t.element.addEventListener("activate", (t => {
                        this.dispatchEvent("activate", {
                            model: t.detail.item.model,
                            clickEvent: t.detail.clickEvent
                        })
                    })), t.element.addEventListener("zoom", (t => {
                        this.openPhotoSwipe(t.detail)
                    }))
                }
                updateNextButtonVisibility() {
                    this.nextButton && (this.visibleCollection.length === this.collection.length ? this.nextButton.style.display = "none" : this.nextButton.style.display = "block")
                }
                extendToFreeViewport() {
                    this.options.rowsPerPage || (this.elementRef.style.minHeight = this.getGalleryVisibleHeight() + 10 + "px")
                }
                getGalleryVisibleHeight() {
                    return this.document.defaultView ? this.document.defaultView.innerHeight - this.elementRef.offsetTop : 0
                }
                startResize() {
                    var t;
                    null === (t = this.bodyElementRef) || void 0 === t || t.classList.add("resizing")
                }
                endResize() {
                    var t;
                    null === (t = this.bodyElementRef) || void 0 === t || t.classList.remove("resizing")
                }
                openPhotoSwipe(t) {
                    if (!this.options.lightbox) return;
                    if (!this.photoswipeElementRef) return void console.error("Lightbox option is set to true, but no PhotoSwipe reference is given");
                    let e = {
                        index: this.collection.findIndex((e => e === t)),
                        loop: !1
                    };
                    e = Object.assign({}, this.photoswipeDefaultOptions, this.options.photoSwipeOptions, e);
                    const i = new(Qe())(this.photoswipeElementRef, Ye(), this.photoswipeCollection, e);
                    i.init(), i.listen("beforeChange", (t => {
                        1 === t && i.getCurrentIndex() === this.visibleCollection.length && this.onPageAdd()
                    })), this.dispatchEvent("zoom", {
                        item: t.model,
                        photoswipe: i
                    })
                }
                getPhotoswipeItem(t) {
                    return {
                        src: t.model.enlargedSrc,
                        w: t.model.enlargedWidth,
                        h: t.model.enlargedHeight,
                        title: t.title
                    }
                }
                dispatchEvent(t, e) {
                    const i = new CustomEvent(t, {
                        detail: e
                    });
                    this.elementRef.dispatchEvent(i)
                }
                empty() {
                    this.bodyElementRef && (this.bodyElementRef.innerHTML = ""), this._visibleCollection = [], this.photoswipeCollection = [], this._collection = []
                }
                bindScroll(t) {
                    const e = t,
                        i = t instanceof Document ? t.documentElement : t,
                        n = qt((() => this.elementRef.classList.add("scrolling")), 300, {
                            leading: !0,
                            trailing: !1
                        }),
                        o = qt((() => this.elementRef.classList.remove("scrolling")), 300, {
                            leading: !1,
                            trailing: !0
                        });
                    e.addEventListener("scroll", (() => {
                        n(), o();
                        const t = this.elementRef.offsetTop + this.elementRef.offsetHeight + this.options.infiniteScrollOffset,
                            e = i.scrollTop - (i.clientTop || 0),
                            s = i.clientHeight,
                            r = e - this.old_scroll_top;
                        this.old_scroll_top = e, r > 0 && e + s >= t && this.onScroll()
                    }))
                }
            }
            class ei extends ti {
                onScroll() {
                    this.addRows(1)
                }
                onPageAdd() {
                    this.addRows(this.getRowsPerPage())
                }
                addRows(t) {
                    const e = this.visibleCollection.length,
                        i = this.visibleCollection.length ? this.visibleCollection[e - 1].row + 1 : 0,
                        n = i + t - 1,
                        o = this.collection.slice(e);
                    this.organizeItems(o, i, n);
                    o.filter((t => t.row <= n)).forEach((t => this.addItemToDOM(t))), this.flushBufferedItems(), this.updateNextButtonVisibility()
                }
                endResize() {
                    super.endResize(), this.visibleCollection.length && this.organizeItems(this.visibleCollection)
                }
            }
            class ii extends ei {
                constructor(t, e, i, n) {
                    if (super(t, e, i, n), !e.rowHeight || e.rowHeight <= 0) throw new Error("Option.rowHeight must be positive")
                }
                static organizeItems(t, e, i = 0, n = null, o = null) {
                    o || (o = i || 0);
                    const s = t.options;
                    for (let r = 1; r <= e.length; r++) {
                        const l = e.slice(0, r);
                        if (this.getRowWidth(l.map((t => t.model)), s.rowHeight, s.gap, s.ratioLimit) >= t.width) {
                            this.computeSizes(l, t.width, s.gap, o, null, s.ratioLimit);
                            const c = o + 1;
                            (null === n || c <= n) && ii.organizeItems(t, e.slice(r), i, n, c);
                            break
                        }
                        if (r === e.length) {
                            this.computeSizes(l, null, s.gap, o, s.rowHeight, s.ratioLimit);
                            break
                        }
                    }
                }
                static computeSizes(t, i, n, o, s = null, r) {
                    const l = t.map((t => t.model)),
                        c = i ? this.getRowHeight(l, i, n, r) : null != s ? s : 0,
                        h = (this.getRowWidth(l, c, n, r) - (null != i ? i : 0)) / t.length,
                        a = i ? h : 0;
                    let u = 0;
                    for (let i = 0; i < t.length; i++) {
                        const n = t[i];
                        let s = e(n.model, r) * c - a;
                        u += s - Math.floor(s), s = Math.floor(s), (u >= 1 || i === t.length - 1 && 1 === Math.round(u)) && (s++, u--), n.width = s, n.height = Math.floor(c), n.row = o, n.last = i === t.length - 1, n.style()
                    }
                }
                static getRowWidth(t, e, i, n) {
                    return i * (t.length - 1) + this.getRatios(t, n) * e
                }
                static getRowHeight(t, e, i, n) {
                    return e / this.getRatios(t, n) - i * (t.length - 1)
                }
                static getRatios(t, i) {
                    return t.reduce(((t, n) => t + e(n, i)), 0)
                }
                addRows(t) {
                    this.completeLastRow(), super.addRows(t)
                }
                organizeItems(t, e, i) {
                    ii.organizeItems(this, t, e, i)
                }
                endResize() {
                    super.endResize(), this.completeLastRow(), this.flushBufferedItems()
                }
                getEstimatedColumnsPerRow() {
                    let t = 1;
                    return this.options.ratioLimit && this.options.ratioLimit.min && (t = this.options.ratioLimit.min), Math.ceil((1 / t * this.width + this.options.gap) / (this.options.rowHeight + this.options.gap))
                }
                getEstimatedRowsPerPage() {
                    return Math.ceil(this.getGalleryVisibleHeight() / (this.options.rowHeight + this.options.gap)) + 1
                }
                completeLastRow() {
                    if (!this.visibleCollection.length) return;
                    const t = this.visibleCollection[this.visibleCollection.length - 1].row,
                        e = this.visibleCollection.filter((e => e.row === t)).length,
                        i = this.collection.slice(this.visibleCollection.length - e);
                    this.organizeItems(i, i[0].row, i[0].row);
                    i.slice(e).filter((t => t.row <= i[0].row)).forEach((t => this.addItemToDOM(t)))
                }
            }
            class ni {
                constructor(t, e) {
                    this.options = e, this.collection = [], this._elementRef = t.createElement("div"), this._elementRef.classList.add("column"), this._elementRef.style.marginRight = this.options.gap + "px", this._elementRef.style.width = this.options.width + "px"
                }
                addItem(t) {
                    this.collection.push(t)
                }
                get height() {
                    return this._elementRef.offsetHeight
                }
                get length() {
                    return this.collection.length
                }
                get elementRef() {
                    return this._elementRef
                }
            }
            class oi extends ti {
                constructor(t, e, i, n) {
                    if (super(t, e, i, n), this.columns = [], !e.columnWidth || e.columnWidth <= 0) throw new Error("Option.columnWidth must be positive")
                }
                static organizeItems(t, i, n = 0, o = null) {
                    const s = t.getEstimatedColumnsPerRow(),
                        r = t.getColumnWidth();
                    let l = o ? s * (o - n + 1) : i.length;
                    l = l > i.length ? i.length : l;
                    for (let n = 0; n < l; n++) {
                        const o = i[n],
                            s = e(o.model, t.options.ratioLimit);
                        o.last = !0, o.width = Math.floor(r), o.height = o.width / s, o.style()
                    }
                }
                init() {
                    if (super.init(), !this.options.infiniteScrollOffset) {
                        let t = .5;
                        this.options.ratioLimit && this.options.ratioLimit.min && (t = this.options.ratioLimit.min);
                        const e = this.getColumnWidth();
                        this.options.infiniteScrollOffset = -1 * e / t
                    }
                }
                organizeItems(t, e, i) {
                    oi.organizeItems(this, t, e, i)
                }
                initItems() {
                    this.addColumns(), super.initItems()
                }
                onScroll() {
                    this.addUntilFill()
                }
                onPageAdd() {
                    this.addUntilFill()
                }
                getEstimatedColumnsPerRow() {
                    return Math.ceil((this.width - this.options.gap) / (this.options.columnWidth + this.options.gap))
                }
                getEstimatedRowsPerPage() {
                    let t = 1.75;
                    this.options.ratioLimit && this.options.ratioLimit.max && (t = this.options.ratioLimit.max);
                    const e = this.getColumnWidth() / t;
                    return Math.ceil(this.getGalleryVisibleHeight() / e)
                }
                addUntilFill() {
                    do {
                        this.addItemsToDom(1)
                    } while (this.viewPortIsNotFilled() && this.visibleCollection.length < this.collection.length)
                }
                addItemToDOM(t) {
                    const e = this.getShortestColumn();
                    e.addItem(t), super.addItemToDOM(t, e.elementRef)
                }
                endResize() {
                    super.endResize(), this.visibleCollection.length && (this.visibleCollection.length = 0, this.addColumns(), this.addUntilFill())
                }
                addColumns() {
                    if (!this.bodyElementRef) throw new Error("Gallery not initialized");
                    this.bodyElementRef.innerHTML = "", this.columns = [];
                    const t = this.getColumnWidth();
                    for (let e = 0; e < this.getEstimatedColumnsPerRow(); e++) {
                        const e = new ni(this.document, {
                            width: t,
                            gap: this.options.gap
                        });
                        this.columns.push(e), this.bodyElementRef.appendChild(e.elementRef)
                    }
                }
                empty() {
                    super.empty(), this.addColumns()
                }
                viewPortIsNotFilled() {
                    return this.columns.some((t => t.elementRef.getBoundingClientRect().bottom < this.document.documentElement.clientHeight))
                }
                addItemsToDom(t) {
                    const e = this.visibleCollection.length,
                        i = this.visibleCollection.length ? e : 0,
                        n = i + t - 1;
                    this.organizeItems(this.collection.slice(e), i, n);
                    for (let t = e; t < this.collection.length; t++) {
                        const e = this.collection[t];
                        if (!(t <= n)) break;
                        this.addItemToDOM(e)
                    }
                    this.flushBufferedItems(), this.updateNextButtonVisibility()
                }
                getColumnWidth() {
                    const t = this.getEstimatedColumnsPerRow();
                    return Math.floor((this.width - (t - 1) * this.options.gap) / t)
                }
                getShortestColumn() {
                    return this.columns.reduce(((t, e) => t ? e.height < t.height ? e : t : e))
                }
            }
            class si extends ei {
                constructor(t, e, i, n) {
                    if (super(t, e, i, n), !e.itemsPerRow || e.itemsPerRow <= 0) throw new Error("Option.itemsPerRow must be positive")
                }
                static organizeItems(t, e, i = 0, n = null) {
                    const o = t.getItemSideSize();
                    let s = n ? t.options.itemsPerRow * (n - i + 1) : e.length;
                    s = s > e.length ? e.length : s;
                    for (let n = 0; n < s; n++) {
                        const s = e[n];
                        s.width = Math.floor(o), s.height = Math.floor(o), s.last = n % t.options.itemsPerRow == t.options.itemsPerRow - 1, s.row = Math.floor(n / t.options.itemsPerRow) + i, s.style()
                    }
                }
                getEstimatedColumnsPerRow() {
                    return this.options.itemsPerRow
                }
                getEstimatedRowsPerPage() {
                    return Math.ceil(this.getGalleryVisibleHeight() / this.getItemSideSize())
                }
                getItemSideSize() {
                    const t = this.getEstimatedColumnsPerRow();
                    return (this.width - (t - 1) * this.options.gap) / t
                }
                organizeItems(t, e, i) {
                    si.organizeItems(this, t, e, i)
                }
            }
        })(), s
    })()
}));
//# sourceMappingURL=natural-gallery.js.map