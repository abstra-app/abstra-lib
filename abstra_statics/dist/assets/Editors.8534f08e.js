import{d as b,eD as y,I as g,b as _,c as w,u as I,eR as h}from"./outputWidgets.a83b1016.js";import{a as k}from"./asyncComputed.7dc1bf59.js";import{b as x}from"./router.d483d666.js";import"./index.dd136d34.js";import{M as n}from"./member.fe5c8d99.js";import{C}from"./CrudView.07fe64ef.js";import{a as v}from"./ant-design.a7406a9a.js";import"./Form.e366c890.js";import"./hasIn.f0c3cb47.js";import"./popupNotifcation.1bd1ec1c.js";import"./record.0d390bc5.js";import"./pubsub.6df6e033.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2fec9e82.js";import"./BookOutlined.f6fc5308.js";import"./url.50f64913.js";import"./Paragraph.17bf1949.js";import"./Text.ddf9b82a.js";import"./Modal.b8ecd209.js";import"./index.80125551.js";import"./Title.d405014f.js";import"./index.10700c72.js";import"./index.7cc38e5a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="bf143b09-81b9-4816-af5a-429559e51f67",t._sentryDebugIdIdentifier="sentry-dbid-bf143b09-81b9-4816-af5a-429559e51f67")}catch{}})();const U=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:h,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:I(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Editors.8534f08e.js.map
