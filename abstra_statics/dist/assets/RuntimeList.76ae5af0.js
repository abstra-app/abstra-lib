import{D as v,_ as g}from"./DropdownMenu.97f7c1f3.js";import{L as w}from"./CircularLoading.78245968.js";import{d as I,a as B,b as e,u as p,c as o,er as s,eA as n,c2 as C,bw as u,ez as _,eu as D,ew as b,eq as L,bh as S,eB as T,eC as R,t as N}from"./registerWidgets.d31aafaf.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[l]="adc59bab-7bb9-4bac-8c04-fd38a20645bc",a._sentryDebugIdIdentifier="sentry-dbid-adc59bab-7bb9-4bac-8c04-fd38a20645bc")}catch{}})();const h=a=>(T("data-v-acd019f3"),a=a(),R(),a),U={key:1,class:"runtimes-container"},V={class:"header"},z={class:"title-wrapper"},A={class:"description"},E={key:0,class:"empty-list"},j=h(()=>s("img",{src:g},null,-1)),q={class:"empty-list-title"},x={class:"empty-list-description"},F={key:1},M={key:2},$={key:2,class:"video-section"},G=h(()=>s("h1",null,"See it in action",-1)),H=["src"],J=I({__name:"RuntimeList",props:{loading:{type:Boolean},title:{},description:{},createButtonText:{},emptyTitle:{},videoUrl:{},table:{}},emits:["create"],setup(a,{emit:l}){async function c(){l("create")}return(t,K)=>{const f=B("router-link");return t.loading?(e(),p(w,{key:0,class:"loading-wrapper",justify:"center"})):(e(),o("div",U,[s("div",V,[s("div",z,[s("h1",null,n(t.title),1),s("p",A,n(t.description),1),s("button",{onClick:c},n(t.createButtonText),1)])]),t.table.rows.length===0?(e(),o("div",E,[j,s("div",q,n(t.emptyTitle),1),s("div",x,[C(t.$slots,"empty-description",{},void 0,!0)]),s("button",{onClick:c},n(t.createButtonText),1)])):(e(),o("table",F,[s("thead",null,[(e(!0),o(u,null,_(t.table.columns,(r,d)=>(e(),o("td",{key:d,class:"cell"},n(r.name),1))),128))]),(e(!0),o(u,null,_(t.table.rows,(r,d)=>{var m;return e(),o("tr",{key:d,class:b((m=r.classes)!=null?m:[])},[(e(!0),o(u,null,_(r.cells,(i,k)=>{var y;return e(),o("td",{key:k,class:b((y=i.classes)!=null?y:[])},[i.actions?(e(),p(v,{key:0,title:"Actions","highlight-last":!0,options:i.actions,payload:{key:r.key}},null,8,["options","payload"])):i.link?(e(),p(f,{key:1,to:i.link,class:"runtime-title"},{default:L(()=>[S(n(i.text),1)]),_:2},1032,["to"])):(e(),o("div",M,n(i.text),1))],2)}),128))],2)}),128))])),t.videoUrl?(e(),o("section",$,[G,s("iframe",{class:"runtimes-example-video",src:t.videoUrl,title:"runtimes example",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,H)])):D("",!0)]))}}});const W=N(J,[["__scopeId","data-v-acd019f3"]]);export{W as R};
//# sourceMappingURL=RuntimeList.76ae5af0.js.map
