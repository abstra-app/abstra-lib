import{b as r,u as n}from"./workspaceStore.e979a3ed.js";import{W as c}from"./PlayerConfigProvider.e68a9c15.js";import{d,g as i,r as f,u as o,o as p,c as u,w as l,S as _,b as m}from"./index.f858dbab.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="82cd822c-566f-482d-b419-bab0a299a0ed",t._sentryDebugIdIdentifier="sentry-dbid-82cd822c-566f-482d-b419-bab0a299a0ed")}catch{}})();const h=d({__name:"App",setup(t){const a=r(),e=n();return e.actions.fetch(),i(()=>a.jwt,e.actions.fetch),(w,b)=>{const s=f("RouterView");return o(e).state.workspace?(p(),u(c,{key:0,"main-color":o(e).state.workspace.mainColor,background:o(e).state.workspace.theme,"font-family":o(e).state.workspace.fontFamily,locale:o(e).state.workspace.language},{default:l(()=>[m(s,{style:{height:"100vh",width:"100%"}})]),_:1},8,["main-color","background","font-family","locale"])):_("",!0)}}});export{h as _};
//# sourceMappingURL=App.vue_vue_type_style_index_0_lang.e00c1463.js.map
