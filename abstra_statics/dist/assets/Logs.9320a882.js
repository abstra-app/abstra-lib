var U=Object.defineProperty;var N=(d,e,o)=>e in d?U(d,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[e]=o;var w=(d,e,o)=>(N(d,typeof e!="symbol"?e+"":e,o),o);import{N as T,O as S,B as V,d as $,eG as q,b as u,c as b,w as n,u as t,f as i,au as f,ah as E,bj as k,cG as C,ey as x,eH as O,eJ as h,e as G,aG as D,ez as Q,co as z,eA as H,bF as J}from"./outputWidgets.e2ed3ff5.js";import"./router.a09506b3.js";import{a as K,b as M,g as W}from"./datetime.6e397a5f.js";import"./index.5500a325.js";import{E as X,_ as Y}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.434cb4a1.js";import{h as j}from"./index.9de3c84e.js";import{R as Z}from"./dayjs.850f407f.js";import{A as tt}from"./Title.451e374d.js";import{A as B}from"./index.1107fb50.js";import{A}from"./index.7d888fea.js";import{A as L,F as et}from"./Form.ba5a97c1.js";import{A as at,C as st}from"./CollapsePanel.d17d8296.js";import{A as v}from"./index.d93a0c04.js";import"./popupNotifcation.d3f5b3fe.js";import"./record.c2b8598b.js";import"./pubsub.c137a732.js";import"./LoadingOutlined.eb7d8406.js";import"./Base.1e6a845e.js";import"./hasIn.ee0df185.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="a636e038-3182-4af9-b116-8e6a4847fdbf",d._sentryDebugIdIdentifier="sentry-dbid-a636e038-3182-4af9-b116-8e6a4847fdbf")}catch{}})();class it{constructor(e,o,l,c,y,g){w(this,"state");w(this,"handleFilterChange",()=>{this.state.currentPage.waitingDebounce=!0,this.state.pagination.currentIndex=1,this.debouncedPageRefetch()});w(this,"debouncedPageRefetch",V.exports.debounce(async()=>{await this.fetchPage(),this.state.currentPage.waitingDebounce=!1},500));w(this,"fetchEmptyLogs",()=>{this.state.currentPage.openedExecutionIds.forEach(async e=>{!this.state.currentPage.loadedLogs[e]&&await this.fetchLogs(e)})});this.executionRepository=e,this.buildRepository=o,this.projectId=l,this.state=T({currentPage:{openedExecutionIds:g?[g]:[],loadingExecutions:!1,waitingDebounce:!1,executions:[],loadedLogs:{}},pagination:{currentIndex:1,pageSize:10,totalCount:0,...y},filters:{dateRange:void 0,buildId:void 0,stageId:void 0,...c},filterOptions:{builds:[],stages:[]}}),S(()=>this.state.filters.buildId,()=>{this.fetchStageOptions()}),S(this.state.filters,()=>{this.state.currentPage.openedExecutionIds=[],this.handleFilterChange()}),S(this.state.pagination,()=>{this.state.currentPage.openedExecutionIds=[],this.fetchPage()})}async init(){await Promise.all([this.fetchPage(),this.fetchOptions()]),this.fetchEmptyLogs(),this.setupRefetchInterval()}async fetchPage(){var l,c,y,g;this.state.currentPage.loadingExecutions=!0;const{executions:e,totalCount:o}=await this.executionRepository.list({projectId:this.projectId,buildId:this.state.filters.buildId,limit:this.state.pagination.pageSize,offset:(this.state.pagination.currentIndex-1)*this.state.pagination.pageSize,stageId:this.state.filters.stageId,startDate:(c=(l=this.state.filters.dateRange)==null?void 0:l[0])==null?void 0:c.toISOString(),endDate:(g=(y=this.state.filters.dateRange)==null?void 0:y[1])==null?void 0:g.toISOString()});this.state.currentPage.loadingExecutions=!1,this.state.currentPage.executions=e,this.state.pagination.totalCount=o}async fetchBuildOptions(){const o=(await this.buildRepository.list(this.projectId)).map(l=>({label:`[${l.id.slice(0,8)}] ${l.createdAt.toLocaleString()} ${l.latest?"(Latest)":""}`,value:l.id}));this.state.filterOptions.builds=o}async fetchStageOptions(){var l;const e=await K.get((l=this.state.filters.buildId)!=null?l:this.state.filterOptions.builds[0].value),o=e==null?void 0:e.runtimes.map(c=>({label:c.title,value:c.id}));this.state.filterOptions.stages=o!=null?o:[]}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchStageOptions()}async fetchLogs(e){const o=await this.executionRepository.fetchLogs(this.projectId,e);this.state.currentPage.loadedLogs[e]=o}async setupRefetchInterval(){setTimeout(async()=>{await Promise.all(this.state.currentPage.openedExecutionIds.map(e=>this.fetchLogs(e))),this.setupRefetchInterval()},1e5)}}const ot={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},nt={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},rt={key:1,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},Lt=$({__name:"Logs",setup(d){const e=new X,o=new M,l=q(),c=l.params.projectId,y=l.query.executionId;function g(){const{stageId:m,buildId:r,startDate:a,endDate:p}=l.query;return a&&p?{stageId:m,buildId:r,dateRange:[j(a),j(p)]}:{stageId:m,buildId:r}}function F(){const{page:m,pageSize:r}=l.query;return{page:m?parseInt(m,10):1,pageSize:r?parseInt(r,10):10}}const _=new it(e,o,c,g(),F(),y),{state:s}=_;return _.init(),(m,r)=>(u(),b(t(C),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[i(t(tt),null,{default:n(()=>[f("Logs")]),_:1}),i(t(et),{layout:"vertical"},{default:n(()=>[i(t(B),{gutter:10},{default:n(()=>[i(t(A),{span:24},{default:n(()=>[i(t(L),{label:"Script"},{default:n(()=>[i(t(E),{value:t(s).filters.stageId,"onUpdate:value":r[0]||(r[0]=a=>t(s).filters.stageId=a),options:t(s).filterOptions.stages,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),i(t(B),{gutter:10},{default:n(()=>[i(t(A),{span:12},{default:n(()=>[i(t(L),{label:"Date"},{default:n(()=>[i(t(Z),{value:t(s).filters.dateRange,"onUpdate:value":r[1]||(r[1]=a=>t(s).filters.dateRange=a),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),i(t(A),{span:12},{default:n(()=>[i(t(L),{label:"Build"},{default:n(()=>[i(t(E),{value:t(s).filters.buildId,"onUpdate:value":r[2]||(r[2]=a=>t(s).filters.buildId=a),options:t(s).filterOptions.builds,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(s).currentPage.loadingExecutions||t(s).currentPage.waitingDebounce?(u(),b(t(k),{key:0,style:{width:"100%"}})):t(s).currentPage.executions&&t(s).currentPage.executions.length>0?(u(),b(t(C),{key:1,direction:"vertical",style:{width:"100%"}},{default:n(()=>[i(t(st),{"active-key":t(s).currentPage.openedExecutionIds,"onUpdate:activeKey":r[3]||(r[3]=a=>t(s).currentPage.openedExecutionIds=a),bordered:!1,style:{"background-color":"transparent"},onChange:t(_).fetchEmptyLogs},{default:n(()=>[(u(!0),x(D,null,O(t(s).currentPage.executions,a=>(u(),b(t(at),{key:a.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:n(()=>[i(t(v),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(h(t(W)(a.createdAt)),1)]),_:2},1024),i(t(v),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(" Run ID: "+h(a.id.slice(0,8)),1)]),_:2},1024),i(t(v),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(" Build: "+h(a.buildId.slice(0,8)),1)]),_:2},1024),i(t(v),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>[f(" Duration: "+h(a.duration_seconds),1)]),_:2},1024),i(t(v),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:n(()=>{var p,I;return[f(h((I=(p=t(s).filterOptions.stages.find(P=>P.value===a.stageId))==null?void 0:p.label)!=null?I:a.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:n(()=>[G("div",ot,[f(h(a.status.charAt(0).toUpperCase()+a.status.slice(1))+" ",1),i(Y,{status:a.status},null,8,["status"])])]),default:n(()=>{var p,I,P;return[t(s).currentPage.loadedLogs[a.id]?(p=t(s).currentPage.loadedLogs[a.id])!=null&&p.entries.length?(u(),x("div",rt,[(u(!0),x(D,null,O((I=t(s).currentPage.loadedLogs[a.id])==null?void 0:I.entries,R=>(u(),x("p",{key:R.createdAt,style:Q({margin:0,"white-space":"pre-wrap",color:R.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},h(R.payload.text.trim()),5))),128))])):(P=t(s).currentPage.loadedLogs[a.id])!=null&&P.entries.length?H("",!0):(u(),b(t(z),{key:2})):(u(),x("div",nt,[i(t(k))]))]}),_:2},1024))),128))]),_:1},8,["active-key","onChange"]),i(t(J),{current:t(s).pagination.currentIndex,"onUpdate:current":r[4]||(r[4]=a=>t(s).pagination.currentIndex=a),"page-size":t(s).pagination.pageSize,"onUpdate:pageSize":r[5]||(r[5]=a=>t(s).pagination.pageSize=a),total:t(s).pagination.totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):(u(),b(t(z),{key:2}))]),_:1}))}});export{Lt as default};
//# sourceMappingURL=Logs.9320a882.js.map
