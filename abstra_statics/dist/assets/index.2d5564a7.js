import{a0 as f,a1 as S,a2 as y,S as n,a3 as c,a4 as h,a5 as z,a6 as C,a7 as g,a8 as b}from"./vue-router.81670790.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="d3dea7ed-6d0d-4f89-8f58-5ddd1dd035ee",o._sentryDebugIdIdentifier="sentry-dbid-d3dea7ed-6d0d-4f89-8f58-5ddd1dd035ee")}catch{}})();const l=(o,e)=>new f(o).setAlpha(e).toRgbString(),a=(o,e)=>new f(o).lighten(e).toHexString(),B=o=>{const e=S(o,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},M=(o,e)=>{const r=o||"#000",t=e||"#fff";return{colorBgBase:r,colorTextBase:t,colorText:l(t,.85),colorTextSecondary:l(t,.65),colorTextTertiary:l(t,.45),colorTextQuaternary:l(t,.25),colorFill:l(t,.18),colorFillSecondary:l(t,.12),colorFillTertiary:l(t,.08),colorFillQuaternary:l(t,.04),colorBgElevated:a(r,12),colorBgContainer:a(r,8),colorBgLayout:a(r,0),colorBgSpotlight:a(r,26),colorBorder:a(r,26),colorBorderSecondary:a(r,19)}},p=(o,e)=>{const r=Object.keys(y).map(s=>{const d=S(o[s],{theme:"dark"});return new Array(10).fill(1).reduce((i,A,u)=>(i[`${s}-${u+1}`]=d[u],i),{})}).reduce((s,d)=>(s=n(n({},s),d),s),{}),t=e!=null?e:c(o);return n(n(n({},t),r),h(o,{generateColorPalettes:B,generateNeutralColorPalettes:M}))},v=p;function w(o){const{sizeUnit:e,sizeStep:r}=o,t=r-2;return{sizeXXL:e*(t+10),sizeXL:e*(t+6),sizeLG:e*(t+2),sizeMD:e*(t+2),sizeMS:e*(t+1),size:e*t,sizeSM:e*t,sizeXS:e*(t-1),sizeXXS:e*(t-1)}}const x=(o,e)=>{const r=e!=null?e:c(o),t=r.fontSizeSM,s=r.controlHeight-4;return n(n(n(n(n({},r),w(e!=null?e:o)),C(t)),{controlHeight:s}),z(n(n({},r),{controlHeight:s})))},T=x;function m(){const[o,e,r]=b();return{theme:o,token:e,hashId:r}}const X={defaultConfig:g,defaultSeed:g.token,useToken:m,defaultAlgorithm:c,darkAlgorithm:v,compactAlgorithm:T};export{X as t};
//# sourceMappingURL=index.2d5564a7.js.map
