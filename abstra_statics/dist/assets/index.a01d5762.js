import{u as w,A as r,a as A}from"./Avatar.366584e4.js";import{d as I,ai as $,f as D,aL as k,bU as G,aD as _,aF as j,b as l,cQ as E,al as c}from"./index.7e6ba47a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="32cf0898-3dfe-42e0-9e11-5bfeeef51259",e._sentryDebugIdIdentifier="sentry-dbid-32cf0898-3dfe-42e0-9e11-5bfeeef51259")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),i=D(()=>`${y.value}-group`),[v,b]=w(y);return k(()=>{const u={size:e.size,shape:e.shape};A(u)}),()=>{const{maxPopoverPlacement:u="top",maxCount:a,maxStyle:x,maxPopoverTrigger:S="hover",shape:C}=e,g={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=G(m,e),s=_(P).map((o,f)=>j(o,{key:`avatar-key-${f}`})),d=s.length;if(a&&a<d){const o=s.slice(0,a),f=s.slice(a,d);return o.push(l(E,{key:"avatar-popover-key",content:f,trigger:S,placement:u,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:C},{default:()=>[`+${d-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),p=O;r.Group=p;r.install=function(e){return e.component(r.name,r),e.component(p.name,p),e};export{p as G};
//# sourceMappingURL=index.a01d5762.js.map
