import{d as y,r as d,L as x,b,c as g,D as v,y as p,O as m,B,t as D}from"./registerWidgets.f8dfb33f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8920521f-2795-4b16-85d7-63759e97cd7b",t._sentryDebugIdIdentifier="sentry-dbid-8920521f-2795-4b16-85d7-63759e97cd7b")}catch{}})();const w={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=d(Date.now()),c=()=>{s.value=Date.now()},n=d(null),f=()=>{var l,a,i;const o=(l=n.value)==null?void 0:l.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((a=e.top)!=null?a:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(u.value)},[p("span",w,m(t.text),1)],4)],544))}});const h=D(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.ef038d5e.js.map
