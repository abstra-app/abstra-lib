import{W as t,d as I,b3 as O,bo as U,r as N,f as _,U as c,S as B,az as u,ay as A}from"./outputWidgets.85f6668f.js";import{c as H,e as S,f as W,r as z,d as G}from"./index.851737d8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[p]="be96390b-5fb8-4873-a4d1-b64d634f996b",a._sentryDebugIdIdentifier="sentry-dbid-be96390b-5fb8-4873-a4d1-b64d634f996b")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:A()});function M(a){const p=H(a,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:R}=p,D=I({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},S()),W()),T()),{addon:{type:Function}}),slots:Object,setup(f,g){let{slots:i,expose:b,emit:o,attrs:C}=g;const r=f,s=O();U(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();b({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const h=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},k=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,c(c(c({},C),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:h,onOpenChange:k,onFocus:P,onBlur:v,onOk:y}),i)}}}),j=I({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},S()),z()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(f,g){let{slots:i,expose:b,emit:o,attrs:C}=g;const r=f,s=N(),d=O();b({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const h=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},k=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(R,c(c(c({},C),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:h,onOpenChange:k,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=M(G),q=t(m,{TimePicker:m,TimeRangePicker:w,install:a=>(a.component(m.name,m),a.component(w.name,w),a)});export{q as T,w as a};
//# sourceMappingURL=dayjs.62a9b58e.js.map
