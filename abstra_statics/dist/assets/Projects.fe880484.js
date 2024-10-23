import{d as h,ed as z,eq as D,e as F,f as x,X as E,u as r,c as j,R as w,b as d,w as p,aR as O,o as f,cv as $,bH as A,cu as B,cH as G,er as M,cI as S}from"./vue-router.5a4c25bd.js";import{a as T}from"./asyncComputed.e7982546.js";import{a as U}from"./ant-design.1f7b4a77.js";import"./gateway.4a165dbb.js";import{O as V}from"./organization.18b8e1ef.js";import{P as g}from"./project.7af833c1.js";import"./tables.05444807.js";import{C as H}from"./CrudView.0b35daa2.js";import{F as q}from"./PhArrowSquareOut.vue.c115e59a.js";import{I as J}from"./PhCopy.vue.d0cf0393.js";import{G as L}from"./PhPencil.vue.0637a375.js";import"./popupNotifcation.ec4350da.js";import"./record.9d54035b.js";import"./string.ca5e661a.js";import"./router.584b518e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.96deb7fb.js";import"./BookOutlined.c70fc2eb.js";import"./url.bd3666a7.js";import"./PhDotsThreeVertical.vue.28a9879a.js";import"./Badge.4ffe633d.js";import"./index.1a8c47ea.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="24a7ebe7-1e97-490b-b2ab-a9ee28fa45cf",l._sentryDebugIdIdentifier="sentry-dbid-24a7ebe7-1e97-490b-b2ab-a9ee28fa45cf")}catch{}})();const ge=h({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=z().params.organizationId,k=D(),{loading:P,result:i,refetch:y}=T(()=>Promise.all([g.list(m),V.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var a,o;if(await U("Are you sure you want to delete this project?"))try{await((o=(a=i.value)==null?void 0:a.projects.find(s=>s.id===t))==null?void 0:o.delete())}catch(s){S.error({message:"Error deleting project",description:String(s)})}finally{await y()}},N=async({key:t})=>{var a;const e=(a=i.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();u({key:o.id})}},n=F({state:"idle"});function R(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const _=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=i.value)==null?void 0:t.projects.map(a=>{var o,s;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:q,label:"Go to project",onClick:u},{icon:L,label:"Rename project",onClick:()=>R(a)},...(s=(o=i.value)==null?void 0:o.organization)!=null&&s.featureFlags.DUPLICATE_PROJECTS?[{icon:J,label:"Duplicate",onClick:N}]:[],{icon:M,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(f(),E(O,null,[r(i)?(f(),j(H,{key:0,"entity-name":"project",loading:r(P),title:`${r(i).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:_.value,fields:c,create:C},null,8,["loading","title","table"])):w("",!0),d(r(G),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>b(!1)),onOk:e[2]||(e[2]=a=>b(!0))},{default:p(()=>[n.value.state==="renaming"?(f(),j(r(B),{key:0,layout:"vertical"},{default:p(()=>[d(r($),{label:"New name"},{default:p(()=>[d(r(A),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Projects.fe880484.js.map
