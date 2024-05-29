var j=Object.defineProperty;var A=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>(A(s,typeof e!="symbol"?e+"":e,t),t);import{C as D}from"./ContentLayout.6fad375e.js";import{C as N}from"./CrudView.dc4ba083.js";import{a as V}from"./asyncComputed.f49c8454.js";import{d as P,o as S,R as F,D as B,b as d,c as g,w as m,eS as R,f as h,u as o,bI as v,au as p,eA as f,ey as y,aG as $,eH as O,eJ as q}from"./outputWidgets.c3ecc2b1.js";import{W as J}from"./envVars.8a15efd1.js";import{E as L}from"./record.fd55283b.js";import{A as G}from"./Title.b86344ee.js";import{A as U}from"./Paragraph.1ab8946c.js";import"./router.6c733e48.js";import"./Form.9d8f3e0d.js";import"./hasIn.e5eb91ac.js";import"./popupNotifcation.950158d4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js";import"./BookOutlined.9b386dd2.js";import"./url.937ab03b.js";import"./Modal.16040c9a.js";import"./index.8431f764.js";import"./Text.b92a3acf.js";import"./Base.7c706a68.js";import"./index.eac3c6bf.js";import"./runnerData.cce2cc97.js";import"./pubsub.9ec6a6b2.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="93b63484-4e2a-4bfb-9e7c-495dcf96849b",s._sentryDebugIdIdentifier="sentry-dbid-93b63484-4e2a-4bfb-9e7c-495dcf96849b")}catch{}})();class W{async list(){return(await fetch("/_editor/api/requirements")).json()}async recommendations(){return(await fetch("/_editor/api/requirements/recommendations")).json()}async update(e,t){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update requirements")}async create(e){const t=await fetch("/_editor/api/requirements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create requirements");return t.json()}async delete(e){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete requirements")}}const u=new W;class l{constructor(e){w(this,"record");this.record=L.from(e)}static async list(){return(await u.list()).map(t=>new l(t))}static async create(e,t){const a=await u.create({name:e,version:t!=null?t:null});return new l(a)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get version(){var e;return(e=this.record.get("version"))!=null?e:"latest"}set version(e){this.record.set("version",e)}async delete(){await u.delete(this.name)}static async recommendations(){return u.recommendations()}}const H=s=>["__future__","__main__","_thread","abc","aifc","argparse","array","ast","asynchat","asyncio","asyncore","atexit","audioop","base64","bdb","binascii","binhex","bisect","builtins","bz2","calendar","cgi","cgitb","chunk","cmath","cmd","code","codecs","codeop","collections","collections.abc","colorsys","compileall","concurrent","concurrent.futures","configparser","contextlib","contextvars","copy","copyreg","cProfile","crypt","csv","ctypes","curses","curses.ascii","curses.panel","curses.textpad","dataclasses","datetime","dbm","dbm.dumb","dbm.gnu","dbm.ndbm","decimal","difflib","dis","distutils","distutils.archive_util","distutils.bcppcompiler","distutils.ccompiler","distutils.cmd","distutils.command","distutils.command.bdist","distutils.command.bdist_dumb","distutils.command.bdist_msi","distutils.command.bdist_packager","distutils.command.bdist_rpm","distutils.command.build","distutils.command.build_clib","distutils.command.build_ext","distutils.command.build_py","distutils.command.build_scripts","distutils.command.check","distutils.command.clean","distutils.command.config","distutils.command.install","distutils.command.install_data","distutils.command.install_headers","distutils.command.install_lib","distutils.command.install_scripts","distutils.command.register","distutils.command.sdist","distutils.core","distutils.cygwinccompiler","distutils.debug","distutils.dep_util","distutils.dir_util","distutils.dist","distutils.errors","distutils.extension","distutils.fancy_getopt","distutils.file_util","distutils.filelist","distutils.log","distutils.msvccompiler","distutils.spawn","distutils.sysconfig","distutils.text_file","distutils.unixccompiler","distutils.util","distutils.version","doctest","email","email.charset","email.contentmanager","email.encoders","email.errors","email.generator","email.header","email.headerregistry","email.iterators","email.message","email.mime","email.parser","email.policy","email.utils","encodings","encodings.idna","encodings.mbcs","encodings.utf_8_sig","ensurepip","enum","errno","faulthandler","fcntl","filecmp","fileinput","fnmatch","fractions","ftplib","functools","gc","getopt","getpass","gettext","glob","graphlib","grp","gzip","hashlib","heapq","hmac","html","html.entities","html.parser","http","http.client","http.cookiejar","http.cookies","http.server","idlelib","imaplib","imghdr","imp","importlib","importlib.abc","importlib.machinery","importlib.metadata","importlib.resources","importlib.util","inspect","io","ipaddress","itertools","json","json.tool","keyword","lib2to3","linecache","locale","logging","logging.config","logging.handlers","lzma","mailbox","mailcap","marshal","math","mimetypes","mmap","modulefinder","msilib","msvcrt","multiprocessing","multiprocessing.connection","multiprocessing.dummy","multiprocessing.managers","multiprocessing.pool","multiprocessing.shared_memory","multiprocessing.sharedctypes","netrc","nis","nntplib","numbers","operator","optparse","os","os.path","ossaudiodev","pathlib","pdb","pickle","pickletools","pipes","pkgutil","platform","plistlib","poplib","posix","pprint","profile","pstats","pty","pwd","py_compile","pyclbr","pydoc","queue","quopri","random","re","readline","reprlib","resource","rlcompleter","runpy","sched","secrets","select","selectors","shelve","shlex","shutil","signal","site","smtpd","smtplib","sndhdr","socket","socketserver","spwd","sqlite3","ssl","stat","statistics","string","stringprep","struct","subprocess","sunau","symtable","sys","sysconfig","syslog","tabnanny","tarfile","telnetlib","tempfile","termios","test","test.support","test.support.bytecode_helper","test.support.import_helper","test.support.os_helper","test.support.script_helper","test.support.socket_helper","test.support.threading_helper","test.support.warnings_helper","textwrap","threading","time","timeit","tkinter","tkinter.colorchooser","tkinter.commondialog","tkinter.dnd","tkinter.filedialog","tkinter.font","tkinter.messagebox","tkinter.scrolledtext","tkinter.simpledialog","tkinter.tix","tkinter.ttk","token","tokenize","trace","traceback","tracemalloc","tty","turtle","turtledemo","types","typing","unicodedata","unittest","unittest.mock","urllib","urllib.error","urllib.parse","urllib.request","urllib.response","urllib.robotparser","uu","uuid","venv","warnings","wave","weakref","webbrowser","winreg","winsound","wsgiref","wsgiref.handlers","wsgiref.headers","wsgiref.simple_server","wsgiref.util","wsgiref.validate","xdrlib","xml","xml.dom","xml.dom.minidom","xml.dom.pulldom","xml.etree.ElementTree","xml.parsers.expat","xml.parsers.expat.errors","xml.parsers.expat.model","xml.sax","xml.sax.handler","xml.sax.saxutils","xml.sax.xmlreader","xmlrpc","xmlrpc.client","xmlrpc.server","zipapp","zipfile","zipimport","zlib","zoneinfo"].includes(s),M=s=>/^(\d+!)?(\d+)(\.\d+)+([\\.\-\\_])?((a(lpha)?|b(eta)?|c|r(c|ev)?|pre(view)?)\d*)?(\.?(post|dev)\d*)?$/.test(s),K={key:2},ke=P({__name:"RequirementsEditor",setup(s){const{loading:e,result:t,refetch:a}=V(()=>Promise.all([l.list(),l.recommendations()]).then(([i,r])=>({requirements:i,recommendations:r})));let b=null;S(()=>{b=setInterval(a,2e3)}),F(()=>{b&&clearInterval(b)});function C(){var i;(i=J.computed.result.value)==null||i.openFile("requirements.txt")}async function T(i,r){await l.create(i,r).then(a),a()}const E=[{label:"Name",key:"name",hint:i=>H(i)?"This package is built-in should not be installed":void 0},{label:"Version",key:"version",placeholder:"1.0.0",hint:i=>!i||M(i)?void 0:"Invalid version"}];async function z({name:i,version:r}){await l.create(i,r),a()}const I=B(()=>{var i,r;return{columns:[{name:"Name"},{name:"Version"},{name:"",align:"right"}],rows:(r=(i=t.value)==null?void 0:i.requirements.map(n=>({key:n.name,cells:[{type:"text",text:n.name},{type:"text",text:n.version},{type:"actions",actions:[{icon:R,label:"Delete",async onClick(){await n.delete(),a()},dangerous:!0}]}]})))!=null?r:[]}});return(i,r)=>(d(),g(D,null,{default:m(()=>{var n,_,k;return[h(N,{"entity-name":"Packages",loading:o(e),title:"Requirements",description:"Set pip dependencies for your project. This will create and update your requirements.txt file.","empty-title":"No python packages set",table:I.value,"create-button-text":"Add a package",fields:E,live:"",onCreate:z},{secondary:m(()=>[h(o(v),{onClick:r[0]||(r[0]=c=>C())},{default:m(()=>[p("Open requirements.txt")]),_:1})]),_:1},8,["loading","table"]),(n=o(t))!=null&&n.recommendations.length?(d(),g(o(G),{key:0},{default:m(()=>[p(" Suggested packages ")]),_:1})):f("",!0),(_=o(t))!=null&&_.recommendations.length?(d(),g(o(U),{key:1},{default:m(()=>[p(" The following packages are being utilized by your code but are not listed in your requirements.txt. ")]),_:1})):f("",!0),(k=o(t))!=null&&k.recommendations.length?(d(),y("ul",K,[(d(!0),y($,null,O(o(t).recommendations,c=>(d(),y("li",{key:c.name},[p(q(c.name)+" ("+q(c.version)+") ",1),h(o(v),{onClick:Q=>{var x;return T(c.name,(x=c.version)!=null?x:void 0)}},{default:m(()=>[p(" Add to requirements ")]),_:2},1032,["onClick"])]))),128))])):f("",!0)]}),_:1}))}});export{ke as default};
//# sourceMappingURL=RequirementsEditor.916483c6.js.map
