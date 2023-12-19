import{d as x,eB as h,eA as z,r as R,G as A,a as D,b as d,ev as O,u as r,c as w,ex as j,f as u,w as p,bq as B,bH as M,cw as $}from"./outputWidgets.38a8ba6d.js";import{z as E,o as F,C as V}from"./icons.4ae4a9c5.js";import{a as G}from"./asyncComputed.41d10d8a.js";import"./authorManager.b6ced178.js";import"./index.56107642.js";import{P as f}from"./project.4956ee0f.js";import{O as S}from"./organization.d77e673f.js";import{C as U}from"./CrudView.ba56980c.js";import{a as q}from"./ant-design.16790220.js";import{A as H}from"./FormItem.4673de87.js";import{M as L}from"./Title.ecd0d354.js";import"./index.cf4c23b9.js";import"./record.be73334f.js";import"./pubsub.23b14df7.js";import"./gateway.77dbab2f.js";import"./Form.a08a590c.js";import"./hasIn.29d88859.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js";import"./router.558347d5.js";import"./index.8b3fd40e.js";import"./url.1a877628.js";import"./index.0c02607f.js";import"./index.91017c21.js";import"./Text.1048f348.js";import"./index.df8e3842.js";import"./index.2785839f.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="41b22b2d-4705-49fb-90ba-2bb242909d3d",i._sentryDebugIdIdentifier="sentry-dbid-41b22b2d-4705-49fb-90ba-2bb242909d3d")}catch{}})();const we=x({__name:"Projects",setup(i){const s=[{key:"name",label:"Project Name"}],l=h().params.organizationId,k=z(),{loading:C,result:m,refetch:b}=G(()=>Promise.all([f.list(l),S.get(l)]).then(([e,t])=>({projects:e,organization:t}))),g=({key:e})=>k.push({name:"project",params:{projectId:e}}),P=async e=>{const t=await f.create({organizationId:l,name:e.name});g({key:t.id})},I=async({key:e})=>{var o,n;if(await q("Are you sure you want to delete this project?"))try{await((n=(o=m.value)==null?void 0:o.projects.find(c=>c.id===e))==null?void 0:n.delete())}catch(c){$.error({message:"Error deleting project",description:String(c)})}finally{await b()}},a=R({state:"idle"});function _(e){a.value={state:"renaming",projectId:e.id,newName:e.name}}async function y(e){if(a.value.state==="renaming"&&e){const{projectId:t,newName:o}=a.value;await f.rename(t,o),b()}a.value={state:"idle"}}const N=A(()=>{var e,t;return{columns:[{name:"Project Name",align:"left"},{name:"Actions",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:E,label:"Go to project",onClick:g},{icon:F,label:"Rename project",onClick:()=>_(o)},{icon:V,label:"Delete",onClick:I,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>{const o=D("ant-form");return d(),O(B,null,[r(m)?(d(),w(U,{key:0,"entity-name":"project",loading:r(C),title:`${r(m).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:N.value,fields:s,onCreate:P},null,8,["loading","title","table"])):j("",!0),u(r(L),{open:a.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=n=>y(!1)),onOk:t[2]||(t[2]=n=>y(!0))},{default:p(()=>[a.value.state==="renaming"?(d(),w(o,{key:0,layout:"vertical"},{default:p(()=>[u(r(H),{label:"New name"},{default:p(()=>[u(r(M),{value:a.value.newName,"onUpdate:value":t[0]||(t[0]=n=>a.value.newName=n)},null,8,["value"])]),_:1})]),_:1})):j("",!0)]),_:1},8,["open"])],64)}}});export{we as default};
//# sourceMappingURL=Projects.5b48ef3e.js.map
