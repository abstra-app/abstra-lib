import{d as g,ex as v,ey as k,r as b,b as r,c as s,w as a,u as e,f,eu as i}from"./registerWidgets.fdefa7fb.js";import{S as j,L as w}from"./SmartConsole.446cade6.js";import{a as I}from"./asyncComputed.cd0c630d.js";import{J as x}from"./jobs.2f890646.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.d1b3ee3d.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.abbb8141.js";import{B as S}from"./BaseLayout.0aadb9c6.js";import{_ as T,a as D}from"./JobSettings.vue_vue_type_script_setup_true_lang.4c915e65.js";import{c as R}from"./index.265e0c6b.js";import{A as _,T as $}from"./TabPane.3795c0f3.js";import"./forms.b13e8445.js";import"./activeRecord.bfebc154.js";import"./pubsub.41646617.js";import"./dashes.dcfb3f0e.js";import"./index.279ea98b.js";import"./hooks.af5f1720.js";import"./workspaces.d29184dc.js";import"./icons.19b30445.js";import"./Title.cdb29e3b.js";import"./index.9bd610aa.js";import"./uuid.208614bc.js";import"./storage.33b83663.js";import"./ant-design.85c39dc9.js";import"./dayjs.ce8c4f51.js";import"./index.e3f4797d.js";import"./Form.94f0fb52.js";import"./index.8c8d6366.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="ffe6a586-9d1d-49f0-bc84-c0286252d39d",n._sentryDebugIdIdentifier="sentry-dbid-ffe6a586-9d1d-49f0-bc84-c0286252d39d")}catch{}})();const ne=g({__name:"JobEditor",setup(n){const m=v(),l=k(),c=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>x.get(l.params.jobId)),p=w.create();return(A,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(R),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[f(e($),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[f(e(_),{key:"test",tab:"Test"}),f(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[f(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:c,job:e(t),"log-service":e(p)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(D,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(j,{key:0,runtime:"forms","log-service":e(p),onRestart:(u=c.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ne as default};
//# sourceMappingURL=JobEditor.989bbd95.js.map
