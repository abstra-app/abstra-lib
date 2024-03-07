import{d as I,H as b,b as f,ev as R,f as s,w as a,u as t,ar as u,aj as fe,cA as $,ai as N,e as g,c as y,eJ as U,ex as S,eE as de,eF as me,v as Z,bz as G,aH as ve,eD as x,bG as V,ae as ye,eC as _e,cD as ge,aD as ee,eO as he,eA as be,r as W}from"./outputWidgets.ee4fd219.js";import{F as j}from"./forms.b4dbc163.js";import{H,J as P}from"./jobs.5ef1180e.js";import{W as te}from"./workspaces.4f9e1c5b.js";import{a as B}from"./asyncComputed.b47f90dd.js";import{S as M}from"./scripts.29025b5c.js";import"./envVars.07affbc0.js";import{f as ke,h as we,g as Fe,j as Se,e as Te,i as Ce}from"./icons.afbfd4dc.js";import{_ as X}from"./DocsButton.vue_vue_type_script_setup_true_lang.cd4d2fa3.js";import{T as Ae}from"./Typography.b53f36a8.js";import{A as C}from"./index.580227f7.js";import{A as D}from"./Paragraph.34077046.js";import{v as ae,b as xe}from"./validations.84790181.js";import{A as E,F as se}from"./Form.90a58ebe.js";import{A}from"./Text.b44c9ef3.js";import{A as Ie}from"./index.820d4fa5.js";import{M as $e}from"./Modal.ee61af07.js";import{C as Ne}from"./CrudView.2d601ee8.js";import{a as K}from"./ant-design.2a616d0e.js";import{c as Ue}from"./string.d0685345.js";import{A as De}from"./Title.edd6aa8a.js";import{A as Ee}from"./Link.48c20aa2.js";import{A as je}from"./index.84ae02fd.js";import"./record.50301909.js";import"./pubsub.22947304.js";import"./runnerData.3844741f.js";import"./url.d89d7447.js";import"./Base.02042580.js";import"./hasIn.9457a6f6.js";import"./router.b6e30f42.js";import"./popupNotifcation.e5bcb615.js";import"./SyncOutlined.5f11b506.js";import"./index.8c5c3a06.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="ef12686a-fce8-4896-b76e-87e771db4a8a",o._sentryDebugIdIdentifier="sentry-dbid-ef12686a-fce8-4896-b76e-87e771db4a8a")}catch{}})();const O=o=>(de("data-v-94df32a7"),o=o(),me(),o),He={key:0,class:"choose-type"},Pe={class:"option-content"},Be=O(()=>g("span",null,"Forms",-1)),Oe={class:"option-content"},Je=O(()=>g("span",null,"Hooks",-1)),Le={class:"option-content"},Ve=O(()=>g("span",null,"Scripts",-1)),ze={class:"option-content"},Me=O(()=>g("span",null,"Jobs",-1)),Re=I({__name:"ChooseScriptType",props:{state:{}},emits:["choose-type"],setup(o,{emit:i}){const n=o,p=b(()=>n.state.type==="form"?"#fff":void 0),_=b(()=>n.state.type==="hook"?"#fff":void 0),k=b(()=>n.state.type==="script"?"#fff":void 0),m=b(()=>n.state.type==="job"?"#fff":void 0),F=h=>i("choose-type",h);return(h,w)=>h.state.state==="choosing-type"?(f(),R("div",He,[s(t(C),{vertical:"",gap:"30"},{default:a(()=>[s(t(Ae),null,{default:a(()=>[u("Choose your script type")]),_:1}),s(t(fe),{value:h.state.type,"onUpdate:value":[w[0]||(w[0]=d=>h.state.type=d),F],size:"large","button-style":"solid"},{default:a(()=>[s(t(C),{gap:"24",vertical:""},{default:a(()=>[s(t(C),{gap:"24"},{default:a(()=>[s(t($),{placement:"left",title:"Forms"},{content:a(()=>[s(t(D),null,{default:a(()=>[u(" Use to collect user input via interaction with a form interface ")]),_:1}),s(X,{path:"forms/overview"})]),default:a(()=>[s(t(N),{value:"form",class:"option"},{default:a(()=>[g("div",Pe,[(f(),y(U,{key:p.value,path:t(ke),fill:p.value},null,8,["path","fill"])),Be])]),_:1})]),_:1}),s(t($),{placement:"right",title:"Hooks"},{content:a(()=>[s(t(D),null,{default:a(()=>[u("Use to build endpoints triggered by HTTP requests")]),_:1}),s(X,{path:"forms/overview"})]),default:a(()=>[s(t(N),{value:"hook",class:"option"},{default:a(()=>[g("div",Oe,[(f(),y(U,{key:_.value,path:t(we),fill:_.value},null,8,["path","fill"])),Je])]),_:1})]),_:1})]),_:1}),s(t(C),{gap:"24"},{default:a(()=>[s(t($),{placement:"left",title:"Scripts"},{content:a(()=>[s(t(D),null,{default:a(()=>[u(" Use to write plain Python scripts ")]),_:1})]),default:a(()=>[s(t(N),{value:"script",class:"option"},{default:a(()=>[g("div",Le,[(f(),y(U,{key:k.value,path:t(Fe),fill:k.value},null,8,["path","fill"])),Ve])]),_:1})]),_:1}),s(t($),{placement:"right",title:"Jobs"},{content:a(()=>[s(t(D),null,{default:a(()=>[u(" Use to schedule your script execution periodically ")]),_:1})]),default:a(()=>[s(t(N),{value:"job",class:"option"},{default:a(()=>[g("div",ze,[(f(),y(U,{key:m.value,path:t(Se),fill:m.value},null,8,["path","fill"])),Me])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})])):S("",!0)}});const Ye=Z(Re,[["__scopeId","data-v-94df32a7"]]),qe=g("br",null,null,-1),Ge=I({__name:"NewScript",props:{state:{}},emits:["update-name","update-file"],setup(o,{emit:i}){const n=o,{result:p}=B(()=>fetch("/_editor/api/workspace/root").then(d=>d.text())),_=b(()=>n.state.state!=="creating"?"":`${p.value}/${n.state.stage.filename}`),k=b(()=>n.state.state!=="creating"?"":`${n.state.stage.type[0].toUpperCase()+n.state.stage.type.slice(1)} title`),m=d=>{i("update-name",d);const e=xe(d);i("update-file",e),h()},{result:F,refetch:h}=B(()=>te.checkFile(n.state.stage.filename)),w=b(()=>ae(n.state.stage.filename));return(d,e)=>(f(),y(t(se),{layout:"vertical"},{default:a(()=>{var T;return[s(t(E),{label:k.value,required:!0},{default:a(()=>[s(t(G),{value:d.state.stage.title,"onUpdate:value":m},null,8,["value"])]),_:1},8,["label"]),s(t(E),{label:"Generated file",required:!0,"validate-status":w.value.valid?"success":"error",help:w.value.valid?void 0:w.value.reason},{default:a(()=>[s(t(ve),{placement:"right"},{title:a(()=>[u(" You can change this later ")]),default:a(()=>[s(t(G),{value:d.state.stage.filename,"onUpdate:value":e[0]||(e[0]=J=>d.state.stage.filename=J),disabled:!0},null,8,["value"])]),_:1})]),_:1},8,["validate-status","help"]),s(t(E),null,{default:a(()=>[s(t(A),null,{default:a(()=>[u(" Your script will be generated at: ")]),_:1}),qe,s(t(A),{code:""},{default:a(()=>[u(x(_.value),1)]),_:1})]),_:1}),(T=t(F))!=null&&T.exists?(f(),y(t(Ie),{key:0,type:"warning"},{message:a(()=>[s(t(A),null,{default:a(()=>[s(t(A),{strong:""},{default:a(()=>[u("Warning:")]),_:1}),u(" This file already exists. It will be used by more than one script. ")]),_:1})]),_:1})):S("",!0)]}),_:1}))}}),We=I({__name:"CreateModal",props:{open:{type:Boolean},state:{}},emits:["close","choose-type","next-step","previous-step","create-script","update-name","update-file"],setup(o,{emit:i}){const n=o,p=e=>i("update-name",e),_=e=>i("update-file",e),k=()=>i("close"),m=e=>i("choose-type",e),F=()=>i("next-step"),h=()=>i("previous-step"),w=()=>i("create-script"),d=b(()=>!(n.state.state!=="creating"||!ae(n.state.stage.filename).valid||!n.state.stage.title));return(e,T)=>(f(),y(t($e),{open:e.open,title:"Create a new script",onCancel:k},{footer:a(()=>[e.state.state==="creating"?(f(),y(t(V),{key:0,onClick:h},{default:a(()=>[u("Previous")]),_:1})):S("",!0),e.state.state==="creating"?(f(),y(t(V),{key:1,type:"primary",disabled:!d.value,onClick:w},{default:a(()=>[u(" Create ")]),_:1},8,["disabled"])):S("",!0),e.state.state==="choosing-type"?(f(),y(t(V),{key:2,type:"primary",disabled:!e.state.type,onClick:F},{default:a(()=>[u(" Next ")]),_:1},8,["disabled"])):S("",!0)]),default:a(()=>[e.state.state==="choosing-type"?(f(),y(Ye,{key:0,state:e.state,onChooseType:m},null,8,["state"])):S("",!0),e.state.state==="creating"?(f(),y(Ge,{key:1,state:e.state,onUpdateName:p,onUpdateFile:_},null,8,["state"])):S("",!0)]),_:1},8,["open"]))}}),Xe=I({__name:"FilterScripts",emits:["update-filter"],setup(o,{emit:i}){const n=[{label:"Forms",value:"form"},{label:"Hooks",value:"hook"},{label:"Scripts",value:"script"},{label:"Jobs",value:"job"}],p=_=>i("update-filter",_);return(_,k)=>(f(),y(t(se),null,{default:a(()=>[s(t(E),{label:"Filter"},{default:a(()=>[s(t(ye),{mode:"multiple",style:{width:"360px"},placeholder:"All","onUpdate:value":p},{default:a(()=>[(f(),R(ee,null,_e(n,m=>s(t(ge),{key:m.value,value:m.value},{default:a(()=>[u(x(m.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),Ke=200,Qe=o=>{if(!o)return[0,0];if(o.length===0)return[0,0];let i=-1/0,n=0;for(const p of o)p.position.x>i&&(i=p.position.x),n+=p.position.y/o.length;return[i+Ke,n]},z=o=>{if(o instanceof j)return"form";if(o instanceof H)return"hook";if(o instanceof P)return"job";if(o instanceof M)return"script";throw new Error("Invalid script type")},Ze=o=>o instanceof j?`/${o.path}`:o instanceof H?`/_hooks/${o.path}`:o instanceof P?`${o.schedule}`:"",et={class:"ellipsis",style:{"max-width":"300px"}},tt={class:"ellipsis",style:{"max-width":"250px"}},at={class:"ellipsis",style:{"max-width":"200px"}},Q=100,st=I({__name:"Scripts",setup(o){he(l=>({"3abf05cc":ue()}));const i=be(),{loading:n,result:p,refetch:_}=B(async()=>Promise.all([j.list(),H.list(),P.list(),M.list()]).then(([l,r,c,v])=>[...l,...r,...c,...v])),{result:k}=B(()=>te.get()),m=W([]),F=l=>{m.value=l},h=b(()=>p.value?m.value.length===0?p.value:p.value.filter(l=>m.value.includes(z(l))):[]),w=l=>{!k.value||k.value.openFile(l)},d=b(()=>{const l=[{name:"Type",align:"left"},{name:"Title",align:"left"},{name:"File",align:"left"},{name:"Trigger",align:"left"},{name:"",align:"right"}],r=h.value;if(!r)return{columns:l,rows:[]};const c=r.map(v=>{const L=Ue(z(v));return{key:v.id,cells:[{type:"tag",text:L},{type:"slot",key:"title",payload:{script:v}},{type:"slot",key:"file",payload:{script:v}},{type:"slot",key:"trigger",payload:{script:v}},{type:"actions",actions:[{icon:Te,label:"Open .py file",onClick:()=>w(v.file)},{icon:Ce,label:"Delete",onClick:()=>pe(v.id)}]}]}});return{columns:l,rows:c}}),e=W({state:"idle"}),T=b(()=>e.value.state==="choosing-type"||e.value.state==="creating"),J=()=>{e.value={state:"choosing-type",type:null}},Y=()=>{e.value={state:"idle"}},oe=l=>{e.value.state==="choosing-type"&&(e.value={state:"choosing-type",type:l})},le=()=>{e.value.state==="choosing-type"&&e.value.type!==null&&(e.value={state:"creating",stage:{type:e.value.type,title:`Untitled ${e.value.type}`,filename:`untitled_${e.value.type}.py`}})},ie=()=>{e.value.state==="creating"&&(e.value={state:"choosing-type",type:e.value.stage.type})},ne=l=>{e.value.state==="creating"&&(e.value.stage.title=l)},re=l=>{e.value.state==="creating"&&(e.value.stage.filename=l)},pe=async l=>{var r,c;if(await K("Are you sure you want to delete this script?")){const v=await K("Do you want to delete the .py file associated with this script?",{okText:"Yes",cancelText:"No"});await((c=(r=p.value)==null?void 0:r.find(L=>L.id===l))==null?void 0:c.delete(v)),await _()}},ue=()=>(Q/1e3).toString()+"s",ce=async()=>{if(e.value.state!=="creating")return;const l=Qe(p.value||[]);let r;if(e.value.stage.type==="form"?r=await j.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="hook"?r=await H.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="job"?r=await P.create(e.value.stage.title,e.value.stage.filename,l):e.value.stage.type==="script"&&(r=await M.create(e.value.stage.title,e.value.stage.filename,l)),!r)throw new Error("Failed to create script");const c=r.id,v=e.value.stage.type;Y(),await _(),setTimeout(()=>{q(c,v)},Q)},q=(l,r)=>{r==="form"&&i.push({name:"formEditor",params:{id:l}}),r==="hook"&&i.push({name:"hookEditor",params:{id:l}}),r==="script"&&i.push({name:"scriptEditor",params:{id:l}}),r==="job"&&i.push({name:"jobEditor",params:{id:l}})};return(l,r)=>(f(),R(ee,null,[s(t(C),{vertical:"",style:{padding:"40px 120px"}},{default:a(()=>[s(t(De),null,{default:a(()=>[u("Home")]),_:1}),s(Xe,{onUpdateFilter:F}),s(Ne,{"empty-title":"There are no scripts","entity-name":"scripts",description:"",table:d.value,loading:t(n),title:"","create-button-text":"Create new",onCreate:J},{title:a(({payload:c})=>[g("div",et,[s(t(Ee),{onClick:v=>q(c.script.id,t(z)(c.script))},{default:a(()=>[u(x(c.script.title),1)]),_:2},1032,["onClick"])])]),file:a(({payload:c})=>[g("div",tt,[s(t(A),null,{default:a(()=>[u(x(c.script.file),1)]),_:2},1024)])]),trigger:a(({payload:c})=>[s(t(je),{color:"default"},{default:a(()=>[g("div",at,x(t(Ze)(c.script)),1)]),_:2},1024)]),_:1},8,["table","loading"])]),_:1}),s(We,{open:T.value,state:e.value,onClose:Y,onChooseType:oe,onNextStep:le,onPreviousStep:ie,onCreateScript:ce,onUpdateName:ne,onUpdateFile:re},null,8,["open","state"])],64))}});const Pt=Z(st,[["__scopeId","data-v-475e9b97"]]);export{Pt as default};
//# sourceMappingURL=Scripts.289b5f57.js.map
