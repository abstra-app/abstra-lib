import{p as h,q as k}from"./icons.1d8f5d41.js";import{d as f,G as y,b as a,ev as i,e as o,bq as _,eC as S,ez as p,eD as b,v as g,F as I,u as v,ex as r,f as R,I as N,c as C,eE as w,eF as E}from"./outputWidgets.bf3b4f42.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="96461bae-a9f8-4f60-8e1d-aca3395f94bf",s._sentryDebugIdIdentifier="sentry-dbid-96461bae-a9f8-4f60-8e1d-aca3395f94bf")}catch{}})();const $={class:"sidebar-content"},B={class:"section"},D=["onClick"],P=f({__name:"Sidebar",props:{currentRuntime:{},displaySidebar:{type:Boolean},forceResponsivity:{}},emits:["selectRuntime","closeSidebar"],setup(s,{emit:t}){const u=s,c=e=>{m(e.id)||t("selectRuntime",e)},l=y(()=>u.currentRuntime.sidebar.filter(e=>e.visible)),m=e=>e===u.currentRuntime.id;return(e,n)=>(a(),i("div",{class:p(["sidebar",e.forceResponsivity,{open:e.displaySidebar}])},[o("div",$,[o("div",B,[(a(!0),i(_,null,S(l.value,d=>(a(),i("div",{key:d.id,class:p(["item",{active:m(d.id)}]),onClick:J=>c(d)},[o("div",{class:p(["item-title",{open:e.displaySidebar}])},b(d.name),3)],10,D))),128))])])],2))}});const U=g(P,[["__scopeId","data-v-dbb11367"]]),F=s=>(w("data-v-e67cfd1a"),s=s(),E(),s),V={class:"left-side"},q=["d"],z={key:1,class:"brand"},G=["src"],L={key:1,class:"brand-name"},j=F(()=>o("div",null,null,-1)),A={key:0,class:"signed-email"},H=f({__name:"PlayerNavbar",props:{runtime:{},userEmail:{},forceResponsivity:{}},emits:["logout","navigate"],setup(s,{emit:t}){const u=s,c=I({displaySidebar:!1}),l=y(()=>{const e=u.runtime.sidebar;return!e||e.length==0?!1:e.some(n=>n.visible)}),m=e=>t("navigate",e);return(e,n)=>(a(),i(_,null,[l.value||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(a(),i("div",{key:0,class:p(["navbar",l.value&&"background"])},[o("div",V,[l.value?(a(),i("svg",{key:0,class:p(["sidebar-menu-icon",e.forceResponsivity]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:n[0]||(n[0]=d=>c.displaySidebar=!c.displaySidebar)},[o("path",{d:v(h)},null,8,q)],2)):r("",!0),e.runtime.logoUrl||e.runtime.brandName?(a(),i("div",z,[e.runtime.logoUrl?(a(),i("img",{key:0,src:e.runtime.logoUrl,class:"logo-image"},null,8,G)):r("",!0),e.runtime.brandName?(a(),i("p",L,b(e.runtime.brandName),1)):r("",!0)])):r("",!0)]),j,e.userEmail?(a(),i("div",A,[o("span",null,b(e.userEmail),1),R(N,{width:"20",height:"20",class:"logout",path:v(k),fill:"var(--color-main)",onClick:n[1]||(n[1]=d=>t("logout"))},null,8,["path"])])):r("",!0)],2)):r("",!0),l.value?(a(),C(U,{key:1,"current-runtime":e.runtime,"display-sidebar":c.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:m},null,8,["current-runtime","display-sidebar","force-responsivity"])):r("",!0)],64))}});const O=g(H,[["__scopeId","data-v-e67cfd1a"]]);export{O as P};
//# sourceMappingURL=PlayerNavbar.6b24e924.js.map
