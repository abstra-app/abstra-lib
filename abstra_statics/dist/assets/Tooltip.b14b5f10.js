import{d as y,r as i,K as x,b,c as g,B as m,x as p,N as v,A as B,z as w,q as D}from"./registerWidgets.75ad232d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e425339e-792a-4bd6-bead-42a1832dd31c",t._sentryDebugIdIdentifier="sentry-dbid-e425339e-792a-4bd6-bead-42a1832dd31c")}catch{}})();const k={class:"text"},I=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),c=()=>{s.value=Date.now()},n=i(null),f=()=>{var r,d,l;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((d=e.top)!=null?d:0)}px`,left:`${a+((l=e.left)!=null?l:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[m(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(w(u))},[p("span",k,v(t.text),1)],4)],544))}});const $=D(I,[["__scopeId","data-v-74636348"]]);export{$ as T};
//# sourceMappingURL=Tooltip.b14b5f10.js.map
