import{u as C}from"./index.734901a2.js";import{d as E,J as U,b as u,ew as f,e as o,eH as g,eC as W,eD as q,x as S,eK as M,eE as P,r as v,u as t,c as A,f as R,eN as B}from"./outputWidgets.85f6668f.js";import{b as N,c as V,d as $,r as L}from"./FormRunner.f85199fb.js";import{a as H}from"./asyncComputed.995c26f8.js";import{L as O}from"./CircularLoading.cc8dbe1b.js";import{F as T}from"./forms.8816c9cf.js";import{W as j}from"./workspaces.450678c2.js";import"./envVars.08a1f4f7.js";import"./fetch.cb61391f.js";import"./pubsub.03c36659.js";import"./url.b5298537.js";import"./Login.vue_vue_type_script_setup_true_lang.b851f045.js";import"./Link.e9c5d0ae.js";import"./Base.7b6635cf.js";import"./index.a169b3c7.js";import"./PlayerNavbar.48fa6507.js";import"./PhKanban.vue.64cf26f6.js";import"./PhSignOut.vue.13cc2772.js";import"./Text.7b2be8df.js";import"./index.7ecbbfa9.js";import"./Paragraph.283f3bee.js";import"./Title.f992fa06.js";import"./index.33fa71d8.js";import"./WidgetsFrame.68690527.js";import"./Steps.d9e54abe.js";import"./PhInfo.vue.206eaff1.js";import"./Card.859059c9.js";import"./TabPane.7c942899.js";import"./hasIn.943c3a95.js";import"./record.98f21d99.js";import"./runnerData.54f41fa2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="94594522-e6b0-4efa-a9e1-d35156b710b2",e._sentryDebugIdIdentifier="sentry-dbid-94594522-e6b0-4efa-a9e1-d35156b710b2")}catch{}})();const F=e=>(W("data-v-3e46b76c"),e=e(),q(),e),J={class:"error"},K=F(()=>o("h1",{class:"error-header"},"Error",-1)),z={class:"error-body"},G={class:"error-message"},Q={class:"error-details"},X=F(()=>o("span",null,"Reload",-1)),Y=[X],Z=E({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:a}){const s=e,n=U(()=>s.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function l(){a("reload")}return(h,m)=>(u(),f("div",J,[K,o("div",z,[o("div",G,[o("p",null,g(n.value),1),o("p",Q,g(e.error.name)+": "+g(e.error.message),1)]),o("div",{class:"error-actions"},[o("button",{class:"btn btn-primary",onClick:l},Y)])])]))}});const ee=S(Z,[["__scopeId","data-v-3e46b76c"]]),re={class:"page"},oe={key:1,class:"error"},te={key:2,style:{width:"100%",height:"100%",display:"flex"}},ae={style:{width:"100%",height:"100%",display:"flex"}},se=E({__name:"FormPreview",setup(e){const a=M(),s=P(),n=v(null),l=v(null),h=s.query,m=v(null);function I(r,i){L("preview",a,r,i)}const{result:_,loading:x,refetch:y,error:w}=H(async()=>{const[r,i]=await Promise.all([T.get(s.params.id),j.get()]),c=new V({formRunnerData:r.makeRunnerData(i),queryParams:h,userManager:C,connectionManager:new $(r.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:I,onAuthUpdate:d=>m.value=d,onStateUpdate:d=>n.value=d,logService:null,onStackTraceUpdate:null});l.value=r.makeRunnerData(i);const p=c.getState();return n.value=p.formState,m.value=p.passwordlessUser,B({form:r,workspace:i,controller:c})}),D=async({id:r})=>{await a.push({params:{id:r},name:"formPreview",query:s.query}),y()};return(r,i)=>{var c,p,d,b,k;return u(),f("div",re,[t(x)||!n.value||!l.value?(u(),A(O,{key:0})):t(w)?(u(),f("div",oe,[R(ee,{error:t(w),onReload:t(y)},null,8,["error","onReload"])])):(u(),f("main",te,[o("div",ae,[R(N,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":l.value,"form-state":n.value,"user-email":(c=m.value)==null?void 0:c.claims.email,onUpdateWidgetErrors:(p=t(_))==null?void 0:p.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(_))==null?void 0:d.controller.updateWidgetValue,onActionClicked:(b=t(_))==null?void 0:b.controller.handleActionClick,onNavigate:D,onLogout:(k=t(_))==null?void 0:k.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"])])]))])}}});const Be=S(se,[["__scopeId","data-v-a7c36a64"]]);export{Be as default};
//# sourceMappingURL=FormPreview.41b805ed.js.map
