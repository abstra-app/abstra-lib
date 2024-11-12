import{d as h,ea as z,eo as D,e as F,f as x,o as u,X as E,u as r,c as w,R as v,b as p,w as f,aR as O,cv as $,bH as A,cu as B,cH as G,ep as M,cI as S}from"./vue-router.324eaed2.js";import{a as T}from"./asyncComputed.3916dfed.js";import{a as U}from"./ant-design.48401d91.js";import"./gateway.edd4374b.js";import{O as V}from"./organization.0ae7dfed.js";import{P as g}from"./project.a5f62f99.js";import"./tables.842b993f.js";import{C as H}from"./CrudView.0b1b90a7.js";import{F as J}from"./PhArrowSquareOut.vue.2a1b339b.js";import{I as L}from"./PhCopy.vue.b2238e41.js";import{G as X}from"./PhPencil.vue.91f72c2e.js";import"./popupNotifcation.5a82bc93.js";import"./record.cff1707c.js";import"./string.d698465c.js";import"./router.0c18ec5d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js";import"./BookOutlined.789cce39.js";import"./url.1a1c4e74.js";import"./PhDotsThreeVertical.vue.766b7c1d.js";import"./Badge.9808092c.js";import"./index.7d758831.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[l]="54d1c4df-d8f0-48e0-8fae-804ee257bcee",c._sentryDebugIdIdentifier="sentry-dbid-54d1c4df-d8f0-48e0-8fae-804ee257bcee")}catch{}})();const ge=h({__name:"Projects",setup(c){const l=[{key:"name",label:"Project Name"}],m=z().params.organizationId,k=D(),{loading:P,result:i,refetch:y}=T(()=>Promise.all([g.list(m),V.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var a,o;if(await U("Are you sure you want to delete this project?"))try{await((o=(a=i.value)==null?void 0:a.projects.find(s=>s.id===t))==null?void 0:o.delete())}catch(s){S.error({message:"Error deleting project",description:String(s)})}finally{await y()}},N=async({key:t})=>{var a;const e=(a=i.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();d({key:o.id})}},n=F({state:"idle"});function R(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const _=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=i.value)==null?void 0:t.projects.map(a=>{var o,s;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:J,label:"Go to project",onClick:d},{icon:X,label:"Rename project",onClick:()=>R(a)},...(s=(o=i.value)==null?void 0:o.organization)!=null&&s.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:N}]:[],{icon:M,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(u(),E(O,null,[r(i)?(u(),w(H,{key:0,"entity-name":"project",loading:r(P),title:`${r(i).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:_.value,fields:l,create:C},null,8,["loading","title","table"])):v("",!0),p(r(G),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(r(B),{key:0,layout:"vertical"},{default:f(()=>[p(r($),{label:"New name"},{default:f(()=>[p(r(A),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):v("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Projects.1ceb3a6f.js.map
