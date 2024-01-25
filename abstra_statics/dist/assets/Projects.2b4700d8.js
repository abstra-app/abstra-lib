import{d as R,ez as h,ey as D,r as F,F as x,a as O,b as d,et as E,u as s,c as w,ev as v,f as p,w as f,bo as A,bF as M,cu as $}from"./outputWidgets.31f7d089.js";import{e as B,u as S,K as T,F as U}from"./icons.198d98c5.js";import{a as V}from"./asyncComputed.e77cc478.js";import"./router.9f7c32ab.js";import"./jwt-decode.esm.74bd4619.js";import"./index.b9821219.js";import{P as g}from"./project.4ee0a606.js";import{O as L}from"./organization.0f6ac902.js";import{C as G}from"./CrudView.0df6e92a.js";import{a as J}from"./ant-design.641a17c9.js";import{A as K}from"./FormItem.44f90408.js";import{M as q}from"./Modal.3bedd318.js";import"./storage.9487c073.js";import"./index.83c4ff75.js";import"./index.cf4c23b9.js";import"./record.f93ee02b.js";import"./pubsub.1cbdbeb4.js";import"./Title.504b0ce1.js";import"./Text.07fdffd9.js";import"./Form.29fec373.js";import"./hasIn.fdd00a9f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js";import"./url.9c7cb212.js";import"./index.1aba186f.js";import"./index.717c43b7.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[l]="ccc5425c-f626-4cca-8eef-434516340ae4",c._sentryDebugIdIdentifier="sentry-dbid-ccc5425c-f626-4cca-8eef-434516340ae4")}catch{}})();const ve=R({__name:"Projects",setup(c){const l=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=D(),{loading:C,result:r,refetch:y}=V(()=>Promise.all([g.list(m),L.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var o,a;if(await J("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){$.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();u({key:a.id})}},n=F({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:B,label:"Go to project",onClick:u},{icon:S,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:T,label:"Duplicate",onClick:_}]:[],{icon:U,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=O("ant-form");return d(),E(A,null,[s(r)?(d(),w(G,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:l,onCreate:P},null,8,["loading","title","table"])):v("",!0),p(s(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(d(),w(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(K),{label:"New name"},{default:f(()=>[p(s(M),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):v("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.2b4700d8.js.map
