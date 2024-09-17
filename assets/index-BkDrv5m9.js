function by(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Im =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function $m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Sy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Dm = { exports: {} },
  Du = {},
  Mm = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bl = Symbol.for("react.element"),
  Ty = Symbol.for("react.portal"),
  Oy = Symbol.for("react.fragment"),
  Ay = Symbol.for("react.strict_mode"),
  Py = Symbol.for("react.profiler"),
  Ny = Symbol.for("react.provider"),
  Ly = Symbol.for("react.context"),
  jy = Symbol.for("react.forward_ref"),
  Iy = Symbol.for("react.suspense"),
  $y = Symbol.for("react.memo"),
  Dy = Symbol.for("react.lazy"),
  ip = Symbol.iterator;
function My(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ip && e[ip]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zm = Object.assign,
  Fm = {};
function Zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fm),
    (this.updater = n || Rm);
}
Zo.prototype.isReactComponent = {};
Zo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bm() {}
Bm.prototype = Zo.prototype;
function Ef(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fm),
    (this.updater = n || Rm);
}
var xf = (Ef.prototype = new Bm());
xf.constructor = Ef;
zm(xf, Zo.prototype);
xf.isPureReactComponent = !0;
var op = Array.isArray,
  Um = Object.prototype.hasOwnProperty,
  Cf = { current: null },
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wm(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Um.call(t, r) && !Hm.hasOwnProperty(r) && (i[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    for (var d = Array(c), p = 0; p < c; p++) d[p] = arguments[p + 2];
    i.children = d;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) i[r] === void 0 && (i[r] = c[r]);
  return {
    $$typeof: bl,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Cf.current,
  };
}
function Ry(e, t) {
  return {
    $$typeof: bl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function kf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bl;
}
function zy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sp = /\/+/g;
function Vc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zy("" + e.key)
    : t.toString(36);
}
function Ya(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bl:
          case Ty:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Vc(a, 0) : r),
      op(i)
        ? ((n = ""),
          e != null && (n = e.replace(sp, "$&/") + "/"),
          Ya(i, t, n, "", function (p) {
            return p;
          }))
        : i != null &&
          (kf(i) &&
            (i = Ry(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(sp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), op(e)))
    for (var c = 0; c < e.length; c++) {
      s = e[c];
      var d = r + Vc(s, c);
      a += Ya(s, t, n, d, i);
    }
  else if (((d = My(e)), typeof d == "function"))
    for (e = d.call(e), c = 0; !(s = e.next()).done; )
      (s = s.value), (d = r + Vc(s, c++)), (a += Ya(s, t, n, d, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Aa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ya(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Fy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Tt = { current: null },
  Xa = { transition: null },
  By = {
    ReactCurrentDispatcher: Tt,
    ReactCurrentBatchConfig: Xa,
    ReactCurrentOwner: Cf,
  };
function Vm() {
  throw Error("act(...) is not supported in production builds of React.");
}
ce.Children = {
  map: Aa,
  forEach: function (e, t, n) {
    Aa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Aa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Aa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ce.Component = Zo;
ce.Fragment = Oy;
ce.Profiler = Py;
ce.PureComponent = Ef;
ce.StrictMode = Ay;
ce.Suspense = Iy;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = By;
ce.act = Vm;
ce.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zm({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Cf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (d in t)
      Um.call(t, d) &&
        !Hm.hasOwnProperty(d) &&
        (r[d] = t[d] === void 0 && c !== void 0 ? c[d] : t[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) r.children = n;
  else if (1 < d) {
    c = Array(d);
    for (var p = 0; p < d; p++) c[p] = arguments[p + 2];
    r.children = c;
  }
  return { $$typeof: bl, type: e.type, key: i, ref: s, props: r, _owner: a };
};
ce.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ly,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ny, _context: e }),
    (e.Consumer = e)
  );
};
ce.createElement = Wm;
ce.createFactory = function (e) {
  var t = Wm.bind(null, e);
  return (t.type = e), t;
};
ce.createRef = function () {
  return { current: null };
};
ce.forwardRef = function (e) {
  return { $$typeof: jy, render: e };
};
ce.isValidElement = kf;
ce.lazy = function (e) {
  return { $$typeof: Dy, _payload: { _status: -1, _result: e }, _init: Fy };
};
ce.memo = function (e, t) {
  return { $$typeof: $y, type: e, compare: t === void 0 ? null : t };
};
ce.startTransition = function (e) {
  var t = Xa.transition;
  Xa.transition = {};
  try {
    e();
  } finally {
    Xa.transition = t;
  }
};
ce.unstable_act = Vm;
ce.useCallback = function (e, t) {
  return Tt.current.useCallback(e, t);
};
ce.useContext = function (e) {
  return Tt.current.useContext(e);
};
ce.useDebugValue = function () {};
ce.useDeferredValue = function (e) {
  return Tt.current.useDeferredValue(e);
};
ce.useEffect = function (e, t) {
  return Tt.current.useEffect(e, t);
};
ce.useId = function () {
  return Tt.current.useId();
};
ce.useImperativeHandle = function (e, t, n) {
  return Tt.current.useImperativeHandle(e, t, n);
};
ce.useInsertionEffect = function (e, t) {
  return Tt.current.useInsertionEffect(e, t);
};
ce.useLayoutEffect = function (e, t) {
  return Tt.current.useLayoutEffect(e, t);
};
ce.useMemo = function (e, t) {
  return Tt.current.useMemo(e, t);
};
ce.useReducer = function (e, t, n) {
  return Tt.current.useReducer(e, t, n);
};
ce.useRef = function (e) {
  return Tt.current.useRef(e);
};
ce.useState = function (e) {
  return Tt.current.useState(e);
};
ce.useSyncExternalStore = function (e, t, n) {
  return Tt.current.useSyncExternalStore(e, t, n);
};
ce.useTransition = function () {
  return Tt.current.useTransition();
};
ce.version = "18.3.1";
Mm.exports = ce;
var R = Mm.exports;
const Qm = $m(R),
  Uy = by({ __proto__: null, default: Qm }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hy = R,
  Wy = Symbol.for("react.element"),
  Vy = Symbol.for("react.fragment"),
  Qy = Object.prototype.hasOwnProperty,
  Ky = Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Km(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Qy.call(t, r) && !qy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Wy,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Ky.current,
  };
}
Du.Fragment = Vy;
Du.jsx = Km;
Du.jsxs = Km;
Dm.exports = Du;
var O = Dm.exports,
  qm = { exports: {} },
  Kt = {},
  Ym = { exports: {} },
  Xm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(V, ee) {
    var A = V.length;
    V.push(ee);
    e: for (; 0 < A; ) {
      var pe = (A - 1) >>> 1,
        ge = V[pe];
      if (0 < i(ge, ee)) (V[pe] = ee), (V[A] = ge), (A = pe);
      else break e;
    }
  }
  function n(V) {
    return V.length === 0 ? null : V[0];
  }
  function r(V) {
    if (V.length === 0) return null;
    var ee = V[0],
      A = V.pop();
    if (A !== ee) {
      V[0] = A;
      e: for (var pe = 0, ge = V.length, D = ge >>> 1; pe < D; ) {
        var Ee = 2 * (pe + 1) - 1,
          Ue = V[Ee],
          ve = Ee + 1,
          $e = V[ve];
        if (0 > i(Ue, A))
          ve < ge && 0 > i($e, Ue)
            ? ((V[pe] = $e), (V[ve] = A), (pe = ve))
            : ((V[pe] = Ue), (V[Ee] = A), (pe = Ee));
        else if (ve < ge && 0 > i($e, A)) (V[pe] = $e), (V[ve] = A), (pe = ve);
        else break e;
      }
    }
    return ee;
  }
  function i(V, ee) {
    var A = V.sortIndex - ee.sortIndex;
    return A !== 0 ? A : V.id - ee.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      c = a.now();
    e.unstable_now = function () {
      return a.now() - c;
    };
  }
  var d = [],
    p = [],
    g = 1,
    _ = null,
    E = 3,
    T = !1,
    L = !1,
    P = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(V) {
    for (var ee = n(p); ee !== null; ) {
      if (ee.callback === null) r(p);
      else if (ee.startTime <= V)
        r(p), (ee.sortIndex = ee.expirationTime), t(d, ee);
      else break;
      ee = n(p);
    }
  }
  function S(V) {
    if (((P = !1), y(V), !L))
      if (n(d) !== null) (L = !0), Ie(I);
      else {
        var ee = n(p);
        ee !== null && ze(S, ee.startTime - V);
      }
  }
  function I(V, ee) {
    (L = !1), P && ((P = !1), w(U), (U = -1)), (T = !0);
    var A = E;
    try {
      for (
        y(ee), _ = n(d);
        _ !== null && (!(_.expirationTime > ee) || (V && !fe()));

      ) {
        var pe = _.callback;
        if (typeof pe == "function") {
          (_.callback = null), (E = _.priorityLevel);
          var ge = pe(_.expirationTime <= ee);
          (ee = e.unstable_now()),
            typeof ge == "function" ? (_.callback = ge) : _ === n(d) && r(d),
            y(ee);
        } else r(d);
        _ = n(d);
      }
      if (_ !== null) var D = !0;
      else {
        var Ee = n(p);
        Ee !== null && ze(S, Ee.startTime - ee), (D = !1);
      }
      return D;
    } finally {
      (_ = null), (E = A), (T = !1);
    }
  }
  var z = !1,
    B = null,
    U = -1,
    re = 5,
    Z = -1;
  function fe() {
    return !(e.unstable_now() - Z < re);
  }
  function je() {
    if (B !== null) {
      var V = e.unstable_now();
      Z = V;
      var ee = !0;
      try {
        ee = B(!0, V);
      } finally {
        ee ? ke() : ((z = !1), (B = null));
      }
    } else z = !1;
  }
  var ke;
  if (typeof v == "function")
    ke = function () {
      v(je);
    };
  else if (typeof MessageChannel < "u") {
    var ht = new MessageChannel(),
      pt = ht.port2;
    (ht.port1.onmessage = je),
      (ke = function () {
        pt.postMessage(null);
      });
  } else
    ke = function () {
      j(je, 0);
    };
  function Ie(V) {
    (B = V), z || ((z = !0), ke());
  }
  function ze(V, ee) {
    U = j(function () {
      V(e.unstable_now());
    }, ee);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (V) {
      V.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      L || T || ((L = !0), Ie(I));
    }),
    (e.unstable_forceFrameRate = function (V) {
      0 > V || 125 < V
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (re = 0 < V ? Math.floor(1e3 / V) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return E;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(d);
    }),
    (e.unstable_next = function (V) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = E;
      }
      var A = E;
      E = ee;
      try {
        return V();
      } finally {
        E = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (V, ee) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var A = E;
      E = V;
      try {
        return ee();
      } finally {
        E = A;
      }
    }),
    (e.unstable_scheduleCallback = function (V, ee, A) {
      var pe = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? pe + A : pe))
          : (A = pe),
        V)
      ) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return (
        (ge = A + ge),
        (V = {
          id: g++,
          callback: ee,
          priorityLevel: V,
          startTime: A,
          expirationTime: ge,
          sortIndex: -1,
        }),
        A > pe
          ? ((V.sortIndex = A),
            t(p, V),
            n(d) === null &&
              V === n(p) &&
              (P ? (w(U), (U = -1)) : (P = !0), ze(S, A - pe)))
          : ((V.sortIndex = ge), t(d, V), L || T || ((L = !0), Ie(I))),
        V
      );
    }),
    (e.unstable_shouldYield = fe),
    (e.unstable_wrapCallback = function (V) {
      var ee = E;
      return function () {
        var A = E;
        E = ee;
        try {
          return V.apply(this, arguments);
        } finally {
          E = A;
        }
      };
    });
})(Xm);
Ym.exports = Xm;
var Yy = Ym.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xy = R,
  Ht = Yy;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gm = new Set(),
  sl = {};
function Hi(e, t) {
  Fo(e, t), Fo(e + "Capture", t);
}
function Fo(e, t) {
  for (sl[e] = t, e = 0; e < t.length; e++) Gm.add(t[e]);
}
var hr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _d = Object.prototype.hasOwnProperty,
  Gy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lp = {},
  ap = {};
function Zy(e) {
  return _d.call(ap, e)
    ? !0
    : _d.call(lp, e)
    ? !1
    : Gy.test(e)
    ? (ap[e] = !0)
    : ((lp[e] = !0), !1);
}
function Jy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function e0(e, t, n, r) {
  if (t === null || typeof t > "u" || Jy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ot(e, t, n, r, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new Ot(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  lt[t] = new Ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  lt[e] = new Ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  lt[e] = new Ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new Ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  lt[e] = new Ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  lt[e] = new Ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  lt[e] = new Ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  lt[e] = new Ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bf = /[\-:]([a-z])/g;
function Sf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bf, Sf);
    lt[t] = new Ot(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bf, Sf);
    lt[t] = new Ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bf, Sf);
  lt[t] = new Ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  lt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new Ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  lt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tf(e, t, n, r) {
  var i = lt.hasOwnProperty(t) ? lt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (e0(t, n, i, r) && (n = null),
    r || i === null
      ? Zy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _r = Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pa = Symbol.for("react.element"),
  xo = Symbol.for("react.portal"),
  Co = Symbol.for("react.fragment"),
  Of = Symbol.for("react.strict_mode"),
  yd = Symbol.for("react.profiler"),
  Zm = Symbol.for("react.provider"),
  Jm = Symbol.for("react.context"),
  Af = Symbol.for("react.forward_ref"),
  wd = Symbol.for("react.suspense"),
  Ed = Symbol.for("react.suspense_list"),
  Pf = Symbol.for("react.memo"),
  zr = Symbol.for("react.lazy"),
  eg = Symbol.for("react.offscreen"),
  up = Symbol.iterator;
function $s(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (up && e[up]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Re = Object.assign,
  Qc;
function Ws(e) {
  if (Qc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qc = (t && t[1]) || "";
    }
  return (
    `
` +
    Qc +
    e
  );
}
var Kc = !1;
function qc(e, t) {
  if (!e || Kc) return "";
  Kc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var i = p.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          c = s.length - 1;
        1 <= a && 0 <= c && i[a] !== s[c];

      )
        c--;
      for (; 1 <= a && 0 <= c; a--, c--)
        if (i[a] !== s[c]) {
          if (a !== 1 || c !== 1)
            do
              if ((a--, c--, 0 > c || i[a] !== s[c])) {
                var d =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    d.includes("<anonymous>") &&
                    (d = d.replace("<anonymous>", e.displayName)),
                  d
                );
              }
            while (1 <= a && 0 <= c);
          break;
        }
    }
  } finally {
    (Kc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ws(e) : "";
}
function t0(e) {
  switch (e.tag) {
    case 5:
      return Ws(e.type);
    case 16:
      return Ws("Lazy");
    case 13:
      return Ws("Suspense");
    case 19:
      return Ws("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qc(e.type, !1)), e;
    case 11:
      return (e = qc(e.type.render, !1)), e;
    case 1:
      return (e = qc(e.type, !0)), e;
    default:
      return "";
  }
}
function xd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Co:
      return "Fragment";
    case xo:
      return "Portal";
    case yd:
      return "Profiler";
    case Of:
      return "StrictMode";
    case wd:
      return "Suspense";
    case Ed:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jm:
        return (e.displayName || "Context") + ".Consumer";
      case Zm:
        return (e._context.displayName || "Context") + ".Provider";
      case Af:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pf:
        return (
          (t = e.displayName || null), t !== null ? t : xd(e.type) || "Memo"
        );
      case zr:
        (t = e._payload), (e = e._init);
        try {
          return xd(e(t));
        } catch {}
    }
  return null;
}
function n0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xd(t);
    case 8:
      return t === Of ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ti(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function tg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function r0(e) {
  var t = tg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Na(e) {
  e._valueTracker || (e._valueTracker = r0(e));
}
function ng(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = tg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function uu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cd(e, t) {
  var n = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ti(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rg(e, t) {
  (t = t.checked), t != null && Tf(e, "checked", t, !1);
}
function kd(e, t) {
  rg(e, t);
  var n = ti(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bd(e, t.type, ti(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function dp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bd(e, t, n) {
  (t !== "number" || uu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vs = Array.isArray;
function Io(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ti(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (Vs(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ti(n) };
}
function ig(e, t) {
  var n = ti(t.value),
    r = ti(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function hp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function og(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Td(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? og(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var La,
  sg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        La = La || document.createElement("div"),
          La.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = La.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ll(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  i0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(qs).forEach(function (e) {
  i0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qs[t] = qs[e]);
  });
});
function lg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qs.hasOwnProperty(e) && qs[e])
    ? ("" + t).trim()
    : t + "px";
}
function ag(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = lg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var o0 = Re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Od(e, t) {
  if (t) {
    if (o0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Ad(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pd = null;
function Nf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nd = null,
  $o = null,
  Do = null;
function pp(e) {
  if ((e = Ol(e))) {
    if (typeof Nd != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Bu(t)), Nd(e.stateNode, e.type, t));
  }
}
function ug(e) {
  $o ? (Do ? Do.push(e) : (Do = [e])) : ($o = e);
}
function cg() {
  if ($o) {
    var e = $o,
      t = Do;
    if (((Do = $o = null), pp(e), t)) for (e = 0; e < t.length; e++) pp(t[e]);
  }
}
function dg(e, t) {
  return e(t);
}
function fg() {}
var Yc = !1;
function hg(e, t, n) {
  if (Yc) return e(t, n);
  Yc = !0;
  try {
    return dg(e, t, n);
  } finally {
    (Yc = !1), ($o !== null || Do !== null) && (fg(), cg());
  }
}
function al(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var Ld = !1;
if (hr)
  try {
    var Ds = {};
    Object.defineProperty(Ds, "passive", {
      get: function () {
        Ld = !0;
      },
    }),
      window.addEventListener("test", Ds, Ds),
      window.removeEventListener("test", Ds, Ds);
  } catch {
    Ld = !1;
  }
function s0(e, t, n, r, i, s, a, c, d) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (g) {
    this.onError(g);
  }
}
var Ys = !1,
  cu = null,
  du = !1,
  jd = null,
  l0 = {
    onError: function (e) {
      (Ys = !0), (cu = e);
    },
  };
function a0(e, t, n, r, i, s, a, c, d) {
  (Ys = !1), (cu = null), s0.apply(l0, arguments);
}
function u0(e, t, n, r, i, s, a, c, d) {
  if ((a0.apply(this, arguments), Ys)) {
    if (Ys) {
      var p = cu;
      (Ys = !1), (cu = null);
    } else throw Error(F(198));
    du || ((du = !0), (jd = p));
  }
}
function Wi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mp(e) {
  if (Wi(e) !== e) throw Error(F(188));
}
function c0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wi(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return mp(i), e;
        if (s === r) return mp(i), t;
        s = s.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var a = !1, c = i.child; c; ) {
        if (c === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        if (c === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        c = c.sibling;
      }
      if (!a) {
        for (c = s.child; c; ) {
          if (c === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (c === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!a) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function mg(e) {
  return (e = c0(e)), e !== null ? gg(e) : null;
}
function gg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vg = Ht.unstable_scheduleCallback,
  gp = Ht.unstable_cancelCallback,
  d0 = Ht.unstable_shouldYield,
  f0 = Ht.unstable_requestPaint,
  Ve = Ht.unstable_now,
  h0 = Ht.unstable_getCurrentPriorityLevel,
  Lf = Ht.unstable_ImmediatePriority,
  _g = Ht.unstable_UserBlockingPriority,
  fu = Ht.unstable_NormalPriority,
  p0 = Ht.unstable_LowPriority,
  yg = Ht.unstable_IdlePriority,
  Mu = null,
  Bn = null;
function m0(e) {
  if (Bn && typeof Bn.onCommitFiberRoot == "function")
    try {
      Bn.onCommitFiberRoot(Mu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kn = Math.clz32 ? Math.clz32 : _0,
  g0 = Math.log,
  v0 = Math.LN2;
function _0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((g0(e) / v0) | 0)) | 0;
}
var ja = 64,
  Ia = 4194304;
function Qs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var c = a & ~i;
    c !== 0 ? (r = Qs(c)) : ((s &= a), s !== 0 && (r = Qs(s)));
  } else (a = n & ~i), a !== 0 ? (r = Qs(a)) : s !== 0 && (r = Qs(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function y0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function w0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - kn(s),
      c = 1 << a,
      d = i[a];
    d === -1
      ? (!(c & n) || c & r) && (i[a] = y0(c, t))
      : d <= t && (e.expiredLanes |= c),
      (s &= ~c);
  }
}
function Id(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wg() {
  var e = ja;
  return (ja <<= 1), !(ja & 4194240) && (ja = 64), e;
}
function Xc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Sl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kn(t)),
    (e[t] = n);
}
function E0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - kn(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function jf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var we = 0;
function Eg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xg,
  If,
  Cg,
  kg,
  bg,
  $d = !1,
  $a = [],
  Qr = null,
  Kr = null,
  qr = null,
  ul = new Map(),
  cl = new Map(),
  Br = [],
  x0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function vp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qr = null;
      break;
    case "dragenter":
    case "dragleave":
      Kr = null;
      break;
    case "mouseover":
    case "mouseout":
      qr = null;
      break;
    case "pointerover":
    case "pointerout":
      ul.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cl.delete(t.pointerId);
  }
}
function Ms(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ol(t)), t !== null && If(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function C0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Qr = Ms(Qr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Kr = Ms(Kr, e, t, n, r, i)), !0;
    case "mouseover":
      return (qr = Ms(qr, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ul.set(s, Ms(ul.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), cl.set(s, Ms(cl.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Sg(e) {
  var t = Pi(e.target);
  if (t !== null) {
    var n = Wi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pg(n)), t !== null)) {
          (e.blockedOn = t),
            bg(e.priority, function () {
              Cg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ga(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Dd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pd = r), n.target.dispatchEvent(r), (Pd = null);
    } else return (t = Ol(n)), t !== null && If(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _p(e, t, n) {
  Ga(e) && n.delete(t);
}
function k0() {
  ($d = !1),
    Qr !== null && Ga(Qr) && (Qr = null),
    Kr !== null && Ga(Kr) && (Kr = null),
    qr !== null && Ga(qr) && (qr = null),
    ul.forEach(_p),
    cl.forEach(_p);
}
function Rs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $d ||
      (($d = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, k0)));
}
function dl(e) {
  function t(i) {
    return Rs(i, e);
  }
  if (0 < $a.length) {
    Rs($a[0], e);
    for (var n = 1; n < $a.length; n++) {
      var r = $a[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qr !== null && Rs(Qr, e),
      Kr !== null && Rs(Kr, e),
      qr !== null && Rs(qr, e),
      ul.forEach(t),
      cl.forEach(t),
      n = 0;
    n < Br.length;
    n++
  )
    (r = Br[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && ((n = Br[0]), n.blockedOn === null); )
    Sg(n), n.blockedOn === null && Br.shift();
}
var Mo = _r.ReactCurrentBatchConfig,
  pu = !0;
function b0(e, t, n, r) {
  var i = we,
    s = Mo.transition;
  Mo.transition = null;
  try {
    (we = 1), $f(e, t, n, r);
  } finally {
    (we = i), (Mo.transition = s);
  }
}
function S0(e, t, n, r) {
  var i = we,
    s = Mo.transition;
  Mo.transition = null;
  try {
    (we = 4), $f(e, t, n, r);
  } finally {
    (we = i), (Mo.transition = s);
  }
}
function $f(e, t, n, r) {
  if (pu) {
    var i = Dd(e, t, n, r);
    if (i === null) sd(e, t, r, mu, n), vp(e, r);
    else if (C0(i, e, t, n, r)) r.stopPropagation();
    else if ((vp(e, r), t & 4 && -1 < x0.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ol(i);
        if (
          (s !== null && xg(s),
          (s = Dd(e, t, n, r)),
          s === null && sd(e, t, r, mu, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else sd(e, t, r, null, n);
  }
}
var mu = null;
function Dd(e, t, n, r) {
  if (((mu = null), (e = Nf(r)), (e = Pi(e)), e !== null))
    if (((t = Wi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mu = e), null;
}
function Tg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (h0()) {
        case Lf:
          return 1;
        case _g:
          return 4;
        case fu:
        case p0:
          return 16;
        case yg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hr = null,
  Df = null,
  Za = null;
function Og() {
  if (Za) return Za;
  var e,
    t = Df,
    n = t.length,
    r,
    i = "value" in Hr ? Hr.value : Hr.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return (Za = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ja(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Da() {
  return !0;
}
function yp() {
  return !1;
}
function qt(e) {
  function t(n, r, i, s, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(s) : s[c]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Da
        : yp),
      (this.isPropagationStopped = yp),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Da));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Da));
      },
      persist: function () {},
      isPersistent: Da,
    }),
    t
  );
}
var Jo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mf = qt(Jo),
  Tl = Re({}, Jo, { view: 0, detail: 0 }),
  T0 = qt(Tl),
  Gc,
  Zc,
  zs,
  Ru = Re({}, Tl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zs &&
            (zs && e.type === "mousemove"
              ? ((Gc = e.screenX - zs.screenX), (Zc = e.screenY - zs.screenY))
              : (Zc = Gc = 0),
            (zs = e)),
          Gc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zc;
    },
  }),
  wp = qt(Ru),
  O0 = Re({}, Ru, { dataTransfer: 0 }),
  A0 = qt(O0),
  P0 = Re({}, Tl, { relatedTarget: 0 }),
  Jc = qt(P0),
  N0 = Re({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L0 = qt(N0),
  j0 = Re({}, Jo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  I0 = qt(j0),
  $0 = Re({}, Jo, { data: 0 }),
  Ep = qt($0),
  D0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  M0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  R0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function z0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = R0[e]) ? !!t[e] : !1;
}
function Rf() {
  return z0;
}
var F0 = Re({}, Tl, {
    key: function (e) {
      if (e.key) {
        var t = D0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ja(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? M0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rf,
    charCode: function (e) {
      return e.type === "keypress" ? Ja(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ja(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  B0 = qt(F0),
  U0 = Re({}, Ru, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xp = qt(U0),
  H0 = Re({}, Tl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rf,
  }),
  W0 = qt(H0),
  V0 = Re({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Q0 = qt(V0),
  K0 = Re({}, Ru, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  q0 = qt(K0),
  Y0 = [9, 13, 27, 32],
  zf = hr && "CompositionEvent" in window,
  Xs = null;
hr && "documentMode" in document && (Xs = document.documentMode);
var X0 = hr && "TextEvent" in window && !Xs,
  Ag = hr && (!zf || (Xs && 8 < Xs && 11 >= Xs)),
  Cp = " ",
  kp = !1;
function Pg(e, t) {
  switch (e) {
    case "keyup":
      return Y0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ng(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ko = !1;
function G0(e, t) {
  switch (e) {
    case "compositionend":
      return Ng(t);
    case "keypress":
      return t.which !== 32 ? null : ((kp = !0), Cp);
    case "textInput":
      return (e = t.data), e === Cp && kp ? null : e;
    default:
      return null;
  }
}
function Z0(e, t) {
  if (ko)
    return e === "compositionend" || (!zf && Pg(e, t))
      ? ((e = Og()), (Za = Df = Hr = null), (ko = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ag && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var J0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function bp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!J0[e.type] : t === "textarea";
}
function Lg(e, t, n, r) {
  ug(r),
    (t = gu(t, "onChange")),
    0 < t.length &&
      ((n = new Mf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gs = null,
  fl = null;
function ew(e) {
  Hg(e, 0);
}
function zu(e) {
  var t = To(e);
  if (ng(t)) return e;
}
function tw(e, t) {
  if (e === "change") return t;
}
var jg = !1;
if (hr) {
  var ed;
  if (hr) {
    var td = "oninput" in document;
    if (!td) {
      var Sp = document.createElement("div");
      Sp.setAttribute("oninput", "return;"),
        (td = typeof Sp.oninput == "function");
    }
    ed = td;
  } else ed = !1;
  jg = ed && (!document.documentMode || 9 < document.documentMode);
}
function Tp() {
  Gs && (Gs.detachEvent("onpropertychange", Ig), (fl = Gs = null));
}
function Ig(e) {
  if (e.propertyName === "value" && zu(fl)) {
    var t = [];
    Lg(t, fl, e, Nf(e)), hg(ew, t);
  }
}
function nw(e, t, n) {
  e === "focusin"
    ? (Tp(), (Gs = t), (fl = n), Gs.attachEvent("onpropertychange", Ig))
    : e === "focusout" && Tp();
}
function rw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zu(fl);
}
function iw(e, t) {
  if (e === "click") return zu(t);
}
function ow(e, t) {
  if (e === "input" || e === "change") return zu(t);
}
function sw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sn = typeof Object.is == "function" ? Object.is : sw;
function hl(e, t) {
  if (Sn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!_d.call(t, i) || !Sn(e[i], t[i])) return !1;
  }
  return !0;
}
function Op(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ap(e, t) {
  var n = Op(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Op(n);
  }
}
function $g(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? $g(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dg() {
  for (var e = window, t = uu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = uu(e.document);
  }
  return t;
}
function Ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lw(e) {
  var t = Dg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $g(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ff(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Ap(n, s));
        var a = Ap(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var aw = hr && "documentMode" in document && 11 >= document.documentMode,
  bo = null,
  Md = null,
  Zs = null,
  Rd = !1;
function Pp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rd ||
    bo == null ||
    bo !== uu(r) ||
    ((r = bo),
    "selectionStart" in r && Ff(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zs && hl(Zs, r)) ||
      ((Zs = r),
      (r = gu(Md, "onSelect")),
      0 < r.length &&
        ((t = new Mf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bo))));
}
function Ma(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var So = {
    animationend: Ma("Animation", "AnimationEnd"),
    animationiteration: Ma("Animation", "AnimationIteration"),
    animationstart: Ma("Animation", "AnimationStart"),
    transitionend: Ma("Transition", "TransitionEnd"),
  },
  nd = {},
  Mg = {};
hr &&
  ((Mg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete So.animationend.animation,
    delete So.animationiteration.animation,
    delete So.animationstart.animation),
  "TransitionEvent" in window || delete So.transitionend.transition);
function Fu(e) {
  if (nd[e]) return nd[e];
  if (!So[e]) return e;
  var t = So[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mg) return (nd[e] = t[n]);
  return e;
}
var Rg = Fu("animationend"),
  zg = Fu("animationiteration"),
  Fg = Fu("animationstart"),
  Bg = Fu("transitionend"),
  Ug = new Map(),
  Np =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ri(e, t) {
  Ug.set(e, t), Hi(t, [e]);
}
for (var rd = 0; rd < Np.length; rd++) {
  var id = Np[rd],
    uw = id.toLowerCase(),
    cw = id[0].toUpperCase() + id.slice(1);
  ri(uw, "on" + cw);
}
ri(Rg, "onAnimationEnd");
ri(zg, "onAnimationIteration");
ri(Fg, "onAnimationStart");
ri("dblclick", "onDoubleClick");
ri("focusin", "onFocus");
ri("focusout", "onBlur");
ri(Bg, "onTransitionEnd");
Fo("onMouseEnter", ["mouseout", "mouseover"]);
Fo("onMouseLeave", ["mouseout", "mouseover"]);
Fo("onPointerEnter", ["pointerout", "pointerover"]);
Fo("onPointerLeave", ["pointerout", "pointerover"]);
Hi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Hi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Hi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Hi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Hi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Hi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ks =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));
function Lp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), u0(r, t, void 0, e), (e.currentTarget = null);
}
function Hg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var c = r[a],
            d = c.instance,
            p = c.currentTarget;
          if (((c = c.listener), d !== s && i.isPropagationStopped())) break e;
          Lp(i, c, p), (s = d);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((c = r[a]),
            (d = c.instance),
            (p = c.currentTarget),
            (c = c.listener),
            d !== s && i.isPropagationStopped())
          )
            break e;
          Lp(i, c, p), (s = d);
        }
    }
  }
  if (du) throw ((e = jd), (du = !1), (jd = null), e);
}
function Ae(e, t) {
  var n = t[Hd];
  n === void 0 && (n = t[Hd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wg(t, e, 2, !1), n.add(r));
}
function od(e, t, n) {
  var r = 0;
  t && (r |= 4), Wg(n, e, r, t);
}
var Ra = "_reactListening" + Math.random().toString(36).slice(2);
function pl(e) {
  if (!e[Ra]) {
    (e[Ra] = !0),
      Gm.forEach(function (n) {
        n !== "selectionchange" && (dw.has(n) || od(n, !1, e), od(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ra] || ((t[Ra] = !0), od("selectionchange", !1, t));
  }
}
function Wg(e, t, n, r) {
  switch (Tg(t)) {
    case 1:
      var i = b0;
      break;
    case 4:
      i = S0;
      break;
    default:
      i = $f;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ld ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function sd(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var c = r.stateNode.containerInfo;
        if (c === i || (c.nodeType === 8 && c.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var d = a.tag;
            if (
              (d === 3 || d === 4) &&
              ((d = a.stateNode.containerInfo),
              d === i || (d.nodeType === 8 && d.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; c !== null; ) {
          if (((a = Pi(c)), a === null)) return;
          if (((d = a.tag), d === 5 || d === 6)) {
            r = s = a;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  hg(function () {
    var p = s,
      g = Nf(n),
      _ = [];
    e: {
      var E = Ug.get(e);
      if (E !== void 0) {
        var T = Mf,
          L = e;
        switch (e) {
          case "keypress":
            if (Ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            T = B0;
            break;
          case "focusin":
            (L = "focus"), (T = Jc);
            break;
          case "focusout":
            (L = "blur"), (T = Jc);
            break;
          case "beforeblur":
          case "afterblur":
            T = Jc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            T = wp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            T = A0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            T = W0;
            break;
          case Rg:
          case zg:
          case Fg:
            T = L0;
            break;
          case Bg:
            T = Q0;
            break;
          case "scroll":
            T = T0;
            break;
          case "wheel":
            T = q0;
            break;
          case "copy":
          case "cut":
          case "paste":
            T = I0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            T = xp;
        }
        var P = (t & 4) !== 0,
          j = !P && e === "scroll",
          w = P ? (E !== null ? E + "Capture" : null) : E;
        P = [];
        for (var v = p, y; v !== null; ) {
          y = v;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              w !== null && ((S = al(v, w)), S != null && P.push(ml(v, S, y)))),
            j)
          )
            break;
          v = v.return;
        }
        0 < P.length &&
          ((E = new T(E, L, null, n, g)), _.push({ event: E, listeners: P }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((E = e === "mouseover" || e === "pointerover"),
          (T = e === "mouseout" || e === "pointerout"),
          E &&
            n !== Pd &&
            (L = n.relatedTarget || n.fromElement) &&
            (Pi(L) || L[pr]))
        )
          break e;
        if (
          (T || E) &&
          ((E =
            g.window === g
              ? g
              : (E = g.ownerDocument)
              ? E.defaultView || E.parentWindow
              : window),
          T
            ? ((L = n.relatedTarget || n.toElement),
              (T = p),
              (L = L ? Pi(L) : null),
              L !== null &&
                ((j = Wi(L)), L !== j || (L.tag !== 5 && L.tag !== 6)) &&
                (L = null))
            : ((T = null), (L = p)),
          T !== L)
        ) {
          if (
            ((P = wp),
            (S = "onMouseLeave"),
            (w = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((P = xp),
              (S = "onPointerLeave"),
              (w = "onPointerEnter"),
              (v = "pointer")),
            (j = T == null ? E : To(T)),
            (y = L == null ? E : To(L)),
            (E = new P(S, v + "leave", T, n, g)),
            (E.target = j),
            (E.relatedTarget = y),
            (S = null),
            Pi(g) === p &&
              ((P = new P(w, v + "enter", L, n, g)),
              (P.target = y),
              (P.relatedTarget = j),
              (S = P)),
            (j = S),
            T && L)
          )
            t: {
              for (P = T, w = L, v = 0, y = P; y; y = yo(y)) v++;
              for (y = 0, S = w; S; S = yo(S)) y++;
              for (; 0 < v - y; ) (P = yo(P)), v--;
              for (; 0 < y - v; ) (w = yo(w)), y--;
              for (; v--; ) {
                if (P === w || (w !== null && P === w.alternate)) break t;
                (P = yo(P)), (w = yo(w));
              }
              P = null;
            }
          else P = null;
          T !== null && jp(_, E, T, P, !1),
            L !== null && j !== null && jp(_, j, L, P, !0);
        }
      }
      e: {
        if (
          ((E = p ? To(p) : window),
          (T = E.nodeName && E.nodeName.toLowerCase()),
          T === "select" || (T === "input" && E.type === "file"))
        )
          var I = tw;
        else if (bp(E))
          if (jg) I = ow;
          else {
            I = rw;
            var z = nw;
          }
        else
          (T = E.nodeName) &&
            T.toLowerCase() === "input" &&
            (E.type === "checkbox" || E.type === "radio") &&
            (I = iw);
        if (I && (I = I(e, p))) {
          Lg(_, I, n, g);
          break e;
        }
        z && z(e, E, p),
          e === "focusout" &&
            (z = E._wrapperState) &&
            z.controlled &&
            E.type === "number" &&
            bd(E, "number", E.value);
      }
      switch (((z = p ? To(p) : window), e)) {
        case "focusin":
          (bp(z) || z.contentEditable === "true") &&
            ((bo = z), (Md = p), (Zs = null));
          break;
        case "focusout":
          Zs = Md = bo = null;
          break;
        case "mousedown":
          Rd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Rd = !1), Pp(_, n, g);
          break;
        case "selectionchange":
          if (aw) break;
        case "keydown":
        case "keyup":
          Pp(_, n, g);
      }
      var B;
      if (zf)
        e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
      else
        ko
          ? Pg(e, n) && (U = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
      U &&
        (Ag &&
          n.locale !== "ko" &&
          (ko || U !== "onCompositionStart"
            ? U === "onCompositionEnd" && ko && (B = Og())
            : ((Hr = g),
              (Df = "value" in Hr ? Hr.value : Hr.textContent),
              (ko = !0))),
        (z = gu(p, U)),
        0 < z.length &&
          ((U = new Ep(U, e, null, n, g)),
          _.push({ event: U, listeners: z }),
          B ? (U.data = B) : ((B = Ng(n)), B !== null && (U.data = B)))),
        (B = X0 ? G0(e, n) : Z0(e, n)) &&
          ((p = gu(p, "onBeforeInput")),
          0 < p.length &&
            ((g = new Ep("onBeforeInput", "beforeinput", null, n, g)),
            _.push({ event: g, listeners: p }),
            (g.data = B)));
    }
    Hg(_, t);
  });
}
function ml(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = al(e, n)),
      s != null && r.unshift(ml(e, s, i)),
      (s = al(e, t)),
      s != null && r.push(ml(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jp(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var c = n,
      d = c.alternate,
      p = c.stateNode;
    if (d !== null && d === r) break;
    c.tag === 5 &&
      p !== null &&
      ((c = p),
      i
        ? ((d = al(n, s)), d != null && a.unshift(ml(n, d, c)))
        : i || ((d = al(n, s)), d != null && a.push(ml(n, d, c)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var fw = /\r\n?/g,
  hw = /\u0000|\uFFFD/g;
function Ip(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fw,
      `
`
    )
    .replace(hw, "");
}
function za(e, t, n) {
  if (((t = Ip(t)), Ip(e) !== t && n)) throw Error(F(425));
}
function vu() {}
var zd = null,
  Fd = null;
function Bd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ud = typeof setTimeout == "function" ? setTimeout : void 0,
  pw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $p = typeof Promise == "function" ? Promise : void 0,
  mw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $p < "u"
      ? function (e) {
          return $p.resolve(null).then(e).catch(gw);
        }
      : Ud;
function gw(e) {
  setTimeout(function () {
    throw e;
  });
}
function ld(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), dl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  dl(t);
}
function Yr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Dp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var es = Math.random().toString(36).slice(2),
  Fn = "__reactFiber$" + es,
  gl = "__reactProps$" + es,
  pr = "__reactContainer$" + es,
  Hd = "__reactEvents$" + es,
  vw = "__reactListeners$" + es,
  _w = "__reactHandles$" + es;
function Pi(e) {
  var t = e[Fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pr] || n[Fn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Dp(e); e !== null; ) {
          if ((n = e[Fn])) return n;
          e = Dp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ol(e) {
  return (
    (e = e[Fn] || e[pr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function To(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Bu(e) {
  return e[gl] || null;
}
var Wd = [],
  Oo = -1;
function ii(e) {
  return { current: e };
}
function Pe(e) {
  0 > Oo || ((e.current = Wd[Oo]), (Wd[Oo] = null), Oo--);
}
function Te(e, t) {
  Oo++, (Wd[Oo] = e.current), (e.current = t);
}
var ni = {},
  ft = ii(ni),
  Nt = ii(!1),
  Di = ni;
function Bo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ni;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Lt(e) {
  return (e = e.childContextTypes), e != null;
}
function _u() {
  Pe(Nt), Pe(ft);
}
function Mp(e, t, n) {
  if (ft.current !== ni) throw Error(F(168));
  Te(ft, t), Te(Nt, n);
}
function Vg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, n0(e) || "Unknown", i));
  return Re({}, n, r);
}
function yu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ni),
    (Di = ft.current),
    Te(ft, e),
    Te(Nt, Nt.current),
    !0
  );
}
function Rp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = Vg(e, t, Di)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Pe(Nt),
      Pe(ft),
      Te(ft, e))
    : Pe(Nt),
    Te(Nt, n);
}
var ur = null,
  Uu = !1,
  ad = !1;
function Qg(e) {
  ur === null ? (ur = [e]) : ur.push(e);
}
function yw(e) {
  (Uu = !0), Qg(e);
}
function oi() {
  if (!ad && ur !== null) {
    ad = !0;
    var e = 0,
      t = we;
    try {
      var n = ur;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ur = null), (Uu = !1);
    } catch (i) {
      throw (ur !== null && (ur = ur.slice(e + 1)), vg(Lf, oi), i);
    } finally {
      (we = t), (ad = !1);
    }
  }
  return null;
}
var Ao = [],
  Po = 0,
  wu = null,
  Eu = 0,
  on = [],
  sn = 0,
  Mi = null,
  cr = 1,
  dr = "";
function Ti(e, t) {
  (Ao[Po++] = Eu), (Ao[Po++] = wu), (wu = e), (Eu = t);
}
function Kg(e, t, n) {
  (on[sn++] = cr), (on[sn++] = dr), (on[sn++] = Mi), (Mi = e);
  var r = cr;
  e = dr;
  var i = 32 - kn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - kn(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (cr = (1 << (32 - kn(t) + i)) | (n << i) | r),
      (dr = s + e);
  } else (cr = (1 << s) | (n << i) | r), (dr = e);
}
function Bf(e) {
  e.return !== null && (Ti(e, 1), Kg(e, 1, 0));
}
function Uf(e) {
  for (; e === wu; )
    (wu = Ao[--Po]), (Ao[Po] = null), (Eu = Ao[--Po]), (Ao[Po] = null);
  for (; e === Mi; )
    (Mi = on[--sn]),
      (on[sn] = null),
      (dr = on[--sn]),
      (on[sn] = null),
      (cr = on[--sn]),
      (on[sn] = null);
}
var Ut = null,
  Bt = null,
  Le = !1,
  Cn = null;
function qg(e, t) {
  var n = ln(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ut = e), (Bt = Yr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ut = e), (Bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mi !== null ? { id: cr, overflow: dr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ln(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ut = e),
            (Bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qd(e) {
  if (Le) {
    var t = Bt;
    if (t) {
      var n = t;
      if (!zp(e, t)) {
        if (Vd(e)) throw Error(F(418));
        t = Yr(n.nextSibling);
        var r = Ut;
        t && zp(e, t)
          ? qg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (Ut = e));
      }
    } else {
      if (Vd(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (Le = !1), (Ut = e);
    }
  }
}
function Fp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ut = e;
}
function Fa(e) {
  if (e !== Ut) return !1;
  if (!Le) return Fp(e), (Le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bd(e.type, e.memoizedProps))),
    t && (t = Bt))
  ) {
    if (Vd(e)) throw (Yg(), Error(F(418)));
    for (; t; ) qg(e, t), (t = Yr(t.nextSibling));
  }
  if ((Fp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Bt = Yr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Bt = null;
    }
  } else Bt = Ut ? Yr(e.stateNode.nextSibling) : null;
  return !0;
}
function Yg() {
  for (var e = Bt; e; ) e = Yr(e.nextSibling);
}
function Uo() {
  (Bt = Ut = null), (Le = !1);
}
function Hf(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
var ww = _r.ReactCurrentBatchConfig;
function Fs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var c = i.refs;
            a === null ? delete c[s] : (c[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function Ba(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bp(e) {
  var t = e._init;
  return t(e._payload);
}
function Xg(e) {
  function t(w, v) {
    if (e) {
      var y = w.deletions;
      y === null ? ((w.deletions = [v]), (w.flags |= 16)) : y.push(v);
    }
  }
  function n(w, v) {
    if (!e) return null;
    for (; v !== null; ) t(w, v), (v = v.sibling);
    return null;
  }
  function r(w, v) {
    for (w = new Map(); v !== null; )
      v.key !== null ? w.set(v.key, v) : w.set(v.index, v), (v = v.sibling);
    return w;
  }
  function i(w, v) {
    return (w = Jr(w, v)), (w.index = 0), (w.sibling = null), w;
  }
  function s(w, v, y) {
    return (
      (w.index = y),
      e
        ? ((y = w.alternate),
          y !== null
            ? ((y = y.index), y < v ? ((w.flags |= 2), v) : y)
            : ((w.flags |= 2), v))
        : ((w.flags |= 1048576), v)
    );
  }
  function a(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function c(w, v, y, S) {
    return v === null || v.tag !== 6
      ? ((v = md(y, w.mode, S)), (v.return = w), v)
      : ((v = i(v, y)), (v.return = w), v);
  }
  function d(w, v, y, S) {
    var I = y.type;
    return I === Co
      ? g(w, v, y.props.children, S, y.key)
      : v !== null &&
        (v.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === zr &&
            Bp(I) === v.type))
      ? ((S = i(v, y.props)), (S.ref = Fs(w, v, y)), (S.return = w), S)
      : ((S = su(y.type, y.key, y.props, null, w.mode, S)),
        (S.ref = Fs(w, v, y)),
        (S.return = w),
        S);
  }
  function p(w, v, y, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== y.containerInfo ||
      v.stateNode.implementation !== y.implementation
      ? ((v = gd(y, w.mode, S)), (v.return = w), v)
      : ((v = i(v, y.children || [])), (v.return = w), v);
  }
  function g(w, v, y, S, I) {
    return v === null || v.tag !== 7
      ? ((v = Ii(y, w.mode, S, I)), (v.return = w), v)
      : ((v = i(v, y)), (v.return = w), v);
  }
  function _(w, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = md("" + v, w.mode, y)), (v.return = w), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Pa:
          return (
            (y = su(v.type, v.key, v.props, null, w.mode, y)),
            (y.ref = Fs(w, null, v)),
            (y.return = w),
            y
          );
        case xo:
          return (v = gd(v, w.mode, y)), (v.return = w), v;
        case zr:
          var S = v._init;
          return _(w, S(v._payload), y);
      }
      if (Vs(v) || $s(v))
        return (v = Ii(v, w.mode, y, null)), (v.return = w), v;
      Ba(w, v);
    }
    return null;
  }
  function E(w, v, y, S) {
    var I = v !== null ? v.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return I !== null ? null : c(w, v, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Pa:
          return y.key === I ? d(w, v, y, S) : null;
        case xo:
          return y.key === I ? p(w, v, y, S) : null;
        case zr:
          return (I = y._init), E(w, v, I(y._payload), S);
      }
      if (Vs(y) || $s(y)) return I !== null ? null : g(w, v, y, S, null);
      Ba(w, y);
    }
    return null;
  }
  function T(w, v, y, S, I) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (w = w.get(y) || null), c(v, w, "" + S, I);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Pa:
          return (w = w.get(S.key === null ? y : S.key) || null), d(v, w, S, I);
        case xo:
          return (w = w.get(S.key === null ? y : S.key) || null), p(v, w, S, I);
        case zr:
          var z = S._init;
          return T(w, v, y, z(S._payload), I);
      }
      if (Vs(S) || $s(S)) return (w = w.get(y) || null), g(v, w, S, I, null);
      Ba(v, S);
    }
    return null;
  }
  function L(w, v, y, S) {
    for (
      var I = null, z = null, B = v, U = (v = 0), re = null;
      B !== null && U < y.length;
      U++
    ) {
      B.index > U ? ((re = B), (B = null)) : (re = B.sibling);
      var Z = E(w, B, y[U], S);
      if (Z === null) {
        B === null && (B = re);
        break;
      }
      e && B && Z.alternate === null && t(w, B),
        (v = s(Z, v, U)),
        z === null ? (I = Z) : (z.sibling = Z),
        (z = Z),
        (B = re);
    }
    if (U === y.length) return n(w, B), Le && Ti(w, U), I;
    if (B === null) {
      for (; U < y.length; U++)
        (B = _(w, y[U], S)),
          B !== null &&
            ((v = s(B, v, U)), z === null ? (I = B) : (z.sibling = B), (z = B));
      return Le && Ti(w, U), I;
    }
    for (B = r(w, B); U < y.length; U++)
      (re = T(B, w, U, y[U], S)),
        re !== null &&
          (e && re.alternate !== null && B.delete(re.key === null ? U : re.key),
          (v = s(re, v, U)),
          z === null ? (I = re) : (z.sibling = re),
          (z = re));
    return (
      e &&
        B.forEach(function (fe) {
          return t(w, fe);
        }),
      Le && Ti(w, U),
      I
    );
  }
  function P(w, v, y, S) {
    var I = $s(y);
    if (typeof I != "function") throw Error(F(150));
    if (((y = I.call(y)), y == null)) throw Error(F(151));
    for (
      var z = (I = null), B = v, U = (v = 0), re = null, Z = y.next();
      B !== null && !Z.done;
      U++, Z = y.next()
    ) {
      B.index > U ? ((re = B), (B = null)) : (re = B.sibling);
      var fe = E(w, B, Z.value, S);
      if (fe === null) {
        B === null && (B = re);
        break;
      }
      e && B && fe.alternate === null && t(w, B),
        (v = s(fe, v, U)),
        z === null ? (I = fe) : (z.sibling = fe),
        (z = fe),
        (B = re);
    }
    if (Z.done) return n(w, B), Le && Ti(w, U), I;
    if (B === null) {
      for (; !Z.done; U++, Z = y.next())
        (Z = _(w, Z.value, S)),
          Z !== null &&
            ((v = s(Z, v, U)), z === null ? (I = Z) : (z.sibling = Z), (z = Z));
      return Le && Ti(w, U), I;
    }
    for (B = r(w, B); !Z.done; U++, Z = y.next())
      (Z = T(B, w, U, Z.value, S)),
        Z !== null &&
          (e && Z.alternate !== null && B.delete(Z.key === null ? U : Z.key),
          (v = s(Z, v, U)),
          z === null ? (I = Z) : (z.sibling = Z),
          (z = Z));
    return (
      e &&
        B.forEach(function (je) {
          return t(w, je);
        }),
      Le && Ti(w, U),
      I
    );
  }
  function j(w, v, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Co &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Pa:
          e: {
            for (var I = y.key, z = v; z !== null; ) {
              if (z.key === I) {
                if (((I = y.type), I === Co)) {
                  if (z.tag === 7) {
                    n(w, z.sibling),
                      (v = i(z, y.props.children)),
                      (v.return = w),
                      (w = v);
                    break e;
                  }
                } else if (
                  z.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === zr &&
                    Bp(I) === z.type)
                ) {
                  n(w, z.sibling),
                    (v = i(z, y.props)),
                    (v.ref = Fs(w, z, y)),
                    (v.return = w),
                    (w = v);
                  break e;
                }
                n(w, z);
                break;
              } else t(w, z);
              z = z.sibling;
            }
            y.type === Co
              ? ((v = Ii(y.props.children, w.mode, S, y.key)),
                (v.return = w),
                (w = v))
              : ((S = su(y.type, y.key, y.props, null, w.mode, S)),
                (S.ref = Fs(w, v, y)),
                (S.return = w),
                (w = S));
          }
          return a(w);
        case xo:
          e: {
            for (z = y.key; v !== null; ) {
              if (v.key === z)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === y.containerInfo &&
                  v.stateNode.implementation === y.implementation
                ) {
                  n(w, v.sibling),
                    (v = i(v, y.children || [])),
                    (v.return = w),
                    (w = v);
                  break e;
                } else {
                  n(w, v);
                  break;
                }
              else t(w, v);
              v = v.sibling;
            }
            (v = gd(y, w.mode, S)), (v.return = w), (w = v);
          }
          return a(w);
        case zr:
          return (z = y._init), j(w, v, z(y._payload), S);
      }
      if (Vs(y)) return L(w, v, y, S);
      if ($s(y)) return P(w, v, y, S);
      Ba(w, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        v !== null && v.tag === 6
          ? (n(w, v.sibling), (v = i(v, y)), (v.return = w), (w = v))
          : (n(w, v), (v = md(y, w.mode, S)), (v.return = w), (w = v)),
        a(w))
      : n(w, v);
  }
  return j;
}
var Ho = Xg(!0),
  Gg = Xg(!1),
  xu = ii(null),
  Cu = null,
  No = null,
  Wf = null;
function Vf() {
  Wf = No = Cu = null;
}
function Qf(e) {
  var t = xu.current;
  Pe(xu), (e._currentValue = t);
}
function Kd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ro(e, t) {
  (Cu = e),
    (Wf = No = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pt = !0), (e.firstContext = null));
}
function cn(e) {
  var t = e._currentValue;
  if (Wf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), No === null)) {
      if (Cu === null) throw Error(F(308));
      (No = e), (Cu.dependencies = { lanes: 0, firstContext: e });
    } else No = No.next = e;
  return t;
}
var Ni = null;
function Kf(e) {
  Ni === null ? (Ni = [e]) : Ni.push(e);
}
function Zg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Kf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    mr(e, r)
  );
}
function mr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Fr = !1;
function qf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function fr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), he & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      mr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Kf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    mr(e, n)
  );
}
function eu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jf(e, n);
  }
}
function Up(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ku(e, t, n, r) {
  var i = e.updateQueue;
  Fr = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    c = i.shared.pending;
  if (c !== null) {
    i.shared.pending = null;
    var d = c,
      p = d.next;
    (d.next = null), a === null ? (s = p) : (a.next = p), (a = d);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (c = g.lastBaseUpdate),
      c !== a &&
        (c === null ? (g.firstBaseUpdate = p) : (c.next = p),
        (g.lastBaseUpdate = d)));
  }
  if (s !== null) {
    var _ = i.baseState;
    (a = 0), (g = p = d = null), (c = s);
    do {
      var E = c.lane,
        T = c.eventTime;
      if ((r & E) === E) {
        g !== null &&
          (g = g.next =
            {
              eventTime: T,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var L = e,
            P = c;
          switch (((E = t), (T = n), P.tag)) {
            case 1:
              if (((L = P.payload), typeof L == "function")) {
                _ = L.call(T, _, E);
                break e;
              }
              _ = L;
              break e;
            case 3:
              L.flags = (L.flags & -65537) | 128;
            case 0:
              if (
                ((L = P.payload),
                (E = typeof L == "function" ? L.call(T, _, E) : L),
                E == null)
              )
                break e;
              _ = Re({}, _, E);
              break e;
            case 2:
              Fr = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (E = i.effects),
          E === null ? (i.effects = [c]) : E.push(c));
      } else
        (T = {
          eventTime: T,
          lane: E,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          g === null ? ((p = g = T), (d = _)) : (g = g.next = T),
          (a |= E);
      if (((c = c.next), c === null)) {
        if (((c = i.shared.pending), c === null)) break;
        (E = c),
          (c = E.next),
          (E.next = null),
          (i.lastBaseUpdate = E),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (d = _),
      (i.baseState = d),
      (i.firstBaseUpdate = p),
      (i.lastBaseUpdate = g),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (zi |= a), (e.lanes = a), (e.memoizedState = _);
  }
}
function Hp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var Al = {},
  Un = ii(Al),
  vl = ii(Al),
  _l = ii(Al);
function Li(e) {
  if (e === Al) throw Error(F(174));
  return e;
}
function Yf(e, t) {
  switch ((Te(_l, t), Te(vl, e), Te(Un, Al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Td(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Td(t, e));
  }
  Pe(Un), Te(Un, t);
}
function Wo() {
  Pe(Un), Pe(vl), Pe(_l);
}
function ev(e) {
  Li(_l.current);
  var t = Li(Un.current),
    n = Td(t, e.type);
  t !== n && (Te(vl, e), Te(Un, n));
}
function Xf(e) {
  vl.current === e && (Pe(Un), Pe(vl));
}
var De = ii(0);
function bu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ud = [];
function Gf() {
  for (var e = 0; e < ud.length; e++)
    ud[e]._workInProgressVersionPrimary = null;
  ud.length = 0;
}
var tu = _r.ReactCurrentDispatcher,
  cd = _r.ReactCurrentBatchConfig,
  Ri = 0,
  Me = null,
  Xe = null,
  nt = null,
  Su = !1,
  Js = !1,
  yl = 0,
  Ew = 0;
function ut() {
  throw Error(F(321));
}
function Zf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Sn(e[n], t[n])) return !1;
  return !0;
}
function Jf(e, t, n, r, i, s) {
  if (
    ((Ri = s),
    (Me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tu.current = e === null || e.memoizedState === null ? bw : Sw),
    (e = n(r, i)),
    Js)
  ) {
    s = 0;
    do {
      if (((Js = !1), (yl = 0), 25 <= s)) throw Error(F(301));
      (s += 1),
        (nt = Xe = null),
        (t.updateQueue = null),
        (tu.current = Tw),
        (e = n(r, i));
    } while (Js);
  }
  if (
    ((tu.current = Tu),
    (t = Xe !== null && Xe.next !== null),
    (Ri = 0),
    (nt = Xe = Me = null),
    (Su = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function eh() {
  var e = yl !== 0;
  return (yl = 0), e;
}
function zn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return nt === null ? (Me.memoizedState = nt = e) : (nt = nt.next = e), nt;
}
function dn() {
  if (Xe === null) {
    var e = Me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = nt === null ? Me.memoizedState : nt.next;
  if (t !== null) (nt = t), (Xe = e);
  else {
    if (e === null) throw Error(F(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      nt === null ? (Me.memoizedState = nt = e) : (nt = nt.next = e);
  }
  return nt;
}
function wl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function dd(e) {
  var t = dn(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Xe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var c = (a = null),
      d = null,
      p = s;
    do {
      var g = p.lane;
      if ((Ri & g) === g)
        d !== null &&
          (d = d.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action));
      else {
        var _ = {
          lane: g,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        d === null ? ((c = d = _), (a = r)) : (d = d.next = _),
          (Me.lanes |= g),
          (zi |= g);
      }
      p = p.next;
    } while (p !== null && p !== s);
    d === null ? (a = r) : (d.next = c),
      Sn(r, t.memoizedState) || (Pt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = d),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Me.lanes |= s), (zi |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fd(e) {
  var t = dn(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    Sn(s, t.memoizedState) || (Pt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function tv() {}
function nv(e, t) {
  var n = Me,
    r = dn(),
    i = t(),
    s = !Sn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pt = !0)),
    (r = r.queue),
    th(ov.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (nt !== null && nt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      El(9, iv.bind(null, n, r, i, t), void 0, null),
      rt === null)
    )
      throw Error(F(349));
    Ri & 30 || rv(n, t, i);
  }
  return i;
}
function rv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function iv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), sv(t) && lv(e);
}
function ov(e, t, n) {
  return n(function () {
    sv(t) && lv(e);
  });
}
function sv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Sn(e, n);
  } catch {
    return !0;
  }
}
function lv(e) {
  var t = mr(e, 1);
  t !== null && bn(t, e, 1, -1);
}
function Wp(e) {
  var t = zn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kw.bind(null, Me, e)),
    [t.memoizedState, e]
  );
}
function El(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function av() {
  return dn().memoizedState;
}
function nu(e, t, n, r) {
  var i = zn();
  (Me.flags |= e),
    (i.memoizedState = El(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hu(e, t, n, r) {
  var i = dn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Xe !== null) {
    var a = Xe.memoizedState;
    if (((s = a.destroy), r !== null && Zf(r, a.deps))) {
      i.memoizedState = El(t, n, s, r);
      return;
    }
  }
  (Me.flags |= e), (i.memoizedState = El(1 | t, n, s, r));
}
function Vp(e, t) {
  return nu(8390656, 8, e, t);
}
function th(e, t) {
  return Hu(2048, 8, e, t);
}
function uv(e, t) {
  return Hu(4, 2, e, t);
}
function cv(e, t) {
  return Hu(4, 4, e, t);
}
function dv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function fv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hu(4, 4, dv.bind(null, t, e), n)
  );
}
function nh() {}
function hv(e, t) {
  var n = dn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function pv(e, t) {
  var n = dn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mv(e, t, n) {
  return Ri & 21
    ? (Sn(n, t) || ((n = wg()), (Me.lanes |= n), (zi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pt = !0)), (e.memoizedState = n));
}
function xw(e, t) {
  var n = we;
  (we = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cd.transition;
  cd.transition = {};
  try {
    e(!1), t();
  } finally {
    (we = n), (cd.transition = r);
  }
}
function gv() {
  return dn().memoizedState;
}
function Cw(e, t, n) {
  var r = Zr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vv(e))
  )
    _v(t, n);
  else if (((n = Zg(e, t, n, r)), n !== null)) {
    var i = kt();
    bn(n, e, r, i), yv(n, t, r);
  }
}
function kw(e, t, n) {
  var r = Zr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vv(e)) _v(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          c = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = c), Sn(c, a))) {
          var d = t.interleaved;
          d === null
            ? ((i.next = i), Kf(t))
            : ((i.next = d.next), (d.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zg(e, t, i, r)),
      n !== null && ((i = kt()), bn(n, e, r, i), yv(n, t, r));
  }
}
function vv(e) {
  var t = e.alternate;
  return e === Me || (t !== null && t === Me);
}
function _v(e, t) {
  Js = Su = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jf(e, n);
  }
}
var Tu = {
    readContext: cn,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useInsertionEffect: ut,
    useLayoutEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useMutableSource: ut,
    useSyncExternalStore: ut,
    useId: ut,
    unstable_isNewReconciler: !1,
  },
  bw = {
    readContext: cn,
    useCallback: function (e, t) {
      return (zn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: cn,
    useEffect: Vp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        nu(4194308, 4, dv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return nu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return nu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Cw.bind(null, Me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wp,
    useDebugValue: nh,
    useDeferredValue: function (e) {
      return (zn().memoizedState = e);
    },
    useTransition: function () {
      var e = Wp(!1),
        t = e[0];
      return (e = xw.bind(null, e[1])), (zn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Me,
        i = zn();
      if (Le) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), rt === null)) throw Error(F(349));
        Ri & 30 || rv(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Vp(ov.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        El(9, iv.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zn(),
        t = rt.identifierPrefix;
      if (Le) {
        var n = dr,
          r = cr;
        (n = (r & ~(1 << (32 - kn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ew++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sw = {
    readContext: cn,
    useCallback: hv,
    useContext: cn,
    useEffect: th,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: cv,
    useMemo: pv,
    useReducer: dd,
    useRef: av,
    useState: function () {
      return dd(wl);
    },
    useDebugValue: nh,
    useDeferredValue: function (e) {
      var t = dn();
      return mv(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = dd(wl)[0],
        t = dn().memoizedState;
      return [e, t];
    },
    useMutableSource: tv,
    useSyncExternalStore: nv,
    useId: gv,
    unstable_isNewReconciler: !1,
  },
  Tw = {
    readContext: cn,
    useCallback: hv,
    useContext: cn,
    useEffect: th,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: cv,
    useMemo: pv,
    useReducer: fd,
    useRef: av,
    useState: function () {
      return fd(wl);
    },
    useDebugValue: nh,
    useDeferredValue: function (e) {
      var t = dn();
      return Xe === null ? (t.memoizedState = e) : mv(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = fd(wl)[0],
        t = dn().memoizedState;
      return [e, t];
    },
    useMutableSource: tv,
    useSyncExternalStore: nv,
    useId: gv,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = kt(),
      i = Zr(e),
      s = fr(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Xr(e, s, i)),
      t !== null && (bn(t, e, i, r), eu(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = kt(),
      i = Zr(e),
      s = fr(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Xr(e, s, i)),
      t !== null && (bn(t, e, i, r), eu(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = kt(),
      r = Zr(e),
      i = fr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Xr(e, i, r)),
      t !== null && (bn(t, e, r, n), eu(t, e, r));
  },
};
function Qp(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hl(n, r) || !hl(i, s)
      : !0
  );
}
function wv(e, t, n) {
  var r = !1,
    i = ni,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = cn(s))
      : ((i = Lt(t) ? Di : ft.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Bo(e, i) : ni)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Kp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wu.enqueueReplaceState(t, t.state, null);
}
function Yd(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), qf(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = cn(s))
    : ((s = Lt(t) ? Di : ft.current), (i.context = Bo(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (qd(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Wu.enqueueReplaceState(i, i.state, null),
      ku(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += t0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function hd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ow = typeof WeakMap == "function" ? WeakMap : Map;
function Ev(e, t, n) {
  (n = fr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Au || ((Au = !0), (lf = r)), Xd(e, t);
    }),
    n
  );
}
function xv(e, t, n) {
  (n = fr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Xd(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Xd(e, t),
          typeof r != "function" &&
            (Gr === null ? (Gr = new Set([this])) : Gr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ow();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Uw.bind(null, e, t, n)), t.then(e, e));
}
function Yp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = fr(-1, 1)), (t.tag = 2), Xr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Aw = _r.ReactCurrentOwner,
  Pt = !1;
function Ct(e, t, n, r) {
  t.child = e === null ? Gg(t, null, n, r) : Ho(t, e.child, n, r);
}
function Gp(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Ro(t, i),
    (r = Jf(e, t, n, r, s, i)),
    (n = eh()),
    e !== null && !Pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gr(e, t, i))
      : (Le && n && Bf(t), (t.flags |= 1), Ct(e, t, r, i), t.child)
  );
}
function Zp(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ch(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Cv(e, t, s, r, i))
      : ((e = su(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hl), n(a, r) && e.ref === t.ref)
    )
      return gr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Jr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cv(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (hl(s, r) && e.ref === t.ref)
      if (((Pt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pt = !0);
      else return (t.lanes = e.lanes), gr(e, t, i);
  }
  return Gd(e, t, n, r, i);
}
function kv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Te(jo, Ft),
        (Ft |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Te(jo, Ft),
          (Ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Te(jo, Ft),
        (Ft |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Te(jo, Ft),
      (Ft |= r);
  return Ct(e, t, i, n), t.child;
}
function bv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gd(e, t, n, r, i) {
  var s = Lt(n) ? Di : ft.current;
  return (
    (s = Bo(t, s)),
    Ro(t, i),
    (n = Jf(e, t, n, r, s, i)),
    (r = eh()),
    e !== null && !Pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gr(e, t, i))
      : (Le && r && Bf(t), (t.flags |= 1), Ct(e, t, n, i), t.child)
  );
}
function Jp(e, t, n, r, i) {
  if (Lt(n)) {
    var s = !0;
    yu(t);
  } else s = !1;
  if ((Ro(t, i), t.stateNode === null))
    ru(e, t), wv(t, n, r), Yd(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      c = t.memoizedProps;
    a.props = c;
    var d = a.context,
      p = n.contextType;
    typeof p == "object" && p !== null
      ? (p = cn(p))
      : ((p = Lt(n) ? Di : ft.current), (p = Bo(t, p)));
    var g = n.getDerivedStateFromProps,
      _ =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    _ ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== r || d !== p) && Kp(t, a, r, p)),
      (Fr = !1);
    var E = t.memoizedState;
    (a.state = E),
      ku(t, r, a, i),
      (d = t.memoizedState),
      c !== r || E !== d || Nt.current || Fr
        ? (typeof g == "function" && (qd(t, n, g, r), (d = t.memoizedState)),
          (c = Fr || Qp(t, n, c, r, E, d, p))
            ? (_ ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = d)),
          (a.props = r),
          (a.state = d),
          (a.context = p),
          (r = c))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Jg(e, t),
      (c = t.memoizedProps),
      (p = t.type === t.elementType ? c : En(t.type, c)),
      (a.props = p),
      (_ = t.pendingProps),
      (E = a.context),
      (d = n.contextType),
      typeof d == "object" && d !== null
        ? (d = cn(d))
        : ((d = Lt(n) ? Di : ft.current), (d = Bo(t, d)));
    var T = n.getDerivedStateFromProps;
    (g =
      typeof T == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== _ || E !== d) && Kp(t, a, r, d)),
      (Fr = !1),
      (E = t.memoizedState),
      (a.state = E),
      ku(t, r, a, i);
    var L = t.memoizedState;
    c !== _ || E !== L || Nt.current || Fr
      ? (typeof T == "function" && (qd(t, n, T, r), (L = t.memoizedState)),
        (p = Fr || Qp(t, n, p, r, E, L, d) || !1)
          ? (g ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, L, d),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, L, d)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (c === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = L)),
        (a.props = r),
        (a.state = L),
        (a.context = d),
        (r = p))
      : (typeof a.componentDidUpdate != "function" ||
          (c === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zd(e, t, n, r, s, i);
}
function Zd(e, t, n, r, i, s) {
  bv(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Rp(t, n, !1), gr(e, t, s);
  (r = t.stateNode), (Aw.current = t);
  var c =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Ho(t, e.child, null, s)), (t.child = Ho(t, null, c, s)))
      : Ct(e, t, c, s),
    (t.memoizedState = r.state),
    i && Rp(t, n, !0),
    t.child
  );
}
function Sv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Mp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Mp(e, t.context, !1),
    Yf(e, t.containerInfo);
}
function em(e, t, n, r, i) {
  return Uo(), Hf(i), (t.flags |= 256), Ct(e, t, n, r), t.child;
}
var Jd = { dehydrated: null, treeContext: null, retryLane: 0 };
function ef(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tv(e, t, n) {
  var r = t.pendingProps,
    i = De.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    c;
  if (
    ((c = a) ||
      (c = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    c
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Te(De, i & 1),
    e === null)
  )
    return (
      Qd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Ku(a, r, 0, null)),
              (e = Ii(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ef(n)),
              (t.memoizedState = Jd),
              e)
            : rh(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((c = i.dehydrated), c !== null)))
    return Pw(e, t, a, r, c, i, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (i = e.child), (c = i.sibling);
    var d = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = d),
          (t.deletions = null))
        : ((r = Jr(i, d)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      c !== null ? (s = Jr(c, s)) : ((s = Ii(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ef(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jd),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Jr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rh(e, t) {
  return (
    (t = Ku({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ua(e, t, n, r) {
  return (
    r !== null && Hf(r),
    Ho(t, e.child, null, n),
    (e = rh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pw(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hd(Error(F(422)))), Ua(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Ku({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Ii(s, i, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Ho(t, e.child, null, a),
        (t.child.memoizedState = ef(a)),
        (t.memoizedState = Jd),
        s);
  if (!(t.mode & 1)) return Ua(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var c = r.dgst;
    return (r = c), (s = Error(F(419))), (r = hd(s, r, void 0)), Ua(e, t, a, r);
  }
  if (((c = (a & e.childLanes) !== 0), Pt || c)) {
    if (((r = rt), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), mr(e, i), bn(r, e, i, -1));
    }
    return uh(), (r = hd(Error(F(421)))), Ua(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Bt = Yr(i.nextSibling)),
      (Ut = t),
      (Le = !0),
      (Cn = null),
      e !== null &&
        ((on[sn++] = cr),
        (on[sn++] = dr),
        (on[sn++] = Mi),
        (cr = e.id),
        (dr = e.overflow),
        (Mi = t)),
      (t = rh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Kd(e.return, t, n);
}
function pd(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ov(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ct(e, t, r.children, n), (r = De.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tm(e, n, t);
        else if (e.tag === 19) tm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Te(De, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && bu(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          pd(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && bu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        pd(t, !0, n, null, s);
        break;
      case "together":
        pd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ru(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Jr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nw(e, t, n) {
  switch (t.tag) {
    case 3:
      Sv(t), Uo();
      break;
    case 5:
      ev(t);
      break;
    case 1:
      Lt(t.type) && yu(t);
      break;
    case 4:
      Yf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Te(xu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Te(De, De.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Tv(e, t, n)
          : (Te(De, De.current & 1),
            (e = gr(e, t, n)),
            e !== null ? e.sibling : null);
      Te(De, De.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ov(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Te(De, De.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kv(e, t, n);
  }
  return gr(e, t, n);
}
var Av, tf, Pv, Nv;
Av = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tf = function () {};
Pv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Li(Un.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Cd(e, i)), (r = Cd(e, r)), (s = []);
        break;
      case "select":
        (i = Re({}, i, { value: void 0 })),
          (r = Re({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Sd(e, i)), (r = Sd(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vu);
    }
    Od(n, r);
    var a;
    n = null;
    for (p in i)
      if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
        if (p === "style") {
          var c = i[p];
          for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (sl.hasOwnProperty(p)
              ? s || (s = [])
              : (s = s || []).push(p, null));
    for (p in r) {
      var d = r[p];
      if (
        ((c = i != null ? i[p] : void 0),
        r.hasOwnProperty(p) && d !== c && (d != null || c != null))
      )
        if (p === "style")
          if (c) {
            for (a in c)
              !c.hasOwnProperty(a) ||
                (d && d.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in d)
              d.hasOwnProperty(a) &&
                c[a] !== d[a] &&
                (n || (n = {}), (n[a] = d[a]));
          } else n || (s || (s = []), s.push(p, n)), (n = d);
        else
          p === "dangerouslySetInnerHTML"
            ? ((d = d ? d.__html : void 0),
              (c = c ? c.__html : void 0),
              d != null && c !== d && (s = s || []).push(p, d))
            : p === "children"
            ? (typeof d != "string" && typeof d != "number") ||
              (s = s || []).push(p, "" + d)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (sl.hasOwnProperty(p)
                ? (d != null && p === "onScroll" && Ae("scroll", e),
                  s || c === d || (s = []))
                : (s = s || []).push(p, d));
    }
    n && (s = s || []).push("style", n);
    var p = s;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
Nv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bs(e, t) {
  if (!Le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Lw(e, t, n) {
  var r = t.pendingProps;
  switch ((Uf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ct(t), null;
    case 1:
      return Lt(t.type) && _u(), ct(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wo(),
        Pe(Nt),
        Pe(ft),
        Gf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Cn !== null && (cf(Cn), (Cn = null)))),
        tf(e, t),
        ct(t),
        null
      );
    case 5:
      Xf(t);
      var i = Li(_l.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Pv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return ct(t), null;
        }
        if (((e = Li(Un.current)), Fa(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Fn] = t), (r[gl] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ae("cancel", r), Ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ae("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ks.length; i++) Ae(Ks[i], r);
              break;
            case "source":
              Ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ae("error", r), Ae("load", r);
              break;
            case "details":
              Ae("toggle", r);
              break;
            case "input":
              cp(r, s), Ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Ae("invalid", r);
              break;
            case "textarea":
              fp(r, s), Ae("invalid", r);
          }
          Od(n, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var c = s[a];
              a === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (s.suppressHydrationWarning !== !0 &&
                      za(r.textContent, c, e),
                    (i = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (s.suppressHydrationWarning !== !0 &&
                      za(r.textContent, c, e),
                    (i = ["children", "" + c]))
                : sl.hasOwnProperty(a) &&
                  c != null &&
                  a === "onScroll" &&
                  Ae("scroll", r);
            }
          switch (n) {
            case "input":
              Na(r), dp(r, s, !0);
              break;
            case "textarea":
              Na(r), hp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = vu);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = og(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Fn] = t),
            (e[gl] = r),
            Av(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ad(n, r)), n)) {
              case "dialog":
                Ae("cancel", e), Ae("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ks.length; i++) Ae(Ks[i], e);
                i = r;
                break;
              case "source":
                Ae("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Ae("error", e), Ae("load", e), (i = r);
                break;
              case "details":
                Ae("toggle", e), (i = r);
                break;
              case "input":
                cp(e, r), (i = Cd(e, r)), Ae("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Re({}, r, { value: void 0 })),
                  Ae("invalid", e);
                break;
              case "textarea":
                fp(e, r), (i = Sd(e, r)), Ae("invalid", e);
                break;
              default:
                i = r;
            }
            Od(n, i), (c = i);
            for (s in c)
              if (c.hasOwnProperty(s)) {
                var d = c[s];
                s === "style"
                  ? ag(e, d)
                  : s === "dangerouslySetInnerHTML"
                  ? ((d = d ? d.__html : void 0), d != null && sg(e, d))
                  : s === "children"
                  ? typeof d == "string"
                    ? (n !== "textarea" || d !== "") && ll(e, d)
                    : typeof d == "number" && ll(e, "" + d)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (sl.hasOwnProperty(s)
                      ? d != null && s === "onScroll" && Ae("scroll", e)
                      : d != null && Tf(e, s, d, a));
              }
            switch (n) {
              case "input":
                Na(e), dp(e, r, !1);
                break;
              case "textarea":
                Na(e), hp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ti(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Io(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Io(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = vu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) Nv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = Li(_l.current)), Li(Un.current), Fa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fn] = t),
            (s = r.nodeValue !== n) && ((e = Ut), e !== null))
          )
            switch (e.tag) {
              case 3:
                za(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  za(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fn] = t),
            (t.stateNode = r);
      }
      return ct(t), null;
    case 13:
      if (
        (Pe(De),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Le && Bt !== null && t.mode & 1 && !(t.flags & 128))
          Yg(), Uo(), (t.flags |= 98560), (s = !1);
        else if (((s = Fa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(F(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(F(317));
            s[Fn] = t;
          } else
            Uo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ct(t), (s = !1);
        } else Cn !== null && (cf(Cn), (Cn = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || De.current & 1 ? Ge === 0 && (Ge = 3) : uh())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        Wo(), tf(e, t), e === null && pl(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return Qf(t.type._context), ct(t), null;
    case 17:
      return Lt(t.type) && _u(), ct(t), null;
    case 19:
      if ((Pe(De), (s = t.memoizedState), s === null)) return ct(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) Bs(s, !1);
        else {
          if (Ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = bu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Bs(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Te(De, (De.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ve() > Qo &&
            ((t.flags |= 128), (r = !0), Bs(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !Le)
            )
              return ct(t), null;
          } else
            2 * Ve() - s.renderingStartTime > Qo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bs(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ve()),
          (t.sibling = null),
          (n = De.current),
          Te(De, r ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        ah(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ft & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function jw(e, t) {
  switch ((Uf(t), t.tag)) {
    case 1:
      return (
        Lt(t.type) && _u(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wo(),
        Pe(Nt),
        Pe(ft),
        Gf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xf(t), null;
    case 13:
      if (
        (Pe(De), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        Uo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Pe(De), null;
    case 4:
      return Wo(), null;
    case 10:
      return Qf(t.type._context), null;
    case 22:
    case 23:
      return ah(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ha = !1,
  dt = !1,
  Iw = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function Lo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Be(e, t, r);
      }
    else n.current = null;
}
function nf(e, t, n) {
  try {
    n();
  } catch (r) {
    Be(e, t, r);
  }
}
var nm = !1;
function $w(e, t) {
  if (((zd = pu), (e = Dg()), Ff(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            c = -1,
            d = -1,
            p = 0,
            g = 0,
            _ = e,
            E = null;
          t: for (;;) {
            for (
              var T;
              _ !== n || (i !== 0 && _.nodeType !== 3) || (c = a + i),
                _ !== s || (r !== 0 && _.nodeType !== 3) || (d = a + r),
                _.nodeType === 3 && (a += _.nodeValue.length),
                (T = _.firstChild) !== null;

            )
              (E = _), (_ = T);
            for (;;) {
              if (_ === e) break t;
              if (
                (E === n && ++p === i && (c = a),
                E === s && ++g === r && (d = a),
                (T = _.nextSibling) !== null)
              )
                break;
              (_ = E), (E = _.parentNode);
            }
            _ = T;
          }
          n = c === -1 || d === -1 ? null : { start: c, end: d };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fd = { focusedElem: e, selectionRange: n }, pu = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var L = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (L !== null) {
                  var P = L.memoizedProps,
                    j = L.memoizedState,
                    w = t.stateNode,
                    v = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? P : En(t.type, P),
                      j
                    );
                  w.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (S) {
          Be(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (L = nm), (nm = !1), L;
}
function el(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && nf(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Vu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fn], delete t[gl], delete t[Hd], delete t[vw], delete t[_w])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function of(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (of(e, t, n), e = e.sibling; e !== null; ) of(e, t, n), (e = e.sibling);
}
function sf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sf(e, t, n), e = e.sibling; e !== null; ) sf(e, t, n), (e = e.sibling);
}
var ot = null,
  xn = !1;
function Rr(e, t, n) {
  for (n = n.child; n !== null; ) Iv(e, t, n), (n = n.sibling);
}
function Iv(e, t, n) {
  if (Bn && typeof Bn.onCommitFiberUnmount == "function")
    try {
      Bn.onCommitFiberUnmount(Mu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      dt || Lo(n, t);
    case 6:
      var r = ot,
        i = xn;
      (ot = null),
        Rr(e, t, n),
        (ot = r),
        (xn = i),
        ot !== null &&
          (xn
            ? ((e = ot),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ot.removeChild(n.stateNode));
      break;
    case 18:
      ot !== null &&
        (xn
          ? ((e = ot),
            (n = n.stateNode),
            e.nodeType === 8
              ? ld(e.parentNode, n)
              : e.nodeType === 1 && ld(e, n),
            dl(e))
          : ld(ot, n.stateNode));
      break;
    case 4:
      (r = ot),
        (i = xn),
        (ot = n.stateNode.containerInfo),
        (xn = !0),
        Rr(e, t, n),
        (ot = r),
        (xn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !dt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && nf(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Rr(e, t, n);
      break;
    case 1:
      if (
        !dt &&
        (Lo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          Be(n, t, c);
        }
      Rr(e, t, n);
      break;
    case 21:
      Rr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((dt = (r = dt) || n.memoizedState !== null), Rr(e, t, n), (dt = r))
        : Rr(e, t, n);
      break;
    default:
      Rr(e, t, n);
  }
}
function im(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Iw()),
      t.forEach(function (r) {
        var i = Ww.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function wn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          c = a;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (ot = c.stateNode), (xn = !1);
              break e;
            case 3:
              (ot = c.stateNode.containerInfo), (xn = !0);
              break e;
            case 4:
              (ot = c.stateNode.containerInfo), (xn = !0);
              break e;
          }
          c = c.return;
        }
        if (ot === null) throw Error(F(160));
        Iv(s, a, i), (ot = null), (xn = !1);
        var d = i.alternate;
        d !== null && (d.return = null), (i.return = null);
      } catch (p) {
        Be(i, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $v(t, e), (t = t.sibling);
}
function $v(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wn(t, e), Rn(e), r & 4)) {
        try {
          el(3, e, e.return), Vu(3, e);
        } catch (P) {
          Be(e, e.return, P);
        }
        try {
          el(5, e, e.return);
        } catch (P) {
          Be(e, e.return, P);
        }
      }
      break;
    case 1:
      wn(t, e), Rn(e), r & 512 && n !== null && Lo(n, n.return);
      break;
    case 5:
      if (
        (wn(t, e),
        Rn(e),
        r & 512 && n !== null && Lo(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ll(i, "");
        } catch (P) {
          Be(e, e.return, P);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          c = e.type,
          d = e.updateQueue;
        if (((e.updateQueue = null), d !== null))
          try {
            c === "input" && s.type === "radio" && s.name != null && rg(i, s),
              Ad(c, a);
            var p = Ad(c, s);
            for (a = 0; a < d.length; a += 2) {
              var g = d[a],
                _ = d[a + 1];
              g === "style"
                ? ag(i, _)
                : g === "dangerouslySetInnerHTML"
                ? sg(i, _)
                : g === "children"
                ? ll(i, _)
                : Tf(i, g, _, p);
            }
            switch (c) {
              case "input":
                kd(i, s);
                break;
              case "textarea":
                ig(i, s);
                break;
              case "select":
                var E = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var T = s.value;
                T != null
                  ? Io(i, !!s.multiple, T, !1)
                  : E !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Io(i, !!s.multiple, s.defaultValue, !0)
                      : Io(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[gl] = s;
          } catch (P) {
            Be(e, e.return, P);
          }
      }
      break;
    case 6:
      if ((wn(t, e), Rn(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (P) {
          Be(e, e.return, P);
        }
      }
      break;
    case 3:
      if (
        (wn(t, e), Rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          dl(t.containerInfo);
        } catch (P) {
          Be(e, e.return, P);
        }
      break;
    case 4:
      wn(t, e), Rn(e);
      break;
    case 13:
      wn(t, e),
        Rn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sh = Ve())),
        r & 4 && im(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((dt = (p = dt) || g), wn(t, e), (dt = p)) : wn(t, e),
        Rn(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !g && e.mode & 1)
        )
          for (Y = e, g = e.child; g !== null; ) {
            for (_ = Y = g; Y !== null; ) {
              switch (((E = Y), (T = E.child), E.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  el(4, E, E.return);
                  break;
                case 1:
                  Lo(E, E.return);
                  var L = E.stateNode;
                  if (typeof L.componentWillUnmount == "function") {
                    (r = E), (n = E.return);
                    try {
                      (t = r),
                        (L.props = t.memoizedProps),
                        (L.state = t.memoizedState),
                        L.componentWillUnmount();
                    } catch (P) {
                      Be(r, n, P);
                    }
                  }
                  break;
                case 5:
                  Lo(E, E.return);
                  break;
                case 22:
                  if (E.memoizedState !== null) {
                    sm(_);
                    continue;
                  }
              }
              T !== null ? ((T.return = E), (Y = T)) : sm(_);
            }
            g = g.sibling;
          }
        e: for (g = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (g === null) {
              g = _;
              try {
                (i = _.stateNode),
                  p
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((c = _.stateNode),
                      (d = _.memoizedProps.style),
                      (a =
                        d != null && d.hasOwnProperty("display")
                          ? d.display
                          : null),
                      (c.style.display = lg("display", a)));
              } catch (P) {
                Be(e, e.return, P);
              }
            }
          } else if (_.tag === 6) {
            if (g === null)
              try {
                _.stateNode.nodeValue = p ? "" : _.memoizedProps;
              } catch (P) {
                Be(e, e.return, P);
              }
          } else if (
            ((_.tag !== 22 && _.tag !== 23) ||
              _.memoizedState === null ||
              _ === e) &&
            _.child !== null
          ) {
            (_.child.return = _), (_ = _.child);
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            g === _ && (g = null), (_ = _.return);
          }
          g === _ && (g = null), (_.sibling.return = _.return), (_ = _.sibling);
        }
      }
      break;
    case 19:
      wn(t, e), Rn(e), r & 4 && im(e);
      break;
    case 21:
      break;
    default:
      wn(t, e), Rn(e);
  }
}
function Rn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ll(i, ""), (r.flags &= -33));
          var s = rm(e);
          sf(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            c = rm(e);
          of(e, c, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (d) {
      Be(e, e.return, d);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dw(e, t, n) {
  (Y = e), Dv(e);
}
function Dv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Ha;
      if (!a) {
        var c = i.alternate,
          d = (c !== null && c.memoizedState !== null) || dt;
        c = Ha;
        var p = dt;
        if (((Ha = a), (dt = d) && !p))
          for (Y = i; Y !== null; )
            (a = Y),
              (d = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? lm(i)
                : d !== null
                ? ((d.return = a), (Y = d))
                : lm(i);
        for (; s !== null; ) (Y = s), Dv(s), (s = s.sibling);
        (Y = i), (Ha = c), (dt = p);
      }
      om(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (Y = s)) : om(e);
  }
}
function om(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || Vu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !dt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : En(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Hp(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hp(t, a, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var g = p.memoizedState;
                  if (g !== null) {
                    var _ = g.dehydrated;
                    _ !== null && dl(_);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        dt || (t.flags & 512 && rf(t));
      } catch (E) {
        Be(t, t.return, E);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function sm(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function lm(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vu(4, t);
          } catch (d) {
            Be(t, n, d);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (d) {
              Be(t, i, d);
            }
          }
          var s = t.return;
          try {
            rf(t);
          } catch (d) {
            Be(t, s, d);
          }
          break;
        case 5:
          var a = t.return;
          try {
            rf(t);
          } catch (d) {
            Be(t, a, d);
          }
      }
    } catch (d) {
      Be(t, t.return, d);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (Y = c);
      break;
    }
    Y = t.return;
  }
}
var Mw = Math.ceil,
  Ou = _r.ReactCurrentDispatcher,
  ih = _r.ReactCurrentOwner,
  an = _r.ReactCurrentBatchConfig,
  he = 0,
  rt = null,
  Ye = null,
  st = 0,
  Ft = 0,
  jo = ii(0),
  Ge = 0,
  xl = null,
  zi = 0,
  Qu = 0,
  oh = 0,
  tl = null,
  At = null,
  sh = 0,
  Qo = 1 / 0,
  ar = null,
  Au = !1,
  lf = null,
  Gr = null,
  Wa = !1,
  Wr = null,
  Pu = 0,
  nl = 0,
  af = null,
  iu = -1,
  ou = 0;
function kt() {
  return he & 6 ? Ve() : iu !== -1 ? iu : (iu = Ve());
}
function Zr(e) {
  return e.mode & 1
    ? he & 2 && st !== 0
      ? st & -st
      : ww.transition !== null
      ? (ou === 0 && (ou = wg()), ou)
      : ((e = we),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tg(e.type))),
        e)
    : 1;
}
function bn(e, t, n, r) {
  if (50 < nl) throw ((nl = 0), (af = null), Error(F(185)));
  Sl(e, n, r),
    (!(he & 2) || e !== rt) &&
      (e === rt && (!(he & 2) && (Qu |= n), Ge === 4 && Ur(e, st)),
      jt(e, r),
      n === 1 && he === 0 && !(t.mode & 1) && ((Qo = Ve() + 500), Uu && oi()));
}
function jt(e, t) {
  var n = e.callbackNode;
  w0(e, t);
  var r = hu(e, e === rt ? st : 0);
  if (r === 0)
    n !== null && gp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gp(n), t === 1))
      e.tag === 0 ? yw(am.bind(null, e)) : Qg(am.bind(null, e)),
        mw(function () {
          !(he & 6) && oi();
        }),
        (n = null);
    else {
      switch (Eg(r)) {
        case 1:
          n = Lf;
          break;
        case 4:
          n = _g;
          break;
        case 16:
          n = fu;
          break;
        case 536870912:
          n = yg;
          break;
        default:
          n = fu;
      }
      n = Wv(n, Mv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mv(e, t) {
  if (((iu = -1), (ou = 0), he & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (zo() && e.callbackNode !== n) return null;
  var r = hu(e, e === rt ? st : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nu(e, r);
  else {
    t = r;
    var i = he;
    he |= 2;
    var s = zv();
    (rt !== e || st !== t) && ((ar = null), (Qo = Ve() + 500), ji(e, t));
    do
      try {
        Fw();
        break;
      } catch (c) {
        Rv(e, c);
      }
    while (!0);
    Vf(),
      (Ou.current = s),
      (he = i),
      Ye !== null ? (t = 0) : ((rt = null), (st = 0), (t = Ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Id(e)), i !== 0 && ((r = i), (t = uf(e, i)))), t === 1)
    )
      throw ((n = xl), ji(e, 0), Ur(e, r), jt(e, Ve()), n);
    if (t === 6) Ur(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Rw(i) &&
          ((t = Nu(e, r)),
          t === 2 && ((s = Id(e)), s !== 0 && ((r = s), (t = uf(e, s)))),
          t === 1))
      )
        throw ((n = xl), ji(e, 0), Ur(e, r), jt(e, Ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Oi(e, At, ar);
          break;
        case 3:
          if (
            (Ur(e, r), (r & 130023424) === r && ((t = sh + 500 - Ve()), 10 < t))
          ) {
            if (hu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              kt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ud(Oi.bind(null, e, At, ar), t);
            break;
          }
          Oi(e, At, ar);
          break;
        case 4:
          if ((Ur(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - kn(r);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Mw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ud(Oi.bind(null, e, At, ar), r);
            break;
          }
          Oi(e, At, ar);
          break;
        case 5:
          Oi(e, At, ar);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return jt(e, Ve()), e.callbackNode === n ? Mv.bind(null, e) : null;
}
function uf(e, t) {
  var n = tl;
  return (
    e.current.memoizedState.isDehydrated && (ji(e, t).flags |= 256),
    (e = Nu(e, t)),
    e !== 2 && ((t = At), (At = n), t !== null && cf(t)),
    e
  );
}
function cf(e) {
  At === null ? (At = e) : At.push.apply(At, e);
}
function Rw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Sn(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ur(e, t) {
  for (
    t &= ~oh,
      t &= ~Qu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function am(e) {
  if (he & 6) throw Error(F(327));
  zo();
  var t = hu(e, 0);
  if (!(t & 1)) return jt(e, Ve()), null;
  var n = Nu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Id(e);
    r !== 0 && ((t = r), (n = uf(e, r)));
  }
  if (n === 1) throw ((n = xl), ji(e, 0), Ur(e, t), jt(e, Ve()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Oi(e, At, ar),
    jt(e, Ve()),
    null
  );
}
function lh(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    (he = n), he === 0 && ((Qo = Ve() + 500), Uu && oi());
  }
}
function Fi(e) {
  Wr !== null && Wr.tag === 0 && !(he & 6) && zo();
  var t = he;
  he |= 1;
  var n = an.transition,
    r = we;
  try {
    if (((an.transition = null), (we = 1), e)) return e();
  } finally {
    (we = r), (an.transition = n), (he = t), !(he & 6) && oi();
  }
}
function ah() {
  (Ft = jo.current), Pe(jo);
}
function ji(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pw(n)), Ye !== null))
    for (n = Ye.return; n !== null; ) {
      var r = n;
      switch ((Uf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _u();
          break;
        case 3:
          Wo(), Pe(Nt), Pe(ft), Gf();
          break;
        case 5:
          Xf(r);
          break;
        case 4:
          Wo();
          break;
        case 13:
          Pe(De);
          break;
        case 19:
          Pe(De);
          break;
        case 10:
          Qf(r.type._context);
          break;
        case 22:
        case 23:
          ah();
      }
      n = n.return;
    }
  if (
    ((rt = e),
    (Ye = e = Jr(e.current, null)),
    (st = Ft = t),
    (Ge = 0),
    (xl = null),
    (oh = Qu = zi = 0),
    (At = tl = null),
    Ni !== null)
  ) {
    for (t = 0; t < Ni.length; t++)
      if (((n = Ni[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Ni = null;
  }
  return e;
}
function Rv(e, t) {
  do {
    var n = Ye;
    try {
      if ((Vf(), (tu.current = Tu), Su)) {
        for (var r = Me.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Su = !1;
      }
      if (
        ((Ri = 0),
        (nt = Xe = Me = null),
        (Js = !1),
        (yl = 0),
        (ih.current = null),
        n === null || n.return === null)
      ) {
        (Ge = 1), (xl = t), (Ye = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          c = n,
          d = t;
        if (
          ((t = st),
          (c.flags |= 32768),
          d !== null && typeof d == "object" && typeof d.then == "function")
        ) {
          var p = d,
            g = c,
            _ = g.tag;
          if (!(g.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var E = g.alternate;
            E
              ? ((g.updateQueue = E.updateQueue),
                (g.memoizedState = E.memoizedState),
                (g.lanes = E.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var T = Yp(a);
          if (T !== null) {
            (T.flags &= -257),
              Xp(T, a, c, s, t),
              T.mode & 1 && qp(s, p, t),
              (t = T),
              (d = p);
            var L = t.updateQueue;
            if (L === null) {
              var P = new Set();
              P.add(d), (t.updateQueue = P);
            } else L.add(d);
            break e;
          } else {
            if (!(t & 1)) {
              qp(s, p, t), uh();
              break e;
            }
            d = Error(F(426));
          }
        } else if (Le && c.mode & 1) {
          var j = Yp(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Xp(j, a, c, s, t),
              Hf(Vo(d, c));
            break e;
          }
        }
        (s = d = Vo(d, c)),
          Ge !== 4 && (Ge = 2),
          tl === null ? (tl = [s]) : tl.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var w = Ev(s, d, t);
              Up(s, w);
              break e;
            case 1:
              c = d;
              var v = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Gr === null || !Gr.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = xv(s, c, t);
                Up(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Bv(n);
    } catch (I) {
      (t = I), Ye === n && n !== null && (Ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zv() {
  var e = Ou.current;
  return (Ou.current = Tu), e === null ? Tu : e;
}
function uh() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
    rt === null || (!(zi & 268435455) && !(Qu & 268435455)) || Ur(rt, st);
}
function Nu(e, t) {
  var n = he;
  he |= 2;
  var r = zv();
  (rt !== e || st !== t) && ((ar = null), ji(e, t));
  do
    try {
      zw();
      break;
    } catch (i) {
      Rv(e, i);
    }
  while (!0);
  if ((Vf(), (he = n), (Ou.current = r), Ye !== null)) throw Error(F(261));
  return (rt = null), (st = 0), Ge;
}
function zw() {
  for (; Ye !== null; ) Fv(Ye);
}
function Fw() {
  for (; Ye !== null && !d0(); ) Fv(Ye);
}
function Fv(e) {
  var t = Hv(e.alternate, e, Ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bv(e) : (Ye = t),
    (ih.current = null);
}
function Bv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = jw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ge = 6), (Ye = null);
        return;
      }
    } else if (((n = Lw(n, t, Ft)), n !== null)) {
      Ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ye = t;
      return;
    }
    Ye = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function Oi(e, t, n) {
  var r = we,
    i = an.transition;
  try {
    (an.transition = null), (we = 1), Bw(e, t, n, r);
  } finally {
    (an.transition = i), (we = r);
  }
  return null;
}
function Bw(e, t, n, r) {
  do zo();
  while (Wr !== null);
  if (he & 6) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (E0(e, s),
    e === rt && ((Ye = rt = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wa ||
      ((Wa = !0),
      Wv(fu, function () {
        return zo(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = an.transition), (an.transition = null);
    var a = we;
    we = 1;
    var c = he;
    (he |= 4),
      (ih.current = null),
      $w(e, n),
      $v(n, e),
      lw(Fd),
      (pu = !!zd),
      (Fd = zd = null),
      (e.current = n),
      Dw(n),
      f0(),
      (he = c),
      (we = a),
      (an.transition = s);
  } else e.current = n;
  if (
    (Wa && ((Wa = !1), (Wr = e), (Pu = i)),
    (s = e.pendingLanes),
    s === 0 && (Gr = null),
    m0(n.stateNode),
    jt(e, Ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Au) throw ((Au = !1), (e = lf), (lf = null), e);
  return (
    Pu & 1 && e.tag !== 0 && zo(),
    (s = e.pendingLanes),
    s & 1 ? (e === af ? nl++ : ((nl = 0), (af = e))) : (nl = 0),
    oi(),
    null
  );
}
function zo() {
  if (Wr !== null) {
    var e = Eg(Pu),
      t = an.transition,
      n = we;
    try {
      if (((an.transition = null), (we = 16 > e ? 16 : e), Wr === null))
        var r = !1;
      else {
        if (((e = Wr), (Wr = null), (Pu = 0), he & 6)) throw Error(F(331));
        var i = he;
        for (he |= 4, Y = e.current; Y !== null; ) {
          var s = Y,
            a = s.child;
          if (Y.flags & 16) {
            var c = s.deletions;
            if (c !== null) {
              for (var d = 0; d < c.length; d++) {
                var p = c[d];
                for (Y = p; Y !== null; ) {
                  var g = Y;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(8, g, s);
                  }
                  var _ = g.child;
                  if (_ !== null) (_.return = g), (Y = _);
                  else
                    for (; Y !== null; ) {
                      g = Y;
                      var E = g.sibling,
                        T = g.return;
                      if ((Lv(g), g === p)) {
                        Y = null;
                        break;
                      }
                      if (E !== null) {
                        (E.return = T), (Y = E);
                        break;
                      }
                      Y = T;
                    }
                }
              }
              var L = s.alternate;
              if (L !== null) {
                var P = L.child;
                if (P !== null) {
                  L.child = null;
                  do {
                    var j = P.sibling;
                    (P.sibling = null), (P = j);
                  } while (P !== null);
                }
              }
              Y = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (Y = a);
          else
            e: for (; Y !== null; ) {
              if (((s = Y), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    el(9, s, s.return);
                }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (Y = w);
                break e;
              }
              Y = s.return;
            }
        }
        var v = e.current;
        for (Y = v; Y !== null; ) {
          a = Y;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (Y = y);
          else
            e: for (a = v; Y !== null; ) {
              if (((c = Y), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vu(9, c);
                  }
                } catch (I) {
                  Be(c, c.return, I);
                }
              if (c === a) {
                Y = null;
                break e;
              }
              var S = c.sibling;
              if (S !== null) {
                (S.return = c.return), (Y = S);
                break e;
              }
              Y = c.return;
            }
        }
        if (
          ((he = i), oi(), Bn && typeof Bn.onPostCommitFiberRoot == "function")
        )
          try {
            Bn.onPostCommitFiberRoot(Mu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (we = n), (an.transition = t);
    }
  }
  return !1;
}
function um(e, t, n) {
  (t = Vo(n, t)),
    (t = Ev(e, t, 1)),
    (e = Xr(e, t, 1)),
    (t = kt()),
    e !== null && (Sl(e, 1, t), jt(e, t));
}
function Be(e, t, n) {
  if (e.tag === 3) um(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        um(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gr === null || !Gr.has(r)))
        ) {
          (e = Vo(n, e)),
            (e = xv(t, e, 1)),
            (t = Xr(t, e, 1)),
            (e = kt()),
            t !== null && (Sl(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Uw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = kt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    rt === e &&
      (st & n) === n &&
      (Ge === 4 || (Ge === 3 && (st & 130023424) === st && 500 > Ve() - sh)
        ? ji(e, 0)
        : (oh |= n)),
    jt(e, t);
}
function Uv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ia), (Ia <<= 1), !(Ia & 130023424) && (Ia = 4194304))
      : (t = 1));
  var n = kt();
  (e = mr(e, t)), e !== null && (Sl(e, t, n), jt(e, n));
}
function Hw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uv(e, n);
}
function Ww(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Uv(e, n);
}
var Hv;
Hv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Nt.current) Pt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pt = !1), Nw(e, t, n);
      Pt = !!(e.flags & 131072);
    }
  else (Pt = !1), Le && t.flags & 1048576 && Kg(t, Eu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ru(e, t), (e = t.pendingProps);
      var i = Bo(t, ft.current);
      Ro(t, n), (i = Jf(null, t, r, e, i, n));
      var s = eh();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Lt(r) ? ((s = !0), yu(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qf(t),
            (i.updater = Wu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Yd(t, r, e, n),
            (t = Zd(null, t, r, !0, s, n)))
          : ((t.tag = 0), Le && s && Bf(t), Ct(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ru(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Qw(r)),
          (e = En(r, e)),
          i)
        ) {
          case 0:
            t = Gd(null, t, r, e, n);
            break e;
          case 1:
            t = Jp(null, t, r, e, n);
            break e;
          case 11:
            t = Gp(null, t, r, e, n);
            break e;
          case 14:
            t = Zp(null, t, r, En(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : En(r, i)),
        Gd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : En(r, i)),
        Jp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Sv(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Jg(e, t),
          ku(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Vo(Error(F(423)), t)), (t = em(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Vo(Error(F(424)), t)), (t = em(e, t, r, n, i));
            break e;
          } else
            for (
              Bt = Yr(t.stateNode.containerInfo.firstChild),
                Ut = t,
                Le = !0,
                Cn = null,
                n = Gg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Uo(), r === i)) {
            t = gr(e, t, n);
            break e;
          }
          Ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ev(t),
        e === null && Qd(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Bd(r, i) ? (a = null) : s !== null && Bd(r, s) && (t.flags |= 32),
        bv(e, t),
        Ct(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Qd(t), null;
    case 13:
      return Tv(e, t, n);
    case 4:
      return (
        Yf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ho(t, null, r, n)) : Ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : En(r, i)),
        Gp(e, t, r, i, n)
      );
    case 7:
      return Ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          Te(xu, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (Sn(s.value, a)) {
            if (s.children === i.children && !Nt.current) {
              t = gr(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var c = s.dependencies;
              if (c !== null) {
                a = s.child;
                for (var d = c.firstContext; d !== null; ) {
                  if (d.context === r) {
                    if (s.tag === 1) {
                      (d = fr(-1, n & -n)), (d.tag = 2);
                      var p = s.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var g = p.pending;
                        g === null
                          ? (d.next = d)
                          : ((d.next = g.next), (g.next = d)),
                          (p.pending = d);
                      }
                    }
                    (s.lanes |= n),
                      (d = s.alternate),
                      d !== null && (d.lanes |= n),
                      Kd(s.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(F(341));
                (a.lanes |= n),
                  (c = a.alternate),
                  c !== null && (c.lanes |= n),
                  Kd(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Ct(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ro(t, n),
        (i = cn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = En(r, t.pendingProps)),
        (i = En(r.type, i)),
        Zp(e, t, r, i, n)
      );
    case 15:
      return Cv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : En(r, i)),
        ru(e, t),
        (t.tag = 1),
        Lt(r) ? ((e = !0), yu(t)) : (e = !1),
        Ro(t, n),
        wv(t, r, i),
        Yd(t, r, i, n),
        Zd(null, t, r, !0, e, n)
      );
    case 19:
      return Ov(e, t, n);
    case 22:
      return kv(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Wv(e, t) {
  return vg(e, t);
}
function Vw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ln(e, t, n, r) {
  return new Vw(e, t, n, r);
}
function ch(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qw(e) {
  if (typeof e == "function") return ch(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Af)) return 11;
    if (e === Pf) return 14;
  }
  return 2;
}
function Jr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ln(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function su(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) ch(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Co:
        return Ii(n.children, i, s, t);
      case Of:
        (a = 8), (i |= 8);
        break;
      case yd:
        return (
          (e = ln(12, n, t, i | 2)), (e.elementType = yd), (e.lanes = s), e
        );
      case wd:
        return (e = ln(13, n, t, i)), (e.elementType = wd), (e.lanes = s), e;
      case Ed:
        return (e = ln(19, n, t, i)), (e.elementType = Ed), (e.lanes = s), e;
      case eg:
        return Ku(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zm:
              a = 10;
              break e;
            case Jm:
              a = 9;
              break e;
            case Af:
              a = 11;
              break e;
            case Pf:
              a = 14;
              break e;
            case zr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ln(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Ii(e, t, n, r) {
  return (e = ln(7, e, r, t)), (e.lanes = n), e;
}
function Ku(e, t, n, r) {
  return (
    (e = ln(22, e, r, t)),
    (e.elementType = eg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function md(e, t, n) {
  return (e = ln(6, e, null, t)), (e.lanes = n), e;
}
function gd(e, t, n) {
  return (
    (t = ln(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Kw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xc(0)),
    (this.expirationTimes = Xc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function dh(e, t, n, r, i, s, a, c, d) {
  return (
    (e = new Kw(e, t, n, c, d)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ln(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qf(s),
    e
  );
}
function qw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vv(e) {
  if (!e) return ni;
  e = e._reactInternals;
  e: {
    if (Wi(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Lt(n)) return Vg(e, n, t);
  }
  return t;
}
function Qv(e, t, n, r, i, s, a, c, d) {
  return (
    (e = dh(n, r, !0, e, i, s, a, c, d)),
    (e.context = Vv(null)),
    (n = e.current),
    (r = kt()),
    (i = Zr(n)),
    (s = fr(r, i)),
    (s.callback = t ?? null),
    Xr(n, s, i),
    (e.current.lanes = i),
    Sl(e, i, r),
    jt(e, r),
    e
  );
}
function qu(e, t, n, r) {
  var i = t.current,
    s = kt(),
    a = Zr(i);
  return (
    (n = Vv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = fr(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xr(i, t, a)),
    e !== null && (bn(e, i, a, s), eu(e, i, a)),
    a
  );
}
function Lu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fh(e, t) {
  cm(e, t), (e = e.alternate) && cm(e, t);
}
function Yw() {
  return null;
}
var Kv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function hh(e) {
  this._internalRoot = e;
}
Yu.prototype.render = hh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  qu(e, t, null, null);
};
Yu.prototype.unmount = hh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fi(function () {
      qu(null, e, null, null);
    }),
      (t[pr] = null);
  }
};
function Yu(e) {
  this._internalRoot = e;
}
Yu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++);
    Br.splice(n, 0, e), n === 0 && Sg(e);
  }
};
function ph(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function dm() {}
function Xw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var p = Lu(a);
        s.call(p);
      };
    }
    var a = Qv(t, r, e, 0, null, !1, !1, "", dm);
    return (
      (e._reactRootContainer = a),
      (e[pr] = a.current),
      pl(e.nodeType === 8 ? e.parentNode : e),
      Fi(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var p = Lu(d);
      c.call(p);
    };
  }
  var d = dh(e, 0, !1, null, null, !1, !1, "", dm);
  return (
    (e._reactRootContainer = d),
    (e[pr] = d.current),
    pl(e.nodeType === 8 ? e.parentNode : e),
    Fi(function () {
      qu(t, d, n, r);
    }),
    d
  );
}
function Gu(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var c = i;
      i = function () {
        var d = Lu(a);
        c.call(d);
      };
    }
    qu(t, a, e, i);
  } else a = Xw(n, t, e, i, r);
  return Lu(a);
}
xg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qs(t.pendingLanes);
        n !== 0 &&
          (jf(t, n | 1), jt(t, Ve()), !(he & 6) && ((Qo = Ve() + 500), oi()));
      }
      break;
    case 13:
      Fi(function () {
        var r = mr(e, 1);
        if (r !== null) {
          var i = kt();
          bn(r, e, 1, i);
        }
      }),
        fh(e, 1);
  }
};
If = function (e) {
  if (e.tag === 13) {
    var t = mr(e, 134217728);
    if (t !== null) {
      var n = kt();
      bn(t, e, 134217728, n);
    }
    fh(e, 134217728);
  }
};
Cg = function (e) {
  if (e.tag === 13) {
    var t = Zr(e),
      n = mr(e, t);
    if (n !== null) {
      var r = kt();
      bn(n, e, t, r);
    }
    fh(e, t);
  }
};
kg = function () {
  return we;
};
bg = function (e, t) {
  var n = we;
  try {
    return (we = e), t();
  } finally {
    we = n;
  }
};
Nd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Bu(r);
            if (!i) throw Error(F(90));
            ng(r), kd(r, i);
          }
        }
      }
      break;
    case "textarea":
      ig(e, n);
      break;
    case "select":
      (t = n.value), t != null && Io(e, !!n.multiple, t, !1);
  }
};
dg = lh;
fg = Fi;
var Gw = { usingClientEntryPoint: !1, Events: [Ol, To, Bu, ug, cg, lh] },
  Us = {
    findFiberByHostInstance: Pi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Zw = {
    bundleType: Us.bundleType,
    version: Us.version,
    rendererPackageName: Us.rendererPackageName,
    rendererConfig: Us.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _r.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Us.findFiberByHostInstance || Yw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Va.isDisabled && Va.supportsFiber)
    try {
      (Mu = Va.inject(Zw)), (Bn = Va);
    } catch {}
}
Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gw;
Kt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ph(t)) throw Error(F(200));
  return qw(e, t, null, n);
};
Kt.createRoot = function (e, t) {
  if (!ph(e)) throw Error(F(299));
  var n = !1,
    r = "",
    i = Kv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = dh(e, 1, !1, null, null, n, !1, r, i)),
    (e[pr] = t.current),
    pl(e.nodeType === 8 ? e.parentNode : e),
    new hh(t)
  );
};
Kt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = mg(t)), (e = e === null ? null : e.stateNode), e;
};
Kt.flushSync = function (e) {
  return Fi(e);
};
Kt.hydrate = function (e, t, n) {
  if (!Xu(t)) throw Error(F(200));
  return Gu(null, e, t, !0, n);
};
Kt.hydrateRoot = function (e, t, n) {
  if (!ph(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    a = Kv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Qv(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[pr] = t.current),
    pl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Yu(t);
};
Kt.render = function (e, t, n) {
  if (!Xu(t)) throw Error(F(200));
  return Gu(null, e, t, !1, n);
};
Kt.unmountComponentAtNode = function (e) {
  if (!Xu(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (Fi(function () {
        Gu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pr] = null);
        });
      }),
      !0)
    : !1;
};
Kt.unstable_batchedUpdates = lh;
Kt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xu(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return Gu(e, t, n, !1, r);
};
Kt.version = "18.3.1-next-f1338f8080-20240426";
function qv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv);
    } catch (e) {
      console.error(e);
    }
}
qv(), (qm.exports = Kt);
var Jw = qm.exports,
  Yv,
  fm = Jw;
(Yv = fm.createRoot), fm.hydrateRoot;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cl() {
  return (
    (Cl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cl.apply(this, arguments)
  );
}
var Vr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Vr || (Vr = {}));
const hm = "popstate";
function e1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: a, hash: c } = r.location;
    return df(
      "",
      { pathname: s, search: a, hash: c },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ju(i);
  }
  return n1(t, n, null, e);
}
function Qe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function t1() {
  return Math.random().toString(36).substr(2, 8);
}
function pm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function df(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Cl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ts(t) : t,
      { state: n, key: (t && t.key) || r || t1() }
    )
  );
}
function ju(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ts(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function n1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    a = i.history,
    c = Vr.Pop,
    d = null,
    p = g();
  p == null && ((p = 0), a.replaceState(Cl({}, a.state, { idx: p }), ""));
  function g() {
    return (a.state || { idx: null }).idx;
  }
  function _() {
    c = Vr.Pop;
    let j = g(),
      w = j == null ? null : j - p;
    (p = j), d && d({ action: c, location: P.location, delta: w });
  }
  function E(j, w) {
    c = Vr.Push;
    let v = df(P.location, j, w);
    p = g() + 1;
    let y = pm(v, p),
      S = P.createHref(v);
    try {
      a.pushState(y, "", S);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      i.location.assign(S);
    }
    s && d && d({ action: c, location: P.location, delta: 1 });
  }
  function T(j, w) {
    c = Vr.Replace;
    let v = df(P.location, j, w);
    p = g();
    let y = pm(v, p),
      S = P.createHref(v);
    a.replaceState(y, "", S),
      s && d && d({ action: c, location: P.location, delta: 0 });
  }
  function L(j) {
    let w = i.location.origin !== "null" ? i.location.origin : i.location.href,
      v = typeof j == "string" ? j : ju(j);
    return (
      (v = v.replace(/ $/, "%20")),
      Qe(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, w)
    );
  }
  let P = {
    get action() {
      return c;
    },
    get location() {
      return e(i, a);
    },
    listen(j) {
      if (d) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(hm, _),
        (d = j),
        () => {
          i.removeEventListener(hm, _), (d = null);
        }
      );
    },
    createHref(j) {
      return t(i, j);
    },
    createURL: L,
    encodeLocation(j) {
      let w = L(j);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: E,
    replace: T,
    go(j) {
      return a.go(j);
    },
  };
  return P;
}
var mm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(mm || (mm = {}));
function r1(e, t, n) {
  return n === void 0 && (n = "/"), i1(e, t, n, !1);
}
function i1(e, t, n, r) {
  let i = typeof t == "string" ? ts(t) : t,
    s = mh(i.pathname || "/", n);
  if (s == null) return null;
  let a = Gv(e);
  o1(a);
  let c = null;
  for (let d = 0; c == null && d < a.length; ++d) {
    let p = g1(s);
    c = p1(a[d], p, r);
  }
  return c;
}
function Gv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, a, c) => {
    let d = {
      relativePath: c === void 0 ? s.path || "" : c,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    d.relativePath.startsWith("/") &&
      (Qe(
        d.relativePath.startsWith(r),
        'Absolute route path "' +
          d.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (d.relativePath = d.relativePath.slice(r.length)));
    let p = ei([r, d.relativePath]),
      g = n.concat(d);
    s.children &&
      s.children.length > 0 &&
      (Qe(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      Gv(s.children, t, g, p)),
      !(s.path == null && !s.index) &&
        t.push({ path: p, score: f1(p, s.index), routesMeta: g });
  };
  return (
    e.forEach((s, a) => {
      var c;
      if (s.path === "" || !((c = s.path) != null && c.includes("?"))) i(s, a);
      else for (let d of Zv(s.path)) i(s, a, d);
    }),
    t
  );
}
function Zv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let a = Zv(r.join("/")),
    c = [];
  return (
    c.push(...a.map((d) => (d === "" ? s : [s, d].join("/")))),
    i && c.push(...a),
    c.map((d) => (e.startsWith("/") && d === "" ? "/" : d))
  );
}
function o1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : h1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const s1 = /^:[\w-]+$/,
  l1 = 3,
  a1 = 2,
  u1 = 1,
  c1 = 10,
  d1 = -2,
  gm = (e) => e === "*";
function f1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(gm) && (r += d1),
    t && (r += a1),
    n
      .filter((i) => !gm(i))
      .reduce((i, s) => i + (s1.test(s) ? l1 : s === "" ? u1 : c1), r)
  );
}
function h1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function p1(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    a = [];
  for (let c = 0; c < r.length; ++c) {
    let d = r[c],
      p = c === r.length - 1,
      g = s === "/" ? t : t.slice(s.length) || "/",
      _ = vm(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: p },
        g
      ),
      E = d.route;
    if (
      (!_ &&
        p &&
        n &&
        !r[r.length - 1].route.index &&
        (_ = vm(
          { path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 },
          g
        )),
      !_)
    )
      return null;
    Object.assign(i, _.params),
      a.push({
        params: i,
        pathname: ei([s, _.pathname]),
        pathnameBase: w1(ei([s, _.pathnameBase])),
        route: E,
      }),
      _.pathnameBase !== "/" && (s = ei([s, _.pathnameBase]));
  }
  return a;
}
function vm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = m1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, "$1"),
    c = i.slice(1);
  return {
    params: r.reduce((p, g, _) => {
      let { paramName: E, isOptional: T } = g;
      if (E === "*") {
        let P = c[_] || "";
        a = s.slice(0, s.length - P.length).replace(/(.)\/+$/, "$1");
      }
      const L = c[_];
      return (
        T && !L ? (p[E] = void 0) : (p[E] = (L || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function m1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Xv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, c, d) => (
            r.push({ paramName: c, isOptional: d != null }),
            d ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function g1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Xv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function mh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function v1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? ts(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : _1(n, t)) : t,
    search: E1(r),
    hash: x1(i),
  };
}
function _1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function y1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function gh(e, t) {
  let n = y1(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function vh(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = ts(e))
    : ((i = Cl({}, e)),
      Qe(
        !i.pathname || !i.pathname.includes("?"),
        vd("?", "pathname", "search", i)
      ),
      Qe(
        !i.pathname || !i.pathname.includes("#"),
        vd("#", "pathname", "hash", i)
      ),
      Qe(!i.search || !i.search.includes("#"), vd("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    a = s ? "/" : i.pathname,
    c;
  if (a == null) c = n;
  else {
    let _ = t.length - 1;
    if (!r && a.startsWith("..")) {
      let E = a.split("/");
      for (; E[0] === ".."; ) E.shift(), (_ -= 1);
      i.pathname = E.join("/");
    }
    c = _ >= 0 ? t[_] : "/";
  }
  let d = v1(i, c),
    p = a && a !== "/" && a.endsWith("/"),
    g = (s || a === ".") && n.endsWith("/");
  return !d.pathname.endsWith("/") && (p || g) && (d.pathname += "/"), d;
}
const ei = (e) => e.join("/").replace(/\/\/+/g, "/"),
  w1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  E1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  x1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function C1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Jv = ["post", "put", "patch", "delete"];
new Set(Jv);
const k1 = ["get", ...Jv];
new Set(k1);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kl() {
  return (
    (kl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kl.apply(this, arguments)
  );
}
const _h = R.createContext(null),
  b1 = R.createContext(null),
  si = R.createContext(null),
  Zu = R.createContext(null),
  li = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  e_ = R.createContext(null);
function S1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ns() || Qe(!1);
  let { basename: r, navigator: i } = R.useContext(si),
    { hash: s, pathname: a, search: c } = r_(e, { relative: n }),
    d = a;
  return (
    r !== "/" && (d = a === "/" ? r : ei([r, a])),
    i.createHref({ pathname: d, search: c, hash: s })
  );
}
function ns() {
  return R.useContext(Zu) != null;
}
function Pl() {
  return ns() || Qe(!1), R.useContext(Zu).location;
}
function t_(e) {
  R.useContext(si).static || R.useLayoutEffect(e);
}
function n_() {
  let { isDataRoute: e } = R.useContext(li);
  return e ? z1() : T1();
}
function T1() {
  ns() || Qe(!1);
  let e = R.useContext(_h),
    { basename: t, future: n, navigator: r } = R.useContext(si),
    { matches: i } = R.useContext(li),
    { pathname: s } = Pl(),
    a = JSON.stringify(gh(i, n.v7_relativeSplatPath)),
    c = R.useRef(!1);
  return (
    t_(() => {
      c.current = !0;
    }),
    R.useCallback(
      function (p, g) {
        if ((g === void 0 && (g = {}), !c.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let _ = vh(p, JSON.parse(a), s, g.relative === "path");
        e == null &&
          t !== "/" &&
          (_.pathname = _.pathname === "/" ? t : ei([t, _.pathname])),
          (g.replace ? r.replace : r.push)(_, g.state, g);
      },
      [t, r, a, s, e]
    )
  );
}
function r_(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = R.useContext(si),
    { matches: i } = R.useContext(li),
    { pathname: s } = Pl(),
    a = JSON.stringify(gh(i, r.v7_relativeSplatPath));
  return R.useMemo(() => vh(e, JSON.parse(a), s, n === "path"), [e, a, s, n]);
}
function O1(e, t) {
  return A1(e, t);
}
function A1(e, t, n, r) {
  ns() || Qe(!1);
  let { navigator: i } = R.useContext(si),
    { matches: s } = R.useContext(li),
    a = s[s.length - 1],
    c = a ? a.params : {};
  a && a.pathname;
  let d = a ? a.pathnameBase : "/";
  a && a.route;
  let p = Pl(),
    g;
  if (t) {
    var _;
    let j = typeof t == "string" ? ts(t) : t;
    d === "/" || ((_ = j.pathname) != null && _.startsWith(d)) || Qe(!1),
      (g = j);
  } else g = p;
  let E = g.pathname || "/",
    T = E;
  if (d !== "/") {
    let j = d.replace(/^\//, "").split("/");
    T = "/" + E.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let L = r1(e, { pathname: T }),
    P = I1(
      L &&
        L.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, c, j.params),
            pathname: ei([
              d,
              i.encodeLocation
                ? i.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? d
                : ei([
                    d,
                    i.encodeLocation
                      ? i.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && P
    ? R.createElement(
        Zu.Provider,
        {
          value: {
            location: kl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: Vr.Pop,
          },
        },
        P
      )
    : P;
}
function P1() {
  let e = R1(),
    t = C1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: i }, n) : null,
    null
  );
}
const N1 = R.createElement(P1, null);
class L1 extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          li.Provider,
          { value: this.props.routeContext },
          R.createElement(e_.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function j1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext(_h);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(li.Provider, { value: t }, r)
  );
}
function I1(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    c = (i = n) == null ? void 0 : i.errors;
  if (c != null) {
    let g = a.findIndex(
      (_) => _.route.id && (c == null ? void 0 : c[_.route.id]) !== void 0
    );
    g >= 0 || Qe(!1), (a = a.slice(0, Math.min(a.length, g + 1)));
  }
  let d = !1,
    p = -1;
  if (n && r && r.v7_partialHydration)
    for (let g = 0; g < a.length; g++) {
      let _ = a[g];
      if (
        ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (p = g),
        _.route.id)
      ) {
        let { loaderData: E, errors: T } = n,
          L =
            _.route.loader &&
            E[_.route.id] === void 0 &&
            (!T || T[_.route.id] === void 0);
        if (_.route.lazy || L) {
          (d = !0), p >= 0 ? (a = a.slice(0, p + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((g, _, E) => {
    let T,
      L = !1,
      P = null,
      j = null;
    n &&
      ((T = c && _.route.id ? c[_.route.id] : void 0),
      (P = _.route.errorElement || N1),
      d &&
        (p < 0 && E === 0
          ? ((L = !0), (j = null))
          : p === E &&
            ((L = !0), (j = _.route.hydrateFallbackElement || null))));
    let w = t.concat(a.slice(0, E + 1)),
      v = () => {
        let y;
        return (
          T
            ? (y = P)
            : L
            ? (y = j)
            : _.route.Component
            ? (y = R.createElement(_.route.Component, null))
            : _.route.element
            ? (y = _.route.element)
            : (y = g),
          R.createElement(j1, {
            match: _,
            routeContext: { outlet: g, matches: w, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (_.route.ErrorBoundary || _.route.errorElement || E === 0)
      ? R.createElement(L1, {
          location: n.location,
          revalidation: n.revalidation,
          component: P,
          error: T,
          children: v(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var i_ = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(i_ || {}),
  Iu = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Iu || {});
function $1(e) {
  let t = R.useContext(_h);
  return t || Qe(!1), t;
}
function D1(e) {
  let t = R.useContext(b1);
  return t || Qe(!1), t;
}
function M1(e) {
  let t = R.useContext(li);
  return t || Qe(!1), t;
}
function o_(e) {
  let t = M1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Qe(!1), n.route.id;
}
function R1() {
  var e;
  let t = R.useContext(e_),
    n = D1(Iu.UseRouteError),
    r = o_(Iu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function z1() {
  let { router: e } = $1(i_.UseNavigateStable),
    t = o_(Iu.UseNavigateStable),
    n = R.useRef(!1);
  return (
    t_(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, kl({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function _m(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  ns() || Qe(!1);
  let { future: s, static: a } = R.useContext(si),
    { matches: c } = R.useContext(li),
    { pathname: d } = Pl(),
    p = n_(),
    g = vh(t, gh(c, s.v7_relativeSplatPath), d, i === "path"),
    _ = JSON.stringify(g);
  return (
    R.useEffect(
      () => p(JSON.parse(_), { replace: n, state: r, relative: i }),
      [p, _, i, n, r]
    ),
    null
  );
}
function lu(e) {
  Qe(!1);
}
function F1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Vr.Pop,
    navigator: s,
    static: a = !1,
    future: c,
  } = e;
  ns() && Qe(!1);
  let d = t.replace(/^\/*/, "/"),
    p = R.useMemo(
      () => ({
        basename: d,
        navigator: s,
        static: a,
        future: kl({ v7_relativeSplatPath: !1 }, c),
      }),
      [d, c, s, a]
    );
  typeof r == "string" && (r = ts(r));
  let {
      pathname: g = "/",
      search: _ = "",
      hash: E = "",
      state: T = null,
      key: L = "default",
    } = r,
    P = R.useMemo(() => {
      let j = mh(g, d);
      return j == null
        ? null
        : {
            location: { pathname: j, search: _, hash: E, state: T, key: L },
            navigationType: i,
          };
    }, [d, g, _, E, T, L, i]);
  return P == null
    ? null
    : R.createElement(
        si.Provider,
        { value: p },
        R.createElement(Zu.Provider, { children: n, value: P })
      );
}
function B1(e) {
  let { children: t, location: n } = e;
  return O1(ff(t), n);
}
new Promise(() => {});
function ff(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    R.Children.forEach(e, (r, i) => {
      if (!R.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === R.Fragment) {
        n.push.apply(n, ff(r.props.children, s));
        return;
      }
      r.type !== lu && Qe(!1), !r.props.index || !r.props.children || Qe(!1);
      let a = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = ff(r.props.children, s)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hf() {
  return (
    (hf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hf.apply(this, arguments)
  );
}
function U1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function H1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function W1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !H1(e);
}
const V1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Q1 = "6";
try {
  window.__reactRouterVersion = Q1;
} catch {}
const K1 = "startTransition",
  ym = Uy[K1];
function q1(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = R.useRef();
  s.current == null && (s.current = e1({ window: i, v5Compat: !0 }));
  let a = s.current,
    [c, d] = R.useState({ action: a.action, location: a.location }),
    { v7_startTransition: p } = r || {},
    g = R.useCallback(
      (_) => {
        p && ym ? ym(() => d(_)) : d(_);
      },
      [d, p]
    );
  return (
    R.useLayoutEffect(() => a.listen(g), [a, g]),
    R.createElement(F1, {
      basename: t,
      children: n,
      location: c.location,
      navigationType: c.action,
      navigator: a,
      future: r,
    })
  );
}
const Y1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  X1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rl = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: c,
        target: d,
        to: p,
        preventScrollReset: g,
        unstable_viewTransition: _,
      } = t,
      E = U1(t, V1),
      { basename: T } = R.useContext(si),
      L,
      P = !1;
    if (typeof p == "string" && X1.test(p) && ((L = p), Y1))
      try {
        let y = new URL(window.location.href),
          S = p.startsWith("//") ? new URL(y.protocol + p) : new URL(p),
          I = mh(S.pathname, T);
        S.origin === y.origin && I != null
          ? (p = I + S.search + S.hash)
          : (P = !0);
      } catch {}
    let j = S1(p, { relative: i }),
      w = G1(p, {
        replace: a,
        state: c,
        target: d,
        preventScrollReset: g,
        relative: i,
        unstable_viewTransition: _,
      });
    function v(y) {
      r && r(y), y.defaultPrevented || w(y);
    }
    return R.createElement(
      "a",
      hf({}, E, { href: L || j, onClick: P || s ? r : v, ref: n, target: d })
    );
  });
var wm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(wm || (wm = {}));
var Em;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Em || (Em = {}));
function G1(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: a,
      unstable_viewTransition: c,
    } = t === void 0 ? {} : t,
    d = n_(),
    p = Pl(),
    g = r_(e, { relative: a });
  return R.useCallback(
    (_) => {
      if (W1(_, n)) {
        _.preventDefault();
        let E = r !== void 0 ? r : ju(p) === ju(g);
        d(e, {
          replace: E,
          state: i,
          preventScrollReset: s,
          relative: a,
          unstable_viewTransition: c,
        });
      }
    },
    [p, d, g, r, i, n, e, s, a, c]
  );
}
var Z1 = { exports: {} };
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Im, function () {
    const n = new Map(),
      r = {
        set(f, o, u) {
          n.has(f) || n.set(f, new Map());
          const m = n.get(f);
          m.has(o) || m.size === 0
            ? m.set(o, u)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(m.keys())[0]
                }.`
              );
        },
        get: (f, o) => (n.has(f) && n.get(f).get(o)) || null,
        remove(f, o) {
          if (!n.has(f)) return;
          const u = n.get(f);
          u.delete(o), u.size === 0 && n.delete(f);
        },
      },
      i = "transitionend",
      s = (f) => (
        f &&
          window.CSS &&
          window.CSS.escape &&
          (f = f.replace(/#([^\s"#']+)/g, (o, u) => `#${CSS.escape(u)}`)),
        f
      ),
      a = (f) => {
        f.dispatchEvent(new Event(i));
      },
      c = (f) =>
        !(!f || typeof f != "object") &&
        (f.jquery !== void 0 && (f = f[0]), f.nodeType !== void 0),
      d = (f) =>
        c(f)
          ? f.jquery
            ? f[0]
            : f
          : typeof f == "string" && f.length > 0
          ? document.querySelector(s(f))
          : null,
      p = (f) => {
        if (!c(f) || f.getClientRects().length === 0) return !1;
        const o =
            getComputedStyle(f).getPropertyValue("visibility") === "visible",
          u = f.closest("details:not([open])");
        if (!u) return o;
        if (u !== f) {
          const m = f.closest("summary");
          if ((m && m.parentNode !== u) || m === null) return !1;
        }
        return o;
      },
      g = (f) =>
        !f ||
        f.nodeType !== Node.ELEMENT_NODE ||
        !!f.classList.contains("disabled") ||
        (f.disabled !== void 0
          ? f.disabled
          : f.hasAttribute("disabled") &&
            f.getAttribute("disabled") !== "false"),
      _ = (f) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof f.getRootNode == "function") {
          const o = f.getRootNode();
          return o instanceof ShadowRoot ? o : null;
        }
        return f instanceof ShadowRoot
          ? f
          : f.parentNode
          ? _(f.parentNode)
          : null;
      },
      E = () => {},
      T = (f) => {
        f.offsetHeight;
      },
      L = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      P = [],
      j = () => document.documentElement.dir === "rtl",
      w = (f) => {
        var o;
        (o = () => {
          const u = L();
          if (u) {
            const m = f.NAME,
              k = u.fn[m];
            (u.fn[m] = f.jQueryInterface),
              (u.fn[m].Constructor = f),
              (u.fn[m].noConflict = () => ((u.fn[m] = k), f.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (P.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const u of P) u();
                }),
              P.push(o))
            : o();
      },
      v = (f, o = [], u = f) => (typeof f == "function" ? f(...o) : u),
      y = (f, o, u = !0) => {
        if (!u) return void v(f);
        const m =
          ((N) => {
            if (!N) return 0;
            let { transitionDuration: M, transitionDelay: W } =
              window.getComputedStyle(N);
            const q = Number.parseFloat(M),
              G = Number.parseFloat(W);
            return q || G
              ? ((M = M.split(",")[0]),
                (W = W.split(",")[0]),
                1e3 * (Number.parseFloat(M) + Number.parseFloat(W)))
              : 0;
          })(o) + 5;
        let k = !1;
        const b = ({ target: N }) => {
          N === o && ((k = !0), o.removeEventListener(i, b), v(f));
        };
        o.addEventListener(i, b),
          setTimeout(() => {
            k || a(o);
          }, m);
      },
      S = (f, o, u, m) => {
        const k = f.length;
        let b = f.indexOf(o);
        return b === -1
          ? !u && m
            ? f[k - 1]
            : f[0]
          : ((b += u ? 1 : -1),
            m && (b = (b + k) % k),
            f[Math.max(0, Math.min(b, k - 1))]);
      },
      I = /[^.]*(?=\..*)\.|.*/,
      z = /\..*/,
      B = /::\d+$/,
      U = {};
    let re = 1;
    const Z = { mouseenter: "mouseover", mouseleave: "mouseout" },
      fe = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function je(f, o) {
      return (o && `${o}::${re++}`) || f.uidEvent || re++;
    }
    function ke(f) {
      const o = je(f);
      return (f.uidEvent = o), (U[o] = U[o] || {}), U[o];
    }
    function ht(f, o, u = null) {
      return Object.values(f).find(
        (m) => m.callable === o && m.delegationSelector === u
      );
    }
    function pt(f, o, u) {
      const m = typeof o == "string",
        k = m ? u : o || u;
      let b = ee(f);
      return fe.has(b) || (b = f), [m, k, b];
    }
    function Ie(f, o, u, m, k) {
      if (typeof o != "string" || !f) return;
      let [b, N, M] = pt(o, u, m);
      o in Z &&
        (N = ((ie) =>
          function (ne) {
            if (
              !ne.relatedTarget ||
              (ne.relatedTarget !== ne.delegateTarget &&
                !ne.delegateTarget.contains(ne.relatedTarget))
            )
              return ie.call(this, ne);
          })(N));
      const W = ke(f),
        q = W[M] || (W[M] = {}),
        G = ht(q, N, b ? u : null);
      if (G) return void (G.oneOff = G.oneOff && k);
      const Q = je(N, o.replace(I, "")),
        se = b
          ? (function (te, ie, ne) {
              return function oe(xe) {
                const Se = te.querySelectorAll(ie);
                for (
                  let { target: ae } = xe;
                  ae && ae !== this;
                  ae = ae.parentNode
                )
                  for (const me of Se)
                    if (me === ae)
                      return (
                        pe(xe, { delegateTarget: ae }),
                        oe.oneOff && A.off(te, xe.type, ie, ne),
                        ne.apply(ae, [xe])
                      );
              };
            })(f, u, N)
          : (function (te, ie) {
              return function ne(oe) {
                return (
                  pe(oe, { delegateTarget: te }),
                  ne.oneOff && A.off(te, oe.type, ie),
                  ie.apply(te, [oe])
                );
              };
            })(f, N);
      (se.delegationSelector = b ? u : null),
        (se.callable = N),
        (se.oneOff = k),
        (se.uidEvent = Q),
        (q[Q] = se),
        f.addEventListener(M, se, b);
    }
    function ze(f, o, u, m, k) {
      const b = ht(o[u], m, k);
      b && (f.removeEventListener(u, b, !!k), delete o[u][b.uidEvent]);
    }
    function V(f, o, u, m) {
      const k = o[u] || {};
      for (const [b, N] of Object.entries(k))
        b.includes(m) && ze(f, o, u, N.callable, N.delegationSelector);
    }
    function ee(f) {
      return (f = f.replace(z, "")), Z[f] || f;
    }
    const A = {
      on(f, o, u, m) {
        Ie(f, o, u, m, !1);
      },
      one(f, o, u, m) {
        Ie(f, o, u, m, !0);
      },
      off(f, o, u, m) {
        if (typeof o != "string" || !f) return;
        const [k, b, N] = pt(o, u, m),
          M = N !== o,
          W = ke(f),
          q = W[N] || {},
          G = o.startsWith(".");
        if (b === void 0) {
          if (G) for (const Q of Object.keys(W)) V(f, W, Q, o.slice(1));
          for (const [Q, se] of Object.entries(q)) {
            const te = Q.replace(B, "");
            (M && !o.includes(te)) ||
              ze(f, W, N, se.callable, se.delegationSelector);
          }
        } else {
          if (!Object.keys(q).length) return;
          ze(f, W, N, b, k ? u : null);
        }
      },
      trigger(f, o, u) {
        if (typeof o != "string" || !f) return null;
        const m = L();
        let k = null,
          b = !0,
          N = !0,
          M = !1;
        o !== ee(o) &&
          m &&
          ((k = m.Event(o, u)),
          m(f).trigger(k),
          (b = !k.isPropagationStopped()),
          (N = !k.isImmediatePropagationStopped()),
          (M = k.isDefaultPrevented()));
        const W = pe(new Event(o, { bubbles: b, cancelable: !0 }), u);
        return (
          M && W.preventDefault(),
          N && f.dispatchEvent(W),
          W.defaultPrevented && k && k.preventDefault(),
          W
        );
      },
    };
    function pe(f, o = {}) {
      for (const [u, m] of Object.entries(o))
        try {
          f[u] = m;
        } catch {
          Object.defineProperty(f, u, { configurable: !0, get: () => m });
        }
      return f;
    }
    function ge(f) {
      if (f === "true") return !0;
      if (f === "false") return !1;
      if (f === Number(f).toString()) return Number(f);
      if (f === "" || f === "null") return null;
      if (typeof f != "string") return f;
      try {
        return JSON.parse(decodeURIComponent(f));
      } catch {
        return f;
      }
    }
    function D(f) {
      return f.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`);
    }
    const Ee = {
      setDataAttribute(f, o, u) {
        f.setAttribute(`data-bs-${D(o)}`, u);
      },
      removeDataAttribute(f, o) {
        f.removeAttribute(`data-bs-${D(o)}`);
      },
      getDataAttributes(f) {
        if (!f) return {};
        const o = {},
          u = Object.keys(f.dataset).filter(
            (m) => m.startsWith("bs") && !m.startsWith("bsConfig")
          );
        for (const m of u) {
          let k = m.replace(/^bs/, "");
          (k = k.charAt(0).toLowerCase() + k.slice(1, k.length)),
            (o[k] = ge(f.dataset[m]));
        }
        return o;
      },
      getDataAttribute: (f, o) => ge(f.getAttribute(`data-bs-${D(o)}`)),
    };
    class Ue {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(o) {
        return (
          (o = this._mergeConfigObj(o)),
          (o = this._configAfterMerge(o)),
          this._typeCheckConfig(o),
          o
        );
      }
      _configAfterMerge(o) {
        return o;
      }
      _mergeConfigObj(o, u) {
        const m = c(u) ? Ee.getDataAttribute(u, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof m == "object" ? m : {}),
          ...(c(u) ? Ee.getDataAttributes(u) : {}),
          ...(typeof o == "object" ? o : {}),
        };
      }
      _typeCheckConfig(o, u = this.constructor.DefaultType) {
        for (const [k, b] of Object.entries(u)) {
          const N = o[k],
            M = c(N)
              ? "element"
              : (m = N) == null
              ? `${m}`
              : Object.prototype.toString
                  .call(m)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(b).test(M))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${k}" provided type "${M}" but expected type "${b}".`
            );
        }
        var m;
      }
    }
    class ve extends Ue {
      constructor(o, u) {
        super(),
          (o = d(o)) &&
            ((this._element = o),
            (this._config = this._getConfig(u)),
            r.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        r.remove(this._element, this.constructor.DATA_KEY),
          A.off(this._element, this.constructor.EVENT_KEY);
        for (const o of Object.getOwnPropertyNames(this)) this[o] = null;
      }
      _queueCallback(o, u, m = !0) {
        y(o, u, m);
      }
      _getConfig(o) {
        return (
          (o = this._mergeConfigObj(o, this._element)),
          (o = this._configAfterMerge(o)),
          this._typeCheckConfig(o),
          o
        );
      }
      static getInstance(o) {
        return r.get(d(o), this.DATA_KEY);
      }
      static getOrCreateInstance(o, u = {}) {
        return (
          this.getInstance(o) || new this(o, typeof u == "object" ? u : null)
        );
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(o) {
        return `${o}${this.EVENT_KEY}`;
      }
    }
    const $e = (f) => {
        let o = f.getAttribute("data-bs-target");
        if (!o || o === "#") {
          let u = f.getAttribute("href");
          if (!u || (!u.includes("#") && !u.startsWith("."))) return null;
          u.includes("#") && !u.startsWith("#") && (u = `#${u.split("#")[1]}`),
            (o = u && u !== "#" ? u.trim() : null);
        }
        return o
          ? o
              .split(",")
              .map((u) => s(u))
              .join(",")
          : null;
      },
      K = {
        find: (f, o = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(o, f)),
        findOne: (f, o = document.documentElement) =>
          Element.prototype.querySelector.call(o, f),
        children: (f, o) =>
          [].concat(...f.children).filter((u) => u.matches(o)),
        parents(f, o) {
          const u = [];
          let m = f.parentNode.closest(o);
          for (; m; ) u.push(m), (m = m.parentNode.closest(o));
          return u;
        },
        prev(f, o) {
          let u = f.previousElementSibling;
          for (; u; ) {
            if (u.matches(o)) return [u];
            u = u.previousElementSibling;
          }
          return [];
        },
        next(f, o) {
          let u = f.nextElementSibling;
          for (; u; ) {
            if (u.matches(o)) return [u];
            u = u.nextElementSibling;
          }
          return [];
        },
        focusableChildren(f) {
          const o = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((u) => `${u}:not([tabindex^="-"])`)
            .join(",");
          return this.find(o, f).filter((u) => !g(u) && p(u));
        },
        getSelectorFromElement(f) {
          const o = $e(f);
          return o && K.findOne(o) ? o : null;
        },
        getElementFromSelector(f) {
          const o = $e(f);
          return o ? K.findOne(o) : null;
        },
        getMultipleElementsFromSelector(f) {
          const o = $e(f);
          return o ? K.find(o) : [];
        },
      },
      Ke = (f, o = "hide") => {
        const u = `click.dismiss${f.EVENT_KEY}`,
          m = f.NAME;
        A.on(document, u, `[data-bs-dismiss="${m}"]`, function (k) {
          if (
            (["A", "AREA"].includes(this.tagName) && k.preventDefault(),
            g(this))
          )
            return;
          const b = K.getElementFromSelector(this) || this.closest(`.${m}`);
          f.getOrCreateInstance(b)[o]();
        });
      },
      yr = ".bs.alert",
      J = `close${yr}`,
      wr = `closed${yr}`;
    class fn extends ve {
      static get NAME() {
        return "alert";
      }
      close() {
        if (A.trigger(this._element, J).defaultPrevented) return;
        this._element.classList.remove("show");
        const o = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, o);
      }
      _destroyElement() {
        this._element.remove(), A.trigger(this._element, wr), this.dispose();
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = fn.getOrCreateInstance(this);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    Ke(fn, "close"), w(fn);
    const Vi = '[data-bs-toggle="button"]';
    class Vn extends ve {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Vn.getOrCreateInstance(this);
          o === "toggle" && u[o]();
        });
      }
    }
    A.on(document, "click.bs.button.data-api", Vi, (f) => {
      f.preventDefault();
      const o = f.target.closest(Vi);
      Vn.getOrCreateInstance(o).toggle();
    }),
      w(Vn);
    const mt = ".bs.swipe",
      ui = `touchstart${mt}`,
      Qn = `touchmove${mt}`,
      Tn = `touchend${mt}`,
      hn = `pointerdown${mt}`,
      Er = `pointerup${mt}`,
      Qi = { endCallback: null, leftCallback: null, rightCallback: null },
      Ki = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class On extends Ue {
      constructor(o, u) {
        super(),
          (this._element = o),
          o &&
            On.isSupported() &&
            ((this._config = this._getConfig(u)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return Qi;
      }
      static get DefaultType() {
        return Ki;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        A.off(this._element, mt);
      }
      _start(o) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(o) && (this._deltaX = o.clientX)
          : (this._deltaX = o.touches[0].clientX);
      }
      _end(o) {
        this._eventIsPointerPenTouch(o) &&
          (this._deltaX = o.clientX - this._deltaX),
          this._handleSwipe(),
          v(this._config.endCallback);
      }
      _move(o) {
        this._deltaX =
          o.touches && o.touches.length > 1
            ? 0
            : o.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const o = Math.abs(this._deltaX);
        if (o <= 40) return;
        const u = o / this._deltaX;
        (this._deltaX = 0),
          u &&
            v(u > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (A.on(this._element, hn, (o) => this._start(o)),
            A.on(this._element, Er, (o) => this._end(o)),
            this._element.classList.add("pointer-event"))
          : (A.on(this._element, ui, (o) => this._start(o)),
            A.on(this._element, Qn, (o) => this._move(o)),
            A.on(this._element, Tn, (o) => this._end(o)));
      }
      _eventIsPointerPenTouch(o) {
        return (
          this._supportPointerEvents &&
          (o.pointerType === "pen" || o.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const It = ".bs.carousel",
      ci = ".data-api",
      $t = "next",
      Ze = "prev",
      Kn = "left",
      An = "right",
      xr = `slide${It}`,
      Pn = `slid${It}`,
      qi = `keydown${It}`,
      nc = `mouseenter${It}`,
      os = `mouseleave${It}`,
      rc = `dragstart${It}`,
      ic = `load${It}${ci}`,
      oc = `click${It}${ci}`,
      jl = "carousel",
      Yi = "active",
      Il = ".active",
      ss = ".carousel-item",
      Xi = Il + ss,
      $l = { ArrowLeft: An, ArrowRight: Kn },
      Dl = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      sc = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class Cr extends ve {
      constructor(o, u) {
        super(o, u),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = K.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === jl && this.cycle();
      }
      static get Default() {
        return Dl;
      }
      static get DefaultType() {
        return sc;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide($t);
      }
      nextWhenVisible() {
        !document.hidden && p(this._element) && this.next();
      }
      prev() {
        this._slide(Ze);
      }
      pause() {
        this._isSliding && a(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? A.one(this._element, Pn, () => this.cycle())
            : this.cycle());
      }
      to(o) {
        const u = this._getItems();
        if (o > u.length - 1 || o < 0) return;
        if (this._isSliding)
          return void A.one(this._element, Pn, () => this.to(o));
        const m = this._getItemIndex(this._getActive());
        if (m === o) return;
        const k = o > m ? $t : Ze;
        this._slide(k, u[o]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(o) {
        return (o.defaultInterval = o.interval), o;
      }
      _addEventListeners() {
        this._config.keyboard &&
          A.on(this._element, qi, (o) => this._keydown(o)),
          this._config.pause === "hover" &&
            (A.on(this._element, nc, () => this.pause()),
            A.on(this._element, os, () => this._maybeEnableCycle())),
          this._config.touch &&
            On.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const u of K.find(".carousel-item img", this._element))
          A.on(u, rc, (m) => m.preventDefault());
        const o = {
          leftCallback: () => this._slide(this._directionToOrder(Kn)),
          rightCallback: () => this._slide(this._directionToOrder(An)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          },
        };
        this._swipeHelper = new On(this._element, o);
      }
      _keydown(o) {
        if (/input|textarea/i.test(o.target.tagName)) return;
        const u = $l[o.key];
        u && (o.preventDefault(), this._slide(this._directionToOrder(u)));
      }
      _getItemIndex(o) {
        return this._getItems().indexOf(o);
      }
      _setActiveIndicatorElement(o) {
        if (!this._indicatorsElement) return;
        const u = K.findOne(Il, this._indicatorsElement);
        u.classList.remove(Yi), u.removeAttribute("aria-current");
        const m = K.findOne(
          `[data-bs-slide-to="${o}"]`,
          this._indicatorsElement
        );
        m && (m.classList.add(Yi), m.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const o = this._activeElement || this._getActive();
        if (!o) return;
        const u = Number.parseInt(o.getAttribute("data-bs-interval"), 10);
        this._config.interval = u || this._config.defaultInterval;
      }
      _slide(o, u = null) {
        if (this._isSliding) return;
        const m = this._getActive(),
          k = o === $t,
          b = u || S(this._getItems(), m, k, this._config.wrap);
        if (b === m) return;
        const N = this._getItemIndex(b),
          M = (Q) =>
            A.trigger(this._element, Q, {
              relatedTarget: b,
              direction: this._orderToDirection(o),
              from: this._getItemIndex(m),
              to: N,
            });
        if (M(xr).defaultPrevented || !m || !b) return;
        const W = !!this._interval;
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(N),
          (this._activeElement = b);
        const q = k ? "carousel-item-start" : "carousel-item-end",
          G = k ? "carousel-item-next" : "carousel-item-prev";
        b.classList.add(G),
          T(b),
          m.classList.add(q),
          b.classList.add(q),
          this._queueCallback(
            () => {
              b.classList.remove(q, G),
                b.classList.add(Yi),
                m.classList.remove(Yi, G, q),
                (this._isSliding = !1),
                M(Pn);
            },
            m,
            this._isAnimated()
          ),
          W && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return K.findOne(Xi, this._element);
      }
      _getItems() {
        return K.find(ss, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(o) {
        return j() ? (o === Kn ? Ze : $t) : o === Kn ? $t : Ze;
      }
      _orderToDirection(o) {
        return j() ? (o === Ze ? Kn : An) : o === Ze ? An : Kn;
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Cr.getOrCreateInstance(this, o);
          if (typeof o != "number") {
            if (typeof o == "string") {
              if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
                throw new TypeError(`No method named "${o}"`);
              u[o]();
            }
          } else u.to(o);
        });
      }
    }
    A.on(document, oc, "[data-bs-slide], [data-bs-slide-to]", function (f) {
      const o = K.getElementFromSelector(this);
      if (!o || !o.classList.contains(jl)) return;
      f.preventDefault();
      const u = Cr.getOrCreateInstance(o),
        m = this.getAttribute("data-bs-slide-to");
      return m
        ? (u.to(m), void u._maybeEnableCycle())
        : Ee.getDataAttribute(this, "slide") === "next"
        ? (u.next(), void u._maybeEnableCycle())
        : (u.prev(), void u._maybeEnableCycle());
    }),
      A.on(window, ic, () => {
        const f = K.find('[data-bs-ride="carousel"]');
        for (const o of f) Cr.getOrCreateInstance(o);
      }),
      w(Cr);
    const di = ".bs.collapse",
      lc = `show${di}`,
      kr = `shown${di}`,
      fi = `hide${di}`,
      ac = `hidden${di}`,
      uc = `click${di}.data-api`,
      ls = "show",
      br = "collapse",
      Gi = "collapsing",
      as = `:scope .${br} .${br}`,
      Nn = '[data-bs-toggle="collapse"]',
      Zi = { parent: null, toggle: !0 },
      cc = { parent: "(null|element)", toggle: "boolean" };
    class Ln extends ve {
      constructor(o, u) {
        super(o, u), (this._isTransitioning = !1), (this._triggerArray = []);
        const m = K.find(Nn);
        for (const k of m) {
          const b = K.getSelectorFromElement(k),
            N = K.find(b).filter((M) => M === this._element);
          b !== null && N.length && this._triggerArray.push(k);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Zi;
      }
      static get DefaultType() {
        return cc;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let o = [];
        if (
          (this._config.parent &&
            (o = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter((k) => k !== this._element)
              .map((k) => Ln.getOrCreateInstance(k, { toggle: !1 }))),
          (o.length && o[0]._isTransitioning) ||
            A.trigger(this._element, lc).defaultPrevented)
        )
          return;
        for (const k of o) k.hide();
        const u = this._getDimension();
        this._element.classList.remove(br),
          this._element.classList.add(Gi),
          (this._element.style[u] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const m = `scroll${u[0].toUpperCase() + u.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Gi),
              this._element.classList.add(br, ls),
              (this._element.style[u] = ""),
              A.trigger(this._element, kr);
          },
          this._element,
          !0
        ),
          (this._element.style[u] = `${this._element[m]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          A.trigger(this._element, fi).defaultPrevented
        )
          return;
        const o = this._getDimension();
        (this._element.style[o] = `${
          this._element.getBoundingClientRect()[o]
        }px`),
          T(this._element),
          this._element.classList.add(Gi),
          this._element.classList.remove(br, ls);
        for (const u of this._triggerArray) {
          const m = K.getElementFromSelector(u);
          m && !this._isShown(m) && this._addAriaAndCollapsedClass([u], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[o] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(Gi),
                this._element.classList.add(br),
                A.trigger(this._element, ac);
            },
            this._element,
            !0
          );
      }
      _isShown(o = this._element) {
        return o.classList.contains(ls);
      }
      _configAfterMerge(o) {
        return (o.toggle = !!o.toggle), (o.parent = d(o.parent)), o;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const o = this._getFirstLevelChildren(Nn);
        for (const u of o) {
          const m = K.getElementFromSelector(u);
          m && this._addAriaAndCollapsedClass([u], this._isShown(m));
        }
      }
      _getFirstLevelChildren(o) {
        const u = K.find(as, this._config.parent);
        return K.find(o, this._config.parent).filter((m) => !u.includes(m));
      }
      _addAriaAndCollapsedClass(o, u) {
        if (o.length)
          for (const m of o)
            m.classList.toggle("collapsed", !u),
              m.setAttribute("aria-expanded", u);
      }
      static jQueryInterface(o) {
        const u = {};
        return (
          typeof o == "string" && /show|hide/.test(o) && (u.toggle = !1),
          this.each(function () {
            const m = Ln.getOrCreateInstance(this, u);
            if (typeof o == "string") {
              if (m[o] === void 0)
                throw new TypeError(`No method named "${o}"`);
              m[o]();
            }
          })
        );
      }
    }
    A.on(document, uc, Nn, function (f) {
      (f.target.tagName === "A" ||
        (f.delegateTarget && f.delegateTarget.tagName === "A")) &&
        f.preventDefault();
      for (const o of K.getMultipleElementsFromSelector(this))
        Ln.getOrCreateInstance(o, { toggle: !1 }).toggle();
    }),
      w(Ln);
    var it = "top",
      gt = "bottom",
      qe = "right",
      Je = "left",
      Yt = "auto",
      jn = [it, gt, qe, Je],
      qn = "start",
      Yn = "end",
      Ml = "clippingParents",
      us = "viewport",
      Sr = "popper",
      Rl = "reference",
      Ji = jn.reduce(function (f, o) {
        return f.concat([o + "-" + qn, o + "-" + Yn]);
      }, []),
      eo = [].concat(jn, [Yt]).reduce(function (f, o) {
        return f.concat([o, o + "-" + qn, o + "-" + Yn]);
      }, []),
      zl = "beforeRead",
      Xn = "read",
      In = "afterRead",
      Fl = "beforeMain",
      hi = "main",
      Bl = "afterMain",
      Ul = "beforeWrite",
      Hl = "write",
      Wl = "afterWrite",
      Vl = [zl, Xn, In, Fl, hi, Bl, Ul, Hl, Wl];
    function Xt(f) {
      return f ? (f.nodeName || "").toLowerCase() : null;
    }
    function vt(f) {
      if (f == null) return window;
      if (f.toString() !== "[object Window]") {
        var o = f.ownerDocument;
        return (o && o.defaultView) || window;
      }
      return f;
    }
    function Gn(f) {
      return f instanceof vt(f).Element || f instanceof Element;
    }
    function Ne(f) {
      return f instanceof vt(f).HTMLElement || f instanceof HTMLElement;
    }
    function to(f) {
      return (
        typeof ShadowRoot < "u" &&
        (f instanceof vt(f).ShadowRoot || f instanceof ShadowRoot)
      );
    }
    const no = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (f) {
        var o = f.state;
        Object.keys(o.elements).forEach(function (u) {
          var m = o.styles[u] || {},
            k = o.attributes[u] || {},
            b = o.elements[u];
          Ne(b) &&
            Xt(b) &&
            (Object.assign(b.style, m),
            Object.keys(k).forEach(function (N) {
              var M = k[N];
              M === !1
                ? b.removeAttribute(N)
                : b.setAttribute(N, M === !0 ? "" : M);
            }));
        });
      },
      effect: function (f) {
        var o = f.state,
          u = {
            popper: {
              position: o.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(o.elements.popper.style, u.popper),
          (o.styles = u),
          o.elements.arrow && Object.assign(o.elements.arrow.style, u.arrow),
          function () {
            Object.keys(o.elements).forEach(function (m) {
              var k = o.elements[m],
                b = o.attributes[m] || {},
                N = Object.keys(
                  o.styles.hasOwnProperty(m) ? o.styles[m] : u[m]
                ).reduce(function (M, W) {
                  return (M[W] = ""), M;
                }, {});
              Ne(k) &&
                Xt(k) &&
                (Object.assign(k.style, N),
                Object.keys(b).forEach(function (M) {
                  k.removeAttribute(M);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function Dt(f) {
      return f.split("-")[0];
    }
    var Zn = Math.max,
      ro = Math.min,
      Jn = Math.round;
    function Tr() {
      var f = navigator.userAgentData;
      return f != null && f.brands && Array.isArray(f.brands)
        ? f.brands
            .map(function (o) {
              return o.brand + "/" + o.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function Ql() {
      return !/^((?!chrome|android).)*safari/i.test(Tr());
    }
    function Or(f, o, u) {
      o === void 0 && (o = !1), u === void 0 && (u = !1);
      var m = f.getBoundingClientRect(),
        k = 1,
        b = 1;
      o &&
        Ne(f) &&
        ((k = (f.offsetWidth > 0 && Jn(m.width) / f.offsetWidth) || 1),
        (b = (f.offsetHeight > 0 && Jn(m.height) / f.offsetHeight) || 1));
      var N = (Gn(f) ? vt(f) : window).visualViewport,
        M = !Ql() && u,
        W = (m.left + (M && N ? N.offsetLeft : 0)) / k,
        q = (m.top + (M && N ? N.offsetTop : 0)) / b,
        G = m.width / k,
        Q = m.height / b;
      return {
        width: G,
        height: Q,
        top: q,
        right: W + G,
        bottom: q + Q,
        left: W,
        x: W,
        y: q,
      };
    }
    function io(f) {
      var o = Or(f),
        u = f.offsetWidth,
        m = f.offsetHeight;
      return (
        Math.abs(o.width - u) <= 1 && (u = o.width),
        Math.abs(o.height - m) <= 1 && (m = o.height),
        { x: f.offsetLeft, y: f.offsetTop, width: u, height: m }
      );
    }
    function Kl(f, o) {
      var u = o.getRootNode && o.getRootNode();
      if (f.contains(o)) return !0;
      if (u && to(u)) {
        var m = o;
        do {
          if (m && f.isSameNode(m)) return !0;
          m = m.parentNode || m.host;
        } while (m);
      }
      return !1;
    }
    function pn(f) {
      return vt(f).getComputedStyle(f);
    }
    function ql(f) {
      return ["table", "td", "th"].indexOf(Xt(f)) >= 0;
    }
    function mn(f) {
      return (
        (Gn(f) ? f.ownerDocument : f.document) || window.document
      ).documentElement;
    }
    function pi(f) {
      return Xt(f) === "html"
        ? f
        : f.assignedSlot || f.parentNode || (to(f) ? f.host : null) || mn(f);
    }
    function mi(f) {
      return Ne(f) && pn(f).position !== "fixed" ? f.offsetParent : null;
    }
    function Ar(f) {
      for (
        var o = vt(f), u = mi(f);
        u && ql(u) && pn(u).position === "static";

      )
        u = mi(u);
      return u &&
        (Xt(u) === "html" || (Xt(u) === "body" && pn(u).position === "static"))
        ? o
        : u ||
            (function (m) {
              var k = /firefox/i.test(Tr());
              if (/Trident/i.test(Tr()) && Ne(m) && pn(m).position === "fixed")
                return null;
              var b = pi(m);
              for (
                to(b) && (b = b.host);
                Ne(b) && ["html", "body"].indexOf(Xt(b)) < 0;

              ) {
                var N = pn(b);
                if (
                  N.transform !== "none" ||
                  N.perspective !== "none" ||
                  N.contain === "paint" ||
                  ["transform", "perspective"].indexOf(N.willChange) !== -1 ||
                  (k && N.willChange === "filter") ||
                  (k && N.filter && N.filter !== "none")
                )
                  return b;
                b = b.parentNode;
              }
              return null;
            })(f) ||
            o;
    }
    function gi(f) {
      return ["top", "bottom"].indexOf(f) >= 0 ? "x" : "y";
    }
    function et(f, o, u) {
      return Zn(f, ro(o, u));
    }
    function Yl(f) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, f);
    }
    function Xl(f, o) {
      return o.reduce(function (u, m) {
        return (u[m] = f), u;
      }, {});
    }
    const cs = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (f) {
        var o,
          u = f.state,
          m = f.name,
          k = f.options,
          b = u.elements.arrow,
          N = u.modifiersData.popperOffsets,
          M = Dt(u.placement),
          W = gi(M),
          q = [Je, qe].indexOf(M) >= 0 ? "height" : "width";
        if (b && N) {
          var G = (function (Ce, ye) {
              return Yl(
                typeof (Ce =
                  typeof Ce == "function"
                    ? Ce(
                        Object.assign({}, ye.rects, { placement: ye.placement })
                      )
                    : Ce) != "number"
                  ? Ce
                  : Xl(Ce, jn)
              );
            })(k.padding, u),
            Q = io(b),
            se = W === "y" ? it : Je,
            te = W === "y" ? gt : qe,
            ie =
              u.rects.reference[q] +
              u.rects.reference[W] -
              N[W] -
              u.rects.popper[q],
            ne = N[W] - u.rects.reference[W],
            oe = Ar(b),
            xe = oe
              ? W === "y"
                ? oe.clientHeight || 0
                : oe.clientWidth || 0
              : 0,
            Se = ie / 2 - ne / 2,
            ae = G[se],
            me = xe - Q[q] - G[te],
            le = xe / 2 - Q[q] / 2 + Se,
            de = et(ae, le, me),
            _e = W;
          u.modifiersData[m] =
            (((o = {})[_e] = de), (o.centerOffset = de - le), o);
        }
      },
      effect: function (f) {
        var o = f.state,
          u = f.options.element,
          m = u === void 0 ? "[data-popper-arrow]" : u;
        m != null &&
          (typeof m != "string" || (m = o.elements.popper.querySelector(m))) &&
          Kl(o.elements.popper, m) &&
          (o.elements.arrow = m);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function er(f) {
      return f.split("-")[1];
    }
    var dc = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Gl(f) {
      var o,
        u = f.popper,
        m = f.popperRect,
        k = f.placement,
        b = f.variation,
        N = f.offsets,
        M = f.position,
        W = f.gpuAcceleration,
        q = f.adaptive,
        G = f.roundOffsets,
        Q = f.isFixed,
        se = N.x,
        te = se === void 0 ? 0 : se,
        ie = N.y,
        ne = ie === void 0 ? 0 : ie,
        oe = typeof G == "function" ? G({ x: te, y: ne }) : { x: te, y: ne };
      (te = oe.x), (ne = oe.y);
      var xe = N.hasOwnProperty("x"),
        Se = N.hasOwnProperty("y"),
        ae = Je,
        me = it,
        le = window;
      if (q) {
        var de = Ar(u),
          _e = "clientHeight",
          Ce = "clientWidth";
        de === vt(u) &&
          pn((de = mn(u))).position !== "static" &&
          M === "absolute" &&
          ((_e = "scrollHeight"), (Ce = "scrollWidth")),
          (k === it || ((k === Je || k === qe) && b === Yn)) &&
            ((me = gt),
            (ne -=
              (Q && de === le && le.visualViewport
                ? le.visualViewport.height
                : de[_e]) - m.height),
            (ne *= W ? 1 : -1)),
          (k !== Je && ((k !== it && k !== gt) || b !== Yn)) ||
            ((ae = qe),
            (te -=
              (Q && de === le && le.visualViewport
                ? le.visualViewport.width
                : de[Ce]) - m.width),
            (te *= W ? 1 : -1));
      }
      var ye,
        We = Object.assign({ position: M }, q && dc),
        zt =
          G === !0
            ? (function (yn, Et) {
                var tn = yn.x,
                  nn = yn.y,
                  Fe = Et.devicePixelRatio || 1;
                return { x: Jn(tn * Fe) / Fe || 0, y: Jn(nn * Fe) / Fe || 0 };
              })({ x: te, y: ne }, vt(u))
            : { x: te, y: ne };
      return (
        (te = zt.x),
        (ne = zt.y),
        W
          ? Object.assign(
              {},
              We,
              (((ye = {})[me] = Se ? "0" : ""),
              (ye[ae] = xe ? "0" : ""),
              (ye.transform =
                (le.devicePixelRatio || 1) <= 1
                  ? "translate(" + te + "px, " + ne + "px)"
                  : "translate3d(" + te + "px, " + ne + "px, 0)"),
              ye)
            )
          : Object.assign(
              {},
              We,
              (((o = {})[me] = Se ? ne + "px" : ""),
              (o[ae] = xe ? te + "px" : ""),
              (o.transform = ""),
              o)
            )
      );
    }
    const ds = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (f) {
        var o = f.state,
          u = f.options,
          m = u.gpuAcceleration,
          k = m === void 0 || m,
          b = u.adaptive,
          N = b === void 0 || b,
          M = u.roundOffsets,
          W = M === void 0 || M,
          q = {
            placement: Dt(o.placement),
            variation: er(o.placement),
            popper: o.elements.popper,
            popperRect: o.rects.popper,
            gpuAcceleration: k,
            isFixed: o.options.strategy === "fixed",
          };
        o.modifiersData.popperOffsets != null &&
          (o.styles.popper = Object.assign(
            {},
            o.styles.popper,
            Gl(
              Object.assign({}, q, {
                offsets: o.modifiersData.popperOffsets,
                position: o.options.strategy,
                adaptive: N,
                roundOffsets: W,
              })
            )
          )),
          o.modifiersData.arrow != null &&
            (o.styles.arrow = Object.assign(
              {},
              o.styles.arrow,
              Gl(
                Object.assign({}, q, {
                  offsets: o.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: W,
                })
              )
            )),
          (o.attributes.popper = Object.assign({}, o.attributes.popper, {
            "data-popper-placement": o.placement,
          }));
      },
      data: {},
    };
    var oo = { passive: !0 };
    const fs = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (f) {
        var o = f.state,
          u = f.instance,
          m = f.options,
          k = m.scroll,
          b = k === void 0 || k,
          N = m.resize,
          M = N === void 0 || N,
          W = vt(o.elements.popper),
          q = [].concat(o.scrollParents.reference, o.scrollParents.popper);
        return (
          b &&
            q.forEach(function (G) {
              G.addEventListener("scroll", u.update, oo);
            }),
          M && W.addEventListener("resize", u.update, oo),
          function () {
            b &&
              q.forEach(function (G) {
                G.removeEventListener("scroll", u.update, oo);
              }),
              M && W.removeEventListener("resize", u.update, oo);
          }
        );
      },
      data: {},
    };
    var fc = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function vi(f) {
      return f.replace(/left|right|bottom|top/g, function (o) {
        return fc[o];
      });
    }
    var Zl = { start: "end", end: "start" };
    function so(f) {
      return f.replace(/start|end/g, function (o) {
        return Zl[o];
      });
    }
    function hs(f) {
      var o = vt(f);
      return { scrollLeft: o.pageXOffset, scrollTop: o.pageYOffset };
    }
    function ps(f) {
      return Or(mn(f)).left + hs(f).scrollLeft;
    }
    function gn(f) {
      var o = pn(f),
        u = o.overflow,
        m = o.overflowX,
        k = o.overflowY;
      return /auto|scroll|overlay|hidden/.test(u + k + m);
    }
    function Gt(f) {
      return ["html", "body", "#document"].indexOf(Xt(f)) >= 0
        ? f.ownerDocument.body
        : Ne(f) && gn(f)
        ? f
        : Gt(pi(f));
    }
    function Pr(f, o) {
      var u;
      o === void 0 && (o = []);
      var m = Gt(f),
        k = m === ((u = f.ownerDocument) == null ? void 0 : u.body),
        b = vt(m),
        N = k ? [b].concat(b.visualViewport || [], gn(m) ? m : []) : m,
        M = o.concat(N);
      return k ? M : M.concat(Pr(pi(N)));
    }
    function ms(f) {
      return Object.assign({}, f, {
        left: f.x,
        top: f.y,
        right: f.x + f.width,
        bottom: f.y + f.height,
      });
    }
    function gs(f, o, u) {
      return o === us
        ? ms(
            (function (m, k) {
              var b = vt(m),
                N = mn(m),
                M = b.visualViewport,
                W = N.clientWidth,
                q = N.clientHeight,
                G = 0,
                Q = 0;
              if (M) {
                (W = M.width), (q = M.height);
                var se = Ql();
                (se || (!se && k === "fixed")) &&
                  ((G = M.offsetLeft), (Q = M.offsetTop));
              }
              return { width: W, height: q, x: G + ps(m), y: Q };
            })(f, u)
          )
        : Gn(o)
        ? (function (m, k) {
            var b = Or(m, !1, k === "fixed");
            return (
              (b.top = b.top + m.clientTop),
              (b.left = b.left + m.clientLeft),
              (b.bottom = b.top + m.clientHeight),
              (b.right = b.left + m.clientWidth),
              (b.width = m.clientWidth),
              (b.height = m.clientHeight),
              (b.x = b.left),
              (b.y = b.top),
              b
            );
          })(o, u)
        : ms(
            (function (m) {
              var k,
                b = mn(m),
                N = hs(m),
                M = (k = m.ownerDocument) == null ? void 0 : k.body,
                W = Zn(
                  b.scrollWidth,
                  b.clientWidth,
                  M ? M.scrollWidth : 0,
                  M ? M.clientWidth : 0
                ),
                q = Zn(
                  b.scrollHeight,
                  b.clientHeight,
                  M ? M.scrollHeight : 0,
                  M ? M.clientHeight : 0
                ),
                G = -N.scrollLeft + ps(m),
                Q = -N.scrollTop;
              return (
                pn(M || b).direction === "rtl" &&
                  (G += Zn(b.clientWidth, M ? M.clientWidth : 0) - W),
                { width: W, height: q, x: G, y: Q }
              );
            })(mn(f))
          );
    }
    function vs(f) {
      var o,
        u = f.reference,
        m = f.element,
        k = f.placement,
        b = k ? Dt(k) : null,
        N = k ? er(k) : null,
        M = u.x + u.width / 2 - m.width / 2,
        W = u.y + u.height / 2 - m.height / 2;
      switch (b) {
        case it:
          o = { x: M, y: u.y - m.height };
          break;
        case gt:
          o = { x: M, y: u.y + u.height };
          break;
        case qe:
          o = { x: u.x + u.width, y: W };
          break;
        case Je:
          o = { x: u.x - m.width, y: W };
          break;
        default:
          o = { x: u.x, y: u.y };
      }
      var q = b ? gi(b) : null;
      if (q != null) {
        var G = q === "y" ? "height" : "width";
        switch (N) {
          case qn:
            o[q] = o[q] - (u[G] / 2 - m[G] / 2);
            break;
          case Yn:
            o[q] = o[q] + (u[G] / 2 - m[G] / 2);
        }
      }
      return o;
    }
    function tr(f, o) {
      o === void 0 && (o = {});
      var u = o,
        m = u.placement,
        k = m === void 0 ? f.placement : m,
        b = u.strategy,
        N = b === void 0 ? f.strategy : b,
        M = u.boundary,
        W = M === void 0 ? Ml : M,
        q = u.rootBoundary,
        G = q === void 0 ? us : q,
        Q = u.elementContext,
        se = Q === void 0 ? Sr : Q,
        te = u.altBoundary,
        ie = te !== void 0 && te,
        ne = u.padding,
        oe = ne === void 0 ? 0 : ne,
        xe = Yl(typeof oe != "number" ? oe : Xl(oe, jn)),
        Se = se === Sr ? Rl : Sr,
        ae = f.rects.popper,
        me = f.elements[ie ? Se : se],
        le = (function (Et, tn, nn, Fe) {
          var Dn =
              tn === "clippingParents"
                ? (function (be) {
                    var xt = Pr(pi(be)),
                      rn =
                        ["absolute", "fixed"].indexOf(pn(be).position) >= 0 &&
                        Ne(be)
                          ? Ar(be)
                          : be;
                    return Gn(rn)
                      ? xt.filter(function (Mr) {
                          return Gn(Mr) && Kl(Mr, rn) && Xt(Mr) !== "body";
                        })
                      : [];
                  })(Et)
                : [].concat(tn),
            Mn = [].concat(Dn, [nn]),
            _o = Mn[0],
            tt = Mn.reduce(function (be, xt) {
              var rn = gs(Et, xt, Fe);
              return (
                (be.top = Zn(rn.top, be.top)),
                (be.right = ro(rn.right, be.right)),
                (be.bottom = ro(rn.bottom, be.bottom)),
                (be.left = Zn(rn.left, be.left)),
                be
              );
            }, gs(Et, _o, Fe));
          return (
            (tt.width = tt.right - tt.left),
            (tt.height = tt.bottom - tt.top),
            (tt.x = tt.left),
            (tt.y = tt.top),
            tt
          );
        })(Gn(me) ? me : me.contextElement || mn(f.elements.popper), W, G, N),
        de = Or(f.elements.reference),
        _e = vs({
          reference: de,
          element: ae,
          strategy: "absolute",
          placement: k,
        }),
        Ce = ms(Object.assign({}, ae, _e)),
        ye = se === Sr ? Ce : de,
        We = {
          top: le.top - ye.top + xe.top,
          bottom: ye.bottom - le.bottom + xe.bottom,
          left: le.left - ye.left + xe.left,
          right: ye.right - le.right + xe.right,
        },
        zt = f.modifiersData.offset;
      if (se === Sr && zt) {
        var yn = zt[k];
        Object.keys(We).forEach(function (Et) {
          var tn = [qe, gt].indexOf(Et) >= 0 ? 1 : -1,
            nn = [it, gt].indexOf(Et) >= 0 ? "y" : "x";
          We[Et] += yn[nn] * tn;
        });
      }
      return We;
    }
    function Jl(f, o) {
      o === void 0 && (o = {});
      var u = o,
        m = u.placement,
        k = u.boundary,
        b = u.rootBoundary,
        N = u.padding,
        M = u.flipVariations,
        W = u.allowedAutoPlacements,
        q = W === void 0 ? eo : W,
        G = er(m),
        Q = G
          ? M
            ? Ji
            : Ji.filter(function (ie) {
                return er(ie) === G;
              })
          : jn,
        se = Q.filter(function (ie) {
          return q.indexOf(ie) >= 0;
        });
      se.length === 0 && (se = Q);
      var te = se.reduce(function (ie, ne) {
        return (
          (ie[ne] = tr(f, {
            placement: ne,
            boundary: k,
            rootBoundary: b,
            padding: N,
          })[Dt(ne)]),
          ie
        );
      }, {});
      return Object.keys(te).sort(function (ie, ne) {
        return te[ie] - te[ne];
      });
    }
    const ea = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (f) {
        var o = f.state,
          u = f.options,
          m = f.name;
        if (!o.modifiersData[m]._skip) {
          for (
            var k = u.mainAxis,
              b = k === void 0 || k,
              N = u.altAxis,
              M = N === void 0 || N,
              W = u.fallbackPlacements,
              q = u.padding,
              G = u.boundary,
              Q = u.rootBoundary,
              se = u.altBoundary,
              te = u.flipVariations,
              ie = te === void 0 || te,
              ne = u.allowedAutoPlacements,
              oe = o.options.placement,
              xe = Dt(oe),
              Se =
                W ||
                (xe !== oe && ie
                  ? (function (be) {
                      if (Dt(be) === Yt) return [];
                      var xt = vi(be);
                      return [so(be), xt, so(xt)];
                    })(oe)
                  : [vi(oe)]),
              ae = [oe].concat(Se).reduce(function (be, xt) {
                return be.concat(
                  Dt(xt) === Yt
                    ? Jl(o, {
                        placement: xt,
                        boundary: G,
                        rootBoundary: Q,
                        padding: q,
                        flipVariations: ie,
                        allowedAutoPlacements: ne,
                      })
                    : xt
                );
              }, []),
              me = o.rects.reference,
              le = o.rects.popper,
              de = new Map(),
              _e = !0,
              Ce = ae[0],
              ye = 0;
            ye < ae.length;
            ye++
          ) {
            var We = ae[ye],
              zt = Dt(We),
              yn = er(We) === qn,
              Et = [it, gt].indexOf(zt) >= 0,
              tn = Et ? "width" : "height",
              nn = tr(o, {
                placement: We,
                boundary: G,
                rootBoundary: Q,
                altBoundary: se,
                padding: q,
              }),
              Fe = Et ? (yn ? qe : Je) : yn ? gt : it;
            me[tn] > le[tn] && (Fe = vi(Fe));
            var Dn = vi(Fe),
              Mn = [];
            if (
              (b && Mn.push(nn[zt] <= 0),
              M && Mn.push(nn[Fe] <= 0, nn[Dn] <= 0),
              Mn.every(function (be) {
                return be;
              }))
            ) {
              (Ce = We), (_e = !1);
              break;
            }
            de.set(We, Mn);
          }
          if (_e)
            for (
              var _o = function (be) {
                  var xt = ae.find(function (rn) {
                    var Mr = de.get(rn);
                    if (Mr)
                      return Mr.slice(0, be).every(function (Sa) {
                        return Sa;
                      });
                  });
                  if (xt) return (Ce = xt), "break";
                },
                tt = ie ? 3 : 1;
              tt > 0 && _o(tt) !== "break";
              tt--
            );
          o.placement !== Ce &&
            ((o.modifiersData[m]._skip = !0),
            (o.placement = Ce),
            (o.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function ta(f, o, u) {
      return (
        u === void 0 && (u = { x: 0, y: 0 }),
        {
          top: f.top - o.height - u.y,
          right: f.right - o.width + u.x,
          bottom: f.bottom - o.height + u.y,
          left: f.left - o.width - u.x,
        }
      );
    }
    function na(f) {
      return [it, qe, gt, Je].some(function (o) {
        return f[o] >= 0;
      });
    }
    const _s = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (f) {
          var o = f.state,
            u = f.name,
            m = o.rects.reference,
            k = o.rects.popper,
            b = o.modifiersData.preventOverflow,
            N = tr(o, { elementContext: "reference" }),
            M = tr(o, { altBoundary: !0 }),
            W = ta(N, m),
            q = ta(M, k, b),
            G = na(W),
            Q = na(q);
          (o.modifiersData[u] = {
            referenceClippingOffsets: W,
            popperEscapeOffsets: q,
            isReferenceHidden: G,
            hasPopperEscaped: Q,
          }),
            (o.attributes.popper = Object.assign({}, o.attributes.popper, {
              "data-popper-reference-hidden": G,
              "data-popper-escaped": Q,
            }));
        },
      },
      ys = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (f) {
          var o = f.state,
            u = f.options,
            m = f.name,
            k = u.offset,
            b = k === void 0 ? [0, 0] : k,
            N = eo.reduce(function (G, Q) {
              return (
                (G[Q] = (function (se, te, ie) {
                  var ne = Dt(se),
                    oe = [Je, it].indexOf(ne) >= 0 ? -1 : 1,
                    xe =
                      typeof ie == "function"
                        ? ie(Object.assign({}, te, { placement: se }))
                        : ie,
                    Se = xe[0],
                    ae = xe[1];
                  return (
                    (Se = Se || 0),
                    (ae = (ae || 0) * oe),
                    [Je, qe].indexOf(ne) >= 0
                      ? { x: ae, y: Se }
                      : { x: Se, y: ae }
                  );
                })(Q, o.rects, b)),
                G
              );
            }, {}),
            M = N[o.placement],
            W = M.x,
            q = M.y;
          o.modifiersData.popperOffsets != null &&
            ((o.modifiersData.popperOffsets.x += W),
            (o.modifiersData.popperOffsets.y += q)),
            (o.modifiersData[m] = N);
        },
      },
      ws = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (f) {
          var o = f.state,
            u = f.name;
          o.modifiersData[u] = vs({
            reference: o.rects.reference,
            element: o.rects.popper,
            strategy: "absolute",
            placement: o.placement,
          });
        },
        data: {},
      },
      ra = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (f) {
          var o = f.state,
            u = f.options,
            m = f.name,
            k = u.mainAxis,
            b = k === void 0 || k,
            N = u.altAxis,
            M = N !== void 0 && N,
            W = u.boundary,
            q = u.rootBoundary,
            G = u.altBoundary,
            Q = u.padding,
            se = u.tether,
            te = se === void 0 || se,
            ie = u.tetherOffset,
            ne = ie === void 0 ? 0 : ie,
            oe = tr(o, {
              boundary: W,
              rootBoundary: q,
              padding: Q,
              altBoundary: G,
            }),
            xe = Dt(o.placement),
            Se = er(o.placement),
            ae = !Se,
            me = gi(xe),
            le = me === "x" ? "y" : "x",
            de = o.modifiersData.popperOffsets,
            _e = o.rects.reference,
            Ce = o.rects.popper,
            ye =
              typeof ne == "function"
                ? ne(Object.assign({}, o.rects, { placement: o.placement }))
                : ne,
            We =
              typeof ye == "number"
                ? { mainAxis: ye, altAxis: ye }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, ye),
            zt = o.modifiersData.offset
              ? o.modifiersData.offset[o.placement]
              : null,
            yn = { x: 0, y: 0 };
          if (de) {
            if (b) {
              var Et,
                tn = me === "y" ? it : Je,
                nn = me === "y" ? gt : qe,
                Fe = me === "y" ? "height" : "width",
                Dn = de[me],
                Mn = Dn + oe[tn],
                _o = Dn - oe[nn],
                tt = te ? -Ce[Fe] / 2 : 0,
                be = Se === qn ? _e[Fe] : Ce[Fe],
                xt = Se === qn ? -Ce[Fe] : -_e[Fe],
                rn = o.elements.arrow,
                Mr = te && rn ? io(rn) : { width: 0, height: 0 },
                Sa = o.modifiersData["arrow#persistent"]
                  ? o.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Qh = Sa[tn],
                Kh = Sa[nn],
                Ta = et(0, _e[Fe], Mr[Fe]),
                vy = ae
                  ? _e[Fe] / 2 - tt - Ta - Qh - We.mainAxis
                  : be - Ta - Qh - We.mainAxis,
                _y = ae
                  ? -_e[Fe] / 2 + tt + Ta + Kh + We.mainAxis
                  : xt + Ta + Kh + We.mainAxis,
                Uc = o.elements.arrow && Ar(o.elements.arrow),
                yy = Uc
                  ? me === "y"
                    ? Uc.clientTop || 0
                    : Uc.clientLeft || 0
                  : 0,
                qh = (Et = zt == null ? void 0 : zt[me]) != null ? Et : 0,
                wy = Dn + _y - qh,
                Yh = et(
                  te ? ro(Mn, Dn + vy - qh - yy) : Mn,
                  Dn,
                  te ? Zn(_o, wy) : _o
                );
              (de[me] = Yh), (yn[me] = Yh - Dn);
            }
            if (M) {
              var Xh,
                Ey = me === "x" ? it : Je,
                xy = me === "x" ? gt : qe,
                Si = de[le],
                Oa = le === "y" ? "height" : "width",
                Gh = Si + oe[Ey],
                Zh = Si - oe[xy],
                Hc = [it, Je].indexOf(xe) !== -1,
                Jh = (Xh = zt == null ? void 0 : zt[le]) != null ? Xh : 0,
                ep = Hc ? Gh : Si - _e[Oa] - Ce[Oa] - Jh + We.altAxis,
                tp = Hc ? Si + _e[Oa] + Ce[Oa] - Jh - We.altAxis : Zh,
                np =
                  te && Hc
                    ? (function (Cy, ky, Wc) {
                        var rp = et(Cy, ky, Wc);
                        return rp > Wc ? Wc : rp;
                      })(ep, Si, tp)
                    : et(te ? ep : Gh, Si, te ? tp : Zh);
              (de[le] = np), (yn[le] = np - Si);
            }
            o.modifiersData[m] = yn;
          }
        },
        requiresIfExists: ["offset"],
      };
    function hc(f, o, u) {
      u === void 0 && (u = !1);
      var m,
        k,
        b = Ne(o),
        N =
          Ne(o) &&
          (function (Q) {
            var se = Q.getBoundingClientRect(),
              te = Jn(se.width) / Q.offsetWidth || 1,
              ie = Jn(se.height) / Q.offsetHeight || 1;
            return te !== 1 || ie !== 1;
          })(o),
        M = mn(o),
        W = Or(f, N, u),
        q = { scrollLeft: 0, scrollTop: 0 },
        G = { x: 0, y: 0 };
      return (
        (b || (!b && !u)) &&
          ((Xt(o) !== "body" || gn(M)) &&
            (q =
              (m = o) !== vt(m) && Ne(m)
                ? { scrollLeft: (k = m).scrollLeft, scrollTop: k.scrollTop }
                : hs(m)),
          Ne(o)
            ? (((G = Or(o, !0)).x += o.clientLeft), (G.y += o.clientTop))
            : M && (G.x = ps(M))),
        {
          x: W.left + q.scrollLeft - G.x,
          y: W.top + q.scrollTop - G.y,
          width: W.width,
          height: W.height,
        }
      );
    }
    function pc(f) {
      var o = new Map(),
        u = new Set(),
        m = [];
      function k(b) {
        u.add(b.name),
          []
            .concat(b.requires || [], b.requiresIfExists || [])
            .forEach(function (N) {
              if (!u.has(N)) {
                var M = o.get(N);
                M && k(M);
              }
            }),
          m.push(b);
      }
      return (
        f.forEach(function (b) {
          o.set(b.name, b);
        }),
        f.forEach(function (b) {
          u.has(b.name) || k(b);
        }),
        m
      );
    }
    var ia = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Zt() {
      for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
        o[u] = arguments[u];
      return !o.some(function (m) {
        return !(m && typeof m.getBoundingClientRect == "function");
      });
    }
    function _i(f) {
      f === void 0 && (f = {});
      var o = f,
        u = o.defaultModifiers,
        m = u === void 0 ? [] : u,
        k = o.defaultOptions,
        b = k === void 0 ? ia : k;
      return function (N, M, W) {
        W === void 0 && (W = b);
        var q,
          G,
          Q = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, ia, b),
            modifiersData: {},
            elements: { reference: N, popper: M },
            attributes: {},
            styles: {},
          },
          se = [],
          te = !1,
          ie = {
            state: Q,
            setOptions: function (oe) {
              var xe = typeof oe == "function" ? oe(Q.options) : oe;
              ne(),
                (Q.options = Object.assign({}, b, Q.options, xe)),
                (Q.scrollParents = {
                  reference: Gn(N)
                    ? Pr(N)
                    : N.contextElement
                    ? Pr(N.contextElement)
                    : [],
                  popper: Pr(M),
                });
              var Se,
                ae,
                me = (function (le) {
                  var de = pc(le);
                  return Vl.reduce(function (_e, Ce) {
                    return _e.concat(
                      de.filter(function (ye) {
                        return ye.phase === Ce;
                      })
                    );
                  }, []);
                })(
                  ((Se = [].concat(m, Q.options.modifiers)),
                  (ae = Se.reduce(function (le, de) {
                    var _e = le[de.name];
                    return (
                      (le[de.name] = _e
                        ? Object.assign({}, _e, de, {
                            options: Object.assign({}, _e.options, de.options),
                            data: Object.assign({}, _e.data, de.data),
                          })
                        : de),
                      le
                    );
                  }, {})),
                  Object.keys(ae).map(function (le) {
                    return ae[le];
                  }))
                );
              return (
                (Q.orderedModifiers = me.filter(function (le) {
                  return le.enabled;
                })),
                Q.orderedModifiers.forEach(function (le) {
                  var de = le.name,
                    _e = le.options,
                    Ce = _e === void 0 ? {} : _e,
                    ye = le.effect;
                  if (typeof ye == "function") {
                    var We = ye({
                      state: Q,
                      name: de,
                      instance: ie,
                      options: Ce,
                    });
                    se.push(We || function () {});
                  }
                }),
                ie.update()
              );
            },
            forceUpdate: function () {
              if (!te) {
                var oe = Q.elements,
                  xe = oe.reference,
                  Se = oe.popper;
                if (Zt(xe, Se)) {
                  (Q.rects = {
                    reference: hc(xe, Ar(Se), Q.options.strategy === "fixed"),
                    popper: io(Se),
                  }),
                    (Q.reset = !1),
                    (Q.placement = Q.options.placement),
                    Q.orderedModifiers.forEach(function (ye) {
                      return (Q.modifiersData[ye.name] = Object.assign(
                        {},
                        ye.data
                      ));
                    });
                  for (var ae = 0; ae < Q.orderedModifiers.length; ae++)
                    if (Q.reset !== !0) {
                      var me = Q.orderedModifiers[ae],
                        le = me.fn,
                        de = me.options,
                        _e = de === void 0 ? {} : de,
                        Ce = me.name;
                      typeof le == "function" &&
                        (Q =
                          le({
                            state: Q,
                            options: _e,
                            name: Ce,
                            instance: ie,
                          }) || Q);
                    } else (Q.reset = !1), (ae = -1);
                }
              }
            },
            update:
              ((q = function () {
                return new Promise(function (oe) {
                  ie.forceUpdate(), oe(Q);
                });
              }),
              function () {
                return (
                  G ||
                    (G = new Promise(function (oe) {
                      Promise.resolve().then(function () {
                        (G = void 0), oe(q());
                      });
                    })),
                  G
                );
              }),
            destroy: function () {
              ne(), (te = !0);
            },
          };
        if (!Zt(N, M)) return ie;
        function ne() {
          se.forEach(function (oe) {
            return oe();
          }),
            (se = []);
        }
        return (
          ie.setOptions(W).then(function (oe) {
            !te && W.onFirstUpdate && W.onFirstUpdate(oe);
          }),
          ie
        );
      };
    }
    var mc = _i(),
      gc = _i({ defaultModifiers: [fs, ws, ds, no] }),
      Es = _i({ defaultModifiers: [fs, ws, ds, no, ys, ea, ra, cs, _s] });
    const oa = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            afterMain: Bl,
            afterRead: In,
            afterWrite: Wl,
            applyStyles: no,
            arrow: cs,
            auto: Yt,
            basePlacements: jn,
            beforeMain: Fl,
            beforeRead: zl,
            beforeWrite: Ul,
            bottom: gt,
            clippingParents: Ml,
            computeStyles: ds,
            createPopper: Es,
            createPopperBase: mc,
            createPopperLite: gc,
            detectOverflow: tr,
            end: Yn,
            eventListeners: fs,
            flip: ea,
            hide: _s,
            left: Je,
            main: hi,
            modifierPhases: Vl,
            offset: ys,
            placements: eo,
            popper: Sr,
            popperGenerator: _i,
            popperOffsets: ws,
            preventOverflow: ra,
            read: Xn,
            reference: Rl,
            right: qe,
            start: qn,
            top: it,
            variationPlacements: Ji,
            viewport: us,
            write: Hl,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      sa = "dropdown",
      nr = ".bs.dropdown",
      xs = ".data-api",
      vc = "ArrowUp",
      lo = "ArrowDown",
      ao = `hide${nr}`,
      la = `hidden${nr}`,
      aa = `show${nr}`,
      yi = `shown${nr}`,
      uo = `click${nr}${xs}`,
      ua = `keydown${nr}${xs}`,
      _c = `keyup${nr}${xs}`,
      Nr = "show",
      _t = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      yc = `${_t}.${Nr}`,
      co = ".dropdown-menu",
      fo = j() ? "top-end" : "top-start",
      Cs = j() ? "top-start" : "top-end",
      wc = j() ? "bottom-end" : "bottom-start",
      ca = j() ? "bottom-start" : "bottom-end",
      Ec = j() ? "left-start" : "right-start",
      Lr = j() ? "right-start" : "left-start",
      ks = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      da = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class Mt extends ve {
      constructor(o, u) {
        super(o, u),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            K.next(this._element, co)[0] ||
            K.prev(this._element, co)[0] ||
            K.findOne(co, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return ks;
      }
      static get DefaultType() {
        return da;
      }
      static get NAME() {
        return sa;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (g(this._element) || this._isShown()) return;
        const o = { relatedTarget: this._element };
        if (!A.trigger(this._element, aa, o).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const u of [].concat(...document.body.children))
              A.on(u, "mouseover", E);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Nr),
            this._element.classList.add(Nr),
            A.trigger(this._element, yi, o);
        }
      }
      hide() {
        if (g(this._element) || !this._isShown()) return;
        const o = { relatedTarget: this._element };
        this._completeHide(o);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(o) {
        if (!A.trigger(this._element, ao, o).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const u of [].concat(...document.body.children))
              A.off(u, "mouseover", E);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Nr),
            this._element.classList.remove(Nr),
            this._element.setAttribute("aria-expanded", "false"),
            Ee.removeDataAttribute(this._menu, "popper"),
            A.trigger(this._element, la, o);
        }
      }
      _getConfig(o) {
        if (
          typeof (o = super._getConfig(o)).reference == "object" &&
          !c(o.reference) &&
          typeof o.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${sa.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return o;
      }
      _createPopper() {
        if (oa === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let o = this._element;
        this._config.reference === "parent"
          ? (o = this._parent)
          : c(this._config.reference)
          ? (o = d(this._config.reference))
          : typeof this._config.reference == "object" &&
            (o = this._config.reference);
        const u = this._getPopperConfig();
        this._popper = Es(o, this._menu, u);
      }
      _isShown() {
        return this._menu.classList.contains(Nr);
      }
      _getPlacement() {
        const o = this._parent;
        if (o.classList.contains("dropend")) return Ec;
        if (o.classList.contains("dropstart")) return Lr;
        if (o.classList.contains("dropup-center")) return "top";
        if (o.classList.contains("dropdown-center")) return "bottom";
        const u =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return o.classList.contains("dropup") ? (u ? Cs : fo) : u ? ca : wc;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: o } = this._config;
        return typeof o == "string"
          ? o.split(",").map((u) => Number.parseInt(u, 10))
          : typeof o == "function"
          ? (u) => o(u, this._element)
          : o;
      }
      _getPopperConfig() {
        const o = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (Ee.setDataAttribute(this._menu, "popper", "static"),
            (o.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...o, ...v(this._config.popperConfig, [o]) }
        );
      }
      _selectMenuItem({ key: o, target: u }) {
        const m = K.find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        ).filter((k) => p(k));
        m.length && S(m, u, o === lo, !m.includes(u)).focus();
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Mt.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0) throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
      static clearMenus(o) {
        if (o.button === 2 || (o.type === "keyup" && o.key !== "Tab")) return;
        const u = K.find(yc);
        for (const m of u) {
          const k = Mt.getInstance(m);
          if (!k || k._config.autoClose === !1) continue;
          const b = o.composedPath(),
            N = b.includes(k._menu);
          if (
            b.includes(k._element) ||
            (k._config.autoClose === "inside" && !N) ||
            (k._config.autoClose === "outside" && N) ||
            (k._menu.contains(o.target) &&
              ((o.type === "keyup" && o.key === "Tab") ||
                /input|select|option|textarea|form/i.test(o.target.tagName)))
          )
            continue;
          const M = { relatedTarget: k._element };
          o.type === "click" && (M.clickEvent = o), k._completeHide(M);
        }
      }
      static dataApiKeydownHandler(o) {
        const u = /input|textarea/i.test(o.target.tagName),
          m = o.key === "Escape",
          k = [vc, lo].includes(o.key);
        if ((!k && !m) || (u && !m)) return;
        o.preventDefault();
        const b = this.matches(_t)
            ? this
            : K.prev(this, _t)[0] ||
              K.next(this, _t)[0] ||
              K.findOne(_t, o.delegateTarget.parentNode),
          N = Mt.getOrCreateInstance(b);
        if (k) return o.stopPropagation(), N.show(), void N._selectMenuItem(o);
        N._isShown() && (o.stopPropagation(), N.hide(), b.focus());
      }
    }
    A.on(document, ua, _t, Mt.dataApiKeydownHandler),
      A.on(document, ua, co, Mt.dataApiKeydownHandler),
      A.on(document, uo, Mt.clearMenus),
      A.on(document, _c, Mt.clearMenus),
      A.on(document, uo, _t, function (f) {
        f.preventDefault(), Mt.getOrCreateInstance(this).toggle();
      }),
      w(Mt);
    const fa = "backdrop",
      ha = "show",
      jr = `mousedown.bs.${fa}`,
      rr = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      xc = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class pa extends Ue {
      constructor(o) {
        super(),
          (this._config = this._getConfig(o)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return rr;
      }
      static get DefaultType() {
        return xc;
      }
      static get NAME() {
        return fa;
      }
      show(o) {
        if (!this._config.isVisible) return void v(o);
        this._append();
        const u = this._getElement();
        this._config.isAnimated && T(u),
          u.classList.add(ha),
          this._emulateAnimation(() => {
            v(o);
          });
      }
      hide(o) {
        this._config.isVisible
          ? (this._getElement().classList.remove(ha),
            this._emulateAnimation(() => {
              this.dispose(), v(o);
            }))
          : v(o);
      }
      dispose() {
        this._isAppended &&
          (A.off(this._element, jr),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const o = document.createElement("div");
          (o.className = this._config.className),
            this._config.isAnimated && o.classList.add("fade"),
            (this._element = o);
        }
        return this._element;
      }
      _configAfterMerge(o) {
        return (o.rootElement = d(o.rootElement)), o;
      }
      _append() {
        if (this._isAppended) return;
        const o = this._getElement();
        this._config.rootElement.append(o),
          A.on(o, jr, () => {
            v(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(o) {
        y(o, this._getElement(), this._config.isAnimated);
      }
    }
    const ho = ".bs.focustrap",
      Cc = `focusin${ho}`,
      kc = `keydown.tab${ho}`,
      ma = "backward",
      bc = { autofocus: !0, trapElement: null },
      Sc = { autofocus: "boolean", trapElement: "element" };
    class bs extends Ue {
      constructor(o) {
        super(),
          (this._config = this._getConfig(o)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return bc;
      }
      static get DefaultType() {
        return Sc;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          A.off(document, ho),
          A.on(document, Cc, (o) => this._handleFocusin(o)),
          A.on(document, kc, (o) => this._handleKeydown(o)),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), A.off(document, ho));
      }
      _handleFocusin(o) {
        const { trapElement: u } = this._config;
        if (o.target === document || o.target === u || u.contains(o.target))
          return;
        const m = K.focusableChildren(u);
        m.length === 0
          ? u.focus()
          : this._lastTabNavDirection === ma
          ? m[m.length - 1].focus()
          : m[0].focus();
      }
      _handleKeydown(o) {
        o.key === "Tab" &&
          (this._lastTabNavDirection = o.shiftKey ? ma : "forward");
      }
    }
    const ga = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ss = ".sticky-top",
      Ir = "padding-right",
      Ts = "margin-right";
    class vn {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const o = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - o);
      }
      hide() {
        const o = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, Ir, (u) => u + o),
          this._setElementAttributes(ga, Ir, (u) => u + o),
          this._setElementAttributes(Ss, Ts, (u) => u - o);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, Ir),
          this._resetElementAttributes(ga, Ir),
          this._resetElementAttributes(Ss, Ts);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(o, u, m) {
        const k = this.getWidth();
        this._applyManipulationCallback(o, (b) => {
          if (b !== this._element && window.innerWidth > b.clientWidth + k)
            return;
          this._saveInitialAttribute(b, u);
          const N = window.getComputedStyle(b).getPropertyValue(u);
          b.style.setProperty(u, `${m(Number.parseFloat(N))}px`);
        });
      }
      _saveInitialAttribute(o, u) {
        const m = o.style.getPropertyValue(u);
        m && Ee.setDataAttribute(o, u, m);
      }
      _resetElementAttributes(o, u) {
        this._applyManipulationCallback(o, (m) => {
          const k = Ee.getDataAttribute(m, u);
          k !== null
            ? (Ee.removeDataAttribute(m, u), m.style.setProperty(u, k))
            : m.style.removeProperty(u);
        });
      }
      _applyManipulationCallback(o, u) {
        if (c(o)) u(o);
        else for (const m of K.find(o, this._element)) u(m);
      }
    }
    const yt = ".bs.modal",
      Os = `hide${yt}`,
      va = `hidePrevented${yt}`,
      po = `hidden${yt}`,
      As = `show${yt}`,
      Ps = `shown${yt}`,
      Tc = `resize${yt}`,
      ir = `click.dismiss${yt}`,
      $n = `mousedown.dismiss${yt}`,
      Oc = `keydown.dismiss${yt}`,
      Ac = `click${yt}.data-api`,
      _a = "modal-open",
      ya = "show",
      Ns = "modal-static",
      Pc = { backdrop: !0, focus: !0, keyboard: !0 },
      Nc = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class or extends ve {
      constructor(o, u) {
        super(o, u),
          (this._dialog = K.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new vn()),
          this._addEventListeners();
      }
      static get Default() {
        return Pc;
      }
      static get DefaultType() {
        return Nc;
      }
      static get NAME() {
        return "modal";
      }
      toggle(o) {
        return this._isShown ? this.hide() : this.show(o);
      }
      show(o) {
        this._isShown ||
          this._isTransitioning ||
          A.trigger(this._element, As, { relatedTarget: o }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(_a),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(o)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (A.trigger(this._element, Os).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(ya),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            )));
      }
      dispose() {
        A.off(window, yt),
          A.off(this._dialog, yt),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new pa({
          isVisible: !!this._config.backdrop,
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new bs({ trapElement: this._element });
      }
      _showElement(o) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const u = K.findOne(".modal-body", this._dialog);
        u && (u.scrollTop = 0),
          T(this._element),
          this._element.classList.add(ya),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                A.trigger(this._element, Ps, { relatedTarget: o });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        A.on(this._element, Oc, (o) => {
          o.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          A.on(window, Tc, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          A.on(this._element, $n, (o) => {
            A.one(this._element, ir, (u) => {
              this._element === o.target &&
                this._element === u.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(_a),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              A.trigger(this._element, po);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (A.trigger(this._element, va).defaultPrevented) return;
        const o =
            this._element.scrollHeight > document.documentElement.clientHeight,
          u = this._element.style.overflowY;
        u === "hidden" ||
          this._element.classList.contains(Ns) ||
          (o || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(Ns),
          this._queueCallback(() => {
            this._element.classList.remove(Ns),
              this._queueCallback(() => {
                this._element.style.overflowY = u;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const o =
            this._element.scrollHeight > document.documentElement.clientHeight,
          u = this._scrollBar.getWidth(),
          m = u > 0;
        if (m && !o) {
          const k = j() ? "paddingLeft" : "paddingRight";
          this._element.style[k] = `${u}px`;
        }
        if (!m && o) {
          const k = j() ? "paddingRight" : "paddingLeft";
          this._element.style[k] = `${u}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(o, u) {
        return this.each(function () {
          const m = or.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (m[o] === void 0) throw new TypeError(`No method named "${o}"`);
            m[o](u);
          }
        });
      }
    }
    A.on(document, Ac, '[data-bs-toggle="modal"]', function (f) {
      const o = K.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && f.preventDefault(),
        A.one(o, As, (m) => {
          m.defaultPrevented ||
            A.one(o, po, () => {
              p(this) && this.focus();
            });
        });
      const u = K.findOne(".modal.show");
      u && or.getInstance(u).hide(), or.getOrCreateInstance(o).toggle(this);
    }),
      Ke(or),
      w(or);
    const Jt = ".bs.offcanvas",
      wi = ".data-api",
      mo = `load${Jt}${wi}`,
      wa = "show",
      Ea = "showing",
      $r = "hiding",
      C = ".offcanvas.show",
      l = `show${Jt}`,
      h = `shown${Jt}`,
      x = `hide${Jt}`,
      $ = `hidePrevented${Jt}`,
      H = `hidden${Jt}`,
      X = `resize${Jt}`,
      ue = `click${Jt}${wi}`,
      Oe = `keydown.dismiss${Jt}`,
      at = { backdrop: !0, keyboard: !0, scroll: !1 },
      wt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class He extends ve {
      constructor(o, u) {
        super(o, u),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return at;
      }
      static get DefaultType() {
        return wt;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(o) {
        return this._isShown ? this.hide() : this.show(o);
      }
      show(o) {
        this._isShown ||
          A.trigger(this._element, l, { relatedTarget: o }).defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new vn().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(Ea),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(wa),
                this._element.classList.remove(Ea),
                A.trigger(this._element, h, { relatedTarget: o });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (A.trigger(this._element, x).defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add($r),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(wa, $r),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new vn().reset(),
                  A.trigger(this._element, H);
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const o = !!this._config.backdrop;
        return new pa({
          className: "offcanvas-backdrop",
          isVisible: o,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: o
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : A.trigger(this._element, $);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new bs({ trapElement: this._element });
      }
      _addEventListeners() {
        A.on(this._element, Oe, (o) => {
          o.key === "Escape" &&
            (this._config.keyboard ? this.hide() : A.trigger(this._element, $));
        });
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = He.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    A.on(document, ue, '[data-bs-toggle="offcanvas"]', function (f) {
      const o = K.getElementFromSelector(this);
      if ((["A", "AREA"].includes(this.tagName) && f.preventDefault(), g(this)))
        return;
      A.one(o, H, () => {
        p(this) && this.focus();
      });
      const u = K.findOne(C);
      u && u !== o && He.getInstance(u).hide(),
        He.getOrCreateInstance(o).toggle(this);
    }),
      A.on(window, mo, () => {
        for (const f of K.find(C)) He.getOrCreateInstance(f).show();
      }),
      A.on(window, X, () => {
        for (const f of K.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(f).position !== "fixed" &&
            He.getOrCreateInstance(f).hide();
      }),
      Ke(He),
      w(He);
    const en = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      _n = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      sr = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Rt = (f, o) => {
        const u = f.nodeName.toLowerCase();
        return o.includes(u)
          ? !_n.has(u) || !!sr.test(f.nodeValue)
          : o.filter((m) => m instanceof RegExp).some((m) => m.test(u));
      },
      Ei = {
        allowList: en,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      go = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      Lc = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class lr extends Ue {
      constructor(o) {
        super(), (this._config = this._getConfig(o));
      }
      static get Default() {
        return Ei;
      }
      static get DefaultType() {
        return go;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((o) => this._resolvePossibleFunction(o))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(o) {
        return (
          this._checkContent(o),
          (this._config.content = { ...this._config.content, ...o }),
          this
        );
      }
      toHtml() {
        const o = document.createElement("div");
        o.innerHTML = this._maybeSanitize(this._config.template);
        for (const [k, b] of Object.entries(this._config.content))
          this._setContent(o, b, k);
        const u = o.children[0],
          m = this._resolvePossibleFunction(this._config.extraClass);
        return m && u.classList.add(...m.split(" ")), u;
      }
      _typeCheckConfig(o) {
        super._typeCheckConfig(o), this._checkContent(o.content);
      }
      _checkContent(o) {
        for (const [u, m] of Object.entries(o))
          super._typeCheckConfig({ selector: u, entry: m }, Lc);
      }
      _setContent(o, u, m) {
        const k = K.findOne(m, o);
        k &&
          ((u = this._resolvePossibleFunction(u))
            ? c(u)
              ? this._putElementInTemplate(d(u), k)
              : this._config.html
              ? (k.innerHTML = this._maybeSanitize(u))
              : (k.textContent = u)
            : k.remove());
      }
      _maybeSanitize(o) {
        return this._config.sanitize
          ? (function (u, m, k) {
              if (!u.length) return u;
              if (k && typeof k == "function") return k(u);
              const b = new window.DOMParser().parseFromString(u, "text/html"),
                N = [].concat(...b.body.querySelectorAll("*"));
              for (const M of N) {
                const W = M.nodeName.toLowerCase();
                if (!Object.keys(m).includes(W)) {
                  M.remove();
                  continue;
                }
                const q = [].concat(...M.attributes),
                  G = [].concat(m["*"] || [], m[W] || []);
                for (const Q of q) Rt(Q, G) || M.removeAttribute(Q.nodeName);
              }
              return b.body.innerHTML;
            })(o, this._config.allowList, this._config.sanitizeFn)
          : o;
      }
      _resolvePossibleFunction(o) {
        return v(o, [this]);
      }
      _putElementInTemplate(o, u) {
        if (this._config.html) return (u.innerHTML = ""), void u.append(o);
        u.textContent = o.textContent;
      }
    }
    const jc = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ic = "fade",
      xa = "show",
      $h = ".modal",
      Dh = "hide.bs.modal",
      Ls = "hover",
      $c = "focus",
      B_ = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: j() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: j() ? "right" : "left",
      },
      U_ = {
        allowList: en,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      H_ = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class xi extends ve {
      constructor(o, u) {
        if (oa === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(o, u),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return U_;
      }
      static get DefaultType() {
        return H_;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          A.off(this._element.closest($h), Dh, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const o = A.trigger(this._element, this.constructor.eventName("show")),
          u = (
            _(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (o.defaultPrevented || !u) return;
        this._disposePopper();
        const m = this._getTipElement();
        this._element.setAttribute("aria-describedby", m.getAttribute("id"));
        const { container: k } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (k.append(m),
            A.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(m)),
          m.classList.add(xa),
          "ontouchstart" in document.documentElement)
        )
          for (const b of [].concat(...document.body.children))
            A.on(b, "mouseover", E);
        this._queueCallback(
          () => {
            A.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          this._isShown() &&
          !A.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(xa),
            "ontouchstart" in document.documentElement)
          )
            for (const o of [].concat(...document.body.children))
              A.off(o, "mouseover", E);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[$c] = !1),
            (this._activeTrigger[Ls] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  A.trigger(
                    this._element,
                    this.constructor.eventName("hidden")
                  ));
              },
              this.tip,
              this._isAnimated()
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(o) {
        const u = this._getTemplateFactory(o).toHtml();
        if (!u) return null;
        u.classList.remove(Ic, xa),
          u.classList.add(`bs-${this.constructor.NAME}-auto`);
        const m = ((k) => {
          do k += Math.floor(1e6 * Math.random());
          while (document.getElementById(k));
          return k;
        })(this.constructor.NAME).toString();
        return (
          u.setAttribute("id", m), this._isAnimated() && u.classList.add(Ic), u
        );
      }
      setContent(o) {
        (this._newContent = o),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(o) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(o)
            : (this._templateFactory = new lr({
                ...this._config,
                content: o,
                extraClass: this._resolvePossibleFunction(
                  this._config.customClass
                ),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(o) {
        return this.constructor.getOrCreateInstance(
          o.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(Ic))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(xa);
      }
      _createPopper(o) {
        const u = v(this._config.placement, [this, o, this._element]),
          m = B_[u.toUpperCase()];
        return Es(this._element, o, this._getPopperConfig(m));
      }
      _getOffset() {
        const { offset: o } = this._config;
        return typeof o == "string"
          ? o.split(",").map((u) => Number.parseInt(u, 10))
          : typeof o == "function"
          ? (u) => o(u, this._element)
          : o;
      }
      _resolvePossibleFunction(o) {
        return v(o, [this._element]);
      }
      _getPopperConfig(o) {
        const u = {
          placement: o,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (m) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  m.state.placement
                );
              },
            },
          ],
        };
        return { ...u, ...v(this._config.popperConfig, [u]) };
      }
      _setListeners() {
        const o = this._config.trigger.split(" ");
        for (const u of o)
          if (u === "click")
            A.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (m) => {
                this._initializeOnDelegatedTarget(m).toggle();
              }
            );
          else if (u !== "manual") {
            const m =
                u === Ls
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              k =
                u === Ls
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            A.on(this._element, m, this._config.selector, (b) => {
              const N = this._initializeOnDelegatedTarget(b);
              (N._activeTrigger[b.type === "focusin" ? $c : Ls] = !0),
                N._enter();
            }),
              A.on(this._element, k, this._config.selector, (b) => {
                const N = this._initializeOnDelegatedTarget(b);
                (N._activeTrigger[b.type === "focusout" ? $c : Ls] =
                  N._element.contains(b.relatedTarget)),
                  N._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          A.on(this._element.closest($h), Dh, this._hideModalHandler);
      }
      _fixTitle() {
        const o = this._element.getAttribute("title");
        o &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", o),
          this._element.setAttribute("data-bs-original-title", o),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(o, u) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(o, u));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(o) {
        const u = Ee.getDataAttributes(this._element);
        for (const m of Object.keys(u)) jc.has(m) && delete u[m];
        return (
          (o = { ...u, ...(typeof o == "object" && o ? o : {}) }),
          (o = this._mergeConfigObj(o)),
          (o = this._configAfterMerge(o)),
          this._typeCheckConfig(o),
          o
        );
      }
      _configAfterMerge(o) {
        return (
          (o.container = o.container === !1 ? document.body : d(o.container)),
          typeof o.delay == "number" &&
            (o.delay = { show: o.delay, hide: o.delay }),
          typeof o.title == "number" && (o.title = o.title.toString()),
          typeof o.content == "number" && (o.content = o.content.toString()),
          o
        );
      }
      _getDelegateConfig() {
        const o = {};
        for (const [u, m] of Object.entries(this._config))
          this.constructor.Default[u] !== m && (o[u] = m);
        return (o.selector = !1), (o.trigger = "manual"), o;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = xi.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0) throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    w(xi);
    const W_ = {
        ...xi.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      V_ = { ...xi.DefaultType, content: "(null|string|element|function)" };
    class Ca extends xi {
      static get Default() {
        return W_;
      }
      static get DefaultType() {
        return V_;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Ca.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0) throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    w(Ca);
    const Dc = ".bs.scrollspy",
      Q_ = `activate${Dc}`,
      Mh = `click${Dc}`,
      K_ = `load${Dc}.data-api`,
      vo = "active",
      Mc = "[href]",
      Rh = ".nav-link",
      q_ = `${Rh}, .nav-item > ${Rh}, .list-group-item`,
      Y_ = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      X_ = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class js extends ve {
      constructor(o, u) {
        super(o, u),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return Y_;
      }
      static get DefaultType() {
        return X_;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const o of this._observableSections.values())
          this._observer.observe(o);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(o) {
        return (
          (o.target = d(o.target) || document.body),
          (o.rootMargin = o.offset ? `${o.offset}px 0px -30%` : o.rootMargin),
          typeof o.threshold == "string" &&
            (o.threshold = o.threshold
              .split(",")
              .map((u) => Number.parseFloat(u))),
          o
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (A.off(this._config.target, Mh),
          A.on(this._config.target, Mh, Mc, (o) => {
            const u = this._observableSections.get(o.target.hash);
            if (u) {
              o.preventDefault();
              const m = this._rootElement || window,
                k = u.offsetTop - this._element.offsetTop;
              if (m.scrollTo)
                return void m.scrollTo({ top: k, behavior: "smooth" });
              m.scrollTop = k;
            }
          }));
      }
      _getNewObserver() {
        const o = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((u) => this._observerCallback(u), o);
      }
      _observerCallback(o) {
        const u = (N) => this._targetLinks.get(`#${N.target.id}`),
          m = (N) => {
            (this._previousScrollData.visibleEntryTop = N.target.offsetTop),
              this._process(u(N));
          },
          k = (this._rootElement || document.documentElement).scrollTop,
          b = k >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = k;
        for (const N of o) {
          if (!N.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(u(N));
            continue;
          }
          const M =
            N.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (b && M) {
            if ((m(N), !k)) return;
          } else b || M || m(N);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const o = K.find(Mc, this._config.target);
        for (const u of o) {
          if (!u.hash || g(u)) continue;
          const m = K.findOne(decodeURI(u.hash), this._element);
          p(m) &&
            (this._targetLinks.set(decodeURI(u.hash), u),
            this._observableSections.set(u.hash, m));
        }
      }
      _process(o) {
        this._activeTarget !== o &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = o),
          o.classList.add(vo),
          this._activateParents(o),
          A.trigger(this._element, Q_, { relatedTarget: o }));
      }
      _activateParents(o) {
        if (o.classList.contains("dropdown-item"))
          K.findOne(".dropdown-toggle", o.closest(".dropdown")).classList.add(
            vo
          );
        else
          for (const u of K.parents(o, ".nav, .list-group"))
            for (const m of K.prev(u, q_)) m.classList.add(vo);
      }
      _clearActiveClass(o) {
        o.classList.remove(vo);
        const u = K.find(`${Mc}.${vo}`, o);
        for (const m of u) m.classList.remove(vo);
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = js.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    A.on(window, K_, () => {
      for (const f of K.find('[data-bs-spy="scroll"]'))
        js.getOrCreateInstance(f);
    }),
      w(js);
    const Ci = ".bs.tab",
      G_ = `hide${Ci}`,
      Z_ = `hidden${Ci}`,
      J_ = `show${Ci}`,
      ey = `shown${Ci}`,
      ty = `click${Ci}`,
      ny = `keydown${Ci}`,
      ry = `load${Ci}`,
      iy = "ArrowLeft",
      zh = "ArrowRight",
      oy = "ArrowUp",
      Fh = "ArrowDown",
      Rc = "Home",
      Bh = "End",
      ki = "active",
      Uh = "fade",
      zc = "show",
      Hh = ".dropdown-toggle",
      Fc = `:not(${Hh})`,
      Wh =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Bc = `.nav-link${Fc}, .list-group-item${Fc}, [role="tab"]${Fc}, ${Wh}`,
      sy = `.${ki}[data-bs-toggle="tab"], .${ki}[data-bs-toggle="pill"], .${ki}[data-bs-toggle="list"]`;
    class bi extends ve {
      constructor(o) {
        super(o),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            A.on(this._element, ny, (u) => this._keydown(u)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const o = this._element;
        if (this._elemIsActive(o)) return;
        const u = this._getActiveElem(),
          m = u ? A.trigger(u, G_, { relatedTarget: o }) : null;
        A.trigger(o, J_, { relatedTarget: u }).defaultPrevented ||
          (m && m.defaultPrevented) ||
          (this._deactivate(u, o), this._activate(o, u));
      }
      _activate(o, u) {
        o &&
          (o.classList.add(ki),
          this._activate(K.getElementFromSelector(o)),
          this._queueCallback(
            () => {
              o.getAttribute("role") === "tab"
                ? (o.removeAttribute("tabindex"),
                  o.setAttribute("aria-selected", !0),
                  this._toggleDropDown(o, !0),
                  A.trigger(o, ey, { relatedTarget: u }))
                : o.classList.add(zc);
            },
            o,
            o.classList.contains(Uh)
          ));
      }
      _deactivate(o, u) {
        o &&
          (o.classList.remove(ki),
          o.blur(),
          this._deactivate(K.getElementFromSelector(o)),
          this._queueCallback(
            () => {
              o.getAttribute("role") === "tab"
                ? (o.setAttribute("aria-selected", !1),
                  o.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(o, !1),
                  A.trigger(o, Z_, { relatedTarget: u }))
                : o.classList.remove(zc);
            },
            o,
            o.classList.contains(Uh)
          ));
      }
      _keydown(o) {
        if (![iy, zh, oy, Fh, Rc, Bh].includes(o.key)) return;
        o.stopPropagation(), o.preventDefault();
        const u = this._getChildren().filter((k) => !g(k));
        let m;
        if ([Rc, Bh].includes(o.key)) m = u[o.key === Rc ? 0 : u.length - 1];
        else {
          const k = [zh, Fh].includes(o.key);
          m = S(u, o.target, k, !0);
        }
        m && (m.focus({ preventScroll: !0 }), bi.getOrCreateInstance(m).show());
      }
      _getChildren() {
        return K.find(Bc, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((o) => this._elemIsActive(o)) || null;
      }
      _setInitialAttributes(o, u) {
        this._setAttributeIfNotExists(o, "role", "tablist");
        for (const m of u) this._setInitialAttributesOnChild(m);
      }
      _setInitialAttributesOnChild(o) {
        o = this._getInnerElement(o);
        const u = this._elemIsActive(o),
          m = this._getOuterElement(o);
        o.setAttribute("aria-selected", u),
          m !== o && this._setAttributeIfNotExists(m, "role", "presentation"),
          u || o.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(o, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(o);
      }
      _setInitialAttributesOnTargetPanel(o) {
        const u = K.getElementFromSelector(o);
        u &&
          (this._setAttributeIfNotExists(u, "role", "tabpanel"),
          o.id &&
            this._setAttributeIfNotExists(u, "aria-labelledby", `${o.id}`));
      }
      _toggleDropDown(o, u) {
        const m = this._getOuterElement(o);
        if (!m.classList.contains("dropdown")) return;
        const k = (b, N) => {
          const M = K.findOne(b, m);
          M && M.classList.toggle(N, u);
        };
        k(Hh, ki), k(".dropdown-menu", zc), m.setAttribute("aria-expanded", u);
      }
      _setAttributeIfNotExists(o, u, m) {
        o.hasAttribute(u) || o.setAttribute(u, m);
      }
      _elemIsActive(o) {
        return o.classList.contains(ki);
      }
      _getInnerElement(o) {
        return o.matches(Bc) ? o : K.findOne(Bc, o);
      }
      _getOuterElement(o) {
        return o.closest(".nav-item, .list-group-item") || o;
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = bi.getOrCreateInstance(this);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    A.on(document, ty, Wh, function (f) {
      ["A", "AREA"].includes(this.tagName) && f.preventDefault(),
        g(this) || bi.getOrCreateInstance(this).show();
    }),
      A.on(window, ry, () => {
        for (const f of K.find(sy)) bi.getOrCreateInstance(f);
      }),
      w(bi);
    const Dr = ".bs.toast",
      ly = `mouseover${Dr}`,
      ay = `mouseout${Dr}`,
      uy = `focusin${Dr}`,
      cy = `focusout${Dr}`,
      dy = `hide${Dr}`,
      fy = `hidden${Dr}`,
      hy = `show${Dr}`,
      py = `shown${Dr}`,
      Vh = "hide",
      ka = "show",
      ba = "showing",
      my = { animation: "boolean", autohide: "boolean", delay: "number" },
      gy = { animation: !0, autohide: !0, delay: 5e3 };
    class Is extends ve {
      constructor(o, u) {
        super(o, u),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return gy;
      }
      static get DefaultType() {
        return my;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        A.trigger(this._element, hy).defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Vh),
          T(this._element),
          this._element.classList.add(ka, ba),
          this._queueCallback(
            () => {
              this._element.classList.remove(ba),
                A.trigger(this._element, py),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this.isShown() &&
          (A.trigger(this._element, dy).defaultPrevented ||
            (this._element.classList.add(ba),
            this._queueCallback(
              () => {
                this._element.classList.add(Vh),
                  this._element.classList.remove(ba, ka),
                  A.trigger(this._element, fy);
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(ka),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(ka);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(o, u) {
        switch (o.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = u;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = u;
        }
        if (u) return void this._clearTimeout();
        const m = o.relatedTarget;
        this._element === m ||
          this._element.contains(m) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        A.on(this._element, ly, (o) => this._onInteraction(o, !0)),
          A.on(this._element, ay, (o) => this._onInteraction(o, !1)),
          A.on(this._element, uy, (o) => this._onInteraction(o, !0)),
          A.on(this._element, cy, (o) => this._onInteraction(o, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Is.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0) throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    return (
      Ke(Is),
      w(Is),
      {
        Alert: fn,
        Button: Vn,
        Carousel: Cr,
        Collapse: Ln,
        Dropdown: Mt,
        Modal: or,
        Offcanvas: He,
        Popover: Ca,
        ScrollSpy: js,
        Tab: bi,
        Toast: Is,
        Tooltip: xi,
      }
    );
  });
})(Z1);
var J1 = { exports: {} },
  bt = "top",
  Wt = "bottom",
  Vt = "right",
  St = "left",
  Ju = "auto",
  rs = [bt, Wt, Vt, St],
  Bi = "start",
  Ko = "end",
  s_ = "clippingParents",
  yh = "viewport",
  wo = "popper",
  l_ = "reference",
  pf = rs.reduce(function (e, t) {
    return e.concat([t + "-" + Bi, t + "-" + Ko]);
  }, []),
  wh = [].concat(rs, [Ju]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Bi, t + "-" + Ko]);
  }, []),
  a_ = "beforeRead",
  u_ = "read",
  c_ = "afterRead",
  d_ = "beforeMain",
  f_ = "main",
  h_ = "afterMain",
  p_ = "beforeWrite",
  m_ = "write",
  g_ = "afterWrite",
  v_ = [a_, u_, c_, d_, f_, h_, p_, m_, g_];
function Wn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ui(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eh(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function eE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      s = t.elements[n];
    !un(s) ||
      !Wn(s) ||
      (Object.assign(s.style, r),
      Object.keys(i).forEach(function (a) {
        var c = i[a];
        c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
      }));
  });
}
function tE(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          s = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          c = a.reduce(function (d, p) {
            return (d[p] = ""), d;
          }, {});
        !un(i) ||
          !Wn(i) ||
          (Object.assign(i.style, c),
          Object.keys(s).forEach(function (d) {
            i.removeAttribute(d);
          }));
      });
    }
  );
}
const xh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: eE,
  effect: tE,
  requires: ["computeStyles"],
};
function Hn(e) {
  return e.split("-")[0];
}
var $i = Math.max,
  $u = Math.min,
  qo = Math.round;
function mf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function __() {
  return !/^((?!chrome|android).)*safari/i.test(mf());
}
function Yo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    s = 1;
  t &&
    un(e) &&
    ((i = (e.offsetWidth > 0 && qo(r.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && qo(r.height) / e.offsetHeight) || 1));
  var a = Ui(e) ? Qt(e) : window,
    c = a.visualViewport,
    d = !__() && n,
    p = (r.left + (d && c ? c.offsetLeft : 0)) / i,
    g = (r.top + (d && c ? c.offsetTop : 0)) / s,
    _ = r.width / i,
    E = r.height / s;
  return {
    width: _,
    height: E,
    top: g,
    right: p + _,
    bottom: g + E,
    left: p,
    x: p,
    y: g,
  };
}
function Ch(e) {
  var t = Yo(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function y_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Eh(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function vr(e) {
  return Qt(e).getComputedStyle(e);
}
function nE(e) {
  return ["table", "td", "th"].indexOf(Wn(e)) >= 0;
}
function ai(e) {
  return ((Ui(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ec(e) {
  return Wn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Eh(e) ? e.host : null) || ai(e);
}
function xm(e) {
  return !un(e) || vr(e).position === "fixed" ? null : e.offsetParent;
}
function rE(e) {
  var t = /firefox/i.test(mf()),
    n = /Trident/i.test(mf());
  if (n && un(e)) {
    var r = vr(e);
    if (r.position === "fixed") return null;
  }
  var i = ec(e);
  for (Eh(i) && (i = i.host); un(i) && ["html", "body"].indexOf(Wn(i)) < 0; ) {
    var s = vr(i);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Nl(e) {
  for (var t = Qt(e), n = xm(e); n && nE(n) && vr(n).position === "static"; )
    n = xm(n);
  return n &&
    (Wn(n) === "html" || (Wn(n) === "body" && vr(n).position === "static"))
    ? t
    : n || rE(e) || t;
}
function kh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function il(e, t, n) {
  return $i(e, $u(t, n));
}
function iE(e, t, n) {
  var r = il(e, t, n);
  return r > n ? n : r;
}
function w_() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function E_(e) {
  return Object.assign({}, w_(), e);
}
function x_(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var oE = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    E_(typeof t != "number" ? t : x_(t, rs))
  );
};
function sE(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    s = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    c = Hn(n.placement),
    d = kh(c),
    p = [St, Vt].indexOf(c) >= 0,
    g = p ? "height" : "width";
  if (!(!s || !a)) {
    var _ = oE(i.padding, n),
      E = Ch(s),
      T = d === "y" ? bt : St,
      L = d === "y" ? Wt : Vt,
      P =
        n.rects.reference[g] + n.rects.reference[d] - a[d] - n.rects.popper[g],
      j = a[d] - n.rects.reference[d],
      w = Nl(s),
      v = w ? (d === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
      y = P / 2 - j / 2,
      S = _[T],
      I = v - E[g] - _[L],
      z = v / 2 - E[g] / 2 + y,
      B = il(S, z, I),
      U = d;
    n.modifiersData[r] = ((t = {}), (t[U] = B), (t.centerOffset = B - z), t);
  }
}
function lE(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (y_(t.elements.popper, i) && (t.elements.arrow = i)));
}
const C_ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sE,
  effect: lE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xo(e) {
  return e.split("-")[1];
}
var aE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function uE(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: qo(n * i) / i || 0, y: qo(r * i) / i || 0 };
}
function Cm(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    s = e.variation,
    a = e.offsets,
    c = e.position,
    d = e.gpuAcceleration,
    p = e.adaptive,
    g = e.roundOffsets,
    _ = e.isFixed,
    E = a.x,
    T = E === void 0 ? 0 : E,
    L = a.y,
    P = L === void 0 ? 0 : L,
    j = typeof g == "function" ? g({ x: T, y: P }) : { x: T, y: P };
  (T = j.x), (P = j.y);
  var w = a.hasOwnProperty("x"),
    v = a.hasOwnProperty("y"),
    y = St,
    S = bt,
    I = window;
  if (p) {
    var z = Nl(n),
      B = "clientHeight",
      U = "clientWidth";
    if (
      (z === Qt(n) &&
        ((z = ai(n)),
        vr(z).position !== "static" &&
          c === "absolute" &&
          ((B = "scrollHeight"), (U = "scrollWidth"))),
      (z = z),
      i === bt || ((i === St || i === Vt) && s === Ko))
    ) {
      S = Wt;
      var re =
        _ && z === I && I.visualViewport ? I.visualViewport.height : z[B];
      (P -= re - r.height), (P *= d ? 1 : -1);
    }
    if (i === St || ((i === bt || i === Wt) && s === Ko)) {
      y = Vt;
      var Z = _ && z === I && I.visualViewport ? I.visualViewport.width : z[U];
      (T -= Z - r.width), (T *= d ? 1 : -1);
    }
  }
  var fe = Object.assign({ position: c }, p && aE),
    je = g === !0 ? uE({ x: T, y: P }, Qt(n)) : { x: T, y: P };
  if (((T = je.x), (P = je.y), d)) {
    var ke;
    return Object.assign(
      {},
      fe,
      ((ke = {}),
      (ke[S] = v ? "0" : ""),
      (ke[y] = w ? "0" : ""),
      (ke.transform =
        (I.devicePixelRatio || 1) <= 1
          ? "translate(" + T + "px, " + P + "px)"
          : "translate3d(" + T + "px, " + P + "px, 0)"),
      ke)
    );
  }
  return Object.assign(
    {},
    fe,
    ((t = {}),
    (t[S] = v ? P + "px" : ""),
    (t[y] = w ? T + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function cE(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    s = n.adaptive,
    a = s === void 0 ? !0 : s,
    c = n.roundOffsets,
    d = c === void 0 ? !0 : c,
    p = {
      placement: Hn(t.placement),
      variation: Xo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Cm(
        Object.assign({}, p, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: d,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Cm(
          Object.assign({}, p, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: d,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const bh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cE,
  data: {},
};
var Qa = { passive: !0 };
function dE(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    s = i === void 0 ? !0 : i,
    a = r.resize,
    c = a === void 0 ? !0 : a,
    d = Qt(t.elements.popper),
    p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      p.forEach(function (g) {
        g.addEventListener("scroll", n.update, Qa);
      }),
    c && d.addEventListener("resize", n.update, Qa),
    function () {
      s &&
        p.forEach(function (g) {
          g.removeEventListener("scroll", n.update, Qa);
        }),
        c && d.removeEventListener("resize", n.update, Qa);
    }
  );
}
const Sh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: dE,
  data: {},
};
var fE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function au(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return fE[t];
  });
}
var hE = { start: "end", end: "start" };
function km(e) {
  return e.replace(/start|end/g, function (t) {
    return hE[t];
  });
}
function Th(e) {
  var t = Qt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Oh(e) {
  return Yo(ai(e)).left + Th(e).scrollLeft;
}
function pE(e, t) {
  var n = Qt(e),
    r = ai(e),
    i = n.visualViewport,
    s = r.clientWidth,
    a = r.clientHeight,
    c = 0,
    d = 0;
  if (i) {
    (s = i.width), (a = i.height);
    var p = __();
    (p || (!p && t === "fixed")) && ((c = i.offsetLeft), (d = i.offsetTop));
  }
  return { width: s, height: a, x: c + Oh(e), y: d };
}
function mE(e) {
  var t,
    n = ai(e),
    r = Th(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = $i(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    a = $i(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    c = -r.scrollLeft + Oh(e),
    d = -r.scrollTop;
  return (
    vr(i || n).direction === "rtl" &&
      (c += $i(n.clientWidth, i ? i.clientWidth : 0) - s),
    { width: s, height: a, x: c, y: d }
  );
}
function Ah(e) {
  var t = vr(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function k_(e) {
  return ["html", "body", "#document"].indexOf(Wn(e)) >= 0
    ? e.ownerDocument.body
    : un(e) && Ah(e)
    ? e
    : k_(ec(e));
}
function ol(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = k_(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = Qt(r),
    a = i ? [s].concat(s.visualViewport || [], Ah(r) ? r : []) : r,
    c = t.concat(a);
  return i ? c : c.concat(ol(ec(a)));
}
function gf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function gE(e, t) {
  var n = Yo(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function bm(e, t, n) {
  return t === yh ? gf(pE(e, n)) : Ui(t) ? gE(t, n) : gf(mE(ai(e)));
}
function vE(e) {
  var t = ol(ec(e)),
    n = ["absolute", "fixed"].indexOf(vr(e).position) >= 0,
    r = n && un(e) ? Nl(e) : e;
  return Ui(r)
    ? t.filter(function (i) {
        return Ui(i) && y_(i, r) && Wn(i) !== "body";
      })
    : [];
}
function _E(e, t, n, r) {
  var i = t === "clippingParents" ? vE(e) : [].concat(t),
    s = [].concat(i, [n]),
    a = s[0],
    c = s.reduce(function (d, p) {
      var g = bm(e, p, r);
      return (
        (d.top = $i(g.top, d.top)),
        (d.right = $u(g.right, d.right)),
        (d.bottom = $u(g.bottom, d.bottom)),
        (d.left = $i(g.left, d.left)),
        d
      );
    }, bm(e, a, r));
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function b_(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Hn(r) : null,
    s = r ? Xo(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    c = t.y + t.height / 2 - n.height / 2,
    d;
  switch (i) {
    case bt:
      d = { x: a, y: t.y - n.height };
      break;
    case Wt:
      d = { x: a, y: t.y + t.height };
      break;
    case Vt:
      d = { x: t.x + t.width, y: c };
      break;
    case St:
      d = { x: t.x - n.width, y: c };
      break;
    default:
      d = { x: t.x, y: t.y };
  }
  var p = i ? kh(i) : null;
  if (p != null) {
    var g = p === "y" ? "height" : "width";
    switch (s) {
      case Bi:
        d[p] = d[p] - (t[g] / 2 - n[g] / 2);
        break;
      case Ko:
        d[p] = d[p] + (t[g] / 2 - n[g] / 2);
        break;
    }
  }
  return d;
}
function Go(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    s = n.strategy,
    a = s === void 0 ? e.strategy : s,
    c = n.boundary,
    d = c === void 0 ? s_ : c,
    p = n.rootBoundary,
    g = p === void 0 ? yh : p,
    _ = n.elementContext,
    E = _ === void 0 ? wo : _,
    T = n.altBoundary,
    L = T === void 0 ? !1 : T,
    P = n.padding,
    j = P === void 0 ? 0 : P,
    w = E_(typeof j != "number" ? j : x_(j, rs)),
    v = E === wo ? l_ : wo,
    y = e.rects.popper,
    S = e.elements[L ? v : E],
    I = _E(Ui(S) ? S : S.contextElement || ai(e.elements.popper), d, g, a),
    z = Yo(e.elements.reference),
    B = b_({ reference: z, element: y, strategy: "absolute", placement: i }),
    U = gf(Object.assign({}, y, B)),
    re = E === wo ? U : z,
    Z = {
      top: I.top - re.top + w.top,
      bottom: re.bottom - I.bottom + w.bottom,
      left: I.left - re.left + w.left,
      right: re.right - I.right + w.right,
    },
    fe = e.modifiersData.offset;
  if (E === wo && fe) {
    var je = fe[i];
    Object.keys(Z).forEach(function (ke) {
      var ht = [Vt, Wt].indexOf(ke) >= 0 ? 1 : -1,
        pt = [bt, Wt].indexOf(ke) >= 0 ? "y" : "x";
      Z[ke] += je[pt] * ht;
    });
  }
  return Z;
}
function yE(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    s = n.rootBoundary,
    a = n.padding,
    c = n.flipVariations,
    d = n.allowedAutoPlacements,
    p = d === void 0 ? wh : d,
    g = Xo(r),
    _ = g
      ? c
        ? pf
        : pf.filter(function (L) {
            return Xo(L) === g;
          })
      : rs,
    E = _.filter(function (L) {
      return p.indexOf(L) >= 0;
    });
  E.length === 0 && (E = _);
  var T = E.reduce(function (L, P) {
    return (
      (L[P] = Go(e, { placement: P, boundary: i, rootBoundary: s, padding: a })[
        Hn(P)
      ]),
      L
    );
  }, {});
  return Object.keys(T).sort(function (L, P) {
    return T[L] - T[P];
  });
}
function wE(e) {
  if (Hn(e) === Ju) return [];
  var t = au(e);
  return [km(e), t, km(t)];
}
function EE(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        s = i === void 0 ? !0 : i,
        a = n.altAxis,
        c = a === void 0 ? !0 : a,
        d = n.fallbackPlacements,
        p = n.padding,
        g = n.boundary,
        _ = n.rootBoundary,
        E = n.altBoundary,
        T = n.flipVariations,
        L = T === void 0 ? !0 : T,
        P = n.allowedAutoPlacements,
        j = t.options.placement,
        w = Hn(j),
        v = w === j,
        y = d || (v || !L ? [au(j)] : wE(j)),
        S = [j].concat(y).reduce(function (Ee, Ue) {
          return Ee.concat(
            Hn(Ue) === Ju
              ? yE(t, {
                  placement: Ue,
                  boundary: g,
                  rootBoundary: _,
                  padding: p,
                  flipVariations: L,
                  allowedAutoPlacements: P,
                })
              : Ue
          );
        }, []),
        I = t.rects.reference,
        z = t.rects.popper,
        B = new Map(),
        U = !0,
        re = S[0],
        Z = 0;
      Z < S.length;
      Z++
    ) {
      var fe = S[Z],
        je = Hn(fe),
        ke = Xo(fe) === Bi,
        ht = [bt, Wt].indexOf(je) >= 0,
        pt = ht ? "width" : "height",
        Ie = Go(t, {
          placement: fe,
          boundary: g,
          rootBoundary: _,
          altBoundary: E,
          padding: p,
        }),
        ze = ht ? (ke ? Vt : St) : ke ? Wt : bt;
      I[pt] > z[pt] && (ze = au(ze));
      var V = au(ze),
        ee = [];
      if (
        (s && ee.push(Ie[je] <= 0),
        c && ee.push(Ie[ze] <= 0, Ie[V] <= 0),
        ee.every(function (Ee) {
          return Ee;
        }))
      ) {
        (re = fe), (U = !1);
        break;
      }
      B.set(fe, ee);
    }
    if (U)
      for (
        var A = L ? 3 : 1,
          pe = function (Ue) {
            var ve = S.find(function ($e) {
              var K = B.get($e);
              if (K)
                return K.slice(0, Ue).every(function (Ke) {
                  return Ke;
                });
            });
            if (ve) return (re = ve), "break";
          },
          ge = A;
        ge > 0;
        ge--
      ) {
        var D = pe(ge);
        if (D === "break") break;
      }
    t.placement !== re &&
      ((t.modifiersData[r]._skip = !0), (t.placement = re), (t.reset = !0));
  }
}
const S_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: EE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Sm(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Tm(e) {
  return [bt, Vt, Wt, St].some(function (t) {
    return e[t] >= 0;
  });
}
function xE(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    a = Go(t, { elementContext: "reference" }),
    c = Go(t, { altBoundary: !0 }),
    d = Sm(a, r),
    p = Sm(c, i, s),
    g = Tm(d),
    _ = Tm(p);
  (t.modifiersData[n] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: p,
    isReferenceHidden: g,
    hasPopperEscaped: _,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": g,
      "data-popper-escaped": _,
    }));
}
const T_ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: xE,
};
function CE(e, t, n) {
  var r = Hn(e),
    i = [St, bt].indexOf(r) >= 0 ? -1 : 1,
    s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = s[0],
    c = s[1];
  return (
    (a = a || 0),
    (c = (c || 0) * i),
    [St, Vt].indexOf(r) >= 0 ? { x: c, y: a } : { x: a, y: c }
  );
}
function kE(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    s = i === void 0 ? [0, 0] : i,
    a = wh.reduce(function (g, _) {
      return (g[_] = CE(_, t.rects, s)), g;
    }, {}),
    c = a[t.placement],
    d = c.x,
    p = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += d),
    (t.modifiersData.popperOffsets.y += p)),
    (t.modifiersData[r] = a);
}
const O_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: kE,
};
function bE(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = b_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const Ph = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bE,
  data: {},
};
function SE(e) {
  return e === "x" ? "y" : "x";
}
function TE(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    s = i === void 0 ? !0 : i,
    a = n.altAxis,
    c = a === void 0 ? !1 : a,
    d = n.boundary,
    p = n.rootBoundary,
    g = n.altBoundary,
    _ = n.padding,
    E = n.tether,
    T = E === void 0 ? !0 : E,
    L = n.tetherOffset,
    P = L === void 0 ? 0 : L,
    j = Go(t, { boundary: d, rootBoundary: p, padding: _, altBoundary: g }),
    w = Hn(t.placement),
    v = Xo(t.placement),
    y = !v,
    S = kh(w),
    I = SE(S),
    z = t.modifiersData.popperOffsets,
    B = t.rects.reference,
    U = t.rects.popper,
    re =
      typeof P == "function"
        ? P(Object.assign({}, t.rects, { placement: t.placement }))
        : P,
    Z =
      typeof re == "number"
        ? { mainAxis: re, altAxis: re }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, re),
    fe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    je = { x: 0, y: 0 };
  if (z) {
    if (s) {
      var ke,
        ht = S === "y" ? bt : St,
        pt = S === "y" ? Wt : Vt,
        Ie = S === "y" ? "height" : "width",
        ze = z[S],
        V = ze + j[ht],
        ee = ze - j[pt],
        A = T ? -U[Ie] / 2 : 0,
        pe = v === Bi ? B[Ie] : U[Ie],
        ge = v === Bi ? -U[Ie] : -B[Ie],
        D = t.elements.arrow,
        Ee = T && D ? Ch(D) : { width: 0, height: 0 },
        Ue = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : w_(),
        ve = Ue[ht],
        $e = Ue[pt],
        K = il(0, B[Ie], Ee[Ie]),
        Ke = y ? B[Ie] / 2 - A - K - ve - Z.mainAxis : pe - K - ve - Z.mainAxis,
        yr = y
          ? -B[Ie] / 2 + A + K + $e + Z.mainAxis
          : ge + K + $e + Z.mainAxis,
        J = t.elements.arrow && Nl(t.elements.arrow),
        wr = J ? (S === "y" ? J.clientTop || 0 : J.clientLeft || 0) : 0,
        fn = (ke = fe == null ? void 0 : fe[S]) != null ? ke : 0,
        Vi = ze + Ke - fn - wr,
        Vn = ze + yr - fn,
        mt = il(T ? $u(V, Vi) : V, ze, T ? $i(ee, Vn) : ee);
      (z[S] = mt), (je[S] = mt - ze);
    }
    if (c) {
      var ui,
        Qn = S === "x" ? bt : St,
        Tn = S === "x" ? Wt : Vt,
        hn = z[I],
        Er = I === "y" ? "height" : "width",
        Qi = hn + j[Qn],
        Ki = hn - j[Tn],
        On = [bt, St].indexOf(w) !== -1,
        It = (ui = fe == null ? void 0 : fe[I]) != null ? ui : 0,
        ci = On ? Qi : hn - B[Er] - U[Er] - It + Z.altAxis,
        $t = On ? hn + B[Er] + U[Er] - It - Z.altAxis : Ki,
        Ze = T && On ? iE(ci, hn, $t) : il(T ? ci : Qi, hn, T ? $t : Ki);
      (z[I] = Ze), (je[I] = Ze - hn);
    }
    t.modifiersData[r] = je;
  }
}
const A_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: TE,
  requiresIfExists: ["offset"],
};
function OE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function AE(e) {
  return e === Qt(e) || !un(e) ? Th(e) : OE(e);
}
function PE(e) {
  var t = e.getBoundingClientRect(),
    n = qo(t.width) / e.offsetWidth || 1,
    r = qo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function NE(e, t, n) {
  n === void 0 && (n = !1);
  var r = un(t),
    i = un(t) && PE(t),
    s = ai(t),
    a = Yo(e, i, n),
    c = { scrollLeft: 0, scrollTop: 0 },
    d = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Wn(t) !== "body" || Ah(s)) && (c = AE(t)),
      un(t)
        ? ((d = Yo(t, !0)), (d.x += t.clientLeft), (d.y += t.clientTop))
        : s && (d.x = Oh(s))),
    {
      x: a.left + c.scrollLeft - d.x,
      y: a.top + c.scrollTop - d.y,
      width: a.width,
      height: a.height,
    }
  );
}
function LE(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function (c) {
      if (!n.has(c)) {
        var d = t.get(c);
        d && i(d);
      }
    }),
      r.push(s);
  }
  return (
    e.forEach(function (s) {
      n.has(s.name) || i(s);
    }),
    r
  );
}
function jE(e) {
  var t = LE(e);
  return v_.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      })
    );
  }, []);
}
function IE(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function $E(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Om = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Am() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function tc(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    s = i === void 0 ? Om : i;
  return function (c, d, p) {
    p === void 0 && (p = s);
    var g = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Om, s),
        modifiersData: {},
        elements: { reference: c, popper: d },
        attributes: {},
        styles: {},
      },
      _ = [],
      E = !1,
      T = {
        state: g,
        setOptions: function (w) {
          var v = typeof w == "function" ? w(g.options) : w;
          P(),
            (g.options = Object.assign({}, s, g.options, v)),
            (g.scrollParents = {
              reference: Ui(c)
                ? ol(c)
                : c.contextElement
                ? ol(c.contextElement)
                : [],
              popper: ol(d),
            });
          var y = jE($E([].concat(r, g.options.modifiers)));
          return (
            (g.orderedModifiers = y.filter(function (S) {
              return S.enabled;
            })),
            L(),
            T.update()
          );
        },
        forceUpdate: function () {
          if (!E) {
            var w = g.elements,
              v = w.reference,
              y = w.popper;
            if (Am(v, y)) {
              (g.rects = {
                reference: NE(v, Nl(y), g.options.strategy === "fixed"),
                popper: Ch(y),
              }),
                (g.reset = !1),
                (g.placement = g.options.placement),
                g.orderedModifiers.forEach(function (Z) {
                  return (g.modifiersData[Z.name] = Object.assign({}, Z.data));
                });
              for (var S = 0; S < g.orderedModifiers.length; S++) {
                if (g.reset === !0) {
                  (g.reset = !1), (S = -1);
                  continue;
                }
                var I = g.orderedModifiers[S],
                  z = I.fn,
                  B = I.options,
                  U = B === void 0 ? {} : B,
                  re = I.name;
                typeof z == "function" &&
                  (g = z({ state: g, options: U, name: re, instance: T }) || g);
              }
            }
          }
        },
        update: IE(function () {
          return new Promise(function (j) {
            T.forceUpdate(), j(g);
          });
        }),
        destroy: function () {
          P(), (E = !0);
        },
      };
    if (!Am(c, d)) return T;
    T.setOptions(p).then(function (j) {
      !E && p.onFirstUpdate && p.onFirstUpdate(j);
    });
    function L() {
      g.orderedModifiers.forEach(function (j) {
        var w = j.name,
          v = j.options,
          y = v === void 0 ? {} : v,
          S = j.effect;
        if (typeof S == "function") {
          var I = S({ state: g, name: w, instance: T, options: y }),
            z = function () {};
          _.push(I || z);
        }
      });
    }
    function P() {
      _.forEach(function (j) {
        return j();
      }),
        (_ = []);
    }
    return T;
  };
}
var DE = tc(),
  ME = [Sh, Ph, bh, xh],
  RE = tc({ defaultModifiers: ME }),
  zE = [Sh, Ph, bh, xh, O_, S_, A_, C_, T_],
  FE = tc({ defaultModifiers: zE });
const BE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterMain: h_,
        afterRead: c_,
        afterWrite: g_,
        applyStyles: xh,
        arrow: C_,
        auto: Ju,
        basePlacements: rs,
        beforeMain: d_,
        beforeRead: a_,
        beforeWrite: p_,
        bottom: Wt,
        clippingParents: s_,
        computeStyles: bh,
        createPopper: FE,
        createPopperBase: DE,
        createPopperLite: RE,
        detectOverflow: Go,
        end: Ko,
        eventListeners: Sh,
        flip: S_,
        hide: T_,
        left: St,
        main: f_,
        modifierPhases: v_,
        offset: O_,
        placements: wh,
        popper: wo,
        popperGenerator: tc,
        popperOffsets: Ph,
        preventOverflow: A_,
        read: u_,
        reference: l_,
        right: Vt,
        start: Bi,
        top: bt,
        variationPlacements: pf,
        viewport: yh,
        write: m_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  UE = Sy(BE);
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r(UE);
  })(Im, function (n) {
    function r(C) {
      const l = Object.create(null, {
        [Symbol.toStringTag]: { value: "Module" },
      });
      if (C) {
        for (const h in C)
          if (h !== "default") {
            const x = Object.getOwnPropertyDescriptor(C, h);
            Object.defineProperty(
              l,
              h,
              x.get ? x : { enumerable: !0, get: () => C[h] }
            );
          }
      }
      return (l.default = C), Object.freeze(l);
    }
    const i = r(n),
      s = new Map(),
      a = {
        set(C, l, h) {
          s.has(C) || s.set(C, new Map());
          const x = s.get(C);
          x.has(l) || x.size === 0
            ? x.set(l, h)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(x.keys())[0]
                }.`
              );
        },
        get: (C, l) => (s.has(C) && s.get(C).get(l)) || null,
        remove(C, l) {
          if (!s.has(C)) return;
          const h = s.get(C);
          h.delete(l), h.size === 0 && s.delete(C);
        },
      },
      c = "transitionend",
      d = (C) => (
        C &&
          window.CSS &&
          window.CSS.escape &&
          (C = C.replace(/#([^\s"#']+)/g, (l, h) => `#${CSS.escape(h)}`)),
        C
      ),
      p = (C) => {
        C.dispatchEvent(new Event(c));
      },
      g = (C) =>
        !(!C || typeof C != "object") &&
        (C.jquery !== void 0 && (C = C[0]), C.nodeType !== void 0),
      _ = (C) =>
        g(C)
          ? C.jquery
            ? C[0]
            : C
          : typeof C == "string" && C.length > 0
          ? document.querySelector(d(C))
          : null,
      E = (C) => {
        if (!g(C) || C.getClientRects().length === 0) return !1;
        const l =
            getComputedStyle(C).getPropertyValue("visibility") === "visible",
          h = C.closest("details:not([open])");
        if (!h) return l;
        if (h !== C) {
          const x = C.closest("summary");
          if ((x && x.parentNode !== h) || x === null) return !1;
        }
        return l;
      },
      T = (C) =>
        !C ||
        C.nodeType !== Node.ELEMENT_NODE ||
        !!C.classList.contains("disabled") ||
        (C.disabled !== void 0
          ? C.disabled
          : C.hasAttribute("disabled") &&
            C.getAttribute("disabled") !== "false"),
      L = (C) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof C.getRootNode == "function") {
          const l = C.getRootNode();
          return l instanceof ShadowRoot ? l : null;
        }
        return C instanceof ShadowRoot
          ? C
          : C.parentNode
          ? L(C.parentNode)
          : null;
      },
      P = () => {},
      j = (C) => {
        C.offsetHeight;
      },
      w = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      v = [],
      y = () => document.documentElement.dir === "rtl",
      S = (C) => {
        var l;
        (l = () => {
          const h = w();
          if (h) {
            const x = C.NAME,
              $ = h.fn[x];
            (h.fn[x] = C.jQueryInterface),
              (h.fn[x].Constructor = C),
              (h.fn[x].noConflict = () => ((h.fn[x] = $), C.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (v.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const h of v) h();
                }),
              v.push(l))
            : l();
      },
      I = (C, l = [], h = C) => (typeof C == "function" ? C(...l) : h),
      z = (C, l, h = !0) => {
        if (!h) return void I(C);
        const x =
          ((X) => {
            if (!X) return 0;
            let { transitionDuration: ue, transitionDelay: Oe } =
              window.getComputedStyle(X);
            const at = Number.parseFloat(ue),
              wt = Number.parseFloat(Oe);
            return at || wt
              ? ((ue = ue.split(",")[0]),
                (Oe = Oe.split(",")[0]),
                1e3 * (Number.parseFloat(ue) + Number.parseFloat(Oe)))
              : 0;
          })(l) + 5;
        let $ = !1;
        const H = ({ target: X }) => {
          X === l && (($ = !0), l.removeEventListener(c, H), I(C));
        };
        l.addEventListener(c, H),
          setTimeout(() => {
            $ || p(l);
          }, x);
      },
      B = (C, l, h, x) => {
        const $ = C.length;
        let H = C.indexOf(l);
        return H === -1
          ? !h && x
            ? C[$ - 1]
            : C[0]
          : ((H += h ? 1 : -1),
            x && (H = (H + $) % $),
            C[Math.max(0, Math.min(H, $ - 1))]);
      },
      U = /[^.]*(?=\..*)\.|.*/,
      re = /\..*/,
      Z = /::\d+$/,
      fe = {};
    let je = 1;
    const ke = { mouseenter: "mouseover", mouseleave: "mouseout" },
      ht = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function pt(C, l) {
      return (l && `${l}::${je++}`) || C.uidEvent || je++;
    }
    function Ie(C) {
      const l = pt(C);
      return (C.uidEvent = l), (fe[l] = fe[l] || {}), fe[l];
    }
    function ze(C, l, h = null) {
      return Object.values(C).find(
        (x) => x.callable === l && x.delegationSelector === h
      );
    }
    function V(C, l, h) {
      const x = typeof l == "string",
        $ = x ? h : l || h;
      let H = ge(C);
      return ht.has(H) || (H = C), [x, $, H];
    }
    function ee(C, l, h, x, $) {
      if (typeof l != "string" || !C) return;
      let [H, X, ue] = V(l, h, x);
      l in ke &&
        (X = ((sr) =>
          function (Rt) {
            if (
              !Rt.relatedTarget ||
              (Rt.relatedTarget !== Rt.delegateTarget &&
                !Rt.delegateTarget.contains(Rt.relatedTarget))
            )
              return sr.call(this, Rt);
          })(X));
      const Oe = Ie(C),
        at = Oe[ue] || (Oe[ue] = {}),
        wt = ze(at, X, H ? h : null);
      if (wt) return void (wt.oneOff = wt.oneOff && $);
      const He = pt(X, l.replace(U, "")),
        en = H
          ? (function (_n, sr, Rt) {
              return function Ei(go) {
                const Lc = _n.querySelectorAll(sr);
                for (
                  let { target: lr } = go;
                  lr && lr !== this;
                  lr = lr.parentNode
                )
                  for (const jc of Lc)
                    if (jc === lr)
                      return (
                        Ee(go, { delegateTarget: lr }),
                        Ei.oneOff && D.off(_n, go.type, sr, Rt),
                        Rt.apply(lr, [go])
                      );
              };
            })(C, h, X)
          : (function (_n, sr) {
              return function Rt(Ei) {
                return (
                  Ee(Ei, { delegateTarget: _n }),
                  Rt.oneOff && D.off(_n, Ei.type, sr),
                  sr.apply(_n, [Ei])
                );
              };
            })(C, X);
      (en.delegationSelector = H ? h : null),
        (en.callable = X),
        (en.oneOff = $),
        (en.uidEvent = He),
        (at[He] = en),
        C.addEventListener(ue, en, H);
    }
    function A(C, l, h, x, $) {
      const H = ze(l[h], x, $);
      H && (C.removeEventListener(h, H, !!$), delete l[h][H.uidEvent]);
    }
    function pe(C, l, h, x) {
      const $ = l[h] || {};
      for (const [H, X] of Object.entries($))
        H.includes(x) && A(C, l, h, X.callable, X.delegationSelector);
    }
    function ge(C) {
      return (C = C.replace(re, "")), ke[C] || C;
    }
    const D = {
      on(C, l, h, x) {
        ee(C, l, h, x, !1);
      },
      one(C, l, h, x) {
        ee(C, l, h, x, !0);
      },
      off(C, l, h, x) {
        if (typeof l != "string" || !C) return;
        const [$, H, X] = V(l, h, x),
          ue = X !== l,
          Oe = Ie(C),
          at = Oe[X] || {},
          wt = l.startsWith(".");
        if (H === void 0) {
          if (wt) for (const He of Object.keys(Oe)) pe(C, Oe, He, l.slice(1));
          for (const [He, en] of Object.entries(at)) {
            const _n = He.replace(Z, "");
            (ue && !l.includes(_n)) ||
              A(C, Oe, X, en.callable, en.delegationSelector);
          }
        } else {
          if (!Object.keys(at).length) return;
          A(C, Oe, X, H, $ ? h : null);
        }
      },
      trigger(C, l, h) {
        if (typeof l != "string" || !C) return null;
        const x = w();
        let $ = null,
          H = !0,
          X = !0,
          ue = !1;
        l !== ge(l) &&
          x &&
          (($ = x.Event(l, h)),
          x(C).trigger($),
          (H = !$.isPropagationStopped()),
          (X = !$.isImmediatePropagationStopped()),
          (ue = $.isDefaultPrevented()));
        const Oe = Ee(new Event(l, { bubbles: H, cancelable: !0 }), h);
        return (
          ue && Oe.preventDefault(),
          X && C.dispatchEvent(Oe),
          Oe.defaultPrevented && $ && $.preventDefault(),
          Oe
        );
      },
    };
    function Ee(C, l = {}) {
      for (const [h, x] of Object.entries(l))
        try {
          C[h] = x;
        } catch {
          Object.defineProperty(C, h, { configurable: !0, get: () => x });
        }
      return C;
    }
    function Ue(C) {
      if (C === "true") return !0;
      if (C === "false") return !1;
      if (C === Number(C).toString()) return Number(C);
      if (C === "" || C === "null") return null;
      if (typeof C != "string") return C;
      try {
        return JSON.parse(decodeURIComponent(C));
      } catch {
        return C;
      }
    }
    function ve(C) {
      return C.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
    }
    const $e = {
      setDataAttribute(C, l, h) {
        C.setAttribute(`data-bs-${ve(l)}`, h);
      },
      removeDataAttribute(C, l) {
        C.removeAttribute(`data-bs-${ve(l)}`);
      },
      getDataAttributes(C) {
        if (!C) return {};
        const l = {},
          h = Object.keys(C.dataset).filter(
            (x) => x.startsWith("bs") && !x.startsWith("bsConfig")
          );
        for (const x of h) {
          let $ = x.replace(/^bs/, "");
          ($ = $.charAt(0).toLowerCase() + $.slice(1, $.length)),
            (l[$] = Ue(C.dataset[x]));
        }
        return l;
      },
      getDataAttribute: (C, l) => Ue(C.getAttribute(`data-bs-${ve(l)}`)),
    };
    class K {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(l) {
        return (
          (l = this._mergeConfigObj(l)),
          (l = this._configAfterMerge(l)),
          this._typeCheckConfig(l),
          l
        );
      }
      _configAfterMerge(l) {
        return l;
      }
      _mergeConfigObj(l, h) {
        const x = g(h) ? $e.getDataAttribute(h, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof x == "object" ? x : {}),
          ...(g(h) ? $e.getDataAttributes(h) : {}),
          ...(typeof l == "object" ? l : {}),
        };
      }
      _typeCheckConfig(l, h = this.constructor.DefaultType) {
        for (const [$, H] of Object.entries(h)) {
          const X = l[$],
            ue = g(X)
              ? "element"
              : (x = X) == null
              ? `${x}`
              : Object.prototype.toString
                  .call(x)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(H).test(ue))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${$}" provided type "${ue}" but expected type "${H}".`
            );
        }
        var x;
      }
    }
    class Ke extends K {
      constructor(l, h) {
        super(),
          (l = _(l)) &&
            ((this._element = l),
            (this._config = this._getConfig(h)),
            a.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        a.remove(this._element, this.constructor.DATA_KEY),
          D.off(this._element, this.constructor.EVENT_KEY);
        for (const l of Object.getOwnPropertyNames(this)) this[l] = null;
      }
      _queueCallback(l, h, x = !0) {
        z(l, h, x);
      }
      _getConfig(l) {
        return (
          (l = this._mergeConfigObj(l, this._element)),
          (l = this._configAfterMerge(l)),
          this._typeCheckConfig(l),
          l
        );
      }
      static getInstance(l) {
        return a.get(_(l), this.DATA_KEY);
      }
      static getOrCreateInstance(l, h = {}) {
        return (
          this.getInstance(l) || new this(l, typeof h == "object" ? h : null)
        );
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(l) {
        return `${l}${this.EVENT_KEY}`;
      }
    }
    const yr = (C) => {
        let l = C.getAttribute("data-bs-target");
        if (!l || l === "#") {
          let h = C.getAttribute("href");
          if (!h || (!h.includes("#") && !h.startsWith("."))) return null;
          h.includes("#") && !h.startsWith("#") && (h = `#${h.split("#")[1]}`),
            (l = h && h !== "#" ? h.trim() : null);
        }
        return l
          ? l
              .split(",")
              .map((h) => d(h))
              .join(",")
          : null;
      },
      J = {
        find: (C, l = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(l, C)),
        findOne: (C, l = document.documentElement) =>
          Element.prototype.querySelector.call(l, C),
        children: (C, l) =>
          [].concat(...C.children).filter((h) => h.matches(l)),
        parents(C, l) {
          const h = [];
          let x = C.parentNode.closest(l);
          for (; x; ) h.push(x), (x = x.parentNode.closest(l));
          return h;
        },
        prev(C, l) {
          let h = C.previousElementSibling;
          for (; h; ) {
            if (h.matches(l)) return [h];
            h = h.previousElementSibling;
          }
          return [];
        },
        next(C, l) {
          let h = C.nextElementSibling;
          for (; h; ) {
            if (h.matches(l)) return [h];
            h = h.nextElementSibling;
          }
          return [];
        },
        focusableChildren(C) {
          const l = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((h) => `${h}:not([tabindex^="-"])`)
            .join(",");
          return this.find(l, C).filter((h) => !T(h) && E(h));
        },
        getSelectorFromElement(C) {
          const l = yr(C);
          return l && J.findOne(l) ? l : null;
        },
        getElementFromSelector(C) {
          const l = yr(C);
          return l ? J.findOne(l) : null;
        },
        getMultipleElementsFromSelector(C) {
          const l = yr(C);
          return l ? J.find(l) : [];
        },
      },
      wr = (C, l = "hide") => {
        const h = `click.dismiss${C.EVENT_KEY}`,
          x = C.NAME;
        D.on(document, h, `[data-bs-dismiss="${x}"]`, function ($) {
          if (
            (["A", "AREA"].includes(this.tagName) && $.preventDefault(),
            T(this))
          )
            return;
          const H = J.getElementFromSelector(this) || this.closest(`.${x}`);
          C.getOrCreateInstance(H)[l]();
        });
      },
      fn = ".bs.alert",
      Vi = `close${fn}`,
      Vn = `closed${fn}`;
    class mt extends Ke {
      static get NAME() {
        return "alert";
      }
      close() {
        if (D.trigger(this._element, Vi).defaultPrevented) return;
        this._element.classList.remove("show");
        const l = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, l);
      }
      _destroyElement() {
        this._element.remove(), D.trigger(this._element, Vn), this.dispose();
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = mt.getOrCreateInstance(this);
          if (typeof l == "string") {
            if (h[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            h[l](this);
          }
        });
      }
    }
    wr(mt, "close"), S(mt);
    const ui = '[data-bs-toggle="button"]';
    class Qn extends Ke {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = Qn.getOrCreateInstance(this);
          l === "toggle" && h[l]();
        });
      }
    }
    D.on(document, "click.bs.button.data-api", ui, (C) => {
      C.preventDefault();
      const l = C.target.closest(ui);
      Qn.getOrCreateInstance(l).toggle();
    }),
      S(Qn);
    const Tn = ".bs.swipe",
      hn = `touchstart${Tn}`,
      Er = `touchmove${Tn}`,
      Qi = `touchend${Tn}`,
      Ki = `pointerdown${Tn}`,
      On = `pointerup${Tn}`,
      It = { endCallback: null, leftCallback: null, rightCallback: null },
      ci = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class $t extends K {
      constructor(l, h) {
        super(),
          (this._element = l),
          l &&
            $t.isSupported() &&
            ((this._config = this._getConfig(h)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return It;
      }
      static get DefaultType() {
        return ci;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        D.off(this._element, Tn);
      }
      _start(l) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(l) && (this._deltaX = l.clientX)
          : (this._deltaX = l.touches[0].clientX);
      }
      _end(l) {
        this._eventIsPointerPenTouch(l) &&
          (this._deltaX = l.clientX - this._deltaX),
          this._handleSwipe(),
          I(this._config.endCallback);
      }
      _move(l) {
        this._deltaX =
          l.touches && l.touches.length > 1
            ? 0
            : l.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const l = Math.abs(this._deltaX);
        if (l <= 40) return;
        const h = l / this._deltaX;
        (this._deltaX = 0),
          h &&
            I(h > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (D.on(this._element, Ki, (l) => this._start(l)),
            D.on(this._element, On, (l) => this._end(l)),
            this._element.classList.add("pointer-event"))
          : (D.on(this._element, hn, (l) => this._start(l)),
            D.on(this._element, Er, (l) => this._move(l)),
            D.on(this._element, Qi, (l) => this._end(l)));
      }
      _eventIsPointerPenTouch(l) {
        return (
          this._supportPointerEvents &&
          (l.pointerType === "pen" || l.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const Ze = ".bs.carousel",
      Kn = ".data-api",
      An = "next",
      xr = "prev",
      Pn = "left",
      qi = "right",
      nc = `slide${Ze}`,
      os = `slid${Ze}`,
      rc = `keydown${Ze}`,
      ic = `mouseenter${Ze}`,
      oc = `mouseleave${Ze}`,
      jl = `dragstart${Ze}`,
      Yi = `load${Ze}${Kn}`,
      Il = `click${Ze}${Kn}`,
      ss = "carousel",
      Xi = "active",
      $l = ".active",
      Dl = ".carousel-item",
      sc = $l + Dl,
      Cr = { ArrowLeft: qi, ArrowRight: Pn },
      di = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      lc = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class kr extends Ke {
      constructor(l, h) {
        super(l, h),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = J.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === ss && this.cycle();
      }
      static get Default() {
        return di;
      }
      static get DefaultType() {
        return lc;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(An);
      }
      nextWhenVisible() {
        !document.hidden && E(this._element) && this.next();
      }
      prev() {
        this._slide(xr);
      }
      pause() {
        this._isSliding && p(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? D.one(this._element, os, () => this.cycle())
            : this.cycle());
      }
      to(l) {
        const h = this._getItems();
        if (l > h.length - 1 || l < 0) return;
        if (this._isSliding)
          return void D.one(this._element, os, () => this.to(l));
        const x = this._getItemIndex(this._getActive());
        if (x === l) return;
        const $ = l > x ? An : xr;
        this._slide($, h[l]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(l) {
        return (l.defaultInterval = l.interval), l;
      }
      _addEventListeners() {
        this._config.keyboard &&
          D.on(this._element, rc, (l) => this._keydown(l)),
          this._config.pause === "hover" &&
            (D.on(this._element, ic, () => this.pause()),
            D.on(this._element, oc, () => this._maybeEnableCycle())),
          this._config.touch &&
            $t.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const h of J.find(".carousel-item img", this._element))
          D.on(h, jl, (x) => x.preventDefault());
        const l = {
          leftCallback: () => this._slide(this._directionToOrder(Pn)),
          rightCallback: () => this._slide(this._directionToOrder(qi)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          },
        };
        this._swipeHelper = new $t(this._element, l);
      }
      _keydown(l) {
        if (/input|textarea/i.test(l.target.tagName)) return;
        const h = Cr[l.key];
        h && (l.preventDefault(), this._slide(this._directionToOrder(h)));
      }
      _getItemIndex(l) {
        return this._getItems().indexOf(l);
      }
      _setActiveIndicatorElement(l) {
        if (!this._indicatorsElement) return;
        const h = J.findOne($l, this._indicatorsElement);
        h.classList.remove(Xi), h.removeAttribute("aria-current");
        const x = J.findOne(
          `[data-bs-slide-to="${l}"]`,
          this._indicatorsElement
        );
        x && (x.classList.add(Xi), x.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const l = this._activeElement || this._getActive();
        if (!l) return;
        const h = Number.parseInt(l.getAttribute("data-bs-interval"), 10);
        this._config.interval = h || this._config.defaultInterval;
      }
      _slide(l, h = null) {
        if (this._isSliding) return;
        const x = this._getActive(),
          $ = l === An,
          H = h || B(this._getItems(), x, $, this._config.wrap);
        if (H === x) return;
        const X = this._getItemIndex(H),
          ue = (He) =>
            D.trigger(this._element, He, {
              relatedTarget: H,
              direction: this._orderToDirection(l),
              from: this._getItemIndex(x),
              to: X,
            });
        if (ue(nc).defaultPrevented || !x || !H) return;
        const Oe = !!this._interval;
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(X),
          (this._activeElement = H);
        const at = $ ? "carousel-item-start" : "carousel-item-end",
          wt = $ ? "carousel-item-next" : "carousel-item-prev";
        H.classList.add(wt),
          j(H),
          x.classList.add(at),
          H.classList.add(at),
          this._queueCallback(
            () => {
              H.classList.remove(at, wt),
                H.classList.add(Xi),
                x.classList.remove(Xi, wt, at),
                (this._isSliding = !1),
                ue(os);
            },
            x,
            this._isAnimated()
          ),
          Oe && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return J.findOne(sc, this._element);
      }
      _getItems() {
        return J.find(Dl, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(l) {
        return y() ? (l === Pn ? xr : An) : l === Pn ? An : xr;
      }
      _orderToDirection(l) {
        return y() ? (l === xr ? Pn : qi) : l === xr ? qi : Pn;
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = kr.getOrCreateInstance(this, l);
          if (typeof l != "number") {
            if (typeof l == "string") {
              if (h[l] === void 0 || l.startsWith("_") || l === "constructor")
                throw new TypeError(`No method named "${l}"`);
              h[l]();
            }
          } else h.to(l);
        });
      }
    }
    D.on(document, Il, "[data-bs-slide], [data-bs-slide-to]", function (C) {
      const l = J.getElementFromSelector(this);
      if (!l || !l.classList.contains(ss)) return;
      C.preventDefault();
      const h = kr.getOrCreateInstance(l),
        x = this.getAttribute("data-bs-slide-to");
      return x
        ? (h.to(x), void h._maybeEnableCycle())
        : $e.getDataAttribute(this, "slide") === "next"
        ? (h.next(), void h._maybeEnableCycle())
        : (h.prev(), void h._maybeEnableCycle());
    }),
      D.on(window, Yi, () => {
        const C = J.find('[data-bs-ride="carousel"]');
        for (const l of C) kr.getOrCreateInstance(l);
      }),
      S(kr);
    const fi = ".bs.collapse",
      ac = `show${fi}`,
      uc = `shown${fi}`,
      ls = `hide${fi}`,
      br = `hidden${fi}`,
      Gi = `click${fi}.data-api`,
      as = "show",
      Nn = "collapse",
      Zi = "collapsing",
      cc = `:scope .${Nn} .${Nn}`,
      Ln = '[data-bs-toggle="collapse"]',
      it = { parent: null, toggle: !0 },
      gt = { parent: "(null|element)", toggle: "boolean" };
    class qe extends Ke {
      constructor(l, h) {
        super(l, h), (this._isTransitioning = !1), (this._triggerArray = []);
        const x = J.find(Ln);
        for (const $ of x) {
          const H = J.getSelectorFromElement($),
            X = J.find(H).filter((ue) => ue === this._element);
          H !== null && X.length && this._triggerArray.push($);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return it;
      }
      static get DefaultType() {
        return gt;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let l = [];
        if (
          (this._config.parent &&
            (l = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter(($) => $ !== this._element)
              .map(($) => qe.getOrCreateInstance($, { toggle: !1 }))),
          (l.length && l[0]._isTransitioning) ||
            D.trigger(this._element, ac).defaultPrevented)
        )
          return;
        for (const $ of l) $.hide();
        const h = this._getDimension();
        this._element.classList.remove(Nn),
          this._element.classList.add(Zi),
          (this._element.style[h] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const x = `scroll${h[0].toUpperCase() + h.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Zi),
              this._element.classList.add(Nn, as),
              (this._element.style[h] = ""),
              D.trigger(this._element, uc);
          },
          this._element,
          !0
        ),
          (this._element.style[h] = `${this._element[x]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          D.trigger(this._element, ls).defaultPrevented
        )
          return;
        const l = this._getDimension();
        (this._element.style[l] = `${
          this._element.getBoundingClientRect()[l]
        }px`),
          j(this._element),
          this._element.classList.add(Zi),
          this._element.classList.remove(Nn, as);
        for (const h of this._triggerArray) {
          const x = J.getElementFromSelector(h);
          x && !this._isShown(x) && this._addAriaAndCollapsedClass([h], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[l] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(Zi),
                this._element.classList.add(Nn),
                D.trigger(this._element, br);
            },
            this._element,
            !0
          );
      }
      _isShown(l = this._element) {
        return l.classList.contains(as);
      }
      _configAfterMerge(l) {
        return (l.toggle = !!l.toggle), (l.parent = _(l.parent)), l;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const l = this._getFirstLevelChildren(Ln);
        for (const h of l) {
          const x = J.getElementFromSelector(h);
          x && this._addAriaAndCollapsedClass([h], this._isShown(x));
        }
      }
      _getFirstLevelChildren(l) {
        const h = J.find(cc, this._config.parent);
        return J.find(l, this._config.parent).filter((x) => !h.includes(x));
      }
      _addAriaAndCollapsedClass(l, h) {
        if (l.length)
          for (const x of l)
            x.classList.toggle("collapsed", !h),
              x.setAttribute("aria-expanded", h);
      }
      static jQueryInterface(l) {
        const h = {};
        return (
          typeof l == "string" && /show|hide/.test(l) && (h.toggle = !1),
          this.each(function () {
            const x = qe.getOrCreateInstance(this, h);
            if (typeof l == "string") {
              if (x[l] === void 0)
                throw new TypeError(`No method named "${l}"`);
              x[l]();
            }
          })
        );
      }
    }
    D.on(document, Gi, Ln, function (C) {
      (C.target.tagName === "A" ||
        (C.delegateTarget && C.delegateTarget.tagName === "A")) &&
        C.preventDefault();
      for (const l of J.getMultipleElementsFromSelector(this))
        qe.getOrCreateInstance(l, { toggle: !1 }).toggle();
    }),
      S(qe);
    const Je = "dropdown",
      Yt = ".bs.dropdown",
      jn = ".data-api",
      qn = "ArrowUp",
      Yn = "ArrowDown",
      Ml = `hide${Yt}`,
      us = `hidden${Yt}`,
      Sr = `show${Yt}`,
      Rl = `shown${Yt}`,
      Ji = `click${Yt}${jn}`,
      eo = `keydown${Yt}${jn}`,
      zl = `keyup${Yt}${jn}`,
      Xn = "show",
      In = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Fl = `${In}.${Xn}`,
      hi = ".dropdown-menu",
      Bl = y() ? "top-end" : "top-start",
      Ul = y() ? "top-start" : "top-end",
      Hl = y() ? "bottom-end" : "bottom-start",
      Wl = y() ? "bottom-start" : "bottom-end",
      Vl = y() ? "left-start" : "right-start",
      Xt = y() ? "right-start" : "left-start",
      vt = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      Gn = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class Ne extends Ke {
      constructor(l, h) {
        super(l, h),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            J.next(this._element, hi)[0] ||
            J.prev(this._element, hi)[0] ||
            J.findOne(hi, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return vt;
      }
      static get DefaultType() {
        return Gn;
      }
      static get NAME() {
        return Je;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (T(this._element) || this._isShown()) return;
        const l = { relatedTarget: this._element };
        if (!D.trigger(this._element, Sr, l).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const h of [].concat(...document.body.children))
              D.on(h, "mouseover", P);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Xn),
            this._element.classList.add(Xn),
            D.trigger(this._element, Rl, l);
        }
      }
      hide() {
        if (T(this._element) || !this._isShown()) return;
        const l = { relatedTarget: this._element };
        this._completeHide(l);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(l) {
        if (!D.trigger(this._element, Ml, l).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const h of [].concat(...document.body.children))
              D.off(h, "mouseover", P);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Xn),
            this._element.classList.remove(Xn),
            this._element.setAttribute("aria-expanded", "false"),
            $e.removeDataAttribute(this._menu, "popper"),
            D.trigger(this._element, us, l);
        }
      }
      _getConfig(l) {
        if (
          typeof (l = super._getConfig(l)).reference == "object" &&
          !g(l.reference) &&
          typeof l.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${Je.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return l;
      }
      _createPopper() {
        if (i === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let l = this._element;
        this._config.reference === "parent"
          ? (l = this._parent)
          : g(this._config.reference)
          ? (l = _(this._config.reference))
          : typeof this._config.reference == "object" &&
            (l = this._config.reference);
        const h = this._getPopperConfig();
        this._popper = i.createPopper(l, this._menu, h);
      }
      _isShown() {
        return this._menu.classList.contains(Xn);
      }
      _getPlacement() {
        const l = this._parent;
        if (l.classList.contains("dropend")) return Vl;
        if (l.classList.contains("dropstart")) return Xt;
        if (l.classList.contains("dropup-center")) return "top";
        if (l.classList.contains("dropdown-center")) return "bottom";
        const h =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return l.classList.contains("dropup") ? (h ? Ul : Bl) : h ? Wl : Hl;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: l } = this._config;
        return typeof l == "string"
          ? l.split(",").map((h) => Number.parseInt(h, 10))
          : typeof l == "function"
          ? (h) => l(h, this._element)
          : l;
      }
      _getPopperConfig() {
        const l = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            ($e.setDataAttribute(this._menu, "popper", "static"),
            (l.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...l, ...I(this._config.popperConfig, [l]) }
        );
      }
      _selectMenuItem({ key: l, target: h }) {
        const x = J.find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        ).filter(($) => E($));
        x.length && B(x, h, l === Yn, !x.includes(h)).focus();
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = Ne.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (h[l] === void 0) throw new TypeError(`No method named "${l}"`);
            h[l]();
          }
        });
      }
      static clearMenus(l) {
        if (l.button === 2 || (l.type === "keyup" && l.key !== "Tab")) return;
        const h = J.find(Fl);
        for (const x of h) {
          const $ = Ne.getInstance(x);
          if (!$ || $._config.autoClose === !1) continue;
          const H = l.composedPath(),
            X = H.includes($._menu);
          if (
            H.includes($._element) ||
            ($._config.autoClose === "inside" && !X) ||
            ($._config.autoClose === "outside" && X) ||
            ($._menu.contains(l.target) &&
              ((l.type === "keyup" && l.key === "Tab") ||
                /input|select|option|textarea|form/i.test(l.target.tagName)))
          )
            continue;
          const ue = { relatedTarget: $._element };
          l.type === "click" && (ue.clickEvent = l), $._completeHide(ue);
        }
      }
      static dataApiKeydownHandler(l) {
        const h = /input|textarea/i.test(l.target.tagName),
          x = l.key === "Escape",
          $ = [qn, Yn].includes(l.key);
        if ((!$ && !x) || (h && !x)) return;
        l.preventDefault();
        const H = this.matches(In)
            ? this
            : J.prev(this, In)[0] ||
              J.next(this, In)[0] ||
              J.findOne(In, l.delegateTarget.parentNode),
          X = Ne.getOrCreateInstance(H);
        if ($) return l.stopPropagation(), X.show(), void X._selectMenuItem(l);
        X._isShown() && (l.stopPropagation(), X.hide(), H.focus());
      }
    }
    D.on(document, eo, In, Ne.dataApiKeydownHandler),
      D.on(document, eo, hi, Ne.dataApiKeydownHandler),
      D.on(document, Ji, Ne.clearMenus),
      D.on(document, zl, Ne.clearMenus),
      D.on(document, Ji, In, function (C) {
        C.preventDefault(), Ne.getOrCreateInstance(this).toggle();
      }),
      S(Ne);
    const to = "backdrop",
      no = "show",
      Dt = `mousedown.bs.${to}`,
      Zn = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      ro = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class Jn extends K {
      constructor(l) {
        super(),
          (this._config = this._getConfig(l)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return Zn;
      }
      static get DefaultType() {
        return ro;
      }
      static get NAME() {
        return to;
      }
      show(l) {
        if (!this._config.isVisible) return void I(l);
        this._append();
        const h = this._getElement();
        this._config.isAnimated && j(h),
          h.classList.add(no),
          this._emulateAnimation(() => {
            I(l);
          });
      }
      hide(l) {
        this._config.isVisible
          ? (this._getElement().classList.remove(no),
            this._emulateAnimation(() => {
              this.dispose(), I(l);
            }))
          : I(l);
      }
      dispose() {
        this._isAppended &&
          (D.off(this._element, Dt),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const l = document.createElement("div");
          (l.className = this._config.className),
            this._config.isAnimated && l.classList.add("fade"),
            (this._element = l);
        }
        return this._element;
      }
      _configAfterMerge(l) {
        return (l.rootElement = _(l.rootElement)), l;
      }
      _append() {
        if (this._isAppended) return;
        const l = this._getElement();
        this._config.rootElement.append(l),
          D.on(l, Dt, () => {
            I(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(l) {
        z(l, this._getElement(), this._config.isAnimated);
      }
    }
    const Tr = ".bs.focustrap",
      Ql = `focusin${Tr}`,
      Or = `keydown.tab${Tr}`,
      io = "backward",
      Kl = { autofocus: !0, trapElement: null },
      pn = { autofocus: "boolean", trapElement: "element" };
    class ql extends K {
      constructor(l) {
        super(),
          (this._config = this._getConfig(l)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return Kl;
      }
      static get DefaultType() {
        return pn;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          D.off(document, Tr),
          D.on(document, Ql, (l) => this._handleFocusin(l)),
          D.on(document, Or, (l) => this._handleKeydown(l)),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), D.off(document, Tr));
      }
      _handleFocusin(l) {
        const { trapElement: h } = this._config;
        if (l.target === document || l.target === h || h.contains(l.target))
          return;
        const x = J.focusableChildren(h);
        x.length === 0
          ? h.focus()
          : this._lastTabNavDirection === io
          ? x[x.length - 1].focus()
          : x[0].focus();
      }
      _handleKeydown(l) {
        l.key === "Tab" &&
          (this._lastTabNavDirection = l.shiftKey ? io : "forward");
      }
    }
    const mn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pi = ".sticky-top",
      mi = "padding-right",
      Ar = "margin-right";
    class gi {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const l = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - l);
      }
      hide() {
        const l = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, mi, (h) => h + l),
          this._setElementAttributes(mn, mi, (h) => h + l),
          this._setElementAttributes(pi, Ar, (h) => h - l);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, mi),
          this._resetElementAttributes(mn, mi),
          this._resetElementAttributes(pi, Ar);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(l, h, x) {
        const $ = this.getWidth();
        this._applyManipulationCallback(l, (H) => {
          if (H !== this._element && window.innerWidth > H.clientWidth + $)
            return;
          this._saveInitialAttribute(H, h);
          const X = window.getComputedStyle(H).getPropertyValue(h);
          H.style.setProperty(h, `${x(Number.parseFloat(X))}px`);
        });
      }
      _saveInitialAttribute(l, h) {
        const x = l.style.getPropertyValue(h);
        x && $e.setDataAttribute(l, h, x);
      }
      _resetElementAttributes(l, h) {
        this._applyManipulationCallback(l, (x) => {
          const $ = $e.getDataAttribute(x, h);
          $ !== null
            ? ($e.removeDataAttribute(x, h), x.style.setProperty(h, $))
            : x.style.removeProperty(h);
        });
      }
      _applyManipulationCallback(l, h) {
        if (g(l)) h(l);
        else for (const x of J.find(l, this._element)) h(x);
      }
    }
    const et = ".bs.modal",
      Yl = `hide${et}`,
      Xl = `hidePrevented${et}`,
      cs = `hidden${et}`,
      er = `show${et}`,
      dc = `shown${et}`,
      Gl = `resize${et}`,
      ds = `click.dismiss${et}`,
      oo = `mousedown.dismiss${et}`,
      fs = `keydown.dismiss${et}`,
      fc = `click${et}.data-api`,
      vi = "modal-open",
      Zl = "show",
      so = "modal-static",
      hs = { backdrop: !0, focus: !0, keyboard: !0 },
      ps = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class gn extends Ke {
      constructor(l, h) {
        super(l, h),
          (this._dialog = J.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new gi()),
          this._addEventListeners();
      }
      static get Default() {
        return hs;
      }
      static get DefaultType() {
        return ps;
      }
      static get NAME() {
        return "modal";
      }
      toggle(l) {
        return this._isShown ? this.hide() : this.show(l);
      }
      show(l) {
        this._isShown ||
          this._isTransitioning ||
          D.trigger(this._element, er, { relatedTarget: l }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(vi),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(l)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (D.trigger(this._element, Yl).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(Zl),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            )));
      }
      dispose() {
        D.off(window, et),
          D.off(this._dialog, et),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Jn({
          isVisible: !!this._config.backdrop,
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new ql({ trapElement: this._element });
      }
      _showElement(l) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const h = J.findOne(".modal-body", this._dialog);
        h && (h.scrollTop = 0),
          j(this._element),
          this._element.classList.add(Zl),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                D.trigger(this._element, dc, { relatedTarget: l });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        D.on(this._element, fs, (l) => {
          l.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          D.on(window, Gl, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          D.on(this._element, oo, (l) => {
            D.one(this._element, ds, (h) => {
              this._element === l.target &&
                this._element === h.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(vi),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              D.trigger(this._element, cs);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (D.trigger(this._element, Xl).defaultPrevented) return;
        const l =
            this._element.scrollHeight > document.documentElement.clientHeight,
          h = this._element.style.overflowY;
        h === "hidden" ||
          this._element.classList.contains(so) ||
          (l || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(so),
          this._queueCallback(() => {
            this._element.classList.remove(so),
              this._queueCallback(() => {
                this._element.style.overflowY = h;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const l =
            this._element.scrollHeight > document.documentElement.clientHeight,
          h = this._scrollBar.getWidth(),
          x = h > 0;
        if (x && !l) {
          const $ = y() ? "paddingLeft" : "paddingRight";
          this._element.style[$] = `${h}px`;
        }
        if (!x && l) {
          const $ = y() ? "paddingRight" : "paddingLeft";
          this._element.style[$] = `${h}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(l, h) {
        return this.each(function () {
          const x = gn.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (x[l] === void 0) throw new TypeError(`No method named "${l}"`);
            x[l](h);
          }
        });
      }
    }
    D.on(document, fc, '[data-bs-toggle="modal"]', function (C) {
      const l = J.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && C.preventDefault(),
        D.one(l, er, (x) => {
          x.defaultPrevented ||
            D.one(l, cs, () => {
              E(this) && this.focus();
            });
        });
      const h = J.findOne(".modal.show");
      h && gn.getInstance(h).hide(), gn.getOrCreateInstance(l).toggle(this);
    }),
      wr(gn),
      S(gn);
    const Gt = ".bs.offcanvas",
      Pr = ".data-api",
      ms = `load${Gt}${Pr}`,
      gs = "show",
      vs = "showing",
      tr = "hiding",
      Jl = ".offcanvas.show",
      ea = `show${Gt}`,
      ta = `shown${Gt}`,
      na = `hide${Gt}`,
      _s = `hidePrevented${Gt}`,
      ys = `hidden${Gt}`,
      ws = `resize${Gt}`,
      ra = `click${Gt}${Pr}`,
      hc = `keydown.dismiss${Gt}`,
      pc = { backdrop: !0, keyboard: !0, scroll: !1 },
      ia = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class Zt extends Ke {
      constructor(l, h) {
        super(l, h),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return pc;
      }
      static get DefaultType() {
        return ia;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(l) {
        return this._isShown ? this.hide() : this.show(l);
      }
      show(l) {
        this._isShown ||
          D.trigger(this._element, ea, { relatedTarget: l }).defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new gi().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(vs),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(gs),
                this._element.classList.remove(vs),
                D.trigger(this._element, ta, { relatedTarget: l });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (D.trigger(this._element, na).defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(tr),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(gs, tr),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new gi().reset(),
                  D.trigger(this._element, ys);
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const l = !!this._config.backdrop;
        return new Jn({
          className: "offcanvas-backdrop",
          isVisible: l,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: l
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : D.trigger(this._element, _s);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new ql({ trapElement: this._element });
      }
      _addEventListeners() {
        D.on(this._element, hc, (l) => {
          l.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : D.trigger(this._element, _s));
        });
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = Zt.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (h[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            h[l](this);
          }
        });
      }
    }
    D.on(document, ra, '[data-bs-toggle="offcanvas"]', function (C) {
      const l = J.getElementFromSelector(this);
      if ((["A", "AREA"].includes(this.tagName) && C.preventDefault(), T(this)))
        return;
      D.one(l, ys, () => {
        E(this) && this.focus();
      });
      const h = J.findOne(Jl);
      h && h !== l && Zt.getInstance(h).hide(),
        Zt.getOrCreateInstance(l).toggle(this);
    }),
      D.on(window, ms, () => {
        for (const C of J.find(Jl)) Zt.getOrCreateInstance(C).show();
      }),
      D.on(window, ws, () => {
        for (const C of J.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(C).position !== "fixed" &&
            Zt.getOrCreateInstance(C).hide();
      }),
      wr(Zt),
      S(Zt);
    const _i = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      mc = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      gc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Es = (C, l) => {
        const h = C.nodeName.toLowerCase();
        return l.includes(h)
          ? !mc.has(h) || !!gc.test(C.nodeValue)
          : l.filter((x) => x instanceof RegExp).some((x) => x.test(h));
      },
      oa = {
        allowList: _i,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      sa = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      nr = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class xs extends K {
      constructor(l) {
        super(), (this._config = this._getConfig(l));
      }
      static get Default() {
        return oa;
      }
      static get DefaultType() {
        return sa;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((l) => this._resolvePossibleFunction(l))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(l) {
        return (
          this._checkContent(l),
          (this._config.content = { ...this._config.content, ...l }),
          this
        );
      }
      toHtml() {
        const l = document.createElement("div");
        l.innerHTML = this._maybeSanitize(this._config.template);
        for (const [$, H] of Object.entries(this._config.content))
          this._setContent(l, H, $);
        const h = l.children[0],
          x = this._resolvePossibleFunction(this._config.extraClass);
        return x && h.classList.add(...x.split(" ")), h;
      }
      _typeCheckConfig(l) {
        super._typeCheckConfig(l), this._checkContent(l.content);
      }
      _checkContent(l) {
        for (const [h, x] of Object.entries(l))
          super._typeCheckConfig({ selector: h, entry: x }, nr);
      }
      _setContent(l, h, x) {
        const $ = J.findOne(x, l);
        $ &&
          ((h = this._resolvePossibleFunction(h))
            ? g(h)
              ? this._putElementInTemplate(_(h), $)
              : this._config.html
              ? ($.innerHTML = this._maybeSanitize(h))
              : ($.textContent = h)
            : $.remove());
      }
      _maybeSanitize(l) {
        return this._config.sanitize
          ? (function (h, x, $) {
              if (!h.length) return h;
              if ($ && typeof $ == "function") return $(h);
              const H = new window.DOMParser().parseFromString(h, "text/html"),
                X = [].concat(...H.body.querySelectorAll("*"));
              for (const ue of X) {
                const Oe = ue.nodeName.toLowerCase();
                if (!Object.keys(x).includes(Oe)) {
                  ue.remove();
                  continue;
                }
                const at = [].concat(...ue.attributes),
                  wt = [].concat(x["*"] || [], x[Oe] || []);
                for (const He of at)
                  Es(He, wt) || ue.removeAttribute(He.nodeName);
              }
              return H.body.innerHTML;
            })(l, this._config.allowList, this._config.sanitizeFn)
          : l;
      }
      _resolvePossibleFunction(l) {
        return I(l, [this]);
      }
      _putElementInTemplate(l, h) {
        if (this._config.html) return (h.innerHTML = ""), void h.append(l);
        h.textContent = l.textContent;
      }
    }
    const vc = new Set(["sanitize", "allowList", "sanitizeFn"]),
      lo = "fade",
      ao = "show",
      la = ".modal",
      aa = "hide.bs.modal",
      yi = "hover",
      uo = "focus",
      ua = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: y() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: y() ? "right" : "left",
      },
      _c = {
        allowList: _i,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      Nr = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class _t extends Ke {
      constructor(l, h) {
        if (i === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(l, h),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return _c;
      }
      static get DefaultType() {
        return Nr;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          D.off(this._element.closest(la), aa, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const l = D.trigger(this._element, this.constructor.eventName("show")),
          h = (
            L(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (l.defaultPrevented || !h) return;
        this._disposePopper();
        const x = this._getTipElement();
        this._element.setAttribute("aria-describedby", x.getAttribute("id"));
        const { container: $ } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            ($.append(x),
            D.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(x)),
          x.classList.add(ao),
          "ontouchstart" in document.documentElement)
        )
          for (const H of [].concat(...document.body.children))
            D.on(H, "mouseover", P);
        this._queueCallback(
          () => {
            D.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          this._isShown() &&
          !D.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(ao),
            "ontouchstart" in document.documentElement)
          )
            for (const l of [].concat(...document.body.children))
              D.off(l, "mouseover", P);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[uo] = !1),
            (this._activeTrigger[yi] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  D.trigger(
                    this._element,
                    this.constructor.eventName("hidden")
                  ));
              },
              this.tip,
              this._isAnimated()
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(l) {
        const h = this._getTemplateFactory(l).toHtml();
        if (!h) return null;
        h.classList.remove(lo, ao),
          h.classList.add(`bs-${this.constructor.NAME}-auto`);
        const x = (($) => {
          do $ += Math.floor(1e6 * Math.random());
          while (document.getElementById($));
          return $;
        })(this.constructor.NAME).toString();
        return (
          h.setAttribute("id", x), this._isAnimated() && h.classList.add(lo), h
        );
      }
      setContent(l) {
        (this._newContent = l),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(l) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(l)
            : (this._templateFactory = new xs({
                ...this._config,
                content: l,
                extraClass: this._resolvePossibleFunction(
                  this._config.customClass
                ),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(l) {
        return this.constructor.getOrCreateInstance(
          l.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(lo))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(ao);
      }
      _createPopper(l) {
        const h = I(this._config.placement, [this, l, this._element]),
          x = ua[h.toUpperCase()];
        return i.createPopper(this._element, l, this._getPopperConfig(x));
      }
      _getOffset() {
        const { offset: l } = this._config;
        return typeof l == "string"
          ? l.split(",").map((h) => Number.parseInt(h, 10))
          : typeof l == "function"
          ? (h) => l(h, this._element)
          : l;
      }
      _resolvePossibleFunction(l) {
        return I(l, [this._element]);
      }
      _getPopperConfig(l) {
        const h = {
          placement: l,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (x) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  x.state.placement
                );
              },
            },
          ],
        };
        return { ...h, ...I(this._config.popperConfig, [h]) };
      }
      _setListeners() {
        const l = this._config.trigger.split(" ");
        for (const h of l)
          if (h === "click")
            D.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (x) => {
                this._initializeOnDelegatedTarget(x).toggle();
              }
            );
          else if (h !== "manual") {
            const x =
                h === yi
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              $ =
                h === yi
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            D.on(this._element, x, this._config.selector, (H) => {
              const X = this._initializeOnDelegatedTarget(H);
              (X._activeTrigger[H.type === "focusin" ? uo : yi] = !0),
                X._enter();
            }),
              D.on(this._element, $, this._config.selector, (H) => {
                const X = this._initializeOnDelegatedTarget(H);
                (X._activeTrigger[H.type === "focusout" ? uo : yi] =
                  X._element.contains(H.relatedTarget)),
                  X._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          D.on(this._element.closest(la), aa, this._hideModalHandler);
      }
      _fixTitle() {
        const l = this._element.getAttribute("title");
        l &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", l),
          this._element.setAttribute("data-bs-original-title", l),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(l, h) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(l, h));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(l) {
        const h = $e.getDataAttributes(this._element);
        for (const x of Object.keys(h)) vc.has(x) && delete h[x];
        return (
          (l = { ...h, ...(typeof l == "object" && l ? l : {}) }),
          (l = this._mergeConfigObj(l)),
          (l = this._configAfterMerge(l)),
          this._typeCheckConfig(l),
          l
        );
      }
      _configAfterMerge(l) {
        return (
          (l.container = l.container === !1 ? document.body : _(l.container)),
          typeof l.delay == "number" &&
            (l.delay = { show: l.delay, hide: l.delay }),
          typeof l.title == "number" && (l.title = l.title.toString()),
          typeof l.content == "number" && (l.content = l.content.toString()),
          l
        );
      }
      _getDelegateConfig() {
        const l = {};
        for (const [h, x] of Object.entries(this._config))
          this.constructor.Default[h] !== x && (l[h] = x);
        return (l.selector = !1), (l.trigger = "manual"), l;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = _t.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (h[l] === void 0) throw new TypeError(`No method named "${l}"`);
            h[l]();
          }
        });
      }
    }
    S(_t);
    const yc = {
        ..._t.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      co = { ..._t.DefaultType, content: "(null|string|element|function)" };
    class fo extends _t {
      static get Default() {
        return yc;
      }
      static get DefaultType() {
        return co;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = fo.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (h[l] === void 0) throw new TypeError(`No method named "${l}"`);
            h[l]();
          }
        });
      }
    }
    S(fo);
    const Cs = ".bs.scrollspy",
      wc = `activate${Cs}`,
      ca = `click${Cs}`,
      Ec = `load${Cs}.data-api`,
      Lr = "active",
      ks = "[href]",
      da = ".nav-link",
      Mt = `${da}, .nav-item > ${da}, .list-group-item`,
      fa = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      ha = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class jr extends Ke {
      constructor(l, h) {
        super(l, h),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return fa;
      }
      static get DefaultType() {
        return ha;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const l of this._observableSections.values())
          this._observer.observe(l);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(l) {
        return (
          (l.target = _(l.target) || document.body),
          (l.rootMargin = l.offset ? `${l.offset}px 0px -30%` : l.rootMargin),
          typeof l.threshold == "string" &&
            (l.threshold = l.threshold
              .split(",")
              .map((h) => Number.parseFloat(h))),
          l
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (D.off(this._config.target, ca),
          D.on(this._config.target, ca, ks, (l) => {
            const h = this._observableSections.get(l.target.hash);
            if (h) {
              l.preventDefault();
              const x = this._rootElement || window,
                $ = h.offsetTop - this._element.offsetTop;
              if (x.scrollTo)
                return void x.scrollTo({ top: $, behavior: "smooth" });
              x.scrollTop = $;
            }
          }));
      }
      _getNewObserver() {
        const l = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((h) => this._observerCallback(h), l);
      }
      _observerCallback(l) {
        const h = (X) => this._targetLinks.get(`#${X.target.id}`),
          x = (X) => {
            (this._previousScrollData.visibleEntryTop = X.target.offsetTop),
              this._process(h(X));
          },
          $ = (this._rootElement || document.documentElement).scrollTop,
          H = $ >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = $;
        for (const X of l) {
          if (!X.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(h(X));
            continue;
          }
          const ue =
            X.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (H && ue) {
            if ((x(X), !$)) return;
          } else H || ue || x(X);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const l = J.find(ks, this._config.target);
        for (const h of l) {
          if (!h.hash || T(h)) continue;
          const x = J.findOne(decodeURI(h.hash), this._element);
          E(x) &&
            (this._targetLinks.set(decodeURI(h.hash), h),
            this._observableSections.set(h.hash, x));
        }
      }
      _process(l) {
        this._activeTarget !== l &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = l),
          l.classList.add(Lr),
          this._activateParents(l),
          D.trigger(this._element, wc, { relatedTarget: l }));
      }
      _activateParents(l) {
        if (l.classList.contains("dropdown-item"))
          J.findOne(".dropdown-toggle", l.closest(".dropdown")).classList.add(
            Lr
          );
        else
          for (const h of J.parents(l, ".nav, .list-group"))
            for (const x of J.prev(h, Mt)) x.classList.add(Lr);
      }
      _clearActiveClass(l) {
        l.classList.remove(Lr);
        const h = J.find(`${ks}.${Lr}`, l);
        for (const x of h) x.classList.remove(Lr);
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = jr.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (h[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            h[l]();
          }
        });
      }
    }
    D.on(window, Ec, () => {
      for (const C of J.find('[data-bs-spy="scroll"]'))
        jr.getOrCreateInstance(C);
    }),
      S(jr);
    const rr = ".bs.tab",
      xc = `hide${rr}`,
      pa = `hidden${rr}`,
      ho = `show${rr}`,
      Cc = `shown${rr}`,
      kc = `click${rr}`,
      ma = `keydown${rr}`,
      bc = `load${rr}`,
      Sc = "ArrowLeft",
      bs = "ArrowRight",
      ga = "ArrowUp",
      Ss = "ArrowDown",
      Ir = "Home",
      Ts = "End",
      vn = "active",
      yt = "fade",
      Os = "show",
      va = ".dropdown-toggle",
      po = `:not(${va})`,
      As =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Ps = `.nav-link${po}, .list-group-item${po}, [role="tab"]${po}, ${As}`,
      Tc = `.${vn}[data-bs-toggle="tab"], .${vn}[data-bs-toggle="pill"], .${vn}[data-bs-toggle="list"]`;
    class ir extends Ke {
      constructor(l) {
        super(l),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            D.on(this._element, ma, (h) => this._keydown(h)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const l = this._element;
        if (this._elemIsActive(l)) return;
        const h = this._getActiveElem(),
          x = h ? D.trigger(h, xc, { relatedTarget: l }) : null;
        D.trigger(l, ho, { relatedTarget: h }).defaultPrevented ||
          (x && x.defaultPrevented) ||
          (this._deactivate(h, l), this._activate(l, h));
      }
      _activate(l, h) {
        l &&
          (l.classList.add(vn),
          this._activate(J.getElementFromSelector(l)),
          this._queueCallback(
            () => {
              l.getAttribute("role") === "tab"
                ? (l.removeAttribute("tabindex"),
                  l.setAttribute("aria-selected", !0),
                  this._toggleDropDown(l, !0),
                  D.trigger(l, Cc, { relatedTarget: h }))
                : l.classList.add(Os);
            },
            l,
            l.classList.contains(yt)
          ));
      }
      _deactivate(l, h) {
        l &&
          (l.classList.remove(vn),
          l.blur(),
          this._deactivate(J.getElementFromSelector(l)),
          this._queueCallback(
            () => {
              l.getAttribute("role") === "tab"
                ? (l.setAttribute("aria-selected", !1),
                  l.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(l, !1),
                  D.trigger(l, pa, { relatedTarget: h }))
                : l.classList.remove(Os);
            },
            l,
            l.classList.contains(yt)
          ));
      }
      _keydown(l) {
        if (![Sc, bs, ga, Ss, Ir, Ts].includes(l.key)) return;
        l.stopPropagation(), l.preventDefault();
        const h = this._getChildren().filter(($) => !T($));
        let x;
        if ([Ir, Ts].includes(l.key)) x = h[l.key === Ir ? 0 : h.length - 1];
        else {
          const $ = [bs, Ss].includes(l.key);
          x = B(h, l.target, $, !0);
        }
        x && (x.focus({ preventScroll: !0 }), ir.getOrCreateInstance(x).show());
      }
      _getChildren() {
        return J.find(Ps, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((l) => this._elemIsActive(l)) || null;
      }
      _setInitialAttributes(l, h) {
        this._setAttributeIfNotExists(l, "role", "tablist");
        for (const x of h) this._setInitialAttributesOnChild(x);
      }
      _setInitialAttributesOnChild(l) {
        l = this._getInnerElement(l);
        const h = this._elemIsActive(l),
          x = this._getOuterElement(l);
        l.setAttribute("aria-selected", h),
          x !== l && this._setAttributeIfNotExists(x, "role", "presentation"),
          h || l.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(l, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(l);
      }
      _setInitialAttributesOnTargetPanel(l) {
        const h = J.getElementFromSelector(l);
        h &&
          (this._setAttributeIfNotExists(h, "role", "tabpanel"),
          l.id &&
            this._setAttributeIfNotExists(h, "aria-labelledby", `${l.id}`));
      }
      _toggleDropDown(l, h) {
        const x = this._getOuterElement(l);
        if (!x.classList.contains("dropdown")) return;
        const $ = (H, X) => {
          const ue = J.findOne(H, x);
          ue && ue.classList.toggle(X, h);
        };
        $(va, vn), $(".dropdown-menu", Os), x.setAttribute("aria-expanded", h);
      }
      _setAttributeIfNotExists(l, h, x) {
        l.hasAttribute(h) || l.setAttribute(h, x);
      }
      _elemIsActive(l) {
        return l.classList.contains(vn);
      }
      _getInnerElement(l) {
        return l.matches(Ps) ? l : J.findOne(Ps, l);
      }
      _getOuterElement(l) {
        return l.closest(".nav-item, .list-group-item") || l;
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = ir.getOrCreateInstance(this);
          if (typeof l == "string") {
            if (h[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            h[l]();
          }
        });
      }
    }
    D.on(document, kc, As, function (C) {
      ["A", "AREA"].includes(this.tagName) && C.preventDefault(),
        T(this) || ir.getOrCreateInstance(this).show();
    }),
      D.on(window, bc, () => {
        for (const C of J.find(Tc)) ir.getOrCreateInstance(C);
      }),
      S(ir);
    const $n = ".bs.toast",
      Oc = `mouseover${$n}`,
      Ac = `mouseout${$n}`,
      _a = `focusin${$n}`,
      ya = `focusout${$n}`,
      Ns = `hide${$n}`,
      Pc = `hidden${$n}`,
      Nc = `show${$n}`,
      or = `shown${$n}`,
      Jt = "hide",
      wi = "show",
      mo = "showing",
      wa = { animation: "boolean", autohide: "boolean", delay: "number" },
      Ea = { animation: !0, autohide: !0, delay: 5e3 };
    class $r extends Ke {
      constructor(l, h) {
        super(l, h),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return Ea;
      }
      static get DefaultType() {
        return wa;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        D.trigger(this._element, Nc).defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Jt),
          j(this._element),
          this._element.classList.add(wi, mo),
          this._queueCallback(
            () => {
              this._element.classList.remove(mo),
                D.trigger(this._element, or),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this.isShown() &&
          (D.trigger(this._element, Ns).defaultPrevented ||
            (this._element.classList.add(mo),
            this._queueCallback(
              () => {
                this._element.classList.add(Jt),
                  this._element.classList.remove(mo, wi),
                  D.trigger(this._element, Pc);
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(wi),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(wi);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(l, h) {
        switch (l.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = h;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = h;
        }
        if (h) return void this._clearTimeout();
        const x = l.relatedTarget;
        this._element === x ||
          this._element.contains(x) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        D.on(this._element, Oc, (l) => this._onInteraction(l, !0)),
          D.on(this._element, Ac, (l) => this._onInteraction(l, !1)),
          D.on(this._element, _a, (l) => this._onInteraction(l, !0)),
          D.on(this._element, ya, (l) => this._onInteraction(l, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(l) {
        return this.each(function () {
          const h = $r.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (h[l] === void 0) throw new TypeError(`No method named "${l}"`);
            h[l](this);
          }
        });
      }
    }
    return (
      wr($r),
      S($r),
      {
        Alert: mt,
        Button: Qn,
        Carousel: kr,
        Collapse: qe,
        Dropdown: Ne,
        Modal: gn,
        Offcanvas: Zt,
        Popover: fo,
        ScrollSpy: jr,
        Tab: ir,
        Toast: $r,
        Tooltip: _t,
      }
    );
  });
})(J1);
const HE = "/TheraBot/assets/hero-img-BdtktXvP.png",
  Ka = "/TheraBot/assets/nyan-cat-CzgcSq_T.mp4",
  WE = ({ title: e, price: t, features: n }) =>
    O.jsxs("div", {
      className: "plan-card",
      children: [
        O.jsx("h3", { children: e }),
        O.jsxs("p", {
          className: "plan-price",
          children: ["$", t, O.jsx("span", { children: "/month" })],
        }),
        O.jsx("ul", {
          className: "plan-features",
          children: n.map((r, i) =>
            O.jsxs(
              "li",
              {
                children: [
                  O.jsx("i", { className: "ri-checkbox-circle-fill" }),
                  O.jsx("span", { children: r }),
                ],
              },
              i
            )
          ),
        }),
      ],
    }),
  VE = () => {
    const e = [
      {
        title: "Mind Starter",
        price: 0,
        features: [
          "Daily mood check-ins",
          "Basic emotional analysis",
          "Access to mindfulness exercises",
          "Community support forums",
        ],
      },
      {
        title: "Insight Seeker",
        price: 19.99,
        features: [
          "All Mind Starter features",
          "Unlimited AI therapy sessions",
          "Personalized growth plan",
          "Progress tracking dashboard",
          "Guided journaling prompts",
        ],
      },
      {
        title: "Transformation Master",
        price: 39.99,
        features: [
          "All Insight Seeker features",
          "Priority 24/7 AI support",
          "Advanced emotional intelligence training",
          "Personalized meditation sessions",
          "Monthly human therapist check-in",
          "Exclusive wellness webinars",
        ],
      },
    ];
    return O.jsxs("section", {
      className: "pricing-plans",
      children: [
        O.jsx("h2", { className: "section-title", children: "Explore Plans" }),
        O.jsx("div", {
          className: "plans-container",
          children: e.map((t, n) => O.jsx(WE, { ...t }, n)),
        }),
      ],
    });
  };
function QE() {
  return O.jsx(O.Fragment, {
    children: O.jsx("div", {
      className: "mission-section",
      children: O.jsxs("div", {
        className: "mission-container",
        children: [
          O.jsx("h2", { className: "mission-title", children: "Our Mission" }),
          O.jsx("p", {
            className: "mission-text",
            children:
              "Thera Bot addresses the global shortage of mental health support by leveraging AI technology. We aim to provide immediate, personalized assistance through a private online platform, offering support and encouraging self-help. By harnessing the power of machine learning and vast datasets, we strive to create an innovative solution that complements traditional therapy and showcases the potential of AI in mental health care.",
          }),
        ],
      }),
    }),
  });
}
const P_ = "/TheraBot/assets/Thera_Bot_nobg-nd-ik7KI.png";
function KE() {
  const e = (t) => {
    const n = document.getElementById(t);
    n && n.scrollIntoView({ behavior: "smooth" });
  };
  return O.jsxs("header", {
    className: "header",
    children: [
      O.jsx("div", {
        className: "header__logo",
        children: O.jsx(rl, {
          to: "/home",
          children: O.jsx("img", { src: P_, alt: "Thera Bot Logo" }),
        }),
      }),
      O.jsxs("nav", {
        className: "header__menu",
        children: [
          O.jsx("div", {
            className: "header__menu-item",
            children: O.jsx(rl, { to: "/home", children: "Home" }),
          }),
          O.jsx("div", {
            className: "header__menu-item",
            onClick: () => e("about-us"),
            children: O.jsx("a", { href: "#about-us", children: "About Us" }),
          }),
          O.jsx("div", {
            className: "header__menu-item",
            children: O.jsx("a", {
              href: "/TheraBot/a.html",
              children: "Chat",
            }),
          }),
          O.jsx("div", {
            className: "header__menu-item",
            onClick: () => e("faq"),
            children: O.jsx("a", { href: "#articles", children: "FAQ" }),
          }),
        ],
      }),
      O.jsx("button", {
        className: "header__account-button",
        children: "Account",
      }),
    ],
  });
}
var N_ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", a = 0; a < arguments.length; a++) {
        var c = arguments[a];
        c && (s = i(s, r(c)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var a = "";
      for (var c in s) t.call(s, c) && s[c] && (a = i(a, c));
      return a;
    }
    function i(s, a) {
      return a ? (s ? s + " " + a : s + a) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(N_);
var qE = N_.exports;
const is = $m(qE);
function vf() {
  return (
    (vf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vf.apply(null, arguments)
  );
}
function YE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function Pm(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function XE(e) {
  var t = GE(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function GE(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ZE(e, t, n) {
  var r = R.useRef(e !== void 0),
    i = R.useState(t),
    s = i[0],
    a = i[1],
    c = e !== void 0,
    d = r.current;
  return (
    (r.current = c),
    !c && d && s !== t && a(t),
    [
      c ? e : s,
      R.useCallback(
        function (p) {
          for (
            var g = arguments.length, _ = new Array(g > 1 ? g - 1 : 0), E = 1;
            E < g;
            E++
          )
            _[E - 1] = arguments[E];
          n && n.apply(void 0, [p].concat(_)), a(p);
        },
        [n]
      ),
    ]
  );
}
function JE(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var i,
      s = n,
      a = s[Pm(r)],
      c = s[r],
      d = YE(s, [Pm(r), r].map(XE)),
      p = t[r],
      g = ZE(c, a, e[p]),
      _ = g[0],
      E = g[1];
    return vf({}, d, ((i = {}), (i[r] = _), (i[p] = E), i));
  }, e);
}
const ex = ["xxl", "xl", "lg", "md", "sm", "xs"],
  tx = "xs",
  Nh = R.createContext({ prefixes: {}, breakpoints: ex, minBreakpoint: tx });
function Ll(e, t) {
  const { prefixes: n } = R.useContext(Nh);
  return e || n[t] || t;
}
function L_() {
  const { breakpoints: e } = R.useContext(Nh);
  return e;
}
function j_() {
  const { minBreakpoint: e } = R.useContext(Nh);
  return e;
}
const Nm = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function nx(e, t) {
  const n = Nm(e),
    r = Nm(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function rx(e, t) {
  return R.useMemo(() => nx(e, t), [e, t]);
}
function ix(e) {
  const t = R.useRef(e);
  return (
    R.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function I_(e) {
  const t = ix(e);
  return R.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const ox = ["as", "disabled"];
function sx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function lx(e) {
  return !e || e.trim() === "#";
}
function ax({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: i,
  role: s,
  onClick: a,
  tabIndex: c = 0,
  type: d,
}) {
  e || (n != null || r != null || i != null ? (e = "a") : (e = "button"));
  const p = { tagName: e };
  if (e === "button") return [{ type: d || "button", disabled: t }, p];
  const g = (E) => {
      if (((t || (e === "a" && lx(n))) && E.preventDefault(), t)) {
        E.stopPropagation();
        return;
      }
      a == null || a(E);
    },
    _ = (E) => {
      E.key === " " && (E.preventDefault(), g(E));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: s ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : c,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? i : void 0,
        onClick: g,
        onKeyDown: _,
      },
      p,
    ]
  );
}
const $_ = R.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    i = sx(e, ox);
  const [s, { tagName: a }] = ax(Object.assign({ tagName: n, disabled: r }, i));
  return O.jsx(a, Object.assign({}, i, s, { ref: t }));
});
$_.displayName = "Button";
function ux({ as: e, bsPrefix: t, className: n, ...r }) {
  t = Ll(t, "col");
  const i = L_(),
    s = j_(),
    a = [],
    c = [];
  return (
    i.forEach((d) => {
      const p = r[d];
      delete r[d];
      let g, _, E;
      typeof p == "object" && p != null
        ? ({ span: g, offset: _, order: E } = p)
        : (g = p);
      const T = d !== s ? `-${d}` : "";
      g && a.push(g === !0 ? `${t}${T}` : `${t}${T}-${g}`),
        E != null && c.push(`order${T}-${E}`),
        _ != null && c.push(`offset${T}-${_}`);
    }),
    [
      { ...r, className: is(n, ...a, ...c) },
      { as: e, bsPrefix: t, spans: a },
    ]
  );
}
const Eo = R.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: i = "div", bsPrefix: s, spans: a }] =
    ux(e);
  return O.jsx(i, { ...r, ref: t, className: is(n, !a.length && s) });
});
Eo.displayName = "Col";
const _f = R.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...i }, s) => {
    const a = Ll(e, "container"),
      c = typeof t == "string" ? `-${t}` : "-fluid";
    return O.jsx(n, { ref: s, ...i, className: is(r, t ? `${a}${c}` : a) });
  }
);
_f.displayName = "Container";
var cx = Function.prototype.bind.call(Function.prototype.call, [].slice);
function dx(e, t) {
  return cx(e.querySelectorAll(t));
}
function fx() {
  const [, e] = R.useReducer((t) => !t, !1);
  return e;
}
const yf = R.createContext(null),
  Lh = (e, t = null) => (e != null ? String(e) : t || null),
  jh = R.createContext(null);
jh.displayName = "NavContext";
const hx = "data-rr-ui-",
  px = "rrUi";
function Ih(e) {
  return `${hx}${e}`;
}
function mx(e) {
  return `${px}${e}`;
}
const D_ = R.createContext(null),
  gx = ["as", "active", "eventKey"];
function vx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function M_({ key: e, onClick: t, active: n, id: r, role: i, disabled: s }) {
  const a = R.useContext(yf),
    c = R.useContext(jh),
    d = R.useContext(D_);
  let p = n;
  const g = { role: i };
  if (c) {
    !i && c.role === "tablist" && (g.role = "tab");
    const _ = c.getControllerId(e ?? null),
      E = c.getControlledId(e ?? null);
    (g[Ih("event-key")] = e),
      (g.id = _ || r),
      (p = n == null && e != null ? c.activeKey === e : n),
      (p ||
        (!(d != null && d.unmountOnExit) && !(d != null && d.mountOnEnter))) &&
        (g["aria-controls"] = E);
  }
  return (
    g.role === "tab" &&
      ((g["aria-selected"] = p),
      p || (g.tabIndex = -1),
      s && ((g.tabIndex = -1), (g["aria-disabled"] = !0))),
    (g.onClick = I_((_) => {
      s ||
        (t == null || t(_),
        e != null && a && !_.isPropagationStopped() && a(e, _));
    })),
    [g, { isActive: p }]
  );
}
const R_ = R.forwardRef((e, t) => {
  let { as: n = $_, active: r, eventKey: i } = e,
    s = vx(e, gx);
  const [a, c] = M_(Object.assign({ key: Lh(i, s.href), active: r }, s));
  return (
    (a[Ih("active")] = c.isActive),
    O.jsx(n, Object.assign({}, s, a, { ref: t }))
  );
});
R_.displayName = "NavItem";
const _x = R_,
  yx = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function wx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const Lm = () => {},
  jm = Ih("event-key"),
  z_ = R.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: i, role: s, onKeyDown: a } = e,
      c = wx(e, yx);
    const d = fx(),
      p = R.useRef(!1),
      g = R.useContext(yf),
      _ = R.useContext(D_);
    let E, T;
    _ &&
      ((s = s || "tablist"),
      (i = _.activeKey),
      (E = _.getControlledId),
      (T = _.getControllerId));
    const L = R.useRef(null),
      P = (y) => {
        const S = L.current;
        if (!S) return null;
        const I = dx(S, `[${jm}]:not([aria-disabled=true])`),
          z = S.querySelector("[aria-selected=true]");
        if (!z || z !== document.activeElement) return null;
        const B = I.indexOf(z);
        if (B === -1) return null;
        let U = B + y;
        return U >= I.length && (U = 0), U < 0 && (U = I.length - 1), I[U];
      },
      j = (y, S) => {
        y != null && (r == null || r(y, S), g == null || g(y, S));
      },
      w = (y) => {
        if ((a == null || a(y), !_)) return;
        let S;
        switch (y.key) {
          case "ArrowLeft":
          case "ArrowUp":
            S = P(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            S = P(1);
            break;
          default:
            return;
        }
        S &&
          (y.preventDefault(),
          j(S.dataset[mx("EventKey")] || null, y),
          (p.current = !0),
          d());
      };
    R.useEffect(() => {
      if (L.current && p.current) {
        const y = L.current.querySelector(`[${jm}][aria-selected=true]`);
        y == null || y.focus();
      }
      p.current = !1;
    });
    const v = rx(t, L);
    return O.jsx(yf.Provider, {
      value: j,
      children: O.jsx(jh.Provider, {
        value: {
          role: s,
          activeKey: Lh(i),
          getControlledId: E || Lm,
          getControllerId: T || Lm,
        },
        children: O.jsx(
          n,
          Object.assign({}, c, { onKeyDown: w, ref: v, role: s })
        ),
      }),
    });
  });
z_.displayName = "Nav";
const Ex = Object.assign(z_, { Item: _x }),
  Ai = R.forwardRef(
    (
      {
        bsPrefix: e,
        active: t,
        disabled: n,
        eventKey: r,
        className: i,
        variant: s,
        action: a,
        as: c,
        ...d
      },
      p
    ) => {
      e = Ll(e, "list-group-item");
      const [g, _] = M_({ key: Lh(r, d.href), active: t, ...d }),
        E = I_((L) => {
          if (n) {
            L.preventDefault(), L.stopPropagation();
            return;
          }
          g.onClick(L);
        });
      n &&
        d.tabIndex === void 0 &&
        ((d.tabIndex = -1), (d["aria-disabled"] = !0));
      const T = c || (a ? (d.href ? "a" : "button") : "div");
      return O.jsx(T, {
        ref: p,
        ...d,
        ...g,
        onClick: E,
        className: is(
          i,
          e,
          _.isActive && "active",
          n && "disabled",
          s && `${e}-${s}`,
          a && `${e}-action`
        ),
      });
    }
  );
Ai.displayName = "ListGroupItem";
const F_ = R.forwardRef((e, t) => {
  const {
      className: n,
      bsPrefix: r,
      variant: i,
      horizontal: s,
      numbered: a,
      as: c = "div",
      ...d
    } = JE(e, { activeKey: "onSelect" }),
    p = Ll(r, "list-group");
  let g;
  return (
    s && (g = s === !0 ? "horizontal" : `horizontal-${s}`),
    O.jsx(Ex, {
      ref: t,
      ...d,
      as: c,
      className: is(
        n,
        p,
        i && `${p}-${i}`,
        g && `${p}-${g}`,
        a && `${p}-numbered`
      ),
    })
  );
});
F_.displayName = "ListGroup";
const qa = Object.assign(F_, { Item: Ai }),
  wf = R.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const s = Ll(e, "row"),
      a = L_(),
      c = j_(),
      d = `${s}-cols`,
      p = [];
    return (
      a.forEach((g) => {
        const _ = r[g];
        delete r[g];
        let E;
        _ != null && typeof _ == "object" ? ({ cols: E } = _) : (E = _);
        const T = g !== c ? `-${g}` : "";
        E != null && p.push(`${d}${T}-${E}`);
      }),
      O.jsx(n, { ref: i, ...r, className: is(t, s, ...p) })
    );
  });
wf.displayName = "Row";
const xx = [
    { path: "/contact", display: "Contact Us" },
    { path: "/faq", display: "FAQ" },
  ],
  Cx = [
    { path: "/home", display: "Home" },
    { path: "/about-us", display: "About Us" },
  ],
  kx = [
    { path: "/pages", display: "Pages" },
    { path: "/article", display: "Articles" },
    { path: "/setting", display: "Setting" },
  ],
  bx = () =>
    O.jsxs("footer", {
      className: "footer",
      children: [
        O.jsx(_f, {
          children: O.jsxs(wf, {
            children: [
              O.jsxs(Eo, {
                lg: "3",
                md: "6",
                className: "mb-4",
                children: [
                  O.jsx("div", {
                    className: "footer__logo",
                    children: O.jsx("img", { src: P_, alt: "Thera Bot Logo" }),
                  }),
                  O.jsxs(qa, {
                    className: "footer__contact",
                    children: [
                      O.jsxs(Ai, {
                        className: "footer__contact-item",
                        children: [
                          O.jsx("i", { className: "ri-mail-line" }),
                          " support@therabot.com",
                        ],
                      }),
                      O.jsxs(Ai, {
                        className: "footer__contact-item",
                        children: [
                          O.jsx("i", { className: "ri-phone-fill" }),
                          " +84 123 456 789",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs(Eo, {
                lg: "3",
                md: "6",
                className: "mb-4",
                children: [
                  O.jsx("h5", {
                    className: "footer__title",
                    children: "Information",
                  }),
                  O.jsx(qa, {
                    className: "footer__links",
                    children: xx.map((e, t) =>
                      O.jsx(
                        Ai,
                        {
                          className: "footer__link-item",
                          children: O.jsx(rl, {
                            to: e.path,
                            children: e.display,
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              O.jsxs(Eo, {
                lg: "3",
                md: "6",
                className: "mb-4",
                children: [
                  O.jsx("h5", {
                    className: "footer__title",
                    children: "About",
                  }),
                  O.jsx(qa, {
                    className: "footer__links",
                    children: Cx.map((e, t) =>
                      O.jsx(
                        Ai,
                        {
                          className: "footer__link-item",
                          children: O.jsx(rl, {
                            to: e.path,
                            children: e.display,
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              O.jsxs(Eo, {
                lg: "3",
                md: "6",
                children: [
                  O.jsx("h5", {
                    className: "footer__title",
                    children: "Services",
                  }),
                  O.jsx(qa, {
                    className: "footer__links",
                    children: kx.map((e, t) =>
                      O.jsx(
                        Ai,
                        {
                          className: "footer__link-item",
                          children: O.jsx(rl, {
                            to: e.path,
                            children: e.display,
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        O.jsx("div", {
          className: "footer__bottom",
          children: O.jsx(_f, {
            children: O.jsx(wf, {
              children: O.jsx(Eo, {
                lg: "12",
                children: O.jsxs("p", {
                  className: "footer__copyright",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " Thera Bot. All rights reserved.",
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    }),
  Hs = ({ name: e, email: t, major: n, year: r, university: i }) =>
    O.jsxs("div", {
      className: "item",
      id: "personal",
      children: [
        O.jsx("div", {
          children: O.jsxs("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              O.jsx("path", {
                d: "M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z",
                stroke: "#365486",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              O.jsx("path", {
                d: "M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z",
                stroke: "#365486",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        }),
        O.jsx("div", {
          children: O.jsx("h5", { style: { margin: 0 }, children: e }),
        }),
        O.jsx("div", {
          children: O.jsx("p", {
            style: { margin: 0, fontSize: "0.9rem" },
            children: t,
          }),
        }),
        O.jsx("div", {
          children: O.jsx("p", {
            style: { margin: 0, fontSize: "0.9rem" },
            children: n,
          }),
        }),
        O.jsx("div", {
          children: O.jsx("p", {
            style: { margin: 0, fontSize: "0.9rem" },
            children: r,
          }),
        }),
        O.jsx("div", {
          children: O.jsx("p", {
            style: { margin: 0, fontSize: "0.9rem" },
            children: i,
          }),
        }),
      ],
    }),
  Sx = () => {
    const [e, t] = R.useState(Ka),
      n = R.useRef(null),
      [r, i] = R.useState(null),
      s = (d) => {
        t(d);
      };
    R.useEffect(() => {
      const d = new IntersectionObserver(
        (p) => {
          p.forEach((g) => {
            console.log(g),
              g.isIntersecting
                ? g.target.classList.add("fade-in")
                : g.target.classList.remove("fade-in");
          });
        },
        { threshold: 0.1 }
      );
      return (
        n.current && d.observe(n.current),
        () => {
          n.current && d.unobserve(n.current);
        }
      );
    }, []);
    const a = (d) => {
        i(r === d ? null : d);
      },
      c = [
        {
          question: "What is Thera Bot and how does it work?",
          answer:
            "Thera Bot is an AI mental health assistant that helps you track your emotions, express yourself, and relax. It uses machine learning algorithms to analyze your mood and provide you with personalized recommendations.",
        },
        {
          question: "Is Thera Bot safe to use?",
          answer:
            "Thera Bot is designed to be safe and secure. We take your privacy seriously and use encryption to protect your data.",
        },
        {
          question: "How much does it cost to use?",
          answer:
            "Thera Bot is free to use for everyone. There are no hidden fees or charges.",
        },
      ];
    return O.jsxs(O.Fragment, {
      children: [
        O.jsx(KE, {}),
        O.jsxs("div", {
          className: "hero-section",
          children: [
            O.jsxs("div", {
              className: "hero-left",
              children: [
                O.jsx("h1", { className: "hero-title", children: "Team 10" }),
                O.jsx("p", {
                  children: "COSC2083 | COSC2708 – Essential of IT and Ethics",
                }),
              ],
            }),
            O.jsx("div", {
              className: "hero-right",
              children: O.jsx("img", { src: HE, alt: "Hero" }),
            }),
          ],
        }),
        O.jsx(QE, {}),
        O.jsx("div", {
          className: "overview",
          children: O.jsxs("div", {
            className: "overview-container",
            children: [
              O.jsx("h2", {
                className: "overview-title",
                children: "Meet Thera Bot",
              }),
              O.jsx("p", {
                children: "Your personal AI mental health assistant",
              }),
            ],
          }),
        }),
        O.jsxs("div", {
          className: "features-section",
          children: [
            O.jsx("div", {
              className: "features-left",
              children: O.jsx("video", {
                src: e,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                style: { width: "500px", height: "300px" },
              }),
            }),
            O.jsxs("div", {
              className: "features-right",
              children: [
                O.jsxs("div", {
                  className: "feature",
                  onClick: () => s(Ka),
                  children: [
                    O.jsx("h3", {
                      className: "feature-title",
                      children: "Mood Tracker",
                    }),
                    O.jsx("p", {
                      className: "feature-description",
                      children:
                        "Keep track of your emotions and moods with our mood tracker...",
                    }),
                  ],
                }),
                O.jsxs("div", {
                  className: "feature",
                  onClick: () => s(Ka),
                  children: [
                    O.jsx("h3", {
                      className: "feature-title",
                      children: "Journal",
                    }),
                    O.jsx("p", {
                      className: "feature-description",
                      children: "Express yourself with our journal feature...",
                    }),
                  ],
                }),
                O.jsxs("div", {
                  className: "feature",
                  onClick: () => s(Ka),
                  children: [
                    O.jsx("h3", {
                      className: "feature-title",
                      children: "Meditation",
                    }),
                    O.jsx("p", {
                      className: "feature-description",
                      children:
                        "Relax and unwind with our meditation feature...",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        O.jsxs("div", {
          className: "container about-us",
          id: "about-us",
          ref: n,
          style: {
            display: "flex",
            flexDirection: "column",
            minHeight: "300px",
          },
          children: [
            O.jsx("div", {
              className: "title",
              children: O.jsx("h4", { children: "About us" }),
            }),
            O.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                paddingTop: "40px",
                justifyContent: "center",
                gap: "16px",
                minHeight: "300px",
                width: "100%",
              },
              children: [
                O.jsx(Hs, {
                  name: "Tran Le Quang",
                  email: "s3927206@rmit.edu.vn",
                  major: "Major in Robotics and Mechatronic Engineering",
                  year: "Third-year Student",
                  university: "RMIT University",
                }),
                O.jsx(Hs, {
                  name: "Le Duc Huy",
                  email: "s4040502@rmit.edu.vn",
                  major: "Major in Information Technology",
                  year: "First-year Student",
                  university: "RMIT University",
                }),
                O.jsx(Hs, {
                  name: "Nguyen Bao Tuan",
                  email: "s3713061@rmit.edu.vn",
                  major: "Major in Robotics and Mechatronic Engineering",
                  year: "Fourth-year Student",
                  university: "RMIT University",
                }),
                O.jsx(Hs, {
                  name: "Kim JongOh",
                  email: "s3726103@rmit.edu.vn",
                  major: "Major in Information Technology",
                  year: "First-year Student",
                  university: "RMIT University",
                }),
                O.jsx(Hs, {
                  name: "Nguyen Doan Trung Truc",
                  email: "s3974820@rmit.edu.vn",
                  major: "Major in Information Technology",
                  year: "First-year Student",
                  university: "RMIT University",
                }),
              ],
            }),
          ],
        }),
        O.jsx(VE, {}),
        O.jsx("div", {
          id: "faq",
          className: "faq",
          children: O.jsxs("div", {
            className: "faq-container",
            children: [
              O.jsx("h2", {
                className: "faq-title",
                children: "Frequently asked questions",
              }),
              O.jsx("div", {
                className: "faq-questions",
                children: c.map((d, p) =>
                  O.jsxs(
                    "div",
                    {
                      className: "faq-item",
                      children: [
                        O.jsxs("button", {
                          onClick: () => a(p),
                          className: "faq-question",
                          children: [
                            O.jsx("h3", { children: d.question }),
                            O.jsxs("div", {
                              className: `faq-icon ${r === p ? "open" : ""}`,
                              children: [O.jsx("span", {}), O.jsx("span", {})],
                            }),
                          ],
                        }),
                        O.jsx("div", {
                          className: `faq-answer ${r === p ? "open" : ""}`,
                          children: O.jsx("p", { children: d.answer }),
                        }),
                      ],
                    },
                    p
                  )
                ),
              }),
            ],
          }),
        }),
        O.jsx(bx, {}),
      ],
    });
  },
  Tx = () =>
    O.jsxs(B1, {
      children: [
        O.jsx(lu, { path: "/", element: O.jsx(_m, { to: "/home" }) }),
        O.jsx(lu, { path: "*", element: O.jsx(_m, { to: "/home" }) }),
        O.jsx(lu, { path: "/home", element: O.jsx(Sx, {}) }),
      ],
    }),
  Ox = () => O.jsx(O.Fragment, { children: O.jsx(Tx, {}) });
function Ax() {
  return O.jsx(O.Fragment, { children: O.jsx(Ox, {}) });
}
Yv(document.getElementById("root")).render(
  O.jsx(Qm.StrictMode, { children: O.jsx(q1, { children: O.jsx(Ax, {}) }) })
);
