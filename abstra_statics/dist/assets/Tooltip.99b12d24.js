import{d as y,r as i,H as x,b,et as g,aC as v,e as p,eB as m,eu as B,v as w}from"./outputWidgets.9a4dffd5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="108766ca-bd83-4d20-86c2-816ed68e3fbb",t._sentryDebugIdIdentifier="sentry-dbid-108766ca-bd83-4d20-86c2-816ed68e3fbb")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),c=()=>{s.value=Date.now()},n=i(null),f=()=>{var a,l,d;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((d=e.left)!=null?d:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(u.value)},[p("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.99b12d24.js.map
