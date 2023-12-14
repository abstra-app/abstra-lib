var oe=Object.defineProperty;var ie=(n,e,a)=>e in n?oe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var $=(n,e,a)=>(ie(n,typeof e!="symbol"?e+"":e,a),a);import{t as de}from"./ant-design.e656dd24.js";import{f as u,eG as ee,f1 as ce,r as F,E as fe,d as q,b as s,c as o,w as l,u as t,aq as g,eD as k,ex as h,ev as b,bq as w,eC as S,bg as pe,cC as R,bO as N,bH as me,ad as D,cB as E,o as ge,K as _e,G as J,a as ye,co as ve,dm as Q,e as T,cK as be,ck as he,v as ke}from"./outputWidgets.396f5ce1.js";import{a as U}from"./asyncComputed.95737324.js";import{W as we}from"./workspaces.784fafc7.js";import{A as te}from"./index.864136d4.js";import{A as ae}from"./index.645b3e28.js";import{A as V,a as Se}from"./Text.4e180dc2.js";import{D as Ce,A as Oe}from"./index.9b40278a.js";import{_ as Ae}from"./SaveButton.vue_vue_type_script_setup_true_lang.7f1f1a60.js";import{A as ne,C as le}from"./CollapsePanel.ed2d1976.js";import{F as re}from"./Form.716e7fa5.js";import{A as I}from"./FormItem.a8de7296.js";import{F as xe}from"./index.e8a1f6be.js";import{C as Pe}from"./Card.a208895c.js";import{E as Re}from"./ExpandOutlined.32511caa.js";import{A as De}from"./index.42fe3563.js";import"./index.b703167a.js";import"./Modal.c02a2840.js";import"./record.1aff3d29.js";import"./pubsub.06faa612.js";import"./url.4e42e1d0.js";import"./isNumeric.75337b1e.js";import"./Base.ee1dde08.js";import"./hasIn.63a13365.js";import"./index.97904ac7.js";import"./index.e0b9f0d4.js";import"./TabPane.1f8c84b2.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="820db582-45cb-4eab-9add-a8f6a951b8f2",n._sentryDebugIdIdentifier="sentry-dbid-820db582-45cb-4eab-9add-a8f6a951b8f2")}catch{}})();var Ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 010 17.6z"}}]},name:"play-square",theme:"filled"};const Fe=Ee;function X(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),r.forEach(function(i){Ie(n,i,a[i])})}return n}function Ie(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var z=function(e,a){var r=X({},e,a.attrs);return u(ee,X({},r,{icon:ce}),null)};z.displayName="EyeOutlined";z.inheritAttrs=!1;const je=z;function Y(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),r.forEach(function(i){$e(n,i,a[i])})}return n}function $e(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var B=function(e,a){var r=Y({},e,a.attrs);return u(ee,Y({},r,{icon:Fe}),null)};B.displayName="PlaySquareFilled";B.inheritAttrs=!1;const Te=B;function Ve(n){switch(n.status){case"waiting":return{color:"blue",text:"Waiting"};case"running":return{color:"processing",text:"Running"};case"finished":return{color:"success",text:"Success"};case"failed":return{color:"error",text:"Failed"};case"abandoned":return{color:"warning",text:"Abandoned"}}}function Ne(){const n=F({state:"closed"});function e(){n.value={state:"closed"}}function a(){n.value={state:"visualizations"}}function r(i,f){n.value={state:"stage-run",stageRun:f}}return{closeDrawer:e,openVisualizationEditor:a,inspectStageRun:r,drawerState:n}}function Ue({getKanbanData:n}){const e=fe([]),a=U(()=>n(e.value)),r=U(()=>we.get());async function i(c,d){c?e.value=[...e.value.slice(0,d),c]:e.value=e.value.slice(0,d),a.refetch()}function f(c,d){var O;const y=(O=c.stages)==null?void 0:O.find(C=>C.id===c.selected_stage.id);if((y==null?void 0:y.type)==="form"){const C=(d==null?void 0:d.status)==="waiting"?{"abstra-run-id":d.id}:{};return{path:`/${y.path}`,query:C}}else return null}return{kanbanAsyncComputed:a,selectedStageIds:e,setNewSelectedStageId:i,workspaceAsyncComputed:r,launchLink:f}}const qe={key:2},ze=q({__name:"StageRunInspector",props:{stageRun:{}},setup(n){return(e,a)=>(s(),o(t(te),{open:"",title:"Stage Run Inspector"},{default:l(()=>{var r,i,f,c;return[u(t(V),null,{default:l(()=>[g(" Status: "),u(t(ae),{style:{"font-weight":"600"}},{default:l(()=>{var d;return[g(k((d=e.stageRun)==null?void 0:d.status),1)]}),_:1})]),_:1}),(r=e.stageRun)!=null&&r.assignee?(s(),o(t(V),{key:0},{default:l(()=>{var d;return[g(" Assignee: "+k((d=e.stageRun)==null?void 0:d.assignee),1)]}),_:1})):h("",!0),(i=e.stageRun)!=null&&i.created_at?(s(),o(t(V),{key:1},{default:l(()=>{var d;return[g(" Created at: "+k((d=e.stageRun)==null?void 0:d.created_at),1)]}),_:1})):h("",!0),((f=e.stageRun)==null?void 0:f.content)&&((c=e.stageRun)==null?void 0:c.content.length)>0?(s(),b("div",qe,[u(t(Oe),{title:"Stored data",size:"small",layout:"vertical",column:1},{default:l(()=>{var d;return[(s(!0),b(w,null,S((d=e.stageRun)==null?void 0:d.content,y=>(s(),o(t(Ce),{key:y.key,label:y.key},{default:l(()=>{var O;return[g(k((O=y.value)!=null?O:"null"),1)]}),_:2},1032,["label"]))),128))]}),_:1})])):h("",!0)]}),_:1}))}}),Be=[{value:"text",label:"Text"},{value:"image",label:"Image"},{value:"table",label:"Table"},{value:"progress-bar",label:"Progress Bar"}];class Z{static async get(){return(await fetch("/_editor/api/visualizations")).json()}static async put(e){const a=await fetch("/_editor/api/visualizations",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return Object.freeze(a.json())}}function We(n,e){const a=n.length;if(a!==e.length)return!1;for(let r=0;r<a;r++)if(n[r].name!==e[r].name||n[r].type!==e[r].type)return!1;return!0}function P(n,e){var a;return{...n,id:(a=e==null?void 0:e.toString())!=null?a:Math.random().toString(36).slice(2)}}class W{constructor(e){$(this,"initialItems");$(this,"_items");this.initialItems=e.map((a,r)=>P(a,r)),this._items=F(e.map((a,r)=>P(a,r)))}get items(){return this._items.value}hasChanges(){return!We(this.initialItems,this.items)}async save(){const e=await Z.put(this.items);this.initialItems=e.map((a,r)=>P(a,r)),this._items.value=e.map((a,r)=>P(a,r))}static async get(){const e=await Z.get();return new W(e)}add(){this.items.push(P({name:"New var",type:"text"}))}remove(e){const a=this.items.findIndex(r=>r.id===e);a!==-1&&this.items.splice(a,1)}}const Me=q({__name:"VisualizationEditor",setup(n){const{result:e,loading:a}=U(()=>W.get());return(r,i)=>(s(),o(t(te),{open:"",title:"Visualization settings"},{extra:l(()=>[t(e)?(s(),o(Ae,{key:0,model:t(e),disabled:!t(e).hasChanges()},null,8,["model","disabled"])):h("",!0)]),default:l(()=>[t(a)||!t(e)?(s(),o(t(pe),{key:0})):(s(),o(t(R),{key:1,direction:"vertical",style:{width:"100%"}},{default:l(()=>[u(t(N),{onClick:i[0]||(i[0]=f=>t(e).add())},{default:l(()=>[g("Add")]),_:1}),u(t(le),{bordered:!1},{default:l(()=>[(s(!0),b(w,null,S(t(e).items,f=>(s(),o(t(ne),{key:f.id},{header:l(()=>[f.name?(s(),o(t(Se),{key:0,strong:!0},{default:l(()=>[g(k(f.name),1)]),_:2},1024)):h("",!0)]),extra:l(()=>[u(t(N),{danger:"",onClick:c=>t(e).remove(f.id)},{default:l(()=>[g(" Remove ")]),_:2},1032,["onClick"])]),default:l(()=>[u(t(re),{layout:"vertical"},{default:l(()=>[u(t(I),{label:"Property name"},{default:l(()=>[u(t(me),{value:f.name,"onUpdate:value":c=>f.name=c},null,8,["value","onUpdate:value"])]),_:2},1024),u(t(I),null,{default:l(()=>[u(t(D),{value:f.type,"onUpdate:value":c=>f.type=c,label:"Visualization type"},{default:l(()=>[(s(!0),b(w,null,S(t(Be),c=>(s(),o(t(E),{key:c.value,value:c.value},{default:l(()=>[g(k(c.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))]),_:1}))}}),se=["waiting","running","finished","failed"];function Le(){const n=F([...se]),e=F("");return{filterStatus:n,filterSearch:e}}async function Ke(n){return(await fetch("/_editor/api/kanban",{method:"POST",body:JSON.stringify({selected_stages_ids:n}),headers:{"Content-Type":"application/json"}})).json()}const Ge={class:"stages-container"},He={class:"stages-content"},Je={style:{"max-height":"200px","overflow-y":"hidden"}},Qe=q({__name:"WorkflowKanban",setup(n){const{kanbanAsyncComputed:e,launchLink:a,setNewSelectedStageId:r}=Ue({getKanbanData:Ke});let i=null;ge(()=>{i=setInterval(()=>{e.refetch()},1e3)}),_e(()=>{i&&clearInterval(i)});const{filterSearch:f,filterStatus:c}=Le(),{closeDrawer:d,inspectStageRun:y,openVisualizationEditor:O,drawerState:C}=Ne(),ue=J(()=>{var v,x,_;const j=(x=(v=e.result.value)==null?void 0:v.columns)!=null?x:[];return(_=j[j.length-1])==null?void 0:_.selected_stage}),M=J(()=>"stageRun"in C.value?C.value.stageRun:null);return(j,v)=>{const x=ye("router-link");return s(),b(w,null,[u(t(De),{vertical:"",style:{height:"100%"}},{default:l(()=>[u(t(le),{ghost:""},{default:l(()=>[u(t(ne),{header:"Filters"},{default:l(()=>[u(t(re),null,{default:l(()=>[u(t(I),{label:"Search"},{default:l(()=>[u(t(ve),{value:t(f),"onUpdate:value":v[0]||(v[0]=_=>Q(f)?f.value=_:null),placeholder:"Search",style:{width:"400px"}},null,8,["value"])]),_:1}),u(t(I),{label:"Status"},{default:l(()=>[u(t(D),{value:t(c),"onUpdate:value":v[1]||(v[1]=_=>Q(c)?c.value=_:null),mode:"multiple",style:{width:"400px"}},{default:l(()=>[(s(!0),b(w,null,S(t(se),_=>(s(),o(t(E),{key:_,value:_},{default:l(()=>[g(k(t(Ve)({status:_}).text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),T("div",Ge,[T("div",He,[u(t(R),{align:"start"},{default:l(()=>{var _,L,K;return[(s(!0),b(w,null,S((L=(_=t(e).result.value)==null?void 0:_.columns)!=null?L:[],(p,G)=>(s(),o(t(R),{key:G,direction:"vertical"},{default:l(()=>[u(t(D),{style:{width:"100%","min-width":"200px"},"allow-clear":"",value:p.selected_stage.id,"onUpdate:value":m=>t(r)(m,G)},{default:l(()=>[(s(!0),b(w,null,S(p.stages,m=>(s(),o(t(E),{key:m.id,value:m.id},{default:l(()=>[g(k(m.title),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"]),p.selected_stage.id?(s(),o(t(R),{key:0,direction:"vertical",style:{width:"100%"}},{default:l(()=>[(s(!0),b(w,null,S(p.stage_run_cards,m=>{var H;return s(),o(t(Pe),{key:m.id,size:"small",style:{"max-width":"250px",cursor:"pointer"},"body-style":{display:((H=m.content)==null?void 0:H.length)>0?"block":"none"},onClick:A=>t(y)(p,m)},{title:l(()=>[u(t(ae),null,{default:l(()=>[g(k(m.status),1)]),_:2},1024)]),default:l(()=>[T("div",Je,[(s(!0),b(w,null,S(m.content,A=>(s(),o(t(be),{key:A.key,"tree-data":t(de)(A.value)},null,8,["tree-data"]))),128))]),g(" "+k(m.assignee),1)]),actions:l(()=>[t(a)(p,m)?(s(),o(x,{key:0,to:t(a)(p,m),target:"_blank",onClick:v[2]||(v[2]=A=>A.stopPropagation())},{default:l(()=>[u(t(Te))]),_:2},1032,["to"])):h("",!0)]),extra:l(()=>[u(t(Re),{onClick:A=>t(y)(p,m)},null,8,["onClick"])]),_:2},1032,["body-style","onClick"])}),128)),p.stage_run_cards.length===0?(s(),o(t(he),{key:0})):h("",!0),p.selected_stage.can_be_started&&t(a)(p)!==null?(s(),o(x,{key:1,target:"_blank",to:t(a)(p)},{default:l(()=>[u(t(N),{style:{width:"100%"}},{default:l(()=>[g(" Start ")]),_:1})]),_:2},1032,["to"])):h("",!0)]),_:2},1024)):h("",!0)]),_:2},1024))),128)),t(e).result.value&&t(e).result.value.next_stage_options.length>0?(s(),o(t(D),{key:(K=ue.value)==null?void 0:K.id,style:{width:"100%","min-width":"200px"},"allow-clear":"","onUpdate:value":v[3]||(v[3]=p=>t(r)(p,t(e).result.value.columns.length))},{default:l(()=>[(s(!0),b(w,null,S(t(e).result.value.next_stage_options,p=>(s(),o(t(E),{key:p.id,value:p.id},{default:l(()=>[g(k(p.title),1)]),_:2},1032,["value"]))),128))]),_:1})):h("",!0)]}),_:1})])])]),_:1}),t(C).state==="stage-run"&&M.value?(s(),o(ze,{key:0,"stage-run":M.value,onClose:t(d)},null,8,["stage-run","onClose"])):t(C).state==="visualizations"?(s(),o(Me,{key:1,onClose:t(d)},null,8,["onClose"])):h("",!0),u(t(xe),{onClick:t(O)},{icon:l(()=>[u(t(je))]),_:1},8,["onClick"])],64)}}});const Ot=ke(Qe,[["__scopeId","data-v-5b447973"]]);export{Ot as default};
//# sourceMappingURL=WorkflowKanban.6ec0241c.js.map
