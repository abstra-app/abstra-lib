import{dm as Ve,ab as Ie,dq as Te,ei as qe,ej as ce,ek as je,el as Ce,aQ as We,r as Oe,u as Q,H as _e,G as xe,K as re,W as _,b5 as Ne,a5 as De,ce as de,em as Ee,d as He,a1 as $e,O as Re,J as S,en as ze,eo as Ue,ep as Ke,Q as Qe,f as Ye,U as fe,a7 as he,ai as Ge,a4 as te,aT as J,aV as ge,aS as me,a3 as Xe,aU as X,ad as le}from"./outputWidgets.d6897520.js";import{s as Ze,o as Je,f as Be,h as ue,j as et,k as ke,t as tt,l as nt,m as rt,n as it,p as lt,q as ae,v as at,r as Me,A as st,w as ot,x as ut,y as ve,z as ie,E as be,F as ct}from"./Title.9e102f51.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c20e7cdc-d93d-498d-9391-689acbceccf1",e._sentryDebugIdIdentifier="sentry-dbid-c20e7cdc-d93d-498d-9391-689acbceccf1")}catch{}})();function we(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function pe(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function se(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return pe(n.overflowY,t)||pe(n.overflowX,t)||function(s){var r=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(s);return!!r&&(r.clientHeight<s.scrollHeight||r.clientWidth<s.scrollWidth)}(e)}return!1}function ne(e,t,n,s,r,i,u,F){return i<e&&u>t||i>e&&u<t?0:i<=e&&F<=n||u>=t&&F>=n?i-e-s:u>t&&F<n||i<e&&F>n?u-t+r:0}var ye=function(e,t){var n=window,s=t.scrollMode,r=t.block,i=t.inline,u=t.boundary,F=t.skipOverflowHiddenElements,P=typeof u=="function"?u:function(Se){return Se!==u};if(!we(e))throw new TypeError("Invalid target");for(var V,k,j=document.scrollingElement||document.documentElement,A=[],b=e;we(b)&&P(b);){if((b=(k=(V=b).parentElement)==null?V.getRootNode().host||null:k)===j){A.push(b);break}b!=null&&b===document.body&&se(b)&&!se(document.documentElement)||b!=null&&se(b,F)&&A.push(b)}for(var O=n.visualViewport?n.visualViewport.width:innerWidth,L=n.visualViewport?n.visualViewport.height:innerHeight,D=window.scrollX||pageXOffset,C=window.scrollY||pageYOffset,x=e.getBoundingClientRect(),o=x.height,l=x.width,f=x.top,w=x.right,v=x.bottom,d=x.left,p=r==="start"||r==="nearest"?f:r==="end"?v:f+o/2,h=i==="center"?d+l/2:i==="end"?w:d,y=[],I=0;I<A.length;I++){var g=A[I],T=g.getBoundingClientRect(),N=T.height,H=T.width,a=T.top,c=T.right,m=T.bottom,E=T.left;if(s==="if-needed"&&f>=0&&d>=0&&v<=L&&w<=O&&f>=a&&v<=m&&d>=E&&w<=c)return y;var W=getComputedStyle(g),R=parseInt(W.borderLeftWidth,10),K=parseInt(W.borderTopWidth,10),q=parseInt(W.borderRightWidth,10),$=parseInt(W.borderBottomWidth,10),M=0,z=0,Y="offsetWidth"in g?g.offsetWidth-g.clientWidth-R-q:0,U="offsetHeight"in g?g.offsetHeight-g.clientHeight-K-$:0,G="offsetWidth"in g?g.offsetWidth===0?0:H/g.offsetWidth:0,B="offsetHeight"in g?g.offsetHeight===0?0:N/g.offsetHeight:0;if(j===g)M=r==="start"?p:r==="end"?p-L:r==="nearest"?ne(C,C+L,L,K,$,C+p,C+p+o,o):p-L/2,z=i==="start"?h:i==="center"?h-O/2:i==="end"?h-O:ne(D,D+O,O,R,q,D+h,D+h+l,l),M=Math.max(0,M+C),z=Math.max(0,z+D);else{M=r==="start"?p-a-K:r==="end"?p-m+$+U:r==="nearest"?ne(a,m,N,K,$+U,p,p+o,o):p-(a+N/2)+U/2,z=i==="start"?h-E-R:i==="center"?h-(E+H/2)+Y/2:i==="end"?h-c+q+Y:ne(E,c,H,R,q+Y,h,h+l,l);var ee=g.scrollLeft,Z=g.scrollTop;p+=Z-(M=Math.max(0,Math.min(Z+M/B,g.scrollHeight-N/B+U))),h+=ee-(z=Math.max(0,Math.min(ee+z/G,g.scrollWidth-H/G+Y)))}y.push({el:g,top:M,left:z})}return y};function Ae(e){return e===Object(e)&&Object.keys(e).length!==0}function dt(e,t){t===void 0&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(s){var r=s.el,i=s.top,u=s.left;r.scroll&&n?r.scroll({top:i,left:u,behavior:t}):(r.scrollTop=i,r.scrollLeft=u)})}function ft(e){return e===!1?{block:"end",inline:"nearest"}:Ae(e)?e:{block:"start",inline:"nearest"}}function ht(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Ae(t)&&typeof t.behavior=="function")return t.behavior(n?ye(e,t):[]);if(!!n){var s=ft(t);return dt(ye(e,s),s.behavior)}}function gt(e,t){return Ze(Je(e,t,Be),e+"")}function mt(e,t,n){var s=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(r);++s<r;)i[s]=e[s+t];return i}function vt(e){return Ve(e)&&Ie(e)}function bt(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var wt=Math.min;function pt(e,t,n){for(var s=n?je:Ce,r=e[0].length,i=e.length,u=i,F=Array(i),P=1/0,V=[];u--;){var k=e[u];u&&t&&(k=ue(k,Te(t))),P=wt(k.length,P),F[u]=!n&&(t||r>=120&&k.length>=120)?new qe(u&&k):void 0}k=e[0];var j=-1,A=F[0];e:for(;++j<r&&V.length<P;){var b=k[j],O=t?t(b):b;if(b=n||b!==0?b:0,!(A?ce(A,O):s(V,O,n))){for(u=i;--u;){var L=F[u];if(!(L?ce(L,O):s(e[u],O,n)))continue e}A&&A.push(O),V.push(b)}}return V}function yt(e){return vt(e)?e:[]}var Ft=gt(function(e){var t=ue(e,yt);return t.length&&t[0]===e[0]?pt(t):[]});const Pt=Ft;function Ot(e,t){return t.length<2?e:et(e,mt(t,0,-1))}function Et(e,t){return t=ke(t,e),e=Ot(e,t),e==null||delete e[tt(bt(t))]}function kt(e){return We(e)?void 0:e}var Mt=1,At=2,Lt=4,St=nt(function(e,t){var n={};if(e==null)return n;var s=!1;t=ue(t,function(i){return i=ke(i,e),s||(s=i.length>1),i}),rt(e,it(e),n),s&&(n=lt(n,Mt|At|Lt,kt));for(var r=t.length;r--;)Et(n,t[r]);return n});const Vt=St;function Le(e){let t=!1,n=e.length;const s=[];return e.length?new Promise((r,i)=>{e.forEach((u,F)=>{u.catch(P=>(t=!0,P)).then(P=>{n-=1,s[F]=P,!(n>0)&&(t&&i(s),r(s))})})}):Promise.resolve([])}function Fe(e){let t=!1;return e&&e.length&&e.every(n=>n.required?(t=!0,!1):!0),t}function Pe(e){return e==null?[]:Array.isArray(e)?e:[e]}function oe(e,t,n){let s=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const r=t.split(".");let i=0;for(let u=r.length;i<u-1&&!(!s&&!n);++i){const F=r[i];if(F in s)s=s[F];else{if(n)throw new Error("please transfer a valid name path to validate!");break}}return{o:s,k:r[i],v:s?s[r[i]]:null,isValid:s&&r[i]in s}}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe({}),n=arguments.length>2?arguments[2]:void 0;const s=ae(Q(e)),r=_e({}),i=xe([]),u=o=>{_(Q(e),_(_({},ae(s)),o)),De(()=>{Object.keys(r).forEach(l=>{r[l]={autoLink:!1,required:Fe(Q(t)[l])}})})},F=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;return l.length?o.filter(f=>{const w=Pe(f.trigger||"change");return Pt(w,l).length}):o};let P=null;const V=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=arguments.length>2?arguments[2]:void 0;const w=[],v={};for(let h=0;h<o.length;h++){const y=o[h],I=oe(Q(e),y,f);if(!I.isValid)continue;v[y]=I.v;const g=F(Q(t)[y],Pe(l&&l.trigger));g.length&&w.push(k(y,I.v,g,l||{}).then(()=>({name:y,errors:[],warnings:[]})).catch(T=>{const N=[],H=[];return T.forEach(a=>{let{rule:{warningOnly:c},errors:m}=a;c?H.push(...m):N.push(...m)}),N.length?Promise.reject({name:y,errors:N,warnings:H}):{name:y,errors:N,warnings:H}}))}const d=Le(w);P=d;const p=d.then(()=>P===d?Promise.resolve(v):Promise.reject([])).catch(h=>{const y=h.filter(I=>I&&I.errors.length);return Promise.reject({values:v,errorFields:y,outOfDate:P!==d})});return p.catch(h=>h),p},k=function(o,l,f){let w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const v=at([o],l,f,_({validateMessages:Me},w),!!w.validateFirst);return r[o]?(r[o].validateStatus="validating",v.catch(d=>d).then(function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];var p;if(r[o].validateStatus==="validating"){const h=d.filter(y=>y&&y.errors.length);r[o].validateStatus=h.length?"error":"success",r[o].help=h.length?h.map(y=>y.errors):null,(p=n==null?void 0:n.onValidate)===null||p===void 0||p.call(n,o,!h.length,h.length?de(r[o].help[0]):null)}}),v):v.catch(d=>d)},j=(o,l)=>{let f=[],w=!0;o?Array.isArray(o)?f=o:f=[o]:(w=!1,f=i.value);const v=V(f,l||{},w);return v.catch(d=>d),v},A=o=>{let l=[];o?Array.isArray(o)?l=o:l=[o]:l=i.value,l.forEach(f=>{r[f]&&_(r[f],{validateStatus:"",help:null})})},b=o=>{const l={autoLink:!1},f=[],w=Array.isArray(o)?o:[o];for(let v=0;v<w.length;v++){const d=w[v];(d==null?void 0:d.validateStatus)==="error"&&(l.validateStatus="error",d.help&&f.push(d.help)),l.required=l.required||(d==null?void 0:d.required)}return l.help=f,l};let O=s,L=!0;const D=o=>{const l=[];i.value.forEach(f=>{const w=oe(o,f,!1),v=oe(O,f,!1);(L&&(n==null?void 0:n.immediate)&&w.isValid||!Ee(w.v,v.v))&&l.push(f)}),j(l,{trigger:"change"}),L=!1,O=ae(de(o))},C=n==null?void 0:n.debounce;let x=!0;return re(t,()=>{i.value=t?Object.keys(Q(t)):[],!x&&n&&n.validateOnRuleChange&&j(),x=!1},{deep:!0,immediate:!0}),re(i,()=>{const o={};i.value.forEach(l=>{o[l]=_({},r[l],{autoLink:!1,required:Fe(Q(t)[l])}),delete r[l]});for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&delete r[l];_(r,o)},{immediate:!0}),re(e,C&&C.wait?Ne(D,C.wait,Vt(C,["wait"])):D,{immediate:n&&!!n.immediate,deep:!0}),{modelRef:e,rulesRef:t,initialModel:s,validateInfos:r,resetFields:u,validate:j,validateField:k,mergeValidateInfo:b,clearValidate:A}}const Tt=()=>({layout:he.oneOf(Ge("horizontal","inline","vertical")),labelCol:te(),wrapperCol:te(),colon:J(),labelAlign:ge(),labelWrap:J(),prefixCls:String,requiredMark:me([String,Boolean]),hideRequiredMark:J(),model:he.object,rules:te(),validateMessages:te(),validateOnRuleChange:J(),scrollToFirstError:Xe(),onSubmit:X(),name:String,validateTrigger:me([String,Array]),size:ge(),disabled:J(),onValuesChange:X(),onFieldsChange:X(),onFinish:X(),onFinishFailed:X(),onValidate:X()});function qt(e,t){return Ee(ie(e),ie(t))}const jt=He({compatConfig:{MODE:3},name:"AForm",inheritAttrs:!1,props:$e(Tt(),{layout:"horizontal",hideRequiredMark:!1,colon:!0}),Item:st,useForm:It,setup(e,t){let{emit:n,slots:s,expose:r,attrs:i}=t;const{prefixCls:u,direction:F,form:P,size:V,disabled:k}=Re("form",e),j=S(()=>e.requiredMark===""||e.requiredMark),A=S(()=>{var a;return j.value!==void 0?j.value:P&&((a=P.value)===null||a===void 0?void 0:a.requiredMark)!==void 0?P.value.requiredMark:!e.hideRequiredMark});ze(V),Ue(k);const b=S(()=>{var a,c;return(a=e.colon)!==null&&a!==void 0?a:(c=P.value)===null||c===void 0?void 0:c.colon}),{validateMessages:O}=Ke(),L=S(()=>_(_(_({},Me),O.value),e.validateMessages)),[D,C]=ot(u),x=S(()=>Qe(u.value,{[`${u.value}-${e.layout}`]:!0,[`${u.value}-hide-required-mark`]:A.value===!1,[`${u.value}-rtl`]:F.value==="rtl",[`${u.value}-${V.value}`]:V.value},C.value)),o=Oe(),l={},f=(a,c)=>{l[a]=c},w=a=>{delete l[a]},v=a=>{const c=!!a,m=c?ie(a).map(be):[];return c?Object.values(l).filter(E=>m.findIndex(W=>qt(W,E.fieldName.value))>-1):Object.values(l)},d=a=>{if(!e.model){le();return}v(a).forEach(c=>{c.resetField()})},p=a=>{v(a).forEach(c=>{c.clearValidate()})},h=a=>{const{scrollToFirstError:c}=e;if(n("finishFailed",a),c&&a.errorFields.length){let m={};typeof c=="object"&&(m=c),I(a.errorFields[0].name,m)}},y=function(){return N(...arguments)},I=function(a){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const m=v(a?[a]:void 0);if(m.length){const E=m[0].fieldId.value,W=E?document.getElementById(E):null;W&&ht(W,_({scrollMode:"if-needed",block:"nearest"},c))}},g=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(a===!0){const c=[];return Object.values(l).forEach(m=>{let{namePath:E}=m;c.push(E.value)}),ve(e.model,c)}else return ve(e.model,a)},T=(a,c)=>{if(le(),!e.model)return le(),Promise.reject("Form `model` is required for validateFields to work.");const m=!!a,E=m?ie(a).map(be):[],W=[];Object.values(l).forEach(q=>{var $;if(m||E.push(q.namePath.value),!(!(($=q.rules)===null||$===void 0)&&$.value.length))return;const M=q.namePath.value;if(!m||ct(E,M)){const z=q.validateRules(_({validateMessages:L.value},c));W.push(z.then(()=>({name:M,errors:[],warnings:[]})).catch(Y=>{const U=[],G=[];return Y.forEach(B=>{let{rule:{warningOnly:ee},errors:Z}=B;ee?G.push(...Z):U.push(...Z)}),U.length?Promise.reject({name:M,errors:U,warnings:G}):{name:M,errors:U,warnings:G}}))}});const R=Le(W);o.value=R;const K=R.then(()=>o.value===R?Promise.resolve(g(E)):Promise.reject([])).catch(q=>{const $=q.filter(M=>M&&M.errors.length);return Promise.reject({values:g(E),errorFields:$,outOfDate:o.value!==R})});return K.catch(q=>q),K},N=function(){return T(...arguments)},H=a=>{a.preventDefault(),a.stopPropagation(),n("submit",a),e.model&&T().then(m=>{n("finish",m)}).catch(m=>{h(m)})};return r({resetFields:d,clearValidate:p,validateFields:T,getFieldsValue:g,validate:y,scrollToField:I}),ut({model:S(()=>e.model),name:S(()=>e.name),labelAlign:S(()=>e.labelAlign),labelCol:S(()=>e.labelCol),labelWrap:S(()=>e.labelWrap),wrapperCol:S(()=>e.wrapperCol),vertical:S(()=>e.layout==="vertical"),colon:b,requiredMark:A,validateTrigger:S(()=>e.validateTrigger),rules:S(()=>e.rules),addField:f,removeField:w,onValidate:(a,c,m)=>{n("validate",a,c,m)},validateMessages:L}),re(()=>e.rules,()=>{e.validateOnRuleChange&&T()}),()=>{var a;return D(Ye("form",fe(fe({},i),{},{onSubmit:H,class:[x.value,i.class]}),[(a=s.default)===null||a===void 0?void 0:a.call(s)]))}}}),_t=jt;export{_t as F,ht as s};
//# sourceMappingURL=Form.a2bccbf0.js.map
