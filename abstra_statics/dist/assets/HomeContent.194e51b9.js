import{F as g}from"./PhArrowSquareOut.vue.583b2288.js";import{d as k,I as w,b as o,ev as u,c as d,u as t,w as n,ew as v,bg as h,ar as b,aD as C,eE as x,f as c,eG as I,v as D}from"./outputWidgets.da1326db.js";import"./index.cbb67d79.js";import"./index.414f7ade.js";import{A as m}from"./index.584a1fbb.js";import{a as y}from"./Text.77944bfa.js";import{C as B}from"./Card.7036c4ef.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="bfd7605f-8d32-4e9d-8db6-b8d5bbc20ab6",a._sentryDebugIdIdentifier="sentry-dbid-bfd7605f-8d32-4e9d-8db6-b8d5bbc20ab6")}catch{}})();const F=k({__name:"HomeContent",props:{loading:{type:Boolean},workspace:{}},emits:["form-click"],setup(a,{emit:r}){const p=a,f=w(()=>{var e,i;return(i=(e=p.workspace)==null?void 0:e.sidebar.filter(s=>s.visible))!=null?i:[]});function _(e){r("form-click",e)}return(e,i)=>{var s;return o(),u("div",{class:"container",style:v({backgroundColor:(s=e.workspace)==null?void 0:s.theme})},[e.loading?(o(),d(t(h),{key:0})):f.value.length===0?(o(),d(t(y),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:n(()=>[b(" There are no public forms available ")]),_:1})):(o(),d(t(m),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:n(()=>[(o(!0),u(C,null,x(f.value,l=>(o(),d(t(B),{key:l.id,class:"form-card",onClick:H=>_(l.path)},{default:n(()=>[c(t(m),{gap:"large",align:"center",justify:"space-between"},{default:n(()=>[c(t(y),{style:{"font-size":"18px","font-weight":"500"}},{default:n(()=>[b(I(l.name),1)]),_:2},1024),c(t(g),{color:"#000",width:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))],4)}}});const j=D(F,[["__scopeId","data-v-e246816b"]]);export{j as H};
//# sourceMappingURL=HomeContent.194e51b9.js.map
