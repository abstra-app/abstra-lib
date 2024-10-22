var $=Object.defineProperty;var q=(u,e,r)=>e in u?$(u,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[e]=r;var v=(u,e,r)=>(q(u,typeof e!="symbol"?e+"":e,r),r);import{D as N,g as A,em as V,d as C,o as d,X as f,b as a,w as i,aF as p,u as t,d8 as S,a as B,aR as P,ee as z,Y as Q,ec as g,c as b,c_ as H,$ as M,ed as X,f0 as j,d9 as Y,cv as I,bH as G,aA as k,cu as J,bx as L,d1 as w,bM as K,ct as W}from"./vue-router.282d063d.js";import"./gateway.1283530d.js";import{a as Z,b as tt,g as et}from"./datetime.6591df91.js";import{e as at,E as st,_ as it}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.d89b6f44.js";import{c as F}from"./string.f43a0977.js";import"./tables.f3957aad.js";import{t as nt}from"./ant-design.e04dbc8a.js";import{A as O}from"./index.2e0e92ed.js";import{R as ot}from"./dayjs.68fffc22.js";import{a as T,A as D}from"./router.eddae0da.js";import{A as rt,C as lt}from"./CollapsePanel.2852caae.js";import"./popupNotifcation.0204d02d.js";import"./LoadingOutlined.ecf85b45.js";import"./record.fbca9f8d.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[e]="274c2d51-79d3-4471-8c9e-1cbc61076760",u._sentryDebugIdIdentifier="sentry-dbid-274c2d51-79d3-4471-8c9e-1cbc61076760")}catch{}})();class dt{constructor(e,r,o,c,y,h){v(this,"state");v(this,"handleFilterChange",()=>{this.state.currentPage.waitingDebounce=!0,this.state.pagination.currentIndex=1,this.debouncedPageRefetch()});v(this,"debouncedPageRefetch",V.exports.debounce(async()=>{await this.fetchPage(),this.state.currentPage.waitingDebounce=!1},500));v(this,"fetchEmptyLogs",()=>{this.state.currentPage.openedExecutionIds.forEach(async e=>{this.state.currentPage.executionData[e]||await this.fetchExecutionDetails(e)})});this.executionRepository=e,this.buildRepository=r,this.projectId=o,this.state=N({currentPage:{openedExecutionIds:h?[h]:[],loadingExecutions:!1,waitingDebounce:!1,executions:[],executionData:{}},pagination:{currentIndex:1,pageSize:10,totalCount:0,...y},filters:{dateRange:void 0,buildId:void 0,stageId:void 0,status:void 0,search:void 0,...c},filterOptions:{builds:[],stages:[],statuses:at.map(R=>({label:F(R),value:R}))}}),A(()=>this.state.filters.buildId,()=>{this.fetchStageOptions()}),A(this.state.filters,()=>{this.state.currentPage.openedExecutionIds=[],this.handleFilterChange()}),A(this.state.pagination,()=>{this.state.currentPage.openedExecutionIds=[],this.fetchPage()})}async init(){await Promise.all([this.fetchPage(),this.fetchOptions()]),this.fetchEmptyLogs(),this.setupRefetchInterval()}async fetchPage(){var o,c,y,h;this.state.currentPage.loadingExecutions=!0;const{executions:e,totalCount:r}=await this.executionRepository.list({projectId:this.projectId,buildId:this.state.filters.buildId,status:this.state.filters.status,limit:this.state.pagination.pageSize,offset:(this.state.pagination.currentIndex-1)*this.state.pagination.pageSize,stageId:this.state.filters.stageId,startDate:(c=(o=this.state.filters.dateRange)==null?void 0:o[0])==null?void 0:c.toISOString(),endDate:(h=(y=this.state.filters.dateRange)==null?void 0:y[1])==null?void 0:h.toISOString(),search:this.state.filters.search});this.state.currentPage.loadingExecutions=!1,this.state.currentPage.executions=e,this.state.pagination.totalCount=r}async fetchBuildOptions(){const r=(await this.buildRepository.list(this.projectId)).map(o=>({label:`[${o.id.slice(0,8)}] ${o.createdAt.toLocaleString()} ${o.latest?"(Latest)":""}`,value:o.id}));this.state.filterOptions.builds=r}async fetchStageOptions(){var o;const e=await Z.get((o=this.state.filters.buildId)!=null?o:this.state.filterOptions.builds[0].value),r=e==null?void 0:e.runtimes.map(c=>({label:c.title,value:c.id}));this.state.filterOptions.stages=r!=null?r:[]}async fetchOptions(){await this.fetchBuildOptions(),await this.fetchStageOptions()}async fetchExecutionDetails(e){const[r,o]=await Promise.all([this.executionRepository.fetchLogs(this.projectId,e),this.executionRepository.fetchThreadData(this.projectId,e)]);this.state.currentPage.executionData[e]={logs:r,threadData:o}}async setupRefetchInterval(){setTimeout(async()=>{await Promise.all(this.state.currentPage.openedExecutionIds.map(e=>this.fetchExecutionDetails(e))),this.setupRefetchInterval()},1e5)}}const ut={style:{"background-color":"#555","border-radius":"5px",padding:"10px",color:"#fff","font-family":"monospace","max-height":"600px",overflow:"auto"}},ct=C({__name:"LogContainer",props:{logs:{}},setup(u){return(e,r)=>(d(),f(P,null,[a(t(S),{strong:""},{default:i(()=>[p("Terminal Output")]),_:1}),B("div",ut,[(d(!0),f(P,null,z(e.logs.entries,o=>(d(),f("p",{key:o.createdAt,style:Q({margin:0,"white-space":"pre",color:o.event==="stderr"||o.event==="unhandled-exception"?"rgb(255, 133, 133)":"inherit"})},g(o.payload.text.trim()),5))),128))])],64))}}),pt=C({__name:"ThreadData",props:{data:{}},setup(u){return(e,r)=>(d(),f(P,null,[a(t(S),{strong:""},{default:i(()=>[p("Thread Data")]),_:1}),a(t(O),{direction:"vertical",style:{"border-radius":"5px",padding:"10px",color:"#fff",width:"100%","font-family":"monospace","max-height":"600px",overflow:"auto",border:"1px solid #aaa"}},{default:i(()=>[Object.keys(e.data).length?(d(!0),f(P,{key:1},z(Object.entries(e.data),([o,c])=>(d(),f("div",{key:o,class:"tree"},[a(t(S),{strong:""},{default:i(()=>[p(g(o),1)]),_:2},1024),a(t(H),{"tree-data":t(nt)(c),selectable:!1},null,8,["tree-data"])]))),128)):(d(),b(t(S),{key:0,type:"secondary"},{default:i(()=>[p("Empty")]),_:1}))]),_:1})],64))}});const ft=M(pt,[["__scopeId","data-v-b70415e5"]]),gt={style:{width:"100px",height:"100%",display:"flex","align-items":"center","justify-content":"right",gap:"10px"}},ht={key:0,style:{display:"flex",width:"100%","justify-content":"center"}},yt={key:1,style:{display:"flex","flex-direction":"column",gap:"5px"}},Ct=C({__name:"Logs",setup(u){const e=new st,r=new tt,o=X(),c=o.params.projectId,y=o.query.executionId;function h(){const{stageId:m,buildId:l,status:s,startDate:_,endDate:x}=o.query;return _&&x?{stageId:m,buildId:l,status:s,dateRange:[j(_),j(x)]}:{stageId:m,buildId:l,status:s}}function R(){const{page:m,pageSize:l}=o.query;return{page:m?parseInt(m,10):1,pageSize:l?parseInt(l,10):10}}const E=new dt(e,r,c,h(),R(),y),{state:n}=E;return E.init(),(m,l)=>(d(),b(t(O),{direction:"vertical",style:{width:"100%"}},{default:i(()=>[a(t(Y),null,{default:i(()=>[p("Logs")]),_:1}),a(t(J),{layout:"vertical"},{default:i(()=>[a(t(T),{gutter:10},{default:i(()=>[a(t(D),{span:12},{default:i(()=>[a(t(I),{label:"Run ID"},{default:i(()=>[a(t(G),{value:t(n).filters.search,"onUpdate:value":l[0]||(l[0]=s=>t(n).filters.search=s),placeholder:"Search by Run ID",style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),a(t(D),{span:12},{default:i(()=>[a(t(I),{label:"Script"},{default:i(()=>[a(t(k),{value:t(n).filters.stageId,"onUpdate:value":l[1]||(l[1]=s=>t(n).filters.stageId=s),options:t(n).filterOptions.stages,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),a(t(T),{gutter:10},{default:i(()=>[a(t(D),{span:8},{default:i(()=>[a(t(I),{label:"Date"},{default:i(()=>[a(t(ot),{value:t(n).filters.dateRange,"onUpdate:value":l[2]||(l[2]=s=>t(n).filters.dateRange=s),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),a(t(D),{span:10},{default:i(()=>[a(t(I),{label:"Build"},{default:i(()=>[a(t(k),{value:t(n).filters.buildId,"onUpdate:value":l[3]||(l[3]=s=>t(n).filters.buildId=s),options:t(n).filterOptions.builds,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1}),a(t(D),{span:6},{default:i(()=>[a(t(I),{label:"Status"},{default:i(()=>[a(t(k),{value:t(n).filters.status,"onUpdate:value":l[4]||(l[4]=s=>t(n).filters.status=s),options:t(n).filterOptions.statuses,"option-label":"label","option-value":"value",filter:!1,placeholder:"All","allow-clear":""},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(n).currentPage.loadingExecutions||t(n).currentPage.waitingDebounce?(d(),b(t(L),{key:0,style:{width:"100%"}})):t(n).currentPage.executions&&t(n).currentPage.executions.length>0?(d(),b(t(O),{key:1,direction:"vertical",style:{width:"100%"}},{default:i(()=>[a(t(lt),{"active-key":t(n).currentPage.openedExecutionIds,"onUpdate:activeKey":l[5]||(l[5]=s=>t(n).currentPage.openedExecutionIds=s),bordered:!1,style:{"background-color":"transparent"},onChange:t(E).fetchEmptyLogs},{default:i(()=>[(d(!0),f(P,null,z(t(n).currentPage.executions,s=>(d(),b(t(rt),{key:s.id,style:{"border-radius":"4px","margin-bottom":"10px",border:"0",overflow:"hidden","background-color":"#fff"}},{header:i(()=>[a(t(w),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:i(()=>[p(g(t(et)(s.createdAt)),1)]),_:2},1024),a(t(w),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:i(()=>[p(" Run ID: "+g(s.id.slice(0,8)),1)]),_:2},1024),a(t(w),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:i(()=>[p(" Build: "+g(s.buildId.slice(0,8)),1)]),_:2},1024),a(t(w),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:i(()=>[p(" Duration: "+g(s.duration_seconds),1)]),_:2},1024),a(t(w),{color:"default",style:{"margin-right":"10px"},bordered:!1},{default:i(()=>{var _,x;return[p(g((x=(_=t(n).filterOptions.stages.find(U=>U.value===s.stageId))==null?void 0:_.label)!=null?x:s.stageId.slice(0,8)),1)]}),_:2},1024)]),extra:i(()=>[B("div",gt,[p(g(t(F)(s.status))+" ",1),a(it,{status:s.status},null,8,["status"])])]),default:i(()=>[t(n).currentPage.executionData[s.id]?(d(),f("div",yt,[a(ft,{data:t(n).currentPage.executionData[s.id].threadData},null,8,["data"]),a(ct,{logs:t(n).currentPage.executionData[s.id].logs},null,8,["logs"])])):(d(),f("div",ht,[a(t(L))]))]),_:2},1024))),128))]),_:1},8,["active-key","onChange"]),a(t(K),{current:t(n).pagination.currentIndex,"onUpdate:current":l[6]||(l[6]=s=>t(n).pagination.currentIndex=s),"page-size":t(n).pagination.pageSize,"onUpdate:pageSize":l[7]||(l[7]=s=>t(n).pagination.pageSize=s),total:t(n).pagination.totalCount,"show-size-changer":""},null,8,["current","page-size","total"])]),_:1})):(d(),b(t(W),{key:2}))]),_:1}))}});export{Ct as default};
//# sourceMappingURL=Logs.5ce3ca4b.js.map
