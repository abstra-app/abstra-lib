import{d as y,r as c,b as p,c as b,w as v,aq as g,ey as m,u as h,bF as w,cx as C}from"./outputWidgets.b1e87772.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="f9d03765-4251-424d-ac57-bbcfc4ef5c89",a._sentryDebugIdIdentifier="sentry-dbid-f9d03765-4251-424d-ac57-bbcfc4ef5c89")}catch{}})();const _=y({__name:"SaveButton",props:{model:{},disabled:{type:Boolean},type:{}},emits:["error"],setup(a,{emit:s}){const n=a,t=c(!1),u=c(null);async function r(){t.value=!0;try{await n.model.save()}catch(e){e instanceof Error&&(s("error",e),C.error({message:"Error",description:e.message}),u.value=e)}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,l,i,f;return p(),b(h(w),{class:m(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),loading:t.value,disabled:(i=e.disabled)!=null?i:!((l=e.model)!=null&&l.hasChanges()),type:(f=e.type)!=null?f:"default",onClick:o[0]||(o[0]=k=>r())},{default:v(()=>[g(" Save ")]),_:1},8,["class","loading","disabled","type"])}}});export{_};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.25c4bd3d.js.map
