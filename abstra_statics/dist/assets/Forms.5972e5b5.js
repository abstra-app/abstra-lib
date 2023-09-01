import{d as b,ex as y,F as h,b as g,u as w,bu as _}from"./registerWidgets.a7f9f083.js";import{e as F,f as C,g as k}from"./icons.71d8e4fb.js";import{a as v}from"./asyncComputed.b85a7eae.js";import{F as l}from"./forms.3209df4e.js";import{R as x}from"./RuntimeList.a7d8e5cc.js";import"./activeRecord.8c74a961.js";import"./pubsub.e3e6423a.js";import"./DropdownMenu.bb9502d0.js";import"./CircularLoading.f04a39f3.js";import"./lottie.0b007633.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="56951668-ca62-4dd2-817d-d8bf80edb267",a._sentryDebugIdIdentifier="sentry-dbid-56951668-ca62-4dd2-817d-d8bf80edb267")}catch{}})();const G=b({__name:"Forms",setup(a){const n=y(),{loading:i,result:r,refetch:c}=v(()=>l.list()),d=({key:e})=>n.push({path:`/_editor/form/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await l.create();d({key:e.path})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this form?")&&(await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:F,label:"Delete",onClick:p,dangerous:!0},{icon:C,label:"Edit Form",onClick:d},{icon:k,label:"Duplicate",onClick:m}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(x,{loading:_(i),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/tN7SRGmVPwc",table:f.value,onCreate:u},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Forms.5972e5b5.js.map
