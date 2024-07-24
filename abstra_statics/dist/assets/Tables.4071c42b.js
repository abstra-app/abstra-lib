import{C as T}from"./CrudView.d757a86c.js";import{a as _}from"./asyncComputed.fdcbda70.js";import{n as i}from"./string.5385dc37.js";import{G as k}from"./PhPencil.vue.96b75d83.js";import{d as h,eN as w,eB as x,f as I,c as N,w as l,u as c,eO as S,o as D,b as E,ax as B,bL as v}from"./vue-router.e3a418ab.js";import"./gateway.ab7d8bad.js";import{T as m}from"./tables.662e288a.js";import"./router.be53a969.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4ba5f12d.js";import"./BookOutlined.b020abeb.js";import"./url.fa4c0118.js";import"./PhDotsThree.vue.d16bd5f7.js";import"./index.0ce7e49d.js";import"./index.f3298670.js";import"./popupNotifcation.3097ef22.js";import"./record.3f1cee06.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="bfca1f32-c7e1-4e6a-af6c-157189c80670",o._sentryDebugIdIdentifier="sentry-dbid-bfca1f32-c7e1-4e6a-af6c-157189c80670")}catch{}})();const W=h({__name:"Tables",setup(o){const t=w(),a=x().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=I(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(c(v),{onClick:s},{default:l(()=>[B("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.4071c42b.js.map
