import{d as z,B as y,f as H,o as i,V as c,X as _,R as P,ez as B,a as d,eB as R,eN as x,e as D,u as m,c as M,b,w as k,aI as S,eO as $,co as F,bC as E,cn as O,cy as G,cz as T}from"./vue-router.5a4a176b.js";import{a as U}from"./asyncComputed.8c12b2a1.js";import{a as q}from"./ant-design.2f4c2b3e.js";import"./gateway.2d3e20d8.js";import"./tables.773b5f94.js";import{O as J}from"./organization.4a66b209.js";import{P as C}from"./project.126401f6.js";import{C as L}from"./CrudView.5c88dea5.js";import{F as W}from"./PhArrowSquareOut.vue.03c87537.js";import{G as X}from"./PhPencil.vue.651d632b.js";import"./popupNotifcation.083e8b59.js";import"./record.fdd0857f.js";import"./string.6d768b54.js";import"./router.b7a0a717.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js";import"./BookOutlined.9493568c.js";import"./url.6cce3c3e.js";import"./index.eec6044c.js";import"./index.7210f61e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[r]="583f8a05-93d6-4181-a714-69a4db9b7319",u._sentryDebugIdIdentifier="sentry-dbid-583f8a05-93d6-4181-a714-69a4db9b7319")}catch{}})();const K=["width","height","fill","transform"],Q={key:0},Y=d("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"},null,-1),ee=[Y],te={key:1},ae=d("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"},null,-1),oe=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),ne=[ae,oe],re={key:2},ie=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),le=[ie],se={key:3},ce=d("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"},null,-1),ue=[ce],me={key:4},de=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),pe=[de],fe={key:5},ge=d("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"},null,-1),Ve=[ge],He={name:"PhCopy"},ye=z({...He,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(u){const r=u,v=y("weight","regular"),f=y("size","1em"),w=y("color","currentColor"),h=y("mirrored",!1),o=H(()=>{var n;return(n=r.weight)!=null?n:v}),g=H(()=>{var n;return(n=r.size)!=null?n:f}),V=H(()=>{var n;return(n=r.color)!=null?n:w}),j=H(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(n,Z)=>(i(),c("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:g.value,height:g.value,fill:V.value,transform:j.value},n.$attrs),[_(n.$slots,"default"),o.value==="bold"?(i(),c("g",Q,ee)):o.value==="duotone"?(i(),c("g",te,ne)):o.value==="fill"?(i(),c("g",re,le)):o.value==="light"?(i(),c("g",se,ue)):o.value==="regular"?(i(),c("g",me,pe)):o.value==="thin"?(i(),c("g",fe,Ve)):P("",!0)],16,K))}}),Se=z({__name:"Projects",setup(u){const r=[{key:"name",label:"Project Name"}],f=R().params.organizationId,w=x(),{loading:h,result:o,refetch:g}=U(()=>Promise.all([C.list(f),J.get(f)]).then(([t,e])=>({projects:t,organization:e}))),V=({key:t})=>w.push({name:"project",params:{projectId:t}}),j=async t=>{const e=await C.create({organizationId:f,name:t.name});V({key:e.id})},n=async({key:t})=>{var a,l;if(await q("Are you sure you want to delete this project?"))try{await((l=(a=o.value)==null?void 0:a.projects.find(p=>p.id===t))==null?void 0:l.delete())}catch(p){T.error({message:"Error deleting project",description:String(p)})}finally{await g()}},Z=async({key:t})=>{var a;const e=(a=o.value)==null?void 0:a.projects.find(l=>l.id===t);if(e){const l=await e.duplicate();V({key:l.id})}},s=D({state:"idle"});function N(t){s.value={state:"renaming",projectId:t.id,newName:t.name}}async function I(t){if(s.value.state==="renaming"&&t){const{projectId:e,newName:a}=s.value;await C.rename(e,a),g()}s.value={state:"idle"}}const A=H(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=o.value)==null?void 0:t.projects.map(a=>{var l,p;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:W,label:"Go to project",onClick:V},{icon:X,label:"Rename project",onClick:()=>N(a)},...(p=(l=o.value)==null?void 0:l.organization)!=null&&p.featureFlags.DUPLICATE_PROJECTS?[{icon:ye,label:"Duplicate",onClick:Z}]:[],{icon:$,label:"Delete",onClick:n,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(i(),c(S,null,[m(o)?(i(),M(L,{key:0,"entity-name":"project",loading:m(h),title:`${m(o).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:A.value,fields:r,onCreate:j},null,8,["loading","title","table"])):P("",!0),b(m(G),{open:s.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>I(!1)),onOk:e[2]||(e[2]=a=>I(!0))},{default:k(()=>[s.value.state==="renaming"?(i(),M(m(O),{key:0,layout:"vertical"},{default:k(()=>[b(m(F),{label:"New name"},{default:k(()=>[b(m(E),{value:s.value.newName,"onUpdate:value":e[0]||(e[0]=a=>s.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):P("",!0)]),_:1},8,["open"])],64))}});export{Se as default};
//# sourceMappingURL=Projects.7003b8c5.js.map
