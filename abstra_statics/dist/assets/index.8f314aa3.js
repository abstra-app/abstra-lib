import{C as o}from"./Card.741d70cf.js";import{d as b,ah as g,bQ as c,b as r,bE as d,f as y}from"./vue-router.274d2c06.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dc4761cd-c57a-4696-92bd-d4417c719c4b",e._sentryDebugIdIdentifier="sentry-dbid-dc4761cd-c57a-4696-92bd-d4417c719c4b")}catch{}})();const _=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),i=b({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=c(a,e,"avatar"),v=c(a,e,"title"),m=c(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,f=v?r("div",{class:`${t.value}-meta-title`},[v]):null,p=m?r("div",{class:`${t.value}-meta-description`},[m]):null,D=f||p?r("div",{class:`${t.value}-meta-detail`},[f,p]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=b({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=i;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(i.name,i),e.component(u.name,u),e};export{u as G,i as M};
//# sourceMappingURL=index.8f314aa3.js.map
