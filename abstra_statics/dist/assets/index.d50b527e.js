import{V as Y,W as Q,x as b,Y as Z,aB as ee,F as te,d as F,R as P,a2 as M,H as T,b1 as ae,dj as re,G as B,o as ne,aH as O,c0 as _,f as S,az as oe,J as C,aJ as se,dk as ie,af as le,aS as ce,aU as ue,cP as de}from"./outputWidgets.a62a98a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="fbc5faf0-44ae-47c1-8e3e-b44b8fa61081",e._sentryDebugIdIdentifier="sentry-dbid-fbc5faf0-44ae-47c1-8e3e-b44b8fa61081")}catch{}})();const ge=e=>{const{antCls:r,componentCls:n,iconCls:a,avatarBg:o,avatarColor:h,containerSize:i,containerSizeLG:c,containerSizeSM:v,textFontSize:g,textFontSizeLG:u,textFontSizeSM:w,borderRadius:$,borderRadiusLG:s,borderRadiusSM:z,lineWidth:p,lineType:m}=e,d=(f,t,l)=>({width:f,height:f,lineHeight:`${f-p*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:l},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:t,[`> ${a}`]:{margin:0}}});return{[n]:b(b(b(b({},Z(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:h,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${p}px ${m} transparent`,["&-image"]:{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),d(i,g,$)),{["&-lg"]:b({},d(c,u,s)),["&-sm"]:b({},d(v,w,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},pe=e=>{const{componentCls:r,groupBorderColor:n,groupOverlapping:a,groupSpace:o}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:a}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:o}}}},E=Y("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:n}=e,a=Q(e,{avatarBg:n,avatarColor:r});return[ge(a),pe(a)]},e=>{const{controlHeight:r,controlHeightLG:n,controlHeightSM:a,fontSize:o,fontSizeLG:h,fontSizeXL:i,fontSizeHeading3:c,marginXS:v,marginXXS:g,colorBorderBg:u}=e;return{containerSize:r,containerSizeLG:n,containerSizeSM:a,textFontSize:Math.round((h+i)/2),textFontSizeLG:c,textFontSizeSM:o,groupSpace:g,groupOverlapping:-v,groupBorderColor:u}}),L=Symbol("AvatarContextKey"),fe=()=>ee(L,{}),ve=e=>te(L,e),Se=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:se.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),he=F({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:Se(),slots:Object,setup(e,r){let{slots:n,attrs:a}=r;const o=P(!0),h=P(!1),i=P(1),c=P(null),v=P(null),{prefixCls:g}=M("avatar",e),[u,w]=E(g),$=fe(),s=T(()=>e.size==="default"?$.size:e.size),z=ae(),p=re(()=>{if(typeof e.size!="object")return;const t=ie.find(x=>z.value[x]);return e.size[t]}),m=t=>p.value?{width:`${p.value}px`,height:`${p.value}px`,lineHeight:`${p.value}px`,fontSize:`${t?p.value/2:18}px`}:{},d=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,l=v.value.offsetWidth;if(t!==0&&l!==0){const{gap:x=4}=e;x*2<l&&(i.value=l-x*2<t?(l-x*2)/t:1)}},f=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(o.value=!1)};return B(()=>e.src,()=>{O(()=>{o.value=!0,i.value=1})}),B(()=>e.gap,()=>{O(()=>{d()})}),ne(()=>{O(()=>{d(),h.value=!0})}),()=>{var t,l;const{shape:x,src:R,alt:W,srcset:N,draggable:D,crossOrigin:X}=e,J=(t=$.shape)!==null&&t!==void 0?t:x,A=_(n,e,"icon"),y=g.value,K={[`${a.class}`]:!!a.class,[y]:!0,[`${y}-lg`]:s.value==="large",[`${y}-sm`]:s.value==="small",[`${y}-${J}`]:!0,[`${y}-image`]:R&&o.value,[`${y}-icon`]:A,[w.value]:!0},V=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:A?`${s.value/2}px`:"18px"}:{},j=(l=n.default)===null||l===void 0?void 0:l.call(n);let k;if(R&&o.value)k=S("img",{draggable:D,src:R,srcset:N,onError:f,alt:W,crossorigin:X},null);else if(A)k=A;else if(h.value||i.value!==1){const I=`scale(${i.value}) translateX(-50%)`,q={msTransform:I,WebkitTransform:I,transform:I},U=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};k=S(oe,{onResize:d},{default:()=>[S("span",{class:`${y}-string`,ref:c,style:b(b({},U),q)},[j])]})}else k=S("span",{class:`${y}-string`,ref:c,style:{opacity:0}},[j]);return u(S("span",C(C({},a),{},{ref:v,class:K,style:[V,m(!!A),a.style]}),[k]))}}}),G=he,me=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),ye=F({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:me(),setup(e,r){let{slots:n,attrs:a}=r;const{prefixCls:o,direction:h}=M("avatar",e),i=T(()=>`${o.value}-group`),[c,v]=E(o);return le(()=>{const g={size:e.size,shape:e.shape};ve(g)}),()=>{const{maxPopoverPlacement:g="top",maxCount:u,maxStyle:w,maxPopoverTrigger:$="hover",shape:s}=e,z={[i.value]:!0,[`${i.value}-rtl`]:h.value==="rtl",[`${a.class}`]:!!a.class,[v.value]:!0},p=_(n,e),m=ce(p).map((f,t)=>ue(f,{key:`avatar-key-${t}`})),d=m.length;if(u&&u<d){const f=m.slice(0,u),t=m.slice(u,d);return f.push(S(de,{key:"avatar-popover-key",content:t,trigger:$,placement:g,overlayClassName:`${i.value}-popover`},{default:()=>[S(G,{style:w,shape:s},{default:()=>[`+${d-u}`]})]})),c(S("div",C(C({},a),{},{class:z,style:a.style}),[f]))}return c(S("div",C(C({},a),{},{class:z,style:a.style}),[m]))}}}),H=ye;G.Group=H;G.install=function(e){return e.component(G.name,G),e.component(H.name,H),e};export{G as A,H as G};
//# sourceMappingURL=index.d50b527e.js.map
