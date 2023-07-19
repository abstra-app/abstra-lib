import{P as PlayerNavbar,l as lighten,a as alternate,b as buttonFontColor,D as DEFAULT_DASH_FONT_COLOR,c as DEFAULT_FORM_FONT_COLOR,i as isURL$1,d as isImageDark,e as isColorDark,L as LIGHT_COLOR,f as DARK_COLOR}from"./colors.d7a0ca86.js";import{g as getCname}from"./index.c13cb307.js";import{d as defineComponent,b as openBlock,c as createElementBlock,R as createTextVNode,y as unref,B as createCommentVNode,ae as createStaticVNode,p as _export_sfc,J as computed,v as createBaseVNode,F as Fragment,K as renderList,E as normalizeClass,L as toDisplayString,r as ref,q as createBlock,w as withCtx,N as pushScopeId,O as popScopeId,a as resolveComponent,e as createVNode,af as TransitionGroup,ag as computed$1,u as reactive,o as onMounted,Q as watch,A as renderSlot,z as normalizeStyle}from"./registerWidgets.990552e9.js";import{M as Modal}from"./Modal.180a3c02.js";const _hoisted_1$4=["href"],_hoisted_2$3=createStaticVNode('<svg width="44" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1bc37b94><g clip-path="url(#clip0_405_116214)" data-v-1bc37b94><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="#E36C7C" data-v-1bc37b94></path><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="url(#paint0_linear_405_116214)" data-v-1bc37b94></path><path d="M218.387 91.2249L176.195 127.557L173.851 129.51C151.192 149.849 149.853 152.309 141.642 152.584L141.584 152.586C139.612 152.652 135.357 152.795 131.875 149.849C126.797 145.552 120.155 140.083 117.03 137.348C115.34 135.869 112.465 133.039 109.998 131.097C107.902 129.448 106.482 127.581 104.919 127.581C103.357 127.581 100.622 129.925 96.3246 133.832C92.0272 137.739 82.6511 146.333 82.6511 146.333L65.0712 161.569C65.0712 161.569 42.5857 180.688 36.7256 185.376C30.8656 190.064 16.5797 175.69 21.4895 171.703C21.9628 171.23 26.2429 167.755 29.7179 164.915C32.2165 162.84 34.2084 161.179 34.2084 161.179C34.9897 160.397 66.2433 133.051 66.2433 133.051L87.723 114.573C87.723 114.573 95.9339 106.094 105.701 106.094C108.826 106.094 112.83 106.485 126.015 118.205C129.531 121.33 131.485 122.542 135.782 126.409C137.345 127.816 139.852 130.316 140.861 130.316C141.882 130.316 143.986 128.363 145.549 127.023C145.549 127.023 195.897 84.4149 202.37 77.9421C207.839 72.4726 223.075 86.9273 218.387 91.2249Z" fill="url(#paint1_linear_405_116214)" data-v-1bc37b94></path><path d="M33.238 67.1372C31.2846 68.6564 23.9305 75.1737 22.2992 76.9039C19.3366 80.0417 21.3638 81.3905 25.6611 84.9065C29.9585 88.4225 57.8962 112.712 64.8542 118.963L79.9642 105.221L41.288 71.2331C36.5999 67.1372 35.1913 65.6179 33.238 67.1372Z" fill="url(#paint2_linear_405_116214)" data-v-1bc37b94></path></g><defs data-v-1bc37b94><linearGradient id="paint0_linear_405_116214" x1="172.68" y1="133.808" x2="183.059" y2="196.169" gradientUnits="userSpaceOnUse" data-v-1bc37b94><stop offset="0.114583" stop-color="#FF98A6" data-v-1bc37b94></stop><stop offset="1" stop-color="#E36C7C" data-v-1bc37b94></stop></linearGradient><linearGradient id="paint1_linear_405_116214" x1="219.271" y1="186.305" x2="206.115" y2="57.7298" gradientUnits="userSpaceOnUse" data-v-1bc37b94><stop stop-color="#E36C7C" data-v-1bc37b94></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-1bc37b94></stop></linearGradient><linearGradient id="paint2_linear_405_116214" x1="20.8984" y1="66.56" x2="30.8589" y2="127.049" gradientUnits="userSpaceOnUse" data-v-1bc37b94><stop stop-color="#E36C7C" data-v-1bc37b94></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-1bc37b94></stop></linearGradient><clipPath id="clip0_405_116214" data-v-1bc37b94><rect width="256" height="256" fill="white" data-v-1bc37b94></rect></clipPath></defs></svg><b data-v-1bc37b94>Abstra Cloud</b>',2),_sfc_main$5=defineComponent({__name:"Watermark",props:{runtime:null,type:null},setup(e){const t=window.location.hostname.split(".")[0],a=!getCname();return(r,s)=>a?(openBlock(),createElementBlock("a",{key:0,href:`https://www.abstracloud.com/${e.type}?utm_source=abstra_pages&utm_medium=badge&utm_campaign=${e.runtime.path}&origin_subdomain=${unref(t)}`,target:"_blank",class:"watermark"},[createTextVNode(" Coded in Python with "),_hoisted_2$3],8,_hoisted_1$4)):createCommentVNode("",!0)}}),Watermark_vue_vue_type_style_index_0_scoped_1bc37b94_lang="",Watermark=_export_sfc(_sfc_main$5,[["__scopeId","data-v-1bc37b94"]]),_hoisted_1$3={key:0,class:"p-steps p-component"},_hoisted_2$2={class:"p-steps-list"},_hoisted_3$1={class:"p-menuitem-link"},_hoisted_4$1={class:"p-steps-number"},_sfc_main$4=defineComponent({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,a=computed(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(r,s)=>e.stepsInfo?(openBlock(),createElementBlock("nav",_hoisted_1$3,[createBaseVNode("ol",_hoisted_2$2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),(c,o)=>(openBlock(),createElementBlock("li",{key:o,class:normalizeClass(["p-steps-item",{"p-highlight":o+1===e.stepsInfo.current}])},[createBaseVNode("span",_hoisted_3$1,[createBaseVNode("span",_hoisted_4$1,toDisplayString(o+1),1)])],2))),128))])])):createCommentVNode("",!0)}}),Steps_vue_vue_type_style_index_0_scoped_c6d9488a_lang="",Steps=_export_sfc(_sfc_main$4,[["__scopeId","data-v-c6d9488a"]]),_withScopeId=e=>(pushScopeId("data-v-54969e59"),e=e(),popScopeId(),e),_hoisted_1$2={class:"no-credits-message"},_hoisted_2$1={class:"image-container"},_hoisted_3={key:0,class:"no-credit-image",src:"https://abstra-cloud-assets.s3.amazonaws.com/no-credit.svg"},_hoisted_4=_withScopeId(()=>createBaseVNode("div",{class:"title"},"Insufficient credits to start this page",-1)),_hoisted_5=_withScopeId(()=>createBaseVNode("div",{class:"message"}," Please contact the creator for more information. ",-1)),_sfc_main$3=defineComponent({__name:"NoCreditsMessage",props:{runner:null},setup(e,{expose:t}){const a=ref(null),r={width:"380px",height:"unset",padding:"30px"},s={borderBottom:"none",color:"#D35249",fontSize:"20px",justifyContent:"flex-start",marginBottom:"17px"},c={color:"#414A58",fontSize:"14px"};return t({open:()=>{var n;(n=a.value)==null||n.open()}}),(n,l)=>(openBlock(),createBlock(Modal,{ref_key:"modalRef",ref:a,"container-style":r,"header-style":s,"content-style":c},{content:withCtx(()=>[createBaseVNode("div",_hoisted_1$2,[createBaseVNode("div",_hoisted_2$1,[e.runner.logoUrl?(openBlock(),createElementBlock("img",_hoisted_3)):createCommentVNode("",!0)]),_hoisted_4,_hoisted_5])]),_:1},512))}}),NoCreditsMessage_vue_vue_type_style_index_0_scoped_54969e59_lang="",NoCreditsMessage=_export_sfc(_sfc_main$3,[["__scopeId","data-v-54969e59"]]),_hoisted_1$1={class:"alert"},_sfc_main$2=defineComponent({__name:"Alerts",props:{alerts:null},setup(e){return(t,a)=>{const r=resolveComponent("Message");return openBlock(),createElementBlock("div",_hoisted_1$1,[createVNode(TransitionGroup,{name:"p-message",tag:"div"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.alerts,s=>(openBlock(),createBlock(r,{key:s.id,severity:s.severity,closable:!1,sticky:!1},{default:withCtx(()=>[createTextVNode(toDisplayString(s.message),1)]),_:2},1032,["severity"]))),128))]),_:1})])}}}),Alerts_vue_vue_type_style_index_0_scoped_737e6861_lang="",AlertsComponent=_export_sfc(_sfc_main$2,[["__scopeId","data-v-737e6861"]]),_sfc_main$1=defineComponent({__name:"RuntimeCommons",props:{runtime:null,fullWidth:{type:Boolean},isPreview:{type:Boolean},type:null,forceResponsivity:null,userEmail:null,stepsInfo:null,alerts:null},emits:["navigate","logout"],setup(e,{expose:t,emit:a}){const r=ref(null),s=o=>a("navigate",o);return t({open:()=>{var o;return(o=r.value)==null?void 0:o.open()}}),(o,n)=>{var l;return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("header",null,[createVNode(PlayerNavbar,{runtime:e.runtime,"user-email":e.userEmail,"force-responsivity":e.forceResponsivity,"logo-url":"/_assets/logo",onLogout:n[0]||(n[0]=i=>a("logout")),onNavigate:s},null,8,["runtime","user-email","force-responsivity"])]),e.type==="forms"?(openBlock(),createBlock(Steps,{key:0,class:"steps","steps-info":e.stepsInfo},null,8,["steps-info"])):createCommentVNode("",!0),createVNode(NoCreditsMessage,{ref_key:"noCreditsMessageModalRef",ref:r,class:normalizeClass({"full-width":e.fullWidth}),runner:e.runtime},null,8,["class","runner"]),e.isPreview?createCommentVNode("",!0):(openBlock(),createBlock(Watermark,{key:1,class:normalizeClass(["watermark",{"viewport-attached":!e.isPreview}]),runtime:e.runtime,type:e.type},null,8,["class","runtime","type"])),(l=e.alerts)!=null&&l.length?(openBlock(),createBlock(AlertsComponent,{key:2,class:"alerts",alerts:e.alerts},null,8,["alerts"])):createCommentVNode("",!0)],64)}}}),RuntimeCommons_vue_vue_type_style_index_0_scoped_fe5cc5cb_lang="",RuntimeCommons=_export_sfc(_sfc_main$1,[["__scopeId","data-v-fe5cc5cb"]]),executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(e){throw console.error(`[Error: execute_js]: ${e.message}, context: ${$context}`),e}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(e){return executeCode(e.context,e.code)}const isSerializable=e=>{try{return JSON.stringify(e),!0}catch{return!1}},fontFamilyToGoogleFontsUrl=e=>`https://fonts.googleapis.com/css2?family=${e.split(" ").join("+")}:wght@300;400;500;700;900&display=swap`;function isColor(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}function isURL(e){try{return new URL(e),!0}catch{return!1}}function themeStyle(e){return isURL(e)?{backgroundImage:`url(${e})`,backgroundSize:"cover"}:isColor(e)?{backgroundColor:e}:{backgroundColor:"/_assets/background"}}const _hoisted_1=["theme"],_hoisted_2=["href"],_sfc_main=defineComponent({__name:"WidgetsFrame",props:{theme:null,mainColor:null,fontFamily:null,runtime:null},setup(e){const t=e,a=computed$1(()=>fontFamilyToGoogleFontsUrl(t.fontFamily)),r=computed$1(()=>(typeof document<"u"&&document.documentElement.style.setProperty("--ac-global-font-family",t.fontFamily),{"--color-main":t.mainColor,"--color-main-light":lighten(t.mainColor,.15),"--color-main-hover":alternate(t.mainColor),"--color-main-active":alternate(t.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":buttonFontColor(t.mainColor),"--font-family":t.fontFamily,...themeStyle(t.theme)})),s=computed$1(()=>t.runtime==="dash"?DEFAULT_DASH_FONT_COLOR:DEFAULT_FORM_FONT_COLOR),c=reactive({"--font-color":s.value,"--background-color":"transparent"}),o=async()=>{const n=isURL$1(t.theme)?await isImageDark(t.theme):isColorDark(t.theme);c["--font-color"]=n?LIGHT_COLOR:DARK_COLOR,c["--background-color"]=n?DARK_COLOR:LIGHT_COLOR};return onMounted(o),watch(()=>t.theme,o),(n,l)=>(openBlock(),createElementBlock("div",{class:"frame background-theme",theme:e.theme,style:normalizeStyle({...unref(r),...unref(c)})},[createBaseVNode("link",{href:unref(a),rel:"stylesheet"},null,8,_hoisted_2),renderSlot(n.$slots,"default",{},void 0,!0)],12,_hoisted_1))}}),WidgetsFrame_vue_vue_type_style_index_0_lang="",WidgetsFrame_vue_vue_type_style_index_1_scoped_50d90b02_lang="",WidgetsFrame=_export_sfc(_sfc_main,[["__scopeId","data-v-50d90b02"]]);export{RuntimeCommons as R,WidgetsFrame as W,executeJs as e};
//# sourceMappingURL=WidgetsFrame.b07f4485.js.map
