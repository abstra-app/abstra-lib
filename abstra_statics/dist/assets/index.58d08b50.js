import{ad as S,ae as w,U as s,ap as y,af as z,d as C,ai as M,f as d,aD as I,b as c,al as u}from"./index.fc84014a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d15107ae-5e97-4649-9e7b-35becf598ef3",e._sentryDebugIdIdentifier="sentry-dbid-d15107ae-5e97-4649-9e7b-35becf598ef3")}catch{}})();const D=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=e;return{[t]:s(s({},y(e)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:o}}})}},B=S("Divider",e=>{const t=w(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[D(t)]},{sizePaddingEdgeHorizontal:0}),E=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),G=C({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:E(),setup(e,t){let{slots:o,attrs:r}=t;const{prefixCls:i,direction:b}=M("divider",e),[v,f]=B(i),g=d(()=>e.orientation==="left"&&e.orientationMargin!=null),h=d(()=>e.orientation==="right"&&e.orientationMargin!=null),p=d(()=>{const{type:n,dashed:l,plain:x}=e,a=i.value;return{[a]:!0,[f.value]:!!f.value,[`${a}-${n}`]:!0,[`${a}-dashed`]:!!l,[`${a}-plain`]:!!x,[`${a}-rtl`]:b.value==="rtl",[`${a}-no-default-orientation-margin-left`]:g.value,[`${a}-no-default-orientation-margin-right`]:h.value}}),$=d(()=>{const n=typeof e.orientationMargin=="number"?`${e.orientationMargin}px`:e.orientationMargin;return s(s({},g.value&&{marginLeft:n}),h.value&&{marginRight:n})}),m=d(()=>e.orientation.length>0?"-"+e.orientation:e.orientation);return()=>{var n;const l=I((n=o.default)===null||n===void 0?void 0:n.call(o));return v(c("div",u(u({},r),{},{class:[p.value,l.length?`${i.value}-with-text ${i.value}-with-text${m.value}`:"",r.class],role:"separator"}),[l.length?c("span",{class:`${i.value}-inner-text`,style:$.value},[l]):null]))}}}),W=z(G);export{W as A};
//# sourceMappingURL=index.58d08b50.js.map
