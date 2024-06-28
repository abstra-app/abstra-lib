var N=Object.defineProperty;var q=(d,a,n)=>a in d?N(d,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[a]=n;var v=(d,a,n)=>(q(d,typeof a!="symbol"?a+"":a,n),n);import{N as T,O as k,D as V,d as $,ey as Q,b as u,c as I,w as o,u as t,f7 as O,f as i,ak as h,cM as K,ce as S,af as E,cd as M,bc as C,eq as w,eA as D,eC as y,e as G,aw as z,er as H,cc as j,es as J,bw as W}from"./outputWidgets.fd23be41.js";import"./gateway.0fcf97ac.js";import{a as X,b as Y,g as Z}from"./datetime.97029428.js";import{c as U}from"./string.d499de72.js";import"./index.0ceba708.js";import{e as tt,E as et,_ as at}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ebe298f5.js";import{R as st}from"./dayjs.cd1a5ef7.js";import{a as B,A as R}from"./router.40b877dd.js";import{A as F}from"./index.3fc5d928.js";import{A as it,C as ot}from"./CollapsePanel.63f2c9a8.js";import{A as x}from"./index.fe816fd7.js";import"./popupNotifcation.e639286b.js";import"./record.f44b1b8b.js";import"./pubsub.35617498.js";import"./LoadingOutlined.c884eb16.js";import"./index.7135e67e.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[a]="023dff6a-0e17-4002-9c28-00b4d1ab50b4",d._sentryDebugIdIdentifier="sentry-dbid-023dff6a-0e17-4002-9c28-00b4d1ab50b4")}catch{}})();class nt{constructor(a,n,l,c,b,f){v(this,"state");v(this,"handleFilterChange",()=>{this.state.currentPage.waitingDebounce=!0,this.state.pagination.currentIndex=1,this.debouncedPageRefetch()});v(this,"debouncedPageRefetch",V.exports.debounce(async()=>{await this.fetchPage(),this.state.currentPage.waitingDebounce=!1},500));v(this,"fetchEmptyLogs",()=>{this.state.currentPage.openedExecutionIds.forEach(async a=>{!this.state.currentPage.loadedLogs[a]&&await this.fetchLogs(a)})});this.executionRepository=a,this.buildRepository=n,this.projectId=l,this.state=T({currentPage:{openedExecutionIds:f?[f]:[],loadingExecutions:!1,waitingDebounce:!1,executions:[],loadedLogs:{}},pagination:{currentIndex:1,pageSize:10,totalCount:0,...b},filters:{dateRange:void 0,buildId:void 0,stageId:void 0,status:void 0,...c},filterOptions:{builds:[],stages:[],statuses:tt.map(P=>({label:U(P),value:P}))}}),k(()=>this.state.filters.buildId,()=>{this.fetchStageOptions()}),k(this.state.filters,()=>{this.state.currentPage.openedExecutionIds=[],this.handleFilterChange()}),k(this.state.pagination,()=>{this.state.currentPage.openedExecutionIds=[],this.fetchPage()})}async init(){await Promise.all([this.fetchPage(),this.fetchOptions()]),this.fetchEmptyLogs(),this.setupRefetchInterval()}async fetchPage(){var l,c,b,f;this.state.currentPage.loadingExecutions=!0;const{executions:a,totalCount:n}=await this.executionRepository.list({projectId:this.projectId,buildId:this.state.filters.buildId,status:this.state.filters.status,limit:this.state.pagination.pageSize,offset:(this.state.pagination.currentIndex-1)*this.state.pagination.pageSize,stageId:this.state.filters.stageId,startDate:(c=(l=this.state.filters.dateRange)==null?void 0:l[0])==null?void 0:c.toISOString(),endDate:(f=(b=this.state.filters.dateRange)==null?void 0:b[1])==null?void 0:f.toISOString()});this.state.currentPage.loadingExecutions=!1,this.state.currentPage.executions=a,this.state.pagination.totalCount=n}async fetchBuildOptions(){const n=(await this.buildRepository.list(this.projectId)).map(l=>({label:`[${l.id.slice(0,8)}] ${l.createdAt.toLocaleString()} ${l.latest?"(Latest)":""}`,value:l.id}));this.state.filterOptions.builds=n}async fetchStageOptions(){var l;const a=await X.get((l=this.state.filters.buildId)!=null?l:this.state.filterOptions.builds[0].value),n=a==null?void 0:a.runtimes.map(c=>({label:c.title,value:c.id}));this.state.filterOptions.stages=n!=null?n:[]}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchStageOptions()}async fetchLogs(a){const n=await this.executionRepository.fetchLogs(this.projectId,a);this.state.currentPage.loadedLogs[a]=n}async setupRefetchInterval(){setTimeout(async()=>{await Promise.all(this.state.currentPage.openedExecutionIds.map(a=>this.fetchLogs(a))),this.setupRefetchInterval()},1e5)}}const rt={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},lt={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},dt={key:1,style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},Lt=$({__name:"Logs",setup(d){const a=new et,n=new Y,l=Q(),c=l.params.projectId,b=l.query.executionId;function f(){const{stageId:m,buildId:r,status:e,startDate:p,endDate:g}=l.query;return p&&g?{stageId:m,buildId:r,status:e,dateRange:[O(p),O(g)]}:{stageId:m,buildId:r,status:e}}function P(){const{page:m,pageSize:r}=l.query;return{page:m?parseInt(m,10):1,pageSize:r?parseInt(r,10):10}}const L=new nt(a,n,c,f(),P(),b),{state:s}=L;return L.init(),(m,r)=>(u(),I(t(F),{direction:"vertical",style:{width:"100%"}},{default:o(()=>[i(t(K),null,{default:o(()=>[h("Logs")]),_:1}),i(t(M),{layout:"vertical"},{default:o(()=>[i(t(B),{gutter:10},{default:o(()=>[i(t(R),{span:24},{default:o(()=>[i(t(S),{label:"Script"},{default:o(()=>[i(t(E),{value:t(s).filters.stageId,"onUpdate:value":r[0]||(r[0]=e=>t(s).filters.stageId=e),options:t(s).filterOptions.stages,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),i(t(B),{gutter:10},{default:o(()=>[i(t(R),{span:8},{default:o(()=>[i(t(S),{label:"Date"},{default:o(()=>[i(t(st),{value:t(s).filters.dateRange,"onUpdate:value":r[1]||(r[1]=e=>t(s).filters.dateRange=e),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),i(t(R),{span:10},{default:o(()=>[i(t(S),{label:"Build"},{default:o(()=>[i(t(E),{value:t(s).filters.buildId,"onUpdate:value":r[2]||(r[2]=e=>t(s).filters.buildId=e),options:t(s).filterOptions.builds,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1}),i(t(R),{span:6},{default:o(()=>[i(t(S),{label:"Status"},{default:o(()=>[i(t(E),{value:t(s).filters.status,"onUpdate:value":r[3]||(r[3]=e=>t(s).filters.status=e),options:t(s).filterOptions.statuses,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(s).currentPage.loadingExecutions||t(s).currentPage.waitingDebounce?(u(),I(t(C),{key:0,style:{width:"100%"}})):t(s).currentPage.executions&&t(s).currentPage.executions.length>0?(u(),I(t(F),{key:1,direction:"vertical",style:{width:"100%"}},{default:o(()=>[i(t(ot),{"active-key":t(s).currentPage.openedExecutionIds,"onUpdate:activeKey":r[4]||(r[4]=e=>t(s).currentPage.openedExecutionIds=e),bordered:!1,style:{"background-color":"transparent"},onChange:t(L).fetchEmptyLogs},{default:o(()=>[(u(!0),w(z,null,D(t(s).currentPage.executions,e=>(u(),I(t(it),{key:e.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:o(()=>[i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(y(t(Z)(e.createdAt)),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(" Run ID: "+y(e.id.slice(0,8)),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(" Build: "+y(e.buildId.slice(0,8)),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>[h(" Duration: "+y(e.duration_seconds),1)]),_:2},1024),i(t(x),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:o(()=>{var p,g;return[h(y((g=(p=t(s).filterOptions.stages.find(_=>_.value===e.stageId))==null?void 0:p.label)!=null?g:e.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:o(()=>[G("div",rt,[h(y(t(U)(e.status))+" ",1),i(at,{status:e.status},null,8,["status"])])]),default:o(()=>{var p,g,_;return[t(s).currentPage.loadedLogs[e.id]?(p=t(s).currentPage.loadedLogs[e.id])!=null&&p.entries.length?(u(),w("div",dt,[(u(!0),w(z,null,D((g=t(s).currentPage.loadedLogs[e.id])==null?void 0:g.entries,A=>(u(),w("p",{key:A.createdAt,style:H({margin:0,"white-space":"pre-wrap",color:A.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},y(A.payload.text.trim()),5))),128))])):(_=t(s).currentPage.loadedLogs[e.id])!=null&&_.entries.length?J("",!0):(u(),I(t(j),{key:2})):(u(),w("div",lt,[i(t(C))]))]}),_:2},1024))),128))]),_:1},8,["active-key","onChange"]),i(t(W),{current:t(s).pagination.currentIndex,"onUpdate:current":r[5]||(r[5]=e=>t(s).pagination.currentIndex=e),"page-size":t(s).pagination.pageSize,"onUpdate:pageSize":r[6]||(r[6]=e=>t(s).pagination.pageSize=e),total:t(s).pagination.totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):(u(),I(t(j),{key:2}))]),_:1}))}});export{Lt as default};
//# sourceMappingURL=Logs.b49db85e.js.map
