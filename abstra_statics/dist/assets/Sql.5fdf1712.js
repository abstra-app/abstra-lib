import{f as u,eG as I,d as x,eB as q,r as i,o as k,S as y,b as f,ev as g,w as p,u as c,c as D,ex as A,e as O,bG as B,ar as h,aD as P,eC as R,eD as V,cG as j,eE as E,eF as N,v as F}from"./outputWidgets.55453a9e.js";import"./router.3c302074.js";import"./index.805b1a2c.js";import{P as L}from"./project.317c4388.js";import{e as M}from"./toggleHighContrast.980a1ce3.js";import{A as Q}from"./index.6c7472f6.js";import{A as $}from"./index.68cfddce.js";import"./Form.1e452ea7.js";import"./hasIn.5b5d0bf0.js";import"./popupNotifcation.0db0fba1.js";import"./index.cf4c23b9.js";import"./record.7d163256.js";import"./pubsub.787f3acc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dff7a2db-3e46-42fa-8ec2-3a33eb8411db",e._sentryDebugIdIdentifier="sentry-dbid-dff7a2db-3e46-42fa-8ec2-3a33eb8411db")}catch{}})();var z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const G=z;function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){T(e,r,a[r])})}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(t,a){var n=S({},t,a.attrs);return u(I,S({},n,{icon:G}),null)};b.displayName="CaretRightOutlined";b.inheritAttrs=!1;const H=b;function J(e){const t={};for(const a in e)e.hasOwnProperty(a)&&(t[a]=String(e[a]));return t}const U=e=>(E("data-v-29bbdaa2"),e=e(),N(),e),W={class:"container"},X=U(()=>O("br",null,null,-1)),Y=x({__name:"Sql",setup(e){const a=q().params.projectId,n=i(null),r=i(""),_=i([]),v=i([]),m=i([]),w=async()=>{const o=await L.executeQuery(a,r.value,[]);if(y.set("lastQuery",r.value),!o)return;const{returns:s,errors:d}=o;m.value=d,v.value=s.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),_.value=s.result.map((l,C)=>J({key:`${C+1}`,...l}))};return k(()=>{const o=M.create(n.value,{language:"sql",value:r.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{r.value=o.getValue()});const s=y.get("lastQuery");s&&(r.value=s,o.setValue(s))}),(o,s)=>(f(),g("div",W,[u(c(Q),{gap:"large",class:"sql-container",align:"center"},{default:p(()=>[O("div",{ref_key:"sqlEditor",ref:n,class:"sql-editor"},null,512),u(c(B),{type:"primary",onClick:w},{icon:p(()=>[u(c(H))]),default:p(()=>[h(" Run ")]),_:1})]),_:1}),m.value.length?(f(),D(c($),{key:0,type:"error","show-icon":""},{message:p(()=>[(f(!0),g(P,null,R(m.value,d=>(f(),g("span",{key:d},[h(V(d)+" ",1),X]))),128))]),_:1})):A("",!0),u(c(j),{style:{width:"100%"},scroll:{x:100},"data-source":_.value,columns:v.value},null,8,["data-source","columns"])]))}});const de=F(Y,[["__scopeId","data-v-29bbdaa2"]]);export{de as default};
//# sourceMappingURL=Sql.5fdf1712.js.map
