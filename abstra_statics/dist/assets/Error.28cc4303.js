import{d as f,eE as _,eK as p,b as d,ew as m,f as i,w as r,u as s,c as y,ey as g,as as n,eH as c,bG as b,x as h}from"./outputWidgets.fc0873ad.js";import{A as w}from"./Title.17d91f19.js";import{a as k}from"./Base.b08344d0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new x().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bc1c7ee6-314e-4ce3-92fe-a09a7cb5541a",e._sentryDebugIdIdentifier="sentry-dbid-bc1c7ee6-314e-4ce3-92fe-a09a7cb5541a")}catch{}})();const I={class:"inner-content"},v=f({__name:"Error",setup(e){const t=_(),u=p(),o=()=>{const{status:a}=t.params;switch(a){case"404":return{status:a,title:"Page not found",message:"We couldn't find the page you were looking for."};case"403":return{status:a,title:"Access denied",message:"You tried to access a page you did not have prior authorization for. Please contact your administrator.",action:"Go back to home"};default:return{status:"500",title:"Internal server error",message:"An unknown error ocurred. Please try again or contact support."}}},l=()=>{u.push({name:"playerHome"})};return(a,D)=>(d(),m("div",I,[i(s(w),null,{default:r(()=>[n(c(o().title),1)]),_:1}),i(s(k),{class:"message"},{default:r(()=>[n(c(o().message),1)]),_:1}),o().action?(d(),y(s(b),{key:0,type:"primary",onClick:l},{default:r(()=>[n(c(o().action),1)]),_:1})):g("",!0)]))}});const x=h(v,[["__scopeId","data-v-c0d26e3f"]]);export{x as default};
//# sourceMappingURL=Error.28cc4303.js.map
