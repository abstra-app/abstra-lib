import{C as g}from"./CrudView.eb6a1402.js";import{a as l}from"./ant-design.622aae95.js";import{a as b}from"./asyncComputed.308368bf.js";import{d as w,eA as _,eM as h,f as I,o as k,c as v,u as x,eN as C}from"./vue-router.fab2a9a4.js";import{a as M}from"./gateway.46ce0a4e.js";import"./tables.06a25eb7.js";import{M as n}from"./member.06b304a4.js";import"./router.35110f9e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9034ba6f.js";import"./BookOutlined.4be1759e.js";import"./url.02f06f39.js";import"./index.fb79d7fc.js";import"./index.11587cdd.js";import"./popupNotifcation.763619ce.js";import"./record.0e481f1d.js";import"./string.3da65a00.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="a065c9fb-1643-405a-b9f1-8ff238a62a51",o._sentryDebugIdIdentifier="sentry-dbid-a065c9fb-1643-405a-b9f1-8ff238a62a51")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=M.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(g,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:d},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.152c391c.js.map
