import{f as o,f5 as k,d as D,f1 as P,L as R,z as V,r as u,o as j,b as B,eV as L,w as d,u as c,e as N,bF as w,am as x,cY as b,cJ as Q,cz as S,E as z}from"./outputWidgets.762923b6.js";import{d as $}from"./utils.c1a51547.js";import{G as A}from"./PhDownloadSimple.vue.46a41638.js";import{e as F}from"./toggleHighContrast.059ce8b2.js";import"./gateway.6c4fed37.js";import"./index.5f6c1ccf.js";import{P as M}from"./project.b0351f9d.js";import"./popupNotifcation.a288624c.js";import"./record.ac9412c3.js";import"./pubsub.fdea85b7.js";import"./string.a08f3e31.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c63230f2-c8ab-4fa5-a1fd-6e73462475c5",e._sentryDebugIdIdentifier="sentry-dbid-c63230f2-c8ab-4fa5-a1fd-6e73462475c5")}catch{}})();var T={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const G=T;function O(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),s.forEach(function(i){H(e,i,a[i])})}return e}function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(t,a){var s=O({},t,a.attrs);return o(k,O({},s,{icon:G}),null)};h.displayName="CaretRightOutlined";h.inheritAttrs=!1;const J=h;function Y(e){const t={};for(const a in e)e.hasOwnProperty(a)&&(t[a]=String(e[a]));return t}const U={class:"container"},W=D({__name:"Sql",setup(e){const a=P().params.projectId,s=new R(V.string(),"lastQuery"),i=u(null),f=u(""),g=u([]),v=u([]),C=u([]),_=u(!1),I=async()=>{_.value=!0;const n=await M.executeQuery(a,f.value,[]);if(_.value=!1,s.set(f.value),!n)return;const{returns:r,errors:m}=n;C.value=m;for(const l of m)S.error({message:"SQL Execution Failed",description:l});m.length||S.success({message:"SQL Execution Succeeded"}),v.value=r.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),g.value=r.result.map((l,y)=>Y({key:`${y+1}`,...l}))},q=()=>{const n=v.value.map(p=>p.dataIndex),r=v.value.map(p=>p.title),m=g.value.map(p=>n.map(E=>p[E])),y=`data-${new Date().toISOString()}`;$({fileName:y,columns:r,rows:m})};return j(()=>{const n=F.create(i.value,{language:"sql",value:f.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});n.onDidChangeModelContent(()=>{f.value=n.getValue()});const r=s.get();r&&(f.value=r,n.setValue(r))}),(n,r)=>(B(),L("div",U,[o(c(b),{gap:"large",class:"sql-container",align:"center"},{default:d(()=>[N("div",{ref_key:"sqlEditor",ref:i,class:"sql-editor"},null,512),o(c(w),{type:"primary",loading:_.value,onClick:I},{icon:d(()=>[o(c(J))]),default:d(()=>[x(" Run ")]),_:1},8,["loading"])]),_:1}),o(c(b),{justify:"end",style:{margin:"30px 0 10px 0"}},{default:d(()=>[o(c(w),{disabled:!g.value.length,onClick:q},{default:d(()=>[o(c(b),{align:"center",gap:"small"},{default:d(()=>[x(" Export to CSV "),o(c(A))]),_:1})]),_:1},8,["disabled"])]),_:1}),o(c(Q),{style:{width:"100%"},scroll:{x:100},"data-source":g.value,columns:v.value},null,8,["data-source","columns"])]))}});const ce=z(W,[["__scopeId","data-v-9a10cfc4"]]);export{ce as default};
//# sourceMappingURL=Sql.d66277e2.js.map
