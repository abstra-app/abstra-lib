import{u as w,A as r,a as A}from"./Avatar.7cab2428.js";import{d as I,ai as $,f as D,aL as k,bU as G,aD as _,aF as j,b as l,cQ as E,al as c}from"./index.8ae7ec1d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="02575dde-e67c-4ce3-9c53-a1a91c45d685",e._sentryDebugIdIdentifier="sentry-dbid-02575dde-e67c-4ce3-9c53-a1a91c45d685")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),i=D(()=>`${y.value}-group`),[v,b]=w(y);return k(()=>{const d={size:e.size,shape:e.shape};A(d)}),()=>{const{maxPopoverPlacement:d="top",maxCount:a,maxStyle:x,maxPopoverTrigger:S="hover",shape:C}=e,g={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=G(m,e),s=_(P).map((o,p)=>j(o,{key:`avatar-key-${p}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),p=s.slice(a,u);return o.push(l(E,{key:"avatar-popover-key",content:p,trigger:S,placement:d,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:C},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),f=O;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.2baf5597.js.map
