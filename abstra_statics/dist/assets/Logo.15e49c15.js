import{d as l,eh as c,f as r,o as t,Y as a,S as d,e9 as _,a0 as f}from"./index.b24b0be8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="05ebbf5a-ded1-4014-8240-5403f32b7c01",e._sentryDebugIdIdentifier="sentry-dbid-05ebbf5a-ded1-4014-8240-5403f32b7c01")}catch{}})();const b={class:"logo"},p=["src","alt"],u={key:1},g=l({__name:"Logo",props:{imageUrl:{},brandName:{},hideText:{type:Boolean},size:{}},setup(e){const s=e;c(o=>({bb5bcf84:n.value}));const n=r(()=>s.size==="small"?"24px":s.size==="large"?"80px":"50px"),i=r(()=>`${s.brandName} Logo`);return(o,m)=>(t(),a("div",b,[o.imageUrl?(t(),a("img",{key:0,class:"logo-img",src:o.imageUrl,alt:i.value},null,8,p)):d("",!0),o.hideText?d("",!0):(t(),a("span",u,_(o.brandName),1))]))}});const h=f(g,[["__scopeId","data-v-8d11f0bb"]]);export{h as L};
//# sourceMappingURL=Logo.15e49c15.js.map