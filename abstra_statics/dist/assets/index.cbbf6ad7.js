import{C as o}from"./Card.efc8b28d.js";import{d as b,a1 as g,bH as c,b as r,bq as i,f as y}from"./vue-router.fab2a9a4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="faf069b5-550a-4739-92ca-5afacb87c7c7",e._sentryDebugIdIdentifier="sentry-dbid-faf069b5-550a-4739-92ca-5afacb87c7c7")}catch{}})();const _=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),d=b({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=c(a,e,"avatar"),f=c(a,e,"title"),v=c(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=f?r("div",{class:`${t.value}-meta-title`},[f]):null,p=v?r("div",{class:`${t.value}-meta-description`},[v]):null,D=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=b({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=d;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(d.name,d),e.component(u.name,u),e};export{u as G,d as M};
//# sourceMappingURL=index.cbbf6ad7.js.map
