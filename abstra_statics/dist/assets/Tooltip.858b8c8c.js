import{d as y,r as d,G as x,b,eu as g,dh as v,e as p,eD as m,ev as D,t as w}from"./outputWidgets.5836624b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a5be1c35-5660-4b2c-83e6-dba6aec47387",t._sentryDebugIdIdentifier="sentry-dbid-a5be1c35-5660-4b2c-83e6-dba6aec47387")}catch{}})();const B={class:"text"},h=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=d(Date.now()),c=()=>{s.value=Date.now()},n=d(null),u=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},f=x(()=>{var o;return e.fixed?u():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:D(f.value)},[p("span",B,m(t.text),1)],4)],544))}});const I=w(h,[["__scopeId","data-v-74636348"]]);export{I as T};
//# sourceMappingURL=Tooltip.858b8c8c.js.map
