import{C as o}from"./Card.a79bfd6c.js";import{d as p,ai as g,bU as i,b as r,bF as c,f as y}from"./index.aa181d5a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cbf23eff-a4c7-4ca8-9ebf-3438b830634c",e._sentryDebugIdIdentifier="sentry-dbid-cbf23eff-a4c7-4ca8-9ebf-3438b830634c")}catch{}})();const _=()=>({prefixCls:String,title:c(),description:c(),avatar:c()}),d=p({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),f=i(a,e,"title"),v=i(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=f?r("div",{class:`${t.value}-meta-title`},[f]):null,b=v?r("div",{class:`${t.value}-meta-description`},[v]):null,D=m||b?r("div",{class:`${t.value}-meta-detail`},[m,b]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=p({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=d;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(d.name,d),e.component(u.name,u),e};export{u as G,d as M};
//# sourceMappingURL=index.d45fcbc6.js.map
