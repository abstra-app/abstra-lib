import{d as y,r as p,J as b,b as x,et as g,aD as v,e as c,eC as m,ev as D,x as w}from"./outputWidgets.6d878336.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="bb59b8ff-49c7-41be-917d-6c59a6c4f7aa",t._sentryDebugIdIdentifier="sentry-dbid-bb59b8ff-49c7-41be-917d-6c59a6c4f7aa")}catch{}})();const B={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),d=()=>{s.value=Date.now()},n=p(null),f=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},u=b(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(x(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:d},[v(o.$slots,"default",{},void 0,!0),c("div",{class:"tooltip",style:D(u.value)},[c("span",B,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.1a3099ed.js.map
