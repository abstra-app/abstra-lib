import{d as u,eM as f,I as l,o as _,K as h,f as p,v as g}from"./outputWidgets.b1051bf6.js";import{E as m}from"./ExclamationCircleOutlined.04922592.js";import{M as v}from"./Modal.0ff10da6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="d4a643d9-bcaa-4612-9020-c92ed9fe2d3c",n._sentryDebugIdIdentifier="sentry-dbid-d4a643d9-bcaa-4612-9020-c92ed9fe2d3c")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",y=u({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),i=()=>{window.addEventListener("beforeunload",o)};f(async(e,w,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{v.confirm({title:"You have unsaved changes.",icon:p(m),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?i():t();return l(()=>a.hasChanges,d),_(()=>d(a.hasChanges)),h(t),()=>{}}});const E=g(y,[["__scopeId","data-v-0a2660df"]]);export{E as U};
//# sourceMappingURL=UnsavedChangesHandler.8758c505.js.map
