import{C as g}from"./CrudView.7f80fc8b.js";import{a as m}from"./ant-design.390ca1cd.js";import{a as b}from"./asyncComputed.cfb7c22a.js";import{d as w,ey as _,eF as h,y as I,b as k,c as v,u as x,eL as C}from"./outputWidgets.94ca2a88.js";import{a as z}from"./gateway.2b419519.js";import"./index.7004133b.js";import{M as n}from"./member.8f415757.js";import"./router.cca53104.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js";import"./BookOutlined.040199a2.js";import"./url.5d104764.js";import"./index.3f7a8f1c.js";import"./index.c7b97287.js";import"./popupNotifcation.12f2745f.js";import"./record.d98ba384.js";import"./pubsub.26933d99.js";import"./string.ae3c25fe.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="c96c154f-e1b2-4a54-927a-a47da7d3833f",o._sentryDebugIdIdentifier="sentry-dbid-c96c154f-e1b2-4a54-927a-a47da7d3833f")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(g,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.fb708325.js.map
