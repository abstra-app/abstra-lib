import{d as r,r as i,o as l,a3 as f,b as u,c,N as b,ad as y}from"./registerWidgets.eddc32f4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e6583d79-ba1f-4edb-9ae9-2f63a7e48694",e._sentryDebugIdIdentifier="sentry-dbid-e6583d79-ba1f-4edb-9ae9-2f63a7e48694")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),f.addAction(o.action)});const a=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=d=>a()),onKeydown:t[1]||(t[1]=y(d=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.93a730d7.js.map
