import{u as w,A as r,a as A}from"./Avatar.dfcf8478.js";import{d as I,ai as $,f as D,aL as k,bU as G,aD as O,aF as _,b as l,cO as j,al as c}from"./index.c093892f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3f6a9d71-6ce5-4d1c-81f9-3cb2319dbedf",e._sentryDebugIdIdentifier="sentry-dbid-3f6a9d71-6ce5-4d1c-81f9-3cb2319dbedf")}catch{}})();const E=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),N=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:E(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),i=D(()=>`${y.value}-group`),[v,b]=w(y);return k(()=>{const d={size:e.size,shape:e.shape};A(d)}),()=>{const{maxPopoverPlacement:d="top",maxCount:a,maxStyle:x,maxPopoverTrigger:S="hover",shape:C}=e,g={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=G(m,e),s=O(P).map((o,f)=>_(o,{key:`avatar-key-${f}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),f=s.slice(a,u);return o.push(l(j,{key:"avatar-popover-key",content:f,trigger:S,placement:d,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:C},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),p=N;r.Group=p;r.install=function(e){return e.component(r.name,r),e.component(p.name,p),e};export{p as G};
//# sourceMappingURL=index.9220ad48.js.map
