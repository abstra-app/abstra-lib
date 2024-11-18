import{C as g}from"./CrudView.cf099838.js";import{a as m}from"./ant-design.62a6773b.js";import{a as b}from"./asyncComputed.ee6673cb.js";import{d as w,ea as _,eo as h,f as I,o as k,c as v,u as x,ep as z}from"./vue-router.25496eb3.js";import{a as C}from"./gateway.090a2504.js";import{M as n}from"./member.e1b975f6.js";import"./tables.732c3160.js";import"./router.92b9eafd.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c4306070.js";import"./BookOutlined.23f627d4.js";import"./url.d7b430c5.js";import"./PhDotsThreeVertical.vue.eb15d37e.js";import"./Badge.0b8e6d1d.js";import"./index.cdda9ded.js";import"./popupNotifcation.ea7de34e.js";import"./record.0cf3393b.js";import"./string.cb42bbf3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="ddbef597-4e20-42f2-9f4b-704ef71ec580",o._sentryDebugIdIdentifier="sentry-dbid-ddbef597-4e20-42f2-9f4b-704ef71ec580")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=C.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:z,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(g,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:d,create:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.80dbef44.js.map
