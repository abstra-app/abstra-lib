import{C as l}from"./Card.0bac4386.js";import{d as M,N as _,bX as d,f as r,bB as u,H as $,aM as G,co as f}from"./outputWidgets.a6c14bb0.js";import{C as i,A as v}from"./CollapsePanel.1c27c5b6.js";import{F as o}from"./Form.feb47a45.js";import{T as c,A as C}from"./Timeline.ba8da5f4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ff683dde-8727-4d54-a270-1f118ff2451e",e._sentryDebugIdIdentifier="sentry-dbid-ff683dde-8727-4d54-a270-1f118ff2451e")}catch{}})();const w=()=>({prefixCls:String,title:u(),description:u(),avatar:u()}),p=M({compatConfig:{MODE:3},name:"ACardMeta",props:w(),slots:Object,setup(e,a){let{slots:n}=a;const{prefixCls:t}=_("card",e);return()=>{const m={[`${t.value}-meta`]:!0},s=d(n,e,"avatar"),g=d(n,e,"title"),b=d(n,e,"description"),A=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,D=g?r("div",{class:`${t.value}-meta-title`},[g]):null,y=b?r("div",{class:`${t.value}-meta-description`},[b]):null,x=D||y?r("div",{class:`${t.value}-meta-detail`},[D,y]):null;return r("div",{class:m},[A,x])}}}),F=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),I=M({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:F(),setup(e,a){let{slots:n}=a;const{prefixCls:t}=_("card",e),m=$(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:m.value},[(s=n.default)===null||s===void 0?void 0:s.call(n)])}}});l.Meta=p;l.Grid=I;l.install=function(e){return e.component(l.name,l),e.component(p.name,p),e.component(I.name,I),e};i.Panel=v;i.install=function(e){return e.component(i.name,i),e.component(v.name,v),e};o.useInjectFormItemContext=G;o.ItemRest=f;o.install=function(e){return e.component(o.name,o),e.component(o.Item.name,o.Item),e.component(f.name,f),e};c.Item=C;c.install=function(e){return e.component(c.name,c),e.component(C.name,C),e};export{I as G,p as M};
//# sourceMappingURL=index.3348c385.js.map
