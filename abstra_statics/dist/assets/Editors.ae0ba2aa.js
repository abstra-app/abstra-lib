import{C as b}from"./CrudView.b45cd3d8.js";import{a as l}from"./ant-design.cfb38453.js";import{a as g}from"./asyncComputed.eaf040ea.js";import{d as w,f3 as _,f8 as h,H as I,b as k,c as v,u as x,fc as C}from"./outputWidgets.a62a98a2.js";import{a as z}from"./gateway.6f6ab524.js";import"./index.325faa83.js";import{M as n}from"./member.9f7676b0.js";import"./router.070acf74.js";import"./Form.f98792b1.js";import"./index.76f2bcbc.js";import"./hasIn.9a9c4d02.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9693b759.js";import"./BookOutlined.7b996542.js";import"./url.b840de21.js";import"./Modal.d421a5d5.js";import"./index.b70e6f7c.js";import"./index.01a98bee.js";import"./popupNotifcation.89d95caf.js";import"./record.fca4e678.js";import"./pubsub.37b3c6ac.js";import"./string.ade9dcc8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b80fe8f6-570b-468e-8e90-7fb8f82ffa5f",o._sentryDebugIdIdentifier="sentry-dbid-b80fe8f6-570b-468e-8e90-7fb8f82ffa5f")}catch{}})();const U=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,c=[{key:"email",label:"Email"}],f=async e=>{await n.create(r,e.email),m()};async function d(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),m())}const{loading:u,result:p,refetch:m}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>d(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(b,{"entity-name":"editors",loading:x(u),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:c,onCreate:f},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Editors.ae0ba2aa.js.map
