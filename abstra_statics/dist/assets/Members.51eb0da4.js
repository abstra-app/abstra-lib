import{d as b,ez as y,F as g,b as _,c as w,u as h}from"./outputWidgets.8246053b.js";import{a as I}from"./asyncComputed.e925ebe9.js";import{b as k}from"./router.ee3d3d59.js";import"./index.ab651559.js";import{M as n}from"./member.4be40912.js";import{C as x}from"./CrudView.f24fc2d1.js";import{F as C}from"./icons.1afdbafb.js";import{a as M}from"./ant-design.bd80aae5.js";import"./FormItem.377ec60f.js";import"./hasIn.afa75b8c.js";import"./jwt-decode.esm.74bd4619.js";import"./storage.195d9a4f.js";import"./index.2b26c55a.js";import"./index.cf4c23b9.js";import"./record.112817cd.js";import"./pubsub.cf08d0ee.js";import"./Title.f9200d53.js";import"./Text.2015d383.js";import"./Form.876e6977.js";import"./Modal.ab74e114.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ae17871c.js";import"./url.9664ee35.js";import"./index.47f3a57d.js";import"./index.b9f3321e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="522f6c04-f6aa-43e7-ad19-e98ed464e53e",t._sentryDebugIdIdentifier="sentry-dbid-522f6c04-f6aa-43e7-ad19-e98ed464e53e")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function d(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.51eb0da4.js.map
