var l=Object.defineProperty;var x=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{v as a}from"./registerWidgets.0897334f.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="eb4b99df-22b6-492b-8001-0ae74a6d6c29",s._sentryDebugIdIdentifier="sentry-dbid-eb4b99df-22b6-492b-8001-0ae74a6d6c29")}catch{}})();const i=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const e=Math.random()*16|0;return(s=="x"?e:e&3|8).toString(16)});class d{constructor(){n(this,"logState",a({log:[]}));n(this,"_listeners",{})}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const r=t?this.logs.find(o=>o.id===t):null;return r?Object.assign(r,e):this.logs.push({...e,id:t||i()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=i();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}const f=new d;export{f as l,i as u};
//# sourceMappingURL=log.52c594a3.js.map
