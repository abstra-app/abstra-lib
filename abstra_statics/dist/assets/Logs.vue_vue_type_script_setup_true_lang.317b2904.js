var N=Object.defineProperty;var q=(u,i,r)=>i in u?N(u,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[i]=r;var I=(u,i,r)=>(q(u,typeof i!="symbol"?i+"":i,r),r);import{E as Q,g as R,ej as V,d as O,o as d,c as g,w as a,b as e,aG as h,u as t,de as A,Y as x,aS as C,eb as j,Z,e9 as m,dj as z,d4 as G,S as K,a0 as Y,ea as H,ah as J,eD as B,df as M,cA as U,cB as y,bL as W,aB as D,by as F,d7 as S,a as X,bQ as tt,cz as et}from"./index.ffa23369.js";import{c as L}from"./string.6027a7c8.js";import"./gateway.542e40ba.js";import{B as at}from"./build.e2548517.js";import"./tables.9f684302.js";import{e as st,_ as it}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.bbbca941.js";import{u as lt}from"./polling.06b3abb1.js";import{g as ot}from"./datetime.47000d8d.js";import{t as nt}from"./ant-design.38de6033.js";import{A as E}from"./index.f7d307e9.js";import{A as b,a as k}from"./index.ad4a99db.js";import{R as T}from"./dayjs.5f83ff43.js";import{A as rt,C as dt}from"./CollapsePanel.d6235af4.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[i]="942fa6c2-c575-484a-a020-995d002d2b12",u._sentryDebugIdIdentifier="sentry-dbid-942fa6c2-c575-484a-a020-995d002d2b12")}catch{}})();class ut{constructor(i,r,o,p,c,f){I(this,"state");I(this,"polling",lt({task:()=>this.refetch(),interval:1e4}));I(this,"handleFilterChange",()=>{this.state.currentPage.waitingDebounce=!0,this.state.pagination.currentIndex=1,this.debouncedPageRefetch()});I(this,"debouncedPageRefetch",V.exports.debounce(async()=>{await this.fetchPage(),this.state.currentPage.waitingDebounce=!1},500));I(this,"fetchEmptyLogs",()=>{this.state.currentPage.openedExecutionIds.forEach(async i=>{this.state.currentPage.executionData[i]||await this.fetchExecutionDetails(i)})});this.executionRepository=i,this.buildRepository=r,this.projectId=o,this.state=Q({currentPage:{openedExecutionIds:f?[f]:[],loadingExecutions:!1,waitingDebounce:!1,executions:[],executionData:{}},pagination:{currentIndex:1,pageSize:10,totalCount:0,...c},filters:{dateRange:void 0,buildId:void 0,stageId:void 0,status:void 0,search:void 0,...p},filterOptions:{builds:[],stages:[],statuses:st.map(_=>({label:L(_),value:_}))}}),R(()=>this.state.filters.buildId,()=>{this.fetchStageOptions()}),R(this.state.filters,()=>{this.state.currentPage.openedExecutionIds=[],this.handleFilterChange()}),R(this.state.pagination,()=>{this.state.currentPage.openedExecutionIds=[],this.fetchPage()})}async init(){await Promise.all([this.fetchPage(),this.fetchOptions()]),this.fetchEmptyLogs(),this.polling.startPolling()}teardown(){this.polling.endPolling()}async fetchPage(){var o,p,c,f;this.state.currentPage.loadingExecutions=!0;const{executions:i,totalCount:r}=await this.executionRepository.list({projectId:this.projectId,buildId:this.state.filters.buildId,status:this.state.filters.status,limit:this.state.pagination.pageSize,offset:(this.state.pagination.currentIndex-1)*this.state.pagination.pageSize,stageId:this.state.filters.stageId,startDate:(p=(o=this.state.filters.dateRange)==null?void 0:o[0])==null?void 0:p.toISOString(),endDate:(f=(c=this.state.filters.dateRange)==null?void 0:c[1])==null?void 0:f.toISOString(),search:this.state.filters.search});this.state.currentPage.loadingExecutions=!1,this.state.currentPage.executions=i,this.state.pagination.totalCount=r}async fetchBuildOptions(){if(!this.buildRepository)return;const r=(await this.buildRepository.list(this.projectId)).map(o=>({label:`[${o.id.slice(0,8)}] ${o.createdAt.toLocaleString()} ${o.latest?"(Latest)":""}`,value:o.id}));this.state.filterOptions.builds=r}async fetchStageOptions(){var o;if(!this.buildRepository){const c=(await this.executionRepository.fetchStages()).map(f=>({label:f.title,value:f.id}));this.state.filterOptions.stages=c!=null?c:[];return}const i=await at.get((o=this.state.filters.buildId)!=null?o:this.state.filterOptions.builds[0].value),r=i==null?void 0:i.runtimes.map(p=>({label:p.title,value:p.id}));this.state.filterOptions.stages=r!=null?r:[]}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchStageOptions()}async fetchExecutionDetails(i){const[r,o]=await Promise.all([this.executionRepository.fetchLogs(this.projectId,i),this.executionRepository.fetchThreadData(this.projectId,i)]);this.state.currentPage.executionData[i]={logs:r,threadData:o}}async refetch(){this.state.currentPage.openedExecutionIds.map(i=>this.fetchExecutionDetails(i))}}const pt={key:0,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},ct=O({__name:"LogContainer",props:{logs:{}},setup(u){return(i,r)=>(d(),g(t(z),{vertical:"",gap:"small"},{default:a(()=>[e(t(A),{strong:""},{default:a(()=>[h("Terminal Output")]),_:1}),i.logs.entries.length?(d(),x("div",pt,[(d(!0),x(C,null,j(i.logs.entries,o=>(d(),x("p",{key:o.createdAt,style:Z({margin:0,"white-space":"pre-wrap",color:o.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},m(o.payload.text.trim()),5))),128))])):(d(),g(t(A),{key:1,type:"secondary"},{default:a(()=>[h("Empty")]),_:1}))]),_:1}))}}),ft={key:0},gt=O({__name:"ExecutionContext",props:{data:{}},setup(u){const i=o=>{if(o==="legacyThreadData")return"Thread data";const p=L(o);return p.replace(/([A-Z])/g," $1").trim(),p},r=o=>o==null?!0:Array.isArray(o)?o.length===0:typeof o=="object"?Object.keys(o).length===0:!1;return(o,p)=>(d(),g(t(z),{vertical:"",gap:"small"},{default:a(()=>[e(t(A),{strong:""},{default:a(()=>[h("Execution context")]),_:1}),e(t(E),{direction:"vertical",style:{"border-radius":"5px",padding:"10px",color:"#fff",width:"100%","font-family":"monospace","max-height":"600px",overflow:"auto",border:"1px solid #e8e8e8"}},{default:a(()=>[Object.keys(o.data).length?(d(!0),x(C,{key:1},j(Object.entries(o.data),([c,f])=>(d(),x("div",{key:c,class:"tree"},[c!=="legacyThreadData"||!r(f)?(d(),x("div",ft,[e(t(A),{strong:""},{default:a(()=>[h(m(i(c)),1)]),_:2},1024),e(t(G),{"tree-data":t(nt)(f),selectable:!1},null,8,["tree-data"])])):K("",!0)]))),128)):(d(),g(t(A),{key:0,type:"secondary"},{default:a(()=>[h("Empty")]),_:1}))]),_:1})]),_:1}))}});const ht=Y(gt,[["__scopeId","data-v-599a1d92"]]),yt={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},bt={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},Ct=O({__name:"Logs",props:{executionRepository:{},buildRepository:{},showAllFilters:{type:Boolean}},setup(u){const i=u,r=H(),o=r.params.projectId,p=r.query.executionId;function c(){const{stageId:v,buildId:n,status:s,startDate:w,endDate:P}=r.query;return w&&P?{stageId:v,buildId:n,status:s,dateRange:[B(w),B(P)]}:{stageId:v,buildId:n,status:s}}function f(){const{page:v,pageSize:n}=r.query;return{page:v?parseInt(v,10):1,pageSize:n?parseInt(n,10):10}}const _=new ut(i.executionRepository,i.buildRepository,o,c(),f(),p),{state:l}=_;return _.init(),J(()=>_.teardown()),(v,n)=>(d(),g(t(E),{direction:"vertical",style:{width:"100%",padding:"0px 0px 20px 0px"}},{default:a(()=>[e(t(M),null,{default:a(()=>[h("Logs")]),_:1}),v.showAllFilters?(d(),g(t(U),{key:0,layout:"vertical"},{default:a(()=>[e(t(k),{gutter:10},{default:a(()=>[e(t(b),{span:12},{default:a(()=>[e(t(y),{label:"Run ID"},{default:a(()=>[e(t(W),{value:t(l).filters.search,"onUpdate:value":n[0]||(n[0]=s=>t(l).filters.search=s),placeholder:"Search by Run ID",style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),e(t(b),{span:12},{default:a(()=>[e(t(y),{label:"Stage"},{default:a(()=>[e(t(D),{value:t(l).filters.stageId,"onUpdate:value":n[1]||(n[1]=s=>t(l).filters.stageId=s),options:t(l).filterOptions.stages,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),e(t(k),{gutter:10},{default:a(()=>[e(t(b),{span:8},{default:a(()=>[e(t(y),{label:"Date"},{default:a(()=>[e(t(T),{value:t(l).filters.dateRange,"onUpdate:value":n[2]||(n[2]=s=>t(l).filters.dateRange=s),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),e(t(b),{span:10},{default:a(()=>[e(t(y),{label:"Build"},{default:a(()=>[e(t(D),{value:t(l).filters.buildId,"onUpdate:value":n[3]||(n[3]=s=>t(l).filters.buildId=s),options:t(l).filterOptions.builds,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1}),e(t(b),{span:6},{default:a(()=>[e(t(y),{label:"Status"},{default:a(()=>[e(t(D),{value:t(l).filters.status,"onUpdate:value":n[4]||(n[4]=s=>t(l).filters.status=s),options:t(l).filterOptions.statuses,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1})):(d(),g(t(U),{key:1,layout:"vertical"},{default:a(()=>[e(t(k),{gutter:10},{default:a(()=>[e(t(b),{span:8},{default:a(()=>[e(t(y),{label:"Date"},{default:a(()=>[e(t(T),{value:t(l).filters.dateRange,"onUpdate:value":n[5]||(n[5]=s=>t(l).filters.dateRange=s),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),e(t(b),{span:10},{default:a(()=>[e(t(y),{label:"Script"},{default:a(()=>[e(t(D),{value:t(l).filters.stageId,"onUpdate:value":n[6]||(n[6]=s=>t(l).filters.stageId=s),options:t(l).filterOptions.stages,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1}),e(t(b),{span:6},{default:a(()=>[e(t(y),{label:"Status"},{default:a(()=>[e(t(D),{value:t(l).filters.status,"onUpdate:value":n[7]||(n[7]=s=>t(l).filters.status=s),options:t(l).filterOptions.statuses,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1})),t(l).currentPage.loadingExecutions||t(l).currentPage.waitingDebounce?(d(),g(t(F),{key:2,style:{width:"100%"}})):t(l).currentPage.executions&&t(l).currentPage.executions.length>0?(d(),g(t(E),{key:3,direction:"vertical",style:{width:"100%"}},{default:a(()=>[e(t(dt),{"active-key":t(l).currentPage.openedExecutionIds,"onUpdate:activeKey":n[8]||(n[8]=s=>t(l).currentPage.openedExecutionIds=s),bordered:!1,style:{"background-color":"transparent"},onChange:t(_).fetchEmptyLogs},{default:a(()=>[(d(!0),x(C,null,j(t(l).currentPage.executions,s=>(d(),g(t(rt),{key:s.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:a(()=>[e(t(S),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:a(()=>[h(m(t(ot)(s.createdAt)),1)]),_:2},1024),e(t(S),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:a(()=>[h(" Run ID: "+m(s.id.slice(0,8)),1)]),_:2},1024),e(t(S),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:a(()=>[h(" Build: "+m(s.buildId.slice(0,8)),1)]),_:2},1024),e(t(S),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:a(()=>[h(" Duration: "+m(s.duration_seconds),1)]),_:2},1024),e(t(S),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:a(()=>{var w,P;return[h(m((P=(w=t(l).filterOptions.stages.find($=>$.value===s.stageId))==null?void 0:w.label)!=null?P:s.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:a(()=>[X("div",yt,[h(m(t(L)(s.status))+" ",1),e(it,{status:s.status},null,8,["status"])])]),default:a(()=>[t(l).currentPage.executionData[s.id]?(d(),g(t(z),{key:1,vertical:"",gap:"middle"},{default:a(()=>[e(ht,{data:s.context},null,8,["data"]),e(ct,{logs:t(l).currentPage.executionData[s.id].logs},null,8,["logs"])]),_:2},1024)):(d(),x("div",bt,[e(t(F))]))]),_:2},1024))),128))]),_:1},8,["active-key","onChange"]),e(t(tt),{current:t(l).pagination.currentIndex,"onUpdate:current":n[9]||(n[9]=s=>t(l).pagination.currentIndex=s),"page-size":t(l).pagination.pageSize,"onUpdate:pageSize":n[10]||(n[10]=s=>t(l).pagination.pageSize=s),total:t(l).pagination.totalCount,"show-total":s=>`Found ${s} runs`,"show-size-changer":""},null,8,["current","page-size","total","show-total"])]),_:1})):(d(),g(t(et),{key:4}))]),_:1}))}});export{Ct as _};
//# sourceMappingURL=Logs.vue_vue_type_script_setup_true_lang.317b2904.js.map