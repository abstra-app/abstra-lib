import{C as T}from"./CrudView.7a4134d7.js";import{a as _}from"./asyncComputed.fc38f086.js";import{n as i}from"./string.47822799.js";import{G as k}from"./PhPencil.vue.5c8439f8.js";import{d as h,eK as w,eE as I,J as x,b as S,c as E,w as l,u as m,eS as N,f as D,as as v,bG as B}from"./outputWidgets.74e9892d.js";import"./router.de32499b.js";import{T as d}from"./tables.762275dd.js";import"./index.3352af38.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.21448292.js";import"./BookOutlined.f7a0bc06.js";import"./url.9a913f57.js";import"./Paragraph.5f67c9d1.js";import"./Base.95b485c5.js";import"./Form.efc9be2d.js";import"./hasIn.abae920f.js";import"./Modal.7d2888f7.js";import"./index.4596abca.js";import"./Title.cbd2422b.js";import"./Text.84197a88.js";import"./index.ad643004.js";import"./popupNotifcation.0fcb9bcf.js";import"./record.32238af4.js";import"./pubsub.e11c9ea9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="74dddfbe-f91e-4742-b11c-752a584271f3",o._sentryDebugIdIdentifier="sentry-dbid-74dddfbe-f91e-4742-b11c-752a584271f3")}catch{}})();const oe=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>d.list(t)),f=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:N,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),E(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[D(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.f6b5833c.js.map
