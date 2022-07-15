(self.webpackChunkstar=self.webpackChunkstar||[]).push([[431],{29090:function(C,a,n){"use strict";n.r(a);var e=n(67294),u=n(96089),l=n(65704),r=n(55593),c=e.memo(t=>{var m=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"1-\u4EE3\u7801\u7ED3\u6784\u9884\u89C8"},e.createElement(u.AnchorLink,{to:"#1-\u4EE3\u7801\u7ED3\u6784\u9884\u89C8","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"1. \u4EE3\u7801\u7ED3\u6784\u9884\u89C8"),e.createElement(r.Z,null,e.createElement("ul",null,e.createElement("li",null,"Game",e.createElement("small",null,"RPG\u6838\u5FC3"),e.createElement("ul",null,e.createElement("li",null,"dist",e.createElement("small",null,"\u7F16\u8BD1\u540E\u7684\u6587\u4EF6"),e.createElement("ul",null,e.createElement("li",null,"game",e.createElement("ul",null,e.createElement("li",null,"..."))),e.createElement("li",null,"system",e.createElement("ul",null,e.createElement("li",null,"..."))))),e.createElement("li",null,"game",e.createElement("small",null,"\u81EA\u5DF1\u7F16\u5199\u7684\u4EE3\u7801"),e.createElement("ul",null,e.createElement("li",null,"custom",e.createElement("ul",null,e.createElement("li",null,"..."))),e.createElement("li",null,"project",e.createElement("ul",null,e.createElement("li",null,"..."))),e.createElement("li",null,"GameGate.ts",e.createElement("small",null,"\u6E38\u620F\u5927\u95E8\u51FD\u6570")),e.createElement("li",null,"GCMain.ts",e.createElement("small",null,"\u6E38\u620F\u5165\u53E3\u51FD\u6570")))),e.createElement("li",null,"system",e.createElement("small",null,"GameCreator\u7F16\u8F91\u5668\u81EA\u52A8\u751F\u6210\u7684\u4EE3\u7801"),e.createElement("ul",null,e.createElement("li",null,"CustomCommandParams.ts",e.createElement("small",null,"\u81EA\u5B9A\u4E49\u547D\u4EE4")),e.createElement("li",null,"CustomConditionParams.ts",e.createElement("small",null,"\u81EA\u5B9A\u4E49\u6761\u4EF6")),e.createElement("li",null,"CustomGameNumberParams.ts",e.createElement("small",null,"\u81EA\u5B9A\u4E49\u6E38\u620F\u6570\u503C")),e.createElement("li",null,"CustomGameStringParams.ts",e.createElement("small",null,"\u81EA\u5B9A\u4E49\u6E38\u620F\u5B57\u7B26\u4E32")),e.createElement("li",null,"CustomModuleRuntime.ts",e.createElement("small",null,"\u81EA\u5B9A\u4E49\u6A21\u5757")),e.createElement("li",null,"DataStructureRuntime.ts",e.createElement("small",null,"\u6570\u636E\u7ED3\u6784")),e.createElement("li",null,"GameAttributeRuntime.ts",e.createElement("small",null,"\u4E16\u754C\u5C5E\u6027")),e.createElement("li",null,"MaterialRuntime.ts",e.createElement("small",null,"\u6750\u8D28")),e.createElement("li",null,"SceneObjectModules.ts",e.createElement("small",null,"\u573A\u666F\u5BF9\u8C61\u6A21\u5757")),e.createElement("li",null,"UIRuntime.ts",e.createElement("small",null,"\u754C\u9762")))),e.createElement("li",null,"icon.png",e.createElement("small",null,"icon\u56FE\u6807")),e.createElement("li",null,"tsconfig.json",e.createElement("small",null,"ts\u914D\u7F6E\uFF08\u4EE3\u7801\u52A0\u8F7D\u987A\u5E8F\uFF09")))))),e.createElement("h2",{id:"2-\u6E38\u620F\u5165\u53E3"},e.createElement(u.AnchorLink,{to:"#2-\u6E38\u620F\u5165\u53E3","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"2. \u6E38\u620F\u5165\u53E3"),e.createElement(l.Z,{code:`// GCMain.ts line 12
var Game: ProjectGame = new ProjectGame();`,lang:"ts"}),e.createElement("ul",null,e.createElement("li",null,"\u521B\u5EFA\u4E00\u4E2A ProjectGame \u5B9E\u4F8B\uFF0C\u5E76\u8D4B\u503C\u7ED9\u5168\u5C40\u53D8\u91CF Game")),e.createElement(l.Z,{code:`// ProjectGame.ts line 25
class ProjectGame extends GameBase {
  // ...
  constructor() {
    super();
    EventUtils.addEventListener(
      GameGate,
      GameGate.EVENT_IN_SCENE_STATE_CHANGE,
      Callback.New(this.onInSceneStateChange, this),
    );
  }
  // ...
}`,lang:"ts"}),e.createElement("ul",null,e.createElement("li",null,"ProjectGame \u7EE7\u627F\u4E8E GameBase \u7C7B"),e.createElement("li",null,"\u67E5\u770B GameBase \u5B9E\u73B0\uFF0C\u6587\u4EF6\u4E3A GameBase.d.ts\uFF0C\u53EF\u77E5\u662F\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\uFF0C\u60F3\u8981\u770B\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\uFF0C\u524D\u5F80 gamecreator.js ",e.createElement(u.AnchorLink,{to:"/gc#1-gamebase-%E7%B1%BB"},"GameCreator - 1.Gamebase \u7C7B")," \u4E2D\u67E5\u627E\u5BF9\u5E94\u7C7B\u65B9\u6CD5"),e.createElement("li",null,"new ProjectGame() \u64CD\u4F5C\u4F1A\u6267\u884C constructor()"),e.createElement("li",null,"super() \u5B9E\u73B0\u7236\u7C7B\u6784\u9020\u51FD\u6570"),e.createElement("li",null,"EventUtils.addEventListener()\u4FA6\u542C GameGate \u7C7B\uFF0C\u5F53 GameGate.EVENT_IN_SCENE_STATE_CHANGE \u89E6\u53D1\u65F6\uFF0C\u6267\u884C onInSceneStateChange \u56DE\u8C03\u65B9\u6CD5"),e.createElement("li",null,"\u6B64\u65F6 ProjectGame \u7C7B\u6267\u884C\u5B8C\u6BD5\uFF0C\u751F\u6210\u4E00\u4E2A",e.createElement("code",null,"\u4FA6\u542C\u5668")),e.createElement("li",null,"\u56DE\u5230 GCMain.ts \u6587\u4EF6")),e.createElement(l.Z,{code:`// GCMain.ts line 14
var GlobalTempData: any = {};`,lang:"ts"}),e.createElement("ul",null,e.createElement("li",null,"\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u4E34\u65F6\u6570\u636E\u53D8\u91CF")),e.createElement(l.Z,{code:`// GCMain.ts line 17
if (!Config.BEHAVIOR_EDIT_MODE) {
  GameGate.start();
}`,lang:"ts"}),e.createElement("ul",null,e.createElement("li",null,"\u975E\u5904\u4E8E\u884C\u4E3A\u7F16\u8F91\u5668\u7684\u73AF\u5883\u4E0B\u5F00\u59CB\u6E38\u620F"),e.createElement("li",null,"\u6267\u884C GameGate.start()\u9759\u6001\u7C7B\u65B9\u6CD5")),e.createElement(l.Z,{code:`class GameGate {
  // ...
  static start(): void {
    // \u76D1\u542C\u8FDB\u5165\u573A\u666F\u7684\u4E8B\u4EF6\uFF1A\u65B0\u6E38\u620F\u3001\u8BFB\u6863\u3001\u5207\u6362\u573A\u666F
    EventUtils.addEventListener(
      ClientScene,
      ClientScene.EVENT_IN_NEW_SCENE,
      Callback.New(GameGate.onInNewScene, GameGate),
    );
    // \u521D\u59CB\u5316GameCreator\u5185\u6838\uFF1A\u5B8C\u6210\u540E\u663E\u793A\u6807\u9898\u754C\u9762
    EventUtils.addEventListener(
      ClientWorld,
      ClientWorld.EVENT_INITED,
      Callback.New(GameGate.onWorldInit, this),
      true,
    );
  }
  // ...
}`,lang:"ts"}),e.createElement("ul",null,e.createElement("li",null,"EventUtils.addEventListener()\u4FA6\u542C ClientScene \u7C7B\uFF0C\u5F53 ClientScene.EVENT_IN_NEW_SCENE \u89E6\u53D1\u65F6\uFF0C\u6267\u884C GameGate.onInNewScene \u56DE\u8C03\u65B9\u6CD5"),e.createElement("li",null,"EventUtils.addEventListener()\u4FA6\u542C ClientWorld \u7C7B\uFF0C\u5F53 ClientWorld.EVENT_INITED \u89E6\u53D1\u65F6\uFF0C\u6267\u884C GameGate.onWorldInit \u56DE\u8C03\u65B9\u6CD5\uFF0C\u7B2C\u56DB\u4E2A\u53C2\u6570\u4E3A true\uFF0C\u5219\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u5C31\u9500\u6BC1\u8BE5\u4FA6\u542C\u5668"),e.createElement("li",null,"\u6B64\u65F6 GameGate \u7C7B\u6267\u884C\u5B8C\u6BD5\uFF0C\u751F\u6210\u4E24\u4E2A",e.createElement("code",null,"\u4FA6\u542C\u5668"))),e.createElement("p",null,"\u5C31\u4E0A\u6240\u8FF0\uFF0C\u4E00\u5171\u751F\u6210\u4E24\u4E2A\u6C38\u4E45\u4FA6\u542C\u5668\uFF0C\u4E00\u4E2A\u4E34\u65F6\u4FA6\u542C\u5668\uFF0C\u8BE5\u4EE3\u7801\u505C\u6B62\u8FD0\u884C\uFF0C\u662F\u4E0D\u662F\u5F88\u5947\u602A \u{1F914}"),e.createElement("p",null,"\u4F55\u65F6\u89E6\u53D1\u8BE5\u4FA6\u542C\u5668\u5462\uFF1F"),e.createElement("p",null,"GameCreatorLib/gamecreator.js \u4E0B\u89E6\u53D1\uFF0C\u8BE5\u6587\u4EF6\u662F\u6E38\u620F\u8FD0\u884C\u8D77\u6765\u7684\u6838\u5FC3\u6587\u4EF6\uFF0C\u540C\u65F6\u6211\u4EEC\u6240\u7528\u5230\u7684 API \u5747\u662F\u6765\u81EA\u8FD9\u5B9E\u73B0"),e.createElement("p",null,"\u53EF\u77E5\u6700\u5148\u89E6\u53D1\u7684\u662F\u4E34\u65F6\u4FA6\u542C\u5668\uFF0C\u5373 ClientWorld.EVENT_INITED\uFF0C\u524D\u5F80",e.createElement(u.AnchorLink,{to:"/gc#2-clientmain-%E7%B1%BB"},"GameCreator - 2.ClientMain \u7C7B"),"\u4E86\u89E3\u89E6\u53D1\u673A\u5236"),e.createElement(l.Z,{code:`// ProjectGame.ts line 39
class ProjectGame extends GameBase {
  // ...
  private onInSceneStateChange(inNewSceneState: number) {
    // \u72B6\u6001\uFF1A\u79BB\u5F00\u573A\u666F\u65F6\uFF08\u6807\u9898\u65F6\u89C6\u4E3A\u79BB\u5F00\u7A7A\u573A\u666F\uFF09
    if (GameGate.gateState == GameGate.STATE_0_START_EXECUTE_LEAVE_SCENE_EVENT) {
      // \u65B0\u6E38\u620F\u7684\u8BDD\uFF1A\u8BB0\u5F55\u5F53\u524D\u65F6\u95F4\u4E3A\u542F\u52A8\u65F6\u95F4
      if (inNewSceneState == 1) {
        ProjectGame.gameStartTime = new Date();
      }
      // \u8BFB\u53D6\u5B58\u6863\u7684\u60C5\u51B5\uFF1A\u4EE5\u5F53\u524D\u7684\u65F6\u95F4\u51CF\u53BB\u5DF2\u6E38\u620F\u65F6\u95F4\u6765\u8BB0\u5F55
      else if (inNewSceneState == 2) {
        ProjectGame.gameStartTime = new Date(
          Date.now() - GUI_SaveFileManager.currentSveFileIndexInfo.indexInfo.gameTime,
        );
      }
    }
  }
  // ...
}`,lang:"ts"})))});a.default=t=>{var m=e.useContext(u.context),F=m.demos;return e.useEffect(()=>{var E;t!=null&&(E=t.location)!==null&&E!==void 0&&E.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(c,{demos:F})}}}]);
