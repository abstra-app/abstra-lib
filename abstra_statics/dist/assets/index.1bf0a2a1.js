import{C as l}from"./Card.5349efbe.js";import{d as C,L as I,bQ as c,f as r,bn as d,G as _,aL as M,cl as m}from"./outputWidgets.64a2583c.js";import{F as n}from"./Form.833081c3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1d4d169e-d8a8-407a-860a-3b911c85e6f5",e._sentryDebugIdIdentifier="sentry-dbid-1d4d169e-d8a8-407a-860a-3b911c85e6f5")}catch{}})();const x=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),u=C({compatConfig:{MODE:3},name:"ACardMeta",props:x(),slots:Object,setup(e,o){let{slots:a}=o;const{prefixCls:t}=I("card",e);return()=>{const i={[`${t.value}-meta`]:!0},s=c(a,e,"avatar"),v=c(a,e,"title"),p=c(a,e,"description"),D=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,b=v?r("div",{class:`${t.value}-meta-title`},[v]):null,g=p?r("div",{class:`${t.value}-meta-description`},[p]):null,y=b||g?r("div",{class:`${t.value}-meta-detail`},[b,g]):null;return r("div",{class:i},[D,y])}}}),G=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),f=C({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:G(),setup(e,o){let{slots:a}=o;const{prefixCls:t}=I("card",e),i=_(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:i.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});l.Meta=u;l.Grid=f;l.install=function(e){return e.component(l.name,l),e.component(u.name,u),e.component(f.name,f),e};n.useInjectFormItemContext=M;n.ItemRest=m;n.install=function(e){return e.component(n.name,n),e.component(n.Item.name,n.Item),e.component(m.name,m),e};export{f as G,u as M};
//# sourceMappingURL=index.1bf0a2a1.js.map
