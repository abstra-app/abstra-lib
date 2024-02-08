var F=Object.defineProperty;var N=(d,e,i)=>e in d?F(d,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[e]=i;var p=(d,e,i)=>(N(d,typeof e!="symbol"?e+"":e,i),i);import{r as w,G as I,J as A,eL as T,d as V,eB as q,a as G,b as c,c as S,w as n,u as t,f as s,ar as g,ae as R,bv as B,cF as k,ev as m,eC as C,eD as h,e as J,a$ as E,ew as K,cn as L,ex as P,bS as H}from"./outputWidgets.244ba1c8.js";import{a as O,A as _}from"./router.60675eeb.js";import{a as M,b as Q}from"./build.d40bc917.js";import"./index.bec3aec1.js";import{E as W,_ as X}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.7da437f7.js";import{g as Y}from"./datetime.01a20e3d.js";import{R as Z}from"./dayjs.0493d392.js";import{A as tt}from"./Title.eb85429e.js";import{A as et}from"./index.6c491bc0.js";import{A as x}from"./FormItem.e7fba2a7.js";import{F as at}from"./Form.f49cd330.js";import{A as it,C as ot}from"./CollapsePanel.749a5c00.js";import{A as y}from"./index.feab3270.js";import"./index.cf4c23b9.js";import"./record.5766e9f8.js";import"./pubsub.f74b1921.js";import"./CheckCircleFilled.3d114da0.js";import"./index.efad7982.js";import"./Base.2351f159.js";import"./Typography.52981f51.js";import"./hasIn.d73516ff.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="cc57951c-6800-4b1c-91ad-e4147ac72d96",d._sentryDebugIdIdentifier="sentry-dbid-cc57951c-6800-4b1c-91ad-e4147ac72d96")}catch{}})();class v{constructor(e,i,r){p(this,"_executionState",w({openedExecutionIds:[],loadingExecutions:!1,waitingDebounce:!1,executions:[]}));p(this,"_paginationState",I({currentPage:1,pageSize:10,totalCount:0}));p(this,"_filtersState",w({dateRange:void 0,selectedBuildId:void 0,runtimeId:void 0,buildOptions:[],runtimeOptions:[]}));p(this,"_executionsLogsState",I({}));p(this,"projectId");p(this,"handleFilterChange",()=>{this._executionState.value.waitingDebounce=!0,this._paginationState.currentPage=1,this.debouncedPageRefetch()});p(this,"debouncedPageRefetch",T.exports.debounce(async()=>{await this.fetchPage(),this.executionState.value.waitingDebounce=!1},500));p(this,"getLogsStateByExecution",e=>this._executionsLogsState&&this._executionsLogsState[e]);this.query=e,this.executionRepository=i,this.buildRepository=r,this._filtersState.value={...this._filtersState.value,...e},this.projectId=e.projectId}static setup(e,i,r){const u=new v(e,i,r);return u.fetchPage(),u.fetchOptions(),A(u._paginationState,()=>u.fetchPage(),{deep:!0}),A(u._filtersState,u.handleFilterChange,{deep:!0}),u}async fetchPage(){var r,u;this._executionState.value.loadingExecutions=!0;const{executions:e,totalCount:i}=await this.executionRepository.list({projectId:this.projectId,buildId:this.filtersState.selectedBuildId,limit:this._paginationState.pageSize,offset:(this._paginationState.currentPage-1)*this._paginationState.pageSize,stageId:this.filtersState.runtimeId,startDate:(r=this.filtersState.dateRange)==null?void 0:r[0].toISOString(),endDate:(u=this.filtersState.dateRange)==null?void 0:u[1].toISOString()});this._executionState.value.executions=e,this._paginationState.totalCount=i,this._executionState.value.loadingExecutions=!1}async fetchBuildOptions(){const e=await this.buildRepository.list(this.projectId);this._filtersState.value.buildOptions=e.map(i=>({label:`[${i.id.slice(0,8)}] ${i.createdAt.toLocaleString()} ${i.latest?"(Latest)":""}`,value:i.id}))}async fetchRuntimeOptions(){var i;const e=await M.get((i=this.filtersState.selectedBuildId)!=null?i:this.filtersState.buildOptions[0].value);this._filtersState.value.runtimeOptions=e==null?void 0:e.runtimes.map(r=>({label:`[${r.type}] ${r.title} (${r.id.slice(0,8)})`,value:r.id}))}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchRuntimeOptions()}async handleOpenExecution(e){await Promise.all([e.map(async i=>{this._executionsLogsState[i]||(this._executionsLogsState[i]=await this.executionRepository.fetchLogs(this.projectId,i))})])}get filtersState(){return this._filtersState.value}get currentPage(){return this._paginationState.currentPage}set currentPage(e){this._paginationState.currentPage=e}get pageSize(){return this._paginationState.pageSize}set pageSize(e){this._paginationState.pageSize=e}get totalCount(){return this._paginationState.totalCount}get executionState(){return this._executionState}}const st={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},nt={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},rt={key:1,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},Lt=V({__name:"Logs",setup(d){const e=new W,i=new Q,r=q(),u=r.params.projectId,z=r.query.runtimeId,D=r.query.executionId,j={runtimeId:z,projectId:u,executionId:D},o=v.setup(j,e,i);return(lt,l)=>{const U=G("router-link");return c(),S(t(k),{direction:"vertical"},{default:n(()=>[s(t(tt),null,{default:n(()=>[g("Logs")]),_:1}),s(t(et),{message:"Logs from versions of Abstra prior to 1.27.0 are not displayed here. Use legacy logs instead.",type:"info","show-icon":""},{action:n(()=>[s(U,{to:{name:"legacy-logs"}},{default:n(()=>[g("Go to legacy logs")]),_:1})]),_:1}),s(t(at),{layout:"vertical"},{default:n(()=>[s(t(O),{gutter:10},{default:n(()=>[s(t(_),{span:24},{default:n(()=>[s(t(x),{label:"Script"},{default:n(()=>[s(t(R),{value:t(o).filtersState.runtimeId,"onUpdate:value":l[0]||(l[0]=a=>t(o).filtersState.runtimeId=a),options:t(o).filtersState.runtimeOptions,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),s(t(O),{gutter:10},{default:n(()=>[s(t(_),{span:12},{default:n(()=>[s(t(x),{label:"Date"},{default:n(()=>[s(t(Z),{value:t(o).filtersState.dateRange,"onUpdate:value":l[1]||(l[1]=a=>t(o).filtersState.dateRange=a),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),s(t(_),{span:12},{default:n(()=>[s(t(x),{label:"Build"},{default:n(()=>[s(t(R),{value:t(o).filtersState.selectedBuildId,"onUpdate:value":l[2]||(l[2]=a=>t(o).filtersState.selectedBuildId=a),options:t(o).filtersState.buildOptions,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(o).executionState.value.loadingExecutions||t(o).executionState.value.waitingDebounce?(c(),S(t(B),{key:0,style:{width:"100%"}})):t(o).executionState.value.executions&&t(o).executionState.value.executions.length>0?(c(),S(t(k),{key:1,direction:"vertical",style:{width:"100%"}},{default:n(()=>[s(t(ot),{"active-key":t(o).executionState.value.openedExecutionIds,"onUpdate:activeKey":l[3]||(l[3]=a=>t(o).executionState.value.openedExecutionIds=a),bordered:!1,style:{"background-color":"transparent"},onChange:l[4]||(l[4]=a=>t(o).handleOpenExecution(a))},{default:n(()=>[(c(!0),m(E,null,C(t(o).executionState.value.executions,a=>(c(),S(t(it),{key:a.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:n(()=>[s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[g(h(t(Y)(a.createdAt)),1)]),_:2},1024),s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[g(" Run ID: "+h(a.id.slice(0,8)),1)]),_:2},1024),s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[g(" Build: "+h(a.buildId.slice(0,8)),1)]),_:2},1024),s(t(y),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>{var f,b;return[g(h((b=(f=t(o).filtersState.runtimeOptions.find($=>$.value===a.stageId))==null?void 0:f.label)!=null?b:a.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:n(()=>[J("div",st,[g(h(a.status.charAt(0).toUpperCase()+a.status.slice(1))+" ",1),s(X,{status:a.status},null,8,["status"])])]),default:n(()=>[t(o).getLogsStateByExecution(a.id)?t(o).getLogsStateByExecution(a.id).entries.length?(c(),m("div",rt,[(c(!0),m(E,null,C(t(o).getLogsStateByExecution(a.id).entries,f=>(c(),m("p",{key:f.createdAt,style:K({margin:0,"white-space":"pre-wrap",color:f.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},h(f.payload.text.trim()),5))),128))])):t(o).getLogsStateByExecution(a.id).entries.length?P("",!0):(c(),S(t(L),{key:2})):(c(),m("div",nt,[s(t(B))]))]),_:2},1024))),128))]),_:1},8,["active-key"]),s(t(H),{current:t(o).currentPage,"onUpdate:current":l[5]||(l[5]=a=>t(o).currentPage=a),"page-size":t(o).pageSize,"onUpdate:pageSize":l[6]||(l[6]=a=>t(o).pageSize=a),total:t(o).totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):P("",!0),s(t(L))]),_:1})}}});export{Lt as default};
//# sourceMappingURL=Logs.043df906.js.map
