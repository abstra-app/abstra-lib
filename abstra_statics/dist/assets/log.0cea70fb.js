var l=Object.defineProperty;var x=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{v as d}from"./registerWidgets.9f96e537.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="1b64776d-c16d-4bee-a70b-359564da96dc",s._sentryDebugIdIdentifier="sentry-dbid-1b64776d-c16d-4bee-a70b-359564da96dc")}catch{}})();const i=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const e=Math.random()*16|0;return(s=="x"?e:e&3|8).toString(16)});class a{constructor(){n(this,"logState",d({log:[]}));n(this,"_listeners",{})}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const r=t?this.logs.find(o=>o.id===t):null;return r?Object.assign(r,e):this.logs.push({...e,id:t||i()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=i();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}const g=new a;export{g as l,i as u};
//# sourceMappingURL=log.0cea70fb.js.map
