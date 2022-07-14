(self.webpackChunkstar=self.webpackChunkstar||[]).push([[163],{84684:function(u,i,t){"use strict";t.r(i);var e=t(67294),a=t(96089),s=t(65704),l=e.memo(n=>{var o=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"1-gamebase-\u7C7B"},e.createElement(a.AnchorLink,{to:"#1-gamebase-\u7C7B","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"1. GameBase \u7C7B"),e.createElement(s.Z,{code:`var GameBase = (function () {
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
})();`,lang:"js"})))});i.default=n=>{var o=e.useContext(a.context),m=o.demos;return e.useEffect(()=>{var r;n!=null&&(r=n.location)!==null&&r!==void 0&&r.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(l,{demos:m})}}}]);
