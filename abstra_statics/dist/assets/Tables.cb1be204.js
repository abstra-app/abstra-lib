import{C as T}from"./CrudView.d6db1351.js";import{a as _}from"./asyncComputed.9193ddba.js";import{n as i}from"./string.0e36ef9a.js";import{G as k}from"./PhPencil.vue.b7b70c1e.js";import{d as h,f7 as w,f1 as I,y as x,b as N,c as S,w as l,u as m,fd as D,f as E,am as v,bF as B}from"./outputWidgets.ac6cd083.js";import"./gateway.7df23bb5.js";import{T as d}from"./index.b64d2bf2.js";import"./router.e7c73114.js";import"./Form.f2d1ae9b.js";import"./hasIn.aae3ac3f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1b2ad75a.js";import"./BookOutlined.ea51c13c.js";import"./url.d933d93f.js";import"./Modal.1a3291a2.js";import"./index.24c3a2c4.js";import"./popupNotifcation.bfef6e4c.js";import"./record.9a0f3e6a.js";import"./pubsub.ead516dd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="81e83ae1-da22-4259-98ed-47c8f2946c78",o._sentryDebugIdIdentifier="sentry-dbid-81e83ae1-da22-4259-98ed-47c8f2946c78")}catch{}})();const Y=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:p,result:u,refetch:f}=_(()=>d.list(t)),b=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),f()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:b,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.cb1be204.js.map
