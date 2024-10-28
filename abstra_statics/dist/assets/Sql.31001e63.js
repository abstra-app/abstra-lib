import{b as c,eh as P,d as k,ed as D,L as E,N as _,e as m,W as N,X as R,w as g,u,o as B,a as L,bP as x,aF as S,dd as h,cU as V,cI as I,$}from"./vue-router.f6e8075d.js";import{d as z}from"./utils.339b1d01.js";import{G as A}from"./PhDownloadSimple.vue.6b6efeaf.js";import{e as F}from"./toggleHighContrast.fc336053.js";import"./gateway.b28e7643.js";import{P as M}from"./project.fbd63698.js";import"./tables.b2772c4b.js";import"./popupNotifcation.5277fb28.js";import"./record.8e60bb52.js";import"./string.67079344.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="f81021f6-933c-4bfc-a30c-1c28729c502e",t._sentryDebugIdIdentifier="sentry-dbid-f81021f6-933c-4bfc-a30c-1c28729c502e")}catch{}})();var T={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const G=T;function O(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?Object(arguments[a]):{},s=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable}))),s.forEach(function(d){H(t,d,e[d])})}return t}function H(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var w=function(a,e){var s=O({},a,e.attrs);return c(P,O({},s,{icon:G}),null)};w.displayName="CaretRightOutlined";w.inheritAttrs=!1;const J=w;function U(t){const a={};for(const e in t)if(t.hasOwnProperty(e)){if(typeof t[e]=="object"&&t[e]!==null){a[e]=JSON.stringify(t[e]);continue}a[e]=String(t[e])}return a}const W={class:"container"},X=k({__name:"Sql",setup(t){const e=D().params.projectId,s=new E(_.array(_.object({projectId:_.string(),lastQuery:_.string()})),"lastQueries"),d=m(null),f=m(""),v=m([]),y=m([]),C=m([]),b=m(!1),Q=async()=>{b.value=!0;const o=await M.executeQuery(e,f.value,[]);b.value=!1;const r=s.get();if(!r)s.set([{projectId:e,lastQuery:f.value}]);else{const n=r.findIndex(l=>l.projectId===e);n===-1?r.push({projectId:e,lastQuery:f.value}):r[n].lastQuery=f.value,s.set(r)}if(!o)return;const{returns:p,errors:i}=o;C.value=i;for(const n of i)I.error({message:"SQL Execution Failed",description:n});i.length||I.success({message:"SQL Execution Succeeded"}),y.value=p.fields.map(n=>({title:n.name,key:n.name,dataIndex:n.name})),v.value=p.result.map((n,l)=>U({key:`${l+1}`,...n}))},q=()=>{const o=y.value.map(l=>l.dataIndex),r=y.value.map(l=>l.title),p=v.value.map(l=>o.map(j=>l[j])),n=`data-${new Date().toISOString()}`;z({fileName:n,columns:r,rows:p})};return N(()=>{var p;const o=F.create(d.value,{language:"sql",value:f.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{f.value=o.getValue()});const r=s.get();if(r){const i=(p=r.find(n=>n.projectId===e))==null?void 0:p.lastQuery;i&&(f.value=i,o.setValue(i))}}),(o,r)=>(B(),R("div",W,[c(u(h),{gap:"large",class:"sql-container",align:"center"},{default:g(()=>[L("div",{ref_key:"sqlEditor",ref:d,class:"sql-editor"},null,512),c(u(x),{type:"primary",loading:b.value,onClick:Q},{icon:g(()=>[c(u(J))]),default:g(()=>[S(" Run ")]),_:1},8,["loading"])]),_:1}),c(u(h),{justify:"end",style:{margin:"30px 0 10px 0"}},{default:g(()=>[c(u(x),{disabled:!v.value.length,onClick:q},{default:g(()=>[c(u(h),{align:"center",gap:"small"},{default:g(()=>[S(" Export to CSV "),c(u(A))]),_:1})]),_:1},8,["disabled"])]),_:1}),c(u(V),{style:{width:"100%"},scroll:{x:100},"data-source":v.value,columns:y.value},null,8,["data-source","columns"])]))}});const le=$(X,[["__scopeId","data-v-a8dc12c0"]]);export{le as default};
//# sourceMappingURL=Sql.31001e63.js.map
