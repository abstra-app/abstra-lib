import{_}from"./Login.vue_vue_type_script_setup_true_lang.c7e7d77f.js";import{b as m,u as f}from"./workspaceStore.5473c3a8.js";import{d as l,eo as b,ea as y,o as g,X as w,b as k,u,$ as h}from"./vue-router.15b5a782.js";import"./Logo.cd06ebde.js";import"./string.5b3e63a6.js";import"./CircularLoading.e20030ec.js";import"./index.5ce93393.js";import"./index.74cf82fa.js";import"./url.81731733.js";import"./colorHelpers.5a44de93.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="230dba43-6c20-4371-8ba4-9ba1089b5334",e._sentryDebugIdIdentifier="sentry-dbid-230dba43-6c20-4371-8ba4-9ba1089b5334")}catch{}})();const v={class:"runner"},I=l({__name:"Login",setup(e){const o=b(),r=y(),i=m(),a=f(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var n,c,d;return g(),w("div",v,[k(_,{"logo-url":(c=(n=u(a).state.workspace)==null?void 0:n.logoUrl)!=null?c:void 0,"brand-name":(d=u(a).state.workspace)==null?void 0:d.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const $=h(I,[["__scopeId","data-v-fc57ade6"]]);export{$ as default};
//# sourceMappingURL=Login.80fc6d56.js.map
