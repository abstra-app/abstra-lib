import{S as _}from"./SaveButton.307a7861.js";import{C}from"./CrudView.135e879c.js";import{a as E}from"./asyncComputed.aeacd985.js";import{u as V}from"./polling.24154f32.js";import{E as x}from"./controller.b915a453.js";import{d as A,ar as h,o as d,Y as S,u as e,c,ei as T,w as a,S as m,aS as B,b as s,aG as u,bT as F,e9 as y,cy as I,dc as U,cE as D,cz as L,cL as N}from"./index.86f25c77.js";import{A as O}from"./index.d15b3861.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="5b3ed93c-9358-4f10-9ae4-cc0668132b6d",o._sentryDebugIdIdentifier="sentry-dbid-5b3ed93c-9358-4f10-9ae4-cc0668132b6d")}catch{}})();const $=A({__name:"View",props:{envVarRepository:{},mode:{},fileOpener:{}},setup(o){const r=o,{result:t,loading:b}=E(async()=>{const i=await x.create(r.envVarRepository,r.mode,r.fileOpener);return g(),i}),{startPolling:g,endPolling:w}=V({task:()=>{var i;return(i=t.value)==null?void 0:i.pollingFunction()},interval:2e3});h(()=>w());const k={columns:[],rows:[]};return(i,l)=>{var p,v;return d(),S(B,null,[e(t)?(d(),c(C,{key:0,"entity-name":"Env var",loading:e(b),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:e(t).table()||k,"create-button-text":"Add Environment Variable",create:e(t).create,fields:e(t).creationFields||[],live:e(t).isLocalEditor},T({_:2},[(p=e(t))!=null&&p.isLocalEditor?{name:"secondary",fn:a(()=>{var n;return[s(e(F),{onClick:(n=e(t))==null?void 0:n.openEnvFile},{default:a(()=>[u("Open .env")]),_:1},8,["onClick"])]}),key:"0"}:void 0,(v=e(t))!=null&&v.isLocalEditor?{name:"extra",fn:a(()=>[s(e(O),{"show-icon":"",style:{"margin-top":"20px"}},{message:a(()=>[u(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),key:"1"}:void 0,e(t)?{name:"more",fn:a(()=>[s(_,{model:e(t),disabled:!e(t).hasChanges()},{"with-changes":a(()=>[u(y(e(t).saveMessage),1)]),_:1},8,["model","disabled"])]),key:"2"}:void 0]),1032,["loading","table","create","fields","live"])):m("",!0),e(t)?(d(),c(e(N),{key:1,open:e(t).isUpdating,title:"Update value",onCancel:l[1]||(l[1]=n=>{var f;return(f=e(t))==null?void 0:f.cancelUpdate()}),onOk:l[2]||(l[2]=()=>{var n;return(n=e(t))==null?void 0:n.confirmUpdate()})},{default:a(()=>[e(t).state.value.type==="updating"?(d(),c(e(I),{key:0,layout:"vertical"},{default:a(()=>[s(e(L),null,{default:a(()=>[s(e(U),null,{default:a(()=>[u(y(e(t).state.value.name),1)]),_:1}),s(e(D),{value:e(t).state.value.value,"onUpdate:value":l[0]||(l[0]=n=>e(t).state.value.value=n)},null,8,["value"])]),_:1})]),_:1})):m("",!0)]),_:1},8,["open"])):m("",!0)],64)}}});export{$ as _};
//# sourceMappingURL=View.vue_vue_type_script_setup_true_lang.4e10975c.js.map
