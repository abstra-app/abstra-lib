import{d as y,eE as g,J as b,b as _,c as w,u as h,eS as I}from"./outputWidgets.71802772.js";import{a as k}from"./asyncComputed.cbec0040.js";import{b as x}from"./router.9c41a241.js";import"./index.572e6376.js";import{M as n}from"./member.8e2d90e0.js";import{C}from"./CrudView.141cd628.js";import{a as v}from"./ant-design.62144f13.js";import"./Form.bfb780e6.js";import"./hasIn.2be4fa38.js";import"./popupNotifcation.eb48ce36.js";import"./record.0f19efd4.js";import"./pubsub.56fa7379.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7275af54.js";import"./BookOutlined.ef63c47c.js";import"./url.3f42b4fb.js";import"./Paragraph.6c3bc5b2.js";import"./Base.2b20d95e.js";import"./Modal.4acc76d7.js";import"./index.b073272f.js";import"./Title.15b87a52.js";import"./Text.5298958e.js";import"./index.39e68d89.js";import"./index.da0e46c6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="e182286a-a47a-4d17-9859-808e1e8f7050",t._sentryDebugIdIdentifier="sentry-dbid-e182286a-a47a-4d17-9859-808e1e8f7050")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.f362a5ef.js.map
