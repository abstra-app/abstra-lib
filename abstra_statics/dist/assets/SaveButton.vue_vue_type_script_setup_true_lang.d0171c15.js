import{d as y,r as u,b as p,c as b,w as m,am as v,eZ as g,u as h,bF as w,cz as C}from"./outputWidgets.32e23fb8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="6f01219a-4c39-47dc-9658-846172c96ac7",a._sentryDebugIdIdentifier="sentry-dbid-6f01219a-4c39-47dc-9658-846172c96ac7")}catch{}})();const _=y({__name:"SaveButton",props:{model:{},disabled:{type:Boolean},type:{}},emits:["error"],setup(a,{emit:s}){const n=a,t=u(!1),c=u(null);async function r(){t.value=!0;try{await n.model.save()}catch(e){e instanceof Error&&(s("error",e),C.error({message:"Error",description:e.message}),c.value=e)}finally{t.value=!1}}return addEventListener("keydown",e=>{n.disabled||(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,l,i,f;return p(),b(h(w),{class:g(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),loading:t.value,disabled:(i=e.disabled)!=null?i:!((l=e.model)!=null&&l.hasChanges()),type:(f=e.type)!=null?f:"default",onClick:o[0]||(o[0]=k=>r())},{default:m(()=>[v(" Save ")]),_:1},8,["class","loading","disabled","type"])}}});export{_};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.d0171c15.js.map
