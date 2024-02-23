import{d as H,r as E,H as L,G as ie,b as r,ev as S,f as t,w as l,a$ as V,ar as $,eD as F,ex as I,e as D,u as e,cA as de,bV as z,cH as ce,cF as Q,eC as Z,c as C,bO as P,eI as ke,bP as Ce,eL as Y,eB as te,a as X,ae,cE as pe,bv as me,v as le,J as we,eA as fe,eE as ve,eF as ye,eK as De}from"./outputWidgets.16ea2802.js";import{p as be,T as $e}from"./tables.e42ef23e.js";import{B as Ie}from"./BaseLayout.4c45db9d.js";import{a as ne}from"./asyncComputed.47e4eb5e.js";import{p as M}from"./popupNotifcation.653fd751.js";import{A as ge}from"./index.660b3e74.js";import{F as oe,A}from"./Form.8992253c.js";import{A as ue}from"./index.afe70fc1.js";import"./router.84d64d32.js";import{P as se}from"./project.d2e4011e.js";import"./index.d6d761a8.js";import{O as Se}from"./organization.0afc5f14.js";import{Y as Ue,Z as xe,_ as Te,$ as Ae,a0 as Ne,O as Ee,a1 as Le}from"./icons.ab8b614a.js";import{A as J}from"./index.ddeef2e2.js";import{L as qe}from"./CircularLoading.b7a86073.js";import{T as Be,A as ee}from"./TabPane.a84ab4ec.js";import{B as ze,a as Re,c as Oe}from"./index.10ef2cfb.js";import"./record.a44a4b35.js";import"./pubsub.af6aba89.js";import"./string.a0d62bb0.js";import"./hasIn.4309230e.js";import"./isNumeric.75337b1e.js";import"./index.cf4c23b9.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Base.5893a998.js";import"./Typography.1157fa19.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b=new Error().stack;b&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[b]="da8affe2-786b-4906-a717-21a0736e56d8",h._sentryDebugIdIdentifier="sentry-dbid-da8affe2-786b-4906-a717-21a0736e56d8")}catch{}})();const je={class:"table-data",style:{width:"calc(100% - 80px)"}},Pe={key:1},Ve=["onClick"],Fe=D("a",null,"Delete",-1),Ke=H({__name:"TableData",props:{table:{}},setup(h){var j,G;const b=h,n=E(1),m=E(10),N=L(()=>{var a,o;return{total:(o=(a=f.value)==null?void 0:a.total)!=null?o:0,current:n.value,pageSize:m.value,totalBoundaryShowSizeChanger:10,showSizeChanger:!0,pageSizeOptions:["10","25","50","100"],onChange:async(g,p)=>{n.value=g,m.value=p,await v()}}}),T=L(()=>{var a;return((a=f.value)==null?void 0:a.rows.length)===1}),{result:f,loading:d,refetch:v}=ne(()=>b.table.select({},(n.value-1)*m.value,m.value)),y=(a,o)=>g=>{if(a==="json"&&g==""){u.value[o]="null";return}u.value[o]=g},_=(j=b.table)==null?void 0:j.getColumns().map(a=>({title:a.name,dataIndex:a.name,resizable:!0,minWidth:100,ellipsis:!1})),k=E([..._,{title:"",key:"action",fixed:"right",width:150,align:"center"}]);function w(a,o){o.width=a}const U=L(()=>{var a;return((a=f.value)==null?void 0:a.rows.map(o=>({key:o.id,...o})))||[]}),c=E(!1),u=E({}),i=()=>{c.value=!0},s=()=>{u.value={},c.value=!1};let x=ie((G=b.table)==null?void 0:G.getUnprotectedColumns().reduce((a,o)=>({...a,[o.name]:""}),{}));async function q(){if(!(!b.table||!x))try{u.value.id?await b.table.updateRow(u.value.id,u.value):await b.table.insertRow(u.value),u.value={},v(),s()}catch(a){a instanceof Error&&M("Database error",a.message)}}const R=async a=>{if(!(!f.value||!f.value.rows.find(o=>o.id===a)))try{await b.table.deleteRow(a),T.value&&(n.value=Math.max(1,n.value-1)),v()}catch(o){o instanceof Error&&M("Database error",o.message)}},O=a=>{var K;const o=(K=U.value)==null?void 0:K.filter(B=>a===B.key)[0],g=b.table.getColumns(),p=g.map(B=>B.name),W=g.filter(B=>B.type==="json").map(B=>B.name);u.value=Y.exports.pick(Y.exports.cloneDeep(o),p),W.forEach(B=>{u.value[B]&&(u.value[B]=JSON.stringify(u.value[B]))}),i()};return(a,o)=>(r(),S("div",je,[t(e(ce),{columns:k.value,"data-source":U.value,pagination:N.value,bordered:"",loading:e(d),scroll:{x:2e3,y:720},size:"small",onResizeColumn:w},{bodyCell:l(({column:g,text:p,record:W})=>[k.value.map(K=>K.title).includes(g.dataIndex)?(r(),S(V,{key:0},[$(F(p),1)],64)):I("",!0),g.key==="action"?(r(),S("div",Pe,[D("span",null,[D("a",{onClick:K=>O(W.id)},"Edit",8,Ve)]),t(e(ge),{type:"vertical"}),t(e(de),{title:"Sure to delete?",onConfirm:K=>R(W.id)},{default:l(()=>[Fe]),_:2},1032,["onConfirm"])])):I("",!0)]),footer:l(()=>[t(e(z),{type:"primary",onClick:i},{default:l(()=>[$("+ Add New Data")]),_:1})]),_:1},8,["columns","data-source","pagination","loading"]),t(e(ue),{title:"Data",width:720,open:c.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:l(()=>[t(e(Q),null,{default:l(()=>[t(e(z),{onClick:s},{default:l(()=>[$("Cancel")]),_:1}),t(e(z),{type:"primary",onClick:q},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),default:l(()=>[t(e(oe),{model:u.value,layout:"vertical"},{default:l(()=>[(r(!0),S(V,null,Z(a.table.getUnprotectedColumns(),g=>(r(),C(e(A),{key:g.id,label:g.name,required:!g.nullable},{default:l(()=>[u.value?(r(),C(e(P),{key:0,placeholder:g.type,value:u.value[g.name],disabled:u.value[g.name]===null,"onUpdate:value":p=>y(g.type,g.name)(p)},ke({_:2},[g.nullable?{name:"addonAfter",fn:l(()=>[t(e(Ce),{checked:u.value[g.name]===null,"onUpdate:checked":p=>u.value[g.name]=p?null:""},{default:l(()=>[$(" NULL ")]),_:2},1032,["checked","onUpdate:checked"])]),key:"0"}:void 0]),1032,["placeholder","value","disabled","onUpdate:value"])):I("",!0)]),_:2},1032,["label","required"]))),128))]),_:1},8,["model"])]),_:1},8,["open"])]))}});const he=(h,b)=>b.includes(h)?{status:"error",help:"There already is a column with this name in the table"}:{status:""},Me=H({__name:"NewColumn",props:{open:{type:Boolean},table:{}},emits:["created","cancel"],setup(h,{emit:b}){const n=h,N=te().params.projectId,T=L(()=>{var c;return((c=n.table)==null?void 0:c.getColumns().map(u=>u.name))||[]}),f=L(()=>he(d.value.name,T.value)),d=E({name:"",type:"varchar",default:"''",nullable:!0,unique:!1}),v=E({error:"success",message:"",fakeLoading:!1}),y=()=>{v.value.fakeLoading=!0,_()},_=Y.exports.debounce(async()=>{const c=`select (${d.value.default})::${d.value.type} `;se.executeQuery(N,c,[]).then(u=>{v.value.error=u.errors.length>0?"error":"success",v.value.message=u.errors[0]||"",v.value.fakeLoading=!1})},500),k=()=>{d.value={name:"",type:"varchar",default:"''",nullable:!0,unique:!1}};function w(){b("cancel")}async function U(){if(!!n.table&&!(!d.value.name||!d.value.type))try{await n.table.addColumn(d.value),k(),b("created")}catch(c){c instanceof Error&&M("Database error",c.message)}}return(c,u)=>{const i=X("icon");return r(),C(e(ue),{title:"New column",width:720,open:n.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:w},{extra:l(()=>[t(e(Q),null,{default:l(()=>[t(e(z),{onClick:w},{default:l(()=>[$("Cancel")]),_:1}),t(e(z),{type:"primary",onClick:U},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),default:l(()=>[t(e(oe),{model:d.value,layout:"vertical"},{default:l(()=>[t(e(A),{key:"name",label:"Name",required:!0,"validate-status":f.value.status,help:f.value.help},{default:l(()=>[t(e(P),{value:d.value.name,"onUpdate:value":u[0]||(u[0]=s=>d.value.name=s)},null,8,["value"])]),_:1},8,["validate-status","help"]),t(e(A),{key:"type",label:"Type",required:!0},{default:l(()=>[t(e(ae),{value:d.value.type,"onUpdate:value":u[1]||(u[1]=s=>d.value.type=s),"default-active-first-option":"",onChange:y},{default:l(()=>[(r(!0),S(V,null,Z(e(be),s=>(r(),C(e(pe),{key:s,value:s},{default:l(()=>[$(F(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(e(A),{key:"default-value",label:"Default value","validate-status":v.value.error,help:v.value.message},{default:l(()=>[t(e(P),{value:d.value.default,"onUpdate:value":u[2]||(u[2]=s=>d.value.default=s),onInput:y},{suffix:l(()=>[v.value.fakeLoading?(r(),C(e(me),{key:0})):I("",!0),!v.value.fakeLoading&&v.value.error==="success"?(r(),C(i,{key:1,path:e(Ue)},null,8,["path"])):I("",!0),!v.value.fakeLoading&&v.value.error==="error"?(r(),C(i,{key:2,path:e(xe)},null,8,["path"])):I("",!0)]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),t(e(A),{key:"nullable",label:"Nullable"},{default:l(()=>[t(e(J),{checked:d.value.nullable,"onUpdate:checked":u[3]||(u[3]=s=>d.value.nullable=s)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:l(()=>[t(e(J),{checked:d.value.unique,"onUpdate:checked":u[4]||(u[4]=s=>d.value.unique=s)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}}),He={class:"types-container"},Je={class:"fullwidth-input"},Qe={class:"fullwidth-input"},Ge={class:"using-container"},We={class:"fullwidth-input"},Ye=H({__name:"UpdateColumn",props:{open:{type:Boolean},table:{},column:{}},emits:["updated","cancel"],setup(h,{emit:b}){const n=h,N=te().params.projectId,T=L(()=>{var a;return((a=n.table)==null?void 0:a.getColumns().map(o=>o.record.initialState.name))||[]}),f=L(()=>n.column.name===n.column.record.initialState.name?{status:"",help:""}:he(n.column.name,T.value)),{result:d,loading:v}=ne(async()=>n.table.select({},10,0).then(({total:a})=>a));function y(){n.column.record.resetChanges(),b("cancel")}const _=E({error:"success",message:"",fakeLoading:!1}),k=()=>{_.value.fakeLoading=!0,w()},w=Y.exports.debounce(async()=>{if(!n.column.default){_.value.fakeLoading=!1;return}const a=`select (${n.column.default})::${n.column.type} `,o=await se.executeQuery(N,a,[]);_.value.error=o.errors.length>0?"error":"success",_.value.message=o.errors[0]||"",_.value.fakeLoading=!1},500),U=()=>d.value===0||v.value?!1:n.column.record.hasChangesDeep("type"),c=E({type:"default"});function u(a,o){return o==="varchar"||a==="int"&&o==="boolean"||a==="boolean"&&o==="int"}const i=()=>{k(),s.value||(c.value={type:"user-defined",using:j.value,mandatory:!0})},s=L(()=>c.value.type==="default"&&u(n.column.record.initialState.type,n.column.type)),x=L(()=>!u(n.column.record.initialState.type,n.column.type));function q(a){a?c.value={type:"default"}:c.value={type:"user-defined",using:j.value,mandatory:!1}}function R(a){if(c.value.type==="default")throw new Error("Can't change using when using default casting");c.value.using=a!=null?a:""}const O=()=>x.value?!0:U()&&c.value.type==="user-defined",j=L(()=>`${n.column.record.initialState.name}::${n.column.type}`);async function G(){if(!n.column)return;let a=c.value.type==="default"?j.value:c.value.using;d.value===0&&(a=`${n.column.name}::text::${n.column.type}`);try{await n.column.update(a),b("updated")}catch(o){o instanceof Error&&M("Database error",o.message)}}return(a,o)=>{const g=X("icon");return r(),C(e(ue),{title:"Edit column",width:720,open:a.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:y},{extra:l(()=>[t(e(Q),null,{default:l(()=>[t(e(z),{onClick:y},{default:l(()=>[$("Cancel")]),_:1}),t(e(z),{type:"primary",onClick:G},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),default:l(()=>[t(e(oe),{model:a.column,layout:"vertical"},{default:l(()=>[t(e(A),{key:"name",label:"Name","validate-status":f.value.status,help:f.value.help},{default:l(()=>[t(e(P),{value:a.column.name,"onUpdate:value":o[0]||(o[0]=p=>a.column.name=p)},null,8,["value"])]),_:1},8,["validate-status","help"]),D("div",He,[D("span",Je,[t(e(A),{key:"type",label:"Current Type"},{default:l(()=>[t(e(ae),{value:a.column.record.initialState.type,"onUpdate:value":o[1]||(o[1]=p=>a.column.record.initialState.type=p),"default-active-first-option":"",disabled:""},null,8,["value"])]),_:1})]),t(g,{class:"right-arrow",path:e(Te)},null,8,["path"]),D("span",Qe,[t(e(A),{key:"new-type",label:"New Type"},{default:l(()=>[t(e(ae),{value:a.column.type,"onUpdate:value":o[2]||(o[2]=p=>a.column.type=p),"default-active-first-option":"",onChange:o[3]||(o[3]=p=>i())},{default:l(()=>[(r(!0),S(V,null,Z(e(be),p=>(r(),C(e(pe),{key:p,value:p},{default:l(()=>[$(F(p),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})])]),t(e(A),{key:"default-value",label:"Default value","validate-status":_.value.error,help:_.value.message},{default:l(()=>[t(e(P),{value:a.column.default,"onUpdate:value":o[4]||(o[4]=p=>a.column.default=p),onInput:k},{suffix:l(()=>[_.value.fakeLoading?(r(),C(e(me),{key:0,size:"small"})):I("",!0),!_.value.fakeLoading&&_.value.error==="success"?(r(),C(g,{key:1,path:e(Ae),width:"18",height:"18"},null,8,["path"])):I("",!0),!_.value.fakeLoading&&_.value.error==="error"?(r(),C(g,{key:2,path:e(Ne),width:"18",height:"18"},null,8,["path"])):I("",!0)]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),D("div",Ge,[U()?(r(),C(e(A),{key:"default-casting",label:"Use default casting"},{default:l(()=>[t(e(J),{checked:s.value,disabled:x.value,"onUpdate:checked":o[5]||(o[5]=p=>q(!!p))},null,8,["checked","disabled"])]),_:1})):I("",!0),D("span",We,[U()?(r(),C(e(A),{key:"using",label:"Using"},{default:l(()=>[t(e(P),{value:c.value.type==="user-defined"?c.value.using:j.value,disabled:!O(),onInput:o[6]||(o[6]=p=>R(p.target.value))},null,8,["value","disabled"])]),_:1})):I("",!0)])]),t(e(A),{key:"nullable",label:"Nullable"},{default:l(()=>[t(e(J),{checked:a.column.nullable,"onUpdate:checked":o[7]||(o[7]=p=>a.column.nullable=p)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:l(()=>[t(e(J),{checked:a.column.unique,"onUpdate:checked":o[8]||(o[8]=p=>a.column.unique=p)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}});const Ze=le(Ye,[["__scopeId","data-v-f6a9bbd7"]]),_e=h=>(ve("data-v-dc242058"),h=h(),ye(),h),Xe={class:"table-settings"},ea={key:0},aa=_e(()=>D("span",null," protected ",-1)),ta=[aa],la={key:1},na=["onClick"],oa=_e(()=>D("a",null,"Delete",-1)),ua=H({__name:"TableColumns",props:{table:{},loading:{type:Boolean}},emits:["refresh"],setup(h,{emit:b}){var u;const n=h,m=E(n.loading);we(()=>n.loading,()=>{m.value=n.loading});const N=fe();(u=n.table)==null||u.onUpdate(()=>{var i;N.replace({name:"tableEditor",params:{tableName:(i=n.table)==null?void 0:i.name}})});const f=[...[{title:"Name",dataIndex:"name",sorter:(i,s)=>i.name.localeCompare(s.name)},{title:"Type",dataIndex:"type",sorter:(i,s)=>i.type.localeCompare(s.type)},{title:"Default Value",dataIndex:"default",sorter:(i,s)=>{var x,q,R,O;return(O=(R=i.default)==null?void 0:R.localeCompare((q=(x=s.default)==null?void 0:x.toString())!=null?q:""))!=null?O:0}},{title:"Nullable",dataIndex:"nullable",sorter:(i,s)=>i.nullable||!s.nullable?1:-1},{title:"Unique",dataIndex:"unique",sorter:(i,s)=>i.unique||!s.unique?1:-1},{title:"Primary Key",dataIndex:"primaryKey",sorter:(i,s)=>i.primaryKey||!s.primaryKey?1:-1}],{title:"",key:"action"}],d=L(()=>{var i;return(i=n.table)==null?void 0:i.getColumns()});function v(){k.value={type:"idle"}}function y(){v(),m.value=!0,setTimeout(()=>{b("refresh")},500)}function _(){k.value={type:"creating"}}const k=E({type:"idle"});function w(i){var s,x;(x=(s=n.table)==null?void 0:s.getColumn(i))==null||x.delete(),m.value=!0,setTimeout(()=>{b("refresh")},500)}const U=i=>{var s,x,q;return(q=(x=(s=n.table)==null?void 0:s.getColumn(i))==null?void 0:x.protected)!=null?q:!1},c=i=>{if(!n.table)throw new Error("Table not found");k.value={type:"editing",column:n.table.getColumn(i)}};return(i,s)=>(r(),S("div",Xe,[t(e(ce),{columns:f,"data-source":d.value,bordered:"",loading:m.value,pagination:!1},{bodyCell:l(({column:x,text:q,record:R})=>[x.key!=="action"?(r(),S(V,{key:0},[$(F(q),1)],64)):(r(),S(V,{key:1},[U(R.id)?(r(),S("div",ea,ta)):(r(),S("div",la,[D("span",null,[D("a",{onClick:()=>c(R.id)},"Edit",8,na)]),t(e(ge),{type:"vertical"}),t(e(de),{title:"Sure to delete?",onConfirm:O=>w(R.id)},{default:l(()=>[oa]),_:2},1032,["onConfirm"])]))],64))]),footer:l(()=>[t(e(z),{type:"primary",onClick:_},{default:l(()=>[$("+ Add New Column")]),_:1})]),_:1},8,["data-source","loading"]),i.table&&k.value.type==="creating"?(r(),C(Me,{key:0,open:"",table:n.table,onClose:v,onCancel:v,onCreated:y},null,8,["table"])):I("",!0),i.table&&k.value.type==="editing"?(r(),C(Ze,{key:1,column:k.value.column,open:"",table:i.table,onUpdated:y,onClose:v,onCancel:v},null,8,["column","table"])):I("",!0)]))}});const sa=le(ua,[["__scopeId","data-v-dc242058"]]),re=h=>(ve("data-v-06f57b7a"),h=h(),ye(),h),ra={class:"table-settings"},ia=re(()=>D("h2",{class:"title"},"Table settings",-1)),da=re(()=>D("div",{class:"subtitle"},"Edit table metadata",-1)),ca={key:0,class:"table-presenter"},pa={class:"table-property-item"},ma={class:"property-item"},fa={key:1},va={class:"change-warning"},ya={class:"section-title"},ba=re(()=>D("div",{class:"section-body"}," Changing the table's name can possibly result in the break of running applications. ",-1)),ga={class:"table-name-value-input"},ha={key:0,class:"error"},_a=H({__name:"TableSettings",props:{table:{}},emits:["refresh"],setup(h,{emit:b}){const n=h,m=ie({error:"",editing:!1,loading:!1}),N=()=>m.editing=!0,T=()=>{n.table.resetChanges(),m.editing=!1,m.error=""},f=async()=>{m.error="",m.loading=!0;try{await d()}catch(y){y instanceof Error&&(M("Database error",y.message),m.error=y.message)}m.error||(m.editing=!1),m.loading=!1},d=async()=>{if(!n.table.name){m.error="Table name cannot be empty";return}try{await n.table.save(),b("refresh")}catch(y){y instanceof Error&&(M("Database error",y.message),m.error=y.message)}},v=y=>{n.table.name=y.target.value};return(y,_)=>{var w;const k=X("icon");return r(),S("div",ra,[ia,da,m.editing?(r(),S("div",fa,[D("div",va,[D("div",ya,[t(k,{path:e(Ee),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),$(" Be careful ")]),ba]),t(e(Q),{direction:"vertical"},{default:l(()=>[D("div",ga,[t(e(P),{value:y.table.name,type:"text",onInput:v,onBlur:_[0]||(_[0]=U=>y.table.fixTraillingName())},null,8,["value"])]),m.error?(r(),S("div",ha,[t(k,{path:e(Le),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),$(" "+F(m.error),1)])):I("",!0),t(e(Q),null,{default:l(()=>[t(e(z),{onClick:T},{default:l(()=>[$("Cancel")]),_:1}),t(e(z),{type:"primary",disabled:!y.table.hasChangesDeep("name"),onClick:f},{default:l(()=>[$(" Save Changes "),m.loading?(r(),C(qe,{key:0,size:"16"})):I("",!0)]),_:1},8,["disabled"])]),_:1})]),_:1})])):(r(),S("div",ca,[D("div",pa,[D("div",ma,"Name: "+F((w=y.table)==null?void 0:w.name),1)]),t(e(z),{onClick:N},{default:l(()=>[$("Edit Name")]),_:1})]))])}}});const ka=le(_a,[["__scopeId","data-v-06f57b7a"]]),Qa=H({__name:"TableEditor",setup(h){const b=fe(),n=te(),m=n.params.tableId,N=n.params.projectId,T=E("data"),{result:f,loading:d,refetch:v}=ne(()=>Promise.all([se.get(N).then(async k=>{const w=await Se.get(k.organizationId);return{project:k,organization:w}}),$e.get(N,m)]).then(([{project:k,organization:w},U])=>De({project:k,organization:w,table:U}))),y=L(()=>!d.value&&f.value?[{label:"My organizations",path:"/organizations"},{label:f.value.organization.name,path:`/organizations/${f.value.organization.id}`},{label:f.value.project.name,path:`/projects/${f.value.project.id}/tables`}]:void 0);function _(){b.push({name:"tables",params:{projectId:N}})}return(k,w)=>{const U=X("router-link");return r(),C(Ie,null,{navbar:l(()=>{var c;return[t(e(Oe),{title:(c=e(f))==null?void 0:c.table.name,style:{padding:"5px 25px"},onBack:_},{footer:l(()=>[t(e(Be),{"active-key":T.value,"onUpdate:activeKey":w[0]||(w[0]=u=>T.value=u)},{default:l(()=>[t(e(ee),{key:"columns",tab:"Columns"}),t(e(ee),{key:"data",tab:"Data"}),t(e(ee),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[y.value?(r(),C(e(ze),{key:0},{default:l(()=>[(r(!0),S(V,null,Z(y.value,(u,i)=>(r(),C(e(Re),{key:i},{default:l(()=>[t(U,{to:u.path},{default:l(()=>[$(F(u.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):I("",!0)]),_:1},8,["title"])]}),content:l(()=>[e(f)&&T.value==="columns"?(r(),C(sa,{key:0,table:e(f).table,loading:e(d),onRefresh:w[1]||(w[1]=c=>e(v)())},null,8,["table","loading"])):I("",!0),e(f)&&T.value==="data"?(r(),C(Ke,{key:1,loading:e(d),table:e(f).table},null,8,["loading","table"])):I("",!0),e(f)&&T.value==="settings"?(r(),C(ka,{key:2,table:e(f).table,loading:e(d),onRefresh:w[2]||(w[2]=c=>e(v)())},null,8,["table","loading"])):I("",!0)]),_:1})}}});export{Qa as default};
//# sourceMappingURL=TableEditor.6db2bb70.js.map
