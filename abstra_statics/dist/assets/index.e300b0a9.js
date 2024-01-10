import{z as W,B as R,dw as O,d7 as j,U as B,Z as U,d as z,L as w,G as y,N as D,f as d,Q as f,E as X,av as q,d8 as G,dx as Q,bq as V,dv as Z,a5 as P,d1 as J,bu as K}from"./outputWidgets.f2ae36a0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d972ad1b-6b9a-4b2c-83b3-258d15099a15",e._sentryDebugIdIdentifier="sentry-dbid-d972ad1b-6b9a-4b2c-83b3-258d15099a15")}catch{}})();const h=(e,t,l)=>{const a=O(l);return{[`${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${a}Bg`],borderColor:e[`color${a}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Y=e=>j(e,(t,l)=>{let{textColor:a,lightBorderColor:n,lightColor:o,darkColor:c}=l;return{[`${e.componentCls}-${t}`]:{color:a,background:o,borderColor:n,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ee=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:a,componentCls:n}=e,o=a-l,c=t-l;return{[n]:B(B({},U(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:o,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${n}-close-icon`]:{marginInlineStart:c,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:o}}),[`${n}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},F=W("Tag",e=>{const{fontSize:t,lineHeight:l,lineWidth:a,fontSizeIcon:n}=e,o=Math.round(t*l),c=e.fontSizeSM,g=o-a*2,b=e.colorFillAlter,i=e.colorText,r=R(e,{tagFontSize:c,tagLineHeight:g,tagDefaultBg:b,tagDefaultColor:i,tagIconSize:n-2*a,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[ee(r),Y(r),h(r,"success","Success"),h(r,"processing","Info"),h(r,"error","Error"),h(r,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,t){let{slots:l,emit:a,attrs:n}=t;const{prefixCls:o}=w("tag",e),[c,g]=F(o),b=r=>{const{checked:u}=e;a("update:checked",!u),a("change",!u),a("click",r)},i=y(()=>D(o.value,g.value,{[`${o.value}-checkable`]:!0,[`${o.value}-checkable-checked`]:e.checked}));return()=>{var r;return c(d("span",f(f({},n),{},{class:[i.value,n.class],onClick:b}),[(r=l.default)===null||r===void 0?void 0:r.call(l)]))}}}),S=le,ae=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:P.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:J(),"onUpdate:visible":Function,icon:P.any,bordered:{type:Boolean,default:!0}}),C=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ae(),slots:Object,setup(e,t){let{slots:l,emit:a,attrs:n}=t;const{prefixCls:o,direction:c}=w("tag",e),[g,b]=F(o),i=X(!0);q(()=>{e.visible!==void 0&&(i.value=e.visible)});const r=s=>{s.stopPropagation(),a("update:visible",!1),a("close",s),!s.defaultPrevented&&e.visible===void 0&&(i.value=!1)},u=y(()=>G(e.color)||Q(e.color)),H=y(()=>D(o.value,b.value,{[`${o.value}-${e.color}`]:u.value,[`${o.value}-has-color`]:e.color&&!u.value,[`${o.value}-hidden`]:!i.value,[`${o.value}-rtl`]:c.value==="rtl",[`${o.value}-borderless`]:!e.bordered})),_=s=>{a("click",s)};return()=>{var s,v,p;const{icon:A=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:m,closeIcon:$=(v=l.closeIcon)===null||v===void 0?void 0:v.call(l),closable:k=!1}=e,M=()=>k?$?d("span",{class:`${o.value}-close-icon`,onClick:r},[$]):d(K,{class:`${o.value}-close-icon`,onClick:r},null):null,E={backgroundColor:m&&!u.value?m:void 0},I=A||null,T=(p=l.default)===null||p===void 0?void 0:p.call(l),N=I?d(V,null,[I,d("span",null,[T])]):T,L=e.onClick!==void 0,x=d("span",f(f({},n),{},{onClick:_,class:[H.value,n.class],style:[E,n.style]}),[N,M()]);return g(L?d(Z,null,{default:()=>[x]}):x)}}});C.CheckableTag=S;C.install=function(e){return e.component(C.name,C),e.component(S.name,S),e};const re=C;export{re as A,S as C};
//# sourceMappingURL=index.e300b0a9.js.map
