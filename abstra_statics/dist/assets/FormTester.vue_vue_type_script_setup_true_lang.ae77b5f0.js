import{d as R,r as y,H as T,b as c,c as f,w as d,f as n,et as w,eB as x,e as K,b2 as B,eC as E,u as a,bw as C,c6 as I,c7 as F,J as D,ez as A,bR as M}from"./outputWidgets.b9aa154a.js";import{R as N}from"./SmartConsole.7bdfdf85.js";import{c as L,A as v}from"./Title.6cd833fd.js";import{F as P}from"./Form.55f226f4.js";import{W as V}from"./workspaces.157f78cb.js";import{R as W,F as H}from"./broker.4016214f.js";import{a as U}from"./asyncComputed.9bda3979.js";import{r as z}from"./index.ade1bec6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="73a1c2f0-b3f1-40a7-8ba2-3a3a59eed190",o._sentryDebugIdIdentifier="sentry-dbid-73a1c2f0-b3f1-40a7-8ba2-3a3a59eed190")}catch{}})();const G="forms_workspace_id_path_key",J="This path is already being used by another form or dash on your workspace",ae=R({__name:"FormSettings",props:{form:{}},setup(o){const e=y(o.form),m=[{label:"General",props:[{label:"Form name",valueKey:"title"}]},{label:"Welcome Screen",props:[{label:"Title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],g=T({pathError:null,sectionsShown:[!0,!1,!1]}),b=l=>{l.detail.includes(G)&&(g.pathError=J)};return addEventListener("hasura-error",b),(l,u)=>(c(),f(a(P),{layout:"vertical"},{default:d(()=>[n(N,{runtime:e.value},null,8,["runtime"]),(c(),w(C,null,x(m,r=>K("div",{key:r.label},[n(a(L),{level:3},{default:d(()=>[B(E(r.label),1)]),_:2},1024),(c(!0),w(C,null,x(r.props,s=>(c(),f(a(v),{key:s.label,label:s.label},{default:d(()=>[n(a(I),{type:"text",value:e.value[s.valueKey],onChange:p=>e.value[s.valueKey]=p.target.value},null,8,["value","onChange"])]),_:2},1032,["label"]))),128))])),64)),n(a(v),{label:"Start smart form automatically"},{default:d(()=>[n(a(F),{checked:e.value.autoStart,"onUpdate:checked":u[0]||(u[0]=r=>e.value.autoStart=r)},null,8,["checked"])]),_:1}),n(a(v),{label:"Allow the user to restart the smart form after it is over"},{default:d(()=>[n(a(F),{checked:e.value.allowRestart,"onUpdate:checked":u[1]||(u[1]=r=>e.value.allowRestart=r)},null,8,["checked"])]),_:1})]),_:1}))}}),te=R({__name:"FormTester",props:{form:{},logService:{}},setup(o,{expose:i}){var h,k,_,S;const e=o,{result:m,loading:g}=U(()=>V.get()),b=y({}),l=D(()=>W.create({formPath:e.form.path}));(h=l.value)==null||h.on("stdout",t=>{e.logService.log({type:"stdout",log:t.log})}),(k=l.value)==null||k.on("stderr",t=>{e.logService.log({type:"stderr",log:t.log})}),(_=l.value)==null||_.onClose(()=>{e.logService.log({type:"stderr",log:"Program closed"})}),(S=l.value)==null||S.on("files:changed",()=>{e.logService.log({type:"files-changed",log:"Files changed"})});const u=A(),r=({path:t})=>{z("editor",u,t)},s=y(null);async function p(){var t;return e.logService.log({type:"restart"}),(t=s.value)==null?void 0:t.run()}return i({restart:p}),(t,$)=>a(g)||!a(m)?(c(),f(a(M),{key:0})):(c(),f(H,{key:1,ref_key:"runner",ref:s,form:t.form.makeRunnerData(a(m)),params:b.value,"is-preview":"","enable-auto-focus":"",broker:l.value,onNavigate:r,onLogout:p},null,8,["form","params","broker"]))}});export{te as _,ae as a};
//# sourceMappingURL=FormTester.vue_vue_type_script_setup_true_lang.ae77b5f0.js.map
