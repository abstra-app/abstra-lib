import{C}from"./CrudView.f9bc2310.js";import{a as _}from"./ant-design.24f985d4.js";import{a as k}from"./asyncComputed.52df22ec.js";import{n as i}from"./string.b08713fc.js";import{G as w}from"./PhPencil.vue.14761dd3.js";import{d as h,eo as I,ea as x,f as N,o as D,c as E,w as l,u as d,b as S,aG as v,bT as A,ep as B}from"./index.4b0f7fd1.js";import"./gateway.c8bc89d0.js";import{T as m}from"./tables.81ce6152.js";import"./router.4f07c66a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b8ee8af4.js";import"./BookOutlined.60159d4d.js";import"./url.95376bbe.js";import"./PhDotsThreeVertical.vue.d175e3dd.js";import"./Badge.f93f25df.js";import"./index.079212f3.js";import"./popupNotifcation.18b065a0.js";import"./record.76453a95.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="fd080a0f-9a95-4f74-ad30-bf6c978613ce",o._sentryDebugIdIdentifier="sentry-dbid-fd080a0f-9a95-4f74-ad30-bf6c978613ce")}catch{}})();const Y=h({__name:"Tables",setup(o){const a=I(),t=x().params.projectId,{loading:p,result:u,refetch:f}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=N(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(s=>({key:s.id,cells:[{type:"link",text:s.name,to:{name:"tableEditor",params:{tableId:s.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:n}){a.push({name:"tableEditor",params:{tableId:n,projectId:t}})}},{icon:B,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await s.delete(t,s.id),f())}}]}]})))!=null?r:[]}}),T=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),E(C,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:T,"create-button-text":"Create Table",create:b},{more:l(()=>[S(d(A),{onClick:y},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.42bf2661.js.map
