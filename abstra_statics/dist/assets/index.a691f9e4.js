import{C as o}from"./Card.3815c904.js";import{d as b,a8 as g,bM as i,b as r,bw as c,f as y}from"./vue-router.33ac8cf0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b05af844-66f5-424c-9638-62c2cd404b40",e._sentryDebugIdIdentifier="sentry-dbid-b05af844-66f5-424c-9638-62c2cd404b40")}catch{}})();const M=()=>({prefixCls:String,title:c(),description:c(),avatar:c()}),d=b({compatConfig:{MODE:3},name:"ACardMeta",props:M(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),f=i(a,e,"title"),v=i(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=f?r("div",{class:`${t.value}-meta-title`},[f]):null,p=v?r("div",{class:`${t.value}-meta-description`},[v]):null,D=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,D])}}}),_=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=b({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:_(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=d;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(d.name,d),e.component(u.name,u),e};export{u as G,d as M};
//# sourceMappingURL=index.a691f9e4.js.map
