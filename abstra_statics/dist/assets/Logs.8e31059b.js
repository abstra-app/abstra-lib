var N=Object.defineProperty;var T=(d,a,n)=>a in d?N(d,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[a]=n;var v=(d,a,n)=>(T(d,typeof a!="symbol"?a+"":a,n),n);import{D as V,g as E,eG as $,d as q,ev as Q,c as I,w as o,u as t,f6 as D,o as u,b as i,ax as h,cZ as G,co as R,as as k,cn as J,bp as O,W as w,ex as C,eu as y,a as K,aJ as z,X as W,cm as j,R as X,bI as Z}from"./vue-router.28b113b5.js";import"./gateway.c036da04.js";import{a as H,b as M,g as Y}from"./datetime.995c3f5c.js";import{e as tt,E as et,_ as at}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e0eea857.js";import{c as U}from"./string.0d5e6ffd.js";import"./tables.a57cdc4a.js";import{R as st}from"./dayjs.3308df9c.js";import{a as B,A as S}from"./router.2490aba0.js";import{A as F}from"./index.88847a2c.js";import{A as it,C as ot}from"./CollapsePanel.287a6df9.js";import{A as x}from"./index.b93b64d8.js";import"./popupNotifcation.08f5d811.js";import"./LoadingOutlined.22a577f0.js";import"./record.f6e9cbea.js";import"./index.7e8fb747.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[a]="f7564f96-749a-4b6d-83fc-2a7d4cb882f7",d._sentryDebugIdIdentifier="sentry-dbid-f7564f96-749a-4b6d-83fc-2a7d4cb882f7")}catch{}})();class nt{constructor(a,n,l,c,m,f){v(this,"state");v(this,"handleFilterChange",()=>{this.state.currentPage.waitingDebounce=!0,this.state.pagination.currentIndex=1,this.debouncedPageRefetch()});v(this,"debouncedPageRefetch",$.exports.debounce(async()=>{await this.fetchPage(),this.state.currentPage.waitingDebounce=!1},500));v(this,"fetchEmptyLogs",()=>{this.state.currentPage.openedExecutionIds.forEach(async a=>{!this.state.currentPage.loadedLogs[a]&&await this.fetchLogs(a)})});this.executionRepository=a,this.buildRepository=n,this.projectId=l,this.state=V({currentPage:{openedExecutionIds:f?[f]:[],loadingExecutions:!1,waitingDebounce:!1,executions:[],loadedLogs:{}},pagination:{currentIndex:1,pageSize:10,totalCount:0,...m},filters:{dateRange:void 0,buildId:void 0,stageId:void 0,status:void 0,...c},filterOptions:{builds:[],stages:[],statuses:tt.map(P=>({label:U(P),value:P}))}}),E(()=>this.state.filters.buildId,()=>{this.fetchStageOptions()}),E(this.state.filters,()=>{this.state.currentPage.openedExecutionIds=[],this.handleFilterChange()}),E(this.state.pagination,()=>{this.state.currentPage.openedExecutionIds=[],this.fetchPage()})}async init(){await Promise.all([this.fetchPage(),this.fetchOptions()]),this.fetchEmptyLogs(),this.setupRefetchInterval()}async fetchPage(){var l,c,m,f;this.state.currentPage.loadingExecutions=!0;const{executions:a,totalCount:n}=await this.executionRepository.list({projectId:this.projectId,buildId:this.state.filters.buildId,status:this.state.filters.status,limit:this.state.pagination.pageSize,offset:(this.state.pagination.currentIndex-1)*this.state.pagination.pageSize,stageId:this.state.filters.stageId,startDate:(c=(l=this.state.filters.dateRange)==null?void 0:l[0])==null?void 0:c.toISOString(),endDate:(f=(m=this.state.filters.dateRange)==null?void 0:m[1])==null?void 0:f.toISOString()});this.state.currentPage.loadingExecutions=!1,this.state.currentPage.executions=a,this.state.pagination.totalCount=n}async fetchBuildOptions(){const n=(await this.buildRepository.list(this.projectId)).map(l=>({label:`[${l.id.slice(0,8)}] ${l.createdAt.toLocaleString()} ${l.latest?"(Latest)":""}`,value:l.id}));this.state.filterOptions.builds=n}async fetchStageOptions(){var l;const a=await H.get((l=this.state.filters.buildId)!=null?l:this.state.filterOptions.builds[0].value),n=a==null?void 0:a.runtimes.map(c=>({label:c.title,value:c.id}));this.state.filterOptions.stages=n!=null?n:[]}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchStageOptions()}async fetchLogs(a){const n=await this.executionRepository.fetchLogs(this.projectId,a);this.state.currentPage.loadedLogs[a]=n}async setupRefetchInterval(){setTimeout(async()=>{await Promise.all(this.state.currentPage.openedExecutionIds.map(a=>this.fetchLogs(a))),this.setupRefetchInterval()},1e5)}}const rt={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},lt={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},dt={key:1,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},St=q({__name:"Logs",setup(d){const a=new et,n=new M,l=Q(),c=l.params.projectId,m=l.query.executionId;function f(){const{stageId:b,buildId:r,status:e,startDate:p,endDate:g}=l.query;return p&&g?{stageId:b,buildId:r,status:e,dateRange:[D(p),D(g)]}:{stageId:b,buildId:r,status:e}}function P(){const{page:b,pageSize:r}=l.query;return{page:b?parseInt(b,10):1,pageSize:r?parseInt(r,10):10}}const L=new nt(a,n,c,f(),P(),m),{state:s}=L;return L.init(),(b,r)=>(u(),I(t(F),{direction:"vertical",style:{width:"100%"}},{default:o(()=>[i(t(G),null,{default:o(()=>[h("Logs")]),_:1}),i(t(J),{layout:"vertical"},{default:o(()=>[i(t(B),{gutter:10},{default:o(()=>[i(t(S),{span:24},{default:o(()=>[i(t(R),{label:"Script"},{default:o(()=>[i(t(k),{value:t(s).filters.stageId,"onUpdate:value":r[0]||(r[0]=e=>t(s).filters.stageId=e),options:t(s).filterOptions.stages,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),i(t(B),{gutter:10},{default:o(()=>[i(t(S),{span:8},{default:o(()=>[i(t(R),{label:"Date"},{default:o(()=>[i(t(st),{value:t(s).filters.dateRange,"onUpdate:value":r[1]||(r[1]=e=>t(s).filters.dateRange=e),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),i(t(S),{span:10},{default:o(()=>[i(t(R),{label:"Build"},{default:o(()=>[i(t(k),{value:t(s).filters.buildId,"onUpdate:value":r[2]||(r[2]=e=>t(s).filters.buildId=e),options:t(s).filterOptions.builds,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1}),i(t(S),{span:6},{default:o(()=>[i(t(R),{label:"Status"},{default:o(()=>[i(t(k),{value:t(s).filters.status,"onUpdate:value":r[3]||(r[3]=e=>t(s).filters.status=e),options:t(s).filterOptions.statuses,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(s).currentPage.loadingExecutions||t(s).currentPage.waitingDebounce?(u(),I(t(O),{key:0,style:{width:"100%"}})):t(s).currentPage.executions&&t(s).currentPage.executions.length>0?(u(),I(t(F),{key:1,direction:"vertical",style:{width:"100%"}},{default:o(()=>[i(t(ot),{"active-key":t(s).currentPage.openedExecutionIds,"onUpdate:activeKey":r[4]||(r[4]=e=>t(s).currentPage.openedExecutionIds=e),bordered:!1,style:{"background-color":"transparent"},onChange:t(L).fetchEmptyLogs},{default:o(()=>[(u(!0),w(z,null,C(t(s).currentPage.executions,e=>(u(),I(t(it),{key:e.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:o(()=>[i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(y(t(Y)(e.createdAt)),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(" Run ID: "+y(e.id.slice(0,8)),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(" Build: "+y(e.buildId.slice(0,8)),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(" Duration: "+y(e.duration_seconds),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>{var p,g;return[h(y((g=(p=t(s).filterOptions.stages.find(_=>_.value===e.stageId))==null?void 0:p.label)!=null?g:e.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:o(()=>[K("div",rt,[h(y(t(U)(e.status))+" ",1),i(at,{status:e.status},null,8,["status"])])]),default:o(()=>{var p,g,_;return[t(s).currentPage.loadedLogs[e.id]?(p=t(s).currentPage.loadedLogs[e.id])!=null&&p.entries.length?(u(),w("div",dt,[(u(!0),w(z,null,C((g=t(s).currentPage.loadedLogs[e.id])==null?void 0:g.entries,A=>(u(),w("p",{key:A.createdAt,style:W({margin:0,"white-space":"pre-wrap",color:A.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},y(A.payload.text.trim()),5))),128))])):(_=t(s).currentPage.loadedLogs[e.id])!=null&&_.entries.length?X("",!0):(u(),I(t(j),{key:2})):(u(),w("div",lt,[i(t(O))]))]}),_:2},1024))),128))]),_:1},8,["active-key","onChange"]),i(t(Z),{current:t(s).pagination.currentIndex,"onUpdate:current":r[5]||(r[5]=e=>t(s).pagination.currentIndex=e),"page-size":t(s).pagination.pageSize,"onUpdate:pageSize":r[6]||(r[6]=e=>t(s).pagination.pageSize=e),total:t(s).pagination.totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):(u(),I(t(j),{key:2}))]),_:1}))}});export{St as default};
//# sourceMappingURL=Logs.8e31059b.js.map
