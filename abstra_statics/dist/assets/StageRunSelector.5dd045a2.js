import{d as w,H as h,r as S,o as D,G as I,b as m,ev as R,f as u,w as c,u as l,ae as A,ar as v,e as N,ez as x,c as C,ex as V,a$ as k,v as J}from"./outputWidgets.2e47e14c.js";import{e as O}from"./toggleHighContrast.a4abc220.js";import{v as $}from"./string.018a3e61.js";import{f as F}from"./index.2fdba74b.js";import{A as B}from"./index.b306ef07.js";import{A as T}from"./FormItem.47817a76.js";import{F as z}from"./Form.0b25b541.js";import{A as j}from"./Text.33fabc42.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="72f094e4-5632-4127-9f18-c1bd7e797baf",n._sentryDebugIdIdentifier="sentry-dbid-72f094e4-5632-4127-9f18-c1bd7e797baf")}catch{}})();class E{async list(t){const a=new URLSearchParams({stage:t});return await(await fetch(`/_editor/api/stage_runs?${a}`)).json()}}const M=new E;class g{constructor(t){this.dto=t}static async list(t){return(await M.list(t)).map(i=>new g(i))}get id(){return this.dto.id}get data(){return this.dto.data}get assignee(){return this.dto.assignee}get stage(){return this.dto.stage}get status(){return this.dto.status}get createdAt(){return new Date(this.dto.createdAt)}}const U=w({__name:"StageRunSelector",props:{stage:{},stageRunId:{}},emits:["update-stage-run-id","update-data"],setup(n,{emit:t}){var p;const a=n,i=h(()=>a.stage.testData?!$(a.stage.testData):!1),f=S(null),y=e=>{const s=r.stageRuns.find(_=>_.id===e),d=JSON.stringify(s==null?void 0:s.data,null,2);t("update-stage-run-id",e),o.setValue(d),o.updateOptions({readOnly:!!e})},b=()=>{t("update-stage-run-id",null),o.setValue("{}"),o.updateOptions({readOnly:!1})};let o;D(async()=>{r.stageRuns=await g.list(a.stage.id),r.options=r.stageRuns.filter(e=>e.status==="waiting").map(e=>({value:e.id,label:`Started ${F(e.createdAt,{addSuffix:!0})}`})),o=O.create(f.value,{language:"json",value:a.stage.testData,fontFamily:"monospace",lineNumbers:"off",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"}}),o.onDidChangeModelContent(()=>{a.stage.testData=o.getValue()})});const r=I({stageRuns:[],options:[],loading:!1,stageRunId:(p=a.stageRunId)!=null?p:void 0});return(e,s)=>(m(),R(k,null,[u(l(z),{layout:"vertical"},{default:c(()=>[u(l(T),{label:"Select a thread or edit the test thread data"},{default:c(()=>[u(l(A),{value:r.stageRunId,"onUpdate:value":s[0]||(s[0]=d=>r.stageRunId=d),placeholder:"No thread selected","filter-option":"",style:{width:"100%"},"allow-clear":!0,options:r.options,disabled:e.$props.stage.isInitial,"not-found-content":"There are no waiting threads",onSelect:s[1]||(s[1]=d=>y(d)),onClear:s[2]||(s[2]=d=>b())},null,8,["value","options","disabled"])]),_:1})]),_:1}),u(l(B),{orientation:"left"},{default:c(()=>[v("Data")]),_:1}),N("div",{ref_key:"dataJson",ref:f,class:x(["data-container",{threaded:!!e.stageRunId,invalid:i.value}])},null,2),i.value?(m(),C(l(j),{key:0,type:"danger"},{default:c(()=>[v("Invalid JSON")]),_:1})):V("",!0)],64))}});const X=J(U,[["__scopeId","data-v-8a6b5d71"]]);export{X as S};
//# sourceMappingURL=StageRunSelector.5dd045a2.js.map
