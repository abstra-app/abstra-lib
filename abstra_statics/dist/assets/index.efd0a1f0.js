import{a1 as f,a2 as b,a3 as y,U as n,a4 as i,a5 as S,a6 as h,a7 as z,a8 as g,a9 as C}from"./index.9a84bd2b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="7e029292-1c71-45b0-b3bd-ca045bcb9f24",o._sentryDebugIdIdentifier="sentry-dbid-7e029292-1c71-45b0-b3bd-ca045bcb9f24")}catch{}})();const l=(o,e)=>new f(o).setAlpha(e).toRgbString(),c=(o,e)=>new f(o).lighten(e).toHexString(),B=o=>{const e=b(o,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},M=(o,e)=>{const r=o||"#000",t=e||"#fff";return{colorBgBase:r,colorTextBase:t,colorText:l(t,.85),colorTextSecondary:l(t,.65),colorTextTertiary:l(t,.45),colorTextQuaternary:l(t,.25),colorFill:l(t,.18),colorFillSecondary:l(t,.12),colorFillTertiary:l(t,.08),colorFillQuaternary:l(t,.04),colorBgElevated:c(r,12),colorBgContainer:c(r,8),colorBgLayout:c(r,0),colorBgSpotlight:c(r,26),colorBorder:c(r,26),colorBorderSecondary:c(r,19)}},p=(o,e)=>{const r=Object.keys(y).map(s=>{const a=b(o[s],{theme:"dark"});return new Array(10).fill(1).reduce((d,A,u)=>(d[`${s}-${u+1}`]=a[u],d),{})}).reduce((s,a)=>(s=n(n({},s),a),s),{}),t=e!=null?e:i(o);return n(n(n({},t),r),S(o,{generateColorPalettes:B,generateNeutralColorPalettes:M}))},v=p;function w(o){const{sizeUnit:e,sizeStep:r}=o,t=r-2;return{sizeXXL:e*(t+10),sizeXL:e*(t+6),sizeLG:e*(t+2),sizeMD:e*(t+2),sizeMS:e*(t+1),size:e*t,sizeSM:e*t,sizeXS:e*(t-1),sizeXXS:e*(t-1)}}const x=(o,e)=>{const r=e!=null?e:i(o),t=r.fontSizeSM,s=r.controlHeight-4;return n(n(n(n(n({},r),w(e!=null?e:o)),z(t)),{controlHeight:s}),h(n(n({},r),{controlHeight:s})))},T=x;function m(){const[o,e,r]=C();return{theme:o,token:e,hashId:r}}const X={defaultConfig:g,defaultSeed:g.token,useToken:m,defaultAlgorithm:i,darkAlgorithm:v,compactAlgorithm:T};export{X as t};
//# sourceMappingURL=index.efd0a1f0.js.map
