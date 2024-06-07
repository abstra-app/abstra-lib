import{f as u,f5 as S,d as w,f1 as x,L as C,z as q,r as i,o as I,b as E,eV as P,w as p,u as d,e as R,bF as k,am as B,cY as L,cJ as V,cz as _,E as j}from"./outputWidgets.4fd444bf.js";import{e as D}from"./toggleHighContrast.748df3c4.js";import"./gateway.34fb6950.js";import"./index.41912825.js";import{P as Q}from"./project.ad0c8aed.js";import"./popupNotifcation.aa73044a.js";import"./record.49e1927c.js";import"./pubsub.6a2205fa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc5b1b9-6c5c-4a5a-8d60-ba2bb12c5659",e._sentryDebugIdIdentifier="sentry-dbid-cdc5b1b9-6c5c-4a5a-8d60-ba2bb12c5659")}catch{}})();var z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const N=z;function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),a.forEach(function(r){A(e,r,n[r])})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(t,n){var a=y({},t,n.attrs);return u(S,y({},a,{icon:N}),null)};m.displayName="CaretRightOutlined";m.inheritAttrs=!1;const F=m;function M(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=String(e[n]));return t}const $={class:"container"},T=w({__name:"Sql",setup(e){const n=x().params.projectId,a=new C(q.string(),"lastQuery"),r=i(null),l=i(""),g=i([]),b=i([]),v=i([]),h=async()=>{const o=await Q.executeQuery(n,l.value,[]);if(a.set(l.value),!o)return;const{returns:s,errors:f}=o;v.value=f;for(const c of f)_.error({message:"SQL Execution Failed",description:c});f.length||_.success({message:"SQL Execution Succeeded"}),b.value=s.fields.map(c=>({title:c.name,key:c.name,dataIndex:c.name})),g.value=s.result.map((c,O)=>M({key:`${O+1}`,...c}))};return I(()=>{const o=D.create(r.value,{language:"sql",value:l.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{l.value=o.getValue()});const s=a.get();s&&(l.value=s,o.setValue(s))}),(o,s)=>(E(),P("div",$,[u(d(L),{gap:"large",class:"sql-container",align:"center"},{default:p(()=>[R("div",{ref_key:"sqlEditor",ref:r,class:"sql-editor"},null,512),u(d(k),{type:"primary",onClick:h},{icon:p(()=>[u(d(F))]),default:p(()=>[B(" Run ")]),_:1})]),_:1}),u(d(V),{style:{width:"100%"},scroll:{x:100},"data-source":g.value,columns:b.value},null,8,["data-source","columns"])]))}});const K=j(T,[["__scopeId","data-v-cdc1d7a6"]]);export{K as default};
//# sourceMappingURL=Sql.400b843a.js.map
