import{d as y,r as d,H as x,b,er as g,aL as v,e as f,eA as m,et as w,v as B}from"./registerWidgets.53633c61.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1ebfffd2-50be-448b-962e-147ca7f5d369",t._sentryDebugIdIdentifier="sentry-dbid-1ebfffd2-50be-448b-962e-147ca7f5d369")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=d(Date.now()),p=()=>{s.value=Date.now()},n=d(null),c=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:p},[v(o.$slots,"default",{},void 0,!0),f("div",{class:"tooltip",style:w(u.value)},[f("span",D,m(t.text),1)],4)],544))}});const h=B(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.1272f478.js.map
