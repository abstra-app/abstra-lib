import{C as T}from"./CrudView.070ef22b.js";import{a as _}from"./asyncComputed.bbf8dcb0.js";import{n as i}from"./string.06d765c5.js";import{G as k}from"./PhPencil.vue.83393304.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as m,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.b2658b40.js";import"./gateway.811e3fd6.js";import{T as d}from"./tables.3f769944.js";import{a as A}from"./ant-design.3ec23996.js";import"./router.8efbebbc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.70f1da0c.js";import"./BookOutlined.02af6ab7.js";import"./url.72a8b037.js";import"./PhDotsThreeVertical.vue.15e10271.js";import"./index.efd52ea2.js";import"./popupNotifcation.fa76e0fa.js";import"./record.6025f188.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="8088dc53-1775-427f-9819-01317f85f328",o._sentryDebugIdIdentifier="sentry-dbid-8088dc53-1775-427f-9819-01317f85f328")}catch{}})();const X=w({__name:"Tables",setup(o){const a=h(),t=I().params.projectId,{loading:u,result:p,refetch:f}=_(()=>d.list(t)),b=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){a.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),f())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:m(u),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",create:b},{more:l(()=>[D(m(q),{onClick:y},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.e458fca9.js.map
