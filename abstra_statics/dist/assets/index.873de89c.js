import{u as w,A as r,a as A}from"./Avatar.21a16c5f.js";import{d as I,ah as $,f as k,aK as D,bQ as E,aC as G,aE as _,b as l,cK as j,ak as c}from"./vue-router.a2e43274.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fb690791-3dab-4db9-a65e-9dac34b4d08b",e._sentryDebugIdIdentifier="sentry-dbid-fb690791-3dab-4db9-a65e-9dac34b4d08b")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:g}=$("avatar",e),d=k(()=>`${y.value}-group`),[v,h]=w(y);return D(()=>{const i={size:e.size,shape:e.shape};A(i)}),()=>{const{maxPopoverPlacement:i="top",maxCount:a,maxStyle:x,maxPopoverTrigger:C="hover",shape:S}=e,b={[d.value]:!0,[`${d.value}-rtl`]:g.value==="rtl",[`${t.class}`]:!!t.class,[h.value]:!0},P=E(m,e),s=G(P).map((o,p)=>_(o,{key:`avatar-key-${p}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),p=s.slice(a,u);return o.push(l(j,{key:"avatar-popover-key",content:p,trigger:C,placement:i,overlayClassName:`${d.value}-popover`},{default:()=>[l(r,{style:x,shape:S},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:b,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:b,style:t.style}),[s]))}}}),f=O;r.Group=f;r.install=function(e){return e.component(r.name,r),e.component(f.name,f),e};export{f as G};
//# sourceMappingURL=index.873de89c.js.map
