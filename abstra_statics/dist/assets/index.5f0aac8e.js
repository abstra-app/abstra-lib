import{C as S,A as x}from"./CollapsePanel.63f2c9a8.js";import{d as A,a3 as D,S as E,y as L,f as d,a9 as c,ar as M,ba as O,I as G,J,Y as P,a2 as U,av as Y,da as q,d6 as F,U as W,W as _}from"./outputWidgets.fd23be41.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="1f6d8aec-e731-47a0-9dd4-a3b044e8a4c7",e._sentryDebugIdIdentifier="sentry-dbid-1f6d8aec-e731-47a0-9dd4-a3b044e8a4c7")}catch{}})();S.Panel=x;S.install=function(e){return e.component(S.name,S),e.component(x.name,x),e};const K=()=>({prefixCls:String,color:String,dot:c.any,pending:M(),position:c.oneOf(O("left","right","")).def(""),label:c.any}),v=A({compatConfig:{MODE:3},name:"ATimelineItem",props:D(K(),{color:"blue",pending:!1}),slots:Object,setup(e,i){let{slots:l}=i;const{prefixCls:n}=E("timeline",e),t=L(()=>({[`${n.value}-item`]:!0,[`${n.value}-item-pending`]:e.pending})),u=L(()=>/blue|red|green|gray/.test(e.color||"")?void 0:e.color||"blue"),b=L(()=>({[`${n.value}-item-head`]:!0,[`${n.value}-item-head-${e.color||"blue"}`]:!u.value}));return()=>{var g,p,r;const{label:o=(g=l.label)===null||g===void 0?void 0:g.call(l),dot:a=(p=l.dot)===null||p===void 0?void 0:p.call(l)}=e;return d("li",{class:t.value},[o&&d("div",{class:`${n.value}-item-label`},[o]),d("div",{class:`${n.value}-item-tail`},null),d("div",{class:[b.value,!!a&&`${n.value}-item-head-custom`],style:{borderColor:u.value,color:u.value}},[a]),d("div",{class:`${n.value}-item-content`},[(r=l.default)===null||r===void 0?void 0:r.call(l)])])}}}),Q=e=>{const{componentCls:i}=e;return{[i]:P(P({},U(e)),{margin:0,padding:0,listStyle:"none",[`${i}-item`]:{position:"relative",margin:0,paddingBottom:e.timeLineItemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize,insetInlineStart:(e.timeLineItemHeadSize-e.timeLineItemTailWidth)/2,height:`calc(100% - ${e.timeLineItemHeadSize}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px ${e.lineType} ${e.colorSplit}`},"&-pending":{[`${i}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${i}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.timeLineItemHeadSize,height:e.timeLineItemHeadSize,backgroundColor:e.colorBgContainer,border:`${e.timeLineHeadBorderWidth}px ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize/2,insetInlineStart:e.timeLineItemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.timeLineItemCustomHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.lineWidth,marginInlineStart:e.margin+e.timeLineItemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${i}-item-tail`]:{display:"none"},[`> ${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}}},[`&${i}-alternate,
        &${i}-right,
        &${i}-label`]:{[`${i}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:`-${e.marginXXS}px`,"&-custom":{marginInlineStart:e.timeLineItemTailWidth/2}},"&-left":{[`${i}-item-content`]:{insetInlineStart:`calc(50% - ${e.marginXXS}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}},"&-right":{[`${i}-item-content`]:{width:`calc(50% - ${e.marginSM}px)`,margin:0,textAlign:"end"}}}},[`&${i}-right`]:{[`${i}-item-right`]:{[`${i}-item-tail,
            ${i}-item-head,
            ${i}-item-head-custom`]:{insetInlineStart:`calc(100% - ${(e.timeLineItemHeadSize+e.timeLineItemTailWidth)/2}px)`},[`${i}-item-content`]:{width:`calc(100% - ${e.timeLineItemHeadSize+e.marginXS}px)`}}},[`&${i}-pending
        ${i}-item-last
        ${i}-item-tail`]:{display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`&${i}-reverse
        ${i}-item-last
        ${i}-item-tail`]:{display:"none"},[`&${i}-reverse ${i}-item-pending`]:{[`${i}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}},[`&${i}-label`]:{[`${i}-item-label`]:{position:"absolute",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.timeLineItemTailWidth,width:`calc(50% - ${e.marginSM}px)`,textAlign:"end"},[`${i}-item-right`]:{[`${i}-item-label`]:{insetInlineStart:`calc(50% + ${e.marginSM}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${i}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},Z=G("Timeline",e=>{const i=J(e,{timeLineItemPaddingBottom:e.padding*1.25,timeLineItemHeadSize:10,timeLineItemCustomHeadPaddingVertical:e.paddingXXS,timeLinePaddingInlineEnd:2,timeLineItemTailWidth:e.lineWidthBold,timeLineHeadBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3});return[Q(i)]}),k=()=>({prefixCls:String,pending:c.any,pendingDot:c.any,reverse:M(),mode:c.oneOf(O("left","alternate","right",""))}),f=A({compatConfig:{MODE:3},name:"ATimeline",inheritAttrs:!1,props:D(k(),{reverse:!1,mode:""}),slots:Object,setup(e,i){let{slots:l,attrs:n}=i;const{prefixCls:t,direction:u}=E("timeline",e),[b,g]=Z(t),p=(r,o)=>{const a=r.props||{};return e.mode==="alternate"?a.position==="right"?`${t.value}-item-right`:a.position==="left"?`${t.value}-item-left`:o%2===0?`${t.value}-item-left`:`${t.value}-item-right`:e.mode==="left"?`${t.value}-item-left`:e.mode==="right"?`${t.value}-item-right`:a.position==="right"?`${t.value}-item-right`:""};return()=>{var r,o,a;const{pending:m=(r=l.pending)===null||r===void 0?void 0:r.call(l),pendingDot:X=(o=l.pendingDot)===null||o===void 0?void 0:o.call(l),reverse:I,mode:H}=e,N=typeof m=="boolean"?null:m,y=Y((a=l.default)===null||a===void 0?void 0:a.call(l)),T=m?d(v,{pending:!!m,dot:X||d(q,null,null)},{default:()=>[N]}):null;T&&y.push(T);const C=I?y.reverse():y,z=C.length,B=`${t.value}-item-last`,j=C.map(($,s)=>{const h=s===z-2?B:"",R=s===z-1?B:"";return F($,{class:W([!I&&!!m?h:R,p($,s)])})}),w=C.some($=>{var s,h;return!!(((s=$.props)===null||s===void 0?void 0:s.label)||((h=$.children)===null||h===void 0?void 0:h.label))}),V=W(t.value,{[`${t.value}-pending`]:!!m,[`${t.value}-reverse`]:!!I,[`${t.value}-${H}`]:!!H&&!w,[`${t.value}-label`]:w,[`${t.value}-rtl`]:u.value==="rtl"},n.class,g.value);return b(d("ul",_(_({},n),{},{class:V}),[j]))}}});f.Item=v;f.install=function(e){return e.component(f.name,f),e.component(v.name,v),e};export{v as A,f as T};
//# sourceMappingURL=index.5f0aac8e.js.map
