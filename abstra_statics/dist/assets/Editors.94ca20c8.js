import{d as b,eE as y,J as g,b as _,c as w,u as h,eS as I}from"./outputWidgets.01f76d85.js";import{a as k}from"./asyncComputed.cebbba25.js";import{b as x}from"./router.e5ad88f4.js";import"./index.78210693.js";import{M as n}from"./member.fe7075c1.js";import{C}from"./CrudView.b7706474.js";import{a as v}from"./ant-design.c492d539.js";import"./Form.106e1cc6.js";import"./hasIn.70d8a538.js";import"./popupNotifcation.041ddb6b.js";import"./record.661e7b28.js";import"./pubsub.158aeaab.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2e221e51.js";import"./BookOutlined.b2c1b3e2.js";import"./url.3a12ef55.js";import"./Paragraph.81fa9c2a.js";import"./Base.faac52bc.js";import"./Modal.8a1d3939.js";import"./index.cc91905a.js";import"./Title.626e0915.js";import"./Text.d114b467.js";import"./index.e2904574.js";import"./index.6e98df8e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="0b6ec800-f21c-483b-be4c-80ce6c1d7e2d",t._sentryDebugIdIdentifier="sentry-dbid-0b6ec800-f21c-483b-be4c-80ce6c1d7e2d")}catch{}})();const W=b({__name:"Editors",setup(t){const a=y().params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:c,onCreate:l},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.94ca20c8.js.map
