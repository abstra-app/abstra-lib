import{d as y,r as i,K as x,b,c as g,B as m,x as p,N as v,A as B,z as w,q as D}from"./registerWidgets.1f64062d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0137dc1c-d6b7-456a-9336-e8738fb8681d",t._sentryDebugIdIdentifier="sentry-dbid-0137dc1c-d6b7-456a-9336-e8738fb8681d")}catch{}})();const k={class:"text"},I=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),c=()=>{s.value=Date.now()},n=i(null),f=()=>{var a,l,d;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((d=e.left)!=null?d:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[m(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(w(u))},[p("span",k,v(t.text),1)],4)],544))}});const $=D(I,[["__scopeId","data-v-74636348"]]);export{$ as T};
//# sourceMappingURL=Tooltip.18c87d14.js.map
