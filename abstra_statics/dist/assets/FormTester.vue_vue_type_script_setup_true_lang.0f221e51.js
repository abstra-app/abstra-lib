import{d as N,r as E,H as M,b as u,c as _,w as l,f as t,et as w,eB as P,e as Q,aT as g,eC as j,u as e,bq as A,c2 as T,c3 as U,J as D,K as H,ez as z,c9 as C,eN as G,bN as J}from"./outputWidgets.52de64cd.js";import{R as O}from"./SmartConsole.9babf82e.js";import{c as X,A as m}from"./Title.baba2b21.js";import{F as L}from"./Form.09072055.js";import{W as Y}from"./workspaces.bfe7b570.js";import{R as Z,F as ee}from"./broker.96aadc7e.js";import{a as ae}from"./asyncComputed.00e76dd1.js";import{r as te}from"./index.a07ffcc5.js";import{_ as re}from"./StageRunSelector.vue_vue_type_script_setup_true_lang.6f54e569.js";import{k as le}from"./icons.bf6505eb.js";import"./index.396ff1b5.js";import{C as oe,A as ne}from"./CollapsePanel.d756b861.js";import{A as I}from"./index.1ebdd57a.js";import{A as se}from"./index.c0e74c90.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h=new Error().stack;h&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[h]="f4a56964-507e-44c4-9f7b-c1a072ddf28a",i._sentryDebugIdIdentifier="sentry-dbid-f4a56964-507e-44c4-9f7b-c1a072ddf28a")}catch{}})();const ue="forms_workspace_id_path_key",ie="This path is already being used by another form or dash on your workspace",Pe=N({__name:"FormSettings",props:{form:{}},setup(i){const r=E(i.form),n=[{label:"General",props:[{label:"Form name",valueKey:"title"}]},{label:"Welcome Screen",props:[{label:"Title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],S=M({pathError:null,sectionsShown:[!0,!1,!1]}),x=b=>{b.detail.includes(ue)&&(S.pathError=ie)};return addEventListener("hasura-error",x),(b,p)=>(u(),_(e(L),{layout:"vertical"},{default:l(()=>[t(O,{runtime:r.value},null,8,["runtime"]),(u(),w(A,null,P(n,s=>Q("div",{key:s.label},[t(e(X),{level:3},{default:l(()=>[g(j(s.label),1)]),_:2},1024),(u(!0),w(A,null,P(s.props,v=>(u(),_(e(m),{key:v.label,label:v.label},{default:l(()=>[t(e(T),{type:"text",value:r.value[v.valueKey],onChange:c=>r.value[v.valueKey]=c.target.value},null,8,["value","onChange"])]),_:2},1032,["label"]))),128))])),64)),t(e(m),{label:"Start smart form automatically"},{default:l(()=>[t(e(U),{checked:r.value.autoStart,"onUpdate:checked":p[0]||(p[0]=s=>r.value.autoStart=s)},null,8,["checked"])]),_:1}),t(e(m),{label:"Allow the user to restart the smart form after it is over"},{default:l(()=>[t(e(U),{checked:r.value.allowRestart,"onUpdate:checked":p[1]||(p[1]=s=>r.value.allowRestart=s)},null,8,["checked"])]),_:1})]),_:1}))}}),de={style:{display:"flex","justify-content":"flex-end"}},me={key:1,style:{height:"600px",margin:"20px","border-radius":"10px",overflow:"hidden"}},k="abstra-run-id",Ae=N({__name:"FormTester",props:{form:{},logService:{}},setup(i,{expose:h}){var q,B,K,$;const r=i,n=M({queryParams:[],url:`${r.form.path}`,stageRunId:null}),S=D(()=>`/_editor/${r.form.routeName}/${encodeURIComponent(r.form.path)}/preview?${n.queryParams.map(({name:a,value:f})=>`${a}=${f}`).join("&")}`),x=a=>{n.stageRunId=a},{result:b,loading:p}=ae(()=>Y.get()),s=()=>{n.queryParams.push({name:"",value:""})},v=a=>{n.queryParams=n.queryParams.filter((f,o)=>o!==a)};H([()=>n.stageRunId,()=>n.queryParams],([a,f])=>{const o=f.find(d=>d.name===k);if(console.log(a,o),a&&!o){n.queryParams.push({name:k,value:a});return}if(!a&&o){n.queryParams=n.queryParams.filter(d=>d.name!==k);return}a&&o&&a!==o.value&&(o.value=a)});const c=D(()=>Z.create({formPath:r.form.path}));(q=c.value)==null||q.on("stdout",a=>{r.logService.log({type:"stdout",log:a.log})}),(B=c.value)==null||B.on("stderr",a=>{r.logService.log({type:"stderr",log:a.log})}),(K=c.value)==null||K.onClose(()=>{r.logService.log({type:"stderr",log:"Program closed"})}),($=c.value)==null||$.on("files:changed",()=>{r.logService.log({type:"files-changed",log:"Files changed"})});const V=z(),W=({path:a})=>{te("editor",V,a)},F=E(null);async function R(){var a;return r.logService.log({type:"restart"}),(a=F.value)==null?void 0:a.run()}return h({restart:R}),(a,f)=>(u(),_(e(L),{layout:"vertical"},{default:l(()=>[t(e(I),{orientation:"left"},{default:l(()=>[g("Params")]),_:1}),t(e(m),null,{default:l(()=>[t(re,{disabled:r.form.isInitial,path:r.form.path,optional:!0,onSelect:f[0]||(f[0]=o=>x(o))},null,8,["disabled","path"])]),_:1}),t(e(m),null,{default:l(()=>[t(e(oe),null,{default:l(()=>[t(e(ne),{header:`Query Params (${n.queryParams.length})`},{default:l(()=>[(u(!0),w(A,null,P(n.queryParams,(o,d)=>(u(),_(e(m),{key:d},{default:l(()=>[t(e(se),null,{default:l(()=>[t(e(T),{value:o.name,"onUpdate:value":y=>o.name=y,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(T),{value:o.value,"onUpdate:value":y=>o.value=y,type:"text",placeholder:"value",disabled:o.name===k},null,8,["value","onUpdate:value","disabled"]),t(e(C),{danger:"",onClick:y=>v(d)},{default:l(()=>[g("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(m),null,{default:l(()=>[t(e(C),{type:"dashed",style:{width:"100%"},onClick:s},{default:l(()=>[g("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"])]),_:1})]),_:1}),t(e(m),null,{default:l(()=>[Q("div",de,[t(e(C),{href:S.value,style:{display:"flex",align:"center"},target:"_blank"},{default:l(()=>[t(G,{path:e(le),fill:"currentColor"},null,8,["path"]),g(" Open in new tab ")]),_:1},8,["href"])])]),_:1}),t(e(I),{orientation:"left"},{default:l(()=>[g("Quick Preview")]),_:1}),e(p)||!e(b)?(u(),_(e(J),{key:0})):(u(),w("div",me,[t(ee,{ref_key:"runner",ref:F,form:a.form.makeRunnerData(e(b)),params:{...n.queryParams.reduce((o,{name:d,value:y})=>({...o,[d]:y}),{})},"is-preview":"","enable-auto-focus":"",broker:c.value,onNavigate:W,onLogout:R},null,8,["form","params","broker"])]))]),_:1}))}});export{Ae as _,Pe as a};
//# sourceMappingURL=FormTester.vue_vue_type_script_setup_true_lang.0f221e51.js.map
