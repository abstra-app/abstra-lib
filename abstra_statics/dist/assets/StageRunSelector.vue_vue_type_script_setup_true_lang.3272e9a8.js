import{d as r,o as u,H as c,b as p,eu as f,f as g,u as w,af as b}from"./outputWidgets.8fc6742a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="a1fa2fb4-d313-4cd7-a86a-65a333178e39",a._sentryDebugIdIdentifier="sentry-dbid-a1fa2fb4-d313-4cd7-a86a-65a333178e39")}catch{}})();class y{async list(e){const s=new URLSearchParams({stage:e});return await(await fetch(`/_editor/api/stage_runs?${s}`)).json()}}const m=new y;class d{constructor(e){this.dto=e}static async list(e){return(await m.list(e)).map(n=>new d(n))}get id(){return this.dto.id}get data(){return this.dto.data}get assignee(){return this.dto.assignee}get stage(){return this.dto.stage}get status(){return this.dto.status}}const v=r({__name:"StageRunSelector",props:{path:{},optional:{type:Boolean},disabled:{type:Boolean}},emits:["select"],setup(a,{emit:e}){const s=a;u(async()=>{const i=await d.list(s.path);o.options=i.filter(t=>t.status==="waiting").map(t=>({value:t.id,label:t.id.split("-")[0]}))});const n=i=>{e("select",i)},o=c({options:[],loading:!1});return(i,t)=>(p(),f("div",null,[g(w(b),{value:o.stageRunId,"onUpdate:value":t[0]||(t[0]=l=>o.stageRunId=l),"filter-option":"","allow-clear":s.optional,style:{width:"100%"},placeholder:"Select task instance",options:o.options,disabled:s.disabled,"not-found-content":"There are no waiting task instances",onClear:t[1]||(t[1]=l=>n(null)),onSelect:t[2]||(t[2]=l=>n(l))},null,8,["value","allow-clear","options","disabled"])]))}});export{d as S,v as _};
//# sourceMappingURL=StageRunSelector.vue_vue_type_script_setup_true_lang.3272e9a8.js.map
