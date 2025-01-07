import{C as g}from"./CrudView.d2fe179d.js";import{a as _}from"./ant-design.40803dff.js";import{a as k}from"./asyncComputed.c20e9b65.js";import{n as i}from"./string.0a7c8737.js";import{G as C}from"./PhPencil.vue.85ad7352.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.c093892f.js";import"./gateway.398bf4cd.js";import{T as m}from"./tables.09b81475.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.2babd9d1.js";import"./router.fc037b60.js";import"./Badge.6fe17d0a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f0ff0f8d.js";import"./BookOutlined.d58fb569.js";import"./url.b4f46c51.js";import"./PhDotsThreeVertical.vue.4a611dc0.js";import"./index.628070ce.js";import"./index.189745e7.js";import"./popupNotifcation.b38b8600.js";import"./record.99cc12e7.js";import"./TabPane.231f9a84.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="c8f59ae0-1f78-4bbd-81bd-8216ebb51ff9",a._sentryDebugIdIdentifier="sentry-dbid-c8f59ae0-1f78-4bbd-81bd-8216ebb51ff9")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:b}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),b())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.59cfcdbe.js.map
