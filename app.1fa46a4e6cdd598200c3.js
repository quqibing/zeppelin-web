! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";
    n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(44), n(45), n(46), n(47), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59)
}, function (e, t) {
    "use strict";

    function n() {
        var e = angular.injector(["ng"]).get("$http"),
            t = angular.injector(["zeppelinWebApp"]).get("baseUrlSrv");
        return e.defaults.withCredentials = !0, jQuery.ajaxSetup({
            dataType: "json",
            xhrFields: {
                withCredentials: !0
            },
            crossDomain: !0
        }), e.get(t.getRestApiBase() + "/security/ticket").then(function (e) {
            o.run(["$rootScope", function (t) {
                t.ticket = angular.fromJson(e.data).body
            }])
        }, function (e) {})
    }

    function r() {
        o.run(["$rootScope", "$location", function (e, t) {
            e.$on("$routeChangeStart", function (n, r, o) {
                e.ticket || !r.$$route || r.$$route.publicAccess || t.path("/")
            })
        }]), angular.bootstrap(document, ["zeppelinWebApp"])
    }
    var o = angular.module("zeppelinWebApp", ["ngCookies", "ngAnimate", "ngRoute", "ngSanitize", "angular-websocket", "ui.ace", "ui.bootstrap", "as.sortable", "ngTouch", "ngDragDrop", "angular.filter", "monospaced.elastic", "puElasticInput", "xeditable", "ngToast", "focus-if", "ngResource", "ngclipboard"]).filter("breakFilter", function () {
        return function (e) {
            if (e) return e.replace(/\n/g, "<br />")
        }
    }).config(["$httpProvider", "$routeProvider", "ngToastProvider", function (e, t, n) {
        e.defaults.withCredentials = !0;
        var r = {
            load: ["heliumService", function (e) {
                return e.load
            }]
        };
        t.when("/", {
            templateUrl: "app/home/home.html?v=1505743960640"
        }).when("/notebook/:noteId", {
            templateUrl: "app/notebook/notebook.html?v=1505743960640",
            controller: "NotebookCtrl",
            resolve: r
        }).when("/notebook/:noteId/paragraph?=:paragraphId", {
            templateUrl: "app/notebook/notebook.html?v=1505743960640",
            controller: "NotebookCtrl",
            resolve: r
        }).when("/notebook/:noteId/paragraph/:paragraphId?", {
            templateUrl: "app/notebook/notebook.html?v=1505743960640",
            controller: "NotebookCtrl",
            resolve: r
        }).when("/notebook/:noteId/revision/:revisionId", {
            templateUrl: "app/notebook/notebook.html?v=1505743960640",
            controller: "NotebookCtrl",
            resolve: r
        }).when("/jobmanager", {
            templateUrl: "app/jobmanager/jobmanager.html?v=1505743960640",
            controller: "JobmanagerCtrl"
        }).when("/interpreter", {
            templateUrl: "app/interpreter/interpreter.html?v=1505743960640",
            controller: "InterpreterCtrl"
        }).when("/notebookRepos", {
            templateUrl: "app/notebookRepos/notebookRepos.html?v=1505743960640",
            controller: "NotebookReposCtrl",
            controllerAs: "noterepo"
        }).when("/credential", {
            templateUrl: "app/credential/credential.html?v=1505743960640",
            controller: "CredentialCtrl"
        }).when("/helium", {
            templateUrl: "app/helium/helium.html?v=1505743960640",
            controller: "HeliumCtrl"
        }).when("/configuration", {
            templateUrl: "app/configuration/configuration.html?v=1505743960640",
            controller: "ConfigurationCtrl"
        }).when("/search/:searchTerm", {
            templateUrl: "app/search/result-list.html?v=1505743960640",
            controller: "SearchResultCtrl"
        }).otherwise({
            redirectTo: "/"
        }), n.configure({
            dismissButton: !0,
            dismissOnClick: !1,
            combineDuplications: !0,
            timeout: 6e3
        })
    }]).config(["$httpProvider", "$provide", function (e, t) {
        t.factory("httpInterceptor", ["$q", "$rootScope", function (e, t) {
            return {
                responseError: function (n) {
                    if (405 === n.status) {
                        var r = {};
                        r.info = "", t.$broadcast("session_logout", r)
                    }
                    return t.$broadcast("httpResponseError", n), e.reject(n)
                }
            }
        }]), e.interceptors.push("httpInterceptor")
    }]).constant("TRASH_FOLDER_ID", "~Trash");
    angular.element(document).ready(function () {
        n().then(r)
    }), String.prototype.endsWith || (String.prototype.endsWith = function (e, t) {
        var n = this.toString();
        ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
        var r = n.indexOf(e, t);
        return r !== -1 && r === t
    })
}, function (e, t) {
    "use strict";

    function n(e, t, n, r) {
        e.looknfeel = "default";
        var o = function () {
            e.asIframe = n.location.href.indexOf("asIframe") > -1
        };
        o(), t.$on("setIframe", function (t, n) {
            t.defaultPrevented || (e.asIframe = n, t.preventDefault())
        }), t.$on("setLookAndFeel", function (t, n) {
            !t.defaultPrevented && n && "" !== n && n !== e.looknfeel && (e.looknfeel = n, t.preventDefault())
        }), t.$on("$routeChangeStart", function (e, n, r) {
            t.$broadcast("setLookAndFeel", "default")
        }), t.noteName = function (e) {
            if (!_.isEmpty(e)) return r.getNoteName(e)
        }, BootstrapDialog.defaultOptions.onshown = function () {
            angular.element("#" + this.id).find(".btn:last").focus()
        }, BootstrapDialog.configDefaultOptions({
            animate: !1
        })
    }
    angular.module("zeppelinWebApp").controller("MainCtrl", n), n.$inject = ["$scope", "$rootScope", "$window", "arrayOrderingSrv"]
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i, s) {
        a.dismiss();
        var l = this;
        l.notes = t, l.websocketMsgSrv = n, l.arrayOrderingSrv = o, l.notebookHome = !1, l.noteCustomHome = !0, void 0 !== r.ticket ? l.staticHome = !1 : l.staticHome = !0, e.isReloading = !1, e.TRASH_FOLDER_ID = s, e.query = {
            q: ""
        }, e.initHome = function () {
            n.getHomeNote(), l.noteCustomHome = !1
        }, e.reloadNoteList = function () {
            n.reloadAllNotesFromRepo(), e.isReloadingNotes = !0
        }, e.toggleFolderNode = function (e) {
            e.hidden = !e.hidden
        }, angular.element("#loginModal").on("hidden.bs.modal", function (e) {
            r.$broadcast("initLoginValues")
        }), e.$on("setNoteMenu", function (t, n) {
            e.isReloadingNotes = !1
        }), e.$on("setNoteContent", function (e, t) {
            l.noteCustomHome || (t ? (l.note = t, r.$broadcast("setLookAndFeel", "home"), l.viewOnly = !0, l.notebookHome = !0, l.staticHome = !1) : (l.staticHome = !0, l.notebookHome = !1))
        }), e.renameNote = function (e, t) {
            i.renameNote(e, t)
        }, e.moveNoteToTrash = function (e) {
            i.moveNoteToTrash(e, !1)
        }, e.moveFolderToTrash = function (e) {
            i.moveFolderToTrash(e)
        }, e.restoreNote = function (e) {
            n.restoreNote(e)
        }, e.restoreFolder = function (e) {
            n.restoreFolder(e)
        }, e.restoreAll = function () {
            i.restoreAll()
        }, e.renameFolder = function (e) {
            i.renameFolder(e.id)
        }, e.removeNote = function (e) {
            i.removeNote(e, !1)
        }, e.removeFolder = function (e) {
            i.removeFolder(e)
        }, e.emptyTrash = function () {
            i.emptyTrash()
        }, e.clearAllParagraphOutput = function (e) {
            i.clearAllParagraphOutput(e)
        }, e.isFilterNote = function (t) {
            if (!e.query.q) return !0;
            var n = t.name;
            return n.toLowerCase().indexOf(e.query.q.toLowerCase()) > -1
        }, e.getNoteName = function (e) {
            return o.getNoteName(e)
        }
    }
    angular.module("zeppelinWebApp").controller("HomeCtrl", n), n.$inject = ["$scope", "noteListDataFactory", "websocketMsgSrv", "$rootScope", "arrayOrderingSrv", "ngToast", "noteActionSrv", "TRASH_FOLDER_ID"]
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("无法把类作为一个函数来调用！")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function () {
            function e(t, r, o) {
                n(this, e), this.columns = t || [], this.rows = r || [], this.comment = o || "", this._numericValidator = this._numericValidator.bind(this)
            }
            return r(e, [{
                key: "getHandsonTableConfig",
                value: function (e, t, n) {
                    var r = this;
                    return {
                        colHeaders: t,
                        data: n,
                        rowHeaders: !1,
                        stretchH: "all",
                        sortIndicator: !0,
                        columns: e,
                        columnSorting: !0,
                        contextMenu: !1,
                        manualColumnResize: !0,
                        manualRowResize: !0,
                        readOnly: !0,
                        readOnlyCellClassName: "",
                        fillHandle: !1,
                        fragmentSelection: !0,
                        disableVisualSelection: !0,
                        cells: function (t, n, o) {
                            var a = {},
                                i = e[n].type;
                            return a.renderer = function (e, t, n, o, a, s, l) {
                                r._cellRenderer(e, t, n, o, a, s, l, i)
                            }, a
                        },
                        afterGetColHeader: function (t, n) {
                            var o = this,
                                a = r._buildDropDownMenu(e[t].type),
                                i = r._buildTypeSwitchButton();
                            r._addButtonMenuEvent(i, a), Handsontable.Dom.addEvent(a, "click", function (n) {
                                "LI" === n.target.nodeName && r._setColumnType(e, n.target.data.colType, o, t)
                            }), "BUTTON" === n.firstChild.lastChild.nodeName && n.firstChild.removeChild(n.firstChild.lastChild), n.firstChild.appendChild(i), n.style["white-space"] = "normal"
                        }
                    }
                }
            }, {
                key: "_addButtonMenuEvent",
                value: function (e, t) {
                    Handsontable.Dom.addEvent(e, "click", function (n) {
                        var r, o, a;
                        document.body.appendChild(t), n.preventDefault(), n.stopImmediatePropagation(), r = document.querySelectorAll(".changeTypeMenu");
                        for (var i = 0, s = r.length; i < s; i++) r[i].style.display = "none";
                        t.style.display = "block", o = e.getBoundingClientRect(), t.style.top = o.top + (window.scrollY || window.pageYOffset) + 2 + "px", t.style.left = o.left + "px", a = function (e) {
                            t.parentNode && t.parentNode.removeChild(t)
                        }, Handsontable.Dom.removeEvent(document, "click", a), Handsontable.Dom.addEvent(document, "click", a)
                    })
                }
            }, {
                key: "_buildDropDownMenu",
                value: function (e) {
                    var t, n = document.createElement("UL"),
                        r = ["text", "numeric", "date"];
                    n.className = "changeTypeMenu";
                    for (var o = 0, a = r.length; o < a; o++) t = document.createElement("LI"), "innerText" in t ? t.innerText = r[o] : t.textContent = r[o], t.data = {
                        colType: r[o]
                    }, e === r[o] && (t.className = "active"), n.appendChild(t);
                    return n
                }
            }, {
                key: "_buildTypeSwitchButton",
                value: function () {
                    var e = document.createElement("BUTTON");
                    return e.innerHTML = "▼", e.className = "changeType", e
                }
            }, {
                key: "_isNumeric",
                value: function (e) {
                    return !isNaN(e) && 0 !== e.length && Number(e) <= Number.MAX_SAFE_INTEGER && Number(e) >= Number.MIN_SAFE_INTEGER
                }
            }, {
                key: "_cellRenderer",
                value: function (e, t, n, r, o, a, i, s) {
                    "numeric" === s && this._isNumeric(a) ? (i.format = "0,0.[00000]", t.style.textAlign = "left", Handsontable.renderers.NumericRenderer.apply(this, arguments)) : a.length > "%html".length && "%html " === a.substring(0, "%html ".length) ? t.innerHTML = a.substring("%html".length) : Handsontable.renderers.TextRenderer.apply(this, arguments)
                }
            }, {
                key: "_dateValidator",
                value: function (e, t) {
                    var n = moment(e);
                    return t(n.isValid())
                }
            }, {
                key: "_numericValidator",
                value: function (e, t) {
                    return t(this._isNumeric(e))
                }
            }, {
                key: "_setColumnType",
                value: function (e, t, n, r) {
                    e[r].type = t, this._setColumnValidator(e, r), n.updateSettings({
                        columns: e
                    }), n.validateCells(null), this._isColumnSorted(n, r) && n.sort(r, n.sortOrder)
                }
            }, {
                key: "_isColumnSorted",
                value: function (e, t) {
                    return e.sortingEnabled && e.sortColumn === t
                }
            }, {
                key: "_setColumnValidator",
                value: function (e, t) {
                    "numeric" === e[t].type ? e[t].validator = this._numericValidator : "date" === e[t].type ? e[t].validator = this._dateValidator : e[t].validator = null
                }
            }]), e
        }();
    t.default = o
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i, s, l, c, u, p, d, f) {
        function g() {
            e.permissions.owners = angular.element("#selectOwners").val(), e.permissions.readers = angular.element("#selectReaders").val(), e.permissions.writers = angular.element("#selectWriters").val()
        }
        u.dismiss(), e.note = null, e.moment = moment, e.editorToggled = !1, e.tableToggled = !1, e.viewOnly = !1, e.showSetting = !1, e.looknfeelOption = ["默认模式", "简单模式", "报表模式"], e.cronOption = [{
            name: "None",
            value: void 0
        }, {
            name: "1m",
            value: "0 0/1 * * * ?"
        }, {
            name: "5m",
            value: "0 0/5 * * * ?"
        }, {
            name: "1h",
            value: "0 0 0/1 * * ?"
        }, {
            name: "3h",
            value: "0 0 0/3 * * ?"
        }, {
            name: "6h",
            value: "0 0 0/6 * * ?"
        }, {
            name: "12h",
            value: "0 0 0/12 * * ?"
        }, {
            name: "1d",
            value: "0 0 0 * * ?"
        }], e.interpreterSettings = [], e.interpreterBindings = [], e.isNoteDirty = null, e.saveTimer = null;
        var h = !1,
            m = function (e) {
                var t = new RegExp("^.*/notebook/[a-zA-Z0-9_]*/revision/[a-zA-Z0-9_]*");
                return t.test(e)
            };
        e.noteRevisions = [], e.currentRevision = "Head", e.revisionView = m(r.path()), e.$on("setConnectedStatus", function (e, t) {
            h && t && v(), h = !0
        }), e.getCronOptionNameFromValue = function (t) {
            if (!t) return "";
            for (var n in e.cronOption)
                if (e.cronOption[n].value === t) return e.cronOption[n].name;
            return t
        }, e.blockAnonUsers = function () {
            var e = o.zeppelinVersion,
                t = "https://zeppelin.apache.org/docs/" + e + "/security/notebook_authorization.html",
                n = '仅有授权的用户能设定权限。<a data-toggle="tooltip" data-placement="top" title="了解更多" target="_blank" href=' + t + '><i class="icon-question" /></a>';
            BootstrapDialog.show({
                closable: !1,
                closeByBackdrop: !1,
                closeByKeyboard: !1,
                title: "没有权限",
                message: n,
                buttons: [{
                    label: "关闭",
                    action: function (e) {
                        e.close()
                    }
                }]
            })
        };
        var v = function () {
            d.clear(), n.revisionId ? i.getNoteByRevision(n.noteId, n.revisionId) : i.getNote(n.noteId), i.listRevisionHistory(n.noteId);
            var e = t.current;
            e && setTimeout(function () {
                var t = e.params,
                    n = angular.element("#" + t.paragraph + "_container");
                if (n.length > 0) {
                    var r = n.offset().top - 103;
                    angular.element("html, body").scrollTo({
                        top: r,
                        left: 0
                    })
                }
            }, 1e3)
        };
        v(), e.focusParagraphOnClick = function (t) {
            if (e.note)
                for (var n = 0; n < e.note.paragraphs.length; n++) {
                    var r = e.note.paragraphs[n].id;
                    if (jQuery.contains(angular.element("#" + r + "_container")[0], t.target)) {
                        e.$broadcast("focusParagraph", r, 0, !0);
                        break
                    }
                }
        }, document.addEventListener("click", e.focusParagraphOnClick), e.keyboardShortcut = function (t) {
            e.viewOnly || e.revisionView || e.$broadcast("keyEvent", t)
        }, document.addEventListener("keydown", e.keyboardShortcut), e.paragraphOnDoubleClick = function (t) {
            e.$broadcast("doubleClickParagraph", t)
        }, e.moveNoteToTrash = function (e) {
            p.moveNoteToTrash(e, !0)
        }, e.removeNote = function (e) {
            p.removeNote(e, !0)
        }, e.isTrash = function (e) {
            return !!e && e.name.split("/")[0] === f
        }, e.exportNote = function () {
            var t = JSON.stringify(e.note);
            c.saveAs(t, e.note.name, "json")
        }, e.cloneNote = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要复制当前工作区吗？",
                callback: function (t) {
                    t && (i.cloneNote(e), r.path("/"))
                }
            })
        }, e.checkpointNote = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要提交当前工作区到工作区仓库?",
                callback: function (t) {
                    t && i.checkpointNote(n.noteId, e)
                }
            }), document.getElementById("note.checkpoint.message").value = ""
        }, e.setNoteRevision = function () {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否将当前版本的工作区设定主版本",
                callback: function (e) {
                    e && i.setNoteRevision(n.noteId, n.revisionId)
                }
            })
        }, e.$on("listRevisionHistory", function (t, r) {
            if (e.noteRevisions = r.revisionList, e.noteRevisions.splice(0, 0, {
                    id: "Head",
                    message: "主版本"
                }), n.revisionId) {
                var o = _.findIndex(e.noteRevisions, {
                    id: n.revisionId
                });
                o > -1 && (e.currentRevision = e.noteRevisions[o].message)
            }
        }), e.$on("noteRevision", function (t, n) {
            n.note ? (e.note = n.note, b()) : r.path("/")
        }), e.$on("setNoteRevisionResult", function (e, t) {
            t.status && r.path("/notebook/" + n.noteId)
        }), e.visitRevision = function (e) {
            e.id ? "Head" === e.id ? r.path("/notebook/" + n.noteId) : r.path("/notebook/" + n.noteId + "/revision/" + e.id) : u.danger({
                content: "该版本有问题",
                verticalPosition: "top",
                dismissOnTimeout: !1
            })
        }, e.runAllParagraphs = function (t) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定运行所有工作表？",
                callback: function (n) {
                    if (n) {
                        var r = e.note.paragraphs.map(function (e) {
                            return {
                                id: e.id,
                                title: e.title,
                                paragraph: e.text,
                                config: e.config,
                                params: e.settings.params
                            }
                        });
                        i.runAllParagraphs(t, r)
                    }
                }
            })
        }, e.saveNote = function () {
            e.note && e.note.paragraphs && (_.forEach(e.note.paragraphs, function (e) {
                angular.element("#" + e.id + "_paragraphColumn_main").scope().saveParagraph(e)
            }), e.isNoteDirty = null)
        }, e.clearAllParagraphOutput = function (e) {
            p.clearAllParagraphOutput(e)
        }, e.toggleAllEditor = function () {
            e.editorToggled ? e.$broadcast("openEditor") : e.$broadcast("closeEditor"), e.editorToggled = !e.editorToggled
        }, e.showAllEditor = function () {
            e.$broadcast("openEditor")
        }, e.hideAllEditor = function () {
            e.$broadcast("closeEditor")
        }, e.toggleAllTable = function () {
            e.tableToggled ? e.$broadcast("openTable") : e.$broadcast("closeTable"), e.tableToggled = !e.tableToggled
        }, e.showAllTable = function () {
            e.$broadcast("openTable")
        }, e.hideAllTable = function () {
            e.$broadcast("closeTable")
        }, e.isNoteRunning = function () {
            if (!e.note) return !1;
            for (var t = 0; t < e.note.paragraphs.length; t++) {
                var n = e.note.paragraphs[t].status;
                if ("PENDING" === n || "RUNNING" === n) return !0
            }
            return !1
        }, e.killSaveTimer = function () {
            e.saveTimer && (l.cancel(e.saveTimer), e.saveTimer = null)
        }, e.startSaveTimer = function () {
            e.killSaveTimer(), e.isNoteDirty = !0, e.saveTimer = l(function () {
                e.saveNote()
            }, 1e4)
        }, angular.element(window).on("beforeunload", function (t) {
            e.killSaveTimer(), e.saveNote()
        }), e.setLookAndFeel = function (t) {
            e.note.config.looknfeel = t, e.revisionView === !0 ? o.$broadcast("setLookAndFeel", e.note.config.looknfeel) : e.setConfig()
        }, e.setCronScheduler = function (t) {
            t ? e.note.config.cronExecutingUser || (e.note.config.cronExecutingUser = o.ticket.principal) : e.note.config.cronExecutingUser = "", e.note.config.cron = t, e.setConfig()
        }, e.setCronExecutingUser = function (t) {
            e.note.config.cronExecutingUser = t, e.setConfig()
        }, e.setReleaseResource = function (t) {
            e.note.config.releaseresource = t, e.setConfig()
        }, e.setConfig = function (t) {
            t && (e.note.config = t), i.updateNote(e.note.id, e.note.name, e.note.config)
        }, e.updateNoteName = function (t) {
            var n = t.trim();
            n.length > 0 && e.note.name !== n && (e.note.name = n, i.renameNote(e.note.id, e.note.name))
        };
        var b = function () {
                e.note.config.looknfeel ? e.viewOnly = "报表模式" === e.note.config.looknfeel : e.note.config.looknfeel = "默认模式", e.note.paragraphs && e.note.paragraphs[0] && (e.note.paragraphs[0].focus = !0), o.$broadcast("setLookAndFeel", e.note.config.looknfeel)
            },
            y = function (e, t) {
                var n = {};
                n.id = t.id, n.name = t.name, n.config = t.config, n.info = t.info, n.paragraphs = [];
                for (var r = 0; r < t.paragraphs.length; r++)
                    if (t.paragraphs[r].id === e) {
                        n.paragraphs[0] = t.paragraphs[r], n.paragraphs[0].config || (n.paragraphs[0].config = {}), n.paragraphs[0].config.editorHide = !0, n.paragraphs[0].config.tableHide = !1;
                        break
                    }
                return n
            },
            w = function (t, n) {
                e.note.paragraphs.splice(n, 0, t), _.each(e.note.paragraphs, function (n) {
                    n.id === t.id && (n.focus = !0, e.$broadcast("focusParagraph", n.id, 0, !1))
                })
            },
            N = function (t) {
                var n;
                return _.each(e.note.paragraphs, function (e, r) {
                    e.id === t && (n = r)
                }), e.note.paragraphs.splice(n, 1)
            };
        e.$on("addParagraph", function (t, n, r) {
            e.paragraphUrl || w(n, r)
        }), e.$on("removeParagraph", function (t, n) {
            e.paragraphUrl || N(n)
        }), e.$on("moveParagraph", function (e, t, n) {
            var r = N(t);
            r && 1 === r.length && w(r[0], n)
        }), e.$on("updateNote", function (t, n, r, o) {
            n !== e.note.name && (e.note.name = n), e.note.config = r, e.note.info = o, b()
        });
        var S = function () {
            i.getInterpreterBindings(e.note.id)
        };
        e.$on("interpreterBindings", function (t, n) {
            e.interpreterBindings = n.interpreterBindings, e.interpreterBindingsOrig = angular.copy(e.interpreterBindings);
            var r, o, a = !1;
            for (r in e.interpreterBindings)
                if (o = e.interpreterBindings[r], o.selected) {
                    a = !0;
                    break
                }
            if (!a) {
                var i = {};
                for (r in e.interpreterBindings) o = e.interpreterBindings[r], i[o.name] || (o.selected = !0, i[o.name] = !0);
                e.showSetting = !0
            }
        }), e.interpreterSelectionListeners = {
            accept: function (e, t) {
                return !0
            },
            itemMoved: function (e) {},
            orderChanged: function (e) {}
        }, e.openSetting = function () {
            e.showSetting = !0, S()
        }, e.closeSetting = function () {
            k() ? BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "插件配置的修改将要被舍弃。",
                callback: function (t) {
                    t && e.$apply(function () {
                        e.showSetting = !1
                    })
                }
            }) : e.showSetting = !1
        }, e.saveSetting = function () {
            var t = [];
            for (var n in e.interpreterBindings) {
                var r = e.interpreterBindings[n];
                r.selected && t.push(r.id)
            }
            i.saveInterpreterBindings(e.note.id, t), _.forEach(e.note.paragraphs, function (t, n) {
                var r = /^\s*%/g;
                t.text && !r.exec(t.text) && e.$broadcast("saveInterpreterBindings", t.id)
            }), e.showSetting = !1
        }, e.toggleSetting = function () {
            e.showSetting ? e.closeSetting() : (e.openSetting(), e.closePermissions())
        };
        var I = function (t) {
            a.get(s.getRestApiBase() + "/notebook/" + e.note.id + "/permissions").success(function (n, r, o, a) {
                e.permissions = n.body, e.permissionsOrig = angular.copy(e.permissions);
                var i = {
                    tokenSeparators: [",", " "],
                    ajax: {
                        url: function (e) {
                            return !!e.term && s.getRestApiBase() + "/security/userlist/" + e.term
                        },
                        delay: 250,
                        processResults: function (e, t) {
                            var n = [];
                            if (0 !== e.body.users.length) {
                                for (var r = [], o = 0; o < e.body.users.length; o++) r.push({
                                    id: e.body.users[o],
                                    text: e.body.users[o]
                                });
                                n.push({
                                    text: "用户 :",
                                    children: r
                                })
                            }
                            if (0 !== e.body.roles.length) {
                                for (var a = [], o = 0; o < e.body.roles.length; o++) a.push({
                                    id: e.body.roles[o],
                                    text: e.body.roles[o]
                                });
                                n.push({
                                    text: "角色 :",
                                    children: a
                                })
                            }
                            return {
                                results: n,
                                pagination: {
                                    more: !1
                                }
                            }
                        },
                        cache: !1
                    },
                    width: " ",
                    tags: !0,
                    minimumInputLength: 3
                };
                e.setIamOwner(), angular.element("#selectOwners").select2(i), angular.element("#selectReaders").select2(i), angular.element("#selectWriters").select2(i), t && t()
            }).error(function (e, t, n, r) {})
        };
        e.openPermissions = function () {
            e.showPermissions = !0, I()
        }, e.closePermissions = function () {
            O() ? BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "所有的更改将被舍弃。",
                callback: function (t) {
                    t && e.$apply(function () {
                        e.showPermissions = !1
                    })
                }
            }) : e.showPermissions = !1
        }, e.restartInterpreter = function (t) {
            var n = BootstrapDialog.confirm({
                closable: !1,
                closeByBackdrop: !1,
                closeByKeyboard: !1,
                title: "",
                message: "是否确定要重启" + t.name + " 插件?",
                callback: function (r) {
                    if (r) {
                        var o = {
                            noteId: e.note.id
                        };
                        return n.$modalFooter.find("button").addClass("disabled"), n.$modalFooter.find('button:contains("OK")').html('<i class="fa fa-circle-o-notch fa-spin"></i> 设置保存中…… '), a.put(s.getRestApiBase() + "/interpreter/setting/restart/" + t.id, o).success(function (r, o, a, i) {
                            var s = _.findIndex(e.interpreterSettings, {
                                id: t.id
                            });
                            e.interpreterSettings[s] = r.body, n.close()
                        }).error(function (e, t, r, o) {
                            n.close(), BootstrapDialog.show({
                                title: "重启插件失败。",
                                message: e.message
                            })
                        }), !1
                    }
                }
            })
        }, e.savePermissions = function () {
            g(), a.put(s.getRestApiBase() + "/notebook/" + e.note.id + "/permissions", e.permissions, {
                withCredentials: !0
            }).success(function (t, n, r, o) {
                I(function () {
                    BootstrapDialog.alert({
                        closable: !0,
                        title: "权限设置保存成功！！！",
                        message: "拥有者 : " + e.permissions.owners + "\n\n查阅者 : " + e.permissions.readers + "\n\n更改者  : " + e.permissions.writers
                    }), e.showPermissions = !1
                })
            }).error(function (e, t, n, o) {
                BootstrapDialog.show({
                    closable: !1,
                    closeByBackdrop: !1,
                    closeByKeyboard: !1,
                    title: "权限不足",
                    message: e.message,
                    buttons: [{
                        label: "登录",
                        action: function (e) {
                            e.close(), angular.element("#loginModal").modal({
                                show: "true"
                            })
                        }
                    }, {
                        label: "取消",
                        action: function (e) {
                            e.close(), r.path("/")
                        }
                    }]
                })
            })
        }, e.togglePermissions = function () {
            var t = o.ticket.principal;
            e.isAnonymous = "anonymous" === t, t && e.isAnonymous ? e.blockAnonUsers() : e.showPermissions ? (e.closePermissions(), angular.element("#selectOwners").select2({}), angular.element("#selectReaders").select2({}), angular.element("#selectWriters").select2({})) : (e.openPermissions(), e.closeSetting())
        }, e.setIamOwner = function () {
            return e.permissions.owners.length > 0 && _.indexOf(e.permissions.owners, o.ticket.principal) < 0 ? (e.isOwner = !1, !1) : (e.isOwner = !0, !0)
        }, e.toggleNotePersonalizedMode = function () {
            var t = e.note.config.personalizedMode;
            e.isOwner && BootstrapDialog.confirm({
                closable: !0,
                title: "设置结果显示",
                message: function (t) {
                    var n = "true" === e.note.config.personalizedMode ? "公开" : "私有化";
                    return '是否确定要 <span class="text-info">' + n + "</span> 你的工作区?"
                },
                callback: function (n) {
                    n && (void 0 === e.note.config.personalizedMode && (e.note.config.personalizedMode = "false"), e.note.config.personalizedMode = "true" === t ? "false" : "true", i.updatePersonalizedMode(e.note.id, e.note.config.personalizedMode))
                }
            })
        };
        var k = function () {
                return !angular.equals(e.interpreterBindings, e.interpreterBindingsOrig)
            },
            O = function () {
                return !angular.equals(e.permissions, e.permissionsOrig)
            };
        angular.element(document).click(function () {
            angular.element(".ace_autocomplete").hide()
        }), e.$on("setConnectedStatus", function (e, t) {
            h && t && v(), h = !0
        }), e.$on("moveParagraphUp", function (t, n) {
            for (var r = -1, o = 0; o < e.note.paragraphs.length; o++)
                if (e.note.paragraphs[o].id === n.id) {
                    r = o - 1;
                    break
                }
            if (!(r < 0 || r >= e.note.paragraphs.length)) {
                var a = e.note.paragraphs[r];
                angular.element("#" + n.id + "_paragraphColumn_main").scope().saveParagraph(n), angular.element("#" + a.id + "_paragraphColumn_main").scope().saveParagraph(a), i.moveParagraph(n.id, r)
            }
        }), e.$on("moveParagraphDown", function (t, n) {
            for (var r = -1, o = 0; o < e.note.paragraphs.length; o++)
                if (e.note.paragraphs[o].id === n.id) {
                    r = o + 1;
                    break
                }
            if (!(r < 0 || r >= e.note.paragraphs.length)) {
                var a = e.note.paragraphs[r];
                angular.element("#" + n.id + "_paragraphColumn_main").scope().saveParagraph(n), angular.element("#" + a.id + "_paragraphColumn_main").scope().saveParagraph(a), i.moveParagraph(n.id, r)
            }
        }), e.$on("moveFocusToPreviousParagraph", function (t, n) {
            for (var r = !1, o = e.note.paragraphs.length - 1; o >= 0; o--) {
                if (r !== !1) {
                    e.$broadcast("focusParagraph", e.note.paragraphs[o].id, -1);
                    break
                }
                e.note.paragraphs[o].id !== n || (r = !0)
            }
        }), e.$on("moveFocusToNextParagraph", function (t, n) {
            for (var r = !1, o = 0; o < e.note.paragraphs.length; o++) {
                if (r !== !1) {
                    e.$broadcast("focusParagraph", e.note.paragraphs[o].id, 0);
                    break
                }
                e.note.paragraphs[o].id !== n || (r = !0)
            }
        }), e.$on("insertParagraph", function (t, n, r) {
            for (var o = -1, a = 0; a < e.note.paragraphs.length; a++)
                if (e.note.paragraphs[a].id === n) {
                    o = "above" === r ? a : a + 1;
                    break
                }
            o < 0 || o > e.note.paragraphs.length || i.insertParagraph(o)
        }), e.$on("setNoteContent", function (t, a) {
            void 0 === a && r.path("/"), e.note = a, e.paragraphUrl = n.paragraphId, e.asIframe = n.asIframe, e.paragraphUrl && (e.note = y(e.paragraphUrl, a), e.$broadcast("$unBindKeyEvent", e.$unBindKeyEvent), o.$broadcast("setIframe", e.asIframe)), b(), S(), I();
            var i = e.note.config.personalizedMode;
            i = void 0 === i ? "false" : i, e.note.config.personalizedMode = i
        }), e.$on("$destroy", function () {
            angular.element(window).off("beforeunload"), e.killSaveTimer(), e.saveNote(), document.removeEventListener("click", e.focusParagraphOnClick), document.removeEventListener("keydown", e.keyboardShortcut)
        }), e.$on("$unBindKeyEvent", function () {
            document.removeEventListener("click", e.focusParagraphOnClick), document.removeEventListener("keydown", e.keyboardShortcut)
        }), angular.element(window).bind("resize", function () {
            var e = document.getElementById("actionbar").lastElementChild.clientHeight;
            angular.element(document.getElementById("content")).css("padding-top", e - 20)
        })
    }
    angular.module("zeppelinWebApp").controller("NotebookCtrl", n), n.$inject = ["$scope", "$route", "$routeParams", "$location", "$rootScope", "$http", "websocketMsgSrv", "baseUrlSrv", "$timeout", "saveAsService", "ngToast", "noteActionSrv", "noteVarShareService", "TRASH_FOLDER_ID"]
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function () {
            function e(t, r, o) {
                n(this, e), this.columns = t || [], this.rows = r || [], this.comment = o || ""
            }
            return r(e, [{
                key: "loadParagraphResult",
                value: function (e) {
                    if (e && "TABLE" === e.type) {
                        for (var t = [], n = [], r = [], o = e.msg.split("\n"), a = "", i = !1, s = 0; s < o.length; s++) {
                            var l = o[s];
                            if (i) a += l;
                            else if ("" !== l && "<!--TABLE_COMMENT-->" !== l) {
                                for (var c = l.split("\t"), u = [], p = [], d = 0; d < c.length; d++) {
                                    var f = c[d];
                                    0 === s ? t.push({
                                        name: f,
                                        index: d,
                                        aggr: "sum"
                                    }) : (u.push(f), p.push({
                                        key: t[s] ? t[s].name : void 0,
                                        value: f
                                    }))
                                }
                                0 !== s && (n.push(u), r.push(p))
                            } else n.length > 0 && (i = !0)
                        }
                        this.comment = a, this.columns = t, this.rows = n
                    }
                }
            }]), e
        }();
    t.default = o
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function () {
            function e(t) {
                n(this, e), this.config = t, this._emitter
            }
            return r(e, [{
                key: "getSetting",
                value: function () {}
            }, {
                key: "transform",
                value: function (e) {}
            }, {
                key: "renderSetting",
                value: function (e) {
                    var t = this.getSetting();
                    if (t) {
                        if (this._scope) {
                            var n = this;
                            return void this._scope.$apply(function () {
                                for (var e in t.scope) n._scope[e] = t.scope[e];
                                for (var e in n._prevSettingScope) t.scope[e] || (n._scope[e] = t.scope[e])
                            })
                        }
                        this._prevSettingScope = t.scope;
                        var r = this._createNewScope();
                        for (var o in t.scope) r[o] = t.scope[o];
                        var a = t.template;
                        if (1 === a.split("\n").length && a.endsWith(".html")) {
                            var n = this;
                            this._templateRequest(a).then(function (t) {
                                n._render(e, t, r)
                            })
                        } else this._render(e, a, r)
                    }
                }
            }, {
                key: "_render",
                value: function (e, t, n) {
                    this._targetEl = e, e.html(t), this._compile(e.contents())(n), this._scope = n
                }
            }, {
                key: "setConfig",
                value: function (e) {
                    this.config = e
                }
            }, {
                key: "emitConfig",
                value: function (e) {
                    this._emitter(e)
                }
            }]), e
        }();
    t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = n(7),
        c = r(l),
        u = function (e) {
            function t(e) {
                return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return i(t, e), s(t, [{
                key: "getSetting",
                value: function () {
                    var e = this,
                        t = e.config;
                    return {
                        template: "app/tabledata/pivot_settings.html",
                        scope: {
                            config: t.common.pivot,
                            tableDataColumns: e.tableDataColumns,
                            save: function () {
                                e.emitConfig(t)
                            },
                            removeKey: function (n) {
                                t.common.pivot.keys.splice(n, 1), e.emitConfig(t)
                            },
                            removeGroup: function (n) {
                                t.common.pivot.groups.splice(n, 1), e.emitConfig(t)
                            },
                            removeValue: function (n) {
                                t.common.pivot.values.splice(n, 1), e.emitConfig(t)
                            },
                            setValueAggr: function (n, r) {
                                t.common.pivot.values[n].aggr = r, e.emitConfig(t)
                            }
                        }
                    }
                }
            }, {
                key: "transform",
                value: function (e) {
                    this.tableDataColumns = e.columns, this.config.common = this.config.common || {}, this.config.common.pivot = this.config.common.pivot || {};
                    var t = this.config.common.pivot,
                        n = !t.keys && !t.groups && !t.values;
                    return t.keys = t.keys || [], t.groups = t.groups || [], t.values = t.values || [], this.removeUnknown(), n && this.selectDefault(), this.pivot(e, t.keys, t.groups, t.values)
                }
            }, {
                key: "removeUnknown",
                value: function e() {
                    var t = this.config.common.pivot,
                        n = this.tableDataColumns,
                        r = function (e) {
                            for (var t = 0; t < e.length; t++)
                                for (var n = t + 1; n < e.length; n++) angular.equals(e[t], e[n]) && e.splice(n, 1)
                        },
                        e = function (e) {
                            for (var t = 0; t < e.length; t++) {
                                for (var r = !1, o = 0; o < n.length; o++) {
                                    var a = e[t],
                                        i = n[o];
                                    if (a.index === i.index && a.name === i.name) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || e.splice(t, 1)
                            }
                        };
                    r(t.keys), e(t.keys), r(t.groups), e(t.groups), e(t.values)
                }
            }, {
                key: "selectDefault",
                value: function () {
                    var e = this.config.common.pivot;
                    0 === e.keys.length && 0 === e.groups.length && 0 === e.values.length && (0 === e.keys.length && this.tableDataColumns.length > 0 && e.keys.push(this.tableDataColumns[0]), 0 === e.values.length && this.tableDataColumns.length > 1 && e.values.push(this.tableDataColumns[1]))
                }
            }, {
                key: "pivot",
                value: function (e, t, n, r) {
                    for (var o = {
                            sum: function (e, t) {
                                var n = void 0 !== e ? isNaN(e) ? 1 : parseFloat(e) : 0,
                                    r = void 0 !== t ? isNaN(t) ? 1 : parseFloat(t) : 0;
                                return n + r
                            },
                            count: function (e, t) {
                                var n = void 0 !== e ? parseInt(e) : 0,
                                    r = void 0 !== t ? 1 : 0;
                                return n + r
                            },
                            min: function (e, t) {
                                var n = void 0 !== e ? isNaN(e) ? 1 : parseFloat(e) : 0,
                                    r = void 0 !== t ? isNaN(t) ? 1 : parseFloat(t) : 0;
                                return Math.min(n, r)
                            },
                            max: function (e, t) {
                                var n = void 0 !== e ? isNaN(e) ? 1 : parseFloat(e) : 0,
                                    r = void 0 !== t ? isNaN(t) ? 1 : parseFloat(t) : 0;
                                return Math.max(n, r)
                            },
                            avg: function (e, t, n) {
                                var r = void 0 !== e ? isNaN(e) ? 1 : parseFloat(e) : 0,
                                    o = void 0 !== t ? isNaN(t) ? 1 : parseFloat(t) : 0;
                                return r + o
                            }
                        }, a = {
                            sum: !1,
                            count: !1,
                            min: !1,
                            max: !1,
                            avg: !0
                        }, i = {}, s = {}, l = 0; l < e.rows.length; l++) {
                        for (var c = e.rows[l], u = i, p = s, d = 0; d < t.length; d++) {
                            var f = t[d];
                            u[f.name] || (u[f.name] = {
                                order: d,
                                index: f.index,
                                type: "key",
                                children: {}
                            }), u = u[f.name].children;
                            var g = c[f.index];
                            p[g] || (p[g] = {}), p = p[g]
                        }
                        for (var h = 0; h < n.length; h++) {
                            var m = n[h],
                                v = c[m.index];
                            u[v] || (u[v] = {
                                order: h,
                                index: m.index,
                                type: "group",
                                children: {}
                            }), u = u[v].children, p[v] || (p[v] = {}), p = p[v]
                        }
                        for (var b = 0; b < r.length; b++) {
                            var y = r[b],
                                w = y.name + "(" + y.aggr + ")";
                            u[w] || (u[w] = {
                                type: "value",
                                order: b,
                                index: y.index
                            }), p[w] ? p[w] = {
                                value: o[y.aggr](p[w].value, c[y.index], p[w].count + 1),
                                count: a[y.aggr] ? p[w].count + 1 : p[w].count
                            } : p[w] = {
                                value: "count" !== y.aggr ? c[y.index] : 1,
                                count: 1
                            }
                        }
                    }
                    return {
                        keys: t,
                        groups: n,
                        values: r,
                        schema: i,
                        rows: s
                    }
                }
            }]), t
        }(c.default);
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = n(7),
        c = r(l),
        u = function (e) {
            function t(e) {
                return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return i(t, e), s(t, [{
                key: "transform",
                value: function (e) {
                    return e
                }
            }]), t
        }(c.default);
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = n(7),
        c = r(l),
        u = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.props = n, r
            }
            return i(t, e), s(t, [{
                key: "getSetting",
                value: function () {
                    var e = this,
                        t = e.config;
                    return {
                        template: "app/tabledata/columnselector_settings.html",
                        scope: {
                            config: e.config,
                            props: e.props,
                            tableDataColumns: e.tableDataColumns,
                            save: function () {
                                e.emitConfig(t)
                            },
                            remove: function (n) {
                                t[n] = null, e.emitConfig(t)
                            }
                        }
                    }
                }
            }, {
                key: "transform",
                value: function (e) {
                    return this.tableDataColumns = e.columns, this.removeUnknown(), e
                }
            }, {
                key: "removeUnknown",
                value: function () {
                    var e = this.config;
                    for (var t in e)
                        if (e[t]) {
                            for (var n = !1, r = 0; r < this.tableDataColumns.length; r++) {
                                var o = e[t],
                                    a = this.tableDataColumns[r];
                                if (o.index === a.index && o.name === a.name) {
                                    n = !0;
                                    break
                                }
                            }
                            n || !(e[t] instanceof Object) || e[t] instanceof Array || (e[t] = null)
                        }
                }
            }]), t
        }(c.default);
    t.default = u
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t, n, r) {
        e._targetEl = t, t.html(n), e._compile(t.contents())(r), e._scope = r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = function () {
            function e(t, r) {
                n(this, e), this.targetEl = t, this.config = r, this._dirty = !1, this._active = !1, this._emitter
            }
            return o(e, [{
                key: "getTransformation",
                value: function () {}
            }, {
                key: "render",
                value: function (e) {}
            }, {
                key: "refresh",
                value: function () {}
            }, {
                key: "destroy",
                value: function () {}
            }, {
                key: "getSetting",
                value: function () {}
            }, {
                key: "activate",
                value: function () {
                    this._active && !this._dirty || (this.refresh(), this._dirty = !1), this._active = !0
                }
            }, {
                key: "deactivate",
                value: function () {
                    this._active = !1
                }
            }, {
                key: "isActive",
                value: function () {
                    return this._active
                }
            }, {
                key: "resize",
                value: function () {
                    this.isActive() ? this.refresh() : this._dirty = !0
                }
            }, {
                key: "setConfig",
                value: function (e) {
                    this.config = e, this.isActive() ? this.refresh() : this._dirty = !0
                }
            }, {
                key: "emitConfig",
                value: function (e) {
                    this._emitter(e)
                }
            }, {
                key: "renderSetting",
                value: function (e) {
                    var t = this,
                        n = this.getSetting();
                    if (n) {
                        if (this._scope) {
                            var o = this;
                            return void this._scope.$apply(function () {
                                for (var e in n.scope) o._scope[e] = n.scope[e];
                                for (var e in o._prevSettingScope) n.scope[e] || (o._scope[e] = n.scope[e])
                            })
                        }
                        this._prevSettingScope = n.scope;
                        var a = this._createNewScope();
                        for (var i in n.scope) a[i] = n.scope[i];
                        var s = n.template;
                        1 === s.split("\n").length && s.endsWith(".html") ? this._templateRequest(s).then(function (n) {
                            return r(t, e, n, a)
                        }) : r(this, e, s, a)
                    }
                }
            }]), e
        }();
    t.default = a
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = n(11),
        c = r(l),
        u = n(9),
        p = r(u),
        d = n(4),
        f = r(d),
        g = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return e.addClass("table"), r.passthrough = new p.default(n), r
            }
            return i(t, e), s(t, [{
                key: "refresh",
                value: function () {
                    this.hot.render()
                }
            }, {
                key: "render",
                value: function (e) {
                    var t = this.targetEl.height(),
                        n = this.targetEl.css("height", t).get(0),
                        r = e.rows,
                        o = _.pluck(e.columns, "name"),
                        a = Array.apply(null, Array(e.columns.length)).map(function () {
                            return {
                                type: "text"
                            }
                        });
                    this.hot && this.hot.destroy();
                    var i = new f.default;
                    this.hot = new Handsontable(n, i.getHandsonTableConfig(a, o, r)), this.hot.validateCells(null)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.hot && this.hot.destroy()
                }
            }, {
                key: "getTransformation",
                value: function () {
                    return this.passthrough
                }
            }]), t
        }(c.default);
    t.default = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = n(11),
        c = r(l),
        u = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r.targetEl.append("<svg></svg>"), r
            }
            return i(t, e), s(t, [{
                key: "refresh",
                value: function () {
                    this.chart && this.chart.update()
                }
            }, {
                key: "render",
                value: function (e) {
                    var t = this.type(),
                        n = e.d3g;
                    this.chart || (this.chart = nv.models[t]()), this.configureChart(this.chart);
                    var r = 300,
                        o = 150,
                        a = this.targetEl.height();
                    try {
                        n[0].values.length > o && (r = 0)
                    } catch (e) {}
                    d3.select("#" + this.targetEl[0].id + " svg").attr("height", a).datum(n).transition().duration(r).call(this.chart), d3.select("#" + this.targetEl[0].id + " svg").style.height = a + "px"
                }
            }, {
                key: "type",
                value: function () {}
            }, {
                key: "configureChart",
                value: function (e) {}
            }, {
                key: "groupedThousandsWith3DigitsFormatter",
                value: function (e) {
                    return d3.format(",")(d3.round(e, 3))
                }
            }, {
                key: "customAbbrevFormatter",
                value: function (e) {
                    var t = d3.format(".3s")(e);
                    switch (t[t.length - 1]) {
                        case "G":
                            return t.slice(0, -1) + "B"
                    }
                    return t
                }
            }, {
                key: "xAxisTickFormat",
                value: function (e, t) {
                    return !t[e] || !isNaN(parseFloat(t[e])) && isFinite(t[e]) ? e : t[e]
                }
            }, {
                key: "yAxisTickFormat",
                value: function (e) {
                    return Math.abs(e) >= Math.pow(10, 6) ? this.customAbbrevFormatter(e) : this.groupedThousandsWith3DigitsFormatter(e)
                }
            }, {
                key: "d3DataFromPivot",
                value: function (e, t, n, r, o, a, i, s) {
                    var l = [],
                        c = function (e, t) {
                            return e ? e + "." + t : t
                        },
                        u = function e(t, n) {
                            for (var r in t.children) n[r] = {}, e(t.children[r], n[r])
                        },
                        p = function e(t, n, r, o, a, s, l, p) {
                            "key" === n.type ? (s = c(s, t), l = c(l, r)) : "group" === n.type ? p = c(p, r) : ("value" === n.type && t === r || d) && (p = c(p, r), a(s, l, p, o));
                            for (var f in n.children)
                                if (i && "group" === n.children[f].type && void 0 === o[f]) {
                                    var g = {};
                                    u(n.children[f], g), e(f, n.children[f], f, g, a, s, l, p)
                                } else
                                    for (var h in o) "key" !== n.children[f].type && f !== h || e(f, n.children[f], h, o[h], a, s, l, p)
                        },
                        d = 0 === n.length && 0 === r.length && o.length > 0,
                        f = 0 === n.length,
                        g = s,
                        h = Object.keys(e)[0],
                        m = {},
                        v = 0,
                        b = {},
                        y = 0,
                        w = {};
                    for (var _ in t) p(h, e[h], _, t[_], function (e, t, n, r) {
                        void 0 === m[t] && (w[v] = t, m[t] = v++), void 0 === b[n] && (b[n] = y++);
                        var o = b[n];
                        f && g && (o = 0), l[o] || (l[o] = {
                            values: [],
                            key: f && g ? "values" : n
                        });
                        var i = isNaN(t) ? a ? t : m[t] : parseFloat(t),
                            s = 0;
                        void 0 === i && (i = n), void 0 !== r && (s = isNaN(r.value) ? 0 : parseFloat(r.value) / parseFloat(r.count)), l[o].values.push({
                            x: i,
                            y: s
                        })
                    });
                    var N, S, I = {};
                    for (N in b) S = N.substring(0, N.lastIndexOf("(")), I[S] ? I[S]++ : I[S] = 1;
                    if (d)
                        for (var k = 0; k < l[0].values.length; k++) N = l[0].values[k].x, N && (S = N.substring(0, N.lastIndexOf("(")), I[S] <= 1 && (l[0].values[k].x = S));
                    else {
                        for (var O = 0; O < l.length; O++) N = l[O].key, S = N.substring(0, N.lastIndexOf("(")), I[S] <= 1 && (l[O].key = S);
                        if (1 === r.length && 1 === o.length)
                            for (O = 0; O < l.length; O++) N = l[O].key, N = N.split(".").slice(0, -1).join("."), l[O].key = N
                    }
                    return {
                        xLabels: w,
                        d3g: l
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    this.chart && (d3.selectAll("#" + this.targetEl[0].id + " svg > *").remove(), this.chart = void 0)
                }
            }]), t
        }(c.default);
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        c = n(13),
        u = r(c),
        p = n(8),
        d = r(p),
        f = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r.pivot = new d.default(n), r
            }
            return i(t, e), s(t, [{
                key: "type",
                value: function () {
                    return "multiBarChart"
                }
            }, {
                key: "getTransformation",
                value: function () {
                    return this.pivot
                }
            }, {
                key: "render",
                value: function (e) {
                    var n = this.d3DataFromPivot(e.schema, e.rows, e.keys, e.groups, e.values, !0, !0, !0);
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, n)
                }
            }, {
                key: "setConfig",
                value: function (e) {
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setConfig", this).call(this, e), this.pivot.setConfig(e)
                }
            }, {
                key: "configureChart",
                value: function (e) {
                    var t = this;
                    e.yAxis.axisLabelDistance(50), e.yAxis.tickFormat(function (e) {
                        return t.yAxisTickFormat(e)
                    }), this.chart.stacked(this.config.stacked);
                    var t = this;
                    this.chart.dispatch.on("stateChange", function (e) {
                        t.config.stacked = e.stacked, setTimeout(function () {
                            t.emitConfig(t.config)
                        }, 500)
                    })
                }
            }]), t
        }(u.default);
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        c = n(13),
        u = r(c),
        p = n(8),
        d = r(p),
        f = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r.pivot = new d.default(n), r
            }
            return i(t, e), s(t, [{
                key: "type",
                value: function () {
                    return "pieChart"
                }
            }, {
                key: "getTransformation",
                value: function () {
                    return this.pivot
                }
            }, {
                key: "render",
                value: function (e) {
                    this.chart = null;
                    var n = this.d3DataFromPivot(e.schema, e.rows, e.keys, e.groups, e.values, !0, !1, !1),
                        r = n.d3g,
                        o = void 0;
                    o = e.groups && e.groups.length > 0 ? function (e, t) {
                        return t + "." + e
                    } : function (e) {
                        return e
                    };
                    var a = r.map(function (e) {
                        return e.values.map(function (t) {
                            return {
                                label: o(t.x, e.key),
                                value: t.y
                            }
                        })
                    });
                    a = [].concat.apply([], a), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, {
                        d3g: a
                    })
                }
            }, {
                key: "setConfig",
                value: function (e) {
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setConfig", this).call(this, e), this.pivot.setConfig(e)
                }
            }, {
                key: "configureChart",
                value: function (e) {
                    e.x(function (e) {
                        return e.label
                    }).y(function (e) {
                        return e.value
                    }).showLabels(!1).showTooltipPercent(!0)
                }
            }]), t
        }(u.default);
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        c = n(13),
        u = r(c),
        p = n(8),
        d = r(p),
        f = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r.pivot = new d.default(n), r
            }
            return i(t, e), s(t, [{
                key: "type",
                value: function () {
                    return "stackedAreaChart"
                }
            }, {
                key: "getTransformation",
                value: function () {
                    return this.pivot
                }
            }, {
                key: "render",
                value: function (e) {
                    var n = this.d3DataFromPivot(e.schema, e.rows, e.keys, e.groups, e.values, !1, !0, !1);
                    this.xLabels = n.xLabels, l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, n)
                }
            }, {
                key: "setConfig",
                value: function (e) {
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setConfig", this).call(this, e), this.pivot.setConfig(e)
                }
            }, {
                key: "configureChart",
                value: function (e) {
                    var t = this;
                    e.xAxis.tickFormat(function (e) {
                        return t.xAxisTickFormat(e, t.xLabels)
                    }), e.yAxis.tickFormat(function (e) {
                        return t.yAxisTickFormat(e)
                    }), e.yAxis.axisLabelDistance(50), e.useInteractiveGuideline(!0), this.chart.style(this.config.style || "stack");
                    var t = this;
                    this.chart.dispatch.on("stateChange", function (e) {
                        t.config.style = e.style, setTimeout(function () {
                            t.emitConfig(t.config)
                        }, 500)
                    })
                }
            }]), t
        }(u.default);
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        c = n(13),
        u = r(c),
        p = n(8),
        d = r(p),
        f = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r.pivot = new d.default(n), r
            }
            return i(t, e), s(t, [{
                key: "type",
                value: function () {
                    return this.config.lineWithFocus ? "lineWithFocusChart" : "lineChart"
                }
            }, {
                key: "getTransformation",
                value: function () {
                    return this.pivot
                }
            }, {
                key: "render",
                value: function (e) {
                    var n = this.d3DataFromPivot(e.schema, e.rows, e.keys, e.groups, e.values, !1, !0, !1);
                    this.xLabels = n.xLabels, l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, n)
                }
            }, {
                key: "setConfig",
                value: function (e) {
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setConfig", this).call(this, e), this.pivot.setConfig(e), this.currentMode !== e.lineWithFocus && (l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this.currentMode = e.lineWithFocus)
                }
            }, {
                key: "configureChart",
                value: function (e) {
                    var t = this;
                    e.xAxis.tickFormat(function (e) {
                        return t.xAxisTickFormat(e, t.xLabels)
                    }), e.yAxis.tickFormat(function (e) {
                        return t.yAxisTickFormat(e, t.xLabels)
                    }), e.yAxis.axisLabelDistance(50), e.useInteractiveGuideline && e.useInteractiveGuideline(!0), this.config.forceY ? e.forceY([0]) : e.forceY([])
                }
            }, {
                key: "getSetting",
                value: function (e) {
                    var t = this,
                        n = t.config;
                    return {
                        template: '<div>\n        <label>\n          <input type="checkbox"\n               ng-model="config.forceY"\n               ng-click="save()" />\n          force Y to 0\n        </label>\n        <br/>\n\n        <label>\n          <input type="checkbox"\n               ng-model="config.lineWithFocus"\n               ng-click="save()" />\n          show line chart with focus\n        </label>\n      </div>',
                        scope: {
                            config: n,
                            save: function () {
                                t.emitConfig(n)
                            }
                        }
                    }
                }
            }]), t
        }(u.default);
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        c = n(13),
        u = r(c),
        p = n(10),
        d = r(p),
        f = function (e) {
            function t(e, n) {
                o(this, t);
                var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r.columnselectorProps = [{
                    name: "xAxis"
                }, {
                    name: "yAxis"
                }, {
                    name: "group"
                }, {
                    name: "size",
                    tooltip: "<li>Size option is valid only when you drop numeric field here.</li>\n                  <li>When data in each axis are discrete,\n                  'number of values in corresponding coordinate' will be used as size.</li>\n                  <li>Zeppelin consider values as discrete when the values contain string value\n                  or the number of distinct values are bigger than 5% of total number of values.</li>\n                  <li>Size field button turns to grey when the option you chose is not valid.</li>"
                }], r.columnselector = new d.default(n, r.columnselectorProps), r
            }
            return i(t, e), s(t, [{
                key: "type",
                value: function () {
                    return "scatterChart"
                }
            }, {
                key: "getTransformation",
                value: function () {
                    return this.columnselector
                }
            }, {
                key: "render",
                value: function (e) {
                    this.tableData = e, this.selectDefault();
                    var n = this.setScatterChart(e, !0);
                    this.xLabels = n.xLabels, this.yLabels = n.yLabels, l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this, n)
                }
            }, {
                key: "configureChart",
                value: function (e) {
                    var t = this;
                    e.xAxis.tickFormat(function (e) {
                        return t.xAxisTickFormat(Math.round(1e3 * e) / 1e3, t.xLabels)
                    }), e.yAxis.tickFormat(function (e) {
                        return t.yAxisTickFormat(Math.round(1e3 * e) / 1e3, t.yLabels)
                    }), e.showDistX(!0).showDistY(!0)
                }
            }, {
                key: "yAxisTickFormat",
                value: function (e, n) {
                    return !n[e] || !isNaN(parseFloat(n[e])) && isFinite(n[e]) ? l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "yAxisTickFormat", this).call(this, e) : n[e]
                }
            }, {
                key: "selectDefault",
                value: function () {
                    this.config.xAxis || this.config.yAxis || (this.tableData.columns.length > 1 ? (this.config.xAxis = this.tableData.columns[0], this.config.yAxis = this.tableData.columns[1]) : 1 === this.tableData.columns.length && (this.config.xAxis = this.tableData.columns[0]))
                }
            }, {
                key: "setScatterChart",
                value: function (e, t) {
                    var n, r, o, a = this.config.xAxis,
                        i = this.config.yAxis,
                        s = this.config.group,
                        l = this.config.size,
                        c = [],
                        u = [],
                        p = {},
                        d = [],
                        f = {},
                        g = {},
                        h = {},
                        m = {},
                        v = {},
                        b = {},
                        y = 0,
                        w = 0,
                        _ = 0,
                        N = "";
                    if (!a && !i) return {
                        d3g: []
                    };
                    for (var S = 0; S < e.rows.length; S++) o = e.rows[S], a && (n = o[a.index], c[S] = n), i && (r = o[i.index], u[S] = r);
                    var I = a && i && this.isDiscrete(c) && this.isDiscrete(u) || !a && this.isDiscrete(u) || !i && this.isDiscrete(c);
                    p = I ? this.setDiscreteScatterData(e) : e.rows, !s && I ? N = "count" : s || l ? !s && l && (N = l.name) : a && i ? N = "(" + a.name + ", " + i.name + ")" : a && !i ? N = a.name : !a && i && (N = i.name);
                    var k = 1e-4;
                    for (S = 0; S < p.length; S++) {
                        o = p[S], a && (n = o[a.index]), i && (r = o[i.index]), s && (N = o[s.index]);
                        var O = I ? o[o.length - 1] : l ? o[l.index] : 1;
                        void 0 === h[N] && (b[_] = N, h[N] = _++), a && void 0 === f[n] && (m[y] = n, f[n] = y++), i && void 0 === g[r] && (v[w] = r, g[r] = w++), d[h[N]] || (d[h[N]] = {
                            key: N,
                            values: []
                        });
                        var T, A = 0;
                        a && (T = (isNaN(n) ? f[n] : parseFloat(n)) + Math.random() * k), i && (A = (isNaN(r) ? g[r] : parseFloat(r)) + Math.random() * k), d[h[N]].values.push({
                            x: T,
                            y: A,
                            size: isNaN(parseFloat(O)) ? 1 : parseFloat(O)
                        })
                    }
                    var E = d[h[N]].values;
                    E.sort(function (e, t) {
                        return e.x - t.x || e.y - t.y
                    });
                    for (var S = 0; S < E.length - 1;) Math.abs(E[S].x - E[S + 1].x) < k && Math.abs(E[S].y - E[S + 1].y) < k ? E.splice(S + 1, 1) : S++;
                    return {
                        xLabels: m,
                        yLabels: v,
                        d3g: d
                    }
                }
            }, {
                key: "setDiscreteScatterData",
                value: function (e) {
                    for (var t, n, r, o = this.config.xAxis, a = this.config.yAxis, i = this.config.group, s = {}, l = 0; l < e.rows.length; l++) {
                        var c = e.rows[l];
                        o && (t = c[o.index]), a && (n = c[a.index]), i && (r = c[i.index]);
                        var u = t + "," + n + "," + r;
                        s[u] ? s[u].size++ : s[u] = {
                            x: t,
                            y: n,
                            group: r,
                            size: 1
                        }
                    }
                    var p = [];
                    for (var d in s) {
                        var f = [];
                        o && (f[o.index] = s[d].x), a && (f[a.index] = s[d].y), i && (f[i.index] = s[d].group), f[e.rows[0].length] = s[d].size, p.push(f)
                    }
                    return p
                }
            }, {
                key: "isDiscrete",
                value: function (e) {
                    for (var t = function (e) {
                            for (var t = {}, n = [], r = 0, o = 0; o < e.length; o++) {
                                var a = e[o];
                                1 !== t[a] && (t[a] = 1, n[r++] = a)
                            }
                            return n
                        }, n = 0; n < e.length; n++)
                        if (isNaN(parseFloat(e[n])) && ("string" == typeof e[n] || e[n] instanceof String)) return !0;
                    var r = .05,
                        o = t(e);
                    return o.length / e.length < r
                }
            }, {
                key: "isValidSizeOption",
                value: function (e) {
                    for (var t = [], n = [], r = this.tableData.rows, o = 0; o < r.length; o++) {
                        var a = r[o],
                            i = a[e.size.index];
                        if (isNaN(parseFloat(i)) || !isFinite(i)) return !1;
                        if (e.xAxis) {
                            var s = a[e.xAxis.index];
                            t[o] = s
                        }
                        if (e.yAxis) {
                            var l = a[e.yAxis.index];
                            n[o] = l
                        }
                    }
                    var c = e.xAxis && e.yAxis && this.isDiscrete(t) && this.isDiscrete(n) || !e.xAxis && this.isDiscrete(n) || !e.yAxis && this.isDiscrete(t);
                    return !c
                }
            }]), t
        }(u.default);
    t.default = f
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i) {
        r.dismiss();
        var s = function (t, n) {
            return o(function (r, o) {
                e.JobInfomationsByFilter = e.jobTypeFilter(t, n), r(e.JobInfomationsByFilter)
            })
        };
        e.doFiltering = function (t, n) {
            s(t, n).then(function () {
                e.isLoadingFilter = !1
            }, function () {})
        }, e.filterValueToName = function (t, n) {
            if (void 0 !== e.activeInterpreters) {
                var r = _.findIndex(e.activeInterpreters, {
                    value: t
                });
                return void 0 !== e.activeInterpreters[r].name ? void 0 !== n && n > e.activeInterpreters[r].name ? e.activeInterpreters[r].name.substr(0, n - 3) + "..." : e.activeInterpreters[r].name : "Interpreter is not set"
            }
        }, e.setFilterValue = function (t) {
            e.filterConfig.filterValueInterpreter = t, e.doFiltering(e.jobInfomations, e.filterConfig)
        }, e.onChangeRunJobToAlwaysTopToggle = function () {
            e.filterConfig.isRunningAlwaysTop = !e.filterConfig.isRunningAlwaysTop, e.doFiltering(e.jobInfomations, e.filterConfig)
        }, e.onChangeSortAsc = function () {
            e.filterConfig.isSortByAsc = !e.filterConfig.isSortByAsc, e.doFiltering(e.jobInfomations, e.filterConfig)
        }, e.doFilterInputTyping = function (t, n, r) {
            var o = 13;
            a.cancel(e.dofilterTimeoutObject), e.isActiveSearchTimer = !0, e.dofilterTimeoutObject = a(function () {
                e.doFiltering(n, r), e.isActiveSearchTimer = !1
            }, 1e4), t.which === o && (a.cancel(e.dofilterTimeoutObject), e.doFiltering(n, r), e.isActiveSearchTimer = !1)
        }, e.doForceFilterInputTyping = function (t, n, r) {
            a.cancel(e.dofilterTimeoutObject), e.doFiltering(n, r), e.isActiveSearchTimer = !1
        }, e.init = function () {
            e.isLoadingFilter = !0, e.jobInfomations = [], e.JobInfomationsByFilter = e.jobInfomations, e.filterConfig = {
                isRunningAlwaysTop: !0,
                filterValueNotebookName: "",
                filterValueInterpreter: "*",
                isSortByAsc: !0
            }, e.sortTooltipMsg = "Switch to sort by desc", e.jobTypeFilter = i, t.getNoteJobsList(), e.$watch("filterConfig.isSortByAsc", function (t) {
                t ? e.sortTooltipMsg = "Switch to sort by desc" : e.sortTooltipMsg = "Switch to sort by asc"
            }), e.$on("$destroy", function () {
                t.unsubscribeJobManager()
            })
        }, e.$on("setNoteJobs", function (t, n) {
            e.lastJobServerUnixTime = n.lastResponseUnixTime, e.jobInfomations = n.jobs, e.jobInfomationsIndexs = e.jobInfomations ? _.indexBy(e.jobInfomations, "noteId") : {}, e.jobTypeFilter(e.jobInfomations, e.filterConfig), e.activeInterpreters = [{
                name: "ALL",
                value: "*"
            }];
            for (var r = _.uniq(_.pluck(e.jobInfomations, "interpreter"), !1), o = 0, a = r.length; o < a; o++) e.activeInterpreters.push({
                name: r[o],
                value: r[o]
            });
            e.doFiltering(e.jobInfomations, e.filterConfig)
        }), e.$on("setUpdateNoteJobs", function (t, n) {
            var r = e.jobInfomations,
                o = e.jobInfomationsIndexs;
            e.lastJobServerUnixTime = n.lastResponseUnixTime;
            var a = n.jobs;
            a.map(function (e) {
                if (void 0 === o[e.noteId]) {
                    var t = angular.copy(e);
                    r.push(t), o[e.noteId] = t
                } else {
                    var n = o[e.noteId];
                    if (void 0 !== e.isRemoved && e.isRemoved === !0) {
                        var a = _.findIndex(o, e.noteId);
                        a > -1 && o.splice(a, 1), a = _.findIndex(r, {
                            noteId: e.noteId
                        }), a && r.splice(a, 1)
                    } else n.isRunningJob = e.isRunningJob, n.noteName = e.noteName, n.noteType = e.noteType, n.interpreter = e.interpreter, n.unixTimeLastRun = e.unixTimeLastRun, n.paragraphs = e.paragraphs
                }
            }), e.doFiltering(r, e.filterConfig)
        })
    }
    angular.module("zeppelinWebApp").controller("JobmanagerCtrl", n), n.$inject = ["$scope", "websocketMsgSrv", "$interval", "ngToast", "$q", "$timeout", "jobManagerFilter"]
}, function (e, t) {
    "use strict";

    function n(e, t, n) {
        e.init = function (t) {
            e.progressValue = 0
        }, e.getProgress = function () {
            var t = _.pluck(e.notebookJob.paragraphs, "status"),
                n = _.countBy(t, function (e) {
                    return "FINISHED" === e || "RUNNING" === e ? "matchCount" : "none"
                }),
                r = t.length,
                o = n.matchCount,
                a = Math.ceil(o / r * 100);
            return isNaN(a) ? 0 : a
        }, e.runNotebookJob = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定运行所有工作表？",
                callback: function (r) {
                    r && t({
                        method: "POST",
                        url: n.getRestApiBase() + "/notebook/job/" + e,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then(function (e) {}, function (e) {
                        var t = "后台服务异常";
                        e.data.message && (t = e.data.message), BootstrapDialog.alert({
                            closable: !0,
                            title: "执行失败",
                            message: t
                        })
                    })
                }
            })
        }, e.stopNotebookJob = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要停止所有工作表?",
                callback: function (r) {
                    r && t({
                        method: "DELETE",
                        url: n.getRestApiBase() + "/notebook/job/" + e,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then(function (e) {}, function (e) {
                        var t = "后台服务异常";
                        e.data.message && (t = e.data.message), BootstrapDialog.alert({
                            closable: !0,
                            title: "停止失败",
                            message: t
                        })
                    })
                }
            })
        }, e.lastExecuteTime = function (e) {
            return moment.unix(e / 1e3).fromNow()
        }
    }
    angular.module("zeppelinWebApp").controller("JobCtrl", n), n.$inject = ["$scope", "$http", "baseUrlSrv"]
}, function (e, t) {
    "use strict";

    function n() {
        function e(e, t) {
            var n = t.filterValueInterpreter,
                r = t.filterValueNotebookName,
                o = t.isSortByAsc,
                a = e;
            return void 0 === n ? a = _.filter(a, function (e) {
                return void 0 === e.interpreter
            }) : "*" !== n && (a = _.where(a, {
                interpreter: n
            })), "" !== r && (a = _.filter(a, function (e) {
                var t = r.toLocaleLowerCase(),
                    n = e.noteName.toLocaleLowerCase();
                return n.match(new RegExp(".*" + t + ".*"))
            })), a = _.sortBy(a, function (e) {
                return e.noteName.toLowerCase()
            }), o ? a : a.reverse()
        }
        return e
    }
    angular.module("zeppelinWebApp").filter("jobManager", n)
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i) {
        var s = [];
        t.interpreterSettings = [], t.availableInterpreters = {}, t.showAddNewSetting = !1, t.showRepositoryInfo = !1, t.searchInterpreter = "", t._ = _, o.dismiss(), t.openPermissions = function () {
            t.showInterpreterAuth = !0
        }, t.closePermissions = function () {
            t.showInterpreterAuth = !1
        };
        var l = function () {
            var e = {
                tags: !1,
                multiple: !0,
                tokenSeparators: [",", " "],
                minimumInputLength: 2,
                ajax: {
                    url: function (e) {
                        return !!e.term && r.getRestApiBase() + "/security/userlist/" + e.term
                    },
                    delay: 250,
                    processResults: function (e, t) {
                        var n = [];
                        if (0 !== e.body.users.length)
                            for (var r = 0; r < e.body.users.length; r++) n.push({
                                id: e.body.users[r],
                                text: e.body.users[r]
                            });
                        return {
                            results: n,
                            pagination: {
                                more: !1
                            }
                        }
                    },
                    cache: !1
                }
            };
            return e
        };
        t.togglePermissions = function (e) {
            angular.element("#" + e + "Users").select2(l()), t.showInterpreterAuth ? t.closePermissions() : t.openPermissions()
        }, t.$on("ngRenderFinished", function (e, n) {
            for (var r = 0; r < t.interpreterSettings.length; r++) angular.element("#" + t.interpreterSettings[r].name + "Users").select2(l())
        });
        var c = function () {
                n.get(r.getRestApiBase() + "/interpreter/setting").success(function (e, n, r, o) {
                    t.interpreterSettings = e.body, u()
                }).error(function (e, t, n, r) {
                    401 === t && (o.danger({
                        content: "You don't have permission on this page",
                        verticalPosition: "bottom",
                        timeout: "3000"
                    }), setTimeout(function () {
                        window.location.replace("/")
                    }, 3e3))
                })
            },
            u = function () {
                for (var e = !1, n = 0; n < t.interpreterSettings.length; n++) {
                    var r = t.interpreterSettings[n];
                    "DOWNLOADING_DEPENDENCIES" === r.status && (e = !0), ("ERROR" === r.status || r.errorReason) && o.danger({
                        content: "Error setting properties for interpreter '" + r.group + "." + r.name + "': " + r.errorReason,
                        verticalPosition: "top",
                        dismissOnTimeout: !1
                    })
                }
                e && a(function () {
                    "/interpreter" === i.current.$$route.originalPath && c()
                }, 2e3)
            },
            p = function () {
                n.get(r.getRestApiBase() + "/interpreter").success(function (e, n, r, o) {
                    t.availableInterpreters = e.body
                }).error(function (e, t, n, r) {})
            },
            d = function (e) {
                angular.extend(e, {
                    propertyValue: "",
                    propertyKey: ""
                })
            },
            f = function (e) {
                angular.extend(e, {
                    depArtifact: "",
                    depExclude: ""
                })
            },
            g = function (e) {
                s.splice(e, 1)
            };
        t.copyOriginInterpreterSettingProperties = function (e) {
            var n = _.findIndex(t.interpreterSettings, {
                id: e
            });
            s[n] = angular.copy(t.interpreterSettings[n])
        }, t.setPerNoteOption = function (e, n) {
            var r;
            if (void 0 === e) r = t.newInterpreterSetting.option;
            else {
                var o = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    a = t.interpreterSettings[o];
                r = a.option
            }
            "isolated" === n ? (r.perNote = n, r.session = !1, r.process = !0) : "scoped" === n ? (r.perNote = n, r.session = !0, r.process = !1) : (r.perNote = "shared", r.session = !1, r.process = !1)
        }, t.setPerUserOption = function (e, n) {
            var r;
            if (void 0 === e) r = t.newInterpreterSetting.option;
            else {
                var o = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    a = t.interpreterSettings[o];
                r = a.option
            }
            "isolated" === n ? (r.perUser = n, r.session = !1, r.process = !0) : "scoped" === n ? (r.perUser = n, r.session = !0, r.process = !1) : (r.perUser = "shared", r.session = !1, r.process = !1)
        }, t.getPerNoteOption = function (e) {
            var n;
            if (void 0 === e) n = t.newInterpreterSetting.option;
            else {
                var r = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    o = t.interpreterSettings[r];
                n = o.option
            }
            return "scoped" === n.perNote ? "scoped" : "isolated" === n.perNote ? "isolated" : "shared"
        }, t.getPerUserOption = function (e) {
            var n;
            if (void 0 === e) n = t.newInterpreterSetting.option;
            else {
                var r = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    o = t.interpreterSettings[r];
                n = o.option
            }
            return "scoped" === n.perUser ? "scoped" : "isolated" === n.perUser ? "isolated" : "shared"
        }, t.getInterpreterRunningOption = function (n) {
            var r, o = "shared",
                a = "Globally",
                i = "Per Note",
                s = "Per User";
            if (void 0 === n) r = t.newInterpreterSetting.option;
            else {
                var l = _.findIndex(t.interpreterSettings, {
                        id: n
                    }),
                    c = t.interpreterSettings[l];
                r = c.option
            }
            var u = r.perNote,
                p = r.perUser;
            if (u === o && p === o) return a;
            if ("anonymous" === e.ticket.ticket && "[]" === e.ticket.roles) {
                if (void 0 !== u && "string" == typeof u && "" !== u) return i
            } else if ("anonymous" !== e.ticket.ticket && void 0 !== u && "string" == typeof u && "" !== u) return void 0 !== p && "string" == typeof p && "" !== p ? s : i;
            return r.perNote = o, r.perUser = o, a
        }, t.setInterpreterRunningOption = function (e, n, r) {
            var o;
            if (void 0 === e) o = t.newInterpreterSetting.option;
            else {
                var a = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    i = t.interpreterSettings[a];
                o = i.option
            }
            o.perNote = n, o.perUser = r
        }, t.updateInterpreterSetting = function (e, a) {
            var i = BootstrapDialog.confirm({
                closable: !1,
                closeByBackdrop: !1,
                closeByKeyboard: !1,
                title: "",
                message: "是否确定要更新该插件，并以新的配置重新启动？",
                callback: function (s) {
                    if (s) {
                        var l = _.findIndex(t.interpreterSettings, {
                                id: a
                            }),
                            c = t.interpreterSettings[l];
                        ("" !== c.propertyKey || c.propertyKey) && t.addNewInterpreterProperty(a), ("" !== c.depArtifact || c.depArtifact) && t.addNewInterpreterDependency(a), c.option || (c.option = {}), void 0 === c.option.isExistingProcess && (c.option.isExistingProcess = !1), void 0 === c.option.setPermission && (c.option.setPermission = !1), void 0 === c.option.isUserImpersonate && (c.option.isUserImpersonate = !1), "Per User" === t.getInterpreterRunningOption(a) && "isolated" === t.getPerUserOption(a) || (c.option.isUserImpersonate = !1), void 0 === c.option.remote && (c.option.remote = !0), c.option.users = angular.element("#" + c.name + "Users").val();
                        var p = {
                            option: angular.copy(c.option),
                            properties: angular.copy(c.properties),
                            dependencies: angular.copy(c.dependencies)
                        };
                        return i.$modalFooter.find("button").addClass("disabled"), i.$modalFooter.find('button:contains("OK")').html('<i class="fa fa-circle-o-notch fa-spin"></i> Saving Setting'), n.put(r.getRestApiBase() + "/interpreter/setting/" + a, p).success(function (e, n, r, o) {
                            t.interpreterSettings[l] = e.body, g(l), u(), i.close()
                        }).error(function (t, n, r, a) {
                            o.danger({
                                content: t.message,
                                verticalPosition: "bottom"
                            }), e.$show(), i.close()
                        }), !1
                    }
                    e.$show()
                }
            })
        }, t.resetInterpreterSetting = function (e) {
            var n = _.findIndex(t.interpreterSettings, {
                id: e
            });
            t.interpreterSettings[n] = angular.copy(s[n]), g(n)
        }, t.removeInterpreterSetting = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要删除该插件设置?",
                callback: function (o) {
                    o && n.delete(r.getRestApiBase() + "/interpreter/setting/" + e).success(function (n, r, o, a) {
                        var i = _.findIndex(t.interpreterSettings, {
                            id: e
                        });
                        t.interpreterSettings.splice(i, 1)
                    }).error(function (e, t, n, r) {})
                }
            })
        }, t.newInterpreterGroupChange = function () {
            for (var e = _.pluck(_.filter(t.availableInterpreters, {
                    name: t.newInterpreterSetting.group
                }), "properties"), n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var a in o) n[a] = {
                    value: o[a].defaultValue,
                    description: o[a].description
                }
            }
            t.newInterpreterSetting.properties = n
        }, t.restartInterpreterSetting = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要重启该插件？",
                callback: function (a) {
                    a && n.put(r.getRestApiBase() + "/interpreter/setting/restart/" + e).success(function (n, r, a, i) {
                        var s = _.findIndex(t.interpreterSettings, {
                            id: e
                        });
                        t.interpreterSettings[s] = n.body, o.info("插件已经停止，它将会在下一次任务触发时启动。")
                    }).error(function (e, t, n, r) {
                        var a = null !== e ? e.message : "无法连接后台服务";
                        o.danger(a)
                    })
                }
            })
        }, t.addNewInterpreterSetting = function () {
            if (!t.newInterpreterSetting.name || !t.newInterpreterSetting.name.trim() || !t.newInterpreterSetting.group) return void BootstrapDialog.alert({
                closable: !0,
                title: "添加新的插件",
                message: "请填写插件名车和所属的组。"
            });
            if (t.newInterpreterSetting.name.indexOf(".") >= 0) return void BootstrapDialog.alert({
                closable: !0,
                title: "添加新的插件",
                message: "'.' 的插件名称无效！"
            });
            if (_.findIndex(t.interpreterSettings, {
                    name: t.newInterpreterSetting.name
                }) >= 0) return void BootstrapDialog.alert({
                closable: !0,
                title: "添加新的插件",
                message: "命名为 " + t.newInterpreterSetting.name + " 已经存在！"
            });
            var e = t.newInterpreterSetting;
            ("" !== e.propertyKey || e.propertyKey) && t.addNewInterpreterProperty(), ("" !== e.depArtifact || e.depArtifact) && t.addNewInterpreterDependency(), void 0 === e.option.setPermission && (e.option.setPermission = !1), e.option.users = angular.element("#newInterpreterUsers").val();
            var a = angular.copy(t.newInterpreterSetting),
                i = {};
            for (var s in e.properties) i[s] = e.properties[s].value;
            a.properties = i, n.post(r.getRestApiBase() + "/interpreter/setting", a).success(function (e, n, r, o) {
                t.resetNewInterpreterSetting(), c(), t.showAddNewSetting = !1, u()
            }).error(function (e, t, n, r) {
                o.danger({
                    content: e.message,
                    verticalPosition: "bottom"
                })
            })
        }, t.cancelInterpreterSetting = function () {
            t.showAddNewSetting = !1, t.resetNewInterpreterSetting()
        }, t.resetNewInterpreterSetting = function () {
            t.newInterpreterSetting = {
                name: void 0,
                group: void 0,
                properties: {},
                dependencies: [],
                option: {
                    remote: !0,
                    isExistingProcess: !1,
                    setPermission: !1,
                    session: !1,
                    process: !1
                }
            }, d(t.newInterpreterSetting)
        }, t.removeInterpreterProperty = function (e, n) {
            if (void 0 === n) delete t.newInterpreterSetting.properties[e];
            else {
                var r = _.findIndex(t.interpreterSettings, {
                    id: n
                });
                delete t.interpreterSettings[r].properties[e]
            }
        }, t.removeInterpreterDependency = function (e, n) {
            if (void 0 === n) t.newInterpreterSetting.dependencies = _.reject(t.newInterpreterSetting.dependencies, function (t) {
                return t.groupArtifactVersion === e
            });
            else {
                var r = _.findIndex(t.interpreterSettings, {
                    id: n
                });
                t.interpreterSettings[r].dependencies = _.reject(t.interpreterSettings[r].dependencies, function (t) {
                    return t.groupArtifactVersion === e
                })
            }
        }, t.addNewInterpreterProperty = function (e) {
            if (void 0 === e) {
                if (!t.newInterpreterSetting.propertyKey || "" === t.newInterpreterSetting.propertyKey) return;
                t.newInterpreterSetting.properties[t.newInterpreterSetting.propertyKey] = {
                    value: t.newInterpreterSetting.propertyValue
                }, d(t.newInterpreterSetting)
            } else {
                var n = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    r = t.interpreterSettings[n];
                if (!r.propertyKey || "" === r.propertyKey) return;
                r.properties[r.propertyKey] = r.propertyValue, d(r)
            }
        }, t.addNewInterpreterDependency = function (e) {
            if (void 0 === e) {
                if (!t.newInterpreterSetting.depArtifact || "" === t.newInterpreterSetting.depArtifact) return;
                var n = t.newInterpreterSetting;
                for (var r in n.dependencies) n.dependencies[r].groupArtifactVersion === n.depArtifact && (n.dependencies[r] = {
                    groupArtifactVersion: n.depArtifact,
                    exclusions: n.depExclude
                }, n.dependencies.splice(r, 1));
                n.dependencies.push({
                    groupArtifactVersion: n.depArtifact,
                    exclusions: "" === n.depExclude ? [] : n.depExclude
                }), f(n)
            } else {
                var o = _.findIndex(t.interpreterSettings, {
                        id: e
                    }),
                    a = t.interpreterSettings[o];
                if (!a.depArtifact || "" === a.depArtifact) return;
                for (var i in a.dependencies) a.dependencies[i].groupArtifactVersion === a.depArtifact && (a.dependencies[i] = {
                    groupArtifactVersion: a.depArtifact,
                    exclusions: a.depExclude
                }, a.dependencies.splice(i, 1));
                a.dependencies.push({
                    groupArtifactVersion: a.depArtifact,
                    exclusions: "" === a.depExclude ? [] : a.depExclude
                }), f(a)
            }
        }, t.resetNewRepositorySetting = function () {
            t.newRepoSetting = {
                id: "",
                url: "",
                snapshot: !1,
                username: "",
                password: "",
                proxyProtocol: "HTTP",
                proxyHost: "",
                proxyPort: null,
                proxyLogin: "",
                proxyPassword: ""
            }
        };
        var h = function () {
            n.get(r.getRestApiBase() + "/interpreter/repository").success(function (e, n, r, o) {
                t.repositories = e.body
            }).error(function (e, t, n, r) {})
        };
        t.addNewRepository = function () {
            var e = angular.copy(t.newRepoSetting);
            n.post(r.getRestApiBase() + "/interpreter/repository", e).success(function (e, n, r, o) {
                h(), t.resetNewRepositorySetting(), angular.element("#repoModal").modal("hide")
            }).error(function (e, t, n, r) {})
        }, t.removeRepository = function (e) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要删除该插件库？",
                callback: function (o) {
                    o && n.delete(r.getRestApiBase() + "/interpreter/repository/" + e).success(function (n, r, o, a) {
                        var i = _.findIndex(t.repositories, {
                            id: e
                        });
                        t.repositories.splice(i, 1)
                    }).error(function (e, t, n, r) {})
                }
            })
        }, t.isDefaultRepository = function (e) {
            return "central" === e || "local" === e
        }, t.showErrorMessage = function (e) {
            BootstrapDialog.show({
                title: "下载外部依赖失败",
                message: e.errorReason
            })
        };
        var m = function () {
            t.resetNewInterpreterSetting(), t.resetNewRepositorySetting(), c(), p(), h()
        };
        t.showSparkUI = function (e) {
            n.get(r.getRestApiBase() + "/interpreter/getmetainfos/" + e + "?propName=url").success(function (e, t, n, r) {
                var o = e.body.url;
                return o ? void window.open(o, "_blank") : void BootstrapDialog.alert({
                    message: "Spark程序没有启动！"
                })
            }).error(function (e, t, n, r) {})
        }, m()
    }
    angular.module("zeppelinWebApp").controller("InterpreterCtrl", n), n.$inject = ["$rootScope", "$scope", "$http", "baseUrlSrv", "ngToast", "$timeout", "$route"]
}, function (e, t) {
    "use strict";

    function n() {
        return function (e) {
            var t = e ? Object.keys(e) : [];
            return t.sort()
        }
    }
    angular.module("zeppelinWebApp").filter("sortByKey", n)
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o) {
        e._ = _, o.dismiss(), e.credentialInfo = [], e.showAddNewCredentialInfo = !1, e.availableInterpreters = [];
        var a = function () {
            n.get(r.getRestApiBase() + "/credential").success(function (t, n, r, o) {
                e.credentialInfo = _.map(t.body.userCredentials, function (e, t) {
                    return {
                        entity: t,
                        password: e.password,
                        username: e.username
                    }
                })
            }).error(function (e, t, n, r) {
                401 === t && (o.danger({
                    content: "您没有当前页面的操作权限！",
                    verticalPosition: "bottom",
                    timeout: "3000"
                }), setTimeout(function () {
                    window.location.replace("/")
                }, 3e3))
            })
        };
        e.addNewCredentialInfo = function () {
            if (e.entity && _.isEmpty(e.entity.trim()) && e.username && _.isEmpty(e.username.trim())) return void o.danger({
                content: "用户名 \\ 实体不能为空！",
                verticalPosition: "bottom",
                timeout: "3000"
            });
            var t = {
                entity: e.entity,
                username: e.username,
                password: e.password
            };
            n.put(r.getRestApiBase() + "/credential", t).success(function (n, r, a, i) {
                o.success({
                    content: "证书保存成功。",
                    verticalPosition: "bottom",
                    timeout: "3000"
                }), e.credentialInfo.push(t), s(), e.showAddNewCredentialInfo = !1
            }).error(function (e, t, n, r) {
                o.danger({
                    content: "证书保存失败！",
                    verticalPosition: "bottom",
                    timeout: "3000"
                })
            })
        };
        var i = function () {
            n.get(r.getRestApiBase() + "/interpreter/setting").success(function (t, n, r, o) {
                for (var a = 0; a < t.body.length; a++) e.availableInterpreters.push(t.body[a].group + "." + t.body[a].name);
                angular.element("#entityname").autocomplete({
                    source: e.availableInterpreters,
                    select: function (t, n) {
                        return e.entity = n.item.value, !1
                    }
                })
            }).error(function (e, t, n, r) {})
        };
        e.toggleAddNewCredentialInfo = function () {
            e.showAddNewCredentialInfo ? e.showAddNewCredentialInfo = !1 : e.showAddNewCredentialInfo = !0
        }, e.cancelCredentialInfo = function () {
            e.showAddNewCredentialInfo = !1, s()
        };
        var s = function () {
            e.entity = "", e.username = "", e.password = ""
        };
        e.copyOriginCredentialsInfo = function () {
            o.info({
                content: "由于实体是唯一的密钥，因此您只能编辑用户名和密码",
                verticalPosition: "bottom",
                timeout: "3000"
            })
        }, e.updateCredentialInfo = function (t, a, i) {
            var s = {
                entity: i,
                username: a.username,
                password: a.password
            };
            return n.put(r.getRestApiBase() + "/credential/", s).success(function (t, n, r, o) {
                var a = _.findIndex(e.credentialInfo, {
                    entity: i
                });
                return e.credentialInfo[a] = s, !0
            }).error(function (e, n, r, a) {
                o.danger({
                    content: "无法保存证书",
                    verticalPosition: "bottom",
                    timeout: "3000"
                }), t.$show()
            }), !1
        }, e.removeCredentialInfo = function (t) {
            BootstrapDialog.confirm({
                closable: !1,
                closeByBackdrop: !1,
                closeByKeyboard: !1,
                title: "",
                message: "是否确定要删除该证书的信息？",
                callback: function (o) {
                    o && n.delete(r.getRestApiBase() + "/credential/" + t).success(function (n, r, o, a) {
                        var i = _.findIndex(e.credentialInfo, {
                            entity: t
                        });
                        e.credentialInfo.splice(i, 1)
                    }).error(function (e, t, n, r) {})
                }
            })
        };
        var l = function () {
            i(), a()
        };
        l()
    }
    angular.module("zeppelinWebApp").controller("CredentialCtrl", n), n.$inject = ["$scope", "$rootScope", "$http", "baseUrlSrv", "ngToast"]
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o) {
        e.configrations = [], e._ = _, o.dismiss();
        var a = function () {
                n.get(r.getRestApiBase() + "/configurations/all").success(function (t, n, r, o) {
                    e.configurations = t.body
                }).error(function (e, t, n, r) {
                    401 === t && (o.danger({
                        content: "您没有当前页面上的操作权限！",
                        verticalPosition: "bottom",
                        timeout: "3000"
                    }), setTimeout(function () {
                        window.location.replace("/")
                    }, 3e3))
                })
            },
            i = function () {
                a()
            };
        i()
    }
    angular.module("zeppelinWebApp").controller("ConfigurationCtrl", n), n.$inject = ["$scope", "$rootScope", "$http", "baseUrlSrv", "ngToast"]
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i, s, l, c, u, p, d, f, g) {
        var h = "_Z_ANGULAR_FUNC_";
        t.keys = Object.keys, e.parentNote = null, e.paragraph = null, e.originalText = "", e.editor = null;
        var m = {},
            v = !1,
            b = !1,
            y = t.$new(!0, t);
        e.compiledScope = y, y.z = {
            runParagraph: function (t) {
                if (t) {
                    var n = e.parentNote.paragraphs.filter(function (e) {
                        return e.id === t
                    });
                    if (1 === n.length) {
                        var r = n[0];
                        u.runParagraph(r.id, r.title, r.text, r.config, r.settings.params)
                    } else d.danger({
                        content: "无法找到 id 名为 '" + t + " 的工作表'",
                        verticalPosition: "top",
                        dismissOnTimeout: !1
                    })
                } else d.danger({
                    content: "当调用 z.runParagraph(工作表Id) 方法时，请提供提供 '工作表Id' ",
                    verticalPosition: "top",
                    dismissOnTimeout: !1
                })
            },
            angularBind: function (e, t, n) {
                n ? u.clientBindAngularObject(o.noteId, e, t, n) : d.danger({
                    content: "当调用 z.angularBind(varName, value, 'PUT_HERE_PARAGRAPH_ID') 方法时，请提供提供 '工作表Id' ",
                    verticalPosition: "top",
                    dismissOnTimeout: !1
                })
            },
            angularUnbind: function (e, t) {
                t ? u.clientUnbindAngularObject(o.noteId, e, t) : d.danger({
                    content: "当调用 z.angularUnbind(varName, 'PUT_HERE_PARAGRAPH_ID') 方法时，请提供提供 '工作表Id' ",
                    verticalPosition: "top",
                    dismissOnTimeout: !1
                })
            }
        };
        var w = {};
        e.init = function (t, n) {
            e.paragraph = t, e.parentNote = n, e.originalText = angular.copy(t.text), e.chart = {}, e.baseMapOption = ["Streets", "Satellite", "Hybrid", "Topo", "Gray", "Oceans", "Terrain"], e.colWidthOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], e.paragraphFocused = !1, t.focus && (e.paragraphFocused = !0), e.paragraph.config || (e.paragraph.config = {}), g.put(e.paragraph.id + "_paragraphScope", y), N(e.paragraph.config)
        };
        var N = function (t) {
            var n = e.paragraph.settings.forms;
            t.colWidth || (t.colWidth = 12), void 0 === t.enabled && (t.enabled = !0);
            for (var r in n) n[r] && n[r].options && void 0 === t.runOnSelectionChange && (t.runOnSelectionChange = !0);
            t.results || (t.results = {}), t.editorSetting ? t.editorSetting.editOnDblClick && (m.isOutputHidden = t.editorSetting.editOnDblClick) : t.editorSetting = {}
        };
        e.$on("updateParagraphOutput", function (n, r) {
            if (e.paragraph.id === r.paragraphId) {
                e.paragraph.results || (e.paragraph.results = {}), e.paragraph.results.msg || (e.paragraph.results.msg = []);
                var o = !!e.paragraph.results.msg[r.index];
                e.paragraph.results.msg[r.index] = {
                    data: r.data,
                    type: r.type
                }, o && t.$broadcast("updateResult", e.paragraph.results.msg[r.index], e.paragraph.config.results[r.index], e.paragraph, r.index)
            }
        }), e.getIframeDimensions = function () {
            if (e.asIframe) {
                var t = "#" + o.paragraphId + "_container",
                    n = angular.element(t).height();
                return n
            }
            return 0
        }, e.$watch(e.getIframeDimensions, function (t, n) {
            if (e.asIframe && t) {
                var o = {};
                o.height = t, o.url = a.$$absUrl, r.parent.postMessage(angular.toJson(o), "*")
            }
        }), e.getEditor = function () {
            return e.editor
        }, e.$watch(e.getEditor, function (t, n) {
            e.editor && null !== t && void 0 !== t && (e.revisionView === !0 ? e.editor.setReadOnly(!0) : e.editor.setReadOnly(!1))
        });
        var S = function (e) {
            return !e
        };
        e.isRunning = function (e) {
            return "RUNNING" === e.status || "PENDING" === e.status
        }, e.cancelParagraph = function (e) {
            u.cancelParagraphRun(e.id)
        }, e.runParagraph = function (t) {
            u.runParagraph(e.paragraph.id, e.paragraph.title, t, e.paragraph.config, e.paragraph.settings.params), e.originalText = angular.copy(t), e.dirtyText = void 0, e.paragraph.config.editorSetting.editOnDblClick ? k(e.paragraph) : m.isOutputHidden && !e.paragraph.config.editorSetting.editOnDblClick && O(e.paragraph), m.isOutputHidden = e.paragraph.config.editorSetting.editOnDblClick
        }, e.saveParagraph = function (t) {
            var n = t.text;
            void 0 !== n && n !== e.originalText && ($(t), e.originalText = n, e.dirtyText = void 0)
        }, e.toggleEnableDisable = function (e) {
            e.config.enabled = !e.config.enabled, $(e)
        }, e.run = function (t, n) {
            n && !e.isRunning(t) && e.runParagraph(n)
        }, e.turnOnAutoRun = function (e) {
            e.config.runOnSelectionChange = !e.config.runOnSelectionChange, $(e)
        }, e.moveUp = function (t) {
            e.$emit("moveParagraphUp", t)
        }, e.moveDown = function (t) {
            e.$emit("moveParagraphDown", t)
        }, e.insertNew = function (t) {
            e.$emit("insertParagraph", e.paragraph.id, t)
        }, e.copyPara = function (t) {
            var n = e.getEditorValue();
            n && e.copyParagraph(n, t)
        }, e.copyParagraph = function (t, n) {
            for (var r = -1, o = 0; o < e.note.paragraphs.length; o++)
                if (e.note.paragraphs[o].id === e.paragraph.id) {
                    r = "above" === n ? o : o + 1;
                    break
                }
            if (!(r < 0 || r > e.note.paragraphs.length)) {
                var a = angular.copy(e.paragraph.config);
                a.editorHide = !1, u.copyParagraph(r, e.paragraph.title, t, a, e.paragraph.settings.params)
            }
        }, e.removeParagraph = function (t) {
            var n = angular.element('div[id$="_paragraphColumn_main"]');
            0 === n[n.length - 1].id.indexOf(t.id) ? BootstrapDialog.alert({
                closable: !0,
                message: "不能删除最后一个工作表。",
                callback: function (t) {
                    t && e.editor.focus()
                }
            }) : BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要删除该工作表？",
                callback: function (n) {
                    n && (u.removeParagraph(t.id), e.$emit("moveFocusToNextParagraph", e.paragraph.id))
                }
            })
        }, e.clearParagraphOutput = function (e) {
            u.clearParagraphOutput(e.id)
        }, e.toggleEditor = function (t) {
            t.config.editorHide ? e.openEditor(t) : e.closeEditor(t)
        }, e.closeEditor = function (e) {
            e.config.editorHide = !0, $(e)
        }, e.openEditor = function (e) {
            e.config.editorHide = !1, $(e)
        }, e.closeTable = function (e) {
            e.config.tableHide = !0, $(e)
        }, e.openTable = function (e) {
            e.config.tableHide = !1, $(e)
        };
        var I = function (e) {
                T(e, !1, !0)
            },
            k = function (e) {
                T(e, !0, !1)
            },
            O = function (e) {
                T(e, !1, !1)
            },
            T = function (e, t, n) {
                e.config.editorHide = t, e.config.tableHide = n, $(e)
            };
        e.showTitle = function (e) {
            e.config.title = !0, $(e)
        }, e.hideTitle = function (e) {
            e.config.title = !1, $(e)
        }, e.setTitle = function (e) {
            $(e)
        }, e.showLineNumbers = function (t) {
            e.editor && (t.config.lineNumbers = !0, e.editor.renderer.setShowGutter(!0), $(t))
        }, e.hideLineNumbers = function (t) {
            e.editor && (t.config.lineNumbers = !1, e.editor.renderer.setShowGutter(!1), $(t))
        }, e.columnWidthClass = function (t) {
            return e.asIframe ? "col-md-12" : "paragraph-col col-md-" + t
        }, e.changeColWidth = function (e, t) {
            angular.element(".navbar-right.open").removeClass("open"), e.config.colWidth = t, $(e)
        }, e.toggleOutput = function (e) {
            e.config.tableHide = !e.config.tableHide, $(e)
        }, e.loadForm = function (t, n) {
            var r = t.defaultValue;
            n[t.name] && (r = n[t.name]), e.paragraph.settings.params[t.name] = r
        }, e.toggleCheckbox = function (t, n) {
            var r = e.paragraph.settings.params[t.name].indexOf(n.value);
            r > -1 ? e.paragraph.settings.params[t.name].splice(r, 1) : e.paragraph.settings.params[t.name].push(n.value)
        }, e.aceChanged = function (t, n) {
            var r = n.getSession(),
                o = r.getValue();
            e.dirtyText = o, e.startSaveTimer(), x(r, o, n.getCursorPosition())
        }, e.aceLoaded = function (n) {
            var r = ace.require("ace/ext/language_tools"),
                o = ace.require("ace/range").Range;
            if (n.$blockScrolling = 1 / 0, e.editor = n, e.editor.on("input", e.aceChanged), "{{paragraph.id}}_editor" !== n.container.id) {
                e.editor.renderer.setShowGutter(e.paragraph.config.lineNumbers), e.editor.setShowFoldWidgets(!1), e.editor.setHighlightActiveLine(!1), e.editor.setHighlightGutterLine(!1), e.editor.getSession().setUseWrapMode(!0), e.editor.setTheme("ace/theme/chrome"), e.editor.setReadOnly(e.isRunning(e.paragraph)), e.paragraphFocused && (e.editor.focus(), e.goToEnd(e.editor)), C(n), angular.element(window).resize(function () {
                    C(n)
                }), navigator.appVersion.indexOf("Mac") !== -1 ? (e.editor.setKeyboardHandler("ace/keyboard/emacs"), t.isMac = !0) : navigator.appVersion.indexOf("Win") === -1 && navigator.appVersion.indexOf("X11") === -1 && navigator.appVersion.indexOf("Linux") === -1 || (t.isMac = !1);
                var a = {
                    getCompletions: function (t, n, r, a, i) {
                        if (t.isFocused()) {
                            r = n.getTextRange(new o(0, 0, r.row, r.column)).length;
                            var s = n.getValue();
                            u.completion(e.paragraph.id, s, r), e.$on("completionList", function (e, t) {
                                if (t.completions) {
                                    var n = [];
                                    for (var r in t.completions) {
                                        var o = t.completions[r];
                                        n.push({
                                            name: o.name,
                                            value: o.value,
                                            score: 300
                                        })
                                    }
                                    i(null, n)
                                }
                            })
                        }
                    }
                };
                r.setCompleters([a, r.keyWordCompleter, r.snippetCompleter, r.textCompleter]), e.editor.setOptions({
                    enableBasicAutocompletion: !0,
                    enableSnippets: !1,
                    enableLiveAutocompletion: !1
                }), e.editor.on("focus", function () {
                    A(!0)
                }), e.editor.on("blur", function () {
                    A(!1), e.saveParagraph(e.paragraph)
                }), e.editor.on("paste", function (e) {
                    0 === e.text.indexOf("%") && (v = !0)
                }), e.editor.getSession().on("change", function (e, t) {
                    C(n)
                }), x(e.editor.getSession(), e.editor.getSession().getValue()), e.editor.commands.bindKey("ctrl-alt-n.", null), e.editor.commands.removeCommand("showSettingsMenu"), e.editor.commands.bindKey("ctrl-alt-l", null), e.editor.commands.bindKey("ctrl-alt-w", null), e.editor.commands.bindKey("ctrl-alt-a", null), e.editor.commands.bindKey("ctrl-alt-k", null), e.editor.commands.bindKey("ctrl-alt-e", null), e.editor.commands.bindKey("ctrl-alt-t", null), e.editor.commands.bindKey("ctrl-.", "startAutocomplete"), e.editor.commands.bindKey("ctrl-space", null);
                var i = function (t) {
                    var n = e.editor.getSession().getLength(),
                        r = e.editor.getCursorPosition().row;
                    0 === r && t <= 0 ? e.$emit("moveFocusToPreviousParagraph", e.paragraph.id) : r === n - 1 && t >= 0 ? e.$emit("moveFocusToNextParagraph", e.paragraph.id) : e.scrollToCursor(e.paragraph.id, t)
                };
                e.editor.keyBinding.origOnCommandKey = e.editor.keyBinding.onCommandKey, e.editor.keyBinding.onCommandKey = function (t, n, r) {
                    if (e.editor.completer && e.editor.completer.activated);
                    else {
                        if (parseInt(angular.element("#" + e.paragraph.id + "_editor > textarea").css("top").replace("px", "")) < 0) {
                            var o = e.editor.getCursorPosition(),
                                a = e.editor.renderer.$cursorLayer.getPixelPosition(o, !0);
                            angular.element("#" + e.paragraph.id + "_editor > textarea").css("top", a.top)
                        }
                        var s = -1,
                            l = 1;
                        switch (r) {
                            case 38:
                                i(s);
                                break;
                            case 80:
                                t.ctrlKey && !t.altKey && i(s);
                                break;
                            case 40:
                                i(l);
                                break;
                            case 78:
                                t.ctrlKey && !t.altKey && i(l)
                        }
                    }
                    this.origOnCommandKey(t, n, r)
                }
            }
        };
        var A = function (t, n) {
                e.paragraphFocused = t, n !== !1 && void 0 !== n || i(function () {
                    e.$digest()
                })
            },
            E = function (t, n) {
                var r = c.defer();
                return u.getEditorSetting(t.id, n), i(e.$on("editorSetting", function (e, n) {
                    t.id === n.paragraphId && r.resolve(n)
                }), 1e3), r.promise
            },
            P = function (t, n) {
                var r = "ace/mode/";
                r += n, e.paragraph.config.editorMode = r, t.setMode(r)
            },
            x = function (t, n, r) {
                if ("undefined" == typeof r || 0 === r.row && r.column < 30 || 1 === r.row && 0 === r.column || v)
                    if ("undefined" == typeof r && e.paragraph.config.editorMode && !b) t.setMode(e.paragraph.config.editorMode);
                    else {
                        var o = R(n);
                        m.magic !== o && (m.magic = o, E(e.paragraph, o).then(function (n) {
                            P(t, n.editor.language), _.merge(e.paragraph.config.editorSetting, n.editor)
                        }))
                    }
                v = !1, b = !1
            },
            R = function (t) {
                var n = /^\s*%(.+?)\s/g,
                    r = n.exec(t);
                return r ? r[1].trim() : e.$parent.interpreterBindings && 0 !== e.$parent.interpreterBindings.length ? e.$parent.interpreterBindings[0].name : ""
            },
            C = function (e) {
                var t = e.getSession().getScreenLength() * e.renderer.lineHeight + e.renderer.scrollBar.getWidth();
                angular.element("#" + e.container.id).height(t.toString() + "px"), e.resize()
            };
        t.$on("scrollToCursor", function (t) {
            var n = angular.element('div[id$="_paragraphColumn_main"]');
            0 === n[n.length - 1].id.indexOf(e.paragraph.id) && e.scrollToCursor(e.paragraph.id, 0)
        }), e.scrollToCursor = function (t, n) {
            if (e.editor && e.editor.isFocused()) {
                var r, o = e.editor.renderer.lineHeight,
                    a = 103,
                    i = 50,
                    s = angular.element(document).height(),
                    l = angular.element(window).height(),
                    c = angular.element(document).scrollTop(),
                    u = angular.element("#" + t + "_editor").offset(),
                    p = e.editor.getCursorPosition(),
                    d = e.editor.renderer.$cursorLayer.getPixelPosition(p, !0),
                    f = u.top + d.top + o * n;
                f < c + a + i ? (r = f - a - (l - a) / 3, r < 0 && (r = 0)) : f > c + i + l - a && (r = f - a - 2 * (l - a) / 3, r > s && (r = s));
                var g = angular.element("body");
                g.stop(), g.finish(), g.scrollTo(r, {
                    axis: "y",
                    interrupt: !0,
                    duration: 100
                })
            }
        }, e.getEditorValue = function () {
            return e.editor ? e.editor.getValue() : e.paragraph.text
        }, e.getProgress = function () {
            return e.currentProgress || 0
        }, e.getExecutionTime = function (t) {
            var n = Date.parse(t.dateFinished) - Date.parse(t.dateStarted);
            if (isNaN(n) || n < 0) return e.isResultOutdated(t) ? "过期" : "";
            var r = void 0 === t.user || null === t.user || 'anonymous' === t.user ? "匿名用户" : t.user,
                o = "耗时 " + moment.duration(n / 1e3, "seconds").format("h [hrs] m [min] s [sec]") + "。 最后一次更新由 " + r + " 在 " + moment(t.dateFinished).format("MMMM DD YYYY, h:mm:ss A") + ".";
            return e.isResultOutdated(t) && (o += " (过期)"), o
        }, e.getElapsedTime = function (e) {
            return "在 " + moment(e.dateStarted).fromNow() + " 以前启动。"
        }, e.isResultOutdated = function (e) {
            return void 0 !== e.dateUpdated && Date.parse(e.dateUpdated) > Date.parse(e.dateStarted)
        }, e.goToEnd = function (e) {
            e.navigateFileEnd()
        }, e.getResultType = function (t) {
            var n = t ? t : e.paragraph;
            return n.results && n.results.type ? n.results.type : "TEXT"
        }, e.parseTableCell = function (e) {
            if (!isNaN(e)) return 0 === e.length || Number(e) > Number.MAX_SAFE_INTEGER || Number(e) < Number.MIN_SAFE_INTEGER ? e : Number(e);
            var t = moment(e);
            return t.isValid() ? t : e
        };
        var $ = function (e) {
            var t = e.id,
                n = e.title,
                r = e.text,
                o = e.config,
                a = e.settings.params;
            u.commitParagraph(t, n, r, o, a)
        };
        e.goToSingleParagraph = function () {
            var t = n.current.pathParams.noteId,
                o = location.protocol + "//" + location.host + location.pathname + "#/notebook/" + t + "/paragraph/" + e.paragraph.id + "?asIframe";
            r.open(o)
        }, e.showScrollDownIcon = function (e) {
            var t = angular.element("#p" + e + "_text");
            return !!t[0] && t[0].scrollHeight > t.innerHeight()
        }, e.scrollParagraphDown = function (t) {
            var n = angular.element("#p" + t + "_text");
            n.animate({
                scrollTop: n[0].scrollHeight
            }, 500), e.keepScrollDown = !0
        }, e.showScrollUpIcon = function (e) {
            return !!angular.element("#p" + e + "_text")[0] && 0 !== angular.element("#p" + e + "_text")[0].scrollTop
        }, e.scrollParagraphUp = function (t) {
            var n = angular.element("#p" + t + "_text");
            n.animate({
                scrollTop: 0
            }, 500), e.keepScrollDown = !1
        }, e.$on("angularObjectUpdate", function (t, r) {
            var o = n.current.pathParams.noteId;
            if (!r.noteId || r.noteId === o) {
                var a, i;
                if (r.paragraphId && r.paragraphId !== e.paragraph.id) return;
                a = y, i = w;
                var s = r.angularObject.name;
                if (angular.equals(r.angularObject.object, a[s])) return;
                if (i[s] ? (i[s].noteId = i[s].noteId || r.noteId, i[s].paragraphId = i[s].paragraphId || r.paragraphId) : i[s] = {
                        interpreterGroupId: r.interpreterGroupId,
                        noteId: r.noteId,
                        paragraphId: r.paragraphId
                    }, i[s].skipEmit = !0, i[s].clearWatcher || (i[s].clearWatcher = a.$watch(s, function (e, t) {
                        return i[s].skipEmit ? void(i[s].skipEmit = !1) : void u.updateAngularObject(i[s].noteId, i[s].paragraphId, s, e, i[s].interpreterGroupId)
                    })), a[s] = r.angularObject.object, 0 === s.indexOf(h)) {
                    var l = s.substring(h.length);
                    a[l] = function () {
                        a[s] = arguments
                    }
                }
            }
        }), e.$on("angularObjectRemove", function (t, r) {
            var o = n.current.pathParams.noteId;
            if (!r.noteId || r.noteId === o) {
                var a, i;
                if (r.paragraphId && r.paragraphId !== e.paragraph.id) return;
                a = y, i = w;
                var s = r.name;
                if (i[s] && (i[s].clearWatcher(), i[s] = void 0), a[s] = void 0, 0 === s.indexOf(h)) {
                    var l = s.substring(h.length);
                    a[l] = void 0
                }
            }
        }), e.$on("updateParagraph", function (n, r) {
            if (!(r.paragraph.id !== e.paragraph.id || r.paragraph.dateCreated === e.paragraph.dateCreated && r.paragraph.text === e.paragraph.text && r.paragraph.dateFinished === e.paragraph.dateFinished && r.paragraph.dateStarted === e.paragraph.dateStarted && r.paragraph.dateUpdated === e.paragraph.dateUpdated && r.paragraph.status === e.paragraph.status && r.paragraph.jobName === e.paragraph.jobName && r.paragraph.title === e.paragraph.title && S(r.paragraph.results) === S(e.paragraph.results) && r.paragraph.errorMessage === e.paragraph.errorMessage && angular.equals(r.paragraph.settings, e.paragraph.settings) && angular.equals(r.paragraph.config, e.paragraph.config))) {
                var o = r.paragraph.status !== e.paragraph.status,
                    a = r.paragraph.dateFinished !== e.paragraph.dateFinished || S(r.paragraph.results) !== S(e.paragraph.results) || "ERROR" === r.paragraph.status || "FINISHED" === r.paragraph.status && o;
                if (e.paragraph.text !== r.paragraph.text && (e.dirtyText ? e.dirtyText === r.paragraph.text ? (e.paragraph.text = r.paragraph.text, e.dirtyText = void 0, e.originalText = angular.copy(r.paragraph.text)) : e.paragraph.text = r.paragraph.text : (e.paragraph.text = r.paragraph.text, e.originalText = angular.copy(r.paragraph.text))), r.paragraph.results && r.paragraph.results.msg)
                    for (var i in r.paragraph.results.msg) {
                        var s = r.paragraph.results.msg ? r.paragraph.results.msg[i] : {},
                            l = e.paragraph.results && e.paragraph.results.msg ? e.paragraph.results.msg[i] : {},
                            c = r.paragraph.config.results ? r.paragraph.config.results[i] : {},
                            u = e.paragraph.config.results ? e.paragraph.config.results[i] : {};
                        angular.equals(s, l) && angular.equals(c, u) || t.$broadcast("updateResult", s, c, r.paragraph, parseInt(i))
                    }
                if (e.paragraph.config.colWidth !== r.paragraph.colWidth && t.$broadcast("paragraphResized", e.paragraph.id), e.paragraph.aborted = r.paragraph.aborted, e.paragraph.user = r.paragraph.user, e.paragraph.dateUpdated = r.paragraph.dateUpdated, e.paragraph.dateCreated = r.paragraph.dateCreated, e.paragraph.dateFinished = r.paragraph.dateFinished, e.paragraph.dateStarted = r.paragraph.dateStarted, e.paragraph.errorMessage = r.paragraph.errorMessage, e.paragraph.jobName = r.paragraph.jobName, e.paragraph.title = r.paragraph.title, e.paragraph.lineNumbers = r.paragraph.lineNumbers, e.paragraph.status = r.paragraph.status, "RUNNING" !== r.paragraph.status && (e.paragraph.results = r.paragraph.results), e.paragraph.settings = r.paragraph.settings, e.editor && e.editor.setReadOnly(e.isRunning(r.paragraph)), e.asIframe ? (r.paragraph.config.editorHide = !0, r.paragraph.config.tableHide = !1, e.paragraph.config = r.paragraph.config) : (e.paragraph.config = r.paragraph.config, N(r.paragraph.config)), o || a) {
                    var p = angular.element('div[id$="_paragraphColumn_main"]');
                    p.length >= 2 && 0 === p[p.length - 2].id.indexOf(e.paragraph.id) && setTimeout(function () {
                        t.$broadcast("scrollToCursor")
                    }, 500)
                }
            }
        }), e.$on("updateProgress", function (t, n) {
            n.id === e.paragraph.id && (e.currentProgress = n.progress)
        }), e.$on("keyEvent", function (t, n) {
            if (e.paragraphFocused) {
                var r = e.paragraph.id,
                    o = n.keyCode,
                    a = !1,
                    s = e.paragraph.config.editorHide;
                s && (38 === o || 80 === o && n.ctrlKey && !n.altKey) ? e.$emit("moveFocusToPreviousParagraph", r) : s && (40 === o || 78 === o && n.ctrlKey && !n.altKey) ? i(function () {
                    return e.$emit("moveFocusToNextParagraph", r)
                }) : n.shiftKey && 13 === o ? e.run(e.paragraph, e.getEditorValue()) : n.ctrlKey && n.altKey && 67 === o ? e.cancelParagraph(e.paragraph) : n.ctrlKey && n.altKey && 68 === o ? e.removeParagraph(e.paragraph) : n.ctrlKey && n.altKey && 75 === o ? e.moveUp(e.paragraph) : n.ctrlKey && n.altKey && 74 === o ? e.moveDown(e.paragraph) : n.ctrlKey && n.altKey && 65 === o ? e.insertNew("above") : n.ctrlKey && n.altKey && 66 === o ? e.insertNew("below") : n.ctrlKey && n.altKey && 79 === o ? e.toggleOutput(e.paragraph) : n.ctrlKey && n.altKey && 82 === o ? e.toggleEnableDisable(e.paragraph) : n.ctrlKey && n.altKey && 69 === o ? e.toggleEditor(e.paragraph) : n.ctrlKey && n.altKey && 77 === o ? e.paragraph.config.lineNumbers ? e.hideLineNumbers(e.paragraph) : e.showLineNumbers(e.paragraph) : n.ctrlKey && n.shiftKey && 189 === o ? e.changeColWidth(e.paragraph, Math.max(1, e.paragraph.config.colWidth - 1)) : n.ctrlKey && n.shiftKey && 187 === o ? e.changeColWidth(e.paragraph, Math.min(12, e.paragraph.config.colWidth + 1)) : n.ctrlKey && n.altKey && 84 === o ? e.paragraph.config.title ? e.hideTitle(e.paragraph) : e.showTitle(e.paragraph) : n.ctrlKey && n.shiftKey && 67 === o ? e.copyPara("below") : n.ctrlKey && n.altKey && 76 === o ? e.clearParagraphOutput(e.paragraph) : n.ctrlKey && n.altKey && 87 === o ? e.goToSingleParagraph() : a = !0, a || n.preventDefault()
            }
        }), e.$on("focusParagraph", function (t, n, r, o) {
            if (e.paragraph.id === n) {
                if (!e.paragraph.config.editorHide && !o) {
                    e.editor.focus();
                    var a;
                    r >= 0 ? (a = r, e.editor.gotoLine(a, 0)) : (a = e.editor.session.getLength(), e.editor.gotoLine(a, 0)), e.scrollToCursor(e.paragraph.id, 0)
                }
                A(!0)
            } else {
                void 0 !== e.editor && null !== e.editor && e.editor.blur();
                var i = !0;
                A(!1, i)
            }
        }), e.$on("saveInterpreterBindings", function (t, n) {
            e.paragraph.id === n && e.editor && (b = !0, x(e.editor.getSession(), e.editor.getSession().getValue()))
        }), e.$on("doubleClickParagraph", function (t, n) {
            if (e.paragraph.id === n && e.paragraph.config.editorHide && e.paragraph.config.editorSetting.editOnDblClick && e.revisionView !== !0) {
                var r = c.defer();
                I(e.paragraph), i(e.$on("updateParagraph", function (e, t) {
                    r.resolve(t)
                }), 1e3), r.promise.then(function (t) {
                    e.editor && (e.editor.focus(), e.goToEnd(e.editor))
                })
            }
        }), e.$on("openEditor", function (t) {
            e.openEditor(e.paragraph)
        }), e.$on("closeEditor", function (t) {
            e.closeEditor(e.paragraph)
        }), e.$on("openTable", function (t) {
            e.openTable(e.paragraph)
        }), e.$on("closeTable", function (t) {
            e.closeTable(e.paragraph)
        })
    }
    angular.module("zeppelinWebApp").controller("ParagraphCtrl", n), n.$inject = ["$scope", "$rootScope", "$route", "$window", "$routeParams", "$location", "$timeout", "$compile", "$http", "$q", "websocketMsgSrv", "baseUrlSrv", "ngToast", "saveAsService", "noteVarShareService"]
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t, n, r, o, a, s, c, p, f, h, v, y, w, N, S, I, k) {
        e.builtInTableDataVisualizationList = [{
            id: "table",
            name: "Table",
            icon: '<i class="fa fa-table"></i>'
        }, {
            id: "multiBarChart",
            name: "Bar Chart",
            icon: '<i class="fa fa-bar-chart"></i>',
            transformation: "pivot"
        }, {
            id: "pieChart",
            name: "Pie Chart",
            icon: '<i class="fa fa-pie-chart"></i>',
            transformation: "pivot"
        }, {
            id: "stackedAreaChart",
            name: "Area Chart",
            icon: '<i class="fa fa-area-chart"></i>',
            transformation: "pivot"
        }, {
            id: "lineChart",
            name: "Line Chart",
            icon: '<i class="fa fa-line-chart"></i>',
            transformation: "pivot"
        }, {
            id: "scatterChart",
            name: "Scatter Chart",
            icon: '<i class="cf cf-scatter-chart"></i>'
        }];
        var O = {
            table: {
                class: l.default,
                instance: void 0
            },
            multiBarChart: {
                class: u.default,
                instance: void 0
            },
            pieChart: {
                class: d.default,
                instance: void 0
            },
            stackedAreaChart: {
                class: g.default,
                instance: void 0
            },
            lineChart: {
                class: m.default,
                instance: void 0
            },
            scatterChart: {
                class: b.default,
                instance: void 0
            }
        };
        e.type;
        var T;
        e.config, e.id;
        var A, E, P;
        e.tableDataColumns = [];
        var x = !1;
        e.graphMode, e.imageData, e.init = function (t, n, r, o) {
            var a = k.get();
            a.forEach(function (t) {
                e.builtInTableDataVisualizationList.push({
                    id: t.id,
                    name: t.name,
                    icon: v.trustAsHtml(t.icon)
                }), O[t.id] = {
                    class: t.class
                }
            }), R(t, n, r, o), C(e.type)
        }, e.$on("updateResult", function (t, n, r, o, a) {
            if (A.id === o.id && a === E) {
                var i = !angular.equals(r, e.config) || !angular.equals(n.type, e.type) || !angular.equals(n.data, T);
                R(n, r, A, E), C(e.type, i)
            }
        }), e.$on("appendParagraphOutput", function (e, t) {
            A.id !== t.paragraphId || E !== t.index || "RUNNING" !== A.status && "PENDING" !== A.status || z(t.data)
        }), e.$on("updateParagraphOutput", function (e, t) {
            A.id === t.paragraphId && E === t.index && (L(), z(t.data))
        });
        var R = function (t, n, r, o) {
                T = t.data, A = r, E = parseInt(o), e.id = A.id + "_" + o, e.type = t.type, n = n ? n : {}, n.graph || (n.graph = {}), n.graph.mode || (n.graph.mode = "table"), n.graph.height || (n.graph.height = 300), n.graph.optionOpen || (n.graph.optionOpen = !1), e.graphMode = n.graph.mode, e.config = angular.copy(n), x = o === r.results.msg.length - 1, "TABLE" === e.type ? (P = new i.default, P.loadParagraphResult({
                    type: e.type,
                    msg: T
                }), e.tableDataColumns = P.columns, e.tableDataComment = P.comment) : "IMG" === e.type && (e.imageData = T)
            },
            C = function (t, n) {
                var r;
                if (x && (X(), Y(), r = _.get(e.config, "helium.activeApp")), r) {
                    var o = _.find(e.apps, {
                        id: r
                    });
                    Z(o)
                } else if ("TABLE" === t) {
                    var a = function t() {
                        var r = angular.element("#p" + e.id + "_graph");
                        r.length ? e.renderGraph(e.graphMode, n) : s(t, 10)
                    };
                    s(a)
                } else "HTML" === t ? $() : "ANGULAR" === t ? D() : "TEXT" === t && F()
            },
            $ = function () {
                var t = function t() {
                    var n = angular.element("#p" + e.id + "_html");
                    if (n.length) try {
                        n.html(T), n.find("pre code").each(function (e, t) {
                            hljs.highlightBlock(t)
                        }), MathJax.Hub.Queue(["Typeset", MathJax.Hub, n[0]])
                    } catch (e) {} else s(t, 10)
                };
                s(t)
            },
            D = function () {
                var t = function t() {
                    if (angular.element("#p" + e.id + "_angular").length) try {
                        angular.element("#p" + e.id + "_angular").html(T);
                        var n = I.get(A.id + "_paragraphScope");
                        c(angular.element("#p" + e.id + "_angular").contents())(n)
                    } catch (e) {} else s(t, 10)
                };
                s(t)
            },
            B = function (t) {
                return angular.element("#p" + e.id + "_text")
            },
            j = !1,
            F = function () {
                var t = function t() {
                    var n = B(e.id);
                    n.length ? (L(), j = !0, T ? z(T) : U(), B(e.id).bind("mousewheel", function (t) {
                        e.keepScrollDown = !1
                    })) : s(t, 10)
                };
                s(t)
            },
            L = function () {
                var t = B(e.id);
                t.length && t.children().remove()
            },
            M = [],
            U = function () {
                for (; M.length > 0;) z(M.pop())
            },
            z = function (t) {
                if (j) {
                    U();
                    var n = B(e.id);
                    if (n.length)
                        for (var r = t.split("\n"), o = 0; o < r.length; o++) n.append(angular.element("<div></div>").text(r[o]));
                    if (e.keepScrollDown) {
                        var a = B(e.id);
                        a[0].scrollTop = a[0].scrollHeight
                    }
                } else M.push(t)
            };
        e.renderGraph = function (t, n) {
            var r = e.config.graph.height,
                o = angular.element("#p" + e.id + "_graph");
            o.height(r), t || (t = "table");
            var a = O[t];
            if (a) {
                for (var i in O) {
                    var l = O[i].instance;
                    if (i !== t && l && l.isActive()) {
                        l.deactivate();
                        break
                    }
                }
                if (a.instance)
                    if (n) {
                        var u = function n() {
                            var o = angular.element("#p" + e.id + "_" + t),
                                i = angular.element("#trsetting" + e.id + "_" + t),
                                l = angular.element("#vizsetting" + e.id + "_" + t);
                            if (o.length) {
                                var c = V(t);
                                o.height(r);
                                var u = a.instance.getTransformation();
                                u.setConfig(c);
                                var p = u.transform(P);
                                u.renderSetting(i), a.instance.setConfig(c), a.instance.render(p), a.instance.renderSetting(l)
                            } else s(n, 10)
                        };
                        s(u)
                    } else {
                        var u = function n() {
                            var o = angular.element("#p" + e.id + "_" + t);
                            o.length ? (o.height(r), a.instance.activate()) : s(n, 10)
                        };
                        s(u)
                    }
                else {
                    var u = function n() {
                        var o = angular.element("#p" + e.id + "_" + t),
                            i = angular.element("#trsetting" + e.id + "_" + t),
                            l = angular.element("#vizsetting" + e.id + "_" + t);
                        if (o.length) try {
                            o.height(r);
                            var u = V(t),
                                p = a.class;
                            a.instance = new p(o, u);
                            var d = function (e) {
                                G(e, t)
                            };
                            a.instance._emitter = d, a.instance._compile = c, a.instance._createNewScope = H;
                            var f = a.instance.getTransformation();
                            f._emitter = d, f._templateRequest = h, f._compile = c, f._createNewScope = H;
                            var g = f.transform(P);
                            f.renderSetting(i), a.instance.render(g), a.instance.renderSetting(l), a.instance.activate(), angular.element(window).resize(function () {
                                a.instance.resize()
                            })
                        } catch (e) {} else s(n, 10)
                    };
                    s(u)
                }
            }
        }, e.switchViz = function (t) {
            var n = angular.copy(e.config),
                r = angular.copy(A.settings.params);
            n.graph.mode = t, _.set(n, "helium.activeApp", void 0), W(A.title, A.text, n, r)
        };
        var H = function () {
                return t.$new(!0)
            },
            W = function (t, n, r, o) {
                var a = angular.copy(A.config);
                a.results = a.results || [], a.results[E] = r, e.revisionView === !0 ? (R({
                    type: e.type,
                    data: T
                }, a.results[E], A, E), C(e.type, !0)) : y.commitParagraph(A.id, t, n, a, o)
            };
        e.toggleGraphSetting = function () {
            var t = angular.copy(e.config);
            t.graph.optionOpen ? t.graph.optionOpen = !1 : t.graph.optionOpen = !0;
            var n = angular.copy(A.settings.params);
            W(A.title, A.text, t, n)
        };
        var V = function (t) {
                var n, r = e.config.graph;
                return r && (r.setting && (n = angular.copy(r.setting[t])), n || (n = {}), n.common = angular.copy(r.commonSetting) || {}, r.keys && (n.common.pivot = {
                    keys: angular.copy(r.keys),
                    groups: angular.copy(r.groups),
                    values: angular.copy(r.values)
                })), n
            },
            G = function (t, n) {
                var r = angular.copy(e.config);
                r.graph || (r.graph = {}), r.graph.setting || (r.graph.setting = {}), r.graph.setting[n] = angular.copy(t), r.graph.setting[n] && (r.graph.commonSetting = r.graph.setting[n].common, delete r.graph.setting[n].common), r.graph.commonSetting && r.graph.commonSetting.pivot && (r.graph.keys = r.graph.commonSetting.pivot.keys, r.graph.groups = r.graph.commonSetting.pivot.groups, r.graph.values = r.graph.commonSetting.pivot.values, delete r.graph.commonSetting.pivot);
                var o = angular.copy(A.settings.params);
                W(A.title, A.text, r, o)
            };
        e.$on("paragraphResized", function (t, n) {
            if (n === A.id) {
                var r = O[e.graphMode];
                r && r.instance && r.instance.resize()
            }
        }), e.resize = function (e, t) {
            s(function () {
                K(e, t)
            }, 200)
        };
        var K = function (t, n) {
            var r = angular.copy(A.settings.params),
                o = angular.copy(e.config);
            o.graph.height = n, A.config.colWidth = t, W(A.title, A.text, o, r)
        };
        e.exportToDSV = function (e) {
            var t = "",
                n = moment(A.dateFinished).format("YYYY-MM-DD hh:mm:ss A"),
                r = A.title ? A.title + "_" + n : "data_" + n;
            for (var o in P.columns) t += P.columns[o].name + e;
            t = t.substring(0, t.length - 1) + "\n";
            for (var a in P.rows) {
                var i = P.rows[a],
                    s = "";
                for (var l in i) {
                    var c = i[l].toString();
                    s += c.indexOf(e) > -1 ? '"' + c + '"' + e : i[l] + e
                }
                t += s.substring(0, s.length - 1) + "\n"
            }
            var u = "";
            "\t" === e ? u = "tsv" : "," === e && (u = "csv"), S.saveAs(t, r, u)
        }, e.getBase64ImageSrc = function (e) {
            return "data:image/png;base64," + e
        };
        var q = "_Z_ANGULAR_FUNC_";
        e.apps = [], e.suggestion = {}, e.switchApp = function (t) {
            var n = angular.copy(e.config),
                r = angular.copy(A.settings.params);
            _.set(n, "helium.activeApp", t), J(n, r)
        }, e.loadApp = function (e) {
            var t = n.current.pathParams.noteId;
            p.post(w.getRestApiBase() + "/helium/load/" + t + "/" + A.id, e).success(function (e, t, n, r) {}).error(function (e, t, n, r) {})
        };
        var J = function (e, t) {
                W(A.title, A.text, e, t)
            },
            Y = function () {
                var t = [];
                A.apps && _.forEach(A.apps, function (e) {
                    t.push({
                        id: e.id,
                        pkg: e.pkg,
                        status: e.status,
                        output: e.output
                    })
                }), _.forEach(e.apps, function (n, r) {
                    var o = _.find(t, {
                        id: n.id
                    });
                    o ? angular.extend(e.apps[r], o) : e.apps.splice(r, 1)
                }), _.forEach(t, function (t, n) {
                    (e.apps.length <= n || e.apps[n].id !== t.id) && e.apps.splice(n, 0, t)
                })
            },
            X = function () {
                var t = n.current.pathParams.noteId;
                t && p.get(w.getRestApiBase() + "/helium/suggest/" + t + "/" + A.id).success(function (t, n, r, o) {
                    e.suggestion = t.body
                }).error(function (e, t, n, r) {})
            },
            Z = function (e) {
                var t = function t() {
                    var n = angular.element(document.getElementById("p" + e.id));
                    if (n.length) try {
                        n.html(e.output), c(n.contents())(ee(e))
                    } catch (e) {} else s(t, 1e3)
                };
                s(t)
            };
        e.$on("appendAppOutput", function (t, n) {
            if (A.id === n.paragraphId) {
                var r = _.find(e.apps, {
                    id: n.appId
                });
                if (r) {
                    r.output += n.data;
                    var o = _.find(A.apps, {
                        id: n.appId
                    });
                    o.output = r.output;
                    var a = angular.element(document.getElementById("p" + r.id));
                    a.html(r.output), c(a.contents())(ee(r))
                }
            }
        }), e.$on("updateAppOutput", function (t, n) {
            if (A.id === n.paragraphId) {
                var r = _.find(e.apps, {
                    id: n.appId
                });
                if (r) {
                    r.output = n.data;
                    var o = _.find(A.apps, {
                        id: n.appId
                    });
                    o.output = r.output;
                    var a = angular.element(document.getElementById("p" + r.id));
                    a.html(r.output), c(a.contents())(ee(r))
                }
            }
        }), e.$on("appLoad", function (t, n) {
            if (A.id === n.paragraphId) {
                var r = _.find(e.apps, {
                    id: n.appId
                });
                r || (r = {
                    id: n.appId,
                    pkg: n.pkg,
                    status: "UNLOADED",
                    output: ""
                }, e.apps.push(r), A.apps.push(r), e.switchApp(r.id))
            }
        }), e.$on("appStatusChange", function (t, n) {
            if (A.id === n.paragraphId) {
                var r = _.find(e.apps, {
                    id: n.appId
                });
                if (r) {
                    r.status = n.status;
                    var o = _.find(A.apps, {
                        id: n.appId
                    });
                    o.status = r.status
                }
            }
        });
        var Q = function (e) {
                return e.registry || (e.registry = {}), e.registry
            },
            ee = function (e) {
                return e.scope || (e.scope = t.$new(!0, t)), e.scope
            };
        e.$on("angularObjectUpdate", function (t, r) {
            var o = n.current.pathParams.noteId;
            if (!r.noteId || r.noteId === o) {
                var a, i, s = _.find(e.apps, {
                    id: r.paragraphId
                });
                if (!s) return;
                a = ee(s), i = Q(s);
                var l = r.angularObject.name;
                if (angular.equals(r.angularObject.object, a[l])) return;
                if (i[l] ? (i[l].noteId = i[l].noteId || r.noteId, i[l].paragraphId = i[l].paragraphId || r.paragraphId) : i[l] = {
                        interpreterGroupId: r.interpreterGroupId,
                        noteId: r.noteId,
                        paragraphId: r.paragraphId
                    }, i[l].skipEmit = !0, i[l].clearWatcher || (i[l].clearWatcher = a.$watch(l, function (e, t) {
                        return i[l].skipEmit ? void(i[l].skipEmit = !1) : void y.updateAngularObject(i[l].noteId, i[l].paragraphId, l, e, i[l].interpreterGroupId)
                    })), a[l] = r.angularObject.object, 0 === l.indexOf(q)) {
                    var c = l.substring(q.length);
                    a[c] = function () {
                        a[l] = arguments
                    }
                }
            }
        }), e.$on("angularObjectRemove", function (t, r) {
            var o = n.current.pathParams.noteId;
            if (!r.noteId || r.noteId === o) {
                var a, i, s = _.find(e.apps, {
                    id: r.paragraphId
                });
                if (!s) return;
                a = ee(s), i = Q(s);
                var l = r.name;
                if (i[l] && (i[l].clearWatcher(), i[l] = void 0), a[l] = void 0, 0 === l.indexOf(q)) {
                    var c = l.substring(q.length);
                    a[c] = void 0
                }
            }
        })
    }
    var a = n(6),
        i = r(a),
        s = n(12),
        l = r(s),
        c = n(14),
        u = r(c),
        p = n(15),
        d = r(p),
        f = n(16),
        g = r(f),
        h = n(17),
        m = r(h),
        v = n(18),
        b = r(v);
    angular.module("zeppelinWebApp").controller("ResultCtrl", o), o.$inject = ["$scope", "$rootScope", "$route", "$window", "$routeParams", "$location", "$timeout", "$compile", "$http", "$q", "$templateRequest", "$sce", "websocketMsgSrv", "baseUrlSrv", "ngToast", "saveAsService", "noteVarShareService", "heliumService"]
}, function (e, t) {
    "use strict";

    function n(e, t, n) {
        e.isResult = !0, e.searchTerm = t.searchTerm;
        var r = n.search({
            q: t.searchTerm
        }).query();
        r.$promise.then(function (r) {
            e.notes = r.body.map(function (e) {
                return /\/paragraph\//.test(e.id) ? (e.id = e.id.replace("paragraph/", "?paragraph=") + "&term=" + t.searchTerm, e) : e
            }), 0 === e.notes.length ? e.isResult = !1 : e.isResult = !0, e.$on("$routeChangeStart", function (e, t, r) {
                "/search/:searchTerm" !== t.originalPath && (n.searchTerm = "")
            })
        }), e.page = 0, e.allResults = !1, e.highlightSearchResults = function (e) {
            return function (t) {
                function n(e) {
                    var t = {
                        "ace/mode/scala": /^%(\w*\.)?spark/,
                        "ace/mode/python": /^%(\w*\.)?(pyspark|python)/,
                        "ace/mode/r": /^%(\w*\.)?(r|sparkr|knitr)/,
                        "ace/mode/sql": /^%(\w*\.)?\wql/,
                        "ace/mode/markdown": /^%md/,
                        "ace/mode/sh": /^%sh/
                    };
                    return Object.keys(t).reduce(function (n, r) {
                        return t[r].test(e) ? r : n
                    }, "ace/mode/scala")
                }

                function r(e) {
                    return function (t) {
                        for (var n = [], r = -1;
                            (r = t.indexOf(e, r + 1)) >= 0;) n.push(r);
                        return n
                    }
                }
                var o = ace.require("ace/range").Range;
                t.setOption("highlightActiveLine", !1), t.$blockScrolling = 1 / 0, t.setReadOnly(!0), t.renderer.setShowGutter(!1), t.setTheme("ace/theme/chrome"), t.getSession().setMode(n(e.text));
                var a = "";
                a = "" !== e.header ? e.header + "\n\n" + e.snippet : e.snippet;
                var i = a.split("\n").map(function (n, a) {
                    var i = n.match(/<B>(.+?)<\/B>/);
                    if (!i) return n;
                    var s = i[1],
                        l = n.replace(/<B>/g, "").replace(/<\/B>/g, ""),
                        c = r(s)(l);
                    return c.forEach(function (r) {
                        var i = r + s.length;
                        "" !== e.header && 0 === a ? (t.getSession().addMarker(new o(a, 0, a, n.length), "search-results-highlight-header", "background"), t.getSession().addMarker(new o(a, r, a, i), "search-results-highlight", "line")) : t.getSession().addMarker(new o(a, r, a, i), "search-results-highlight", "line")
                    }), l
                });
                t.setOption("maxLines", i.reduce(function (e, t) {
                    return e + t.length
                }, 0)), t.getSession().setValue(i.join("\n"))
            }
        }
    }
    angular.module("zeppelinWebApp").controller("SearchResultCtrl", n), n.$inject = ["$scope", "$routeParams", "searchService"]
}, function (e, t) {
    "use strict";

    function n(e, t, n) {
        function r(r, o, a) {
            return e.put(t.getRestApiBase() + "/notebook-repositories", {
                name: o.className,
                settings: a
            }).success(function (e) {
                var t = _.findIndex(s.notebookRepos, {
                    className: o.className
                });
                t >= 0 && (s.notebookRepos[t] = e.body), r.$show()
            }).error(function () {
                n.danger({
                    content: "We couldn't save that NotebookRepo's settings",
                    verticalPosition: "bottom",
                    timeout: "3000"
                }), r.$show()
            }), "manual"
        }

        function o(e) {
            var t = _.findIndex(e.value, {
                value: e.selected
            });
            return t < 0 ? "No value" : e.value[t].name
        }

        function a() {
            e.get(t.getRestApiBase() + "/notebook-repositories").success(function (e, t, n, r) {
                s.notebookRepos = e.body
            }).error(function (e, t, r, o) {
                401 === t && (n.danger({
                    content: "You don't have permission on this page",
                    verticalPosition: "bottom",
                    timeout: "3000"
                }), setTimeout(function () {
                    window.location.replace("/")
                }, 3e3))
            })
        }

        function i() {
            a()
        }
        var s = this;
        s.notebookRepos = [], s.showDropdownSelected = o, s.saveNotebookRepo = r, i()
    }
    angular.module("zeppelinWebApp").controller("NotebookReposCtrl", n), n.$inject = ["$http", "baseUrlSrv", "ngToast"]
}, function (e, t) {
    "use strict";
    ! function () {
        function e(e, t, n, r, o, a) {
            e.packageInfos = {}, e.defaultVersions = {}, e.showVersions = {}, e.visualizationOrder = [], e.visualizationOrderChanged = !1;
            var i = function (t) {
                    var r = {};
                    for (var o in t) {
                        var a = t[o];
                        for (var i in a) {
                            var s = a[i];
                            if (s.pkg.icon = n.trustAsHtml(s.pkg.icon), s.enabled) {
                                r[o] = s, a.splice(i, 1);
                                break
                            }
                        }
                        r[o] || (r[o] = a[0], a.splice(0, 1))
                    }
                    e.defaultVersions = r
                },
                s = function () {
                    a.getAllPackageInfo().success(function (t, n) {
                        e.packageInfos = t.body, i(e.packageInfos)
                    }).error(function (e, t) {})
                },
                l = function () {
                    a.getVisualizationOrder().success(function (t, n) {
                        e.visualizationOrder = t.body
                    }).error(function (e, t) {})
                };
            e.visualizationOrderListeners = {
                accept: function (e, t) {
                    return !0
                },
                itemMoved: function (e) {},
                orderChanged: function (t) {
                    e.visualizationOrderChanged = !0
                }
            };
            var c = function () {
                s(), l(), e.visualizationOrderChanged = !1
            };
            c(), e.saveVisualizationOrder = function () {
                var t = BootstrapDialog.confirm({
                    closable: !1,
                    closeByBackdrop: !1,
                    closeByKeyboard: !1,
                    title: "",
                    message: "是否要保存更改？",
                    callback: function (n) {
                        if (n) return t.$modalFooter.find("button").addClass("disabled"), t.$modalFooter.find('button:contains("OK")').html('<i class="fa fa-circle-o-notch fa-spin"></i> Enabling'), a.setVisualizationOrder(e.visualizationOrder).success(function (e, n) {
                            c(), t.close()
                        }).error(function (e, n) {
                            t.close(), BootstrapDialog.show({
                                title: "在保存顺序时失败",
                                message: e.message
                            })
                        }), !1
                    }
                })
            };
            var u = function (t, n) {
                var r, o = _.filter(e.defaultVersions[t], function (e) {
                    return e.artifact === n
                });
                return 0 === o.length ? (o = _.filter(e.packageInfos[t], function (e) {
                    return e.pkg.artifact === n
                }), o.length > 0 && (r = o[0].pkg.license)) : r = o[0].license, r || (r = "Unknown"), r
            };
            e.enable = function (e, t) {
                var n = u(e, t),
                    r = BootstrapDialog.confirm({
                        closable: !1,
                        closeByBackdrop: !1,
                        closeByKeyboard: !1,
                        title: "",
                        message: "是否确定要启用 " + e + '?<div style="color:gray">' + t + '</div><div style="border-top: 1px solid #efefef; margin-top: 10px; padding-top: 5px;">证书</div><div style="color:gray">' + n + "</div>",
                        callback: function (n) {
                            if (n) return r.$modalFooter.find("button").addClass("disabled"), r.$modalFooter.find('button:contains("OK")').html('<i class="fa fa-circle-o-notch fa-spin"></i> 正在启用中……'), a.enable(e, t).success(function (e, t) {
                                c(), r.close()
                            }).error(function (t, n) {
                                r.close(), BootstrapDialog.show({
                                    title: "在启用时失败 " + e,
                                    message: t.message
                                })
                            }), !1
                        }
                    })
            }, e.disable = function (e) {
                var t = BootstrapDialog.confirm({
                    closable: !1,
                    closeByBackdrop: !1,
                    closeByKeyboard: !1,
                    title: "",
                    message: "是否确定要紧用 " + e + "?",
                    callback: function (n) {
                        if (n) return t.$modalFooter.find("button").addClass("disabled"), t.$modalFooter.find('button:contains("OK")').html('<i class="fa fa-circle-o-notch fa-spin"></i> 正在紧用中……'), a.disable(e).success(function (e, n) {
                            c(), t.close()
                        }).error(function (n, r) {
                            t.close(), BootstrapDialog.show({
                                title: "在禁用时失败 " + e,
                                message: n.message
                            })
                        }), !1
                    }
                })
            }, e.toggleVersions = function (t) {
                e.showVersions[t] ? e.showVersions[t] = !1 : e.showVersions[t] = !0
            }, e.getPackageSize = function (e) {
                return _.size(e)
            }
        }
        angular.module("zeppelinWebApp").controller("HeliumCtrl", e), e.$inject = ["$scope", "$rootScope", "$sce", "baseUrlSrv", "ngToast", "heliumService"]
    }()
}, function (e, t) {
    "use strict";

    function n(e) {
        var t = this;
        this.noteListOrdering = function (n) {
            return n.id === e ? "￿" : t.getNoteName(n)
        }, this.getNoteName = function (e) {
            return void 0 === e.name || "" === e.name.trim() ? "Note " + e.id : e.name
        }
    }
    angular.module("zeppelinWebApp").service("arrayOrderingSrv", n), n.$inject = ["TRASH_FOLDER_ID"]
}, function (e, t) {
    "use strict";

    function n(e) {
        e.complete = function (t) {
            e.copied = !0, e.tooltip = "已经复制!", setTimeout(function () {
                e.tooltip = "已经复制到剪切板"
            }, 400)
        }, e.$watch("input", function () {
            e.copied = !1, e.tooltip = "已经复制到剪切板"
        }), e.clipError = function (t) {
            e.tooltip = "不支持当前浏览器"
        }
    }
    angular.module("zeppelinWebApp").controller("clipboardCtrl", n), n.$inject = ["$scope"]
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i, s, l, c, u) {
        function p() {
            n.get(i.getRestApiBase() + "/version").success(function (e, n, r, o) {
                t.zeppelinVersion = e.body
            }).error(function (e, t, n, r) {})
        }

        function d() {
            e.isDrawNavbarNoteList = !1, angular.element("#notebook-list").perfectScrollbar({
                suppressScrollX: !0
            }), angular.element(document).click(function () {
                e.query.q = ""
            }), p(), m()
        }

        function f(t) {
            if (!e.query.q) return !0;
            var n = t.name;
            return n.toLowerCase().indexOf(e.query.q.toLowerCase()) > -1
        }

        function g(e) {
            return r.noteId === e
        }

        function h() {
            s.listConfigurations()
        }

        function m() {
            s.getNoteList()
        }

        function v() {
            s.getHomeNote()
        }

        function b() {
            var e = i.getRestApiBase() + "/login/logout";
            e = e.replace("//", "//false:false@"), n.post(e).error(function () {
                n.post(e).error(function () {
                    t.userName = "", t.ticket.principal = "", t.ticket.ticket = "", t.ticket.roles = "", BootstrapDialog.show({
                        message: "退出成功"
                    }), setTimeout(function () {
                        window.location.replace("/")
                    }, 1e3)
                })
            })
        }

        function y(e) {
            o.path("/search/" + e)
        }

        function w() {
            setTimeout(function () {
                angular.element("#userName").focus()
            }, 500)
        }

        function _() {
            angular.element(document).ready(function () {
                angular.element(".notebook-list-dropdown").on("show.bs.dropdown", function () {
                    e.isDrawNavbarNoteList = !0
                }), angular.element(".notebook-list-dropdown").on("hide.bs.dropdown", function () {
                    e.isDrawNavbarNoteList = !1
                })
            })
        }
        var N = this;
        N.arrayOrderingSrv = l, N.connected = s.isConnected(), N.isActive = g, N.logout = b, N.notes = a, N.search = y, N.searchForm = c, N.showLoginWindow = w, N.TRASH_FOLDER_ID = u, N.isFilterNote = f, e.query = {
            q: ""
        }, d(), e.$on("setNoteMenu", function (e, t) {
            a.setNotes(t), _()
        }), e.$on("setConnectedStatus", function (e, t) {
            N.connected = t
        }), e.$on("loginSuccess", function (e, t) {
            h(), m(), v()
        })
    }
    angular.module("zeppelinWebApp").controller("NavCtrl", n), n.$inject = ["$scope", "$rootScope", "$http", "$routeParams", "$location", "noteListDataFactory", "baseUrlSrv", "websocketMsgSrv", "arrayOrderingSrv", "searchService", "TRASH_FOLDER_ID"]
}, function (e, t) {
    "use strict";

    function n() {
        return function (e, t, n) {
            t.bind("keydown keyup", function (t) {
                27 === t.which && (e.$apply(function () {
                    e.$eval(n.ngEscape)
                }), t.preventDefault())
            })
        }
    }
    angular.module("zeppelinWebApp").directive("ngEscape", n)
}, function (e, t) {
    "use strict";

    function n(e) {
        return {
            restrict: "A",
            link: function (t, n, r) {
                t.$last === !0 && e(function () {
                    var e = "ngRenderFinished";
                    t.$emit(e)
                })
            }
        }
    }
    angular.module("zeppelinWebApp").directive("interpreterDirective", n), n.$inject = ["$timeout"]
}, function (e, t) {
    "use strict";

    function n() {
        return {
            restrict: "EA",
            link: function (e, t, n) {
                angular.element(t).click(function (e) {
                    angular.element(t).find(".expandable:visible").length > 1 ? (angular.element(t).find(".expandable:visible").slideUp("slow"), angular.element(t).find("i.icon-folder-alt").toggleClass("icon-folder icon-folder-alt")) : angular.element(t).find(".expandable").first().slideToggle("200", function () {
                        0 === angular.element(t).find(".fa-trash-o").length && angular.element(t).find("i").first().toggleClass("icon-folder icon-folder-alt")
                    }), e.stopPropagation()
                })
            }
        }
    }
    angular.module("zeppelinWebApp").directive("expandCollapse", n)
}, function (e, t) {
    "use strict";

    function n(e, t, n, r) {
        var o = this;
        o.clone = !1, o.notes = t, o.websocketMsgSrv = r, e.note = {}, e.interpreterSettings = {}, e.note.defaultInterpreter = null, o.createNote = function () {
            if (o.clone) {
                var t = n.noteId;
                o.websocketMsgSrv.cloneNote(t, e.note.notename)
            } else {
                var r = "";
                null !== e.note.defaultInterpreter && (r = e.note.defaultInterpreter.id), o.websocketMsgSrv.createNotebook(e.note.notename, r), e.note.defaultInterpreter = e.interpreterSettings[0]
            }
        }, o.handleNameEnter = function () {
            angular.element("#noteNameModal").modal("toggle"), o.createNote()
        }, o.preVisible = function (t, n) {
            o.clone = t, o.sourceNoteName = n, e.note.notename = o.clone ? o.cloneNoteName() : o.newNoteName(), e.$apply()
        }, o.newNoteName = function () {
            var e = 1;
            return angular.forEach(o.notes.flatList, function (t) {
                if (t = t.name, t.match(/^Untitled Note [0-9]*$/)) {
                    var n = 1 * t.substr(14);
                    e <= n && (e = n + 1)
                }
            }), "Untitled Note " + e
        }, o.cloneNoteName = function () {
            var e = 1,
                t = "",
                n = o.sourceNoteName.lastIndexOf(" "),
                r = !!o.sourceNoteName.match("^.+?\\s\\d$"),
                a = r ? o.sourceNoteName.substr(0, n) : o.sourceNoteName,
                i = new RegExp("^" + a + " .+");
            return angular.forEach(o.notes.flatList, function (r) {
                if (r = r.name, r.match(i)) {
                    var o = r.substr(n).trim();
                    t = a, o = parseInt(o), e <= o && (e = o + 1)
                }
            }), t || (t = o.sourceNoteName), t + " " + e
        }, o.getInterpreterSettings = function () {
            o.websocketMsgSrv.getInterpreterSettings()
        }, e.$on("interpreterSettings", function (t, n) {
            e.interpreterSettings = n.interpreterSettings, e.note.defaultInterpreter = n.interpreterSettings[0]
        })
    }
    angular.module("zeppelinWebApp").controller("NotenameCtrl", n), n.$inject = ["$scope", "noteListDataFactory", "$routeParams", "websocketMsgSrv"]
}, function (e, t) {
    "use strict";

    function n(e, t, n) {
        var o = this;
        e.note = {}, e.note.step1 = !0, e.note.step2 = !1, e.maxLimit = "";
        var a = 0;
        n.listConfigurations(), e.$on("configurationsInfo", function (t, n) {
            a = n.configurations["zeppelin.websocket.max.text.message.size"], e.maxLimit = Math.round(a / 1048576)
        }), o.resetFlags = function () {
            e.note = {}, e.note.step1 = !0, e.note.step2 = !1, angular.element("#noteImportFile").val("")
        }, e.uploadFile = function () {
            angular.element("#noteImportFile").click()
        }, e.importFile = function (t) {
            e.note.errorText = "", e.note.importFile = t.files[0];
            var n = e.note.importFile,
                r = new FileReader;
            return n.size > a ? (e.note.errorText = "File size limit Exceeded!", void e.$apply()) : (r.onloadend = function () {
                o.processImportJson(r.result)
            }, void(n && r.readAsText(n)))
        }, e.uploadURL = function () {
            e.note.errorText = "", e.note.step1 = !1, t(function () {
                e.note.step2 = !0
            }, 400)
        }, o.importBack = function () {
            e.note.errorText = "", t(function () {
                e.note.step1 = !0
            }, 400), e.note.step2 = !1
        }, o.importNote = function () {
            e.note.errorText = "", e.note.importUrl ? jQuery.ajax({
                url: e.note.importUrl,
                type: "GET",
                dataType: "json",
                jsonp: !1,
                xhrFields: {
                    withCredentials: !1
                },
                error: function (t, n, r) {
                    e.note.errorText = "Unable to Fetch URL", e.$apply()
                }
            }).done(function (e) {
                o.processImportJson(e)
            }) : (e.note.errorText = "Enter URL", e.$apply())
        }, o.processImportJson = function (t) {
            if ("object" !== ("undefined" == typeof t ? "undefined" : r(t))) try {
                t = JSON.parse(t)
            } catch (t) {
                return e.note.errorText = "JSON parse exception", void e.$apply()
            }
            t.paragraphs && t.paragraphs.length > 0 ? (e.note.noteImportName ? t.name = e.note.noteImportName : e.note.noteImportName = t.name, n.importNote(t)) : e.note.errorText = "Invalid JSON", e.$apply()
        }, e.$on("setNoteMenu", function (e, t) {
            o.resetFlags(), angular.element("#noteImportModal").modal("hide")
        })
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    angular.module("zeppelinWebApp").controller("NoteImportCtrl", n), n.$inject = ["$scope", "$timeout", "websocketMsgSrv"]
}, function (e, t) {
    "use strict";

    function n(e) {
        return e("popoverHtmlUnsafe", "popover", "click")
    }
    angular.module("zeppelinWebApp").directive("popoverHtmlUnsafe", n), n.$inject = ["$uibTooltip"]
}, function (e, t) {
    "use strict";

    function n() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "components/popover-html-unsafe/popover-html-unsafe-popup.html?v=1505743960640"
        }
    }
    angular.module("zeppelinWebApp").directive("popoverHtmlUnsafePopup", n)
}, function (e, t) {
    "use strict";

    function n(e, t) {
        return {
            restrict: "AE",
            scope: {
                paragraphId: "=paragraphId",
                paragraph: "=paragraphContext",
                dirtyText: "=dirtyText",
                originalText: "=originalText",
                onLoad: "=onLoad",
                revisionView: "=revisionView"
            },
            link: function (n, r, o, a) {
                e("components/editor/ace.editor.directive.html").then(function (e) {
                    var o = angular.element(e);
                    o.attr("id", n.paragraphId + "_editor"), r.append(o), t(o)(n)
                })
            }
        }
    }
    n.$inject = ["$templateRequest", "$compile"], angular.module("zeppelinWebApp").directive("codeEditor", n)
}, function (e, t) {
    "use strict";

    function n() {
        return function (e, t, n) {
            t.bind("keydown keypress", function (t) {
                13 === t.which && (t.shiftKey || e.$apply(function () {
                    e.$eval(n.ngEnter)
                }), t.preventDefault())
            })
        }
    }
    angular.module("zeppelinWebApp").directive("ngEnter", n)
}, function (e, t) {
    "use strict";

    function n() {
        return {
            restrict: "A",
            link: function (e, t) {
                t.bind("click", function (e) {
                    e.stopPropagation()
                })
            }
        }
    }
    angular.module("zeppelinWebApp").directive("dropdownInput", n)
}, function (e, t) {
    "use strict";

    function n() {
        var e = {
            autoHide: !0,
            handles: "se",
            helper: "resizable-helper",
            stop: function () {
                angular.element(this).css({
                    width: "100%",
                    height: "100%"
                })
            }
        };
        return {
            restrict: "A",
            scope: {
                callback: "&onResize"
            },
            link: function (t, n, r) {
                r.$observe("resize", function (r) {
                    var o = function (n, r) {
                        var o = window.innerWidth / 12;
                        n.off("resizestop");
                        var a = angular.copy(e);
                        "TABLE" === r.graphType || "TEXT" === r.graphType ? (a.grid = [o, 10], a.minHeight = 100) : (a.grid = [o, 1e4], a.minHeight = 0), a.maxWidth = window.innerWidth, n.resizable(a), n.on("resizestop", function () {
                            if (t.callback) {
                                var e = n.height();
                                e < 50 && (e = 300), t.callback({
                                    width: Math.ceil(n.width() / o),
                                    height: e
                                })
                            }
                        })
                    };
                    r = JSON.parse(r), "true" === r.allowresize && (o(n, r), angular.element(window).resize(function () {
                        o(n, r)
                    }))
                })
            }
        }
    }
    angular.module("zeppelinWebApp").directive("resizable", n)
}, function (e, t) {
    "use strict";

    function n() {
        return {
            restrict: "A",
            scope: {
                preVisibleCallback: "&previsiblecallback",
                postVisibleCallback: "&postvisiblecallback",
                targetinput: "@targetinput"
            },
            link: function (e, t, n) {
                var r = e.preVisibleCallback,
                    o = e.postVisibleCallback;
                t.on("show.bs.modal", function (e) {
                    var t = angular.element(e.relatedTarget),
                        n = t.data("clone"),
                        o = t.data("source-note-name"),
                        a = !!n;
                    r()(a, o)
                }), t.on("shown.bs.modal", function (t) {
                    e.targetinput && angular.element(t.target).find("input#" + e.targetinput).select(), o()
                })
            }
        }
    }
    angular.module("zeppelinWebApp").directive("modalvisible", n)
}, function (e, t) {
    "use strict";

    function n(e, t) {
        return {
            getHomeNote: function () {
                t.sendNewEvent({
                    op: "GET_HOME_NOTE"
                })
            },
            createNotebook: function (e, n) {
                t.sendNewEvent({
                    op: "NEW_NOTE",
                    data: {
                        name: e,
                        defaultInterpreterId: n
                    }
                })
            },
            moveNoteToTrash: function (e) {
                t.sendNewEvent({
                    op: "MOVE_NOTE_TO_TRASH",
                    data: {
                        id: e
                    }
                })
            },
            moveFolderToTrash: function (e) {
                t.sendNewEvent({
                    op: "MOVE_FOLDER_TO_TRASH",
                    data: {
                        id: e
                    }
                })
            },
            restoreNote: function (e) {
                t.sendNewEvent({
                    op: "RESTORE_NOTE",
                    data: {
                        id: e
                    }
                })
            },
            restoreFolder: function (e) {
                t.sendNewEvent({
                    op: "RESTORE_FOLDER",
                    data: {
                        id: e
                    }
                })
            },
            restoreAll: function () {
                t.sendNewEvent({
                    op: "RESTORE_ALL"
                })
            },
            deleteNote: function (e) {
                t.sendNewEvent({
                    op: "DEL_NOTE",
                    data: {
                        id: e
                    }
                })
            },
            removeFolder: function (e) {
                t.sendNewEvent({
                    op: "REMOVE_FOLDER",
                    data: {
                        id: e
                    }
                })
            },
            emptyTrash: function () {
                t.sendNewEvent({
                    op: "EMPTY_TRASH"
                })
            },
            cloneNote: function (e, n) {
                t.sendNewEvent({
                    op: "CLONE_NOTE",
                    data: {
                        id: e,
                        name: n
                    }
                })
            },
            getNoteList: function () {
                t.sendNewEvent({
                    op: "LIST_NOTES"
                })
            },
            reloadAllNotesFromRepo: function () {
                t.sendNewEvent({
                    op: "RELOAD_NOTES_FROM_REPO"
                })
            },
            getNote: function (e) {
                t.sendNewEvent({
                    op: "GET_NOTE",
                    data: {
                        id: e
                    }
                })
            },
            updateNote: function (e, n, r) {
                t.sendNewEvent({
                    op: "NOTE_UPDATE",
                    data: {
                        id: e,
                        name: n,
                        config: r
                    }
                })
            },
            updatePersonalizedMode: function (e, n) {
                t.sendNewEvent({
                    op: "UPDATE_PERSONALIZED_MODE",
                    data: {
                        id: e,
                        personalized: n
                    }
                })
            },
            renameNote: function (e, n) {
                t.sendNewEvent({
                    op: "NOTE_RENAME",
                    data: {
                        id: e,
                        name: n
                    }
                })
            },
            renameFolder: function (e, n) {
                t.sendNewEvent({
                    op: "FOLDER_RENAME",
                    data: {
                        id: e,
                        name: n
                    }
                })
            },
            moveParagraph: function (e, n) {
                t.sendNewEvent({
                    op: "MOVE_PARAGRAPH",
                    data: {
                        id: e,
                        index: n
                    }
                })
            },
            insertParagraph: function (e) {
                t.sendNewEvent({
                    op: "INSERT_PARAGRAPH",
                    data: {
                        index: e
                    }
                })
            },
            copyParagraph: function (e, n, r, o, a) {
                t.sendNewEvent({
                    op: "COPY_PARAGRAPH",
                    data: {
                        index: e,
                        title: n,
                        paragraph: r,
                        config: o,
                        params: a
                    }
                })
            },
            updateAngularObject: function (e, n, r, o, a) {
                t.sendNewEvent({
                    op: "ANGULAR_OBJECT_UPDATED",
                    data: {
                        noteId: e,
                        paragraphId: n,
                        name: r,
                        value: o,
                        interpreterGroupId: a
                    }
                })
            },
            clientBindAngularObject: function (e, n, r, o) {
                t.sendNewEvent({
                    op: "ANGULAR_OBJECT_CLIENT_BIND",
                    data: {
                        noteId: e,
                        name: n,
                        value: r,
                        paragraphId: o
                    }
                })
            },
            clientUnbindAngularObject: function (e, n, r) {
                t.sendNewEvent({
                    op: "ANGULAR_OBJECT_CLIENT_UNBIND",
                    data: {
                        noteId: e,
                        name: n,
                        paragraphId: r
                    }
                })
            },
            cancelParagraphRun: function (e) {
                t.sendNewEvent({
                    op: "CANCEL_PARAGRAPH",
                    data: {
                        id: e
                    }
                })
            },
            runParagraph: function (e, n, r, o, a) {
                t.sendNewEvent({
                    op: "RUN_PARAGRAPH",
                    data: {
                        id: e,
                        title: n,
                        paragraph: r,
                        config: o,
                        params: a
                    }
                })
            },
            runAllParagraphs: function (e, n) {
                t.sendNewEvent({
                    op: "RUN_ALL_PARAGRAPHS",
                    data: {
                        noteId: e,
                        paragraphs: JSON.stringify(n)
                    }
                })
            },
            removeParagraph: function (e) {
                t.sendNewEvent({
                    op: "PARAGRAPH_REMOVE",
                    data: {
                        id: e
                    }
                })
            },
            clearParagraphOutput: function (e) {
                t.sendNewEvent({
                    op: "PARAGRAPH_CLEAR_OUTPUT",
                    data: {
                        id: e
                    }
                })
            },
            clearAllParagraphOutput: function (e) {
                t.sendNewEvent({
                    op: "PARAGRAPH_CLEAR_ALL_OUTPUT",
                    data: {
                        id: e
                    }
                })
            },
            completion: function (e, n, r) {
                t.sendNewEvent({
                    op: "COMPLETION",
                    data: {
                        id: e,
                        buf: n,
                        cursor: r
                    }
                })
            },
            commitParagraph: function (e, n, r, o, a) {
                t.sendNewEvent({
                    op: "COMMIT_PARAGRAPH",
                    data: {
                        id: e,
                        title: n,
                        paragraph: r,
                        config: o,
                        params: a
                    }
                })
            },
            importNote: function (e) {
                t.sendNewEvent({
                    op: "IMPORT_NOTE",
                    data: {
                        note: e
                    }
                })
            },
            checkpointNote: function (e, n) {
                t.sendNewEvent({
                    op: "CHECKPOINT_NOTE",
                    data: {
                        noteId: e,
                        commitMessage: n
                    }
                })
            },
            setNoteRevision: function (e, n) {
                t.sendNewEvent({
                    op: "SET_NOTE_REVISION",
                    data: {
                        noteId: e,
                        revisionId: n
                    }
                })
            },
            listRevisionHistory: function (e) {
                t.sendNewEvent({
                    op: "LIST_REVISION_HISTORY",
                    data: {
                        noteId: e
                    }
                })
            },
            getNoteByRevision: function (e, n) {
                t.sendNewEvent({
                    op: "NOTE_REVISION",
                    data: {
                        noteId: e,
                        revisionId: n
                    }
                })
            },
            getEditorSetting: function (e, n) {
                t.sendNewEvent({
                    op: "EDITOR_SETTING",
                    data: {
                        paragraphId: e,
                        magic: n
                    }
                })
            },
            isConnected: function () {
                return t.isConnected()
            },
            getNoteJobsList: function () {
                t.sendNewEvent({
                    op: "LIST_NOTE_JOBS"
                })
            },
            getUpdateNoteJobsList: function (e) {
                t.sendNewEvent({
                    op: "LIST_UPDATE_NOTE_JOBS",
                    data: {
                        lastUpdateUnixTime: 1 * e
                    }
                })
            },
            unsubscribeJobManager: function () {
                t.sendNewEvent({
                    op: "UNSUBSCRIBE_UPDATE_NOTE_JOBS"
                })
            },
            getInterpreterBindings: function (e) {
                t.sendNewEvent({
                    op: "GET_INTERPRETER_BINDINGS",
                    data: {
                        noteId: e
                    }
                })
            },
            saveInterpreterBindings: function (e, n) {
                t.sendNewEvent({
                    op: "SAVE_INTERPRETER_BINDINGS",
                    data: {
                        noteId: e,
                        selectedSettingIds: n
                    }
                })
            },
            listConfigurations: function () {
                t.sendNewEvent({
                    op: "LIST_CONFIGURATIONS"
                })
            },
            getInterpreterSettings: function () {
                t.sendNewEvent({
                    op: "GET_INTERPRETER_SETTINGS"
                })
            }
        }
    }
    angular.module("zeppelinWebApp").service("websocketMsgSrv", n), n.$inject = ["$rootScope", "websocketEvents"]
}, function (e, t) {
    "use strict";

    function n(e, t, n, r) {
        var o, a = {};
        return a.ws = t(r.getWebsocketUrl()), a.ws.reconnectIfNotNormalClose = !0, a.ws.onOpen(function () {
            e.$broadcast("setConnectedStatus", !0), o = setInterval(function () {
                a.sendNewEvent({
                    op: "PING"
                })
            }, 1e4)
        }), a.sendNewEvent = function (t) {
            void 0 !== e.ticket ? (t.principal = e.ticket.principal, t.ticket = e.ticket.ticket, t.roles = e.ticket.roles) : (t.principal = "", t.ticket = "", t.roles = ""), a.ws.send(JSON.stringify(t))
        }, a.isConnected = function () {
            return 1 === a.ws.socket.readyState
        }, a.ws.onMessage(function (t) {
            var r;
            t.data && (r = angular.fromJson(t.data));
            var o = r.op,
                a = r.data;
            if ("NOTE" === o) e.$broadcast("setNoteContent", a.note);
            else if ("NEW_NOTE" === o) n.path("/notebook/" + a.note.id);
            else if ("NOTES_INFO" === o) e.$broadcast("setNoteMenu", a.notes);
            else if ("LIST_NOTE_JOBS" === o) e.$broadcast("setNoteJobs", a.noteJobs);
            else if ("LIST_UPDATE_NOTE_JOBS" === o) e.$broadcast("setUpdateNoteJobs", a.noteRunningJobs);
            else if ("AUTH_INFO" === o) {
                var i = [];
                i = "[]" === e.ticket.roles ? [{
                    label: "Close",
                    action: function (e) {
                        e.close()
                    }
                }] : [{
                    label: "Login",
                    action: function (e) {
                        e.close(), angular.element("#loginModal").modal({
                            show: "true"
                        })
                    }
                }, {
                    label: "Cancel",
                    action: function (t) {
                        t.close(), e.$apply(function () {
                            n.path("/")
                        })
                    }
                }], BootstrapDialog.show({
                    closable: !1,
                    closeByBackdrop: !1,
                    closeByKeyboard: !1,
                    title: "Insufficient privileges",
                    message: a.info.toString(),
                    buttons: i
                })
            } else "PARAGRAPH" === o ? e.$broadcast("updateParagraph", a) : "PARAGRAPH_APPEND_OUTPUT" === o ? e.$broadcast("appendParagraphOutput", a) : "PARAGRAPH_UPDATE_OUTPUT" === o ? e.$broadcast("updateParagraphOutput", a) : "PROGRESS" === o ? e.$broadcast("updateProgress", a) : "COMPLETION_LIST" === o ? e.$broadcast("completionList", a) : "EDITOR_SETTING" === o ? e.$broadcast("editorSetting", a) : "ANGULAR_OBJECT_UPDATE" === o ? e.$broadcast("angularObjectUpdate", a) : "ANGULAR_OBJECT_REMOVE" === o ? e.$broadcast("angularObjectRemove", a) : "APP_APPEND_OUTPUT" === o ? e.$broadcast("appendAppOutput", a) : "APP_UPDATE_OUTPUT" === o ? e.$broadcast("updateAppOutput", a) : "APP_LOAD" === o ? e.$broadcast("appLoad", a) : "APP_STATUS_CHANGE" === o ? e.$broadcast("appStatusChange", a) : "LIST_REVISION_HISTORY" === o ? e.$broadcast("listRevisionHistory", a) : "NOTE_REVISION" === o ? e.$broadcast("noteRevision", a) : "INTERPRETER_BINDINGS" === o ? e.$broadcast("interpreterBindings", a) : "ERROR_INFO" === o ? BootstrapDialog.show({
                closable: !1,
                closeByBackdrop: !1,
                closeByKeyboard: !1,
                title: "Details",
                message: a.info.toString(),
                buttons: [{
                    label: "Close",
                    action: function () {
                        BootstrapDialog.closeAll()
                    }
                }]
            }) : "SESSION_LOGOUT" === o ? e.$broadcast("session_logout", a) : "CONFIGURATIONS_INFO" === o ? e.$broadcast("configurationsInfo", a) : "INTERPRETER_SETTINGS" === o ? e.$broadcast("interpreterSettings", a) : "PARAGRAPH_ADDED" === o ? e.$broadcast("addParagraph", a.paragraph, a.index) : "PARAGRAPH_REMOVED" === o ? e.$broadcast("removeParagraph", a.id) : "PARAGRAPH_MOVED" === o ? e.$broadcast("moveParagraph", a.id, a.index) : "NOTE_UPDATED" === o ? e.$broadcast("updateNote", a.name, a.config, a.info) : "SET_NOTE_REVISION" === o && e.$broadcast("setNoteRevisionResult", a)
        }), a.ws.onError(function (t) {
            e.$broadcast("setConnectedStatus", !1)
        }), a.ws.onClose(function (t) {
            void 0 !== o && (clearInterval(o), o = void 0), e.$broadcast("setConnectedStatus", !1)
        }), a
    }
    angular.module("zeppelinWebApp").factory("websocketEvents", n), n.$inject = ["$rootScope", "$websocket", "$location", "baseUrlSrv"]
}, function (e, t) {
    "use strict";

    function n(e) {
        var t = {
                root: {
                    children: []
                },
                flatList: [],
                flatFolderMap: {},
                setNotes: function (r) {
                    t.flatList = _.map(r, function (t) {
                        return t.isTrash = !!t.name && t.name.split("/")[0] === e, t
                    }), t.root = {
                        children: []
                    }, t.flatFolderMap = {}, _.reduce(r, function (e, t) {
                        var r = t.name || t.id,
                            o = r.match(/([^\/][^\/]*)/g);
                        return n(e, o, t.id), e
                    }, t.root)
                }
            },
            n = function n(r, o, a) {
                if (1 === o.length) r.children.push({
                    name: o[0],
                    id: a,
                    path: r.id ? r.id + "/" + o[0] : o[0],
                    isTrash: !!r.id && r.id.split("/")[0] === e
                });
                else {
                    var i = o.shift(),
                        s = _.find(r.children, function (e) {
                            return e.name === i && void 0 !== e.children
                        });
                    if (void 0 !== s) n(s, o, a);
                    else {
                        var l = {
                            id: r.id ? r.id + "/" + i : i,
                            name: i,
                            hidden: !0,
                            children: [],
                            isTrash: !!r.id && r.id.split("/")[0] === e
                        };
                        t.flatFolderMap[l.id] = l, r.children.push(l), n(l, o, a)
                    }
                }
            };
        return t
    }
    angular.module("zeppelinWebApp").factory("noteListDataFactory", n), n.$inject = ["TRASH_FOLDER_ID"]
}, function (e, t, n) {
    "use strict";

    function r() {
        this.getPort = function () {
            var e = Number(location.port);
            return e || (e = 80, "https:" === location.protocol && (e = 443)), 9e3 === e && (e = 8080), e
        }, this.getWebsocketUrl = function () {
            var t = "https:" === location.protocol ? "wss:" : "ws:";
            return t + "//" + location.hostname + ":" + this.getPort() + e(location.pathname) + "/ws"
        }, this.getRestApiBase = function () {
            return location.protocol + "//" + location.hostname + ":" + this.getPort() + e(location.pathname) + "/api"
        };
        var e = function (e) {
            return e.replace(/\/$/, "")
        }
    }
    angular.module("zeppelinWebApp").service("baseUrlSrv", r)
}, function (e, t) {
    "use strict";

    function n() {
        this.detectIE = function () {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
            var n = e.indexOf("Trident/");
            if (n > 0) {
                var r = e.indexOf("rv:");
                return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10)
            }
            var o = e.indexOf("Edge/");
            return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
        }
    }
    angular.module("zeppelinWebApp").service("browserDetectService", n)
}, function (e, t) {
    "use strict";

    function n(e) {
        this.saveAs = function (t, n, r) {
            var o = "\ufeff";
            if (e.detectIE()) {
                angular.element("body").append('<iframe id="SaveAsId" style="display: none"></iframe>');
                var a = angular.element("body > iframe#SaveAsId")[0].contentWindow;
                t = o + t, a.document.open("text/json", "replace"), a.document.write(t), a.document.close(), a.focus();
                var i = Date.now();
                a.document.execCommand("SaveAs", !1, n + "." + r);
                var s = Date.now();
                i === s && a.document.execCommand("SaveAs", !0, n + ".txt"), angular.element("body > iframe#SaveAsId").remove()
            } else {
                t = "data:image/svg;charset=utf-8," + o + encodeURIComponent(t), angular.element("body").append('<a id="SaveAsId"></a>');
                var l = angular.element("body > a#SaveAsId");
                l.attr("href", t), l.attr("download", n + "." + r), l.attr("target", "_blank"), l[0].click(), l.remove()
            }
        }
    }
    angular.module("zeppelinWebApp").service("saveAsService", n), n.$inject = ["browserDetectService"]
}, function (e, t) {
    "use strict";

    function n(e, t) {
        this.search = function (n) {
            if (this.searchTerm = n.q, n.q) {
                var r = window.encodeURIComponent(n.q);
                return e(t.getRestApiBase() + "/notebook/search?q=" + r, {}, {
                    query: {
                        method: "GET"
                    }
                })
            }
        }, this.searchTerm = ""
    }
    angular.module("zeppelinWebApp").service("searchService", n), n.$inject = ["$resource", "baseUrlSrv"]
}, function (e, t) {
    "use strict";

    function n(e, t, n, r, o, a, i) {
        e.SigningIn = !1, e.loginParams = {}, e.login = function () {
            e.SigningIn = !0, n({
                method: "POST",
                url: o.getRestApiBase() + "/login",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: r({
                    userName: e.loginParams.userName,
                    password: e.loginParams.password
                })
            }).then(function (n) {
                t.ticket = n.data.body, angular.element("#loginModal").modal("toggle"), t.$broadcast("loginSuccess", !0), t.userName = e.loginParams.userName, e.SigningIn = !1, a.search() && a.search().ref && i(function () {
                    var e = a.search().ref;
                    a.$$search = {}, a.path(e)
                }, 100)
            }, function (t) {
                e.loginParams.errorText = "The username and password that you entered don't match.", e.SigningIn = !1
            })
        };
        var s = function () {
            e.loginParams = {
                userName: "",
                password: ""
            }
        };
        t.$on("session_logout", function (n, r) {
            if ("" !== t.userName) {
                t.userName = "", t.ticket = void 0, setTimeout(function () {
                    e.loginParams = {}, e.loginParams.errorText = r.info, angular.element(".nav-login-btn").click()
                }, 1e3);
                var o = a.path();
                a.path("/").search("ref", o)
            }
        }), e.$on("initLoginValues", function () {
            s()
        })
    }
    angular.module("zeppelinWebApp").controller("LoginCtrl", n), n.$inject = ["$scope", "$rootScope", "$http", "$httpParamSerializer", "baseUrlSrv", "$location", "$timeout"]
}, function (e, t) {
    "use strict";

    function n() {
        var e = this;
        e.showEditor = !1, e.value = ""
    }
    angular.module("zeppelinWebApp").controller("ElasticInputCtrl", n)
}, function (e, t) {
    "use strict";

    function n(e, t, n, r) {
        function o(e) {
            for (e = e.trim(); e.indexOf("\\") > -1;) e = e.replace("\\", "/");
            for (; e.indexOf("///") > -1;) e = e.replace("///", "/");
            return e = e.replace("//", "/"), "/" === e ? "/" : ("/" === e[0] && (e = e.substring(1)), "/" === e.slice(-1) && (e = e.slice(0, -1)), e)
        }
        this.moveNoteToTrash = function (n, r) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "是否确定要把该工作区移到回收站？",
                message: "该工作区将会被移到 <strong>回收站</strong>.",
                callback: function (o) {
                    o && (e.moveNoteToTrash(n), r && t.path("/"))
                }
            })
        }, this.moveFolderToTrash = function (t) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "是否确定要把该工作目录移到回收站？",
                message: "该工作目录将会被移到 <strong>回收站</strong>.",
                callback: function (n) {
                    n && e.moveFolderToTrash(t)
                }
            })
        }, this.removeNote = function (n, r) {
            BootstrapDialog.confirm({
                type: BootstrapDialog.TYPE_WARNING,
                closable: !0,
                title: "警告！ 该工作区将被永久删除",
                message: "该操作不可撤销，是否确定要继续？",
                callback: function (o) {
                    o && (e.deleteNote(n), r && t.path("/"))
                }
            })
        }, this.removeFolder = function (t) {
            BootstrapDialog.confirm({
                type: BootstrapDialog.TYPE_WARNING,
                closable: !0,
                title: "警告！ 该工作目录将被永久删除",
                message: "该操作不可撤销，是否确定要继续？",
                callback: function (n) {
                    n && e.removeFolder(t)
                }
            })
        }, this.restoreAll = function () {
            BootstrapDialog.confirm({
                closable: !0,
                title: "是否确定要还原在回收站里的所有工作区？",
                message: "在回收站中的工作目录和工作区将被 <strong>合并</strong> 回它们原来所在的位置上。",
                callback: function (t) {
                    t && e.restoreAll()
                }
            })
        }, this.emptyTrash = function () {
            BootstrapDialog.confirm({
                type: BootstrapDialog.TYPE_WARNING,
                closable: !0,
                title: "警告！ 在回收站中的所有工作区将被永久删除",
                message: "T该操作不可撤销，是否确定要继续？",
                callback: function (t) {
                    t && e.emptyTrash()
                }
            })
        }, this.clearAllParagraphOutput = function (t) {
            BootstrapDialog.confirm({
                closable: !0,
                title: "",
                message: "是否确定要清空所有结果？",
                callback: function (n) {
                    n && e.clearAllParagraphOutput(t)
                }
            })
        }, this.renameNote = function (t, r) {
            n.openRenameModal({
                title: "重命名工作区",
                oldName: r,
                callback: function (n) {
                    e.renameNote(t, n)
                }
            })
        }, this.renameFolder = function (t) {
            n.openRenameModal({
                title: "重命名工作目录",
                oldName: t,
                callback: function (n) {
                    var a = o(n);
                    _.has(r.flatFolderMap, a) ? BootstrapDialog.confirm({
                        type: BootstrapDialog.TYPE_WARNING,
                        closable: !0,
                        title: "警告！ 该工作目录将被合并",
                        message: "该工作目录将被合并到 <strong>" + a + "</strong>。 是否确定要继续？",
                        callback: function (n) {
                            n && e.renameFolder(t, a)
                        }
                    }) : e.renameFolder(t, a)
                }
            })
        }
    }
    angular.module("zeppelinWebApp").service("noteActionSrv", n), n.$inject = ["websocketMsgSrv", "$location", "renameSrv", "noteListDataFactory"]
}, function (e, t) {
    "use strict";

    function n() {
        var e = {};
        this.clear = function () {
            e = {}
        }, this.put = function (t, n) {
            e[t] = n
        }, this.get = function (t) {
            return e[t]
        }, this.del = function (t) {
            var n = e[t];
            return delete e[t], n
        }
    }
    angular.module("zeppelinWebApp").service("noteVarShareService", n), n.$inject = []
}, function (e, t) {
    "use strict";

    function n(e) {
        function t(e) {
            return !!e.trim()
        }
        var n = this;
        e.params = {
            newName: ""
        }, e.isValid = !0, e.rename = function () {
            angular.element("#renameModal").modal("hide"), n.callback(e.params.newName)
        }, e.$on("openRenameModal", function (r, o) {
            n.validator = o.validator || t, n.callback = o.callback || function () {}, e.title = o.title || "Rename", e.params.newName = o.oldName || "", e.validate = function () {
                e.isValid = n.validator(e.params.newName)
            }, angular.element("#renameModal").modal("show")
        })
    }
    angular.module("zeppelinWebApp").controller("RenameCtrl", n), n.$inject = ["$scope"]
}, function (e, t) {
    "use strict";

    function n(e) {
        var t = this;
        t.openRenameModal = function (t) {
            e.$broadcast("openRenameModal", t)
        }
    }
    angular.module("zeppelinWebApp").service("renameSrv", n), n.$inject = ["$rootScope"]
}, function (module, exports, __webpack_require__) {
    "use strict";
    ! function () {
        function heliumService($http, baseUrlSrv, ngToast) {
            var url = baseUrlSrv.getRestApiBase() + "/helium/visualizations/load",
                visualizations = [];
            this.load = $http.get(url).success(function (response) {
                "ERROR:" !== response.substring(0, "ERROR:".length) && eval(response)
            }), this.get = function () {
                return visualizations
            }, this.getVisualizationOrder = function () {
                return $http.get(baseUrlSrv.getRestApiBase() + "/helium/visualizationOrder")
            }, this.setVisualizationOrder = function (e) {
                return $http.post(baseUrlSrv.getRestApiBase() + "/helium/visualizationOrder", e)
            }, this.getAllPackageInfo = function () {
                return $http.get(baseUrlSrv.getRestApiBase() + "/helium/all")
            }, this.enable = function (e, t) {
                return $http.post(baseUrlSrv.getRestApiBase() + "/helium/enable/" + e, t)
            }, this.disable = function (e) {
                return $http.post(baseUrlSrv.getRestApiBase() + "/helium/disable/" + e)
            }
        }
        angular.module("zeppelinWebApp").service("heliumService", heliumService), heliumService.$inject = ["$http", "baseUrlSrv", "ngToast"]
    }()
}]);
//# sourceMappingURL=app.1fa46a4e6cdd598200c3.js.map