import{B as Z,D as J,U as b,Z as Y,X as ee,W as te,d as H,F as P,L,H as M,az as re,c_ as ne,I as F,o as ae,a3 as O,bG as T,f as S,R as oe,Q as C,a5 as se,c$ as ie,av as le,af as ce,ap as ue,cw as de}from"./outputWidgets.91aca867.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8e7f4747-4c59-48f1-b01d-11d78272d2bd",e._sentryDebugIdIdentifier="sentry-dbid-8e7f4747-4c59-48f1-b01d-11d78272d2bd")}catch{}})();const ge=e=>{const{antCls:n,componentCls:a,iconCls:r,avatarBg:o,avatarColor:h,containerSize:i,containerSizeLG:c,containerSizeSM:f,textFontSize:g,textFontSizeLG:u,textFontSizeSM:w,borderRadius:$,borderRadiusLG:s,borderRadiusSM:z,lineWidth:p,lineType:m}=e,d=(v,t,l)=>({width:v,height:v,lineHeight:`${v-p*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:l},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:t,[`> ${r}`]:{margin:0}}});return{[a]:b(b(b(b({},Y(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:h,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${p}px ${m} transparent`,["&-image"]:{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),d(i,g,$)),{["&-lg"]:b({},d(c,u,s)),["&-sm"]:b({},d(f,w,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},pe=e=>{const{componentCls:n,groupBorderColor:a,groupOverlapping:r,groupSpace:o}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:a},["> *:not(:first-child)"]:{marginInlineStart:r}},[`${n}-group-popover`]:{[`${n} + ${n}`]:{marginInlineStart:o}}}},j=Z("Avatar",e=>{const{colorTextLightSolid:n,colorTextPlaceholder:a}=e,r=J(e,{avatarBg:a,avatarColor:n});return[ge(r),pe(r)]},e=>{const{controlHeight:n,controlHeightLG:a,controlHeightSM:r,fontSize:o,fontSizeLG:h,fontSizeXL:i,fontSizeHeading3:c,marginXS:f,marginXXS:g,colorBorderBg:u}=e;return{containerSize:n,containerSizeLG:a,containerSizeSM:r,textFontSize:Math.round((h+i)/2),textFontSizeLG:c,textFontSizeSM:o,groupSpace:g,groupOverlapping:-f,groupBorderColor:u}}),E=Symbol("AvatarContextKey"),ve=()=>ee(E,{}),fe=e=>te(E,e),Se=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:se.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),he=H({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:Se(),slots:Object,setup(e,n){let{slots:a,attrs:r}=n;const o=P(!0),h=P(!1),i=P(1),c=P(null),f=P(null),{prefixCls:g}=L("avatar",e),[u,w]=j(g),$=ve(),s=M(()=>e.size==="default"?$.size:e.size),z=re(),p=ne(()=>{if(typeof e.size!="object")return;const t=ie.find(x=>z.value[x]);return e.size[t]}),m=t=>p.value?{width:`${p.value}px`,height:`${p.value}px`,lineHeight:`${p.value}px`,fontSize:`${t?p.value/2:18}px`}:{},d=()=>{if(!c.value||!f.value)return;const t=c.value.offsetWidth,l=f.value.offsetWidth;if(t!==0&&l!==0){const{gap:x=4}=e;x*2<l&&(i.value=l-x*2<t?(l-x*2)/t:1)}},v=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(o.value=!1)};return F(()=>e.src,()=>{O(()=>{o.value=!0,i.value=1})}),F(()=>e.gap,()=>{O(()=>{d()})}),ae(()=>{O(()=>{d(),h.value=!0})}),()=>{var t,l;const{shape:x,src:I,alt:W,srcset:D,draggable:N,crossOrigin:X}=e,K=(t=$.shape)!==null&&t!==void 0?t:x,A=T(a,e,"icon"),y=g.value,q={[`${r.class}`]:!!r.class,[y]:!0,[`${y}-lg`]:s.value==="large",[`${y}-sm`]:s.value==="small",[`${y}-${K}`]:!0,[`${y}-image`]:I&&o.value,[`${y}-icon`]:A,[w.value]:!0},Q=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:A?`${s.value/2}px`:"18px"}:{},B=(l=a.default)===null||l===void 0?void 0:l.call(a);let k;if(I&&o.value)k=S("img",{draggable:N,src:I,srcset:D,onError:v,alt:W,crossorigin:X},null);else if(A)k=A;else if(h.value||i.value!==1){const R=`scale(${i.value}) translateX(-50%)`,U={msTransform:R,WebkitTransform:R,transform:R},V=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};k=S(oe,{onResize:d},{default:()=>[S("span",{class:`${y}-string`,ref:c,style:b(b({},V),U)},[B])]})}else k=S("span",{class:`${y}-string`,ref:c,style:{opacity:0}},[B]);return u(S("span",C(C({},r),{},{ref:f,class:q,style:[Q,m(!!A),r.style]}),[k]))}}}),G=he,me=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),ye=H({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:me(),setup(e,n){let{slots:a,attrs:r}=n;const{prefixCls:o,direction:h}=L("avatar",e),i=M(()=>`${o.value}-group`),[c,f]=j(o);return le(()=>{const g={size:e.size,shape:e.shape};fe(g)}),()=>{const{maxPopoverPlacement:g="top",maxCount:u,maxStyle:w,maxPopoverTrigger:$="hover",shape:s}=e,z={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${r.class}`]:!!r.class,[f.value]:!0},p=T(a,e),m=ce(p).map((v,t)=>ue(v,{key:`avatar-key-${t}`})),d=m.length;if(u&&u<d){const v=m.slice(0,u),t=m.slice(u,d);return v.push(S(de,{key:"avatar-popover-key",content:t,trigger:$,placement:g,overlayClassName:`${i.value}-popover`},{default:()=>[S(G,{style:w,shape:s},{default:()=>[`+${d-u}`]})]})),c(S("div",C(C({},r),{},{class:z,style:r.style}),[v]))}return c(S("div",C(C({},r),{},{class:z,style:r.style}),[m]))}}}),_=ye;G.Group=_;G.install=function(e){return e.component(G.name,G),e.component(_.name,_),e};export{G as A,_ as G};
//# sourceMappingURL=index.66efdde9.js.map
