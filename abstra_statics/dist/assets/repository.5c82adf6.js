import{f as n,eG as ge,r as oe,H as ie,F as ye,d as U,b as s,c as u,w as t,ev as v,eC as O,ar as y,eD as b,u as e,cN as me,a$ as $,cF as B,v as Y,ex as h,bv as ve,eK as ue,e as M,eJ as V,b3 as he,cn as ce,eE as ke,eF as be,o as Se,L as we,a as Ae,ae as j,dm as Re,cE as z,bV as ne}from"./outputWidgets.9a751704.js";import{a as de}from"./asyncComputed.c0b7f526.js";import{A as xe,s as H}from"./api.3ed9328f.js";import{t as Ce}from"./ant-design.d5cba7d2.js";import{A as J}from"./Text.0538649f.js";import"./index.24643c9a.js";import{A as C}from"./index.6edb660d.js";import{r as Ie,t as De}from"./icons.52647ede.js";import{A as pe}from"./index.b69d7ab2.js";import{f as Fe}from"./index.9b7844f2.js";import{A as se}from"./Paragraph.ee49e077.js";import{A as q}from"./Title.9671cb18.js";import"./index.2608a00b.js";import{T as Oe,A as $e}from"./Timeline.e6c6c7ca.js";import{A as fe,C as _e}from"./CollapsePanel.c7020b99.js";import{A as Pe}from"./Link.76792a23.js";import{A as Te}from"./index.120795b6.js";import{A as Ee}from"./index.2dbefe32.js";import{A as Ne}from"./contracts.generated.c779fa28.js";import"./workspaces.3409a8a6.js";import{S as Le}from"./scripts.f0b00021.js";import"./envVars.f2043939.js";import{F as Ke,A as Ve}from"./Form.b9d05841.js";import{E as qe}from"./ExpandOutlined.8e78e137.js";import{C as Be}from"./Card.84115cfb.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[a]="2216e808-b38a-4ae5-943c-0ab52255e36d",l._sentryDebugIdIdentifier="sentry-dbid-2216e808-b38a-4ae5-943c-0ab52255e36d")}catch{}})();var Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 010 17.6z"}}]},name:"play-square",theme:"filled"};const Ue=Me;function le(l){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?Object(arguments[a]):{},r=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(_){return Object.getOwnPropertyDescriptor(o,_).enumerable}))),r.forEach(function(_){je(l,_,o[_])})}return l}function je(l,a,o){return a in l?Object.defineProperty(l,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[a]=o,l}var Z=function(a,o){var r=le({},a,o.attrs);return n(ge,le({},r,{icon:Ue}),null)};Z.displayName="PlaySquareFilled";Z.inheritAttrs=!1;const re=Z;function Q(l){switch(l.status){case"waiting":return{color:"blue",text:"Waiting"};case"running":return{color:"processing",text:"Running"};case"finished":return{color:"success",text:"Success"};case"failed":return{color:"error",text:"Failed"};case"abandoned":return{color:"warning",text:"Abandoned"}}}function ze(){const l=oe({state:"closed"});function a(){l.value={state:"closed"}}function o(){l.value={state:"visualizations"}}function r(P,S){l.value={state:"stage-run",stageRun:S}}const _=ie(()=>"stageRun"in l.value?l.value.stageRun:null);return{closeDrawer:a,openVisualizationEditor:o,inspectStageRun:r,drawerState:l,selectedStageRunForDrawer:_}}const G="kanban-selected-stage-ids",L=10;function Ge({kanbanRepository:l,storage:a,filterFactory:o}){const r=ye([]),_=de(async()=>{try{return await l.getData({selection:r.value,filter:o()})}catch{return r.value=[],await a.set(G,[]),{columns:[],next_stage_options:[]}}});function P(c){const i=c.selected_stage.id,f=r.value.find(A=>A.stage_id===i);return f!=null&&f.limit?f.limit<c.total_count:!1}async function S(c){var f;const i=r.value.find(A=>A.stage_id===c);i&&(i.limit=((f=i.limit)!=null?f:0)+L,await _.refetch())}async function p(c){const i=r.value.find(f=>f.stage_id===c);i&&i.limit&&i.limit>L&&(i.limit-=L,await _.refetch())}async function w(){const c=await a.get(G)||[];r.value=c.map(i=>({stage_id:i,limit:L,offset:0}))}async function m(c,i){c?r.value=[...r.value.slice(0,i),{stage_id:c,limit:L,offset:0}]:r.value=r.value.slice(0,i),await a.set(G,r.value.map(f=>f.stage_id)),await _.refetch()}function T(c,i){var R;const f=(R=c.stages)==null?void 0:R.find(E=>E.id===c.selected_stage.id);if((f==null?void 0:f.type)!=="form")return null;const A=(i==null?void 0:i.status)==="waiting"?{[xe]:i.id}:{};return{path:`/${f.path}`,query:A}}let D=null;const k=async()=>{await w(),_.refetch(),D=setInterval(()=>{_.refetch()},1e3)},I=()=>{D&&clearInterval(D)},F=ie(()=>{var i,f,A;const c=(f=(i=_.result.value)==null?void 0:i.columns)!=null?f:[];return(A=c[c.length-1])==null?void 0:A.selected_stage});return{kanbanAsyncComputed:_,selection:r,seeMore:S,hasPagination:P,seeLess:p,setNewSelectedStageId:m,launchLink:T,lastSelectedStage:F,setup:k,tearDown:I}}const W=U({__name:"StageRunData",props:{data:{}},setup(l){return(a,o)=>(s(),u(e(B),{direction:"vertical",style:{"max-height":"200px",overflow:"hidden"}},{default:t(()=>[(s(!0),v($,null,O(a.data,r=>(s(),v("div",{key:r.key},[n(e(J),{strong:""},{default:t(()=>[y(b(r.key),1)]),_:2},1024),n(e(me),{"tree-data":e(Ce)(r.value)},null,8,["tree-data"])]))),128))]),_:1}))}}),He={key:0},Je={key:1,class:"terminal"},We=U({__name:"ExecutionInspector",props:{logs:{}},setup(l){return(a,o)=>a.logs.length===0?(s(),v("span",He)):(s(),v("div",Je,[n(e(C),{vertical:""},{default:t(()=>[(s(!0),v($,null,O(a.logs,r=>(s(),v("pre",{key:r.executionId,class:"log-text"},b(r.payload.text),1))),128))]),_:1})]))}});const Ye=Y(We,[["__scopeId","data-v-032cbeba"]]),Ze=l=>(ke("data-v-e10d3de6"),l=l(),be(),l),Qe={key:1},Xe={key:1},et=Ze(()=>M("span",null,"[Deleted Stage]",-1)),tt=["onClick"],at=U({__name:"StageRunInspector",props:{stageRun:{},kanbanRepository:{},stageRunRepository:{}},emits:["close"],setup(l,{emit:a}){const o=l;function r(p){return Object.entries(p).map(([w,m])=>({key:w,value:m,type:typeof m}))}const{result:_,loading:P}=de(()=>{var p;return o.kanbanRepository.getLogs((p=o.stageRun)==null?void 0:p.id)}),S=(p,w)=>{var m;p.stopPropagation(),(m=o.stageRunRepository)==null||m.fork(w),a("close")};return(p,w)=>(s(),u(e(Ee),{open:"",title:"Thread details",size:"large",onClose:w[0]||(w[0]=m=>a("close"))},{extra:t(()=>[n(e(se),null,{default:t(()=>[n(e(pe),{style:{"font-weight":"600"}},{default:t(()=>{var m;return[y(b(e(Q)({status:(m=p.stageRun)==null?void 0:m.status}).text),1)]}),_:1}),y(" "+b(e(Fe)(new Date(p.stageRun.created_at),{addSuffix:!0})),1)]),_:1})]),default:t(()=>{var m,T,D;return[(m=p.stageRun)!=null&&m.assignee?(s(),u(e(se),{key:0},{default:t(()=>{var k;return[y(" Assignee: "+b((k=p.stageRun)==null?void 0:k.assignee),1)]}),_:1})):h("",!0),((T=p.stageRun)==null?void 0:T.content)&&((D=p.stageRun)==null?void 0:D.content.length)>0?(s(),v("div",Qe,[n(e(q),{level:4},{default:t(()=>[y("Current data")]),_:1}),n(W,{data:p.stageRun.content},null,8,["data"])])):h("",!0),n(e(q),{level:4,style:{"margin-bottom":"30px"}},{default:t(()=>[y(" Timeline ")]),_:1}),e(P)?(s(),u(e(ve),{key:2})):e(_)?(s(),u(e(Oe),{key:3},{default:t(()=>[(s(!0),v($,null,O(e(_),({stage:k,stage_run:I,logs:F})=>(s(),u(e($e),{key:I.id},{default:t(()=>[n(e(_e),{ghost:"","expand-icon-position":"end"},{default:t(()=>[n(e(fe),{class:"panel"},ue({header:t(()=>[k?(s(),u(e(C),{key:0,align:"center",gap:15},{default:t(()=>[n(V,{path:e(H)(k.type)},null,8,["path"]),F.length?(s(),v("span",Xe,b(k.title),1)):(s(),u(e(he),{key:0,placement:"right",title:"No logs"},{default:t(()=>[y(b(k.title),1)]),_:2},1024))]),_:2},1024)):(s(),u(e(C),{key:1,align:"center",gap:15},{default:t(()=>[n(V,{path:e(De)},null,8,["path"]),et]),_:1}))]),default:t(()=>[r(I.data).length||F.length?(s(),u(e(C),{key:0,vertical:""},{default:t(()=>[r(I.data).length?(s(),u(e(C),{key:0,gap:0,vertical:""},{default:t(()=>[n(e(q),{level:5},{default:t(()=>[y(" Output data ")]),_:1}),n(W,{data:r(I.data)},null,8,["data"])]),_:2},1024)):h("",!0),F.length?(s(),u(e(C),{key:1,vertical:"",gap:0},{default:t(()=>[n(e(Te)),n(e(q),{level:5},{default:t(()=>[y(" Logs ")]),_:1}),n(Ye,{logs:F},null,8,["logs"])]),_:2},1024)):h("",!0)]),_:2},1024)):(s(),u(e(ce),{key:1,description:"No logs"}))]),_:2},[p.stageRunRepository&&k?{name:"extra",fn:t(()=>[M("span",{onClick:c=>S(c,I.id)},[n(e(C),{gap:"small"},{default:t(()=>[n(V,{path:e(Ie),width:"22"},null,8,["path"]),n(e(Pe),null,{default:t(()=>[y("Fork")]),_:1})]),_:1})],8,tt)]),key:"0"}:void 0]),1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):h("",!0)]}),_:1}))}});const nt=Y(at,[["__scopeId","data-v-e10d3de6"]]),K="Show All",st=[K,...Ne];function lt(){const l=oe(K);return{filterStatus:l,filterFactory:()=>l.value==K?{}:{status:l.value},labelOption:r=>r==K?K:Q({status:r}).text}}const rt={style:{width:"100%",padding:"20px"}},ot={class:"stages-container"},it={class:"stages-content"},ut=["onClick"],ct=U({__name:"Kanban",props:{storage:{},kanbanRepository:{},stageRunRepository:{}},setup(l){const a=l,o=async(A,R,E)=>{A.stopPropagation();const x=await Le.get(R);!x||await x.run(E)},{filterFactory:r,filterStatus:_,labelOption:P}=lt(),{kanbanAsyncComputed:S,launchLink:p,setNewSelectedStageId:w,lastSelectedStage:m,setup:T,tearDown:D,seeMore:k,hasPagination:I}=Ge({kanbanRepository:a.kanbanRepository,storage:a.storage,filterFactory:r});Se(T),we(D);const{closeDrawer:F,inspectStageRun:c,drawerState:i,selectedStageRunForDrawer:f}=ze();return(A,R)=>{const E=Ae("router-link");return s(),v("div",rt,[n(e(C),{vertical:"",style:{height:"100%"}},{default:t(()=>[n(e(_e),{ghost:""},{default:t(()=>[n(e(fe),{header:"Filters"},{default:t(()=>[n(e(Ke),null,{default:t(()=>[n(e(Ve),{label:"Status"},{default:t(()=>[n(e(j),{value:e(_),"onUpdate:value":R[0]||(R[0]=x=>Re(_)?_.value=x:null),style:{width:"300px"}},{default:t(()=>[(s(!0),v($,null,O(e(st),x=>(s(),u(e(z),{key:x,value:x},{default:t(()=>[y(b(e(P)(x)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),M("div",ot,[M("div",it,[n(e(B),{align:"start"},{default:t(()=>{var x,X,ee;return[(s(!0),v($,null,O((X=(x=e(S).result.value)==null?void 0:x.columns)!=null?X:[],(d,te)=>(s(),u(e(B),{key:te,direction:"vertical"},{default:t(()=>[n(e(j),{style:{width:"250px"},"allow-clear":"",value:d.selected_stage.id,"onUpdate:value":g=>e(w)(g,te)},{default:t(()=>[(s(!0),v($,null,O(d.stages,g=>(s(),u(e(z),{key:g.id,value:g.id},{default:t(()=>[n(e(C),{gap:"5"},{default:t(()=>[n(V,{path:e(H)(g.type),style:{"flex-shrink":"0"}},null,8,["path"]),n(e(J),{ellipsis:""},{default:t(()=>[y(b(g.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"]),d.selected_stage.id?(s(),u(e(B),{key:0,direction:"vertical",style:{width:"100%"}},{default:t(()=>[(s(!0),v($,null,O(d.stage_run_cards,g=>{var ae;return s(),u(e(Be),{key:g.id,size:"small",style:{"max-width":"250px",cursor:"pointer"},"body-style":{display:((ae=g.content)==null?void 0:ae.length)>0?"block":"none"},onClick:N=>e(c)(d,g)},ue({title:t(()=>[n(e(pe),null,{default:t(()=>[y(b(e(Q)({status:g.status}).text),1)]),_:2},1024)]),default:t(()=>[n(W,{data:g.content},null,8,["data"]),y(" "+b(g.assignee),1)]),extra:t(()=>[n(e(qe),{onClick:N=>e(c)(d,g)},null,8,["onClick"])]),_:2},[g.status==="waiting"?{name:"actions",fn:t(()=>[e(p)(d,g)?(s(),u(E,{key:0,to:e(p)(d,g),target:"_blank",onClick:R[1]||(R[1]=N=>N.stopPropagation())},{default:t(()=>[n(e(re))]),_:2},1032,["to"])):h("",!0),d.selected_stage.type==="script"?(s(),v("span",{key:1,onClick:N=>o(N,d.selected_stage.id,g.id)},[n(e(re))],8,ut)):h("",!0)]),key:"0"}:void 0]),1032,["body-style","onClick"])}),128)),d.stage_run_cards.length===0?(s(),u(e(ce),{key:0})):h("",!0),e(I)(d)?(s(),u(e(ne),{key:1,style:{width:"100%"},onClick:g=>e(k)(d.selected_stage.id)},{default:t(()=>[y("See more")]),_:2},1032,["onClick"])):h("",!0),d.selected_stage.can_be_started&&e(p)(d)!==null?(s(),u(E,{key:2,target:"_blank",to:e(p)(d)},{default:t(()=>[n(e(ne),{style:{width:"100%"}},{default:t(()=>[y(" Start ")]),_:1})]),_:2},1032,["to"])):h("",!0)]),_:2},1024)):h("",!0)]),_:2},1024))),128)),e(S).result.value&&e(S).result.value.next_stage_options.length>0?(s(),u(e(j),{key:(ee=e(m))==null?void 0:ee.id,style:{width:"100%","min-width":"200px"},"allow-clear":"","onUpdate:value":R[2]||(R[2]=d=>e(w)(d,e(S).result.value.columns.length))},{default:t(()=>[(s(!0),v($,null,O(e(S).result.value.next_stage_options,d=>(s(),u(e(z),{key:d.id,value:d.id},{default:t(()=>[n(e(C),{gap:"middle"},{default:t(()=>[n(V,{path:e(H)(d.type)},null,8,["path"]),n(e(J),null,{default:t(()=>[y(b(d.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})):h("",!0)]}),_:1})])])]),_:1}),e(i).state==="stage-run"&&e(f)?(s(),u(nt,{key:0,"kanban-repository":a.kanbanRepository,"stage-run":e(f),"stage-run-repository":a.stageRunRepository,onClose:e(F)},null,8,["kanban-repository","stage-run","stage-run-repository","onClose"])):h("",!0)])}}});const Nt=Y(ct,[["__scopeId","data-v-2a074c8a"]]);class Lt{constructor(a,o=localStorage){this.contextKey=a,this.storage=o}makeKey(a){return`${this.contextKey}:${a}`}async get(a){const o=this.storage.getItem(this.makeKey(a));return o?JSON.parse(o):null}async set(a,o){this.storage.setItem(this.makeKey(a),JSON.stringify(o))}}export{Nt as K,Lt as L};
//# sourceMappingURL=repository.5c82adf6.js.map
