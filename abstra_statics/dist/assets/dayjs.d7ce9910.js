import{U as t,d as O,b1 as I,bm as U,r as N,f as _,Q as c,O as B,ax as u,aw as A}from"./outputWidgets.858eea56.js";import{c as H,e as R,f as G,r as M,d as Q}from"./index.f8437511.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[p]="45eaeecd-ed17-4f01-9414-b9e38d5bd02d",a._sentryDebugIdIdentifier="sentry-dbid-45eaeecd-ed17-4f01-9414-b9e38d5bd02d")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:A()});function V(a){const p=H(a,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=O({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},R()),G()),T()),{addon:{type:Function}}),slots:Object,setup(f,g){let{slots:i,expose:C,emit:o,attrs:h}=g;const r=f,s=I();U(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},b=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,c(c(c({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onOk:y}),i)}}}),j=O({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},R()),M()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(f,g){let{slots:i,expose:C,emit:o,attrs:h}=g;const r=f,s=N(),d=I();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},b=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,c(c(c({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=V(Q),q=t(m,{TimePicker:m,TimeRangePicker:w,install:a=>(a.component(m.name,m),a.component(w.name,w),a)});export{q as T,w as a};
//# sourceMappingURL=dayjs.d7ce9910.js.map
