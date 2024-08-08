import{d as h,eu as z,eH as D,e as F,f as x,W as E,u as r,c as w,R as v,b as d,w as p,aJ as O,eI as $,o as f,co as A,bD as B,cn as G,cA as M,cB as S}from"./vue-router.33ac8cf0.js";import{a as T}from"./asyncComputed.9837140d.js";import{a as U}from"./ant-design.0bb3969c.js";import"./gateway.b01778f9.js";import{O as V}from"./organization.77a2c481.js";import{P as g}from"./project.58eaf0c1.js";import"./tables.aea27d65.js";import{C as J}from"./CrudView.4178d97f.js";import{F as H}from"./PhArrowSquareOut.vue.8f35b18d.js";import{I as L}from"./PhCopy.vue.4363bfc7.js";import{G as W}from"./PhPencil.vue.82d54551.js";import"./popupNotifcation.6b8971b6.js";import"./record.88671b98.js";import"./string.cf4460b1.js";import"./router.431f1655.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e2bbbfd3.js";import"./BookOutlined.c6692cb9.js";import"./url.d6d42cf8.js";import"./PhDotsThree.vue.34aeb4af.js";import"./index.4deb3bba.js";import"./index.f737d7de.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="3555f4d1-8fe7-49ea-9872-725c1ff9620d",l._sentryDebugIdIdentifier="sentry-dbid-3555f4d1-8fe7-49ea-9872-725c1ff9620d")}catch{}})();const ge=h({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=z().params.organizationId,k=D(),{loading:P,result:i,refetch:y}=T(()=>Promise.all([g.list(m),V.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var a,o;if(await U("Are you sure you want to delete this project?"))try{await((o=(a=i.value)==null?void 0:a.projects.find(s=>s.id===t))==null?void 0:o.delete())}catch(s){S.error({message:"Error deleting project",description:String(s)})}finally{await y()}},N=async({key:t})=>{var a;const e=(a=i.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();u({key:o.id})}},n=F({state:"idle"});function _(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const R=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=i.value)==null?void 0:t.projects.map(a=>{var o,s;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:H,label:"Go to project",onClick:u},{icon:W,label:"Rename project",onClick:()=>_(a)},...(s=(o=i.value)==null?void 0:o.organization)!=null&&s.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:N}]:[],{icon:$,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(f(),E(O,null,[r(i)?(f(),w(J,{key:0,"entity-name":"project",loading:r(P),title:`${r(i).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:R.value,fields:c,onCreate:C},null,8,["loading","title","table"])):v("",!0),d(r(M),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:p(()=>[n.value.state==="renaming"?(f(),w(r(G),{key:0,layout:"vertical"},{default:p(()=>[d(r(A),{label:"New name"},{default:p(()=>[d(r(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):v("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Projects.e51db4b4.js.map
