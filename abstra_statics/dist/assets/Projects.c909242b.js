import{d as R,eB as h,eA as z,r as D,G as A,a as O,b as d,ev as E,u as s,c as j,ex as w,f as p,w as f,bq as F,bH as B,cw as M}from"./outputWidgets.544a1a04.js";import{e as $,u as S,K as T,F as U}from"./icons.fca83af6.js";import{a as V}from"./asyncComputed.8cb44100.js";import"./authorManager.b05b8d25.js";import"./index.512d1137.js";import{P as g}from"./project.accfafeb.js";import{O as G}from"./organization.75ea4896.js";import{C as L}from"./CrudView.cbd5cf6d.js";import{a as q}from"./ant-design.fe5b3347.js";import{A as H}from"./FormItem.88d9f692.js";import{M as J}from"./Title.ab58e29a.js";import"./index.cf4c23b9.js";import"./record.7026b145.js";import"./pubsub.de712bd5.js";import"./Form.bf3703e4.js";import"./hasIn.e29e01a4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e21b3b82.js";import"./router.859af25f.js";import"./index.a41d30f6.js";import"./url.e9f12c8c.js";import"./index.996d5cae.js";import"./index.4244092d.js";import"./Text.392bf8f9.js";import"./index.283ba854.js";import"./index.b051eb5b.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="4ed1bcf5-b544-4f75-bff1-c0e9f8ac2297",l._sentryDebugIdIdentifier="sentry-dbid-4ed1bcf5-b544-4f75-bff1-c0e9f8ac2297")}catch{}})();const we=R({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=z(),{loading:C,result:r,refetch:y}=V(()=>Promise.all([g.list(m),G.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var o,a;if(await q("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();u({key:a.id})}},n=D({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const x=A(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:$,label:"Go to project",onClick:u},{icon:S,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:T,label:"Duplicate",onClick:_}]:[],{icon:U,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=O("ant-form");return d(),E(F,null,[s(r)?(d(),j(L,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:x.value,fields:c,onCreate:P},null,8,["loading","title","table"])):w("",!0),p(s(J),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>b(!1)),onOk:e[2]||(e[2]=a=>b(!0))},{default:f(()=>[n.value.state==="renaming"?(d(),j(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(H),{label:"New name"},{default:f(()=>[p(s(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64)}}});export{we as default};
//# sourceMappingURL=Projects.c909242b.js.map
