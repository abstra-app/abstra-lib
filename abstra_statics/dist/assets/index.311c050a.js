import{C as o}from"./Card.4c6d2170.js";import{d as g,S as b,bB as i,f as r,bj as d,y as D}from"./outputWidgets.fd23be41.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9302a90d-d2e0-4c24-9647-785f3e452003",e._sentryDebugIdIdentifier="sentry-dbid-9302a90d-d2e0-4c24-9647-785f3e452003")}catch{}})();const _=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),c=g({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),v=i(a,e,"title"),f=i(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=v?r("div",{class:`${t.value}-meta-title`},[v]):null,p=f?r("div",{class:`${t.value}-meta-description`},[f]):null,y=m||p?r("div",{class:`${t.value}-meta-detail`},[m,p]):null;return r("div",{class:l},[C,y])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=g({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=b("card",e),l=D(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.311c050a.js.map
