import{d as i,r as d,o as c,a5 as f,b as l,c as u,N as y,af as m}from"./registerWidgets.6b985ae3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c671d2a3-af0e-4421-a372-2ec7f8542e2c",e._sentryDebugIdIdentifier="sentry-dbid-c671d2a3-af0e-4421-a372-2ec7f8542e2c")}catch{}})();const g=i({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=d(null);c(()=>{s.value&&o.action.setElement(s.value),f.addAction(o.action)});const a=()=>n("next");return(p,t)=>(l(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=r=>a()),onKeydown:t[1]||(t[1]=m(r=>a(),["enter"]))},y(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.fdfae6be.js.map
