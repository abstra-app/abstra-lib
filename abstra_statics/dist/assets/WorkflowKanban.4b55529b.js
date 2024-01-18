var ye=Object.defineProperty;var ve=(a,t,n)=>t in a?ye(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var B=(a,t,n)=>(ve(a,typeof t!="symbol"?t+"":t,n),n);import{t as ie}from"./ant-design.6cf394a0.js";import{f as o,eG as ue,e$ as he,r as N,G as ce,E as be,o as ke,K as Se,d as U,b as l,ev as m,w as s,bq as C,eC as A,eD as b,u as e,v as J,c as u,aq as y,ex as x,cK as de,bg as pe,eH as ee,e as $,cC as E,bO as W,bH as we,ad as F,cB as j,a as Ce,co as xe,dm as te,ck as Ae}from"./outputWidgets.21bbcff1.js";import{a as V}from"./asyncComputed.e9b58baf.js";import{s as Oe}from"./metadata.ba632c3e.js";import{C as Ie}from"./icons.8c1a3aa6.js";import{A as q}from"./index.b0197876.js";import{r as De,f as Pe}from"./index.179e1961.js";import{F as Re}from"./index.bdbaff08.js";import{T as Te,A as $e}from"./Timeline.3293c465.js";import{A as fe}from"./index.5f3d8c72.js";import{A as ge}from"./index.cf01b44a.js";import{A as ae,a as ne}from"./Title.cfd1fb62.js";import{D as Ee,A as Fe}from"./index.14bf763f.js";import{A as L,C as M}from"./CollapsePanel.b9b7d46f.js";import{A as je}from"./Link.58aec639.js";import{_ as Ne}from"./SaveButton.vue_vue_type_script_setup_true_lang.5b3c1326.js";import{A as Ve}from"./Text.192b7616.js";import{F as _e}from"./Form.a94c2c06.js";import{A as z}from"./FormItem.72c7e0f5.js";import{W as qe}from"./workspaces.27f437ce.js";import{S as ze}from"./scripts.82c5495b.js";import{C as Ue}from"./Card.a84a71ef.js";import{E as Be}from"./ExpandOutlined.24c79d4d.js";import"./index.1d5cbc1f.js";import"./Modal.69a3e3bf.js";import"./index.a954b8aa.js";import"./isNumeric.75337b1e.js";import"./hasIn.e0cb731c.js";import"./record.9f045685.js";import"./pubsub.8056e5e5.js";import"./url.35859e56.js";import"./TabPane.66ca4919.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="4c8d9aeb-a60a-48c3-a9a6-531e6b87832e",a._sentryDebugIdIdentifier="sentry-dbid-4c8d9aeb-a60a-48c3-a9a6-531e6b87832e")}catch{}})();var We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 010 17.6z"}}]},name:"play-square",theme:"filled"};const Je=We;function Le(a,t){return De(1,arguments),Pe(a,Date.now(),t)}function se(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable}))),r.forEach(function(d){Me(a,d,n[d])})}return a}function Me(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var H=function(t,n){var r=se({},t,n.attrs);return o(ue,se({},r,{icon:he}),null)};H.displayName="EyeOutlined";H.inheritAttrs=!1;const He=H;function re(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable}))),r.forEach(function(d){Ke(a,d,n[d])})}return a}function Ke(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var K=function(t,n){var r=re({},t,n.attrs);return o(ue,re({},r,{icon:Je}),null)};K.displayName="PlaySquareFilled";K.inheritAttrs=!1;const le=K;function Ge(a){switch(a.status){case"waiting":return{color:"blue",text:"Waiting"};case"running":return{color:"processing",text:"Running"};case"finished":return{color:"success",text:"Success"};case"failed":return{color:"error",text:"Failed"};case"abandoned":return{color:"warning",text:"Abandoned"}}}function Qe(){const a=N({state:"closed"});function t(){a.value={state:"closed"}}function n(){a.value={state:"visualizations"}}function r(c,i){a.value={state:"stage-run",stageRun:i}}const d=ce(()=>"stageRun"in a.value?a.value.stageRun:null);return{closeDrawer:t,openVisualizationEditor:n,inspectStageRun:r,drawerState:a,selectedStageRunForDrawer:d}}function Xe({getKanbanData:a,storage:t,getWorkspace:n}){const r=t!=null?t:localStorage;function d(){const f=r.getItem("kanban-selected-stage-ids");if(f)try{return JSON.parse(f)}catch{return[]}else return[]}const c=be(d()),i=V(async()=>{try{const f=await a(c.value);return r.setItem("kanban-selected-stage-ids",JSON.stringify(c.value)),f}catch{return r.setItem("kanban-selected-stage-ids",JSON.stringify([])),{columns:[],next_stage_options:[]}}finally{c.value=d()}}),O=V(()=>n());async function k(f,v){f?c.value=[...c.value.slice(0,v),f]:c.value=c.value.slice(0,v),await i.refetch()}function R(f,v){var I;const g=(I=f.stages)==null?void 0:I.find(_=>_.id===f.selected_stage.id);if((g==null?void 0:g.type)==="form"){const _=(v==null?void 0:v.status)==="waiting"?{"abstra-run-id":v.id}:{};return{path:`/${g.path}`,query:_}}else return null}let D=null;function S(){ke(()=>{D=setInterval(()=>{i.refetch()},1e3)}),Se(()=>{D&&clearInterval(D)})}const w=ce(()=>{var v,g,I;const f=(g=(v=i.result.value)==null?void 0:v.columns)!=null?g:[];return(I=f[f.length-1])==null?void 0:I.selected_stage});return{kanbanAsyncComputed:i,selectedStageIds:c,setNewSelectedStageId:k,workspaceAsyncComputed:O,launchLink:R,lastSelectedStage:w,init:S}}async function Ye(a){return(await fetch("/_editor/api/kanban",{method:"POST",body:JSON.stringify({selected_stages_ids:a}),headers:{"Content-Type":"application/json"}})).json()}async function Ze(a){return(await fetch(`/_editor/api/kanban/logs/${a}`)).json()}async function et(a){return(await fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:a}),headers:{"Content-Type":"application/json"}})).json()}const tt={key:0},at={key:1,class:"terminal"},nt=U({__name:"ExecutionInspector",props:{logs:{}},setup(a){return(t,n)=>t.logs.length===0?(l(),m("span",tt)):(l(),m("div",at,[o(e(q),{vertical:""},{default:s(()=>[(l(!0),m(C,null,A(t.logs,r=>(l(),m("pre",{key:r.executionId,class:"log-text"},b(r.payload.text),1))),128))]),_:1})]))}});const st=J(nt,[["__scopeId","data-v-6f310ebb"]]),rt={key:1},lt=["onClick"],ot=U({__name:"StageRunInspector",props:{stageRun:{}},emits:["close"],setup(a,{emit:t}){const n=a,{result:r,loading:d}=V(()=>{var i;return Ze((i=n.stageRun)==null?void 0:i.id)}),c=(i,O)=>{i.stopPropagation(),et(O),t("close")};return(i,O)=>(l(),u(e(fe),{open:"",title:"Stage Run Inspector",size:"large",onClose:O[0]||(O[0]=k=>t("close"))},{extra:s(()=>[o(e(ae),null,{default:s(()=>[o(e(ge),{style:{"font-weight":"600"}},{default:s(()=>{var k;return[y(b((k=i.stageRun)==null?void 0:k.status),1)]}),_:1}),y(" "+b(e(Le)(new Date(i.stageRun.created_at),{addSuffix:!0})),1)]),_:1})]),default:s(()=>{var k,R,D;return[(k=i.stageRun)!=null&&k.assignee?(l(),u(e(ae),{key:0},{default:s(()=>{var S;return[y(" Assignee: "+b((S=i.stageRun)==null?void 0:S.assignee),1)]}),_:1})):x("",!0),((R=i.stageRun)==null?void 0:R.content)&&((D=i.stageRun)==null?void 0:D.content.length)>0?(l(),m("div",rt,[o(e(ne),{level:4},{default:s(()=>[y("Current data")]),_:1}),o(e(Fe),{size:"small",column:1},{default:s(()=>{var S;return[(l(!0),m(C,null,A((S=i.stageRun)==null?void 0:S.content,w=>(l(),u(e(Ee),{key:w.key,label:w.key},{default:s(()=>[o(e(de),{"tree-data":e(ie)(w.value)},null,8,["tree-data"])]),_:2},1032,["label"]))),128))]}),_:1})])):x("",!0),o(e(ne),{level:4,style:{"margin-bottom":"30px"}},{default:s(()=>[y(" Thread history ")]),_:1}),e(d)?(l(),u(e(pe),{key:2})):e(r)?(l(),u(e(Te),{key:3},{default:s(()=>[(l(!0),m(C,null,A(e(r),({stage:S,stage_run:w,logs:f})=>(l(),u(e($e),{key:w.id},{default:s(()=>[o(e(M),{ghost:"","expand-icon-position":"end"},{default:s(()=>[o(e(L),{class:"panel"},{header:s(()=>[o(e(q),{align:"center",gap:15},{default:s(()=>[o(ee,{path:e(Oe)(S.type)},null,8,["path"]),y(" "+b(S.title),1)]),_:2},1024)]),extra:s(()=>[$("span",{onClick:v=>c(v,w.id)},[o(e(q),{gap:"small"},{default:s(()=>[o(ee,{path:e(Ie),width:"22"},null,8,["path"]),o(e(je),null,{default:s(()=>[y("Fork")]),_:1})]),_:1})],8,lt)]),default:s(()=>[$("span",null,"Data: "+b(w.data),1),o(st,{logs:f},null,8,["logs"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):x("",!0)]}),_:1}))}});const it=J(ot,[["__scopeId","data-v-3c0457a1"]]),ut=[{value:"text",label:"Text"},{value:"image",label:"Image"},{value:"table",label:"Table"},{value:"progress-bar",label:"Progress Bar"}];class oe{static async get(){return(await fetch("/_editor/api/visualizations")).json()}static async put(t){const n=await fetch("/_editor/api/visualizations",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return Object.freeze(n.json())}}function ct(a,t){const n=a.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(a[r].name!==t[r].name||a[r].type!==t[r].type)return!1;return!0}function T(a,t){var n;return{...a,id:(n=t==null?void 0:t.toString())!=null?n:Math.random().toString(36).slice(2)}}class G{constructor(t){B(this,"initialItems");B(this,"_items");this.initialItems=t.map((n,r)=>T(n,r)),this._items=N(t.map((n,r)=>T(n,r)))}get items(){return this._items.value}hasChanges(){return!ct(this.initialItems,this.items)}async save(){const t=await oe.put(this.items);this.initialItems=t.map((n,r)=>T(n,r)),this._items.value=t.map((n,r)=>T(n,r))}static async get(){const t=await oe.get();return new G(t)}add(){this.items.push(T({name:"New var",type:"text"}))}remove(t){const n=this.items.findIndex(r=>r.id===t);n!==-1&&this.items.splice(n,1)}}const dt=U({__name:"VisualizationEditor",setup(a){const{result:t,loading:n}=V(()=>G.get());return(r,d)=>(l(),u(e(fe),{open:"",title:"Visualization settings"},{extra:s(()=>[e(t)?(l(),u(Ne,{key:0,model:e(t),disabled:!e(t).hasChanges()},null,8,["model","disabled"])):x("",!0)]),default:s(()=>[e(n)||!e(t)?(l(),u(e(pe),{key:0})):(l(),u(e(E),{key:1,direction:"vertical",style:{width:"100%"}},{default:s(()=>[o(e(W),{onClick:d[0]||(d[0]=c=>e(t).add())},{default:s(()=>[y("Add")]),_:1}),o(e(M),{bordered:!1},{default:s(()=>[(l(!0),m(C,null,A(e(t).items,c=>(l(),u(e(L),{key:c.id},{header:s(()=>[c.name?(l(),u(e(Ve),{key:0,strong:!0},{default:s(()=>[y(b(c.name),1)]),_:2},1024)):x("",!0)]),extra:s(()=>[o(e(W),{danger:"",onClick:i=>e(t).remove(c.id)},{default:s(()=>[y(" Remove ")]),_:2},1032,["onClick"])]),default:s(()=>[o(e(_e),{layout:"vertical"},{default:s(()=>[o(e(z),{label:"Property name"},{default:s(()=>[o(e(we),{value:c.name,"onUpdate:value":i=>c.name=i},null,8,["value","onUpdate:value"])]),_:2},1024),o(e(z),null,{default:s(()=>[o(e(F),{value:c.type,"onUpdate:value":i=>c.type=i,label:"Visualization type"},{default:s(()=>[(l(!0),m(C,null,A(e(ut),i=>(l(),u(e(j),{key:i.value,value:i.value},{default:s(()=>[y(b(i.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))]),_:1}))}}),me=["waiting","running","finished","failed"];function pt(){const a=N([...me]),t=N("");return{filterStatus:a,filterSearch:t}}const ft={class:"stages-container"},gt={class:"stages-content"},_t={style:{"max-height":"200px","overflow-y":"hidden"}},mt=["onClick"],yt=U({__name:"WorkflowKanban",setup(a){const t=async(v,g,I)=>{v.stopPropagation();const _=await ze.get(g);!_||await _.test(I)},{kanbanAsyncComputed:n,launchLink:r,setNewSelectedStageId:d,lastSelectedStage:c,init:i}=Xe({getKanbanData:Ye,getWorkspace:()=>qe.get()}),{filterSearch:O,filterStatus:k}=pt(),{closeDrawer:R,inspectStageRun:D,openVisualizationEditor:S,drawerState:w,selectedStageRunForDrawer:f}=Qe();return i(),(v,g)=>{const I=Ce("router-link");return l(),m(C,null,[o(e(q),{vertical:"",style:{height:"100%"}},{default:s(()=>[o(e(M),{ghost:""},{default:s(()=>[o(e(L),{header:"Filters"},{default:s(()=>[o(e(_e),null,{default:s(()=>[o(e(z),{label:"Search"},{default:s(()=>[o(e(xe),{value:e(O),"onUpdate:value":g[0]||(g[0]=_=>te(O)?O.value=_:null),placeholder:"Search",style:{width:"400px"}},null,8,["value"])]),_:1}),o(e(z),{label:"Status"},{default:s(()=>[o(e(F),{value:e(k),"onUpdate:value":g[1]||(g[1]=_=>te(k)?k.value=_:null),mode:"multiple",style:{width:"400px"}},{default:s(()=>[(l(!0),m(C,null,A(e(me),_=>(l(),u(e(j),{key:_,value:_},{default:s(()=>[y(b(e(Ge)({status:_}).text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),$("div",ft,[$("div",gt,[o(e(E),{align:"start"},{default:s(()=>{var _,Q,X;return[(l(!0),m(C,null,A((Q=(_=e(n).result.value)==null?void 0:_.columns)!=null?Q:[],(p,Y)=>(l(),u(e(E),{key:Y,direction:"vertical"},{default:s(()=>[o(e(F),{style:{width:"100%","min-width":"200px"},"allow-clear":"",value:p.selected_stage.id,"onUpdate:value":h=>e(d)(h,Y)},{default:s(()=>[(l(!0),m(C,null,A(p.stages,h=>(l(),u(e(j),{key:h.id,value:h.id},{default:s(()=>[y(b(h.title),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"]),p.selected_stage.id?(l(),u(e(E),{key:0,direction:"vertical",style:{width:"100%"}},{default:s(()=>[(l(!0),m(C,null,A(p.stage_run_cards,h=>{var Z;return l(),u(e(Ue),{key:h.id,size:"small",style:{"max-width":"250px",cursor:"pointer"},"body-style":{display:((Z=h.content)==null?void 0:Z.length)>0?"block":"none"},onClick:P=>e(D)(p,h)},{title:s(()=>[o(e(ge),null,{default:s(()=>[y(b(h.status),1)]),_:2},1024)]),default:s(()=>[$("div",_t,[(l(!0),m(C,null,A(h.content,P=>(l(),u(e(de),{key:P.key,"tree-data":e(ie)(P.value)},null,8,["tree-data"]))),128))]),y(" "+b(h.assignee),1)]),actions:s(()=>[e(r)(p,h)?(l(),u(I,{key:0,to:e(r)(p,h),target:"_blank",onClick:g[2]||(g[2]=P=>P.stopPropagation())},{default:s(()=>[o(e(le))]),_:2},1032,["to"])):x("",!0),p.selected_stage.type==="script"?(l(),m("span",{key:1,onClick:P=>t(P,p.selected_stage.id,h.id)},[o(e(le))],8,mt)):x("",!0)]),extra:s(()=>[o(e(Be),{onClick:P=>e(D)(p,h)},null,8,["onClick"])]),_:2},1032,["body-style","onClick"])}),128)),p.stage_run_cards.length===0?(l(),u(e(Ae),{key:0})):x("",!0),p.selected_stage.can_be_started&&e(r)(p)!==null?(l(),u(I,{key:1,target:"_blank",to:e(r)(p)},{default:s(()=>[o(e(W),{style:{width:"100%"}},{default:s(()=>[y(" Start ")]),_:1})]),_:2},1032,["to"])):x("",!0)]),_:2},1024)):x("",!0)]),_:2},1024))),128)),e(n).result.value&&e(n).result.value.next_stage_options.length>0?(l(),u(e(F),{key:(X=e(c))==null?void 0:X.id,style:{width:"100%","min-width":"200px"},"allow-clear":"","onUpdate:value":g[3]||(g[3]=p=>e(d)(p,e(n).result.value.columns.length))},{default:s(()=>[(l(!0),m(C,null,A(e(n).result.value.next_stage_options,p=>(l(),u(e(j),{key:p.id,value:p.id},{default:s(()=>[y(b(p.title),1)]),_:2},1032,["value"]))),128))]),_:1})):x("",!0)]}),_:1})])])]),_:1}),e(w).state==="stage-run"&&e(f)?(l(),u(it,{key:0,"stage-run":e(f),onClose:e(R)},null,8,["stage-run","onClose"])):e(w).state==="visualizations"?(l(),u(dt,{key:1,onClose:e(R)},null,8,["onClose"])):x("",!0),o(e(Re),{onClick:e(S)},{icon:s(()=>[o(e(He))]),_:1},8,["onClick"])],64)}}});const Xt=J(yt,[["__scopeId","data-v-6c203be0"]]);export{Xt as default};
//# sourceMappingURL=WorkflowKanban.4b55529b.js.map
