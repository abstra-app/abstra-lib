import{_}from"./Login.vue_vue_type_script_setup_true_lang.aa2d8de8.js";import{b as m,u as f}from"./workspaceStore.70c98753.js";import{d as l,eo as b,ea as y,o as g,X as w,b as k,u,$ as h}from"./vue-router.6c32e20c.js";import"./Logo.dc56e491.js";import"./string.b4d0e9e4.js";import"./CircularLoading.75613110.js";import"./index.a5bc7139.js";import"./index.6a1ae629.js";import"./url.840dc46d.js";import"./colorHelpers.fb9a9b24.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9bdbada4-ea3d-4def-8810-d3e53aab7b37",e._sentryDebugIdIdentifier="sentry-dbid-9bdbada4-ea3d-4def-8810-d3e53aab7b37")}catch{}})();const v={class:"runner"},I=l({__name:"Login",setup(e){const o=b(),a=y(),i=m(),s=f(),p=async()=>{await i.signUp();const{redirect:r,...t}=a.query;if(r){await o.push({path:r,query:t,params:a.params});return}o.push({name:"playerHome",query:t})};return(r,t)=>{var n,d,c;return g(),w("div",v,[k(_,{"logo-url":(d=(n=u(s).state.workspace)==null?void 0:n.logoUrl)!=null?d:void 0,"brand-name":(c=u(s).state.workspace)==null?void 0:c.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const $=h(I,[["__scopeId","data-v-fc57ade6"]]);export{$ as default};
//# sourceMappingURL=Login.3d33c463.js.map
