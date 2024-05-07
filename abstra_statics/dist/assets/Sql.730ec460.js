import{f as u,eI as O,d as S,eE as x,L as C,z as I,r as i,o as q,b as E,ew as P,w as p,u as d,e as R,bG as k,as as B,cE as L,cw as y,x as j}from"./outputWidgets.9c06c589.js";import{e as D}from"./toggleHighContrast.796537b3.js";import"./router.4886e57c.js";import"./index.11d4c281.js";import{P as Q}from"./project.23b78de7.js";import{A as V}from"./index.0b97b635.js";import"./Form.86a8877a.js";import"./hasIn.ce096b19.js";import"./popupNotifcation.5a5ac836.js";import"./record.4b11bf5e.js";import"./pubsub.7c0987a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4974821d-5286-4d29-a43d-83cd942cd5e8",e._sentryDebugIdIdentifier="sentry-dbid-4974821d-5286-4d29-a43d-83cd942cd5e8")}catch{}})();var A={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const N=A;function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){z(e,a,n[a])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(t,n){var r=v({},t,n.attrs);return u(O,v({},r,{icon:N}),null)};m.displayName="CaretRightOutlined";m.inheritAttrs=!1;const M=m;function $(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=String(e[n]));return t}const F={class:"container"},T=S({__name:"Sql",setup(e){const n=x().params.projectId,r=new C(I.string(),"lastQuery"),a=i(null),c=i(""),g=i([]),_=i([]),b=i([]),h=async()=>{const o=await Q.executeQuery(n,c.value,[]);if(r.set(c.value),!o)return;const{returns:s,errors:f}=o;b.value=f;for(const l of f)y.error({message:"SQL Execution Failed",description:l});f.length||y.success({message:"SQL Execution Succeeded"}),_.value=s.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),g.value=s.result.map((l,w)=>$({key:`${w+1}`,...l}))};return q(()=>{const o=D.create(a.value,{language:"sql",value:c.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{c.value=o.getValue()});const s=r.get();s&&(c.value=s,o.setValue(s))}),(o,s)=>(E(),P("div",F,[u(d(V),{gap:"large",class:"sql-container",align:"center"},{default:p(()=>[R("div",{ref_key:"sqlEditor",ref:a,class:"sql-editor"},null,512),u(d(k),{type:"primary",onClick:h},{icon:p(()=>[u(d(M))]),default:p(()=>[B(" Run ")]),_:1})]),_:1}),u(d(L),{style:{width:"100%"},scroll:{x:100},"data-source":g.value,columns:_.value},null,8,["data-source","columns"])]))}});const ne=j(T,[["__scopeId","data-v-cdc1d7a6"]]);export{ne as default};
//# sourceMappingURL=Sql.730ec460.js.map
