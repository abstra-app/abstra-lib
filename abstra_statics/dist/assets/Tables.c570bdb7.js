import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,f as x,ar as N,bG as S}from"./outputWidgets.8380e627.js";import{H as v,i as D}from"./icons.ad30c4b8.js";import{a as E}from"./asyncComputed.6f6ec7a1.js";import"./router.905a9802.js";import{T as m}from"./tables.1e99434d.js";import"./index.fe3a2bdf.js";import{C as B}from"./CrudView.8e4a5f8b.js";import{n as d}from"./string.0d438cf4.js";import"./Form.a2be0836.js";import"./hasIn.fc79b428.js";import"./popupNotifcation.35240398.js";import"./record.8743da9c.js";import"./pubsub.a0171139.js";import"./index.cf4c23b9.js";import"./Paragraph.7f55a5be.js";import"./Base.c147d00f.js";import"./Typography.2d96ac02.js";import"./Modal.3de54a6a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7793445f.js";import"./url.815a5e2e.js";import"./index.92b0be86.js";import"./Title.78dbba38.js";import"./Text.0a0536af.js";import"./index.1fce0e2a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="020bcf21-14e8-4bb2-927b-421f314af3db",o._sentryDebugIdIdentifier="sentry-dbid-020bcf21-14e8-4bb2-927b-421f314af3db")}catch{}})();const re=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:p,result:b,refetch:u}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=b.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>d(e,!0),blur:e=>d(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(p),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Tables.c570bdb7.js.map
