import{d as y,eE as g,J as b,b as _,c as w,u as h,eS as I}from"./outputWidgets.6fa937e8.js";import{a as k}from"./asyncComputed.2efa6345.js";import{b as x}from"./router.7280623c.js";import"./index.cb8506f7.js";import{M as n}from"./member.db85a7c8.js";import{C}from"./CrudView.ae9af4ed.js";import{a as v}from"./ant-design.9fa9a867.js";import"./Form.aac49e1e.js";import"./hasIn.9f9bff8d.js";import"./popupNotifcation.90dd819f.js";import"./record.abf4ce8f.js";import"./pubsub.0011874d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js";import"./BookOutlined.c67d3dce.js";import"./url.de8fbff1.js";import"./Paragraph.47e05b0e.js";import"./Base.f7e3c4b9.js";import"./Modal.21b8b2b8.js";import"./index.b70fd8d3.js";import"./Title.ecf9f632.js";import"./Text.cdfb5d38.js";import"./index.fb72c772.js";import"./index.6da6b4b1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="4d8c6fe6-541d-4080-afcc-83e265364faa",t._sentryDebugIdIdentifier="sentry-dbid-4d8c6fe6-541d-4080-afcc-83e265364faa")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.7b5b62ca.js.map
