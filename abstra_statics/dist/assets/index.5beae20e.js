import{C as o}from"./Card.677e8083.js";import{d as p,S as g,bH as i,f as r,bl as d,y as D}from"./outputWidgets.b4050bc1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e2197405-0b6b-42ff-93b1-2971123bde61",e._sentryDebugIdIdentifier="sentry-dbid-e2197405-0b6b-42ff-93b1-2971123bde61")}catch{}})();const _=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),c=p({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),f=i(a,e,"title"),v=i(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=f?r("div",{class:`${t.value}-meta-title`},[f]):null,b=v?r("div",{class:`${t.value}-meta-description`},[v]):null,y=m||b?r("div",{class:`${t.value}-meta-detail`},[m,b]):null;return r("div",{class:l},[C,y])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=p({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=D(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.5beae20e.js.map
