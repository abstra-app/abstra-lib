import{a0 as f,a1 as S,a2 as y,S as n,a3 as i,a4 as h,a5 as z,a6 as b,a7 as g,a8 as C}from"./vue-router.4c412b7f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="afa8ee71-f236-4a3f-b055-5b57279ef096",o._sentryDebugIdIdentifier="sentry-dbid-afa8ee71-f236-4a3f-b055-5b57279ef096")}catch{}})();const a=(o,e)=>new f(o).setAlpha(e).toRgbString(),l=(o,e)=>new f(o).lighten(e).toHexString(),B=o=>{const e=S(o,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},M=(o,e)=>{const r=o||"#000",t=e||"#fff";return{colorBgBase:r,colorTextBase:t,colorText:a(t,.85),colorTextSecondary:a(t,.65),colorTextTertiary:a(t,.45),colorTextQuaternary:a(t,.25),colorFill:a(t,.18),colorFillSecondary:a(t,.12),colorFillTertiary:a(t,.08),colorFillQuaternary:a(t,.04),colorBgElevated:l(r,12),colorBgContainer:l(r,8),colorBgLayout:l(r,0),colorBgSpotlight:l(r,26),colorBorder:l(r,26),colorBorderSecondary:l(r,19)}},p=(o,e)=>{const r=Object.keys(y).map(s=>{const c=S(o[s],{theme:"dark"});return new Array(10).fill(1).reduce((d,A,u)=>(d[`${s}-${u+1}`]=c[u],d),{})}).reduce((s,c)=>(s=n(n({},s),c),s),{}),t=e!=null?e:i(o);return n(n(n({},t),r),h(o,{generateColorPalettes:B,generateNeutralColorPalettes:M}))},v=p;function w(o){const{sizeUnit:e,sizeStep:r}=o,t=r-2;return{sizeXXL:e*(t+10),sizeXL:e*(t+6),sizeLG:e*(t+2),sizeMD:e*(t+2),sizeMS:e*(t+1),size:e*t,sizeSM:e*t,sizeXS:e*(t-1),sizeXXS:e*(t-1)}}const x=(o,e)=>{const r=e!=null?e:i(o),t=r.fontSizeSM,s=r.controlHeight-4;return n(n(n(n(n({},r),w(e!=null?e:o)),b(t)),{controlHeight:s}),z(n(n({},r),{controlHeight:s})))},T=x;function m(){const[o,e,r]=C();return{theme:o,token:e,hashId:r}}const X={defaultConfig:g,defaultSeed:g.token,useToken:m,defaultAlgorithm:i,darkAlgorithm:v,compactAlgorithm:T};export{X as t};
//# sourceMappingURL=index.3599db2e.js.map
