import{d as h,ed as z,eq as D,e as F,f as x,X as E,u as r,c as j,R as w,b as d,w as p,aR as O,o as f,cv as $,bH as A,cu as B,cH as G,er as M,cI as S}from"./vue-router.9f9f01b3.js";import{a as T}from"./asyncComputed.b6f822e9.js";import{a as U}from"./ant-design.e3eb28a0.js";import"./gateway.e0caa98c.js";import{O as V}from"./organization.60827de8.js";import{P as g}from"./project.f586e629.js";import"./tables.3be644ae.js";import{C as H}from"./CrudView.17a972fb.js";import{F as q}from"./PhArrowSquareOut.vue.e6bec3e9.js";import{I as J}from"./PhCopy.vue.0c36d8f4.js";import{G as L}from"./PhPencil.vue.128871af.js";import"./popupNotifcation.41cdd14e.js";import"./record.bbee8bcb.js";import"./string.6ac6ae27.js";import"./router.c32d57c5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0a0d7aeb.js";import"./BookOutlined.30c64d41.js";import"./url.f377987a.js";import"./PhDotsThreeVertical.vue.9409723e.js";import"./Badge.792744f2.js";import"./index.2b06c8b9.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[l]="07cbbaac-9822-4b90-9b41-a659481dfea9",c._sentryDebugIdIdentifier="sentry-dbid-07cbbaac-9822-4b90-9b41-a659481dfea9")}catch{}})();const ge=h({__name:"Projects",setup(c){const l=[{key:"name",label:"Project Name"}],m=z().params.organizationId,k=D(),{loading:P,result:i,refetch:y}=T(()=>Promise.all([g.list(m),V.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var a,o;if(await U("Are you sure you want to delete this project?"))try{await((o=(a=i.value)==null?void 0:a.projects.find(s=>s.id===t))==null?void 0:o.delete())}catch(s){S.error({message:"Error deleting project",description:String(s)})}finally{await y()}},N=async({key:t})=>{var a;const e=(a=i.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();u({key:o.id})}},n=F({state:"idle"});function R(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const _=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=i.value)==null?void 0:t.projects.map(a=>{var o,s;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:q,label:"Go to project",onClick:u},{icon:L,label:"Rename project",onClick:()=>R(a)},...(s=(o=i.value)==null?void 0:o.organization)!=null&&s.featureFlags.DUPLICATE_PROJECTS?[{icon:J,label:"Duplicate",onClick:N}]:[],{icon:M,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(f(),E(O,null,[r(i)?(f(),j(H,{key:0,"entity-name":"project",loading:r(P),title:`${r(i).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:_.value,fields:l,create:C},null,8,["loading","title","table"])):w("",!0),d(r(G),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>b(!1)),onOk:e[2]||(e[2]=a=>b(!0))},{default:p(()=>[n.value.state==="renaming"?(f(),j(r(B),{key:0,layout:"vertical"},{default:p(()=>[d(r($),{label:"New name"},{default:p(()=>[d(r(A),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Projects.9d771e39.js.map
