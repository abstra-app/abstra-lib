import{d as l,eE as _,eK as p,b as u,ew as m,f as i,w as r,u as s,c as y,ey as g,as as n,eH as c,bG as b,x as h}from"./outputWidgets.9c06c589.js";import{A as w}from"./Title.55ecd154.js";import{a as k}from"./Base.ef62edd4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new x().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d562cf73-fa71-4e3c-96cf-20093875cc12",e._sentryDebugIdIdentifier="sentry-dbid-d562cf73-fa71-4e3c-96cf-20093875cc12")}catch{}})();const I={class:"inner-content"},v=l({__name:"Error",setup(e){const t=_(),d=p(),o=()=>{const{status:a}=t.params;switch(a){case"404":return{status:a,title:"Page not found",message:"We couldn't find the page you were looking for."};case"403":return{status:a,title:"Access denied",message:"You tried to access a page you did not have prior authorization for. Please contact your administrator.",action:"Go back to home"};default:return{status:"500",title:"Internal server error",message:"An unknown error ocurred. Please try again or contact support."}}},f=()=>{d.push({name:"playerHome"})};return(a,D)=>(u(),m("div",I,[i(s(w),null,{default:r(()=>[n(c(o().title),1)]),_:1}),i(s(k),{class:"message"},{default:r(()=>[n(c(o().message),1)]),_:1}),o().action?(u(),y(s(b),{key:0,type:"primary",onClick:f},{default:r(()=>[n(c(o().action),1)]),_:1})):g("",!0)]))}});const x=h(v,[["__scopeId","data-v-f770b2d7"]]);export{x as default};
//# sourceMappingURL=Error.36c3d474.js.map
