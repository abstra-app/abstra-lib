import{d as _,f,E as at,e as H,g as q,ah as rt,U as i,b as v,aj as F,ai as M,aR as lt,aF as G,av as B,ad as it,aU as O,ae as st,dS as X,ap as Y,al as D,dT as J,bU as ut,aD as ct,aY as dt,aZ as bt,a_ as gt,a$ as mt}from"./index.45f399db.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="86cf53b5-ba34-4ed4-9cfa-e215ee807af4",t._sentryDebugIdIdentifier="sentry-dbid-86cf53b5-ba34-4ed4-9cfa-e215ee807af4")}catch{}})();function K(t){let{prefixCls:e,value:a,current:o,offset:n=0}=t,c;return n&&(c={position:"absolute",top:`${n}00%`,left:0}),v("p",{style:c,class:F(`${e}-only-unit`,{current:o})},[a])}function ft(t,e,a){let o=t,n=0;for(;(o+10)%10!==e;)o+=a,n+=a;return n}const vt=_({compatConfig:{MODE:3},name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup(t){const e=f(()=>Number(t.value)),a=f(()=>Math.abs(t.count)),o=at({prevValue:e.value,prevCount:a.value}),n=()=>{o.prevValue=e.value,o.prevCount=a.value},c=H();return q(e,()=>{clearTimeout(c.value),c.value=setTimeout(()=>{n()},1e3)},{flush:"post"}),rt(()=>{clearTimeout(c.value)}),()=>{let d,p={};const s=e.value;if(o.prevValue===s||Number.isNaN(s)||Number.isNaN(o.prevValue))d=[K(i(i({},t),{current:!0}))],p={transition:"none"};else{d=[];const h=s+10,b=[];for(let r=s;r<=h;r+=1)b.push(r);const l=b.findIndex(r=>r%10===o.prevValue);d=b.map((r,S)=>{const $=r%10;return K(i(i({},t),{value:$,offset:S-l,current:S===l}))});const u=o.prevCount<a.value?1:-1;p={transform:`translateY(${-ft(o.prevValue,s,u)}00%)`}}return v("span",{class:`${t.prefixCls}-only`,style:p,onTransitionend:()=>n()},[d])}}});var pt=globalThis&&globalThis.__rest||function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(a[o[n]]=t[o[n]]);return a};const ht={prefixCls:String,count:B.any,component:String,title:B.any,show:Boolean},$t=_({compatConfig:{MODE:3},name:"ScrollNumber",inheritAttrs:!1,props:ht,setup(t,e){let{attrs:a,slots:o}=e;const{prefixCls:n}=M("scroll-number",t);return()=>{var c;const d=i(i({},t),a),{prefixCls:p,count:s,title:h,show:b,component:l="sup",class:u,style:r}=d,S=pt(d,["prefixCls","count","title","show","component","class","style"]),$=i(i({},S),{style:r,"data-show":t.show,class:F(n.value,u),title:h});let g=s;if(s&&Number(s)%1===0){const m=String(s).split("");g=m.map((I,P)=>v(vt,{prefixCls:n.value,count:Number(s),value:I,key:m.length-P},null))}r&&r.borderColor&&($.style=i(i({},r),{boxShadow:`0 0 0 1px ${r.borderColor} inset`}));const y=lt((c=o.default)===null||c===void 0?void 0:c.call(o));return y&&y.length?G(y,{class:F(`${n.value}-custom-component`)},!1):v(l,$,{default:()=>[g]})}}}),yt=new O("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),St=new O("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),Ct=new O("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),wt=new O("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),xt=new O("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Nt=new O("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Ot=t=>{const{componentCls:e,iconCls:a,antCls:o,badgeFontHeight:n,badgeShadowSize:c,badgeHeightSm:d,motionDurationSlow:p,badgeStatusSize:s,marginXS:h,badgeRibbonOffset:b}=t,l=`${o}-scroll-number`,u=`${o}-ribbon`,r=`${o}-ribbon-wrapper`,S=X(t,(g,y)=>{let{darkColor:m}=y;return{[`&${e} ${e}-color-${g}`]:{background:m,[`&:not(${e}-count)`]:{color:m}}}}),$=X(t,(g,y)=>{let{darkColor:m}=y;return{[`&${u}-color-${g}`]:{background:m,color:m}}});return{[e]:i(i(i(i({},Y(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{zIndex:t.badgeZIndex,minWidth:t.badgeHeight,height:t.badgeHeight,color:t.badgeTextColor,fontWeight:t.badgeFontWeight,fontSize:t.badgeFontSize,lineHeight:`${t.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:t.badgeHeight/2,boxShadow:`0 0 0 ${c}px ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:d,height:d,fontSize:t.badgeFontSizeSm,lineHeight:`${d}px`,borderRadius:d/2},[`${e}-multiple-words`]:{padding:`0 ${t.paddingXS}px`},[`${e}-dot`]:{zIndex:t.badgeZIndex,width:t.badgeDotSize,minWidth:t.badgeDotSize,height:t.badgeDotSize,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${c}px ${t.badgeShadowColor}`},[`${e}-dot${l}`]:{transition:`background ${p}`},[`${e}-count, ${e}-dot, ${l}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${a}-spin`]:{animationName:Nt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:s,height:s,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{overflow:"visible",color:t.colorPrimary,backgroundColor:t.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:c,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:yt,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:h,color:t.colorText,fontSize:t.fontSize}}}),S),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:St,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:Ct,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:wt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:xt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${l}-custom-component, ${e}-count`]:{transform:"none"},[`${l}-custom-component, ${l}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${l}`]:{overflow:"hidden",[`${l}-only`]:{position:"relative",display:"inline-block",height:t.badgeHeight,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${l}-only-unit`]:{height:t.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${l}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${l}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${r}`]:{position:"relative"},[`${u}`]:i(i(i(i({},Y(t)),{position:"absolute",top:h,padding:`0 ${t.paddingXS}px`,color:t.colorPrimary,lineHeight:`${n}px`,whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${u}-text`]:{color:t.colorTextLightSolid},[`${u}-corner`]:{position:"absolute",top:"100%",width:b,height:b,color:"currentcolor",border:`${b/2}px solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),$),{[`&${u}-placement-end`]:{insetInlineEnd:-b,borderEndEndRadius:0,[`${u}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${u}-placement-start`]:{insetInlineStart:-b,borderEndStartRadius:0,[`${u}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},Q=it("Badge",t=>{const{fontSize:e,lineHeight:a,fontSizeSM:o,lineWidth:n,marginXS:c,colorBorderBg:d}=t,p=Math.round(e*a),s=n,h="auto",b=p-2*s,l=t.colorBgContainer,u="normal",r=o,S=t.colorError,$=t.colorErrorHover,g=e,y=o/2,m=o,I=o/2,P=st(t,{badgeFontHeight:p,badgeShadowSize:s,badgeZIndex:h,badgeHeight:b,badgeTextColor:l,badgeFontWeight:u,badgeFontSize:r,badgeColor:S,badgeColorHover:$,badgeShadowColor:d,badgeHeightSm:g,badgeDotSize:y,badgeFontSizeSm:m,badgeStatusSize:I,badgeProcessingDuration:"1.2s",badgeRibbonOffset:c,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[Ot(P)]});var It=globalThis&&globalThis.__rest||function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(a[o[n]]=t[o[n]]);return a};const Pt=()=>({prefix:String,color:{type:String},text:B.any,placement:{type:String,default:"end"}}),Tt=_({compatConfig:{MODE:3},name:"ABadgeRibbon",inheritAttrs:!1,props:Pt(),slots:Object,setup(t,e){let{attrs:a,slots:o}=e;const{prefixCls:n,direction:c}=M("ribbon",t),[d,p]=Q(n),s=f(()=>J(t.color,!1)),h=f(()=>[n.value,`${n.value}-placement-${t.placement}`,{[`${n.value}-rtl`]:c.value==="rtl",[`${n.value}-color-${t.color}`]:s.value}]);return()=>{var b,l;const{class:u,style:r}=a,S=It(a,["class","style"]),$={},g={};return t.color&&!s.value&&($.background=t.color,g.color=t.color),d(v("div",D({class:`${n.value}-wrapper ${p.value}`},S),[(b=o.default)===null||b===void 0?void 0:b.call(o),v("div",{class:[h.value,u,p.value],style:i(i({},$),r)},[v("span",{class:`${n.value}-text`},[t.text||((l=o.text)===null||l===void 0?void 0:l.call(o))]),v("div",{class:`${n.value}-corner`,style:g},null)])]))}}}),Dt=t=>!isNaN(parseFloat(t))&&isFinite(t),Bt=Dt,zt=()=>({count:B.any.def(null),showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:B.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}),Rt=_({compatConfig:{MODE:3},name:"ABadge",Ribbon:Tt,inheritAttrs:!1,props:zt(),slots:Object,setup(t,e){let{slots:a,attrs:o}=e;const{prefixCls:n,direction:c}=M("badge",t),[d,p]=Q(n),s=f(()=>t.count>t.overflowCount?`${t.overflowCount}+`:t.count),h=f(()=>s.value==="0"||s.value===0),b=f(()=>t.count===null||h.value&&!t.showZero),l=f(()=>(t.status!==null&&t.status!==void 0||t.color!==null&&t.color!==void 0)&&b.value),u=f(()=>t.dot&&!h.value),r=f(()=>u.value?"":s.value),S=f(()=>(r.value===null||r.value===void 0||r.value===""||h.value&&!t.showZero)&&!u.value),$=H(t.count),g=H(r.value),y=H(u.value);q([()=>t.count,r,u],()=>{S.value||($.value=t.count,g.value=r.value,y.value=u.value)},{immediate:!0});const m=f(()=>J(t.color,!1)),I=f(()=>({[`${n.value}-status-dot`]:l.value,[`${n.value}-status-${t.status}`]:!!t.status,[`${n.value}-color-${t.color}`]:m.value})),P=f(()=>t.color&&!m.value?{background:t.color,color:t.color}:{}),k=f(()=>({[`${n.value}-dot`]:y.value,[`${n.value}-count`]:!y.value,[`${n.value}-count-sm`]:t.size==="small",[`${n.value}-multiple-words`]:!y.value&&g.value&&g.value.toString().length>1,[`${n.value}-status-${t.status}`]:!!t.status,[`${n.value}-color-${t.color}`]:m.value}));return()=>{var z,W;const{offset:N,title:Z,color:V}=t,U=o.style,j=ut(a,t,"text"),w=n.value,C=$.value;let x=ct((z=a.default)===null||z===void 0?void 0:z.call(a));x=x.length?x:null;const A=!!(!S.value||a.count),E=(()=>{if(!N)return i({},U);const T={marginTop:Bt(N[1])?`${N[1]}px`:N[1]};return c.value==="rtl"?T.left=`${parseInt(N[0],10)}px`:T.right=`${-parseInt(N[0],10)}px`,i(i({},T),U)})(),tt=Z!=null?Z:typeof C=="string"||typeof C=="number"?C:void 0,et=A||!j?null:v("span",{class:`${w}-status-text`},[j]),ot=typeof C=="object"||C===void 0&&a.count?G(C!=null?C:(W=a.count)===null||W===void 0?void 0:W.call(a),{style:E},!1):null,L=F(w,{[`${w}-status`]:l.value,[`${w}-not-a-wrapper`]:!x,[`${w}-rtl`]:c.value==="rtl"},o.class,p.value);if(!x&&l.value){const T=E.color;return d(v("span",D(D({},o),{},{class:L,style:E}),[v("span",{class:I.value,style:P.value},null),v("span",{style:{color:T},class:`${w}-status-text`},[j])]))}const nt=dt(x?`${w}-zoom`:"",{appear:!1});let R=i(i({},E),t.numberStyle);return V&&!m.value&&(R=R||{},R.background=V),d(v("span",D(D({},o),{},{class:L}),[x,v(bt,nt,{default:()=>[gt(v($t,{prefixCls:t.scrollNumberPrefixCls,show:A,class:k.value,count:g.value,title:tt,style:R,key:"scrollNumber"},{default:()=>[ot]}),[[mt,A]])]}),et]))}}});export{Rt as B,Tt as R,Bt as i};
//# sourceMappingURL=Badge.f92e52c2.js.map
