import{d as I,H as b,b as d,eu as L,f as s,w as a,u as t,aq as p,ai as ce,cz as $,ah as N,e as _,c as g,ew as S,eF as de,eG as fe,v as Q,by as R,aG as me,eE as x,bF as V,ad as ve,eC as ge,cC as ye,aC as Z,eO as _e,eA as he,r as Y,eP as be}from"./outputWidgets.b1e87772.js";import{F as D}from"./forms.05ceb391.js";import{H as P,J as j}from"./jobs.76f51498.js";import{W as ee}from"./workspaces.56803bab.js";import{a as B}from"./asyncComputed.5830bf45.js";import{S as J}from"./scripts.e16f3ade.js";import"./envVars.205c1f47.js";import{I as ke}from"./PhScroll.vue.1d8d7f37.js";import{F as we,G as Fe,a as Se}from"./PhWebhooksLogo.vue.593430d6.js";import{_ as W}from"./DocsButton.vue_vue_type_script_setup_true_lang.370ccd6b.js";import{a as Ce,A as T}from"./Text.a2ac66f5.js";import{A}from"./index.fae832ba.js";import{A as U}from"./Paragraph.72ff08f3.js";import{v as te,b as Te}from"./validations.8f0efe91.js";import{A as E,F as ae}from"./Form.c64de99c.js";import{A as Ae}from"./index.0d1bf03c.js";import{M as xe}from"./Modal.6f2aaf4e.js";import{C as Ie}from"./CrudView.cde29d2c.js";import{a as X}from"./ant-design.baebef5b.js";import{c as $e}from"./string.10c626b7.js";import{F as Ne}from"./PhArrowSquareOut.vue.0925e93c.js";import{A as Ue}from"./Title.87ff1f7b.js";import{A as Ee}from"./Link.d93fe6d3.js";import{A as De}from"./index.78c9c56d.js";import"./record.2f552fbf.js";import"./pubsub.8b7604ff.js";import"./runnerData.95ea1f30.js";import"./url.105c4f84.js";import"./hasIn.443af95b.js";import"./router.a9e5af79.js";import"./popupNotifcation.6e758e81.js";import"./index.0a49c5ca.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="53a43e27-0f9a-44d4-9920-647402db905e",o._sentryDebugIdIdentifier="sentry-dbid-53a43e27-0f9a-44d4-9920-647402db905e")}catch{}})();const G=o=>(de("data-v-180fc155"),o=o(),fe(),o),Pe={key:0,class:"choose-type"},je={class:"option-content"},Be=G(()=>_("span",null,"Forms",-1)),Ge={class:"option-content"},He=G(()=>_("span",null,"Hooks",-1)),Oe={class:"option-content"},Ve=G(()=>_("span",null,"Scripts",-1)),ze={class:"option-content"},Je=G(()=>_("span",null,"Jobs",-1)),Le=I({__name:"ChooseStageType",props:{state:{}},emits:["choose-type"],setup(o,{emit:n}){const i=o,u=b(()=>i.state.type==="form"?"#fff":void 0),y=b(()=>i.state.type==="hook"?"#fff":void 0),k=b(()=>i.state.type==="script"?"#fff":void 0),m=b(()=>i.state.type==="job"?"#fff":void 0),F=h=>n("choose-type",h);return(h,w)=>h.state.state==="choosing-type"?(d(),L("div",Pe,[s(t(A),{vertical:"",gap:"30"},{default:a(()=>[s(t(Ce),null,{default:a(()=>[p("Choose your stage type")]),_:1}),s(t(ce),{value:h.state.type,"onUpdate:value":[w[0]||(w[0]=f=>h.state.type=f),F],size:"large","button-style":"solid"},{default:a(()=>[s(t(A),{gap:"24",vertical:""},{default:a(()=>[s(t(A),{gap:"24"},{default:a(()=>[s(t($),{placement:"left",title:"Forms"},{content:a(()=>[s(t(U),null,{default:a(()=>[p(" Use to collect user input via interaction with a form interface ")]),_:1}),s(W,{path:"forms/overview"})]),default:a(()=>[s(t(N),{value:"form",class:"option"},{default:a(()=>[_("div",je,[(d(),g(t(we),{key:u.value,color:u.value},null,8,["color"])),Be])]),_:1})]),_:1}),s(t($),{placement:"right",title:"Hooks"},{content:a(()=>[s(t(U),null,{default:a(()=>[p("Use to build endpoints triggered by HTTP requests")]),_:1}),s(W,{path:"forms/overview"})]),default:a(()=>[s(t(N),{value:"hook",class:"option"},{default:a(()=>[_("div",Ge,[(d(),g(t(Fe),{key:y.value,color:y.value},null,8,["color"])),He])]),_:1})]),_:1})]),_:1}),s(t(A),{gap:"24"},{default:a(()=>[s(t($),{placement:"left",title:"Scripts"},{content:a(()=>[s(t(U),null,{default:a(()=>[p(" Use to write plain Python scripts ")]),_:1})]),default:a(()=>[s(t(N),{value:"script",class:"option"},{default:a(()=>[_("div",Oe,[(d(),g(t(ke),{key:k.value,color:k.value},null,8,["color"])),Ve])]),_:1})]),_:1}),s(t($),{placement:"right",title:"Jobs"},{content:a(()=>[s(t(U),null,{default:a(()=>[p(" Use to schedule your script execution periodically ")]),_:1})]),default:a(()=>[s(t(N),{value:"job",class:"option"},{default:a(()=>[_("div",ze,[(d(),g(t(Se),{key:m.value,color:m.value},null,8,["color"])),Je])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})])):S("",!0)}});const Me=Q(Le,[["__scopeId","data-v-180fc155"]]),qe=_("br",null,null,-1),Re=I({__name:"NewStage",props:{state:{}},emits:["update-name","update-file"],setup(o,{emit:n}){const i=o,{result:u}=B(()=>fetch("/_editor/api/workspace/root").then(f=>f.text())),y=b(()=>i.state.state!=="creating"?"":`${u.value}/${i.state.stage.filename}`),k=b(()=>i.state.state!=="creating"?"":`${i.state.stage.type[0].toUpperCase()+i.state.stage.type.slice(1)} title`),m=f=>{n("update-name",f);const e=Te(f);n("update-file",e),h()},{result:F,refetch:h}=B(()=>ee.checkFile(i.state.stage.filename)),w=b(()=>te(i.state.stage.filename));return(f,e)=>(d(),g(t(ae),{layout:"vertical"},{default:a(()=>{var C;return[s(t(E),{label:k.value,required:!0},{default:a(()=>[s(t(R),{value:f.state.stage.title,"onUpdate:value":m},null,8,["value"])]),_:1},8,["label"]),s(t(E),{label:"Generated file",required:!0,"validate-status":w.value.valid?"success":"error",help:w.value.valid?void 0:w.value.reason},{default:a(()=>[s(t(me),{placement:"right"},{title:a(()=>[p(" You can change this later ")]),default:a(()=>[s(t(R),{value:f.state.stage.filename,"onUpdate:value":e[0]||(e[0]=H=>f.state.stage.filename=H),disabled:!0},null,8,["value"])]),_:1})]),_:1},8,["validate-status","help"]),s(t(E),null,{default:a(()=>[s(t(T),null,{default:a(()=>[p(" Your stage source code will be generated at: ")]),_:1}),qe,s(t(T),{code:""},{default:a(()=>[p(x(y.value),1)]),_:1})]),_:1}),(C=t(F))!=null&&C.exists?(d(),g(t(Ae),{key:0,type:"warning"},{message:a(()=>[s(t(T),null,{default:a(()=>[s(t(T),{strong:""},{default:a(()=>[p("Warning:")]),_:1}),p(" This file already exists. It will be used by more than one stage. ")]),_:1})]),_:1})):S("",!0)]}),_:1}))}}),Ye=I({__name:"CreateModal",props:{open:{type:Boolean},state:{}},emits:["close","choose-type","next-step","previous-step","create-stage","update-name","update-file"],setup(o,{emit:n}){const i=o,u=e=>n("update-name",e),y=e=>n("update-file",e),k=()=>n("close"),m=e=>n("choose-type",e),F=()=>n("next-step"),h=()=>n("previous-step"),w=()=>n("create-stage"),f=b(()=>!(i.state.state!=="creating"||!te(i.state.stage.filename).valid||!i.state.stage.title));return(e,C)=>(d(),g(t(xe),{open:e.open,title:"Create a new stage",onCancel:k},{footer:a(()=>[e.state.state==="creating"?(d(),g(t(V),{key:0,onClick:h},{default:a(()=>[p("Previous")]),_:1})):S("",!0),e.state.state==="creating"?(d(),g(t(V),{key:1,type:"primary",disabled:!f.value,onClick:w},{default:a(()=>[p(" Create ")]),_:1},8,["disabled"])):S("",!0),e.state.state==="choosing-type"?(d(),g(t(V),{key:2,type:"primary",disabled:!e.state.type,onClick:F},{default:a(()=>[p(" Next ")]),_:1},8,["disabled"])):S("",!0)]),default:a(()=>[e.state.state==="choosing-type"?(d(),g(Me,{key:0,state:e.state,onChooseType:m},null,8,["state"])):S("",!0),e.state.state==="creating"?(d(),g(Re,{key:1,state:e.state,onUpdateName:u,onUpdateFile:y},null,8,["state"])):S("",!0)]),_:1},8,["open"]))}}),We=I({__name:"FilterStages",emits:["update-filter"],setup(o,{emit:n}){const i=[{label:"Forms",value:"form"},{label:"Hooks",value:"hook"},{label:"Scripts",value:"script"},{label:"Jobs",value:"job"}],u=y=>n("update-filter",y);return(y,k)=>(d(),g(t(ae),null,{default:a(()=>[s(t(E),{label:"Filter"},{default:a(()=>[s(t(ve),{mode:"multiple",style:{width:"360px"},placeholder:"All","onUpdate:value":u},{default:a(()=>[(d(),L(Z,null,ge(i,m=>s(t(ye),{key:m.value,value:m.value},{default:a(()=>[p(x(m.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),Xe=200,Ke=o=>{if(!o)return[0,0];if(o.length===0)return[0,0];let n=-1/0,i=0;for(const u of o)u.position.x>n&&(n=u.position.x),i+=u.position.y/o.length;return[n+Xe,i]},z=o=>{if(o instanceof D)return"form";if(o instanceof P)return"hook";if(o instanceof j)return"job";if(o instanceof J)return"script";throw new Error("Invalid script type")},Qe=o=>o instanceof D?`/${o.path}`:o instanceof P?`/_hooks/${o.path}`:o instanceof j?`${o.schedule}`:"",Ze={class:"ellipsis",style:{"max-width":"300px"}},et={class:"ellipsis",style:{"max-width":"250px"}},tt={class:"ellipsis",style:{"max-width":"200px"}},K=100,at=I({__name:"Stages",setup(o){_e(l=>({"549e2804":ue()}));const n=he(),{loading:i,result:u,refetch:y}=B(async()=>Promise.all([D.list(),P.list(),j.list(),J.list()]).then(([l,r,c,v])=>[...l,...r,...c,...v])),{result:k}=B(()=>ee.get()),m=Y([]),F=l=>{m.value=l},h=b(()=>u.value?m.value.length===0?u.value:u.value.filter(l=>m.value.includes(z(l))):[]),w=l=>{!k.value||k.value.openFile(l)},f=b(()=>{const l=[{name:"Type",align:"left"},{name:"Title",align:"left"},{name:"File",align:"left"},{name:"Trigger",align:"left"},{name:"",align:"right"}],r=h.value;if(!r)return{columns:l,rows:[]};const c=r.map(v=>{const O=$e(z(v));return{key:v.id,cells:[{type:"tag",text:O},{type:"slot",key:"title",payload:{script:v}},{type:"slot",key:"file",payload:{script:v}},{type:"slot",key:"trigger",payload:{script:v}},{type:"actions",actions:[{icon:Ne,label:"Open .py file",onClick:()=>w(v.file)},{icon:be,label:"Delete",onClick:()=>re(v.id)}]}]}});return{columns:l,rows:c}}),e=Y({state:"idle"}),C=b(()=>e.value.state==="choosing-type"||e.value.state==="creating"),H=()=>{e.value={state:"choosing-type",type:null}},M=()=>{e.value={state:"idle"}},se=l=>{e.value.state==="choosing-type"&&(e.value={state:"choosing-type",type:l})},oe=()=>{e.value.state==="choosing-type"&&e.value.type!==null&&(e.value={state:"creating",stage:{type:e.value.type,title:`Untitled ${e.value.type}`,filename:`untitled_${e.value.type}.py`}})},le=()=>{e.value.state==="creating"&&(e.value={state:"choosing-type",type:e.value.stage.type})},ne=l=>{e.value.state==="creating"&&(e.value.stage.title=l)},ie=l=>{e.value.state==="creating"&&(e.value.stage.filename=l)},re=async l=>{var r,c;if(await X("Are you sure you want to delete this script?")){const v=await X("Do you want to delete the .py file associated with this script?",{okText:"Yes",cancelText:"No"});await((c=(r=u.value)==null?void 0:r.find(O=>O.id===l))==null?void 0:c.delete(v)),await y()}},ue=()=>(K/1e3).toString()+"s",pe=async()=>{if(e.value.state!=="creating")return;const l=Ke(u.value||[]);let r;if(e.value.stage.type==="form"?r=await D.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="hook"?r=await P.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="job"?r=await j.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="script"&&(r=await J.create(e.value.stage.title,e.value.stage.filename,l)),!r)throw new Error("Failed to create script");const c=r.id,v=e.value.stage.type;M(),await y(),setTimeout(()=>{q(c,v)},K)},q=(l,r)=>{r==="form"&&n.push({name:"formEditor",params:{id:l}}),r==="hook"&&n.push({name:"hookEditor",params:{id:l}}),r==="script"&&n.push({name:"scriptEditor",params:{id:l}}),r==="job"&&n.push({name:"jobEditor",params:{id:l}})};return(l,r)=>(d(),L(Z,null,[s(t(A),{vertical:"",style:{padding:"40px 120px"}},{default:a(()=>[s(t(Ue),null,{default:a(()=>[p("Stages")]),_:1}),s(We,{onUpdateFilter:F}),s(Ie,{"empty-title":"There are no scripts","entity-name":"scripts",description:"",table:f.value,loading:t(i),title:"","create-button-text":"Create new",onCreate:H},{title:a(({payload:c})=>[_("div",Ze,[s(t(Ee),{onClick:v=>q(c.script.id,t(z)(c.script))},{default:a(()=>[p(x(c.script.title),1)]),_:2},1032,["onClick"])])]),file:a(({payload:c})=>[_("div",et,[s(t(T),null,{default:a(()=>[p(x(c.script.file),1)]),_:2},1024)])]),trigger:a(({payload:c})=>[s(t(De),{color:"default"},{default:a(()=>[_("div",tt,x(t(Qe)(c.script)),1)]),_:2},1024)]),_:1},8,["table","loading"])]),_:1}),s(Ye,{open:C.value,state:e.value,onClose:M,onChooseType:se,onNextStep:oe,onPreviousStep:le,onCreateStage:pe,onUpdateName:ne,onUpdateFile:ie},null,8,["open","state"])],64))}});const Pt=Q(at,[["__scopeId","data-v-414b6304"]]);export{Pt as default};
//# sourceMappingURL=Stages.0eb04465.js.map
