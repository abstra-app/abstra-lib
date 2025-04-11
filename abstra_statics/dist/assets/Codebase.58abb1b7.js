var M=Object.defineProperty;var B=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var L=(n,e,t)=>(B(n,typeof e!="symbol"?e+"":e,t),t);import{S as O}from"./SourceCode.6b241bfd.js";import{_ as z}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js";import{C as V}from"./ContentLayout.e2420c4f.js";import{i as N,F as H,I as J,_ as W}from"./FilesNavigator.8567eb0d.js";import{S as K}from"./SaveButton.7f99fb6e.js";import{G as Q,I as X}from"./PhFilePy.vue.d1c0a5cc.js";import{G as Y}from"./PhFolder.vue.828c3d8f.js";import{H as Z,F as ee}from"./PhPackage.vue.50b08edf.js";import{e as b,f as I,d as te,eF as re,o as u,c as p,w as x,u as s,a as G,b as $,aG as ae,dd as se,S as D,eG as ne,cF as oe,a0 as ie}from"./index.ed5876d6.js";import{F as ce,G as le,a as ue,I as pe}from"./PhWebhooksLogo.vue.39909608.js";import{A as de,b as me,c as he,d as fe,e as ye,f as ge,g as be,h as we}from"./linters.444e2018.js";import{W as ke}from"./workspaces.9795dadf.js";import"./asyncComputed.ef6b106a.js";import"./polling.4bb07e1d.js";import"./validations.b6cc7097.js";import"./string.1ab10e12.js";import"./toggleHighContrast.0f9c88a2.js";import"./index.13cb5be3.js";import"./Card.0d4f3abf.js";import"./TabPane.0acef4a3.js";import"./Logo.f030a8f4.js";import"./popupNotifcation.cf9b894a.js";import"./ant-design.5fde6809.js";import"./UnsavedChangesHandler.5605092a.js";import"./ExclamationCircleOutlined.989446c4.js";import"./workspaceStore.334dce81.js";import"./url.28c9d07b.js";import"./colorHelpers.536d34a1.js";import"./record.4267e1e3.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b58e6be2-7c03-475c-896b-514917ee8e9d",n._sentryDebugIdIdentifier="sentry-dbid-b58e6be2-7c03-475c-896b-514917ee8e9d")}catch{}})();class ve{async list(){const t=await(await fetch("/_editor/api/codebase/files")).json();return de.parse(t)}async create(e,t){const i=await(await fetch(`/_editor/api/codebase/files/${e}`,{method:"POST",body:t})).json();return me.parse(i)}async delete(e){const c=await(await fetch(`/_editor/api/codebase/files/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).json();return he.parse(c)}async update(e,t){const i=await(await fetch(`/_editor/api/codebase/files/${e}`,{method:"PUT",body:t})).json();return fe.parse(i)}async retrieve(e){const c=await(await fetch(`/_editor/api/codebase/files/${e}`)).arrayBuffer();return new Uint8Array(c)}async rename(e,t){const c=ye.parse({pathParts:e,newPathParts:t}),m=await(await fetch("/_editor/api/codebase/files/rename",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).json();return ge.parse(m)}async mkdir(e){const c=await(await fetch(`/_editor/api/codebase/dir/${e}`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();return be.parse(c)}async settings(){const t=await(await fetch("/_editor/api/codebase/settings")).json();return we.parse(t)}}const _e=n=>{switch(n){case"abap":return"abap";case"apex":return"apex";case"azcli":return"azcli";case"bat":return"bat";case"bicep":return"bicep";case"c":return"c";case"cameligo":return"cameligo";case"clojure":return"clojure";case"coffeescript":return"coffeescript";case"cpp":return"cpp";case"csharp":return"csharp";case"csp":return"csp";case"css":return"css";case"cypher":return"cypher";case"dart":return"dart";case"dockerfile":return"dockerfile";case"ecl":return"ecl";case"elixir":return"elixir";case"flow9":return"flow9";case"freemarker2":return"freemarker2";case"freemarker2.tag-angle.interpolation-bracket":return"freemarker2.tag-angle.interpolation-bracket";case"freemarker2.tag-angle.interpolation-dollar":return"freemarker2.tag-angle.interpolation-dollar";case"freemarker2.tag-auto.interpolation-bracket":return"freemarker2.tag-auto.interpolation-bracket";case"freemarker2.tag-auto.interpolation-dollar":return"freemarker2.tag-auto.interpolation-dollar";case"freemarker2.tag-bracket.interpolation-bracket":return"freemarker2.tag-bracket.interpolation-bracket";case"freemarker2.tag-bracket.interpolation-dollar":return"freemarker2.tag-bracket.interpolation-dollar";case"fsharp":return"fsharp";case"go":return"go";case"graphql":return"graphql";case"handlebars":return"handlebars";case"hcl":return"hcl";case"html":return"html";case"ini":return"ini";case"java":return"java";case"javascript":return"javascript";case"json":return"json";case"julia":return"julia";case"kotlin":return"kotlin";case"less":return"less";case"lexon":return"lexon";case"liquid":return"liquid";case"lua":return"lua";case"m3":return"m3";case"markdown":return"markdown";case"mdx":return"mdx";case"mips":return"mips";case"msdax":return"msdax";case"mysql":return"mysql";case"objective-c":return"objective-c";case"pascal":return"pascal";case"pascaligo":return"pascaligo";case"perl":return"perl";case"pgsql":return"pgsql";case"php":return"php";case"pla":return"pla";case"plaintext":return"plaintext";case"postiats":return"postiats";case"powerquery":return"powerquery";case"powershell":return"powershell";case"proto":return"proto";case"pug":return"pug";case"python":return"python";case"qsharp":return"qsharp";case"r":return"r";case"razor":return"razor";case"redis":return"redis";case"redshift":return"redshift";case"restructuredtext":return"restructuredtext";case"ruby":return"ruby";case"rust":return"rust";case"sb":return"sb";case"scala":return"scala";case"scheme":return"scheme";case"scss":return"scss";case"shell":return"shell";case"sol":return"sol";case"sparql":return"sparql";case"sql":return"sql";case"st":return"st";case"swift":return"swift";case"systemverilog":return"systemverilog";case"tcl":return"tcl";case"twig":return"twig";case"typescript":return"typescript";case"typespec":return"typespec";case"vb":return"vb";case"verilog":return"verilog";case"xml":return"xml";case"yaml":return"yaml";default:return"plaintext"}};class xe{constructor(e,t,c,i){L(this,"initialContent");this.fileNode=e,this.content=t,this.sep=c,this.onSave=i,this.initialContent=new Uint8Array(t)}get file(){return this.fileNode.pathParts.join(this.sep)}get codeContent(){return this.text}set codeContent(e){this.text=e}updateInitialState(e,t){this.initialContent=new TextEncoder().encode(t)}get text(){return new TextDecoder().decode(this.content)}set text(e){const t=new TextEncoder;this.content=t.encode(e)}get url(){return`/_editor/api/codebase/files/${this.file}`}hasChanges(){return this.content.length!==this.initialContent.length||!this.content.every((e,t)=>e===this.initialContent[t])}async save(){await this.onSave(this),this.initialContent=new Uint8Array(this.content)}isImage(){return N(this.file)}isText(){return!this.isImage()}}const je=n=>{const e=b([]),t=b(!1),c=b(null),i=b({separator:"/"}),m=async()=>{t.value=!0;try{e.value=await n.api.list()}finally{t.value=!1}},j=async()=>{i.value=await n.api.settings()},w=n.router.currentRoute.value.query.f,f=async(a,o)=>{const l=a.join(i.value.separator);await n.api.create(l,o),await m()},C=async a=>{const o=a.join(i.value.separator);await n.api.delete(o),await m()},F=async(a,o)=>{await n.api.rename(a,o),await m()},k=async(a,o)=>{const l=a.join(i.value.separator);await n.api.update(l,o)},A=async a=>{const o=a.join(i.value.separator);return n.api.retrieve(o)},E=async a=>{const o=a.join(i.value.separator);await n.api.mkdir(o),await m()},v=a=>{switch(a.type){case"form":return{name:"formEditor",params:{id:a.id}};case"hook":return{name:"hookEditor",params:{id:a.id}};case"job":return{name:"jobEditor",params:{id:a.id}};case"script":return{name:"scriptEditor",params:{id:a.id}};default:throw new Error(`Unknown stage type: ${a.type}`)}},_=async a=>{var g;const o=a.join(i.value.separator),l=e.value.find(y=>y.file.pathParts.join(i.value.separator)===o);if(!l)throw new Error(`File not found: ${o}`);if(l.file.type==="directory")c.value=null;else if(l.file.pathParts.length===1&&l.file.pathParts[0]==="requirements.txt")n.router.push({name:"settingsRequirements"});else if(l.file.pathParts.length===1&&l.file.pathParts[0]===".env")n.router.push({name:"env-vars"});else if(!l.stages||l.stages.length===0)c.value=new xe(l.file,await A(a),(g=i.value.separator)!=null?g:"/",({content:R})=>k(a,R)),new URL(window.location.href).searchParams.set("f",a.join(i.value.separator)),n.router.replace({query:{...n.router.currentRoute.value.query,f:a}});else if(l.stages.length===1){const y=l.stages[0];n.router.push(v(y))}},q=I(()=>e.value.map(({file:a})=>a)),P=I(()=>{var o;const a=(o=c.value)==null?void 0:o.file.split(".").pop();return a?_e(a):"plaintext"}),S=I(()=>c.value?c.value:null),h=b(null);return ke.get().then(a=>{h.value=a}),Promise.all([m(),j()]).then(()=>{typeof w=="string"&&_(w.split(i.value.separator))}),{files:q,loading:t,editing:c,language:P,settings:i,mkdir:E,fetchFiles:m,uploadFile:f,deleteFile:C,renameFile:F,editFile:k,open:_,sourceCodeEditable:S,workspaceModel:h,filesListResponse:e}},Ce={style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"stretch","align-items":"stretch"}},Fe={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ae=te({__name:"Codebase",setup(n){const e=re(),t=r=>r.type==="file"&&r.pathParts[r.pathParts.length-1].endsWith(".py"),c=r=>r.type==="file"&&r.pathParts.length===1&&r.pathParts[0]==="abstra.json",i=r=>r.type==="file"&&N(r.pathParts[r.pathParts.length-1]),m=r=>r.type==="file"&&r.pathParts.length===1&&r.pathParts[0]==="requirements.txt",j=r=>r.type==="file"&&r.pathParts.length===1&&r.pathParts[0]===".env",w=r=>r.type==="file"&&r.pathParts.length===1&&r.pathParts[0]===".gitignore",f=(r,T)=>y.value.some(d=>d.stages.some(U=>U.type===r)&&d.file.pathParts.join("/")===T.pathParts.join("/")),C=r=>f("form",r),F=r=>f("hook",r),k=r=>f("job",r),A=r=>f("script",r),E=new ve,{loading:v,uploadFile:_,deleteFile:q,open:P,files:S,editing:h,renameFile:a,sourceCodeEditable:o,mkdir:l,workspaceModel:g,filesListResponse:y,settings:R}=je({api:E,router:e});return(r,T)=>(u(),p(V,{"full-width":!!s(h)},{default:x(()=>[G("div",Ce,[G("div",Fe,[$(s(se),null,{default:x(()=>[ae("Codebase")]),_:1}),s(o)?(u(),p(K,{key:0,model:s(o),disabled:s(v)},null,8,["model","disabled"])):D("",!0)]),$(W,{"inner-class":"scroll-area","outer-style":{flexGrow:1},"inner-style":{display:"flex",justifyContent:"stretch",gap:"20px"}},{default:x(()=>[$(H,{class:"files-nav",files:s(S),loading:s(v),separator:s(R).separator,onCreate:s(_),onDelete:s(q),onOpen:s(P),onRename:s(a),onMkdir:s(l)},{icon:x(({file:d})=>[d.type==="directory"?(u(),p(s(Y),{key:0})):C(d)?(u(),p(s(ce),{key:1})):F(d)?(u(),p(s(le),{key:2})):k(d)?(u(),p(s(ue),{key:3})):A(d)?(u(),p(s(pe),{key:4})):t(d)?(u(),p(s(Q),{key:5})):c(d)?(u(),p(z,{key:6,"hide-text":""})):m(d)?(u(),p(s(Z),{key:7})):j(d)?(u(),p(s(X),{key:8})):i(d)?(u(),p(s(ne),{key:9})):w(d)?(u(),p(s(ee),{key:10})):(u(),p(s(J),{key:11}))]),_:1},8,["files","loading","separator","onCreate","onDelete","onOpen","onRename","onMkdir"]),s(h)&&s(h).isImage()?(u(),p(s(oe),{key:0,class:"editing-content",src:s(h).url},null,8,["src"])):s(o)&&s(g)?(u(),p(O,{key:1,script:s(o),class:"editing-content","hide-header":"",workspace:s(g)},null,8,["script","workspace"])):D("",!0)]),_:1})])]),_:1},8,["full-width"]))}});const st=ie(Ae,[["__scopeId","data-v-9496e1ff"]]);export{st as default};
//# sourceMappingURL=Codebase.58abb1b7.js.map
