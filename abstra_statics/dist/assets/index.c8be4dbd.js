import{C as o}from"./Card.f917d4ad.js";import{d as p,ah as g,bQ as c,b as r,bE as i,f as y}from"./vue-router.8550d197.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71271f86-0d47-4c0b-a48b-7244ceb0c3c5",e._sentryDebugIdIdentifier="sentry-dbid-71271f86-0d47-4c0b-a48b-7244ceb0c3c5")}catch{}})();const _=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),d=p({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=c(a,e,"avatar"),v=c(a,e,"title"),f=c(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=v?r("div",{class:`${t.value}-meta-title`},[v]):null,b=f?r("div",{class:`${t.value}-meta-description`},[f]):null,D=m||b?r("div",{class:`${t.value}-meta-detail`},[m,b]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=p({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=d;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(d.name,d),e.component(u.name,u),e};export{u as G,d as M};
//# sourceMappingURL=index.c8be4dbd.js.map
