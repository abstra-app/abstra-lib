import{d as y,eB as h,b as i,eu as c,f as t,w as a,u as e,c as g,a_ as w,aq as o,bu as k,cF as v}from"./outputWidgets.917fb4ad.js";import{a as I}from"./asyncComputed.d5275e24.js";import{a as j}from"./router.573df02a.js";import{B,a as A}from"./build.041be9df.js";import"./index.e9b7db33.js";import{P as S}from"./project.13302dc4.js";import{_ as T}from"./component.vue_vue_type_script_setup_true_lang.005fc88e.js";import{A as x}from"./Title.aa8ab02d.js";import{b as C,c as s}from"./Text.f6205589.js";import"./Base.2f7eb23e.js";import"./transButton.15965f98.js";import"./index.bb987715.js";import"./gateway.b83d205f.js";import"./record.0259e4a5.js";import"./pubsub.c10c8986.js";import"./icons.db72d1e7.js";import"./index.71ae3117.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="f2a297f3-5a1d-4378-8972-dcf14e13f89e",r._sentryDebugIdIdentifier="sentry-dbid-f2a297f3-5a1d-4378-8972-dcf14e13f89e")}catch{}})();const D={key:0},L={key:2},W=y({__name:"Live",setup(r){const u=h().params.projectId,{loading:p,result:l}=I(async()=>{const d=(await B.list(u)).find(b=>b.latest);if(!d)return null;const[m,_]=await Promise.all([A.get(d.id),S.get(u)]);return{buildSpec:m,project:_}});return(f,d)=>(i(),c(w,null,[t(e(x),null,{default:a(()=>[o("Live build")]),_:1}),t(e(C),null,{default:a(()=>[o(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),e(p)?(i(),c("div",D,[t(e(k))])):e(l)?(i(),g(T,{key:1,subdomain:e(l).project.subdomain,"build-spec":e(l).buildSpec},null,8,["subdomain","build-spec"])):(i(),c("div",L,[t(e(v),{direction:"vertical"},{default:a(()=>[t(e(s),null,{default:a(()=>[o("Install abstra using pip:")]),_:1}),t(e(s),{code:"",copyable:""},{default:a(()=>[o("pip install abstra")]),_:1}),t(e(s),null,{default:a(()=>[o("Start a new project using our CLI")]),_:1}),t(e(s),{code:"",copyable:""},{default:a(()=>[o("abstra serve my-new-project")]),_:1}),t(e(s),null,{default:a(()=>[o(" If you have any questions, please reach out to our "),t(e(j),{href:"https://discord.gg/abstra",target:"_blank"},{default:a(()=>[o(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{W as default};
//# sourceMappingURL=Live.677286d3.js.map
