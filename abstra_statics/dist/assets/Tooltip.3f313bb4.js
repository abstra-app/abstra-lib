import{d as y,r as f,J as x,b,et as g,aD as v,e as p,eC as m,ev as D,x as w}from"./outputWidgets.a2ba4435.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9a358fee-c94c-4536-8609-3fbf98f07eb9",t._sentryDebugIdIdentifier="sentry-dbid-9a358fee-c94c-4536-8609-3fbf98f07eb9")}catch{}})();const B={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=f(Date.now()),c=()=>{s.value=Date.now()},n=f(null),d=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?d():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:D(u.value)},[p("span",B,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.3f313bb4.js.map
