import{i as y}from"./url.b5298537.js";import"./outputWidgets.85f6668f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="0ec60ad1-60ec-4d68-9a31-0d85dbb5cdaa",e._sentryDebugIdIdentifier="sentry-dbid-0ec60ad1-60ec-4d68-9a31-0d85dbb5cdaa")}catch{}})();function D(e,a,r){return a?y(a)?a:r==="player"?`/_assets/${e}`:`/_editor/api/assets/${a}`:null}const g="#414a58",w="#FFFFFF",T="#000000",F="DM Sans",d="Untitled Project";function L(e){var a,r,t,s,n,l,o,u,_,i,c,m,f,b,p;return{id:e.id,path:e.path,theme:(a=e.workspace.theme)!=null?a:w,brandName:(r=e.workspace.brand_name)!=null?r:null,title:e.title,isLocal:(t=e.is_local)!=null?t:!1,startMessage:(s=e.start_message)!=null?s:null,endMessage:(n=e.end_message)!=null?n:null,errorMessage:(l=e.error_message)!=null?l:null,timeoutMessage:(o=e.timeout_message)!=null?o:null,startButtonText:(u=e.start_button_text)!=null?u:null,restartButtonText:(_=e.restart_button_text)!=null?_:null,logoUrl:e.workspace.logo_url,mainColor:(i=e.workspace.main_color)!=null?i:g,fontFamily:(c=e.workspace.font_family)!=null?c:F,autoStart:(m=e.auto_start)!=null?m:!1,allowRestart:e.allow_restart,welcomeTitle:(f=e.welcome_title)!=null?f:null,runtimeType:"form",sidebar:(p=(b=e.workspace)==null?void 0:b.sidebar)!=null?p:[]}}function M(e){return{name:e.name||d,fontColor:e.font_color||T,sidebar:e.sidebar||[],brandName:e.brand_name||"",fontFamily:e.font_family||F,logoUrl:e.logo_url?D("logo",e.logo_url,"player"):null,mainColor:e.main_color||g,theme:e.theme||w}}export{g as D,F as a,w as b,D as m,L as r,M as w};
//# sourceMappingURL=runnerData.54f41fa2.js.map
