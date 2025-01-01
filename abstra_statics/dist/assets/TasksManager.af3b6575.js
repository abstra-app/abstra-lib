import{d as E,f as v,o as n,c as u,w as t,b as a,u as e,dj as r,bO as Y,Y as h,eb as b,db as q,aG as d,e9 as k,d4 as H,de as p,aS as C,d7 as Q,S as T,a0 as R,X as W,ah as Z,bT as L,el as x,eC as B,F as ee,cA as te,cB as O,bL as ae,cG as se,cN as le,em as ne,en as de,a as oe}from"./index.5a533bac.js";import{T as re,L as ue}from"./tasksController.82265214.js";import{t as ie}from"./ant-design.9c819bc1.js";import{F as P}from"./PhArrowSquareOut.vue.0a71b286.js";import{_ as G}from"./AbstraButton.vue_vue_type_script_setup_true_lang.1f9992de.js";import{A as ce}from"./index.372282b5.js";import{C as pe}from"./Card.9493204f.js";import{A as F,C as fe}from"./CollapsePanel.56aa9b9f.js";import"./index.7f24cbc2.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[_]="87a2ffe5-97c9-406c-95a2-76513f40d1f1",i._sentryDebugIdIdentifier="sentry-dbid-87a2ffe5-97c9-406c-95a2-76513f40d1f1")}catch{}})();const ge=E({__name:"TaskCard",props:{task:{},checked:{type:Boolean},type:{},map:{}},emits:["change"],setup(i,{emit:_}){const c=i,S=(l,o)=>{let y=`/_editor/${l}/${o}`;window.open(`${y}`,"_blank")},w=v(()=>c.task.targetStageTitle.length<15?c.task.targetStageTitle:c.task.targetStageTitle.slice(0,15)+"..."),A=v(()=>c.task.sourceStageTitle.length<15?c.task.sourceStageTitle:c.task.sourceStageTitle.slice(0,15)+"...");return(l,o)=>(n(),u(e(pe),{size:"small"},{default:t(()=>[a(e(r),{justify:"space-between",align:"center"},{default:t(()=>[a(e(r),{align:"start",gap:"large"},{default:t(()=>[a(e(Y),{checked:l.checked,disabled:l.type==="sent",onChange:o[0]||(o[0]=y=>_("change",l.task.id))},null,8,["checked","disabled"]),a(e(r),{vertical:""},{default:t(()=>[(n(!0),h(C,null,b(l.task.payload,(y,I)=>(n(),u(e(r),{key:I},{default:t(()=>[a(e(q),{class:"center"},{default:t(()=>[d(k(I)+":",1)]),_:2},1024),a(e(H),{"tree-data":e(ie)(y),selectable:!1,style:{padding:"0"}},{title:t(({title:f})=>[a(e(p),{type:"secondary",style:{"max-width":"200px"},ellipsis:""},{default:t(()=>[d(k(f),1)]),_:2},1024)]),_:2},1032,["tree-data"])]),_:2},1024))),128))]),_:1})]),_:1}),a(e(r),{align:"center"},{default:t(()=>[a(e(Q),{color:l.map.get(l.task.type)},{default:t(()=>[d(k(l.task.type),1)]),_:1},8,["color"]),a(e(ce),{type:"vertical"}),l.type==="received"&&l.task.sourceStageTitle?(n(),u(e(r),{key:0,align:"center"},{default:t(()=>[a(e(p),{type:"secondary"},{default:t(()=>[d("Sent by: ")]),_:1}),a(G,{type:"link",onClick:o[1]||(o[1]=y=>S(l.task.sourceStageType,l.task.created.byStageId))},{default:t(()=>[d(k(A.value)+" ",1),a(e(P),{size:16})]),_:1})]),_:1})):T("",!0),l.type==="received"&&!l.task.sourceStageTitle?(n(),u(e(r),{key:1,align:"center"},{default:t(()=>[a(e(p),{type:"secondary"},{default:t(()=>[d("Created manually")]),_:1})]),_:1})):T("",!0),l.type==="sent"?(n(),u(e(r),{key:2,align:"center"},{default:t(()=>[a(e(p),{type:"secondary"},{default:t(()=>[d("Sent to: ")]),_:1}),a(G,{type:"link",onClick:o[2]||(o[2]=y=>S(l.task.targetStageType,l.task.targetStageId))},{default:t(()=>[d(k(w.value)+" ",1),a(e(P),{size:16})]),_:1})]),_:1})):T("",!0)]),_:1})]),_:1})]),_:1}))}});const N=R(ge,[["__scopeId","data-v-e1b117c5"]]),ke=i=>(ne("data-v-f5e9bb62"),i=i(),de(),i),ye=ke(()=>oe("code",null,"send_task",-1)),_e=E({__name:"TasksManager",props:{stageId:{}},emits:["refetch-tasks"],setup(i,{emit:_}){const c=i,S=new ue,w=g=>{g(),_("refetch-tasks",c.stageId)},{setup:A,tearDown:l,state:o,createTask:y,startCreatingTask:I,creatingTaskState:f,cancelCreatingTask:J,isPayloadValid:V,collapseValue:$,getPossibleActions:K,checkTask:M}=re({api:S,poll:!1,stageId:c.stageId,stages:null}),z=v(()=>o.tasks.filter(g=>g.status==="pending")),U=v(()=>o.tasks.filter(g=>g.status==="completed")),j=v(()=>{var g;return(g=o.sentTasks)!=null?g:[]}),X=v(()=>K());return W(()=>A()),Z(()=>l()),(g,m)=>(n(),u(e(r),{vertical:"",gap:"small",class:"tasks-manager"},{default:t(()=>[a(e(r),{justify:"end",gap:"small"},{default:t(()=>[(n(!0),h(C,null,b(X.value,s=>(n(),u(e(L),{key:s.name,onClick:D=>w(s.handler)},{default:t(()=>[d(k(s.label),1)]),_:2},1032,["onClick"]))),128)),a(e(L),{type:"primary",onClick:x(e(I),["stop"])},{default:t(()=>[d("Add Task")]),_:1},8,["onClick"])]),_:1}),a(e(fe),{"active-key":e($),"onUpdate:activeKey":m[0]||(m[0]=s=>ee($)?$.value=s:null),ghost:""},{default:t(()=>[a(e(F),{key:"pending"},{header:t(()=>[a(e(r),{justify:"space-between"},{default:t(()=>[a(e(p),null,{default:t(()=>[d("Pending tasks : "+k(z.value.length),1)]),_:1})]),_:1})]),default:t(()=>[a(e(r),{vertical:"",gap:"small"},{default:t(()=>[a(B,null,{default:t(()=>[(n(!0),h(C,null,b(z.value,s=>(n(),u(N,{key:s.id+"-pending",task:s,type:"received",map:e(o).colorMap,checked:!!s.checked,onChange:D=>e(M)(s.id)},null,8,["task","map","checked","onChange"]))),128))]),_:1})]),_:1})]),_:1}),a(e(F),{key:"completed"},{header:t(()=>[a(e(p),null,{default:t(()=>[d("Completed tasks : "+k(U.value.length),1)]),_:1})]),default:t(()=>[a(e(r),{vertical:"",gap:"small"},{default:t(()=>[a(B,null,{default:t(()=>[(n(!0),h(C,null,b(U.value,s=>(n(),u(N,{key:s.id+"-completed",task:s,checked:!!s.checked,type:"received",map:e(o).colorMap,onChange:D=>e(M)(s.id)},null,8,["task","checked","map","onChange"]))),128))]),_:1})]),_:1})]),_:1}),a(e(F),{key:"sent"},{header:t(()=>[a(e(p),null,{default:t(()=>[d("Sent tasks : "+k(j.value.length),1)]),_:1})]),default:t(()=>[a(e(r),{vertical:"",gap:"small"},{default:t(()=>[a(B,null,{default:t(()=>[(n(!0),h(C,null,b(j.value,s=>(n(),u(N,{key:s.id+"-sent",task:s,checked:!!s.checked,type:"sent",map:e(o).colorMap,onChange:D=>e(M)(s.id)},null,8,["task","checked","map","onChange"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["active-key"]),a(e(le),{open:e(f).state==="creating","ok-button-props":{disabled:!e(V)},onCancel:e(J),onOk:e(y)},{title:t(()=>[a(e(p),null,{default:t(()=>[d("Add Task")]),_:1})]),default:t(()=>[a(e(te),{layout:"vertical"},{default:t(()=>[a(e(O),{label:"Task type"},{default:t(()=>[e(f).state==="creating"?(n(),u(e(ae),{key:0,value:e(f).name,"onUpdate:value":m[1]||(m[1]=s=>e(f).name=s),"auto-size":""},null,8,["value"])):T("",!0)]),_:1}),a(e(O),{label:"Task data"},{default:t(()=>[e(f).state==="creating"?(n(),u(e(se),{key:0,value:e(f).payloadCode,"onUpdate:value":m[2]||(m[2]=s=>e(f).payloadCode=s),"auto-size":""},null,8,["value"])):T("",!0)]),_:1})]),_:1}),e(V)?T("",!0):(n(),u(e(p),{key:0,type:"danger"},{default:t(()=>[d("Invalid JSON")]),_:1}))]),_:1},8,["open","ok-button-props","onCancel","onOk"]),a(e(p),{type:"secondary"},{default:t(()=>[d(" Use "),ye,d(" on previous stages to send tasks to this stage. ")]),_:1})]),_:1}))}});const Ae=R(_e,[["__scopeId","data-v-f5e9bb62"]]);export{Ae as T};
//# sourceMappingURL=TasksManager.af3b6575.js.map
