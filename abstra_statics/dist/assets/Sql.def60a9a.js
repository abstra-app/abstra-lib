import{f as u,eG as I,d as x,eB as q,r as i,o as k,S as b,b as p,ev as g,w as f,u as c,c as D,ex as A,e as O,bG as B,ar as h,aD as P,eC as R,eD as V,cG as j,eE as E,eF as N,v as F}from"./outputWidgets.71362013.js";import"./router.ead296c0.js";import"./index.242e1377.js";import{P as L}from"./project.46d13687.js";import{e as M}from"./toggleHighContrast.44d09b05.js";import{A as Q}from"./index.9566eb31.js";import{A as $}from"./index.91552350.js";import"./Form.ab103900.js";import"./hasIn.36eb41c2.js";import"./popupNotifcation.d5e75700.js";import"./index.cf4c23b9.js";import"./record.692286cc.js";import"./pubsub.129fe54b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a931ff85-581d-4813-99a0-0138d80a0e67",e._sentryDebugIdIdentifier="sentry-dbid-a931ff85-581d-4813-99a0-0138d80a0e67")}catch{}})();var z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const G=z;function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){T(e,r,a[r])})}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _=function(t,a){var n=S({},t,a.attrs);return u(I,S({},n,{icon:G}),null)};_.displayName="CaretRightOutlined";_.inheritAttrs=!1;const H=_;function J(e){const t={};for(const a in e)e.hasOwnProperty(a)&&(t[a]=String(e[a]));return t}const U=e=>(E("data-v-29bbdaa2"),e=e(),N(),e),W={class:"container"},X=U(()=>O("br",null,null,-1)),Y=x({__name:"Sql",setup(e){const a=q().params.projectId,n=i(null),r=i(""),v=i([]),y=i([]),m=i([]),w=async()=>{const o=await L.executeQuery(a,r.value,[]);if(b.set("lastQuery",r.value),!o)return;const{returns:s,errors:d}=o;m.value=d,y.value=s.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),v.value=s.result.map((l,C)=>J({key:`${C+1}`,...l}))};return k(()=>{const o=M.create(n.value,{language:"sql",value:r.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{r.value=o.getValue()});const s=b.get("lastQuery");s&&(r.value=s,o.setValue(s))}),(o,s)=>(p(),g("div",W,[u(c(Q),{gap:"large",class:"sql-container",align:"center"},{default:f(()=>[O("div",{ref_key:"sqlEditor",ref:n,class:"sql-editor"},null,512),u(c(B),{type:"primary",onClick:w},{icon:f(()=>[u(c(H))]),default:f(()=>[h(" Run ")]),_:1})]),_:1}),m.value.length?(p(),D(c($),{key:0,type:"error","show-icon":""},{message:f(()=>[(p(!0),g(P,null,R(m.value,d=>(p(),g("span",{key:d},[h(V(d)+" ",1),X]))),128))]),_:1})):A("",!0),u(c(j),{style:{width:"100%"},scroll:{x:100},"data-source":v.value,columns:y.value},null,8,["data-source","columns"])]))}});const de=F(Y,[["__scopeId","data-v-29bbdaa2"]]);export{de as default};
//# sourceMappingURL=Sql.def60a9a.js.map
