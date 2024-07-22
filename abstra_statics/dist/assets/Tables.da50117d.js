import{C as T}from"./CrudView.f70bf564.js";import{a as _}from"./asyncComputed.7f523489.js";import{n as l}from"./string.85a74f14.js";import{G as k}from"./PhPencil.vue.eb923c1b.js";import{d as w,eN as h,eB as I,f as x,o as N,c as S,w as i,u as c,eO as D,b as E,aw as B,bL as v}from"./vue-router.33b1a225.js";import"./gateway.355ba675.js";import{T as m}from"./tables.f9bd7897.js";import"./router.d0575da4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.84f0f0c6.js";import"./BookOutlined.39378e37.js";import"./url.56afe455.js";import"./index.9f916721.js";import"./index.1d668b87.js";import"./popupNotifcation.46ea30c9.js";import"./record.bc4c96de.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="37e41c12-1082-4ca1-a36c-12cf4a026db9",o._sentryDebugIdIdentifier="sentry-dbid-37e41c12-1082-4ca1-a36c-12cf4a026db9")}catch{}})();const U=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>l(e,!0),blur:e=>l(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[E(c(v),{onClick:s},{default:i(()=>[B("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.da50117d.js.map
