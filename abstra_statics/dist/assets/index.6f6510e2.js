import{B as W,D as L,dz as O,ax as j,U as P,Z as U,d as D,N as w,H as y,O as k,f as d,R as b,F as X,a_ as V,ay as Z,dA as q,bu as G,c2 as J,a5 as z,d7 as K,ah as Q}from"./registerWidgets.53633c61.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ca5eb0ce-b16c-413a-abf5-3dacfe752501",e._sentryDebugIdIdentifier="sentry-dbid-ca5eb0ce-b16c-413a-abf5-3dacfe752501")}catch{}})();const C=(e,t,o)=>{const a=O(o);return{[`${e.componentCls}-${t}`]:{color:e[`color${o}`],background:e[`color${a}Bg`],borderColor:e[`color${a}Border`]}}},Y=e=>j(e,(t,o)=>{let{textColor:a,lightBorderColor:n,lightColor:l,darkColor:r}=o;return{[`${e.componentCls}-${t}`]:{color:a,background:l,borderColor:n,"&-inverse":{color:e.colorTextLightSolid,background:r,borderColor:r}}}}),ee=e=>{const{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:a,componentCls:n}=e,l=a-o,r=t-o;return{[n]:P(P({},U(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${n}-close-icon`]:{marginInlineStart:r,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}})}},B=W("Tag",e=>{const{fontSize:t,lineHeight:o,lineWidth:a,fontSizeIcon:n}=e,l=Math.round(t*o),r=e.fontSizeSM,g=l-a*2,f=e.colorFillAlter,s=e.colorText,c=L(e,{tagFontSize:r,tagLineHeight:g,tagDefaultBg:f,tagDefaultColor:s,tagIconSize:n-2*a,tagPaddingHorizontal:8});return[ee(c),Y(c),C(c,"success","Success"),C(c,"processing","Info"),C(c,"error","Error"),C(c,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=D({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,t){let{slots:o,emit:a,attrs:n}=t;const{prefixCls:l}=w("tag",e),[r,g]=B(l),f=c=>{const{checked:u}=e;a("update:checked",!u),a("change",!u),a("click",c)},s=y(()=>k(l.value,g.value,{[`${l.value}-checkable`]:!0,[`${l.value}-checkable-checked`]:e.checked}));return()=>{var c;return r(d("span",b(b({},n),{},{class:s.value,onClick:f}),[(c=o.default)===null||c===void 0?void 0:c.call(o)]))}}}),S=le,ae=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:z.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:K(),"onUpdate:visible":Function,icon:z.any}),h=D({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ae(),slots:Object,setup(e,t){let{slots:o,emit:a,attrs:n}=t;const{prefixCls:l,direction:r}=w("tag",e),[g,f]=B(l),s=X(!0);V(()=>{e.visible!==void 0&&(s.value=e.visible)});const c=i=>{i.stopPropagation(),a("update:visible",!1),a("close",i),!i.defaultPrevented&&e.visible===void 0&&(s.value=!1)},u=y(()=>Z(e.color)||q(e.color)),F=y(()=>k(l.value,f.value,{[`${l.value}-${e.color}`]:u.value,[`${l.value}-has-color`]:e.color&&!u.value,[`${l.value}-hidden`]:!s.value,[`${l.value}-rtl`]:r.value==="rtl"})),H=i=>{a("click",i)};return()=>{var i,v,p;const{icon:_=(i=o.icon)===null||i===void 0?void 0:i.call(o),color:m,closeIcon:$=(v=o.closeIcon)===null||v===void 0?void 0:v.call(o),closable:A=!1}=e,M=()=>A?$?d("span",{class:`${l.value}-close-icon`,onClick:c},[$]):d(Q,{class:`${l.value}-close-icon`,onClick:c},null):null,N={backgroundColor:m&&!u.value?m:void 0},I=_||null,T=(p=o.default)===null||p===void 0?void 0:p.call(o),E=I?d(G,null,[I,d("span",null,[T])]):T,R=e.onClick!==void 0,x=d("span",b(b({},n),{},{onClick:H,class:[F.value,n.class],style:[N,n.style]}),[E,M()]);return g(R?d(J,null,{default:()=>[x]}):x)}}});h.CheckableTag=S;h.install=function(e){return e.component(h.name,h),e.component(S.name,S),e};const ce=h;export{ce as A,S as C};
//# sourceMappingURL=index.6f6510e2.js.map
