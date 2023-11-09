import{d as j,r as N,H as q,G as te,a as O,b as u,et as D,f as t,w as a,b9 as R,aB as k,eB as z,ev as S,e as g,u as e,cB as ae,b_ as B,cH as ne,eA as V,c as w,eF as ee,bT as L,ae as J,cF as le,v as Q,J as pe,ey as oe,eC as se,eD as ue,ez as me,eE as fe}from"./outputWidgets.e1ef7566.js";import{B as ve}from"./BaseLayout.9eb14dfb.js";import{p as ie,T as be}from"./tables.822e9ac2.js";import{a as re}from"./asyncComputed.7df7ace6.js";import{p as P}from"./popupNotifcation.e9d5e0df.js";import{A as de}from"./index.48d01e32.js";import{A as K}from"./index.5ef89a41.js";import{F as W}from"./Form.4c9b41f7.js";import{A}from"./Title.4a382120.js";import{A as X}from"./index.5c14284b.js";import"./router.f775eabb.js";import"./columns.9c863063.js";import{A as F}from"./index.6425a50e.js";import{Q as ye,w as _e,R as ge}from"./icons.c5a201f5.js";import{L as he}from"./CircularLoading.29bfc17b.js";import{P as ke}from"./project.da0556ef.js";import{O as Ce}from"./organization.94f9f5d8.js";import{T as we,A as G}from"./TabPane.2c71b19f.js";import{B as De,a as $e,c as Ie}from"./index.e8529a5b.js";import"./gateway.678c59a2.js";import"./activeRecord.4c9e636d.js";import"./pubsub.c47edaa0.js";import"./string.8a031cc7.js";import"./transButton.8c2deff8.js";import"./isNumeric.75337b1e.js";import"./Text.d5ca2991.js";import"./index.48a00a36.js";import"./index.f4ac7424.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[m]="9e0c2c3e-02c0-4fbd-a913-07d2f5d02d94",f._sentryDebugIdIdentifier="sentry-dbid-9e0c2c3e-02c0-4fbd-a913-07d2f5d02d94")}catch{}})();const Se={class:"table-data",style:{width:"calc(100% - 80px)"}},Te={key:1},Ae=["onClick"],Ue=g("a",null,"Delete",-1),Be=j({__name:"TableData",props:{table:{}},setup(f){var d;const m=f,o=N(1),n=N(5),$=q(()=>{var b,y;return{total:(y=(b=c.value)==null?void 0:b.total)!=null?y:0,current:o.value,pageSize:n.value,onChange:async(U,E)=>{o.value=U,n.value=E,await C()}}}),{result:c,loading:v,refetch:C}=re(()=>m.table.select({},n.value,o.value*n.value)),p=q(()=>{var y;return[...(y=m.table)==null?void 0:y.getColumns().map(U=>({title:U.name,dataIndex:U.name})),{title:"Actions",key:"action",fixed:"right",width:100,align:"center"}]}),s=q(()=>{var b;return((b=c.value)==null?void 0:b.rows.map(y=>({key:y.id,...y})))||[]}),T=N(!1),r=N({}),_=()=>{T.value=!0},I=()=>{r.value={},T.value=!1};let x=te((d=m.table)==null?void 0:d.getUnprotectedColumns().reduce((b,y)=>({...b,[y.name]:""}),{}));async function i(){if(!(!m.table||!x))try{r.value.id?await m.table.updateRow(r.value.id,r.value):await m.table.insertRow(r.value),r.value={},C(),I()}catch(b){b instanceof Error&&P("Database error",b.message)}}const l=async b=>{if(!(!c.value||!c.value.rows.find(y=>y.id===b)))try{await m.table.deleteRow(b),C()}catch(y){y instanceof Error&&P("Database error",y.message)}},h=b=>{var y;r.value=ee.exports.pick(ee.exports.cloneDeep((y=s.value)==null?void 0:y.filter(U=>b===U.key)[0]),m.table.getColumns().map(U=>U.name)),_()};return(b,y)=>{const U=O("ant-input");return u(),D("div",Se,[t(e(ne),{columns:p.value,"data-source":s.value,pagination:$.value,bordered:"",loading:e(v),scroll:{x:2e3,y:720}},{bodyCell:a(({column:E,text:M,record:Z})=>[p.value.map(H=>H.title).includes(E.dataIndex)?(u(),D(R,{key:0},[k(z(M),1)],64)):S("",!0),E.key==="action"?(u(),D("div",Te,[g("span",null,[g("a",{onClick:H=>h(Z.id)},"Edit",8,Ae)]),t(e(de),{type:"vertical"}),t(e(ae),{title:"Sure to delete?",onConfirm:H=>l(Z.id)},{default:a(()=>[Ue]),_:2},1032,["onConfirm"])])):S("",!0)]),footer:a(()=>[t(e(B),{type:"primary",onClick:_},{default:a(()=>[k("+ Add New Data")]),_:1})]),_:1},8,["columns","data-source","pagination","loading"]),t(e(X),{title:"Data",width:720,open:T.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:I},{extra:a(()=>[t(e(K),null,{default:a(()=>[t(e(B),{onClick:I},{default:a(()=>[k("Cancel")]),_:1}),t(e(B),{type:"primary",onClick:i},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:r.value,layout:"vertical"},{default:a(()=>[(u(!0),D(R,null,V(b.table.getUnprotectedColumns(),E=>(u(),w(e(A),{key:E.id,label:E.name},{default:a(()=>[r.value?(u(),w(U,{key:0,value:r.value[E.name],"onUpdate:value":M=>r.value[E.name]=M},null,8,["value","onUpdate:value"])):S("",!0)]),_:2},1032,["label"]))),128))]),_:1},8,["model"])]),_:1},8,["open"])])}}});const xe=j({__name:"NewColumn",props:{open:{type:Boolean},table:{}},emits:["created","cancel"],setup(f,{emit:m}){const o=f,n=N({name:"",type:"varchar",nullable:!0,unique:!1}),$=()=>{n.value={name:"",type:"varchar",nullable:!0,unique:!1}};function c(){m("cancel")}async function v(){if(!o.table||!n.value.name||!n.value.type)return;const{success:C,error:p}=await o.table.addColumn(n.value);C||P("Database error",p),$(),m("created")}return(C,p)=>(u(),w(e(X),{title:"New column",width:720,open:o.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:c},{extra:a(()=>[t(e(K),null,{default:a(()=>[t(e(B),{onClick:c},{default:a(()=>[k("Cancel")]),_:1}),t(e(B),{type:"primary",onClick:v},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:n.value,layout:"vertical"},{default:a(()=>[t(e(A),{key:"name",label:"Name"},{default:a(()=>[t(e(L),{value:n.value.name,"onUpdate:value":p[0]||(p[0]=s=>n.value.name=s)},null,8,["value"])]),_:1}),t(e(A),{key:"type",label:"Type"},{default:a(()=>[t(e(J),{value:n.value.type,"onUpdate:value":p[1]||(p[1]=s=>n.value.type=s),"default-active-first-option":""},{default:a(()=>[(u(!0),D(R,null,V(e(ie),s=>(u(),w(e(le),{key:s,value:s},{default:a(()=>[k(z(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(e(A),{key:"nullable",label:"Nullable"},{default:a(()=>[t(e(F),{checked:n.value.nullable,"onUpdate:checked":p[2]||(p[2]=s=>n.value.nullable=s)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:a(()=>[t(e(F),{checked:n.value.unique,"onUpdate:checked":p[3]||(p[3]=s=>n.value.unique=s)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]))}}),Ee={class:"types-container"},Ne={class:"fullwidth-input"},qe={class:"fullwidth-input"},Re={class:"using-container"},ze={class:"fullwidth-input"},Pe=j({__name:"UpdateColumn",props:{open:{type:Boolean},table:{},column:{}},emits:["updated","cancel"],setup(f,{emit:m}){const o=f;function n(){m("cancel")}const $=()=>o.column.record.hasChangesDeep("type"),c=N({type:"default"});function v(i,l){return l==="varchar"||i==="int"&&l==="boolean"||i==="boolean"&&l==="int"}const C=()=>{s.value&&(c.value={type:"user-defined",using:I.value,mandatory:!0})},p=q(()=>c.value.type==="default"&&v(o.column.record.initialState.type,o.column.type)),s=q(()=>!v(o.column.record.initialState.type,o.column.type));function T(i){i?c.value={type:"default"}:c.value={type:"user-defined",using:I.value,mandatory:!1}}function r(i){if(c.value.type==="default")throw new Error("Can't change using when using default casting");c.value.using=i!=null?i:""}const _=()=>s.value?!0:$()&&c.value.type==="user-defined",I=q(()=>`${o.column.record.initialState.name}::${o.column.type}`);async function x(){if(!o.column)return;const i=c.value.type==="default"?I.value:c.value.using;try{await o.column.update(i),m("updated")}catch(l){l instanceof Error&&P("Database error",l.message)}}return(i,l)=>{const h=O("icon");return u(),w(e(X),{title:"Edit column",width:720,open:o.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:a(()=>[t(e(K),null,{default:a(()=>[t(e(B),{onClick:n},{default:a(()=>[k("Cancel")]),_:1}),t(e(B),{type:"primary",onClick:x},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:i.column,layout:"vertical"},{default:a(()=>[t(e(A),{key:"name",label:"Name"},{default:a(()=>[t(e(L),{value:i.column.name,"onUpdate:value":l[0]||(l[0]=d=>i.column.name=d)},null,8,["value"])]),_:1}),g("div",Ee,[g("span",Ne,[t(e(A),{key:"type",label:"Current Type"},{default:a(()=>[t(e(J),{value:i.column.record.initialState.type,"onUpdate:value":l[1]||(l[1]=d=>i.column.record.initialState.type=d),"default-active-first-option":"",disabled:""},null,8,["value"])]),_:1})]),t(h,{class:"right-arrow",path:e(ye)},null,8,["path"]),g("span",qe,[t(e(A),{key:"new-type",label:"New Type"},{default:a(()=>[t(e(J),{value:i.column.type,"onUpdate:value":l[2]||(l[2]=d=>i.column.type=d),"default-active-first-option":"",onChange:l[3]||(l[3]=d=>C())},{default:a(()=>[(u(!0),D(R,null,V(e(ie),d=>(u(),w(e(le),{key:d,value:d},{default:a(()=>[k(z(d),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})])]),g("div",Re,[$()?(u(),w(e(A),{key:"default-casting",label:"Use default casting"},{default:a(()=>[t(e(F),{checked:p.value,disabled:s.value,"onUpdate:checked":l[4]||(l[4]=d=>T(!!d))},null,8,["checked","disabled"])]),_:1})):S("",!0),g("span",ze,[$()?(u(),w(e(A),{key:"using",label:"Using"},{default:a(()=>[t(e(L),{value:c.value.type==="user-defined"?c.value.using:I.value,disabled:!_(),onInput:l[5]||(l[5]=d=>r(d.target.value))},null,8,["value","disabled"])]),_:1})):S("",!0)])]),t(e(A),{key:"nullable",label:"Nullable"},{default:a(()=>[t(e(F),{checked:i.column.nullable,"onUpdate:checked":l[6]||(l[6]=d=>i.column.nullable=d)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:a(()=>[t(e(F),{checked:i.column.unique,"onUpdate:checked":l[7]||(l[7]=d=>i.column.unique=d)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}});const je=Q(Pe,[["__scopeId","data-v-e474c12f"]]),ce=f=>(se("data-v-4f8ba920"),f=f(),ue(),f),Fe={class:"table-settings"},Ke={key:0},Le=ce(()=>g("span",null," protected ",-1)),Oe=[Le],Ve={key:1},Me=["onClick"],He=ce(()=>g("a",null,"Delete",-1)),Ge=j({__name:"TableColumns",props:{table:{},loading:{type:Boolean}},emits:["refresh"],setup(f,{emit:m}){var i;const o=f,n=N(o.loading);pe(()=>o.loading,()=>{n.value=o.loading});const $=oe();(i=o.table)==null||i.onUpdate(()=>{var l;$.replace({name:"tableEditor",params:{tableName:(l=o.table)==null?void 0:l.name}})});const v=[...[{title:"Name",dataIndex:"name"},{title:"Type",dataIndex:"type"},{title:"Default Value",dataIndex:"default"},{title:"Nullable",dataIndex:"nullable"},{title:"Primary Key",dataIndex:"primaryKey"}],{title:"Actions",key:"action"}],C=q(()=>{var l;return(l=o.table)==null?void 0:l.getColumns().map(h=>({name:h.name,type:h.type,default:h.default,nullable:h.nullable,primaryKey:h.primaryKey,id:h.id,unique:h.unique}))});function p(){r.value={type:"idle"}}function s(){p(),n.value=!0,setTimeout(()=>{m("refresh")},500)}function T(){r.value={type:"creating"}}const r=N({type:"idle"});function _(l){var h,d;(d=(h=o.table)==null?void 0:h.getColumn(l))==null||d.delete(),n.value=!0,setTimeout(()=>{m("refresh")},500)}const I=l=>{var h,d,b;return(b=(d=(h=o.table)==null?void 0:h.getColumn(l))==null?void 0:d.protected)!=null?b:!1},x=l=>{if(!o.table)throw new Error("Table not found");r.value={type:"editing",column:o.table.getColumn(l)}};return(l,h)=>(u(),D("div",Fe,[t(e(ne),{columns:v,"data-source":C.value,bordered:"",loading:n.value,pagination:!1},{bodyCell:a(({column:d,text:b,record:y})=>[d.key!=="action"?(u(),D(R,{key:0},[k(z(b),1)],64)):(u(),D(R,{key:1},[I(y.id)?(u(),D("div",Ke,Oe)):(u(),D("div",Ve,[g("span",null,[g("a",{onClick:()=>x(y.id)},"Edit",8,Me)]),t(e(de),{type:"vertical"}),t(e(ae),{title:"Sure to delete?",onConfirm:U=>_(y.id)},{default:a(()=>[He]),_:2},1032,["onConfirm"])]))],64))]),footer:a(()=>[t(e(B),{type:"primary",onClick:T},{default:a(()=>[k("+ Add New Column")]),_:1})]),_:1},8,["data-source","loading"]),l.table&&r.value.type==="creating"?(u(),w(xe,{key:0,open:"",table:o.table,onClose:p,onCreated:s},null,8,["table"])):S("",!0),l.table&&r.value.type==="editing"?(u(),w(je,{key:1,column:r.value.column,open:"",table:l.table,onUpdated:s,onClose:p,onCancel:p},null,8,["column","table"])):S("",!0)]))}});const Je=Q(Ge,[["__scopeId","data-v-4f8ba920"]]),Y=f=>(se("data-v-06f57b7a"),f=f(),ue(),f),Qe={class:"table-settings"},We=Y(()=>g("h2",{class:"title"},"Table settings",-1)),Xe=Y(()=>g("div",{class:"subtitle"},"Edit table metadata",-1)),Ye={key:0,class:"table-presenter"},Ze={class:"table-property-item"},et={class:"property-item"},tt={key:1},at={class:"change-warning"},nt={class:"section-title"},lt=Y(()=>g("div",{class:"section-body"}," Changing the table's name can possibly result in the break of running applications. ",-1)),ot={class:"table-name-value-input"},st={key:0,class:"error"},ut=j({__name:"TableSettings",props:{table:{}},emits:["refresh"],setup(f,{emit:m}){const o=f,n=te({error:"",editing:!1,loading:!1}),$=()=>n.editing=!0,c=()=>{o.table.resetChanges(),n.editing=!1,n.error=""},v=async()=>{n.error="",n.loading=!0;try{await C()}catch(s){s instanceof Error&&(P("Database error",s.message),n.error=s.message)}n.error||(n.editing=!1),n.loading=!1},C=async()=>{if(!o.table.name){n.error="Table name cannot be empty";return}try{await o.table.save(),m("refresh")}catch(s){s instanceof Error&&(P("Database error",s.message),n.error=s.message)}},p=s=>{o.table.name=s.target.value};return(s,T)=>{var _;const r=O("icon");return u(),D("div",Qe,[We,Xe,n.editing?(u(),D("div",tt,[g("div",at,[g("div",nt,[t(r,{path:e(_e),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),k(" Be careful ")]),lt]),t(e(K),{direction:"vertical"},{default:a(()=>[g("div",ot,[t(e(L),{value:s.table.name,type:"text",onInput:p,onBlur:T[0]||(T[0]=I=>s.table.fixTraillingName())},null,8,["value"])]),n.error?(u(),D("div",st,[t(r,{path:e(ge),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),k(" "+z(n.error),1)])):S("",!0),t(e(K),null,{default:a(()=>[t(e(B),{onClick:c},{default:a(()=>[k("Cancel")]),_:1}),t(e(B),{type:"primary",disabled:!s.table.hasChangesDeep("name"),onClick:v},{default:a(()=>[k(" Save Changes "),n.loading?(u(),w(he,{key:0,size:"16"})):S("",!0)]),_:1},8,["disabled"])]),_:1})]),_:1})])):(u(),D("div",Ye,[g("div",Ze,[g("div",et,"Name: "+z((_=s.table)==null?void 0:_.name),1)]),t(e(B),{onClick:$},{default:a(()=>[k("Edit Name")]),_:1})]))])}}});const it=Q(ut,[["__scopeId","data-v-06f57b7a"]]),zt=j({__name:"TableEditor",setup(f){const m=oe(),o=me(),n=o.params.tableId,$=o.params.projectId,c=N("data"),{result:v,loading:C,refetch:p}=re(()=>Promise.all([ke.get($).then(async r=>{const _=await Ce.get(r.organizationId);return{project:r,organization:_}}),be.get($,n)]).then(([{project:r,organization:_},I])=>fe({project:r,organization:_,table:I}))),s=q(()=>!C.value&&v.value?[{label:"My organizations",path:"/organizations"},{label:v.value.organization.name,path:`/organizations/${v.value.organization.id}`},{label:v.value.project.name,path:`/projects/${v.value.project.id}/tables`}]:void 0);function T(){m.push({name:"tables",params:{projectId:$}})}return(r,_)=>{const I=O("router-link");return u(),w(ve,null,{navbar:a(()=>{var x;return[t(e(Ie),{title:(x=e(v))==null?void 0:x.table.name,style:{padding:"5px 10px"},onBack:T},{footer:a(()=>[t(e(we),{"active-key":c.value,"onUpdate:activeKey":_[0]||(_[0]=i=>c.value=i)},{default:a(()=>[t(e(G),{key:"data",tab:"Data"}),t(e(G),{key:"columns",tab:"Columns"}),t(e(G),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),breadcrumb:a(()=>[s.value?(u(),w(e(De),{key:0},{default:a(()=>[(u(!0),D(R,null,V(s.value,(i,l)=>(u(),w(e($e),{key:l},{default:a(()=>[t(I,{to:i.path},{default:a(()=>[k(z(i.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):S("",!0)]),_:1},8,["title"])]}),content:a(()=>[e(v)&&c.value==="data"?(u(),w(Be,{key:0,loading:e(C),table:e(v).table},null,8,["loading","table"])):S("",!0),e(v)&&c.value==="columns"?(u(),w(Je,{key:1,table:e(v).table,loading:e(C),onRefresh:_[1]||(_[1]=x=>e(p)())},null,8,["table","loading"])):S("",!0),e(v)&&c.value==="settings"?(u(),w(it,{key:2,table:e(v).table,loading:e(C),onRefresh:_[2]||(_[2]=x=>e(p)())},null,8,["table","loading"])):S("",!0)]),_:1})}}});export{zt as default};
//# sourceMappingURL=TableEditor.0f2ceeaa.js.map
