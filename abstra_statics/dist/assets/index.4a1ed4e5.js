import{C as l}from"./Card.f309e2bc.js";import{d as C,L as I,bQ as i,f as r,bn as d,G as _,aL as M,cl as m}from"./outputWidgets.98b19ac3.js";import{F as n}from"./Form.b6478e2b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="42acdb61-d3c5-44a0-a0be-ea4ed7a76657",e._sentryDebugIdIdentifier="sentry-dbid-42acdb61-d3c5-44a0-a0be-ea4ed7a76657")}catch{}})();const x=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),u=C({compatConfig:{MODE:3},name:"ACardMeta",props:x(),slots:Object,setup(e,o){let{slots:a}=o;const{prefixCls:t}=I("card",e);return()=>{const c={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),f=i(a,e,"title"),b=i(a,e,"description"),D=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,p=f?r("div",{class:`${t.value}-meta-title`},[f]):null,g=b?r("div",{class:`${t.value}-meta-description`},[b]):null,y=p||g?r("div",{class:`${t.value}-meta-detail`},[p,g]):null;return r("div",{class:c},[D,y])}}}),G=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),v=C({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:G(),setup(e,o){let{slots:a}=o;const{prefixCls:t}=I("card",e),c=_(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:c.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});l.Meta=u;l.Grid=v;l.install=function(e){return e.component(l.name,l),e.component(u.name,u),e.component(v.name,v),e};n.useInjectFormItemContext=M;n.ItemRest=m;n.install=function(e){return e.component(n.name,n),e.component(n.Item.name,n.Item),e.component(m.name,m),e};export{v as G,u as M};
//# sourceMappingURL=index.4a1ed4e5.js.map
