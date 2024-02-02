import{d as H,r as E,H as L,G as ie,b as r,ev as S,f as a,w as l,a$ as V,ar as $,eD as F,ex as I,e as D,u as e,cA as de,bV as z,cH as ce,cF as Q,eC as Y,c as C,bO as P,eI as ke,bP as Ce,eL as X,eB as ae,a as Z,ae as te,cE as pe,bv as me,v as le,J as we,eA as fe,eE as ve,eF as ye,eK as De}from"./outputWidgets.274d1699.js";import{p as be,T as $e}from"./tables.aa3ff3a2.js";import{B as Ie}from"./BaseLayout.5f587ed9.js";import{a as ne}from"./asyncComputed.a16b1311.js";import{p as M}from"./popupNotifcation.93247a50.js";import{A as ge}from"./index.78170642.js";import{F as oe}from"./Form.9d0775d8.js";import{A}from"./FormItem.fcd730a7.js";import{A as ue}from"./index.17e519de.js";import"./router.b47ff2c4.js";import{P as se}from"./project.3622f703.js";import"./index.1658f610.js";import{O as Se}from"./organization.fbc8de2a.js";import{T as Ue,U as Te,V as xe,W as Ae,X as Ne,J as Ee,Y as Le}from"./icons.ca292280.js";import{A as J}from"./index.0399b1ee.js";import{L as qe}from"./CircularLoading.6cd1664d.js";import{T as Be,A as ee}from"./TabPane.9cda4de2.js";import{B as ze,a as Re,c as je}from"./index.b080332b.js";import"./record.f41c7001.js";import"./pubsub.2ce77d5f.js";import"./string.f9c7e27c.js";import"./hasIn.2daf6d7d.js";import"./isNumeric.75337b1e.js";import"./index.cf4c23b9.js";import"./Base.9e61dda1.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b=new Error().stack;b&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[b]="b86872d5-8036-4238-9dad-0337c5ce0f82",h._sentryDebugIdIdentifier="sentry-dbid-b86872d5-8036-4238-9dad-0337c5ce0f82")}catch{}})();const Oe={class:"table-data",style:{width:"calc(100% - 80px)"}},Pe={key:1},Ve=["onClick"],Fe=D("a",null,"Delete",-1),Ke=H({__name:"TableData",props:{table:{}},setup(h){var O,W;const b=h,n=E(1),m=E(10),N=L(()=>{var t,o;return{total:(o=(t=f.value)==null?void 0:t.total)!=null?o:0,current:n.value,pageSize:m.value,totalBoundaryShowSizeChanger:10,showSizeChanger:!0,pageSizeOptions:["10","25","50","100"],onChange:async(g,p)=>{n.value=g,m.value=p,await v()}}}),x=L(()=>{var t;return((t=f.value)==null?void 0:t.rows.length)===1}),{result:f,loading:d,refetch:v}=ne(()=>b.table.select({},(n.value-1)*m.value,m.value)),y=(t,o)=>g=>{if(t==="json"&&g==""){u.value[o]="null";return}u.value[o]=g},_=(O=b.table)==null?void 0:O.getColumns().map(t=>({title:t.name,dataIndex:t.name,resizable:!0,minWidth:100,ellipsis:!1})),k=E([..._,{title:"",key:"action",fixed:"right",width:150,align:"center"}]);function w(t,o){o.width=t}const U=L(()=>{var t;return((t=f.value)==null?void 0:t.rows.map(o=>({key:o.id,...o})))||[]}),c=E(!1),u=E({}),i=()=>{c.value=!0},s=()=>{u.value={},c.value=!1};let T=ie((W=b.table)==null?void 0:W.getUnprotectedColumns().reduce((t,o)=>({...t,[o.name]:""}),{}));async function q(){if(!(!b.table||!T))try{u.value.id?await b.table.updateRow(u.value.id,u.value):await b.table.insertRow(u.value),u.value={},v(),s()}catch(t){t instanceof Error&&M("Database error",t.message)}}const R=async t=>{if(!(!f.value||!f.value.rows.find(o=>o.id===t)))try{await b.table.deleteRow(t),x.value&&(n.value=Math.max(1,n.value-1)),v()}catch(o){o instanceof Error&&M("Database error",o.message)}},j=t=>{var K;const o=(K=U.value)==null?void 0:K.filter(B=>t===B.key)[0],g=b.table.getColumns(),p=g.map(B=>B.name),G=g.filter(B=>B.type==="json").map(B=>B.name);u.value=X.exports.pick(X.exports.cloneDeep(o),p),G.forEach(B=>{u.value[B]&&(u.value[B]=JSON.stringify(u.value[B]))}),i()};return(t,o)=>(r(),S("div",Oe,[a(e(ce),{columns:k.value,"data-source":U.value,pagination:N.value,bordered:"",loading:e(d),scroll:{x:2e3,y:720},size:"small",onResizeColumn:w},{bodyCell:l(({column:g,text:p,record:G})=>[k.value.map(K=>K.title).includes(g.dataIndex)?(r(),S(V,{key:0},[$(F(p),1)],64)):I("",!0),g.key==="action"?(r(),S("div",Pe,[D("span",null,[D("a",{onClick:K=>j(G.id)},"Edit",8,Ve)]),a(e(ge),{type:"vertical"}),a(e(de),{title:"Sure to delete?",onConfirm:K=>R(G.id)},{default:l(()=>[Fe]),_:2},1032,["onConfirm"])])):I("",!0)]),footer:l(()=>[a(e(z),{type:"primary",onClick:i},{default:l(()=>[$("+ Add New Data")]),_:1})]),_:1},8,["columns","data-source","pagination","loading"]),a(e(ue),{title:"Data",width:720,open:c.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:l(()=>[a(e(Q),null,{default:l(()=>[a(e(z),{onClick:s},{default:l(()=>[$("Cancel")]),_:1}),a(e(z),{type:"primary",onClick:q},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),default:l(()=>[a(e(oe),{model:u.value,layout:"vertical"},{default:l(()=>[(r(!0),S(V,null,Y(t.table.getUnprotectedColumns(),g=>(r(),C(e(A),{key:g.id,label:g.name,required:!g.nullable},{default:l(()=>[u.value?(r(),C(e(P),{key:0,placeholder:g.type,value:u.value[g.name],disabled:u.value[g.name]===null,"onUpdate:value":p=>y(g.type,g.name)(p)},ke({_:2},[g.nullable?{name:"addonAfter",fn:l(()=>[a(e(Ce),{checked:u.value[g.name]===null,"onUpdate:checked":p=>u.value[g.name]=p?null:""},{default:l(()=>[$(" NULL ")]),_:2},1032,["checked","onUpdate:checked"])]),key:"0"}:void 0]),1032,["placeholder","value","disabled","onUpdate:value"])):I("",!0)]),_:2},1032,["label","required"]))),128))]),_:1},8,["model"])]),_:1},8,["open"])]))}});const he=(h,b)=>b.includes(h)?{status:"error",help:"There already is a column with this name in the table"}:{status:""},Me=H({__name:"NewColumn",props:{open:{type:Boolean},table:{}},emits:["created","cancel"],setup(h,{emit:b}){const n=h,N=ae().params.projectId,x=L(()=>{var c;return((c=n.table)==null?void 0:c.getColumns().map(u=>u.name))||[]}),f=L(()=>he(d.value.name,x.value)),d=E({name:"",type:"varchar",default:"''",nullable:!0,unique:!1}),v=E({error:"success",message:"",fakeLoading:!1}),y=()=>{v.value.fakeLoading=!0,_()},_=X.exports.debounce(async()=>{const c=`select (${d.value.default})::${d.value.type} `;se.executeQuery(N,c,[]).then(u=>{v.value.error=u.errors.length>0?"error":"success",v.value.message=u.errors[0]||"",v.value.fakeLoading=!1})},500),k=()=>{d.value={name:"",type:"varchar",default:"''",nullable:!0,unique:!1}};function w(){b("cancel")}async function U(){if(!!n.table&&!(!d.value.name||!d.value.type))try{await n.table.addColumn(d.value),k(),b("created")}catch(c){c instanceof Error&&M("Database error",c.message)}}return(c,u)=>{const i=Z("icon");return r(),C(e(ue),{title:"New column",width:720,open:n.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:w},{extra:l(()=>[a(e(Q),null,{default:l(()=>[a(e(z),{onClick:w},{default:l(()=>[$("Cancel")]),_:1}),a(e(z),{type:"primary",onClick:U},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),default:l(()=>[a(e(oe),{model:d.value,layout:"vertical"},{default:l(()=>[a(e(A),{key:"name",label:"Name",required:!0,"validate-status":f.value.status,help:f.value.help},{default:l(()=>[a(e(P),{value:d.value.name,"onUpdate:value":u[0]||(u[0]=s=>d.value.name=s)},null,8,["value"])]),_:1},8,["validate-status","help"]),a(e(A),{key:"type",label:"Type",required:!0},{default:l(()=>[a(e(te),{value:d.value.type,"onUpdate:value":u[1]||(u[1]=s=>d.value.type=s),"default-active-first-option":"",onChange:y},{default:l(()=>[(r(!0),S(V,null,Y(e(be),s=>(r(),C(e(pe),{key:s,value:s},{default:l(()=>[$(F(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),a(e(A),{key:"default-value",label:"Default value","validate-status":v.value.error,help:v.value.message},{default:l(()=>[a(e(P),{value:d.value.default,"onUpdate:value":u[2]||(u[2]=s=>d.value.default=s),onInput:y},{suffix:l(()=>[v.value.fakeLoading?(r(),C(e(me),{key:0})):I("",!0),!v.value.fakeLoading&&v.value.error==="success"?(r(),C(i,{key:1,path:e(Ue)},null,8,["path"])):I("",!0),!v.value.fakeLoading&&v.value.error==="error"?(r(),C(i,{key:2,path:e(Te)},null,8,["path"])):I("",!0)]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),a(e(A),{key:"nullable",label:"Nullable"},{default:l(()=>[a(e(J),{checked:d.value.nullable,"onUpdate:checked":u[3]||(u[3]=s=>d.value.nullable=s)},null,8,["checked"])]),_:1}),a(e(A),{key:"unique",label:"Unique"},{default:l(()=>[a(e(J),{checked:d.value.unique,"onUpdate:checked":u[4]||(u[4]=s=>d.value.unique=s)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}}),He={class:"types-container"},Je={class:"fullwidth-input"},Qe={class:"fullwidth-input"},We={class:"using-container"},Ge={class:"fullwidth-input"},Xe=H({__name:"UpdateColumn",props:{open:{type:Boolean},table:{},column:{}},emits:["updated","cancel"],setup(h,{emit:b}){const n=h,N=ae().params.projectId,x=L(()=>{var t;return((t=n.table)==null?void 0:t.getColumns().map(o=>o.record.initialState.name))||[]}),f=L(()=>n.column.name===n.column.record.initialState.name?{status:"",help:""}:he(n.column.name,x.value)),{result:d,loading:v}=ne(async()=>n.table.select({},10,0).then(({total:t})=>t));function y(){n.column.record.resetChanges(),b("cancel")}const _=E({error:"success",message:"",fakeLoading:!1}),k=()=>{_.value.fakeLoading=!0,w()},w=X.exports.debounce(async()=>{if(!n.column.default){_.value.fakeLoading=!1;return}const t=`select (${n.column.default})::${n.column.type} `,o=await se.executeQuery(N,t,[]);_.value.error=o.errors.length>0?"error":"success",_.value.message=o.errors[0]||"",_.value.fakeLoading=!1},500),U=()=>d.value===0||v.value?!1:n.column.record.hasChangesDeep("type"),c=E({type:"default"});function u(t,o){return o==="varchar"||t==="int"&&o==="boolean"||t==="boolean"&&o==="int"}const i=()=>{k(),s.value||(c.value={type:"user-defined",using:O.value,mandatory:!0})},s=L(()=>c.value.type==="default"&&u(n.column.record.initialState.type,n.column.type)),T=L(()=>!u(n.column.record.initialState.type,n.column.type));function q(t){t?c.value={type:"default"}:c.value={type:"user-defined",using:O.value,mandatory:!1}}function R(t){if(c.value.type==="default")throw new Error("Can't change using when using default casting");c.value.using=t!=null?t:""}const j=()=>T.value?!0:U()&&c.value.type==="user-defined",O=L(()=>`${n.column.record.initialState.name}::${n.column.type}`);async function W(){if(!n.column)return;let t=c.value.type==="default"?O.value:c.value.using;d.value===0&&(t=`${n.column.name}::text::${n.column.type}`);try{await n.column.update(t),b("updated")}catch(o){o instanceof Error&&M("Database error",o.message)}}return(t,o)=>{const g=Z("icon");return r(),C(e(ue),{title:"Edit column",width:720,open:t.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:y},{extra:l(()=>[a(e(Q),null,{default:l(()=>[a(e(z),{onClick:y},{default:l(()=>[$("Cancel")]),_:1}),a(e(z),{type:"primary",onClick:W},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),default:l(()=>[a(e(oe),{model:t.column,layout:"vertical"},{default:l(()=>[a(e(A),{key:"name",label:"Name","validate-status":f.value.status,help:f.value.help},{default:l(()=>[a(e(P),{value:t.column.name,"onUpdate:value":o[0]||(o[0]=p=>t.column.name=p)},null,8,["value"])]),_:1},8,["validate-status","help"]),D("div",He,[D("span",Je,[a(e(A),{key:"type",label:"Current Type"},{default:l(()=>[a(e(te),{value:t.column.record.initialState.type,"onUpdate:value":o[1]||(o[1]=p=>t.column.record.initialState.type=p),"default-active-first-option":"",disabled:""},null,8,["value"])]),_:1})]),a(g,{class:"right-arrow",path:e(xe)},null,8,["path"]),D("span",Qe,[a(e(A),{key:"new-type",label:"New Type"},{default:l(()=>[a(e(te),{value:t.column.type,"onUpdate:value":o[2]||(o[2]=p=>t.column.type=p),"default-active-first-option":"",onChange:o[3]||(o[3]=p=>i())},{default:l(()=>[(r(!0),S(V,null,Y(e(be),p=>(r(),C(e(pe),{key:p,value:p},{default:l(()=>[$(F(p),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})])]),a(e(A),{key:"default-value",label:"Default value","validate-status":_.value.error,help:_.value.message},{default:l(()=>[a(e(P),{value:t.column.default,"onUpdate:value":o[4]||(o[4]=p=>t.column.default=p),onInput:k},{suffix:l(()=>[_.value.fakeLoading?(r(),C(e(me),{key:0,size:"small"})):I("",!0),!_.value.fakeLoading&&_.value.error==="success"?(r(),C(g,{key:1,path:e(Ae),width:"18",height:"18"},null,8,["path"])):I("",!0),!_.value.fakeLoading&&_.value.error==="error"?(r(),C(g,{key:2,path:e(Ne),width:"18",height:"18"},null,8,["path"])):I("",!0)]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),D("div",We,[U()?(r(),C(e(A),{key:"default-casting",label:"Use default casting"},{default:l(()=>[a(e(J),{checked:s.value,disabled:T.value,"onUpdate:checked":o[5]||(o[5]=p=>q(!!p))},null,8,["checked","disabled"])]),_:1})):I("",!0),D("span",Ge,[U()?(r(),C(e(A),{key:"using",label:"Using"},{default:l(()=>[a(e(P),{value:c.value.type==="user-defined"?c.value.using:O.value,disabled:!j(),onInput:o[6]||(o[6]=p=>R(p.target.value))},null,8,["value","disabled"])]),_:1})):I("",!0)])]),a(e(A),{key:"nullable",label:"Nullable"},{default:l(()=>[a(e(J),{checked:t.column.nullable,"onUpdate:checked":o[7]||(o[7]=p=>t.column.nullable=p)},null,8,["checked"])]),_:1}),a(e(A),{key:"unique",label:"Unique"},{default:l(()=>[a(e(J),{checked:t.column.unique,"onUpdate:checked":o[8]||(o[8]=p=>t.column.unique=p)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}});const Ye=le(Xe,[["__scopeId","data-v-f6a9bbd7"]]),_e=h=>(ve("data-v-dc242058"),h=h(),ye(),h),Ze={class:"table-settings"},et={key:0},tt=_e(()=>D("span",null," protected ",-1)),at=[tt],lt={key:1},nt=["onClick"],ot=_e(()=>D("a",null,"Delete",-1)),ut=H({__name:"TableColumns",props:{table:{},loading:{type:Boolean}},emits:["refresh"],setup(h,{emit:b}){var u;const n=h,m=E(n.loading);we(()=>n.loading,()=>{m.value=n.loading});const N=fe();(u=n.table)==null||u.onUpdate(()=>{var i;N.replace({name:"tableEditor",params:{tableName:(i=n.table)==null?void 0:i.name}})});const f=[...[{title:"Name",dataIndex:"name",sorter:(i,s)=>i.name.localeCompare(s.name)},{title:"Type",dataIndex:"type",sorter:(i,s)=>i.type.localeCompare(s.type)},{title:"Default Value",dataIndex:"default",sorter:(i,s)=>{var T,q,R,j;return(j=(R=i.default)==null?void 0:R.localeCompare((q=(T=s.default)==null?void 0:T.toString())!=null?q:""))!=null?j:0}},{title:"Nullable",dataIndex:"nullable",sorter:(i,s)=>i.nullable||!s.nullable?1:-1},{title:"Unique",dataIndex:"unique",sorter:(i,s)=>i.unique||!s.unique?1:-1},{title:"Primary Key",dataIndex:"primaryKey",sorter:(i,s)=>i.primaryKey||!s.primaryKey?1:-1}],{title:"",key:"action"}],d=L(()=>{var i;return(i=n.table)==null?void 0:i.getColumns()});function v(){k.value={type:"idle"}}function y(){v(),m.value=!0,setTimeout(()=>{b("refresh")},500)}function _(){k.value={type:"creating"}}const k=E({type:"idle"});function w(i){var s,T;(T=(s=n.table)==null?void 0:s.getColumn(i))==null||T.delete(),m.value=!0,setTimeout(()=>{b("refresh")},500)}const U=i=>{var s,T,q;return(q=(T=(s=n.table)==null?void 0:s.getColumn(i))==null?void 0:T.protected)!=null?q:!1},c=i=>{if(!n.table)throw new Error("Table not found");k.value={type:"editing",column:n.table.getColumn(i)}};return(i,s)=>(r(),S("div",Ze,[a(e(ce),{columns:f,"data-source":d.value,bordered:"",loading:m.value,pagination:!1},{bodyCell:l(({column:T,text:q,record:R})=>[T.key!=="action"?(r(),S(V,{key:0},[$(F(q),1)],64)):(r(),S(V,{key:1},[U(R.id)?(r(),S("div",et,at)):(r(),S("div",lt,[D("span",null,[D("a",{onClick:()=>c(R.id)},"Edit",8,nt)]),a(e(ge),{type:"vertical"}),a(e(de),{title:"Sure to delete?",onConfirm:j=>w(R.id)},{default:l(()=>[ot]),_:2},1032,["onConfirm"])]))],64))]),footer:l(()=>[a(e(z),{type:"primary",onClick:_},{default:l(()=>[$("+ Add New Column")]),_:1})]),_:1},8,["data-source","loading"]),i.table&&k.value.type==="creating"?(r(),C(Me,{key:0,open:"",table:n.table,onClose:v,onCancel:v,onCreated:y},null,8,["table"])):I("",!0),i.table&&k.value.type==="editing"?(r(),C(Ye,{key:1,column:k.value.column,open:"",table:i.table,onUpdated:y,onClose:v,onCancel:v},null,8,["column","table"])):I("",!0)]))}});const st=le(ut,[["__scopeId","data-v-dc242058"]]),re=h=>(ve("data-v-06f57b7a"),h=h(),ye(),h),rt={class:"table-settings"},it=re(()=>D("h2",{class:"title"},"Table settings",-1)),dt=re(()=>D("div",{class:"subtitle"},"Edit table metadata",-1)),ct={key:0,class:"table-presenter"},pt={class:"table-property-item"},mt={class:"property-item"},ft={key:1},vt={class:"change-warning"},yt={class:"section-title"},bt=re(()=>D("div",{class:"section-body"}," Changing the table's name can possibly result in the break of running applications. ",-1)),gt={class:"table-name-value-input"},ht={key:0,class:"error"},_t=H({__name:"TableSettings",props:{table:{}},emits:["refresh"],setup(h,{emit:b}){const n=h,m=ie({error:"",editing:!1,loading:!1}),N=()=>m.editing=!0,x=()=>{n.table.resetChanges(),m.editing=!1,m.error=""},f=async()=>{m.error="",m.loading=!0;try{await d()}catch(y){y instanceof Error&&(M("Database error",y.message),m.error=y.message)}m.error||(m.editing=!1),m.loading=!1},d=async()=>{if(!n.table.name){m.error="Table name cannot be empty";return}try{await n.table.save(),b("refresh")}catch(y){y instanceof Error&&(M("Database error",y.message),m.error=y.message)}},v=y=>{n.table.name=y.target.value};return(y,_)=>{var w;const k=Z("icon");return r(),S("div",rt,[it,dt,m.editing?(r(),S("div",ft,[D("div",vt,[D("div",yt,[a(k,{path:e(Ee),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),$(" Be careful ")]),bt]),a(e(Q),{direction:"vertical"},{default:l(()=>[D("div",gt,[a(e(P),{value:y.table.name,type:"text",onInput:v,onBlur:_[0]||(_[0]=U=>y.table.fixTraillingName())},null,8,["value"])]),m.error?(r(),S("div",ht,[a(k,{path:e(Le),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),$(" "+F(m.error),1)])):I("",!0),a(e(Q),null,{default:l(()=>[a(e(z),{onClick:x},{default:l(()=>[$("Cancel")]),_:1}),a(e(z),{type:"primary",disabled:!y.table.hasChangesDeep("name"),onClick:f},{default:l(()=>[$(" Save Changes "),m.loading?(r(),C(qe,{key:0,size:"16"})):I("",!0)]),_:1},8,["disabled"])]),_:1})]),_:1})])):(r(),S("div",ct,[D("div",pt,[D("div",mt,"Name: "+F((w=y.table)==null?void 0:w.name),1)]),a(e(z),{onClick:N},{default:l(()=>[$("Edit Name")]),_:1})]))])}}});const kt=le(_t,[["__scopeId","data-v-06f57b7a"]]),Jt=H({__name:"TableEditor",setup(h){const b=fe(),n=ae(),m=n.params.tableId,N=n.params.projectId,x=E("data"),{result:f,loading:d,refetch:v}=ne(()=>Promise.all([se.get(N).then(async k=>{const w=await Se.get(k.organizationId);return{project:k,organization:w}}),$e.get(N,m)]).then(([{project:k,organization:w},U])=>De({project:k,organization:w,table:U}))),y=L(()=>!d.value&&f.value?[{label:"My organizations",path:"/organizations"},{label:f.value.organization.name,path:`/organizations/${f.value.organization.id}`},{label:f.value.project.name,path:`/projects/${f.value.project.id}/tables`}]:void 0);function _(){b.push({name:"tables",params:{projectId:N}})}return(k,w)=>{const U=Z("router-link");return r(),C(Ie,null,{navbar:l(()=>{var c;return[a(e(je),{title:(c=e(f))==null?void 0:c.table.name,style:{padding:"5px 25px"},onBack:_},{footer:l(()=>[a(e(Be),{"active-key":x.value,"onUpdate:activeKey":w[0]||(w[0]=u=>x.value=u)},{default:l(()=>[a(e(ee),{key:"columns",tab:"Columns"}),a(e(ee),{key:"data",tab:"Data"}),a(e(ee),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[y.value?(r(),C(e(ze),{key:0},{default:l(()=>[(r(!0),S(V,null,Y(y.value,(u,i)=>(r(),C(e(Re),{key:i},{default:l(()=>[a(U,{to:u.path},{default:l(()=>[$(F(u.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):I("",!0)]),_:1},8,["title"])]}),content:l(()=>[e(f)&&x.value==="columns"?(r(),C(st,{key:0,table:e(f).table,loading:e(d),onRefresh:w[1]||(w[1]=c=>e(v)())},null,8,["table","loading"])):I("",!0),e(f)&&x.value==="data"?(r(),C(Ke,{key:1,loading:e(d),table:e(f).table},null,8,["loading","table"])):I("",!0),e(f)&&x.value==="settings"?(r(),C(kt,{key:2,table:e(f).table,loading:e(d),onRefresh:w[2]||(w[2]=c=>e(v)())},null,8,["table","loading"])):I("",!0)]),_:1})}}});export{Jt as default};
//# sourceMappingURL=TableEditor.f1189491.js.map
