import{V as t,d as I,aM as O,bC as A,r as N,f as _,R as i,Q as B,ay as u,ax as U}from"./outputWidgets.0d464d45.js";import{c as H,e as R,f as M,r as V,d as G}from"./index.f1731c10.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[p]="60fc4ffc-4450-437d-88cf-285927cea5e5",a._sentryDebugIdIdentifier="sentry-dbid-60fc4ffc-4450-437d-88cf-285927cea5e5")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:U()});function Q(a){const p=H(a,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=I({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},R()),M()),T()),{addon:{type:Function}}),slots:Object,setup(f,g){let{slots:c,expose:C,emit:o,attrs:h}=g;const r=f,s=O();A(!(c.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},P=n=>{o("update:open",n),o("openChange",n)},v=n=>{o("focus",n)},b=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,i(i(i({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||c.addon||r.renderExtraFooter||c.renderExtraFooter,onChange:k,onOpenChange:P,onFocus:v,onBlur:b,onOk:y}),c)}}}),j=I({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},R()),V()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(f,g){let{slots:c,expose:C,emit:o,attrs:h}=g;const r=f,s=N(),d=O();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},P=e=>{o("update:open",e),o("openChange",e)},v=e=>{o("focus",e)},b=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,i(i(i({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:P,onFocus:v,onBlur:b,onPanelChange:y,onOk:n,onCalendarChange:F}),c)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=Q(G),q=t(m,{TimePicker:m,TimeRangePicker:w,install:a=>(a.component(m.name,m),a.component(w.name,w),a)});export{q as T,w as a};
//# sourceMappingURL=dayjs.f00cdad5.js.map
