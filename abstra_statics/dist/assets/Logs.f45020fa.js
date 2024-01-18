var F=Object.defineProperty;var U=(d,e,i)=>e in d?F(d,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[e]=i;var p=(d,e,i)=>(U(d,typeof e!="symbol"?e+"":e,i),i);import{r as w,F as I,H as A,eL as $,d as T,eB as V,a as q,b as c,c as h,w as n,u as t,f as s,aq as g,ad as R,bg as k,cC as B,ev as m,eC as C,eD as S,bq as L,ew as N,ck as E,ex as P,bL as H}from"./outputWidgets.21bbcff1.js";import{a as O,A as _}from"./router.2820c665.js";import{a as K,b as G}from"./build.f217c9f5.js";import"./index.492bb477.js";import{E as J,_ as M}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1620f13d.js";import{g as Q}from"./datetime.20925e43.js";import{R as W}from"./dayjs.ff4053fa.js";import{a as X}from"./Title.cfd1fb62.js";import{A as Y}from"./index.2b5e3bc8.js";import{A as v}from"./FormItem.72c7e0f5.js";import{F as Z}from"./Form.a94c2c06.js";import{A as tt,C as et}from"./CollapsePanel.b9b7d46f.js";import{A as y}from"./index.cf01b44a.js";import"./index.179e1961.js";import"./index.cf4c23b9.js";import"./record.9f045685.js";import"./pubsub.8056e5e5.js";import"./CheckCircleFilled.882d7322.js";import"./index.626aa1ee.js";import"./Text.192b7616.js";import"./hasIn.e0cb731c.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="73d8086f-c3a8-44c4-9088-6490edb110a2",d._sentryDebugIdIdentifier="sentry-dbid-73d8086f-c3a8-44c4-9088-6490edb110a2")}catch{}})();class b{constructor(e,i,r){p(this,"_executionState",w({openedExecutionIds:[],loadingExecutions:!1,waitingDebounce:!1,executions:[]}));p(this,"_paginationState",I({currentPage:1,pageSize:10,totalCount:0}));p(this,"_filtersState",w({dateRange:void 0,selectedBuildId:void 0,runtimeId:void 0,buildOptions:[],runtimeOptions:[]}));p(this,"_executionsLogsState",I({}));p(this,"projectId");p(this,"handleFilterChange",()=>{this._executionState.value.waitingDebounce=!0,this._paginationState.currentPage=1,this.debouncedPageRefetch()});p(this,"debouncedPageRefetch",$.exports.debounce(async()=>{await this.fetchPage(),this.executionState.value.waitingDebounce=!1},500));p(this,"getLogsStateByExecution",e=>this._executionsLogsState&&this._executionsLogsState[e]);this.query=e,this.executionRepository=i,this.buildRepository=r,this._filtersState.value={...this._filtersState.value,...e},this.projectId=e.projectId}static setup(e,i,r){const u=new b(e,i,r);return u.fetchPage(),u.fetchOptions(),A(u._paginationState,()=>u.fetchPage(),{deep:!0}),A(u._filtersState,u.handleFilterChange,{deep:!0}),u}async fetchPage(){var r,u;this._executionState.value.loadingExecutions=!0;const{executions:e,totalCount:i}=await this.executionRepository.list({projectId:this.projectId,buildId:this.filtersState.selectedBuildId,limit:this._paginationState.pageSize,offset:(this._paginationState.currentPage-1)*this._paginationState.pageSize,stageId:this.filtersState.runtimeId,startDate:(r=this.filtersState.dateRange)==null?void 0:r[0].toISOString(),endDate:(u=this.filtersState.dateRange)==null?void 0:u[1].toISOString()});this._executionState.value.executions=e,this._paginationState.totalCount=i,this._executionState.value.loadingExecutions=!1}async fetchBuildOptions(){const e=await this.buildRepository.list(this.projectId);this._filtersState.value.buildOptions=e.map(i=>({label:`[${i.id.slice(0,8)}] ${i.createdAt.toLocaleString()} ${i.latest?"(Latest)":""}`,value:i.id}))}async fetchRuntimeOptions(){var i;const e=await K.get((i=this.filtersState.selectedBuildId)!=null?i:this.filtersState.buildOptions[0].value);this._filtersState.value.runtimeOptions=e==null?void 0:e.runtimes.map(r=>({label:`[${r.type}] ${r.title} (${r.id.slice(0,8)})`,value:r.id}))}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchRuntimeOptions()}async handleOpenExecution(e){await Promise.all([e.map(async i=>{this._executionsLogsState[i]||(this._executionsLogsState[i]=await this.executionRepository.fetchLogs(this.projectId,i))})])}get filtersState(){return this._filtersState.value}get currentPage(){return this._paginationState.currentPage}set currentPage(e){this._paginationState.currentPage=e}get pageSize(){return this._paginationState.pageSize}set pageSize(e){this._paginationState.pageSize=e}get totalCount(){return this._paginationState.totalCount}get executionState(){return this._executionState}}const at={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},it={key:1,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace"}},Bt=T({__name:"Logs",setup(d){const e=new J,i=new G,r=V(),u=r.params.projectId,z={runtimeId:r.query.runtimeId,projectId:u},o=b.setup(z,e,i);return(st,l)=>{const D=q("router-link");return c(),h(t(B),{direction:"vertical"},{default:n(()=>[s(t(X),null,{default:n(()=>[g("Logs")]),_:1}),s(t(Y),{message:"Logs from older abstra versions are not available in this view.",type:"info"},{action:n(()=>[s(D,{to:{name:"legacy-logs"}},{default:n(()=>[g("View legacy logs")]),_:1})]),_:1}),s(t(Z),{layout:"vertical"},{default:n(()=>[s(t(O),{gutter:10},{default:n(()=>[s(t(_),{span:24},{default:n(()=>[s(t(v),{label:"Script"},{default:n(()=>[s(t(R),{value:t(o).filtersState.runtimeId,"onUpdate:value":l[0]||(l[0]=a=>t(o).filtersState.runtimeId=a),options:t(o).filtersState.runtimeOptions,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),s(t(O),{gutter:10},{default:n(()=>[s(t(_),{span:12},{default:n(()=>[s(t(v),{label:"Date"},{default:n(()=>[s(t(W),{value:t(o).filtersState.dateRange,"onUpdate:value":l[1]||(l[1]=a=>t(o).filtersState.dateRange=a),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),s(t(_),{span:12},{default:n(()=>[s(t(v),{label:"Build"},{default:n(()=>[s(t(R),{value:t(o).filtersState.selectedBuildId,"onUpdate:value":l[2]||(l[2]=a=>t(o).filtersState.selectedBuildId=a),options:t(o).filtersState.buildOptions,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(o).executionState.value.loadingExecutions||t(o).executionState.value.waitingDebounce?(c(),h(t(k),{key:0,style:{width:"100%"}})):t(o).executionState.value.executions&&t(o).executionState.value.executions.length>0?(c(),h(t(B),{key:1,direction:"vertical",style:{width:"100%"}},{default:n(()=>[s(t(et),{"active-key":t(o).executionState.value.openedExecutionIds,"onUpdate:activeKey":l[3]||(l[3]=a=>t(o).executionState.value.openedExecutionIds=a),bordered:!1,style:{"background-color":"transparent"},onChange:l[4]||(l[4]=a=>t(o).handleOpenExecution(a))},{default:n(()=>[(c(!0),m(L,null,C(t(o).executionState.value.executions,a=>(c(),h(t(tt),{key:a.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:n(()=>[s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[g(S(t(Q)(a.createdAt)),1)]),_:2},1024),s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[g(" Run ID: "+S(a.id.slice(-8)),1)]),_:2},1024),s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[g(" Build: "+S(a.buildId.slice(-8)),1)]),_:2},1024),s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>{var f,x;return[g(S((x=(f=t(o).filtersState.runtimeOptions.find(j=>j.value===a.stageId))==null?void 0:f.label)!=null?x:a.stageId.slice(-8)),1)]}),_:2},1024)]),extra:n(()=>[g(S(a.status.charAt(0).toUpperCase()+a.status.slice(1))+" ",1),s(M,{status:a.status},null,8,["status"])]),default:n(()=>[t(o).getLogsStateByExecution(a.id)?t(o).getLogsStateByExecution(a.id).entries.length?(c(),m("div",it,[(c(!0),m(L,null,C(t(o).getLogsStateByExecution(a.id).entries,f=>(c(),m("p",{key:f.createdAt,style:N({margin:0,"white-space":"pre-wrap",color:f.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},S(f.payload.text.trim()),5))),128))])):t(o).getLogsStateByExecution(a.id).entries.length?P("",!0):(c(),h(t(E),{key:2})):(c(),m("div",at,[s(t(k))]))]),_:2},1024))),128))]),_:1},8,["active-key"]),s(t(H),{current:t(o).currentPage,"onUpdate:current":l[5]||(l[5]=a=>t(o).currentPage=a),"page-size":t(o).pageSize,"onUpdate:pageSize":l[6]||(l[6]=a=>t(o).pageSize=a),total:t(o).totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):P("",!0),s(t(E))]),_:1})}}});export{Bt as default};
//# sourceMappingURL=Logs.f45020fa.js.map
