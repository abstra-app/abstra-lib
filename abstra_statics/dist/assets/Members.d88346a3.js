import{d as b,eB as y,G as g,b as _,c as w,u as I}from"./outputWidgets.3eae54a8.js";import{a as h}from"./asyncComputed.951244d5.js";import{a as k}from"./authorManager.8abbaff3.js";import"./index.5a75491f.js";import{M as n}from"./member.8dea9638.js";import{C as v}from"./CrudView.328264f4.js";import{E as C}from"./icons.e8458af4.js";import{a as M}from"./ant-design.8edb4f18.js";import"./index.cf4c23b9.js";import"./record.a0b21aff.js";import"./pubsub.4b1da012.js";import"./gateway.350ede4a.js";import"./Title.ee79f8a8.js";import"./Text.6e609d9b.js";import"./FormItem.8edd4e05.js";import"./hasIn.d5bc6fc2.js";import"./Form.f1aa0eff.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1fe6b9cc.js";import"./router.409ab4a0.js";import"./index.89d7b0fc.js";import"./url.0fe4f7e9.js";import"./index.77404c97.js";import"./index.3d7ce90e.js";import"./index.2d394d39.js";import"./index.429b3954.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="8ba73800-4653-411e-8204-ebebf93ae5fc",t._sentryDebugIdIdentifier="sentry-dbid-8ba73800-4653-411e-8204-ebebf93ae5fc")}catch{}})();const Y=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function d(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=h(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"Actions"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{text:o.email},{text:o.role},{text:"",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?void 0:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(v,{"entity-name":"members",loading:I(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Members.d88346a3.js.map
