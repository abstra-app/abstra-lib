import{d as defineComponent,eU as i18nProvider,J as computed,H as reactive,b as openBlock,eu as createElementBlock,e as createBaseVNode,eC as toDisplayString,u as unref,aq as withDirectives,eG as vModelText,eO as withKeys,ew as createCommentVNode,eD as pushScopeId,eE as popScopeId,x as _export_sfc,aJ as createTextVNode,o as onMounted,f as createVNode,eV as createStaticVNode,a as resolveComponent,w as withCtx,bg as Fragment,eB as renderList,c as createBlock,cj as TransitionGroup,ey as normalizeClass}from"./outputWidgets.3853e68f.js";import{u as thinrefresh}from"./icons.f8a7e9e5.js";import{A as AuthnUserProvider}from"./index.c46ccb29.js";import{L as LoadingIndicator}from"./CircularLoading.cf4b17c8.js";import{P as PlayerNavbar}from"./PlayerNavbar.d152851e.js";import{g as getCname}from"./index.a47867c5.js";import{S as Steps}from"./Steps.1d191540.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="e8ac5767-8682-413a-850f-5fb1ae058734",t._sentryDebugIdIdentifier="sentry-dbid-e8ac5767-8682-413a-850f-5fb1ae058734")}catch{}})();const _withScopeId$1=t=>(pushScopeId("data-v-3f696214"),t=t(),popScopeId(),t),_hoisted_1$4={class:"auth-info"},_hoisted_2$3={class:"auth-header"},_hoisted_3$2={class:"auth-label"},_hoisted_4$2={class:"description"},_hoisted_5$2=["onKeyup"],_hoisted_6$2={key:0,class:"span-error"},_hoisted_7$2=_withScopeId$1(()=>createBaseVNode("div",{class:"spacer"},null,-1)),_sfc_main$5=defineComponent({__name:"AuthInfo",props:{invalid:{type:Boolean},provider:{}},emits:["sendAuthInfo"],setup(t,{emit:s}){const e=t,a={description:i18nProvider.get("i18n_local_auth_info_description"),button:i18nProvider.get("i18n_local_auth_info_authenticate")},o={description:i18nProvider.get("i18n_auth_info_description"),button:i18nProvider.get("i18n_auth_info_send_code")},c=computed(()=>e.provider==="local"?a:o),n=reactive({email:""}),i=()=>{s("sendAuthInfo",n)};return(d,r)=>(openBlock(),createElementBlock("div",_hoisted_1$4,[createBaseVNode("div",_hoisted_2$3,[createBaseVNode("div",_hoisted_3$2,toDisplayString(unref(i18nProvider).get("i18n_auth_validate_your_email")),1),createBaseVNode("div",_hoisted_4$2,toDisplayString(c.value.description),1)]),withDirectives(createBaseVNode("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>n.email=l),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:withKeys(i,["enter"])},null,40,_hoisted_5$2),[[vModelText,n.email]]),d.invalid?(openBlock(),createElementBlock("span",_hoisted_6$2,toDisplayString(unref(i18nProvider).get("i18n_auth_info_invalid_email")),1)):createCommentVNode("",!0),_hoisted_7$2,createBaseVNode("button",{class:"next-button",onClick:i},toDisplayString(c.value.button),1)]))}}),AuthInfo_vue_vue_type_style_index_0_scoped_3f696214_lang="",AuthInfo=_export_sfc(_sfc_main$5,[["__scopeId","data-v-3f696214"]]),_withScopeId=t=>(pushScopeId("data-v-a1e11181"),t=t(),popScopeId(),t),_hoisted_1$3={class:"auth-token"},_hoisted_2$2={class:"auth-label"},_hoisted_3$1=["onKeyup"],_hoisted_4$1={key:0,class:"span-error"},_hoisted_5$1={key:1,class:"span-error"},_hoisted_6$1=_withScopeId(()=>createBaseVNode("div",{class:"spacer"},null,-1)),_hoisted_7$1={class:"button-icon",viewBox:"0 0 24 24"},_hoisted_8$1=["d"],_hoisted_9$1={class:"footer"},_sfc_main$4=defineComponent({__name:"AuthToken",props:{email:{},invalid:{type:Boolean},expired:{type:Boolean},provider:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:s}){const e=reactive({token:""}),a=()=>{s("restartAuth")},o=()=>{s("resendToken")},c=()=>{s("sendToken",e.token)};return(n,i)=>(openBlock(),createElementBlock("div",_hoisted_1$3,[createBaseVNode("div",_hoisted_2$2,toDisplayString(unref(i18nProvider).get("i18n_auth_token_label",{email:n.email})),1),withDirectives(createBaseVNode("input",{"onUpdate:modelValue":i[0]||(i[0]=d=>e.token=d),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:withKeys(c,["enter"])},null,40,_hoisted_3$1),[[vModelText,e.token]]),n.expired?(openBlock(),createElementBlock("span",_hoisted_4$1,toDisplayString(unref(i18nProvider).get("i18n_auth_token_expired")),1)):createCommentVNode("",!0),n.invalid?(openBlock(),createElementBlock("span",_hoisted_5$1,toDisplayString(unref(i18nProvider).get("i18n_auth_token_invalid"))+"} ",1)):createCommentVNode("",!0),_hoisted_6$1,createBaseVNode("button",{class:"next-button",onClick:c},toDisplayString(unref(i18nProvider).get("i18n_auth_token_verify_email")),1),createBaseVNode("button",{class:"secondary-button back",onClick:a},[(openBlock(),createElementBlock("svg",_hoisted_7$1,[createBaseVNode("path",{d:unref(thinrefresh)},null,8,_hoisted_8$1)])),createTextVNode(" "+toDisplayString(unref(i18nProvider).get("i18n_auth_token_try_again")),1)]),createBaseVNode("button",{class:"secondary-button back",onClick:o},toDisplayString(unref(i18nProvider).get("i18n_auth_token_resend_email")),1),createBaseVNode("div",_hoisted_9$1,toDisplayString(unref(i18nProvider).get("i18n_auth_token_footer_alternative_email")),1)]))}}),AuthToken_vue_vue_type_style_index_0_scoped_a1e11181_lang="",AuthToken=_export_sfc(_sfc_main$4,[["__scopeId","data-v-a1e11181"]]),_hoisted_1$2={key:0,class:"form"},_hoisted_2$1={class:"form-wrapper"},_hoisted_3={class:"loading"},_hoisted_4={key:1,class:"form"},_hoisted_5={class:"form-wrapper"},_hoisted_6={class:"widget"},_hoisted_7={key:2,class:"form"},_hoisted_8={class:"form-wrapper"},_hoisted_9={class:"widget"},_hoisted_10={key:3,class:"form"},_hoisted_11={class:"form-wrapper"},_hoisted_12={class:"loading"},_sfc_main$3=defineComponent({__name:"Passwordless",emits:["done"],setup(t,{emit:s}){const e=reactive({stage:"collect-info",userProvider:null,invalid:!1,token:null,info:null});onMounted(()=>{e.userProvider=AuthnUserProvider.instance});const a=async i=>{const d=AuthnUserProvider.instance;if(!d)return;e.info=i,e.stage="loading";const r=await d.authenticate(i.email);e.invalid=!!r,r?e.stage="collect-info":e.stage="collect-token"},o=async i=>{var r;const d=AuthnUserProvider.instance;if(!(!d||!((r=e.info)!=null&&r.email))){e.token=i,e.stage="loading";try{const l=await d.verify(e.info.email,e.token);if(!l)throw new Error("no user");s("done",l),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},c=()=>{e.info&&a(e.info)},n=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(i,d)=>{var r,l;return e.userProvider?e.stage==="collect-info"?(openBlock(),createElementBlock("div",_hoisted_4,[createBaseVNode("div",_hoisted_5,[createBaseVNode("div",_hoisted_6,[createVNode(AuthInfo,{invalid:e.invalid,provider:e.userProvider.provider,onSendAuthInfo:a},null,8,["invalid","provider"])])])])):e.stage==="collect-token"?(openBlock(),createElementBlock("div",_hoisted_7,[createBaseVNode("div",_hoisted_8,[createBaseVNode("div",_hoisted_9,[createVNode(AuthToken,{invalid:e.invalid,email:(l=(r=e.info)==null?void 0:r.email)!=null?l:"",provider:e.userProvider.provider,onSendToken:o,onResendToken:c,onRestartAuth:n},null,8,["invalid","email","provider"])])])])):(openBlock(),createElementBlock("div",_hoisted_10,[createBaseVNode("div",_hoisted_11,[createBaseVNode("div",_hoisted_12,[createVNode(LoadingIndicator)])])])):(openBlock(),createElementBlock("div",_hoisted_1$2,[createBaseVNode("div",_hoisted_2$1,[createBaseVNode("div",_hoisted_3,[createVNode(LoadingIndicator)])])]))}}}),Passwordless_vue_vue_type_style_index_0_scoped_8daf4c27_lang="",Passwordless=_export_sfc(_sfc_main$3,[["__scopeId","data-v-8daf4c27"]]),_hoisted_1$1=["href"],_hoisted_2=createStaticVNode('<svg width="44" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f8a478c3><g clip-path="url(#clip0_405_116214)" data-v-f8a478c3><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="#E36C7C" data-v-f8a478c3></path><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="url(#paint0_linear_405_116214)" data-v-f8a478c3></path><path d="M218.387 91.2249L176.195 127.557L173.851 129.51C151.192 149.849 149.853 152.309 141.642 152.584L141.584 152.586C139.612 152.652 135.357 152.795 131.875 149.849C126.797 145.552 120.155 140.083 117.03 137.348C115.34 135.869 112.465 133.039 109.998 131.097C107.902 129.448 106.482 127.581 104.919 127.581C103.357 127.581 100.622 129.925 96.3246 133.832C92.0272 137.739 82.6511 146.333 82.6511 146.333L65.0712 161.569C65.0712 161.569 42.5857 180.688 36.7256 185.376C30.8656 190.064 16.5797 175.69 21.4895 171.703C21.9628 171.23 26.2429 167.755 29.7179 164.915C32.2165 162.84 34.2084 161.179 34.2084 161.179C34.9897 160.397 66.2433 133.051 66.2433 133.051L87.723 114.573C87.723 114.573 95.9339 106.094 105.701 106.094C108.826 106.094 112.83 106.485 126.015 118.205C129.531 121.33 131.485 122.542 135.782 126.409C137.345 127.816 139.852 130.316 140.861 130.316C141.882 130.316 143.986 128.363 145.549 127.023C145.549 127.023 195.897 84.4149 202.37 77.9421C207.839 72.4726 223.075 86.9273 218.387 91.2249Z" fill="url(#paint1_linear_405_116214)" data-v-f8a478c3></path><path d="M33.238 67.1372C31.2846 68.6564 23.9305 75.1737 22.2992 76.9039C19.3366 80.0417 21.3638 81.3905 25.6611 84.9065C29.9585 88.4225 57.8962 112.712 64.8542 118.963L79.9642 105.221L41.288 71.2331C36.5999 67.1372 35.1913 65.6179 33.238 67.1372Z" fill="url(#paint2_linear_405_116214)" data-v-f8a478c3></path></g><defs data-v-f8a478c3><linearGradient id="paint0_linear_405_116214" x1="172.68" y1="133.808" x2="183.059" y2="196.169" gradientUnits="userSpaceOnUse" data-v-f8a478c3><stop offset="0.114583" stop-color="#FF98A6" data-v-f8a478c3></stop><stop offset="1" stop-color="#E36C7C" data-v-f8a478c3></stop></linearGradient><linearGradient id="paint1_linear_405_116214" x1="219.271" y1="186.305" x2="206.115" y2="57.7298" gradientUnits="userSpaceOnUse" data-v-f8a478c3><stop stop-color="#E36C7C" data-v-f8a478c3></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-f8a478c3></stop></linearGradient><linearGradient id="paint2_linear_405_116214" x1="20.8984" y1="66.56" x2="30.8589" y2="127.049" gradientUnits="userSpaceOnUse" data-v-f8a478c3><stop stop-color="#E36C7C" data-v-f8a478c3></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-f8a478c3></stop></linearGradient><clipPath id="clip0_405_116214" data-v-f8a478c3><rect width="256" height="256" fill="white" data-v-f8a478c3></rect></clipPath></defs></svg><b data-v-f8a478c3>Abstra Cloud</b>',2),_sfc_main$2=defineComponent({__name:"Watermark",props:{runtime:{},type:{}},setup(t){const s=window.location.hostname.split(".")[0],e=!getCname();return(a,o)=>e?(openBlock(),createElementBlock("a",{key:0,href:`https://www.abstracloud.com/${a.type}?utm_source=abstra_pages&utm_medium=badge&utm_campaign=${a.runtime.id}&origin_subdomain=${unref(s)}`,target:"_blank",class:"watermark"},[createTextVNode(" Coded in Python with "),_hoisted_2],8,_hoisted_1$1)):createCommentVNode("",!0)}}),Watermark_vue_vue_type_style_index_0_scoped_f8a478c3_lang="",Watermark=_export_sfc(_sfc_main$2,[["__scopeId","data-v-f8a478c3"]]),_hoisted_1={class:"alert"},_sfc_main$1=defineComponent({__name:"Alerts",props:{alerts:{}},setup(t){return(s,e)=>{const a=resolveComponent("Message");return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(TransitionGroup,{name:"p-message",tag:"div"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.alerts,o=>(openBlock(),createBlock(a,{key:o.id,severity:o.severity,closable:!1,sticky:!1},{default:withCtx(()=>[createTextVNode(toDisplayString(o.message),1)]),_:2},1032,["severity"]))),128))]),_:1})])}}}),Alerts_vue_vue_type_style_index_0_scoped_62dd7843_lang="",AlertsComponent=_export_sfc(_sfc_main$1,[["__scopeId","data-v-62dd7843"]]),_sfc_main=defineComponent({__name:"RuntimeCommons",props:{runtime:{},fullWidth:{type:Boolean},isPreview:{type:Boolean},type:{},forceResponsivity:{},userEmail:{},stepsInfo:{},alerts:{}},emits:["navigate","logout"],setup(t,{expose:s,emit:e}){const a=o=>e("navigate",o);return s({open}),(o,c)=>{var n;return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("header",null,[createVNode(PlayerNavbar,{runtime:o.runtime,"user-email":o.userEmail,"force-responsivity":o.forceResponsivity,onLogout:c[0]||(c[0]=i=>e("logout")),onNavigate:a},null,8,["runtime","user-email","force-responsivity"])]),o.type==="forms"?(openBlock(),createBlock(Steps,{key:0,class:"steps","steps-info":o.stepsInfo},null,8,["steps-info"])):createCommentVNode("",!0),o.isPreview?createCommentVNode("",!0):(openBlock(),createBlock(Watermark,{key:1,class:normalizeClass(["watermark",{"viewport-attached":!o.isPreview}]),runtime:o.runtime,type:o.type},null,8,["class","runtime","type"])),(n=o.alerts)!=null&&n.length?(openBlock(),createBlock(AlertsComponent,{key:2,class:"alerts",alerts:o.alerts},null,8,["alerts"])):createCommentVNode("",!0)],64)}}}),RuntimeCommons_vue_vue_type_style_index_0_scoped_d1c855c3_lang="",RuntimeCommons=_export_sfc(_sfc_main,[["__scopeId","data-v-d1c855c3"]]),executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(t){throw console.error(`[Error: execute_js]: ${t.message}, context: ${$context}`),t}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(t){return{type:"execute-js:response",value:await executeCode(t.context,t.code)}}const isSerializable=t=>{try{return JSON.stringify(t),!0}catch{return!1}};export{Passwordless as P,RuntimeCommons as R,executeJs as e};
//# sourceMappingURL=executeJs.ee9aa955.js.map
