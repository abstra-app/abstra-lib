import{d as b,eo as m,ea as p,o as l,c as f,w as u,u as n,Y as _,eb as g,b as y,a as v,e9 as w,aS as k}from"./index.c7bfbac5.js";import{A as I,T}from"./TabPane.125e3c08.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="7e083089-e573-48fe-9677-92600b4aa3e1",e._sentryDebugIdIdentifier="sentry-dbid-7e083089-e573-48fe-9677-92600b4aa3e1")}catch{}})();const B=b({__name:"TablesTabs",setup(e){const a=m(),t=p(),c=String(t.name),d=t.params.projectId,r=[{label:"Tables list",value:"tables"},{label:"Diagram view",value:"tables-diagram"},{label:"Run SQL",value:"sql"}],i=o=>{a.push({name:String(o),params:{projectId:d}})};return(o,D)=>(l(),f(n(T),{"active-key":n(c),options:r,"onUpdate:activeKey":i},{default:u(()=>[(l(),_(k,null,g(r,s=>y(n(I),{key:s.value,name:s.value},{tab:u(()=>[v("span",null,w(s.label),1)]),_:2},1032,["name"])),64))]),_:1},8,["active-key"]))}});export{B as _};
//# sourceMappingURL=TablesTabs.vue_vue_type_script_setup_true_lang.4850c294.js.map
