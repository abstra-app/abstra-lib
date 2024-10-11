import{ac as X,ad as N,S as g,ao as J,B as K,V as Q,d as V,Q as $,ah as q,f as U,aO as Y,dJ as Z,g as F,W as ee,J as B,bQ as te,b as z,al as re,ak as L,au as ae,dG as ne}from"./vue-router.3f5115ec.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d0c4ded7-bbdb-46f0-98f4-da680532e791",e._sentryDebugIdIdentifier="sentry-dbid-d0c4ded7-bbdb-46f0-98f4-da680532e791")}catch{}})();const oe=e=>{const{antCls:r,componentCls:a,iconCls:n,avatarBg:i,avatarColor:S,containerSize:l,containerSizeLG:c,containerSizeSM:f,textFontSize:h,textFontSizeLG:b,textFontSizeSM:w,borderRadius:C,borderRadiusLG:s,borderRadiusSM:A,lineWidth:u,lineType:k}=e,v=(m,t,o)=>({width:m,height:m,lineHeight:`${m-u*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:o},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[a]:g(g(g(g({},J(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${u}px ${k} transparent`,["&-image"]:{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),v(l,h,C)),{["&-lg"]:g({},v(c,b,s)),["&-sm"]:g({},v(f,w,A)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:r,groupBorderColor:a,groupOverlapping:n,groupSpace:i}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:a},["> *:not(:first-child)"]:{marginInlineStart:n}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:i}}}},ie=X("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:a}=e,n=N(e,{avatarBg:a,avatarColor:r});return[oe(n),se(n)]},e=>{const{controlHeight:r,controlHeightLG:a,controlHeightSM:n,fontSize:i,fontSizeLG:S,fontSizeXL:l,fontSizeHeading3:c,marginXS:f,marginXXS:h,colorBorderBg:b}=e;return{containerSize:r,containerSizeLG:a,containerSizeSM:n,textFontSize:Math.round((S+l)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:h,groupOverlapping:-f,groupBorderColor:b}}),M=Symbol("AvatarContextKey"),le=()=>K(M,{}),ge=e=>Q(M,e),ce=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:ae.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),ue=V({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ce(),slots:Object,setup(e,r){let{slots:a,attrs:n}=r;const i=$(!0),S=$(!1),l=$(1),c=$(null),f=$(null),{prefixCls:h}=q("avatar",e),[b,w]=ie(h),C=le(),s=U(()=>e.size==="default"?C.size:e.size),A=Y(),u=Z(()=>{if(typeof e.size!="object")return;const t=ne.find(p=>A.value[p]);return e.size[t]}),k=t=>u.value?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:`${t?u.value/2:18}px`}:{},v=()=>{if(!c.value||!f.value)return;const t=c.value.offsetWidth,o=f.value.offsetWidth;if(t!==0&&o!==0){const{gap:p=4}=e;p*2<o&&(l.value=o-p*2<t?(o-p*2)/t:1)}},m=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(i.value=!1)};return F(()=>e.src,()=>{B(()=>{i.value=!0,l.value=1})}),F(()=>e.gap,()=>{B(()=>{v()})}),ee(()=>{B(()=>{v(),S.value=!0})}),()=>{var t,o;const{shape:p,src:I,alt:O,srcset:G,draggable:H,crossOrigin:T}=e,j=(t=C.shape)!==null&&t!==void 0?t:p,y=te(a,e,"icon"),d=h.value,E={[`${n.class}`]:!!n.class,[d]:!0,[`${d}-lg`]:s.value==="large",[`${d}-sm`]:s.value==="small",[`${d}-${j}`]:!0,[`${d}-image`]:I&&i.value,[`${d}-icon`]:y,[w.value]:!0},W=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:y?`${s.value/2}px`:"18px"}:{},_=(o=a.default)===null||o===void 0?void 0:o.call(a);let x;if(I&&i.value)x=z("img",{draggable:H,src:I,srcset:G,onError:m,alt:O,crossorigin:T},null);else if(y)x=y;else if(S.value||l.value!==1){const R=`scale(${l.value}) translateX(-50%)`,P={msTransform:R,WebkitTransform:R,transform:R},D=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};x=z(re,{onResize:v},{default:()=>[z("span",{class:`${d}-string`,ref:c,style:g(g({},D),P)},[_])]})}else x=z("span",{class:`${d}-string`,ref:c,style:{opacity:0}},[_]);return b(z("span",L(L({},n),{},{ref:f,class:E,style:[W,k(!!y),n.style]}),[x]))}}}),fe=ue;export{fe as A,ge as a,ie as u};
//# sourceMappingURL=Avatar.ad043852.js.map
