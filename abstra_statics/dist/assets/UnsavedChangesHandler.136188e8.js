import{d as l,eO as f,K as _,o as h,O as p,dl as g,f as m,x as v}from"./outputWidgets.949e4725.js";import{E as y}from"./ExclamationCircleOutlined.57d3ed68.js";import{M as b}from"./Modal.780991bb.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="190e01d2-362c-4b10-83be-246eea5a6ca7",n._sentryDebugIdIdentifier="sentry-dbid-190e01d2-362c-4b10-83be-246eea5a6ca7")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",w=l({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),i=()=>{window.addEventListener("beforeunload",o)};f(async(e,u,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{b.confirm({title:"You have unsaved changes.",icon:m(y),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?i():t();return _(()=>a.hasChanges,d),h(()=>d(a.hasChanges)),p(t),(e,u)=>g(e.$slots,"default",{},void 0,!0)}});const x=v(w,[["__scopeId","data-v-79207dcb"]]);export{x as U};
//# sourceMappingURL=UnsavedChangesHandler.136188e8.js.map
