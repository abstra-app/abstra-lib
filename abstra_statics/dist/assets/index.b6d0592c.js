import{u as w,A as r,a as A}from"./Avatar.a5b8d63e.js";import{d as I,ai as $,f as D,aL as k,bU as G,aD as _,aF as j,b as l,cQ as E,al as c}from"./index.7c49643a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a36bfa0e-44ba-40a2-9d56-bf2bc018c34d",e._sentryDebugIdIdentifier="sentry-dbid-a36bfa0e-44ba-40a2-9d56-bf2bc018c34d")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:b}=$("avatar",e),i=D(()=>`${y.value}-group`),[v,h]=w(y);return k(()=>{const u={size:e.size,shape:e.shape};A(u)}),()=>{const{maxPopoverPlacement:u="top",maxCount:a,maxStyle:x,maxPopoverTrigger:S="hover",shape:C}=e,g={[i.value]:!0,[`${i.value}-rtl`]:b.value==="rtl",[`${t.class}`]:!!t.class,[h.value]:!0},P=G(m,e),s=_(P).map((o,p)=>j(o,{key:`avatar-key-${p}`})),d=s.length;if(a&&a<d){const o=s.slice(0,a),p=s.slice(a,d);return o.push(l(E,{key:"avatar-popover-key",content:p,trigger:S,placement:u,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:C},{default:()=>[`+${d-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),f=O;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.b6d0592c.js.map
