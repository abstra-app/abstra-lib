import{f as u,eG as I,d as q,eA as x,r as i,o as k,S as v,b as p,eu as g,w as f,u as c,c as A,ew as B,e as w,bE as D,aq as h,aC as E,eB as P,eD as R,cE as V,eE as j,eF as N,v as F}from"./outputWidgets.5cb6b216.js";import"./router.3aca6a3e.js";import"./index.6b54af25.js";import{P as L}from"./project.48735e99.js";import{e as M}from"./toggleHighContrast.fa1fbf4d.js";import{A as Q}from"./index.bd13b177.js";import{A as $}from"./index.0e086e80.js";import"./Form.d3a832dd.js";import"./hasIn.65bf4776.js";import"./popupNotifcation.f2c3d4bb.js";import"./index.cf4c23b9.js";import"./record.13b786ed.js";import"./pubsub.90b2bde9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6139c9d9-1dac-4115-b564-27e896b60bdd",e._sentryDebugIdIdentifier="sentry-dbid-6139c9d9-1dac-4115-b564-27e896b60bdd")}catch{}})();var z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const T=z;function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){G(e,r,a[r])})}return e}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(t,a){var n=S({},t,a.attrs);return u(I,S({},n,{icon:T}),null)};b.displayName="CaretRightOutlined";b.inheritAttrs=!1;const H=b;function J(e){const t={};for(const a in e)e.hasOwnProperty(a)&&(t[a]=String(e[a]));return t}const U=e=>(j("data-v-29bbdaa2"),e=e(),N(),e),W={class:"container"},X=U(()=>w("br",null,null,-1)),Y=q({__name:"Sql",setup(e){const a=x().params.projectId,n=i(null),r=i(""),_=i([]),y=i([]),m=i([]),O=async()=>{const o=await L.executeQuery(a,r.value,[]);if(v.set("lastQuery",r.value),!o)return;const{returns:s,errors:d}=o;m.value=d,y.value=s.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),_.value=s.result.map((l,C)=>J({key:`${C+1}`,...l}))};return k(()=>{const o=M.create(n.value,{language:"sql",value:r.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{r.value=o.getValue()});const s=v.get("lastQuery");s&&(r.value=s,o.setValue(s))}),(o,s)=>(p(),g("div",W,[u(c(Q),{gap:"large",class:"sql-container",align:"center"},{default:f(()=>[w("div",{ref_key:"sqlEditor",ref:n,class:"sql-editor"},null,512),u(c(D),{type:"primary",onClick:O},{icon:f(()=>[u(c(H))]),default:f(()=>[h(" Run ")]),_:1})]),_:1}),m.value.length?(p(),A(c($),{key:0,type:"error","show-icon":""},{message:f(()=>[(p(!0),g(E,null,P(m.value,d=>(p(),g("span",{key:d},[h(R(d)+" ",1),X]))),128))]),_:1})):B("",!0),u(c(V),{style:{width:"100%"},scroll:{x:100},"data-source":_.value,columns:y.value},null,8,["data-source","columns"])]))}});const de=F(Y,[["__scopeId","data-v-29bbdaa2"]]);export{de as default};
//# sourceMappingURL=Sql.162e4a5d.js.map
