import{u as w,A as r,a as A}from"./Avatar.f48ff400.js";import{d as I,ah as $,f as k,aK as D,bQ as E,aC as G,aE as _,b as l,cK as j,ak as c}from"./vue-router.0ce79355.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c713d7db-a1f5-48c3-9150-f5eb63cdf88b",e._sentryDebugIdIdentifier="sentry-dbid-c713d7db-a1f5-48c3-9150-f5eb63cdf88b")}catch{}})();const N=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),O=I({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:N(),setup(e,n){let{slots:m,attrs:t}=n;const{prefixCls:y,direction:h}=$("avatar",e),i=k(()=>`${y.value}-group`),[v,b]=w(y);return D(()=>{const d={size:e.size,shape:e.shape};A(d)}),()=>{const{maxPopoverPlacement:d="top",maxCount:a,maxStyle:x,maxPopoverTrigger:C="hover",shape:S}=e,g={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${t.class}`]:!!t.class,[b.value]:!0},P=E(m,e),s=G(P).map((o,f)=>_(o,{key:`avatar-key-${f}`})),u=s.length;if(a&&a<u){const o=s.slice(0,a),f=s.slice(a,u);return o.push(l(j,{key:"avatar-popover-key",content:f,trigger:C,placement:d,overlayClassName:`${i.value}-popover`},{default:()=>[l(r,{style:x,shape:S},{default:()=>[`+${u-a}`]})]})),v(l("div",c(c({},t),{},{class:g,style:t.style}),[o]))}return v(l("div",c(c({},t),{},{class:g,style:t.style}),[s]))}}}),p=O;r.Group=p;r.install=function(e){return e.component(r.name,r),e.component(p.name,p),e};export{p as G};
//# sourceMappingURL=index.f2d3a87d.js.map
