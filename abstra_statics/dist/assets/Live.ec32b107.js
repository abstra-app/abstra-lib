import{d as y,eB as h,b as s,eu as p,f as e,w as a,u as t,c as g,a_ as w,aq as o,bu as k,cE as v}from"./outputWidgets.e4740a46.js";import{a as I}from"./asyncComputed.d2f778f6.js";import{a as j}from"./router.793abf88.js";import{B,a as A}from"./build.583eed8f.js";import"./index.58baa9c3.js";import{P as S}from"./project.bb13a882.js";import{_ as T}from"./component.vue_vue_type_script_setup_true_lang.0cabe0f0.js";import{A as x}from"./Title.8b2b3cfc.js";import{b as C,c as i}from"./Text.27a734ce.js";import"./Base.242f9d87.js";import"./transButton.237bb9ef.js";import"./index.234b04f7.js";import"./gateway.185e1a22.js";import"./record.69f74dba.js";import"./pubsub.5fca0d09.js";import"./Log.4e9da3f5.js";import"./ant-design.6e7474f5.js";import"./index.338a9a3a.js";import"./WarningFilled.d99917ef.js";import"./BaseLayout.227f899b.js";import"./index.6aadfad3.js";import"./isNumeric.75337b1e.js";import"./index.de07fc0e.js";import"./TabPane.e64e881a.js";import"./icons.1f2085e1.js";import"./index.81489ac7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="884ddb5d-7bc6-4329-ac5e-633125772444",r._sentryDebugIdIdentifier="sentry-dbid-884ddb5d-7bc6-4329-ac5e-633125772444")}catch{}})();const D={key:0},L={key:2},it=y({__name:"Live",setup(r){const u=h().params.projectId,{loading:c,result:d}=I(async()=>{const l=(await B.list(u)).find(_=>_.latest);if(!l)return null;const[f,b]=await Promise.all([A.get(l.id),S.get(u)]);return{buildSpec:f,project:b}});return(m,l)=>(s(),p(w,null,[e(t(x),null,{default:a(()=>[o("Live build")]),_:1}),e(t(C),null,{default:a(()=>[o(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),t(c)?(s(),p("div",D,[e(t(k))])):t(d)?(s(),g(T,{key:1,subdomain:t(d).project.subdomain,"is-live":!0,"build-spec":t(d).buildSpec},null,8,["subdomain","build-spec"])):(s(),p("div",L,[e(t(v),{direction:"vertical"},{default:a(()=>[e(t(i),null,{default:a(()=>[o("Install abstra using pip:")]),_:1}),e(t(i),{code:"",copyable:""},{default:a(()=>[o("pip install abstra")]),_:1}),e(t(i),null,{default:a(()=>[o("Start a new project using our CLI")]),_:1}),e(t(i),{code:"",copyable:""},{default:a(()=>[o("abstra serve my-new-project")]),_:1}),e(t(i),null,{default:a(()=>[o(" If you have any questions, please reach out to our "),e(t(j),{href:"https://discord.gg/abstra",target:"_blank"},{default:a(()=>[o(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{it as default};
//# sourceMappingURL=Live.ec32b107.js.map
