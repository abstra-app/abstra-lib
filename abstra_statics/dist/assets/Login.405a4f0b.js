import{_}from"./Login.vue_vue_type_script_setup_true_lang.8061f2ee.js";import{b as m,u as l}from"./workspaceStore.ffa0c8ad.js";import{d as f,eq as b,ed as y,X as g,b as w,u as c,o as k,$ as h}from"./vue-router.cf1db12e.js";import"./Logo.fe3ed927.js";import"./CircularLoading.ecb98baa.js";import"./string.0c961469.js";import"./index.e8a7ff88.js";import"./url.e8b5f4e4.js";import"./colorHelpers.97792dac.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="aa248027-82d8-49e3-9667-14aee0b3e022",e._sentryDebugIdIdentifier="sentry-dbid-aa248027-82d8-49e3-9667-14aee0b3e022")}catch{}})();const v={class:"runner"},I=f({__name:"Login",setup(e){const o=b(),r=y(),i=m(),a=l(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var n,u,d;return k(),g("div",v,[w(_,{"logo-url":(u=(n=c(a).state.workspace)==null?void 0:n.logoUrl)!=null?u:void 0,"brand-name":(d=c(a).state.workspace)==null?void 0:d.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const R=h(I,[["__scopeId","data-v-907be835"]]);export{R as default};
//# sourceMappingURL=Login.405a4f0b.js.map
