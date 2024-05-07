var I=Object.defineProperty;var N=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>(N(s,typeof e!="symbol"?e+"":e,t),t);import{C as V}from"./ContentLayout.d7a1409f.js";import{C as A}from"./CrudView.46ca127a.js";import{a as D}from"./asyncComputed.502b15d1.js";import{d as F,o as P,O as S,J as B,b as c,c as g,w as m,eS as O,f as h,u as o,bG as v,as as p,ey as f,ew as y,aE as $,eF as R,eH as q}from"./outputWidgets.80b79706.js";import{W as J}from"./workspaces.a29c9c6e.js";import{E as L}from"./record.63b4046d.js";import"./envVars.3e3081da.js";import{A as G}from"./Title.200af3e3.js";import{A as U}from"./Paragraph.00a6891d.js";import"./router.15937dc6.js";import"./Form.e988a87f.js";import"./hasIn.ea2613ea.js";import"./popupNotifcation.a2a58f34.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1222d427.js";import"./BookOutlined.7f6d8ba6.js";import"./url.72eacc1e.js";import"./Modal.4023ca70.js";import"./index.24eb61c7.js";import"./Text.285c0e7d.js";import"./Base.45aa22e8.js";import"./index.44666439.js";import"./runnerData.339ca674.js";import"./pubsub.20266ef8.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="e7aa789f-2d51-4a94-8a35-dea0505b9b65",s._sentryDebugIdIdentifier="sentry-dbid-e7aa789f-2d51-4a94-8a35-dea0505b9b65")}catch{}})();class W{async list(){return(await fetch("/_editor/api/requirements")).json()}async recommendations(){return(await fetch("/_editor/api/requirements/recommendations")).json()}async update(e,t){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update requirements")}async create(e){const t=await fetch("/_editor/api/requirements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create requirements");return t.json()}async delete(e){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete requirements")}}const u=new W;class l{constructor(e){w(this,"record");this.record=L.from(e)}static async list(){return(await u.list()).map(t=>new l(t))}static async create(e,t){const a=await u.create({name:e,version:t!=null?t:null});return new l(a)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get version(){var e;return(e=this.record.get("version"))!=null?e:"latest"}set version(e){this.record.set("version",e)}async delete(){await u.delete(this.name)}static async recommendations(){return u.recommendations()}}const H=s=>["__future__","__main__","_thread","abc","aifc","argparse","array","ast","asynchat","asyncio","asyncore","atexit","audioop","base64","bdb","binascii","binhex","bisect","builtins","bz2","calendar","cgi","cgitb","chunk","cmath","cmd","code","codecs","codeop","collections","collections.abc","colorsys","compileall","concurrent","concurrent.futures","configparser","contextlib","contextvars","copy","copyreg","cProfile","crypt","csv","ctypes","curses","curses.ascii","curses.panel","curses.textpad","dataclasses","datetime","dbm","dbm.dumb","dbm.gnu","dbm.ndbm","decimal","difflib","dis","distutils","distutils.archive_util","distutils.bcppcompiler","distutils.ccompiler","distutils.cmd","distutils.command","distutils.command.bdist","distutils.command.bdist_dumb","distutils.command.bdist_msi","distutils.command.bdist_packager","distutils.command.bdist_rpm","distutils.command.build","distutils.command.build_clib","distutils.command.build_ext","distutils.command.build_py","distutils.command.build_scripts","distutils.command.check","distutils.command.clean","distutils.command.config","distutils.command.install","distutils.command.install_data","distutils.command.install_headers","distutils.command.install_lib","distutils.command.install_scripts","distutils.command.register","distutils.command.sdist","distutils.core","distutils.cygwinccompiler","distutils.debug","distutils.dep_util","distutils.dir_util","distutils.dist","distutils.errors","distutils.extension","distutils.fancy_getopt","distutils.file_util","distutils.filelist","distutils.log","distutils.msvccompiler","distutils.spawn","distutils.sysconfig","distutils.text_file","distutils.unixccompiler","distutils.util","distutils.version","doctest","email","email.charset","email.contentmanager","email.encoders","email.errors","email.generator","email.header","email.headerregistry","email.iterators","email.message","email.mime","email.parser","email.policy","email.utils","encodings","encodings.idna","encodings.mbcs","encodings.utf_8_sig","ensurepip","enum","errno","faulthandler","fcntl","filecmp","fileinput","fnmatch","fractions","ftplib","functools","gc","getopt","getpass","gettext","glob","graphlib","grp","gzip","hashlib","heapq","hmac","html","html.entities","html.parser","http","http.client","http.cookiejar","http.cookies","http.server","idlelib","imaplib","imghdr","imp","importlib","importlib.abc","importlib.machinery","importlib.metadata","importlib.resources","importlib.util","inspect","io","ipaddress","itertools","json","json.tool","keyword","lib2to3","linecache","locale","logging","logging.config","logging.handlers","lzma","mailbox","mailcap","marshal","math","mimetypes","mmap","modulefinder","msilib","msvcrt","multiprocessing","multiprocessing.connection","multiprocessing.dummy","multiprocessing.managers","multiprocessing.pool","multiprocessing.shared_memory","multiprocessing.sharedctypes","netrc","nis","nntplib","numbers","operator","optparse","os","os.path","ossaudiodev","pathlib","pdb","pickle","pickletools","pipes","pkgutil","platform","plistlib","poplib","posix","pprint","profile","pstats","pty","pwd","py_compile","pyclbr","pydoc","queue","quopri","random","re","readline","reprlib","resource","rlcompleter","runpy","sched","secrets","select","selectors","shelve","shlex","shutil","signal","site","smtpd","smtplib","sndhdr","socket","socketserver","spwd","sqlite3","ssl","stat","statistics","string","stringprep","struct","subprocess","sunau","symtable","sys","sysconfig","syslog","tabnanny","tarfile","telnetlib","tempfile","termios","test","test.support","test.support.bytecode_helper","test.support.import_helper","test.support.os_helper","test.support.script_helper","test.support.socket_helper","test.support.threading_helper","test.support.warnings_helper","textwrap","threading","time","timeit","tkinter","tkinter.colorchooser","tkinter.commondialog","tkinter.dnd","tkinter.filedialog","tkinter.font","tkinter.messagebox","tkinter.scrolledtext","tkinter.simpledialog","tkinter.tix","tkinter.ttk","token","tokenize","trace","traceback","tracemalloc","tty","turtle","turtledemo","types","typing","unicodedata","unittest","unittest.mock","urllib","urllib.error","urllib.parse","urllib.request","urllib.response","urllib.robotparser","uu","uuid","venv","warnings","wave","weakref","webbrowser","winreg","winsound","wsgiref","wsgiref.handlers","wsgiref.headers","wsgiref.simple_server","wsgiref.util","wsgiref.validate","xdrlib","xml","xml.dom","xml.dom.minidom","xml.dom.pulldom","xml.etree.ElementTree","xml.parsers.expat","xml.parsers.expat.errors","xml.parsers.expat.model","xml.sax","xml.sax.handler","xml.sax.saxutils","xml.sax.xmlreader","xmlrpc","xmlrpc.client","xmlrpc.server","zipapp","zipfile","zipimport","zlib","zoneinfo"].includes(s),M=s=>/^(\d+!)?(\d+)(\.\d+)+([\\.\-\\_])?((a(lpha)?|b(eta)?|c|r(c|ev)?|pre(view)?)\d*)?(\.?(post|dev)\d*)?$/.test(s),K={key:2},xe=F({__name:"RequirementsEditor",setup(s){const{loading:e,result:t,refetch:a}=D(()=>Promise.all([l.list(),l.recommendations()]).then(([i,r])=>({requirements:i,recommendations:r})));let b=null;P(()=>{b=setInterval(a,2e3)}),S(()=>{b&&clearInterval(b)});function C(){var i;(i=J.computed.result.value)==null||i.openFile("requirements.txt")}async function E(i,r){await l.create(i,r).then(a),a()}const T=[{label:"Name",key:"name",hint:i=>H(i)?"This package is built-in should not be installed":void 0},{label:"Version",key:"version",placeholder:"1.0.0",hint:i=>!i||M(i)?void 0:"Invalid version"}];async function z({name:i,version:r}){await l.create(i,r),a()}const j=B(()=>{var i,r;return{columns:[{name:"Name"},{name:"Version"},{name:"",align:"right"}],rows:(r=(i=t.value)==null?void 0:i.requirements.map(n=>({key:n.name,cells:[{type:"text",text:n.name},{type:"text",text:n.version},{type:"actions",actions:[{icon:O,label:"Delete",async onClick(){await n.delete(),a()},dangerous:!0}]}]})))!=null?r:[]}});return(i,r)=>(c(),g(V,null,{default:m(()=>{var n,_,k;return[h(A,{"entity-name":"Packages",loading:o(e),title:"Requirements",description:"Set pip dependencies for your project. This will create and update your requirements.txt file.","empty-title":"No python packages set",table:j.value,"create-button-text":"Add a package",fields:T,live:"",onCreate:z},{secondary:m(()=>[h(o(v),{onClick:r[0]||(r[0]=d=>C())},{default:m(()=>[p("Open requirements.txt")]),_:1})]),_:1},8,["loading","table"]),(n=o(t))!=null&&n.recommendations.length?(c(),g(o(G),{key:0},{default:m(()=>[p(" Suggested packages ")]),_:1})):f("",!0),(_=o(t))!=null&&_.recommendations.length?(c(),g(o(U),{key:1},{default:m(()=>[p(" The following packages are being utilized by your code but are not listed in your requirements.txt. ")]),_:1})):f("",!0),(k=o(t))!=null&&k.recommendations.length?(c(),y("ul",K,[(c(!0),y($,null,R(o(t).recommendations,d=>(c(),y("li",{key:d.name},[p(q(d.name)+" ("+q(d.version)+") ",1),h(o(v),{onClick:Q=>{var x;return E(d.name,(x=d.version)!=null?x:void 0)}},{default:m(()=>[p(" Add to requirements ")]),_:2},1032,["onClick"])]))),128))])):f("",!0)]}),_:1}))}});export{xe as default};
//# sourceMappingURL=RequirementsEditor.348fe44e.js.map
