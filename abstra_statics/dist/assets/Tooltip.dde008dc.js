import{d as y,r as p,G as x,b,et as g,as as v,e as d,eB as m,eu as B,t as w}from"./outputWidgets.0fb707c7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="97993108-1384-411b-89aa-def92726a891",t._sentryDebugIdIdentifier="sentry-dbid-97993108-1384-411b-89aa-def92726a891")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),f=()=>{s.value=Date.now()},n=p(null),u=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},c=x(()=>{var o;return e.fixed?u():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:f},[v(o.$slots,"default",{},void 0,!0),d("div",{class:"tooltip",style:B(c.value)},[d("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.dde008dc.js.map
