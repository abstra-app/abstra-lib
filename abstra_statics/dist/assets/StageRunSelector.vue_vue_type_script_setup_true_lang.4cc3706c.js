import{d as r,o as c,F as u,b as p,et as f,f as g,u as w,ad as y}from"./outputWidgets.0fb707c7.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="f2fe75a4-0a6c-416a-92f3-f6d5ac0dcf8c",s._sentryDebugIdIdentifier="sentry-dbid-f2fe75a4-0a6c-416a-92f3-f6d5ac0dcf8c")}catch{}})();class b{async list(e){const a=new URLSearchParams({stage:e});return await(await fetch(`/_editor/api/stage_runs?${a}`)).json()}}const m=new b;class l{constructor(e){this.dto=e}static async list(e){return(await m.list(e)).map(n=>new l(n))}get id(){return this.dto.id}get data(){return this.dto.data}get assignee(){return this.dto.assignee}get stage(){return this.dto.stage}get status(){return this.dto.status}}const v=r({__name:"StageRunSelector",props:{path:{},optional:{type:Boolean},disabled:{type:Boolean}},emits:["select"],setup(s,{emit:e}){const a=s;c(async()=>{const i=await l.list(a.path);o.options=i.filter(t=>t.status==="waiting").map(t=>({value:t.id,label:t.id.split("-")[0]}))});const n=i=>{e("select",i)},o=u({options:[],loading:!1});return(i,t)=>(p(),f("div",null,[g(w(y),{value:o.stageRunId,"onUpdate:value":t[0]||(t[0]=d=>o.stageRunId=d),"filter-option":"","allow-clear":a.optional,style:{width:"100%"},placeholder:"Select task instance",options:o.options,disabled:a.disabled,"not-found-content":"There are no waiting task instances",onClear:t[1]||(t[1]=d=>n(null)),onSelect:t[2]||(t[2]=d=>n(d))},null,8,["value","allow-clear","options","disabled"])]))}});export{l as S,v as _};
//# sourceMappingURL=StageRunSelector.vue_vue_type_script_setup_true_lang.4cc3706c.js.map
