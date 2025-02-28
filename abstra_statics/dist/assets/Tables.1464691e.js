import{C as g}from"./CrudView.ec547c6a.js";import{a as _}from"./ant-design.770a6676.js";import{a as k}from"./asyncComputed.f3b09175.js";import{n as i}from"./string.15f9e24c.js";import{G as C}from"./PhPencil.vue.c108a387.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.adaccf2f.js";import"./gateway.aaeb5f17.js";import{T as m}from"./tables.26d3abb7.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.05dab42d.js";import"./router.6c0de499.js";import"./Badge.2224659a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c06917e6.js";import"./BookOutlined.fa4f17be.js";import"./url.d1372568.js";import"./PhDotsThreeVertical.vue.3e42ab43.js";import"./index.a3dc42ab.js";import"./index.c33404f0.js";import"./popupNotifcation.0c39571f.js";import"./record.dc49516d.js";import"./TabPane.39df68b9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="3b7b91f2-ec1f-4f18-984f-aa0b51b34cb6",a._sentryDebugIdIdentifier="sentry-dbid-3b7b91f2-ec1f-4f18-984f-aa0b51b34cb6")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:d,result:p,refetch:b}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),b())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(d),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.1464691e.js.map
