import{C as g}from"./CrudView.92f7de2f.js";import{a as m}from"./ant-design.4ccf7203.js";import{a as b}from"./asyncComputed.ce55e9b9.js";import{d as w,ea as _,ep as h,f as I,o as k,c as v,u as x,eq as z}from"./vue-router.7162dc98.js";import{a as C}from"./gateway.5050455f.js";import{M as n}from"./member.d0550cba.js";import"./tables.e8ea78db.js";import"./router.3fad4ea0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6fa1ea09.js";import"./BookOutlined.26848719.js";import"./url.c007940c.js";import"./PhDotsThreeVertical.vue.65ff99eb.js";import"./Badge.9dfa62b9.js";import"./index.2e606852.js";import"./popupNotifcation.08c6b98a.js";import"./record.d1bd4666.js";import"./string.b7f230c6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="ef63711d-6e17-40b4-826d-ed536df89a2a",o._sentryDebugIdIdentifier="sentry-dbid-ef63711d-6e17-40b4-826d-ed536df89a2a")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=C.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:z,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(g,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,create:c},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.01863d00.js.map
