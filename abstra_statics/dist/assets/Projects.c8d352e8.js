import{d as N,B as y,f as V,o as i,eu as c,dB as _,ew as C,ez as B,a as d,eB as x,eM as D,e as R,u as m,c as I,b as k,w as b,aE as S,eN as $,ck as E,by as F,cj as O,cu as G,cv as T}from"./vue-router.944d4283.js";import{a as U}from"./asyncComputed.68fcef5d.js";import{a as q}from"./ant-design.abb20155.js";import"./gateway.4d89f21e.js";import"./index.f535013d.js";import{P}from"./project.63d9421e.js";import{O as J}from"./organization.9b5d6c36.js";import{C as L}from"./CrudView.9833463a.js";import{F as W}from"./PhArrowSquareOut.vue.5c7fe262.js";import{G as K}from"./PhPencil.vue.68faabab.js";import"./popupNotifcation.506c8c03.js";import"./record.ec393ef5.js";import"./string.8c7b0b30.js";import"./router.5076a52f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.227281cf.js";import"./BookOutlined.262a9147.js";import"./url.26c4021b.js";import"./index.ea1ec1fa.js";import"./index.b11e3c32.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[r]="62c6d690-ee5c-46fa-8fa8-e4bdf8263f49",u._sentryDebugIdIdentifier="sentry-dbid-62c6d690-ee5c-46fa-8fa8-e4bdf8263f49")}catch{}})();const Q=["width","height","fill","transform"],X={key:0},Y=d("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"},null,-1),ee=[Y],te={key:1},ae=d("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"},null,-1),oe=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),ne=[ae,oe],re={key:2},ie=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),le=[ie],se={key:3},ce=d("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"},null,-1),ue=[ce],me={key:4},de=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),pe=[de],fe={key:5},ge=d("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"},null,-1),He=[ge],Ve={name:"PhCopy"},ye=N({...Ve,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(u){const r=u,v=y("weight","regular"),f=y("size","1em"),w=y("color","currentColor"),h=y("mirrored",!1),o=V(()=>{var n;return(n=r.weight)!=null?n:v}),g=V(()=>{var n;return(n=r.size)!=null?n:f}),H=V(()=>{var n;return(n=r.color)!=null?n:w}),j=V(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(n,Z)=>(i(),c("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:g.value,height:g.value,fill:H.value,transform:j.value},n.$attrs),[_(n.$slots,"default"),o.value==="bold"?(i(),c("g",X,ee)):o.value==="duotone"?(i(),c("g",te,ne)):o.value==="fill"?(i(),c("g",re,le)):o.value==="light"?(i(),c("g",se,ue)):o.value==="regular"?(i(),c("g",me,pe)):o.value==="thin"?(i(),c("g",fe,He)):C("",!0)],16,Q))}}),Se=N({__name:"Projects",setup(u){const r=[{key:"name",label:"Project Name"}],f=x().params.organizationId,w=D(),{loading:h,result:o,refetch:g}=U(()=>Promise.all([P.list(f),J.get(f)]).then(([t,e])=>({projects:t,organization:e}))),H=({key:t})=>w.push({name:"project",params:{projectId:t}}),j=async t=>{const e=await P.create({organizationId:f,name:t.name});H({key:e.id})},n=async({key:t})=>{var a,l;if(await q("Are you sure you want to delete this project?"))try{await((l=(a=o.value)==null?void 0:a.projects.find(p=>p.id===t))==null?void 0:l.delete())}catch(p){T.error({message:"Error deleting project",description:String(p)})}finally{await g()}},Z=async({key:t})=>{var a;const e=(a=o.value)==null?void 0:a.projects.find(l=>l.id===t);if(e){const l=await e.duplicate();H({key:l.id})}},s=R({state:"idle"});function z(t){s.value={state:"renaming",projectId:t.id,newName:t.name}}async function M(t){if(s.value.state==="renaming"&&t){const{projectId:e,newName:a}=s.value;await P.rename(e,a),g()}s.value={state:"idle"}}const A=V(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=o.value)==null?void 0:t.projects.map(a=>{var l,p;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:W,label:"Go to project",onClick:H},{icon:K,label:"Rename project",onClick:()=>z(a)},...(p=(l=o.value)==null?void 0:l.organization)!=null&&p.featureFlags.DUPLICATE_PROJECTS?[{icon:ye,label:"Duplicate",onClick:Z}]:[],{icon:$,label:"Delete",onClick:n,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(i(),c(S,null,[m(o)?(i(),I(L,{key:0,"entity-name":"project",loading:m(h),title:`${m(o).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:A.value,fields:r,onCreate:j},null,8,["loading","title","table"])):C("",!0),k(m(G),{open:s.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>M(!1)),onOk:e[2]||(e[2]=a=>M(!0))},{default:b(()=>[s.value.state==="renaming"?(i(),I(m(O),{key:0,layout:"vertical"},{default:b(()=>[k(m(E),{label:"New name"},{default:b(()=>[k(m(F),{value:s.value.newName,"onUpdate:value":e[0]||(e[0]=a=>s.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):C("",!0)]),_:1},8,["open"])],64))}});export{Se as default};
//# sourceMappingURL=Projects.c8d352e8.js.map
