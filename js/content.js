!(function (e) {
  function t(t) {
    for (
      var i, o, s = t[0], c = t[1], u = t[2], d = 0, h = [];
      d < s.length;
      d++
    )
      (o = s[d]), r[o] && h.push(r[o][0]), (r[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    for (l && l(t); h.length; ) h.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], i = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== r[c] && (i = !1);
      }
      i && (a.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var i = {},
    r = { content: 0 },
    a = [];
  function o(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function (e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var i = new Promise(function (t, i) {
          n = r[e] = [t, i];
        });
        t.push((n[2] = i));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          (s.src = (function (e) {
            return (
              o.p +
              "js/" +
              ({
                "hpe-menu": "hpe-menu",
                "post-footer": "post-footer",
                "vendors~web-animations": "vendors~web-animations",
              }[e] || e) +
              "." +
              {
                "hpe-menu": "1b098660c24d60ce2cb2",
                "post-footer": "748c2ea96ca46a697e1c",
                "vendors~web-animations": "f49b478eab13301aec88",
              }[e] +
              ".js"
            );
          })(e));
        var c = new Error();
        a = function (t) {
          (s.onerror = s.onload = null), clearTimeout(u);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + a + ")"),
                (c.type = i),
                (c.request = a),
                n[1](c);
            }
            r[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = i),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          o.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var l = c;
  a.push([82, "vendor"]), n();
})({
  10: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return y;
    });
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(8),
      c = n.n(s),
      u = n(22),
      l = n(31),
      d = function (e) {
        return ""
          .concat(document.location.protocol, "//")
          .concat(document.location.host)
          .concat(e);
      };
    function h(e) {
      var t;
      return (
        (e.prev_path = (t = e.prev_path) ? d(t) : document.referrer),
        (e.current_url = window.location.href),
        e
      );
    }
    var v = function () {
      return window.amplitude.getInstance();
    };
    function m(e, t) {
      setTimeout(function () {
        var n = {
          host: window.location.host,
          device_id: window.__device_id || "unknown",
          type: e,
          event_props: c()({}, t, {
            geo: window.__geo,
            user_agent: navigator.userAgent,
            referrer: document.referrer,
          }),
        };
        new Image().src =
          "https://freq.theoutline.com/api/p.gif?json=" +
          encodeURIComponent(JSON.stringify(n));
      }, 1),
        v().logEvent(e, t);
    }
    function f() {
      var e = new l.a();
      v().setUserProperties({
        total_pageview_count: e.increment("total_pageview_count"),
      });
    }
    function p(e, t) {
      var n = t.current_path;
      window.ga("send", { hitType: e, page: n });
    }
    function g(e, t) {
      var n = t.prev_path,
        i = t.current_path,
        r = { url: d(i + window.location.search), urlref: n, js: 1 };
      try {
        window.parselyPreload.loaded
          ? window.PARSELY.beacon.trackPageView(r)
          : window.parselyPreload.eventQueue.push(r);
      } catch (e) {
        console.log(e);
      }
    }
    function _(e, t) {
      var n = t.interaction;
      window.COMSCORE &&
        "next" === n &&
        (window.COMSCORE.beacon({ c1: "2", c2: "27815420" }),
        Object(u.a)("/api/comscore_pageview_candidate"));
    }
    var y = (function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r()(this, e),
          (this.providers = [m]),
          (this.fired = !1),
          (this.willFire = !1),
          (this.event = t),
          (this.payload = h(c()({}, e.extraData, n))),
          this.send();
      }
      return (
        o()(
          e,
          [
            {
              key: "updateProviders",
              value: function (e) {
                return this.fired ? this : (e(this.providers), this);
              },
            },
            {
              key: "attachPixels",
              value: function () {
                var e = this;
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : []
                ).forEach(function (t) {
                  e.updateProviders(function (n) {
                    return n.push(
                      ((i = e.event),
                      (r = t),
                      function () {
                        if (!0 === window.__geo_usa) {
                          var e = window.__initialURL,
                            t = new Image(1, 1);
                          (t.onload = function () {
                            window.amplitude
                              .getInstance()
                              .logEvent(
                                "blackbird_thirdparty_pixel",
                                c()({}, r, {
                                  event: i,
                                  initial_url: e,
                                  status: "success",
                                })
                              );
                          }),
                            (t.onerror = function () {
                              window.amplitude
                                .getInstance()
                                .logEvent(
                                  "blackbird_thirdparty_pixel",
                                  c()({}, r, {
                                    event: i,
                                    initial_url: e,
                                    status: "error",
                                  })
                                );
                            }),
                            (t.src = r.url);
                        }
                      })
                    );
                    var i, r;
                  });
                });
              },
            },
            {
              key: "send",
              value: function () {
                var t = this;
                this.willFire ||
                  e.disabled ||
                  ((this.willFire = !0),
                  setTimeout(function () {
                    (t.fired = !0),
                      t.providers.forEach(function (e) {
                        return e(t.event, t.payload);
                      });
                  }, 0));
              },
            },
          ],
          [
            {
              key: "disable",
              value: function () {
                e.disable = !0;
              },
            },
            {
              key: "extraTrackingData",
              value: function (t) {
                e.extraData = t;
              },
            },
            {
              key: "ensureSimpleReachLoaded",
              value: function () {
                return window.SPR
                  ? Promise.resolve({ status: "already_running" })
                  : new Promise(function (e, t) {
                      var n = document.createElement("script");
                      (n.onload = function () {
                        return e({ status: "load" });
                      }),
                        (n.onerror = function () {
                          return t();
                        }),
                        (n.async = !0),
                        (n.src =
                          "https://d8rk54i4mohrb.cloudfront.net/js/reach.js"),
                        document.body.appendChild(n);
                    });
              },
            },
            {
              key: "track",
              value: function (t, n) {
                return new e(t, n);
              },
            },
            {
              key: "pageview",
              value: function (t) {
                return new e("pageview", t).updateProviders(function (e) {
                  e.unshift(f), e.push(p, g, _);
                });
              },
            },
          ]
        ),
        e
      );
    })();
    (y.disabled = !1), (y.extraData = {});
  },
  11: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    }),
      n.d(t, "b", function () {
        return l;
      });
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(3),
      c = "unmount",
      u = "activate",
      l = (function () {
        function e(t) {
          if ((r()(this, e), !t))
            throw "".concat(
              this.constructor.name,
              " instantiated without a DOM Node"
            );
          (this.$element = t),
            (this.componentState = c),
            (this.children = []),
            (this.renderQueue = new Map()),
            (this.renderId = 0);
        }
        return (
          o()(e, [
            { key: "mount", value: function () {} },
            { key: "activate", value: function () {} },
            { key: "deactivate", value: function () {} },
            { key: "unmount", value: function () {} },
            {
              key: "$",
              value: function (e) {
                return this.$element.querySelector(e);
              },
            },
            {
              key: "$$",
              value: function (e) {
                var t = this.$element.querySelectorAll(e);
                return t ? Array.from(t) : [];
              },
            },
            {
              key: "enqueueRender",
              value: function (e) {
                var t = this;
                if (this.componentState !== c) {
                  var n = ++this.renderId,
                    i = Object(s.a)(function () {
                      try {
                        e();
                      } catch (e) {
                        console.error("error", e);
                      } finally {
                        t.renderQueue.delete(n);
                      }
                    });
                  this.renderQueue.set(n, i);
                }
              },
            },
            {
              key: "cancelQueuedRenders",
              value: function () {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var i, r = this.renderQueue.keys()[Symbol.iterator]();
                    !(e = (i = r.next()).done);
                    e = !0
                  ) {
                    var a = i.value,
                      o = this.renderQueue.get(a);
                    window.cancelAnimationFrame(o), this.renderQueue.delete(a);
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == r.return || r.return();
                  } finally {
                    if (t) throw n;
                  }
                }
              },
            },
            {
              key: "mountChild",
              value: function (t, n) {
                var i = "string" == typeof t ? this.$(t) : t;
                if (i) {
                  var r = n.prototype instanceof e ? new n(i) : n(i);
                  return (
                    this.addChild(r).dispatchMount(),
                    this.componentState === u && r.activate(),
                    r
                  );
                }
              },
            },
            {
              key: "mountChildren",
              value: function (e, t) {
                var n = this,
                  i = "string" == typeof e ? this.$$(e) : e;
                Array.from(i).forEach(function (e) {
                  return n.mountChild(e, t);
                });
              },
            },
            {
              key: "dom",
              value: function () {
                return this.$element;
              },
            },
            {
              key: "parent",
              value: function () {
                var e = this.dom();
                return e ? e.parentNode : null;
              },
            },
            {
              key: "isSame",
              value: function (e) {
                var t = this.dom();
                return !!t && t === e.dom();
              },
            },
            {
              key: "rect",
              value: function () {
                return this.dom().getBoundingClientRect();
              },
            },
            {
              key: "state",
              value: function () {
                return this.componentState;
              },
            },
            {
              key: "addChild",
              value: function (e) {
                return this.children.push(e), e;
              },
            },
            {
              key: "dispatchMount",
              value: function () {
                var e = this;
                return (
                  this.componentState === c &&
                    ((this.componentState = "mount"), this.mount()),
                  this.enqueueRender(function () {
                    e.children.forEach(function (e) {
                      return e.dispatchMount();
                    });
                  }),
                  this
                );
              },
            },
            {
              key: "dispatchUnmount",
              value: function () {
                this.componentState !== c &&
                  ((this.componentState = c), this.unmount()),
                  this.cancelQueuedRenders(),
                  this.children.forEach(function (e) {
                    return e.dispatchUnmount();
                  }),
                  (this.children = []);
              },
            },
            {
              key: "dispatchActivate",
              value: function () {
                var e = this;
                this.componentState !== u &&
                  (this.componentState === c && this.dispatchMount(),
                  (this.componentState = u),
                  this.activate()),
                  this.enqueueRender(function () {
                    e.children.forEach(function (e) {
                      return e.dispatchActivate();
                    });
                  });
              },
            },
            {
              key: "raf",
              value: function (e) {
                Object(s.a)(e);
              },
            },
            {
              key: "dispatchDeactivate",
              value: function () {
                "deactivate" !== this.componentState &&
                  (this.componentState === c && this.mount(),
                  (this.componentState = "deactivate"),
                  this.deactivate()),
                  this.children.forEach(function (e) {
                    return e.dispatchDeactivate();
                  });
              },
            },
          ]),
          e
        );
      })();
  },
  12: function (e, t, n) {
    "use strict";
    function i(e) {
      return "".concat(e, "px");
    }
    function r(e) {
      return "".concat(100 * e, "vh");
    }
    function a(e, t) {
      o(e, t, "");
    }
    function o(e, t, n) {
      e && (e.style[t] = n);
    }
    function s(e, t, n) {
      e.style.setProperty("--".concat(t), n);
    }
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "e", function () {
        return r;
      }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      });
  },
  146: function (e, t) {},
  18: function (e, t, n) {
    "use strict";
    t.a = function () {};
  },
  19: function (e, t, n) {
    "use strict";
    function i(e) {
      if ("complete" === document.readyState) e();
      else {
        window.addEventListener("load", function t() {
          setTimeout(e, 0), window.removeEventListener("load", t);
        });
      }
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  20: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "f", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return l;
      });
    var i = n(25),
      r = n.n(i);
    function a(e) {
      var t = (function (e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          i = document.createElement(e);
        return (
          n.length > 0 &&
            ("string" == typeof n
              ? i.classList.add(n)
              : (t = i.classList).add.apply(t, r()(n))),
          i
        );
      })("div");
      return (t.innerHTML = e), t.childNodes[0];
    }
    function o(e, t) {
      if (t) {
        var n = document.createElement("style");
        (n.innerHTML = t), e.insertBefore(n, e.firstChild);
      }
      return e;
    }
    function s(e, t) {
      return !!c(e, t);
    }
    function c(e, t) {
      for (var n = null; e && e !== document; ) {
        if (e.matches(t)) {
          n = e;
          break;
        }
        e = e.parentNode;
      }
      return n;
    }
    function u(e) {
      for (var t = -1; e; ) {
        if (!("previousElementSibling" in e)) {
          t = -1;
          break;
        }
        (t += 1), (e = e.previousElementSibling);
      }
      return t;
    }
    function l(e) {
      var t = e.parentElement;
      return !!t && t.lastElementChild === e;
    }
  },
  22: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var i = n(37);
    function r(e, t, n) {
      return Object(i.a)(e, {
        credentials: "include",
        method: t,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n),
      });
    }
    function a(e) {
      return Object(i.a)(e, {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    }
    function o(e, t) {
      return r(e, "POST", t);
    }
  },
  23: function (e, t, n) {
    "use strict";
    function i(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      try {
        return JSON.parse(e);
      } catch (e) {
        return t;
      }
    }
    function r(e) {
      var t = document.createElement("textarea");
      return (t.innerHTML = e), i(t.value);
    }
    var a = i;
    t.a = {
      jsonTag: function (e) {
        return e ? r(e.innerHTML) : null;
      },
      json: a,
      unescapeAndParse: r,
    };
  },
  24: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return u;
      });
    var i = n(29),
      r = "ontouchstart" in window,
      a = Object(i.b)() < 960,
      o = Object(i.a)() < 960,
      s = r && a && o,
      c = !!navigator.userAgent.match(/ipad/i),
      u = s || c;
  },
  27: function (e, t, n) {
    "use strict";
    function i(e) {
      return e;
    }
    function r(e) {
      return function () {
        return arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : e;
      };
    }
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return r;
      });
  },
  28: function (e, t, n) {
    "use strict";
    var i = {};
    n.r(i),
      n.d(i, "postValue", function () {
        return P;
      }),
      n.d(i, "postData", function () {
        return $;
      }),
      n.d(i, "relativeMouse", function () {
        return E;
      }),
      n.d(i, "intersection", function () {
        return x;
      }),
      n.d(i, "cleanedPointer", function () {
        return C;
      });
    var r = {};
    n.r(r),
      n.d(r, "sum", function () {
        return H;
      }),
      n.d(r, "concat", function () {
        return F;
      }),
      n.d(r, "latest", function () {
        return U;
      });
    var a = n(16),
      o = n.n(a),
      s = n(13),
      c = n.n(s),
      u = n(8),
      l = n.n(u),
      d = n(25),
      h = n.n(d),
      v = n(30),
      m = n.n(v),
      f = n(1),
      p = n.n(f),
      g = n(17),
      _ = n.n(g),
      y = n(43),
      b = n.n(y);
    function k(e) {
      return new O(function (t) {
        return t.broker.getStream(e);
      }).setTo(e);
    }
    var w = {
        page: function (e) {
          return k(e);
        },
        asset: function (e, t) {
          return new O(function (n) {
            var i = n.broker,
              r = n.asset;
            return i.findOrCreateAssetStream(r.context(), e, t);
          }).setTo(t);
        },
        self: function (e) {
          return new O(function (t) {
            var n = t.broker,
              i = t.asset;
            return n.findOrCreateAssetStream(i.context(), i.getName(), e);
          }).setTo(e);
        },
        type: function (e, t) {
          return new O(function (n) {
            var i = n.broker,
              r = n.asset;
            return i.findOrCreateTypeStream(r.context(), e, t);
          });
        },
        tickSample: function () {
          var e;
          return (e = k("tickTime")).flatSample.apply(e, arguments);
        },
      },
      O = function e(t) {
        var n = this;
        p()(this, e),
          (this.get = function (e) {
            return n.__fn(e);
          }),
          (this.compose = function (t) {
            return new e(function (e) {
              var i = e.broker,
                r = e.asset,
                a = n.get({ broker: i, asset: r });
              return t(a, { broker: i, asset: r });
            });
          }),
          (this.throttle = function (e) {
            return n.compose(function (t) {
              return t.compose(_()(e));
            });
          }),
          (this.map = function (e) {
            return n.compose(function (t) {
              return t.map(e);
            });
          }),
          (this.rename = function (e, t) {
            return n.map(function (n) {
              return m()({}, t, n[e]);
            });
          }),
          (this.setTo = function (e) {
            return n.map(function (t) {
              return m()({}, e, t);
            });
          }),
          (this.mapTo = function (e, t) {
            return n.map(function (n) {
              return m()({}, t, e(n));
            });
          }),
          (this.fold = function (e, t) {
            return n.compose(function (n) {
              return n.fold(e, t);
            });
          }),
          (this.tap = function (e) {
            return n.map(function (t) {
              return console.log(e, t), t;
            });
          }),
          (this.sample = function () {
            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
              i[r] = arguments[r];
            return new e(function (e) {
              var t = i.map(function (t) {
                return t.get(e);
              });
              return n.get(e).compose(b.a.apply(void 0, h()(t)));
            });
          }),
          (this.flatSample = function () {
            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
              i[r] = arguments[r];
            return new e(function (e) {
              var t = i.map(function (t) {
                return t.get(e);
              });
              return n
                .get(e)
                .compose(b.a.apply(void 0, h()(t)))
                .map(function (e) {
                  return e.reduce(function (e, t) {
                    return l()({}, e, t);
                  }, {});
                });
            });
          }),
          (this.__fn = t.bind(this));
      };
    function S() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return new O(function (e) {
        var n = t.map(function (t) {
          return t.get(e);
        });
        return c.a.combine.apply(c.a, h()(n));
      });
    }
    function j() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return new O(function (e) {
        var n = t.map(function (t) {
          return t.get(e);
        });
        return c.a.combine.apply(c.a, h()(n)).map(function (e) {
          return e.reduce(function (e, t) {
            return l()({}, e, t);
          }, {});
        });
      });
    }
    function P(e) {
      return w.asset("__POST__", e);
    }
    function $() {
      return new O(function (e) {
        var t = e.broker,
          n = e.asset,
          i = t.findOrCreateAssetStream(n.context(), "__POST__", "rect"),
          r = t.findOrCreateAssetStream(n.context(), "__POST__", "el"),
          a = t.getStream("windowSize");
        return c.a.combine(i, r, a).map(function (e) {
          var t = o()(e, 3);
          return { rect: t[0], $container: t[1], windowSize: t[2] };
        });
      });
    }
    function E(e) {
      var t = Array.isArray(e) ? e : [e],
        n = {};
      return S($(), w.page("mouseWindow")).map(function (e) {
        var i = o()(e, 2),
          r = i[0],
          a = i[1].mouseWindow,
          s = r.$container,
          c = a;
        return {
          relativeTargets: t.reduce(function (e, t) {
            if (!n[t]) {
              if (!s) return null;
              var i = s.querySelector(t);
              if (!i) return null;
              n[t] = i;
            }
            var r = n[t].getBoundingClientRect();
            if (!c) return (e[t] = { dx: null, dy: null, mouseIsOver: !1 }), e;
            var a = c.x,
              o = c.y,
              u = r.left,
              l = r.top,
              d = r.width,
              h = r.height,
              v = a - u,
              m = o - l,
              f = v >= 0 && m >= 0 && v <= d && m <= h;
            return (e[t] = { dx: v, dy: m, mouseIsOver: f }), e;
          }, {}),
        };
      });
    }
    function x(e) {
      var t = Array.isArray(e) ? e : [e],
        n = {};
      return $().map(function (e) {
        var i = e.$container,
          r = e.windowSize;
        return i
          ? {
              intersections: t.reduce(function (e, t) {
                if (!n[t]) {
                  var a = i.querySelector(t);
                  if (!a) return null;
                  n[t] = a;
                }
                var o = n[t].getBoundingClientRect(),
                  s = r.height,
                  c = (function (e, t, n, i) {
                    var r = n.bottom - n.top;
                    if (e && t) return 100;
                    if (e) return Math.floor(((i - n.top) / r) * 100);
                    if (t) return Math.floor((n.bottom / r) * 100);
                    return 0;
                  })(
                    o.top < s && o.top > 0,
                    o.bottom < s && o.bottom > 0,
                    o,
                    s
                  ),
                  u = s - o.top,
                  l = s + o.height,
                  d = Math.floor((u / l) * 100),
                  h = Math.min(Math.max(d, 0), 100);
                return (e[t] = { percentageViewable: c, depthPercent: h }), e;
              }, {}),
            }
          : {};
      });
    }
    function C() {
      return S(w.page("pointerCycle"), P("isSwipeNavigation")).map(function (
        e
      ) {
        var t = o()(e, 2),
          n = t[0].pointerCycle,
          i = t[1].isSwipeNavigation;
        return { pointer: i ? n.touch : n.mouse, isSwipeNavigation: i };
      });
    }
    var M = n(14),
      A = n.n(M),
      L = n(51),
      T = n.n(L),
      D = {
        firstPoint: null,
        previousPoint: null,
        currentPoint: null,
        frameDx: null,
        frameDy: null,
        totalDx: null,
        totalDy: null,
        pressed: !1,
        currentEvent: null,
      };
    function q() {
      return l()({}, D);
    }
    function R(e, t) {
      var n = t.type,
        i = T()(t, ["type"]);
      return "start" === n
        ? (function (e) {
            return {
              firstPoint: { x: e.x, y: e.y },
              previousPoint: { x: e.x, y: e.y },
              currentPoint: { x: e.x, y: e.y },
              frameDx: 0,
              frameDy: 0,
              totalDx: 0,
              totalDy: 0,
              pressed: !0,
              currentEvent: "start",
            };
          })(i)
        : "move" === n
        ? (function (e, t) {
            var n = e.currentPoint ? t.x - e.currentPoint.x : 0,
              i = e.currentPoint ? t.y - e.currentPoint.y : 0,
              r = e.pressed;
            return {
              firstPoint: r ? e.firstPoint : { x: t.x, y: t.y },
              previousPoint: r ? e.currentPoint : { x: t.x, y: t.y },
              currentPoint: { x: t.x, y: t.y },
              frameDx: n,
              frameDy: i,
              totalDx: r ? e.totalDx + n : 0,
              totalDy: r ? e.totalDy + i : 0,
              pressed: r,
              currentEvent: "move",
            };
          })(e, i)
        : "end" === n
        ? (function (e) {
            return {
              firstPoint: e.firstPoint,
              previousPoint: e.currentPoint,
              currentPoint: null,
              frameDx: e.frameDx,
              frameDy: e.frameDy,
              totalDx: e.totalDx,
              totalDy: e.totalDy,
              pressed: !1,
              currentEvent: "end",
            };
          })(e)
        : void 0;
    }
    function I() {
      return c.a
        .merge(
          A()(window, "touchstart").map(function (e) {
            return {
              type: "start",
              event: e,
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }),
          A()(window, "touchmove")
            .map(function (e) {
              return {
                type: "move",
                event: e,
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
              };
            })
            .compose(_()(10)),
          A()(window, "touchend").map(function () {
            return { type: "end" };
          })
        )
        .fold(R, q());
    }
    function N() {
      return c.a
        .merge(
          A()(window, "mousedown").map(function (e) {
            return { type: "start", event: e, x: e.clientX, y: e.clientY };
          }),
          A()(window, "mousemove")
            .map(function (e) {
              return { type: "move", event: e, x: e.clientX, y: e.clientY };
            })
            .compose(_()(10)),
          A()(window, "mouseup").map(function () {
            return { type: "end" };
          })
        )
        .fold(R, q());
    }
    var B = Object.freeze({ x: 0, y: 0, z: 0 }),
      z = function () {
        var e = A()(window, "mousemove")
            .compose(_()(10))
            .map(function (e) {
              return { type: "mouse", event: e, x: e.clientX, y: e.clientY };
            })
            .startWith(null),
          t = A()(window, "touchmove")
            .compose(_()(10))
            .map(function (e) {
              return {
                type: "touch",
                event: e,
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
              };
            })
            .startWith(null),
          n = c.a.combine(e, t).map(function (e) {
            var t = o()(e, 2),
              n = t[0],
              i = t[1];
            return i || n;
          }),
          i = c.a
            .merge(
              A()(window, "mousedown").map(function (e) {
                return { type: "mouse", event: e, x: e.clientX, y: e.clientY };
              }),
              A()(window, "mouseup").map(function () {
                return null;
              })
            )
            .compose(_()(10)),
          r = c.a
            .merge(
              A()(window, "touchstart").map(function (e) {
                return {
                  type: "touch",
                  event: e,
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY,
                };
              }),
              A()(window, "touchend").map(function () {
                return null;
              })
            )
            .compose(_()(10)),
          a = c.a
            .merge(
              A()(window, "mousedown").map(function (e) {
                return { type: "mouse", event: e, x: e.clientX, y: e.clientY };
              }),
              A()(window, "touchstart").map(function (e) {
                return {
                  type: "touch",
                  event: e,
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY,
                };
              }),
              A()(window, "mouseup").map(function () {
                return null;
              }),
              A()(window, "touchend").map(function () {
                return null;
              })
            )
            .compose(_()(10));
        return {
          tick: c.a.periodic(20),
          tickTime: c.a.periodic(20).map(function () {
            return new Date();
          }),
          scroll: A()(window, "scroll")
            .compose(_()(10))
            .map(function () {
              return window.scrollY;
            })
            .startWith(window.scrollY),
          windowSize: A()(window, "resize")
            .compose(_()(10))
            .map(function () {
              return { width: window.innerWidth, height: window.innerHeight };
            })
            .startWith({
              width: window.innerWidth,
              height: window.innerHeight,
            }),
          mouseWindow: e,
          touchWindow: t,
          pointerWindow: n,
          mouseButton: i,
          touchButton: r,
          pointerButton: a,
          pointerPosition: c.a.merge(a, n),
          touchCycle: I(),
          mouseCycle: N(),
          pointerCycle: c.a.combine(N(), I()).map(function (e) {
            var t = o()(e, 2);
            return { mouse: t[0], touch: t[1] };
          }),
          deviceorientation: A()(window, "deviceorientation")
            .compose(_()(10))
            .map(function (e) {
              return { alpha: e.alpha, beta: e.beta, gamma: e.gamma };
            })
            .startWith({ alpha: 0, beta: 0, gamma: 0 }),
          devicemotion: A()(window, "devicemotion")
            .compose(_()(10))
            .map(function (e) {
              return {
                acceleration: e.acceleration,
                accelerationIncludingGravity: e.accelerationIncludingGravity,
                rotationRate: e.rotationRate,
                interval: e.interval,
              };
            })
            .startWith({
              acceleration: B,
              accelerationIncludingGravity: B,
              rotationRate: B,
              interval: 0,
            }),
        };
      },
      Y = n(6);
    function H(e) {
      return Array.from(e.values()).reduce(function (e, t) {
        return e + t.value;
      }, 0);
    }
    function F(e) {
      return Array.from(e.values()).reduce(function (e, t) {
        var n = t.value;
        return e.concat(n);
      }, []);
    }
    function U(e) {
      return e.size < 1
        ? null
        : Array.from(e.values()).sort(function (e, t) {
            return t.meta.timestamp - e.meta.timestamp;
          })[0].value;
    }
    var V = n(2),
      X = n.n(V),
      W = n(47),
      J = n.n(W),
      Q = n(38);
    var Z = (function () {
      function e() {
        p()(this, e), (this.__contexts = new Map());
      }
      return (
        X()(e, [
          {
            key: "get",
            value: function (e, t, n) {
              return (
                (i = this.__contexts),
                [e, t, n].reduce(function (e, t) {
                  return (e && e.has(t) && e.get(t)) || null;
                }, i)
              );
              var i;
            },
          },
          {
            key: "hasContext",
            value: function (e) {
              return this.__contexts.has(e);
            },
          },
          {
            key: "has",
            value: function (e, t, n) {
              return !!this.get(e, t, n);
            },
          },
          {
            key: "set",
            value: function (e, t, n, i) {
              var r;
              return (
                this.has(e, t, n) ||
                  ((r = this.__contexts),
                  [e, t].reduce(function (e, t) {
                    if (e.has(t)) return e.get(t);
                    var n = new Map();
                    return e.set(t, n), n;
                  }, r)),
                this.__contexts.get(e).get(t).set(n, i),
                i
              );
            },
          },
          {
            key: "delete",
            value: function (e) {
              this.__contexts.delete(e);
            },
          },
        ]),
        e
      );
    })();
    var G = (function () {
        function e(t) {
          p()(this, e),
            (this.__contexts = new Map()),
            (this.__assetSubscriptions = new Map()),
            (this.__streams = l()({}, t, { assets: new Z(), types: new Z() }));
        }
        return (
          X()(e, [
            {
              key: "getStream",
              value: function (e) {
                return this.__streams[e];
              },
            },
            {
              key: "register",
              value: function (e, t) {
                var n = String(t);
                this.__contexts.get(n) || this.__contexts.set(n, new Set());
                var i = this.__contexts.get(n);
                if (i.has(e))
                  throw "".concat(
                    e.getName(),
                    " was registered, but a component already exists under that name"
                  );
                return (
                  this.__contexts.set(n, i.add(e)),
                  this.initAssetSubscriptions(e, n),
                  this.initAssetStreams(e),
                  this
                );
              },
            },
            {
              key: "unmountContext",
              value: function (e) {
                var t = this,
                  n = String(e),
                  i = this.__contexts.get(n);
                i
                  ? (i.forEach(function (e) {
                      return t.unmountAsset(n, e);
                    }),
                    this.__contexts.delete(n),
                    this.__streams.assets.delete(n),
                    this.__streams.types.delete(n))
                  : console.warn('Could not unmount "'.concat(e, '"'));
              },
            },
            {
              key: "unmountAsset",
              value: function (e, t) {
                var n = this.__assetSubscriptions.get(e);
                return (
                  (n.get(t.getName()) || []).forEach(function (e) {
                    return (0, e.unsubscribeFn)();
                  }),
                  n.delete(t.getName()),
                  t.unmount(),
                  this
                );
              },
            },
            {
              key: "initAssetSubscriptions",
              value: function (e, t) {
                var n = this,
                  i = e.subscriptions().map(function (t) {
                    var i = t.get({ broker: n, asset: e }),
                      r = {
                        next: function (t) {
                          (function (e) {
                            return (
                              e &&
                              "object" === J()(e) &&
                              e.constructor === Object
                            );
                          })(t) && e.merge(t);
                        },
                        error: function (n) {
                          console.error(
                            "Asset ["
                              .concat(e.getName(), "], Subscription [")
                              .concat(t, "]: "),
                            n
                          ),
                            console.error(t);
                        },
                        complete: function () {
                          return console.log(
                            "Asset ["
                              .concat(e.getName(), "]: Subscription [")
                              .concat(t, "]: CLOSED")
                          );
                        },
                      };
                    return (
                      i.addListener(r),
                      {
                        stream: i,
                        subscription: t,
                        listener: r,
                        unsubscribeFn: function () {
                          return i.removeListener(r);
                        },
                      }
                    );
                  }),
                  r = this.__assetSubscriptions.get(t) || new Map();
                this.__assetSubscriptions.set(t, r.set(e.getName(), i));
              },
            },
            {
              key: "createTypeStream",
              value: function (e, t, n) {
                var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null,
                  r = this.__streams.types.get(e, t, n);
                if (r) null !== i && r.next(i);
                else {
                  var a = new Q.a(i);
                  a.modifyStream(function (e) {
                    return e
                      .filter(function (e) {
                        return e;
                      })
                      .fold(function (e, t) {
                        var n = t.assetName,
                          i = t.msg;
                        return e.set(n, i);
                      }, new Map());
                  }),
                    this.__streams.types.set(e, t, n, a);
                }
              },
            },
            {
              key: "createAssetStream",
              value: function (e, t, n) {
                var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null,
                  r = this.__streams.assets.get(e, t, n);
                if (r) null !== i && r.next(i);
                else {
                  var a = new Q.a(i);
                  this.__streams.assets.set(e, t, n, a);
                }
              },
            },
            {
              key: "initAssetStreams",
              value: function (e) {
                var t = this,
                  n = Object.keys(e.getState()),
                  i = e.types(),
                  r = e.context(),
                  a = e.getName();
                n.forEach(function (n) {
                  var o = e.get(n),
                    s = { value: o, meta: { timestamp: e.lastUpdateFor(n) } };
                  t.createAssetStream(r, a, n, o),
                    i.forEach(function (e) {
                      return t.createTypeStream(r, e, n, {
                        msg: s,
                        assetName: a,
                      });
                    });
                });
              },
            },
            {
              key: "findOrCreateAssetStreamWrapper",
              value: function (e, t, n) {
                return (
                  this.createAssetStream(e, t, n),
                  this.__streams.assets.get(e, t, n)
                );
              },
            },
            {
              key: "findOrCreateAssetStream",
              value: function (e, t, n) {
                return this.findOrCreateAssetStreamWrapper(e, t, n).stream();
              },
            },
            {
              key: "findOrCreateTypeStreamWrapper",
              value: function (e, t, n) {
                return (
                  this.createTypeStream(e, t, n),
                  this.__streams.types.get(e, t, n)
                );
              },
            },
            {
              key: "findOrCreateTypeStream",
              value: function (e, t, n) {
                return this.findOrCreateTypeStreamWrapper(e, t, n).stream();
              },
            },
            {
              key: "assetUpdate",
              value: function (e, t) {
                var n = this,
                  i = e.types(),
                  r = e.getName(),
                  a = e.context();
                t.forEach(function (t) {
                  var o = e.get(t);
                  n.findOrCreateAssetStreamWrapper(a, r, t).next(o);
                  var s = e.lastUpdateFor(t);
                  i.forEach(function (e) {
                    var i = n.findOrCreateTypeStreamWrapper(a, e, t),
                      c = { value: o, meta: { timestamp: s } };
                    i.next({ assetName: r, msg: c });
                  });
                });
              },
            },
            {
              key: "listenToAssetStream",
              value: function (e, t, n, i) {
                var r = {
                  next: function (e) {
                    return i(e);
                  },
                };
                return this.findOrCreateAssetStream(e, t, n).addListener(r), r;
              },
            },
            {
              key: "contexts",
              value: function () {
                return Array.from(this.__contexts.keys());
              },
            },
            {
              key: "hasContext",
              value: function (e) {
                return this.__contexts.has(String(e));
              },
            },
            {
              key: "getContext",
              value: function (e) {
                var t = this.__contexts.get(String(e));
                return t ? Array.from(t) : null;
              },
            },
            {
              key: "assetSubscriptions",
              value: function () {
                return this.__assetSubscriptions;
              },
            },
          ]),
          e
        );
      })(),
      K = n(5),
      ee = n.n(K),
      te = n(0),
      ne = n.n(te),
      ie = n(4),
      re = n.n(ie),
      ae = n(7),
      oe = n.n(ae),
      se = n(52),
      ce = n.n(se);
    function ue() {
      return Math.random().toString(36).substr(2, 11);
    }
    var le = function (e) {
      return e instanceof Map;
    };
    function de(e, t) {
      return le(e) && le(t) ? e === t : ce()(e, t);
    }
    var he = (function () {
      function e() {
        var t = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        p()(this, e),
          (this.set = function (n, i) {
            var r = t.__state.get(n);
            return (
              (t.__timestamps = t.__timestamps.set(n, e.updateId++)),
              de(r, i) ||
                ((t.__state = new Map(t.__state).set(n, i)),
                t.__subscribed && t.stateDidUpdate(),
                t.notify([n])),
              t
            );
          }),
          (this.merge = function (n) {
            var i = t.__state,
              r = Object.keys(n);
            t.__timestamps = r.reduce(function (t, n) {
              return t.set(n, e.updateId++);
            }, t.__timestamps);
            var a = r.filter(function (e) {
              return !de(i.get(e), n[e]);
            });
            if (a.length > 0) {
              var o = new Map(t.__state);
              r.forEach(function (e) {
                return o.set(e, n[e]);
              }),
                (t.__state = o),
                t.__subscribed && t.stateDidUpdate(),
                t.notify(a);
            }
            return t;
          }),
          (this.requestFromProvider = function (e, n, i) {
            t.__availableProviders.includes(e) ||
              console.warn(
                "Asset "
                  .concat(t.getName(), " was not constructed with a ")
                  .concat(e, " provider")
              ),
              t.setProviderRequest(e, n, i);
          }),
          (this.wrapMessage = function (e) {
            return l()({}, e, { __guid: ue() });
          });
        var r = n.id,
          a = void 0 === r ? ue() : r,
          o = n.types,
          s = void 0 === o ? [] : o,
          c = n.subscriptions,
          u = void 0 === c ? [] : c;
        (this.__name = a), (this.__subscribed = !1);
        var d = l()({}, this.getInitialState(), i);
        (this.__state = new Map()),
          Object.keys(d).forEach(function (e) {
            return t.__state.set(e, d[e]);
          }),
          (this.__timestamps = new Map(
            Object.keys(d).map(function (t) {
              return [t, e.updateId++];
            })
          )),
          (this.__availableProviders = []),
          (this.__assetLookup = {}),
          (this.__types = (this.constructor.classTypes || []).concat(
            ["generic"],
            s
          )),
          (this.__subscriptions = this.getInitialSubscriptions(n).concat(u));
      }
      return (
        X()(e, [
          {
            key: "addSubscriptions",
            value: function (e) {
              this.__subscribed
                ? console.error(
                    "You may not add event mappings after an asset has subscribed to a broker"
                  )
                : (this.__subscriptions = this.__subscriptions.concat(e));
            },
          },
          {
            key: "unmount",
            value: function () {
              this.__broker = null;
            },
          },
          {
            key: "getInitialState",
            value: function () {
              return {};
            },
          },
          {
            key: "notify",
            value: function (e) {
              var t = this;
              requestAnimationFrame(function () {
                t.__broker && t.__broker.assetUpdate(t, e);
              });
            },
          },
          {
            key: "get",
            value: function (e) {
              return this.__state.get(e);
            },
          },
          {
            key: "getName",
            value: function () {
              return this.__name;
            },
          },
          {
            key: "getState",
            value: function () {
              var e = {},
                t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this.__state[Symbol.iterator]();
                  !(t = (r = a.next()).done);
                  t = !0
                ) {
                  var s = o()(r.value, 2),
                    c = s[0],
                    u = s[1];
                  e[c] = u;
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return e;
            },
          },
          {
            key: "lastUpdateFor",
            value: function (e) {
              return this.__timestamps.get(e);
            },
          },
          {
            key: "types",
            value: function () {
              return this.__types;
            },
          },
          {
            key: "context",
            value: function () {
              return this.__context;
            },
          },
          {
            key: "subscriptions",
            value: function () {
              return this.__subscriptions;
            },
          },
          {
            key: "getInitialSubscriptions",
            value: function () {
              return [];
            },
          },
          {
            key: "subscribe",
            value: function (e, t) {
              (this.__broker = e),
                (this.__context = String(t)),
                e.register(this, this.__context),
                (this.__subscribed = !0),
                this.stateDidUpdate();
            },
          },
          { key: "stateDidUpdate", value: function () {} },
          {
            key: "attachProvider",
            value: function (e, t) {
              this.addSubscriptions([
                w.asset(e, "__REMOTE__").rename("__REMOTE__", t),
              ]),
                (this.__types = this.__types.concat("__SUBBER_" + e)),
                (this.__availableProviders = this.__availableProviders.concat(
                  e
                ));
            },
          },
          {
            key: "setProviderRequest",
            value: function (e, t, n) {
              this.set("__REQUESTS_".concat(e), { key: t, meta: n });
            },
          },
        ]),
        e
      );
    })();
    (he.classTypes = []), (he.updateId = 0);
    var ve = (function (e) {
        function t(e, n) {
          var i;
          return (
            p()(this, t),
            (i = ee()(this, ne()(t).call(this, e, n))),
            e.component && (i.component = e.component),
            (i.__$element = e.$element),
            (i.__ticking = !1),
            i.render(),
            i
          );
        }
        return (
          oe()(t, e),
          X()(t, [
            {
              key: "stateDidUpdate",
              value: function () {
                this.render();
              },
            },
            {
              key: "$element",
              value: function () {
                return this.__$element;
              },
            },
            {
              key: "getState",
              value: function () {
                var e = re()(ne()(t.prototype), "getState", this).call(this);
                return l()({}, e, {
                  setIntoAsset: this.set,
                  mergeIntoAsset: this.merge,
                  wrapMessage: this.wrapMessage,
                  requestFromProvider: this.requestFromProvider,
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.component && this.$element();
                !this.__ticking &&
                  t &&
                  ((this.__ticking = !0),
                  (this.__rafID = requestAnimationFrame(function () {
                    (e.__ticking = !1),
                      Object(Y.render)(
                        Object(Y.h)(e.component, e.getState()),
                        e.$element(),
                        e.$element().firstElementChild
                      );
                  })));
              },
            },
            {
              key: "unmount",
              value: function () {
                re()(ne()(t.prototype), "unmount", this).call(this),
                  (this.__$element = null),
                  this.__ticking &&
                    this.__rafID &&
                    (cancelAnimationFrame(this.__rafID), (this.__ticking = !1));
              },
            },
          ]),
          t
        );
      })(he),
      me = "__REMOTE__",
      fe = (function (e) {
        function t() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (
            (p()(this, t),
            (e = ee()(this, ne()(t).call(this, n, i))).constructor === t)
          )
            throw "You must extend the abstract class Provider";
          return (e.__inProgress = new Map()), e;
        }
        return (
          oe()(t, e),
          X()(t, [
            {
              key: "getInitialState",
              value: function () {
                var e;
                return (
                  (e = {}), m()(e, me, new Map()), m()(e, "requests", []), e
                );
              },
            },
            {
              key: "getInitialSubscriptions",
              value: function () {
                var e = this.getName();
                return [
                  w
                    .type("__SUBBER_".concat(e), "__REQUESTS_".concat(e))
                    .mapTo(F, "requests"),
                ];
              },
            },
            {
              key: "stateDidUpdate",
              value: function () {
                var e = this;
                this.get("requests")
                  .filter(function (t) {
                    var n = t.key;
                    return !e.get(me).has(n);
                  })
                  .forEach(function (t) {
                    var n = t.key,
                      i = t.meta,
                      r = void 0 === i ? {} : i;
                    e.ensure(n, r);
                  });
              },
            },
            {
              key: "setRemote",
              value: function (e, t) {
                this.__inProgress.set(e, !1);
                var n = new Map(this.get(me)).set(e, t);
                return this.set(me, n);
              },
            },
            {
              key: "getRemote",
              value: function () {
                return this.get(me);
              },
            },
            {
              key: "ensure",
              value: function (e, t) {
                return (
                  !!e &&
                  (this.get(me).get(e) ||
                    this.checkProgress(e) ||
                    (this.__inProgress.set(e, !0),
                    this.request(l()({}, t, { key: e }))),
                  !0)
                );
              },
            },
            {
              key: "checkProgress",
              value: function (e) {
                return Boolean(this.__inProgress.get(e));
              },
            },
            {
              key: "getName",
              value: function () {
                return "__PROVIDER__".concat(
                  re()(ne()(t.prototype), "getName", this).call(this)
                );
              },
            },
            {
              key: "request",
              value: function () {
                0;
              },
            },
          ]),
          t
        );
      })(he);
    fe.classTypes = ["provider"];
    var pe = "__BEHAVIOUR_PROVIDER__",
      ge = (function (e) {
        function t(e) {
          var n;
          return (
            p()(this, t),
            ((n = ee()(
              this,
              ne()(t).call(this, { name: "bp" }, { requests: [] })
            )).__pendingDOMBindings = new Map()),
            n.subscribe(e, pe),
            n.listenForBehaviourFullfillments(e),
            n
          );
        }
        return (
          oe()(t, e),
          X()(t, [
            {
              key: "request",
              value: function (e) {
                var t = document.createElement("script");
                (t.type = "text/javascript"),
                  (t.src = e.src),
                  (t.async = !0),
                  document.body.appendChild(t);
              },
            },
            {
              key: "listenForBehaviourFullfillments",
              value: function (e) {
                var t = this;
                e.listenToAssetStream(
                  pe,
                  this.getName(),
                  "__REMOTE__",
                  function (n) {
                    return t.fulfillDOMBindings(e, n);
                  }
                );
              },
            },
            {
              key: "requestDOMBinding",
              value: function (e, t, n) {
                var i = { props: n.props, context: n.context, state: n.state };
                this.__pendingDOMBindings.has(t.name)
                  ? this.__pendingDOMBindings.get(t.name).push(i)
                  : this.__pendingDOMBindings.set(t.name, [i]),
                  this.fulfillDOMBindings(e, this.getRemote());
                var r = this.get("requests")
                    .filter(function (e) {
                      return e.key !== t.name;
                    })
                    .slice(),
                  a = { key: t.name, meta: { src: t.src } };
                r.push(a), this.set("requests", r);
              },
            },
            {
              key: "fulfillDOMBindings",
              value: function (e, t) {
                var n = this;
                if (t) {
                  var i = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var s,
                        c = function () {
                          var t = o()(s.value, 2),
                            i = t[0],
                            r = t[1],
                            a = n.__pendingDOMBindings.get(i);
                          a &&
                            (a.forEach(function (t) {
                              var n = t.props,
                                i = t.context,
                                a = t.state;
                              r(n, a, i).subscribe(e, i);
                            }),
                            n.__pendingDOMBindings.delete(i));
                        },
                        u = t[Symbol.iterator]();
                      !(i = (s = u.next()).done);
                      i = !0
                    )
                      c();
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      i || null == u.return || u.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                }
              },
            },
          ]),
          t
        );
      })(fe);
    n.d(t, "b", function () {
      return be;
    }),
      n.d(t, "d", function () {
        return we;
      }),
      n.d(t, "c", function () {
        return Oe;
      }),
      n.d(t, "a", function () {
        return he;
      });
    var _e = "__PUSHPOP_RT__";
    function ye() {
      if (!window[_e]) throw "Pushpop was not initialized";
      return window[_e];
    }
    function be() {
      return ye().broker;
    }
    function ke(e, t) {
      ye().behaviourProvider.setRemote(e, t);
    }
    function we(e, t, n, i) {
      ye().behaviourProvider.requestDOMBinding(be(), e, {
        props: n,
        context: String(t),
        state: i,
      });
    }
    function Oe() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      if (e[_e]) throw "Pushpop already initialized";
      var t = new G(z());
      return (
        (e[_e] = { broker: t, behaviourProvider: new ge(t) }),
        (e.__PUSHPOP__ = {
          Asset: he,
          Broker: G,
          combine: S,
          defaultStreams: z,
          DOMAsset: ve,
          flatCombine: j,
          OutlineSubscriptions: i,
          Preact: Y,
          Provider: fe,
          Reducers: r,
          Subscription: O,
          Subscriptions: w,
          registerBehaviour: ke,
          loadBehaviour: we,
        }),
        e
      );
    }
  },
  29: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return u;
      });
    var i = n(3),
      r = n(19),
      a = window.innerHeight,
      o = window.innerWidth;
    function s() {
      (a = window.innerHeight), (o = window.innerWidth);
    }
    function c() {
      return o;
    }
    function u() {
      return a;
    }
    Object(r.a)(s),
      window.addEventListener("resize", function () {
        return Object(i.a)(function () {
          return s();
        });
      });
  },
  3: function (e, t, n) {
    "use strict";
    var i = 0,
      r = window.requestAnimationFrame
        ? window.requestAnimationFrame
        : function (e) {
            var t = new Date().getTime(),
              n = Math.max(0, 16 - (t - i)),
              r = window.setTimeout(function () {
                e(t + n);
              }, n);
            return (i = t + n), (window.__raf_override = !0), r;
          };
    t.a = r;
  },
  31: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return f;
    });
    var i = n(5),
      r = n.n(i),
      a = n(0),
      o = n.n(a),
      s = n(7),
      c = n.n(s),
      u = n(1),
      l = n.n(u),
      d = n(2),
      h = n.n(d),
      v = n(23),
      m = (function () {
        function e() {
          l()(this, e);
        }
        return (
          h()(e, [
            {
              key: "setItem",
              value: function (e, t) {
                try {
                  this.__storage.setItem(e, t);
                } catch (e) {}
                return t;
              },
            },
            {
              key: "getItem",
              value: function (e) {
                try {
                  return this.__storage.getItem(e);
                } catch (e) {
                  return null;
                }
              },
            },
            {
              key: "getInt",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n = parseInt(this.getItem(e), 10);
                return isNaN(n) ? t : n;
              },
            },
            {
              key: "increment",
              value: function (e) {
                return this.setItem(e, this.getInt(e) + 1);
              },
            },
            {
              key: "getBool",
              value: function (e) {
                return "true" === this.getItem(e);
              },
            },
            {
              key: "getObject",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getItem(e);
                return n ? v.a.json(n, t) : t;
              },
            },
            {
              key: "getArray",
              value: function (e) {
                return this.getObject(e, []);
              },
            },
          ]),
          e
        );
      })(),
      f = (function (e) {
        function t() {
          var e;
          l()(this, t), (e = r()(this, o()(t).call(this)));
          try {
            e.__storage = window.localStorage;
          } catch (e) {
            console.error("LocalStorage is disabled");
          }
          return e;
        }
        return c()(t, e), t;
      })(m);
  },
  32: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return O;
    });
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(5),
      c = n.n(s),
      u = n(0),
      l = n.n(u),
      d = n(4),
      h = n.n(d),
      v = n(7),
      m = n.n(v),
      f = n(18),
      p = n(27),
      g = n(3),
      _ = n(29),
      y = n(11),
      b = n(34),
      k = "ui-in-view--animating",
      w = 800;
    var O = (function (e) {
      function t(e, n) {
        var i,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Object(p.b)(!0);
        return (
          r()(this, t),
          ((i = c()(this, l()(t).call(this, e))).viewCount = 0),
          (i.$container = n),
          (i.intersecting = !1),
          (i.intersectingFully = !1),
          (i.shouldObserve = a),
          (i.__onEnterStart = f.a),
          (i.__onEnterComplete = f.a),
          (i.__onLeaveStart = f.a),
          (i.__onLeaveComplete = f.a),
          (i.__onPercentageViewable = []),
          i
        );
      }
      return (
        m()(t, e),
        o()(t, [
          {
            key: "onEnterStart",
            value: function (e) {
              return (this.__onEnterStart = e), this;
            },
          },
          {
            key: "onEnterComplete",
            value: function (e) {
              return (this.__onEnterComplete = e), this;
            },
          },
          {
            key: "onLeaveStart",
            value: function (e) {
              return (this.__onLeaveStart = e), this;
            },
          },
          {
            key: "onLeaveComplete",
            value: function (e) {
              return (this.__onLeaveComplete = e), this;
            },
          },
          {
            key: "onPercentageViewable",
            value: function (e) {
              return this.__onPercentageViewable.push(e), this;
            },
          },
          {
            key: "getIntersection",
            value: function () {
              var e = this.rect(),
                t = Object(_.a)(),
                n = e.top < t && e.top > 0,
                i = e.bottom < t && e.bottom > 0;
              return {
                topIntersecting: n,
                bottomIntersecting: i,
                percentageViewable: (function (e, t, n, i) {
                  var r = n.bottom - n.top;
                  return e && t
                    ? 100
                    : e
                    ? Math.floor(((i - n.top) / r) * 100)
                    : t
                    ? Math.floor((n.bottom / r) * 100)
                    : 0;
                })(n, i, e, t),
              };
            },
          },
          {
            key: "getScreenDepth",
            value: function () {
              var e = this.rect(),
                t = Object(_.a)(),
                n = t - e.top,
                i = t + e.height,
                r = Math.floor((n / i) * 100);
              return r > 100 ? 100 : r < 0 ? 0 : r;
            },
          },
          {
            key: "mount",
            value: function () {
              var e = this;
              h()(l()(t.prototype), "mount", this).call(this),
                (this.scrollSubscriber = new b.a(this.$container, {
                  passive: !0,
                }).onScroll(function () {
                  if (e.shouldObserve()) {
                    var t,
                      n = e.intersecting,
                      i = e.intersectingFully,
                      r = e.getIntersection(),
                      a = r.topIntersecting,
                      o = r.bottomIntersecting,
                      s = r.percentageViewable,
                      c = e.getScreenDepth();
                    if (
                      ((e.intersecting = a || o),
                      (e.intersectingFully = a && o),
                      n !== e.intersecting ||
                        e.wasIntersectingFully !== e.intersectingFully)
                    )
                      !1 === n && !0 === e.intersecting && e.__onEnterStart(),
                        !1 === i &&
                          !0 === e.intersectingFully &&
                          (e.viewCount++,
                          e.$element.setAttribute(
                            "data-view-count",
                            e.viewCount
                          ),
                          e.$element.classList.add("ui-in-view"),
                          e.$element.classList.add(k),
                          (t = e.$element),
                          setTimeout(function () {
                            Object(g.a)(function () {
                              return t.classList.remove(k);
                            });
                          }, w),
                          e.__onEnterComplete()),
                        !0 === i &&
                          !1 === e.intersectingFully &&
                          e.__onLeaveStart(),
                        !0 === n &&
                          !1 === e.intersecting &&
                          (e.$element.classList.remove("ui-in-view"),
                          e.__onLeaveComplete()),
                        e.__onPercentageViewable.forEach(function (e) {
                          return e({ percentageViewable: s, depthPercent: c });
                        });
                  }
                }));
            },
          },
          {
            key: "unmount",
            value: function () {
              var e = this;
              h()(l()(t.prototype), "unmount", this).call(this),
                Object(g.a)(function () {
                  e.scrollSubscriber && e.scrollSubscriber.destroy();
                });
            },
          },
        ]),
        t
      );
    })(y.b);
  },
  34: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return m;
    });
    var i = n(8),
      r = n.n(i),
      a = n(1),
      o = n.n(a),
      s = n(2),
      c = n.n(s),
      u = n(18),
      l = n(3),
      d = n(9);
    function h(e) {
      return e === window
        ? Object(d.i)(e.scrollX, e.scrollY)
        : Object(d.i)(e.scrollLeft, e.scrollTop);
    }
    function v(e, t) {
      var n = t.y;
      return e === window ? e.scroll(0, n) : (e.scrollTop = n);
    }
    var m = (function () {
      function e(t) {
        var n = this,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o()(this, e),
          (this.handleScrollEvent = function (e) {
            n.ticking ||
              ((n.ticking = !0),
              Object(l.a)(function () {
                n.ticking = !1;
                var t = h(n.$el);
                (n.delta = Object(d.c)(t, n.position)),
                  (n.position = t),
                  n.onScrollCallback(e, n.position, n.delta);
              }));
          }),
          (this.$el = t),
          (this.ticking = !1),
          (this.options = r()({ passive: !1 }, i)),
          (this.onScrollCallback = u.a),
          (this.position = Object(d.g)()),
          (this.delta = Object(d.g)()),
          this.$el.addEventListener("scroll", this.handleScrollEvent, {
            passive: this.options.passive,
          });
      }
      return (
        c()(e, [
          {
            key: "destroy",
            value: function () {
              this.$el.removeEventListener("scroll", this.handleScrollEvent, {
                passive: this.options.passive,
              });
            },
          },
          {
            key: "onScroll",
            value: function (e) {
              return (this.onScrollCallback = e), this;
            },
          },
          {
            key: "setPosition",
            value: function (e) {
              v(this.$el, e);
            },
          },
          {
            key: "setPositionRelative",
            value: function (e) {
              var t = h(this.$el);
              v(this.$el, Object(d.a)(t, e));
            },
          },
          {
            key: "getPosition",
            value: function () {
              return h(this.$el);
            },
          },
        ]),
        e
      );
    })();
  },
  35: function (e, t, n) {
    "use strict";
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(49),
      c = n(50),
      u = n(48),
      l = /matrix(?:(3d)\(-{0,1}\d+\.?\d*(?:, -{0,1}\d+\.?\d*)*(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*)), -{0,1}\d+\.?\d*\)|\(-{0,1}\d+\.?\d*(?:, -{0,1}\d+\.?\d*)*(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*))\))/;
    function d(e, t) {
      e &&
        (e.style.transform = t
          ? "translateX("
              .concat(t.x, "px) translateY(")
              .concat(t.y, "px) translateZ(0)")
          : null);
    }
    var h = n(18),
      v = n(27);
    var m = n(9),
      f = "up",
      p = "down",
      g = "left",
      _ = "right",
      y = null;
    n.d(t, "a", function () {
      return k;
    }),
      n.d(t, "b", function () {
        return O;
      }),
      n.d(t, "c", function () {
        return S;
      });
    var b = [];
    var k = (function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r()(this, e);
        var i = n.draggableAxis,
          a = n.lockAxis,
          o = void 0 === a || a,
          s = n.animationTiming,
          c = void 0 === s ? 300 : s,
          l = n.momentum,
          d = void 0 === l ? 50 : l,
          f = n.draggableElement,
          p = n.preventOthers,
          g = void 0 !== p && p;
        (this.$element = t),
          this.$draggable,
          (this.draggableAxis = i),
          (this.lockAxis = o),
          (this.onPressCallback = h.a),
          (this.onMoveCallback = h.a),
          (this.onMoveEndCallback = h.a),
          (this.imposeBoundsCallback = v.a),
          (this.onBoundsCallback = v.a),
          (this.roundValueCallback = v.a),
          (this.onMoveEndAnimation = null),
          (this.active = !0),
          (this.preventOthers = g),
          (this.draggablePosition = Object(m.g)()),
          (this.movingDirection = y),
          (this.animationTiming = c),
          (this.momentum = function (e) {
            if ("function" == typeof e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                n[i - 1] = arguments[i];
              return e.apply(void 0, n);
            }
            return e;
          }.bind(null, d)),
          (this.doImposeBounds = this.doImposeBounds.bind(this)),
          (this.handleOnPress = this.handleOnPress.bind(this)),
          (this.handleOnMove = this.handleOnMove.bind(this)),
          (this.handleOnRelease = this.handleOnRelease.bind(this)),
          f && this.setDraggable(f),
          (this.subscriber = new u.a(this.$element)
            .onPress(this.handleOnPress)
            .onMove(this.handleOnMove)
            .onRelease(this.handleOnRelease));
      }
      return (
        o()(e, [
          {
            key: "isDraggable",
            value: function () {
              return (
                this.$draggable && this.active && !this.doAnyOthersPrevent()
              );
            },
          },
          {
            key: "doAnyOthersPrevent",
            value: function () {
              var e = this;
              return (
                b.filter(function (t) {
                  return t.preventOthers && t !== e;
                }).length > 0
              );
            },
          },
          {
            key: "canMoveHorizontally",
            value: function () {
              var e = this.draggableAxis.horizontally,
                t = this.movingDirection === g || this.movingDirection === _;
              return this.lockAxis ? e && t : e;
            },
          },
          {
            key: "canMoveVertically",
            value: function () {
              var e = this.draggableAxis.vertically,
                t = this.movingDirection === f || this.movingDirection === p;
              return this.lockAxis ? e && t : e;
            },
          },
          {
            key: "addActiveDragger",
            value: function (e) {
              b.indexOf(e) < 0 && b.push(e);
            },
          },
          {
            key: "removeActiveDragger",
            value: function (e) {
              b.indexOf(e) > -1 && b.splice(b.indexOf(e), 1);
            },
          },
          {
            key: "handleOnPress",
            value: function (e) {
              if (!this.isDraggable()) return null;
              this.$draggable.classList.add("ui-draggable-active"),
                (this.draggablePosition = (function (e) {
                  if (!e) return [];
                  var t = [0, 0, 0],
                    n =
                      window
                        .getComputedStyle(e)
                        .getPropertyValue("transform") || "",
                    i = n ? n.match(l) : null;
                  if (i) {
                    for (var r = 0; r < i.length; r++)
                      i[r] = parseInt(i[r], 10);
                    "3d" === i[1]
                      ? (t = i.slice(2, 5))
                      : (i.push(0), (t = i.slice(5, 8)));
                  }
                  return { x: t[0], y: t[1], z: t[2] };
                })(this.$draggable));
              var t = Object(m.b)(this.draggablePosition);
              Object(m.d)(t, this.roundValueCallback(t)) &&
                ((this.movingDirection = y), this.addActiveDragger(this)),
                this.onPressCallback(e, t),
                this.onMoveEndAnimation && this.onMoveEndAnimation.stop();
            },
          },
          {
            key: "handleOnMove",
            value: function (e, t, n) {
              if (!this.isDraggable()) return null;
              var i, r, a;
              this.movingDirection === y &&
                (this.movingDirection =
                  ((r = (i = n).x),
                  (a = i.y),
                  Math.abs(r) > Math.abs(a) ? (r > 0 ? g : _) : a > 0 ? f : p));
              var o = !1,
                s = !1,
                c = Object(m.b)(this.draggablePosition);
              this.canMoveHorizontally() && ((c.x += t.x), (o = !0)),
                this.canMoveVertically() && ((c.y += t.y), (s = !0));
              var u = this.doImposeBounds(c, e),
                l = Object(m.e)(u, c);
              (c = u),
                l ||
                  (!o && !s) ||
                  (e.preventDefault(), this.onMoveCallback(e, c)),
                this.setPosition(c);
            },
          },
          {
            key: "handleOnRelease",
            value: function (e, t, n, i) {
              if (!this.isDraggable()) return null;
              this.$draggable.classList.remove("ui-draggable-active"),
                this.removeActiveDragger(this);
              var r = Object(m.b)(this.draggablePosition);
              Object(m.e)(r, this.roundValueCallback(r))
                ? (this.canMoveHorizontally() &&
                    (r.x += t.x * Math.abs(i.x * this.momentum())),
                  this.canMoveVertically() &&
                    (r.y += t.y * Math.abs(i.y * this.momentum())),
                  (this.onMoveEndAnimation = this.animateToBounds(r, e)))
                : this.movingDirection &&
                  (this.onMoveCallback(e, r, this.movingDirection),
                  this.onMoveEndCallback(e, r, n));
            },
          },
          {
            key: "animateToBounds",
            value: function (e, t) {
              var n = this,
                i = (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function (e) {
                    return t.reduce(function (e, t) {
                      return t(e);
                    }, e);
                  };
                })(
                  this.doImposeBounds,
                  this.roundValueCallback
                )(e),
                r = Object(m.b)(this.draggablePosition),
                a = this.animationTiming,
                o = Object(m.c)(r, i),
                u = new c.Easer().using("out-quart"),
                l = new s.AnimationTimer().duration(a).on(
                  "tick",
                  u(function (e) {
                    var a = Object(m.c)(r, Object(m.h)(o, e));
                    n.setPosition(a),
                      1 === e &&
                        ((n.onMoveEndAnimation = null),
                        n.onMoveCallback(t, i),
                        n.onMoveEndCallback(t, i));
                  })
                );
              return l.play(), l;
            },
          },
          {
            key: "doImposeBounds",
            value: function (e, t) {
              var n = this.imposeBoundsCallback(e, this.movingDirection);
              return Object(m.e)(n, e) && this.onBoundsCallback(t, e), n;
            },
          },
          {
            key: "setDraggable",
            value: function (e) {
              return (
                this.$draggable &&
                  (this.$draggable.classList.remove("ui-draggable"),
                  d(this.$draggable)),
                (this.$draggable = e),
                this.$draggable.classList.add("ui-draggable"),
                this
              );
            },
          },
          {
            key: "setPosition",
            value: function (e) {
              return (this.draggablePosition = e), d(this.$draggable, e), this;
            },
          },
          {
            key: "resetPosition",
            value: function () {
              var e = Object(m.g)();
              return (this.draggablePosition = e), d(this.$draggable, e), this;
            },
          },
          {
            key: "getPosition",
            value: function () {
              return this.draggablePosition;
            },
          },
          {
            key: "enable",
            value: function () {
              this.active = !0;
            },
          },
          {
            key: "disable",
            value: function () {
              this.active = !1;
            },
          },
          {
            key: "destroy",
            value: function () {
              this.subscriber && this.subscriber.destroy();
            },
          },
          {
            key: "setDirection",
            value: function (e) {
              return (this.draggableAxis = e), this;
            },
          },
          {
            key: "imposeBounds",
            value: function (e) {
              return (this.imposeBoundsCallback = e), this;
            },
          },
          {
            key: "roundValue",
            value: function (e) {
              return (this.roundValueCallback = e), this;
            },
          },
          {
            key: "onPress",
            value: function (e) {
              return (this.onPressCallback = e), this;
            },
          },
          {
            key: "onMove",
            value: function (e) {
              return (this.onMoveCallback = e), this;
            },
          },
          {
            key: "onMoveEnd",
            value: function (e) {
              return (this.onMoveEndCallback = e), this;
            },
          },
          {
            key: "onBounds",
            value: function (e) {
              return (this.onBoundsCallback = e), this;
            },
          },
        ]),
        e
      );
    })();
    function w() {
      return {
        horizontally:
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        vertically:
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      };
    }
    function O() {
      return w(!0);
    }
    function S() {
      return w(!1, !0);
    }
  },
  36: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n.d(t, "b", function () {
        return u;
      });
    var i = n(12),
      r = n(19),
      a = n(3),
      o = 1e3,
      s = 3e3;
    function c() {
      var e;
      function t() {
        Object(a.a)(function () {
          var t = Object(i.a)(window.innerHeight);
          t !== e && ((e = t), Object(i.d)(document.body, "window-height", e));
        });
      }
      Object(r.a)(t),
        window.addEventListener("resize", function () {
          return Object(a.a)(t);
        }),
        window.addEventListener("orientationchange", function () {
          setTimeout(t, 100);
        }),
        t(),
        setInterval(t, o);
    }
    function u() {
      function e() {
        var e = document.body.clientWidth,
          t = document.querySelector("path-element").clientWidth,
          n = Object(i.a)(e - t);
        Object(a.a)(function () {
          return Object(i.d)(document.body, "window-width-offset", n);
        });
      }
      Object(r.a)(e), e(), setTimeout(e, s);
    }
  },
  38: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(13),
      c = n.n(s),
      u = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          r()(this, e),
            (this.__cache = []),
            (this.__listener = null),
            (this.__stream = null),
            (this.__stream = c.a.create(this).startWith(t));
        }
        return (
          o()(e, [
            {
              key: "stream",
              value: function () {
                return this.__stream;
              },
            },
            {
              key: "modifyStream",
              value: function (e) {
                return (this.__stream = e(this.__stream)), this;
              },
            },
            {
              key: "start",
              value: function (e) {
                var t = this;
                (this.__listener = e),
                  this.__cache.forEach(function (e) {
                    return t.__listener.next(e);
                  }),
                  (this.__cache = []);
              },
            },
            {
              key: "next",
              value: function (e) {
                return (
                  this.__listener
                    ? this.__listener.next(e)
                    : this.__cache.push(e),
                  this
                );
              },
            },
            {
              key: "stop",
              value: function () {
                (this.__cache = []), (this.__listener = null);
              },
            },
          ]),
          e
        );
      })();
  },
  39: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return $;
    });
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(5),
      c = n.n(s),
      u = n(21),
      l = n.n(u),
      d = n(0),
      h = n.n(d),
      v = n(4),
      m = n.n(v),
      f = n(7),
      p = n.n(f),
      g = n(45),
      _ = n.n(g),
      y = n(11),
      b = n(20),
      k = n(22),
      w = n(3),
      O = n(10),
      S = "menu__outmojis__set--animate_in",
      j = "menu__outmojis__set--animate_out";
    function P(e) {
      var t = e.image,
        n = void 0 === t ? "" : t,
        i = e.label,
        r = void 0 === i ? "" : i;
      return 0 === n.length
        ? ""
        : '<div class="menu__outmoji"><img src="'
            .concat(n, '" alt="')
            .concat(r, '" /></div>');
    }
    var $ = (function (e) {
      function t(e, n) {
        var i,
          a = n.app;
        return (
          r()(this, t),
          ((i = c()(this, h()(t).call(this, e))).$app = a),
          (i.$openButton = i.$(".navigation__menu__item--hamburger")),
          (i.$closeButton = i.$(".menu__close-button")),
          (i.$outmojiSets = i.$$(".menu__outmojis__set")),
          (i.outmojiSetIndex = 0),
          (i.openMenu = i.openMenu.bind(l()(i))),
          (i.closeMenu = i.closeMenu.bind(l()(i))),
          (i.detectClickout = i.detectClickout.bind(l()(i))),
          (i.injectOutmojis = i.injectOutmojis.bind(l()(i))),
          (i.outmojiClick = i.outmojiClick.bind(l()(i))),
          (i.nextSetTimeout = null),
          (i.open = !1),
          i
        );
      }
      return (
        p()(t, e),
        o()(t, [
          {
            key: "openMenu",
            value: function (e) {
              var t = this;
              e.preventDefault(),
                !0 !== this.open &&
                  Object(w.a)(function () {
                    (t.open = !0),
                      t.$app.addEventListener("click", t.detectClickout),
                      t.$app.addEventListener("click", t.outmojiClick),
                      O.a.track("menu_toggle", { action: "open" }),
                      t.$app.classList.add("app--menu-open"),
                      t.loadOutmojis();
                  });
            },
          },
          {
            key: "closeMenu",
            value: function (e) {
              var t = this;
              e.preventDefault(),
                !1 !== this.open &&
                  Object(w.a)(function () {
                    (t.open = !1),
                      t.$app.removeEventListener("click", t.detectClickout),
                      t.$app.removeEventListener("click", t.outmojiClick),
                      O.a.track("menu_toggle", { action: "close" }),
                      clearTimeout(t.nextSetTimeout),
                      t.$app.classList.remove("app--menu-open"),
                      t.removeOutmojis();
                  });
            },
          },
          {
            key: "detectClickout",
            value: function (e) {
              Object(b.f)(e.target, ".menu") || this.closeMenu(e);
            },
          },
          {
            key: "injectOutmojis",
            value: function (e) {
              var t = this,
                n = e.outmojis;
              if (!1 !== this.open) {
                var i = n.map(P).join(""),
                  r = this.outmojiSetIndex % 2,
                  a = (this.outmojiSetIndex + 1) % 2,
                  o = this.$outmojiSets[r],
                  s = this.$outmojiSets[a];
                Object(w.a)(function () {
                  !(function (e) {
                    e.classList.remove(S, j), (e.innerHTML = "");
                  })(o),
                    o.classList.add(S),
                    s.classList.add(j),
                    (o.innerHTML = i),
                    t.outmojiSetIndex++,
                    (t.nextSetTimeout = setTimeout(function () {
                      !1 !== t.open && t.loadOutmojis();
                    }, 4e3));
                });
              }
            },
          },
          {
            key: "removeOutmojis",
            value: function () {
              var e = this.$$(".menu__outmojis__set");
              Object(w.a)(function () {
                e.forEach(function (e) {
                  return (e.innerHTML = "");
                });
              });
            },
          },
          {
            key: "loadOutmojis",
            value: function () {
              Object(k.a)("/api/outmoji?limit=4")
                .then(function (e) {
                  return 200 !== e.status ? Promise.reject(e) : e.json();
                })
                .then(this.loadImages)
                .then(this.injectOutmojis);
            },
          },
          {
            key: "loadImages",
            value: function (e) {
              var t = e.outmojis,
                n = t.map(function (e) {
                  return e.image;
                }),
                i = { outmojis: t };
              return _()(n).then(function () {
                return i;
              });
            },
          },
          {
            key: "outmojiClick",
            value: function (e) {
              if (Object(b.f)(e.target, ".menu__outmoji")) {
                var t = Object(b.a)(e.target, ".menu__outmoji");
                Object(w.a)(function () {
                  t.classList.remove("ui-clicked"),
                    Object(w.a)(function () {
                      t.classList.add("ui-clicked");
                    });
                });
              }
            },
          },
          {
            key: "mount",
            value: function () {
              m()(h()(t.prototype), "mount", this).call(this),
                this.$openButton.addEventListener("click", this.openMenu),
                this.$closeButton.addEventListener("click", this.closeMenu);
            },
          },
          {
            key: "unmount",
            value: function () {
              m()(h()(t.prototype), "unmount", this).call(this),
                this.$openButton.removeEventListener("click", this.openMenu),
                this.$closeButton.removeEventListener("click", this.closeMenu),
                this.$app.removeEventListener("click", this.detectClickout);
            },
          },
        ]),
        t
      );
    })(y.b);
  },
  40: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    function i(e) {
      e;
    }
  },
  41: function (e, t, n) {
    "use strict";
    function i(e, t, n) {
      var i;
      return function () {
        var r = this,
          a = arguments,
          o = n && !i;
        clearTimeout(i),
          (i = setTimeout(function () {
            (i = null), n || e.apply(r, a);
          }, t)),
          o && e.apply(r, a);
      };
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  42: function (e, t, n) {
    "use strict";
    function i() {
      return (function (e) {
        if ("" === e) return {};
        for (var t = {}, n = 0; n < e.length; ++n) {
          var i = e[n].split("=", 2);
          1 === i.length
            ? (t[i[0]] = "")
            : (t[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
        }
        return t;
      })(
        (arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : window.location.search.substr(1)
        )
          .split("&")
          .filter(function (e) {
            return e.length > 0;
          })
      );
    }
    function r() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Object.keys(e)
        .reduce(function (t, n) {
          var i = e[n];
          if (null == i) return t;
          var r = Array.isArray(i)
            ? i.map(encodeURIComponent).join(",")
            : encodeURIComponent(i);
          return t.push(n + "=" + r), t;
        }, [])
        .join("&");
    }
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return r;
      });
  },
  48: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return f;
    });
    var i = n(8),
      r = n.n(i),
      a = n(1),
      o = n.n(a),
      s = n(2),
      c = n.n(s),
      u = n(24),
      l = n(18),
      d = n(9),
      h = 3;
    function v(e) {
      var t = e.x,
        n = e.y;
      return Math.abs(t) < h && Math.abs(n) < h;
    }
    function m(e) {
      var t = e.touches ? e.touches[0] : e;
      return Object(d.i)(t.pageX, t.pageY);
    }
    var f = (function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o()(this, e),
          (this.$el = t),
          (this.options = r()({ passive: !1 }, n)),
          (this.onPressCallback = l.a),
          (this.onReleaseCallback = l.a),
          (this.onClickCallback = l.a),
          (this.onMoveCallback = l.a),
          (this.onMoveEndCallback = l.a),
          (this.isDragging = !1),
          (this.time = null),
          (this.timeDelta = null),
          (this.pointerPosition = Object(d.g)()),
          (this.moveDelta = Object(d.g)()),
          (this.fullDelta = Object(d.g)()),
          (this.handleClick = this.handleClick.bind(this)),
          (this.handlePointerDown = this.handlePointerDown.bind(this)),
          (this.handlePointerUp = this.handlePointerUp.bind(this)),
          (this.handlePointerMove = this.handlePointerMove.bind(this)),
          this.init();
      }
      return (
        c()(e, [
          {
            key: "init",
            value: function () {
              u.b
                ? (this.$el.addEventListener(
                    "touchstart",
                    this.handlePointerDown,
                    { passive: this.options.passive }
                  ),
                  window.addEventListener("touchend", this.handlePointerUp),
                  window.addEventListener("touchmove", this.handlePointerMove, {
                    passive: this.options.passive,
                  }))
                : (this.$el.addEventListener(
                    "mousedown",
                    this.handlePointerDown
                  ),
                  this.$el.addEventListener("click", this.handleClick),
                  window.addEventListener("mouseup", this.handlePointerUp),
                  window.addEventListener("mousemove", this.handlePointerMove));
            },
          },
          {
            key: "destroy",
            value: function () {
              u.b
                ? (this.$el.removeEventListener(
                    "touchstart",
                    this.handlePointerDown,
                    { passive: this.options.passive }
                  ),
                  window.removeEventListener("touchend", this.handlePointerUp),
                  window.removeEventListener(
                    "touchmove",
                    this.handlePointerMove,
                    { passive: this.options.passive }
                  ))
                : (this.$el.removeEventListener(
                    "mousedown",
                    this.handlePointerDown
                  ),
                  this.$el.removeEventListener("click", this.handleClick),
                  window.removeEventListener("mouseup", this.handlePointerUp),
                  window.removeEventListener(
                    "mousemove",
                    this.handlePointerMove
                  ));
            },
          },
          {
            key: "handleClick",
            value: function (e) {
              !v(this.fullDelta) && e.preventDefault();
            },
          },
          {
            key: "handlePointerDown",
            value: function (e) {
              (this.isDragging = !0),
                (this.pointerPosition = m(e)),
                (this.fullDelta = Object(d.g)()),
                (this.time = Date.now()),
                this.onPressCallback(e);
            },
          },
          {
            key: "handlePointerUp",
            value: function (e) {
              if (!1 !== this.isDragging) {
                this.isDragging = !1;
                var t = !v(this.fullDelta),
                  n = t
                    ? Object(d.j)(this.moveDelta, this.timeDelta)
                    : Object(d.g)();
                t
                  ? this.onMoveEndCallback(e, this.moveDelta, this.fullDelta, n)
                  : this.onClickCallback(e),
                  this.onReleaseCallback(e, this.moveDelta, this.fullDelta, n);
              }
            },
          },
          {
            key: "handlePointerMove",
            value: function (e) {
              if (!1 !== this.isDragging) {
                var t = m(e);
                (this.moveDelta = Object(d.c)(t, this.pointerPosition)),
                  (this.fullDelta = Object(d.a)(
                    this.fullDelta,
                    this.moveDelta
                  )),
                  (this.pointerPosition = t);
                var n = Date.now();
                (this.timeDelta = n - this.time),
                  (this.time = n),
                  this.onMoveCallback(e, this.moveDelta, this.fullDelta);
              }
            },
          },
          {
            key: "onPress",
            value: function (e) {
              return (this.onPressCallback = e), this;
            },
          },
          {
            key: "onRelease",
            value: function (e) {
              return (this.onReleaseCallback = e), this;
            },
          },
          {
            key: "onClick",
            value: function (e) {
              return (this.onClickCallback = e), this;
            },
          },
          {
            key: "onMove",
            value: function (e) {
              return (this.onMoveCallback = e), this;
            },
          },
          {
            key: "onMoveEnd",
            value: function (e) {
              return (this.onMoveEndCallback = e), this;
            },
          },
        ]),
        e
      );
    })();
  },
  54: function (e, t, n) {
    "use strict";
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(5),
      c = n.n(s),
      u = n(0),
      l = n.n(u),
      d = n(4),
      h = n.n(d),
      v = n(7),
      m = n.n(v),
      f = n(11),
      p = n(35),
      g = n(9);
    var _ = {
        segment: function (e, t, n) {
          var i = t.left,
            r = t.right,
            a = e.length,
            o = Math.max(n - i, 0),
            s = Math.min(n + r + 1, a);
          return e.slice(o, s);
        },
        cycledSegment: function (e, t, n) {
          for (
            var i = t.left,
              r = i + t.right + 1,
              a = e.length,
              o = n - i < 0 ? a + (n - i) : n - i,
              s = Math.min(r, a),
              c = o,
              u = [],
              l = 0;
            l < s;

          )
            u.push(e[c++]), l++, c === a && (c = 0);
          return u;
        },
        wrapIndex: function (e, t) {
          return t >= e ? 0 : t < 0 ? e - 1 : t;
        },
      },
      y = n(10);
    n.d(t, "a", function () {
      return b;
    });
    var b = (function (e) {
      function t(e) {
        var n,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r()(this, t),
          ((n = c()(this, l()(t).call(this, e))).onClick = function (e) {
            if (n.isDisplayClick(e)) {
              var t = n.options,
                i = t.campaign_id,
                r = t.creative_id;
              y.a.track("display_click", { campaign_id: i, creative_id: r });
            }
          }),
          (n.currentIndex = 0);
        var a = n.$$(".card-stack__element"),
          o = n.$$(".product-stack__element");
        return (
          (n.$elements = a.length > 0 ? a : o),
          (n.dragger = null),
          (n.options = i),
          n
        );
      }
      return (
        m()(t, e),
        o()(t, [
          {
            key: "isDisplay",
            value: function () {
              return this.options.isDisplay;
            },
          },
          {
            key: "isStack",
            value: function () {
              return "stack" === this.$element.getAttribute("data-type");
            },
          },
          {
            key: "isCardicle",
            value: function () {
              return "cardicle" === this.$element.getAttribute("data-type");
            },
          },
          {
            key: "fireEngage",
            value: function () {
              if (this.isDisplay()) {
                var e = this.options,
                  t = e.campaign_id,
                  n = e.creative_id;
                return y.a.track("display_engage", {
                  interaction_type: "swipe",
                  campaign_id: t,
                  creative_id: n,
                });
              }
              return this.isStack()
                ? y.a.track("degraded_stack_engage")
                : this.isCardicle()
                ? y.a.track("degraded_cardicle_engage")
                : void 0;
            },
          },
          {
            key: "initDragger",
            value: function () {
              var e = this;
              return new p.a(this.$element, {
                draggableAxis: Object(p.b)(),
                animationTiming: 100,
                preventOthers: !0,
              })
                .roundValue(function (t) {
                  var n = t.x,
                    i = t.y,
                    r = e.rect().width,
                    a = Math.floor((n + r / 2) / r);
                  return Object(g.i)(a * r, i);
                })
                .imposeBounds(function (t) {
                  var n = t.x,
                    i = t.y,
                    r = e.rect().width;
                  return (
                    (n = Math.min(n, r)),
                    (n = Math.max(n, -r)),
                    Object(g.i)(n, i)
                  );
                })
                .onMoveEnd(function (t, n) {
                  Object(g.d)(n, Object(g.g)()) ||
                    (e.setCurrentElement(e.currentIndex + 1), e.fireEngage());
                });
            },
          },
          {
            key: "setDraggerElement",
            value: function (e) {
              this.dragger && this.dragger.setDraggable(this.$elements[e]);
            },
          },
          {
            key: "setCurrentElement",
            value: function (e) {
              var t = this.$elements,
                n = t.length;
              this.currentIndex = _.wrapIndex(n, e);
              var i = _.cycledSegment(
                t,
                { left: 0, right: n - 1 },
                this.currentIndex
              );
              Array.from(i).forEach(function (e, t) {
                e.setAttribute("data-index", t);
              }),
                this.setDraggerElement(this.currentIndex);
            },
          },
          {
            key: "isDisplayClick",
            value: function (e) {
              return (
                !!this.isDisplay() && e.target.matches("img.display-target")
              );
            },
          },
          {
            key: "mount",
            value: function () {
              h()(l()(t.prototype), "mount", this).call(this),
                (this.dragger = this.initDragger()),
                this.setCurrentElement(this.currentIndex),
                this.$element.addEventListener("click", this.onClick);
            },
          },
          {
            key: "unmount",
            value: function () {
              h()(l()(t.prototype), "unmount", this).call(this),
                this.$element.removeEventListener("click", this.onClick),
                this.dragger && this.dragger.destroy();
            },
          },
        ]),
        t
      );
    })(f.b);
  },
  55: function (e, t, n) {
    "use strict";
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(5),
      c = n.n(s),
      u = n(0),
      l = n.n(u),
      d = n(4),
      h = n.n(d),
      v = n(7),
      m = n.n(v),
      f = n(11),
      p = n(9);
    var g = n(3),
      _ = n(10);
    n.d(t, "a", function () {
      return y;
    });
    var y = (function (e) {
      function t(e) {
        var n,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          r()(this, t),
          ((n = c()(this, l()(t).call(this, e))).onMouseEnter = function () {
            var e = n.options,
              t = e.campaign_id,
              i = e.creative_id;
            _.a.track("display_engage", {
              interaction_type: "hover",
              campaign_id: t,
              creative_id: i,
            });
          }),
          (n.onMouseExit = function () {
            n.setPosition(Object(p.g)());
          }),
          (n.onClick = function (e) {
            if (n.isDisplayClick(e)) {
              var t = n.options,
                i = t.campaign_id,
                r = t.creative_id;
              _.a.track("display_click", { campaign_id: i, creative_id: r });
            }
            n.isPaginationClick(e) && n.paginateFromClickEvent(e);
          }),
          (n.onScroll = function () {
            n.setPositionClassNames();
          }),
          (n.$elements = n.$$(".card-stack__element")),
          (n.options = i),
          n
        );
      }
      return (
        m()(t, e),
        o()(t, [
          {
            key: "isDisplay",
            value: function () {
              return this.options.isDisplay;
            },
          },
          {
            key: "isDisplayClick",
            value: function (e) {
              return (
                !!this.isDisplay() && e.target.matches("img.display-target")
              );
            },
          },
          {
            key: "isPaginationClick",
            value: function (e) {
              return e.target.matches(".card-stack__pagination-button");
            },
          },
          {
            key: "paginateFromClickEvent",
            value: function (e) {
              var t,
                n,
                i = e.target.getAttribute("data-direction"),
                r =
                  ((t = this.$elements[0]),
                  (n = window.getComputedStyle(t)),
                  t.clientWidth +
                    parseInt(n.getPropertyValue("margin-left"), 10) +
                    parseInt(n.getPropertyValue("margin-right"), 10)),
                a = this.getPosition();
              "next" === i
                ? this.setPosition(Object(p.a)(a, Object(p.i)(r, 0)))
                : this.setPosition(Object(p.a)(a, Object(p.i)(-1 * r, 0)));
            },
          },
          {
            key: "setPositionClassNames",
            value: function () {
              var e = this;
              Object(g.a)(function () {
                var t = e.$element,
                  n = t.scrollWidth,
                  i = t.scrollLeft,
                  r = 0 === i;
                n - i === t.clientWidth
                  ? e.$element.classList.add("ui-scroll-end")
                  : e.$element.classList.remove("ui-scroll-end"),
                  r
                    ? e.$element.classList.add("ui-scroll-start")
                    : e.$element.classList.remove("ui-scroll-start");
              });
            },
          },
          {
            key: "setPosition",
            value: function (e) {
              var t = this;
              (this.position = e),
                Object(g.a)(function () {
                  t.$element.scrollLeft = e.x;
                });
            },
          },
          {
            key: "getPosition",
            value: function () {
              return Object(p.i)(
                this.$element.scrollLeft,
                this.$element.scrollTop
              );
            },
          },
          {
            key: "mount",
            value: function () {
              var e = this;
              h()(l()(t.prototype), "mount", this).call(this),
                this.$element.addEventListener("mouseleave", this.onMouseExit),
                this.$element.addEventListener("scroll", this.onScroll),
                this.$element.addEventListener("click", this.onClick),
                this.isDisplay() &&
                  this.$element.addEventListener(
                    "mouseenter",
                    this.onMouseEnter
                  ),
                this.setPositionClassNames(),
                Object(g.a)(function () {
                  return e.$element.classList.add("ui-fan-stack");
                });
            },
          },
          {
            key: "unmount",
            value: function () {
              var e = this;
              h()(l()(t.prototype), "unmount", this).call(this),
                this.$element.removeEventListener(
                  "mouseleave",
                  this.onMouseExit
                ),
                this.$element.removeEventListener("scroll", this.onScroll),
                this.$element.removeEventListener("click", this.onClick),
                this.isDisplay() &&
                  this.$element.removeEventListener(
                    "mouseenter",
                    this.onMouseEnter
                  ),
                Object(g.a)(function () {
                  e.$element.classList.remove("ui-fan-stack");
                });
            },
          },
        ]),
        t
      );
    })(f.b);
  },
  56: function (e, t, n) {
    "use strict";
    var i = n(8),
      r = n.n(i),
      a = n(1),
      o = n.n(a),
      s = n(2),
      c = n.n(s),
      u = n(59),
      l = n(25),
      d = n.n(l),
      h = n(16),
      v = n.n(h),
      m = n(31);
    function f(e, t) {
      var n = Date.now();
      return e.reduce(function (e, i) {
        var r = v()(i, 2),
          a = r[0],
          o = r[1],
          s = parseInt(o, 10);
        return n - s < t && e.push(p(a, s)), e;
      }, []);
    }
    function p(e) {
      return [
        e,
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Date.now(),
      ];
    }
    var g = (function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o()(this, e);
        var i = n.limit,
          r = n.expirationMinutes,
          a = void 0 === r ? 5 : r;
        if (!t)
          throw "".concat(this.constructor.name, " requires a contentType");
        (this.__key = "outline-tracked-".concat(t)),
          (this.__storage = new m.a()),
          (this.__expirationMillis = 60 * a * 1e3),
          (this.__limit = i),
          (this.__viewed = this.__getPersisted()),
          (this.__staged = []);
      }
      return (
        c()(e, [
          {
            key: "viewed",
            value: function (e) {
              var t = this;
              this.__viewed.push(p(e)),
                setTimeout(function () {
                  return t.__persist();
                }, 0);
            },
          },
          {
            key: "staged",
            value: function (e) {
              this.__staged.push(p(e));
            },
          },
          {
            key: "getTracked",
            value: function () {
              var e = f(this.__viewed, this.__expirationMillis),
                t = this.__staged;
              return this.__applyLimit([].concat(d()(e), d()(t)));
            },
          },
          {
            key: "__applyLimit",
            value: function (e) {
              var t = e
                .map(function (e) {
                  return { key: e[0], time: e[1] };
                })
                .sort(function (e, t) {
                  return t.time - e.time;
                })
                .map(function (e) {
                  return e.key;
                });
              return this.__limit ? t.slice(0, this.__limit) : t;
            },
          },
          {
            key: "__persist",
            value: function () {
              var e = JSON.stringify(this.__viewed);
              this.__storage.setItem(this.__key, e);
            },
          },
          {
            key: "__getPersisted",
            value: function () {
              return f(
                this.__storage.getArray(this.__key),
                this.__expirationMillis
              );
            },
          },
        ]),
        e
      );
    })();
    n.d(t, "a", function () {
      return _;
    });
    var _ = (function () {
      function e() {
        var t = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o()(this, e),
          (this.softTrackResponse = function (e) {
            return (
              e.path.forEach(function (e) {
                switch (e.content_type) {
                  case "post":
                    t.__postTracker.staged(e.id);
                }
              }),
              e
            );
          }),
          (this.log = function (e) {
            e.micro_excluded, e.inventory, e.posts;
          }),
          (this.rttPing = function (e) {
            t.push("rtt_pong", e).then(function (e) {
              var t = e.rtt_ms;
              window.amplitude
                .getInstance()
                .setUserProperties({ rtt_ping_ms: t });
            });
          }),
          (this.__postTracker = new g("posts")),
          (this.__socket = new u.Socket("/_user", {
            params: this.socketParams(),
            reconnectAfterMs: this.reconnectAfterMs,
          })),
          this.__socket.connect(),
          (this.__channel = this.__socket.channel(
            "journey",
            this.channelParams(n)
          )),
          this.__channel.on("state", this.log),
          this.__channel.on("rtt_ping", this.rttPing),
          this.__channel.join();
      }
      return (
        c()(e, [
          {
            key: "getSocket",
            value: function () {
              this.__socket;
            },
          },
          {
            key: "simulateReconnect",
            value: function () {
              this.push("crash");
            },
          },
          {
            key: "disconnect",
            value: function () {
              this.push("disconnect")
                .then(function () {
                  return console.info("disconnected");
                })
                .catch(function () {
                  return console.error("disconnected");
                });
            },
          },
          {
            key: "viewedPost",
            value: function (e) {
              return (
                this.__postTracker.viewed(e),
                this.push("viewed:post", { id: e })
              );
            },
          },
          {
            key: "viewedBlackbird",
            value: function (e, t, n) {
              return this.push("viewed:blackbird", {
                campaign: e,
                creative: t,
                atom: n,
              });
            },
          },
          {
            key: "next",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return this.push("next", t)
                .then(function (t) {
                  return e.softTrackResponse(t);
                })
                .then(function (t) {
                  return e.updateChannelParams(), t;
                });
            },
          },
          {
            key: "reconnectAfterMs",
            value: function (e) {
              return [1e3, 2e3, 5e3, 1e4, 6e4, 3e5][e - 1] || 432e5;
            },
          },
          {
            key: "socketParams",
            value: function () {
              return {
                initial_instance_id: window.__initial_instance_id,
                token: window.__OUTLINE__.token,
                version: 1,
              };
            },
          },
          {
            key: "channelParams",
            value: function (e) {
              return r()({}, e, { posts: this.__postTracker.getTracked() });
            },
          },
          {
            key: "updateChannelParams",
            value: function () {
              if (this.__channel && this.__channel.joinPush) {
                var e = this.__channel.joinPush.payload;
                this.__channel.joinPush.payload = this.channelParams(e);
              }
            },
          },
          {
            key: "push",
            value: function (e, t) {
              var n = this;
              return new Promise(function (i, r) {
                n.__channel
                  .push(e, t)
                  .receive("ok", function (e) {
                    return i(e);
                  })
                  .receive("error", function (e) {
                    return r(e);
                  });
              });
            },
          },
        ]),
        e
      );
    })();
  },
  57: function (e, t, n) {
    "use strict";
    var i = n(1),
      r = n.n(i),
      a = n(2),
      o = n.n(a),
      s = n(5),
      c = n.n(s),
      u = n(0),
      l = n.n(u),
      d = n(21),
      h = n.n(d),
      v = n(7),
      m = n.n(v),
      f = n(11),
      p = n(41),
      g = n(19);
    var _ = n(3),
      y = n(12);
    n.d(t, "a", function () {
      return b;
    });
    var b = (function (e) {
      function t(e) {
        var n;
        return (
          r()(this, t),
          ((n = c()(this, l()(t).call(this, e))).render = Object(p.a)(
            n.render,
            50
          ).bind(h()(n))),
          n
        );
      }
      return (
        m()(t, e),
        o()(t, [
          {
            key: "render",
            value: function () {
              var e = this;
              Object(_.a)(function () {
                var t,
                  n,
                  i = e.$element;
                if (
                  ((t = i),
                  (n = "js-rotate"),
                  window
                    .getComputedStyle(t, ":before")
                    .getPropertyValue("content")
                    .indexOf(n) >= 0)
                ) {
                  var r = i.parentNode;
                  Object(y.b)(i, "margin"), Object(y.c)(i, "transform", "none");
                  var a = i.clientWidth,
                    o = i.clientHeight,
                    s = r.clientWidth;
                  if ((Object(y.b)(i, "transform"), a > o)) {
                    var c = Object(y.a)(Math.round(a - o) / 2),
                      u = a > s ? Object(y.a)(Math.round((s - a) / 2)) : "auto";
                    Object(y.c)(i, "margin", "".concat(c, " ").concat(u));
                  }
                } else Object(y.b)(i, "margin");
              });
            },
          },
          {
            key: "mount",
            value: function () {
              this.render(),
                Object(g.a)(this.render),
                window.addEventListener("resize", this.render);
            },
          },
          {
            key: "unmount",
            value: function () {
              window.removeEventListener("resize", this.render);
            },
          },
        ]),
        t
      );
    })(f.b);
  },
  82: function (e, t, n) {
    n(91), (e.exports = n(146));
  },
  9: function (e, t, n) {
    "use strict";
    function i() {
      return {
        x: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        y: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      };
    }
    function r(e) {
      return i(e.x, e.y);
    }
    function a() {
      return i(0, 0);
    }
    function o(e, t) {
      return i(e.x * t, e.y * t);
    }
    function s(e, t) {
      return i(e.x - t.x, e.y - t.y);
    }
    function c(e, t) {
      return i(e.x + t.x, e.y + t.y);
    }
    function u(e, t) {
      return i(e.x, t);
    }
    function l(e, t) {
      var n = e.x,
        a = e.y;
      return 0 === t ? r(e) : i(n / t, a / t);
    }
    function d(e, t) {
      return e.x === t.x && e.y === t.y;
    }
    function h(e, t) {
      return !d(e, t);
    }
    n.d(t, "i", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return r;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "h", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return u;
      }),
      n.d(t, "j", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "e", function () {
        return h;
      });
  },
  91: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(33),
      r = n(11),
      a = n(1),
      o = n.n(a),
      s = n(2),
      c = n.n(s),
      u = n(5),
      l = n.n(u),
      d = n(0),
      h = n.n(d),
      v = n(4),
      m = n.n(v),
      f = n(7),
      p = n.n(f),
      g = n(34),
      _ = n(3),
      y = (function (e) {
        function t(e) {
          var n,
            i = e.previous,
            r = e.current,
            a = e.next,
            s = e.dispatchMovePrevious,
            c = e.dispatchMoveNext;
          o()(this, t);
          var u = document.querySelector("path-root"),
            d = document.querySelector("path-plane");
          return (
            ((n = l()(this, h()(t).call(this, u))).$plane = d),
            (n.dispatchMoveNext = c),
            (n.dispatchMovePrevious = s),
            (n.previous = S(i)),
            (n.current = S(r)),
            (n.next = S(a)),
            (n.isRendering = !1),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "moveNext",
              value: function () {
                0;
              },
            },
            {
              key: "movePrevious",
              value: function () {
                0;
              },
            },
            {
              key: "updatePathItems",
              value: function (e, t) {
                var n = this,
                  i = O(e),
                  r = O(t);
                Object(_.a)(function () {
                  (n.isRendering = !0),
                    n.rerenderPrevious(i.previous, r.previous, n.$plane),
                    n.rerenderNext(i.next, r.next, n.$plane),
                    n.setState(r),
                    (n.isRendering = !1);
                });
              },
            },
            {
              key: "doMoveNext",
              value: function (e, t) {
                this.rerenderPrevious(e.current, t.previous, this.$plane),
                  this.rerenderNext(null, t.next, this.$plane),
                  b.remove(e.previous),
                  this.setState(t),
                  w(this.previous),
                  k(this.current);
              },
            },
            {
              key: "doMovePrevious",
              value: function (e, t) {
                this.rerenderPrevious(null, t.previous, this.$plane),
                  this.rerenderNext(e.current, t.next, this.$plane),
                  b.remove(e.next),
                  this.setState(t),
                  w(this.next),
                  k(this.current);
              },
            },
            {
              key: "setState",
              value: function (e) {
                var t, n, i, r;
                (this.previous = e.previous),
                  (this.current = e.current),
                  (this.next = e.next),
                  (n = (t = e).previous),
                  (i = t.current),
                  (r = t.next),
                  j(n, "previous"),
                  j(i, "current"),
                  j(r, "next");
              },
            },
            {
              key: "rerenderPrevious",
              value: function (e, t, n) {
                if (e) return t ? b.replace(e, t) : b.remove(e);
                t && b.prepend(n, t);
              },
            },
            {
              key: "rerenderNext",
              value: function (e, t, n) {
                if (e) return t ? b.replace(e, t) : b.remove(e);
                t && b.append(n, t);
              },
            },
          ]),
          t
        );
      })(r.b),
      b = {
        prepend: function (e, t) {
          var n = e.firstChild;
          n && (e.insertBefore(t.dom(), n), t.dispatchMount());
        },
        append: function (e, t) {
          e.appendChild(t.dom()), t.dispatchMount();
        },
        replace: function (e, t) {
          if (!e.isSame(t)) {
            var n = e.parent();
            e.dispatchUnmount(),
              n.replaceChild(t.dom(), e.dom()),
              t.dispatchMount();
          }
        },
        remove: function (e) {
          if (e) {
            var t = e.parent();
            e.dispatchUnmount(), t.removeChild(e.dom());
          }
        },
      };
    function k(e) {
      e && e.dispatchActivate();
    }
    function w(e) {
      e && e.dispatchDeactivate();
    }
    function O(e) {
      var t = e.previous,
        n = e.current,
        i = e.next;
      return { previous: S(t), current: S(n), next: S(i) };
    }
    function S(e) {
      return e && e.page ? e.page : null;
    }
    function j(e, t) {
      e && e.dom().setAttribute("data-state", t);
    }
    function P(e) {
      if (!e) return null;
      var t = e.getBoundingClientRect();
      return {
        left: t.left,
        right: t.right,
        top: t.top,
        bottom: t.bottom,
        width: t.right - t.left,
        height: t.bottom - t.top,
      };
    }
    var $ = n(9),
      E = (function (e) {
        function t() {
          return o()(this, t), l()(this, h()(t).apply(this, arguments));
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "activate",
              value: function () {
                var e = this;
                Object(_.a)(function () {
                  e.rerenderPrevious(null, e.previous, e.$plane),
                    e.rerenderNext(null, e.next, e.$plane),
                    e.setState(e),
                    e.current.dispatchMount(),
                    e.current.dispatchActivate();
                });
              },
            },
            {
              key: "movePrevious",
              value: function (e, t) {
                var n = this,
                  i = O(e),
                  r = O(t);
                (this.isRendering = !0),
                  Object(_.a)(function () {
                    var e = Object($.f)(Object($.g)(), r.current.rect().top);
                    n.doMovePrevious(i, r);
                    var t = Object($.f)(Object($.g)(), r.current.rect().top),
                      a = Object($.c)(t, e);
                    n.navigator.setPositionRelative(a), (n.isRendering = !1);
                  });
              },
            },
            {
              key: "moveNext",
              value: function (e, t) {
                var n = this,
                  i = O(e),
                  r = O(t);
                (this.isRendering = !0),
                  Object(_.a)(function () {
                    var e = Object($.f)(Object($.g)(), r.current.rect().top);
                    n.doMoveNext(i, r);
                    var t = Object($.f)(Object($.g)(), r.current.rect().top),
                      a = Object($.c)(t, e);
                    n.navigator.setPositionRelative(a), (n.isRendering = !1);
                  });
              },
            },
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  Object(_.a)(function () {
                    e.$plane.setAttribute("tabindex", "-1"), e.$plane.focus();
                  }),
                  (this.navigator = new g.a(this.$plane, {
                    passive: !0,
                  }).onScroll(function () {
                    if (!e.isRendering) {
                      var t = P(e.current.$element),
                        n = e.next ? P(e.next.$element) : null;
                      e.current.postAsset && e.current.postAsset.set("rect", t),
                        e.next &&
                          e.next.postAsset &&
                          e.next.postAsset.set("rect", n),
                        Math.floor(t.bottom) <= 0
                          ? e.dispatchMoveNext()
                          : Math.floor(t.top) > 0 && e.dispatchMovePrevious();
                    }
                  }));
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.navigator && this.navigator.destroy();
              },
            },
          ]),
          t
        );
      })(y),
      x = n(35),
      C = (function (e) {
        function t() {
          return o()(this, t), l()(this, h()(t).apply(this, arguments));
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "moveOnPositionChange",
              value: function (e) {
                var t = this.determineDirection(e);
                1 === t && this.dispatchMoveNext(),
                  -1 === t && this.dispatchMovePrevious();
              },
            },
            {
              key: "determineDirection",
              value: function (e) {
                var t = e.x,
                  n = this.current.rect().width;
                return Math.floor((n / 2 - t) / n);
              },
            },
            {
              key: "activate",
              value: function () {
                var e = this;
                Object(_.a)(function () {
                  e.rerenderPrevious(null, e.previous, e.$plane),
                    e.rerenderNext(null, e.next, e.$plane),
                    e.setState(e),
                    e.current.dispatchMount(),
                    e.current.dispatchActivate();
                });
              },
            },
            {
              key: "movePrevious",
              value: function (e, t) {
                var n = this,
                  i = O(e),
                  r = O(t);
                Object(_.a)(function () {
                  n.doMovePrevious(i, r), n.dragger.setPosition(Object($.g)());
                });
              },
            },
            {
              key: "moveNext",
              value: function (e, t) {
                var n = this,
                  i = O(e),
                  r = O(t);
                Object(_.a)(function () {
                  n.doMoveNext(i, r), n.dragger.setPosition(Object($.g)());
                });
              },
            },
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.dragger = new x.a(this.dom(), {
                    draggableElement: this.$plane,
                    draggableAxis: Object(x.b)(),
                    animationTiming: 250,
                  })
                    .roundValue(function (t) {
                      var n = t.x,
                        i = t.y,
                        r = e.current.rect().width,
                        a = Math.floor((n + r / 2) / r);
                      return Object($.i)(a * r, i);
                    })
                    .imposeBounds(function (t) {
                      var n = t.x,
                        i = t.y,
                        r = e.previous,
                        a = e.next,
                        o = e.current.rect().width,
                        s = r ? o : 0,
                        c = a ? -o : 0,
                        u = n;
                      return (
                        (u = Math.min(u, s)),
                        (u = Math.max(u, c)),
                        Object($.i)(u, i)
                      );
                    })
                    .onMoveEnd(function (t, n) {
                      e.moveOnPositionChange(n);
                    })
                    .onPress(function (t, n) {
                      e.moveOnPositionChange(n);
                    }));
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.dragger && this.dragger.destroy();
              },
            },
          ]),
          t
        );
      })(y),
      M = (function (e) {
        function t() {
          return o()(this, t), l()(this, h()(t).apply(this, arguments));
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "update",
              value: function (e) {
                var t = this;
                this.location !== e &&
                  (this.raf(function () {
                    t.$element.dataset.index = e % 9;
                  }),
                  (this.location = e));
              },
            },
          ]),
          t
        );
      })(r.b),
      A = n(39),
      L = n(8),
      T = n.n(L),
      D = {
        enabled: !0,
        channel: null,
        path: [],
        location: 0,
        direction: "direct",
        features: { gyro_background: !1 },
      };
    function q(e, t) {
      return {
        previous: (function (e, t) {
          if (0 === e) return null;
          return t[e - 1];
        })(e, t),
        current: (function (e, t) {
          return t[e];
        })(e, t),
        next: (function (e, t) {
          if (e === t.length - 1) return null;
          return t[e + 1];
        })(e, t),
      };
    }
    var R = n(28),
      I = n(24),
      N = n(23),
      B = n(46),
      z = (n(58), n(40)),
      Y = n(36),
      H = n(19),
      F = n(10),
      U = n(6),
      V = n(42);
    function X(e, t) {
      var n = t.zd,
        i = void 0 === n ? 0 : n,
        r = t.zr,
        a = void 0 === r ? null : r,
        o = t.zi,
        s = void 0 === o ? null : o;
      return { depth: Number(i), root: a, referrer: s, id: e };
    }
    var W = n(56);
    var J = n(54),
      Q = n(21),
      Z = n.n(Q),
      G = ".embed__activate",
      K = ".embed__container",
      ee = "data-embed-content",
      te = [],
      ne = (function (e) {
        function t(e) {
          var n;
          return (
            o()(this, t),
            ((n = l()(this, h()(t).call(this, e))).player = null),
            (n.$activate = n.$(G)),
            (n.$embedContainer = n.$(K)),
            (n.embedContent = n.$element.getAttribute(ee)),
            (n.activateEmbed = n.activateEmbed.bind(Z()(n))),
            (n.playVideo = n.playVideo.bind(Z()(n))),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "activateEmbed",
              value: function () {
                var e = this;
                te.forEach(function (e) {
                  return e.deactivateEmbed();
                }),
                  Object(_.a)(function () {
                    (e.$embedContainer.innerHTML = e.embedContent),
                      e.$element.classList.remove("embed--activated"),
                      e.$element.classList.add("embed--loading"),
                      te.push(e),
                      window.YT
                        ? e.initializePlayer()
                        : (window.onYouTubeIframeAPIReady = function () {
                            this.initializePlayer();
                          });
                  });
              },
            },
            {
              key: "deactivateEmbed",
              value: function () {
                var e = this;
                te.splice(te.indexOf(this), 1),
                  Object(_.a)(function () {
                    e.player.destroy(),
                      (e.player = null),
                      (e.$embedContainer.innerHTML = ""),
                      e.$element.classList.remove(
                        "embed--activated",
                        "embed--loading"
                      );
                  });
              },
            },
            {
              key: "initializePlayer",
              value: function () {
                if (!this.player) {
                  var e = this.$("iframe");
                  this.player = new window.YT.Player(e, {
                    events: { onReady: this.playVideo },
                  });
                }
              },
            },
            {
              key: "playVideo",
              value: function () {
                var e = this;
                Object(_.a)(function () {
                  e.$element.classList.remove("embed--loading"),
                    e.$element.classList.add("embed--activated"),
                    e.player.playVideo();
                });
              },
            },
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  this.$activate.addEventListener("click", this.activateEmbed);
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$activate.removeEventListener(
                    "click",
                    this.activateEmbed
                  );
              },
            },
          ]),
          t
        );
      })(r.b),
      ie = n(55),
      re = n(32),
      ae = n(22),
      oe = n(20),
      se = n(12),
      ce = ".follow-embed__social__item",
      ue = (function (e) {
        function t(e) {
          var n;
          return (
            o()(this, t),
            ((n = l()(this, h()(t).call(this, e))).$form = n.$(
              ".follow-embed__newsletter"
            )),
            (n.$socialButtons = n.$$(ce)),
            (n.onFormSubmit = n.onFormSubmit.bind(Z()(n))),
            (n.onSocialItemClick = n.onSocialItemClick.bind(Z()(n))),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "onFormSubmit",
              value: function (e) {
                e.preventDefault();
                var t = e.target.elements.email.value;
                this.submitEmail(t);
                var n = this.$form.dataset.message;
                F.a.track("follow_embed_subscribe", { message: n });
              },
            },
            {
              key: "onSocialItemClick",
              value: function (e) {
                var t = Object(oe.a)(e.target, ce).dataset.network;
                F.a.track("social_link_click", {
                  location: "follow-embed",
                  network: t,
                });
              },
            },
            {
              key: "submitEmail",
              value: function (e) {
                var t = this;
                Object(ae.b)("/api/newsletter/subscribe", { email: e })
                  .then(function (e) {
                    return 200 !== e.status
                      ? Promise.reject("Failed to subscribe to newsletter")
                      : e.json();
                  })
                  .then(function () {
                    Object(_.a)(function () {
                      Object(se.c)(
                        t.$form,
                        "height",
                        Object(se.a)(t.$form.clientHeight)
                      ),
                        (t.$form.dataset.state = "success");
                    });
                  });
              },
            },
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  this.$form.addEventListener("submit", this.onFormSubmit),
                  Array.from(this.$socialButtons).forEach(function (t) {
                    t.addEventListener("click", e.onSocialItemClick);
                  });
              },
            },
            {
              key: "unmount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$form.removeEventListener("submit", this.onFormSubmit),
                  Array.from(this.$socialButtons).forEach(function (t) {
                    t.removeEventListener("click", e.onSocialItemClick);
                  });
              },
            },
          ]),
          t
        );
      })(r.b),
      le = (function (e) {
        function t(e) {
          var n;
          return (
            o()(this, t),
            ((n = l()(this, h()(t).call(this, e))).$form = n.$(
              ".newsletter-card__form"
            )),
            n
          );
        }
        return p()(t, e), t;
      })(ue),
      de = n(57),
      he = n(41),
      ve = n(49),
      me = n(50),
      fe = 4e3,
      pe = "out-quart",
      ge = 500,
      _e = 0.975;
    function ye(e, t, n) {
      var i = new me.Easer().using(pe),
        r = (function (e) {
          if (Number.isInteger(e)) return 0;
          return e.toString().split(".")[1].length;
        })(n),
        a = new ve.AnimationTimer().duration(fe).on(
          "tick",
          i(function (i) {
            var a = (i * n).toFixed(r);
            be(t, a, i), i >= _e && we(e);
          })
        );
      setTimeout(function () {
        a.play();
      }, ge);
    }
    function be(e, t, n) {
      Object(_.a)(function () {
        (e.innerHTML = t), (e.style.opacity = 0.5 + 0.5 * n);
      });
    }
    function ke(e) {
      Object(_.a)(function () {
        (e.innerHTML = 0), (e.style.opacity = 0);
      });
    }
    function we(e) {
      e.setAttribute("data-complete", "true");
    }
    var Oe = (function (e) {
        function t(e) {
          var n;
          return (
            o()(this, t),
            ((n = l()(this, h()(t).call(this, e))).render = function () {
              var e, t, i, r, a;
              if ("number" == typeof n.goal)
                return Number.isInteger(n.goal)
                  ? ((e = n.$element),
                    (t = n.$number),
                    (i = n.goal),
                    (r = new me.Easer().using(pe)),
                    (a = new ve.AnimationTimer().duration(fe).on(
                      "tick",
                      r(function (n) {
                        var r = Math.ceil(n * i);
                        be(t, r, n), n >= _e && we(e);
                      })
                    )),
                    void setTimeout(function () {
                      a.play();
                    }, ge))
                  : void ye(n.$element, n.$number, n.goal);
            }),
            (n.render = Object(he.a)(n.render, 50)),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "activate",
              value: function () {
                m()(h()(t.prototype), "activate", this).call(this),
                  ke(this.$number),
                  Object(H.a)(this.render),
                  window.addEventListener("resize", this.render);
              },
            },
            {
              key: "deactivate",
              value: function () {
                m()(h()(t.prototype), "deactivate", this).call(this),
                  ke(this.$number),
                  this.$element.setAttribute("data-complete", "false"),
                  window.removeEventListener("resize", this.render);
              },
            },
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.$number = this.$element.querySelector(
                    ".bigdata-card__spin-number"
                  )),
                  (this.goal = parseFloat(
                    this.$element.getAttribute("data-number")
                  ));
              },
            },
          ]),
          t
        );
      })(r.b),
      Se = {},
      je = function () {
        return { complete: !1, downloading: !1, pending: [] };
      };
    function Pe(e) {
      return Se[e] || je();
    }
    function $e(e, t, n) {
      var i = Pe(e);
      (i[t] = n), (Se[e] = i);
    }
    function Ee(e, t) {
      var n = t.complete;
      (Se[e] = je), $e(e, "complete", n);
    }
    function xe(e) {
      var t = document.createElement("script");
      (t.onload = function () {
        return (function (e) {
          try {
            Pe(e).pending.forEach(function (e) {
              Promise.resolve(e);
            }),
              Ee(e, { complete: !0 });
          } catch (e) {
            console.log(e);
          }
        })(e);
      }),
        (t.onerror = function () {
          return (function (e) {
            try {
              Pe(e).pending.forEach(function (e) {
                Promise.reject(e);
              }),
                Ee(e, { complete: !1 });
            } catch (e) {
              console.log(e);
            }
          })(e);
        }),
        (t.async = !0),
        (t.src = e),
        document.body.appendChild(t);
    }
    function Ce(e) {
      var t = Pe(e),
        n = t.complete,
        i = t.downloading;
      return n
        ? Promise.resolve(e)
        : (i || ($e(e, "downloading", !0), xe(e)),
          (function (e) {
            var t = new Promise(function () {}),
              n = Pe(e).pending;
            return n.push(t), $e(e, "pending", n), t;
          })(e));
    }
    var Me = (function (e) {
        function t() {
          var e, n;
          o()(this, t);
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          return (
            ((n = l()(
              this,
              (e = h()(t)).call.apply(e, [this].concat(r))
            )).clickShareButton = function (e) {
              var t = Object(oe.a)(e.target, ".post__card__share__outlet");
              if (t) {
                var n = t.dataset.network;
                F.a.track("social_share", { network: n, location: "card" });
              }
            }),
            (n.toggleShare = function () {
              var e = "true" === n.$element.dataset.open,
                t = e ? "close" : "open",
                i = e ? "false" : "true";
              "function" != typeof window.triggerIpgTimeout &&
                (F.a.track("social_toggle_share", { action: t }),
                (n.$element.dataset.open = i));
            }),
            (n.toggleDescription = function () {
              var e =
                "true" === n.$element.dataset.descriptionOpen
                  ? "false"
                  : "true";
              n.$element.dataset.descriptionOpen = e;
            }),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.$toggle = this.$(".post__card__share__toggle")),
                  (this.$description = this.$(
                    ".post__card__share__outlet--description"
                  )),
                  this.$element.addEventListener(
                    "click",
                    this.clickShareButton
                  ),
                  this.$toggle &&
                    this.$toggle.addEventListener("click", this.toggleShare),
                  this.$description &&
                    this.$description.addEventListener(
                      "click",
                      this.toggleDescription
                    );
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$element.removeEventListener(
                    "click",
                    this.clickShareButton
                  ),
                  this.$toggle &&
                    this.$toggle.removeEventListener("click", this.toggleShare),
                  this.$description &&
                    this.$description.removeEventListener(
                      "click",
                      this.toggleDescription
                    );
              },
            },
          ]),
          t
        );
      })(r.b),
      Ae = (function (e) {
        function t() {
          var e, n;
          o()(this, t);
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          return (
            ((n = l()(
              this,
              (e = h()(t)).call.apply(e, [this].concat(r))
            )).clickShareButton = function (e) {
              var t = Object(oe.a)(e.target, ".post__share__outlet");
              if (t) {
                var n = t.dataset.network;
                F.a.track("social_share", { network: n, location: "post" });
              }
            }),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  this.$element.addEventListener(
                    "click",
                    this.clickShareButton
                  );
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$element.removeEventListener(
                    "click",
                    this.clickShareButton
                  );
              },
            },
          ]),
          t
        );
      })(r.b),
      Le = (function (e) {
        function t(e, n) {
          var i,
            r = n.container,
            a = n.isPostTruncated;
          return (
            o()(this, t),
            ((i = l()(
              this,
              h()(t).call(this, e)
            )).postEmbedClick = function () {
              F.a.track("post_embed_click", {
                link_path: i.link_path,
                is_last: i.isLast,
              });
            }),
            (i.container = r),
            (i.$link = i.$(".post-embed__link")),
            (i.link_path = i.$link.getAttribute("href")),
            (i.isLast = Object(oe.e)(i.$element)),
            (i.isPostTruncated = a),
            i
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  this.$link.addEventListener("click", this.postEmbedClick),
                  this.mountChild(this.$element, function (t) {
                    return new re.a(t, e.container, function () {
                      return !e.isPostTruncated();
                    }).onEnterStart(function () {
                      return F.a.track("post_embed_view", {
                        link_path: e.link_path,
                        is_last: e.isLast,
                      });
                    });
                  });
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$link.removeEventListener("click", this.postEmbedClick);
              },
            },
          ]),
          t
        );
      })(r.b);
    function Te(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e[n]), t;
      }, {});
    }
    function De(e) {
      return {
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        width: e.width,
        height: e.height,
      };
    }
    var qe = (function (e) {
        function t(e, n) {
          var i,
            r = n.container,
            a = n.scrollContainer;
          if (
            (o()(this, t),
            "IFRAME" !== (i = l()(this, h()(t).call(this, e))).$element.tagName)
          )
            return l()(i);
          var s,
            c,
            u,
            d,
            v,
            m = [
              {
                eventName: "mousemove",
                target: r,
                getProperties: function (e) {
                  var t = e.event,
                    n = De(e.component.rect()),
                    i = n.top,
                    r = n.left,
                    a = Te(t, ["clientX", "clientY"]),
                    o = a.clientX,
                    s = a.clientY,
                    c = Object($.i)(o, s, 0),
                    u = Object($.i)(r, i, 0),
                    l = Object($.c)(c, u);
                  return { clientX: l.x, clientY: l.y };
                },
              },
              {
                eventName: "mouseenter",
                target: r,
                getProperties: function () {},
              },
              {
                eventName: "mouseleave",
                target: r,
                getProperties: function () {},
              },
              {
                eventName: "deviceorientation",
                target: window,
                getProperties: function (e) {
                  return Te(e.event, ["absolute", "alpha", "beta", "gamma"]);
                },
              },
              {
                eventName: "resize",
                target: window,
                getProperties: function () {
                  return Te(window, ["innerHeight", "innerWidth"]);
                },
              },
              {
                eventName: "scroll",
                target: a,
                getProperties: function (e) {
                  var t = De(e.component.rect()),
                    n = t.top,
                    i = t.left;
                  return T()({}, Te(window, ["innerHeight", "innerWidth"]), {
                    scrollLeft: -1 * i,
                    scrollTop: -1 * n,
                  });
                },
              },
            ],
            f =
              ((s = i.$element),
              (c = s.getAttribute("src")),
              (u = c.indexOf("?")),
              (d = c.substring(u + 1)),
              (v = Object(V.a)(d)).eventListeners
                ? v.eventListeners.split(",")
                : []);
          return (
            (i.eventListeners = m.filter(function (e) {
              var t = e.eventName;
              return f.indexOf(t) >= 0;
            })),
            (i.$container = r),
            (i.$scrollContainer = a),
            (i.iframeWindow = i.$element.contentWindow),
            (i.boundEventsHandlers = []),
            i
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.boundEventsHandlers = this.eventListeners.map(function (
                    t
                  ) {
                    var n = t.eventName,
                      i = t.target,
                      a = t.getProperties,
                      o = (function (e) {
                        var t = e.component,
                          n = e.eventName,
                          i = e.getProperties;
                        return function (e) {
                          t.state() === r.a &&
                            Object(_.a)(function () {
                              var r = i({ event: e, component: t });
                              !(function (e) {
                                var t = e.component,
                                  n = e.eventName,
                                  i = e.properties;
                                t.iframeWindow.postMessage(
                                  { type: n, properties: i },
                                  "*"
                                );
                              })({ component: t, eventName: n, properties: r });
                            });
                        };
                      })({ component: e, eventName: n, getProperties: a });
                    return (
                      i.addEventListener(n, o),
                      { eventName: n, target: i, eventHandler: o }
                    );
                  }));
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.boundEventsHandlers.forEach(function (e) {
                    var t = e.eventName,
                      n = e.target,
                      i = e.eventHandler;
                    n.removeEventListener(t, i);
                  });
              },
            },
          ]),
          t
        );
      })(r.b),
      Re = n(53);
    var Ie = n(29),
      Ne = "transitionend",
      Be = (function (e) {
        function t(e, n) {
          var i;
          return (
            o()(this, t),
            ((i = l()(this, h()(t).call(this, e, n))).requestAds =
              e.requestAds),
            i
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "stateDidUpdate",
              value: function () {
                var e = this.getState();
                e.rect &&
                  !e.requestedAds &&
                  e.rect.top < 0 &&
                  (this.requestAds(), this.set("requestedAds", !0));
              },
            },
          ]),
          t
        );
      })(R.a),
      ze = (function (e) {
        function t(e, n) {
          var i;
          o()(this, t),
            ((i = l()(this, h()(t).call(this, e))).isTruncated = function () {
              return i.truncated;
            }),
            (i.readMore = function (e) {
              e.preventDefault(), i.bodyViewed();
              var t,
                n,
                r =
                  ((t = i.$postWrapper),
                  (n = window.getComputedStyle(t)),
                  t.clientHeight +
                    parseInt(n.getPropertyValue("margin-top"), 10) +
                    parseInt(n.getPropertyValue("margin-bottom"), 10));
              Object(_.a)(function () {
                Object(se.c)(i.$postArticle, "height", Object(se.a)(r)),
                  i.$postArticle.addEventListener(Ne, i.readMoreComplete);
              });
            }),
            (i.readMoreComplete = function () {
              Object(_.a)(function () {
                i.$postArticle.removeEventListener(Ne, i.readMoreComplete),
                  Object(se.b)(i.$postArticle, "height"),
                  i.removeTruncater();
              });
            }),
            (i.openLink = function (e) {
              if (e.target && e.target.matches("a, .icon-externallink")) {
                if ("function" == typeof window.triggerIpgTimeout)
                  return void e.preventDefault();
                var t = e.target.href;
                new RegExp("/" + window.location.host + "/").test(t) ||
                  (window.open(t), e.preventDefault());
              }
            });
          var r = n.id,
            a = n.path,
            s = n.type,
            c = "quick" === s;
          return (
            (i.id = r),
            (i.path = a),
            (i.type = s),
            (i.inBody = !1),
            (i.$post = i.$("path-page")),
            (i.$postArticle = i.$(
              c ? ".quick-post__wrapper" : ".post__article"
            )),
            (i.$postWrapper = i.$(c ? ".quick-post__body" : ".post__wrapper")),
            (i.$readMoreLink = i.$(".read-more__link")),
            (i.truncated = i.getTruncated()),
            i
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "initMobileScrollHandler",
              value: function () {
                var e = this;
                this.scrollSubscriber = new g.a(this.scrollParent(), {
                  passive: !0,
                }).onScroll(function (t, n) {
                  var i = n.y,
                    r = P(e.scrollParent().firstElementChild);
                  if (e.postAsset) e.postAsset.set("rect", r);
                  else {
                    var a = new XMLHttpRequest();
                    a.open("POST", "/_jserror/custom", !0),
                      a.setRequestHeader(
                        "Content-Type",
                        "application/json;charset=UTF-8"
                      ),
                      a.send(
                        JSON.stringify({
                          module: "PostPage",
                          function: "initMobileScrollHandler",
                          postAsset: e.postAsset,
                        })
                      );
                  }
                  i >= Object(Ie.a)() && !e.inBody
                    ? ((e.inBody = !0), e.bodyViewed())
                    : i < Object(Ie.a)() && e.inBody && (e.inBody = !1),
                    i > 0 &&
                      (setTimeout(function () {
                        return e.injectMicronativeFooter();
                      }, 1e3),
                      setTimeout(function () {
                        return e.injectPostFooter();
                      }, 2e3));
                });
              },
            },
            {
              key: "injectPostFooter",
              value: function () {
                var e = this;
                if (!this.footerInjected)
                  return (
                    (this.footerInjected = !0),
                    n
                      .e("post-footer")
                      .then(n.bind(null, 68))
                      .then(function (t) {
                        var n = t.default;
                        e.mountChild(".post-footer", function (t) {
                          return new n(t, {
                            container: e.scrollParent(),
                            post_id: e.id,
                          });
                        });
                      })
                  );
              },
            },
            {
              key: "injectMicronativeFooter",
              value: function () {
                var e = this;
                if (
                  !0 === window.__injectMicronativeFooter &&
                  !this.footerMicronativeInjected
                ) {
                  this.footerMicronativeInjected = !0;
                  var t = !1;
                  ft.push("get_micronative").then(function (n) {
                    if ("ok" === n.status) {
                      var i = e.$(".post-micronative-footer");
                      if (i) {
                        var r =
                          Math.round(0.9 * (window.innerHeight - 44)) + "px";
                        i.style.setProperty("--window-height", r),
                          (i.innerHTML = n.html);
                        var a = i.querySelector(".pushpop-embed-data");
                        if (a) {
                          var o = N.a.jsonTag(a),
                            s = o.behaviour,
                            c = o.id,
                            u = o.state,
                            l = { $element: e.$("#".concat(c)), id: c };
                          (u.fireEvent = function (e, t) {
                            var i = T()({}, n.analytics, t, {
                              interaction_type: "post_footer",
                            });
                            F.a.track(e, i);
                          }),
                            Object(R.d)(s, e.id, l, u);
                          var d = T()({}, n.analytics, {
                            interaction: "post_footer",
                          });
                          F.a.track("post_micronative_footer_load", d);
                          e.scrollParent().addEventListener(
                            "scroll",
                            function () {
                              Object(_.a)(function () {
                                if (
                                  !(
                                    i.getBoundingClientRect().y >
                                    window.innerHeight / 2
                                  ) &&
                                  !0 !== t
                                ) {
                                  t = !0;
                                  var e = T()({}, n.analytics, {
                                    interaction: "post_footer",
                                  });
                                  F.a.track("micro_enter", e);
                                  var r = n.pixels.micro_enter;
                                  if (r) {
                                    if (!0 !== window.__geo_usa) return;
                                    !(function (e) {
                                      e.forEach(function (e) {
                                        var t = e.id,
                                          i = e.base_url,
                                          r = e.url,
                                          a = new Image(1, 1);
                                        (a.onload = function () {
                                          window.amplitude
                                            .getInstance()
                                            .logEvent(
                                              "blackbird_thirdparty_pixel",
                                              T()({}, n.analytics, {
                                                id: t,
                                                base_url: i,
                                                status: "success",
                                                interaction_type: "post_footer",
                                                initial_url:
                                                  window.__initialURL,
                                              })
                                            );
                                        }),
                                          (a.onerror = function () {
                                            window.amplitude
                                              .getInstance()
                                              .logEvent(
                                                "blackbird_thirdparty_pixel",
                                                T()({}, n.analytics, {
                                                  id: t,
                                                  base_url: i,
                                                  status: "error",
                                                  interaction_type:
                                                    "post_footer",
                                                  initial_url:
                                                    window.__initialURL,
                                                })
                                              );
                                          }),
                                          (a.src = r);
                                      });
                                    })(r);
                                  }
                                }
                              });
                            },
                            { passive: !0 }
                          );
                        }
                      }
                    }
                  });
                }
              },
            },
            {
              key: "hasReadMoreLink",
              value: function () {
                return !!this.$readMoreLink;
              },
            },
            {
              key: "getTruncated",
              value: function () {
                return (
                  !I.a && this.$post && "true" === this.$post.dataset.truncated
                );
              },
            },
            {
              key: "scrollParent",
              value: function () {
                return I.a
                  ? this.$(".path__element__content")
                  : document.querySelector("path-plane");
              },
            },
            {
              key: "createReadMore",
              value: function () {
                var e = this;
                Object(_.a)(function () {
                  var t,
                    n = (t = e.$postWrapper) ? t.getBoundingClientRect() : {};
                  n.bottom - n.top > Object(Ie.a)()
                    ? e.$readMoreLink.addEventListener("click", e.readMore)
                    : e.removeTruncater();
                });
              },
            },
            {
              key: "bodyViewed",
              value: function () {
                F.a.track("post_body_viewed", {
                  post_id: this.id,
                  current_path: this.path,
                });
              },
            },
            {
              key: "removeTruncater",
              value: function () {
                (this.$post.dataset.truncated = ""),
                  (this.truncated = this.getTruncated());
              },
            },
            {
              key: "loadPushpopEmbeds",
              value: function () {
                var e = this;
                this.$$(".pushpop-embed-data").forEach(function (t) {
                  var n = N.a.jsonTag(t),
                    i = n.behaviour,
                    r = n.id,
                    a = n.state,
                    o = { $element: e.$("#".concat(r)), id: r };
                  (a.parent_id = e.id), Object(R.d)(i, e.id, o, a);
                });
              },
            },
            {
              key: "initializePostSubscriptionAsset",
              value: function () {
                var e = this,
                  t = {
                    rect: this.rect(),
                    el: this.$element,
                    active: !1,
                    isSwipeNavigation: I.a,
                  },
                  n = new Be(
                    {
                      id: "__POST__",
                      requestAds: function () {
                        return Object(H.a)(function () {
                          e.enqueueRender(function () {
                            return e.initializeBodyAds();
                          });
                        });
                      },
                    },
                    t
                  );
                return n.subscribe(Object(R.b)(), this.id), n;
              },
            },
            {
              key: "initializeBodyAds",
              value: function () {
                var e = this,
                  t = this.$$(".z9")
                    .map(function (t) {
                      if ("true" === t.dataset.inlinedBodyAssembly) {
                        var n = t.querySelector(".product-stack");
                        return e.renderDisplayStack(n, {}), null;
                      }
                      var i = t.dataset;
                      return { type: i.type, index: i.index, id: i.id, $el: t };
                    })
                    .filter(function (e) {
                      return null !== e;
                    });
                0 !== t.length &&
                  this.requestSlots(t)
                    .then(function (t) {
                      t.forEach(function (t) {
                        t.$el.innerHTML = t.html;
                        var n = t.$el.querySelector(".product-stack");
                        n &&
                          "triple_stack" === t.type &&
                          e.renderDisplayStack(n, t);
                      }),
                        e.enqueueRender(function () {
                          return e.loadPushpopEmbeds();
                        });
                    })
                    .catch(function () {
                      0;
                    });
              },
            },
            {
              key: "requestSlots",
              value: function (e) {
                var t = e.map(function (e) {
                  return { type: e.type, index: e.index, id: e.id };
                });
                return Object(ae.b)("/api/body", { slots: t })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    var n = t.insertions;
                    return "error" === n
                      ? Promise.reject("Invalid /api/body response")
                      : e.reduce(function (e, t) {
                          var i = n[t.id];
                          return i && e.push(T()({}, t, i)), e;
                        }, []);
                  });
              },
            },
            {
              key: "renderDisplayStack",
              value: function (e, t) {
                var n = this,
                  i = this.scrollParent(),
                  r = function () {
                    return !n.truncated;
                  },
                  a = t.campaign_id,
                  o = t.creative_id;
                this.mountChild(e, function (e) {
                  return new re.a(e, i, r).onEnterComplete(function () {
                    F.a
                      .track("display_view", { campaign_id: a, creative_id: o })
                      .attachPixels(t.pixels.display_view);
                  });
                });
                var s = { campaign_id: a, creative_id: o, isDisplay: !0 };
                I.c
                  ? this.mountChildren(".product-stack__elements", function (
                      e
                    ) {
                      return new J.a(e, s);
                    })
                  : this.mountChildren(".product-stack--fan", function (e) {
                      return new ie.a(e, s);
                    });
              },
            },
            {
              key: "mountPostBodyEmbeds",
              value: function () {
                var e = this,
                  t = this.scrollParent(),
                  n = function () {
                    return !e.truncated;
                  };
                this.$post.addEventListener("click", this.openLink),
                  this.enqueueRender(function () {
                    return (e.postAsset = e.initializePostSubscriptionAsset());
                  }),
                  this.enqueueRender(function () {
                    return e.loadPushpopEmbeds();
                  }),
                  this.enqueueRender(function () {
                    return e.mountChildren(".js-rotated", de.a);
                  }),
                  I.a &&
                    this.enqueueRender(function () {
                      return e.mountChildren(".js-spin", Oe);
                    }),
                  this.enqueueRender(function () {
                    e.mountChildren(".card-stack", function (e) {
                      return new re.a(e, t);
                    }),
                      e.mountChildren(".product-stack", function (e) {
                        return new re.a(e, t);
                      });
                  }),
                  this.enqueueRender(function () {
                    I.c
                      ? e.mountChildren(".card-stack__elements", J.a)
                      : e.mountChildren(".card-stack--fan", ie.a);
                  }),
                  this.enqueueRender(function () {
                    return e.mountChildren(".embed", ne);
                  }),
                  this.enqueueRender(function () {
                    e.mountChildren(".follow-embed", function (e) {
                      return new re.a(e, t, n).onEnterComplete(function () {
                        var t = e.querySelector(".follow-embed__newsletter")
                          .dataset.message;
                        F.a.track("follow_embed_enter", { message: t });
                      });
                    }),
                      e.mountChildren(".follow-embed", ue);
                  }),
                  this.enqueueRender(function () {
                    e.mountChildren(".newsletter-card", function (e) {
                      return new re.a(e, t, n).onEnterComplete(function () {
                        var t = e.querySelector(".newsletter-card__form")
                          .dataset.message;
                        F.a.track("follow_embed_enter", { message: t });
                      });
                    }),
                      e.mountChildren(".newsletter-card", le);
                  }),
                  this.enqueueRender(function () {
                    e.mountChildren(".post-embed", function (t) {
                      return new Le(t, {
                        container: e.scrollParent(),
                        isPostTruncated: e.isTruncated,
                      });
                    });
                  }),
                  this.enqueueRender(function () {
                    e.$$(".post__card, .iframe-embed").forEach(function (t) {
                      var n = t.querySelector("iframe");
                      n &&
                        e.mountChild(n, function (n) {
                          return new qe(n, {
                            container: t,
                            scrollContainer: e.scrollParent(),
                          });
                        });
                    });
                  }),
                  this.enqueueRender(function () {
                    return Object(Re.a)();
                  });
              },
            },
            {
              key: "loadExternalEmbeds",
              value: function () {
                var e = this;
                this.enqueueRender(function () {
                  e.$(".twitter-tweet") &&
                    Ce("https://platform.twitter.com/widgets.js").then(
                      function () {
                        window.twttr && window.twttr.widgets.load(e.$element);
                      }
                    );
                }),
                  this.enqueueRender(function () {
                    e.$(".instagram-media") &&
                      Ce("https://www.instagram.com/embed.js").then(
                        function () {
                          window.instgrm && window.instgrm.Embeds.process();
                        }
                      );
                  }),
                  this.enqueueRender(function () {
                    e
                      .$$("iframe[data-src]")
                      .map(function (e) {
                        return { $el: e, src: e.dataset.src };
                      })
                      .map(function (e) {
                        var t = e.$el,
                          n = e.src;
                        t.removeAttribute("data-src"), t.setAttribute("src", n);
                      }),
                      e.$$("script[data-src]").forEach(function (e) {
                        Ce(e.dataset.src);
                      });
                  });
              },
            },
            {
              key: "mount",
              value: function () {
                I.a &&
                  (this.initMobileScrollHandler(),
                  "card" === this.type &&
                    (this.dragSubscriber = new x.a(this.dom(), {
                      draggableElement: this.dom(),
                      draggableAxis: Object(x.c)(),
                    })
                      .imposeBounds($.g)
                      .onBounds(function (e) {
                        return e.preventDefault();
                      }))),
                  this.mountChild(".post__card__share", Me),
                  this.mountChildren(".post__share", Ae),
                  this.truncated && this.createReadMore(),
                  this.mountPostBodyEmbeds();
              },
            },
            {
              key: "unmount",
              value: function () {
                var e = this;
                Object(R.b)().unmountContext(this.id),
                  Object(_.a)(function () {
                    e.dragSubscriber && e.dragSubscriber.destroy(),
                      e.scrollSubscriber && e.scrollSubscriber.destroy(),
                      e.hasReadMoreLink() &&
                        e.$readMoreLink.removeEventListener(
                          "click",
                          e.readMore
                        ),
                      e.$post.removeEventListener("click", e.openLink);
                  });
              },
            },
            {
              key: "activate",
              value: function () {
                var e,
                  n = this;
                r.b.dispatch(
                  ((e = this.id),
                  function (t, n) {
                    var i = n(),
                      r = i.channel,
                      a = i.current,
                      o = i.direction,
                      s = i.enabled,
                      c = i.location,
                      u = i.hydrationLocation,
                      l = i.zipper_id,
                      d = window.location.pathname,
                      h = a.parent_id,
                      v = a.path,
                      m = a.sensitive,
                      f = a.type,
                      p = a.title;
                    if (s) {
                      var g = Object(V.a)(),
                        _ = X(l, g);
                      Tt(v, p, g, _);
                      var y,
                        b = d === v ? null : d;
                      r.viewedPost(e),
                        c === u &&
                          (t(jt()),
                          Object(H.a)(function () {
                            return t($t());
                          })),
                        F.a.pageview(
                          ((y = {
                            post_id: e,
                            parent_post_id: h,
                            prev_path: b,
                            current_path: v,
                            is_sensitive: m,
                            type: f,
                            interaction: o,
                            zipper_depth: _.depth,
                            zipper_root: _.root,
                            zipper_referrer: _.referrer,
                            zipper_id: _.id,
                          }),
                          Object.keys(y).reduce(function (e, t) {
                            var n = y[t];
                            return null == n ? e : ((e[t] = n), e);
                          }, {}))
                        ),
                        window.SPR && window.SPR.stop && window.SPR.stop();
                    }
                  })
                ),
                  m()(h()(t.prototype), "activate", this).call(this),
                  this.enqueueRender(function () {
                    if (n.postAsset) n.postAsset.set("active", !0);
                    else {
                      var e = new XMLHttpRequest();
                      e.open("POST", "/_jserror/custom", !0),
                        e.setRequestHeader(
                          "Content-Type",
                          "application/json;charset=UTF-8"
                        ),
                        e.send(
                          JSON.stringify({
                            module: "PostPage",
                            function: "activate",
                            postAsset: n.postAsset,
                          })
                        );
                    }
                    n.loadExternalEmbeds();
                  }),
                  this.enqueueRender(function () {
                    n.$$("img.lazy")
                      .map(function (e) {
                        var t = e.dataset;
                        return { $el: e, src: t.src, srcset: t.srcset };
                      })
                      .forEach(function (e) {
                        (e.$el.src = e.src),
                          (e.$el.srcset = e.srcset),
                          e.$el.classList.remove("lazy");
                      });
                  });
              },
            },
            {
              key: "deactivate",
              value: function () {
                if (
                  (m()(h()(t.prototype), "deactivate", this).call(this),
                  this.postAsset)
                )
                  this.postAsset.set("active", !1);
                else {
                  var e = new XMLHttpRequest();
                  e.open("POST", "/_jserror/custom", !0),
                    e.setRequestHeader(
                      "Content-Type",
                      "application/json;charset=UTF-8"
                    ),
                    e.send(
                      JSON.stringify({
                        module: "PostPage",
                        function: "deactivate",
                        postAsset: this.postAsset,
                      })
                    );
                }
              },
            },
          ]),
          t
        );
      })(r.b),
      Ye = 9 / 16,
      He = 1.5;
    function Fe(e) {
      var t = window.innerHeight,
        n = window.innerWidth,
        i = n / t,
        r = I.c ? Ye : He,
        a = i < r;
      Object(_.a)(function () {
        a
          ? (function (e, t, n) {
              var i = t,
                r = t / n;
              Object(se.c)(e, "width", Object(se.a)(i)),
                Object(se.c)(e, "height", Object(se.a)(r));
            })(e, n, r)
          : (function (e, t, n) {
              var i = t,
                r = t * n;
              Object(se.c)(e, "width", Object(se.a)(r)),
                Object(se.c)(e, "height", Object(se.a)(i));
            })(e, t, r);
      });
    }
    var Ue = (function (e) {
        function t(e) {
          var n;
          return (
            o()(this, t),
            ((n = l()(this, h()(t).call(this, e))).setSceneSize = function () {
              Fe(n.$element);
            }),
            (n.setSceneSize = Object(he.a)(n.setSceneSize, 30)),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  this.setSceneSize(),
                  window.addEventListener("resize", this.setSceneSize);
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  window.removeEventListener("resize", this.setSceneSize);
              },
            },
          ]),
          t
        );
      })(r.b),
      Ve = n(48);
    function Xe(e) {
      return e.playbackRate > 0 ? e.play() : e.reverse();
    }
    function We(e) {
      e.playbackRate > 0 ? e.reverse() : e.play();
    }
    var Je = 666,
      Qe = 600,
      Ze = { duration: Qe, fill: "both", easing: "ease-in-out" };
    function Ge(e) {
      return {
        element: e,
        keyframes: [
          { transform: "translateY(5vh)", opacity: "0" },
          { transform: "translateY(0)", opacity: "1" },
        ],
        options: Ze,
        triggered: !0,
      };
    }
    function Ke(e) {
      return {
        element: e,
        keyframes: [{ opacity: "0" }, { opacity: "1" }],
        options: Ze,
        triggered: !0,
      };
    }
    function et(e) {
      return {
        element: e,
        keyframes: [{ opacity: "1" }, { opacity: "0" }],
        options: Ze,
        triggered: !0,
      };
    }
    var tt = (function (e) {
        function t(e, i) {
          var r, a, s;
          return (
            o()(this, t),
            ((r = l()(this, h()(t).call(this, e))).handleOnPress = function () {
              (r.hasMovedX = !1),
                r.scenesWithAnimations.forEach(function (e) {
                  var t = e.animation;
                  e.triggered && t.pause();
                });
            }),
            (r.handleOnMove = function (e, t) {
              e.preventDefault();
              var n = t.y;
              r.scenesWithAnimations.forEach(function (e) {
                var t = e.animation;
                e.triggered &&
                  (function (e, t, n) {
                    e.currentTime + t < 0
                      ? (e.currentTime = 0)
                      : e.currentTime + t > n
                      ? (e.currentTime = n)
                      : (e.currentTime += t);
                  })(t, -2 * n, Qe);
              });
            }),
            (r.handleOnRelease = function (e, t, n, i) {
              var a = n.x,
                o = n.y,
                s = i.y;
              r.scenesWithAnimations.forEach(function (e) {
                var t = e.animation;
                e.triggered &&
                  (Math.abs(a) > 150 && (r.hasMovedX = !0),
                  (function (e) {
                    return e.currentTime <= 0;
                  })(t) ||
                    (function (e, t) {
                      return e.currentTime >= t;
                    })(t, Qe) ||
                    (Math.abs(o) > 60
                      ? s < 0
                        ? Xe(t)
                        : We(t)
                      : s < 0
                      ? We(t)
                      : Xe(t)));
              });
            }),
            (r.handleAnimationComplete = function (e) {
              e.target.pause();
            }),
            (r.subscriber = null),
            (r.hasMovedX = !1),
            (r.analyticsAnimation = null),
            (r.scene =
              ((a = r.$element),
              81 === (s = i.creative_id)
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="cup"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0vh)" },
                        {
                          transform: "translateY(".concat(
                            Object(se.e)(206 / Je),
                            ")"
                          ),
                        },
                      ],
                      options: Ze,
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="boat"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0vh)" },
                        {
                          transform: "translateY(".concat(
                            Object(se.e)(206 / Je),
                            ")"
                          ),
                        },
                      ],
                      options: Ze,
                      triggered: !0,
                    },
                    Ge(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : 82 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="barrel"]'
                      ),
                      keyframes: [
                        { transform: "scale(1) translateY(0%)" },
                        { transform: "scale(1.1875) translateY(25.2252252vh)" },
                      ],
                      options: T()({ easing: "ease-in" }, Ze),
                      triggered: !0,
                    },
                    Ge(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : 83 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="left-bird"]'
                      ),
                      keyframes: [
                        { transform: "rotateZ(0)" },
                        { transform: "rotateZ(90deg)" },
                      ],
                      options: T()({ easing: "ease-in" }, Ze),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-bird"]'
                      ),
                      keyframes: [
                        { transform: "rotateZ(0)" },
                        { transform: "rotateZ(130deg)" },
                      ],
                      options: T()({ easing: "ease-in" }, Ze),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="left-bird-shadow"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)", opacity: "1" },
                        { transform: "translateX(-60vw)", opacity: "0" },
                      ],
                      options: T()({}, Ze, { easing: "ease-in" }),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-bird-shadow"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)", opacity: "1" },
                        { transform: "translateX(-80vw)", opacity: "0" },
                      ],
                      options: T()({}, Ze, { easing: "ease-in" }),
                      triggered: !0,
                    },
                    Ge(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : 84 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="left-hand"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)" },
                        { transform: "translateX(-40vw)" },
                        { transform: "translateX(-40vw)" },
                      ],
                      options: T()({ easing: "ease-in-out" }, Ze),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-hand"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)" },
                        { transform: "translateX(30vw)" },
                        { transform: "translateX(30vw)" },
                      ],
                      options: T()({ easing: "ease-in-out" }, Ze),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-hand-shadow"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0) translateY(0)" },
                        { transform: "translateX(30vw) translateY(-5vh)" },
                        { transform: "translateX(30vw) translateY(-5vh)" },
                      ],
                      options: T()({ easing: "ease-in-out" }, Ze),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      ),
                      keyframes: [
                        { transform: "translateY(5vh)", opacity: "0" },
                        { transform: "translateY(5vh)", opacity: "0" },
                        { transform: "translateY(0)", opacity: "1" },
                      ],
                      options: Ze,
                      triggered: !0,
                    },
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : 85 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="man"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0)" },
                        {
                          transform: "translateY(".concat(
                            Object(se.e)(187 / Je),
                            ")"
                          ),
                        },
                      ],
                      options: T()({ easing: "ease-in-out" }, Ze),
                      triggered: !0,
                    },
                    Ge(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : 94 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="bottle"]'
                      ),
                      keyframes: [
                        { transform: "scale(1)" },
                        { transform: "scale(1.527577938)" },
                      ],
                      options: Ze,
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="bottle-lighting"]'
                      ),
                      keyframes: [
                        { transform: "scale(1)", opacity: "1" },
                        { transform: "scale(1.527577938)", opacity: "0" },
                      ],
                      options: Ze,
                      triggered: !0,
                    },
                    Ke(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : 95 === s
                ? [
                    {
                      element: a.querySelector(".macdongle__background--pre"),
                      keyframes: [{ opacity: "1" }, { opacity: "0" }],
                      options: Ze,
                      triggered: !0,
                    },
                    Ke(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                    et(a.querySelector(".macdongle__cta")),
                  ]
                : [])),
            n.e("vendors~web-animations").then(n.t.bind(null, 69, 7)),
            r
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.$scroller = this.$(".macdongle__scroller"));
                var n = !1;
                (this.scenesWithAnimations = this.scene.map(function (t) {
                  var i = t.element,
                    r = t.keyframes,
                    a = t.options,
                    o = t.triggered;
                  if (i) {
                    var s = !1,
                      c = i.animate(r, a);
                    return (
                      o && c.pause(),
                      o &&
                        !n &&
                        ((n = c),
                        (s = !0),
                        c.addEventListener(
                          "finish",
                          e.handleAnimationComplete
                        )),
                      {
                        element: i,
                        keyframes: r,
                        triggered: o,
                        animation: c,
                        isAnalyticsAnimation: s,
                      }
                    );
                  }
                  console.warn("No element found for animation");
                })),
                  (this.subscriber = new Ve.a(this.$scroller)
                    .onPress(this.handleOnPress)
                    .onMove(this.handleOnMove)
                    .onRelease(this.handleOnRelease));
              },
            },
            {
              key: "deactivate",
              value: function () {
                m()(h()(t.prototype), "deactivate", this).call(this),
                  (this.hasMovedX = !1),
                  this.scenesWithAnimations.forEach(function (e) {
                    var t = e.animation;
                    e.triggered && (t.pause(), (t.currentTime = 0));
                  });
              },
            },
            {
              key: "unmount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.scenesWithAnimations.forEach(function (t) {
                    var n = t.animation;
                    t.isAnalyticsAnimation &&
                      n.removeEventListener(
                        "finish",
                        e.handleAnimationComplete
                      );
                  }),
                  this.subscriber && this.subscriber.destroy();
              },
            },
          ]),
          t
        );
      })(r.b),
      nt = 960,
      it = { duration: 1400, fill: "both", easing: "ease-in-out" };
    function rt(e) {
      return {
        element: e,
        keyframes: [
          { transform: "translateY(15vh)", opacity: "0" },
          { transform: "translateY(0)", opacity: "1" },
        ],
        options: it,
        triggered: !0,
      };
    }
    function at(e) {
      return {
        element: e,
        keyframes: [{ opacity: "0" }, { opacity: "1" }],
        options: it,
        triggered: !0,
      };
    }
    var ot = 500,
      st = (function (e) {
        function t(e, i) {
          var r, a, s;
          return (
            o()(this, t),
            ((r = l()(this, h()(t).call(this, e))).handleOnEnter = function () {
              Object(_.a)(function () {
                (r.hovering = !0), (r.$element.dataset.hover = !0);
              }),
                setTimeout(function () {
                  Object(_.a)(function () {
                    r.hovering &&
                      ((r.animating = !0),
                      (r.$element.dataset.animating = !0),
                      r.scenesWithAnimations.forEach(function (e) {
                        var t = e.animation;
                        e.triggered && Xe(t);
                      }));
                  });
                }, ot);
            }),
            (r.handleOnLeave = function () {
              Object(_.a)(function () {
                r.scenesWithAnimations.forEach(function (e) {
                  var t = e.animation;
                  e.triggered && r.animating && We(t);
                }),
                  (r.hovering = !1),
                  (r.$element.dataset.hover = !1),
                  (r.animating = !1),
                  (r.$element.dataset.animating = !1);
              }, ot);
            }),
            (r.handleAnimationComplete = function (e) {
              e.target.currentTime;
            }),
            (r.hovering = !1),
            (r.animating = !1),
            (r.scene =
              ((a = r.$element),
              81 === (s = i.creative_id)
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="cup"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0vh)" },
                        {
                          transform: "translateY(".concat(
                            Object(se.e)(415 / nt),
                            ")"
                          ),
                        },
                      ],
                      options: it,
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="boat"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0vh)" },
                        {
                          transform: "translateY(".concat(
                            Object(se.e)(415 / nt),
                            ")"
                          ),
                        },
                      ],
                      options: it,
                      triggered: !0,
                    },
                    rt(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : 82 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="barrel"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0%)" },
                        { transform: "translateY(36.4583333vh)" },
                      ],
                      options: T()({}, it, { easing: "ease-out" }),
                      triggered: !0,
                    },
                    rt(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : 83 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="left-bird"]'
                      ),
                      keyframes: [
                        { transform: "rotateZ(0)" },
                        { transform: "rotateZ(90deg)" },
                      ],
                      options: T()({}, it, { easing: "ease-in" }),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-bird"]'
                      ),
                      keyframes: [
                        { transform: "rotateZ(0)" },
                        { transform: "rotateZ(130deg)" },
                      ],
                      options: T()({}, it, { easing: "ease-in" }),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="left-bird-shadow"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)", opacity: "1" },
                        { transform: "translateX(-60vw)", opacity: "0" },
                      ],
                      options: T()({}, it, { easing: "ease-in" }),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-bird-shadow"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)", opacity: "1" },
                        { transform: "translateX(-80vw)", opacity: "0" },
                      ],
                      options: T()({}, it, { easing: "ease-in" }),
                      triggered: !0,
                    },
                    rt(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : 84 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="left-hand"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0)" },
                        { transform: "translateX(-33vw)" },
                      ],
                      options: T()({}, it, { easing: "ease-out" }),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-hand"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0) translateY(0)" },
                        { transform: "translateX(30vw) translateY(-5vh)" },
                      ],
                      options: T()({}, it, { easing: "ease-out" }),
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="right-hand-shadow"]'
                      ),
                      keyframes: [
                        { transform: "translateX(0) translateY(0)" },
                        { transform: "translateX(30vw) translateY(-18vh)" },
                      ],
                      options: T()({}, it, { easing: "ease-out" }),
                      triggered: !0,
                    },
                    rt(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : 85 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="man"]'
                      ),
                      keyframes: [
                        { transform: "translateY(0vh)" },
                        {
                          transform: "translateY(".concat(
                            Object(se.e)(267 / nt),
                            ")"
                          ),
                        },
                      ],
                      options: it,
                      triggered: !0,
                    },
                    rt(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : 94 === s
                ? [
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="bottle"]'
                      ),
                      keyframes: [
                        { transform: "scale(1)" },
                        { transform: "scale(1.516666667)" },
                      ],
                      options: it,
                      triggered: !0,
                    },
                    {
                      element: a.querySelector(
                        '.macdongle__scene__image[data-label="bottle-lighting"]'
                      ),
                      keyframes: [
                        { transform: "scale(1)", opacity: "1" },
                        { transform: "scale(1.516666667)", opacity: "0" },
                      ],
                      options: it,
                      triggered: !0,
                    },
                    at(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : 95 === s
                ? [
                    {
                      element: a.querySelector(".macdongle__background--pre"),
                      keyframes: [{ opacity: "1" }, { opacity: "0" }],
                      options: it,
                      triggered: !0,
                    },
                    at(
                      a.querySelector(
                        '.macdongle__scene__image[data-label="text"]'
                      )
                    ),
                  ]
                : [])),
            n.e("vendors~web-animations").then(n.t.bind(null, 69, 7)),
            r
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.$hover = this.$(".macdongle__hover")),
                  this.$hover.addEventListener(
                    "mouseenter",
                    this.handleOnEnter
                  ),
                  this.$hover.addEventListener(
                    "mouseleave",
                    this.handleOnLeave
                  );
                var n = !1;
                this.scenesWithAnimations = this.scene.map(function (t) {
                  var i = t.element,
                    r = t.keyframes,
                    a = t.options,
                    o = t.triggered;
                  if (i) {
                    var s = !1,
                      c = i.animate(r, a);
                    return (
                      o && c.pause(),
                      o &&
                        !n &&
                        ((n = c),
                        (s = !0),
                        c.addEventListener(
                          "finish",
                          e.handleAnimationComplete
                        )),
                      {
                        element: i,
                        keyframes: r,
                        triggered: o,
                        animation: c,
                        isAnalyticsAnimation: s,
                      }
                    );
                  }
                  console.warn("No element found for animation");
                });
              },
            },
            {
              key: "unmount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$hover.removeEventListener(
                    "mouseenter",
                    this.handleOnEnter
                  ),
                  this.$hover.removeEventListener(
                    "mouseleave",
                    this.handleOnLeave
                  ),
                  this.scenesWithAnimations.forEach(function (t) {
                    var n = t.animation;
                    t.isAnalyticsAnimation &&
                      n.removeEventListener(
                        "finish",
                        e.handleAnimationComplete
                      );
                  });
              },
            },
          ]),
          t
        );
      })(r.b),
      ct = "gs-transition-out";
    var ut = (function (e) {
        function t() {
          var e, n;
          o()(this, t);
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          return (
            ((n = l()(
              this,
              (e = h()(t)).call.apply(e, [this].concat(r))
            )).onClick = function (e) {
              e.preventDefault(), n.navigateToInteractive();
            }),
            (n.resetTransitionOut = function () {
              Object(_.a)(function () {
                n.__dragger.resetPosition(),
                  n.$siteNavItems.forEach(function (e) {
                    e.classList.remove(ct);
                  }),
                  n.$pathProgress.classList.remove(ct),
                  n.$element.classList.remove(ct);
              });
            }),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "navigateToInteractive",
              value: function () {
                var e = this;
                setTimeout(function () {
                  var t, n;
                  document.location =
                    ((t = e.iframeSrc),
                    (n = I.b ? "mobile" : "desktop"),
                    "".concat(t, "&layout=").concat(n));
                }, 300);
              },
            },
            {
              key: "setTransitionOut",
              value: function () {
                var e = this;
                Object(_.a)(function () {
                  e.$siteNavItems.forEach(function (e) {
                    e.classList.add(ct);
                  }),
                    e.$pathProgress.classList.add(ct),
                    e.$element.classList.add(ct);
                });
              },
            },
            {
              key: "setupDragger",
              value: function () {
                var e = this,
                  t = this.$(".bilz-dongle__wrapper"),
                  n = this.rect().height;
                this.__dragger = new x.a(t, {
                  draggableElement: t,
                  draggableAxis: Object(x.c)(),
                })
                  .roundValue(function (e) {
                    var t = e.x,
                      i = e.y,
                      r = Math.floor((i + n / 2) / n);
                    return Object($.i)(t, r * n);
                  })
                  .imposeBounds(function (e) {
                    var t = e.x,
                      i = e.y,
                      r = -n,
                      a = i;
                    return (
                      (a = Math.min(0, a)),
                      (a = Math.max(r, a)),
                      Object($.i)(t, a)
                    );
                  })
                  .onMoveEnd(function (t, n) {
                    n.y < 0
                      ? (e.setTransitionOut(), e.navigateToInteractive())
                      : e.resetTransitionOut();
                  });
              },
            },
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  (this.iframeSrc = this.dom().dataset.src),
                  (this.$siteNavItems = this.$$(".navigation__menu__item")),
                  (this.$pathProgress = this.$(".path__progress")),
                  I.b
                    ? this.setupDragger()
                    : this.raf(function () {
                        (e.$link = e.$(".bilz-dongle__link")),
                          e.$link.addEventListener("click", e.onClick);
                      }),
                  window.addEventListener("pagehide", this.resetTransitionOut);
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  this.$link &&
                    (this.$link.removeEventListener("click", this.onClick),
                    (this.$link = null)),
                  this.__dragger &&
                    (this.__dragger.destroy(), (this.__dragger = null)),
                  window.removeEventListener(
                    "pagehide",
                    this.resetTransitionOut
                  );
              },
            },
          ]),
          t
        );
      })(r.b),
      lt = (function (e) {
        function t(e) {
          var n;
          return (
            o()(this, t),
            (n = l()(this, h()(t).call(this, e))).$element.dataset.device
              ? ((n.src = n.$element.dataset.src),
                (n.breakpoint = n.getBreakpoint()),
                (n.setSrc = n.setSrc.bind(Z()(n))),
                (n.setSrcDebounced = Object(he.a)(n.setSrc, 30)),
                n)
              : l()(n)
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "getBreakpoint",
              value: function () {
                return "mobile" === this.$element.dataset.device
                  ? "mobile"
                  : "desktop";
              },
            },
            {
              key: "setSrc",
              value: function () {
                var e = this;
                Object(_.a)(function () {
                  var t = window.innerWidth,
                    n = t < 960 && "mobile" === e.breakpoint,
                    i = t >= 960 && "desktop" === e.breakpoint;
                  (n || i) && e.$element.setAttribute("src", e.src);
                });
              },
            },
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  window.addEventListener("resize", this.setSrc),
                  this.setSrc();
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  window.removeEventListener("resize", this.setSrc);
              },
            },
          ]),
          t
        );
      })(r.b),
      dt = (function (e) {
        function t(e) {
          var n,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          o()(this, t),
            ((n = l()(this, h()(t).call(this, e))).trackClick = function (e) {
              F.a.track("micro_click", {
                campaign_id: n.campaign_id,
                creative_id: n.creative_id,
                atom_id: n.atom_id,
                url: e.currentTarget.href,
              });
            }),
            (n.analyticsEvent = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = T()({}, t, {
                  campaign_id: n.campaign_id,
                  creative_id: n.creative_id,
                  atom_id: n.atom_id,
                });
              F.a.track(e, i).attachPixels(n.pixels[e]);
            });
          var r = i.id,
            a = void 0 === r ? null : r,
            s = i.campaign_id,
            c = i.creative_id,
            u = i.atom_id,
            d = i.pixels,
            v = i.server;
          return (
            (n.id = a),
            (n.campaign_id = s),
            (n.creative_id = c),
            (n.atom_id = u),
            (n.isActive = !1),
            (n.server = v),
            (n.pixels = d),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "loadPushpopEmbeds",
              value: function () {
                var e = this;
                this.$$(".pushpop-embed-data").forEach(function (t) {
                  var n = N.a.jsonTag(t),
                    i = n.behaviour,
                    r = n.id,
                    a = n.state,
                    o = { $element: e.$("#".concat(r)), id: r };
                  (a.parent_id = e.id),
                    (a.fireEvent = e.analyticsEvent),
                    Object(R.d)(i, e.id, o, a);
                });
              },
            },
            {
              key: "initializeAdSubscriptionAsset",
              value: function () {
                var e = this.$element,
                  t = {
                    rect: this.rect(),
                    el: e,
                    active: !1,
                    isSwipeNavigation: I.a,
                    scrollParent: this.scrollParent(),
                  },
                  n = new R.a({ id: "__POST__", $element: e }, t);
                n.subscribe(Object(R.b)(), this.id), (this.postAsset = n);
              },
            },
            {
              key: "timeInView",
              value: function () {
                return this.activateTime
                  ? (Date.now() - this.activateTime) / 1e3
                  : 0;
              },
            },
            {
              key: "activate",
              value: function () {
                var e, n, i, a, o;
                (this.isActive = !0),
                  this.postAsset.set("active", !0),
                  (this.activateTime = Date.now()),
                  r.b.dispatch(
                    ((e = {
                      id: this.id,
                      campaign_id: this.campaign_id,
                      creative_id: this.creative_id,
                      atom_id: this.atom_id,
                      analyticsDispatcher: this.analyticsEvent,
                    }),
                    (n = e.campaign_id),
                    (i = e.creative_id),
                    (a = e.atom_id),
                    (o = e.analyticsDispatcher),
                    function (e, t) {
                      var r = t(),
                        s = r.channel,
                        c = r.current,
                        u = r.direction,
                        l = r.enabled,
                        d = r.hydrationLocation,
                        h = r.location,
                        v = r.zipper_id,
                        m = c.path,
                        f = c.title;
                      if (l) {
                        var p = Object(V.a)(),
                          g = X(v, p);
                        Tt(m, f, p, g),
                          h === d &&
                            (e(jt()),
                            Object(H.a)(function () {
                              return e($t());
                            })),
                          s.viewedBlackbird(n, i, a),
                          o("micro_enter", { interaction: u }),
                          Lt({ campaign_id: n, direction: u });
                      }
                    })
                  ),
                  m()(h()(t.prototype), "activate", this).call(this),
                  document.querySelector(".ge[data-campaign2='ge_1']") &&
                    document.body.classList.add("ge-ad-colors");
              },
            },
            {
              key: "scrollParent",
              value: function () {
                return I.a
                  ? this.$(".path__element__content")
                  : document.querySelector("path-plane");
              },
            },
            {
              key: "mount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "mount", this).call(this),
                  I.a &&
                    (this.scrollSubscriber = new g.a(this.scrollParent(), {
                      passive: !0,
                    }).onScroll(function () {
                      var t = P(e.scrollParent().firstElementChild);
                      e.postAsset && e.postAsset.set("rect", t);
                    })),
                  this.initializeAdSubscriptionAsset(),
                  this.loadPushpopEmbeds();
                var n = {
                  creative_id: this.creative_id,
                  campaign_id: this.campaign_id,
                };
                this.mountChildren(".macdongle--scene", function (e) {
                  return I.a ? new tt(e, n) : new st(e, n);
                }),
                  this.mountChild(".macdongle__scene", Ue),
                  this.mountChildren("img[data-device]", function (e) {
                    return new lt(e);
                  }),
                  this.mountChild(".post__card__share", Me),
                  this.mountChild(".bilz-dongle--iframe", ut),
                  this.$$("a").forEach(function (t) {
                    t.addEventListener("click", e.trackClick);
                  });
              },
            },
            {
              key: "deactivate",
              value: function () {
                if (this.isActive) {
                  var e = this.timeInView();
                  (this.activateTime = null),
                    r.b.dispatch(
                      (function (e) {
                        var t = e.campaign_id,
                          n = e.creative_id,
                          i = e.timeViewed;
                        return function (e, r) {
                          var a = r(),
                            o = a.direction;
                          F.a.track("micro_exit", {
                            campaign_id: t,
                            creative_id: n,
                            interaction: o,
                            time: i,
                          });
                        };
                      })({
                        campaign_id: this.campaign_id,
                        creative_id: this.creative_id,
                        server: this.server,
                        timeViewed: e,
                      })
                    ),
                    m()(h()(t.prototype), "deactivate", this).call(this),
                    this.postAsset.set("active", !1),
                    (this.isActive = !1),
                    document.body.classList.remove("ge-ad-colors");
                }
              },
            },
            {
              key: "unmount",
              value: function () {
                var e = this;
                m()(h()(t.prototype), "unmount", this).call(this),
                  Object(R.b)().unmountContext(this.id),
                  this.$$("a").forEach(function (t) {
                    t.removeEventListener("click", e.trackClick);
                  }),
                  this.$$(".psuedo-click").forEach(function (t) {
                    t.removeEventListener("click", e.trackPsuedoClick);
                  });
              },
            },
          ]),
          t
        );
      })(r.b);
    dt.index = 0;
    var ht = (function (e) {
        function t() {
          var e, n;
          o()(this, t);
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          return (
            ((n = l()(
              this,
              (e = h()(t)).call.apply(e, [this].concat(r))
            )).state = { posts: [] }),
            n
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                Object(ae.a)("/api/trail_card_items").then(function (t) {
                  if (200 === t.status)
                    return t.json().then(function (t) {
                      var n = t.posts;
                      return e.setState({ posts: n });
                    });
                });
              },
            },
            {
              key: "onSocialClick",
              value: function (e, t) {
                F.a.track("social_share", {
                  network: t,
                  location: "cardicle-trail-card",
                });
              },
            },
            {
              key: "onItemClick",
              value: function (e, t, n) {
                F.a.track("trail_card_item_click", {
                  link_path: t,
                  link_index: n,
                });
              },
            },
            {
              key: "getPostBackgroundImage",
              value: function (e) {
                return e.card.asset.background_image;
              },
            },
            {
              key: "getPostColorFilter",
              value: function (e) {
                return e.card.background_settings.color_filter;
              },
            },
            {
              key: "getPostFilterType",
              value: function (e) {
                return e.card.background_settings.filter_type;
              },
            },
            {
              key: "renderItem",
              value: function (e, t) {
                var n = this,
                  i = e.title,
                  r = e.description,
                  a = e.path,
                  o = this.getPostBackgroundImage(e),
                  s = this.getPostColorFilter(e),
                  c = this.getPostFilterType(e);
                return Object(U.h)(
                  "a",
                  {
                    className: "trail-card__item trail-card__item--other",
                    href: a,
                    "data-color-filter": s,
                    "data-filter-type": c,
                    onClick: function (e) {
                      return n.onItemClick(e, a, t + 1);
                    },
                  },
                  Object(U.h)(
                    "div",
                    { className: "trail-card__item__bg" },
                    this.renderImage(o)
                  ),
                  Object(U.h)(
                    "div",
                    { className: "trail-card__item__content" },
                    Object(U.h)(
                      "h2",
                      { className: "trail-card__item__headline" },
                      i
                    ),
                    Object(U.h)("p", { className: "trail-card__item__dek" }, r)
                  )
                );
              },
            },
            {
              key: "renderLeadItem",
              value: function (e) {
                var t = this,
                  n = e.title,
                  i = e.path,
                  r = e.share_data,
                  a = e.cardicle_count,
                  o = r.twitter_url,
                  s = r.facebook_url,
                  c = this.getPostBackgroundImage(e),
                  u = this.getPostColorFilter(e),
                  l = this.getPostFilterType(e);
                return Object(U.h)(
                  "a",
                  {
                    className: "trail-card__item trail-card__item--lead",
                    href: i,
                    "data-color-filter": u,
                    "data-filter-type": l,
                    onClick: function (e) {
                      return t.onItemClick(e, i, 0);
                    },
                  },
                  Object(U.h)(
                    "div",
                    { className: "trail-card__item__bg" },
                    this.renderImage(c)
                  ),
                  Object(U.h)(
                    "div",
                    { className: "trail-card__item__content" },
                    Object(U.h)(
                      "div",
                      { className: "trail-card__item__label" },
                      "Read again: ",
                      a,
                      " Cards"
                    ),
                    Object(U.h)(
                      "h2",
                      { className: "trail-card__item__headline" },
                      n
                    ),
                    Object(U.h)(
                      "div",
                      { className: "trail-card__item__share" },
                      Object(U.h)(
                        "div",
                        { className: "trail-card__item__share__outlets" },
                        Object(U.h)(
                          "a",
                          {
                            className: "trail-card__item__share__outlet",
                            href: o,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function (e) {
                              return t.onSocialClick(e, "twitter");
                            },
                          },
                          Object(U.h)("span", { className: "icon-twitter" })
                        ),
                        Object(U.h)(
                          "a",
                          {
                            className: "trail-card__item__share__outlet",
                            href: s,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function (e) {
                              return t.onSocialClick(e, "facebook");
                            },
                          },
                          Object(U.h)("span", { className: "icon-facebook" })
                        )
                      )
                    )
                  )
                );
              },
            },
            {
              key: "renderImage",
              value: function (e) {
                if (e) return Object(U.h)("img", { src: e, alt: "" });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.parent,
                  n = this.state.posts,
                  i = this.getPostColorFilter(t);
                return Object(U.h)(
                  "div",
                  {
                    className: "trail-card__wrapper",
                    "data-color-filter": i,
                    "data-loaded": n.length > 0 ? "true" : "false",
                  },
                  this.renderLeadItem(t),
                  Object(U.h)(
                    "div",
                    { className: "trail-card__items" },
                    n.map(function (t, n) {
                      return e.renderItem(t, n);
                    })
                  )
                );
              },
            },
          ]),
          t
        );
      })(U.Component),
      vt = (function (e) {
        function t(e, n) {
          var i,
            r = n.parent;
          return (
            o()(this, t),
            ((i = l()(this, h()(t).call(this, e))).$component = i.$(
              ".trail-card"
            )),
            (i.parentPost = r),
            i
          );
        }
        return (
          p()(t, e),
          c()(t, [
            {
              key: "mount",
              value: function () {
                m()(h()(t.prototype), "mount", this).call(this),
                  Object(U.render)(
                    Object(U.h)(ht, { parent: this.parentPost }),
                    this.$component,
                    this.$component.firstElementChild
                  );
              },
            },
            {
              key: "activate",
              value: function () {
                m()(h()(t.prototype), "activate", this).call(this),
                  F.a.track("trail_card_view");
              },
            },
            {
              key: "unmount",
              value: function () {
                m()(h()(t.prototype), "unmount", this).call(this),
                  Object(U.render)(
                    function () {
                      return null;
                    },
                    this.$component,
                    this.$component.firstElementChild
                  );
              },
            },
          ]),
          t
        );
      })(r.b);
    function mt() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    }
    var ft,
      pt,
      gt = "MOVE_NEXT",
      _t = "MOVE_PREVIOUS",
      yt = "MOVE_CURRENT",
      bt = "LOAD_PAGE_INTO_DOM",
      kt = "EXTEND_PATH",
      wt = "UPDATE_HYDRATION_LOCATION",
      Ot = "CREATE_JOURNEY_CHANNEL",
      St = 3;
    function jt() {
      return { type: wt };
    }
    function Pt(e) {
      var t = e.path;
      return function (e, n) {
        var i = n().sensitive,
          r = (function (e, t) {
            var n = mt();
            return e.reduce(function (e, i) {
              var r = "micronative" === i.content_type;
              return !((r && n) || (r && t)) && e.push(i), e;
            }, []);
          })(t, i);
        e({ type: kt, path: r }), e(Et()), e(Mt());
      };
    }
    function $t() {
      return function (e, t) {
        var n = t(),
          i = n.enabled,
          r = n.channel;
        if (i)
          return r.next().then(function (t) {
            return e(Pt(t));
          });
      };
    }
    function Et() {
      return function (e, t) {
        for (
          var n = t(), i = n.location, r = n.path, a = 0;
          a < St && i + a !== r.length;
          ++a
        ) {
          var o = r[i + a];
          if (!o.page) {
            var s = xt(o);
            e(At(i + a, T()({}, o, { page: s })));
          }
        }
      };
    }
    function xt(e) {
      return Ct(Object(oe.d)(Object(oe.b)(e.html), e.styles), e);
    }
    function Ct(e, t) {
      return new ((function (e) {
        var t = e.content_type;
        if ("micronative" === t) return dt;
        if ("trail-card" === t) return vt;
        return ze;
      })(t))(e, t);
    }
    function Mt() {
      return { type: yt };
    }
    function At(e, t) {
      return { type: bt, location: e, content: t };
    }
    function Lt(e) {
      var t = e.campaign_id;
      if ("previous" !== e.direction && [74, 75].includes(t)) {
        var n = location.protocol + "//" + location.host + location.pathname,
          i = (function (e, t) {
            return 74 === e
              ? {
                  pid: "5cb9f8028305fc6b901d862a",
                  title: "HPE In Your Court",
                  url: t,
                  date: "2019-06-03 12:00:00",
                  authors: ["HPE"],
                  channels: ["The Outline"],
                  tags: ["Content", "Sponsored"],
                  article_id: "in-your-court",
                  ignore_errors: !0,
                  manual_scroll_depth: !0,
                  ajax: !0,
                }
              : 75 === e
              ? {
                  pid: "5cb9f8028305fc6b901d862a",
                  title: "HPE On The Edge",
                  url: t,
                  date: "2019-09-10 12:00:00",
                  authors: ["HPE"],
                  channels: ["The Outline"],
                  tags: ["Content", "Sponsored"],
                  article_id: "on-the-edge",
                  ignore_errors: !0,
                  manual_scroll_depth: !0,
                  ajax: !0,
                }
              : void 0;
          })(t, n);
        if (window.SPR && window.SPR.Reach)
          setTimeout(function () {
            return window.SPR.Reach.collect(i);
          }, 1),
            F.a.track("simplereach_v1", {
              campaign_id: t,
              status: "success",
              type: "already_loaded",
            }),
            (function (e) {
              var t = e.campaign_id;
              if (![74, 75].includes(t)) return;
              window.__simplereach_quartiles =
                window.__simplereach_quartiles || {};
              var n = window.__simplereach_scroll_depth_count || 0;
              (n += 1), (window.__simplereach_scroll_depth_count = n);
              var i = 15;
              74 === t && (i = 15);
              75 === t && (i = 15);
              var r = n / i;
              !window.__simplereach_quartiles[25] &&
                r >= 0.25 &&
                ((window.__simplereach_quartiles[25] = !0),
                window.SPR.scrollDepthReached(25),
                F.a.track("simplereach_v1_quartile", { percent: 25 }));
              !window.__simplereach_quartiles[50] &&
                r >= 0.5 &&
                ((window.__simplereach_quartiles[50] = !0),
                window.SPR.scrollDepthReached(50),
                F.a.track("simplereach_v1_quartile", { percent: 50 }));
              !window.__simplereach_quartiles[75] &&
                r >= 0.75 &&
                ((window.__simplereach_quartiles[75] = !0),
                window.SPR.scrollDepthReached(75),
                F.a.track("simplereach_v1_quartile", { percent: 75 }));
              !window.__simplereach_quartiles[100] &&
                r >= 0.95 &&
                ((window.__simplereach_quartiles[100] = !0),
                window.SPR.scrollDepthReached(100),
                F.a.track("simplereach_v1_quartile", { percent: 100 }));
            })({ campaign_id: t });
        else {
          var r = document.createElement("script");
          (r.onload = function () {
            setTimeout(function () {
              return window.SPR.Reach.collect(i);
            }, 1),
              F.a.track("simplereach_v1", {
                campaign_id: t,
                status: "success",
                type: "first_load",
              });
          }),
            (r.onerror = function () {
              return F.a.track("simplereach_v1", {
                campaign_id: t,
                status: "fail",
              });
            }),
            (r.src = "https://d8rk54i4mohrb.cloudfront.net/js/reach.js"),
            document.body.appendChild(r);
        }
      }
    }
    function Tt(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "The Outline",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
      if (window.location.pathname !== e && e)
        (document.title = t), window.history.replaceState(null, null, e);
      else if (!document.referrer.match(window.location.hostname) && pt !== e) {
        var r = (function (e, t, n) {
          var i = T()({}, e, { zd: t, zi: n });
          return Object(V.b)(i);
        })(n, i.depth + 1, i.id);
        window.history.replaceState(null, null, "".concat(e, "?").concat(r)),
          (pt = e);
      }
    }
    Object(Y.a)(),
      Object(Y.b)(),
      Object(R.c)(),
      F.a.extraTrackingData({ navigation_type: I.a ? "touch" : "scroll" });
    var Dt = document.getElementById("path-state"),
      qt = Dt ? N.a.unescapeAndParse(Dt.innerHTML) : { data: { post: {} } };
    var Rt = [B.a],
      It = Object(i.c)(
        function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : D,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (
            (e.hydrated ||
              (e = (function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (e.path = e.path || []), T()({}, D, e);
              })(e)),
            t.type)
          ) {
            case "MOVE_CURRENT":
              var n = e,
                i = q(n.location, n.path),
                r = i.previous,
                a = i.current,
                o = i.next;
              return T()({}, e, { previous: r, current: a, next: o });
            case "MOVE_NEXT":
              var s = e,
                c = s.location,
                u = s.path;
              if (c >= u.length - 1) return T()({}, e);
              var l = c + 1,
                d = q(l, u),
                h = d.previous,
                v = d.current,
                m = d.next;
              return T()({}, e, {
                direction: "next",
                location: l,
                previous: h,
                current: v,
                next: m,
              });
            case "MOVE_PREVIOUS":
              var f = e,
                p = f.location,
                g = f.path;
              if (0 === p) return T()({}, e);
              var _ = p - 1,
                y = q(_, g),
                b = y.previous,
                k = y.current,
                w = y.next;
              return T()({}, e, {
                direction: "previous",
                location: _,
                previous: b,
                current: k,
                next: w,
              });
            case "LOAD_PAGE_INTO_DOM":
              var O = t.location,
                S = t.content,
                j = e.path;
              return (j[O] = S), T()({}, e, { path: j });
            case "EXTEND_PATH":
              var P = t.path,
                $ = void 0 === P ? [] : P,
                E = e.path.concat($);
              return T()({}, e, { hydrationLocation: E.length - 1, path: E });
            case "UPDATE_HYDRATION_LOCATION":
              var x = e.path;
              return T()({}, e, { hydrationLocation: x.length });
            case "CREATE_JOURNEY_CHANNEL":
              var C = t.channel;
              return T()({}, e, { channel: C });
            default:
              return T()({}, e);
          }
        },
        qt,
        i.a.apply(void 0, Rt)
      ),
      Nt = function () {
        return It.dispatch(
          (console.log("moveNext"),
          function (e) {
            e({ type: gt }), e(Et());
          })
        );
      },
      Bt = function () {
        return It.dispatch((console.log("movePrevious"), { type: _t }));
      };
    (window.__dispatchMoveNext = Nt),
      (window.__dispatchMovePrevious = Bt),
      (r.b.dispatch = It.dispatch);
    var zt = It.getState(),
      Yt = zt.type,
      Ht = zt.features;
    Object(z.a)(Ht), zt.enabled || F.a.disable();
    var Ft = document.querySelector("path-element");
    document.querySelector(".menu") &&
      new A.a(document.querySelector(".navigation"), {
        app: document.querySelector(".app"),
      }).dispatchMount();
    Object(H.a)(function () {
      var e = It.getState(),
        t = e.path,
        n = e.location,
        i = e.geo_location,
        r = t[n],
        a = r.content_type,
        o = r.id;
      It.dispatch(
        (function (e, t, n, i, r) {
          var a = new W.a({ features: e, type: t, id: n, geo_location: r });
          return (ft = a), { type: Ot, channel: a };
        })(Ht, a, o, 0, i)
      ),
        It.dispatch(
          (function (e, t) {
            return function (n, i) {
              var r = i().path[e],
                a = Ct(t, r);
              n(At(e, T()({}, r, { page: a })));
            };
          })(qt.location, Ft)
        ),
        "cardicle" === Yt &&
          It.dispatch(
            (function (e) {
              return function (t) {
                e.forEach(function (e, n) {
                  e.html && t(At(n, T()({}, e, { page: xt(e) })));
                });
              };
            })(qt.path)
          );
      It.dispatch(Mt());
      var s = It.getState(),
        c = s.current,
        u = s.previous,
        l = s.next,
        d = new (I.a ? C : E)({
          current: c,
          previous: u,
          next: l,
          dispatchMoveNext: Nt,
          dispatchMovePrevious: Bt,
        }),
        h = new M(document.querySelector(".path__progress"));
      It.subscribe(
        (function (e) {
          var t = e.path,
            n = e.pathProgress,
            i = It.getState();
          return function () {
            var e = It.getState(),
              r = e.location,
              a = i.location;
            if (r === a) {
              var o = e.previous,
                s = i.previous,
                c = e.next,
                u = i.next;
              (o === s && c === u) || t.updatePathItems(i, e);
            } else r < a ? t.movePrevious(i, e) : t.moveNext(i, e);
            n.update(e.location), (i = e);
          };
        })({ path: d, pathProgress: h })
      ),
        d.dispatchMount(),
        d.dispatchActivate();
    });
    var Ut = !1;
    !(function () {
      if (!Ut) {
        Ut = !0;
        var e = document.querySelector(".hpe__navigation");
        e &&
          n
            .e("hpe-menu")
            .then(n.bind(null, 67))
            .then(function (t) {
              var n = t.default,
                i = e.querySelector(".inner");
              i && Object(U.render)(Object(U.h)(n, null), e, i);
            });
      }
    })();
  },
});
