import{z as X,B as q,ds as G,dd as Q,U as c,Z as V,d as D,L as F,G as $,N as H,f as d,Q as f,E as Z,aF as J,de as K,dt as Y,b8 as ee,dq as oe,a5 as z,d8 as ae,bg as le,D as ne,O as I,ab as re}from"./outputWidgets.4bfd26d4.js";import{R as te,B as _,a as N}from"./Base.e0f0653c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="2261d664-27b3-4e12-b058-2c5ed0a53b12",e._sentryDebugIdIdentifier="sentry-dbid-2261d664-27b3-4e12-b058-2c5ed0a53b12")}catch{}})();const C=(e,r,o)=>{const n=G(o);return{[`${e.componentCls}-${r}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},se=e=>Q(e,(r,o)=>{let{textColor:n,lightBorderColor:a,lightColor:l,darkColor:s}=o;return{[`${e.componentCls}-${r}`]:{color:n,background:l,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ce=e=>{const{paddingXXS:r,lineWidth:o,tagPaddingHorizontal:n,componentCls:a}=e,l=n-o,s=r-o;return{[a]:c(c({},V(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${a}-close-icon`]:{marginInlineStart:s,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${a}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},k=X("Tag",e=>{const{fontSize:r,lineHeight:o,lineWidth:n,fontSizeIcon:a}=e,l=Math.round(r*o),s=e.fontSizeSM,p=l-n*2,h=e.colorFillAlter,u=e.colorText,t=q(e,{tagFontSize:s,tagLineHeight:p,tagDefaultBg:h,tagDefaultColor:u,tagIconSize:a-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[ce(t),se(t),C(t,"success","Success"),C(t,"processing","Info"),C(t,"error","Error"),C(t,"warning","Warning")]}),ie=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),de=D({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:ie(),setup(e,r){let{slots:o,emit:n,attrs:a}=r;const{prefixCls:l}=F("tag",e),[s,p]=k(l),h=t=>{const{checked:g}=e;n("update:checked",!g),n("change",!g),n("click",t)},u=$(()=>H(l.value,p.value,{[`${l.value}-checkable`]:!0,[`${l.value}-checkable-checked`]:e.checked}));return()=>{var t;return s(d("span",f(f({},a),{},{class:[u.value,a.class],onClick:h}),[(t=o.default)===null||t===void 0?void 0:t.call(o)]))}}}),T=de,ue=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:z.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:ae(),"onUpdate:visible":Function,icon:z.any,bordered:{type:Boolean,default:!0}}),b=D({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ue(),slots:Object,setup(e,r){let{slots:o,emit:n,attrs:a}=r;const{prefixCls:l,direction:s}=F("tag",e),[p,h]=k(l),u=Z(!0);J(()=>{e.visible!==void 0&&(u.value=e.visible)});const t=i=>{i.stopPropagation(),n("update:visible",!1),n("close",i),!i.defaultPrevented&&e.visible===void 0&&(u.value=!1)},g=$(()=>K(e.color)||Y(e.color)),M=$(()=>H(l.value,h.value,{[`${l.value}-${e.color}`]:g.value,[`${l.value}-has-color`]:e.color&&!g.value,[`${l.value}-hidden`]:!u.value,[`${l.value}-rtl`]:s.value==="rtl",[`${l.value}-borderless`]:!e.bordered})),R=i=>{n("click",i)};return()=>{var i,m,S;const{icon:E=(i=o.icon)===null||i===void 0?void 0:i.call(o),color:P,closeIcon:x=(m=o.closeIcon)===null||m===void 0?void 0:m.call(o),closable:L=!1}=e,O=()=>L?x?d("span",{class:`${l.value}-close-icon`,onClick:t},[x]):d(le,{class:`${l.value}-close-icon`,onClick:t},null):null,W={backgroundColor:P&&!g.value?P:void 0},B=E||null,w=(S=o.default)===null||S===void 0?void 0:S.call(o),j=B?d(ee,null,[B,d("span",null,[w])]):w,U=e.onClick!==void 0,A=d("span",f(f({},a),{},{onClick:R,class:[M.value,a.class],style:[W,a.style]}),[j,O()]);return p(U?d(oe,null,{default:()=>[A]}):A)}}});b.CheckableTag=T;b.install=function(e){return e.component(b.name,b),e.component(T.name,T),e};const Ce=b,fe=ne(te),ge=()=>I(N(),["component"]),v=(e,r)=>{let{slots:o,attrs:n}=r;const a=c(c(c({},e),{component:"div"}),n);return d(_,a,o)};v.displayName="ATypographyParagraph";v.inheritAttrs=!1;v.props=ge();const ve=v,pe=()=>c(c({},I(N(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}}),y=(e,r)=>{let{slots:o,attrs:n}=r;const{ellipsis:a}=e;re();const l=c(c(c({},e),{ellipsis:a&&typeof a=="object"?I(a,["expandable","rows"]):a,component:"span"}),n);return d(_,l,o)};y.displayName="ATypographyText";y.inheritAttrs=!1;y.props=pe();const ye=y;export{fe as A,T as C,Ce as a,ve as b,ye as c};
//# sourceMappingURL=Text.451ebbbf.js.map
