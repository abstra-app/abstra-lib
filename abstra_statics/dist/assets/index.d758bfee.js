import{C as o}from"./Card.d40ca5b6.js";import{d as b,a2 as g,bI as d,b as r,br as i,f as y}from"./vue-router.3911c59e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="251d073f-0e3f-40da-9d20-677789c09b3b",e._sentryDebugIdIdentifier="sentry-dbid-251d073f-0e3f-40da-9d20-677789c09b3b")}catch{}})();const _=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),c=b({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=d(a,e,"avatar"),f=d(a,e,"title"),v=d(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=f?r("div",{class:`${t.value}-meta-title`},[f]):null,p=v?r("div",{class:`${t.value}-meta-description`},[v]):null,D=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,D])}}}),I=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=b({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:I(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.d758bfee.js.map
