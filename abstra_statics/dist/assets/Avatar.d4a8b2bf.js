import{ad as X,ae as N,U as g,ap as K,D as U,W as q,d as J,R as $,ai as V,f as Q,aP as Y,dJ as Z,g as F,X as ee,K as _,bU as te,b as z,am as re,al as L,av as ae,dG as ne}from"./index.606ceacb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="dae8b91d-0cf1-4b8b-b670-0d7ec450371e",e._sentryDebugIdIdentifier="sentry-dbid-dae8b91d-0cf1-4b8b-b670-0d7ec450371e")}catch{}})();const oe=e=>{const{antCls:r,componentCls:a,iconCls:n,avatarBg:i,avatarColor:S,containerSize:l,containerSizeLG:c,containerSizeSM:v,textFontSize:h,textFontSizeLG:b,textFontSizeSM:w,borderRadius:C,borderRadiusLG:s,borderRadiusSM:A,lineWidth:u,lineType:R}=e,p=(m,t,o)=>({width:m,height:m,lineHeight:`${m-u*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:o},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[a]:g(g(g(g({},K(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${u}px ${R} transparent`,["&-image"]:{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),p(l,h,C)),{["&-lg"]:g({},p(c,b,s)),["&-sm"]:g({},p(v,w,A)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:r,groupBorderColor:a,groupOverlapping:n,groupSpace:i}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:a},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:i}}}},ie=X("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:a}=e,n=N(e,{avatarBg:a,avatarColor:r});return[oe(n),se(n)]},e=>{const{controlHeight:r,controlHeightLG:a,controlHeightSM:n,fontSize:i,fontSizeLG:S,fontSizeXL:l,fontSizeHeading3:c,marginXS:v,marginXXS:h,colorBorderBg:b}=e;return{containerSize:r,containerSizeLG:a,containerSizeSM:n,textFontSize:Math.round((S+l)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:h,groupOverlapping:-v,groupBorderColor:b}}),M=Symbol("AvatarContextKey"),le=()=>U(M,{}),ge=e=>q(M,e),ce=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:ae.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),ue=J({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ce(),slots:Object,setup(e,r){let{slots:a,attrs:n}=r;const i=$(!0),S=$(!1),l=$(1),c=$(null),v=$(null),{prefixCls:h}=V("avatar",e),[b,w]=ie(h),C=le(),s=Q(()=>e.size==="default"?C.size:e.size),A=Y(),u=Z(()=>{if(typeof e.size!="object")return;const t=ne.find(f=>A.value[f]);return e.size[t]}),R=t=>u.value?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:`${t?u.value/2:18}px`}:{},p=()=>{if(!c.value||!v.value)return;const t=c.value.offsetWidth,o=v.value.offsetWidth;if(t!==0&&o!==0){const{gap:f=4}=e;f*2<o&&(l.value=o-f*2<t?(o-f*2)/t:1)}},m=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(i.value=!1)};return F(()=>e.src,()=>{_(()=>{i.value=!0,l.value=1})}),F(()=>e.gap,()=>{_(()=>{p()})}),ee(()=>{_(()=>{p(),S.value=!0})}),()=>{var t,o;const{shape:f,src:k,alt:G,srcset:H,draggable:O,crossOrigin:T}=e,j=(t=C.shape)!==null&&t!==void 0?t:f,y=te(a,e,"icon"),d=h.value,E={[`${n.class}`]:!!n.class,[d]:!0,[`${d}-lg`]:s.value==="large",[`${d}-sm`]:s.value==="small",[`${d}-${j}`]:!0,[`${d}-image`]:k&&i.value,[`${d}-icon`]:y,[w.value]:!0},P=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:y?`${s.value/2}px`:"18px"}:{},B=(o=a.default)===null||o===void 0?void 0:o.call(a);let x;if(k&&i.value)x=z("img",{draggable:O,src:k,srcset:H,onError:m,alt:G,crossorigin:T},null);else if(y)x=y;else if(S.value||l.value!==1){const I=`scale(${l.value}) translateX(-50%)`,W={msTransform:I,WebkitTransform:I,transform:I},D=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};x=z(re,{onResize:p},{default:()=>[z("span",{class:`${d}-string`,ref:c,style:g(g({},D),W)},[B])]})}else x=z("span",{class:`${d}-string`,ref:c,style:{opacity:0}},[B]);return b(z("span",L(L({},n),{},{ref:v,class:E,style:[P,R(!!y),n.style]}),[x]))}}}),ve=ue;export{ve as A,ge as a,ie as u};
//# sourceMappingURL=Avatar.d4a8b2bf.js.map
