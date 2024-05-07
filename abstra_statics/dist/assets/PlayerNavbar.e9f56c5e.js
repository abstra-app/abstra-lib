import{d as w,Z as f,J as g,b as t,ew as n,dl as $,ey as u,eB as B,e as r,aE as V,eF as z,eA as Z,eH as k,x as A,I as E,eK as I,c as h,u as p,w as b,f as _,as as H,bG as C,ex as P,cA as x}from"./outputWidgets.2f687470.js";import{G as R}from"./PhKanban.vue.9c215f37.js";import{F as T}from"./PhSignOut.vue.cbdacfa7.js";import{A as U}from"./index.499440a5.js";import{A as G}from"./Text.42a672bc.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="6ab87891-2c90-4c90-9a2d-463d529452a8",l._sentryDebugIdIdentifier="sentry-dbid-6ab87891-2c90-4c90-9a2d-463d529452a8")}catch{}})();const K=["width","height","fill","transform"],L={key:0},F=r("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"},null,-1),j=[F],q={key:1},J=r("path",{d:"M216,64V192H40V64Z",opacity:"0.2"},null,-1),W=r("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"},null,-1),O=[J,W],Q={key:2},X=r("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"},null,-1),Y=[X],ee={key:3},ae=r("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"},null,-1),te=[ae],se={key:4},re=r("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"},null,-1),ne=[re],oe={key:5},le=r("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"},null,-1),ie=[le],de={name:"PhList"},ue=w({...de,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(l){const o=l,d=f("weight","regular"),y=f("size","1em"),c=f("color","currentColor"),v=f("mirrored",!1),a=g(()=>{var s;return(s=o.weight)!=null?s:d}),m=g(()=>{var s;return(s=o.size)!=null?s:y}),e=g(()=>{var s;return(s=o.color)!=null?s:c}),i=g(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:v?"scale(-1, 1)":void 0);return(s,D)=>(t(),n("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:e.value,transform:i.value},s.$attrs),[$(s.$slots,"default"),a.value==="bold"?(t(),n("g",L,j)):a.value==="duotone"?(t(),n("g",q,O)):a.value==="fill"?(t(),n("g",Q,Y)):a.value==="light"?(t(),n("g",ee,te)):a.value==="regular"?(t(),n("g",se,ne)):a.value==="thin"?(t(),n("g",oe,ie)):u("",!0)],16,K))}}),ce={class:"sidebar-content"},pe={class:"section"},ye=["onClick"],me={class:"item-title"},ve=w({__name:"Sidebar",props:{runnerData:{},displaySidebar:{type:Boolean}},emits:["selectRuntime","closeSidebar"],setup(l,{emit:o}){const d=l,y=a=>{v(a.id)||o("selectRuntime",a)},c=g(()=>{var a;return(a=d.runnerData)==null?void 0:a.sidebar.filter(m=>m.visible)}),v=a=>!d.runnerData||!("id"in d.runnerData)?!1:d.runnerData.id===a;return(a,m)=>(t(),n("div",{class:Z(["sidebar",{open:a.displaySidebar}])},[r("div",ce,[r("div",pe,[(t(!0),n(V,null,z(c.value,e=>(t(),n("div",{key:e.id,class:Z(["item",{active:v(e.id)}]),onClick:i=>y(e)},[r("div",me,k(e.name),1)],10,ye))),128))])])],2))}});const be=A(ve,[["__scopeId","data-v-6ceb149d"]]),ge={class:"left-side"},_e={key:1,class:"brand"},fe=["src"],he={key:1,class:"brand-name"},He={class:"right-side"},ke={style:{display:"flex",gap:"5px"}},De={style:{display:"flex","flex-direction":"column",gap:"10px"}},Ze={style:{display:"flex",gap:"5px"}},we=w({__name:"PlayerNavbar",props:{runnerData:{},userEmail:{},isKanbanVisible:{type:Boolean},mainColor:{}},emits:["logout","navigate"],setup(l,{emit:o}){const d=l,y=E({displaySidebar:!1}),c=g(()=>{var i;const e=(i=d.runnerData)==null?void 0:i.sidebar;return!e||e.length==0?!1:e.some(s=>s.visible)}),v=I(),a=()=>{v.push({name:"playerThreads"})},m=e=>o("navigate",e);return(e,i)=>{var s,D,S,M;return c.value||((s=e.runnerData)==null?void 0:s.logoUrl)||((D=e.runnerData)==null?void 0:D.brandName)||e.userEmail?(t(),n("header",{key:0,class:Z(["navbar",c.value&&"background"])},[r("div",ge,[c.value?(t(),h(p(ue),{key:0,class:"sidebar-menu-icon",onClick:i[0]||(i[0]=N=>y.displaySidebar=!y.displaySidebar)})):u("",!0),((S=e.runnerData)==null?void 0:S.logoUrl)||((M=e.runnerData)==null?void 0:M.brandName)?(t(),n("div",_e,[e.runnerData.logoUrl?(t(),n("img",{key:0,src:e.runnerData.logoUrl,class:"logo-image"},null,8,fe)):u("",!0),e.runnerData.brandName?(t(),n("p",he,k(e.runnerData.brandName),1)):u("",!0)])):u("",!0)]),r("div",He,[e.isKanbanVisible?(t(),h(p(C),{key:0,type:"text",onClick:a},{default:b(()=>[r("div",ke,[_(p(R),{size:"20"}),H(" Threads ")])]),_:1})):u("",!0),e.userEmail?(t(),h(p(x),{key:1,placement:"bottomRight"},{content:b(()=>[r("div",De,[_(p(G),{size:"small",type:"secondary"},{default:b(()=>[H(k(e.userEmail),1)]),_:1}),_(p(C),{type:"text",onClick:i[1]||(i[1]=N=>o("logout"))},{default:b(()=>[r("div",Ze,[_(p(T),{size:"20"}),H(" Logout ")])]),_:1})])]),default:b(()=>[_(p(U),{shape:"square",size:"small",style:P({backgroundColor:e.mainColor})},{default:b(()=>[H(k(e.userEmail[0].toUpperCase()),1)]),_:1},8,["style"])]),_:1})):u("",!0)]),c.value?(t(),h(be,{key:0,"runner-data":e.runnerData,"display-sidebar":y.displaySidebar,onSelectRuntime:m},null,8,["runner-data","display-sidebar"])):u("",!0)],2)):u("",!0)}}});const $e=A(we,[["__scopeId","data-v-08d110a2"]]);export{$e as P};
//# sourceMappingURL=PlayerNavbar.e9f56c5e.js.map
