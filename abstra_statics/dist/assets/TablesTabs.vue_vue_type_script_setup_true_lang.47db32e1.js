import{d as b,eo as f,ea as m,o as l,c as p,w as c,u as n,Y as _,eb as g,b as y,a as v,e9 as w,aS as k}from"./index.2dd5159c.js";import{A as I,T}from"./TabPane.fee59367.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="001fcd47-4e26-4e20-a8ba-32fa5e1c2ef7",e._sentryDebugIdIdentifier="sentry-dbid-001fcd47-4e26-4e20-a8ba-32fa5e1c2ef7")}catch{}})();const B=b({__name:"TablesTabs",setup(e){const a=f(),t=m(),u=String(t.name),d=t.params.projectId,r=[{label:"Tables list",value:"tables"},{label:"Diagram view",value:"tables-diagram"},{label:"Run SQL",value:"sql"}],i=o=>{a.push({name:String(o),params:{projectId:d}})};return(o,D)=>(l(),p(n(T),{"active-key":n(u),options:r,"onUpdate:activeKey":i},{default:c(()=>[(l(),_(k,null,g(r,s=>y(n(I),{key:s.value,name:s.value},{tab:c(()=>[v("span",null,w(s.label),1)]),_:2},1032,["name"])),64))]),_:1},8,["active-key"]))}});export{B as _};
//# sourceMappingURL=TablesTabs.vue_vue_type_script_setup_true_lang.47db32e1.js.map
