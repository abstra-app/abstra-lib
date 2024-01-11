import{z as U,B as Y,U as _,Z as q,D as J,be as K,d as ee,L as oe,E as w,G as ne,N as te,f as a,bu as le,ac as ie,ap as se,b_ as ae,bj as ce,c1 as re,Q as R,c0 as de,bv as ue,cW as ge,bt as pe,by as fe,cX as me,cY as ve,cZ as $e,c_ as ye,a5 as v}from"./outputWidgets.26ad1119.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e5013259-9932-4cc7-9902-9b274b94c2c3",e._sentryDebugIdIdentifier="sentry-dbid-e5013259-9932-4cc7-9902-9b274b94c2c3")}catch{}})();const B=(e,o,n,i,s)=>({backgroundColor:e,border:`${i.lineWidth}px ${i.lineType} ${o}`,[`${s}-icon`]:{color:n}}),be=e=>{const{componentCls:o,motionDurationSlow:n,marginXS:i,marginSM:s,fontSize:u,fontSizeLG:c,lineHeight:g,borderRadiusLG:$,motionEaseInOutCirc:r,alertIconSizeLG:d,colorText:f,paddingContentVerticalSM:m,alertPaddingHorizontal:y,paddingMD:h,paddingContentHorizontalLG:C}=e;return{[o]:_(_({},q(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${y}px`,wordWrap:"break-word",borderRadius:$,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:i,lineHeight:0},["&-description"]:{display:"none",fontSize:u,lineHeight:g},"&-message":{color:f},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${r}, opacity ${n} ${r},
        padding-top ${n} ${r}, padding-bottom ${n} ${r},
        margin-bottom ${n} ${r}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",paddingInline:C,paddingBlock:h,[`${o}-icon`]:{marginInlineEnd:s,fontSize:d,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:i,color:f,fontSize:c},[`${o}-description`]:{display:"block"}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},he=e=>{const{componentCls:o,colorSuccess:n,colorSuccessBorder:i,colorSuccessBg:s,colorWarning:u,colorWarningBorder:c,colorWarningBg:g,colorError:$,colorErrorBorder:r,colorErrorBg:d,colorInfo:f,colorInfoBorder:m,colorInfoBg:y}=e;return{[o]:{"&-success":B(s,i,n,e,o),"&-info":B(y,m,f,e,o),"&-warning":B(g,c,u,e,o),"&-error":_(_({},B(d,r,$,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},Ce=e=>{const{componentCls:o,iconCls:n,motionDurationMid:i,marginXS:s,fontSizeIcon:u,colorIcon:c,colorIconHover:g}=e;return{[o]:{["&-action"]:{marginInlineStart:s},[`${o}-close-icon`]:{marginInlineStart:s,padding:0,overflow:"hidden",fontSize:u,lineHeight:`${u}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:c,transition:`color ${i}`,"&:hover":{color:g}}},"&-close-text":{color:c,transition:`color ${i}`,"&:hover":{color:g}}}}},Ie=e=>[be(e),he(e),Ce(e)],Se=U("Alert",e=>{const{fontSizeHeading3:o}=e,n=Y(e,{alertIconSizeLG:o,alertPaddingHorizontal:12});return[Ie(n)]}),xe={success:ue,info:ge,error:pe,warning:fe},we={success:me,info:ve,error:$e,warning:ye},Be=K("success","info","warning","error"),_e=()=>({type:v.oneOf(Be),closable:{type:Boolean,default:void 0},closeText:v.any,message:v.any,description:v.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:v.any,closeIcon:v.any,onClose:Function}),He=ee({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:_e(),setup(e,o){let{slots:n,emit:i,attrs:s,expose:u}=o;const{prefixCls:c,direction:g}=oe("alert",e),[$,r]=Se(c),d=w(!1),f=w(!1),m=w(),y=l=>{l.preventDefault();const p=m.value;p.style.height=`${p.offsetHeight}px`,p.style.height=`${p.offsetHeight}px`,d.value=!0,i("close",l)},h=()=>{var l;d.value=!1,f.value=!0,(l=e.afterClose)===null||l===void 0||l.call(e)},C=ne(()=>{const{type:l}=e;return l!==void 0?l:e.banner?"warning":"info"});u({animationEnd:h});const j=w({});return()=>{var l,p,H,T,E,z,A,D,L,O;const{banner:W,closeIcon:G=(l=n.closeIcon)===null||l===void 0?void 0:l.call(n)}=e;let{closable:F,showIcon:b}=e;const M=(p=e.closeText)!==null&&p!==void 0?p:(H=n.closeText)===null||H===void 0?void 0:H.call(n),I=(T=e.description)!==null&&T!==void 0?T:(E=n.description)===null||E===void 0?void 0:E.call(n),P=(z=e.message)!==null&&z!==void 0?z:(A=n.message)===null||A===void 0?void 0:A.call(n),S=(D=e.icon)!==null&&D!==void 0?D:(L=n.icon)===null||L===void 0?void 0:L.call(n),N=(O=n.action)===null||O===void 0?void 0:O.call(n);b=W&&b===void 0?!0:b;const k=(I?we:xe)[C.value]||null;M&&(F=!0);const t=c.value,V=te(t,{[`${t}-${C.value}`]:!0,[`${t}-closing`]:d.value,[`${t}-with-description`]:!!I,[`${t}-no-icon`]:!b,[`${t}-banner`]:!!W,[`${t}-closable`]:F,[`${t}-rtl`]:g.value==="rtl",[r.value]:!0}),X=F?a("button",{type:"button",onClick:y,class:`${t}-close-icon`,tabindex:0},[M?a("span",{class:`${t}-close-text`},[M]):G===void 0?a(le,null,null):G]):null,Z=S&&(ie(S)?se(S,{class:`${t}-icon`}):a("span",{class:`${t}-icon`},[S]))||a(k,{class:`${t}-icon`},null),Q=ae(`${t}-motion`,{appear:!1,css:!0,onAfterLeave:h,onBeforeLeave:x=>{x.style.maxHeight=`${x.offsetHeight}px`},onLeave:x=>{x.style.maxHeight="0px"}});return $(f.value?null:a(de,Q,{default:()=>[ce(a("div",R(R({role:"alert"},s),{},{style:[s.style,j.value],class:[s.class,V],"data-show":!d.value,ref:m}),[b?Z:null,a("div",{class:`${t}-content`},[P?a("div",{class:`${t}-message`},[P]):null,I?a("div",{class:`${t}-description`},[I]):null]),N?a("div",{class:`${t}-action`},[N]):null,X]),[[re,!d.value]])]}))}}}),Ee=J(He);export{Ee as A};
//# sourceMappingURL=index.bf23ff47.js.map
