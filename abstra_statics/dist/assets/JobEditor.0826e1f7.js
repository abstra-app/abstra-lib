import{d as g,ez as v,eA as k,r as _,b as r,c as a,w as s,u as e,f as u,ew as i}from"./outputWidgets.75a5b0b9.js";import{S as w,L as j}from"./SmartConsole.c35b14e7.js";import{a as I}from"./asyncComputed.c701d7b0.js";import{J as B}from"./jobs.4af0de33.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.d3cd006c.js";import{_ as S}from"./DocsButton.vue_vue_type_script_setup_true_lang.0e30e393.js";import{B as T}from"./BaseLayout.324568a0.js";import{_ as x,a as A}from"./JobSettings.vue_vue_type_script_setup_true_lang.6a6436fd.js";import{c as D}from"./index.b50eb903.js";import{A as b,T as R}from"./TabPane.0d7849ee.js";import"./forms.d6fd4b56.js";import"./activeRecord.115270b9.js";import"./pubsub.3fa240d3.js";import"./dashes.cbc2452d.js";import"./index.a1ee75ca.js";import"./hooks.1c8a8ebc.js";import"./workspaces.f47922e6.js";import"./icons.c04528be.js";import"./Title.b6c9692d.js";import"./index.9c0809a0.js";import"./uuid.6680d6a1.js";import"./ant-design.7c6678de.js";import"./dayjs.d3366d83.js";import"./index.e24c456b.js";import"./Form.2c716183.js";import"./index.4598445f.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="e8c5def3-94fc-4fa3-8a16-0f5622d3afa6",n._sentryDebugIdIdentifier="sentry-dbid-e8c5def3-94fc-4fa3-8a16-0f5622d3afa6")}catch{}})();const se=g({__name:"JobEditor",setup(n){const m=v(),l=k(),c=_(null),o=_("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>B.get(l.params.jobId)),p=j.create();return($,d)=>(r(),a(T,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=f=>o.value=f)},{default:s(()=>[u(e(b),{key:"test",tab:"Test"}),u(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[u(S),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(x,{key:0,ref_key:"tester",ref:c,job:e(t),"log-service":e(p)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(A,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:s(()=>{var f;return[e(t)&&o.value==="test"?(r(),a(w,{key:0,runtime:"forms","log-service":e(p),onRestart:(f=c.value)==null?void 0:f.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{se as default};
//# sourceMappingURL=JobEditor.0826e1f7.js.map
