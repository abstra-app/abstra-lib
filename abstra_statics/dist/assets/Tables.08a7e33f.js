import{d as T,eJ as _,eD as k,I as w,b as h,c as I,w as i,u as l,eR as x,f as D,ar as N,bF as S}from"./outputWidgets.0b665cc7.js";import{G as v}from"./PhPencil.vue.addb8cf1.js";import{a as E}from"./asyncComputed.1d5bfff0.js";import"./router.6e7fd32b.js";import{T as m}from"./tables.65802a8b.js";import"./index.608103f2.js";import{C as R}from"./CrudView.06353474.js";import{n as d}from"./string.5eb5f33e.js";import"./Form.ac4ccba7.js";import"./hasIn.8e8e9839.js";import"./popupNotifcation.84d6e93b.js";import"./record.9fd09cc1.js";import"./pubsub.16b0f787.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b81332db.js";import"./BookOutlined.4857dcdd.js";import"./url.8ba4c1e5.js";import"./Paragraph.f6e4bd5c.js";import"./Text.b24e4288.js";import"./Modal.3f688333.js";import"./index.f264fca2.js";import"./Title.08b5828d.js";import"./index.c642001c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="eb9fbe8b-10bb-4bc2-964d-0d4bbd5f49c2",o._sentryDebugIdIdentifier="sentry-dbid-eb9fbe8b-10bb-4bc2-964d-0d4bbd5f49c2")}catch{}})();const ae=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:b,result:p,refetch:u}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:x,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>d(e,!0),blur:e=>d(e,!1)}];return(e,r)=>(h(),I(R,{"entity-name":"table",loading:l(b),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[D(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{ae as default};
//# sourceMappingURL=Tables.08a7e33f.js.map
