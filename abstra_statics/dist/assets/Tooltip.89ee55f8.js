import{d as y,r as i,H as x,b,et as g,aC as v,e as f,eB as m,eu as B,v as w}from"./outputWidgets.7bdcec0a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cd53d1da-effe-41e9-996a-e171c2f0b2fe",t._sentryDebugIdIdentifier="sentry-dbid-cd53d1da-effe-41e9-996a-e171c2f0b2fe")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),p=()=>{s.value=Date.now()},n=i(null),c=()=>{var r,l,d;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((d=e.left)!=null?d:0)}px`}},u=x(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:p},[v(o.$slots,"default",{},void 0,!0),f("div",{class:"tooltip",style:B(u.value)},[f("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.89ee55f8.js.map
