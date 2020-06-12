!
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AV = e() : t.AV = e()
} ("undefined" != typeof self ? self: this,
function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e),
            i.l = !0,
            i.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        },
        e.n = function(t) {
            var n = t && t.__esModule ?
            function() {
                return t.
            default
            }:
            function() {
                return t
            };
            return e.d(n, "a", n),
            n
        },
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        e.p = "",
        e(e.s = 81)
    } ([function(t, e, n) { (function(t, n) {
            var r, i; !
            function() {
                var o = "object" == typeof self && self.self === self && self || "object" == typeof t && t.global === t && t || this || {},
                s = o._,
                a = Array.prototype,
                u = Object.prototype,
                c = "undefined" != typeof Symbol ? Symbol.prototype: null,
                l = a.push,
                f = a.slice,
                h = u.toString,
                d = u.hasOwnProperty,
                p = Array.isArray,
                _ = Object.keys,
                v = Object.create,
                y = function() {},
                m = function(t) {
                    return t instanceof m ? t: this instanceof m ? void(this._wrapped = t) : new m(t)
                };
                void 0 === e || e.nodeType ? o._ = m: (void 0 !== n && !n.nodeType && n.exports && (e = n.exports = m), e._ = m),
                m.VERSION = "1.9.1";
                var g, b = function(t, e, n) {
                    if (void 0 === e) return t;
                    switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        };
                    case 3:
                        return function(n, r, i) {
                            return t.call(e, n, r, i)
                        };
                    case 4:
                        return function(n, r, i, o) {
                            return t.call(e, n, r, i, o)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                w = function(t, e, n) {
                    return m.iteratee !== g ? m.iteratee(t, e) : null == t ? m.identity: m.isFunction(t) ? b(t, e, n) : m.isObject(t) && !m.isArray(t) ? m.matcher(t) : m.property(t)
                };
                m.iteratee = g = function(t, e) {
                    return w(t, e, 1 / 0)
                };
                var O = function(t, e) {
                    return e = null == e ? t.length - 1 : +e,
                    function() {
                        for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + e];
                        switch (e) {
                        case 0:
                            return t.call(this, r);
                        case 1:
                            return t.call(this, arguments[0], r);
                        case 2:
                            return t.call(this, arguments[0], arguments[1], r)
                        }
                        var o = Array(e + 1);
                        for (i = 0; i < e; i++) o[i] = arguments[i];
                        return o[e] = r,
                        t.apply(this, o)
                    }
                },
                A = function(t) {
                    if (!m.isObject(t)) return {};
                    if (v) return v(t);
                    y.prototype = t;
                    var e = new y;
                    return y.prototype = null,
                    e
                },
                S = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                E = function(t, e) {
                    return null != t && d.call(t, e)
                },
                C = function(t, e) {
                    for (var n = e.length,
                    r = 0; r < n; r++) {
                        if (null == t) return;
                        t = t[e[r]]
                    }
                    return n ? t: void 0
                },
                x = Math.pow(2, 53) - 1,
                T = S("length"),
                j = function(t) {
                    var e = T(t);
                    return "number" == typeof e && e >= 0 && e <= x
                };
                m.each = m.forEach = function(t, e, n) {
                    e = b(e, n);
                    var r, i;
                    if (j(t)) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
                    else {
                        var o = m.keys(t);
                        for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
                    }
                    return t
                },
                m.map = m.collect = function(t, e, n) {
                    e = w(e, n);
                    for (var r = !j(t) && m.keys(t), i = (r || t).length, o = Array(i), s = 0; s < i; s++) {
                        var a = r ? r[s] : s;
                        o[s] = e(t[a], a, t)
                    }
                    return o
                };
                var N = function(t) {
                    var e = function(e, n, r, i) {
                        var o = !j(e) && m.keys(e),
                        s = (o || e).length,
                        a = t > 0 ? 0 : s - 1;
                        for (i || (r = e[o ? o[a] : a], a += t); a >= 0 && a < s; a += t) {
                            var u = o ? o[a] : a;
                            r = n(r, e[u], u, e)
                        }
                        return r
                    };
                    return function(t, n, r, i) {
                        var o = arguments.length >= 3;
                        return e(t, b(n, i, 4), r, o)
                    }
                };
                m.reduce = m.foldl = m.inject = N(1),
                m.reduceRight = m.foldr = N( - 1),
                m.find = m.detect = function(t, e, n) {
                    var r = j(t) ? m.findIndex: m.findKey,
                    i = r(t, e, n);
                    if (void 0 !== i && -1 !== i) return t[i]
                },
                m.filter = m.select = function(t, e, n) {
                    var r = [];
                    return e = w(e, n),
                    m.each(t,
                    function(t, n, i) {
                        e(t, n, i) && r.push(t)
                    }),
                    r
                },
                m.reject = function(t, e, n) {
                    return m.filter(t, m.negate(w(e)), n)
                },
                m.every = m.all = function(t, e, n) {
                    e = w(e, n);
                    for (var r = !j(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (!e(t[s], s, t)) return ! 1
                    }
                    return ! 0
                },
                m.some = m.any = function(t, e, n) {
                    e = w(e, n);
                    for (var r = !j(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (e(t[s], s, t)) return ! 0
                    }
                    return ! 1
                },
                m.contains = m.includes = m.include = function(t, e, n, r) {
                    return j(t) || (t = m.values(t)),
                    ("number" != typeof n || r) && (n = 0),
                    m.indexOf(t, e, n) >= 0
                },
                m.invoke = O(function(t, e, n) {
                    var r, i;
                    return m.isFunction(e) ? i = e: m.isArray(e) && (r = e.slice(0, -1), e = e[e.length - 1]),
                    m.map(t,
                    function(t) {
                        var o = i;
                        if (!o) {
                            if (r && r.length && (t = C(t, r)), null == t) return;
                            o = t[e]
                        }
                        return null == o ? o: o.apply(t, n)
                    })
                }),
                m.pluck = function(t, e) {
                    return m.map(t, m.property(e))
                },
                m.where = function(t, e) {
                    return m.filter(t, m.matcher(e))
                },
                m.findWhere = function(t, e) {
                    return m.find(t, m.matcher(e))
                },
                m.max = function(t, e, n) {
                    var r, i, o = -1 / 0,
                    s = -1 / 0;
                    if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                        t = j(t) ? t: m.values(t);
                        for (var a = 0,
                        u = t.length; a < u; a++) null != (r = t[a]) && r > o && (o = r)
                    } else e = w(e, n),
                    m.each(t,
                    function(t, n, r) { ((i = e(t, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = t, s = i)
                    });
                    return o
                },
                m.min = function(t, e, n) {
                    var r, i, o = 1 / 0,
                    s = 1 / 0;
                    if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                        t = j(t) ? t: m.values(t);
                        for (var a = 0,
                        u = t.length; a < u; a++) null != (r = t[a]) && r < o && (o = r)
                    } else e = w(e, n),
                    m.each(t,
                    function(t, n, r) { ((i = e(t, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
                    });
                    return o
                },
                m.shuffle = function(t) {
                    return m.sample(t, 1 / 0)
                },
                m.sample = function(t, e, n) {
                    if (null == e || n) return j(t) || (t = m.values(t)),
                    t[m.random(t.length - 1)];
                    var r = j(t) ? m.clone(t) : m.values(t),
                    i = T(r);
                    e = Math.max(Math.min(e, i), 0);
                    for (var o = i - 1,
                    s = 0; s < e; s++) {
                        var a = m.random(s, o),
                        u = r[s];
                        r[s] = r[a],
                        r[a] = u
                    }
                    return r.slice(0, e)
                },
                m.sortBy = function(t, e, n) {
                    var r = 0;
                    return e = w(e, n),
                    m.pluck(m.map(t,
                    function(t, n, i) {
                        return {
                            value: t,
                            index: r++,
                            criteria: e(t, n, i)
                        }
                    }).sort(function(t, e) {
                        var n = t.criteria,
                        r = e.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return - 1
                        }
                        return t.index - e.index
                    }), "value")
                };
                var U = function(t, e) {
                    return function(n, r, i) {
                        var o = e ? [[], []] : {};
                        return r = w(r, i),
                        m.each(n,
                        function(e, i) {
                            var s = r(e, i, n);
                            t(o, e, s)
                        }),
                        o
                    }
                };
                m.groupBy = U(function(t, e, n) {
                    E(t, n) ? t[n].push(e) : t[n] = [e]
                }),
                m.indexBy = U(function(t, e, n) {
                    t[n] = e
                }),
                m.countBy = U(function(t, e, n) {
                    E(t, n) ? t[n]++:t[n] = 1
                });
                var I = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                m.toArray = function(t) {
                    return t ? m.isArray(t) ? f.call(t) : m.isString(t) ? t.match(I) : j(t) ? m.map(t, m.identity) : m.values(t) : []
                },
                m.size = function(t) {
                    return null == t ? 0 : j(t) ? t.length: m.keys(t).length
                },
                m.partition = U(function(t, e, n) {
                    t[n ? 0 : 1].push(e)
                },
                !0),
                m.first = m.head = m.take = function(t, e, n) {
                    return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[0] : m.initial(t, t.length - e)
                },
                m.initial = function(t, e, n) {
                    return f.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
                },
                m.last = function(t, e, n) {
                    return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[t.length - 1] : m.rest(t, Math.max(0, t.length - e))
                },
                m.rest = m.tail = m.drop = function(t, e, n) {
                    return f.call(t, null == e || n ? 1 : e)
                },
                m.compact = function(t) {
                    return m.filter(t, Boolean)
                };
                var k = function(t, e, n, r) {
                    r = r || [];
                    for (var i = r.length,
                    o = 0,
                    s = T(t); o < s; o++) {
                        var a = t[o];
                        if (j(a) && (m.isArray(a) || m.isArguments(a))) if (e) for (var u = 0,
                        c = a.length; u < c;) r[i++] = a[u++];
                        else k(a, e, n, r),
                        i = r.length;
                        else n || (r[i++] = a)
                    }
                    return r
                };
                m.flatten = function(t, e) {
                    return k(t, e, !1)
                },
                m.without = O(function(t, e) {
                    return m.difference(t, e)
                }),
                m.uniq = m.unique = function(t, e, n, r) {
                    m.isBoolean(e) || (r = n, n = e, e = !1),
                    null != n && (n = w(n, r));
                    for (var i = [], o = [], s = 0, a = T(t); s < a; s++) {
                        var u = t[s],
                        c = n ? n(u, s, t) : u;
                        e && !n ? (s && o === c || i.push(u), o = c) : n ? m.contains(o, c) || (o.push(c), i.push(u)) : m.contains(i, u) || i.push(u)
                    }
                    return i
                },
                m.union = O(function(t) {
                    return m.uniq(k(t, !0, !0))
                }),
                m.intersection = function(t) {
                    for (var e = [], n = arguments.length, r = 0, i = T(t); r < i; r++) {
                        var o = t[r];
                        if (!m.contains(e, o)) {
                            var s;
                            for (s = 1; s < n && m.contains(arguments[s], o); s++);
                            s === n && e.push(o)
                        }
                    }
                    return e
                },
                m.difference = O(function(t, e) {
                    return e = k(e, !0, !0),
                    m.filter(t,
                    function(t) {
                        return ! m.contains(e, t)
                    })
                }),
                m.unzip = function(t) {
                    for (var e = t && m.max(t, T).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = m.pluck(t, r);
                    return n
                },
                m.zip = O(m.unzip),
                m.object = function(t, e) {
                    for (var n = {},
                    r = 0,
                    i = T(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                    return n
                };
                var P = function(t) {
                    return function(e, n, r) {
                        n = w(n, r);
                        for (var i = T(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t) if (n(e[o], o, e)) return o;
                        return - 1
                    }
                };
                m.findIndex = P(1),
                m.findLastIndex = P( - 1),
                m.sortedIndex = function(t, e, n, r) {
                    n = w(n, r, 1);
                    for (var i = n(e), o = 0, s = T(t); o < s;) {
                        var a = Math.floor((o + s) / 2);
                        n(t[a]) < i ? o = a + 1 : s = a
                    }
                    return o
                };
                var R = function(t, e, n) {
                    return function(r, i, o) {
                        var s = 0,
                        a = T(r);
                        if ("number" == typeof o) t > 0 ? s = o >= 0 ? o: Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                        else if (n && o && a) return o = n(r, i),
                        r[o] === i ? o: -1;
                        if (i !== i) return o = e(f.call(r, s, a), m.isNaN),
                        o >= 0 ? o + s: -1;
                        for (o = t > 0 ? s: a - 1; o >= 0 && o < a; o += t) if (r[o] === i) return o;
                        return - 1
                    }
                };
                m.indexOf = R(1, m.findIndex, m.sortedIndex),
                m.lastIndexOf = R( - 1, m.findLastIndex),
                m.range = function(t, e, n) {
                    null == e && (e = t || 0, t = 0),
                    n || (n = e < t ? -1 : 1);
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; o < r; o++, t += n) i[o] = t;
                    return i
                },
                m.chunk = function(t, e) {
                    if (null == e || e < 1) return [];
                    for (var n = [], r = 0, i = t.length; r < i;) n.push(f.call(t, r, r += e));
                    return n
                };
                var D = function(t, e, n, r, i) {
                    if (! (r instanceof e)) return t.apply(n, i);
                    var o = A(t.prototype),
                    s = t.apply(o, i);
                    return m.isObject(s) ? s: o
                };
                m.bind = O(function(t, e, n) {
                    if (!m.isFunction(t)) throw new TypeError("Bind must be called on a function");
                    var r = O(function(i) {
                        return D(t, r, e, this, n.concat(i))
                    });
                    return r
                }),
                m.partial = O(function(t, e) {
                    var n = m.partial.placeholder,
                    r = function() {
                        for (var i = 0,
                        o = e.length,
                        s = Array(o), a = 0; a < o; a++) s[a] = e[a] === n ? arguments[i++] : e[a];
                        for (; i < arguments.length;) s.push(arguments[i++]);
                        return D(t, r, this, this, s)
                    };
                    return r
                }),
                m.partial.placeholder = m,
                m.bindAll = O(function(t, e) {
                    e = k(e, !1, !1);
                    var n = e.length;
                    if (n < 1) throw new Error("bindAll must be passed function names");
                    for (; n--;) {
                        var r = e[n];
                        t[r] = m.bind(t[r], t)
                    }
                }),
                m.memoize = function(t, e) {
                    var n = function(r) {
                        var i = n.cache,
                        o = "" + (e ? e.apply(this, arguments) : r);
                        return E(i, o) || (i[o] = t.apply(this, arguments)),
                        i[o]
                    };
                    return n.cache = {},
                    n
                },
                m.delay = O(function(t, e, n) {
                    return setTimeout(function() {
                        return t.apply(null, n)
                    },
                    e)
                }),
                m.defer = m.partial(m.delay, m, 1),
                m.throttle = function(t, e, n) {
                    var r, i, o, s, a = 0;
                    n || (n = {});
                    var u = function() {
                        a = !1 === n.leading ? 0 : m.now(),
                        r = null,
                        s = t.apply(i, o),
                        r || (i = o = null)
                    },
                    c = function() {
                        var c = m.now();
                        a || !1 !== n.leading || (a = c);
                        var l = e - (c - a);
                        return i = this,
                        o = arguments,
                        l <= 0 || l > e ? (r && (clearTimeout(r), r = null), a = c, s = t.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)),
                        s
                    };
                    return c.cancel = function() {
                        clearTimeout(r),
                        a = 0,
                        r = i = o = null
                    },
                    c
                },
                m.debounce = function(t, e, n) {
                    var r, i, o = function(e, n) {
                        r = null,
                        n && (i = t.apply(e, n))
                    },
                    s = O(function(s) {
                        if (r && clearTimeout(r), n) {
                            var a = !r;
                            r = setTimeout(o, e),
                            a && (i = t.apply(this, s))
                        } else r = m.delay(o, e, this, s);
                        return i
                    });
                    return s.cancel = function() {
                        clearTimeout(r),
                        r = null
                    },
                    s
                },
                m.wrap = function(t, e) {
                    return m.partial(e, t)
                },
                m.negate = function(t) {
                    return function() {
                        return ! t.apply(this, arguments)
                    }
                },
                m.compose = function() {
                    var t = arguments,
                    e = t.length - 1;
                    return function() {
                        for (var n = e,
                        r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
                        return r
                    }
                },
                m.after = function(t, e) {
                    return function() {
                        if (--t < 1) return e.apply(this, arguments)
                    }
                },
                m.before = function(t, e) {
                    var n;
                    return function() {
                        return--t > 0 && (n = e.apply(this, arguments)),
                        t <= 1 && (e = null),
                        n
                    }
                },
                m.once = m.partial(m.before, 2),
                m.restArguments = O;
                var M = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                F = function(t, e) {
                    var n = L.length,
                    r = t.constructor,
                    i = m.isFunction(r) && r.prototype || u,
                    o = "constructor";
                    for (E(t, o) && !m.contains(e, o) && e.push(o); n--;)(o = L[n]) in t && t[o] !== i[o] && !m.contains(e, o) && e.push(o)
                };
                m.keys = function(t) {
                    if (!m.isObject(t)) return [];
                    if (_) return _(t);
                    var e = [];
                    for (var n in t) E(t, n) && e.push(n);
                    return M && F(t, e),
                    e
                },
                m.allKeys = function(t) {
                    if (!m.isObject(t)) return [];
                    var e = [];
                    for (var n in t) e.push(n);
                    return M && F(t, e),
                    e
                },
                m.values = function(t) {
                    for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
                    return r
                },
                m.mapObject = function(t, e, n) {
                    e = w(e, n);
                    for (var r = m.keys(t), i = r.length, o = {},
                    s = 0; s < i; s++) {
                        var a = r[s];
                        o[a] = e(t[a], a, t)
                    }
                    return o
                },
                m.pairs = function(t) {
                    for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];
                    return r
                },
                m.invert = function(t) {
                    for (var e = {},
                    n = m.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
                    return e
                },
                m.functions = m.methods = function(t) {
                    var e = [];
                    for (var n in t) m.isFunction(t[n]) && e.push(n);
                    return e.sort()
                };
                var q = function(t, e) {
                    return function(n) {
                        var r = arguments.length;
                        if (e && (n = Object(n)), r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++) for (var o = arguments[i], s = t(o), a = s.length, u = 0; u < a; u++) {
                            var c = s[u];
                            e && void 0 !== n[c] || (n[c] = o[c])
                        }
                        return n
                    }
                };
                m.extend = q(m.allKeys),
                m.extendOwn = m.assign = q(m.keys),
                m.findKey = function(t, e, n) {
                    e = w(e, n);
                    for (var r, i = m.keys(t), o = 0, s = i.length; o < s; o++) if (r = i[o], e(t[r], r, t)) return r
                };
                var W = function(t, e, n) {
                    return e in n
                };
                m.pick = O(function(t, e) {
                    var n = {},
                    r = e[0];
                    if (null == t) return n;
                    m.isFunction(r) ? (e.length > 1 && (r = b(r, e[1])), e = m.allKeys(t)) : (r = W, e = k(e, !1, !1), t = Object(t));
                    for (var i = 0,
                    o = e.length; i < o; i++) {
                        var s = e[i],
                        a = t[s];
                        r(a, s, t) && (n[s] = a)
                    }
                    return n
                }),
                m.omit = O(function(t, e) {
                    var n, r = e[0];
                    return m.isFunction(r) ? (r = m.negate(r), e.length > 1 && (n = e[1])) : (e = m.map(k(e, !1, !1), String), r = function(t, n) {
                        return ! m.contains(e, n)
                    }),
                    m.pick(t, r, n)
                }),
                m.defaults = q(m.allKeys, !0),
                m.create = function(t, e) {
                    var n = A(t);
                    return e && m.extendOwn(n, e),
                    n
                },
                m.clone = function(t) {
                    return m.isObject(t) ? m.isArray(t) ? t.slice() : m.extend({},
                    t) : t
                },
                m.tap = function(t, e) {
                    return e(t),
                    t
                },
                m.isMatch = function(t, e) {
                    var n = m.keys(e),
                    r = n.length;
                    if (null == t) return ! r;
                    for (var i = Object(t), o = 0; o < r; o++) {
                        var s = n[o];
                        if (e[s] !== i[s] || !(s in i)) return ! 1
                    }
                    return ! 0
                };
                var B, Q;
                B = function(t, e, n, r) {
                    if (t === e) return 0 !== t || 1 / t == 1 / e;
                    if (null == t || null == e) return ! 1;
                    if (t !== t) return e !== e;
                    var i = typeof t;
                    return ("function" === i || "object" === i || "object" == typeof e) && Q(t, e, n, r)
                },
                Q = function(t, e, n, r) {
                    t instanceof m && (t = t._wrapped),
                    e instanceof m && (e = e._wrapped);
                    var i = h.call(t);
                    if (i !== h.call(e)) return ! 1;
                    switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return + t != +t ? +e != +e: 0 == +t ? 1 / +t == 1 / e: +t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return + t == +e;
                    case "[object Symbol]":
                        return c.valueOf.call(t) === c.valueOf.call(e)
                    }
                    var o = "[object Array]" === i;
                    if (!o) {
                        if ("object" != typeof t || "object" != typeof e) return ! 1;
                        var s = t.constructor,
                        a = e.constructor;
                        if (s !== a && !(m.isFunction(s) && s instanceof s && m.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return ! 1
                    }
                    n = n || [],
                    r = r || [];
                    for (var u = n.length; u--;) if (n[u] === t) return r[u] === e;
                    if (n.push(t), r.push(e), o) {
                        if ((u = t.length) !== e.length) return ! 1;
                        for (; u--;) if (!B(t[u], e[u], n, r)) return ! 1
                    } else {
                        var l, f = m.keys(t);
                        if (u = f.length, m.keys(e).length !== u) return ! 1;
                        for (; u--;) if (l = f[u], !E(e, l) || !B(t[l], e[l], n, r)) return ! 1
                    }
                    return n.pop(),
                    r.pop(),
                    !0
                },
                m.isEqual = function(t, e) {
                    return B(t, e)
                },
                m.isEmpty = function(t) {
                    return null == t || (j(t) && (m.isArray(t) || m.isString(t) || m.isArguments(t)) ? 0 === t.length: 0 === m.keys(t).length)
                },
                m.isElement = function(t) {
                    return ! (!t || 1 !== t.nodeType)
                },
                m.isArray = p ||
                function(t) {
                    return "[object Array]" === h.call(t)
                },
                m.isObject = function(t) {
                    var e = typeof t;
                    return "function" === e || "object" === e && !!t
                },
                m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"],
                function(t) {
                    m["is" + t] = function(e) {
                        return h.call(e) === "[object " + t + "]"
                    }
                }),
                m.isArguments(arguments) || (m.isArguments = function(t) {
                    return E(t, "callee")
                });
                var V = o.document && o.document.childNodes;
                "function" != typeof / . / &&"object" != typeof Int8Array && "function" != typeof V && (m.isFunction = function(t) {
                    return "function" == typeof t || !1
                }),
                m.isFinite = function(t) {
                    return ! m.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
                },
                m.isNaN = function(t) {
                    return m.isNumber(t) && isNaN(t)
                },
                m.isBoolean = function(t) {
                    return ! 0 === t || !1 === t || "[object Boolean]" === h.call(t)
                },
                m.isNull = function(t) {
                    return null === t
                },
                m.isUndefined = function(t) {
                    return void 0 === t
                },
                m.has = function(t, e) {
                    if (!m.isArray(e)) return E(t, e);
                    for (var n = e.length,
                    r = 0; r < n; r++) {
                        var i = e[r];
                        if (null == t || !d.call(t, i)) return ! 1;
                        t = t[i]
                    }
                    return !! n
                },
                m.noConflict = function() {
                    return o._ = s,
                    this
                },
                m.identity = function(t) {
                    return t
                },
                m.constant = function(t) {
                    return function() {
                        return t
                    }
                },
                m.noop = function() {},
                m.property = function(t) {
                    return m.isArray(t) ?
                    function(e) {
                        return C(e, t)
                    }: S(t)
                },
                m.propertyOf = function(t) {
                    return null == t ?
                    function() {}: function(e) {
                        return m.isArray(e) ? C(t, e) : t[e]
                    }
                },
                m.matcher = m.matches = function(t) {
                    return t = m.extendOwn({},
                    t),
                    function(e) {
                        return m.isMatch(e, t)
                    }
                },
                m.times = function(t, e, n) {
                    var r = Array(Math.max(0, t));
                    e = b(e, n, 1);
                    for (var i = 0; i < t; i++) r[i] = e(i);
                    return r
                },
                m.random = function(t, e) {
                    return null == e && (e = t, t = 0),
                    t + Math.floor(Math.random() * (e - t + 1))
                },
                m.now = Date.now ||
                function() {
                    return (new Date).getTime()
                };
                var K = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                J = m.invert(K),
                G = function(t) {
                    var e = function(e) {
                        return t[e]
                    },
                    n = "(?:" + m.keys(t).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                    return function(t) {
                        return t = null == t ? "": "" + t,
                        r.test(t) ? t.replace(i, e) : t
                    }
                };
                m.escape = G(K),
                m.unescape = G(J),
                m.result = function(t, e, n) {
                    m.isArray(e) || (e = [e]);
                    var r = e.length;
                    if (!r) return m.isFunction(n) ? n.call(t) : n;
                    for (var i = 0; i < r; i++) {
                        var o = null == t ? void 0 : t[e[i]];
                        void 0 === o && (o = n, i = r),
                        t = m.isFunction(o) ? o.call(t) : o
                    }
                    return t
                };
                var z = 0;
                m.uniqueId = function(t) {
                    var e = ++z + "";
                    return t ? t + e: e
                },
                m.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var H = /(.)^/,
                $ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                X = /\\|'|\r|\n|\u2028|\u2029/g,
                Y = function(t) {
                    return "\\" + $[t]
                };
                m.template = function(t, e, n) { ! e && n && (e = n),
                    e = m.defaults({},
                    e, m.templateSettings);
                    var r = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
                    i = 0,
                    o = "__p+='";
                    t.replace(r,
                    function(e, n, r, s, a) {
                        return o += t.slice(i, a).replace(X, Y),
                        i = a + e.length,
                        n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": s && (o += "';\n" + s + "\n__p+='"),
                        e
                    }),
                    o += "';\n",
                    e.variable || (o = "with(obj||{}){\n" + o + "}\n"),
                    o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                    var s;
                    try {
                        s = new Function(e.variable || "obj", "_", o)
                    } catch(t) {
                        throw t.source = o,
                        t
                    }
                    var a = function(t) {
                        return s.call(this, t, m)
                    };
                    return a.source = "function(" + (e.variable || "obj") + "){\n" + o + "}",
                    a
                },
                m.chain = function(t) {
                    var e = m(t);
                    return e._chain = !0,
                    e
                };
                var Z = function(t, e) {
                    return t._chain ? m(e).chain() : e
                };
                m.mixin = function(t) {
                    return m.each(m.functions(t),
                    function(e) {
                        var n = m[e] = t[e];
                        m.prototype[e] = function() {
                            var t = [this._wrapped];
                            return l.apply(t, arguments),
                            Z(this, n.apply(m, t))
                        }
                    }),
                    m
                },
                m.mixin(m),
                m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
                function(t) {
                    var e = a[t];
                    m.prototype[t] = function() {
                        var n = this._wrapped;
                        return e.apply(n, arguments),
                        "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
                        Z(this, n)
                    }
                }),
                m.each(["concat", "join", "slice"],
                function(t) {
                    var e = a[t];
                    m.prototype[t] = function() {
                        return Z(this, e.apply(this._wrapped, arguments))
                    }
                }),
                m.prototype.value = function() {
                    return this._wrapped
                },
                m.prototype.valueOf = m.prototype.toJSON = m.prototype.value,
                m.prototype.toString = function() {
                    return String(this._wrapped)
                },
                r = [],
                void 0 !== (i = function() {
                    return m
                }.apply(e, r)) && (n.exports = i)
            } ()
        }).call(e, n(67), n(104)(t))
    },
    function(t, e) {
        var n = t.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(84),
            __esModule: !0
        }
    },
    function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    function(t, e, n) {
        var r = n(42)("wks"),
        i = n(31),
        o = n(3).Symbol,
        s = "function" == typeof o; (t.exports = function(t) {
            return r[t] || (r[t] = s && o[t] || (s ? o: i)("Symbol." + t))
        }).store = r
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(138),
        a = n(0),
        u = a.extend,
        c = n(18),
        l = n(6),
        f = l.getSessionToken,
        h = n(48),
        d = function(t, e) {
            var n = (new Date).getTime(),
            r = s(n + t);
            return e ? r + "," + n + ",master": r + "," + n
        },
        p = function(t, e) {
            e ? t["X-LC-Sign"] = d(c.applicationKey) : t["X-LC-Key"] = c.applicationKey
        },
        _ = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1],
            n = {
                "X-LC-Id": c.applicationId,
                "Content-Type": "application/json;charset=UTF-8"
            },
            r = !1;
            return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey: "boolean" == typeof c._config.useMasterKey && (r = c._config.useMasterKey),
            r ? c.masterKey ? e ? n["X-LC-Sign"] = d(c.masterKey, !0) : n["X-LC-Key"] = c.masterKey + ",master": (console.warn("masterKey is not set, fall back to use appKey"), p(n, e)) : p(n, e),
            c.hookKey && (n["X-LC-Hook-Key"] = c.hookKey),
            null !== c._config.production && (n["X-LC-Prod"] = String(c._config.production)),
            n["X-LC-UA"] = c._sharedConfig.userAgent,
            i.
        default.resolve().then(function() {
                var e = f(t);
                if (e) n["X-LC-Session"] = e;
                else if (!c._config.disableCurrentUser) return c.User.currentAsync().then(function(t) {
                    return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken),
                    n
                });
                return n
            })
        },
        v = function(t) {
            var e = t.service,
            n = void 0 === e ? "api": e,
            r = t.version,
            i = void 0 === r ? "1.1": r,
            o = t.path,
            s = c._config.serverURLs[n];
            if (!s) throw new Error("undefined server URL for " + n);
            return "/" !== s.charAt(s.length - 1) && (s += "/"),
            s += i,
            o && (s += o),
            s
        },
        y = function(t) {
            var e = t.service,
            n = t.version,
            r = t.method,
            i = t.path,
            s = t.query,
            a = t.data,
            u = t.authOptions,
            l = t.signKey,
            f = void 0 === l || l;
            if (!c.applicationId || !c.applicationKey && !c.masterKey) throw new Error("Not initialized");
            c._appRouter && c._appRouter.refresh();
            var d = c._config.requestTimeout,
            p = v({
                service: e,
                path: i,
                version: n
            });
            return _(u, f).then(function(t) {
                return h({
                    method: r,
                    url: p,
                    query: s,
                    data: a,
                    headers: t,
                    timeout: d
                }).
                catch(function(t) {
                    var e = {
                        code: t.code || -1,
                        error: t.message || t.responseText
                    };
                    if (t.response && t.response.code) e = t.response;
                    else if (t.responseText) try {
                        e = JSON.parse(t.responseText)
                    } catch(t) {}
                    e.rawMessage = e.rawMessage || e.error,
                    c._sharedConfig.keepErrorRawMessage || (e.error += " [" + (t.statusCode || "N/A") + " " + r + " " + p + "]");
                    var n = new Error(e.error);
                    throw delete e.error,
                    o.extend(n, e)
                })
            })
        },
        m = function(t, e, n, r, i, o, s) {
            var a = "";
            if (t && (a += "/" + t), e && (a += "/" + e), n && (a += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
            if (i && i._where) throw new Error("_where should be in the query");
            return r && "get" === r.toLowerCase() && (s = u({},
            s, i), i = null),
            y({
                method: r,
                path: a,
                query: s,
                data: i,
                authOptions: o
            })
        };
        c.request = y,
        t.exports = {
            _request: m,
            request: y
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var i = n(2),
        o = r(i),
        s = n(112),
        a = r(s),
        u = n(0),
        c = function(t) {
            return u.isNull(t) || u.isUndefined(t)
        },
        l = function(t) {
            return u.isArray(t) ? t: void 0 === t || null === t ? [] : [t]
        },
        f = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.keys,
            n = t.include,
            r = t.includeACL,
            i = {};
            return e && (i.keys = l(e).join(",")),
            n && (i.include = l(n).join(",")),
            r && (i.returnACL = r),
            i
        },
        h = function(t) {
            return t.sessionToken ? t.sessionToken: t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0
        },
        d = function(t) {
            return function(e) {
                return t(e),
                e
            }
        },
        p = function() {},
        _ = function(t, e, n) {
            var r;
            return r = e && e.hasOwnProperty("constructor") ? e.constructor: function() {
                t.apply(this, arguments)
            },
            u.extend(r, t),
            p.prototype = t.prototype,
            r.prototype = new p,
            e && u.extend(r.prototype, e),
            n && u.extend(r, n),
            r.prototype.constructor = r,
            r.__super__ = t.prototype,
            r
        },
        v = function(t) {
            return new Date(t)
        },
        y = function(t, e, n) {
            var r = e.split("."),
            i = r.pop(),
            o = t;
            return r.forEach(function(t) {
                void 0 === o[t] && (o[t] = {}),
                o = o[t]
            }),
            o[i] = n,
            t
        },
        m = function(t, e) {
            for (var n = e.split("."), r = n[0], i = n.pop(), o = t, s = 0; s < n.length; s++) if (void 0 === (o = o[n[s]])) return [void 0, void 0, i];
            return [o[i], o, i, r]
        },
        g = function(t) {
            return u.isObject(t) && (0, a.
        default)(t) === Object.prototype
        },
        b = function t(e, n) {
            return e() ? n().then(function() {
                return t(e, n)
            }) : o.
        default.resolve()
        };
        t.exports = {
            isNullOrUndefined: c,
            ensureArray: l,
            transformFetchOptions: f,
            getSessionToken: h,
            tap: d,
            inherits: _,
            parseDate: v,
            setValue: y,
            findValue: m,
            isPlainObject: g,
            continueWhile: b
        }
    },
    function(t, e, n) {
        var r = n(8),
        i = n(54),
        o = n(39),
        s = Object.defineProperty;
        e.f = n(11) ? Object.defineProperty: function(t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return s(t, e, n)
            } catch(t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value),
            t
        }
    },
    function(t, e, n) {
        var r = n(13);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(105),
            __esModule: !0
        }
    },
    function(t, e, n) {
        var r = n(3),
        i = n(1),
        o = n(23),
        s = n(12),
        a = n(14),
        u = function(t, e, n) {
            var c, l, f, h = t & u.F,
            d = t & u.G,
            p = t & u.S,
            _ = t & u.P,
            v = t & u.B,
            y = t & u.W,
            m = d ? i: i[e] || (i[e] = {}),
            g = m.prototype,
            b = d ? r: p ? r[e] : (r[e] || {}).prototype;
            d && (n = e);
            for (c in n)(l = !h && b && void 0 !== b[c]) && a(m, c) || (f = l ? b[c] : n[c], m[c] = d && "function" != typeof b[c] ? n[c] : v && l ? o(f, r) : y && b[c] == f ?
            function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype,
                e
            } (f) : _ && "function" == typeof f ? o(Function.call, f) : f, _ && ((m.virtual || (m.virtual = {}))[c] = f, t & u.R && g && !g[c] && s(g, c, f)))
        };
        u.F = 1,
        u.G = 2,
        u.S = 4,
        u.P = 8,
        u.B = 16,
        u.W = 32,
        u.U = 64,
        u.R = 128,
        t.exports = u
    },
    function(t, e, n) {
        t.exports = !n(24)(function() {
            return 7 != Object.defineProperty({},
            "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    function(t, e, n) {
        var r = n(7),
        i = n(25);
        t.exports = n(11) ?
        function(t, e, n) {
            return r.f(t, e, i(1, n))
        }: function(t, e, n) {
            return t[e] = n,
            t
        }
    },
    function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t: "function" == typeof t
        }
    },
    function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    function(t, e, n) {
        var r = n(88),
        i = n(37);
        t.exports = function(t) {
            return r(i(t))
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = new Error(e);
            return n.code = t,
            n
        }
        n(0).extend(r, {
            OTHER_CAUSE: -1,
            INTERNAL_SERVER_ERROR: 1,
            CONNECTION_FAILED: 100,
            OBJECT_NOT_FOUND: 101,
            INVALID_QUERY: 102,
            INVALID_CLASS_NAME: 103,
            MISSING_OBJECT_ID: 104,
            INVALID_KEY_NAME: 105,
            INVALID_POINTER: 106,
            INVALID_JSON: 107,
            COMMAND_UNAVAILABLE: 108,
            NOT_INITIALIZED: 109,
            INCORRECT_TYPE: 111,
            INVALID_CHANNEL_NAME: 112,
            PUSH_MISCONFIGURED: 115,
            OBJECT_TOO_LARGE: 116,
            OPERATION_FORBIDDEN: 119,
            CACHE_MISS: 120,
            INVALID_NESTED_KEY: 121,
            INVALID_FILE_NAME: 122,
            INVALID_ACL: 123,
            TIMEOUT: 124,
            INVALID_EMAIL_ADDRESS: 125,
            MISSING_CONTENT_TYPE: 126,
            MISSING_CONTENT_LENGTH: 127,
            INVALID_CONTENT_LENGTH: 128,
            FILE_TOO_LARGE: 129,
            FILE_SAVE_ERROR: 130,
            FILE_DELETE_ERROR: 153,
            DUPLICATE_VALUE: 137,
            INVALID_ROLE_NAME: 139,
            EXCEEDED_QUOTA: 140,
            SCRIPT_FAILED: 141,
            VALIDATION_ERROR: 142,
            INVALID_IMAGE_DATA: 150,
            UNSAVED_FILE_ERROR: 151,
            INVALID_PUSH_TIME_ERROR: 152,
            USERNAME_MISSING: 200,
            PASSWORD_MISSING: 201,
            USERNAME_TAKEN: 202,
            EMAIL_TAKEN: 203,
            EMAIL_MISSING: 204,
            EMAIL_NOT_FOUND: 205,
            SESSION_MISSING: 206,
            MUST_CREATE_USER_THROUGH_SIGNUP: 207,
            ACCOUNT_ALREADY_LINKED: 208,
            LINKED_ID_MISSING: 250,
            INVALID_LINKED_SESSION: 251,
            UNSUPPORTED_SERVICE: 252,
            X_DOMAIN_REQUEST: 602
        }),
        t.exports = r
    },
    function(t, e) {
        t.exports = {}
    },
    function(t, e, n) {
        "use strict"; (function(e) {
            function r(t) {
                return t && t.__esModule ? t: {
                default:
                    t
                }
            }
            var i = n(9),
            o = r(i),
            s = n(68),
            a = r(s),
            u = n(2),
            c = r(u),
            l = n(0),
            f = n(69),
            h = n(19),
            d = n(6),
            p = d.inherits,
            _ = d.parseDate,
            v = n(70),
            y = n(20),
            m = y.setAdapters,
            g = y.adapterManager,
            b = e.AV || {};
            b._config = {
                serverURLs: {},
                useMasterKey: !1,
                production: null,
                realtime: null,
                requestTimeout: null
            };
            var w = "LeanCloud-JS-SDK/" + v;
            b._sharedConfig = {
                userAgent: w,
                liveQueryRealtime: null
            },
            g.on("platformInfo",
            function(t) {
                var e = w;
                if (t) if (t.userAgent) e = t.userAgent;
                else {
                    var n = t.name;
                    t.version && (n += "/" + t.version),
                    t.extra && (n += "; " + t.extra),
                    e += " (" + n + ")"
                }
                b._sharedConfig.userAgent = e
            }),
            b._getAVPath = function(t) {
                if (!b.applicationId) throw new Error("You need to call AV.initialize before using AV.");
                if (t || (t = ""), !l.isString(t)) throw new Error("Tried to get a localStorage path that wasn't a String.");
                return "/" === t[0] && (t = t.substring(1)),
                "AV/" + b.applicationId + "/" + t
            },
            b._installationId = null,
            b._getInstallationId = function() {
                if (b._installationId) return c.
            default.resolve(b._installationId);
                var t = b._getAVPath("installationId");
                return b.localStorage.getItemAsync(t).then(function(e) {
                    return b._installationId = e,
                    b._installationId ? e: (b._installationId = e = f(), b.localStorage.setItemAsync(t, e).then(function() {
                        return e
                    }))
                })
            },
            b._subscriptionId = null,
            b._refreshSubscriptionId = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b._getAVPath("subscriptionId"),
                e = b._subscriptionId = f();
                return b.localStorage.setItemAsync(t, e).then(function() {
                    return e
                })
            },
            b._getSubscriptionId = function() {
                if (b._subscriptionId) return c.
            default.resolve(b._subscriptionId);
                var t = b._getAVPath("subscriptionId");
                return b.localStorage.getItemAsync(t).then(function(e) {
                    return b._subscriptionId = e,
                    b._subscriptionId || (e = b._refreshSubscriptionId(t)),
                    e
                })
            },
            b._parseDate = _,
            b._extend = function(t, e) {
                var n = p(this, t, e);
                return n.extend = this.extend,
                n
            },
            b._encode = function(t, e, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (t instanceof b.Object) {
                    if (n) throw new Error("AV.Objects not allowed here");
                    return e && !l.include(e, t) && t._hasData ? t._toFullJSON(e.concat(t), r) : t._toPointer()
                }
                if (t instanceof b.ACL) return t.toJSON();
                if (l.isDate(t)) return r ? {
                    __type: "Date",
                    iso: t.toJSON()
                }: t.toJSON();
                if (t instanceof b.GeoPoint) return t.toJSON();
                if (l.isArray(t)) return l.map(t,
                function(t) {
                    return b._encode(t, e, n, r)
                });
                if (l.isRegExp(t)) return t.source;
                if (t instanceof b.Relation) return t.toJSON();
                if (t instanceof b.Op) return t.toJSON();
                if (t instanceof b.File) {
                    if (!t.url() && !t.id) throw new Error("Tried to save an object containing an unsaved file.");
                    return t._toFullJSON(e, r)
                }
                return l.isObject(t) ? l.mapObject(t,
                function(t, i) {
                    return b._encode(t, e, n, r)
                }) : t
            },
            b._decode = function(t, e) {
                if (!l.isObject(t) || l.isDate(t)) return t;
                if (l.isArray(t)) return l.map(t,
                function(t) {
                    return b._decode(t)
                });
                if (t instanceof b.Object) return t;
                if (t instanceof b.File) return t;
                if (t instanceof b.Op) return t;
                if (t instanceof b.GeoPoint) return t;
                if (t instanceof b.ACL) return t;
                if ("ACL" === e) return new b.ACL(t);
                if (t.__op) return b.Op._decode(t);
                var n;
                if ("Pointer" === t.__type) {
                    n = t.className;
                    var r = b.Object._create(n);
                    if ((0, a.
                default)(t).length > 3) {
                        var i = l.clone(t);
                        delete i.__type,
                        delete i.className,
                        r._finishFetch(i, !0)
                    } else r._finishFetch({
                        objectId: t.objectId
                    },
                    !1);
                    return r
                }
                if ("Object" === t.__type) {
                    n = t.className;
                    var o = l.clone(t);
                    delete o.__type,
                    delete o.className;
                    var s = b.Object._create(n);
                    return s._finishFetch(o, !0),
                    s
                }
                if ("Date" === t.__type) return b._parseDate(t.iso);
                if ("GeoPoint" === t.__type) return new b.GeoPoint({
                    latitude: t.latitude,
                    longitude: t.longitude
                });
                if ("Relation" === t.__type) {
                    if (!e) throw new Error("key missing decoding a Relation");
                    var u = new b.Relation(null, e);
                    return u.targetClassName = t.className,
                    u
                }
                if ("File" === t.__type) {
                    var c = new b.File(t.name),
                    f = l.clone(t);
                    return delete f.__type,
                    c._finishFetch(f),
                    c
                }
                return l.mapObject(t, b._decode)
            },
            b.parseJSON = b._decode,
            b.parse = function(t) {
                return b.parseJSON(JSON.parse(t))
            },
            b.stringify = function(t) {
                return (0, o.
            default)(b._encode(t, [], !1, !0))
            },
            b._encodeObjectOrArray = function(t) {
                var e = function(t) {
                    return t && t._toFullJSON && (t = t._toFullJSON([])),
                    l.mapObject(t,
                    function(t) {
                        return b._encode(t, [])
                    })
                };
                return l.isArray(t) ? t.map(function(t) {
                    return e(t)
                }) : e(t)
            },
            b._arrayEach = l.each,
            b._traverse = function(t, e, n) {
                if (t instanceof b.Object) {
                    if (n = n || [], l.indexOf(n, t) >= 0) return;
                    return n.push(t),
                    b._traverse(t.attributes, e, n),
                    e(t)
                }
                return t instanceof b.Relation || t instanceof b.File ? e(t) : l.isArray(t) ? (l.each(t,
                function(r, i) {
                    var o = b._traverse(r, e, n);
                    o && (t[i] = o)
                }), e(t)) : l.isObject(t) ? (b._each(t,
                function(r, i) {
                    var o = b._traverse(r, e, n);
                    o && (t[i] = o)
                }), e(t)) : e(t)
            },
            b._objectEach = b._each = function(t, e) {
                l.isObject(t) ? l.each(l.keys(t),
                function(n) {
                    e(t[n], n)
                }) : l.each(t, e)
            },
            b.debug = {
                enable: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "leancloud*";
                    return h.enable(t)
                },
                disable: h.disable
            },
            b.setAdapters = m,
            t.exports = b
        }).call(e, n(67))
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            })(t)
        }
        function i() {
            return ! ("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }
        function o(e) {
            if (e[0] = (this.useColors ? "%c": "") + this.namespace + (this.useColors ? " %c": " ") + e[0] + (this.useColors ? "%c ": " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var r = 0,
                i = 0;
                e[0].replace(/%[a-zA-Z%]/g,
                function(t) {
                    "%%" !== t && (r++, "%c" === t && (i = r))
                }),
                e.splice(i, 0, n)
            }
        }
        function s() {
            var t;
            return "object" === ("undefined" == typeof console ? "undefined": r(console)) && console.log && (t = console).log.apply(t, arguments)
        }
        function a(t) {
            try {
                t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
            } catch(t) {}
        }
        function u() {
            var t;
            try {
                t = e.storage.getItem("debug")
            } catch(t) {}
            return ! t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG),
            t
        }
        e.log = s,
        e.formatArgs = o,
        e.save = a,
        e.load = u,
        e.useColors = i,
        e.storage = function() {
            try {
                return localStorage
            } catch(t) {}
        } (),
        e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
        t.exports = n(110)(e),
        t.exports.formatters.j = function(t) {
            try {
                return JSON.stringify(t)
            } catch(t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0),
        i = n(71),
        o = n(6),
        s = o.inherits,
        a = s(i, {
            constructor: function() {
                i.apply(this),
                this._adapters = {}
            },
            getAdapter: function(t) {
                var e = this._adapters[t];
                if (void 0 === e) throw new Error(t + " adapter is not configured");
                return e
            },
            setAdapters: function(t) {
                var e = this;
                r.extend(this._adapters, t),
                r.keys(t).forEach(function(n) {
                    return e.emit(n, t[n])
                })
            }
        }),
        u = new a;
        t.exports = {
            getAdapter: u.getAdapter.bind(u),
            setAdapters: u.setAdapters.bind(u),
            adapterManager: u
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(85)(!0);
        n(53)(String, "String",
        function(t) {
            this._t = String(t),
            this._i = 0
        },
        function() {
            var t, e = this._t,
            n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            }: (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    function(t, e) {
        t.exports = !0
    },
    function(t, e, n) {
        var r = n(29);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    function(t, e) {
        t.exports = function(t) {
            try {
                return !! t()
            } catch(t) {
                return ! 0
            }
        }
    },
    function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    function(t, e, n) {
        var r = n(37);
        t.exports = function(t) {
            return Object(r(t))
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        e.__esModule = !0;
        var i = n(34),
        o = r(i),
        s = n(35),
        a = r(s),
        u = "function" == typeof a.
    default && "symbol" == typeof o.
    default ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof a.
        default && t.constructor === a.
        default && t !== a.
        default.prototype ? "symbol": typeof t
        };
        e.
    default = "function" == typeof a.
    default && "symbol" === u(o.
    default) ?
        function(t) {
            return void 0 === t ? "undefined": u(t)
        }: function(t) {
            return t && "function" == typeof a.
        default && t.constructor === a.
        default && t !== a.
        default.prototype ? "symbol": void 0 === t ? "undefined": u(t)
        }
    },
    function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    function(t, e, n) {
        var r = n(57),
        i = n(43);
        t.exports = Object.keys ||
        function(t) {
            return r(t, i)
        }
    },
    function(t, e) {
        var n = 0,
        r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "": t, ")_", (++n + r).toString(36))
        }
    },
    function(t, e, n) {
        var r = n(7).f,
        i = n(14),
        o = n(4)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t: t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    function(t, e, n) {
        n(91);
        for (var r = n(3), i = n(12), o = n(17), s = n(4)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
            var c = a[u],
            l = r[c],
            f = l && l.prototype;
            f && !f[s] && i(f, s, c),
            o[c] = o.Array
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(119),
            __esModule: !0
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(120),
            __esModule: !0
        }
    },
    function(t, e) {
        var n = Math.ceil,
        r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r: n)(t)
        }
    },
    function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    function(t, e, n) {
        var r = n(13),
        i = n(3).document,
        o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    },
    function(t, e, n) {
        var r = n(13);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    function(t, e, n) {
        var r = n(36),
        i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    },
    function(t, e, n) {
        var r = n(42)("keys"),
        i = n(31);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    },
    function(t, e, n) {
        var r = n(1),
        i = n(3),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}); (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e: {})
        })("versions", []).push({
            version: r.version,
            mode: n(22) ? "pure": "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    function(t, e, n) {
        var r = n(26),
        i = n(4)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        } ()),
        s = function(t, e) {
            try {
                return t[e]
            } catch(t) {}
        };
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = s(e = Object(t), i)) ? n: o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments": a
        }
    },
    function(t, e, n) {
        var r = n(44),
        i = n(4)("iterator"),
        o = n(17);
        t.exports = n(1).getIteratorMethod = function(t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n;
            this.promise = new t(function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t,
                n = r
            }),
            this.resolve = i(e),
            this.reject = i(n)
        }
        var i = n(29);
        t.exports.f = function(t) {
            return new r(t)
        }
    },
    function(t, e, n) {
        var r = n(10),
        i = n(1),
        o = n(24);
        t.exports = function(t, e) {
            var n = (i.Object || {})[t] || Object[t],
            s = {};
            s[t] = e(n),
            r(r.S + r.F * o(function() {
                n(1)
            }), "Object", s)
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var i = n(9),
        o = r(i),
        s = n(28),
        a = r(s),
        u = n(68),
        c = r(u),
        l = (n(0), n(128)),
        f = l.timeout,
        h = n(19),
        d = h("leancloud:request"),
        p = h("leancloud:request:error"),
        _ = n(20),
        v = _.getAdapter,
        y = 0,
        m = function(t) {
            var e = t.method,
            n = t.url,
            r = t.query,
            i = t.data,
            s = t.headers,
            u = void 0 === s ? {}: s,
            l = t.timeout,
            _ = t.onprogress;
            if (r) {
                var m = (0, c.
            default)(r).map(function(t) {
                    var e = r[t];
                    if (void 0 !== e) {
                        var n = "object" === (void 0 === e ? "undefined": (0, a.
                    default)(e)) ? (0, o.
                    default)(e):
                        e;
                        return encodeURIComponent(t) + "=" + encodeURIComponent(n)
                    }
                }).filter(function(t) {
                    return t
                }).join("&");
                n = n + "?" + m
            }
            var g = y++;
            d("request(%d) %s %s %o %o %o", g, e, n, r, i, u);
            var b = v("request"),
            w = b(n, {
                method: e,
                headers: u,
                data: i,
                onprogress: _
            }).then(function(t) {
                if (d("response(%d) %d %O %o", g, t.status, t.data || t.text, t.header), !1 === t.ok) {
                    var e = new Error;
                    throw e.response = t,
                    e
                }
                return t.data
            }).
            catch(function(t) {
                throw t.response && (h.enabled("leancloud:request") || p("request(%d) %s %s %o %o %o", g, e, n, r, i, u), p("response(%d) %d %O %o", g, t.response.status, t.response.data || t.response.text, t.response.header), t.statusCode = t.response.status, t.responseText = t.response.text, t.response = t.response.data),
                t
            });
            return l ? f(w, l) : w
        };
        t.exports = m
    },
    function(t, e, n) {
        e.f = n(4)
    },
    function(t, e, n) {
        var r = n(3),
        i = n(1),
        o = n(22),
        s = n(49),
        a = n(7).f;
        t.exports = function(t) {
            var e = i.Symbol || (i.Symbol = o ? {}: r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {
                value: s.f(t)
            })
        }
    },
    function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    function(t, e) {},
    function(t, e, n) {
        "use strict";
        var r = n(22),
        i = n(10),
        o = n(55),
        s = n(12),
        a = n(17),
        u = n(86),
        c = n(32),
        l = n(59),
        f = n(4)("iterator"),
        h = !([].keys && "next" in [].keys()),
        d = function() {
            return this
        };
        t.exports = function(t, e, n, p, _, v, y) {
            u(n, e, p);
            var m, g, b, w = function(t) {
                if (!h && t in E) return E[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new n(this, t)
                    }
                }
                return function() {
                    return new n(this, t)
                }
            },
            O = e + " Iterator",
            A = "values" == _,
            S = !1,
            E = t.prototype,
            C = E[f] || E["@@iterator"] || _ && E[_],
            x = C || w(_),
            T = _ ? A ? w("entries") : x: void 0,
            j = "Array" == e ? E.entries || C: C;
            if (j && (b = l(j.call(new t))) !== Object.prototype && b.next && (c(b, O, !0), r || "function" == typeof b[f] || s(b, f, d)), A && C && "values" !== C.name && (S = !0, x = function() {
                return C.call(this)
            }), r && !y || !h && !S && E[f] || s(E, f, x), a[e] = x, a[O] = d, _) if (m = {
                values: A ? x: w("values"),
                keys: v ? x: w("keys"),
                entries: T
            },
            y) for (g in m) g in E || o(E, g, m[g]);
            else i(i.P + i.F * (h || S), e, m);
            return m
        }
    },
    function(t, e, n) {
        t.exports = !n(11) && !n(24)(function() {
            return 7 != Object.defineProperty(n(38)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    function(t, e, n) {
        t.exports = n(12)
    },
    function(t, e, n) {
        var r = n(8),
        i = n(87),
        o = n(43),
        s = n(41)("IE_PROTO"),
        a = function() {},
        u = function() {
            var t, e = n(38)("iframe"),
            r = o.length;
            for (e.style.display = "none", n(58).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
            return u()
        };
        t.exports = Object.create ||
        function(t, e) {
            var n;
            return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[s] = t) : n = u(),
            void 0 === e ? n: i(n, e)
        }
    },
    function(t, e, n) {
        var r = n(14),
        i = n(15),
        o = n(89)(!1),
        s = n(41)("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = i(t),
            u = 0,
            c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; e.length > u;) r(a, n = e[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    },
    function(t, e, n) {
        var r = n(3).document;
        t.exports = r && r.documentElement
    },
    function(t, e, n) {
        var r = n(14),
        i = n(27),
        o = n(41)("IE_PROTO"),
        s = Object.prototype;
        t.exports = Object.getPrototypeOf ||
        function(t) {
            return t = i(t),
            r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? s: null
        }
    },
    function(t, e, n) {
        var r = n(8);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch(e) {
                var o = t.
                return;
                throw void 0 !== o && r(o.call(t)),
                e
            }
        }
    },
    function(t, e, n) {
        var r = n(17),
        i = n(4)("iterator"),
        o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    },
    function(t, e, n) {
        var r = n(8),
        i = n(29),
        o = n(4)("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || void 0 == (n = r(s)[o]) ? e: i(n)
        }
    },
    function(t, e, n) {
        var r, i, o, s = n(23),
        a = n(97),
        u = n(58),
        c = n(38),
        l = n(3),
        f = l.process,
        h = l.setImmediate,
        d = l.clearImmediate,
        p = l.MessageChannel,
        _ = l.Dispatch,
        v = 0,
        y = {},
        m = function() {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t],
                e()
            }
        },
        g = function(t) {
            m.call(t.data)
        };
        h && d || (h = function(t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return y[++v] = function() {
                a("function" == typeof t ? t: Function(t), e)
            },
            r(v),
            v
        },
        d = function(t) {
            delete y[t]
        },
        "process" == n(26)(f) ? r = function(t) {
            f.nextTick(s(m, t, 1))
        }: _ && _.now ? r = function(t) {
            _.now(s(m, t, 1))
        }: p ? (i = new p, o = i.port2, i.port1.onmessage = g, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
            l.postMessage(t + "", "*")
        },
        l.addEventListener("message", g, !1)) : r = "onreadystatechange" in c("script") ?
        function(t) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this),
                m.call(t)
            }
        }: function(t) {
            setTimeout(s(m, t, 1), 0)
        }),
        t.exports = {
            set: h,
            clear: d
        }
    },
    function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch(t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    },
    function(t, e, n) {
        var r = n(8),
        i = n(13),
        o = n(46);
        t.exports = function(t, e) {
            if (r(t), i(e) && e.constructor === t) return e;
            var n = o.f(t);
            return (0, n.resolve)(e),
            n.promise
        }
    },
    function(t, e, n) {
        var r = n(4)("iterator"),
        i = !1;
        try {
            var o = [7][r]();
            o.
            return = function() {
                i = !0
            },
            Array.from(o,
            function() {
                throw 2
            })
        } catch(t) {}
        t.exports = function(t, e) {
            if (!e && !i) return ! 1;
            var n = !1;
            try {
                var o = [7],
                s = o[r]();
                s.next = function() {
                    return {
                        done: n = !0
                    }
                },
                o[r] = function() {
                    return s
                },
                t(o)
            } catch(t) {}
            return n
        }
    },
    function(t, e) {
        var n;
        n = function() {
            return this
        } ();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch(t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(106),
            __esModule: !0
        }
    },
    function(t, e, n) {
        function r(t, e, n) {
            var r = e && n || 0;
            "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null),
            t = t || {};
            var s = t.random || (t.rng || i)();
            if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) for (var a = 0; a < 16; ++a) e[r + a] = s[a];
            return e || o(s)
        }
        var i = n(108),
        o = n(109);
        t.exports = r
    },
    function(t, e, n) {
        "use strict";
        t.exports = "4.6.0"
    },
    function(t, e, n) {
        "use strict";
        function r() {}
        function i(t, e, n) {
            this.fn = t,
            this.context = e,
            this.once = n || !1
        }
        function o() {
            this._events = new r,
            this._eventsCount = 0
        }
        var s = Object.prototype.hasOwnProperty,
        a = "~";
        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)),
        o.prototype.eventNames = function() {
            var t, e, n = [];
            if (0 === this._eventsCount) return n;
            for (e in t = this._events) s.call(t, e) && n.push(a ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
        },
        o.prototype.listeners = function(t, e) {
            var n = a ? a + t: t,
            r = this._events[n];
            if (e) return !! r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0,
            o = r.length,
            s = new Array(o); i < o; i++) s[i] = r[i].fn;
            return s
        },
        o.prototype.emit = function(t, e, n, r, i, o) {
            var s = a ? a + t: t;
            if (!this._events[s]) return ! 1;
            var u, c, l = this._events[s],
            f = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                case 1:
                    return l.fn.call(l.context),
                    !0;
                case 2:
                    return l.fn.call(l.context, e),
                    !0;
                case 3:
                    return l.fn.call(l.context, e, n),
                    !0;
                case 4:
                    return l.fn.call(l.context, e, n, r),
                    !0;
                case 5:
                    return l.fn.call(l.context, e, n, r, i),
                    !0;
                case 6:
                    return l.fn.call(l.context, e, n, r, i, o),
                    !0
                }
                for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u)
            } else {
                var h, d = l.length;
                for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), f) {
                case 1:
                    l[c].fn.call(l[c].context);
                    break;
                case 2:
                    l[c].fn.call(l[c].context, e);
                    break;
                case 3:
                    l[c].fn.call(l[c].context, e, n);
                    break;
                case 4:
                    l[c].fn.call(l[c].context, e, n, r);
                    break;
                default:
                    if (!u) for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                    l[c].fn.apply(l[c].context, u)
                }
            }
            return ! 0
        },
        o.prototype.on = function(t, e, n) {
            var r = new i(e, n || this),
            o = a ? a + t: t;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++),
            this
        },
        o.prototype.once = function(t, e, n) {
            var r = new i(e, n || this, !0),
            o = a ? a + t: t;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++),
            this
        },
        o.prototype.removeListener = function(t, e, n, i) {
            var o = a ? a + t: t;
            if (!this._events[o]) return this;
            if (!e) return 0 == --this._eventsCount ? this._events = new r: delete this._events[o],
            this;
            var s = this._events[o];
            if (s.fn) s.fn !== e || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r: delete this._events[o]);
            else {
                for (var u = 0,
                c = [], l = s.length; u < l; u++)(s[u].fn !== e || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c: 0 == --this._eventsCount ? this._events = new r: delete this._events[o]
            }
            return this
        },
        o.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = a ? a + t: t, this._events[e] && (0 == --this._eventsCount ? this._events = new r: delete this._events[e])) : (this._events = new r, this._eventsCount = 0),
            this
        },
        o.prototype.off = o.prototype.removeListener,
        o.prototype.addListener = o.prototype.on,
        o.prototype.setMaxListeners = function() {
            return this
        },
        o.prefixed = a,
        o.EventEmitter = o,
        t.exports = o
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(20),
        s = o.getAdapter,
        a = ["getItem", "setItem", "removeItem", "clear"],
        u = {
            get async() {
                return s("storage").async
            }
        };
        a.forEach(function(t) {
            u[t + "Async"] = function() {
                var e = s("storage");
                return i.
            default.resolve(e[t].apply(e, arguments))
            },
            u[t] = function() {
                var e = s("storage");
                if (!e.async) return e[t].apply(e, arguments);
                var n = new Error("Synchronous API [" + t + "] is not available in this runtime.");
                throw n.code = "SYNC_API_NOT_AVAILABLE",
                n
            }
        }),
        t.exports = u
    },
    function(t, e, n) {
        "use strict";
        var r = n(9),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(72),
        s = n(18),
        a = e.removeAsync = o.removeItemAsync.bind(o),
        u = function(t, e) {
            try {
                t = JSON.parse(t)
            } catch(t) {
                return null
            }
            if (t) {
                return t.expiredAt && t.expiredAt < Date.now() ? a(e).then(function() {
                    return null
                }) : t.value
            }
            return null
        };
        e.getAsync = function(t) {
            return t = "AV/" + s.applicationId + "/" + t,
            o.getItemAsync(t).then(function(e) {
                return u(e, t)
            })
        },
        e.setAsync = function(t, e, n) {
            var r = {
                value: e
            };
            return "number" == typeof n && (r.expiredAt = Date.now() + n),
            o.setItemAsync("AV/" + s.applicationId + "/" + t, (0, i.
        default)(r))
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(116),
            __esModule: !0
        }
    },
    function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    function(t, e, n) {
        var r = n(57),
        i = n(43).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames ||
        function(t) {
            return r(t, i)
        }
    },
    function(t, e, n) {
        var r = n(51),
        i = n(25),
        o = n(15),
        s = n(39),
        a = n(14),
        u = n(54),
        c = Object.getOwnPropertyDescriptor;
        e.f = n(11) ? c: function(t, e) {
            if (t = o(t), e = s(e, !0), u) try {
                return c(t, e)
            } catch(t) {}
            if (a(t, e)) return i(!r.f.call(t, e), t[e])
        }
    },
    function(t, e) {
        var n = {
            utf8: {
                stringToBytes: function(t) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(n.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                    return e
                },
                bytesToString: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                    return e.join("")
                }
            }
        };
        t.exports = n
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(147),
            __esModule: !0
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function i(t) {
            return (i = "function" == typeof f.
        default && "symbol" === (0, c.
        default)(a.
        default) ?
            function(t) {
                return void 0 === t ? "undefined": (0, c.
            default)(t)
            }:
            function(t) {
                return t && "function" == typeof f.
            default && t.constructor === f.
            default && t !== f.
            default.prototype ? "symbol": void 0 === t ? "undefined": (0, c.
            default)(t)
            })(t)
        }
        function o(t) {
            return null !== t && "object" === i(t)
        }
        var s = n(34),
        a = r(s),
        u = n(28),
        c = r(u),
        l = n(35),
        f = r(l);
        t.exports = o
    },
    function(t, e, n) {
        "use strict";
        var r = n(82),
        i = n(165);
        t.exports = i(r)
    },
    function(t, e, n) {
        "use strict";
        t.exports = n(83)
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(18);
        s._ = o,
        s.version = n(70),
        s.Promise = i.
    default,
        s.localStorage = n(72),
        s.Cache = n(73),
        s.Error = n(16),
        n(115),
        n(129)(s),
        n(130)(s),
        n(131)(s),
        n(132)(s),
        n(133)(s),
        n(134)(s),
        n(142)(s),
        n(152)(s),
        n(153)(s),
        n(155)(s),
        n(156)(s),
        n(157)(s),
        n(158)(s),
        n(159)(s),
        n(160)(s),
        n(161)(s),
        n(162)(s),
        s.Conversation = n(163),
        n(164),
        t.exports = s
    },
    function(t, e, n) {
        n(52),
        n(21),
        n(33),
        n(94),
        n(102),
        n(103),
        t.exports = n(1).Promise
    },
    function(t, e, n) {
        var r = n(36),
        i = n(37);
        t.exports = function(t) {
            return function(e, n) {
                var o, s, a = String(i(e)),
                u = r(n),
                c = a.length;
                return u < 0 || u >= c ? t ? "": void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o: t ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(56),
        i = n(25),
        o = n(32),
        s = {};
        n(12)(s, n(4)("iterator"),
        function() {
            return this
        }),
        t.exports = function(t, e, n) {
            t.prototype = r(s, {
                next: i(1, n)
            }),
            o(t, e + " Iterator")
        }
    },
    function(t, e, n) {
        var r = n(7),
        i = n(8),
        o = n(30);
        t.exports = n(11) ? Object.defineProperties: function(t, e) {
            i(t);
            for (var n, s = o(e), a = s.length, u = 0; a > u;) r.f(t, n = s[u++], e[n]);
            return t
        }
    },
    function(t, e, n) {
        var r = n(26);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    function(t, e, n) {
        var r = n(15),
        i = n(40),
        o = n(90);
        t.exports = function(t) {
            return function(e, n, s) {
                var a, u = r(e),
                c = i(u.length),
                l = o(s, c);
                if (t && n != n) {
                    for (; c > l;) if ((a = u[l++]) != a) return ! 0
                } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
                return ! t && -1
            }
        }
    },
    function(t, e, n) {
        var r = n(36),
        i = Math.max,
        o = Math.min;
        t.exports = function(t, e) {
            return t = r(t),
            t < 0 ? i(t + e, 0) : o(t, e)
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(92),
        i = n(93),
        o = n(17),
        s = n(15);
        t.exports = n(53)(Array, "Array",
        function(t, e) {
            this._t = s(t),
            this._i = 0,
            this._k = e
        },
        function() {
            var t = this._t,
            e = this._k,
            n = this._i++;
            return ! t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
        },
        "values"),
        o.Arguments = o.Array,
        r("keys"),
        r("values"),
        r("entries")
    },
    function(t, e) {
        t.exports = function() {}
    },
    function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r, i, o, s, a = n(22),
        u = n(3),
        c = n(23),
        l = n(44),
        f = n(10),
        h = n(13),
        d = n(29),
        p = n(95),
        _ = n(96),
        v = n(62),
        y = n(63).set,
        m = n(98)(),
        g = n(46),
        b = n(64),
        w = n(99),
        O = n(65),
        A = u.TypeError,
        S = u.process,
        E = S && S.versions,
        C = E && E.v8 || "",
        x = u.Promise,
        T = "process" == l(S),
        j = function() {},
        N = i = g.f,
        U = !!
        function() {
            try {
                var t = x.resolve(1),
                e = (t.constructor = {})[n(4)("species")] = function(t) {
                    t(j, j)
                };
                return (T || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
            } catch(t) {}
        } (),
        I = function(t) {
            var e;
            return ! (!h(t) || "function" != typeof(e = t.then)) && e
        },
        k = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m(function() {
                    for (var r = t._v,
                    i = 1 == t._s,
                    o = 0; n.length > o;) !
                    function(e) {
                        var n, o, s, a = i ? e.ok: e.fail,
                        u = e.resolve,
                        c = e.reject,
                        l = e.domain;
                        try {
                            a ? (i || (2 == t._h && D(t), t._h = 1), !0 === a ? n = r: (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === e.promise ? c(A("Promise-chain cycle")) : (o = I(n)) ? o.call(n, u, c) : u(n)) : c(r)
                        } catch(t) {
                            l && !s && l.exit(),
                            c(t)
                        }
                    } (n[o++]);
                    t._c = [],
                    t._n = !1,
                    e && !t._h && P(t)
                })
            }
        },
        P = function(t) {
            y.call(u,
            function() {
                var e, n, r, i = t._v,
                o = R(t);
                if (o && (e = b(function() {
                    T ? S.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                        promise: t,
                        reason: i
                    }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                }), t._h = T || R(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            })
        },
        R = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        D = function(t) {
            y.call(u,
            function() {
                var e;
                T ? S.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        M = function(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), k(e, !0))
        },
        L = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0,
                n = n._w || n;
                try {
                    if (n === t) throw A("Promise can't be resolved itself"); (e = I(t)) ? m(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(L, r, 1), c(M, r, 1))
                        } catch(t) {
                            M.call(r, t)
                        }
                    }) : (n._v = t, n._s = 1, k(n, !1))
                } catch(t) {
                    M.call({
                        _w: n,
                        _d: !1
                    },
                    t)
                }
            }
        };
        U || (x = function(t) {
            p(this, x, "Promise", "_h"),
            d(t),
            r.call(this);
            try {
                t(c(L, this, 1), c(M, this, 1))
            } catch(t) {
                M.call(this, t)
            }
        },
        r = function(t) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        },
        r.prototype = n(100)(x.prototype, {
            then: function(t, e) {
                var n = N(v(this, x));
                return n.ok = "function" != typeof t || t,
                n.fail = "function" == typeof e && e,
                n.domain = T ? S.domain: void 0,
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && k(this, !1),
                n.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), o = function() {
            var t = new r;
            this.promise = t,
            this.resolve = c(L, t, 1),
            this.reject = c(M, t, 1)
        },
        g.f = N = function(t) {
            return t === x || t === s ? new o(t) : i(t)
        }),
        f(f.G + f.W + f.F * !U, {
            Promise: x
        }),
        n(32)(x, "Promise"),
        n(101)("Promise"),
        s = n(1).Promise,
        f(f.S + f.F * !U, "Promise", {
            reject: function(t) {
                var e = N(this);
                return (0, e.reject)(t),
                e.promise
            }
        }),
        f(f.S + f.F * (a || !U), "Promise", {
            resolve: function(t) {
                return O(a && this === s ? x: this, t)
            }
        }),
        f(f.S + f.F * !(U && n(66)(function(t) {
            x.all(t).
            catch(j)
        })), "Promise", {
            all: function(t) {
                var e = this,
                n = N(e),
                r = n.resolve,
                i = n.reject,
                o = b(function() {
                    var n = [],
                    o = 0,
                    s = 1;
                    _(t, !1,
                    function(t) {
                        var a = o++,
                        u = !1;
                        n.push(void 0),
                        s++,
                        e.resolve(t).then(function(t) {
                            u || (u = !0, n[a] = t, --s || r(n))
                        },
                        i)
                    }),
                    --s || r(n)
                });
                return o.e && i(o.v),
                n.promise
            },
            race: function(t) {
                var e = this,
                n = N(e),
                r = n.reject,
                i = b(function() {
                    _(t, !1,
                    function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return i.e && r(i.v),
                n.promise
            }
        })
    },
    function(t, e) {
        t.exports = function(t, e, n, r) {
            if (! (t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    },
    function(t, e, n) {
        var r = n(23),
        i = n(60),
        o = n(61),
        s = n(8),
        a = n(40),
        u = n(45),
        c = {},
        l = {},
        e = t.exports = function(t, e, n, f, h) {
            var d, p, _, v, y = h ?
            function() {
                return t
            }: u(t),
            m = r(n, f, e ? 2 : 1),
            g = 0;
            if ("function" != typeof y) throw TypeError(t + " is not iterable!");
            if (o(y)) {
                for (d = a(t.length); d > g; g++) if ((v = e ? m(s(p = t[g])[0], p[1]) : m(t[g])) === c || v === l) return v
            } else for (_ = y.call(t); ! (p = _.next()).done;) if ((v = i(_, m, p.value, e)) === c || v === l) return v
        };
        e.BREAK = c,
        e.RETURN = l
    },
    function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    },
    function(t, e, n) {
        var r = n(3),
        i = n(63).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        s = r.process,
        a = r.Promise,
        u = "process" == n(26)(s);
        t.exports = function() {
            var t, e, n, c = function() {
                var r, i;
                for (u && (r = s.domain) && r.exit(); t;) {
                    i = t.fn,
                    t = t.next;
                    try {
                        i()
                    } catch(r) {
                        throw t ? n() : e = void 0,
                        r
                    }
                }
                e = void 0,
                r && r.enter()
            };
            if (u) n = function() {
                s.nextTick(c)
            };
            else if (!o || r.navigator && r.navigator.standalone) if (a && a.resolve) {
                var l = a.resolve(void 0);
                n = function() {
                    l.then(c)
                }
            } else n = function() {
                i.call(r, c)
            };
            else {
                var f = !0,
                h = document.createTextNode("");
                new o(c).observe(h, {
                    characterData: !0
                }),
                n = function() {
                    h.data = f = !f
                }
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i),
                t || (t = i, n()),
                e = i
            }
        }
    },
    function(t, e, n) {
        var r = n(3),
        i = r.navigator;
        t.exports = i && i.userAgent || ""
    },
    function(t, e, n) {
        var r = n(12);
        t.exports = function(t, e, n) {
            for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
            return t
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(3),
        i = n(1),
        o = n(7),
        s = n(11),
        a = n(4)("species");
        t.exports = function(t) {
            var e = "function" == typeof i[t] ? i[t] : r[t];
            s && e && !e[a] && o.f(e, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(10),
        i = n(1),
        o = n(3),
        s = n(62),
        a = n(65);
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var e = s(this, i.Promise || o.Promise),
                n = "function" == typeof t;
                return this.then(n ?
                function(n) {
                    return a(e, t()).then(function() {
                        return n
                    })
                }: t, n ?
                function(n) {
                    return a(e, t()).then(function() {
                        throw n
                    })
                }: t)
            }
        })
    },
    function(t, e, n) {
        "use strict";
        var r = n(10),
        i = n(46),
        o = n(64);
        r(r.S, "Promise", {
            try: function(t) {
                var e = i.f(this),
                n = o(t);
                return (n.e ? e.reject: e.resolve)(n.v),
                e.promise
            }
        })
    },
    function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {},
            t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1),
            t
        }
    },
    function(t, e, n) {
        var r = n(1),
        i = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
        t.exports = function(t) {
            return i.stringify.apply(i, arguments)
        }
    },
    function(t, e, n) {
        n(107),
        t.exports = n(1).Object.keys
    },
    function(t, e, n) {
        var r = n(27),
        i = n(30);
        n(47)("keys",
        function() {
            return function(t) {
                return i(r(t))
            }
        })
    },
    function(t, e) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            t.exports = function() {
                return n(r),
                r
            }
        } else {
            var i = new Array(16);
            t.exports = function() {
                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()),
                i[e] = t >>> ((3 & e) << 3) & 255;
                return i
            }
        }
    },
    function(t, e) {
        function n(t, e) {
            var n = e || 0,
            i = r;
            return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("")
        }
        for (var r = [], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);
        t.exports = n
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            function e(t) {
                for (var e = 0,
                n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n),
                e |= 0;
                return r.colors[Math.abs(e) % r.colors.length]
            }
            function r(t) {
                function n() {
                    if (n.enabled) {
                        for (var t = arguments.length,
                        e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        var o = n,
                        a = Number(new Date),
                        u = a - (s || a);
                        o.diff = u,
                        o.prev = s,
                        o.curr = a,
                        s = a,
                        e[0] = r.coerce(e[0]),
                        "string" != typeof e[0] && e.unshift("%O");
                        var c = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g,
                        function(t, n) {
                            if ("%%" === t) return t;
                            c++;
                            var i = r.formatters[n];
                            if ("function" == typeof i) {
                                var s = e[c];
                                t = i.call(o, s),
                                e.splice(c, 1),
                                c--
                            }
                            return t
                        }),
                        r.formatArgs.call(o, e); (o.log || r.log).apply(o, e)
                    }
                }
                var s;
                return n.namespace = t,
                n.enabled = r.enabled(t),
                n.useColors = r.useColors(),
                n.color = e(t),
                n.destroy = i,
                n.extend = o,
                "function" == typeof r.init && r.init(n),
                r.instances.push(n),
                n
            }
            function i() {
                var t = r.instances.indexOf(this);
                return - 1 !== t && (r.instances.splice(t, 1), !0)
            }
            function o(t, e) {
                return r(this.namespace + (void 0 === e ? ":": e) + t)
            }
            function s(t) {
                r.save(t),
                r.names = [],
                r.skips = [];
                var e, n = ("string" == typeof t ? t: "").split(/[\s,]+/),
                i = n.length;
                for (e = 0; e < i; e++) n[e] && (t = n[e].replace(/\*/g, ".*?"), "-" === t[0] ? r.skips.push(new RegExp("^" + t.substr(1) + "$")) : r.names.push(new RegExp("^" + t + "$")));
                for (e = 0; e < r.instances.length; e++) {
                    var o = r.instances[e];
                    o.enabled = r.enabled(o.namespace)
                }
            }
            function a() {
                r.enable("")
            }
            function u(t) {
                if ("*" === t[t.length - 1]) return ! 0;
                var e, n;
                for (e = 0, n = r.skips.length; e < n; e++) if (r.skips[e].test(t)) return ! 1;
                for (e = 0, n = r.names.length; e < n; e++) if (r.names[e].test(t)) return ! 0;
                return ! 1
            }
            function c(t) {
                return t instanceof Error ? t.stack || t.message: t
            }
            return r.debug = r,
            r.
        default = r,
            r.coerce = c,
            r.disable = a,
            r.enable = s,
            r.enabled = u,
            r.humanize = n(111),
            Object.keys(t).forEach(function(e) {
                r[e] = t[e]
            }),
            r.instances = [],
            r.names = [],
            r.skips = [],
            r.formatters = {},
            r.selectColor = e,
            r.enable(r.load()),
            r
        }
        t.exports = r
    },
    function(t, e) {
        function n(t) {
            if (t = String(t), !(t.length > 100)) {
                var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * f;
                    case "weeks":
                    case "week":
                    case "w":
                        return n * l;
                    case "days":
                    case "day":
                    case "d":
                        return n * c;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * u;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * a;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                    }
                }
            }
        }
        function r(t) {
            var e = Math.abs(t);
            return e >= c ? Math.round(t / c) + "d": e >= u ? Math.round(t / u) + "h": e >= a ? Math.round(t / a) + "m": e >= s ? Math.round(t / s) + "s": t + "ms"
        }
        function i(t) {
            var e = Math.abs(t);
            return e >= c ? o(t, e, c, "day") : e >= u ? o(t, e, u, "hour") : e >= a ? o(t, e, a, "minute") : e >= s ? o(t, e, s, "second") : t + " ms"
        }
        function o(t, e, n, r) {
            var i = e >= 1.5 * n;
            return Math.round(t / n) + " " + r + (i ? "s": "")
        }
        var s = 1e3,
        a = 60 * s,
        u = 60 * a,
        c = 24 * u,
        l = 7 * c,
        f = 365.25 * c;
        t.exports = function(t, e) {
            e = e || {};
            var o = typeof t;
            if ("string" === o && t.length > 0) return n(t);
            if ("number" === o && isFinite(t)) return e.long ? i(t) : r(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(113),
            __esModule: !0
        }
    },
    function(t, e, n) {
        n(114),
        t.exports = n(1).Object.getPrototypeOf
    },
    function(t, e, n) {
        var r = n(27),
        i = n(59);
        n(47)("getPrototypeOf",
        function() {
            return function(t) {
                return i(r(t))
            }
        })
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            if (p(t)) return {};
            var e = t.slice(0, 8).toLowerCase(),
            n = "lncldglobal.com";
            return {
                push: "https://" + e + ".push." + n,
                stats: "https://" + e + ".stats." + n,
                engine: "https://" + e + ".engine." + n,
                api: "https://" + e + ".api." + n,
                rtm: "https://" + e + ".rtm." + n
            }
        }
        var i = n(74),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (i),
        s = n(18),
        a = n(118),
        u = n(6),
        c = u.isNullOrUndefined,
        l = n(0),
        f = l.extend,
        h = l.isObject,
        d = l.isEmpty,
        p = function(t) {
            return "-MdYXbMMI" !== t.slice( - 9)
        },
        _ = function(t) {
            return {
                push: t,
                stats: t,
                engine: t,
                api: t,
                rtm: t
            }
        },
        v = !1,
        y = !1;
        s.init = function(t) {
            if (!h(t)) return s.init({
                appId: t,
                appKey: arguments.length <= 1 ? void 0 : arguments[1],
                masterKey: arguments.length <= 2 ? void 0 : arguments[2]
            });
            var e = t.appId,
            n = t.appKey,
            i = t.masterKey,
            o = t.hookKey,
            u = t.serverURL,
            c = t.serverURLs,
            l = void 0 === c ? u: c,
            m = t.disableCurrentUser,
            g = t.production,
            b = t.realtime;
            if (y && console.warn("Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations."), !e) throw new TypeError("appId must be a string");
            if (!n) throw new TypeError("appKey must be a string");
            if (i && console.warn("MasterKey is not supposed to be used at client side."), p(e) && !l && d(s._config.serverURLs)) throw new TypeError("serverURL option is required for apps from CN region");
            e !== s._config.applicationId ? (s._config.masterKey = i, s._config.hookKey = o) : (i && (s._config.masterKey = i), o && (s._config.hookKey = o)),
            s._config.applicationId = e,
            s._config.applicationKey = n,
            s.setProduction(g),
            void 0 !== m && (s._config.disableCurrentUser = m);
            var w = v || void 0 !== l;
            if (w || (s._appRouter = new a(s)), s._setServerURLs(f({},
            r(e), s._config.serverURLs, "string" == typeof l ? _(l) : l), w), b) s._config.realtime = b;
            else if (s._sharedConfig.liveQueryRealtime) {
                var O = s._config.serverURLs,
                A = O.api,
                S = O.rtm;
                s._config.realtime = new s._sharedConfig.liveQueryRealtime({
                    appId: e,
                    appKey: n,
                    server: {
                        api: A,
                        RTMRouter: S
                    }
                })
            }
            y = !0
        },
        s.setProduction = function(t) {
            c(t) ? s._config.production = null: s._config.production = t ? 1 : 0
        },
        s._setServerURLs = function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            "string" != typeof t ? f(s._config.serverURLs, t) : s._config.serverURLs = _(t),
            e && (s._appRouter ? s._appRouter.disable() : v = !0)
        },
        s.setServerURL = function(t) {
            return s._setServerURLs(t)
        },
        s.setServerURLs = s.setServerURL,
        s.keepErrorRawMessage = function(t) {
            s._sharedConfig.keepErrorRawMessage = t
        },
        s.setRequestTimeout = function(t) {
            s._config.requestTimeout = t
        },
        s.initialize = s.init,
        ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function(t) {
            return (0, o.
        default)(s, t, {
                get: function() {
                    return s._config[t]
                },
                set: function(e) {
                    s._config[t] = e
                }
            })
        })
    },
    function(t, e, n) {
        n(117);
        var r = n(1).Object;
        t.exports = function(t, e, n) {
            return r.defineProperty(t, e, n)
        }
    },
    function(t, e, n) {
        var r = n(10);
        r(r.S + r.F * !n(11), "Object", {
            defineProperty: n(7).f
        })
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            var e = this;
            this.AV = t,
            this.lockedUntil = 0,
            o.getAsync("serverURLs").then(function(t) {
                if (!e.disabled) {
                    if (!t) return e.lock(0);
                    var n = t.serverURLs,
                    r = t.lockedUntil;
                    e.AV._setServerURLs(n, !1),
                    e.lockedUntil = r
                }
            }).
            catch(function() {
                return e.lock(0)
            })
        }
        var i = n(48),
        o = n(73);
        r.prototype.disable = function() {
            this.disabled = !0
        },
        r.prototype.lock = function(t) {
            this.lockedUntil = Date.now() + t
        },
        r.prototype.refresh = function() {
            var t = this;
            if (! (this.disabled || Date.now() < this.lockedUntil)) {
                this.lock(10);
                return i({
                    method: "get",
                    url: "https://app-router.com/2/route",
                    query: {
                        appId: this.AV.applicationId
                    }
                }).then(function(e) {
                    if (!t.disabled) {
                        var n = e.ttl;
                        if (!n) throw new Error("missing ttl");
                        n *= 1e3;
                        var r = {
                            push: "https://" + e.push_server,
                            stats: "https://" + e.stats_server,
                            engine: "https://" + e.engine_server,
                            api: "https://" + e.api_server
                        };
                        return t.AV._setServerURLs(r, !1),
                        t.lock(n),
                        o.setAsync("serverURLs", {
                            serverURLs: r,
                            lockedUntil: t.lockedUntil
                        },
                        n)
                    }
                }).
                catch(function(e) {
                    console.warn("refresh server URLs failed: " + e.message),
                    t.lock(600)
                })
            }
        },
        t.exports = r
    },
    function(t, e, n) {
        n(21),
        n(33),
        t.exports = n(49).f("iterator")
    },
    function(t, e, n) {
        n(121),
        n(52),
        n(126),
        n(127),
        t.exports = n(1).Symbol
    },
    function(t, e, n) {
        "use strict";
        var r = n(3),
        i = n(14),
        o = n(11),
        s = n(10),
        a = n(55),
        u = n(122).KEY,
        c = n(24),
        l = n(42),
        f = n(32),
        h = n(31),
        d = n(4),
        p = n(49),
        _ = n(50),
        v = n(123),
        y = n(124),
        m = n(8),
        g = n(13),
        b = n(27),
        w = n(15),
        O = n(39),
        A = n(25),
        S = n(56),
        E = n(125),
        C = n(77),
        x = n(75),
        T = n(7),
        j = n(30),
        N = C.f,
        U = T.f,
        I = E.f,
        k = r.Symbol,
        P = r.JSON,
        R = P && P.stringify,
        D = d("_hidden"),
        M = d("toPrimitive"),
        L = {}.propertyIsEnumerable,
        F = l("symbol-registry"),
        q = l("symbols"),
        W = l("op-symbols"),
        B = Object.prototype,
        Q = "function" == typeof k && !!x.f,
        V = r.QObject,
        K = !V || !V.prototype || !V.prototype.findChild,
        J = o && c(function() {
            return 7 != S(U({},
            "a", {
                get: function() {
                    return U(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ?
        function(t, e, n) {
            var r = N(B, e);
            r && delete B[e],
            U(t, e, n),
            r && t !== B && U(B, e, r)
        }: U,
        G = function(t) {
            var e = q[t] = S(k.prototype);
            return e._k = t,
            e
        },
        z = Q && "symbol" == typeof k.iterator ?
        function(t) {
            return "symbol" == typeof t
        }: function(t) {
            return t instanceof k
        },
        H = function(t, e, n) {
            return t === B && H(W, e, n),
            m(t),
            e = O(e, !0),
            m(n),
            i(q, e) ? (n.enumerable ? (i(t, D) && t[D][e] && (t[D][e] = !1), n = S(n, {
                enumerable: A(0, !1)
            })) : (i(t, D) || U(t, D, A(1, {})), t[D][e] = !0), J(t, e, n)) : U(t, e, n)
        },
        $ = function(t, e) {
            m(t);
            for (var n, r = v(e = w(e)), i = 0, o = r.length; o > i;) H(t, n = r[i++], e[n]);
            return t
        },
        X = function(t, e) {
            return void 0 === e ? S(t) : $(S(t), e)
        },
        Y = function(t) {
            var e = L.call(this, t = O(t, !0));
            return ! (this === B && i(q, t) && !i(W, t)) && (!(e || !i(this, t) || !i(q, t) || i(this, D) && this[D][t]) || e)
        },
        Z = function(t, e) {
            if (t = w(t), e = O(e, !0), t !== B || !i(q, e) || i(W, e)) {
                var n = N(t, e);
                return ! n || !i(q, e) || i(t, D) && t[D][e] || (n.enumerable = !0),
                n
            }
        },
        tt = function(t) {
            for (var e, n = I(w(t)), r = [], o = 0; n.length > o;) i(q, e = n[o++]) || e == D || e == u || r.push(e);
            return r
        },
        et = function(t) {
            for (var e, n = t === B,
            r = I(n ? W: w(t)), o = [], s = 0; r.length > s;) ! i(q, e = r[s++]) || n && !i(B, e) || o.push(q[e]);
            return o
        };
        Q || (k = function() {
            if (this instanceof k) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === B && e.call(W, n),
                i(this, D) && i(this[D], t) && (this[D][t] = !1),
                J(this, t, A(1, n))
            };
            return o && K && J(B, t, {
                configurable: !0,
                set: e
            }),
            G(t)
        },
        a(k.prototype, "toString",
        function() {
            return this._k
        }), C.f = Z, T.f = H, n(76).f = E.f = tt, n(51).f = Y, x.f = et, o && !n(22) && a(B, "propertyIsEnumerable", Y, !0), p.f = function(t) {
            return G(d(t))
        }),
        s(s.G + s.W + s.F * !Q, {
            Symbol: k
        });
        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) d(nt[rt++]);
        for (var it = j(d.store), ot = 0; it.length > ot;) _(it[ot++]);
        s(s.S + s.F * !Q, "Symbol", {
            for: function(t) {
                return i(F, t += "") ? F[t] : F[t] = k(t)
            },
            keyFor: function(t) {
                if (!z(t)) throw TypeError(t + " is not a symbol!");
                for (var e in F) if (F[e] === t) return e
            },
            useSetter: function() {
                K = !0
            },
            useSimple: function() {
                K = !1
            }
        }),
        s(s.S + s.F * !Q, "Object", {
            create: X,
            defineProperty: H,
            defineProperties: $,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: tt,
            getOwnPropertySymbols: et
        });
        var st = c(function() {
            x.f(1)
        });
        s(s.S + s.F * st, "Object", {
            getOwnPropertySymbols: function(t) {
                return x.f(b(t))
            }
        }),
        P && s(s.S + s.F * (!Q || c(function() {
            var t = k();
            return "[null]" != R([t]) || "{}" != R({
                a: t
            }) || "{}" != R(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                if (n = e = r[1], (g(e) || void 0 !== t) && !z(t)) return y(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e
                }),
                r[1] = e,
                R.apply(P, r)
            }
        }),
        k.prototype[M] || n(12)(k.prototype, M, k.prototype.valueOf),
        f(k, "Symbol"),
        f(Math, "Math", !0),
        f(r.JSON, "JSON", !0)
    },
    function(t, e, n) {
        var r = n(31)("meta"),
        i = n(13),
        o = n(14),
        s = n(7).f,
        a = 0,
        u = Object.isExtensible ||
        function() {
            return ! 0
        },
        c = !n(24)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(t) {
            s(t, r, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        f = function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
            if (!o(t, r)) {
                if (!u(t)) return "F";
                if (!e) return "E";
                l(t)
            }
            return t[r].i
        },
        h = function(t, e) {
            if (!o(t, r)) {
                if (!u(t)) return ! 0;
                if (!e) return ! 1;
                l(t)
            }
            return t[r].w
        },
        d = function(t) {
            return c && p.NEED && u(t) && !o(t, r) && l(t),
            t
        },
        p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: f,
            getWeak: h,
            onFreeze: d
        }
    },
    function(t, e, n) {
        var r = n(30),
        i = n(75),
        o = n(51);
        t.exports = function(t) {
            var e = r(t),
            n = i.f;
            if (n) for (var s, a = n(t), u = o.f, c = 0; a.length > c;) u.call(t, s = a[c++]) && e.push(s);
            return e
        }
    },
    function(t, e, n) {
        var r = n(26);
        t.exports = Array.isArray ||
        function(t) {
            return "Array" == r(t)
        }
    },
    function(t, e, n) {
        var r = n(15),
        i = n(76).f,
        o = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function(t) {
            try {
                return i(t)
            } catch(t) {
                return s.slice()
            }
        };
        t.exports.f = function(t) {
            return s && "[object Window]" == o.call(t) ? a(t) : i(r(t))
        }
    },
    function(t, e, n) {
        n(50)("asyncIterator")
    },
    function(t, e, n) {
        n(50)("observable")
    },
    function(t, e, n) {
        "use strict";
        var r;
        t.exports.timeout = function(t, e) {
            var n, i = new r;
            return Promise.race([t, new Promise(function(t, r) {
                n = setTimeout(function() {
                    r(i)
                },
                e)
            })]).then(function(t) {
                return clearTimeout(n),
                t
            },
            function(t) {
                throw clearTimeout(n),
                t
            })
        };
        r = t.exports.TimeoutError = function() {
            Error.call(this),
            this.stack = Error().stack,
            this.message = "Timeout"
        },
        r.prototype = Object.create(Error.prototype),
        r.prototype.name = "TimeoutError"
    },
    function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            var e = /\s+/,
            n = Array.prototype.slice;
            t.Events = {
                on: function(t, n, r) {
                    var i, o, s, a, u;
                    if (!n) return this;
                    for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), o = t.shift(); o;) u = i[o],
                    s = u ? u.tail: {},
                    s.next = a = {},
                    s.context = r,
                    s.callback = n,
                    i[o] = {
                        tail: a,
                        next: u ? u.next: s
                    },
                    o = t.shift();
                    return this
                },
                off: function(t, n, i) {
                    var o, s, a, u, c, l;
                    if (s = this._callbacks) {
                        if (! (t || n || i)) return delete this._callbacks,
                        this;
                        for (t = t ? t.split(e) : r.keys(s), o = t.shift(); o;) if (a = s[o], delete s[o], a && (n || i)) {
                            for (u = a.tail, a = a.next; a !== u;) c = a.callback,
                            l = a.context,
                            (n && c !== n || i && l !== i) && this.on(o, c, l),
                            a = a.next;
                            o = t.shift()
                        }
                        return this
                    }
                },
                trigger: function(t) {
                    var r, i, o, s, a, u, c;
                    if (! (o = this._callbacks)) return this;
                    for (u = o.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) {
                        if (i = o[r]) for (s = i.tail; (i = i.next) !== s;) i.callback.apply(i.context || this, c);
                        if (i = u) for (s = i.tail, a = [r].concat(c); (i = i.next) !== s;) i.callback.apply(i.context || this, a);
                        r = t.shift()
                    }
                    return this
                }
            },
            t.Events.bind = t.Events.on,
            t.Events.unbind = t.Events.off
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0);
        t.exports = function(t) {
            t.GeoPoint = function(e, n) {
                o.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : o.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : o.isNumber(e) && o.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                var r = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude",
                function() {
                    return r._latitude
                }), this.__defineGetter__("longitude",
                function() {
                    return r._longitude
                }), this.__defineSetter__("latitude",
                function(e) {
                    t.GeoPoint._validate(e, r.longitude),
                    r._latitude = e
                }), this.__defineSetter__("longitude",
                function(e) {
                    t.GeoPoint._validate(r.latitude, e),
                    r._longitude = e
                }))
            },
            t.GeoPoint._validate = function(t, e) {
                if (t < -90) throw new Error("AV.GeoPoint latitude " + t + " < -90.0.");
                if (t > 90) throw new Error("AV.GeoPoint latitude " + t + " > 90.0.");
                if (e < -180) throw new Error("AV.GeoPoint longitude " + e + " < -180.0.");
                if (e > 180) throw new Error("AV.GeoPoint longitude " + e + " > 180.0.")
            },
            t.GeoPoint.current = function() {
                return new i.
            default(function(e, n) {
                    navigator.geolocation.getCurrentPosition(function(n) {
                        e(new t.GeoPoint({
                            latitude: n.coords.latitude,
                            longitude: n.coords.longitude
                        }))
                    },
                    n)
                })
            },
            o.extend(t.GeoPoint.prototype, {
                toJSON: function() {
                    return t.GeoPoint._validate(this.latitude, this.longitude),
                    {
                        __type: "GeoPoint",
                        latitude: this.latitude,
                        longitude: this.longitude
                    }
                },
                radiansTo: function(t) {
                    var e = Math.PI / 180,
                    n = this.latitude * e,
                    r = this.longitude * e,
                    i = t.latitude * e,
                    o = t.longitude * e,
                    s = n - i,
                    a = r - o,
                    u = Math.sin(s / 2),
                    c = Math.sin(a / 2),
                    l = u * u + Math.cos(n) * Math.cos(i) * c * c;
                    return l = Math.min(1, l),
                    2 * Math.asin(Math.sqrt(l))
                },
                kilometersTo: function(t) {
                    return 6371 * this.radiansTo(t)
                },
                milesTo: function(t) {
                    return 3958.8 * this.radiansTo(t)
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            t.ACL = function(e) {
                var n = this;
                if (n.permissionsById = {},
                r.isObject(e)) if (e instanceof t.User) n.setReadAccess(e, !0),
                n.setWriteAccess(e, !0);
                else {
                    if (r.isFunction(e)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                    t._objectEach(e,
                    function(e, i) {
                        if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                        n.permissionsById[i] = {},
                        t._objectEach(e,
                        function(t, e) {
                            if ("read" !== e && "write" !== e) throw new Error("Tried to create an ACL with an invalid permission type.");
                            if (!r.isBoolean(t)) throw new Error("Tried to create an ACL with an invalid permission value.");
                            n.permissionsById[i][e] = t
                        })
                    })
                }
            },
            t.ACL.prototype.toJSON = function() {
                return r.clone(this.permissionsById)
            },
            t.ACL.prototype._setAccess = function(e, n, i) {
                if (n instanceof t.User ? n = n.id: n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
                if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
                var o = this.permissionsById[n];
                if (!o) {
                    if (!i) return;
                    o = {},
                    this.permissionsById[n] = o
                }
                i ? this.permissionsById[n][e] = !0 : (delete o[e], r.isEmpty(o) && delete this.permissionsById[n])
            },
            t.ACL.prototype._getAccess = function(e, n) {
                n instanceof t.User ? n = n.id: n instanceof t.Role && (n = "role:" + n.getName());
                var r = this.permissionsById[n];
                return !! r && !!r[e]
            },
            t.ACL.prototype.setReadAccess = function(t, e) {
                this._setAccess("read", t, e)
            },
            t.ACL.prototype.getReadAccess = function(t) {
                return this._getAccess("read", t)
            },
            t.ACL.prototype.setWriteAccess = function(t, e) {
                this._setAccess("write", t, e)
            },
            t.ACL.prototype.getWriteAccess = function(t) {
                return this._getAccess("write", t)
            },
            t.ACL.prototype.setPublicReadAccess = function(t) {
                this.setReadAccess("*", t)
            },
            t.ACL.prototype.getPublicReadAccess = function() {
                return this.getReadAccess("*")
            },
            t.ACL.prototype.setPublicWriteAccess = function(t) {
                this.setWriteAccess("*", t)
            },
            t.ACL.prototype.getPublicWriteAccess = function() {
                return this.getWriteAccess("*")
            },
            t.ACL.prototype.getRoleReadAccess = function(e) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getReadAccess("role:" + e);
                throw new Error("role must be a AV.Role or a String")
            },
            t.ACL.prototype.getRoleWriteAccess = function(e) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getWriteAccess("role:" + e);
                throw new Error("role must be a AV.Role or a String")
            },
            t.ACL.prototype.setRoleReadAccess = function(e, n) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setReadAccess("role:" + e, n);
                throw new Error("role must be a AV.Role or a String")
            },
            t.ACL.prototype.setRoleWriteAccess = function(e, n) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setWriteAccess("role:" + e, n);
                throw new Error("role must be a AV.Role or a String")
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            t.Op = function() {
                this._initialize.apply(this, arguments)
            },
            r.extend(t.Op.prototype, {
                _initialize: function() {}
            }),
            r.extend(t.Op, {
                _extend: t._extend,
                _opDecoderMap: {},
                _registerDecoder: function(e, n) {
                    t.Op._opDecoderMap[e] = n
                },
                _decode: function(e) {
                    var n = t.Op._opDecoderMap[e.__op];
                    return n ? n(e) : void 0
                }
            }),
            t.Op._registerDecoder("Batch",
            function(e) {
                var n = null;
                return t._arrayEach(e.ops,
                function(e) {
                    e = t.Op._decode(e),
                    n = e._mergeWithPrevious(n)
                }),
                n
            }),
            t.Op.Set = t.Op._extend({
                _initialize: function(t) {
                    this._value = t
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return t._encode(this.value())
                },
                _mergeWithPrevious: function(t) {
                    return this
                },
                _estimate: function(t) {
                    return this.value()
                }
            }),
            t.Op._UNSET = {},
            t.Op.Unset = t.Op._extend({
                toJSON: function() {
                    return {
                        __op: "Delete"
                    }
                },
                _mergeWithPrevious: function(t) {
                    return this
                },
                _estimate: function(e) {
                    return t.Op._UNSET
                }
            }),
            t.Op._registerDecoder("Delete",
            function(e) {
                return new t.Op.Unset
            }),
            t.Op.Increment = t.Op._extend({
                _initialize: function(t) {
                    this._amount = t
                },
                amount: function() {
                    return this._amount
                },
                toJSON: function() {
                    return {
                        __op: "Increment",
                        amount: this._amount
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount());
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount());
                        if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    return t ? t + this.amount() : this.amount()
                }
            }),
            t.Op._registerDecoder("Increment",
            function(e) {
                return new t.Op.Increment(e.amount)
            }),
            t.Op.BitAnd = t.Op._extend({
                _initialize: function(t) {
                    this._value = t
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return {
                        __op: "BitAnd",
                        value: this.value()
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(0);
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() & this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    return t & this.value()
                }
            }),
            t.Op._registerDecoder("BitAnd",
            function(e) {
                return new t.Op.BitAnd(e.value)
            }),
            t.Op.BitOr = t.Op._extend({
                _initialize: function(t) {
                    this._value = t
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return {
                        __op: "BitOr",
                        value: this.value()
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() | this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    return t | this.value()
                }
            }),
            t.Op._registerDecoder("BitOr",
            function(e) {
                return new t.Op.BitOr(e.value)
            }),
            t.Op.BitXor = t.Op._extend({
                _initialize: function(t) {
                    this._value = t
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return {
                        __op: "BitXor",
                        value: this.value()
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() ^ this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    return t ^ this.value()
                }
            }),
            t.Op._registerDecoder("BitXor",
            function(e) {
                return new t.Op.BitXor(e.value)
            }),
            t.Op.Add = t.Op._extend({
                _initialize: function(t) {
                    this._objects = t
                },
                objects: function() {
                    return this._objects
                },
                toJSON: function() {
                    return {
                        __op: "Add",
                        objects: t._encode(this.objects())
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
                        if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                        if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    return t ? t.concat(this.objects()) : r.clone(this.objects())
                }
            }),
            t.Op._registerDecoder("Add",
            function(e) {
                return new t.Op.Add(t._decode(e.objects))
            }),
            t.Op.AddUnique = t.Op._extend({
                _initialize: function(t) {
                    this._objects = r.uniq(t)
                },
                objects: function() {
                    return this._objects
                },
                toJSON: function() {
                    return {
                        __op: "AddUnique",
                        objects: t._encode(this.objects())
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
                        if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                        if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    if (e) {
                        var n = r.clone(e);
                        return t._arrayEach(this.objects(),
                        function(e) {
                            if (e instanceof t.Object && e.id) {
                                var i = r.find(n,
                                function(n) {
                                    return n instanceof t.Object && n.id === e.id
                                });
                                if (i) {
                                    var o = r.indexOf(n, i);
                                    n[o] = e
                                } else n.push(e)
                            } else r.contains(n, e) || n.push(e)
                        }),
                        n
                    }
                    return r.clone(this.objects())
                }
            }),
            t.Op._registerDecoder("AddUnique",
            function(e) {
                return new t.Op.AddUnique(t._decode(e.objects))
            }),
            t.Op.Remove = t.Op._extend({
                _initialize: function(t) {
                    this._objects = r.uniq(t)
                },
                objects: function() {
                    return this._objects
                },
                toJSON: function() {
                    return {
                        __op: "Remove",
                        objects: t._encode(this.objects())
                    }
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return e;
                        if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                        if (e instanceof t.Op.Remove) return new t.Op.Remove(r.union(e.objects(), this.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    if (e) {
                        var n = r.difference(e, this.objects());
                        return t._arrayEach(this.objects(),
                        function(e) {
                            e instanceof t.Object && e.id && (n = r.reject(n,
                            function(n) {
                                return n instanceof t.Object && n.id === e.id
                            }))
                        }),
                        n
                    }
                    return []
                }
            }),
            t.Op._registerDecoder("Remove",
            function(e) {
                return new t.Op.Remove(t._decode(e.objects))
            }),
            t.Op.Relation = t.Op._extend({
                _initialize: function(e, n) {
                    this._targetClassName = null;
                    var i = this,
                    o = function(e) {
                        if (e instanceof t.Object) {
                            if (!e.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                            if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".");
                            return e.id
                        }
                        return e
                    };
                    this.relationsToAdd = r.uniq(r.map(e, o)),
                    this.relationsToRemove = r.uniq(r.map(n, o))
                },
                added: function() {
                    var e = this;
                    return r.map(this.relationsToAdd,
                    function(n) {
                        var r = t.Object._create(e._targetClassName);
                        return r.id = n,
                        r
                    })
                },
                removed: function() {
                    var e = this;
                    return r.map(this.relationsToRemove,
                    function(n) {
                        var r = t.Object._create(e._targetClassName);
                        return r.id = n,
                        r
                    })
                },
                toJSON: function() {
                    var t = null,
                    e = null,
                    n = this,
                    i = function(t) {
                        return {
                            __type: "Pointer",
                            className: n._targetClassName,
                            objectId: t
                        }
                    },
                    o = null;
                    return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), t = {
                        __op: "AddRelation",
                        objects: o
                    }),
                    this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), e = {
                        __op: "RemoveRelation",
                        objects: o
                    }),
                    t && e ? {
                        __op: "Batch",
                        ops: [t, e]
                    }: t || e || {}
                },
                _mergeWithPrevious: function(e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
                        if (e instanceof t.Op.Relation) {
                            if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.");
                            var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                            i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                            o = new t.Op.Relation(n, i);
                            return o._targetClassName = this._targetClassName,
                            o
                        }
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e, n, r) {
                    if (e) {
                        if (e instanceof t.Relation) {
                            if (this._targetClassName) if (e.targetClassName) {
                                if (e.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                            } else e.targetClassName = this._targetClassName;
                            return e
                        }
                        throw new Error("Op is invalid after previous op.")
                    }
                    new t.Relation(n, r).targetClassName = this._targetClassName
                }
            }),
            t.Op._registerDecoder("AddRelation",
            function(e) {
                return new t.Op.Relation(t._decode(e.objects), [])
            }),
            t.Op._registerDecoder("RemoveRelation",
            function(e) {
                return new t.Op.Relation([], t._decode(e.objects))
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t) {
            t.Relation = function(t, e) {
                if (!r.isString(e)) throw new TypeError("key must be a string");
                this.parent = t,
                this.key = e,
                this.targetClassName = null
            },
            t.Relation.reverseQuery = function(e, n, r) {
                var i = new t.Query(e);
                return i.equalTo(n, r._toPointer()),
                i
            },
            r.extend(t.Relation.prototype, {
                _ensureParentAndKey: function(t, e) {
                    if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                    if (this.key !== e) throw new Error("Internal Error. Relation retrieved from two different keys.")
                },
                add: function(e) {
                    r.isArray(e) || (e = [e]);
                    var n = new t.Op.Relation(e, []);
                    this.parent.set(this.key, n),
                    this.targetClassName = n._targetClassName
                },
                remove: function(e) {
                    r.isArray(e) || (e = [e]);
                    var n = new t.Op.Relation([], e);
                    this.parent.set(this.key, n),
                    this.targetClassName = n._targetClassName
                },
                toJSON: function() {
                    return {
                        __type: "Relation",
                        className: this.targetClassName
                    }
                },
                query: function() {
                    var e, n;
                    return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._defaultParams.redirectClassNameForKey = this.key),
                    n._addCondition("$relatedTo", "object", this.parent._toPointer()),
                    n._addCondition("$relatedTo", "key", this.key),
                    n
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(135),
        a = n(136),
        u = n(137),
        c = n(16),
        l = n(5)._request,
        f = n(6),
        h = f.tap,
        d = f.transformFetchOptions,
        p = n(19)("leancloud:file"),
        _ = n(141);
        t.exports = function(t) {
            var e = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            },
            n = function(t) {
                return o.isString(t) ? t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : ""
            },
            r = function(t) {
                if (t < 26) return String.fromCharCode(65 + t);
                if (t < 52) return String.fromCharCode(t - 26 + 97);
                if (t < 62) return String.fromCharCode(t - 52 + 48);
                if (62 === t) return "+";
                if (63 === t) return "/";
                throw new Error("Tried to encode large digit " + t + " in base64.")
            },
            f = function(t) {
                var e = [];
                return e.length = Math.ceil(t.length / 3),
                o.times(e.length,
                function(n) {
                    var i = t[3 * n],
                    o = t[3 * n + 1] || 0,
                    s = t[3 * n + 2] || 0,
                    a = 3 * n + 1 < t.length,
                    u = 3 * n + 2 < t.length;
                    e[n] = [r(i >> 2 & 63), r(i << 4 & 48 | o >> 4 & 15), a ? r(o << 2 & 60 | s >> 6 & 3) : "=", u ? r(63 & s) : "="].join("")
                }),
                e.join("")
            };
            t.File = function(e, r, i) {
                if (this.attributes = {
                    name: e,
                    url: "",
                    metaData: {},
                    base64: ""
                },
                o.isString(r)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
                o.isArray(r) && (this.attributes.metaData.size = r.length, r = {
                    base64: f(r)
                }),
                this._extName = "",
                this._data = r,
                this._uploadHeaders = {},
                r && r.blob && "string" == typeof r.blob.uri && (this._extName = n(r.blob.uri)),
                "undefined" != typeof Blob && r instanceof Blob && (r.size && (this.attributes.metaData.size = r.size), r.name && (this._extName = n(r.name)));
                var s = void 0;
                if (r && r.owner) s = r.owner;
                else if (!t._config.disableCurrentUser) try {
                    s = t.User.current()
                } catch(t) {
                    if ("SYNC_API_NOT_AVAILABLE" !== t.code) throw t
                }
                this.attributes.metaData.owner = s ? s.id: "unknown",
                this.set("mime_type", i)
            },
            t.File.withURL = function(e, n, r, i) {
                if (!e || !n) throw new Error("Please provide file name and url");
                var o = new t.File(e, null, i);
                if (r) for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
                return o.attributes.url = n,
                o.attributes.metaData.__source = "external",
                o
            },
            t.File.createWithoutData = function(e) {
                var n = new t.File;
                return n.id = e,
                n
            },
            o.extend(t.File.prototype, {
                className: "_File",
                _toFullJSON: function(e) {
                    var n = this,
                    r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = o.clone(this.attributes);
                    return t._objectEach(i,
                    function(n, o) {
                        i[o] = t._encode(n, e, void 0, r)
                    }),
                    t._objectEach(this._operations,
                    function(t, e) {
                        i[e] = t
                    }),
                    o.has(this, "id") && (i.objectId = this.id),
                    o(["createdAt", "updatedAt"]).each(function(t) {
                        if (o.has(n, t)) {
                            var e = n[t];
                            i[t] = o.isDate(e) ? e.toJSON() : e
                        }
                    }),
                    r && (i.__type = "File"),
                    i
                },
                toFullJSON: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(t)
                },
                toJSON: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
                    return this._toFullJSON(n, !1)
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    }
                },
                getACL: function() {
                    return this._acl
                },
                setACL: function(e) {
                    return e instanceof t.ACL ? (this._acl = e, this) : new c(c.OTHER_CAUSE, "ACL must be a AV.ACL.")
                },
                name: function() {
                    return this.get("name")
                },
                url: function() {
                    return this.get("url")
                },
                get: function(t) {
                    switch (t) {
                    case "objectId":
                        return this.id;
                    case "url":
                    case "name":
                    case "mime_type":
                    case "metaData":
                    case "createdAt":
                    case "updatedAt":
                        return this.attributes[t];
                    default:
                        return this.attributes.metaData[t]
                    }
                },
                set: function() {
                    for (var t = this,
                    e = function(e, n) {
                        switch (e) {
                        case "name":
                        case "url":
                        case "mime_type":
                        case "base64":
                        case "metaData":
                            t.attributes[e] = n;
                            break;
                        default:
                            t.attributes.metaData[e] = n
                        }
                    },
                    n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    switch (r.length) {
                    case 1:
                        for (var o in r[0]) e(o, r[0][o]);
                        break;
                    case 2:
                        e(r[0], r[1])
                    }
                    return this
                },
                setUploadHeader: function(t, e) {
                    return this._uploadHeaders[t] = e,
                    this
                },
                metaData: function(t, e) {
                    return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData
                },
                thumbnailURL: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "png",
                    o = this.attributes.url;
                    if (!o) throw new Error("Invalid url.");
                    if (!t || !e || t <= 0 || e <= 0) throw new Error("Invalid width or height value.");
                    if (n <= 0 || n > 100) throw new Error("Invalid quality value.");
                    return o + "?imageView/" + (r ? 2 : 1) + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i
                },
                size: function() {
                    return this.metaData().size
                },
                ownerId: function() {
                    return this.metaData().owner
                },
                destroy: function(t) {
                    return this.id ? l("files", null, this.id, "DELETE", null, t) : i.
                default.reject(new Error("The file id does not eixst."))
                },
                _fileToken: function(t, r) {
                    var i = this.attributes.name,
                    o = n(i); ! o && this._extName && (i += this._extName, o = this._extName);
                    var s = e() + e() + e() + e() + e() + o,
                    a = {
                        key: s,
                        name: i,
                        keep_file_name: r.keepFileName,
                        ACL: this._acl,
                        mime_type: t,
                        metaData: this.attributes.metaData
                    };
                    return this._qiniu_key = s,
                    l("fileTokens", null, null, "POST", a, r)
                },
                save: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.id) throw new Error("File is already saved.");
                    if (!this._previousSave) if (this._data) {
                        var n = this.get("mime_type");
                        this._previousSave = this._fileToken(n, e).then(function(r) {
                            return r.mime_type && (n = r.mime_type, t.set("mime_type", n)),
                            t._token = r.token,
                            i.
                        default.resolve().then(function() {
                                var e = t._data;
                                if (e && e.base64) return _(e.base64, n);
                                if (e && e.blob) return ! e.blob.type && n && (e.blob.type = n),
                                e.blob.name || (e.blob.name = t.get("name")),
                                e.blob;
                                if ("undefined" != typeof Blob && e instanceof Blob) return e;
                                throw new TypeError("malformed file data")
                            }).then(function(n) {
                                var i = o.extend({},
                                e);
                                switch (e.onprogress && (i.onprogress = function(t) {
                                    if ("download" !== t.direction) return e.onprogress(t)
                                }), r.provider) {
                                case "s3":
                                    return u(r, n, t, i);
                                case "qcloud":
                                    return s(r, n, t, i);
                                case "qiniu":
                                default:
                                    return a(r, n, t, i)
                                }
                            }).then(h(function() {
                                return t._callback(!0)
                            }),
                            function(e) {
                                throw t._callback(!1),
                                e
                            })
                        })
                    } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                        var r = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url
                        };
                        this._previousSave = l("files", this.attributes.name, null, "post", r, e).then(function(e) {
                            return t.attributes.name = e.name,
                            t.attributes.url = e.url,
                            t.id = e.objectId,
                            e.size && (t.attributes.metaData.size = e.size),
                            t
                        })
                    }
                    return this._previousSave
                },
                _callback: function(t) {
                    l("fileCallback", null, null, "post", {
                        token: this._token,
                        result: t
                    }).
                    catch(p),
                    delete this._token,
                    delete this._data
                },
                fetch: function(t, e) {
                    return l("files", null, this.id, "GET", d(t), e).then(this._finishFetch.bind(this))
                },
                _finishFetch: function(e) {
                    var n = t.Object.prototype.parse(e);
                    return n.attributes = {
                        name: n.name,
                        url: n.url,
                        mime_type: n.mime_type,
                        bucket: n.bucket
                    },
                    n.attributes.metaData = n.metaData || {},
                    n.id = n.objectId,
                    delete n.objectId,
                    delete n.metaData,
                    delete n.url,
                    delete n.name,
                    delete n.mime_type,
                    delete n.bucket,
                    o.extend(this, n),
                    this
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(20),
        i = r.getAdapter,
        o = n(19)("cos");
        t.exports = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = t.url,
            n._bucket = t.bucket,
            n.id = t.objectId;
            var s = t.upload_url + "?sign=" + encodeURIComponent(t.token),
            a = {
                field: "fileContent",
                data: e,
                name: n.attributes.name
            },
            u = {
                headers: n._uploadHeaders,
                data: {
                    op: "upload"
                },
                onprogress: r.onprogress
            };
            return o("url: %s, file: %o, options: %o", s, a, u),
            i("upload")(s, a, u).then(function(t) {
                if (o(t.status, t.data), !1 === t.ok) {
                    var e = new Error(t.status);
                    throw e.response = t,
                    e
                }
                return n
            },
            function(t) {
                var e = t.response;
                throw e && (o(e.status, e.data), t.statusCode = e.status, t.response = e.data),
                t
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(9),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(20),
        s = o.getAdapter,
        a = n(19)("leancloud:qiniu");
        t.exports = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = t.url,
            n._bucket = t.bucket,
            n.id = t.objectId;
            var o = t.token,
            u = t.upload_url || "https://upload.qiniup.com",
            c = {
                field: "file",
                data: e,
                name: n.attributes.name
            },
            l = {
                headers: n._uploadHeaders,
                data: {
                    name: n.attributes.name,
                    key: t.key || n._qiniu_key,
                    token: o
                },
                onprogress: r.onprogress
            };
            return a("url: %s, file: %o, options: %o", u, c, l),
            s("upload")(u, c, l).then(function(t) {
                if (a(t.status, t.data), !1 === t.ok) {
                    var e = t.status;
                    t.data && (e = t.data.error ? t.data.error: (0, i.
                default)(t.data));
                    var r = new Error(e);
                    throw r.response = t,
                    r
                }
                return n
            },
            function(t) {
                var e = t.response;
                throw e && (a(e.status, e.data), t.statusCode = e.status, t.response = e.data),
                t
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0),
        i = n(48);
        t.exports = function(t, e, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return n.attributes.url = t.url,
            n._bucket = t.bucket,
            n.id = t.objectId,
            i({
                url: t.upload_url,
                method: "PUT",
                data: e,
                headers: r.extend({
                    "Content-Type": n.get("mime_type"),
                    "Cache-Control": "public, max-age=31536000"
                },
                n._uploadHeaders),
                onprogress: o.onprogress
            }).then(function() {
                return n
            })
        }
    },
    function(t, e, n) { !
        function() {
            var e = n(139),
            r = n(78).utf8,
            i = n(140),
            o = n(78).bin,
            s = function(t, n) {
                t.constructor == String ? t = n && "binary" === n.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                a[u >>> 5] |= 128 << u % 32,
                a[14 + (u + 64 >>> 9 << 4)] = u;
                for (var p = s._ff,
                _ = s._gg,
                v = s._hh,
                y = s._ii,
                d = 0; d < a.length; d += 16) {
                    var m = c,
                    g = l,
                    b = f,
                    w = h;
                    c = p(c, l, f, h, a[d + 0], 7, -680876936),
                    h = p(h, c, l, f, a[d + 1], 12, -389564586),
                    f = p(f, h, c, l, a[d + 2], 17, 606105819),
                    l = p(l, f, h, c, a[d + 3], 22, -1044525330),
                    c = p(c, l, f, h, a[d + 4], 7, -176418897),
                    h = p(h, c, l, f, a[d + 5], 12, 1200080426),
                    f = p(f, h, c, l, a[d + 6], 17, -1473231341),
                    l = p(l, f, h, c, a[d + 7], 22, -45705983),
                    c = p(c, l, f, h, a[d + 8], 7, 1770035416),
                    h = p(h, c, l, f, a[d + 9], 12, -1958414417),
                    f = p(f, h, c, l, a[d + 10], 17, -42063),
                    l = p(l, f, h, c, a[d + 11], 22, -1990404162),
                    c = p(c, l, f, h, a[d + 12], 7, 1804603682),
                    h = p(h, c, l, f, a[d + 13], 12, -40341101),
                    f = p(f, h, c, l, a[d + 14], 17, -1502002290),
                    l = p(l, f, h, c, a[d + 15], 22, 1236535329),
                    c = _(c, l, f, h, a[d + 1], 5, -165796510),
                    h = _(h, c, l, f, a[d + 6], 9, -1069501632),
                    f = _(f, h, c, l, a[d + 11], 14, 643717713),
                    l = _(l, f, h, c, a[d + 0], 20, -373897302),
                    c = _(c, l, f, h, a[d + 5], 5, -701558691),
                    h = _(h, c, l, f, a[d + 10], 9, 38016083),
                    f = _(f, h, c, l, a[d + 15], 14, -660478335),
                    l = _(l, f, h, c, a[d + 4], 20, -405537848),
                    c = _(c, l, f, h, a[d + 9], 5, 568446438),
                    h = _(h, c, l, f, a[d + 14], 9, -1019803690),
                    f = _(f, h, c, l, a[d + 3], 14, -187363961),
                    l = _(l, f, h, c, a[d + 8], 20, 1163531501),
                    c = _(c, l, f, h, a[d + 13], 5, -1444681467),
                    h = _(h, c, l, f, a[d + 2], 9, -51403784),
                    f = _(f, h, c, l, a[d + 7], 14, 1735328473),
                    l = _(l, f, h, c, a[d + 12], 20, -1926607734),
                    c = v(c, l, f, h, a[d + 5], 4, -378558),
                    h = v(h, c, l, f, a[d + 8], 11, -2022574463),
                    f = v(f, h, c, l, a[d + 11], 16, 1839030562),
                    l = v(l, f, h, c, a[d + 14], 23, -35309556),
                    c = v(c, l, f, h, a[d + 1], 4, -1530992060),
                    h = v(h, c, l, f, a[d + 4], 11, 1272893353),
                    f = v(f, h, c, l, a[d + 7], 16, -155497632),
                    l = v(l, f, h, c, a[d + 10], 23, -1094730640),
                    c = v(c, l, f, h, a[d + 13], 4, 681279174),
                    h = v(h, c, l, f, a[d + 0], 11, -358537222),
                    f = v(f, h, c, l, a[d + 3], 16, -722521979),
                    l = v(l, f, h, c, a[d + 6], 23, 76029189),
                    c = v(c, l, f, h, a[d + 9], 4, -640364487),
                    h = v(h, c, l, f, a[d + 12], 11, -421815835),
                    f = v(f, h, c, l, a[d + 15], 16, 530742520),
                    l = v(l, f, h, c, a[d + 2], 23, -995338651),
                    c = y(c, l, f, h, a[d + 0], 6, -198630844),
                    h = y(h, c, l, f, a[d + 7], 10, 1126891415),
                    f = y(f, h, c, l, a[d + 14], 15, -1416354905),
                    l = y(l, f, h, c, a[d + 5], 21, -57434055),
                    c = y(c, l, f, h, a[d + 12], 6, 1700485571),
                    h = y(h, c, l, f, a[d + 3], 10, -1894986606),
                    f = y(f, h, c, l, a[d + 10], 15, -1051523),
                    l = y(l, f, h, c, a[d + 1], 21, -2054922799),
                    c = y(c, l, f, h, a[d + 8], 6, 1873313359),
                    h = y(h, c, l, f, a[d + 15], 10, -30611744),
                    f = y(f, h, c, l, a[d + 6], 15, -1560198380),
                    l = y(l, f, h, c, a[d + 13], 21, 1309151649),
                    c = y(c, l, f, h, a[d + 4], 6, -145523070),
                    h = y(h, c, l, f, a[d + 11], 10, -1120210379),
                    f = y(f, h, c, l, a[d + 2], 15, 718787259),
                    l = y(l, f, h, c, a[d + 9], 21, -343485551),
                    c = c + m >>> 0,
                    l = l + g >>> 0,
                    f = f + b >>> 0,
                    h = h + w >>> 0
                }
                return e.endian([c, l, f, h])
            };
            s._ff = function(t, e, n, r, i, o, s) {
                var a = t + (e & n | ~e & r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            },
            s._gg = function(t, e, n, r, i, o, s) {
                var a = t + (e & r | n & ~r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            },
            s._hh = function(t, e, n, r, i, o, s) {
                var a = t + (e ^ n ^ r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            },
            s._ii = function(t, e, n, r, i, o, s) {
                var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            },
            s._blocksize = 16,
            s._digestsize = 16,
            t.exports = function(t, n) {
                if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
                var r = e.wordsToBytes(s(t, n));
                return n && n.asBytes ? r: n && n.asString ? o.bytesToString(r) : e.bytesToHex(r)
            }
        } ()
    },
    function(t, e) { !
        function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function(t) {
                    if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                    return t
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function(t) {
                    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
                    return e
                },
                wordsToBytes: function(t) {
                    for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)),
                    e.push((15 & t[n]).toString(16));
                    return e.join("")
                },
                hexToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
                    return e
                },
                bytesToBase64: function(t) {
                    for (var n = [], r = 0; r < t.length; r += 3) for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                    return n
                }
            };
            t.exports = n
        } ()
    },
    function(t, e) {
        function n(t) {
            return !! t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        function r(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        }
        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        t.exports = function(t) {
            return null != t && (n(t) || r(t) || !!t._isBuffer)
        }
    },
    function(t, e, n) {
        "use strict";
        var r = function(t, e) {
            var n;
            t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]);
            for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
            return new Blob([r], {
                type: e
            })
        };
        t.exports = r
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function i(t, e) {
            return t && t[e] ? d.isFunction(t[e]) ? t[e]() : t[e] : null
        }
        var o = n(143),
        s = r(o),
        a = n(9),
        u = r(a),
        c = n(146),
        l = r(c),
        f = n(2),
        h = r(f),
        d = n(0),
        p = n(16),
        _ = n(5),
        v = _._request,
        y = n(6),
        m = y.isNullOrUndefined,
        g = y.ensureArray,
        b = y.transformFetchOptions,
        w = y.setValue,
        O = y.findValue,
        A = y.isPlainObject,
        S = y.continueWhile,
        E = function t(e) {
            return d.isArray(e) ? e.map(t) : A(e) ? d.mapObject(e, t) : d.isObject(e) && e._toPointer ? e._toPointer() : e
        },
        C = ["objectId", "createdAt", "updatedAt"],
        x = function(t) {
            if ( - 1 !== C.indexOf(t)) throw new Error("key[" + t + "] is reserved")
        },
        T = function(t) {
            var e = d.find(t,
            function(t) {
                return t instanceof Error
            });
            if (!e) return t;
            var n = new p(e.code, e.message);
            throw n.results = t,
            n
        };
        t.exports = function(t) {
            t.Object = function(e, n) {
                if (d.isString(e)) return t.Object._create.apply(this, arguments);
                e = e || {},
                n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e));
                var r = i(this, "defaults");
                r && (e = d.extend({},
                r, e)),
                n && n.collection && (this.collection = n.collection),
                this._serverData = {},
                this._opSetQueue = [{}],
                this._flags = {},
                this.attributes = {},
                this._hashedJSON = {},
                this._escapedAttributes = {},
                this.cid = d.uniqueId("c"),
                this.changed = {},
                this._silent = {},
                this._pending = {},
                this.set(e, {
                    silent: !0
                }),
                this.changed = {},
                this._silent = {},
                this._pending = {},
                this._hasData = !0,
                this._previousAttributes = d.clone(this.attributes),
                this.initialize.apply(this, arguments)
            },
            t.Object.saveAll = function(e, n) {
                return t.Object._deepSaveAsync(e, null, n)
            },
            t.Object.fetchAll = function(t, e) {
                return h.
            default.resolve().then(function() {
                    return v("batch", null, null, "POST", {
                        requests: d.map(t,
                        function(t) {
                            if (!t.className) throw new Error("object must have className to fetch");
                            if (!t.id) throw new Error("object must have id to fetch");
                            if (t.dirty()) throw new Error("object is modified but not saved");
                            return {
                                method: "GET",
                                path: "/1.1/classes/" + t.className + "/" + t.id
                            }
                        })
                    },
                    e)
                }).then(function(e) {
                    var n = d.map(t,
                    function(t, n) {
                        if (e[n].success) {
                            var r = t.parse(e[n].success);
                            return t._cleanupUnsetKeys(r),
                            t._finishFetch(r),
                            t
                        }
                        return null === e[n].success ? new p(p.OBJECT_NOT_FOUND, "Object not found.") : new p(e[n].error.code, e[n].error.error)
                    });
                    return T(n)
                })
            },
            d.extend(t.Object.prototype, t.Events, {
                _fetchWhenSave: !1,
                initialize: function() {},
                fetchWhenSave: function(t) {
                    if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !d.isBoolean(t)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = t
                },
                getObjectId: function() {
                    return this.id
                },
                getCreatedAt: function() {
                    return this.createdAt
                },
                getUpdatedAt: function() {
                    return this.updatedAt
                },
                toJSON: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this._toFullJSON(n, !1)
                },
                toFullJSON: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(t)
                },
                _toFullJSON: function(e) {
                    var n = this,
                    r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = d.clone(this.attributes);
                    if (d.isArray(e)) var o = e.concat(this);
                    return t._objectEach(i,
                    function(e, n) {
                        i[n] = t._encode(e, o, void 0, r)
                    }),
                    t._objectEach(this._operations,
                    function(t, e) {
                        i[e] = t
                    }),
                    d.has(this, "id") && (i.objectId = this.id),
                    d(["createdAt", "updatedAt"]).each(function(t) {
                        if (d.has(n, t)) {
                            var e = n[t];
                            i[t] = d.isDate(e) ? e.toJSON() : e
                        }
                    }),
                    r && (i.__type = "Object", d.isArray(e) && e.length && (i.__type = "Pointer"), i.className = this.className),
                    i
                },
                _refreshCache: function() {
                    var e = this;
                    e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes,
                    function(n, r) {
                        n instanceof t.Object ? n._refreshCache() : d.isObject(n) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(n), {
                            silent: !0
                        })
                    }), delete e._refreshingCache)
                },
                dirty: function(t) {
                    this._refreshCache();
                    var e = d.last(this._opSetQueue);
                    return t ? !!e[t] : !this.id || d.keys(e).length > 0
                },
                dirtyKeys: function() {
                    this._refreshCache();
                    var t = d.last(this._opSetQueue);
                    return d.keys(t)
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    }
                },
                get: function(t) {
                    switch (t) {
                    case "objectId":
                        return this.id;
                    case "createdAt":
                    case "updatedAt":
                        return this[t];
                    default:
                        return this.attributes[t]
                    }
                },
                relation: function(e) {
                    var n = this.get(e);
                    if (n) {
                        if (! (n instanceof t.Relation)) throw new Error("Called relation() on non-relation field " + e);
                        return n._ensureParentAndKey(this, e),
                        n
                    }
                    return new t.Relation(this, e)
                },
                escape: function(t) {
                    var e = this._escapedAttributes[t];
                    if (e) return e;
                    var n, r = this.attributes[t];
                    return n = m(r) ? "": d.escape(r.toString()),
                    this._escapedAttributes[t] = n,
                    n
                },
                has: function(t) {
                    return ! m(this.attributes[t])
                },
                _mergeMagicFields: function(e) {
                    var n = this,
                    r = ["objectId", "createdAt", "updatedAt"];
                    return t._arrayEach(r,
                    function(r) {
                        e[r] && ("objectId" === r ? n.id = e[r] : "createdAt" !== r && "updatedAt" !== r || d.isDate(e[r]) ? n[r] = e[r] : n[r] = t._parseDate(e[r]), delete e[r])
                    }),
                    e
                },
                _startSave: function() {
                    this._opSetQueue.push({})
                },
                _cancelSave: function() {
                    var e = d.first(this._opSetQueue);
                    this._opSetQueue = d.rest(this._opSetQueue);
                    var n = d.first(this._opSetQueue);
                    t._objectEach(e,
                    function(t, r) {
                        var i = e[r],
                        o = n[r];
                        i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
                    }),
                    this._saving = this._saving - 1
                },
                _finishSave: function(e) {
                    var n = {};
                    t._traverse(this.attributes,
                    function(e) {
                        e instanceof t.Object && e.id && e._hasData && (n[e.id] = e)
                    });
                    var r = d.first(this._opSetQueue);
                    this._opSetQueue = d.rest(this._opSetQueue),
                    this._applyOpSet(r, this._serverData),
                    this._mergeMagicFields(e);
                    var i = this;
                    t._objectEach(e,
                    function(e, r) {
                        i._serverData[r] = t._decode(e, r);
                        var o = t._traverse(i._serverData[r],
                        function(e) {
                            if (e instanceof t.Object && n[e.id]) return n[e.id]
                        });
                        o && (i._serverData[r] = o)
                    }),
                    this._rebuildAllEstimatedData();
                    var o = this._opSetQueue.map(d.clone);
                    this._refreshCache(),
                    this._opSetQueue = o,
                    this._saving = this._saving - 1
                },
                _finishFetch: function(e, n) {
                    this._opSetQueue = [{}],
                    this._mergeMagicFields(e);
                    var r = this;
                    t._objectEach(e,
                    function(e, n) {
                        r._serverData[n] = t._decode(e, n)
                    }),
                    this._rebuildAllEstimatedData(),
                    this._refreshCache(),
                    this._opSetQueue = [{}],
                    this._hasData = n
                },
                _applyOpSet: function(e, n) {
                    var r = this;
                    t._objectEach(e,
                    function(e, i) {
                        var o = O(n, i),
                        s = (0, l.
                    default)(o, 3),
                        a = s[0],
                        u = s[1],
                        c = s[2];
                        w(n, i, e._estimate(a, r, i)),
                        u && u[c] === t.Op._UNSET && delete u[c]
                    })
                },
                _resetCacheForKey: function(e) {
                    var n = this.attributes[e];
                    if (d.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) {
                        var r = (0, u.
                    default)(E(n));
                        if (this._hashedJSON[e] !== r) {
                            var i = !!this._hashedJSON[e];
                            return this._hashedJSON[e] = r,
                            i
                        }
                    }
                    return ! 1
                },
                _rebuildEstimatedDataForKey: function(e) {
                    var n = this;
                    delete this.attributes[e],
                    this._serverData[e] && (this.attributes[e] = this._serverData[e]),
                    t._arrayEach(this._opSetQueue,
                    function(r) {
                        var i = r[e];
                        if (i) {
                            var o = O(n.attributes, e),
                            s = (0, l.
                        default)(o, 4),
                            a = s[0],
                            u = s[1],
                            c = s[2],
                            f = s[3];
                            w(n.attributes, e, i._estimate(a, n, e)),
                            u && u[c] === t.Op._UNSET && delete u[c],
                            n._resetCacheForKey(f)
                        }
                    })
                },
                _rebuildAllEstimatedData: function() {
                    var e = this,
                    n = d.clone(this.attributes);
                    this.attributes = d.clone(this._serverData),
                    t._arrayEach(this._opSetQueue,
                    function(n) {
                        e._applyOpSet(n, e.attributes),
                        t._objectEach(n,
                        function(t, n) {
                            e._resetCacheForKey(n)
                        })
                    }),
                    t._objectEach(n,
                    function(t, n) {
                        e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {})
                    }),
                    t._objectEach(this.attributes,
                    function(t, r) {
                        d.has(n, r) || e.trigger("change:" + r, e, t, {})
                    })
                },
                set: function(e, n, r) {
                    var i;
                    if (d.isObject(e) || m(e) ? (i = d.mapObject(e,
                    function(e, n) {
                        return x(n),
                        t._decode(e, n)
                    }), r = n) : (i = {},
                    x(e), i[e] = t._decode(n, e)), r = r || {},
                    !i) return this;
                    i instanceof t.Object && (i = i.attributes),
                    r.unset && t._objectEach(i,
                    function(e, n) {
                        i[n] = new t.Op.Unset
                    });
                    var o = d.clone(i),
                    s = this;
                    t._objectEach(o,
                    function(e, n) {
                        e instanceof t.Op && (o[n] = e._estimate(s.attributes[n], s, n), o[n] === t.Op._UNSET && delete o[n])
                    }),
                    this._validate(i, r),
                    r.changes = {};
                    var a = this._escapedAttributes;
                    return t._arrayEach(d.keys(i),
                    function(e) {
                        var n = i[e];
                        n instanceof t.Relation && (n.parent = s),
                        n instanceof t.Op || (n = new t.Op.Set(n));
                        var o = !0;
                        n instanceof t.Op.Set && d.isEqual(s.attributes[e], n.value) && (o = !1),
                        o && (delete a[e], r.silent ? s._silent[e] = !0 : r.changes[e] = !0);
                        var u = d.last(s._opSetQueue);
                        u[e] = n._mergeWithPrevious(u[e]),
                        s._rebuildEstimatedDataForKey(e),
                        o ? (s.changed[e] = s.attributes[e], r.silent || (s._pending[e] = !0)) : (delete s.changed[e], delete s._pending[e])
                    }),
                    r.silent || this.change(r),
                    this
                },
                unset: function(t, e) {
                    return e = e || {},
                    e.unset = !0,
                    this.set(t, null, e)
                },
                increment: function(e, n) {
                    return (d.isUndefined(n) || d.isNull(n)) && (n = 1),
                    this.set(e, new t.Op.Increment(n))
                },
                add: function(e, n) {
                    return this.set(e, new t.Op.Add(g(n)))
                },
                addUnique: function(e, n) {
                    return this.set(e, new t.Op.AddUnique(g(n)))
                },
                remove: function(e, n) {
                    return this.set(e, new t.Op.Remove(g(n)))
                },
                bitAnd: function(e, n) {
                    return this.set(e, new t.Op.BitAnd(n))
                },
                bitOr: function(e, n) {
                    return this.set(e, new t.Op.BitOr(n))
                },
                bitXor: function(e, n) {
                    return this.set(e, new t.Op.BitXor(n))
                },
                op: function(t) {
                    return d.last(this._opSetQueue)[t]
                },
                clear: function(t) {
                    t = t || {},
                    t.unset = !0;
                    var e = d.extend(this.attributes, this._operations);
                    return this.set(e, t)
                },
                revert: function(t) {
                    var e = d.last(this._opSetQueue);
                    return g(t || d.keys(e)).forEach(function(t) {
                        delete e[t]
                    }),
                    this._rebuildAllEstimatedData(),
                    this
                },
                _getSaveJSON: function() {
                    var e = d.clone(d.first(this._opSetQueue));
                    return t._objectEach(e,
                    function(t, n) {
                        e[n] = t.toJSON()
                    }),
                    e
                },
                _canBeSerialized: function() {
                    return t.Object._canBeSerializedAsValue(this.attributes)
                },
                fetch: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1],
                    n = this;
                    return v("classes", this.className, this.id, "GET", b(t), e).then(function(e) {
                        var r = n.parse(e);
                        return n._cleanupUnsetKeys(r, t.keys ? g(t.keys).join(",").split(",") : void 0),
                        n._finishFetch(r, !0),
                        n
                    })
                },
                _cleanupUnsetKeys: function(t) {
                    var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.keys(this._serverData);
                    d.forEach(n,
                    function(n) {
                        void 0 === t[n] && delete e._serverData[n]
                    })
                },
                save: function(e, n, r) {
                    var i, o, s;
                    d.isObject(e) || m(e) ? (i = e, s = n) : (i = {},
                    i[e] = n, s = r),
                    s = d.clone(s) || {},
                    s.wait && (o = d.clone(this.attributes));
                    var a = d.clone(s) || {};
                    a.wait && (a.silent = !0),
                    i && this.set(i, a);
                    var u = this,
                    c = [],
                    l = [];
                    return t.Object._findUnsavedChildren(u, c, l),
                    c.length + l.length > 1 ? t.Object._deepSaveAsync(this, u, s) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || h.
                default.resolve(), this._allPreviousSaves = this._allPreviousSaves.
                    catch(function(t) {}).then(function() {
                        var t = u.id ? "PUT": "POST",
                        e = u._getSaveJSON(),
                        n = {};
                        if ((u._fetchWhenSave || s.fetchWhenSave) && (n.new = "true"), s._failOnNotExist && (n.failOnNotExist = "true"), s.query) {
                            var r;
                            if ("function" == typeof s.query._getParams && (r = s.query._getParams()) && (n.where = r.where), !n.where) {
                                throw new Error("options.query is not an AV.Query")
                            }
                        }
                        d.extend(e, u._flags);
                        var c = "classes",
                        l = u.className;
                        "_User" !== u.className || u.id || (c = "users", l = null);
                        var f = s._makeRequest || v,
                        h = f(c, l, u.id, t, e, s, n);
                        return h = h.then(function(t) {
                            var e = u.parse(t);
                            return s.wait && (e = d.extend(i || {},
                            e)),
                            u._finishSave(e),
                            s.wait && u.set(o, a),
                            u
                        },
                        function(t) {
                            throw u._cancelSave(),
                            t
                        })
                    }), this._allPreviousSaves)
                },
                destroy: function(t) {
                    t = t || {};
                    var e = this,
                    n = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                    return this.id ? (t.wait || n(), v("classes", this.className, this.id, "DELETE", this._flags, t).then(function() {
                        return t.wait && n(),
                        e
                    })) : n()
                },
                parse: function(e) {
                    var n = d.clone(e);
                    return d(["createdAt", "updatedAt"]).each(function(e) {
                        n[e] && (n[e] = t._parseDate(n[e]))
                    }),
                    n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt),
                    n
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return ! this.id
                },
                change: function(e) {
                    e = e || {};
                    var n = this._changing;
                    this._changing = !0;
                    var r = this;
                    t._objectEach(this._silent,
                    function(t) {
                        r._pending[t] = !0
                    });
                    var i = d.extend({},
                    e.changes, this._silent);
                    if (this._silent = {},
                    t._objectEach(i,
                    function(t, n) {
                        r.trigger("change:" + n, r, r.get(n), e)
                    }), n) return this;
                    for (var o = function(t, e) {
                        r._pending[e] || r._silent[e] || delete r.changed[e]
                    }; ! d.isEmpty(this._pending);) this._pending = {},
                    this.trigger("change", this, e),
                    t._objectEach(this.changed, o),
                    r._previousAttributes = d.clone(this.attributes);
                    return this._changing = !1,
                    this
                },
                previous: function(t) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null
                },
                previousAttributes: function() {
                    return d.clone(this._previousAttributes)
                },
                isValid: function() {
                    try {
                        this.validate(this.attributes)
                    } catch(t) {
                        return ! 1
                    }
                    return ! 0
                },
                validate: function(e) {
                    if (d.has(e, "ACL") && !(e.ACL instanceof t.ACL)) throw new p(p.OTHER_CAUSE, "ACL must be a AV.ACL.")
                },
                _validate: function(t, e) { ! e.silent && this.validate && (t = d.extend({},
                    this.attributes, t), this.validate(t))
                },
                getACL: function() {
                    return this.get("ACL")
                },
                setACL: function(t, e) {
                    return this.set("ACL", t, e)
                },
                disableBeforeHook: function() {
                    this.ignoreHook("beforeSave"),
                    this.ignoreHook("beforeUpdate"),
                    this.ignoreHook("beforeDelete")
                },
                disableAfterHook: function() {
                    this.ignoreHook("afterSave"),
                    this.ignoreHook("afterUpdate"),
                    this.ignoreHook("afterDelete")
                },
                ignoreHook: function(e) {
                    if (!d.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e)) throw new Error("Unsupported hookName: " + e);
                    if (!t.hookKey) throw new Error("ignoreHook required hookKey");
                    this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []),
                    this._flags.__ignore_hooks.push(e)
                }
            }),
            t.Object.createWithoutData = function(e, n, r) {
                var i = void 0;
                if (d.isString(e)) i = t.Object._getSubclass(e);
                else {
                    if (! (e.prototype && e.prototype instanceof t.Object)) throw new Error("class must be a string or a subclass of AV.Object.");
                    i = e
                }
                var o = new i;
                return o.id = n,
                o._hasData = r,
                o
            },
            t.Object.destroyAll = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t || 0 === t.length) return h.
            default.resolve();
                var n = d.groupBy(t,
                function(t) {
                    return (0, u.
                default)({
                        className:
                        t.className,
                        flags: t._flags
                    })
                }),
                r = {
                    requests: d.map(n,
                    function(t) {
                        var e = d.map(t, "id").join(",");
                        return {
                            method: "DELETE",
                            path: "/1.1/classes/" + t[0].className + "/" + e,
                            body: t[0]._flags
                        }
                    })
                };
                return v("batch", null, null, "POST", r, e).then(function(t) {
                    var e = d.find(t,
                    function(t) {
                        return ! t.success
                    });
                    if (e) throw new p(e.error.code, e.error.error)
                })
            },
            t.Object._getSubclass = function(e) {
                if (!d.isString(e)) throw new Error("AV.Object._getSubclass requires a string argument.");
                var n = t.Object._classMap[e];
                return n || (n = t.Object.extend(e), t.Object._classMap[e] = n),
                n
            },
            t.Object._create = function(e, n, r) {
                return new(t.Object._getSubclass(e))(n, r)
            },
            t.Object._classMap = {},
            t.Object._extend = t._extend,
            t.Object.new = function(e, n) {
                return new t.Object(e, n)
            },
            t.Object.extend = function(e, n, r) {
                if (!d.isString(e)) {
                    if (e && d.has(e, "className")) return t.Object.extend(e.className, e, n);
                    throw new Error("AV.Object.extend's first argument should be the className.")
                }
                "User" === e && (e = "_User");
                var i = null;
                if (d.has(t.Object._classMap, e)) {
                    var o = t.Object._classMap[e];
                    if (!n && !r) return o;
                    i = o._extend(n, r)
                } else n = n || {},
                n._className = e,
                i = this._extend(n, r);
                return i.extend = function(n) {
                    if (d.isString(n) || n && d.has(n, "className")) return t.Object.extend.apply(i, arguments);
                    var r = [e].concat(d.toArray(arguments));
                    return t.Object.extend.apply(i, r)
                },
                Object.defineProperty(i, "query", (0, s.
            default)(t.Object, "query")),
                i.new = function(t, e) {
                    return new i(t, e)
                },
                t.Object._classMap[e] = i,
                i
            },
            Object.defineProperty(t.Object.prototype, "className", {
                get: function() {
                    var t = this._className || this.constructor._LCClassName || this.constructor.name;
                    return "User" === t ? "_User": t
                }
            }),
            t.Object.register = function(e, n) {
                if (! (e.prototype instanceof t.Object)) throw new Error("registered class is not a subclass of AV.Object");
                var r = n || e.name;
                if (!r.length) throw new Error("registered class must be named");
                n && (e._LCClassName = n),
                t.Object._classMap[r] = e
            },
            Object.defineProperty(t.Object, "query", {
                get: function() {
                    return new t.Query(this.prototype.className)
                }
            }),
            t.Object._findUnsavedChildren = function(e, n, r) {
                t._traverse(e,
                function(e) {
                    return e instanceof t.Object ? void(e.dirty() && n.push(e)) : e instanceof t.File ? void(e.id || r.push(e)) : void 0
                })
            },
            t.Object._canBeSerializedAsValue = function(e) {
                var n = !0;
                return e instanceof t.Object || e instanceof t.File ? n = !!e.id: d.isArray(e) ? t._arrayEach(e,
                function(e) {
                    t.Object._canBeSerializedAsValue(e) || (n = !1)
                }) : d.isObject(e) && t._objectEach(e,
                function(e) {
                    t.Object._canBeSerializedAsValue(e) || (n = !1)
                }),
                n
            },
            t.Object._deepSaveAsync = function(e, n, r) {
                var i = [],
                o = [];
                t.Object._findUnsavedChildren(e, i, o);
                var s = h.
            default.resolve();
                d.each(o,
                function(t) {
                    s = s.then(function() {
                        return t.save()
                    })
                });
                var a = d.uniq(i),
                u = d.uniq(a);
                return s.then(function() {
                    return S(function() {
                        return u.length > 0
                    },
                    function() {
                        var e = [],
                        n = [];
                        if (t._arrayEach(u,
                        function(t) {
                            if (e.length > 20) return void n.push(t);
                            t._canBeSerialized() ? e.push(t) : n.push(t)
                        }), u = n, 0 === e.length) return h.
                    default.reject(new p(p.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                        var i = h.
                    default.resolve(d.map(e,
                        function(t) {
                            return t._allPreviousSaves || h.
                        default.resolve()
                        })),
                        o = i.then(function() {
                            return v("batch", null, null, "POST", {
                                requests: d.map(e,
                                function(t) {
                                    var e = t.id ? "PUT": "POST",
                                    n = t._getSaveJSON();
                                    d.extend(n, t._flags);
                                    var r = t.className,
                                    i = "/classes/" + r;
                                    "_User" !== t.className || t.id || (i = "/users");
                                    var i = "/1.1" + i;
                                    return t.id && (i = i + "/" + t.id),
                                    t._startSave(),
                                    {
                                        method: e,
                                        path: i,
                                        body: n
                                    }
                                })
                            },
                            r).then(function(t) {
                                var n = d.map(e,
                                function(e, n) {
                                    return t[n].success ? (e._finishSave(e.parse(t[n].success)), e) : (e._cancelSave(), new p(t[n].error.code, t[n].error.error))
                                });
                                return T(n)
                            })
                        });
                        return t._arrayEach(e,
                        function(t) {
                            t._allPreviousSaves = o
                        }),
                        o
                    })
                }).then(function() {
                    return e
                })
            }
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(144),
            __esModule: !0
        }
    },
    function(t, e, n) {
        n(145);
        var r = n(1).Object;
        t.exports = function(t, e) {
            return r.getOwnPropertyDescriptor(t, e)
        }
    },
    function(t, e, n) {
        var r = n(15),
        i = n(77).f;
        n(47)("getOwnPropertyDescriptor",
        function() {
            return function(t, e) {
                return i(r(t), e)
            }
        })
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        e.__esModule = !0;
        var i = n(79),
        o = r(i),
        s = n(149),
        a = r(s);
        e.
    default = function() {
            function t(t, e) {
                var n = [],
                r = !0,
                i = !1,
                o = void 0;
                try {
                    for (var s, u = (0, a.
                default)(t); ! (r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                } catch(t) {
                    i = !0,
                    o = t
                } finally {
                    try { ! r && u.
                        return && u.
                        return ()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
            return function(e, n) {
                if (Array.isArray(e)) return e;
                if ((0, o.
            default)(Object(e))) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        } ()
    },
    function(t, e, n) {
        n(33),
        n(21),
        t.exports = n(148)
    },
    function(t, e, n) {
        var r = n(44),
        i = n(4)("iterator"),
        o = n(17);
        t.exports = n(1).isIterable = function(t) {
            var e = Object(t);
            return void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e))
        }
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(150),
            __esModule: !0
        }
    },
    function(t, e, n) {
        n(33),
        n(21),
        t.exports = n(151)
    },
    function(t, e, n) {
        var r = n(8),
        i = n(45);
        t.exports = n(1).getIterator = function(t) {
            var e = i(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return r(e.call(t))
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0),
        i = n(16);
        t.exports = function(t) {
            t.Role = t.Object.extend("_Role", {
                constructor: function(e, n) {
                    if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), n) {
                        if (! (n instanceof t.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n)
                    }
                },
                getName: function() {
                    return this.get("name")
                },
                setName: function(t, e) {
                    return this.set("name", t, e)
                },
                getUsers: function() {
                    return this.relation("users")
                },
                getRoles: function() {
                    return this.relation("roles")
                },
                validate: function(e, n) {
                    if ("name" in e && e.name !== this.getName()) {
                        var o = e.name;
                        if (this.id && this.id !== e.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                        if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
                    }
                    return !! t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n)
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var i = n(9),
        o = r(i),
        s = n(154),
        a = r(s),
        u = n(2),
        c = r(u),
        l = n(0),
        f = n(69),
        h = n(16),
        d = n(5),
        p = d._request,
        _ = d.request,
        v = n(20),
        y = v.getAdapter,
        m = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin";
            return function(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? t: i,
                s = r.asMainAccount,
                a = void 0 !== s && s;
                if ("string" != typeof n) throw new h(h.OTHER_CAUSE, "unionId is not a string");
                if ("string" != typeof o) throw new h(h.OTHER_CAUSE, "unionIdPlatform is not a string");
                return l.extend({},
                e, {
                    platform: o,
                    unionid: n,
                    main_account: Boolean(a)
                })
            }
        };
        t.exports = function(t) {
            t.User = t.Object.extend("_User", {
                _isCurrentUser: !1,
                _mergeMagicFields: function(e) {
                    return e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken),
                    t.User.__super__._mergeMagicFields.call(this, e)
                },
                _cleanupAuthData: function() {
                    if (this.isCurrent()) {
                        var e = this.get("authData");
                        e && t._objectEach(this.get("authData"),
                        function(t, n) {
                            e[n] || delete e[n]
                        })
                    }
                },
                _synchronizeAllAuthData: function() {
                    if (this.get("authData")) {
                        var e = this;
                        t._objectEach(this.get("authData"),
                        function(t, n) {
                            e._synchronizeAuthData(n)
                        })
                    }
                },
                _synchronizeAuthData: function(e) {
                    if (this.isCurrent()) {
                        var n;
                        l.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType();
                        var r = this.get("authData");
                        if (r && e) {
                            e.restoreAuthentication(r[n]) || this.dissociateAuthData(e)
                        }
                    }
                },
                _handleSaveResult: function(e) {
                    return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0),
                    this._cleanupAuthData(),
                    this._synchronizeAllAuthData(),
                    delete this._serverData.password,
                    this._rebuildEstimatedDataForKey("password"),
                    this._refreshCache(),
                    !e && !this.isCurrent() || t._config.disableCurrentUser ? c.
                default.resolve():
                    c.
                default.resolve(t.User._saveCurrentUser(this))
                },
                _linkWith: function(e, n) {
                    var r, i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = o.failOnNotExist,
                    u = void 0 !== s && s;
                    return l.isString(e) ? (r = e, e = t.User._authProviders[e]) : r = e.getAuthType(),
                    n ? this.save({
                        authData: (0, a.
                    default)({},
                        r, n)
                    },
                    {
                        fetchWhenSave: !!this.get("authData"),
                        _failOnNotExist: u
                    }).then(function(t) {
                        return t._handleSaveResult(!0).then(function() {
                            return t
                        })
                    }) : e.authenticate().then(function(t) {
                        return i._linkWith(e, t)
                    })
                },
                associateWithAuthData: function(t, e) {
                    return this._linkWith(e, t)
                },
                associateWithAuthDataAndUnionId: function(t, e, n, r) {
                    return this._linkWith(e, m()(t, n, r))
                },
                associateWithMiniApp: function(t, e) {
                    var n = this;
                    if (void 0 === t) {
                        return y("getAuthInfo")().then(function(t) {
                            return n._linkWith(t.provider, t.authData, e)
                        })
                    }
                    return this._linkWith(t.provider, t.authData, e)
                },
                associateWithQQApp: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.preferUnionId,
                    r = void 0 !== n && n,
                    i = e.unionIdPlatform,
                    o = void 0 === i ? "qq": i,
                    s = e.asMainAccount,
                    a = void 0 === s || s;
                    return y("getAuthInfo")({
                        preferUnionId: r,
                        asMainAccount: a,
                        platform: o
                    }).then(function(e) {
                        return e.provider = "lc_qqapp",
                        t.associateWithMiniApp(e)
                    })
                },
                associateWithWeapp: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.preferUnionId,
                    r = void 0 !== n && n,
                    i = e.unionIdPlatform,
                    o = void 0 === i ? "weixin": i,
                    s = e.asMainAccount,
                    a = void 0 === s || s;
                    return y("getAuthInfo")({
                        preferUnionId: r,
                        asMainAccount: a,
                        platform: o
                    }).then(function(e) {
                        return t.associateWithMiniApp(e)
                    })
                },
                linkWithWeapp: function(t) {
                    return console.warn("DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替"),
                    this.associateWithWeapp(t)
                },
                associateWithQQAppWithUnionId: function(e) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.unionIdPlatform,
                    o = void 0 === i ? "qq": i,
                    s = r.asMainAccount,
                    a = void 0 !== s && s;
                    return y("getAuthInfo")({
                        platform: o
                    }).then(function(r) {
                        return r = t.User.mergeUnionId(r, e, {
                            asMainAccount: a
                        }),
                        r.provider = "lc_qqapp",
                        n.associateWithMiniApp(r)
                    })
                },
                associateWithWeappWithUnionId: function(e) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.unionIdPlatform,
                    o = void 0 === i ? "weixin": i,
                    s = r.asMainAccount,
                    a = void 0 !== s && s;
                    return y("getAuthInfo")({
                        platform: o
                    }).then(function(r) {
                        return r = t.User.mergeUnionId(r, e, {
                            asMainAccount: a
                        }),
                        n.associateWithMiniApp(r)
                    })
                },
                dissociateAuthData: function(t) {
                    return this.unset("authData." + t),
                    this.save().then(function(t) {
                        return t._handleSaveResult(!0).then(function() {
                            return t
                        })
                    })
                },
                _unlinkFrom: function(t) {
                    return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"),
                    this.dissociateAuthData(t)
                },
                _isLinked: function(t) {
                    var e;
                    return e = l.isString(t) ? t: t.getAuthType(),
                    !!(this.get("authData") || {})[e]
                },
                isAnonymous: function() {
                    return this._isLinked("anonymous")
                },
                logOut: function() {
                    this._logOutWithAll(),
                    this._isCurrentUser = !1
                },
                _logOutWithAll: function() {
                    if (this.get("authData")) {
                        var e = this;
                        t._objectEach(this.get("authData"),
                        function(t, n) {
                            e._logOutWith(n)
                        })
                    }
                },
                _logOutWith: function(e) {
                    this.isCurrent() && (l.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate())
                },
                signUp: function(t, e) {
                    var n = t && t.username || this.get("username");
                    if (!n || "" === n) throw new h(h.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    var r = t && t.password || this.get("password");
                    if (!r || "" === r) throw new h(h.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    return this.save(t, e).then(function(t) {
                        return t.isAnonymous() && (t.unset("authData.anonymous"), t._opSetQueue = [{}]),
                        t._handleSaveResult(!0).then(function() {
                            return t
                        })
                    })
                },
                signUpOrlogInWithMobilePhone: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber");
                    if (!n || "" === n) throw new h(h.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    var r = t && t.smsCode || this.get("smsCode");
                    if (!r || "" === r) throw new h(h.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    return e._makeRequest = function(t, e, n, r, i) {
                        return p("usersByMobilePhone", null, null, "POST", i)
                    },
                    this.save(t, e).then(function(t) {
                        return delete t.attributes.smsCode,
                        delete t._serverData.smsCode,
                        t._handleSaveResult(!0).then(function() {
                            return t
                        })
                    })
                },
                loginWithAuthData: function(t, e, n) {
                    return this._linkWith(e, t, n)
                },
                loginWithAuthDataAndUnionId: function(t, e, n, r) {
                    return this.loginWithAuthData(m()(t, n, r), e, r)
                },
                loginWithWeapp: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.preferUnionId,
                    r = void 0 !== n && n,
                    i = e.unionIdPlatform,
                    o = void 0 === i ? "weixin": i,
                    s = e.asMainAccount,
                    a = void 0 === s || s,
                    u = e.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        preferUnionId: r,
                        asMainAccount: a,
                        platform: o
                    }).then(function(e) {
                        return t.loginWithMiniApp(e, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithWeappWithUnionId: function(e) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.unionIdPlatform,
                    o = void 0 === i ? "weixin": i,
                    s = r.asMainAccount,
                    a = void 0 !== s && s,
                    u = r.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        platform: o
                    }).then(function(r) {
                        return r = t.User.mergeUnionId(r, e, {
                            asMainAccount: a
                        }),
                        n.loginWithMiniApp(r, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithQQApp: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.preferUnionId,
                    r = void 0 !== n && n,
                    i = e.unionIdPlatform,
                    o = void 0 === i ? "qq": i,
                    s = e.asMainAccount,
                    a = void 0 === s || s,
                    u = e.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        preferUnionId: r,
                        asMainAccount: a,
                        platform: o
                    }).then(function(e) {
                        return e.provider = "lc_qqapp",
                        t.loginWithMiniApp(e, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithQQAppWithUnionId: function(e) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.unionIdPlatform,
                    o = void 0 === i ? "qq": i,
                    s = r.asMainAccount,
                    a = void 0 !== s && s,
                    u = r.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        platform: o
                    }).then(function(r) {
                        return r = t.User.mergeUnionId(r, e, {
                            asMainAccount: a
                        }),
                        r.provider = "lc_qqapp",
                        n.loginWithMiniApp(r, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithMiniApp: function(t, e) {
                    var n = this;
                    if (void 0 === t) {
                        return y("getAuthInfo")().then(function(t) {
                            return n.loginWithAuthData(t.authData, t.provider, e)
                        })
                    }
                    return this.loginWithAuthData(t.authData, t.provider, e)
                },
                logIn: function() {
                    var t = this;
                    return p("login", null, null, "POST", this.toJSON()).then(function(e) {
                        var n = t.parse(e);
                        return t._finishFetch(n),
                        t._handleSaveResult(!0).then(function() {
                            return n.smsCode || delete t.attributes.smsCode,
                            t
                        })
                    })
                },
                save: function(e, n, r) {
                    var i, o;
                    return l.isObject(e) || l.isNull(e) || l.isUndefined(e) ? (i = e, o = n) : (i = {},
                    i[e] = n, o = r),
                    o = o || {},
                    t.Object.prototype.save.call(this, i, o).then(function(t) {
                        return t._handleSaveResult(!1).then(function() {
                            return t
                        })
                    })
                },
                follow: function(e, n) {
                    if (!this.id) throw new Error("Please signin.");
                    var r = void 0,
                    i = void 0;
                    e.user ? (r = e.user, i = e.attributes) : r = e;
                    var o = l.isString(r) ? r: r.id;
                    if (!o) throw new Error("Invalid target user.");
                    var s = "users/" + this.id + "/friendship/" + o;
                    return p(s, null, null, "POST", t._encode(i), n)
                },
                unfollow: function(t, e) {
                    if (!this.id) throw new Error("Please signin.");
                    var n = void 0;
                    n = t.user ? t.user: t;
                    var r = l.isString(n) ? n: n.id;
                    if (!r) throw new Error("Invalid target user.");
                    var i = "users/" + this.id + "/friendship/" + r;
                    return p(i, null, null, "DELETE", null, e)
                },
                followerQuery: function() {
                    return t.User.followerQuery(this.id)
                },
                followeeQuery: function() {
                    return t.User.followeeQuery(this.id)
                },
                fetch: function(e, n) {
                    return t.Object.prototype.fetch.call(this, e, n).then(function(t) {
                        return t._handleSaveResult(!1).then(function() {
                            return t
                        })
                    })
                },
                updatePassword: function(t, e, n) {
                    var r = this,
                    i = "users/" + this.id + "/updatePassword";
                    return p(i, null, null, "PUT", {
                        old_password: t,
                        new_password: e
                    },
                    n).then(function(t) {
                        return r._finishFetch(r.parse(t)),
                        r._handleSaveResult(!0).then(function() {
                            return t
                        })
                    })
                },
                isCurrent: function() {
                    return this._isCurrentUser
                },
                getUsername: function() {
                    return this.get("username")
                },
                getMobilePhoneNumber: function() {
                    return this.get("mobilePhoneNumber")
                },
                setMobilePhoneNumber: function(t, e) {
                    return this.set("mobilePhoneNumber", t, e)
                },
                setUsername: function(t, e) {
                    return this.set("username", t, e)
                },
                setPassword: function(t, e) {
                    return this.set("password", t, e)
                },
                getEmail: function() {
                    return this.get("email")
                },
                setEmail: function(t, e) {
                    return this.set("email", t, e)
                },
                authenticated: function() {
                    return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"),
                    !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id
                },
                isAuthenticated: function() {
                    var e = this;
                    return c.
                default.resolve().then(function() {
                        return !! e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function() {
                            return ! 0
                        },
                        function(t) {
                            if (211 === t.code) return ! 1;
                            throw t
                        })
                    })
                },
                getSessionToken: function() {
                    return this._sessionToken
                },
                refreshSessionToken: function(t) {
                    var e = this;
                    return p("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function(t) {
                        return e._finishFetch(t),
                        e._handleSaveResult(!0).then(function() {
                            return e
                        })
                    })
                },
                getRoles: function(e) {
                    return t.Relation.reverseQuery("_Role", "users", this).find(e)
                }
            },
            {
                _currentUser: null,
                _currentUserMatchesDisk: !1,
                _CURRENT_USER_KEY: "currentUser",
                _authProviders: {},
                signUp: function(e, n, r, i) {
                    return r = r || {},
                    r.username = e,
                    r.password = n,
                    t.Object._create("_User").signUp(r, i)
                },
                logIn: function(e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({
                        username: e,
                        password: n
                    }),
                    r.logIn()
                },
                become: function(t) {
                    return this._fetchUserBySessionToken(t).then(function(t) {
                        return t._handleSaveResult(!0).then(function() {
                            return t
                        })
                    })
                },
                _fetchUserBySessionToken: function(e) {
                    if (void 0 === e) return c.
                default.reject(new Error("The sessionToken cannot be undefined"));
                    var n = t.Object._create("_User");
                    return _({
                        method: "GET",
                        path: "/users/me",
                        authOptions: {
                            sessionToken: e
                        }
                    }).then(function(t) {
                        var e = n.parse(t);
                        return n._finishFetch(e),
                        n
                    })
                },
                logInWithMobilePhoneSmsCode: function(e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: e,
                        smsCode: n
                    }),
                    r.logIn()
                },
                signUpOrlogInWithMobilePhone: function(e, n, r, i) {
                    return r = r || {},
                    r.mobilePhoneNumber = e,
                    r.smsCode = n,
                    t.Object._create("_User").signUpOrlogInWithMobilePhone(r, i)
                },
                logInWithMobilePhone: function(e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: e,
                        password: n
                    }),
                    r.logIn()
                },
                loginWithEmail: function(e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({
                        email: e,
                        password: n
                    }),
                    r.logIn()
                },
                loginWithAuthData: function(e, n, r) {
                    return t.User._logInWith(n, e, r)
                },
                signUpOrlogInWithAuthData: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"),
                    this.loginWithAuthData.apply(this, arguments)
                },
                loginWithAuthDataAndUnionId: function(t, e, n, r) {
                    return this.loginWithAuthData(m()(t, n, r), e, r)
                },
                signUpOrlogInWithAuthDataAndUnionId: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"),
                    this.loginWithAuthDataAndUnionId.apply(this, arguments)
                },
                mergeUnionId: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.asMainAccount,
                    i = void 0 !== r && r;
                    t = JSON.parse((0, o.
                default)(t));
                    var s = t,
                    a = s.authData,
                    u = s.platform;
                    return a.platform = u,
                    a.main_account = i,
                    a.unionid = e,
                    t
                },
                loginWithWeapp: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.preferUnionId,
                    r = void 0 !== n && n,
                    i = e.unionIdPlatform,
                    o = void 0 === i ? "weixin": i,
                    s = e.asMainAccount,
                    a = void 0 === s || s,
                    u = e.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        preferUnionId: r,
                        asMainAccount: a,
                        platform: o
                    }).then(function(e) {
                        return t.loginWithMiniApp(e, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithWeappWithUnionId: function(e) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.unionIdPlatform,
                    o = void 0 === i ? "weixin": i,
                    s = r.asMainAccount,
                    a = void 0 !== s && s,
                    u = r.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        platform: o
                    }).then(function(r) {
                        return r = t.User.mergeUnionId(r, e, {
                            asMainAccount: a
                        }),
                        n.loginWithMiniApp(r, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithQQApp: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.preferUnionId,
                    r = void 0 !== n && n,
                    i = e.unionIdPlatform,
                    o = void 0 === i ? "qq": i,
                    s = e.asMainAccount,
                    a = void 0 === s || s,
                    u = e.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        preferUnionId: r,
                        asMainAccount: a,
                        platform: o
                    }).then(function(e) {
                        return e.provider = "lc_qqapp",
                        t.loginWithMiniApp(e, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithQQAppWithUnionId: function(e) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.unionIdPlatform,
                    o = void 0 === i ? "qq": i,
                    s = r.asMainAccount,
                    a = void 0 !== s && s,
                    u = r.failOnNotExist,
                    c = void 0 !== u && u;
                    return y("getAuthInfo")({
                        platform: o
                    }).then(function(r) {
                        return r = t.User.mergeUnionId(r, e, {
                            asMainAccount: a
                        }),
                        r.provider = "lc_qqapp",
                        n.loginWithMiniApp(r, {
                            failOnNotExist: c
                        })
                    })
                },
                loginWithMiniApp: function(t, e) {
                    var n = this;
                    if (void 0 === t) {
                        return y("getAuthInfo")().then(function(t) {
                            return n.loginWithAuthData(t.authData, t.provider, e)
                        })
                    }
                    return this.loginWithAuthData(t.authData, t.provider, e)
                },
                _genId: function() {
                    return f()
                },
                loginAnonymously: function() {
                    return this.loginWithAuthData({
                        id: t.User._genId()
                    },
                    "anonymous")
                },
                associateWithAuthData: function(t, e, n) {
                    return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"),
                    t._linkWith(e, n)
                },
                logOut: function() {
                    return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), c.
                default.resolve(null)):
                    (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function() {
                        return t._refreshSubscriptionId()
                    }))
                },
                followerQuery: function(e) {
                    if (!e || !l.isString(e)) throw new Error("Invalid user object id.");
                    var n = new t.FriendShipQuery("_Follower");
                    return n._friendshipTag = "follower",
                    n.equalTo("user", t.Object.createWithoutData("_User", e)),
                    n
                },
                followeeQuery: function(e) {
                    if (!e || !l.isString(e)) throw new Error("Invalid user object id.");
                    var n = new t.FriendShipQuery("_Followee");
                    return n._friendshipTag = "followee",
                    n.equalTo("user", t.Object.createWithoutData("_User", e)),
                    n
                },
                requestPasswordReset: function(t) {
                    return p("requestPasswordReset", null, null, "POST", {
                        email: t
                    })
                },
                requestEmailVerify: function(t) {
                    return p("requestEmailVerify", null, null, "POST", {
                        email: t
                    })
                },
                requestMobilePhoneVerify: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {
                        mobilePhoneNumber: t
                    };
                    return e.validateToken && (n.validate_token = e.validateToken),
                    p("requestMobilePhoneVerify", null, null, "POST", n, e)
                },
                requestPasswordResetBySmsCode: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {
                        mobilePhoneNumber: t
                    };
                    return e.validateToken && (n.validate_token = e.validateToken),
                    p("requestPasswordResetBySmsCode", null, null, "POST", n, e)
                },
                resetPasswordBySmsCode: function(t, e) {
                    return p("resetPasswordBySmsCode", null, t, "PUT", {
                        password: e
                    })
                },
                verifyMobilePhone: function(t) {
                    return p("verifyMobilePhone", null, t, "POST", null)
                },
                requestLoginSmsCode: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {
                        mobilePhoneNumber: t
                    };
                    return e.validateToken && (n.validate_token = e.validateToken),
                    p("requestLoginSmsCode", null, null, "POST", n, e)
                },
                currentAsync: function() {
                    return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), c.
                default.resolve(null)):
                    t.User._currentUser ? c.
                default.resolve(t.User._currentUser):
                    t.User._currentUserMatchesDisk ? c.
                default.resolve(t.User._currentUser):
                    t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function(e) {
                        if (!e) return null;
                        t.User._currentUserMatchesDisk = !0,
                        t.User._currentUser = t.Object._create("_User"),
                        t.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(e);
                        return t.User._currentUser.id = n._id,
                        delete n._id,
                        t.User._currentUser._sessionToken = n._sessionToken,
                        delete n._sessionToken,
                        t.User._currentUser._finishFetch(n),
                        t.User._currentUser._synchronizeAllAuthData(),
                        t.User._currentUser._refreshCache(),
                        t.User._currentUser._opSetQueue = [{}],
                        t.User._currentUser
                    })
                },
                current: function() {
                    if (t._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"),
                    null;
                    if (t.localStorage.async) {
                        var e = new Error("Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.");
                        throw e.code = "SYNC_API_NOT_AVAILABLE",
                        e
                    }
                    if (t.User._currentUser) return t.User._currentUser;
                    if (t.User._currentUserMatchesDisk) return t.User._currentUser;
                    t.User._currentUserMatchesDisk = !0;
                    var n = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));
                    if (!n) return null;
                    t.User._currentUser = t.Object._create("_User"),
                    t.User._currentUser._isCurrentUser = !0;
                    var r = JSON.parse(n);
                    return t.User._currentUser.id = r._id,
                    delete r._id,
                    t.User._currentUser._sessionToken = r._sessionToken,
                    delete r._sessionToken,
                    t.User._currentUser._finishFetch(r),
                    t.User._currentUser._synchronizeAllAuthData(),
                    t.User._currentUser._refreshCache(),
                    t.User._currentUser._opSetQueue = [{}],
                    t.User._currentUser
                },
                _saveCurrentUser: function(e) {
                    var n;
                    return n = t.User._currentUser !== e ? t.User.logOut() : c.
                default.resolve(),
                    n.then(function() {
                        e._isCurrentUser = !0,
                        t.User._currentUser = e;
                        var n = e._toFullJSON();
                        return n._id = e.id,
                        n._sessionToken = e._sessionToken,
                        t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), (0, o.
                    default)(n)).then(function() {
                            return t.User._currentUserMatchesDisk = !0,
                            t._refreshSubscriptionId()
                        })
                    })
                },
                _registerAuthenticationProvider: function(e) {
                    t.User._authProviders[e.getAuthType()] = e,
                    !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType())
                },
                _logInWith: function(e, n, r) {
                    return t.Object._create("_User")._linkWith(e, n, r)
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(74),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r);
        e.
    default = function(t, e, n) {
            return e in t ? (0, i.
        default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var i = n(9),
        o = r(i),
        s = n(2),
        a = r(s),
        u = n(0),
        c = n(19)("leancloud:query"),
        l = n(16),
        f = n(5),
        h = f._request,
        d = f.request,
        p = n(6),
        _ = p.ensureArray,
        v = p.transformFetchOptions,
        y = p.continueWhile,
        m = function(t, e) {
            if (void 0 === t) throw new Error(e)
        };
        t.exports = function(t) {
            t.Query = function(e) {
                u.isString(e) && (e = t.Object._getSubclass(e)),
                this.objectClass = e,
                this.className = e.prototype.className,
                this._where = {},
                this._include = [],
                this._select = [],
                this._limit = -1,
                this._skip = 0,
                this._defaultParams = {}
            },
            t.Query.or = function() {
                var e = u.toArray(arguments),
                n = null;
                t._arrayEach(e,
                function(t) {
                    if (u.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class")
                });
                var r = new t.Query(n);
                return r._orQuery(e),
                r
            },
            t.Query.and = function() {
                var e = u.toArray(arguments),
                n = null;
                t._arrayEach(e,
                function(t) {
                    if (u.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class")
                });
                var r = new t.Query(n);
                return r._andQuery(e),
                r
            },
            t.Query.doCloudQuery = function(e, n, r) {
                var i = {
                    cql: e
                };
                return u.isArray(n) ? i.pvalues = n: r = n,
                h("cloudQuery", null, null, "GET", i, r).then(function(e) {
                    var n = new t.Query(e.className);
                    return {
                        results: u.map(e.results,
                        function(t) {
                            var r = n._newObject(e);
                            return r._finishFetch && r._finishFetch(n._processResult(t), !0),
                            r
                        }),
                        count: e.count,
                        className: e.className
                    }
                })
            },
            t.Query.fromJSON = function(e) {
                var n = e.className,
                r = e.where,
                i = e.include,
                o = e.select,
                s = e.includeACL,
                a = e.limit,
                c = e.skip,
                l = e.order;
                if ("string" != typeof n) throw new TypeError("Invalid Query JSON, className must be a String.");
                var f = new t.Query(n);
                return u.extend(f, {
                    _where: r,
                    _include: i,
                    _select: o,
                    _includeACL: s,
                    _limit: a,
                    _skip: c,
                    _order: l
                }),
                f
            },
            t.Query._extend = t._extend,
            u.extend(t.Query.prototype, {
                _processResult: function(t) {
                    return t
                },
                get: function(t, e) {
                    if (!u.isString(t)) throw new Error("objectId must be a string");
                    if ("" === t) return a.
                default.reject(new l(l.OBJECT_NOT_FOUND, "Object not found."));
                    var n = this._newObject();
                    n.id = t;
                    var r = this._getParams(),
                    i = {};
                    return r.keys && (i.keys = r.keys),
                    r.include && (i.include = r.include),
                    r.includeACL && (i.includeACL = r.includeACL),
                    h("classes", this.className, t, "GET", v(i), e).then(function(t) {
                        if (u.isEmpty(t)) throw new l(l.OBJECT_NOT_FOUND, "Object not found.");
                        return n._finishFetch(n.parse(t), !0),
                        n
                    })
                },
                toJSON: function() {
                    return {
                        className: this.className,
                        where: this._where,
                        include: this._include,
                        select: this._select,
                        includeACL: this._includeACL,
                        limit: this._limit,
                        skip: this._skip,
                        order: this._order
                    }
                },
                _getParams: function() {
                    var t = u.extend({},
                    this._defaultParams, {
                        where: this._where
                    });
                    return this._include.length > 0 && (t.include = this._include.join(",")),
                    this._select.length > 0 && (t.keys = this._select.join(",")),
                    void 0 !== this._includeACL && (t.returnACL = this._includeACL),
                    this._limit >= 0 && (t.limit = this._limit),
                    this._skip > 0 && (t.skip = this._skip),
                    void 0 !== this._order && (t.order = this._order),
                    t
                },
                _newObject: function(e) {
                    return e && e.className ? new t.Object(e.className) : new this.objectClass
                },
                _createRequest: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getParams(),
                    e = arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
                    if (encodeURIComponent((0, o.
                default)(t)).length > 2e3) {
                        return d({
                            path: "/batch",
                            method: "POST",
                            data: {
                                requests: [{
                                    method: "GET",
                                    path: "/1.1" + n,
                                    params: t
                                }]
                            },
                            authOptions: e
                        }).then(function(t) {
                            var e = t[0];
                            if (e.success) return e.success;
                            var n = new Error(e.error.error || "Unknown batch error");
                            throw n.code = e.error.code,
                            n
                        })
                    }
                    return d({
                        method: "GET",
                        path: n,
                        query: t,
                        authOptions: e
                    })
                },
                _parseResponse: function(t) {
                    var e = this;
                    return u.map(t.results,
                    function(n) {
                        var r = e._newObject(t);
                        return r._finishFetch && r._finishFetch(e._processResult(n), !0),
                        r
                    })
                },
                find: function(t) {
                    return this._createRequest(void 0, t).then(this._parseResponse.bind(this))
                },
                scan: function() {
                    var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.orderedBy,
                    r = e.batchSize,
                    i = arguments[1],
                    o = this._getParams();
                    c("scan %O", o),
                    o.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete o.order),
                    o.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete o.skip),
                    o.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete o.limit),
                    n && (o.scan_key = n),
                    r && (o.limit = r);
                    var s = a.
                default.resolve([]),
                    l = void 0,
                    f = !1;
                    return {
                        next: function() {
                            return s = s.then(function(e) {
                                return f ? [] : e.length > 1 ? e: l || 0 === e.length ? h("scan/classes", t.className, null, "GET", l ? u.extend({},
                                o, {
                                    cursor: l
                                }) : o, i).then(function(e) {
                                    return l = e.cursor,
                                    t._parseResponse(e)
                                }).then(function(t) {
                                    return t.length || (f = !0),
                                    e.concat(t)
                                }) : (f = !0, e)
                            }),
                            s.then(function(t) {
                                return t.shift()
                            }).then(function(t) {
                                return {
                                    value: t,
                                    done: f
                                }
                            })
                        }
                    }
                },
                destroyAll: function(e) {
                    return this.find(e).then(function(n) {
                        return t.Object.destroyAll(n, e)
                    })
                },
                count: function(t) {
                    var e = this._getParams();
                    return e.limit = 0,
                    e.count = 1,
                    this._createRequest(e, t).then(function(t) {
                        return t.count
                    })
                },
                first: function(t) {
                    var e = this,
                    n = this._getParams();
                    return n.limit = 1,
                    this._createRequest(n, t).then(function(t) {
                        return u.map(t.results,
                        function(t) {
                            var n = e._newObject();
                            return n._finishFetch && n._finishFetch(e._processResult(t), !0),
                            n
                        })[0]
                    })
                },
                skip: function(t) {
                    return m(t, "undefined is not a valid skip value"),
                    this._skip = t,
                    this
                },
                limit: function(t) {
                    return m(t, "undefined is not a valid limit value"),
                    this._limit = t,
                    this
                },
                equalTo: function(e, n) {
                    return m(e, "undefined is not a valid key"),
                    m(n, "undefined is not a valid value"),
                    this._where[e] = t._encode(n),
                    this
                },
                _addCondition: function(e, n, r) {
                    return m(e, "undefined is not a valid condition key"),
                    m(n, "undefined is not a valid condition"),
                    m(r, "undefined is not a valid condition value"),
                    this._where[e] || (this._where[e] = {}),
                    this._where[e][n] = t._encode(r),
                    this
                },
                sizeEqualTo: function(t, e) {
                    return this._addCondition(t, "$size", e),
                    this
                },
                notEqualTo: function(t, e) {
                    return this._addCondition(t, "$ne", e),
                    this
                },
                lessThan: function(t, e) {
                    return this._addCondition(t, "$lt", e),
                    this
                },
                greaterThan: function(t, e) {
                    return this._addCondition(t, "$gt", e),
                    this
                },
                lessThanOrEqualTo: function(t, e) {
                    return this._addCondition(t, "$lte", e),
                    this
                },
                greaterThanOrEqualTo: function(t, e) {
                    return this._addCondition(t, "$gte", e),
                    this
                },
                containedIn: function(t, e) {
                    return this._addCondition(t, "$in", e),
                    this
                },
                notContainedIn: function(t, e) {
                    return this._addCondition(t, "$nin", e),
                    this
                },
                containsAll: function(t, e) {
                    return this._addCondition(t, "$all", e),
                    this
                },
                exists: function(t) {
                    return this._addCondition(t, "$exists", !0),
                    this
                },
                doesNotExist: function(t) {
                    return this._addCondition(t, "$exists", !1),
                    this
                },
                matches: function(t, e, n) {
                    return this._addCondition(t, "$regex", e),
                    n || (n = ""),
                    e.ignoreCase && (n += "i"),
                    e.multiline && (n += "m"),
                    n && n.length && this._addCondition(t, "$options", n),
                    this
                },
                matchesQuery: function(t, e) {
                    var n = e._getParams();
                    return n.className = e.className,
                    this._addCondition(t, "$inQuery", n),
                    this
                },
                doesNotMatchQuery: function(t, e) {
                    var n = e._getParams();
                    return n.className = e.className,
                    this._addCondition(t, "$notInQuery", n),
                    this
                },
                matchesKeyInQuery: function(t, e, n) {
                    var r = n._getParams();
                    return r.className = n.className,
                    this._addCondition(t, "$select", {
                        key: e,
                        query: r
                    }),
                    this
                },
                doesNotMatchKeyInQuery: function(t, e, n) {
                    var r = n._getParams();
                    return r.className = n.className,
                    this._addCondition(t, "$dontSelect", {
                        key: e,
                        query: r
                    }),
                    this
                },
                _orQuery: function(t) {
                    var e = u.map(t,
                    function(t) {
                        return t._getParams().where
                    });
                    return this._where.$or = e,
                    this
                },
                _andQuery: function(t) {
                    var e = u.map(t,
                    function(t) {
                        return t._getParams().where
                    });
                    return this._where.$and = e,
                    this
                },
                _quote: function(t) {
                    return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E"
                },
                contains: function(t, e) {
                    return this._addCondition(t, "$regex", this._quote(e)),
                    this
                },
                startsWith: function(t, e) {
                    return this._addCondition(t, "$regex", "^" + this._quote(e)),
                    this
                },
                endsWith: function(t, e) {
                    return this._addCondition(t, "$regex", this._quote(e) + "$"),
                    this
                },
                ascending: function(t) {
                    return m(t, "undefined is not a valid key"),
                    this._order = t,
                    this
                },
                addAscending: function(t) {
                    return m(t, "undefined is not a valid key"),
                    this._order ? this._order += "," + t: this._order = t,
                    this
                },
                descending: function(t) {
                    return m(t, "undefined is not a valid key"),
                    this._order = "-" + t,
                    this
                },
                addDescending: function(t) {
                    return m(t, "undefined is not a valid key"),
                    this._order ? this._order += ",-" + t: this._order = "-" + t,
                    this
                },
                near: function(e, n) {
                    return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)),
                    this._addCondition(e, "$nearSphere", n),
                    this
                },
                withinRadians: function(t, e, n) {
                    return this.near(t, e),
                    this._addCondition(t, "$maxDistance", n),
                    this
                },
                withinMiles: function(t, e, n) {
                    return this.withinRadians(t, e, n / 3958.8)
                },
                withinKilometers: function(t, e, n) {
                    return this.withinRadians(t, e, n / 6371)
                },
                withinGeoBox: function(e, n, r) {
                    return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)),
                    r instanceof t.GeoPoint || (r = new t.GeoPoint(r)),
                    this._addCondition(e, "$within", {
                        $box: [n, r]
                    }),
                    this
                },
                include: function(t) {
                    var e = this;
                    return m(t, "undefined is not a valid key"),
                    u.forEach(arguments,
                    function(t) {
                        e._include = e._include.concat(_(t))
                    }),
                    this
                },
                includeACL: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this._includeACL = t,
                    this
                },
                select: function(t) {
                    var e = this;
                    return m(t, "undefined is not a valid key"),
                    u.forEach(arguments,
                    function(t) {
                        e._select = e._select.concat(_(t))
                    }),
                    this
                },
                each: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._order || this._skip || this._limit >= 0) {
                        var r = new Error("Cannot iterate on a query with sort, skip, or limit.");
                        return a.
                    default.reject(r)
                    }
                    var i = new t.Query(this.objectClass);
                    i._limit = n.batchSize || 100,
                    i._where = u.clone(this._where),
                    i._include = u.clone(this._include),
                    i.ascending("objectId");
                    var o = !1;
                    return y(function() {
                        return ! o
                    },
                    function() {
                        return i.find(n).then(function(t) {
                            var n = a.
                        default.resolve();
                            return u.each(t,
                            function(t) {
                                n = n.then(function() {
                                    return e(t)
                                })
                            }),
                            n.then(function() {
                                t.length >= i._limit ? i.greaterThan("objectId", t[t.length - 1].id) : o = !0
                            })
                        })
                    })
                },
                subscribe: function(e) {
                    return t.LiveQuery.init(this, e)
                }
            }),
            t.FriendShipQuery = t.Query._extend({
                _newObject: function() {
                    return new(t.Object._getSubclass("_User"))
                },
                _processResult: function(t) {
                    if (t && t[this._friendshipTag]) {
                        var e = t[this._friendshipTag];
                        return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className),
                        e
                    }
                    return null
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(71),
        a = n(6),
        u = a.inherits,
        c = n(5),
        l = c.request,
        f = function(t, e) {
            return l({
                method: "POST",
                path: "/LiveQuery/subscribe",
                data: {
                    query: t,
                    id: e
                }
            })
        };
        t.exports = function(t) {
            var e = function() {
                if (!t._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query")
            };
            t.LiveQuery = u(s, {
                constructor: function(t, e, n, r) {
                    var i = this;
                    s.apply(this),
                    this.id = t,
                    this._client = e,
                    this._client.register(this),
                    this._queryJSON = n,
                    this._subscriptionId = r,
                    this._onMessage = this._dispatch.bind(this),
                    this._onReconnect = function() {
                        f(i._queryJSON, i._subscriptionId).
                        catch(function(t) {
                            return console.error("LiveQuery resubscribe error: " + t.message)
                        })
                    },
                    e.on("message", this._onMessage),
                    e.on("reconnect", this._onReconnect)
                },
                _dispatch: function(e) {
                    var n = this;
                    e.forEach(function(e) {
                        var r = e.op,
                        i = e.object,
                        s = e.query_id,
                        a = e.updatedKeys;
                        if (s === n.id) {
                            var u = t.parseJSON(o.extend({
                                __type: "_File" === i.className ? "File": "Object"
                            },
                            i));
                            a ? n.emit(r, u, a) : n.emit(r, u)
                        }
                    })
                },
                unsubscribe: function() {
                    var t = this._client;
                    return t.off("message", this._onMessage),
                    t.off("reconnect", this._onReconnect),
                    t.deregister(this),
                    l({
                        method: "POST",
                        path: "/LiveQuery/unsubscribe",
                        data: {
                            id: t.id,
                            query_id: this.id
                        }
                    })
                }
            },
            {
                init: function(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.subscriptionId,
                    s = void 0 === o ? t._getSubscriptionId() : o;
                    if (e(), !(n instanceof t.Query)) throw new TypeError("LiveQuery must be inited with a Query");
                    return i.
                default.resolve(s).then(function(e) {
                        return t._config.realtime.createLiveQueryClient(e).then(function(r) {
                            var i = n._getParams(),
                            o = i.where,
                            s = i.keys,
                            a = i.returnACL,
                            u = {
                                where: o,
                                keys: s,
                                returnACL: a,
                                className: n.className
                            },
                            c = f(u, e).then(function(n) {
                                var i = n.query_id;
                                return new t.LiveQuery(i, r, u, e)
                            }).
                            finally(function() {
                                r.deregister(c)
                            });
                            return r.register(c),
                            c
                        })
                    })
                },
                pause: function() {
                    return e(),
                    t._config.realtime.pause()
                },
                resume: function() {
                    return e(),
                    t._config.realtime.resume()
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(0),
        i = n(6),
        o = i.tap;
        t.exports = function(t) {
            t.Captcha = function(t, e) {
                this._options = t,
                this._authOptions = e,
                this.url = void 0,
                this.captchaToken = void 0,
                this.validateToken = void 0
            },
            t.Captcha.prototype.refresh = function() {
                var e = this;
                return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function(t) {
                    var n = t.captchaToken,
                    i = t.url;
                    return r.extend(e, {
                        captchaToken: n,
                        url: i
                    }),
                    i
                })
            },
            t.Captcha.prototype.verify = function(e) {
                var n = this;
                return t.Cloud.verifyCaptcha(e, this.captchaToken).then(o(function(t) {
                    return n.validateToken = t
                }))
            },
            t.Captcha.prototype.bind = function(t, e) {
                var n = this,
                r = t.textInput,
                i = t.image,
                o = t.verifyButton,
                s = e.success,
                a = e.error;
                if ("string" == typeof r && !(r = document.getElementById(r))) throw new Error("textInput with id " + r + " not found");
                if ("string" == typeof i && !(i = document.getElementById(i))) throw new Error("image with id " + i + " not found");
                if ("string" == typeof o && !(o = document.getElementById(o))) throw new Error("verifyButton with id " + o + " not found");
                this.__refresh = function() {
                    return n.refresh().then(function(t) {
                        i.src = t,
                        r && (r.value = "", r.focus())
                    }).
                    catch(function(t) {
                        return console.warn("refresh captcha fail: " + t.message)
                    })
                },
                i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)),
                this.__verify = function() {
                    var t = r.value;
                    n.verify(t).
                    catch(function(t) {
                        throw n.__refresh(),
                        t
                    }).then(s, a).
                    catch(function(t) {
                        return console.warn("verify captcha fail: " + t.message)
                    })
                },
                r && o && (this.__verifyButton = o, o.addEventListener("click", this.__verify))
            },
            t.Captcha.prototype.unbind = function() {
                this.__image && this.__image.removeEventListener("click", this.__refresh),
                this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify)
            },
            t.Captcha.request = function(e, n) {
                var r = new t.Captcha(e, n);
                return r.refresh().then(function() {
                    return r
                })
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(5),
        a = s._request,
        u = s.request;
        t.exports = function(t) {
            t.Cloud = t.Cloud || {},
            o.extend(t.Cloud, {
                run: function(e, n, r) {
                    return u({
                        service: "engine",
                        method: "POST",
                        path: "/functions/" + e,
                        data: t._encode(n, null, !0),
                        authOptions: r
                    }).then(function(e) {
                        return t._decode(e).result
                    })
                },
                rpc: function(e, n, r) {
                    return o.isArray(n) ? i.
                default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")):
                    u({
                        service:
                        "engine",
                        method: "POST",
                        path: "/call/" + e,
                        data: t._encodeObjectOrArray(n),
                        authOptions: r
                    }).then(function(e) {
                        return t._decode(e).result
                    })
                },
                getServerDate: function() {
                    return a("date", null, null, "GET").then(function(e) {
                        return t._decode(e)
                    })
                },
                requestSmsCode: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (o.isString(t) && (t = {
                        mobilePhoneNumber: t
                    }), !t.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
                    return e.validateToken && (t = o.extend({},
                    t, {
                        validate_token: e.validateToken
                    })),
                    a("requestSmsCode", null, null, "POST", t, e)
                },
                verifySmsCode: function(t, e) {
                    if (!t) throw new Error("Missing sms code.");
                    var n = {};
                    return o.isString(e) && (n.mobilePhoneNumber = e),
                    a("verifySmsCode", t, null, "POST", n)
                },
                _requestCaptcha: function(t, e) {
                    return a("requestCaptcha", null, null, "GET", t, e).then(function(t) {
                        var e = t.captcha_url;
                        return {
                            captchaToken: t.captcha_token,
                            url: e
                        }
                    })
                },
                requestCaptcha: t.Captcha.request,
                verifyCaptcha: function(t, e) {
                    return a("verifyCaptcha", null, null, "POST", {
                        captcha_code: t,
                        captcha_token: e
                    }).then(function(t) {
                        return t.validate_token
                    })
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(5).request;
        t.exports = function(t) {
            t.Installation = t.Object.extend("_Installation"),
            t.Push = t.Push || {},
            t.Push.send = function(t, e) {
                if (t.where && (t.where = t.where._getParams().where), t.where && t.cql) throw new Error("Both where and cql can't be set");
                if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
                return r({
                    service: "push",
                    method: "POST",
                    path: "/push",
                    data: t,
                    authOptions: e
                })
            }
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var i = n(2),
        o = r(i),
        s = n(28),
        a = r(s),
        u = n(0),
        c = n(5)._request,
        l = n(6),
        f = l.getSessionToken;
        t.exports = function(t) {
            var e = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return f(e) ? t.User._fetchUserBySessionToken(f(e)) : t.User.currentAsync()
            },
            n = function(n) {
                return e(n).then(function(e) {
                    return t.Object.createWithoutData("_User", e.id)._toPointer()
                })
            };
            t.Status = function(t, e) {
                return this.data = {},
                this.inboxType = "default",
                this.query = null,
                t && "object" === (void 0 === t ? "undefined": (0, a.
            default)(t)) ? this.data = t: (t && (this.data.image = t), e && (this.data.message = e)),
                this
            },
            u.extend(t.Status.prototype, {
                get: function(t) {
                    return this.data[t]
                },
                set: function(t, e) {
                    return this.data[t] = e,
                    this
                },
                destroy: function(t) {
                    return this.id ? c("statuses", null, this.id, "DELETE", t) : o.
                default.reject(new Error("The status id is not exists."))
                },
                toObject: function() {
                    return this.id ? t.Object.createWithoutData("_Status", this.id) : null
                },
                _getDataJSON: function() {
                    var e = u.clone(this.data);
                    return t._encode(e)
                },
                send: function() {
                    var e = this,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!f(r) && !t.User.current()) throw new Error("Please signin an user.");
                    return this.query ? n(r).then(function(t) {
                        var n = e.query._getParams();
                        n.className = e.query.className;
                        var i = {};
                        return i.query = n,
                        e.data = e.data || {},
                        e.data.source = e.data.source || t,
                        i.data = e._getDataJSON(),
                        i.inboxType = e.inboxType || "default",
                        c("statuses", null, null, "POST", i, r)
                    }).then(function(n) {
                        return e.id = n.objectId,
                        e.createdAt = t._parseDate(n.createdAt),
                        e
                    }) : t.Status.sendStatusToFollowers(this, r)
                },
                _finishFetch: function(e) {
                    this.id = e.objectId,
                    this.createdAt = t._parseDate(e.createdAt),
                    this.updatedAt = t._parseDate(e.updatedAt),
                    this.messageId = e.messageId,
                    delete e.messageId,
                    delete e.objectId,
                    delete e.createdAt,
                    delete e.updatedAt,
                    this.data = t._decode(e)
                }
            }),
            t.Status.sendStatusToFollowers = function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!f(r) && !t.User.current()) throw new Error("Please signin an user.");
                return n(r).then(function(n) {
                    var i = {};
                    i.className = "_Follower",
                    i.keys = "follower",
                    i.where = {
                        user: n
                    };
                    var o = {};
                    return o.query = i,
                    e.data = e.data || {},
                    e.data.source = e.data.source || n,
                    o.data = e._getDataJSON(),
                    o.inboxType = e.inboxType || "default",
                    c("statuses", null, null, "POST", o, r).then(function(n) {
                        return e.id = n.objectId,
                        e.createdAt = t._parseDate(n.createdAt),
                        e
                    })
                })
            },
            t.Status.sendPrivateStatus = function(e, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!f(i) && !t.User.current()) throw new Error("Please signin an user.");
                if (!r) throw new Error("Invalid target user.");
                var o = u.isString(r) ? r: r.id;
                if (!o) throw new Error("Invalid target user.");
                return n(i).then(function(n) {
                    var r = {};
                    r.className = "_User",
                    r.where = {
                        objectId: o
                    };
                    var s = {};
                    return s.query = r,
                    e.data = e.data || {},
                    e.data.source = e.data.source || n,
                    s.data = e._getDataJSON(),
                    s.inboxType = "private",
                    e.inboxType = "private",
                    c("statuses", null, null, "POST", s, i).then(function(n) {
                        return e.id = n.objectId,
                        e.createdAt = t._parseDate(n.createdAt),
                        e
                    })
                })
            },
            t.Status.countUnreadStatuses = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (u.isString(r) || (i = r), !f(i) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return o.
            default.resolve(n || e(i)).then(function(e) {
                    var n = {};
                    return n.inboxType = t._encode(r),
                    n.owner = t._encode(e),
                    c("subscribe/statuses/count", null, null, "GET", n, i)
                })
            },
            t.Status.resetUnreadCount = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (u.isString(r) || (i = r), !f(i) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return o.
            default.resolve(n || e(i)).then(function(e) {
                    var n = {};
                    return n.inboxType = t._encode(r),
                    n.owner = t._encode(e),
                    c("subscribe/statuses/resetUnreadCount", null, null, "POST", n, i)
                })
            },
            t.Status.statusQuery = function(e) {
                var n = new t.Query("_Status");
                return e && n.equalTo("source", e),
                n
            },
            t.InboxQuery = t.Query._extend({
                _objectClass: t.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function() {
                    return new t.Status
                },
                _createRequest: function(e, n) {
                    return t.InboxQuery.__super__._createRequest.call(this, e, n, "/subscribe/statuses")
                },
                sinceId: function(t) {
                    return this._sinceId = t,
                    this
                },
                maxId: function(t) {
                    return this._maxId = t,
                    this
                },
                owner: function(t) {
                    return this._owner = t,
                    this
                },
                inboxType: function(t) {
                    return this._inboxType = t,
                    this
                },
                _getParams: function() {
                    var e = t.InboxQuery.__super__._getParams.call(this);
                    return e.owner = t._encode(this._owner),
                    e.inboxType = t._encode(this._inboxType),
                    e.sinceId = t._encode(this._sinceId),
                    e.maxId = t._encode(this._maxId),
                    e
                }
            }),
            t.Status.inboxQuery = function(e, n) {
                var r = new t.InboxQuery(t.Status);
                return e && (r._owner = e),
                n && (r._inboxType = n),
                r
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(9),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(5)._request;
        t.exports = function(t) {
            t.SearchSortBuilder = function() {
                this._sortFields = []
            },
            o.extend(t.SearchSortBuilder.prototype, {
                _addField: function(t, e, n, r) {
                    var i = {};
                    return i[t] = {
                        order: e || "asc",
                        mode: n || "avg",
                        missing: "_" + (r || "last")
                    },
                    this._sortFields.push(i),
                    this
                },
                ascending: function(t, e, n) {
                    return this._addField(t, "asc", e, n)
                },
                descending: function(t, e, n) {
                    return this._addField(t, "desc", e, n)
                },
                whereNear: function(t, e, n) {
                    n = n || {};
                    var r = {},
                    i = {
                        lat: e.latitude,
                        lon: e.longitude
                    },
                    o = {
                        order: n.order || "asc",
                        mode: n.mode || "avg",
                        unit: n.unit || "km"
                    };
                    return o[t] = i,
                    r._geo_distance = o,
                    this._sortFields.push(r),
                    this
                },
                build: function() {
                    return (0, i.
                default)(t._encode(this._sortFields))
                }
            }),
            t.SearchQuery = t.Query._extend({
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _createRequest: function(t, e) {
                    return s("search/select", null, null, "GET", t || this._getParams(), e)
                },
                sid: function(t) {
                    return this._sid = t,
                    this
                },
                queryString: function(t) {
                    return this._queryString = t,
                    this
                },
                highlights: function(t) {
                    var e;
                    return e = t && o.isString(t) ? arguments: t,
                    this._highlights = e,
                    this
                },
                sortBy: function(t) {
                    return this._sortBuilder = t,
                    this
                },
                hits: function() {
                    return this._hits || (this._hits = 0),
                    this._hits
                },
                _processResult: function(t) {
                    return delete t.className,
                    delete t._app_url,
                    delete t._deeplink,
                    t
                },
                hasMore: function() {
                    return ! this._hitEnd
                },
                reset: function() {
                    this._hitEnd = !1,
                    this._sid = null,
                    this._hits = 0
                },
                find: function() {
                    var t = this;
                    return this._createRequest().then(function(e) {
                        return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0),
                        t._hits = e.hits || 0,
                        o.map(e.results,
                        function(n) {
                            n.className && (e.className = n.className);
                            var r = t._newObject(e);
                            return r.appURL = n._app_url,
                            r._finishFetch(t._processResult(n), !0),
                            r
                        })
                    })
                },
                _getParams: function() {
                    var e = t.SearchQuery.__super__._getParams.call(this);
                    if (delete e.where, this.className && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
                    if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order) throw new Error("sort and order can not be set at same time.");
                    return this._sortBuilder && (e.sort = this._sortBuilder.build()),
                    e
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(2),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(16),
        a = n(5),
        u = a.request;
        t.exports = function(t) {
            t.Insight = t.Insight || {},
            o.extend(t.Insight, {
                startJob: function(e, n) {
                    if (!e || !e.sql) throw new Error("Please provide the sql to run the job.");
                    var r = {
                        jobConfig: e,
                        appId: t.applicationId
                    };
                    return u({
                        path: "/bigquery/jobs",
                        method: "POST",
                        data: t._encode(r, null, !0),
                        authOptions: n,
                        signKey: !1
                    }).then(function(e) {
                        return t._decode(e).id
                    })
                },
                on: function(t, e) {}
            }),
            t.Insight.JobQuery = function(t, e) {
                if (!t) throw new Error("Please provide the job id.");
                this.id = t,
                this.className = e,
                this._skip = 0,
                this._limit = 100
            },
            o.extend(t.Insight.JobQuery.prototype, {
                skip: function(t) {
                    return this._skip = t,
                    this
                },
                limit: function(t) {
                    return this._limit = t,
                    this
                },
                find: function(t) {
                    var e = {
                        skip: this._skip,
                        limit: this._limit
                    };
                    return u({
                        path: "/bigquery/jobs/" + this.id,
                        method: "GET",
                        query: e,
                        authOptions: t,
                        signKey: !1
                    }).then(function(t) {
                        return t.error ? i.
                    default.reject(new s(t.code, t.error)) : i.
                    default.resolve(t)
                    })
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(9),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r),
        o = n(0),
        s = n(5),
        a = s._request,
        u = n(18),
        c = function(t) {
            return "string" == typeof t ? t: "function" == typeof t.getPayload ? (0, i.
        default)(t.getPayload()):
            (0, i.
        default)(t)
        };
        t.exports = u.Object.extend("_Conversation", {
            constructor: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u.Object.prototype.constructor.call(this, null, null),
                this.set("name", t),
                void 0 !== e.isSystem && this.set("sys", !!e.isSystem),
                void 0 !== e.isTransient && this.set("tr", !!e.isTransient)
            },
            getCreator: function() {
                return this.get("c")
            },
            getLastMessageAt: function() {
                return this.get("lm")
            },
            getMembers: function() {
                return this.get("m")
            },
            addMember: function(t) {
                return this.add("m", t)
            },
            getMutedMembers: function() {
                return this.get("mu")
            },
            getName: function() {
                return this.get("name")
            },
            isTransient: function() {
                return this.get("tr")
            },
            isSystem: function() {
                return this.get("sys")
            },
            send: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = {
                    from_peer: t,
                    conv_id: this.id,
                    transient: !1,
                    message: c(e)
                };
                return void 0 !== n.toClients && (i.to_peers = n.toClients),
                void 0 !== n.transient && (i.transient = !!n.transient),
                void 0 !== n.pushData && (i.push_data = n.pushData),
                a("rtm", "messages", null, "POST", i, r)
            },
            broadcast: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = {
                    from_peer: t,
                    conv_id: this.id,
                    message: c(e)
                };
                if (void 0 !== n.pushData && (i.push = n.pushData), void 0 !== n.validTill) {
                    var s = n.validTill;
                    o.isDate(s) && (s = s.getTime()),
                    n.valid_till = s
                }
                return a("rtm", "broadcast", null, "POST", i, r)
            }
        })
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.name,
            n = t.value,
            r = t.version;
            this.name = e,
            this.value = n,
            this.version = r
        }
        var i = n(2),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (i),
        s = n(0),
        a = n(5),
        u = a.request,
        c = n(6),
        l = c.ensureArray,
        f = c.parseDate,
        h = n(18);
        h.LeaderboardVersionChangeInterval = {
            NEVER: "never",
            DAY: "day",
            WEEK: "week",
            MONTH: "month"
        },
        h.LeaderboardOrder = {
            ASCENDING: "ascending",
            DESCENDING: "descending"
        },
        h.LeaderboardUpdateStrategy = {
            BETTER: "better",
            LAST: "last",
            SUM: "sum"
        };
        var d = function(t) {
            var e = h._decode(t);
            return new r({
                name: e.statisticName,
                value: e.statisticValue,
                version: e.version
            })
        };
        h.Leaderboard = function(t) {
            this.statisticName = t,
            this.order = void 0,
            this.updateStrategy = void 0,
            this.versionChangeInterval = void 0,
            this.version = void 0,
            this.nextResetAt = void 0,
            this.createdAt = void 0
        };
        var p = h.Leaderboard;
        h.Leaderboard.createWithoutData = function(t) {
            return new p(t)
        },
        h.Leaderboard.createLeaderboard = function(t, e) {
            var n = t.statisticName,
            r = t.order,
            i = t.versionChangeInterval,
            o = t.updateStrategy;
            return u({
                method: "POST",
                path: "/leaderboard/leaderboards",
                data: {
                    statisticName: n,
                    order: r,
                    versionChangeInterval: i,
                    updateStrategy: o
                },
                authOptions: e
            }).then(function(t) {
                return new p(n)._finishFetch(t)
            })
        },
        h.Leaderboard.getLeaderboard = function(t, e) {
            return p.createWithoutData(t).fetch(e)
        },
        h.Leaderboard.getStatistics = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.statisticNames,
            r = arguments[2];
            return o.
        default.resolve().then(function() {
                if (!t || !t.id) throw new Error("user must be an AV.User");
                return u({
                    method: "GET",
                    path: "/leaderboard/users/" + t.id + "/statistics",
                    query: {
                        statistics: n ? l(n).join(",") : void 0
                    },
                    authOptions: r
                }).then(function(t) {
                    return t.results.map(d)
                })
            })
        },
        h.Leaderboard.updateStatistics = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return o.
        default.resolve().then(function() {
                if (!t || !t.id) throw new Error("user must be an AV.User");
                var r = s.map(e,
                function(t, e) {
                    return {
                        statisticName: e,
                        statisticValue: t
                    }
                }),
                i = n.overwrite;
                return u({
                    method: "POST",
                    path: "/leaderboard/users/" + t.id + "/statistics",
                    query: {
                        overwrite: i ? 1 : void 0
                    },
                    data: r,
                    authOptions: n
                }).then(function(t) {
                    return t.results.map(d)
                })
            })
        },
        h.Leaderboard.deleteStatistics = function(t, e, n) {
            return o.
        default.resolve().then(function() {
                if (!t || !t.id) throw new Error("user must be an AV.User");
                return u({
                    method: "DELETE",
                    path: "/leaderboard/users/" + t.id + "/statistics",
                    query: {
                        statistics: l(e).join(",")
                    },
                    authOptions: n
                }).then(function() {})
            })
        },
        s.extend(p.prototype, {
            _finishFetch: function(t) {
                var e = this;
                return s.forEach(t,
                function(t, n) {
                    "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (t = f(t)), t && "Date" === t.__type && (t = f(t.iso)), e[n] = t)
                }),
                this
            },
            fetch: function(t) {
                var e = this;
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: t
                }).then(function(t) {
                    return e._finishFetch(t)
                })
            },
            count: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.version,
                n = arguments[1];
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks",
                    query: {
                        count: 1,
                        limit: 0,
                        version: e
                    },
                    authOptions: n
                }).then(function(t) {
                    return t.count
                })
            },
            _getResults: function(t, e, n) {
                var r = t.skip,
                i = t.limit,
                o = t.selectUserKeys,
                a = t.includeUserKeys,
                c = t.includeStatistics,
                f = t.version;
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n: ""),
                    query: {
                        skip: r,
                        limit: i,
                        selectUserKeys: s.union(l(o), l(a)).join(",") || void 0,
                        includeUser: a ? l(a).join(",") : void 0,
                        includeStatistics: c ? l(c).join(",") : void 0,
                        version: f
                    },
                    authOptions: e
                }).then(function(t) {
                    return t.results.map(function(t) {
                        var e = h._decode(t),
                        n = e.user,
                        r = e.statisticValue,
                        i = e.rank,
                        o = e.statistics;
                        return {
                            user: n,
                            value: r,
                            rank: i,
                            includedStatistics: (void 0 === o ? [] : o).map(d)
                        }
                    })
                })
            },
            getResults: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.skip,
                n = t.limit,
                r = t.selectUserKeys,
                i = t.includeUserKeys,
                o = t.includeStatistics,
                s = t.version,
                a = arguments[1];
                return this._getResults({
                    skip: e,
                    limit: n,
                    selectUserKeys: r,
                    includeUserKeys: i,
                    includeStatistics: o,
                    version: s
                },
                a)
            },
            getResultsAroundUser: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments[2];
                if (t && "string" != typeof t.id) return this.getResultsAroundUser(void 0, t, e);
                var r = e.limit,
                i = e.selectUserKeys,
                o = e.includeUserKeys,
                s = e.includeStatistics,
                a = e.version;
                return this._getResults({
                    limit: r,
                    selectUserKeys: i,
                    includeUserKeys: o,
                    includeStatistics: s,
                    version: a
                },
                n, t ? t.id: "self")
            },
            _update: function(t, e) {
                var n = this;
                return u({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    data: t,
                    authOptions: e
                }).then(function(t) {
                    return n._finishFetch(t)
                })
            },
            updateVersionChangeInterval: function(t, e) {
                return this._update({
                    versionChangeInterval: t
                },
                e)
            },
            updateUpdateStrategy: function(t, e) {
                return this._update({
                    updateStrategy: t
                },
                e)
            },
            reset: function(t) {
                var e = this;
                return u({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
                    authOptions: t
                }).then(function(t) {
                    return e._finishFetch(t)
                })
            },
            destroy: function(t) {
                return h.request({
                    method: "DELETE",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: t
                }).then(function() {})
            },
            getArchives: function() {
                var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.skip,
                r = e.limit,
                i = arguments[1];
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
                    query: {
                        skip: n,
                        limit: r
                    },
                    authOptions: i
                }).then(function(e) {
                    return e.results.map(function(e) {
                        var n = e.version,
                        r = e.status,
                        i = e.url,
                        o = e.activatedAt,
                        s = e.deactivatedAt;
                        return {
                            statisticName: t.statisticName,
                            version: n,
                            status: r,
                            url: i,
                            activatedAt: f(o.iso),
                            deactivatedAt: f(s.iso)
                        }
                    })
                })
            }
        })
    },
    function(t, e, n) {
        "use strict";
        var r = n(166);
        t.exports = function(t) {
            return t.setAdapters(r),
            t
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(167);
        e.request = r.request,
        e.upload = r.upload,
        e.storage = window.localStorage,
        e.WebSocket = window.WebSocket,
        e.platformInfo = {
            name: "Browser"
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(168);
        e.request = function(t, e) {
            void 0 === e && (e = {});
            var n = e.method,
            i = void 0 === n ? "GET": n,
            o = e.data,
            s = e.headers,
            a = e.onprogress,
            u = r(i, t);
            return s && u.set(s),
            a && u.on("progress", a),
            u.send(o).
            catch(function(t) {
                if (t.response) return t.response;
                throw t
            }).then(function(t) {
                return {
                    status: t.status,
                    ok: t.ok,
                    headers: t.header,
                    data: t.body
                }
            })
        },
        e.upload = function(t, e, n) {
            void 0 === n && (n = {});
            var i = n.data,
            o = n.headers,
            s = n.onprogress,
            a = r("POST", t).attach(e.field, e.data, e.name);
            return i && a.field(i),
            o && a.set(o),
            s && a.on("progress", s),
            a.
            catch(function(t) {
                if (t.response) return t.response;
                throw t
            }).then(function(t) {
                return {
                    status: t.status,
                    ok: t.ok,
                    headers: t.header,
                    data: t.body
                }
            })
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function i(t) {
            return (i = "function" == typeof b.
        default && "symbol" === (0, m.
        default)(v.
        default) ?
            function(t) {
                return void 0 === t ? "undefined": (0, m.
            default)(t)
            }:
            function(t) {
                return t && "function" == typeof b.
            default && t.constructor === b.
            default && t !== b.
            default.prototype ? "symbol": void 0 === t ? "undefined": (0, m.
            default)(t)
            })(t)
        }
        function o() {}
        function s(t) {
            if (!S(t)) return t;
            var e = [];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && a(e, n, t[n]);
            return e.join("&")
        }
        function a(t, e, n) {
            if (void 0 !== n) {
                if (null === n) return void t.push(encodeURI(e));
                if (Array.isArray(n)) n.forEach(function(n) {
                    a(t, e, n)
                });
                else if (S(n)) for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && a(t, "".concat(e, "[").concat(r, "]"), n[r]);
                else t.push(encodeURI(e) + "=" + encodeURIComponent(n))
            }
        }
        function u(t) {
            for (var e, n, r = {},
            i = t.split("&"), o = 0, s = i.length; o < s; ++o) e = i[o],
            n = e.indexOf("="),
            -1 === n ? r[decodeURIComponent(e)] = "": r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
            return r
        }
        function c(t) {
            for (var e, n, r, i, o = t.split(/\r?\n/), s = {},
            a = 0, u = o.length; a < u; ++a) n = o[a],
            -1 !== (e = n.indexOf(":")) && (r = n.slice(0, e).toLowerCase(), i = T(n.slice(e + 1)), s[r] = i);
            return s
        }
        function l(t) {
            return /[\/+]json($|[^-\w])/.test(t)
        }
        function f(t) {
            this.req = t,
            this.xhr = this.req.xhr,
            this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText: null,
            this.statusText = this.req.xhr.statusText;
            var e = this.xhr.status;
            1223 === e && (e = 204),
            this._setStatusProperties(e),
            this.headers = c(this.xhr.getAllResponseHeaders()),
            this.header = this.headers,
            this.header["content-type"] = this.xhr.getResponseHeader("content-type"),
            this._setHeaderProperties(this.header),
            null === this.text && t._responseType ? this.body = this.xhr.response: this.body = "HEAD" === this.req.method ? null: this._parseBody(this.text ? this.text: this.xhr.response)
        }
        function h(t, e) {
            var n = this;
            this._query = this._query || [],
            this.method = t,
            this.url = e,
            this.header = {},
            this._header = {},
            this.on("end",
            function() {
                var t = null,
                e = null;
                try {
                    e = new f(n)
                } catch(e) {
                    return t = new Error("Parser is unable to parse the response"),
                    t.parse = !0,
                    t.original = e,
                    n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText: n.xhr.response, t.status = n.xhr.status ? n.xhr.status: null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null),
                    n.callback(t)
                }
                n.emit("response", e);
                var r;
                try {
                    n._isResponseOK(e) || (r = new Error(e.statusText || e.text || "Unsuccessful HTTP response"))
                } catch(t) {
                    r = t
                }
                r ? (r.original = t, r.response = e, r.status = e.status, n.callback(r, e)) : n.callback(null, e)
            })
        }
        function d(t, e, n) {
            var r = x("DELETE", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.send(e),
            n && r.end(n),
            r
        }
        var p, _ = n(34),
        v = r(_),
        y = n(28),
        m = r(y),
        g = n(35),
        b = r(g);
        "undefined" != typeof window ? p = window: "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), p = void 0) : p = self;
        var w = n(169),
        O = n(170),
        A = n(171),
        S = n(80),
        E = n(172),
        C = n(174);
        t.exports = function(t, n) {
            return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 === arguments.length ? new e.Request("GET", t) : new e.Request(t, n)
        },
        e = t.exports;
        var x = e;
        e.Request = h,
        x.getXHR = function() {
            if (p.XMLHttpRequest && (!p.location || "file:" !== p.location.protocol || !p.ActiveXObject)) return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch(t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch(t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch(t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch(t) {}
            throw new Error("Browser-only version of superagent could not find XHR")
        };
        var T = "".trim ?
        function(t) {
            return t.trim()
        }: function(t) {
            return t.replace(/(^\s*|\s*$)/g, "")
        };
        x.serializeObject = s,
        x.parseString = u,
        x.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        },
        x.serialize = {
            "application/x-www-form-urlencoded": s,
            "application/json": O
        },
        x.parse = {
            "application/x-www-form-urlencoded": u,
            "application/json": JSON.parse
        },
        E(f.prototype),
        f.prototype._parseBody = function(t) {
            var e = x.parse[this.type];
            return this.req._parser ? this.req._parser(this, t) : (!e && l(this.type) && (e = x.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null)
        },
        f.prototype.toError = function() {
            var t = this.req,
            e = t.method,
            n = t.url,
            r = "cannot ".concat(e, " ").concat(n, " (").concat(this.status, ")"),
            i = new Error(r);
            return i.status = this.status,
            i.method = e,
            i.url = n,
            i
        },
        x.Response = f,
        w(h.prototype),
        A(h.prototype),
        h.prototype.type = function(t) {
            return this.set("Content-Type", x.types[t] || t),
            this
        },
        h.prototype.accept = function(t) {
            return this.set("Accept", x.types[t] || t),
            this
        },
        h.prototype.auth = function(t, e, n) {
            1 === arguments.length && (e = ""),
            "object" === i(e) && null !== e && (n = e, e = ""),
            n || (n = {
                type: "function" == typeof btoa ? "basic": "auto"
            });
            var r = function(t) {
                if ("function" == typeof btoa) return btoa(t);
                throw new Error("Cannot use basic auth, btoa is not a function")
            };
            return this._auth(t, e, n, r)
        },
        h.prototype.query = function(t) {
            return "string" != typeof t && (t = s(t)),
            t && this._query.push(t),
            this
        },
        h.prototype.attach = function(t, e, n) {
            if (e) {
                if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(t, e, n || e.name)
            }
            return this
        },
        h.prototype._getFormData = function() {
            return this._formData || (this._formData = new p.FormData),
            this._formData
        },
        h.prototype.callback = function(t, e) {
            if (this._shouldRetry(t, e)) return this._retry();
            var n = this._callback;
            this.clearTimeout(),
            t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)),
            n(t, e)
        },
        h.prototype.crossDomainError = function() {
            var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            t.crossDomain = !0,
            t.status = this.status,
            t.method = this.method,
            t.url = this.url,
            this.callback(t)
        },
        h.prototype.agent = function() {
            return console.warn("This is not supported in browser version of superagent"),
            this
        },
        h.prototype.ca = h.prototype.agent,
        h.prototype.buffer = h.prototype.ca,
        h.prototype.write = function() {
            throw new Error("Streaming is not supported in browser version of superagent")
        },
        h.prototype.pipe = h.prototype.write,
        h.prototype._isHost = function(t) {
            return t && "object" === i(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
        },
        h.prototype.end = function(t) {
            this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"),
            this._endCalled = !0,
            this._callback = t || o,
            this._finalizeQueryString(),
            this._end()
        },
        h.prototype._setUploadTimeout = function() {
            var t = this;
            this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function() {
                t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
            },
            this._uploadTimeout))
        },
        h.prototype._end = function() {
            if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
            var t = this;
            this.xhr = x.getXHR();
            var e = this.xhr,
            n = this._formData || this._data;
            this._setTimeouts(),
            e.onreadystatechange = function() {
                var n = e.readyState;
                if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === n) {
                    var r;
                    try {
                        r = e.status
                    } catch(t) {
                        r = 0
                    }
                    if (!r) {
                        if (t.timedout || t._aborted) return;
                        return t.crossDomainError()
                    }
                    t.emit("end")
                }
            };
            var r = function(e, n) {
                n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(t._uploadTimeoutTimer)),
                n.direction = e,
                t.emit("progress", n)
            };
            if (this.hasListeners("progress")) try {
                e.addEventListener("progress", r.bind(null, "download")),
                e.upload && e.upload.addEventListener("progress", r.bind(null, "upload"))
            } catch(t) {}
            e.upload && this._setUploadTimeout();
            try {
                this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
            } catch(t) {
                return this.callback(t)
            }
            if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
                var i = this._header["content-type"],
                o = this._serializer || x.serialize[i ? i.split(";")[0] : ""]; ! o && l(i) && (o = x.serialize["application/json"]),
                o && (n = o(n))
            }
            for (var s in this.header) null !== this.header[s] && Object.prototype.hasOwnProperty.call(this.header, s) && e.setRequestHeader(s, this.header[s]);
            this._responseType && (e.responseType = this._responseType),
            this.emit("request", this),
            e.send(void 0 === n ? null: n)
        },
        x.agent = function() {
            return new C
        },
        ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(t) {
            C.prototype[t.toLowerCase()] = function(e, n) {
                var r = new x.Request(t, e);
                return this._setDefaults(r),
                n && r.end(n),
                r
            }
        }),
        C.prototype.del = C.prototype.delete,
        x.get = function(t, e, n) {
            var r = x("GET", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.query(e),
            n && r.end(n),
            r
        },
        x.head = function(t, e, n) {
            var r = x("HEAD", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.query(e),
            n && r.end(n),
            r
        },
        x.options = function(t, e, n) {
            var r = x("OPTIONS", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.send(e),
            n && r.end(n),
            r
        },
        x.del = d,
        x.delete = d,
        x.patch = function(t, e, n) {
            var r = x("PATCH", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.send(e),
            n && r.end(n),
            r
        },
        x.post = function(t, e, n) {
            var r = x("POST", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.send(e),
            n && r.end(n),
            r
        },
        x.put = function(t, e, n) {
            var r = x("PUT", t);
            return "function" == typeof e && (n = e, e = null),
            e && r.send(e),
            n && r.end(n),
            r
        }
    },
    function(t, e, n) {
        function r(t) {
            if (t) return i(t)
        }
        function i(t) {
            for (var e in r.prototype) t[e] = r.prototype[e];
            return t
        }
        t.exports = r,
        r.prototype.on = r.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
        },
        r.prototype.once = function(t, e) {
            function n() {
                this.off(t, n),
                e.apply(this, arguments)
            }
            return n.fn = e,
            this.on(t, n),
            this
        },
        r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length) return this._callbacks = {},
            this;
            var n = this._callbacks["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t],
            this;
            for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === e || r.fn === e) {
                n.splice(i, 1);
                break
            }
            return 0 === n.length && delete this._callbacks["$" + t],
            this
        },
        r.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            if (n) {
                n = n.slice(0);
                for (var r = 0,
                i = n.length; r < i; ++r) n[r].apply(this, e)
            }
            return this
        },
        r.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks["$" + t] || []
        },
        r.prototype.hasListeners = function(t) {
            return !! this.listeners(t).length
        }
    },
    function(t, e) {
        function n(t, e, n) {
            r(t, "", [], void 0);
            var i;
            for (i = 0 === c.length ? JSON.stringify(t, e, n) : JSON.stringify(t, a(e), n); 0 !== u.length;) {
                var o = u.pop();
                4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
            }
            return i
        }
        function r(t, e, n, i) {
            var o;
            if ("object" == typeof t && null !== t) {
                for (o = 0; o < n.length; o++) if (n[o] === t) {
                    var s = Object.getOwnPropertyDescriptor(i, e);
                    return void(void 0 !== s.get ? s.configurable ? (Object.defineProperty(i, e, {
                        value: "[Circular]"
                    }), u.push([i, e, t, s])) : c.push([t, e]) : (i[e] = "[Circular]", u.push([i, e, t])))
                }
                if (n.push(t), Array.isArray(t)) for (o = 0; o < t.length; o++) r(t[o], o, n, t);
                else {
                    var a = Object.keys(t);
                    for (o = 0; o < a.length; o++) {
                        var l = a[o];
                        r(t[l], l, n, t)
                    }
                }
                n.pop()
            }
        }
        function i(t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        }
        function o(t, e, n) {
            var r, i = s(t, "", [], void 0) || t;
            for (r = 0 === c.length ? JSON.stringify(i, e, n) : JSON.stringify(i, a(e), n); 0 !== u.length;) {
                var o = u.pop();
                4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
            }
            return r
        }
        function s(t, e, n, r) {
            var o;
            if ("object" == typeof t && null !== t) {
                for (o = 0; o < n.length; o++) if (n[o] === t) {
                    var a = Object.getOwnPropertyDescriptor(r, e);
                    return void(void 0 !== a.get ? a.configurable ? (Object.defineProperty(r, e, {
                        value: "[Circular]"
                    }), u.push([r, e, t, a])) : c.push([t, e]) : (r[e] = "[Circular]", u.push([r, e, t])))
                }
                if ("function" == typeof t.toJSON) return;
                if (n.push(t), Array.isArray(t)) for (o = 0; o < t.length; o++) s(t[o], o, n, t);
                else {
                    var l = {},
                    f = Object.keys(t).sort(i);
                    for (o = 0; o < f.length; o++) {
                        var h = f[o];
                        s(t[h], h, n, t),
                        l[h] = t[h]
                    }
                    if (void 0 === r) return l;
                    u.push([r, e, t]),
                    r[e] = l
                }
                n.pop()
            }
        }
        function a(t) {
            return t = void 0 !== t ? t: function(t, e) {
                return e
            },
            function(e, n) {
                if (c.length > 0) for (var r = 0; r < c.length; r++) {
                    var i = c[r];
                    if (i[1] === e && i[0] === n) {
                        n = "[Circular]",
                        c.splice(r, 1);
                        break
                    }
                }
                return t.call(this, e, n)
            }
        }
        t.exports = n,
        n.
    default = n,
        n.stable = o,
        n.stableStringify = o;
        var u = [],
        c = []
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function i(t) {
            return (i = "function" == typeof p.
        default && "symbol" === (0, h.
        default)(l.
        default) ?
            function(t) {
                return void 0 === t ? "undefined": (0, h.
            default)(t)
            }:
            function(t) {
                return t && "function" == typeof p.
            default && t.constructor === p.
            default && t !== p.
            default.prototype ? "symbol": void 0 === t ? "undefined": (0, h.
            default)(t)
            })(t)
        }
        function o(t) {
            if (t) return s(t)
        }
        function s(t) {
            for (var e in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, e) && (t[e] = o.prototype[e]);
            return t
        }
        var a = n(2),
        u = r(a),
        c = n(34),
        l = r(c),
        f = n(28),
        h = r(f),
        d = n(35),
        p = r(d),
        _ = n(80);
        t.exports = o,
        o.prototype.clearTimeout = function() {
            return clearTimeout(this._timer),
            clearTimeout(this._responseTimeoutTimer),
            clearTimeout(this._uploadTimeoutTimer),
            delete this._timer,
            delete this._responseTimeoutTimer,
            delete this._uploadTimeoutTimer,
            this
        },
        o.prototype.parse = function(t) {
            return this._parser = t,
            this
        },
        o.prototype.responseType = function(t) {
            return this._responseType = t,
            this
        },
        o.prototype.serialize = function(t) {
            return this._serializer = t,
            this
        },
        o.prototype.timeout = function(t) {
            if (!t || "object" !== i(t)) return this._timeout = t,
            this._responseTimeout = 0,
            this._uploadTimeout = 0,
            this;
            for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
            case "deadline":
                this._timeout = t.deadline;
                break;
            case "response":
                this._responseTimeout = t.response;
                break;
            case "upload":
                this._uploadTimeout = t.upload;
                break;
            default:
                console.warn("Unknown timeout option", e)
            }
            return this
        },
        o.prototype.retry = function(t, e) {
            return 0 !== arguments.length && !0 !== t || (t = 1),
            t <= 0 && (t = 0),
            this._maxRetries = t,
            this._retries = 0,
            this._retryCallback = e,
            this
        };
        var v = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        o.prototype._shouldRetry = function(t, e) {
            if (!this._maxRetries || this._retries++>=this._maxRetries) return ! 1;
            if (this._retryCallback) try {
                var n = this._retryCallback(t, e);
                if (!0 === n) return ! 0;
                if (!1 === n) return ! 1
            } catch(t) {
                console.error(t)
            }
            if (e && e.status && e.status >= 500 && 501 !== e.status) return ! 0;
            if (t) {
                if (t.code && v.includes(t.code)) return ! 0;
                if (t.timeout && "ECONNABORTED" === t.code) return ! 0;
                if (t.crossDomain) return ! 0
            }
            return ! 1
        },
        o.prototype._retry = function() {
            return this.clearTimeout(),
            this.req && (this.req = null, this.req = this.request()),
            this._aborted = !1,
            this.timedout = !1,
            this.timedoutError = null,
            this._end()
        },
        o.prototype.then = function(t, e) {
            var n = this;
            if (!this._fullfilledPromise) {
                var r = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),
                this._fullfilledPromise = new u.
            default(function(t, e) {
                    r.on("abort",
                    function() {
                        if (n.timedout && n.timedoutError) return void e(n.timedoutError);
                        var t = new Error("Aborted");
                        t.code = "ABORTED",
                        t.status = n.status,
                        t.method = n.method,
                        t.url = n.url,
                        e(t)
                    }),
                    r.end(function(n, r) {
                        n ? e(n) : t(r)
                    })
                })
            }
            return this._fullfilledPromise.then(t, e)
        },
        o.prototype.
        catch = function(t) {
            return this.then(void 0, t)
        },
        o.prototype.use = function(t) {
            return t(this),
            this
        },
        o.prototype.ok = function(t) {
            if ("function" != typeof t) throw new Error("Callback required");
            return this._okCallback = t,
            this
        },
        o.prototype._isResponseOK = function(t) {
            return !! t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
        },
        o.prototype.get = function(t) {
            return this._header[t.toLowerCase()]
        },
        o.prototype.getHeader = o.prototype.get,
        o.prototype.set = function(t, e) {
            if (_(t)) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.set(n, t[n]);
                return this
            }
            return this._header[t.toLowerCase()] = e,
            this.header[t] = e,
            this
        },
        o.prototype.unset = function(t) {
            return delete this._header[t.toLowerCase()],
            delete this.header[t],
            this
        },
        o.prototype.field = function(t, e) {
            if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
            if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
            if (_(t)) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.field(n, t[n]);
                return this
            }
            if (Array.isArray(e)) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && this.field(t, e[r]);
                return this
            }
            if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof e && (e = String(e)),
            this._getFormData().append(t, e),
            this
        },
        o.prototype.abort = function() {
            return this._aborted ? this: (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
        },
        o.prototype._auth = function(t, e, n, r) {
            switch (n.type) {
            case "basic":
                this.set("Authorization", "Basic ".concat(r("".concat(t, ":").concat(e))));
                break;
            case "auto":
                this.username = t,
                this.password = e;
                break;
            case "bearer":
                this.set("Authorization", "Bearer ".concat(t))
            }
            return this
        },
        o.prototype.withCredentials = function(t) {
            return void 0 === t && (t = !0),
            this._withCredentials = t,
            this
        },
        o.prototype.redirects = function(t) {
            return this._maxRedirects = t,
            this
        },
        o.prototype.maxResponseSize = function(t) {
            if ("number" != typeof t) throw new TypeError("Invalid argument");
            return this._maxResponseSize = t,
            this
        },
        o.prototype.toJSON = function() {
            return {
                method: this.method,
                url: this.url,
                data: this._data,
                headers: this._header
            }
        },
        o.prototype.send = function(t) {
            var e = _(t),
            n = this._header["content-type"];
            if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
            if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
            else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
            if (e && _(this._data)) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (this._data[r] = t[r]);
            else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === n ? this._data ? "".concat(this._data, "&").concat(t) : t: (this._data || "") + t) : this._data = t;
            return ! e || this._isHost(t) ? this: (n || this.type("json"), this)
        },
        o.prototype.sortQuery = function(t) {
            return this._sort = void 0 === t || t,
            this
        },
        o.prototype._finalizeQueryString = function() {
            var t = this._query.join("&");
            if (t && (this.url += (this.url.includes("?") ? "&": "?") + t), this._query.length = 0, this._sort) {
                var e = this.url.indexOf("?");
                if (e >= 0) {
                    var n = this.url.slice(e + 1).split("&");
                    "function" == typeof this._sort ? n.sort(this._sort) : n.sort(),
                    this.url = this.url.slice(0, e) + "?" + n.join("&")
                }
            }
        },
        o.prototype._appendQueryString = function() {
            console.warn("Unsupported")
        },
        o.prototype._timeoutError = function(t, e, n) {
            if (!this._aborted) {
                var r = new Error("".concat(t + e, "ms exceeded"));
                r.timeout = e,
                r.code = "ECONNABORTED",
                r.errno = n,
                this.timedout = !0,
                this.timedoutError = r,
                this.abort(),
                this.callback(r)
            }
        },
        o.prototype._setTimeouts = function() {
            var t = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() {
                t._timeoutError("Timeout of ", t._timeout, "ETIME")
            },
            this._timeout)),
            this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
                t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
            },
            this._responseTimeout))
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            if (t) return i(t)
        }
        function i(t) {
            for (var e in r.prototype) Object.prototype.hasOwnProperty.call(r.prototype, e) && (t[e] = r.prototype[e]);
            return t
        }
        var o = n(173);
        t.exports = r,
        r.prototype.get = function(t) {
            return this.header[t.toLowerCase()]
        },
        r.prototype._setHeaderProperties = function(t) {
            var e = t["content-type"] || "";
            this.type = o.type(e);
            var n = o.params(e);
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (this[r] = n[r]);
            this.links = {};
            try {
                t.link && (this.links = o.parseLinks(t.link))
            } catch(t) {}
        },
        r.prototype._setStatusProperties = function(t) {
            var e = t / 100 | 0;
            this.statusCode = t,
            this.status = this.statusCode,
            this.statusType = e,
            this.info = 1 === e,
            this.ok = 2 === e,
            this.redirect = 3 === e,
            this.clientError = 4 === e,
            this.serverError = 5 === e,
            this.error = (4 === e || 5 === e) && this.toError(),
            this.created = 201 === t,
            this.accepted = 202 === t,
            this.noContent = 204 === t,
            this.badRequest = 400 === t,
            this.unauthorized = 401 === t,
            this.notAcceptable = 406 === t,
            this.forbidden = 403 === t,
            this.notFound = 404 === t,
            this.unprocessableEntity = 422 === t
        }
    },
    function(t, e, n) {
        "use strict";
        e.type = function(t) {
            return t.split(/ *; */).shift()
        },
        e.params = function(t) {
            return t.split(/ *; */).reduce(function(t, e) {
                var n = e.split(/ *= */),
                r = n.shift(),
                i = n.shift();
                return r && i && (t[r] = i),
                t
            },
            {})
        },
        e.parseLinks = function(t) {
            return t.split(/ *, */).reduce(function(t, e) {
                var n = e.split(/ *; */),
                r = n[0].slice(1, -1);
                return t[n[1].split(/ *= */)[1].slice(1, -1)] = r,
                t
            },
            {})
        },
        e.cleanHeader = function(t, e) {
            return delete t["content-type"],
            delete t["content-length"],
            delete t["transfer-encoding"],
            delete t.host,
            e && (delete t.authorization, delete t.cookie),
            t
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function i(t) {
            return a(t) || s(t) || o()
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        function s(t) {
            if ((0, h.
        default)(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) return (0, l.
        default)(t)
        }
        function a(t) {
            if (Array.isArray(t)) {
                for (var e = 0,
                n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }
        function u() {
            this._defaults = []
        }
        var c = n(175),
        l = r(c),
        f = n(79),
        h = r(f); ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach(function(t) {
            u.prototype[t] = function() {
                for (var e = arguments.length,
                n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return this._defaults.push({
                    fn: t,
                    args: n
                }),
                this
            }
        }),
        u.prototype._setDefaults = function(t) {
            this._defaults.forEach(function(e) {
                t[e.fn].apply(t, i(e.args))
            })
        },
        t.exports = u
    },
    function(t, e, n) {
        t.exports = {
        default:
            n(176),
            __esModule: !0
        }
    },
    function(t, e, n) {
        n(21),
        n(177),
        t.exports = n(1).Array.from
    },
    function(t, e, n) {
        "use strict";
        var r = n(23),
        i = n(10),
        o = n(27),
        s = n(60),
        a = n(61),
        u = n(40),
        c = n(178),
        l = n(45);
        i(i.S + i.F * !n(66)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, i, f, h = o(t),
                d = "function" == typeof this ? this: Array,
                p = arguments.length,
                _ = p > 1 ? arguments[1] : void 0,
                v = void 0 !== _,
                y = 0,
                m = l(h);
                if (v && (_ = r(_, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && a(m)) for (e = u(h.length), n = new d(e); e > y; y++) c(n, y, v ? _(h[y], y) : h[y]);
                else for (f = m.call(h), n = new d; ! (i = f.next()).done; y++) c(n, y, v ? s(f, _, [i.value, y], !0) : i.value);
                return n.length = y,
                n
            }
        })
    },
    function(t, e, n) {
        "use strict";
        var r = n(7),
        i = n(25);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }])
});
//# sourceMappingURL=av-min.js.map
var version="v2.0.0";


(function() {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Sha1(true).update(message)[outputType]();
    };
  };

  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Sha1();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('sha1').update(message, 'utf8').digest('hex');
      } else if (message.constructor === ArrayBuffer) {
        message = new Uint8Array(message);
      } else if (message.length === undefined) {
        return method(message);
      }
      return crypto.createHash('sha1').update(new Buffer(message)).digest('hex');
    };
    return nodeMethod;
  };

  function Sha1(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  Sha1.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString = typeof(message) !== 'string';
    if (notString && message.constructor === root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha1.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;

    for(j = 16; j < 80; ++j) {
      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
      blocks[j] =  (t << 1) | (t >>> 31);
    }

    for(j = 0; j < 20; j += 5) {
      f = (b & c) | ((~b) & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1518500249 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | ((~a) & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1518500249 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | ((~e) & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1518500249 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | ((~d) & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1518500249 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | ((~c) & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1518500249 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 40; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1859775393 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1859775393 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1859775393 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1859775393 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1859775393 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 60; j += 5) {
      f = (b & c) | (b & d) | (c & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 1894007588 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | (a & c) | (b & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 1894007588 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | (e & b) | (a & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 1894007588 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | (d & a) | (e & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 1894007588 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | (c & e) | (d & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 1894007588 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 80; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 899497514 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 899497514 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 899497514 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 899497514 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 899497514 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
  };

  Sha1.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
           HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
           HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
           HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
           HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
           HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
           HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
           HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
           HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
           HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
           HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
           HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
           HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
           HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
           HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
           HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
           HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
           HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
           HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
           HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F];
  };

  Sha1.prototype.toString = Sha1.prototype.hex;

  Sha1.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF
    ];
  };

  Sha1.prototype.array = Sha1.prototype.digest;

  Sha1.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha1 = exports;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();
/* SHA1 end */
;/*! showdown v 1.9.1 - 02-11-2019 */
(function(){
  /**
   * Created by Tivie on 13-07-2015.
   */
  
  function getDefaultOpts (simple) {
    'use strict';
  
    var defaultOptions = {
      omitExtraWLInCodeBlocks: {
        defaultValue: false,
        describe: 'Omit the default extra whiteline added to code blocks',
        type: 'boolean'
      },
      noHeaderId: {
        defaultValue: false,
        describe: 'Turn on/off generated header id',
        type: 'boolean'
      },
      prefixHeaderId: {
        defaultValue: false,
        describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
        type: 'string'
      },
      rawPrefixHeaderId: {
        defaultValue: false,
        describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
        type: 'boolean'
      },
      ghCompatibleHeaderId: {
        defaultValue: false,
        describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
        type: 'boolean'
      },
      rawHeaderId: {
        defaultValue: false,
        describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
        type: 'boolean'
      },
      headerLevelStart: {
        defaultValue: false,
        describe: 'The header blocks level start',
        type: 'integer'
      },
      parseImgDimensions: {
        defaultValue: false,
        describe: 'Turn on/off image dimension parsing',
        type: 'boolean'
      },
      simplifiedAutoLink: {
        defaultValue: false,
        describe: 'Turn on/off GFM autolink style',
        type: 'boolean'
      },
      excludeTrailingPunctuationFromURLs: {
        defaultValue: false,
        describe: 'Excludes trailing punctuation from links generated with autoLinking',
        type: 'boolean'
      },
      literalMidWordUnderscores: {
        defaultValue: false,
        describe: 'Parse midword underscores as literal underscores',
        type: 'boolean'
      },
      literalMidWordAsterisks: {
        defaultValue: false,
        describe: 'Parse midword asterisks as literal asterisks',
        type: 'boolean'
      },
      strikethrough: {
        defaultValue: true,
        describe: 'Turn on/off strikethrough support',
        type: 'boolean'
      },
      tables: {
        defaultValue: false,
        describe: 'Turn on/off tables support',
        type: 'boolean'
      },
      tablesHeaderId: {
        defaultValue: false,
        describe: 'Add an id to table headers',
        type: 'boolean'
      },
      ghCodeBlocks: {
        defaultValue: true,
        describe: 'Turn on/off GFM fenced code blocks support',
        type: 'boolean'
      },
      tasklists: {
        defaultValue: false,
        describe: 'Turn on/off GFM tasklist support',
        type: 'boolean'
      },
      smoothLivePreview: {
        defaultValue: false,
        describe: 'Prevents weird effects in live previews due to incomplete input',
        type: 'boolean'
      },
      smartIndentationFix: {
        defaultValue: false,
        description: 'Tries to smartly fix indentation in es6 strings',
        type: 'boolean'
      },
      disableForced4SpacesIndentedSublists: {
        defaultValue: false,
        description: 'Disables the requirement of indenting nested sublists by 4 spaces',
        type: 'boolean'
      },
      simpleLineBreaks: {
        defaultValue: false,
        description: 'Parses simple line breaks as <br> (GFM Style)',
        type: 'boolean'
      },
      requireSpaceBeforeHeadingText: {
        defaultValue: false,
        description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
        type: 'boolean'
      },
      ghMentions: {
        defaultValue: false,
        description: 'Enables github @mentions',
        type: 'boolean'
      },
      ghMentionsLink: {
        defaultValue: 'https://github.com/{u}',
        description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
        type: 'string'
      },
      encodeEmails: {
        defaultValue: true,
        description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
        type: 'boolean'
      },
      openLinksInNewWindow: {
        defaultValue: false,
        description: 'Open all links in new windows',
        type: 'boolean'
      },
      backslashEscapesHTMLTags: {
        defaultValue: false,
        description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
        type: 'boolean'
      },
      emoji: {
        defaultValue: false,
        description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
        type: 'boolean'
      },
      underline: {
        defaultValue: false,
        description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
        type: 'boolean'
      },
      completeHTMLDocument: {
        defaultValue: false,
        description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
        type: 'boolean'
      },
      metadata: {
        defaultValue: false,
        description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
        type: 'boolean'
      },
      splitAdjacentBlockquotes: {
        defaultValue: false,
        description: 'Split adjacent blockquote blocks',
        type: 'boolean'
      }
    };
    if (simple === false) {
      return JSON.parse(JSON.stringify(defaultOptions));
    }
    var ret = {};
    for (var opt in defaultOptions) {
      if (defaultOptions.hasOwnProperty(opt)) {
        ret[opt] = defaultOptions[opt].defaultValue;
      }
    }
    return ret;
  }
  
  function allOptionsOn () {
    'use strict';
    var options = getDefaultOpts(true),
        ret = {};
    for (var opt in options) {
      if (options.hasOwnProperty(opt)) {
        ret[opt] = true;
      }
    }
    return ret;
  }
  
  /**
   * Created by Tivie on 06-01-2015.
   */
  
  // Private properties
  var showdown = {},
      parsers = {},
      extensions = {},
      globalOptions = getDefaultOpts(true),
      setFlavor = 'vanilla',
      flavor = {
        github: {
          omitExtraWLInCodeBlocks:              true,
          simplifiedAutoLink:                   true,
          excludeTrailingPunctuationFromURLs:   true,
          literalMidWordUnderscores:            true,
          strikethrough:                        true,
          tables:                               true,
          tablesHeaderId:                       true,
          ghCodeBlocks:                         true,
          tasklists:                            true,
          disableForced4SpacesIndentedSublists: true,
          simpleLineBreaks:                     true,
          requireSpaceBeforeHeadingText:        true,
          ghCompatibleHeaderId:                 true,
          ghMentions:                           true,
          backslashEscapesHTMLTags:             true,
          emoji:                                true,
          splitAdjacentBlockquotes:             true
        },
        original: {
          noHeaderId:                           true,
          ghCodeBlocks:                         false
        },
        ghost: {
          omitExtraWLInCodeBlocks:              true,
          parseImgDimensions:                   true,
          simplifiedAutoLink:                   true,
          excludeTrailingPunctuationFromURLs:   true,
          literalMidWordUnderscores:            true,
          strikethrough:                        true,
          tables:                               true,
          tablesHeaderId:                       true,
          ghCodeBlocks:                         true,
          tasklists:                            true,
          smoothLivePreview:                    true,
          simpleLineBreaks:                     true,
          requireSpaceBeforeHeadingText:        true,
          ghMentions:                           false,
          encodeEmails:                         true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
      };
  
  /**
   * helper namespace
   * @type {{}}
   */
  showdown.helper = {};
  
  /**
   * TODO LEGACY SUPPORT CODE
   * @type {{}}
   */
  showdown.extensions = {};
  
  /**
   * Set a global option
   * @static
   * @param {string} key
   * @param {*} value
   * @returns {showdown}
   */
  showdown.setOption = function (key, value) {
    'use strict';
    globalOptions[key] = value;
    return this;
  };
  
  /**
   * Get a global option
   * @static
   * @param {string} key
   * @returns {*}
   */
  showdown.getOption = function (key) {
    'use strict';
    return globalOptions[key];
  };
  
  /**
   * Get the global options
   * @static
   * @returns {{}}
   */
  showdown.getOptions = function () {
    'use strict';
    return globalOptions;
  };
  
  /**
   * Reset global options to the default values
   * @static
   */
  showdown.resetOptions = function () {
    'use strict';
    globalOptions = getDefaultOpts(true);
  };
  
  /**
   * Set the flavor showdown should use as default
   * @param {string} name
   */
  showdown.setFlavor = function (name) {
    'use strict';
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    showdown.resetOptions();
    var preset = flavor[name];
    setFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        globalOptions[option] = preset[option];
      }
    }
  };
  
  /**
   * Get the currently set flavor
   * @returns {string}
   */
  showdown.getFlavor = function () {
    'use strict';
    return setFlavor;
  };
  
  /**
   * Get the options of a specified flavor. Returns undefined if the flavor was not found
   * @param {string} name Name of the flavor
   * @returns {{}|undefined}
   */
  showdown.getFlavorOptions = function (name) {
    'use strict';
    if (flavor.hasOwnProperty(name)) {
      return flavor[name];
    }
  };
  
  /**
   * Get the default options
   * @static
   * @param {boolean} [simple=true]
   * @returns {{}}
   */
  showdown.getDefaultOptions = function (simple) {
    'use strict';
    return getDefaultOpts(simple);
  };
  
  /**
   * Get or set a subParser
   *
   * subParser(name)       - Get a registered subParser
   * subParser(name, func) - Register a subParser
   * @static
   * @param {string} name
   * @param {function} [func]
   * @returns {*}
   */
  showdown.subParser = function (name, func) {
    'use strict';
    if (showdown.helper.isString(name)) {
      if (typeof func !== 'undefined') {
        parsers[name] = func;
      } else {
        if (parsers.hasOwnProperty(name)) {
          return parsers[name];
        } else {
          throw Error('SubParser named ' + name + ' not registered!');
        }
      }
    }
  };
  
  /**
   * Gets or registers an extension
   * @static
   * @param {string} name
   * @param {object|function=} ext
   * @returns {*}
   */
  showdown.extension = function (name, ext) {
    'use strict';
  
    if (!showdown.helper.isString(name)) {
      throw Error('Extension \'name\' must be a string');
    }
  
    name = showdown.helper.stdExtName(name);
  
    // Getter
    if (showdown.helper.isUndefined(ext)) {
      if (!extensions.hasOwnProperty(name)) {
        throw Error('Extension named ' + name + ' is not registered!');
      }
      return extensions[name];
  
      // Setter
    } else {
      // Expand extension if it's wrapped in a function
      if (typeof ext === 'function') {
        ext = ext();
      }
  
      // Ensure extension is an array
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
  
      var validExtension = validate(ext, name);
  
      if (validExtension.valid) {
        extensions[name] = ext;
      } else {
        throw Error(validExtension.error);
      }
    }
  };
  
  /**
   * Gets all extensions registered
   * @returns {{}}
   */
  showdown.getAllExtensions = function () {
    'use strict';
    return extensions;
  };
  
  /**
   * Remove an extension
   * @param {string} name
   */
  showdown.removeExtension = function (name) {
    'use strict';
    delete extensions[name];
  };
  
  /**
   * Removes all extensions
   */
  showdown.resetExtensions = function () {
    'use strict';
    extensions = {};
  };
  
  /**
   * Validate extension
   * @param {array} extension
   * @param {string} name
   * @returns {{valid: boolean, error: string}}
   */
  function validate (extension, name) {
    'use strict';
  
    var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
        ret = {
          valid: true,
          error: ''
        };
  
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
  
    for (var i = 0; i < extension.length; ++i) {
      var baseMsg = errMsg + ' sub-extension ' + i + ': ',
          ext = extension[i];
      if (typeof ext !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
        return ret;
      }
  
      if (!showdown.helper.isString(ext.type)) {
        ret.valid = false;
        ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
        return ret;
      }
  
      var type = ext.type = ext.type.toLowerCase();
  
      // normalize extension type
      if (type === 'language') {
        type = ext.type = 'lang';
      }
  
      if (type === 'html') {
        type = ext.type = 'output';
      }
  
      if (type !== 'lang' && type !== 'output' && type !== 'listener') {
        ret.valid = false;
        ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
        return ret;
      }
  
      if (type === 'listener') {
        if (showdown.helper.isUndefined(ext.listeners)) {
          ret.valid = false;
          ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
          return ret;
        }
      } else {
        if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
          ret.valid = false;
          ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
          return ret;
        }
      }
  
      if (ext.listeners) {
        if (typeof ext.listeners !== 'object') {
          ret.valid = false;
          ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
          return ret;
        }
        for (var ln in ext.listeners) {
          if (ext.listeners.hasOwnProperty(ln)) {
            if (typeof ext.listeners[ln] !== 'function') {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
                ' must be a function but ' + typeof ext.listeners[ln] + ' given';
              return ret;
            }
          }
        }
      }
  
      if (ext.filter) {
        if (typeof ext.filter !== 'function') {
          ret.valid = false;
          ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
          return ret;
        }
      } else if (ext.regex) {
        if (showdown.helper.isString(ext.regex)) {
          ext.regex = new RegExp(ext.regex, 'g');
        }
        if (!(ext.regex instanceof RegExp)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
          return ret;
        }
        if (showdown.helper.isUndefined(ext.replace)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
          return ret;
        }
      }
    }
    return ret;
  }
  
  /**
   * Validate extension
   * @param {object} ext
   * @returns {boolean}
   */
  showdown.validateExtension = function (ext) {
    'use strict';
  
    var validateExtension = validate(ext, null);
    if (!validateExtension.valid) {
      console.warn(validateExtension.error);
      return false;
    }
    return true;
  };
  
  /**
   * showdownjs helper functions
   */
  
  if (!showdown.hasOwnProperty('helper')) {
    showdown.helper = {};
  }
  
  /**
   * Check if var is string
   * @static
   * @param {string} a
   * @returns {boolean}
   */
  showdown.helper.isString = function (a) {
    'use strict';
    return (typeof a === 'string' || a instanceof String);
  };
  
  /**
   * Check if var is a function
   * @static
   * @param {*} a
   * @returns {boolean}
   */
  showdown.helper.isFunction = function (a) {
    'use strict';
    var getType = {};
    return a && getType.toString.call(a) === '[object Function]';
  };
  
  /**
   * isArray helper function
   * @static
   * @param {*} a
   * @returns {boolean}
   */
  showdown.helper.isArray = function (a) {
    'use strict';
    return Array.isArray(a);
  };
  
  /**
   * Check if value is undefined
   * @static
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   */
  showdown.helper.isUndefined = function (value) {
    'use strict';
    return typeof value === 'undefined';
  };
  
  /**
   * ForEach helper function
   * Iterates over Arrays and Objects (own properties only)
   * @static
   * @param {*} obj
   * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
   */
  showdown.helper.forEach = function (obj, callback) {
    'use strict';
    // check if obj is defined
    if (showdown.helper.isUndefined(obj)) {
      throw new Error('obj param is required');
    }
  
    if (showdown.helper.isUndefined(callback)) {
      throw new Error('callback param is required');
    }
  
    if (!showdown.helper.isFunction(callback)) {
      throw new Error('callback param must be a function/closure');
    }
  
    if (typeof obj.forEach === 'function') {
      obj.forEach(callback);
    } else if (showdown.helper.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        callback(obj[i], i, obj);
      }
    } else if (typeof (obj) === 'object') {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          callback(obj[prop], prop, obj);
        }
      }
    } else {
      throw new Error('obj does not seem to be an array or an iterable object');
    }
  };
  
  /**
   * Standardidize extension name
   * @static
   * @param {string} s extension name
   * @returns {string}
   */
  showdown.helper.stdExtName = function (s) {
    'use strict';
    return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
  };
  
  function escapeCharactersCallback (wholeMatch, m1) {
    'use strict';
    var charCodeToEscape = m1.charCodeAt(0);
    return '¨E' + charCodeToEscape + 'E';
  }
  
  /**
   * Callback used to escape characters when passing through String.replace
   * @static
   * @param {string} wholeMatch
   * @param {string} m1
   * @returns {string}
   */
  showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
  
  /**
   * Escape characters in a string
   * @static
   * @param {string} text
   * @param {string} charsToEscape
   * @param {boolean} afterBackslash
   * @returns {XML|string|void|*}
   */
  showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
    'use strict';
    // First we have to escape the escape characters so that
    // we can build a character class out of them
    var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';
  
    if (afterBackslash) {
      regexString = '\\\\' + regexString;
    }
  
    var regex = new RegExp(regexString, 'g');
    text = text.replace(regex, escapeCharactersCallback);
  
    return text;
  };
  
  /**
   * Unescape HTML entities
   * @param txt
   * @returns {string}
   */
  showdown.helper.unescapeHTMLEntities = function (txt) {
    'use strict';
  
    return txt
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  };
  
  var rgxFindMatchPos = function (str, left, right, flags) {
    'use strict';
    var f = flags || '',
        g = f.indexOf('g') > -1,
        x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
        l = new RegExp(left, f.replace(/g/g, '')),
        pos = [],
        t, s, m, start, end;
  
    do {
      t = 0;
      while ((m = x.exec(str))) {
        if (l.test(m[0])) {
          if (!(t++)) {
            s = x.lastIndex;
            start = s - m[0].length;
          }
        } else if (t) {
          if (!--t) {
            end = m.index + m[0].length;
            var obj = {
              left: {start: start, end: s},
              match: {start: s, end: m.index},
              right: {start: m.index, end: end},
              wholeMatch: {start: start, end: end}
            };
            pos.push(obj);
            if (!g) {
              return pos;
            }
          }
        }
      }
    } while (t && (x.lastIndex = s));
  
    return pos;
  };
  
  /**
   * matchRecursiveRegExp
   *
   * (c) 2007 Steven Levithan <stevenlevithan.com>
   * MIT License
   *
   * Accepts a string to search, a left and right format delimiter
   * as regex patterns, and optional regex flags. Returns an array
   * of matches, allowing nested instances of left/right delimiters.
   * Use the "g" flag to return all matches, otherwise only the
   * first is returned. Be careful to ensure that the left and
   * right format delimiters produce mutually exclusive matches.
   * Backreferences are not supported within the right delimiter
   * due to how it is internally combined with the left delimiter.
   * When matching strings whose format delimiters are unbalanced
   * to the left or right, the output is intentionally as a
   * conventional regex library with recursion support would
   * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
   * "<" and ">" as the delimiters (both strings contain a single,
   * balanced instance of "<x>").
   *
   * examples:
   * matchRecursiveRegExp("test", "\\(", "\\)")
   * returns: []
   * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
   * returns: ["t<<e>><s>", ""]
   * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
   * returns: ["test"]
   */
  showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
    'use strict';
  
    var matchPos = rgxFindMatchPos (str, left, right, flags),
        results = [];
  
    for (var i = 0; i < matchPos.length; ++i) {
      results.push([
        str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
        str.slice(matchPos[i].match.start, matchPos[i].match.end),
        str.slice(matchPos[i].left.start, matchPos[i].left.end),
        str.slice(matchPos[i].right.start, matchPos[i].right.end)
      ]);
    }
    return results;
  };
  
  /**
   *
   * @param {string} str
   * @param {string|function} replacement
   * @param {string} left
   * @param {string} right
   * @param {string} flags
   * @returns {string}
   */
  showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
    'use strict';
  
    if (!showdown.helper.isFunction(replacement)) {
      var repStr = replacement;
      replacement = function () {
        return repStr;
      };
    }
  
    var matchPos = rgxFindMatchPos(str, left, right, flags),
        finalStr = str,
        lng = matchPos.length;
  
    if (lng > 0) {
      var bits = [];
      if (matchPos[0].wholeMatch.start !== 0) {
        bits.push(str.slice(0, matchPos[0].wholeMatch.start));
      }
      for (var i = 0; i < lng; ++i) {
        bits.push(
          replacement(
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
          )
        );
        if (i < lng - 1) {
          bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
        }
      }
      if (matchPos[lng - 1].wholeMatch.end < str.length) {
        bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
      }
      finalStr = bits.join('');
    }
    return finalStr;
  };
  
  /**
   * Returns the index within the passed String object of the first occurrence of the specified regex,
   * starting the search at fromIndex. Returns -1 if the value is not found.
   *
   * @param {string} str string to search
   * @param {RegExp} regex Regular expression to search
   * @param {int} [fromIndex = 0] Index to start the search
   * @returns {Number}
   * @throws InvalidArgumentError
   */
  showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
    'use strict';
    if (!showdown.helper.isString(str)) {
      throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
    }
    if (regex instanceof RegExp === false) {
      throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
    }
    var indexOf = str.substring(fromIndex || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
  };
  
  /**
   * Splits the passed string object at the defined index, and returns an array composed of the two substrings
   * @param {string} str string to split
   * @param {int} index index to split string at
   * @returns {[string,string]}
   * @throws InvalidArgumentError
   */
  showdown.helper.splitAtIndex = function (str, index) {
    'use strict';
    if (!showdown.helper.isString(str)) {
      throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
    }
    return [str.substring(0, index), str.substring(index)];
  };
  
  /**
   * Obfuscate an e-mail address through the use of Character Entities,
   * transforming ASCII characters into their equivalent decimal or hex entities.
   *
   * Since it has a random component, subsequent calls to this function produce different results
   *
   * @param {string} mail
   * @returns {string}
   */
  showdown.helper.encodeEmailAddress = function (mail) {
    'use strict';
    var encode = [
      function (ch) {
        return '&#' + ch.charCodeAt(0) + ';';
      },
      function (ch) {
        return '&#x' + ch.charCodeAt(0).toString(16) + ';';
      },
      function (ch) {
        return ch;
      }
    ];
  
    mail = mail.replace(/./g, function (ch) {
      if (ch === '@') {
        // this *must* be encoded. I insist.
        ch = encode[Math.floor(Math.random() * 2)](ch);
      } else {
        var r = Math.random();
        // roughly 10% raw, 45% hex, 45% dec
        ch = (
          r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
        );
      }
      return ch;
    });
  
    return mail;
  };
  
  /**
   *
   * @param str
   * @param targetLength
   * @param padString
   * @returns {string}
   */
  showdown.helper.padEnd = function padEnd (str, targetLength, padString) {
    'use strict';
    /*jshint bitwise: false*/
    // eslint-disable-next-line space-infix-ops
    targetLength = targetLength>>0; //floor if number or convert non-number to 0;
    /*jshint bitwise: true*/
    padString = String(padString || ' ');
    if (str.length > targetLength) {
      return String(str);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(str) + padString.slice(0,targetLength);
    }
  };
  
  /**
   * POLYFILLS
   */
  // use this instead of builtin is undefined for IE8 compatibility
  if (typeof console === 'undefined') {
    console = {
      warn: function (msg) {
        'use strict';
        alert(msg);
      },
      log: function (msg) {
        'use strict';
        alert(msg);
      },
      error: function (msg) {
        'use strict';
        throw msg;
      }
    };
  }
  
  /**
   * Common regexes.
   * We declare some common regexes to improve performance
   */
  showdown.helper.regexes = {
    asteriskDashAndColon: /([*_:~])/g
  };
  
  /**
   * EMOJIS LIST
   */
  showdown.helper.emojis = {
    '+1':'\ud83d\udc4d',
    '-1':'\ud83d\udc4e',
    '100':'\ud83d\udcaf',
    '1234':'\ud83d\udd22',
    '1st_place_medal':'\ud83e\udd47',
    '2nd_place_medal':'\ud83e\udd48',
    '3rd_place_medal':'\ud83e\udd49',
    '8ball':'\ud83c\udfb1',
    'a':'\ud83c\udd70\ufe0f',
    'ab':'\ud83c\udd8e',
    'abc':'\ud83d\udd24',
    'abcd':'\ud83d\udd21',
    'accept':'\ud83c\ude51',
    'aerial_tramway':'\ud83d\udea1',
    'airplane':'\u2708\ufe0f',
    'alarm_clock':'\u23f0',
    'alembic':'\u2697\ufe0f',
    'alien':'\ud83d\udc7d',
    'ambulance':'\ud83d\ude91',
    'amphora':'\ud83c\udffa',
    'anchor':'\u2693\ufe0f',
    'angel':'\ud83d\udc7c',
    'anger':'\ud83d\udca2',
    'angry':'\ud83d\ude20',
    'anguished':'\ud83d\ude27',
    'ant':'\ud83d\udc1c',
    'apple':'\ud83c\udf4e',
    'aquarius':'\u2652\ufe0f',
    'aries':'\u2648\ufe0f',
    'arrow_backward':'\u25c0\ufe0f',
    'arrow_double_down':'\u23ec',
    'arrow_double_up':'\u23eb',
    'arrow_down':'\u2b07\ufe0f',
    'arrow_down_small':'\ud83d\udd3d',
    'arrow_forward':'\u25b6\ufe0f',
    'arrow_heading_down':'\u2935\ufe0f',
    'arrow_heading_up':'\u2934\ufe0f',
    'arrow_left':'\u2b05\ufe0f',
    'arrow_lower_left':'\u2199\ufe0f',
    'arrow_lower_right':'\u2198\ufe0f',
    'arrow_right':'\u27a1\ufe0f',
    'arrow_right_hook':'\u21aa\ufe0f',
    'arrow_up':'\u2b06\ufe0f',
    'arrow_up_down':'\u2195\ufe0f',
    'arrow_up_small':'\ud83d\udd3c',
    'arrow_upper_left':'\u2196\ufe0f',
    'arrow_upper_right':'\u2197\ufe0f',
    'arrows_clockwise':'\ud83d\udd03',
    'arrows_counterclockwise':'\ud83d\udd04',
    'art':'\ud83c\udfa8',
    'articulated_lorry':'\ud83d\ude9b',
    'artificial_satellite':'\ud83d\udef0',
    'astonished':'\ud83d\ude32',
    'athletic_shoe':'\ud83d\udc5f',
    'atm':'\ud83c\udfe7',
    'atom_symbol':'\u269b\ufe0f',
    'avocado':'\ud83e\udd51',
    'b':'\ud83c\udd71\ufe0f',
    'baby':'\ud83d\udc76',
    'baby_bottle':'\ud83c\udf7c',
    'baby_chick':'\ud83d\udc24',
    'baby_symbol':'\ud83d\udebc',
    'back':'\ud83d\udd19',
    'bacon':'\ud83e\udd53',
    'badminton':'\ud83c\udff8',
    'baggage_claim':'\ud83d\udec4',
    'baguette_bread':'\ud83e\udd56',
    'balance_scale':'\u2696\ufe0f',
    'balloon':'\ud83c\udf88',
    'ballot_box':'\ud83d\uddf3',
    'ballot_box_with_check':'\u2611\ufe0f',
    'bamboo':'\ud83c\udf8d',
    'banana':'\ud83c\udf4c',
    'bangbang':'\u203c\ufe0f',
    'bank':'\ud83c\udfe6',
    'bar_chart':'\ud83d\udcca',
    'barber':'\ud83d\udc88',
    'baseball':'\u26be\ufe0f',
    'basketball':'\ud83c\udfc0',
    'basketball_man':'\u26f9\ufe0f',
    'basketball_woman':'\u26f9\ufe0f&zwj;\u2640\ufe0f',
    'bat':'\ud83e\udd87',
    'bath':'\ud83d\udec0',
    'bathtub':'\ud83d\udec1',
    'battery':'\ud83d\udd0b',
    'beach_umbrella':'\ud83c\udfd6',
    'bear':'\ud83d\udc3b',
    'bed':'\ud83d\udecf',
    'bee':'\ud83d\udc1d',
    'beer':'\ud83c\udf7a',
    'beers':'\ud83c\udf7b',
    'beetle':'\ud83d\udc1e',
    'beginner':'\ud83d\udd30',
    'bell':'\ud83d\udd14',
    'bellhop_bell':'\ud83d\udece',
    'bento':'\ud83c\udf71',
    'biking_man':'\ud83d\udeb4',
    'bike':'\ud83d\udeb2',
    'biking_woman':'\ud83d\udeb4&zwj;\u2640\ufe0f',
    'bikini':'\ud83d\udc59',
    'biohazard':'\u2623\ufe0f',
    'bird':'\ud83d\udc26',
    'birthday':'\ud83c\udf82',
    'black_circle':'\u26ab\ufe0f',
    'black_flag':'\ud83c\udff4',
    'black_heart':'\ud83d\udda4',
    'black_joker':'\ud83c\udccf',
    'black_large_square':'\u2b1b\ufe0f',
    'black_medium_small_square':'\u25fe\ufe0f',
    'black_medium_square':'\u25fc\ufe0f',
    'black_nib':'\u2712\ufe0f',
    'black_small_square':'\u25aa\ufe0f',
    'black_square_button':'\ud83d\udd32',
    'blonde_man':'\ud83d\udc71',
    'blonde_woman':'\ud83d\udc71&zwj;\u2640\ufe0f',
    'blossom':'\ud83c\udf3c',
    'blowfish':'\ud83d\udc21',
    'blue_book':'\ud83d\udcd8',
    'blue_car':'\ud83d\ude99',
    'blue_heart':'\ud83d\udc99',
    'blush':'\ud83d\ude0a',
    'boar':'\ud83d\udc17',
    'boat':'\u26f5\ufe0f',
    'bomb':'\ud83d\udca3',
    'book':'\ud83d\udcd6',
    'bookmark':'\ud83d\udd16',
    'bookmark_tabs':'\ud83d\udcd1',
    'books':'\ud83d\udcda',
    'boom':'\ud83d\udca5',
    'boot':'\ud83d\udc62',
    'bouquet':'\ud83d\udc90',
    'bowing_man':'\ud83d\ude47',
    'bow_and_arrow':'\ud83c\udff9',
    'bowing_woman':'\ud83d\ude47&zwj;\u2640\ufe0f',
    'bowling':'\ud83c\udfb3',
    'boxing_glove':'\ud83e\udd4a',
    'boy':'\ud83d\udc66',
    'bread':'\ud83c\udf5e',
    'bride_with_veil':'\ud83d\udc70',
    'bridge_at_night':'\ud83c\udf09',
    'briefcase':'\ud83d\udcbc',
    'broken_heart':'\ud83d\udc94',
    'bug':'\ud83d\udc1b',
    'building_construction':'\ud83c\udfd7',
    'bulb':'\ud83d\udca1',
    'bullettrain_front':'\ud83d\ude85',
    'bullettrain_side':'\ud83d\ude84',
    'burrito':'\ud83c\udf2f',
    'bus':'\ud83d\ude8c',
    'business_suit_levitating':'\ud83d\udd74',
    'busstop':'\ud83d\ude8f',
    'bust_in_silhouette':'\ud83d\udc64',
    'busts_in_silhouette':'\ud83d\udc65',
    'butterfly':'\ud83e\udd8b',
    'cactus':'\ud83c\udf35',
    'cake':'\ud83c\udf70',
    'calendar':'\ud83d\udcc6',
    'call_me_hand':'\ud83e\udd19',
    'calling':'\ud83d\udcf2',
    'camel':'\ud83d\udc2b',
    'camera':'\ud83d\udcf7',
    'camera_flash':'\ud83d\udcf8',
    'camping':'\ud83c\udfd5',
    'cancer':'\u264b\ufe0f',
    'candle':'\ud83d\udd6f',
    'candy':'\ud83c\udf6c',
    'canoe':'\ud83d\udef6',
    'capital_abcd':'\ud83d\udd20',
    'capricorn':'\u2651\ufe0f',
    'car':'\ud83d\ude97',
    'card_file_box':'\ud83d\uddc3',
    'card_index':'\ud83d\udcc7',
    'card_index_dividers':'\ud83d\uddc2',
    'carousel_horse':'\ud83c\udfa0',
    'carrot':'\ud83e\udd55',
    'cat':'\ud83d\udc31',
    'cat2':'\ud83d\udc08',
    'cd':'\ud83d\udcbf',
    'chains':'\u26d3',
    'champagne':'\ud83c\udf7e',
    'chart':'\ud83d\udcb9',
    'chart_with_downwards_trend':'\ud83d\udcc9',
    'chart_with_upwards_trend':'\ud83d\udcc8',
    'checkered_flag':'\ud83c\udfc1',
    'cheese':'\ud83e\uddc0',
    'cherries':'\ud83c\udf52',
    'cherry_blossom':'\ud83c\udf38',
    'chestnut':'\ud83c\udf30',
    'chicken':'\ud83d\udc14',
    'children_crossing':'\ud83d\udeb8',
    'chipmunk':'\ud83d\udc3f',
    'chocolate_bar':'\ud83c\udf6b',
    'christmas_tree':'\ud83c\udf84',
    'church':'\u26ea\ufe0f',
    'cinema':'\ud83c\udfa6',
    'circus_tent':'\ud83c\udfaa',
    'city_sunrise':'\ud83c\udf07',
    'city_sunset':'\ud83c\udf06',
    'cityscape':'\ud83c\udfd9',
    'cl':'\ud83c\udd91',
    'clamp':'\ud83d\udddc',
    'clap':'\ud83d\udc4f',
    'clapper':'\ud83c\udfac',
    'classical_building':'\ud83c\udfdb',
    'clinking_glasses':'\ud83e\udd42',
    'clipboard':'\ud83d\udccb',
    'clock1':'\ud83d\udd50',
    'clock10':'\ud83d\udd59',
    'clock1030':'\ud83d\udd65',
    'clock11':'\ud83d\udd5a',
    'clock1130':'\ud83d\udd66',
    'clock12':'\ud83d\udd5b',
    'clock1230':'\ud83d\udd67',
    'clock130':'\ud83d\udd5c',
    'clock2':'\ud83d\udd51',
    'clock230':'\ud83d\udd5d',
    'clock3':'\ud83d\udd52',
    'clock330':'\ud83d\udd5e',
    'clock4':'\ud83d\udd53',
    'clock430':'\ud83d\udd5f',
    'clock5':'\ud83d\udd54',
    'clock530':'\ud83d\udd60',
    'clock6':'\ud83d\udd55',
    'clock630':'\ud83d\udd61',
    'clock7':'\ud83d\udd56',
    'clock730':'\ud83d\udd62',
    'clock8':'\ud83d\udd57',
    'clock830':'\ud83d\udd63',
    'clock9':'\ud83d\udd58',
    'clock930':'\ud83d\udd64',
    'closed_book':'\ud83d\udcd5',
    'closed_lock_with_key':'\ud83d\udd10',
    'closed_umbrella':'\ud83c\udf02',
    'cloud':'\u2601\ufe0f',
    'cloud_with_lightning':'\ud83c\udf29',
    'cloud_with_lightning_and_rain':'\u26c8',
    'cloud_with_rain':'\ud83c\udf27',
    'cloud_with_snow':'\ud83c\udf28',
    'clown_face':'\ud83e\udd21',
    'clubs':'\u2663\ufe0f',
    'cocktail':'\ud83c\udf78',
    'coffee':'\u2615\ufe0f',
    'coffin':'\u26b0\ufe0f',
    'cold_sweat':'\ud83d\ude30',
    'comet':'\u2604\ufe0f',
    'computer':'\ud83d\udcbb',
    'computer_mouse':'\ud83d\uddb1',
    'confetti_ball':'\ud83c\udf8a',
    'confounded':'\ud83d\ude16',
    'confused':'\ud83d\ude15',
    'congratulations':'\u3297\ufe0f',
    'construction':'\ud83d\udea7',
    'construction_worker_man':'\ud83d\udc77',
    'construction_worker_woman':'\ud83d\udc77&zwj;\u2640\ufe0f',
    'control_knobs':'\ud83c\udf9b',
    'convenience_store':'\ud83c\udfea',
    'cookie':'\ud83c\udf6a',
    'cool':'\ud83c\udd92',
    'policeman':'\ud83d\udc6e',
    'copyright':'\u00a9\ufe0f',
    'corn':'\ud83c\udf3d',
    'couch_and_lamp':'\ud83d\udecb',
    'couple':'\ud83d\udc6b',
    'couple_with_heart_woman_man':'\ud83d\udc91',
    'couple_with_heart_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68',
    'couple_with_heart_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69',
    'couplekiss_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68',
    'couplekiss_man_woman':'\ud83d\udc8f',
    'couplekiss_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69',
    'cow':'\ud83d\udc2e',
    'cow2':'\ud83d\udc04',
    'cowboy_hat_face':'\ud83e\udd20',
    'crab':'\ud83e\udd80',
    'crayon':'\ud83d\udd8d',
    'credit_card':'\ud83d\udcb3',
    'crescent_moon':'\ud83c\udf19',
    'cricket':'\ud83c\udfcf',
    'crocodile':'\ud83d\udc0a',
    'croissant':'\ud83e\udd50',
    'crossed_fingers':'\ud83e\udd1e',
    'crossed_flags':'\ud83c\udf8c',
    'crossed_swords':'\u2694\ufe0f',
    'crown':'\ud83d\udc51',
    'cry':'\ud83d\ude22',
    'crying_cat_face':'\ud83d\ude3f',
    'crystal_ball':'\ud83d\udd2e',
    'cucumber':'\ud83e\udd52',
    'cupid':'\ud83d\udc98',
    'curly_loop':'\u27b0',
    'currency_exchange':'\ud83d\udcb1',
    'curry':'\ud83c\udf5b',
    'custard':'\ud83c\udf6e',
    'customs':'\ud83d\udec3',
    'cyclone':'\ud83c\udf00',
    'dagger':'\ud83d\udde1',
    'dancer':'\ud83d\udc83',
    'dancing_women':'\ud83d\udc6f',
    'dancing_men':'\ud83d\udc6f&zwj;\u2642\ufe0f',
    'dango':'\ud83c\udf61',
    'dark_sunglasses':'\ud83d\udd76',
    'dart':'\ud83c\udfaf',
    'dash':'\ud83d\udca8',
    'date':'\ud83d\udcc5',
    'deciduous_tree':'\ud83c\udf33',
    'deer':'\ud83e\udd8c',
    'department_store':'\ud83c\udfec',
    'derelict_house':'\ud83c\udfda',
    'desert':'\ud83c\udfdc',
    'desert_island':'\ud83c\udfdd',
    'desktop_computer':'\ud83d\udda5',
    'male_detective':'\ud83d\udd75\ufe0f',
    'diamond_shape_with_a_dot_inside':'\ud83d\udca0',
    'diamonds':'\u2666\ufe0f',
    'disappointed':'\ud83d\ude1e',
    'disappointed_relieved':'\ud83d\ude25',
    'dizzy':'\ud83d\udcab',
    'dizzy_face':'\ud83d\ude35',
    'do_not_litter':'\ud83d\udeaf',
    'dog':'\ud83d\udc36',
    'dog2':'\ud83d\udc15',
    'dollar':'\ud83d\udcb5',
    'dolls':'\ud83c\udf8e',
    'dolphin':'\ud83d\udc2c',
    'door':'\ud83d\udeaa',
    'doughnut':'\ud83c\udf69',
    'dove':'\ud83d\udd4a',
    'dragon':'\ud83d\udc09',
    'dragon_face':'\ud83d\udc32',
    'dress':'\ud83d\udc57',
    'dromedary_camel':'\ud83d\udc2a',
    'drooling_face':'\ud83e\udd24',
    'droplet':'\ud83d\udca7',
    'drum':'\ud83e\udd41',
    'duck':'\ud83e\udd86',
    'dvd':'\ud83d\udcc0',
    'e-mail':'\ud83d\udce7',
    'eagle':'\ud83e\udd85',
    'ear':'\ud83d\udc42',
    'ear_of_rice':'\ud83c\udf3e',
    'earth_africa':'\ud83c\udf0d',
    'earth_americas':'\ud83c\udf0e',
    'earth_asia':'\ud83c\udf0f',
    'egg':'\ud83e\udd5a',
    'eggplant':'\ud83c\udf46',
    'eight_pointed_black_star':'\u2734\ufe0f',
    'eight_spoked_asterisk':'\u2733\ufe0f',
    'electric_plug':'\ud83d\udd0c',
    'elephant':'\ud83d\udc18',
    'email':'\u2709\ufe0f',
    'end':'\ud83d\udd1a',
    'envelope_with_arrow':'\ud83d\udce9',
    'euro':'\ud83d\udcb6',
    'european_castle':'\ud83c\udff0',
    'european_post_office':'\ud83c\udfe4',
    'evergreen_tree':'\ud83c\udf32',
    'exclamation':'\u2757\ufe0f',
    'expressionless':'\ud83d\ude11',
    'eye':'\ud83d\udc41',
    'eye_speech_bubble':'\ud83d\udc41&zwj;\ud83d\udde8',
    'eyeglasses':'\ud83d\udc53',
    'eyes':'\ud83d\udc40',
    'face_with_head_bandage':'\ud83e\udd15',
    'face_with_thermometer':'\ud83e\udd12',
    'fist_oncoming':'\ud83d\udc4a',
    'factory':'\ud83c\udfed',
    'fallen_leaf':'\ud83c\udf42',
    'family_man_woman_boy':'\ud83d\udc6a',
    'family_man_boy':'\ud83d\udc68&zwj;\ud83d\udc66',
    'family_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
    'family_man_girl':'\ud83d\udc68&zwj;\ud83d\udc67',
    'family_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
    'family_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
    'family_man_man_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66',
    'family_man_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
    'family_man_man_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67',
    'family_man_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
    'family_man_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
    'family_man_woman_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
    'family_man_woman_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
    'family_man_woman_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
    'family_man_woman_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
    'family_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc66',
    'family_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
    'family_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc67',
    'family_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
    'family_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
    'family_woman_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66',
    'family_woman_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
    'family_woman_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
    'family_woman_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
    'family_woman_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
    'fast_forward':'\u23e9',
    'fax':'\ud83d\udce0',
    'fearful':'\ud83d\ude28',
    'feet':'\ud83d\udc3e',
    'female_detective':'\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f',
    'ferris_wheel':'\ud83c\udfa1',
    'ferry':'\u26f4',
    'field_hockey':'\ud83c\udfd1',
    'file_cabinet':'\ud83d\uddc4',
    'file_folder':'\ud83d\udcc1',
    'film_projector':'\ud83d\udcfd',
    'film_strip':'\ud83c\udf9e',
    'fire':'\ud83d\udd25',
    'fire_engine':'\ud83d\ude92',
    'fireworks':'\ud83c\udf86',
    'first_quarter_moon':'\ud83c\udf13',
    'first_quarter_moon_with_face':'\ud83c\udf1b',
    'fish':'\ud83d\udc1f',
    'fish_cake':'\ud83c\udf65',
    'fishing_pole_and_fish':'\ud83c\udfa3',
    'fist_raised':'\u270a',
    'fist_left':'\ud83e\udd1b',
    'fist_right':'\ud83e\udd1c',
    'flags':'\ud83c\udf8f',
    'flashlight':'\ud83d\udd26',
    'fleur_de_lis':'\u269c\ufe0f',
    'flight_arrival':'\ud83d\udeec',
    'flight_departure':'\ud83d\udeeb',
    'floppy_disk':'\ud83d\udcbe',
    'flower_playing_cards':'\ud83c\udfb4',
    'flushed':'\ud83d\ude33',
    'fog':'\ud83c\udf2b',
    'foggy':'\ud83c\udf01',
    'football':'\ud83c\udfc8',
    'footprints':'\ud83d\udc63',
    'fork_and_knife':'\ud83c\udf74',
    'fountain':'\u26f2\ufe0f',
    'fountain_pen':'\ud83d\udd8b',
    'four_leaf_clover':'\ud83c\udf40',
    'fox_face':'\ud83e\udd8a',
    'framed_picture':'\ud83d\uddbc',
    'free':'\ud83c\udd93',
    'fried_egg':'\ud83c\udf73',
    'fried_shrimp':'\ud83c\udf64',
    'fries':'\ud83c\udf5f',
    'frog':'\ud83d\udc38',
    'frowning':'\ud83d\ude26',
    'frowning_face':'\u2639\ufe0f',
    'frowning_man':'\ud83d\ude4d&zwj;\u2642\ufe0f',
    'frowning_woman':'\ud83d\ude4d',
    'middle_finger':'\ud83d\udd95',
    'fuelpump':'\u26fd\ufe0f',
    'full_moon':'\ud83c\udf15',
    'full_moon_with_face':'\ud83c\udf1d',
    'funeral_urn':'\u26b1\ufe0f',
    'game_die':'\ud83c\udfb2',
    'gear':'\u2699\ufe0f',
    'gem':'\ud83d\udc8e',
    'gemini':'\u264a\ufe0f',
    'ghost':'\ud83d\udc7b',
    'gift':'\ud83c\udf81',
    'gift_heart':'\ud83d\udc9d',
    'girl':'\ud83d\udc67',
    'globe_with_meridians':'\ud83c\udf10',
    'goal_net':'\ud83e\udd45',
    'goat':'\ud83d\udc10',
    'golf':'\u26f3\ufe0f',
    'golfing_man':'\ud83c\udfcc\ufe0f',
    'golfing_woman':'\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f',
    'gorilla':'\ud83e\udd8d',
    'grapes':'\ud83c\udf47',
    'green_apple':'\ud83c\udf4f',
    'green_book':'\ud83d\udcd7',
    'green_heart':'\ud83d\udc9a',
    'green_salad':'\ud83e\udd57',
    'grey_exclamation':'\u2755',
    'grey_question':'\u2754',
    'grimacing':'\ud83d\ude2c',
    'grin':'\ud83d\ude01',
    'grinning':'\ud83d\ude00',
    'guardsman':'\ud83d\udc82',
    'guardswoman':'\ud83d\udc82&zwj;\u2640\ufe0f',
    'guitar':'\ud83c\udfb8',
    'gun':'\ud83d\udd2b',
    'haircut_woman':'\ud83d\udc87',
    'haircut_man':'\ud83d\udc87&zwj;\u2642\ufe0f',
    'hamburger':'\ud83c\udf54',
    'hammer':'\ud83d\udd28',
    'hammer_and_pick':'\u2692',
    'hammer_and_wrench':'\ud83d\udee0',
    'hamster':'\ud83d\udc39',
    'hand':'\u270b',
    'handbag':'\ud83d\udc5c',
    'handshake':'\ud83e\udd1d',
    'hankey':'\ud83d\udca9',
    'hatched_chick':'\ud83d\udc25',
    'hatching_chick':'\ud83d\udc23',
    'headphones':'\ud83c\udfa7',
    'hear_no_evil':'\ud83d\ude49',
    'heart':'\u2764\ufe0f',
    'heart_decoration':'\ud83d\udc9f',
    'heart_eyes':'\ud83d\ude0d',
    'heart_eyes_cat':'\ud83d\ude3b',
    'heartbeat':'\ud83d\udc93',
    'heartpulse':'\ud83d\udc97',
    'hearts':'\u2665\ufe0f',
    'heavy_check_mark':'\u2714\ufe0f',
    'heavy_division_sign':'\u2797',
    'heavy_dollar_sign':'\ud83d\udcb2',
    'heavy_heart_exclamation':'\u2763\ufe0f',
    'heavy_minus_sign':'\u2796',
    'heavy_multiplication_x':'\u2716\ufe0f',
    'heavy_plus_sign':'\u2795',
    'helicopter':'\ud83d\ude81',
    'herb':'\ud83c\udf3f',
    'hibiscus':'\ud83c\udf3a',
    'high_brightness':'\ud83d\udd06',
    'high_heel':'\ud83d\udc60',
    'hocho':'\ud83d\udd2a',
    'hole':'\ud83d\udd73',
    'honey_pot':'\ud83c\udf6f',
    'horse':'\ud83d\udc34',
    'horse_racing':'\ud83c\udfc7',
    'hospital':'\ud83c\udfe5',
    'hot_pepper':'\ud83c\udf36',
    'hotdog':'\ud83c\udf2d',
    'hotel':'\ud83c\udfe8',
    'hotsprings':'\u2668\ufe0f',
    'hourglass':'\u231b\ufe0f',
    'hourglass_flowing_sand':'\u23f3',
    'house':'\ud83c\udfe0',
    'house_with_garden':'\ud83c\udfe1',
    'houses':'\ud83c\udfd8',
    'hugs':'\ud83e\udd17',
    'hushed':'\ud83d\ude2f',
    'ice_cream':'\ud83c\udf68',
    'ice_hockey':'\ud83c\udfd2',
    'ice_skate':'\u26f8',
    'icecream':'\ud83c\udf66',
    'id':'\ud83c\udd94',
    'ideograph_advantage':'\ud83c\ude50',
    'imp':'\ud83d\udc7f',
    'inbox_tray':'\ud83d\udce5',
    'incoming_envelope':'\ud83d\udce8',
    'tipping_hand_woman':'\ud83d\udc81',
    'information_source':'\u2139\ufe0f',
    'innocent':'\ud83d\ude07',
    'interrobang':'\u2049\ufe0f',
    'iphone':'\ud83d\udcf1',
    'izakaya_lantern':'\ud83c\udfee',
    'jack_o_lantern':'\ud83c\udf83',
    'japan':'\ud83d\uddfe',
    'japanese_castle':'\ud83c\udfef',
    'japanese_goblin':'\ud83d\udc7a',
    'japanese_ogre':'\ud83d\udc79',
    'jeans':'\ud83d\udc56',
    'joy':'\ud83d\ude02',
    'joy_cat':'\ud83d\ude39',
    'joystick':'\ud83d\udd79',
    'kaaba':'\ud83d\udd4b',
    'key':'\ud83d\udd11',
    'keyboard':'\u2328\ufe0f',
    'keycap_ten':'\ud83d\udd1f',
    'kick_scooter':'\ud83d\udef4',
    'kimono':'\ud83d\udc58',
    'kiss':'\ud83d\udc8b',
    'kissing':'\ud83d\ude17',
    'kissing_cat':'\ud83d\ude3d',
    'kissing_closed_eyes':'\ud83d\ude1a',
    'kissing_heart':'\ud83d\ude18',
    'kissing_smiling_eyes':'\ud83d\ude19',
    'kiwi_fruit':'\ud83e\udd5d',
    'koala':'\ud83d\udc28',
    'koko':'\ud83c\ude01',
    'label':'\ud83c\udff7',
    'large_blue_circle':'\ud83d\udd35',
    'large_blue_diamond':'\ud83d\udd37',
    'large_orange_diamond':'\ud83d\udd36',
    'last_quarter_moon':'\ud83c\udf17',
    'last_quarter_moon_with_face':'\ud83c\udf1c',
    'latin_cross':'\u271d\ufe0f',
    'laughing':'\ud83d\ude06',
    'leaves':'\ud83c\udf43',
    'ledger':'\ud83d\udcd2',
    'left_luggage':'\ud83d\udec5',
    'left_right_arrow':'\u2194\ufe0f',
    'leftwards_arrow_with_hook':'\u21a9\ufe0f',
    'lemon':'\ud83c\udf4b',
    'leo':'\u264c\ufe0f',
    'leopard':'\ud83d\udc06',
    'level_slider':'\ud83c\udf9a',
    'libra':'\u264e\ufe0f',
    'light_rail':'\ud83d\ude88',
    'link':'\ud83d\udd17',
    'lion':'\ud83e\udd81',
    'lips':'\ud83d\udc44',
    'lipstick':'\ud83d\udc84',
    'lizard':'\ud83e\udd8e',
    'lock':'\ud83d\udd12',
    'lock_with_ink_pen':'\ud83d\udd0f',
    'lollipop':'\ud83c\udf6d',
    'loop':'\u27bf',
    'loud_sound':'\ud83d\udd0a',
    'loudspeaker':'\ud83d\udce2',
    'love_hotel':'\ud83c\udfe9',
    'love_letter':'\ud83d\udc8c',
    'low_brightness':'\ud83d\udd05',
    'lying_face':'\ud83e\udd25',
    'm':'\u24c2\ufe0f',
    'mag':'\ud83d\udd0d',
    'mag_right':'\ud83d\udd0e',
    'mahjong':'\ud83c\udc04\ufe0f',
    'mailbox':'\ud83d\udceb',
    'mailbox_closed':'\ud83d\udcea',
    'mailbox_with_mail':'\ud83d\udcec',
    'mailbox_with_no_mail':'\ud83d\udced',
    'man':'\ud83d\udc68',
    'man_artist':'\ud83d\udc68&zwj;\ud83c\udfa8',
    'man_astronaut':'\ud83d\udc68&zwj;\ud83d\ude80',
    'man_cartwheeling':'\ud83e\udd38&zwj;\u2642\ufe0f',
    'man_cook':'\ud83d\udc68&zwj;\ud83c\udf73',
    'man_dancing':'\ud83d\udd7a',
    'man_facepalming':'\ud83e\udd26&zwj;\u2642\ufe0f',
    'man_factory_worker':'\ud83d\udc68&zwj;\ud83c\udfed',
    'man_farmer':'\ud83d\udc68&zwj;\ud83c\udf3e',
    'man_firefighter':'\ud83d\udc68&zwj;\ud83d\ude92',
    'man_health_worker':'\ud83d\udc68&zwj;\u2695\ufe0f',
    'man_in_tuxedo':'\ud83e\udd35',
    'man_judge':'\ud83d\udc68&zwj;\u2696\ufe0f',
    'man_juggling':'\ud83e\udd39&zwj;\u2642\ufe0f',
    'man_mechanic':'\ud83d\udc68&zwj;\ud83d\udd27',
    'man_office_worker':'\ud83d\udc68&zwj;\ud83d\udcbc',
    'man_pilot':'\ud83d\udc68&zwj;\u2708\ufe0f',
    'man_playing_handball':'\ud83e\udd3e&zwj;\u2642\ufe0f',
    'man_playing_water_polo':'\ud83e\udd3d&zwj;\u2642\ufe0f',
    'man_scientist':'\ud83d\udc68&zwj;\ud83d\udd2c',
    'man_shrugging':'\ud83e\udd37&zwj;\u2642\ufe0f',
    'man_singer':'\ud83d\udc68&zwj;\ud83c\udfa4',
    'man_student':'\ud83d\udc68&zwj;\ud83c\udf93',
    'man_teacher':'\ud83d\udc68&zwj;\ud83c\udfeb',
    'man_technologist':'\ud83d\udc68&zwj;\ud83d\udcbb',
    'man_with_gua_pi_mao':'\ud83d\udc72',
    'man_with_turban':'\ud83d\udc73',
    'tangerine':'\ud83c\udf4a',
    'mans_shoe':'\ud83d\udc5e',
    'mantelpiece_clock':'\ud83d\udd70',
    'maple_leaf':'\ud83c\udf41',
    'martial_arts_uniform':'\ud83e\udd4b',
    'mask':'\ud83d\ude37',
    'massage_woman':'\ud83d\udc86',
    'massage_man':'\ud83d\udc86&zwj;\u2642\ufe0f',
    'meat_on_bone':'\ud83c\udf56',
    'medal_military':'\ud83c\udf96',
    'medal_sports':'\ud83c\udfc5',
    'mega':'\ud83d\udce3',
    'melon':'\ud83c\udf48',
    'memo':'\ud83d\udcdd',
    'men_wrestling':'\ud83e\udd3c&zwj;\u2642\ufe0f',
    'menorah':'\ud83d\udd4e',
    'mens':'\ud83d\udeb9',
    'metal':'\ud83e\udd18',
    'metro':'\ud83d\ude87',
    'microphone':'\ud83c\udfa4',
    'microscope':'\ud83d\udd2c',
    'milk_glass':'\ud83e\udd5b',
    'milky_way':'\ud83c\udf0c',
    'minibus':'\ud83d\ude90',
    'minidisc':'\ud83d\udcbd',
    'mobile_phone_off':'\ud83d\udcf4',
    'money_mouth_face':'\ud83e\udd11',
    'money_with_wings':'\ud83d\udcb8',
    'moneybag':'\ud83d\udcb0',
    'monkey':'\ud83d\udc12',
    'monkey_face':'\ud83d\udc35',
    'monorail':'\ud83d\ude9d',
    'moon':'\ud83c\udf14',
    'mortar_board':'\ud83c\udf93',
    'mosque':'\ud83d\udd4c',
    'motor_boat':'\ud83d\udee5',
    'motor_scooter':'\ud83d\udef5',
    'motorcycle':'\ud83c\udfcd',
    'motorway':'\ud83d\udee3',
    'mount_fuji':'\ud83d\uddfb',
    'mountain':'\u26f0',
    'mountain_biking_man':'\ud83d\udeb5',
    'mountain_biking_woman':'\ud83d\udeb5&zwj;\u2640\ufe0f',
    'mountain_cableway':'\ud83d\udea0',
    'mountain_railway':'\ud83d\ude9e',
    'mountain_snow':'\ud83c\udfd4',
    'mouse':'\ud83d\udc2d',
    'mouse2':'\ud83d\udc01',
    'movie_camera':'\ud83c\udfa5',
    'moyai':'\ud83d\uddff',
    'mrs_claus':'\ud83e\udd36',
    'muscle':'\ud83d\udcaa',
    'mushroom':'\ud83c\udf44',
    'musical_keyboard':'\ud83c\udfb9',
    'musical_note':'\ud83c\udfb5',
    'musical_score':'\ud83c\udfbc',
    'mute':'\ud83d\udd07',
    'nail_care':'\ud83d\udc85',
    'name_badge':'\ud83d\udcdb',
    'national_park':'\ud83c\udfde',
    'nauseated_face':'\ud83e\udd22',
    'necktie':'\ud83d\udc54',
    'negative_squared_cross_mark':'\u274e',
    'nerd_face':'\ud83e\udd13',
    'neutral_face':'\ud83d\ude10',
    'new':'\ud83c\udd95',
    'new_moon':'\ud83c\udf11',
    'new_moon_with_face':'\ud83c\udf1a',
    'newspaper':'\ud83d\udcf0',
    'newspaper_roll':'\ud83d\uddde',
    'next_track_button':'\u23ed',
    'ng':'\ud83c\udd96',
    'no_good_man':'\ud83d\ude45&zwj;\u2642\ufe0f',
    'no_good_woman':'\ud83d\ude45',
    'night_with_stars':'\ud83c\udf03',
    'no_bell':'\ud83d\udd15',
    'no_bicycles':'\ud83d\udeb3',
    'no_entry':'\u26d4\ufe0f',
    'no_entry_sign':'\ud83d\udeab',
    'no_mobile_phones':'\ud83d\udcf5',
    'no_mouth':'\ud83d\ude36',
    'no_pedestrians':'\ud83d\udeb7',
    'no_smoking':'\ud83d\udead',
    'non-potable_water':'\ud83d\udeb1',
    'nose':'\ud83d\udc43',
    'notebook':'\ud83d\udcd3',
    'notebook_with_decorative_cover':'\ud83d\udcd4',
    'notes':'\ud83c\udfb6',
    'nut_and_bolt':'\ud83d\udd29',
    'o':'\u2b55\ufe0f',
    'o2':'\ud83c\udd7e\ufe0f',
    'ocean':'\ud83c\udf0a',
    'octopus':'\ud83d\udc19',
    'oden':'\ud83c\udf62',
    'office':'\ud83c\udfe2',
    'oil_drum':'\ud83d\udee2',
    'ok':'\ud83c\udd97',
    'ok_hand':'\ud83d\udc4c',
    'ok_man':'\ud83d\ude46&zwj;\u2642\ufe0f',
    'ok_woman':'\ud83d\ude46',
    'old_key':'\ud83d\udddd',
    'older_man':'\ud83d\udc74',
    'older_woman':'\ud83d\udc75',
    'om':'\ud83d\udd49',
    'on':'\ud83d\udd1b',
    'oncoming_automobile':'\ud83d\ude98',
    'oncoming_bus':'\ud83d\ude8d',
    'oncoming_police_car':'\ud83d\ude94',
    'oncoming_taxi':'\ud83d\ude96',
    'open_file_folder':'\ud83d\udcc2',
    'open_hands':'\ud83d\udc50',
    'open_mouth':'\ud83d\ude2e',
    'open_umbrella':'\u2602\ufe0f',
    'ophiuchus':'\u26ce',
    'orange_book':'\ud83d\udcd9',
    'orthodox_cross':'\u2626\ufe0f',
    'outbox_tray':'\ud83d\udce4',
    'owl':'\ud83e\udd89',
    'ox':'\ud83d\udc02',
    'package':'\ud83d\udce6',
    'page_facing_up':'\ud83d\udcc4',
    'page_with_curl':'\ud83d\udcc3',
    'pager':'\ud83d\udcdf',
    'paintbrush':'\ud83d\udd8c',
    'palm_tree':'\ud83c\udf34',
    'pancakes':'\ud83e\udd5e',
    'panda_face':'\ud83d\udc3c',
    'paperclip':'\ud83d\udcce',
    'paperclips':'\ud83d\udd87',
    'parasol_on_ground':'\u26f1',
    'parking':'\ud83c\udd7f\ufe0f',
    'part_alternation_mark':'\u303d\ufe0f',
    'partly_sunny':'\u26c5\ufe0f',
    'passenger_ship':'\ud83d\udef3',
    'passport_control':'\ud83d\udec2',
    'pause_button':'\u23f8',
    'peace_symbol':'\u262e\ufe0f',
    'peach':'\ud83c\udf51',
    'peanuts':'\ud83e\udd5c',
    'pear':'\ud83c\udf50',
    'pen':'\ud83d\udd8a',
    'pencil2':'\u270f\ufe0f',
    'penguin':'\ud83d\udc27',
    'pensive':'\ud83d\ude14',
    'performing_arts':'\ud83c\udfad',
    'persevere':'\ud83d\ude23',
    'person_fencing':'\ud83e\udd3a',
    'pouting_woman':'\ud83d\ude4e',
    'phone':'\u260e\ufe0f',
    'pick':'\u26cf',
    'pig':'\ud83d\udc37',
    'pig2':'\ud83d\udc16',
    'pig_nose':'\ud83d\udc3d',
    'pill':'\ud83d\udc8a',
    'pineapple':'\ud83c\udf4d',
    'ping_pong':'\ud83c\udfd3',
    'pisces':'\u2653\ufe0f',
    'pizza':'\ud83c\udf55',
    'place_of_worship':'\ud83d\uded0',
    'plate_with_cutlery':'\ud83c\udf7d',
    'play_or_pause_button':'\u23ef',
    'point_down':'\ud83d\udc47',
    'point_left':'\ud83d\udc48',
    'point_right':'\ud83d\udc49',
    'point_up':'\u261d\ufe0f',
    'point_up_2':'\ud83d\udc46',
    'police_car':'\ud83d\ude93',
    'policewoman':'\ud83d\udc6e&zwj;\u2640\ufe0f',
    'poodle':'\ud83d\udc29',
    'popcorn':'\ud83c\udf7f',
    'post_office':'\ud83c\udfe3',
    'postal_horn':'\ud83d\udcef',
    'postbox':'\ud83d\udcee',
    'potable_water':'\ud83d\udeb0',
    'potato':'\ud83e\udd54',
    'pouch':'\ud83d\udc5d',
    'poultry_leg':'\ud83c\udf57',
    'pound':'\ud83d\udcb7',
    'rage':'\ud83d\ude21',
    'pouting_cat':'\ud83d\ude3e',
    'pouting_man':'\ud83d\ude4e&zwj;\u2642\ufe0f',
    'pray':'\ud83d\ude4f',
    'prayer_beads':'\ud83d\udcff',
    'pregnant_woman':'\ud83e\udd30',
    'previous_track_button':'\u23ee',
    'prince':'\ud83e\udd34',
    'princess':'\ud83d\udc78',
    'printer':'\ud83d\udda8',
    'purple_heart':'\ud83d\udc9c',
    'purse':'\ud83d\udc5b',
    'pushpin':'\ud83d\udccc',
    'put_litter_in_its_place':'\ud83d\udeae',
    'question':'\u2753',
    'rabbit':'\ud83d\udc30',
    'rabbit2':'\ud83d\udc07',
    'racehorse':'\ud83d\udc0e',
    'racing_car':'\ud83c\udfce',
    'radio':'\ud83d\udcfb',
    'radio_button':'\ud83d\udd18',
    'radioactive':'\u2622\ufe0f',
    'railway_car':'\ud83d\ude83',
    'railway_track':'\ud83d\udee4',
    'rainbow':'\ud83c\udf08',
    'rainbow_flag':'\ud83c\udff3\ufe0f&zwj;\ud83c\udf08',
    'raised_back_of_hand':'\ud83e\udd1a',
    'raised_hand_with_fingers_splayed':'\ud83d\udd90',
    'raised_hands':'\ud83d\ude4c',
    'raising_hand_woman':'\ud83d\ude4b',
    'raising_hand_man':'\ud83d\ude4b&zwj;\u2642\ufe0f',
    'ram':'\ud83d\udc0f',
    'ramen':'\ud83c\udf5c',
    'rat':'\ud83d\udc00',
    'record_button':'\u23fa',
    'recycle':'\u267b\ufe0f',
    'red_circle':'\ud83d\udd34',
    'registered':'\u00ae\ufe0f',
    'relaxed':'\u263a\ufe0f',
    'relieved':'\ud83d\ude0c',
    'reminder_ribbon':'\ud83c\udf97',
    'repeat':'\ud83d\udd01',
    'repeat_one':'\ud83d\udd02',
    'rescue_worker_helmet':'\u26d1',
    'restroom':'\ud83d\udebb',
    'revolving_hearts':'\ud83d\udc9e',
    'rewind':'\u23ea',
    'rhinoceros':'\ud83e\udd8f',
    'ribbon':'\ud83c\udf80',
    'rice':'\ud83c\udf5a',
    'rice_ball':'\ud83c\udf59',
    'rice_cracker':'\ud83c\udf58',
    'rice_scene':'\ud83c\udf91',
    'right_anger_bubble':'\ud83d\uddef',
    'ring':'\ud83d\udc8d',
    'robot':'\ud83e\udd16',
    'rocket':'\ud83d\ude80',
    'rofl':'\ud83e\udd23',
    'roll_eyes':'\ud83d\ude44',
    'roller_coaster':'\ud83c\udfa2',
    'rooster':'\ud83d\udc13',
    'rose':'\ud83c\udf39',
    'rosette':'\ud83c\udff5',
    'rotating_light':'\ud83d\udea8',
    'round_pushpin':'\ud83d\udccd',
    'rowing_man':'\ud83d\udea3',
    'rowing_woman':'\ud83d\udea3&zwj;\u2640\ufe0f',
    'rugby_football':'\ud83c\udfc9',
    'running_man':'\ud83c\udfc3',
    'running_shirt_with_sash':'\ud83c\udfbd',
    'running_woman':'\ud83c\udfc3&zwj;\u2640\ufe0f',
    'sa':'\ud83c\ude02\ufe0f',
    'sagittarius':'\u2650\ufe0f',
    'sake':'\ud83c\udf76',
    'sandal':'\ud83d\udc61',
    'santa':'\ud83c\udf85',
    'satellite':'\ud83d\udce1',
    'saxophone':'\ud83c\udfb7',
    'school':'\ud83c\udfeb',
    'school_satchel':'\ud83c\udf92',
    'scissors':'\u2702\ufe0f',
    'scorpion':'\ud83e\udd82',
    'scorpius':'\u264f\ufe0f',
    'scream':'\ud83d\ude31',
    'scream_cat':'\ud83d\ude40',
    'scroll':'\ud83d\udcdc',
    'seat':'\ud83d\udcba',
    'secret':'\u3299\ufe0f',
    'see_no_evil':'\ud83d\ude48',
    'seedling':'\ud83c\udf31',
    'selfie':'\ud83e\udd33',
    'shallow_pan_of_food':'\ud83e\udd58',
    'shamrock':'\u2618\ufe0f',
    'shark':'\ud83e\udd88',
    'shaved_ice':'\ud83c\udf67',
    'sheep':'\ud83d\udc11',
    'shell':'\ud83d\udc1a',
    'shield':'\ud83d\udee1',
    'shinto_shrine':'\u26e9',
    'ship':'\ud83d\udea2',
    'shirt':'\ud83d\udc55',
    'shopping':'\ud83d\udecd',
    'shopping_cart':'\ud83d\uded2',
    'shower':'\ud83d\udebf',
    'shrimp':'\ud83e\udd90',
    'signal_strength':'\ud83d\udcf6',
    'six_pointed_star':'\ud83d\udd2f',
    'ski':'\ud83c\udfbf',
    'skier':'\u26f7',
    'skull':'\ud83d\udc80',
    'skull_and_crossbones':'\u2620\ufe0f',
    'sleeping':'\ud83d\ude34',
    'sleeping_bed':'\ud83d\udecc',
    'sleepy':'\ud83d\ude2a',
    'slightly_frowning_face':'\ud83d\ude41',
    'slightly_smiling_face':'\ud83d\ude42',
    'slot_machine':'\ud83c\udfb0',
    'small_airplane':'\ud83d\udee9',
    'small_blue_diamond':'\ud83d\udd39',
    'small_orange_diamond':'\ud83d\udd38',
    'small_red_triangle':'\ud83d\udd3a',
    'small_red_triangle_down':'\ud83d\udd3b',
    'smile':'\ud83d\ude04',
    'smile_cat':'\ud83d\ude38',
    'smiley':'\ud83d\ude03',
    'smiley_cat':'\ud83d\ude3a',
    'smiling_imp':'\ud83d\ude08',
    'smirk':'\ud83d\ude0f',
    'smirk_cat':'\ud83d\ude3c',
    'smoking':'\ud83d\udeac',
    'snail':'\ud83d\udc0c',
    'snake':'\ud83d\udc0d',
    'sneezing_face':'\ud83e\udd27',
    'snowboarder':'\ud83c\udfc2',
    'snowflake':'\u2744\ufe0f',
    'snowman':'\u26c4\ufe0f',
    'snowman_with_snow':'\u2603\ufe0f',
    'sob':'\ud83d\ude2d',
    'soccer':'\u26bd\ufe0f',
    'soon':'\ud83d\udd1c',
    'sos':'\ud83c\udd98',
    'sound':'\ud83d\udd09',
    'space_invader':'\ud83d\udc7e',
    'spades':'\u2660\ufe0f',
    'spaghetti':'\ud83c\udf5d',
    'sparkle':'\u2747\ufe0f',
    'sparkler':'\ud83c\udf87',
    'sparkles':'\u2728',
    'sparkling_heart':'\ud83d\udc96',
    'speak_no_evil':'\ud83d\ude4a',
    'speaker':'\ud83d\udd08',
    'speaking_head':'\ud83d\udde3',
    'speech_balloon':'\ud83d\udcac',
    'speedboat':'\ud83d\udea4',
    'spider':'\ud83d\udd77',
    'spider_web':'\ud83d\udd78',
    'spiral_calendar':'\ud83d\uddd3',
    'spiral_notepad':'\ud83d\uddd2',
    'spoon':'\ud83e\udd44',
    'squid':'\ud83e\udd91',
    'stadium':'\ud83c\udfdf',
    'star':'\u2b50\ufe0f',
    'star2':'\ud83c\udf1f',
    'star_and_crescent':'\u262a\ufe0f',
    'star_of_david':'\u2721\ufe0f',
    'stars':'\ud83c\udf20',
    'station':'\ud83d\ude89',
    'statue_of_liberty':'\ud83d\uddfd',
    'steam_locomotive':'\ud83d\ude82',
    'stew':'\ud83c\udf72',
    'stop_button':'\u23f9',
    'stop_sign':'\ud83d\uded1',
    'stopwatch':'\u23f1',
    'straight_ruler':'\ud83d\udccf',
    'strawberry':'\ud83c\udf53',
    'stuck_out_tongue':'\ud83d\ude1b',
    'stuck_out_tongue_closed_eyes':'\ud83d\ude1d',
    'stuck_out_tongue_winking_eye':'\ud83d\ude1c',
    'studio_microphone':'\ud83c\udf99',
    'stuffed_flatbread':'\ud83e\udd59',
    'sun_behind_large_cloud':'\ud83c\udf25',
    'sun_behind_rain_cloud':'\ud83c\udf26',
    'sun_behind_small_cloud':'\ud83c\udf24',
    'sun_with_face':'\ud83c\udf1e',
    'sunflower':'\ud83c\udf3b',
    'sunglasses':'\ud83d\ude0e',
    'sunny':'\u2600\ufe0f',
    'sunrise':'\ud83c\udf05',
    'sunrise_over_mountains':'\ud83c\udf04',
    'surfing_man':'\ud83c\udfc4',
    'surfing_woman':'\ud83c\udfc4&zwj;\u2640\ufe0f',
    'sushi':'\ud83c\udf63',
    'suspension_railway':'\ud83d\ude9f',
    'sweat':'\ud83d\ude13',
    'sweat_drops':'\ud83d\udca6',
    'sweat_smile':'\ud83d\ude05',
    'sweet_potato':'\ud83c\udf60',
    'swimming_man':'\ud83c\udfca',
    'swimming_woman':'\ud83c\udfca&zwj;\u2640\ufe0f',
    'symbols':'\ud83d\udd23',
    'synagogue':'\ud83d\udd4d',
    'syringe':'\ud83d\udc89',
    'taco':'\ud83c\udf2e',
    'tada':'\ud83c\udf89',
    'tanabata_tree':'\ud83c\udf8b',
    'taurus':'\u2649\ufe0f',
    'taxi':'\ud83d\ude95',
    'tea':'\ud83c\udf75',
    'telephone_receiver':'\ud83d\udcde',
    'telescope':'\ud83d\udd2d',
    'tennis':'\ud83c\udfbe',
    'tent':'\u26fa\ufe0f',
    'thermometer':'\ud83c\udf21',
    'thinking':'\ud83e\udd14',
    'thought_balloon':'\ud83d\udcad',
    'ticket':'\ud83c\udfab',
    'tickets':'\ud83c\udf9f',
    'tiger':'\ud83d\udc2f',
    'tiger2':'\ud83d\udc05',
    'timer_clock':'\u23f2',
    'tipping_hand_man':'\ud83d\udc81&zwj;\u2642\ufe0f',
    'tired_face':'\ud83d\ude2b',
    'tm':'\u2122\ufe0f',
    'toilet':'\ud83d\udebd',
    'tokyo_tower':'\ud83d\uddfc',
    'tomato':'\ud83c\udf45',
    'tongue':'\ud83d\udc45',
    'top':'\ud83d\udd1d',
    'tophat':'\ud83c\udfa9',
    'tornado':'\ud83c\udf2a',
    'trackball':'\ud83d\uddb2',
    'tractor':'\ud83d\ude9c',
    'traffic_light':'\ud83d\udea5',
    'train':'\ud83d\ude8b',
    'train2':'\ud83d\ude86',
    'tram':'\ud83d\ude8a',
    'triangular_flag_on_post':'\ud83d\udea9',
    'triangular_ruler':'\ud83d\udcd0',
    'trident':'\ud83d\udd31',
    'triumph':'\ud83d\ude24',
    'trolleybus':'\ud83d\ude8e',
    'trophy':'\ud83c\udfc6',
    'tropical_drink':'\ud83c\udf79',
    'tropical_fish':'\ud83d\udc20',
    'truck':'\ud83d\ude9a',
    'trumpet':'\ud83c\udfba',
    'tulip':'\ud83c\udf37',
    'tumbler_glass':'\ud83e\udd43',
    'turkey':'\ud83e\udd83',
    'turtle':'\ud83d\udc22',
    'tv':'\ud83d\udcfa',
    'twisted_rightwards_arrows':'\ud83d\udd00',
    'two_hearts':'\ud83d\udc95',
    'two_men_holding_hands':'\ud83d\udc6c',
    'two_women_holding_hands':'\ud83d\udc6d',
    'u5272':'\ud83c\ude39',
    'u5408':'\ud83c\ude34',
    'u55b6':'\ud83c\ude3a',
    'u6307':'\ud83c\ude2f\ufe0f',
    'u6708':'\ud83c\ude37\ufe0f',
    'u6709':'\ud83c\ude36',
    'u6e80':'\ud83c\ude35',
    'u7121':'\ud83c\ude1a\ufe0f',
    'u7533':'\ud83c\ude38',
    'u7981':'\ud83c\ude32',
    'u7a7a':'\ud83c\ude33',
    'umbrella':'\u2614\ufe0f',
    'unamused':'\ud83d\ude12',
    'underage':'\ud83d\udd1e',
    'unicorn':'\ud83e\udd84',
    'unlock':'\ud83d\udd13',
    'up':'\ud83c\udd99',
    'upside_down_face':'\ud83d\ude43',
    'v':'\u270c\ufe0f',
    'vertical_traffic_light':'\ud83d\udea6',
    'vhs':'\ud83d\udcfc',
    'vibration_mode':'\ud83d\udcf3',
    'video_camera':'\ud83d\udcf9',
    'video_game':'\ud83c\udfae',
    'violin':'\ud83c\udfbb',
    'virgo':'\u264d\ufe0f',
    'volcano':'\ud83c\udf0b',
    'volleyball':'\ud83c\udfd0',
    'vs':'\ud83c\udd9a',
    'vulcan_salute':'\ud83d\udd96',
    'walking_man':'\ud83d\udeb6',
    'walking_woman':'\ud83d\udeb6&zwj;\u2640\ufe0f',
    'waning_crescent_moon':'\ud83c\udf18',
    'waning_gibbous_moon':'\ud83c\udf16',
    'warning':'\u26a0\ufe0f',
    'wastebasket':'\ud83d\uddd1',
    'watch':'\u231a\ufe0f',
    'water_buffalo':'\ud83d\udc03',
    'watermelon':'\ud83c\udf49',
    'wave':'\ud83d\udc4b',
    'wavy_dash':'\u3030\ufe0f',
    'waxing_crescent_moon':'\ud83c\udf12',
    'wc':'\ud83d\udebe',
    'weary':'\ud83d\ude29',
    'wedding':'\ud83d\udc92',
    'weight_lifting_man':'\ud83c\udfcb\ufe0f',
    'weight_lifting_woman':'\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f',
    'whale':'\ud83d\udc33',
    'whale2':'\ud83d\udc0b',
    'wheel_of_dharma':'\u2638\ufe0f',
    'wheelchair':'\u267f\ufe0f',
    'white_check_mark':'\u2705',
    'white_circle':'\u26aa\ufe0f',
    'white_flag':'\ud83c\udff3\ufe0f',
    'white_flower':'\ud83d\udcae',
    'white_large_square':'\u2b1c\ufe0f',
    'white_medium_small_square':'\u25fd\ufe0f',
    'white_medium_square':'\u25fb\ufe0f',
    'white_small_square':'\u25ab\ufe0f',
    'white_square_button':'\ud83d\udd33',
    'wilted_flower':'\ud83e\udd40',
    'wind_chime':'\ud83c\udf90',
    'wind_face':'\ud83c\udf2c',
    'wine_glass':'\ud83c\udf77',
    'wink':'\ud83d\ude09',
    'wolf':'\ud83d\udc3a',
    'woman':'\ud83d\udc69',
    'woman_artist':'\ud83d\udc69&zwj;\ud83c\udfa8',
    'woman_astronaut':'\ud83d\udc69&zwj;\ud83d\ude80',
    'woman_cartwheeling':'\ud83e\udd38&zwj;\u2640\ufe0f',
    'woman_cook':'\ud83d\udc69&zwj;\ud83c\udf73',
    'woman_facepalming':'\ud83e\udd26&zwj;\u2640\ufe0f',
    'woman_factory_worker':'\ud83d\udc69&zwj;\ud83c\udfed',
    'woman_farmer':'\ud83d\udc69&zwj;\ud83c\udf3e',
    'woman_firefighter':'\ud83d\udc69&zwj;\ud83d\ude92',
    'woman_health_worker':'\ud83d\udc69&zwj;\u2695\ufe0f',
    'woman_judge':'\ud83d\udc69&zwj;\u2696\ufe0f',
    'woman_juggling':'\ud83e\udd39&zwj;\u2640\ufe0f',
    'woman_mechanic':'\ud83d\udc69&zwj;\ud83d\udd27',
    'woman_office_worker':'\ud83d\udc69&zwj;\ud83d\udcbc',
    'woman_pilot':'\ud83d\udc69&zwj;\u2708\ufe0f',
    'woman_playing_handball':'\ud83e\udd3e&zwj;\u2640\ufe0f',
    'woman_playing_water_polo':'\ud83e\udd3d&zwj;\u2640\ufe0f',
    'woman_scientist':'\ud83d\udc69&zwj;\ud83d\udd2c',
    'woman_shrugging':'\ud83e\udd37&zwj;\u2640\ufe0f',
    'woman_singer':'\ud83d\udc69&zwj;\ud83c\udfa4',
    'woman_student':'\ud83d\udc69&zwj;\ud83c\udf93',
    'woman_teacher':'\ud83d\udc69&zwj;\ud83c\udfeb',
    'woman_technologist':'\ud83d\udc69&zwj;\ud83d\udcbb',
    'woman_with_turban':'\ud83d\udc73&zwj;\u2640\ufe0f',
    'womans_clothes':'\ud83d\udc5a',
    'womans_hat':'\ud83d\udc52',
    'women_wrestling':'\ud83e\udd3c&zwj;\u2640\ufe0f',
    'womens':'\ud83d\udeba',
    'world_map':'\ud83d\uddfa',
    'worried':'\ud83d\ude1f',
    'wrench':'\ud83d\udd27',
    'writing_hand':'\u270d\ufe0f',
    'x':'\u274c',
    'yellow_heart':'\ud83d\udc9b',
    'yen':'\ud83d\udcb4',
    'yin_yang':'\u262f\ufe0f',
    'yum':'\ud83d\ude0b',
    'zap':'\u26a1\ufe0f',
    'zipper_mouth_face':'\ud83e\udd10',
    'zzz':'\ud83d\udca4',
  
    /* special emojis :P */
    'octocat':  '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
    'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
  };
  
  /**
   * Created by Estevao on 31-05-2015.
   */
  
  /**
   * Showdown Converter class
   * @class
   * @param {object} [converterOptions]
   * @returns {Converter}
   */
  showdown.Converter = function (converterOptions) {
    'use strict';
  
    var
        /**
         * Options used by this converter
         * @private
         * @type {{}}
         */
        options = {},
  
        /**
         * Language extensions used by this converter
         * @private
         * @type {Array}
         */
        langExtensions = [],
  
        /**
         * Output modifiers extensions used by this converter
         * @private
         * @type {Array}
         */
        outputModifiers = [],
  
        /**
         * Event listeners
         * @private
         * @type {{}}
         */
        listeners = {},
  
        /**
         * The flavor set in this converter
         */
        setConvFlavor = setFlavor,
  
        /**
         * Metadata of the document
         * @type {{parsed: {}, raw: string, format: string}}
         */
        metadata = {
          parsed: {},
          raw: '',
          format: ''
        };
  
    _constructor();
  
    /**
     * Converter constructor
     * @private
     */
    function _constructor () {
      converterOptions = converterOptions || {};
  
      for (var gOpt in globalOptions) {
        if (globalOptions.hasOwnProperty(gOpt)) {
          options[gOpt] = globalOptions[gOpt];
        }
      }
  
      // Merge options
      if (typeof converterOptions === 'object') {
        for (var opt in converterOptions) {
          if (converterOptions.hasOwnProperty(opt)) {
            options[opt] = converterOptions[opt];
          }
        }
      } else {
        throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
        ' was passed instead.');
      }
  
      if (options.extensions) {
        showdown.helper.forEach(options.extensions, _parseExtension);
      }
    }
  
    /**
     * Parse extension
     * @param {*} ext
     * @param {string} [name='']
     * @private
     */
    function _parseExtension (ext, name) {
  
      name = name || null;
      // If it's a string, the extension was previously loaded
      if (showdown.helper.isString(ext)) {
        ext = showdown.helper.stdExtName(ext);
        name = ext;
  
        // LEGACY_SUPPORT CODE
        if (showdown.extensions[ext]) {
          console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
            'Please inform the developer that the extension should be updated!');
          legacyExtensionLoading(showdown.extensions[ext], ext);
          return;
          // END LEGACY SUPPORT CODE
  
        } else if (!showdown.helper.isUndefined(extensions[ext])) {
          ext = extensions[ext];
  
        } else {
          throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
        }
      }
  
      if (typeof ext === 'function') {
        ext = ext();
      }
  
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
  
      var validExt = validate(ext, name);
      if (!validExt.valid) {
        throw Error(validExt.error);
      }
  
      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
  
          case 'lang':
            langExtensions.push(ext[i]);
            break;
  
          case 'output':
            outputModifiers.push(ext[i]);
            break;
        }
        if (ext[i].hasOwnProperty('listeners')) {
          for (var ln in ext[i].listeners) {
            if (ext[i].listeners.hasOwnProperty(ln)) {
              listen(ln, ext[i].listeners[ln]);
            }
          }
        }
      }
  
    }
  
    /**
     * LEGACY_SUPPORT
     * @param {*} ext
     * @param {string} name
     */
    function legacyExtensionLoading (ext, name) {
      if (typeof ext === 'function') {
        ext = ext(new showdown.Converter());
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var valid = validate(ext, name);
  
      if (!valid.valid) {
        throw Error(valid.error);
      }
  
      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
          case 'lang':
            langExtensions.push(ext[i]);
            break;
          case 'output':
            outputModifiers.push(ext[i]);
            break;
          default:// should never reach here
            throw Error('Extension loader error: Type unrecognized!!!');
        }
      }
    }
  
    /**
     * Listen to an event
     * @param {string} name
     * @param {function} callback
     */
    function listen (name, callback) {
      if (!showdown.helper.isString(name)) {
        throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
      }
  
      if (typeof callback !== 'function') {
        throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
      }
  
      if (!listeners.hasOwnProperty(name)) {
        listeners[name] = [];
      }
      listeners[name].push(callback);
    }
  
    function rTrimInputText (text) {
      var rsp = text.match(/^\s*/)[0].length,
          rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
      return text.replace(rgx, '');
    }
  
    /**
     * Dispatch an event
     * @private
     * @param {string} evtName Event name
     * @param {string} text Text
     * @param {{}} options Converter Options
     * @param {{}} globals
     * @returns {string}
     */
    this._dispatch = function dispatch (evtName, text, options, globals) {
      if (listeners.hasOwnProperty(evtName)) {
        for (var ei = 0; ei < listeners[evtName].length; ++ei) {
          var nText = listeners[evtName][ei](evtName, text, this, options, globals);
          if (nText && typeof nText !== 'undefined') {
            text = nText;
          }
        }
      }
      return text;
    };
  
    /**
     * Listen to an event
     * @param {string} name
     * @param {function} callback
     * @returns {showdown.Converter}
     */
    this.listen = function (name, callback) {
      listen(name, callback);
      return this;
    };
  
    /**
     * Converts a markdown string into HTML
     * @param {string} text
     * @returns {*}
     */
    this.makeHtml = function (text) {
      //check if text is not falsy
      if (!text) {
        return text;
      }
  
      var globals = {
        gHtmlBlocks:     [],
        gHtmlMdBlocks:   [],
        gHtmlSpans:      [],
        gUrls:           {},
        gTitles:         {},
        gDimensions:     {},
        gListLevel:      0,
        hashLinkCounts:  {},
        langExtensions:  langExtensions,
        outputModifiers: outputModifiers,
        converter:       this,
        ghCodeBlocks:    [],
        metadata: {
          parsed: {},
          raw: '',
          format: ''
        }
      };
  
      // This lets us use ¨ trema as an escape char to avoid md5 hashes
      // The choice of character is arbitrary; anything that isn't
      // magic in Markdown will work.
      text = text.replace(/¨/g, '¨T');
  
      // Replace $ with ¨D
      // RegExp interprets $ as a special character
      // when it's in a replacement string
      text = text.replace(/\$/g, '¨D');
  
      // Standardize line endings
      text = text.replace(/\r\n/g, '\n'); // DOS to Unix
      text = text.replace(/\r/g, '\n'); // Mac to Unix
  
      // Stardardize line spaces
      text = text.replace(/\u00A0/g, '&nbsp;');
  
      if (options.smartIndentationFix) {
        text = rTrimInputText(text);
      }
  
      // Make sure text begins and ends with a couple of newlines:
      text = '\n\n' + text + '\n\n';
  
      // detab
      text = showdown.subParser('detab')(text, options, globals);
  
      /**
       * Strip any lines consisting only of spaces and tabs.
       * This makes subsequent regexs easier to write, because we can
       * match consecutive blank lines with /\n+/ instead of something
       * contorted like /[ \t]*\n+/
       */
      text = text.replace(/^[ \t]+$/mg, '');
  
      //run languageExtensions
      showdown.helper.forEach(langExtensions, function (ext) {
        text = showdown.subParser('runExtension')(ext, text, options, globals);
      });
  
      // run the sub parsers
      text = showdown.subParser('metadata')(text, options, globals);
      text = showdown.subParser('hashPreCodeTags')(text, options, globals);
      text = showdown.subParser('githubCodeBlocks')(text, options, globals);
      text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
      text = showdown.subParser('hashCodeTags')(text, options, globals);
      text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
      text = showdown.subParser('blockGamut')(text, options, globals);
      text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
      text = showdown.subParser('unescapeSpecialChars')(text, options, globals);
  
      // attacklab: Restore dollar signs
      text = text.replace(/¨D/g, '$$');
  
      // attacklab: Restore tremas
      text = text.replace(/¨T/g, '¨');
  
      // render a complete html document instead of a partial if the option is enabled
      text = showdown.subParser('completeHTMLDocument')(text, options, globals);
  
      // Run output modifiers
      showdown.helper.forEach(outputModifiers, function (ext) {
        text = showdown.subParser('runExtension')(ext, text, options, globals);
      });
  
      // update metadata
      metadata = globals.metadata;
      return text;
    };
  
    /**
     * Converts an HTML string into a markdown string
     * @param src
     * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
     * @returns {string}
     */
    this.makeMarkdown = this.makeMd = function (src, HTMLParser) {
  
      // replace \r\n with \n
      src = src.replace(/\r\n/g, '\n');
      src = src.replace(/\r/g, '\n'); // old macs
  
      // due to an edge case, we need to find this: > <
      // to prevent removing of non silent white spaces
      // ex: <em>this is</em> <strong>sparta</strong>
      src = src.replace(/>[ \t]+</, '>¨NBSP;<');
  
      if (!HTMLParser) {
        if (window && window.document) {
          HTMLParser = window.document;
        } else {
          throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
        }
      }
  
      var doc = HTMLParser.createElement('div');
      doc.innerHTML = src;
  
      var globals = {
        preList: substitutePreCodeTags(doc)
      };
  
      // remove all newlines and collapse spaces
      clean(doc);
  
      // some stuff, like accidental reference links must now be escaped
      // TODO
      // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);
  
      var nodes = doc.childNodes,
          mdDoc = '';
  
      for (var i = 0; i < nodes.length; i++) {
        mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
      }
  
      function clean (node) {
        for (var n = 0; n < node.childNodes.length; ++n) {
          var child = node.childNodes[n];
          if (child.nodeType === 3) {
            if (!/\S/.test(child.nodeValue)) {
              node.removeChild(child);
              --n;
            } else {
              child.nodeValue = child.nodeValue.split('\n').join(' ');
              child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
            }
          } else if (child.nodeType === 1) {
            clean(child);
          }
        }
      }
  
      // find all pre tags and replace contents with placeholder
      // we need this so that we can remove all indentation from html
      // to ease up parsing
      function substitutePreCodeTags (doc) {
  
        var pres = doc.querySelectorAll('pre'),
            presPH = [];
  
        for (var i = 0; i < pres.length; ++i) {
  
          if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
            var content = pres[i].firstChild.innerHTML.trim(),
                language = pres[i].firstChild.getAttribute('data-language') || '';
  
            // if data-language attribute is not defined, then we look for class language-*
            if (language === '') {
              var classes = pres[i].firstChild.className.split(' ');
              for (var c = 0; c < classes.length; ++c) {
                var matches = classes[c].match(/^language-(.+)$/);
                if (matches !== null) {
                  language = matches[1];
                  break;
                }
              }
            }
  
            // unescape html entities in content
            content = showdown.helper.unescapeHTMLEntities(content);
  
            presPH.push(content);
            pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
          } else {
            presPH.push(pres[i].innerHTML);
            pres[i].innerHTML = '';
            pres[i].setAttribute('prenum', i.toString());
          }
        }
        return presPH;
      }
  
      return mdDoc;
    };
  
    /**
     * Set an option of this Converter instance
     * @param {string} key
     * @param {*} value
     */
    this.setOption = function (key, value) {
      options[key] = value;
    };
  
    /**
     * Get the option of this Converter instance
     * @param {string} key
     * @returns {*}
     */
    this.getOption = function (key) {
      return options[key];
    };
  
    /**
     * Get the options of this Converter instance
     * @returns {{}}
     */
    this.getOptions = function () {
      return options;
    };
  
    /**
     * Add extension to THIS converter
     * @param {{}} extension
     * @param {string} [name=null]
     */
    this.addExtension = function (extension, name) {
      name = name || null;
      _parseExtension(extension, name);
    };
  
    /**
     * Use a global registered extension with THIS converter
     * @param {string} extensionName Name of the previously registered extension
     */
    this.useExtension = function (extensionName) {
      _parseExtension(extensionName);
    };
  
    /**
     * Set the flavor THIS converter should use
     * @param {string} name
     */
    this.setFlavor = function (name) {
      if (!flavor.hasOwnProperty(name)) {
        throw Error(name + ' flavor was not found');
      }
      var preset = flavor[name];
      setConvFlavor = name;
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          options[option] = preset[option];
        }
      }
    };
  
    /**
     * Get the currently set flavor of this converter
     * @returns {string}
     */
    this.getFlavor = function () {
      return setConvFlavor;
    };
  
    /**
     * Remove an extension from THIS converter.
     * Note: This is a costly operation. It's better to initialize a new converter
     * and specify the extensions you wish to use
     * @param {Array} extension
     */
    this.removeExtension = function (extension) {
      if (!showdown.helper.isArray(extension)) {
        extension = [extension];
      }
      for (var a = 0; a < extension.length; ++a) {
        var ext = extension[a];
        for (var i = 0; i < langExtensions.length; ++i) {
          if (langExtensions[i] === ext) {
            langExtensions[i].splice(i, 1);
          }
        }
        for (var ii = 0; ii < outputModifiers.length; ++i) {
          if (outputModifiers[ii] === ext) {
            outputModifiers[ii].splice(i, 1);
          }
        }
      }
    };
  
    /**
     * Get all extension of THIS converter
     * @returns {{language: Array, output: Array}}
     */
    this.getAllExtensions = function () {
      return {
        language: langExtensions,
        output: outputModifiers
      };
    };
  
    /**
     * Get the metadata of the previously parsed document
     * @param raw
     * @returns {string|{}}
     */
    this.getMetadata = function (raw) {
      if (raw) {
        return metadata.raw;
      } else {
        return metadata.parsed;
      }
    };
  
    /**
     * Get the metadata format of the previously parsed document
     * @returns {string}
     */
    this.getMetadataFormat = function () {
      return metadata.format;
    };
  
    /**
     * Private: set a single key, value metadata pair
     * @param {string} key
     * @param {string} value
     */
    this._setMetadataPair = function (key, value) {
      metadata.parsed[key] = value;
    };
  
    /**
     * Private: set metadata format
     * @param {string} format
     */
    this._setMetadataFormat = function (format) {
      metadata.format = format;
    };
  
    /**
     * Private: set metadata raw text
     * @param {string} raw
     */
    this._setMetadataRaw = function (raw) {
      metadata.raw = raw;
    };
  };
  
  /**
   * Turn Markdown link shortcuts into XHTML <a> tags.
   */
  showdown.subParser('anchors', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('anchors.before', text, options, globals);
  
    var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
      if (showdown.helper.isUndefined(title)) {
        title = '';
      }
      linkId = linkId.toLowerCase();
  
      // Special case for explicit empty url
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = '';
      } else if (!url) {
        if (!linkId) {
          // lower-case and turn embedded newlines into spaces
          linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
        }
        url = '#' + linkId;
  
        if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
          url = globals.gUrls[linkId];
          if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
            title = globals.gTitles[linkId];
          }
        } else {
          return wholeMatch;
        }
      }
  
      //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
  
      var result = '<a href="' + url + '"';
  
      if (title !== '' && title !== null) {
        title = title.replace(/"/g, '&quot;');
        //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
        title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }
  
      // optionLinksInNewWindow only applies
      // to external links. Hash links (#) open in same page
      if (options.openLinksInNewWindow && !/^#/.test(url)) {
        // escaped _
        result += ' rel="noopener noreferrer" target="¨E95Eblank"';
      }
  
      result += '>' + linkText + '</a>';
  
      return result;
    };
  
    // First, handle reference-style links: [link text] [id]
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
  
    // Next, inline-style links: [link text](url "optional title")
    // cases with crazy urls like ./image/cat1).png
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
      writeAnchorTag);
  
    // normal cases
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
      writeAnchorTag);
  
    // handle reference-style shortcuts: [link text]
    // These must come last in case you've also got [link test][1]
    // or [link test](/foo)
    text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
  
    // Lastly handle GithubMentions if option is enabled
    if (options.ghMentions) {
      text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
        if (escape === '\\') {
          return st + mentions;
        }
  
        //check if options.ghMentionsLink is a string
        if (!showdown.helper.isString(options.ghMentionsLink)) {
          throw new Error('ghMentionsLink option must be a string');
        }
        var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
            target = '';
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="¨E95Eblank"';
        }
        return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
      });
    }
  
    text = globals.converter._dispatch('anchors.after', text, options, globals);
    return text;
  });
  
  // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]
  
  var simpleURLRegex  = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
      simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
      delimUrlRegex   = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
      simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
      delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
  
      replaceLink = function (options) {
        'use strict';
        return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
          link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var lnkTxt = link,
              append = '',
              target = '',
              lmc    = leadingMagicChars || '',
              tmc    = trailingMagicChars || '';
          if (/^www\./i.test(link)) {
            link = link.replace(/^www\./i, 'http://www.');
          }
          if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
            append = trailingPunctuation;
          }
          if (options.openLinksInNewWindow) {
            target = ' rel="noopener noreferrer" target="¨E95Eblank"';
          }
          return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
        };
      },
  
      replaceMail = function (options, globals) {
        'use strict';
        return function (wholeMatch, b, mail) {
          var href = 'mailto:';
          b = b || '';
          mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
          if (options.encodeEmails) {
            href = showdown.helper.encodeEmailAddress(href + mail);
            mail = showdown.helper.encodeEmailAddress(mail);
          } else {
            href = href + mail;
          }
          return b + '<a href="' + href + '">' + mail + '</a>';
        };
      };
  
  showdown.subParser('autoLinks', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('autoLinks.before', text, options, globals);
  
    text = text.replace(delimUrlRegex, replaceLink(options));
    text = text.replace(delimMailRegex, replaceMail(options, globals));
  
    text = globals.converter._dispatch('autoLinks.after', text, options, globals);
  
    return text;
  });
  
  showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
    'use strict';
  
    if (!options.simplifiedAutoLink) {
      return text;
    }
  
    text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);
  
    if (options.excludeTrailingPunctuationFromURLs) {
      text = text.replace(simpleURLRegex2, replaceLink(options));
    } else {
      text = text.replace(simpleURLRegex, replaceLink(options));
    }
    text = text.replace(simpleMailRegex, replaceMail(options, globals));
  
    text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);
  
    return text;
  });
  
  /**
   * These are all the transformations that form block-level
   * tags like paragraphs, headers, and list items.
   */
  showdown.subParser('blockGamut', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('blockGamut.before', text, options, globals);
  
    // we parse blockquotes first so that we can have headings and hrs
    // inside blockquotes
    text = showdown.subParser('blockQuotes')(text, options, globals);
    text = showdown.subParser('headers')(text, options, globals);
  
    // Do Horizontal Rules:
    text = showdown.subParser('horizontalRule')(text, options, globals);
  
    text = showdown.subParser('lists')(text, options, globals);
    text = showdown.subParser('codeBlocks')(text, options, globals);
    text = showdown.subParser('tables')(text, options, globals);
  
    // We already ran _HashHTMLBlocks() before, in Markdown(), but that
    // was to escape raw HTML in the original Markdown source. This time,
    // we're escaping the markup we've just created, so that we don't wrap
    // <p> tags around block-level tags.
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('paragraphs')(text, options, globals);
  
    text = globals.converter._dispatch('blockGamut.after', text, options, globals);
  
    return text;
  });
  
  showdown.subParser('blockQuotes', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('blockQuotes.before', text, options, globals);
  
    // add a couple extra lines after the text and endtext mark
    text = text + '\n\n';
  
    var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
  
    if (options.splitAdjacentBlockquotes) {
      rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
    }
  
    text = text.replace(rgx, function (bq) {
      // attacklab: hack around Konqueror 3.5.4 bug:
      // "----------bug".replace(/^-/g,"") == "bug"
      bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting
  
      // attacklab: clean up hack
      bq = bq.replace(/¨0/g, '');
  
      bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
      bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
      bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse
  
      bq = bq.replace(/(^|\n)/g, '$1  ');
      // These leading spaces screw with <pre> content, so we need to fix that:
      bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
        var pre = m1;
        // attacklab: hack around Konqueror 3.5.4 bug:
        pre = pre.replace(/^  /mg, '¨0');
        pre = pre.replace(/¨0/g, '');
        return pre;
      });
  
      return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
    });
  
    text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
    return text;
  });
  
  /**
   * Process Markdown `<pre><code>` blocks.
   */
  showdown.subParser('codeBlocks', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('codeBlocks.before', text, options, globals);
  
    // sentinel workarounds for lack of \A and \Z, safari\khtml bug
    text += '¨0';
  
    var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
    text = text.replace(pattern, function (wholeMatch, m1, m2) {
      var codeblock = m1,
          nextChar = m2,
          end = '\n';
  
      codeblock = showdown.subParser('outdent')(codeblock, options, globals);
      codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
      codeblock = showdown.subParser('detab')(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
      codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines
  
      if (options.omitExtraWLInCodeBlocks) {
        end = '';
      }
  
      codeblock = '<pre><code>' + codeblock + end + '</code></pre>';
  
      return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
    });
  
    // strip sentinel
    text = text.replace(/¨0/, '');
  
    text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
    return text;
  });
  
  /**
   *
   *   *  Backtick quotes are used for <code></code> spans.
   *
   *   *  You can use multiple backticks as the delimiters if you want to
   *     include literal backticks in the code span. So, this input:
   *
   *         Just type ``foo `bar` baz`` at the prompt.
   *
   *       Will translate to:
   *
   *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
   *
   *    There's no arbitrary limit to the number of backticks you
   *    can use as delimters. If you need three consecutive backticks
   *    in your code, use four for delimiters, etc.
   *
   *  *  You can use spaces to get literal backticks at the edges:
   *
   *         ... type `` `bar` `` ...
   *
   *       Turns to:
   *
   *         ... type <code>`bar`</code> ...
   */
  showdown.subParser('codeSpans', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('codeSpans.before', text, options, globals);
  
    if (typeof text === 'undefined') {
      text = '';
    }
    text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
      function (wholeMatch, m1, m2, m3) {
        var c = m3;
        c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
        c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
        c = showdown.subParser('encodeCode')(c, options, globals);
        c = m1 + '<code>' + c + '</code>';
        c = showdown.subParser('hashHTMLSpans')(c, options, globals);
        return c;
      }
    );
  
    text = globals.converter._dispatch('codeSpans.after', text, options, globals);
    return text;
  });
  
  /**
   * Create a full HTML document from the processed markdown
   */
  showdown.subParser('completeHTMLDocument', function (text, options, globals) {
    'use strict';
  
    if (!options.completeHTMLDocument) {
      return text;
    }
  
    text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);
  
    var doctype = 'html',
        doctypeParsed = '<!DOCTYPE HTML>\n',
        title = '',
        charset = '<meta charset="utf-8">\n',
        lang = '',
        metadata = '';
  
    if (typeof globals.metadata.parsed.doctype !== 'undefined') {
      doctypeParsed = '<!DOCTYPE ' +  globals.metadata.parsed.doctype + '>\n';
      doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
      if (doctype === 'html' || doctype === 'html5') {
        charset = '<meta charset="utf-8">';
      }
    }
  
    for (var meta in globals.metadata.parsed) {
      if (globals.metadata.parsed.hasOwnProperty(meta)) {
        switch (meta.toLowerCase()) {
          case 'doctype':
            break;
  
          case 'title':
            title = '<title>' +  globals.metadata.parsed.title + '</title>\n';
            break;
  
          case 'charset':
            if (doctype === 'html' || doctype === 'html5') {
              charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
            } else {
              charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
            }
            break;
  
          case 'language':
          case 'lang':
            lang = ' lang="' + globals.metadata.parsed[meta] + '"';
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            break;
  
          default:
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
      }
    }
  
    text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';
  
    text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
    return text;
  });
  
  /**
   * Convert all tabs to spaces
   */
  showdown.subParser('detab', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('detab.before', text, options, globals);
  
    // expand first n-1 tabs
    text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width
  
    // replace the nth with two sentinels
    text = text.replace(/\t/g, '¨A¨B');
  
    // use the sentinel to anchor our regex so it doesn't explode
    text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
      var leadingText = m1,
          numSpaces = 4 - leadingText.length % 4;  // g_tab_width
  
      // there *must* be a better way to do this:
      for (var i = 0; i < numSpaces; i++) {
        leadingText += ' ';
      }
  
      return leadingText;
    });
  
    // clean up sentinels
    text = text.replace(/¨A/g, '    ');  // g_tab_width
    text = text.replace(/¨B/g, '');
  
    text = globals.converter._dispatch('detab.after', text, options, globals);
    return text;
  });
  
  showdown.subParser('ellipsis', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('ellipsis.before', text, options, globals);
  
    text = text.replace(/\.\.\./g, '…');
  
    text = globals.converter._dispatch('ellipsis.after', text, options, globals);
  
    return text;
  });
  
  /**
   * Turn emoji codes into emojis
   *
   * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
   */
  showdown.subParser('emoji', function (text, options, globals) {
    'use strict';
  
    if (!options.emoji) {
      return text;
    }
  
    text = globals.converter._dispatch('emoji.before', text, options, globals);
  
    var emojiRgx = /:([\S]+?):/g;
  
    text = text.replace(emojiRgx, function (wm, emojiCode) {
      if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
        return showdown.helper.emojis[emojiCode];
      }
      return wm;
    });
  
    text = globals.converter._dispatch('emoji.after', text, options, globals);
  
    return text;
  });
  
  /**
   * Smart processing for ampersands and angle brackets that need to be encoded.
   */
  showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);
  
    // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
    // http://bumppo.net/projects/amputator/
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');
  
    // Encode naked <'s
    text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');
  
    // Encode <
    text = text.replace(/</g, '&lt;');
  
    // Encode >
    text = text.replace(/>/g, '&gt;');
  
    text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
    return text;
  });
  
  /**
   * Returns the string, with after processing the following backslash escape sequences.
   *
   * attacklab: The polite way to do this is with the new escapeCharacters() function:
   *
   *    text = escapeCharacters(text,"\\",true);
   *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
   *
   * ...but we're sidestepping its use of the (slow) RegExp constructor
   * as an optimization for Firefox.  This function gets called a LOT.
   */
  showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);
  
    text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
  
    text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
    return text;
  });
  
  /**
   * Encode/escape certain characters inside Markdown code runs.
   * The point is that in code, these characters are literals,
   * and lose their special Markdown meanings.
   */
  showdown.subParser('encodeCode', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('encodeCode.before', text, options, globals);
  
    // Encode all ampersands; HTML entities are not
    // entities within a Markdown code span.
    text = text
      .replace(/&/g, '&amp;')
    // Do the angle bracket song and dance:
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    // Now, escape characters that are magic in Markdown:
      .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
  
    text = globals.converter._dispatch('encodeCode.after', text, options, globals);
    return text;
  });
  
  /**
   * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
   * don't conflict with their use in Markdown for code, italics and strong.
   */
  showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);
  
    // Build a regex to find HTML tags.
    var tags     = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
        comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
  
    text = text.replace(tags, function (wholeMatch) {
      return wholeMatch
        .replace(/(.)<\/?code>(?=.)/g, '$1`')
        .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });
  
    text = text.replace(comments, function (wholeMatch) {
      return wholeMatch
        .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });
  
    text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
    return text;
  });
  
  /**
   * Handle github codeblocks prior to running HashHTML so that
   * HTML contained within the codeblock gets escaped properly
   * Example:
   * ```ruby
   *     def hello_world(x)
   *       puts "Hello, #{x}"
   *     end
   * ```
   */
  showdown.subParser('githubCodeBlocks', function (text, options, globals) {
    'use strict';
  
    // early exit if option is not enabled
    if (!options.ghCodeBlocks) {
      return text;
    }
  
    text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);
  
    text += '¨0';
  
    text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
      var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';
  
      // First parse the github code block
      codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
      codeblock = showdown.subParser('detab')(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
      codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace
  
      codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';
  
      codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);
  
      // Since GHCodeblocks can be false positives, we need to
      // store the primitive text and the parsed text in a global var,
      // and then return a token
      return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
    });
  
    // attacklab: strip sentinel
    text = text.replace(/¨0/, '');
  
    return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
  });
  
  showdown.subParser('hashBlock', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('hashBlock.before', text, options, globals);
    text = text.replace(/(^\n+|\n+$)/g, '');
    text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
    text = globals.converter._dispatch('hashBlock.after', text, options, globals);
    return text;
  });
  
  /**
   * Hash and escape <code> elements that should not be parsed as markdown
   */
  showdown.subParser('hashCodeTags', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);
  
    var repFunc = function (wholeMatch, match, left, right) {
      var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
      return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
    };
  
    // Hash naked <code>
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');
  
    text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
    return text;
  });
  
  showdown.subParser('hashElement', function (text, options, globals) {
    'use strict';
  
    return function (wholeMatch, m1) {
      var blockText = m1;
  
      // Undo double lines
      blockText = blockText.replace(/\n\n/g, '\n');
      blockText = blockText.replace(/^\n/, '');
  
      // strip trailing blank lines
      blockText = blockText.replace(/\n+$/g, '');
  
      // Replace the element text with a marker ("¨KxK" where x is its key)
      blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';
  
      return blockText;
    };
  });
  
  showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);
  
    var blockTags = [
          'pre',
          'div',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'blockquote',
          'table',
          'dl',
          'ol',
          'ul',
          'script',
          'noscript',
          'form',
          'fieldset',
          'iframe',
          'math',
          'style',
          'section',
          'header',
          'footer',
          'nav',
          'article',
          'aside',
          'address',
          'audio',
          'canvas',
          'figure',
          'hgroup',
          'output',
          'video',
          'p'
        ],
        repFunc = function (wholeMatch, match, left, right) {
          var txt = wholeMatch;
          // check if this html element is marked as markdown
          // if so, it's contents should be parsed as markdown
          if (left.search(/\bmarkdown\b/) !== -1) {
            txt = left + globals.converter.makeHtml(match) + right;
          }
          return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
        };
  
    if (options.backslashEscapesHTMLTags) {
      // encode backslash escaped HTML tags
      text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
        return '&lt;' + inside + '&gt;';
      });
    }
  
    // hash HTML Blocks
    for (var i = 0; i < blockTags.length; ++i) {
  
      var opTagPos,
          rgx1     = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
          patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
          patRight = '</' + blockTags[i] + '>';
      // 1. Look for the first position of the first opening HTML tag in the text
      while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
  
        // if the HTML tag is \ escaped, we need to escape it and break
  
  
        //2. Split the text in that position
        var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
            //3. Match recursively
            newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');
  
        // prevent an infinite loop
        if (newSubText1 === subTexts[1]) {
          break;
        }
        text = subTexts[0].concat(newSubText1);
      }
    }
    // HR SPECIAL CASE
    text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
      showdown.subParser('hashElement')(text, options, globals));
  
    // Special case for standalone HTML comments
    text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
      return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
    }, '^ {0,3}<!--', '-->', 'gm');
  
    // PHP and ASP-style processor instructions (<?...?> and <%...%>)
    text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
      showdown.subParser('hashElement')(text, options, globals));
  
    text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
    return text;
  });
  
  /**
   * Hash span elements that should not be parsed as markdown
   */
  showdown.subParser('hashHTMLSpans', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);
  
    function hashHTMLSpan (html) {
      return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
    }
  
    // Hash Self Closing tags
    text = text.replace(/<[^>]+?\/>/gi, function (wm) {
      return hashHTMLSpan(wm);
    });
  
    // Hash tags without properties
    text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
      return hashHTMLSpan(wm);
    });
  
    // Hash tags with properties
    text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
      return hashHTMLSpan(wm);
    });
  
    // Hash self closing tags without />
    text = text.replace(/<[^>]+?>/gi, function (wm) {
      return hashHTMLSpan(wm);
    });
  
    /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/
  
    text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
    return text;
  });
  
  /**
   * Unhash HTML spans
   */
  showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);
  
    for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
      var repText = globals.gHtmlSpans[i],
          // limiter to prevent infinite loop (assume 10 as limit for recurse)
          limit = 0;
  
      while (/¨C(\d+)C/.test(repText)) {
        var num = RegExp.$1;
        repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
        if (limit === 10) {
          console.error('maximum nesting of 10 spans reached!!!');
          break;
        }
        ++limit;
      }
      text = text.replace('¨C' + i + 'C', repText);
    }
  
    text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
    return text;
  });
  
  /**
   * Hash and escape <pre><code> elements that should not be parsed as markdown
   */
  showdown.subParser('hashPreCodeTags', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);
  
    var repFunc = function (wholeMatch, match, left, right) {
      // encode html entities
      var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
      return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
    };
  
    // Hash <pre><code>
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');
  
    text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
    return text;
  });
  
  showdown.subParser('headers', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('headers.before', text, options, globals);
  
    var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),
  
        // Set text-style headers:
        //	Header 1
        //	========
        //
        //	Header 2
        //	--------
        //
        setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
        setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
  
    text = text.replace(setextRegexH1, function (wholeMatch, m1) {
  
      var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
          hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
          hLevel = headerLevelStart,
          hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
      return showdown.subParser('hashBlock')(hashBlock, options, globals);
    });
  
    text = text.replace(setextRegexH2, function (matchFound, m1) {
      var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
          hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
          hLevel = headerLevelStart + 1,
          hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
      return showdown.subParser('hashBlock')(hashBlock, options, globals);
    });
  
    // atx-style headers:
    //  # Header 1
    //  ## Header 2
    //  ## Header 2 with closing hashes ##
    //  ...
    //  ###### Header 6
    //
    var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
  
    text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
      var hText = m2;
      if (options.customizedHeaderId) {
        hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
      }
  
      var span = showdown.subParser('spanGamut')(hText, options, globals),
          hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
          hLevel = headerLevelStart - 1 + m1.length,
          header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';
  
      return showdown.subParser('hashBlock')(header, options, globals);
    });
  
    function headerId (m) {
      var title,
          prefix;
  
      // It is separate from other options to allow combining prefix and customized
      if (options.customizedHeaderId) {
        var match = m.match(/\{([^{]+?)}\s*$/);
        if (match && match[1]) {
          m = match[1];
        }
      }
  
      title = m;
  
      // Prefix id to prevent causing inadvertent pre-existing style matches.
      if (showdown.helper.isString(options.prefixHeaderId)) {
        prefix = options.prefixHeaderId;
      } else if (options.prefixHeaderId === true) {
        prefix = 'section-';
      } else {
        prefix = '';
      }
  
      if (!options.rawPrefixHeaderId) {
        title = prefix + title;
      }
  
      if (options.ghCompatibleHeaderId) {
        title = title
          .replace(/ /g, '-')
          // replace previously escaped chars (&, ¨ and $)
          .replace(/&amp;/g, '')
          .replace(/¨T/g, '')
          .replace(/¨D/g, '')
          // replace rest of the chars (&~$ are repeated as they might have been escaped)
          // borrowed from github's redcarpet (some they should produce similar results)
          .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
          .toLowerCase();
      } else if (options.rawHeaderId) {
        title = title
          .replace(/ /g, '-')
          // replace previously escaped chars (&, ¨ and $)
          .replace(/&amp;/g, '&')
          .replace(/¨T/g, '¨')
          .replace(/¨D/g, '$')
          // replace " and '
          .replace(/["']/g, '-')
          .toLowerCase();
      } else {
        title = title
          .replace(/[^\w]/g, '')
          .toLowerCase();
      }
  
      if (options.rawPrefixHeaderId) {
        title = prefix + title;
      }
  
      if (globals.hashLinkCounts[title]) {
        title = title + '-' + (globals.hashLinkCounts[title]++);
      } else {
        globals.hashLinkCounts[title] = 1;
      }
      return title;
    }
  
    text = globals.converter._dispatch('headers.after', text, options, globals);
    return text;
  });
  
  /**
   * Turn Markdown link shortcuts into XHTML <a> tags.
   */
  showdown.subParser('horizontalRule', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('horizontalRule.before', text, options, globals);
  
    var key = showdown.subParser('hashBlock')('<hr />', options, globals);
    text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
  
    text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
    return text;
  });
  
  /**
   * Turn Markdown image shortcuts into <img> tags.
   */
  showdown.subParser('images', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('images.before', text, options, globals);
  
    var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
        crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
        base64RegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
        referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
        refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
  
    function writeImageTagBase64 (wholeMatch, altText, linkId, url, width, height, m5, title) {
      url = url.replace(/\s/g, '');
      return writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title);
    }
  
    function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {
  
      var gUrls   = globals.gUrls,
          gTitles = globals.gTitles,
          gDims   = globals.gDimensions;
  
      linkId = linkId.toLowerCase();
  
      if (!title) {
        title = '';
      }
      // Special case for explicit empty url
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = '';
  
      } else if (url === '' || url === null) {
        if (linkId === '' || linkId === null) {
          // lower-case and turn embedded newlines into spaces
          linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
        }
        url = '#' + linkId;
  
        if (!showdown.helper.isUndefined(gUrls[linkId])) {
          url = gUrls[linkId];
          if (!showdown.helper.isUndefined(gTitles[linkId])) {
            title = gTitles[linkId];
          }
          if (!showdown.helper.isUndefined(gDims[linkId])) {
            width = gDims[linkId].width;
            height = gDims[linkId].height;
          }
        } else {
          return wholeMatch;
        }
      }
  
      altText = altText
        .replace(/"/g, '&quot;')
      //altText = showdown.helper.escapeCharacters(altText, '*_', false);
        .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      //url = showdown.helper.escapeCharacters(url, '*_', false);
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var wodemaya='</a>';
      var result = '<a href="'+url+'" target="_blank"'+'><img class="shuoshuoimg" src="' + url + '"style="width: 20%" ';
  
      if (title && showdown.helper.isString(title)) {
        title = title
          .replace(/"/g, '&quot;')
        //title = showdown.helper.escapeCharacters(title, '*_', false);
          .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }
  
      if (width && height) {
        width  = (width === '*') ? 'auto' : width;
        height = (height === '*') ? 'auto' : height;
  
        result += ' width="' + width + '"';
        result += ' height="' + height + '"';
      }
  
      result += ' />'+wodemaya;
  
      return result;
    }
  
    // First, handle reference-style labeled images: ![alt text][id]
    text = text.replace(referenceRegExp, writeImageTag);
  
    // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
  
    // base64 encoded images
    text = text.replace(base64RegExp, writeImageTagBase64);
  
    // cases with crazy urls like ./image/cat1).png
    text = text.replace(crazyRegExp, writeImageTag);
  
    // normal cases
    text = text.replace(inlineRegExp, writeImageTag);
  
    // handle reference-style shortcuts: ![img text]
    text = text.replace(refShortcutRegExp, writeImageTag);
  
    text = globals.converter._dispatch('images.after', text, options, globals);
    return text;
  });
  
  showdown.subParser('italicsAndBold', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);
  
    // it's faster to have 3 separate regexes for each case than have just one
    // because of backtracing, in some cases, it could lead to an exponential effect
    // called "catastrophic backtrace". Ominous!
  
    function parseInside (txt, left, right) {
      /*
      if (options.simplifiedAutoLink) {
        txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
      }
      */
      return left + txt + right;
    }
  
    // Parse underscores
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
        return parseInside (txt, '<strong><em>', '</em></strong>');
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
        return parseInside (txt, '<strong>', '</strong>');
      });
      text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
        return parseInside (txt, '<em>', '</em>');
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
        return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
        return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
      });
      text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
        // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
        return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
      });
    }
  
    // Now parse asterisks
    if (options.literalMidWordAsterisks) {
      text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
        return parseInside (txt, lead + '<strong><em>', '</em></strong>');
      });
      text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
        return parseInside (txt, lead + '<strong>', '</strong>');
      });
      text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
        return parseInside (txt, lead + '<em>', '</em>');
      });
    } else {
      text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
        return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
      });
      text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
        return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
      });
      text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
        // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
        return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
      });
    }
  
  
    text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
    return text;
  });
  
  /**
   * Form HTML ordered (numbered) and unordered (bulleted) lists.
   */
  showdown.subParser('lists', function (text, options, globals) {
    'use strict';
  
    /**
     * Process the contents of a single ordered or unordered list, splitting it
     * into individual list items.
     * @param {string} listStr
     * @param {boolean} trimTrailing
     * @returns {string}
     */
    function processListItems (listStr, trimTrailing) {
      // The $g_list_level global keeps track of when we're inside a list.
      // Each time we enter a list, we increment it; when we leave a list,
      // we decrement. If it's zero, we're not in a list anymore.
      //
      // We do this because when we're not inside a list, we want to treat
      // something like this:
      //
      //    I recommend upgrading to version
      //    8. Oops, now this line is treated
      //    as a sub-list.
      //
      // As a single paragraph, despite the fact that the second line starts
      // with a digit-period-space sequence.
      //
      // Whereas when we're inside a list (or sub-list), that line will be
      // treated as the start of a sub-list. What a kludge, huh? This is
      // an aspect of Markdown's syntax that's hard to parse perfectly
      // without resorting to mind-reading. Perhaps the solution is to
      // change the syntax rules such that sub-lists must start with a
      // starting cardinal number; e.g. "1." or "a.".
      globals.gListLevel++;
  
      // trim trailing blank lines:
      listStr = listStr.replace(/\n{2,}$/, '\n');
  
      // attacklab: add sentinel to emulate \z
      listStr += '¨0';
  
      var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
          isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));
  
      // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
      // which is a syntax breaking change
      // activating this option reverts to old behavior
      if (options.disableForced4SpacesIndentedSublists) {
        rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
      }
  
      listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
        checked = (checked && checked.trim() !== '');
  
        var item = showdown.subParser('outdent')(m4, options, globals),
            bulletStyle = '';
  
        // Support for github tasklists
        if (taskbtn && options.tasklists) {
          bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
          item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
            var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            if (checked) {
              otp += ' checked';
            }
            otp += '>';
            return otp;
          });
        }
  
        // ISSUE #312
        // This input: - - - a
        // causes trouble to the parser, since it interprets it as:
        // <ul><li><li><li>a</li></li></li></ul>
        // instead of:
        // <ul><li>- - a</li></ul>
        // So, to prevent it, we will put a marker (¨A)in the beginning of the line
        // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
        item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
          return '¨A' + wm2;
        });
  
        // m1 - Leading line or
        // Has a double return (multi paragraph) or
        // Has sublist
        if (m1 || (item.search(/\n{2,}/) > -1)) {
          item = showdown.subParser('githubCodeBlocks')(item, options, globals);
          item = showdown.subParser('blockGamut')(item, options, globals);
        } else {
          // Recursion for sub-lists:
          item = showdown.subParser('lists')(item, options, globals);
          item = item.replace(/\n$/, ''); // chomp(item)
          item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
  
          // Colapse double linebreaks
          item = item.replace(/\n\n+/g, '\n\n');
          if (isParagraphed) {
            item = showdown.subParser('paragraphs')(item, options, globals);
          } else {
            item = showdown.subParser('spanGamut')(item, options, globals);
          }
        }
  
        // now we need to remove the marker (¨A)
        item = item.replace('¨A', '');
        // we can finally wrap the line in list item tags
        item =  '<li' + bulletStyle + '>' + item + '</li>\n';
  
        return item;
      });
  
      // attacklab: strip sentinel
      listStr = listStr.replace(/¨0/g, '');
  
      globals.gListLevel--;
  
      if (trimTrailing) {
        listStr = listStr.replace(/\s+$/, '');
      }
  
      return listStr;
    }
  
    function styleStartNumber (list, listType) {
      // check if ol and starts by a number different than 1
      if (listType === 'ol') {
        var res = list.match(/^ *(\d+)\./);
        if (res && res[1] !== '1') {
          return ' start="' + res[1] + '"';
        }
      }
      return '';
    }
  
    /**
     * Check and parse consecutive lists (better fix for issue #142)
     * @param {string} list
     * @param {string} listType
     * @param {boolean} trimTrailing
     * @returns {string}
     */
    function parseConsecutiveLists (list, listType, trimTrailing) {
      // check if we caught 2 or more consecutive lists by mistake
      // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
      var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
          ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
          counterRxg = (listType === 'ul') ? olRgx : ulRgx,
          result = '';
  
      if (list.search(counterRxg) !== -1) {
        (function parseCL (txt) {
          var pos = txt.search(counterRxg),
              style = styleStartNumber(list, listType);
          if (pos !== -1) {
            // slice
            result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';
  
            // invert counterType and listType
            listType = (listType === 'ul') ? 'ol' : 'ul';
            counterRxg = (listType === 'ul') ? olRgx : ulRgx;
  
            //recurse
            parseCL(txt.slice(pos));
          } else {
            result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
          }
        })(list);
      } else {
        var style = styleStartNumber(list, listType);
        result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
      }
  
      return result;
    }
  
    /** Start of list parsing **/
    text = globals.converter._dispatch('lists.before', text, options, globals);
    // add sentinel to hack around khtml/safari bug:
    // http://bugs.webkit.org/show_bug.cgi?id=11231
    text += '¨0';
  
    if (globals.gListLevel) {
      text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function (wholeMatch, list, m2) {
          var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
          return parseConsecutiveLists(list, listType, true);
        }
      );
    } else {
      text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function (wholeMatch, m1, list, m3) {
          var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
          return parseConsecutiveLists(list, listType, false);
        }
      );
    }
  
    // strip sentinel
    text = text.replace(/¨0/, '');
    text = globals.converter._dispatch('lists.after', text, options, globals);
    return text;
  });
  
  /**
   * Parse metadata at the top of the document
   */
  showdown.subParser('metadata', function (text, options, globals) {
    'use strict';
  
    if (!options.metadata) {
      return text;
    }
  
    text = globals.converter._dispatch('metadata.before', text, options, globals);
  
    function parseMetadataContents (content) {
      // raw is raw so it's not changed in any way
      globals.metadata.raw = content;
  
      // escape chars forbidden in html attributes
      // double quotes
      content = content
        // ampersand first
        .replace(/&/g, '&amp;')
        // double quotes
        .replace(/"/g, '&quot;');
  
      content = content.replace(/\n {4}/g, ' ');
      content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
        globals.metadata.parsed[key] = value;
        return '';
      });
    }
  
    text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
      parseMetadataContents(content);
      return '¨M';
    });
  
    text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
      if (format) {
        globals.metadata.format = format;
      }
      parseMetadataContents(content);
      return '¨M';
    });
  
    text = text.replace(/¨M/g, '');
  
    text = globals.converter._dispatch('metadata.after', text, options, globals);
    return text;
  });
  
  /**
   * Remove one level of line-leading tabs or spaces
   */
  showdown.subParser('outdent', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('outdent.before', text, options, globals);
  
    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width
  
    // attacklab: clean up hack
    text = text.replace(/¨0/g, '');
  
    text = globals.converter._dispatch('outdent.after', text, options, globals);
    return text;
  });
  
  /**
   *
   */
  showdown.subParser('paragraphs', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('paragraphs.before', text, options, globals);
    // Strip leading and trailing lines:
    text = text.replace(/^\n+/g, '');
    text = text.replace(/\n+$/g, '');
  
    var grafs = text.split(/\n{2,}/g),
        grafsOut = [],
        end = grafs.length; // Wrap <p> tags
  
    for (var i = 0; i < end; i++) {
      var str = grafs[i];
      // if this is an HTML marker, copy it
      if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
        grafsOut.push(str);
  
      // test for presence of characters to prevent empty lines being parsed
      // as paragraphs (resulting in undesired extra empty paragraphs)
      } else if (str.search(/\S/) >= 0) {
        str = showdown.subParser('spanGamut')(str, options, globals);
        str = str.replace(/^([ \t]*)/g, '<p>');
        str += '</p>';
        grafsOut.push(str);
      }
    }
  
    /** Unhashify HTML blocks */
    end = grafsOut.length;
    for (i = 0; i < end; i++) {
      var blockText = '',
          grafsOutIt = grafsOut[i],
          codeFlag = false;
      // if this is a marker for an html block...
      // use RegExp.test instead of string.search because of QML bug
      while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
        var delim = RegExp.$1,
            num   = RegExp.$2;
  
        if (delim === 'K') {
          blockText = globals.gHtmlBlocks[num];
        } else {
          // we need to check if ghBlock is a false positive
          if (codeFlag) {
            // use encoded version of all text
            blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
          } else {
            blockText = globals.ghCodeBlocks[num].codeblock;
          }
        }
        blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs
  
        grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
        // Check if grafsOutIt is a pre->code
        if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
          codeFlag = true;
        }
      }
      grafsOut[i] = grafsOutIt;
    }
    text = grafsOut.join('\n');
    // Strip leading and trailing lines:
    text = text.replace(/^\n+/g, '');
    text = text.replace(/\n+$/g, '');
    return globals.converter._dispatch('paragraphs.after', text, options, globals);
  });
  
  /**
   * Run extension
   */
  showdown.subParser('runExtension', function (ext, text, options, globals) {
    'use strict';
  
    if (ext.filter) {
      text = ext.filter(text, globals.converter, options);
  
    } else if (ext.regex) {
      // TODO remove this when old extension loading mechanism is deprecated
      var re = ext.regex;
      if (!(re instanceof RegExp)) {
        re = new RegExp(re, 'g');
      }
      text = text.replace(re, ext.replace);
    }
  
    return text;
  });
  
  /**
   * These are all the transformations that occur *within* block-level
   * tags like paragraphs, headers, and list items.
   */
  showdown.subParser('spanGamut', function (text, options, globals) {
    'use strict';
  
    text = globals.converter._dispatch('spanGamut.before', text, options, globals);
    text = showdown.subParser('codeSpans')(text, options, globals);
    text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
    text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);
  
    // Process anchor and image tags. Images must come first,
    // because ![foo][f] looks like an anchor.
    text = showdown.subParser('images')(text, options, globals);
    text = showdown.subParser('anchors')(text, options, globals);
  
    // Make links out of things like `<http://example.com/>`
    // Must come after anchors, because you can use < and >
    // delimiters in inline links like [this](<url>).
    text = showdown.subParser('autoLinks')(text, options, globals);
    text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
    text = showdown.subParser('emoji')(text, options, globals);
    text = showdown.subParser('underline')(text, options, globals);
    text = showdown.subParser('italicsAndBold')(text, options, globals);
    text = showdown.subParser('strikethrough')(text, options, globals);
    text = showdown.subParser('ellipsis')(text, options, globals);
  
    // we need to hash HTML tags inside spans
    text = showdown.subParser('hashHTMLSpans')(text, options, globals);
  
    // now we encode amps and angles
    text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);
  
    // Do hard breaks
    if (options.simpleLineBreaks) {
      // GFM style hard breaks
      // only add line breaks if the text does not contain a block (special case for lists)
      if (!/\n\n¨K/.test(text)) {
        text = text.replace(/\n+/g, '<br />\n');
      }
    } else {
      // Vanilla hard breaks
      text = text.replace(/  +\n/g, '<br />\n');
    }
  
    text = globals.converter._dispatch('spanGamut.after', text, options, globals);
    return text;
  });
  
  showdown.subParser('strikethrough', function (text, options, globals) {
    'use strict';
  
    function parseInside (txt) {
      if (options.simplifiedAutoLink) {
        txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
      }
      return '<del>' + txt + '</del>';
    }
  
    if (options.strikethrough) {
      text = globals.converter._dispatch('strikethrough.before', text, options, globals);
      text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
      text = globals.converter._dispatch('strikethrough.after', text, options, globals);
    }
  
    return text;
  });
  
  /**
   * Strips link definitions from text, stores the URLs and titles in
   * hash references.
   * Link defs are in the form: ^[id]: url "optional title"
   */
  showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
    'use strict';
  
    var regex       = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
        base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
  
    // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
    text += '¨0';
  
    var replaceFunc = function (wholeMatch, linkId, url, width, height, blankLines, title) {
      linkId = linkId.toLowerCase();
      if (url.match(/^data:.+?\/.+?;base64,/)) {
        // remove newlines
        globals.gUrls[linkId] = url.replace(/\s/g, '');
      } else {
        globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
      }
  
      if (blankLines) {
        // Oops, found blank lines, so it's not a title.
        // Put back the parenthetical statement we stole.
        return blankLines + title;
  
      } else {
        if (title) {
          globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
        }
        if (options.parseImgDimensions && width && height) {
          globals.gDimensions[linkId] = {
            width:  width,
            height: height
          };
        }
      }
      // Completely remove the definition from the text
      return '';
    };
  
    // first we try to find base64 link references
    text = text.replace(base64Regex, replaceFunc);
  
    text = text.replace(regex, replaceFunc);
  
    // attacklab: strip sentinel
    text = text.replace(/¨0/, '');
  
    return text;
  });
  
  showdown.subParser('tables', function (text, options, globals) {
    'use strict';
  
    if (!options.tables) {
      return text;
    }
  
    var tableRgx       = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
        //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
        singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
  
    function parseStyles (sLine) {
      if (/^:[ \t]*--*$/.test(sLine)) {
        return ' style="text-align:left;"';
      } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
        return ' style="text-align:right;"';
      } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
        return ' style="text-align:center;"';
      } else {
        return '';
      }
    }
  
    function parseHeaders (header, style) {
      var id = '';
      header = header.trim();
      // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
      if (options.tablesHeaderId || options.tableHeaderId) {
        id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
      }
      header = showdown.subParser('spanGamut')(header, options, globals);
  
      return '<th' + id + style + '>' + header + '</th>\n';
    }
  
    function parseCells (cell, style) {
      var subText = showdown.subParser('spanGamut')(cell, options, globals);
      return '<td' + style + '>' + subText + '</td>\n';
    }
  
    function buildTable (headers, cells) {
      var tb = '<table>\n<thead>\n<tr>\n',
          tblLgn = headers.length;
  
      for (var i = 0; i < tblLgn; ++i) {
        tb += headers[i];
      }
      tb += '</tr>\n</thead>\n<tbody>\n';
  
      for (i = 0; i < cells.length; ++i) {
        tb += '<tr>\n';
        for (var ii = 0; ii < tblLgn; ++ii) {
          tb += cells[i][ii];
        }
        tb += '</tr>\n';
      }
      tb += '</tbody>\n</table>\n';
      return tb;
    }
  
    function parseTable (rawTable) {
      var i, tableLines = rawTable.split('\n');
  
      for (i = 0; i < tableLines.length; ++i) {
        // strip wrong first and last column if wrapped tables are used
        if (/^ {0,3}\|/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
        }
        if (/\|[ \t]*$/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
        }
        // parse code spans first, but we only support one line code spans
        tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
      }
  
      var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
          rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
          rawCells = [],
          headers = [],
          styles = [],
          cells = [];
  
      tableLines.shift();
      tableLines.shift();
  
      for (i = 0; i < tableLines.length; ++i) {
        if (tableLines[i].trim() === '') {
          continue;
        }
        rawCells.push(
          tableLines[i]
            .split('|')
            .map(function (s) {
              return s.trim();
            })
        );
      }
  
      if (rawHeaders.length < rawStyles.length) {
        return rawTable;
      }
  
      for (i = 0; i < rawStyles.length; ++i) {
        styles.push(parseStyles(rawStyles[i]));
      }
  
      for (i = 0; i < rawHeaders.length; ++i) {
        if (showdown.helper.isUndefined(styles[i])) {
          styles[i] = '';
        }
        headers.push(parseHeaders(rawHeaders[i], styles[i]));
      }
  
      for (i = 0; i < rawCells.length; ++i) {
        var row = [];
        for (var ii = 0; ii < headers.length; ++ii) {
          if (showdown.helper.isUndefined(rawCells[i][ii])) {
  
          }
          row.push(parseCells(rawCells[i][ii], styles[ii]));
        }
        cells.push(row);
      }
  
      return buildTable(headers, cells);
    }
  
    text = globals.converter._dispatch('tables.before', text, options, globals);
  
    // find escaped pipe characters
    text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
  
    // parse multi column tables
    text = text.replace(tableRgx, parseTable);
  
    // parse one column tables
    text = text.replace(singeColTblRgx, parseTable);
  
    text = globals.converter._dispatch('tables.after', text, options, globals);
  
    return text;
  });
  
  showdown.subParser('underline', function (text, options, globals) {
    'use strict';
  
    if (!options.underline) {
      return text;
    }
  
    text = globals.converter._dispatch('underline.before', text, options, globals);
  
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
        return '<u>' + txt + '</u>';
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
        return '<u>' + txt + '</u>';
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
        return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
        return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
      });
    }
  
    // escape remaining underscores to prevent them being parsed by italic and bold
    text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
  
    text = globals.converter._dispatch('underline.after', text, options, globals);
  
    return text;
  });
  
  /**
   * Swap back in all the special characters we've hidden.
   */
  showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);
  
    text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
      var charCodeToReplace = parseInt(m1);
      return String.fromCharCode(charCodeToReplace);
    });
  
    text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
    return text;
  });
  
  showdown.subParser('makeMarkdown.blockquote', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (node.hasChildNodes()) {
      var children = node.childNodes,
          childrenLength = children.length;
  
      for (var i = 0; i < childrenLength; ++i) {
        var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);
  
        if (innerTxt === '') {
          continue;
        }
        txt += innerTxt;
      }
    }
    // cleanup
    txt = txt.trim();
    txt = '> ' + txt.split('\n').join('\n> ');
    return txt;
  });
  
  showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {
    'use strict';
  
    var lang = node.getAttribute('language'),
        num  = node.getAttribute('precodenum');
    return '```' + lang + '\n' + globals.preList[num] + '\n```';
  });
  
  showdown.subParser('makeMarkdown.codeSpan', function (node) {
    'use strict';
  
    return '`' + node.innerHTML + '`';
  });
  
  showdown.subParser('makeMarkdown.emphasis', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (node.hasChildNodes()) {
      txt += '*';
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '*';
    }
    return txt;
  });
  
  showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {
    'use strict';
  
    var headerMark = new Array(headerLevel + 1).join('#'),
        txt = '';
  
    if (node.hasChildNodes()) {
      txt = headerMark + ' ';
      var children = node.childNodes,
          childrenLength = children.length;
  
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
    }
    return txt;
  });
  
  showdown.subParser('makeMarkdown.hr', function () {
    'use strict';
  
    return '---';
  });
  
  showdown.subParser('makeMarkdown.image', function (node) {
    'use strict';
  
    var txt = '';
    if (node.hasAttribute('src')) {
      txt += '![' + node.getAttribute('alt') + '](';
      txt += '<' + node.getAttribute('src') + '>';
      if (node.hasAttribute('width') && node.hasAttribute('height')) {
        txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
      }
  
      if (node.hasAttribute('title')) {
        txt += ' "' + node.getAttribute('title') + '"';
      }
      txt += ')';
    }
    return txt;
  });
  
  showdown.subParser('makeMarkdown.links', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (node.hasChildNodes() && node.hasAttribute('href')) {
      var children = node.childNodes,
          childrenLength = children.length;
      txt = '[';
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '](';
      txt += '<' + node.getAttribute('href') + '>';
      if (node.hasAttribute('title')) {
        txt += ' "' + node.getAttribute('title') + '"';
      }
      txt += ')';
    }
    return txt;
  });
  
  showdown.subParser('makeMarkdown.list', function (node, globals, type) {
    'use strict';
  
    var txt = '';
    if (!node.hasChildNodes()) {
      return '';
    }
    var listItems       = node.childNodes,
        listItemsLenght = listItems.length,
        listNum = node.getAttribute('start') || 1;
  
    for (var i = 0; i < listItemsLenght; ++i) {
      if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
        continue;
      }
  
      // define the bullet to use in list
      var bullet = '';
      if (type === 'ol') {
        bullet = listNum.toString() + '. ';
      } else {
        bullet = '- ';
      }
  
      // parse list item
      txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
      ++listNum;
    }
  
    // add comment at the end to prevent consecutive lists to be parsed as one
    txt += '\n<!-- -->\n';
    return txt.trim();
  });
  
  showdown.subParser('makeMarkdown.listItem', function (node, globals) {
    'use strict';
  
    var listItemTxt = '';
  
    var children = node.childNodes,
        childrenLenght = children.length;
  
    for (var i = 0; i < childrenLenght; ++i) {
      listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    // if it's only one liner, we need to add a newline at the end
    if (!/\n$/.test(listItemTxt)) {
      listItemTxt += '\n';
    } else {
      // it's multiparagraph, so we need to indent
      listItemTxt = listItemTxt
        .split('\n')
        .join('\n    ')
        .replace(/^ {4}$/gm, '')
        .replace(/\n\n+/g, '\n\n');
    }
  
    return listItemTxt;
  });
  
  
  
  showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {
    'use strict';
  
    spansOnly = spansOnly || false;
  
    var txt = '';
  
    // edge case of text without wrapper paragraph
    if (node.nodeType === 3) {
      return showdown.subParser('makeMarkdown.txt')(node, globals);
    }
  
    // HTML comment
    if (node.nodeType === 8) {
      return '<!--' + node.data + '-->\n\n';
    }
  
    // process only node elements
    if (node.nodeType !== 1) {
      return '';
    }
  
    var tagName = node.tagName.toLowerCase();
  
    switch (tagName) {
  
      //
      // BLOCKS
      //
      case 'h1':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n'; }
        break;
      case 'h2':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n'; }
        break;
      case 'h3':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n'; }
        break;
      case 'h4':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n'; }
        break;
      case 'h5':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n'; }
        break;
      case 'h6':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n'; }
        break;
  
      case 'p':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n'; }
        break;
  
      case 'blockquote':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n'; }
        break;
  
      case 'hr':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n'; }
        break;
  
      case 'ol':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n'; }
        break;
  
      case 'ul':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n'; }
        break;
  
      case 'precode':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n'; }
        break;
  
      case 'pre':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n'; }
        break;
  
      case 'table':
        if (!spansOnly) { txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n'; }
        break;
  
      //
      // SPANS
      //
      case 'code':
        txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
        break;
  
      case 'em':
      case 'i':
        txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
        break;
  
      case 'strong':
      case 'b':
        txt = showdown.subParser('makeMarkdown.strong')(node, globals);
        break;
  
      case 'del':
        txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
        break;
  
      case 'a':
        txt = showdown.subParser('makeMarkdown.links')(node, globals);
        break;
  
      case 'img':
        txt = showdown.subParser('makeMarkdown.image')(node, globals);
        break;
  
      default:
        txt = node.outerHTML + '\n\n';
    }
  
    // common normalization
    // TODO eventually
  
    return txt;
  });
  
  showdown.subParser('makeMarkdown.paragraph', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (node.hasChildNodes()) {
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
    }
  
    // some text normalization
    txt = txt.trim();
  
    return txt;
  });
  
  showdown.subParser('makeMarkdown.pre', function (node, globals) {
    'use strict';
  
    var num  = node.getAttribute('prenum');
    return '<pre>' + globals.preList[num] + '</pre>';
  });
  
  showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (node.hasChildNodes()) {
      txt += '~~';
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '~~';
    }
    return txt;
  });
  
  showdown.subParser('makeMarkdown.strong', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (node.hasChildNodes()) {
      txt += '**';
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '**';
    }
    return txt;
  });
  
  showdown.subParser('makeMarkdown.table', function (node, globals) {
    'use strict';
  
    var txt = '',
        tableArray = [[], []],
        headings   = node.querySelectorAll('thead>tr>th'),
        rows       = node.querySelectorAll('tbody>tr'),
        i, ii;
    for (i = 0; i < headings.length; ++i) {
      var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
          allign = '---';
  
      if (headings[i].hasAttribute('style')) {
        var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');
        switch (style) {
          case 'text-align:left;':
            allign = ':---';
            break;
          case 'text-align:right;':
            allign = '---:';
            break;
          case 'text-align:center;':
            allign = ':---:';
            break;
        }
      }
      tableArray[0][i] = headContent.trim();
      tableArray[1][i] = allign;
    }
  
    for (i = 0; i < rows.length; ++i) {
      var r = tableArray.push([]) - 1,
          cols = rows[i].getElementsByTagName('td');
  
      for (ii = 0; ii < headings.length; ++ii) {
        var cellContent = ' ';
        if (typeof cols[ii] !== 'undefined') {
          cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
        }
        tableArray[r].push(cellContent);
      }
    }
  
    var cellSpacesCount = 3;
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        var strLen = tableArray[i][ii].length;
        if (strLen > cellSpacesCount) {
          cellSpacesCount = strLen;
        }
      }
    }
  
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        if (i === 1) {
          if (tableArray[i][ii].slice(-1) === ':') {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
          } else {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
          }
        } else {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
        }
      }
      txt += '| ' + tableArray[i].join(' | ') + ' |\n';
    }
  
    return txt.trim();
  });
  
  showdown.subParser('makeMarkdown.tableCell', function (node, globals) {
    'use strict';
  
    var txt = '';
    if (!node.hasChildNodes()) {
      return '';
    }
    var children = node.childNodes,
        childrenLength = children.length;
  
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
    }
    return txt.trim();
  });
  
  showdown.subParser('makeMarkdown.txt', function (node) {
    'use strict';
  
    var txt = node.nodeValue;
  
    // multiple spaces are collapsed
    txt = txt.replace(/ +/g, ' ');
  
    // replace the custom ¨NBSP; with a space
    txt = txt.replace(/¨NBSP;/g, ' ');
  
    // ", <, > and & should replace escaped html entities
    txt = showdown.helper.unescapeHTMLEntities(txt);
  
    // escape markdown magic characters
    // emphasis, strong and strikethrough - can appear everywhere
    // we also escape pipe (|) because of tables
    // and escape ` because of code blocks and spans
    txt = txt.replace(/([*_~|`])/g, '\\$1');
  
    // escape > because of blockquotes
    txt = txt.replace(/^(\s*)>/g, '\\$1>');
  
    // hash character, only troublesome at the beginning of a line because of headers
    txt = txt.replace(/^#/gm, '\\#');
  
    // horizontal rules
    txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3');
  
    // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
    txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.');
  
    // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
    txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2');
  
    // images and links, ] followed by ( is problematic, so we escape it
    txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\(');
  
    // reference URIs must also be escaped
    txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');
  
    return txt;
  });
  
  var root = this;
  
  // AMD Loader
  if (typeof define === 'function' && define.amd) {
    define(function () {
      'use strict';
      return showdown;
    });
  
  // CommonJS/nodeJS Loader
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = showdown;
  
  // Regular Browser loader
  } else {
    root.showdown = showdown;
  }
  }).call(this);
  
  //# sourceMappingURL=showdown.js.map
  
  (function(win) {
    var boInfo = {};

    var ua = navigator.userAgent.toLowerCase();
    var platform = navigator.platform;

    var tem;

    // ['Chrome/52','Chrome','52']
    var bsInfo = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(bsInfo[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        bsInfo[1] = 'IE';
        bsInfo[2] = tem[1] || ''; // IE浏览器版本
    }

    if (bsInfo[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) {
            // return tem.slice(1).join(' ').replace('OPR', 'Opera');
            bsInfo[1] = 'Opera';
            bsInfo[2] = tem[1] || '';
        }
    }

    bsInfo = bsInfo[2] ? [bsInfo[1], bsInfo[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        bsInfo.splice(1, 1, tem[1]);
    }

    boInfo.browser = bsInfo[0];
    boInfo.browserVersion = bsInfo[1];

    var clientStrings = [
        { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
        { s: 'Windows Vista', r: /Windows NT 6.0/ },
        { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
        { s: 'Windows 98', r: /(Windows 98|Win98)/ },
        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
        { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: 'Windows CE', r: /Windows CE/ },
        { s: 'Windows 3.11', r: /Win16/ },
        { s: 'Android', r: /Android/ },
        { s: 'Open BSD', r: /OpenBSD/ },
        { s: 'Sun OS', r: /SunOS/ },
        { s: 'Linux', r: /(Linux|X11)/ },
        { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
        { s: 'Mac OS X', r: /Mac OS X/ },
        { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: 'QNX', r: /QNX/ },
        { s: 'UNIX', r: /UNIX/ },
        { s: 'BeOS', r: /BeOS/ },
        { s: 'OS/2', r: /OS\/2/ },
        { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
    ];

    var os;
    var osVersion;

    for (var id in clientStrings) {
        var cs = clientStrings[id];

        // 注意不要用ua，ua是小写化
        if (cs.r.test(navigator.userAgent)) {
            os = cs.s;
            break;
        }
    }

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(navigator.userAgent)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(navigator.userAgent)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    boInfo.os = os;
    boInfo.osVersion = osVersion;

    win.boInfo = boInfo;
})(window);

if ( typeof(color1) == "undefined" ) {
  color1="RGBA(255, 125, 73, 0.75)";
}
if ( typeof(color2) == "undefined" ) {
  color2="#9BCD9B";
}
if ( typeof(color3) == "undefined" ) {
  color3="white";
}
var css=".shuoshuo_row{width: 100%;display: flex;}.child{flex: 1;}#shuoshuo_content {padding: 10px;/* min-height: 500px; */}/* shuo */body.theme-dark .cbp_tmtimeline::before {background: RGBA(255, 255, 255, 0.06);}ul.cbp_tmtimeline {padding: 0;}.cbp_tmtimeline {margin: 30px 0 0 0;padding: 0;list-style: none;display: inline;position: relative;}/* The line */.cbp_tmtimeline:before {content: \"\";position: absolute;top: 0;bottom: 0;width: 4px;background: RGBA(0, 0, 0, 0.02);left: 80px;margin-left: 10px;}/* The date/time */.cbp_tmtimeline>li .cbp_tmtime {display: block;/* width: 29%; *//* padding-right: 110px; */max-width: 70px;position: absolute;}.cbp_tmtimeline>li .cbp_tmtime span {display: block;text-align: right;}.cbp_tmtimeline>li .cbp_tmtime span:first-child {font-size: 0.9em;color: #bdd0db;}.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;color: #9BCD9B;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {color: RGBA(255, 125, 73, 0.75);}div.cbp_tmlabel>p {margin-bottom: 0;}/* Right content */div class.cdp_tmlabel>li .cbp_tmlabel {margin-bottom: 0;}.cbp_tmtimeline>li .cbp_tmlabel {margin: 0 0 45px 65px;background: "+color2+";color:"+color3 +" ;padding: .8em 1.2em .4em 1.2em;/* font-size: 1.2em; */font-weight: 300;line-height: 1.4;position: relative;border-radius: 5px;transition: all 0.3s ease 0s;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);cursor: pointer;display: block;}.cbp_tmlabel:hover {/* transform:scale(1.05); */transform: translateY(-3px);z-index: 1;box-shadow: 0 15px 32px rgba(0, 0, 0, 0.15) !important}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {background: "+color1+";}/* The triangle */.cbp_tmtimeline>li .cbp_tmlabel:after {right: 100%;border: solid transparent;z-index: -1;content: \" \";height: 0;width: 0;position: absolute;pointer-events: none;border-right-color: "+color2+";border-width: 10px;top: 4px;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {border-right-color:"+color1+";}p.shuoshuo_time {margin-top: 10px;border-top: 1px dashed #fff;padding-top: 5px;font-size: 12px;}/* Media */@media screen and (max-width: 65.375em) {.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;}}.shuoshuo_author_img img {border: 1px solid #ddd;padding: 2px;float: left;border-radius: 64px;transition: all 1.0s;}/* end */.avatar {border-radius: 100% !important;-moz-border-radius: 100% !important;box-shadow: inset 0 -1px 0 3333sf;-webkit-box-shadow: inset 0 -1px 0 3333sf;-webkit-transition: 0.4s;-webkit-transition: -webkit-transform 0.4s ease-out;transition: transform 0.4s ease-out;-moz-transition: -moz-transform 0.4s ease-out;}.avatar:hover {-webkit-transform: rotateZ(360deg);-moz-transform: rotateZ(360deg);-o-transform: rotateZ(360deg);-ms-transform: rotateZ(360deg);transform: rotateZ(360deg);}/* content */.shuoshuo_text {width: 100%;height: 130px;padding: 8px 16px;background-repeat: no-repeat;background-position: right;outline-style: none;border: 1px solid #ccc;border-radius: 6px;resize: none;background-color: transparent;color: #999;}/* password */.shuoshuo_inputs {outline-style: none;border: 1px solid #ccc;border-radius: 6px;padding: 8px 16px;width: 100%;font-size: 12px;background-color: transparent;color: #999;}.button {background-color: "+color1+";/* Green */border: none;margin-left: 5px;color:"+color3+";padding: 8px 16px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;border-radius: 12px;/* circle */outline: none;cursor: pointer;}.button:hover {background-color: "+color2+";box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 8px 16px 0 rgba(0, 0, 0, 0.19);}/* butterfly theme adapter */#article-container ul p {margin: 0 0 1rem;}/* version */.power {text-align: right;color: #999;font-size: .75em;padding: .5em 0;}.power a {font-size: .75em;position: relative;cursor: pointer;color: #1abc9c;text-decoration: none;display: inline-block;}/* row */.shuoshuo_row .col.col-80 {width: 80%;float: left;}.shuoshuo_row .col.col-20 {width: 20%;float: right;text-align: right;}#preview {width: 100%;float: left;margin: .5rem 0 0;padding: 7px;box-shadow: 0 0 1px #f0f0f0;}/* lazyload */#lazy {background: #ffffff;bottom: 0;left: 0;position: fixed;right: 0;top: 0;z-index: 9999;}@import \"compass/css3\";.preloader {position: absolute;margin-left: -55px;margin-top: -100px;height: 110px;width: 110px;left: 50%;top: 50%;}path {stroke: #9ea1a4;stroke-width: 0.25;}#cloud {position: relative;z-index: 2;}#cloud path {fill: #efefef;}#sun {margin-left: -10px;margin-top: 6px;opacity: 0;width: 60px;height: 60px;position: absolute;left: 45px;top: 15px;z-index: 1;animation-name: rotate;animation-duration: 16000ms;animation-iteration-count: infinite;animation-timing-function: linear;}#sun path {stroke-width: 0.18;fill: #9ea1a4;}@keyframes rotate {0% {transform: rotateZ(0deg);}100% {transform: rotateZ(360deg);}}/* Rain */.rain {position: absolute;width: 70px;height: 70px;margin-top: -32px;margin-left: 19px;}.drop {opacity: 1;background: #9ea1a4;display: block;float: left;width: 3px;height: 10px;margin-left: 4px;border-radius: 0px 0px 6px 6px;animation-name: drop;animation-duration: 350ms;animation-iteration-count: infinite;}.drop:nth-child(1) {animation-delay: -130ms;}.drop:nth-child(2) {animation-delay: -240ms;}.drop:nth-child(3) {animation-delay: -390ms;}.drop:nth-child(4) {animation-delay: -525ms;}.drop:nth-child(5) {animation-delay: -640ms;}.drop:nth-child(6) {animation-delay: -790ms;}.drop:nth-child(7) {animation-delay: -900ms;}.drop:nth-child(8) {animation-delay: -1050ms;}.drop:nth-child(9) {animation-delay: -1130ms;}.drop:nth-child(10) {animation-delay: -1300ms;}@keyframes drop {50% {height: 45px;opacity: 0;}51% {opacity: 0;}100% {height: 1px;opacity: 0;}}.text {font-family: Helvetica, \"Helvetica Neue\", sans-serif;letter-spacing: 1px;text-align: center;margin-left: -43px;font-weight: bold;margin-top: 20px;font-size: 11px;color: #a0a0a0;width: 200px;} .shuoshuoimg{cursor: pointer;transition: all 1s;}.shuoshuoimg:hover{transform: scale(3.5);} .hide{display: none;}.c1{position: fixed;top:0;bottom: 0;left:0;right: 0;background: rgba(0,0,0,.5);z-index: 2;}.c2{background-color: white;position: fixed;width: 400px;height: auto;top:50%;left: 50%;z-index: 3;margin-top: -150px;margin-left: -200px;box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);opacity: 0.85;border: 0;border-radius: 10px;}.shuoshuo_input_log {outline-style: none;border: 1px solid #ccc;border-radius: 6px;padding: 8px 16px;font-size: 12px;background-color: transparent;color: #999;}.delete_right {cursor: pointer;width: 12px;height: 12px;position: absolute;right: 12px;}svg{display: inline}.cbp_tmlabel>p,h1,h2,h3,h4,h5,h6,em {word-wrap: break-word;word-break: break-all;}.shuoshuo_emoji {border: 1px solid #ccc;border-radius: 6px;max-height: 130px;overflow: auto;display: none;}.atemoji {max-height: 28px;width: 28px;display: inline;}.shuoshuo_parttwo {border: 1px solid #ccc;}.shuoshuo_emoji>.atemoji{cursor: pointer;margin: 0 0 0 10px;}i>.atemoji{cursor: pointer;margin: 0 0 0 10px;}.shuoshuo_emoji>a{display: inline}";
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML=css;
style.id="addStyle"
document.getElementsByTagName("HEAD").item(0).appendChild(style);  

if ( typeof(placeholder1) == "undefined" ) {
  placeholder1="";
}
if ( typeof(per) == "undefined" ) {
  per=5;
}
if ( typeof(bgimg) == "undefined" ) {
  bgimg="";
}
if ( typeof(lazy) == "undefined" ) {
  lazy=1;
}


if ( typeof(slanguage) == "undefined" ) {
    slanguage="zh";
  }

  if(slanguage=="zh"){
    text0="由";
    text00="发表";
    text1="加载更多...";
    text2="预览";
    text3="发布";
    text4="已登录";
    text5="确定";
    text6="退出登录";
    text7="用户";
    text8="密码";
    text9="登录";
    text10="取消";
    text11="发布说说";
    text12="上传图片";
    text14="(上传失败，若非网络原因，请联系Artitalk开发人员)";
    text15="请先登录";
    text16="内容不能为空";
    text17="登陆失败，请检查用户名及密码是否正确";
    text18="头像url";
    text19="确定删除本条说说吗？";
    text20="删除成功";
    text21="请拖拽图片到此处";
    text22="表情";
    text23="删除";
    textup="上传ing";
  }else if(slanguage=="en"){
    text0="Published by";
    text00="";
    text1="load more...";
    text2="Preview";
    text3="Publish";
    text4="logged";
    text5="Ok";
    text6="Sign out";
    text7="Username";
    text8="Password";
    text9="Log in";
    text10="Cancel";
    text11="Post talk";
    text12="Upload image";
    text14="(Upload failed, if not for network reasons, please contact Artitalk developers)";
    text15="Please log in first";
    text16="Content can not be blank";
    text17="Login failed, please check if the username and password are correct";
    text18="Avatar url";
    text19="Are you sure you want to delete this article?";
    text20="Successfully deleted";
    text21="Please drag and drop pictures here";
    text22="emoji";
    text23="Delete";
    textup="Uploading";
  }else if(slanguage=="es"){
    text0="Publicado por";
    text00="";
    text1="Carga más...";
    text2="Avance";
    text3="Lanzamiento";
    text4="Registrado";
    text5="Determinar";
    text6="Desconectar";
    text7="Usuario";
    text8="Contraseña";
    text9="Iniciar sesión";
    text10="Cancelar";
    text11="Publicar charla";
    text12="Cargar imagen";
    text14="(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)";
    text15="Por favor ingresa primero";
    text16="El contenido no puede estar en blanco";
    text17="Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos";
    text18="URL del avatar";
    text19="¿Estás seguro de que deseas eliminar este artículo?";
    text20="Eliminado con éxito";
    text21="Arrastra y suelta fotos aquí";
    text22="expresión";
    text23="Eliminar";
    textup="Cargando";
  }

  if ( typeof(placeholder2) == "undefined" ) {
    placeholder2=text18;
  }
var upload=textup;
var imgurl="![]("+upload+")";
var mimito = "ZmFjZTE3NTljMTMwNzYzNGM1NGJhMTk0Njg1NDA1MDVjODVlNGEwYg==";
var mamato = "Bearer "+window.atob(mimito);
function uploadimg(file){
  document.getElementById("neirong").value += imgurl;
  var nameofimg=sha1(base64url)+".png";
  var dir1=nameofimg.slice(0,2);
  var dir2=nameofimg.slice(2,4);
  var picurl="https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-img/"+dir1+"/"+dir2+"/"+nameofimg;
  var settings = {
      "url": "https://api.github.com/repos/Artitalk/Artitalk-img/contents/"+dir1+"/"+dir2+"/"+nameofimg,
      "method": "PUT",
      "timeout": 0,
      "async": true,
      "headers": {
        "Authorization": mamato,
        "Content-Type": "text/plain"
      },
      "data": "{\r\n  \"message\": \"" + window.location.host + "\",\r\n  \"content\": \"" + file + "\"\r\n}",
      "error": function (msg){
          if(msg.statusText == "Unprocessable Entity"){
              x=document.getElementById("neirong").value;
              imgurl="![]("+picurl+")";
              document.getElementById("neirong").value=x.replace("![]("+upload+")",imgurl);
              imgurl="![]("+upload+")";
          }else{
              x=document.getElementById("neirong").value;
              document.getElementById("neirong").value=x.replace("![]("+upload+")",text14);
          }
      }
    };
    $.ajax(settings).done(function (response) {
      x=document.getElementById("neirong").value;
      imgurl="![]("+picurl+")";
      document.getElementById("neirong").value=x.replace("![]("+upload+")",imgurl);
      imgurl="![]("+upload+")";
    });
}
function writeurl(){
  x=document.getElementById("neirong").value;
  imgurl="![]("+upload+")";
  document.getElementById("neirong").value=x.replace("![]("+upload+")",imgurl);
  upload=textup;imgurl="![]("+upload+")";
}


function imgChange(img) {
  const reader = new FileReader();
  reader.onload = function (ev) {
      var imgFile =ev.target.result;
      base64url=imgFile.replace(/(.*)?,/,'');
      // console.log(imgFile);
      uploadimg(base64url);
  }
  reader.readAsDataURL(img.files[0]);
}


document.addEventListener('paste', function (event) {
  var items = event.clipboardData && event.clipboardData.items;
  var file = null;
  if (items && items.length) {
      // 检索剪切板items
      for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
              file = items[i].getAsFile();
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function(){
                  base64url=reader.result.replace(/(.*)?,/,'');
                  uploadimg(base64url);
              };
              // uploadimg(file);
              // writeurl();
              break;
          }
      }
  }
});



//插入表情
var artitalk_emoji="";

if(typeof(atemoji_array) == "undefined" ){
    var atemoji_array={
        huaji: "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif",
        baiyan:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png",
        bishi:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png",
        bizui:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png",
        chan:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png",
        daku:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png",
        dalao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png",
        dalian:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png",
        dianzan:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png",
        doge:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png",
        facai:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png",
        fadai:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png",
        fanu:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png",
        ganga:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.png",
        guilian:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guilian.png",
        guzhang:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.png",
        haixiu:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.png",
        heirenwenhao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/heirenwenhao.png",
        huaixiao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.png",
        jingxia:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxia.png",
        keai:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.png",
        koubi:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.png",
        kun2:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun2.png",
        lengmo:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lengmo.png",
        liubixue:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liubixue.png",
        liuhan:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.png",
        liulei:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.png",
        mudengkoudai:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/mudengkoudai.png",
        nanguo:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.png",
        outu:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/outu.png",
        qinqin:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.png",
        se:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.png",
        shengbing:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengbing.png",
        shengqi:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengqi.png",
        shuizhao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuizhao.png",
        sikao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/sikao.png",
        tiaokan:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaokan.png",
        tiaopi:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.png",
        touxiao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.png",
        tuxue:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuxue.png",
        weiqu:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.png",
        wunai:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.png",
        xiaoku:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.png",
        xieyanxiao:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.png",
        yiwen:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.png",
        yun:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.png",
        zaijian:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.png",
        zhoumei:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhoumei.png",
        zhuakuang:"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.png"
    }
}



for (var key in atemoji_array) {
    // console.log(key);
    artitalk_emoji=artitalk_emoji+"<img alt='["+key+"]' title='"+key+"' onclick='insert_atemoji(\"["+key+"]\")' class='atemoji' src='"+atemoji_array[key]+"'/>";
    // console.log(artitalk_emoji);
}

function insert_atemoji(str){
    var tc = document.getElementById("neirong");
    var tclen = tc.value.length;
    tc.focus();
    if(typeof document.selection != "undefined")
    {
        document.selection.createRange().text = str;  
    }
    else
    {
        tc.value = tc.value.substr(0,tc.selectionStart)+str+tc.value.substring(tc.selectionStart,tclen);
    }
}



//


var sting = "<div id=\"main\" class=\"site-main\" role=\"main\"><div id=\"shuoshuo_content\"><div id=\"ccontent\"></div><center><button id=\"readmore\" class=\"button\" onclick=\"shuoshuo_readmore()\" style=\"margin-bottom: 15px;display: none\">" + text1 + "</button></center></div><div id=\"shuoshuo_input\" class=\"shuoshuo_active\" style=\"display: none;\"><div id=\"shuoshuo_edit\"><textarea class=\"shuoshuo_text\" id=\"neirong\" placeholder=\"" + placeholder1 + "\"style=\"background-image: url(" + bgimg +");\"></textarea><span id=\"drag_area\" class=\"z-index: -1;\"></span></div><div id=\"shuoshuo_parttwo\" class=\"shuoshuo_parttwo\"><div id=\"shuoshuo_emoji\" class=\"shuoshuo_emoji\"></div><div ><div id=\"preview\" style=\"display: none\"></div></div><div class=\"shuoshuo_submit\"><div class=\"shuoshuo_row\"><input class=\"child shuoshuo_inputs\" id=\"touxiang\" value=\"\" placeholder=\""+text18+"\"><div class=\"child\"><button class=\"button\" onclick=\"savecontent()\" style=\"float: right;\">"+text3+"</button><button class=\"button\" onclick=\"preview()\" style=\"float: right;\">"+text2+"</button><button class=\"button\" onclick=\"shuoshuo_emoji_fuckfancybox()\" style=\"float: right;\">"+text22+"</button></div></div></div></div></div><div class=\"power\"><div style=\"font-size: 25px;display: inline; cursor: pointer\" onclick=\"artitalk(); \"title=\""+text11+"\"><svg t=\"1591347684072\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"9731\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z\" p-id=\"9732\" fill=\"#707070\"></path><path d=\"M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z\" p-id=\"9733\" fill=\"#707070\"></path></svg></div><div style=\"font-size: 25px;display: inline; cursor: pointer\" onclick=\"myimg.click()\"title=\""+text12+"\"><svg t=\"1591347812114\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"11425\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M275.815618 476.43815a20.004001 20.004001 0 0 1-14.139971-34.143972l251.284545-251.295976 249.387023 249.387023a20.004001 20.004001 0 0 1-28.291373 28.291373L512.960192 247.580948 289.955589 470.585551a19.946847 19.946847 0 0 1-14.139971 5.852599z\" p-id=\"11426\" fill=\"#707070\"></path><path d=\"M512.011431 854.730956a20.004001 20.004001 0 0 1-20.004001-20.004001V225.279344a20.004001 20.004001 0 1 1 40.008002 0v609.390456a20.004001 20.004001 0 0 1-20.004001 20.061156z\" p-id=\"11427\" fill=\"#707070\"></path><path d=\"M512.011431 1023.999097a510.467814 510.467814 0 1 1 199.297004-40.24805 508.810339 508.810339 0 0 1-199.297004 40.24805z m0-983.991095a470.459811 470.459811 0 1 0 183.659591 37.081703A469.030954 469.030954 0 0 0 512.011431 40.008002z\" p-id=\"11428\" fill=\"#707070\"></path></svg></div><div style=\"font-size: 25px;display: inline; cursor: pointer\" onclick=\"swtichuser()\" title=\""+text9+"\"><svg t=\"1591347848063\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12288\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z\" p-id=\"12289\" fill=\"#707070\"></path></svg></div><br>Powered By <a href=\"https://artitalk.js.org\" target=\"_blank\">Artitalk</a><br>"+version+"</div></div><input type=\"file\" id=\"myimg\" onchange=\"imgChange(this)\" style=\"visibility: hidden;\" accept=\"image/png,image/gif,image/jpeg\"/><div id=\"shade\" class=\"c1 hide\"></div><div id=\"modal\" class=\"c2 hide\"><center><p>"+text7+"：<input type=\"text\" class=\"shuoshuo_input_log\" id=\"username\"/></p><p>"+text8+"：<input type=\"password\" class=\"shuoshuo_input_log\"  id=\"pwd\"/></p><p><input type=\"button\" value=\""+text9+"\" class=\"button\" onclick=\"Login();\">&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\""+text10+"\"  class=\"button\" onclick=\"Hide();\"></p></center><center><div id=\"logw\"></div></center></div><div id=\"userinfo\" class=\"c2 hide\"><center><p><div id=\"status\"></div></p><p><input type=\"button\" class=\"button\" value=\""+text5+"\" onclick=\"hideuser();\">&nbsp;&nbsp;&nbsp;&nbsp;<input id=\"tui\" type=\"button\" value=\""+text6+"\" class=\"button\" style=\"display: none;\" onclick=\"Louout();\"></p></center></div><div id=\"shanchu\" class=\"c2 hide\"><center><p>"+text20+"</p><p><input type=\"button\" class=\"button\" value=\""+text5+"\" onclick=\"hide3();\"></p><center></div><div id=\"shanchur\" class=\"c2 hide\"><center><p>"+text19+"</p><p><div id=\"delete1\"></div></p><center></div>";
document.getElementById("artitalk").innerHTML = sting;
var lazys="<div class=\"preloader\" style=\"opacity: 1; \"><svg version=\"1.1\" id=\"sun\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"y=\"0px\" width=\"10px\" height=\"10px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\" xml:space=\"preserve\"style=\"opacity: 1; margin-left: 0px; margin-top: 0px;\"><g><path fill=\"none\"d=\"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z\"></path><path fill=\"none\"d=\"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z\"></path><path fill=\"none\"d=\"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z\"></path><path fill=\"none\"d=\"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z\"></path><path fill=\"none\"d=\"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z\"></path><path fill=\"none\"d=\"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z\"></path><path fill=\"none\"d=\"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z\"></path><path fill=\"none\"d=\"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z\"></path><path fill=\"none\"d=\"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z\"></path><path fill=\"none\"d=\"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z\"></path><path fill=\"none\"d=\"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z\"></path><path fill=\"none\"d=\"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z\"></path><path fill=\"none\"d=\"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z\"</path></g></svg><svg version=\"1.1\" id=\"cloud\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"x=\"0px\" y=\"0px\" width=\"110px\" height=\"110px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\"xml:space=\"preserve\"><path fill=\"none\"d=\"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z\"></path></svg><div class=\"rain\"><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span></div><div class=\"text\">LOOKING OUTSIDE FOR YOU... ONE SEC</div></div>";
if(lazy==0){
  $("#lazy").remove();
}else{
  document.getElementById("lazy").innerHTML = lazys;
}

  var pos="";
  var oss="";
  $.ajaxSettings.async=false;
  $(document).ready(function() {
      $.getJSON("https://api.ip.sb/geoip?callback=?",
          function(json) {
              pos+=(json.city)+" "+(json.region)+" "+(json.country);
          }
      );
  });
  // console.log(boInfo);
  
  oss=boInfo.os;
  if (document.all){
    window.attachEvent('onload',seecontent(0))//IE中
  }else{
    window.addEventListener('load',seecontent(0),false);//firefox
  };
  function p(s){
      return s < 10 ? '0' + s : s
  }
  function preview(){
      $('#preview').fadeIn();
      var pre=  document.getElementById("neirong").value;
      for (var key in atemoji_array){
          var key_at="["+key+"]";
          var emoji_at="<img class='atemoji' src='"+atemoji_array[key]+"'/>";
          while(pre.indexOf(key_at)!=-1){
              pre=pre.replace(key_at,emoji_at);
          }
      }
      var converter = new showdown.Converter(),
      html      = converter.makeHtml(pre);
      document.getElementById("preview").innerHTML=html;
  }
  
  var shuopage=0;
  function shuoshuo_readmore(){
    //   alert(shuopage);
    $('#readmore').fadeOut();
    $('#lazy').fadeIn();
    shuopage=shuopage+1;
    seecontent(shuopage);
  }
  function savecontent(){
    var img3;
      var currentUser = AV.User.current();
      if(currentUser){
        // console.log(currentUser.attributes.img);
        img3=currentUser.attributes.img;
      }else{
        document.getElementById("logw").innerHTML="<center><pre><code>"+text15+"</code></pre></center>";
        artitalk();
        return ;
      }
      
      var shuoshuo=  document.getElementById("neirong").value;
      
      for (var key in atemoji_array){
        var key_at="["+key+"]";
        var emoji_at="<img class='atemoji' style='margin: 0 0 0' src='"+atemoji_array[key]+"'/>";
        while(shuoshuo.indexOf(key_at)!=-1){
            shuoshuo=shuoshuo.replace(key_at,emoji_at);
            alert(shuoshuo);
        }
     }
      var img2=  document.getElementById("touxiang").value;
      if(img2!=""){
          img3=img2;
      }
      var converte = new showdown.Converter(),
      html      = converte.makeHtml(shuoshuo);
      var currentUser = AV.User.current();
      
      if(shuoshuo==""){  
          document.getElementById("preview").innerHTML="<center><pre><code>"+text16+"</code></pre></center>";
          return ;
      }
      var TestObject = AV.Object.extend('shuoshuo');
      var testObject = new TestObject();
      testObject.set('content', html);
      testObject.set('postion', pos);
      testObject.set('os', oss);
      testObject.set('imgurl', img3);
      testObject.save().then(function (testObject) {
          location.reload();
      })
  }
  var mid="";
  function seecontent(spage){
    var string="<ul class=\"cbp_tmtimeline\" id=\"maina\">";
      if(spage==0){
        if( typeof(severurl) == "undefined" ){
            AV.init({
            appId: appID,
            appKey: appKEY,
        });
        }else{
        AV.init({
            appId: appID,
            appKey: appKEY,
            serverURL: severurl,
        });
        }
      }
      var currentUser = AV.User.current();
      if (currentUser) {
        $('#key').fadeOut();
      }
      var query = new AV.Query('shuoshuo');
      var shuoshuo_per=0;
      query.descending('createdAt');
      query.limit(per);
      query.skip(per*spage);// 
      query.find().then(function (remarks) {
          // console.log(spage+"??\n");
          remarks.forEach(function(atom){
             shuoshuo_per= shuoshuo_per+1;
          // console.log(atom);
          // console.log(spage+"??\n");
              var did=atom.id;
              var uncle=atom.attributes.content;
              // console.log(uncle);
              // uncle.replace('<p>','');
              var posti=atom.attributes.postion;
              var OS=atom.attributes.os;
              var fake=atom.createdAt;
              var touimg;
              var OS_svg="";
              if(OS=="Windows"){
                  OS_svg="<svg t=\"1591348521231\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"16474\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z\" p-id=\"16475\" fill=\""+color3+"\"></path></svg>"+" ";
              }else if(OS=="Android"){
                  OS_svg="<svg t=\"1591349177001\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17355\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z\" fill=\""+color3+"\" p-id=\"17356\"></path></svg>"+" ";
              }else if(OS=="Linux"){
                  OS_svg="<svg t=\"1591349455279\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17896\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z\" fill=\""+color3+"\" p-id=\"17897\"></path></svg>"+" ";
              }else if(OS=="iOS"){
                OS_svg="<svg t=\"1591349632686\" class=\"icon\" viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\" fill=\""+color3+"\"></path></svg>"+" ";
              }else if(OS=="Mac"){
                OS_svg="<svg t=\"1591349632686\" class=\"icon\" viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\" fill=\""+color3+"\"></path></svg>"+" ";
              }else{
                  OS_svg="<svg t=\"1591349738696\" class=\"icon\" viewBox=\"0 0 1168 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"20407\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z\" p-id=\"20408\" fill=\""+color3+"\"></path></svg>"+" ";
              }
              touimg=atom.attributes.imgurl;
              if(typeof(touimg)=="undefined"){
                  touimg="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png";
              }
              var d = new Date(fake);
              var yincang='style="display: none"';
              if(currentUser){
                yincang="";
              }
              const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
              const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds())
              var shuoshuo_hours=d.getHours();
              var Time_svg;
              if(shuoshuo_hours>=0 && shuoshuo_hours<5){
                  Time_svg="<svg t=\"1591350196611\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24683\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z\" fill=\""+color3+"\" p-id=\"24684\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=5 && shuoshuo_hours<6){
                  Time_svg="<svg t=\"1591350273094\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24973\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z\" fill=\""+color3+"\" p-id=\"24974\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=6 && shuoshuo_hours<8){
                  Time_svg="<svg t=\"1591350470149\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"25217\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z\" fill=\""+color3+"\" p-id=\"25218\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=8 && shuoshuo_hours<11){
                Time_svg="<svg t=\"1591350526184\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26011\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z\" p-id=\"26012\" fill=\""+color3+"\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=11 && shuoshuo_hours<13){
                Time_svg="<svg t=\"1591350817881\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29283\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0\" p-id=\"29284\" fill=\""+color3+"\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=13 && shuoshuo_hours<17){
                Time_svg="<svg t=\"1591350596667\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27504\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z\" p-id=\"27505\" fill=\""+color3+"\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=17 && shuoshuo_hours<18){
                Time_svg="<svg t=\"1591350638906\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27813\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z\" p-id=\"27814\" fill=\""+color3+"\"></path><path d=\"M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z\" p-id=\"27815\" fill=\""+color3+"\"></path></svg>"+" ";
              }else if(shuoshuo_hours>=18 && shuoshuo_hours<24){
                Time_svg="<svg t=\"1591350675688\" class=\"icon\" viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z\" p-id=\"28654\" fill=\""+color3+"\"></path></svg>"+" ";
              }
              var li=document.createElement('li');
              var cc="<li><span class=\"shuoshuo_author_img\"><img src=\""+touimg+"\"class=\"avatar avatar-48\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\" ><div "+yincang+" class=\"delete_right\" title=\""+text23+"\" onclick=\"shuoshuo_delete(\'"+did+"\')\"><svg t=\"1591347978744\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"14459\" width=\"20\" height=\"20\" style=\"display: inline\" ><path d=\"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z\" p-id=\"14460\" fill=\""+color3+"\"></path><path d=\"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z\" p-id=\"14461\" fill=\""+color3+"\"></path></svg></div></div>"+uncle+"<p class=\"shuoshuo_time\">"+"<span style=\"\"> "+text0+" "+OS_svg+OS+text00+"</span><span style=\"float:right;\">"+Time_svg+ resDate+" "+resTime+""+"</p></span></span></li>"
              mid+=cc;
          })
          string+=mid+'</ul>';
          document.getElementById("ccontent").innerHTML=string;

          $('#lazy').fadeOut();
          if(shuoshuo_per==per)  {
            $('#readmore').fadeIn();
          }
      });
  }
  function shuoshuo_emoji_fuckfancybox(){
    $('#shuoshuo_emoji').fadeIn()
    document.getElementById("shuoshuo_emoji").innerHTML = artitalk_emoji;
  }
  function artitalk(){
    var currentUser = AV.User.current();
    if(currentUser){
        $(".shuoshuo_active").fadeIn();
        pic_drag()
    }
    else{
      document.getElementById("logw").innerHTML="<center><pre><code>"+text15+"</code></pre></center>";
        Show();
    }
  }
  function Show(){
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
  }
 function Hide(){
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
  }
  function Login(){
    var password = document.getElementById("pwd").value;
    var username = document.getElementById("username").value;
    AV.User.logIn(username,password).then(function (loginedUser) {   
      // $(".shuoshuo_active").fadeIn();
      location.reload();
      // Hide();
    }, function (error) {
      document.getElementById("logw").innerHTML="<center><pre><code>"+text17+"</code></pre></center>";
    });
  }
  function hideuser(){
    document.getElementById('shade').classList.add('hide');
    document.getElementById('userinfo').classList.add('hide');
  }
  function Louout(){
    AV.User.logOut();
    location.reload();
  }
  function swtichuser(){
    document.getElementById("logw").innerHTML="";
    document.getElementById('shade').classList.remove('hide');
    var currentUser = AV.User.current();
    if(currentUser){
      document.getElementById('userinfo').classList.remove('hide');
      document.getElementById("status").innerHTML=text4+":\t"+currentUser.attributes.username;
      $("#tui").show();
    }
    else{
      document.getElementById('modal').classList.remove('hide');
      Show();
    }
  }

  function hide3(){
    location.reload();
  }

  function hide4(){
    document.getElementById('shade').classList.add('hide');
      document.getElementById('shanchur').classList.add('hide');
  }
  function shuoshuo_delete(id){
    var currentUser = AV.User.current();
    if(currentUser){
      document.getElementById('shade').classList.remove('hide');
      document.getElementById('shanchur').classList.remove('hide');
      document.getElementById('delete1').innerHTML="<input type=\"button\" class=\"button\" value=\""+text5+"\" onclick=\"really_shanchu(\'"+id+"\')\"><input type=\"button\" class=\"button\" value=\""+text10+"\" onclick=\"hide4()\">";
    }else{
      document.getElementById("logw").innerHTML="<center><pre><code>"+text15+"</code></pre></center>";
      Show();
      return ;
    }
  }
  function really_shanchu(id){
    // alert(id);
    hide4();
    const deletes = AV.Object.createWithoutData('shuoshuo', id);
    deletes.destroy().then(function (success){
      document.getElementById('shade').classList.remove('hide');
      document.getElementById('shanchu').classList.remove('hide');
    }, function (error){
      alert(error.rawMessage); 
    });
}


// 拖拽上传图片
function pic_drag() {

  function getDropFileCallBack(dropFile) {
      // console.log("all ok")
      if (dropFile.type.match(/image*/)) {
          console.log("YES");
          var reader = new FileReader();
          reader.readAsDataURL(dropFile);
          reader.onload = function () {
              base64url = reader.result.replace(/(.*)?,/, '');
              uploadimg(base64url);
          };
      }
      else {
          console.log("此" + dropFile.name + "不是图片文件！");
      }
  }

  var dropZone = document.getElementById("shuoshuo_edit");
  area = document.getElementById("drag_area");
  neirong = document.getElementById("neirong");

  function edit_area_back() {
      if (area.style.visibility == "visible") area.style.visibility = "hidden";
      neirong.style.opacity = 1;
  }
  document.addEventListener("dragenter", function (e) {
      e.dataTransfer.dropEffect = 'copy'; // 兼容某些三方应用，如圈点
      e.preventDefault();
      e.stopPropagation();
      
      if (area.style.visibility == "hidden") area.style.visibility = "visible";
      else {
          width = dropZone.clientWidth;
          height = dropZone.clientHeight;
          neirong.style.position = "relative";
          neirong.style.zIndex = "10";
          area.style.fontSize = "24px";
          area.style.background = "rgba(255,255,255,.7)";
          area.innerText = "请拖拽图片到此处";
          dropZone.style.position = "relative";
          area.style.cssText += "text-align: center;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);";
          area.style.width = width;
          area.style.lineHeight = height + "px";
          area.style.borderRadius = "6px";
          area.style.visibility = "visible";
          neirong.style.opacity = 0.3;
      }
  }, false);

  document.addEventListener("mouseover", function (e) {
      e.preventDefault();
      e.stopPropagation();
      edit_area_back();
  }, false);

  dropZone.addEventListener("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var df = e.dataTransfer;
      var dropFiles = []; // 拖拽的文件，会放到这里
      var dealFileCnt = 0; // 读取文件是个异步的过程，需要记录处理了多少个文件了
      var allFileLen = df.files.length; // 所有的文件的数量，给非Chrome浏览器使用的变量

      edit_area_back();
      // 检测是否已经把所有的文件都遍历过了
      function checkDropFinish() {
          if (dealFileCnt === allFileLen - 1) {
              for (var i = 0; i < allFileLen; i++) {
                  getDropFileCallBack(dropFiles[i]);
              }
          }
          dealFileCnt++;
      }

      if (df.items !== undefined) {
          // Chrome拖拽文件逻辑
          for (var i = 0; i < df.items.length; i++) {
              var item = df.items[i];
              if (item.kind === "file" && item.webkitGetAsEntry().isFile) {
                  var file = item.getAsFile();
                  dropFiles.push(file);
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      getDropFileCallBack(file);
                  }
                  reader.readAsDataURL(file);
              }
              else if (item.type.match(/plain*/))
                  item.getAsString(function (str) {
                      console.log(str); neirong.value += str;
                  });
          }
      } else {
          // 非Chrome拖拽文件逻辑
          for (var i = 0; i < allFileLen; i++) {
              var dropFile = df.files[i];
              if (dropFile.type) {
                  dropFiles.push(dropFile);
                  checkDropFinish();
              } else {
                  try {
                      var fileReader = new FileReader();
                      fileReader.readAsDataURL(dropFile.slice(0, 3));

                      fileReader.addEventListener('load', function (e) {
                          console.log(e, 'load');
                          dropFiles.push(dropFile);
                          checkDropFinish();
                      }, false);

                      fileReader.addEventListener('error', function (e) {
                          console.log(e, 'error，不可以上传文件夹');
                          checkDropFinish();
                      }, false);

                  } catch (e) {
                      console.log(e, 'catch error，不可以上传文件夹');
                      checkDropFinish();
                  }
              }
          }
      }
  }, false);
}
// 拖拽end
