import{a1 as f,a2 as y,a3 as S,U as n,a4 as i,a5 as h,a6 as b,a7 as z,a8 as g,a9 as C}from"./index.9f6b07f8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="87c86b9f-dcfc-469b-9260-38d391e8f6cb",o._sentryDebugIdIdentifier="sentry-dbid-87c86b9f-dcfc-469b-9260-38d391e8f6cb")}catch{}})();const c=(o,e)=>new f(o).setAlpha(e).toRgbString(),l=(o,e)=>new f(o).lighten(e).toHexString(),B=o=>{const e=y(o,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},M=(o,e)=>{const r=o||"#000",t=e||"#fff";return{colorBgBase:r,colorTextBase:t,colorText:c(t,.85),colorTextSecondary:c(t,.65),colorTextTertiary:c(t,.45),colorTextQuaternary:c(t,.25),colorFill:c(t,.18),colorFillSecondary:c(t,.12),colorFillTertiary:c(t,.08),colorFillQuaternary:c(t,.04),colorBgElevated:l(r,12),colorBgContainer:l(r,8),colorBgLayout:l(r,0),colorBgSpotlight:l(r,26),colorBorder:l(r,26),colorBorderSecondary:l(r,19)}},p=(o,e)=>{const r=Object.keys(S).map(s=>{const a=y(o[s],{theme:"dark"});return new Array(10).fill(1).reduce((d,A,u)=>(d[`${s}-${u+1}`]=a[u],d),{})}).reduce((s,a)=>(s=n(n({},s),a),s),{}),t=e!=null?e:i(o);return n(n(n({},t),r),h(o,{generateColorPalettes:B,generateNeutralColorPalettes:M}))},v=p;function w(o){const{sizeUnit:e,sizeStep:r}=o,t=r-2;return{sizeXXL:e*(t+10),sizeXL:e*(t+6),sizeLG:e*(t+2),sizeMD:e*(t+2),sizeMS:e*(t+1),size:e*t,sizeSM:e*t,sizeXS:e*(t-1),sizeXXS:e*(t-1)}}const x=(o,e)=>{const r=e!=null?e:i(o),t=r.fontSizeSM,s=r.controlHeight-4;return n(n(n(n(n({},r),w(e!=null?e:o)),z(t)),{controlHeight:s}),b(n(n({},r),{controlHeight:s})))},T=x;function m(){const[o,e,r]=C();return{theme:o,token:e,hashId:r}}const X={defaultConfig:g,defaultSeed:g.token,useToken:m,defaultAlgorithm:i,darkAlgorithm:v,compactAlgorithm:T};export{X as t};
//# sourceMappingURL=index.82fdaa86.js.map
