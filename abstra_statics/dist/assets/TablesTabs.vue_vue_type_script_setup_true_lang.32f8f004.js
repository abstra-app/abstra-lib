import{d as i,eo as m,ea as p,o as l,c as f,w as c,u as n,Y as _,eb as g,b as y,a as v,e9 as w,aS as k}from"./index.daa73337.js";import{A as I,T}from"./TabPane.cfcc9b43.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="1e8b8dbc-448b-4d03-b27c-ac6696bf0b47",e._sentryDebugIdIdentifier="sentry-dbid-1e8b8dbc-448b-4d03-b27c-ac6696bf0b47")}catch{}})();const B=i({__name:"TablesTabs",setup(e){const a=m(),t=p(),b=String(t.name),u=t.params.projectId,r=[{label:"Tables list",value:"tables"},{label:"Diagram view",value:"tables-diagram"},{label:"Run SQL",value:"sql"}],d=o=>{a.push({name:String(o),params:{projectId:u}})};return(o,D)=>(l(),f(n(T),{"active-key":n(b),options:r,"onUpdate:activeKey":d},{default:c(()=>[(l(),_(k,null,g(r,s=>y(n(I),{key:s.value,name:s.value},{tab:c(()=>[v("span",null,w(s.label),1)]),_:2},1032,["name"])),64))]),_:1},8,["active-key"]))}});export{B as _};
//# sourceMappingURL=TablesTabs.vue_vue_type_script_setup_true_lang.32f8f004.js.map
