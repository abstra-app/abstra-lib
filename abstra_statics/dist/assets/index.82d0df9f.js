import{C as o}from"./Card.9ebfc5b2.js";import{d as g,ah as b,bQ as d,b as r,bE as i,f as y}from"./vue-router.7caacf0a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d06143d9-5364-4c98-9e81-f4411136edad",e._sentryDebugIdIdentifier="sentry-dbid-d06143d9-5364-4c98-9e81-f4411136edad")}catch{}})();const _=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),c=g({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=d(a,e,"avatar"),v=d(a,e,"title"),f=d(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=v?r("div",{class:`${t.value}-meta-title`},[v]):null,p=f?r("div",{class:`${t.value}-meta-description`},[f]):null,D=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=g({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.82d0df9f.js.map
