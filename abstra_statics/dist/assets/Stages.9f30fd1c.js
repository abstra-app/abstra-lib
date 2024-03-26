import{d as I,H as b,b as d,eu as L,f as o,w as a,u as t,aq as p,ai as ce,cz as $,ah as N,e as _,c as g,ew as S,eF as de,eG as fe,v as Q,by as R,aG as me,eE as x,bF as V,ad as ve,eC as ge,cC as ye,aC as Z,eO as _e,eA as he,r as Y,eP as be}from"./outputWidgets.e9677800.js";import{F as D}from"./forms.cb549279.js";import{H as P,J as j}from"./jobs.a5bb2f06.js";import{W as ee}from"./workspaces.490451ae.js";import{a as H}from"./asyncComputed.37b7af98.js";import{S as J}from"./scripts.3b9bc494.js";import"./envVars.5ab5fff0.js";import{I as ke}from"./PhScroll.vue.ba9ff361.js";import{F as we,G as Fe,a as Se}from"./PhWebhooksLogo.vue.52f74867.js";import{_ as W}from"./DocsButton.vue_vue_type_script_setup_true_lang.a4277c3a.js";import{T as Ce}from"./Typography.511f4fec.js";import{A as T}from"./index.42279d35.js";import{A as U}from"./Paragraph.394702f6.js";import{v as te,b as Te}from"./validations.3237e8d9.js";import{A as E,F as ae}from"./Form.9737d51d.js";import{A}from"./Text.fd9e90fd.js";import{A as Ae}from"./index.3e3be57f.js";import{M as xe}from"./Modal.df560cc7.js";import{C as Ie}from"./CrudView.8e03181d.js";import{a as X}from"./ant-design.dbbf4726.js";import{c as $e}from"./string.07505ec9.js";import{F as Ne}from"./PhArrowSquareOut.vue.b47e902f.js";import{A as Ue}from"./Title.c954a24a.js";import{A as Ee}from"./Link.29d21673.js";import{A as De}from"./index.1a0bd015.js";import"./record.767f28b7.js";import"./pubsub.9e36d89a.js";import"./runnerData.11ae4383.js";import"./url.89c6b244.js";import"./Base.64d54b8f.js";import"./hasIn.bd3f78ff.js";import"./router.e014ddc2.js";import"./popupNotifcation.7148cdf9.js";import"./index.bbda4abd.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="d523ab7b-56dd-47e1-baf5-4f6d132388eb",s._sentryDebugIdIdentifier="sentry-dbid-d523ab7b-56dd-47e1-baf5-4f6d132388eb")}catch{}})();const B=s=>(de("data-v-180fc155"),s=s(),fe(),s),Pe={key:0,class:"choose-type"},je={class:"option-content"},He=B(()=>_("span",null,"Forms",-1)),Be={class:"option-content"},Ge=B(()=>_("span",null,"Hooks",-1)),Oe={class:"option-content"},Ve=B(()=>_("span",null,"Scripts",-1)),ze={class:"option-content"},Je=B(()=>_("span",null,"Jobs",-1)),Le=I({__name:"ChooseStageType",props:{state:{}},emits:["choose-type"],setup(s,{emit:n}){const i=s,u=b(()=>i.state.type==="form"?"#fff":void 0),y=b(()=>i.state.type==="hook"?"#fff":void 0),k=b(()=>i.state.type==="script"?"#fff":void 0),m=b(()=>i.state.type==="job"?"#fff":void 0),F=h=>n("choose-type",h);return(h,w)=>h.state.state==="choosing-type"?(d(),L("div",Pe,[o(t(T),{vertical:"",gap:"30"},{default:a(()=>[o(t(Ce),null,{default:a(()=>[p("Choose your stage type")]),_:1}),o(t(ce),{value:h.state.type,"onUpdate:value":[w[0]||(w[0]=f=>h.state.type=f),F],size:"large","button-style":"solid"},{default:a(()=>[o(t(T),{gap:"24",vertical:""},{default:a(()=>[o(t(T),{gap:"24"},{default:a(()=>[o(t($),{placement:"left",title:"Forms"},{content:a(()=>[o(t(U),null,{default:a(()=>[p(" Use to collect user input via interaction with a form interface ")]),_:1}),o(W,{path:"forms/overview"})]),default:a(()=>[o(t(N),{value:"form",class:"option"},{default:a(()=>[_("div",je,[(d(),g(t(we),{key:u.value,color:u.value},null,8,["color"])),He])]),_:1})]),_:1}),o(t($),{placement:"right",title:"Hooks"},{content:a(()=>[o(t(U),null,{default:a(()=>[p("Use to build endpoints triggered by HTTP requests")]),_:1}),o(W,{path:"forms/overview"})]),default:a(()=>[o(t(N),{value:"hook",class:"option"},{default:a(()=>[_("div",Be,[(d(),g(t(Fe),{key:y.value,color:y.value},null,8,["color"])),Ge])]),_:1})]),_:1})]),_:1}),o(t(T),{gap:"24"},{default:a(()=>[o(t($),{placement:"left",title:"Scripts"},{content:a(()=>[o(t(U),null,{default:a(()=>[p(" Use to write plain Python scripts ")]),_:1})]),default:a(()=>[o(t(N),{value:"script",class:"option"},{default:a(()=>[_("div",Oe,[(d(),g(t(ke),{key:k.value,color:k.value},null,8,["color"])),Ve])]),_:1})]),_:1}),o(t($),{placement:"right",title:"Jobs"},{content:a(()=>[o(t(U),null,{default:a(()=>[p(" Use to schedule your script execution periodically ")]),_:1})]),default:a(()=>[o(t(N),{value:"job",class:"option"},{default:a(()=>[_("div",ze,[(d(),g(t(Se),{key:m.value,color:m.value},null,8,["color"])),Je])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})])):S("",!0)}});const Me=Q(Le,[["__scopeId","data-v-180fc155"]]),qe=_("br",null,null,-1),Re=I({__name:"NewStage",props:{state:{}},emits:["update-name","update-file"],setup(s,{emit:n}){const i=s,{result:u}=H(()=>fetch("/_editor/api/workspace/root").then(f=>f.text())),y=b(()=>i.state.state!=="creating"?"":`${u.value}/${i.state.stage.filename}`),k=b(()=>i.state.state!=="creating"?"":`${i.state.stage.type[0].toUpperCase()+i.state.stage.type.slice(1)} title`),m=f=>{n("update-name",f);const e=Te(f);n("update-file",e),h()},{result:F,refetch:h}=H(()=>ee.checkFile(i.state.stage.filename)),w=b(()=>te(i.state.stage.filename));return(f,e)=>(d(),g(t(ae),{layout:"vertical"},{default:a(()=>{var C;return[o(t(E),{label:k.value,required:!0},{default:a(()=>[o(t(R),{value:f.state.stage.title,"onUpdate:value":m},null,8,["value"])]),_:1},8,["label"]),o(t(E),{label:"Generated file",required:!0,"validate-status":w.value.valid?"success":"error",help:w.value.valid?void 0:w.value.reason},{default:a(()=>[o(t(me),{placement:"right"},{title:a(()=>[p(" You can change this later ")]),default:a(()=>[o(t(R),{value:f.state.stage.filename,"onUpdate:value":e[0]||(e[0]=G=>f.state.stage.filename=G),disabled:!0},null,8,["value"])]),_:1})]),_:1},8,["validate-status","help"]),o(t(E),null,{default:a(()=>[o(t(A),null,{default:a(()=>[p(" Your stage source code will be generated at: ")]),_:1}),qe,o(t(A),{code:""},{default:a(()=>[p(x(y.value),1)]),_:1})]),_:1}),(C=t(F))!=null&&C.exists?(d(),g(t(Ae),{key:0,type:"warning"},{message:a(()=>[o(t(A),null,{default:a(()=>[o(t(A),{strong:""},{default:a(()=>[p("Warning:")]),_:1}),p(" This file already exists. It will be used by more than one stage. ")]),_:1})]),_:1})):S("",!0)]}),_:1}))}}),Ye=I({__name:"CreateModal",props:{open:{type:Boolean},state:{}},emits:["close","choose-type","next-step","previous-step","create-stage","update-name","update-file"],setup(s,{emit:n}){const i=s,u=e=>n("update-name",e),y=e=>n("update-file",e),k=()=>n("close"),m=e=>n("choose-type",e),F=()=>n("next-step"),h=()=>n("previous-step"),w=()=>n("create-stage"),f=b(()=>!(i.state.state!=="creating"||!te(i.state.stage.filename).valid||!i.state.stage.title));return(e,C)=>(d(),g(t(xe),{open:e.open,title:"Create a new stage",onCancel:k},{footer:a(()=>[e.state.state==="creating"?(d(),g(t(V),{key:0,onClick:h},{default:a(()=>[p("Previous")]),_:1})):S("",!0),e.state.state==="creating"?(d(),g(t(V),{key:1,type:"primary",disabled:!f.value,onClick:w},{default:a(()=>[p(" Create ")]),_:1},8,["disabled"])):S("",!0),e.state.state==="choosing-type"?(d(),g(t(V),{key:2,type:"primary",disabled:!e.state.type,onClick:F},{default:a(()=>[p(" Next ")]),_:1},8,["disabled"])):S("",!0)]),default:a(()=>[e.state.state==="choosing-type"?(d(),g(Me,{key:0,state:e.state,onChooseType:m},null,8,["state"])):S("",!0),e.state.state==="creating"?(d(),g(Re,{key:1,state:e.state,onUpdateName:u,onUpdateFile:y},null,8,["state"])):S("",!0)]),_:1},8,["open"]))}}),We=I({__name:"FilterStages",emits:["update-filter"],setup(s,{emit:n}){const i=[{label:"Forms",value:"form"},{label:"Hooks",value:"hook"},{label:"Scripts",value:"script"},{label:"Jobs",value:"job"}],u=y=>n("update-filter",y);return(y,k)=>(d(),g(t(ae),null,{default:a(()=>[o(t(E),{label:"Filter"},{default:a(()=>[o(t(ve),{mode:"multiple",style:{width:"360px"},placeholder:"All","onUpdate:value":u},{default:a(()=>[(d(),L(Z,null,ge(i,m=>o(t(ye),{key:m.value,value:m.value},{default:a(()=>[p(x(m.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),Xe=200,Ke=s=>{if(!s)return[0,0];if(s.length===0)return[0,0];let n=-1/0,i=0;for(const u of s)u.position.x>n&&(n=u.position.x),i+=u.position.y/s.length;return[n+Xe,i]},z=s=>{if(s instanceof D)return"form";if(s instanceof P)return"hook";if(s instanceof j)return"job";if(s instanceof J)return"script";throw new Error("Invalid script type")},Qe=s=>s instanceof D?`/${s.path}`:s instanceof P?`/_hooks/${s.path}`:s instanceof j?`${s.schedule}`:"",Ze={class:"ellipsis",style:{"max-width":"300px"}},et={class:"ellipsis",style:{"max-width":"250px"}},tt={class:"ellipsis",style:{"max-width":"200px"}},K=100,at=I({__name:"Stages",setup(s){_e(l=>({"956b41b2":ue()}));const n=he(),{loading:i,result:u,refetch:y}=H(async()=>Promise.all([D.list(),P.list(),j.list(),J.list()]).then(([l,r,c,v])=>[...l,...r,...c,...v])),{result:k}=H(()=>ee.get()),m=Y([]),F=l=>{m.value=l},h=b(()=>u.value?m.value.length===0?u.value:u.value.filter(l=>m.value.includes(z(l))):[]),w=l=>{!k.value||k.value.openFile(l)},f=b(()=>{const l=[{name:"Type",align:"left"},{name:"Title",align:"left"},{name:"File",align:"left"},{name:"Trigger",align:"left"},{name:"",align:"right"}],r=h.value;if(!r)return{columns:l,rows:[]};const c=r.map(v=>{const O=$e(z(v));return{key:v.id,cells:[{type:"tag",text:O},{type:"slot",key:"title",payload:{script:v}},{type:"slot",key:"file",payload:{script:v}},{type:"slot",key:"trigger",payload:{script:v}},{type:"actions",actions:[{icon:Ne,label:"Open .py file",onClick:()=>w(v.file)},{icon:be,label:"Delete",onClick:()=>re(v.id)}]}]}});return{columns:l,rows:c}}),e=Y({state:"idle"}),C=b(()=>e.value.state==="choosing-type"||e.value.state==="creating"),G=()=>{e.value={state:"choosing-type",type:null}},M=()=>{e.value={state:"idle"}},oe=l=>{e.value.state==="choosing-type"&&(e.value={state:"choosing-type",type:l})},se=()=>{e.value.state==="choosing-type"&&e.value.type!==null&&(e.value={state:"creating",stage:{type:e.value.type,title:`Untitled ${e.value.type}`,filename:`untitled_${e.value.type}.py`}})},le=()=>{e.value.state==="creating"&&(e.value={state:"choosing-type",type:e.value.stage.type})},ne=l=>{e.value.state==="creating"&&(e.value.stage.title=l)},ie=l=>{e.value.state==="creating"&&(e.value.stage.filename=l)},re=async l=>{var r,c;if(await X("Are you sure you want to delete this script?")){const v=await X("Do you want to delete the .py file associated with this script?",{okText:"Yes",cancelText:"No"});await((c=(r=u.value)==null?void 0:r.find(O=>O.id===l))==null?void 0:c.delete(v)),await y()}},ue=()=>(K/1e3).toString()+"s",pe=async()=>{if(e.value.state!=="creating")return;const l=Ke(u.value||[]);let r;if(e.value.stage.type==="form"?r=await D.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="hook"?r=await P.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="job"?r=await j.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="script"&&(r=await J.create(e.value.stage.title,e.value.stage.filename,l)),!r)throw new Error("Failed to create script");const c=r.id,v=e.value.stage.type;M(),await y(),setTimeout(()=>{q(c,v)},K)},q=(l,r)=>{r==="form"&&n.push({name:"formEditor",params:{id:l}}),r==="hook"&&n.push({name:"hookEditor",params:{id:l}}),r==="script"&&n.push({name:"scriptEditor",params:{id:l}}),r==="job"&&n.push({name:"jobEditor",params:{id:l}})};return(l,r)=>(d(),L(Z,null,[o(t(T),{vertical:"",style:{padding:"40px 120px"}},{default:a(()=>[o(t(Ue),null,{default:a(()=>[p("Home")]),_:1}),o(We,{onUpdateFilter:F}),o(Ie,{"empty-title":"There are no scripts","entity-name":"scripts",description:"",table:f.value,loading:t(i),title:"","create-button-text":"Create new",onCreate:G},{title:a(({payload:c})=>[_("div",Ze,[o(t(Ee),{onClick:v=>q(c.script.id,t(z)(c.script))},{default:a(()=>[p(x(c.script.title),1)]),_:2},1032,["onClick"])])]),file:a(({payload:c})=>[_("div",et,[o(t(A),null,{default:a(()=>[p(x(c.script.file),1)]),_:2},1024)])]),trigger:a(({payload:c})=>[o(t(De),{color:"default"},{default:a(()=>[_("div",tt,x(t(Qe)(c.script)),1)]),_:2},1024)]),_:1},8,["table","loading"])]),_:1}),o(Ye,{open:C.value,state:e.value,onClose:M,onChooseType:oe,onNextStep:se,onPreviousStep:le,onCreateStage:pe,onUpdateName:ne,onUpdateFile:ie},null,8,["open","state"])],64))}});const Ht=Q(at,[["__scopeId","data-v-8e101fc7"]]);export{Ht as default};
//# sourceMappingURL=Stages.9f30fd1c.js.map
