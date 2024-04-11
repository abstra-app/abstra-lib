import{d as A,Y as y,I as V,b as i,ev as c,dk as _,ex as C,eA as D,e as d,eD as x,eJ as R,r as F,u,c as I,f as j,w as k,aD as S,eR as $,by as B,cv as E}from"./outputWidgets.0b665cc7.js";import{a as O}from"./asyncComputed.1d5bfff0.js";import{a as G}from"./ant-design.7b6715bc.js";import"./router.6e7fd32b.js";import"./index.608103f2.js";import{P}from"./project.f77c51ea.js";import{O as T}from"./organization.41aa6ee3.js";import{C as U}from"./CrudView.06353474.js";import{F as J}from"./PhArrowSquareOut.vue.20ef1d61.js";import{G as q}from"./PhPencil.vue.addb8cf1.js";import{A as L,F as W}from"./Form.ac4ccba7.js";import{M as Y}from"./Modal.3f688333.js";import"./index.3d9cdc48.js";import"./popupNotifcation.84d6e93b.js";import"./record.9fd09cc1.js";import"./pubsub.16b0f787.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b81332db.js";import"./BookOutlined.4857dcdd.js";import"./url.8ba4c1e5.js";import"./Paragraph.f6e4bd5c.js";import"./Text.b24e4288.js";import"./index.f264fca2.js";import"./Title.08b5828d.js";import"./index.c642001c.js";import"./hasIn.8e8e9839.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[n]="5f6be5f7-cb1b-42aa-9a6b-12c743603c08",m._sentryDebugIdIdentifier="sentry-dbid-5f6be5f7-cb1b-42aa-9a6b-12c743603c08")}catch{}})();const K=["width","height","fill","transform"],Q={key:0},X=d("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"},null,-1),ee=[X],te={key:1},ae=d("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"},null,-1),oe=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),re=[ae,oe],ne={key:2},ie=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),le=[ie],se={key:3},ce=d("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"},null,-1),me=[ce],ue={key:4},de=d("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"},null,-1),pe=[de],fe={key:5},ge=d("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"},null,-1),He=[ge],Ve={name:"PhCopy"},ye=A({...Ve,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(m){const n=m,v=y("weight","regular"),f=y("size","1em"),w=y("color","currentColor"),h=y("mirrored",!1),o=V(()=>{var r;return(r=n.weight)!=null?r:v}),g=V(()=>{var r;return(r=n.size)!=null?r:f}),H=V(()=>{var r;return(r=n.color)!=null?r:w}),b=V(()=>n.mirrored!==void 0?n.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(r,Z)=>(i(),c("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:g.value,height:g.value,fill:H.value,transform:b.value},r.$attrs),[_(r.$slots,"default"),o.value==="bold"?(i(),c("g",Q,ee)):o.value==="duotone"?(i(),c("g",te,re)):o.value==="fill"?(i(),c("g",ne,le)):o.value==="light"?(i(),c("g",se,me)):o.value==="regular"?(i(),c("g",ue,pe)):o.value==="thin"?(i(),c("g",fe,He)):C("",!0)],16,K))}}),Te=A({__name:"Projects",setup(m){const n=[{key:"name",label:"Project Name"}],f=x().params.organizationId,w=R(),{loading:h,result:o,refetch:g}=O(()=>Promise.all([P.list(f),T.get(f)]).then(([t,e])=>({projects:t,organization:e}))),H=({key:t})=>w.push({name:"project",params:{projectId:t}}),b=async t=>{const e=await P.create({organizationId:f,name:t.name});H({key:e.id})},r=async({key:t})=>{var a,l;if(await G("Are you sure you want to delete this project?"))try{await((l=(a=o.value)==null?void 0:a.projects.find(p=>p.id===t))==null?void 0:l.delete())}catch(p){E.error({message:"Error deleting project",description:String(p)})}finally{await g()}},Z=async({key:t})=>{var a;const e=(a=o.value)==null?void 0:a.projects.find(l=>l.id===t);if(e){const l=await e.duplicate();H({key:l.id})}},s=F({state:"idle"});function N(t){s.value={state:"renaming",projectId:t.id,newName:t.name}}async function M(t){if(s.value.state==="renaming"&&t){const{projectId:e,newName:a}=s.value;await P.rename(e,a),g()}s.value={state:"idle"}}const z=V(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=o.value)==null?void 0:t.projects.map(a=>{var l,p;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:J,label:"Go to project",onClick:H},{icon:q,label:"Rename project",onClick:()=>N(a)},...(p=(l=o.value)==null?void 0:l.organization)!=null&&p.featureFlags.DUPLICATE_PROJECTS?[{icon:ye,label:"Duplicate",onClick:Z}]:[],{icon:$,label:"Delete",onClick:r,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>(i(),c(S,null,[u(o)?(i(),I(U,{key:0,"entity-name":"project",loading:u(h),title:`${u(o).organization.name}'s Projects`,description:"Organize your team\u2019s work into different Projects, each with it\u2019s own environment settings and authorized users.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:n,onCreate:b},null,8,["loading","title","table"])):C("",!0),j(u(Y),{open:s.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>M(!1)),onOk:e[2]||(e[2]=a=>M(!0))},{default:k(()=>[s.value.state==="renaming"?(i(),I(u(W),{key:0,layout:"vertical"},{default:k(()=>[j(u(L),{label:"New name"},{default:k(()=>[j(u(B),{value:s.value.newName,"onUpdate:value":e[0]||(e[0]=a=>s.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):C("",!0)]),_:1},8,["open"])],64))}});export{Te as default};
//# sourceMappingURL=Projects.7c6e270b.js.map
