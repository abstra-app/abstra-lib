import{d as i,eo as m,ea as p,o as l,c as f,w as d,u as n,Y as _,eb as g,b as y,a as v,e9 as w,aS as k}from"./index.a2df8dac.js";import{A as I,T}from"./TabPane.82a70d51.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="d1033c69-82ab-49d7-bd18-c091b236990d",e._sentryDebugIdIdentifier="sentry-dbid-d1033c69-82ab-49d7-bd18-c091b236990d")}catch{}})();const B=i({__name:"TablesTabs",setup(e){const a=m(),t=p(),c=String(t.name),u=t.params.projectId,r=[{label:"Tables list",value:"tables"},{label:"Diagram view",value:"tables-diagram"},{label:"Run SQL",value:"sql"}],b=o=>{a.push({name:String(o),params:{projectId:u}})};return(o,D)=>(l(),f(n(T),{"active-key":n(c),options:r,"onUpdate:activeKey":b},{default:d(()=>[(l(),_(k,null,g(r,s=>y(n(I),{key:s.value,name:s.value},{tab:d(()=>[v("span",null,w(s.label),1)]),_:2},1032,["name"])),64))]),_:1},8,["active-key"]))}});export{B as _};
//# sourceMappingURL=TablesTabs.vue_vue_type_script_setup_true_lang.e8a9c934.js.map
