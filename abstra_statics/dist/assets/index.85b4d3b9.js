import{u as w,A as r,a as A}from"./Avatar.d0198d03.js";import{d as I,ai as $,f as D,aL as k,bU as G,aD as O,aF as _,b as l,cO as j,al as c}from"./index.57388330.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4ce57053-840b-407a-bf0f-7c5c9a7149ad",e._sentryDebugIdIdentifier="sentry-dbid-4ce57053-840b-407a-bf0f-7c5c9a7149ad")}catch{}})();const E=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),N=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:E(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),i=D(()=>`${y.value}-group`),[v,b]=w(y);return k(()=>{const u={size:e.size,shape:e.shape};A(u)}),()=>{const{maxPopoverPlacement:u="top",maxCount:a,maxStyle:x,maxPopoverTrigger:S="hover",shape:C}=e,g={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=G(m,e),s=O(P).map((o,p)=>_(o,{key:`avatar-key-${p}`})),d=s.length;if(a&&a<d){const o=s.slice(0,a),p=s.slice(a,d);return o.push(l(j,{key:"avatar-popover-key",content:p,trigger:S,placement:u,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:C},{default:()=>[`+${d-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),f=N;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.85b4d3b9.js.map
