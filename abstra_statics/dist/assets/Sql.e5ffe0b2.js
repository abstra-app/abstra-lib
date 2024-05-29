import{f as u,eK as S,d as w,eG as x,L as I,z as C,r as i,o as q,b as E,ey as P,w as p,u as d,e as R,bI as k,au as B,cI as L,cA as _,E as j}from"./outputWidgets.e2ed3ff5.js";import{e as A}from"./toggleHighContrast.0a6faaa1.js";import"./router.a09506b3.js";import"./index.5500a325.js";import{P as D}from"./project.6921da02.js";import{A as Q}from"./index.91914483.js";import"./popupNotifcation.d3f5b3fe.js";import"./record.c2b8598b.js";import"./pubsub.c137a732.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6a54eac9-f4a6-4e73-9ecb-25783d8d1133",e._sentryDebugIdIdentifier="sentry-dbid-6a54eac9-f4a6-4e73-9ecb-25783d8d1133")}catch{}})();var V={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const N=V;function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){z(e,a,n[a])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(t,n){var r=v({},t,n.attrs);return u(S,v({},r,{icon:N}),null)};m.displayName="CaretRightOutlined";m.inheritAttrs=!1;const M=m;function $(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=String(e[n]));return t}const F={class:"container"},T=w({__name:"Sql",setup(e){const n=x().params.projectId,r=new I(C.string(),"lastQuery"),a=i(null),c=i(""),g=i([]),y=i([]),b=i([]),h=async()=>{const o=await D.executeQuery(n,c.value,[]);if(r.set(c.value),!o)return;const{returns:s,errors:f}=o;b.value=f;for(const l of f)_.error({message:"SQL Execution Failed",description:l});f.length||_.success({message:"SQL Execution Succeeded"}),y.value=s.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),g.value=s.result.map((l,O)=>$({key:`${O+1}`,...l}))};return q(()=>{const o=A.create(a.value,{language:"sql",value:c.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{c.value=o.getValue()});const s=r.get();s&&(c.value=s,o.setValue(s))}),(o,s)=>(E(),P("div",F,[u(d(Q),{gap:"large",class:"sql-container",align:"center"},{default:p(()=>[R("div",{ref_key:"sqlEditor",ref:a,class:"sql-editor"},null,512),u(d(k),{type:"primary",onClick:h},{icon:p(()=>[u(d(M))]),default:p(()=>[B(" Run ")]),_:1})]),_:1}),u(d(L),{style:{width:"100%"},scroll:{x:100},"data-source":g.value,columns:y.value},null,8,["data-source","columns"])]))}});const ee=j(T,[["__scopeId","data-v-cdc1d7a6"]]);export{ee as default};
//# sourceMappingURL=Sql.e5ffe0b2.js.map
