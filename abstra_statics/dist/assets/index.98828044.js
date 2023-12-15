import{z as W,B as R,dt as O,d6 as j,U as B,Z as U,d as z,L as D,G as y,N as w,f as d,Q as h,E as X,av as q,d7 as G,du as Q,bq as V,ds as Z,a5 as P,d0 as J,bu as K}from"./outputWidgets.e33755f8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f5b51d10-99a8-4c88-8f5d-256f7e9f4618",e._sentryDebugIdIdentifier="sentry-dbid-f5b51d10-99a8-4c88-8f5d-256f7e9f4618")}catch{}})();const b=(e,t,l)=>{const n=O(l);return{[`${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Y=e=>j(e,(t,l)=>{let{textColor:n,lightBorderColor:a,lightColor:o,darkColor:c}=l;return{[`${e.componentCls}-${t}`]:{color:n,background:o,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ee=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:n,componentCls:a}=e,o=n-l,c=t-l;return{[a]:B(B({},U(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:o,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${a}-close-icon`]:{marginInlineStart:c,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:o}}),[`${a}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},F=W("Tag",e=>{const{fontSize:t,lineHeight:l,lineWidth:n,fontSizeIcon:a}=e,o=Math.round(t*l),c=e.fontSizeSM,g=o-n*2,f=e.colorFillAlter,i=e.colorText,r=R(e,{tagFontSize:c,tagLineHeight:g,tagDefaultBg:f,tagDefaultColor:i,tagIconSize:a-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[ee(r),Y(r),b(r,"success","Success"),b(r,"processing","Info"),b(r,"error","Error"),b(r,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,t){let{slots:l,emit:n,attrs:a}=t;const{prefixCls:o}=D("tag",e),[c,g]=F(o),f=r=>{const{checked:u}=e;n("update:checked",!u),n("change",!u),n("click",r)},i=y(()=>w(o.value,g.value,{[`${o.value}-checkable`]:!0,[`${o.value}-checkable-checked`]:e.checked}));return()=>{var r;return c(d("span",h(h({},a),{},{class:[i.value,a.class],onClick:f}),[(r=l.default)===null||r===void 0?void 0:r.call(l)]))}}}),S=le,ne=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:P.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:J(),"onUpdate:visible":Function,icon:P.any,bordered:{type:Boolean,default:!0}}),C=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ne(),slots:Object,setup(e,t){let{slots:l,emit:n,attrs:a}=t;const{prefixCls:o,direction:c}=D("tag",e),[g,f]=F(o),i=X(!0);q(()=>{e.visible!==void 0&&(i.value=e.visible)});const r=s=>{s.stopPropagation(),n("update:visible",!1),n("close",s),!s.defaultPrevented&&e.visible===void 0&&(i.value=!1)},u=y(()=>G(e.color)||Q(e.color)),H=y(()=>w(o.value,f.value,{[`${o.value}-${e.color}`]:u.value,[`${o.value}-has-color`]:e.color&&!u.value,[`${o.value}-hidden`]:!i.value,[`${o.value}-rtl`]:c.value==="rtl",[`${o.value}-borderless`]:!e.bordered})),_=s=>{n("click",s)};return()=>{var s,v,p;const{icon:A=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:m,closeIcon:$=(v=l.closeIcon)===null||v===void 0?void 0:v.call(l),closable:k=!1}=e,M=()=>k?$?d("span",{class:`${o.value}-close-icon`,onClick:r},[$]):d(K,{class:`${o.value}-close-icon`,onClick:r},null):null,E={backgroundColor:m&&!u.value?m:void 0},I=A||null,T=(p=l.default)===null||p===void 0?void 0:p.call(l),N=I?d(V,null,[I,d("span",null,[T])]):T,L=e.onClick!==void 0,x=d("span",h(h({},a),{},{onClick:_,class:[H.value,a.class],style:[E,a.style]}),[N,M()]);return g(L?d(Z,null,{default:()=>[x]}):x)}}});C.CheckableTag=S;C.install=function(e){return e.component(C.name,C),e.component(S.name,S),e};const re=C;export{re as A,S as C};
//# sourceMappingURL=index.98828044.js.map
