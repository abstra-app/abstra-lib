import{d as b,eE as y,J as g,b as _,c as w,u as h,eS as I}from"./outputWidgets.c9faac71.js";import{a as k}from"./asyncComputed.f57cc301.js";import{b as x}from"./router.71b4de4a.js";import"./index.640f6aaa.js";import{M as n}from"./member.e0e772d2.js";import{C}from"./CrudView.f2425170.js";import{a as v}from"./ant-design.fba8b294.js";import"./Form.d2f5df7f.js";import"./hasIn.df9ab62d.js";import"./popupNotifcation.c65541dd.js";import"./record.8238fe5f.js";import"./pubsub.ce92c6ce.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8fd1b12b.js";import"./BookOutlined.482d67dd.js";import"./url.f2677e99.js";import"./Paragraph.1715b506.js";import"./Base.54ab01b5.js";import"./Modal.f32241e3.js";import"./index.47b796c8.js";import"./Title.db290f9b.js";import"./Text.5f65077a.js";import"./index.1b9fbaaa.js";import"./index.ce291077.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="9b6cc8b3-2167-430c-893f-403734cb324e",t._sentryDebugIdIdentifier="sentry-dbid-9b6cc8b3-2167-430c-893f-403734cb324e")}catch{}})();const W=b({__name:"Editors",setup(t){const a=y().params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:c,onCreate:l},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.2111fdaa.js.map
