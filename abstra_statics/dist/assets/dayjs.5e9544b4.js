import{Y as a,d as I,b5 as O,bq as E,r as N,f as _,W as i,V as B,aB as u,aA as U}from"./outputWidgets.c28810ce.js";import{c as H,e as R,f as V,r as W,d as q}from"./index.e4006e56.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[p]="76d13a0b-62a3-4cc3-b57c-cce7a095efc4",t._sentryDebugIdIdentifier="sentry-dbid-76d13a0b-62a3-4cc3-b57c-cce7a095efc4")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:U()});function G(t){const p=H(t,a(a({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=I({name:"ATimePicker",inheritAttrs:!1,props:a(a(a(a({},R()),V()),T()),{addon:{type:Function}}),slots:Object,setup(f,g){let{slots:d,expose:C,emit:o,attrs:h}=g;const r=f,s=O();E(!(d.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const c=N();C({focus:()=>{var n;(n=c.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=c.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},b=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,i(i(i({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:c,renderExtraFooter:r.addon||d.addon||r.renderExtraFooter||d.renderExtraFooter,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onOk:y}),d)}}}),j=I({name:"ATimeRangePicker",inheritAttrs:!1,props:a(a(a(a({},R()),W()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(f,g){let{slots:d,expose:C,emit:o,attrs:h}=g;const r=f,s=N(),c=O();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),c.onFieldChange()},b=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),c.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,A)=>{o("calendarChange",e,l,A)};return()=>{const{id:e=c.id.value}=r;return _(S,i(i(i({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),d)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=G(q),$=a(m,{TimePicker:m,TimeRangePicker:w,install:t=>(t.component(m.name,m),t.component(w.name,w),t)});export{$ as T,w as a};
//# sourceMappingURL=dayjs.5e9544b4.js.map
