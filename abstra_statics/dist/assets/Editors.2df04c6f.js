import{d as y,eE as g,J as b,b as _,c as w,u as h,eS as I}from"./outputWidgets.c7d11ead.js";import{a as k}from"./asyncComputed.0d9bf0ef.js";import{b as x}from"./router.95851ad5.js";import"./index.e05a5a2e.js";import{M as n}from"./member.e78292dd.js";import{C}from"./CrudView.a5d66c2b.js";import{a as v}from"./ant-design.50805854.js";import"./Form.894c92e7.js";import"./hasIn.dd565870.js";import"./popupNotifcation.ba1f83dd.js";import"./record.e5cfb835.js";import"./pubsub.a91a3d3f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js";import"./BookOutlined.e29593a7.js";import"./url.20f0444a.js";import"./Paragraph.a2d4bb5b.js";import"./Base.984b27ce.js";import"./Modal.7ab5d69d.js";import"./index.8343729f.js";import"./Title.fdf5c01d.js";import"./Text.eba38ee8.js";import"./index.e53fe664.js";import"./index.8b08f555.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="b209c5f9-1534-4263-9830-9341c59572d9",e._sentryDebugIdIdentifier="sentry-dbid-b209c5f9-1534-4263-9830-9341c59572d9")}catch{}})();const W=y({__name:"Editors",setup(e){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],c=async t=>{await n.create(a,t.email),s()};async function d(t){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,t.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var t,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(t=u.value)==null?void 0:t.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(t,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.2df04c6f.js.map
