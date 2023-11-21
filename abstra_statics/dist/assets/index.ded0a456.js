import{d as W,G as x,F as Oe,r as J,H as ee,K as Ie,U as s,f as m,N as Z,L as re,b7 as Be,az as ge,a5 as X,z as Fe,ap as L,B as ze,dd as se,Z as ie,Q as P,de as be,aw as De,af as Ee,bc as Ae,bd as Re,be as He,bf as Me,an as ve,bN as ke,bK as We,bL as je,d1 as Ze,df as ce,b3 as ue,O as Le,dg as de,A as _e,dh as Ve,di as Ke,$ as Qe,dj as Xe,bW as Ue,E as M,u as Ye,dk as Ge}from"./outputWidgets.4bfd26d4.js";import{i as qe}from"./isNumeric.75337b1e.js";import{M as w}from"./transButton.4fa41b3f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3e251ee1-fad9-4f36-8a3b-4de12da01bb8",e._sentryDebugIdIdentifier="sentry-dbid-3e251ee1-fad9-4f36-8a3b-4de12da01bb8")}catch{}})();function fe(e){let{prefixCls:t,value:a,current:o,offset:n=0}=e,i;return n&&(i={position:"absolute",top:`${n}00%`,left:0}),m("p",{style:i,class:Z(`${t}-only-unit`,{current:o})},[a])}function Je(e,t,a){let o=e,n=0;for(;(o+10)%10!==t;)o+=a,n+=a;return n}const et=W({compatConfig:{MODE:3},name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup(e){const t=x(()=>Number(e.value)),a=x(()=>Math.abs(e.count)),o=Oe({prevValue:t.value,prevCount:a.value}),n=()=>{o.prevValue=t.value,o.prevCount=a.value},i=J();return ee(t,()=>{clearTimeout(i.value),i.value=setTimeout(()=>{n()},1e3)},{flush:"post"}),Ie(()=>{clearTimeout(i.value)}),()=>{let g,v={};const d=t.value;if(o.prevValue===d||Number.isNaN(d)||Number.isNaN(o.prevValue))g=[fe(s(s({},e),{current:!0}))],v={transition:"none"};else{g=[];const u=d+10,c=[];for(let l=d;l<=u;l+=1)c.push(l);const r=c.findIndex(l=>l%10===o.prevValue);g=c.map((l,b)=>{const p=l%10;return fe(s(s({},e),{value:p,offset:b-r,current:b===r}))});const f=o.prevCount<a.value?1:-1;v={transform:`translateY(${-Je(o.prevValue,d,f)}00%)`}}return m("span",{class:`${e.prefixCls}-only`,style:v,onTransitionend:()=>n()},[g])}}});var tt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a};const ot={prefixCls:String,count:X.any,component:String,title:X.any,show:Boolean},nt=W({compatConfig:{MODE:3},name:"ScrollNumber",inheritAttrs:!1,props:ot,setup(e,t){let{attrs:a,slots:o}=t;const{prefixCls:n}=re("scroll-number",e);return()=>{var i;const g=s(s({},e),a),{prefixCls:v,count:d,title:u,show:c,component:r="sup",class:f,style:l}=g,b=tt(g,["prefixCls","count","title","show","component","class","style"]),p=s(s({},b),{style:l,"data-show":e.show,class:Z(n.value,f),title:u});let C=d;if(d&&Number(d)%1===0){const y=String(d).split("");C=y.map((h,T)=>m(et,{prefixCls:n.value,count:Number(d),value:h,key:y.length-T},null))}l&&l.borderColor&&(p.style=s(s({},l),{boxShadow:`0 0 0 1px ${l.borderColor} inset`}));const $=Be((i=o.default)===null||i===void 0?void 0:i.call(o));return $&&$.length?ge($,{class:Z(`${n.value}-custom-component`)},!1):m(r,p,{default:()=>[C]})}}}),at=new L("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),lt=new L("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),rt=new L("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),st=new L("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),it=new L("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),ct=new L("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),ut=e=>{const{componentCls:t,iconCls:a,antCls:o,badgeFontHeight:n,badgeShadowSize:i,badgeHeightSm:g,motionDurationSlow:v,badgeStatusSize:d,marginXS:u,badgeRibbonOffset:c}=e,r=`${o}-scroll-number`,f=`${o}-ribbon`,l=`${o}-ribbon-wrapper`,b=se(e,(C,$)=>{let{darkColor:y}=$;return{[`&${t} ${t}-color-${C}`]:{background:y,[`&:not(${t}-count)`]:{color:y}}}}),p=se(e,(C,$)=>{let{darkColor:y}=$;return{[`&${f}-color-${C}`]:{background:y,color:y}}});return{[t]:s(s(s(s({},ie(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${t}-count`]:{zIndex:e.badgeZIndex,minWidth:e.badgeHeight,height:e.badgeHeight,color:e.badgeTextColor,fontWeight:e.badgeFontWeight,fontSize:e.badgeFontSize,lineHeight:`${e.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:e.badgeHeight/2,boxShadow:`0 0 0 ${i}px ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${t}-count-sm`]:{minWidth:g,height:g,fontSize:e.badgeFontSizeSm,lineHeight:`${g}px`,borderRadius:g/2},[`${t}-multiple-words`]:{padding:`0 ${e.paddingXS}px`},[`${t}-dot`]:{zIndex:e.badgeZIndex,width:e.badgeDotSize,minWidth:e.badgeDotSize,height:e.badgeDotSize,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${i}px ${e.badgeShadowColor}`},[`${t}-dot${r}`]:{transition:`background ${v}`},[`${t}-count, ${t}-dot, ${r}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${a}-spin`]:{animationName:ct,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${t}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${t}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:d,height:d,verticalAlign:"middle",borderRadius:"50%"},[`${t}-status-success`]:{backgroundColor:e.colorSuccess},[`${t}-status-processing`]:{overflow:"visible",color:e.colorPrimary,backgroundColor:e.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:i,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:at,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${t}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${t}-status-error`]:{backgroundColor:e.colorError},[`${t}-status-warning`]:{backgroundColor:e.colorWarning},[`${t}-status-text`]:{marginInlineStart:u,color:e.colorText,fontSize:e.fontSize}}}),b),{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:lt,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${t}-zoom-leave`]:{animationName:rt,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${t}-not-a-wrapper`]:{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:st,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${t}-zoom-leave`]:{animationName:it,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${t}-status)`]:{verticalAlign:"middle"},[`${r}-custom-component, ${t}-count`]:{transform:"none"},[`${r}-custom-component, ${r}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${r}`]:{overflow:"hidden",[`${r}-only`]:{position:"relative",display:"inline-block",height:e.badgeHeight,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${r}-only-unit`]:{height:e.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${r}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${t}-count, ${t}-dot, ${r}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${l}`]:{position:"relative"},[`${f}`]:s(s(s(s({},ie(e)),{position:"absolute",top:u,padding:`0 ${e.paddingXS}px`,color:e.colorPrimary,lineHeight:`${n}px`,whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${f}-text`]:{color:e.colorTextLightSolid},[`${f}-corner`]:{position:"absolute",top:"100%",width:c,height:c,color:"currentcolor",border:`${c/2}px solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),p),{[`&${f}-placement-end`]:{insetInlineEnd:-c,borderEndEndRadius:0,[`${f}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${f}-placement-start`]:{insetInlineStart:-c,borderEndStartRadius:0,[`${f}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},pe=Fe("Badge",e=>{const{fontSize:t,lineHeight:a,fontSizeSM:o,lineWidth:n,marginXS:i,colorBorderBg:g}=e,v=Math.round(t*a),d=n,u="auto",c=v-2*d,r=e.colorBgContainer,f="normal",l=o,b=e.colorError,p=e.colorErrorHover,C=t,$=o/2,y=o,h=o/2,T=ze(e,{badgeFontHeight:v,badgeShadowSize:d,badgeZIndex:u,badgeHeight:c,badgeTextColor:r,badgeFontWeight:f,badgeFontSize:l,badgeColor:b,badgeColorHover:p,badgeShadowColor:g,badgeHeightSm:C,badgeDotSize:$,badgeFontSizeSm:y,badgeStatusSize:h,badgeProcessingDuration:"1.2s",badgeRibbonOffset:i,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[ut(T)]});var dt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a};const ft=()=>({prefix:String,color:{type:String},text:X.any,placement:{type:String,default:"end"}}),le=W({compatConfig:{MODE:3},name:"ABadgeRibbon",inheritAttrs:!1,props:ft(),slots:Object,setup(e,t){let{attrs:a,slots:o}=t;const{prefixCls:n,direction:i}=re("ribbon",e),[g,v]=pe(n),d=x(()=>be(e.color,!1)),u=x(()=>[n.value,`${n.value}-placement-${e.placement}`,{[`${n.value}-rtl`]:i.value==="rtl",[`${n.value}-color-${e.color}`]:d.value}]);return()=>{var c,r;const{class:f,style:l}=a,b=dt(a,["class","style"]),p={},C={};return e.color&&!d.value&&(p.background=e.color,C.color=e.color),g(m("div",P({class:`${n.value}-wrapper ${v.value}`},b),[(c=o.default)===null||c===void 0?void 0:c.call(o),m("div",{class:[u.value,f,v.value],style:s(s({},p),l)},[m("span",{class:`${n.value}-text`},[e.text||((r=o.text)===null||r===void 0?void 0:r.call(o))]),m("div",{class:`${n.value}-corner`,style:C},null)])]))}}}),mt=()=>({count:X.any.def(null),showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:X.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}),ae=W({compatConfig:{MODE:3},name:"ABadge",Ribbon:le,inheritAttrs:!1,props:mt(),slots:Object,setup(e,t){let{slots:a,attrs:o}=t;const{prefixCls:n,direction:i}=re("badge",e),[g,v]=pe(n),d=x(()=>e.count>e.overflowCount?`${e.overflowCount}+`:e.count),u=x(()=>d.value==="0"||d.value===0),c=x(()=>e.count===null||u.value&&!e.showZero),r=x(()=>(e.status!==null&&e.status!==void 0||e.color!==null&&e.color!==void 0)&&c.value),f=x(()=>e.dot&&!u.value),l=x(()=>f.value?"":d.value),b=x(()=>(l.value===null||l.value===void 0||l.value===""||u.value&&!e.showZero)&&!f.value),p=J(e.count),C=J(l.value),$=J(f.value);ee([()=>e.count,l,f],()=>{b.value||(p.value=e.count,C.value=l.value,$.value=f.value)},{immediate:!0});const y=x(()=>be(e.color,!1)),h=x(()=>({[`${n.value}-status-dot`]:r.value,[`${n.value}-status-${e.status}`]:!!e.status,[`${n.value}-color-${e.color}`]:y.value})),T=x(()=>e.color&&!y.value?{background:e.color,color:e.color}:{}),F=x(()=>({[`${n.value}-dot`]:$.value,[`${n.value}-count`]:!$.value,[`${n.value}-count-sm`]:e.size==="small",[`${n.value}-multiple-words`]:!$.value&&C.value&&C.value.toString().length>1,[`${n.value}-status-${e.status}`]:!!e.status,[`${n.value}-color-${e.color}`]:y.value}));return()=>{var N,z;const{offset:O,title:_,color:Y}=e,G=o.style,V=De(a,e,"text"),I=n.value,S=p.value;let B=Ee((N=a.default)===null||N===void 0?void 0:N.call(a));B=B.length?B:null;const K=!!(!b.value||a.count),A=(()=>{if(!O)return s({},G);const E={marginTop:qe(O[1])?`${O[1]}px`:O[1]};return i.value==="rtl"?E.left=`${parseInt(O[0],10)}px`:E.right=`${-parseInt(O[0],10)}px`,s(s({},E),G)})(),R=_!=null?_:typeof S=="string"||typeof S=="number"?S:void 0,te=K||!V?null:m("span",{class:`${I}-status-text`},[V]),Q=typeof S=="object"||S===void 0&&a.count?ge(S!=null?S:(z=a.count)===null||z===void 0?void 0:z.call(a),{style:A},!1):null,D=Z(I,{[`${I}-status`]:r.value,[`${I}-not-a-wrapper`]:!B,[`${I}-rtl`]:i.value==="rtl"},o.class,v.value);if(!B&&r.value){const E=A.color;return g(m("span",P(P({},o),{},{class:D,style:A}),[m("span",{class:h.value,style:T.value},null),m("span",{style:{color:E},class:`${I}-status-text`},[V])]))}const oe=Ae(B?`${I}-zoom`:"",{appear:!1});let H=s(s({},A),e.numberStyle);return Y&&!y.value&&(H=H||{},H.background=Y),g(m("span",P(P({},o),{},{class:D}),[B,m(Re,oe,{default:()=>[He(m(nt,{prefixCls:e.scrollNumberPrefixCls,show:K,class:F.value,count:C.value,title:R,style:H,key:"scrollNumber"},{default:()=>[Q]}),[[Me,K]])]}),te]))}}});ae.install=function(e){return e.component(ae.name,ae),e.component(le.name,le),e};function j(e){return typeof e=="function"?e():e}const Ce=W({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","open","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName","confirmPrefixCls","footer"],setup(e,t){let{attrs:a}=t;const[o]=ve("Modal");return()=>{const{icon:n,onCancel:i,onOk:g,close:v,okText:d,closable:u=!1,zIndex:c,afterClose:r,keyboard:f,centered:l,getContainer:b,maskStyle:p,okButtonProps:C,cancelButtonProps:$,okCancel:y,width:h=416,mask:T=!0,maskClosable:F=!1,type:N,open:z,title:O,content:_,direction:Y,closeIcon:G,modalRender:V,focusTriggerAfterClose:I,rootPrefixCls:S,bodyStyle:B,wrapClassName:K,footer:A}=e;let R=n;if(!n&&n!==null)switch(N){case"info":R=m(Ze,null,null);break;case"success":R=m(je,null,null);break;case"error":R=m(We,null,null);break;default:R=m(ke,null,null)}const te=e.okType||"primary",Q=e.prefixCls||"ant-modal",D=`${Q}-confirm`,oe=a.style||{},H=y!=null?y:N==="confirm",E=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",q=`${Q}-confirm`,Te=Z(q,`${q}-${e.type}`,{[`${q}-rtl`]:Y==="rtl"},a.class),ne=o.value,Pe=H&&m(ce,{actionFn:i,close:v,autofocus:E==="cancel",buttonProps:$,prefixCls:`${S}-btn`},{default:()=>[j(e.cancelText)||ne.cancelText]});return m(w,{prefixCls:Q,class:Te,wrapClassName:Z({[`${q}-centered`]:!!l},K),onCancel:Ne=>v==null?void 0:v({triggerCancel:!0},Ne),open:z,title:"",footer:"",transitionName:ue(S,"zoom",e.transitionName),maskTransitionName:ue(S,"fade",e.maskTransitionName),mask:T,maskClosable:F,maskStyle:p,style:oe,bodyStyle:B,width:h,zIndex:c,afterClose:r,keyboard:f,centered:l,getContainer:b,closable:u,closeIcon:G,modalRender:V,focusTriggerAfterClose:I},{default:()=>[m("div",{class:`${D}-body-wrapper`},[m("div",{class:`${D}-body`},[j(R),O===void 0?null:m("span",{class:`${D}-title`},[j(O)]),m("div",{class:`${D}-content`},[j(_)])]),A!==void 0?j(A):m("div",{class:`${D}-btns`},[Pe,m(ce,{type:te,actionFn:g,close:v,autofocus:E==="ok",buttonProps:C,prefixCls:`${S}-btn`},{default:()=>[j(d)||(H?ne.okText:ne.justOkText)]})])])]})}}}),gt=[],k=gt,bt=e=>{const t=document.createDocumentFragment();let a=s(s({},Le(e,["parentContext","appContext"])),{close:i,open:!0}),o=null;function n(){o&&(de(null,t),o.component.update(),o=null);for(var u=arguments.length,c=new Array(u),r=0;r<u;r++)c[r]=arguments[r];const f=c.some(l=>l&&l.triggerCancel);e.onCancel&&f&&e.onCancel(()=>{},...c.slice(1));for(let l=0;l<k.length;l++)if(k[l]===i){k.splice(l,1);break}}function i(){for(var u=arguments.length,c=new Array(u),r=0;r<u;r++)c[r]=arguments[r];a=s(s({},a),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),n.apply(this,c)}}),a.visible&&delete a.visible,g(a)}function g(u){typeof u=="function"?a=u(a):a=s(s({},a),u),o&&(s(o.component.props,a),o.component.update())}const v=u=>{const c=Ve,r=c.prefixCls,f=u.prefixCls||`${r}-modal`,l=c.iconPrefixCls,b=Ke();return m(_e,P(P({},c),{},{prefixCls:r}),{default:()=>[m(Ce,P(P({},u),{},{rootPrefixCls:r,prefixCls:f,iconPrefixCls:l,locale:b,cancelText:u.cancelText||b.cancelText}),null)]})};function d(u){const c=m(v,s({},u));return c.appContext=e.parentContext||e.appContext||c.appContext,de(c,t),c}return o=d(a),k.push(i),{destroy:i,update:g}},U=bt;function ye(e){return s(s({},e),{type:"warning"})}function he(e){return s(s({},e),{type:"info"})}function xe(e){return s(s({},e),{type:"success"})}function $e(e){return s(s({},e),{type:"error"})}function Se(e){return s(s({},e),{type:"confirm"})}const vt=()=>({config:Object,afterClose:Function,destroyAction:Function,open:Boolean}),pt=W({name:"HookModal",inheritAttrs:!1,props:Qe(vt(),{config:{width:520,okType:"primary"}}),setup(e,t){let{expose:a}=t;var o;const n=x(()=>e.open),i=x(()=>e.config),{direction:g,getPrefixCls:v}=Xe(),d=v("modal"),u=v(),c=()=>{var b,p;e==null||e.afterClose(),(p=(b=i.value).afterClose)===null||p===void 0||p.call(b)},r=function(){e.destroyAction(...arguments)};a({destroy:r});const f=(o=i.value.okCancel)!==null&&o!==void 0?o:i.value.type==="confirm",[l]=ve("Modal",Ue.Modal);return()=>m(Ce,P(P({prefixCls:d,rootPrefixCls:u},i.value),{},{close:r,open:n.value,afterClose:c,okText:i.value.okText||(f?l==null?void 0:l.value.okText:l==null?void 0:l.value.justOkText),direction:i.value.direction||g.value,cancelText:i.value.cancelText||(l==null?void 0:l.value.cancelText)}),null)}});let me=0;const Ct=W({name:"ElementsHolder",inheritAttrs:!1,setup(e,t){let{expose:a}=t;const o=M([]);return a({addModal:i=>(o.value.push(i),o.value=o.value.slice(),()=>{o.value=o.value.filter(g=>g!==i)})}),()=>o.value.map(i=>i())}});function yt(){const e=M(null),t=M([]);ee(t,()=>{t.value.length&&([...t.value].forEach(g=>{g()}),t.value=[])},{immediate:!0});const a=i=>function(v){var d;me+=1;const u=M(!0),c=M(null),r=M(Ye(v)),f=M({});ee(()=>v,h=>{C(s(s({},Ge(h)?h.value:h),f.value))});const l=function(){u.value=!1;for(var h=arguments.length,T=new Array(h),F=0;F<h;F++)T[F]=arguments[F];const N=T.some(z=>z&&z.triggerCancel);r.value.onCancel&&N&&r.value.onCancel(()=>{},...T.slice(1))};let b;const p=()=>m(pt,{key:`modal-${me}`,config:i(r.value),ref:c,open:u.value,destroyAction:l,afterClose:()=>{b==null||b()}},null);b=(d=e.value)===null||d===void 0?void 0:d.addModal(p),b&&k.push(b);const C=h=>{r.value=s(s({},r.value),h)};return{destroy:()=>{c.value?l():t.value=[...t.value,l]},update:h=>{f.value=h,c.value?C(h):t.value=[...t.value,()=>C(h)]}}},o=x(()=>({info:a(he),success:a(xe),error:a($e),warning:a(ye),confirm:a(Se)})),n=Symbol("modalHolderKey");return[o.value,()=>m(Ct,{key:n,ref:e},null)]}function we(e){return U(ye(e))}w.useModal=yt;w.info=function(t){return U(he(t))};w.success=function(t){return U(xe(t))};w.error=function(t){return U($e(t))};w.warning=we;w.warn=we;w.confirm=function(t){return U(Se(t))};w.destroyAll=function(){for(;k.length;){const t=k.pop();t&&t()}};w.install=function(e){return e.component(w.name,w),e};export{ae as B,le as R,yt as u};
//# sourceMappingURL=index.ded0a456.js.map
