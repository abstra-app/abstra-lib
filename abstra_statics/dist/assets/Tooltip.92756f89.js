import{d as y,r as p,G as x,b,ev as v,dp as g,e as d,eD as m,ew as w,v as D}from"./outputWidgets.396f5ce1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b84c2961-4650-441f-b103-ed8588e9e1ae",t._sentryDebugIdIdentifier="sentry-dbid-b84c2961-4650-441f-b103-ed8588e9e1ae")}catch{}})();const B={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),c=()=>{s.value=Date.now()},n=p(null),f=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[g(o.$slots,"default",{},void 0,!0),d("div",{class:"tooltip",style:w(u.value)},[d("span",B,m(t.text),1)],4)],544))}});const h=D(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.92756f89.js.map
