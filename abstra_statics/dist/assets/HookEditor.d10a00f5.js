import{d as u,ey as f,b as n,er as m,e as h,u as e,f as o,c as g,w as a,bu as k,cy as y,v}from"./registerWidgets.32a97516.js";import{T as b,_ as w,B,a as d}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.e661cda7.js";import{L as I}from"./CircularLoading.d58b4e70.js";import{_ as x,a as C}from"./HookTester.vue_vue_type_script_setup_true_lang.a95d188f.js";import{a as D}from"./asyncComputed.9b3e19e4.js";import{H as E}from"./hooks.77b24cd0.js";import{_ as H}from"./SaveButton.vue_vue_type_script_setup_true_lang.04bc759c.js";import{S,L as $}from"./SmartConsole.bb5ce09f.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.25cff74e.js";import"./Title.fff8b6ce.js";import"./transButton.f078ba96.js";import"./Form.c5db2140.js";import"./index.ba320e0c.js";import"./index.2818ed9b.js";import"./index.335ed09a.js";import"./index.92431587.js";import"./index.941e2bed.js";import"./activeRecord.2e436871.js";import"./pubsub.15b3367b.js";import"./forms.c60c7fb5.js";import"./dashes.02849cba.js";import"./index.e1500a35.js";import"./jobs.05cb6223.js";import"./workspaces.5df11ee4.js";import"./icons.1657b79d.js";import"./uuid.6d9f7e28.js";import"./storage.ea1488a3.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="e1820ac2-5931-4044-b31d-7a75058f7ec5",s._sentryDebugIdIdentifier="sentry-dbid-e1820ac2-5931-4044-b31d-7a75058f7ec5")}catch{}})();const P={class:"page"},T={key:0,class:"loading"},M=u({__name:"HookEditor",setup(s){const r=f(),i=$.create(),{loading:p,result:t}=D(async()=>await E.get(r.params.hookPath)),_=async c=>{t.value&&(t.value.path=c,await t.value.save())};return(c,N)=>{var l;return n(),m(k,null,[h("div",P,[e(p)||!e(t)?(n(),m("div",T,[o(I)])):(n(),g(b,{key:1,class:"editor"},{left:a(()=>[o(B,{link:"/_editor/hooks"})]),right:a(()=>[o(e(y),null,{default:a(()=>[o(L,{path:"hooks"}),o(H,{model:e(t)},null,8,["model"])]),_:1})]),default:a(()=>[o(d,{title:"Debug"},{default:a(()=>[o(x,{class:"content",hook:e(t),"log-service":e(i)},null,8,["hook","log-service"])]),_:1}),o(d,{title:"Settings"},{default:a(()=>[o(C,{class:"content",hook:e(t),onUpdatePath:_},null,8,["hook"])]),_:1})]),_:1})),o(S,{"log-service":e(i),runtime:"hooks"},null,8,["log-service"])]),o(w,{"has-changes":(l=e(t))==null?void 0:l.hasChanges()},null,8,["has-changes"])],64)}}});const mo=v(M,[["__scopeId","data-v-b6c8e500"]]);export{mo as default};
//# sourceMappingURL=HookEditor.d10a00f5.js.map
