import{V as t,d6 as d,e7 as b,ak as y,B as h,d as f,N as S,f as x,R as c,O as v}from"./outputWidgets.c8053a9d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="5c2a7ca8-c184-4416-9467-32c65d235a6e",e._sentryDebugIdIdentifier="sentry-dbid-5c2a7ca8-c184-4416-9467-32c65d235a6e")}catch{}})();const T=(e,o,i,r)=>{const{sizeMarginHeadingVerticalEnd:n,fontWeightStrong:a}=r;return{marginBottom:n,color:i,fontWeight:a,fontSize:e,lineHeight:o}},w=e=>{const o=[1,2,3,4,5],i={};return o.forEach(r=>{i[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `]=T(e[`fontSizeHeading${r}`],e[`lineHeightHeading${r}`],e.colorTextHeading,e)}),i},$=e=>{const{componentCls:o}=e;return{"a&, a":t(t({},d(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},I=()=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:b[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),D=e=>{const{componentCls:o}=e,r=y(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-r,marginBottom:`calc(1em - ${r}px)`},[`${o}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},C=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),B=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),E=e=>{const{componentCls:o,sizeMarginHeadingVerticalStart:i}=e;return{[o]:t(t(t(t(t(t(t(t(t({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${o}-secondary`]:{color:e.colorTextDescription},[`&${o}-success`]:{color:e.colorSuccess},[`&${o}-warning`]:{color:e.colorWarning},[`&${o}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},w(e)),{[`
      & + h1${o},
      & + h2${o},
      & + h3${o},
      & + h4${o},
      & + h5${o}
      `]:{marginTop:i},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:i}}}),I()),$(e)),{[`
        ${o}-expand,
        ${o}-edit,
        ${o}-copy
      `]:t(t({},d(e)),{marginInlineStart:e.marginXXS})}),D(e)),C(e)),B()),{"&-rtl":{direction:"rtl"}})}},_=h("Typography",e=>[E(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"});var H=globalThis&&globalThis.__rest||function(e,o){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]]);return i};const O=()=>({prefixCls:String,direction:String,component:String}),z=f({name:"ATypography",inheritAttrs:!1,props:O(),setup(e,o){let{slots:i,attrs:r}=o;const{prefixCls:n,direction:a}=S("typography",e),[p,g]=_(n);return()=>{var l;const s=t(t({},e),r),{prefixCls:W,direction:V,component:m="article"}=s,u=H(s,["prefixCls","direction","component"]);return p(x(m,c(c({},u),{},{class:v(n.value,{[`${n.value}-rtl`]:a.value==="rtl"},r.class,g.value)}),{default:()=>[(l=i.default)===null||l===void 0?void 0:l.call(i)]}))}}}),M=z;export{M as T,_ as u};
//# sourceMappingURL=Typography.e5f51e32.js.map
