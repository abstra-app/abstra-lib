import{d as l,f1 as _,f7 as p,b as u,eV as y,f as i,w as s,u as r,c as m,eX as g,am as n,f4 as c,cW as b,cS as h,bF as w,E as k}from"./outputWidgets.abde7be7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new x().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f72baa3a-1fc8-4b88-adf3-214666e7bc55",e._sentryDebugIdIdentifier="sentry-dbid-f72baa3a-1fc8-4b88-adf3-214666e7bc55")}catch{}})();const I={class:"inner-content"},v=l({__name:"Error",setup(e){const t=_(),d=p(),a=()=>{const{status:o}=t.params;switch(o){case"404":return{status:o,title:"Page not found",message:"We couldn't find the page you were looking for."};case"403":return{status:o,title:"Access denied",message:"You tried to access a page you did not have prior authorization for. Please contact your administrator.",action:"Go back to home"};default:return{status:"500",title:"Internal server error",message:"An unknown error ocurred. Please try again or contact support."}}},f=()=>{d.push({name:"playerHome"})};return(o,D)=>(u(),y("div",I,[i(r(b),null,{default:s(()=>[n(c(a().title),1)]),_:1}),i(r(h),{class:"message"},{default:s(()=>[n(c(a().message),1)]),_:1}),a().action?(u(),m(r(w),{key:0,type:"primary",onClick:f},{default:s(()=>[n(c(a().action),1)]),_:1})):g("",!0)]))}});const x=k(v,[["__scopeId","data-v-c0d26e3f"]]);export{x as default};
//# sourceMappingURL=Error.be8c7aff.js.map
