import{_ as k}from"./logo.084e5d7c.js";import{q as i,b as s,c as o,O as u,Q as p,x as t,d as b,H as I,a as x,z as d,N as g,e as _,w as m,U as f,F as $,L as w,D as L,ar as N}from"./registerWidgets.deaf8486.js";import{p as l}from"./passwordlessManager.6fe3b008.js";import{a as C}from"./asyncComputed.aede4aef.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="09deda0d-bd06-4920-ab8f-741f0d4edd43",e._sentryDebugIdIdentifier="sentry-dbid-09deda0d-bd06-4920-ab8f-741f0d4edd43")}catch{}})();const B={},v=e=>(u("data-v-439be421"),e=e(),p(),e),D={class:"logo"},S=v(()=>t("img",{class:"logo-img",src:k,alt:"Abstra cloud logo"},null,-1)),V=v(()=>t("span",null,"Abstra Cloud",-1)),U=[S,V];function A(e,a){return s(),o("div",D,U)}const E=i(B,[["render",A],["__scopeId","data-v-439be421"]]),F={key:0},R={key:1,class:"logged"},q={class:"author-email"},z={key:2},H=b({__name:"LoginBlock",setup(e){const a=I(),{result:n,loading:c,refetch:r}=C(async()=>l.getUser());function h(){l.removeUser(),r(),a.push({name:"login"})}return(P,W)=>{const y=x("router-link");return d(c)?(s(),o("div",F,"loading...")):d(n)?(s(),o("div",R,[t("span",q,g(d(n).claims.email),1),t("button",{class:"btn",onClick:h},"Logout")])):(s(),o("div",z,[_(y,{class:"btn",to:"/login"},{default:m(()=>[f("Login")]),_:1})]))}}});const M=i(H,[["__scopeId","data-v-6c08207b"]]),O=e=>(u("data-v-cf48b8cc"),e=e(),p(),e),Q={class:"nav"},T={class:"left"},j={key:0,class:"breadcrumb-container"},G=O(()=>t("span",{class:"divider"},">",-1)),J={class:"right"},K=b({__name:"Navbar",props:{breadcrumb:null},setup(e){return(a,n)=>(s(),o("nav",Q,[t("div",T,[_(E),e.breadcrumb?(s(),o("div",j,[(s(!0),o($,null,w(e.breadcrumb,(c,r)=>(s(),o("span",{key:r,class:"breadcrumb-item"},[_(d(N),{class:"breadcrumb-link",to:c.path},{default:m(()=>[f(g(c.label),1)]),_:2},1032,["to"]),G]))),128))])):L("",!0)]),t("div",J,[_(M)])]))}});const se=i(K,[["__scopeId","data-v-cf48b8cc"]]);export{se as N};
//# sourceMappingURL=Navbar.070bf0b6.js.map
