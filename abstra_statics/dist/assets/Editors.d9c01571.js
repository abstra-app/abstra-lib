import{d as y,eE as g,J as b,b as _,c as w,u as h,eS as I}from"./outputWidgets.e96ae777.js";import{a as k}from"./asyncComputed.9e0c8a41.js";import{b as x}from"./router.02703dbf.js";import"./index.3067bca0.js";import{M as n}from"./member.46a539d5.js";import{C}from"./CrudView.266d1db2.js";import{a as v}from"./ant-design.221994a6.js";import"./Form.8a04defb.js";import"./hasIn.ad84c1e7.js";import"./popupNotifcation.143e6bc8.js";import"./record.97f1db0c.js";import"./pubsub.780e91bb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3bf38e15.js";import"./BookOutlined.19f678a3.js";import"./url.abb30f1b.js";import"./Paragraph.1efad55d.js";import"./Base.2ebb0198.js";import"./Modal.ead7c614.js";import"./index.4551969a.js";import"./Title.d5efda58.js";import"./Text.8691a2b2.js";import"./index.3385a1bc.js";import"./index.bbc9de60.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="e0001635-64fb-4c4c-9754-d36df77e97a0",t._sentryDebugIdIdentifier="sentry-dbid-e0001635-64fb-4c4c-9754-d36df77e97a0")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.d9c01571.js.map
