import{d as b,r as u,b as y,c as p,w as v,as as g,eA as m,u as w,bG as h,cw as C}from"./outputWidgets.90bea826.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="dccb8152-fe57-4c69-ba72-18afd60dd0bc",a._sentryDebugIdIdentifier="sentry-dbid-dccb8152-fe57-4c69-ba72-18afd60dd0bc")}catch{}})();const _=b({__name:"SaveButton",props:{model:{},disabled:{type:Boolean},type:{}},emits:["error"],setup(a,{emit:s}){const n=a,t=u(!1),c=u(null);async function r(){t.value=!0;try{await n.model.save()}catch(e){e instanceof Error&&(s("error",e),C.error({message:"Error",description:e.message}),c.value=e)}finally{t.value=!1}}return addEventListener("keydown",e=>{n.disabled||(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,d)=>{var o,l,i,f;return y(),p(w(h),{class:m(["save-button",{changes:(o=e.model)==null?void 0:o.hasChanges()}]),loading:t.value,disabled:(i=e.disabled)!=null?i:!((l=e.model)!=null&&l.hasChanges()),type:(f=e.type)!=null?f:"default",onClick:d[0]||(d[0]=k=>r())},{default:v(()=>[g(" Save ")]),_:1},8,["class","loading","disabled","type"])}}});export{_};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.c5b825ee.js.map
