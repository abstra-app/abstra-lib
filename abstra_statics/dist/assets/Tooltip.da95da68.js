import{d as y,r as p,K as x,b as g,c as b,B as v,x as f,N as m,A as B,q as w}from"./registerWidgets.32e538e0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="810ff258-8a3f-47c7-a6ae-4e5843387511",t._sentryDebugIdIdentifier="sentry-dbid-810ff258-8a3f-47c7-a6ae-4e5843387511")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),d=()=>{s.value=Date.now()},n=p(null),c=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(g(),b("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:d},[v(o.$slots,"default",{},void 0,!0),f("div",{class:"tooltip",style:B(u.value)},[f("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.da95da68.js.map
