import{_}from"./Login.vue_vue_type_script_setup_true_lang.63f8f11a.js";import{b as m,u as f}from"./workspaceStore.35cfa09a.js";import{d as l,eo as b,ea as y,o as g,X as w,b as k,u,$ as h}from"./vue-router.0e1aa95c.js";import"./Logo.1820946f.js";import"./string.9c3270e3.js";import"./CircularLoading.2b3a1c91.js";import"./index.0819ea58.js";import"./index.de6e3d61.js";import"./url.a8d76a6b.js";import"./colorHelpers.a98ca6b8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="3b58f812-09c1-4e40-9ba3-1d0a69b0a4be",e._sentryDebugIdIdentifier="sentry-dbid-3b58f812-09c1-4e40-9ba3-1d0a69b0a4be")}catch{}})();const v={class:"runner"},I=l({__name:"Login",setup(e){const o=b(),r=y(),i=m(),a=f(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var n,c,d;return g(),w("div",v,[k(_,{"logo-url":(c=(n=u(a).state.workspace)==null?void 0:n.logoUrl)!=null?c:void 0,"brand-name":(d=u(a).state.workspace)==null?void 0:d.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const $=h(I,[["__scopeId","data-v-fc57ade6"]]);export{$ as default};
//# sourceMappingURL=Login.b0f837ad.js.map
