import{d as A,a0 as L,ao as M,N as R,cU as $,ac as U,O as P,f as r,V as w,b8 as V,R as d,aW as N,cV as W,cW as z,y as X,a6 as c,a3 as f,bV as B,cX as Y,a$ as q}from"./outputWidgets.7cdb44f9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="b6e1d1bb-fd82-4bb1-92b5-66f35f1e09db",e._sentryDebugIdIdentifier="sentry-dbid-b6e1d1bb-fd82-4bb1-92b5-66f35f1e09db")}catch{}})();var G=globalThis&&globalThis.__rest||function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)l.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};let m;const H=e=>{m={x:e.pageX,y:e.pageY},setTimeout(()=>m=null,100)};z()&&X(document.documentElement,"click",H,!0);const J=()=>({prefixCls:String,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},confirmLoading:{type:Boolean,default:void 0},title:c.any,closable:{type:Boolean,default:void 0},closeIcon:c.any,onOk:Function,onCancel:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onChange:Function,afterClose:Function,centered:{type:Boolean,default:void 0},width:[String,Number],footer:c.any,okText:c.any,okType:String,cancelText:c.any,icon:c.any,maskClosable:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},okButtonProps:f(),cancelButtonProps:f(),destroyOnClose:{type:Boolean,default:void 0},wrapClassName:String,maskTransitionName:String,transitionName:String,getContainer:{type:[String,Function,Boolean,Object],default:void 0},zIndex:Number,bodyStyle:f(),maskStyle:f(),mask:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},wrapProps:Object,focusTriggerAfterClose:{type:Boolean,default:void 0},modalRender:Function,mousePosition:f()}),Q=A({compatConfig:{MODE:3},name:"AModal",inheritAttrs:!1,props:L(J(),{width:520,confirmLoading:!1,okType:"primary"}),setup(e,l){let{emit:t,slots:n,attrs:a}=l;const[g]=M("Modal"),{prefixCls:i,rootPrefixCls:v,direction:O,getPopupContainer:p}=R("modal",e),[S,C]=$(i);U(e.visible===void 0);const k=o=>{t("update:visible",!1),t("update:open",!1),t("cancel",o),t("change",!1)},h=o=>{t("ok",o)},I=()=>{var o,s;const{okText:T=(o=n.okText)===null||o===void 0?void 0:o.call(n),okType:b,cancelText:u=(s=n.cancelText)===null||s===void 0?void 0:s.call(n),confirmLoading:y}=e;return r(q,null,[r(B,d({onClick:k},e.cancelButtonProps),{default:()=>[u||g.value.cancelText]}),r(B,d(d({},Y(b)),{},{loading:y,onClick:h},e.okButtonProps),{default:()=>[T||g.value.okText]})])};return()=>{var o,s;const{prefixCls:T,visible:b,open:u,wrapClassName:y,centered:_,getContainer:F,closeIcon:j=(o=n.closeIcon)===null||o===void 0?void 0:o.call(n),focusTriggerAfterClose:D=!0}=e,x=G(e,["prefixCls","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),E=P(y,{[`${i.value}-centered`]:!!_,[`${i.value}-wrap-rtl`]:O.value==="rtl"});return S(r(W,d(d(d({},x),a),{},{rootClassName:C.value,class:P(C.value,a.class),getContainer:F||(p==null?void 0:p.value),prefixCls:i.value,wrapClassName:E,visible:u!=null?u:b,onClose:k,focusTriggerAfterClose:D,transitionName:N(v.value,"zoom",e.transitionName),maskTransitionName:N(v.value,"fade",e.maskTransitionName),mousePosition:(s=x.mousePosition)!==null&&s!==void 0?s:m}),w(w({},n),{footer:n.footer||I,closeIcon:()=>r("span",{class:`${i.value}-close-x`},[j||r(V,{class:`${i.value}-close-icon`},null)])})))}}});export{Q as M};
//# sourceMappingURL=Modal.e9e684b4.js.map
