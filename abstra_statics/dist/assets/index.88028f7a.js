import{C as l}from"./Card.cb6747cd.js";import{d as M,N as _,bX as d,f as r,bB as u,H as $,aM as G,co as f}from"./outputWidgets.2096912b.js";import{C as i,A as v}from"./CollapsePanel.9f851ba6.js";import{F as a}from"./Form.effee9fb.js";import{T as c,A as C}from"./Timeline.4042596c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1079722f-4e21-4040-a0a2-7cbfc55a02a6",e._sentryDebugIdIdentifier="sentry-dbid-1079722f-4e21-4040-a0a2-7cbfc55a02a6")}catch{}})();const w=()=>({prefixCls:String,title:u(),description:u(),avatar:u()}),p=M({compatConfig:{MODE:3},name:"ACardMeta",props:w(),slots:Object,setup(e,o){let{slots:n}=o;const{prefixCls:t}=_("card",e);return()=>{const m={[`${t.value}-meta`]:!0},s=d(n,e,"avatar"),b=d(n,e,"title"),g=d(n,e,"description"),A=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,D=b?r("div",{class:`${t.value}-meta-title`},[b]):null,y=g?r("div",{class:`${t.value}-meta-description`},[g]):null,x=D||y?r("div",{class:`${t.value}-meta-detail`},[D,y]):null;return r("div",{class:m},[A,x])}}}),F=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),I=M({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:F(),setup(e,o){let{slots:n}=o;const{prefixCls:t}=_("card",e),m=$(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:m.value},[(s=n.default)===null||s===void 0?void 0:s.call(n)])}}});l.Meta=p;l.Grid=I;l.install=function(e){return e.component(l.name,l),e.component(p.name,p),e.component(I.name,I),e};i.Panel=v;i.install=function(e){return e.component(i.name,i),e.component(v.name,v),e};a.useInjectFormItemContext=G;a.ItemRest=f;a.install=function(e){return e.component(a.name,a),e.component(a.Item.name,a.Item),e.component(f.name,f),e};c.Item=C;c.install=function(e){return e.component(c.name,c),e.component(C.name,C),e};export{I as G,p as M};
//# sourceMappingURL=index.88028f7a.js.map
