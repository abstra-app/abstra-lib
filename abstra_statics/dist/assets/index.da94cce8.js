import{u as w,A as r,a as A}from"./Avatar.e0a67feb.js";import{d as I,ah as $,f as k,aK as D,bQ as E,aC as G,aE as _,b as l,cK as j,ak as c}from"./vue-router.c9c11cfc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c42bcba8-204b-4b05-abb1-7aaf02335a4a",e._sentryDebugIdIdentifier="sentry-dbid-c42bcba8-204b-4b05-abb1-7aaf02335a4a")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:b,direction:g}=$("avatar",e),i=k(()=>`${b.value}-group`),[y,h]=w(b);return D(()=>{const u={size:e.size,shape:e.shape};A(u)}),()=>{const{maxPopoverPlacement:u="top",maxCount:a,maxStyle:x,maxPopoverTrigger:C="hover",shape:S}=e,v={[i.value]:!0,[`${i.value}-rtl`]:g.value==="rtl",[`${t.class}`]:!!t.class,[h.value]:!0},P=E(m,e),s=G(P).map((o,p)=>_(o,{key:`avatar-key-${p}`})),d=s.length;if(a&&a<d){const o=s.slice(0,a),p=s.slice(a,d);return o.push(l(j,{key:"avatar-popover-key",content:p,trigger:C,placement:u,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:S},{default:()=>[`+${d-a}`]})]})),y(l("div",c(c({},t),{},{class:v,style:t.style}),[o]))}return y(l("div",c(c({},t),{},{class:v,style:t.style}),[s]))}}}),f=O;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.da94cce8.js.map
