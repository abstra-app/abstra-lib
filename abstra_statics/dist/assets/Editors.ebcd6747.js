import{d as b,eE as y,J as g,b as _,c as w,u as h,eS as I}from"./outputWidgets.563f2053.js";import{a as k}from"./asyncComputed.04f1f53e.js";import{b as x}from"./router.c34e6dc6.js";import"./index.0c6c0109.js";import{M as n}from"./member.6eaf64e5.js";import{C}from"./CrudView.f5d22758.js";import{a as v}from"./ant-design.99ca1ec7.js";import"./Form.b8268a8d.js";import"./hasIn.26907291.js";import"./popupNotifcation.c0b3a138.js";import"./record.040bfab6.js";import"./pubsub.93107509.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9b6e4e0c.js";import"./BookOutlined.4cde4243.js";import"./url.30768ad3.js";import"./Paragraph.91bc3cfe.js";import"./Base.0aec5967.js";import"./Modal.21534b9e.js";import"./index.cb9a00aa.js";import"./Title.8c1a7c3d.js";import"./Text.abce6fcf.js";import"./index.8230ce98.js";import"./index.1d9cc5e3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="609bd04f-a69c-48b8-8b50-c6051ebe1b6f",t._sentryDebugIdIdentifier="sentry-dbid-609bd04f-a69c-48b8-8b50-c6051ebe1b6f")}catch{}})();const W=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.ebcd6747.js.map
