import{d as b,eA as u,J as f,b as y,c as _,u as g}from"./outputWidgets.75a5b0b9.js";import{a as w}from"./asyncComputed.c701d7b0.js";import"./console.3fb52eaf.js";import{M as m}from"./member.4f43bd8b.js";import"./index.a131125e.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.ff628288.js";import"./index.a1ee75ca.js";import"./Form.2c716183.js";import"./Title.b6c9692d.js";import"./index.b50eb903.js";import"./index.4598445f.js";import"./index.b6767512.js";import"./dayjs.d3366d83.js";import"./index.e24c456b.js";import"./index.7aacb57f.js";import"./TabPane.0d7849ee.js";import"./index.e9ba5796.js";import"./CollapsePanel.46ee4c6b.js";import"./index.3916405f.js";import"./index.5a67eb5f.js";import"./index.fe803cdf.js";import"./index.5e9c5434.js";import"./index.00d295c9.js";import"./index.fc88890c.js";import"./index.9c0809a0.js";import"./index.49e953af.js";import"./gateway.99e43695.js";import"./activeRecord.115270b9.js";import"./pubsub.3fa240d3.js";import"./icons.c04528be.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c08899bc-4e9b-496f-83ba-5703be3235a3",e._sentryDebugIdIdentifier="sentry-dbid-c08899bc-4e9b-496f-83ba-5703be3235a3")}catch{}})();const X=b({__name:"Members",setup(e){const r=u().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),c()},{loading:p,result:l,refetch:c}=w(()=>m.list(r)),d=f(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=l.value)==null?void 0:t.map(a=>({key:a.email,cells:[{text:a.email},{text:a.role}]})))!=null?i:[]}});return(t,i)=>(y(),_(I,{"entity-name":"members",loading:g(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:d.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.96497977.js.map
