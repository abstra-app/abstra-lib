import{F as b}from"./PhArrowSquareOut.vue.0953c482.js";import{d as k,J as w,b as o,ew as u,c,u as t,w as n,ex as h,bh as v,as as m,aE as x,eF as C,f as d,eH as I,x as D}from"./outputWidgets.7250f034.js";import"./index.d88452f7.js";import"./index.b8e62ae1.js";import{A as y}from"./index.b63ed3a3.js";import{a as _}from"./Base.a1fd4e38.js";import{C as F}from"./Card.1c1db27c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="033f45c3-830b-49ad-89fa-756d5ec9a6fc",a._sentryDebugIdIdentifier="sentry-dbid-033f45c3-830b-49ad-89fa-756d5ec9a6fc")}catch{}})();const H=k({__name:"HomeContent",props:{loading:{type:Boolean},workspace:{}},emits:["form-click"],setup(a,{emit:r}){const p=a,f=w(()=>{var e,i;return(i=(e=p.workspace)==null?void 0:e.sidebar.filter(s=>s.visible))!=null?i:[]});function g(e){r("form-click",e)}return(e,i)=>{var s;return o(),u("div",{class:"container",style:h({backgroundColor:(s=e.workspace)==null?void 0:s.theme})},[e.loading?(o(),c(t(v),{key:0})):f.value.length===0?(o(),c(t(_),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:n(()=>[m(" There are no public forms available ")]),_:1})):(o(),c(t(y),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:n(()=>[(o(!0),u(x,null,C(f.value,l=>(o(),c(t(F),{key:l.id,class:"form-card",onClick:B=>g(l.path)},{default:n(()=>[d(t(y),{gap:"large",align:"center",justify:"space-between"},{default:n(()=>[d(t(_),{style:{"font-size":"18px","font-weight":"500"}},{default:n(()=>[m(I(l.name),1)]),_:2},1024),d(t(b),{color:"#000",width:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))],4)}}});const j=D(H,[["__scopeId","data-v-e246816b"]]);export{j as H};
//# sourceMappingURL=HomeContent.b9afc01e.js.map
