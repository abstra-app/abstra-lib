import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as u,ev as E,u as s,c as w,ex as b,f as p,w as f,aD as B,bz as F,cy as M}from"./outputWidgets.7d9d2da4.js";import{a as $}from"./asyncComputed.a940c534.js";import{a as S}from"./ant-design.bca7e02d.js";import"./router.bebc3ad9.js";import"./index.27121bd4.js";import{P as g}from"./project.ed294168.js";import{O as T}from"./organization.2cac0a46.js";import{C as U}from"./CrudView.3ab2c116.js";import{e as V,H,P as L,K as G}from"./icons.28aac7cc.js";import{A as J}from"./Form.186f3ccd.js";import{M as K}from"./Modal.45832a29.js";import"./index.cd9d80c2.js";import"./popupNotifcation.97f45a86.js";import"./index.cf4c23b9.js";import"./record.c58b3d65.js";import"./pubsub.24c705c7.js";import"./Paragraph.f3781014.js";import"./Base.1e619495.js";import"./Typography.0464c928.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js";import"./url.a3136da2.js";import"./index.16783743.js";import"./Title.bc3fed7a.js";import"./Text.c9870ace.js";import"./index.955d1350.js";import"./hasIn.dc8aa224.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="82d4f405-c5b7-4cac-af43-836e923ae511",l._sentryDebugIdIdentifier="sentry-dbid-82d4f405-c5b7-4cac-af43-836e923ae511")}catch{}})();const ve=D({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=R().params.organizationId,k=h(),{loading:P,result:r,refetch:y}=$(()=>Promise.all([g.list(m),T.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var a,o;if(await S("Are you sure you want to delete this project?"))try{await((o=(a=r.value)==null?void 0:a.projects.find(i=>i.id===t))==null?void 0:o.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var a;const e=(a=r.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();d({key:o.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(a=>{var o,i;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:V,label:"Go to project",onClick:d},{icon:H,label:"Rename project",onClick:()=>N(a)},...(i=(o=r.value)==null?void 0:o.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:_}]:[],{icon:G,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const a=A("ant-form");return u(),E(B,null,[s(r)?(u(),w(U,{key:0,"entity-name":"project",loading:s(P),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:C},null,8,["loading","title","table"])):b("",!0),p(s(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=o=>j(!1)),onOk:e[2]||(e[2]=o=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(a,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(F),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=o=>n.value.newName=o)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.5502546d.js.map
