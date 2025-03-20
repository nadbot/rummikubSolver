function i(t) {
    return t && "object" == typeof t && "default" in t ? t.default : t
}

var r, a = i(n("vgmO")), o = i(n("7zRj")), s = i(n("G43f")), l = i(n("jBAH")),
    u = i(n("7sdD")), c = i(n("K4wu")), d = "6.13.0",
    h = a.navigator && a.navigator.userAgent || "", f = /AppleWebKit\/([\d.]+)/i.exec(h),
    p = f ? parseFloat(f.pop()) : null, g = /iPad/i.test(h), v = /iPhone/i.test(h) && !g, m = /iPod/i.test(h),
    y = v || g || m, b = (r = h.match(/OS (\d+)_/i)) && r[1] ? r[1] : null, x = /Android/i.test(h), _ = function () {
        var t = h.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!t) return null;
        var e = t[1] && parseFloat(t[1]),
            n = t[2] && parseFloat(t[2]);
        return e && n ? parseFloat(t[1] + "." + t[2]) : e || null
    }(), w = x && /webkit/i.test(h) && _ < 2.3,
    C = x && _ < 5 && p < 537, S = /Firefox/i.test(h), k = /Edge/i.test(h),
    T = !k && (/Chrome/i.test(h) || /CriOS/i.test(h)),
    M = function () {
        var t = h.match(/(Chrome|CriOS)\/(\d+)/);
        return t && t[2] ? parseFloat(t[2]) : null
    }(), O = /MSIE\s8\.0/.test(h),
    A = function () {
        var t = /MSIE\s(\d+)\.\d/.exec(h), e = t && parseFloat(t[1]);
        return !e && /Trident\/7.0/i.test(h) && /rv:11.0/.test(h) && (e = 11), e
    }(),
    D = /Safari/i.test(h) && !T && !x && !k, E = (D || y) && !T,
    P = J() && ("ontouchstart" in a || a.navigator.maxTouchPoints || a.DocumentTouch && a.document instanceof a.DocumentTouch),
    I = J() && "backgroundSize" in a.document.createElement("video").style,
    L = (Object.freeze || Object)({
        IS_IPAD: g,
        IS_IPHONE: v,
        IS_IPOD: m,
        IS_IOS: y,
        IOS_VERSION: b,
        IS_ANDROID: x,
        ANDROID_VERSION: _,
        IS_OLD_ANDROID: w,
        IS_NATIVE_ANDROID: C,
        IS_FIREFOX: S,
        IS_EDGE: k,
        IS_CHROME: T,
        CHROME_VERSION: M,
        IS_IE8: O,
        IE_VERSION: A,
        IS_SAFARI: D,
        IS_ANY_SAFARI: E,
        TOUCH_ENABLED: P,
        BACKGROUND_SIZE_SUPPORTED: I
    }),
    R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } :
        function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
    N = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    B = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e)
            ;
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t, enumerable: !1, writable: !0, configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }, j = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }, F = function (t, e) {
        return t.raw = e, t
    }, z = Object.prototype.toString, V = function (t) {
        return q(t) ? Object.keys(t) : []
    };

function H(t, e) {
    V(t).forEach((function (n) {
        return e(t[n], n)
    }))
}

function W(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
    return Object.assign ? Object.assign.apply(Object, [t].concat(n)) : (n.forEach((function (e) {
        e && H(e, (function (e, n) {
            t[n] = e
        }))
    })), t)
}

function q(t) {
    return !!t && "object" === (void 0 === t ? "undefined" : R(t))
}

function U(t) {
    return q(t) && "[object Object]" === z.call(t) && t.constructor === Object
}

var Y = [];
var G = function t(e) {
    var n = "info", i = void 0, r = function t() {
        for (var e = t.stringify || A && A < 11, r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
        i("log", n, a, e)
    };
    return i = function (t, e) {
        return function (n, i, r, o) {
            var s = e.levels[i], l = new RegExp("^(" + s + ")$");
            if ("log" !== n && r.unshift(n.toUpperCase() + ":"), r.unshift(t + ":"), Y && Y.push([].concat(r)), a.console) {
                var u = a.console[n];
                u || "debug" !== n || (u = a.console.info || a.console.log), u && s && l.test(n) && (o && (r = r.map((function (t) {
                    if (q(t) || Array.isArray(t)) try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return String(t)
                    }
                    return String(t)
                })).join(" ")), u.apply ? u[Array.isArray(r) ? "apply" : "call"](a.console, r) : u(r))
            }
        }
    }(e, r), r.createLogger = function (n) {
        return t(e + ": " + n)
    }, r.levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: n
    }, r.level = function (t) {
        if ("string" == typeof t) {
            if (!r.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
            n = t
        }
        return n
    }, (r.history = function () {
        return Y ? [].concat(Y) : []
    }).filter = function (t) {
        return (Y || []).filter((function (e) {
            return new RegExp(".*" + t + ".*").test(e[0])
        }))
    }, r.history.clear = function () {
        Y && (Y.length = 0)
    }, r.history.disable = function () {
        null !== Y && (Y.length = 0, Y = null)
    }, r.history.enable = function () {
        null === Y && (Y = [])
    }, r.error = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return i("error", n, e)
    }, r.warn = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return i("warn", n, e)
    }, r.debug = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return i("debug", n, e)
    }, r
}("VIDEOJS"), X = G.createLogger;

function Z(t, e) {
    if (!t || !e) return "";
    if ("function" == typeof a.getComputedStyle) {
        var n = a.getComputedStyle(t);
        return n ? n[e] : ""
    }
    return t.currentStyle[e] || ""
}

var K = F(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

function $(t) {
    return "string" == typeof t && /\S/.test(t)
}

function Q(t) {
    if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
}

function J() {
    return o === a.document && void 0 !== o.createElement
}

function tt(t) {
    return q(t) && 1 === t.nodeType
}

function et() {
    try {
        return a.parent !== a.self
    } catch (t) {
        return !0
    }
}

function nt(t) {
    return function (e, n) {
        if (!$(e)) return o[t](null);
        $(n) && (n = o.querySelector(n));
        var i = tt(n) ? n : o;
        return i[t] && i[t](e)
    }
}

function it() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments[3],
        r = o.createElement(t);
    return Object.getOwnPropertyNames(e).forEach((function (t) {
        var n = e[t];
        -1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (G.warn(s(K, t, n)), r.setAttribute(t, n)) : "textContent" === t ? rt(r, n) : r[t] = n
    })), Object.getOwnPropertyNames(n).forEach((function (t) {
        r.setAttribute(t, n[t])
    })), i && Ct(r, i), r
}

function rt(t, e) {
    return void 0 === t.textContent ? t.innerText = e : t.textContent = e, t
}

function at(t, e) {
    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
}

function ot(t, e) {
    return Q(e), t.classList ? t.classList.contains(e) : (n = e, new RegExp("(^|\\s)" + n + "($|\\s)")).test(t.className);
    var n
}

function st(t, e) {
    return t.classList ? t.classList.add(e) : ot(t, e) || (t.className = (t.className + " " + e).trim()), t
}

function lt(t, e) {
    return t.classList ? t.classList.remove(e) : (Q(e), t.className = t.className.split(/\s+/).filter((function (t) {
        return t !== e
    })).join(" ")), t
}

function ut(t, e, n) {
    var i = ot(t, e);
    if ("function" == typeof n && (n = n(t, e)), "boolean" != typeof n && (n = !i), n !== i) return n ? st(t, e) : lt(t, e), t
}

function ct(t, e) {
    Object.getOwnPropertyNames(e).forEach((function (n) {
        var i = e[n];
        null == i || !1 === i ? t.removeAttribute(n) : t.setAttribute(n, !0 === i ? "" : i)
    }))
}

function dt(t) {
    var e = {}, n = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
    if (t && t.attributes && t.attributes.length > 0) for (var i = t.attributes, r = i.length - 1; r >= 0; r--) {
        var a = i[r].name, o = i[r].value;
        "boolean" != typeof t[a] && -1 === n.indexOf("," + a + ",") || (o = null !== o), e[a] = o
    }
    return e
}

function ht(t, e) {
    return t.getAttribute(e)
}

function ft(t, e, n) {
    t.setAttribute(e, n)
}

function pt(t, e) {
    t.removeAttribute(e)
}

function gt() {
    o.body.focus(), o.onselectstart = function () {
        return !1
    }
}

function vt() {
    o.onselectstart = function () {
        return !0
    }
}

function mt(t) {
    if (t && t.getBoundingClientRect && t.parentNode) {
        var e = t.getBoundingClientRect(), n = {};
        return ["bottom", "height", "left", "right", "top", "width"].forEach((function (t) {
            void 0 !== e[t] && (n[t] = e[t])
        })), n.height || (n.height = parseFloat(Z(t, "height"))), n.width || (n.width = parseFloat(Z(t, "width"))), n
    }
}

function yt(t) {
    var e = void 0;
    if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {left: 0, top: 0};
    var n = o.documentElement, i = o.body, r = n.clientLeft || i.clientLeft || 0, s = a.pageXOffset || i.scrollLeft,
        l = e.left + s - r, u = n.clientTop || i.clientTop || 0, c = a.pageYOffset || i.scrollTop, d = e.top + c - u;
    return {left: Math.round(l), top: Math.round(d)}
}

function bt(t, e) {
    var n = {}, i = yt(t), r = t.offsetWidth, a = t.offsetHeight, o = i.top, s = i.left, l = e.pageY, u = e.pageX;
    return e.changedTouches && (u = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (o - l + a) / a)), n.x = Math.max(0, Math.min(1, (u - s) / r)), n
}

function xt(t) {
    return q(t) && 3 === t.nodeType
}

function _t(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild);
    return t
}

function wt(t) {
    return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map((function (t) {
        return "function" == typeof t && (t = t()), tt(t) || xt(t) ? t : "string" == typeof t && /\S/.test(t) ? o.createTextNode(t) : void 0
    })).filter((function (t) {
        return t
    }))
}

function Ct(t, e) {
    return wt(e).forEach((function (e) {
        return t.appendChild(e)
    })), t
}

function St(t, e) {
    return Ct(_t(t), e)
}

function kt(t) {
    return void 0 === t.button && void 0 === t.buttons || (0 === t.button && void 0 === t.buttons || (9 === A || 0 === t.button && 1 === t.buttons))
}

var Tt = nt("querySelector"), Mt = nt("querySelectorAll"), Ot = (Object.freeze || Object)({
    isReal: J,
    isEl: tt,
    isInFrame: et,
    createEl: it,
    textContent: rt,
    prependTo: at,
    hasClass: ot,
    addClass: st,
    removeClass: lt,
    toggleClass: ut,
    setAttributes: ct,
    getAttributes: dt,
    getAttribute: ht,
    setAttribute: ft,
    removeAttribute: pt,
    blockTextSelection: gt,
    unblockTextSelection: vt,
    getBoundingClientRect: mt,
    findPosition: yt,
    getPointerPosition: bt,
    isTextNode: xt,
    emptyEl: _t,
    normalizeContent: wt,
    appendContent: Ct,
    insertContent: St,
    isSingleLeftClick: kt,
    $: Tt,
    $$: Mt
}), At = 1;

function Dt() {
    return At++
}

var Et = {}, Pt = "vdata" + (new Date).getTime();

function It(t) {
    var e = t[Pt];
    return e || (e = t[Pt] = Dt()), Et[e] || (Et[e] = {}), Et[e]
}

function Lt(t) {
    var e = t[Pt];
    return !!e && !!Object.getOwnPropertyNames(Et[e]).length
}

function Rt(t) {
    var e = t[Pt];
    if (e) {
        delete Et[e];
        try {
            delete t[Pt]
        } catch (e) {
            t.removeAttribute ? t.removeAttribute(Pt) : t[Pt] = null
        }
    }
}

function Nt(t, e) {
    var n = It(t);
    0 === n.handlers[e].length && (delete n.handlers[e], t.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && Rt(t)
}

function Bt(t, e, n, i) {
    n.forEach((function (n) {
        t(e, n, i)
    }))
}

function jt(t) {
    function e() {
        return !0
    }

    function n() {
        return !1
    }

    if (!t || !t.isPropagationStopped) {
        var i = t || a.event;
        for (var r in t = {}, i) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && i.preventDefault || (t[r] = i[r]));
        if (t.target || (t.target = t.srcElement || o), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function () {
            i.preventDefault && i.preventDefault(), t.returnValue = !1, i.returnValue = !1, t.defaultPrevented = !0
        }, t.defaultPrevented = !1, t.stopPropagation = function () {
            i.stopPropagation && i.stopPropagation(), t.cancelBubble = !0, i.cancelBubble = !0, t.isPropagationStopped = e
        }, t.isPropagationStopped = n, t.stopImmediatePropagation = function () {
            i.stopImmediatePropagation && i.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
        }, t.isImmediatePropagationStopped = n, null !== t.clientX && void 0 !== t.clientX) {
            var s = o.documentElement, l = o.body;
            t.pageX = t.clientX + (s && s.scrollLeft || l && l.scrollLeft || 0) - (s && s.clientLeft || l && l.clientLeft || 0), t.pageY = t.clientY + (s && s.scrollTop || l && l.scrollTop || 0) - (s && s.clientTop || l && l.clientTop || 0)
        }
        t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
    }
    return t
}

var Ft = !1;
!function () {
    try {
        var t = Object.defineProperty({}, "passive", {
            get: function () {
                Ft = !0
            }
        });
        a.addEventListener("test", null, t), a.removeEventListener("test", null, t)
    } catch (t) {
    }
}();
var zt = ["touchstart", "touchmove"];

function Vt(t, e, n) {
    if (Array.isArray(e)) return Bt(Vt, t, e, n);
    var i = It(t);
    if (i.handlers || (i.handlers = {}), i.handlers[e] || (i.handlers[e] = []), n.guid || (n.guid = Dt()), i.handlers[e].push(n), i.dispatcher || (i.disabled = !1, i.dispatcher = function (e, n) {
        if (!i.disabled) {
            e = jt(e);
            var r = i.handlers[e.type];
            if (r) for (var a = r.slice(0), o = 0, s = a.length; o < s && !e.isImmediatePropagationStopped(); o++) try {
                a[o].call(t, e, n)
            } catch (t) {
                G.error(t)
            }
        }
    }), 1 === i.handlers[e].length) if (t.addEventListener) {
        var r = !1;
        Ft && zt.indexOf(e) > -1 && (r = {passive: !0}), t.addEventListener(e, i.dispatcher, r)
    } else t.attachEvent && t.attachEvent("on" + e, i.dispatcher)
}

function Ht(t, e, n) {
    if (Lt(t)) {
        var i = It(t);
        if (i.handlers) {
            if (Array.isArray(e)) return Bt(Ht, t, e, n);
            var r = function (t, e) {
                i.handlers[e] = [], Nt(t, e)
            };
            if (void 0 !== e) {
                var a = i.handlers[e];
                if (a) if (n) {
                    if (n.guid) for (var o = 0; o < a.length; o++) a[o].guid === n.guid && a.splice(o--, 1);
                    Nt(t, e)
                } else r(t, e)
            } else for (var s in i.handlers) Object.prototype.hasOwnProperty.call(i.handlers || {}, s) && r(t, s)
        }
    }
}

function Wt(t, e, n) {
    var i = Lt(t) ? It(t) : {}, r = t.parentNode || t.ownerDocument;
    if ("string" == typeof e ? e = {
        type: e,
        target: t
    } : e.target || (e.target = t), e = jt(e), i.dispatcher && i.dispatcher.call(t, e, n), r && !e.isPropagationStopped() && !0 === e.bubbles) Wt.call(null, r, e, n); else if (!r && !e.defaultPrevented) {
        var a = It(e.target);
        e.target[e.type] && (a.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), a.disabled = !1)
    }
    return !e.defaultPrevented
}

function qt(t, e, n) {
    if (Array.isArray(e)) return Bt(qt, t, e, n);
    var i = function i() {
        Ht(t, e, i), n.apply(this, arguments)
    };
    i.guid = n.guid = n.guid || Dt(), Vt(t, e, i)
}

var Ut = (Object.freeze || Object)({fixEvent: jt, on: Vt, off: Ht, trigger: Wt, one: qt}), Yt = !1, Gt = void 0,
    Xt = function () {
        if (J() && !1 !== Gt.options.autoSetup) {
            var t = o.getElementsByTagName("video"), e = o.getElementsByTagName("audio"),
                n = o.getElementsByTagName("video-js"), i = [];
            if (t && t.length > 0) for (var r = 0, a = t.length; r < a; r++) i.push(t[r]);
            if (e && e.length > 0) for (var s = 0, l = e.length; s < l; s++) i.push(e[s]);
            if (n && n.length > 0) for (var u = 0, c = n.length; u < c; u++) i.push(n[u]);
            if (i && i.length > 0) for (var d = 0, h = i.length; d < h; d++) {
                var f = i[d];
                if (!f || !f.getAttribute) {
                    Zt(1);
                    break
                }
                void 0 === f.player && null !== f.getAttribute("data-setup") && Gt(f)
            } else Yt || Zt(1)
        }
    };

function Zt(t, e) {
    e && (Gt = e), a.setTimeout(Xt, t)
}

J() && "complete" === o.readyState ? Yt = !0 : qt(a, "load", (function () {
    Yt = !0
}));
var Kt = function (t) {
    var e = o.createElement("style");
    return e.className = t, e
}, $t = function (t, e) {
    t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
}, Qt = function (t, e, n) {
    e.guid || (e.guid = Dt());
    var i = function () {
        return e.apply(t, arguments)
    };
    return i.guid = n ? n + "_" + e.guid : e.guid, i
}, Jt = function (t, e) {
    var n = Date.now();
    return function () {
        var i = Date.now();
        i - n >= e && (t.apply(void 0, arguments), n = i)
    }
}, te = function () {
};
te.prototype.allowedEvents_ = {}, te.prototype.on = function (t, e) {
    var n = this.addEventListener;
    this.addEventListener = function () {
    }, Vt(this, t, e), this.addEventListener = n
}, te.prototype.addEventListener = te.prototype.on, te.prototype.off = function (t, e) {
    Ht(this, t, e)
}, te.prototype.removeEventListener = te.prototype.off, te.prototype.one = function (t, e) {
    var n = this.addEventListener;
    this.addEventListener = function () {
    }, qt(this, t, e), this.addEventListener = n
}, te.prototype.trigger = function (t) {
    var e = t.type || t;
    "string" == typeof t && (t = {type: e}), t = jt(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), Wt(this, t)
}, te.prototype.dispatchEvent = te.prototype.trigger;
var ee = function (t) {
    return t instanceof te || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every((function (e) {
        return "function" == typeof t[e]
    }))
}, ne = function (t) {
    return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
}, ie = function (t) {
    if (!t.nodeName && !ee(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
}, re = function (t) {
    if (!ne(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
}, ae = function (t) {
    if ("function" != typeof t) throw new Error("Invalid listener; must be a function.")
}, oe = function (t, e) {
    var n = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_, i = void 0, r = void 0, a = void 0;
    return n ? (i = t.eventBusEl_, e.length >= 3 && e.shift(), r = e[0], a = e[1]) : (i = e[0], r = e[1], a = e[2]), ie(i), re(r), ae(a), {
        isTargetingSelf: n,
        target: i,
        type: r,
        listener: a = Qt(t, a)
    }
}, se = function (t, e, n, i) {
    ie(t), t.nodeName ? Ut[e](t, n, i) : t[e](n, i)
}, le = {
    on: function () {
        for (var t = this, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
        var r = oe(this, n), a = r.isTargetingSelf, o = r.target, s = r.type, l = r.listener;
        if (se(o, "on", s, l), !a) {
            var u = function () {
                return t.off(o, s, l)
            };
            u.guid = l.guid;
            var c = function () {
                return t.off("dispose", u)
            };
            c.guid = l.guid, se(this, "on", "dispose", u), se(o, "on", "dispose", c)
        }
    }, one: function () {
        for (var t = this, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
        var r = oe(this, n), a = r.isTargetingSelf, o = r.target, s = r.type, l = r.listener;
        if (a) se(o, "one", s, l); else {
            var u = function e() {
                for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                t.off(o, s, e), l.apply(null, i)
            };
            u.guid = l.guid, se(o, "one", s, u)
        }
    }, off: function (t, e, n) {
        if (!t || ne(t)) Ht(this.eventBusEl_, t, e); else {
            var i = t, r = e;
            ie(i), re(r), ae(n), n = Qt(this, n), this.off("dispose", n), i.nodeName ? (Ht(i, r, n), Ht(i, "dispose", n)) : ee(i) && (i.off(r, n), i.off("dispose", n))
        }
    }, trigger: function (t, e) {
        return Wt(this.eventBusEl_, t, e)
    }
};

function ue(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.eventBusKey;
    if (n) {
        if (!t[n].nodeName) throw new Error('The eventBusKey "' + n + '" does not refer to an element.');
        t.eventBusEl_ = t[n]
    } else t.eventBusEl_ = it("span", {className: "vjs-event-bus"});
    return W(t, le), t.on("dispose", (function () {
        t.off(), a.setTimeout((function () {
            t.eventBusEl_ = null
        }), 0)
    })), t
}

var ce = {
    state: {}, setState: function (t) {
        var e = this;
        "function" == typeof t && (t = t());
        var n = void 0;
        return H(t, (function (t, i) {
            e.state[i] !== t && ((n = n || {})[i] = {from: e.state[i], to: t}), e.state[i] = t
        })), n && ee(this) && this.trigger({changes: n, type: "statechanged"}), n
    }
};

function de(t, e) {
    return W(t, ce), t.state = W({}, t.state, e), "function" == typeof t.handleStateChanged && ee(t) && t.on("statechanged", t.handleStateChanged), t
}

function he(t) {
    return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
}

function fe() {
    for (var t = {}, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
    return n.forEach((function (e) {
        e && H(e, (function (e, n) {
            U(e) ? (U(t[n]) || (t[n] = {}), t[n] = fe(t[n], e)) : t[n] = e
        }))
    })), t
}

var pe = function () {
    function t(e, n, i) {
        if (N(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = fe({}, this.options_), n = this.options_ = fe(this.options_, n), this.id_ = n.id || n.el && n.el.id, !this.id_) {
            var r = e && e.id && e.id() || "no_player";
            this.id_ = r + "_component_" + Dt()
        }
        this.name_ = n.name || null, n.el ? this.el_ = n.el : !1 !== n.createEl && (this.el_ = this.createEl()), !1 !== n.evented && ue(this, {eventBusKey: this.el_ ? "el_" : null}), de(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== n.initChildren && this.initChildren(), this.ready(i), !1 !== n.reportTouchActivity && this.enableTouchActivity()
    }

    return t.prototype.dispose = function () {
        if (this.trigger({
            type: "dispose",
            bubbles: !1
        }), this.children_) for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), Rt(this.el_), this.el_ = null), this.player_ = null
    }, t.prototype.player = function () {
        return this.player_
    }, t.prototype.options = function (t) {
        return G.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = fe(this.options_, t), this.options_) : this.options_
    }, t.prototype.el = function () {
        return this.el_
    }, t.prototype.createEl = function (t, e, n) {
        return it(t, e, n)
    }, t.prototype.localize = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            i = this.player_.language && this.player_.language(),
            r = this.player_.languages && this.player_.languages(), a = r && r[i], o = i && i.split("-")[0],
            s = r && r[o], l = n;
        return a && a[t] ? l = a[t] : s && s[t] && (l = s[t]), e && (l = l.replace(/\{(\d+)\}/g, (function (t, n) {
            var i = e[n - 1], r = i;
            return void 0 === i && (r = t), r
        }))), l
    }, t.prototype.contentEl = function () {
        return this.contentEl_ || this.el_
    }, t.prototype.id = function () {
        return this.id_
    }, t.prototype.name = function () {
        return this.name_
    }, t.prototype.children = function () {
        return this.children_
    }, t.prototype.getChildById = function (t) {
        return this.childIndex_[t]
    }, t.prototype.getChild = function (t) {
        if (t) return t = he(t), this.childNameIndex_[t]
    }, t.prototype.addChild = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length, r = void 0,
            a = void 0;
        if ("string" == typeof e) {
            a = he(e);
            var o = n.componentClass || a;
            n.name = a;
            var s = t.getComponent(o);
            if (!s) throw new Error("Component " + o + " does not exist");
            if ("function" != typeof s) return null;
            r = new s(this.player_ || this, n)
        } else r = e;
        if (this.children_.splice(i, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), (a = a || r.name && he(r.name())) && (this.childNameIndex_[a] = r), "function" == typeof r.el && r.el()) {
            var l = this.contentEl().children, u = l[i] || null;
            this.contentEl().insertBefore(r.el(), u)
        }
        return r
    }, t.prototype.removeChild = function (t) {
        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
            for (var e = !1, n = this.children_.length - 1; n >= 0; n--) if (this.children_[n] === t) {
                e = !0, this.children_.splice(n, 1);
                break
            }
            if (e) {
                this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                var i = t.el();
                i && i.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
            }
        }
    }, t.prototype.initChildren = function () {
        var e = this, n = this.options_.children;
        if (n) {
            var i = this.options_, r = void 0, a = t.getComponent("Tech");
            (r = Array.isArray(n) ? n : Object.keys(n)).concat(Object.keys(this.options_).filter((function (t) {
                return !r.some((function (e) {
                    return "string" == typeof e ? t === e : t === e.name
                }))
            }))).map((function (t) {
                var i = void 0, r = void 0;
                return "string" == typeof t ? r = n[i = t] || e.options_[i] || {} : (i = t.name, r = t), {
                    name: i,
                    opts: r
                }
            })).filter((function (e) {
                var n = t.getComponent(e.opts.componentClass || he(e.name));
                return n && !a.isTech(n)
            })).forEach((function (t) {
                var n = t.name, r = t.opts;
                if (void 0 !== i[n] && (r = i[n]), !1 !== r) {
                    !0 === r && (r = {}), r.playerOptions = e.options_.playerOptions;
                    var a = e.addChild(n, r);
                    a && (e[n] = a)
                }
            }))
        }
    }, t.prototype.buildCSSClass = function () {
        return ""
    }, t.prototype.ready = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return this.isReady_ ? void (e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
    }, t.prototype.triggerReady = function () {
        this.isReady_ = !0, this.setTimeout((function () {
            var t = this.readyQueue_;
            this.readyQueue_ = [], t && t.length > 0 && t.forEach((function (t) {
                t.call(this)
            }), this), this.trigger("ready")
        }), 1)
    }, t.prototype.$ = function (t, e) {
        return Tt(t, e || this.contentEl())
    }, t.prototype.$$ = function (t, e) {
        return Mt(t, e || this.contentEl())
    }, t.prototype.hasClass = function (t) {
        return ot(this.el_, t)
    }, t.prototype.addClass = function (t) {
        st(this.el_, t)
    }, t.prototype.removeClass = function (t) {
        lt(this.el_, t)
    }, t.prototype.toggleClass = function (t, e) {
        ut(this.el_, t, e)
    }, t.prototype.show = function () {
        this.removeClass("vjs-hidden")
    }, t.prototype.hide = function () {
        this.addClass("vjs-hidden")
    }, t.prototype.lockShowing = function () {
        this.addClass("vjs-lock-showing")
    }, t.prototype.unlockShowing = function () {
        this.removeClass("vjs-lock-showing")
    }, t.prototype.getAttribute = function (t) {
        return ht(this.el_, t)
    }, t.prototype.setAttribute = function (t, e) {
        ft(this.el_, t, e)
    }, t.prototype.removeAttribute = function (t) {
        pt(this.el_, t)
    }, t.prototype.width = function (t, e) {
        return this.dimension("width", t, e)
    }, t.prototype.height = function (t, e) {
        return this.dimension("height", t, e)
    }, t.prototype.dimensions = function (t, e) {
        this.width(t, !0), this.height(e)
    }, t.prototype.dimension = function (t, e, n) {
        if (void 0 !== e) return null !== e && e == e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void (n || this.trigger("componentresize"));
        if (!this.el_) return 0;
        var i = this.el_.style[t], r = i.indexOf("px");
        return -1 !== r ? parseInt(i.slice(0, r), 10) : parseInt(this.el_["offset" + he(t)], 10)
    }, t.prototype.currentDimension = function (t) {
        var e = 0;
        if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
        if ("function" == typeof a.getComputedStyle) {
            var n = a.getComputedStyle(this.el_);
            e = n.getPropertyValue(t) || n[t]
        }
        if (0 === (e = parseFloat(e))) {
            var i = "offset" + he(t);
            e = this.el_[i]
        }
        return e
    }, t.prototype.currentDimensions = function () {
        return {width: this.currentDimension("width"), height: this.currentDimension("height")}
    }, t.prototype.currentWidth = function () {
        return this.currentDimension("width")
    }, t.prototype.currentHeight = function () {
        return this.currentDimension("height")
    }, t.prototype.focus = function () {
        this.el_.focus()
    }, t.prototype.blur = function () {
        this.el_.blur()
    }, t.prototype.emitTapEvents = function () {
        var t = 0, e = null, n = void 0;
        this.on("touchstart", (function (i) {
            1 === i.touches.length && (e = {
                pageX: i.touches[0].pageX,
                pageY: i.touches[0].pageY
            }, t = (new Date).getTime(), n = !0)
        })), this.on("touchmove", (function (t) {
            if (t.touches.length > 1) n = !1; else if (e) {
                var i = t.touches[0].pageX - e.pageX, r = t.touches[0].pageY - e.pageY;
                Math.sqrt(i * i + r * r) > 10 && (n = !1)
            }
        }));
        var i = function () {
            n = !1
        };
        this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", (function (i) {
            (e = null, !0 === n) && ((new Date).getTime() - t < 200 && (i.preventDefault(), this.trigger("tap")))
        }))
    }, t.prototype.enableTouchActivity = function () {
        if (this.player() && this.player().reportUserActivity) {
            var t = Qt(this.player(), this.player().reportUserActivity), e = void 0;
            this.on("touchstart", (function () {
                t(), this.clearInterval(e), e = this.setInterval(t, 250)
            }));
            var n = function (n) {
                t(), this.clearInterval(e)
            };
            this.on("touchmove", t), this.on("touchend", n), this.on("touchcancel", n)
        }
    }, t.prototype.setTimeout = function (t, e) {
        var n, i, r = this;
        return t = Qt(this, t), n = a.setTimeout((function () {
            r.off("dispose", i), t()
        }), e), (i = function () {
            return r.clearTimeout(n)
        }).guid = "vjs-timeout-" + n, this.on("dispose", i), n
    }, t.prototype.clearTimeout = function (t) {
        a.clearTimeout(t);
        var e = function () {
        };
        return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
    }, t.prototype.setInterval = function (t, e) {
        var n = this;
        t = Qt(this, t);
        var i = a.setInterval(t, e), r = function () {
            return n.clearInterval(i)
        };
        return r.guid = "vjs-interval-" + i, this.on("dispose", r), i
    }, t.prototype.clearInterval = function (t) {
        a.clearInterval(t);
        var e = function () {
        };
        return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
    }, t.prototype.requestAnimationFrame = function (t) {
        var e, n, i = this;
        return this.supportsRaf_ ? (t = Qt(this, t), e = a.requestAnimationFrame((function () {
            i.off("dispose", n), t()
        })), (n = function () {
            return i.cancelAnimationFrame(e)
        }).guid = "vjs-raf-" + e, this.on("dispose", n), e) : this.setTimeout(t, 1e3 / 60)
    }, t.prototype.cancelAnimationFrame = function (t) {
        if (this.supportsRaf_) {
            a.cancelAnimationFrame(t);
            var e = function () {
            };
            return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
        }
        return this.clearTimeout(t)
    }, t.registerComponent = function (e, n) {
        if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
        var i = t.getComponent("Tech"), r = i && i.isTech(n), a = t === n || t.prototype.isPrototypeOf(n.prototype);
        if (r || !a) {
            var o = void 0;
            throw o = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + o + ".")
        }
        e = he(e), t.components_ || (t.components_ = {});
        var s = t.getComponent("Player");
        if ("Player" === e && s && s.players) {
            var l = s.players, u = Object.keys(l);
            if (l && u.length > 0 && u.map((function (t) {
                return l[t]
            })).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
        }
        return t.components_[e] = n, n
    }, t.getComponent = function (e) {
        if (e) return e = he(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
    }, t
}();

function ge(t, e, n, i) {
    return function (t, e, n) {
        if ("number" != typeof e || e < 0 || e > n) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + n + ").")
    }(t, i, n.length - 1), n[i][e]
}

function ve(t) {
    return void 0 === t || 0 === t.length ? {
        length: 0, start: function () {
            throw new Error("This TimeRanges object is empty")
        }, end: function () {
            throw new Error("This TimeRanges object is empty")
        }
    } : {length: t.length, start: ge.bind(null, "start", 0, t), end: ge.bind(null, "end", 1, t)}
}

function me(t, e) {
    return Array.isArray(t) ? ve(t) : void 0 === t || void 0 === e ? ve() : ve([[t, e]])
}

function ye(t, e) {
    var n = 0, i = void 0, r = void 0;
    if (!e) return 0;
    t && t.length || (t = me(0, 0));
    for (var a = 0; a < t.length; a++) i = t.start(a), (r = t.end(a)) > e && (r = e), n += r - i;
    return n / e
}

pe.prototype.supportsRaf_ = "function" == typeof a.requestAnimationFrame && "function" == typeof a.cancelAnimationFrame, pe.registerComponent("Component", pe);
for (var be = {}, xe = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], _e = xe[0], we = void 0, Ce = 0; Ce < xe.length; Ce++) if (xe[Ce][1] in o) {
    we = xe[Ce];
    break
}
if (we) for (var Se = 0; Se < we.length; Se++) be[_e[Se]] = we[Se];

function ke(t) {
    if (t instanceof ke) return t;
    "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : q(t) && ("number" == typeof t.code && (this.code = t.code), W(this, t)), this.message || (this.message = ke.defaultMessages[this.code] || "")
}

ke.prototype.code = 0, ke.prototype.message = "", ke.prototype.status = null, ke.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], ke.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail part-way.",
    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The media is encrypted and we do not have the keys to decrypt it."
};
for (var Te = 0; Te < ke.errorTypes.length; Te++) ke[ke.errorTypes[Te]] = Te, ke.prototype[ke.errorTypes[Te]] = Te;

function Me(t) {
    return null != t && "function" == typeof t.then
}

function Oe(t) {
    Me(t) && t.then(null, (function (t) {
    }))
}

var Ae = function (t) {
    return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((function (e, n, i) {
        return t[n] && (e[n] = t[n]), e
    }), {
        cues: t.cues && Array.prototype.map.call(t.cues, (function (t) {
            return {startTime: t.startTime, endTime: t.endTime, text: t.text, id: t.id}
        }))
    })
}, De = function (t) {
    var e = t.$$("track"), n = Array.prototype.map.call(e, (function (t) {
        return t.track
    }));
    return Array.prototype.map.call(e, (function (t) {
        var e = Ae(t.track);
        return t.src && (e.src = t.src), e
    })).concat(Array.prototype.filter.call(t.textTracks(), (function (t) {
        return -1 === n.indexOf(t)
    })).map(Ae))
}, Ee = function (t, e) {
    return t.forEach((function (t) {
        var n = e.addRemoteTextTrack(t).track;
        !t.src && t.cues && t.cues.forEach((function (t) {
            return n.addCue(t)
        }))
    })), e.textTracks()
}, Pe = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1, r.closeable(!r.options_.uncloseable), r.content(r.options_.content), r.contentEl_ = it("div", {className: "vjs-modal-dialog-content"}, {role: "document"}), r.descEl_ = it("p", {
            className: "vjs-modal-dialog-description vjs-control-text",
            id: r.el().getAttribute("aria-describedby")
        }), rt(r.descEl_, r.description()), r.el_.appendChild(r.descEl_), r.el_.appendChild(r.contentEl_), r
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {
            className: this.buildCSSClass(),
            tabIndex: -1
        }, {
            "aria-describedby": this.id() + "_description",
            "aria-hidden": "true",
            "aria-label": this.label(),
            role: "dialog"
        })
    }, e.prototype.dispose = function () {
        this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, t.prototype.dispose.call(this)
    }, e.prototype.buildCSSClass = function () {
        return "vjs-modal-dialog vjs-hidden " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.handleKeyPress = function (t) {
        27 === t.which && this.closeable() && this.close()
    }, e.prototype.label = function () {
        return this.localize(this.options_.label || "Modal Window")
    }, e.prototype.description = function () {
        var t = this.options_.description || this.localize("This is a modal window.");
        return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
    }, e.prototype.open = function () {
        if (!this.opened_) {
            var t = this.player();
            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", Qt(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
        }
    }, e.prototype.opened = function (t) {
        return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
    }, e.prototype.close = function () {
        if (this.opened_) {
            var t = this.player();
            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", Qt(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
        }
    }, e.prototype.closeable = function (t) {
        if ("boolean" == typeof t) {
            var e = this.closeable_ = !!t, n = this.getChild("closeButton");
            if (e && !n) {
                var i = this.contentEl_;
                this.contentEl_ = this.el_, n = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = i, this.on(n, "close", this.close)
            }
            !e && n && (this.off(n, "close", this.close), this.removeChild(n), n.dispose())
        }
        return this.closeable_
    }, e.prototype.fill = function () {
        this.fillWith(this.content())
    }, e.prototype.fillWith = function (t) {
        var e = this.contentEl(), n = e.parentNode, i = e.nextSibling;
        this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, n.removeChild(e), this.empty(), St(e, t), this.trigger("modalfill"), i ? n.insertBefore(e, i) : n.appendChild(e);
        var r = this.getChild("closeButton");
        r && n.appendChild(r.el_)
    }, e.prototype.empty = function () {
        this.trigger("beforemodalempty"), _t(this.contentEl()), this.trigger("modalempty")
    }, e.prototype.content = function (t) {
        return void 0 !== t && (this.content_ = t), this.content_
    }, e.prototype.conditionalFocus_ = function () {
        var t = o.activeElement, e = this.player_.el_;
        this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(o, "keydown", this.handleKeyDown))
    }, e.prototype.conditionalBlur_ = function () {
        this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(o, "keydown", this.handleKeyDown)
    }, e.prototype.handleKeyDown = function (t) {
        if (9 === t.which) {
            for (var e = this.focusableEls_(), n = this.el_.querySelector(":focus"), i = void 0, r = 0; r < e.length; r++) if (n === e[r]) {
                i = r;
                break
            }
            o.activeElement === this.el_ && (i = 0), t.shiftKey && 0 === i ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || i !== e.length - 1 || (e[0].focus(), t.preventDefault())
        }
    }, e.prototype.focusableEls_ = function () {
        var t = this.el_.querySelectorAll("*");
        return Array.prototype.filter.call(t, (function (t) {
            return (t instanceof a.HTMLAnchorElement || t instanceof a.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof a.HTMLInputElement || t instanceof a.HTMLSelectElement || t instanceof a.HTMLTextAreaElement || t instanceof a.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof a.HTMLIFrameElement || t instanceof a.HTMLObjectElement || t instanceof a.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
        }))
    }, e
}(pe);
Pe.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, pe.registerComponent("ModalDialog", Pe);
var Ie = function (t) {
    function e() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        N(this, e);
        var r = j(this, t.call(this));
        if (!i && (i = r, O)) for (var a in i = o.createElement("custom"), e.prototype) "constructor" !== a && (i[a] = e.prototype[a]);
        i.tracks_ = [], Object.defineProperty(i, "length", {
            get: function () {
                return this.tracks_.length
            }
        });
        for (var s = 0; s < n.length; s++) i.addTrack(n[s]);
        return j(r, i)
    }

    return B(e, t), e.prototype.addTrack = function (t) {
        var e = this.tracks_.length;
        "" + e in this || Object.defineProperty(this, e, {
            get: function () {
                return this.tracks_[e]
            }
        }), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({track: t, type: "addtrack"}))
    }, e.prototype.removeTrack = function (t) {
        for (var e = void 0, n = 0, i = this.length; n < i; n++) if (this[n] === t) {
            (e = this[n]).off && e.off(), this.tracks_.splice(n, 1);
            break
        }
        e && this.trigger({track: e, type: "removetrack"})
    }, e.prototype.getTrackById = function (t) {
        for (var e = null, n = 0, i = this.length; n < i; n++) {
            var r = this[n];
            if (r.id === t) {
                e = r;
                break
            }
        }
        return e
    }, e
}(te);
for (var Le in Ie.prototype.allowedEvents_ = {
    change: "change",
    addtrack: "addtrack",
    removetrack: "removetrack"
}, Ie.prototype.allowedEvents_) Ie.prototype["on" + Le] = null;
var Re = function (t, e) {
        for (var n = 0; n < t.length; n++) Object.keys(t[n]).length && e.id !== t[n].id && (t[n].enabled = !1)
    }, Ne = function (t) {
        function e() {
            var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            N(this, e);
            for (var r = void 0, a = i.length - 1; a >= 0; a--) if (i[a].enabled) {
                Re(i, i[a]);
                break
            }
            if (O) {
                for (var s in r = o.createElement("custom"), Ie.prototype) "constructor" !== s && (r[s] = Ie.prototype[s]);
                for (var l in e.prototype) "constructor" !== l && (r[l] = e.prototype[l])
            }
            return (r = n = j(this, t.call(this, i, r))).changing_ = !1, j(n, r)
        }

        return B(e, t), e.prototype.addTrack = function (e) {
            var n = this;
            e.enabled && Re(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", (function () {
                n.changing_ || (n.changing_ = !0, Re(n, e), n.changing_ = !1, n.trigger("change"))
            }))
        }, e
    }(Ie), Be = function (t, e) {
        for (var n = 0; n < t.length; n++) Object.keys(t[n]).length && e.id !== t[n].id && (t[n].selected = !1)
    }, je = function (t) {
        function e() {
            var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            N(this, e);
            for (var r = void 0, a = i.length - 1; a >= 0; a--) if (i[a].selected) {
                Be(i, i[a]);
                break
            }
            if (O) {
                for (var s in r = o.createElement("custom"), Ie.prototype) "constructor" !== s && (r[s] = Ie.prototype[s]);
                for (var l in e.prototype) "constructor" !== l && (r[l] = e.prototype[l])
            }
            return (r = n = j(this, t.call(this, i, r))).changing_ = !1, Object.defineProperty(r, "selectedIndex", {
                get: function () {
                    for (var t = 0; t < this.length; t++) if (this[t].selected) return t;
                    return -1
                }, set: function () {
                }
            }), j(n, r)
        }

        return B(e, t), e.prototype.addTrack = function (e) {
            var n = this;
            e.selected && Be(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", (function () {
                n.changing_ || (n.changing_ = !0, Be(n, e), n.changing_ = !1, n.trigger("change"))
            }))
        }, e
    }(Ie), Fe = function (t) {
        function e() {
            var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            N(this, e);
            var r = void 0;
            if (O) {
                for (var a in r = o.createElement("custom"), Ie.prototype) "constructor" !== a && (r[a] = Ie.prototype[a]);
                for (var s in e.prototype) "constructor" !== s && (r[s] = e.prototype[s])
            }
            return n = j(this, t.call(this, i, r)), j(n, r = n)
        }

        return B(e, t), e.prototype.addTrack = function (e) {
            t.prototype.addTrack.call(this, e), e.addEventListener("modechange", Qt(this, (function () {
                this.trigger("change")
            })));
            -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", Qt(this, (function () {
                this.trigger("selectedlanguagechange")
            })))
        }, e
    }(Ie), ze = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            N(this, t);
            var n = this;
            if (O) for (var i in n = o.createElement("custom"), t.prototype) "constructor" !== i && (n[i] = t.prototype[i]);
            n.trackElements_ = [], Object.defineProperty(n, "length", {
                get: function () {
                    return this.trackElements_.length
                }
            });
            for (var r = 0, a = e.length; r < a; r++) n.addTrackElement_(e[r]);
            if (O) return n
        }

        return t.prototype.addTrackElement_ = function (t) {
            var e = this.trackElements_.length;
            "" + e in this || Object.defineProperty(this, e, {
                get: function () {
                    return this.trackElements_[e]
                }
            }), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
        }, t.prototype.getTrackElementByTrack_ = function (t) {
            for (var e = void 0, n = 0, i = this.trackElements_.length; n < i; n++) if (t === this.trackElements_[n].track) {
                e = this.trackElements_[n];
                break
            }
            return e
        }, t.prototype.removeTrackElement_ = function (t) {
            for (var e = 0, n = this.trackElements_.length; e < n; e++) if (t === this.trackElements_[e]) {
                this.trackElements_.splice(e, 1);
                break
            }
        }, t
    }(), Ve = function () {
        function t(e) {
            N(this, t);
            var n = this;
            if (O) for (var i in n = o.createElement("custom"), t.prototype) "constructor" !== i && (n[i] = t.prototype[i]);
            if (t.prototype.setCues_.call(n, e), Object.defineProperty(n, "length", {
                get: function () {
                    return this.length_
                }
            }), O) return n
        }

        return t.prototype.setCues_ = function (t) {
            var e = this.length || 0, n = 0, i = t.length;
            this.cues_ = t, this.length_ = t.length;
            var r = function (t) {
                "" + t in this || Object.defineProperty(this, "" + t, {
                    get: function () {
                        return this.cues_[t]
                    }
                })
            };
            if (e < i) for (n = e; n < i; n++) r.call(this, n)
        }, t.prototype.getCueById = function (t) {
            for (var e = null, n = 0, i = this.length; n < i; n++) {
                var r = this[n];
                if (r.id === t) {
                    e = r;
                    break
                }
            }
            return e
        }, t
    }(), He = {
        alternative: "alternative",
        captions: "captions",
        main: "main",
        sign: "sign",
        subtitles: "subtitles",
        commentary: "commentary"
    }, We = {
        alternative: "alternative",
        descriptions: "descriptions",
        main: "main",
        "main-desc": "main-desc",
        translation: "translation",
        commentary: "commentary"
    }, qe = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    }, Ue = {disabled: "disabled", hidden: "hidden", showing: "showing"}, Ye = function (t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            N(this, e);
            var i = j(this, t.call(this)), r = i;
            if (O) for (var a in r = o.createElement("custom"), e.prototype) "constructor" !== a && (r[a] = e.prototype[a]);
            var s = {id: n.id || "vjs_track_" + Dt(), kind: n.kind || "", label: n.label || "", language: n.language || ""},
                l = function (t) {
                    Object.defineProperty(r, t, {
                        get: function () {
                            return s[t]
                        }, set: function () {
                        }
                    })
                };
            for (var u in s) l(u);
            return j(i, r)
        }

        return B(e, t), e
    }(te), Ge = function (t) {
        var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], n = o.createElement("a");
        n.href = t;
        var i = "" === n.host && "file:" !== n.protocol, r = void 0;
        i && ((r = o.createElement("div")).innerHTML = '<a href="' + t + '"></a>', n = r.firstChild, r.setAttribute("style", "display:none; position:absolute;"), o.body.appendChild(r));
        for (var s = {}, l = 0; l < e.length; l++) s[e[l]] = n[e[l]];
        return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = a.location.protocol), i && o.body.removeChild(r), s
    }, Xe = function (t) {
        if (!t.match(/^https?:\/\//)) {
            var e = o.createElement("div");
            e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
        }
        return t
    }, Ze = function (t) {
        if ("string" == typeof t) {
            var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);
            if (e) return e.pop().toLowerCase()
        }
        return ""
    }, Ke = function (t) {
        var e = a.location, n = Ge(t);
        return (":" === n.protocol ? e.protocol : n.protocol) + n.host !== e.protocol + e.host
    }, $e = (Object.freeze || Object)({parseUrl: Ge, getAbsoluteURL: Xe, getFileExtension: Ze, isCrossOrigin: Ke}),
    Qe = function (t, e) {
        var n = new a.WebVTT.Parser(a, a.vttjs, a.WebVTT.StringDecoder()), i = [];
        n.oncue = function (t) {
            e.addCue(t)
        }, n.onparsingerror = function (t) {
            i.push(t)
        }, n.onflush = function () {
            e.trigger({type: "loadeddata", target: e})
        }, n.parse(t), i.length > 0 && (a.console && a.console.groupCollapsed && a.console.groupCollapsed("Text Track parsing errors for " + e.src), i.forEach((function (t) {
            return G.error(t)
        })), a.console && a.console.groupEnd && a.console.groupEnd()), n.flush()
    }, Je = function (t, e) {
        var n = {uri: t}, i = Ke(t);
        i && (n.cors = i), u(n, Qt(this, (function (t, n, i) {
            if (t) return G.error(t, n);
            if (e.loaded_ = !0, "function" != typeof a.WebVTT) {
                if (e.tech_) {
                    var r = function () {
                        return Qe(i, e)
                    };
                    e.tech_.on("vttjsloaded", r), e.tech_.on("vttjserror", (function () {
                        G.error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", r)
                    }))
                }
            } else Qe(i, e)
        })))
    }, tn = function (t) {
        function e() {
            var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (N(this, e), !i.tech) throw new Error("A tech was not provided.");
            var r = fe(i, {kind: qe[i.kind] || "subtitles", language: i.language || i.srclang || ""}),
                a = Ue[r.mode] || "disabled", o = r.default;
            "metadata" !== r.kind && "chapters" !== r.kind || (a = "hidden");
            var s = n = j(this, t.call(this, r));
            if (s.tech_ = r.tech, O) for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
            s.cues_ = [], s.activeCues_ = [];
            var u = new Ve(s.cues_), c = new Ve(s.activeCues_), d = !1, h = Qt(s, (function () {
                this.activeCues = this.activeCues, d && (this.trigger("cuechange"), d = !1)
            }));
            return "disabled" !== a && s.tech_.ready((function () {
                s.tech_.on("timeupdate", h)
            }), !0), Object.defineProperty(s, "default", {
                get: function () {
                    return o
                }, set: function () {
                }
            }), Object.defineProperty(s, "mode", {
                get: function () {
                    return a
                }, set: function (t) {
                    var e = this;
                    Ue[t] && ("disabled" !== (a = t) ? this.tech_.ready((function () {
                        e.tech_.on("timeupdate", h)
                    }), !0) : this.tech_.off("timeupdate", h), this.trigger("modechange"))
                }
            }), Object.defineProperty(s, "cues", {
                get: function () {
                    return this.loaded_ ? u : null
                }, set: function () {
                }
            }), Object.defineProperty(s, "activeCues", {
                get: function () {
                    if (!this.loaded_) return null;
                    if (0 === this.cues.length) return c;
                    for (var t = this.tech_.currentTime(), e = [], n = 0, i = this.cues.length; n < i; n++) {
                        var r = this.cues[n];
                        (r.startTime <= t && r.endTime >= t || r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t) && e.push(r)
                    }
                    if (d = !1, e.length !== this.activeCues_.length) d = !0; else for (var a = 0; a < e.length; a++) -1 === this.activeCues_.indexOf(e[a]) && (d = !0);
                    return this.activeCues_ = e, c.setCues_(this.activeCues_), c
                }, set: function () {
                }
            }), r.src ? (s.src = r.src, Je(r.src, s)) : s.loaded_ = !0, j(n, s)
        }

        return B(e, t), e.prototype.addCue = function (t) {
            var e = t;
            if (a.vttjs && !(t instanceof a.vttjs.VTTCue)) {
                for (var n in e = new a.vttjs.VTTCue(t.startTime, t.endTime, t.text), t) n in e || (e[n] = t[n]);
                e.id = t.id, e.originalCue_ = t
            }
            for (var i = this.tech_.textTracks(), r = 0; r < i.length; r++) i[r] !== this && i[r].removeCue(e);
            this.cues_.push(e), this.cues.setCues_(this.cues_)
        }, e.prototype.removeCue = function (t) {
            for (var e = this.cues_.length; e--;) {
                var n = this.cues_[e];
                if (n === t || n.originalCue_ && n.originalCue_ === t) {
                    this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
                    break
                }
            }
        }, e
    }(Ye);
tn.prototype.allowedEvents_ = {cuechange: "cuechange"};
var en = function (t) {
    function e() {
        var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        N(this, e);
        var r = fe(i, {kind: We[i.kind] || ""}), a = n = j(this, t.call(this, r)), o = !1;
        if (O) for (var s in e.prototype) "constructor" !== s && (a[s] = e.prototype[s]);
        return Object.defineProperty(a, "enabled", {
            get: function () {
                return o
            }, set: function (t) {
                "boolean" == typeof t && t !== o && (o = t, this.trigger("enabledchange"))
            }
        }), r.enabled && (a.enabled = r.enabled), a.loaded_ = !0, j(n, a)
    }

    return B(e, t), e
}(Ye), nn = function (t) {
    function e() {
        var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        N(this, e);
        var r = fe(i, {kind: He[i.kind] || ""}), a = n = j(this, t.call(this, r)), o = !1;
        if (O) for (var s in e.prototype) "constructor" !== s && (a[s] = e.prototype[s]);
        return Object.defineProperty(a, "selected", {
            get: function () {
                return o
            }, set: function (t) {
                "boolean" == typeof t && t !== o && (o = t, this.trigger("selectedchange"))
            }
        }), r.selected && (a.selected = r.selected), j(n, a)
    }

    return B(e, t), e
}(Ye), rn = function (t) {
    function e() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        N(this, e);
        var i = j(this, t.call(this)), r = void 0, a = i;
        if (O) for (var s in a = o.createElement("custom"), e.prototype) "constructor" !== s && (a[s] = e.prototype[s]);
        var l = new tn(n);
        return a.kind = l.kind, a.src = l.src, a.srclang = l.language, a.label = l.label, a.default = l.default, Object.defineProperty(a, "readyState", {
            get: function () {
                return r
            }
        }), Object.defineProperty(a, "track", {
            get: function () {
                return l
            }
        }), r = 0, l.addEventListener("loadeddata", (function () {
            r = 2, a.trigger({type: "load", target: a})
        })), O ? j(i, a) : i
    }

    return B(e, t), e
}(te);
rn.prototype.allowedEvents_ = {load: "load"}, rn.NONE = 0, rn.LOADING = 1, rn.LOADED = 2, rn.ERROR = 3;
var an = {
    audio: {ListClass: Ne, TrackClass: en, capitalName: "Audio"},
    video: {ListClass: je, TrackClass: nn, capitalName: "Video"},
    text: {ListClass: Fe, TrackClass: tn, capitalName: "Text"}
};
Object.keys(an).forEach((function (t) {
    an[t].getterName = t + "Tracks", an[t].privateName = t + "Tracks_"
}));
var on = {
    remoteText: {
        ListClass: Fe,
        TrackClass: tn,
        capitalName: "RemoteText",
        getterName: "remoteTextTracks",
        privateName: "remoteTextTracks_"
    },
    remoteTextEl: {
        ListClass: ze,
        TrackClass: rn,
        capitalName: "RemoteTextTrackEls",
        getterName: "remoteTextTrackEls",
        privateName: "remoteTextTrackEls_"
    }
}, sn = fe(an, on);
on.names = Object.keys(on), an.names = Object.keys(an), sn.names = [].concat(on.names).concat(an.names);
var ln = function (t) {
    function e() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
            };
        N(this, e), n.reportTouchActivity = !1;
        var r = j(this, t.call(this, null, n, i));
        return r.hasStarted_ = !1, r.on("playing", (function () {
            this.hasStarted_ = !0
        })), r.on("loadstart", (function () {
            this.hasStarted_ = !1
        })), sn.names.forEach((function (t) {
            var e = sn[t];
            n && n[e.getterName] && (r[e.privateName] = n[e.getterName])
        })), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach((function (t) {
            !1 === n["native" + t + "Tracks"] && (r["featuresNative" + t + "Tracks"] = !1)
        })), !1 === n.nativeCaptions || !1 === n.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== n.nativeCaptions && !0 !== n.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new sn.text.ListClass, r.initTrackListeners(), n.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
    }

    return B(e, t), e.prototype.triggerSourceset = function (t) {
        var e = this;
        this.isReady_ || this.one("ready", (function () {
            return e.setTimeout((function () {
                return e.triggerSourceset(t)
            }), 1)
        })), this.trigger({src: t, type: "sourceset"})
    }, e.prototype.manualProgressOn = function () {
        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
    }, e.prototype.manualProgressOff = function () {
        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
    }, e.prototype.trackProgress = function (t) {
        this.stopTrackingProgress(), this.progressInterval = this.setInterval(Qt(this, (function () {
            var t = this.bufferedPercent();
            this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
        })), 500)
    }, e.prototype.onDurationChange = function (t) {
        this.duration_ = this.duration()
    }, e.prototype.buffered = function () {
        return me(0, 0)
    }, e.prototype.bufferedPercent = function () {
        return ye(this.buffered(), this.duration_)
    }, e.prototype.stopTrackingProgress = function () {
        this.clearInterval(this.progressInterval)
    }, e.prototype.manualTimeUpdatesOn = function () {
        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
    }, e.prototype.manualTimeUpdatesOff = function () {
        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
    }, e.prototype.trackCurrentTime = function () {
        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval((function () {
            this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
        }), 250)
    }, e.prototype.stopTrackingCurrentTime = function () {
        this.clearInterval(this.currentTimeInterval), this.trigger({
            type: "timeupdate",
            target: this,
            manuallyTriggered: !0
        })
    }, e.prototype.dispose = function () {
        this.clearTracks(an.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
    }, e.prototype.clearTracks = function (t) {
        var e = this;
        (t = [].concat(t)).forEach((function (t) {
            for (var n = e[t + "Tracks"]() || [], i = n.length; i--;) {
                var r = n[i];
                "text" === t && e.removeRemoteTextTrack(r), n.removeTrack(r)
            }
        }))
    }, e.prototype.cleanupAutoTextTracks = function () {
        for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
            var n = t[e];
            this.removeRemoteTextTrack(n)
        }
    }, e.prototype.reset = function () {
    }, e.prototype.error = function (t) {
        return void 0 !== t && (this.error_ = new ke(t), this.trigger("error")), this.error_
    }, e.prototype.played = function () {
        return this.hasStarted_ ? me(0, 0) : me()
    }, e.prototype.setCurrentTime = function () {
        this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
    }, e.prototype.initTrackListeners = function () {
        var t = this;
        an.names.forEach((function (e) {
            var n = an[e], i = function () {
                t.trigger(e + "trackchange")
            }, r = t[n.getterName]();
            r.addEventListener("removetrack", i), r.addEventListener("addtrack", i), t.on("dispose", (function () {
                r.removeEventListener("removetrack", i), r.removeEventListener("addtrack", i)
            }))
        }))
    }, e.prototype.addWebVttScript_ = function () {
        var t = this;
        if (!a.WebVTT) if (o.body.contains(this.el())) {
            if (!this.options_["vtt.js"] && U(c) && Object.keys(c).length > 0) return void this.trigger("vttjsloaded");
            var e = o.createElement("script");
            e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", e.onload = function () {
                t.trigger("vttjsloaded")
            }, e.onerror = function () {
                t.trigger("vttjserror")
            }, this.on("dispose", (function () {
                e.onload = null, e.onerror = null
            })), a.WebVTT = !0, this.el().parentNode.appendChild(e)
        } else this.ready(this.addWebVttScript_)
    }, e.prototype.emulateTextTracks = function () {
        var t = this, e = this.textTracks(), n = this.remoteTextTracks(), i = function (t) {
            return e.addTrack(t.track)
        }, r = function (t) {
            return e.removeTrack(t.track)
        };
        n.on("addtrack", i), n.on("removetrack", r), this.addWebVttScript_();
        var a = function () {
            return t.trigger("texttrackchange")
        }, o = function () {
            a();
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.removeEventListener("cuechange", a), "showing" === n.mode && n.addEventListener("cuechange", a)
            }
        };
        o(), e.addEventListener("change", o), e.addEventListener("addtrack", o), e.addEventListener("removetrack", o), this.on("dispose", (function () {
            n.off("addtrack", i), n.off("removetrack", r), e.removeEventListener("change", o), e.removeEventListener("addtrack", o), e.removeEventListener("removetrack", o);
            for (var t = 0; t < e.length; t++) {
                e[t].removeEventListener("cuechange", a)
            }
        }))
    }, e.prototype.addTextTrack = function (t, e, n) {
        if (!t) throw new Error("TextTrack kind is required but was not provided");
        return function (t, e, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, a = t.textTracks();
            r.kind = e, n && (r.label = n), i && (r.language = i), r.tech = t;
            var o = new sn.text.TrackClass(r);
            return a.addTrack(o), o
        }(this, t, e, n)
    }, e.prototype.createRemoteTextTrack = function (t) {
        var e = fe(t, {tech: this});
        return new on.remoteTextEl.TrackClass(e)
    }, e.prototype.addRemoteTextTrack = function () {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
            i = this.createRemoteTextTrack(e);
        return !0 !== n && !1 !== n && (G.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), n = !0), this.remoteTextTrackEls().addTrackElement_(i), this.remoteTextTracks().addTrack(i.track), !0 !== n && this.ready((function () {
            return t.autoRemoteTextTracks_.addTrack(i.track)
        })), i
    }, e.prototype.removeRemoteTextTrack = function (t) {
        var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
        this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
    }, e.prototype.getVideoPlaybackQuality = function () {
        return {}
    }, e.prototype.setPoster = function () {
    }, e.prototype.playsinline = function () {
    }, e.prototype.setPlaysinline = function () {
    }, e.prototype.canPlayType = function () {
        return ""
    }, e.canPlayType = function () {
        return ""
    }, e.canPlaySource = function (t, n) {
        return e.canPlayType(t.type)
    }, e.isTech = function (t) {
        return t.prototype instanceof e || t instanceof e || t === e
    }, e.registerTech = function (t, n) {
        if (e.techs_ || (e.techs_ = {}), !e.isTech(n)) throw new Error("Tech " + t + " must be a Tech");
        if (!e.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
        if (!e.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
        return t = he(t), e.techs_[t] = n, "Tech" !== t && e.defaultTechOrder_.push(t), n
    }, e.getTech = function (t) {
        if (t) return t = he(t), e.techs_ && e.techs_[t] ? e.techs_[t] : a && a.videojs && a.videojs[t] ? (G.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), a.videojs[t]) : void 0
    }, e
}(pe);
sn.names.forEach((function (t) {
    var e = sn[t];
    ln.prototype[e.getterName] = function () {
        return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
    }
})), ln.prototype.featuresVolumeControl = !0, ln.prototype.featuresMuteControl = !0, ln.prototype.featuresFullscreenResize = !1, ln.prototype.featuresPlaybackRate = !1, ln.prototype.featuresProgressEvents = !1, ln.prototype.featuresSourceset = !1, ln.prototype.featuresTimeupdateEvents = !1, ln.prototype.featuresNativeTextTracks = !1, ln.withSourceHandlers = function (t) {
    t.registerSourceHandler = function (e, n) {
        var i = t.sourceHandlers;
        i || (i = t.sourceHandlers = []), void 0 === n && (n = i.length), i.splice(n, 0, e)
    }, t.canPlayType = function (e) {
        for (var n = t.sourceHandlers || [], i = void 0, r = 0; r < n.length; r++) if (i = n[r].canPlayType(e)) return i;
        return ""
    }, t.selectSourceHandler = function (e, n) {
        for (var i = t.sourceHandlers || [], r = 0; r < i.length; r++) if (i[r].canHandleSource(e, n)) return i[r];
        return null
    }, t.canPlaySource = function (e, n) {
        var i = t.selectSourceHandler(e, n);
        return i ? i.canHandleSource(e, n) : ""
    };
    ["seekable", "seeking", "duration"].forEach((function (t) {
        var e = this[t];
        "function" == typeof e && (this[t] = function () {
            return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
        })
    }), t.prototype), t.prototype.setSource = function (e) {
        var n = t.selectSourceHandler(e, this.options_);
        n || (t.nativeSourceHandler ? n = t.nativeSourceHandler : G.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), n !== t.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = n.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
    }, t.prototype.disposeSourceHandler = function () {
        this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
    }
}, pe.registerComponent("Tech", ln), ln.registerTech("Tech", ln), ln.defaultTechOrder_ = [];
var un = {}, cn = {}, dn = {};

function hn(t, e, n) {
    t.setTimeout((function () {
        return xn(e, un[e.type], n, t)
    }), 1)
}

function fn(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = "call" + he(n),
        a = t.reduce(mn(r), i), o = a === dn, s = o ? null : e[n](a);
    return yn(t, n, s, o), s
}

var pn = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1}, gn = {setCurrentTime: 1},
    vn = {play: 1, pause: 1};

function mn(t) {
    return function (e, n) {
        return e === dn ? dn : n[t] ? n[t](e) : e
    }
}

function yn(t, e, n, i) {
    for (var r = t.length - 1; r >= 0; r--) {
        var a = t[r];
        a[e] && a[e](i, n)
    }
}

function bn(t, e) {
    var n = cn[t.id()], i = null;
    if (null == n) return i = e(t), cn[t.id()] = [[e, i]], i;
    for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a[0], s = a[1];
        o === e && (i = s)
    }
    return null === i && (i = e(t), n.push([e, i])), i
}

function xn() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments[2], i = arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], o = e[0], s = e.slice(1);
    if ("string" == typeof o) xn(t, un[o], n, i, r, a); else if (o) {
        var l = bn(i, o);
        if (!l.setSource) return r.push(l), xn(t, s, n, i, r, a);
        l.setSource(W({}, t), (function (e, o) {
            if (e) return xn(t, s, n, i, r, a);
            r.push(l), xn(o, t.type === o.type ? s : un[o.type], n, i, r, a)
        }))
    } else s.length ? xn(t, s, n, i, r, a) : a ? n(t, r) : xn(t, un["*"], n, i, r, !0)
}

var _n = {
    opus: "video/ogg",
    ogv: "video/ogg",
    mp4: "video/mp4",
    mov: "video/mp4",
    m4v: "video/mp4",
    mkv: "video/x-matroska",
    mp3: "audio/mpeg",
    aac: "audio/aac",
    oga: "audio/ogg",
    m3u8: "application/x-mpegURL"
}, wn = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = Ze(t), n = _n[e.toLowerCase()];
    return n || ""
}, Cn = function (t, e) {
    if (!e) return "";
    if (t.cache_.source.src === e && t.cache_.source.type) return t.cache_.source.type;
    var n = t.cache_.sources.filter((function (t) {
        return t.src === e
    }));
    if (n.length) return n[0].type;
    for (var i = t.$$("source"), r = 0; r < i.length; r++) {
        var a = i[r];
        if (a.type && a.src && a.src === e) return a.type
    }
    return wn(e)
}, Sn = function t(e) {
    if (Array.isArray(e)) {
        var n = [];
        e.forEach((function (e) {
            e = t(e), Array.isArray(e) ? n = n.concat(e) : q(e) && n.push(e)
        })), e = n
    } else e = "string" == typeof e && e.trim() ? [kn({src: e})] : q(e) && "string" == typeof e.src && e.src && e.src.trim() ? [kn(e)] : [];
    return e
};

function kn(t) {
    var e = wn(t.src);
    return !t.type && e && (t.type = e), t
}

var Tn = function (t) {
    function e(n, i, r) {
        N(this, e);
        var a = fe({createEl: !1}, i), o = j(this, t.call(this, n, a, r));
        if (i.playerOptions.sources && 0 !== i.playerOptions.sources.length) n.src(i.playerOptions.sources); else for (var s = 0, l = i.playerOptions.techOrder; s < l.length; s++) {
            var u = he(l[s]), c = ln.getTech(u);
            if (u || (c = pe.getComponent(u)), c && c.isSupported()) {
                n.loadTech_(u);
                break
            }
        }
        return o
    }

    return B(e, t), e
}(pe);
pe.registerComponent("MediaLoader", Tn);
var Mn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.emitTapEvents(), r.enable(), r
    }

    return B(e, t), e.prototype.createEl = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        n = W({
            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
            className: this.buildCSSClass(),
            tabIndex: 0
        }, n), "button" === e && G.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), i = W({role: "button"}, i), this.tabIndex_ = n.tabIndex;
        var r = t.prototype.createEl.call(this, e, n, i);
        return this.createControlTextEl(r), r
    }, e.prototype.dispose = function () {
        this.controlTextEl_ = null, t.prototype.dispose.call(this)
    }, e.prototype.createControlTextEl = function (t) {
        return this.controlTextEl_ = it("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
    }, e.prototype.controlText = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
        if (void 0 === t) return this.controlText_ || "Need Text";
        var n = this.localize(t);
        this.controlText_ = t, rt(this.controlTextEl_, n), this.nonIconControl || e.setAttribute("title", n)
    }, e.prototype.buildCSSClass = function () {
        return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.enable = function () {
        this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
    }, e.prototype.disable = function () {
        this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
    }, e.prototype.handleClick = function (t) {
    }, e.prototype.handleFocus = function (t) {
        Vt(o, "keydown", Qt(this, this.handleKeyPress))
    }, e.prototype.handleKeyPress = function (e) {
        32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
    }, e.prototype.handleBlur = function (t) {
        Ht(o, "keydown", Qt(this, this.handleKeyPress))
    }, e
}(pe);
pe.registerComponent("ClickableComponent", Mn);
var On = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.update(), n.on("posterchange", Qt(r, r.update)), r
    }

    return B(e, t), e.prototype.dispose = function () {
        this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
    }, e.prototype.createEl = function () {
        var t = it("div", {className: "vjs-poster", tabIndex: -1});
        return I || (this.fallbackImg_ = it("img"), t.appendChild(this.fallbackImg_)), t
    }, e.prototype.update = function (t) {
        var e = this.player().poster();
        this.setSrc(e), e ? this.show() : this.hide()
    }, e.prototype.setSrc = function (t) {
        if (this.fallbackImg_) this.fallbackImg_.src = t; else {
            var e = "";
            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
        }
    }, e.prototype.handleClick = function (t) {
        this.player_.controls() && (this.player_.paused() ? Oe(this.player_.play()) : this.player_.pause())
    }, e
}(Mn);
pe.registerComponent("PosterImage", On);
var An = {
    monospace: "monospace",
    sansSerif: "sans-serif",
    serif: "serif",
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: "sans-serif",
    proportionalSerif: "serif",
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
};

function Dn(t, e) {
    var n = void 0;
    if (4 === t.length) n = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]; else {
        if (7 !== t.length) throw new Error("Invalid color code provided, " + t + "; must be formatted as e.g. #f0e or #f604e2.");
        n = t.slice(1)
    }
    return "rgba(" + parseInt(n.slice(0, 2), 16) + "," + parseInt(n.slice(2, 4), 16) + "," + parseInt(n.slice(4, 6), 16) + "," + e + ")"
}

function En(t, e, n) {
    try {
        t.style[e] = n
    } catch (t) {
        return
    }
}

var Pn = function (t) {
    function e(n, i, r) {
        N(this, e);
        var o = j(this, t.call(this, n, i, r)), s = Qt(o, o.updateDisplay);
        return n.on("loadstart", Qt(o, o.toggleDisplay)), n.on("texttrackchange", s), n.on("loadstart", Qt(o, o.preselectTrack)), n.ready(Qt(o, (function () {
            if (n.tech_ && n.tech_.featuresNativeTextTracks) this.hide(); else {
                n.on("fullscreenchange", s), n.on("playerresize", s), a.addEventListener && a.addEventListener("orientationchange", s), n.on("dispose", (function () {
                    return a.removeEventListener("orientationchange", s)
                }));
                for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                this.preselectTrack()
            }
        }))), o
    }

    return B(e, t), e.prototype.preselectTrack = function () {
        for (var t = {
            captions: 1,
            subtitles: 1
        }, e = this.player_.textTracks(), n = this.player_.cache_.selectedLanguage, i = void 0, r = void 0, a = void 0, o = 0; o < e.length; o++) {
            var s = e[o];
            n && n.enabled && n.language === s.language ? s.kind === n.kind ? a = s : a || (a = s) : n && !n.enabled ? (a = null, i = null, r = null) : s.default && ("descriptions" !== s.kind || i ? s.kind in t && !r && (r = s) : i = s)
        }
        a ? a.mode = "showing" : r ? r.mode = "showing" : i && (i.mode = "showing")
    }, e.prototype.toggleDisplay = function () {
        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
    }, e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
            "aria-live": "off",
            "aria-atomic": "true"
        })
    }, e.prototype.clearDisplay = function () {
        "function" == typeof a.WebVTT && a.WebVTT.processCues(a, [], this.el_)
    }, e.prototype.updateDisplay = function () {
        var t = this.player_.textTracks();
        this.clearDisplay();
        for (var e = null, n = null, i = t.length; i--;) {
            var r = t[i];
            "showing" === r.mode && ("descriptions" === r.kind ? e = r : n = r)
        }
        n ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(n)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
    }, e.prototype.updateForTrack = function (t) {
        if ("function" == typeof a.WebVTT && t.activeCues) {
            for (var e = [], n = 0; n < t.activeCues.length; n++) e.push(t.activeCues[n]);
            if (a.WebVTT.processCues(a, e, this.el_), this.player_.textTrackSettings) for (var i = this.player_.textTrackSettings.getValues(), r = e.length; r--;) {
                var o = e[r];
                if (o) {
                    var s = o.displayState;
                    if (i.color && (s.firstChild.style.color = i.color), i.textOpacity && En(s.firstChild, "color", Dn(i.color || "#fff", i.textOpacity)), i.backgroundColor && (s.firstChild.style.backgroundColor = i.backgroundColor), i.backgroundOpacity && En(s.firstChild, "backgroundColor", Dn(i.backgroundColor || "#000", i.backgroundOpacity)), i.windowColor && (i.windowOpacity ? En(s, "backgroundColor", Dn(i.windowColor, i.windowOpacity)) : s.style.backgroundColor = i.windowColor), i.edgeStyle && ("dropshadow" === i.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === i.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === i.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === i.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), i.fontPercent && 1 !== i.fontPercent) {
                        var l = a.parseFloat(s.style.fontSize);
                        s.style.fontSize = l * i.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                    }
                    i.fontFamily && "default" !== i.fontFamily && ("small-caps" === i.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = An[i.fontFamily])
                }
            }
        }
    }, e
}(pe);
pe.registerComponent("TextTrackDisplay", Pn);
var In = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function () {
        var e = this.player_.isAudio(), n = this.localize(e ? "Audio Player" : "Video Player"),
            i = it("span", {className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [n])}),
            r = t.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"});
        return r.appendChild(i), r
    }, e
}(pe);
pe.registerComponent("LoadingSpinner", In);
var Ln = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = "button", e = W({
            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
            className: this.buildCSSClass()
        }, e), n = W({type: "button"}, n);
        var i = pe.prototype.createEl.call(this, t, e, n);
        return this.createControlTextEl(i), i
    }, e.prototype.addChild = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.constructor.name;
        return G.warn("Adding an actionable (user controllable) child to a Button (" + n + ") is not supported; use a ClickableComponent instead."), pe.prototype.addChild.call(this, t, e)
    }, e.prototype.enable = function () {
        t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
    }, e.prototype.disable = function () {
        t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
    }, e.prototype.handleKeyPress = function (e) {
        32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
    }, e
}(Mn);
pe.registerComponent("Button", Ln);
var Rn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.mouseused_ = !1, r.on("mousedown", r.handleMouseDown), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-big-play-button"
    }, e.prototype.handleClick = function (t) {
        var e = this.player_.play();
        if (this.mouseused_ && t.clientX && t.clientY) Oe(e); else {
            var n = this.player_.getChild("controlBar"), i = n && n.getChild("playToggle");
            if (i) {
                var r = function () {
                    return i.focus()
                };
                Me(e) ? e.then(r, (function () {
                })) : this.setTimeout(r, 1)
            } else this.player_.focus()
        }
    }, e.prototype.handleKeyPress = function (e) {
        this.mouseused_ = !1, t.prototype.handleKeyPress.call(this, e)
    }, e.prototype.handleMouseDown = function (t) {
        this.mouseused_ = !0
    }, e
}(Ln);
Rn.prototype.controlText_ = "Play Video", pe.registerComponent("BigPlayButton", Rn);
var Nn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.controlText(i && i.controlText || r.localize("Close")), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.handleClick = function (t) {
        this.trigger({type: "close", bubbles: !1})
    }, e
}(Ln);
pe.registerComponent("CloseButton", Nn);
var Bn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on(n, "play", r.handlePlay), r.on(n, "pause", r.handlePause), r.on(n, "ended", r.handleEnded), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.handleClick = function (t) {
        this.player_.paused() ? this.player_.play() : this.player_.pause()
    }, e.prototype.handleSeeked = function (t) {
        this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
    }, e.prototype.handlePlay = function (t) {
        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
    }, e.prototype.handlePause = function (t) {
        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
    }, e.prototype.handleEnded = function (t) {
        this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
    }, e
}(Ln);
Bn.prototype.controlText_ = "Play", pe.registerComponent("PlayToggle", Bn);
var jn = function (t, e) {
    t = t < 0 ? 0 : t;
    var n = Math.floor(t % 60), i = Math.floor(t / 60 % 60), r = Math.floor(t / 3600), a = Math.floor(e / 60 % 60),
        o = Math.floor(e / 3600);
    return (isNaN(t) || t === 1 / 0) && (r = i = n = "-"), (r = r > 0 || o > 0 ? r + ":" : "") + (i = ((r || a >= 10) && i < 10 ? "0" + i : i) + ":") + (n = n < 10 ? "0" + n : n)
}, Fn = jn;
var zn = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
    return Fn(t, e)
}, Vn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.throttledUpdateContent = Jt(Qt(r, r.updateContent), 25), r.on(n, "timeupdate", r.throttledUpdateContent), r
    }

    return B(e, t), e.prototype.createEl = function (e) {
        var n = this.buildCSSClass(), i = t.prototype.createEl.call(this, "div", {
            className: n + " vjs-time-control vjs-control",
            innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
        });
        return this.contentEl_ = it("span", {className: n + "-display"}, {"aria-live": "off"}), this.updateTextNode_(), i.appendChild(this.contentEl_), i
    }, e.prototype.dispose = function () {
        this.contentEl_ = null, this.textNode_ = null, t.prototype.dispose.call(this)
    }, e.prototype.updateTextNode_ = function () {
        if (this.contentEl_) {
            for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
            this.textNode_ = o.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
        }
    }, e.prototype.formatTime_ = function (t) {
        return zn(t)
    }, e.prototype.updateFormattedTime_ = function (t) {
        var e = this.formatTime_(t);
        e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
    }, e.prototype.updateContent = function (t) {
    }, e
}(pe);
Vn.prototype.labelText_ = "Time", Vn.prototype.controlText_ = "Time", pe.registerComponent("TimeDisplay", Vn);
var Hn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on(n, "ended", r.handleEnded), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-current-time"
    }, e.prototype.updateContent = function (t) {
        var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
        this.updateFormattedTime_(e)
    }, e.prototype.handleEnded = function (t) {
        this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
    }, e
}(Vn);
Hn.prototype.labelText_ = "Current Time", Hn.prototype.controlText_ = "Current Time", pe.registerComponent("CurrentTimeDisplay", Hn);
var Wn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on(n, "durationchange", r.updateContent), r.on(n, "loadedmetadata", r.throttledUpdateContent), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-duration"
    }, e.prototype.updateContent = function (t) {
        var e = this.player_.duration();
        e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
    }, e
}(Vn);
Wn.prototype.labelText_ = "Duration", Wn.prototype.controlText_ = "Duration", pe.registerComponent("DurationDisplay", Wn);
var qn = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {
            className: "vjs-time-control vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }, e
}(pe);
pe.registerComponent("TimeDivider", qn);
var Un = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on(n, "durationchange", r.throttledUpdateContent), r.on(n, "ended", r.handleEnded), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-remaining-time"
    }, e.prototype.formatTime_ = function (e) {
        return "-" + t.prototype.formatTime_.call(this, e)
    }, e.prototype.updateContent = function (t) {
        this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
    }, e.prototype.handleEnded = function (t) {
        this.player_.duration() && this.updateFormattedTime_(0)
    }, e
}(Vn);
Un.prototype.labelText_ = "Remaining Time", Un.prototype.controlText_ = "Remaining Time", pe.registerComponent("RemainingTimeDisplay", Un);
var Yn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.updateShowing(), r.on(r.player(), "durationchange", r.updateShowing), r
    }

    return B(e, t), e.prototype.createEl = function () {
        var e = t.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
        return this.contentEl_ = it("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
        }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
    }, e.prototype.dispose = function () {
        this.contentEl_ = null, t.prototype.dispose.call(this)
    }, e.prototype.updateShowing = function (t) {
        this.player().duration() === 1 / 0 ? this.show() : this.hide()
    }, e
}(pe);
pe.registerComponent("LiveDisplay", Yn);
var Gn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.bar = r.getChild(r.options_.barName), r.vertical(!!r.options_.vertical), r.enable(), r
    }

    return B(e, t), e.prototype.enabled = function () {
        return this.enabled_
    }, e.prototype.enable = function () {
        this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
    }, e.prototype.disable = function () {
        if (this.enabled()) {
            var t = this.bar.el_.ownerDocument;
            this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
        }
    }, e.prototype.createEl = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.className = n.className + " vjs-slider", n = W({tabIndex: 0}, n), i = W({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, i), t.prototype.createEl.call(this, e, n, i)
    }, e.prototype.handleMouseDown = function (t) {
        var e = this.bar.el_.ownerDocument;
        "mousedown" === t.type && t.preventDefault(), "touchstart" !== t.type || T || t.preventDefault(), gt(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
    }, e.prototype.handleMouseMove = function (t) {
    }, e.prototype.handleMouseUp = function () {
        var t = this.bar.el_.ownerDocument;
        vt(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
    }, e.prototype.update = function () {
        if (this.el_) {
            var t = this.getPercent(), e = this.bar;
            if (e) {
                ("number" != typeof t || t != t || t < 0 || t === 1 / 0) && (t = 0);
                var n = (100 * t).toFixed(2) + "%", i = e.el().style;
                return this.vertical() ? i.height = n : i.width = n, t
            }
        }
    }, e.prototype.calculateDistance = function (t) {
        var e = bt(this.el_, t);
        return this.vertical() ? e.y : e.x
    }, e.prototype.handleFocus = function () {
        this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
    }, e.prototype.handleKeyPress = function (t) {
        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
    }, e.prototype.handleBlur = function () {
        this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
    }, e.prototype.handleClick = function (t) {
        t.stopImmediatePropagation(), t.preventDefault()
    }, e.prototype.vertical = function (t) {
        if (void 0 === t) return this.vertical_ || !1;
        this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
    }, e
}(pe);
pe.registerComponent("Slider", Gn);
var Xn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.partEls_ = [], r.on(n, "progress", r.update), r
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
        })
    }, e.prototype.dispose = function () {
        this.partEls_ = null, t.prototype.dispose.call(this)
    }, e.prototype.update = function (t) {
        var e = this.player_.buffered(), n = this.player_.duration(), i = this.player_.bufferedEnd(), r = this.partEls_,
            a = function (t, e) {
                var n = t / e || 0;
                return 100 * (n >= 1 ? 1 : n) + "%"
            };
        this.el_.style.width = a(i, n);
        for (var o = 0; o < e.length; o++) {
            var s = e.start(o), l = e.end(o), u = r[o];
            u || (u = this.el_.appendChild(it()), r[o] = u), u.style.left = a(s, i), u.style.width = a(l - s, i)
        }
        for (var c = r.length; c > e.length; c--) this.el_.removeChild(r[c - 1]);
        r.length = e.length
    }, e
}(pe);
pe.registerComponent("LoadProgressBar", Xn);
var Zn = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
    }, e.prototype.update = function (t, e, n) {
        var i = mt(this.el_), r = mt(this.player_.el()), a = t.width * e;
        if (r && i) {
            var o = t.left - r.left + a, s = t.width - a + (r.right - t.right), l = i.width / 2;
            o < l ? l += l - o : s < l && (l = s), l < 0 ? l = 0 : l > i.width && (l = i.width), this.el_.style.right = "-" + l + "px", rt(this.el_, n)
        }
    }, e
}(pe);
pe.registerComponent("TimeTooltip", Zn);
var Kn = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {
            className: "vjs-play-progress vjs-slider-bar",
            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
        })
    }, e.prototype.update = function (t, e) {
        var n = this;
        this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame((function () {
            var i = n.player_.scrubbing() ? n.player_.getCache().currentTime : n.player_.currentTime(),
                r = zn(i, n.player_.duration()), a = n.getChild("timeTooltip");
            a && a.update(t, e, r)
        }))
    }, e
}(pe);
Kn.prototype.options_ = {children: []}, A && !(A > 8) || y || x || Kn.prototype.options_.children.push("timeTooltip"), pe.registerComponent("PlayProgressBar", Kn);
var $n = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.update = Jt(Qt(r, r.update), 25), r
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
    }, e.prototype.update = function (t, e) {
        var n = this;
        this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame((function () {
            var i = n.player_.duration(), r = zn(e * i, i);
            n.el_.style.left = t.width * e + "px", n.getChild("timeTooltip").update(t, e, r)
        }))
    }, e
}(pe);
$n.prototype.options_ = {children: ["timeTooltip"]}, pe.registerComponent("MouseTimeDisplay", $n);
var Qn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.setEventHandlers_(), r
    }

    return B(e, t), e.prototype.setEventHandlers_ = function () {
        var t = this;
        this.update = Jt(Qt(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], (function () {
            t.clearInterval(t.updateInterval), t.updateInterval = t.setInterval((function () {
                t.requestAnimationFrame((function () {
                    t.update()
                }))
            }), 30)
        })), this.on(this.player_, ["ended", "pause", "waiting"], (function () {
            t.clearInterval(t.updateInterval)
        })), this.on(this.player_, ["timeupdate", "ended"], this.update)
    }, e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
    }, e.prototype.update_ = function (t, e) {
        var n = this.player_.duration();
        this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [zn(t, n), zn(n, n)], "{1} of {2}")), this.bar.update(mt(this.el_), e)
    }, e.prototype.update = function (e) {
        var n = t.prototype.update.call(this);
        return this.update_(this.getCurrentTime_(), n), n
    }, e.prototype.getCurrentTime_ = function () {
        return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
    }, e.prototype.handleEnded = function (t) {
        this.update_(this.player_.duration(), 1)
    }, e.prototype.getPercent = function () {
        var t = this.getCurrentTime_() / this.player_.duration();
        return t >= 1 ? 1 : t
    }, e.prototype.handleMouseDown = function (e) {
        kt(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e))
    }, e.prototype.handleMouseMove = function (t) {
        if (kt(t)) {
            var e = this.calculateDistance(t) * this.player_.duration();
            e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
        }
    }, e.prototype.enable = function () {
        t.prototype.enable.call(this);
        var e = this.getChild("mouseTimeDisplay");
        e && e.show()
    }, e.prototype.disable = function () {
        t.prototype.disable.call(this);
        var e = this.getChild("mouseTimeDisplay");
        e && e.hide()
    }, e.prototype.handleMouseUp = function (e) {
        t.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
            type: "timeupdate",
            target: this,
            manuallyTriggered: !0
        }), this.videoWasPlaying && Oe(this.player_.play())
    }, e.prototype.stepForward = function () {
        this.player_.currentTime(this.player_.currentTime() + 5)
    }, e.prototype.stepBack = function () {
        this.player_.currentTime(this.player_.currentTime() - 5)
    }, e.prototype.handleAction = function (t) {
        this.player_.paused() ? this.player_.play() : this.player_.pause()
    }, e.prototype.handleKeyPress = function (e) {
        32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
    }, e
}(Gn);
Qn.prototype.options_ = {
    children: ["loadProgressBar", "playProgressBar"],
    barName: "playProgressBar"
}, A && !(A > 8) || y || x || Qn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), Qn.prototype.playerEvent = "timeupdate", pe.registerComponent("SeekBar", Qn);
var Jn = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.handleMouseMove = Jt(Qt(r, r.handleMouseMove), 25), r.throttledHandleMouseSeek = Jt(Qt(r, r.handleMouseSeek), 25), r.enable(), r
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
    }, e.prototype.handleMouseMove = function (t) {
        var e = this.getChild("seekBar");
        if (e) {
            var n = e.getChild("mouseTimeDisplay"), i = e.el(), r = mt(i), a = bt(i, t).x;
            a > 1 ? a = 1 : a < 0 && (a = 0), n && n.update(r, a)
        }
    }, e.prototype.handleMouseSeek = function (t) {
        var e = this.getChild("seekBar");
        e && e.handleMouseMove(t)
    }, e.prototype.enabled = function () {
        return this.enabled_
    }, e.prototype.disable = function () {
        this.children().forEach((function (t) {
            return t.disable && t.disable()
        })), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
    }, e.prototype.enable = function () {
        this.children().forEach((function (t) {
            return t.enable && t.enable()
        })), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
    }, e.prototype.handleMouseDown = function (t) {
        var e = this.el_.ownerDocument, n = this.getChild("seekBar");
        n && n.handleMouseDown(t), this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
    }, e.prototype.handleMouseUp = function (t) {
        var e = this.el_.ownerDocument, n = this.getChild("seekBar");
        n && n.handleMouseUp(t), this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
    }, e
}(pe);
Jn.prototype.options_ = {children: ["seekBar"]}, pe.registerComponent("ProgressControl", Jn);
var ti = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on(n, "fullscreenchange", r.handleFullscreenChange), !1 === o[be.fullscreenEnabled] && r.disable(), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.handleFullscreenChange = function (t) {
        this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
    }, e.prototype.handleClick = function (t) {
        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
    }, e
}(Ln);
ti.prototype.controlText_ = "Fullscreen", pe.registerComponent("FullscreenToggle", ti);
var ei = function (t, e) {
    e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", (function () {
        e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
    }))
}, ni = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }, e
}(pe);
pe.registerComponent("VolumeLevel", ni);
var ii = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on("slideractive", r.updateLastVolume_), r.on(n, "volumechange", r.updateARIAAttributes), n.ready((function () {
            return r.updateARIAAttributes()
        })), r
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
            "aria-label": this.localize("Volume Level"),
            "aria-live": "polite"
        })
    }, e.prototype.handleMouseDown = function (e) {
        kt(e) && t.prototype.handleMouseDown.call(this, e)
    }, e.prototype.handleMouseMove = function (t) {
        kt(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)))
    }, e.prototype.checkMuted = function () {
        this.player_.muted() && this.player_.muted(!1)
    }, e.prototype.getPercent = function () {
        return this.player_.muted() ? 0 : this.player_.volume()
    }, e.prototype.stepForward = function () {
        this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
    }, e.prototype.stepBack = function () {
        this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
    }, e.prototype.updateARIAAttributes = function (t) {
        var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
        this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
    }, e.prototype.volumeAsPercentage_ = function () {
        return Math.round(100 * this.player_.volume())
    }, e.prototype.updateLastVolume_ = function () {
        var t = this, e = this.player_.volume();
        this.one("sliderinactive", (function () {
            0 === t.player_.volume() && t.player_.lastVolume_(e)
        }))
    }, e
}(Gn);
ii.prototype.options_ = {
    children: ["volumeLevel"],
    barName: "volumeLevel"
}, ii.prototype.playerEvent = "volumechange", pe.registerComponent("VolumeBar", ii);
var ri = function (t) {
    function e(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        N(this, e), i.vertical = i.vertical || !1, (void 0 === i.volumeBar || U(i.volumeBar)) && (i.volumeBar = i.volumeBar || {}, i.volumeBar.vertical = i.vertical);
        var r = j(this, t.call(this, n, i));
        return ei(r, n), r.throttledHandleMouseMove = Jt(Qt(r, r.handleMouseMove), 25), r.on("mousedown", r.handleMouseDown), r.on("touchstart", r.handleMouseDown), r.on(r.volumeBar, ["focus", "slideractive"], (function () {
            r.volumeBar.addClass("vjs-slider-active"), r.addClass("vjs-slider-active"), r.trigger("slideractive")
        })), r.on(r.volumeBar, ["blur", "sliderinactive"], (function () {
            r.volumeBar.removeClass("vjs-slider-active"), r.removeClass("vjs-slider-active"), r.trigger("sliderinactive")
        })), r
    }

    return B(e, t), e.prototype.createEl = function () {
        var e = "vjs-volume-horizontal";
        return this.options_.vertical && (e = "vjs-volume-vertical"), t.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + e})
    }, e.prototype.handleMouseDown = function (t) {
        var e = this.el_.ownerDocument;
        this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
    }, e.prototype.handleMouseUp = function (t) {
        var e = this.el_.ownerDocument;
        this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
    }, e.prototype.handleMouseMove = function (t) {
        this.volumeBar.handleMouseMove(t)
    }, e
}(pe);
ri.prototype.options_ = {children: ["volumeBar"]}, pe.registerComponent("VolumeControl", ri);
var ai = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return function (t, e) {
            e.tech_ && !e.tech_.featuresMuteControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", (function () {
                e.tech_.featuresMuteControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
            }))
        }(r, n), r.on(n, ["loadstart", "volumechange"], r.update), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.handleClick = function (t) {
        var e = this.player_.volume(), n = this.player_.lastVolume_();
        if (0 === e) {
            var i = n < .1 ? .1 : n;
            this.player_.volume(i), this.player_.muted(!1)
        } else this.player_.muted(!this.player_.muted())
    }, e.prototype.update = function (t) {
        this.updateIcon_(), this.updateControlText_()
    }, e.prototype.updateIcon_ = function () {
        var t = this.player_.volume(), e = 3;
        y && this.player_.muted(this.player_.tech_.el_.muted), 0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
        for (var n = 0; n < 4; n++) lt(this.el_, "vjs-vol-" + n);
        st(this.el_, "vjs-vol-" + e)
    }, e.prototype.updateControlText_ = function () {
        var t = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
        this.controlText() !== t && this.controlText(t)
    }, e
}(Ln);
ai.prototype.controlText_ = "Mute", pe.registerComponent("MuteToggle", ai);
var oi = function (t) {
    function e(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        N(this, e), void 0 !== i.inline ? i.inline = i.inline : i.inline = !0, (void 0 === i.volumeControl || U(i.volumeControl)) && (i.volumeControl = i.volumeControl || {}, i.volumeControl.vertical = !i.inline);
        var r = j(this, t.call(this, n, i));
        return r.on(n, ["loadstart"], r.volumePanelState_), r.on(r.volumeControl, ["slideractive"], r.sliderActive_), r.on(r.volumeControl, ["sliderinactive"], r.sliderInactive_), r
    }

    return B(e, t), e.prototype.sliderActive_ = function () {
        this.addClass("vjs-slider-active")
    }, e.prototype.sliderInactive_ = function () {
        this.removeClass("vjs-slider-active")
    }, e.prototype.volumePanelState_ = function () {
        this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
    }, e.prototype.createEl = function () {
        var e = "vjs-volume-panel-horizontal";
        return this.options_.inline || (e = "vjs-volume-panel-vertical"), t.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + e})
    }, e
}(pe);
oi.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, pe.registerComponent("VolumePanel", oi);
var si = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return i && (r.menuButton_ = i.menuButton), r.focusedChild_ = -1, r.on("keydown", r.handleKeyPress), r
    }

    return B(e, t), e.prototype.addItem = function (t) {
        this.addChild(t), t.on("click", Qt(this, (function (e) {
            this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
        })))
    }, e.prototype.createEl = function () {
        var e = this.options_.contentElType || "ul";
        this.contentEl_ = it(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
        var n = t.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
        return n.appendChild(this.contentEl_), Vt(n, "click", (function (t) {
            t.preventDefault(), t.stopImmediatePropagation()
        })), n
    }, e.prototype.dispose = function () {
        this.contentEl_ = null, t.prototype.dispose.call(this)
    }, e.prototype.handleKeyPress = function (t) {
        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
    }, e.prototype.stepForward = function () {
        var t = 0;
        void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
    }, e.prototype.stepBack = function () {
        var t = 0;
        void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
    }, e.prototype.focus = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = this.children().slice(),
            n = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
        n && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
    }, e
}(pe);
pe.registerComponent("Menu", si);
var li = function (t) {
    function e(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        N(this, e);
        var r = j(this, t.call(this, n, i));
        r.menuButton_ = new Ln(n, i), r.menuButton_.controlText(r.controlText_), r.menuButton_.el_.setAttribute("aria-haspopup", "true");
        var a = Ln.prototype.buildCSSClass();
        return r.menuButton_.el_.className = r.buildCSSClass() + " " + a, r.menuButton_.removeClass("vjs-control"), r.addChild(r.menuButton_), r.update(), r.enabled_ = !0, r.on(r.menuButton_, "tap", r.handleClick), r.on(r.menuButton_, "click", r.handleClick), r.on(r.menuButton_, "focus", r.handleFocus), r.on(r.menuButton_, "blur", r.handleBlur), r.on("keydown", r.handleSubmenuKeyPress), r
    }

    return B(e, t), e.prototype.update = function () {
        var t = this.createMenu();
        this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
    }, e.prototype.createMenu = function () {
        var t = new si(this.player_, {menuButton: this});
        if (this.hideThreshold_ = 0, this.options_.title) {
            var e = it("li", {className: "vjs-menu-title", innerHTML: he(this.options_.title), tabIndex: -1});
            this.hideThreshold_ += 1, t.children_.unshift(e), at(e, t.contentEl())
        }
        if (this.items = this.createItems(), this.items) for (var n = 0; n < this.items.length; n++) t.addItem(this.items[n]);
        return t
    }, e.prototype.createItems = function () {
    }, e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
    }, e.prototype.buildWrapperCSSClass = function () {
        var e = "vjs-menu-button";
        return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Ln.prototype.buildCSSClass() + " " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildCSSClass = function () {
        var e = "vjs-menu-button";
        return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.controlText = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
        return this.menuButton_.controlText(t, e)
    }, e.prototype.handleClick = function (t) {
        this.one(this.menu.contentEl(), "mouseleave", Qt(this, (function (t) {
            this.unpressButton(), this.el_.blur()
        }))), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
    }, e.prototype.focus = function () {
        this.menuButton_.focus()
    }, e.prototype.blur = function () {
        this.menuButton_.blur()
    }, e.prototype.handleFocus = function () {
        Vt(o, "keydown", Qt(this, this.handleKeyPress))
    }, e.prototype.handleBlur = function () {
        Ht(o, "keydown", Qt(this, this.handleKeyPress))
    }, e.prototype.handleKeyPress = function (t) {
        27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
    }, e.prototype.handleSubmenuKeyPress = function (t) {
        27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
    }, e.prototype.pressButton = function () {
        if (this.enabled_) {
            if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), y && et()) return;
            this.menu.focus()
        }
    }, e.prototype.unpressButton = function () {
        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
    }, e.prototype.disable = function () {
        this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
    }, e.prototype.enable = function () {
        this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
    }, e
}(pe);
pe.registerComponent("MenuButton", li);
var ui = function (t) {
    function e(n, i) {
        N(this, e);
        var r = i.tracks, a = j(this, t.call(this, n, i));
        if (a.items.length <= 1 && a.hide(), !r) return j(a);
        var o = Qt(a, a.update);
        return r.addEventListener("removetrack", o), r.addEventListener("addtrack", o), a.player_.on("ready", o), a.player_.on("dispose", (function () {
            r.removeEventListener("removetrack", o), r.removeEventListener("addtrack", o)
        })), a
    }

    return B(e, t), e
}(li);
pe.registerComponent("TrackButton", ui);
var ci = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.selectable = i.selectable, r.isSelected_ = i.selected || !1, r.multiSelectable = i.multiSelectable, r.selected(r.isSelected_), r.selectable ? r.multiSelectable ? r.el_.setAttribute("role", "menuitemcheckbox") : r.el_.setAttribute("role", "menuitemradio") : r.el_.setAttribute("role", "menuitem"), r
    }

    return B(e, t), e.prototype.createEl = function (e, n, i) {
        return this.nonIconControl = !0, t.prototype.createEl.call(this, "li", W({
            className: "vjs-menu-item",
            innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
            tabIndex: -1
        }, n), i)
    }, e.prototype.handleClick = function (t) {
        this.selected(!0)
    }, e.prototype.selected = function (t) {
        this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
    }, e
}(Mn);
pe.registerComponent("MenuItem", ci);
var di = function (t) {
    function e(n, i) {
        N(this, e);
        var r = i.track, s = n.textTracks();
        i.label = r.label || r.language || "Unknown", i.selected = "showing" === r.mode;
        var l = j(this, t.call(this, n, i));
        l.track = r;
        var u = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            l.handleTracksChange.apply(l, e)
        }, c = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            l.handleSelectedLanguageChange.apply(l, e)
        };
        if (n.on(["loadstart", "texttrackchange"], u), s.addEventListener("change", u), s.addEventListener("selectedlanguagechange", c), l.on("dispose", (function () {
            n.off(["loadstart", "texttrackchange"], u), s.removeEventListener("change", u), s.removeEventListener("selectedlanguagechange", c)
        })), void 0 === s.onchange) {
            var d = void 0;
            l.on(["tap", "click"], (function () {
                if ("object" !== R(a.Event)) try {
                    d = new a.Event("change")
                } catch (t) {
                }
                d || (d = o.createEvent("Event")).initEvent("change", !0, !0), s.dispatchEvent(d)
            }))
        }
        return l.handleTracksChange(), l
    }

    return B(e, t), e.prototype.handleClick = function (e) {
        var n = this.track.kind, i = this.track.kinds, r = this.player_.textTracks();
        if (i || (i = [n]), t.prototype.handleClick.call(this, e), r) for (var a = 0; a < r.length; a++) {
            var o = r[a];
            o === this.track && i.indexOf(o.kind) > -1 ? "showing" !== o.mode && (o.mode = "showing") : "disabled" !== o.mode && (o.mode = "disabled")
        }
    }, e.prototype.handleTracksChange = function (t) {
        var e = "showing" === this.track.mode;
        e !== this.isSelected_ && this.selected(e)
    }, e.prototype.handleSelectedLanguageChange = function (t) {
        if ("showing" === this.track.mode) {
            var e = this.player_.cache_.selectedLanguage;
            if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
            this.player_.cache_.selectedLanguage = {enabled: !0, language: this.track.language, kind: this.track.kind}
        }
    }, e.prototype.dispose = function () {
        this.track = null, t.prototype.dispose.call(this)
    }, e
}(ci);
pe.registerComponent("TextTrackMenuItem", di);
var hi = function (t) {
    function e(n, i) {
        return N(this, e), i.track = {
            player: n,
            kind: i.kind,
            kinds: i.kinds,
            default: !1,
            mode: "disabled"
        }, i.kinds || (i.kinds = [i.kind]), i.label ? i.track.label = i.label : i.track.label = i.kinds.join(" and ") + " off", i.selectable = !0, i.multiSelectable = !1, j(this, t.call(this, n, i))
    }

    return B(e, t), e.prototype.handleTracksChange = function (t) {
        for (var e = this.player().textTracks(), n = !0, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
                n = !1;
                break
            }
        }
        n !== this.isSelected_ && this.selected(n)
    }, e.prototype.handleSelectedLanguageChange = function (t) {
        for (var e = this.player().textTracks(), n = !0, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && "showing" === a.mode) {
                n = !1;
                break
            }
        }
        n && (this.player_.cache_.selectedLanguage = {enabled: !1})
    }, e
}(di);
pe.registerComponent("OffTextTrackMenuItem", hi);
var fi = function (t) {
    function e(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return N(this, e), i.tracks = n.textTracks(), j(this, t.call(this, n, i))
    }

    return B(e, t), e.prototype.createItems = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : di, n = void 0;
        this.label_ && (n = this.label_ + " off"), t.push(new hi(this.player_, {
            kinds: this.kinds_,
            kind: this.kind_,
            label: n
        })), this.hideThreshold_ += 1;
        var i = this.player_.textTracks();
        Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
        for (var r = 0; r < i.length; r++) {
            var a = i[r];
            if (this.kinds_.indexOf(a.kind) > -1) {
                var o = new e(this.player_, {track: a, selectable: !0, multiSelectable: !1});
                o.addClass("vjs-" + a.kind + "-menu-item"), t.push(o)
            }
        }
        return t
    }, e
}(ui);
pe.registerComponent("TextTrackButton", fi);
var pi = function (t) {
    function e(n, i) {
        N(this, e);
        var r = i.track, a = i.cue, o = n.currentTime();
        i.selectable = !0, i.multiSelectable = !1, i.label = a.text, i.selected = a.startTime <= o && o < a.endTime;
        var s = j(this, t.call(this, n, i));
        return s.track = r, s.cue = a, r.addEventListener("cuechange", Qt(s, s.update)), s
    }

    return B(e, t), e.prototype.handleClick = function (e) {
        t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, e.prototype.update = function (t) {
        var e = this.cue, n = this.player_.currentTime();
        this.selected(e.startTime <= n && n < e.endTime)
    }, e
}(ci);
pe.registerComponent("ChaptersTrackMenuItem", pi);
var gi = function (t) {
    function e(n, i, r) {
        return N(this, e), j(this, t.call(this, n, i, r))
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
    }, e.prototype.update = function (e) {
        this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
    }, e.prototype.setTrack = function (t) {
        if (this.track_ !== t) {
            if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
            }
            if (this.track_ = t, this.track_) {
                this.track_.mode = "hidden";
                var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                n && n.addEventListener("load", this.updateHandler_)
            }
        }
    }, e.prototype.findChaptersTrack = function () {
        for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
            var n = t[e];
            if (n.kind === this.kind_) return n
        }
    }, e.prototype.getMenuCaption = function () {
        return this.track_ && this.track_.label ? this.track_.label : this.localize(he(this.kind_))
    }, e.prototype.createMenu = function () {
        return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
    }, e.prototype.createItems = function () {
        var t = [];
        if (!this.track_) return t;
        var e = this.track_.cues;
        if (!e) return t;
        for (var n = 0, i = e.length; n < i; n++) {
            var r = e[n], a = new pi(this.player_, {track: this.track_, cue: r});
            t.push(a)
        }
        return t
    }, e
}(fi);
gi.prototype.kind_ = "chapters", gi.prototype.controlText_ = "Chapters", pe.registerComponent("ChaptersButton", gi);
var vi = function (t) {
    function e(n, i, r) {
        N(this, e);
        var a = j(this, t.call(this, n, i, r)), o = n.textTracks(), s = Qt(a, a.handleTracksChange);
        return o.addEventListener("change", s), a.on("dispose", (function () {
            o.removeEventListener("change", s)
        })), a
    }

    return B(e, t), e.prototype.handleTracksChange = function (t) {
        for (var e = this.player().textTracks(), n = !1, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            if (a.kind !== this.kind_ && "showing" === a.mode) {
                n = !0;
                break
            }
        }
        n ? this.disable() : this.enable()
    }, e.prototype.buildCSSClass = function () {
        return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
    }, e
}(fi);
vi.prototype.kind_ = "descriptions", vi.prototype.controlText_ = "Descriptions", pe.registerComponent("DescriptionsButton", vi);
var mi = function (t) {
    function e(n, i, r) {
        return N(this, e), j(this, t.call(this, n, i, r))
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
    }, e
}(fi);
mi.prototype.kind_ = "subtitles", mi.prototype.controlText_ = "Subtitles", pe.registerComponent("SubtitlesButton", mi);
var yi = function (t) {
    function e(n, i) {
        N(this, e), i.track = {
            player: n,
            kind: i.kind,
            label: i.kind + " settings",
            selectable: !1,
            default: !1,
            mode: "disabled"
        }, i.selectable = !1, i.name = "CaptionSettingsMenuItem";
        var r = j(this, t.call(this, n, i));
        return r.addClass("vjs-texttrack-settings"), r.controlText(", opens " + i.kind + " settings dialog"), r
    }

    return B(e, t), e.prototype.handleClick = function (t) {
        this.player().getChild("textTrackSettings").open()
    }, e
}(di);
pe.registerComponent("CaptionSettingsMenuItem", yi);
var bi = function (t) {
    function e(n, i, r) {
        return N(this, e), j(this, t.call(this, n, i, r))
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
    }, e.prototype.createItems = function () {
        var e = [];
        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new yi(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), t.prototype.createItems.call(this, e)
    }, e
}(fi);
bi.prototype.kind_ = "captions", bi.prototype.controlText_ = "Captions", pe.registerComponent("CaptionsButton", bi);
var xi = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function (e, n, i) {
        var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
        return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), r += "</span>", t.prototype.createEl.call(this, e, W({innerHTML: r}, n), i)
    }, e
}(di);
pe.registerComponent("SubsCapsMenuItem", xi);
var _i = function (t) {
    function e(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(r.player_.language_) > -1 && (r.label_ = "captions"), r.menuButton_.controlText(he(r.label_)), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
    }, e.prototype.createItems = function () {
        var e = [];
        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new yi(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), e = t.prototype.createItems.call(this, e, xi)
    }, e
}(fi);
_i.prototype.kinds_ = ["captions", "subtitles"], _i.prototype.controlText_ = "Subtitles", pe.registerComponent("SubsCapsButton", _i);
var wi = function (t) {
    function e(n, i) {
        N(this, e);
        var r = i.track, a = n.audioTracks();
        i.label = r.label || r.language || "Unknown", i.selected = r.enabled;
        var o = j(this, t.call(this, n, i));
        o.track = r, o.addClass("vjs-" + r.kind + "-menu-item");
        var s = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            o.handleTracksChange.apply(o, e)
        };
        return a.addEventListener("change", s), o.on("dispose", (function () {
            a.removeEventListener("change", s)
        })), o
    }

    return B(e, t), e.prototype.createEl = function (e, n, i) {
        var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
        return "main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), r += "</span>", t.prototype.createEl.call(this, e, W({innerHTML: r}, n), i)
    }, e.prototype.handleClick = function (e) {
        var n = this.player_.audioTracks();
        t.prototype.handleClick.call(this, e);
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            r.enabled = r === this.track
        }
    }, e.prototype.handleTracksChange = function (t) {
        this.selected(this.track.enabled)
    }, e
}(ci);
pe.registerComponent("AudioTrackMenuItem", wi);
var Ci = function (t) {
    function e(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return N(this, e), i.tracks = n.audioTracks(), j(this, t.call(this, n, i))
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
    }, e.prototype.createItems = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.hideThreshold_ = 1;
        for (var e = this.player_.audioTracks(), n = 0; n < e.length; n++) {
            var i = e[n];
            t.push(new wi(this.player_, {track: i, selectable: !0, multiSelectable: !1}))
        }
        return t
    }, e
}(ui);
Ci.prototype.controlText_ = "Audio Track", pe.registerComponent("AudioTrackButton", Ci);
var Si = function (t) {
    function e(n, i) {
        N(this, e);
        var r = i.rate, a = parseFloat(r, 10);
        i.label = r, i.selected = 1 === a, i.selectable = !0, i.multiSelectable = !1;
        var o = j(this, t.call(this, n, i));
        return o.label = r, o.rate = a, o.on(n, "ratechange", o.update), o
    }

    return B(e, t), e.prototype.handleClick = function (e) {
        t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
    }, e.prototype.update = function (t) {
        this.selected(this.player().playbackRate() === this.rate)
    }, e
}(ci);
Si.prototype.contentElType = "button", pe.registerComponent("PlaybackRateMenuItem", Si);
var ki = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.updateVisibility(), r.updateLabel(), r.on(n, "loadstart", r.updateVisibility), r.on(n, "ratechange", r.updateLabel), r
    }

    return B(e, t), e.prototype.createEl = function () {
        var e = t.prototype.createEl.call(this);
        return this.labelEl_ = it("div", {
            className: "vjs-playback-rate-value",
            innerHTML: "1x"
        }), e.appendChild(this.labelEl_), e
    }, e.prototype.dispose = function () {
        this.labelEl_ = null, t.prototype.dispose.call(this)
    }, e.prototype.buildCSSClass = function () {
        return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.buildWrapperCSSClass = function () {
        return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
    }, e.prototype.createMenu = function () {
        var t = new si(this.player()), e = this.playbackRates();
        if (e) for (var n = e.length - 1; n >= 0; n--) t.addChild(new Si(this.player(), {rate: e[n] + "x"}));
        return t
    }, e.prototype.updateARIAAttributes = function () {
        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
    }, e.prototype.handleClick = function (t) {
        for (var e = this.player().playbackRate(), n = this.playbackRates(), i = n[0], r = 0; r < n.length; r++) if (n[r] > e) {
            i = n[r];
            break
        }
        this.player().playbackRate(i)
    }, e.prototype.playbackRates = function () {
        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
    }, e.prototype.playbackRateSupported = function () {
        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
    }, e.prototype.updateVisibility = function (t) {
        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
    }, e.prototype.updateLabel = function (t) {
        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
    }, e
}(li);
ki.prototype.controlText_ = "Playback Rate", pe.registerComponent("PlaybackRateMenuButton", ki);
var Ti = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
    }, e
}(pe);
pe.registerComponent("Spacer", Ti);
var Mi = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.createEl = function () {
        var e = t.prototype.createEl.call(this, {className: this.buildCSSClass()});
        return e.innerHTML = " ", e
    }, e
}(Ti);
pe.registerComponent("CustomControlSpacer", Mi);
var Oi = function (t) {
    function e() {
        return N(this, e), j(this, t.apply(this, arguments))
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"})
    }, e
}(pe);
Oi.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, pe.registerComponent("ControlBar", Oi);
var Ai = function (t) {
    function e(n, i) {
        N(this, e);
        var r = j(this, t.call(this, n, i));
        return r.on(n, "error", r.open), r
    }

    return B(e, t), e.prototype.buildCSSClass = function () {
        return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.content = function () {
        var t = this.player().error();
        return t ? this.localize(t.message) : ""
    }, e
}(Pe);
Ai.prototype.options_ = fe(Pe.prototype.options_, {
    pauseOnOpen: !1,
    fillAlways: !0,
    temporary: !1,
    uncloseable: !0
}), pe.registerComponent("ErrorDisplay", Ai);
var Di = "vjs-text-track-settings", Ei = ["#000", "Black"], Pi = ["#00F", "Blue"], Ii = ["#0FF", "Cyan"],
    Li = ["#0F0", "Green"], Ri = ["#F0F", "Magenta"], Ni = ["#F00", "Red"], Bi = ["#FFF", "White"],
    ji = ["#FF0", "Yellow"], Fi = ["1", "Opaque"], zi = ["0.5", "Semi-Transparent"], Vi = ["0", "Transparent"], Hi = {
        backgroundColor: {
            selector: ".vjs-bg-color > select",
            id: "captions-background-color-%s",
            label: "Color",
            options: [Ei, Bi, Ni, Li, Pi, ji, Ri, Ii]
        },
        backgroundOpacity: {
            selector: ".vjs-bg-opacity > select",
            id: "captions-background-opacity-%s",
            label: "Transparency",
            options: [Fi, zi, Vi]
        },
        color: {
            selector: ".vjs-fg-color > select",
            id: "captions-foreground-color-%s",
            label: "Color",
            options: [Bi, Ei, Ni, Li, Pi, ji, Ri, Ii]
        },
        edgeStyle: {
            selector: ".vjs-edge-style > select",
            id: "%s",
            label: "Text Edge Style",
            options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
        },
        fontFamily: {
            selector: ".vjs-font-family > select",
            id: "captions-font-family-%s",
            label: "Font Family",
            options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
        },
        fontPercent: {
            selector: ".vjs-font-percent > select",
            id: "captions-font-size-%s",
            label: "Font Size",
            options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
            default: 2,
            parser: function (t) {
                return "1.00" === t ? null : Number(t)
            }
        },
        textOpacity: {
            selector: ".vjs-text-opacity > select",
            id: "captions-foreground-opacity-%s",
            label: "Transparency",
            options: [Fi, zi]
        },
        windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
        windowOpacity: {
            selector: ".vjs-window-opacity > select",
            id: "captions-window-opacity-%s",
            label: "Transparency",
            options: [Vi, zi, Fi]
        }
    };

function Wi(t, e) {
    if (e && (t = e(t)), t && "none" !== t) return t
}

Hi.windowColor.options = Hi.backgroundColor.options;
var qi = function (t) {
    function e(n, i) {
        N(this, e), i.temporary = !1;
        var r = j(this, t.call(this, n, i));
        return r.updateDisplay = Qt(r, r.updateDisplay), r.fill(), r.hasBeenOpened_ = r.hasBeenFilled_ = !0, r.endDialog = it("p", {
            className: "vjs-control-text",
            textContent: r.localize("End of dialog window.")
        }), r.el().appendChild(r.endDialog), r.setDefaults(), void 0 === i.persistTextTrackSettings && (r.options_.persistTextTrackSettings = r.options_.playerOptions.persistTextTrackSettings), r.on(r.$(".vjs-done-button"), "click", (function () {
            r.saveSettings(), r.close()
        })), r.on(r.$(".vjs-default-button"), "click", (function () {
            r.setDefaults(), r.updateDisplay()
        })), H(Hi, (function (t) {
            r.on(r.$(t.selector), "change", r.updateDisplay)
        })), r.options_.persistTextTrackSettings && r.restoreSettings(), r
    }

    return B(e, t), e.prototype.dispose = function () {
        this.endDialog = null, t.prototype.dispose.call(this)
    }, e.prototype.createElSelect_ = function (t) {
        var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label", r = Hi[t],
            a = r.id.replace("%s", this.id_), o = [n, a].join(" ").trim();
        return ["<" + i + ' id="' + a + '" class="' + ("label" === i ? "vjs-label" : "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + o + '">'].concat(r.options.map((function (t) {
            var n = a + "-" + t[1].replace(/\W+/g, "");
            return ['<option id="' + n + '" value="' + t[0] + '" ', 'aria-labelledby="' + o + " " + n + '">', e.localize(t[1]), "</option>"].join("")
        }))).concat("</select>").join("")
    }, e.prototype.createElFgColor_ = function () {
        var t = "captions-text-legend-" + this.id_;
        return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
    }, e.prototype.createElBgColor_ = function () {
        var t = "captions-background-" + this.id_;
        return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
    }, e.prototype.createElWinColor_ = function () {
        var t = "captions-window-" + this.id_;
        return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
    }, e.prototype.createElColors_ = function () {
        return it("div", {
            className: "vjs-track-settings-colors",
            innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
        })
    }, e.prototype.createElFont_ = function () {
        return it("div", {
            className: "vjs-track-settings-font",
            innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
        })
    }, e.prototype.createElControls_ = function () {
        var t = this.localize("restore all settings to the default values");
        return it("div", {
            className: "vjs-track-settings-controls",
            innerHTML: ['<button type="button" class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
        })
    }, e.prototype.content = function () {
        return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
    }, e.prototype.label = function () {
        return this.localize("Caption Settings Dialog")
    }, e.prototype.description = function () {
        return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
    }, e.prototype.buildCSSClass = function () {
        return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
    }, e.prototype.getValues = function () {
        var t = this;
        return function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return V(t).reduce((function (n, i) {
                return e(n, t[i], i)
            }), n)
        }(Hi, (function (e, n, i) {
            var r, a, o = (r = t.$(n.selector), a = n.parser, Wi(r.options[r.options.selectedIndex].value, a));
            return void 0 !== o && (e[i] = o), e
        }), {})
    }, e.prototype.setValues = function (t) {
        var e = this;
        H(Hi, (function (n, i) {
            !function (t, e, n) {
                if (e) for (var i = 0; i < t.options.length; i++) if (Wi(t.options[i].value, n) === e) {
                    t.selectedIndex = i;
                    break
                }
            }(e.$(n.selector), t[i], n.parser)
        }))
    }, e.prototype.setDefaults = function () {
        var t = this;
        H(Hi, (function (e) {
            var n = e.hasOwnProperty("default") ? e.default : 0;
            t.$(e.selector).selectedIndex = n
        }))
    }, e.prototype.restoreSettings = function () {
        var t = void 0;
        try {
            t = JSON.parse(a.localStorage.getItem(Di))
        } catch (t) {
            G.warn(t)
        }
        t && this.setValues(t)
    }, e.prototype.saveSettings = function () {
        if (this.options_.persistTextTrackSettings) {
            var t = this.getValues();
            try {
                Object.keys(t).length ? a.localStorage.setItem(Di, JSON.stringify(t)) : a.localStorage.removeItem(Di)
            } catch (t) {
                G.warn(t)
            }
        }
    }, e.prototype.updateDisplay = function () {
        var t = this.player_.getChild("textTrackDisplay");
        t && t.updateDisplay()
    }, e.prototype.conditionalBlur_ = function () {
        this.previouslyActiveEl_ = null, this.off(o, "keydown", this.handleKeyDown);
        var t = this.player_.controlBar, e = t && t.subsCapsButton, n = t && t.captionsButton;
        e ? e.focus() : n && n.focus()
    }, e
}(Pe);
pe.registerComponent("TextTrackSettings", qi);
var Ui = function (t) {
    function e(n, i) {
        N(this, e);
        var r = i.ResizeObserver || a.ResizeObserver;
        null === i.ResizeObserver && (r = !1);
        var o = fe({createEl: !r}, i), s = j(this, t.call(this, n, o));
        return s.ResizeObserver = i.ResizeObserver || a.ResizeObserver, s.loadListener_ = null, s.resizeObserver_ = null, s.debouncedHandler_ = function (t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a, r = void 0, o = function () {
                i.clearTimeout(r), r = null
            }, s = function () {
                var a = this, o = arguments, s = function () {
                    r = null, s = null, n || t.apply(a, o)
                };
                !r && n && t.apply(a, o), i.clearTimeout(r), r = i.setTimeout(s, e)
            };
            return s.cancel = o, s
        }((function () {
            s.resizeHandler()
        }), 100, !1, s), r ? (s.resizeObserver_ = new s.ResizeObserver(s.debouncedHandler_), s.resizeObserver_.observe(n.el())) : (s.loadListener_ = function () {
            s.el_ && s.el_.contentWindow && Vt(s.el_.contentWindow, "resize", s.debouncedHandler_)
        }, s.one("load", s.loadListener_)), s
    }

    return B(e, t), e.prototype.createEl = function () {
        return t.prototype.createEl.call(this, "iframe", {className: "vjs-resize-manager"})
    }, e.prototype.resizeHandler = function () {
        this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
    }, e.prototype.dispose = function () {
        this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && Ht(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
    }, e
}(pe);
pe.registerComponent("ResizeManager", Ui);
var Yi = function (t) {
    var e = t.el();
    if (e.hasAttribute("src")) return t.triggerSourceset(e.src), !0;
    var n = t.$$("source"), i = [], r = "";
    if (!n.length) return !1;
    for (var a = 0; a < n.length; a++) {
        var o = n[a].src;
        o && -1 === i.indexOf(o) && i.push(o)
    }
    return !!i.length && (1 === i.length && (r = i[0]), t.triggerSourceset(r), !0)
}, Gi = {};
O || (Gi = Object.defineProperty({}, "innerHTML", {
    get: function () {
        return this.cloneNode(!0).innerHTML
    }, set: function (t) {
        var e = o.createElement(this.nodeName.toLowerCase());
        e.innerHTML = t;
        for (var n = o.createDocumentFragment(); e.childNodes.length;) n.appendChild(e.childNodes[0]);
        return this.innerText = "", a.Element.prototype.appendChild.call(this, n), this.innerHTML
    }
}));
var Xi = function (t, e) {
    for (var n = {}, i = 0; i < t.length && !((n = Object.getOwnPropertyDescriptor(t[i], e)) && n.set && n.get); i++) ;
    return n.enumerable = !0, n.configurable = !0, n
}, Zi = function (t) {
    var e = t.el();
    if (!e.resetSourceWatch_) {
        var n = {}, i = function (t) {
            return Xi([t.el(), a.HTMLMediaElement.prototype, a.Element.prototype, Gi], "innerHTML")
        }(t), r = function (n) {
            return function () {
                for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                var o = n.apply(e, r);
                return Yi(t), o
            }
        };
        ["append", "appendChild", "insertAdjacentHTML"].forEach((function (t) {
            e[t] && (n[t] = e[t], e[t] = r(n[t]))
        })), Object.defineProperty(e, "innerHTML", fe(i, {set: r(i.set)})), e.resetSourceWatch_ = function () {
            e.resetSourceWatch_ = null, Object.keys(n).forEach((function (t) {
                e[t] = n[t]
            })), Object.defineProperty(e, "innerHTML", i)
        }, t.one("sourceset", e.resetSourceWatch_)
    }
}, Ki = {};
O || (Ki = Object.defineProperty({}, "src", {
    get: function () {
        return this.hasAttribute("src") ? Xe(a.Element.prototype.getAttribute.call(this, "src")) : ""
    }, set: function (t) {
        return a.Element.prototype.setAttribute.call(this, "src", t), t
    }
}));
var $i = function (t) {
        if (t.featuresSourceset) {
            var e = t.el();
            if (!e.resetSourceset_) {
                var n = function (t) {
                    return Xi([t.el(), a.HTMLMediaElement.prototype, Ki], "src")
                }(t), i = e.setAttribute, r = e.load;
                Object.defineProperty(e, "src", fe(n, {
                    set: function (i) {
                        var r = n.set.call(e, i);
                        return t.triggerSourceset(e.src), r
                    }
                })), e.setAttribute = function (n, r) {
                    var a = i.call(e, n, r);
                    return /src/i.test(n) && t.triggerSourceset(e.src), a
                }, e.load = function () {
                    var n = r.call(e);
                    return Yi(t) || (t.triggerSourceset(""), Zi(t)), n
                }, e.currentSrc ? t.triggerSourceset(e.currentSrc) : Yi(t) || Zi(t), e.resetSourceset_ = function () {
                    e.resetSourceset_ = null, e.load = r, e.setAttribute = i, Object.defineProperty(e, "src", n), e.resetSourceWatch_ && e.resetSourceWatch_()
                }
            }
        }
    },
    Qi = F(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
    Ji = function (t) {
        function e(n, i) {
            N(this, e);
            var r = j(this, t.call(this, n, i)), a = n.source, o = !1;
            if (a && (r.el_.currentSrc !== a.src || n.tag && 3 === n.tag.initNetworkState_) ? r.setSource(a) : r.handleLateInit_(r.el_), n.enableSourceset && r.setupSourcesetHandling_(), r.el_.hasChildNodes()) {
                for (var l = r.el_.childNodes, u = l.length, c = []; u--;) {
                    var d = l[u];
                    "track" === d.nodeName.toLowerCase() && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(d), r.remoteTextTracks().addTrack(d.track), r.textTracks().addTrack(d.track), o || r.el_.hasAttribute("crossorigin") || !Ke(d.src) || (o = !0)) : c.push(d))
                }
                for (var h = 0; h < c.length; h++) r.el_.removeChild(c[h])
            }
            return r.proxyNativeTracks_(), r.featuresNativeTextTracks && o && G.warn(s(Qi)), r.restoreMetadataTracksInIOSNativePlayer_(), (P || v || C) && !0 === n.nativeControlsForTouch && r.setControls(!0), r.proxyWebkitFullscreen_(), r.triggerReady(), r
        }

        return B(e, t), e.prototype.dispose = function () {
            this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), e.disposeMediaElement(this.el_), this.options_ = null, t.prototype.dispose.call(this)
        }, e.prototype.setupSourcesetHandling_ = function () {
            $i(this)
        }, e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
            var t = this.textTracks(), e = void 0, n = function () {
                e = [];
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    "metadata" === i.kind && e.push({track: i, storedMode: i.mode})
                }
            };
            n(), t.addEventListener("change", n), this.on("dispose", (function () {
                return t.removeEventListener("change", n)
            }));
            var i = function n() {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    "disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
                }
                t.removeEventListener("change", n)
            };
            this.on("webkitbeginfullscreen", (function () {
                t.removeEventListener("change", n), t.removeEventListener("change", i), t.addEventListener("change", i)
            })), this.on("webkitendfullscreen", (function () {
                t.removeEventListener("change", n), t.addEventListener("change", n), t.removeEventListener("change", i)
            }))
        }, e.prototype.proxyNativeTracks_ = function () {
            var t = this;
            an.names.forEach((function (e) {
                var n = an[e], i = t.el()[n.getterName], r = t[n.getterName]();
                if (t["featuresNative" + n.capitalName + "Tracks"] && i && i.addEventListener) {
                    var a = {
                        change: function (t) {
                            r.trigger({type: "change", target: r, currentTarget: r, srcElement: r})
                        }, addtrack: function (t) {
                            r.addTrack(t.track)
                        }, removetrack: function (t) {
                            r.removeTrack(t.track)
                        }
                    }, o = function () {
                        for (var t = [], e = 0; e < r.length; e++) {
                            for (var n = !1, a = 0; a < i.length; a++) if (i[a] === r[e]) {
                                n = !0;
                                break
                            }
                            n || t.push(r[e])
                        }
                        for (; t.length;) r.removeTrack(t.shift())
                    };
                    Object.keys(a).forEach((function (e) {
                        var n = a[e];
                        i.addEventListener(e, n), t.on("dispose", (function (t) {
                            return i.removeEventListener(e, n)
                        }))
                    })), t.on("loadstart", o), t.on("dispose", (function (e) {
                        return t.off("loadstart", o)
                    }))
                }
            }))
        }, e.prototype.createEl = function () {
            var t = this.options_.tag;
            if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                if (t) {
                    var n = t.cloneNode(!0);
                    t.parentNode && t.parentNode.insertBefore(n, t), e.disposeMediaElement(t), t = n
                } else {
                    t = o.createElement("video");
                    var i = fe({}, this.options_.tag && dt(this.options_.tag));
                    P && !0 === this.options_.nativeControlsForTouch || delete i.controls, ct(t, W(i, {
                        id: this.options_.techId,
                        class: "vjs-tech"
                    }))
                }
                t.playerId = this.options_.playerId
            }
            void 0 !== this.options_.preload && ft(t, "preload", this.options_.preload);
            for (var r = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < r.length; a++) {
                var s = r[a], l = this.options_[s];
                void 0 !== l && (l ? ft(t, s, s) : pt(t, s), t[s] = l)
            }
            return t
        }, e.prototype.handleLateInit_ = function (t) {
            if (0 !== t.networkState && 3 !== t.networkState) {
                if (0 === t.readyState) {
                    var e = !1, n = function () {
                        e = !0
                    };
                    this.on("loadstart", n);
                    var i = function () {
                        e || this.trigger("loadstart")
                    };
                    return this.on("loadedmetadata", i), void this.ready((function () {
                        this.off("loadstart", n), this.off("loadedmetadata", i), e || this.trigger("loadstart")
                    }))
                }
                var r = ["loadstart"];
                r.push("loadedmetadata"), t.readyState >= 2 && r.push("loadeddata"), t.readyState >= 3 && r.push("canplay"), t.readyState >= 4 && r.push("canplaythrough"), this.ready((function () {
                    r.forEach((function (t) {
                        this.trigger(t)
                    }), this)
                }))
            }
        }, e.prototype.setCurrentTime = function (t) {
            try {
                this.el_.currentTime = t
            } catch (t) {
                G(t, "Video is not ready. (Video.js)")
            }
        }, e.prototype.duration = function () {
            var t = this;
            if (this.el_.duration === 1 / 0 && x && T && 0 === this.el_.currentTime) {
                return this.on("timeupdate", (function e() {
                    t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                })), NaN
            }
            return this.el_.duration || NaN
        }, e.prototype.width = function () {
            return this.el_.offsetWidth
        }, e.prototype.height = function () {
            return this.el_.offsetHeight
        }, e.prototype.proxyWebkitFullscreen_ = function () {
            var t = this;
            if ("webkitDisplayingFullscreen" in this.el_) {
                var e = function () {
                    this.trigger("fullscreenchange", {isFullscreen: !1})
                }, n = function () {
                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {isFullscreen: !0}))
                };
                this.on("webkitbeginfullscreen", n), this.on("dispose", (function () {
                    t.off("webkitbeginfullscreen", n), t.off("webkitendfullscreen", e)
                }))
            }
        }, e.prototype.supportsFullScreen = function () {
            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                var t = a.navigator && a.navigator.userAgent || "";
                if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
            }
            return !1
        }, e.prototype.enterFullScreen = function () {
            var t = this.el_;
            t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout((function () {
                t.pause(), t.webkitEnterFullScreen()
            }), 0)) : t.webkitEnterFullScreen()
        }, e.prototype.exitFullScreen = function () {
            this.el_.webkitExitFullScreen()
        }, e.prototype.src = function (t) {
            if (void 0 === t) return this.el_.src;
            this.setSrc(t)
        }, e.prototype.reset = function () {
            e.resetMediaElement(this.el_)
        }, e.prototype.currentSrc = function () {
            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
        }, e.prototype.setControls = function (t) {
            this.el_.controls = !!t
        }, e.prototype.addTextTrack = function (e, n, i) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, n, i) : t.prototype.addTextTrack.call(this, e, n, i)
        }, e.prototype.createRemoteTextTrack = function (e) {
            if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
            var n = o.createElement("track");
            return e.kind && (n.kind = e.kind), e.label && (n.label = e.label), (e.language || e.srclang) && (n.srclang = e.language || e.srclang), e.default && (n.default = e.default), e.id && (n.id = e.id), e.src && (n.src = e.src), n
        }, e.prototype.addRemoteTextTrack = function (e, n) {
            var i = t.prototype.addRemoteTextTrack.call(this, e, n);
            return this.featuresNativeTextTracks && this.el().appendChild(i), i
        }, e.prototype.removeRemoteTextTrack = function (e) {
            if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var n = this.$$("track"), i = n.length; i--;) e !== n[i] && e !== n[i].track || this.el().removeChild(n[i])
        }, e.prototype.getVideoPlaybackQuality = function () {
            if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
            var t = {};
            return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), a.performance && "function" == typeof a.performance.now ? t.creationTime = a.performance.now() : a.performance && a.performance.timing && "number" == typeof a.performance.timing.navigationStart && (t.creationTime = a.Date.now() - a.performance.timing.navigationStart), t
        }, e
    }(ln);
if (J()) {
    Ji.TEST_VID = o.createElement("video");
    var tr = o.createElement("track");
    tr.kind = "captions", tr.srclang = "en", tr.label = "English", Ji.TEST_VID.appendChild(tr)
}
Ji.isSupported = function () {
    try {
        Ji.TEST_VID.volume = .5
    } catch (t) {
        return !1
    }
    return !(!Ji.TEST_VID || !Ji.TEST_VID.canPlayType)
}, Ji.canPlayType = function (t) {
    return Ji.TEST_VID.canPlayType(t)
}, Ji.canPlaySource = function (t, e) {
    return Ji.canPlayType(t.type)
}, Ji.canControlVolume = function () {
    try {
        var t = Ji.TEST_VID.volume;
        return Ji.TEST_VID.volume = t / 2 + .1, t !== Ji.TEST_VID.volume
    } catch (t) {
        return !1
    }
}, Ji.canMuteVolume = function () {
    try {
        var t = Ji.TEST_VID.muted;
        return Ji.TEST_VID.muted = !t, Ji.TEST_VID.muted ? ft(Ji.TEST_VID, "muted", "muted") : pt(Ji.TEST_VID, "muted"), t !== Ji.TEST_VID.muted
    } catch (t) {
        return !1
    }
}, Ji.canControlPlaybackRate = function () {
    if (x && T && M < 58) return !1;
    try {
        var t = Ji.TEST_VID.playbackRate;
        return Ji.TEST_VID.playbackRate = t / 2 + .1, t !== Ji.TEST_VID.playbackRate
    } catch (t) {
        return !1
    }
}, Ji.canOverrideAttributes = function () {
    if (O) return !1;
    try {
        var t = function () {
        };
        Object.defineProperty(o.createElement("video"), "src", {
            get: t,
            set: t
        }), Object.defineProperty(o.createElement("audio"), "src", {
            get: t,
            set: t
        }), Object.defineProperty(o.createElement("video"), "innerHTML", {
            get: t,
            set: t
        }), Object.defineProperty(o.createElement("audio"), "innerHTML", {get: t, set: t})
    } catch (t) {
        return !1
    }
    return !0
}, Ji.supportsNativeTextTracks = function () {
    return E || y && T
}, Ji.supportsNativeVideoTracks = function () {
    return !(!Ji.TEST_VID || !Ji.TEST_VID.videoTracks)
}, Ji.supportsNativeAudioTracks = function () {
    return !(!Ji.TEST_VID || !Ji.TEST_VID.audioTracks)
}, Ji.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Ji.prototype.featuresVolumeControl = Ji.canControlVolume(), Ji.prototype.featuresMuteControl = Ji.canMuteVolume(), Ji.prototype.featuresPlaybackRate = Ji.canControlPlaybackRate(), Ji.prototype.featuresSourceset = Ji.canOverrideAttributes(), Ji.prototype.movingMediaElementInDOM = !y, Ji.prototype.featuresFullscreenResize = !0, Ji.prototype.featuresProgressEvents = !0, Ji.prototype.featuresTimeupdateEvents = !0, Ji.prototype.featuresNativeTextTracks = Ji.supportsNativeTextTracks(), Ji.prototype.featuresNativeVideoTracks = Ji.supportsNativeVideoTracks(), Ji.prototype.featuresNativeAudioTracks = Ji.supportsNativeAudioTracks();
var er = Ji.TEST_VID && Ji.TEST_VID.constructor.prototype.canPlayType, nr = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
    ir = /^video\/mp4/i;
Ji.patchCanPlayType = function () {
    _ >= 4 && !S && !T ? Ji.TEST_VID.constructor.prototype.canPlayType = function (t) {
        return t && nr.test(t) ? "maybe" : er.call(this, t)
    } : w && (Ji.TEST_VID.constructor.prototype.canPlayType = function (t) {
        return t && ir.test(t) ? "maybe" : er.call(this, t)
    })
}, Ji.unpatchCanPlayType = function () {
    var t = Ji.TEST_VID.constructor.prototype.canPlayType;
    return Ji.TEST_VID.constructor.prototype.canPlayType = er, t
}, Ji.patchCanPlayType(), Ji.disposeMediaElement = function (t) {
    if (t) {
        for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
        t.removeAttribute("src"), "function" == typeof t.load && function () {
            try {
                t.load()
            } catch (t) {
            }
        }()
    }
}, Ji.resetMediaElement = function (t) {
    if (t) {
        for (var e = t.querySelectorAll("source"), n = e.length; n--;) t.removeChild(e[n]);
        t.removeAttribute("src"), "function" == typeof t.load && function () {
            try {
                t.load()
            } catch (t) {
            }
        }()
    }
}, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach((function (t) {
    Ji.prototype[t] = function () {
        return this.el_[t] || this.el_.hasAttribute(t)
    }
})), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach((function (t) {
    Ji.prototype["set" + he(t)] = function (e) {
        this.el_[t] = e, e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
    }
})), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach((function (t) {
    Ji.prototype[t] = function () {
        return this.el_[t]
    }
})), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach((function (t) {
    Ji.prototype["set" + he(t)] = function (e) {
        this.el_[t] = e
    }
})), ["pause", "load", "play"].forEach((function (t) {
    Ji.prototype[t] = function () {
        return this.el_[t]()
    }
})), ln.withSourceHandlers(Ji), Ji.nativeSourceHandler = {}, Ji.nativeSourceHandler.canPlayType = function (t) {
    try {
        return Ji.TEST_VID.canPlayType(t)
    } catch (t) {
        return ""
    }
}, Ji.nativeSourceHandler.canHandleSource = function (t, e) {
    if (t.type) return Ji.nativeSourceHandler.canPlayType(t.type);
    if (t.src) {
        var n = Ze(t.src);
        return Ji.nativeSourceHandler.canPlayType("video/" + n)
    }
    return ""
}, Ji.nativeSourceHandler.handleSource = function (t, e, n) {
    e.setSrc(t.src)
}, Ji.nativeSourceHandler.dispose = function () {
}, Ji.registerSourceHandler(Ji.nativeSourceHandler), ln.registerTech("Html5", Ji);
var rr = F(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
    ar = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
    or = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
    sr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], lr = {};
sr.forEach((function (t) {
    var e = "x" === t.charAt(0) ? "x-" + t.substring(1) : t;
    lr[t] = "vjs-layout-" + e
}));
var ur = {tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0}, cr = function (t) {
    function e(n, i, r) {
        if (N(this, e), n.id = n.id || i.id || "vjs_video_" + Dt(), (i = W(e.getTagSettings(n), i)).initChildren = !1, i.createEl = !1, i.evented = !1, i.reportTouchActivity = !1, !i.language) if ("function" == typeof n.closest) {
            var a = n.closest("[lang]");
            a && a.getAttribute && (i.language = a.getAttribute("lang"))
        } else for (var o = n; o && 1 === o.nodeType;) {
            if (dt(o).hasOwnProperty("lang")) {
                i.language = o.getAttribute("lang");
                break
            }
            o = o.parentNode
        }
        var s = j(this, t.call(this, null, i, r));
        if (s.log = X(s.id_), s.isPosterFromTech_ = !1, s.queuedCallbacks_ = [], s.isReady_ = !1, s.hasStarted_ = !1, s.userActive_ = !1, !s.options_ || !s.options_.techOrder || !s.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
        if (s.tag = n, s.tagAttributes = n && dt(n), s.language(s.options_.language), i.languages) {
            var l = {};
            Object.getOwnPropertyNames(i.languages).forEach((function (t) {
                l[t.toLowerCase()] = i.languages[t]
            })), s.languages_ = l
        } else s.languages_ = e.prototype.options_.languages;
        s.cache_ = {}, s.poster_ = i.poster || "", s.controls_ = !!i.controls, s.cache_.lastVolume = 1, n.controls = !1, n.removeAttribute("controls"), n.hasAttribute("autoplay") ? s.options_.autoplay = !0 : s.autoplay(s.options_.autoplay), s.scrubbing_ = !1, s.el_ = s.createEl(), s.cache_.lastPlaybackRate = s.defaultPlaybackRate(), ue(s, {eventBusKey: "el_"});
        var u = fe(s.options_);
        if (i.plugins) {
            var c = i.plugins;
            Object.keys(c).forEach((function (t) {
                if ("function" != typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
                this[t](c[t])
            }), s)
        }
        s.options_.playerOptions = u, s.middleware_ = [], s.initChildren(), s.isAudio("audio" === n.nodeName.toLowerCase()), s.controls() ? s.addClass("vjs-controls-enabled") : s.addClass("vjs-controls-disabled"), s.el_.setAttribute("role", "region"), s.isAudio() ? s.el_.setAttribute("aria-label", s.localize("Audio Player")) : s.el_.setAttribute("aria-label", s.localize("Video Player")), s.isAudio() && s.addClass("vjs-audio"), s.flexNotSupported_() && s.addClass("vjs-no-flex"), y || s.addClass("vjs-workinghover"), e.players[s.id_] = s;
        var h = d.split(".")[0];
        return s.addClass("vjs-v" + h), s.userActive(!0), s.reportUserActivity(), s.one("play", s.listenForUserActivity_), s.on("fullscreenchange", s.handleFullscreenChange_), s.on("stageclick", s.handleStageClick_), s.breakpoints(s.options_.breakpoints), s.responsive(s.options_.responsive), s.changingSrc_ = !1, s.playWaitingForReady_ = !1, s.playOnLoadstart_ = null, s
    }

    return B(e, t), e.prototype.dispose = function () {
        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), cn[this.id()] = null, t.prototype.dispose.call(this)
    }, e.prototype.createEl = function () {
        var e = this.tag, n = void 0,
            i = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"),
            r = "video-js" === this.tag.tagName.toLowerCase();
        i ? n = this.el_ = e.parentNode : r || (n = this.el_ = t.prototype.createEl.call(this, "div"));
        var s = dt(e);
        if (r) {
            for (n = this.el_ = e, e = this.tag = o.createElement("video"); n.children.length;) e.appendChild(n.firstChild);
            ot(n, "video-js") || st(n, "video-js"), n.appendChild(e), i = this.playerElIngest_ = n, ["autoplay", "controls", "crossOrigin", "defaultMuted", "defaultPlaybackRate", "loop", "muted", "playbackRate", "src", "volume"].forEach((function (t) {
                void 0 !== n[t] && (e[t] = n[t])
            }))
        }
        if (e.setAttribute("tabindex", "-1"), s.tabindex = "-1", A && (e.setAttribute("role", "application"), s.role = "application"), e.removeAttribute("width"), e.removeAttribute("height"), "width" in s && delete s.width, "height" in s && delete s.height, Object.getOwnPropertyNames(s).forEach((function (t) {
            "class" === t ? (n.className += " " + s[t], r && (e.className += " " + s[t])) : (n.setAttribute(t, s[t]), r && e.setAttribute(t, s[t]))
        })), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = n.player = this, this.addClass("vjs-paused"), !0 !== a.VIDEOJS_NO_DYNAMIC_STYLE) {
            this.styleEl_ = Kt("vjs-styles-dimensions");
            var l = Tt(".vjs-styles-defaults"), u = Tt("head");
            u.insertBefore(this.styleEl_, l ? l.nextSibling : u.firstChild)
        }
        this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
        for (var c = e.getElementsByTagName("a"), d = 0; d < c.length; d++) {
            var h = c.item(d);
            st(h, "vjs-hidden"), h.setAttribute("hidden", "hidden")
        }
        return e.initNetworkState_ = e.networkState, e.parentNode && !i && e.parentNode.insertBefore(n, e), at(e, n), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = n, n
    }, e.prototype.width = function (t) {
        return this.dimension("width", t)
    }, e.prototype.height = function (t) {
        return this.dimension("height", t)
    }, e.prototype.dimension = function (t, e) {
        var n = t + "_";
        if (void 0 === e) return this[n] || 0;
        if ("" === e) return this[n] = void 0, void this.updateStyleEl_();
        var i = parseFloat(e);
        isNaN(i) ? G.error('Improper value "' + e + '" supplied for for ' + t) : (this[n] = i, this.updateStyleEl_())
    }, e.prototype.fluid = function (t) {
        if (void 0 === t) return !!this.fluid_;
        this.fluid_ = !!t, t ? (this.addClass("vjs-fluid"), this.fill(!1)) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
    }, e.prototype.fill = function (t) {
        if (void 0 === t) return !!this.fill_;
        this.fill_ = !!t, t ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
    }, e.prototype.aspectRatio = function (t) {
        if (void 0 === t) return this.aspectRatio_;
        if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
        this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
    }, e.prototype.updateStyleEl_ = function () {
        if (!0 !== a.VIDEOJS_NO_DYNAMIC_STYLE) {
            var t = void 0, e = void 0, n = void 0,
                i = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                r = i[1] / i[0];
            t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : t * r, n = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(n), $t(this.styleEl_, "\n      ." + n + " {\n        width: " + t + "px;\n        height: " + e + "px;\n      }\n\n      ." + n + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
        } else {
            var o = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                s = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                l = this.tech_ && this.tech_.el();
            l && (o >= 0 && (l.width = o), s >= 0 && (l.height = s))
        }
    }, e.prototype.loadTech_ = function (t, e) {
        var n = this;
        this.tech_ && this.unloadTech_();
        var i = he(t), r = t.charAt(0).toLowerCase() + t.slice(1);
        "Html5" !== i && this.tag && (ln.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = i, this.isReady_ = !1;
        var a = {
            source: e,
            autoplay: "string" != typeof this.autoplay() && this.autoplay(),
            nativeControlsForTouch: this.options_.nativeControlsForTouch,
            playerId: this.id(),
            techId: this.id() + "_" + r + "_api",
            playsinline: this.options_.playsinline,
            preload: this.options_.preload,
            loop: this.options_.loop,
            muted: this.options_.muted,
            poster: this.poster(),
            language: this.language(),
            playerElIngest: this.playerElIngest_ || !1,
            "vtt.js": this.options_["vtt.js"],
            canOverridePoster: !!this.options_.techCanOverridePoster,
            enableSourceset: this.options_.enableSourceset
        };
        sn.names.forEach((function (t) {
            var e = sn[t];
            a[e.getterName] = n[e.privateName]
        })), W(a, this.options_[i]), W(a, this.options_[r]), W(a, this.options_[t.toLowerCase()]), this.tag && (a.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (a.startTime = this.cache_.currentTime);
        var o = ln.getTech(t);
        if (!o) throw new Error("No Tech named '" + i + "' exists! '" + i + "' should be registered using videojs.registerTech()'");
        this.tech_ = new o(a), this.tech_.ready(Qt(this, this.handleTechReady_), !0), Ee(this.textTracksJson_ || [], this.tech_), ar.forEach((function (t) {
            n.on(n.tech_, t, n["handleTech" + he(t) + "_"])
        })), Object.keys(or).forEach((function (t) {
            n.on(n.tech_, t, (function (e) {
                0 === n.tech_.playbackRate() && n.tech_.seeking() ? n.queuedCallbacks_.push({
                    callback: n["handleTech" + or[t] + "_"].bind(n),
                    event: e
                }) : n["handleTech" + or[t] + "_"](e)
            }))
        })), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === i && this.tag || at(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
    }, e.prototype.unloadTech_ = function () {
        var t = this;
        sn.names.forEach((function (e) {
            var n = sn[e];
            t[n.privateName] = t[n.getterName]()
        })), this.textTracksJson_ = De(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
    }, e.prototype.tech = function (t) {
        return void 0 === t && G.warn(s(rr)), this.tech_
    }, e.prototype.addTechControlsListeners_ = function () {
        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
    }, e.prototype.removeTechControlsListeners_ = function () {
        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
    }, e.prototype.handleTechReady_ = function () {
        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
            delete this.tag.poster
        } catch (t) {
            G("deleting tag.poster throws in some browsers", t)
        }
    }, e.prototype.handleTechLoadStart_ = function () {
        this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
    }, e.prototype.manualAutoplay_ = function (t) {
        var e = this;
        if (this.tech_ && "string" == typeof t) {
            var n = function () {
                var t = e.muted();
                e.muted(!0);
                var n = e.play();
                if (n && n.then && n.catch) return n.catch((function (n) {
                    e.muted(t)
                }))
            }, i = void 0;
            if ("any" === t ? (i = this.play()) && i.then && i.catch && i.catch((function () {
                return n()
            })) : i = "muted" === t ? n() : this.play(), i && i.then && i.catch) return i.then((function () {
                e.trigger({type: "autoplay-success", autoplay: t})
            })).catch((function (n) {
                e.trigger({type: "autoplay-failure", autoplay: t})
            }))
        }
    }, e.prototype.updateSourceCaches_ = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = t, n = "";
        "string" != typeof e && (e = t.src, n = t.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], e && !n && (n = Cn(this, e)), this.cache_.source = fe({}, t, {
            src: e,
            type: n
        });
        for (var i = this.cache_.sources.filter((function (t) {
            return t.src && t.src === e
        })), r = [], a = this.$$("source"), o = [], s = 0; s < a.length; s++) {
            var l = dt(a[s]);
            r.push(l), l.src && l.src === e && o.push(l.src)
        }
        o.length && !i.length ? this.cache_.sources = r : i.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = e
    }, e.prototype.handleTechSourceset_ = function (t) {
        var e = this;
        if (!this.changingSrc_) {
            var n = function (t) {
                return e.updateSourceCaches_(t)
            }, i = this.currentSource().src, r = t.src;
            if (i && !/^blob:/.test(i) && /^blob:/.test(r) && (!this.lastSource_ || this.lastSource_.tech !== r && this.lastSource_.player !== i) && (n = function () {
            }), n(r), !t.src) {
                this.tech_.one(["sourceset", "loadstart"], (function t(n) {
                    if ("sourceset" !== n.type) {
                        var i = e.techGet("currentSrc");
                        e.lastSource_.tech = i, e.updateSourceCaches_(i)
                    }
                    e.tech_.off(["sourceset", "loadstart"], t)
                }))
            }
        }
        this.lastSource_ = {player: this.currentSource().src, tech: t.src}, this.trigger({
            src: t.src,
            type: "sourceset"
        })
    }, e.prototype.hasStarted = function (t) {
        if (void 0 === t) return this.hasStarted_;
        t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
    }, e.prototype.handleTechPlay_ = function () {
        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
    }, e.prototype.handleTechRateChange_ = function () {
        this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach((function (t) {
            return t.callback(t.event)
        })), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
    }, e.prototype.handleTechWaiting_ = function () {
        var t = this;
        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", (function () {
            return t.removeClass("vjs-waiting")
        }))
    }, e.prototype.handleTechCanPlay_ = function () {
        this.removeClass("vjs-waiting"), this.trigger("canplay")
    }, e.prototype.handleTechCanPlayThrough_ = function () {
        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
    }, e.prototype.handleTechPlaying_ = function () {
        this.removeClass("vjs-waiting"), this.trigger("playing")
    }, e.prototype.handleTechSeeking_ = function () {
        this.addClass("vjs-seeking"), this.trigger("seeking")
    }, e.prototype.handleTechSeeked_ = function () {
        this.removeClass("vjs-seeking"), this.trigger("seeked")
    }, e.prototype.handleTechFirstPlay_ = function () {
        this.options_.starttime && (G.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
    }, e.prototype.handleTechPause_ = function () {
        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
    }, e.prototype.handleTechEnded_ = function () {
        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
    }, e.prototype.handleTechDurationChange_ = function () {
        this.duration(this.techGet_("duration"))
    }, e.prototype.handleTechClick_ = function (t) {
        kt(t) && this.controls_ && (this.paused() ? Oe(this.play()) : this.pause())
    }, e.prototype.handleTechTap_ = function () {
        this.userActive(!this.userActive())
    }, e.prototype.handleTechTouchStart_ = function () {
        this.userWasActive = this.userActive()
    }, e.prototype.handleTechTouchMove_ = function () {
        this.userWasActive && this.reportUserActivity()
    }, e.prototype.handleTechTouchEnd_ = function (t) {
        t.preventDefault()
    }, e.prototype.handleFullscreenChange_ = function () {
        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
    }, e.prototype.handleStageClick_ = function () {
        this.reportUserActivity()
    }, e.prototype.handleTechFullscreenChange_ = function (t, e) {
        e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
    }, e.prototype.handleTechError_ = function () {
        var t = this.tech_.error();
        this.error(t)
    }, e.prototype.handleTechTextData_ = function () {
        var t = null;
        arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
    }, e.prototype.getCache = function () {
        return this.cache_
    }, e.prototype.techCall_ = function (t, e) {
        this.ready((function () {
            if (t in gn) return function (t, e, n, i) {
                return e[n](t.reduce(mn(n), i))
            }(this.middleware_, this.tech_, t, e);
            if (t in vn) return fn(this.middleware_, this.tech_, t, e);
            try {
                this.tech_ && this.tech_[t](e)
            } catch (t) {
                throw G(t), t
            }
        }), !0)
    }, e.prototype.techGet_ = function (t) {
        if (this.tech_ && this.tech_.isReady_) {
            if (t in pn) return function (t, e, n) {
                return t.reduceRight(mn(n), e[n]())
            }(this.middleware_, this.tech_, t);
            if (t in vn) return fn(this.middleware_, this.tech_, t);
            try {
                return this.tech_[t]()
            } catch (e) {
                if (void 0 === this.tech_[t]) throw G("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                if ("TypeError" === e.name) throw G("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                throw G(e), e
            }
        }
    }, e.prototype.play = function () {
        var t = this, e = this.options_.Promise || a.Promise;
        return e ? new e((function (e) {
            t.play_(e)
        })) : this.play_()
    }, e.prototype.play_ = function () {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe;
        if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
            if (!this.changingSrc_ && (this.src() || this.currentSrc())) return void e(this.techGet_("play"));
            this.playOnLoadstart_ = function () {
                t.playOnLoadstart_ = null, e(t.play())
            }, this.one("loadstart", this.playOnLoadstart_)
        } else {
            if (this.playWaitingForReady_) return;
            this.playWaitingForReady_ = !0, this.ready((function () {
                t.playWaitingForReady_ = !1, e(t.play())
            }))
        }
    }, e.prototype.pause = function () {
        this.techCall_("pause")
    }, e.prototype.paused = function () {
        return !1 !== this.techGet_("paused")
    }, e.prototype.played = function () {
        return this.techGet_("played") || me(0, 0)
    }, e.prototype.scrubbing = function (t) {
        if (void 0 === t) return this.scrubbing_;
        this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
    }, e.prototype.currentTime = function (t) {
        return void 0 !== t ? (t < 0 && (t = 0), void this.techCall_("setCurrentTime", t)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
    }, e.prototype.duration = function (t) {
        if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
        (t = parseFloat(t)) < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
    }, e.prototype.remainingTime = function () {
        return this.duration() - this.currentTime()
    }, e.prototype.remainingTimeDisplay = function () {
        return Math.floor(this.duration()) - Math.floor(this.currentTime())
    }, e.prototype.buffered = function () {
        var t = this.techGet_("buffered");
        return t && t.length || (t = me(0, 0)), t
    }, e.prototype.bufferedPercent = function () {
        return ye(this.buffered(), this.duration())
    }, e.prototype.bufferedEnd = function () {
        var t = this.buffered(), e = this.duration(), n = t.end(t.length - 1);
        return n > e && (n = e), n
    }, e.prototype.volume = function (t) {
        var e = void 0;
        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void (e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
    }, e.prototype.muted = function (t) {
        if (void 0 === t) return this.techGet_("muted") || !1;
        this.techCall_("setMuted", t)
    }, e.prototype.defaultMuted = function (t) {
        return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
    }, e.prototype.lastVolume_ = function (t) {
        if (void 0 === t || 0 === t) return this.cache_.lastVolume;
        this.cache_.lastVolume = t
    }, e.prototype.supportsFullScreen = function () {
        return this.techGet_("supportsFullScreen") || !1
    }, e.prototype.isFullscreen = function (t) {
        if (void 0 === t) return !!this.isFullscreen_;
        this.isFullscreen_ = !!t
    }, e.prototype.requestFullscreen = function () {
        var t = be;
        this.isFullscreen(!0), t.requestFullscreen ? (Vt(o, t.fullscreenchange, Qt(this, (function e(n) {
            this.isFullscreen(o[t.fullscreenElement]), !1 === this.isFullscreen() && Ht(o, t.fullscreenchange, e), this.trigger("fullscreenchange")
        }))), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
    }, e.prototype.exitFullscreen = function () {
        var t = be;
        this.isFullscreen(!1), t.requestFullscreen ? o[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
    }, e.prototype.enterFullWindow = function () {
        this.isFullWindow = !0, this.docOrigOverflow = o.documentElement.style.overflow, Vt(o, "keydown", Qt(this, this.fullWindowOnEscKey)), o.documentElement.style.overflow = "hidden", st(o.body, "vjs-full-window"), this.trigger("enterFullWindow")
    }, e.prototype.fullWindowOnEscKey = function (t) {
        27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
    }, e.prototype.exitFullWindow = function () {
        this.isFullWindow = !1, Ht(o, "keydown", this.fullWindowOnEscKey), o.documentElement.style.overflow = this.docOrigOverflow, lt(o.body, "vjs-full-window"), this.trigger("exitFullWindow")
    }, e.prototype.canPlayType = function (t) {
        for (var e = void 0, n = 0, i = this.options_.techOrder; n < i.length; n++) {
            var r = i[n], a = ln.getTech(r);
            if (a || (a = pe.getComponent(r)), a) {
                if (a.isSupported() && (e = a.canPlayType(t))) return e
            } else G.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
        }
        return ""
    }, e.prototype.selectSource = function (t) {
        var e, n = this, i = this.options_.techOrder.map((function (t) {
            return [t, ln.getTech(t)]
        })).filter((function (t) {
            var e = t[0], n = t[1];
            return n ? n.isSupported() : (G.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
        })), r = function (t, e, n) {
            var i = void 0;
            return t.some((function (t) {
                return e.some((function (e) {
                    if (i = n(t, e)) return !0
                }))
            })), i
        }, a = function (t, e) {
            var i = t[0];
            if (t[1].canPlaySource(e, n.options_[i.toLowerCase()])) return {source: e, tech: i}
        };
        return (this.options_.sourceOrder ? r(t, i, (e = a, function (t, n) {
            return e(n, t)
        })) : r(i, t, a)) || !1
    }, e.prototype.src = function (t) {
        var e = this;
        if (void 0 === t) return this.cache_.src || "";
        var n = Sn(t);
        n.length ? (this.changingSrc_ = !0, this.cache_.sources = n, this.updateSourceCaches_(n[0]), hn(this, n[0], (function (t, i) {
            var r, a;
            if (e.middleware_ = i, e.cache_.sources = n, e.updateSourceCaches_(t), e.src_(t)) return n.length > 1 ? e.src(n.slice(1)) : (e.changingSrc_ = !1, e.setTimeout((function () {
                this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
            }), 0), void e.triggerReady());
            r = i, a = e.tech_, r.forEach((function (t) {
                return t.setTech && t.setTech(a)
            }))
        }))) : this.setTimeout((function () {
            this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
        }), 0)
    }, e.prototype.src_ = function (t) {
        var e, n, i = this, r = this.selectSource([t]);
        return !r || (e = r.tech, n = this.techName_, he(e) !== he(n) ? (this.changingSrc_ = !0, this.loadTech_(r.tech, r.source), this.tech_.ready((function () {
            i.changingSrc_ = !1
        })), !1) : (this.ready((function () {
            this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), this.changingSrc_ = !1
        }), !0), !1))
    }, e.prototype.load = function () {
        this.techCall_("load")
    }, e.prototype.reset = function () {
        this.tech_ && this.tech_.clearTracks("text"), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
    }, e.prototype.currentSources = function () {
        var t = this.currentSource(), e = [];
        return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
    }, e.prototype.currentSource = function () {
        return this.cache_.source || {}
    }, e.prototype.currentSrc = function () {
        return this.currentSource() && this.currentSource().src || ""
    }, e.prototype.currentType = function () {
        return this.currentSource() && this.currentSource().type || ""
    }, e.prototype.preload = function (t) {
        return void 0 !== t ? (this.techCall_("setPreload", t), void (this.options_.preload = t)) : this.techGet_("preload")
    }, e.prototype.autoplay = function (t) {
        if (void 0 === t) return this.options_.autoplay || !1;
        var e = void 0;
        "string" == typeof t && /(any|play|muted)/.test(t) ? (this.options_.autoplay = t, this.manualAutoplay_(t), e = !1) : this.options_.autoplay = !!t, e = e || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", e)
    }, e.prototype.playsinline = function (t) {
        return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
    }, e.prototype.loop = function (t) {
        return void 0 !== t ? (this.techCall_("setLoop", t), void (this.options_.loop = t)) : this.techGet_("loop")
    }, e.prototype.poster = function (t) {
        if (void 0 === t) return this.poster_;
        t || (t = ""), t !== this.poster_ && (this.poster_ = t, this.techCall_("setPoster", t), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
    }, e.prototype.handleTechPosterChange_ = function () {
        if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
            var t = this.tech_.poster() || "";
            t !== this.poster_ && (this.poster_ = t, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
        }
    }, e.prototype.controls = function (t) {
        if (void 0 === t) return !!this.controls_;
        t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
    }, e.prototype.usingNativeControls = function (t) {
        if (void 0 === t) return !!this.usingNativeControls_;
        t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
    }, e.prototype.error = function (t) {
        return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new ke(t), this.addClass("vjs-error"), G.error("(CODE:" + this.error_.code + " " + ke.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
    }, e.prototype.reportUserActivity = function (t) {
        this.userActivity_ = !0
    }, e.prototype.userActive = function (t) {
        if (void 0 === t) return this.userActive_;
        if ((t = !!t) !== this.userActive_) {
            if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
            this.tech_ && this.tech_.one("mousemove", (function (t) {
                t.stopPropagation(), t.preventDefault()
            })), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
        }
    }, e.prototype.listenForUserActivity_ = function () {
        var t = void 0, e = void 0, n = void 0, i = Qt(this, this.reportUserActivity);
        this.on("mousedown", (function () {
            i(), this.clearInterval(t), t = this.setInterval(i, 250)
        })), this.on("mousemove", (function (t) {
            t.screenX === e && t.screenY === n || (e = t.screenX, n = t.screenY, i())
        })), this.on("mouseup", (function (e) {
            i(), this.clearInterval(t)
        })), this.on("keydown", i), this.on("keyup", i);
        var r = void 0;
        this.setInterval((function () {
            if (this.userActivity_) {
                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(r);
                var t = this.options_.inactivityTimeout;
                t <= 0 || (r = this.setTimeout((function () {
                    this.userActivity_ || this.userActive(!1)
                }), t))
            }
        }), 250)
    }, e.prototype.playbackRate = function (t) {
        if (void 0 === t) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
        this.techCall_("setPlaybackRate", t)
    }, e.prototype.defaultPlaybackRate = function (t) {
        return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
    }, e.prototype.isAudio = function (t) {
        if (void 0 === t) return !!this.isAudio_;
        this.isAudio_ = !!t
    }, e.prototype.addTextTrack = function (t, e, n) {
        if (this.tech_) return this.tech_.addTextTrack(t, e, n)
    }, e.prototype.addRemoteTextTrack = function (t, e) {
        if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
    }, e.prototype.removeRemoteTextTrack = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.track,
            n = void 0 === e ? arguments[0] : e;
        if (this.tech_) return this.tech_.removeRemoteTextTrack(n)
    }, e.prototype.getVideoPlaybackQuality = function () {
        return this.techGet_("getVideoPlaybackQuality")
    }, e.prototype.videoWidth = function () {
        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
    }, e.prototype.videoHeight = function () {
        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
    },e.prototype.language = function (t) {
        if (void 0 === t) return this.language_;
        this.language_ = String(t).toLowerCase()
    },e.prototype.languages = function () {
        return fe(e.prototype.options_.languages, this.languages_)
    },e.prototype.toJSON = function () {
        var t = fe(this.options_), e = t.tracks;
        t.tracks = [];
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i = fe(i)).player = void 0, t.tracks[n] = i
        }
        return t
    },e.prototype.createModal = function (t, e) {
        var n = this;
        (e = e || {}).content = t || "";
        var i = new Pe(this, e);
        return this.addChild(i), i.on("dispose", (function () {
            n.removeChild(i)
        })), i.open(), i
    },e.prototype.updateCurrentBreakpoint_ = function () {
        if (this.responsive()) for (var t = this.currentBreakpoint(), e = this.currentWidth(), n = 0; n < sr.length; n++) {
            var i = sr[n];
            if (e <= this.breakpoints_[i]) {
                if (t === i) return;
                t && this.removeClass(lr[t]), this.addClass(lr[i]), this.breakpoint_ = i;
                break
            }
        }
    },e.prototype.removeCurrentBreakpoint_ = function () {
        var t = this.currentBreakpointClass();
        this.breakpoint_ = "", t && this.removeClass(t)
    },e.prototype.breakpoints = function (t) {
        return void 0 === t || (this.breakpoint_ = "", this.breakpoints_ = W({}, ur, t), this.updateCurrentBreakpoint_()), W(this.breakpoints_)
    },e.prototype.responsive = function (t) {
        return void 0 === t ? this.responsive_ : (t = Boolean(t)) !== this.responsive_ ? (this.responsive_ = t, t ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), t) : void 0
    },e.prototype.currentBreakpoint = function () {
        return this.breakpoint_
    },e.prototype.currentBreakpointClass = function () {
        return lr[this.breakpoint_] || ""
    },e.getTagSettings = function (t) {
        var e = {sources: [], tracks: []}, n = dt(t), i = n["data-setup"];
        if (ot(t, "vjs-fill") && (n.fill = !0), ot(t, "vjs-fluid") && (n.fluid = !0), null !== i) {
            var r = l(i || "{}"), a = r[0], o = r[1];
            a && G.error(a), W(n, o)
        }
        if (W(e, n), t.hasChildNodes()) for (var s = t.childNodes, u = 0, c = s.length; u < c; u++) {
            var d = s[u], h = d.nodeName.toLowerCase();
            "source" === h ? e.sources.push(dt(d)) : "track" === h && e.tracks.push(dt(d))
        }
        return e
    },e.prototype.flexNotSupported_ = function () {
        var t = o.createElement("i");
        return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
    },e
}(pe);
sn.names.forEach((function (t) {
    var e = sn[t];
    cr.prototype[e.getterName] = function () {
        return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
    }
})), cr.players = {};
var dr = a.navigator;
cr.prototype.options_ = {
    techOrder: ln.defaultTechOrder_,
    html5: {},
    flash: {},
    inactivityTimeout: 2e3,
    playbackRates: [],
    children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
    language: dr && (dr.languages && dr.languages[0] || dr.userLanguage || dr.language) || "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this media.",
    breakpoints: {},
    responsive: !1
}, O || cr.prototype.options_.children.push("resizeManager"), ["ended", "seeking", "seekable", "networkState", "readyState"].forEach((function (t) {
    cr.prototype[t] = function () {
        return this.techGet_(t)
    }
})), ar.forEach((function (t) {
    cr.prototype["handleTech" + he(t) + "_"] = function () {
        return this.trigger(t)
    }
})), pe.registerComponent("Player", cr);
var hr = "plugin", fr = {}, pr = function (t) {
    return fr.hasOwnProperty(t)
}, gr = function (t) {
    return pr(t) ? fr[t] : void 0
}, vr = function (t, e) {
    t.activePlugins_ = t.activePlugins_ || {}, t.activePlugins_[e] = !0
}, mr = function (t, e, n) {
    var i = (n ? "before" : "") + "pluginsetup";
    t.trigger(i, e), t.trigger(i + ":" + e.name, e)
}, yr = function (t, e) {
    return e.prototype.name = t, function () {
        mr(this, {name: t, plugin: e, instance: null}, !0);
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        var a = new (Function.prototype.bind.apply(e, [null].concat([this].concat(i))));
        return this[t] = function () {
            return a
        }, mr(this, a.getEventHash()), a
    }
}, br = function () {
    function t(e) {
        if (N(this, t), this.constructor === t) throw new Error("Plugin must be sub-classed; not directly instantiated.");
        this.player = e, ue(this), delete this.trigger, de(this, this.constructor.defaultState), vr(e, this.name), this.dispose = Qt(this, this.dispose), e.on("dispose", this.dispose)
    }

    return t.prototype.version = function () {
        return this.constructor.VERSION
    }, t.prototype.getEventHash = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
    }, t.prototype.trigger = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Wt(this.eventBusEl_, t, this.getEventHash(e))
    }, t.prototype.handleStateChanged = function (t) {
    }, t.prototype.dispose = function () {
        var t = this.name, e = this.player;
        this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e.activePlugins_[t] = !1, this.player = this.state = null, e[t] = yr(t, fr[t])
    }, t.isBasic = function (e) {
        var n = "string" == typeof e ? gr(e) : e;
        return "function" == typeof n && !t.prototype.isPrototypeOf(n.prototype)
    }, t.registerPlugin = function (e, n) {
        if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : R(e)) + ".");
        if (pr(e)) G.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!'); else if (cr.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
        if ("function" != typeof n) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === n ? "undefined" : R(n)) + ".");
        return fr[e] = n, e !== hr && (t.isBasic(n) ? cr.prototype[e] = function (t, e) {
            var n = function () {
                mr(this, {name: t, plugin: e, instance: null}, !0);
                var n = e.apply(this, arguments);
                return vr(this, t), mr(this, {name: t, plugin: e, instance: n}), n
            };
            return Object.keys(e).forEach((function (t) {
                n[t] = e[t]
            })), n
        }(e, n) : cr.prototype[e] = yr(e, n)), n
    }, t.deregisterPlugin = function (t) {
        if (t === hr) throw new Error("Cannot de-register base plugin.");
        pr(t) && (delete fr[t], delete cr.prototype[t])
    }, t.getPlugins = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(fr), e = void 0;
        return t.forEach((function (t) {
            var n = gr(t);
            n && ((e = e || {})[t] = n)
        })), e
    }, t.getPluginVersion = function (t) {
        var e = gr(t);
        return e && e.VERSION || ""
    }, t
}();
br.getPlugin = gr, br.BASE_PLUGIN_NAME = hr, br.registerPlugin(hr, br), cr.prototype.usingPlugin = function (t) {
    return !!this.activePlugins_ && !0 === this.activePlugins_[t]
}, cr.prototype.hasPlugin = function (t) {
    return !!pr(t)
};
var xr = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : R(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (t.super_ = e)
};
"undefined" == typeof HTMLVideoElement && J() && (o.createElement("video"), o.createElement("audio"), o.createElement("track"), o.createElement("video-js"));
var _r = function (t) {
    return 0 === t.indexOf("#") ? t.slice(1) : t
};

function wr(t, e, n) {
    var i = wr.getPlayer(t);
    if (i) return e && G.warn('Player "' + t + '" is already initialised. Options will not be applied.'), n && i.ready(n), i;
    var r = "string" == typeof t ? Tt("#" + _r(t)) : t;
    if (!tt(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
    o.body.contains(r) || G.warn("The element supplied is not included in the DOM"), e = e || {}, wr.hooks("beforesetup").forEach((function (t) {
        var n = t(r, fe(e));
        q(n) && !Array.isArray(n) ? e = fe(e, n) : G.error("please return an object in beforesetup hooks")
    }));
    var a = pe.getComponent("Player");
    return i = new a(r, e, n), wr.hooks("setup").forEach((function (t) {
        return t(i)
    })), i
}

if (wr.hooks_ = {}, wr.hooks = function (t, e) {
    return wr.hooks_[t] = wr.hooks_[t] || [], e && (wr.hooks_[t] = wr.hooks_[t].concat(e)), wr.hooks_[t]
}, wr.hook = function (t, e) {
    wr.hooks(t, e)
}, wr.hookOnce = function (t, e) {
    wr.hooks(t, [].concat(e).map((function (e) {
        return function n() {
            return wr.removeHook(t, n), e.apply(void 0, arguments)
        }
    })))
}, wr.removeHook = function (t, e) {
    var n = wr.hooks(t).indexOf(e);
    return !(n <= -1) && (wr.hooks_[t] = wr.hooks_[t].slice(), wr.hooks_[t].splice(n, 1), !0)
}, !0 !== a.VIDEOJS_NO_DYNAMIC_STYLE && J()) {
    var Cr = Tt(".vjs-styles-defaults");
    if (!Cr) {
        Cr = Kt("vjs-styles-defaults");
        var Sr = Tt("head");
        Sr && Sr.insertBefore(Cr, Sr.firstChild), $t(Cr, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
    }
}
Zt(1, wr), wr.VERSION = d, wr.options = cr.prototype.options_, wr.getPlayers = function () {
    return cr.players
}, wr.getPlayer = function (t) {
    var e = cr.players, n = void 0;
    if ("string" == typeof t) {
        var i = _r(t), r = e[i];
        if (r) return r;
        n = Tt("#" + i)
    } else n = t;
    if (tt(n)) {
        var a = n, o = a.player, s = a.playerId;
        if (o || e[s]) return o || e[s]
    }
}, wr.getAllPlayers = function () {
    return Object.keys(cr.players).map((function (t) {
        return cr.players[t]
    })).filter(Boolean)
}, wr.players = cr.players, wr.getComponent = pe.getComponent, wr.registerComponent = function (t, e) {
    ln.isTech(e) && G.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), pe.registerComponent.call(pe, t, e)
}, wr.getTech = ln.getTech, wr.registerTech = ln.registerTech, wr.use = function (t, e) {
    un[t] = un[t] || [], un[t].push(e)
}, !O && Object.defineProperty ? (Object.defineProperty(wr, "middleware", {
    value: {},
    writeable: !1,
    enumerable: !0
}), Object.defineProperty(wr.middleware, "TERMINATOR", {
    value: dn,
    writeable: !1,
    enumerable: !0
})) : wr.middleware = {TERMINATOR: dn}, wr.browser = L, wr.TOUCH_ENABLED = P, wr.extend = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function () {
        t.apply(this, arguments)
    }, i = {};
    for (var r in "object" === (void 0 === e ? "undefined" : R(e)) ? (e.constructor !== Object.prototype.constructor && (n = e.constructor), i = e) : "function" == typeof e && (n = e), xr(n, t), i) i.hasOwnProperty(r) && (n.prototype[r] = i[r]);
    return n
}, wr.mergeOptions = fe, wr.bind = Qt, wr.registerPlugin = br.registerPlugin, wr.deregisterPlugin = br.deregisterPlugin, wr.plugin = function (t, e) {
    return G.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), br.registerPlugin(t, e)
}, wr.getPlugins = br.getPlugins, wr.getPlugin = br.getPlugin, wr.getPluginVersion = br.getPluginVersion, wr.addLanguage = function (t, e) {
    var n;
    return t = ("" + t).toLowerCase(), wr.options.languages = fe(wr.options.languages, ((n = {})[t] = e, n)), wr.options.languages[t]
}, wr.log = G, wr.createLogger = X, wr.createTimeRange = wr.createTimeRanges = me, wr.formatTime = zn, wr.setFormatTime = function (t) {
    Fn = t
}, wr.resetFormatTime = function () {
    Fn = jn
}, wr.parseUrl = Ge, wr.isCrossOrigin = Ke, wr.EventTarget = te, wr.on = Vt, wr.one = qt, wr.off = Ht, wr.trigger = Wt, wr.xhr = u, wr.TextTrack = tn, wr.AudioTrack = en, wr.VideoTrack = nn, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((function (t) {
    wr[t] = function () {
        return G.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), Ot[t].apply(null, arguments)
    }
})), wr.computedStyle = Z, wr.dom = Ot, wr.url = $e, t.exports = wr
},
PTNO:function (t, e, n) {
    t.exports = n.p + "static/1632916097728/img/finalbenefit-bg.34f8aff.png"
}
,
Plz4:function (t, e, n) {
    "use strict";
    var i = n("QvpK");
    n.n(i).a
}
,
PmCx:function (t, e, n) {
    "use strict";
    var i = n("ViYU");
    n.n(i).a
}
,
ProS:function (t, e, n) {
    n("Tghj").__DEV__;
    var i = n("aX58"), r = n("bYtY"), a = n("Qe9p"), o = n("ItGF"), s = n("BPZU"), l = n("H6uX"), u = n("fmMI"),
        c = n("hD7B"), d = n("IDmD"), h = n("ypgQ"), f = n("+wW9"), p = n("0V0F"), g = n("bLfw"), v = n("T4UG"),
        m = n("sS/r"), y = n("6Ic6"), b = n("IwbS"), x = n("4NO4"), _ = n("iLNv").throttle, w = n("/WM3"),
        C = n("uAnK"), S = n("mYwL"), k = n("af/B"), T = n("xTNl"), M = n("8hn6");
    n("A1Ka");
    var O = n("7DRL"), A = r.assert, D = r.each, E = r.isFunction, P = r.isObject, I = g.parseClassType, L = {
        PROCESSOR: {FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3},
        VISUAL: {
            LAYOUT: 1e3,
            PROGRESSIVE_LAYOUT: 1100,
            GLOBAL: 2e3,
            CHART: 3e3,
            POST_CHART_LAYOUT: 3500,
            COMPONENT: 4e3,
            BRUSH: 5e3
        }
    }, R = "__flagInMainProcess", N = /^[a-zA-Z0-9_]+$/;

    function B(t, e) {
        return function (n, i, r) {
            e || !this._disposed ? (n = n && n.toLowerCase(), l.prototype[t].call(this, n, i, r)) : this.id
        }
    }

    function j() {
        l.call(this)
    }

    function F(t, e, n) {
        n = n || {}, "string" == typeof e && (e = ut[e]), this.id, this.group, this._dom = t;
        var a = this._zr = i.init(t, {
            renderer: n.renderer || "canvas",
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height
        });
        this._throttledZrFlush = _(r.bind(a.flush, a), 17), (e = r.clone(e)) && f(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new d;
        var o, u, h = this._api = (u = (o = this)._coordSysMgr, r.extend(new c(o), {
            getCoordinateSystems: r.bind(u.getCoordinateSystems, u),
            getComponentByElement: function (t) {
                for (; t;) {
                    var e = t.__ecComponentInfo;
                    if (null != e) return o._model.getComponent(e.mainType, e.index);
                    t = t.parent
                }
            }
        }));

        function p(t, e) {
            return t.__prio - e.__prio
        }

        s(lt, p), s(at, p), this._scheduler = new k(this, h, at, lt), l.call(this, this._ecEventProcessor = new nt), this._messageCenter = new j, this._initEvents(), this.resize = r.bind(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this), function (t, e) {
            t.on("rendered", (function () {
                e.trigger("rendered"), !t.animation.isFinished() || e.__optionUpdated || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
            }))
        }(a, this), r.setAsPrimitive(this)
    }

    j.prototype.on = B("on", !0), j.prototype.off = B("off", !0), j.prototype.one = B("one", !0), r.mixin(j, l);
    var z = F.prototype;

    function V(t, e, n) {
        if (this._disposed) this.id; else {
            var i, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
            e = x.parseFinder(r, e);
            for (var o = 0; o < a.length; o++) {
                var s = a[o];
                if (s[t] && null != (i = s[t](r, e, n))) return i
            }
        }
    }

    z._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this.__optionUpdated) {
                var e = this.__optionUpdated.silent;
                this[R] = !0, W(this), H.update.call(this), this[R] = !1, this.__optionUpdated = !1, G.call(this, e), X.call(this, e)
            } else if (t.unfinished) {
                var n = 1, i = this._model, r = this._api;
                t.unfinished = !1;
                do {
                    var a = +new Date;
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), U(this, i), t.performVisualTasks(i), Q(this, this._model, r, "remain"), n -= +new Date - a
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, z.getDom = function () {
        return this._dom
    }, z.getZr = function () {
        return this._zr
    }, z.setOption = function (t, e, n) {
        if (this._disposed) this.id; else {
            var i;
            if (P(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[R] = !0, !this._model || e) {
                var r = new h(this._api), a = this._theme, o = this._model = new u;
                o.scheduler = this._scheduler, o.init(null, null, a, r)
            }
            this._model.setOption(t, ot), n ? (this.__optionUpdated = {silent: i}, this[R] = !1) : (W(this), H.update.call(this), this._zr.flush(), this.__optionUpdated = !1, this[R] = !1, G.call(this, i), X.call(this, i))
        }
    }, z.setTheme = function () {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, z.getModel = function () {
        return this._model
    }, z.getOption = function () {
        return this._model && this._model.getOption()
    }, z.getWidth = function () {
        return this._zr.getWidth()
    }, z.getHeight = function () {
        return this._zr.getHeight()
    }, z.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, z.getRenderedCanvas = function (t) {
        if (o.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t)
    }, z.getSvgDataURL = function () {
        if (o.svgSupported) {
            var t = this._zr, e = t.storage.getDisplayList();
            return r.each(e, (function (t) {
                t.stopAnimation(!0)
            })), t.painter.toDataURL()
        }
    }, z.getDataURL = function (t) {
        if (!this._disposed) {
            var e = (t = t || {}).excludeComponents, n = this._model, i = [], r = this;
            D(e, (function (t) {
                n.eachComponent({mainType: t}, (function (t) {
                    var e = r._componentsMap[t.__viewId];
                    e.group.ignore || (i.push(e), e.group.ignore = !0)
                }))
            }));
            var a = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return D(i, (function (t) {
                t.group.ignore = !1
            })), a
        }
        this.id
    }, z.getConnectedDataURL = function (t) {
        if (this._disposed) this.id; else if (o.canvasSupported) {
            var e = "svg" === t.type, n = this.group, a = Math.min, s = Math.max, l = 1 / 0;
            if (ht[n]) {
                var u = l, c = l, d = -1 / 0, h = -1 / 0, f = [], p = t && t.pixelRatio || 1;
                r.each(dt, (function (i, o) {
                    if (i.group === n) {
                        var l = e ? i.getZr().painter.getSvgDom().innerHTML : i.getRenderedCanvas(r.clone(t)),
                            p = i.getDom().getBoundingClientRect();
                        u = a(p.left, u), c = a(p.top, c), d = s(p.right, d), h = s(p.bottom, h), f.push({
                            dom: l,
                            left: p.left,
                            top: p.top
                        })
                    }
                }));
                var g = (d *= p) - (u *= p), v = (h *= p) - (c *= p), m = r.createCanvas(),
                    y = i.init(m, {renderer: e ? "svg" : "canvas"});
                if (y.resize({width: g, height: v}), e) {
                    var x = "";
                    return D(f, (function (t) {
                        var e = t.left - u, n = t.top - c;
                        x += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>"
                    })), y.painter.getSvgRoot().innerHTML = x, t.connectedBackgroundColor && y.painter.setBackgroundColor(t.connectedBackgroundColor), y.refreshImmediately(), y.painter.toDataURL()
                }
                return t.connectedBackgroundColor && y.add(new b.Rect({
                    shape: {x: 0, y: 0, width: g, height: v},
                    style: {fill: t.connectedBackgroundColor}
                })), D(f, (function (t) {
                    var e = new b.Image({style: {x: t.left * p - u, y: t.top * p - c, image: t.dom}});
                    y.add(e)
                })), y.refreshImmediately(), m.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, z.convertToPixel = r.curry(V, "convertToPixel"), z.convertFromPixel = r.curry(V, "convertFromPixel"), z.containPixel = function (t, e) {
        if (!this._disposed) {
            var n, i = this._model;
            return t = x.parseFinder(i, t), r.each(t, (function (t, i) {
                i.indexOf("Models") >= 0 && r.each(t, (function (t) {
                    var r = t.coordinateSystem;
                    if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                        var a = this._chartsMap[t.__viewId];
                        a && a.containPoint && (n |= a.containPoint(e, t))
                    }
                }), this)
            }), this), !!n
        }
        this.id
    }, z.getVisual = function (t, e) {
        var n = this._model, i = (t = x.parseFinder(n, t, {defaultMainType: "series"})).seriesModel.getData(),
            r = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(t.dataIndex) : null;
        return null != r ? i.getItemVisual(r, e) : i.getVisual(e)
    }, z.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, z.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var H = {
        prepareAndUpdate: function (t) {
            W(this), H.update.call(this, t)
        }, update: function (t) {
            var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, s = this._scheduler;
            if (e) {
                s.restoreData(e, t), s.performSeriesTasks(e), r.create(e, n), s.performDataProcessorTasks(e, t), U(this, e), r.update(e, n), K(e), s.performVisualTasks(e, t), $(this, e, n, t);
                var l = e.get("backgroundColor") || "transparent";
                if (o.canvasSupported) i.setBackgroundColor(l); else {
                    var u = a.parse(l);
                    l = a.stringify(u, "rgb"), 0 === u[3] && (l = "transparent")
                }
                J(e, n)
            }
        }, updateTransform: function (t) {
            var e = this._model, n = this, i = this._api;
            if (e) {
                var a = [];
                e.eachComponent((function (r, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(o, e, i, t);
                        l && l.update && a.push(s)
                    } else a.push(s)
                }));
                var o = r.createHashMap();
                e.eachSeries((function (r) {
                    var a = n._chartsMap[r.__viewId];
                    if (a.updateTransform) {
                        var s = a.updateTransform(r, e, i, t);
                        s && s.update && o.set(r.uid, 1)
                    } else o.set(r.uid, 1)
                })), K(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: o
                }), Q(n, e, i, t, o), J(e, this._api)
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (y.markUpdateMethod(t, "updateView"), K(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), $(this, this._model, this._api, t), J(e, this._api))
        }, updateVisual: function (t) {
            H.update.call(this, t)
        }, updateLayout: function (t) {
            H.update.call(this, t)
        }
    };

    function W(t) {
        var e = t._model, n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), Z(t, "component", e, n), Z(t, "chart", e, n), n.plan()
    }

    function q(t, e, n, i, a) {
        var o = t._model;
        if (i) {
            var s = {};
            s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
            var l = {mainType: i, query: s};
            a && (l.subType = a);
            var u = n.excludeSeriesId;
            null != u && (u = r.createHashMap(x.normalizeToArray(u))), o && o.eachComponent(l, (function (e) {
                u && null != u.get(e.id) || c(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }), t)
        } else D(t._componentsViews.concat(t._chartsViews), c);

        function c(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
        }
    }

    function U(t, e) {
        var n = t._chartsMap, i = t._scheduler;
        e.eachSeries((function (t) {
            i.updateStreamModes(t, n[t.__viewId])
        }))
    }

    function Y(t, e) {
        var n = t.type, i = t.escapeConnect, a = it[n], o = a.actionInfo, s = (o.update || "update").split(":"),
            l = s.pop();
        s = null != s[0] && I(s[0]), this[R] = !0;
        var u = [t], c = !1;
        t.batch && (c = !0, u = r.map(t.batch, (function (e) {
            return (e = r.defaults(r.extend({}, e), t)).batch = null, e
        })));
        var d, h = [], f = "highlight" === n || "downplay" === n;
        D(u, (function (t) {
            (d = (d = a.action(t, this._model, this._api)) || r.extend({}, t)).type = o.event || d.type, h.push(d), f ? q(this, l, t, "series") : s && q(this, l, t, s.main, s.sub)
        }), this), "none" === l || f || s || (this.__optionUpdated ? (W(this), H.update.call(this, t), this.__optionUpdated = !1) : H[l].call(this, t)), d = c ? {
            type: o.event || n,
            escapeConnect: i,
            batch: h
        } : h[0], this[R] = !1, !e && this._messageCenter.trigger(d.type, d)
    }

    function G(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            Y.call(this, n, t)
        }
    }

    function X(t) {
        !t && this.trigger("updated")
    }

    function Z(t, e, n, i) {
        for (var r = "component" === e, a = r ? t._componentsViews : t._chartsViews, o = r ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < a.length; u++) a[u].__alive = !1;

        function c(t) {
            var e = "_ec_" + t.id + "_" + t.type, u = o[e];
            if (!u) {
                var c = I(t.type);
                (u = new (r ? m.getClass(c.main, c.sub) : y.getClass(c.sub))).init(n, l), o[e] = u, a.push(u), s.add(u.group)
            }
            t.__viewId = u.__id = e, u.__alive = !0, u.__model = t, u.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !r && i.prepareView(u, t, n, l)
        }

        r ? n.eachComponent((function (t, e) {
            "series" !== t && c(e)
        })) : n.eachSeries(c);
        for (u = 0; u < a.length;) {
            var d = a[u];
            d.__alive ? u++ : (!r && d.renderTask.dispose(), s.remove(d.group), d.dispose(n, l), a.splice(u, 1), delete o[d.__id], d.__id = d.group.__ecComponentInfo = null)
        }
    }

    function K(t) {
        t.clearColorPalette(), t.eachSeries((function (t) {
            t.clearColorPalette()
        }))
    }

    function $(t, e, n, i) {
        !function (t, e, n, i, r) {
            D(r || t._componentsViews, (function (t) {
                var r = t.__model;
                t.render(r, e, n, i), et(r, t)
            }))
        }(t, e, n, i), D(t._chartsViews, (function (t) {
            t.__alive = !1
        })), Q(t, e, n, i), D(t._chartsViews, (function (t) {
            t.__alive || t.remove(e, n)
        }))
    }

    function Q(t, e, n, i, r) {
        var a, s = t._scheduler;
        e.eachSeries((function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var o = n.renderTask;
            s.updatePayload(o, i), r && r.get(e.uid) && o.dirty(), a |= o.perform(s.getPerformArgs(o)), n.group.silent = !!e.get("silent"), et(e, n), function (t, e) {
                var n = t.get("blendMode") || null;
                e.group.traverse((function (t) {
                    t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable((function (t) {
                        t.setStyle("blend", n)
                    }))
                }))
            }(e, n)
        })), s.unfinished |= a, function (t, e) {
            var n = t._zr.storage, i = 0;
            n.traverse((function (t) {
                i++
            })), i > e.get("hoverLayerThreshold") && !o.node && e.eachSeries((function (e) {
                if (!e.preventUsingHoverLayer) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive && n.group.traverse((function (t) {
                        t.useHoverLayer = !0
                    }))
                }
            }))
        }(t, e), C(t._zr.dom, e)
    }

    function J(t, e) {
        D(st, (function (n) {
            n(t, e)
        }))
    }

    z.resize = function (t) {
        if (this._disposed) this.id; else {
            this._zr.resize(t);
            var e = this._model;
            if (this._loadingFX && this._loadingFX.resize(), e) {
                var n = e.resetOption("media"), i = t && t.silent;
                this[R] = !0, n && W(this), H.update.call(this), this[R] = !1, G.call(this, i), X.call(this, i)
            }
        }
    }, z.showLoading = function (t, e) {
        if (this._disposed) this.id; else if (P(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), ct[t]) {
            var n = ct[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, z.hideLoading = function () {
        this._disposed ? this.id : (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)
    }, z.makeActionFromEvent = function (t) {
        var e = r.extend({}, t);
        return e.type = rt[t.type], e
    }, z.dispatchAction = function (t, e) {
        this._disposed ? this.id : (P(e) || (e = {silent: !!e}), it[t.type] && this._model && (this[R] ? this._pendingActions.push(t) : (Y.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && o.browser.weChat && this._throttledZrFlush(), G.call(this, e.silent), X.call(this, e.silent))))
    }, z.appendData = function (t) {
        if (this._disposed) this.id; else {
            var e = t.seriesIndex;
            this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0
        }
    }, z.on = B("on", !1), z.off = B("off", !1), z.one = B("one", !1);
    var tt = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];

    function et(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse((function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        }))
    }

    function nt() {
        this.eventInfo
    }

    z._initEvents = function () {
        D(tt, (function (t) {
            var e = function (e) {
                var n, i = this.getModel(), a = e.target;
                if ("globalout" === t) n = {}; else if (a && null != a.dataIndex) {
                    var o = a.dataModel || i.getSeriesByIndex(a.seriesIndex);
                    n = o && o.getDataParams(a.dataIndex, a.dataType, a) || {}
                } else a && a.eventData && (n = r.extend({}, a.eventData));
                if (n) {
                    var s = n.componentType, l = n.componentIndex;
                    "markLine" !== s && "markPoint" !== s && "markArea" !== s || (s = "series", l = n.seriesIndex);
                    var u = s && null != l && i.getComponent(s, l),
                        c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                    n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: a,
                        packedEvent: n,
                        model: u,
                        view: c
                    }, this.trigger(t, n)
                }
            };
            e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
        }), this), D(rt, (function (t, e) {
            this._messageCenter.on(e, (function (t) {
                this.trigger(e, t)
            }), this)
        }), this)
    }, z.isDisposed = function () {
        return this._disposed
    }, z.clear = function () {
        this._disposed ? this.id : this.setOption({series: []}, !0)
    }, z.dispose = function () {
        if (this._disposed) this.id; else {
            this._disposed = !0, x.setAttribute(this.getDom(), gt, "");
            var t = this._api, e = this._model;
            D(this._componentsViews, (function (n) {
                n.dispose(e, t)
            })), D(this._chartsViews, (function (n) {
                n.dispose(e, t)
            })), this._zr.dispose(), delete dt[this.id]
        }
    }, r.mixin(F, l), nt.prototype = {
        constructor: nt, normalizeQuery: function (t) {
            var e = {}, n = {}, i = {};
            if (r.isString(t)) {
                var a = I(t);
                e.mainType = a.main || null, e.subType = a.sub || null
            } else {
                var o = ["Index", "Name", "Id"], s = {name: 1, dataIndex: 1, dataType: 1};
                r.each(t, (function (t, r) {
                    for (var a = !1, l = 0; l < o.length; l++) {
                        var u = o[l], c = r.lastIndexOf(u);
                        if (c > 0 && c === r.length - u.length) {
                            var d = r.slice(0, c);
                            "data" !== d && (e.mainType = d, e[u.toLowerCase()] = t, a = !0)
                        }
                    }
                    s.hasOwnProperty(r) && (n[r] = t, a = !0), a || (i[r] = t)
                }))
            }
            return {cptQuery: e, dataQuery: n, otherQuery: i}
        }, filter: function (t, e, n) {
            var i = this.eventInfo;
            if (!i) return !0;
            var r = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
            if (!o || !s) return !0;
            var l = e.cptQuery, u = e.dataQuery;
            return c(l, o, "mainType") && c(l, o, "subType") && c(l, o, "index", "componentIndex") && c(l, o, "name") && c(l, o, "id") && c(u, a, "name") && c(u, a, "dataIndex") && c(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));

            function c(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n]
            }
        }, afterTrigger: function () {
            this.eventInfo = null
        }
    };
    var it = {}, rt = {}, at = [], ot = [], st = [], lt = [], ut = {}, ct = {}, dt = {}, ht = {}, ft = new Date - 0,
        pt = new Date - 0, gt = "_echarts_instance_";

    function vt(t) {
        ht[t] = !1
    }

    var mt = vt;

    function yt(t) {
        return dt[x.getAttribute(t, gt)]
    }

    function bt(t, e) {
        ut[t] = e
    }

    function xt(t) {
        ot.push(t)
    }

    function _t(t, e) {
        St(at, t, e, 1e3)
    }

    function wt(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = P(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, A(N.test(i) && N.test(e)), it[i] || (it[i] = {
            action: n,
            actionInfo: t
        }), rt[e] = i
    }

    function Ct(t, e) {
        St(lt, t, e, 3e3, "visual")
    }

    function St(t, e, n, i, r) {
        (E(e) || P(e)) && (n = e, e = i);
        var a = k.wrapStageHandler(n, r);
        return a.__prio = e, a.__raw = n, t.push(a), a
    }

    function kt(t, e) {
        ct[t] = e
    }

    Ct(2e3, w), xt(f), _t(900, p), kt("default", S), wt({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, r.noop), wt({type: "downplay", event: "downplay", update: "downplay"}, r.noop), bt("light", T), bt("dark", M);
    e.version = "4.8.0", e.dependencies = {zrender: "4.3.1"}, e.PRIORITY = L, e.init = function (t, e, n) {
        var i = yt(t);
        if (i) return i;
        var r = new F(t, e, n);
        return r.id = "ec_" + ft++, dt[r.id] = r, x.setAttribute(t, gt, r.id), function (t) {
            var e = "__connectUpdateStatus";

            function n(t, n) {
                for (var i = 0; i < t.length; i++) t[i][e] = n
            }

            D(rt, (function (i, r) {
                t._messageCenter.on(r, (function (i) {
                    if (ht[t.group] && 0 !== t[e]) {
                        if (i && i.escapeConnect) return;
                        var r = t.makeActionFromEvent(i), a = [];
                        D(dt, (function (e) {
                            e !== t && e.group === t.group && a.push(e)
                        })), n(a, 0), D(a, (function (t) {
                            1 !== t[e] && t.dispatchAction(r)
                        })), n(a, 2)
                    }
                }))
            }))
        }(r), r
    }, e.connect = function (t) {
        if (r.isArray(t)) {
            var e = t;
            t = null, D(e, (function (e) {
                null != e.group && (t = e.group)
            })), t = t || "g_" + pt++, D(e, (function (e) {
                e.group = t
            }))
        }
        return ht[t] = !0, t
    }, e.disConnect = vt, e.disconnect = mt, e.dispose = function (t) {
        "string" == typeof t ? t = dt[t] : t instanceof F || (t = yt(t)), t instanceof F && !t.isDisposed() && t.dispose()
    }, e.getInstanceByDom = yt, e.getInstanceById = function (t) {
        return dt[t]
    }, e.registerTheme = bt, e.registerPreprocessor = xt, e.registerProcessor = _t, e.registerPostUpdate = function (t) {
        st.push(t)
    }, e.registerAction = wt, e.registerCoordinateSystem = function (t, e) {
        d.register(t, e)
    }, e.getCoordinateSystemDimensions = function (t) {
        var e = d.get(t);
        if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
    }, e.registerLayout = function (t, e) {
        St(lt, t, e, 1e3, "layout")
    }, e.registerVisual = Ct, e.registerLoading = kt, e.extendComponentModel = function (t) {
        return g.extend(t)
    }, e.extendComponentView = function (t) {
        return m.extend(t)
    }, e.extendSeriesModel = function (t) {
        return v.extend(t)
    }, e.extendChartView = function (t) {
        return y.extend(t)
    }, e.setCanvasCreator = function (t) {
        r.$override("createCanvas", t)
    }, e.registerMap = function (t, e, n) {
        O.registerMap(t, e, n)
    }, e.getMap = function (t) {
        var e = O.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }, e.dataTool = {};
    var Tt = n("txkQ");
    !function () {
        for (var t in Tt) Tt.hasOwnProperty(t) && (e[t] = Tt[t])
    }()
}
,
Pwj2:function (t, e, n) {
    "use strict";

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            })))), r.forEach((function (e) {
                i(t, e, n[e])
            }))
        }
        return t
    }

    n.d(e, "a", (function () {
        return l
    }));
    var a = function (t, e, n) {
        Object.defineProperty(t, e, {
            configurable: !0, get: function () {
                return n
            }, set: function (t) {
                console.warn("tried to set frozen property ".concat(e, " with ").concat(t))
            }
        })
    }, o = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        Object.defineProperty(t, e, {configurable: !0, writable: !0, value: n})
    }, s = {
        abstract: !0, name: "Fragment", props: {
            name: {
                type: String, default: function () {
                    return Math.floor(Date.now() * Math.random()).toString(16)
                }
            }
        }, mounted: function () {
            var t = this.$el, e = t.parentNode, n = document.createComment("fragment#".concat(this.name, "#head")),
                i = document.createComment("fragment#".concat(this.name, "#tail"));
            e.insertBefore(n, t), e.insertBefore(i, t), t.appendChild = function (n) {
                e.insertBefore(n, i), a(n, "parentNode", t)
            }, t.insertBefore = function (n, i) {
                e.insertBefore(n, i), a(n, "parentNode", t)
            }, t.removeChild = function (t) {
                e.removeChild(t), o(t, "parentNode")
            }, Array.from(t.childNodes).forEach((function (e) {
                return t.appendChild(e)
            })), e.removeChild(t), a(t, "parentNode", e), a(t, "nextSibling", i.nextSibling);
            var r = e.insertBefore;
            e.insertBefore = function (i, a) {
                r.call(e, i, a !== t ? a : n)
            };
            var s = e.removeChild;
            e.removeChild = function (a) {
                if (a === t) {
                    for (; n.nextSibling !== i;) t.removeChild(n.nextSibling);
                    e.removeChild(n), e.removeChild(i), o(t, "parentNode"), e.insertBefore = r, e.removeChild = s
                } else s.call(e, a)
            }
        }, render: function (t) {
            var e = this, n = this.$slots.default;
            return n && n.length && n.forEach((function (t) {
                return t.data = r({}, t.data, {attrs: r({fragment: e.name}, (t.data || {}).attrs)})
            })), t("div", {attrs: {fragment: this.name}}, n)
        }
    };
    var l = s
}
,
PyNV:function (t, e, n) {
    "use strict";
    var i = n("c5Pc");
    n.n(i).a
}
,
"Q+WB"
:

function (t, e, n) {
    "use strict";
    var i = n("FGB8");
    n.n(i).a
}

,
"Q/yX"
:

function (t, e, n) {
    "use strict";
    var i = n("Y7ZC"), r = n("ZW5q"), a = n("RDmV");
    i(i.S, "Promise", {
        try: function (t) {
            var e = r.f(this), n = a(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}

,
Q3ne:function (t, e, n) {
    var i = n("SlkY");
    t.exports = function (t, e) {
        var n = [];
        return i(t, !1, n.push, n, e), n
    }
}
,
Q7if:function (t, e, n) {
    var i = n("JEkh").extend({
        type: "markArea",
        defaultOption: {
            zlevel: 0,
            z: 1,
            tooltip: {trigger: "item"},
            animation: !1,
            label: {show: !0, position: "top"},
            itemStyle: {borderWidth: 0},
            emphasis: {label: {show: !0, position: "top"}}
        }
    });
    t.exports = i
}
,
QBAS:function (t, e, n) {
    var i = n("0tWi");
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n("SZ7m")("768cefd8", i, !0, {})
}
,
QBsz:function (t, e) {
    var n = "undefined" == typeof Float32Array ? Array : Float32Array;

    function i(t) {
        return Math.sqrt(a(t))
    }

    var r = i;

    function a(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    var o = a;

    function s(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    var l = s;

    function u(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    var c = u;
    e.create = function (t, e) {
        var i = new n(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i
    }, e.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }, e.clone = function (t) {
        var e = new n(2);
        return e[0] = t[0], e[1] = t[1], e
    }, e.set = function (t, e, n) {
        return t[0] = e, t[1] = n, t
    }, e.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }, e.scaleAndAdd = function (t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }, e.sub = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }, e.len = i, e.length = r, e.lenSquare = a, e.lengthSquare = o, e.mul = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }, e.div = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }, e.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }, e.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }, e.normalize = function (t, e) {
        var n = i(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }, e.distance = s, e.dist = l, e.distanceSquare = u, e.distSquare = c, e.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }, e.lerp = function (t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
    }, e.applyTransform = function (t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }, e.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }, e.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }
}
,
QCMA:function (t, e, n) {
    var i = n("woph");
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n("SZ7m")("7246e1fa", i, !0, {})
}
,
QDip:function (t, e, n) {
    "use strict";
    var i = n("dQN3");
    n.n(i).a
}
,
QHNo:function (t, e, n) {
    "use strict";
    var i = n("NYaT");
    n.n(i).a
}
,
QMMT:function (t, e, n) {
    var i = n("a0xu"), r = n("UWiX")("toStringTag"), a = "Arguments" == i(function () {
        return arguments
    }());
    t.exports = function (t) {
        var e, n, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), r)) ? n : a ? i(e) : "Object" == (o = i(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}
,
QSc6:function (t, e, n) {
    "use strict";
    var i = n("0jNN"), r = n("sxOR"), a = Object.prototype.hasOwnProperty, o = {
        brackets: function (t) {
            return t + "[]"
        }, comma: "comma", indices: function (t, e) {
            return t + "[" + e + "]"
        }, repeat: function (t) {
            return t
        }
    }, s = Array.isArray, l = Array.prototype.push, u = function (t, e) {
        l.apply(t, s(e) ? e : [e])
    }, c = Date.prototype.toISOString, d = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: i.encode,
        encodeValuesOnly: !1,
        formatter: r.formatters[r.default],
        indices: !1,
        serializeDate: function (t) {
            return c.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1
    }, h = function t(e, n, r, a, o, l, c, h, f, p, g, v, m) {
        var y = e;
        if ("function" == typeof c ? y = c(n, y) : y instanceof Date ? y = p(y) : "comma" === r && s(y) && (y = y.join(",")), null === y) {
            if (a) return l && !v ? l(n, d.encoder, m) : n;
            y = ""
        }
        if ("string" == typeof y || "number" == typeof y || "boolean" == typeof y || i.isBuffer(y)) return l ? [g(v ? n : l(n, d.encoder, m)) + "=" + g(l(y, d.encoder, m))] : [g(n) + "=" + g(String(y))];
        var b, x = [];
        if (void 0 === y) return x;
        if (s(c)) b = c; else {
            var _ = Object.keys(y);
            b = h ? _.sort(h) : _
        }
        for (var w = 0; w < b.length; ++w) {
            var C = b[w];
            o && null === y[C] || (s(y) ? u(x, t(y[C], "function" == typeof r ? r(n, C) : n, r, a, o, l, c, h, f, p, g, v, m)) : u(x, t(y[C], n + (f ? "." + C : "[" + C + "]"), r, a, o, l, c, h, f, p, g, v, m)))
        }
        return x
    };
    t.exports = function (t, e) {
        var n, i = t, l = function (t) {
            if (!t) return d;
            if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
            var e = t.charset || d.charset;
            if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = r.default;
            if (void 0 !== t.format) {
                if (!a.call(r.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var i = r.formatters[n], o = d.filter;
            return ("function" == typeof t.filter || s(t.filter)) && (o = t.filter), {
                addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : d.addQueryPrefix,
                allowDots: void 0 === t.allowDots ? d.allowDots : !!t.allowDots,
                charset: e,
                charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : d.charsetSentinel,
                delimiter: void 0 === t.delimiter ? d.delimiter : t.delimiter,
                encode: "boolean" == typeof t.encode ? t.encode : d.encode,
                encoder: "function" == typeof t.encoder ? t.encoder : d.encoder,
                encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : d.encodeValuesOnly,
                filter: o,
                formatter: i,
                serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : d.serializeDate,
                skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : d.skipNulls,
                sort: "function" == typeof t.sort ? t.sort : null,
                strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : d.strictNullHandling
            }
        }(e);
        "function" == typeof l.filter ? i = (0, l.filter)("", i) : s(l.filter) && (n = l.filter);
        var c, f = [];
        if ("object" != typeof i || null === i) return "";
        c = e && e.arrayFormat in o ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
        var p = o[c];
        n || (n = Object.keys(i)), l.sort && n.sort(l.sort);
        for (var g = 0; g < n.length; ++g) {
            var v = n[g];
            l.skipNulls && null === i[v] || u(f, h(i[v], v, p, l.strictNullHandling, l.skipNulls, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.formatter, l.encodeValuesOnly, l.charset))
        }
        var m = f.join(l.delimiter), y = !0 === l.addQueryPrefix ? "?" : "";
        return l.charsetSentinel && ("iso-8859-1" === l.charset ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), m.length > 0 ? y + m : ""
    }
}
,
QUQ2:function (t, e, n) {
    "use strict";
    e.a = {
        MARK_LIST: "/mark/s",
        QUERY_LIST: "/s",
        DETAIL_URL: "/detail/compinfo",
        PERSON_LIST: "/s/person",
        DISCREDIT_LIST: "/discredit/s"
    }
}
,
QUw5:function (t, e, n) {
    var i = n("OlYY").extend({type: "dataZoom.select"});
    t.exports = i
}
,
QWy2:function (t, e, n) {
    n("KOQb")("Map")
}
,
QXhf:function (t, e, n) {
    var i, r, a, o = n("2GTP"), s = n("MCSJ"), l = n("MvwC"), u = n("Hsns"), c = n("5T2Y"), d = c.process,
        h = c.setImmediate, f = c.clearImmediate, p = c.MessageChannel, g = c.Dispatch, v = 0, m = {},
        y = "onreadystatechange", b = function () {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e()
            }
        }, x = function (t) {
            b.call(t.data)
        };
    h && f || (h = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return m[++v] = function () {
            s("function" == typeof t ? t : Function(t), e)
        }, i(v), v
    }, f = function (t) {
        delete m[t]
    }, "process" == n("a0xu")(d) ? i = function (t) {
        d.nextTick(o(b, t, 1))
    } : g && g.now ? i = function (t) {
        g.now(o(b, t, 1))
    } : p ? (a = (r = new p).port2, r.port1.onmessage = x, i = o(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (i = function (t) {
        c.postMessage(t + "", "*")
    }, c.addEventListener("message", x, !1)) : i = y in u("script") ? function (t) {
        l.appendChild(u("script")).onreadystatechange = function () {
            l.removeChild(this), b.call(t)
        }
    } : function (t) {
        setTimeout(o(b, t, 1), 0)
    }), t.exports = {set: h, clear: f}
}
,
QYS6:function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n("oCYn"), r = n("+CXx"), a = n.n(r), o = n("MT78"), s = n.n(o), l = (n("+M7m"), n("wJ1A")), u = n("4bpn"),
        c = n("gDS+"), d = n.n(c), h = n("m9fh"), f = n("bWxM"), p = n("ygAv"), g = n("m1cH"), v = n.n(g),
        m = n("ZHBX"), y = {
            name: "ContrastPanel", components: {SearchInput: m.a}, props: {
                data: {
                    type: Object, default: function () {
                    }
                }
            }, computed: {
                textRandom: function () {
                    return [].concat(v()(this.data.entLogoWord), v()(parseInt(10 * Math.random(), 10).toString())).reduce((function (t, e) {
                        return (t + e.charCodeAt(0)) % 10
                    }), 1)
                }
            }, data: function () {
                return {
                    list: [],
                    storageList: [],
                    addcom: !1,
                    searchValue: "",
                    isFuzzy: !0,
                    selectedData: {},
                    localData: []
                }
            }, mounted: function () {
                this.init(), this.bindEvent()
            }, methods: {
                init: function () {
                    var t = window.localStorage, e = !1;
                    if (this.list = JSON.parse(t.getItem("contrastData")) || [], this.list && 0 !== this.list.length) {
                        for (var n = 0; n < this.list.length; n++) {
                            if (this.list[n].pid === this.data.pid) return this.list[n].contrastSelected = !0, this.list.unshift(this.list[n]), this.list.splice(n + 1, 1), void (e = !1);
                            e = !0
                        }
                        e && (this.data.contrastSelected = !0, this.list.unshift(this.data))
                    } else this.data.contrastSelected = !0, this.list.push(this.data)
                }, bindEvent: function () {
                    var t = this, e = window.localStorage;
                    window.addEventListener("storage", (function () {
                        var n = JSON.parse(e.getItem("contrastData"));
                        t.list = n
                    }))
                }, close: function () {
                    this.$emit("closeDrawer")
                }, handelSelect: function (t) {
                    var e = this.list[t], n = 0;
                    this.list[t].contrastSelected ? (n--, e.contrastSelected = !1, this.list.splice(t, 1, e)) : (this.list.forEach((function (t) {
                        t.contrastSelected && n++
                    })), n > 4 ? this.$Message.warning({
                        background: !0,
                        content: "最多对比5个企业"
                    }) : (e.contrastSelected = !0, this.list.splice(t, 1, e)))
                }, handelAddcom: function () {
                    this.addcom = !0
                }, onSelectPid: function (t, e) {
                    e.resultStr.replace(/<\/?em>/g, "", "");
                    this.selectedData = {
                        entLogo: e.info.logo,
                        entLogoWord: e.info.logoWord,
                        pid: t,
                        entName: e.resultStrDelEm,
                        resultType: 0,
                        contrastSelected: !1
                    }
                }, handelAddcomBtn: function () {
                    var t = this, e = !0, n = window.localStorage;
                    if (!this.selectedData.pid) return this.$Message.error({
                        background: !0,
                        content: "该企业不存在，请重新添加"
                    }), void (e = !1);
                    this.list.forEach((function (n) {
                        if (n.pid === t.selectedData.pid) return t.$Message.error({
                            background: !0,
                            content: "已添加该企业"
                        }), void (e = !1)
                    })), e && (e = !0, this.list.push(this.selectedData), n.setItem("contrastData", d()(this.list)), this.addcom = !1, this.selectedData = {})
                }, handelDelcom: function (t) {
                    this.list.splice(t, 1), window.localStorage.setItem("contrastData", d()(this.list))
                }, clearAll: function () {
                    var t = window.localStorage;
                    this.list = [], t.removeItem("contrastData")
                }, contrastBtn: function () {
                    var t = this, e = window.localStorage;
                    this.list.forEach((function (e) {
                        e.contrastSelected && t.storageList.push(e)
                    })), this.storageList.length < 2 ? this.$Message.warning({
                        background: !0,
                        content: "最少对比2个企业"
                    }) : (e.setItem("contrastData", d()(this.list)), window.open("/compare"))
                }
            }
        }, b = y, x = (n("Ce0N"), n("Kvdr"), n("KHd+")), _ = Object(x.a)(b, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "contrast-company"}, [n("div", {
                staticClass: "contrast-box",
                attrs: {"data-log-an": "contrast-box", "data-log-title": "close"}
            }, [n("p", {
                staticClass: "title",
                attrs: {slot: "title"},
                slot: "title"
            }, [n("span", {on: {click: t.close}}), t._v("\n            企业对比\n        ")]), n("p", {staticClass: "contrast-toast"}, [t._v("您已添加 " + t._s(t.list.length) + " 家企业"), n("span", {on: {click: t.clearAll}}, [t._v("清空")])]), t._l(t.list, (function (e, i) {
                return n("div", {
                    key: i,
                    staticClass: "contrast-ele"
                }, [n("span", {
                    class: {"contrast-select": e.contrastSelected, "contrast-selected": !0},
                    on: {
                        click: function (e) {
                            return t.handelSelect(i)
                        }
                    }
                }), n("div", {staticClass: "contrast-pic"}, [n("div", {class: ["fate-image-container"]}, [e.entLogo && e.entLogo.length > 0 ? n("div", {staticClass: "img-logo"}, [n("img", {attrs: {src: e.entLogo}})]) : n("div", {class: ["txt-logo color-" + t.textRandom]}, [n("span", {class: ["txt-word-" + e.entLogoWord.length]}, [t._v(t._s(e.entLogoWord))])])])]), n("p", {staticClass: "contrast-name"}, [t._v(t._s(e.entName))]), n("p", {
                    staticClass: "contrast-del",
                    on: {
                        click: function (e) {
                            return t.handelDelcom(i)
                        }
                    }
                }, [t._v("删"), n("br"), t._v("除")])])
            })), n("div", {
                staticClass: "contrast-addcom",
                on: {click: t.handelAddcom}
            }, [n("span"), n("a", [t._v("添加企业")])])], 2), n("div", {
                staticClass: "contrast-botbt",
                on: {click: t.contrastBtn}
            }, [n("a", [t._v("对比企业")])]), n("Modal", {
                attrs: {title: "添加企业"},
                model: {
                    value: t.addcom, callback: function (e) {
                        t.addcom = e
                    }, expression: "addcom"
                }
            }, [n("div", [n("search-input", {
                ref: "searchInput",
                attrs: {isFuzzy: t.isFuzzy, fuzzyUrl: "/compare/suggestajax", useType: "small", value: t.searchValue},
                on: {onSelectPid: t.onSelectPid}
            })], 1), n("p", {
                staticClass: "addcom-footer",
                attrs: {slot: "footer"},
                on: {click: t.handelAddcomBtn},
                slot: "footer"
            }, [t._v("确认添加")])])], 1)
        }), [], !1, null, "55a2d7f3", null), w = _.exports, C = {
            data: function () {
                return {
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    show: !1,
                    form: {name: "", entname: "", phone: "", textcode: "", phonecode: "", intention: ""},
                    ruleValidate: {
                        name: [{
                            validator: function (t, e, n) {
                                "" === e ? n("请输入姓名") : /^\s+$/.test(e) ? n("姓名不能仅包含空格") : n()
                            }, trigger: "blur"
                        }], entname: [{
                            validator: function (t, e, n) {
                                "" === e ? n("请填写公司名称") : /^\s+$/.test(e) ? n("公司名称不能仅包含空格") : n()
                            }, trigger: "blur"
                        }], phone: [{
                            validator: function (t, e, n) {
                                e && /^1[3456789]\d{9}$/.test(e) ? n() : "" === e ? n("手机号码不能为空") : /^\s+$/.test(e) ? n("手机号码不能仅包含空格") : n("手机号码格式不正确")
                            }, trigger: "blur"
                        }], textcode: [{
                            validator: function (t, e, n) {
                                "" === e ? n("请填写文字验证码") : /^\s+$/.test(e) ? n("文字验证码不能仅包含空格") : n()
                            }, trigger: "blur"
                        }], phonecode: [{
                            validator: function (t, e, n) {
                                "" === e ? n("请填写短信验证码") : /^\s+$/.test(e) ? n("短信验证码不能仅包含空格") : n()
                            }, trigger: "blur"
                        }], intention: [{
                            validator: function (t, e, n) {
                                "" === e ? n("合作意向不能为空") : /^\s+$/.test(e) ? n("合作意向不能仅包含空格") : n()
                            }, trigger: "blur"
                        }]
                    },
                    sendCodeText: "发送验证码",
                    carteTimer: null,
                    carteTime: 60,
                    isCanClick: !1,
                    imgCaptchaT: (new Date).getTime(),
                    imgCaptchaS: "/card/getCapImg?t=" + (new Date).getTime()
                }
            }, methods: {
                onOk: function () {
                    var t = this;
                    this.$refs.form.validate((function (e) {
                        if (e) {
                            var n = {
                                pid: t.pid,
                                personname: t.form.name,
                                fromphone: t.form.phone,
                                fromcompany: t.form.entname,
                                content: t.form.intention,
                                captcha: t.form.phonecode
                            };
                            t.$http.post("/card/submitCardAjax", n).then((function (e) {
                                0 === e.status ? (t.$Message.success({content: "提交成功!"}), t.show = !1) : t.$Message.error({content: "提交失败，请稍后再试!"})
                            })).catch((function () {
                                t.$Message.error({content: "提交失败，请稍后再试!"})
                            }))
                        }
                    }))
                }, onCancel: function () {
                    this.show = !1
                }, reloadeTextCode: function () {
                    this.imgCaptchaT = (new Date).getTime(), this.imgCaptchaS = "/card/getCapImg?t=" + this.imgCaptchaT
                }, sendCode: function () {
                    var t = this, e = this.form, n = e.phone, i = e.textcode;
                    if ("" !== n) if (/^\s+$/.test(n)) this.$Message.error({content: "手机号码不能仅包含空格"}); else if (/^1[3456789]\d{9}$/.test(n)) if ("" !== i) if (/^\s+$/.test(i)) this.$Message.error({content: "文字验证码不能仅包含空格"}); else {
                        var r = {time: this.imgCaptchaT, cellphone: n, icaptcha: i};
                        this.$http.post("/card/getCapAjax", r).then((function (e) {
                            0 === e.status ? (t.$Message.success({content: "发送成功!"}), t.isCanClick = !0, t.countDown()) : t.$Message.error({content: "发送失败，请稍后再试!"})
                        })).catch((function () {
                            t.$Message.error({content: "发送失败，请稍后再试!"})
                        }))
                    } else this.$Message.error({content: "文字验证码不能为空"}); else this.$Message.error({content: "手机号码格式不正确"}); else this.$Message.error({content: "手机号码不能为空"})
                }, countDown: function () {
                    var t = this;
                    this.carteTimer = setTimeout((function () {
                        t.carteTime -= 1, t.carteTime > -1 ? (t.countDown(), t.sendCodeText = t.carteTime + "s") : (t.carteTime = 60, clearTimeout(t.carteTimer), t.sendCodeText = "发送验证码", t.isCanClick = !1)
                    }), 1e3)
                }, onVisibleChange: function () {
                    this.$refs.form.resetFields(), this.form.textcode = "", this.form.phonecode = "", this.sendCodeText = "发送验证码", clearInterval(this.carteTimer), this.carteTime = 60, this.isCanClick = !1
                }
            }, mounted: function () {
            }, watch: {}
        }, S = C, k = (n("N/SO"), n("Tw39"), Object(x.a)(S, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [i("Modal", {
                staticClass: "data-card-modal",
                attrs: {width: "572", title: "递名片", "mask-closable": !1, "footer-hide": ""},
                on: {"on-visible-change": t.onVisibleChange},
                model: {
                    value: t.show, callback: function (e) {
                        t.show = e
                    }, expression: "show"
                }
            }, [i("Form", {
                ref: "form",
                attrs: {model: t.form, "label-width": 100, "label-position": "left", rules: t.ruleValidate}
            }, [i("FormItem", {attrs: {label: "姓名", prop: "name"}}, [i("Input", {
                attrs: {
                    placeholder: "请输入姓名",
                    clearable: ""
                }, model: {
                    value: t.form.name, callback: function (e) {
                        t.$set(t.form, "name", e)
                    }, expression: "form.name"
                }
            })], 1), i("FormItem", {attrs: {label: "公司名称", prop: "entname"}}, [i("Input", {
                attrs: {
                    placeholder: "请输入公司名称",
                    clearable: ""
                }, model: {
                    value: t.form.entname, callback: function (e) {
                        t.$set(t.form, "entname", e)
                    }, expression: "form.entname"
                }
            })], 1), i("FormItem", {attrs: {label: "手机号码", prop: "phone"}}, [i("Input", {
                attrs: {
                    placeholder: "请输入手机号码",
                    clearable: ""
                }, model: {
                    value: t.form.phone, callback: function (e) {
                        t.$set(t.form, "phone", e)
                    }, expression: "form.phone"
                }
            })], 1), i("FormItem", {attrs: {label: "文字验证", prop: "textcode"}}, [i("Input", {
                staticClass: "code",
                attrs: {placeholder: "请输入文字验证码", clearable: ""},
                model: {
                    value: t.form.textcode, callback: function (e) {
                        t.$set(t.form, "textcode", e)
                    }, expression: "form.textcode"
                }
            }), i("span", {staticClass: "textcode-btn"}, [i("img", {
                staticClass: "textcode-img",
                attrs: {src: t.imgCaptchaS}
            }), i("img", {
                staticClass: "textcode-reloade",
                attrs: {src: n("Okvj")},
                on: {click: t.reloadeTextCode}
            })])], 1), i("FormItem", {attrs: {label: "短信验证码", prop: "phonecode"}}, [i("Input", {
                staticClass: "code",
                attrs: {placeholder: "请输入短信验证码", clearable: ""},
                model: {
                    value: t.form.phonecode, callback: function (e) {
                        t.$set(t.form, "phonecode", e)
                    }, expression: "form.phonecode"
                }
            }), i("Button", {
                staticClass: "sendcode-btn",
                attrs: {disabled: t.isCanClick, type: "primary"},
                on: {click: t.sendCode}
            }, [t._v(t._s(t.sendCodeText))])], 1), i("FormItem", {
                attrs: {
                    label: "合作意向",
                    prop: "intention"
                }
            }, [i("Input", {
                attrs: {
                    type: "textarea",
                    autosize: {minRows: 7, maxRows: 7},
                    placeholder: "输入合作意向，有助于推动对方联系您。"
                }, model: {
                    value: t.form.intention, callback: function (e) {
                        t.$set(t.form, "intention", e)
                    }, expression: "form.intention"
                }
            })], 1), i("div", {staticClass: "btn-wrap"}, [i("Button", {
                staticClass: "confirm-btn cancel-btn",
                attrs: {type: "primary"},
                on: {click: t.onCancel}
            }, [t._v("取消")]), i("Button", {
                staticClass: "confirm-btn",
                attrs: {type: "primary"},
                on: {click: t.onOk}
            }, [t._v("提交")])], 1)], 1)], 1)], 1)
        }), [], !1, null, "5f7a711e", null)), T = k.exports, M = n("0ERz"), O = n.n(M), A = n("NADo"), D = n("Mg0C"),
        E = n("1tPa"), P = (n("S8w2"), {
            name: "CompanyLittleVideo",
            data: function () {
                return {
                    title: "秒懂企业：" + this.company + "视频简介",
                    isChrome: !1,
                    isShowTitle: !1,
                    playerOptions: {
                        autoplay: !0,
                        preload: "auto",
                        sources: [{type: "video/mp4", src: this.videoUrl}],
                        poster: "",
                        notSupportedMessage: "此视频暂无法播放，请稍后再试",
                        fluid: !0,
                        loop: !1,
                        controlBar: {
                            children: [{name: "playToggle"}, {name: "currentTimeDisplay"}, {name: "progressControl"}, {name: "durationDisplay"}, {
                                name: "volumePanel",
                                inline: !1
                            }, {name: "playbackRateMenuButton", playbackRates: [.5, 1, 1.5, 2]}, {name: "FullscreenToggle"}]
                        }
                    }
                }
            },
            components: {videoPlayer: E.videoPlayer},
            props: {
                videoUrl: {type: String, default: ""},
                company: {type: String, default: ""},
                showVideo: {type: Boolean, default: !1}
            },
            mounted: function () {
                this.isChrome = -1 !== navigator.userAgent.toLowerCase().indexOf("chrome")
            },
            methods: {
                closeVideo: function () {
                    this.$refs.videoplayer.player.pause();
                    var t = this.$refs.videoplayer.player.cache_.currentTime;
                    window.rcvLog.handleClick({
                        an: "video-currenttime",
                        title: "video-currenttime," + t
                    }), this.$emit("closeVideo")
                }, goback: function (t) {
                    var e = t.cache_.currentTime;
                    window.rcvLog.handleClick({
                        an: "video-currenttime",
                        title: "video-currenttime," + e
                    }), t.load(), t.pause(), this.playerOptions.poster = "https://xinpub.cdn.bcebos.com/aiqicha/preview-image.jpg"
                }
            }
        }), I = P, L = (n("7MDj"), n("ko1j"), Object(x.a)(I, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showVideo ? n("div", {staticClass: "video-wrap"}, [n("div", {staticClass: "video-content"}, [n("video-player", {
                ref: "videoplayer",
                class: ["videoplayer", t.isChrome ? "chrome-video" : ""],
                attrs: {title: t.title, options: t.playerOptions},
                on: {
                    ended: function (e) {
                        return t.goback(e)
                    }, pause: function (e) {
                        t.isShowTitle = !0
                    }, play: function (e) {
                        t.isShowTitle = !1
                    }
                }
            }), t.isShowTitle ? n("div", {staticClass: "video-title"}, [t._v("\n            " + t._s(t.title) + "\n        ")]) : t._e(), n("i", {
                staticClass: "ivu-icon ivu-icon-ios-close",
                attrs: {"data-log-an": "close-video", "data-log-title": "close-video"},
                on: {click: t.closeVideo}
            })], 1)]) : t._e()
        }), [], !1, null, "f0aaec72", null)), R = L.exports, N = n("VYaa"), B = {
            name: "Marquee", props: {num: Number, marqueeHeight: Number}, data: function () {
                return {px: 0, maxPx: 0, stStop: null, stUp: null}
            }, mounted: function () {
                this.num > 1 && (this.maxPx = this.num * this.marqueeHeight, this.moveUp())
            }, methods: {
                moveUp: function () {
                    var t = this;
                    this.px % this.marqueeHeight == 0 || 0 === this.px ? this.stStop = setTimeout((function () {
                        t.px++, t.moveUp()
                    }), 3e3) : this.stUp = setTimeout((function () {
                        t.px++, t.moveUp()
                    }), 16.7), this.px > this.maxPx && (this.px = 0)
                }
            }, watch: {
                num: {
                    handler: function (t) {
                        t > 1 && (this.maxPx = t * this.marqueeHeight, this.moveUp())
                    }
                }, marqueeHeight: {
                    handler: function (t) {
                        this.num > 1 && (this.maxPx = this.num * t, this.stStop && clearTimeout(this.stStop), this.stUp && clearTimeout(this.stUp), this.moveUp())
                    }
                }, deep: !0
            }
        }, j = B, F = Object(x.a)(j, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {
                staticClass: "features-marquee-container-controller",
                style: "transform:translateY(-" + t.px + "px);"
            }, [t._t("default")], 2)
        }), [], !1, null, null, null), z = F.exports, V = {
            name: "HeaderPanel",
            components: {
                FateImage: h.a,
                FoldText: f.a,
                ContrastPanel: w,
                DataCard: T,
                TelphoneLists: A.a,
                EmailLists: D.a,
                CompanyLittleVideo: R,
                MonitorEntry: N.a,
                CMarquee: z
            },
            data: function () {
                return {
                    tplData: window.pageData.result,
                    websiteUrl: Object(p.c)(window.pageData.result.website),
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    isCollected: window.pageData.result.isCollected,
                    collectionTip: !1,
                    isContrast: !1,
                    newsData: {},
                    isMakeQrCode: !1,
                    isShowVedio: !1,
                    loginStatus: window.loginStatus,
                    monitorStatus: window.pageData.result.isMonitor,
                    showCopy: !1,
                    isShowCode: !1,
                    enterShow: !1,
                    copySocialCode: !1,
                    codeFlag: !0
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            computed: {
                basicTabs: function () {
                    return this.newTabs.find((function (t) {
                        return "basic" === t.id
                    })).children
                }, mapUrl: function () {
                    var t = "/map";
                    return this.tplData.regAddrDetail && this.tplData.regAddrDetail.lng && this.tplData.regAddrDetail.lat && (t += "?lng=" + this.tplData.regAddrDetail.lng + "&lat=" + this.tplData.regAddrDetail.lat + "&radius=5"), t
                }
            },
            mounted: function () {
                var t = this;
                setTimeout((function () {
                    "cooperation" === Object(p.e)().target && t.onShowDataCard()
                }), 1e3), this.gitList()
            },
            methods: {
                getPCTopCode: function () {
                    var t = window.location.protocol + "//" + window.location.host + "/m/detail/onecodemultipurpose?pid=" + window.pageData.result.pid + "&fr=fr_aiqicha";
                    if (this.codeFlag) {
                        new O.a(this.$refs.pctopqrCodeUrl, {
                            text: t,
                            width: 108,
                            height: 108,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: O.a.CorrectLevel.H
                        });
                        this.codeFlag = !1
                    }
                    this.isShowCode = !0
                }, setNearbyCompany: function () {
                    window.localStorage.setItem("address", window.pageData.result.addr)
                }, onShowDataReport: function () {
                    this.$emit("handleDataReport")
                }, onShowDataCard: function () {
                    this.$refs.dataCard.show = !0
                }, gitList: function () {
                    var t = this, e = "/yuqing/hotpotNewsAjax";
                    this.pid && (e = "/yuqing/hotpotNewsAjax?pid=" + this.pid), this.$http.get(e).then((function (e) {
                        0 === e.status ? "[]" !== d()(e.data) && "{}" !== d()(e.data) ? (t.newsData = e.data, e.data.list.length > 1 && t.newsData.list.push(e.data.list[0])) : t.newsData = null : t.$Message.warning(e.msg || "接口错误")
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }, scroll: function () {
                    var t = this.$refs.con1;
                    t.style.marginTop = "-42px", this.animate = !this.animate;
                    var e = this;
                    setTimeout((function () {
                        e.mockData.push(e.mockData[0]), e.mockData.shift(), t.style.marginTop = "0px", e.animate = !e.animate
                    }), 500)
                }, shareWeibo: function () {
                    var t = "http://v.t.sina.com.cn/share/share.php?url=" + window.location.href + "&title=" + this.tplData.title + "&appkey=2852299158&pic=" + this.tplData.shareLogo + "&searchPic=true";
                    window.open(t, "_blank", "toolbar=0, scrollbars=1, status=0,resizable=1, height=400, width=600")
                }, handelCollect: function (t) {
                    var e = this;
                    0 !== window.pageData.isLogin ? "collectioned" === t ? this.collectionTip = !0 : this.$http.get("/my/addcollectajax?pid=" + this.pid).then((function (t) {
                        0 === t.status ? e.isCollected = !0 : e.$Message.warning(t.msg || "接口错误")
                    })).catch((function (t) {
                        e.$Message.error(t.msg || "接口错误")
                    })) : this.$parent.$children[0].$refs.login.handleLogin()
                }, ok: function () {
                    var t = this;
                    this.$http.get("/my/delcollectajax?pid=" + this.pid).then((function (e) {
                        0 === e.status ? t.isCollected = !1 : t.$Message.warning(e.msg || "接口错误")
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }, handelContrast: function () {
                    window.localStorage ? this.isContrast = !0 : this.$Message.warning("当前浏览器不支持对比功能")
                }, close: function () {
                    this.isContrast = !1
                }, openClaimUrl: function () {
                    0 !== window.pageData.isLogin ? window.open(this.tplData.claimUrl, "_blank") : this.$parent.$children[0].$refs.login.handleLogin()
                }, onCopy: function (t) {
                    var e = document.createElement("textarea");
                    e.value = t, document.body.appendChild(e), e.select(), document.execCommand("copy") && (document.execCommand("copy"), this.$Message.success("复制成功")), document.body.removeChild(e)
                }, onshowCopy: function () {
                    this.showCopy = !0
                }, onHideCopy: function () {
                    this.showCopy = !1
                }, enterImg: function () {
                    this.enterShow = !0
                }, leaveImg: function () {
                    this.enterShow = !1
                }, enterSocialCode: function () {
                    this.copySocialCode = !0
                }, leaveSocialCode: function () {
                    this.copySocialCode = !1
                }, goBusinessInfo: function () {
                    if (document.getElementById("basic-business")) Object(p.j)("#basic-business", 135); else {
                        var t = "\n                    " + window.location.protocol + "//" + window.location.host + window.location.pathname + "?tab=basic&subtab=business\n                ";
                        window.location.href = t
                    }
                }, moreHotNews: function () {
                    if (document.getElementById("koubei-news")) Object(p.j)("#koubei-news", 135); else {
                        var t = "\n                    " + window.location.protocol + "//" + window.location.host + window.location.pathname + "?tab=koubei&subtab=news\n                ";
                        window.location.href = t
                    }
                }
            }
        }, H = V, W = (n("g7mt"), n("DUqo"), Object(x.a)(H, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "detail-header"}, [i("div", {staticClass: "header-top"}, [i("div", {
                staticClass: "header-logo",
                on: {mouseenter: t.enterImg, mouseleave: t.leaveImg}
            }, [i("fate-image", {
                attrs: {
                    src: t.tplData.entLogo,
                    word: t.tplData.entLogoWord,
                    w: 200
                }
            }), t.tplData.videopath ? i("img", {
                staticClass: "vedio-btn",
                attrs: {
                    src: n("tDTK"),
                    alt: "play-video-btn",
                    "data-log-an": "open-video-btn",
                    "data-log-title": "open-video-btn"
                },
                on: {
                    click: function (e) {
                        t.isShowVedio = !0
                    }
                }
            }) : t._e(), t.tplData.entLogo && t.enterShow ? i("div", {staticClass: "logo-box"}, [i("img", {
                attrs: {
                    src: t.tplData.entLogo,
                    alt: "logo"
                }
            })]) : t._e()], 1), i("div", {staticClass: "header-content"}, [i("div", {
                staticClass: "code-box",
                on: {
                    mouseleave: function (e) {
                        t.isShowCode = !1
                    }
                }
            }, [i("img", {
                staticClass: "pc-top-code",
                attrs: {
                    "data-log-an": "pc-top-code",
                    "data-log-title": "pc-top-code",
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/pc-top-code.png",
                    alt: "pc-top-code"
                },
                on: {mouseenter: t.getPCTopCode}
            }), i("div", {
                directives: [{name: "show", rawName: "v-show", value: t.isShowCode, expression: "isShowCode"}],
                staticClass: "code-dialog-wrap"
            }, [i("div", {staticClass: "code-dialog"}, [i("div", {staticClass: "code-wrap"}, [i("div", {staticClass: "pctop-qrcodeurl-wrap"}, [i("div", {
                ref: "pctopqrCodeUrl",
                staticClass: "pctop-qrcodeurl"
            }, [i("img", {
                staticClass: "pctop-qrcode-logo",
                attrs: {src: "https://xinpub.cdn.bcebos.com/aiqicha/pctop-qrcode-logo.png", alt: "pctop-qrcode-logo"}
            })])]), i("img", {
                staticClass: "scan-code",
                attrs: {src: "https://xinpub.cdn.bcebos.com/aiqicha/scan-code.png", alt: "scan-code"}
            })]), t._m(0)])])]), i("div", {staticClass: "content-title"}, [i("h2", {staticClass: "name"}, [t._v(t._s(t.tplData.entName))]), 2 === t.tplData.isClaim ? i("a", {
                staticClass: "claim",
                attrs: {"data-log-an": "detail-claimed-btn", "data-log-title": "detail-claimed-btn"},
                on: {click: t.openClaimUrl}
            }, [t._v("已认领")]) : 4 === t.tplData.isClaim ? i("Tooltip", {
                staticClass: "claim-tooltip",
                attrs: {"max-width": "488", theme: "light"}
            }, [i("a", {
                staticClass: "claim",
                attrs: {"data-log-an": "detail-claim-btn", "data-log-title": "detail-claim-btn"},
                on: {click: t.openClaimUrl}
            }, [t._v("我要认领")]), i("div", {
                staticClass: "claim-tooltip-content",
                attrs: {slot: "content"},
                slot: "content"
            }, [i("img", {
                staticClass: "image",
                attrs: {src: n("bzJM")}
            }), i("div", [t._v("完成企业认领，您将享受：")]), i("p", [t._v("自主管理企业信息、百度官网试用特权")]), i("div", [t._v("助您树立企业权威形象，寻求商机、获取千万流量！")]), i("a", {
                attrs: {
                    "data-log-an": "detail-claim-btn",
                    "data-log-title": "detail-claim-btn"
                }, on: {click: t.openClaimUrl}
            }, [t._v("立即认领")])])]) : t._e(), i("div", {staticClass: "operation"}, [t.isCollected ? i("p", {
                staticClass: "collect collected-btn",
                attrs: {"data-log-title": "collected-btn"},
                on: {
                    click: function (e) {
                        return t.handelCollect("collectioned")
                    }
                }
            }, [i("span", {staticClass: "icon-collectioned heder-icon"}), t._v("已关注\n                    ")]) : i("p", {
                staticClass: "collect collect-btn",
                attrs: {"data-log-title": "collected-btn"},
                on: {
                    click: function (e) {
                        return t.handelCollect("collection")
                    }
                }
            }, [i("span", {staticClass: "icon-collection heder-icon"}), t._v("关注\n                    ")]), i("Modal", {
                attrs: {title: "提示"},
                on: {"on-ok": t.ok},
                model: {
                    value: t.collectionTip, callback: function (e) {
                        t.collectionTip = e
                    }, expression: "collectionTip"
                }
            }, [t._v("\n                        是否取消关注？\n                    ")]), i("div", {staticClass: "risk-monitor"}, [i("monitor-entry", {
                attrs: {
                    pid: t.pid,
                    "monitor-status": t.monitorStatus,
                    "login-status": t.loginStatus
                }
            })], 1)], 1)], 1), t.tplData.labels ? i("div", {staticClass: "tags-list"}, [t._l(t.tplData.labels, (function (e, n) {
                return ["formernames" !== n && "flagForCpt" !== n && "revoked" !== n && "closed" !== n ? i("span", {
                    key: n,
                    staticClass: "zx-ent-tag",
                    class: e.style
                }, [t._v("\n                        " + t._s(e.text) + "\n                    ")]) : "formernames" === n ? i("Poptip", {
                    key: n,
                    staticClass: "zx-ent-tag zx-ent-tag-formernames purple",
                    attrs: {trigger: "hover", placement: "bottom"}
                }, [i("Button", [t._v(" " + t._s(e.text) + " ")]), i("Icon", {attrs: {type: "ios-arrow-down"}}), e.formerNamesWithDate.length > 0 ? i("ul", {
                    staticClass: "content",
                    attrs: {slot: "content"},
                    slot: "content"
                }, t._l(e.formerNamesWithDate, (function (e, n) {
                    return i("li", {
                        key: n,
                        staticClass: "poptip-txt"
                    }, [i("p", [t._v(t._s(e.name))]), i("p", {staticClass: "content-date"}, [t._v(t._s(e.fromDate) + " 至 " + t._s(e.endDate))])])
                })), 0) : i("ul", {
                    staticClass: "content",
                    attrs: {slot: "content"},
                    slot: "content"
                }, t._l(e.names, (function (e, n) {
                    return i("li", {key: n, staticClass: "poptip-txt"}, [i("p", [t._v(t._s(e))])])
                })), 0)], 1) : "revoked" === n || "closed" === n ? i("Poptip", {
                    key: n,
                    staticClass: "zx-ent-tag red",
                    attrs: {trigger: "hover", placement: "bottom"}
                }, [i("Button", [t._v(" " + t._s(e.text) + " ")]), i("Icon", {attrs: {type: "ios-arrow-down"}}), i("ul", {
                    staticClass: "contnet",
                    attrs: {slot: "content"},
                    slot: "content"
                }, [i("li", [t._v(t._s(e.remark))]), i("li", {staticClass: "closed-tag"}, [t._v("\n                                " + t._s("revoked" === n ? "吊销日期：" : "注销日期：") + t._s(e.revokeDate || "-") + "\n                            ")]), i("li", {staticClass: "closed-tag"}, [t._v("\n                                " + t._s("revoked" === n ? "吊销原因：" : "注销原因：") + t._s(e.cancellationReason || "-") + "\n                            ")])])], 1) : t._e()]
            }))], 2) : t._e(), t.tplData.legalPerson || t.tplData.regCapital || t.tplData.unifiedCode ? i("div", {staticClass: "business-info"}, [t.tplData.legalPerson && "-" !== t.tplData.legalPerson && t.tplData.legalPerson.length > 10 ? i("Poptip", {
                attrs: {
                    trigger: "hover",
                    placement: "bottom",
                    content: t.tplData.legalPerson,
                    width: "268"
                }
            }, [i("div", {staticClass: "legal-representative ellipsis-line-1"}, [t._v("\n                        " + t._s(t.tplData.personTitle) + "：\n                        "), t.tplData.personLink ? i("a", {
                attrs: {
                    target: "_blank",
                    href: t.tplData.personLink,
                    "data-log-an": "detail-header",
                    "data-log-title": "detail-header-person"
                }
            }, [t._v("\n                            " + t._s(t.tplData.legalPerson) + "\n                        ")]) : i("span", [t._v(t._s(t.tplData.legalPerson))])])]) : t.tplData.legalPerson && "-" !== t.tplData.legalPerson && t.tplData.legalPerson.length <= 10 ? i("div", {staticClass: "legal-representative ellipsis-line-1"}, [t._v("\n                    " + t._s(t.tplData.personTitle) + "：\n                    "), t.tplData.personLink ? i("a", {
                attrs: {
                    target: "_blank",
                    href: t.tplData.personLink,
                    "data-log-an": "detail-header",
                    "data-log-title": "detail-header-person"
                }
            }, [t._v("\n                        " + t._s(t.tplData.legalPerson) + "\n                    ")]) : i("span", [t._v(t._s(t.tplData.legalPerson))])]) : t._e(), t.tplData.regCapital && "-" !== t.tplData.regCapital && t.tplData.regCapital.length > 23 ? i("Poptip", {
                attrs: {
                    trigger: "hover",
                    placement: "bottom",
                    content: t.tplData.regCapital
                }
            }, [i("div", {staticClass: "registered-capital ellipsis-line-1"}, [t._v("\n                        注册资本：\n                        "), i("span", [t._v(t._s(t.tplData.regCapital))])])]) : t.tplData.regCapital && "-" !== t.tplData.regCapital && t.tplData.regCapital.length <= 23 ? i("div", {staticClass: "registered-capital ellipsis-line-1"}, [t._v("\n                    注册资本：\n                    "), i("span", [t._v(t._s(t.tplData.regCapital))])]) : t._e(), i("div", {
                staticClass: "social-credit-code",
                on: {mouseleave: t.leaveSocialCode}
            }, [t._v("\n                    统一社会信用代码：\n                    "), i("span", {on: {mouseenter: t.enterSocialCode}}, [t._v(t._s(t.tplData.unifiedCode))]), i("span", {
                staticClass: "more-businessinfo",
                attrs: {"data-log-title": "detail-header-businessinfo", "data-log-an": "detail-header-businessinfo"},
                on: {click: t.goBusinessInfo}
            }, [t._v("\n                        更多工商信息\n                    ")]), t.copySocialCode ? i("span", {
                staticClass: "hide-button text-icon-middle",
                attrs: {
                    "data-log-an": "detail-header-unifiedCode-copy",
                    "data-log-title": "detail-header-unifiedCode-copy"
                },
                on: {
                    click: function (e) {
                        return t.onCopy(t.tplData.unifiedCode)
                    }
                }
            }, [i("i", {staticClass: "icon-copy"}), t._v("复制\n                    ")]) : t._e()])], 1) : t._e(), i("div", {staticClass: "content-info"}, [i("div", {staticClass: "content-info-child"}, [i("telphone-lists"), i("email-lists"), 6 !== t.tplData.isClaim ? i("span", {staticClass: "edit-tips"}, [2 === t.tplData.isClaim ? i("Tooltip", {
                staticClass: "edit-tooltip",
                attrs: {content: "可前往个人中心修改企业基本信息，给客户呈现企业最新信息，避免错失良机。", "max-width": "200", theme: "light"}
            }, [i("a", {
                staticClass: "edit",
                on: {click: t.openClaimUrl}
            }, [i("i", {staticClass: "icon-edit"}), t._v("\n                                编辑该企业信息\n                            ")])]) : [t._v("\n                            认领企业即可编辑信息，\n                            "), i("a", {
                staticClass: "edit",
                on: {click: t.openClaimUrl}
            }, [t._v("去认领")])]], 2) : t._e()], 1), i("div", {staticClass: "content-info-child"}, [i("div", {staticClass: "content-info-child-left"}, [i("div", [i("span", {staticClass: "label"}, [t._v("网址：")]), t.tplData.website && "-" !== t.tplData.website ? i("a", {
                staticClass: "website",
                attrs: {
                    href: t.websiteUrl,
                    target: "_blank",
                    "data-log-an": "detail-head-website",
                    "data-log-title": "detail-head-website"
                }
            }, [t.tplData.website.length > 48 ? i("Poptip", {
                staticClass: "website-poptip",
                attrs: {trigger: "hover", placement: "bottom", content: t.tplData.website}
            }, [t._v("\n                                    " + t._s(t.tplData.website.slice(0, 48)) + "...\n                                ")]) : [t._v(t._s(t.tplData.website))]], 2) : i("span", {staticClass: "child-data text-gray"}, [t._v("暂无网址")])])]), i("div", {staticClass: "content-info-child-right address"}, [i("div", {on: {mouseleave: t.onHideCopy}}, [i("span", {staticClass: "label"}, [t._v("地址：")]), t.tplData.addr && "-" !== t.tplData.addr ? i("span", {
                staticClass: "child-data",
                on: {
                    mouseenter: function (e) {
                        return t.onshowCopy()
                    }
                }
            }, [t.tplData.addr.length > 28 ? i("Poptip", {
                staticClass: "website-poptip",
                attrs: {trigger: "hover", placement: "bottom", content: t.tplData.addr}
            }, [t._v("\n                                    " + t._s(t.tplData.addr.slice(0, 28)) + "...\n                                ")]) : [t._v(t._s(t.tplData.addr))]], 2) : i("span", {staticClass: "child-data text-gray"}, [t._v("暂无地址")]), t.tplData.addr && "-" !== t.tplData.addr ? i("a", {
                staticClass: "hide-button head-btn",
                attrs: {
                    href: t.mapUrl,
                    "data-log-an": "detail-head-nearby-company",
                    "data-log-title": "detail-head-nearby-company"
                },
                on: {click: t.setNearbyCompany}
            }, [t._v("\n                                附近公司\n                            ")]) : t._e(), t.showCopy ? i("span", {
                staticClass: "hide-button text-icon-middle head-btn",
                attrs: {"data-log-an": "detail-head-copy", "data-log-title": "address"},
                on: {
                    click: function (e) {
                        return t.onCopy(t.tplData.addr)
                    }
                }
            }, [i("i", {staticClass: "icon-copy"}), t._v("复制\n                            ")]) : t._e()])])]), i("div", {staticClass: "content-info-child-brief"}, [i("fold-text", {
                staticClass: "child-data",
                class: {"text-gray": !t.tplData.describe || "-" === t.tplData.describe},
                attrs: {content: t.tplData.describe && "-" !== t.tplData.describe ? t.tplData.describe : "暂无简介", line: 1}
            }, [i("span", {
                staticClass: "brief",
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("简介：")])])], 1)]), i("div", {staticClass: "content-card"}, [t.tplData.firstInvestor ? i("a", {
                staticClass: "item",
                attrs: {
                    "data-log-an": "detail-header-card",
                    "data-log-title": "invest",
                    href: "/invest?investorId=" + t.tplData.firstInvestor.investorId,
                    target: "_blank"
                }
            }, [i("fate-image", {
                attrs: {
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/investor.png",
                    size: "small"
                }
            }), i("div", {staticClass: "card-right"}, [i("p", [t._v("投资机构：" + t._s(t.tplData.firstInvestor.investorName))]), i("p", [t._v("企业投资机构信息整合")])])], 1) : t._e(), t.tplData.projectLink ? i("a", {
                staticClass: "item",
                attrs: {
                    "data-log-an": "detail-header-card",
                    "data-log-title": "project",
                    href: "/company_detail_" + t.tplData.pid + "?tab=companyDevelop&subtab=" + t.tplData.projectLink.id,
                    target: "_blank"
                }
            }, [i("fate-image", {
                attrs: {
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/project.png",
                    size: "small"
                }
            }), t._m(1)], 1) : t._e(), i("a", {
                staticClass: "item",
                attrs: {
                    href: "/relations?pid=" + t.tplData.pid,
                    "data-log-an": "detail-header-card",
                    "data-log-title": "relations",
                    target: "_blank"
                }
            }, [i("fate-image", {
                attrs: {
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/relations.png",
                    size: "small"
                }
            }), t._m(2)], 1), i("a", {
                staticClass: "item",
                attrs: {
                    "data-log-an": "detail-header-card",
                    "data-log-title": "stockchart",
                    href: "/relations/stockchart?pid=" + t.tplData.pid,
                    target: "_blank"
                }
            }, [i("fate-image", {
                attrs: {
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/stockchart.png",
                    size: "small"
                }
            }), t._m(3)], 1), !+t.basicTabs.find((function (t) {
                return "finalbenefit" === t.id
            })).available || t.tplData.firstInvestor && t.tplData.projectLink ? t._e() : i("a", {
                staticClass: "item",
                attrs: {
                    href: "/relations/finalbenefit?pid=" + t.tplData.pid,
                    target: "_blank",
                    "data-log-an": "detail-header-card",
                    "data-log-title": "finalbenefit"
                }
            }, [i("fate-image", {
                attrs: {
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/finalbenefit.png",
                    size: "small"
                }
            }), t._m(4)], 1), !+t.basicTabs.find((function (t) {
                return "doubtcontroller" === t.id
            })).available || t.tplData.firstInvestor || t.tplData.projectLink ? t._e() : i("a", {
                staticClass: "item",
                attrs: {
                    href: "/relations/doubtcontroller?pid=" + t.tplData.pid,
                    target: "_blank",
                    "data-log-an": "detail-header-card",
                    "data-log-title": "doubtcontroller"
                }
            }, [i("fate-image", {
                attrs: {
                    src: "https://xinpub.cdn.bcebos.com/aiqicha/doubtcontroller.png",
                    size: "small"
                }
            }), t._m(5)], 1)])]), i("div", {staticClass: "header-vip-button"}, [t.tplData.entLogo && 0 !== t.tplData.entLogo.length && "/static/pc/photo/logo.png" !== t.tplData.entLogo ? t._e() : i("a", {
                attrs: {
                    href: t.tplData.claimUrl,
                    target: "_blank",
                    "data-log-an": "detail-header",
                    "data-log-title": "detail-header-vip-modify"
                }
            }, [i("i", {staticClass: "icon-picture"}), t._v("修改企业头像\n            ")]), t._m(6)]), t.tplData.cptType && 0 != +t.tplData.cptType ? i("div", {staticClass: "detail-switch-wrap"}, [i("span", {staticClass: "switch-item switch-official"}, [t._v("官方信息")]), 1 == +t.tplData.cptType ? i("a", {
                staticClass: "switch-item switch-refer",
                attrs: {
                    href: "/detail/referinfo?pid=" + t.pid,
                    "data-log-an": "detail-header",
                    "data-log-title": "detail-header-switch"
                }
            }, [t._v("自主信息")]) : t._e(), 3 == +t.tplData.cptType || 4 == +t.tplData.cptType ? i("a", {
                staticClass: "switch-item switch-refer",
                attrs: {
                    href: "/detail/card?pid=" + t.pid,
                    "data-log-an": "detail-header",
                    "data-log-title": "detail-header-switch"
                }
            }, [t._v("自主信息")]) : t._e()]) : t._e()]), i("div", {
                ref: "marquee",
                staticClass: "header-bottom"
            }, [t.newsData && 0 !== t.newsData.list.length ? i("div", {staticClass: "bottom-news"}, [i("span", {staticClass: "icon-hot"}), i("span", {staticClass: "new-tag"}, [t._v("热点新闻：")]), i("c-marquee", {
                staticClass: "bottom-news-marquee",
                attrs: {num: t.newsData.list.length - 1, "marquee-height": 42}
            }, [i("div", {staticClass: "content-wrap"}, t._l(t.newsData.list, (function (e, n) {
                return i("div", {key: n, staticClass: "bottom-news-content"}, [i("a", {
                    staticClass: "bottom-news-title",
                    attrs: {
                        href: e.link,
                        "data-log-an": "detail-header",
                        "data-log-title": "detail-header-hotnews",
                        target: "_blank"
                    }
                }, [t._v("\n                            " + t._s(e.title) + "\n                        ")]), i("span", {staticClass: "bottom-news-time"}, [t._v(t._s(e.time))]), t.newsData && t.newsData.total > 5 ? i("span", {
                    staticClass: "bottom-more",
                    attrs: {"data-log-an": "detail-header", "data-log-title": "detail-header-morehotnews"},
                    on: {click: t.moreHotNews}
                }, [t._v("查看更多")]) : t._e()])
            })), 0)])], 1) : t._e(), i("div", {staticClass: "bottom-operation"}, [i("p", {
                attrs: {
                    "data-log-an": "detail-correct-btn",
                    "data-log-title": "detail-correct-btn"
                }, on: {click: t.onShowDataReport}
            }, [i("span", {staticClass: "icon-correct"}), t._v("数据纠错\n            ")]), t.tplData.cptflag && 1 == +t.tplData.cptflag ? i("p", {
                attrs: {
                    "data-log-an": "detail-card-btn",
                    "data-log-title": "detail-card-btn"
                }, on: {click: t.onShowDataCard}
            }, [i("span", {staticClass: "icon-card"}), t._v("递名片\n            ")]) : t._e(), i("p", {
                attrs: {
                    "data-log-title": "detail-contrast-btn",
                    "data-log-an": "detail-contrast-btn"
                }, on: {click: t.handelContrast}
            }, [i("span", {staticClass: "icon-new-contrast heder-icon"}), t._v("企业对比\n            ")])])]), t.tplData.videopath ? i("div", {staticClass: "comp-video"}, [i("company-little-video", {
                attrs: {
                    "video-url": t.tplData.videopath,
                    company: t.tplData.entName,
                    "show-video": t.isShowVedio
                }, on: {
                    closeVideo: function (e) {
                        t.isShowVedio = !1
                    }
                }
            })], 1) : t._e(), i("Drawer", {
                attrs: {closable: !1, width: 260},
                model: {
                    value: t.isContrast, callback: function (e) {
                        t.isContrast = e
                    }, expression: "isContrast"
                }
            }, [i("contrast-panel", {
                attrs: {data: t.tplData},
                on: {closeDrawer: t.close}
            })], 1), t.tplData.cptflag && 1 == +t.tplData.cptflag ? i("data-card", {ref: "dataCard"}) : t._e()], 1)
        }), [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("p", {staticClass: "scan-tips"}, [n("span", [t._v("爱企查")]), t._v("或"), n("span", [t._v("百度APP")]), t._v("扫一扫查看详情")])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "card-right"}, [n("p", [t._v("品牌项目")]), n("p", [t._v("品牌及项目汇总")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "card-right"}, [n("p", [t._v("企业图谱")]), n("p", [t._v("发现企业架构")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "card-right"}, [n("p", [t._v("股权穿透图")]), n("p", [t._v("挖掘深层股权结构")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "card-right"}, [n("p", [t._v("企业受益股东")]), n("p", [t._v("解析企业受益股东")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "card-right"}, [n("p", [t._v("疑似实际控制人")]), n("p", [t._v("算法分析企业实控人")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("a", {
                attrs: {
                    href: "/feedback/infoextension?type=qy&from=xindetail",
                    target: "_blank",
                    "data-log-an": "detail-header",
                    "data-log-title": "detail-header-vip-get"
                }
            }, [n("i", {staticClass: "icon-vip"}), t._v("获取企业认证\n            ")])
        }], !1, null, "2e23b298", null)), q = W.exports, U = n("gU1P"), Y = {
            props: {isSimple: {type: Boolean, default: !1}},
            components: {CMarquee: z, GuideDialog: U.a},
            data: function () {
                return {
                    limitForward: !1,
                    limitStatus: "",
                    examplesPid: "",
                    alreadyCode: "",
                    guideType: "1",
                    guideTitle: "",
                    marqueeHeight: 0,
                    selfIntelData: [],
                    selfRiskTotal: "",
                    unionRiskTotal: "",
                    changeNoticeTotal: "",
                    riskLink: ""
                }
            },
            computed: {
                pid: function () {
                    return window.pageData.result.pid
                }
            },
            mounted: function () {
                this.getInfo()
            },
            methods: {
                getInfo: function () {
                    var t = this;
                    this.$refs.marquee && (this.marqueeHeight = Math.round(this.$refs.marquee.offsetHeight)), this.$http.get("/risk/riskBannerTotalajax?pid=" + this.pid).then((function (e) {
                        if (0 === e.status) if (t.selfIntelData = e.data.selfIntelData || [], t.selfRiskTotal = e.data.selfRiskTotal, t.unionRiskTotal = e.data.unionRiskTotal, t.changeNoticeTotal = e.data.changeNoticeTotal, e.data.selfIntelData.length > 1 && t.selfIntelData.push(e.data.selfIntelData[0]), t.selfRiskTotal > 0 || t.unionRiskTotal > 0 || t.changeNoticeTotal > 0) {
                            var n = t.selfRiskTotal > 0 ? 1 : t.unionRiskTotal > 0 ? 2 : 3;
                            t.riskLink = "/risk/riskindex?pid=" + t.pid + "&tab=" + n
                        } else t.riskLink = ""
                    }))
                }, numCount: function (t) {
                    return Object(p.h)(t)
                }, jumpToRisk: function (t) {
                    var e = this;
                    this.$http.get("/risk/riskIndexAjax?pid=" + this.pid).then((function (n) {
                        if (0 === n.status) {
                            if (n.data.limitForward) {
                                var i = n.data.limitForward, r = i.limitStatus, a = void 0 === r ? "" : r,
                                    o = i.examplesPid, s = void 0 === o ? "" : o, l = i.alreadyCode,
                                    u = void 0 === l ? "" : l;
                                e.limitForward = !0, e.limitStatus = a, e.examplesPid = s, e.alreadyCode = u
                            }
                            if (e.limitForward) {
                                if (0 == +e.limitStatus) return e.guideType = "1", e.guideTitle = "登录后查看企业风险信息", void (e.$refs.riskGuideDialog.show = !0);
                                if (1 == +e.limitStatus) return e.guideType = e.alreadyCode ? "2" : "3", e.guideTitle = "今日查看机会用完，24点后可继续查看", void (e.$refs.riskGuideDialog.show = !0)
                            } else window.open(t, "_blank")
                        }
                    }))
                }, explainLog: function () {
                    window.rcvLog.recordShow({an: "risk-explain-show", title: "risk-explain-show"})
                }
            }
        }, G = Y, X = (n("UDuA"), Object(x.a)(G, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "risk-dynamic"}, [i("div", {staticClass: "left"}, [i("div", {staticClass: "left-title"}), i("div", {staticClass: "line"}), i("div", {staticClass: "content"}, [i("a", {
                class: ["item", t.selfRiskTotal <= 0 ? "disable-item" : ""],
                attrs: {"data-log-an": "risk-dynamic", "data-log-title": "self-risk-btn"},
                on: {
                    click: function (e) {
                        return t.jumpToRisk("/risk/riskindex?pid=" + t.pid + "&tab=1")
                    }
                }
            }, [t._v("\n                自身风险"), i("span", [t._v(t._s(t.numCount(t.selfRiskTotal)))])]), i("a", {
                class: ["item", t.unionRiskTotal <= 0 ? "disable-item" : ""],
                attrs: {"data-log-an": "risk-dynamic", "data-log-title": "union-risk-btn"},
                on: {
                    click: function (e) {
                        return t.jumpToRisk("/risk/riskindex?pid=" + t.pid + "&tab=2")
                    }
                }
            }, [t._v("\n                关联风险"), i("span", [t._v(t._s(t.numCount(t.unionRiskTotal)))])]), i("a", {
                class: ["item", t.changeNoticeTotal <= 0 ? "disable-item" : ""],
                attrs: {"data-log-an": "risk-dynamic", "data-log-title": "change-notice-btn"},
                on: {
                    click: function (e) {
                        return t.jumpToRisk("/risk/riskindex?pid=" + t.pid + "&tab=3")
                    }
                }
            }, [t._v("\n                变更提醒"), i("span", [t._v(t._s(t.numCount(t.changeNoticeTotal)))])]), t.isSimple ? t._e() : [i("a", {
                staticClass: "item",
                attrs: {href: "", target: "_blank"}
            }, [t._v("预警提醒"), i("span", [t._v(t._s(t.numCount(233)))])])], t.isSimple ? t._e() : [i("span", {staticClass: "desc"}, [t._v("聚合该企业自身存在的风险信息")])]], 2), t.riskLink ? i("a", {
                staticClass: "view",
                attrs: {href: "javascript:;", "data-log-an": "risk-dynamic", "data-log-title": "view-risks-btn"},
                on: {
                    click: function (e) {
                        return t.jumpToRisk(t.riskLink)
                    }
                }
            }, [t._v("查看风险\n            "), i("Poptip", {
                staticClass: "poptip-wrap",
                attrs: {placement: "bottom-end", trigger: "hover", width: "400", offset: 13},
                on: {"on-popper-show": t.explainLog}
            }, [i("span", {staticClass: "poptip-title icon-question"}), i("div", {
                staticClass: "poptip-content",
                attrs: {slot: "content"},
                slot: "content"
            }, [i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("自身风险")]), t._v("：从公开途径概览企业自身客观存在的司法、经营、监管等具有风险的信息。\n                    ")]), i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("关联风险")]), t._v("：追踪企业关联企业（如企业股东、投资公司、子公司等）的司法、经营、监管等具有风险的信息。\n                    ")]), i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("变更提醒")]), t._v("：查看企业自身及关联企业的法定代表人、投资人、主要人员、注册资本及对外投资等变更信息。\n                    ")])])])], 1) : t._e()]), i("div", {staticClass: "right"}, [i("div", {staticClass: "right-title"}), i("div", {staticClass: "line"}), i("div", {
                ref: "marquee",
                staticClass: "marquee-wrapper"
            }, [i("c-marquee", {
                attrs: {
                    num: t.selfIntelData.length - 1,
                    "marquee-height": t.marqueeHeight
                }
            }, [i("div", {staticClass: "content-wrap"}, [t.selfIntelData.length ? t._l(t.selfIntelData, (function (e, n) {
                return i("a", {
                    key: n,
                    staticClass: "event intel-event",
                    attrs: {href: "/risk/intel?pid=" + t.pid, target: "_blank"}
                }, [i("span", {staticClass: "time"}, [t._v(t._s(e.changeDate))]), i("span", [t._v(t._s(e.changeContent))])])
            })) : [i("a", {staticClass: "event desc"}, [i("span", [t._v("实时查看企业一手动态")])])]], 2)])], 1), t.selfIntelData.length ? i("a", {
                staticClass: "view intel-view",
                attrs: {href: "/risk/intel?pid=" + t.pid, target: "_blank"}
            }, [t._v("查看动态")]) : t._e()]), i("guide-dialog", {
                ref: "riskGuideDialog",
                attrs: {
                    type: t.guideType,
                    title: t.guideTitle,
                    "redeem-code": t.alreadyCode,
                    "has-demo": !0,
                    "demo-src": "/risk/riskindex?pid=" + t.examplesPid + "&tab=1"
                }
            }, [i("img", {attrs: {src: n("R1pC")}})])], 1)
        }), [], !1, null, "6b314b11", null)), Z = X.exports, K = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h3", {staticClass: "aqc-detail-title"}, [i("span", [t._v("股权穿透图")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }, function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h3", {staticClass: "aqc-detail-title"}, [i("span", [t._v("企业受益股东")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }, function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h3", {staticClass: "aqc-detail-title"}, [i("span", [t._v("疑似实际控制人")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], $ = n("QbLZ"), Q = n.n($), J = {
            name: "SubTabs", props: {
                tabId: {type: String, default: "basic"}, newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }, typeId: {type: String, default: ""}
            }, data: function () {
                return {showTitle: !1, titleLists: [], title: ""}
            }, computed: {
                subData: function () {
                    var t = this, e = null, n = this.newTabs.filter((function (e) {
                        return e.id === t.tabId
                    }));
                    if (n && n.length) if (n[0].children && n[0].children[0].children && n[0].children[0].children.length) {
                        var i = 0;
                        this.typeId && n[0].children.forEach((function (e, n) {
                            e.id === t.typeId && (i = n)
                        })), e = n[0].children[i].children
                    } else e = n[0].children;
                    return e
                }
            }, created: function () {
                this.init()
            }, methods: {
                init: function () {
                    var t = this, e = this.newTabs.filter((function (e) {
                        return e.id === t.tabId
                    }));
                    e && e.length && (this.title = e[0].name || e[0].title, e[0].children && e[0].children[0].children && e[0].children[0].children.length && (this.showTitle = !0, this.titleLists = e[0].children))
                }, handleClick: function (t, e) {
                    e && document.getElementById(this.tabId + "-" + t) && Object(p.j)("#" + this.tabId + "-" + t, 135)
                }, changeSubTitleId: function (t) {
                    this.showTitle && 1 === this.titleLists.length || (window.rcvLog.handleClick({
                        an: "change-tabs",
                        title: t.id
                    }), Object(p.j)("#detail-main", 120), this.$emit("changeSubTitleId", t.id))
                }
            }
        }, tt = J, et = (n("QHNo"), Object(x.a)(tt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "sub-tabs"}, [t.showTitle ? n("div", {staticClass: "sub-tabs-title"}, t._l(t.titleLists, (function (e) {
                return n("span", {
                    key: e.id,
                    class: {active: e.id === t.typeId, disable: 1 === t.titleLists.length},
                    on: {
                        click: function (n) {
                            return t.changeSubTitleId(e)
                        }
                    }
                }, [t._v("\n            " + t._s(e.name) + t._s(1 === t.titleLists.length ? t.title : "") + "\n        ")])
            })), 0) : t._e(), n("ul", t._l(t.subData, (function (e) {
                return n("li", {
                    key: e.id,
                    class: e.available ? "convenient-tab" : "disabled",
                    attrs: {id: "convenient-tab-" + e.id, "data-log-title": e.name, "data-log-an": "detail-sub-tabs"},
                    on: {
                        click: function (n) {
                            return t.handleClick(e.id, e.available)
                        }
                    }
                }, [t._v("\n            " + t._s(e.name) + "\n            "), "appinfo" === e.id ? n("em", [t._v(t._s(+e.total > 80 ? "80+" : e.total))]) : n("em", [t._v(t._s(+e.total > 99 ? "99+" : e.total))])])
            })), 0)])
        }), [], !1, null, "28ba6cbc", null)), nt = et.exports, it = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h3", {staticClass: "aqc-detail-title"}, [i("span", [t._v("工商注册")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], rt = {
            name: "BusinessTable",
            components: {FoldText: f.a, FateImage: h.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {businessData: this.initData}
            },
            mounted: function () {
            },
            methods: {}
        }, at = rt, ot = (n("A2VW"), Object(x.a)(at, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "aqc-table-list",
                attrs: {id: "basic-business"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-basic-table"}, [n("tbody", [n("tr", [n("td", [t._v(t._s(t.businessData.personTitle))]), n("td", {staticClass: "image-text-content"}, [n("div", {staticClass: "legal-person-portrait"}, [n("fate-image", {
                attrs: {
                    src: t.businessData.personLogo,
                    word: t.businessData.personLogoWord
                }
            })], 1), n("div", {staticClass: "title portrait-text"}, [t.businessData.personId ? n("a", {
                staticClass: "ellipsis-line-1",
                attrs: {href: "/person?personId=" + t.businessData.personId, target: "_blank"}
            }, [t._v("\n                            " + t._s(t.businessData.legalPerson) + "\n                        ")]) : n("p", [t._v(t._s(t.businessData.legalPerson))]), +t.businessData.compNum ? n("a", {
                staticClass: "extra-title",
                attrs: {href: t.businessData.compNumLink, target: "_blank"}
            }, [t._v("\n                            TA有" + t._s(+t.businessData.compNum > 999 ? "999+" : t.businessData.compNum) + "家企业 >\n                        ")]) : t._e()])]), n("td", [t._v("经营状态")]), n("td", [t._v(t._s(t.businessData.openStatus))])]), n("tr", [n("td", {staticClass: "table-regCapital-title"}, [t._v("注册资本")]), n("td", {staticClass: "table-regCapital-lable"}, [t._v("\n                    " + t._s(t.businessData.regCapital) + "\n                ")]), n("td", {staticClass: "table-paidinCapital-title"}, [t._v("实缴资本")]), n("td", {staticClass: "table-paidinCapital-lable"}, [t._v("\n                    " + t._s(t.businessData.paidinCapital) + "\n                ")])]), n("tr", [n("td", [t._v("曾用名")]), n("td", ["-" === t.businessData.prevEntName ? n("p", [t._v("-")]) : n("ul", t._l(t.businessData.prevEntName, (function (e) {
                return n("li", {key: e}, [t._v("\n                            " + t._s(e) + "\n                        ")])
            })), 0)]), n("td", [t._v("所属行业")]), n("td", [t._v(t._s(t.businessData.industry))])]), n("tr", [n("td", [t._v("统一社会信用代码")]), n("td", [t._v(t._s(t.businessData.unifiedCode))]), n("td", [t._v("纳税人识别号")]), n("td", [t._v(t._s(t.businessData.taxNo))])]), n("tr", [n("td", [t._v("工商注册号")]), n("td", [t._v(t._s(t.businessData.licenseNumber))]), n("td", [t._v("组织机构代码")]), n("td", [t._v(t._s(t.businessData.orgNo))])]), n("tr", [n("td", [t._v("登记机关")]), n("td", [t._v(t._s(t.businessData.authority))]), n("td", [t._v("成立日期")]), n("td", [t._v(t._s(t.businessData.startDate))])]), n("tr", [n("td", [t._v("企业类型")]), n("td", [t._v(t._s(t.businessData.entType))]), n("td", [t._v("营业期限")]), n("td", [t._v(t._s(t.businessData.openTime))])]), n("tr", [n("td", [t._v("行政区划")]), n("td", [t._v(t._s(t.businessData.district))]), n("td", [t._v("核准日期")]), n("td", [t._v(t._s(t.businessData.annualDate))])]), n("tr", [n("td", [t._v("参保人数")]), n("td", {attrs: {colspan: "3"}}, [t.businessData.insuranceInfo ? [t._v("\n                        " + t._s(t.businessData.insuranceInfo.insuranceNum) + "\n                        "), "-" !== t.businessData.insuranceInfo.insuranceNum ? [n("span", {staticClass: "use-map insurance-tip"}, [t._v("\n                                信息来源：" + t._s(t.businessData.insuranceInfo.year) + "年年报，结果仅供参考\n                            ")]), n("a", {
                staticClass: "use-map",
                attrs: {
                    href: t.businessData.insuranceInfo.reportUrl,
                    target: "_blank",
                    "data-log-an": "business-table",
                    "data-log-title": "business-table-yearReport"
                }
            }, [t._v("\n                                查看年报\n                            ")])] : t._e()] : t._e()], 2)]), n("tr", [n("td", [t._v("注册地址")]), n("td", {attrs: {colspan: "3"}}, [t._v("\n                    " + t._s(t.businessData.regAddr) + "\n                    "), "-" !== t.businessData.regAddr ? n("span", {staticClass: "use-map"}, [n("a", {
                attrs: {
                    href: "http://api.map.baidu.com/geocoder?address=" + encodeURIComponent(t.businessData.regAddr) + "&output=html",
                    target: "_blank",
                    "data-log-an": "use_map"
                }
            }, [t._v("\n                            查看地图\n                        ")])]) : t._e()])]), n("tr", [n("td", [t._v("经营范围")]), n("td", {attrs: {colspan: "3"}}, [n("fold-text", {
                attrs: {
                    content: t.businessData.scope,
                    line: 3
                }
            })], 1)])])])])
        }), it, !1, null, "6ebf8828", null)), st = ot.exports, lt = n("prJS"), ut = {
            name: "ShareholderTable",
            components: {AiTableList: lt.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    originData: this.initData,
                    config: {
                        title: "股东信息",
                        id: "basic-shareholders",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/sharesAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            type: "image-text-more",
                            name: "发起人/股东",
                            image: "logo",
                            textImage: "logoWord",
                            title: "name",
                            titleUrl: "link",
                            limitWidth: function (t) {
                                return t.pid || +t.compNum ? 150 : 300
                            },
                            extraValue: function (t) {
                                return t.pid ? "股权结构 >" : +t.compNum ? "TA有" + (+t.compNum > 999 ? "999+" : t.compNum) + "家企业 >" : ""
                            },
                            extraLink: "compNumLink",
                            width: 376
                        }, {name: "持股比例", key: "subRate", width: 120}, {
                            name: "认缴出资额",
                            key: "subMoney",
                            width: 148
                        }, {name: "实际出资额", key: "paidinMoney", width: 148}],
                        explain: "股东，即股份制公司的出资人或投资人。股东作为出资者按出资数额享有所有者的分享收益、重大决策以及选择管理者等权利。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, ct = ut, dt = Object(x.a)(ct, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), ht = dt.exports, ft = {
            name: "InvestTable", components: {AiTableList: lt.a}, props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {
                    originData: this.initData,
                    config: {
                        title: "对外投资",
                        id: "basic-invest",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/investajax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "被投资企业",
                            type: "image-text-more",
                            width: 222,
                            image: "logo",
                            textImage: "logoWord",
                            title: "entName",
                            titleUrl: "entLink",
                            extraValue: "股权穿透图 >",
                            extraLink: "stockLink",
                            isPortrait: !0,
                            truncate: 2
                        }, {
                            name: "被投资企业法定代表人/负责人",
                            type: "image-text-more",
                            width: 207,
                            image: "legalPersonLogo",
                            textImage: "legalPersonLogoWord",
                            title: "legalPerson",
                            titleUrl: "personLink",
                            isPortrait: !0,
                            extraValue: function (t) {
                                return +t.compNum ? "TA有" + (+t.compNum > 999 ? "999+" : t.compNum) + "家企业 >" : ""
                            },
                            extraLink: "compNumLink",
                            truncate: 1
                        }, {name: "成立日期", key: "startDate", width: 100, isDate: !0}, {
                            name: "投资占比",
                            key: "regRate",
                            width: 100
                        }, {name: "认缴金额", key: "regCapital", width: 100}, {
                            name: "状态", value: function (t) {
                                return "开业" === t.openStatus ? '<span class="open">' + t.openStatus + "</span>" : '<span class="close">' + t.openStatus + "</span>"
                            }, width: 60
                        }],
                        explain: "企业对外投资是相对于对内投资而言，指企业在其本身经营的主要业务以外，以有形资产或无形资产方式向其他单位进行投资，以期在未来获得投资收益的经济行为。"
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, pt = ft, gt = Object(x.a)(pt, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), vt = gt.exports, mt = n("GCOo"), yt = window.pageData.result, bt = {
            name: "HoldsTable",
            components: {FoldText: f.a, FateImage: h.a, Explain: mt.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    data: this.initData,
                    entName: yt.entName,
                    explainData: "控股企业是指通过持有某一企业一定数量的股份，而对该企业进行控制的企业。当控股企业持有某企业50%以上股份时，即成为该企业的控股企业，拥有对该企业实际做出决策的权力。"
                }
            },
            mounted: function () {
            },
            computed: {},
            methods: {
                getList: function (t) {
                    var e = this, n = {pid: yt.pid, p: t || 1, size: 10};
                    this.$http.get("/detail/holdsAjax", {params: n}).then((function (t) {
                        0 === t.status && (e.data = t.data, Object(p.j)(e.$refs["basic-hold"], 135))
                    }))
                }, onPgaeChange: function (t) {
                    this.getList(t)
                }
            }
        }, xt = bt, _t = (n("0Et3"), Object(x.a)(xt, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "basic-hold",
                staticClass: "aqc-table-list",
                attrs: {id: "basic-hold"}
            }, [i("h3", {staticClass: "aqc-detail-title"}, [t._v("\n        控股企业\n        "), i("explain", {attrs: {"explain-data": t.explainData}}), i("span", {staticClass: "aqc-detail-title-number"}, [t._v("\n            " + t._s(this.data.total > 5e3 ? "5000+" : this.data.total) + "\n        ")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })], 1), i("table", {staticClass: "aqc-detail-table holds-table"}, [t._m(0), i("tbody", {staticClass: "table-body"}, t._l(t.data.list, (function (e, n) {
                return i("tr", {key: n}, [i("td", [t._v(t._s((t.data.page - 1) * t.data.size + (n + 1)))]), i("td", [i("div", {staticClass: "image-text-content"}, [i("fate-image", {
                    attrs: {
                        src: e.logo,
                        word: e.logoWord
                    }
                }), i("div", {staticClass: "title"}, [i("a", {
                    staticClass: "ellipsis-line-2",
                    attrs: {href: "/company_detail_" + e.pid, target: "_blank"}
                }, [t._v("\n                                " + t._s(e.entName) + "\n                            ")])])], 1)]), i("td", [t._v(t._s(e.proportion) + "%")]), i("td", t._l(e.pathData, (function (e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "path-container"
                    }, [i("h5", [t._v("路径" + t._s(n + 1) + "（占比约" + t._s(e.pathpercent) + "%）")]), i("ul", {staticClass: "path-line"}, [i("li", [t._v(t._s(t.entName))]), t._l(e.pathList, (function (e, n) {
                        return i("li", {key: n}, [i("span", [i("em", [t._v(t._s(e.percent) + "%")])]), i("a", {
                            attrs: {
                                href: "/company_detail_" + e.pid,
                                target: "_blank"
                            }
                        }, [t._v(t._s(e.investComp))])])
                    }))], 2)])
                })), 0)])
            })), 0)]), t.data.total > t.data.size ? i("div", {staticClass: "aqc-table-list-pager"}, [i("page", {
                attrs: {
                    total: t.data.total,
                    "page-size": t.data.size
                }, on: {"on-change": t.onPgaeChange}
            })], 1) : t._e()])
        }), [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("thead", {staticClass: "aqc-detail-thead"}, [n("tr", {staticClass: "table-header"}, [n("td", [t._v("序号")]), n("td", [t._v("控股企业名称")]), n("td", [t._v("投资占比")]), n("td", [t._v("投资路径")])])])
        }], !1, null, "2a3245a0", null)), wt = _t.exports, Ct = {
            name: "DirectorsTable",
            components: {AiTableList: lt.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    originData: this.initData,
                    config: {
                        title: "主要人员",
                        id: "basic-directors",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/directorsAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            type: "image-text-more",
                            name: "姓名",
                            image: "logo",
                            textImage: "logoWord",
                            title: "name",
                            titleUrl: "personLink",
                            limitWidth: 150,
                            extraValue: function (t) {
                                return +t.compNum ? "TA有" + (+t.compNum > 999 ? "999+" : t.compNum) + "家企业 >" : ""
                            },
                            extraLink: "compNumLink",
                            width: 555
                        }, {name: "职务", key: "title", width: 240}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, St = Ct, kt = Object(x.a)(St, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Tt = kt.exports, Mt = {
            name: "AnnualReportTable",
            components: {AiTableList: lt.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    originData: this.initData,
                    config: {
                        title: "企业年报",
                        id: "basic-annual",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !1,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "年报",
                            key: "name",
                            width: 735
                        }, {name: "详情", value: "查看", url: "link", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Ot = Mt, At = Object(x.a)(Ot, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Dt = At.exports, Et = {
            name: "BranchTable", components: {AiTableList: lt.a}, props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {
                    originData: this.initData,
                    config: {
                        title: "分支机构",
                        id: "basic-branch",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/branchajax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "企业名称",
                            type: "image-text-only",
                            width: 351,
                            image: "logo",
                            textImage: "logoWord",
                            title: "entName",
                            titleUrl: "entLink",
                            truncate: 2
                        }, {
                            name: "负责人",
                            type: "image-text-more",
                            width: 282,
                            image: "legalPersonLogo",
                            textImage: "legalPersonLogoWord",
                            title: "legalPerson",
                            titleUrl: "personLink",
                            limitWidth: 80,
                            extraValue: function (t) {
                                return +t.compNum ? "TA有" + (+t.compNum > 999 ? "999+" : t.compNum) + "家企业 >" : ""
                            },
                            extraLink: "compNumLink"
                        }, {name: "成立日期", key: "startDate", width: 100, isDate: !0}, {
                            name: "状态", value: function (t) {
                                return "开业" === t.openStatus ? '<span class="open">' + t.openStatus + "</span>" : '<span class="close">' + t.openStatus + "</span>"
                            }, width: 60
                        }],
                        explain: "分支机构为总公司所属的不具有独立的法人地位的派出机构，与总公司属同一法人实体，其生产、销售、财务、人事等方面受总公司支配和控制。"
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, Pt = Et, It = Object(x.a)(Pt, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Lt = It.exports, Rt = {
            name: "HeadCompanyTable",
            components: {AiTableList: lt.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    originData: this.initData,
                    config: {
                        title: "总公司",
                        id: "basic-head-company",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/headCompanyAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "总企业名称",
                            type: "image-text-only",
                            width: 311,
                            image: "entLogo",
                            textImage: "entLogoWord",
                            title: "entName",
                            titleUrl: "entUrl",
                            truncate: 2
                        }, {
                            name: "总公司法定代表人",
                            type: "image-text-more",
                            width: 206,
                            image: "legalPersonLogo",
                            textImage: "legalPersonWord",
                            title: "legalPerson",
                            titleUrl: "legalPersonUrl",
                            extraValue: function (t) {
                                return +t.compNum ? "TA有" + (+t.compNum > 999 ? "999+" : t.compNum) + "家企业 >" : ""
                            },
                            extraLink: "compNumLink",
                            isPortrait: !0
                        }, {name: "注册资本", key: "regCap", width: 115}, {
                            name: "成立日期",
                            key: "startDate",
                            width: 100,
                            isDate: !0
                        }, {
                            name: "状态", value: function (t) {
                                return "" + t.openStatus
                            }, width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Nt = Rt, Bt = Object(x.a)(Nt, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), jt = Bt.exports, Ft = n("YEIV"), zt = n.n(Ft), Vt = n("v2jn"), Ht = n("rb+v"),
        Wt = window.pageData.result, qt = {
            name: "ChangeRecordTable",
            components: {TableFilter: Ht.a},
            props: {
                initData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {data: this.initData, facets: null}
            },
            created: function () {
                this.data.list.length && (this.data.list = this.diffList(this.data.list))
            },
            mounted: function () {
            },
            computed: {},
            methods: {
                getList: function (t) {
                    var e = this, n = {pid: Wt.pid, p: t || 1, size: 10};
                    this.facets && (n.f = d()(this.facets)), this.$http.get("/c/changeRecordAjax", {params: n}).then((function (t) {
                        0 === t.status && (e.facets && (t.data.facets = Q()({}, t.data.facets, e.data.facets)), e.data = Q()({}, t.data, {list: t.data.list.length > 0 ? e.diffList(t.data.list) : []}), Object(p.j)(e.$refs["basic-change"], 135))
                    }))
                }, onPgaeChange: function (t) {
                    this.getList(t)
                }, handlerFilterChange: function (t) {
                    var e = t.status, n = t.value;
                    this.facets = Q()({}, this.facets, zt()({}, e, n)), this.getList(1)
                }, diffList: function (t) {
                    var e = this;
                    return t.map((function (t) {
                        var n = t.date, i = t.fieldName, r = t.oldValue, a = t.newValue;
                        if (r === a) ; else if (/住所|场所|地址|居所|登记管辖变更|股权质押变更/.test(i)) {
                            for (var o = 0; r[o] === a[o];) o++;
                            r = r.slice(0, o) + '<span class="diff before">' + r.slice(o) + "</span>", a = a.slice(0, o) + '<span class="diff">' + a.slice(o) + "</span>"
                        } else if (/资本|出资额|资金数额|总额|出资比例/.test(i)) if ("注册资本" === i) {
                            var s = r.replace(/[,，.\d]/g, "") === a.replace(/[,，.\d]/g, ""),
                                l = !r.replace(/[,，.\d]/g, "") && !a.replace(/[,，.\d]/g, "");
                            if (s || l) {
                                var u = parseFloat(r.replace(/[,，]/g, "")), c = parseFloat(a.replace(/[,，]/g, "")), d = "";
                                if (u && c) {
                                    var h = (c - u) / u * 100;
                                    d = (h > 0 ? "+" : "") + h.toFixed(2) + "%"
                                }
                                r = '<span class="diff before">' + r + "</span>", a = d ? '<span class="diff">' + a + " (" + d + ")</span>" : '<span class="diff">' + a + "</span>"
                            } else r = '<span class="diff before">' + r + "</span>", a = '<span class="diff">' + a + "</span>"
                        } else {
                            var f = parseFloat(r.replace(/[,，]/g, "")), p = parseFloat(a.replace(/[,，]/g, "")), g = "";
                            if (f && p) {
                                var m = (p - f) / f * 100;
                                g = (m > 0 ? "+" : "") + m.toFixed(2) + "%"
                            }
                            r = '<span class="diff before">' + r + "</span>", a = g ? '<span class="diff">' + a + " (" + g + ")</span>" : '<span class="diff">' + a + "</span>"
                        } else if (/代表|投资人|股东|负责人|经营者|主要人员|董事|经理|监事|成员|接受人|发起人|合伙人|联系人/.test(i)) if (/[:：]/.test(r + a)) {
                            var y = e.diffChar(r, a);
                            r = y.oldValue.replace(/[;；]/g, "<br>"), a = y.newValue.replace(/[;；]/g, "<br>")
                        } else if (/[;；]/.test(r + a)) {
                            var b, x = r.split(/[;；]/), _ = a.split(/[;；]/), w = [];
                            for (var C in x) if (x[C]) {
                                var S = x[C].split(/[,，]/);
                                1 === S.length && (S = S[0].split(" ")), w.push(S)
                            }
                            var k = [];
                            for (var T in _) if (_[T]) {
                                var M = _[T].split(/[,，]/);
                                1 === M.length && (M = M[0].split(" ")), k.push(M)
                            }
                            var O = 0, A = [], D = [];
                            w.forEach((function (t) {
                                for (var e = O; e < k.length; e++) if (t[0] === k[e][0]) {
                                    var n = k.splice(e, 1)[0];
                                    return k.splice(O, 0, n), O++, void A.push(t)
                                }
                                D.push(t)
                            })), w = [].concat(A, D);
                            var E = Math.min(w.length, k.length), P = void 0, I = void 0;
                            for (P = 0; P < E; P++) {
                                var L = w[P], R = k[P];
                                if (/\d/.test(L[0])) break;
                                if (L[0] !== R[0]) break;
                                w[P] = L[0], k[P] = R[0];
                                for (var N = 1; N < L.length; N++) R[N] === L[N] ? (w[P] += "，" + L[N], R[N] && (k[P] += "，" + R[N])) : (w[P] += '，<span class="diff before">' + L[N] + "</span>", R[N] && (k[P] += '，<span class="diff">' + R[N] + "</span>"))
                            }
                            I = w.slice(P).map((function (t) {
                                return '<span class="diff before">' + t.join("，") + "</span>"
                            })), (b = w).splice.apply(b, [P, I.length].concat(v()(I))), I = k.slice(P).map((function (t) {
                                return '<span class="diff">' + t.join("，") + "</span>"
                            })), k.splice.apply(k, [P, I.length].concat(v()(I))), r = w.join("<br>"), a = k.join("<br>")
                        } else r = '<span class="diff before">' + r + "</span>", a = '<span class="diff">' + a + " [新增]</span>"; else if (/时间|期限/.test(i) || /注册号|邮政编码|统一社会信用代码|行政区划/.test(i) || /联系电话|币种|从业人数|股权变更/.test(i)) r = '<span class="diff before">' + r + "</span>", a = '<span class="diff">' + a + "</span>"; else {
                            var B = e.diffChar(r, a);
                            r = B.oldValue, a = B.newValue
                        }
                        return {date: n, fieldName: i, oldValue: r, newValue: a}
                    }))
                }, diffChar: function (t, e) {
                    for (var n = Object(Vt.diffChars)(t, e), i = [], r = 0, a = [], o = 0, s = 0; s < n.length; s++) n[s].added ? a[o++] = '<span class="diff">' + n[s].value + "</span>" : n[s].removed ? i[r++] = '<span class="diff before">' + n[s].value + "</span>" : (a[o++] = n[s].value, i[r++] = n[s].value);
                    return {oldValue: i.join(""), newValue: a.join("")}
                }
            }
        }, Ut = qt, Yt = (n("Dzkk"), n("qyp4"), Object(x.a)(Ut, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "basic-change",
                staticClass: "aqc-table-list",
                attrs: {id: "basic-change"}
            }, [i("h3", {staticClass: "aqc-detail-title"}, [t._v("\n        变更记录\n        "), i("span", {staticClass: "aqc-detail-title-number"}, [t._v("\n            " + t._s(this.data.total > 5e3 ? "5000+" : this.data.total) + "\n        ")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("table", {staticClass: "aqc-detail-table change-record-table"}, [t._m(0), i("tbody", {staticClass: "table-body"}, t._l(t.data.list, (function (e, n) {
                return i("tr", {key: n}, [i("td", [t._v(t._s((t.data.page - 1) * t.data.size + (n + 1)))]), i("td", [t._v(t._s(e.date))]), i("td", [t._v(t._s(e.fieldName))]), i("td", {domProps: {innerHTML: t._s(e.oldValue)}}), i("td", {domProps: {innerHTML: t._s(e.newValue)}})])
            })), 0)]), t.data.total > t.data.size ? i("div", {staticClass: "aqc-table-list-pager"}, [i("page", {
                attrs: {
                    total: t.data.total,
                    "page-size": t.data.size
                }, on: {"on-change": t.onPgaeChange}
            })], 1) : t._e(), t.data.facets ? i("div", {staticClass: "aqc-table-filter-wrapper"}, [i("table-filter", {
                attrs: {
                    placeholder: t.data.facets.changetype.name,
                    status: "changetype",
                    facets: t.data.facets
                }, on: {change: t.handlerFilterChange}
            })], 1) : t._e()])
        }), [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("thead", {staticClass: "aqc-detail-thead"}, [n("tr", {staticClass: "table-header"}, [n("td", [t._v("序号")]), n("td", [t._v("变更日期")]), n("td", [t._v("变更项目")]), n("td", [t._v("变更前")]), n("td", [t._v("变更后")])])])
        }], !1, null, "0aad428c", null)), Gt = Yt.exports, Xt = n("0TMt"), Zt = n("+dbK"), Kt = n("rXFg"), $t = n("Twwj"),
        Qt = {
            components: {GuideCard: $t.a}, data: function () {
                return {pid: window.pageData.result.pid, limitStatus: "-1", alreadyCode: "", examplesPid: ""}
            }, computed: {
                title: function () {
                    var t = "登录后查看最终受益人数据";
                    return 1 == +this.limitStatus && (t = "今日查看机会用完，24点后可继续查看"), t
                }, guideType: function () {
                    var t = "1";
                    return 1 == +this.limitStatus && (t = this.alreadyCode ? "2" : "3"), t
                }, exposureTitle: function () {
                    var t = "claim_login_popup";
                    return "2" === this.type && (t = "claim_exchange_popup"), "3" === this.type && (t = "claimvip_popup"), t
                }
            }, mounted: function () {
                var t = this;
                this.$http.get("/relations/benefitShareholderAjax?pid=" + this.pid).then((function (e) {
                    var n = e.data;
                    n.limitForward ? (t.limitStatus = n.limitForward.limitStatus || "-1", t.alreadyCode = n.limitForward.alreadyCode || "", t.examplesPid = n.limitForward.examplesPid || "", t.$emit("uploadLimit", n.limitForward)) : (t.chart = new Kt.a(n, "BenefitTable"), Object(p.l)({
                        watermark_type: "image",
                        watermark_iamge: "https://xinpub.bj.bcebos.com/aiqicha/watermark.png",
                        watermark_x: -50,
                        watermark_y: -50,
                        watermark_x_space: 50,
                        watermark_y_space: 2,
                        watermark_alpha: 1,
                        watermark_angle: 0
                    }, "BenefitTable"))
                }))
            }
        }, Jt = Qt, te = (n("frVH"), Object(x.a)(Jt, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "benefit-table",
                class: {"auto-height": "-1" !== t.limitStatus}
            }, ["-1" === t.limitStatus ? i("div", {
                staticClass: "cytoscape",
                attrs: {id: "BenefitTable"}
            }) : i("div", {
                directives: [{
                    name: "exposure",
                    rawName: "v-exposure",
                    value: {an: t.exposureTitle},
                    expression: "{an: exposureTitle}"
                }], attrs: {"data-show-id": "detail-base-benefit"}
            }, [i("div", {staticClass: "benefit"}, [i("img", {attrs: {src: n("PTNO")}}), i("guide-card", {
                attrs: {
                    type: t.guideType,
                    title: t.title,
                    "sub-title": "成为会员，可查看所有企业最终受益人数据",
                    "redeem-code": t.alreadyCode,
                    "has-demo": !0,
                    "demo-src": "/relations/finalbenefit?pid=" + t.examplesPid,
                    exposure: !0
                }
            }, [i("img", {attrs: {src: n("6P8S")}})])], 1)])])
        }), [], !1, null, "0df1f72b", null)), ee = te.exports, ne = {
            components: {GuideCard: $t.a}, data: function () {
                return {pid: window.pageData.result.pid, limitStatus: "-1", alreadyCode: "", examplesPid: ""}
            }, computed: {
                title: function () {
                    var t = "登录后查看疑似实际控制人数据";
                    return 1 == +this.limitStatus && (t = "今日查看机会用完，24点后可继续查看"), t
                }, guideType: function () {
                    var t = "1";
                    return 1 == +this.limitStatus && (t = this.alreadyCode ? "2" : "3"), t
                }, exposureTitle: function () {
                    var t = "claim_login_popup";
                    return "2" === this.type && (t = "claim_exchange_popup"), "3" === this.type && (t = "claimvip_popup"), t
                }
            }, mounted: function () {
                var t = this;
                this.$http.get("/relations/doubtControllerAjax?pid=" + this.pid).then((function (e) {
                    var n = e.data;
                    n.limitForward ? (t.limitStatus = n.limitForward.limitStatus || "-1", t.alreadyCode = n.limitForward.alreadyCode || "", t.examplesPid = n.limitForward.examplesPid || "", t.$emit("uploadLimit", n.limitForward)) : (t.chart = new Kt.a(n, "controller", !0), Object(p.l)({
                        watermark_type: "image",
                        watermark_iamge: "https://xinpub.bj.bcebos.com/aiqicha/watermark.png",
                        watermark_x: -50,
                        watermark_y: -50,
                        watermark_x_space: 50,
                        watermark_y_space: 2,
                        watermark_alpha: 1,
                        watermark_angle: 0
                    }, "controller"))
                }))
            }
        }, ie = ne, re = (n("c4Cu"), Object(x.a)(ie, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "controller-table",
                class: {"auto-height": "-1" !== t.limitStatus}
            }, ["-1" === t.limitStatus ? i("div", {
                staticClass: "cytoscape",
                attrs: {id: "controller"}
            }) : i("div", {
                directives: [{
                    name: "exposure",
                    rawName: "v-exposure",
                    value: {an: t.exposureTitle},
                    expression: "{an: exposureTitle}"
                }], staticClass: "controller", attrs: {"data-show-id": "detail-base-controller"}
            }, [i("img", {attrs: {src: n("KXKl")}}), i("guide-card", {
                attrs: {
                    type: t.guideType,
                    title: t.title,
                    "sub-title": "成为会员，可查看所有企业疑似实际控制人数据",
                    "redeem-code": t.alreadyCode,
                    "has-demo": !0,
                    "demo-src": "/relations/doubtcontroller?pid=" + t.examplesPid,
                    exposure: !0
                }
            }, [i("img", {attrs: {src: n("G4yE")}})])], 1)])
        }), [], !1, null, "25d3a0b6", null)), ae = re.exports, oe = n("jtGX"), se = n.n(oe), le = n("WB5a"), ue = n.n(le),
        ce = n("bnSt"), de = n.n(ce), he = n("k4M2"), fe = n.n(he), pe = n("y4vh"), ge = n.n(pe),
        ve = window.pageData.result.pid, me = {total: 0, page: 1, size: 1, list: []}, ye = {
            name: "basicTab",
            components: {
                ShareholderTable: ht,
                InvestTable: vt,
                HoldsTable: wt,
                SubTabs: nt,
                BusinessTable: st,
                DirectorsTable: Tt,
                AnnualReportTable: Dt,
                BranchTable: Lt,
                HeadCompanyTable: jt,
                ChangeRecordTable: Gt,
                AtlasEntrance: Xt.a,
                StockChart: Zt.a,
                BenefitTable: ee,
                ControllerTable: ae,
                GuideDialog: U.a
            },
            data: function () {
                return {
                    pid: ve,
                    data: {
                        basicData: {entName: ""},
                        shareholdersData: Q()({}, me),
                        directorsData: Q()({}, me),
                        investRecordData: Q()({}, me),
                        holdsData: Q()({}, me),
                        changeRecordData: Q()({}, me),
                        annualReportData: Q()({}, me),
                        branchsData: Q()({}, me),
                        headCompany: Q()({}, me)
                    },
                    drawStock: !1,
                    limitStatus: "-1",
                    guideTitle: "",
                    guideSubTitle: "",
                    dialogImg: "",
                    examplesPid: "",
                    alreadyCode: "",
                    limitStatusFinalbenefit: "-1",
                    limitStatusDoubtcontroller: "-1",
                    finalbenefitTime: 0,
                    doubtcontrollerTime: 0,
                    timerFinalbenefit: null,
                    timerDoubtcontroller: null,
                    finalbenefitFlag: !0,
                    doubtcontrollerFlag: !0
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            computed: {
                guideType: function () {
                    var t = "1";
                    return "doubtcontroller" === this.dialogImg && 1 == +this.limitStatusDoubtcontroller && (t = this.alreadyCode ? "2" : "3"), "finalbenefit" === this.dialogImg && 1 == +this.limitStatusFinalbenefit && (t = this.alreadyCode ? "2" : "3"), t
                }, basicTabs: function () {
                    return this.newTabs.find((function (t) {
                        return "basic" === t.id
                    })).children
                }, showChart: function () {
                    var t = [{name: "企业图谱", link: "/relations?pid=" + ve, img: se.a, disable: !1}, {
                        name: "股权穿透图",
                        link: "/relations/stockchart?pid=" + ve,
                        img: ue.a,
                        disable: !1
                    }, {name: "企业关系图谱", link: "/relations/relationsMap?pid=" + ve, img: ge.a, disable: !1}, {
                        name: "企业受益股东",
                        link: "/relations/finalbenefit?pid=" + ve,
                        img: de.a,
                        new: !0,
                        disable: !this.basicTabs.find((function (t) {
                            return "finalbenefit" === t.id
                        })).available
                    }, {
                        name: "疑似实际控制人",
                        link: "/relations/doubtcontroller?pid=" + ve,
                        img: fe.a,
                        disable: !this.basicTabs.find((function (t) {
                            return "doubtcontroller" === t.id
                        })).available
                    }], e = [];
                    return t.forEach((function (t) {
                        !t.disable && e.push(t)
                    })), e
                }
            },
            created: function () {
                this.getTabList()
            },
            activated: function () {
                window.addEventListener("scroll", this.handleScroll), this.drawStock = !0, setTimeout((function () {
                    Object(p.l)({
                        watermark_type: "image",
                        watermark_iamge: "https://xinpub.bj.bcebos.com/aiqicha/watermark.png",
                        watermark_alpha: 1,
                        watermark_x: -50,
                        watermark_y: -50,
                        watermark_x_space: 50,
                        watermark_y_space: 2,
                        watermark_angle: 0
                    }, "stock-chart")
                }), 2e3)
            },
            deactivated: function () {
                this.drawStock = !1, window.removeEventListener("scroll", this.handleScroll)
            },
            methods: {
                getTabList: function () {
                    var t = this, e = {pid: ve};
                    this.$http.get("/detail/basicAllDataAjax", {params: e}).then((function (e) {
                        0 === e.status && (t.data = Q()({}, t.data, e.data))
                    }))
                }, toLink: function (t) {
                    if ("最终受益人" === t.name) {
                        if (this.dialogImg = "finalbenefit", 0 == +this.limitStatusFinalbenefit) return this.guideTitle = "登录后查看最终受益人数据", void (this.$refs.guideDialog.show = !0);
                        if (1 == +this.limitStatusFinalbenefit) return this.guideTitle = "今日查看机会用完，24点后可继续查看", this.guideSubTitle = "成为会员，可查看所有最终受益人数据", void (this.$refs.guideDialog.show = !0)
                    }
                    if ("疑似实际控制人" === t.name) {
                        if (this.dialogImg = "doubtcontroller", 0 == +this.limitStatusDoubtcontroller) return this.guideTitle = "登录后查看疑似实际控制人数据", void (this.$refs.guideDialog.show = !0);
                        if (1 == +this.limitStatusDoubtcontroller) return this.guideTitle = "今日查看机会用完，24点后可继续查看", this.guideSubTitle = "成为会员，可查看所有疑似实际控制人数据", void (this.$refs.guideDialog.show = !0)
                    }
                    window.open(t.link, "_blank")
                }, uploadLimitFinalbenefit: function (t) {
                    this.limitStatusFinalbenefit = t.limitStatus || "-1", this.alreadyCode = t.alreadyCode || "", this.examplesPid = t.examplesPid || ""
                }, uploadLimitDoubtcontroller: function (t) {
                    this.limitStatusDoubtcontroller = t.limitStatus || "-1", this.alreadyCode = t.alreadyCode || "", this.examplesPid = t.examplesPid || ""
                }, handleScroll: function () {
                    var t = this;
                    if (this.$refs.basicFinalbenefit || this.$refs.basicDoubtcontroller) {
                        if (!(+this.limitStatusFinalbenefit > -1 && +this.limitStatusDoubtcontroller > -1) && (+this.limitStatusFinalbenefit > -1 && (this.finalbenefitFlag = !1), +this.limitStatusDoubtcontroller > -1 && (this.doubtcontrollerFlag = !1), this.finalbenefitFlag || this.doubtcontrollerFlag)) {
                            var e = void 0, n = void 0;
                            this.$refs.basicFinalbenefit && (e = this.$refs.basicFinalbenefit.offsetTop), this.$refs.basicDoubtcontroller && (n = this.$refs.basicDoubtcontroller.offsetTop);
                            var i = document.documentElement.scrollTop || document.body.scrollTop, r = window.innerHeight;
                            this.finalbenefitFlag && -1 == +this.limitStatusFinalbenefit && i + r - 418 > e && i + 120 < e ? (clearInterval(this.timerDoubtcontroller), this.timerDoubtcontroller = null, this.doubtcontrollerTime = 0, this.timerFinalbenefit || (this.timerFinalbenefit = setInterval((function () {
                                t.finalbenefitTime++, t.finalbenefitTime >= 2 && (t.finalBenefit(), t.finalbenefitFlag = !1, clearInterval(t.timerFinalbenefit))
                            }), 1e3))) : this.doubtcontrollerFlag && -1 == +this.limitStatusDoubtcontroller && i + r - 418 > n && i + 120 < n ? (clearInterval(this.timerFinalbenefit), this.timerFinalbenefit = null, this.finalbenefitTime = 0, this.timerDoubtcontroller || (this.timerDoubtcontroller = setInterval((function () {
                                t.doubtcontrollerTime++, t.doubtcontrollerTime >= 2 && (t.doubtController(), t.doubtcontrollerFlag = !1, clearInterval(t.timerDoubtcontroller))
                            }), 1e3))) : (clearInterval(this.timerFinalbenefit), clearInterval(this.timerDoubtcontroller), this.timerFinalbenefit = null, this.timerDoubtcontroller = null)
                        }
                    } else window.removeEventListener("scroll", this.handleScroll)
                }, finalBenefit: function () {
                    this.$http.get("/relations/finalBenefitajax?pid=" + window.pageData.result.pid + "&consumeNum=1")
                }, doubtController: function () {
                    this.$http.get("/relations/doubtControllerAjax?pid=" + window.pageData.result.pid + "&consumeNum=1")
                }, explainLog: function () {
                    window.rcvLog.recordShow({an: "chart-explain-show", title: "chart-explain-show"})
                }
            }
        }, be = ye, xe = (n("S20j"), Object(x.a)(be, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "basic-tab"}, [i("sub-tabs", {
                attrs: {
                    "tab-id": "basic",
                    "new-tabs": t.newTabs
                }
            }), i("div", {
                staticClass: "aqc-table-list",
                attrs: {id: "basic-charts"}
            }, [i("h3", {staticClass: "aqc-detail-title"}, [i("span", [t._v("爱企查图谱\n                "), i("Poptip", {
                staticClass: "poptip-wrap",
                attrs: {placement: "bottom-start", trigger: "hover", width: "400", offset: -13},
                on: {"on-popper-show": t.explainLog}
            }, [i("span", {staticClass: "poptip-title icon-question"}), i("div", {
                staticClass: "poptip-content",
                attrs: {slot: "content"},
                slot: "content"
            }, [i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("企业图谱")]), t._v("：图形化整合企业信息，一图洞察企业人员关系、投资关系、分支机构等关键信息。\n                        ")]), i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("股权穿透图")]), t._v("：股份制企业的股权划分和投资关系图。\n                        ")]), i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("企业关系图谱")]), t._v("：关联企业间人员职务、投资关系图形化整合。\n                        ")]), i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("企业受益股东")]), t._v("：指根据持股比例追溯到的股东，一般包含实际控制人、最终受益人及受益股份。\n                        ")]), i("p", {staticClass: "poptip-line"}, [i("span", {staticClass: "title"}, [t._v("疑似实际控制人")]), t._v("：疑似实际控制人即疑似实际控制上市公司的自然人、法人或其他组织。\n                        ")])])])], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("ul", {staticClass: "aqc-relations-pannel"}, t._l(t.showChart, (function (e) {
                return i("li", {
                    key: e.name,
                    staticClass: "relations-panel-item"
                }, [i("a", {
                    attrs: {"data-log-an": "aqc-relations", "data-log-title": e.link}, on: {
                        click: function (n) {
                            return t.toLink(e)
                        }
                    }
                }, [e.new ? i("div", {staticClass: "new-func icon-new"}) : t._e(), i("img", {
                    attrs: {
                        src: e.img,
                        alt: ""
                    }
                }), i("div", [t._v(t._s(e.name))])])])
            })), 0)]), t.data.basicData.entName ? i("business-table", {attrs: {"init-data": t.data.basicData}}) : t._e(), t.data.shareholdersData.list.length ? i("shareholder-table", {attrs: {"init-data": t.data.shareholdersData}}) : t._e(), i("div", {
                staticClass: "aqc-table-list",
                attrs: {id: "basic-stockchart"}
            }, [t._m(0), i("div", {attrs: {id: "basic-stockchart-watermark"}}, [i("atlas-entrance", {attrs: {"view-link": "/relations/stockchart?pid=" + t.pid}}, [t.drawStock ? i("stock-chart") : t._e()], 1)], 1)]), t.data.directorsData.list.length ? i("directors-table", {attrs: {"init-data": t.data.directorsData}}) : t._e(), +t.basicTabs.find((function (t) {
                return "finalbenefit" === t.id
            })).available ? i("div", {
                ref: "basicFinalbenefit",
                staticClass: "aqc-table-list",
                attrs: {id: "basic-finalbenefit"}
            }, [t._m(1), i("atlas-entrance", {
                class: {"auto-height": "-1" !== t.limitStatusFinalbenefit},
                attrs: {
                    "view-link": "/relations/finalbenefit?pid=" + t.pid,
                    "show-text": "-1" === t.limitStatusFinalbenefit
                }
            }, [i("benefit-table", {on: {uploadLimit: t.uploadLimitFinalbenefit}})], 1)], 1) : t._e(), +t.basicTabs.find((function (t) {
                return "doubtcontroller" === t.id
            })).available ? i("div", {
                ref: "basicDoubtcontroller",
                staticClass: "aqc-table-list",
                attrs: {id: "basic-doubtcontroller"}
            }, [t._m(2), i("atlas-entrance", {
                class: {"auto-height": "-1" !== t.limitStatusDoubtcontroller},
                attrs: {
                    "view-link": "/relations/doubtcontroller?pid=" + t.pid,
                    "show-text": "-1" === t.limitStatusDoubtcontroller
                }
            }, [i("controller-table", {on: {uploadLimit: t.uploadLimitDoubtcontroller}})], 1)], 1) : t._e(), t.data.investRecordData.list.length ? i("invest-table", {attrs: {"init-data": t.data.investRecordData}}) : t._e(), t.data.holdsData.list.length ? i("holds-table", {attrs: {"init-data": t.data.holdsData}}) : t._e(), t.data.changeRecordData.list.length ? i("change-record-table", {attrs: {"init-data": t.data.changeRecordData}}) : t._e(), t.data.annualReportData.list.length ? i("annual-report-table", {attrs: {"init-data": t.data.annualReportData}}) : t._e(), t.data.branchsData.list.length ? i("branch-table", {attrs: {"init-data": t.data.branchsData}}) : t._e(), t.data.headCompany.list.length ? i("head-company-table", {attrs: {"init-data": t.data.headCompany}}) : t._e(), i("guide-dialog", {
                ref: "guideDialog",
                attrs: {
                    type: t.guideType,
                    title: t.guideTitle,
                    "sub-title": t.guideSubTitle,
                    "redeem-code": t.alreadyCode,
                    "has-demo": !0,
                    "demo-src": "/relations/" + t.dialogImg + "?pid=" + t.examplesPid
                }
            }, ["doubtcontroller" === t.dialogImg ? i("img", {attrs: {src: n("G4yE")}}) : t._e(), "finalbenefit" === t.dialogImg ? i("img", {attrs: {src: n("6P8S")}}) : t._e()])], 1)
        }), K, !1, null, "7739902e", null)), _e = xe.exports, we = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "no-data-tab"}, [i("div", {staticClass: "wrapper"}, [i("img", {
                staticClass: "img",
                attrs: {src: n("ednU")}
            }), i("div", {staticClass: "wrap"}, [i("div", [t._v("暂无相关信息")]), i("p", {staticClass: "text-two"}, [t._v("截止到当前日期，该企业暂无相关信息，您可以通过爱企查，持续关注该企业的信息更新情况。")])])])])
        }], Ce = (n("prwz"), Object(x.a)({}, (function () {
            var t = this, e = t.$createElement;
            t._self._c;
            return t._m(0)
        }), we, !1, null, "445e5986", null)), Se = Ce.exports, ke = {
            name: "StockManagerchangeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "高管持股变动",
                        id: "stock-stockmanagerchange",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockmanagerchangeAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "变更日期",
                            width: 100,
                            isDate: !0,
                            key: "changeDate"
                        }, {name: "变动人", key: "changePersonName", width: 100}, {
                            name: "职位",
                            key: "positionTitle",
                            width: 120,
                            align: "left"
                        }, {name: "变动股数", key: "changeShareQuantity", width: 160}, {
                            name: "结存股数",
                            key: "balanceShareQuantity",
                            width: 160
                        }, {name: "股份变动途径", key: "shareChangeWay", width: 160}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Te = ke, Me = Object(x.a)(Te, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Oe = Me.exports, Ae = {
            name: "stockdividendTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "分红信息",
                        id: "stock-stockdividend",
                        url: "/c/stockdividendAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "公告日期",
                            key: "publicationDate",
                            isDate: !0
                        }, {name: "分红方案", key: "bonusScheme", width: 206, align: "left"}, {
                            name: "股权登记日",
                            key: "equityRegDate",
                            isDate: !0
                        }, {name: "除权除息日", key: "xrXdDate", isDate: !0}, {
                            name: "派息日",
                            key: "declarationDate",
                            isDate: !0
                        }, {name: "项目进度", key: "programmeProgress", width: 185, align: "left"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, De = Ae, Ee = Object(x.a)(De, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Pe = Ee.exports, Ie = {
            name: "stockrightissueTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "配股明细",
                        id: "stock-stockrightissue",
                        url: "/c/stockrightissueAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "公告日期",
                            key: "publicationDate",
                            width: 100,
                            isDate: !0
                        }, {name: "配股价格(元)", key: "rightIssuePrice", width: 102}, {
                            name: "实际配股总额(万元)",
                            key: "actualTotalRightIssue",
                            width: 142
                        }, {name: "实际募集总额(万元)", key: "actualTotalRaise", width: 142}, {
                            name: "股权登记日",
                            key: "equityRegistrationDate",
                            width: 100
                        }, {name: "除权基准日", key: "equityRegistrationDate", width: 100}, {
                            name: "配股方案",
                            key: "rightIssueScheme",
                            width: 104,
                            align: "left"
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Le = Ie, Re = Object(x.a)(Le, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Ne = Re.exports, Be = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h3", {staticClass: "aqc-detail-title"}, [t._v("核心题材"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], je = {
            name: "coreTopicsContent", components: {}, props: {
                originData: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, data: function () {
                return {}
            }, computed: {
                data: function () {
                    return Array.isArray(this.originData) ? this.originData.join("</br></br>") : ""
                }
            }, mounted: function () {
            }, methods: {}
        }, Fe = je, ze = (n("93XF"), Object(x.a)(Fe, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "aqc-table-list",
                attrs: {id: "stock-stockcoretopics"}
            }, [t._m(0), n("div", {staticClass: "coreTopicsContent", domProps: {innerHTML: t._s(t.data)}})])
        }), Be, !1, null, null, null)), Ve = ze.exports, He = {
            name: "stockRelieveTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "限售解禁",
                        id: "stock-stockrelieve",
                        showPager: !0,
                        showTitleCount: !0,
                        url: "/c/stockrelieveAjax",
                        columns: [{type: "index", name: "序号", width: "50"}, {
                            name: "解禁日期",
                            key: "relieveDate",
                            width: "100",
                            isDate: !0
                        }, {name: "解禁数量(股)", key: "relieveAmount", width: "160"}, {
                            name: "解禁股占总比例",
                            key: "relieveRatio",
                            width: "130"
                        }, {name: "解禁股占流通股本比例", key: "relieveCirculationRatio", width: "170"}, {
                            name: "股票类型",
                            key: "shareType",
                            align: "left",
                            width: "231"
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, We = He, qe = Object(x.a)(We, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Ue = qe.exports, Ye = {
            name: "stockpledgeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "股权质押",
                        id: "stock-stockpledge",
                        url: "/c/stockpledgeAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "公告日期",
                            key: "publicationDate",
                            isDate: !0
                        }, {
                            name: "股东名称",
                            key: "shareholderName",
                            url: "shareholderNameDetailUrl",
                            width: 200,
                            align: "left"
                        }, {
                            name: "质押方",
                            key: "pledgeParty",
                            url: "pledgePartyDetailUrl",
                            width: 201,
                            align: "left"
                        }, {name: "质押股票(万股)", key: "pledgeAmount", width: 130}, {
                            name: "占总股比例",
                            key: "pledgeRatio",
                            width: 100
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Ge = Ye, Xe = Object(x.a)(Ge, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Ze = Xe.exports, Ke = {
            name: "StockViolationTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "违规处理",
                        id: "stock-stockviolation",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockviolationAjax",
                        showFilter: !1,
                        columns: [{type: "index", name: "序号", width: "50"}, {
                            name: "公示日期",
                            key: "publicationDate",
                            width: "100",
                            isDate: !0
                        }, {
                            name: "处罚对象",
                            key: "punishedObject",
                            width: "240",
                            url: "punishedObjectDetailUrl",
                            align: "left"
                        }, {
                            name: "处罚类型",
                            key: "violationType",
                            width: "252",
                            onlyTruncate: !0,
                            truncate: 40,
                            align: "left"
                        }, {name: "处罚金额(万元)", key: "penaltyAmount", width: "140"}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: "60"
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, $e = Ke, Qe = Object(x.a)($e, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Je = Qe.exports, tn = {
            name: "StockExternalTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "对外担保",
                        id: "stock-stockexternal",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockexternalAjax",
                        columns: [{type: "index", name: "序号", width: "50"}, {
                            name: "公示日期",
                            key: "publicationDate",
                            width: "100",
                            isDate: !0
                        }, {
                            name: "担保方",
                            key: "stockGuarantee",
                            width: "200",
                            url: "stockGuaranteeDetailUrl",
                            align: "left"
                        }, {
                            name: "被担保方",
                            key: "stockBeGuarantee",
                            width: "201",
                            url: "stockBeGuaranteeDetailUrl",
                            align: "left"
                        }, {name: "担保方式", key: "stockGuaranteeMode", width: "116", align: "left"}, {
                            name: "担保金额(万元)",
                            key: "stockGuaranteeAmount",
                            width: "114"
                        }, {name: "操作", value: "详情", url: "detailUrl", width: "60"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, en = tn, nn = Object(x.a)(en, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), rn = nn.exports, an = {
            name: "StockEntnoticeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "公司公告",
                        id: "stock-stockentnotice",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockentnoticeAjax",
                        columns: [{type: "index", name: "序号", width: "50"}, {
                            name: "公告日期",
                            key: "publicationDate",
                            width: "100",
                            isDate: !0
                        }, {name: "公告类型", key: "publicationType", width: "160", align: "left"}, {
                            name: "公告标题",
                            key: "publicationTitle",
                            url: "publicationUrl",
                            align: "left",
                            width: "532"
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, on = an, sn = Object(x.a)(on, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), ln = sn.exports, un = {
            name: "stockaddissueTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "增发信息",
                        id: "stock-stockaddissue",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockaddissueAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "增发日期",
                            key: "additionalIssueDate",
                            width: 110,
                            isDate: !0
                        }, {name: "增发价格(元/股)", key: "additionalIssuePrice", width: 160}, {
                            name: "发行方式",
                            key: "issueType"
                        }, {name: "股权登记日", key: "equityRegistrationDate", width: 110, isDate: !0}, {
                            name: "增发上市日",
                            key: "additionalListDate",
                            width: 110,
                            isDate: !0
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 80}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, cn = un, dn = Object(x.a)(cn, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), hn = dn.exports, fn = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("企业信息"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], pn = {
            name: "Entinfo", components: {FoldText: f.a}, props: {entinfo: Object}, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }, gn = pn, vn = (n("L+PK"), Object(x.a)(gn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-entinfo"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("企业全称")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.entinfo.principalName))])]), n("tr", [n("td", [t._v("简称/曾用名")]), n("td", [t._v(t._s(t.entinfo.stockOldName))]), n("td", {staticClass: "no-rp"}, [t._v("统一社会信用代码")]), n("td", [t._v(t._s(t.entinfo.unifiedCode))])]), n("tr", [n("td", [t._v("注册资本")]), n("td", [t._v(t._s(t.entinfo.registeredCapital))]), n("td", [t._v("所属行业")]), n("td", [t._v(t._s(t.entinfo.eastWealthIndustry))])]), n("tr", [n("td", [t._v("董事长")]), n("td", [t._v(t._s(t.entinfo.chaireman))]), n("td", [t._v("董事长秘书")]), n("td", [t._v(t._s(t.entinfo.chairmanSecretary))])]), n("tr", [n("td", [t._v("法定代表人")]), n("td", [t._v(t._s(t.entinfo.legalPerson))]), n("td", [t._v("总经理")]), n("td", [t._v(t._s(t.entinfo.generalManager))])]), n("tr", [n("td", [t._v("员工人数")]), n("td", [t._v(t._s(t.entinfo.employeeNumber))]), n("td", [t._v("管理人员人数")]), n("td", [t._v(t._s(t.entinfo.managerNumber))])]), n("tr", [n("td", [t._v("公司简介")]), n("td", {attrs: {colspan: "3"}}, [n("fold-text", {
                attrs: {
                    content: t.entinfo.companyBrief,
                    line: 3
                }
            })], 1)]), n("tr", [n("td", [t._v("主营业务")]), n("td", {attrs: {colspan: "3"}}, [n("fold-text", {
                attrs: {
                    content: t.entinfo.licenseScope,
                    line: 3
                }
            })], 1)])])])])
        }), fn, !1, null, "162f211d", null)), mn = vn.exports, yn = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("证券信息"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], bn = {
            name: "Securitie", components: {FoldText: f.a}, props: {securitie: Object}, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }, xn = bn, _n = (n("Ta76"), Object(x.a)(xn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-securitie"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("A股代码")]), n("td", [t._v(t._s(t.securitie.aStockCode))]), n("td", [t._v("A股简称")]), n("td", [t._v(t._s(t.securitie.aStockName))])]), n("tr", [n("td", [t._v("B股代码")]), n("td", [t._v(t._s(t.securitie.bStockCode))]), n("td", [t._v("B股简称")]), n("td", [t._v(t._s(t.securitie.bStockName))])]), n("tr", [n("td", [t._v("H股代码")]), n("td", [t._v(t._s(t.securitie.hStockCode))]), n("td", [t._v("H股简称")]), n("td", [t._v(t._s(t.securitie.hStockName))])]), n("tr", [n("td", [t._v("证券类别")]), n("td", [t._v(t._s(t.securitie.securitiesCalssfication))]), n("td", [t._v("律师事务所")]), n("td", [t._v(t._s(t.securitie.lawFirm))])]), n("tr", [n("td", [t._v("会计师事务所")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.securitie.accountingName))])])])])])
        }), yn, !1, null, "8a8425da", null)), wn = _n.exports, Cn = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("重要人员"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], Sn = {
            name: "Person", components: {FoldText: f.a}, props: {person: Object}, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }, kn = Sn, Tn = (n("UaAD"), Object(x.a)(kn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-person"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("总经理")]), n("td", [t._v(t._s(t.person.generalManager))]), n("td", [t._v("法定代表人")]), n("td", [t._v(t._s(t.person.legalPerson))])]), n("tr", [n("td", [t._v("董事长秘书")]), n("td", [t._v(t._s(t.person.chairmanSecretary))]), n("td", [t._v("董事长")]), n("td", [t._v(t._s(t.person.chaireman))])]), n("tr", [n("td", [t._v("证券事务代表")]), n("td", [t._v(t._s(t.person.bondRepresentative))]), n("td", [t._v("独立董事")]), n("td", [t._v(t._s(t.person.independentDirector))])])])])])
        }), Cn, !1, null, "5b1f1b06", null)), Mn = Tn.exports, On = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("联系方式"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], An = {
            name: "Contacts", components: {FoldText: f.a}, props: {contacts: Object}, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }, Dn = An, En = (n("/PXE"), Object(x.a)(Dn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-contacts"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("联系电话")]), n("td", [t._v(t._s(t.contacts.telephoneNumber))]), n("td", [t._v("电子邮箱")]), n("td", [t._v(t._s(t.contacts.emailAddress))])]), n("tr", [n("td", [t._v("传真")]), n("td", [t._v(t._s(t.contacts.faxNumber))]), n("td", [t._v("公司网址")]), n("td", [t._v(t._s(t.contacts.siteUrl))])]), n("tr", [n("td", [t._v("办公地址")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.contacts.officeAddress))])]), n("tr", [n("td", [t._v("注册地址")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.contacts.domicile))])])])])])
        }), On, !1, null, "dc64d30e", null)), Pn = En.exports, In = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("发行信息"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], Ln = {
            name: "Issuance", components: {FoldText: f.a}, props: {issuance: Object}, mounted: function () {
            }, methods: {}
        }, Rn = Ln, Nn = (n("hp7a"), Object(x.a)(Rn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-stockissuance"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("成立日期")]), n("td", [t._v(t._s(t.issuance.establishedDate))]), n("td", [t._v("上市日期")]), n("td", [t._v(t._s(t.issuance.launchDate))])]), n("tr", [n("td", [t._v("发行市盈率(倍)")]), n("td", [t._v(t._s(t.issuance.issuePeRatio))]), n("td", [t._v("网上发行日期")]), n("td", [t._v(t._s(t.issuance.onlineIssueDate))])]), n("tr", [n("td", [t._v("发行方式")]), n("td", [t._v(t._s(t.issuance.issueType))]), n("td", [t._v("每股面值(元)")]), n("td", [t._v(t._s(t.issuance.perShareFaceValue))])]), n("tr", [n("td", [t._v("发行量(股)")]), n("td", [t._v(t._s(t.issuance.issueAmount))]), n("td", [t._v("每股发行价(元)")]), n("td", [t._v(t._s(t.issuance.perShareIssuancePrice))])]), n("tr", [n("td", [t._v("发行费用(元)")]), n("td", [t._v(t._s(t.issuance.issueCost))]), n("td", [t._v("发行总市值(元)")]), n("td", [t._v(t._s(t.issuance.issueGrossMarketValue))])]), n("tr", [n("td", [t._v("募集资金净额(元)")]), n("td", [t._v(t._s(t.issuance.raiseMoneyNetAmount))]), n("td", [t._v("首日开盘价(元)")]), n("td", [t._v(t._s(t.issuance.firstDayOpenPrice))])]), n("tr", [n("td", [t._v("首日最高价(元)")]), n("td", [t._v(t._s(t.issuance.firstDayHighestPrice))]), n("td", [t._v("首日收盘价(元)")]), n("td", [t._v(t._s(t.issuance.firstDayClosePrice))])]), n("tr", [n("td", [t._v("首日换手率")]), n("td", [t._v(t._s(t.issuance.firstDayTurnoverRate))]), n("td", [t._v("线下配售中签率")]), n("td", [t._v(t._s(t.issuance.offlineDistributionWinRate))])]), n("tr", [n("td", [t._v("定价中签率")]), n("td", {attrs: {colspan: "3"}}, [t._v("\n                    " + t._s(t.issuance.priceWinningRate) + "\n                ")])])])])])
        }), In, !1, null, "30476fa0", null)), Bn = Nn.exports, jn = n("Pwj2"), Fn = {
            name: "Financemain",
            components: {FoldText: f.a, Fragment: jn.a},
            props: {financemain: Array, tabId: String, total: [Number, String]},
            data: function () {
                return {pid: window.pageData.result.pid}
            },
            mounted: function () {
            },
            methods: {}
        }, zn = Fn, Vn = (n("GSRv"), Object(x.a)(zn, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: this.tabId + "-financemain"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("财务指标"), i("span", {staticClass: "zx-detail-total"}, [t._v(t._s(t.total))]), i("a", {
                staticClass: "check-more",
                attrs: {target: "_blank", href: "/financemain?pid=" + t.pid + "&stocktab=financialindex"}
            }, [t._v("\n            查看更多指标"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "financemain-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (155 * t.financemain.length + 220) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("每股指标")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item table-header-item"}, [t._v(t._s(e.financeYear))])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("基本每股收益(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.basicEarningsPerShare))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("扣费每股收益(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.deductionOfNonEarningsPerShare))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("稀释每股收益(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.dilutedEarningsPerShare))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("每股净资产(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netAssetsPerShare))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("每股公积金(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.reserveFundPerShare))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("每股未分配利润(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.undistributedProfitPerShare))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("每股经营现金流(元)")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.operatingCashFlowPerShare))])
            }))], 2)])])])])
        }), [], !1, null, "530c3024", null)), Hn = Vn.exports, Wn = {
            name: "cashflow", props: {
                cashflow: {
                    type: Array, default: function () {
                        return []
                    }
                }, tabId: {type: String, default: ""}, total: {type: [Number, String], default: 0}
            }, data: function () {
                return {pid: window.pageData.result.pid}
            }, mounted: function () {
            }, methods: {
                addUnit: function (t) {
                    var e = "-";
                    return "-" !== t && (e = t + "亿"), e
                }
            }
        }, qn = Wn, Un = (n("aLPm"), Object(x.a)(qn, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: this.tabId + "-cashflow"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("现金流量表"), i("span", {staticClass: "zx-detail-total"}, [t._v(t._s(t.total))]), i("a", {
                staticClass: "check-more",
                attrs: {target: "_blank", href: "/financemain?pid=" + t.pid + "&stocktab=cashflow"}
            }, [t._v("\n            查看更多现金流量表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "cashflow-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (154 * t.cashflow.length + 220) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("现金流量表")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item table-header-item"}, [t._v(t._s(e.reportDate))])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动现金流入小计")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumOperateFlowIn))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动现金流出小计")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumOperateFlowOut))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动产生的现金流量净额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netOperateCashFlow))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动现金流入小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumInvFlowIn))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动现金流出小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumInvFlowOut))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动产生的现金流量净额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netInvCashFlow))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动现金流入小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumFinaFlowIn))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动现金流出小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumFinaFlowOut))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动产生的现金流量净额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netFinaCashFlow))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("汇率变动对现金及现金等价物的影响")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item m-table"}, [t._v(t._s(e.effectExchangerate))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("现金及现金等价物净增加额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.niCashEqui))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("现金及现金等价物净增余额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.cashEquiBeginning))])
            }))], 2)])])])])
        }), [], !1, null, "009fc104", null)), Yn = Un.exports, Gn = {
            name: "Financeprofit",
            components: {FoldText: f.a, Fragment: jn.a},
            props: {financemain: Array, tabId: String, total: [Number, String]},
            data: function () {
                return {pid: window.pageData.result.pid}
            },
            mounted: function () {
            },
            methods: {}
        }, Xn = Gn, Zn = (n("bwRr"), Object(x.a)(Xn, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: this.tabId + "-financeprofit"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("利润表"), i("span", {staticClass: "zx-detail-total"}, [t._v(t._s(t.total))]), i("a", {
                staticClass: "check-more",
                attrs: {
                    target: "_blank",
                    href: "/financemain?pid=" + t.pid + "&stocktab=financialprofit&tabId=" + this.tabId
                }
            }, [t._v("\n            查看更多利润表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "financemain-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (155 * t.financemain.length + 208) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("利润表")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item table-header-item"}, [t._v(t._s(e.financeYear))])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("营业总收入")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.totalOperatereve))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("营业总成本")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.totalOperateExp))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("营业利润")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.operaterProfit))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("利润总额")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumProfit))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("净利润")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netProfit))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("其他综合收益")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.otherIncome))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("综合收益总额")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumCIncome))])
            }))], 2)])])])])
        }), [], !1, null, "020c8854", null)), Kn = Zn.exports, $n = {
            name: "Balancesheet",
            components: {FoldText: f.a, Fragment: jn.a},
            props: {financemain: Array, tabId: String, total: [Number, String]},
            data: function () {
                return {pid: window.pageData.result.pid}
            },
            mounted: function () {
            },
            methods: {}
        }, Qn = $n, Jn = (n("jtPf"), Object(x.a)(Qn, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: this.tabId + "-balancesheet"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("资产负债表 "), i("span", {staticClass: "zx-detail-total"}, [t._v(t._s(t.total))]), i("a", {
                staticClass: "check-more",
                attrs: {target: "_blank", href: "/financemain?pid=" + t.pid + "&stocktab=balancesheet&tabId=" + this.tabId}
            }, [t._v("\n            查看更多资产负债表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "financemain-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (155 * t.financemain.length + 208) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("资产负债表")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item table-header-item"}, [t._v(t._s(e.reportdate))])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("流动资产合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumlasset))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("非流动资产合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumnonlasset))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("资产总计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumasset))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("流动负债合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumlliab))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("非流动负债合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumnonlliab))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("负债合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumliab))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("归属于母公司的股东权益合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumparentequity))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("股东权益合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumshequity))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("负债和股东权益合计")]), t._l(t.financemain, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumliabshequity))])
            }))], 2)])])])])
        }), [], !1, null, "9222ef1e", null)), ti = Jn.exports, ei = {
            name: "Tenstockholder",
            components: {AiTableList: lt.a},
            props: {tenstockholder: Object},
            data: function () {
                return {
                    config: {
                        title: "十大股东",
                        id: "stock-tenstockholder",
                        showFilter: !0,
                        url: "/c/tenstockholderAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "股东名称",
                            width: 317,
                            key: "shareholderName",
                            url: "nameUrl",
                            align: "left"
                        }, {name: "股份类型", width: 100, key: "shareType"}, {
                            name: "持股数量(股)",
                            width: 110,
                            key: "shareholdQuantity"
                        }, {name: "持股比例", width: 80, key: "shareholdRatio"}, {
                            name: "增减(股)",
                            width: 100,
                            key: "shareQuantityChange"
                        }, {name: "变动比例", width: 84, key: "shareQuantityChangeRatio"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, ni = ei, ii = Object(x.a)(ni, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.tenstockholder}})], 1)
        }), [], !1, null, null, null), ri = ii.exports, ai = {
            name: "tenltstockholder",
            components: {AiTableList: lt.a},
            props: {tenltstockholder: Object},
            data: function () {
                return {
                    config: {
                        title: "十大流通股东",
                        id: "stock-tenltstockholder",
                        showFilter: !0,
                        url: "/c/tenltstockholderAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "股东名称",
                            width: 317,
                            key: "shareholderName",
                            url: "nameUrl",
                            align: "left"
                        }, {name: "股份类型", width: 100, key: "shareType"}, {
                            name: "持股数量(股)",
                            width: 110,
                            key: "shareholdQuantity"
                        }, {name: "持股比例", width: 80, key: "shareholdRatio"}, {
                            name: "增减(股)",
                            width: 100,
                            key: "shareQuantityChange"
                        }, {name: "变动比例", width: 84, key: "shareQuantityChangeRatio"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, oi = ai, si = Object(x.a)(oi, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.tenltstockholder}})], 1)
        }), [], !1, null, null, null), li = si.exports, ui = {
            name: "Stockstructure",
            components: {AiTableList: lt.a},
            props: {stockstructure: Object},
            data: function () {
                return {
                    config: {
                        title: "股本结构",
                        id: "stock-stockstructure",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockstructureAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "日期",
                            width: 100,
                            key: "publicationDate",
                            isDate: !0
                        }, {name: "总股本(万股)", width: 160, key: "totalShareAmount"}, {
                            name: "已流通股份(万股)",
                            width: 160,
                            key: "shareAmount"
                        }, {name: "流通受限股份(万股)", width: 160, key: "constraintShare"}, {
                            name: "变动原因",
                            width: 152,
                            key: "changeReason",
                            align: "left"
                        }, {name: "操作", width: 60, value: "详情", url: "detailUrl"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, ci = ui, di = Object(x.a)(ci, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.stockstructure}})], 1)
        }), [], !1, null, null, null), hi = di.exports, fi = {
            name: "Stockmanager", components: {AiTableList: lt.a}, props: {stockManager: Object}, data: function () {
                return {
                    config: {
                        title: "高管信息",
                        id: "stock-stockmanager",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/stockManagerAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "姓名",
                            width: 100,
                            key: "personName",
                            isDate: !0
                        }, {name: "性别", width: 80, key: "gender"}, {
                            name: "职务", width: 120, value: function (t) {
                                return t.positionTitle.split(/[，,、]/).join("，")
                            }, align: "left"
                        }, {name: "学历", width: 80, key: "educationLevel"}, {
                            name: "任职时间",
                            width: 100,
                            key: "validityFrom"
                        }, {name: "简介", width: 311, key: "personBrief", truncate: 3, align: "left"}]
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, pi = fi, gi = Object(x.a)(pi, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.stockManager}})], 1)
        }), [], !1, null, null, null), vi = gi.exports, mi = {
            name: "ProspectusTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "招股书",
                        id: "stock-prospectus",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/prospectusAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布日期",
                            key: "publicationDate",
                            width: 100
                        }, {name: "名称", key: "publicationTitle", align: "left", width: 693, url: "publicationUrl"}]
                    }
                }
            }
        }, yi = mi, bi = Object(x.a)(yi, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), xi = bi.exports, _i = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h3", {staticClass: "new-stock-manager-title"}, [t._v("\n        企业高管\n        "), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz")}
            })])
        }], wi = {
            name: "NewStockManager", components: {FateImage: h.a}, props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {
                    columns: [{type: "index", name: "序号", width: 50}, {
                        name: "项目成员",
                        type: "image-text",
                        width: 210,
                        image: "logo",
                        textImage: "logoWord",
                        title: "name",
                        titleId: "personId",
                        extraValue: "compNum"
                    }, {name: "职位", width: 180, key: "positionTitle"}, {
                        name: "持股数量(股)",
                        width: 150,
                        key: "holderamt"
                    }, {name: "持股比例", width: 150, key: "holderrto"}, {name: "任职起始日期", width: 100, key: "startDate"}],
                    data: this.originData,
                    currentPage: 1,
                    pid: window.pageData.result.pid,
                    currentTab: 1,
                    directorNum: +this.originData.directorNum || 0,
                    supervisorNum: +this.originData.supervisorNum || 0,
                    managerNum: +this.originData.managerNum || 0
                }
            }, mounted: function () {
                0 !== this.managerNum && (this.currentTab = 3), 0 !== this.supervisorNum && (this.currentTab = 2), 0 !== this.directorNum && (this.currentTab = 1)
            }, computed: {
                interveneTotal: function () {
                    return this.data.total > 5e3 ? 5e3 : this.data.total
                }
            }, methods: {
                getList: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = {p: e, type: n, size: 10, pid: this.pid};
                    this.$http.get("/threeboard/getStockManagerAjax", {params: i}).then((function (e) {
                        t.data = e.data
                    }))
                }, onPgaeChange: function (t) {
                    this.currentPage = t, this.getList(t, this.currentTab)
                }, handleChange: function (t) {
                    this.currentTab = t, this.getList(1, this.currentTab)
                }
            }
        }, Ci = wi, Si = (n("Z9eg"), n("wcfb"), Object(x.a)(Ci, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "new-stock-manager",
                attrs: {id: "stock-stockmanager"}
            }, [t._m(0), n("div", {staticClass: "tabs-bar"}, [0 !== t.directorNum ? n("p", {
                class: [1 === t.currentTab ? "active" : ""],
                attrs: {"data-log-an": "new-stock-manager", "data-log-title": "new-stock-manager-tab1"},
                on: {
                    click: function (e) {
                        return t.handleChange(1)
                    }
                }
            }, [t._v("\n            董事"), n("span", [t._v(t._s(t.directorNum))])]) : t._e(), 0 !== t.supervisorNum ? n("p", {
                class: [2 === t.currentTab ? "active" : ""],
                attrs: {"data-log-an": "new-stock-manager", "data-log-title": "new-stock-manager-tab2"},
                on: {
                    click: function (e) {
                        return t.handleChange(2)
                    }
                }
            }, [t._v("\n            监事"), n("span", [t._v(t._s(t.supervisorNum))])]) : t._e(), 0 !== t.managerNum ? n("p", {
                class: [3 === t.currentTab ? "active" : ""],
                attrs: {"data-log-an": "new-stock-manager", "data-log-title": "new-stock-manager-tab3"},
                on: {
                    click: function (e) {
                        return t.handleChange(3)
                    }
                }
            }, [t._v("\n            高管"), n("span", [t._v(t._s(t.managerNum))])]) : t._e()]), n("table", {staticClass: "new-stock-manager-table"}, [n("thead", {staticClass: "new-stock-manager-thead"}, [n("tr", {staticClass: "table-header"}, t._l(t.columns, (function (e) {
                return n("td", {
                    key: e.name,
                    staticClass: "table-header-item",
                    style: {width: e.width + "px"}
                }, [t._v("\n                    " + t._s(e.name) + "\n                ")])
            })), 0)]), t.data.list.length ? n("tbody", {staticClass: "table-body"}, t._l(t.data.list, (function (e, i) {
                return n("tr", {key: i}, t._l(t.columns, (function (r) {
                    return n("td", {key: r.name}, ["index" === r.type ? n("div", {staticClass: "table-index"}, [t._v("\n                        " + t._s((t.data.page - 1) * t.data.size + i + 1) + "\n                    ")]) : "image-text" === r.type ? n("div", {staticClass: "image-text-content portrait-line-two"}, [n("fate-image", {
                        staticClass: "logo",
                        attrs: {src: e[r.image], word: e[r.textImage]}
                    }), n("div", {staticClass: "image-text-text"}, [n("p", {class: [0 == +e[r.extraValue] ? "one-title" : ""]}, [e[r.titleId] ? n("a", {
                        staticClass: "title ellipsis-line-1",
                        attrs: {
                            href: "/person?personId=" + e[r.titleId],
                            "data-log-an": "new-stock-manager",
                            "data-log-title": "new-stock-manager-name",
                            target: "_blank"
                        }
                    }, [t._v("\n                                    " + t._s(e[r.title]) + "\n                                ")]) : n("span", {
                        staticClass: "title ellipsis-line-1",
                        attrs: {"data-log-an": "new-stock-manager", "data-log-title": "new-stock-manager-name"}
                    }, [t._v("\n                                    " + t._s(e[r.title]) + "\n                                ")])]), 0 != +e[r.extraValue] ? n("p", [n("a", {
                        staticClass: "title ellipsis-line-1",
                        attrs: {
                            href: "/person?personId=" + e[r.titleId] + "&subtab=personal-allenterprises",
                            "data-log-an": "new-stock-manager",
                            "data-log-title": "new-stock-manager-compNum",
                            target: "_blank"
                        }
                    }, [t._v("\n                                    TA有 " + t._s(e[r.extraValue]) + " 家企业 >\n                                ")])]) : t._e()])], 1) : n("div", [t._v("\n                        " + t._s(e[r.key]) + "\n                    ")])])
                })), 0)
            })), 0) : n("tbody", [n("tr", [n("td", {
                staticClass: "no-filter-data",
                attrs: {colspan: 6}
            }, [t._v("该筛选条件下没有数据")])])])]), t.data.total > t.data.size ? n("div", {staticClass: "aqc-table-list-pager"}, [n("page", {
                attrs: {
                    total: t.interveneTotal,
                    "page-size": t.data.size,
                    current: t.currentPage
                }, on: {"on-change": t.onPgaeChange}
            })], 1) : t._e()])
        }), _i, !1, null, "de2dcd3a", null)), ki = Si.exports, Ti = n("IQya"), Mi = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        企业信息"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], Oi = {
            name: "NewEntinfo", components: {FoldText: f.a}, props: {
                entinfo: {
                    type: Object, default: function () {
                    }
                }
            }
        }, Ai = Oi, Di = (n("hHqP"), Object(x.a)(Ai, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-entinfo"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("企业全称")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.entinfo.principalName))])]), n("tr", [n("td", [t._v("企业英文名称")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.entinfo.engName))])]), n("tr", [n("td", [t._v("企业简称")]), n("td", [t._v(t._s(t.entinfo.principalShortName))]), n("td", {staticClass: "no-rp"}, [t._v("英文简称")]), n("td", [t._v(t._s(t.entinfo.engShortName))])]), n("tr", [n("td", [t._v("董事长/集团主席")]), n("td", [t._v(t._s(t.entinfo.chairman))]), n("td", [t._v("董事会秘书")]), n("td", [t._v(t._s(t.entinfo.bsecretary))])]), n("tr", [n("td", [t._v("法定代表人")]), n("td", [t._v(t._s(t.entinfo.legalPerson))]), n("td", [t._v("总经理")]), n("td", [t._v(t._s(t.entinfo.manager))])]), n("tr", [n("td", [t._v("组织形式")]), n("td", [t._v(t._s(t.entinfo.orgtype))]), n("td", [t._v("成立日期")]), n("td", [t._v(t._s(t.entinfo.establishedDate))])]), n("tr", [n("td", [t._v("注册资本(万元)")]), n("td", [t._v(t._s(t.entinfo.registeredCapital))]), n("td", [t._v("法定股本(股)")]), n("td", [t._v(t._s(t.entinfo.registeredStock))])]), n("tr", [n("td", [t._v("员工总数")]), n("td", [t._v(t._s(t.entinfo.workforce))]), n("td", [t._v("营业执照号码")]), n("td", [t._v(t._s(t.entinfo.licenseNumber))])]), n("tr", [n("td", [t._v("国税登记号码")]), n("td", [t._v(t._s(t.entinfo.nationalTaxCode))]), n("td", [t._v("国税登记号码")]), n("td", [t._v(t._s(t.entinfo.localTaxCode))])]), n("tr", [n("td", [t._v("公司网址")]), n("td", [t._v(t._s(t.entinfo.compurl))]), n("td", [t._v("会计师事务所")]), n("td", [t._v(t._s(t.entinfo.accfirm))])]), n("tr", [n("td", [t._v("主营业务")]), n("td", {attrs: {colspan: "3"}}, [n("fold-text", {
                attrs: {
                    content: t.entinfo.mainBusiness,
                    line: 3
                }
            })], 1)]), n("tr", [n("td", [t._v("经营范围")]), n("td", {attrs: {colspan: "3"}}, [n("fold-text", {
                attrs: {
                    content: t.entinfo.licenseScope,
                    line: 3
                }
            })], 1)])])])])
        }), Mi, !1, null, "204c609e", null)), Ei = Di.exports, Pi = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        证券信息"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], Ii = {
            name: "Securitie", components: {}, props: {
                securitie: {
                    type: Object, default: function () {
                    }
                }
            }
        }, Li = Ii, Ri = (n("1K8n"), Object(x.a)(Li, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-securitie"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("企业名称")]), n("td", [t._v(t._s(t.securitie.principalName))]), n("td", [t._v("证券代码")]), n("td", [t._v(t._s(t.securitie.symbol))])]), n("tr", [n("td", [t._v("中文简称")]), n("td", [t._v(t._s(t.securitie.sesName))]), n("td", [t._v("英文简称")]), n("td", [t._v(t._s(t.securitie.seengName))])]), n("tr", [n("td", [t._v("证券类别")]), n("td", [t._v(t._s(t.securitie.securitiesCalssfication))]), n("td", [t._v("交易币种")]), n("td", [t._v(t._s(t.securitie.cur))])]), n("tr", [n("td", [t._v("上市板块")]), n("td", [t._v(t._s(t.securitie.listBoard))]), n("td", [t._v("上市日期")]), n("td", [t._v(t._s(t.securitie.listDate))])]), n("tr", [n("td", [t._v("上市状态")]), n("td", [t._v(t._s(t.securitie.listStatus))]), n("td", [t._v("退市日期")]), n("td", [t._v(t._s(t.securitie.delistDate))])]), n("tr", [n("td", [t._v("做市起始日")]), n("td", [t._v(t._s(t.securitie.begmmDate))]), n("td", [t._v("做市商")]), n("td", [t._v(t._s(t.securitie.markMakers))])]), n("tr", [n("td", [t._v("入选指数")]), n("td", [t._v(t._s(t.securitie.iaName))]), n("td", [t._v("主办券商")]), n("td", [t._v(t._s(t.securitie.sponbroker))])]), n("tr", [n("td", [t._v("律师事务所")]), n("td", [t._v(t._s(t.securitie.lawfirm))]), n("td", [t._v("会计师事务所")]), n("td", [t._v(t._s(t.securitie.accfirm))])]), n("tr", [n("td", [t._v("财汇一级行业名称(按证监会口径)")]), n("td", [t._v(t._s(t.securitie.fclevel1Name))]), n("td", [t._v("财汇二级行业名称(按证监会口径)")]), n("td", [t._v(t._s(t.securitie.fclevel2Name))])])])])])
        }), Pi, !1, null, "83341e54", null)), Ni = Ri.exports, Bi = {
            name: "EquityChange",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "股本结构",
                        id: "stock-stockstructure",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/threeboard/equityChangeAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "总股本(万股)",
                            width: 170,
                            key: "totalshare",
                            url: "nameUrl"
                        }, {name: "流通数(万股)", width: 170, key: "circskamt"}, {
                            name: "限售流通股份(万股)",
                            width: 170,
                            key: "limskamt"
                        }, {name: "股份变动原因", width: 182, key: "shchgrsn"}, {name: "变动日期", width: 100, key: "changedate"}]
                    }
                }
            }
        }, ji = Bi, Fi = Object(x.a)(ji, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), zi = Fi.exports, Vi = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        财务指标\n        "), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], Hi = {
            name: "NewFinancemain", props: {
                dataSource: {
                    type: Array, default: function () {
                        return []
                    }
                }, total: {type: [Number, String], default: ""}, pid: {type: [Number, String], default: ""}
            }
        }, Wi = Hi, qi = (n("LKAM"), Object(x.a)(Wi, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-financemain"}
            }, [t._m(0), n("div", {staticClass: "newstockcomponent-box scroll-horizontal-bar"}, [n("table", {style: "width: " + (155 * t.dataSource.length + 220) + "px;"}, [n("thead", [n("tr", [n("td", {staticClass: "fixed-column"}, [t._v("财务指标（单位：元）")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item table-header-item"
                }, [t._v("\n                        " + t._s(e.reportYear) + "\n                    ")])
            }))], 2)]), n("tbody", [n("tr", [n("td", {staticClass: "fixed-column column-title"}, [t._v("利润表")]), n("td", {
                staticClass: "table-item empty",
                attrs: {colspan: t.dataSource.length}
            })]), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("营业收入")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.bizInco) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("利润总额")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totProfit) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("净利润")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.netProfit) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column column-title"}, [t._v("资产负债表")]), n("td", {
                staticClass: "table-item empty",
                attrs: {colspan: t.dataSource.length}
            })]), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("总资产")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totAsset) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("总负债")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totLiab) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("净资产")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.netAssets) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column column-title"}, [t._v("现金流量表")]), n("td", {
                staticClass: "table-item empty",
                attrs: {colspan: t.dataSource.length}
            })]), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub"}, [t._v("\n                        经营现金流量净额\n                    ")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.mananEtr) + "\n                    ")])
            }))], 2), n("tr", [n("td", {staticClass: "fixed-column column-title"}, [t._v("每股指标")]), n("td", {
                staticClass: "table-item empty",
                attrs: {colspan: t.dataSource.length}
            })]), n("tr", [n("td", {staticClass: "fixed-column fixed-column-sub last"}, [t._v("\n                        基本每股收益\n                    ")]), t._l(t.dataSource, (function (e, i) {
                return n("td", {
                    key: i,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.basicEps) + "\n                    ")])
            }))], 2)])])])])
        }), Vi, !1, null, "30771be2", null)), Ui = qi.exports, Yi = {
            name: "Newcashflow", props: {
                dataSource: {
                    type: Array, default: function () {
                        return []
                    }
                }, total: {type: [Number, String], default: ""}, pid: {type: [Number, String], default: ""}
            }
        }, Gi = Yi, Xi = (n("Bk9D"), Object(x.a)(Gi, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-cashflow"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        现金流量表\n        "), i("a", {
                staticClass: "check-more",
                attrs: {
                    target: "_blank",
                    href: "/threeboard/financemain?pid=" + t.pid + "&stocktab=cashflow",
                    "data-log-an": "threeboard-financemain-cashflow",
                    "data-log-title": "a-more"
                }
            }, [t._v("\n            查看更多现金流量表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "newstockcomponent-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (154 * t.dataSource.length + 220) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("现金流量表（单位：元）")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item table-header-item"
                }, [t._v("\n                        " + t._s(e.reportYear) + "\n                    ")])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动产生的现金流量净额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.manaNetr) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动产生的现金流量净额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.invnetCashFlow) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动产生的现金流量净额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.finnetCflow) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("\n                        汇率变动对现金及等价物的影响\n                    ")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.chgExchgChgs) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("现金及现金等价物净增加额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.cashNetr) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("\n                        期末现金及现金等价物余额\n                    ")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.finalCashBala) + "\n                    ")])
            }))], 2)])])])])
        }), [], !1, null, "5d5f0c51", null)), Zi = Xi.exports, Ki = {
            name: "NewFinanceprofit", props: {
                dataSource: {
                    type: Array, default: function () {
                        return []
                    }
                }, total: {type: [Number, String], default: ""}, pid: {type: [Number, String], default: ""}
            }
        }, $i = Ki, Qi = (n("qSrQ"), Object(x.a)($i, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-financeprofit"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        利润表\n        "), i("a", {
                staticClass: "check-more",
                attrs: {
                    target: "_blank",
                    href: "/threeboard/financemain?pid=" + t.pid + "&stocktab=financialprofit",
                    "data-log-an": "threeboard-financemain-financialprofit",
                    "data-log-title": "a-more"
                }
            }, [t._v("\n            查看更多利润表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "newstockcomponent-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (155 * t.dataSource.length + 208) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("利润表（单位：元）")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item table-header-item"
                }, [t._v("\n                        " + t._s(e.reportYear) + "\n                    ")])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("营业总收入")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.bizTotInco) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("营业总成本")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.bizTotCost) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("营业利润")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.perProfit) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("利润总额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totProfit) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("净利润")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.netProfit) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("其他综合收益的税后净额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.otherCompInco) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("综合收益总额")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.compIncoamt) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("每股收益")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.basiceps) + "\n                    ")])
            }))], 2)])])])])
        }), [], !1, null, "4caa14c4", null)), Ji = Qi.exports, tr = {
            name: "NewBalancesheet", props: {
                dataSource: {
                    type: Array, default: function () {
                        return []
                    }
                }, total: {type: [Number, String], default: ""}, pid: {type: [Number, String], default: ""}
            }
        }, er = tr, nr = (n("eBAE"), Object(x.a)(er, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-balancesheet"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        资产负债表\n        "), i("a", {
                staticClass: "check-more",
                attrs: {
                    target: "_blank",
                    href: "/threeboard/financemain?pid=" + t.pid + "&stocktab=balancesheet",
                    "data-log-an": "threeboard-financemain-balancesheet",
                    "data-log-title": "a-more"
                }
            }, [t._v("\n            查看更多资产负债表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "newstockcomponent-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (155 * t.dataSource.length + 208) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("资产负债表（单位：元）")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item table-header-item"
                }, [t._v("\n                        " + t._s(e.reportYear) + "\n                    ")])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("流动资产合计")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totCurrAsset) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("非流动资产合计")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totalNoncAssets) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("资产合计")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totAsset) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("流动负债合计")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totalCurrLiab) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("非流动负债合计")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totalNoncLiab) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("负债合计")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.totLiab) + "\n                    ")])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("\n                        所有者权益(或股东权益)合计\n                    ")]), t._l(t.dataSource, (function (e, n) {
                return i("td", {
                    key: n,
                    staticClass: "table-item"
                }, [t._v("\n                        " + t._s(e.righAggr) + "\n                    ")])
            }))], 2)])])])])
        }), [], !1, null, "5d91bdd6", null)), ir = nr.exports, rr = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("重要人员"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], ar = {
            name: "NewPerson", components: {}, props: {person: Object}, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }, or = ar, sr = (n("wMhH"), Object(x.a)(or, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-person"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("法定代表人")]), n("td", [t._v(t._s(t.person.legalPerson))]), n("td", [t._v("董事长")]), n("td", [t._v(t._s(t.person.chairman))])]), n("tr", [n("td", [t._v("总经理")]), n("td", [t._v(t._s(t.person.manager))]), n("td", [t._v("董事会秘书")]), n("td", [t._v(t._s(t.person.bsecretary))])]), n("tr", [n("td", [t._v("独立董事")]), n("td", [t._v(t._s(t.person.indirector))]), n("td", [t._v("财务总监/CFO")]), n("td", [t._v(t._s(t.person.cfo))])]), n("tr", [n("td", [t._v("证券事务代表")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.person.seaffrepr))])])])])])
        }), rr, !1, null, "2a6ec2ca", null)), lr = sr.exports, ur = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("联系方式"), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], cr = {
            name: "Contacts", components: {}, props: {contacts: Object}, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }, dr = cr, hr = (n("geed"), Object(x.a)(dr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-contacts"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", [n("tr", [n("td", [t._v("董秘电话")]), n("td", [t._v(t._s(t.contacts.bsecretarytel))]), n("td", [t._v("董秘传真")]), n("td", [t._v(t._s(t.contacts.bsecretaryfax))])]), n("tr", [n("td", [t._v("董秘电子邮箱")]), n("td", [t._v(t._s(t.contacts.bsecretarymail))]), n("td", [t._v("证券代表电话")]), n("td", [t._v(t._s(t.contacts.seagttel))])]), n("tr", [n("td", [t._v("证券代表传真")]), n("td", [t._v(t._s(t.contacts.seagtfax))]), n("td", [t._v("公司传真")]), n("td", [t._v(t._s(t.contacts.compfax))])]), n("tr", [n("td", [t._v("公司电话")]), n("td", [t._v(t._s(t.contacts.comptel))]), n("td", [t._v("客服电话")]), n("td", [t._v(t._s(t.contacts.servicetel))])]), n("tr", [n("td", [t._v("公司电子邮箱")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.contacts.compemail))])]), n("tr", [n("td", [t._v("注册地址")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.contacts.domicile))])]), n("tr", [n("td", [t._v("办公地址")]), n("td", {attrs: {colspan: "3"}}, [t._v(t._s(t.contacts.officeaddr))])])])])])
        }), ur, !1, null, "74d0ef89", null)), fr = hr.exports, pr = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        发行信息\n        "), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz")}
            })])
        }], gr = {
            name: "NewIssuance", components: {FoldText: f.a}, props: {issuance: Object}, mounted: function () {
            }, methods: {}
        }, vr = gr, mr = (n("lbip"), Object(x.a)(vr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-stockissuance"}
            }, [t._m(0), n("table", {staticClass: "zx-detail-stock-table"}, [n("tbody", {staticClass: "new-table"}, [n("tr", [n("td", [t._v("上市日公告")]), n("td", [t._v(t._s(t.issuance.listPubdate))]), n("td", [t._v("是否公开发行")]), n("td", [t._v(t._s(t.issuance.isPublic))])]), n("tr", [n("td", [t._v("发文字号")]), n("td", [t._v(t._s(t.issuance.fileIsSueNum))]), n("td", [t._v("发行方式")]), n("td", [t._v(t._s(t.issuance.isSueMode))])]), n("tr", [n("td", [t._v("发行对象")]), n("td", [t._v(t._s(t.issuance.isSueObject))]), n("td", [t._v("发行方式说明")]), n("td", [t._v(t._s(t.issuance.isSueModeMemo))])]), n("tr", [n("td", [t._v("上市保荐机构")]), n("td", [t._v(t._s(t.issuance.listRecomer))]), n("td", [t._v("保荐机构")]), n("td", [t._v(t._s(t.issuance.recomer))])]), n("tr", [n("td", [t._v("主承销商")]), n("td", [t._v(t._s(t.issuance.leaduwer))]), n("td", [t._v("币种")]), n("td", [t._v(t._s(t.issuance.cur))])]), n("tr", [n("td", [t._v("实际发行数量(万股)")]), n("td", [t._v(t._s(t.issuance.actissqty))]), n("td", [t._v("存量发行数量(万股)")]), n("td", [t._v(t._s(t.issuance.statshsecoffqty))])]), n("tr", [n("td", [t._v("本次发行的流通股数量(万股)")]), n("td", [t._v(t._s(t.issuance.floatqty))]), n("td", [t._v("本次发行的首次上市流通数量(万股)")]), n("td", [t._v(t._s(t.issuance.firstListqty))])]), n("tr", [n("td", [t._v("发行前总股数(万股)")]), n("td", [t._v(t._s(t.issuance.totqtybef))]), n("td", [t._v("发行后总股数(万股)")]), n("td", [t._v(t._s(t.issuance.totqtyaft))])]), n("tr", [n("td", [t._v("发行价格(元/股)")]), n("td", [t._v(t._s(t.issuance.issPrice))]), n("td", [t._v("每股面值(元/股)")]), n("td", [t._v(t._s(t.issuance.pervalue))])]), n("tr", [n("td", [t._v("网下拟配售数量上限(万股)")]), n("td", [t._v(t._s(t.issuance.offLplanplaMaxQty))]), n("td", [t._v("网下拟配售数量下限(万股)")]), n("td", [t._v(t._s(t.issuance.offLplanplaMinQty))])])])])])
        }), pr, !1, null, "403320ca", null)), yr = mr.exports, br = n("vngs"), xr = {
            name: "stockdividendTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "分红信息",
                        id: "stock-stockdividend",
                        url: "/c/shareDividendAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "公告日期",
                            key: "publishdate",
                            width: 100,
                            isDate: !0
                        }, {name: "权益类型", key: "divitype", width: 260, align: "left"}, {
                            name: "发放对象",
                            key: "graobjtype",
                            width: 170
                        }, {name: "股权登记日", key: "equrecorddate", width: 100, isDate: !0}, {
                            name: "权除利息日",
                            key: "xdrdate",
                            width: 100,
                            isDate: !0
                        }, {name: "操作", width: 60, value: "详情", url: "detailUrl"}]
                    }
                }
            }
        }, _r = xr, wr = Object(x.a)(_r, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Cr = wr.exports, Sr = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        财务分析\n        "), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], kr = null, Tr = {
            name: "NewFinanceAnalysis", props: {
                financeAnalysis: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {
                    chartType: [{type: "bizInco", name: "营业收入"}, {type: "netProfit", name: "净利润"}, {
                        type: "netAssets",
                        name: "净资产"
                    }, {type: "totAsset", name: "总资产"}, {type: "mananEtr", name: "经营现金流量净额"}],
                    activeType: {type: "bizInco", name: "营业收入"},
                    chartData: null
                }
            }, mounted: function () {
                this.initChart()
            }, methods: {
                initChart: function () {
                    kr = this.financeAnalysis, this.drawChart(kr, this.activeType.type)
                }, drawChart: function (t, e) {
                    var n = {
                        grid: {left: "0%", right: "0%"},
                        xAxis: {
                            type: "category",
                            axisLine: {lineStyle: {color: "#f5f5f5"}},
                            axisTick: {lineStyle: {width: 0}},
                            axisLabel: {margin: 30, interval: 0, color: "#333"}
                        },
                        yAxis: {type: "value", show: !1},
                        series: [{type: "line", symbolSize: 6, label: {show: !0}, lineStyle: {width: .8}, smooth: !0}],
                        color: "#2972fa"
                    }, i = document.getElementById("finance-charts"), r = this.$echarts.init(i);
                    n.xAxis.data = t[e].reportYear, n.series[0].data = t[e].numerical, n.series[0].label.formatter = "{c}" + t[e].unit, r.setOption(n)
                }, showChart: function (t) {
                    this.activeType = t, this.drawChart(kr, this.activeType.type)
                }
            }
        }, Mr = Tr, Or = (n("NqNN"), Object(x.a)(Mr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: "stock-financialanalyse"}
            }, [t._m(0), n("div", {class: ["finance-analysis-wrap"]}, [n("ul", {staticClass: "finance-analysis-type"}, t._l(t.chartType, (function (e, i) {
                return n("li", {
                    key: i, class: e.name === t.activeType.name ? "active" : "", on: {
                        click: function (n) {
                            return t.showChart(e)
                        }
                    }
                }, [t._v(t._s(e.name))])
            })), 0), n("div", {staticClass: "analysis-type-active"}, [t._v(t._s(t.activeType.name))]), n("div", {attrs: {id: "finance-charts"}})])])
        }), Sr, !1, null, "6957b218", null)), Ar = Or.exports, Dr = {total: 0, page: 1, size: 1, list: []}, Er = {
            name: "stockTab",
            components: {
                SubTabs: nt,
                Entinfo: mn,
                Securitie: wn,
                Person: Mn,
                Contacts: Pn,
                Issuance: Bn,
                Financemain: Hn,
                Cashflow: Yn,
                Financeprofit: Kn,
                Balancesheet: ti,
                Tenstockholder: ri,
                Tenltstockholder: li,
                Stockmanager: vi,
                Stockstructure: hi,
                StockManagerchangeTable: Oe,
                StockDividendTable: Pe,
                StockrightIssueTable: Ne,
                CoreTopicsContent: Ve,
                StockRelieveTable: Ue,
                StockPledgeTable: Ze,
                StockViolationTable: Je,
                StockExternalTable: rn,
                StockEntnoticeTable: ln,
                NoDataTab: Se,
                StockAddissueTable: hn,
                ProspectusTable: xi,
                NewStockManager: ki,
                NewTenStockHolder: Ti.a,
                NewEntinfo: Ei,
                NewSecuritie: Ni,
                EquityChange: zi,
                NewFinancemain: Ui,
                NewCashflow: Zi,
                NewFinanceprofit: Ji,
                NewBalancesheet: ir,
                NewPerson: lr,
                NewContacts: fr,
                FirstPost: yr,
                NewStockAddissueTable: br.a,
                ShareDividend: Cr,
                NewFinanceAnalysis: Ar
            },
            data: function () {
                return {
                    loading: !0,
                    isAllNodata: !0,
                    isAllNodataS: !0,
                    getStockData: !1,
                    getNewStockData: !1,
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    stockBasicinfo: {},
                    stockissuance: null,
                    financemain: Q()({}, Dr),
                    cashflow: Q()({}, Dr),
                    financeprofit: Q()({}, Dr),
                    balancesheet: Q()({}, Dr),
                    tenstockholder: Q()({}, Dr),
                    tenltstockholder: Q()({}, Dr),
                    stockstructure: Q()({}, Dr),
                    stockManager: Q()({}, Dr),
                    stockManagerchange: Q()({}, Dr),
                    stockDividend: Q()({}, Dr),
                    stockrightIssue: Q()({}, Dr),
                    coreTopicsContent: [],
                    stockrelieve: Q()({}, Dr),
                    stockPledge: Q()({}, Dr),
                    stockViolation: Q()({}, Dr),
                    stockExternal: Q()({}, Dr),
                    stockEntnotice: Q()({}, Dr),
                    stockAddissue: Q()({}, Dr),
                    prospectus: Q()({}, Dr),
                    newstockmanager: Q()({}, Dr),
                    newtenstockholder: Q()({}, Dr),
                    newfinancialindicator: Q()({}, Dr),
                    newprofit: Q()({}, Dr),
                    newassetsliab: Q()({}, Dr),
                    newcashflow: Q()({}, Dr),
                    equitychange: Q()({}, Dr),
                    sharedividend: Q()({}, Dr),
                    stockbasicinfo: {},
                    firstpost: Q()({}, Dr),
                    additionalissue: Q()({}, Dr),
                    financialanalysis: null,
                    newOTCBasicInfo: {}
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }, typeId: {type: String, default: ""}
            },
            computed: {
                finalTypeId: function () {
                    var t = this.typeId;
                    if (!t) {
                        var e = this.newTabs.filter((function (t) {
                            return "stock" === t.id
                        }));
                        e && e.length && (t = e[0].children[0].id)
                    }
                    return t
                }
            },
            mounted: function () {
                this.initMethods()
            },
            watch: {
                typeId: function () {
                    this.initMethods()
                }
            },
            methods: {
                initMethods: function () {
                    "a-stock" !== this.finalTypeId || this.getStockData ? "s-stock" !== this.finalTypeId || this.getNewStockData || this.threeBoardAllAjax() : this.getStockinfoajax()
                }, getStockinfoajax: function () {
                    var t = this;
                    this.loading = !0, this.$http.get("/detail/stockinfoajax?pid=" + this.pid).then((function (e) {
                        if (0 === e.status) {
                            t.getStockData = !0;
                            var n = e.data, i = n.stockBasicinfo, r = n.stockissuance, a = n.financemain, o = n.cashflow,
                                s = n.financeprofit, l = n.balancesheet, u = n.tenstockholder, c = n.tenltstockholder,
                                d = n.stockstructure, h = n.stockManager, f = n.stockManagerchange, p = n.stockdividend,
                                g = n.stockrightissue, v = n.stockcoretopics, m = n.stockrelieve, y = n.stockpledge,
                                b = n.stockviolation, x = n.stockexternal, _ = n.stockentnotice, w = n.stockaddissue,
                                C = n.prospectus;
                            (0 !== a.total || 0 !== s.list.length || 0 !== l.list.length || 0 !== u.total || 0 !== c.total || 0 !== d.total || 0 !== h.total || 0 !== f.total || 0 !== p.total || 0 !== g.total || 0 !== m.total || 0 !== y.total || 0 !== b.total || 0 !== x.total || 0 !== _.total || 0 !== w.total || v.coreTopicsContent || 0 !== o.total || 0 !== C.total) && (t.isAllNodata = !1), t.stockBasicinfo = i, t.stockissuance = r, t.financemain = a, t.financeprofit = s, t.balancesheet = l, t.tenstockholder = u, t.tenltstockholder = c, t.stockstructure = d, t.stockManager = h, t.stockManagerchange = f, t.stockDividend = p, t.stockrightIssue = g, t.coreTopicsContent = v.coreTopicsContent || [], t.stockrelieve = m, t.stockPledge = y, t.stockViolation = b, t.stockExternal = x, t.stockEntnotice = _, t.stockAddissue = w, t.cashflow = o, t.prospectus = C
                        } else t.$Message.warning(e.msg || "接口错误")
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    })).finally((function () {
                        t.loading = !1
                    }))
                }, threeBoardAllAjax: function () {
                    var t = this;
                    this.loading = !0, this.$http.get("/detail/threeBoardAllAjax?pid=" + this.pid).then((function (e) {
                        if (0 === e.status) {
                            t.getNewStockData = !0;
                            var n = e.data, i = n.stockmanager, r = n.tenstockholder, a = n.equitychange,
                                o = n.stockbasicinfo, s = n.additionalissue, l = n.firstpost, u = n.sharedividend,
                                c = n.financialanalysis, h = n.financialindicator, f = n.profit, p = n.assetsliab,
                                g = n.cashflow;
                            "{}" === d()(o) && "{}" === d()(l) && 0 === i.total && 0 === r.total && 0 === a.total && 0 === s.total && 0 === u.total && 0 === h.total && 0 === f.total && 0 === p.total && 0 === g.total || (t.isAllNodataS = !1), t.stockbasicinfo = o, t.newstockmanager = i, t.newtenstockholder = r, t.equitychange = a, t.additionalissue = s, t.firstpost = l, t.sharedividend = u, t.financialanalysis = c, t.newfinancialindicator = h, t.newprofit = f, t.newassetsliab = p, t.newcashflow = g, t.getNewOTCBasicInfot()
                        } else t.$Message.warning(e.msg || "接口错误")
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    })).finally((function () {
                        t.loading = !1
                    }))
                }, changeSubTitleId: function (t) {
                    this.$emit("changeSubTitleId", t)
                }, getNewOTCBasicInfot: function () {
                    var t = this;
                    this.$http.get("/threeboard/getNewOTCBasicInfoAjax?pid=" + this.pid).then((function (e) {
                        0 === e.status && (t.newOTCBasicInfo = e.data)
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }
            }
        }, Pr = Er, Ir = (n("VvX6"), Object(x.a)(Pr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "stock-tab"}, [n("sub-tabs", {
                attrs: {
                    "tab-id": "stock",
                    "new-tabs": t.newTabs,
                    "type-id": t.finalTypeId
                }, on: {changeSubTitleId: t.changeSubTitleId}
            }), t.loading ? n("Spin", [t._v("加载中...")]) : "a-stock" === t.finalTypeId && t.isAllNodata || "s-stock" === t.finalTypeId && t.isAllNodataS ? n("no-data-tab") : n("div", ["a-stock" === t.finalTypeId ? [n("h2", {staticClass: "newbasicinfo-title"}, [t._v("\n                " + t._s(t.stockBasicinfo.securitie.aStockName) + "（" + t._s(t.stockBasicinfo.securitie.aStockCode) + "）\n            ")]), t.stockBasicinfo.entinfo ? n("entinfo", {attrs: {entinfo: t.stockBasicinfo.entinfo}}) : t._e(), t.stockBasicinfo.securitie ? n("securitie", {attrs: {securitie: t.stockBasicinfo.securitie}}) : t._e(), t.financemain.list && 0 !== t.financemain.list.length ? n("financemain", {
                attrs: {
                    financemain: t.financemain.list,
                    total: t.financemain.total,
                    "tab-id": "stock"
                }
            }) : t._e(), t.financeprofit.list && 0 !== t.financeprofit.list.length ? n("financeprofit", {
                attrs: {
                    financemain: t.financeprofit.list,
                    total: t.financeprofit.total,
                    "tab-id": "stock"
                }
            }) : t._e(), t.balancesheet.list && 0 !== t.balancesheet.list.length ? n("balancesheet", {
                attrs: {
                    financemain: t.balancesheet.list,
                    total: t.balancesheet.total,
                    "tab-id": "stock"
                }
            }) : t._e(), t.cashflow.list && 0 !== t.cashflow.list.length ? n("cashflow", {
                attrs: {
                    cashflow: t.cashflow.list,
                    total: t.cashflow.total,
                    "tab-id": "stock"
                }
            }) : t._e(), t.stockBasicinfo.person ? n("person", {
                attrs: {
                    person: t.stockBasicinfo.person,
                    "tab-id": "stock"
                }
            }) : t._e(), t.stockBasicinfo.contacts ? n("contacts", {attrs: {contacts: t.stockBasicinfo.contacts}}) : t._e(), n("tenstockholder", {attrs: {tenstockholder: t.tenstockholder}}), n("tenltstockholder", {attrs: {tenltstockholder: t.tenltstockholder}}), n("stockstructure", {attrs: {stockstructure: t.stockstructure}}), n("stockmanager", {attrs: {"stock-manager": t.stockManager}}), n("stock-managerchange-table", {attrs: {"origin-data": t.stockManagerchange}}), n("stock-dividend-table", {attrs: {"origin-data": t.stockDividend}}), n("stockright-issue-table", {attrs: {"origin-data": t.stockrightIssue}}), t.stockissuance.establishedDate ? n("issuance", {attrs: {issuance: t.stockissuance}}) : t._e(), 0 !== t.coreTopicsContent.length ? n("core-topics-content", {attrs: {"origin-data": t.coreTopicsContent}}) : t._e(), n("stock-addissue-table", {attrs: {"origin-data": t.stockAddissue}}), n("stock-relieve-table", {attrs: {"origin-data": t.stockrelieve}}), n("stock-pledge-table", {attrs: {"origin-data": t.stockPledge}}), n("stock-violation-table", {attrs: {"origin-data": t.stockViolation}}), n("stock-external-table", {attrs: {"origin-data": t.stockExternal}}), n("prospectus-table", {attrs: {"origin-data": t.prospectus}}), n("stock-entnotice-table", {attrs: {"origin-data": t.stockEntnotice}})] : [n("h2", {staticClass: "newbasicinfo-title"}, [t._v(t._s(t.newOTCBasicInfo.sesname) + "（" + t._s(t.newOTCBasicInfo.symbol) + "） "), t.newOTCBasicInfo.isDelisting ? n("span", {staticClass: "list-status"}, [t._v(t._s(t.newOTCBasicInfo.liststatus))]) : t._e()]), t.stockbasicinfo.entinfo ? n("new-entinfo", {attrs: {entinfo: t.stockbasicinfo.entinfo}}) : t._e(), t.stockbasicinfo.securities ? n("new-securitie", {attrs: {securitie: t.stockbasicinfo.securities}}) : t._e(), t.stockbasicinfo.person ? n("new-person", {attrs: {person: t.stockbasicinfo.person}}) : t._e(), t.stockbasicinfo.contacts ? n("new-contacts", {attrs: {contacts: t.stockbasicinfo.contacts}}) : t._e(), t.financialanalysis ? n("new-finance-analysis", {attrs: {"finance-analysis": t.financialanalysis}}) : t._e(), n("equity-change", {attrs: {"origin-data": t.equitychange}}), t.newfinancialindicator.list && t.newfinancialindicator.list.length > 0 ? n("new-financemain", {
                attrs: {
                    "data-source": t.newfinancialindicator.list,
                    total: t.newfinancialindicator.total,
                    pid: t.pid
                }
            }) : t._e(), t.newprofit.list && t.newprofit.list.length > 0 ? n("new-financeprofit", {
                attrs: {
                    "data-source": t.newprofit.list,
                    total: t.newprofit.total,
                    pid: t.pid
                }
            }) : t._e(), t.newassetsliab.list && t.newassetsliab.list.length > 0 ? n("new-balancesheet", {
                attrs: {
                    "data-source": t.newassetsliab.list,
                    total: t.newassetsliab.total,
                    pid: t.pid
                }
            }) : t._e(), t.newcashflow.list && t.newcashflow.list.length > 0 ? n("new-cashflow", {
                attrs: {
                    "data-source": t.newcashflow.list,
                    total: t.newcashflow.total,
                    pid: t.pid
                }
            }) : t._e(), n("new-ten-stock-holder", {attrs: {"origin-data": t.newtenstockholder}}), n("new-stock-manager", {attrs: {"origin-data": t.newstockmanager}}), t.firstpost && 0 !== t.firstpost.total ? n("first-post", {attrs: {issuance: t.firstpost}}) : t._e(), n("new-stock-addissue-table", {attrs: {"origin-data": t.additionalissue}}), n("share-dividend", {attrs: {"origin-data": t.sharedividend}})]], 2)], 1)
        }), [], !1, null, "245014b4", null)), Lr = Ir.exports, Rr = n("EJiy"), Nr = n.n(Rr), Br = {
            name: "lawWenshuTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "裁判文书",
                        id: "risk-lawWenshu",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/lawWenshuAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "日期",
                            key: "verdictDate",
                            isDate: !0,
                            width: 100
                        }, {name: "案件名称", key: "wenshuName", align: "left", url: "detailUrl", width: 272}, {
                            name: "案由",
                            key: "type",
                            align: "left",
                            width: 160
                        }, {name: "案件身份", key: "role", width: 140}, {name: "案号", key: "caseNo", align: "left", width: 120}],
                        explain: "裁判文书记载人民法院审理过程和结果，是诉讼活动结果的载体，也是人民法院确定和分配当事人实体权利义务的唯一凭证。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, jr = Br, Fr = Object(x.a)(jr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), zr = Fr.exports, Vr = {
            name: "discreditTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "失信被执行人",
                        id: "risk-discredit",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/discredit/dishonestlistAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布日期",
                            key: "publishDate",
                            isDate: !0,
                            width: 100
                        }, {name: "案号", key: "verdictCaseNumber", align: "left", width: 160}, {
                            name: "执行法院",
                            key: "implementCourtName",
                            align: "left",
                            width: 173
                        }, {name: "履行情况", key: "performStatus", width: 120}, {
                            name: "执行依据文号",
                            key: "implementCaseNumber",
                            align: "left",
                            width: 178
                        }, {
                            name: "操作", value: function (t) {
                                return '<a target="_blank" href="/discredit/dishonestinfo?discreditId=' + t.discreditId + "&disId=" + window.pageData.result.pid + "&t=8&q=" + window.pageData.result.entName + '" target="_blank">详情</a>'
                            }, width: 60
                        }],
                        explain: "失信被执行人俗称“老赖”，指法律上具有履行能力而不履行生效法律文书确定的义务的被执行人。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Hr = Vr, Wr = Object(x.a)(Hr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), qr = Wr.exports, Ur = {
            name: "abnormalTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "经营异常",
                        id: "risk-abnormal",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/abnormalAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "列入日期",
                            key: "enterDate",
                            isDate: !0,
                            width: 100
                        }, {name: "列入经营异常名录原因", key: "enterReason", align: "left", width: 170}, {
                            name: "列入决定机关",
                            key: "authority",
                            align: "left",
                            width: 125
                        }, {name: "移出日期", key: "leaveDate", isDate: !0, width: 100}, {
                            name: "移出经营异常名录原因",
                            key: "leaveReason",
                            align: "left",
                            width: 170
                        }, {name: "移出决定机关", key: "leaveAuthority", width: 126}],
                        explain: "企业未在规定期限公示年度报告信息、未按照工商部门责令的期限公示有关企业信息、公示信息隐瞒真实情况以及登记住所或经营场所失联时，会被列入经营异常名录。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Yr = Ur, Gr = Object(x.a)(Yr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Xr = Gr.exports, Zr = {
            name: "penaltiesTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "行政处罚",
                        id: "risk-penalties",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/penaltiesAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "决定日期",
                            key: "penaltiesDate",
                            isDate: !0,
                            width: 100
                        }, {name: "决定文书号", key: "penaltiesNumber", align: "left", width: 240}, {
                            name: "行政处罚种类",
                            key: "penaltiesType",
                            width: 150
                        }, {name: "决定机关", key: "penalties", align: "left", width: 242}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "行政处罚是指行政主体依照法定职权和程序对违反行政法规范，尚未构成犯罪的相对人给予行政制裁的具体行政行为。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Kr = Zr, $r = Object(x.a)(Kr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Qr = $r.exports, Jr = n("sk9p"), ta = n.n(Jr), ea = {
            name: "knowledgePledgeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "知识产权出质",
                        id: "risk-intellectual",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/KnowledgePledgeAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "质权登记期限", value: function (t) {
                                var e = (t || {}).validityDate;
                                if (e && e.indexOf("至") > -1) {
                                    var n = e.split("至") || [], i = ta()(n, 2);
                                    return "<div>" + i[0] + " 至 </div><div>" + i[1] + "</div>"
                                }
                                return "" + (e || "-")
                            }, align: "left", width: 126
                        }, {name: "名称", key: "propertiesName", align: "left", width: 154}, {
                            name: "种类",
                            key: "propertiesType",
                            width: 70
                        }, {name: "出质人名称", key: "pledgor", align: "left", width: 140}, {
                            name: "质权人名称",
                            key: "pawnee",
                            align: "left",
                            width: 140
                        }, {name: "状态", key: "pledgeStatus", width: 60}, {
                            name: "公示日期",
                            key: "publishDate",
                            isDate: !0,
                            width: 100
                        }],
                        explain: "知识产权质押是指知识产权权利人以合法拥有的专利权、注册商标专用权、著作权等知识产权中的财产权作为抵押品，向银行申请贷款或为第三者的贷款提供担保。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, na = ea, ia = Object(x.a)(na, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), ra = ia.exports, aa = {
            name: "equitypledgeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "股权出质",
                        id: "risk-equitypledge",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/equitypledgeAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "登记日期",
                            key: "issueDate",
                            isDate: !0,
                            width: 100
                        }, {
                            name: "出质人",
                            key: "equalityPledgor",
                            url: "equalityPledgorDetailUrl",
                            align: "left",
                            width: 286
                        }, {
                            name: "质权人",
                            key: "equalityPawnee",
                            url: "equalityPawneeDetailUrl",
                            align: "left",
                            width: 286
                        }, {name: "状态", key: "equalityPledgeStatusCode", width: 60}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "股权出质是指把股票持有人持有的股权当作抵押品，向银行申请贷款或为第三者的贷款提供担保。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, oa = aa, sa = Object(x.a)(oa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), la = sa.exports, ua = {
            name: "chattelmortgageTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "动产抵押",
                        id: "risk-chattelmortgage",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/chattelmortgageAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "登记日期",
                            key: "issueDate",
                            isDate: !0,
                            width: 100
                        }, {name: "被担保债权数额", key: "guaranteeClaimAmount", width: 200}, {
                            name: "登记机关",
                            key: "issueAuthority",
                            align: "left",
                            width: 372
                        }, {name: "状态", key: "guaranteeClaimStatusCode", width: 60}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "动产抵押是指债务人或第三人在动产不移转占有的情况下，将动产供以担保的抵押形式。在动产抵押中，债权人对于作为担保的动产不转移占有，但在债务人不履行债务时，债权人对动产可以进行变价出售并就其价款优先受偿。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, ca = ua, da = Object(x.a)(ca, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), ha = da.exports, fa = {
            name: "clearaccountTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "清算组信息",
                        id: "risk-clearaccount",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/clearaccountAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "清算组负责人",
                            key: "leader",
                            width: 200
                        }, {name: "清算组成员", key: "employees", align: "left", width: 595}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, pa = fa, ga = Object(x.a)(pa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), va = ga.exports, ma = n("P2sY"), ya = n.n(ma), ba = {
            name: "simplecancellationTable", props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {
                    config: {title: "简易注销公告", id: "risk-simplecancellation"},
                    list: [],
                    companyInfo: {},
                    gsScaObjections: [],
                    gsScaResult: []
                }
            }, mounted: function () {
                this.getTableData()
            }, watch: {
                originData: function (t, e) {
                    this.originData = t, this.getTableData()
                }
            }, methods: {
                getTableData: function () {
                    var t = (this.originData || {}).list;
                    this.list = t || [], this.companyInfo = this.list[0] || {};
                    var e = this.companyInfo, n = e.gsScaObjections, i = e.gsScaResult;
                    this.config = ya()({}, this.config, this.originData), this.gsScaObjections = n || [], this.gsScaResult = i || []
                }
            }
        }, xa = ba, _a = (n("3syX"), Object(x.a)(xa, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.list.length ? i("div", {
                staticClass: "notice-table-wrapper",
                attrs: {id: t.config.id}
            }, [i("h3", {staticClass: "aqc-detail-title"}, [t._v("\n        " + t._s(t.config.title) + "\n        "), i("span", {staticClass: "aqc-detail-title-number"}, [t._v("\n            " + t._s(t.config.total) + "\n        ")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("table", {staticClass: "inner-table"}, [i("tr", [i("td", {
                staticClass: "table-header",
                attrs: {rowspan: "5"}
            }, [t._v("企业公告信息")]), i("td", {staticClass: "table-title"}, [t._v("企业名称")]), i("td", {staticClass: "td-text"}, [t._v(t._s(t.companyInfo.entName || "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("统一社会信用代码/注册号")]), i("td", {staticClass: "td-text"}, [t._v(t._s(t.companyInfo.creditNo || "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("登记机关")]), i("td", {staticClass: "td-text"}, [t._v(t._s(t.companyInfo.departMent || "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("公告期")]), i("td", {staticClass: "td-text"}, [t._v(t._s(t.companyInfo.noticePeriodDate || "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("全体投资人承诺书")]), i("td", {staticClass: "td-text"}, [t.companyInfo.cancelImageUrl ? i("a", {
                attrs: {
                    href: t.companyInfo.cancelImageUrl,
                    target: "_blank"
                }
            }, [t._v("\n                    查看详情\n                ")]) : i("span", [t._v("-")])])]), t._l(t.gsScaObjections, (function (e, n) {
                return i("tr", {key: e.seq_no}, [n ? t._e() : i("td", {
                    staticClass: "table-header",
                    attrs: {rowspan: t.gsScaObjections.length}
                }, [t._v("异议信息")]), i("td", {
                    staticClass: "td-list",
                    attrs: {colspan: "2"}
                }, [i("table", {
                    staticClass: "td-table",
                    attrs: {width: "100% ", cellspacing: "0", cellpadding: "0"}
                }, [i("tr", [i("td", {staticClass: "table-title"}, [t._v("申请异议人")]), i("td", {staticClass: "td-text"}, [t._v(t._s(e && e.proposer ? e.proposer : "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("异议时间")]), i("td", {staticClass: "td-text"}, [t._v(t._s(e && e.date ? e.date : "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("异议内容")]), i("td", {staticClass: "td-text"}, [t._v(t._s(e && e.content ? e.content : "-"))])])])])])
            })), t._l(t.gsScaResult, (function (e, n) {
                return i("tr", {key: n}, [n ? t._e() : i("td", {
                    staticClass: "table-header",
                    attrs: {rowspan: t.gsScaResult.length}
                }, [t._v("简易注销结果")]), i("td", {
                    staticClass: "td-list",
                    attrs: {colspan: "2"}
                }, [i("table", {
                    staticClass: "td-table",
                    attrs: {width: "100% ", cellspacing: "0", cellpadding: "0"}
                }, [i("tr", [i("td", {staticClass: "table-title"}, [t._v("简易注销结果")]), i("td", {staticClass: "td-text"}, [t._v(t._s(e && e.result ? e.result : "-"))])]), i("tr", [i("td", {staticClass: "table-title"}, [t._v("核准日期")]), i("td", {staticClass: "td-text"}, [t._v(t._s(e && e.date ? e.date : "-"))])])])])])
            }))], 2)]) : t._e()
        }), [], !1, null, "1fc7dabe", null)), wa = _a.exports, Ca = {
            name: "stockfreezeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "股权冻结",
                        id: "risk-stockfreeze",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/Stockfreeze/stockFreezeAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "被执行人",
                            key: "beExecutedPerson",
                            align: "left",
                            width: 226
                        }, {name: "股权数额", key: "equalityAmount", width: 150}, {
                            name: "执行通知文书号",
                            key: "notificationNumber",
                            align: "left",
                            width: 175
                        }, {name: "类型", key: "type", width: 100}, {name: "状态", key: "status", width: 80}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "股权冻结是人民法院限制股权所有者提取或转移自己股权的一种强制措施。此措施主要目的是防止股权收益的不当流失，给上市公司内部利益造成损失。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Sa = Ca, ka = Object(x.a)(Sa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Ta = ka.exports, Ma = {
            name: "illegalTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "严重违法",
                        id: "risk-illegal",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/illegalAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "列入日期",
                            key: "enterDate",
                            isDate: !0,
                            width: 100
                        }, {name: "列入严重违法名录原因", key: "enterReason", align: "left", width: 170}, {
                            name: "列入决定机关",
                            key: "authority",
                            align: "left",
                            width: 125
                        }, {name: "移出日期", key: "leaveDate", isDate: !0, width: 100}, {
                            name: "移出严重违法名录原因",
                            key: "leaveReason",
                            align: "left",
                            width: 170
                        }, {name: "移出决定机关", key: "leaveAuthority", align: "left", width: 126}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Oa = Ma, Aa = Object(x.a)(Oa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Da = Aa.exports, Ea = {
            name: "taxviolationTable",
            components: {AiTableList: lt.a, FoldText: f.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "税务违法",
                        id: "risk-taxviolation",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/taxviolationAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "纳税人名称", value: function (t) {
                                return (t || {}).name || "-"
                            }, align: "left", width: 233
                        }, {name: "案件性质", key: "penaltyType", truncate: 2, onlyTruncate: !1, width: 400}, {
                            name: "案件上报期",
                            key: "reportDate",
                            isDate: !0,
                            width: 100
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}],
                        explain: "税务违法是指税收法律关系主体在税收征收管理过程中违反国家税法的行为。税务违法行为会受到相应的行政处罚或刑事处罚。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Pa = Ea, Ia = Object(x.a)(Pa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), La = Ia.exports, Ra = {
            name: "opennoticeTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "开庭公告",
                        id: "risk-opennotice",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/opennoticeajax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "开庭日期",
                            key: "hearingDate",
                            width: 100
                        }, {name: "案号", key: "caseNo", align: "left", width: 160}, {
                            name: "案由",
                            key: "caseReason",
                            align: "left",
                            width: 120
                        }, {
                            name: "当事人", value: function (t) {
                                var e = (t || {}).relatedCompanies;
                                if (!e || "-" === e) return "-";
                                var n = [];
                                for (var i in e) n.push("<p>" + i + "：" + e[i].nameArr.join("、") + "</p>");
                                return n.join("")
                            }, align: "left", width: 350
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Na = Ra, Ba = Object(x.a)(Na, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), ja = Ba.exports, Fa = {
            name: "judicialauctionTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "司法拍卖",
                        id: "risk-judicialauction",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/judicialauctionajax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "拍卖日期", value: function (t) {
                                var e = (t || {}).date;
                                if (e && e.indexOf("至") > -1) {
                                    var n = e.split("至") || [], i = ta()(n, 2);
                                    return "<div>" + i[0] + " 至 </div><div>" + i[1] + "</div>"
                                }
                                return "" + (e || "-")
                            }, align: "left", width: 190
                        }, {name: "拍卖名称", key: "name", align: "left", width: 290}, {
                            name: "起拍价(元)",
                            key: "startPrice",
                            width: 120
                        }, {name: "执行法院", key: "court", align: "left", width: 132}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "司法拍卖是指人民法院在民事案件强制执行程序中，按程序自行进行或委托拍卖公司公开处理债务人的财产，以清偿债权人债权。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, za = Fa, Va = Object(x.a)(za, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Ha = Va.exports, Wa = {
            name: "executedpersonTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "被执行人",
                        id: "risk-executedperson",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/executedPersonAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "立案日期",
                            key: "date",
                            isDate: !0,
                            width: 100
                        }, {name: "案号", key: "executeNumber", align: "left", width: 220}, {
                            name: "执行标的",
                            key: "subjectMatter",
                            width: 120
                        }, {name: "执行法院", key: "court", align: "left", width: 290}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "被执行人一般指在法定的上诉期满后，或终审判决作出后，在法律文书生效基础上拒不履行法院判决或仲裁裁决的当事人。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, qa = Wa, Ua = Object(x.a)(qa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Ya = Ua.exports, Ga = {
            name: "courtnoticedTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "法院公告",
                        id: "risk-courtnoticed",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/courtnoticeajax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "公告日期",
                            key: "date",
                            isDate: !0,
                            width: 100
                        }, {name: "公告类型", key: "type", width: 90}, {
                            name: "案由",
                            key: "cause",
                            align: "left",
                            width: 113
                        }, {
                            name: "当事人", value: function (t) {
                                var e = (t || {}).people;
                                if (!e || !e.length) return "-";
                                var n = e.map((function (t) {
                                    var e = t || {}, n = e.entUrl, i = e.personUrl;
                                    return n || i ? "<a href='" + (n || i) + "' target='_blank'>" + t.name + "</a>" : "" + t.name
                                }));
                                return e && e.length < 3 ? n.join("、") : n.slice(0, 2).join("、") + "..."
                            }, align: "left", width: 260
                        }, {name: "受理法院", key: "court", align: "left", width: 166}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Xa = Ga, Za = Object(x.a)(Xa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), Ka = Za.exports, $a = {
            name: "filinginfoTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "立案信息",
                        id: "risk-filinginfo",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/filinginfoAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "立案日期",
                            key: "date",
                            isDate: !0,
                            width: 100
                        }, {name: "案号", key: "caseNumber", align: "left", width: 144}, {
                            name: "当事人", value: function (t) {
                                var e = (t || {}).relatedCompanies;
                                if (!e || "-" === e) return "-";
                                var n = [];
                                for (var i in e) n.push("<p>" + i + "：" + e[i].nameArr.join("、") + "</p>");
                                return n.join("")
                            }, align: "left", width: 363
                        }, {name: "受理法院", key: "court", align: "left", width: 122}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Qa = $a, Ja = Object(x.a)(Qa, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), to = Ja.exports, eo = {
            name: "restrictedconsumerTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "限制高消费",
                        id: "risk-restrictedconsumer",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/restrictedConsumerAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布日期",
                            key: "releaseDate",
                            isDate: !0,
                            width: 100
                        }, {
                            type: "image-text-more",
                            name: "被限制人姓名",
                            image: "personLogo",
                            textImage: "personLogoWord",
                            title: "personName",
                            titleUrl: "personUrl",
                            limitWidth: 150,
                            truncate: 1,
                            isPortrait: !0,
                            extraValue: function (t) {
                                return +t.companyNum ? "TA有" + (+t.companyNum > 999 ? "999+" : t.companyNum) + "家企业 >" : ""
                            },
                            extraLink: "personUrl",
                            width: 195
                        }, {name: "关联企业", key: "companyName", url: "companyUrl", align: "left", width: 145}, {
                            name: "申请执行人",
                            key: "execComapnyName",
                            align: "left",
                            width: 150
                        }, {name: "执行法院", key: "court", align: "left", width: 141}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, no = eo, io = Object(x.a)(no, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), ro = io.exports, ao = {
            name: "terminationcaseDataTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "终本案件",
                        id: "risk-terminationcase",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/terminationcaseAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "立案日期",
                            key: "filingDate",
                            isDate: !0,
                            width: 100
                        }, {name: "案号", key: "caseNoTerminal", align: "left", width: 160}, {
                            name: "执行标的",
                            key: "amount",
                            width: 120
                        }, {name: "执行法院", key: "court", align: "left", width: 249}, {
                            name: "终本日期",
                            key: "terminateDate",
                            isDate: !0,
                            width: 100
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}],
                        explain: "终本案件指在法定的执行期限6个月内采取各种执行措施，都无法将本案执行完毕，法院将暂时终结执行程序并做结案处理，待发现财产后继续恢复执行的一类案件。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, oo = ao, so = Object(x.a)(oo, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), lo = so.exports, uo = {
            name: "EnvpunishmentTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "环保处罚",
                        id: "risk-envpunishment",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/envpunishmentAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "documentNo",
                            name: "决定书文号",
                            align: "left",
                            width: 180
                        }, {key: "illegalType", name: "违法类型", width: 132}, {
                            key: "punishmentType",
                            name: "处罚类别",
                            width: 132
                        }, {key: "punishmentDept", name: "处罚单位", align: "left", width: 185}, {
                            key: "punishmentDate",
                            name: "处罚日期",
                            width: 100,
                            isDate: !0
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, co = uo, ho = Object(x.a)(co, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), fo = ho.exports, po = {
            name: "ProjectAbnormalTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "工程异常",
                        id: "risk-engineeringanomaly",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/engineeringanomalyAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "caseNo",
                            name: "文号",
                            align: "left",
                            width: 160
                        }, {key: "type", name: "处理类型", width: 101}, {
                            key: "reason",
                            name: "事由",
                            truncate: 2,
                            onlyTruncate: !0,
                            width: 222
                        }, {key: "department", name: "实施部门", align: "left", width: 146}, {
                            key: "pubDate",
                            name: "决定日期",
                            width: 100,
                            isDate: !0
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, go = po, vo = Object(x.a)(go, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), mo = vo.exports, yo = {
            name: "OverduetaxsTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "欠税公告",
                        id: "risk-overduetaxs",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/overduetaxsAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "taxpayerNum",
                            name: "纳税人识别号",
                            align: "center",
                            width: 182
                        }, {key: "taxType", name: "欠税税种", align: "left", width: 108}, {
                            key: "overdueAmount",
                            name: "欠税余额（元）",
                            width: 149
                        }, {key: "taxBureau", name: "发布单位", width: 190}, {
                            key: "date",
                            name: "发布时间",
                            width: 100,
                            isDate: !0
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, bo = yo, xo = Object(x.a)(bo, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), _o = xo.exports, wo = {
            name: "untaxTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "税务非正常户",
                        id: "risk-untax",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/untaxAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "纳税人识别号",
                            key: "taxNum",
                            width: 239
                        }, {name: "纳税人状态", key: "state", width: 130}, {
                            name: "欠税税务种类",
                            key: "overdueType",
                            width: 130
                        }, {name: "认定原因", key: "reason", width: 130}, {
                            name: "认定日期",
                            key: "judgeDate",
                            isDate: !0,
                            width: 100
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Co = wo, So = Object(x.a)(Co, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null), ko = So.exports, To = {
            name: "LandmortgageTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "土地抵押",
                        id: "risk-landmortgage",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/landmortgageAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "parcelAddress",
                            name: "土地坐落",
                            align: "left",
                            width: 200
                        }, {
                            key: "landMortgageeName", name: "抵押人", value: function (t) {
                                var e = t || {}, n = e.landMortgageeName, i = e.pid;
                                return n === e.entName && i ? "\n                                    <a href='/company_detail_" + i + "' target='_blank'>" + n + "</a>\n                                " : "" + n
                            }, align: "left", width: 210
                        }, {
                            key: "landMortgagee", name: "抵押权人", value: function (t) {
                                var e = t || {}, n = e.landMortgagee, i = e.pid;
                                return n === e.entName && i ? "\n                                    <a href='/company_detail_" + i + "' target='_blank'>" + n + "</a>\n                                " : "" + n
                            }, align: "left", width: 210
                        }, {key: "time", name: "抵押起止日期", width: 110}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 62
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Mo = To, Oo = Object(x.a)(Mo, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Ao = Oo.exports, Do = {
            name: "BondbreachTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "债券违约",
                        id: "risk-bondbreach",
                        url: "/c/bondbreachAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "债券代码",
                            key: "bondCode",
                            width: 150
                        }, {name: "债券简称", key: "bondShortName", width: 240}, {
                            name: "动态",
                            key: "dynamic",
                            width: 240,
                            align: "left"
                        }, {name: "违约日期", isDate: !0, key: "defaultDate", width: 100}, {
                            name: "操作",
                            width: 60,
                            value: "详情",
                            url: "detailUrl"
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Eo = Do, Po = Object(x.a)(Eo, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null), Io = Po.exports, Lo = {total: 0, page: 1, size: 1, list: []}, Ro = {
            name: "riskTab",
            components: {
                SubTabs: nt,
                NoDataTab: Se,
                LawWenshuTable: zr,
                DiscreditTable: qr,
                AbnormalTable: Xr,
                PenaltiesTable: Qr,
                KnowledgePledgeTable: ra,
                EquitypledgeTable: la,
                ChattelmortgageTable: ha,
                ClearaccountTable: va,
                SimplecancellationTable: wa,
                StockFreezeTable: Ta,
                IllegalTable: Da,
                TaxviolationTable: La,
                OpennoticeTable: ja,
                JudicialauctionTable: Ha,
                ExecutedPersonTable: Ya,
                GetCourtNoticeDataTable: Ka,
                FilinginfoTable: to,
                RestrictedConsumerTable: ro,
                TerminationcaseTable: lo,
                envpunishmentTable: fo,
                ProjectabnormalTable: mo,
                OverduetaxsTable: _o,
                untaxTable: ko,
                LandmortgageTable: Ao,
                BondbreachTable: Io
            },
            data: function () {
                return {
                    loading: !0,
                    isAllNodata: !0,
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    lawWenshu: Q()({}, Lo),
                    discredit: Q()({}, Lo),
                    abnormal: Q()({}, Lo),
                    penalties: Q()({}, Lo),
                    KnowledgePledge: Q()({}, Lo),
                    equitypledge: Q()({}, Lo),
                    chattelmortgage: Q()({}, Lo),
                    clearaccount: Q()({}, Lo),
                    simplecancellation: Q()({}, Lo),
                    stockFreeze: Q()({}, Lo),
                    illegal: Q()({}, Lo),
                    taxviolation: Q()({}, Lo),
                    opennotice: Q()({}, Lo),
                    judicialauction: Q()({}, Lo),
                    executedPerson: Q()({}, Lo),
                    getCourtNoticeData: Q()({}, Lo),
                    filinginfo: Q()({}, Lo),
                    restrictedConsumer: Q()({}, Lo),
                    terminationcase: Q()({}, Lo),
                    envpunishment: Q()({}, Lo),
                    engineeringanomaly: Q()({}, Lo),
                    overduetaxs: Q()({}, Lo),
                    untax: Q()({}, Lo),
                    landmortgage: Q()({}, Lo),
                    bondbreach: Q()({}, Lo)
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            mounted: function () {
                this.getTableData()
            },
            methods: {
                getTableData: function () {
                    var t = this;
                    this.$http.get("/detail/focalPointAjax?pid=" + this.pid).then((function (e) {
                        if (0 === e.status) {
                            var n = e.data || {}, i = n.lawWenshu, r = n.discredit, a = n.abnormal, o = n.penalties,
                                s = n.KnowledgePledge, l = n.equitypledge, u = n.chattelmortgage, c = n.clearaccount,
                                d = n.simplecancellation, h = n.stockFreeze, f = n.illegal, p = n.taxviolation,
                                g = n.opennotice, v = n.judicialauction, m = n.executedPerson, y = n.getCourtNoticeData,
                                b = n.filinginfo, x = n.restrictedConsumer, _ = n.terminationcase, w = n.envpunishment,
                                C = n.engineeringanomaly, S = n.overduetaxs, k = n.untax, T = n.landmortgage,
                                M = n.bondbreach;
                            0 === i.total && 0 === r.total && 0 === a.total && 0 === o.total && 0 === s.total && 0 === l.total && 0 === u.total && 0 === c.total && 0 === d.total && 0 === h.total && 0 === f.total && 0 === p.total && 0 === g.total && 0 === v.total && 0 === m.total && 0 === y.total && 0 === b.total && 0 === x.total && 0 === _.total && 0 === w.total && 0 === C.total && 0 === S.total && 0 === k.total && 0 === T.total && 0 === M.total || (t.isAllNodata = !1), t.lawWenshu = i, t.discredit = r, t.abnormal = a, t.penalties = o, t.KnowledgePledge = s, t.equitypledge = l, t.chattelmortgage = u, t.clearaccount = c, t.simplecancellation = d, t.stockFreeze = h, t.illegal = f, t.taxviolation = p, t.opennotice = g, t.judicialauction = v, t.executedPerson = m, t.getCourtNoticeData = y, t.filinginfo = b, t.restrictedConsumer = x, t.terminationcase = _, t.envpunishment = w, t.engineeringanomaly = C, t.overduetaxs = S, t.untax = k, t.landmortgage = T, t.bondbreach = M
                        } else t.$Message.warning(e.msg || "接口错误");
                        t.loading = !1
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }, getResult: function (t) {
                    return "object" === (void 0 === t ? "undefined" : Nr()(t)) ? t.data : {}
                }
            }
        }, No = Ro, Bo = Object(x.a)(No, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "risk-tab"}, [n("sub-tabs", {
                attrs: {
                    "tab-id": "risk",
                    "new-tabs": t.newTabs
                }
            }), t.loading ? n("Spin", [t._v("加载中...")]) : t.isAllNodata ? n("no-data-tab") : n("div", [n("lawWenshu-table", {attrs: {"origin-data": t.lawWenshu}}), n("discredit-table", {attrs: {"origin-data": t.discredit}}), n("abnormal-table", {attrs: {"origin-data": t.abnormal}}), n("penalties-table", {attrs: {"origin-data": t.penalties}}), n("knowledgePledge-table", {attrs: {"origin-data": t.KnowledgePledge}}), n("equitypledge-table", {attrs: {"origin-data": t.equitypledge}}), n("chattelmortgage-table", {attrs: {"origin-data": t.chattelmortgage}}), n("clearaccount-table", {attrs: {"origin-data": t.clearaccount}}), n("simplecancellation-table", {attrs: {"origin-data": t.simplecancellation}}), n("stockFreeze-table", {attrs: {"origin-data": t.stockFreeze}}), n("illegal-table", {attrs: {"origin-data": t.illegal}}), n("taxviolation-table", {attrs: {"origin-data": t.taxviolation}}), n("opennotice-table", {attrs: {"origin-data": t.opennotice}}), n("judicialauction-table", {attrs: {"origin-data": t.judicialauction}}), n("executedPerson-table", {attrs: {"origin-data": t.executedPerson}}), n("getCourtNoticeData-table", {attrs: {"origin-data": t.getCourtNoticeData}}), n("filinginfo-table", {attrs: {"origin-data": t.filinginfo}}), n("restrictedConsumer-table", {attrs: {"origin-data": t.restrictedConsumer}}), n("terminationcase-table", {attrs: {"origin-data": t.terminationcase}}), n("envpunishment-table", {attrs: {"origin-data": t.envpunishment}}), n("projectabnormal-table", {attrs: {"origin-data": t.engineeringanomaly}}), n("untax-table", {attrs: {"origin-data": t.untax}}), n("landmortgage-table", {attrs: {"origin-data": t.landmortgage}}), n("overduetaxs-table", {attrs: {"origin-data": t.overduetaxs}}), n("bondbreach-table", {attrs: {"origin-data": t.bondbreach}})], 1)], 1)
        }), [], !1, null, null, null), jo = Bo.exports, Fo = {
            name: "FinanceTable", props: {financeData: Object}, components: {AiTableList: lt.a}, data: function () {
                return {
                    config: {
                        title: "融资信息",
                        id: "companyDevelop-projectFinance",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/project/projectFinanceAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布日期",
                            width: 100,
                            key: "financeDate",
                            isDate: !0
                        }, {name: "融资轮次", width: 151, key: "financeRound"}, {
                            name: "融资金额",
                            width: 240,
                            key: "financeAmount"
                        }, {
                            name: "投资方", width: 300, align: "left", value: function (t) {
                                var e = "";
                                return t.financeInvestor.map((function (t) {
                                    e += "<p>" + t + "</p>"
                                })), e
                            }
                        }]
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, zo = Fo, Vo = Object(x.a)(zo, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.financeData}})], 1)
        }), [], !1, null, null, null), Ho = Vo.exports, Wo = {
            name: "InvestorTable", props: {investorData: Object}, components: {AiTableList: lt.a}, data: function () {
                return {
                    config: {
                        title: "投资机构",
                        id: "companyDevelop-investorData",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/investorlistajax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "投资机构",
                            width: 270,
                            type: "image-text-only",
                            image: "logo",
                            textImage: "logoWord",
                            title: "investorName",
                            titleUrl: "investorPcUrl",
                            truncate: 2,
                            onlyTruncate: !0
                        }, {name: "成立年份", width: 100, key: "startYear", isDate: !0}, {
                            name: "所属地",
                            width: 100,
                            key: "land"
                        }, {name: "简介", width: 321, key: "brief", truncate: 2}]
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, qo = Wo, Uo = Object(x.a)(qo, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.investorData}})], 1)
        }), [], !1, null, null, null), Yo = Uo.exports, Go = {
            name: "ProjectListTable",
            components: {AiTableList: lt.a},
            props: {projectListData: Object},
            data: function () {
                return {
                    config: {
                        title: "企业品牌项目",
                        id: "companyDevelop-projectBasic",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/brand/brandProjectAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "项目名称",
                            width: 220,
                            type: "image-text-only",
                            image: "logo",
                            textImage: "logoWord",
                            title: "name",
                            titleUrl: "detailUrl",
                            truncate: 2,
                            onlyTruncate: !0
                        }, {name: "最新融资轮次", width: 100, key: "round"}, {
                            name: "成立时间",
                            width: 100,
                            key: "startYear",
                            isDate: !0
                        }, {name: "所属地", width: 78, key: "birthLand"}, {
                            name: "项目简介",
                            width: 292,
                            key: "brief",
                            truncate: 2
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Xo = Go, Zo = Object(x.a)(Xo, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.projectListData}})], 1)
        }), [], !1, null, null, null), Ko = Zo.exports, $o = {
            name: "SimilarsTable", components: {AiTableList: lt.a}, props: {similarsData: Object}, data: function () {
                return {
                    config: {
                        title: "竞品信息",
                        id: "companyDevelop-projectSimilars",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/project/projectSimilarsInfoAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "竞品项目名称",
                            width: 220,
                            type: "image-text-only",
                            image: "projectLogo",
                            textImage: "logoWord",
                            title: "projectName",
                            titleUrl: "detailUrl",
                            truncate: 2,
                            onlyTruncate: !0
                        }, {name: "最新融资轮次", width: 100, key: "projectLatestRound"}, {
                            name: "成立时间",
                            width: 100,
                            key: "projectStartDate",
                            isDate: !0
                        }, {name: "所属地", width: 78, key: "projectAddress"}, {
                            name: "项目简介",
                            width: 151,
                            key: "projectBrief",
                            truncate: 2,
                            onlyTruncate: !0,
                            align: "left"
                        }, {
                            name: "所属企业",
                            width: 140,
                            key: "similarPrincipalName",
                            url: "compDetailUrl",
                            truncate: 2,
                            onlyTruncate: !0
                        }]
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, Qo = $o, Jo = Object(x.a)(Qo, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.similarsData}})], 1)
        }), [], !1, null, null, null), ts = Jo.exports, es = {
            name: "TeamsTable", components: {AiTableList: lt.a}, props: {teamsData: Object}, data: function () {
                return {
                    config: {
                        title: "核心成员",
                        id: "companyDevelop-projectTeams",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/m/getCompPersonListAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "项目成员",
                            width: 210,
                            type: "image-text-more",
                            image: "personLogo",
                            textImage: "logoWord",
                            title: "personName",
                            truncate: 1,
                            onlyTruncate: !0
                        }, {name: "职位", width: 180, key: "positionTitle", align: "left"}, {
                            name: "简介",
                            width: 404,
                            key: "personBrief",
                            truncate: 2,
                            align: "left"
                        }]
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, ns = es, is = Object(x.a)(ns, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.teamsData}})], 1)
        }), [], !1, null, null, null), rs = is.exports, as = {
            name: "PrivatefundTable",
            props: {privatefundData: Object},
            components: {AiTableList: lt.a},
            data: function () {
                return {
                    config: {
                        title: "私募基金",
                        id: "companyDevelop-privatefund",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/privatefundAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "基金名称",
                            width: 215,
                            key: "fundName",
                            align: "left"
                        }, {name: "基金编号", width: 120, key: "fundNumber"}, {
                            name: "成立日期",
                            width: 100,
                            key: "establishTime",
                            isDate: !0
                        }, {name: "备案日期", width: 100, key: "recordTime", isDate: !0}, {
                            name: "基金备案阶段",
                            width: 194,
                            key: "filingStage"
                        }, {name: "操作", width: 60, value: "详情", url: "detailUrl"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, os = as, ss = Object(x.a)(os, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.privatefundData}})], 1)
        }), [], !1, null, null, null), ls = ss.exports, us = {total: 0, page: 1, size: 1, list: []}, cs = {
            name: "companyDevelopTab",
            components: {
                FinanceTable: Ho,
                InvestorTable: Yo,
                ProjectListTable: Ko,
                SimilarsTable: ts,
                TeamsTable: rs,
                PrivatefundTable: ls,
                NoDataTab: Se,
                SubTabs: nt
            },
            data: function () {
                return {
                    pid: window.pageData.result.pid,
                    isAllNodata: !0,
                    loading: !0,
                    financeData: Q()({}, us),
                    investorData: Q()({}, us),
                    projectListData: Q()({}, us),
                    similarsData: Q()({}, us),
                    privatefundData: Q()({}, us),
                    teamsData: Q()({}, us)
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            mounted: function () {
                var t = this;
                this.$http("/detail/compDevelopAjax?pid=" + this.pid).then((function (e) {
                    var n = e.data, i = n.projectFinance, r = n.getCompPersonList, a = n.brandProject,
                        o = n.projectSimilarsInfo, s = n.investorlist, l = n.privatefund;
                    0 !== i.total && (t.financeData = i, t.isAllNodata = !1), 0 !== s.total && (t.investorData = s, t.isAllNodata = !1), 0 !== r.total && (t.teamsData = r, t.isAllNodata = !1), 0 !== a.total && (t.projectListData = a, t.isAllNodata = !1), 0 !== o.total && (t.similarsData = o, t.isAllNodata = !1), 0 !== l.total && (t.privatefundData = l, t.isAllNodata = !1), t.loading = !1
                }))
            },
            methods: {}
        }, ds = cs, hs = Object(x.a)(ds, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "company-develop-tab"}, [n("sub-tabs", {
                attrs: {
                    "tab-id": "companyDevelop",
                    "new-tabs": t.newTabs
                }
            }), t.isAllNodata ? n("div", [t.loading ? n("Spin", [t._v("加载中...")]) : n("no-data-tab")], 1) : n("div", [n("finance-table", {attrs: {"finance-data": t.financeData}}), n("teams-table", {attrs: {"teams-data": t.teamsData}}), n("project-list-table", {attrs: {"project-list-data": t.projectListData}}), n("similars-table", {attrs: {"similars-data": t.similarsData}}), n("investor-table", {attrs: {"investor-data": t.investorData}}), n("privatefund-table", {attrs: {"privatefund-data": t.privatefundData}})], 1)], 1)
        }), [], !1, null, null, null), fs = hs.exports, ps = {
            name: "FlodArry", data: function () {
                return {expand: this.data.length > 1, foldTxt: "查看更多", isHide: !0}
            }, props: {data: {type: Array, default: []}}, mounted: function () {
            }, methods: {
                onFoldClick: function () {
                    this.data <= 1 || ("查看更多" === this.foldTxt ? this.foldTxt = "收起更多" : this.foldTxt = "查看更多", this.isHide = !this.isHide)
                }
            }
        }, gs = ps, vs = (n("4FfC"), Object(x.a)(gs, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("div", {class: {flod: t.isHide}}, t._l(t.data, (function (e, i) {
                return n("p", {key: i, staticClass: "webrecode"}, [t._v("\n            " + t._s(e) + "\n        ")])
            })), 0), t.expand ? n("p", {
                staticClass: "more",
                on: {click: t.onFoldClick}
            }, [t._v("\n        " + t._s(t.foldTxt) + "\n    ")]) : t._e()])
        }), [], !1, null, "58431988", null)), ms = vs.exports, ys = {
            name: "WebrecordTable",
            components: {FlodArry: ms, Explain: mt.a},
            props: {
                webrecordData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    originData: this.webrecordData,
                    config: {
                        title: "网站备案",
                        id: "certRecord-webRecord",
                        url: "/detail/icpinfoAjax",
                        columns: [{name: "序号", key: "index", align: "left", width: 50}, {
                            name: "首页地址",
                            key: "homeSite",
                            align: "left",
                            width: 243
                        }, {name: "网站名称", key: "siteName", align: "left", width: 210}, {
                            name: "域名",
                            key: "domain",
                            align: "left",
                            width: 150
                        }, {name: "备案号", key: "icpNo", align: "left", width: 190}]
                    },
                    pid: window.pageData.result.pid,
                    explainData: "网站备案是根据国家法律需要网站的所有者向国家有关部门申请的备案，包括ICP备案与公安局备案。在中华人民共和国境内提供非经营性互联网信息服务，需依法履行备案手续。"
                }
            },
            mounted: function () {
            },
            methods: {
                onPgaeChange: function (t) {
                    this.getList(t)
                }, getList: function (t) {
                    var e = this, n = {pid: this.pid, p: t || 1};
                    this.$http.get(this.config.url, {params: n}).then((function (t) {
                        0 === t.status && (e.originData = t.data, Object(p.j)(e.$refs[e.config.id], 135))
                    }))
                }
            }
        }, bs = ys, xs = (n("9R/9"), Object(x.a)(bs, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return +t.originData.total ? i("div", {
                ref: t.config.id,
                staticClass: "aqc-table-list",
                attrs: {id: t.config.id}
            }, [i("h3", {staticClass: "aqc-detail-title"}, [t._v("\n        网站备案\n        "), i("explain", {attrs: {"explain-data": t.explainData}}), i("span", {staticClass: "aqc-detail-title-number"}, [t._v("\n            " + t._s(t.originData.total) + "\n        ")]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })], 1), i("table", {class: "aqc-detail-table " + t.config.id + "-table"}, [i("thead", {staticClass: "aqc-detail-thead"}, [i("tr", {staticClass: "table-header"}, t._l(t.config.columns, (function (e) {
                return i("td", {
                    key: e.name,
                    staticClass: "table-header-item",
                    style: {width: e.width + "px"}
                }, [t._v("\n                    " + t._s(e.name) + "\n                ")])
            })), 0)]), i("tbody", {staticClass: "table-body"}, t._l(t.originData.list, (function (e, n) {
                return i("tr", {key: n}, t._l(t.config.columns, (function (r) {
                    return i("td", {
                        key: r.name,
                        style: {"text-align": "" + r.align}
                    }, ["index" === r.key ? i("div", [t._v("\n                        " + t._s((t.originData.page - 1) * t.originData.size + n + 1) + "\n                    ")]) : "homeSite" === r.key || "domain" === r.key ? i("div", [i("flod-arry", {
                        key: (new Date).getTime(),
                        attrs: {data: e[r.key]}
                    })], 1) : i("div", [t._v("\n                        " + t._s(e[r.key]) + "\n                    ")])])
                })), 0)
            })), 0)]), t.originData.total > t.originData.size ? i("div", {staticClass: "aqc-table-list-pager"}, [i("page", {
                attrs: {
                    total: t.originData.total,
                    "page-size": t.originData.size
                }, on: {"on-change": t.onPgaeChange}
            })], 1) : t._e()]) : t._e()
        }), [], !1, null, "0cee1d80", null)), _s = xs.exports, ws = {
            name: "CertmarkTable",
            components: {AiTableList: lt.a},
            props: {
                certmarkData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "商标信息",
                        id: "certRecord-mark",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/markAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "商标",
                            type: "image-text-more",
                            width: 60,
                            image: "markLogo",
                            textImage: "markLogoWord"
                        }, {name: "商标名称", key: "markName", align: "left", width: 244}, {
                            name: "注册号",
                            key: "markRegNo",
                            width: 140
                        }, {name: "国际分类", key: "markType", width: 185}, {
                            name: "申请时间",
                            key: "applyDate",
                            width: 100,
                            isDate: !0
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}],
                        explain: "品牌或品牌的一部分在政府有关部门依法注册后，称为“商标”。商标受法律的保护，注册者有专用权。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Cs = ws, Ss = (n("QDip"), Object(x.a)(Cs, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.certmarkData}})
        }), [], !1, null, "678bef92", null)), ks = Ss.exports, Ts = {
            name: "CertpatentTable",
            components: {AiTableList: lt.a},
            props: {
                certpatentData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "专利信息",
                        id: "certRecord-patent",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/patentAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "专利名称",
                            key: "patentName",
                            align: "left",
                            width: 389
                        }, {name: "公布/公告号", key: "publicationNumber", width: 140}, {
                            name: "专利类型",
                            key: "patentType",
                            width: 100
                        }, {name: "公布/公告日期", key: "publicationDate", width: 100, isDate: !0}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "专利指由政府机关或者代表若干国家的区域性组织根据申请而颁发的一种文件，文件记载了发明创造的内容。对于获得专利的发明创造，在一般情况下他人只有经专利权人许可才能予以实施。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Ms = Ts, Os = Object(x.a)(Ms, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.certpatentData}})
        }), [], !1, null, null, null), As = Os.exports, Ds = {
            name: "CopyrightTable",
            components: {AiTableList: lt.a},
            props: {
                copyrightData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "软件著作权信息",
                        id: "certRecord-copyright",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/detail/copyrightAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "软件名称",
                            key: "softwareName",
                            align: "left",
                            width: 188
                        }, {name: "软件简介", key: "shortName", width: 130, align: "left"}, {
                            name: "版本号",
                            key: "batchNum",
                            width: 80
                        }, {name: "软件著作分类", key: "softwareType", width: 115, align: "left"}, {
                            name: "行业分类\t",
                            key: "typeCode",
                            width: 100
                        }, {name: "登记日期", key: "regDate", width: 100, isDate: !0}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "计算机软件著作权是指软件的开发者或者其他权利人依据有关著作权法律的规定，对于软件作品所享有的各项专有权利，具体包括发表权、开发者身份权、使用权、使用许可权和获得报酬权。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Es = Ds, Ps = Object(x.a)(Es, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.copyrightData}})
        }), [], !1, null, null, null), Is = Ps.exports, Ls = {
            name: "WorkrightTable",
            components: {AiTableList: lt.a},
            props: {
                workrightData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "作品著作权",
                        id: "certRecord-workright",
                        showFilter: !0,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/workrightAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "登记号",
                            key: "registrationNo",
                            align: "left",
                            width: 206
                        }, {name: "作品类别", key: "type", align: "left", width: 100}, {
                            name: "作品名称",
                            key: "name",
                            align: "left",
                            width: 180
                        }, {name: "创作完成日期", key: "completionDate", width: 100, isDate: !0}, {
                            name: "首次发表日期\t",
                            key: "publicationDate",
                            width: 100,
                            isDate: !0
                        }, {name: "登记日期", key: "registrationDate", width: 100, isDate: !0}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Rs = Ls, Ns = Object(x.a)(Rs, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.workrightData}})
        }), [], !1, null, null, null), Bs = Ns.exports, js = {
            name: "certTab",
            components: {
                WebrecordTable: _s,
                CertmarkTable: ks,
                CertpatentTable: As,
                CopyrightTable: Is,
                WorkrightTable: Bs,
                SubTabs: nt,
                NoDataTab: Se
            },
            data: function () {
                return {
                    webrecordData: null,
                    certmarkData: null,
                    certpatentData: null,
                    copyrightData: null,
                    workrightData: null,
                    isAllNodata: !0,
                    loading: !0,
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : ""
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            mounted: function () {
                this.getList()
            },
            methods: {
                getList: function () {
                    var t = this;
                    this.$http.get("/detail/intellectualPropertyAjax?pid=" + this.pid).then((function (e) {
                        0 === e.status ? (0 !== e.data.icpinfo.total && (t.webrecordData = e.data.icpinfo, t.isAllNodata = !1), 0 !== e.data.mark.total && (t.certmarkData = e.data.mark, t.isAllNodata = !1), 0 !== e.data.patent.total && (t.certpatentData = e.data.patent, t.isAllNodata = !1), 0 !== e.data.copyright.total && (t.copyrightData = e.data.copyright, t.isAllNodata = !1), 0 !== e.data.workright.total && (t.workrightData = e.data.workright, t.isAllNodata = !1), t.loading = !1) : t.$Message.warning(e.msg || "接口错误")
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }
            }
        }, Fs = js, zs = Object(x.a)(Fs, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "cert-tab"}, [n("sub-tabs", {
                attrs: {
                    "tab-id": "certRecord",
                    "new-tabs": t.newTabs
                }
            }), t.isAllNodata ? n("div", [t.loading ? n("Spin", [t._v("加载中...")]) : n("no-data-tab")], 1) : n("div", [t.webrecordData ? n("webrecord-table", {attrs: {"webrecord-data": t.webrecordData}}) : t._e(), t.certmarkData ? n("certmark-table", {attrs: {"certmark-data": t.certmarkData}}) : t._e(), t.certpatentData ? n("certpatent-table", {attrs: {"certpatent-data": t.certpatentData}}) : t._e(), t.copyrightData ? n("copyright-table", {attrs: {"copyright-data": t.copyrightData}}) : t._e(), t.workrightData ? n("workright-table", {attrs: {"workright-data": t.workrightData}}) : t._e()], 1)], 1)
        }), [], !1, null, null, null), Vs = zs.exports, Hs = {
            name: "MicroblogTable",
            components: {AiTableList: lt.a},
            props: {
                microblogData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "微博",
                        id: "operatingCondition-microblog",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/microblogAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "头像",
                            type: "image-text-more",
                            width: 60,
                            image: "logo",
                            textImage: "logoWord"
                        }, {
                            name: "微博昵称", value: function (t) {
                                return '<a class="close" href="' + t.weiboLink + '" target="_balnk">' + t.nickname + "</a>"
                            }, width: 246
                        }, {name: "简介", key: "brief", align: "left", width: 486, truncate: 2}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Ws = (n("BEV1"), Object(x.a)(Hs, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.microblogData}})
        }), [], !1, null, "5e7c9045", null).exports), qs = {
            name: "LicenseTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "行政许可",
                        id: "operatingCondition-license",
                        url: "/detail/licenseAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "行政许可证号",
                            key: "licenseNumber",
                            width: 120
                        }, {name: "许可名称", key: "licenseName", width: 150, align: "left"}, {
                            name: "许可内容",
                            key: "licenseContent"
                        }, {name: "有效期自", key: "validityFrom", isDate: !0, width: 100}, {
                            name: "有效期至",
                            key: "validityTo",
                            isDate: !0,
                            width: 100
                        }, {name: "许可机关", key: "issueAuthority", width: 150, align: "left"}],
                        explain: "行政许可，是指行政机关根据公民、法人或者其他组织的申请，经依法审查准予其从事特定活动的行为。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Us = Object(x.a)(qs, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Ys = {
            name: "QualityTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "质量监督检查",
                        id: "operatingCondition-quality",
                        url: "/detail/qualityAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        showFilter: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "抽查年份",
                            key: "samlingYears",
                            width: 100
                        }, {name: "质量监督抽查批次", key: "samlingBatch", width: 354, align: "left"}, {
                            name: "抽查产品",
                            key: "productName",
                            width: 179,
                            align: "left"
                        }, {name: "抽查结果", key: "samplingResult", width: 100}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Gs = Object(x.a)(Ys, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Xs = {
            name: "FoodTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "食品抽检结果",
                        id: "operatingCondition-food",
                        url: "/detail/foodqualityAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        showFilter: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "通报时间",
                            key: "notificationDate",
                            width: 100,
                            isDate: !0
                        }, {name: "通报文号", key: "notificationNum", width: 210, align: "left"}, {
                            name: "抽查产品",
                            key: "productName",
                            width: 323,
                            align: "left"
                        }, {name: "抽查结果", key: "result", width: 100}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Zs = Object(x.a)(Xs, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Ks = {
            name: "RandomInspectionTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "抽查检查",
                        id: "operatingCondition-randominspection",
                        url: "/c/randominspectionAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "日期",
                            key: "inspectionDate",
                            width: 100,
                            isDate: !0
                        }, {name: "类型", key: "inspectionType", width: 130}, {
                            name: "结果",
                            key: "inspectionResult",
                            width: 100
                        }, {name: "检查机构", key: "inspectionAuthority", width: 464, align: "left"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, $s = Object(x.a)(Ks, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Qs = {
            name: "DoubleCheckupTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "双随机抽查结果",
                        id: "operatingCondition-doublecheckup",
                        url: "/c/doublecheckupAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "日期",
                            key: "insDate",
                            width: 100,
                            isDate: !0
                        }, {name: "任务名称", key: "raninsPlaneName", width: 210}, {
                            name: "检查类型",
                            key: "raninsTypeName",
                            width: 100
                        }, {name: "检查机关", key: "insauth", width: 323, align: "left"}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl"
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Js = Object(x.a)(Qs, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, tl = {
            name: "CompmanageTable",
            components: {AiTableList: lt.a},
            props: {
                companyreportData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "公司研报",
                        id: "operatingCondition-companyreport",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/companyreportAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "issueDate",
                            name: "发布日期",
                            isDate: !0,
                            width: 100
                        }, {
                            name: "报告名称", value: function (t) {
                                return t.pdfUrl && "-" !== t.pdfUrl ? '<a class="close" href="' + t.pdfUrl + '" target="_balnk">' + t.reportName + "</a>" : "" + t.reportName
                            }, align: "left", width: 400
                        }, {key: "organizationName", name: "机构", align: "left", width: 120}, {
                            key: "reportAuthor",
                            name: "作者",
                            width: 165
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, el = Object(x.a)(tl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.companyreportData}})
        }), [], !1, null, null, null).exports, nl = {
            components: {}, props: {src: {type: String, default: ""}}, data: function () {
                return {showQr: !1}
            }, methods: {}
        }, il = (n("K5nU"), Object(x.a)(nl, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "qr", on: {
                    mouseenter: function (e) {
                        t.showQr = !0
                    }, mouseleave: function (e) {
                        t.showQr = !1
                    }
                }
            }, [i("img", {staticClass: "bg", attrs: {src: n("pZYu")}}), t.showQr ? i("img", {
                staticClass: "vue-qr",
                attrs: {src: t.src}
            }) : t._e()])
        }), [], !1, null, "a47e7a32", null).exports), rl = {
            name: "WeixinTable",
            components: {AiTableList: lt.a, qr: il},
            props: {
                weixinData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    showQr: !1,
                    config: {
                        title: "微信公众号",
                        id: "operatingCondition-wechatoa",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/wechatoaAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "微信公众号名称",
                            width: 215,
                            type: "image-text-only",
                            image: "wechatLogo",
                            textImage: "wechatName",
                            title: "wechatName",
                            truncate: 2
                        }, {name: "微信公众号", key: "wechatId", width: 197, align: "left"}, {
                            name: "功能介绍",
                            key: "wechatIntruduction",
                            align: "left",
                            width: 380,
                            truncate: 2
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, al = (n("BqDM"), Object(x.a)(rl, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("ai-table-list", {
                staticClass: "test-table",
                attrs: {config: t.config, "origin-data": t.weixinData},
                scopedSlots: t._u([{
                    key: "custom", fn: function (t) {
                        var e = t.data;
                        return [n("qr", {attrs: {src: e.dataItem[e.columnItem.url]}})]
                    }
                }])
            })
        }), [], !1, null, "7401b852", null).exports), ol = {
            name: "AppTable", components: {AiTableList: lt.a}, props: {appData: Object}, data: function () {
                return {
                    config: {
                        title: "APP",
                        id: "operatingCondition-appinfo",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/appinfoAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "Logo",
                            width: 200,
                            type: "image-text-only",
                            image: "logo",
                            textImage: "logoWord",
                            title: "name",
                            truncate: 2
                        }, {name: "App分类", width: 140, key: "classify"}, {
                            name: "简介",
                            width: 404,
                            key: "logoBrief",
                            truncate: 2,
                            align: "left"
                        }]
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, sl = Object(x.a)(ol, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.appData}})], 1)
        }), [], !1, null, null, null).exports, ll = {
            name: "cashflow", props: {
                cashflow: {
                    type: Array, default: function () {
                        return []
                    }
                }, tabId: {type: String, default: ""}, total: {type: [Number, String], default: 0}
            }, data: function () {
                return {pid: window.pageData.result.pid}
            }, mounted: function () {
            }, methods: {
                addUnit: function (t) {
                    var e = "-";
                    return "-" !== t && (e = t + "亿"), e
                }
            }
        }, ul = (n("HJZE"), Object(x.a)(ll, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "zx-detail-stock-info",
                attrs: {id: this.tabId + "-cashflow"}
            }, [i("h2", {staticClass: "zx-detail-title"}, [t._v("现金流量表"), i("span", {staticClass: "zx-detail-total"}, [t._v(t._s(t.total))]), i("a", {
                staticClass: "check-more",
                attrs: {target: "_blank", href: "/financemain?pid=" + t.pid + "&stocktab=cashflow"}
            }, [t._v("\n            查看更多现金流量表明细"), i("Icon", {
                staticClass: "icon",
                attrs: {type: "ios-arrow-forward", size: "14"}
            })], 1), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("div", {staticClass: "cashflow-box scroll-horizontal-bar"}, [i("table", {style: "width: " + (154 * t.cashflow.length + 220) + "px;"}, [i("thead", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("现金流量表")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item table-header-item"}, [t._v(t._s(e.reportDate))])
            }))], 2)]), i("tbody", [i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动现金流入小计")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumOperateFlowIn))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动现金流出小计")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumOperateFlowOut))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("经营活动产生的现金流量净额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netOperateCashFlow))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动现金流入小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumInvFlowIn))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动现金流出小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumInvFlowOut))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("投资活动产生的现金流量净额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netInvCashFlow))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动现金流入小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumFinaFlowIn))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动现金流出小记")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.sumFinaFlowOut))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("筹资活动产生的现金流量净额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.netFinaCashFlow))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("汇率变动对现金及现金等价物的影响")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item m-table"}, [t._v(t._s(e.effectExchangerate))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column"}, [t._v("现金及现金等价物净增加额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.niCashEqui))])
            }))], 2), i("tr", [i("td", {staticClass: "fixed-column last"}, [t._v("现金及现金等价物净增余额")]), t._l(t.cashflow, (function (e, n) {
                return i("td", {key: n, staticClass: "table-item"}, [t._v(t._s(e.cashEquiBeginning))])
            }))], 2)])])])])
        }), [], !1, null, "17f35faa", null).exports), cl = {
            name: "PlotpublicityTable",
            components: {AiTableList: lt.a},
            props: {
                plotpublicityData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "地块公示",
                        id: "operatingCondition-plotpublicity",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/plotpublicityAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "location",
                            name: "地块位置",
                            align: "left",
                            width: 420
                        }, {key: "issueAuthority", name: "发布机关", align: "left", width: 210}, {
                            key: "releaseDate",
                            name: "发布日期",
                            isDate: !0,
                            width: 100
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, dl = Object(x.a)(cl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.plotpublicityData}})
        }), [], !1, null, null, null).exports, hl = {
            name: "LandtransferTable",
            components: {AiTableList: lt.a},
            props: {
                landtransferData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "土地转让",
                        id: "operatingCondition-landtransfer",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/landtransferAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "location",
                            name: "宗地坐落",
                            align: "left",
                            width: 230
                        }, {key: "originalOwner", name: "原土地使用权人", align: "left", width: 200}, {
                            key: "currentOwner",
                            name: "现土地使用权人",
                            isDate: !0,
                            width: 200
                        }, {key: "dealTime", name: "成交时间", isDate: !0, width: 100}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, fl = Object(x.a)(hl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.landtransferData}})
        }), [], !1, null, null, null).exports, pl = {
            name: "EnterprisejobTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "招聘信息",
                        id: "operatingCondition-enterprisejob",
                        url: "/c/enterprisejobAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        showFilter: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布日期",
                            key: "publishDate",
                            width: 100,
                            isDate: !0
                        }, {name: "职位名称", key: "jobTitle", align: "left", width: 170}, {
                            name: "薪资",
                            key: "salary",
                            width: 134
                        }, {name: "工作地点", key: "location", align: "left", width: 112}, {
                            name: "学历",
                            key: "education",
                            width: 92
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, gl = Object(x.a)(pl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, vl = {
            name: "ImportexportTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "进出口信用",
                        id: "operatingCondition-importexport",
                        url: "/c/importexportAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        showFilter: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "注册日期",
                            key: "regDate",
                            width: 100,
                            isDate: !0
                        }, {name: "海关注册编码", key: "customsNum", width: 270}, {
                            name: "经营类别",
                            key: "businessCategory",
                            width: 190
                        }, {name: "注册海关", key: "customsReg", width: 170}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, ml = Object(x.a)(vl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, yl = {
            name: "CustomerTable",
            components: {AiTableList: lt.a},
            props: {
                customerData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "客户",
                        id: "operatingCondition-customer",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/customerAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "customer",
                            name: "客户",
                            align: "left",
                            url: "detailUrl",
                            width: 450
                        }, {key: "source", name: "来源", width: 240}, {
                            key: "cooperationDate",
                            name: "日期",
                            isDate: !0,
                            width: 100
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, bl = Object(x.a)(yl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.customerData}})
        }), [], !1, null, null, null).exports, xl = {
            name: "SupplierTable",
            components: {AiTableList: lt.a},
            props: {
                supplierData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "供应商",
                        id: "operatingCondition-supplier",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/supplierAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "supplier",
                            name: "供应商",
                            align: "left",
                            url: "detailUrl",
                            width: 450
                        }, {key: "source", name: "来源", width: 240}, {
                            key: "cooperationDate",
                            name: "日期",
                            isDate: !0,
                            width: 100
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, _l = Object(x.a)(xl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.supplierData}})
        }), [], !1, null, null, null).exports, wl = {
            name: "BiddingTable", components: {AiTableList: lt.a}, props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {
                    config: {
                        title: "招投标",
                        id: "operatingCondition-tenderbidding",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/tenderbiddingAjax",
                        columns: [{type: "index", name: "序号", width: "50"}, {
                            name: "发布日期",
                            key: "publishDate",
                            width: "100",
                            isDate: !0
                        }, {
                            name: "标题", width: "228", value: function (t) {
                                var e = t || {}, n = e.detailUrl, i = e.title;
                                return n ? "<a href='" + n + "' target='_blank'>" + i + "</a>" : "" + i
                            }, align: "left"
                        }, {name: "地域", key: "district", width: "100", align: "center"}, {
                            name: "招标公司",
                            width: "180",
                            value: function (t) {
                                var e = (t || {}).tender;
                                if (!e || !e.length) return "-";
                                if ("-" === e[0]) return "-";
                                var n = e.map((function (t) {
                                    var e = t || {}, n = e.detailUrl, i = e.pid;
                                    return n && i ? "<a href='" + n + "' target='_blank'>" + (t.name || "-") + "</a>" : "" + (t.name || "-")
                                }));
                                return e && e.length < 3 ? n.join("<br/>") : n.slice(0, 2).join("<br/>") + "<br/>..."
                            },
                            align: "left"
                        }, {
                            name: "中标公司", value: function (t) {
                                var e = (t || {}).winner;
                                if (!e || !e.length) return "-";
                                if ("-" === e[0]) return "-";
                                var n = e.map((function (t) {
                                    var e = t || {}, n = e.detailUrl, i = e.pid;
                                    return n && i ? "<a href='" + n + "' target='_blank'>" + (t.name || "-") + "</a>" : "" + (t.name || "-")
                                }));
                                return e && e.length < 3 ? n.join("<br/>") : n.slice(0, 2).join("<br/>") + "<br/>..."
                            }, width: "182", align: "left"
                        }],
                        explain: "招标投标是市场主体通过有序竞争，择优配置工程、货物和服务要素的交易方式，是规范选择交易主体并订立交易合同的法律程序。"
                    }
                }
            }, mounted: function () {
            }, methods: {}
        }, Cl = Object(x.a)(wl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Sl = {
            name: "TaxpayerTable",
            components: {AiTableList: lt.a},
            props: {
                taxpayerData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "一般纳税人",
                        id: "operatingCondition-taxpayer",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/taxpayerAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "name",
                            name: "纳税人名称",
                            align: "left",
                            url: "detailUrl",
                            width: 200
                        }, {key: "taxNum", name: "纳税人识别号", align: "left", width: 170}, {
                            key: "qualification",
                            name: "纳税人资格类型",
                            width: 120
                        }, {key: "manageOrgan", name: "主管税务机关", width: 100}, {
                            key: "startDate",
                            name: "有效期起",
                            isDate: !0,
                            width: 100
                        }, {key: "endDate", name: "有效期止", isDate: !0, width: 100}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, kl = Object(x.a)(Sl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.taxpayerData}})
        }), [], !1, null, null, null).exports, Tl = {
            name: "InquiryTable",
            components: {AiTableList: lt.a},
            props: {
                inquiryData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "询价评估",
                        id: "operatingCondition-inquiry",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/inquiryAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            key: "insertTime",
                            name: "摇号日期",
                            isDate: !0,
                            width: 100
                        }, {key: "caseCode", name: "案号", align: "left", width: 110}, {
                            key: "subjectName",
                            name: "标的物名称",
                            align: "left",
                            width: 144
                        }, {
                            key: "principalName", name: "当事人", value: function (t) {
                                var e = t || {}, n = e.principalName, i = e.pid;
                                return n === e.entName ? "<a href='/company_detail_" + i + "' target='_blank'>" + n + "</a>" : "" + n
                            }, align: "left", width: 127
                        }, {
                            name: "评估机构", value: function (t) {
                                var e = (t || {}).evaluationAgency;
                                if (!e || !e.length) return "-";
                                var n = e.map((function (t) {
                                    var e = t || {}, n = e.detailUrl, i = e.pid;
                                    return n && i ? "<a href='" + n + "' target='_blank'>" + (t.evaluationName || "-") + "</a>" : "" + (t.evaluationName || "-")
                                }));
                                return e && e.length < 3 ? n.join("、") : n.slice(0, 2).join("、") + "..."
                            }, align: "left", width: 147
                        }, {key: "courtName", name: "法院", width: 100}, {
                            name: "操作",
                            value: "详情",
                            url: "detailUrl",
                            width: 60
                        }],
                        explain: "询价评估，是指采购人向有关供应商发出询价单让其报价，在报价基础上进行比较并确定最优供应商的一种采购方式。"
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Ml = Object(x.a)(Tl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.inquiryData}})
        }), [], !1, null, null, null).exports, Ol = {
            name: "BuildaptitudesTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "建筑资质",
                        id: "operatingCondition-buildaptitudes",
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/buildaptitudesAjax",
                        columns: [{type: "index", name: "序号", width: "50"}, {
                            name: "资质类别",
                            key: "qualificationCategory",
                            width: "120"
                        }, {name: "资质证书号", key: "certificateNumber", width: "110"}, {
                            name: "资质名称",
                            key: "qualificationName",
                            width: "160",
                            align: "left"
                        }, {name: "发证日期", key: "issueDate", width: "100", isDate: !0}, {
                            name: "证书有效期",
                            key: "termOfValidity",
                            width: "100",
                            isDate: !0
                        }, {name: "发证机关", key: "certificationAuthority", width: "200", align: "left"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Al = Object(x.a)(Ol, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Dl = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("h2", {staticClass: "zx-detail-title"}, [t._v("\n        工资待遇\n        "), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })])
        }], El = {
            name: "salary",
            props: {
                tabId: {type: String, default: ""}, originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {pid: window.pageData.result.pid, iconMap: {green: "icon-arrow-up", red: "icon-arrow-down"}}
            },
            mounted: function () {
                this.initChart()
            },
            methods: {
                isPositiveNum: function (t) {
                    return t > 0 ? "green" : "red"
                }, initChart: function () {
                    var t = this.originData.data || [];
                    if (t.length) {
                        var e, n = [], i = [];
                        t.forEach((function (t) {
                            n.push(t.range), i.push(parseInt(100 * t.ratio, 10))
                        })), e = n.indexOf(this.originData.most), i.splice(e, 1, {
                            value: i[e],
                            itemStyle: {color: "#FF952C"}
                        });
                        var r = {
                            grid: {left: 10, bottom: 25, right: 15},
                            tooltip: {trigger: "axis", formatter: "{b0}<br /> {c0}%"},
                            xAxis: {
                                type: "category",
                                data: n,
                                axisLine: {show: !1},
                                axisTick: !1,
                                axisLabel: {color: "#999", fontSize: 12, interval: 0}
                            },
                            yAxis: {type: "value", show: !1},
                            series: [{
                                data: i,
                                type: "bar",
                                label: {show: !0, position: "outside", color: "#999", formatter: "{c}%"},
                                itemStyle: {color: "#6098FF"},
                                barWidth: 44
                            }]
                        }, a = document.getElementById("salary-bar");
                        this.$echarts.init(a).setOption(r)
                    }
                }
            }
        }, Pl = (n("7Eap"), Object(x.a)(El, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "zx-detail-salary-info",
                attrs: {id: "operatingCondition-salary"}
            }, [t._m(0), n("div", {staticClass: "salary-box"}, [n("div", {staticClass: "salary-info"}, [n("div", {staticClass: "salary"}, [n("h4", [t._v(t._s(t.originData.average))]), n("div", [t._v("月平均工资")]), n("p", [t._v("(取自近1年公开薪酬)")])]), n("div", {staticClass: "information"}, [n("p", [t._v("薪酬区间："), n("span", {staticClass: "light-black"}, [t._v(t._s(t.originData.scope))])]), t.originData.compareYear ? n("p", [t._v("对比去年：\n                    "), n("span", {class: t.isPositiveNum(t.originData.compareYear)}, [n("i", {class: t.iconMap[t.isPositiveNum(t.originData.compareYear)]}), t._v("\n                        " + t._s(Math.abs(t.originData.compareYear)) + "%\n                    ")])]) : t._e(), t.originData.comparePeer ? n("p", [t._v("对比同行：\n                    "), n("span", {class: t.isPositiveNum(t.originData.comparePeer)}, [n("i", {class: t.iconMap[t.isPositiveNum(t.originData.comparePeer)]}), t._v("\n                        " + t._s(Math.abs(t.originData.comparePeer)) + "%\n                    ")])]) : t._e(), t.originData.compareArea ? n("p", [t._v("比同地区：\n                    "), n("span", {class: t.isPositiveNum(t.originData.compareArea)}, [n("i", {class: t.iconMap[t.isPositiveNum(t.originData.compareArea)]}), t._v("\n                        " + t._s(Math.abs(t.originData.compareArea)) + "%\n                    ")])]) : t._e()])]), n("div", {staticClass: "salary-chart"}, [n("p", {staticClass: "most"}, [t._v("最多人拿："), n("span", [t._v(t._s(t.originData.most))])]), n("div", {
                staticClass: "salary-bar",
                attrs: {id: "salary-bar"}
            })])]), n("div", {staticClass: "data-from"}, [t._v("\n        数据来源："), n("a", {
                attrs: {
                    target: "_blank",
                    href: t.originData.url
                }
            }, [t._v("职友集")])])])
        }), Dl, !1, null, "5b2c53e6", null).exports), Il = {
            name: "BondinfoTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "债券信息",
                        id: "operatingCondition-bondinfo",
                        url: "/c/bondinfoAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "债券代码",
                            key: "bondCode",
                            width: 150
                        }, {name: "债券简称", key: "bondShortName", width: 240}, {
                            name: "债券类型",
                            key: "bondVariety",
                            width: 140
                        }, {name: "债券期限", key: "bondMaturity", width: 100}, {
                            name: "发行日期",
                            key: "publishDate",
                            isDate: !0,
                            width: 100
                        }, {name: "操作", width: 60, value: "详情", url: "detailUrl"}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Ll = Object(x.a)(Il, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Rl = {
            name: "LandpurchaseinformationTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "购地信息",
                        id: "operatingCondition-landpurchaseinformation",
                        url: "/c/landpurchaseinformationAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        showFilter: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "项目位置",
                            key: "location",
                            width: 215,
                            align: "left"
                        }, {name: "土地用途", key: "landUse", width: 165}, {
                            name: "供地方式",
                            key: "signingMode",
                            width: 135
                        }, {name: "供应面积(公顷)", key: "area", width: 114}, {
                            name: "合同签订日期",
                            key: "releasetime",
                            width: 100,
                            isDate: !0
                        }, {name: "操作", value: "详情", url: "detailUrl", width: 60}]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, Nl = Object(x.a)(Rl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Bl = {
            name: "CreditratingTable",
            components: {AiTableList: lt.a},
            props: {
                creditratingData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "信用评级",
                        id: "operatingCondition-creditrating",
                        url: "/c/creditratingAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "企业名称",
                            key: "principalName",
                            width: 264,
                            align: "left",
                            url: "detailUrl"
                        }, {name: "主体评级", key: "subjectRating", width: 90}, {
                            name: "评级展望",
                            key: "ratingOutlook",
                            width: 116
                        }, {name: "评级机构", key: "subjectRatingAgencies", width: 220, align: "left"}, {
                            name: "评级时间",
                            key: "ratingDate",
                            isDate: !0,
                            width: 100
                        }]
                    }
                }
            },
            mounted: function () {
            },
            methods: {}
        }, jl = Object(x.a)(Bl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.creditratingData}})
        }), [], !1, null, null, null).exports, Fl = {
            name: "QualificationcertTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "资质证书",
                        id: "operatingCondition-qualificationcert",
                        url: "/c/certlistAjax",
                        showTitleCount: !0,
                        showPager: !0,
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "证书编号",
                            key: "registerNo",
                            align: "left",
                            width: 304
                        }, {name: "证书类型", key: "type", align: "left", width: 226}, {
                            name: "发证日期",
                            key: "validStart",
                            width: 100
                        }, {name: "截止日期", isDate: !0, key: "validityEnd", width: 100}, {
                            name: "操作",
                            width: 60,
                            value: "详情",
                            url: "detailUrl"
                        }]
                    }
                }
            }
        }, zl = Object(x.a)(Fl, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})
        }), [], !1, null, null, null).exports, Vl = {
            name: "relevantreportTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "相关研报",
                        id: "operatingCondition-relevantreport",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/relevantReportAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布时间",
                            key: "issueDate",
                            isDate: !0,
                            width: 100
                        }, {name: "报告名称", key: "reportName", align: "left", width: 250, url: "pdfUrl"}, {
                            name: "研究主体",
                            key: "researchPrincipalName",
                            align: "left",
                            width: 166,
                            url: "researchPrincipalUrl"
                        }, {
                            name: "报告作者", align: "left", width: 108, class: "reportAuthor", value: function (t) {
                                var e = "";
                                return t.reportAuthor.map((function (t) {
                                    e += "<p>" + t + "</p>"
                                })), e
                            }, url: ""
                        }, {name: "机构名称", key: "organizationName", align: "left", width: 166}]
                    }
                }
            }
        }, Hl = Object(x.a)(Vl, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
        }), [], !1, null, null, null).exports, Wl = {
            name: "RelevantannouncementTable",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "相关公告",
                        id: "operatingCondition-relevantannouncement",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/relevantAnnouncementAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "发布时间",
                            key: "publicationDate",
                            isDate: !0,
                            width: 100
                        }, {
                            name: "公告标题",
                            key: "publicationTitle",
                            align: "left",
                            width: 346,
                            url: "publicationUrl"
                        }, {
                            name: "发布企业",
                            key: "publishPrincipalName",
                            align: "left",
                            width: 346,
                            url: "publishPrincipalUrl"
                        }]
                    }
                }
            }
        }, ql = {
            name: "conditionTab",
            components: {
                SubTabs: nt,
                MicroblogTable: Ws,
                LicenseTable: Us,
                QualityTable: Gs,
                FoodTable: Zs,
                RandomInspectionTable: $s,
                DoubleCheckupTable: Js,
                NoDataTab: Se,
                Financemain: Hn,
                WeixinTable: al,
                AppTable: sl,
                CompmanageTable: el,
                Cashflow: ul,
                Financeprofit: Kn,
                Balancesheet: ti,
                PlotpublicityTable: dl,
                LandtransferTable: fl,
                EnterprisejobTable: gl,
                ImportexportTable: ml,
                CustomerTable: bl,
                SupplierTable: _l,
                BiddingTable: Cl,
                TaxpayerTable: kl,
                InquiryTable: Ml,
                Salary: Pl,
                BondinfoTable: Ll,
                BuildaptitudesTable: Al,
                LandpurchaseinformationTable: Nl,
                CreditratingTable: jl,
                QualificationcertTable: zl,
                RelevantreportTable: Hl,
                RelevantannouncementTable: Object(x.a)(Wl, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", [n("ai-table-list", {attrs: {config: t.config, "origin-data": t.originData}})], 1)
                }), [], !1, null, null, null).exports
            },
            data: function () {
                return {
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    weixinData: null,
                    microblogData: null,
                    isAllNodata: !0,
                    loading: !0,
                    licenseData: null,
                    qualityData: null,
                    foodData: null,
                    randominspectionData: null,
                    doubleCheckupData: null,
                    financemainData: null,
                    financeprofit: null,
                    balancesheet: null,
                    financepercentageData: null,
                    companyreportData: null,
                    plotpublicityData: null,
                    appData: null,
                    cashflowData: null,
                    landtransferData: null,
                    enterprisejobData: null,
                    importexportData: null,
                    customerData: null,
                    supplierData: null,
                    biddingData: null,
                    taxpayerData: null,
                    inquiryData: null,
                    salaryData: null,
                    bondinfoData: null,
                    buildaptitudesData: null,
                    landpurchaseinformationData: null,
                    creditratingData: null,
                    qualificationcertData: null,
                    relevantannouncementData: null,
                    relevantreportData: null
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            mounted: function () {
                this.getList()
            },
            methods: {
                getList: function () {
                    var t = this;
                    this.$http.get("/detail/compManageAjax?pid=" + this.pid).then((function (e) {
                        0 === e.status ? (0 !== e.data.microblog.total && (t.microblogData = e.data.microblog, t.isAllNodata = !1), 0 !== e.data.license.total && (t.licenseData = e.data.license, t.isAllNodata = !1), 0 !== e.data.quality.total && (t.qualityData = e.data.quality, t.isAllNodata = !1), 0 !== e.data.foodquality.total && (t.foodData = e.data.foodquality, t.isAllNodata = !1), 0 !== e.data.randominspection.total && (t.randominspectionData = e.data.randominspection, t.isAllNodata = !1), 0 !== e.data.doublecheckup.total && (t.doubleCheckupData = e.data.doublecheckup, t.isAllNodata = !1), 0 !== e.data.financemain.total && (t.financemainData = e.data.financemain, t.isAllNodata = !1), 0 !== e.data.cashflow.total && (t.cashflowData = e.data.cashflow, t.isAllNodata = !1), 0 !== e.data.financeprofit.list.length && (t.financeprofit = e.data.financeprofit, t.isAllNodata = !1), 0 !== e.data.balancesheet.list.length && (t.balancesheet = e.data.balancesheet, t.isAllNodata = !1), 0 !== e.data.companyreport.total && (t.companyreportData = e.data.companyreport, t.isAllNodata = !1), 0 !== e.data.wechatoa.total && (t.weixinData = e.data.wechatoa, t.isAllNodata = !1), 0 !== e.data.appinfo.total && (t.appData = e.data.appinfo, t.isAllNodata = !1), 0 !== e.data.plotpublicity.total && (t.plotpublicityData = e.data.plotpublicity, t.isAllNodata = !1), 0 !== e.data.landtransfer.total && (t.landtransferData = e.data.landtransfer, t.isAllNodata = !1), 0 !== e.data.tenderbidding.total && (t.biddingData = e.data.tenderbidding, t.isAllNodata = !1), e.data.salary.average && (t.salaryData = e.data.salary, t.isAllNodata = !1), 0 !== e.data.bondinfo.total && (t.bondinfoData = e.data.bondinfo, t.isAllNodata = !1), 0 !== e.data.buildaptitudes.total && (t.buildaptitudesData = e.data.buildaptitudes, t.isAllNodata = !1), 0 !== e.data.landpurchaseinformation.total && (t.landpurchaseinformationData = e.data.landpurchaseinformation, t.isAllNodata = !1), 0 !== e.data.creditrating.total && (t.creditratingData = e.data.creditrating, t.isAllNodata = !1), 0 !== e.data.qualificationcert.total && (t.qualificationcertData = e.data.qualificationcert, t.isAllNodata = !1), 0 !== e.data.relevantannouncement.total && (t.relevantannouncementData = e.data.relevantannouncement, t.isAllNodata = !1), 0 !== e.data.relevantreport.total && (t.relevantreportData = e.data.relevantreport, t.isAllNodata = !1), t.loading = !1) : t.$Message.warning(e.msg || "接口错误"), 0 !== e.data.taxpayer.total && (t.taxpayerData = e.data.taxpayer, t.isAllNodata = !1), 0 !== e.data.inquiry.total && (t.inquiryData = e.data.inquiry, t.isAllNodata = !1), 0 !== e.data.enterprisejob.total && (t.enterprisejobData = e.data.enterprisejob, t.isAllNodata = !1), 0 !== e.data.importexport.total && (t.importexportData = e.data.importexport, t.isAllNodata = !1), 0 !== e.data.customer.total && (t.customerData = e.data.customer, t.isAllNodata = !1), 0 !== e.data.supplier.total && (t.supplierData = e.data.supplier, t.isAllNodata = !1), t.loading = !1
                    }))
                }
            }
        }, Ul = Object(x.a)(ql, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "cert-tab"}, [n("sub-tabs", {
                attrs: {
                    "tab-id": "operatingCondition",
                    "new-tabs": t.newTabs
                }
            }), t.isAllNodata ? n("div", [t.loading ? n("Spin", [t._v("加载中...")]) : n("no-data-tab")], 1) : n("div", [t.licenseData ? n("license-table", {attrs: {"origin-data": t.licenseData}}) : t._e(), t.qualityData ? n("quality-table", {attrs: {"origin-data": t.qualityData}}) : t._e(), t.foodData ? n("food-table", {attrs: {"origin-data": t.foodData}}) : t._e(), t.randominspectionData ? n("random-inspection-table", {attrs: {"origin-data": t.randominspectionData}}) : t._e(), t.doubleCheckupData ? n("double-checkup-table", {attrs: {"origin-data": t.doubleCheckupData}}) : t._e(), t.qualificationcertData ? n("qualificationcert-table", {attrs: {"origin-data": t.qualificationcertData}}) : t._e(), t.financemainData && t.financemainData.list ? n("financemain", {
                attrs: {
                    financemain: t.financemainData.list,
                    "tab-id": "operatingCondition"
                }
            }) : t._e(), t.financeprofit && t.financeprofit.list ? n("financeprofit", {
                attrs: {
                    financemain: t.financeprofit.list,
                    total: t.financeprofit.total,
                    "tab-id": "operatingCondition"
                }
            }) : t._e(), t.balancesheet && t.balancesheet.list ? n("balancesheet", {
                attrs: {
                    financemain: t.balancesheet.list,
                    "tab-id": "operatingCondition"
                }
            }) : t._e(), t.cashflowData && t.cashflowData.list ? n("cashflow", {
                attrs: {
                    cashflow: t.cashflowData.list,
                    total: t.cashflowData.total,
                    "tab-id": "operatingCondition"
                }
            }) : t._e(), t.microblogData ? n("microblog-table", {attrs: {"microblog-data": t.microblogData}}) : t._e(), t.weixinData ? n("weixin-table", {attrs: {"weixin-data": t.weixinData}}) : t._e(), t.appData ? n("app-table", {attrs: {appData: t.appData}}) : t._e(), t.companyreportData ? n("compmanage-table", {attrs: {companyreportData: t.companyreportData}}) : t._e(), t.relevantreportData ? n("relevantreport-table", {attrs: {"origin-data": t.relevantreportData}}) : t._e(), t.relevantannouncementData ? n("relevantannouncement-table", {attrs: {"origin-data": t.relevantannouncementData}}) : t._e(), t.plotpublicityData ? n("plotpublicity-table", {attrs: {plotpublicityData: t.plotpublicityData}}) : t._e(), t.landtransferData ? n("landtransfer-table", {attrs: {"landtransfer-data": t.landtransferData}}) : t._e(), t.landpurchaseinformationData ? n("landpurchaseinformation-table", {attrs: {"origin-data": t.landpurchaseinformationData}}) : t._e(), t.taxpayerData ? n("taxpayer-table", {attrs: {"taxpayer-data": t.taxpayerData}}) : t._e(), t.inquiryData ? n("inquiry-table", {attrs: {"inquiry-data": t.inquiryData}}) : t._e(), t.biddingData ? n("bidding-table", {attrs: {"origin-data": t.biddingData}}) : t._e(), t.importexportData ? n("importexport-table", {attrs: {"origin-data": t.importexportData}}) : t._e(), t.customerData ? n("customer-table", {attrs: {"customer-data": t.customerData}}) : t._e(), t.supplierData ? n("supplier-table", {attrs: {"supplier-data": t.supplierData}}) : t._e(), t.enterprisejobData ? n("enterprisejob-table", {attrs: {"origin-data": t.enterprisejobData}}) : t._e(), t.salaryData ? n("salary", {attrs: {"origin-data": t.salaryData}}) : t._e(), t.bondinfoData ? n("bondinfo-table", {attrs: {"origin-data": t.bondinfoData}}) : t._e(), t.buildaptitudesData ? n("buildaptitudes-table", {attrs: {"origin-data": t.buildaptitudesData}}) : t._e(), t.creditratingData ? n("creditrating-table", {attrs: {"creditrating-data": t.creditratingData}}) : t._e()], 1)], 1)
        }), [], !1, null, null, null).exports, Yl = {
            name: "NavTabsItem", props: {
                subItem: {
                    type: Object, default: function () {
                        return {}
                    }, require: !0
                }, subKey: {type: [String, Number], default: "", require: !0}
            }, data: function () {
                return {numCount: p.h}
            }, methods: {
                onClickTab: function (t, e) {
                    this.$emit("onClickTab", t, e)
                }
            }
        }, Gl = (n("gGBX"), {
            components: {
                NavTabsItem: Object(x.a)(Yl, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "nav-tabs-item"}, [1 === parseInt(t.subItem.available) ? n("a", {
                        key: t.subKey,
                        staticClass: "item",
                        attrs: {"data-log-an": "detail-mouseentertab-" + t.subItem.id, "data-log-title": t.subItem.name},
                        on: {
                            click: function (e) {
                                return e.stopPropagation(), t.onClickTab(t.subItem, !0)
                            }
                        }
                    }, [t._v("\n        " + t._s(t.subItem.name) + "\n        "), "appinfo" === t.subItem.id ? n("span", {staticClass: "number"}, [t._v("\n            " + t._s(t.numCount(t.subItem.total, 80)) + "\n        ")]) : n("span", {staticClass: "number"}, [t._v("\n            " + t._s(t.numCount(t.subItem.total, 99)) + "\n        ")])]) : n("span", {
                        key: t.subKey,
                        staticClass: "item disable"
                    }, [t._v("\n        " + t._s(t.subItem.name) + "\n        "), "appinfo" === t.subItem.id ? n("span", {staticClass: "number"}, [t._v("\n            " + t._s(t.numCount(t.subItem.total, 80)) + "\n        ")]) : n("span", {staticClass: "number"}, [t._v("\n            " + t._s(t.numCount(t.subItem.total, 99)) + "\n        ")])])])
                }), [], !1, null, "4e8a987e", null).exports
            }, data: function () {
                return {
                    activeSubId: "",
                    visible: !1,
                    isFixed: !1,
                    menu: [],
                    numCount: p.h,
                    pid: window.pageData.result.pid,
                    activeId: "basic"
                }
            }, props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }, typeId: {type: String, default: ""}
            }, mounted: function () {
                this.init(), window.addEventListener("scroll", this.handleScroll)
            }, methods: {
                init: function () {
                    var t = this;
                    this.activeId = this.newTabs[0].id, this.newTabs.forEach((function (e) {
                        e.children.forEach((function (t) {
                            t.parentId = e.id, t.children && t.children.length && t.children.forEach((function (t) {
                                t.parentId = e.id
                            }))
                        })), t.menu = t.newTabs
                    }));
                    var e = Object(p.e)(), n = e.tab, i = e.subtab;
                    n && (this.activeId = n), i && (this.activeSubId = i)
                }, computedId: function (t) {
                    var e = this, n = 0;
                    return this.typeId && t.children.forEach((function (t, i) {
                        t.id === e.typeId && (n = i)
                    })), n
                }, onClickTab: function (t, e) {
                    if (this.visible = !1, e) {
                        var n = window.location.protocol + "//" + window.location.host + window.location.pathname + "?tab=" + t.parentId;
                        Object(p.i)(n), this.activeId = t.parentId, this.activeSubId = t.id, this.$emit("click-tab", t, !0)
                    } else {
                        var i = window.location.protocol + "//" + window.location.host + window.location.pathname + "?tab=" + t.id;
                        Object(p.i)(i), this.activeId = t.id, this.activeSubId = "", this.$emit("click-tab", t), this.isFixed && Object(p.j)("#detail-main", 120)
                    }
                }, onMouseenter: function () {
                    var t = this;
                    this.timer = setTimeout((function () {
                        t.visible = !0
                    }), 400)
                }, onMouseleave: function () {
                    clearInterval(this.timer), this.visible = !1
                }, handleScroll: function () {
                    var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    (this.$refs.tabs && this.$refs.tabs.getBoundingClientRect().top) < 79 && (this.isFixed = !0), t < 435 && (this.isFixed = !1)
                }, getNumCount: function (t) {
                    var e = this;
                    if (t.children && t.children.length && t.children[0].children && t.children[0].children.length) {
                        var n = void 0;
                        if (this.typeId) {
                            var i = t.children.filter((function (t) {
                                return t.id === e.typeId
                            }));
                            i && i.length && (n = i[0].total)
                        } else n = t.children[0].total;
                        return Object(p.h)(n)
                    }
                    return Object(p.h)(t.total)
                }
            }, destroyed: function () {
                window.removeEventListener("scroll", this.handleScroll)
            }
        }), Xl = (n("iAN8"), Object(x.a)(Gl, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "tab-wrapper"}, [n("div", {
                ref: "tabs",
                class: {tabs: !0, visible: t.visible, fixed: t.isFixed},
                on: {mouseenter: t.onMouseenter, mouseleave: t.onMouseleave}
            }, [n("div", {staticClass: "col-wrap"}, t._l(t.menu, (function (e, i) {
                return n("div", {
                    key: i,
                    class: ["col", "col-" + t.menu.length, t.activeId === e.id ? "active" : ""]
                }, [n("a", {
                    class: ["title", t.activeId === e.id ? "active" : ""],
                    attrs: {"data-log-an": "detail-tab-" + e.id, "data-log-title": e.name},
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.onClickTab(e)
                        }
                    }
                }, [t._v("\n                    " + t._s(e.name) + "\n                    "), n("span", {staticClass: "number"}, [t._v("\n                        " + t._s(t.getNumCount(e)) + "\n                    ")])]), n("div", {staticClass: "item-wrap"}, [e.children && e.children[0].children && e.children[0].children.length ? [t._l(e.children[t.computedId(e)].children, (function (e) {
                    return [n("nav-tabs-item", {attrs: {"sub-item": e, "sub-key": e.id}, on: {onClickTab: t.onClickTab}})]
                }))] : t._l(e.children, (function (e, i) {
                    return [n("nav-tabs-item", {attrs: {"sub-item": e, "sub-key": i}, on: {onClickTab: t.onClickTab}})]
                }))], 2)])
            })), 0)])])
        }), [], !1, null, "99c7378e", null).exports), Zl = n("oF3Q"), Kl = n.n(Zl), $l = n("/f1G"), Ql = n.n($l), Jl = {
            level1: {color: "#c7e7ff", text: "0-10万"},
            level2: {color: "#8eceff", text: "10-100万"},
            level3: {color: "#139bff", text: "100-1000万"},
            level4: {color: "#0176ce", text: "1000-5000万"},
            level5: {color: "#005ba0", text: "5000万以上"}
        }, tu = void 0;

    function eu(t) {
        var e = {
            value: t.value,
            name: Jl[t.level].text,
            itemStyle: {normal: {color: Jl[t.level].color}, emphasis: {color: Jl[t.level].color}},
            selected: tu.level === t.level
        };
        return tu.level === t.level && (e.label = {
            normal: {
                textStyle: {color: "#ff9000"},
                formatter: "\n\n共{c}万元\n当前企业地位"
            }
        }), e
    }

    var nu = {
        name: "scale", components: {}, props: {
            originData: {
                type: Object, default: function () {
                }
            }, target: {
                type: Object, default: function () {
                }
            }
        }, data: function () {
            return {contents: [], chartLength: 2}
        }, mounted: function () {
            this.initChart()
        }, beforeDestroy: function () {
            this.timer && clearTimeout(this.timer)
        }, methods: {
            initChart: function () {
                var t = this, e = (this.originData || {}).charts, n = Kl()(e);
                this.chartLength = n.length, this.contents = n.map((function (t) {
                    return ta()(t, 2)[1].text
                })), 0 !== this.chartLength && (this.timer = setTimeout((function () {
                    var n = document.getElementById("chart-scale"), i = function (t, e) {
                        return tu = e, {
                            legend: {
                                orient: "horizontal",
                                right: 0,
                                bottom: 0,
                                itemWidth: 15,
                                data: Ql()(Jl).map((function (t) {
                                    return t.text
                                }))
                            }, series: Kl()(t).map((function (t, e, n) {
                                var i = ta()(t, 2)[1].data;
                                if (1 === n.length) return Q()({}, {
                                    type: "pie",
                                    radius: "31.42%",
                                    minAngle: 3,
                                    selectedOffset: 0,
                                    markPoint: {symbol: "pin", label: {normal: {show: 1}}},
                                    label: {
                                        normal: {
                                            textStyle: {color: "#666", fontSize: 10}, formatter: function (t) {
                                                var e = "" + t.value;
                                                return e.length < 9 ? "共" + e + "万元" : "共" + e.slice(0, 9) + "\n" + e.slice(9) + "万元"
                                            }
                                        }
                                    },
                                    labelLine: {normal: {lineStyle: {fontSize: 8, color: "#666"}, length: 12}},
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)"
                                        }
                                    }
                                }, {center: ["50%", "30%"], data: i.map(eu)});
                                var r = 0 === e ? 25 : 75;
                                return Q()({}, {
                                    type: "pie",
                                    radius: "31.42%",
                                    minAngle: 3,
                                    selectedOffset: 0,
                                    markPoint: {symbol: "pin", label: {normal: {show: 1}}},
                                    label: {
                                        normal: {
                                            textStyle: {color: "#666", fontSize: 10}, formatter: function (t) {
                                                var e = "" + t.value;
                                                return e.length < 9 ? "共" + e + "万元" : "共" + e.slice(0, 9) + "\n" + e.slice(9) + "万元"
                                            }
                                        }
                                    },
                                    labelLine: {normal: {lineStyle: {fontSize: 8, color: "#666"}, length: 12}},
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)"
                                        }
                                    }
                                }, {center: [r + "%", "30%"], data: i.map(eu)})
                            }))
                        }
                    }(e, t.target);
                    t.$echarts.init(n).setOption(i), delete t.timer
                }), 1500))
            }
        }
    }, iu = (n("gtqu"), Object(x.a)(nu, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "scale",
            attrs: {id: "dataAnalysis-scale"}
        }, [n("div", {staticClass: "sacle-title"}, [t._v(t._s(t.originData.title))]), n("div", {
            staticClass: "chart-scale",
            attrs: {id: "chart-scale"}
        }), t._l(t.contents, (function (e, i) {
            return n("div", {
                key: i,
                class: "chart-content chart-" + (i + 1) + " lightgray"
            }, [t._v("\n        " + t._s(e) + "\n    ")])
        }))], 2)
    }), [], !1, null, null, null).exports), ru = {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            id: "710000",
            properties: {id: "710000", cp: [121.509062, 24.044332], name: "台湾", childNum: 6},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@°Ü¯Û"], ["@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿@ăƑ¥ĘWǬÏĶŁâ"], ["@@\\p|WoYG¿¥Ij@¢"], ["@@¡@V^RqBbAnTXeRz¤L«³I"], ["@@ÆEEkWqë @"], ["@@fced"], ["@@¯ɜÄèaì¯ØǓIġĽ"], ["@@çûĖëĄhòř "]],
                encodeOffsets: [[[122886, 24033]], [[123335, 22980]], [[122375, 24193]], [[122518, 24117]], [[124427, 22618]], [[124862, 26043]], [[126259, 26318]], [[127671, 26683]]]
            }
        }, {
            type: "Feature",
            id: "130000",
            properties: {id: "130000", cp: [114.502461, 38.045474], name: "河北", childNum: 3},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@o~Z]ªrºc_ħ²G¼s`jÎŸnüsÂłNX_M`Ç½ÓnUKĜēs¤­©yrý§uģcJe"], ["@@U`Ts¿mÂ"], ["@@oºƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäìë|³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝlNd®²Ğ ǆiGĘJ¼lr}~K¨ŸƐÌWöÆzR¤lêmĞLÎ@¡|q]SvKÑcwpÏÏĿćènĪWlĄkT}J¤~ÈTdpddʾĬBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âDùyŜŲIÄuĐ¨D¸dɂFOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ȭµu¯b{ÍDěïÿȧuT£ġěŗƃĝQ¨fVƋƅn­a@³@ďyÃ½IĹÊKŭfċŰóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏlTíb ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±´°^[À|ĠO@ÆxO\\ta\\tĕtû{ġȧXýĪÓjùÎRb^ÎfK[ÝděYfíÙTyuUSyŌŏů@Oi½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒ¾ùƀ^juųœK­UFyƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qáµ§g¤o^á¾ZE¤i`ĳ{nOl»WÝĔįhgF[¿¡ßkOüš_ūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{Ãmï"]],
                encodeOffsets: [[[119712, 40641]], [[121616, 39981]], [[116462, 37237]]]
            }
        }, {
            type: "Feature",
            id: "140000",
            properties: {id: "140000", cp: [111.849248, 36.857014], name: "山西", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@ÞĩÒSra}ÁyWix±Üe´lèßÓǏokćiµVZģ¡coTSË¹ĪmnÕńehZg{gtwªpXaĚThȑp{¶Eh®RćƑP¿£Pmc¸mQÝWďȥoÅîɡųAďä³aÏJ½¥PG­ąSM­EÅruµéYÓŌ_dĒCo­Èµ]¯_²ÕjāK~©ÅØ^ÔkïçămÏk]­±cÝ¯ÑÃmQÍ~_apm~ç¡qu{JÅŧ·Ls}EyÁÆcI{¤IiCfUcƌÃp§]ě«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ·Wµ|¡¥ăFÏs×¥ŅxÊdÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGR° ƬDj¬¸|CĞKqºfƐiĺ©ª~ĆOQª ¤@ìǦɌ²æBÊTŸʂōĖĴŞȀÆÿȄlŤĒötÎ½î¼ĨXh|ªM¤Ðz"],
                encodeOffsets: [[116874, 41716]]
            }
        }, {
            type: "Feature",
            id: "150000",
            properties: {id: "150000", cp: [111.670801, 41.818311], name: "内蒙古", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARë¥_sgÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉv¦wĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYLq§IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃOrÍdÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUiñiWsɁ·cCÕk]wȑ|ća}wVaĚá G°ùnM¬¯{ÈÐÆA¥ÄêJxÙ¢hP¢ÛºµwWOóFÁz^ÀŗÎú´§¢T¤ǻƺSėǵhÝÅQgvBHouʝl_o¿Ga{ïq{¥|ſĿHĂ÷aĝÇqZñiñC³ª»E`¨åXēÕqÉû[l}ç@čƘóO¿¡FUsAʽīccocÇS}£IS~ălkĩXçmĈŀÐoÐdxÒuL^T{r@¢ÍĝKén£kQyÅõËXŷƏL§~}kq»IHėǅjĝ»ÑÞoå°qTt|r©ÏS¯·eŨĕx«È[eM¿yupN~¹ÏyN£{©għWí»Í¾səšǅ_ÃĀɗ±ąĳĉʍŌŷSÉA±åǥɋ@ë£R©ąP©}ĹªƏj¹erLDĝ·{i«ƫC£µsKCGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯YȵƓñǙµïċĻ|Düȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmǐnǔĎȆÞǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂc|ÀtƐK f{ĘFĒƌXƲąo½Ę\\¥o}Ûu£ç­kX{uĩ«āíÓUŅßŢqŤ¥lyň[oi{¦LńðFȪȖĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ġu¦öČ^â£ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\̀ʉÌÛMĀ[bÓEn}¶Vcês"]],
                encodeOffsets: [[[129102, 52189]]]
            }
        }, {
            type: "Feature",
            id: "210000",
            properties: {id: "210000", cp: [123.429096, 41.796767], name: "辽宁", childNum: 16},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@L@@sa"], ["@@MnNm"], ["@@dc"], ["@@eÀC@b"], ["@@fXwkbrÄ`qg"], ["@@^jtWQ"], ["@@~ Y]c"], ["@@G`ĔN^_¿ZÃM"], ["@@iX¶BY"], ["@@YZ"], ["@@L_{Epf"], ["@@^WqCT\\"], ["@@\\[§t|¤_"], ["@@m`n_"], ["@@Ïxǌ{q_×^Giip"], ["@@@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅÎcPqńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCN¤ EhæmsHy¨SðÑÌ\\\\ĐRZk°IS§fqŒßýáĞÙÉÖ[^¯ǤŲê´\\¦¬ĆPM¯£»uïpùzExanµyoluqe¦W^£ÊL}ñrkqWňûPUP¡ôJoo·U}£[·¨@XĸDXm­ÛÝºGUCÁª½{íĂ^cjk¶Ã[q¤LÉö³cux«zZf²BWÇ®Yß½ve±ÃCý£W{Ú^q^sÑ·¨ÍOt¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ģÁFıĉĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EżĀdQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|Əlĳ¥ãn·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÃA"]],
                encodeOffsets: [[[123686, 41445]], [[126019, 40435]], [[124393, 40128]], [[126117, 39963]], [[125322, 40140]], [[126686, 40700]], [[126041, 40374]], [[125584, 40168]], [[125453, 40165]], [[125362, 40214]], [[125280, 40291]], [[125774, 39997]], [[125976, 40496]], [[125822, 39993]], [[125509, 40217]], [[122731, 40949]]]
            }
        }, {
            type: "Feature",
            id: "220000",
            properties: {id: "220000", cp: [125.3245, 43.886841], name: "吉林", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@pä³PClFbbÍzwBGĭZÅi»lY­ċ²SgkÇ£^Sqd¯R©é£¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏ©¤ÛmTþ¤D²ÄufàÀ­XXÈ±AeyYw¬dvõ´KÊ£\\rµÄlidā]|î©¾DÂVH¹Þ®ÜWnCķ W§@\\¸~¤Vp¸póIO¢VOŇürXql~òÉK]¤¥Xrfkvzpm¶bwyFoúvð¼¤ N°ąO¥«³[éǡű_°Õ\\ÚÊĝþâőàerR¨­JYlďQ[ ÏYëÐ§TGztnß¡gFkMāGÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUuP@vRY¾\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðævxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ă¼Ŵ¡jlºWvÐzƦZÐ²CH AxiukdGgetqmcÛ£Ozy¥cE}|¾cZk¿uŐã[oxGikfeäT@SUwpiÚFM©£è^Ú`@v¶eňf heP¶täOlÃUgÞzŸU`l}ÔÆUvØ_Ō¬Öi^ĉi§²ÃB~¡ĈÚEgc|DC_Ȧm²rBx¼MÔ¦ŮdĨÃâYxƘDVÇĺĿg¿cwÅ\\¹¥Yĭl¤OvLjM_a W`zļMž·\\swqÝSAqŚĳ¯°kRē°wx^ĐkǂÒ\\]nrĂ}²ĊŲÒøãh·M{yMzysěnĒġV·°G³¼XÀ¤¹i´o¤ŃÈ`ÌǲÄUĞd\\iÖmÈBĤÜɲDEh LG¾ƀÄ¾{WaYÍÈĢĘÔRîĐj}ÇccjoUb½{h§Ǿ{KƖµÎ÷GĀÖŠåưÎs­lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFK¥ÚíÁbX³ÌQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GMehccďÏd©ÑW_ÏYƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ýqT^rme\\PpZZbyuybQefµ]UhĿDCmûvaÙNSkCwncćfv~YÇG"],
                encodeOffsets: [[130196, 42528]]
            }
        }, {
            type: "Feature",
            id: "230000",
            properties: {id: "230000", cp: [128.642464, 46.756967], name: "黑龙江", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@UµNÿ¥īèçHÍøƕ¶Lǽ|g¨|a¾pVidd~ÈiíďÓQġėÇZÎXb½|ſÃH½KFgɱCģÛÇAnjÕc[VĝǱÃËÇ_ £ń³pj£º¿»WH´¯U¸đĢmtĜyzzNN|g¸÷äűÑ±ĉā~mq^[ǁÑďlw]¯xQĔ¯l°řĴrBÞTxr[tŽ¸ĻN_yX`biNKuP£kZĮ¦[ºxÆÀdhĹŀUÈƗCwáZħÄŭcÓ¥»NAw±qȥnD`{ChdÙFć}¢A±Äj¨]ĊÕjŋ«×`VuÓÅ~_kŷVÝyhVkÄãPsOµfgeŇµf@u_Ù ÙcªNªÙEojVxT@ãSefjlwH\\pŏäÀvlY½d{F~¦dyz¤PÜndsrhfHcvlwjF£G±DÏƥYyÏu¹XikĿ¦ÏqƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|ĔĕsķÆF´N}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Þ]"]],
                encodeOffsets: [[[134456, 44547]]]
            }
        }, {
            type: "Feature",
            id: "320000",
            properties: {id: "320000", cp: [119.767413, 33.041544], name: "江苏", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@cþÅPi`ZRu¥É\\]~°Y`µÓ^phÁbnÀşúòaĬºTÖŒbe¦¦{¸ZâćNp©Hr|^mjhSEb\\afv`sz^lkljÄtg¤D­¾X¿À|ĐiZȀåB·î}GL¢õcßjayBFµÏC^ĭcÙt¿sğH]j{s©HM¢QnDÀ©DaÜÞ·jgàiDbPufjDk`dPOîhw¡ĥ¥GP²ĐobºrYî¶aHŢ´ ]´rılw³r_{£DB_Ûdåuk|Ũ¯F Cºyr{XFye³Þċ¿ÂkĭB¿MvÛpm`rÚã@Ę¹hågËÖƿxnlč¶Åì½Ot¾dJlVJĂǀŞqvnO^JZż·Q}êÍÅmµÒ]ƍ¦Dq}¬R^èĂ´ŀĻĊIÔtĲyQŐĠMNtR®òLhĚs©»}OÓGZz¶A\\jĨFäOĤHYJvÞHNiÜaĎÉnFQlNM¤B´ĄNöɂtpŬdfåqm¿QûùŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yxcitğ®jű¢KOķCoy`å®VTa­_Ā]ŐÝɞï²ʯÊ^]afYǸÃĆēĪȣJđ͍ôƋÄÄÍīçÛɈǥ£­ÛmY`ó£Z«§°Ó³QafusNıǅ_k}¢m[ÝóDµ¡RLčiXyÅNïă¡¸iĔÏNÌŕoēdōîåŤûHcs}~Ûwbù¹£¦ÓCtOPrE^ÒogĉIµÛÅʹK¤½phMü`oæŀ"],
                encodeOffsets: [[121740, 32276]]
            }
        }, {
            type: "Feature",
            id: "330000",
            properties: {id: "330000", cp: [120.153576, 29.287459], name: "浙江", childNum: 45},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@E^dQ]K"], ["@@jX^j"], ["@@sfbU"], ["@@qP\\xz[ck"], ["@@R¢FX}°[s_"], ["@@Cb\\}"], ["@@e|v\\la{u"], ["@@v~u}"], ["@@QxÂF¯}"], ["@@¹nvÞs¯o"], ["@@rSkUEj"], ["@@bi­ZP"], ["@@p[}INf"], ["@@À¿"], ["@@¹dnb"], ["@@rSBnR"], ["@@g~h}"], ["@@FlEk"], ["@@OdPc"], ["@@v[u\\"], ["@@FjâL~wyoo~sµL\\"], ["@@¬e¹aN"], ["@@\\nÔ¡q]L³ë\\ÿ®QÖ"], ["@@ÊA­©[¬"], ["@@Kxv­"], ["@@@hlIk]"], ["@@pW{o||j"], ["@@Md|_mC"], ["@@¢X£ÏylD¼XtH"], ["@@hlÜ[LykAvyfw^E¤"], ["@@fp¤MusR"], ["@@®_ma~LÁ¬Z"], ["@@iMxZ"], ["@@ZcYd"], ["@@Z~dOSo|A¿qZv"], ["@@@`EN¡v"], ["@@|TY{"], ["@@@n@m"], ["@@XWkCT\\"], ["@@ºwZRkĕWO¢"], ["@@X®±GrÆª\\ÔáXq{"], ["@@ůTG°ĄLHm°UC"], ["@@¤aÜx~}dtüGæţŎíĔcŖpMËÐjē¢·ðĄÆMzjWKĎ¢Q¶À_ê_Bıi«pZgf¤Nrq]§ĂN®«H±yƳí¾×ŸīàLłčŴǝĂíÀBŖÕªÁŖHŗŉåqûõi¨hÜ·ñt»¹ýv_[«¸mYL¯QªmĉÅdMgÇjcº«ę¬­K­´B«Âącoċ\\xKd¡gěŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfåÂŧįƋǝÊĕġć£g³ne­ą»@­¦S®\\ßðChiqªĭiAuA­µ_W¥ƣO\\lċĢttC¨£t`PZäuXßBsĻyekOđġĵHuXBµ]×­­\\°®¬F¢¾pµ¼kŘó¬Wät¸|@L¨¸µrºù³Ù~§WIZW®±Ð¨ÒÉx`²pĜrOògtÁZ}þÙ]¡FKwsPlU[}¦Rvn`hq¬\\nQ´ĘRWb_ rtČFIÖkĦPJ¶ÖÀÖJĈĄTĚòC ²@PúØz©Pî¢£CÈÚĒ±hŖl¬â~nm¨f©iļ«mntuÖZÜÄjL®EÌFª²iÊxØ¨IÈhhst"], ["@@o\\VzRZ}y"], ["@@@°¡mÛGĕ¨§Ianá[ýƤjfæØLäGr"]],
                encodeOffsets: [[[125592, 31553]], [[125785, 31436]], [[125729, 31431]], [[125513, 31380]], [[125223, 30438]], [[125115, 30114]], [[124815, 29155]], [[124419, 28746]], [[124095, 28635]], [[124005, 28609]], [[125e3, 30713]], [[125111, 30698]], [[125078, 30682]], [[125150, 30684]], [[124014, 28103]], [[125008, 31331]], [[125411, 31468]], [[125329, 31479]], [[125626, 30916]], [[125417, 30956]], [[125254, 30976]], [[125199, 30997]], [[125095, 31058]], [[125083, 30915]], [[124885, 31015]], [[125218, 30798]], [[124867, 30838]], [[124755, 30788]], [[124802, 30809]], [[125267, 30657]], [[125218, 30578]], [[125200, 30562]], [[124968, 30474]], [[125167, 30396]], [[124955, 29879]], [[124714, 29781]], [[124762, 29462]], [[124325, 28754]], [[123990, 28459]], [[125366, 31477]], [[125115, 30363]], [[125369, 31139]], [[122495, 31878]], [[125329, 30690]], [[125192, 30787]]]
            }
        }, {
            type: "Feature",
            id: "340000",
            properties: {id: "340000", cp: [117.283042, 31.26119], name: "安徽", childNum: 3},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@^iuLX^"], ["@@e©Ehl"], ["@@°ZÆëĎµmkǀwÌÕæhºgBĝâqÙĊzÖgņtÀÁĂÆáhEz|WzqD¹°Eŧl{ævÜcA`¤C`|´qxĲkq^³³GšµbíZ¹qpa±ď OH¦Ħx¢gPícOl_iCveaOjChß¸iÝbÛªCC¿mRV§¢A|t^iĠGÀtÚsd]ĮÐDE¶zAb àiödK¡~H¸íæAǿYj{ď¿À½W®£ChÃsikkly]_teu[bFaTign{]GqªoĈMYá|·¥f¥őaSÕėNµñĞ«Im_m¿Âa]uĜp Z_§{Cäg¤°r[_YjÆOdý[I[á·¥Q_nùgL¾mvˊBÜÆ¶ĊJhpc¹O]iŠ]¥ jtsggJÇ§w×jÉ©±EFË­KiÛÃÕYvsm¬njĻª§emná}k«ŕgđ²ÙDÇ¤í¡ªOy×Où±@DñSęćăÕIÕ¿IµĥOjNÕËT¡¿tNæŇàåyķrĕq§ÄĩsWÆßF¶X®¿mwRIÞfßoG³¾©uyHį{Ɓħ¯AFnuPÍÔzVdàôº^Ðæd´oG¤{S¬ćxã}ŧ×Kǥĩ«ÕOEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏFlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbtHĔ~BmlRV_ħTLnñH±DL¼Lªl§Ťa¸ĚlK²\\RòvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóZ ň¶vHrľ\\ÊJuxAT|dmÀO[ÃÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálwKhïgA¢ųÆ©Þ¤OÈm°K´"]],
                encodeOffsets: [[[121722, 32278]], [[119475, 30423]], [[119168, 35472]]]
            }
        }, {
            type: "Feature",
            id: "350000",
            properties: {id: "350000", cp: [118.306239, 26.075302], name: "福建", childNum: 18},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@zht´]"], ["@@aj^~ĆG©O"], ["@@ed¨C}}i"], ["@@@vPGsQ"], ["@@sBzddW]Q"], ["@@S¨Q{"], ["@@NVucW"], ["@@qptBAq"], ["@@¸[mu"], ["@@Q\\pD]_"], ["@@jSwUadpF"], ["@@eXª~"], ["@@AjvFso"], ["@@fT_Çí\\v|ba¦jZÆy°"], ["@@IjJi"], ["@@wJIx«¼AoNe{M­"], ["@@K±¡ÓČäeZ"], ["@@k¡¹Eh~c®wBkUplÀ¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧSW¥Qûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġfZda©º²z£NjD°Ötj¶¬ZSÎ~¾c°¶ÐmxO¸¢Pl´SL|¥AȪĖMņĲg®áIJČĒü` QF¬h|ĂJ@zµ |ê³È ¸UÖŬŬÀEttĸr]ðM¤ĶĲHtÏ AĬkvsq^aÎbvdfÊòSD´Z^xPsĂrvƞŀjJd×ŘÉ ®AÎ¦ĤdxĆqAZRÀMźnĊ»İÐZ YXæJyĊ²·¶q§·K@·{sXãô«lŗ¶»o½E¡­«¢±¨Y®Ø¶^AvWĶGĒĢPlzfļtàAvWYãO_¤sD§ssČġ[kƤPX¦`¶®BBvĪjv©jx[L¥àï[F¼ÍË»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³ÁÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮck\\_"]],
                encodeOffsets: [[[123250, 27563]], [[122541, 27268]], [[123020, 27189]], [[122916, 27125]], [[122887, 26845]], [[122808, 26762]], [[122568, 25912]], [[122778, 26197]], [[122515, 26757]], [[122816, 26587]], [[123388, 27005]], [[122450, 26243]], [[122578, 25962]], [[121255, 25103]], [[120987, 24903]], [[122339, 25802]], [[121042, 25093]], [[122439, 26024]]]
            }
        }, {
            type: "Feature",
            id: "360000",
            properties: {id: "360000", cp: [115.592151, 27.676493], name: "江西", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@ĢĨƐgļ¼ÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢûXD®QgÄWiØPÞìºr¤ǆNĠ¢lĄtZoCƞÔºCxrpĠV®Ê{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwȠĚ¦G®ǒĤäTŠÆ~Ħw«|TF¡nc³Ïå¹]ĉđxe{ÎÓvOEm°BƂĨİ|Gvz½ª´HàpeJÝQxnÀW­EµàXÅĪt¨ÃĖrÄwÀFÎ|ňÓMå¼ibµ¯»åDT±m[r«_gmQu~¥V\\OkxtL E¢Ú^~ýêPóqoě±_Êw§ÑªåƗā¼mĉŹ¿NQYBąrwģcÍ¥B­ŗÊcØiIƝĿuqtāwO]³YCñTeÉcaubÍ]trluīBÐGsĵıN£ï^ķqss¿FūūVÕ·´Ç{éĈýÿOER_đûIċâJh­ŅıNȩĕB¦K{Tk³¡OP·wnµÏd¯}½TÍ«YiµÕsC¯iM¤­¦¯P|ÿUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[×zkKN¶Õ»lčÓ{XSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyáV¼Ã~­`gsÙfIƋlę¹e|~udjuTlXµf`¿Jd[\\L²"],
                encodeOffsets: [[116689, 26234]]
            }
        }, {
            type: "Feature",
            id: "370000",
            properties: {id: "370000", cp: [118.000923, 36.275807], name: "山东", childNum: 13},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@Xjd]{K"], ["@@itbFHy"], ["@@HlGk"], ["@@TGy"], ["@@K¬U"], ["@@WdXc"], ["@@PtOs"], ["@@LnXhc"], ["@@ppVu]Or"], ["@@cdzAUa"], ["@@udRhnCI"], ["@@oIpR"], ["@@Ľč{fzƤîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞEzVL®öØBkŖÝĐĖ¹ŧ̄±ÀbÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµ¾Z|ZWyFY¨Mf~C¿`à_RÇzwƌfQnny´INoƬèôº|sTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ïWuøCǷë¡ąuhÛ¡^KxC`C\\bÅxì²ĝÝ¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£Č×GDyÃ¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gTğwoɁsMõ³ăAN£MRkmEÊčÛbMjÝGuIZGPģãħE[iµBEuDPÔ~ª¼ęt]ûG§¡QMsğNPŏįzs£Ug{đJĿļā³]ç«Qr~¥CƎÑ^n¶ÆéÎR~Ż¸YI] PumŝrƿIā[xeÇ³L¯v¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛWp["]],
                encodeOffsets: [[[123806, 39303]], [[123821, 39266]], [[123742, 39256]], [[123702, 39203]], [[123649, 39066]], [[123847, 38933]], [[123580, 38839]], [[123894, 37288]], [[123043, 36624]], [[123344, 38676]], [[123522, 38857]], [[123628, 38858]], [[118260, 36742]]]
            }
        }, {
            type: "Feature",
            id: "410000",
            properties: {id: "410000", cp: [113.665412, 33.757975], name: "河南", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@ýLùµP³swIÓxcŢĞð´E®ÚPtĴXØxÂ¶@«ŕŕQGYfa[şußǩđš_X³ĳÕčC]kbc¥CS¯ëÍB©÷³­Si_}mYTt³xlàcČzÀD}ÂOQ³ÐTĨ¯ƗòËŖ[hłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`Ƴĕg}V¡om½faÇo³TTj¥tĠRyK{ùÓjuµ{t}uËRivGçJFjµÍyqÎàQÂFewixGw½Yŷpµú³XU½ġyłåkÚwZX·l¢Á¢KzOÎÎjc¼htoDHr|­J½}JZ_¯iPq{tę½ĕ¦Zpĵø«kQĹ¤]MÛfaQpě±ǽ¾]u­Fu÷nčÄ¯ADp}AjmcEÇaª³o³ÆÍSƇĈÙDIzËčľ^KLiÞñ[aA²zzÌ÷D|[íÄ³gfÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÀ«ìUMhTº¨¸ǡîSÔDruÂÇZÖEvPZW~ØÐtĄE¢¦Ðy¸bô´oŬ¬²Ês~]®tªapŎJ¨Öº_Ŕ`Ŗ^Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lGlRjsp¢ED}Fio~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼Pk|m"],
                encodeOffsets: [[118256, 37017]]
            }
        }, {
            type: "Feature",
            id: "420000",
            properties: {id: "420000", cp: [113.298572, 30.684355], name: "湖北", childNum: 3},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@AB"], ["@@lskt"], ["@@¾«}{ra®pîÃ\\{øCËyyB±b\\òÝjKL ]ĎĽÌJyÚCƈćÎT´Å´pb©ÈdFin~BCo°BĎÃømv®E^vǾ½Ĝ²RobÜeN^ĺ£R¬lĶ÷YoĖ¥Ě¾|sOr°jY`~I¾®I{GqpCgyl{£ÍÍyPLÂ¡¡¸kWxYlÙæŁĢz¾V´W¶ùŸo¾ZHxjwfxGNÁ³Xéæl¶EièIH ujÌQ~v|sv¶Ôi|ú¢FhQsğ¦SiŠBgÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§cY§HK«Qy]¢wwö¸ïx¼ņ¾Xv®ÇÀµRĠÐHM±cÏdƒǍũȅȷ±DSyúĝ£ŤĀàtÖÿï[îb\\}pĭÉI±Ñy¿³x¯No|¹HÏÛmjúË~TuęjCöAwě¬Rđl¯ Ñb­ŇTĿ_[IčĄʿnM¦ğ\\É[T·k¹©oĕ@A¾wya¥Y\\¥Âaz¯ãÁ¡k¥ne£ÛwE©Êō¶˓uoj_U¡cF¹­[WvP©whuÕyBF`RqJUw\\i¡{jEPïÿ½fćQÑÀQ{°fLÔ~wXgītêÝ¾ĺHd³fJd]HJ²EoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤"]],
                encodeOffsets: [[[113712, 34e3]], [[115612, 30507]], [[113649, 34054]]]
            }
        }, {
            type: "Feature",
            id: "430000",
            properties: {id: "430000", cp: [111.782279, 28.09409], name: "湖南", childNum: 3},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@nFTs"], ["@@ßÅÆá½ÔXrCOËRïÿĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_U}Ċ}¢pczfþg¤ÇòAVM"], ["@@©KA·³CQ±Á«³BUƑ¹AtćOwD]JiØSm¯b£ylXHËÑ±H«C^õľAÅ§¤É¥ïyuǙuA¢^{ÌC´­¦ŷJ£^[ª¿ĕ~ƇN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąMąıuZmZcÒ ĲĪ²SÊǄŶ¨ƚCÖŎªQØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕƪ`PDiÛU¾ÅâìUñBÈ£ýhedy¡oċ`pfmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐ¨XeĈĀ¾Oð Fi ¢|[jVxrIQ_EzAN¦zLU`cªxOTu RLÄ¢dVi`p˔vŎµªÉF~Ød¢ºgİàw¸Áb[¦Zb¦z½xBĖ@ªpºlS¸Ö\\Ĕ[N¥ˀmĎăJ\\ŀ`ňSÚĖÁĐiOĜ«BxDõĚivSÌ}iùÜnÐºG{p°M´wÀÒzJ²ò¨ oTçüöoÛÿñőĞ¤ùTz²CȆȸǎŪƑÐc°dPÎğË¶[È½u¯½WM¡­ÉB·rínZÒ `¨GA¾\\pēXhÃRC­üWGġuTé§ŎÑ©ò³I±³}_EÃħg®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþ¨[]f]Ņ©C}ÁN»hĻħƏĩ"]],
                encodeOffsets: [[[115640, 30489]], [[112543, 27312]], [[116690, 26230]]]
            }
        }, {
            type: "Feature",
            id: "440000",
            properties: {id: "440000", cp: [113.280637, 23.125178], name: "广东", childNum: 24},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@QdAua"], ["@@lxDLo"], ["@@sbhNLo"], ["@@Ă ā"], ["@@WltO[["], ["@@Kr]S"], ["@@eI]y"], ["@@I|Mym"], ["@@Û³LS¼Y"], ["@@nvºBëui©`¾"], ["@@zdÛJw®"], ["@@°¯"], ["@@a yAª¸ËJIxØ@ĀHAmÃV¡ofuo"], ["@@sŗÃÔėAƁZÄ ~°ČPäh"], ["@@¶ÝÌvmĞh­ıQ"], ["@@HdSjĒ¢D}waru«ZqadYM"], ["@@el\\LqqU"], ["@@~rMo\\"], ["@@f^C"], ["@@øPªoj÷ÍÝħXČx°Q¨ıXNv"], ["@@gÇƳo[~tly"], ["@@EÆC¿"], ["@@OP"], ["@@wđógĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGO|KPȏŹãŝIŕŭŕ@Óoo¿ē±ß}ŭĲWÈCőâUâǙIğŉ©IĳE×Á³AówXJþ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƂªFbwEÀ©\\¤]ŸI®¥D³|Ë]CöAŤ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºV¸@¾ªR²ĨN]´_eavSivc}p}Đ¼ƌkJÚe th_¸ ºx±ò_xNË²@ă¡ßH©Ùñ}wkNÕ¹ÇO½¿£ĕ]ly_WìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƞV}³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAx»HO£|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEá²\\ķÍ}jYàÙÆſ¿Çdğ·ùTßÇţʄ¡XgWÀǇğ·¿ÃOj YÇ÷Qěi"]],
                encodeOffsets: [[[117381, 22988]], [[116552, 22934]], [[116790, 22617]], [[116973, 22545]], [[116444, 22536]], [[116931, 22515]], [[116496, 22490]], [[116453, 22449]], [[113301, 21439]], [[118726, 21604]], [[118709, 21486]], [[113210, 20816]], [[115482, 22082]], [[113171, 21585]], [[113199, 21590]], [[115232, 22102]], [[115739, 22373]], [[115134, 22184]], [[113056, 21175]], [[119573, 21271]], [[119957, 24020]], [[115859, 22356]], [[116561, 22649]], [[116285, 22746]]]
            }
        }, {
            type: "Feature",
            id: "450000",
            properties: {id: "450000", cp: [108.320004, 22.82402], name: "广西", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@H TQ§A"], ["@@ĨÊªLƊDÎĹĐCǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVlo¤ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³ºDÎńĀìCĜº¦Ċ~nS|gźvZkCÆj°zVÈÁƔ]LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucà÷gÕuíÙćĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűmcih³K~µh¯e]lµélEģEďsmÇŧē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡y¦CezYwa[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ¯TbÜÈk¡ĠvàhÂƄ¢Jî¶²"]],
                encodeOffsets: [[[111707, 21520]], [[107619, 25527]]]
            }
        }, {
            type: "Feature",
            id: "460000",
            properties: {id: "460000", cp: [109.83119, 19.031971], name: "海南", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐŘÎ°H¨Ƣb²_Ġ "],
                encodeOffsets: [[112750, 20508]]
            }
        }, {
            type: "Feature",
            id: "510000",
            properties: {id: "510000", cp: [104.065735, 30.659462], name: "四川", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@LqKr"], ["@@[ĻéV£_ţġñpG réÏ·~ąSfy×Í·ºſƽiÍıƣıĻmHH}siaX@iÇ°ÁÃ×t«­T¤JJJyJÈ`Ohß¦¡uËhIyCjmÿwZGTiSsOB²fNmsPa{M{õE^Hj}gYpaeu¯oáwHjÁ½M¡pMuåmni{fk\\oÎqCwEZ¼KĝAy{m÷LwO×SimRI¯rKõBS«sFe]fµ¢óY_ÆPRcue°Cbo×bd£ŌIHgtrnyPt¦foaXďxlBowz_{ÊéWiêEGhÜ¸ºuFĈIxf®Y½ĀǙ]¤EyF²ċw¸¿@g¢§RGv»áW`ÃĵJwi]t¥wO­½a[×]`Ãi­üL¦LabbTÀåc}ÍhÆh®BHî|îºÉk­¤Sy£ia©taį·Ɖ`ō¥UhOĝLk}©Fos´JmµlŁuønÑJWÎªYÀïAetTŅÓGË«bo{ıwodƟ½OġÜÂµxàNÖ¾P²§HKv¾]|BÆåoZ`¡Ø`ÀmºĠ~ÌÐ§nÇ¿¤]wğ@srğu~Io[é±¹ ¿ſđÓ@qg¹zƱřaí°KtÇ¤V»Ã[ĩǭƑ^ÇÓ@áťsZÏÅĭƋěpwDóÖáŻneQËq·GCœýS]x·ýq³OÕ¶Qzßti{řáÍÇWŝŭñzÇWpç¿JXĩè½cFÂLiVjx}\\NŇĖ¥GeJA¼ÄHfÈu~¸Æ«dE³ÉMA|bÒćhG¬CMõƤąAvüVéŀ_VÌ³ĐwQj´·ZeÈÁ¨X´Æ¡Qu·»ÕZ³ġqDoy`L¬gdp°şp¦ėìÅĮZ°Iähzĵf²å ĚÑKpIN|Ñz]ń·FU×é»R³MÉ»GM«kiér}Ã`¹ăÞmÈnÁîRǀ³ĜoİzŔwǶVÚ£À]ɜ»ĆlƂ²ĠþTº·àUȞÏʦ¶I«dĽĢdĬ¿»Ĕ×h\\c¬ä²GêëĤł¥ÀǿżÃÆMº}BÕĢyFVvwxBèĻĒ©ĈtCĢɽŠȣ¦āæ·HĽîôNÔ~^¤Ɗu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞŒQìÛÐ@ĞǎRS¤Á§di´ezÝúØã]HqkIþËQÇ¦ÃsÇ¤[E¬ÉŪÍxXƒ·ÖƁİlƞ¹ª¹|XÊwnÆƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§áCNęÎ[ĀÕĪgÖÉªXøx¬½Ů¦¦[NÎLÜUÖ´òrÙŠxR^JkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmDŝuäđđEbee_v¡}ìęǊē}qÉåT¯µRs¡M@}ůaa­¯wvƉåZw\\Z{åû^"]],
                encodeOffsets: [[[108815, 30935]], [[110617, 31811]]]
            }
        }, {
            type: "Feature",
            id: "520000",
            properties: {id: "520000", cp: [106.713478, 26.578343], name: "贵州", childNum: 3},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@G\\lY£in"], ["@@q|mc¯tÏVSÎ"], ["@@hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǗĦTèƤƺ{¶ÉHÎd¾ŚÊ·OÐjXWrãLyzÉAL¾ę¢bĶėy_qMĔąro¼hĊw¶øV¤w²Ĉ]ÊKx|`ź¦ÂÈdrcÈbe¸`I¼čTF´¼Óýȃr¹ÍJ©k_șl³´_pĐ`oÒh¶pa^ÓĔ}D»^Xy`d[KvJPhèhCrĂĚÂ^Êƌ wZL­Ġ£ÁbrzOIlMMĪŐžËr×ÎeŦtw|¢mKjSǘňĂStÎŦEtqFT¾Eì¬¬ôxÌO¢ K³ŀºäYPVgŎ¦ŊmŞ¼VZwVlz¤£Tl®ctĽÚó{G­AÇge~Îd¿æaSba¥KKûj®_Ä^\\Ø¾bP®¦x^sxjĶI_Ä Xâ¼Hu¨Qh¡À@Ëô}±GNìĎlT¸`V~R°tbÕĊ`¸úÛtÏFDu[MfqGH·¥yAztMFe|R_GkChZeÚ°tov`xbDnÐ{E}ZèxNEÞREn[Pv@{~rĆAB§EO¿|UZ~ìUf¨J²ĂÝÆsªB`s¶fvö¦Õ~dÔq¨¸º»uù[[§´sb¤¢zþF¢ÆÀhÂW\\ıËIÝo±ĭŠ£þÊs}¡R]ěDg´VG¢j±®èºÃmpU[Áëº°rÜbNu¸}º¼`niºÔXĄ¤¼ÔdaµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxŪÒ¢@£ÀEîôruńb[§nWuMÆLl¿]x}ĳ­½"]],
                encodeOffsets: [[[112158, 27383]], [[112105, 27474]], [[112095, 27476]]]
            }
        }, {
            type: "Feature",
            id: "530000",
            properties: {id: "530000", cp: [101.512251, 24.740609], name: "云南", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞklD¤øz½ĜàĂŧMÅ|áƆàÊcðÂFÜáŢ¥\\\\ºİøÒÐJĴîD¦zK²ǏÎEh~CD­hMn^ÌöÄ©ČZÀaüfɭyœpį´ěFűk]Ôě¢qlÅĆÙa¶~ÄqêljN¬¼HÊNQ´ê¼VØ¸E^ŃÒyM{JLoÒęæe±Ķygã¯JYÆĭĘëo¥Šo¯hcK«z_prC´ĢÖY¼ v¸¢RÅW³Â§fÇ¸Yi³xR´ďUË`êĿUûuĆBƣöNDH«ĈgÑaB{ÊNF´¬c·Åv}eÇÃGB»If¦HňĕM~[iwjUÁKE¾dĪçWIèÀoÈXòyŞŮÈXâÎŚj|àsRyµÖPr´þ ¸^wþTDŔHr¸RÌmfżÕâCôoxĜƌÆĮÐYtâŦÔ@]ÈǮƒ\\Ī¼Ä£UsÈ¯LbîƲŚºyhr@ĒÔƀÀ²º\\êpJ}ĠvqtĠ@^xÀ£È¨mËÏğ}n¹_¿¢×Y_æpÅA^{½Lu¨GO±Õ½ßM¶wÁĢÛPƢ¼pcĲx|apÌ¬HÐŊSfsðBZ¿©XÏÒKk÷Eû¿SrEFsÕūkóVǥŉiTL¡n{uxţÏhôŝ¬ğōNNJkyPaqÂğ¤K®YxÉƋÁ]āęDqçgOgILu\\_gz]W¼~CÔē]bµogpÑ_oď`´³Țkl`IªºÎȄqÔþ»E³ĎSJ»_f·adÇqÇc¥Á_Źw{L^É±ćxU£µ÷xgĉp»ĆqNē`rĘzaĵĚ¡K½ÊBzyäKXqiWPÏÉ¸½řÍcÊG|µƕƣGË÷k°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ë}ǝeďºȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZï`"],
                encodeOffsets: [[104636, 22969]]
            }
        }, {
            type: "Feature",
            id: "540000",
            properties: {id: "540000", cp: [89.132212, 30.860361], name: "西藏", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥cc¡ÙaSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó´ÇĊµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eȤJ¤}Ǿ¡°§¤AÐlc@ĝsªćļđAçwxUuzEÖġ~AN¹ÄÅȀŻ¦¿ģŁéì±Hãd«g[Ø¼ēÀcīľġ¬cJµÐʥVȝ¸ßS¹ý±ğkƁ¼ą^ɛ¤Ûÿb[}¬ōõÃ]ËNm®g@Bg}ÍF±ǐyL¥íCIĳÏ÷Ñį[¹¦[âšEÛïÁÉdƅß{âNÆāŨß¾ě÷yC£k­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©"],
                encodeOffsets: [[90849, 37210]]
            }
        }, {
            type: "Feature",
            id: "610000",
            properties: {id: "610000", cp: [108.948024, 34.263161], name: "陕西", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@p¢ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYǠȰÌTÎ¨ÂW|fcă§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷY¹W@µ÷Kãï³ÛIcñ·VȋÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ċcEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOÿEËßŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ßå¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙgBƕŀrÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|§hoĕ@E±iYd¥OĻ¹S|}F@¾oAO²{tfÜ¢FǂÒW²°BĤh^Wx{@¬­F¸¡ķn£P|ªĴ@^ĠĈæbÔc¶lYi^MicĎ°Â[ävï¶gv@ÀĬ·lJ¸sn|¼u~a]ÆÈtŌºJpþ£KKf~¦UbyäIĺãnÔ¿^­ŵMThĠÜ¤ko¼Ŏìąǜh`[tRd²Ĳ_XPrɲlXiL§à¹H°Ȧqº®QCbAŌJ¸ĕÚ³ĺ§ `d¨YjiZvRĺ±öVKkjGȊÄePĞZmļKÀ[`ösìhïÎoĬdtKÞ{¬èÒÒBÔpĲÇĬJŊ¦±J«Y§@·pHµàåVKepWftsAÅqC·¬ko«pHÆuK@oHĆÛķhxenS³àǍrqƶRbzy¸ËÐl¼EºpĤ¼x¼½~Ğà@ÚüdK^mÌSj"],
                encodeOffsets: [[110234, 38774]]
            }
        }, {
            type: "Feature",
            id: "620000",
            properties: {id: "620000", cp: [103.823557, 36.058039], name: "甘肃", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@VuUv"], ["@@ũEĠtt~nkh`Q¦ÅÄÜdwAb×ĠąJ¤DüègĺqBqj°lI¡ĨÒ¤úSHbjÎB°aZ¢KJO[|A£Dx}NĂ¬HUnrk kp¼Y kMJn[aGáÚÏ[½rc}aQxOgsPMnUsncZsKúvAtÞġ£®ĀYKdnFw¢JE°Latf`¼h¬we|Æbj}GA·~W`¢MC¤tL©Ĳ°qdfObÞĬ¹ttu`^ZúE`[@Æsîz®¡CƳƜG²R¢RmfwĸgÜą G@pzJM½mhVy¸uÈÔO±¨{LfæU¶ßGĂq\\ª¬²I¥IŉÈīoıÓÑAçÑ|«LÝcspīðÍgtë_õ\\ĉñLYnĝgRǡÁiHLlõUĹ²uQjYi§Z_c¨´ĹĖÙ·ŋIaBD­R¹ȥr¯GºßK¨jWkɱOqWĳ\\a­Q\\sg_ĆǛōëp»£lğÛgSŶN®À]ÓämĹãJaz¥V}Le¤Lýo¹IsŋÅÇ^bz³tmEÁ´a¹cčecÇNĊãÁ\\č¯dNj]jZµkÓdaćå]ğĳ@ ©O{¤ĸm¢E·®«|@Xwg]Aģ±¯XǁÑǳªcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹čIoľu¶uI]vģSQ{UŻÅ}QÂ|Ì°ƅ¤ĩŪU ęĄÌZÒ\\v²PĔ»ƢNHĂyAmƂwVm`]ÈbH`Ì¢²ILvĜH®¤Dlt_¢JJÄämèÔDëþgºƫaʎÌrêYi~ Îİ¤NpÀA¾Ĕ¼bð÷®üszMzÖĖQdȨýv§Tè|ªHÃ¾a¸|Ð ƒwKĢx¦ivr^ÿ ¸l öæfƟĴ·PJv}n\\h¹¶v·À|\\ƁĚN´ĜçèÁz]ġ¤²¨QÒŨTIlªťØ}¼˗ƦvÄùØEÂ«FïËIqōTvāÜŏíÛßÛVj³âwGăÂíNOPìyV³ŉĖýZso§HÑiYw[ß\\X¦¥c]ÔƩÜ·«jÐqvÁ¦m^ċ±R¦΋ƈťĚgÀ»IïĨʗƮ°ƝĻþÍAƉſ±tÍEÕÞāNUÍ¡\\ſčåÒʻĘm ƭÌŹöʥëQ¤µ­ÇcƕªoIýIÉ_mkl³ăƓ¦j¡YzŇi}Msßõīʋ }ÁVm_[n}eı­Uĥ¼ªI{Î§DÓƻėojqYhĹT©oūĶ£]ďxĩǑMĝq`B´ƃ˺Чç~²ņj@¥@đ´ί}ĥtPńÇ¾V¬ufÓÉCtÓ̻¹£G³]ƖƾŎĪŪĘ̖¨ʈĢƂlɘ۪üºňUðǜȢƢż̌ȦǼĤŊɲĖÂ­Kq´ï¦ºĒǲņɾªǀÞĈĂD½ĄĎÌŗĞrôñnN¼â¾ʄľԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpäWÐxnsÀ^ƆwW©¦cÅ¡Ji§vúF¶¨c~c¼īeXǚ\\đ¾JwÀďksãAfÕ¦L}waoZD½Ml«]eÒÅaÉ²áo½FõÛ]ĻÒ¡wYR£¢rvÓ®y®LFLzĈôe]gx}|KK}xklL]c¦£fRtív¦PĤoH{tK"]],
                encodeOffsets: [[[108619, 36299]], [[108589, 36341]]]
            }
        }, {
            type: "Feature",
            id: "630000",
            properties: {id: "630000", cp: [96.778916, 35.623178], name: "青海", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@InJm"], ["@@CÆ½OŃĦsΰ~Ē³¦@@Ņi±è}ШƄ˹A³r_ĞǒNĪĐw¤^ŬĵªpĺSZgrpiƼĘÔ¨C|ÍJ©Ħ»®VĲ~f\\m `UnÂ~ʌĬàöNt~ňjy¢ZiƔ¥Ąk´nl`JÊJþ©pdƖ®È£¶ìRʦźõƮËnʼėæÑƀĎ[¢VÎĂMÖÝÎF²sƊƀÎBļýƞ¯ʘƭðħ¼Jh¿ŦęΌƇ¥²Q]Č¥nuÂÏri¸¬ƪÛ^Ó¦d¥[Wàx\\ZjÒ¨GtpþYŊĕ´zUOëPîMĄÁxH´áiÜUàîÜŐĂÛSuŎrJðÌ¬EFÁú×uÃÎkrĒ{V}İ«O_ÌËĬ©ÓŧSRÑ±§Ģ£^ÂyèçěM³Ƃę{[¸¿uºµ[gt£¸OƤĿéYõ·kĀq]juw¥DĩƍõÇPéÄ½G©ã¤GuȧþRcÕĕNyyût­øï»a½ē¿BMoį£Íj}éZËqbʍƬh¹ìÿÓAçãnIÃ¡I`ks£CG­ěUy×Cy@¶ʡÊBnāzGơMē¼±O÷õJËĚăVĪũƆ£¯{ËL½ÌzżVR|ĠTbuvJvµhĻĖHAëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qĉ¶³ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbĚ°ªiƶGQ¾²x¦PmlŜ[Ĥ¡ΞsĦÔÏâ\\ªÚŒU\\f¢N²§x|¤§xĔsZPòʛ²SÐqF`ªVÞŜĶƨVZÌL`¢dŐIqr\\oäõFÎ·¤»Ŷ×h¹]ClÙ\\¦ďÌį¬řtTӺƙgQÇÓHţĒ´ÃbEÄlbʔC|CŮkƮ[ʼ¬ň´KŮÈΰÌĪ¶ƶlðļATUvdTGº̼ÔsÊDÔveOg"]],
                encodeOffsets: [[[105308, 37219]], [[95370, 40081]]]
            }
        }, {
            type: "Feature",
            id: "640000",
            properties: {id: "640000", cp: [106.278179, 37.26637], name: "宁夏", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@KëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčËnL]ûcÙß@ĝ¾}w»»oģF¹»kÌÏ·{zP§B­¢íyÅt@@á]Yv_ssģ¼ißĻL¾ġsKD£¡N_X¸}B~HaiÅf{«x»ge_bsKF¯¡IxmELcÿZ¤­ĢÝsuBLùtYdmVtNmtOPhRw~bd¾qÐ\\âÙH\\bImlNZ»loqlVmGā§~QCw¤{A\\PKNY¯bFkC¥sks_Ã\\ă«¢ħkJi¯rrAhĹûç£CUĕĊ_ÔBixÅÙĄnªÑaM~ħpOu¥sîeQ¥¤^dkKwlL~{L~hw^ófćKyE­K­zuÔ¡qQ¤xZÑ¢^ļöÜ¾Ep±âbÊÑÆ^fk¬NC¾YpxbK~¥eÖäBlt¿Đx½I[ĒǙWf»Ĭ}d§dµùEuj¨IÆ¢¥dXªƅx¿]mtÏwßRĶX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjÕ"], ["@@mfwěwMrŢªv@G"]],
                encodeOffsets: [[[109366, 40242]], [[108600, 36303]]]
            }
        }, {
            type: "Feature",
            id: "650000",
            properties: {id: "650000", cp: [85.617733, 40.792818], name: "新疆", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@QØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơʃĽá½M»òmqóŘĝčË¾ăCćāƿÝɽ©ǱŅ¹đ¥³ðLrÁ®ɱĕģŉǻ̋ȥơŻǛȡVï¹Ň۩ûkɗġƁ§ʇė̕ĩũƽō^ƕUv£ƁQïƵkŏ½ΉÃŭÇ³LŇʻ«ƭ\\lŭD{ʓDkaFÃÄa³ŤđÔGRÈƚhSӹŚsİ«ĐË[¥ÚDkº^Øg¼ŵ¸£EÍöůŉT¡c_ËKYƧUśĵÝU_©rETÏʜ±OñtYwē¨{£¨uM³x½şL©Ùá[ÓÐĥ Νtģ¢\\śnkOw¥±T»ƷFɯàĩÞáB¹ÆÑUwŕĽw[mG½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³àjĨoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãØ"],
                encodeOffsets: [[88824, 50096]]
            }
        }, {
            type: "Feature",
            id: "110000",
            properties: {id: "110000", cp: [116.405285, 40.104989], name: "北京", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@ĽOÁûtŷmiÍt_H»Ĩ±d`¹­{bwYr³S]§§o¹qGtm_SŧoaFLgQN_dV@Zom_ć\\ßcÂ±x¯oœRcfe£o§ËgToÛJíĔóu|wP¤XnO¢ÉŦ¯rNÄā¤zâŖÈRpŢZÚ{GrFt¦Òx§ø¹RóäV¤XdżâºWbwŚ¨Ud®bêņ¾jnŎGŃŶnzÚSeîĜZczî¾i]ÍQaúÍÔiþĩȨWĢü|Ėu[qb[swP@ÅğP¿{\\¥A¨ÏÑ¨j¯X\\¯MKpA³[Hīu}}"],
                encodeOffsets: [[120023, 41045]]
            }
        }, {
            type: "Feature",
            id: "120000",
            properties: {id: "120000", cp: [117.190182, 38.825596], name: "天津", childNum: 1},
            geometry: {
                type: "Polygon",
                coordinates: ["@@ŬgX§Ü«E¶FÌ¬O_ïlÁgz±AXeµÄĵ{¶]gitgIj·¥îakS¨ÐƎk}ĕ{gBqGf{¿aU^fIư³õ{YıëNĿk©ïËZŏR§òoY×Ógcĥs¡bġ«@dekąI[nlPqCnp{ō³°`{PNdƗqSÄĻNNâyj]äÒD ĬH°Æ]~¡HO¾X}ÐxgpgWrDGpù^LrzWxZ^¨´T\\|~@IzbĤjeĊªz£®ĔvěLmV¾Ô_ÈNW~zbĬvG²ZmDM~~"],
                encodeOffsets: [[120237, 41215]]
            }
        }, {
            type: "Feature",
            id: "310000",
            properties: {id: "310000", cp: [121.472644, 31.231706], name: "上海", childNum: 6},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@ɧư¬EpƸÁxc"], ["@@©ª"], ["@@MA"], ["@@QpİE§ÉC¾"], ["@@bŝÕÕEȣÚƥêImɇǦèÜĠÚÃƌÃ͎ó"], ["@@ǜûȬɋŭ×^sYɍDŋŽąñCG²«ªč@h_p¯A{oloY¬j@Ĳ`gQÚhr|ǀ^MĲvtbe´R¯Ô¬¨Yô¤r]ìƬį"]],
                encodeOffsets: [[[124702, 32062]], [[124547, 32200]], [[124808, 31991]], [[124726, 32110]], [[124903, 32376]], [[124438, 32149]]]
            }
        }, {
            type: "Feature",
            id: "500000",
            properties: {id: "500000", cp: [107.304962, 29.533155], name: "重庆", childNum: 2},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@vjG~nGŘŬĶȂƀƾ¹¸ØÎezĆT¸}êÐqHðqĖä¥^CÆIj²p\\_ æüY|[YxƊæu°xb®Űb@~¢NQt°¶Sæ Ê~rǉĔëĚ¢~uf`faĔJåĊnÖ]jƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMûƱ½~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƅġ^ÖÛbÙŽŏml½SêqDu[RãË»ÿw`»y¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg`d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVFI±G^Ic´ecGĹÞ½sëĬhxW}KÓe­XsbkF¦LØgTkïƵNï¶}Gyw\\oñ¡nmĈzj@Óc£»Wă¹Ój_m»¹·~MvÛaq»­ê\\ÂoVnÓØÍ²«bq¿efE Ĝ^Q~ Évýş¤²ĮpEİ}zcĺL½¿gÅ¡ýE¡ya£³t\\¨\\vú»¼§·Ñr_oÒý¥u_n»_At©ÞÅ±ā§IVeëY}{VPÀFA¨ąB}q@|Ou\\FmQFÝMwå}]|FmÏCawu_p¯sfÙgYDHl`{QEfNysB¦zG¸rHeN\\CvEsÐùÜ_·ÖĉsaQ¯}_UxÃđqNH¬Äd^ÝŰR¬ã°wećJE·vÝ·HgéFXjÉê`|ypxkAwWĐpb¥eOsmzwqChóUQl¥F^lafanòsrEvfQdÁUVfÎvÜ^eftET¬ôA\\¢sJnQTjPØxøK|nBzĞ»LYFDxÓvr[ehľvN¢o¾NiÂxGpâ¬zbfZo~hGi]öF||NbtOMn eA±tPTLjpYQ|SHYĀxinzDJÌg¢và¥Pg_ÇzIIII£®S¬ØsÎ¼£N"], ["@@ifjN@s"]],
                encodeOffsets: [[[109628, 30765]], [[111725, 31320]]]
            }
        }, {
            type: "Feature",
            id: "810000",
            properties: {id: "810000", cp: [115.173355, 22.320048], name: "香港", childNum: 5},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@AlBk"], ["@@mn"], ["@@EpFo"], ["@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÈc"], ["@@rMUwAS®e"]],
                encodeOffsets: [[[117111, 23002]], [[117072, 22876]], [[117045, 22887]], [[116975, 23082]], [[116882, 22747]]]
            }
        }, {
            type: "Feature",
            id: "820000",
            properties: {id: "820000", cp: [113.54913, 21.69875], name: "澳门", childNum: 1},
            geometry: {type: "Polygon", coordinates: ["@@kÊd°å§s"], encodeOffsets: [[116279, 22639]]}
        }],
        UTF8Encoding: !0
    };
    s.a.registerMap("china", ru);
    var au = ru.features, ou = {
        title: [{
            textAlign: "left",
            padding: 2,
            textStyle: {fontSize: 12, fontWeight: "normal"},
            backgroundColor: "#fff"
        }],
        legend: {
            orient: "horizontal",
            left: "16%",
            top: "bottom",
            bottom: "10%",
            itemWidth: 10,
            itemHeight: 15,
            textStyle: {fontSize: 12},
            data: [{
                name: "企业所处省份",
                icon: "path://M692.906667 436.906667C692.906667 336.213333 610.986667 256 512 256s-180.906667 80.213333-180.906667 180.906667c0 34.133333 10.24 66.56 25.6 93.866667L512 768l153.6-238.933333C682.666667 501.76 692.906667 471.04 692.906667 436.906667z"
            }]
        },
        geo: {
            show: !0,
            map: "china",
            zoom: 1.2,
            label: {show: !0, fontSize: 7},
            itemStyle: {normal: {borderColor: "#333"}},
            regions: [{name: "南海诸岛", itemStyle: {normal: {opacity: 0}}, label: {show: !1}}],
            silent: !0
        },
        visualMap: [{
            type: "piecewise",
            show: !0,
            pieces: [],
            text: ["多", "少"],
            bottom: "10%",
            inRange: {color: ["#c9e8ff", "#007dd7"]},
            itemWidth: 15,
            itemHeight: 3,
            itemGap: -1,
            hoverLink: !1,
            calculable: !1
        }],
        color: ["orange"],
        series: [{
            name: "china",
            geoIndex: 0,
            type: "map",
            markLine: {
                animation: !1,
                symbol: ["circle", "none"],
                symbolSize: 5,
                lineStyle: {normal: {color: "#ccc", width: 1.5, type: "solid"}},
                data: []
            },
            data: []
        }, {
            name: "企业所处省份",
            type: "map",
            geoIndex: 0,
            color: ["orange"],
            markPoint: {symbol: "pin", symbolSize: 20, animation: !1, itemStyle: {color: "#ffa500"}, data: []}
        }]
    };

    function su(t) {
        var e = au.find((function (e) {
            return t === e.id
        }));
        return e ? e.properties : null
    }

    function lu(t, e) {
        return function (t, e) {
            var n = t.charts.provinces.data;
            n.forEach((function (t) {
                var e = su(t.provinceId);
                t.name = e ? e.name : "", t.coord = e ? e.cp : "", t.itemStyle = {
                    normal: {
                        borderColor: "#fff",
                        borderWidth: "0.5"
                    }
                }
            })), ou.visualMap[0].pieces = function (t) {
                return t.map((function (e, n) {
                    return {lt: n - 1 >= 0 && t[n - 1].value || e.value, gte: e.value}
                }))
            }(n), ou.series[0].data = n, ou.series[1].markPoint.data = [{coord: su(e.provinceId).cp}], t.type && (ou.series[0].markLine.data = [[{
                coord: ou.series[0].data[0].coord,
                label: {normal: {textStyle: {color: "#666"}}}
            }, {coord: [103, 48]}]])
        }(t, e), ou
    }

    var uu = {
            name: "region", components: {}, props: {
                originData: {
                    type: Object, default: function () {
                    }
                }, target: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {content: "", chartArea: ""}
            }, mounted: function () {
                this.initChart()
            }, beforeDestroy: function () {
                this.timer && clearTimeout(this.timer)
            }, methods: {
                initChart: function () {
                    var t = this, e = (this.originData || {}).charts;
                    this.timer = setTimeout((function () {
                        var n = document.querySelector(".chart-area"), i = lu(t.originData, t.target);
                        t.chartArea = t.$echarts.init(n, null, {renderer: "svg"}), t.chartArea.setOption(i), i.graphic = t.getOptionsGraphic(), t.chartArea.setOption(i), function (t, e, n) {
                            t && n.setOption({
                                title: {
                                    text: e.areaMaxAmount + "\n占总额的" + ou.series[0].data[0].percent,
                                    left: "center",
                                    top: 20,
                                    textStyle: {color: "#666"}
                                }
                            })
                        }(t.originData.type, t.target, t.chartArea), t.content = e.provinces.text, delete t.timer
                    }), 1500)
                }, fixGraphicSize: function (t, e, n) {
                    var i = n * this.chartArea.getWidth(), r = i * e;
                    return t.style.width = i, t.style.height = r, t
                }, getOptionsGraphic: function () {
                    var t = [this.fixGraphicSize({
                        type: "image",
                        right: 10,
                        bottom: 10,
                        style: {image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnkAAAO1CAIAAACdNmSNAAAACXBIWXMAAC4jAAAuIwF4pT92AAAJ5WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNS0xOVQxMDoyODo1NCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDUtMTlUMTA6NTM6NDQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDUtMTlUMTA6NTM6NDQrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDViNDY3ODAtYTk3Ni00NDBjLTlhNjAtMGUxZDkwZTY0YzliIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjM2MjRjYmQtYTI4ZS01NTQ1LWE5YjEtYzZmYzU4NzJkYmMxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZGUzODdmOTEtYzFlNC00ZTM0LWJmMmYtYzJjNDBiYTI2NGYxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZTM4N2Y5MS1jMWU0LTRlMzQtYmYyZi1jMmM0MGJhMjY0ZjEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTlUMTA6Mjg6NTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MWUyYjA0Yi1lY2E1LTRjMWUtYTE2ZC00NzA2MTNmZWQxN2IiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTlUMTA6NTM6MzQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmJlYzA5NjAtY2MwMS00OWI4LTk2NmYtMGRmMzFhMzZjYzAwIiBzdEV2dDp3aGVuPSIyMDIxLTA1LTE5VDEwOjUzOjQ0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1YjQ2NzgwLWE5NzYtNDQwYy05YTYwLTBlMWQ5MGU2NGM5YiIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0xOVQxMDo1Mzo0NCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYmVjMDk2MC1jYzAxLTQ5YjgtOTY2Zi0wZGYzMWEzNmNjMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGUzODdmOTEtYzFlNC00ZTM0LWJmMmYtYzJjNDBiYTI2NGYxIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZGUzODdmOTEtYzFlNC00ZTM0LWJmMmYtYzJjNDBiYTI2NGYxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+db5e9gAAi/9JREFUeJzt/Xl8W3We5/t/JW85SogVFCAECSsQFJaABBRVJRVVVlrU0lV2Ybq6TU1vFj3dU+PMgnn4Pu7cYcjEXOrm3t/ML4PpniZ3pmsGpbt6unF1dTll1wruKCw2xRYZ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fv2FPRdVorOz88knn1Q+2yVmZz58beDssY+us9zaZP/SVM38VnXET4VOH35PudnS0qLdIoCi1S7v6enJdpdx1aqffBAlaCvVMjF9KfzB6C//9pX/9Vx60F5/271rNzqL0rDSNJXUG6+9amwqJcycziv/XOdPfnz+k4/FXGp1yQMjL334m5fUQSuEiBz94M1//G+fhg8IIfQiORm/cpxfJBIZGBiY86gTSZLU7QGWlsFg6O7uThliiRz94OArP33rpy+cDrzcIGbyfKlaXXLf679SbppMJk1PVyxa1u7Zsyfj9d/74z/7wchxho4rUr0++emRt/f++sWRH/+39JQVQljucd37rT+aLqvjawrg5rseUN88dOiqgJSLJclf63S6U+GPGpKTdfpkTezM5Ilg3dR5fdpiqeR0PEcZ4fHg+/W6RELoktNX7WcdHBwMh8OdnZ2SlLX30N7ezvJgaMpisXR3d6cP9p4dO7jP/9M3f/LfZ04cqM1jgeDkqaPqqZmWlpalbWeK4owh+/3+jNf/3f/9F46H/2yaibqKU6MTU58cGc00YiyEMJrX33r3A6Z1d842NFZhWag5LVt1vdG8XknHYDCY8gG8paVFnpGZin165NX+42//Sj2BuvqWjY6H/2w2eeXPT01NbW1D1rw89WEg8cBXxDVr7tvUcvzAO+q7hoaGtm3b1tvbOzw8HAgEUvbtZCtoBywtg8HQ3t7u8XgGBgZSykqcHTv46tjB9Q9suu3L376Ucypq32u/VL7WulMrir4OOcXnf7u9es5vqR610xcOv7X76JsvpVw3mtdLhhV3ub+dXL46kRTTglXHmcWT9ZJhRfSzm+lbZVwu1+DgoHI9pb7S2Y8PTV84p19+rXJlSldfX5e1DsB0/IJ++kKNLpne91XewuVyuVyuSCQSCARisZi4unsNFIDJZPJ6vR6Pp6+vL+WMisNv7T576sQXWv/oUm3mo/fqxFUbCfNcErUYxcla+YSfdOeOfbR83b2FbQs0VKMTFz8Jjb3/RkoleqN5ven6tRucX43XNVbPxp5l+tmjb//TROT0bY4vLrt+3XRyHhthV12/5kQw1wPa29t37NiR8a7EzPT4wb0333/5r0mdLnHk1f547EKOV3vlR391aXJKp08dzE+Zi81/3SagEXlIORAI9PX1qT+Gnh07+M6v/uHebzya8azrmZkp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"}
                    }, 1.5, 50 / 380)];
                    try {
                        var e = this.chartArea.convertToPixel("geo", [120.17270849132774, 24.50318467541512]);
                        t.push(this.fixGraphicSize({
                            type: "image",
                            left: e[0],
                            top: e[1],
                            style: {image: "data:image/png;base64,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"}
                        }, 569 / 202, 50 / 1050))
                    } catch (t) {
                    }
                    return {elements: t}
                }
            }
        }, cu = (n("ZhNE"), Object(x.a)(uu, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "area-container",
                attrs: {id: "dataAnalysis-region"}
            }, [n("div", {staticClass: "area-title"}, [t._v(t._s(t.originData.title))]), n("div", {staticClass: "chart-legend darkgray"}, [t._v("单位：元")]), n("div", {staticClass: "chart-area"}), n("div", {staticClass: "chart-content lightgray"}, [t._v(t._s(t.content))])])
        }), [], !1, null, "3f40c9df", null).exports), du = {
            name: "consumption", components: {}, data: function () {
                return {
                    tplData: null,
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : ""
                }
            }, mounted: function () {
                this.getList()
            }, methods: {
                getList: function () {
                    var t = this, e = {pid: this.pid};
                    this.$http.get("/c/consumptionAjax", {params: e}).then((function (e) {
                        e.data && 0 !== e.data.total && (t.tplData = e.data.list[0])
                    }))
                }
            }
        }, hu = (n("0cRa"), Object(x.a)(du, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.tplData ? i("div", {
                staticClass: "consumption",
                attrs: {id: "dataAnalysis-consumption"}
            }, [i("div", {staticClass: "consumption-title"}, [t._v("\n        消费评价指数"), i("span", [t._v(t._s(t.tplData.complaintScore))]), i("img", {
                staticClass: "aqc-table-logo",
                attrs: {src: n("HBjz"), alt: ""}
            })]), i("table", {staticClass: "zx-detail-basic-table"}, [i("tbody", [i("tr", [i("td", [t._v("经营年限10年以上")]), i("td", [t._v(t._s(t.tplData.tenYearsScore))]), i("td", [t._v("消费投诉处理分")]), i("td", [t._v(t._s(t.tplData.handlingScore))])]), i("tr", [i("td", [t._v("315消费绿色通道企业")]), i("td", [t._v(t._s(t.tplData.compromiseScore))]), i("td", [t._v(t._s(t.tplData.specialCaseDetails))]), i("td", [t._v(t._s(t.tplData.specialCaseScore))])]), i("tr", [i("td", {staticClass: "fontBlod"}, [t._v("总分")]), i("td", {
                staticClass: "yellow fontBlod",
                attrs: {colspan: "3"}
            }, [t._v(t._s(t.tplData.complaintScore))])])])]), t._m(0)]) : t._e()
        }), [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "consumption-img-box"}, [n("span", [t._v("数据来源")]), n("img", {
                staticClass: "consumption-img",
                attrs: {src: "https://xinpub.cdn.bcebos.com/static/aqc-consumption-img.png"}
            })])
        }], !1, null, "14be5799", null).exports), fu = {
            name: "regcapital", components: {}, props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {}
            }, computed: {
                country: function () {
                    var t = (this.originData || {}).country;
                    return t
                }, province: function () {
                    var t = (this.originData || {}).province;
                    return t
                }
            }, mounted: function () {
            }, beforeDestroy: function () {
            }, methods: {}
        }, pu = (n("A8TB"), Object(x.a)(fu, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "regcapital",
                attrs: {id: "dataAnalysis-regcapital"}
            }, [i("div", {staticClass: "regcapital-title"}, [t._v(t._s(t.originData.title))]), i("div", {staticClass: "detail-bench-item left"}, [i("img", {
                staticClass: "detail-bench regcapital-bench",
                attrs: {src: n("CnaX")}
            }), i("img", {
                staticClass: "detail-bench-arrow country-arrow",
                style: {transform: "rotate(" + t.country.angle + "deg)"},
                attrs: {src: n("ug1L")}
            }), i("div", {staticClass: "detail-regcapital-level"}, [i("p", {staticClass: "desc"}, [t._v(t._s(t.country ? t.country.desc : "-"))]), i("p", {staticClass: "scope"}, [t._v("全国范围内")])]), i("span", {staticClass: "level low"}, [t._v("偏低")]), i("span", {staticClass: "level mid"}, [t._v("中等")]), i("span", {staticClass: "level high"}, [t._v("优秀")]), i("div", {staticClass: "text"}, [t._v(t._s(t.country ? t.country.text : "-"))])]), i("div", {staticClass: "detail-bench-item right"}, [i("img", {
                staticClass: "detail-bench regcapital-bench",
                attrs: {src: n("CnaX")}
            }), i("img", {
                staticClass: "detail-bench-arrow province-arrow",
                style: {transform: "rotate(" + t.province.angle + "deg)"},
                attrs: {src: n("ug1L")}
            }), i("div", {staticClass: "detail-regcapital-level"}, [i("p", {staticClass: "desc"}, [t._v(t._s(t.province ? t.province.desc : "-"))]), i("p", {staticClass: "scope"}, [t._v("本省范围内")])]), i("span", {staticClass: "level low"}, [t._v("偏低")]), i("span", {staticClass: "level mid"}, [t._v("中等")]), i("span", {staticClass: "level high"}, [t._v("优秀")]), i("div", {staticClass: "text"}, [t._v(t._s(t.province ? t.province.text : "-"))])])])
        }), [], !1, null, "b1659c0c", null).exports), gu = {
            name: "noReasonReturnOffline",
            components: {AiTableList: lt.a},
            props: {
                originData: {
                    type: Object, default: function () {
                    }
                }
            },
            data: function () {
                return {
                    config: {
                        title: "线下无理由退货",
                        id: "dataAnalysis-noreasonreturnoffline",
                        showFilter: !1,
                        showTitleCount: !0,
                        showPager: !0,
                        url: "/c/noreasonreturnofflineAjax",
                        columns: [{type: "index", name: "序号", width: 50}, {
                            name: "品类列表",
                            key: "categoryList",
                            width: 296,
                            align: "left"
                        }, {name: "退货期限", key: "returnPeriod", width: 100}, {
                            name: "所属分局",
                            key: "affiliatedBranch",
                            width: 396,
                            align: "left"
                        }]
                    }
                }
            }
        }, vu = (n("3ffy"), Object(x.a)(gu, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "noreasonreturnoffline-wrap"}, [n("ai-table-list", {
                attrs: {
                    config: t.config,
                    "origin-data": t.originData
                }
            }), t.originData.total ? n("div", {class: ["noreasonreturnoffline-img-box", t.originData.total > t.originData.size ? "hasPaging" : ""]}, [n("span", [t._v("数据来源")]), n("img", {
                staticClass: "noreasonreturnoffline-img",
                attrs: {src: "https://xinpub.bj.bcebos.com/static/noreasonreturnoffline.png"}
            })]) : t._e()], 1)
        }), [], !1, null, "2ffc9ff1", null).exports), mu = n("Hdk7"), yu = {
            name: "dataTab",
            components: {
                SubTabs: nt,
                Scale: iu,
                Region: cu,
                Consumption: hu,
                Regcapital: pu,
                AtlasEntrance: Xt.a,
                StockChart: Zt.a,
                Relations: mu.a,
                NoreasonReturnoffline: vu
            },
            data: function () {
                return {
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    target: {},
                    scale: {},
                    regcapital: {},
                    area: {},
                    noreasonreturnoffline: {},
                    drawStock: !1
                }
            },
            props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            mounted: function () {
                this.getTableData()
            },
            activated: function () {
                this.drawStock = !0, setTimeout((function () {
                    Object(p.l)({
                        watermark_type: "image",
                        watermark_iamge: "https://xinpub.bj.bcebos.com/aiqicha/watermark.png",
                        watermark_alpha: 1,
                        watermark_x: -50,
                        watermark_y: -50,
                        watermark_x_space: 50,
                        watermark_y_space: 2,
                        watermark_angle: 0
                    }, "stock-chart")
                }), 2e3), setTimeout((function () {
                    Object(p.l)({
                        watermark_type: "image",
                        watermark_iamge: "https://xinpub.bj.bcebos.com/aiqicha/watermark.png",
                        watermark_alpha: 1,
                        watermark_x: -50,
                        watermark_y: -50,
                        watermark_x_space: 50,
                        watermark_y_space: 2,
                        watermark_angle: 0
                    }, "chart-relation")
                }), 2e3)
            },
            deactivated: function () {
                this.drawStock = !1
            },
            methods: {
                getTableData: function () {
                    var t = this;
                    this.$http.get("/detail/dataAnalysisAjax?pid=" + this.pid).then((function (e) {
                        if (0 === e.status) {
                            var n = e.data || {}, i = n.sections, r = n.target;
                            if (!Array.isArray(i)) {
                                var a = i || {}, o = a.area, s = a.regcapital, l = a.scale, u = a.noreasonreturnoffline;
                                t.target = r, t.scale = l, t.area = o, t.regcapital = s, t.noreasonreturnoffline = u
                            }
                        } else t.$Message.warning(e.msg || "接口错误")
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }
            }
        }, bu = Object(x.a)(yu, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "data-tab"}, [n("sub-tabs", {
                attrs: {
                    "tab-id": "dataAnalysis",
                    "new-tabs": t.newTabs
                }
            }), n("div", [n("div", {
                staticClass: "aqc-table-list",
                attrs: {id: "dataAnalysis-relation"}
            }, [n("h3", {staticClass: "aqc-detail-title"}, [t._v("企业图谱")]), n("atlas-entrance", {attrs: {"view-link": "/relations?pid=" + t.pid}}, [n("relations")], 1)], 1), n("div", {
                staticClass: "aqc-table-list",
                attrs: {id: "dataAnalysis-stockchart"}
            }, [n("h3", {staticClass: "aqc-detail-title"}, [t._v("股权穿透图")]), n("atlas-entrance", {attrs: {"view-link": "/relations/stockchart?pid=" + t.pid}}, [t.drawStock ? n("stock-chart") : t._e()], 1)], 1), t.regcapital && t.regcapital.count ? n("regcapital", {attrs: {"origin-data": t.regcapital}}) : t._e(), t.scale && t.scale.count ? n("scale", {
                attrs: {
                    "origin-data": t.scale,
                    target: t.target
                }
            }) : t._e(), t.area && t.area.title ? n("region", {
                attrs: {
                    "origin-data": t.area,
                    target: t.target
                }
            }) : t._e(), n("consumption"), t.noreasonreturnoffline ? n("noreason-returnoffline", {attrs: {"origin-data": t.noreasonreturnoffline}}) : t._e()], 1)], 1)
        }), [], !1, null, null, null).exports, xu = {
            name: "newList", components: {}, props: {
                originData: {
                    type: Array, default: function () {
                        return []
                    }
                }, totalNum: {type: Number, defalut: 0}
            }, data: function () {
                return {levelObj: {0: "负面", 1: "正面", 2: "中立"}, topicLevel: ""}
            }, mounted: function () {
            }, methods: {
                onPageChange: function (t) {
                    Object(p.j)(".news-list", 140), this.$emit("pageChange", t)
                }, onLink: function (t, e) {
                    "bid" === e && window.open("/company_detail_" + t.pid, "_blank"), "person" === e && window.open("/person?personId=" + t.personId, "_blank")
                }
            }
        }, _u = (n("nKf9"), {
            name: "newsTab", components: {
                SubTabs: nt, NoDataTab: Se, NewList: Object(x.a)(xu, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "news-list"}, [n("ul", t._l(t.originData, (function (e, i) {
                        return n("li", {
                            key: i,
                            staticClass: "news-content-item"
                        }, [n("div", {staticClass: "news-title"}, [n("span", {class: ["news-icon", "icon-" + e.topicLevel]}, [t._v("\n                    " + t._s(t.levelObj[e.topicLevel]) + "\n                ")]), n("p", {staticClass: "news-title-content"}, [n("a", {
                            attrs: {
                                href: e.fromUrl,
                                target: "_blank"
                            }
                        }, [t._v("\n                        " + t._s(e.topicTitle) + "\n                    ")])])]), n("div", {staticClass: "news-short-text"}, [n("a", {
                            attrs: {
                                href: e.fromUrl,
                                target: "_blank"
                            }
                        }, [t._v("\n                    " + t._s(e.topicContent) + "\n                ")])]), n("div", {staticClass: "news-attach"}, [e.keywords.length || e.incident ? n("div", {staticClass: "news-tag"}, [e.incident ? n("div", {staticClass: "news-tag-item"}, [t._v("\n                        " + t._s(e.incident) + "\n                    ")]) : t._e(), t._l(e.keywords, (function (e, i) {
                            return n("div", {
                                key: i,
                                staticClass: "news-tag-item"
                            }, [t._v("\n                        " + t._s(e) + "\n                    ")])
                        }))], 2) : t._e(), e.person && e.person.length ? n("div", {staticClass: "news-related"}, [n("i", {staticClass: "icon-label"}), t._l(e.person, (function (e, i) {
                            return n("span", {
                                key: i, staticClass: "news-related-item", on: {
                                    click: function (n) {
                                        return n.stopPropagation(), t.onLink(e, "person")
                                    }
                                }
                            }, [t._v("\n                        " + t._s(e.personName) + "\n                    ")])
                        }))], 2) : t._e(), n("div", {staticClass: "news-info"}, [n("span", {staticClass: "news-from"}, [t._v(t._s(e.topicFrom))]), n("span", {staticClass: "news-divider"}, [t._v("|")]), n("span", {staticClass: "news-time"}, [t._v(t._s(e.topicTime))])])])])
                    })), 0), t.totalNum > 10 ? n("Page", {
                        attrs: {
                            total: t.totalNum,
                            "page-size": 10,
                            "class-name": "news-page"
                        }, on: {"on-change": t.onPageChange}
                    }) : t._e()], 1)
                }), [], !1, null, "5732d8a4", null).exports
            }, data: function () {
                return {
                    loading: !0,
                    isAllNodata: !0,
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    page: 1,
                    totalNum: 0,
                    list: []
                }
            }, props: {
                newTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, mounted: function () {
                this.getNewsData()
            }, methods: {
                getNewsData: function () {
                    var t = this;
                    this.$http.get("/yuqing/topicAjax", {params: {pid: this.pid, p: this.page}}).then((function (e) {
                        if (0 === e.status) {
                            var n = e.data || {}, i = n.list, r = n.totalNum;
                            0 !== r && (t.isAllNodata = !1), t.list = i, t.totalNum = +r > 100 ? 100 : r
                        } else t.$Message.warning(e.msg || "接口错误");
                        t.loading = !1
                    })).catch((function (e) {
                        t.$Message.error(e.msg || "接口错误")
                    }))
                }, onPageChange: function (t) {
                    this.page = t, this.getNewsData()
                }
            }
        }), wu = Object(x.a)(_u, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "data-tab",
                attrs: {id: "koubei-news"}
            }, [n("sub-tabs", {
                attrs: {
                    "tab-id": "koubei",
                    "new-tabs": t.newTabs
                }
            }), t.loading ? n("Spin", [t._v("加载中...")]) : t.isAllNodata ? n("no-data-tab") : n("div", [n("new-list", {
                attrs: {
                    "origin-data": t.list,
                    "total-num": t.totalNum
                }, on: {pageChange: t.onPageChange}
            })], 1)], 1)
        }), [], !1, null, null, null).exports, Cu = {
            name: "aqcAdvertisementBottom", props: {
                pcDetailBanner: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }
        }, Su = (n("v150"), Object(x.a)(Cu, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "aqc-advertisement-bottom-wrapper"}, [t.pcDetailBanner.isShow ? n("a", {
                attrs: {
                    href: t.pcDetailBanner.jumpurl,
                    target: "_blank"
                }
            }, [n("img", {attrs: {src: t.pcDetailBanner.imgurl}})]) : t._e()])
        }), [], !1, null, "2a8c6b44", null).exports),
        ku = (n("Qyje"), {phone: "", email: "", problem: "", defaultList: [], uploadList: []}), Tu = 1, Mu = {
            data: function () {
                return {
                    isLogin: window.pageData.isLogin,
                    tplData: window.pageData.result,
                    pid: window.pageData.result && window.pageData.result.pid ? window.pageData.result.pid : "",
                    hasErrorUploadTip: !1,
                    errorUploadTip: "",
                    show: !1,
                    hasSubmit: !1,
                    form: {phone: "", email: "", problem: "", defaultList: [], uploadList: [], login: !1},
                    optionList: [{name: "工商信息", id: "basic", select: !1}, {
                        name: "上市信息",
                        id: "stock",
                        select: !1
                    }, {name: "重点关注", id: "risk", select: !1}, {name: "知识产权", id: "certRecord", select: !1}, {
                        name: "企业发展",
                        id: "companyDevelop",
                        select: !1
                    }, {name: "经营状况", id: "operatingCondition", select: !1}, {
                        name: "数据解读",
                        id: "dataAnalysis",
                        select: !1
                    }, {name: "新闻资讯", id: "koubei", select: !1}, {name: "其他", id: "other", select: !1}],
                    ruleValidate: {
                        problem: [{
                            required: !0, trigger: "blur", validator: function (t, e, n) {
                                "" === e ? n("问题描述不能为空") : /^\s+$/.test(e) ? n("问题描述不能仅包含空格") : n()
                            }
                        }], email: [{
                            validator: function (t, e, n) {
                                e && /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e) || "" === e ? n() : n("邮箱格式有误")
                            }, trigger: "blur"
                        }], phone: [{
                            validator: function (t, e, n) {
                                e && /^1[3456789]\d{9}$/.test(e) || "" === e ? n() : n("手机号格式有误")
                            }, trigger: "blur"
                        }], login: [{
                            required: !0, validator: function (t, e, n) {
                                e ? n() : n("请勾选此选项")
                            }, trigger: "change"
                        }]
                    }
                }
            }, components: {}, computed: {
                submitStatus: function () {
                    return (this.isLogin || !(this.isLogin || !this.form.login)) && !this.hasSubmit
                }
            }, methods: {
                onUploadBtnClick: function () {
                    this.$refs.uploadbtn.click()
                }, onFileChange: function (t) {
                    var e = this;
                    this.hideUploadTip();
                    var n = t.target.files[0];
                    if (n && (this.checkNumber() && this.checkType(n) && this.checkSize(n))) {
                        this.$refs.uploadbtn.value = null;
                        var i = new FileReader;
                        i.readAsDataURL(n), i.onload = function (t) {
                            e.form.uploadList.push({id: Tu++, name: n.name, url: t.target.result, blob: n})
                        }
                    }
                }, handleRemove: function (t) {
                    var e = this.form.uploadList.findIndex((function (e) {
                        return e.id === t.id
                    }));
                    this.form.uploadList.splice(e, 1)
                }, onOk: function () {
                    var t = this;
                    this.$Message.config({top: 450, duration: 3}), this.$refs.form.validate((function (e) {
                        if (e) {
                            t.hasSubmit = !0;
                            var n = t.form, i = n.phone, r = n.email, a = n.problem, o = new FormData;
                            o.append("entName", t.tplData.entName || ""), o.append("pid", t.pid), o.append("phone", i), o.append("email", r), o.append("problem", a.trim()), o.append("type", "ent"), o.append("source", "pc");
                            var s = t.optionList.filter((function (t) {
                                return t.select
                            })).map((function (t) {
                                return t.id
                            }));
                            s.length && o.append("tabs", s.join("_")), t.form.uploadList.forEach((function (t) {
                                o.append("file[]", t.blob, t.name)
                            })), t.$http.post("/feedback/correctWrongDataAjax", o, {
                                headers: {"Content-Type": "multipart/form-data;charset=UTF-8"},
                                isFile: !0
                            }).then((function (e) {
                                0 === e.status ? (t.show = !1, t.$Message.success({content: "提交成功!"})) : t.$Message.error({content: "提交失败，请稍后再试!"}), localStorage.getItem("dataErrorCorrection") && (localStorage.removeItem("dataErrorCorrection"), t.optionList.forEach((function (t) {
                                    t.select = !1
                                }))), t.setMessageDefault()
                            })).catch((function () {
                                t.show = !1, t.$Message.error({content: "提交失败，请稍后再试!"}), t.setMessageDefault()
                            }))
                        } else t.setMessageDefault()
                    }))
                }, onVisibleChange: function (t) {
                    t || (this.$refs.form.resetFields(), this.form = ku, this.hideUploadTip())
                }, onOptionClick: function (t) {
                    t.select = !t.select
                }, checkNumber: function () {
                    return 10 !== this.form.uploadList.length || (this.showUploadTip("图片数不能超过10个"), !1)
                }, checkSize: function (t) {
                    return !!(t.size / 1024 / 1024 <= 5) || (this.showUploadTip("图片大小不能超过5M"), !1)
                }, checkType: function (t) {
                    var e = t.name.substring(t.name.lastIndexOf(".") + 1);
                    return !!["png", "jpg", "jpeg"].find((function (t) {
                        return t === e
                    })) || (this.showUploadTip("图片格式不正确，仅支持jpg、jpeg、png格式"), !1)
                }, showUploadTip: function (t) {
                    this.errorUploadTip = t, this.hasErrorUploadTip = !0
                }, hideUploadTip: function () {
                    this.errorUploadTip = "", this.hasErrorUploadTip = !1
                }, setMessageDefault: function () {
                    var t = this;
                    setTimeout((function () {
                        t.$Message.config({top: 24, duration: 1.5})
                    }))
                }, handleLogin: function () {
                    localStorage && this.form.problem && (this.form.defaultList = this.optionList, localStorage.setItem("dataErrorCorrection", d()(this.form))), this.show = !1, this.$emit("handleLogin")
                }
            }, mounted: function () {
                if ("1" === Object(p.e)().feedback && (this.show = !0), localStorage) {
                    var t = JSON.parse(localStorage.getItem("dataErrorCorrection"));
                    t && this.isLogin && (this.form = Q()({}, t), this.optionList = t.defaultList)
                }
            }, watch: {
                show: function () {
                    this.hasSubmit = !this.show
                }
            }
        }, Ou = (n("dtl6"), n("Z4ZX"), Object(x.a)(Mu, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("Modal", {
                staticClass: "data-report-modal",
                attrs: {width: "600", title: "数据纠错", "mask-closable": !1, "footer-hide": ""},
                on: {"on-visible-change": t.onVisibleChange},
                model: {
                    value: t.show, callback: function (e) {
                        t.show = e
                    }, expression: "show"
                }
            }, [n("Form", {
                ref: "form",
                attrs: {model: t.form, "label-width": 124, "label-position": "left", rules: t.ruleValidate}
            }, [n("FormItem", {
                staticClass: "small",
                attrs: {label: "企业名称"}
            }, [n("span", [t._v(t._s(t.tplData.entName || ""))])]), n("FormItem", {attrs: {label: "信息有误的内容"}}, [n("div", {staticClass: "tip"}, [t._v("\n                    请选择信息有误的内容，便于我们准确定位问题\n                ")]), n("div", {staticClass: "item-wrap"}, t._l(t.optionList, (function (e, i) {
                return n("span", {
                    key: i, class: ["item", e.select ? "active" : ""], on: {
                        click: function (n) {
                            return t.onOptionClick(e)
                        }
                    }
                }, [t._v(t._s(e.name))])
            })), 0)]), n("FormItem", {attrs: {label: "问题描述", prop: "problem"}}, [n("Input", {
                staticClass: "problem",
                attrs: {type: "textarea", autosize: {minRows: 7, maxRows: 7}, placeholder: "请详细描述您发现的问题，可获得更快的处理"},
                model: {
                    value: t.form.problem, callback: function (e) {
                        t.$set(t.form, "problem", e)
                    }, expression: "form.problem"
                }
            })], 1), n("FormItem", {attrs: {label: "图片附件"}}, [n("div", {staticClass: "upload-wrap"}, [t._l(t.form.uploadList, (function (e, i) {
                return n("div", {
                    key: i,
                    staticClass: "demo-upload-list"
                }, [[n("img", {attrs: {src: e.url}}), n("Icon", {
                    attrs: {
                        type: "ios-close-circle",
                        size: "40",
                        color: "#999999"
                    }, on: {
                        click: function (n) {
                            return t.handleRemove(e)
                        }
                    }
                })]], 2)
            })), n("div", {staticClass: "upload-btn"}, [n("input", {
                ref: "uploadbtn",
                staticStyle: {opacity: "0"},
                attrs: {type: "file", id: "upload-btn"},
                on: {change: t.onFileChange}
            }), n("Icon", {
                attrs: {
                    type: "ios-add",
                    size: "20"
                }
            }), n("span", {staticClass: "text"}, [t._v("上传图片")])], 1), n("div", {staticClass: "tip"}, [t._v("\n                        仅支持jpg、jpeg、png格式，大小不超过5M\n                    ")]), t.hasErrorUploadTip ? n("div", {staticClass: "error-upload-tip"}, [t._v(t._s(t.errorUploadTip) + "\n                        "), n("Icon", {
                attrs: {type: "ios-close-circle"},
                on: {click: t.hideUploadTip}
            })], 1) : t._e()], 2)]), n("FormItem", {
                attrs: {
                    label: "联系电话",
                    prop: "phone"
                }
            }, [n("Input", {
                attrs: {placeholder: "请输入联系电话，便于我们与您核实问题", clearable: ""},
                model: {
                    value: t.form.phone, callback: function (e) {
                        t.$set(t.form, "phone", e)
                    }, expression: "form.phone"
                }
            })], 1), n("FormItem", {
                attrs: {
                    label: "邮箱",
                    prop: "email"
                }
            }, [n("Input", {
                attrs: {placeholder: "请输入邮箱，便于我们与您核实问题", clearable: ""},
                model: {
                    value: t.form.email, callback: function (e) {
                        t.$set(t.form, "email", e)
                    }, expression: "form.email"
                }
            })], 1), t.isLogin ? t._e() : n("FormItem", {
                staticClass: "unlogin-tip",
                attrs: {prop: "login"}
            }, [n("Checkbox", {
                model: {
                    value: t.form.login, callback: function (e) {
                        t.$set(t.form, "login", e)
                    }, expression: "form.login"
                }
            }), t._v("我已知晓：需"), n("span", {
                staticClass: "login-link",
                on: {click: t.handleLogin}
            }, [t._v("登录百度账号")]), t._v("，才能在“个人中心-我的纠错”中查看反馈结果。\n            ")], 1), n("div", {staticClass: "btn-wrap"}, [n("Button", {
                class: ["confirm-btn", t.submitStatus ? "" : "disabled-btn"],
                attrs: {disabled: !t.submitStatus, type: "primary"},
                on: {click: t.onOk}
            }, [t._v("提交")])], 1)], 1)], 1)], 1)
        }), [], !1, null, "1438ac00", null).exports), Au = {
            name: "MonitorDynamic", data: function () {
                return {showMonitorTip: !0}
            }, props: {
                monitorData: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, mounted: function () {
                var t = this;
                setTimeout((function () {
                    t.close()
                }), 5e3)
            }, methods: {
                close: function () {
                    this.showMonitorTip = !1
                }
            }
        }, Du = (n("7mfP"), Object(x.a)(Au, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.showMonitorTip ? n("div", {staticClass: "monitor-tip-wrap"}, [n("span", {staticClass: "monitor-tip-title"}, [t._v(t._s(t.monitorData.date) + " 监控日报：")]), n("span", {staticClass: "monitor-tip-desc special"}, [t._v(t._s(t.monitorData.entName))]), n("span", {staticClass: "monitor-tip-desc"}, [t._v(" 新增 " + t._s(t.monitorData.count) + " 条")]), n("span", {staticClass: "monitor-tip-desc special"}, [t._v(t._s(t.monitorData.type))]), n("span", {staticClass: "monitor-tip-operate"}, [n("a", {
                staticClass: "link",
                attrs: {href: "//qiye.baidu.com/usercenter#monitor/dynamic"}
            }, [t._v("查看更多动态")]), n("Icon", {
                staticClass: "monitor-tip-close",
                attrs: {type: "ios-close"},
                on: {
                    click: function (e) {
                        t.showMonitorTip = !1
                    }
                }
            })], 1)]) : t._e()
        }), [], !1, null, "08d5692a", null).exports),
        Eu = ["aqcAdvertisement", "DiscreditRightBanner", "NewsInfo", "CreditZone", "RecommendCompany", "BrowsehHistory"],
        Pu = ["aqcAdvertisement", "CompanyDynamics", "QualificationHonor", "DiscreditRightBanner", "NewsInfo", "CreditZone", "CompanyMember", "RecommendCompany", "BrowsehHistory"],
        Iu = {
            name: "detail",
            components: {
                CBase: l.a,
                RightPane: u.a,
                RiskDynamicBar: Z,
                BasicTab: _e,
                StockTab: Lr,
                certTab: Vs,
                conditionTab: Ul,
                companyDevelopTab: fs,
                HeaderPanel: q,
                NavTabs: Xl,
                RiskTab: jo,
                DataTab: bu,
                NewsTab: wu,
                aqcAdvertisementBottom: Su,
                dataReport: Ou,
                MonitorDynamic: Du
            },
            data: function () {
                return {
                    newTabs: [],
                    pid: window.pageData.result.pid,
                    searchReset: !0,
                    rightTemplates: window.pageData.result.cptflag ? Pu : Eu,
                    activeTabId: "",
                    typeId: "",
                    activeSubTabId: "",
                    aqcAdvertisement: {pcDetailBanner: {}, pcDetailRight: {}},
                    monitorData: window.pageData.result.monitorInfo
                }
            },
            mounted: function () {
                this.navigationListAjax(), this.getAqcAdvertisement(), Object(p.d)("BAIDUID") || this.$http.get("/didiwei1212.txt")
            },
            methods: {
                changeSubTitleId: function (t) {
                    this.typeId = t
                }, handleDataReport: function () {
                    this.$refs.dataReport.show = !0
                }, handleLogin: function () {
                    this.$refs.baseHeader.$children.forEach((function (t) {
                        t.$refs.login && t.$refs.login.handleLogin()
                    }))
                }, navigationListAjax: function () {
                    var t = this, e = {pid: this.pid};
                    this.$http.get("/compdata/navigationListAjax", {params: e}).then((function (e) {
                        if (0 === e.status) {
                            t.newTabs = e.data;
                            var n = [], i = Object(p.e)(), r = i.tab, a = i.subtab, o = i.typeId;
                            t.newTabs.forEach((function (t) {
                                n.push(t.id)
                            })), t.activeTabId = n.includes(r) ? r : "basic";
                            var s = t.activeTabId;
                            o && (t.typeId = o), t.activeSubTabId = a, s = s + "-" + a, t.scrollHandler(s)
                        }
                    }))
                }, getTabId: function () {
                    var t = [], e = window.pageData.result.newTabs, n = Object(p.e)().tab;
                    return e.forEach((function (e) {
                        t.push(e.id)
                    })), t.includes(n) ? n : "basic"
                }, onClickNavTab: function (t, e) {
                    e ? (this.activeTabId = t.parentId, this.activeSubTabId = t.id, this.scrollHandler(t, "object")) : (this.activeTabId = t.id, this.activeSubTabId = "", this.typeId = "")
                }, scrollHandler: function (t) {
                    var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    if (!(i >= 6)) {
                        var r = "object" === n ? "#" + t.parentId + "-" + t.id : "#" + t;
                        try {
                            Object(p.j)(r, 135)
                        } catch (r) {
                            setTimeout((function () {
                                e.scrollHandler(t, n, i++)
                            }), 500)
                        }
                    }
                }, getAqcAdvertisement: function () {
                    var t = this;
                    this.$http.get("/m/getPicturePlaceAjax").then((function (e) {
                        t.aqcAdvertisement = e.data
                    }))
                }
            }
        }, Lu = (n("XE1I"), Object(x.a)(Iu, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("c-base", {
                ref: "baseHeader",
                attrs: {page: "detail", "search-reset": t.searchReset, "search-tab-arr": [0, 2, 9]}
            }, [n("div", {staticClass: "content"}, [n("div", {staticClass: "blank"}), t.monitorData ? n("monitor-dynamic", {attrs: {"monitor-data": t.monitorData}}) : t._e(), n("div", {staticClass: "detail-header-container"}, [t.newTabs && t.newTabs.length ? n("header-panel", {
                attrs: {"new-tabs": t.newTabs},
                on: {handleDataReport: t.handleDataReport}
            }) : t._e(), n("div", {staticClass: "detail-header-skeleton"})], 1), n("data-report", {
                ref: "dataReport",
                on: {handleLogin: t.handleLogin}
            }), n("risk-dynamic-bar", {attrs: {isSimple: !0}}), n("right-pane", {
                attrs: {
                    "pc-detail-right": t.aqcAdvertisement.pcDetailRight,
                    templates: t.rightTemplates
                }
            }), t.newTabs && t.newTabs.length ? n("nav-tabs", {
                attrs: {
                    "data-log-an": "datail-tab",
                    "data-log-title": t.activeTabId,
                    "type-id": t.typeId,
                    "new-tabs": t.newTabs
                }, on: {"click-tab": t.onClickNavTab}
            }) : t._e(), n("div", {
                staticClass: "main",
                attrs: {id: "detail-main"}
            }, [n("keep-alive", [t.newTabs && t.newTabs.length && "basic" === t.activeTabId ? n("basic-tab", {attrs: {"new-tabs": t.newTabs}}) : "stock" === t.activeTabId ? n("stock-tab", {
                attrs: {
                    "new-tabs": t.newTabs,
                    "type-id": t.typeId
                }, on: {changeSubTitleId: t.changeSubTitleId}
            }) : "risk" === t.activeTabId ? n("risk-tab", {attrs: {"new-tabs": t.newTabs}}) : "certRecord" === t.activeTabId ? n("cert-tab", {attrs: {"new-tabs": t.newTabs}}) : "operatingCondition" === t.activeTabId ? n("condition-tab", {attrs: {"new-tabs": t.newTabs}}) : "companyDevelop" === t.activeTabId ? n("company-develop-tab", {attrs: {"new-tabs": t.newTabs}}) : "dataAnalysis" === t.activeTabId ? n("data-tab", {attrs: {"new-tabs": t.newTabs}}) : "koubei" === t.activeTabId ? n("news-tab", {attrs: {"new-tabs": t.newTabs}}) : t._e()], 1), n("aqcAdvertisementBottom", {attrs: {"pc-detail-banner": t.aqcAdvertisement.pcDetailBanner}})], 1)], 1)])
        }), [], !1, null, "2d8d2be6", null).exports), Ru = (n("qz5Q"), n("4LUL"), n("aURk")), Nu = n.n(Ru),
        Bu = (n("CAgN"), new (n("RQzp").a));
    i.default.directive("exposure", {
        inserted: function (t, e) {
            Bu.add(t, e.value)
        }
    }), i.default.use(a.a), i.default.use(Nu.a), i.default.config.productionTip = !1, i.default.prototype.$echarts = s.a, new i.default({
        el: "#app",
        components: {App: Lu},
        template: "<App/>"
    })
}
,
QaDb:function (t, e, n) {
    "use strict";
    var i = n("Kuth"), r = n("RjD/"), a = n("fyDq"), o = {};
    n("Mukb")(o, n("K0xU")("iterator"), (function () {
        return this
    })), t.exports = function (t, e, n) {
        t.prototype = i(o, {next: r(1, n)}), a(t, e + " Iterator")
    }
}
,
QbLZ:function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i, r = n("P2sY"), a = (i = r) && i.__esModule ? i : {default: i};
    e.default = a.default || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
}
,
Qe9p:function (t, e, n) {
    var i = n("1RvN"), r = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    };

    function a(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }

    function o(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function s(t) {
        return t.length && "%" === t.charAt(t.length - 1) ? a(parseFloat(t) / 100 * 255) : a(parseInt(t, 10))
    }

    function l(t) {
        return t.length && "%" === t.charAt(t.length - 1) ? o(parseFloat(t) / 100) : o(parseFloat(t))
    }

    function u(t, e, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function c(t, e, n) {
        return t + (e - t) * n
    }

    function d(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function h(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    var f = new i(20), p = null;

    function g(t, e) {
        p && h(p, e), p = f.put(t, p || e.slice())
    }

    function v(t, e) {
        if (t) {
            e = e || [];
            var n = f.get(t);
            if (n) return h(e, n);
            var i, a = (t += "").replace(/ /g, "").toLowerCase();
            if (a in r) return h(e, r[a]), g(t, e), e;
            if ("#" === a.charAt(0)) return 4 === a.length ? (i = parseInt(a.substr(1), 16)) >= 0 && i <= 4095 ? (d(e, (3840 & i) >> 4 | (3840 & i) >> 8, 240 & i | (240 & i) >> 4, 15 & i | (15 & i) << 4, 1), g(t, e), e) : void d(e, 0, 0, 0, 1) : 7 === a.length ? (i = parseInt(a.substr(1), 16)) >= 0 && i <= 16777215 ? (d(e, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i, 1), g(t, e), e) : void d(e, 0, 0, 0, 1) : void 0;
            var o = a.indexOf("("), u = a.indexOf(")");
            if (-1 !== o && u + 1 === a.length) {
                var c = a.substr(0, o), p = a.substr(o + 1, u - (o + 1)).split(","), v = 1;
                switch (c) {
                    case"rgba":
                        if (4 !== p.length) return void d(e, 0, 0, 0, 1);
                        v = l(p.pop());
                    case"rgb":
                        return 3 !== p.length ? void d(e, 0, 0, 0, 1) : (d(e, s(p[0]), s(p[1]), s(p[2]), v), g(t, e), e);
                    case"hsla":
                        return 4 !== p.length ? void d(e, 0, 0, 0, 1) : (p[3] = l(p[3]), m(p, e), g(t, e), e);
                    case"hsl":
                        return 3 !== p.length ? void d(e, 0, 0, 0, 1) : (m(p, e), g(t, e), e);
                    default:
                        return
                }
            }
            d(e, 0, 0, 0, 1)
        }
    }

    function m(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = l(t[1]), r = l(t[2]),
            o = r <= .5 ? r * (i + 1) : r + i - r * i, s = 2 * r - o;
        return d(e = e || [], a(255 * u(s, o, n + 1 / 3)), a(255 * u(s, o, n)), a(255 * u(s, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function y(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), s = Math.ceil(i), l = e[r], u = e[s], d = i - r;
            return n[0] = a(c(l[0], u[0], d)), n[1] = a(c(l[1], u[1], d)), n[2] = a(c(l[2], u[2], d)), n[3] = o(c(l[3], u[3], d)), n
        }
    }

    var b = y;

    function x(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            var i = t * (e.length - 1), r = Math.floor(i), s = Math.ceil(i), l = v(e[r]), u = v(e[s]), d = i - r,
                h = w([a(c(l[0], u[0], d)), a(c(l[1], u[1], d)), a(c(l[2], u[2], d)), o(c(l[3], u[3], d))], "rgba");
            return n ? {color: h, leftIndex: r, rightIndex: s, value: i} : h
        }
    }

    var _ = x;

    function w(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    e.parse = v, e.lift = function (t, e) {
        var n = v(t);
        if (n) {
            for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return w(n, 4 === n.length ? "rgba" : "rgb")
        }
    }, e.toHex = function (t) {
        var e = v(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }, e.fastLerp = y, e.fastMapToColor = b, e.lerp = x, e.mapToColor = _, e.modifyHSL = function (t, e, n, i) {
        if (t = v(t)) return t = function (t) {
            if (t) {
                var e, n, i = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(i, r, a), s = Math.max(i, r, a),
                    l = s - o, u = (s + o) / 2;
                if (0 === l) e = 0, n = 0; else {
                    n = u < .5 ? l / (s + o) : l / (2 - s - o);
                    var c = ((s - i) / 6 + l / 2) / l, d = ((s - r) / 6 + l / 2) / l, h = ((s - a) / 6 + l / 2) / l;
                    i === s ? e = h - d : r === s ? e = 1 / 3 + c - h : a === s && (e = 2 / 3 + d - c), e < 0 && (e += 1), e > 1 && (e -= 1)
                }
                var f = [360 * e, n, u];
                return null != t[3] && f.push(t[3]), f
            }
        }(t), null != e && (t[0] = function (t) {
            return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
        }(e)), null != n && (t[1] = l(n)), null != i && (t[2] = l(i)), w(m(t), "rgba")
    }, e.modifyAlpha = function (t, e) {
        if ((t = v(t)) && null != e) return t[3] = o(e), w(t, "rgba")
    }, e.stringify = w
}
,
Qh39:function (t, e, n) {
}
,
QkSz:function (t, e, n) {
    "use strict";
    var i = n("Aw0a");
    n.n(i).a
}
,
QnYD:function (t, e, n) {
    var i = n("XKFU"), r = n("LZWt");
    i(i.S, "Error", {
        isError: function (t) {
            return "Error" === r(t)
        }
    })
}
,
QuXc:function (t, e) {
    var n = function (t) {
        this.colorStops = t || []
    };
    n.prototype = {
        constructor: n, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var i = n;
    t.exports = i
}
,
Qvb6:function (t, e, n) {
    var i = n("ProS"), r = n("bYtY"), a = n("ItGF"), o = n("B9fm"), s = n("gvm7"), l = n("7aKB"), u = n("OELB"),
        c = n("IwbS"), d = n("Ez2D"), h = n("+TT/"), f = n("Qxkt"), p = n("F9bG"), g = n("aX7z"), v = n("/y7N"),
        m = n("4NO4").getTooltipRenderMode, y = r.bind, b = r.each, x = u.parsePercent,
        _ = new c.Rect({shape: {x: -1, y: -1, width: 2, height: 2}}), w = i.extendComponentView({
            type: "tooltip", init: function (t, e) {
                if (!a.node) {
                    var n, i = t.getComponent("tooltip"), r = i.get("renderMode");
                    this._renderMode = m(r), "html" === this._renderMode ? (n = new o(e.getDom(), e, {appendToBody: i.get("appendToBody", !0)}), this._newLine = "<br/>") : (n = new s(e), this._newLine = "\n"), this._tooltipContent = n
                }
            }, render: function (t, e, n) {
                if (!a.node) {
                    this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                    var i = this._tooltipContent;
                    i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
                }
            }, _initGlobalListener: function () {
                var t = this._tooltipModel.get("triggerOn");
                p.register("itemTooltip", this._api, y((function (e, n, i) {
                    "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(n, i) : "leave" === e && this._hide(i))
                }), this))
            }, _keepShow: function () {
                var t = this._tooltipModel, e = this._ecModel, n = this._api;
                if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                    var i = this;
                    clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout((function () {
                        !n.isDisposed() && i.manuallyShowTip(t, e, n, {x: i._lastX, y: i._lastY})
                    }))
                }
            }, manuallyShowTip: function (t, e, n, i) {
                if (i.from !== this.uid && !a.node) {
                    var r = S(i, n);
                    this._ticket = "";
                    var o = i.dataByCoordSys;
                    if (i.tooltip && null != i.x && null != i.y) {
                        var s = _;
                        s.position = [i.x, i.y], s.update(), s.tooltip = i.tooltip, this._tryShow({
                            offsetX: i.x,
                            offsetY: i.y,
                            target: s
                        }, r)
                    } else if (o) this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        dataByCoordSys: i.dataByCoordSys,
                        tooltipOption: i.tooltipOption
                    }, r); else if (null != i.seriesIndex) {
                        if (this._manuallyAxisShowTip(t, e, n, i)) return;
                        var l = d(i, e), u = l.point[0], c = l.point[1];
                        null != u && null != c && this._tryShow({
                            offsetX: u,
                            offsetY: c,
                            position: i.position,
                            target: l.el
                        }, r)
                    } else null != i.x && null != i.y && (n.dispatchAction({
                        type: "updateAxisPointer",
                        x: i.x,
                        y: i.y
                    }), this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        target: n.getZr().findHover(i.x, i.y).target
                    }, r))
                }
            }, manuallyHideTip: function (t, e, n, i) {
                var r = this._tooltipContent;
                !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(S(i, n))
            }, _manuallyAxisShowTip: function (t, e, n, i) {
                var r = i.seriesIndex, a = i.dataIndex, o = e.getComponent("axisPointer").coordSysAxesInfo;
                if (null != r && null != a && null != o) {
                    var s = e.getSeriesByIndex(r);
                    if (s) if ("axis" === (t = C([s.getData().getItemModel(a), s, (s.coordinateSystem || {}).model, t])).get("trigger")) return n.dispatchAction({
                        type: "updateAxisPointer",
                        seriesIndex: r,
                        dataIndex: a,
                        position: i.position
                    }), !0
                }
            }, _tryShow: function (t, e) {
                var n = t.target;
                if (this._tooltipModel) {
                    this._lastX = t.offsetX, this._lastY = t.offsetY;
                    var i = t.dataByCoordSys;
                    i && i.length ? this._showAxisTooltip(i, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
                }
            }, _showOrMove: function (t, e) {
                var n = t.get("showDelay");
                e = r.bind(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
            }, _showAxisTooltip: function (t, e) {
                var n = this._ecModel, i = this._tooltipModel, a = [e.offsetX, e.offsetY], o = [], s = [],
                    u = C([e.tooltipOption, i]), c = this._renderMode, d = this._newLine, h = {};
                b(t, (function (t) {
                    b(t.dataByAxis, (function (t) {
                        var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), i = t.value, a = [];
                        if (e && null != i) {
                            var u = v.getValueLabel(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                            r.each(t.seriesDataIndices, (function (o) {
                                var l = n.getSeriesByIndex(o.seriesIndex), d = o.dataIndexInside,
                                    f = l && l.getDataParams(d);
                                if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = g.getAxisRawValue(e.axis, i), f.axisValueLabel = u, f) {
                                    s.push(f);
                                    var p, v = l.formatTooltip(d, !0, null, c);
                                    if (r.isObject(v)) {
                                        p = v.html;
                                        var m = v.markers;
                                        r.merge(h, m)
                                    } else p = v;
                                    a.push(p)
                                }
                            }));
                            var f = u;
                            "html" !== c ? o.push(a.join(d)) : o.push((f ? l.encodeHTML(f) + d : "") + a.join(d))
                        }
                    }))
                }), this), o.reverse(), o = o.join(this._newLine + this._newLine);
                var f = e.position;
                this._showOrMove(u, (function () {
                    this._updateContentNotChangedOnAxis(t) ? this._updatePosition(u, f, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(u, o, s, Math.random(), a[0], a[1], f, void 0, h)
                }))
            }, _showSeriesItemTooltip: function (t, e, n) {
                var i = this._ecModel, a = e.seriesIndex, o = i.getSeriesByIndex(a), s = e.dataModel || o, l = e.dataIndex,
                    u = e.dataType, c = s.getData(u),
                    d = C([c.getItemModel(l), s, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
                    h = d.get("trigger");
                if (null == h || "item" === h) {
                    var f, p, g = s.getDataParams(l, u), v = s.formatTooltip(l, !1, u, this._renderMode);
                    r.isObject(v) ? (f = v.html, p = v.markers) : (f = v, p = null);
                    var m = "item_" + s.name + "_" + l;
                    this._showOrMove(d, (function () {
                        this._showTooltipContent(d, f, g, m, t.offsetX, t.offsetY, t.position, t.target, p)
                    })), n({
                        type: "showTip",
                        dataIndexInside: l,
                        dataIndex: c.getRawIndex(l),
                        seriesIndex: a,
                        from: this.uid
                    })
                }
            }, _showComponentItemTooltip: function (t, e, n) {
                var i = e.tooltip;
                if ("string" == typeof i) {
                    i = {content: i, formatter: i}
                }
                var r = new f(i, this._tooltipModel, this._ecModel), a = r.get("content"), o = Math.random();
                this._showOrMove(r, (function () {
                    this._showTooltipContent(r, a, r.get("formatterParams") || {}, o, t.offsetX, t.offsetY, t.position, e)
                })), n({type: "showTip", from: this.uid})
            }, _showTooltipContent: function (t, e, n, i, r, a, o, s, u) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var c = this._tooltipContent, d = t.get("formatter");
                    o = o || t.get("position");
                    var h = e;
                    if (d && "string" == typeof d) h = l.formatTpl(d, n, !0); else if ("function" == typeof d) {
                        var f = y((function (e, i) {
                            e === this._ticket && (c.setContent(i, u, t), this._updatePosition(t, o, r, a, c, n, s))
                        }), this);
                        this._ticket = i, h = d(n, i, f)
                    }
                    c.setContent(h, u, t), c.show(t), this._updatePosition(t, o, r, a, c, n, s)
                }
            }, _updatePosition: function (t, e, n, i, a, o, s) {
                var l = this._api.getWidth(), u = this._api.getHeight();
                e = e || t.get("position");
                var c = a.getSize(), d = t.get("align"), f = t.get("verticalAlign"), p = s && s.getBoundingRect().clone();
                if (s && p.applyTransform(s.transform), "function" == typeof e && (e = e([n, i], o, a.el, p, {
                    viewSize: [l, u],
                    contentSize: c.slice()
                })), r.isArray(e)) n = x(e[0], l), i = x(e[1], u); else if (r.isObject(e)) {
                    e.width = c[0], e.height = c[1];
                    var g = h.getLayoutRect(e, {width: l, height: u});
                    n = g.x, i = g.y, d = null, f = null
                } else if ("string" == typeof e && s) {
                    var v = function (t, e, n) {
                        var i = n[0], r = n[1], a = 5, o = 0, s = 0, l = e.width, u = e.height;
                        switch (t) {
                            case"inside":
                                o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;
                                break;
                            case"top":
                                o = e.x + l / 2 - i / 2, s = e.y - r - a;
                                break;
                            case"bottom":
                                o = e.x + l / 2 - i / 2, s = e.y + u + a;
                                break;
                            case"left":
                                o = e.x - i - a, s = e.y + u / 2 - r / 2;
                                break;
                            case"right":
                                o = e.x + l + a, s = e.y + u / 2 - r / 2
                        }
                        return [o, s]
                    }(e, p, c);
                    n = v[0], i = v[1]
                } else {
                    v = function (t, e, n, i, r, a, o) {
                        var s = n.getOuterSize(), l = s.width, u = s.height;
                        null != a && (t + l + a > i ? t -= l + a : t += a);
                        null != o && (e + u + o > r ? e -= u + o : e += o);
                        return [t, e]
                    }(n, i, a, l, u, d ? null : 20, f ? null : 20);
                    n = v[0], i = v[1]
                }
                if (d && (n -= k(d) ? c[0] / 2 : "right" === d ? c[0] : 0), f && (i -= k(f) ? c[1] / 2 : "bottom" === f ? c[1] : 0), t.get("confine")) {
                    v = function (t, e, n, i, r) {
                        var a = n.getOuterSize(), o = a.width, s = a.height;
                        return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
                    }(n, i, a, l, u);
                    n = v[0], i = v[1]
                }
                a.moveTo(n, i)
            }, _updateContentNotChangedOnAxis: function (t) {
                var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
                return n && b(e, (function (e, i) {
                    var r = e.dataByAxis || {}, a = (t[i] || {}).dataByAxis || [];
                    (n &= r.length === a.length) && b(r, (function (t, e) {
                        var i = a[e] || {}, r = t.seriesDataIndices || [], o = i.seriesDataIndices || [];
                        (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === o.length) && b(r, (function (t, e) {
                            var i = o[e];
                            n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                        }))
                    }))
                })), this._lastDataByCoordSys = t, !!n
            }, _hide: function (t) {
                this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
            }, dispose: function (t, e) {
                a.node || (this._tooltipContent.dispose(), p.unregister("itemTooltip", e))
            }
        });

    function C(t) {
        for (var e = t.pop(); t.length;) {
            var n = t.pop();
            n && (f.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {formatter: n}), e = new f(n, e, e.ecModel))
        }
        return e
    }

    function S(t, e) {
        return t.dispatchAction || r.bind(e.dispatchAction, e)
    }

    function k(t) {
        return "center" === t || "middle" === t
    }

    t.exports = w
}
,
Qvb8:function (t, e, n) {
    "use strict";
    var i = n("X0dX");
    n.n(i).a
}
,
QvpK:function (t, e, n) {
    var i = n("GpiO");
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n("SZ7m")("42fc6cb8", i, !0, {})
}
,
Qxkt:function (t, e, n) {
    var i = n("bYtY"), r = n("ItGF"), a = n("4NO4").makeInner, o = n("Yl7c"), s = o.enableClassExtend,
        l = o.enableClassCheck, u = n("OQFs"), c = n("m9t5"), d = n("/iHx"), h = n("VR9l"), f = i.mixin, p = a();

    function g(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
    }

    function v(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++) ;
        return null == t && n && (t = n.get(e)), t
    }

    function m(t, e) {
        var n = p(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }

    g.prototype = {
        constructor: g, init: null, mergeOption: function (t) {
            i.merge(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : v(this.option, this.parsePath(t), !e && m(this, t))
        }, getShallow: function (t, e) {
            var n = this.option, i = null == n ? n : n[t], r = !e && m(this, t);
            return null == i && r && (i = r.getShallow(t)), i
        }, getModel: function (t, e) {
            var n;
            return new g(null == t ? this.option : v(this.option, t = this.parsePath(t)), e = e || (n = m(this, t)) && n.getModel(t), this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            return new (0, this.constructor)(i.clone(this.option))
        }, setReadOnly: function (t) {
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            p(this).getParent = t
        }, isAnimationEnabled: function () {
            if (!r.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, s(g), l(g), f(g, u), f(g, c), f(g, d), f(g, h);
    var y = g;
    t.exports = y
}
,
Qyje:function (t, e, n) {
    "use strict";
    var i = n("QSc6"), r = n("nmq7"), a = n("sxOR");
    t.exports = {formats: a, parse: r, stringify: i}
}
,
QzjZ:function (t, e, n) {
    var i = n("S/Yl");
    n("IDmD").register("single", {
        create: function (t, e) {
            var n = [];
            return t.eachComponent("singleAxis", (function (r, a) {
                var o = new i(r, t, e);
                o.name = "single_" + a, o.resize(r, e), r.coordinateSystem = o, n.push(o)
            })), t.eachSeries((function (e) {
                if ("singleAxis" === e.get("coordinateSystem")) {
                    var n = t.queryComponents({
                        mainType: "singleAxis",
                        index: e.get("singleAxisIndex"),
                        id: e.get("singleAxisId")
                    })[0];
                    e.coordinateSystem = n && n.coordinateSystem
                }
            })), n
        }, dimensions: i.prototype.dimensions
    })
}
,
"R+7+"
:

function (t, e, n) {
    var i = n("w6GO"), r = n("mqlF"), a = n("NV0k");
    t.exports = function (t) {
        var e = i(t), n = r.f;
        if (n) for (var o, s = n(t), l = a.f, u = 0; s.length > u;) l.call(t, o = s[u++]) && e.push(o);
        return e
    }
}

,
R1pC:function (t, e, n) {
    t.exports = n.p + "static/1632916097728/img/risk-demo@2x.ace6afd.png"
}
,
R4Rs:function (t, e, n) {
}
,
R4Th:function (t, e, n) {
    var i = n("ProS"), r = n("9wZj"), a = n("yO87"), o = n("Fofx"), s = n("h8O9"), l = i.extendChartView({
        type: "effectScatter", init: function () {
            this._symbolDraw = new r(a)
        }, render: function (t, e, n) {
            var i = t.getData(), r = this._symbolDraw;
            r.updateData(i), this.group.add(r.group)
        }, updateTransform: function (t, e, n) {
            var i = t.getData();
            this.group.dirty();
            var r = s().reset(t);
            r.progress && r.progress({start: 0, end: i.count()}, i), this._symbolDraw.updateLayout(i)
        }, _updateGroupTransform: function (t) {
            var e = t.coordinateSystem;
            e && e.getRoamTransform && (this.group.transform = o.clone(e.getRoamTransform()), this.group.decomposeTransform())
        }, remove: function (t, e) {
            this._symbolDraw && this._symbolDraw.remove(e)
        }, dispose: function () {
        }
    });
    t.exports = l
}
,
R5XZ:function (t, e, n) {
    var i = n("dyZX"), r = n("XKFU"), a = n("ol8x"), o = [].slice, s = /MSIE .\./.test(a), l = function (t) {
        return function (e, n) {
            var i = arguments.length > 2, r = !!i && o.call(arguments, 2);
            return t(i ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, r)
            } : e, n)
        }
    };
    r(r.G + r.B + r.F * s, {setTimeout: l(i.setTimeout), setInterval: l(i.setInterval)})
}
,
RBEP:function (t, e, n) {
    for (var i = n("ProS"), r = n("VaxA"), a = function () {
    }, o = ["treemapZoomToNode", "treemapRender", "treemapMove"], s = 0; s < o.length; s++) i.registerAction({
        type: o[s],
        update: "updateView"
    }, a);
    i.registerAction({type: "treemapRootToNode", update: "updateView"}, (function (t, e) {
        e.eachComponent({mainType: "series", subType: "treemap", query: t}, (function (e, n) {
            var i = r.retrieveTargetInfo(t, ["treemapZoomToNode", "treemapRootToNode"], e);
            if (i) {
                var a = e.getViewRoot();
                a && (t.direction = r.aboveViewRoot(a, i.node) ? "rollUp" : "drillDown"), e.resetViewRoot(i.node)
            }
        }))
    }))
}
,
RDYZ:function (t, e, n) {
    var i = n("dMvE");

    function r(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    r.prototype = {
        constructor: r, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e; else {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                if (!(n < 0)) {
                    n = Math.min(n, 1);
                    var r = this.easing, a = "string" == typeof r ? i[r] : r, o = "function" == typeof a ? a(n) : n;
                    return this.fire("frame", o), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            this[t = "on" + t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var a = r;
    t.exports = a
}
,
RDmV:function (t, e) {
    t.exports = function (t) {
        try {
            return {e: !1, v: t()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}
,
RLh9:function (t, e, n) {
    var i = n("I8a+"), r = n("Q3ne");
    t.exports = function (t) {
        return function () {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return r(this)
        }
    }
}
,
ROFb:function (t, e, n) {
    "use strict";
    (function (e) {
        function i(t) {
            return t && "object" == typeof t && "default" in t ? t.default : t
        }

        var r = i(n("9/5/")), a = i(n("F1pL"));

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function u(t, e, n) {
            return e && l(t.prototype, e), n && l(t, n), t
        }

        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function d(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = [], i = !0, r = !1, a = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0) ;
                } catch (t) {
                    r = !0, a = t
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        var h = "undefined" == typeof window ? null : window, f = h ? h.navigator : null, p = (h && h.document, o("")),
            g = o({}), v = o((function () {
            })), m = "undefined" == typeof HTMLElement ? "undefined" : o(HTMLElement), y = function (t) {
                return t && t.instanceString && x(t.instanceString) ? t.instanceString() : null
            }, b = function (t) {
                return null != t && o(t) == p
            }, x = function (t) {
                return null != t && o(t) === v
            }, _ = function (t) {
                return Array.isArray ? Array.isArray(t) : null != t && t instanceof Array
            }, w = function (t) {
                return null != t && o(t) === g && !_(t) && t.constructor === Object
            }, C = function (t) {
                return null != t && o(t) === o(1) && !isNaN(t)
            }, S = function (t) {
                return "undefined" === m ? void 0 : null != t && t instanceof HTMLElement
            }, k = function (t) {
                return T(t) || M(t)
            }, T = function (t) {
                return "collection" === y(t) && t._private.single
            }, M = function (t) {
                return "collection" === y(t) && !t._private.single
            }, O = function (t) {
                return "core" === y(t)
            }, A = function (t) {
                return "stylesheet" === y(t)
            }, D = function (t) {
                return null == t || !("" !== t && !t.match(/^\s+$/))
            }, E = function (t) {
                return function (t) {
                    return null != t && o(t) === g
                }(t) && x(t.then)
            }, P = function (t, e) {
                e || (e = function () {
                    if (1 === arguments.length) return arguments[0];
                    if (0 === arguments.length) return "undefined";
                    for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
                    return t.join("$")
                });
                var n = function n() {
                    var i, r = this, a = arguments, o = e.apply(r, a), s = n.cache;
                    return (i = s[o]) || (i = s[o] = t.apply(r, a)), i
                };
                return n.cache = {}, n
            }, I = P((function (t) {
                return t.replace(/([A-Z])/g, (function (t) {
                    return "-" + t.toLowerCase()
                }))
            })), L = P((function (t) {
                return t.replace(/(-\w)/g, (function (t) {
                    return t[1].toUpperCase()
                }))
            })), R = P((function (t, e) {
                return t + e[0].toUpperCase() + e.substring(1)
            }), (function (t, e) {
                return t + "$" + e
            })), N = function (t) {
                return D(t) ? t : t.charAt(0).toUpperCase() + t.substring(1)
            }, B = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", j = function (t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }, F = null != Object.assign ? Object.assign.bind(Object) : function (t) {
                for (var e = arguments, n = 1; n < e.length; n++) {
                    var i = e[n];
                    if (null != i) for (var r = Object.keys(i), a = 0; a < r.length; a++) {
                        var o = r[a];
                        t[o] = i[o]
                    }
                }
                return t
            }, z = function (t) {
                return (_(t) ? t : null) || function (t) {
                    return V[t.toLowerCase()]
                }(t) || function (t) {
                    if ((4 === t.length || 7 === t.length) && "#" === t[0]) {
                        var e, n, i, r = 16;
                        return 4 === t.length ? (e = parseInt(t[1] + t[1], r), n = parseInt(t[2] + t[2], r), i = parseInt(t[3] + t[3], r)) : (e = parseInt(t[1] + t[2], r), n = parseInt(t[3] + t[4], r), i = parseInt(t[5] + t[6], r)), [e, n, i]
                    }
                }(t) || function (t) {
                    var e,
                        n = new RegExp("^rgb[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$").exec(t);
                    if (n) {
                        e = [];
                        for (var i = [], r = 1; r <= 3; r++) {
                            var a = n[r];
                            if ("%" === a[a.length - 1] && (i[r] = !0), a = parseFloat(a), i[r] && (a = a / 100 * 255), a < 0 || a > 255) return;
                            e.push(Math.floor(a))
                        }
                        var o = i[1] || i[2] || i[3], s = i[1] && i[2] && i[3];
                        if (o && !s) return;
                        var l = n[4];
                        if (void 0 !== l) {
                            if ((l = parseFloat(l)) < 0 || l > 1) return;
                            e.push(l)
                        }
                    }
                    return e
                }(t) || function (t) {
                    var e, n, i, r, a, o, s, l;

                    function u(t, e, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                    }

                    var c = new RegExp("^hsl[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$").exec(t);
                    if (c) {
                        if ((n = parseInt(c[1])) < 0 ? n = (360 - -1 * n % 360) % 360 : n > 360 && (n %= 360), n /= 360, (i = parseFloat(c[2])) < 0 || i > 100) return;
                        if (i /= 100, (r = parseFloat(c[3])) < 0 || r > 100) return;
                        if (r /= 100, void 0 !== (a = c[4]) && ((a = parseFloat(a)) < 0 || a > 1)) return;
                        if (0 === i) o = s = l = Math.round(255 * r); else {
                            var d = r < .5 ? r * (1 + i) : r + i - r * i, h = 2 * r - d;
                            o = Math.round(255 * u(h, d, n + 1 / 3)), s = Math.round(255 * u(h, d, n)), l = Math.round(255 * u(h, d, n - 1 / 3))
                        }
                        e = [o, s, l, a]
                    }
                    return e
                }(t)
            }, V = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                grey: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, H = function (t) {
                for (var e = t.map, n = t.keys, i = n.length, r = 0; r < i; r++) {
                    var a = n[r];
                    if (w(a)) throw Error("Tried to set map with object key");
                    r < n.length - 1 ? (null == e[a] && (e[a] = {}), e = e[a]) : e[a] = t.value
                }
            }, W = function (t) {
                for (var e = t.map, n = t.keys, i = n.length, r = 0; r < i; r++) {
                    var a = n[r];
                    if (w(a)) throw Error("Tried to get map with object key");
                    if (null == (e = e[a])) return e
                }
                return e
            }, q = h ? h.performance : null, U = q && q.now ? function () {
                return q.now()
            } : function () {
                return Date.now()
            }, Y = function () {
                if (h) {
                    if (h.requestAnimationFrame) return function (t) {
                        h.requestAnimationFrame(t)
                    };
                    if (h.mozRequestAnimationFrame) return function (t) {
                        h.mozRequestAnimationFrame(t)
                    };
                    if (h.webkitRequestAnimationFrame) return function (t) {
                        h.webkitRequestAnimationFrame(t)
                    };
                    if (h.msRequestAnimationFrame) return function (t) {
                        h.msRequestAnimationFrame(t)
                    }
                }
                return function (t) {
                    t && setTimeout((function () {
                        t(U())
                    }), 1e3 / 60)
                }
            }(), G = function (t) {
                return Y(t)
            }, X = U, Z = 9261, K = 65599, $ = 5381, Q = function (t) {
                for (var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z, i = n; !(e = t.next()).done;) i = i * K + e.value | 0;
                return i
            }, J = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z;
                return e * K + t | 0
            }, tt = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $;
                return (e << 5) + e + t | 0
            }, et = function (t) {
                return 2097152 * t[0] + t[1]
            }, nt = function (t, e) {
                return [J(t[0], e[0]), tt(t[1], e[1])]
            }, it = function (t, e) {
                var n = {value: 0, done: !1}, i = 0, r = t.length;
                return Q({
                    next: function () {
                        return i < r ? n.value = t.charCodeAt(i++) : n.done = !0, n
                    }
                }, e)
            }, rt = function () {
                return at(arguments)
            }, at = function (t) {
                for (var e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    e = 0 === n ? it(i) : it(i, e)
                }
                return e
            }, ot = !0, st = null != console.warn, lt = null != console.trace,
            ut = Number.MAX_SAFE_INTEGER || 9007199254740991, ct = function () {
                return !0
            }, dt = function () {
                return !1
            }, ht = function () {
                return 0
            }, ft = function () {
            }, pt = function (t) {
                throw new Error(t)
            }, gt = function (t) {
                if (void 0 === t) return ot;
                ot = !!t
            }, vt = function (t) {
                gt() && (st ? console.warn(t) : (console.log(t), lt && console.trace()))
            }, mt = function (t) {
                return null == t ? t : _(t) ? t.slice() : w(t) ? function (t) {
                    return F({}, t)
                }(t) : t
            }, yt = function (t, e) {
                for (e = t = ""; t++ < 36; e += 51 * t & 52 ? (15 ^ t ? 8 ^ Math.random() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-") ;
                return e
            }, bt = {}, xt = function () {
                return bt
            }, _t = function (t) {
                var e = Object.keys(t);
                return function (n) {
                    for (var i = {}, r = 0; r < e.length; r++) {
                        var a = e[r], o = null == n ? void 0 : n[a];
                        i[a] = void 0 === o ? t[a] : o
                    }
                    return i
                }
            }, wt = function (t, e, n) {
                for (var i = t.length; i >= 0 && (t[i] !== e || (t.splice(i, 1), n)); i--) ;
            }, Ct = function (t) {
                t.splice(0, t.length)
            }, St = function (t, e, n) {
                return n && (e = R(n, e)), t[e]
            }, kt = function (t, e, n, i) {
                n && (e = R(n, e)), t[e] = i
            }, Tt = "undefined" != typeof Map ? Map : function () {
                function t() {
                    s(this, t), this._obj = {}
                }

                return u(t, [{
                    key: "set", value: function (t, e) {
                        return this._obj[t] = e, this
                    }
                }, {
                    key: "delete", value: function (t) {
                        return this._obj[t] = void 0, this
                    }
                }, {
                    key: "clear", value: function () {
                        this._obj = {}
                    }
                }, {
                    key: "has", value: function (t) {
                        return void 0 !== this._obj[t]
                    }
                }, {
                    key: "get", value: function (t) {
                        return this._obj[t]
                    }
                }]), t
            }(), Mt = function () {
                function t(e) {
                    if (s(this, t), this._obj = Object.create(null), this.size = 0, null != e) {
                        var n;
                        n = null != e.instanceString && e.instanceString() === this.instanceString() ? e.toArray() : e;
                        for (var i = 0; i < n.length; i++) this.add(n[i])
                    }
                }

                return u(t, [{
                    key: "instanceString", value: function () {
                        return "set"
                    }
                }, {
                    key: "add", value: function (t) {
                        var e = this._obj;
                        1 !== e[t] && (e[t] = 1, this.size++)
                    }
                }, {
                    key: "delete", value: function (t) {
                        var e = this._obj;
                        1 === e[t] && (e[t] = 0, this.size--)
                    }
                }, {
                    key: "clear", value: function () {
                        this._obj = Object.create(null)
                    }
                }, {
                    key: "has", value: function (t) {
                        return 1 === this._obj[t]
                    }
                }, {
                    key: "toArray", value: function () {
                        var t = this;
                        return Object.keys(this._obj).filter((function (e) {
                            return t.has(e)
                        }))
                    }
                }, {
                    key: "forEach", value: function (t, e) {
                        return this.toArray().forEach(t, e)
                    }
                }]), t
            }(), Ot = "undefined" !== ("undefined" == typeof Set ? "undefined" : o(Set)) ? Set : Mt,
            At = function (t, e, n) {
                if (n = !(void 0 !== n && !n), void 0 !== t && void 0 !== e && O(t)) {
                    var i = e.group;
                    if (null == i && (i = e.data && null != e.data.source && null != e.data.target ? "edges" : "nodes"), "nodes" === i || "edges" === i) {
                        this.length = 1, this[0] = this;
                        var r = this._private = {
                            cy: t,
                            single: !0,
                            data: e.data || {},
                            position: e.position || {x: 0, y: 0},
                            autoWidth: void 0,
                            autoHeight: void 0,
                            autoPadding: void 0,
                            compoundBoundsClean: !1,
                            listeners: [],
                            group: i,
                            style: {},
                            rstyle: {},
                            styleCxts: [],
                            styleKeys: {},
                            removed: !0,
                            selected: !!e.selected,
                            selectable: void 0 === e.selectable || !!e.selectable,
                            locked: !!e.locked,
                            grabbed: !1,
                            grabbable: void 0 === e.grabbable || !!e.grabbable,
                            pannable: void 0 === e.pannable ? "edges" === i : !!e.pannable,
                            active: !1,
                            classes: new Ot,
                            animation: {current: [], queue: []},
                            rscratch: {},
                            scratch: e.scratch || {},
                            edges: [],
                            children: [],
                            parent: null,
                            traversalCache: {},
                            backgrounding: !1,
                            bbCache: null,
                            bbCacheShift: {x: 0, y: 0},
                            bodyBounds: null,
                            overlayBounds: null,
                            labelBounds: {all: null, source: null, target: null, main: null},
                            arrowBounds: {source: null, target: null, "mid-source": null, "mid-target": null}
                        };
                        if (null == r.position.x && (r.position.x = 0), null == r.position.y && (r.position.y = 0), e.renderedPosition) {
                            var a = e.renderedPosition, o = t.pan(), s = t.zoom();
                            r.position = {x: (a.x - o.x) / s, y: (a.y - o.y) / s}
                        }
                        var l = [];
                        _(e.classes) ? l = e.classes : b(e.classes) && (l = e.classes.split(/\s+/));
                        for (var u = 0, c = l.length; u < c; u++) {
                            var d = l[u];
                            d && "" !== d && r.classes.add(d)
                        }
                        this.createEmitter();
                        var h = e.style || e.css;
                        h && (vt("Setting a `style` bypass at element creation is deprecated"), this.style(h)), (void 0 === n || n) && this.restore()
                    } else pt("An element must be of type `nodes` or `edges`; you specified `" + i + "`")
                } else pt("An element must have a core reference and parameters set")
            }, Dt = function (t) {
                return t = {bfs: t.bfs || !t.dfs, dfs: t.dfs || !t.bfs}, function (e, n, i) {
                    var r;
                    w(e) && !k(e) && (e = (r = e).roots || r.root, n = r.visit, i = r.directed), i = 2 !== arguments.length || x(n) ? i : n, n = x(n) ? n : function () {
                    };
                    for (var a, o = this._private.cy, s = e = b(e) ? this.filter(e) : e, l = [], u = [], c = {}, d = {}, h = {}, f = 0, p = this.byGroup(), g = p.nodes, v = p.edges, m = 0; m < s.length; m++) {
                        var y = s[m], _ = y.id();
                        y.isNode() && (l.unshift(y), t.bfs && (h[_] = !0, u.push(y)), d[_] = 0)
                    }
                    var C = function () {
                        var e = t.bfs ? l.shift() : l.pop(), r = e.id();
                        if (t.dfs) {
                            if (h[r]) return "continue";
                            h[r] = !0, u.push(e)
                        }
                        var o, s = d[r], p = c[r], m = null != p ? p.source() : null, y = null != p ? p.target() : null,
                            b = null == p ? void 0 : e.same(m) ? y[0] : m[0];
                        if (!0 === (o = n(e, p, b, f++, s))) return a = e, "break";
                        if (!1 === o) return "break";
                        for (var x = e.connectedEdges().filter((function (t) {
                            return (!i || t.source().same(e)) && v.has(t)
                        })), _ = 0; _ < x.length; _++) {
                            var w = x[_], C = w.connectedNodes().filter((function (t) {
                                return !t.same(e) && g.has(t)
                            })), S = C.id();
                            0 === C.length || h[S] || (C = C[0], l.push(C), t.bfs && (h[S] = !0, u.push(C)), c[S] = w, d[S] = d[r] + 1)
                        }
                    };
                    t:for (; 0 !== l.length;) {
                        var S = C();
                        switch (S) {
                            case"continue":
                                continue;
                            case"break":
                                break t
                        }
                    }
                    for (var T = o.collection(), M = 0; M < u.length; M++) {
                        var O = u[M], A = c[O.id()];
                        null != A && T.merge(A), T.merge(O)
                    }
                    return {path: o.collection(T), found: o.collection(a)}
                }
            }, Et = {breadthFirstSearch: Dt({bfs: !0}), depthFirstSearch: Dt({dfs: !0})};
        Et.bfs = Et.breadthFirstSearch, Et.dfs = Et.depthFirstSearch;
        var Pt = _t({
            root: null, weight: function (t) {
                return 1
            }, directed: !1
        }), It = {
            dijkstra: function (t) {
                if (!w(t)) {
                    var e = arguments;
                    t = {root: e[0], weight: e[1], directed: e[2]}
                }
                var n = Pt(t), i = n.root, r = n.weight, o = n.directed, s = this, l = r,
                    u = b(i) ? this.filter(i)[0] : i[0], c = {}, d = {}, h = {}, f = this.byGroup(), p = f.nodes,
                    g = f.edges;
                g.unmergeBy((function (t) {
                    return t.isLoop()
                }));
                for (var v = function (t) {
                    return c[t.id()]
                }, m = function (t, e) {
                    c[t.id()] = e, y.updateItem(t)
                }, y = new a((function (t, e) {
                    return v(t) - v(e)
                })), x = 0; x < p.length; x++) {
                    var _ = p[x];
                    c[_.id()] = _.same(u) ? 0 : 1 / 0, y.push(_)
                }
                for (var C = function (t, e) {
                    for (var n, i = (o ? t.edgesTo(e) : t.edgesWith(e)).intersect(g), r = 1 / 0, a = 0; a < i.length; a++) {
                        var s = i[a], u = l(s);
                        (u < r || !n) && (r = u, n = s)
                    }
                    return {edge: n, dist: r}
                }; y.size() > 0;) {
                    var S = y.pop(), k = v(S), T = S.id();
                    if (h[T] = k, k !== 1 / 0) for (var M = S.neighborhood().intersect(p), O = 0; O < M.length; O++) {
                        var A = M[O], D = A.id(), E = C(S, A), P = k + E.dist;
                        P < v(A) && (m(A, P), d[D] = {node: S, edge: E.edge})
                    }
                }
                return {
                    distanceTo: function (t) {
                        var e = b(t) ? p.filter(t)[0] : t[0];
                        return h[e.id()]
                    }, pathTo: function (t) {
                        var e = b(t) ? p.filter(t)[0] : t[0], n = [], i = e, r = i.id();
                        if (e.length > 0) for (n.unshift(e); d[r];) {
                            var a = d[r];
                            n.unshift(a.edge), n.unshift(a.node), r = (i = a.node).id()
                        }
                        return s.spawn(n)
                    }
                }
            }
        }, Lt = {
            kruskal: function (t) {
                t = t || function (t) {
                    return 1
                };
                for (var e = this.byGroup(), n = e.nodes, i = e.edges, r = n.length, a = new Array(r), o = n, s = function (t) {
                    for (var e = 0; e < a.length; e++) {
                        if (a[e].has(t)) return e
                    }
                }, l = 0; l < r; l++) a[l] = this.spawn(n[l]);
                for (var u = i.sort((function (e, n) {
                    return t(e) - t(n)
                })), c = 0; c < u.length; c++) {
                    var d = u[c], h = d.source()[0], f = d.target()[0], p = s(h), g = s(f), v = a[p], m = a[g];
                    p !== g && (o.merge(d), v.merge(m), a.splice(g, 1))
                }
                return o
            }
        }, Rt = _t({
            root: null, goal: null, weight: function (t) {
                return 1
            }, heuristic: function (t) {
                return 0
            }, directed: !1
        }), Nt = {
            aStar: function (t) {
                var e = this.cy(), n = Rt(t), i = n.root, r = n.goal, o = n.heuristic, s = n.directed, l = n.weight;
                i = e.collection(i)[0], r = e.collection(r)[0];
                var u, c, d = i.id(), h = r.id(), f = {}, p = {}, g = {}, v = new a((function (t, e) {
                    return p[t.id()] - p[e.id()]
                })), m = new Ot, y = {}, b = {}, x = function (t, e) {
                    v.push(t), m.add(e)
                };
                x(i, d), f[d] = 0, p[d] = o(i);
                for (var _, w = 0; v.size() > 0;) {
                    if (u = v.pop(), c = u.id(), m.delete(c), w++, c === h) {
                        for (var C = [], S = r, k = h, T = b[k]; C.unshift(S), null != T && C.unshift(T), null != (S = y[k]);) T = b[k = S.id()];
                        return {found: !0, distance: f[c], path: this.spawn(C), steps: w}
                    }
                    g[c] = !0;
                    for (var M = u._private.edges, O = 0; O < M.length; O++) {
                        var A = M[O];
                        if (this.hasElementWithId(A.id()) && (!s || A.data("source") === c)) {
                            var D = A.source(), E = A.target(), P = D.id() !== c ? D : E, I = P.id();
                            if (this.hasElementWithId(I) && !g[I]) {
                                var L = f[c] + l(A);
                                _ = I, m.has(_) ? L < f[I] && (f[I] = L, p[I] = L + o(P), y[I] = u) : (f[I] = L, p[I] = L + o(P), x(P, I), y[I] = u, b[I] = A)
                            }
                        }
                    }
                }
                return {found: !1, distance: void 0, path: void 0, steps: w}
            }
        }, Bt = _t({
            weight: function (t) {
                return 1
            }, directed: !1
        }), jt = {
            floydWarshall: function (t) {
                for (var e = this.cy(), n = Bt(t), i = n.weight, r = n.directed, a = i, o = this.byGroup(), s = o.nodes, l = o.edges, u = s.length, c = u * u, d = function (t) {
                    return s.indexOf(t)
                }, h = function (t) {
                    return s[t]
                }, f = new Array(c), p = 0; p < c; p++) {
                    var g = p % u, v = (p - g) / u;
                    f[p] = v === g ? 0 : 1 / 0
                }
                for (var m = new Array(c), y = new Array(c), x = 0; x < l.length; x++) {
                    var _ = l[x], w = _.source()[0], C = _.target()[0];
                    if (w !== C) {
                        var S = d(w), k = d(C), T = S * u + k, M = a(_);
                        if (f[T] > M && (f[T] = M, m[T] = k, y[T] = _), !r) {
                            var O = k * u + S;
                            !r && f[O] > M && (f[O] = M, m[O] = S, y[O] = _)
                        }
                    }
                }
                for (var A = 0; A < u; A++) for (var D = 0; D < u; D++) for (var E = D * u + A, P = 0; P < u; P++) {
                    var I = D * u + P, L = A * u + P;
                    f[E] + f[L] < f[I] && (f[I] = f[E] + f[L], m[I] = m[E])
                }
                var R = function (t) {
                    return d(function (t) {
                        return (b(t) ? e.filter(t) : t)[0]
                    }(t))
                };
                return {
                    distance: function (t, e) {
                        var n = R(t), i = R(e);
                        return f[n * u + i]
                    }, path: function (t, n) {
                        var i = R(t), r = R(n), a = h(i);
                        if (i === r) return a.collection();
                        if (null == m[i * u + r]) return e.collection();
                        var o, s = e.collection(), l = i;
                        for (s.merge(a); i !== r;) l = i, i = m[i * u + r], o = y[l * u + i], s.merge(o), s.merge(h(i));
                        return s
                    }
                }
            }
        }, Ft = _t({
            weight: function (t) {
                return 1
            }, directed: !1, root: null
        }), zt = {
            bellmanFord: function (t) {
                var e = this, n = Ft(t), i = n.weight, r = n.directed, a = n.root, o = i, s = this, l = this.cy(),
                    u = this.byGroup(), c = u.edges, d = u.nodes, h = d.length, f = new Tt, p = !1;
                a = l.collection(a)[0], c.unmergeBy((function (t) {
                    return t.isLoop()
                }));
                for (var g = c.length, v = function (t) {
                    var e = f.get(t.id());
                    return e || (e = {}, f.set(t.id(), e)), e
                }, m = function (t) {
                    return (b(t) ? l.$(t) : t)[0]
                }, y = 0; y < h; y++) {
                    var x = d[y], _ = v(x);
                    x.same(a) ? _.dist = 0 : _.dist = 1 / 0, _.pred = null, _.edge = null
                }
                for (var w = !1, C = function (t, e, n, i, r, a) {
                    var o = i.dist + a;
                    o < r.dist && !n.same(i.edge) && (r.dist = o, r.pred = t, r.edge = n, w = !0)
                }, S = 1; S < h; S++) {
                    w = !1;
                    for (var k = 0; k < g; k++) {
                        var T = c[k], M = T.source(), O = T.target(), A = o(T), D = v(M), E = v(O);
                        C(M, 0, T, D, E, A), r || C(O, 0, T, E, D, A)
                    }
                    if (!w) break
                }
                if (w) for (var P = 0; P < g; P++) {
                    var I = c[P], L = I.source(), R = I.target(), N = o(I), B = v(L).dist, j = v(R).dist;
                    if (B + N < j || !r && j + N < B) {
                        vt("Graph contains a negative weight cycle for Bellman-Ford"), p = !0;
                        break
                    }
                }
                return {
                    distanceTo: function (t) {
                        return v(m(t)).dist
                    }, pathTo: function (t) {
                        for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a, i = m(t), r = [], o = i; ;) {
                            if (null == o) return e.spawn();
                            var l = v(o), u = l.edge, c = l.pred;
                            if (r.unshift(o[0]), o.same(n) && r.length > 0) break;
                            null != u && r.unshift(u), o = c
                        }
                        return s.spawn(r)
                    }, hasNegativeWeightCycle: p, negativeWeightCycles: []
                }
            }
        }, Vt = Math.sqrt(2), Ht = function (t, e, n) {
            0 === n.length && pt("Karger-Stein must be run on a connected (sub)graph");
            for (var i = n[t], r = i[1], a = i[2], o = e[r], s = e[a], l = n, u = l.length - 1; u >= 0; u--) {
                var c = l[u], d = c[1], h = c[2];
                (e[d] === o && e[h] === s || e[d] === s && e[h] === o) && l.splice(u, 1)
            }
            for (var f = 0; f < l.length; f++) {
                var p = l[f];
                p[1] === s ? (l[f] = p.slice(), l[f][1] = o) : p[2] === s && (l[f] = p.slice(), l[f][2] = o)
            }
            for (var g = 0; g < e.length; g++) e[g] === s && (e[g] = o);
            return l
        }, Wt = function (t, e, n, i) {
            for (; n > i;) {
                var r = Math.floor(Math.random() * e.length);
                e = Ht(r, t, e), n--
            }
            return e
        }, qt = {
            kargerStein: function () {
                var t = this, e = this.byGroup(), n = e.nodes, i = e.edges;
                i.unmergeBy((function (t) {
                    return t.isLoop()
                }));
                var r = n.length, a = i.length, o = Math.ceil(Math.pow(Math.log(r) / Math.LN2, 2)),
                    s = Math.floor(r / Vt);
                if (!(r < 2)) {
                    for (var l = [], u = 0; u < a; u++) {
                        var c = i[u];
                        l.push([u, n.indexOf(c.source()), n.indexOf(c.target())])
                    }
                    for (var d = 1 / 0, h = [], f = new Array(r), p = new Array(r), g = new Array(r), v = function (t, e) {
                        for (var n = 0; n < r; n++) e[n] = t[n]
                    }, m = 0; m <= o; m++) {
                        for (var y = 0; y < r; y++) p[y] = y;
                        var b = Wt(p, l.slice(), r, s), x = b.slice();
                        v(p, g);
                        var _ = Wt(p, b, s, 2), w = Wt(g, x, s, 2);
                        _.length <= w.length && _.length < d ? (d = _.length, h = _, v(p, f)) : w.length <= _.length && w.length < d && (d = w.length, h = w, v(g, f))
                    }
                    for (var C = this.spawn(h.map((function (t) {
                        return i[t[0]]
                    }))), S = this.spawn(), k = this.spawn(), T = f[0], M = 0; M < f.length; M++) {
                        var O = f[M], A = n[M];
                        O === T ? S.merge(A) : k.merge(A)
                    }
                    var D = function (e) {
                        var n = t.spawn();
                        return e.forEach((function (e) {
                            n.merge(e), e.connectedEdges().forEach((function (e) {
                                t.contains(e) && !C.contains(e) && n.merge(e)
                            }))
                        })), n
                    }, E = [D(S), D(k)];
                    return {cut: C, components: E, partition1: S, partition2: k}
                }
                pt("At least 2 nodes are required for Karger-Stein algorithm")
            }
        }, Ut = function (t, e, n) {
            return {x: t.x * e + n.x, y: t.y * e + n.y}
        }, Yt = function (t, e, n) {
            return {x: (t.x - n.x) / e, y: (t.y - n.y) / e}
        }, Gt = function (t) {
            return {x: t[0], y: t[1]}
        }, Xt = function (t, e) {
            return Math.atan2(e, t) - Math.PI / 2
        }, Zt = Math.log2 || function (t) {
            return Math.log(t) / Math.log(2)
        }, Kt = function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }, $t = function (t, e) {
            return Math.sqrt(Qt(t, e))
        }, Qt = function (t, e) {
            var n = e.x - t.x, i = e.y - t.y;
            return n * n + i * i
        }, Jt = function (t) {
            for (var e = t.length, n = 0, i = 0; i < e; i++) n += t[i];
            for (var r = 0; r < e; r++) t[r] = t[r] / n;
            return t
        }, te = function (t, e, n, i) {
            return (1 - i) * (1 - i) * t + 2 * (1 - i) * i * e + i * i * n
        }, ee = function (t, e, n, i) {
            return {x: te(t.x, e.x, n.x, i), y: te(t.y, e.y, n.y, i)}
        }, ne = function (t, e, n) {
            return Math.max(t, Math.min(n, e))
        }, ie = function (t) {
            if (null == t) return {x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0, w: 0, h: 0};
            if (null != t.x1 && null != t.y1) {
                if (null != t.x2 && null != t.y2 && t.x2 >= t.x1 && t.y2 >= t.y1) return {
                    x1: t.x1,
                    y1: t.y1,
                    x2: t.x2,
                    y2: t.y2,
                    w: t.x2 - t.x1,
                    h: t.y2 - t.y1
                };
                if (null != t.w && null != t.h && t.w >= 0 && t.h >= 0) return {
                    x1: t.x1,
                    y1: t.y1,
                    x2: t.x1 + t.w,
                    y2: t.y1 + t.h,
                    w: t.w,
                    h: t.h
                }
            }
        }, re = function (t, e, n) {
            t.x1 = Math.min(t.x1, e), t.x2 = Math.max(t.x2, e), t.w = t.x2 - t.x1, t.y1 = Math.min(t.y1, n), t.y2 = Math.max(t.y2, n), t.h = t.y2 - t.y1
        }, ae = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t.x1 -= e, t.x2 += e, t.y1 -= e, t.y2 += e, t.w = t.x2 - t.x1, t.h = t.y2 - t.y1, t
        }, oe = function (t) {
            var e, n, i, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0];
            if (1 === a.length) e = n = i = r = a[0]; else if (2 === a.length) e = i = a[0], r = n = a[1]; else if (4 === a.length) {
                var o = d(a, 4);
                e = o[0], n = o[1], i = o[2], r = o[3]
            }
            return t.x1 -= r, t.x2 += n, t.y1 -= e, t.y2 += i, t.w = t.x2 - t.x1, t.h = t.y2 - t.y1, t
        }, se = function (t, e) {
            t.x1 = e.x1, t.y1 = e.y1, t.x2 = e.x2, t.y2 = e.y2, t.w = t.x2 - t.x1, t.h = t.y2 - t.y1
        }, le = function (t, e) {
            t.x1 += e.x, t.x2 += e.x, t.y1 += e.y, t.y2 += e.y
        }, ue = function (t, e) {
            return !(t.x1 > e.x2) && (!(e.x1 > t.x2) && (!(t.x2 < e.x1) && (!(e.x2 < t.x1) && (!(t.y2 < e.y1) && (!(e.y2 < t.y1) && (!(t.y1 > e.y2) && !(e.y1 > t.y2)))))))
        }, ce = function (t, e, n) {
            return t.x1 <= e && e <= t.x2 && t.y1 <= n && n <= t.y2
        }, de = function (t, e) {
            return ce(t, e.x1, e.y1) && ce(t, e.x2, e.y2)
        }, he = function (t, e, n, i, r, a, o) {
            var s, l = De(r, a), u = r / 2, c = a / 2, d = i - c - o;
            if ((s = Se(t, e, n, i, n - u + l - o, d, n + u - l + o, d, !1)).length > 0) return s;
            var h = n + u + o;
            if ((s = Se(t, e, n, i, h, i - c + l - o, h, i + c - l + o, !1)).length > 0) return s;
            var f = i + c + o;
            if ((s = Se(t, e, n, i, n - u + l - o, f, n + u - l + o, f, !1)).length > 0) return s;
            var p, g = n - u - o;
            if ((s = Se(t, e, n, i, g, i - c + l - o, g, i + c - l + o, !1)).length > 0) return s;
            var v = n - u + l, m = i - c + l;
            if ((p = we(t, e, n, i, v, m, l + o)).length > 0 && p[0] <= v && p[1] <= m) return [p[0], p[1]];
            var y = n + u - l, b = i - c + l;
            if ((p = we(t, e, n, i, y, b, l + o)).length > 0 && p[0] >= y && p[1] <= b) return [p[0], p[1]];
            var x = n + u - l, _ = i + c - l;
            if ((p = we(t, e, n, i, x, _, l + o)).length > 0 && p[0] >= x && p[1] >= _) return [p[0], p[1]];
            var w = n - u + l, C = i + c - l;
            return (p = we(t, e, n, i, w, C, l + o)).length > 0 && p[0] <= w && p[1] >= C ? [p[0], p[1]] : []
        }, fe = function (t, e, n, i, r, a, o) {
            var s = o, l = Math.min(n, r), u = Math.max(n, r), c = Math.min(i, a), d = Math.max(i, a);
            return l - s <= t && t <= u + s && c - s <= e && e <= d + s
        }, pe = function (t, e, n, i, r, a, o, s, l) {
            var u = Math.min(n, o, r) - l, c = Math.max(n, o, r) + l, d = Math.min(i, s, a) - l,
                h = Math.max(i, s, a) + l;
            return !(t < u || t > c || e < d || e > h)
        }, ge = function (t, e, n, i, r, a, o, s) {
            var l = [];
            !function (t, e, n, i, r) {
                var a, o, s, l, u, c, d, h;
                0 === t && (t = 1e-5), s = -27 * (i /= t) + (e /= t) * (9 * (n /= t) - e * e * 2), a = (o = (3 * n - e * e) / 9) * o * o + (s /= 54) * s, r[1] = 0, d = e / 3, a > 0 ? (u = (u = s + Math.sqrt(a)) < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), c = (c = s - Math.sqrt(a)) < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), r[0] = -d + u + c, d += (u + c) / 2, r[4] = r[2] = -d, d = Math.sqrt(3) * (-c + u) / 2, r[3] = d, r[5] = -d) : (r[5] = r[3] = 0, 0 === a ? (h = s < 0 ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3), r[0] = 2 * h - d, r[4] = r[2] = -(h + d)) : (l = (o = -o) * o * o, l = Math.acos(s / Math.sqrt(l)), h = 2 * Math.sqrt(o), r[0] = -d + h * Math.cos(l / 3), r[2] = -d + h * Math.cos((l + 2 * Math.PI) / 3), r[4] = -d + h * Math.cos((l + 4 * Math.PI) / 3)))
            }(1 * n * n - 4 * n * r + 2 * n * o + 4 * r * r - 4 * r * o + o * o + i * i - 4 * i * a + 2 * i * s + 4 * a * a - 4 * a * s + s * s, 9 * n * r - 3 * n * n - 3 * n * o - 6 * r * r + 3 * r * o + 9 * i * a - 3 * i * i - 3 * i * s - 6 * a * a + 3 * a * s, 3 * n * n - 6 * n * r + n * o - n * t + 2 * r * r + 2 * r * t - o * t + 3 * i * i - 6 * i * a + i * s - i * e + 2 * a * a + 2 * a * e - s * e, 1 * n * r - n * n + n * t - r * t + i * a - i * i + i * e - a * e, l);
            for (var u = [], c = 0; c < 6; c += 2) Math.abs(l[c + 1]) < 1e-7 && l[c] >= 0 && l[c] <= 1 && u.push(l[c]);
            u.push(1), u.push(0);
            for (var d, h, f, p = -1, g = 0; g < u.length; g++) d = Math.pow(1 - u[g], 2) * n + 2 * (1 - u[g]) * u[g] * r + u[g] * u[g] * o, h = Math.pow(1 - u[g], 2) * i + 2 * (1 - u[g]) * u[g] * a + u[g] * u[g] * s, f = Math.pow(d - t, 2) + Math.pow(h - e, 2), p >= 0 ? f < p && (p = f) : p = f;
            return p
        }, ve = function (t, e, n, i, r, a) {
            var o = [t - n, e - i], s = [r - n, a - i], l = s[0] * s[0] + s[1] * s[1], u = o[0] * o[0] + o[1] * o[1],
                c = o[0] * s[0] + o[1] * s[1], d = c * c / l;
            return c < 0 ? u : d > l ? (t - r) * (t - r) + (e - a) * (e - a) : u - d
        }, me = function (t, e, n) {
            for (var i, r, a, o, s = 0, l = 0; l < n.length / 2; l++) if (i = n[2 * l], r = n[2 * l + 1], l + 1 < n.length / 2 ? (a = n[2 * (l + 1)], o = n[2 * (l + 1) + 1]) : (a = n[2 * (l + 1 - n.length / 2)], o = n[2 * (l + 1 - n.length / 2) + 1]), i == t && a == t) ; else {
                if (!(i >= t && t >= a || i <= t && t <= a)) continue;
                (t - i) / (a - i) * (o - r) + r > e && s++
            }
            return s % 2 != 0
        }, ye = function (t, e, n, i, r, a, o, s, l) {
            var u, c = new Array(n.length);
            null != s[0] ? (u = Math.atan(s[1] / s[0]), s[0] < 0 ? u += Math.PI / 2 : u = -u - Math.PI / 2) : u = s;
            for (var d, h = Math.cos(-u), f = Math.sin(-u), p = 0; p < c.length / 2; p++) c[2 * p] = a / 2 * (n[2 * p] * h - n[2 * p + 1] * f), c[2 * p + 1] = o / 2 * (n[2 * p + 1] * h + n[2 * p] * f), c[2 * p] += i, c[2 * p + 1] += r;
            if (l > 0) {
                var g = xe(c, -l);
                d = be(g)
            } else d = c;
            return me(t, e, d)
        }, be = function (t) {
            for (var e, n, i, r, a, o, s, l, u = new Array(t.length / 2), c = 0; c < t.length / 4; c++) {
                e = t[4 * c], n = t[4 * c + 1], i = t[4 * c + 2], r = t[4 * c + 3], c < t.length / 4 - 1 ? (a = t[4 * (c + 1)], o = t[4 * (c + 1) + 1], s = t[4 * (c + 1) + 2], l = t[4 * (c + 1) + 3]) : (a = t[0], o = t[1], s = t[2], l = t[3]);
                var d = Se(e, n, i, r, a, o, s, l, !0);
                u[2 * c] = d[0], u[2 * c + 1] = d[1]
            }
            return u
        }, xe = function (t, e) {
            for (var n, i, r, a, o = new Array(2 * t.length), s = 0; s < t.length / 2; s++) {
                n = t[2 * s], i = t[2 * s + 1], s < t.length / 2 - 1 ? (r = t[2 * (s + 1)], a = t[2 * (s + 1) + 1]) : (r = t[0], a = t[1]);
                var l = a - i, u = -(r - n), c = Math.sqrt(l * l + u * u), d = l / c, h = u / c;
                o[4 * s] = n + d * e, o[4 * s + 1] = i + h * e, o[4 * s + 2] = r + d * e, o[4 * s + 3] = a + h * e
            }
            return o
        }, _e = function (t, e, n, i, r, a, o) {
            return t -= r, e -= a, (t /= n / 2 + o) * t + (e /= i / 2 + o) * e <= 1
        }, we = function (t, e, n, i, r, a, o) {
            var s = [n - t, i - e], l = [t - r, e - a], u = s[0] * s[0] + s[1] * s[1],
                c = 2 * (l[0] * s[0] + l[1] * s[1]), d = c * c - 4 * u * (l[0] * l[0] + l[1] * l[1] - o * o);
            if (d < 0) return [];
            var h = (-c + Math.sqrt(d)) / (2 * u), f = (-c - Math.sqrt(d)) / (2 * u), p = Math.min(h, f),
                g = Math.max(h, f), v = [];
            if (p >= 0 && p <= 1 && v.push(p), g >= 0 && g <= 1 && v.push(g), 0 === v.length) return [];
            var m = v[0] * s[0] + t, y = v[0] * s[1] + e;
            return v.length > 1 ? v[0] == v[1] ? [m, y] : [m, y, v[1] * s[0] + t, v[1] * s[1] + e] : [m, y]
        }, Ce = function (t, e, n) {
            return e <= t && t <= n || n <= t && t <= e ? t : t <= e && e <= n || n <= e && e <= t ? e : n
        }, Se = function (t, e, n, i, r, a, o, s, l) {
            var u = t - r, c = n - t, d = o - r, h = e - a, f = i - e, p = s - a, g = d * h - p * u, v = c * h - f * u,
                m = p * c - d * f;
            if (0 !== m) {
                var y = g / m, b = v / m, x = -.001;
                return x <= y && y <= 1.001 && x <= b && b <= 1.001 || l ? [t + y * c, e + y * f] : []
            }
            return 0 === g || 0 === v ? Ce(t, n, o) === o ? [o, s] : Ce(t, n, r) === r ? [r, a] : Ce(r, o, n) === n ? [n, i] : [] : []
        }, ke = function (t, e, n, i, r, a, o, s) {
            var l, u, c, d, h, f, p = [], g = new Array(n.length), v = !0;
            if (null == a && (v = !1), v) {
                for (var m = 0; m < g.length / 2; m++) g[2 * m] = n[2 * m] * a + i, g[2 * m + 1] = n[2 * m + 1] * o + r;
                if (s > 0) {
                    var y = xe(g, -s);
                    u = be(y)
                } else u = g
            } else u = n;
            for (var b = 0; b < u.length / 2; b++) c = u[2 * b], d = u[2 * b + 1], b < u.length / 2 - 1 ? (h = u[2 * (b + 1)], f = u[2 * (b + 1) + 1]) : (h = u[0], f = u[1]), 0 !== (l = Se(t, e, i, r, c, d, h, f)).length && p.push(l[0], l[1]);
            return p
        }, Te = function (t, e, n) {
            var i = [t[0] - e[0], t[1] - e[1]], r = Math.sqrt(i[0] * i[0] + i[1] * i[1]), a = (r - n) / r;
            return a < 0 && (a = 1e-5), [e[0] + a * i[0], e[1] + a * i[1]]
        }, Me = function (t, e) {
            var n = Ae(t, e);
            return n = Oe(n)
        }, Oe = function (t) {
            for (var e, n, i = t.length / 2, r = 1 / 0, a = 1 / 0, o = -1 / 0, s = -1 / 0, l = 0; l < i; l++) e = t[2 * l], n = t[2 * l + 1], r = Math.min(r, e), o = Math.max(o, e), a = Math.min(a, n), s = Math.max(s, n);
            for (var u = 2 / (o - r), c = 2 / (s - a), d = 0; d < i; d++) e = t[2 * d] = t[2 * d] * u, n = t[2 * d + 1] = t[2 * d + 1] * c, r = Math.min(r, e), o = Math.max(o, e), a = Math.min(a, n), s = Math.max(s, n);
            if (a < -1) for (var h = 0; h < i; h++) n = t[2 * h + 1] = t[2 * h + 1] + (-1 - a);
            return t
        }, Ae = function (t, e) {
            var n = 1 / t * 2 * Math.PI, i = t % 2 == 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
            i += e;
            for (var r, a = new Array(2 * t), o = 0; o < t; o++) r = o * n + i, a[2 * o] = Math.cos(r), a[2 * o + 1] = Math.sin(-r);
            return a
        }, De = function (t, e) {
            return Math.min(t / 4, e / 4, 8)
        }, Ee = function (t, e) {
            return Math.min(t / 10, e / 10, 8)
        }, Pe = function (t, e) {
            return {heightOffset: Math.min(15, .05 * e), widthOffset: Math.min(100, .25 * t), ctrlPtOffsetPct: .05}
        }, Ie = _t({
            dampingFactor: .8, precision: 1e-6, iterations: 200, weight: function (t) {
                return 1
            }
        }), Le = {
            pageRank: function (t) {
                for (var e = Ie(t), n = e.dampingFactor, i = e.precision, r = e.iterations, a = e.weight, o = this._private.cy, s = this.byGroup(), l = s.nodes, u = s.edges, c = l.length, d = c * c, h = u.length, f = new Array(d), p = new Array(c), g = (1 - n) / c, v = 0; v < c; v++) {
                    for (var m = 0; m < c; m++) {
                        f[v * c + m] = 0
                    }
                    p[v] = 0
                }
                for (var y = 0; y < h; y++) {
                    var b = u[y], x = b.data("source"), _ = b.data("target");
                    if (x !== _) {
                        var w = l.indexOfId(x), C = l.indexOfId(_), S = a(b);
                        f[C * c + w] += S, p[w] += S
                    }
                }
                for (var k = 1 / c + g, T = 0; T < c; T++) if (0 === p[T]) for (var M = 0; M < c; M++) {
                    f[M * c + T] = k
                } else for (var O = 0; O < c; O++) {
                    var A = O * c + T;
                    f[A] = f[A] / p[T] + g
                }
                for (var D, E = new Array(c), P = new Array(c), I = 0; I < c; I++) E[I] = 1;
                for (var L = 0; L < r; L++) {
                    for (var R = 0; R < c; R++) P[R] = 0;
                    for (var N = 0; N < c; N++) for (var B = 0; B < c; B++) {
                        var j = N * c + B;
                        P[N] += f[j] * E[B]
                    }
                    Jt(P), D = E, E = P, P = D;
                    for (var F = 0, z = 0; z < c; z++) {
                        var V = D[z] - E[z];
                        F += V * V
                    }
                    if (F < i) break
                }
                return {
                    rank: function (t) {
                        return t = o.collection(t)[0], E[l.indexOf(t)]
                    }
                }
            }
        }, Re = _t({
            root: null, weight: function (t) {
                return 1
            }, directed: !1, alpha: 0
        }), Ne = {
            degreeCentralityNormalized: function (t) {
                t = Re(t);
                var e = this.cy(), n = this.nodes(), i = n.length;
                if (t.directed) {
                    for (var r = {}, a = {}, o = 0, s = 0, l = 0; l < i; l++) {
                        var u = n[l], c = u.id();
                        t.root = u;
                        var d = this.degreeCentrality(t);
                        o < d.indegree && (o = d.indegree), s < d.outdegree && (s = d.outdegree), r[c] = d.indegree, a[c] = d.outdegree
                    }
                    return {
                        indegree: function (t) {
                            return 0 == o ? 0 : (b(t) && (t = e.filter(t)), r[t.id()] / o)
                        }, outdegree: function (t) {
                            return 0 === s ? 0 : (b(t) && (t = e.filter(t)), a[t.id()] / s)
                        }
                    }
                }
                for (var h = {}, f = 0, p = 0; p < i; p++) {
                    var g = n[p];
                    t.root = g;
                    var v = this.degreeCentrality(t);
                    f < v.degree && (f = v.degree), h[g.id()] = v.degree
                }
                return {
                    degree: function (t) {
                        return 0 === f ? 0 : (b(t) && (t = e.filter(t)), h[t.id()] / f)
                    }
                }
            }, degreeCentrality: function (t) {
                t = Re(t);
                var e = this.cy(), n = this, i = t, r = i.root, a = i.weight, o = i.directed, s = i.alpha;
                if (r = e.collection(r)[0], o) {
                    for (var l = r.connectedEdges(), u = l.filter((function (t) {
                        return t.target().same(r) && n.has(t)
                    })), c = l.filter((function (t) {
                        return t.source().same(r) && n.has(t)
                    })), d = u.length, h = c.length, f = 0, p = 0, g = 0; g < u.length; g++) f += a(u[g]);
                    for (var v = 0; v < c.length; v++) p += a(c[v]);
                    return {
                        indegree: Math.pow(d, 1 - s) * Math.pow(f, s),
                        outdegree: Math.pow(h, 1 - s) * Math.pow(p, s)
                    }
                }
                for (var m = r.connectedEdges().intersection(n), y = m.length, b = 0, x = 0; x < m.length; x++) b += a(m[x]);
                return {degree: Math.pow(y, 1 - s) * Math.pow(b, s)}
            }
        };
        Ne.dc = Ne.degreeCentrality, Ne.dcn = Ne.degreeCentralityNormalised = Ne.degreeCentralityNormalized;
        var Be = _t({
            harmonic: !0, weight: function () {
                return 1
            }, directed: !1, root: null
        }), je = {
            closenessCentralityNormalized: function (t) {
                for (var e = Be(t), n = e.harmonic, i = e.weight, r = e.directed, a = this.cy(), o = {}, s = 0, l = this.nodes(), u = this.floydWarshall({
                    weight: i,
                    directed: r
                }), c = 0; c < l.length; c++) {
                    for (var d = 0, h = l[c], f = 0; f < l.length; f++) if (c !== f) {
                        var p = u.distance(h, l[f]);
                        d += n ? 1 / p : p
                    }
                    n || (d = 1 / d), s < d && (s = d), o[h.id()] = d
                }
                return {
                    closeness: function (t) {
                        return 0 == s ? 0 : (t = b(t) ? a.filter(t)[0].id() : t.id(), o[t] / s)
                    }
                }
            }, closenessCentrality: function (t) {
                var e = Be(t), n = e.root, i = e.weight, r = e.directed, a = e.harmonic;
                n = this.filter(n)[0];
                for (var o = this.dijkstra({
                    root: n,
                    weight: i,
                    directed: r
                }), s = 0, l = this.nodes(), u = 0; u < l.length; u++) {
                    var c = l[u];
                    if (!c.same(n)) {
                        var d = o.distanceTo(c);
                        s += a ? 1 / d : d
                    }
                }
                return a ? s : 1 / s
            }
        };
        je.cc = je.closenessCentrality, je.ccn = je.closenessCentralityNormalised = je.closenessCentralityNormalized;
        var Fe = _t({weight: null, directed: !1}), ze = {
            betweennessCentrality: function (t) {
                for (var e = Fe(t), n = e.directed, i = e.weight, r = null != i, o = this.cy(), s = this.nodes(), l = {}, u = {}, c = 0, d = function (t, e) {
                    u[t] = e, e > c && (c = e)
                }, h = function (t) {
                    return u[t]
                }, f = 0; f < s.length; f++) {
                    var p = s[f], g = p.id();
                    l[g] = n ? p.outgoers().nodes() : p.openNeighborhood().nodes(), d(g, 0)
                }
                for (var v = function (t) {
                    for (var e = s[t].id(), n = [], u = {}, c = {}, f = {}, p = new a((function (t, e) {
                        return f[t] - f[e]
                    })), g = 0; g < s.length; g++) {
                        var v = s[g].id();
                        u[v] = [], c[v] = 0, f[v] = 1 / 0
                    }
                    for (c[e] = 1, f[e] = 0, p.push(e); !p.empty();) {
                        var m = p.pop();
                        if (n.push(m), r) for (var y = 0; y < l[m].length; y++) {
                            var b = l[m][y], x = o.getElementById(m), _ = void 0;
                            _ = x.edgesTo(b).length > 0 ? x.edgesTo(b)[0] : b.edgesTo(x)[0];
                            var w = i(_);
                            b = b.id(), f[b] > f[m] + w && (f[b] = f[m] + w, p.nodes.indexOf(b) < 0 ? p.push(b) : p.updateItem(b), c[b] = 0, u[b] = []), f[b] == f[m] + w && (c[b] = c[b] + c[m], u[b].push(m))
                        } else for (var C = 0; C < l[m].length; C++) {
                            var S = l[m][C].id();
                            f[S] == 1 / 0 && (p.push(S), f[S] = f[m] + 1), f[S] == f[m] + 1 && (c[S] = c[S] + c[m], u[S].push(m))
                        }
                    }
                    for (var k = {}, T = 0; T < s.length; T++) k[s[T].id()] = 0;
                    for (; n.length > 0;) for (var M = n.pop(), O = 0; O < u[M].length; O++) {
                        var A = u[M][O];
                        k[A] = k[A] + c[A] / c[M] * (1 + k[M]), M != s[t].id() && d(M, h(M) + k[M])
                    }
                }, m = 0; m < s.length; m++) v(m);
                var y = {
                    betweenness: function (t) {
                        var e = o.collection(t).id();
                        return h(e)
                    }, betweennessNormalized: function (t) {
                        if (0 == c) return 0;
                        var e = o.collection(t).id();
                        return h(e) / c
                    }
                };
                return y.betweennessNormalised = y.betweennessNormalized, y
            }
        };
        ze.bc = ze.betweennessCentrality;
        var Ve = _t({
            expandFactor: 2, inflateFactor: 2, multFactor: 1, maxIterations: 20, attributes: [function (t) {
                return 1
            }]
        }), He = function (t, e) {
            for (var n = 0, i = 0; i < e.length; i++) n += e[i](t);
            return n
        }, We = function (t, e) {
            for (var n, i = 0; i < e; i++) {
                n = 0;
                for (var r = 0; r < e; r++) n += t[r * e + i];
                for (var a = 0; a < e; a++) t[a * e + i] = t[a * e + i] / n
            }
        }, qe = function (t, e, n) {
            for (var i = new Array(n * n), r = 0; r < n; r++) {
                for (var a = 0; a < n; a++) i[r * n + a] = 0;
                for (var o = 0; o < n; o++) for (var s = 0; s < n; s++) i[r * n + s] += t[r * n + o] * e[o * n + s]
            }
            return i
        }, Ue = function (t, e, n) {
            for (var i = t.slice(0), r = 1; r < n; r++) t = qe(t, i, e);
            return t
        }, Ye = function (t, e, n) {
            for (var i = new Array(e * e), r = 0; r < e * e; r++) i[r] = Math.pow(t[r], n);
            return We(i, e), i
        }, Ge = function (t, e, n, i) {
            for (var r = 0; r < n; r++) {
                if (Math.round(t[r] * Math.pow(10, i)) / Math.pow(10, i) !== Math.round(e[r] * Math.pow(10, i)) / Math.pow(10, i)) return !1
            }
            return !0
        }, Xe = function (t, e) {
            for (var n = 0; n < t.length; n++) if (!e[n] || t[n].id() !== e[n].id()) return !1;
            return !0
        }, Ze = function (t) {
            for (var e = this.nodes(), n = this.edges(), i = this.cy(), r = function (t) {
                return Ve(t)
            }(t), a = {}, o = 0; o < e.length; o++) a[e[o].id()] = o;
            for (var s, l = e.length, u = l * l, c = new Array(u), d = 0; d < u; d++) c[d] = 0;
            for (var h = 0; h < n.length; h++) {
                var f = n[h], p = a[f.source().id()], g = a[f.target().id()], v = He(f, r.attributes);
                c[p * l + g] += v, c[g * l + p] += v
            }
            !function (t, e, n) {
                for (var i = 0; i < e; i++) t[i * e + i] = n
            }(c, l, r.multFactor), We(c, l);
            for (var m = !0, y = 0; m && y < r.maxIterations;) m = !1, s = Ue(c, l, r.expandFactor), c = Ye(s, l, r.inflateFactor), Ge(c, s, u, 4) || (m = !0), y++;
            var b = function (t, e, n, i) {
                for (var r = [], a = 0; a < e; a++) {
                    for (var o = [], s = 0; s < e; s++) Math.round(1e3 * t[a * e + s]) / 1e3 > 0 && o.push(n[s]);
                    0 !== o.length && r.push(i.collection(o))
                }
                return r
            }(c, l, e, i);
            return b = function (t) {
                for (var e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) e != n && Xe(t[e], t[n]) && t.splice(n, 1);
                return t
            }(b)
        }, Ke = {markovClustering: Ze, mcl: Ze}, $e = function (t) {
            return t
        }, Qe = function (t, e) {
            return Math.abs(e - t)
        }, Je = function (t, e, n) {
            return t + Qe(e, n)
        }, tn = function (t, e, n) {
            return t + Math.pow(n - e, 2)
        }, en = function (t) {
            return Math.sqrt(t)
        }, nn = function (t, e, n) {
            return Math.max(t, Qe(e, n))
        }, rn = function (t, e, n, i, r) {
            for (var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : $e, o = i, s = 0; s < t; s++) o = r(o, e(s), n(s));
            return a(o)
        }, an = {
            euclidean: function (t, e, n) {
                return t >= 2 ? rn(t, e, n, 0, tn, en) : rn(t, e, n, 0, Je)
            }, squaredEuclidean: function (t, e, n) {
                return rn(t, e, n, 0, tn)
            }, manhattan: function (t, e, n) {
                return rn(t, e, n, 0, Je)
            }, max: function (t, e, n) {
                return rn(t, e, n, -1 / 0, nn)
            }
        };

        function on(t, e, n, i, r, a) {
            var o;
            return o = x(t) ? t : an[t] || an.euclidean, 0 === e && x(t) ? o(r, a) : o(e, n, i, r, a)
        }

        an["squared-euclidean"] = an.squaredEuclidean, an.squaredeuclidean = an.squaredEuclidean;
        var sn = _t({
            k: 2,
            m: 2,
            sensitivityThreshold: 1e-4,
            distance: "euclidean",
            maxIterations: 10,
            attributes: [],
            testMode: !1,
            testCentroids: null
        }), ln = function (t) {
            return sn(t)
        }, un = function (t, e, n, i, r) {
            var a = "kMedoids" !== r ? function (t) {
                return n[t]
            } : function (t) {
                return i[t](n)
            }, o = n, s = e;
            return on(t, i.length, a, (function (t) {
                return i[t](e)
            }), o, s)
        }, cn = function (t, e, n) {
            for (var i = n.length, r = new Array(i), a = new Array(i), o = new Array(e), s = null, l = 0; l < i; l++) r[l] = t.min(n[l]).value, a[l] = t.max(n[l]).value;
            for (var u = 0; u < e; u++) {
                s = [];
                for (var c = 0; c < i; c++) s[c] = Math.random() * (a[c] - r[c]) + r[c];
                o[u] = s
            }
            return o
        }, dn = function (t, e, n, i, r) {
            for (var a = 1 / 0, o = 0, s = 0; s < e.length; s++) {
                var l = un(n, t, e[s], i, r);
                l < a && (a = l, o = s)
            }
            return o
        }, hn = function (t, e, n) {
            for (var i = [], r = null, a = 0; a < e.length; a++) n[(r = e[a]).id()] === t && i.push(r);
            return i
        }, fn = function (t, e, n) {
            for (var i = 0; i < t.length; i++) for (var r = 0; r < t[i].length; r++) {
                if (Math.abs(t[i][r] - e[i][r]) > n) return !1
            }
            return !0
        }, pn = function (t, e, n) {
            for (var i = 0; i < n; i++) if (t === e[i]) return !0;
            return !1
        }, gn = function (t, e) {
            var n = new Array(e);
            if (t.length < 50) for (var i = 0; i < e; i++) {
                for (var r = t[Math.floor(Math.random() * t.length)]; pn(r, n, i);) r = t[Math.floor(Math.random() * t.length)];
                n[i] = r
            } else for (var a = 0; a < e; a++) n[a] = t[Math.floor(Math.random() * t.length)];
            return n
        }, vn = function (t, e, n) {
            for (var i = 0, r = 0; r < e.length; r++) i += un("manhattan", e[r], t, n, "kMedoids");
            return i
        }, mn = function (t, e, n, i, r) {
            for (var a, o, s = 0; s < e.length; s++) for (var l = 0; l < t.length; l++) i[s][l] = Math.pow(n[s][l], r.m);
            for (var u = 0; u < t.length; u++) for (var c = 0; c < r.attributes.length; c++) {
                a = 0, o = 0;
                for (var d = 0; d < e.length; d++) a += i[d][u] * r.attributes[c](e[d]), o += i[d][u];
                t[u][c] = a / o
            }
        }, yn = function (t, e, n, i, r) {
            for (var a = 0; a < t.length; a++) e[a] = t[a].slice();
            for (var o, s, l, u = 2 / (r.m - 1), c = 0; c < n.length; c++) for (var d = 0; d < i.length; d++) {
                o = 0;
                for (var h = 0; h < n.length; h++) s = un(r.distance, i[d], n[c], r.attributes, "cmeans"), l = un(r.distance, i[d], n[h], r.attributes, "cmeans"), o += Math.pow(s / l, u);
                t[d][c] = 1 / o
            }
        }, bn = function (t) {
            var e, n, i, r, a = this.cy(), o = this.nodes(), s = ln(t);
            i = new Array(o.length);
            for (var l = 0; l < o.length; l++) i[l] = new Array(s.k);
            n = new Array(o.length);
            for (var u = 0; u < o.length; u++) n[u] = new Array(s.k);
            for (var c = 0; c < o.length; c++) {
                for (var d = 0, h = 0; h < s.k; h++) n[c][h] = Math.random(), d += n[c][h];
                for (var f = 0; f < s.k; f++) n[c][f] = n[c][f] / d
            }
            e = new Array(s.k);
            for (var p = 0; p < s.k; p++) e[p] = new Array(s.attributes.length);
            r = new Array(o.length);
            for (var g = 0; g < o.length; g++) r[g] = new Array(s.k);
            for (var v = !0, m = 0; v && m < s.maxIterations;) v = !1, mn(e, o, n, r, s), yn(n, i, e, o, s), fn(n, i, s.sensitivityThreshold) || (v = !0), m++;
            return {
                clusters: function (t, e, n, i) {
                    for (var r, a, o = new Array(n.k), s = 0; s < o.length; s++) o[s] = [];
                    for (var l = 0; l < e.length; l++) {
                        r = -1 / 0, a = -1;
                        for (var u = 0; u < e[0].length; u++) e[l][u] > r && (r = e[l][u], a = u);
                        o[a].push(t[l])
                    }
                    for (var c = 0; c < o.length; c++) o[c] = i.collection(o[c]);
                    return o
                }(o, n, s, a), degreeOfMembership: n
            }
        }, xn = {
            kMeans: function (t) {
                var e, n = this.cy(), i = this.nodes(), r = null, a = ln(t), s = new Array(a.k), l = {};
                e = a.testMode ? "number" == typeof a.testCentroids ? cn(i, a.k, a.attributes) : "object" === o(a.testCentroids) ? a.testCentroids : cn(i, a.k, a.attributes) : cn(i, a.k, a.attributes);
                for (var u, c, d, h = !0, f = 0; h && f < a.maxIterations;) {
                    for (var p = 0; p < i.length; p++) l[(r = i[p]).id()] = dn(r, e, a.distance, a.attributes, "kMeans");
                    h = !1;
                    for (var g = 0; g < a.k; g++) {
                        var v = hn(g, i, l);
                        if (0 !== v.length) {
                            for (var m = a.attributes.length, y = e[g], b = new Array(m), x = new Array(m), _ = 0; _ < m; _++) {
                                x[_] = 0;
                                for (var w = 0; w < v.length; w++) r = v[w], x[_] += a.attributes[_](r);
                                b[_] = x[_] / v.length, u = b[_], c = y[_], d = a.sensitivityThreshold, Math.abs(c - u) <= d || (h = !0)
                            }
                            e[g] = b, s[g] = n.collection(v)
                        }
                    }
                    f++
                }
                return s
            }, kMedoids: function (t) {
                var e, n, i = this.cy(), r = this.nodes(), a = null, s = ln(t), l = new Array(s.k), u = {},
                    c = new Array(s.k);
                s.testMode ? "number" == typeof s.testCentroids || (e = "object" === o(s.testCentroids) ? s.testCentroids : gn(r, s.k)) : e = gn(r, s.k);
                for (var d = !0, h = 0; d && h < s.maxIterations;) {
                    for (var f = 0; f < r.length; f++) u[(a = r[f]).id()] = dn(a, e, s.distance, s.attributes, "kMedoids");
                    d = !1;
                    for (var p = 0; p < e.length; p++) {
                        var g = hn(p, r, u);
                        if (0 !== g.length) {
                            c[p] = vn(e[p], g, s.attributes);
                            for (var v = 0; v < g.length; v++) (n = vn(g[v], g, s.attributes)) < c[p] && (c[p] = n, e[p] = g[v], d = !0);
                            l[p] = i.collection(g)
                        }
                    }
                    h++
                }
                return l
            }, fuzzyCMeans: bn, fcm: bn
        }, _n = _t({
            distance: "euclidean",
            linkage: "min",
            mode: "threshold",
            threshold: 1 / 0,
            addDendrogram: !1,
            dendrogramDepth: 0,
            attributes: []
        }), wn = {single: "min", complete: "max"}, Cn = function (t, e, n, i, r) {
            for (var a, o = 0, s = 1 / 0, l = r.attributes, u = function (t, e) {
                return on(r.distance, l.length, (function (e) {
                    return l[e](t)
                }), (function (t) {
                    return l[t](e)
                }), t, e)
            }, c = 0; c < t.length; c++) {
                var d = t[c].key, h = n[d][i[d]];
                h < s && (o = d, s = h)
            }
            if ("threshold" === r.mode && s >= r.threshold || "dendrogram" === r.mode && 1 === t.length) return !1;
            var f, p = e[o], g = e[i[o]];
            f = "dendrogram" === r.mode ? {left: p, right: g, key: p.key} : {
                value: p.value.concat(g.value),
                key: p.key
            }, t[p.index] = f, t.splice(g.index, 1), e[p.key] = f;
            for (var v = 0; v < t.length; v++) {
                var m = t[v];
                p.key === m.key ? a = 1 / 0 : "min" === r.linkage ? (a = n[p.key][m.key], n[p.key][m.key] > n[g.key][m.key] && (a = n[g.key][m.key])) : "max" === r.linkage ? (a = n[p.key][m.key], n[p.key][m.key] < n[g.key][m.key] && (a = n[g.key][m.key])) : a = "mean" === r.linkage ? (n[p.key][m.key] * p.size + n[g.key][m.key] * g.size) / (p.size + g.size) : "dendrogram" === r.mode ? u(m.value, p.value) : u(m.value[0], p.value[0]), n[p.key][m.key] = n[m.key][p.key] = a
            }
            for (var y = 0; y < t.length; y++) {
                var b = t[y].key;
                if (i[b] === p.key || i[b] === g.key) {
                    for (var x = b, _ = 0; _ < t.length; _++) {
                        var w = t[_].key;
                        n[b][w] < n[b][x] && (x = w)
                    }
                    i[b] = x
                }
                t[y].index = y
            }
            return p.key = g.key = p.index = g.index = null, !0
        }, Sn = function t(e, n, i) {
            e && (e.value ? n.push(e.value) : (e.left && t(e.left, n), e.right && t(e.right, n)))
        }, kn = function t(e, n) {
            if (!e) return "";
            if (e.left && e.right) {
                var i = t(e.left, n), r = t(e.right, n), a = n.add({group: "nodes", data: {id: i + "," + r}});
                return n.add({group: "edges", data: {source: i, target: a.id()}}), n.add({
                    group: "edges",
                    data: {source: r, target: a.id()}
                }), a.id()
            }
            return e.value ? e.value.id() : void 0
        }, Tn = function t(e, n, i) {
            if (!e) return [];
            var r = [], a = [], o = [];
            return 0 === n ? (e.left && Sn(e.left, r), e.right && Sn(e.right, a), o = r.concat(a), [i.collection(o)]) : 1 === n ? e.value ? [i.collection(e.value)] : (e.left && Sn(e.left, r), e.right && Sn(e.right, a), [i.collection(r), i.collection(a)]) : e.value ? [i.collection(e.value)] : (e.left && (r = t(e.left, n - 1, i)), e.right && (a = t(e.right, n - 1, i)), r.concat(a))
        }, Mn = function (t) {
            for (var e = this.cy(), n = this.nodes(), i = function (t) {
                var e = _n(t), n = wn[e.linkage];
                return null != n && (e.linkage = n), e
            }(t), r = i.attributes, a = function (t, e) {
                return on(i.distance, r.length, (function (e) {
                    return r[e](t)
                }), (function (t) {
                    return r[t](e)
                }), t, e)
            }, o = [], s = [], l = [], u = [], c = 0; c < n.length; c++) {
                var d = {value: "dendrogram" === i.mode ? n[c] : [n[c]], key: c, index: c};
                o[c] = d, u[c] = d, s[c] = [], l[c] = 0
            }
            for (var h = 0; h < o.length; h++) for (var f = 0; f <= h; f++) {
                var p = void 0;
                p = "dendrogram" === i.mode ? h === f ? 1 / 0 : a(o[h].value, o[f].value) : h === f ? 1 / 0 : a(o[h].value[0], o[f].value[0]), s[h][f] = p, s[f][h] = p, p < s[h][l[h]] && (l[h] = f)
            }
            for (var g, v = Cn(o, u, s, l, i); v;) v = Cn(o, u, s, l, i);
            return "dendrogram" === i.mode ? (g = Tn(o[0], i.dendrogramDepth, e), i.addDendrogram && kn(o[0], e)) : (g = new Array(o.length), o.forEach((function (t, n) {
                t.key = t.index = null, g[n] = e.collection(t.value)
            }))), g
        }, On = {hierarchicalClustering: Mn, hca: Mn}, An = _t({
            distance: "euclidean",
            preference: "median",
            damping: .8,
            maxIterations: 1e3,
            minIterations: 100,
            attributes: []
        }), Dn = function (t, e, n, i) {
            var r = function (t, e) {
                return i[e](t)
            };
            return -on(t, i.length, (function (t) {
                return r(e, t)
            }), (function (t) {
                return r(n, t)
            }), e, n)
        }, En = function (t, e) {
            return "median" === e ? function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                    i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? (n < t.length && t.splice(n, t.length - n), e > 0 && t.splice(0, e)) : t = t.slice(e, n);
                for (var a = 0, o = t.length - 1; o >= 0; o--) {
                    var s = t[o];
                    r ? isFinite(s) || (t[o] = -1 / 0, a++) : t.splice(o, 1)
                }
                i && t.sort((function (t, e) {
                    return t - e
                }));
                var l = t.length, u = Math.floor(l / 2);
                return l % 2 != 0 ? t[u + 1 + a] : (t[u - 1 + a] + t[u + a]) / 2
            }(t) : "mean" === e ? function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, i = 0, r = 0, a = e; a < n; a++) {
                    var o = t[a];
                    isFinite(o) && (i += o, r++)
                }
                return i / r
            }(t) : "min" === e ? function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, i = 1 / 0, r = e; r < n; r++) {
                    var a = t[r];
                    isFinite(a) && (i = Math.min(a, i))
                }
                return i
            }(t) : "max" === e ? function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, i = -1 / 0, r = e; r < n; r++) {
                    var a = t[r];
                    isFinite(a) && (i = Math.max(a, i))
                }
                return i
            }(t) : e
        }, Pn = function (t, e, n) {
            for (var i = [], r = 0; r < t; r++) {
                for (var a = -1, o = -1 / 0, s = 0; s < n.length; s++) {
                    var l = n[s];
                    e[r * t + l] > o && (a = l, o = e[r * t + l])
                }
                a > 0 && i.push(a)
            }
            for (var u = 0; u < n.length; u++) i[n[u]] = n[u];
            return i
        }, In = function (t) {
            for (var e, n, i, r, a, o, s = this.cy(), l = this.nodes(), u = function (t) {
                var e = t.damping, n = t.preference;
                .5 <= e && e < 1 || pt("Damping must range on [0.5, 1).  Got: ".concat(e));
                var i = ["median", "mean", "min", "max"];
                return i.some((function (t) {
                    return t === n
                })) || C(n) || pt("Preference must be one of [".concat(i.map((function (t) {
                    return "'".concat(t, "'")
                })).join(", "), "] or a number.  Got: ").concat(n)), An(t)
            }(t), c = {}, d = 0; d < l.length; d++) c[l[d].id()] = d;
            n = (e = l.length) * e, i = new Array(n);
            for (var h = 0; h < n; h++) i[h] = -1 / 0;
            for (var f = 0; f < e; f++) for (var p = 0; p < e; p++) f !== p && (i[f * e + p] = Dn(u.distance, l[f], l[p], u.attributes));
            r = En(i, u.preference);
            for (var g = 0; g < e; g++) i[g * e + g] = r;
            a = new Array(n);
            for (var v = 0; v < n; v++) a[v] = 0;
            o = new Array(n);
            for (var m = 0; m < n; m++) o[m] = 0;
            for (var y = new Array(e), b = new Array(e), x = new Array(e), _ = 0; _ < e; _++) y[_] = 0, b[_] = 0, x[_] = 0;
            for (var w, S = new Array(e * u.minIterations), k = 0; k < S.length; k++) S[k] = 0;
            for (w = 0; w < u.maxIterations; w++) {
                for (var T = 0; T < e; T++) {
                    for (var M = -1 / 0, O = -1 / 0, A = -1, D = 0, E = 0; E < e; E++) y[E] = a[T * e + E], (D = o[T * e + E] + i[T * e + E]) >= M ? (O = M, M = D, A = E) : D > O && (O = D);
                    for (var P = 0; P < e; P++) a[T * e + P] = (1 - u.damping) * (i[T * e + P] - M) + u.damping * y[P];
                    a[T * e + A] = (1 - u.damping) * (i[T * e + A] - O) + u.damping * y[A]
                }
                for (var I = 0; I < e; I++) {
                    for (var L = 0, R = 0; R < e; R++) y[R] = o[R * e + I], b[R] = Math.max(0, a[R * e + I]), L += b[R];
                    L -= b[I], b[I] = a[I * e + I], L += b[I];
                    for (var N = 0; N < e; N++) o[N * e + I] = (1 - u.damping) * Math.min(0, L - b[N]) + u.damping * y[N];
                    o[I * e + I] = (1 - u.damping) * (L - b[I]) + u.damping * y[I]
                }
                for (var B = 0, j = 0; j < e; j++) {
                    var F = o[j * e + j] + a[j * e + j] > 0 ? 1 : 0;
                    S[w % u.minIterations * e + j] = F, B += F
                }
                if (B > 0 && (w >= u.minIterations - 1 || w == u.maxIterations - 1)) {
                    for (var z = 0, V = 0; V < e; V++) {
                        x[V] = 0;
                        for (var H = 0; H < u.minIterations; H++) x[V] += S[H * e + V];
                        0 !== x[V] && x[V] !== u.minIterations || z++
                    }
                    if (z === e) break
                }
            }
            for (var W = function (t, e, n) {
                for (var i = [], r = 0; r < t; r++) e[r * t + r] + n[r * t + r] > 0 && i.push(r);
                return i
            }(e, a, o), q = function (t, e, n) {
                for (var i = Pn(t, e, n), r = 0; r < n.length; r++) {
                    for (var a = [], o = 0; o < i.length; o++) i[o] === n[r] && a.push(o);
                    for (var s = -1, l = -1 / 0, u = 0; u < a.length; u++) {
                        for (var c = 0, d = 0; d < a.length; d++) c += e[a[d] * t + a[u]];
                        c > l && (s = u, l = c)
                    }
                    n[r] = a[s]
                }
                return Pn(t, e, n)
            }(e, i, W), U = {}, Y = 0; Y < W.length; Y++) U[W[Y]] = [];
            for (var G = 0; G < l.length; G++) {
                var X = q[c[l[G].id()]];
                null != X && U[X].push(l[G])
            }
            for (var Z = new Array(W.length), K = 0; K < W.length; K++) Z[K] = s.collection(U[W[K]]);
            return Z
        }, Ln = {affinityPropagation: In, ap: In}, Rn = _t({root: void 0, directed: !1}), Nn = function () {
            var t = this, e = {}, n = 0, i = 0, r = [], a = [], o = {}, s = function s(l, u, c) {
                l === c && (i += 1), e[u] = {id: n, low: n++, cutVertex: !1};
                var d, h, f, p, g = t.getElementById(u).connectedEdges().intersection(t);
                0 === g.size() ? r.push(t.spawn(t.getElementById(u))) : g.forEach((function (n) {
                    d = n.source().id(), h = n.target().id(), (f = d === u ? h : d) !== c && (p = n.id(), o[p] || (o[p] = !0, a.push({
                        x: u,
                        y: f,
                        edge: n
                    })), f in e ? e[u].low = Math.min(e[u].low, e[f].id) : (s(l, f, u), e[u].low = Math.min(e[u].low, e[f].low), e[u].id <= e[f].low && (e[u].cutVertex = !0, function (n, i) {
                        for (var o = a.length - 1, s = [], l = t.spawn(); a[o].x != n || a[o].y != i;) s.push(a.pop().edge), o--;
                        s.push(a.pop().edge), s.forEach((function (n) {
                            var i = n.connectedNodes().intersection(t);
                            l.merge(n), i.forEach((function (n) {
                                var i = n.id(), r = n.connectedEdges().intersection(t);
                                l.merge(n), e[i].cutVertex ? l.merge(r.filter((function (t) {
                                    return t.isLoop()
                                }))) : l.merge(r)
                            }))
                        })), r.push(l)
                    }(u, f))))
                }))
            };
            t.forEach((function (t) {
                if (t.isNode()) {
                    var n = t.id();
                    n in e || (i = 0, s(n, n), e[n].cutVertex = i > 1)
                }
            }));
            var l = Object.keys(e).filter((function (t) {
                return e[t].cutVertex
            })).map((function (e) {
                return t.getElementById(e)
            }));
            return {cut: t.spawn(l), components: r}
        }, Bn = function () {
            var t = this, e = {}, n = 0, i = [], r = [], a = t.spawn(t), o = function o(s) {
                if (r.push(s), e[s] = {
                    index: n,
                    low: n++,
                    explored: !1
                }, t.getElementById(s).connectedEdges().intersection(t).forEach((function (t) {
                    var n = t.target().id();
                    n !== s && (n in e || o(n), e[n].explored || (e[s].low = Math.min(e[s].low, e[n].low)))
                })), e[s].index === e[s].low) {
                    for (var l = t.spawn(); ;) {
                        var u = r.pop();
                        if (l.merge(t.getElementById(u)), e[u].low = e[s].index, e[u].explored = !0, u === s) break
                    }
                    var c = l.edgesWith(l), d = l.merge(c);
                    i.push(d), a = a.difference(d)
                }
            };
            return t.forEach((function (t) {
                if (t.isNode()) {
                    var n = t.id();
                    n in e || o(n)
                }
            })), {cut: a, components: i}
        }, jn = {};
        [Et, It, Lt, Nt, jt, zt, qt, Le, Ne, je, ze, Ke, xn, On, Ln, {
            hierholzer: function (t) {
                if (!w(t)) {
                    var e = arguments;
                    t = {root: e[0], directed: e[1]}
                }
                var n, i, r, a = Rn(t), o = a.root, s = a.directed, l = this, u = !1;
                o && (r = b(o) ? this.filter(o)[0].id() : o[0].id());
                var c = {}, d = {};
                s ? l.forEach((function (t) {
                    var e = t.id();
                    if (t.isNode()) {
                        var r = t.indegree(!0), a = t.outdegree(!0), o = r - a, s = a - r;
                        1 == o ? n ? u = !0 : n = e : 1 == s ? i ? u = !0 : i = e : (s > 1 || o > 1) && (u = !0), c[e] = [], t.outgoers().forEach((function (t) {
                            t.isEdge() && c[e].push(t.id())
                        }))
                    } else d[e] = [void 0, t.target().id()]
                })) : l.forEach((function (t) {
                    var e = t.id();
                    t.isNode() ? (t.degree(!0) % 2 && (n ? i ? u = !0 : i = e : n = e), c[e] = [], t.connectedEdges().forEach((function (t) {
                        return c[e].push(t.id())
                    }))) : d[e] = [t.source().id(), t.target().id()]
                }));
                var h = {found: !1, trail: void 0};
                if (u) return h;
                if (i && n) if (s) {
                    if (r && i != r) return h;
                    r = i
                } else {
                    if (r && i != r && n != r) return h;
                    r || (r = i)
                } else r || (r = l[0].id());
                var f = function (t) {
                    for (var e, n, i, r = t, a = [t]; c[r].length;) e = c[r].shift(), n = d[e][0], r != (i = d[e][1]) ? (c[i] = c[i].filter((function (t) {
                        return t != e
                    })), r = i) : s || r == n || (c[n] = c[n].filter((function (t) {
                        return t != e
                    })), r = n), a.unshift(e), a.unshift(r);
                    return a
                }, p = [], g = [];
                for (g = f(r); 1 != g.length;) 0 == c[g[0]].length ? (p.unshift(l.getElementById(g.shift())), p.unshift(l.getElementById(g.shift()))) : g = f(g.shift()).concat(g);
                for (var v in p.unshift(l.getElementById(g.shift())), c) if (c[v].length) return h;
                return h.found = !0, h.trail = this.spawn(p), h
            }
        }, {
            hopcroftTarjanBiconnected: Nn,
            htbc: Nn,
            htb: Nn,
            hopcroftTarjanBiconnectedComponents: Nn
        }, {
            tarjanStronglyConnected: Bn,
            tsc: Bn,
            tscc: Bn,
            tarjanStronglyConnectedComponents: Bn
        }].forEach((function (t) {
            F(jn, t)
        }));