import{d as b,eH as f,ef as m,o as l,c as p,w as c,u as n,Y as _,e9 as g,b as y,a as v,ea as w,aS as k}from"./index.e2d9b9bf.js";import{A as I,T}from"./TabPane.18981b31.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ca26e95e-765c-4f9b-b01e-d83109d9ed02",e._sentryDebugIdIdentifier="sentry-dbid-ca26e95e-765c-4f9b-b01e-d83109d9ed02")}catch{}})();const B=b({__name:"TablesTabs",setup(e){const a=f(),t=m(),d=String(t.name),u=t.params.projectId,r=[{label:"Tables list",value:"tables"},{label:"Diagram view",value:"tables-diagram"},{label:"Run SQL",value:"sql"}],i=o=>{a.push({name:String(o),params:{projectId:u}})};return(o,D)=>(l(),p(n(T),{"active-key":n(d),options:r,"onUpdate:activeKey":i},{default:c(()=>[(l(),_(k,null,g(r,s=>y(n(I),{key:s.value,name:s.value},{tab:c(()=>[v("span",null,w(s.label),1)]),_:2},1032,["name"])),64))]),_:1},8,["active-key"]))}});export{B as _};
//# sourceMappingURL=TablesTabs.vue_vue_type_script_setup_true_lang.fd9dcd9b.js.map
