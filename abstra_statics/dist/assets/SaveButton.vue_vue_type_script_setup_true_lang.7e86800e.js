import{d as c,r as f,b as y,c as p,w as v,aq as b,ez as g,u as m,bO as w,cw as h}from"./outputWidgets.26ad1119.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="4897c134-72ef-45fa-89a7-3356da17ac24",a._sentryDebugIdIdentifier="sentry-dbid-4897c134-72ef-45fa-89a7-3356da17ac24")}catch{}})();const k=c({__name:"SaveButton",props:{model:{},disabled:{type:Boolean}},emits:["error"],setup(a,{emit:s}){const n=a,t=f(!1),u=f(null);async function r(){t.value=!0;try{await n.model.save()}catch(e){e instanceof Error&&(s("error",e),h.error({message:"Error",description:e.message}),u.value=e)}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,l,i;return y(),p(m(w),{class:g(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),loading:t.value,disabled:(i=e.disabled)!=null?i:!((l=e.model)!=null&&l.hasChanges()),onClick:o[0]||(o[0]=C=>r())},{default:v(()=>[b(" Save ")]),_:1},8,["class","loading","disabled"])}}});export{k as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.7e86800e.js.map
