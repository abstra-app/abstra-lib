import{d as F,r as N,G as q,F as te,a as M,b as u,eu as D,f as t,w as a,b8 as R,aA as k,eD as z,ew as S,e as g,u as e,cF as ae,b$ as x,cM as ne,cK as j,eC as O,c as w,eH as ee,bU as L,ad as J,cJ as le,t as Q,H as pe,eA as oe,eE as se,eF as ue,eB as me,eG as fe}from"./outputWidgets.ba81a3ef.js";import{B as ve}from"./BaseLayout.01bdc291.js";import{p as ie,T as be}from"./tables.d70bbcb6.js";import{a as re}from"./asyncComputed.07af8e5d.js";import{p as P}from"./popupNotifcation.5a5594ef.js";import{A as de}from"./index.a32f071e.js";import{F as W}from"./Base.69cdcef5.js";import{A}from"./FormItem.8d721992.js";import{A as X}from"./index.fc61b5a9.js";import"./router.177e3284.js";import"./columns.2c7a1cef.js";import{A as K}from"./index.244ef8bf.js";import{Q as ye,w as _e,R as ge}from"./icons.7c2025d0.js";import{L as he}from"./CircularLoading.bbf10178.js";import{P as ke}from"./project.8319d5b6.js";import{O as Ce}from"./organization.87798963.js";import{T as we,A as G}from"./TabPane.a6be70ba.js";import{B as De,a as $e,c as Ie}from"./index.c1ab3f86.js";import"./gateway.673663d5.js";import"./activeRecord.13581c7e.js";import"./pubsub.289ba836.js";import"./string.da716c1c.js";import"./transButton.5784faac.js";import"./isNumeric.75337b1e.js";import"./Text.e1135566.js";import"./Title.ecf022a9.js";import"./index.621a4b4e.js";import"./index.cf4c23b9.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[m]="843cf68a-0ebb-4a7a-b71c-5ed83dc29fe9",f._sentryDebugIdIdentifier="sentry-dbid-843cf68a-0ebb-4a7a-b71c-5ed83dc29fe9")}catch{}})();const Se={class:"table-data",style:{width:"calc(100% - 80px)"}},Ue={key:1},Ae=["onClick"],Te=g("a",null,"Delete",-1),xe=F({__name:"TableData",props:{table:{}},setup(f){var d;const m=f,o=N(1),n=N(5),$=q(()=>{var b,y;return{total:(y=(b=c.value)==null?void 0:b.total)!=null?y:0,current:o.value,pageSize:n.value,onChange:async(T,E)=>{o.value=T,n.value=E,await C()}}}),{result:c,loading:v,refetch:C}=re(()=>m.table.select({},n.value,o.value*n.value)),p=q(()=>{var y;return[...(y=m.table)==null?void 0:y.getColumns().map(T=>({title:T.name,dataIndex:T.name})),{title:"Actions",key:"action",fixed:"right",width:100,align:"center"}]}),s=q(()=>{var b;return((b=c.value)==null?void 0:b.rows.map(y=>({key:y.id,...y})))||[]}),U=N(!1),r=N({}),_=()=>{U.value=!0},I=()=>{r.value={},U.value=!1};let B=te((d=m.table)==null?void 0:d.getUnprotectedColumns().reduce((b,y)=>({...b,[y.name]:""}),{}));async function i(){if(!(!m.table||!B))try{r.value.id?await m.table.updateRow(r.value.id,r.value):await m.table.insertRow(r.value),r.value={},C(),I()}catch(b){b instanceof Error&&P("Database error",b.message)}}const l=async b=>{if(!(!c.value||!c.value.rows.find(y=>y.id===b)))try{await m.table.deleteRow(b),C()}catch(y){y instanceof Error&&P("Database error",y.message)}},h=b=>{var y;r.value=ee.exports.pick(ee.exports.cloneDeep((y=s.value)==null?void 0:y.filter(T=>b===T.key)[0]),m.table.getColumns().map(T=>T.name)),_()};return(b,y)=>{const T=M("ant-input");return u(),D("div",Se,[t(e(ne),{columns:p.value,"data-source":s.value,pagination:$.value,bordered:"",loading:e(v),scroll:{x:2e3,y:720}},{bodyCell:a(({column:E,text:V,record:Z})=>[p.value.map(H=>H.title).includes(E.dataIndex)?(u(),D(R,{key:0},[k(z(V),1)],64)):S("",!0),E.key==="action"?(u(),D("div",Ue,[g("span",null,[g("a",{onClick:H=>h(Z.id)},"Edit",8,Ae)]),t(e(de),{type:"vertical"}),t(e(ae),{title:"Sure to delete?",onConfirm:H=>l(Z.id)},{default:a(()=>[Te]),_:2},1032,["onConfirm"])])):S("",!0)]),footer:a(()=>[t(e(x),{type:"primary",onClick:_},{default:a(()=>[k("+ Add New Data")]),_:1})]),_:1},8,["columns","data-source","pagination","loading"]),t(e(X),{title:"Data",width:720,open:U.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:I},{extra:a(()=>[t(e(j),null,{default:a(()=>[t(e(x),{onClick:I},{default:a(()=>[k("Cancel")]),_:1}),t(e(x),{type:"primary",onClick:i},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:r.value,layout:"vertical"},{default:a(()=>[(u(!0),D(R,null,O(b.table.getUnprotectedColumns(),E=>(u(),w(e(A),{key:E.id,label:E.name},{default:a(()=>[r.value?(u(),w(T,{key:0,value:r.value[E.name],"onUpdate:value":V=>r.value[E.name]=V},null,8,["value","onUpdate:value"])):S("",!0)]),_:2},1032,["label"]))),128))]),_:1},8,["model"])]),_:1},8,["open"])])}}});const Be=F({__name:"NewColumn",props:{open:{type:Boolean},table:{}},emits:["created","cancel"],setup(f,{emit:m}){const o=f,n=N({name:"",type:"varchar",nullable:!0,unique:!1}),$=()=>{n.value={name:"",type:"varchar",nullable:!0,unique:!1}};function c(){m("cancel")}async function v(){if(!o.table||!n.value.name||!n.value.type)return;const{success:C,error:p}=await o.table.addColumn(n.value);C||P("Database error",p),$(),m("created")}return(C,p)=>(u(),w(e(X),{title:"New column",width:720,open:o.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:c},{extra:a(()=>[t(e(j),null,{default:a(()=>[t(e(x),{onClick:c},{default:a(()=>[k("Cancel")]),_:1}),t(e(x),{type:"primary",onClick:v},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:n.value,layout:"vertical"},{default:a(()=>[t(e(A),{key:"name",label:"Name"},{default:a(()=>[t(e(L),{value:n.value.name,"onUpdate:value":p[0]||(p[0]=s=>n.value.name=s)},null,8,["value"])]),_:1}),t(e(A),{key:"type",label:"Type"},{default:a(()=>[t(e(J),{value:n.value.type,"onUpdate:value":p[1]||(p[1]=s=>n.value.type=s),"default-active-first-option":""},{default:a(()=>[(u(!0),D(R,null,O(e(ie),s=>(u(),w(e(le),{key:s,value:s},{default:a(()=>[k(z(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(e(A),{key:"nullable",label:"Nullable"},{default:a(()=>[t(e(K),{checked:n.value.nullable,"onUpdate:checked":p[2]||(p[2]=s=>n.value.nullable=s)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:a(()=>[t(e(K),{checked:n.value.unique,"onUpdate:checked":p[3]||(p[3]=s=>n.value.unique=s)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]))}}),Ee={class:"types-container"},Ne={class:"fullwidth-input"},qe={class:"fullwidth-input"},Re={class:"using-container"},ze={class:"fullwidth-input"},Pe=F({__name:"UpdateColumn",props:{open:{type:Boolean},table:{},column:{}},emits:["updated","cancel"],setup(f,{emit:m}){const o=f;function n(){m("cancel")}const $=()=>o.column.record.hasChangesDeep("type"),c=N({type:"default"});function v(i,l){return l==="varchar"||i==="int"&&l==="boolean"||i==="boolean"&&l==="int"}const C=()=>{s.value&&(c.value={type:"user-defined",using:I.value,mandatory:!0})},p=q(()=>c.value.type==="default"&&v(o.column.record.initialState.type,o.column.type)),s=q(()=>!v(o.column.record.initialState.type,o.column.type));function U(i){i?c.value={type:"default"}:c.value={type:"user-defined",using:I.value,mandatory:!1}}function r(i){if(c.value.type==="default")throw new Error("Can't change using when using default casting");c.value.using=i!=null?i:""}const _=()=>s.value?!0:$()&&c.value.type==="user-defined",I=q(()=>`${o.column.record.initialState.name}::${o.column.type}`);async function B(){if(!o.column)return;const i=c.value.type==="default"?I.value:c.value.using;try{await o.column.update(i),m("updated")}catch(l){l instanceof Error&&P("Database error",l.message)}}return(i,l)=>{const h=M("icon");return u(),w(e(X),{title:"Edit column",width:720,open:o.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:a(()=>[t(e(j),null,{default:a(()=>[t(e(x),{onClick:n},{default:a(()=>[k("Cancel")]),_:1}),t(e(x),{type:"primary",onClick:B},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:i.column,layout:"vertical"},{default:a(()=>[t(e(A),{key:"name",label:"Name"},{default:a(()=>[t(e(L),{value:i.column.name,"onUpdate:value":l[0]||(l[0]=d=>i.column.name=d)},null,8,["value"])]),_:1}),g("div",Ee,[g("span",Ne,[t(e(A),{key:"type",label:"Current Type"},{default:a(()=>[t(e(J),{value:i.column.record.initialState.type,"onUpdate:value":l[1]||(l[1]=d=>i.column.record.initialState.type=d),"default-active-first-option":"",disabled:""},null,8,["value"])]),_:1})]),t(h,{class:"right-arrow",path:e(ye)},null,8,["path"]),g("span",qe,[t(e(A),{key:"new-type",label:"New Type"},{default:a(()=>[t(e(J),{value:i.column.type,"onUpdate:value":l[2]||(l[2]=d=>i.column.type=d),"default-active-first-option":"",onChange:l[3]||(l[3]=d=>C())},{default:a(()=>[(u(!0),D(R,null,O(e(ie),d=>(u(),w(e(le),{key:d,value:d},{default:a(()=>[k(z(d),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})])]),g("div",Re,[$()?(u(),w(e(A),{key:"default-casting",label:"Use default casting"},{default:a(()=>[t(e(K),{checked:p.value,disabled:s.value,"onUpdate:checked":l[4]||(l[4]=d=>U(!!d))},null,8,["checked","disabled"])]),_:1})):S("",!0),g("span",ze,[$()?(u(),w(e(A),{key:"using",label:"Using"},{default:a(()=>[t(e(L),{value:c.value.type==="user-defined"?c.value.using:I.value,disabled:!_(),onInput:l[5]||(l[5]=d=>r(d.target.value))},null,8,["value","disabled"])]),_:1})):S("",!0)])]),t(e(A),{key:"nullable",label:"Nullable"},{default:a(()=>[t(e(K),{checked:i.column.nullable,"onUpdate:checked":l[6]||(l[6]=d=>i.column.nullable=d)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:a(()=>[t(e(K),{checked:i.column.unique,"onUpdate:checked":l[7]||(l[7]=d=>i.column.unique=d)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}});const Fe=Q(Pe,[["__scopeId","data-v-e474c12f"]]),ce=f=>(se("data-v-4f8ba920"),f=f(),ue(),f),Ke={class:"table-settings"},je={key:0},Le=ce(()=>g("span",null," protected ",-1)),Me=[Le],Oe={key:1},Ve=["onClick"],He=ce(()=>g("a",null,"Delete",-1)),Ge=F({__name:"TableColumns",props:{table:{},loading:{type:Boolean}},emits:["refresh"],setup(f,{emit:m}){var i;const o=f,n=N(o.loading);pe(()=>o.loading,()=>{n.value=o.loading});const $=oe();(i=o.table)==null||i.onUpdate(()=>{var l;$.replace({name:"tableEditor",params:{tableName:(l=o.table)==null?void 0:l.name}})});const v=[...[{title:"Name",dataIndex:"name"},{title:"Type",dataIndex:"type"},{title:"Default Value",dataIndex:"default"},{title:"Nullable",dataIndex:"nullable"},{title:"Primary Key",dataIndex:"primaryKey"}],{title:"Actions",key:"action"}],C=q(()=>{var l;return(l=o.table)==null?void 0:l.getColumns().map(h=>({name:h.name,type:h.type,default:h.default,nullable:h.nullable,primaryKey:h.primaryKey,id:h.id,unique:h.unique}))});function p(){r.value={type:"idle"}}function s(){p(),n.value=!0,setTimeout(()=>{m("refresh")},500)}function U(){r.value={type:"creating"}}const r=N({type:"idle"});function _(l){var h,d;(d=(h=o.table)==null?void 0:h.getColumn(l))==null||d.delete(),n.value=!0,setTimeout(()=>{m("refresh")},500)}const I=l=>{var h,d,b;return(b=(d=(h=o.table)==null?void 0:h.getColumn(l))==null?void 0:d.protected)!=null?b:!1},B=l=>{if(!o.table)throw new Error("Table not found");r.value={type:"editing",column:o.table.getColumn(l)}};return(l,h)=>(u(),D("div",Ke,[t(e(ne),{columns:v,"data-source":C.value,bordered:"",loading:n.value,pagination:!1},{bodyCell:a(({column:d,text:b,record:y})=>[d.key!=="action"?(u(),D(R,{key:0},[k(z(b),1)],64)):(u(),D(R,{key:1},[I(y.id)?(u(),D("div",je,Me)):(u(),D("div",Oe,[g("span",null,[g("a",{onClick:()=>B(y.id)},"Edit",8,Ve)]),t(e(de),{type:"vertical"}),t(e(ae),{title:"Sure to delete?",onConfirm:T=>_(y.id)},{default:a(()=>[He]),_:2},1032,["onConfirm"])]))],64))]),footer:a(()=>[t(e(x),{type:"primary",onClick:U},{default:a(()=>[k("+ Add New Column")]),_:1})]),_:1},8,["data-source","loading"]),l.table&&r.value.type==="creating"?(u(),w(Be,{key:0,open:"",table:o.table,onClose:p,onCreated:s},null,8,["table"])):S("",!0),l.table&&r.value.type==="editing"?(u(),w(Fe,{key:1,column:r.value.column,open:"",table:l.table,onUpdated:s,onClose:p,onCancel:p},null,8,["column","table"])):S("",!0)]))}});const Je=Q(Ge,[["__scopeId","data-v-4f8ba920"]]),Y=f=>(se("data-v-06f57b7a"),f=f(),ue(),f),Qe={class:"table-settings"},We=Y(()=>g("h2",{class:"title"},"Table settings",-1)),Xe=Y(()=>g("div",{class:"subtitle"},"Edit table metadata",-1)),Ye={key:0,class:"table-presenter"},Ze={class:"table-property-item"},et={class:"property-item"},tt={key:1},at={class:"change-warning"},nt={class:"section-title"},lt=Y(()=>g("div",{class:"section-body"}," Changing the table's name can possibly result in the break of running applications. ",-1)),ot={class:"table-name-value-input"},st={key:0,class:"error"},ut=F({__name:"TableSettings",props:{table:{}},emits:["refresh"],setup(f,{emit:m}){const o=f,n=te({error:"",editing:!1,loading:!1}),$=()=>n.editing=!0,c=()=>{o.table.resetChanges(),n.editing=!1,n.error=""},v=async()=>{n.error="",n.loading=!0;try{await C()}catch(s){s instanceof Error&&(P("Database error",s.message),n.error=s.message)}n.error||(n.editing=!1),n.loading=!1},C=async()=>{if(!o.table.name){n.error="Table name cannot be empty";return}try{await o.table.save(),m("refresh")}catch(s){s instanceof Error&&(P("Database error",s.message),n.error=s.message)}},p=s=>{o.table.name=s.target.value};return(s,U)=>{var _;const r=M("icon");return u(),D("div",Qe,[We,Xe,n.editing?(u(),D("div",tt,[g("div",at,[g("div",nt,[t(r,{path:e(_e),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),k(" Be careful ")]),lt]),t(e(j),{direction:"vertical"},{default:a(()=>[g("div",ot,[t(e(L),{value:s.table.name,type:"text",onInput:p,onBlur:U[0]||(U[0]=I=>s.table.fixTraillingName())},null,8,["value"])]),n.error?(u(),D("div",st,[t(r,{path:e(ge),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),k(" "+z(n.error),1)])):S("",!0),t(e(j),null,{default:a(()=>[t(e(x),{onClick:c},{default:a(()=>[k("Cancel")]),_:1}),t(e(x),{type:"primary",disabled:!s.table.hasChangesDeep("name"),onClick:v},{default:a(()=>[k(" Save Changes "),n.loading?(u(),w(he,{key:0,size:"16"})):S("",!0)]),_:1},8,["disabled"])]),_:1})]),_:1})])):(u(),D("div",Ye,[g("div",Ze,[g("div",et,"Name: "+z((_=s.table)==null?void 0:_.name),1)]),t(e(x),{onClick:$},{default:a(()=>[k("Edit Name")]),_:1})]))])}}});const it=Q(ut,[["__scopeId","data-v-06f57b7a"]]),zt=F({__name:"TableEditor",setup(f){const m=oe(),o=me(),n=o.params.tableId,$=o.params.projectId,c=N("data"),{result:v,loading:C,refetch:p}=re(()=>Promise.all([ke.get($).then(async r=>{const _=await Ce.get(r.organizationId);return{project:r,organization:_}}),be.get($,n)]).then(([{project:r,organization:_},I])=>fe({project:r,organization:_,table:I}))),s=q(()=>!C.value&&v.value?[{label:"My organizations",path:"/organizations"},{label:v.value.organization.name,path:`/organizations/${v.value.organization.id}`},{label:v.value.project.name,path:`/projects/${v.value.project.id}/tables`}]:void 0);function U(){m.push({name:"tables",params:{projectId:$}})}return(r,_)=>{const I=M("router-link");return u(),w(ve,null,{navbar:a(()=>{var B;return[t(e(Ie),{title:(B=e(v))==null?void 0:B.table.name,style:{padding:"5px 10px"},onBack:U},{footer:a(()=>[t(e(we),{"active-key":c.value,"onUpdate:activeKey":_[0]||(_[0]=i=>c.value=i)},{default:a(()=>[t(e(G),{key:"data",tab:"Data"}),t(e(G),{key:"columns",tab:"Columns"}),t(e(G),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),breadcrumb:a(()=>[s.value?(u(),w(e(De),{key:0},{default:a(()=>[(u(!0),D(R,null,O(s.value,(i,l)=>(u(),w(e($e),{key:l},{default:a(()=>[t(I,{to:i.path},{default:a(()=>[k(z(i.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):S("",!0)]),_:1},8,["title"])]}),content:a(()=>[e(v)&&c.value==="data"?(u(),w(xe,{key:0,loading:e(C),table:e(v).table},null,8,["loading","table"])):S("",!0),e(v)&&c.value==="columns"?(u(),w(Je,{key:1,table:e(v).table,loading:e(C),onRefresh:_[1]||(_[1]=B=>e(p)())},null,8,["table","loading"])):S("",!0),e(v)&&c.value==="settings"?(u(),w(it,{key:2,table:e(v).table,loading:e(C),onRefresh:_[2]||(_[2]=B=>e(p)())},null,8,["table","loading"])):S("",!0)]),_:1})}}});export{zt as default};
//# sourceMappingURL=TableEditor.8495b76b.js.map
