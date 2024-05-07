import{E as R,F as L,dp as O,dq as j,W as B,a0 as U,d as z,Q as D,J as y,R as w,f as d,U as b,H as X,ax as q,dr as J,ds as Q,aE as V,dn as G,a7 as P,d2 as K,aN as Y}from"./outputWidgets.edf91cb2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="325da886-5536-4951-9171-def0bf4dc067",e._sentryDebugIdIdentifier="sentry-dbid-325da886-5536-4951-9171-def0bf4dc067")}catch{}})();const h=(e,t,l)=>{const n=O(l);return{[`${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Z=e=>j(e,(t,l)=>{let{textColor:n,lightBorderColor:a,lightColor:o,darkColor:c}=l;return{[`${e.componentCls}-${t}`]:{color:n,background:o,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ee=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:n,componentCls:a}=e,o=n-l,c=t-l;return{[a]:B(B({},U(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:o,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${a}-close-icon`]:{marginInlineStart:c,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:o}}),[`${a}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},F=R("Tag",e=>{const{fontSize:t,lineHeight:l,lineWidth:n,fontSizeIcon:a}=e,o=Math.round(t*l),c=e.fontSizeSM,g=o-n*2,C=e.colorFillAlter,i=e.colorText,r=L(e,{tagFontSize:c,tagLineHeight:g,tagDefaultBg:C,tagDefaultColor:i,tagIconSize:a-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[ee(r),Z(r),h(r,"success","Success"),h(r,"processing","Info"),h(r,"error","Error"),h(r,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,t){let{slots:l,emit:n,attrs:a}=t;const{prefixCls:o}=D("tag",e),[c,g]=F(o),C=r=>{const{checked:u}=e;n("update:checked",!u),n("change",!u),n("click",r)},i=y(()=>w(o.value,g.value,{[`${o.value}-checkable`]:!0,[`${o.value}-checkable-checked`]:e.checked}));return()=>{var r;return c(d("span",b(b({},a),{},{class:[i.value,a.class],onClick:C}),[(r=l.default)===null||r===void 0?void 0:r.call(l)]))}}}),S=le,ne=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:P.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:K(),"onUpdate:visible":Function,icon:P.any,bordered:{type:Boolean,default:!0}}),f=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ne(),slots:Object,setup(e,t){let{slots:l,emit:n,attrs:a}=t;const{prefixCls:o,direction:c}=D("tag",e),[g,C]=F(o),i=X(!0);q(()=>{e.visible!==void 0&&(i.value=e.visible)});const r=s=>{s.stopPropagation(),n("update:visible",!1),n("close",s),!s.defaultPrevented&&e.visible===void 0&&(i.value=!1)},u=y(()=>J(e.color)||Q(e.color)),H=y(()=>w(o.value,C.value,{[`${o.value}-${e.color}`]:u.value,[`${o.value}-has-color`]:e.color&&!u.value,[`${o.value}-hidden`]:!i.value,[`${o.value}-rtl`]:c.value==="rtl",[`${o.value}-borderless`]:!e.bordered})),_=s=>{n("click",s)};return()=>{var s,v,p;const{icon:A=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:m,closeIcon:$=(v=l.closeIcon)===null||v===void 0?void 0:v.call(l),closable:k=!1}=e,E=()=>k?$?d("span",{class:`${o.value}-close-icon`,onClick:r},[$]):d(Y,{class:`${o.value}-close-icon`,onClick:r},null):null,M={backgroundColor:m&&!u.value?m:void 0},I=A||null,T=(p=l.default)===null||p===void 0?void 0:p.call(l),N=I?d(V,null,[I,d("span",null,[T])]):T,W=e.onClick!==void 0,x=d("span",b(b({},a),{},{onClick:_,class:[H.value,a.class],style:[M,a.style]}),[N,E()]);return g(W?d(G,null,{default:()=>[x]}):x)}}});f.CheckableTag=S;f.install=function(e){return e.component(f.name,f),e.component(S.name,S),e};const re=f;export{re as A,S as C};
//# sourceMappingURL=index.33e86a90.js.map
