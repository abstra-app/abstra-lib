import{d as F,y as f,N as ae,r as R,O as J,R as re,Y as i,f as v,U as _,S as M,ax as le,al as K,a9 as B,I as ie,aA as O,J as se,dD as X,a2 as Y,W as D,dE as q,bH as ue,aj as ce,aE as de,aF as be,aG as ge,aH as me}from"./outputWidgets.e52c8f8e.js";import{i as fe}from"./isNumeric.75337b1e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="96ed2fbe-e66f-4860-89e1-e47d7d2bd72b",e._sentryDebugIdIdentifier="sentry-dbid-96ed2fbe-e66f-4860-89e1-e47d7d2bd72b")}catch{}})();function G(e){let{prefixCls:t,value:a,current:o,offset:n=0}=e,c;return n&&(c={position:"absolute",top:`${n}00%`,left:0}),v("p",{style:c,class:_(`${t}-only-unit`,{current:o})},[a])}function ve(e,t,a){let o=e,n=0;for(;(o+10)%10!==t;)o+=a,n+=a;return n}const pe=F({compatConfig:{MODE:3},name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup(e){const t=f(()=>Number(e.value)),a=f(()=>Math.abs(e.count)),o=ae({prevValue:t.value,prevCount:a.value}),n=()=>{o.prevValue=t.value,o.prevCount=a.value},c=R();return J(t,()=>{clearTimeout(c.value),c.value=setTimeout(()=>{n()},1e3)},{flush:"post"}),re(()=>{clearTimeout(c.value)}),()=>{let d,p={};const s=t.value;if(o.prevValue===s||Number.isNaN(s)||Number.isNaN(o.prevValue))d=[G(i(i({},e),{current:!0}))],p={transition:"none"};else{d=[];const h=s+10,b=[];for(let r=s;r<=h;r+=1)b.push(r);const l=b.findIndex(r=>r%10===o.prevValue);d=b.map((r,S)=>{const y=r%10;return G(i(i({},e),{value:y,offset:S-l,current:S===l}))});const u=o.prevCount<a.value?1:-1;p={transform:`translateY(${-ve(o.prevValue,s,u)}00%)`}}return v("span",{class:`${e.prefixCls}-only`,style:p,onTransitionend:()=>n()},[d])}}});var he=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a};const ye={prefixCls:String,count:B.any,component:String,title:B.any,show:Boolean},$e=F({compatConfig:{MODE:3},name:"ScrollNumber",inheritAttrs:!1,props:ye,setup(e,t){let{attrs:a,slots:o}=t;const{prefixCls:n}=M("scroll-number",e);return()=>{var c;const d=i(i({},e),a),{prefixCls:p,count:s,title:h,show:b,component:l="sup",class:u,style:r}=d,S=he(d,["prefixCls","count","title","show","component","class","style"]),y=i(i({},S),{style:r,"data-show":e.show,class:_(n.value,u),title:h});let g=s;if(s&&Number(s)%1===0){const m=String(s).split("");g=m.map((I,P)=>v(pe,{prefixCls:n.value,count:Number(s),value:I,key:m.length-P},null))}r&&r.borderColor&&(y.style=i(i({},r),{boxShadow:`0 0 0 1px ${r.borderColor} inset`}));const $=le((c=o.default)===null||c===void 0?void 0:c.call(o));return $&&$.length?K($,{class:_(`${n.value}-custom-component`)},!1):v(l,y,{default:()=>[g]})}}}),Se=new O("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),Ce=new O("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),xe=new O("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),we=new O("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),Ne=new O("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Oe=new O("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Ie=e=>{const{componentCls:t,iconCls:a,antCls:o,badgeFontHeight:n,badgeShadowSize:c,badgeHeightSm:d,motionDurationSlow:p,badgeStatusSize:s,marginXS:h,badgeRibbonOffset:b}=e,l=`${o}-scroll-number`,u=`${o}-ribbon`,r=`${o}-ribbon-wrapper`,S=X(e,(g,$)=>{let{darkColor:m}=$;return{[`&${t} ${t}-color-${g}`]:{background:m,[`&:not(${t}-count)`]:{color:m}}}}),y=X(e,(g,$)=>{let{darkColor:m}=$;return{[`&${u}-color-${g}`]:{background:m,color:m}}});return{[t]:i(i(i(i({},Y(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${t}-count`]:{zIndex:e.badgeZIndex,minWidth:e.badgeHeight,height:e.badgeHeight,color:e.badgeTextColor,fontWeight:e.badgeFontWeight,fontSize:e.badgeFontSize,lineHeight:`${e.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:e.badgeHeight/2,boxShadow:`0 0 0 ${c}px ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${t}-count-sm`]:{minWidth:d,height:d,fontSize:e.badgeFontSizeSm,lineHeight:`${d}px`,borderRadius:d/2},[`${t}-multiple-words`]:{padding:`0 ${e.paddingXS}px`},[`${t}-dot`]:{zIndex:e.badgeZIndex,width:e.badgeDotSize,minWidth:e.badgeDotSize,height:e.badgeDotSize,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${c}px ${e.badgeShadowColor}`},[`${t}-dot${l}`]:{transition:`background ${p}`},[`${t}-count, ${t}-dot, ${l}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${a}-spin`]:{animationName:Oe,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${t}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${t}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:s,height:s,verticalAlign:"middle",borderRadius:"50%"},[`${t}-status-success`]:{backgroundColor:e.colorSuccess},[`${t}-status-processing`]:{overflow:"visible",color:e.colorPrimary,backgroundColor:e.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:c,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:Se,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${t}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${t}-status-error`]:{backgroundColor:e.colorError},[`${t}-status-warning`]:{backgroundColor:e.colorWarning},[`${t}-status-text`]:{marginInlineStart:h,color:e.colorText,fontSize:e.fontSize}}}),S),{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:Ce,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${t}-zoom-leave`]:{animationName:xe,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${t}-not-a-wrapper`]:{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:we,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${t}-zoom-leave`]:{animationName:Ne,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${t}-status)`]:{verticalAlign:"middle"},[`${l}-custom-component, ${t}-count`]:{transform:"none"},[`${l}-custom-component, ${l}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${l}`]:{overflow:"hidden",[`${l}-only`]:{position:"relative",display:"inline-block",height:e.badgeHeight,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${l}-only-unit`]:{height:e.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${l}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${t}-count, ${t}-dot, ${l}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${r}`]:{position:"relative"},[`${u}`]:i(i(i(i({},Y(e)),{position:"absolute",top:h,padding:`0 ${e.paddingXS}px`,color:e.colorPrimary,lineHeight:`${n}px`,whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${u}-text`]:{color:e.colorTextLightSolid},[`${u}-corner`]:{position:"absolute",top:"100%",width:b,height:b,color:"currentcolor",border:`${b/2}px solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),y),{[`&${u}-placement-end`]:{insetInlineEnd:-b,borderEndEndRadius:0,[`${u}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${u}-placement-start`]:{insetInlineStart:-b,borderEndStartRadius:0,[`${u}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},Q=ie("Badge",e=>{const{fontSize:t,lineHeight:a,fontSizeSM:o,lineWidth:n,marginXS:c,colorBorderBg:d}=e,p=Math.round(t*a),s=n,h="auto",b=p-2*s,l=e.colorBgContainer,u="normal",r=o,S=e.colorError,y=e.colorErrorHover,g=t,$=o/2,m=o,I=o/2,P=se(e,{badgeFontHeight:p,badgeShadowSize:s,badgeZIndex:h,badgeHeight:b,badgeTextColor:l,badgeFontWeight:u,badgeFontSize:r,badgeColor:S,badgeColorHover:y,badgeShadowColor:d,badgeHeightSm:g,badgeDotSize:$,badgeFontSizeSm:m,badgeStatusSize:I,badgeProcessingDuration:"1.2s",badgeRibbonOffset:c,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[Ie(P)]});var Pe=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a};const Te=()=>({prefix:String,color:{type:String},text:B.any,placement:{type:String,default:"end"}}),De=F({compatConfig:{MODE:3},name:"ABadgeRibbon",inheritAttrs:!1,props:Te(),slots:Object,setup(e,t){let{attrs:a,slots:o}=t;const{prefixCls:n,direction:c}=M("ribbon",e),[d,p]=Q(n),s=f(()=>q(e.color,!1)),h=f(()=>[n.value,`${n.value}-placement-${e.placement}`,{[`${n.value}-rtl`]:c.value==="rtl",[`${n.value}-color-${e.color}`]:s.value}]);return()=>{var b,l;const{class:u,style:r}=a,S=Pe(a,["class","style"]),y={},g={};return e.color&&!s.value&&(y.background=e.color,g.color=e.color),d(v("div",D({class:`${n.value}-wrapper ${p.value}`},S),[(b=o.default)===null||b===void 0?void 0:b.call(o),v("div",{class:[h.value,u,p.value],style:i(i({},y),r)},[v("span",{class:`${n.value}-text`},[e.text||((l=o.text)===null||l===void 0?void 0:l.call(o))]),v("div",{class:`${n.value}-corner`,style:g},null)])]))}}}),Be=()=>({count:B.any.def(null),showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:B.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}),He=F({compatConfig:{MODE:3},name:"ABadge",Ribbon:De,inheritAttrs:!1,props:Be(),slots:Object,setup(e,t){let{slots:a,attrs:o}=t;const{prefixCls:n,direction:c}=M("badge",e),[d,p]=Q(n),s=f(()=>e.count>e.overflowCount?`${e.overflowCount}+`:e.count),h=f(()=>s.value==="0"||s.value===0),b=f(()=>e.count===null||h.value&&!e.showZero),l=f(()=>(e.status!==null&&e.status!==void 0||e.color!==null&&e.color!==void 0)&&b.value),u=f(()=>e.dot&&!h.value),r=f(()=>u.value?"":s.value),S=f(()=>(r.value===null||r.value===void 0||r.value===""||h.value&&!e.showZero)&&!u.value),y=R(e.count),g=R(r.value),$=R(u.value);J([()=>e.count,r,u],()=>{S.value||(y.value=e.count,g.value=r.value,$.value=u.value)},{immediate:!0});const m=f(()=>q(e.color,!1)),I=f(()=>({[`${n.value}-status-dot`]:l.value,[`${n.value}-status-${e.status}`]:!!e.status,[`${n.value}-color-${e.color}`]:m.value})),P=f(()=>e.color&&!m.value?{background:e.color,color:e.color}:{}),k=f(()=>({[`${n.value}-dot`]:$.value,[`${n.value}-count`]:!$.value,[`${n.value}-count-sm`]:e.size==="small",[`${n.value}-multiple-words`]:!$.value&&g.value&&g.value.toString().length>1,[`${n.value}-status-${e.status}`]:!!e.status,[`${n.value}-color-${e.color}`]:m.value}));return()=>{var E,W;const{offset:N,title:j,color:V}=e,L=o.style,Z=ue(a,e,"text"),x=n.value,C=y.value;let w=ce((E=a.default)===null||E===void 0?void 0:E.call(a));w=w.length?w:null;const A=!!(!S.value||a.count),z=(()=>{if(!N)return i({},L);const T={marginTop:fe(N[1])?`${N[1]}px`:N[1]};return c.value==="rtl"?T.left=`${parseInt(N[0],10)}px`:T.right=`${-parseInt(N[0],10)}px`,i(i({},T),L)})(),ee=j!=null?j:typeof C=="string"||typeof C=="number"?C:void 0,te=A||!Z?null:v("span",{class:`${x}-status-text`},[Z]),oe=typeof C=="object"||C===void 0&&a.count?K(C!=null?C:(W=a.count)===null||W===void 0?void 0:W.call(a),{style:z},!1):null,U=_(x,{[`${x}-status`]:l.value,[`${x}-not-a-wrapper`]:!w,[`${x}-rtl`]:c.value==="rtl"},o.class,p.value);if(!w&&l.value){const T=z.color;return d(v("span",D(D({},o),{},{class:U,style:z}),[v("span",{class:I.value,style:P.value},null),v("span",{style:{color:T},class:`${x}-status-text`},[Z])]))}const ne=de(w?`${x}-zoom`:"",{appear:!1});let H=i(i({},z),e.numberStyle);return V&&!m.value&&(H=H||{},H.background=V),d(v("span",D(D({},o),{},{class:U}),[w,v(be,ne,{default:()=>[ge(v($e,{prefixCls:e.scrollNumberPrefixCls,show:A,class:k.value,count:g.value,title:ee,style:H,key:"scrollNumber"},{default:()=>[oe]}),[[me,A]])]}),te]))}}});export{He as B,De as R};
//# sourceMappingURL=Badge.582a42d9.js.map
