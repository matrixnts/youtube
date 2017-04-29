/*! magcore-app-youtube: v2.1.2 (webpack: v1.13.1) */ ! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";

    function i() {
        var e, t = -1 !== ["AuraHD2", "AuraHD3", "AuraHD8", "MAG254", "MAG275", "MAG276", "WR320"].indexOf(h.deviceModel());
        d.init([n(59), n(62), n(61), n(63), n(60)]), c.emit("ready"), d.pages.forEach(function(e) {
            e.emit("load")
        }), a = n(47), o = new(n(35))({
            $node: document.getElementById("exitMessage"),
            events: {
                keydown: function(e) {
                    e.code === u.ok ? c.quit() : e.code !== u.back && e.code !== u.exit || (e.stop = !0, o.$node.style.visibility = "hidden", s.focus())
                }
            }
        }), o.$body.classList.add("modalExit"), o.$node.style.visibility = "hidden", o.$header.innerHTML = gettext("Exit from app?"), o.$content.innerHTML = "", o.$footer.innerHTML = "", o.$content.appendChild(e = document.createElement("div")), e.innerText = gettext("Ok"), e.className = "btn confirm" + (t ? "" : " old"), o.$content.appendChild(e = document.createElement("div")), e.className = "btn back" + (t ? "" : " old"), e.innerText = gettext("Cancel"), o.$footer.innerHTML = "", d.navigate("pm"), window.volumeWidget.classList.add("ready"), l = n(8)
    }

    function r() {
        var e, t = !gSTB.GetStandByStatus(),
            n = gSTB.GetEnv(JSON.stringify({
                varList: ["standByMode"]
            }));
        try {
            n = JSON.parse(n).result
        } catch (i) {
            n = {
                standByMode: null
            }
        }
        return e = parseInt(n.standByMode, 10), gSTB.StandByMode !== e && (gSTB.StandByMode = e), 3 === e ? (gSTB.SetLedIndicatorMode(2), gSTB.StandBy(t), void gSTB.SetLedIndicatorMode(1)) : void(t ? (document.body.style.display = "none", gSTB.StandBy(t), gSTB.SetLedIndicatorMode(2), window.location = "") : (gSTB.StandBy(t), gSTB.SetLedIndicatorMode(1)))
    }
    var o, a, s, l, c = n(3),
        u = n(1),
        d = n(2),
        h = n(22),
        p = (n(7), n(19));
    c.quit = function() {
        h.saveUserData(p.settingsFile, JSON.stringify(c.settings)), c.player && c.player.stop(), window.parent !== window ? ("pp" === d.current.id && d.back(), c.hide()) : window.location.href = n(39)() || "file:///home/web/services.html"
    }, c.reload = function() {
        h.saveUserData(p.settingsFile, JSON.stringify(c.settings)), c.player.stop(), location.reload()
    }, c.addListeners({
        load: function() {
            var e, t = n(10),
                r = n(7);
            h.setVKButtonState(!1), h.setAppButtonState(!0), h.setServiceButtonState(!0);
            try {
                c.settings = JSON.parse(h.loadUserData(p.settingsFile))
            } catch (o) {
                c.settings = !1
            }
            c.settings || (c.settings = p.defaultSettings, h.saveUserData(p.settingsFile, JSON.stringify(c.settings)));
            for (e in p.defaultSettings) void 0 === c.settings[e] && (c.settings[e] = p.defaultSettings[e]);
            if (-1 === r.languages.indexOf(c.settings.keyboardLanguage) && (c.settings.keyboardLanguage = 0), c.params = n(67)(location.search.substring(1)), c.params.language && (c.settings.languageOverwrite = 1, c.settings.language = c.params.language), n(33).load({
                    name: c.settings.language
                }, function() {
                    c.languageIndex = t.languageIndex, c.settings.language = r.languages[c.languageIndex], document.documentElement.dir = r.directions[c.languageIndex], "rtl" === document.documentElement.dir && (u.left = 39, u.right = 37), i()
                }), c.settings.languageOverwrite) t.setLang(c.settings.language);
            else try {
                c.settings.language = JSON.parse(h.getEnv('{"varList":["language"]}')).result.language
            } finally {
                t.setLang(c.settings.language)
            }
            gSTB.SetInputLang(c.settings.language)
        },
        unload: function() {
            h.saveUserData(p.settingsFile, JSON.stringify(c.settings)), c.player && c.player.stop()
        },
        keydown: function(e) {
            if (e.code === u.exit) l && !l.visible ? (s = d.current.activeComponent, o.$node.style.visibility = "visible", o.focus()) : c.quit();
            else if (e.code === u.power) r();
            else if (a) switch (e.code) {
                case u.volumeUp:
                case u.volumeDown:
                case u.mute:
                    a.changeVolume(e.code)
            }
        },
        message: function(e) {
            "show" === e.message && c.show(), "exit" === e.message && stbWebWindow.close()
        }
    }), h.setNativeStringMode(!0)
}, function(e, t, n) {
    "use strict";
    e.exports = {
        back: 8,
        "delete": 46,
        channelPrev: 1009,
        channelNext: 9,
        ok: 13,
        exit: 27,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        volumeUp: 107,
        volumeDown: 109,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        refresh: 116,
        frame: 117,
        phone: 119,
        set: 120,
        tv: 121,
        menu: 122,
        web: 123,
        mic: 2032,
        rewind: 2066,
        forward: 2070,
        app: 2076,
        usbMounted: 2080,
        usbUnmounted: 2081,
        playPause: 2082,
        stop: 2083,
        power: 2085,
        record: 2087,
        info: 2089,
        mute: 2192,
        clock: 2032,
        audio: 2071,
        keyboard: 2076,
        space: 32
    }
}, function(e, t, n) {
    "use strict";
    var i, r = n(5);
    i = new r, i.current = null, i.history = [], i.pages = [], i.ids = {}, i.init = function(e) {
        var t, n, i;
        if (e) {
            for (this.pages = [], this.pages = e, t = 0, n = e.length; n > t; t++) i = e[t], this.ids[i.id] = i, i.active && (this.current = i);
            return this.events.init && this.emit("init", {
                pages: e
            }), !0
        }
        return !1
    }, i.parse = function(e) {
        var t = {
            name: "",
            data: []
        };
        return t.data = e.split("/").map(decodeURIComponent), t.name = t.data.shift().slice(1), t
    }, i.stringify = function(e, t) {
        return t = Array.isArray(t) ? t : [], e = encodeURIComponent(e), t = t.map(encodeURIComponent), t.unshift(e), t.join("/")
    }, i.show = function(e, t) {
        return e && !e.active ? (e.$node.classList.add("active"), e.active = !0, this.current = e, e.events.show && e.emit("show", {
            page: e,
            data: t
        }), !0) : !1
    }, i.hide = function(e) {
        return e && e.active ? (e.$node.classList.remove("active"), e.active = !1, this.current = null, e.events.hide && e.emit("hide", {
            page: e
        }), !0) : !1
    }, i.navigate = function(e, t) {
        var n = this.current,
            i = this.ids[e];
        return i && !i.active ? (location.hash = this.stringify(e, t), this.hide(this.current), this.show(i, t), this.events.navigate && this.emit("navigate", {
            from: n,
            to: i
        }), this.history.push(i), !0) : !1
    }, i.back = function() {
        var e, t;
        return this.history.length > 1 && (e = this.history.pop(), t = this.history[this.history.length - 1], t && !t.active) ? (location.hash = t.id, this.hide(this.current), this.show(t), this.events.navigate && this.emit("navigate", {
            from: e,
            to: t
        }), !0) : !1
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var i, r, o, a = n(64),
        s = n(2),
        l = n(1),
        c = n(36),
        u = {};
    n(66), window.localStorage = window.parent.localStorage || window.parent.stbStorage, window.core = window.parent.core, window.parent && window.parent.gSTB && (window.dvbManager = window.parent.dvbManager, window.epgManager = window.parent.epgManager, window.gSTB = window.parent.gSTB, window.pvrManager = window.parent.pvrManager, window.stbDownloadManager = window.parent.stbDownloadManager, window.stbStorage = window.parent.stbStorage, window.stbUpdate = window.parent.stbUpdate, window.stbUPnP = window.parent.stbUPnP, window.stbWebWindow = window.parent.stbWebWindow, window.stbWindowMgr = window.parent.stbWindowMgr, window.timeShift = window.parent.timeShift), i = new a({
        debug: !1,
        host: !0,
        screen: null,
        time: {
            init: +new Date,
            load: 0,
            done: 0
        }
    }), i.setScreen = function(e) {
        return e ? (e.availHeight = e.height - (e.availTop + e.availBottom), e.availWidth = e.width - (e.availLeft + e.availRight), window.moveTo(0, 0), window.resizeTo(e.width, e.height), o && o instanceof HTMLLinkElement && document.head.removeChild(o), o = document.createElement("link"), o.rel = "stylesheet", o.href = "css/release." + e.height + ".css?" + +new Date, document.head.appendChild(o), this.data.metrics = e, !0) : !1
    }, i.EVENT_END_OF_FILE = 1, i.EVENT_GET_MEDIA_INFO = 2, i.EVENT_PLAYBACK_BEGIN = 4, i.EVENT_CONTENT_ERROR = 5, i.EVENT_DUAL_MONO_DETECT = 6, i.EVENT_INFO_GET = 7, i.EVENT_SUBTITLE_LOAD_ERROR = 8, i.EVENT_SUBTITLE_FIND = 9, i.EVENT_HDMI_CONNECT = 32, i.EVENT_HDMI_DISCONNECT = 33, i.EVENT_RECORD_FINISH_SUCCESSFULL = 34, i.EVENT_RECORD_FINISH_ERROR = 35, i.EVENT_DVB_SCANING = 40, i.EVENT_DVB_FOUND = 41, i.EVENT_DVB_CHANELL_EPG_UPDATE = 42, i.EVENT_DVB_ANTENNA_OFF = 43, i.setScreen(c[screen.height] || c[720]);
    for (r in l) "volumeUp" !== r && "volumeDown" !== r && (u[l[r]] = !0);
    i.defaultEvents = {
        load: function(e) {
            i.data.time.load = e.timeStamp, i.events[e.type] && i.emit(e.type, e), s.pages.forEach(function(t) {
                t.events[e.type] && t.emit(e.type, e)
            }), i.data.time.done = +new Date, i.events.done && i.emit("done", e)
        },
        unload: function(e) {
            i.events[e.type] && i.emit(e.type, e), s.pages.forEach(function(t) {
                t.events[e.type] && t.emit(e.type, e)
            })
        },
        error: function(e) {},
        keydown: function(e) {
            var t, n = s.current,
                r = {
                    keyCode: e.keyCode,
                    stop: e.stop,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    type: e.type,
                    "native": e
                };
            if (0 !== r.keyCode) {
                if (r.code = r.keyCode, r.shiftKey && (r.code += 1e3), r.altKey && (r.code += 2e3), !n) return void i.emit(r.type, r);
                t = n.activeComponent, t && t !== n && (t.events[r.type] && t.emit(r.type, r), !r.stop && t.propagate && t.parent && t.parent.events[r.type] && t.parent.emit(r.type, r)), r.stop || (n.events[r.type] && n.emit(r.type, r), r.stop || i.events[r.type] && i.emit(r.type, r)), !i.data.host && u[r.code] && e.preventDefault()
            }
        },
        keypress: function(e) {
            var t = s.current;
            t.activeComponent && t.activeComponent !== t && t.activeComponent.events[e.type] && t.activeComponent.emit(e.type, e)
        },
        click: function(e) {},
        contextmenu: function(e) {
            e.preventDefault()
        },
        mousewheel: function(e) {
            var t = s.current;
            t.activeComponent && t.activeComponent !== t && t.activeComponent.events[e.type] && t.activeComponent.emit(e.type, e), e.stop || t.events[e.type] && t.emit(e.type, e)
        }
    };
    for (r in i.defaultEvents) window.addEventListener(r, i.defaultEvents[r]);
    i.show = function() {
        this.events.show && this.emit("show"), core.call("show")
    }, i.hide = function() {
        this.events.hide && this.emit("hide"), core.call("hide")
    }, i.exit = function() {
        this.events.hide && this.emit("hide"), core.call("exit")
    }, window.stbEvent = {}, window.stbEvent.onEvent = function(e, t) {
        if (Array.prototype.forEach.call(window.frames, function(n) {
                n.stbEvent && n.stbEvent.onEvent && n.stbEvent.onEvent(e, t)
            }), i.events.media) {
            if (t) try {
                t = JSON.parse(t)
            } catch (n) {}
            i.emit("media", {
                code: parseInt(e, 10),
                info: t
            })
        }
    }, window.stbEvent.onBroadcastMessage = function(e, t, n) {
        Array.prototype.forEach.call(window.frames, function(i) {
            i.stbEvent && i.stbEvent.onBroadcastMessage && i.stbEvent.onBroadcastMessage(e, t, n)
        }), i.events.message && i.emit("message", {
            broadcast: !0,
            windowId: e,
            message: t,
            data: n
        })
    }, window.stbEvent.onMessage = function(e, t, n) {
        Array.prototype.forEach.call(window.frames, function(i) {
            i.stbEvent && i.stbEvent.onMessage && i.stbEvent.onMessage(e, t, n)
        }), i.events.message && i.emit("message", {
            broadcast: !1,
            windowId: e,
            message: t,
            data: n
        })
    }, window.stbEvent.onMount = function(e) {
        Array.prototype.forEach.call(window.frames, function(t) {
            t.stbEvent && t.stbEvent.onMount && t.stbEvent.onMount(e)
        }), i.events["device:mount"] && i.emit("device:mount", {
            state: e
        })
    }, window.stbEvent.onMediaAvailable = function(e, t) {
        Array.prototype.forEach.call(window.frames, function(n) {
            n.stbEvent && n.stbEvent.onMediaAvailable && n.stbEvent.onMediaAvailable(e, t)
        }), i.events["media:available"] && i.emit("media:available", {
            mime: e,
            url: t
        })
    }, window.stbEvent.onNetworkStateChange = function(e) {
        i.events["internet:state"] && i.emit("internet:state", {
            state: e
        })
    }, window.stbEvent.onWebBrowserProgress = function(e) {
        Array.prototype.forEach.call(window.frames, function(t) {
            t.stbEvent && t.stbEvent.onWebBrowserProgress && t.stbEvent.onWebBrowserProgress(e)
        }), i.events["browser:progress"] && i.emit("browser:progress", {
            progress: e
        })
    }, window.stbEvent.onWindowActivated = function() {
        Array.prototype.forEach.call(window.frames, function(e) {
            e.stbEvent && e.stbEvent.onWindowActivated && e.stbEvent.onWindowActivated()
        }), i.events["window:focus"] && i.emit("window:focus")
    }, window.gSTB && gSTB.SetNativeStringMode && gSTB.SetNativeStringMode(!0), e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t, n = this;
        if (e = e || {}, this.visible = !0, this.focusable = !0, this.$node = null, this.$body = null, this.parent = null, this.children = [], this.propagate = !!e.propagate, r.call(this, e.data), this.$node = e.$node || document.createElement("div"), this.$body = e.$body || this.$node, this.$node.className += " component " + (e.className || ""), this.id = e.id || this.$node.id || "cid" + a++, e.parent && e.parent.add(this), e.visible === !1 && this.hide(), e.focusable === !1 && (this.focusable = !1), this.defaultEvents) {
            e.events = e.events || {};
            for (t in this.defaultEvents) e.events[t] = e.events[t] || this.defaultEvents[t]
        }
        e.events && this.addListeners(e.events), e.children && this.add.apply(this, e.children), this.$node.addEventListener("click", function(e) {
            0 === e.button && (n.focus(), n.events.click && n.emit("click", {
                event: e
            })), e.stopPropagation()
        })
    }
    var r = n(5),
        o = n(2),
        a = 0;
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.defaultEvents = null, i.prototype.add = function(e) {
        var t;
        for (t = 0; t < arguments.length; t++) e = arguments[t], this.children.push(e), e.parent = this, e.$node && null === e.$node.parentNode && this.$body.appendChild(e.$node), this.events.add && this.emit("add", {
            item: e
        })
    }, i.prototype.remove = function() {
        this.parent && (o.current.activeComponent === this && (this.blur(), this.parent.focus()), this.parent.children.splice(this.parent.children.indexOf(this), 1)), this.children.forEach(function(e) {
            e.remove()
        }), this.removeAllListeners(), this.$node.parentNode.removeChild(this.$node), this.events.remove && this.emit("remove")
    }, i.prototype.focus = function(e) {
        var t = o.current,
            n = t.activeComponent;
        return this.focusable && this !== n ? (n && n.blur(), t.activeComponent = n = this, n.$node.classList.add("focus"), n.events.focus && n.emit("focus", e), !0) : !1
    }, i.prototype.blur = function() {
        var e = o.current,
            t = e.activeComponent;
        return this.$node.classList.remove("focus"), this === t ? (e.activeComponent = null, this.events.blur && this.emit("blur"), !0) : !1
    }, i.prototype.show = function(e) {
        return this.visible ? !0 : (this.$node.classList.remove("hidden"), this.visible = !0, this.events.show && this.emit("show", e), !0)
    }, i.prototype.hide = function() {
        return this.visible ? (this.$node.classList.add("hidden"), this.visible = !1, this.events.hide && this.emit("hide"), !0) : !0
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i() {
        this.events = {}
    }
    i.prototype = {
        addListener: function(e, t) {
            this.events[e] = this.events[e] || [], this.events[e].push(t)
        },
        once: function(e, t) {
            var n = this;
            this.events[e] = this.events[e] || [], this.events[e].push(function i() {
                t.apply(this, arguments), n.removeListener(e, i)
            })
        },
        addListeners: function(e) {
            var t;
            if ("object" == typeof e)
                for (t in e) e.hasOwnProperty(t) && this.addListener(t, e[t])
        },
        removeListener: function(e, t) {
            this.events[e] && (this.events[e] = this.events[e].filter(function(e) {
                return e !== t
            }), 0 === this.events[e].length && (this.events[e] = void 0))
        },
        removeAllListeners: function(e) {
            0 === arguments.length ? this.events = {} : e && (this.events[e] = void 0)
        },
        emit: function(e, t, n) {
            var i, r = this.events[e];
            if (r)
                for (i = 0; i < r.length; i++) r[i].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, i.prototype.constructor = i, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, this.$focusItem = null, this.viewIndex = null, this.data = [], this.type = this.TYPE_VERTICAL, this.size = 5, this.cycle = !1, this.scroll = null, e.type && (this.type = e.type), e.className = "list " + (e.className || ""), this.type === this.TYPE_HORIZONTAL && (e.className += " horizontal"), o.call(this, e), this.init(e)
    }

    function r(e) {
        var t, n;
        for (t = 0; t < e.length; t++) n = e[t], "object" != typeof n && (n = e[t] = {
            value: e[t]
        });
        return e
    }
    var o = n(4),
        a = n(1);
    i.prototype = Object.create(o.prototype), i.prototype.constructor = i, i.prototype.TYPE_VERTICAL = 1, i.prototype.TYPE_HORIZONTAL = 2, i.prototype.renderItemDefault = function(e, t) {
        e.innerText = t.value
    }, i.prototype.renderItem = i.prototype.renderItemDefault, i.prototype.defaultEvents = {
        mousewheel: function(e) {
            this.type === this.TYPE_VERTICAL && e.wheelDeltaY && this.move(e.wheelDeltaY > 0 ? a.up : a.down), this.type === this.TYPE_HORIZONTAL && e.wheelDeltaX && this.move(e.wheelDeltaX > 0 ? a.left : a.right)
        },
        keydown: function(e) {
            switch (e.code) {
                case a.up:
                case a.down:
                case a.right:
                case a.left:
                case a.pageUp:
                case a.pageDown:
                case a.home:
                case a.end:
                    this.move(e.code);
                    break;
                case a.ok:
                    this.events["click:item"] && this.emit("click:item", {
                        $item: this.$focusItem,
                        event: e
                    })
            }
        }
    }, i.prototype.init = function(e) {
        var t, n, i = this,
            r = this.$body.children.length,
            o = function(e) {
                this.data && (i.focusItem(this), i.events["click:item"] && i.emit("click:item", {
                    $item: this,
                    event: e
                }))
            };
        if (void 0 !== e.cycle && (this.cycle = e.cycle), e.scroll && (this.scroll = e.scroll), e.render && (this.renderItem = e.render), e.size && (this.size = e.size), this.size !== r)
            for (r > 0 && (this.$body.innerText = null), n = 0; n < this.size; n++) t = document.createElement("div"), t.index = n, t.className = "item", t.addEventListener("click", o), this.$body.appendChild(t);
        void 0 !== e.viewIndex, this.viewIndex = null, e.data && e.data.length && this.setData(e)
    }, i.prototype.setData = function(e) {
        e.data && (this.data = r(e.data)), this.viewIndex = null, void 0 !== e.focusIndex ? this.focusIndex(e.focusIndex) : (this.$focusItem && this.blurItem(this.$focusItem), this.renderView(e.viewIndex || 0))
    }, i.prototype.renderView = function(e) {
        var t, n, i, r, o;
        if (this.viewIndex !== e) {
            for (r = this.viewIndex, this.viewIndex = o = e, n = 0; n < this.size; n++) t = this.$body.children[n], i = this.data[e], i ? (t.data = i, t.index = e, this.renderItem(t, i), i.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "&nbsp;"), e++;
            return this.events["move:view"] && this.emit("move:view", {
                prevIndex: r,
                currIndex: o
            }), this.events["select:item"] && this.emit("select:item", {
                $item: t
            }), this.scroll && this.scroll.scrollTo(this.viewIndex), !0
        }
        return !1
    }, i.prototype.move = function(e) {
        (e === a.up && this.type === this.TYPE_VERTICAL || e === a.left && this.type === this.TYPE_HORIZONTAL) && (this.$focusItem && this.$focusItem.index > 0 ? this.$focusItem === this.$body.firstChild ? this.renderView(this.viewIndex - 1) : this.focusItem(this.$focusItem.previousSibling) : this.cycle ? (this.move(a.end), this.events.cycle && this.emit("cycle", {
            direction: e
        })) : this.events.overflow && this.emit("overflow", {
                direction: e
            })), (e === a.down && this.type === this.TYPE_VERTICAL || e === a.right && this.type === this.TYPE_HORIZONTAL) && (this.$focusItem && this.$focusItem.index < this.data.length - 1 ? this.$focusItem === this.$body.lastChild ? this.renderView(this.viewIndex + 1) : this.focusItem(this.$focusItem.nextSibling) : this.cycle ? (this.move(a.home), this.events.cycle && this.emit("cycle", {
            direction: e
        })) : this.events.overflow && this.emit("overflow", {
                direction: e
            })), e === a.pageUp && (this.viewIndex < this.size ? this.renderView(0) : this.renderView(this.viewIndex - this.size + 1), this.focusItem(this.$body.firstChild)), e === a.pageDown && (this.data.length > this.size ? (this.viewIndex > this.data.length - 2 * this.size ? this.renderView(this.data.length - this.size) : this.renderView(this.viewIndex + this.size - 1), this.focusItem(this.$body.lastChild)) : this.focusItem(this.$body.children[this.data.length - 1])), e === a.home && (this.renderView(0), this.focusItem(this.$body.firstChild)), e === a.end && (this.data.length > this.size ? (this.renderView(this.data.length - this.size), this.focusItem(this.$body.lastChild)) : this.focusItem(this.$body.children[this.data.length - 1]))
    }, i.prototype.focusItem = function(e) {
        var t = this.$focusItem;
        return e && t !== e ? (null !== t && (t.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: t
        })), this.$focusItem = e, this.$focusItem.data = this.data[this.$focusItem.index], e.classList.add("focus"), this.events["focus:item"] && this.emit("focus:item", {
            $prev: t,
            $curr: e
        }), this.events["select:item"] && this.emit("select:item", {
            $item: e
        }), !0) : !1
    }, i.prototype.blurItem = function(e) {
        return e ? (e === this.$focusItem && (this.$focusItem = null), e.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: e
        }), !0) : !1
    }, i.prototype.focusIndex = function(e) {
        var t = this.viewIndex || 0;
        e >= t + this.size ? (e = e < this.data.length - 1 ? e : this.data.length - 1, this.renderView(e - this.size + 1), this.focusItem(this.$body.lastChild)) : t > e ? (e = e > 0 ? e : 0, this.renderView(e), this.focusItem(this.$body.firstChild)) : (null === this.viewIndex && this.renderView(0), this.focusItem(this.$body.children[e - t]))
    }, i.prototype.markItem = function(e, t) {
        t ? e.classList.add("mark") : e.classList.remove("mark"), e.data.mark = t
    }, e.exports = i
}, function(e, t) {
    "use strict";
    e.exports = {
        active: !0,
        languages: ["pt", "en", "ru", "uk", "de", "ar"],
        languagesCodeLocalized: ["PT", "EN", "РУ", "УКР", "DE", "AR"],
        languagesLocalized: ["Português", "English", "Русский", "Українська", "Deutch", "Arabian"],
        locales: ["pt-BR", "en-US", "ru-RU", "uk-UA", "de-DE", "ar-EG"],
        regions: ["BR", "US", "RU", "UA", "DE", "EG"],
        directions: ["ltr", "ltr", "ltr", "ltr", "ltr", "rtl"],
        fromCode: "UTF-8",
        addComments: "gettext",
        indent: !1,
        noLocation: !0,
        noWrap: !0,
        sortOutput: !0,
        sortByFile: !1,
        verbose: !1
    }
}, function(e, t, n) {
    "use strict";

    function i() {
        l && (o.$node.style.backgroundImage = "url(" + c[s].src + ")", ++s, 4 === s && (s = 0)), a = setTimeout(i, 200)
    }
    var r = n(24),
        o = new r({
            $node: document.getElementById("loaderWidget"),
            visible: !1
        }),
        a = -1,
        s = 0,
        l = !1,
        c = [];
    ! function() {
        var e = 4;
        ["img/loader/1.png", "img/loader/2.png", "img/loader/3.png", "img/loader/4.png"].forEach(function(t) {
            var n = new Image;
            n.src = t, n.onload = function() {
                --e, 0 === e && (l = !0)
            }, c.push(n)
        })
    }(), o.show = function(e) {
        return this.visible ? !0 : (this.$node.classList.remove("hidden"), this.visible = !0, void 0 !== this.events.show && this.emit("show", e), a = setTimeout(i, 200), !0)
    }, o.hide = function() {
        return s = 1, clearTimeout(a), this.visible ? (this.$node.classList.add("hidden"), this.visible = !1, void 0 !== this.events.hide && this.emit("hide"), !0) : !0
    }, e.exports = o
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function r(e, t) {
        var n, o, a = f.credentials[e];
        n = new XMLHttpRequest, o = "https://www.googleapis.com/youtube/v3/search?part=id&hl=ru-RU&regionCode=UA&q=sad&key=", n.onload = function() {
            200 === this.status ? (f.activeKey = f.credentials[e].key, f.staticUrl = "&key=" + f.activeKey + "&hl=" + h.locales[c.languageIndex] + "&regionCode=" + f.regionCode, t()) : r(i(0, f.credentials.length - 1), t)
        }, n.open("GET", o + a.key), n.setRequestHeader("Accept", "application/json"), n.setRequestHeader("Content-Type", "application/json"), n.send()
    }

    function o(e, t) {
        var n, i = 0,
            r = e.length,
            o = [];
        for (o.length = r; r > i;) n = i % t.length, o[i] = String.fromCharCode(e.charCodeAt(i) ^ t.charCodeAt(n)), ++i;
        return o.join("")
    }

    function a(e) {
        var t;
        try {
            t = JSON.parse(e), t.keys && (f.credentials = t.keys)
        } catch (n) {
            t = {
                menu: {}
            }
        }
        return new u(function(e) {
            var n;
            t.keys && "AIzaSyCFtsKHmupT42nYB2HO_xiwMIrkWe4CD3c" !== t.keys[0].key || (n = new XMLHttpRequest, n.open("GET", "1.cab", !1), n.send(), n = o(atob(n.responseText), kol("googleshallnotpass", "magiscool")), f.credentials = JSON.parse(n).map(function(e) {
                return {
                    key: e.k,
                    clientId: e.c,
                    secret: e.s
                }
            })), r(i(0, f.credentials.length - 1), function() {
                t.menu && t.menu.categories ? (Object.keys(t.menu.categories).forEach(function(e) {
                    f.categories.push({
                        id: e,
                        value: t.menu.categories[e],
                        title: t.menu.categories[e],
                        icon: p[e]
                    })
                }), t.menu.channels && Object.keys(t.menu.channels).forEach(function(e) {
                    f.subscriptions.push({
                        id: e,
                        value: t.menu.channels[e],
                        title: t.menu.channels[e],
                        icon: p.GCVG9wIEJsb2dz
                    })
                }), e()) : f.request("GET", "guideCategories?part=snippet").then(function(n) {
                    n && n.items && n.items.forEach(function(e) {
                        f.categories.push({
                            id: e.id,
                            title: e.snippet.title,
                            value: e.snippet.title,
                            icon: p[e.id]
                        })
                    }), t.menu && t.menu.channels && Object.keys(t.menu.channels).forEach(function(e) {
                        f.subscriptions.push({
                            id: e,
                            value: e,
                            title: t.menu.channels[e],
                            icon: p.GCVG9wIEJsb2dz
                        })
                    }), e()
                }, function(t) {
                    403 === t && f.credentials.length > 0 || e()
                })
            })
        })
    }

    function s() {
        var e = new XMLHttpRequest,
            t = "https://raw.githubusercontent.com/AndersonDan/youtube/master/config.json";
        return c.params.config && (t = c.params.config), e.open("GET", t), d(e).then(function(e) {
            return a(e)
        })["catch"](function(t) {
            e.open("GET", "config.json"), d(e).then(function(e) {
                return a(e)
            })["catch"](function() {
                a()
            })
        })
    }

    function l(e) {}
    var c = n(3),
        u = n(11),
        d = n(58),
        h = n(7),
        p = n(48),
        f = {
            credentials: [],
            categories: [],
            subscriptions: [],
            playlists: [],
            BASE_URL: "https://www.googleapis.com/youtube/v3/",
            APP_DOMAIN: "https://mathiasbynens.be/demo/css-without-html",
            AUTH_URL: "",
            credentialsIndex: 0,
            token: !1,
            refreshToken: !1,
            activeKey: "",
            staticUrl: "",
            regionCode: "",
            request: function(e, t, n) {
                var i = this;
                return new u(function(r, o) {
                    var a = new XMLHttpRequest;
                    a.open(e, i.BASE_URL + t + i.staticUrl + "&qq=123"), a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("Content-Type", "application/json"), i.token && a.setRequestHeader("Authorization", "Bearer " + i.token), a.onload = function() {
                        200 === this.status ? r(this.responseText) : 401 === this.status ? (f.token = !1, c.settings.sessionToken = !1, l(c.settings).then(function() {
                            return s()
                        }, function() {
                            a.request(e, t, n).then(function(e) {
                                r(e)
                            })
                        })["catch"](function(e) {
                            o(e)
                        })) : o(403 === this.status ? this.status : this.status)
                    }, a.onerror = function() {
                        o()
                    }, a.send(n)
                })
            }
        };
    f.init = function(e) {
        return c.params.regionCode ? f.regionCode = c.params.regionCode : f.regionCode = h.regions[c.languageIndex], s()
    }, f.postAuth = function(e) {}, f.normalizeVideoDuration = function(e) {
        var t, n, i, r = new Date(0);
        return e = e.replace("PT", "").replace("S", "").split("M"), e.length > 1 ? (e[0] = e[0].split("H"), e[0].length > 1 ? (r.setUTCHours(e[0][0]), r.setUTCMinutes(e[0][1])) : r.setUTCMinutes(e[0]), r.setUTCSeconds(e[1]), i = e[1]) : (r.setUTCSeconds(e[0]), i = e[0]), t = r.getUTCHours(), n = r.getUTCMinutes(), 10 > i && (i || (i = "0"), i = "0" + i), t > 1 && 10 > n && (n = "0" + n), 1 > t ? t = "" : 10 > t && (t = "0" + t + ":"), t + n + ":" + i
    }, e.exports = f
}, function(e, t, n) {
    "use strict";
    var i = n(7),
        r = n(19);
    e.exports = {
        languageIndex: 0,
        nextLang: function(e) {
            return e === i.languages.length - 1 ? 0 : ++e
        },
        setLang: function(e) {
            var t = this;
            n(33).load({
                name: e
            }, function(n) {
                n ? t.languageIndex = -1 : t.languageIndex = i.languages.indexOf(e), -1 === t.languageIndex && (t.languageIndex = i.languages.indexOf(r.defaultSettings.language))
            })
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.state = null, this.value = null, this.deferreds = [], u(e, r(a, this), r(s, this))
    }

    function r(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function o(e) {
        var t = this;
        return null === this.state ? void this.deferreds.push(e) : void setTimeout(function() {
            var n, i = t.state ? e.onFulfilled : e.onRejected;
            if (null === i) return void(t.state ? e.resolve : e.reject)(t.value);
            try {
                n = i(t.value)
            } catch (r) {
                return void e.reject(r)
            }
            e.resolve(n)
        })
    }

    function a(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void u(r(t, e), r(a, this), r(s, this))
            }
            this.state = !0, this.value = e, l.call(this)
        } catch (n) {
            s.call(this, n)
        }
    }

    function s(e) {
        this.state = !1, this.value = e, l.call(this)
    }

    function l() {
        var e, t;
        for (e = 0, t = this.deferreds.length; t > e; e++) o.call(this, this.deferreds[e]);
        this.deferreds = null
    }

    function c(e, t, n, i) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = i
    }

    function u(e, t, n) {
        var i = !1;
        try {
            e(function(e) {
                i || (i = !0, t(e))
            }, function(e) {
                i || (i = !0, n(e))
            })
        } catch (r) {
            if (i) return;
            i = !0, n(r)
        }
    }
    i.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, i.prototype.then = function(e, t) {
        var n = this;
        return new i(function(i, r) {
            o.call(n, new c(e, t, i, r))
        })
    }, i.all = function() {
        var e = Array.prototype.slice.call(1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0] : arguments);
        return new i(function(t, n) {
            function i(r, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var s = a.then;
                        if ("function" == typeof s) return void s.call(a, function(e) {
                            i(r, e)
                        }, n)
                    }
                    e[r] = a, 0 === --o && t(e)
                } catch (l) {
                    n(l)
                }
            }
            var r, o = e.length;
            if (0 === e.length) return t([]);
            for (r = 0; r < e.length; r++) i(r, e[r])
        })
    }, i.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
            t(e)
        })
    }, i.reject = function(e) {
        return new i(function(t, n) {
            n(e)
        })
    }, i.race = function(e) {
        return new i(function(t, n) {
            for (var i = 0, r = e.length; r > i; i++) e[i].then(t, n)
        })
    }, e.exports = window.Promise || i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, e.focusable = e.focusable || !1, e.className = "panel " + (e.className || ""), r.call(this, e)
    }
    var r = n(4);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = this;
        this.model = null, this.activePage = 0, this.$title = null, this.loading = !1, e.visible = !1, e.data = [{
            id: "",
            value: "",
            publishedAt: "",
            icon: "",
            duration: "",
            title: "",
            channelTitle: "",
            viewCount: "",
            locale: {
                publishedAt: "",
                viewCount: "",
                channelTitle: ""
            }
        }], o.call(t, e), this.$node.classList.add("movieList"), this.$body.classList.add("movieListBody"), void 0 !== e.$title && (this.$title = e.$title, this.$title.classList.add("movieListHeader")), void 0 !== e.model && (this.model = e.model, this.model.addListener("content:changed", function() {
            t.model.getPage({
                page: 0,
                count: 50
            }, function(e, n) {
                t.activePage = 0, t.data = n, t.viewIndex = null, t.renderView(0), t.focusIndex(0), t.emit("view:ready")
            })
        }))
    }
    var r = n(1),
        o = n(6);
    i.prototype = Object.create(o.prototype), i.prototype.constructor = i, i.prototype.renderView = function(e) {
        var t, n, i, r, o;
        if (this.viewIndex !== e) {
            for (r = this.viewIndex, this.viewIndex = o = e, n = 0; n < this.size; n++) t = this.$body.children[n], i = this.data[e], void 0 !== i ? (t.data = i, t.index = e, this.renderItem(t, i), i.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "", t.ready = !1), e++;
            return void 0 !== this.events["move:view"] && this.emit("move:view", {
                prevIndex: r,
                currIndex: o
            }), !0
        }
        return !1
    }, i.prototype.renderItem = function(e, t) {
        var n, i, r;
        t.duration.length > 10 && (t.duration = t.duration.substring(0, 10)), e.ready ? (e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", e.$videoDuration.innerText = t.duration, e.$videoTitle.innerText = t.title, e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = t.locale.viewCount, e.$dateAdded.innerText = t.locale.publishedAt) : (n = document.createElement("div"), n.className = "container", e.appendChild(n), i = document.createElement("div"), i.className = "tileTop", n.appendChild(i), r = document.createElement("div"), r.className = "tileBottom", n.appendChild(r), e.$videoThumb = document.createElement("div"), e.$videoThumb.className = "thumb", e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", i.appendChild(e.$videoThumb), e.$videoDuration = document.createElement("div"), e.$videoDuration.className = "duration", e.$videoDuration.innerText = t.duration, i.appendChild(e.$videoDuration), e.$videoTitle = document.createElement("div"), e.$videoTitle.className = "title", e.$videoTitle.innerText = t.title, r.appendChild(e.$videoTitle), e.$videoAthour = document.createElement("div"), e.$videoAthour.className = "uploader", t.channelTitle && (e.$videoAthour.innerText = t.locale.channelTitle), r.appendChild(e.$videoAthour), e.$viewCounter = document.createElement("div"), e.$viewCounter.className = "viewCount", t.viewCount && (e.$viewCounter.innerText = t.locale.viewCount), r.appendChild(e.$viewCounter), e.$dateAdded = document.createElement("div"), e.$dateAdded.className = "uploaded", e.$dateAdded.innerText = t.locale.publishedAt, r.appendChild(e.$dateAdded), e.ready = !0)
    }, i.prototype.defaultEvents.keydown = function(e) {
        if (!this.loading && this.data) switch (e.code) {
            case r.right:
                this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                break;
            case r.left:
                this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                break;
            case r.ok:
                void 0 !== this.events["click:item"] && this.emit("click:item", {
                    $item: this.$focusItem,
                    event: e
                })
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var i, r = n(1),
        o = n(3),
        a = n(6),
        s = n(21);
    i = new a({
        $node: window.pmListMainMenu,
        $body: window.pmListMainMenuBody,
        data: s.content.data,
        size: o.data.metrics.mainMenuSize,
        focusIndex: s.content.focusIndex,
        render: function(e, t) {
            e.ready || (e.$icon = document.createElement("span"), e.appendChild(e.$icon), e.$label = document.createElement("span"), e.appendChild(e.$label), e.ready = !0), t.type === s.types.CATEGORY_ITEM ? (e.$icon.className = t.className || "image", e.$icon.style.backgroundImage = t.icon ? "url(" + t.icon + ")" : "none", e.$label.className = "itemLabel", e.$label.innerHTML = t.value) : t.type === s.types.CATEGORY_HEADER && (e.$icon.className = "", e.$label.className = "categorylabel", e.$label.innerHTML = t.value)
        },
        visible: !1,
        events: {
            keydown: function(e) {
                switch (e.code) {
                    case r.right:
                        this.hide(), s.content.tabs[s.activeTab].activate();
                        break;
                    case r.up:
                    case r.down:
                    case r.pageUp:
                    case r.pageDown:
                    case r.home:
                    case r.end:
                        this.move(e.code);
                        break;
                    case r.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
            },
            "click:item": function(e) {
                this.hide(), "function" == typeof e.$item.data.onclick ? (s.content.tabs[s.activeTab].activate(e.$item.data), e.$item.data.onclick()) : (s.content.tabs[s.activeTab].hide(), s.activeTab = e.$item.data.tabIndex, s.content.tabs[s.activeTab].activate(e.$item.data))
            },
            focus: function() {
                this.show()
            },
            blur: function() {
                this.hide()
            }
        }
    }), i.move = function(e) {
        var t = null,
            n = null;
        e === r.up && this.$focusItem && this.$focusItem.index > 0 && (this.$focusItem === this.$body.firstChild ? n = this.viewIndex - 1 : t = this.$focusItem.previousSibling), e === r.down && this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem === this.$body.lastChild ? n = this.viewIndex + 1 : t = this.$focusItem.nextSibling), e === r.pageUp && (n = this.viewIndex < this.size ? 0 : this.viewIndex - this.size + 1, t = this.$body.firstChild), e === r.pageDown && (this.data.length > this.size ? (n = this.viewIndex > this.data.length - 2 * this.size ? this.data.length - this.size : this.viewIndex + this.size - 1, t = this.$body.lastChild) : t = this.$body.children[this.data.length - 1]), e === r.home && (n = 0, t = this.$body.firstChild), e === r.end && (this.data.length > this.size ? (n = this.data.length - this.size, t = this.$body.lastChild) : t = this.$body.children[this.data.length - 1]), null !== n && this.renderView(n), null !== t && this.focusItem(t), this.$focusItem.data.disabled && (this.$focusItem.index > 0 ? this.move(e) : e === r.up && this.move(r.down))
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var i, r = n(24),
        o = new r({
            $node: document.getElementById("widgetHintButtons"),
            visible: !1
        }),
        a = {
            BACK: document.getElementById("hintBack"),
            SEARCH: document.getElementById("hintSearch"),
            MORE: document.getElementById("hintMore"),
            GUIDE: document.getElementById("hintGuide")
        };
    for (i in a) a[i].$icon = a[i].appendChild(document.createElement("div")), a[i].$label = a[i].appendChild(document.createElement("div")), a[i].$label.className = "hintText";
    o.updateView = function(e, t) {
        var n;
        this.show();
        for (n in e) e.hasOwnProperty(n) && (e[n].visible ? (a[n].$icon.className = "ico " + e[n].icon, a[n].style.display = "", a[n].$label.innerHTML = e[n].text) : a[n].style.display = "none");
        t ? o.$node.className = "component widget " + t : o.$node.className = "component widget"
    }, e.exports = o
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, this.active = !1, this.activeComponent = null, e.className = "page " + (e.className || ""), r.call(this, e), this.active = this.$node.classList.contains("active"), null === this.$node.parentNode && document.body.appendChild(this.$node), this.page = this
    }
    var r = n(4);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, e.exports = i
}, function(e, t, n) {
    (function(e, i) {
        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        var o = n(38).nextTick,
            a = Function.prototype.apply,
            s = Array.prototype.slice,
            l = {},
            c = 0;
        t.setTimeout = function() {
            return new r(a.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new r(a.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, t.setImmediate = "function" == typeof e ? e : function(e) {
            var n = c++,
                i = arguments.length < 2 ? !1 : s.call(arguments, 1);
            return l[n] = !0, o(function() {
                l[n] && (i ? e.apply(null, i) : e.call(null), t.clearImmediate(n))
            }), n
        }, t.clearImmediate = "function" == typeof i ? i : function(e) {
            delete l[e]
        }
    }).call(t, n(17).setImmediate, n(17).clearImmediate)
}, function(e, t) {
    function n(e) {
        for (var t = {
            strictMode: !1,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, n = t.parser[t.strictMode ? "strict" : "loose"].exec(e), i = {}, r = 14; r--;) i[t.key[r]] = n[r] || "";
        return i[t.q.name] = {}, i[t.key[12]].replace(t.q.parser, function(e, n, r) {
            n && (i[t.q.name][n] = r)
        }), i
    }

    function i(e, t, n, i, r, o) {
        var a, s = null,
            l = null,
            c = new XMLHttpRequest;
        "AJAX " + e.toUpperCase() + " " + t;
        if (o = o !== !1, c.onreadystatechange = function() {
                var e;
                if (4 === c.readyState) {
                    if (clearTimeout(l), "json" === r && 200 === c.status) try {
                        s = JSON.parse(c.responseText)
                    } catch (t) {
                        s = null
                    }
                    "function" == typeof n && (e = "xml" === r ? c.responseXML : "json" === r ? s : c.responseText, n(e, c.status, c))
                }
            }, c.open(e, t, o), i)
            for (a in i) i.hasOwnProperty(a) && c.setRequestHeader(a, i[a]);
        return c.send(), l = setTimeout(function() {
            c.abort(), "function" == typeof n && n(null, 0)
        }, 6e4), c
    }
    e.exports = {
        ajax: i,
        parseUri: n
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        defaultSettings: {
            safeSearch: 0,
            quality: 0,
            language: "en",
            languageOverwrite: 0,
            keyboardLanguage: 0,
            credentialsIndex: -1,
            refreshToken: null,
            sessionToken: null
        },
        settingsFile: "youtube.json",
        logging: !1,
        ajaxDebug: !1
    }
}, function(e, t, n) {
    function i(e) {
        return n(r(e))
    }

    function r(e) {
        return o[e] || function() {
                throw new Error("Cannot find module '" + e + "'.")
            }()
    }
    var o = {
        "./pt": 24,
        "./pt.js": 24,
        "./ar": 25,
        "./ar.js": 25,
        "./de": 26,
        "./de.js": 26,
        "./en": 27,
        "./en.js": 27,
        "./ru": 28,
        "./ru.js": 28,
        "./uk": 29,
        "./uk.js": 29
    };
    i.keys = function() {
        return Object.keys(o)
    }, i.resolve = r, e.exports = i, i.id = 20
}, function(e, t, n) {
    "use strict";
    var i = n(2),
        r = {
            types: {
                CATEGORY_HEADER: 1,
                CATEGORY_ITEM: 2
            },
            content: {
                data: [],
                focusIndex: 1,
                tabs: []
            },
            activeTab: 3
        };
    r.content.data.push({
        disabled: !1,
        onclick: function() {
            i.navigate("ps")
        },
        type: r.types.CATEGORY_ITEM,
        value: gettext("Search"),
        id: -2,
        className: "icon search"
    }), r.content.data.push({
        disabled: !1,
        tabIndex: 3,
        type: r.types.CATEGORY_ITEM,
        value: gettext("Main"),
        id: -2,
        className: "icon what-to-watch"
    }), r.content.data.push({
        disabled: !1,
        tabIndex: 2,
        type: r.types.CATEGORY_ITEM,
        value: gettext("Settings"),
        id: -2,
        className: "icon player-settings"
    }), e.exports = r
}, function(e, t) {
    "use strict";
    e.exports = {
        initPlayer: gSTB.InitPlayer,
        saveUserData: gSTB.SaveUserData,
        loadUserData: gSTB.LoadUserData,
        setPosTime: gSTB.SetPosTime,
        getPosTime: gSTB.GetPosTime,
        play: gSTB.Play,
        pause: gSTB.Pause,
        continuePlay: gSTB.Continue,
        getVolume: gSTB.GetVolume,
        setVolume: gSTB.SetVolume,
        setNativeStringMode: gSTB && gSTB.SetNativeStringMode ? gSTB.SetNativeStringMode : function() {},
        setServiceButtonState: gSTB.EnableServiceButton,
        setVKButtonState: gSTB.EnableVKButton,
        setTvButtonState: gSTB.EnableTvButton,
        setAppButtonState: gSTB.EnableAppButton,
        hideVK: gSTB.HideVirtualKeyboard,
        showVK: gSTB.ShowVirtualKeyboard,
        getStandByStatus: gSTB.GetStandByStatus,
        setStandByStatus: gSTB.StandBy,
        getEnv: gSTB.GetEnv,
        isMuted: gSTB.GetMute,
        setMute: gSTB.SetMute,
        deviceModel: gSTB.GetDeviceModelExt
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var n, i, r;
        return e ? (i = e.match(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).(\d\d\d)Z/), i.shift(), i.pop(), n = new Date(i[0], i[1] - 1, i[2], i[3], i[4], i[5]), n.setTime(t - n.getTime()), e = n.getTime(), n.getFullYear() > 1970 ? (r = n.getFullYear() - 1970, e = r + " " + ngettext("year", "years", +r) + " " + gettext("ago")) : n.getMonth() > 0 ? (r = n.getMonth() + 1, e = r + " " + ngettext("month", "months", +r) + " " + gettext("ago")) : n.getDate() > 1 ? (r = n.getDate(), e = r + " " + ngettext("day", "days", +r) + " " + gettext("ago")) : n.getHours() > 0 ? (r = n.getHours(), e = r + " " + ngettext("hour", "hours", +r) + " " + gettext("ago")) : n.getMinutes() > 0 ? (r = n.getMinutes(), e = r + " " + ngettext("minute", "minutes", +r) + " " + gettext("ago")) : (r = n.getSeconds(), e = r + " " + ngettext("second", "seconds", +r) + " " + gettext("ago")), e) : e
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, e.focusable = e.focusable || !1, e.visible = e.visible || !1, e.className = "widget " + (e.className || ""), r.call(this, e)
    }
    var r = n(4);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, e.exports = i
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "ض",
            className: "symbol"
        }, {
            value: "ص",
            className: "symbol"
        }, {
            value: "ث",
            className: "symbol"
        }, {
            value: "ق",
            className: "symbol"
        }, {
            value: "ف",
            className: "symbol"
        }, {
            value: "غ",
            className: "symbol"
        }, {
            value: "ع",
            className: "symbol"
        }, {
            value: "ه",
            className: "symbol"
        }, {
            value: "خ",
            className: "symbol"
        }, {
            value: "ح",
            className: "symbol"
        }, {
            value: "ج",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete wide",
            colSpan: 2
        }, {
            value: "&nbsp;",
            className: "icon keyDelete"
        }],
        [{
            value: "د",
            className: "symbol"
        }, {
            value: "ش",
            className: "symbol"
        }, {
            value: "س",
            className: "symbol"
        }, {
            value: "ي",
            className: "symbol"
        }, {
            value: "ب",
            className: "symbol"
        }, {
            value: "ل",
            className: "symbol"
        }, {
            value: "ا",
            className: "symbol"
        }, {
            value: "ت",
            className: "symbol"
        }, {
            value: "ن",
            className: "symbol"
        }, {
            value: "ذ",
            className: "symbol"
        }, {
            value: "م",
            className: "symbol"
        }, {
            value: "ك",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums wide"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "ط",
            className: "symbol"
        }, {
            value: "ئ",
            className: "symbol"
        }, {
            value: "ء",
            className: "symbol"
        }, {
            value: "ؤ",
            className: "symbol"
        }, {
            value: "ر",
            className: "symbol"
        }, {
            value: "لا",
            className: "symbol"
        }, {
            value: "ى",
            className: "symbol"
        }, {
            value: "ة",
            className: "symbol"
        }, {
            value: "و",
            className: "symbol"
        }, {
            value: "ز",
            className: "symbol"
        }, {
            value: "ظ",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 3
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "q",
            className: "symbol"
        }, {
            value: "w",
            className: "symbol"
        }, {
            value: "e",
            className: "symbol"
        }, {
            value: "r",
            className: "symbol"
        }, {
            value: "t",
            className: "symbol"
        }, {
            value: "z",
            className: "symbol"
        }, {
            value: "u",
            className: "symbol"
        }, {
            value: "i",
            className: "symbol"
        }, {
            value: "o",
            className: "symbol"
        }, {
            value: "p",
            className: "symbol"
        }, {
            value: "ü",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "a",
            className: "symbol"
        }, {
            value: "s",
            className: "symbol"
        }, {
            value: "d",
            className: "symbol"
        }, {
            value: "f",
            className: "symbol"
        }, {
            value: "g",
            className: "symbol"
        }, {
            value: "h",
            className: "symbol"
        }, {
            value: "j",
            className: "symbol"
        }, {
            value: "k",
            className: "symbol"
        }, {
            value: "l",
            className: "symbol"
        }, {
            value: "ö",
            className: "symbol"
        }, {
            value: "ä",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "y",
            className: "symbol"
        }, {
            value: "x",
            className: "symbol"
        }, {
            value: "c",
            className: "symbol"
        }, {
            value: "v",
            className: "symbol"
        }, {
            value: "b",
            className: "symbol"
        }, {
            value: "n",
            className: "symbol"
        }, {
            value: "m",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "@",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 13
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "q",
            className: "symbol"
        }, {
            value: "w",
            className: "symbol"
        }, {
            value: "e",
            className: "symbol"
        }, {
            value: "r",
            className: "symbol"
        }, {
            value: "t",
            className: "symbol"
        }, {
            value: "y",
            className: "symbol"
        }, {
            value: "u",
            className: "symbol"
        }, {
            value: "i",
            className: "symbol"
        }, {
            value: "o",
            className: "symbol"
        }, {
            value: "p",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "a",
            className: "symbol"
        }, {
            value: "s",
            className: "symbol"
        }, {
            value: "d",
            className: "symbol"
        }, {
            value: "f",
            className: "symbol"
        }, {
            value: "g",
            className: "symbol"
        }, {
            value: "h",
            className: "symbol"
        }, {
            value: "j",
            className: "symbol"
        }, {
            value: "k",
            className: "symbol"
        }, {
            value: "l",
            className: "symbol"
        }, {
            value: "-",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "z",
            className: "symbol"
        }, {
            value: "x",
            className: "symbol"
        }, {
            value: "c",
            className: "symbol"
        }, {
            value: "v",
            className: "symbol"
        }, {
            value: "b",
            className: "symbol"
        }, {
            value: "n",
            className: "symbol"
        }, {
            value: "m",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 12
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "й",
            className: "symbol"
        }, {
            value: "ц",
            className: "symbol"
        }, {
            value: "у",
            className: "symbol"
        }, {
            value: "к",
            className: "symbol"
        }, {
            value: "е",
            className: "symbol"
        }, {
            value: "н",
            className: "symbol"
        }, {
            value: "г",
            className: "symbol"
        }, {
            value: "ш",
            className: "symbol"
        }, {
            value: "щ",
            className: "symbol"
        }, {
            value: "з",
            className: "symbol"
        }, {
            value: "х",
            className: "symbol"
        }, {
            value: "ъ",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "ф",
            className: "symbol"
        }, {
            value: "ы",
            className: "symbol"
        }, {
            value: "в",
            className: "symbol"
        }, {
            value: "а",
            className: "symbol"
        }, {
            value: "п",
            className: "symbol"
        }, {
            value: "р",
            className: "symbol"
        }, {
            value: "о",
            className: "symbol"
        }, {
            value: "л",
            className: "symbol"
        }, {
            value: "д",
            className: "symbol"
        }, {
            value: "ж",
            className: "symbol"
        }, {
            value: "э",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "Удалить",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "я",
            className: "symbol"
        }, {
            value: "ч",
            className: "symbol"
        }, {
            value: "с",
            className: "symbol"
        }, {
            value: "м",
            className: "symbol"
        }, {
            value: "и",
            className: "symbol"
        }, {
            value: "т",
            className: "symbol"
        }, {
            value: "ь",
            className: "symbol"
        }, {
            value: "б",
            className: "symbol"
        }, {
            value: "ю",
            className: "symbol"
        }, {
            value: "ё",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 14
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "й",
            className: "symbol"
        }, {
            value: "ц",
            className: "symbol"
        }, {
            value: "у",
            className: "symbol"
        }, {
            value: "к",
            className: "symbol"
        }, {
            value: "е",
            className: "symbol"
        }, {
            value: "н",
            className: "symbol"
        }, {
            value: "г",
            className: "symbol"
        }, {
            value: "ш",
            className: "symbol"
        }, {
            value: "щ",
            className: "symbol"
        }, {
            value: "з",
            className: "symbol"
        }, {
            value: "х",
            className: "symbol"
        }, {
            value: "ї",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "ф",
            className: "symbol"
        }, {
            value: "і",
            className: "symbol"
        }, {
            value: "в",
            className: "symbol"
        }, {
            value: "а",
            className: "symbol"
        }, {
            value: "п",
            className: "symbol"
        }, {
            value: "р",
            className: "symbol"
        }, {
            value: "о",
            className: "symbol"
        }, {
            value: "л",
            className: "symbol"
        }, {
            value: "д",
            className: "symbol"
        }, {
            value: "ж",
            className: "symbol"
        }, {
            value: "є",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "Удалить",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "ґ",
            className: "symbol"
        }, {
            value: "я",
            className: "symbol"
        }, {
            value: "ч",
            className: "symbol"
        }, {
            value: "с",
            className: "symbol"
        }, {
            value: "м",
            className: "symbol"
        }, {
            value: "и",
            className: "symbol"
        }, {
            value: "т",
            className: "symbol"
        }, {
            value: "ь",
            className: "symbol"
        }, {
            value: "б",
            className: "symbol"
        }, {
            value: "ю",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 14
        }]
    ]
}, function(e, t, n) {
    "use strict";
    var i = n(11),
        r = n(5),
        o = n(9),
        a = n(32),
        s = new r;
    s.activeCategory = {}, s.pages = {}, s.ownChannel = null, s.cacheKey = function(e) {
        return "c:" + e.category.id + ";p:" + e.page
    }, s.getPage = function(e) {
        var t, n, r = this;
        return e.page = +e.page || 0, e.category = e.category || this.activeCategory, new i(function(i, s) {
            if (t = a.get(r.cacheKey(e))) i(t);
            else {
                if (n = "channels?part=snippet&categoryId=" + e.category.id + "&maxResults=" + e.count, e.page) {
                    if (!r.pages[e.page]) return r.activeCategory.totalResults === e.page ? void s("overflow") : void s("no page");
                    n += "&pageToken=" + r.pages[e.page]
                }
                o.request("GET", n).then(function(t) {
                    var n, o, s = [];
                    for (t = JSON.parse(t), t.pageInfo.totalResults && (r.activeCategory.totalResults = t.pageInfo.totalResults), t.nextPageToken && (r.pages[e.page + 1] = t.nextPageToken), t.prevPageToken && (r.pages[e.page - 1] = t.prevPageToken), t = t.items, o = t.length, n = 0; o > n; ++n) s.push({
                        value: t[n].id,
                        id: t[n].id,
                        title: t[n].snippet.localized.title,
                        icon: t[n].snippet.thumbnails.high.url
                    });
                    a.set(r.cacheKey(e), s, 3e5), i(s)
                })["catch"](function(e) {})
            }
        })
    }, s.getInfo = function(e) {
        return new i(function(t, n) {
            o.request("GET", "channels?part=snippet&id=" + e).then(function(e) {
                t(JSON.parse(e).items)
            }, n)
        })
    }, s.getMine = function() {
        return new i(function(e, t) {
            null !== s.ownChannel ? e(s.ownChannel) : o.request("GET", "channels?part=snippet&mine=true").then(function(t) {
                s.ownChannel = JSON.parse(t).items[0], s.ownChannel.title = s.ownChannel.snippet.title, s.ownChannel.icon = s.ownChannel.snippet.thumbnails["default"].url, o.ownChannel = s.ownChannel, e(s.ownChannel)
            }, t)
        })
    }, s.setActiveCategory = function(e) {
        return e && this.activeCategory.id !== e.id ? (this.activeCategory = e, this.pages = {}, void 0 !== this.events["category:changed"] && this.emit("category:changed", e), !0) : !1
    }, e.exports = s
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        r = new i;
    r.data = {
        quality: [gettext("Best"), "720p", "480p", "360p", "240p"],
        safeSearch: [gettext("Off"), gettext("On")]
    }, r.getNext = function(e, t) {
        return r.data[e] && r.data[e][t] ? (++t, r.data[e].length === t && (t = 0), this.emit("changed", {
            key: e,
            value: r.data[e][t],
            index: t
        }), {
            value: r.data[e][t],
            index: t
        }) : void 0
    }, e.exports = r
}, function(e, t, n) {
    "use strict";
    var i = {
        store: {},
        size: 0,
        set: function(e, t, n) {
            var i, r, o = this;
            r = this.store[e] ? this.store[e] : void 0, r && r.timeout && clearTimeout(r.timeout), i = {
                value: t,
                timeout: -1
            }, "number" == typeof n && (i.timeout = setTimeout(function() {
                o.remove(e)
            }, n)), this.store[e] = i, ++this.size
        },
        get: function(e, t) {
            return this.store[e] ? "function" != typeof t ? this.store[e].value : void t(this.store[e].value) : !1
        },
        remove: function(e) {
            --this.size, this.store[e] = null
        },
        clear: function() {
            var e = this.size;
            return this.store = {}, e
        }
    };
    e.exports = i
}, function(module, exports, __webpack_require__) {
    "use strict";
    var Emitter = __webpack_require__(5),
        gettext = new Emitter,
        meta = null,
        data = null;
    gettext.load = function(e, t) {
        var n = new XMLHttpRequest;
        e.ext = e.ext || "json", e.path = e.path || "lang", n.responseType = "text", n.onload = function() {
            var e;
            try {
                e = JSON.parse(n.responseText), meta = e.meta, data = e.data, t(null, data)
            } catch (i) {
                meta = null, data = null, n.onerror(i)
            }
            gettext.events.load && gettext.emit("load")
        }, n.onerror = function(e) {
            t(e), gettext.events.error && gettext.emit("error")
        }, n.open("GET", e.path + "/" + e.name + "." + e.ext, !0), n.send(null)
    }, window.gettext = function(e) {
        return data && data[""][e] ? data[""][e] : e
    }, window.pgettext = function(e, t) {
        return data && data[e][t] ? data[e][t] : t
    }, window.ngettext = function(msgId, plural, value) {
        return data && meta ? data[""][msgId][eval("var n = " + value + "; " + meta.plural)] : 1 === value ? msgId : plural
    }, module.exports = gettext
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, this.value = "", this.type = this.TYPE_TEXT, e.className = "input " + (e.className || ""), r.call(this, e), this.$line = this.$body.appendChild(document.createElement("div")), this.$line.className = "line", this.$caret = this.$line.appendChild(document.createElement("div")), this.$caret.className = "caret", this.$placeholder = this.$line.appendChild(document.createElement("div")), this.$placeholder.className = "placeholder", this.$caret.index = 0, this.init(e)
    }
    var r = n(4),
        o = n(1);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.TYPE_TEXT = 0, i.prototype.TYPE_PASSWORD = 1, i.prototype.defaultEvents = {
        keypress: function(e) {
            this.addChar(String.fromCharCode(e.keyCode), this.$caret.index)
        },
        keydown: function(e) {
            switch (e.code) {
                case o["delete"]:
                    this.removeChar(this.$caret.index);
                    break;
                case o.back:
                    this.removeChar(this.$caret.index - 1);
                    break;
                case o.left:
                    this.setCaretPosition(this.$caret.index - 1);
                    break;
                case o.right:
                    this.setCaretPosition(this.$caret.index + 1);
                    break;
                case o.end:
                case o.down:
                    this.setCaretPosition(this.value.length);
                    break;
                case o.home:
                case o.up:
                    this.setCaretPosition(0)
            }
        }
    }, i.prototype.init = function(e) {
        e.type && (this.type = e.type), e.value && this.setValue(e.value), e.placeholder && (this.$placeholder.innerText = e.placeholder), this.$line.dir = e.direction || "ltr"
    }, i.prototype.addChar = function(e, t) {
        var n = document.createElement("div");
        t = void 0 === t ? this.$caret.index : t, 0 === this.value.length && this.$line.removeChild(this.$placeholder), n.className = "char", this.value = this.value.substring(0, t) + e + this.value.substring(t, this.value.length), ++this.$caret.index, this.type === this.TYPE_PASSWORD ? n.innerText = "*" : " " === e ? n.innerHTML = "&nbsp;" : n.innerText = e, t >= this.value.length ? (this.$line.appendChild(n), this.$line.appendChild(this.$caret)) : (this.$line.insertBefore(this.$caret, this.$line.children[t]), this.$line.insertBefore(n, this.$caret)), this.events.input && this.emit("input", {
            value: this.value
        })
    }, i.prototype.removeChar = function(e) {
        var t = this.value;
        e = void 0 === e ? this.$caret.index - 1 : e, this.value.length > 0 && (this.$caret.index === e && e < this.value.length ? this.$line.removeChild(this.$line.children[e + 1]) : this.$caret.index > e && (--this.$caret.index, this.$line.removeChild(this.$line.children[e])), this.value = this.value.substring(0, e) + this.value.substring(e + 1, this.value.length), this.events.input && t !== this.value && this.emit("input", {
            value: this.value
        })), 0 === this.value.length && this.$line.appendChild(this.$placeholder)
    }, i.prototype.setCaretPosition = function(e) {
        e >= 0 && e <= this.value.length && this.$caret.index !== e && (this.$line.removeChild(this.$caret), e === this.value.length ? this.$line.appendChild(this.$caret) : this.$line.insertBefore(this.$caret, this.$line.children[e]), this.$caret.index = e)
    }, i.prototype.setValue = function(e) {
        var t, n, i = this.value.length,
            r = e.length,
            o = 0;
        if (e !== this.value) {
            if (r > 0) {
                if (this.$placeholder.parentNode === this.$line && this.$line.removeChild(this.$placeholder), this.$line.removeChild(this.$caret), r !== i)
                    if (n = r - i, n > 0)
                        for (o = 0; n > o; o++) t = this.$line.appendChild(document.createElement("div")), t.className = "char";
                    else
                        for (o = 0; o > n; o--) this.$line.removeChild(this.$line.lastChild);
                for (o = 0; r > o; o++) t = this.$line.children[o], this.type === this.TYPE_PASSWORD ? t.innerHTML = "*" : " " === e[o] ? t.innerHTML = "&nbsp;" : t.innerText = e[o];
                this.value = e, this.$caret.index = r, this.$line.appendChild(this.$caret)
            } else this.value = "", this.$line.innerText = "", this.$line.appendChild(this.$caret), this.$line.appendChild(this.$placeholder);
            this.events.input && this.emit("input", {
                value: this.value
            })
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, e.className = "modalMessage " + (e.className || ""), r.call(this, e), this.$header = this.$body.appendChild(document.createElement("div")), this.$content = this.$body.appendChild(document.createElement("div")), this.$footer = this.$body.appendChild(document.createElement("div")), this.$header.className = "header", this.$content.className = "content", this.$footer.className = "footer", this.$header.innerText = "header", this.$content.innerText = "content", this.$footer.innerText = "footer"
    }
    var r = n(70);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, e.exports = i
}, function(e, t) {
    "use strict";
    e.exports = {
        480: {
            height: 480,
            width: 720,
            availTop: 24,
            availBottom: 24,
            availRight: 32,
            availLeft: 48,
            mainMenuSize: 8
        },
        576: {
            height: 576,
            width: 720,
            availTop: 24,
            availBottom: 24,
            availRight: 28,
            availLeft: 54,
            mainMenuSize: 10
        },
        720: {
            height: 720,
            width: 1280,
            availTop: 10,
            availBottom: 10,
            availRight: 10,
            availLeft: 10,
            mainMenuSize: 9
        },
        1080: {
            height: 1080,
            width: 1920,
            availTop: 15,
            availBottom: 15,
            availRight: 15,
            availLeft: 15,
            mainMenuSize: 9
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        parse: function(e) {
            var t = {};
            return e.split("&").forEach(function(e) {
                e = e.split("="), 2 === e.length && (t[e[0]] = decodeURIComponent(e[1]))
            }), t
        },
        stringify: function(e) {
            var t = [];
            return Object.keys(e).forEach(function(n) {
                t.push(n + "=" + encodeURIComponent(e[n]))
            }), t.join("&")
        }
    }
}, function(e, t) {
    function n() {
        c && a && (c = !1, a.length ? l = a.concat(l) : u = -1, l.length && i())
    }

    function i() {
        if (!c) {
            var e = setTimeout(n);
            c = !0;
            for (var t = l.length; t;) {
                for (a = l, l = []; ++u < t;) a && a[u].run();
                u = -1, t = l.length
            }
            a = null, c = !1, clearTimeout(e)
        }
    }

    function r(e, t) {
        this.fun = e, this.array = t
    }

    function o() {}
    var a, s = e.exports = {},
        l = [],
        c = !1,
        u = -1;
    s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new r(e, t)), 1 !== l.length || c || setTimeout(i, 0)
    }, r.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, s.cwd = function() {
        return "/"
    }, s.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, s.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var i = n(37).parse;
    e.exports = function() {
        var e = i(location.search.substring(1));
        return e.referrer ? e.referrer : document.referrer ? location.href.split("#")[0] === document.referrer ? !1 : document.referrer : !1
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = this;
        this.value = "", this.type = this.TYPE_TEXT, this.type = this.TYPE_TEXT, this.direction = "ltr", this.noprevent = !0, e = e || {}, e.className = "inputNative " + (e.className || ""), r.call(this, e), this.init(e), this.addListener("keydown", function(e) {
            e.code === o.back && (e.stop = !0)
        }), this.$body.addEventListener("input", function(e) {
            t.value = t.$body.value, void 0 !== t.events.input && t.emit("input", {
                value: t.$body.value
            })
        }), this.addListener("focus", function() {
            t.$body.focus()
        }), this.addListener("blur", function() {
            t.$body.blur()
        })
    }
    var r = n(4),
        o = n(1);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.init = function(e) {
        void 0 !== e.type && (this.$body.type = this.type = e.type), void 0 !== e.value && (this.$body.value = this.value = e.value), void 0 !== e.placeholder && (this.$body.placeholder = e.placeholder), void 0 !== e.direction && (this.$node.dir = this.direction = e.direction)
    }, i.prototype.addChar = function(e, t) {
        t = void 0 === t ? this.value.length : t, this.value = this.value.substring(0, t) + e + this.value.substring(t, this.value.length), this.$body.value = this.value, void 0 !== this.events.input && this.emit("input", {
            value: this.value
        })
    }, i.prototype.removeChar = function(e) {
        e = void 0 === e ? this.value.length - 1 : e, this.value.length > 0 && (this.value = this.value.substring(0, e) + this.value.substring(e + 1, this.value.length), this.$body.value = this.value, void 0 !== this.events.input && this.emit("input", {
            value: this.value
        })), this.$body.value = this.value
    }, i.prototype.setCaretPosition = function(e) {
        this.$body.setSelectionRange(e, e)
    }, i.prototype.getCaretPosition = function() {
        return this.$body.selectionStart
    }, i.prototype.setValue = function(e) {
        this.$body.value !== e && (this.$body.value = e, void 0 !== this.events.input && this.emit("input", {
            value: this.value
        }))
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n = 1 ^ e;
        N || (t ? (N = !0, d.getPage({
            page: x - 1,
            count: 1
        }).then(function(t) {
            --x, --I, p[n].model.init({
                channel: t[0]
            }), T = n, E = e, m = n
        }, function(e) {})) : (N = !0, d.getPage({
            page: I + 1,
            count: 1
        }).then(function(t) {
            ++x, ++I, p[e].model.init({
                channel: t[0]
            }), T = n, E = e, m = n
        }, function(t) {
            N = !1, "overflow" === t && (++x, ++I, p[e].model.init({
                channel: {
                    id: "!",
                    title: ""
                }
            }), p[e].data = [{
                id: "",
                value: "",
                publishedAt: "",
                icon: "",
                duration: "",
                title: "",
                channelTitle: "",
                viewCount: "",
                locale: {
                    publishedAt: "",
                    viewCount: "",
                    channelTitle: ""
                }
            }], p[e].viewIndex = null, p[e].renderView(0), p[e].focusIndex(0), p[e].$title.innerHTML = "", T = n, E = e, m = n, p[T].$node.style.top = w, p[E].$node.style.top = b, p[m].focus())
        })))
    }
    var r = n(1),
        o = n(2),
        a = n(12),
        s = n(6),
        l = n(34),
        c = n(13),
        u = n(51),
        d = n(30),
        h = n(14),
        p = [],
        f = document.getElementById("pm"),
        m = 0,
        g = new a({
            $node: document.getElementById("pmTabCategoryContent"),
            visible: !1,
            events: {
                focus: function() {
                    p[m].focus()
                },
                show: function() {
                    f.style.backgroundImage = ""
                }
            }
        }),
        v = new l({
            $node: document.getElementById("pmCategorySearch"),
            $body: document.getElementById("pmCategorySearchBody"),
            events: {
                focus: function() {
                    this.setValue(""), o.navigate("ps")
                }
            }
        }),
        y = n(8),
        b = 0,
        w = 0,
        T = 0,
        E = 1,
        x = 0,
        I = 1,
        S = -1,
        N = !0;
    d.addListener("category:changed", function() {
        clearTimeout(S), S = setTimeout(function() {
            y.hide()
        }, 1e4), 0 === p.length && (p.push(new c({
            $node: document.getElementById("pmListCategoryVideos0Node"),
            $body: document.getElementById("pmListCategoryVideos0Body"),
            $title: document.getElementById("pmCategoryChannelTitle0"),
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: s.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === r.left && h.focus()
                },
                "view:ready": function() {
                    p[T].$node.style.top = w, p[E] && (p[E].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[m].focus(), N = !1
                },
                "view:error": function(e) {
                    N = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), g.focusEntry = p[m], p[T].$node.style.top = w, p[E] && (p[E].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[m].focus()) : 0 === x && i(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && o.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), p.push(new c({
            $node: document.getElementById("pmListCategoryVideos1Node"),
            $body: document.getElementById("pmListCategoryVideos1Body"),
            $title: document.getElementById("pmCategoryChannelTitle1"),
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: s.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === r.left && (h.focus(), g.focusEntry = this)
                },
                "view:ready": function() {
                    p[T].$node.style.top = w, p[E].$node.style.top = b, this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[m].focus(), N = !1
                },
                "view:error": function(e) {
                    N = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), g.focusEntry = p[m], p[T].$node.style.top = w, p[E] && (p[E].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[m].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && o.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), g.add(p[0]), g.add(p[1]), p[0].focus(), p[0].addListener("keydown", function(e) {
            e.code === r.down ? i(0, !1) : e.code === r.up ? x > 0 ? i(0, !0) : v.focus() : e.code === r.playPause && o.navigate("pp", {
                    channel: this.model.channel,
                    video: this.$focusItem.data,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
        }), p[1].addListener("keydown", function(e) {
            e.code === r.down ? i(1, !1) : e.code === r.up ? x > 0 ? i(1, !0) : v.focus() : e.code === r.playPause && o.navigate("pp", {
                    channel: this.model.channel,
                    video: this.$focusItem.data,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
        }), b = window.getComputedStyle(p[1].$node).getPropertyValue("top")), d.getPage({
            page: 0,
            count: 1
        }).then(function(e) {
            x = 0, T = 0, E = 1, I = 1, m = 0, p[T].model.filter({
                channel: e[0]
            }), d.getPage({
                page: 1,
                count: 1
            }).then(function(e) {
                p[E].model.filter({
                    channel: e[0]
                }), p[m].focus()
            })
        })["catch"](function(e) {})
    }), g.activate = function(e) {
        this.show(), d.setActiveCategory(e) ? y.show() : p[m].focus()
    }, g.add(v), e.exports = g
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n = 1 ^ e;
        S || (t ? (S = !0, N.getPage({
            page: E - 1,
            count: 1
        }, function(t, i) {
            --E, --x, d[n].data = data, d[n].viewIndex = null, d[n].renderView(0), d[n].focusIndex(0), d[n].emit("view:ready"), b = n, w = e, T = n
        })) : (S = !0, N.getPage({
            page: x + 1,
            count: 1
        }, function(t, i) {
            ++E, ++x, d[e].data = data, d[e].viewIndex = null, d[e].renderView(0), d[e].focusIndex(0), d[e].emit("view:ready"), b = n, w = e, T = n
        })))
    }
    var r = n(1),
        o = n(2),
        a = n(12),
        s = n(6),
        l = n(13),
        c = n(53),
        u = (n(10), n(14)),
        d = [],
        h = new a({
            $node: document.getElementById("pmTabChannelContent"),
            visible: !1,
            events: {
                focus: function() {
                    d[T].focus()
                }
            }
        }),
        p = n(8),
        f = document.getElementById("pm"),
        m = document.getElementById("pmChannelTitle"),
        g = document.getElementById("pmChannelIcon"),
        v = 0,
        y = 0,
        b = 0,
        w = 1,
        T = 0,
        E = 0,
        x = 1,
        I = -1,
        S = !0,
        N = new c,
        C = {
            id: null,
            title: null
        };
    N.addListener("content:changed", function() {
        clearTimeout(I), I = setTimeout(function() {
            p.hide()
        }, 1e4), 0 === d.length && (d.push(new l({
            $node: document.getElementById("pmListChannelVideos0Node"),
            $body: document.getElementById("pmListChannelVideos0Body"),
            $title: document.getElementById("pmChannelTitle0"),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: s.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === r.left && u.focus()
                },
                "view:ready": function() {
                    h.focusEntry = d[T], d[b].$node.style.top = y, d[w] && (d[w].$node.style.top = v), this.show(), p.hide(), clearTimeout(I), d[T].focus(), S = !1
                },
                "view:error": function(e) {
                    S = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), h.focusEntry = d[T], d[b].$node.style.top = y, d[w] && (d[w].$node.style.top = v), this.show(), p.hide(), clearTimeout(I), d[T].focus()) : 0 === E && i(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && o.navigate("pp", {
                        channel: C,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), d.push(new l({
            $node: document.getElementById("pmListChannelVideos1Node"),
            $body: document.getElementById("pmListChannelVideos1Body"),
            $title: document.getElementById("pmChannelTitle1"),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: s.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === r.left && u.focus()
                },
                "view:ready": function() {
                    h.focusEntry = d[T], d[b].$node.style.top = y, d[w].$node.style.top = v, this.show(), p.hide(), clearTimeout(I), d[T].focus(), S = !1
                },
                "view:error": function(e) {
                    S = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: " ",
                        duration: "",
                        title: " ",
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), h.focusEntry = d[T], d[b].$node.style.top = y, d[w] && (d[w].$node.style.top = v), this.$title.innerHTML = this.model.channel.title ? this.model.channel.title : "&nbsp;", this.show(), p.hide(), clearTimeout(I), d[T].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && o.navigate("pp", {
                        channel: C,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), h.add(d[0]), h.add(d[1]), d[0].focus(), d[0].addListener("keydown", function(e) {
            e.code === r.down ? i(0, !1) : e.code === r.up ? E > 0 && i(0, !0) : e.code === r.playPause && o.navigate("pp", {
                    channel: this.model.channel,
                    video: this.$focusItem.data,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
        }), d[1].addListener("keydown", function(e) {
            e.code === r.down ? i(1, !1) : e.code === r.up ? E > 0 && i(1, !0) : e.code === r.playPause && o.navigate("pp", {
                    channel: this.model.channel,
                    video: this.$focusItem.data,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
        }), v = window.getComputedStyle(d[1].$node).getPropertyValue("top")), N.getPage({
            page: 0,
            count: 1
        }, function(e, t) {
            E = 0, b = 0, w = 1, x = 1, T = 0, d[b].data = t, d[b].viewIndex = null, d[b].renderView(0), d[b].focusIndex(0), d[b].emit("view:ready"), N.getPage({
                page: 1,
                count: 1
            }, function(e, t) {
                d[w].data = t, d[w].viewIndex = null, d[w].renderView(0), d[w].focusIndex(0), d[w].emit("view:ready"), d[T].focus()
            })
        })
    }), h.activate = function(e) {
        this.show(), d.length && d[T].focus(), N.channelId = C.id = e.id, N.getInfo({}, function(e, t) {
            t.background = t.background.split("=")[0] + "=w1920-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no", f.style.backgroundImage = "url(" + t.background + ")", g.style.backgroundImage = "url(" + t.icon + ")", C.title = m.innerHTML = t.title, C.icon = t.icon, N.emit("content:changed")
        })
    }, e.exports = h
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n = 1 ^ e;
        N || (t ? (N = !0, d.getPage({
            page: x - 1,
            count: 1
        }, function(t, i) {
            --x, --I, T = n, E = e, g = n, f[n].data = i, f[n].viewIndex = null, f[n].renderView(0), f[n].focusIndex(0), f[n].emit("view:ready")
        })) : (N = !0, d.getPage({
            page: I + 1,
            count: 1
        }, function(t, i) {
            return i ? void(t || 0 === i.length ? (++x, ++I, f[e].data = [{
                id: "",
                value: "",
                publishedAt: "",
                icon: "",
                duration: "",
                title: "",
                channelTitle: "",
                viewCount: "",
                locale: {
                    publishedAt: "",
                    viewCount: "",
                    channelTitle: ""
                }
            }], f[e].viewIndex = null, f[e].renderView(0), f[e].focusIndex(0), f[e].$title.innerHTML = "", T = n, E = e, g = n, f[T].$node.style.top = w, f[E].$node.style.top = b, f[g].focus(), f[e].emit("view:ready")) : (++x, ++I, T = n, E = e, g = n, f[e].data = i, f[e].viewIndex = null, f[e].renderView(0), f[e].focusIndex(0), f[e].emit("view:ready"))) : void f[e].emit("view:ready")
        })))
    }
    var r = n(1),
        o = n(2),
        a = n(12),
        s = n(6),
        l = n(34),
        c = n(13),
        u = n(54),
        d = new u,
        h = n(14),
        p = n(8),
        f = [],
        m = document.getElementById("pm"),
        g = 0,
        v = new a({
            $node: document.getElementById("pmTabMainContent"),
            visible: !1,
            events: {
                focus: function() {
                    f[g].focus()
                },
                show: function() {
                    m.style.backgroundImage = ""
                }
            }
        }),
        y = new l({
            $node: document.getElementById("pmMainSearch"),
            $body: document.getElementById("pmMainSearchBody"),
            events: {
                focus: function() {
                    this.setValue(""), o.navigate("ps")
                }
            }
        }),
        b = 0,
        w = 0,
        T = 0,
        E = 1,
        x = 0,
        I = 1,
        S = -1,
        N = !0;
    v.activate = function() {
        this.show(), clearTimeout(S), S = setTimeout(function() {
            p.hide()
        }, 1e4), 0 === f.length && (p.show(), f.push(new c({
            $node: document.getElementById("pmListMainVideos0Node"),
            $body: document.getElementById("pmListMainVideos0Body"),
            $title: document.getElementById("pmMainChannelTitle0"),
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: s.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === r.left && h.focus()
                },
                "view:ready": function() {
                    v.focusEntry = f[g], f[T].$node.style.top = w, f[E] && (f[E].$node.style.top = b), this.$title.innerHTML = "", f[g] && f[g].data.length > 0 && f[g].data[0].value && (p.hide(), clearTimeout(S)), this.show(), f[g].focus(), N = !1
                },
                "view:error": function(e) {
                    N = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), v.focusEntry = f[g], f[T].$node.style.top = w, f[E] && (f[E].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, p.hide(), this.show(), clearTimeout(S), f[g].focus()) : 0 === x && i(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && o.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                },
                focus: function() {
                    v.focusEntry = this
                }
            }
        })), f.push(new c({
            $node: document.getElementById("pmListMainVideos1Node"),
            $body: document.getElementById("pmListMainVideos1Body"),
            $title: document.getElementById("pmMainChannelTitle1"),
            model: new u({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: s.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === r.left && h.focus()
                },
                "view:ready": function() {
                    v.focusEntry = f[g], f[T].$node.style.top = w, f[E].$node.style.top = b, this.$title.innerHTML = "", f[g] && f[g].data.length > 0 && f[g].data[0].value && (p.hide(), clearTimeout(S)), this.show(), clearTimeout(S), f[g].focus(), N = !1
                },
                "view:error": function(e) {
                    N = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), v.focusEntry = f[g], f[T].$node.style.top = w, f[E] && (f[E].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), p.hide(), clearTimeout(S), f[g].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && o.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                },
                focus: function() {
                    v.focusEntry = this
                }
            }
        })), v.add(f[0]), v.add(f[1]), f[0].addListener("keydown", function(e) {
            e.code === r.down ? i(0, !1) : e.code === r.up ? x > 0 ? i(0, !0) : y.focus() : e.code === r.playPause && o.navigate("pp", {
                    channel: this.model.channel,
                    video: this.$focusItem.data,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
        }), f[1].addListener("keydown", function(e) {
            e.code === r.down ? i(1, !1) : e.code === r.up ? x > 0 ? i(1, !0) : y.focus() : e.code === r.playPause && o.navigate("pp", {
                    channel: this.model.channel,
                    video: this.$focusItem.data,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
        }), b = window.getComputedStyle(f[1].$node).getPropertyValue("top"), d.getPage({
            page: 0,
            count: 1
        }, function(e, t) {
            x = 0, T = 0, E = 1, I = 1, g = 0, f[T].data = t, f[T].viewIndex = null, f[T].renderView(0), f[T].focusIndex(0), f[T].emit("view:ready"), d.getPage({
                page: 1,
                count: 1
            }, function(e, t) {
                f[E].data = t, f[E].viewIndex = null, f[E].renderView(0), f[E].focusIndex(0), f[E].emit("view:ready"), f[g].focus()
            })
        })), f[g].focus()
    }, v.add(y), e.exports = v
}, function(e, t, n) {
    "use strict";

    function i() {
        return c.languageIndex !== T ? (o ? (o.show(), s = u.current.activeComponent, o.focus()) : (o = new p({
            visible: !1,
            events: {
                keydown: function(e) {
                    var t, n;
                    e.code === l.ok ? (c.settings.language = m.languages[T], T = -1, c.settings.languageOverwrite = 1, c.reload()) : e.code === l.back && (r.data[r.size - 1].value = T = c.languageIndex, e.stop = !0, o.hide(), b.show(), s.focus(), t = r.$focusItem.index, n = r.viewIndex, r.viewIndex = null, r.renderView(n), r.focusIndex(t))
                }
            }
        }), o.$body.classList.add("modalExit"), o.$header.innerHTML = gettext("In order to apply a new language, you must restart the application"), o.$content.innerHTML = "", o.$content.appendChild(a = document.createElement("div")), a.innerText = gettext("Ok"), a.className = "btn confirm" + (w ? " old" : ""), o.$content.appendChild(a = document.createElement("div")), a.className = "btn back" + (w ? " old" : ""), a.innerText = gettext("Cancel"), o.$footer.innerHTML = "", u.current.add(o), b.hide(), o.show(), s = u.current.activeComponent, o.focus()), !0) : !1
    }
    var r, o, a, s, l = n(1),
        c = n(3),
        u = n(2),
        d = n(6),
        h = n(12),
        p = n(35),
        f = (n(9), n(22)),
        m = n(7),
        g = document.getElementById("pm"),
        v = new h({
            $node: document.getElementById("pmTabSettings"),
            visible: !1,
            events: {
                show: function() {
                    g.style.backgroundImage = ""
                }
            }
        }),
        y = n(14),
        b = n(15),
        w = -1 !== ["AuraHD2", "AuraHD3", "AuraHD8", "MAG254", "MAG275", "MAG276", "WR320"].indexOf(f.deviceModel()),
        T = c.languageIndex;
    y.addListener("focus", function() {
        i()
    }), v.activate = function() {
        var e, t;
        r || (t = n(10), e = n(31), r = new d({
            $node: document.getElementById("pmSettingsList"),
            type: d.prototype.TYPE_HORIZONTAL,
            size: 1,
            data: [{
                title: gettext("Language"),
                value: c.languageIndex,
                values: m.languagesLocalized,
                description: gettext("Interface language"),
                icon: "icon flag",
                onclick: function(e) {
                    var n = t.nextLang(this.value);
                    this.value = n, T = n, e.$value.innerText = m.languagesLocalized[n]
                }
            }],
            render: function(e, t) {
                e.ready || (e.$container = e.appendChild(document.createElement("div")), e.$container.className = "container", e.$title = e.$container.appendChild(document.createElement("div")), e.$title.className = "title", e.$value = e.$container.appendChild(document.createElement("div")), e.$value.className = "value", e.$icon = e.$container.appendChild(document.createElement("div")), e.$description = e.appendChild(document.createElement("div")), e.$description.className = "description", e.ready = !0), e.$title.innerText = t.title, e.$value.innerHTML = t.values[t.value], e.$icon.className = t.icon, e.$description.innerText = t.description
            },
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case l.right:
                            break;
                        case l.left:
                            this.viewIndex > 0 && this.viewIndex < this.data.length - this.size ? this.renderView(this.viewIndex + 1) : this.move(e.code);
                            break;
                        case l.ok:
                            void 0 !== this.events["click:item"] && this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            });
                            break;
                        case l.back:
                        case l.exit:
                            i() && (e.stop = !0)
                    }
                },
                "click:item": function(e) {
                    e.$item.data.onclick(e.$item)
                },
                overflow: function(e) {
                    e.direction === l.left && y.focus()
                }
            }
        }), v.add(r), r.renderView = function(e) {
            var t, n, i, r, o;
            if (this.viewIndex !== e) {
                for (r = this.viewIndex, this.viewIndex = o = e, n = 0; n < this.size; n++) t = this.$body.children[n], i = this.data[e], void 0 !== i ? (t.data = i, t.index = e, this.renderItem(t, i), i.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "", t.ready = !1), e++;
                return void 0 !== this.events["move:view"] && this.emit("move:view", {
                    prevIndex: r,
                    currIndex: o
                }), !0
            }
            return !1
        }), this.show(), r.focus(), r.focusIndex(0), v.focusEntry = r
    }, e.exports = v
}, function(e, t, n) {
    "use strict";
    var i, r, o = n(1),
        a = n(3),
        s = n(12),
        l = n(6),
        c = (n(19), n(13)),
        u = new s({
            visible: !1,
            focusable: !0,
            $node: document.getElementById("ppPanelVideo")
        }),
        d = new l({
            $node: document.getElementById("ppMenuList"),
            cycle: !0,
            size: 3,
            visible: !1,
            data: [{
                value: "icon playlist"
            }, {
                value: "icon related"
            }, {
                value: "icon upload"
            }],
            render: function(e, t) {
                e.className = t.value
            },
            events: {
                "focus:item": function(e) {
                    h[e.$curr.index].focus()
                }
            }
        }),
        h = [],
        p = -1,
        f = 10;
    u.addListener("show", function(e) {
        var t = h[0].$focusItem && h[0].$focusItem.$videoThumb ? 0 : 1;
        u.focus(), i = e.video, r = {
            id: i.channelId,
            title: i.channelTitle
        }, d.show(), d.$focusItem = null, d.focusIndex(t), void 0 !== e.onDelayPlayNext && (f = e.onDelayPlayNext, p = setInterval(function() {
            0 >= f ? (h[t].$focusItem.$videoThumb.innerText = "", h[t].emit("keydown", {
                code: o.right
            }), h[t].emit("keydown", {
                code: o.ok
            })) : h[0].$focusItem && h[0].$focusItem.$videoThumb && (--f, h[0].$focusItem.$videoThumb.innerText = f)
        }, 1e3))
    }), u.addListener("hide", function() {
        d.hide(), clearInterval(p)
    }), h.push(new c({
        visible: !1,
        $node: document.getElementById("ppChannelVideoListNode"),
        $body: document.getElementById("ppChannelVideoListBody"),
        $title: document.getElementById("ppChannelTitle"),
        type: l.prototype.TYPE_HORIZONTAL,
        events: {
            "view:ready": function() {
                this.focusIndex(0)
            },
            "view:error": function() {
                d.focusIndex(1)
            },
            focus: function() {
                this.show()
            },
            blur: function() {
                this.hide()
            },
            keydown: function(e) {
                switch (e.code) {
                    case o.right:
                        this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                        break;
                    case o.left:
                        this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                        break;
                    case o.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
                clearInterval(p), h[d.$focusItem.index].$focusItem && (h[d.$focusItem.index].$focusItem.$videoThumb.innerText = ""), e.code !== o.down && e.code !== o.up || d.move(e.code)
            },
            "click:item": function(e) {
                i = e.$item.data, a.player.playContent({
                    channel: r,
                    video: i,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
            }
        }
    })), h.push(new c({
        visible: !1,
        $node: document.getElementById("ppVideoRelationsListNode"),
        $body: document.getElementById("ppVideoRelationsListBody"),
        $title: document.getElementById("ppVideoRelationsTitle"),
        type: l.prototype.TYPE_HORIZONTAL,
        events: {
            focus: function() {
                this.show()
            },
            "view:ready": function() {
                this.focusIndex(0)
            },
            blur: function() {
                this.hide()
            },
            keydown: function(e) {
                switch (e.code) {
                    case o.right:
                        this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                        break;
                    case o.left:
                        this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                        break;
                    case o.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
                clearInterval(p), h[d.$focusItem.index].$focusItem && (h[d.$focusItem.index].$focusItem.$videoThumb.innerText = ""), e.code !== o.down && e.code !== o.up || d.move(e.code)
            },
            "click:item": function(e) {
                i = e.$item.data, r = {
                    id: i.channelId,
                    title: i.channelTitle
                }, a.player.playContent({
                    channel: r,
                    video: i,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
            }
        }
    })), h.push(new c({
        visible: !1,
        $node: document.getElementById("ppChannelUploadsListNode"),
        $body: document.getElementById("ppChannelUploadsVideoListBody"),
        $title: document.getElementById("ppChannelUploadsTitle"),
        type: l.prototype.TYPE_HORIZONTAL,
        events: {
            focus: function() {
                this.show()
            },
            "view:ready": function() {
                this.focusIndex(0)
            },
            blur: function() {
                this.hide()
            },
            keydown: function(e) {
                switch (e.code) {
                    case o.right:
                        this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                        break;
                    case o.left:
                        this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                        break;
                    case o.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
                clearInterval(p), h[d.$focusItem.index].$focusItem && (h[d.$focusItem.index].$focusItem.$videoThumb.innerText = ""), e.code !== o.down && e.code !== o.up || d.move(e.code)
            },
            "click:item": function(e) {
                i = e.$item.data, a.player.playContent({
                    channel: r,
                    video: i,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
            }
        }
    })), h.forEach(function(e) {
        u.add(e)
    }), e.exports = u
}, function(e, t, n) {
    "use strict";
    var i, r = n(3),
        o = n(69),
        a = n(10),
        s = n(7),
        l = new o({
            $node: document.getElementById("psKeyboard"),
            cycleY: !1,
            events: {
                "click:item": function(e) {
                    -1 !== e.$item.data.className.indexOf("keyGlobe") ? (r.settings.keyboardLanguage = a.nextLang(r.settings.keyboardLanguage), this.viewIndex = null, this.init({
                        data: n(20)("./" + s.languages[r.settings.keyboardLanguage])
                    }), this.focusItem(i), gSTB.SetInputLang(s.languages[r.settings.keyboardLanguage])) : -1 !== e.$item.data.className.indexOf("nums") ? this.init({
                        data: [
                            [{
                                value: "1",
                                className: "symbol"
                            }, {
                                value: "2",
                                className: "symbol"
                            }, {
                                value: "3",
                                className: "symbol"
                            }, {
                                value: "^",
                                className: "symbol"
                            }, {
                                value: "`",
                                className: "symbol"
                            }, {
                                value: "!",
                                className: "symbol"
                            }, {
                                value: "#",
                                className: "symbol"
                            }, {
                                value: "$",
                                className: "symbol"
                            }, {
                                value: "%",
                                className: "symbol"
                            }],
                            [{
                                value: "4",
                                className: "symbol"
                            }, {
                                value: "5",
                                className: "symbol"
                            }, {
                                value: "6",
                                className: "symbol"
                            }, {
                                value: "&",
                                className: "symbol"
                            }, {
                                value: "(",
                                className: "symbol"
                            }, {
                                value: ")",
                                className: "symbol"
                            }, {
                                value: "*",
                                className: "symbol"
                            }, {
                                value: ";",
                                className: "symbol"
                            }, {
                                value: ":",
                                className: "symbol"
                            }],
                            [{
                                value: "7",
                                className: "symbol"
                            }, {
                                value: "8",
                                className: "symbol"
                            }, {
                                value: "9",
                                className: "symbol"
                            }, {
                                value: "~",
                                className: "symbol"
                            }, {
                                value: "/",
                                className: "symbol"
                            }, {
                                value: "|",
                                className: "symbol"
                            }, {
                                value: "%",
                                className: "symbol"
                            }, {
                                value: ":",
                                className: "symbol"
                            }, {
                                value: "?",
                                className: "symbol"
                            }],
                            [{
                                value: "№",
                                className: "symbol"
                            }, {
                                value: "0",
                                className: "symbol"
                            }, {
                                value: "[",
                                className: "symbol"
                            }, {
                                value: "]",
                                className: "symbol"
                            }, {
                                value: '"',
                                className: "symbol"
                            }, {
                                value: "'",
                                className: "symbol"
                            }, {
                                value: "{",
                                className: "symbol"
                            }, {
                                value: "}",
                                className: "symbol"
                            }, {
                                value: "ABC",
                                className: "symbol letters"
                            }]
                        ]
                    }) : -1 !== e.$item.data.className.indexOf("letters") && this.init({
                            data: n(20)("./" + s.languages[r.settings.keyboardLanguage])
                        })
                }
            },
            render: function(e, t) {
                "keyGlobe" === t.className ? (e.innerHTML = s.languagesCodeLocalized[r.settings.keyboardLanguage], i = e) : e.innerHTML = t.value, t.className && (e.className = "item " + t.className)
            },
            data: n(20)("./" + s.languages[r.settings.keyboardLanguage])
        });
    gSTB.SetInputLang(s.languages[r.settings.keyboardLanguage]), e.exports = l
}, function(e, t, n) {
    "use strict";

    function i() {
        u.isMuted && (h.setMute(0), u.isMuted = !1, p.classList.remove("muted")), u.currentVolume >= g && (u.currentVolume -= g, p.innerText = u.currentVolume.toString(), 0 !== u.currentVolume && u.currentVolume - g > 0 ? f.innerText = (u.currentVolume - g).toString() : f.innerText = "", m.innerText = (u.currentVolume + g).toString(), h.setVolume(u.currentVolume))
    }

    function r() {
        u.isMuted && (h.setMute(0), u.isMuted = !1, p.classList.remove("muted")), u.currentVolume + g <= 100 && (u.currentVolume += g, p.innerText = u.currentVolume.toString(), 100 !== u.currentVolume ? m.innerText = (u.currentVolume + g).toString() : m.innerText = "", h.setVolume(u.currentVolume), f.innerText = (u.currentVolume - g).toString())
    }

    function o() {
        u.isMuted ? (h.setMute(0), u.isMuted = !1, p.classList.remove("muted")) : (h.setMute(1), u.isMuted = !0, p.classList.add("muted"))
    }
    var a, s = "volumeWidget",
        l = document.getElementById(s),
        c = n(24),
        u = new c({
            $node: l,
            visible: !1
        }),
        d = n(1),
        h = n(22),
        p = document.getElementById("volumeCurrentValue"),
        f = document.getElementById("volumeBotValue"),
        m = document.getElementById("volumeTopValue"),
        g = 5;
    u.isMuted = !!h.isMuted(), u.currentVolume = h.getVolume(), p.innerText = u.currentVolume.toString(), u.currentVolume <= 100 - g && (m.innerText = (u.currentVolume + g).toString()), u.currentVolume >= g ? f.innerText = (u.currentVolume - g).toString() : f.innerText = "0", u.changeVolume = function(e) {
        switch (e) {
            case d.volumeDown:
                i();
                break;
            case d.volumeUp:
                r();
                break;
            case d.mute:
                o()
        }
        this.display(2)
    }, u.display = function(e) {
        u.visible && clearTimeout(a), void 0 !== e && (a = setTimeout(function() {
            u.hide()
        }, 1e3 * e)), this.show()
    }, u.setValue = function(e) {
        0 > e || e > 100 || (this.currentVolume = e, p.innerText = u.currentVolume.toString(), 0 !== u.currentVolume && u.currentVolume - g > 0 ? f.innerText = (u.currentVolume - g).toString() : f.innerText = "", 100 !== u.currentVolume ? m.innerText = (u.currentVolume + g).toString() : m.innerText = "")
    }, e.exports = u
}, function(e, t) {
    "use strict";
    e.exports = {
        GCQmVzdCBvZiBZb3VUdWJl: "icon popular",
        GCUGFpZCBDaGFubmVscw: "icon purchases",
        GCTXVzaWM: "icon music",
        GCQ29tZWR5: "icon humor",
        GCRmlsbSAmIEVudGVydGFpbm1lbnQ: "icon entertainment",
        GCR2FtaW5n: "icon games",
        GCQmVhdXR5ICYgRmFzaGlvbg: "icon social",
        GCRnJvbSBUVg: "fa fa-youtube-play",
        GCQXV0b21vdGl2ZQ: "fa fa-car",
        GCQW5pbWF0aW9u: "fa fa-picture-o",
        GCVG9wIFlvdVR1YmUgQ29sbGVjdGlvbnM: "icon popular",
        GCVG9wIEJsb2dz: "icon social",
        GCU3BvcnRz: "icon sport",
        GCSG93LXRvICYgRElZ: "fa fa-wrench",
        GCVGVjaA: "icon hobbie",
        GCU2NpZW5jZSAmIEVkdWNhdGlvbg: "fa fa-book",
        GCQ29va2luZyAmIEhlYWx0aA: "fa fa-spoon",
        GCQ2F1c2VzICYgTm9uLXByb2ZpdHM: "fa fa-users",
        GCTmV3cyAmIFBvbGl0aWNz: "icon news",
        GCTGlmZXN0eWxl: "fa fa-leaf"
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.pages = {}, this.channel = null, s.call(this), e = e || {}, void 0 !== e.events && this.addListeners(e.events), this.init(e)
    }
    var r, o, a = n(11),
        s = n(50),
        l = n(9);
    i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.getPage = function(e) {
        var t = this;
        return o || (r = n(23), o = gettext("Author")), e.channel = e.channel || this.channel, e.count = e.count || 6, e.page = +e.page || 0, new a(function(n, i) {
            return e.channel ? void t.getPlaylists({
                count: 1,
                channel: e.channel,
                page: e.page
            }).then(function(r) {
                e.playlist = r[0], t.getPlayListItems(e).then(n, i)
            }) : void i(e)
        })
    }, i.prototype.getPlaylists = function(e) {
        var t = this,
            n = "playlists?part=id";
        if (e.channel = e.channel || this.channel, e.channel) {
            if (e.page) {
                if (!t.pages[e.page]) return a.reject("no page");
                n += "&pageToken=" + t.pages[e.page]
            }
            return n += "&channelId=" + e.channel.id + "&maxResults=" + e.count, l.request("GET", n).then(function(n) {
                return n = JSON.parse(n), n.nextPageToken && (t.pages[e.page + 1] = n.nextPageToken), n.prevPageToken && (t.pages[e.page - 1] = n.prevPageToken), n.items
            })
        }
    }, i.prototype.getTotalInfoPlaylists = function(e) {
        var t = this,
            n = "playlists?part=snippet";
        if (e.channel = void 0 === e.channel ? this.channel : e.channel, e.page) {
            if (!t.pages[e.page]) return a.reject("no page");
            n += "&pageToken=" + t.pages[e.page]
        }
        if (e.channel) n += "&channelId=" + e.channel.id;
        else {
            if (!(void 0 !== e.id && e.id.length > 0)) return a.resolve([]);
            n += "&id=" + e.id
        }
        return void 0 !== e.count && (n += "&maxResults=" + e.count), l.request("GET", n).then(function(n) {
            return n = JSON.parse(n), n.nextPageToken && (t.pages[e.page + 1] = n.nextPageToken), n.prevPageToken && (t.pages[e.page - 1] = n.prevPageToken), n.items
        })
    }, i.prototype.getChannelBackground = function(e) {
        return e = e || this.channel, l.request("GET", "channels?part=brandingSettings&id=" + e.id).then(function(e) {
            return e = JSON.parse(e), e.items[0].brandingSettings.image.bannerTvImageUrl
        })
    }, i.prototype.init = function(e) {
        var t = !1;
        return void 0 !== e.channel && (this.channel ? this.channel && this.channel.id !== e.channel.id && (t = !0, this.channel = e.channel) : (t = !0, this.channel = e.channel)), e.mode && this.mode !== e.mode && (this.mode = e.mode), t ? (this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.playlist ? "pid:" + e.playlist.id + ";p:" + e.page : "PLAYLIST"
    }

    function r(e) {
        this.pages = {}, this.playlist = null, l.call(this), e = e || {}, void 0 !== e.events && this.addListeners(e.events), this.init(e)
    }
    var o, a, s = n(11),
        l = n(5),
        c = n(9),
        u = !1,
        d = n(32);
    r.prototype = Object.create(l.prototype), r.prototype.constructor = r, r.prototype.getPage = function(e) {
        var t, n = this;
        return e.playlist = e.playlist || this.playlist, e.page = +e.page || 0, e.count = e.count || 20, new s(function(r, o) {
            if (t = d.get(i(e))) r(t);
            else {
                if (!e.playlist.id) return void o(e);
                n.getPlayListItems(e).then(r, o)
            }
        })
    }, r.prototype.getPlayListItems = function(e) {
        var t = this,
            r = [],
            l = "",
            h = "playlistItems?part=snippet&playlistId=" + e.playlist.id + "&maxResults=" + (e.count || 30);
        if (e.page = +e.page || 0, u || (u = n(10), o = n(23), a = gettext("Author")), e.page) {
            if (!t.pages[e.page]) return s.reject();
            h += "&pageToken=" + t.pages[e.page]
        }
        return c.request("GET", h).then(function(n) {
            try {
                n = JSON.parse(n), n.nextPageToken && (t.pages[e.page + 1] = n.nextPageToken), n.prevPageToken && (t.pages[e.page - 1] = n.prevPageToken), n.items.forEach(function(e) {
                    l += e.snippet.resourceId.videoId + ","
                })
            } catch (s) {}
            return t.getMovies(l.substr(0, l.length - 1)).then(function(t) {
                var n, s, l = +new Date;
                for (n = t.length, s = 0; n > s; ++s) r.push({
                    value: 1,
                    id: t[s].id,
                    channelTitle: t[s].snippet.channelTitle,
                    duration: c.normalizeVideoDuration(t[s].contentDetails.duration),
                    realDuration: t[s].contentDetails.duration,
                    viewCount: t[s].statistics.viewCount,
                    publishedAt: t[s].snippet.publishedAt,
                    dimension: t[s].contentDetails.dimension,
                    definition: t[s].contentDetails.definition,
                    title: t[s].snippet.localized.title,
                    icon: t[s].snippet.thumbnails.high.url,
                    channelId: t[s].snippet.channelId,
                    type: "video",
                    locale: {
                        publishedAt: o(t[s].snippet.publishedAt, l),
                        viewCount: t[s].statistics.viewCount + " " + ngettext("view", "views", +t[s].statistics.viewCount),
                        channelTitle: a + ": " + t[s].snippet.channelTitle
                    }
                });
                return d.set(i(e), r, 3e5), r
            })
        })
    }, r.prototype.getMovies = function(e) {
        var t, n, i, r, o = [];
        for (n = e.split(","), i = 0, r = n.length; r > i; ++i)(t = d.get("vid:" + n[i])) && o.push(t);
        return c.request("GET", "videos?part=statistics,contentDetails,snippet&id=" + e).then(function(e) {
            for (e = JSON.parse(e).items, i = 0, r = e.length; r > i; ++i) d.set("vid:" + e[i].id, e[i], 6e4);
            return e
        })
    }, r.prototype.init = function(e) {
        return void 0 !== e.playlist ? (this.playlist ? this.playlist && this.playlist.id !== e.playlist.id && (this.playlist = e.playlist) : this.playlist = e.playlist, this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.pages = {}, this.searchQuery = "", this.relatedToVideoId = "", this.channelId = "", this.order = "", this.type = "", u.call(this), e = e || {}, this.filter(e)
    }
    var r, o, a, s = n(11),
        l = n(3),
        c = n(9),
        u = n(49);
    i.prototype = Object.create(u.prototype), i.prototype.constructor = i, i.prototype.getPage = function(e) {
        var t, i = this;
        return r || (r = n(10), a = n(23), o = gettext("Author")), new s(function(n, r) {
            if (e.channel = e.channel || i.channel, e.type = i.type, e.searchQuery = e.searchQuery || i.searchQuery, e.page = +e.page || 0, e.relatedToVideoId = e.relatedToVideoId || i.relatedToVideoId, t = "search?part=id&maxResults=" + (e.count || 6), e.page) {
                if (!i.pages[e.page]) return void r();
                t += "&pageToken=" + i.pages[e.page]
            }
            e.channel && e.channel.id && (t += "&channelId=" + e.channel.id), i.order && (t += "&order=" + i.order), e.relatedToVideoId ? t += "&type=video&relatedToVideoId=" + e.relatedToVideoId : e.type && (t += "&type=video"), e.searchQuery && (t += "&q=" + encodeURIComponent(e.searchQuery)), l.settings.safeSearch && (t += "&safeSearch=strict"), c.request("GET", t).then(function(t) {
                var l, u = [],
                    d = 0,
                    h = {},
                    p = {},
                    f = "",
                    m = "",
                    g = "";
                if (t = JSON.parse(t), t.nextPageToken && (i.pages[e.page + 1] = t.nextPageToken), t.prevPageToken && (i.pages[e.page - 1] = t.prevPageToken), t = t.items, 0 === t.length) r("empty");
                else {
                    for (d = t.length, l = 0; d > l; ++l) "youtube#video" === t[l].id.kind ? f += t[l].id.videoId + "," : "youtube#channel" === t[l].id.kind ? (m += t[l].id.channelId + ",", h[l] = 1) : "youtube#playlist" === t[l].id.kind && (g += t[l].id.playlistId + ",", p[l] = 1);
                    s.all([i.getMovies(f.substr(0, f.length - 1)), i.getChannelsInfo(m.substr(0, m.length - 1)), i.getTotalInfoPlaylists({
                        id: g.substr(0, g.length - 1),
                        channel: !1
                    })]).then(function(e) {
                        var t = +new Date,
                            i = 0,
                            r = 0,
                            s = 0;
                        for (l = 0; d > l; ++l) h[l] && e[1][r] ? (u.push({
                            value: 1,
                            id: e[1][r].id,
                            title: e[1][r].snippet.localized.title,
                            icon: e[1][r].snippet.thumbnails.high.url,
                            type: "channel",
                            viewCount: e[1][r].statistics.viewCount,
                            commentCount: e[1][r].statistics.commentCount,
                            subscriberCount: e[1][r].statistics.subscriberCount,
                            hiddenSubscriberCount: e[1][r].statistics.hiddenSubscriberCount,
                            videoCount: e[1][r].statistics.videoCount,
                            locale: {
                                subscriberCount: e[1][r].statistics.subscriberCount + " " + ngettext("subscriber", "subscribers", +e[1][r].statistics.subscriberCount)
                            }
                        }), ++r) : p[l] && e[2][s] ? (u.push({
                            value: 1,
                            playlistId: e[2][s].id,
                            channel: {
                                title: e[2][s].snippet.channelTitle,
                                id: e[2][s].snippet.channelId
                            },
                            title: e[2][s].snippet.title,
                            icon: e[2][s].snippet.thumbnails.high.url,
                            type: "playlist",
                            channelTitle: e[2][s].snippet.channelTitle,
                            viewCount: " ",
                            duration: " ",
                            publishedAt: e[2][s].snippet.publishedAt,
                            locale: {
                                publishedAt: a(e[2][s].snippet.publishedAt, t),
                                viewCount: " ",
                                channelTitle: e[2][s].snippet.channelTitle ? o + ": " + e[2][s].snippet.channelTitle : " "
                            }
                        }), ++s) : e[0][i] && (u.push({
                                value: 1,
                                id: e[0][i].id,
                                channelTitle: e[0][i].snippet.channelTitle,
                                duration: c.normalizeVideoDuration(e[0][i].contentDetails.duration),
                                realDuration: e[0][i].contentDetails.duration,
                                viewCount: e[0][i].statistics.viewCount,
                                publishedAt: e[0][i].snippet.publishedAt,
                                dimension: e[0][i].contentDetails.dimension,
                                definition: e[0][i].contentDetails.definition,
                                title: e[0][i].snippet.localized.title,
                                icon: e[0][i].snippet.thumbnails.high.url,
                                channelId: e[0][i].snippet.channelId,
                                type: "video",
                                locale: {
                                    publishedAt: a(e[0][i].snippet.publishedAt, t),
                                    viewCount: ngettext("view", "views", +e[0][i].statistics.viewCount) + " " + e[0][i].statistics.viewCount,
                                    channelTitle: o + ": " + e[0][i].snippet.channelTitle
                                }
                            }), ++i);
                        n(u)
                    }, function(e) {})["catch"](function(e) {})
                }
            })["catch"](function(e) {})
        })
    }, i.prototype.getChannelsInfo = function(e) {
        return e ? c.request("GET", "channels?part=snippet,statistics&id=" + e).then(function(e) {
            return JSON.parse(e).items
        }) : s.resolve([])
    }, i.prototype.filter = function(e) {
        var t = !1;
        return void 0 !== e.channel && this.init({
            channel: e.channel
        }), void 0 !== e.searchQuery && this.searchQuery !== e.searchQuery && (t = !0, this.searchQuery = e.searchQuery), void 0 !== e.relatedToVideoId && this.relatedToVideoId !== e.relatedToVideoId && (t = !0, this.relatedToVideoId = e.relatedToVideoId), void 0 !== e.order && this.order !== e.order && (t = !0, this.order = e.order), void 0 !== e.type && this.type !== e.type && (t = !0, this.type = e.type), t ? (this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = i
}, function(e, t, n) {
    (function(t, n) {
        e.exports = function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.i = function(e) {
                return e
            }, t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 54)
        }([function(e, t, n) {
            "use strict";
            (function(e) {
                function i() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }

                function r() {
                    return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function o(e, t) {
                    if (r() < t) throw new RangeError("Invalid typed array length");
                    return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = a.prototype) : (null === e && (e = new a(t)), e.length = t), e
                }

                function a(e, t, n) {
                    if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, n);
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return u(this, e)
                    }
                    return s(this, e, t, n)
                }

                function s(e, t, n, i) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, n, i) : "string" == typeof t ? d(e, t, n) : f(e, t)
                }

                function l(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                    if (0 > e) throw new RangeError('"size" argument must not be negative')
                }

                function c(e, t, n, i) {
                    return l(t), 0 >= t ? o(e, t) : void 0 !== n ? "string" == typeof i ? o(e, t).fill(n, i) : o(e, t).fill(n) : o(e, t)
                }

                function u(e, t) {
                    if (l(t), e = o(e, 0 > t ? 0 : 0 | m(t)), !a.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; t > n; ++n) e[n] = 0;
                    return e
                }

                function d(e, t, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | v(t, n);
                    e = o(e, i);
                    var r = e.write(t, n);
                    return r !== i && (e = e.slice(0, r)), e
                }

                function h(e, t) {
                    var n = t.length < 0 ? 0 : 0 | m(t.length);
                    e = o(e, n);
                    for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
                    return e
                }

                function p(e, t, n, i) {
                    if (t.byteLength, 0 > n || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), a.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = a.prototype) : e = h(e, t), e
                }

                function f(e, t) {
                    if (a.isBuffer(t)) {
                        var n = 0 | m(t.length);
                        return e = o(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || J(t.length) ? o(e, 0) : h(e, t);
                        if ("Buffer" === t.type && K(t.data)) return h(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }

                function m(e) {
                    if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                    return 0 | e
                }

                function g(e) {
                    return +e != e && (e = 0), a.alloc(+e)
                }

                function v(e, t) {
                    if (a.isBuffer(e)) return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return G(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return W(e).length;
                        default:
                            if (i) return G(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function y(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return "";
                    if (n >>>= 0, t >>>= 0, t >= n) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return $(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return _(this, t, n);
                        case "ascii":
                            return O(this, t, n);
                        case "latin1":
                        case "binary":
                            return L(this, t, n);
                        case "base64":
                            return A(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return D(this, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), i = !0
                    }
                }

                function b(e, t, n) {
                    var i = e[t];
                    e[t] = e[n], e[n] = i
                }

                function w(e, t, n, i, r) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), 0 > n && (n = e.length + n), n >= e.length) {
                        if (r) return -1;
                        n = e.length - 1
                    } else if (0 > n) {
                        if (!r) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = a.from(t, i)), a.isBuffer(t)) return 0 === t.length ? -1 : T(e, t, n, i, r);
                    if ("number" == typeof t) return t = 255 & t, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : T(e, [t], n, i, r);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function T(e, t, n, i, r) {
                    function o(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    var a = 1,
                        s = e.length,
                        l = t.length;
                    if (void 0 !== i && (i = String(i).toLowerCase(), "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, l /= 2, n /= 2
                    }
                    var c;
                    if (r) {
                        var u = -1;
                        for (c = n; s > c; c++)
                            if (o(e, c) === o(t, -1 === u ? 0 : c - u)) {
                                if (-1 === u && (u = c), c - u + 1 === l) return u * a
                            } else -1 !== u && (c -= c - u), u = -1
                    } else
                        for (n + l > s && (n = s - l),
                                 c = n; c >= 0; c--) {
                            for (var d = !0, h = 0; l > h; h++)
                                if (o(e, c + h) !== o(t, h)) {
                                    d = !1;
                                    break
                                }
                            if (d) return c
                        }
                    return -1
                }

                function E(e, t, n, i) {
                    n = Number(n) || 0;
                    var r = e.length - n;
                    i ? (i = Number(i), i > r && (i = r)) : i = r;
                    var o = t.length;
                    if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                    i > o / 2 && (i = o / 2);
                    for (var a = 0; i > a; ++a) {
                        var s = parseInt(t.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        e[n + a] = s
                    }
                    return a
                }

                function x(e, t, n, i) {
                    return X(G(t, e.length - n), e, n, i)
                }

                function I(e, t, n, i) {
                    return X(Y(t), e, n, i)
                }

                function S(e, t, n, i) {
                    return I(e, t, n, i)
                }

                function N(e, t, n, i) {
                    return X(W(t), e, n, i)
                }

                function C(e, t, n, i) {
                    return X(z(t, e.length - n), e, n, i)
                }

                function A(e, t, n) {
                    return 0 === t && n === e.length ? Q.fromByteArray(e) : Q.fromByteArray(e.slice(t, n))
                }

                function _(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var i = [], r = t; n > r;) {
                        var o = e[r],
                            a = null,
                            s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                        if (n >= r + s) {
                            var l, c, u, d;
                            switch (s) {
                                case 1:
                                    128 > o && (a = o);
                                    break;
                                case 2:
                                    l = e[r + 1], 128 === (192 & l) && (d = (31 & o) << 6 | 63 & l, d > 127 && (a = d));
                                    break;
                                case 3:
                                    l = e[r + 1], c = e[r + 2], 128 === (192 & l) && 128 === (192 & c) && (d = (15 & o) << 12 | (63 & l) << 6 | 63 & c, d > 2047 && (55296 > d || d > 57343) && (a = d));
                                    break;
                                case 4:
                                    l = e[r + 1], c = e[r + 2], u = e[r + 3], 128 === (192 & l) && 128 === (192 & c) && 128 === (192 & u) && (d = (15 & o) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & u, d > 65535 && 1114112 > d && (a = d))
                            }
                        }
                        null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, i.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), i.push(a), r += s
                    }
                    return k(i)
                }

                function k(e) {
                    var t = e.length;
                    if (ee >= t) return String.fromCharCode.apply(String, e);
                    for (var n = "", i = 0; t > i;) n += String.fromCharCode.apply(String, e.slice(i, i += ee));
                    return n
                }

                function O(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; n > r; ++r) i += String.fromCharCode(127 & e[r]);
                    return i
                }

                function L(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; n > r; ++r) i += String.fromCharCode(e[r]);
                    return i
                }

                function $(e, t, n) {
                    var i = e.length;
                    (!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
                    for (var r = "", o = t; n > o; ++o) r += F(e[o]);
                    return r
                }

                function D(e, t, n) {
                    for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                    return r
                }

                function B(e, t, n) {
                    if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function P(e, t, n, i, r, o) {
                    if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > r || o > t) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > e.length) throw new RangeError("Index out of range")
                }

                function R(e, t, n, i) {
                    0 > t && (t = 65535 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 2); o > r; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                }

                function M(e, t, n, i) {
                    0 > t && (t = 4294967295 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 4); o > r; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
                }

                function q(e, t, n, i, r, o) {
                    if (n + i > e.length) throw new RangeError("Index out of range");
                    if (0 > n) throw new RangeError("Index out of range")
                }

                function V(e, t, n, i, r) {
                    return r || q(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, n, i, 23, 4), n + 4
                }

                function U(e, t, n, i, r) {
                    return r || q(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, n, i, 52, 8), n + 8
                }

                function H(e) {
                    if (e = j(e).replace(te, ""), e.length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }

                function j(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }

                function F(e) {
                    return 16 > e ? "0" + e.toString(16) : e.toString(16)
                }

                function G(e, t) {
                    t = t || 1 / 0;
                    for (var n, i = e.length, r = null, o = [], a = 0; i > a; ++a) {
                        if (n = e.charCodeAt(a), n > 55295 && 57344 > n) {
                            if (!r) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === i) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (56320 > n) {
                                (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                                continue
                            }
                            n = (r - 55296 << 10 | n - 56320) + 65536
                        } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (r = null, 128 > n) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (2048 > n) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (65536 > n) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(1114112 > n)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function Y(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }

                function z(e, t) {
                    for (var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                    return o
                }

                function W(e) {
                    return Q.toByteArray(H(e))
                }

                function X(e, t, n, i) {
                    for (var r = 0; i > r && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
                    return r
                }

                function J(e) {
                    return e !== e
                }
                var Q = n(38),
                    Z = n(39),
                    K = n(21);
                t.Buffer = a, t.SlowBuffer = g, t.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : i(), t.kMaxLength = r(), a.poolSize = 8192, a._augment = function(e) {
                    return e.__proto__ = a.prototype, e
                }, a.from = function(e, t, n) {
                    return s(null, e, t, n)
                }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                    value: null,
                    configurable: !0
                })), a.alloc = function(e, t, n) {
                    return c(null, e, t, n)
                }, a.allocUnsafe = function(e) {
                    return u(null, e)
                }, a.allocUnsafeSlow = function(e) {
                    return u(null, e)
                }, a.isBuffer = function(e) {
                    return !(null == e || !e._isBuffer)
                }, a.compare = function(e, t) {
                    if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); o > r; ++r)
                        if (e[r] !== t[r]) {
                            n = e[r], i = t[r];
                            break
                        }
                    return i > n ? -1 : n > i ? 1 : 0
                }, a.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, a.concat = function(e, t) {
                    if (!K(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return a.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var i = a.allocUnsafe(t),
                        r = 0;
                    for (n = 0; n < e.length; ++n) {
                        var o = e[n];
                        if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(i, r), r += o.length
                    }
                    return i
                }, a.byteLength = v, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; e > t; t += 2) b(this, t, t + 1);
                    return this
                }, a.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; e > t; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
                    return this
                }, a.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; e > t; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
                    return this
                }, a.prototype.toString = function() {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : y.apply(this, arguments)
                }, a.prototype.equals = function(e) {
                    if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e ? !0 : 0 === a.compare(this, e)
                }, a.prototype.inspect = function() {
                    var e = "",
                        n = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
                }, a.prototype.compare = function(e, t, n, i, r) {
                    if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), 0 > t || n > e.length || 0 > i || r > this.length) throw new RangeError("out of range index");
                    if (i >= r && t >= n) return 0;
                    if (i >= r) return -1;
                    if (t >= n) return 1;
                    if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0;
                    for (var o = r - i, s = n - t, l = Math.min(o, s), c = this.slice(i, r), u = e.slice(t, n), d = 0; l > d; ++d)
                        if (c[d] !== u[d]) {
                            o = c[d], s = u[d];
                            break
                        }
                    return s > o ? -1 : o > s ? 1 : 0
                }, a.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, a.prototype.indexOf = function(e, t, n) {
                    return w(this, e, t, n, !0)
                }, a.prototype.lastIndexOf = function(e, t, n) {
                    return w(this, e, t, n, !1)
                }, a.prototype.write = function(e, t, n, i) {
                    if (void 0 === t) i = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                    }
                    var r = this.length - t;
                    if ((void 0 === n || n > r) && (n = r), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var o = !1;;) switch (i) {
                        case "hex":
                            return E(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return x(this, e, t, n);
                        case "ascii":
                            return I(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return S(this, e, t, n);
                        case "base64":
                            return N(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return C(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), o = !0
                    }
                }, a.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var ee = 4096;
                a.prototype.slice = function(e, t) {
                    var n = this.length;
                    e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), e > t && (t = e);
                    var i;
                    if (a.TYPED_ARRAY_SUPPORT) i = this.subarray(e, t), i.__proto__ = a.prototype;
                    else {
                        var r = t - e;
                        i = new a(r, void 0);
                        for (var o = 0; r > o; ++o) i[o] = this[o + e]
                    }
                    return i
                }, a.prototype.readUIntLE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                    for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                    return i
                }, a.prototype.readUIntBE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                    for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
                    return i
                }, a.prototype.readUInt8 = function(e, t) {
                    return t || B(e, 1, this.length), this[e]
                }, a.prototype.readUInt16LE = function(e, t) {
                    return t || B(e, 2, this.length), this[e] | this[e + 1] << 8
                }, a.prototype.readUInt16BE = function(e, t) {
                    return t || B(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, a.prototype.readUInt32LE = function(e, t) {
                    return t || B(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, a.prototype.readUInt32BE = function(e, t) {
                    return t || B(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, a.prototype.readIntLE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                    for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                    return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
                }, a.prototype.readIntBE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                    for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
                    return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o
                }, a.prototype.readInt8 = function(e, t) {
                    return t || B(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, a.prototype.readInt16LE = function(e, t) {
                    t || B(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, a.prototype.readInt16BE = function(e, t) {
                    t || B(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, a.prototype.readInt32LE = function(e, t) {
                    return t || B(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, a.prototype.readInt32BE = function(e, t) {
                    return t || B(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, a.prototype.readFloatLE = function(e, t) {
                    return t || B(e, 4, this.length), Z.read(this, e, !0, 23, 4)
                }, a.prototype.readFloatBE = function(e, t) {
                    return t || B(e, 4, this.length), Z.read(this, e, !1, 23, 4)
                }, a.prototype.readDoubleLE = function(e, t) {
                    return t || B(e, 8, this.length), Z.read(this, e, !0, 52, 8)
                }, a.prototype.readDoubleBE = function(e, t) {
                    return t || B(e, 8, this.length), Z.read(this, e, !1, 52, 8)
                }, a.prototype.writeUIntLE = function(e, t, n, i) {
                    if (e = +e, t = 0 | t, n = 0 | n, !i) {
                        var r = Math.pow(2, 8 * n) - 1;
                        P(this, e, t, n, r, 0)
                    }
                    var o = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < n && (o *= 256);) this[t + a] = e / o & 255;
                    return t + n
                }, a.prototype.writeUIntBE = function(e, t, n, i) {
                    if (e = +e, t = 0 | t, n = 0 | n, !i) {
                        var r = Math.pow(2, 8 * n) - 1;
                        P(this, e, t, n, r, 0)
                    }
                    var o = n - 1,
                        a = 1;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = e / a & 255;
                    return t + n
                }, a.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                }, a.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
                }, a.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
                }, a.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4
                }, a.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
                }, a.prototype.writeIntLE = function(e, t, n, i) {
                    if (e = +e, t = 0 | t, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        P(this, e, t, n, r - 1, -r)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < n && (a *= 256);) 0 > e && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, a.prototype.writeIntBE = function(e, t, n, i) {
                    if (e = +e, t = 0 | t, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        P(this, e, t, n, r - 1, -r)
                    }
                    var o = n - 1,
                        a = 1,
                        s = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) 0 > e && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, a.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, a.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
                }, a.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
                }, a.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4
                }, a.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || P(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
                }, a.prototype.writeFloatLE = function(e, t, n) {
                    return V(this, e, t, !0, n)
                }, a.prototype.writeFloatBE = function(e, t, n) {
                    return V(this, e, t, !1, n)
                }, a.prototype.writeDoubleLE = function(e, t, n) {
                    return U(this, e, t, !0, n)
                }, a.prototype.writeDoubleBE = function(e, t, n) {
                    return U(this, e, t, !1, n)
                }, a.prototype.copy = function(e, t, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && n > i && (i = n), i === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (0 > t) throw new RangeError("targetStart out of bounds");
                    if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (0 > i) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                    var r, o = i - n;
                    if (this === e && t > n && i > t)
                        for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
                    else if (1e3 > o || !a.TYPED_ARRAY_SUPPORT)
                        for (r = 0; o > r; ++r) e[r + t] = this[r + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o
                }, a.prototype.fill = function(e, t, n, i) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                            var r = e.charCodeAt(0);
                            256 > r && (e = r)
                        }
                        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !a.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                    } else "number" == typeof e && (e = 255 & e);
                    if (0 > t || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (t >= n) return this;
                    t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
                    var o;
                    if ("number" == typeof e)
                        for (o = t; n > o; ++o) this[o] = e;
                    else {
                        var s = a.isBuffer(e) ? e : G(new a(e, i).toString()),
                            l = s.length;
                        for (o = 0; n - t > o; ++o) this[o + t] = s[o % l]
                    }
                    return this
                };
                var te = /[^+\/0-9A-Za-z-_]/g
            }).call(t, n(2))
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return this instanceof i ? (c.call(this, e), u.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", r)) : new i(e)
            }

            function r() {
                this.allowHalfOpen || this._writableState.ended || s(o, this)
            }

            function o(e) {
                e.end()
            }
            var a = Object.keys || function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t
                };
            e.exports = i;
            var s = n(12),
                l = n(5);
            l.inherits = n(3);
            var c = n(23),
                u = n(15);
            l.inherits(i, c);
            for (var d = a(u.prototype), h = 0; h < d.length; h++) {
                var p = d[h];
                i.prototype[p] || (i.prototype[p] = u.prototype[p])
            }
        }, function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (i) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }, function(e, t) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : e.exports = function(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }, function(e, t) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function r(e) {
                if (u === setTimeout) return setTimeout(e, 0);
                if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
                try {
                    return u(e, 0)
                } catch (t) {
                    try {
                        return u.call(null, e, 0)
                    } catch (t) {
                        return u.call(this, e, 0)
                    }
                }
            }

            function o(e) {
                if (d === clearTimeout) return clearTimeout(e);
                if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
                try {
                    return d(e)
                } catch (t) {
                    try {
                        return d.call(null, e)
                    } catch (t) {
                        return d.call(this, e)
                    }
                }
            }

            function a() {
                m && p && (m = !1, p.length ? f = p.concat(f) : g = -1, f.length && s())
            }

            function s() {
                if (!m) {
                    var e = r(a);
                    m = !0;
                    for (var t = f.length; t;) {
                        for (p = f, f = []; ++g < t;) p && p[g].run();
                        g = -1, t = f.length
                    }
                    p = null, m = !1, o(e)
                }
            }

            function l(e, t) {
                this.fun = e, this.array = t
            }

            function c() {}
            var u, d, h = e.exports = {};
            ! function() {
                try {
                    u = "function" == typeof setTimeout ? setTimeout : n
                } catch (e) {
                    u = n
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    d = i
                }
            }();
            var p, f = [],
                m = !1,
                g = -1;
            h.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                f.push(new l(e, t)), 1 !== f.length || m || r(s)
            }, l.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, h.cwd = function() {
                return "/"
            }, h.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, h.umask = function() {
                return 0
            }
        }, function(e, t, n) {
            (function(e) {
                function n(e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === g(e)
                }

                function i(e) {
                    return "boolean" == typeof e
                }

                function r(e) {
                    return null === e
                }

                function o(e) {
                    return null == e
                }

                function a(e) {
                    return "number" == typeof e
                }

                function s(e) {
                    return "string" == typeof e
                }

                function l(e) {
                    return "symbol" == typeof e
                }

                function c(e) {
                    return void 0 === e
                }

                function u(e) {
                    return "[object RegExp]" === g(e)
                }

                function d(e) {
                    return "object" == typeof e && null !== e
                }

                function h(e) {
                    return "[object Date]" === g(e)
                }

                function p(e) {
                    return "[object Error]" === g(e) || e instanceof Error
                }

                function f(e) {
                    return "function" == typeof e
                }

                function m(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
                }

                function g(e) {
                    return Object.prototype.toString.call(e)
                }
                t.isArray = n, t.isBoolean = i, t.isNull = r, t.isNullOrUndefined = o, t.isNumber = a, t.isString = s, t.isSymbol = l, t.isUndefined = c, t.isRegExp = u, t.isObject = d, t.isDate = h, t.isError = p, t.isFunction = f, t.isPrimitive = m, t.isBuffer = e.isBuffer
            }).call(t, n(0).Buffer)
        }, function(e, t, n) {
            function i() {
                r.call(this)
            }
            e.exports = i;
            var r = n(7).EventEmitter,
                o = n(3);
            o(i, r), i.Readable = n(47), i.Writable = n(49), i.Duplex = n(44), i.Transform = n(48), i.PassThrough = n(46), i.Stream = i, i.prototype.pipe = function(e, t) {
                function n(t) {
                    e.writable && !1 === e.write(t) && c.pause && c.pause()
                }

                function i() {
                    c.readable && c.resume && c.resume()
                }

                function o() {
                    u || (u = !0, e.end())
                }

                function a() {
                    u || (u = !0, "function" == typeof e.destroy && e.destroy())
                }

                function s(e) {
                    if (l(), 0 === r.listenerCount(this, "error")) throw e
                }

                function l() {
                    c.removeListener("data", n), e.removeListener("drain", i), c.removeListener("end", o), c.removeListener("close", a), c.removeListener("error", s), e.removeListener("error", s), c.removeListener("end", l), c.removeListener("close", l), e.removeListener("close", l)
                }
                var c = this;
                c.on("data", n), e.on("drain", i), e._isStdio || t && t.end === !1 || (c.on("end", o), c.on("close", a));
                var u = !1;
                return c.on("error", s), e.on("error", s), c.on("end", l), c.on("close", l), e.on("close", l), e.emit("pipe", c), e
            }
        }, function(e, t) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function i(e) {
                return "function" == typeof e
            }

            function r(e) {
                return "number" == typeof e
            }

            function o(e) {
                return "object" == typeof e && null !== e
            }

            function a(e) {
                return void 0 === e
            }
            e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
                if (!r(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, n.prototype.emit = function(e) {
                var t, n, r, s, l, c;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error) throw t;
                    var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw u.context = t, u
                }
                if (n = this._events[e], a(n)) return !1;
                if (i(n)) switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
                } else if (o(n))
                    for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), r = c.length, l = 0; r > l; l++) c[l].apply(this, s);
                return !0
            }, n.prototype.addListener = function(e, t) {
                var r;
                if (!i(t)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, "function" == typeof console.trace)), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
                function n() {
                    this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
                }
                if (!i(t)) throw TypeError("listener must be a function");
                var r = !1;
                return n.listener = t, this.on(e, n), this
            }, n.prototype.removeListener = function(e, t) {
                var n, r, a, s;
                if (!i(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (n = this._events[e], a = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (o(n)) {
                    for (s = a; s-- > 0;)
                        if (n[s] === t || n[s].listener && n[s].listener === t) {
                            r = s;
                            break
                        }
                    if (0 > r) return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, n.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (n = this._events[e], i(n)) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, n.prototype.listeners = function(e) {
                var t;
                return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, n.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (i(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, n.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        }, function(e, t, n) {
            "use strict";

            function i() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function r(e, t, n) {
                if (e && c.isObject(e) && e instanceof i) return e;
                var r = new i;
                return r.parse(e, t, n), r
            }

            function o(e) {
                return c.isString(e) && (e = r(e)), e instanceof i ? e.format() : i.prototype.format.call(e)
            }

            function a(e, t) {
                return r(e, !1, !0).resolve(t)
            }

            function s(e, t) {
                return e ? r(e, !1, !0).resolveObject(t) : t
            }
            var l = n(41),
                c = n(51);
            t.parse = r, t.resolve = a, t.resolveObject = s, t.format = o, t.Url = i;
            var u = /^([a-z0-9.+-]+:)/i,
                d = /:[0-9]*$/,
                h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                p = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
                f = ["{", "}", "|", "\\", "^", "`"].concat(p),
                m = ["'"].concat(f),
                g = ["%", "/", "?", ";", "#"].concat(m),
                v = ["/", "?", "#"],
                y = 255,
                b = /^[+a-z0-9A-Z_-]{0,63}$/,
                w = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                T = {
                    javascript: !0,
                    "javascript:": !0
                },
                E = {
                    javascript: !0,
                    "javascript:": !0
                },
                x = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                I = n(13);
            i.prototype.parse = function(e, t, n) {
                if (!c.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                var i = e.indexOf("?"),
                    r = -1 !== i && i < e.indexOf("#") ? "?" : "#",
                    o = e.split(r),
                    a = /\\/g;
                o[0] = o[0].replace(a, "/"), e = o.join(r);
                var s = e;
                if (s = s.trim(), !n && 1 === e.split("#").length) {
                    var d = h.exec(s);
                    if (d) return this.path = s, this.href = s, this.pathname = d[1], d[2] ? (this.search = d[2], t ? this.query = I.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                }
                var p = u.exec(s);
                if (p) {
                    p = p[0];
                    var f = p.toLowerCase();
                    this.protocol = f, s = s.substr(p.length)
                }
                if (n || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var S = "//" === s.substr(0, 2);
                    !S || p && E[p] || (s = s.substr(2), this.slashes = !0)
                }
                if (!E[p] && (S || p && !x[p])) {
                    for (var N = -1, C = 0; C < v.length; C++) {
                        var A = s.indexOf(v[C]); - 1 !== A && (-1 === N || N > A) && (N = A)
                    }
                    var _, k;
                    k = -1 === N ? s.lastIndexOf("@") : s.lastIndexOf("@", N), -1 !== k && (_ = s.slice(0, k), s = s.slice(k + 1), this.auth = decodeURIComponent(_)), N = -1;
                    for (var C = 0; C < g.length; C++) {
                        var A = s.indexOf(g[C]); - 1 !== A && (-1 === N || N > A) && (N = A)
                    } - 1 === N && (N = s.length), this.host = s.slice(0, N), s = s.slice(N), this.parseHost(), this.hostname = this.hostname || "";
                    var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!O)
                        for (var L = this.hostname.split(/\./), C = 0, $ = L.length; $ > C; C++) {
                            var D = L[C];
                            if (D && !D.match(b)) {
                                for (var B = "", P = 0, R = D.length; R > P; P++) B += D.charCodeAt(P) > 127 ? "x" : D[P];
                                if (!B.match(b)) {
                                    var M = L.slice(0, C),
                                        q = L.slice(C + 1),
                                        V = D.match(w);
                                    V && (M.push(V[1]), q.unshift(V[2])), q.length && (s = "/" + q.join(".") + s), this.hostname = M.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > y ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = l.toASCII(this.hostname));
                    var U = this.port ? ":" + this.port : "",
                        H = this.hostname || "";
                    this.host = H + U, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
                }
                if (!T[f])
                    for (var C = 0, $ = m.length; $ > C; C++) {
                        var j = m[C];
                        if (-1 !== s.indexOf(j)) {
                            var F = encodeURIComponent(j);
                            F === j && (F = escape(j)), s = s.split(j).join(F)
                        }
                    }
                var G = s.indexOf("#"); - 1 !== G && (this.hash = s.substr(G), s = s.slice(0, G));
                var Y = s.indexOf("?");
                if (-1 !== Y ? (this.search = s.substr(Y), this.query = s.substr(Y + 1), t && (this.query = I.parse(this.query)), s = s.slice(0, Y)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), x[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var U = this.pathname || "",
                        z = this.search || "";
                    this.path = U + z
                }
                return this.href = this.format(), this
            }, i.prototype.format = function() {
                var e = this.auth || "";
                e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "",
                    n = this.pathname || "",
                    i = this.hash || "",
                    r = !1,
                    o = "";
                this.host ? r = e + this.host : this.hostname && (r = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (o = I.stringify(this.query));
                var a = this.search || o && "?" + o || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || x[t]) && r !== !1 ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function(e) {
                    return encodeURIComponent(e)
                }), a = a.replace("#", "%23"), t + r + n + a + i
            }, i.prototype.resolve = function(e) {
                return this.resolveObject(r(e, !1, !0)).format()
            }, i.prototype.resolveObject = function(e) {
                if (c.isString(e)) {
                    var t = new i;
                    t.parse(e, !1, !0), e = t
                }
                for (var n = new i, r = Object.keys(this), o = 0; o < r.length; o++) {
                    var a = r[o];
                    n[a] = this[a]
                }
                if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
                if (e.slashes && !e.protocol) {
                    for (var s = Object.keys(e), l = 0; l < s.length; l++) {
                        var u = s[l];
                        "protocol" !== u && (n[u] = e[u])
                    }
                    return x[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
                }
                if (e.protocol && e.protocol !== n.protocol) {
                    if (!x[e.protocol]) {
                        for (var d = Object.keys(e), h = 0; h < d.length; h++) {
                            var p = d[h];
                            n[p] = e[p]
                        }
                        return n.href = n.format(), n
                    }
                    if (n.protocol = e.protocol, e.host || E[e.protocol]) n.pathname = e.pathname;
                    else {
                        for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), n.pathname = f.join("/")
                    }
                    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                        var m = n.pathname || "",
                            g = n.search || "";
                        n.path = m + g
                    }
                    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
                }
                var v = n.pathname && "/" === n.pathname.charAt(0),
                    y = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    b = y || v || n.host && e.pathname,
                    w = b,
                    T = n.pathname && n.pathname.split("/") || [],
                    f = e.pathname && e.pathname.split("/") || [],
                    I = n.protocol && !x[n.protocol];
                if (I && (n.hostname = "", n.port = null, n.host && ("" === T[0] ? T[0] = n.host : T.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), b = b && ("" === f[0] || "" === T[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, T = f;
                else if (f.length) T || (T = []), T.pop(), T = T.concat(f), n.search = e.search, n.query = e.query;
                else if (!c.isNullOrUndefined(e.search)) {
                    if (I) {
                        n.hostname = n.host = T.shift();
                        var S = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
                        S && (n.auth = S.shift(), n.host = n.hostname = S.shift())
                    }
                    return n.search = e.search, n.query = e.query, c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
                }
                if (!T.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
                for (var N = T.slice(-1)[0], C = (n.host || e.host || T.length > 1) && ("." === N || ".." === N) || "" === N, A = 0, _ = T.length; _ >= 0; _--) N = T[_], "." === N ? T.splice(_, 1) : ".." === N ? (T.splice(_, 1), A++) : A && (T.splice(_, 1), A--);
                if (!b && !w)
                    for (; A--; A) T.unshift("..");
                !b || "" === T[0] || T[0] && "/" === T[0].charAt(0) || T.unshift(""), C && "/" !== T.join("/").substr(-1) && T.push("");
                var k = "" === T[0] || T[0] && "/" === T[0].charAt(0);
                if (I) {
                    n.hostname = n.host = k ? "" : T.length ? T.shift() : "";
                    var S = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
                    S && (n.auth = S.shift(), n.host = n.hostname = S.shift())
                }
                return b = b || n.host && T.length, b && !k && T.unshift(""), T.length ? n.pathname = T.join("/") : (n.pathname = null, n.path = null), c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }, i.prototype.parseHost = function() {
                var e = this.host,
                    t = d.exec(e);
                t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }
        }, function(e, t, n) {
            var i = n(13),
                r = n(8),
                o = n(29).AllHtmlEntities,
                a = n(19),
                s = "https://www.youtube.com/watch?v=",
                l = /(?:(\d+)h)?(?:(\d+)m(?!s))?(?:(\d+)s)?(?:(\d+)(?:ms)?)?/;
            t.parseTime = function(e) {
                var t = l.exec(e.toString()),
                    n = t[1] || 0,
                    i = t[2] || 0,
                    r = t[3] || 0,
                    o = t[4] || 0;
                return 36e5 * n + 6e4 * i + 1e3 * r + parseInt(o, 10)
            };
            var c = {
                    mp3: 1,
                    vorbis: 2,
                    aac: 3,
                    opus: 4,
                    flac: 5
                },
                u = {
                    "Sorenson H.283": 1,
                    "MPEG-4 Visual": 2,
                    VP8: 3,
                    VP9: 4,
                    "H.264": 5
                };
            t.sortFormats = function(e, t) {
                function n(e) {
                    if (e.bitrate) {
                        var t = e.bitrate.split("-");
                        return parseFloat(t[t.length - 1], 10)
                    }
                    return 0
                }

                function i(e) {
                    var t = e.audioBitrate || 0,
                        n = c[e.audioEncoding] || 0;
                    return t + n / 10
                }
                var r = e.resolution ? parseInt(e.resolution.slice(0, -1), 10) : 0,
                    o = t.resolution ? parseInt(t.resolution.slice(0, -1), 10) : 0,
                    a = 2 * ~~!!r + ~~!!e.audioBitrate,
                    s = 2 * ~~!!o + ~~!!t.audioBitrate;
                if (a === s) {
                    if (r === o) {
                        var l = n(e),
                            d = n(t);
                        if (l === d) {
                            var h = i(e),
                                p = i(t);
                            if (h === p) {
                                var f = u[e.encoding] || 0,
                                    m = u[t.encoding] || 0;
                                return m - f
                            }
                            return p - h
                        }
                        return d - l
                    }
                    return o - r
                }
                return s - a
            }, t.chooseFormat = function(e, n) {
                if ("object" == typeof n.format) return n.format;
                if (n.filter && (e = t.filterFormats(e, n.filter), 0 === e.length)) return new Error("No formats found with custom filter");
                var i, r = n.quality || "highest";
                switch (r) {
                    case "highest":
                        i = e[0];
                        break;
                    case "lowest":
                        i = e[e.length - 1];
                        break;
                    default:
                        var o = function(t) {
                            for (var n = 0, i = e.length; i > n; n++)
                                if (e[n].itag === "" + t) return e[n];
                            return null
                        };
                        if (Array.isArray(r))
                            for (var a = 0, s = r.length; s > a && !(i = o(r[a])); a++);
                        else i = o(r)
                }
                return i ? i.rtmp ? new Error("rtmp protocol not supported") : i : new Error("No such format found: " + r)
            }, t.filterFormats = function(e, t) {
                var n;
                switch (t) {
                    case "video":
                        n = function(e) {
                            return e.bitrate
                        };
                        break;
                    case "videoonly":
                        n = function(e) {
                            return e.bitrate && !e.audioBitrate
                        };
                        break;
                    case "audio":
                        n = function(e) {
                            return e.audioBitrate
                        };
                        break;
                    case "audioonly":
                        n = function(e) {
                            return !e.bitrate && e.audioBitrate
                        };
                        break;
                    default:
                        n = t
                }
                return e.filter(n)
            }, t.between = function(e, t, n) {
                var i;
                return i = e.indexOf(t), -1 === i ? "" : (e = e.slice(i + t.length), i = e.indexOf(n), -1 === i ? "" : e = e.slice(0, i))
            };
            var d = /^[a-zA-Z0-9-_]{11}$/;
            t.getVideoID = function(e) {
                if (d.test(e)) return e;
                var t = r.parse(e, !0),
                    n = t.query.v;
                if ("youtu.be" === t.hostname || ("youtube.com" === t.hostname || "www.youtube.com" === t.hostname) && !n) {
                    var i = t.pathname.split("/");
                    n = i[i.length - 1]
                }
                if (!n) throw new Error("No video id found: " + e);
                if (!d.test(n)) throw new Error("Video id (" + n + ") does not match expected format (" + d.toString() + ")");
                return n
            }, t.parseFormats = function(e, t) {
                var n = [];
                return e.url_encoded_fmt_stream_map && (n = n.concat(e.url_encoded_fmt_stream_map.split(","))), e.adaptive_fmts && (n = n.concat(e.adaptive_fmts.split(","))), n = n.map(function(e) {
                    var t = i.parse(e),
                        n = a[t.itag];
                    for (var r in n) t[r] = n[r];
                    return t
                }), delete e.url_encoded_fmt_stream_map, delete e.adaptive_fmts, n
            }, t.getVideoDescription = function(e) {
                var t = /<p.*?id="eow-description".*?>(.+?)<\/p>[\n\r\s]*?<\/div>/im,
                    n = e.match(t);
                return n ? (new o).decode(n[1].replace(/\n/g, " ").replace(/\s*<\s*br\s*\/?\s*>\s*/gi, "\n").replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, "\n").replace(/<.*?>/gi, "")).trim() : ""
            };
            var h = /<a href="\/channel\/([\w-]+)"[^>]+>(.+?(?=<\/a>))/,
                p = /<a href="\/user\/([^"]+)/;
            t.getAuthor = function(e) {
                var n = t.between(e, '<div id="watch7-user-header" class=" spf-link ">', '<div id="watch8-action-buttons" class="watch-action-buttons clearfix">');
                if ("" === n) return {};
                n = (new o).decode(n);
                var i = n.match(h),
                    a = n.match(p);
                return {
                    id: i[1],
                    name: i[2],
                    avatar: r.resolve(s, t.between(n, 'data-thumb="', '"')),
                    user: a ? a[1] : null,
                    channel_url: "https://www.youtube.com/channel/" + i[1],
                    user_url: a ? "https://www.youtube.com/user/" + a[1] : null
                }
            }, t.getPublished = function(e) {
                return Date.parse(t.between(e, '<meta itemprop="datePublished" content="', '">'))
            }, t.getRelatedVideos = function(e) {
                var n = t.between(e, "'RELATED_PLAYER_ARGS': {\"rvs\":", "},");
                try {
                    n = JSON.parse(n)
                } catch (r) {
                    return []
                }
                return n.split(",").map(function(e) {
                    return i.parse(e)
                })
            }, t.parallel = function(e, t) {
                function n(e, n, s) {
                    if (!o) {
                        if (n) return o = !0, void t(n);
                        a[e] = s, ++i === r && t(null, a)
                    }
                }
                var i = 0,
                    r = e.length,
                    o = !1,
                    a = [];
                if (r > 0)
                    for (var s = 0; r > s; s++) e[s](n.bind(null, s));
                else t(null, a)
            }, t.objectAssign = function(e, n, i) {
                for (var r in n) i && "object" == typeof n[r] && null != n[r] && e[r] ? t.objectAssign(e[r], n[r]) : e[r] = n[r];
                return e
            }
        }, function(e, t, n) {
            function i(e, t, n) {
                var i, r, s, c = e.href,
                    u = new l;
                if (t = t || {}, n && (t.onload = n), t.debugMode, c && ("string" == typeof c || c instanceof String) && c.length > 0) {
                    if (t && "object" == typeof t)
                        for (i = 0; i < a.length; i++) void 0 === t[a[i]] && (t[a[i]] = o[a[i]]);
                    if (s = new XMLHttpRequest, s.open(t.method, c, t.async), t.headers && "object" == typeof t.headers)
                        for (r = Object.keys(t.headers), i = 0; i < r.length; i++) s.setRequestHeader(r[i], t.headers[r[i]]);
                    return s.responseType = t.type, s.timeout = t.timeout, s.onload = function() {
                        var e = new l;
                        e.statusCode = this.status, e.responseText = this.response || this.responseText, e.setEncoding = function() {}, t.debugMode, u.emit("response", e), e.emit("data", e.responseText), e.emit("end"), t.onload && "function" == typeof t.onload && t.onload.call(this, !1, this.response || this.responseText, this.status)
                    }, s.onerror = function(e) {
                        u.emit("error", e), t.onload && "function" == typeof t.onload && t.onload.call(this, e, this.response || this.responseText, this.status)
                    }, s.ontimeout = function() {
                        u.emit("error", new Error("Timeout response time")), t.onload && "function" == typeof t.onload && t.onload.call(this, new Error("Timeout response time"), null, this.status)
                    }, s.send(t.data ? t.data : null), u
                }
                return !1
            }
            var r = n(8).parse,
                o = {
                    method: "GET",
                    async: !0,
                    headers: {},
                    type: "text",
                    data: null,
                    timeout: 3e4,
                    onload: null,
                    onerror: null,
                    ontimeout: null
                },
                a = Object.keys(o),
                s = n(9),
                l = n(37);
            l.prototype.on = l.prototype.addListener, e.exports = function(e, t, n) {
                var o = r(e);
                return s.objectAssign(o, t, !0), i(o, t, n)
            }
        }, function(e, t, n) {
            "use strict";
            (function(e) {
                var i = n(0),
                    r = i.Buffer,
                    o = i.SlowBuffer,
                    a = i.kMaxLength || 2147483647;
                t.alloc = function(e, t, n) {
                    if ("function" == typeof r.alloc) return r.alloc(e, t, n);
                    if ("number" == typeof n) throw new TypeError("encoding must not be number");
                    if ("number" != typeof e) throw new TypeError("size must be a number");
                    if (e > a) throw new RangeError("size is too large");
                    var i = n,
                        o = t;
                    void 0 === o && (i = void 0, o = 0);
                    var s = new r(e);
                    if ("string" == typeof o)
                        for (var l = new r(o, i), c = l.length, u = -1; ++u < e;) s[u] = l[u % c];
                    else s.fill(o);
                    return s
                }, t.allocUnsafe = function(e) {
                    if ("function" == typeof r.allocUnsafe) return r.allocUnsafe(e);
                    if ("number" != typeof e) throw new TypeError("size must be a number");
                    if (e > a) throw new RangeError("size is too large");
                    return new r(e)
                }, t.from = function(t, n, i) {
                    if ("function" == typeof r.from && (!e.Uint8Array || Uint8Array.from !== r.from)) return r.from(t, n, i);
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    if ("string" == typeof t) return new r(t, n);
                    if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) {
                        var o = n;
                        if (1 === arguments.length) return new r(t);
                        "undefined" == typeof o && (o = 0);
                        var a = i;
                        if ("undefined" == typeof a && (a = t.byteLength - o), o >= t.byteLength) throw new RangeError("'offset' is out of bounds");
                        if (a > t.byteLength - o) throw new RangeError("'length' is out of bounds");
                        return new r(t.slice(o, o + a))
                    }
                    if (r.isBuffer(t)) {
                        var s = new r(t.length);
                        return t.copy(s, 0, 0, t.length), s
                    }
                    if (t) {
                        if (Array.isArray(t) || "undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return new r(t);
                        if ("Buffer" === t.type && Array.isArray(t.data)) return new r(t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }, t.allocUnsafeSlow = function(e) {
                    if ("function" == typeof r.allocUnsafeSlow) return r.allocUnsafeSlow(e);
                    if ("number" != typeof e) throw new TypeError("size must be a number");
                    if (e >= a) throw new RangeError("size is too large");
                    return new o(e)
                }
            }).call(t, n(2))
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                function n(e, n, i, r) {
                    if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                    var o, a, s = arguments.length;
                    switch (s) {
                        case 0:
                        case 1:
                            return t.nextTick(e);
                        case 2:
                            return t.nextTick(function() {
                                e.call(null, n)
                            });
                        case 3:
                            return t.nextTick(function() {
                                e.call(null, n, i)
                            });
                        case 4:
                            return t.nextTick(function() {
                                e.call(null, n, i, r)
                            });
                        default:
                            for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                            return t.nextTick(function() {
                                e.apply(null, o)
                            })
                    }
                }!t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = n : e.exports = t.nextTick
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";
            t.decode = t.parse = n(42), t.encode = t.stringify = n(43)
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                this.afterTransform = function(t, n) {
                    return r(e, t, n)
                }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
            }

            function r(e, t, n) {
                var i = e._transformState;
                i.transforming = !1;
                var r = i.writecb;
                if (!r) return e.emit("error", new Error("no writecb in Transform class"));
                i.writechunk = null, i.writecb = null, null !== n && void 0 !== n && e.push(n), r(t);
                var o = e._readableState;
                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
            }

            function o(e) {
                if (!(this instanceof o)) return new o(e);
                s.call(this, e), this._transformState = new i(this);
                var t = this;
                this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function() {
                    "function" == typeof this._flush ? this._flush(function(e, n) {
                        a(t, e, n)
                    }) : a(t)
                })
            }

            function a(e, t, n) {
                if (t) return e.emit("error", t);
                null !== n && void 0 !== n && e.push(n);
                var i = e._writableState,
                    r = e._transformState;
                if (i.length) throw new Error("Calling transform done when ws.length != 0");
                if (r.transforming) throw new Error("Calling transform done when still transforming");
                return e.push(null)
            }
            e.exports = o;
            var s = n(1),
                l = n(5);
            l.inherits = n(3), l.inherits(o, s), o.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, s.prototype.push.call(this, e, t)
            }, o.prototype._transform = function(e, t, n) {
                throw new Error("_transform() is not implemented")
            }, o.prototype._write = function(e, t, n) {
                var i = this._transformState;
                if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
                    var r = this._readableState;
                    (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
                }
            }, o.prototype._read = function(e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
            }
        }, function(e, t, n) {
            "use strict";
            (function(t, i) {
                function r() {}

                function o(e, t, n) {
                    this.chunk = e, this.encoding = t, this.callback = n, this.next = null
                }

                function a(e, t) {
                    I = I || n(1), e = e || {}, this.objectMode = !!e.objectMode, t instanceof I && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                    var i = e.highWaterMark,
                        r = this.objectMode ? 16 : 16384;
                    this.highWaterMark = i || 0 === i ? i : r, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                    var o = e.decodeStrings === !1;
                    this.decodeStrings = !o, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                        m(t, e)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new x(this)
                }

                function s(e) {
                    return I = I || n(1), L.call(s, this) || this instanceof I ? (this._writableState = new a(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev)), void A.call(this)) : new s(e)
                }

                function l(e, t) {
                    var n = new Error("write after end");
                    e.emit("error", n), S(t, n)
                }

                function c(e, t, n, i) {
                    var r = !0,
                        o = !1;
                    return null === n ? o = new TypeError("May not write null values to stream") : k.isBuffer(n) || "string" == typeof n || void 0 === n || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), S(i, o), r = !1), r
                }

                function u(e, t, n) {
                    return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = O.from(t, n)), t
                }

                function d(e, t, n, i, r) {
                    n = u(t, n, i), k.isBuffer(n) && (i = "buffer");
                    var a = t.objectMode ? 1 : n.length;
                    t.length += a;
                    var s = t.length < t.highWaterMark;
                    if (s || (t.needDrain = !0), t.writing || t.corked) {
                        var l = t.lastBufferedRequest;
                        t.lastBufferedRequest = new o(n, i, r), l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                    } else h(e, t, !1, a, n, i, r);
                    return s
                }

                function h(e, t, n, i, r, o, a) {
                    t.writelen = i, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite), t.sync = !1
                }

                function p(e, t, n, i, r) {
                    --t.pendingcb, n ? S(r, i) : r(i), e._writableState.errorEmitted = !0, e.emit("error", i)
                }

                function f(e) {
                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                }

                function m(e, t) {
                    var n = e._writableState,
                        i = n.sync,
                        r = n.writecb;
                    if (f(n), t) p(e, n, i, t, r);
                    else {
                        var o = b(n);
                        o || n.corked || n.bufferProcessing || !n.bufferedRequest || y(e, n), i ? N(g, e, n, o, r) : g(e, n, o, r)
                    }
                }

                function g(e, t, n, i) {
                    n || v(e, t), t.pendingcb--, i(), T(e, t)
                }

                function v(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }

                function y(e, t) {
                    t.bufferProcessing = !0;
                    var n = t.bufferedRequest;
                    if (e._writev && n && n.next) {
                        var i = t.bufferedRequestCount,
                            r = new Array(i),
                            o = t.corkedRequestsFree;
                        o.entry = n;
                        for (var a = 0; n;) r[a] = n, n = n.next, a += 1;
                        h(e, t, !0, t.length, r, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new x(t)
                    } else {
                        for (; n;) {
                            var s = n.chunk,
                                l = n.encoding,
                                c = n.callback,
                                u = t.objectMode ? 1 : s.length;
                            if (h(e, t, !1, u, s, l, c), n = n.next, t.writing) break
                        }
                        null === n && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequestCount = 0, t.bufferedRequest = n, t.bufferProcessing = !1
                }

                function b(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }

                function w(e, t) {
                    t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
                }

                function T(e, t) {
                    var n = b(t);
                    return n && (0 === t.pendingcb ? (w(e, t), t.finished = !0, e.emit("finish")) : w(e, t)), n
                }

                function E(e, t, n) {
                    t.ending = !0, T(e, t), n && (t.finished ? S(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
                }

                function x(e) {
                    var t = this;
                    this.next = null, this.entry = null, this.finish = function(n) {
                        var i = t.entry;
                        for (t.entry = null; i;) {
                            var r = i.callback;
                            e.pendingcb--, r(n), i = i.next
                        }
                        e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                    }
                }
                e.exports = s;
                var I, S = n(12),
                    N = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? i : S;
                s.WritableState = a;
                var C = n(5);
                C.inherits = n(3);
                var A, _ = {
                    deprecate: n(52)
                };
                ! function() {
                    try {
                        A = n(6)
                    } catch (e) {} finally {
                        A || (A = n(7).EventEmitter)
                    }
                }();
                var k = n(0).Buffer,
                    O = n(11);
                C.inherits(s, A), a.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                    function() {
                        try {
                            Object.defineProperty(a.prototype, "buffer", {
                                get: _.deprecate(function() {
                                    return this.getBuffer()
                                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                            })
                        } catch (e) {}
                    }();
                var L;
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (L = Function.prototype[Symbol.hasInstance], Object.defineProperty(s, Symbol.hasInstance, {
                    value: function(e) {
                        return L.call(this, e) ? !0 : e && e._writableState instanceof a
                    }
                })) : L = function(e) {
                    return e instanceof this
                }, s.prototype.pipe = function() {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }, s.prototype.write = function(e, t, n) {
                    var i = this._writableState,
                        o = !1;
                    return "function" == typeof t && (n = t, t = null), k.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof n && (n = r), i.ended ? l(this, n) : c(this, i, e, n) && (i.pendingcb++, o = d(this, i, e, t, n)), o
                }, s.prototype.cork = function() {
                    var e = this._writableState;
                    e.corked++
                }, s.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || y(this, e))
                }, s.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e, this
                }, s.prototype._write = function(e, t, n) {
                    n(new Error("_write() is not implemented"))
                }, s.prototype._writev = null, s.prototype.end = function(e, t, n) {
                    var i = this._writableState;
                    "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || i.finished || E(this, i, n)
                }
            }).call(t, n(4), n(24).setImmediate)
        }, function(e, t, n) {
            function i(e) {
                if (e && !l(e)) throw new Error("Unknown encoding: " + e)
            }

            function r(e) {
                return e.toString(this.encoding)
            }

            function o(e) {
                this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
            }

            function a(e) {
                this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
            }
            var s = n(0).Buffer,
                l = s.isEncoding || function(e) {
                        switch (e && e.toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                            case "raw":
                                return !0;
                            default:
                                return !1
                        }
                    },
                c = t.StringDecoder = function(e) {
                    switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), i(e), this.encoding) {
                        case "utf8":
                            this.surrogateSize = 3;
                            break;
                        case "ucs2":
                        case "utf16le":
                            this.surrogateSize = 2, this.detectIncompleteChar = o;
                            break;
                        case "base64":
                            this.surrogateSize = 3, this.detectIncompleteChar = a;
                            break;
                        default:
                            return void(this.write = r)
                    }
                    this.charBuffer = new s(6), this.charReceived = 0, this.charLength = 0
                };
            c.prototype.write = function(e) {
                for (var t = ""; this.charLength;) {
                    var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                    if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
                    e = e.slice(n, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                    var i = t.charCodeAt(t.length - 1);
                    if (!(i >= 55296 && 56319 >= i)) {
                        if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                        break
                    }
                    this.charLength += this.surrogateSize, t = ""
                }
                this.detectIncompleteChar(e);
                var r = e.length;
                this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r), r -= this.charReceived), t += e.toString(this.encoding, 0, r);
                var r = t.length - 1,
                    i = t.charCodeAt(r);
                if (i >= 55296 && 56319 >= i) {
                    var o = this.surrogateSize;
                    return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, r)
                }
                return t
            }, c.prototype.detectIncompleteChar = function(e) {
                for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                    var n = e[e.length - t];
                    if (1 == t && n >> 5 == 6) {
                        this.charLength = 2;
                        break
                    }
                    if (2 >= t && n >> 4 == 14) {
                        this.charLength = 3;
                        break
                    }
                    if (3 >= t && n >> 3 == 30) {
                        this.charLength = 4;
                        break
                    }
                }
                this.charReceived = t
            }, c.prototype.end = function(e) {
                var t = "";
                if (e && e.length && (t = this.write(e)), this.charReceived) {
                    var n = this.charReceived,
                        i = this.charBuffer,
                        r = this.encoding;
                    t += i.slice(0, n).toString(r)
                }
                return t
            }
        }, function(e, t) {
            function n() {}

            function i(e, t) {
                for (var n = r.length, i = []; n--;) {
                    var o, a = r[n],
                        s = a[0],
                        l = a[1],
                        c = l[0],
                        u = 32 > c || c > 126 || 62 === c || 60 === c || 38 === c || 34 === c || 39 === c;
                    if (u && (o = t[c] = t[c] || {}), l[1]) {
                        var d = l[1];
                        e[s] = String.fromCharCode(c) + String.fromCharCode(d), i.push(u && (o[d] = s))
                    } else e[s] = String.fromCharCode(c), i.push(u && (o[""] = s))
                }
            }
            var r = [
                    ["Aacute", [193]],
                    ["aacute", [225]],
                    ["Abreve", [258]],
                    ["abreve", [259]],
                    ["ac", [8766]],
                    ["acd", [8767]],
                    ["acE", [8766, 819]],
                    ["Acirc", [194]],
                    ["acirc", [226]],
                    ["acute", [180]],
                    ["Acy", [1040]],
                    ["acy", [1072]],
                    ["AElig", [198]],
                    ["aelig", [230]],
                    ["af", [8289]],
                    ["Afr", [120068]],
                    ["afr", [120094]],
                    ["Agrave", [192]],
                    ["agrave", [224]],
                    ["alefsym", [8501]],
                    ["aleph", [8501]],
                    ["Alpha", [913]],
                    ["alpha", [945]],
                    ["Amacr", [256]],
                    ["amacr", [257]],
                    ["amalg", [10815]],
                    ["amp", [38]],
                    ["AMP", [38]],
                    ["andand", [10837]],
                    ["And", [10835]],
                    ["and", [8743]],
                    ["andd", [10844]],
                    ["andslope", [10840]],
                    ["andv", [10842]],
                    ["ang", [8736]],
                    ["ange", [10660]],
                    ["angle", [8736]],
                    ["angmsdaa", [10664]],
                    ["angmsdab", [10665]],
                    ["angmsdac", [10666]],
                    ["angmsdad", [10667]],
                    ["angmsdae", [10668]],
                    ["angmsdaf", [10669]],
                    ["angmsdag", [10670]],
                    ["angmsdah", [10671]],
                    ["angmsd", [8737]],
                    ["angrt", [8735]],
                    ["angrtvb", [8894]],
                    ["angrtvbd", [10653]],
                    ["angsph", [8738]],
                    ["angst", [197]],
                    ["angzarr", [9084]],
                    ["Aogon", [260]],
                    ["aogon", [261]],
                    ["Aopf", [120120]],
                    ["aopf", [120146]],
                    ["apacir", [10863]],
                    ["ap", [8776]],
                    ["apE", [10864]],
                    ["ape", [8778]],
                    ["apid", [8779]],
                    ["apos", [39]],
                    ["ApplyFunction", [8289]],
                    ["approx", [8776]],
                    ["approxeq", [8778]],
                    ["Aring", [197]],
                    ["aring", [229]],
                    ["Ascr", [119964]],
                    ["ascr", [119990]],
                    ["Assign", [8788]],
                    ["ast", [42]],
                    ["asymp", [8776]],
                    ["asympeq", [8781]],
                    ["Atilde", [195]],
                    ["atilde", [227]],
                    ["Auml", [196]],
                    ["auml", [228]],
                    ["awconint", [8755]],
                    ["awint", [10769]],
                    ["backcong", [8780]],
                    ["backepsilon", [1014]],
                    ["backprime", [8245]],
                    ["backsim", [8765]],
                    ["backsimeq", [8909]],
                    ["Backslash", [8726]],
                    ["Barv", [10983]],
                    ["barvee", [8893]],
                    ["barwed", [8965]],
                    ["Barwed", [8966]],
                    ["barwedge", [8965]],
                    ["bbrk", [9141]],
                    ["bbrktbrk", [9142]],
                    ["bcong", [8780]],
                    ["Bcy", [1041]],
                    ["bcy", [1073]],
                    ["bdquo", [8222]],
                    ["becaus", [8757]],
                    ["because", [8757]],
                    ["Because", [8757]],
                    ["bemptyv", [10672]],
                    ["bepsi", [1014]],
                    ["bernou", [8492]],
                    ["Bernoullis", [8492]],
                    ["Beta", [914]],
                    ["beta", [946]],
                    ["beth", [8502]],
                    ["between", [8812]],
                    ["Bfr", [120069]],
                    ["bfr", [120095]],
                    ["bigcap", [8898]],
                    ["bigcirc", [9711]],
                    ["bigcup", [8899]],
                    ["bigodot", [10752]],
                    ["bigoplus", [10753]],
                    ["bigotimes", [10754]],
                    ["bigsqcup", [10758]],
                    ["bigstar", [9733]],
                    ["bigtriangledown", [9661]],
                    ["bigtriangleup", [9651]],
                    ["biguplus", [10756]],
                    ["bigvee", [8897]],
                    ["bigwedge", [8896]],
                    ["bkarow", [10509]],
                    ["blacklozenge", [10731]],
                    ["blacksquare", [9642]],
                    ["blacktriangle", [9652]],
                    ["blacktriangledown", [9662]],
                    ["blacktriangleleft", [9666]],
                    ["blacktriangleright", [9656]],
                    ["blank", [9251]],
                    ["blk12", [9618]],
                    ["blk14", [9617]],
                    ["blk34", [9619]],
                    ["block", [9608]],
                    ["bne", [61, 8421]],
                    ["bnequiv", [8801, 8421]],
                    ["bNot", [10989]],
                    ["bnot", [8976]],
                    ["Bopf", [120121]],
                    ["bopf", [120147]],
                    ["bot", [8869]],
                    ["bottom", [8869]],
                    ["bowtie", [8904]],
                    ["boxbox", [10697]],
                    ["boxdl", [9488]],
                    ["boxdL", [9557]],
                    ["boxDl", [9558]],
                    ["boxDL", [9559]],
                    ["boxdr", [9484]],
                    ["boxdR", [9554]],
                    ["boxDr", [9555]],
                    ["boxDR", [9556]],
                    ["boxh", [9472]],
                    ["boxH", [9552]],
                    ["boxhd", [9516]],
                    ["boxHd", [9572]],
                    ["boxhD", [9573]],
                    ["boxHD", [9574]],
                    ["boxhu", [9524]],
                    ["boxHu", [9575]],
                    ["boxhU", [9576]],
                    ["boxHU", [9577]],
                    ["boxminus", [8863]],
                    ["boxplus", [8862]],
                    ["boxtimes", [8864]],
                    ["boxul", [9496]],
                    ["boxuL", [9563]],
                    ["boxUl", [9564]],
                    ["boxUL", [9565]],
                    ["boxur", [9492]],
                    ["boxuR", [9560]],
                    ["boxUr", [9561]],
                    ["boxUR", [9562]],
                    ["boxv", [9474]],
                    ["boxV", [9553]],
                    ["boxvh", [9532]],
                    ["boxvH", [9578]],
                    ["boxVh", [9579]],
                    ["boxVH", [9580]],
                    ["boxvl", [9508]],
                    ["boxvL", [9569]],
                    ["boxVl", [9570]],
                    ["boxVL", [9571]],
                    ["boxvr", [9500]],
                    ["boxvR", [9566]],
                    ["boxVr", [9567]],
                    ["boxVR", [9568]],
                    ["bprime", [8245]],
                    ["breve", [728]],
                    ["Breve", [728]],
                    ["brvbar", [166]],
                    ["bscr", [119991]],
                    ["Bscr", [8492]],
                    ["bsemi", [8271]],
                    ["bsim", [8765]],
                    ["bsime", [8909]],
                    ["bsolb", [10693]],
                    ["bsol", [92]],
                    ["bsolhsub", [10184]],
                    ["bull", [8226]],
                    ["bullet", [8226]],
                    ["bump", [8782]],
                    ["bumpE", [10926]],
                    ["bumpe", [8783]],
                    ["Bumpeq", [8782]],
                    ["bumpeq", [8783]],
                    ["Cacute", [262]],
                    ["cacute", [263]],
                    ["capand", [10820]],
                    ["capbrcup", [10825]],
                    ["capcap", [10827]],
                    ["cap", [8745]],
                    ["Cap", [8914]],
                    ["capcup", [10823]],
                    ["capdot", [10816]],
                    ["CapitalDifferentialD", [8517]],
                    ["caps", [8745, 65024]],
                    ["caret", [8257]],
                    ["caron", [711]],
                    ["Cayleys", [8493]],
                    ["ccaps", [10829]],
                    ["Ccaron", [268]],
                    ["ccaron", [269]],
                    ["Ccedil", [199]],
                    ["ccedil", [231]],
                    ["Ccirc", [264]],
                    ["ccirc", [265]],
                    ["Cconint", [8752]],
                    ["ccups", [10828]],
                    ["ccupssm", [10832]],
                    ["Cdot", [266]],
                    ["cdot", [267]],
                    ["cedil", [184]],
                    ["Cedilla", [184]],
                    ["cemptyv", [10674]],
                    ["cent", [162]],
                    ["centerdot", [183]],
                    ["CenterDot", [183]],
                    ["cfr", [120096]],
                    ["Cfr", [8493]],
                    ["CHcy", [1063]],
                    ["chcy", [1095]],
                    ["check", [10003]],
                    ["checkmark", [10003]],
                    ["Chi", [935]],
                    ["chi", [967]],
                    ["circ", [710]],
                    ["circeq", [8791]],
                    ["circlearrowleft", [8634]],
                    ["circlearrowright", [8635]],
                    ["circledast", [8859]],
                    ["circledcirc", [8858]],
                    ["circleddash", [8861]],
                    ["CircleDot", [8857]],
                    ["circledR", [174]],
                    ["circledS", [9416]],
                    ["CircleMinus", [8854]],
                    ["CirclePlus", [8853]],
                    ["CircleTimes", [8855]],
                    ["cir", [9675]],
                    ["cirE", [10691]],
                    ["cire", [8791]],
                    ["cirfnint", [10768]],
                    ["cirmid", [10991]],
                    ["cirscir", [10690]],
                    ["ClockwiseContourIntegral", [8754]],
                    ["CloseCurlyDoubleQuote", [8221]],
                    ["CloseCurlyQuote", [8217]],
                    ["clubs", [9827]],
                    ["clubsuit", [9827]],
                    ["colon", [58]],
                    ["Colon", [8759]],
                    ["Colone", [10868]],
                    ["colone", [8788]],
                    ["coloneq", [8788]],
                    ["comma", [44]],
                    ["commat", [64]],
                    ["comp", [8705]],
                    ["compfn", [8728]],
                    ["complement", [8705]],
                    ["complexes", [8450]],
                    ["cong", [8773]],
                    ["congdot", [10861]],
                    ["Congruent", [8801]],
                    ["conint", [8750]],
                    ["Conint", [8751]],
                    ["ContourIntegral", [8750]],
                    ["copf", [120148]],
                    ["Copf", [8450]],
                    ["coprod", [8720]],
                    ["Coproduct", [8720]],
                    ["copy", [169]],
                    ["COPY", [169]],
                    ["copysr", [8471]],
                    ["CounterClockwiseContourIntegral", [8755]],
                    ["crarr", [8629]],
                    ["cross", [10007]],
                    ["Cross", [10799]],
                    ["Cscr", [119966]],
                    ["cscr", [119992]],
                    ["csub", [10959]],
                    ["csube", [10961]],
                    ["csup", [10960]],
                    ["csupe", [10962]],
                    ["ctdot", [8943]],
                    ["cudarrl", [10552]],
                    ["cudarrr", [10549]],
                    ["cuepr", [8926]],
                    ["cuesc", [8927]],
                    ["cularr", [8630]],
                    ["cularrp", [10557]],
                    ["cupbrcap", [10824]],
                    ["cupcap", [10822]],
                    ["CupCap", [8781]],
                    ["cup", [8746]],
                    ["Cup", [8915]],
                    ["cupcup", [10826]],
                    ["cupdot", [8845]],
                    ["cupor", [10821]],
                    ["cups", [8746, 65024]],
                    ["curarr", [8631]],
                    ["curarrm", [10556]],
                    ["curlyeqprec", [8926]],
                    ["curlyeqsucc", [8927]],
                    ["curlyvee", [8910]],
                    ["curlywedge", [8911]],
                    ["curren", [164]],
                    ["curvearrowleft", [8630]],
                    ["curvearrowright", [8631]],
                    ["cuvee", [8910]],
                    ["cuwed", [8911]],
                    ["cwconint", [8754]],
                    ["cwint", [8753]],
                    ["cylcty", [9005]],
                    ["dagger", [8224]],
                    ["Dagger", [8225]],
                    ["daleth", [8504]],
                    ["darr", [8595]],
                    ["Darr", [8609]],
                    ["dArr", [8659]],
                    ["dash", [8208]],
                    ["Dashv", [10980]],
                    ["dashv", [8867]],
                    ["dbkarow", [10511]],
                    ["dblac", [733]],
                    ["Dcaron", [270]],
                    ["dcaron", [271]],
                    ["Dcy", [1044]],
                    ["dcy", [1076]],
                    ["ddagger", [8225]],
                    ["ddarr", [8650]],
                    ["DD", [8517]],
                    ["dd", [8518]],
                    ["DDotrahd", [10513]],
                    ["ddotseq", [10871]],
                    ["deg", [176]],
                    ["Del", [8711]],
                    ["Delta", [916]],
                    ["delta", [948]],
                    ["demptyv", [10673]],
                    ["dfisht", [10623]],
                    ["Dfr", [120071]],
                    ["dfr", [120097]],
                    ["dHar", [10597]],
                    ["dharl", [8643]],
                    ["dharr", [8642]],
                    ["DiacriticalAcute", [180]],
                    ["DiacriticalDot", [729]],
                    ["DiacriticalDoubleAcute", [733]],
                    ["DiacriticalGrave", [96]],
                    ["DiacriticalTilde", [732]],
                    ["diam", [8900]],
                    ["diamond", [8900]],
                    ["Diamond", [8900]],
                    ["diamondsuit", [9830]],
                    ["diams", [9830]],
                    ["die", [168]],
                    ["DifferentialD", [8518]],
                    ["digamma", [989]],
                    ["disin", [8946]],
                    ["div", [247]],
                    ["divide", [247]],
                    ["divideontimes", [8903]],
                    ["divonx", [8903]],
                    ["DJcy", [1026]],
                    ["djcy", [1106]],
                    ["dlcorn", [8990]],
                    ["dlcrop", [8973]],
                    ["dollar", [36]],
                    ["Dopf", [120123]],
                    ["dopf", [120149]],
                    ["Dot", [168]],
                    ["dot", [729]],
                    ["DotDot", [8412]],
                    ["doteq", [8784]],
                    ["doteqdot", [8785]],
                    ["DotEqual", [8784]],
                    ["dotminus", [8760]],
                    ["dotplus", [8724]],
                    ["dotsquare", [8865]],
                    ["doublebarwedge", [8966]],
                    ["DoubleContourIntegral", [8751]],
                    ["DoubleDot", [168]],
                    ["DoubleDownArrow", [8659]],
                    ["DoubleLeftArrow", [8656]],
                    ["DoubleLeftRightArrow", [8660]],
                    ["DoubleLeftTee", [10980]],
                    ["DoubleLongLeftArrow", [10232]],
                    ["DoubleLongLeftRightArrow", [10234]],
                    ["DoubleLongRightArrow", [10233]],
                    ["DoubleRightArrow", [8658]],
                    ["DoubleRightTee", [8872]],
                    ["DoubleUpArrow", [8657]],
                    ["DoubleUpDownArrow", [8661]],
                    ["DoubleVerticalBar", [8741]],
                    ["DownArrowBar", [10515]],
                    ["downarrow", [8595]],
                    ["DownArrow", [8595]],
                    ["Downarrow", [8659]],
                    ["DownArrowUpArrow", [8693]],
                    ["DownBreve", [785]],
                    ["downdownarrows", [8650]],
                    ["downharpoonleft", [8643]],
                    ["downharpoonright", [8642]],
                    ["DownLeftRightVector", [10576]],
                    ["DownLeftTeeVector", [10590]],
                    ["DownLeftVectorBar", [10582]],
                    ["DownLeftVector", [8637]],
                    ["DownRightTeeVector", [10591]],
                    ["DownRightVectorBar", [10583]],
                    ["DownRightVector", [8641]],
                    ["DownTeeArrow", [8615]],
                    ["DownTee", [8868]],
                    ["drbkarow", [10512]],
                    ["drcorn", [8991]],
                    ["drcrop", [8972]],
                    ["Dscr", [119967]],
                    ["dscr", [119993]],
                    ["DScy", [1029]],
                    ["dscy", [1109]],
                    ["dsol", [10742]],
                    ["Dstrok", [272]],
                    ["dstrok", [273]],
                    ["dtdot", [8945]],
                    ["dtri", [9663]],
                    ["dtrif", [9662]],
                    ["duarr", [8693]],
                    ["duhar", [10607]],
                    ["dwangle", [10662]],
                    ["DZcy", [1039]],
                    ["dzcy", [1119]],
                    ["dzigrarr", [10239]],
                    ["Eacute", [201]],
                    ["eacute", [233]],
                    ["easter", [10862]],
                    ["Ecaron", [282]],
                    ["ecaron", [283]],
                    ["Ecirc", [202]],
                    ["ecirc", [234]],
                    ["ecir", [8790]],
                    ["ecolon", [8789]],
                    ["Ecy", [1069]],
                    ["ecy", [1101]],
                    ["eDDot", [10871]],
                    ["Edot", [278]],
                    ["edot", [279]],
                    ["eDot", [8785]],
                    ["ee", [8519]],
                    ["efDot", [8786]],
                    ["Efr", [120072]],
                    ["efr", [120098]],
                    ["eg", [10906]],
                    ["Egrave", [200]],
                    ["egrave", [232]],
                    ["egs", [10902]],
                    ["egsdot", [10904]],
                    ["el", [10905]],
                    ["Element", [8712]],
                    ["elinters", [9191]],
                    ["ell", [8467]],
                    ["els", [10901]],
                    ["elsdot", [10903]],
                    ["Emacr", [274]],
                    ["emacr", [275]],
                    ["empty", [8709]],
                    ["emptyset", [8709]],
                    ["EmptySmallSquare", [9723]],
                    ["emptyv", [8709]],
                    ["EmptyVerySmallSquare", [9643]],
                    ["emsp13", [8196]],
                    ["emsp14", [8197]],
                    ["emsp", [8195]],
                    ["ENG", [330]],
                    ["eng", [331]],
                    ["ensp", [8194]],
                    ["Eogon", [280]],
                    ["eogon", [281]],
                    ["Eopf", [120124]],
                    ["eopf", [120150]],
                    ["epar", [8917]],
                    ["eparsl", [10723]],
                    ["eplus", [10865]],
                    ["epsi", [949]],
                    ["Epsilon", [917]],
                    ["epsilon", [949]],
                    ["epsiv", [1013]],
                    ["eqcirc", [8790]],
                    ["eqcolon", [8789]],
                    ["eqsim", [8770]],
                    ["eqslantgtr", [10902]],
                    ["eqslantless", [10901]],
                    ["Equal", [10869]],
                    ["equals", [61]],
                    ["EqualTilde", [8770]],
                    ["equest", [8799]],
                    ["Equilibrium", [8652]],
                    ["equiv", [8801]],
                    ["equivDD", [10872]],
                    ["eqvparsl", [10725]],
                    ["erarr", [10609]],
                    ["erDot", [8787]],
                    ["escr", [8495]],
                    ["Escr", [8496]],
                    ["esdot", [8784]],
                    ["Esim", [10867]],
                    ["esim", [8770]],
                    ["Eta", [919]],
                    ["eta", [951]],
                    ["ETH", [208]],
                    ["eth", [240]],
                    ["Euml", [203]],
                    ["euml", [235]],
                    ["euro", [8364]],
                    ["excl", [33]],
                    ["exist", [8707]],
                    ["Exists", [8707]],
                    ["expectation", [8496]],
                    ["exponentiale", [8519]],
                    ["ExponentialE", [8519]],
                    ["fallingdotseq", [8786]],
                    ["Fcy", [1060]],
                    ["fcy", [1092]],
                    ["female", [9792]],
                    ["ffilig", [64259]],
                    ["fflig", [64256]],
                    ["ffllig", [64260]],
                    ["Ffr", [120073]],
                    ["ffr", [120099]],
                    ["filig", [64257]],
                    ["FilledSmallSquare", [9724]],
                    ["FilledVerySmallSquare", [9642]],
                    ["fjlig", [102, 106]],
                    ["flat", [9837]],
                    ["fllig", [64258]],
                    ["fltns", [9649]],
                    ["fnof", [402]],
                    ["Fopf", [120125]],
                    ["fopf", [120151]],
                    ["forall", [8704]],
                    ["ForAll", [8704]],
                    ["fork", [8916]],
                    ["forkv", [10969]],
                    ["Fouriertrf", [8497]],
                    ["fpartint", [10765]],
                    ["frac12", [189]],
                    ["frac13", [8531]],
                    ["frac14", [188]],
                    ["frac15", [8533]],
                    ["frac16", [8537]],
                    ["frac18", [8539]],
                    ["frac23", [8532]],
                    ["frac25", [8534]],
                    ["frac34", [190]],
                    ["frac35", [8535]],
                    ["frac38", [8540]],
                    ["frac45", [8536]],
                    ["frac56", [8538]],
                    ["frac58", [8541]],
                    ["frac78", [8542]],
                    ["frasl", [8260]],
                    ["frown", [8994]],
                    ["fscr", [119995]],
                    ["Fscr", [8497]],
                    ["gacute", [501]],
                    ["Gamma", [915]],
                    ["gamma", [947]],
                    ["Gammad", [988]],
                    ["gammad", [989]],
                    ["gap", [10886]],
                    ["Gbreve", [286]],
                    ["gbreve", [287]],
                    ["Gcedil", [290]],
                    ["Gcirc", [284]],
                    ["gcirc", [285]],
                    ["Gcy", [1043]],
                    ["gcy", [1075]],
                    ["Gdot", [288]],
                    ["gdot", [289]],
                    ["ge", [8805]],
                    ["gE", [8807]],
                    ["gEl", [10892]],
                    ["gel", [8923]],
                    ["geq", [8805]],
                    ["geqq", [8807]],
                    ["geqslant", [10878]],
                    ["gescc", [10921]],
                    ["ges", [10878]],
                    ["gesdot", [10880]],
                    ["gesdoto", [10882]],
                    ["gesdotol", [10884]],
                    ["gesl", [8923, 65024]],
                    ["gesles", [10900]],
                    ["Gfr", [120074]],
                    ["gfr", [120100]],
                    ["gg", [8811]],
                    ["Gg", [8921]],
                    ["ggg", [8921]],
                    ["gimel", [8503]],
                    ["GJcy", [1027]],
                    ["gjcy", [1107]],
                    ["gla", [10917]],
                    ["gl", [8823]],
                    ["glE", [10898]],
                    ["glj", [10916]],
                    ["gnap", [10890]],
                    ["gnapprox", [10890]],
                    ["gne", [10888]],
                    ["gnE", [8809]],
                    ["gneq", [10888]],
                    ["gneqq", [8809]],
                    ["gnsim", [8935]],
                    ["Gopf", [120126]],
                    ["gopf", [120152]],
                    ["grave", [96]],
                    ["GreaterEqual", [8805]],
                    ["GreaterEqualLess", [8923]],
                    ["GreaterFullEqual", [8807]],
                    ["GreaterGreater", [10914]],
                    ["GreaterLess", [8823]],
                    ["GreaterSlantEqual", [10878]],
                    ["GreaterTilde", [8819]],
                    ["Gscr", [119970]],
                    ["gscr", [8458]],
                    ["gsim", [8819]],
                    ["gsime", [10894]],
                    ["gsiml", [10896]],
                    ["gtcc", [10919]],
                    ["gtcir", [10874]],
                    ["gt", [62]],
                    ["GT", [62]],
                    ["Gt", [8811]],
                    ["gtdot", [8919]],
                    ["gtlPar", [10645]],
                    ["gtquest", [10876]],
                    ["gtrapprox", [10886]],
                    ["gtrarr", [10616]],
                    ["gtrdot", [8919]],
                    ["gtreqless", [8923]],
                    ["gtreqqless", [10892]],
                    ["gtrless", [8823]],
                    ["gtrsim", [8819]],
                    ["gvertneqq", [8809, 65024]],
                    ["gvnE", [8809, 65024]],
                    ["Hacek", [711]],
                    ["hairsp", [8202]],
                    ["half", [189]],
                    ["hamilt", [8459]],
                    ["HARDcy", [1066]],
                    ["hardcy", [1098]],
                    ["harrcir", [10568]],
                    ["harr", [8596]],
                    ["hArr", [8660]],
                    ["harrw", [8621]],
                    ["Hat", [94]],
                    ["hbar", [8463]],
                    ["Hcirc", [292]],
                    ["hcirc", [293]],
                    ["hearts", [9829]],
                    ["heartsuit", [9829]],
                    ["hellip", [8230]],
                    ["hercon", [8889]],
                    ["hfr", [120101]],
                    ["Hfr", [8460]],
                    ["HilbertSpace", [8459]],
                    ["hksearow", [10533]],
                    ["hkswarow", [10534]],
                    ["hoarr", [8703]],
                    ["homtht", [8763]],
                    ["hookleftarrow", [8617]],
                    ["hookrightarrow", [8618]],
                    ["hopf", [120153]],
                    ["Hopf", [8461]],
                    ["horbar", [8213]],
                    ["HorizontalLine", [9472]],
                    ["hscr", [119997]],
                    ["Hscr", [8459]],
                    ["hslash", [8463]],
                    ["Hstrok", [294]],
                    ["hstrok", [295]],
                    ["HumpDownHump", [8782]],
                    ["HumpEqual", [8783]],
                    ["hybull", [8259]],
                    ["hyphen", [8208]],
                    ["Iacute", [205]],
                    ["iacute", [237]],
                    ["ic", [8291]],
                    ["Icirc", [206]],
                    ["icirc", [238]],
                    ["Icy", [1048]],
                    ["icy", [1080]],
                    ["Idot", [304]],
                    ["IEcy", [1045]],
                    ["iecy", [1077]],
                    ["iexcl", [161]],
                    ["iff", [8660]],
                    ["ifr", [120102]],
                    ["Ifr", [8465]],
                    ["Igrave", [204]],
                    ["igrave", [236]],
                    ["ii", [8520]],
                    ["iiiint", [10764]],
                    ["iiint", [8749]],
                    ["iinfin", [10716]],
                    ["iiota", [8489]],
                    ["IJlig", [306]],
                    ["ijlig", [307]],
                    ["Imacr", [298]],
                    ["imacr", [299]],
                    ["image", [8465]],
                    ["ImaginaryI", [8520]],
                    ["imagline", [8464]],
                    ["imagpart", [8465]],
                    ["imath", [305]],
                    ["Im", [8465]],
                    ["imof", [8887]],
                    ["imped", [437]],
                    ["Implies", [8658]],
                    ["incare", [8453]],
                    ["in", [8712]],
                    ["infin", [8734]],
                    ["infintie", [10717]],
                    ["inodot", [305]],
                    ["intcal", [8890]],
                    ["int", [8747]],
                    ["Int", [8748]],
                    ["integers", [8484]],
                    ["Integral", [8747]],
                    ["intercal", [8890]],
                    ["Intersection", [8898]],
                    ["intlarhk", [10775]],
                    ["intprod", [10812]],
                    ["InvisibleComma", [8291]],
                    ["InvisibleTimes", [8290]],
                    ["IOcy", [1025]],
                    ["iocy", [1105]],
                    ["Iogon", [302]],
                    ["iogon", [303]],
                    ["Iopf", [120128]],
                    ["iopf", [120154]],
                    ["Iota", [921]],
                    ["iota", [953]],
                    ["iprod", [10812]],
                    ["iquest", [191]],
                    ["iscr", [119998]],
                    ["Iscr", [8464]],
                    ["isin", [8712]],
                    ["isindot", [8949]],
                    ["isinE", [8953]],
                    ["isins", [8948]],
                    ["isinsv", [8947]],
                    ["isinv", [8712]],
                    ["it", [8290]],
                    ["Itilde", [296]],
                    ["itilde", [297]],
                    ["Iukcy", [1030]],
                    ["iukcy", [1110]],
                    ["Iuml", [207]],
                    ["iuml", [239]],
                    ["Jcirc", [308]],
                    ["jcirc", [309]],
                    ["Jcy", [1049]],
                    ["jcy", [1081]],
                    ["Jfr", [120077]],
                    ["jfr", [120103]],
                    ["jmath", [567]],
                    ["Jopf", [120129]],
                    ["jopf", [120155]],
                    ["Jscr", [119973]],
                    ["jscr", [119999]],
                    ["Jsercy", [1032]],
                    ["jsercy", [1112]],
                    ["Jukcy", [1028]],
                    ["jukcy", [1108]],
                    ["Kappa", [922]],
                    ["kappa", [954]],
                    ["kappav", [1008]],
                    ["Kcedil", [310]],
                    ["kcedil", [311]],
                    ["Kcy", [1050]],
                    ["kcy", [1082]],
                    ["Kfr", [120078]],
                    ["kfr", [120104]],
                    ["kgreen", [312]],
                    ["KHcy", [1061]],
                    ["khcy", [1093]],
                    ["KJcy", [1036]],
                    ["kjcy", [1116]],
                    ["Kopf", [120130]],
                    ["kopf", [120156]],
                    ["Kscr", [119974]],
                    ["kscr", [12e4]],
                    ["lAarr", [8666]],
                    ["Lacute", [313]],
                    ["lacute", [314]],
                    ["laemptyv", [10676]],
                    ["lagran", [8466]],
                    ["Lambda", [923]],
                    ["lambda", [955]],
                    ["lang", [10216]],
                    ["Lang", [10218]],
                    ["langd", [10641]],
                    ["langle", [10216]],
                    ["lap", [10885]],
                    ["Laplacetrf", [8466]],
                    ["laquo", [171]],
                    ["larrb", [8676]],
                    ["larrbfs", [10527]],
                    ["larr", [8592]],
                    ["Larr", [8606]],
                    ["lArr", [8656]],
                    ["larrfs", [10525]],
                    ["larrhk", [8617]],
                    ["larrlp", [8619]],
                    ["larrpl", [10553]],
                    ["larrsim", [10611]],
                    ["larrtl", [8610]],
                    ["latail", [10521]],
                    ["lAtail", [10523]],
                    ["lat", [10923]],
                    ["late", [10925]],
                    ["lates", [10925, 65024]],
                    ["lbarr", [10508]],
                    ["lBarr", [10510]],
                    ["lbbrk", [10098]],
                    ["lbrace", [123]],
                    ["lbrack", [91]],
                    ["lbrke", [10635]],
                    ["lbrksld", [10639]],
                    ["lbrkslu", [10637]],
                    ["Lcaron", [317]],
                    ["lcaron", [318]],
                    ["Lcedil", [315]],
                    ["lcedil", [316]],
                    ["lceil", [8968]],
                    ["lcub", [123]],
                    ["Lcy", [1051]],
                    ["lcy", [1083]],
                    ["ldca", [10550]],
                    ["ldquo", [8220]],
                    ["ldquor", [8222]],
                    ["ldrdhar", [10599]],
                    ["ldrushar", [10571]],
                    ["ldsh", [8626]],
                    ["le", [8804]],
                    ["lE", [8806]],
                    ["LeftAngleBracket", [10216]],
                    ["LeftArrowBar", [8676]],
                    ["leftarrow", [8592]],
                    ["LeftArrow", [8592]],
                    ["Leftarrow", [8656]],
                    ["LeftArrowRightArrow", [8646]],
                    ["leftarrowtail", [8610]],
                    ["LeftCeiling", [8968]],
                    ["LeftDoubleBracket", [10214]],
                    ["LeftDownTeeVector", [10593]],
                    ["LeftDownVectorBar", [10585]],
                    ["LeftDownVector", [8643]],
                    ["LeftFloor", [8970]],
                    ["leftharpoondown", [8637]],
                    ["leftharpoonup", [8636]],
                    ["leftleftarrows", [8647]],
                    ["leftrightarrow", [8596]],
                    ["LeftRightArrow", [8596]],
                    ["Leftrightarrow", [8660]],
                    ["leftrightarrows", [8646]],
                    ["leftrightharpoons", [8651]],
                    ["leftrightsquigarrow", [8621]],
                    ["LeftRightVector", [10574]],
                    ["LeftTeeArrow", [8612]],
                    ["LeftTee", [8867]],
                    ["LeftTeeVector", [10586]],
                    ["leftthreetimes", [8907]],
                    ["LeftTriangleBar", [10703]],
                    ["LeftTriangle", [8882]],
                    ["LeftTriangleEqual", [8884]],
                    ["LeftUpDownVector", [10577]],
                    ["LeftUpTeeVector", [10592]],
                    ["LeftUpVectorBar", [10584]],
                    ["LeftUpVector", [8639]],
                    ["LeftVectorBar", [10578]],
                    ["LeftVector", [8636]],
                    ["lEg", [10891]],
                    ["leg", [8922]],
                    ["leq", [8804]],
                    ["leqq", [8806]],
                    ["leqslant", [10877]],
                    ["lescc", [10920]],
                    ["les", [10877]],
                    ["lesdot", [10879]],
                    ["lesdoto", [10881]],
                    ["lesdotor", [10883]],
                    ["lesg", [8922, 65024]],
                    ["lesges", [10899]],
                    ["lessapprox", [10885]],
                    ["lessdot", [8918]],
                    ["lesseqgtr", [8922]],
                    ["lesseqqgtr", [10891]],
                    ["LessEqualGreater", [8922]],
                    ["LessFullEqual", [8806]],
                    ["LessGreater", [8822]],
                    ["lessgtr", [8822]],
                    ["LessLess", [10913]],
                    ["lesssim", [8818]],
                    ["LessSlantEqual", [10877]],
                    ["LessTilde", [8818]],
                    ["lfisht", [10620]],
                    ["lfloor", [8970]],
                    ["Lfr", [120079]],
                    ["lfr", [120105]],
                    ["lg", [8822]],
                    ["lgE", [10897]],
                    ["lHar", [10594]],
                    ["lhard", [8637]],
                    ["lharu", [8636]],
                    ["lharul", [10602]],
                    ["lhblk", [9604]],
                    ["LJcy", [1033]],
                    ["ljcy", [1113]],
                    ["llarr", [8647]],
                    ["ll", [8810]],
                    ["Ll", [8920]],
                    ["llcorner", [8990]],
                    ["Lleftarrow", [8666]],
                    ["llhard", [10603]],
                    ["lltri", [9722]],
                    ["Lmidot", [319]],
                    ["lmidot", [320]],
                    ["lmoustache", [9136]],
                    ["lmoust", [9136]],
                    ["lnap", [10889]],
                    ["lnapprox", [10889]],
                    ["lne", [10887]],
                    ["lnE", [8808]],
                    ["lneq", [10887]],
                    ["lneqq", [8808]],
                    ["lnsim", [8934]],
                    ["loang", [10220]],
                    ["loarr", [8701]],
                    ["lobrk", [10214]],
                    ["longleftarrow", [10229]],
                    ["LongLeftArrow", [10229]],
                    ["Longleftarrow", [10232]],
                    ["longleftrightarrow", [10231]],
                    ["LongLeftRightArrow", [10231]],
                    ["Longleftrightarrow", [10234]],
                    ["longmapsto", [10236]],
                    ["longrightarrow", [10230]],
                    ["LongRightArrow", [10230]],
                    ["Longrightarrow", [10233]],
                    ["looparrowleft", [8619]],
                    ["looparrowright", [8620]],
                    ["lopar", [10629]],
                    ["Lopf", [120131]],
                    ["lopf", [120157]],
                    ["loplus", [10797]],
                    ["lotimes", [10804]],
                    ["lowast", [8727]],
                    ["lowbar", [95]],
                    ["LowerLeftArrow", [8601]],
                    ["LowerRightArrow", [8600]],
                    ["loz", [9674]],
                    ["lozenge", [9674]],
                    ["lozf", [10731]],
                    ["lpar", [40]],
                    ["lparlt", [10643]],
                    ["lrarr", [8646]],
                    ["lrcorner", [8991]],
                    ["lrhar", [8651]],
                    ["lrhard", [10605]],
                    ["lrm", [8206]],
                    ["lrtri", [8895]],
                    ["lsaquo", [8249]],
                    ["lscr", [120001]],
                    ["Lscr", [8466]],
                    ["lsh", [8624]],
                    ["Lsh", [8624]],
                    ["lsim", [8818]],
                    ["lsime", [10893]],
                    ["lsimg", [10895]],
                    ["lsqb", [91]],
                    ["lsquo", [8216]],
                    ["lsquor", [8218]],
                    ["Lstrok", [321]],
                    ["lstrok", [322]],
                    ["ltcc", [10918]],
                    ["ltcir", [10873]],
                    ["lt", [60]],
                    ["LT", [60]],
                    ["Lt", [8810]],
                    ["ltdot", [8918]],
                    ["lthree", [8907]],
                    ["ltimes", [8905]],
                    ["ltlarr", [10614]],
                    ["ltquest", [10875]],
                    ["ltri", [9667]],
                    ["ltrie", [8884]],
                    ["ltrif", [9666]],
                    ["ltrPar", [10646]],
                    ["lurdshar", [10570]],
                    ["luruhar", [10598]],
                    ["lvertneqq", [8808, 65024]],
                    ["lvnE", [8808, 65024]],
                    ["macr", [175]],
                    ["male", [9794]],
                    ["malt", [10016]],
                    ["maltese", [10016]],
                    ["Map", [10501]],
                    ["map", [8614]],
                    ["mapsto", [8614]],
                    ["mapstodown", [8615]],
                    ["mapstoleft", [8612]],
                    ["mapstoup", [8613]],
                    ["marker", [9646]],
                    ["mcomma", [10793]],
                    ["Mcy", [1052]],
                    ["mcy", [1084]],
                    ["mdash", [8212]],
                    ["mDDot", [8762]],
                    ["measuredangle", [8737]],
                    ["MediumSpace", [8287]],
                    ["Mellintrf", [8499]],
                    ["Mfr", [120080]],
                    ["mfr", [120106]],
                    ["mho", [8487]],
                    ["micro", [181]],
                    ["midast", [42]],
                    ["midcir", [10992]],
                    ["mid", [8739]],
                    ["middot", [183]],
                    ["minusb", [8863]],
                    ["minus", [8722]],
                    ["minusd", [8760]],
                    ["minusdu", [10794]],
                    ["MinusPlus", [8723]],
                    ["mlcp", [10971]],
                    ["mldr", [8230]],
                    ["mnplus", [8723]],
                    ["models", [8871]],
                    ["Mopf", [120132]],
                    ["mopf", [120158]],
                    ["mp", [8723]],
                    ["mscr", [120002]],
                    ["Mscr", [8499]],
                    ["mstpos", [8766]],
                    ["Mu", [924]],
                    ["mu", [956]],
                    ["multimap", [8888]],
                    ["mumap", [8888]],
                    ["nabla", [8711]],
                    ["Nacute", [323]],
                    ["nacute", [324]],
                    ["nang", [8736, 8402]],
                    ["nap", [8777]],
                    ["napE", [10864, 824]],
                    ["napid", [8779, 824]],
                    ["napos", [329]],
                    ["napprox", [8777]],
                    ["natural", [9838]],
                    ["naturals", [8469]],
                    ["natur", [9838]],
                    ["nbsp", [160]],
                    ["nbump", [8782, 824]],
                    ["nbumpe", [8783, 824]],
                    ["ncap", [10819]],
                    ["Ncaron", [327]],
                    ["ncaron", [328]],
                    ["Ncedil", [325]],
                    ["ncedil", [326]],
                    ["ncong", [8775]],
                    ["ncongdot", [10861, 824]],
                    ["ncup", [10818]],
                    ["Ncy", [1053]],
                    ["ncy", [1085]],
                    ["ndash", [8211]],
                    ["nearhk", [10532]],
                    ["nearr", [8599]],
                    ["neArr", [8663]],
                    ["nearrow", [8599]],
                    ["ne", [8800]],
                    ["nedot", [8784, 824]],
                    ["NegativeMediumSpace", [8203]],
                    ["NegativeThickSpace", [8203]],
                    ["NegativeThinSpace", [8203]],
                    ["NegativeVeryThinSpace", [8203]],
                    ["nequiv", [8802]],
                    ["nesear", [10536]],
                    ["nesim", [8770, 824]],
                    ["NestedGreaterGreater", [8811]],
                    ["NestedLessLess", [8810]],
                    ["nexist", [8708]],
                    ["nexists", [8708]],
                    ["Nfr", [120081]],
                    ["nfr", [120107]],
                    ["ngE", [8807, 824]],
                    ["nge", [8817]],
                    ["ngeq", [8817]],
                    ["ngeqq", [8807, 824]],
                    ["ngeqslant", [10878, 824]],
                    ["nges", [10878, 824]],
                    ["nGg", [8921, 824]],
                    ["ngsim", [8821]],
                    ["nGt", [8811, 8402]],
                    ["ngt", [8815]],
                    ["ngtr", [8815]],
                    ["nGtv", [8811, 824]],
                    ["nharr", [8622]],
                    ["nhArr", [8654]],
                    ["nhpar", [10994]],
                    ["ni", [8715]],
                    ["nis", [8956]],
                    ["nisd", [8954]],
                    ["niv", [8715]],
                    ["NJcy", [1034]],
                    ["njcy", [1114]],
                    ["nlarr", [8602]],
                    ["nlArr", [8653]],
                    ["nldr", [8229]],
                    ["nlE", [8806, 824]],
                    ["nle", [8816]],
                    ["nleftarrow", [8602]],
                    ["nLeftarrow", [8653]],
                    ["nleftrightarrow", [8622]],
                    ["nLeftrightarrow", [8654]],
                    ["nleq", [8816]],
                    ["nleqq", [8806, 824]],
                    ["nleqslant", [10877, 824]],
                    ["nles", [10877, 824]],
                    ["nless", [8814]],
                    ["nLl", [8920, 824]],
                    ["nlsim", [8820]],
                    ["nLt", [8810, 8402]],
                    ["nlt", [8814]],
                    ["nltri", [8938]],
                    ["nltrie", [8940]],
                    ["nLtv", [8810, 824]],
                    ["nmid", [8740]],
                    ["NoBreak", [8288]],
                    ["NonBreakingSpace", [160]],
                    ["nopf", [120159]],
                    ["Nopf", [8469]],
                    ["Not", [10988]],
                    ["not", [172]],
                    ["NotCongruent", [8802]],
                    ["NotCupCap", [8813]],
                    ["NotDoubleVerticalBar", [8742]],
                    ["NotElement", [8713]],
                    ["NotEqual", [8800]],
                    ["NotEqualTilde", [8770, 824]],
                    ["NotExists", [8708]],
                    ["NotGreater", [8815]],
                    ["NotGreaterEqual", [8817]],
                    ["NotGreaterFullEqual", [8807, 824]],
                    ["NotGreaterGreater", [8811, 824]],
                    ["NotGreaterLess", [8825]],
                    ["NotGreaterSlantEqual", [10878, 824]],
                    ["NotGreaterTilde", [8821]],
                    ["NotHumpDownHump", [8782, 824]],
                    ["NotHumpEqual", [8783, 824]],
                    ["notin", [8713]],
                    ["notindot", [8949, 824]],
                    ["notinE", [8953, 824]],
                    ["notinva", [8713]],
                    ["notinvb", [8951]],
                    ["notinvc", [8950]],
                    ["NotLeftTriangleBar", [10703, 824]],
                    ["NotLeftTriangle", [8938]],
                    ["NotLeftTriangleEqual", [8940]],
                    ["NotLess", [8814]],
                    ["NotLessEqual", [8816]],
                    ["NotLessGreater", [8824]],
                    ["NotLessLess", [8810, 824]],
                    ["NotLessSlantEqual", [10877, 824]],
                    ["NotLessTilde", [8820]],
                    ["NotNestedGreaterGreater", [10914, 824]],
                    ["NotNestedLessLess", [10913, 824]],
                    ["notni", [8716]],
                    ["notniva", [8716]],
                    ["notnivb", [8958]],
                    ["notnivc", [8957]],
                    ["NotPrecedes", [8832]],
                    ["NotPrecedesEqual", [10927, 824]],
                    ["NotPrecedesSlantEqual", [8928]],
                    ["NotReverseElement", [8716]],
                    ["NotRightTriangleBar", [10704, 824]],
                    ["NotRightTriangle", [8939]],
                    ["NotRightTriangleEqual", [8941]],
                    ["NotSquareSubset", [8847, 824]],
                    ["NotSquareSubsetEqual", [8930]],
                    ["NotSquareSuperset", [8848, 824]],
                    ["NotSquareSupersetEqual", [8931]],
                    ["NotSubset", [8834, 8402]],
                    ["NotSubsetEqual", [8840]],
                    ["NotSucceeds", [8833]],
                    ["NotSucceedsEqual", [10928, 824]],
                    ["NotSucceedsSlantEqual", [8929]],
                    ["NotSucceedsTilde", [8831, 824]],
                    ["NotSuperset", [8835, 8402]],
                    ["NotSupersetEqual", [8841]],
                    ["NotTilde", [8769]],
                    ["NotTildeEqual", [8772]],
                    ["NotTildeFullEqual", [8775]],
                    ["NotTildeTilde", [8777]],
                    ["NotVerticalBar", [8740]],
                    ["nparallel", [8742]],
                    ["npar", [8742]],
                    ["nparsl", [11005, 8421]],
                    ["npart", [8706, 824]],
                    ["npolint", [10772]],
                    ["npr", [8832]],
                    ["nprcue", [8928]],
                    ["nprec", [8832]],
                    ["npreceq", [10927, 824]],
                    ["npre", [10927, 824]],
                    ["nrarrc", [10547, 824]],
                    ["nrarr", [8603]],
                    ["nrArr", [8655]],
                    ["nrarrw", [8605, 824]],
                    ["nrightarrow", [8603]],
                    ["nRightarrow", [8655]],
                    ["nrtri", [8939]],
                    ["nrtrie", [8941]],
                    ["nsc", [8833]],
                    ["nsccue", [8929]],
                    ["nsce", [10928, 824]],
                    ["Nscr", [119977]],
                    ["nscr", [120003]],
                    ["nshortmid", [8740]],
                    ["nshortparallel", [8742]],
                    ["nsim", [8769]],
                    ["nsime", [8772]],
                    ["nsimeq", [8772]],
                    ["nsmid", [8740]],
                    ["nspar", [8742]],
                    ["nsqsube", [8930]],
                    ["nsqsupe", [8931]],
                    ["nsub", [8836]],
                    ["nsubE", [10949, 824]],
                    ["nsube", [8840]],
                    ["nsubset", [8834, 8402]],
                    ["nsubseteq", [8840]],
                    ["nsubseteqq", [10949, 824]],
                    ["nsucc", [8833]],
                    ["nsucceq", [10928, 824]],
                    ["nsup", [8837]],
                    ["nsupE", [10950, 824]],
                    ["nsupe", [8841]],
                    ["nsupset", [8835, 8402]],
                    ["nsupseteq", [8841]],
                    ["nsupseteqq", [10950, 824]],
                    ["ntgl", [8825]],
                    ["Ntilde", [209]],
                    ["ntilde", [241]],
                    ["ntlg", [8824]],
                    ["ntriangleleft", [8938]],
                    ["ntrianglelefteq", [8940]],
                    ["ntriangleright", [8939]],
                    ["ntrianglerighteq", [8941]],
                    ["Nu", [925]],
                    ["nu", [957]],
                    ["num", [35]],
                    ["numero", [8470]],
                    ["numsp", [8199]],
                    ["nvap", [8781, 8402]],
                    ["nvdash", [8876]],
                    ["nvDash", [8877]],
                    ["nVdash", [8878]],
                    ["nVDash", [8879]],
                    ["nvge", [8805, 8402]],
                    ["nvgt", [62, 8402]],
                    ["nvHarr", [10500]],
                    ["nvinfin", [10718]],
                    ["nvlArr", [10498]],
                    ["nvle", [8804, 8402]],
                    ["nvlt", [60, 8402]],
                    ["nvltrie", [8884, 8402]],
                    ["nvrArr", [10499]],
                    ["nvrtrie", [8885, 8402]],
                    ["nvsim", [8764, 8402]],
                    ["nwarhk", [10531]],
                    ["nwarr", [8598]],
                    ["nwArr", [8662]],
                    ["nwarrow", [8598]],
                    ["nwnear", [10535]],
                    ["Oacute", [211]],
                    ["oacute", [243]],
                    ["oast", [8859]],
                    ["Ocirc", [212]],
                    ["ocirc", [244]],
                    ["ocir", [8858]],
                    ["Ocy", [1054]],
                    ["ocy", [1086]],
                    ["odash", [8861]],
                    ["Odblac", [336]],
                    ["odblac", [337]],
                    ["odiv", [10808]],
                    ["odot", [8857]],
                    ["odsold", [10684]],
                    ["OElig", [338]],
                    ["oelig", [339]],
                    ["ofcir", [10687]],
                    ["Ofr", [120082]],
                    ["ofr", [120108]],
                    ["ogon", [731]],
                    ["Ograve", [210]],
                    ["ograve", [242]],
                    ["ogt", [10689]],
                    ["ohbar", [10677]],
                    ["ohm", [937]],
                    ["oint", [8750]],
                    ["olarr", [8634]],
                    ["olcir", [10686]],
                    ["olcross", [10683]],
                    ["oline", [8254]],
                    ["olt", [10688]],
                    ["Omacr", [332]],
                    ["omacr", [333]],
                    ["Omega", [937]],
                    ["omega", [969]],
                    ["Omicron", [927]],
                    ["omicron", [959]],
                    ["omid", [10678]],
                    ["ominus", [8854]],
                    ["Oopf", [120134]],
                    ["oopf", [120160]],
                    ["opar", [10679]],
                    ["OpenCurlyDoubleQuote", [8220]],
                    ["OpenCurlyQuote", [8216]],
                    ["operp", [10681]],
                    ["oplus", [8853]],
                    ["orarr", [8635]],
                    ["Or", [10836]],
                    ["or", [8744]],
                    ["ord", [10845]],
                    ["order", [8500]],
                    ["orderof", [8500]],
                    ["ordf", [170]],
                    ["ordm", [186]],
                    ["origof", [8886]],
                    ["oror", [10838]],
                    ["orslope", [10839]],
                    ["orv", [10843]],
                    ["oS", [9416]],
                    ["Oscr", [119978]],
                    ["oscr", [8500]],
                    ["Oslash", [216]],
                    ["oslash", [248]],
                    ["osol", [8856]],
                    ["Otilde", [213]],
                    ["otilde", [245]],
                    ["otimesas", [10806]],
                    ["Otimes", [10807]],
                    ["otimes", [8855]],
                    ["Ouml", [214]],
                    ["ouml", [246]],
                    ["ovbar", [9021]],
                    ["OverBar", [8254]],
                    ["OverBrace", [9182]],
                    ["OverBracket", [9140]],
                    ["OverParenthesis", [9180]],
                    ["para", [182]],
                    ["parallel", [8741]],
                    ["par", [8741]],
                    ["parsim", [10995]],
                    ["parsl", [11005]],
                    ["part", [8706]],
                    ["PartialD", [8706]],
                    ["Pcy", [1055]],
                    ["pcy", [1087]],
                    ["percnt", [37]],
                    ["period", [46]],
                    ["permil", [8240]],
                    ["perp", [8869]],
                    ["pertenk", [8241]],
                    ["Pfr", [120083]],
                    ["pfr", [120109]],
                    ["Phi", [934]],
                    ["phi", [966]],
                    ["phiv", [981]],
                    ["phmmat", [8499]],
                    ["phone", [9742]],
                    ["Pi", [928]],
                    ["pi", [960]],
                    ["pitchfork", [8916]],
                    ["piv", [982]],
                    ["planck", [8463]],
                    ["planckh", [8462]],
                    ["plankv", [8463]],
                    ["plusacir", [10787]],
                    ["plusb", [8862]],
                    ["pluscir", [10786]],
                    ["plus", [43]],
                    ["plusdo", [8724]],
                    ["plusdu", [10789]],
                    ["pluse", [10866]],
                    ["PlusMinus", [177]],
                    ["plusmn", [177]],
                    ["plussim", [10790]],
                    ["plustwo", [10791]],
                    ["pm", [177]],
                    ["Poincareplane", [8460]],
                    ["pointint", [10773]],
                    ["popf", [120161]],
                    ["Popf", [8473]],
                    ["pound", [163]],
                    ["prap", [10935]],
                    ["Pr", [10939]],
                    ["pr", [8826]],
                    ["prcue", [8828]],
                    ["precapprox", [10935]],
                    ["prec", [8826]],
                    ["preccurlyeq", [8828]],
                    ["Precedes", [8826]],
                    ["PrecedesEqual", [10927]],
                    ["PrecedesSlantEqual", [8828]],
                    ["PrecedesTilde", [8830]],
                    ["preceq", [10927]],
                    ["precnapprox", [10937]],
                    ["precneqq", [10933]],
                    ["precnsim", [8936]],
                    ["pre", [10927]],
                    ["prE", [10931]],
                    ["precsim", [8830]],
                    ["prime", [8242]],
                    ["Prime", [8243]],
                    ["primes", [8473]],
                    ["prnap", [10937]],
                    ["prnE", [10933]],
                    ["prnsim", [8936]],
                    ["prod", [8719]],
                    ["Product", [8719]],
                    ["profalar", [9006]],
                    ["profline", [8978]],
                    ["profsurf", [8979]],
                    ["prop", [8733]],
                    ["Proportional", [8733]],
                    ["Proportion", [8759]],
                    ["propto", [8733]],
                    ["prsim", [8830]],
                    ["prurel", [8880]],
                    ["Pscr", [119979]],
                    ["pscr", [120005]],
                    ["Psi", [936]],
                    ["psi", [968]],
                    ["puncsp", [8200]],
                    ["Qfr", [120084]],
                    ["qfr", [120110]],
                    ["qint", [10764]],
                    ["qopf", [120162]],
                    ["Qopf", [8474]],
                    ["qprime", [8279]],
                    ["Qscr", [119980]],
                    ["qscr", [120006]],
                    ["quaternions", [8461]],
                    ["quatint", [10774]],
                    ["quest", [63]],
                    ["questeq", [8799]],
                    ["quot", [34]],
                    ["QUOT", [34]],
                    ["rAarr", [8667]],
                    ["race", [8765, 817]],
                    ["Racute", [340]],
                    ["racute", [341]],
                    ["radic", [8730]],
                    ["raemptyv", [10675]],
                    ["rang", [10217]],
                    ["Rang", [10219]],
                    ["rangd", [10642]],
                    ["range", [10661]],
                    ["rangle", [10217]],
                    ["raquo", [187]],
                    ["rarrap", [10613]],
                    ["rarrb", [8677]],
                    ["rarrbfs", [10528]],
                    ["rarrc", [10547]],
                    ["rarr", [8594]],
                    ["Rarr", [8608]],
                    ["rArr", [8658]],
                    ["rarrfs", [10526]],
                    ["rarrhk", [8618]],
                    ["rarrlp", [8620]],
                    ["rarrpl", [10565]],
                    ["rarrsim", [10612]],
                    ["Rarrtl", [10518]],
                    ["rarrtl", [8611]],
                    ["rarrw", [8605]],
                    ["ratail", [10522]],
                    ["rAtail", [10524]],
                    ["ratio", [8758]],
                    ["rationals", [8474]],
                    ["rbarr", [10509]],
                    ["rBarr", [10511]],
                    ["RBarr", [10512]],
                    ["rbbrk", [10099]],
                    ["rbrace", [125]],
                    ["rbrack", [93]],
                    ["rbrke", [10636]],
                    ["rbrksld", [10638]],
                    ["rbrkslu", [10640]],
                    ["Rcaron", [344]],
                    ["rcaron", [345]],
                    ["Rcedil", [342]],
                    ["rcedil", [343]],
                    ["rceil", [8969]],
                    ["rcub", [125]],
                    ["Rcy", [1056]],
                    ["rcy", [1088]],
                    ["rdca", [10551]],
                    ["rdldhar", [10601]],
                    ["rdquo", [8221]],
                    ["rdquor", [8221]],
                    ["rdsh", [8627]],
                    ["real", [8476]],
                    ["realine", [8475]],
                    ["realpart", [8476]],
                    ["reals", [8477]],
                    ["Re", [8476]],
                    ["rect", [9645]],
                    ["reg", [174]],
                    ["REG", [174]],
                    ["ReverseElement", [8715]],
                    ["ReverseEquilibrium", [8651]],
                    ["ReverseUpEquilibrium", [10607]],
                    ["rfisht", [10621]],
                    ["rfloor", [8971]],
                    ["rfr", [120111]],
                    ["Rfr", [8476]],
                    ["rHar", [10596]],
                    ["rhard", [8641]],
                    ["rharu", [8640]],
                    ["rharul", [10604]],
                    ["Rho", [929]],
                    ["rho", [961]],
                    ["rhov", [1009]],
                    ["RightAngleBracket", [10217]],
                    ["RightArrowBar", [8677]],
                    ["rightarrow", [8594]],
                    ["RightArrow", [8594]],
                    ["Rightarrow", [8658]],
                    ["RightArrowLeftArrow", [8644]],
                    ["rightarrowtail", [8611]],
                    ["RightCeiling", [8969]],
                    ["RightDoubleBracket", [10215]],
                    ["RightDownTeeVector", [10589]],
                    ["RightDownVectorBar", [10581]],
                    ["RightDownVector", [8642]],
                    ["RightFloor", [8971]],
                    ["rightharpoondown", [8641]],
                    ["rightharpoonup", [8640]],
                    ["rightleftarrows", [8644]],
                    ["rightleftharpoons", [8652]],
                    ["rightrightarrows", [8649]],
                    ["rightsquigarrow", [8605]],
                    ["RightTeeArrow", [8614]],
                    ["RightTee", [8866]],
                    ["RightTeeVector", [10587]],
                    ["rightthreetimes", [8908]],
                    ["RightTriangleBar", [10704]],
                    ["RightTriangle", [8883]],
                    ["RightTriangleEqual", [8885]],
                    ["RightUpDownVector", [10575]],
                    ["RightUpTeeVector", [10588]],
                    ["RightUpVectorBar", [10580]],
                    ["RightUpVector", [8638]],
                    ["RightVectorBar", [10579]],
                    ["RightVector", [8640]],
                    ["ring", [730]],
                    ["risingdotseq", [8787]],
                    ["rlarr", [8644]],
                    ["rlhar", [8652]],
                    ["rlm", [8207]],
                    ["rmoustache", [9137]],
                    ["rmoust", [9137]],
                    ["rnmid", [10990]],
                    ["roang", [10221]],
                    ["roarr", [8702]],
                    ["robrk", [10215]],
                    ["ropar", [10630]],
                    ["ropf", [120163]],
                    ["Ropf", [8477]],
                    ["roplus", [10798]],
                    ["rotimes", [10805]],
                    ["RoundImplies", [10608]],
                    ["rpar", [41]],
                    ["rpargt", [10644]],
                    ["rppolint", [10770]],
                    ["rrarr", [8649]],
                    ["Rrightarrow", [8667]],
                    ["rsaquo", [8250]],
                    ["rscr", [120007]],
                    ["Rscr", [8475]],
                    ["rsh", [8625]],
                    ["Rsh", [8625]],
                    ["rsqb", [93]],
                    ["rsquo", [8217]],
                    ["rsquor", [8217]],
                    ["rthree", [8908]],
                    ["rtimes", [8906]],
                    ["rtri", [9657]],
                    ["rtrie", [8885]],
                    ["rtrif", [9656]],
                    ["rtriltri", [10702]],
                    ["RuleDelayed", [10740]],
                    ["ruluhar", [10600]],
                    ["rx", [8478]],
                    ["Sacute", [346]],
                    ["sacute", [347]],
                    ["sbquo", [8218]],
                    ["scap", [10936]],
                    ["Scaron", [352]],
                    ["scaron", [353]],
                    ["Sc", [10940]],
                    ["sc", [8827]],
                    ["sccue", [8829]],
                    ["sce", [10928]],
                    ["scE", [10932]],
                    ["Scedil", [350]],
                    ["scedil", [351]],
                    ["Scirc", [348]],
                    ["scirc", [349]],
                    ["scnap", [10938]],
                    ["scnE", [10934]],
                    ["scnsim", [8937]],
                    ["scpolint", [10771]],
                    ["scsim", [8831]],
                    ["Scy", [1057]],
                    ["scy", [1089]],
                    ["sdotb", [8865]],
                    ["sdot", [8901]],
                    ["sdote", [10854]],
                    ["searhk", [10533]],
                    ["searr", [8600]],
                    ["seArr", [8664]],
                    ["searrow", [8600]],
                    ["sect", [167]],
                    ["semi", [59]],
                    ["seswar", [10537]],
                    ["setminus", [8726]],
                    ["setmn", [8726]],
                    ["sext", [10038]],
                    ["Sfr", [120086]],
                    ["sfr", [120112]],
                    ["sfrown", [8994]],
                    ["sharp", [9839]],
                    ["SHCHcy", [1065]],
                    ["shchcy", [1097]],
                    ["SHcy", [1064]],
                    ["shcy", [1096]],
                    ["ShortDownArrow", [8595]],
                    ["ShortLeftArrow", [8592]],
                    ["shortmid", [8739]],
                    ["shortparallel", [8741]],
                    ["ShortRightArrow", [8594]],
                    ["ShortUpArrow", [8593]],
                    ["shy", [173]],
                    ["Sigma", [931]],
                    ["sigma", [963]],
                    ["sigmaf", [962]],
                    ["sigmav", [962]],
                    ["sim", [8764]],
                    ["simdot", [10858]],
                    ["sime", [8771]],
                    ["simeq", [8771]],
                    ["simg", [10910]],
                    ["simgE", [10912]],
                    ["siml", [10909]],
                    ["simlE", [10911]],
                    ["simne", [8774]],
                    ["simplus", [10788]],
                    ["simrarr", [10610]],
                    ["slarr", [8592]],
                    ["SmallCircle", [8728]],
                    ["smallsetminus", [8726]],
                    ["smashp", [10803]],
                    ["smeparsl", [10724]],
                    ["smid", [8739]],
                    ["smile", [8995]],
                    ["smt", [10922]],
                    ["smte", [10924]],
                    ["smtes", [10924, 65024]],
                    ["SOFTcy", [1068]],
                    ["softcy", [1100]],
                    ["solbar", [9023]],
                    ["solb", [10692]],
                    ["sol", [47]],
                    ["Sopf", [120138]],
                    ["sopf", [120164]],
                    ["spades", [9824]],
                    ["spadesuit", [9824]],
                    ["spar", [8741]],
                    ["sqcap", [8851]],
                    ["sqcaps", [8851, 65024]],
                    ["sqcup", [8852]],
                    ["sqcups", [8852, 65024]],
                    ["Sqrt", [8730]],
                    ["sqsub", [8847]],
                    ["sqsube", [8849]],
                    ["sqsubset", [8847]],
                    ["sqsubseteq", [8849]],
                    ["sqsup", [8848]],
                    ["sqsupe", [8850]],
                    ["sqsupset", [8848]],
                    ["sqsupseteq", [8850]],
                    ["square", [9633]],
                    ["Square", [9633]],
                    ["SquareIntersection", [8851]],
                    ["SquareSubset", [8847]],
                    ["SquareSubsetEqual", [8849]],
                    ["SquareSuperset", [8848]],
                    ["SquareSupersetEqual", [8850]],
                    ["SquareUnion", [8852]],
                    ["squarf", [9642]],
                    ["squ", [9633]],
                    ["squf", [9642]],
                    ["srarr", [8594]],
                    ["Sscr", [119982]],
                    ["sscr", [120008]],
                    ["ssetmn", [8726]],
                    ["ssmile", [8995]],
                    ["sstarf", [8902]],
                    ["Star", [8902]],
                    ["star", [9734]],
                    ["starf", [9733]],
                    ["straightepsilon", [1013]],
                    ["straightphi", [981]],
                    ["strns", [175]],
                    ["sub", [8834]],
                    ["Sub", [8912]],
                    ["subdot", [10941]],
                    ["subE", [10949]],
                    ["sube", [8838]],
                    ["subedot", [10947]],
                    ["submult", [10945]],
                    ["subnE", [10955]],
                    ["subne", [8842]],
                    ["subplus", [10943]],
                    ["subrarr", [10617]],
                    ["subset", [8834]],
                    ["Subset", [8912]],
                    ["subseteq", [8838]],
                    ["subseteqq", [10949]],
                    ["SubsetEqual", [8838]],
                    ["subsetneq", [8842]],
                    ["subsetneqq", [10955]],
                    ["subsim", [10951]],
                    ["subsub", [10965]],
                    ["subsup", [10963]],
                    ["succapprox", [10936]],
                    ["succ", [8827]],
                    ["succcurlyeq", [8829]],
                    ["Succeeds", [8827]],
                    ["SucceedsEqual", [10928]],
                    ["SucceedsSlantEqual", [8829]],
                    ["SucceedsTilde", [8831]],
                    ["succeq", [10928]],
                    ["succnapprox", [10938]],
                    ["succneqq", [10934]],
                    ["succnsim", [8937]],
                    ["succsim", [8831]],
                    ["SuchThat", [8715]],
                    ["sum", [8721]],
                    ["Sum", [8721]],
                    ["sung", [9834]],
                    ["sup1", [185]],
                    ["sup2", [178]],
                    ["sup3", [179]],
                    ["sup", [8835]],
                    ["Sup", [8913]],
                    ["supdot", [10942]],
                    ["supdsub", [10968]],
                    ["supE", [10950]],
                    ["supe", [8839]],
                    ["supedot", [10948]],
                    ["Superset", [8835]],
                    ["SupersetEqual", [8839]],
                    ["suphsol", [10185]],
                    ["suphsub", [10967]],
                    ["suplarr", [10619]],
                    ["supmult", [10946]],
                    ["supnE", [10956]],
                    ["supne", [8843]],
                    ["supplus", [10944]],
                    ["supset", [8835]],
                    ["Supset", [8913]],
                    ["supseteq", [8839]],
                    ["supseteqq", [10950]],
                    ["supsetneq", [8843]],
                    ["supsetneqq", [10956]],
                    ["supsim", [10952]],
                    ["supsub", [10964]],
                    ["supsup", [10966]],
                    ["swarhk", [10534]],
                    ["swarr", [8601]],
                    ["swArr", [8665]],
                    ["swarrow", [8601]],
                    ["swnwar", [10538]],
                    ["szlig", [223]],
                    ["Tab", [9]],
                    ["target", [8982]],
                    ["Tau", [932]],
                    ["tau", [964]],
                    ["tbrk", [9140]],
                    ["Tcaron", [356]],
                    ["tcaron", [357]],
                    ["Tcedil", [354]],
                    ["tcedil", [355]],
                    ["Tcy", [1058]],
                    ["tcy", [1090]],
                    ["tdot", [8411]],
                    ["telrec", [8981]],
                    ["Tfr", [120087]],
                    ["tfr", [120113]],
                    ["there4", [8756]],
                    ["therefore", [8756]],
                    ["Therefore", [8756]],
                    ["Theta", [920]],
                    ["theta", [952]],
                    ["thetasym", [977]],
                    ["thetav", [977]],
                    ["thickapprox", [8776]],
                    ["thicksim", [8764]],
                    ["ThickSpace", [8287, 8202]],
                    ["ThinSpace", [8201]],
                    ["thinsp", [8201]],
                    ["thkap", [8776]],
                    ["thksim", [8764]],
                    ["THORN", [222]],
                    ["thorn", [254]],
                    ["tilde", [732]],
                    ["Tilde", [8764]],
                    ["TildeEqual", [8771]],
                    ["TildeFullEqual", [8773]],
                    ["TildeTilde", [8776]],
                    ["timesbar", [10801]],
                    ["timesb", [8864]],
                    ["times", [215]],
                    ["timesd", [10800]],
                    ["tint", [8749]],
                    ["toea", [10536]],
                    ["topbot", [9014]],
                    ["topcir", [10993]],
                    ["top", [8868]],
                    ["Topf", [120139]],
                    ["topf", [120165]],
                    ["topfork", [10970]],
                    ["tosa", [10537]],
                    ["tprime", [8244]],
                    ["trade", [8482]],
                    ["TRADE", [8482]],
                    ["triangle", [9653]],
                    ["triangledown", [9663]],
                    ["triangleleft", [9667]],
                    ["trianglelefteq", [8884]],
                    ["triangleq", [8796]],
                    ["triangleright", [9657]],
                    ["trianglerighteq", [8885]],
                    ["tridot", [9708]],
                    ["trie", [8796]],
                    ["triminus", [10810]],
                    ["TripleDot", [8411]],
                    ["triplus", [10809]],
                    ["trisb", [10701]],
                    ["tritime", [10811]],
                    ["trpezium", [9186]],
                    ["Tscr", [119983]],
                    ["tscr", [120009]],
                    ["TScy", [1062]],
                    ["tscy", [1094]],
                    ["TSHcy", [1035]],
                    ["tshcy", [1115]],
                    ["Tstrok", [358]],
                    ["tstrok", [359]],
                    ["twixt", [8812]],
                    ["twoheadleftarrow", [8606]],
                    ["twoheadrightarrow", [8608]],
                    ["Uacute", [218]],
                    ["uacute", [250]],
                    ["uarr", [8593]],
                    ["Uarr", [8607]],
                    ["uArr", [8657]],
                    ["Uarrocir", [10569]],
                    ["Ubrcy", [1038]],
                    ["ubrcy", [1118]],
                    ["Ubreve", [364]],
                    ["ubreve", [365]],
                    ["Ucirc", [219]],
                    ["ucirc", [251]],
                    ["Ucy", [1059]],
                    ["ucy", [1091]],
                    ["udarr", [8645]],
                    ["Udblac", [368]],
                    ["udblac", [369]],
                    ["udhar", [10606]],
                    ["ufisht", [10622]],
                    ["Ufr", [120088]],
                    ["ufr", [120114]],
                    ["Ugrave", [217]],
                    ["ugrave", [249]],
                    ["uHar", [10595]],
                    ["uharl", [8639]],
                    ["uharr", [8638]],
                    ["uhblk", [9600]],
                    ["ulcorn", [8988]],
                    ["ulcorner", [8988]],
                    ["ulcrop", [8975]],
                    ["ultri", [9720]],
                    ["Umacr", [362]],
                    ["umacr", [363]],
                    ["uml", [168]],
                    ["UnderBar", [95]],
                    ["UnderBrace", [9183]],
                    ["UnderBracket", [9141]],
                    ["UnderParenthesis", [9181]],
                    ["Union", [8899]],
                    ["UnionPlus", [8846]],
                    ["Uogon", [370]],
                    ["uogon", [371]],
                    ["Uopf", [120140]],
                    ["uopf", [120166]],
                    ["UpArrowBar", [10514]],
                    ["uparrow", [8593]],
                    ["UpArrow", [8593]],
                    ["Uparrow", [8657]],
                    ["UpArrowDownArrow", [8645]],
                    ["updownarrow", [8597]],
                    ["UpDownArrow", [8597]],
                    ["Updownarrow", [8661]],
                    ["UpEquilibrium", [10606]],
                    ["upharpoonleft", [8639]],
                    ["upharpoonright", [8638]],
                    ["uplus", [8846]],
                    ["UpperLeftArrow", [8598]],
                    ["UpperRightArrow", [8599]],
                    ["upsi", [965]],
                    ["Upsi", [978]],
                    ["upsih", [978]],
                    ["Upsilon", [933]],
                    ["upsilon", [965]],
                    ["UpTeeArrow", [8613]],
                    ["UpTee", [8869]],
                    ["upuparrows", [8648]],
                    ["urcorn", [8989]],
                    ["urcorner", [8989]],
                    ["urcrop", [8974]],
                    ["Uring", [366]],
                    ["uring", [367]],
                    ["urtri", [9721]],
                    ["Uscr", [119984]],
                    ["uscr", [120010]],
                    ["utdot", [8944]],
                    ["Utilde", [360]],
                    ["utilde", [361]],
                    ["utri", [9653]],
                    ["utrif", [9652]],
                    ["uuarr", [8648]],
                    ["Uuml", [220]],
                    ["uuml", [252]],
                    ["uwangle", [10663]],
                    ["vangrt", [10652]],
                    ["varepsilon", [1013]],
                    ["varkappa", [1008]],
                    ["varnothing", [8709]],
                    ["varphi", [981]],
                    ["varpi", [982]],
                    ["varpropto", [8733]],
                    ["varr", [8597]],
                    ["vArr", [8661]],
                    ["varrho", [1009]],
                    ["varsigma", [962]],
                    ["varsubsetneq", [8842, 65024]],
                    ["varsubsetneqq", [10955, 65024]],
                    ["varsupsetneq", [8843, 65024]],
                    ["varsupsetneqq", [10956, 65024]],
                    ["vartheta", [977]],
                    ["vartriangleleft", [8882]],
                    ["vartriangleright", [8883]],
                    ["vBar", [10984]],
                    ["Vbar", [10987]],
                    ["vBarv", [10985]],
                    ["Vcy", [1042]],
                    ["vcy", [1074]],
                    ["vdash", [8866]],
                    ["vDash", [8872]],
                    ["Vdash", [8873]],
                    ["VDash", [8875]],
                    ["Vdashl", [10982]],
                    ["veebar", [8891]],
                    ["vee", [8744]],
                    ["Vee", [8897]],
                    ["veeeq", [8794]],
                    ["vellip", [8942]],
                    ["verbar", [124]],
                    ["Verbar", [8214]],
                    ["vert", [124]],
                    ["Vert", [8214]],
                    ["VerticalBar", [8739]],
                    ["VerticalLine", [124]],
                    ["VerticalSeparator", [10072]],
                    ["VerticalTilde", [8768]],
                    ["VeryThinSpace", [8202]],
                    ["Vfr", [120089]],
                    ["vfr", [120115]],
                    ["vltri", [8882]],
                    ["vnsub", [8834, 8402]],
                    ["vnsup", [8835, 8402]],
                    ["Vopf", [120141]],
                    ["vopf", [120167]],
                    ["vprop", [8733]],
                    ["vrtri", [8883]],
                    ["Vscr", [119985]],
                    ["vscr", [120011]],
                    ["vsubnE", [10955, 65024]],
                    ["vsubne", [8842, 65024]],
                    ["vsupnE", [10956, 65024]],
                    ["vsupne", [8843, 65024]],
                    ["Vvdash", [8874]],
                    ["vzigzag", [10650]],
                    ["Wcirc", [372]],
                    ["wcirc", [373]],
                    ["wedbar", [10847]],
                    ["wedge", [8743]],
                    ["Wedge", [8896]],
                    ["wedgeq", [8793]],
                    ["weierp", [8472]],
                    ["Wfr", [120090]],
                    ["wfr", [120116]],
                    ["Wopf", [120142]],
                    ["wopf", [120168]],
                    ["wp", [8472]],
                    ["wr", [8768]],
                    ["wreath", [8768]],
                    ["Wscr", [119986]],
                    ["wscr", [120012]],
                    ["xcap", [8898]],
                    ["xcirc", [9711]],
                    ["xcup", [8899]],
                    ["xdtri", [9661]],
                    ["Xfr", [120091]],
                    ["xfr", [120117]],
                    ["xharr", [10231]],
                    ["xhArr", [10234]],
                    ["Xi", [926]],
                    ["xi", [958]],
                    ["xlarr", [10229]],
                    ["xlArr", [10232]],
                    ["xmap", [10236]],
                    ["xnis", [8955]],
                    ["xodot", [10752]],
                    ["Xopf", [120143]],
                    ["xopf", [120169]],
                    ["xoplus", [10753]],
                    ["xotime", [10754]],
                    ["xrarr", [10230]],
                    ["xrArr", [10233]],
                    ["Xscr", [119987]],
                    ["xscr", [120013]],
                    ["xsqcup", [10758]],
                    ["xuplus", [10756]],
                    ["xutri", [9651]],
                    ["xvee", [8897]],
                    ["xwedge", [8896]],
                    ["Yacute", [221]],
                    ["yacute", [253]],
                    ["YAcy", [1071]],
                    ["yacy", [1103]],
                    ["Ycirc", [374]],
                    ["ycirc", [375]],
                    ["Ycy", [1067]],
                    ["ycy", [1099]],
                    ["yen", [165]],
                    ["Yfr", [120092]],
                    ["yfr", [120118]],
                    ["YIcy", [1031]],
                    ["yicy", [1111]],
                    ["Yopf", [120144]],
                    ["yopf", [120170]],
                    ["Yscr", [119988]],
                    ["yscr", [120014]],
                    ["YUcy", [1070]],
                    ["yucy", [1102]],
                    ["yuml", [255]],
                    ["Yuml", [376]],
                    ["Zacute", [377]],
                    ["zacute", [378]],
                    ["Zcaron", [381]],
                    ["zcaron", [382]],
                    ["Zcy", [1047]],
                    ["zcy", [1079]],
                    ["Zdot", [379]],
                    ["zdot", [380]],
                    ["zeetrf", [8488]],
                    ["ZeroWidthSpace", [8203]],
                    ["Zeta", [918]],
                    ["zeta", [950]],
                    ["zfr", [120119]],
                    ["Zfr", [8488]],
                    ["ZHcy", [1046]],
                    ["zhcy", [1078]],
                    ["zigrarr", [8669]],
                    ["zopf", [120171]],
                    ["Zopf", [8484]],
                    ["Zscr", [119989]],
                    ["zscr", [120015]],
                    ["zwj", [8205]],
                    ["zwnj", [8204]]
                ],
                o = {},
                a = {};
            i(o, a), n.prototype.decode = function(e) {
                return 0 === e.length ? "" : e.replace(/&(#?[\w\d]+);?/g, function(e, t) {
                    var n;
                    if ("#" === t.charAt(0)) {
                        var i = "x" === t.charAt(1) ? parseInt(t.substr(2).toLowerCase(), 16) : parseInt(t.substr(1));
                        isNaN(i) || -32768 > i || i > 65535 || (n = String.fromCharCode(i))
                    } else n = o[t];
                    return n || e
                })
            }, n.decode = function(e) {
                return (new n).decode(e)
            }, n.prototype.encode = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = a[e.charCodeAt(i)];
                    if (r) {
                        var o = r[e.charCodeAt(i + 1)];
                        if (o ? i++ : o = r[""], o) {
                            n += "&" + o + ";", i++;
                            continue
                        }
                    }
                    n += e.charAt(i), i++
                }
                return n
            }, n.encode = function(e) {
                return (new n).encode(e)
            }, n.prototype.encodeNonUTF = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = e.charCodeAt(i),
                        o = a[r];
                    if (o) {
                        var s = o[e.charCodeAt(i + 1)];
                        if (s ? i++ : s = o[""], s) {
                            n += "&" + s + ";", i++;
                            continue
                        }
                    }
                    n += 32 > r || r > 126 ? "&#" + r + ";" : e.charAt(i), i++
                }
                return n
            }, n.encodeNonUTF = function(e) {
                return (new n).encodeNonUTF(e)
            }, n.prototype.encodeNonASCII = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = e.charCodeAt(i);
                    255 >= r ? n += e[i++] : (n += "&#" + r + ";", i++)
                }
                return n
            }, n.encodeNonASCII = function(e) {
                return (new n).encodeNonASCII(e)
            }, e.exports = n
        }, function(e, t) {
            t.store = {}, t.set = function(e, n) {
                t.store[e] = n
            }, t.get = function(e) {
                return t.store[e]
            }, t.reset = function() {
                t.store = {}
            }
        }, function(e, t) {
            e.exports = {
                5: {
                    container: "flv",
                    resolution: "240p",
                    encoding: "Sorenson H.283",
                    profile: null,
                    bitrate: "0.25",
                    audioEncoding: "mp3",
                    audioBitrate: 64
                },
                6: {
                    container: "flv",
                    resolution: "270p",
                    encoding: "Sorenson H.263",
                    profile: null,
                    bitrate: "0.8",
                    audioEncoding: "mp3",
                    audioBitrate: 64
                },
                13: {
                    container: "3gp",
                    resolution: null,
                    encoding: "MPEG-4 Visual",
                    profile: null,
                    bitrate: "0.5",
                    audioEncoding: "aac",
                    audioBitrate: null
                },
                17: {
                    container: "3gp",
                    resolution: "144p",
                    encoding: "MPEG-4 Visual",
                    profile: "simple",
                    bitrate: "0.05",
                    audioEncoding: "aac",
                    audioBitrate: 24
                },
                18: {
                    container: "mp4",
                    resolution: "360p",
                    encoding: "H.264",
                    profile: "baseline",
                    bitrate: "0.5",
                    audioEncoding: "aac",
                    audioBitrate: 96
                },
                22: {
                    container: "mp4",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "2-3",
                    audioEncoding: "aac",
                    audioBitrate: 192
                },
                34: {
                    container: "flv",
                    resolution: "360p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.5",
                    audioEncoding: "aac",
                    audioBitrate: 128
                },
                35: {
                    container: "flv",
                    resolution: "480p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.8-1",
                    audioEncoding: "aac",
                    audioBitrate: 128
                },
                36: {
                    container: "3gp",
                    resolution: "240p",
                    encoding: "MPEG-4 Visual",
                    profile: "simple",
                    bitrate: "0.175",
                    audioEncoding: "aac",
                    audioBitrate: 36
                },
                37: {
                    container: "mp4",
                    resolution: "1080p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "3-5.9",
                    audioEncoding: "aac",
                    audioBitrate: 192
                },
                38: {
                    container: "mp4",
                    resolution: "3072p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "3.5-5",
                    audioEncoding: "aac",
                    audioBitrate: 192
                },
                43: {
                    container: "webm",
                    resolution: "360p",
                    encoding: "VP8",
                    profile: null,
                    bitrate: "0.5",
                    audioEncoding: "vorbis",
                    audioBitrate: 128
                },
                44: {
                    container: "webm",
                    resolution: "480p",
                    encoding: "VP8",
                    profile: null,
                    bitrate: "1",
                    audioEncoding: "vorbis",
                    audioBitrate: 128
                },
                45: {
                    container: "webm",
                    resolution: "720p",
                    encoding: "VP8",
                    profile: null,
                    bitrate: "2",
                    audioEncoding: "vorbis",
                    audioBitrate: 192
                },
                46: {
                    container: "webm",
                    resolution: "1080p",
                    encoding: "vp8",
                    profile: null,
                    bitrate: null,
                    audioEncoding: "vorbis",
                    audioBitrate: 192
                },
                82: {
                    container: "mp4",
                    resolution: "360p",
                    encoding: "H.264",
                    profile: "3d",
                    bitrate: "0.5",
                    audioEncoding: "aac",
                    audioBitrate: 96
                },
                83: {
                    container: "mp4",
                    resolution: "240p",
                    encoding: "H.264",
                    profile: "3d",
                    bitrate: "0.5",
                    audioEncoding: "aac",
                    audioBitrate: 96
                },
                84: {
                    container: "mp4",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "3d",
                    bitrate: "2-3",
                    audioEncoding: "aac",
                    audioBitrate: 192
                },
                85: {
                    container: "mp4",
                    resolution: "1080p",
                    encoding: "H.264",
                    profile: "3d",
                    bitrate: "3-4",
                    audioEncoding: "aac",
                    audioBitrate: 192
                },
                100: {
                    container: "webm",
                    resolution: "360p",
                    encoding: "VP8",
                    profile: "3d",
                    bitrate: null,
                    audioEncoding: "vorbis",
                    audioBitrate: 128
                },
                101: {
                    container: "webm",
                    resolution: "360p",
                    encoding: "VP8",
                    profile: "3d",
                    bitrate: null,
                    audioEncoding: "vorbis",
                    audioBitrate: 192
                },
                102: {
                    container: "webm",
                    resolution: "720p",
                    encoding: "VP8",
                    profile: "3d",
                    bitrate: null,
                    audioEncoding: "vorbis",
                    audioBitrate: 192
                },
                133: {
                    container: "mp4",
                    resolution: "240p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.2-0.3",
                    audioEncoding: null,
                    audioBitrate: null
                },
                134: {
                    container: "mp4",
                    resolution: "360p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.3-0.4",
                    audioEncoding: null,
                    audioBitrate: null
                },
                135: {
                    container: "mp4",
                    resolution: "480p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.5-1",
                    audioEncoding: null,
                    audioBitrate: null
                },
                136: {
                    container: "mp4",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "1-1.5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                137: {
                    container: "mp4",
                    resolution: "1080p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "2-3",
                    audioEncoding: null,
                    audioBitrate: null
                },
                138: {
                    container: "mp4",
                    resolution: "2160p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "13.5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                160: {
                    container: "mp4",
                    resolution: "144p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.1",
                    audioEncoding: null,
                    audioBitrate: null
                },
                242: {
                    container: "webm",
                    resolution: "240p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "0.14",
                    audioEncoding: null,
                    audioBitrate: null
                },
                243: {
                    container: "webm",
                    resolution: "360p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "0.26",
                    audioEncoding: null,
                    audioBitrate: null
                },
                244: {
                    container: "webm",
                    resolution: "480p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "0.585",
                    audioEncoding: null,
                    audioBitrate: null
                },
                247: {
                    container: "webm",
                    resolution: "720p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "1.184",
                    audioEncoding: null,
                    audioBitrate: null
                },
                248: {
                    container: "webm",
                    resolution: "1080p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "1.895",
                    audioEncoding: null,
                    audioBitrate: null
                },
                264: {
                    container: "mp4",
                    resolution: "1440p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "4-5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                266: {
                    container: "mp4",
                    resolution: "2160p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "12.5-13.5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                271: {
                    container: "webm",
                    resolution: "1440p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "9",
                    audioEncoding: null,
                    audioBitrate: null
                },
                272: {
                    container: "webm",
                    resolution: "2160p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "20",
                    audioEncoding: null,
                    audioBitrate: null
                },
                278: {
                    container: "webm",
                    resolution: "144p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "0.08",
                    audioEncoding: null,
                    audioBitrate: null
                },
                298: {
                    container: "mp4",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "3-3.5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                299: {
                    container: "mp4",
                    resolution: "1080p",
                    encoding: "H.264",
                    profile: "high",
                    bitrate: "5.5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                302: {
                    container: "webm",
                    resolution: "720p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "2.5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                303: {
                    container: "webm",
                    resolution: "1080p",
                    encoding: "VP9",
                    profile: null,
                    bitrate: "5",
                    audioEncoding: null,
                    audioBitrate: null
                },
                139: {
                    container: "mp4",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "aac",
                    audioBitrate: 48
                },
                140: {
                    container: "mp4",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "aac",
                    audioBitrate: 128
                },
                141: {
                    container: "mp4",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "aac",
                    audioBitrate: 256
                },
                171: {
                    container: "webm",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "vorbis",
                    audioBitrate: 128
                },
                172: {
                    container: "webm",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "vorbis",
                    audioBitrate: 192
                },
                249: {
                    container: "webm",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "opus",
                    audioBitrate: 50
                },
                250: {
                    container: "webm",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "opus",
                    audioBitrate: 70
                },
                251: {
                    container: "webm",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "opus",
                    audioBitrate: 160
                },
                92: {
                    container: "ts",
                    resolution: "240p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.15-0.3",
                    audioEncoding: "aac",
                    audioBitrate: 48
                },
                93: {
                    container: "ts",
                    resolution: "480p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.5-1",
                    audioEncoding: "aac",
                    audioBitrate: 128
                },
                94: {
                    container: "ts",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "0.8-1.25",
                    audioEncoding: "aac",
                    audioBitrate: 128
                },
                95: {
                    container: "ts",
                    resolution: "1080p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "1.5-3",
                    audioEncoding: "aac",
                    audioBitrate: 256
                },
                96: {
                    container: "ts",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "main",
                    bitrate: "2.5-6",
                    audioEncoding: "aac",
                    audioBitrate: 256
                },
                120: {
                    container: "flv",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "Main@L3.1",
                    bitrate: "2",
                    audioEncoding: "aac",
                    audioBitrate: 128
                },
                127: {
                    container: "ts",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "aac",
                    audioBitrate: 96
                },
                128: {
                    container: "ts",
                    resolution: null,
                    encoding: null,
                    profile: null,
                    bitrate: null,
                    audioEncoding: "aac",
                    audioBitrate: 96
                },
                132: {
                    container: "ts",
                    resolution: "240p",
                    encoding: "H.264",
                    profile: "baseline",
                    bitrate: "0.15-0.2",
                    audioEncoding: "aac",
                    audioBitrate: 48
                },
                151: {
                    container: "ts",
                    resolution: "720p",
                    encoding: "H.264",
                    profile: "baseline",
                    bitrate: "0.05",
                    audioEncoding: "aac",
                    audioBitrate: 24
                }
            }
        }, function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), e.webpackPolyfill = 1), e
            }
        }, function(e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function(e) {
                    return "[object Array]" == n.call(e)
                }
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return this instanceof i ? void r.call(this, e) : new i(e)
            }
            e.exports = i;
            var r = n(14),
                o = n(5);
            o.inherits = n(3), o.inherits(i, r), i.prototype._transform = function(e, t, n) {
                n(null, e)
            }
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                function i(e, t, n) {
                    return "function" == typeof e.prependListener ? e.prependListener(t, n) : void(e._events && e._events[t] ? O(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n))
                }

                function r(e, t) {
                    _ = _ || n(1), e = e || {}, this.objectMode = !!e.objectMode, t instanceof _ && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                    var i = e.highWaterMark,
                        r = this.objectMode ? 16 : 16384;
                    this.highWaterMark = i || 0 === i ? i : r, this.highWaterMark = ~~this.highWaterMark, this.buffer = new V, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (q || (q = n(16).StringDecoder), this.decoder = new q(e.encoding), this.encoding = e.encoding)
                }

                function o(e) {
                    return _ = _ || n(1), this instanceof o ? (this._readableState = new r(e, this), this.readable = !0, e && "function" == typeof e.read && (this._read = e.read), void L.call(this)) : new o(e)
                }

                function a(e, t, n, i, r) {
                    var o = u(t, n);
                    if (o) e.emit("error", o);
                    else if (null === n) t.reading = !1, d(e, t);
                    else if (t.objectMode || n && n.length > 0)
                        if (t.ended && !r) {
                            var a = new Error("stream.push() after EOF");
                            e.emit("error", a)
                        } else if (t.endEmitted && r) {
                            var l = new Error("stream.unshift() after end event");
                            e.emit("error", l)
                        } else {
                            var c;
                            !t.decoder || r || i || (n = t.decoder.write(n), c = !t.objectMode && 0 === n.length), r || (t.reading = !1), c || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && h(e))), f(e, t)
                        } else r || (t.reading = !1);
                    return s(t)
                }

                function s(e) {
                    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                }

                function l(e) {
                    return e >= U ? e = U : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }

                function c(e, t) {
                    return 0 >= e || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = l(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                }

                function u(e, t) {
                    var n = null;
                    return D.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
                }

                function d(e, t) {
                    if (!t.ended) {
                        if (t.decoder) {
                            var n = t.decoder.end();
                            n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                        }
                        t.ended = !0, h(e)
                    }
                }

                function h(e) {
                    var t = e._readableState;
                    t.needReadable = !1, t.emittedReadable || (M("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? k(p, e) : p(e))
                }

                function p(e) {
                    M("emit readable"), e.emit("readable"), w(e)
                }

                function f(e, t) {
                    t.readingMore || (t.readingMore = !0, k(m, e, t))
                }

                function m(e, t) {
                    for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (M("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
                    t.readingMore = !1
                }

                function g(e) {
                    return function() {
                        var t = e._readableState;
                        M("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && $(e, "data") && (t.flowing = !0, w(e))
                    }
                }

                function v(e) {
                    M("readable nexttick read 0"), e.read(0)
                }

                function y(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, k(b, e, t))
                }

                function b(e, t) {
                    t.reading || (M("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), w(e), t.flowing && !t.reading && e.read(0)
                }

                function w(e) {
                    var t = e._readableState;
                    for (M("flow", t.flowing); t.flowing && null !== e.read(););
                }

                function T(e, t) {
                    if (0 === t.length) return null;
                    var n;
                    return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = E(e, t.buffer, t.decoder), n
                }

                function E(e, t, n) {
                    var i;
                    return e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : i = e === t.head.data.length ? t.shift() : n ? x(e, t) : I(e, t), i
                }

                function x(e, t) {
                    var n = t.head,
                        i = 1,
                        r = n.data;
                    for (e -= r.length; n = n.next;) {
                        var o = n.data,
                            a = e > o.length ? o.length : e;
                        if (r += a === o.length ? o : o.slice(0, e), e -= a, 0 === e) {
                            a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                            break
                        }++i
                    }
                    return t.length -= i, r
                }

                function I(e, t) {
                    var n = B.allocUnsafe(e),
                        i = t.head,
                        r = 1;
                    for (i.data.copy(n), e -= i.data.length; i = i.next;) {
                        var o = i.data,
                            a = e > o.length ? o.length : e;
                        if (o.copy(n, n.length - e, 0, a), e -= a, 0 === e) {
                            a === o.length ? (++r, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = o.slice(a));
                            break
                        }++r
                    }
                    return t.length -= r, n
                }

                function S(e) {
                    var t = e._readableState;
                    if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                    t.endEmitted || (t.ended = !0, k(N, t, e))
                }

                function N(e, t) {
                    e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
                }

                function C(e, t) {
                    for (var n = 0, i = e.length; i > n; n++) t(e[n], n)
                }

                function A(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                }
                e.exports = o;
                var _, k = n(12),
                    O = n(21);
                o.ReadableState = r;
                var L, $ = (n(7).EventEmitter, function(e, t) {
                    return e.listeners(t).length
                });
                ! function() {
                    try {
                        L = n(6)
                    } catch (e) {} finally {
                        L || (L = n(7).EventEmitter)
                    }
                }();
                var D = n(0).Buffer,
                    B = n(11),
                    P = n(5);
                P.inherits = n(3);
                var R = n(53),
                    M = void 0;
                M = R && R.debuglog ? R.debuglog("stream") : function() {};
                var q, V = n(45);
                P.inherits(o, L), o.prototype.push = function(e, t) {
                    var n = this._readableState;
                    return n.objectMode || "string" != typeof e || (t = t || n.defaultEncoding, t !== n.encoding && (e = B.from(e, t), t = "")), a(this, n, e, t, !1)
                }, o.prototype.unshift = function(e) {
                    var t = this._readableState;
                    return a(this, t, e, "", !0)
                }, o.prototype.isPaused = function() {
                    return this._readableState.flowing === !1
                }, o.prototype.setEncoding = function(e) {
                    return q || (q = n(16).StringDecoder), this._readableState.decoder = new q(e), this._readableState.encoding = e, this
                };
                var U = 8388608;
                o.prototype.read = function(e) {
                    M("read", e), e = parseInt(e, 10);
                    var t = this._readableState,
                        n = e;
                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return M("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? S(this) : h(this), null;
                    if (e = c(e, t), 0 === e && t.ended) return 0 === t.length && S(this), null;
                    var i = t.needReadable;
                    M("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && (i = !0, M("length less than watermark", i)), t.ended || t.reading ? (i = !1, M("reading or ended", i)) : i && (M("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = c(n, t)));
                    var r;
                    return r = e > 0 ? T(e, t) : null, null === r ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && S(this)), null !== r && this.emit("data", r), r
                }, o.prototype._read = function(e) {
                    this.emit("error", new Error("_read() is not implemented"))
                }, o.prototype.pipe = function(e, n) {
                    function r(e) {
                        M("onunpipe"), e === h && a()
                    }

                    function o() {
                        M("onend"), e.end()
                    }

                    function a() {
                        M("cleanup"), e.removeListener("close", c), e.removeListener("finish", u), e.removeListener("drain", v), e.removeListener("error", l), e.removeListener("unpipe", r), h.removeListener("end", o), h.removeListener("end", a), h.removeListener("data", s), y = !0, !p.awaitDrain || e._writableState && !e._writableState.needDrain || v()
                    }

                    function s(t) {
                        M("ondata"), b = !1;
                        var n = e.write(t);
                        !1 !== n || b || ((1 === p.pipesCount && p.pipes === e || p.pipesCount > 1 && -1 !== A(p.pipes, e)) && !y && (M("false write response, pause", h._readableState.awaitDrain), h._readableState.awaitDrain++, b = !0), h.pause())
                    }

                    function l(t) {
                        M("onerror", t), d(), e.removeListener("error", l), 0 === $(e, "error") && e.emit("error", t)
                    }

                    function c() {
                        e.removeListener("finish", u), d()
                    }

                    function u() {
                        M("onfinish"), e.removeListener("close", c), d()
                    }

                    function d() {
                        M("unpipe"), h.unpipe(e)
                    }
                    var h = this,
                        p = this._readableState;
                    switch (p.pipesCount) {
                        case 0:
                            p.pipes = e;
                            break;
                        case 1:
                            p.pipes = [p.pipes, e];
                            break;
                        default:
                            p.pipes.push(e)
                    }
                    p.pipesCount += 1, M("pipe count=%d opts=%j", p.pipesCount, n);
                    var f = (!n || n.end !== !1) && e !== t.stdout && e !== t.stderr,
                        m = f ? o : a;
                    p.endEmitted ? k(m) : h.once("end", m), e.on("unpipe", r);
                    var v = g(h);
                    e.on("drain", v);
                    var y = !1,
                        b = !1;
                    return h.on("data", s), i(e, "error", l), e.once("close", c), e.once("finish", u), e.emit("pipe", h), p.flowing || (M("pipe resume"), h.resume()), e
                }, o.prototype.unpipe = function(e) {
                    var t = this._readableState;
                    if (0 === t.pipesCount) return this;
                    if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
                    if (!e) {
                        var n = t.pipes,
                            i = t.pipesCount;
                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                        for (var r = 0; i > r; r++) n[r].emit("unpipe", this);
                        return this
                    }
                    var o = A(t.pipes, e);
                    return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
                }, o.prototype.on = function(e, t) {
                    var n = L.prototype.on.call(this, e, t);
                    if ("data" === e) this._readableState.flowing !== !1 && this.resume();
                    else if ("readable" === e) {
                        var i = this._readableState;
                        i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && h(this, i) : k(v, this))
                    }
                    return n
                }, o.prototype.addListener = o.prototype.on, o.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (M("resume"), e.flowing = !0, y(this, e)), this
                }, o.prototype.pause = function() {
                    return M("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (M("pause"), this._readableState.flowing = !1, this.emit("pause")), this
                }, o.prototype.wrap = function(e) {
                    var t = this._readableState,
                        n = !1,
                        i = this;
                    e.on("end", function() {
                        if (M("wrapped end"), t.decoder && !t.ended) {
                            var e = t.decoder.end();
                            e && e.length && i.push(e)
                        }
                        i.push(null)
                    }), e.on("data", function(r) {
                        if (M("wrapped data"), t.decoder && (r = t.decoder.write(r)), (!t.objectMode || null !== r && void 0 !== r) && (t.objectMode || r && r.length)) {
                            var o = i.push(r);
                            o || (n = !0, e.pause())
                        }
                    });
                    for (var r in e) void 0 === this[r] && "function" == typeof e[r] && (this[r] = function(t) {
                        return function() {
                            return e[t].apply(e, arguments)
                        }
                    }(r));
                    var o = ["error", "close", "destroy", "pause", "resume"];
                    return C(o, function(t) {
                        e.on(t, i.emit.bind(i, t))
                    }), i._read = function(t) {
                        M("wrapped _read", t), n && (n = !1, e.resume())
                    }, i
                }, o._fromList = T
            }).call(t, n(4))
        }, function(e, i, r) {
            function o(e, t) {
                this._id = e, this._clearFn = t
            }
            var a = Function.prototype.apply;
            i.setTimeout = function() {
                return new o(a.call(setTimeout, window, arguments), clearTimeout)
            }, i.setInterval = function() {
                return new o(a.call(setInterval, window, arguments), clearInterval)
            }, i.clearTimeout = i.clearInterval = function(e) {
                e && e.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, i.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, i.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, i._unrefActive = i.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, r(50), i.setImmediate = t, i.clearImmediate = n
        }, function(e, t, n) {
            var i = n(28);
            e.exports = Function.prototype.bind || i
        }, function(e, t, n) {
            (function(t) {
                function i() {
                    var e = new a;
                    return e.destroy = function() {
                        e._isDestroyed = !0
                    }, e
                }

                function r(e, n, i) {
                    i = i || {};
                    var r = c.chooseFormat(n.formats, i);
                    if (r instanceof Error) return void t(function() {
                        e.emit("error", r)
                    });
                    e.emit("info", n, r);
                    var a = r.url;
                    i.range && (a += "&range=" + i.range), o(e, a, i, 3)
                }

                function o(e, t, n, i) {
                    if (!e._isDestroyed) {
                        if (0 === i) return void e.emit("error", new Error("Too many redirects"));
                        var r, a = n.request || s,
                            l = a(t, n.requestOptions);
                        e.destroy = function() {
                            l.abort(), r && (r.destroy(), r.unpipe()), e.emit("abort")
                        }, l.on("error", function(t) {
                            e.emit("error", t)
                        }), l.on("response", function(t) {
                            if (r = t, !e._isDestroyed) {
                                if (200 !== t.statusCode && 206 !== t.statusCode) return h.has(t.statusCode) ? void o(e, t.headers.location, n, i - 1) : (e.emit("response", t), void e.emit("error", new Error("Status code " + t.statusCode)));
                                t.pipe(e), e.emit("response", t)
                            }
                        }), e.emit("request", l)
                    }
                }
                var a = n(6).PassThrough,
                    s = n(10),
                    l = n(33),
                    c = n(9),
                    u = n(18),
                    d = e.exports = function(e, t) {
                        var n = i();
                        return l(e, t, function(e, i) {
                            return e ? void n.emit("error", e) : void r(n, i, t)
                        }), n
                    };
                d.getInfo = l, d.chooseFormat = c.chooseFormat, d.filterFormats = c.filterFormats, d.cache = u;
                var h = new Set([301, 302, 303, 307]);
                d.downloadFromInfo = function(e, n) {
                    var o = i();
                    return t(function() {
                        r(o, e, n)
                    }), o
                }
            }).call(t, n(24).setImmediate)
        }, function(e, t, n) {
            (function(e) {
                var n, i;
                ! function(r) {
                    function o(e, t) {
                        if (e == t) return !0;
                        if (!e || !t) return !1;
                        if (!(e instanceof Set && t instanceof Set)) throw new Error("Set comparision attempted with a non-set");
                        if (e.size !== t.size) return !1;
                        for (var n in e)
                            if (!t.has(n)) return !1;
                        return !0
                    }
                    "undefined" != typeof e && e && e.exports ? e.exports = o : (n = [], i = function() {
                        return o
                    }.apply(t, n), !(void 0 !== i && (e.exports = i)))
                }(this)
            }).call(t, n(20)(e))
        }, function(e, t) {
            var n = "Function.prototype.bind called on incompatible ",
                i = Array.prototype.slice,
                r = Object.prototype.toString,
                o = "[object Function]";
            e.exports = function(e) {
                var t = this;
                if ("function" != typeof t || r.call(t) !== o) throw new TypeError(n + t);
                for (var a, s = i.call(arguments, 1), l = function() {
                    if (this instanceof a) {
                        var n = t.apply(this, s.concat(i.call(arguments)));
                        return Object(n) === n ? n : this
                    }
                    return t.apply(e, s.concat(i.call(arguments)))
                }, c = Math.max(0, t.length - s.length), u = [], d = 0; c > d; d++) u.push("$" + d);
                if (a = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(l), t.prototype) {
                    var h = function() {};
                    h.prototype = t.prototype, a.prototype = new h, h.prototype = null
                }
                return a
            }
        }, function(e, t, n) {
            e.exports = {
                XmlEntities: n(31),
                Html4Entities: n(30),
                Html5Entities: n(17),
                AllHtmlEntities: n(17)
            }
        }, function(e, t) {
            function n() {}
            for (var i = ["apos", "nbsp", "iexcl", "cent", "pound", "curren", "yen", "brvbar", "sect", "uml", "copy", "ordf", "laquo", "not", "shy", "reg", "macr", "deg", "plusmn", "sup2", "sup3", "acute", "micro", "para", "middot", "cedil", "sup1", "ordm", "raquo", "frac14", "frac12", "frac34", "iquest", "Agrave", "Aacute", "Acirc", "Atilde", "Auml", "Aring", "Aelig", "Ccedil", "Egrave", "Eacute", "Ecirc", "Euml", "Igrave", "Iacute", "Icirc", "Iuml", "ETH", "Ntilde", "Ograve", "Oacute", "Ocirc", "Otilde", "Ouml", "times", "Oslash", "Ugrave", "Uacute", "Ucirc", "Uuml", "Yacute", "THORN", "szlig", "agrave", "aacute", "acirc", "atilde", "auml", "aring", "aelig", "ccedil", "egrave", "eacute", "ecirc", "euml", "igrave", "iacute", "icirc", "iuml", "eth", "ntilde", "ograve", "oacute", "ocirc", "otilde", "ouml", "divide", "Oslash", "ugrave", "uacute", "ucirc", "uuml", "yacute", "thorn", "yuml", "quot", "amp", "lt", "gt", "oelig", "oelig", "scaron", "scaron", "yuml", "circ", "tilde", "ensp", "emsp", "thinsp", "zwnj", "zwj", "lrm", "rlm", "ndash", "mdash", "lsquo", "rsquo", "sbquo", "ldquo", "rdquo", "bdquo", "dagger", "dagger", "permil", "lsaquo", "rsaquo", "euro", "fnof", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigmaf", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "thetasym", "upsih", "piv", "bull", "hellip", "prime", "prime", "oline", "frasl", "weierp", "image", "real", "trade", "alefsym", "larr", "uarr", "rarr", "darr", "harr", "crarr", "larr", "uarr", "rarr", "darr", "harr", "forall", "part", "exist", "empty", "nabla", "isin", "notin", "ni", "prod", "sum", "minus", "lowast", "radic", "prop", "infin", "ang", "and", "or", "cap", "cup", "int", "there4", "sim", "cong", "asymp", "ne", "equiv", "le", "ge", "sub", "sup", "nsub", "sube", "supe", "oplus", "otimes", "perp", "sdot", "lceil", "rceil", "lfloor", "rfloor", "lang", "rang", "loz", "spades", "clubs", "hearts", "diams"], r = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830], o = {}, a = {}, s = 0, l = i.length; l > s;) {
                var c = i[s],
                    u = r[s];
                o[c] = String.fromCharCode(u), a[u] = c, s++
            }
            n.prototype.decode = function(e) {
                return 0 === e.length ? "" : e.replace(/&(#?[\w\d]+);?/g, function(e, t) {
                    var n;
                    if ("#" === t.charAt(0)) {
                        var i = "x" === t.charAt(1).toLowerCase() ? parseInt(t.substr(2), 16) : parseInt(t.substr(1));
                        isNaN(i) || -32768 > i || i > 65535 || (n = String.fromCharCode(i))
                    } else n = o[t];
                    return n || e
                })
            }, n.decode = function(e) {
                return (new n).decode(e)
            }, n.prototype.encode = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = a[e.charCodeAt(i)];
                    n += r ? "&" + r + ";" : e.charAt(i), i++
                }
                return n
            }, n.encode = function(e) {
                return (new n).encode(e)
            }, n.prototype.encodeNonUTF = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = e.charCodeAt(i),
                        o = a[r];
                    n += o ? "&" + o + ";" : 32 > r || r > 126 ? "&#" + r + ";" : e.charAt(i), i++
                }
                return n
            }, n.encodeNonUTF = function(e) {
                return (new n).encodeNonUTF(e)
            }, n.prototype.encodeNonASCII = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = e.charCodeAt(i);
                    255 >= r ? n += e[i++] : (n += "&#" + r + ";", i++)
                }
                return n
            }, n.encodeNonASCII = function(e) {
                return (new n).encodeNonASCII(e)
            }, e.exports = n
        }, function(e, t) {
            function n() {}
            var i = {
                    "&lt": "<",
                    "&gt": ">",
                    "&quot": '"',
                    "&apos": "'",
                    "&amp": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&apos;": "'",
                    "&amp;": "&"
                },
                r = {
                    60: "lt",
                    62: "gt",
                    34: "quot",
                    39: "apos",
                    38: "amp"
                },
                o = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&apos;",
                    "&": "&amp;"
                };
            n.prototype.encode = function(e) {
                return 0 === e.length ? "" : e.replace(/<|>|"|'|&/g, function(e) {
                    return o[e]
                })
            }, n.encode = function(e) {
                return (new n).encode(e)
            }, n.prototype.decode = function(e) {
                return 0 === e.length ? "" : e.replace(/&#?[0-9a-zA-Z]+;?/g, function(e) {
                    if ("#" === e.charAt(1)) {
                        var t = "x" === e.charAt(2).toLowerCase() ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                        return isNaN(t) || -32768 > t || t > 65535 ? "" : String.fromCharCode(t)
                    }
                    return i[e] || e
                })
            }, n.decode = function(e) {
                return (new n).decode(e)
            }, n.prototype.encodeNonUTF = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var o = e.charCodeAt(i),
                        a = r[o];
                    a ? (n += "&" + a + ";", i++) : (n += 32 > o || o > 126 ? "&#" + o + ";" : e.charAt(i), i++)
                }
                return n
            }, n.encodeNonUTF = function(e) {
                return (new n).encodeNonUTF(e)
            }, n.prototype.encodeNonASCII = function(e) {
                var t = e.length;
                if (0 === t) return "";
                for (var n = "", i = 0; t > i;) {
                    var r = e.charCodeAt(i);
                    255 >= r ? n += e[i++] : (n += "&#" + r + ";", i++)
                }
                return n
            }, n.encodeNonASCII = function(e) {
                return (new n).encodeNonASCII(e)
            }, e.exports = n
        }, function(e, t, n) {
            (function(e) {
                ! function(t) {
                    function i(e, n) {
                        if (!(this instanceof i)) return new i(e, n);
                        var r = this;
                        o(r), r.q = r.c = "", r.bufferCheckPosition = t.MAX_BUFFER_LENGTH, r.opt = n || {}, r.opt.lowercase = r.opt.lowercase || r.opt.lowercasetags, r.looseCase = r.opt.lowercase ? "toLowerCase" : "toUpperCase", r.tags = [], r.closed = r.closedRoot = r.sawRoot = !1, r.tag = r.error = null, r.strict = !!e, r.noscript = !(!e && !r.opt.noscript), r.state = Y.BEGIN, r.strictEntities = r.opt.strictEntities, r.ENTITIES = r.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), r.attribList = [], r.opt.xmlns && (r.ns = Object.create(U)), r.trackPosition = r.opt.position !== !1, r.trackPosition && (r.position = r.line = r.column = 0), f(r, "onready")
                    }

                    function r(e) {
                        for (var n = Math.max(t.MAX_BUFFER_LENGTH, 10), i = 0, r = 0, o = k.length; o > r; r++) {
                            var a = e[k[r]].length;
                            if (a > n) switch (k[r]) {
                                case "textNode":
                                    g(e);
                                    break;
                                case "cdata":
                                    m(e, "oncdata", e.cdata), e.cdata = "";
                                    break;
                                case "script":
                                    m(e, "onscript", e.script), e.script = "";
                                    break;
                                default:
                                    y(e, "Max buffer length exceeded: " + k[r])
                            }
                            i = Math.max(i, a)
                        }
                        var s = t.MAX_BUFFER_LENGTH - i;
                        e.bufferCheckPosition = s + e.position
                    }

                    function o(e) {
                        for (var t = 0, n = k.length; n > t; t++) e[k[t]] = ""
                    }

                    function a(e) {
                        g(e), "" !== e.cdata && (m(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (m(e, "onscript", e.script), e.script = "")
                    }

                    function s(e, t) {
                        return new l(e, t)
                    }

                    function l(e, t) {
                        if (!(this instanceof l)) return new l(e, t);
                        O.apply(this), this._parser = new i(e, t), this.writable = !0, this.readable = !0;
                        var n = this;
                        this._parser.onend = function() {
                            n.emit("end")
                        }, this._parser.onerror = function(e) {
                            n.emit("error", e), n._parser.error = null
                        }, this._decoder = null, $.forEach(function(e) {
                            Object.defineProperty(n, "on" + e, {
                                get: function() {
                                    return n._parser["on" + e]
                                },
                                set: function(t) {
                                    return t ? void n.on(e, t) : (n.removeAllListeners(e), n._parser["on" + e] = t, t)
                                },
                                enumerable: !0,
                                configurable: !1
                            })
                        })
                    }

                    function c(e) {
                        return e.split("").reduce(function(e, t) {
                            return e[t] = !0, e
                        }, {})
                    }

                    function u(e, t) {
                        return e.test(t)
                    }

                    function d(e, t) {
                        return e[t]
                    }

                    function h(e, t) {
                        return !u(e, t)
                    }

                    function p(e, t) {
                        return !d(e, t)
                    }

                    function f(e, t, n) {
                        e[t] && e[t](n)
                    }

                    function m(e, t, n) {
                        e.textNode && g(e), f(e, t, n)
                    }

                    function g(e) {
                        e.textNode = v(e.opt, e.textNode), e.textNode && f(e, "ontext", e.textNode), e.textNode = ""
                    }

                    function v(e, t) {
                        return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
                    }

                    function y(e, t) {
                        return g(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, f(e, "onerror", t), e
                    }

                    function b(e) {
                        return e.sawRoot && !e.closedRoot && w(e, "Unclosed root tag"), e.state !== Y.BEGIN && e.state !== Y.BEGIN_WHITESPACE && e.state !== Y.TEXT && y(e, "Unexpected end"), g(e), e.c = "", e.closed = !0, f(e, "onend"), i.call(e, e.strict, e.opt), e
                    }

                    function w(e, t) {
                        if ("object" != typeof e || !(e instanceof i)) throw new Error("bad call to strictFail");
                        e.strict && y(e, t)
                    }

                    function T(e) {
                        e.strict || (e.tagName = e.tagName[e.looseCase]());
                        var t = e.tags[e.tags.length - 1] || e,
                            n = e.tag = {
                                name: e.tagName,
                                attributes: {}
                            };
                        e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, m(e, "onopentagstart", n)
                    }

                    function E(e, t) {
                        var n = e.indexOf(":"),
                            i = 0 > n ? ["", e] : e.split(":"),
                            r = i[0],
                            o = i[1];
                        return t && "xmlns" === e && (r = "xmlns", o = ""), {
                            prefix: r,
                            local: o
                        }
                    }

                    function x(e) {
                        if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) return void(e.attribName = e.attribValue = "");
                        if (e.opt.xmlns) {
                            var t = E(e.attribName, !0),
                                n = t.prefix,
                                i = t.local;
                            if ("xmlns" === n)
                                if ("xml" === i && e.attribValue !== q) w(e, "xml: prefix must be bound to " + q + "\nActual: " + e.attribValue);
                                else if ("xmlns" === i && e.attribValue !== V) w(e, "xmlns: prefix must be bound to " + V + "\nActual: " + e.attribValue);
                                else {
                                    var r = e.tag,
                                        o = e.tags[e.tags.length - 1] || e;
                                    r.ns === o.ns && (r.ns = Object.create(o.ns)), r.ns[i] = e.attribValue
                                }
                            e.attribList.push([e.attribName, e.attribValue])
                        } else e.tag.attributes[e.attribName] = e.attribValue, m(e, "onattribute", {
                            name: e.attribName,
                            value: e.attribValue
                        });
                        e.attribName = e.attribValue = ""
                    }

                    function I(e, t) {
                        if (e.opt.xmlns) {
                            var n = e.tag,
                                i = E(e.tagName);
                            n.prefix = i.prefix, n.local = i.local, n.uri = n.ns[i.prefix] || "", n.prefix && !n.uri && (w(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)),
                                n.uri = i.prefix);
                            var r = e.tags[e.tags.length - 1] || e;
                            n.ns && r.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
                                m(e, "onopennamespace", {
                                    prefix: t,
                                    uri: n.ns[t]
                                })
                            });
                            for (var o = 0, a = e.attribList.length; a > o; o++) {
                                var s = e.attribList[o],
                                    l = s[0],
                                    c = s[1],
                                    u = E(l, !0),
                                    d = u.prefix,
                                    h = u.local,
                                    p = "" === d ? "" : n.ns[d] || "",
                                    f = {
                                        name: l,
                                        value: c,
                                        prefix: d,
                                        local: h,
                                        uri: p
                                    };
                                d && "xmlns" !== d && !p && (w(e, "Unbound namespace prefix: " + JSON.stringify(d)), f.uri = d), e.tag.attributes[l] = f, m(e, "onattribute", f)
                            }
                            e.attribList.length = 0
                        }
                        e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), m(e, "onopentag", e.tag), t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = Y.TEXT : e.state = Y.SCRIPT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0
                    }

                    function S(e) {
                        if (!e.tagName) return w(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = Y.TEXT);
                        if (e.script) {
                            if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = Y.SCRIPT);
                            m(e, "onscript", e.script), e.script = ""
                        }
                        var t = e.tags.length,
                            n = e.tagName;
                        e.strict || (n = n[e.looseCase]());
                        for (var i = n; t--;) {
                            var r = e.tags[t];
                            if (r.name === i) break;
                            w(e, "Unexpected close tag")
                        }
                        if (0 > t) return w(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = Y.TEXT);
                        e.tagName = n;
                        for (var o = e.tags.length; o-- > t;) {
                            var a = e.tag = e.tags.pop();
                            e.tagName = e.tag.name, m(e, "onclosetag", e.tagName);
                            var s = {};
                            for (var l in a.ns) s[l] = a.ns[l];
                            var c = e.tags[e.tags.length - 1] || e;
                            e.opt.xmlns && a.ns !== c.ns && Object.keys(a.ns).forEach(function(t) {
                                var n = a.ns[t];
                                m(e, "onclosenamespace", {
                                    prefix: t,
                                    uri: n
                                })
                            })
                        }
                        0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = Y.TEXT
                    }

                    function N(e) {
                        var t, n = e.entity,
                            i = n.toLowerCase(),
                            r = "";
                        return e.ENTITIES[n] ? e.ENTITIES[n] : e.ENTITIES[i] ? e.ENTITIES[i] : (n = i, "#" === n.charAt(0) && ("x" === n.charAt(1) ? (n = n.slice(2), t = parseInt(n, 16), r = t.toString(16)) : (n = n.slice(1), t = parseInt(n, 10), r = t.toString(10))), n = n.replace(/^0+/, ""), r.toLowerCase() !== n ? (w(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t))
                    }

                    function C(e, t) {
                        "<" === t ? (e.state = Y.OPEN_WAKA, e.startTagPosition = e.position) : p(D, t) && (w(e, "Non-whitespace before first tag."), e.textNode = t, e.state = Y.TEXT)
                    }

                    function A(e, t) {
                        var n = "";
                        return t < e.length && (n = e.charAt(t)), n
                    }

                    function _(e) {
                        var t = this;
                        if (this.error) throw this.error;
                        if (t.closed) return y(t, "Cannot write after close. Assign an onready handler.");
                        if (null === e) return b(t);
                        "object" == typeof e && (e = e.toString());
                        for (var n = 0, i = ""; i = A(e, n++), t.c = i, i;) switch (t.trackPosition && (t.position++, "\n" === i ? (t.line++, t.column = 0) : t.column++), t.state) {
                            case Y.BEGIN:
                                if (t.state = Y.BEGIN_WHITESPACE, "\ufeff" === i) continue;
                                C(t, i);
                                continue;
                            case Y.BEGIN_WHITESPACE:
                                C(t, i);
                                continue;
                            case Y.TEXT:
                                if (t.sawRoot && !t.closedRoot) {
                                    for (var o = n - 1; i && "<" !== i && "&" !== i;) i = A(e, n++), i && t.trackPosition && (t.position++, "\n" === i ? (t.line++, t.column = 0) : t.column++);
                                    t.textNode += e.substring(o, n - 1)
                                }
                                "<" !== i || t.sawRoot && t.closedRoot && !t.strict ? (!p(D, i) || t.sawRoot && !t.closedRoot || w(t, "Text data outside of root node."), "&" === i ? t.state = Y.TEXT_ENTITY : t.textNode += i) : (t.state = Y.OPEN_WAKA, t.startTagPosition = t.position);
                                continue;
                            case Y.SCRIPT:
                                "<" === i ? t.state = Y.SCRIPT_ENDING : t.script += i;
                                continue;
                            case Y.SCRIPT_ENDING:
                                "/" === i ? t.state = Y.CLOSE_TAG : (t.script += "<" + i, t.state = Y.SCRIPT);
                                continue;
                            case Y.OPEN_WAKA:
                                if ("!" === i) t.state = Y.SGML_DECL, t.sgmlDecl = "";
                                else if (d(D, i));
                                else if (u(H, i)) t.state = Y.OPEN_TAG, t.tagName = i;
                                else if ("/" === i) t.state = Y.CLOSE_TAG, t.tagName = "";
                                else if ("?" === i) t.state = Y.PROC_INST, t.procInstName = t.procInstBody = "";
                                else {
                                    if (w(t, "Unencoded <"), t.startTagPosition + 1 < t.position) {
                                        var a = t.position - t.startTagPosition;
                                        i = new Array(a).join(" ") + i
                                    }
                                    t.textNode += "<" + i, t.state = Y.TEXT
                                }
                                continue;
                            case Y.SGML_DECL:
                                (t.sgmlDecl + i).toUpperCase() === R ? (m(t, "onopencdata"), t.state = Y.CDATA, t.sgmlDecl = "", t.cdata = "") : t.sgmlDecl + i === "--" ? (t.state = Y.COMMENT, t.comment = "", t.sgmlDecl = "") : (t.sgmlDecl + i).toUpperCase() === M ? (t.state = Y.DOCTYPE, (t.doctype || t.sawRoot) && w(t, "Inappropriately located doctype declaration"), t.doctype = "", t.sgmlDecl = "") : ">" === i ? (m(t, "onsgmldeclaration", t.sgmlDecl), t.sgmlDecl = "", t.state = Y.TEXT) : d(B, i) ? (t.state = Y.SGML_DECL_QUOTED, t.sgmlDecl += i) : t.sgmlDecl += i;
                                continue;
                            case Y.SGML_DECL_QUOTED:
                                i === t.q && (t.state = Y.SGML_DECL, t.q = ""), t.sgmlDecl += i;
                                continue;
                            case Y.DOCTYPE:
                                ">" === i ? (t.state = Y.TEXT, m(t, "ondoctype", t.doctype), t.doctype = !0) : (t.doctype += i, "[" === i ? t.state = Y.DOCTYPE_DTD : d(B, i) && (t.state = Y.DOCTYPE_QUOTED, t.q = i));
                                continue;
                            case Y.DOCTYPE_QUOTED:
                                t.doctype += i, i === t.q && (t.q = "", t.state = Y.DOCTYPE);
                                continue;
                            case Y.DOCTYPE_DTD:
                                t.doctype += i, "]" === i ? t.state = Y.DOCTYPE : d(B, i) && (t.state = Y.DOCTYPE_DTD_QUOTED, t.q = i);
                                continue;
                            case Y.DOCTYPE_DTD_QUOTED:
                                t.doctype += i, i === t.q && (t.state = Y.DOCTYPE_DTD, t.q = "");
                                continue;
                            case Y.COMMENT:
                                "-" === i ? t.state = Y.COMMENT_ENDING : t.comment += i;
                                continue;
                            case Y.COMMENT_ENDING:
                                "-" === i ? (t.state = Y.COMMENT_ENDED, t.comment = v(t.opt, t.comment), t.comment && m(t, "oncomment", t.comment), t.comment = "") : (t.comment += "-" + i, t.state = Y.COMMENT);
                                continue;
                            case Y.COMMENT_ENDED:
                                ">" !== i ? (w(t, "Malformed comment"), t.comment += "--" + i, t.state = Y.COMMENT) : t.state = Y.TEXT;
                                continue;
                            case Y.CDATA:
                                "]" === i ? t.state = Y.CDATA_ENDING : t.cdata += i;
                                continue;
                            case Y.CDATA_ENDING:
                                "]" === i ? t.state = Y.CDATA_ENDING_2 : (t.cdata += "]" + i, t.state = Y.CDATA);
                                continue;
                            case Y.CDATA_ENDING_2:
                                ">" === i ? (t.cdata && m(t, "oncdata", t.cdata), m(t, "onclosecdata"), t.cdata = "", t.state = Y.TEXT) : "]" === i ? t.cdata += "]" : (t.cdata += "]]" + i, t.state = Y.CDATA);
                                continue;
                            case Y.PROC_INST:
                                "?" === i ? t.state = Y.PROC_INST_ENDING : d(D, i) ? t.state = Y.PROC_INST_BODY : t.procInstName += i;
                                continue;
                            case Y.PROC_INST_BODY:
                                if (!t.procInstBody && d(D, i)) continue;
                                "?" === i ? t.state = Y.PROC_INST_ENDING : t.procInstBody += i;
                                continue;
                            case Y.PROC_INST_ENDING:
                                ">" === i ? (m(t, "onprocessinginstruction", {
                                    name: t.procInstName,
                                    body: t.procInstBody
                                }), t.procInstName = t.procInstBody = "", t.state = Y.TEXT) : (t.procInstBody += "?" + i, t.state = Y.PROC_INST_BODY);
                                continue;
                            case Y.OPEN_TAG:
                                u(j, i) ? t.tagName += i : (T(t), ">" === i ? I(t) : "/" === i ? t.state = Y.OPEN_TAG_SLASH : (p(D, i) && w(t, "Invalid character in tag name"), t.state = Y.ATTRIB));
                                continue;
                            case Y.OPEN_TAG_SLASH:
                                ">" === i ? (I(t, !0), S(t)) : (w(t, "Forward-slash in opening tag not followed by >"), t.state = Y.ATTRIB);
                                continue;
                            case Y.ATTRIB:
                                if (d(D, i)) continue;
                                ">" === i ? I(t) : "/" === i ? t.state = Y.OPEN_TAG_SLASH : u(H, i) ? (t.attribName = i, t.attribValue = "", t.state = Y.ATTRIB_NAME) : w(t, "Invalid attribute name");
                                continue;
                            case Y.ATTRIB_NAME:
                                "=" === i ? t.state = Y.ATTRIB_VALUE : ">" === i ? (w(t, "Attribute without value"), t.attribValue = t.attribName, x(t), I(t)) : d(D, i) ? t.state = Y.ATTRIB_NAME_SAW_WHITE : u(j, i) ? t.attribName += i : w(t, "Invalid attribute name");
                                continue;
                            case Y.ATTRIB_NAME_SAW_WHITE:
                                if ("=" === i) t.state = Y.ATTRIB_VALUE;
                                else {
                                    if (d(D, i)) continue;
                                    w(t, "Attribute without value"), t.tag.attributes[t.attribName] = "", t.attribValue = "", m(t, "onattribute", {
                                        name: t.attribName,
                                        value: ""
                                    }), t.attribName = "", ">" === i ? I(t) : u(H, i) ? (t.attribName = i, t.state = Y.ATTRIB_NAME) : (w(t, "Invalid attribute name"), t.state = Y.ATTRIB)
                                }
                                continue;
                            case Y.ATTRIB_VALUE:
                                if (d(D, i)) continue;
                                d(B, i) ? (t.q = i, t.state = Y.ATTRIB_VALUE_QUOTED) : (w(t, "Unquoted attribute value"), t.state = Y.ATTRIB_VALUE_UNQUOTED, t.attribValue = i);
                                continue;
                            case Y.ATTRIB_VALUE_QUOTED:
                                if (i !== t.q) {
                                    "&" === i ? t.state = Y.ATTRIB_VALUE_ENTITY_Q : t.attribValue += i;
                                    continue
                                }
                                x(t), t.q = "", t.state = Y.ATTRIB_VALUE_CLOSED;
                                continue;
                            case Y.ATTRIB_VALUE_CLOSED:
                                d(D, i) ? t.state = Y.ATTRIB : ">" === i ? I(t) : "/" === i ? t.state = Y.OPEN_TAG_SLASH : u(H, i) ? (w(t, "No whitespace between attributes"), t.attribName = i, t.attribValue = "", t.state = Y.ATTRIB_NAME) : w(t, "Invalid attribute name");
                                continue;
                            case Y.ATTRIB_VALUE_UNQUOTED:
                                if (p(P, i)) {
                                    "&" === i ? t.state = Y.ATTRIB_VALUE_ENTITY_U : t.attribValue += i;
                                    continue
                                }
                                x(t), ">" === i ? I(t) : t.state = Y.ATTRIB;
                                continue;
                            case Y.CLOSE_TAG:
                                if (t.tagName) ">" === i ? S(t) : u(j, i) ? t.tagName += i : t.script ? (t.script += "</" + t.tagName, t.tagName = "", t.state = Y.SCRIPT) : (p(D, i) && w(t, "Invalid tagname in closing tag"), t.state = Y.CLOSE_TAG_SAW_WHITE);
                                else {
                                    if (d(D, i)) continue;
                                    h(H, i) ? t.script ? (t.script += "</" + i, t.state = Y.SCRIPT) : w(t, "Invalid tagname in closing tag.") : t.tagName = i
                                }
                                continue;
                            case Y.CLOSE_TAG_SAW_WHITE:
                                if (d(D, i)) continue;
                                ">" === i ? S(t) : w(t, "Invalid characters in closing tag");
                                continue;
                            case Y.TEXT_ENTITY:
                            case Y.ATTRIB_VALUE_ENTITY_Q:
                            case Y.ATTRIB_VALUE_ENTITY_U:
                                var s, l;
                                switch (t.state) {
                                    case Y.TEXT_ENTITY:
                                        s = Y.TEXT, l = "textNode";
                                        break;
                                    case Y.ATTRIB_VALUE_ENTITY_Q:
                                        s = Y.ATTRIB_VALUE_QUOTED, l = "attribValue";
                                        break;
                                    case Y.ATTRIB_VALUE_ENTITY_U:
                                        s = Y.ATTRIB_VALUE_UNQUOTED, l = "attribValue"
                                }
                                ";" === i ? (t[l] += N(t), t.entity = "", t.state = s) : u(t.entity.length ? G : F, i) ? t.entity += i : (w(t, "Invalid character in entity name"), t[l] += "&" + t.entity + i, t.entity = "", t.state = s);
                                continue;
                            default:
                                throw new Error(t, "Unknown state: " + t.state)
                        }
                        return t.position >= t.bufferCheckPosition && r(t), t
                    }
                    t.parser = function(e, t) {
                        return new i(e, t)
                    }, t.SAXParser = i, t.SAXStream = l, t.createStream = s, t.MAX_BUFFER_LENGTH = 65536;
                    var k = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
                    t.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
                        function t() {}
                        t.prototype = e;
                        var n = new t;
                        return n
                    }), Object.keys || (Object.keys = function(e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && t.push(n);
                        return t
                    }), i.prototype = {
                        end: function() {
                            b(this)
                        },
                        write: _,
                        resume: function() {
                            return this.error = null, this
                        },
                        close: function() {
                            return this.write(null)
                        },
                        flush: function() {
                            a(this)
                        }
                    };
                    var O;
                    try {
                        O = n(6).Stream
                    } catch (L) {
                        O = function() {}
                    }
                    var $ = t.EVENTS.filter(function(e) {
                        return "error" !== e && "end" !== e
                    });
                    l.prototype = Object.create(O.prototype, {
                        constructor: {
                            value: l
                        }
                    }), l.prototype.write = function(t) {
                        if ("function" == typeof e && "function" == typeof e.isBuffer && e.isBuffer(t)) {
                            if (!this._decoder) {
                                var i = n(16).StringDecoder;
                                this._decoder = new i("utf8")
                            }
                            t = this._decoder.write(t)
                        }
                        return this._parser.write(t.toString()), this.emit("data", t), !0
                    }, l.prototype.end = function(e) {
                        return e && e.length && this.write(e), this._parser.end(), !0
                    }, l.prototype.on = function(e, t) {
                        var n = this;
                        return n._parser["on" + e] || -1 === $.indexOf(e) || (n._parser["on" + e] = function() {
                            var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                            t.splice(0, 0, e), n.emit.apply(n, t)
                        }), O.prototype.on.call(n, e, t)
                    };
                    var D = "\r\n	 ",
                        B = "'\"",
                        P = D + ">",
                        R = "[CDATA[",
                        M = "DOCTYPE",
                        q = "http://www.w3.org/XML/1998/namespace",
                        V = "http://www.w3.org/2000/xmlns/",
                        U = {
                            xml: q,
                            xmlns: V
                        };
                    D = c(D);
                    var H = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                        j = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                        F = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                        G = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
                    B = c(B), P = c(P);
                    var Y = 0;
                    t.STATE = {
                        BEGIN: Y++,
                        BEGIN_WHITESPACE: Y++,
                        TEXT: Y++,
                        TEXT_ENTITY: Y++,
                        OPEN_WAKA: Y++,
                        SGML_DECL: Y++,
                        SGML_DECL_QUOTED: Y++,
                        DOCTYPE: Y++,
                        DOCTYPE_QUOTED: Y++,
                        DOCTYPE_DTD: Y++,
                        DOCTYPE_DTD_QUOTED: Y++,
                        COMMENT_STARTING: Y++,
                        COMMENT: Y++,
                        COMMENT_ENDING: Y++,
                        COMMENT_ENDED: Y++,
                        CDATA: Y++,
                        CDATA_ENDING: Y++,
                        CDATA_ENDING_2: Y++,
                        PROC_INST: Y++,
                        PROC_INST_BODY: Y++,
                        PROC_INST_ENDING: Y++,
                        OPEN_TAG: Y++,
                        OPEN_TAG_SLASH: Y++,
                        ATTRIB: Y++,
                        ATTRIB_NAME: Y++,
                        ATTRIB_NAME_SAW_WHITE: Y++,
                        ATTRIB_VALUE: Y++,
                        ATTRIB_VALUE_QUOTED: Y++,
                        ATTRIB_VALUE_CLOSED: Y++,
                        ATTRIB_VALUE_UNQUOTED: Y++,
                        ATTRIB_VALUE_ENTITY_Q: Y++,
                        ATTRIB_VALUE_ENTITY_U: Y++,
                        CLOSE_TAG: Y++,
                        CLOSE_TAG_SAW_WHITE: Y++,
                        SCRIPT: Y++,
                        SCRIPT_ENDING: Y++
                    }, t.XML_ENTITIES = {
                        amp: "&",
                        gt: ">",
                        lt: "<",
                        quot: '"',
                        apos: "'"
                    }, t.ENTITIES = {
                        amp: "&",
                        gt: ">",
                        lt: "<",
                        quot: '"',
                        apos: "'",
                        AElig: 198,
                        Aacute: 193,
                        Acirc: 194,
                        Agrave: 192,
                        Aring: 197,
                        Atilde: 195,
                        Auml: 196,
                        Ccedil: 199,
                        ETH: 208,
                        Eacute: 201,
                        Ecirc: 202,
                        Egrave: 200,
                        Euml: 203,
                        Iacute: 205,
                        Icirc: 206,
                        Igrave: 204,
                        Iuml: 207,
                        Ntilde: 209,
                        Oacute: 211,
                        Ocirc: 212,
                        Ograve: 210,
                        Oslash: 216,
                        Otilde: 213,
                        Ouml: 214,
                        THORN: 222,
                        Uacute: 218,
                        Ucirc: 219,
                        Ugrave: 217,
                        Uuml: 220,
                        Yacute: 221,
                        aacute: 225,
                        acirc: 226,
                        aelig: 230,
                        agrave: 224,
                        aring: 229,
                        atilde: 227,
                        auml: 228,
                        ccedil: 231,
                        eacute: 233,
                        ecirc: 234,
                        egrave: 232,
                        eth: 240,
                        euml: 235,
                        iacute: 237,
                        icirc: 238,
                        igrave: 236,
                        iuml: 239,
                        ntilde: 241,
                        oacute: 243,
                        ocirc: 244,
                        ograve: 242,
                        oslash: 248,
                        otilde: 245,
                        ouml: 246,
                        szlig: 223,
                        thorn: 254,
                        uacute: 250,
                        ucirc: 251,
                        ugrave: 249,
                        uuml: 252,
                        yacute: 253,
                        yuml: 255,
                        copy: 169,
                        reg: 174,
                        nbsp: 160,
                        iexcl: 161,
                        cent: 162,
                        pound: 163,
                        curren: 164,
                        yen: 165,
                        brvbar: 166,
                        sect: 167,
                        uml: 168,
                        ordf: 170,
                        laquo: 171,
                        not: 172,
                        shy: 173,
                        macr: 175,
                        deg: 176,
                        plusmn: 177,
                        sup1: 185,
                        sup2: 178,
                        sup3: 179,
                        acute: 180,
                        micro: 181,
                        para: 182,
                        middot: 183,
                        cedil: 184,
                        ordm: 186,
                        raquo: 187,
                        frac14: 188,
                        frac12: 189,
                        frac34: 190,
                        iquest: 191,
                        times: 215,
                        divide: 247,
                        OElig: 338,
                        oelig: 339,
                        Scaron: 352,
                        scaron: 353,
                        Yuml: 376,
                        fnof: 402,
                        circ: 710,
                        tilde: 732,
                        Alpha: 913,
                        Beta: 914,
                        Gamma: 915,
                        Delta: 916,
                        Epsilon: 917,
                        Zeta: 918,
                        Eta: 919,
                        Theta: 920,
                        Iota: 921,
                        Kappa: 922,
                        Lambda: 923,
                        Mu: 924,
                        Nu: 925,
                        Xi: 926,
                        Omicron: 927,
                        Pi: 928,
                        Rho: 929,
                        Sigma: 931,
                        Tau: 932,
                        Upsilon: 933,
                        Phi: 934,
                        Chi: 935,
                        Psi: 936,
                        Omega: 937,
                        alpha: 945,
                        beta: 946,
                        gamma: 947,
                        delta: 948,
                        epsilon: 949,
                        zeta: 950,
                        eta: 951,
                        theta: 952,
                        iota: 953,
                        kappa: 954,
                        lambda: 955,
                        mu: 956,
                        nu: 957,
                        xi: 958,
                        omicron: 959,
                        pi: 960,
                        rho: 961,
                        sigmaf: 962,
                        sigma: 963,
                        tau: 964,
                        upsilon: 965,
                        phi: 966,
                        chi: 967,
                        psi: 968,
                        omega: 969,
                        thetasym: 977,
                        upsih: 978,
                        piv: 982,
                        ensp: 8194,
                        emsp: 8195,
                        thinsp: 8201,
                        zwnj: 8204,
                        zwj: 8205,
                        lrm: 8206,
                        rlm: 8207,
                        ndash: 8211,
                        mdash: 8212,
                        lsquo: 8216,
                        rsquo: 8217,
                        sbquo: 8218,
                        ldquo: 8220,
                        rdquo: 8221,
                        bdquo: 8222,
                        dagger: 8224,
                        Dagger: 8225,
                        bull: 8226,
                        hellip: 8230,
                        permil: 8240,
                        prime: 8242,
                        Prime: 8243,
                        lsaquo: 8249,
                        rsaquo: 8250,
                        oline: 8254,
                        frasl: 8260,
                        euro: 8364,
                        image: 8465,
                        weierp: 8472,
                        real: 8476,
                        trade: 8482,
                        alefsym: 8501,
                        larr: 8592,
                        uarr: 8593,
                        rarr: 8594,
                        darr: 8595,
                        harr: 8596,
                        crarr: 8629,
                        lArr: 8656,
                        uArr: 8657,
                        rArr: 8658,
                        dArr: 8659,
                        hArr: 8660,
                        forall: 8704,
                        part: 8706,
                        exist: 8707,
                        empty: 8709,
                        nabla: 8711,
                        isin: 8712,
                        notin: 8713,
                        ni: 8715,
                        prod: 8719,
                        sum: 8721,
                        minus: 8722,
                        lowast: 8727,
                        radic: 8730,
                        prop: 8733,
                        infin: 8734,
                        ang: 8736,
                        and: 8743,
                        or: 8744,
                        cap: 8745,
                        cup: 8746,
                        "int": 8747,
                        there4: 8756,
                        sim: 8764,
                        cong: 8773,
                        asymp: 8776,
                        ne: 8800,
                        equiv: 8801,
                        le: 8804,
                        ge: 8805,
                        sub: 8834,
                        sup: 8835,
                        nsub: 8836,
                        sube: 8838,
                        supe: 8839,
                        oplus: 8853,
                        otimes: 8855,
                        perp: 8869,
                        sdot: 8901,
                        lceil: 8968,
                        rceil: 8969,
                        lfloor: 8970,
                        rfloor: 8971,
                        lang: 9001,
                        rang: 9002,
                        loz: 9674,
                        spades: 9824,
                        clubs: 9827,
                        hearts: 9829,
                        diams: 9830
                    }, Object.keys(t.ENTITIES).forEach(function(e) {
                        var n = t.ENTITIES[e],
                            i = "number" == typeof n ? String.fromCharCode(n) : n;
                        t.ENTITIES[e] = i
                    });
                    for (var z in t.STATE) t.STATE[t.STATE[z]] = z;
                    Y = t.STATE, String.fromCodePoint || ! function() {
                        var e = String.fromCharCode,
                            t = Math.floor,
                            n = function() {
                                var n, i, r = 16384,
                                    o = [],
                                    a = -1,
                                    s = arguments.length;
                                if (!s) return "";
                                for (var l = ""; ++a < s;) {
                                    var c = Number(arguments[a]);
                                    if (!isFinite(c) || 0 > c || c > 1114111 || t(c) !== c) throw RangeError("Invalid code point: " + c);
                                    65535 >= c ? o.push(c) : (c -= 65536, n = (c >> 10) + 55296, i = c % 1024 + 56320, o.push(n, i)), (a + 1 === s || o.length > r) && (l += e.apply(null, o), o.length = 0)
                                }
                                return l
                            };
                        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                            value: n,
                            configurable: !0,
                            writable: !0
                        }) : String.fromCodePoint = n
                    }()
                }(t)
            }).call(t, n(0).Buffer)
        }, function(e, t, n) {
            function i(e, t, n, i, u) {
                if ("fail" === i.status) return new Error(i.errorcode && i.reason ? "Code " + i.errorcode + ": " + i.reason : "Video not found");
                var g = l.format({
                        protocol: "https",
                        host: y,
                        pathname: b,
                        query: {
                            video_id: e,
                            eurl: v + e,
                            ps: "default",
                            gl: "US",
                            hl: "en",
                            sts: i.sts
                        }
                    }),
                    T = t.request || d;
                T(g, t.requestOptions, function(e, d) {
                    if (e) return u(e);
                    var g = c.parse(d);
                    if ("fail" === g.status) g = i.args;
                    else if ("1" === g.requires_purchase) return u(new Error(g.ypc_video_rental_bar_text));
                    if (w.forEach(function(e) {
                            g[e] && (g[e] = g[e].split(",").filter(function(e) {
                                return "" !== e
                            }))
                        }), g.fmt_list = g.fmt_list ? g.fmt_list.map(function(e) {
                            return e.split("/")
                        }) : [], g.formats = h.parseFormats(g), g = h.objectAssign(g, n, !1), g.formats.some(function(e) {
                            return !!e.s
                        }) || i.args.dashmpd || g.dashmpd || g.hlsvp) {
                        var v = l.resolve(m, i.assets.js);
                        p.getTokens(v, t, function(e, n) {
                            if (e) return u(e);
                            p.decipherFormats(g.formats, n, t.debug);
                            var l, c = [];
                            i.args.dashmpd && (l = r(i.args.dashmpd, n), c.push(a.bind(null, l, t))), g.dashmpd && g.dashmpd !== i.args.dashmpd && (l = r(g.dashmpd, n), c.push(a.bind(null, l, t))), g.hlsvp && (g.hlsvp = r(g.hlsvp, n), c.push(s.bind(null, g.hlsvp, t))), h.parallel(c, function(e, n) {
                                return e ? u(e) : (n[0] && o(g, n[0]), n[1] && o(g, n[1]), n[2] && o(g, n[2]), g.formats.length ? (t.debug && g.formats.forEach(function(e) {
                                    var t = e.itag;
                                    !f[t]
                                }), g.formats.sort(h.sortFormats), void u(null, g)) : void u(new Error("No formats found")))
                            })
                        })
                    } else {
                        if (!g.formats.length) return void u(new Error("Video does not contain any available formats"));
                        p.decipherFormats(g.formats, null, t.debug), g.formats.sort(h.sortFormats), u(null, g)
                    }
                })
            }

            function r(e, t) {
                return e.replace(/\/s\/([a-fA-F0-9\.]+)/, function(e, n) {
                    return "/signature/" + p.decipher(t, n)
                })
            }

            function o(e, t) {
                e.formats.forEach(function(e) {
                    var n = t[e.itag];
                    if (n)
                        for (var i in e) n[i] = e[i];
                    else t[e.itag] = e
                }), e.formats = [];
                for (var n in t) e.formats.push(t[n])
            }

            function a(e, t, n) {
                var i = t.request || d,
                    r = {},
                    o = null,
                    a = !1,
                    s = u.parser(!1);
                s.onerror = n, s.onopentag = function(e) {
                    if ("REPRESENTATION" === e.name) {
                        var t = e.attributes.ID,
                            n = f[t];
                        o = {
                            itag: t
                        };
                        for (var i in n) o[i] = n[i];
                        r[t] = o
                    }
                    a = "BASEURL" === e.name
                }, s.ontext = function(e) {
                    a && (o.url = e)
                }, s.onend = function() {
                    n(null, r)
                };
                var c = i(l.resolve(m, e), t.requestOptions);
                c.on("error", n), c.on("response", function(e) {
                    return 200 !== e.statusCode && 206 !== e.statusCode ? s.close() : (e.setEncoding("utf8"), e.on("error", n), e.on("data", function(e) {
                        s.write(e)
                    }), void e.on("end", s.close.bind(s)))
                })
            }

            function s(e, t, n) {
                var i = t.request || d;
                i(l.resolve(m, e), t.requestOptions, function(e, i) {
                    if (e) return n(e);
                    var r = {};
                    i.split("\n").filter(function(e) {
                        return e.trim().length && "#" !== e[0]
                    }).forEach(function(e) {
                        var n = e.match(/\/itag\/(\d+)\//)[1];
                        if (!n) return void t.debug;
                        var i = f[n],
                            o = {
                                itag: n,
                                url: e
                            };
                        for (var a in i) o[a] = i[a];
                        r[n] = o
                    }), n(null, r)
                })
            }
            var l = n(8),
                c = n(13),
                u = n(32),
                d = n(10),
                h = n(9),
                p = n(34),
                f = n(19),
                m = "https://www.youtube.com/watch?v=",
                g = "https://www.youtube.com/embed/",
                v = "https://youtube.googleapis.com/v/",
                y = "www.youtube.com",
                b = "/get_video_info",
                w = ["keywords", "fmt_list", "fexp", "watermark"];
            e.exports = function T(e, t, n) {
                if ("function" == typeof t ? (n = t, t = {}) : t || (t = {}), !n) return new Promise(function(n, i) {
                    T(e, t, function(e, t) {
                        return e ? i(e) : void n(t)
                    })
                });
                var r = t.request || d,
                    o = h.getVideoID(e),
                    a = m + o;
                r(a, t.requestOptions, function(e, s) {
                    if (e) return n(e);
                    var l = h.between(s, '<div id="player-unavailable"', ">");
                    if (!/\bhid\b/.test(h.between(l, 'class="', '"')) && (l = h.between(s, '<h1 id="unavailable-message" class="message">', "</h1>").trim(), "Content Warning" !== l)) return n(new Error(l));
                    var c = {
                            author: h.getAuthor(s),
                            published: h.getPublished(s),
                            description: h.getVideoDescription(s),
                            relatedVideos: h.getRelatedVideos(s),
                            video_url: a
                        },
                        u = h.between(s, "ytplayer.config = ", "</script>");
                    if (u) {
                        u = u.slice(0, u.lastIndexOf(";ytplayer.load"));
                        var d;
                        try {
                            d = JSON.parse(u)
                        } catch (e) {
                            return n(new Error("Error parsing config: " + e.message))
                        }
                        if (!d) return n(new Error("Could not parse video page config"));
                        i(o, t, c, d, n)
                    } else a = g + o, r(a, t.requestOptions, function(e, r) {
                        if (e) return n(e);
                        if (d = h.between(r, "t.setConfig({'PLAYER_CONFIG': ", "},'"), !d) return n(new Error("Could not find `player config`"));
                        try {
                            d = JSON.parse(d + "}")
                        } catch (e) {
                            return n(new Error("Error parsing config: " + e.message))
                        }
                        i(o, t, c, d, n)
                    })
                })
            }
        }, function(e, t, n) {
            (function(e) {
                function i(e, t) {
                    var n = e[0];
                    return e[0] = e[t % e.length], e[t] = n, e
                }
                var r = n(35),
                    o = n(40),
                    a = n(8),
                    s = n(10),
                    l = n(18);
                t.getTokens = function(i, a, c) {
                    var u, d, h = /(?:html5)?player-([a-zA-Z0-9\-_]+)(?:\.js|\/)/.exec(i);
                    if (h && (u = h[1], d = l.get(u)), d) c(null, d);
                    else {
                        var p = a.request || s;
                        p(i, a.requestOptions, function(i, s) {
                            if (i) return c(i);
                            var d = t.extractActions(s);
                            if (u && (!d || !d.length)) {
                                if (a.debug) {
                                    var h = o.resolve(e, "../test/files/html5player/" + u + ".js");
                                    r.writeFileSync(h, s);
                                    var p = n(36);
                                    p[u] = [], r.writeFileSync(o.resolve(e, "../test/html5player.json"), JSON.stringify(p, null, 2))
                                }
                                return void c(new Error("Could not extract signature deciphering actions"))
                            }
                            l.set(u, d), c(null, d)
                        })
                    }
                }, t.decipher = function(e, t) {
                    t = t.split("");
                    for (var n, r = 0, o = e.length; o > r; r++) {
                        var a = e[r];
                        switch (a[0]) {
                            case "r":
                                t = t.reverse();
                                break;
                            case "w":
                                n = ~~a.slice(1), t = i(t, n);
                                break;
                            case "s":
                                n = ~~a.slice(1), t = t.slice(n);
                                break;
                            case "p":
                                n = ~~a.slice(1), t.splice(0, n)
                        }
                    }
                    return t.join("")
                };
                var c = "[a-zA-Z_\\$][a-zA-Z_0-9]*",
                    u = ":function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}",
                    d = ":function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}",
                    h = ":function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}",
                    p = ":function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b%a\\.length\\];a\\[b\\]=c(?:;return a)?\\}",
                    f = new RegExp("var (" + c + ")=\\{((?:(?:" + c + u + "|" + c + d + "|" + c + h + "|" + c + p + "),?\\n?)+)\\};"),
                    m = new RegExp("function(?: " + c + ')?\\(a\\)\\{a=a\\.split\\(""\\);\\s*((?:(?:a=)?' + c + "\\." + c + '\\(a,\\d+\\);)+)return a\\.join\\(""\\)\\}'),
                    g = new RegExp("(?:^|,)(" + c + ")" + u, "m"),
                    v = new RegExp("(?:^|,)(" + c + ")" + d, "m"),
                    y = new RegExp("(?:^|,)(" + c + ")" + h, "m"),
                    b = new RegExp("(?:^|,)(" + c + ")" + p, "m");
                t.extractActions = function(e) {
                    var t = f.exec(e),
                        n = m.exec(e);
                    if (!t || !n) return null;
                    var i = t[1].replace(/\$/g, "\\$"),
                        r = t[2].replace(/\$/g, "\\$"),
                        o = n[1].replace(/\$/g, "\\$"),
                        a = g.exec(r),
                        s = a && a[1].replace(/\$/g, "\\$");
                    a = v.exec(r);
                    var l = a && a[1].replace(/\$/g, "\\$");
                    a = y.exec(r);
                    var c = a && a[1].replace(/\$/g, "\\$");
                    a = b.exec(r);
                    for (var u = a && a[1].replace(/\$/g, "\\$"), d = "(?:a=)?" + i + "\\.(" + [s, l, c, u].join("|") + ")\\(a,(\\d+)\\)", h = new RegExp(d, "g"), p = []; null !== (a = h.exec(o));) switch (a[1]) {
                        case u:
                            p.push("w" + a[2]);
                            break;
                        case s:
                            p.push("r");
                            break;
                        case l:
                            p.push("s" + a[2]);
                            break;
                        case c:
                            p.push("p" + a[2])
                    }
                    return p
                }, t.setDownloadURL = function(e, t, n) {
                    var i;
                    if (e.url) {
                        i = e.url;
                        try {
                            i = decodeURIComponent(i)
                        } catch (r) {
                            return
                        }
                        var o = a.parse(i, !0);
                        delete o.search;
                        var s = o.query;
                        t && (s.signature = t), e.url = a.format(o)
                    }
                }, t.decipherFormats = function(e, n, i) {
                    e.forEach(function(e) {
                        var r = n && e.s ? t.decipher(n, e.s) : null;
                        t.setDownloadURL(e, r, i)
                    })
                }
            }).call(t, "/")
        }, function(e, t, n) {
            "use strict";
            var i = {};
            e.exports = {
                writeFileSync: function(e, t) {
                    i[e] = t
                },
                readFileSync: function(e) {
                    return i[e]
                }
            }
        }, function(e, t) {
            e.exports = {
                "en_US-vfl0Cbn9e": ["w15", "w44", "r", "w24", "s3", "r", "w2", "w50"],
                "en_US-vfl5aDZwb": ["w15", "w44", "r", "w24", "s3", "r", "w2", "w50"],
                "en_US-vflqZIm5b": ["w1", "w32", "s1", "r", "s3", "r", "s3", "r"],
                "en_US-vfl9FYC6l": ["w28", "r", "p1", "w26", "w40", "r", "p1"],
                "en_US-vflbHLA_P": ["r", "w20", "r", "w20", "p2", "r"],
                "en_US-vflvmwLwg": ["p2", "w44", "r", "p3", "w17", "p1"],
                "en_US-vfljDEtYP": ["r", "p1", "w32", "p3", "r"],
                "id_ID-vflA4yxG-": ["r", "p1", "w32", "p3", "r"],
                "en_US-vflUpjAy9": ["w26", "p3", "r", "p3", "r", "p3", "w61", "p3", "r"]
            }
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                function n() {
                    this.events = {}
                }
                n.prototype = {
                    addListener: function(e, t) {
                        this.events[e] = this.events[e] || [], this.events[e].push(t)
                    },
                    once: function(e, n) {
                        var i = this;
                        if (DEVELOP) {
                            if (2 !== arguments.length) throw new Error(t + ": wrong arguments number");
                            if ("string" != typeof e || 0 === e.length) throw new Error(t + ": wrong or empty name");
                            if ("function" != typeof n) throw new Error(t + ": wrong callback type")
                        }
                        this.events[e] = this.events[e] || [], this.events[e].push(function r() {
                            n.apply(i, arguments), i.removeListener(e, r)
                        })
                    },
                    addListeners: function(e) {
                        var n;
                        if (DEVELOP) {
                            if (1 !== arguments.length) throw new Error(t + ": wrong arguments number");
                            if ("object" != typeof e) throw new Error(t + ": wrong callbacks type");
                            if (0 === Object.keys(e).length) throw new Error(t + ": no callbacks given")
                        }
                        for (n in e) e.hasOwnProperty(n) && this.addListener(n, e[n])
                    },
                    removeListener: function(e, n) {
                        if (DEVELOP) {
                            if (2 !== arguments.length) throw new Error(t + ": wrong arguments number");
                            if ("string" != typeof e || 0 === e.length) throw new Error(t + ": wrong or empty name");
                            if ("function" != typeof n) throw new Error(t + ": wrong callback type");
                            if (this.events[e] && !Array.isArray(this.events[e])) throw new Error(t + ": corrupted inner data")
                        }
                        this.events[e] && (this.events[e] = this.events[e].filter(function(e) {
                            return e !== n
                        }), 0 === this.events[e].length && (this.events[e] = void 0))
                    },
                    emit: function(e) {
                        var n, i = this.events[e];
                        if (DEVELOP) {
                            if (arguments.length < 1) throw new Error(t + ": wrong arguments number");
                            if ("string" != typeof e || 0 === e.length) throw new Error(t + ": wrong or empty name")
                        }
                        if (i) {
                            if (DEVELOP && !Array.isArray(i)) throw new Error(t + ": wrong event type");
                            for (n = 0; n < i.length; n++) {
                                if (DEVELOP && "function" != typeof i[n]) throw new Error(t + ": wrong event callback type");
                                i[n].apply(this, Array.prototype.slice.call(arguments, 1))
                            }
                        }
                    }
                }, n.prototype.constructor = n, e.exports = n
            }).call(t, "/index.js")
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
            }

            function r(e) {
                return 3 * e.length / 4 - i(e)
            }

            function o(e) {
                var t, n, r, o, a, s, l = e.length;
                a = i(e), s = new d(3 * l / 4 - a), r = a > 0 ? l - 4 : l;
                var c = 0;
                for (t = 0, n = 0; r > t; t += 4, n += 3) o = u[e.charCodeAt(t)] << 18 | u[e.charCodeAt(t + 1)] << 12 | u[e.charCodeAt(t + 2)] << 6 | u[e.charCodeAt(t + 3)], s[c++] = o >> 16 & 255, s[c++] = o >> 8 & 255, s[c++] = 255 & o;
                return 2 === a ? (o = u[e.charCodeAt(t)] << 2 | u[e.charCodeAt(t + 1)] >> 4, s[c++] = 255 & o) : 1 === a && (o = u[e.charCodeAt(t)] << 10 | u[e.charCodeAt(t + 1)] << 4 | u[e.charCodeAt(t + 2)] >> 2, s[c++] = o >> 8 & 255, s[c++] = 255 & o), s
            }

            function a(e) {
                return c[e >> 18 & 63] + c[e >> 12 & 63] + c[e >> 6 & 63] + c[63 & e]
            }

            function s(e, t, n) {
                for (var i, r = [], o = t; n > o; o += 3) i = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2], r.push(a(i));
                return r.join("")
            }

            function l(e) {
                for (var t, n = e.length, i = n % 3, r = "", o = [], a = 16383, l = 0, u = n - i; u > l; l += a) o.push(s(e, l, l + a > u ? u : l + a));
                return 1 === i ? (t = e[n - 1], r += c[t >> 2], r += c[t << 4 & 63], r += "==") : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], r += c[t >> 10], r += c[t >> 4 & 63], r += c[t << 2 & 63], r += "="), o.push(r), o.join("")
            }
            t.byteLength = r, t.toByteArray = o, t.fromByteArray = l;
            for (var c = [], u = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, f = h.length; f > p; ++p) c[p] = h[p], u[h.charCodeAt(p)] = p;
            u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63
        }, function(e, t) {
            t.read = function(e, t, n, i, r) {
                var o, a, s = 8 * r - i - 1,
                    l = (1 << s) - 1,
                    c = l >> 1,
                    u = -7,
                    d = n ? r - 1 : 0,
                    h = n ? -1 : 1,
                    p = e[t + d];
                for (d += h, o = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += h, u -= 8);
                for (a = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; a = 256 * a + e[t + d], d += h, u -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === l) return a ? NaN : (p ? -1 : 1) * (1 / 0);
                    a += Math.pow(2, i), o -= c
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - i)
            }, t.write = function(e, t, n, i, r, o) {
                var a, s, l, c = 8 * o - r - 1,
                    u = (1 << c) - 1,
                    d = u >> 1,
                    h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = i ? 0 : o - 1,
                    f = i ? 1 : -1,
                    m = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + d >= 1 ? h / l : h * Math.pow(2, 1 - d), t * l >= 2 && (a++, l /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * l - 1) * Math.pow(2, r), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + p] = 255 & s, p += f, s /= 256, r -= 8);
                for (a = a << r | s, c += r; c > 0; e[n + p] = 255 & a, p += f, a /= 256, c -= 8);
                e[n + p - f] |= 128 * m
            }
        }, function(e, t, n) {
            (function(e) {
                function n(e, t) {
                    for (var n = 0, i = e.length - 1; i >= 0; i--) {
                        var r = e[i];
                        "." === r ? e.splice(i, 1) : ".." === r ? (e.splice(i, 1), n++) : n && (e.splice(i, 1), n--)
                    }
                    if (t)
                        for (; n--; n) e.unshift("..");
                    return e
                }

                function i(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var n = [], i = 0; i < e.length; i++) t(e[i], i, e) && n.push(e[i]);
                    return n
                }
                var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    o = function(e) {
                        return r.exec(e).slice(1)
                    };
                t.resolve = function() {
                    for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                        var a = o >= 0 ? arguments[o] : e.cwd();
                        if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && (t = a + "/" + t, r = "/" === a.charAt(0))
                    }
                    return t = n(i(t.split("/"), function(e) {
                        return !!e
                    }), !r).join("/"), (r ? "/" : "") + t || "."
                }, t.normalize = function(e) {
                    var r = t.isAbsolute(e),
                        o = "/" === a(e, -1);
                    return e = n(i(e.split("/"), function(e) {
                        return !!e
                    }), !r).join("/"), e || r || (e = "."), e && o && (e += "/"), (r ? "/" : "") + e
                }, t.isAbsolute = function(e) {
                    return "/" === e.charAt(0)
                }, t.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return t.normalize(i(e, function(e, t) {
                        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e
                    }).join("/"))
                }, t.relative = function(e, n) {
                    function i(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++);
                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                        return t > n ? [] : e.slice(t, n - t + 1)
                    }
                    e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                    for (var r = i(e.split("/")), o = i(n.split("/")), a = Math.min(r.length, o.length), s = a, l = 0; a > l; l++)
                        if (r[l] !== o[l]) {
                            s = l;
                            break
                        }
                    for (var c = [], l = s; l < r.length; l++) c.push("..");
                    return c = c.concat(o.slice(s)), c.join("/")
                }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                    var t = o(e),
                        n = t[0],
                        i = t[1];
                    return n || i ? (i && (i = i.substr(0, i.length - 1)), n + i) : "."
                }, t.basename = function(e, t) {
                    var n = o(e)[2];
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
                }, t.extname = function(e) {
                    return o(e)[3]
                };
                var a = "b" === "ab".substr(-1) ? function(e, t, n) {
                    return e.substr(t, n)
                } : function(e, t, n) {
                    return 0 > t && (t = e.length + t), e.substr(t, n)
                }
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e, i) {
                var r;
                ! function(o) {
                    function a(e) {
                        throw new RangeError(L[e])
                    }

                    function s(e, t) {
                        for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
                        return i
                    }

                    function l(e, t) {
                        var n = e.split("@"),
                            i = "";
                        n.length > 1 && (i = n[0] + "@", e = n[1]), e = e.replace(O, ".");
                        var r = e.split("."),
                            o = s(r, t).join(".");
                        return i + o
                    }

                    function c(e) {
                        for (var t, n, i = [], r = 0, o = e.length; o > r;) t = e.charCodeAt(r++), t >= 55296 && 56319 >= t && o > r ? (n = e.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--)) : i.push(t);
                        return i
                    }

                    function u(e) {
                        return s(e, function(e) {
                            var t = "";
                            return e > 65535 && (e -= 65536, t += B(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += B(e)
                        }).join("")
                    }

                    function d(e) {
                        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : T
                    }

                    function h(e, t) {
                        return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                    }

                    function p(e, t, n) {
                        var i = 0;
                        for (e = n ? D(e / S) : e >> 1, e += D(e / t); e > $ * x >> 1; i += T) e = D(e / $);
                        return D(i + ($ + 1) * e / (e + I))
                    }

                    function f(e) {
                        var t, n, i, r, o, s, l, c, h, f, m = [],
                            g = e.length,
                            v = 0,
                            y = C,
                            b = N;
                        for (n = e.lastIndexOf(A), 0 > n && (n = 0), i = 0; n > i; ++i) e.charCodeAt(i) >= 128 && a("not-basic"), m.push(e.charCodeAt(i));
                        for (r = n > 0 ? n + 1 : 0; g > r;) {
                            for (o = v, s = 1, l = T; r >= g && a("invalid-input"), c = d(e.charCodeAt(r++)), (c >= T || c > D((w - v) / s)) && a("overflow"), v += c * s, h = b >= l ? E : l >= b + x ? x : l - b, !(h > c); l += T) f = T - h, s > D(w / f) && a("overflow"), s *= f;
                            t = m.length + 1, b = p(v - o, t, 0 == o), D(v / t) > w - y && a("overflow"), y += D(v / t), v %= t, m.splice(v++, 0, y)
                        }
                        return u(m)
                    }

                    function m(e) {
                        var t, n, i, r, o, s, l, u, d, f, m, g, v, y, b, I = [];
                        for (e = c(e), g = e.length, t = C, n = 0, o = N, s = 0; g > s; ++s) m = e[s], 128 > m && I.push(B(m));
                        for (i = r = I.length, r && I.push(A); g > i;) {
                            for (l = w, s = 0; g > s; ++s) m = e[s], m >= t && l > m && (l = m);
                            for (v = i + 1, l - t > D((w - n) / v) && a("overflow"), n += (l - t) * v, t = l, s = 0; g > s; ++s)
                                if (m = e[s], t > m && ++n > w && a("overflow"), m == t) {
                                    for (u = n, d = T; f = o >= d ? E : d >= o + x ? x : d - o, !(f > u); d += T) b = u - f, y = T - f, I.push(B(h(f + b % y, 0))), u = D(b / y);
                                    I.push(B(h(u, 0))), o = p(n, v, i == r), n = 0, ++i
                                }++n, ++t
                        }
                        return I.join("")
                    }

                    function g(e) {
                        return l(e, function(e) {
                            return _.test(e) ? f(e.slice(4).toLowerCase()) : e
                        })
                    }

                    function v(e) {
                        return l(e, function(e) {
                            return k.test(e) ? "xn--" + m(e) : e
                        })
                    }
                    var y = ("object" == typeof t && t && !t.nodeType && t, "object" == typeof e && e && !e.nodeType && e, "object" == typeof i && i);
                    y.global !== y && y.window !== y && y.self !== y || (o = y);
                    var b, w = 2147483647,
                        T = 36,
                        E = 1,
                        x = 26,
                        I = 38,
                        S = 700,
                        N = 72,
                        C = 128,
                        A = "-",
                        _ = /^xn--/,
                        k = /[^\x20-\x7E]/,
                        O = /[\x2E\u3002\uFF0E\uFF61]/g,
                        L = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        $ = T - E,
                        D = Math.floor,
                        B = String.fromCharCode;
                    b = {
                        version: "1.4.1",
                        ucs2: {
                            decode: c,
                            encode: u
                        },
                        decode: f,
                        encode: m,
                        toASCII: v,
                        toUnicode: g
                    }, r = function() {
                        return b
                    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
                }(this)
            }).call(t, n(20)(e), n(2))
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.exports = function(e, t, n, o) {
                t = t || "&", n = n || "=";
                var a = {};
                if ("string" != typeof e || 0 === e.length) return a;
                var s = /\+/g;
                e = e.split(t);
                var l = 1e3;
                o && "number" == typeof o.maxKeys && (l = o.maxKeys);
                var c = e.length;
                l > 0 && c > l && (c = l);
                for (var u = 0; c > u; ++u) {
                    var d, h, p, f, m = e[u].replace(s, "%20"),
                        g = m.indexOf(n);
                    g >= 0 ? (d = m.substr(0, g), h = m.substr(g + 1)) : (d = m, h = ""), p = decodeURIComponent(d), f = decodeURIComponent(h), i(a, p) ? r(a[p]) ? a[p].push(f) : a[p] = [a[p], f] : a[p] = f
                }
                return a
            };
            var r = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.map) return e.map(t);
                for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
                return n
            }
            var r = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function(e, t, n, s) {
                return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(a(e), function(a) {
                    var s = encodeURIComponent(r(a)) + n;
                    return o(e[a]) ? i(e[a], function(e) {
                        return s + encodeURIComponent(r(e))
                    }).join(t) : s + encodeURIComponent(r(e[a]))
                }).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
            };
            var o = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                a = Object.keys || function(e) {
                        var t = [];
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                        return t
                    }
        }, function(e, t, n) {
            e.exports = n(1)
        }, function(e, t, n) {
            "use strict";

            function i() {
                this.head = null, this.tail = null, this.length = 0
            }
            var r = (n(0).Buffer, n(11));
            e.exports = i, i.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, i.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, i.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, i.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, i.prototype.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                return n
            }, i.prototype.concat = function(e) {
                if (0 === this.length) return r.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var t = r.allocUnsafe(e >>> 0), n = this.head, i = 0; n;) n.data.copy(t, i), i += n.data.length, n = n.next;
                return t
            }
        }, function(e, t, n) {
            e.exports = n(22)
        }, function(e, t, n) {
            (function(i) {
                var r = function() {
                    try {
                        return n(6)
                    } catch (e) {}
                }();
                t = e.exports = n(23), t.Stream = r || t, t.Readable = t, t.Writable = n(15), t.Duplex = n(1), t.Transform = n(14), t.PassThrough = n(22), !i.browser && "disable" === i.env.READABLE_STREAM && r && (e.exports = r)
            }).call(t, n(4))
        }, function(e, t, n) {
            e.exports = n(14)
        }, function(e, t, n) {
            e.exports = n(15)
        }, function(e, t, n) {
            (function(e, t) {
                ! function(e, n) {
                    "use strict";

                    function i(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var i = {
                            callback: e,
                            args: t
                        };
                        return m[f] = i, p(f), f++
                    }

                    function r(e) {
                        delete m[e]
                    }

                    function o(e) {
                        var t = e.callback,
                            i = e.args;
                        switch (i.length) {
                            case 0:
                                t();
                                break;
                            case 1:
                                t(i[0]);
                                break;
                            case 2:
                                t(i[0], i[1]);
                                break;
                            case 3:
                                t(i[0], i[1], i[2]);
                                break;
                            default:
                                t.apply(n, i)
                        }
                    }

                    function a(e) {
                        if (g) setTimeout(a, 0, e);
                        else {
                            var t = m[e];
                            if (t) {
                                g = !0;
                                try {
                                    o(t)
                                } finally {
                                    r(e), g = !1
                                }
                            }
                        }
                    }

                    function s() {
                        p = function(e) {
                            t.nextTick(function() {
                                a(e)
                            })
                        }
                    }

                    function l() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }

                    function c() {
                        var t = "setImmediate$" + Math.random() + "$",
                            n = function(n) {
                                n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                            };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), p = function(n) {
                            e.postMessage(t + n, "*")
                        }
                    }

                    function u() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            var t = e.data;
                            a(t)
                        }, p = function(t) {
                            e.port2.postMessage(t)
                        }
                    }

                    function d() {
                        var e = v.documentElement;
                        p = function(t) {
                            var n = v.createElement("script");
                            n.onreadystatechange = function() {
                                a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                            }, e.appendChild(n)
                        }
                    }

                    function h() {
                        p = function(e) {
                            setTimeout(a, 0, e)
                        }
                    }
                    if (!e.setImmediate) {
                        var p, f = 1,
                            m = {},
                            g = !1,
                            v = e.document,
                            y = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        y = y && y.setTimeout ? y : e, "[object process]" === {}.toString.call(e.process) ? s() : l() ? c() : e.MessageChannel ? u() : v && "onreadystatechange" in v.createElement("script") ? d() : h(), y.setImmediate = i, y.clearImmediate = r
                    }
                }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
            }).call(t, n(2), n(4))
        }, function(e, t, n) {
            "use strict";
            e.exports = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e
                },
                isNull: function(e) {
                    return null === e
                },
                isNullOrUndefined: function(e) {
                    return null == e
                }
            }
        }, function(e, t, n) {
            (function(t) {
                function n(e, t) {
                    function n() {
                        if (!r) {
                            if (i("throwDeprecation")) throw new Error(t);
                            i("traceDeprecation"), r = !0
                        }
                        return e.apply(this, arguments)
                    }
                    if (i("noDeprecation")) return e;
                    var r = !1;
                    return n
                }

                function i(e) {
                    try {
                        if (!t.localStorage) return !1
                    } catch (n) {
                        return !1
                    }
                    var i = t.localStorage[e];
                    return null == i ? !1 : "true" === String(i).toLowerCase()
                }
                e.exports = n
            }).call(t, n(2))
        }, function(e, t) {}, function(e, t, n) {
            (function(t) {
                var i, r;
                t.DEVELOP = !0, Function.prototype.bind = n(25), window.Set = n(27), r = n(26), i = {
                    getInfo: function(e, t, n) {
                        return r.getInfo(e, n, function(e, n) {
                            return e ? void t(e) : n instanceof Error ? void t(n) : void t(!1, n)
                        }), !1
                    },
                    choseFormat: function(e, t) {
                        return t || (t = {}), r.chooseFormat(e.formats, t)
                    }
                }, e.exports = i
            }).call(t, n(2))
        }])
    }).call(t, n(17).setImmediate, n(17).clearImmediate)
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n, i, r, o, a, s, l, c, u, d, h, p = [];
        for (l = e.split("channels-content-item"), h = 0; h < l.length; h++) d = l[h], -1 !== d.indexOf("yt-lockup-video") && (c = d.indexOf('="https://i.ytimg') + 2, u = d.indexOf('"', c), s = d.substring(c, u), c = d.indexOf('data-context-item-id="') + 22, u = d.indexOf('"', c), n = d.substring(c, u), c = d.indexOf('<span class="video-time" aria-hidden="true">') + 44, c = d.indexOf(">", c) + 1, u = d.indexOf("</span>", c), i = d.substring(c, u), c = d.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, u = d.indexOf(" ", c), r = d.substring(c, u), c = d.indexOf("</li><li>", c) + 9, u = d.indexOf("</li>", c), o = d.substring(c, u), c = d.indexOf('" href="/watch?v=') + 17, c = d.indexOf(">", c) + 1, u = d.indexOf("</a><span", c), a = d.substring(c, u), p.push({
            value: 1,
            id: n,
            channelTitle: t.title,
            duration: i,
            realDuration: i,
            viewCount: r,
            publishedAt: o,
            dimension: "",
            definition: "",
            title: a,
            icon: s,
            channelId: t.id,
            type: "video",
            locale: {
                publishedAt: o,
                viewCount: r,
                channelTitle: t.title
            }
        }));
        return p
    }

    function r() {
        s.call(this), this.channelId = null, this.pages = {}
    }
    var o = n(18),
        a = o.ajax,
        s = n(5);
    r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.getInfo = function(e, t) {
        return e = e || {}, !e.channelId && this.channelId && (e.channelId = this.channelId), e.channelId ? void a("get", "https://www.youtube.com/channel/" + e.channelId + "/about", function(n, i) {
            var r, o, a, s, l, c, u;
            r = n.indexOf('img class="channel-header-profile-image" src="') + 46, o = n.indexOf('"', r), a = n.substring(r, o), r = n.indexOf("yt-subscription-button-subscriber-count-branded-horizontal"), r = n.indexOf('title="', r) + 7, o = n.indexOf('"', r), s = n.substring(r, o), r = n.indexOf('class="qualified-channel-title-text"'), r = n.indexOf('title="', r) + 7, o = n.indexOf('"', r), l = n.substring(r, o), r = n.indexOf('<div class="about-description'), o = n.indexOf('<div class="about-metadata-label', r), c = n.substring(r, o), r = n.indexOf(".hd-banner-image {"), r = n.indexOf("background-image: url(", r) + 22, o = n.indexOf(");", r), u = "http:" + n.substring(r, o), t(null, {
                icon: a,
                subscribers: s,
                background: u,
                title: l,
                id: e.channelId,
                description: c
            })
        }) : void t({
            message: "error: field arguments[0].channelId is empty"
        })
    }, r.prototype.getPage = function(e, t) {
        var n = this;
        return e = e || {}, !e.channelId && this.channelId && (e.channelId = this.channelId), e.page = +e.page || 0, e.channelId ? void(this.pages[e.page] && this.pages[e.page].parseId ? this.pages[e.page].cached ? t(null, this.pages[e.page].data) : a("get", "https://www.youtube.com" + this.pages[e.page].parseId, function(r, o) {
            var a, s, l, c, u, d = "";
            try {
                a = JSON.parse(r)
            } catch (h) {
                s = h, a = ""
            }
            a || t({
                message: "parse error for page id " + n.pages[e.page].parseId,
                code: s
            }), a.load_more_widget_html.trim().length > 10 ? (l = a.load_more_widget_html.indexOf('data-uix-load-more-href="/browse_ajax') + 25, c = a.load_more_widget_html.indexOf('"', l), u = a.load_more_widget_html.substring(l, c)) : u = "", n.pages[e.page + 1] = {
                parseId: u,
                cached: !1
            }, n.pages[e.page].cached = !0, n.pages[e.page].data = i(a.content_html, {
                id: e.channelId,
                title: d
            }), t(null, n.pages[e.page].data)
        }) : e.page ? this.pages[e.page] && !this.pages[e.page].parseId ? t(null, []) : t({
            message: "wrong page number (page id not found in cache)"
        }) : a("get", "https://www.youtube.com/channel/" + e.channelId + "/videos", function(r, o) {
            var a, s, l, c = "";
            s = r.indexOf('data-uix-load-more-href="/browse_ajax') + 25, l = r.indexOf('"', s), n.pages[e.page + 1] = {
                parseId: r.substring(s, l),
                cached: !1
            }, a = r.slice(r.indexOf('id="channels-browse-content-grid"'), r.indexOf("browse-items-load-more-button")), n.pages[0] = {
                cached: !0,
                parseId: "   ",
                data: i(a, {
                    id: e.channelId,
                    title: c
                })
            }, t(null, n.pages[0].data)
        })) : void t({
            message: "error: field arguments[0].channelId is empty"
        })
    }, r.prototype.filter = function() {
        return !1
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t, n, i, r, o, a, s, l, c, u, d, h, p, f, m, g, v = [];
        for (c = e.split('<li class="yt-shelf-grid-item'), p = 0; p < c.length; p++)
            if (h = c[p], -1 !== h.indexOf("yt-lockup-content")) {
                if (-1 !== h.indexOf("yt-lockup-playlist")) f = "playlist";
                else {
                    if (-1 === h.indexOf("yt-lockup-video") || -1 !== h.indexOf("branded-page-module") || -1 !== h.indexOf("data-set-reminder-text")) continue;
                    f = "video", g = -1 !== h.indexOf("yt-badge-live")
                }
                u = h.indexOf("//i.ytimg"), d = h.indexOf('"', u), s = "https:" + h.substring(u, d), u = h.indexOf(' data-ytid="') + 12, d = h.indexOf('"', u), l = h.substring(u, d), "playlist" === f && (u = h.indexOf('" dir="ltr">') + 12, d = h.indexOf("</a><span", u), a = h.substring(u, d), -1 !== h.indexOf('<div class="yt-lockup-byline ">YouTube</div>') && (l = ""), u = h.indexOf('<a href="/watch?v=') + 9, d = h.indexOf('"', u), m = h.substring(u, d).replace("&amp;", "&"), u = h.indexOf('" dir="ltr">') + 12, d = h.indexOf("<", u), n = h.substring(u, d), v.push({
                    value: 1,
                    playlistId: m,
                    channel: {
                        title: n.substr(0, 100),
                        id: l
                    },
                    title: a.substr(0, 100),
                    icon: s,
                    type: "playlist",
                    channelTitle: n.substr(0, 100),
                    viewCount: " ",
                    duration: " ",
                    publishedAt: " ",
                    locale: {
                        publishedAt: " ",
                        viewCount: " ",
                        channelTitle: n.substr(0, 100)
                    }
                })), "video" === f && (u = h.indexOf('data-context-item-id="') + 22, d = h.indexOf('"', u), t = h.substring(u, d), u = h.indexOf('<span class="video-time" aria-hidden="true">') + 44, d = h.indexOf("</span>", u), i = h.substring(u, d), u = h.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, d = h.indexOf(" ", u), r = h.substring(u, d), u = h.indexOf("</li><li>", u) + 9, d = h.indexOf("</li></ul></div>", u), o = h.substring(u, d), u = h.indexOf('" dir="ltr">') + 12, 11 === u && (u = h.indexOf(' dir="ltr">') + 11, 10 === u && (u = h.indexOf('" dir="rtl">') + 12)), d = h.indexOf("</", u), a = h.substring(u, d), u = h.indexOf(' data-ytid="'), u = h.indexOf(">", u) + 1, d = h.indexOf("</a>", u), n = h.substring(u, d), v.push({
                    value: 1,
                    id: t,
                    channelTitle: n.substr(0, 100),
                    duration: g ? "" : i.substr(0, 100),
                    realDuration: g ? "" : i.substr(0, 100),
                    viewCount: r.substr(0, 100),
                    publishedAt: g ? "" : o.substr(0, 100),
                    dimension: "",
                    definition: "",
                    title: a.substr(0, 100),
                    icon: s,
                    channelId: l,
                    type: "video",
                    locale: {
                        publishedAt: g ? "" : o.substr(0, 100),
                        viewCount: r.substr(0, 100),
                        channelTitle: n.substr(0, 100)
                    }
                }))
            }
        return v
    }

    function r() {
        s.call(this), this.pages = {}
    }
    var o = n(18),
        a = o.ajax,
        s = n(5);
    r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.getPage = function(e, t) {
        var n = this;
        e.page = +e.page || 0, this.pages[e.page] && this.pages[e.page].parseId ? this.pages[e.page].cached ? t(null, this.pages[e.page].data) : a("get", "https://www.youtube.com" + this.pages[e.page].parseId, function(r, o) {
            var a, s, l, c, u;
            try {
                a = JSON.parse(r)
            } catch (d) {
                s = d, a = ""
            }
            a || t({
                message: "parse error for page id " + n.pages[e.page].parseId,
                code: s
            }), a.load_more_widget_html.trim().length > 10 ? (l = a.load_more_widget_html.indexOf('data-uix-load-more-href="') + 25, c = a.load_more_widget_html.indexOf('"', l), u = a.load_more_widget_html.substring(l, c)) : u = "", n.pages[e.page + 1] = {
                parseId: u,
                cached: !1
            }, n.pages[e.page].cached = !0, n.pages[e.page].data = i(a.content_html), t(null, n.pages[e.page].data)
        }) : e.page ? this.pages[e.page] && !this.pages[e.page].parseId ? t(null, []) : t({
            message: "wrong page number (page id not found in cache)"
        }) : a("get", "https://www.youtube.com/", function(r, o) {
            var a, s, l;
            s = r.indexOf('data-uix-load-more-href="') + 25, l = r.indexOf('"', s), n.pages[e.page + 1] = {
                parseId: r.substring(s, l),
                cached: !1
            }, a = r.slice(r.indexOf('id="feed-main-'), r.indexOf('id="feed-error"')), n.pages[0] = {
                cached: !0,
                parseId: "   ",
                data: i(a)
            }, t(null, n.pages[0].data)
        })
    }, r.prototype.filter = function() {
        return !1
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t, n, i, r, o, a, s, l, c, u, d = [];
        for (a = e.split('<li class="yt-uix-scroller-scroll-unit'), u = 0; u < a.length; u++) c = a[u], -1 !== c.indexOf('<div class="playlist-video-description">') && (s = c.indexOf('<span class="video-uploader-byline">') + 36, l = c.indexOf("</span>", s), c.substring(s, l).trim() && (s = c.indexOf('data-video-id="') + 15, l = c.indexOf('"', s), t = c.substring(s, l), s = c.indexOf('data-video-title="') + 18, l = c.indexOf('"', s), i = c.substring(s, l), s = c.indexOf('="https://i.ytimg') + 2, l = c.indexOf('"', s), r = c.substring(s, l), s = c.indexOf(' data-ytid="UC') + 12, l = c.indexOf('"', s), o = c.substring(s, l), s = c.indexOf(">", s) + 1, l = c.indexOf("</", s), n = c.substring(s, l), d.push({
            value: 1,
            id: t,
            channelTitle: n,
            duration: " ",
            realDuration: " ",
            viewCount: " ",
            publishedAt: " ",
            dimension: "",
            definition: "",
            title: i,
            icon: r,
            channelId: o,
            type: "video",
            locale: {
                publishedAt: " ",
                viewCount: " ",
                channelTitle: n
            }
        })));
        return d
    }

    function r() {
        s.call(this), this.pages = {}
    }
    var o = n(18),
        a = o.ajax,
        s = n(5);
    r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.getPage = function(e, t) {
        var n = this;
        return e.page = e.page || 0, e.playlistId ? e.page ? void t(null, []) : void(this.pages[0] ? t(null, this.pages[0].data) : a("get", "https://www.youtube.com" + e.playlistId, function(r, o) {
            var a, s, l;
            s = r.indexOf('id="playlist-autoscroll-list"'), l = r.indexOf('id="placeholder-player"', s), a = r.slice(s, l), n.pages[0] = {
                cached: !0,
                parseId: e.playlistId,
                data: i(a)
            }, t(null, n.pages[0].data)
        })) : void t({
            message: "error: field arguments[0].playlistId is empty"
        })
    }, r.prototype.filter = function() {
        return !1
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t, n, i, r, o, a, s, l, c, u, d, h, p, f, m, g, v, y, b = [];
        for (m = e.split('<div class="yt-lockup yt-lockup-tile '), g = 0; g < m.length; g++)
            if (v = m[g], -1 !== v.indexOf("yt-lockup-content")) {
                if (-1 !== v.indexOf("yt-lockup-playlist")) t = "playlist";
                else if (-1 !== v.indexOf("yt-lockup-channel")) t = "channel";
                else {
                    if (-1 === v.indexOf("yt-lockup-video") || -1 !== v.indexOf("branded-page-module") || -1 !== v.indexOf("data-set-reminder-text")) continue;
                    y = -1 !== v.indexOf("yt-badge-live"), t = "video"
                }
                p = v.indexOf("//i.ytimg"), f = v.indexOf('"', p), l = "https:" + v.substring(p, f), p = v.indexOf('" dir="ltr">') + 12, 11 === p && (p = v.indexOf(' dir="ltr">') + 11, 10 === p && (p = v.indexOf('" dir="rtl">') + 12)), f = v.indexOf("</", p), s = v.substring(p, f), p = v.indexOf(' data-ytid="') + 12, f = v.indexOf('"', p), c = v.substring(p, f), "playlist" === t && (-1 !== v.indexOf('<div class="yt-lockup-byline ">YouTube</div>') && (c = ""), p = v.indexOf('<a href="/watch?v=') + 9, f = v.indexOf('"', p), u = v.substring(p, f).replace("&amp;", "&"), p = v.indexOf('" dir="ltr">') + 12, f = v.indexOf("<", p), i = v.substring(p, f), b.push({
                    value: 1,
                    playlistId: u,
                    channel: {
                        title: i.substr(0, 100),
                        id: c
                    },
                    title: s.substr(0, 100),
                    icon: l,
                    type: "playlist",
                    channelTitle: i.substr(0, 100),
                    viewCount: " ",
                    duration: " ",
                    publishedAt: " ",
                    locale: {
                        publishedAt: " ",
                        viewCount: " ",
                        channelTitle: i.substr(0, 100)
                    }
                })), "video" === t && (p = v.indexOf('href="/watch?v=') + 15, f = v.indexOf('"', p), n = v.substring(p, f), p = v.indexOf('<span class="video-time" aria-hidden="true">') + 44, 43 === p && (p = v.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36), f = v.indexOf("</", p), r = v.substring(p, f), p = v.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, f = v.indexOf("</", p), a = v.substring(p, f), y ? (p = v.indexOf('<ul class="yt-lockup-meta-info"><li>') + 36, f = v.indexOf("<", p)) : (p = v.indexOf("</li><li>", p) + 9, f = v.indexOf("<", p)), o = v.substring(p, f), p = v.indexOf(' data-ytid="'), p = v.indexOf(">", p) + 1, f = v.indexOf("</a>", p), i = v.substring(p, f), b.push({
                    value: 1,
                    id: n,
                    channelTitle: i.substr(0, 100),
                    duration: y ? "" : r.substr(0, 100),
                    realDuration: y ? "" : r.substr(0, 100),
                    viewCount: o.substr(0, 100),
                    publishedAt: y ? "" : a.substr(0, 100),
                    dimension: "",
                    definition: "",
                    title: s.substr(0, 100),
                    icon: l,
                    channelId: c,
                    type: "video",
                    locale: {
                        publishedAt: y ? "" : a.substr(0, 100),
                        viewCount: o.substr(0, 100),
                        channelTitle: i.substr(0, 100)
                    }
                })), "channel" === t && (p = v.indexOf("//yt"), f = v.indexOf('"', p), l = "https:" + v.substring(p, f), p = v.indexOf('" dir="ltr">') + 12, f = v.indexOf("<", p), s = v.substring(p, f), -1 !== v.indexOf("yt-channel-title-autogenerated") ? d = "" : (p = v.indexOf('"yt-lockup-meta-info"><li>') + 26, f = v.indexOf(" ", p), d = v.substring(p, f)), p = v.indexOf('yt-subscriber-count" title="') + 28, f = v.indexOf('"', p), h = v.substring(p, f), b.push({
                    value: 1,
                    id: c,
                    title: s.substr(0, 100),
                    icon: l,
                    type: "channel",
                    viewCount: "",
                    commentCount: "",
                    subscriberCount: h.substr(0, 100),
                    hiddenSubscriberCount: "",
                    videoCount: d.substr(0, 100),
                    locale: {
                        subscriberCount: h.substr(0, 100)
                    }
                }))
            }
        return b
    }

    function r(e) {
        s.call(this), this.pages = {}, this.searchQuery = "", this.filter(e)
    }
    var o = n(18),
        a = o.ajax,
        s = n(5);
    r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.getPage = function(e, t) {
        var n = this;
        e.page = +e.page || 0, this.pages[e.page] && this.pages[e.page].parseId ? this.pages[e.page].cached ? t(null, this.pages[e.page].data) : a("get", "https://www.youtube.com" + this.pages[e.page].parseId, function(r, o) {
            var a, s, l, c;
            s = r.indexOf('class="branded-page-box search-pager'), l = r.indexOf('class="branded-page-v2-secondary-col', s), a = r.substring(s, l), a = a.split('<a href="'), a[a.length - 1] && -1 !== a[a.length - 1].indexOf("»") ? (s = a[a.length - 1].indexOf("/results?q="), l = a[a.length - 1].indexOf('"', s), c = a[a.length - 1].substring(s, l).replace("&amp;", "&")) : c = "", n.pages[e.page + 1] = {
                parseId: c,
                cached: !1
            }, a = r.slice(r.indexOf('id="item-section-'), r.indexOf('class="branded-page-box search-pager')), n.pages[e.page] = {
                cached: !0,
                data: i(a)
            }, t(null, n.pages[e.page].data)
        }) : e.page ? this.pages[e.page] && !this.pages[e.page].parseId ? t(null, []) : t({
            message: "wrong page number (page id not found in cache)"
        }) : a("get", "https://www.youtube.com/results?search_query=" + this.searchQuery, function(r, o) {
            var a, s, l, c;
            s = r.indexOf('class="branded-page-box search-pager'), l = r.indexOf('class="branded-page-v2-secondary-col', s), a = r.substring(s, l), a = a.split('<a href="'), a[a.length - 1] && -1 !== a[a.length - 1].indexOf("»") ? (s = a[a.length - 1].indexOf("/results?q="), l = a[a.length - 1].indexOf('"', s), c = a[a.length - 1].substring(s, l).replace("&amp;", "&")) : c = "", n.pages[e.page + 1] = {
                parseId: c,
                cached: !1
            }, a = r.slice(r.indexOf('id="item-section-'), r.indexOf('class="branded-page-box search-pager')), n.pages[0] = {
                cached: !0,
                parseId: "/results?search_query=" + n.searchQuery,
                data: i(a)
            }, t(null, n.pages[0].data)
        })
    }, r.prototype.filter = function(e) {
        var t = !1;
        return void 0 !== e.searchQuery && this.searchQuery !== e.searchQuery && (t = !0, this.searchQuery = e.searchQuery), t ? (this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = r
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var n;
        return function() {
            var i = this,
                r = arguments;
            clearTimeout(n), n = setTimeout(function() {
                n = null, e.apply(i, r)
            }, t)
        }
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return new r(function(n, i) {
            e.onload = function() {
                200 === this.status ? n(this.responseText) : i(this.statusText)
            }, e.onerror = function() {
                i()
            }, e.send(t)
        })
    }
    var r = n(11);
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var i = "pi",
        r = n(16),
        o = new r({
            $node: document.getElementById(i)
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return "window." + e + ".id"
    }

    function r(e, t) {
        var n, r = i(e),
            o = stbStorage.getItem(r);
        if (o) try {
            n = JSON.parse(stbWindowMgr.windowInfo(o)), -1 === n.result.url.indexOf(t) && stbWebWindow.messageSend(o, "window.load", t), e === d.BROWSER ? (o = stbWindowMgr.openWebFace(t), stbStorage.setItem(r, o)) : stbWindowMgr.windowShow(o)
        } catch (a) {
            stbWindowMgr.openWebFace(t)
        } else o = e === d.BROWSER ? stbWindowMgr.openWebFace(t) : stbWindowMgr.windowInit(JSON.stringify({
            url: t,
            backgroundColor: "#000"
        })), stbStorage.setItem(r, o);
        return o
    }
    var o = n(3),
        a = n(2),
        s = n(16),
        l = n(15),
        c = n(9),
        u = new s({
            $node: document.getElementById("pl")
        }),
        d = {
            PORTAL: "portal",
            HELP: "help",
            DOWNLOAD_MANAGER: "dlman",
            PVR: "recordsManager",
            BROWSER: "ibman",
            BROWSER_VIEW: "ibmanView",
            PORTALS_LOADER: "portalsLoader",
            SYSTEM_SETTINGS: "systemSettings"
        };
    u.id = "pl", u.addListener("show", function() {
        var e, t, n = -1,
            s = 0,
            u = {
                480: {
                    x: 47,
                    y: 0,
                    w: 640,
                    h: 432
                },
                576: {
                    x: 55,
                    y: 0,
                    w: 637,
                    h: 528
                },
                720: {
                    x: 15,
                    y: 0,
                    w: 1280,
                    h: 720
                },
                1080: {
                    x: 10,
                    y: 0,
                    w: 1920,
                    h: 1080
                }
            };
        l.updateView({}, "pageLogin"), t = u[window.screen.height], setTimeout(function() {
            r(d.BROWSER, "file:///home/web/public/app/ibman/index.html?mode=2&view=1&url=" + encodeURIComponent(c.AUTH_URL))
        }, 0), n = setInterval(function() {
            var r, l = stbWindowMgr.getCurrWebUrl(),
                u = {};
            if (e = stbStorage.getItem(i(d.BROWSER)), 0 === l.length && s > 10) {
                try {
                    stbWebWindow.messageSend(e, "close")
                } catch (h) {}
                return clearInterval(n), void a.back()
            }++s, stbWindowMgr.SetVirtualKeyboardCoord("bottom"), stbWindowMgr.resizeWebWindow(t.x, t.y, t.w, t.h), -1 !== l.indexOf("#") && -1 !== l.indexOf("code") && (l = l.split("?")[1].replace("#", "").split("&"), l.forEach(function(e) {
                r = e.split("="), u[r[0]] = r[1]
            }), u.code && (clearInterval(n), stbWebWindow.messageSend(e, "close"), c.postAuth(u.code).then(function(e) {
                o.settings.refreshToken = e.refreshToken, o.settings.sessionToken = e.sessionToken, o.settings.credentialsIndex = c.credentialsIndex, location.reload()
            }, function() {
                location.reload()
            })))
        }, 1e3)
    }), e.exports = u
}, function(e, t, n) {
    "use strict";
    var i, r, o, a = n(2),
        s = n(1),
        l = n(3),
        c = n(16),
        u = "pm",
        d = n(15),
        h = new c({
            $node: document.getElementById(u)
        });
    h.addListener("keydown", function(e) {
        e.code === s.info ? i.visible ? r.content.tabs[r.activeTab].activate() : i.focus() : e.code === s.f3 ? a.navigate("ps") : e.code === s.back && (a.back() || l.emit("keydown", {
                code: s.exit
            }))
    }), h.addListener("show", function(e) {
        r = n(21), d.updateView({
            SEARCH: {
                icon: "search",
                visible: !0,
                text: gettext("Search")
            },
            MORE: {
                icon: "more",
                visible: !1,
                text: ""
            },
            GUIDE: {
                icon: "info",
                visible: !0,
                text: gettext("Guide")
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Exit")
            }
        }, "pageMain"), e.data && e.data.channel ? (o = r.activeTab, r.content.tabs[r.activeTab].hide(), r.activeTab = 1, r.content.tabs[r.activeTab].activate(e.data.channel)) : r.content.tabs.length > 0 && (o || (o = 3), r.content.tabs[r.activeTab].hide(), r.activeTab = o, r.content.tabs[r.activeTab].activate())
    }), h.addListener("hide", function() {
        n(8).hide()
    }), h.addListener("load", function() {
        r = n(21), h.add(i = n(14)), i.addListener("show", function() {
            d.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !1,
                    text: gettext("Search")
                },
                GUIDE: {
                    icon: "info",
                    visible: !0,
                    text: gettext("Close Guide")
                }
            }, "pageMain")
        }), i.addListener("hide", function() {
            d.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !0,
                    text: gettext("Search")
                },
                GUIDE: {
                    icon: "info",
                    visible: !0,
                    text: gettext("Guide")
                }
            }, "pageMain")
        }), r.content.tabs.push(n(41)), r.content.tabs.push(n(42)), r.content.tabs.push(n(44)), r.content.tabs.push(n(43)), r.content.tabs.forEach(function(e) {
            h.add(e)
        }), r.content.tabs[r.activeTab].activate(), n(9).token ? n(30).getMine().then(function(e) {
            window.pmUserInfo.data = {
                disabled: !0
            }, window.pmUserInfo.appendChild(document.createElement("div")), window.pmUserInfo.firstChild.style.backgroundImage = "url(" + e.icon + ")", window.pmUserInfo.firstChild.classList.add("userImage"), window.pmUserInfo.appendChild(document.createElement("div")), window.pmUserInfo.children[1].innerHTML = e.title, window.pmUserInfo.children[1].classList.add("userName")
        })["catch"](function(e) {}) : window.pmUserInfo.style.display = "none"
    }), e.exports = h
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return e ? (window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), o.hide(), l.show(), void(S = !1)) : (I.url = t.url, void s.play(t.url, {
            proxy: g.params.proxy
        }))
    }
    var r, o, a, s, l, c, u = n(16),
        d = n(68),
        h = n(6),
        p = new u({
            $node: window.pp
        }),
        f = n(2),
        m = n(1),
        g = n(3),
        v = n(65),
        y = n(12),
        b = n(71),
        w = new b({
            $node: window.playerProgressBar
        }),
        T = n(15),
        E = n(8),
        x = n(52),
        I = {
            channel: {},
            video: null,
            playlist: null,
            position: 0
        },
        S = ("MAG200" !== gSTB.GetDeviceModelExt(), !1),
        N = !1;
    p.addListener("show", function(e) {
        T.updateView({
            SEARCH: {
                icon: "search",
                visible: !0,
                text: gettext("Search")
            },
            MORE: {
                icon: "more",
                visible: !1,
                text: gettext("More")
            },
            GUIDE: {
                icon: "info",
                visible: !1,
                text: gettext("Guide")
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Back")
            }
        }), a.hide(), w.set(0), e.data && s.playContent(e.data)
    }), p.addListener("load", function() {
        var e = [{
            icon: "home",
            value: gettext("To the main"),
            onclick: function() {
                f.back()
            }
        }, {
            icon: "player-prev",
            value: gettext("Previous"),
            onclick: function() {
                I.playlist && I.playlist.length && I.position > 0 && (--I.position, s.playContent({
                    video: I.playlist[I.position]
                }))
            }
        }, {
            icon: "player-rew",
            value: gettext("Back"),
            onclick: function() {
                s.rewind(!1, 10)
            }
        }, {
            icon: "player-play",
            value: gettext("Play"),
            onclick: function() {
                s.playPause(), s.isPause ? (this.$icon.className = "icon player-play", this.$text.innerText = gettext("Play")) : (this.$icon.className = "icon player-pause", this.$text.innerText = gettext("Pause"))
            }
        }, {
            icon: "player-ff",
            value: gettext("Forward"),
            onclick: function() {
                s.rewind(!0, 10)
            }
        }, {
            icon: "player-next",
            value: gettext("Next"),
            onclick: function() {
                I.playlist && I.playlist.length && I.playlist.length > I.position + 1 && (++I.position, s.playContent({
                    video: I.playlist[I.position]
                }))
            }
        }];
        n(31);
        p.add(r = new h({
            $node: window.playerPanelButtons,
            data: e,
            size: e.length,
            type: h.prototype.TYPE_HORIZONTAL,
            render: function(e, t) {
                e.button = new d({
                    $node: e,
                    icon: t.icon,
                    value: t.value,
                    events: {
                        click: t.onclick
                    }
                }), e.classList.add(t.icon), p.add(e.button)
            },
            events: {
                "click:item": function(e) {
                    e.$item.button.emit("click")
                },
                keydown: function(e) {
                    switch (e.code) {
                        case m.right:
                        case m.left:
                        case m.home:
                        case m.end:
                            o.display(5), this.move(e.code);
                            break;
                        case m.ok:
                            this.events["click:item"] && this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            });
                            break;
                        case m.info:
                            e.stop = !0, o.display();
                            break;
                        case m.up:
                        case m.down:
                            break;
                        case m.space:
                        case m.playPause:
                            s.playPause(), e.stop = !0;
                            break;
                        case m.forward:
                            s.rewind(!0, 10);
                            break;
                        case m.rewind:
                            s.rewind(!1, 10);
                            break;
                        case m.pageDown:
                            I.playlist && I.playlist.length && I.playlist.length > I.position + 1 && (++I.position, s.playContent({
                                video: I.playlist[I.position]
                            }));
                            break;
                        case m.pageUp:
                            I.playlist && I.playlist.length && I.position > 0 && (--I.position, s.playContent({
                                video: I.playlist[I.position]
                            }))
                    }
                }
            }
        })), c = r.$body.children[3].button, a = n(45), a.addListener("show", function() {
            T.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !0,
                    text: gettext("Search")
                },
                MORE: {
                    visible: falseagent
                },
                GUIDE: {
                    icon: "info",
                    visible: !1,
                    text: gettext("Guide")
                },
                BACK: {
                    icon: "back",
                    visible: !0,
                    text: gettext("Back")
                }
            })
        }), a.addListener("hide", function() {
            T.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !0,
                    text: gettext("Search")
                },
                MORE: {
                    icon: "more",
                    visible: !1,
                    text: gettext("More")
                },
                GUIDE: {
                    visible: !1
                },
                BACK: {
                    icon: "back",
                    visible: !0,
                    text: gettext("Back")
                }
            })
        }), p.add(a), s = new v({
            $node: window.playerSpace,
            rewindTimeout: 600,
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case m.up:
                        case m.down:
                        case m.info:
                            return void o.display();
                        case m.ok:
                        case m.playPause:
                        case m.space:
                            e.stop = !0, this.playPause();
                            break;
                        case m.forward:
                        case m.right:
                            this.rewind(!0, 10);
                            break;
                        case m.rewind:
                        case m.left:
                            this.rewind(!1, 10);
                            break;
                        case m.pageDown:
                            I.playlist && I.playlist.length && I.position > 0 && (--I.position, s.playContent({
                                video: I.playlist[I.position]
                            }));
                            break;
                        case m.pageUp:
                            I.playlist && I.playlist.length && I.playlist.length > I.position + 1 && (++I.position, s.playContent({
                                video: I.playlist[I.position]
                            }))
                    }
                }
            }
        }), o = new y({
            $node: window.playerGrid,
            visible: !1,
            events: {
                show: function() {
                    r.focus(), r.focusIndex(3), T.updateView({
                        SEARCH: {
                            icon: "search",
                            visible: !0,
                            text: gettext("Search")
                        },
                        MORE: {
                            icon: "more",
                            visible: !1,
                            text: gettext("More")
                        },
                        GUIDE: {
                            icon: "info",
                            visible: !1,
                            text: gettext("Guide")
                        },
                        BACK: {
                            icon: "back",
                            visible: !0,
                            text: gettext("Back")
                        }
                    }), T.show()
                },
                hide: function() {
                    f.current && (T.hide(), s.focus())
                }
            }
        }), o.displayTimeout = -1, o.display = function(e) {
            var t = this;
            e ? (e = 1e3 * e, this.show(), this.displayTimeout && (clearTimeout(this.displayTimeout), this.displayTimeout = 0), this.displayTimeout = setTimeout(function() {
                t.hide(), t.displayTimeout = 0
            }, e)) : this.displayTimeout ? (clearTimeout(this.displayTimeout), this.displayTimeout = 0) : this.visible ? this.hide() : this.show()
        }, p.add(s), s.add(o), g.player = s, s.playContent = function(e) {
            var t;
            return window.playerChannelIcon.style.visibility = "hidden", window.playerChannelName.style.visibility = "hidden", S = !0, l.hide(), E.show(), window.ppPanelPlayer.classList.remove("transparent"), e.urlParseErrorCount || (e.urlParseErrorCount = 0), void 0 !== e.channel ? I.channel = e.channel : (t = e.video.channelId === I.channel.id ? I.channel.icon : !1, I.channel = {
                title: e.video.channelTitle,
                id: e.video.channelId,
                icon: t
            }), void 0 !== e.playlist && (I.playlist = e.playlist), void 0 !== e.position && (I.position = e.position), I.video = e.video, I.video.viewCount = I.video.viewCount.replace(/./g, ""), window.playerChannelName.innerText = I.channel.title, window.playerVideoName.innerHTML = I.video.title, window.playerVideoPublishedAt.innerText = gettext("Upload date") + ": " + I.video.publishedAt, window.playerVideoViewCount.innerText = ngettext("View", "Views", +I.video.viewCount) + ": " + I.video.viewCount, a.hide(), w.set(0), o.show(), T.show(), "" === e.video.duration ? (window.ppVideoParseErrorMessage.innerHTML = gettext("Live broadcasts are not supported"), o.hide(), l.show(), void(S = !1)) : void x.getInfo("https://www.youtube.com/watch?v=" + e.video.id, function(t, n) {
                var r, a, s;
                if (t) return "0:00" === e.video.duration ? window.ppVideoParseErrorMessage.innerHTML = gettext("Live broadcasts are not supported") : window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), o.hide(), l.show(), void(S = !1);
                if (0 === n.formats.length) return "0:00" === e.video.duration ? window.ppVideoParseErrorMessage.innerHTML = gettext("Live broadcasts are not supported") : window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), o.hide(), l.show(), void(S = !1);
                for (a = 0, s = n.formats.length; s > a; ++a) n.formats[a].resolution = n.formats[a].resolution || "", "mp4" === n.formats[a].container && n.formats[a].audioBitrate && (r ? r.resolution < n.formats[a].resolution && -1 !== n.formats[a].type.indexOf("video") && (r = n.formats[a]) : -1 !== n.formats[a].type.indexOf("video") && (r = n.formats[a]));
                r || (r = n.formats[0]), i(null, r)
            })
        }, s.addListeners({
            pause: function(e) {
                e.state ? (c.$icon.className = "icon player-play", c.$text.innerText = gettext("Play")) : (c.$icon.className = "icon player-pause", c.$text.innerText = gettext("Pause")), e.state ? a.visible || o.display() : o.display(5)
            },
            duration: function(e) {
                this.rewindHelper.isActive || this.setModeHelper.active || (w.set(e.sec), window.playerCurrentDuration.innerText = e.time)
            },
            "playback:begin": function() {
                I.urlParseErrorCount = !1, window.ppPanelPlayer.classList.add("transparent"), E.hide(), window.playerTotalDuration.innerText = I.video.duration, w.init({
                    value: 0,
                    max: gSTB.GetMediaLen()
                }), I.channel.icon ? (window.playerChannelIcon.style.backgroundImage !== 'url("' + I.channel.icon + '")' && (window.playerChannelIcon.style.backgroundImage = 'url("' + I.channel.icon + '")'), window.playerChannelIcon.style.visibility = "", window.playerChannelName.style.visibility = "") : window.playerChannelIcon.style.backgroundImage = "none", c.$icon.className = "icon player-pause", c.$text.innerText = gettext("Pause"), S = !1, o.display(5), N || T.updateView({
                    SEARCH: {
                        icon: "search",
                        visible: !0,
                        text: gettext("Search")
                    },
                    MORE: {
                        icon: "more",
                        visible: !1,
                        text: gettext("More")
                    },
                    GUIDE: {
                        icon: "info",
                        visible: !1,
                        text: gettext("Guide")
                    },
                    BACK: {
                        icon: "back",
                        visible: !0,
                        text: gettext("Back")
                    }
                }), N = !0
            },
            "get:info": function() {
                window.ppPanelPlayer.classList.add("transparent"), E.hide()
            },
            rewind: function(e) {
                var t = s.parseTime(e.time),
                    n = "";
                w.set(e.time), +t.hour && (n += t.hour + ":"), n += t.min + ":" + t.sec, window.playerCurrentDuration.innerText = n
            },
            "rewind:start": function() {
                w.$node.classList.add("rewind"), a.visible || o.display()
            },
            "rewind:apply": function() {
                w.$node.classList.remove("rewind"), o.display(6)
            },
            "position:input": function(e) {
                e.start && window.playerCurrentDuration.classList.add("setMode"), e.end && window.playerCurrentDuration.classList.remove("setMode"), w.set(e.sec), window.playerCurrentDuration.innerText = e.time
            },
            "content:end": function() {
                var e = JSON.parse(JSON.stringify(I));
                e.playlist && e.playlist.length > e.position + 1 ? (++e.position, e.video = e.playlist[e.position], e.channel = {
                    title: e.video.channelTitle,
                    id: e.video.channelId
                }, e.urlParseErrorCount = !1, s.playContent(e)) : o.show()
            },
            "content:error": function() {
                I.urlParseErrorCount || (I.urlParseErrorCount = 0), I.urlParseErrorCount > 2 ? (window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), l.show(), S = !1) : (++I.urlParseErrorCount, S = !1, s.playContent(I))
            }
        }), l = new y({
            $node: document.getElementById("ppVideoParseError"),
            visible: !1,
            focusable: !0,
            events: {
                show: function() {
                    E.hide(), o.hide(), this.focus(), window.ppPanelPlayer.classList.remove("transparent")
                },
                keydown: function(e) {
                    e.stop = !0, l.hide(), o.show()
                }
            }
        }), window.ppVideoParseErrorHeader.innerHTML = gettext("Error playing"), window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available")
    }), p.addListener("keydown", function(e) {
        switch (e.code) {
            case m.exit:
                S && (event.stop = !0);
                break;
            case m.back:
                a.visible ? (a.hide(), 0 === w.value ? f.back() : (T.show(), o.show())) : p.activeComponent === s ? f.back() : s.totalDurationSec === s.currentSec ? f.back() : o.hide();
                break;
            case m.stop:
                s.stop(), s.isPause = !1, c.emit("click"), E.hide(), window.ppPanelPlayer.classList.remove("transparent"),
                    o.show();
                break;
            case m.down:
                break;
            case m.playPause:
                s.playPause();
                break;
            case m.f3:
                f.navigate("ps")
        }
    }), p.addListener("hide", function() {
        E.hide(), s.stop(), o.hide(), a.hide()
    }), e.exports = p
}, function(e, t, n) {
    "use strict";
    var i, r, o, a = "ps",
        s = n(1),
        l = n(2),
        c = n(16),
        u = n(40),
        d = n(13),
        h = n(56),
        p = new(n(55)),
        f = n(57),
        m = n(15),
        g = (n(7), new c({
            $node: document.getElementById(a)
        })),
        v = new u({
            $node: document.getElementById("psSearch"),
            $body: document.getElementById("psSearchInput")
        }),
        y = n(8),
        b = !0,
        w = " ",
        T = null,
        E = -1;
    g.addListener("keydown", function(e) {
        e.code === s.back && l.back()
    }), g.addListener("hide", function() {
        y.hide()
    }), r = f(function(e) {
        w = e.value, T.model.filter({
            searchQuery: e.value
        }), clearTimeout(E), E = setTimeout(function() {
            y.hide()
        }, 5e3)
    }, 1e3), g.addListener("show", function() {
        m.updateView({
            SEARCH: {
                icon: "search",
                visible: !1,
                text: ""
            },
            MORE: {
                icon: "more",
                visible: !1,
                text: ""
            },
            GUIDE: {
                icon: "info",
                visible: !1,
                text: ""
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Back")
            }
        }), y.hide(), g.activeComponent || (b && (window.psSearchIcon.style.display = "block", setTimeout(function() {
            window.psSearchIcon.style.display = "inline-table"
        }, 0)), null !== g.activeComponent && g.activeComponent !== v || setTimeout(function() {
            v.focus()
        }, 0))
    }), g.addListener("load", function() {
        i = n(46), v.addListener("keydown", function(e) {
            e.code === s.down ? (o = v.getCaretPosition(), i.focus()) : e.code === s.up && T.visible ? (T.focus(), T.$focusItem || T.focusIndex(0)) : e.code === s.back && 0 === this.$body.value.length && l.back()
        }), v.addListener("input", function(e) {
            T.hide(), y.show(), r(e)
        }), i.addListener("overflow", function(e) {
            e.direction === s.up && v.focus()
        }), i.addListener("click:item", function(e) {
            "symbol" === e.$item.data.className ? (v.addChar(e.$item.data.value, o), ++o) : -1 !== e.$item.data.className.indexOf("keySpace") ? (v.addChar(" ", o), o = v.getCaretPosition()) : -1 !== e.$item.data.className.indexOf("keyDelete") ? (v.removeChar(), o = v.getCaretPosition()) : -1 !== e.$item.data.className.indexOf("delete") && (v.setValue(""), o = v.getCaretPosition())
        }), i.addListener("keydown", function() {
            r({
                value: v.value
            })
        }), T = new d({
            $node: document.getElementById("psListVideos"),
            model: new h({
                order: "relevance"
            }),
            size: 5,
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case s.down:
                            v.focus();
                            break;
                        case s.right:
                            this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                            break;
                        case s.left:
                            this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : 1 === this.$focusItem.index ? this.focusIndex(0) : this.move(e.code);
                            break;
                        case s.ok:
                            this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            })
                    }
                },
                "click:item": function(e) {
                    "video" === e.$item.data.type ? l.navigate("pp", {
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    }) : "playlist" === e.$item.data.type ? p.getPage({
                        playlistId: e.$item.data.playlistId
                    }, function(t, n) {
                        l.navigate("pp", {
                            channel: e.$item.data.channel,
                            video: n[0],
                            playlist: n,
                            position: 0
                        })
                    }) : "channel" === e.$item.data.type && l.navigate("pm", {
                            channel: e.$item.data
                        })
                },
                "view:ready": function() {
                    clearTimeout(E), y.hide(), this.show(), this.focusIndex(0)
                }
            },
            render: function(e, t) {
                var n, i, r;
                e.ready ? (e.$videoThumb.className = "thumb " + t.type, e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", e.$videoTitle.innerText = t.title, e.$videoTitle.className = "title " + t.type, e.$videoAthour.className = "uploader " + t.type, "video" === t.type ? (e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = t.locale.viewCount, e.$dateAdded.innerText = t.locale.publishedAt, e.$videoDuration.innerText = t.duration) : "channel" === t.type ? (e.$videoAthour.innerText = t.locale.subscriberCount, e.$viewCounter.innerText = "", e.$dateAdded.innerText = "", e.$videoDuration.innerText = "") : (e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = "", e.$dateAdded.innerText = "", e.$videoDuration.innerText = ""), "playlist" === t.type ? e.$videoDuration.className = "icon playlist" : e.$videoDuration.className = "duration") : (n = document.createElement("div"), n.className = "container", e.appendChild(n), i = document.createElement("div"), i.className = "tileTop", n.appendChild(i), r = document.createElement("div"), r.className = "tileBottom", n.appendChild(r), e.$videoThumb = document.createElement("div"), e.$videoThumb.className = "thumb " + t.type, e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", i.appendChild(e.$videoThumb), e.$videoDuration = document.createElement("div"), "playlist" === t.type ? e.$videoDuration.className = "icon playlist" : e.$videoDuration.className = "duration", t.duration ? e.$videoDuration.innerText = t.duration : e.$videoDuration.innerText = "", i.appendChild(e.$videoDuration), e.$videoTitle = document.createElement("div"), e.$videoTitle.className = "title " + t.type, e.$videoTitle.innerText = t.title, r.appendChild(e.$videoTitle), e.$videoAthour = document.createElement("div"), e.$videoAthour.className = "uploader " + t.type, t.channelTitle ? e.$videoAthour.innerText = t.locale.channelTitle : "channel" === t.type ? e.$videoAthour.innerText = t.locale.subscriberCount : e.$videoAthour.innerText = "", r.appendChild(e.$videoAthour), e.$viewCounter = document.createElement("div"), e.$viewCounter.className = "viewCount", "video" === t.type ? e.$viewCounter.innerText = t.locale.viewCount : e.$viewCounter.innerText = "", r.appendChild(e.$viewCounter), e.$dateAdded = document.createElement("div"), e.$dateAdded.className = "uploaded", "video" === t.type ? e.$dateAdded.innerText = t.locale.publishedAt : e.$dateAdded.innerText = "", r.appendChild(e.$dateAdded), e.ready = !0)
            }
        })
    }), e.exports = g
}, function(e, t, n) {
    "use strict";

    function i(e) {
        r.call(this), this.data = e || {}
    }
    var r = n(5);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.idName = "id", i.prototype.clear = function() {
        var e = this.data;
        return Object.keys(e).length > 0 ? (this.data = {}, this.events.clear && this.emit("clear", {
            data: e
        }), !0) : !1
    }, i.prototype.init = function(e) {
        return e ? (this.clear(), this.data = e, this.events.init && this.emit("init", {
            data: e
        }), !0) : !1
    }, i.prototype.has = function(e) {
        return this.data.hasOwnProperty(e)
    }, i.prototype.get = function(e) {
        return this.data[e]
    }, i.prototype.set = function(e, t) {
        var n = e in this.data,
            i = {
                name: e,
                curr: t
            };
        return n ? (i.prev = this.data[e], t !== i.prev ? (this.data[e] = t, this.events.change && this.emit("change", i), !0) : !1) : (this.data[e] = t, this.events.change && this.emit("change", i), !0)
    }, i.prototype.unset = function(e) {
        var t, n = e in this.data;
        return n ? (t = {
            name: e,
            prev: this.data[e]
        }, delete this.data[e], this.events.change && this.emit("change", t), !0) : !1
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = this;
        this.isPLaying = !1, this.isPause = !1, this.totalDuration = "", this.totalDurationSec = 0, this.currentTime = "", this.currentSec = 0, this.rewindHelper = {
            isActive: !1,
            startTime: 0,
            time: 0,
            timeout: 0,
            duration: void 0,
            timeoutDuration: !1
        }, this.setModeHelper = {
            active: !1,
            timeout: 0,
            time: 0,
            timeStr: "",
            count: 0,
            length: 0,
            sec: 0,
            timeoutDuration: 0
        }, this.audioPIDs = [], this.currentAudioPID = 0, this.activeAspect = 0, this.subtitlePIDs = [], this.currentSubtitle = null, this.durationInterval = 0, this.allowInputPosition = !0, e = e || {}, a.call(this, e), this.$node.classList.add("player"), this.init(e), r.addListener("media", function(e) {
            i.prototype.mediaListener.call(t, e)
        })
    }
    var r = n(3),
        o = n(1),
        a = n(4);
    i.prototype = Object.create(a.prototype), i.prototype.constructor = i, i.prototype.ASPECT_TYPE_FIT = 16, i.prototype.ASPECT_TYPE_BIG = 64, i.prototype.ASPECT_TYPE_OPTIMAL = 80, i.prototype.ASPECT_TYPE_ZOOM = 0, i.prototype.aspects = [{
        name: "fit",
        mode: i.prototype.ASPECT_TYPE_FIT
    }, {
        name: "big",
        mode: i.prototype.ASPECT_TYPE_BIG
    }, {
        name: "opt",
        mode: i.prototype.ASPECT_TYPE_OPTIMAL
    }, {
        name: "exp",
        mode: i.prototype.ASPECT_TYPE_ZOOM
    }], i.prototype.STEREO_MODE_OFF = 0, i.prototype.STEREO_MODE_OVER_UNDER = 1, i.prototype.STEREO_MODE_OVER_UNDER_HD = 2, i.prototype.STEREO_MODE_SIDE_BY_SIDE = 3, i.prototype.stereoModes = [{
        mode: i.prototype.STEREO_MODE_OFF,
        name: "Off"
    }, {
        mode: i.prototype.STEREO_MODE_OVER_UNDER,
        name: "Over-Under"
    }, {
        mode: i.prototype.STEREO_MODE_OVER_UNDER_HD,
        name: "Over-Under HD"
    }, {
        mode: i.prototype.STEREO_MODE_SIDE_BY_SIDE,
        name: "Side-by-side"
    }], i.prototype.defaultEvents = {
        keydown: function(e) {
            switch (e.code) {
                case o.ok:
                case o.playPause:
                    this.playPause();
                    break;
                case o.stop:
                    this.stop();
                    break;
                case o.forward:
                case o.right:
                    this.rewind(!0);
                    break;
                case o.rewind:
                case o.left:
                    this.rewind(!1);
                    break;
                case o.f4:
                case 117:
                    this.nextAspect();
                    break;
                case o.f1:
                    this.nextAudioTrack();
                    break;
                case o.f2:
                    this.nextSubtitle();
                    break;
                case o.f3:
                    this.nextViewMode();
                    break;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                    this.inputPosition(e.code)
            }
        }
    }, i.prototype.mediaListener = function(e) {
        var t, n, i, o, a, s, l = this,
            c = {};
        switch (e.code) {
            case r.EVENT_PLAYBACK_BEGIN:
                l.isPLaying = !0, l.durationInterval && (clearInterval(l.durationInterval), l.durationInterval = 0), l.durationInterval = setInterval(function() {
                    l.events.duration && (l.currentSec = gSTB.GetPosTime(), n = l.parseTime(l.currentSec), l.currentTime = (n.hour > 0 ? n.hour + ":" : "") + n.min + ":" + n.sec, l.emit("duration", {
                        sec: l.currentSec,
                        time: l.currentTime
                    }))
                }, 1e3), l.events["playback:begin"] && l.emit("playback:begin");
                break;
            case r.EVENT_GET_MEDIA_INFO:
                l.totalDurationSec = gSTB.GetMediaLen(), l.totalDurationSec > 3600 ? l.setModeHelper.length = 6 : l.setModeHelper.length = 4, t = l.parseTime(gSTB.GetMediaLen()), l.totalDuration = (t.hour > 0 ? t.hour + ":" : "") + t.min + ":" + t.sec, c.totalDuration = l.totalDuration, c.totalDurationSec = l.totalDurationSec;
                try {
                    a = gSTB.GetAudioPIDs().replace(/pid:/g, '"pid":').replace(/lang:/g, '"lang":'), l.audioPIDs = JSON.parse(a)
                } catch (u) {}
                try {
                    s = gSTB.GetSubtitlePIDs().replace(/pid:/g, '"pid":').replace(/lang:/g, '"lang":'), l.subtitlePIDs = JSON.parse(s)
                } catch (u) {}
                l.currentAudioPID = 0, "" !== l.audioPIDs[0].lang[0] ? c.audioPid = l.audioPIDs[0].lang[0] : c.audioPid = void 0, l.currentSubtitle = null, c.subtitles = null, c.stereoMode = {
                    type: gSTB.Get3DConversionMode(),
                    name: l.stereoModes[gSTB.Get3DConversionMode()].name
                }, l.events["get:info"] && l.emit("get:info", c);
                break;
            case r.EVENT_CONTENT_ERROR:
                l.isPLaying = !1, l.events["content:error"] && l.emit("content:error");
                break;
            case r.EVENT_END_OF_FILE:
                l.currentSec = l.totalDurationSec, l.isPLaying = !1, l.events["content:end"] && l.emit("content:end");
                break;
            case r.EVENT_SUBTITLE_LOAD_ERROR:
                l.subtitlePIDs.pop();
                break;
            case r.EVENT_HDMI_DISCONNECT:
                if (i = parseInt(JSON.parse(gSTB.GetEnv('{"varList":["hdmi_event_delay"]}')).result.hdmi_event_delay, 10), 0 === i) return;
                l.hdmiEventTimeout = setTimeout(function() {
                    l.isPLaying && stbStorage.setItem("standByPlayback", JSON.stringify({
                        url: l.playUrl,
                        position: l.currentSec
                    })), gSTB.StandBy(!0), l.hdmiEventTimeout = null
                }, i);
                break;
            case r.EVENT_HDMI_CONNECT:
                if (i = parseInt(JSON.parse(gSTB.GetEnv('{"varList":["hdmi_event_delay"]}')).result.hdmi_event_delay, 10), 0 === i) return;
                if (l.hdmiEventTimeout) return clearTimeout(l.hdmiEventTimeout), void(l.hdmiEventTimeout = null);
                gSTB.StandBy(!1), o = JSON.parse(stbStorage.getItem("standByPlayback")), i && (l.play(o.url, {
                    position: o.position
                }), stbStorage.removeItem("standByPlayback"))
        }
    }, i.prototype.init = function(e) {
        e.allowInputPosition && (this.allowInputPosition = e.allowInputPosition), e.rewindDuration && (this.rewindHelper.duration = e.rewindDuration), e.rewindTimeout && (this.rewindHelper.timeoutDuration = e.rewindTimeout), e.inputPositionTimeout && (this.setModeHelper.timeoutDuration = e.inputPositionTimeout), gSTB.InitPlayer(), gSTB.SetAspect(16), gSTB.SetVideoControl(0), gSTB.SetVideoState(0), gSTB.SetMode(0), gSTB.SetWinAlphaLevel(0, 255), gSTB.SetWinAlphaLevel(1, 255), gSTB.SetPIG(1, 0, 0, 0), gSTB.Set3DConversionMode(0), gSTB.SetTopWin(0)
    }, i.prototype.play = function(e, t) {
        var n, i;
        this.totalDurationSec = 0, this.currentSec = 0, this.playUrl = e, t = t || {}, n = t.solution ? t.solution : "auto", i = t.position ? " position:" + t.position : "", gSTB.Play(n + " " + e + i, t.proxy)
    }, i.prototype.stop = function() {
        gSTB.Stop(), clearInterval(this.durationInterval), this.isPLaying = !1, this.isPause = !1
    }, i.prototype.playPause = function() {
        this.isPause ? gSTB.Continue() : gSTB.Pause(), this.isPause = !this.isPause, this.events.pause && this.emit("pause", {
            state: this.isPause
        })
    }, i.prototype.rewind = function(e, t) {
        var n, i = this;
        t = t || this.rewindHelper.duration || 15, this.rewindHelper.isActive || (this.currentSec = gSTB.GetPosTime(), n = i.parseTime(i.currentSec), this.currentTime = (n.hour > 0 ? n.hour + ":" : "") + n.min + ":" + n.sec, this.rewindHelper.isActive = !0, this.rewindHelper.startTime = this.currentSec, this.rewindHelper.time = this.currentSec, this.events["rewind:start"] && this.emit("rewind:start")), e ? this.rewindHelper.time + t < this.totalDurationSec ? this.rewindHelper.time += t : this.rewindHelper.time = this.totalDurationSec : this.rewindHelper.time - t > 0 ? this.rewindHelper.time -= t : this.rewindHelper.time = 0, this.rewindHelper.timeout && clearTimeout(this.rewindHelper.timeout), this.events.rewind && this.emit("rewind", {
            time: this.rewindHelper.time,
            shift: this.rewindHelper.time - this.rewindHelper.startTime
        }), this.rewindHelper.timeoutDuration ? this.rewindHelper.timeout = setTimeout(function() {
            return clearInterval(i.durationInterval), i.durationInterval = 0, i.rewindHelper.isActive = !1, i.events["rewind:apply"] && i.emit("rewind:apply"), i.currentSec = i.rewindHelper.time, i.rewindHelper.timeout = 0, i.rewindHelper.time === i.totalDurationSec ? void(i.events["content:end"] && i.emit("content:end")) : void gSTB.SetPosTime(i.rewindHelper.time)
        }, this.rewindHelper.timeoutDuration) : (clearInterval(i.durationInterval), i.durationInterval = 0, gSTB.SetPosTime(i.rewindHelper.time), i.currentSec = i.rewindHelper.time, i.rewindHelper.isActive = !1, i.events["rewind:apply"] && i.emit("rewind:apply"))
    }, i.prototype.nextAudioTrack = function() {
        return this.audioPIDs.length <= 1 ? !1 : (this.currentAudioPID < this.audioPIDs.length - 1 ? this.currentAudioPID++ : this.currentAudioPID = 0, gSTB.SetAudioPID(this.audioPIDs[this.currentAudioPID].pid), this.events["audio:track"] && this.emit("audio:track", {
            lang: this.audioPIDs[this.currentAudioPID].lang[0],
            pid: this.audioPIDs[this.currentAudioPID].pid
        }), !0)
    }, i.prototype.setAudioTrack = function(e) {
        gSTB.SetAudioPID(this.audioPIDs[e].pid), this.currentAudioPID = e, this.events["audio:track"] && this.emit("audio:track", {
            lang: this.audioPIDs[this.currentAudioPID].lang[0],
            pid: this.audioPIDs[this.currentAudioPID].pid
        })
    }, i.prototype.nextAspect = function() {
        this.activeAspect++, this.activeAspect > this.aspects.length - 1 && (this.activeAspect = 0), gSTB.SetAspect(this.aspects[this.activeAspect].mode), this.events["aspect:change"] && this.emit("aspect:change", {
            type: this.aspects[this.activeAspect].mode,
            name: this.aspects[this.activeAspect].name
        })
    }, i.prototype.setAspect = function(e) {
        this.activeAspect = e, gSTB.SetAspect(this.aspects[this.activeAspect].mode), this.events["aspect:change"] && this.emit("aspect:change", {
            type: this.aspects[this.activeAspect].type,
            name: this.aspects[this.activeAspect].name
        })
    }, i.prototype.nextSubtitle = function() {
        return this.subtitlePIDs.length <= 0 ? (this.events["subtitles:change"] && this.emit("subtitles:change", null), !1) : (null === this.currentSubtitle ? this.currentSubtitle = 0 : this.currentSubtitle < this.subtitlePIDs.length - 1 ? this.currentSubtitle++ : this.currentSubtitle = null, null !== this.currentSubtitle ? (gSTB.SetSubtitlePID(this.subtitlePIDs[this.currentSubtitle].pid), gSTB.SetSubtitles(!0), this.events["subtitles:change"] && this.emit("subtitles:change", {
            lang: this.subtitlePIDs[this.currentSubtitle].lang[0],
            pid: this.subtitlePIDs[this.currentSubtitle].pid
        })) : (gSTB.SetSubtitles(!1), this.events["subtitles:change"] && this.emit("subtitles:change", null)), !0)
    }, i.prototype.setSubtitle = function(e) {
        gSTB.SetSubtitlePID(this.subtitlePIDs[e].pid), gSTB.SetSubtitles(!0), this.currentSubtitle = e, this.events["subtitles:change"] && this.emit("subtitles:change", {
            lang: this.subtitlePIDs[this.currentSubtitle].lang[0],
            pid: this.subtitlePIDs[this.currentSubtitle].pid
        })
    }, i.prototype.hideSubtitles = function() {
        gSTB.SetSubtitles(!1), this.events["subtitles:change"] && this.emit("subtitles:change", null)
    }, i.prototype.loadExternalSubtitle = function(e) {
        e && "string" == typeof e && (gSTB.LoadExternalSubtitles(e), this.subtitlePIDs.push({
            pid: 8192
        }), this.events["subtitles:load"] && this.emit("subtitles:load", null))
    }, i.prototype.nextViewMode = function() {
        var e = gSTB.Get3DConversionMode();
        3 > e ? e++ : e = 0, gSTB.Set3DConversionMode(e), this.events["viewmode:change"] && this.emit("viewmode:change", {
            type: this.stereoModes[e].mode,
            name: this.stereoModes[e].name
        })
    }, i.prototype.setViewMode = function(e) {
        e > 0 && 3 >= e && (gSTB.Set3DConversionMode(e), this.events["viewmode:change"] && this.emit("viewmode:change", {
            type: this.stereoModes[e].mode,
            name: this.stereoModes[e].name
        }))
    }, i.prototype.inputPosition = function(e) {
        var t, n, i, r, o, a = this,
            s = parseInt(e, 10) - 48,
            l = [],
            c = 0;
        this.allowInputPosition && (this.setModeHelper.active || (6 === this.setModeHelper.length ? this.setModeHelper.time = [0, 0, 0, 0, 0, 0] : this.setModeHelper.time = [0, 0, 0, 0], this.setModeHelper.count = 0, this.setModeHelper.active = !0, 6 === this.setModeHelper.length ? this.events["position:input"] && this.emit("position:input", {
                time: "00:00:00",
                start: !0,
                sec: 0
            }) : this.events["position:input"] && this.emit("position:input", {
                time: "00:00",
                start: !0,
                sec: 0
            })), this.setModeHelper.count <= this.setModeHelper.length && (this.setModeHelper.time.shift(), this.setModeHelper.time.push(s), l = this.setModeHelper.time.slice(0, this.setModeHelper.length + 1), 6 === this.setModeHelper.length ? this.setModeHelper.timeStr = l[0].toString() + l[1].toString() + ":" + l[2].toString() + l[3].toString() + ":" + l[4].toString() + l[5].toString() : this.setModeHelper.timeStr = l[0].toString() + l[1].toString() + ":" + l[2].toString() + l[3].toString(), this.setModeHelper.count++, 6 === this.setModeHelper.length && (i = l.shift() + l.shift().toString(), c += 3600 * parseInt(i, 10)), r = l.shift() + l.shift().toString(), c += 60 * parseInt(r, 10), o = l.shift() + l.shift().toString(), c += parseInt(o, 10), c > this.totalDurationSec && (c = this.totalDurationSec), this.setModeHelper.sec = c, this.events["position:input"] && this.emit("position:input", {
            time: a.setModeHelper.timeStr,
            sec: c
        })), clearTimeout(this.setModeHelper.timeout), t = this.setModeHelper.timeoutDuration ? this.setModeHelper.timeoutDuration : 2e3, this.setModeHelper.timeout = setTimeout(function() {
            a.setModeHelper.active = !1, clearInterval(a.durationInterval), a.durationInterval = 0, gSTB.SetPosTime(a.setModeHelper.sec), a.currentSec = a.setModeHelper.sec, n = a.parseTime(a.currentSec), a.currentTime = (n.hour > 0 ? n.hour + ":" : "") + n.min + ":" + n.sec, a.events["position:input"] && a.emit("position:input", {
                time: a.setModeHelper.timeStr,
                sec: a.setModeHelper.sec,
                end: !0
            })
        }, t))
    }, i.prototype.setPosition = function(e) {
        var t;
        gSTB.SetPosTime(e), this.currentSec = e, t = self.parseTime(self.currentSec), this.currentTime = (t.hour > 0 ? t.hour + ":" : "") + t.min + ":" + t.sec, this.events["position:set"] && this.emit("position:set", {
            sec: e
        })
    }, i.prototype.parseTime = function(e) {
        var t, n, i;
        return e >= 0 ? (t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), i = e - 3600 * t - 60 * n, 10 > t && (t = "0" + t), 10 > i && (i = "0" + i), 10 > n && (n = "0" + n)) : (e = Math.abs(e), t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), i = e - 3600 * t - 60 * n, 10 > t && (t = "0" + t), 10 > i && (i = "0" + i), 10 > n && (n = "0" + n), t = "-" + t), {
            hour: t,
            min: n,
            sec: i
        }
    }, i.prototype.addListener = function(e, t) {
        var n;
        a.prototype.addListener.call(this, e, t), "duration" === e && (this.currentSec = gSTB.GetPosTime(), n = this.parseTime(this.currentSec), this.currentTime = (n.hour > 0 ? n.hour + ":" : "") + n.min + ":" + n.sec, this.emit("duration", {
            sec: this.currentSec,
            time: this.currentTime
        }))
    }, e.exports = i
}, function(e, t) {
    "use strict";
    if (!("classList" in document.documentElement)) {
        var n = Array.prototype,
            i = n.indexOf,
            r = n.slice,
            o = n.push,
            a = n.splice,
            s = n.join;
        window.DOMTokenList = function(e) {
            if (this._element = e, e.className !== this._classCache) {
                if (this._classCache = e.className, !this._classCache) return;
                var t, n = this._classCache.replace(/^\s+|\s+$/g, "").split(/\s+/);
                for (t = 0; t < n.length; t++) o.call(this, n[t])
            }
        }, window.DOMTokenList.prototype = {
            add: function(e) {
                this.contains(e) || (o.call(this, e), this._element.className = r.call(this, 0).join(" "))
            },
            contains: function(e) {
                return -1 !== i.call(this, e)
            },
            item: function(e) {
                return this[e] || null
            },
            remove: function(e) {
                var t = i.call(this, e); - 1 !== t && (a.call(this, t, 1), this._element.className = r.call(this, 0).join(" "))
            },
            toString: function() {
                return s.call(this, " ")
            },
            toggle: function(e) {
                return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
            }
        }, Object.defineProperty(Element.prototype, "classList", {
            get: function() {
                return new window.DOMTokenList(this)
            }
        })
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = {};
        return e.split("&").forEach(function(e) {
            e = e.split("="), 2 === e.length && (t[e[0]] = decodeURIComponent(e[1]))
        }), t
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, e.className = "button " + (e.className || ""), r.call(this, e), e.icon && (this.$icon = this.$body.appendChild(document.createElement("div")), this.$icon.className = "icon " + e.icon), this.$text = this.$body.appendChild(document.createElement("div")), this.$text.classList.add("text"), e.value && (this.$text.innerText = e.value)
    }
    var r = n(4),
        o = n(1);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.clickDuration = 200, i.prototype.defaultEvents = {
        click: function() {
            var e = this;
            this.$node.classList.add("click"), setTimeout(function() {
                e.$node.classList.remove("click")
            }, this.clickDuration)
        },
        keydown: function(e) {
            e.code === o.ok && this.events.click && this.emit("click", {
                event: e
            })
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, this.map = [], this.$focusItem = null, this.data = [], this.cycleX = !0, this.cycleY = !0, this.focusX = 0, this.focusY = 0, e.className = "grid " + (e.className || ""), s.call(this, e), this.init(e)
    }

    function r(e) {
        var t, n, i;
        for (t = 0; t < e.length; t++)
            for (n = 0; n < e[t].length; n++) i = e[t][n], "object" != typeof i ? i = e[t][n] = {
                value: e[t][n],
                colSpan: 1,
                rowSpan: 1
            } : (i.colSpan = i.colSpan || 1, i.rowSpan = i.rowSpan || 1);
        return e
    }

    function o(e, t, n, i, r, o) {
        var a, s;
        for (a = n; n + r > a; a++) {
            for (e.length < a + 1 && e.push([]); void 0 !== e[a][t];) t++;
            for (s = t; t + i > s; s++) e[a].length < s + 1 && e[a].push(), e[a][s] = o, void 0 === o.x && (o.x = s), void 0 === o.y && (o.y = a)
        }
    }

    function a(e) {
        var t, n, i, r = [];
        for (t = 0; t < e.length; t++)
            for (n = 0; n < e[t].length; n++) i = e[t][n], o(r, n, t, i.colSpan, i.rowSpan, i.$item), delete i.$item;
        return r
    }
    var s = n(4),
        l = n(1);
    i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.renderItemDefault = function(e, t) {
        e.innerText = t.value
    }, i.prototype.renderItem = i.prototype.renderItemDefault, i.prototype.defaultEvents = {
        mousewheel: function(e) {
            e.wheelDeltaY && this.move(e.wheelDeltaY > 0 ? l.up : l.down), e.wheelDeltaX && this.move(e.wheelDeltaX > 0 ? l.left : l.right)
        },
        keydown: function(e) {
            switch (e.code) {
                case l.up:
                case l.down:
                case l.right:
                case l.left:
                    this.move(e.code);
                    break;
                case l.ok:
                    this.events["click:item"] && this.emit("click:item", {
                        $item: this.$focusItem,
                        event: e
                    })
            }
        }
    }, i.prototype.init = function(e) {
        var t, n, i, o, s, l, c, u, d = this,
            h = !1,
            p = function(e) {
                this.data.disable !== !0 && (d.focusItem(this), d.events["click:item"] && d.emit("click:item", {
                    $item: this,
                    event: e
                }))
            },
            f = function(u) {
                if (u && d.data !== u && (d.data = u, h = !0), e.render && d.renderItem !== e.render && (d.renderItem = e.render, h = !0), h) {
                    for (d.$table = document.createElement("table"), s = document.createElement("tbody"), d.data = r(d.data), t = 0; t < d.data.length; t++) {
                        for (i = s.insertRow(), n = 0; n < d.data[t].length; n++) o = i.insertCell(-1), o.className = "item", c = d.data[t][n], c.$item = o, o.colSpan = c.colSpan, o.rowSpan = c.rowSpan, c.focus && (l = o), c.disable && o.classList.add("disable"), c.mark && o.classList.add("mark"), d.renderItem(o, c), o.data = c, o.addEventListener("click", p);
                        s.appendChild(i)
                    }
                    d.map = a(d.data), d.$body.innerText = null, d.$table.appendChild(s), d.$body.appendChild(d.$table), l ? d.focusItem(l) : d.focusItem(d.map[0][0])
                }
            };
        void 0 !== e.cycleX && (this.cycleX = e.cycleX), void 0 !== e.cycleY && (this.cycleY = e.cycleY), e.provider && (this.provider = e.provider, this.sizeX = e.sizeX, this.sizeY = e.sizeY), e.translate && (this.translate = e.translate), e.provider ? (u = this.provider.get(null, function(e, t) {
            e && d.events["data:error"] && d.emit("data:error", e), f(d.translate(t)), d.events["data:ready"] && d.emit("data:ready")
        }), this.events["data:get"] && this.emit("data:get", {
            fresh: u
        })) : f(e.data)
    }, i.prototype.defaultTranslate = function(e) {
        var t, n, i, r = [];
        for (t = 0; t < this.sizeY; t++) {
            for (i = [], n = 0; n < this.sizeX; n++) i[n] = e[t * this.sizeX + n];
            r[t] = i
        }
        return r
    }, i.prototype.translate = i.prototype.defaultTranslate, i.prototype.move = function(e) {
        for (var t, n, i, r = this.focusX, o = this.focusY, a = !0, s = !1, c = !1; a;) {
            switch (e) {
                case l.up:
                    o > 0 ? o-- : (this.cycleY && (o = this.map.length - 1, c = !0), s = !0);
                    break;
                case l.down:
                    o < this.map.length - 1 ? o++ : (this.cycleY && (o = 0, c = !0), s = !0);
                    break;
                case l.right:
                    r < this.map[o].length - 1 ? r++ : (this.cycleX && (r = 0, c = !0), s = !0);
                    break;
                case l.left:
                    r > 0 ? r-- : (this.cycleX && (r = this.map[o].length - 1, c = !0), s = !0)
            }
            r === this.focusX && o === this.focusY && (a = !1), this.map[o][r] !== this.map[this.focusY][this.focusX] && this.map[o][r].data.disable !== !0 && (a = !1), s && (a = !1, this.map[o][r].data.disable === !0 && (r = this.focusX, o = this.focusY))
        }
        this.focusItem(this.map[o][r]), this.focusX = r, this.focusY = o, s && (this.provider && (t = this.provider.get(e, function(e, t) {
            if (e && self.events["data:error"]) return self.emit("data:error", e), !1;
            if (t) {
                for (self.data = self.translate(t), n = 0; n < self.sizeY - 1; n++)
                    for (i = 0; i < self.sizeX; i++) self.renderItem(self.map[n][i], self.data[n][i]);
                self.events["data:ready"] && self.emit("data:ready")
            }
        }), this.events["data:get"] && this.emit("data:get", {
            fresh: t
        })), this.events.overflow && this.emit("overflow", {
            direction: e,
            cycle: c
        }))
    }, i.prototype.focusItem = function(e) {
        var t = this.$focusItem;
        return e && t !== e && e.data.disable !== !0 ? (null !== t && (t.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: t
        })), this.focusX = e.x, this.focusY = e.y, this.$focusItem = e, e.classList.add("focus"), this.events["focus:item"] && this.emit("focus:item", {
            $prev: t,
            $curr: e
        }), !0) : !1
    }, i.prototype.markItem = function(e, t) {
        t ? e.classList.add("mark") : e.classList.remove("mark"), e.data.mark = t
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, e.className = "modalBox " + (e.className || ""), e.$body = document.createElement("div"), e.$body.className = "body", r.call(this, e), this.$node.appendChild(document.createElement("div").appendChild(this.$body).parentNode)
    }
    var r = n(4);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e) {
        e = e || {}, this.max = 100, this.min = 0, this.value = 0, this.step = 1, e.focusable = e.focusable || !1, e.className = "progressBar " + (e.className || ""), r.call(this, e), this.$value = this.$body.appendChild(document.createElement("div")), this.$value.className = "value", this.init(e)
    }
    var r = n(4);
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.set = function(e) {
        var t = this.value;
        return this.value !== e && e <= this.max && e >= this.min ? (this.value = e, e = Math.abs(this.value - this.min) / this.step, 100 === e && this.events.done && this.emit("done"), this.$value.style.width = e + "%", this.events.change && this.emit("change", {
            curr: this.value,
            prev: t
        }), !0) : !1
    }, i.prototype.init = function(e) {
        void 0 !== e.max && (this.max = e.max), void 0 !== e.min && (this.min = e.min), void 0 !== e.value && (this.value = e.value), this.step = Math.abs(this.max - this.min) / 100, this.$value.style.width = Math.abs(this.min - this.value) / this.step + "%"
    }, e.exports = i
}]);