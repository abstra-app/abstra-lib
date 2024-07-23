import{d as z,B as y,f as V,o as i,W as c,Z as _,R as C,ez as B,a as d,eB as D,eN as R,e as x,u as m,c as I,b as k,w as b,aJ as S,eO as $,co as F,bD as E,cn as O,cy as G,cz as T}from"./vue-router.1fa35404.js";import{a as U}from"./asyncComputed.8db624a6.js";import{a as J}from"./ant-design.50a01f6d.js";import"./gateway.174a5efe.js";import"./tables.539247dc.js";import{O as W}from"./organization.71861e72.js";import{P}from"./project.1034718b.js";import{C as q}from"./CrudView.c3d702d9.js";import{F as L}from"./PhArrowSquareOut.vue.daff67dc.js";import{G as K}from"./PhPencil.vue.f46a3636.js";import"./popupNotifcation.79c4d324.js";import"./record.7a025b12.js";import"./string.c4a42915.js";import"./router.e317596a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.47ac3787.js";import"./BookOutlined.b8c8c758.js";import"./url.3c9d9694.js";import"./index.ef23ee12.js";import"./index.3b8c53f0.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[r]="8477e61a-ce1a-4a2d-a5c2-e5e2555e2c60",u._sentryDebugIdIdentifier="sentry-dbid-8477e61a-ce1a-4a2d-a5c2-e5e2555e2c60")}catch{}})();const Q=["width","height","fill","transform"],X={key:0},Y=d("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"},null,-1),ee=[Y],te={key:1},ae=d("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"},null,-1),oe=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),ne=[ae,oe],re={key:2},ie=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),le=[ie],se={key:3},ce=d("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"},null,-1),ue=[ce],me={key:4},de=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),pe=[de],ge={key:5},fe=d("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"},null,-1),He=[fe],Ve={name:"PhCopy"},ye=z({...Ve,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(u){const r=u,v=y("weight","regular"),g=y("size","1em"),w=y("color","currentColor"),h=y("mirrored",!1),o=V(()=>{var n;return(n=r.weight)!=null?n:v}),f=V(()=>{var n;return(n=r.size)!=null?n:g}),H=V(()=>{var n;return(n=r.color)!=null?n:w}),j=V(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(n,Z)=>(i(),c("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:f.value,height:f.value,fill:H.value,transform:j.value},n.$attrs),[_(n.$slots,"default"),o.value==="bold"?(i(),c("g",X,ee)):o.value==="duotone"?(i(),c("g",te,ne)):o.value==="fill"?(i(),c("g",re,le)):o.value==="light"?(i(),c("g",se,ue)):o.value==="regular"?(i(),c("g",me,pe)):o.value==="thin"?(i(),c("g",ge,He)):C("",!0)],16,Q))}}),Se=z({__name:"Projects",setup(u){const r=[{key:"name",label:"Project Name"}],g=D().params.organizationId,w=R(),{loading:h,result:o,refetch:f}=U(()=>Promise.all([P.list(g),W.get(g)]).then(([t,e])=>({projects:t,organization:e}))),H=({key:t})=>w.push({name:"project",params:{projectId:t}}),j=async t=>{const e=await P.create({organizationId:g,name:t.name});H({key:e.id})},n=async({key:t})=>{var a,l;if(await J("Are you sure you want to delete this project?"))try{await((l=(a=o.value)==null?void 0:a.projects.find(p=>p.id===t))==null?void 0:l.delete())}catch(p){T.error({message:"Error deleting project",description:String(p)})}finally{await f()}},Z=async({key:t})=>{var a;const e=(a=o.value)==null?void 0:a.projects.find(l=>l.id===t);if(e){const l=await e.duplicate();H({key:l.id})}},s=x({state:"idle"});function N(t){s.value={state:"renaming",projectId:t.id,newName:t.name}}async function M(t){if(s.value.state==="renaming"&&t){const{projectId:e,newName:a}=s.value;await P.rename(e,a),f()}s.value={state:"idle"}}const A=V(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=o.value)==null?void 0:t.projects.map(a=>{var l,p;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:L,label:"Go to project",onClick:H},{icon:K,label:"Rename project",onClick:()=>N(a)},...(p=(l=o.value)==null?void 0:l.organization)!=null&&p.featureFlags.DUPLICATE_PROJECTS?[{icon:ye,label:"Duplicate",onClick:Z}]:[],{icon:$,label:"Delete",onClick:n,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(i(),c(S,null,[m(o)?(i(),I(q,{key:0,"entity-name":"project",loading:m(h),title:`${m(o).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:A.value,fields:r,onCreate:j},null,8,["loading","title","table"])):C("",!0),k(m(G),{open:s.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>M(!1)),onOk:e[2]||(e[2]=a=>M(!0))},{default:b(()=>[s.value.state==="renaming"?(i(),I(m(O),{key:0,layout:"vertical"},{default:b(()=>[k(m(F),{label:"New name"},{default:b(()=>[k(m(E),{value:s.value.newName,"onUpdate:value":e[0]||(e[0]=a=>s.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):C("",!0)]),_:1},8,["open"])],64))}});export{Se as default};
//# sourceMappingURL=Projects.2bdd8fa0.js.map
