var i=Object.defineProperty;var y=(e,s,t)=>s in e?i(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var c=(e,s,t)=>(y(e,typeof s!="symbol"?s+"":s,t),t);import"./outputWidgets.85da7913.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="9cf76c7f-7998-4a1e-b45c-9accde8f4ed7",e._sentryDebugIdIdentifier="sentry-dbid-9cf76c7f-7998-4a1e-b45c-9accde8f4ed7")}catch{}})();class d{static get isMac(){return navigator.userAgent.includes("Mac OS X")}static get buildPlatform(){return{}.CURRENT_PLATFORM||"web"}}const p=e=>d.isMac&&e.ctrlKey,f=e=>d.isMac?e.metaKey:e.ctrlKey,l=e=>e.altKey,K=e=>e.shiftKey,r={alt:l,"arrow-up":e=>e.code==="ArrowUp","arrow-down":e=>e.code==="ArrowDown","arrow-left":e=>e.code==="ArrowLeft","arrow-right":e=>e.code==="ArrowRight",ctrl:f,delete:e=>d.isMac?e.code==="Backspace":e.code==="Delete",enter:e=>e.code==="Enter",escape:e=>e.code==="Escape",shift:K,space:e=>e.code==="Space",a:e=>e.code==="KeyA",b:e=>e.code==="KeyB",c:e=>e.code==="KeyC",d:e=>e.code==="KeyD",f:e=>e.code==="KeyF",g:e=>e.code==="KeyG",h:e=>e.code==="KeyH",k:e=>e.code==="KeyK",p:e=>e.code==="KeyP",v:e=>e.code==="KeyV",x:e=>e.code==="KeyX",z:e=>e.code==="KeyZ",0:e=>e.code==="Digit0","[":e=>e.code==="BracketLeft","]":e=>e.code==="BracketRight"};class w{constructor(s){c(this,"pressedKeys");c(this,"evt");this.evt=s,this.pressedKeys={};const t=a=>n=>{Object.keys(r).forEach(o=>{r[o](n)&&this.setPressed(o,a)})};this.evt||(window.addEventListener("keydown",t(!0)),window.addEventListener("keyup",t(!1)))}setPressed(s,t){this.pressedKeys[s]=t}isPressed(s){var t;return this.evt?r[s](this.evt):(t=this.pressedKeys[s])!=null?t:!1}}const g=new w;export{l as a,f as c,g as k,p as m,K as s};
//# sourceMappingURL=keyboard.db320d5e.js.map
