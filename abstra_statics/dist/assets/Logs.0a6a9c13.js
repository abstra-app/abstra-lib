var $=Object.defineProperty;var F=(d,e,i)=>e in d?$(d,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[e]=i;var p=(d,e,i)=>(F(d,typeof e!="symbol"?e+"":e,i),i);import{r as I,G as w,I as R,eL as N,d as V,eA as q,b as c,c as S,w as n,u as t,f as o,aq as f,ad as A,bf as B,cC as C,eu as m,eB as E,eD as h,e as T,aC as P,ev as G,ck as k,ew as L,bB as K}from"./outputWidgets.1b294f5f.js";import{a as O,A as x}from"./router.f4440b29.js";import{a as H,b as J}from"./build.cb67f91f.js";import"./index.ba52cd17.js";import{E as M,_ as Q}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.74afcb49.js";import{g as W}from"./datetime.65ebc841.js";import{R as X}from"./dayjs.4de776b0.js";import{A as Y}from"./Title.4066d750.js";import{A as _,F as Z}from"./Form.123996ac.js";import{A as tt,C as et}from"./CollapsePanel.f5e9243e.js";import{A as y}from"./index.e0804fb0.js";import"./popupNotifcation.2591f3d3.js";import"./index.cf4c23b9.js";import"./record.4fc1748f.js";import"./pubsub.20cc0948.js";import"./LoadingOutlined.fd0644c4.js";import"./index.99b82ee7.js";import"./Text.c9fbd748.js";import"./hasIn.f4746841.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="7469c40f-ba41-4b08-9e65-95c13613b802",d._sentryDebugIdIdentifier="sentry-dbid-7469c40f-ba41-4b08-9e65-95c13613b802")}catch{}})();class b{constructor(e,i,u){p(this,"_executionState",I({openedExecutionIds:[],loadingExecutions:!1,waitingDebounce:!1,executions:[]}));p(this,"_paginationState",w({currentPage:1,pageSize:10,totalCount:0}));p(this,"_filtersState",I({dateRange:void 0,selectedBuildId:void 0,runtimeId:void 0,buildOptions:[],runtimeOptions:[]}));p(this,"_executionsLogsState",w({}));p(this,"projectId");p(this,"handleFilterChange",()=>{this._executionState.value.waitingDebounce=!0,this._paginationState.currentPage=1,this.debouncedPageRefetch()});p(this,"debouncedPageRefetch",N.exports.debounce(async()=>{await this.fetchPage(),this.executionState.value.waitingDebounce=!1},500));p(this,"getLogsStateByExecution",e=>this._executionsLogsState&&this._executionsLogsState[e]);this.query=e,this.executionRepository=i,this.buildRepository=u,this._filtersState.value={...this._filtersState.value,...e},this.projectId=e.projectId}static setup(e,i,u){const l=new b(e,i,u);return l.fetchPage(),l.fetchOptions(),R(l._paginationState,()=>l.fetchPage(),{deep:!0}),R(l._filtersState,l.handleFilterChange,{deep:!0}),l}async fetchPage(){var u,l;this._executionState.value.loadingExecutions=!0;const{executions:e,totalCount:i}=await this.executionRepository.list({projectId:this.projectId,buildId:this.filtersState.selectedBuildId,limit:this._paginationState.pageSize,offset:(this._paginationState.currentPage-1)*this._paginationState.pageSize,stageId:this.filtersState.runtimeId,startDate:(u=this.filtersState.dateRange)==null?void 0:u[0].toISOString(),endDate:(l=this.filtersState.dateRange)==null?void 0:l[1].toISOString()});this._executionState.value.executions=e,this._paginationState.totalCount=i,this._executionState.value.loadingExecutions=!1}async fetchBuildOptions(){const e=await this.buildRepository.list(this.projectId);this._filtersState.value.buildOptions=e.map(i=>({label:`[${i.id.slice(0,8)}] ${i.createdAt.toLocaleString()} ${i.latest?"(Latest)":""}`,value:i.id}))}async fetchRuntimeOptions(){var i,u;const e=await H.get((i=this.filtersState.selectedBuildId)!=null?i:this.filtersState.buildOptions[0].value);this._filtersState.value.runtimeOptions=(u=e==null?void 0:e.runtimes.map(l=>({label:`[${l.type}] ${l.title} (${l.id.slice(0,8)})`,value:l.id})))!=null?u:[]}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchRuntimeOptions()}async handleOpenExecution(e){await Promise.all([e.map(async i=>{this._executionsLogsState[i]||(this._executionsLogsState[i]=await this.executionRepository.fetchLogs(this.projectId,i))})])}get filtersState(){return this._filtersState.value}get currentPage(){return this._paginationState.currentPage}set currentPage(e){this._paginationState.currentPage=e}get pageSize(){return this._paginationState.pageSize}set pageSize(e){this._paginationState.pageSize=e}get totalCount(){return this._paginationState.totalCount}get executionState(){return this._executionState}}const at={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},it={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},st={key:1,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},At=V({__name:"Logs",setup(d){const e=new M,i=new J,u=q(),l=u.params.projectId,z=u.query.runtimeId,D=u.query.executionId,j={runtimeId:z,projectId:l,executionId:D},s=b.setup(j,e,i);return(ot,r)=>(c(),S(t(C),{direction:"vertical"},{default:n(()=>[o(t(Y),null,{default:n(()=>[f("Logs")]),_:1}),o(t(Z),{layout:"vertical"},{default:n(()=>[o(t(O),{gutter:10},{default:n(()=>[o(t(x),{span:24},{default:n(()=>[o(t(_),{label:"Script"},{default:n(()=>[o(t(A),{value:t(s).filtersState.runtimeId,"onUpdate:value":r[0]||(r[0]=a=>t(s).filtersState.runtimeId=a),options:t(s).filtersState.runtimeOptions,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),o(t(O),{gutter:10},{default:n(()=>[o(t(x),{span:12},{default:n(()=>[o(t(_),{label:"Date"},{default:n(()=>[o(t(X),{value:t(s).filtersState.dateRange,"onUpdate:value":r[1]||(r[1]=a=>t(s).filtersState.dateRange=a),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(t(x),{span:12},{default:n(()=>[o(t(_),{label:"Build"},{default:n(()=>[o(t(A),{value:t(s).filtersState.selectedBuildId,"onUpdate:value":r[2]||(r[2]=a=>t(s).filtersState.selectedBuildId=a),options:t(s).filtersState.buildOptions,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(s).executionState.value.loadingExecutions||t(s).executionState.value.waitingDebounce?(c(),S(t(B),{key:0,style:{width:"100%"}})):t(s).executionState.value.executions&&t(s).executionState.value.executions.length>0?(c(),S(t(C),{key:1,direction:"vertical",style:{width:"100%"}},{default:n(()=>[o(t(et),{"active-key":t(s).executionState.value.openedExecutionIds,"onUpdate:activeKey":r[3]||(r[3]=a=>t(s).executionState.value.openedExecutionIds=a),bordered:!1,style:{"background-color":"transparent"},onChange:r[4]||(r[4]=a=>t(s).handleOpenExecution(a))},{default:n(()=>[(c(!0),m(P,null,E(t(s).executionState.value.executions,a=>(c(),S(t(tt),{key:a.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:n(()=>[o(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(h(t(W)(a.createdAt)),1)]),_:2},1024),o(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(" Run ID: "+h(a.id.slice(0,8)),1)]),_:2},1024),o(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(" Build: "+h(a.buildId.slice(0,8)),1)]),_:2},1024),o(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>{var g,v;return[f(h((v=(g=t(s).filtersState.runtimeOptions.find(U=>U.value===a.stageId))==null?void 0:g.label)!=null?v:a.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:n(()=>[T("div",at,[f(h(a.status.charAt(0).toUpperCase()+a.status.slice(1))+" ",1),o(Q,{status:a.status},null,8,["status"])])]),default:n(()=>[t(s).getLogsStateByExecution(a.id)?t(s).getLogsStateByExecution(a.id).entries.length?(c(),m("div",st,[(c(!0),m(P,null,E(t(s).getLogsStateByExecution(a.id).entries,g=>(c(),m("p",{key:g.createdAt,style:G({margin:0,"white-space":"pre-wrap",color:g.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},h(g.payload.text.trim()),5))),128))])):t(s).getLogsStateByExecution(a.id).entries.length?L("",!0):(c(),S(t(k),{key:2})):(c(),m("div",it,[o(t(B))]))]),_:2},1024))),128))]),_:1},8,["active-key"]),o(t(K),{current:t(s).currentPage,"onUpdate:current":r[5]||(r[5]=a=>t(s).currentPage=a),"page-size":t(s).pageSize,"onUpdate:pageSize":r[6]||(r[6]=a=>t(s).pageSize=a),total:t(s).totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):L("",!0),o(t(k))]),_:1}))}});export{At as default};
//# sourceMappingURL=Logs.0a6a9c13.js.map
