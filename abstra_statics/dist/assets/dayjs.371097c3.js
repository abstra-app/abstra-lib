import{Y as a,d as I,a$ as O,bm as A,r as N,f as _,W as c,V as B,at as u,as as U,dj as H}from"./outputWidgets.552d40a4.js";import{g as V,c as R,b as W,r as $}from"./index.028eeb1b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[p]="c4524add-7ca6-42d8-a9da-af110663a70a",t._sentryDebugIdIdentifier="sentry-dbid-c4524add-7ca6-42d8-a9da-af110663a70a")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:U()});function G(t){const p=V(t,a(a({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,j=I({name:"ATimePicker",inheritAttrs:!1,props:a(a(a(a({},R()),W()),T()),{addon:{type:Function}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=O();A(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},P=n=>{o("update:open",n),o("openChange",n)},b=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,c(c(c({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:k,onOpenChange:P,onFocus:b,onBlur:v,onOk:y}),i)}}}),D=I({name:"ATimeRangePicker",inheritAttrs:!1,props:a(a(a(a({},R()),$()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=N(),d=O();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},P=e=>{o("update:open",e),o("openChange",e)},b=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,c(c(c({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:P,onFocus:b,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:j,TimeRangePicker:D}}const{TimePicker:m,TimeRangePicker:w}=G(H),q=a(m,{TimePicker:m,TimeRangePicker:w,install:t=>(t.component(m.name,m),t.component(w.name,w),t)});export{q as T,w as a};
//# sourceMappingURL=dayjs.371097c3.js.map
