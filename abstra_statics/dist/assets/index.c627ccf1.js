import{I as Q,J as U,Y as b,a2 as Z,a0 as ee,$ as te,d as M,x as P,S as T,y as _,av as re,db as ae,O as H,o as ne,a7 as R,bH as E,f as S,X as oe,W as C,a9 as se,dc as ie,ar as le,aj as ce,al as ue,cB as de}from"./outputWidgets.cccb70ed.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="cc31724d-fc76-4c7e-bbe6-f8bf2796ade6",e._sentryDebugIdIdentifier="sentry-dbid-cc31724d-fc76-4c7e-bbe6-f8bf2796ade6")}catch{}})();const ge=e=>{const{antCls:a,componentCls:n,iconCls:r,avatarBg:o,avatarColor:h,containerSize:i,containerSizeLG:c,containerSizeSM:v,textFontSize:g,textFontSizeLG:u,textFontSizeSM:w,borderRadius:$,borderRadiusLG:s,borderRadiusSM:z,lineWidth:p,lineType:m}=e,d=(f,t,l)=>({width:f,height:f,lineHeight:`${f-p*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:l},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:t,[`> ${r}`]:{margin:0}}});return{[n]:b(b(b(b({},Z(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:h,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${p}px ${m} transparent`,["&-image"]:{background:"transparent"},[`${a}-image-img`]:{display:"block"}}),d(i,g,$)),{["&-lg"]:b({},d(c,u,s)),["&-sm"]:b({},d(v,w,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},pe=e=>{const{componentCls:a,groupBorderColor:n,groupOverlapping:r,groupSpace:o}=e;return{[`${a}-group`]:{display:"inline-flex",[`${a}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:r}},[`${a}-group-popover`]:{[`${a} + ${a}`]:{marginInlineStart:o}}}},F=Q("Avatar",e=>{const{colorTextLightSolid:a,colorTextPlaceholder:n}=e,r=U(e,{avatarBg:n,avatarColor:a});return[ge(r),pe(r)]},e=>{const{controlHeight:a,controlHeightLG:n,controlHeightSM:r,fontSize:o,fontSizeLG:h,fontSizeXL:i,fontSizeHeading3:c,marginXS:v,marginXXS:g,colorBorderBg:u}=e;return{containerSize:a,containerSizeLG:n,containerSizeSM:r,textFontSize:Math.round((h+i)/2),textFontSizeLG:c,textFontSizeSM:o,groupSpace:g,groupOverlapping:-v,groupBorderColor:u}}),L=Symbol("AvatarContextKey"),fe=()=>ee(L,{}),ve=e=>te(L,e),Se=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:se.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),he=M({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:Se(),slots:Object,setup(e,a){let{slots:n,attrs:r}=a;const o=P(!0),h=P(!1),i=P(1),c=P(null),v=P(null),{prefixCls:g}=T("avatar",e),[u,w]=F(g),$=fe(),s=_(()=>e.size==="default"?$.size:e.size),z=re(),p=ae(()=>{if(typeof e.size!="object")return;const t=ie.find(x=>z.value[x]);return e.size[t]}),m=t=>p.value?{width:`${p.value}px`,height:`${p.value}px`,lineHeight:`${p.value}px`,fontSize:`${t?p.value/2:18}px`}:{},d=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,l=v.value.offsetWidth;if(t!==0&&l!==0){const{gap:x=4}=e;x*2<l&&(i.value=l-x*2<t?(l-x*2)/t:1)}},f=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(o.value=!1)};return H(()=>e.src,()=>{R(()=>{o.value=!0,i.value=1})}),H(()=>e.gap,()=>{R(()=>{d()})}),ne(()=>{R(()=>{d(),h.value=!0})}),()=>{var t,l;const{shape:x,src:O,alt:W,srcset:N,draggable:D,crossOrigin:X}=e,K=(t=$.shape)!==null&&t!==void 0?t:x,A=E(n,e,"icon"),y=g.value,q={[`${r.class}`]:!!r.class,[y]:!0,[`${y}-lg`]:s.value==="large",[`${y}-sm`]:s.value==="small",[`${y}-${K}`]:!0,[`${y}-image`]:O&&o.value,[`${y}-icon`]:A,[w.value]:!0},J=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:A?`${s.value/2}px`:"18px"}:{},B=(l=n.default)===null||l===void 0?void 0:l.call(n);let k;if(O&&o.value)k=S("img",{draggable:D,src:O,srcset:N,onError:f,alt:W,crossorigin:X},null);else if(A)k=A;else if(h.value||i.value!==1){const G=`scale(${i.value}) translateX(-50%)`,V={msTransform:G,WebkitTransform:G,transform:G},Y=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};k=S(oe,{onResize:d},{default:()=>[S("span",{class:`${y}-string`,ref:c,style:b(b({},Y),V)},[B])]})}else k=S("span",{class:`${y}-string`,ref:c,style:{opacity:0}},[B]);return u(S("span",C(C({},r),{},{ref:v,class:q,style:[J,m(!!A),r.style]}),[k]))}}}),I=he,me=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),ye=M({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:me(),setup(e,a){let{slots:n,attrs:r}=a;const{prefixCls:o,direction:h}=T("avatar",e),i=_(()=>`${o.value}-group`),[c,v]=F(o);return le(()=>{const g={size:e.size,shape:e.shape};ve(g)}),()=>{const{maxPopoverPlacement:g="top",maxCount:u,maxStyle:w,maxPopoverTrigger:$="hover",shape:s}=e,z={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${r.class}`]:!!r.class,[v.value]:!0},p=E(n,e),m=ce(p).map((f,t)=>ue(f,{key:`avatar-key-${t}`})),d=m.length;if(u&&u<d){const f=m.slice(0,u),t=m.slice(u,d);return f.push(S(de,{key:"avatar-popover-key",content:t,trigger:$,placement:g,overlayClassName:`${i.value}-popover`},{default:()=>[S(I,{style:w,shape:s},{default:()=>[`+${d-u}`]})]})),c(S("div",C(C({},r),{},{class:z,style:r.style}),[f]))}return c(S("div",C(C({},r),{},{class:z,style:r.style}),[m]))}}}),j=ye;I.Group=j;I.install=function(e){return e.component(I.name,I),e.component(j.name,j),e};export{I as A,j as G};
//# sourceMappingURL=index.c627ccf1.js.map
