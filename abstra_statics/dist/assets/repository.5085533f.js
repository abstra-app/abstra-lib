import{f as o,eG as pe,r as Q,H as X,F as ge,d as $,b as l,ev as S,w as a,aD as P,eC as x,eD as b,u as e,v as M,c,ar as h,cM as fe,cE as T,ex as A,bg as _e,eK as ee,e as V,eJ as B,aH as me,cm as te,eE as ye,eF as ve,a as ae,cD as ne,ae as se,bG as W,eA as he,o as ke,L as Se,dm as we}from"./outputWidgets.ee4fd219.js";import{a as oe}from"./asyncComputed.b47f90dd.js";import"./workspaces.4f9e1c5b.js";import{S as be}from"./scripts.29025b5c.js";import"./envVars.07affbc0.js";import{A as Ae,s as re}from"./api.b08d3c34.js";import{A as Re}from"./contracts.generated.3dd77fc3.js";import{A as R}from"./index.580227f7.js";import{r as Ie,t as Ce}from"./icons.afbfd4dc.js";import{t as De}from"./ant-design.2a616d0e.js";import{A as H}from"./Text.b44c9ef3.js";import"./index.82eb4ed6.js";import{A as z}from"./index.84ae02fd.js";import{f as $e}from"./index.c1746f3f.js";import{A as Y}from"./Paragraph.34077046.js";import{A as q}from"./Title.edd6aa8a.js";import"./index.f7f5a10f.js";import{T as Oe,A as Pe}from"./Timeline.be9b2d8f.js";import{A as le,C as ie}from"./CollapsePanel.306b5f36.js";import{A as xe}from"./Link.48c20aa2.js";import{A as ue}from"./index.90f108ad.js";import{A as Fe}from"./index.bd779e86.js";import{S as Ee}from"./SyncOutlined.5f11b506.js";import{E as Te}from"./ExpandOutlined.ed4b8df2.js";import{C as Ue}from"./Card.1af54d8c.js";import{D as Le}from"./DownOutlined.4234f1ba.js";import"./index.bdf86908.js";import{F as Ne,A as Ke}from"./Form.90a58ebe.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="fd263623-f17e-46e7-b8a5-71f05e28e928",n._sentryDebugIdIdentifier="sentry-dbid-fd263623-f17e-46e7-b8a5-71f05e28e928")}catch{}})();var qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 010 17.6z"}}]},name:"play-square",theme:"filled"};const Ve=qe;function Z(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),r.forEach(function(s){Be(n,s,i[s])})}return n}function Be(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}var G=function(t,i){var r=Z({},t,i.attrs);return o(pe,Z({},r,{icon:Ve}),null)};G.displayName="PlaySquareFilled";G.inheritAttrs=!1;const He=G;function ze(){const n=Q({state:"closed"});function t(){n.value={state:"closed"}}function i(){n.value={state:"visualizations"}}function r(u,_){n.value={state:"stage-run",stageRun:_}}const s=X(()=>"stageRun"in n.value?n.value.stageRun:null);return{closeDrawer:t,openVisualizationEditor:i,inspectStageRun:r,drawerState:n,selectedStageRunForDrawer:s}}const U="kanban-selected-stage-ids",L=10,je=({kanbanRepository:n,storage:t,filterFactory:i,router:r})=>{const s=ge([]),u=oe(async()=>{try{const f=await n.getData({selection:s.value,filter:i()}),g=await t.get(U)||[];for(const m of f.not_found_stages)t.set(U,g.filter(v=>v!==m)),s.value=s.value.filter(v=>v.stage_id!==m);return f}catch{return s.value=[],await t.set(U,[]),{columns:[],next_stage_options:[]}}});function _(f){const g=f.selected_stage.id,m=s.value.find(v=>v.stage_id===g);return m!=null&&m.limit?m.limit<f.total_count:!1}async function p(f){var m;const g=s.value.find(v=>v.stage_id===f.selected_stage.id);g&&(g.limit=((m=g.limit)!=null?m:0)+L,await u.refetch())}async function d(f){const g=s.value.find(m=>m.stage_id===f);g&&g.limit&&g.limit>L&&(g.limit-=L,await u.refetch())}async function y(){const f=await t.get(U)||[];s.value=f.map(g=>({stage_id:g,limit:L,offset:0}))}async function I(f,g){f?s.value=[...s.value.slice(0,g),{stage_id:f.id,limit:L,offset:0},...s.value.slice(g+1)]:s.value=[...s.value.slice(0,g),...s.value.slice(g+1)],await t.set(U,s.value.map(m=>m.stage_id)),await u.refetch()}async function F(f){await I(f,s.value.length)}let k=null;return{kanbanAsyncComputed:u,selection:s,increasePagination:p,hasPagination:_,seeLess:d,setStage:I,addStage:F,cardActionHandler:async(f,g)=>{const m=f.selected_stage,v=g.id;if(m.type==="script"){const w=await be.get(m.id);if(!w)return;await w.run(v)}m.type==="form"&&r.push({path:`/${m.path}`,query:v?{[Ae]:v}:{}})},setup:async()=>{await y(),u.refetch(),k=setInterval(()=>{u.refetch()},1e3)},tearDown:()=>{k&&clearInterval(k)}}};function J(n){switch(n.status){case"waiting":return{color:"blue",text:"Waiting"};case"running":return{color:"processing",text:"Running"};case"finished":return{color:"success",text:"Success"};case"failed":return{color:"error",text:"Failed"};case"abandoned":return{color:"warning",text:"Abandoned"}}}const N="Show All",Me=[N,...Re];function Ge(){const n=Q(N);return{filterStatus:n,filterFactory:()=>n.value==N?{}:{status:n.value},labelOption:r=>r==N?N:J({status:r}).text}}const Je={key:0},We={key:1,class:"terminal"},Ye=$({__name:"ExecutionInspector",props:{logs:{}},setup(n){return(t,i)=>t.logs.length===0?(l(),S("span",Je)):(l(),S("div",We,[o(e(R),{vertical:""},{default:a(()=>[(l(!0),S(P,null,x(t.logs,r=>(l(),S("pre",{key:r.executionId,class:"log-text"},b(r.payload.text),1))),128))]),_:1})]))}});const Ze=M(Ye,[["__scopeId","data-v-4e71a195"]]),j=$({__name:"StageRunData",props:{data:{}},setup(n){return(t,i)=>(l(),c(e(T),{direction:"vertical",style:{overflow:"hidden"}},{default:a(()=>[(l(!0),S(P,null,x(t.data,r=>(l(),S("div",{key:r.key},[o(e(H),{strong:""},{default:a(()=>[h(b(r.key),1)]),_:2},1024),o(e(fe),{"tree-data":e(De)(r.value),selectable:!1},null,8,["tree-data"])]))),128))]),_:1}))}}),Qe=n=>(ye("data-v-68c9e478"),n=n(),ve(),n),Xe={key:1},et={key:1},tt=Qe(()=>V("span",null,"[Deleted Stage]",-1)),at=["onClick"],nt=$({__name:"StageRunInspector",props:{stageRun:{},kanbanRepository:{},stageRunRepository:{}},emits:["close"],setup(n,{emit:t}){const i=n;function r(p){return Object.entries(p).map(([d,y])=>({key:d,value:y,type:typeof y}))}const{result:s,loading:u}=oe(()=>{var p;return i.kanbanRepository.getLogs((p=i.stageRun)==null?void 0:p.id)}),_=(p,d)=>{var y;p.stopPropagation(),(y=i.stageRunRepository)==null||y.fork(d),t("close")};return(p,d)=>(l(),c(e(Fe),{open:"",title:"Thread details",size:"large",onClose:d[0]||(d[0]=y=>t("close"))},{extra:a(()=>[o(e(Y),null,{default:a(()=>[o(e(z),{style:{"font-weight":"600"}},{default:a(()=>{var y;return[h(b(e(J)({status:(y=p.stageRun)==null?void 0:y.status}).text),1)]}),_:1}),h(" "+b(e($e)(new Date(p.stageRun.created_at),{addSuffix:!0})),1)]),_:1})]),default:a(()=>{var y,I,F;return[(y=p.stageRun)!=null&&y.assignee?(l(),c(e(Y),{key:0},{default:a(()=>{var k;return[h(" Assignee: "+b((k=p.stageRun)==null?void 0:k.assignee),1)]}),_:1})):A("",!0),((I=p.stageRun)==null?void 0:I.content)&&((F=p.stageRun)==null?void 0:F.content.length)>0?(l(),S("div",Xe,[o(e(q),{level:4},{default:a(()=>[h("Current data")]),_:1}),o(j,{data:p.stageRun.content},null,8,["data"])])):A("",!0),o(e(q),{level:4,style:{"margin-bottom":"30px"}},{default:a(()=>[h(" Timeline ")]),_:1}),e(u)?(l(),c(e(_e),{key:2})):e(s)?(l(),c(e(Oe),{key:3},{default:a(()=>[(l(!0),S(P,null,x(e(s),({stage:k,stage_run:C,logs:O})=>(l(),c(e(Pe),{key:C.id},{default:a(()=>[o(e(ie),{ghost:"","expand-icon-position":"end"},{default:a(()=>[o(e(le),{class:"panel"},ee({header:a(()=>[k?(l(),c(e(R),{key:0,align:"center",gap:15},{default:a(()=>[o(B,{path:e(re)(k.type)},null,8,["path"]),O.length?(l(),S("span",et,b(k.title),1)):(l(),c(e(me),{key:0,placement:"right",title:"No logs"},{default:a(()=>[h(b(k.title),1)]),_:2},1024))]),_:2},1024)):(l(),c(e(R),{key:1,align:"center",gap:15},{default:a(()=>[o(B,{path:e(Ce)},null,8,["path"]),tt]),_:1}))]),default:a(()=>[r(C.data).length||O.length?(l(),c(e(R),{key:0,vertical:""},{default:a(()=>[r(C.data).length?(l(),c(e(R),{key:0,gap:0,vertical:""},{default:a(()=>[o(e(q),{level:5},{default:a(()=>[h(" Output data ")]),_:1}),o(j,{data:r(C.data)},null,8,["data"])]),_:2},1024)):A("",!0),O.length?(l(),c(e(R),{key:1,vertical:"",gap:0},{default:a(()=>[o(e(ue)),o(e(q),{level:5},{default:a(()=>[h(" Logs ")]),_:1}),o(Ze,{logs:O},null,8,["logs"])]),_:2},1024)):A("",!0)]),_:2},1024)):(l(),c(e(te),{key:1,description:"No logs"}))]),_:2},[p.stageRunRepository&&k?{name:"extra",fn:a(()=>[V("span",{onClick:K=>_(K,C.id)},[o(e(R),{gap:"small"},{default:a(()=>[o(B,{path:e(Ie),width:"22"},null,8,["path"]),o(e(xe),null,{default:a(()=>[h("Fork")]),_:1})]),_:1})],8,at)]),key:"0"}:void 0]),1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):A("",!0)]}),_:1}))}});const st=M(nt,[["__scopeId","data-v-68c9e478"]]),ot=$({__name:"Card",props:{stage:{},card:{}},emits:["inspect","action"],setup(n){const t=n,i=X(()=>J({status:t.card.status}).text);return(r,s)=>{var u;return l(),c(e(Ue),{size:"small",style:{width:"275px",cursor:"pointer"},"body-style":{display:((u=r.card.content)==null?void 0:u.length)>0?"block":"none"}},ee({title:a(()=>[o(e(z),null,{default:a(()=>[h(b(i.value)+" ",1),i.value==="Running"?(l(),c(e(Ee),{key:0,spin:!0,style:{"margin-left":"4px"}})):A("",!0)]),_:1})]),default:a(()=>[o(e(T),{direction:"vertical",style:{"max-height":"300px",width:"100%",overflow:"hidden"},onClick:s[0]||(s[0]=_=>r.$emit("inspect"))},{default:a(()=>[o(j,{data:r.card.content,disabled:!0},null,8,["data"]),r.card.assignee?(l(),c(e(z),{key:0},{default:a(()=>[h(b(r.card.assignee),1)]),_:1})):A("",!0)]),_:1})]),extra:a(()=>[o(e(Te),{onClick:s[2]||(s[2]=_=>r.$emit("inspect"))})]),_:2},[r.card.status==="waiting"?{name:"actions",fn:a(()=>[o(e(He),{onClick:s[1]||(s[1]=_=>r.$emit("action"))})]),key:"0"}:void 0]),1032,["body-style"])}}}),ce=$({__name:"ColumnHeader",props:{stageOptions:{},stage:{},stageCount:{}},emits:["stageUpdate"],setup(n,{emit:t}){const i=n,r=s=>{const u=i.stageOptions.find(_=>_.id===s);t("stageUpdate",u!=null?u:null)};return(s,u)=>{var p;const _=ae("icon");return l(),c(e(se),{style:{width:"275px"},"allow-clear":"",value:((p=s.stage)==null?void 0:p.id)||"","onUpdate:value":r},{suffixIcon:a(()=>[o(e(H),{type:"secondary",style:{"font-size":"small","margin-right":"2px"}},{default:a(()=>[h(b(s.stageCount),1)]),_:1}),o(e(ue),{type:"vertical"}),o(e(Le))]),default:a(()=>[(l(!0),S(P,null,x(s.stageOptions,d=>(l(),c(e(ne),{key:d.id,value:d.id},{default:a(()=>[o(e(R),{gap:"10",style:{"max-width":"200px"}},{default:a(()=>[o(_,{path:e(re)(d.type),style:{"flex-shrink":"0",width:"24px"}},null,8,["path"]),o(e(H),{ellipsis:"",content:d.title},null,8,["content"])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])}}});class rt{constructor(t){this.column=t}get stage(){return this.column.selected_stage}get launchLink(){return!this.stage.can_be_started||this.stage.type!=="form"?null:{path:`/${this.stage.path}`,query:{}}}}const lt=$({__name:"Column",props:{hasPagination:{type:Boolean},column:{}},emits:["increasePagination","cardInspection","cardAction","stageUpdate"],setup(n,{emit:t}){const i=n,s=new rt(i.column).launchLink;return(u,_)=>{const p=ae("router-link");return l(),c(e(T),{direction:"vertical"},{default:a(()=>[o(ce,{"stage-options":u.column.stages,stage:u.column.selected_stage,"stage-count":u.column.total_count,onStageUpdate:_[0]||(_[0]=d=>t("stageUpdate",d))},null,8,["stage-options","stage","stage-count"]),o(e(T),{direction:"vertical",style:{width:"100%"}},{default:a(()=>[u.column.stage_run_cards.length===0?(l(),c(e(te),{key:0})):A("",!0),(l(!0),S(P,null,x(u.column.stage_run_cards,d=>(l(),c(ot,{key:d.id,stage:u.column.selected_stage,card:d,onInspect:y=>t("cardInspection",d),onAction:y=>t("cardAction",d)},null,8,["stage","card","onInspect","onAction"]))),128)),u.hasPagination?(l(),c(e(W),{key:1,style:{width:"100%"},onClick:_[1]||(_[1]=d=>t("increasePagination"))},{default:a(()=>[h("See more")]),_:1})):A("",!0),e(s)?(l(),c(p,{key:2,target:"_blank",to:e(s)},{default:a(()=>[o(e(W),{style:{width:"100%"}},{default:a(()=>[h(" Start ")]),_:1})]),_:1},8,["to"])):A("",!0)]),_:1})]),_:1})}}}),it=$({__name:"EmptyColumn",props:{stages:{}},emits:["stageUpdate"],setup(n,{emit:t}){const i=r=>{t("stageUpdate",r)};return(r,s)=>(l(),c(e(T),{direction:"vertical"},{default:a(()=>[o(ce,{"stage-options":r.stages,onStageUpdate:i},null,8,["stage-options"])]),_:1}))}}),ut={style:{width:"100%",padding:"20px"}},ct={class:"stages-container"},dt={class:"stages-content"},pt=$({__name:"Kanban",props:{storage:{},kanbanRepository:{},stageRunRepository:{}},setup(n){const t=n,i=he(),{closeDrawer:r,inspectStageRun:s,drawerState:u,selectedStageRunForDrawer:_}=ze(),{filterFactory:p,filterStatus:d,labelOption:y}=Ge(),{kanbanAsyncComputed:I,setStage:F,addStage:k,setup:C,tearDown:O,cardActionHandler:K,increasePagination:f,hasPagination:g}=je({kanbanRepository:t.kanbanRepository,storage:t.storage,filterFactory:p,router:i});return ke(C),Se(O),(m,v)=>(l(),S("div",ut,[o(e(R),{vertical:"",style:{height:"100%"}},{default:a(()=>[o(e(ie),{ghost:""},{default:a(()=>[o(e(le),{header:"Filters"},{default:a(()=>[o(e(Ne),null,{default:a(()=>[o(e(Ke),{label:"Status"},{default:a(()=>[o(e(se),{value:e(d),"onUpdate:value":v[0]||(v[0]=w=>we(d)?d.value=w:null),style:{width:"325px"}},{default:a(()=>[(l(!0),S(P,null,x(e(Me),w=>(l(),c(e(ne),{key:w,value:w},{default:a(()=>[h(b(e(y)(w)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),V("div",ct,[V("div",dt,[o(e(T),{align:"start"},{default:a(()=>{var w;return[(l(!0),S(P,null,x(((w=e(I).result.value)==null?void 0:w.columns)||[],(D,de)=>(l(),c(e(lt),{key:D.selected_stage.id,column:D,"has-pagination":e(g)(D),onIncreasePagination:E=>e(f)(D),onCardInspection:E=>e(s)(D,E),onCardAction:E=>e(K)(D,E),onStageUpdate:E=>e(F)(E,de)},null,8,["column","has-pagination","onIncreasePagination","onCardInspection","onCardAction","onStageUpdate"]))),128)),o(e(it),{stages:e(I).result.value.next_stage_options||[],onStageUpdate:v[1]||(v[1]=D=>e(k)(D))},null,8,["stages"])]}),_:1})])])]),_:1}),e(u).state==="stage-run"&&e(_)?(l(),c(e(st),{key:0,"kanban-repository":t.kanbanRepository,"stage-run":e(_),"stage-run-repository":t.stageRunRepository,onClose:e(r)},null,8,["kanban-repository","stage-run","stage-run-repository","onClose"])):A("",!0)]))}});const Vt=M(pt,[["__scopeId","data-v-f660bc8e"]]);class Bt{constructor(t,i=localStorage){this.contextKey=t,this.storage=i}makeKey(t){return`${this.contextKey}:${t}`}async get(t){const i=this.storage.getItem(this.makeKey(t));return i?JSON.parse(i):null}async set(t,i){this.storage.setItem(this.makeKey(t),JSON.stringify(i))}}export{Vt as K,Bt as L};
//# sourceMappingURL=repository.5085533f.js.map
