import{d as l,f1 as _,f7 as p,b as u,eV as y,f as i,w as s,u as r,c as m,eX as g,am as n,f4 as c,cW as b,cS as h,bF as w,E as k}from"./outputWidgets.cc9f46e3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new x().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e30be676-5538-4269-b7e9-ff27d3108afa",e._sentryDebugIdIdentifier="sentry-dbid-e30be676-5538-4269-b7e9-ff27d3108afa")}catch{}})();const I={class:"inner-content"},v=l({__name:"Error",setup(e){const t=_(),d=p(),o=()=>{const{status:a}=t.params;switch(a){case"404":return{status:a,title:"Page not found",message:"We couldn't find the page you were looking for."};case"403":return{status:a,title:"Access denied",message:"You tried to access a page you did not have prior authorization for. Please contact your administrator.",action:"Go back to home"};default:return{status:"500",title:"Internal server error",message:"An unknown error ocurred. Please try again or contact support."}}},f=()=>{d.push({name:"playerHome"})};return(a,D)=>(u(),y("div",I,[i(r(b),null,{default:s(()=>[n(c(o().title),1)]),_:1}),i(r(h),{class:"message"},{default:s(()=>[n(c(o().message),1)]),_:1}),o().action?(u(),m(r(w),{key:0,type:"primary",onClick:f},{default:s(()=>[n(c(o().action),1)]),_:1})):g("",!0)]))}});const x=k(v,[["__scopeId","data-v-c0d26e3f"]]);export{x as default};
//# sourceMappingURL=Error.188a5bb8.js.map
