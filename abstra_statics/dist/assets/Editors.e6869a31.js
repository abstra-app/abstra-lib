import{d as y,eE as b,J as g,b as _,c as w,u as h,eS as I}from"./outputWidgets.eb68177a.js";import{a as k}from"./asyncComputed.d7d35a9b.js";import{b as x}from"./router.317efb7d.js";import"./index.2a154e70.js";import{M as n}from"./member.da1d2a92.js";import{C}from"./CrudView.20a6abd6.js";import{a as v}from"./ant-design.f5a05f41.js";import"./Form.80a7df3d.js";import"./hasIn.5508971f.js";import"./popupNotifcation.24fa7567.js";import"./record.0fb02764.js";import"./pubsub.bf42621d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f91735c0.js";import"./BookOutlined.297648c9.js";import"./url.1bbc2ec6.js";import"./Paragraph.fd20e99e.js";import"./Base.20dd2a14.js";import"./Modal.92968fec.js";import"./index.c8945831.js";import"./Title.59fcdfbb.js";import"./Text.accbe772.js";import"./index.1753b1f8.js";import"./index.dc480656.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="192732f7-224b-40e0-9625-c5e8b8703122",t._sentryDebugIdIdentifier="sentry-dbid-192732f7-224b-40e0-9625-c5e8b8703122")}catch{}})();const W=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.e6869a31.js.map
