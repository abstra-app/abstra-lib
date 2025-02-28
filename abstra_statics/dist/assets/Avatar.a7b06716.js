import{ad as X,ae as N,U as g,ap as K,D as U,W as q,d as J,R as $,ai as V,f as Q,aP as Y,dJ as Z,g as F,X as ee,K as _,bU as te,b as z,am as ae,al as L,av as re,dG as ne}from"./index.49752f8d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="bc4ca7a8-3ef1-4c02-a8e2-c4133ddea8c6",e._sentryDebugIdIdentifier="sentry-dbid-bc4ca7a8-3ef1-4c02-a8e2-c4133ddea8c6")}catch{}})();const oe=e=>{const{antCls:a,componentCls:r,iconCls:n,avatarBg:i,avatarColor:S,containerSize:l,containerSizeLG:c,containerSizeSM:v,textFontSize:h,textFontSizeLG:m,textFontSizeSM:w,borderRadius:C,borderRadiusLG:s,borderRadiusSM:A,lineWidth:u,lineType:R}=e,p=(y,t,o)=>({width:y,height:y,lineHeight:`${y-u*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:o},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:g(g(g(g({},K(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${u}px ${R} transparent`,["&-image"]:{background:"transparent"},[`${a}-image-img`]:{display:"block"}}),p(l,h,C)),{["&-lg"]:g({},p(c,m,s)),["&-sm"]:g({},p(v,w,A)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:a,groupBorderColor:r,groupOverlapping:n,groupSpace:i}=e;return{[`${a}-group`]:{display:"inline-flex",[`${a}`]:{borderColor:r},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${a}-group-popover`]:{[`${a} + ${a}`]:{marginInlineStart:i}}}},ie=X("Avatar",e=>{const{colorTextLightSolid:a,colorTextPlaceholder:r}=e,n=N(e,{avatarBg:r,avatarColor:a});return[oe(n),se(n)]},e=>{const{controlHeight:a,controlHeightLG:r,controlHeightSM:n,fontSize:i,fontSizeLG:S,fontSizeXL:l,fontSizeHeading3:c,marginXS:v,marginXXS:h,colorBorderBg:m}=e;return{containerSize:a,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((S+l)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:h,groupOverlapping:-v,groupBorderColor:m}}),M=Symbol("AvatarContextKey"),le=()=>U(M,{}),ge=e=>q(M,e),ce=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:re.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),ue=J({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ce(),slots:Object,setup(e,a){let{slots:r,attrs:n}=a;const i=$(!0),S=$(!1),l=$(1),c=$(null),v=$(null),{prefixCls:h}=V("avatar",e),[m,w]=ie(h),C=le(),s=Q(()=>e.size==="default"?C.size:e.size),A=Y(),u=Z(()=>{if(typeof e.size!="object")return;const t=ne.find(f=>A.value[f]);return e.size[t]}),R=t=>u.value?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:`${t?u.value/2:18}px`}:{},p=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,o=v.value.offsetWidth;if(t!==0&&o!==0){const{gap:f=4}=e;f*2<o&&(l.value=o-f*2<t?(o-f*2)/t:1)}},y=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(i.value=!1)};return F(()=>e.src,()=>{_(()=>{i.value=!0,l.value=1})}),F(()=>e.gap,()=>{_(()=>{p()})}),ee(()=>{_(()=>{p(),S.value=!0})}),()=>{var t,o;const{shape:f,src:k,alt:G,srcset:H,draggable:O,crossOrigin:T}=e,j=(t=C.shape)!==null&&t!==void 0?t:f,b=te(r,e,"icon"),d=h.value,E={[`${n.class}`]:!!n.class,[d]:!0,[`${d}-lg`]:s.value==="large",[`${d}-sm`]:s.value==="small",[`${d}-${j}`]:!0,[`${d}-image`]:k&&i.value,[`${d}-icon`]:b,[w.value]:!0},P=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:b?`${s.value/2}px`:"18px"}:{},B=(o=r.default)===null||o===void 0?void 0:o.call(r);let x;if(k&&i.value)x=z("img",{draggable:O,src:k,srcset:H,onError:y,alt:G,crossorigin:T},null);else if(b)x=b;else if(S.value||l.value!==1){const I=`scale(${l.value}) translateX(-50%)`,W={msTransform:I,WebkitTransform:I,transform:I},D=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};x=z(ae,{onResize:p},{default:()=>[z("span",{class:`${d}-string`,ref:c,style:g(g({},D),W)},[B])]})}else x=z("span",{class:`${d}-string`,ref:c,style:{opacity:0}},[B]);return m(z("span",L(L({},n),{},{ref:v,class:E,style:[P,R(!!b),n.style]}),[x]))}}}),ve=ue;export{ve as A,ge as a,ie as u};
//# sourceMappingURL=Avatar.a7b06716.js.map
