import{B as Me}from"./BaseLayout.394c8591.js";import{a as me}from"./asyncComputed.77b43460.js";import{G as Re}from"./PhPencil.vue.c160eb61.js";import{d as ae,a0 as re,y as N,b as s,eV as q,dy as Fe,eX as S,e_ as Ve,e as $,f as l,f5 as Oe,fC as Ke,fD as Je,f1 as ie,r as z,O as ve,D as ee,c as h,w as a,u as e,bF as F,am as U,cH as ye,bx as H,be as Ie,o as Ge,ah as He,E as $e,f7 as xe,N as Qe,a as Le,fk as We,cY as oe,f4 as X,bD as Xe,bf as Ye,bd as De,ay as pe,cA as et,aC as tt,cJ as at,f2 as ze,f8 as lt,bz as nt,B as ut}from"./outputWidgets.73ec338c.js";import"./gateway.90a5afe5.js";import{p as Ne,T as W,d as rt}from"./tables.7510af64.js";import{P as ge}from"./project.44754ab9.js";import"./index.e1bd2589.js";import{O as ot}from"./organization.bf21f1c5.js";import{C as st}from"./ContentLayout.ebac91e7.js";import{p as se}from"./popupNotifcation.8842c060.js";import{a as it}from"./ant-design.bfbb7e88.js";import{H as Ue}from"./PhCheckCircle.vue.ec09fe92.js";import{A as Ee}from"./index.7f3d66e7.js";import{A as j,F as be}from"./Form.9006fede.js";import{A as te}from"./index.eefed9ea.js";import{A as he}from"./index.c5b0ab20.js";import{G as dt}from"./PhCaretRight.vue.a51f929d.js";import{L as ct}from"./LoadingOutlined.01bf969c.js";import{D as ft}from"./DeleteOutlined.50c536a8.js";import{A as pt}from"./index.7c2400df.js";import{B as mt,A as vt,b as yt}from"./index.b977e612.js";import"./record.393e7a57.js";import"./pubsub.0fb921bc.js";import"./string.a0cb0a45.js";import"./index.d46e8d72.js";import"./Modal.388dcf7d.js";import"./index.77c6c7a9.js";import"./hasIn.7e7cb708.js";import"./isNumeric.75337b1e.js";import"./DeleteOutlined.f8ba9770.js";import"./index.36e313ae.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[o]="5940e415-5821-44f3-8ad6-9d0025cae089",m._sentryDebugIdIdentifier="sentry-dbid-5940e415-5821-44f3-8ad6-9d0025cae089")}catch{}})();const gt=["width","height","fill","transform"],bt={key:0},ht=$("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"},null,-1),kt=[ht],Ct={key:1},_t=$("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),wt=$("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"},null,-1),Dt=[_t,wt],At={key:2},St=$("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"},null,-1),Ot=[St],It={key:3},$t=$("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"},null,-1),xt=[$t],Lt={key:4},zt=$("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"},null,-1),Nt=[zt],Ut={key:5},Et=$("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"},null,-1),jt=[Et],qt={name:"PhWarningCircle"},je=ae({...qt,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(m){const o=m,t=re("weight","regular"),k=re("size","1em"),y=re("color","currentColor"),E=re("mirrored",!1),A=N(()=>{var _;return(_=o.weight)!=null?_:t}),C=N(()=>{var _;return(_=o.size)!=null?_:k}),d=N(()=>{var _;return(_=o.color)!=null?_:y}),P=N(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:E?"scale(-1, 1)":void 0);return(_,T)=>(s(),q("svg",Ve({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:C.value,height:C.value,fill:d.value,transform:P.value},_.$attrs),[Fe(_.$slots,"default"),A.value==="bold"?(s(),q("g",bt,kt)):A.value==="duotone"?(s(),q("g",Ct,Dt)):A.value==="fill"?(s(),q("g",At,Ot)):A.value==="light"?(s(),q("g",It,xt)):A.value==="regular"?(s(),q("g",Lt,Nt)):A.value==="thin"?(s(),q("g",Ut,jt)):S("",!0)],16,gt))}});function Ae(m){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?Object(arguments[o]):{},k=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(k=k.concat(Object.getOwnPropertySymbols(t).filter(function(y){return Object.getOwnPropertyDescriptor(t,y).enumerable}))),k.forEach(function(y){Tt(m,y,t[y])})}return m}function Tt(m,o,t){return o in m?Object.defineProperty(m,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):m[o]=t,m}var ke=function(o,t){var k=Ae({},o,t.attrs);return l(Oe,Ae({},k,{icon:Ke}),null)};ke.displayName="DownOutlined";ke.inheritAttrs=!1;const Zt=ke;function Se(m){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?Object(arguments[o]):{},k=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(k=k.concat(Object.getOwnPropertySymbols(t).filter(function(y){return Object.getOwnPropertyDescriptor(t,y).enumerable}))),k.forEach(function(y){Bt(m,y,t[y])})}return m}function Bt(m,o,t){return o in m?Object.defineProperty(m,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):m[o]=t,m}var Ce=function(o,t){var k=Se({},o,t.attrs);return l(Oe,Se({},k,{icon:Je}),null)};Ce.displayName="EditOutlined";Ce.inheritAttrs=!1;const Pt=Ce,qe=(m,o)=>o.includes(m)?{status:"error",help:"There already is a column with this name in the table"}:{status:""},Mt=ae({__name:"NewColumn",props:{open:{type:Boolean},table:{}},emits:["created","cancel"],setup(m,{emit:o}){const t=m,y=ie().params.projectId,E=N(()=>{var v;return((v=t.table)==null?void 0:v.getColumns().map(f=>f.name))||[]}),A=N(()=>qe(d.value.name,E.value)),C={name:"",type:"varchar",default:"",nullable:!0,unique:!1},d=z(C),P=()=>{d.value={...C}},_=z([{value:"reference",label:"reference",isLeaf:!1},...Ne.map(v=>({value:v,label:v,isLeaf:!0}))]),T=v=>{if(!v)return;const f=v[v.length-1];switch(v.length){case 0:return;case 1:f.loading=!0,W.list(y).then(w=>{f.children=w.map(B=>({value:B.id,label:B.name,isLeaf:!1})),f.loading=!1});return;case 2:f.loading=!0,W.get(y,f.value).then(w=>{f.children=w.getColumns().map(B=>({type:B.type,value:B.id,label:B.name,isLeaf:!0})),f.loading=!1});return}},b=(v,f)=>{if(!!v){if(v.length===1){d.value.type=v[0],d.value.foreignKey=void 0;return}if(v.length===3){const w=f[f.length-1];d.value.type=w.type,d.value.foreignKey={columnId:w.value}}}},O=v=>{const f=v.selectedOptions;return f?f.length===1?f[0].label:f.length===3?`reference to ${f[1].label}(${f[2].label})`:"":"Select type"},g=z({...{status:"success",message:"",fakeLoading:!1}}),V=()=>{g.value.fakeLoading=!0,Y()};ve(()=>d.value.type,()=>{d.value.default=rt[d.value.type]||"",V()});const Y=ee.exports.debounce(async()=>{if(!d.value.default){g.value.status="success",g.value.message="",g.value.fakeLoading=!1;return}const v=`select (${d.value.default})::${d.value.type} `;ge.executeQuery(y,v,[]).then(f=>{g.value.status=f.errors.length>0?"error":"success",g.value.message=f.errors[0]||"",g.value.fakeLoading=!1})},500);function J(){o("cancel")}async function x(){if(!!t.table&&!(!d.value.name||!d.value.type))try{await t.table.addColumn(d.value),P(),o("created")}catch(v){v instanceof Error&&se("Database error",v.message)}}return(v,f)=>(s(),h(e(he),{title:"New column",width:720,open:t.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:J},{extra:a(()=>[l(e(ye),null,{default:a(()=>[l(e(F),{onClick:J},{default:a(()=>[U("Cancel")]),_:1}),l(e(F),{type:"primary",onClick:x},{default:a(()=>[U("Submit")]),_:1})]),_:1})]),default:a(()=>[l(e(be),{model:d.value,layout:"vertical"},{default:a(()=>[l(e(j),{key:"name",label:"Name",required:"","validate-status":A.value.status,help:A.value.help},{default:a(()=>[l(e(H),{value:d.value.name,"onUpdate:value":f[0]||(f[0]=w=>d.value.name=w)},null,8,["value"])]),_:1},8,["validate-status","help"]),l(e(j),{key:"type",label:"Type",required:""},{default:a(()=>[l(e(Ee),{options:_.value,"load-data":T,"display-render":O,"allow-clear":!1,onChange:b},null,8,["options"])]),_:1}),l(e(j),{key:"default-value",label:"Default value","validate-status":g.value.status,help:g.value.message},{default:a(()=>[l(e(H),{value:d.value.default,"onUpdate:value":f[1]||(f[1]=w=>d.value.default=w),onInput:V},{suffix:a(()=>[g.value.fakeLoading?(s(),h(e(Ie),{key:0})):S("",!0),!g.value.fakeLoading&&g.value.status==="success"?(s(),h(e(Ue),{key:1,size:"18"})):S("",!0),!g.value.fakeLoading&&g.value.status==="error"?(s(),h(e(je),{key:2,size:"18"})):S("",!0)]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),l(e(j),{key:"nullable",label:"Nullable"},{default:a(()=>[l(e(te),{checked:d.value.nullable,"onUpdate:checked":f[2]||(f[2]=w=>d.value.nullable=w)},null,8,["checked"])]),_:1}),l(e(j),{key:"unique",label:"Unique"},{default:a(()=>[l(e(te),{checked:d.value.unique,"onUpdate:checked":f[3]||(f[3]=w=>d.value.unique=w)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]))}}),Rt={class:"twin-container"},Ft={class:"fullwidth-input"},Vt={class:"fullwidth-input"},Kt={class:"using-container"},Jt={class:"fullwidth-input"},Gt=ae({__name:"UpdateColumn",props:{open:{type:Boolean},table:{},column:{}},emits:["updated","cancel"],setup(m,{emit:o}){const t=m,y=ie().params.projectId,E=z(t.column.record.initialState.type);Ge(async()=>{if(!t.column.foreignKey)return;E.value="loading...";const n=await W.fromColumnId(y,t.column.foreignKey.columnId),u=n.getColumn(t.column.foreignKey.columnId);E.value=`reference to ${n.name}(${u.name})`});const A=N(()=>{var n;return((n=t.table)==null?void 0:n.getColumns().map(u=>u.record.initialState.name))||[]}),C=N(()=>t.column.name===t.column.record.initialState.name?{status:"",help:""}:qe(t.column.name,A.value)),{result:d,loading:P}=me(async()=>t.table.select({},10,0).then(({total:n})=>n));function _(){t.column.record.resetChanges(),o("cancel")}const b=z({status:"success",message:"",fakeLoading:!1}),O=()=>{b.value.fakeLoading=!0,Z()},Z=ee.exports.debounce(async()=>{if(!t.column.default){b.value.status="success",b.value.message="",b.value.fakeLoading=!1;return}const n=`select (${t.column.default})::${t.column.type} `,u=await ge.executeQuery(y,n,[]);b.value.status=u.errors.length>0?"error":"success",b.value.message=u.errors[0]||"",b.value.fakeLoading=!1},500),g=z([{value:"reference",label:"reference",isLeaf:!1},...Ne.map(n=>({value:n,label:n,isLeaf:!0}))]),V=n=>{if(!n)return;const u=n[n.length-1];switch(n.length){case 0:return;case 1:u.loading=!0,W.list(y).then(i=>{u.children=i.map(M=>({value:M.id,label:M.name,isLeaf:!1})),u.loading=!1});return;case 2:u.loading=!0,W.get(y,u.value).then(i=>{u.children=i.getColumns().map(M=>({type:M.type,value:M.id,label:M.name,isLeaf:!0})),u.loading=!1});return}},le=n=>{const u=n.selectedOptions;return u?u.length===1?u[0].label:u.length===3?`reference to ${u[1].label}(${u[2].label})`:"":"Select type"},Y=(n,u)=>{if(!!n){if(n.length===1){t.column.type=n[0],t.column.foreignKey=null;return}if(n.length===3){if(t.column.foreignKey&&t.column.foreignKey.columnId===n[2])return;const i=u[u.length-1];t.column.type=i.type,t.column.foreignKey={columnId:i.value}}}},J=()=>d.value===0||P.value?!1:t.column.record.hasChangesDeep("type"),x=z({type:"default"}),v=()=>{t.column.type=t.column.record.initialState.type,x.value={type:"default"}};function f(n,u){return u==="varchar"||n==="int"&&u==="boolean"||n==="boolean"&&u==="int"}ve(()=>t.column.type,()=>{O(),B.value||(x.value={type:"user-defined",using:Q.value,mandatory:!0})});const B=N(()=>x.value.type==="default"&&f(t.column.record.initialState.type,t.column.type)),ne=N(()=>!f(t.column.record.initialState.type,t.column.type));function ue(n){n?x.value={type:"default"}:x.value={type:"user-defined",using:Q.value,mandatory:!1}}function de(n){if(x.value.type==="default")throw new Error("Can't change using when using default casting");x.value.using=n!=null?n:""}const G=()=>ne.value?!0:J()&&x.value.type==="user-defined",Q=N(()=>`${t.column.record.initialState.name}::${t.column.type}`);async function ce(){if(!t.column)return;let n=x.value.type==="default"?Q.value:x.value.using;d.value===0&&(n=`${t.column.name}::text::${t.column.type}`);try{await t.column.update(n),o("updated")}catch(u){u instanceof Error&&se("Database error",u.message)}}return(n,u)=>(s(),h(e(he),{title:"Edit column",width:720,open:n.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:_},{extra:a(()=>[l(e(ye),null,{default:a(()=>[l(e(F),{onClick:_},{default:a(()=>[U("Cancel")]),_:1}),l(e(F),{type:"primary",onClick:ce},{default:a(()=>[U("Submit")]),_:1})]),_:1})]),default:a(()=>[l(e(be),{model:n.column,layout:"vertical"},{default:a(()=>[l(e(j),{key:"name",label:"Name","validate-status":C.value.status,help:C.value.help},{default:a(()=>[l(e(H),{value:n.column.name,"onUpdate:value":u[0]||(u[0]=i=>n.column.name=i)},null,8,["value"])]),_:1},8,["validate-status","help"]),$("div",Rt,[$("span",Ft,[l(e(j),{key:"type",label:"Current Type"},{default:a(()=>[l(e(He),{value:E.value,"onUpdate:value":u[1]||(u[1]=i=>E.value=i),"default-active-first-option":"",disabled:""},null,8,["value"])]),_:1})]),l(e(dt),{class:"right-arrow"}),$("span",Vt,[l(e(j),{key:"new-type",label:"New Type"},{default:a(()=>[l(e(Ee),{options:g.value,"load-data":V,"display-render":le,"allow-clear":!0,onClear:v,onChange:Y},null,8,["options"])]),_:1})])]),l(e(j),{key:"default-value",label:"Default value","validate-status":b.value.status,help:b.value.message},{default:a(()=>[l(e(H),{value:n.column.default,"onUpdate:value":u[2]||(u[2]=i=>n.column.default=i),onInput:O},{suffix:a(()=>[b.value.fakeLoading?(s(),h(e(Ie),{key:0,size:"small"})):S("",!0),!b.value.fakeLoading&&b.value.status==="success"?(s(),h(e(Ue),{key:1,size:18})):S("",!0),!b.value.fakeLoading&&b.value.status==="error"?(s(),h(e(je),{key:2,size:18})):S("",!0)]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),$("div",Kt,[J()?(s(),h(e(j),{key:"default-casting",label:"Use default casting"},{default:a(()=>[l(e(te),{checked:B.value,disabled:ne.value,"onUpdate:checked":u[3]||(u[3]=i=>ue(!!i))},null,8,["checked","disabled"])]),_:1})):S("",!0),$("span",Jt,[J()?(s(),h(e(j),{key:"using",label:"Using"},{default:a(()=>[l(e(H),{value:x.value.type==="user-defined"?x.value.using:Q.value,disabled:!G(),onInput:u[4]||(u[4]=i=>de(i.target.value))},null,8,["value","disabled"])]),_:1})):S("",!0)])]),l(e(j),{key:"nullable",label:"Nullable"},{default:a(()=>[l(e(te),{checked:n.column.nullable,"onUpdate:checked":u[5]||(u[5]=i=>n.column.nullable=i)},null,8,["checked"])]),_:1}),l(e(j),{key:"unique",label:"Unique"},{default:a(()=>[l(e(te),{checked:n.column.unique,"onUpdate:checked":u[6]||(u[6]=i=>n.column.unique=i)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]))}});const Ht=$e(Gt,[["__scopeId","data-v-795220e4"]]),Qt={style:{overflow:"hidden","white-space":"wrap"}},Wt={key:1},Xt={key:1},Yt={key:1},ea=["onClick"],ta=$("a",null,"Delete",-1),aa=ae({__name:"TableData",props:{table:{},loading:{type:Boolean}},emits:["refresh"],setup(m,{emit:o}){var _e;const t=m,k=z(1),y=z(10),E=N(()=>{var r,p;return{total:(p=(r=v.value)==null?void 0:r.total)!=null?p:0,current:k.value,pageSize:y.value,totalBoundaryShowSizeChanger:10,showSizeChanger:!0,pageSizeOptions:["10","25","50","100"],onChange:async(D,c)=>{k.value=D,y.value=c,await w()}}}),A=ie(),C=xe(),d=z(typeof A.query.q=="string"?A.query.q:""),P=N(()=>{try{return JSON.parse(A.query.where)}catch{return{}}});ve(d,()=>{C.replace({query:{...A.query,where:JSON.stringify(A.query.value),q:d.value}})});const _=z(!1),T=z({type:"idle"}),b=()=>{_.value=!0,O()},O=ee.exports.debounce(()=>{w(),_.value=!1},500);function Z(){T.value={type:"idle"}}async function g(){Z(),o("refresh"),await w(),Q()}function V(){T.value={type:"creating"}}const le=r=>{if(!t.table)throw new Error("Table not found");T.value={type:"editing",column:t.table.getColumn(r)}};async function Y(r){await it("Are you sure you want to delete this column?")&&await J(r)}async function J(r){var p,D;await((D=(p=t.table)==null?void 0:p.getColumn(r))==null?void 0:D.delete()),o("refresh"),await w(),Q()}const x=N(()=>{var r;return((r=v.value)==null?void 0:r.rows.length)===1}),{result:v,loading:f,refetch:w}=me(()=>Promise.all([t.table.select(P.value,(k.value-1)*y.value,y.value,d.value),Promise.all(t.table.getColumns().filter(r=>r.foreignKey).map(r=>W.fromColumnId(A.params.projectId,r.foreignKey.columnId).then(p=>[r.name,p])))]).then(([{rows:r,total:p},D])=>({rows:r,total:p,columns:D.reduce((c,[L,R])=>({...c,[L]:R}),{})}))),B=(r,p)=>{var R,I;const D=(R=t.table)==null?void 0:R.getColumns().find(K=>K.name===r);if(!D)return"";const c=(I=v.value)==null?void 0:I.columns[D.name],L=c==null?void 0:c.getColumns().find(K=>{var we;return K.id===((we=D.foreignKey)==null?void 0:we.columnId)});return!c||!L?"":{name:"tableEditor",params:{projectId:A.params.projectId,tableId:c.id},query:{where:JSON.stringify({[L.name]:p})}}},ne=(r,p)=>D=>{if(r==="json"&&D==""){i.value[p]="null";return}i.value[p]=D},ue=()=>[...t.table.getColumns().map(r=>{var p;return{key:(p=r.id)!=null?p:"",title:r.name,dataIndex:r.name,width:220,resizable:!0,ellipsis:!1}}),{key:"action",title:"",fixed:"right",width:100,align:"center",resizable:!1,ellipsis:!1}],de=ue(),G=z(de),Q=()=>G.value=ue();function ce(r,p){G.value=G.value.map(D=>D.key===p.key?{...D,width:r}:D)}const n=N(()=>{var r;return((r=v.value)==null?void 0:r.rows.map(p=>({key:p.id,...p})))||[]}),u=z(!1),i=z({}),M=()=>{u.value=!0},fe=()=>{i.value={},u.value=!1};let Te=Qe((_e=t.table)==null?void 0:_e.getUnprotectedColumns().reduce((r,p)=>({...r,[p.name]:""}),{}));async function Ze(){if(!(!t.table||!Te))try{i.value.id?await t.table.updateRow(i.value.id,i.value):await t.table.insertRow(i.value),i.value={},w(),fe()}catch(r){r instanceof Error&&se("Database error",r.message)}}const Be=async r=>{if(!(!v.value||!v.value.rows.find(p=>p.id===r)))try{await t.table.deleteRow(r),x.value&&(k.value=Math.max(1,k.value-1)),w()}catch(p){p instanceof Error&&se("Database error",p.message)}},Pe=r=>{var R;const p=(R=n.value)==null?void 0:R.filter(I=>r===I.key)[0],D=t.table.getColumns(),c=D.map(I=>I.name),L=D.filter(I=>I.type==="json").map(I=>I.name);i.value=ee.exports.pick(ee.exports.cloneDeep(p),c),L.forEach(I=>{i.value[I]&&(i.value[I]=JSON.stringify(i.value[I]))}),M()};return(r,p)=>{const D=Le("router-link");return s(),h(st,{"full-width":""},{default:a(()=>[l(e(oe),{justify:"space-between",style:{"margin-bottom":"16px"},gap:"middle"},{default:a(()=>[l(e(H),{value:d.value,"onUpdate:value":[p[0]||(p[0]=c=>d.value=c),b],placeholder:"Search",style:{width:"400px"},"allow-clear":""},{prefix:a(()=>[l(e(We))]),suffix:a(()=>[_.value?(s(),h(e(ct),{key:0})):S("",!0)]),_:1},8,["value"]),l(e(F),{type:"primary",onClick:V},{default:a(()=>[U("+ Add new column")]),_:1})]),_:1}),l(e(at),{columns:G.value,"data-source":n.value,pagination:E.value,bordered:"",loading:e(f)||r.loading,scroll:{x:1e3,y:720},size:"small",onResizeColumn:ce},{headerCell:a(({column:c})=>[c.title!=="id"&&c.title!=="created_at"&&c.key!=="action"?(s(),h(e(oe),{key:0,align:"center",justify:"space-between",gap:"small"},{default:a(()=>[$("span",Qt,X(c.title),1),l(e(Xe),{placement:"bottomRight",trigger:"click"},{overlay:a(()=>[l(e(Ye),null,{default:a(()=>[l(e(De),{onClick:L=>le(String(c.key))},{icon:a(()=>[l(e(Pt))]),default:a(()=>[U(" Edit ")]),_:2},1032,["onClick"]),l(e(De),{danger:"",onClick:L=>Y(String(c.key))},{icon:a(()=>[l(e(ft))]),default:a(()=>[U(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),default:a(()=>[l(e(Zt))]),_:2},1024)]),_:2},1024)):(s(),q("span",Wt,X(c.title),1))]),bodyCell:a(({column:c,text:L,record:R})=>{var I;return[G.value.map(K=>K.title).includes(c.dataIndex)?(s(),q(pe,{key:0},[(I=r.table.getColumns().find(K=>K.name===c.dataIndex))!=null&&I.foreignKey?(s(),h(D,{key:0,to:B(c.dataIndex,L),target:"_blank"},{default:a(()=>[U(X(L),1)]),_:2},1032,["to"])):(s(),q("span",Xt,X(L),1))],64)):S("",!0),c.key==="action"?(s(),q("div",Yt,[$("span",null,[$("a",{onClick:K=>Pe(R.id)},"Edit",8,ea)]),l(e(pt),{type:"vertical"}),l(e(et),{title:"Sure to delete?",onConfirm:K=>Be(R.id)},{default:a(()=>[ta]),_:2},1032,["onConfirm"])])):S("",!0)]}),footer:a(()=>[G.value.length===3?(s(),h(e(tt),{key:0,title:"Add a first column prior to data entry",placement:"right"},{default:a(()=>[l(e(F),{type:"primary",disabled:!0,onClick:M},{default:a(()=>[U(" + Add New Data ")]),_:1})]),_:1})):(s(),h(e(F),{key:1,type:"primary",onClick:M},{default:a(()=>[U("+ Add New Data")]),_:1}))]),_:1},8,["columns","data-source","pagination","loading"]),l(e(he),{title:"Data",width:720,open:u.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:fe},{extra:a(()=>[l(e(ye),null,{default:a(()=>[l(e(F),{onClick:fe},{default:a(()=>[U("Cancel")]),_:1}),l(e(F),{type:"primary",onClick:Ze},{default:a(()=>[U("Submit")]),_:1})]),_:1})]),default:a(()=>[l(e(be),{model:i.value,layout:"vertical"},{default:a(()=>[(s(!0),q(pe,null,ze(r.table.getUnprotectedColumns(),c=>(s(),h(e(j),{key:c.id,label:c.name,required:!c.nullable},{default:a(()=>[i.value?(s(),h(e(H),{key:0,placeholder:c.type,value:i.value[c.name],disabled:i.value[c.name]===null,"onUpdate:value":L=>ne(c.type,c.name)(L)},lt({_:2},[c.nullable?{name:"addonAfter",fn:a(()=>[l(e(nt),{checked:i.value[c.name]===null,"onUpdate:checked":L=>i.value[c.name]=L?null:""},{default:a(()=>[U(" NULL ")]),_:2},1032,["checked","onUpdate:checked"])]),key:"0"}:void 0]),1032,["placeholder","value","disabled","onUpdate:value"])):S("",!0)]),_:2},1032,["label","required"]))),128))]),_:1},8,["model"])]),_:1},8,["open"]),r.table&&T.value.type==="creating"?(s(),h(Mt,{key:0,open:"",table:t.table,onClose:Z,onCancel:Z,onCreated:g},null,8,["table"])):S("",!0),r.table&&T.value.type==="editing"?(s(),h(Ht,{key:1,column:T.value.column,open:"",table:r.table,onUpdated:g,onClose:Z,onCancel:Z},null,8,["column","table"])):S("",!0)]),_:1})}}});const la={style:{"font-size":"20px"}},na=ae({__name:"TableEditor",setup(m){const o=xe(),t=ie(),k=t.params.tableId,y=t.params.projectId,E=z(!1),A=()=>{var b;E.value=!1,(b=C.value)==null||b.table.save(),P()},{result:C,loading:d,refetch:P}=me(()=>Promise.all([ge.get(y).then(async b=>{const O=await ot.get(b.organizationId);return{project:b,organization:O}}),W.get(y,k)]).then(([{project:b,organization:O},Z])=>ut({project:b,organization:O,table:Z}))),_=N(()=>!d.value&&C.value?[{label:"My organizations",path:"/organizations"},{label:C.value.organization.name,path:`/organizations/${C.value.organization.id}`},{label:C.value.project.name,path:`/projects/${C.value.project.id}/tables`}]:void 0);function T(){o.push({name:"tables",params:{projectId:y}})}return(b,O)=>{const Z=Le("router-link");return s(),h(Me,null,{navbar:a(()=>[l(e(yt),{style:{padding:"5px 25px"},onBack:T},{title:a(()=>[E.value?(s(),h(e(oe),{key:1,align:"center",gap:"large"},{default:a(()=>[e(C)?(s(),h(e(H),{key:0,value:e(C).table.name,"onUpdate:value":O[1]||(O[1]=g=>e(C).table.name=g),class:"borderless-input"},null,8,["value"])):S("",!0),l(e(F),{onClick:A},{default:a(()=>[U("Save")]),_:1})]),_:1})):(s(),h(e(oe),{key:0,align:"center",gap:"small"},{default:a(()=>{var g;return[$("span",la,X((g=e(C))==null?void 0:g.table.name),1),l(e(Re),{size:"22",style:{cursor:"pointer"},onClick:O[0]||(O[0]=V=>E.value=!0)})]}),_:1}))]),subTitle:a(()=>[_.value?(s(),h(e(mt),{key:0,style:{margin:"0px 20px"}},{default:a(()=>[(s(!0),q(pe,null,ze(_.value,(g,V)=>(s(),h(e(vt),{key:V},{default:a(()=>[l(Z,{to:g.path},{default:a(()=>[U(X(g.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):S("",!0)]),_:1})]),content:a(()=>[e(C)?(s(),h(aa,{key:0,loading:e(d),table:e(C).table,onRefresh:O[2]||(O[2]=g=>e(P)())},null,8,["loading","table"])):S("",!0)]),_:1})}}});const qa=$e(na,[["__scopeId","data-v-8c6a42b5"]]);export{qa as default};
//# sourceMappingURL=TableEditor.e35abc24.js.map
