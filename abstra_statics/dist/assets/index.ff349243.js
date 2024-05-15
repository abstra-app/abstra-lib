import{E as U,F as Y,W as x,a0 as Z,Z as ee,Y as te,d as H,H as P,Q as M,J as T,aB as ae,d2 as re,K as F,o as ne,a5 as R,bI as _,f as S,V as oe,U as C,a7 as se,d3 as ie,ax as le,ah as ce,ar as ue,cA as de}from"./outputWidgets.2208ae87.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="08f59cb9-930b-4a1c-a286-7135dfa83ef6",e._sentryDebugIdIdentifier="sentry-dbid-08f59cb9-930b-4a1c-a286-7135dfa83ef6")}catch{}})();const ge=e=>{const{antCls:r,componentCls:n,iconCls:a,avatarBg:o,avatarColor:h,containerSize:i,containerSizeLG:c,containerSizeSM:v,textFontSize:g,textFontSizeLG:u,textFontSizeSM:A,borderRadius:$,borderRadiusLG:s,borderRadiusSM:z,lineWidth:p,lineType:m}=e,d=(f,t,l)=>({width:f,height:f,lineHeight:`${f-p*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:l},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:t,[`> ${a}`]:{margin:0}}});return{[n]:x(x(x(x({},Z(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:h,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${p}px ${m} transparent`,["&-image"]:{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),d(i,g,$)),{["&-lg"]:x({},d(c,u,s)),["&-sm"]:x({},d(v,A,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},pe=e=>{const{componentCls:r,groupBorderColor:n,groupOverlapping:a,groupSpace:o}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:a}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:o}}}},j=U("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:n}=e,a=Y(e,{avatarBg:n,avatarColor:r});return[ge(a),pe(a)]},e=>{const{controlHeight:r,controlHeightLG:n,controlHeightSM:a,fontSize:o,fontSizeLG:h,fontSizeXL:i,fontSizeHeading3:c,marginXS:v,marginXXS:g,colorBorderBg:u}=e;return{containerSize:r,containerSizeLG:n,containerSizeSM:a,textFontSize:Math.round((h+i)/2),textFontSizeLG:c,textFontSizeSM:o,groupSpace:g,groupOverlapping:-v,groupBorderColor:u}}),L=Symbol("AvatarContextKey"),fe=()=>ee(L,{}),ve=e=>te(L,e),Se=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:se.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),he=H({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:Se(),slots:Object,setup(e,r){let{slots:n,attrs:a}=r;const o=P(!0),h=P(!1),i=P(1),c=P(null),v=P(null),{prefixCls:g}=M("avatar",e),[u,A]=j(g),$=fe(),s=T(()=>e.size==="default"?$.size:e.size),z=ae(),p=re(()=>{if(typeof e.size!="object")return;const t=ie.find(b=>z.value[b]);return e.size[t]}),m=t=>p.value?{width:`${p.value}px`,height:`${p.value}px`,lineHeight:`${p.value}px`,fontSize:`${t?p.value/2:18}px`}:{},d=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,l=v.value.offsetWidth;if(t!==0&&l!==0){const{gap:b=4}=e;b*2<l&&(i.value=l-b*2<t?(l-b*2)/t:1)}},f=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(o.value=!1)};return F(()=>e.src,()=>{R(()=>{o.value=!0,i.value=1})}),F(()=>e.gap,()=>{R(()=>{d()})}),ne(()=>{R(()=>{d(),h.value=!0})}),()=>{var t,l;const{shape:b,src:G,alt:W,srcset:N,draggable:D,crossOrigin:X}=e,K=(t=$.shape)!==null&&t!==void 0?t:b,w=_(n,e,"icon"),y=g.value,V={[`${a.class}`]:!!a.class,[y]:!0,[`${y}-lg`]:s.value==="large",[`${y}-sm`]:s.value==="small",[`${y}-${K}`]:!0,[`${y}-image`]:G&&o.value,[`${y}-icon`]:w,[A.value]:!0},q=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:w?`${s.value/2}px`:"18px"}:{},E=(l=n.default)===null||l===void 0?void 0:l.call(n);let k;if(G&&o.value)k=S("img",{draggable:D,src:G,srcset:N,onError:f,alt:W,crossorigin:X},null);else if(w)k=w;else if(h.value||i.value!==1){const O=`scale(${i.value}) translateX(-50%)`,J={msTransform:O,WebkitTransform:O,transform:O},Q=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};k=S(oe,{onResize:d},{default:()=>[S("span",{class:`${y}-string`,ref:c,style:x(x({},Q),J)},[E])]})}else k=S("span",{class:`${y}-string`,ref:c,style:{opacity:0}},[E]);return u(S("span",C(C({},a),{},{ref:v,class:V,style:[q,m(!!w),a.style]}),[k]))}}}),I=he,me=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),ye=H({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:me(),setup(e,r){let{slots:n,attrs:a}=r;const{prefixCls:o,direction:h}=M("avatar",e),i=T(()=>`${o.value}-group`),[c,v]=j(o);return le(()=>{const g={size:e.size,shape:e.shape};ve(g)}),()=>{const{maxPopoverPlacement:g="top",maxCount:u,maxStyle:A,maxPopoverTrigger:$="hover",shape:s}=e,z={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${a.class}`]:!!a.class,[v.value]:!0},p=_(n,e),m=ce(p).map((f,t)=>ue(f,{key:`avatar-key-${t}`})),d=m.length;if(u&&u<d){const f=m.slice(0,u),t=m.slice(u,d);return f.push(S(de,{key:"avatar-popover-key",content:t,trigger:$,placement:g,overlayClassName:`${i.value}-popover`},{default:()=>[S(I,{style:A,shape:s},{default:()=>[`+${d-u}`]})]})),c(S("div",C(C({},a),{},{class:z,style:a.style}),[f]))}return c(S("div",C(C({},a),{},{class:z,style:a.style}),[m]))}}}),B=ye;I.Group=B;I.install=function(e){return e.component(I.name,I),e.component(B.name,B),e};export{I as A,B as G};
//# sourceMappingURL=index.ff349243.js.map
