import{f as u,eI as w,d as S,eE as x,L as C,z as I,r as i,o as q,b as E,ew as P,w as p,u as d,e as R,bG as k,as as B,cG as L,cy as y,x as j}from"./outputWidgets.2f687470.js";import{e as D}from"./toggleHighContrast.b6b90491.js";import"./router.0df97fff.js";import"./index.14f5c322.js";import{P as Q}from"./project.1b76f889.js";import{A as V}from"./index.73e7ed76.js";import"./Form.af95b5ec.js";import"./hasIn.bf890aaf.js";import"./popupNotifcation.0fb3c693.js";import"./record.4a746396.js";import"./pubsub.63993a8d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7a50282f-dc6b-47f8-bb5c-72778c3858cb",e._sentryDebugIdIdentifier="sentry-dbid-7a50282f-dc6b-47f8-bb5c-72778c3858cb")}catch{}})();var A={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const N=A;function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){z(e,a,n[a])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(t,n){var r=_({},t,n.attrs);return u(w,_({},r,{icon:N}),null)};m.displayName="CaretRightOutlined";m.inheritAttrs=!1;const M=m;function $(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=String(e[n]));return t}const F={class:"container"},T=S({__name:"Sql",setup(e){const n=x().params.projectId,r=new C(I.string(),"lastQuery"),a=i(null),l=i(""),g=i([]),b=i([]),v=i([]),h=async()=>{const o=await Q.executeQuery(n,l.value,[]);if(r.set(l.value),!o)return;const{returns:s,errors:f}=o;v.value=f;for(const c of f)y.error({message:"SQL Execution Failed",description:c});f.length||y.success({message:"SQL Execution Succeeded"}),b.value=s.fields.map(c=>({title:c.name,key:c.name,dataIndex:c.name})),g.value=s.result.map((c,O)=>$({key:`${O+1}`,...c}))};return q(()=>{const o=D.create(a.value,{language:"sql",value:l.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{l.value=o.getValue()});const s=r.get();s&&(l.value=s,o.setValue(s))}),(o,s)=>(E(),P("div",F,[u(d(V),{gap:"large",class:"sql-container",align:"center"},{default:p(()=>[R("div",{ref_key:"sqlEditor",ref:a,class:"sql-editor"},null,512),u(d(k),{type:"primary",onClick:h},{icon:p(()=>[u(d(M))]),default:p(()=>[B(" Run ")]),_:1})]),_:1}),u(d(L),{style:{width:"100%"},scroll:{x:100},"data-source":g.value,columns:b.value},null,8,["data-source","columns"])]))}});const ne=j(T,[["__scopeId","data-v-cdc1d7a6"]]);export{ne as default};
//# sourceMappingURL=Sql.a917e14e.js.map
