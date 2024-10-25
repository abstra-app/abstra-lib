import{C as g}from"./CrudView.a3402d2f.js";import{a as d}from"./ant-design.9b149ea7.js";import{a as b}from"./asyncComputed.4df2b74a.js";import{d as w,ed as _,eq as h,f as I,c as k,u as v,o as x,er as z}from"./vue-router.ef289645.js";import{a as C}from"./gateway.31ee8b29.js";import{M as n}from"./member.7c945bf1.js";import"./tables.3ac3f8bb.js";import"./router.1e88c2e4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.78e69863.js";import"./BookOutlined.f4fd35ae.js";import"./url.7df1a15c.js";import"./PhDotsThreeVertical.vue.f5712fe1.js";import"./Badge.1dc70832.js";import"./index.10873433.js";import"./popupNotifcation.27f4ebc5.js";import"./record.3eee2e37.js";import"./string.f997184e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="7345c234-2a4e-489a-8eb2-335fb3cad80d",o._sentryDebugIdIdentifier="sentry-dbid-7345c234-2a4e-489a-8eb2-335fb3cad80d")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=C.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:p,result:f,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=f.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:z,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(x(),k(g,{"entity-name":"editors",loading:v(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,create:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.f534e1df.js.map
