import{d as r,r as i,o as c,eO as l,b as f,er as u,eA as p,eM as y}from"./registerWidgets.ca57da3e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7445cede-42ff-4d92-9c8a-34adb7c52e36",e._sentryDebugIdIdentifier="sentry-dbid-7445cede-42ff-4d92-9c8a-34adb7c52e36")}catch{}})();const m=r({__name:"ActionButton",props:{action:{},displayName:{}},emits:["click"],setup(e,{emit:n}){const o=e,s=i(null);return c(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)}),(a,t)=>(f(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=d=>n("click")),onKeydown:t[1]||(t[1]=y(d=>n("click"),["enter"]))},p(a.displayName),545))}});export{m as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.fdeff461.js.map
