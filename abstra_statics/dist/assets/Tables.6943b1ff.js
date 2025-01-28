import{C as g}from"./CrudView.8fcf1bf0.js";import{a as _}from"./ant-design.707f2aaa.js";import{a as k}from"./asyncComputed.b84af790.js";import{n as i}from"./string.03a69f55.js";import{G as C}from"./PhPencil.vue.80a9e788.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.a701e366.js";import"./gateway.d41e4aa0.js";import{T as m}from"./tables.07f99db9.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.9e6681ea.js";import"./router.e4f44ac5.js";import"./Badge.569200c6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js";import"./BookOutlined.505c89f9.js";import"./url.f8ee3ffa.js";import"./PhDotsThreeVertical.vue.46aa46c5.js";import"./index.ec2f97ef.js";import"./index.2b3ce6b9.js";import"./popupNotifcation.97d308ec.js";import"./record.17573268.js";import"./TabPane.80c9c2d0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="e792a19a-a7c3-4ff1-b756-faec96da82ed",t._sentryDebugIdIdentifier="sentry-dbid-e792a19a-a7c3-4ff1-b756-faec96da82ed")}catch{}})();const Z=T({__name:"Tables",setup(t){const o=w(),a=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.6943b1ff.js.map
