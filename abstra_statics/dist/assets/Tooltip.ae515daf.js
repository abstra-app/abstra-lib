import{d as y,r as c,F as x,b,c as g,c2 as v,er as p,eA as m,et as w,t as B}from"./registerWidgets.a7bd7272.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9328aca6-b9f8-4846-83d4-83b86ce3e63c",t._sentryDebugIdIdentifier="sentry-dbid-9328aca6-b9f8-4846-83d4-83b86ce3e63c")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=c(Date.now()),d=()=>{s.value=Date.now()},n=c(null),f=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:d},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:w(u.value)},[p("span",D,m(t.text),1)],4)],544))}});const h=B(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.ae515daf.js.map
