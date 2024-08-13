import{d as h,eu as z,eH as D,e as F,f as x,W as E,u as r,c as b,R as w,b as d,w as p,aJ as O,eI as $,o as f,co as A,bD as B,cn as G,cA as M,cB as S}from"./vue-router.de8f207b.js";import{a as T}from"./asyncComputed.fed46f8e.js";import{a as U}from"./ant-design.fc3742b5.js";import"./gateway.ae1282fa.js";import{O as V}from"./organization.ec1cb14d.js";import{P as g}from"./project.6b35aaf4.js";import"./tables.e96ebb00.js";import{C as J}from"./CrudView.3b429544.js";import{F as H}from"./PhArrowSquareOut.vue.0480b7d5.js";import{I as L}from"./PhCopy.vue.0d304453.js";import{G as W}from"./PhPencil.vue.b72f10d6.js";import"./popupNotifcation.b1381938.js";import"./record.bcdcc1d8.js";import"./string.6ce11571.js";import"./router.c92212f4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e7c20358.js";import"./BookOutlined.d21cf2e0.js";import"./url.ec552cf2.js";import"./PhDotsThree.vue.4e44f51d.js";import"./index.f200267f.js";import"./index.169daad3.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="9f811f87-d60b-4e6a-bee2-ce5feedc0b73",l._sentryDebugIdIdentifier="sentry-dbid-9f811f87-d60b-4e6a-bee2-ce5feedc0b73")}catch{}})();const ge=h({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=z().params.organizationId,k=D(),{loading:P,result:i,refetch:y}=T(()=>Promise.all([g.list(m),V.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var a,o;if(await U("Are you sure you want to delete this project?"))try{await((o=(a=i.value)==null?void 0:a.projects.find(s=>s.id===t))==null?void 0:o.delete())}catch(s){S.error({message:"Error deleting project",description:String(s)})}finally{await y()}},N=async({key:t})=>{var a;const e=(a=i.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();u({key:o.id})}},n=F({state:"idle"});function _(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const R=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=i.value)==null?void 0:t.projects.map(a=>{var o,s;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:H,label:"Go to project",onClick:u},{icon:W,label:"Rename project",onClick:()=>_(a)},...(s=(o=i.value)==null?void 0:o.organization)!=null&&s.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:N}]:[],{icon:$,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(f(),E(O,null,[r(i)?(f(),b(J,{key:0,"entity-name":"project",loading:r(P),title:`${r(i).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:R.value,fields:c,onCreate:C},null,8,["loading","title","table"])):w("",!0),d(r(M),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:p(()=>[n.value.state==="renaming"?(f(),b(r(G),{key:0,layout:"vertical"},{default:p(()=>[d(r(A),{label:"New name"},{default:p(()=>[d(r(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Projects.14d5e539.js.map
