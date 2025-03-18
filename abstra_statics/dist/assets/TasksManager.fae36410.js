import{d as L,f as h,o as r,c as p,w as t,b as a,u as e,dh as o,dc as m,aG as d,e9 as g,eC as q,bO as N,d5 as H,S as b,Y as A,eb as I,d9 as Q,d2 as W,aS as D,a0 as P,X as Z,ah as x,bT as M,el as ee,eD as te,F as ae,cy as se,cz as V,bL as le,cE as ne,cL as de,em as re,en as oe,a as ie}from"./index.a1cd2efc.js";import{T as ue,L as pe}from"./tasksController.7a1c55da.js";import{t as ce,a as ke}from"./ant-design.5bba9231.js";import{F as j}from"./PhArrowSquareOut.vue.f1b9b71e.js";import{_ as E}from"./AbstraButton.vue_vue_type_script_setup_true_lang.3240423e.js";import{A as fe}from"./index.50909d0c.js";import{C as ye}from"./Card.9cd25530.js";import{A as ge,C as me}from"./CollapsePanel.fd00845a.js";import"./index.295e11aa.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new Error().stack;v&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[v]="4241e447-6b12-4988-932b-c63cb7e989fb",u._sentryDebugIdIdentifier="sentry-dbid-4241e447-6b12-4988-932b-c63cb7e989fb")}catch{}})();const _e=L({__name:"TaskCard",props:{task:{},checked:{type:Boolean},type:{},map:{}},emits:["change"],setup(u,{emit:v}){const k=u,C=(l,i)=>{let _=`/_editor/${l}/${i}`;window.open(`${_}`,"_blank")},S=h(()=>k.task.targetStageTitle.length<16?k.task.targetStageTitle:k.task.targetStageTitle.slice(0,16)+"..."),$=h(()=>k.task.sourceStageTitle.length<16?k.task.sourceStageTitle:k.task.sourceStageTitle.slice(0,16)+"...");return(l,i)=>(r(),p(e(ye),{size:"small"},{default:t(()=>[a(e(o),{justify:"space-between",vertical:""},{default:t(()=>[a(e(o),{justify:"end",style:{height:"6px"}},{default:t(()=>[a(e(m),{type:"secondary",style:{"font-size":"10px","margin-top":"-5px"}},{default:t(()=>[d(g(e(q)(new Date(l.task.created.at))),1)]),_:1})]),_:1}),a(e(o),{align:"start",justify:"space-between"},{default:t(()=>[a(e(o),{align:"center",gap:"middle"},{default:t(()=>[a(e(N),{checked:l.checked,disabled:l.type==="sent",onChange:i[0]||(i[0]=_=>v("change",l.task.id))},null,8,["checked","disabled"]),a(e(o),{align:"center"},{default:t(()=>[a(e(H),{color:l.map.get(l.task.type)},{default:t(()=>[d(g(l.task.type.length>18?l.task.type.slice(0,18)+"...":l.task.type),1)]),_:1},8,["color"]),a(e(fe),{type:"vertical"}),l.type==="received"&&l.task.sourceStageTitle?(r(),p(e(o),{key:0,align:"center"},{default:t(()=>[a(e(m),{type:"secondary"},{default:t(()=>[d("Sent by: ")]),_:1}),a(E,{type:"link",onClick:i[1]||(i[1]=_=>C(l.task.sourceStageType,l.task.created.byStageId))},{default:t(()=>[d(g($.value)+" ",1),a(e(j),{size:16})]),_:1})]),_:1})):b("",!0),l.type==="received"&&!l.task.sourceStageTitle?(r(),p(e(o),{key:1,align:"center"},{default:t(()=>[a(e(m),{type:"secondary"},{default:t(()=>[d("Created manually")]),_:1})]),_:1})):b("",!0),l.type==="sent"?(r(),p(e(o),{key:2,align:"center"},{default:t(()=>[a(e(m),{type:"secondary"},{default:t(()=>[d("Sent to: ")]),_:1}),a(E,{type:"link",onClick:i[2]||(i[2]=_=>C(l.task.targetStageType,l.task.targetStageId))},{default:t(()=>[d(g(S.value)+" ",1),a(e(j),{size:16})]),_:1})]),_:1})):b("",!0)]),_:1})]),_:1})]),_:1}),a(e(o),{vertical:"",style:{padding:"10px"}},{default:t(()=>[(r(!0),A(D,null,I(l.task.payload,(_,w)=>(r(),p(e(o),{key:w},{default:t(()=>[a(e(Q),{class:"center"},{default:t(()=>[d(g(w)+":",1)]),_:2},1024),a(e(W),{"tree-data":e(ce)(_),selectable:!1,style:{padding:"0"}},{title:t(({title:f})=>[a(e(m),{type:"secondary",style:{"max-width":"200px"},ellipsis:""},{default:t(()=>[d(g(f),1)]),_:2},1024)]),_:2},1032,["tree-data"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}});const ve=P(_e,[["__scopeId","data-v-c67a9853"]]),Te=u=>(re("data-v-d0fd7f73"),u=u(),oe(),u),be=Te(()=>ie("code",null,"send_task",-1)),he=L({__name:"TasksManager",props:{stageId:{}},emits:["refetch-tasks"],setup(u,{emit:v}){const k=u,C=new pe,S=c=>{c(),v("refetch-tasks",k.stageId)},{setup:$,tearDown:l,state:i,createTask:_,startCreatingTask:w,creatingTaskState:f,cancelCreatingTask:U,isPayloadValid:B,collapseValue:z,getPossibleActions:O,checkTask:G,clearAllTasks:R}=ue({api:C,poll:!1,stageId:k.stageId,stages:null}),J=h(()=>O()),K=(c,n)=>{c.stopPropagation();const s=F.value.find(T=>T.key===n);if(!s)return;const y=s.tasks.every(T=>T.checked);s.tasks.forEach(T=>T.checked=!y)};async function X(){await ke("Are you sure you want to clear all tasks and their associated payloads?")&&await R()}const F=h(()=>{var c;return[{key:"pending",title:"Pending tasks",tasks:i.tasks.filter(n=>n.status==="pending"),type:"received"},{key:"completed",title:"Completed tasks",tasks:i.tasks.filter(n=>n.status==="completed"),type:"received"},{key:"sent",title:"Sent tasks",tasks:(c=i.sentTasks)!=null?c:[],type:"sent"}]}),Y=h(()=>{let c={pending:!1,completed:!1,sent:!1};return F.value.forEach(n=>{n.tasks.length!==0&&(c[n.key]=n.tasks.every(s=>s.checked))}),c});return Z(()=>$()),x(()=>l()),(c,n)=>(r(),p(e(o),{vertical:"",gap:"small",class:"tasks-manager"},{default:t(()=>[a(e(o),{justify:"space-between",align:"center"},{default:t(()=>[a(e(o),null,{default:t(()=>[a(e(M),{type:"link",onClick:X},{default:t(()=>[d("Clear all")]),_:1})]),_:1}),a(e(o),{justify:"end",gap:"small"},{default:t(()=>[(r(!0),A(D,null,I(J.value,s=>(r(),p(e(M),{key:s.name,onClick:y=>S(s.handler)},{default:t(()=>[d(g(s.label),1)]),_:2},1032,["onClick"]))),128)),a(e(M),{type:"primary",onClick:ee(e(w),["stop"])},{default:t(()=>[d("Add Task")]),_:1},8,["onClick"])]),_:1})]),_:1}),a(e(me),{"active-key":e(z),"onUpdate:activeKey":n[0]||(n[0]=s=>ae(z)?z.value=s:null),ghost:""},{default:t(()=>[(r(!0),A(D,null,I(F.value,s=>(r(),p(e(ge),{key:s.key},{header:t(()=>[a(e(o),{gap:"small"},{default:t(()=>[a(e(N),{checked:Y.value[s.key],disabled:s.tasks.length===0||s.key==="sent",onClick:y=>K(y,s.key)},null,8,["checked","disabled","onClick"]),a(e(m),null,{default:t(()=>[d(g(s.title)+" : "+g(s.tasks.length),1)]),_:2},1024)]),_:2},1024)]),default:t(()=>[a(e(o),{vertical:"",gap:"small"},{default:t(()=>[a(te,null,{default:t(()=>[(r(!0),A(D,null,I(s.tasks,y=>(r(),p(ve,{key:y.id+"-"+s.key,task:y,type:s.type,map:e(i).colorMap,checked:!!y.checked,onChange:T=>e(G)(y.id)},null,8,["task","type","map","checked","onChange"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["active-key"]),a(e(de),{open:e(f).state==="creating","ok-button-props":{disabled:!e(B)},onCancel:e(U),onOk:n[3]||(n[3]=s=>S(e(_)))},{title:t(()=>[a(e(m),null,{default:t(()=>[d("Add Task")]),_:1})]),default:t(()=>[a(e(se),{layout:"vertical"},{default:t(()=>[a(e(V),{label:"Task type"},{default:t(()=>[e(f).state==="creating"?(r(),p(e(le),{key:0,value:e(f).name,"onUpdate:value":n[1]||(n[1]=s=>e(f).name=s),"auto-size":""},null,8,["value"])):b("",!0)]),_:1}),a(e(V),{label:"Task data"},{default:t(()=>[e(f).state==="creating"?(r(),p(e(ne),{key:0,value:e(f).payloadCode,"onUpdate:value":n[2]||(n[2]=s=>e(f).payloadCode=s),"auto-size":""},null,8,["value"])):b("",!0)]),_:1})]),_:1}),e(B)?b("",!0):(r(),p(e(m),{key:0,type:"danger"},{default:t(()=>[d("Invalid JSON")]),_:1}))]),_:1},8,["open","ok-button-props","onCancel"]),a(e(m),{type:"secondary"},{default:t(()=>[d(" Use "),be,d(" on previous stages to send tasks to this stage. ")]),_:1})]),_:1}))}});const Me=P(he,[["__scopeId","data-v-d0fd7f73"]]);export{Me as T};
//# sourceMappingURL=TasksManager.fae36410.js.map
