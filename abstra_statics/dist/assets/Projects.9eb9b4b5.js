import{d as R,eB as h,eA as x,r as D,H as O,a as A,b as u,ev as E,u as s,c as w,ex as b,f as p,w as f,a$ as $,bO as B,cz as F}from"./outputWidgets.3cdd28c7.js";import{a as M}from"./asyncComputed.332a5b88.js";import{a as S}from"./ant-design.8974677b.js";import"./router.5467eb8b.js";import"./index.5865745d.js";import{P as g}from"./project.ebe4695b.js";import{O as T}from"./organization.d3e690b5.js";import{C as U}from"./CrudView.07dd9fef.js";import{e as V,H,P as L,K as G}from"./icons.ffdd6aed.js";import{A as J}from"./Form.27cf2235.js";import{M as K}from"./Modal.efb541d9.js";import"./index.9eaff1fe.js";import"./index.cf4c23b9.js";import"./record.e9578478.js";import"./pubsub.7b37ae85.js";import"./Paragraph.89c92ab5.js";import"./Base.eac5750e.js";import"./Typography.00ee05b6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d7c68259.js";import"./url.c3b48238.js";import"./index.08a743a8.js";import"./Title.0e21163b.js";import"./Text.fa88e805.js";import"./index.8c3e090d.js";import"./hasIn.30eadb22.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[l]="0ccfcec6-5dc4-46da-97ec-48c67996bf1b",c._sentryDebugIdIdentifier="sentry-dbid-0ccfcec6-5dc4-46da-97ec-48c67996bf1b")}catch{}})();const be=R({__name:"Projects",setup(c){const l=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=x(),{loading:P,result:r,refetch:y}=M(()=>Promise.all([g.list(m),T.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var o,a;if(await S("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){F.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();d({key:a.id})}},n=D({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:V,label:"Go to project",onClick:d},{icon:H,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:_}]:[],{icon:G,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=A("ant-form");return u(),E($,null,[s(r)?(u(),w(U,{key:0,"entity-name":"project",loading:s(P),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:l,onCreate:C},null,8,["loading","title","table"])):b("",!0),p(s(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{be as default};
//# sourceMappingURL=Projects.9eb9b4b5.js.map
