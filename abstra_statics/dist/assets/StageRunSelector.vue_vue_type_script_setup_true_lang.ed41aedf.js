import{d as r,o as u,G as c,b as p,et as g,f,u as b,ae as w}from"./outputWidgets.f4de17f7.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="67814097-cf3b-450c-8fd4-7ae0029ba0ad",s._sentryDebugIdIdentifier="sentry-dbid-67814097-cf3b-450c-8fd4-7ae0029ba0ad")}catch{}})();class y{async list(e){const a=new URLSearchParams({stage:e});return await(await fetch(`/_editor/api/stage_runs?${a}`)).json()}}const m=new y;class d{constructor(e){this.dto=e}static async list(e){return(await m.list(e)).map(n=>new d(n))}get id(){return this.dto.id}get data(){return this.dto.data}get assignee(){return this.dto.assignee}get stage(){return this.dto.stage}get status(){return this.dto.status}}const v=r({__name:"StageRunSelector",props:{path:{},optional:{type:Boolean},disabled:{type:Boolean}},emits:["select"],setup(s,{emit:e}){const a=s;u(async()=>{const i=await d.list(a.path);o.options=i.filter(t=>t.status==="waiting").map(t=>({value:t.id,label:t.id.split("-")[0]}))});const n=i=>{e("select",i)},o=c({options:[],loading:!1});return(i,t)=>(p(),g("div",null,[f(b(w),{value:o.stageRunId,"onUpdate:value":t[0]||(t[0]=l=>o.stageRunId=l),"filter-option":"","allow-clear":a.optional,style:{width:"100%"},placeholder:"Select task instance",options:o.options,disabled:a.disabled,"not-found-content":"There are no waiting task instances",onClear:t[1]||(t[1]=l=>n(null)),onSelect:t[2]||(t[2]=l=>n(l))},null,8,["value","allow-clear","options","disabled"])]))}});export{d as S,v as _};
//# sourceMappingURL=StageRunSelector.vue_vue_type_script_setup_true_lang.ed41aedf.js.map
