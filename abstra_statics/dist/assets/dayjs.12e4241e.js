import{V as a,d as x,b1 as I,aB as A,r as N,f as _,R as i,Q as B,aP as u,aO as U}from"./outputWidgets.a8447bcb.js";import{c as H,e as R,f as V,r as G,d as M}from"./index.c2734470.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[p]="025bd4c6-6b75-4cc2-a0c3-707081e538a0",t._sentryDebugIdIdentifier="sentry-dbid-025bd4c6-6b75-4cc2-a0c3-707081e538a0")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:U()});function Q(t){const p=H(t,a(a({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:O,RangePicker:S}=p,D=x({name:"ATimePicker",inheritAttrs:!1,props:a(a(a(a({},R()),V()),T()),{addon:{type:Function}}),slots:Object,setup(g,f){let{slots:c,expose:C,emit:o,attrs:h}=f;const r=g,s=I();A(!(c.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},b=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(O,i(i(i({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||c.addon||r.renderExtraFooter||c.renderExtraFooter,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onOk:y}),c)}}}),j=x({name:"ATimeRangePicker",inheritAttrs:!1,props:a(a(a(a({},R()),G()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(g,f){let{slots:c,expose:C,emit:o,attrs:h}=f;const r=g,s=N(),d=I();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},b=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,i(i(i({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),c)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=Q(M),q=a(m,{TimePicker:m,TimeRangePicker:w,install:t=>(t.component(m.name,m),t.component(w.name,w),t)});export{q as T,w as a};
//# sourceMappingURL=dayjs.12e4241e.js.map
