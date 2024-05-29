import{C as T}from"./CrudView.6cb8ad38.js";import{a as _}from"./asyncComputed.2a2a1288.js";import{n as i}from"./string.256d79cc.js";import{G as k}from"./PhPencil.vue.0fcd0798.js";import{d as h,eM as w,eG as I,y as x,b as S,c as N,w as l,u as m,eS as D,f as E,au as v,bI as B}from"./outputWidgets.52571dac.js";import"./gateway.9b472f57.js";import{T as d}from"./tables.206e81dd.js";import"./index.803d0576.js";import"./router.0ae1ef4a.js";import"./Form.9e43a28b.js";import"./hasIn.f1c353ba.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a5567333.js";import"./BookOutlined.7e4ac738.js";import"./url.5cc70021.js";import"./Paragraph.7aa2ce32.js";import"./Base.e64db743.js";import"./Modal.514213ca.js";import"./index.89edc4ba.js";import"./Title.8fbc2e7d.js";import"./Text.0586c869.js";import"./index.f3e1df2a.js";import"./popupNotifcation.e85fac74.js";import"./record.2a93f29c.js";import"./pubsub.be7004e9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="53633de2-557f-42b7-abe5-ea3e77f15000",o._sentryDebugIdIdentifier="sentry-dbid-53633de2-557f-42b7-abe5-ea3e77f15000")}catch{}})();const re=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:c,result:u,refetch:b}=_(()=>d.list(t)),f=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:m(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Tables.1ca77af5.js.map
