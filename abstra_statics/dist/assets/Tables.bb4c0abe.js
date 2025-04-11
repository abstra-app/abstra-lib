import{C as g}from"./CrudView.87635648.js";import{a as _}from"./ant-design.6c73842d.js";import{a as k}from"./asyncComputed.d84da1aa.js";import{n as i}from"./string.8b027234.js";import{G as C}from"./PhPencil.vue.19daefd9.js";import{d as T,eF as w,ec as h,f as I,o as x,Y as E,b as l,u as D,aS as N,eq as S}from"./index.97914b50.js";import"./gateway.f03e4b27.js";import{T as m}from"./tables.ef28572a.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.29e2063b.js";import"./router.25b634fb.js";import"./Badge.d34a57fa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.92667220.js";import"./BookOutlined.cfbaf67d.js";import"./url.9121ac6e.js";import"./PhDotsThreeVertical.vue.05e420b9.js";import"./index.dcf24033.js";import"./index.40a20e0a.js";import"./popupNotifcation.f5d6fec9.js";import"./record.a76b6b89.js";import"./TabPane.0573791a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="bc102751-35e0-4cf6-9373-05a9761d77d3",a._sentryDebugIdIdentifier="sentry-dbid-bc102751-35e0-4cf6-9373-05a9761d77d3")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.bb4c0abe.js.map
