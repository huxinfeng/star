(self.webpackChunkstar=self.webpackChunkstar||[]).push([[163],{84684:function(E,l,t){"use strict";t.r(l);var e=t(67294),a=t(96089),i=t(65704),u=e.memo(n=>{var o=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"1-gamebase-\u7C7B"},e.createElement(a.AnchorLink,{to:"#1-gamebase-\u7C7B","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"1. GameBase \u7C7B"),e.createElement(i.Z,{code:`var GameBase = (function () {
  function GameBase() {
    this.EVENT_PAUSE_CHANGE = 'GameEVENT_PAUSE_CHANGE';
    this.data = new GameData();
    this._frameCount = 0;
    this._startTime = new Date().getTime();
    this._staticTime = 0;
    this._staticInterval = 0;
    this._now = 0;
    this._timeMultiplier = 1;
    this._pause = false;
    this.__initGameTime();
  }
  GameBase.prototype.__initGameTime = function () {
    var _this_1 = this;
    EventUtils.addEventListener(
      ClientWorld,
      ClientWorld.EVENT_INITED,
      Callback.New(function () {
        os.add_ENTERFRAME(_this_1.onEnterFrame, _this_1);
      }, this),
      true,
    );
  };
  Object.defineProperty(GameBase.prototype, 'frameCount', {
    get: function () {
      return this._frameCount;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(GameBase.prototype, 'oneFrame', {
    get: function () {
      return 1000 / os['fps'];
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(GameBase.prototype, 'now', {
    get: function () {
      return this._now;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(GameBase.prototype, 'pause', {
    get: function () {
      return Game._pause;
    },
    set: function (v) {
      if (Game._pause == v) return;
      Game._pause = v;
      EventUtils.happen(this, this.EVENT_PAUSE_CHANGE);
    },
    enumerable: false,
    configurable: true,
  });
  GameBase.prototype.onEnterFrame = function () {
    if (!Game._pause) {
      this._now += this._timeMultiplier * this.oneFrame;
      this._frameCount++;
    }
  };
  GameBase.prototype.setLoginData = function (playerID, worldData, heartBeatInterval) {
    Game.player.uid = playerID;
    Game.player.key = Game.playerKey;
    ClientMsgSender.heartBeatInterval = heartBeatInterval;
    var t = Math.floor(ClientMsgSender.heartBeatInterval / 2) * 1000;
    setInterval(function () {
      if (ClientMsgSender.threadID != null || ClientMsgSender.threadID != 2) {
        ClientMsgSender.rpc('ServerPlayer', 'HeartBeat');
      }
    }, t);
    for (var i in worldData) {
      ClientWorld.data[i] = worldData[i];
    }
  };
  GameBase.prototype.init = function () {
    this.player = new ClientPlayer(true);
  };
  GameBase.prototype.getSaveData = function () {
    return [Game.now];
  };
  GameBase.prototype.recoverySaveData = function (data) {
    var now = new Date().getTime();
    Game._startTime = now - data[0];
  };
  return GameBase;
})();`,lang:"js"}),e.createElement("h2",{id:"2-clientmain-\u7C7B"},e.createElement(a.AnchorLink,{to:"#2-clientmain-\u7C7B","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"2. ClientMain \u7C7B"),e.createElement("p",null,"\u6211\u4EEC\u5728 gamecreator.js \u4E0B\uFF0C\u5168\u5C40\u641C\u7D22 EventUtils.happen(ClientWorld, ClientWorld.EVENT_INITED)"),e.createElement("p",null,"\u4E00\u5171\u641C\u7D22\u5230\u4E24\u4E2A\u7ED3\u679C"),e.createElement(i.Z,{code:`// gamecreator.js line 59091
var ClientMain = (function () {
  // ...
  ClientMain.prototype.initOver = function () {
    Config.TILE_SPLIT_SIZE_LOCK = true;
    EventUtils.happen(ClientWorld, ClientWorld.EVENT_BEFORE_INITED);
    EventUtils.happen(ClientWorld, ClientWorld.EVENT_INITED);
  };
  // ...
})();`,lang:"js"}),e.createElement(i.Z,{code:`// gamecreator.js line 75017
var GCPolyfill = (function () {
  // ...
  GCPolyfill.init = function () {
    // ...
    ClientMain.prototype['initOver'] = function () {
      // ...
      SinglePlayerGame.init(
        Callback.New(function () {
          EventUtils.happen(ClientWorld, ClientWorld.EVENT_BEFORE_INITED);
          EventUtils.happen(ClientWorld, ClientWorld.EVENT_INITED);
        }, this),
      );
      // ...
    };
    // ...
  };
  // ...
})();`,lang:"js"}),e.createElement("ul",null,e.createElement("li",null,"\u5F88\u660E\u663E\u662F\u7531 ClientMain.prototype.initOver \u65B9\u6CD5\u5B9E\u73B0"),e.createElement("li",null,"\u7B2C\u4E8C\u4E2A GCPolyfill \u662F\u5BF9\u7B2C\u4E00\u4E2A\u65B9\u6CD5\u7684\u4ECE\u5199"),e.createElement("li",null,"\u5168\u5C40\u641C\u7D22 this.initOver")),e.createElement(i.Z,{code:`// gamecreator.js line 58960
var ClientMain = (function () {
  // ...
  ClientMain.prototype.init = function () {
    // ...
    new SyncTask(this.initTask, this.initOver, [], this);
    // ...
  };
  // ...
})();`,lang:"js"})))});l.default=n=>{var o=e.useContext(a.context),s=o.demos;return e.useEffect(()=>{var r;n!=null&&(r=n.location)!==null&&r!==void 0&&r.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(u,{demos:s})}}}]);
