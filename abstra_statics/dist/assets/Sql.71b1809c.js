import{f as u,eK as S,d as w,eG as x,L as I,z as C,r as i,o as q,b as E,ey as P,w as p,u as d,e as R,bI as k,au as B,cI as L,cA as y,E as j}from"./outputWidgets.bf420cfc.js";import{e as A}from"./toggleHighContrast.c068e62e.js";import"./router.ed9d6605.js";import"./index.4c775618.js";import{P as D}from"./project.3dff758f.js";import{A as Q}from"./index.e4f3e62e.js";import"./Form.047bc96f.js";import"./hasIn.465ef8c2.js";import"./popupNotifcation.89d9ec45.js";import"./record.80621348.js";import"./pubsub.a5d3a405.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="92b79653-9b8b-4c16-974d-c6e6d91acb05",e._sentryDebugIdIdentifier="sentry-dbid-92b79653-9b8b-4c16-974d-c6e6d91acb05")}catch{}})();var V={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const N=V;function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){z(e,a,n[a])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(t,n){var r=_({},t,n.attrs);return u(S,_({},r,{icon:N}),null)};m.displayName="CaretRightOutlined";m.inheritAttrs=!1;const M=m;function $(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=String(e[n]));return t}const F={class:"container"},T=w({__name:"Sql",setup(e){const n=x().params.projectId,r=new I(C.string(),"lastQuery"),a=i(null),l=i(""),g=i([]),b=i([]),v=i([]),h=async()=>{const o=await D.executeQuery(n,l.value,[]);if(r.set(l.value),!o)return;const{returns:s,errors:f}=o;v.value=f;for(const c of f)y.error({message:"SQL Execution Failed",description:c});f.length||y.success({message:"SQL Execution Succeeded"}),b.value=s.fields.map(c=>({title:c.name,key:c.name,dataIndex:c.name})),g.value=s.result.map((c,O)=>$({key:`${O+1}`,...c}))};return q(()=>{const o=A.create(a.value,{language:"sql",value:l.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{l.value=o.getValue()});const s=r.get();s&&(l.value=s,o.setValue(s))}),(o,s)=>(E(),P("div",F,[u(d(Q),{gap:"large",class:"sql-container",align:"center"},{default:p(()=>[R("div",{ref_key:"sqlEditor",ref:a,class:"sql-editor"},null,512),u(d(k),{type:"primary",onClick:h},{icon:p(()=>[u(d(M))]),default:p(()=>[B(" Run ")]),_:1})]),_:1}),u(d(L),{style:{width:"100%"},scroll:{x:100},"data-source":g.value,columns:b.value},null,8,["data-source","columns"])]))}});const ne=j(T,[["__scopeId","data-v-cdc1d7a6"]]);export{ne as default};
//# sourceMappingURL=Sql.71b1809c.js.map
