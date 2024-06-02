var I=Object.defineProperty;var V=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>(V(s,typeof e!="symbol"?e+"":e,t),t);import{C as N}from"./ContentLayout.20930151.js";import{C as D}from"./CrudView.05c3844a.js";import{a as F}from"./asyncComputed.9b0e08d2.js";import{d as P,o as S,R as A,y as B,b as d,c as g,w as m,fd as R,f as h,u as a,bF as v,am as p,cW as $,eX as f,cU as O,eV as y,ay as L,f2 as U,f4 as q}from"./outputWidgets.86836a5b.js";import{W}from"./workspaces.c21e157e.js";import{E as J}from"./record.0986899d.js";import"./router.7e91ba84.js";import"./Form.74e3eea5.js";import"./hasIn.13b5b847.js";import"./gateway.e1870887.js";import"./popupNotifcation.6b613167.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2122b6c5.js";import"./BookOutlined.c2880beb.js";import"./url.941df304.js";import"./Modal.2a78a705.js";import"./index.cd1690f4.js";import"./runnerData.8d12464e.js";import"./pubsub.6638b425.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="2a6f6330-c967-4a30-a8b5-b689354a64bd",s._sentryDebugIdIdentifier="sentry-dbid-2a6f6330-c967-4a30-a8b5-b689354a64bd")}catch{}})();class G{async list(){return(await fetch("/_editor/api/requirements")).json()}async recommendations(){return(await fetch("/_editor/api/requirements/recommendations")).json()}async update(e,t){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update requirements")}async create(e){const t=await fetch("/_editor/api/requirements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create requirements");return t.json()}async delete(e){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete requirements")}}const u=new G;class l{constructor(e){w(this,"record");this.record=J.from(e)}static async list(){return(await u.list()).map(t=>new l(t))}static async create(e,t){const o=await u.create({name:e,version:t!=null?t:null});return new l(o)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get version(){var e;return(e=this.record.get("version"))!=null?e:"latest"}set version(e){this.record.set("version",e)}async delete(){await u.delete(this.name)}static async recommendations(){return u.recommendations()}}const M=s=>["__future__","__main__","_thread","abc","aifc","argparse","array","ast","asynchat","asyncio","asyncore","atexit","audioop","base64","bdb","binascii","binhex","bisect","builtins","bz2","calendar","cgi","cgitb","chunk","cmath","cmd","code","codecs","codeop","collections","collections.abc","colorsys","compileall","concurrent","concurrent.futures","configparser","contextlib","contextvars","copy","copyreg","cProfile","crypt","csv","ctypes","curses","curses.ascii","curses.panel","curses.textpad","dataclasses","datetime","dbm","dbm.dumb","dbm.gnu","dbm.ndbm","decimal","difflib","dis","distutils","distutils.archive_util","distutils.bcppcompiler","distutils.ccompiler","distutils.cmd","distutils.command","distutils.command.bdist","distutils.command.bdist_dumb","distutils.command.bdist_msi","distutils.command.bdist_packager","distutils.command.bdist_rpm","distutils.command.build","distutils.command.build_clib","distutils.command.build_ext","distutils.command.build_py","distutils.command.build_scripts","distutils.command.check","distutils.command.clean","distutils.command.config","distutils.command.install","distutils.command.install_data","distutils.command.install_headers","distutils.command.install_lib","distutils.command.install_scripts","distutils.command.register","distutils.command.sdist","distutils.core","distutils.cygwinccompiler","distutils.debug","distutils.dep_util","distutils.dir_util","distutils.dist","distutils.errors","distutils.extension","distutils.fancy_getopt","distutils.file_util","distutils.filelist","distutils.log","distutils.msvccompiler","distutils.spawn","distutils.sysconfig","distutils.text_file","distutils.unixccompiler","distutils.util","distutils.version","doctest","email","email.charset","email.contentmanager","email.encoders","email.errors","email.generator","email.header","email.headerregistry","email.iterators","email.message","email.mime","email.parser","email.policy","email.utils","encodings","encodings.idna","encodings.mbcs","encodings.utf_8_sig","ensurepip","enum","errno","faulthandler","fcntl","filecmp","fileinput","fnmatch","fractions","ftplib","functools","gc","getopt","getpass","gettext","glob","graphlib","grp","gzip","hashlib","heapq","hmac","html","html.entities","html.parser","http","http.client","http.cookiejar","http.cookies","http.server","idlelib","imaplib","imghdr","imp","importlib","importlib.abc","importlib.machinery","importlib.metadata","importlib.resources","importlib.util","inspect","io","ipaddress","itertools","json","json.tool","keyword","lib2to3","linecache","locale","logging","logging.config","logging.handlers","lzma","mailbox","mailcap","marshal","math","mimetypes","mmap","modulefinder","msilib","msvcrt","multiprocessing","multiprocessing.connection","multiprocessing.dummy","multiprocessing.managers","multiprocessing.pool","multiprocessing.shared_memory","multiprocessing.sharedctypes","netrc","nis","nntplib","numbers","operator","optparse","os","os.path","ossaudiodev","pathlib","pdb","pickle","pickletools","pipes","pkgutil","platform","plistlib","poplib","posix","pprint","profile","pstats","pty","pwd","py_compile","pyclbr","pydoc","queue","quopri","random","re","readline","reprlib","resource","rlcompleter","runpy","sched","secrets","select","selectors","shelve","shlex","shutil","signal","site","smtpd","smtplib","sndhdr","socket","socketserver","spwd","sqlite3","ssl","stat","statistics","string","stringprep","struct","subprocess","sunau","symtable","sys","sysconfig","syslog","tabnanny","tarfile","telnetlib","tempfile","termios","test","test.support","test.support.bytecode_helper","test.support.import_helper","test.support.os_helper","test.support.script_helper","test.support.socket_helper","test.support.threading_helper","test.support.warnings_helper","textwrap","threading","time","timeit","tkinter","tkinter.colorchooser","tkinter.commondialog","tkinter.dnd","tkinter.filedialog","tkinter.font","tkinter.messagebox","tkinter.scrolledtext","tkinter.simpledialog","tkinter.tix","tkinter.ttk","token","tokenize","trace","traceback","tracemalloc","tty","turtle","turtledemo","types","typing","unicodedata","unittest","unittest.mock","urllib","urllib.error","urllib.parse","urllib.request","urllib.response","urllib.robotparser","uu","uuid","venv","warnings","wave","weakref","webbrowser","winreg","winsound","wsgiref","wsgiref.handlers","wsgiref.headers","wsgiref.simple_server","wsgiref.util","wsgiref.validate","xdrlib","xml","xml.dom","xml.dom.minidom","xml.dom.pulldom","xml.etree.ElementTree","xml.parsers.expat","xml.parsers.expat.errors","xml.parsers.expat.model","xml.sax","xml.sax.handler","xml.sax.saxutils","xml.sax.xmlreader","xmlrpc","xmlrpc.client","xmlrpc.server","zipapp","zipfile","zipimport","zlib","zoneinfo"].includes(s),X=s=>/^(\d+!)?(\d+)(\.\d+)+([\\.\-\\_])?((a(lpha)?|b(eta)?|c|r(c|ev)?|pre(view)?)\d*)?(\.?(post|dev)\d*)?$/.test(s),H={key:2},he=P({__name:"RequirementsEditor",setup(s){const{loading:e,result:t,refetch:o}=F(()=>Promise.all([l.list(),l.recommendations()]).then(([i,r])=>({requirements:i,recommendations:r})));let b=null;S(()=>{b=setInterval(o,2e3)}),A(()=>{b&&clearInterval(b)});function C(){var i;(i=W.computed.result.value)==null||i.openFile("requirements.txt")}async function E(i,r){await l.create(i,r).then(o),o()}const T=[{label:"Name",key:"name",hint:i=>M(i)?"This package is built-in should not be installed":void 0},{label:"Version",key:"version",placeholder:"1.0.0",hint:i=>!i||X(i)?void 0:"Invalid version"}];async function z({name:i,version:r}){await l.create(i,r),o()}const j=B(()=>{var i,r;return{columns:[{name:"Name"},{name:"Version"},{name:"",align:"right"}],rows:(r=(i=t.value)==null?void 0:i.requirements.map(n=>({key:n.name,cells:[{type:"text",text:n.name},{type:"text",text:n.version},{type:"actions",actions:[{icon:R,label:"Delete",async onClick(){await n.delete(),o()},dangerous:!0}]}]})))!=null?r:[]}});return(i,r)=>(d(),g(N,null,{default:m(()=>{var n,_,k;return[h(D,{"entity-name":"Packages",loading:a(e),title:"Requirements",description:"Set pip dependencies for your project. This will create and update your requirements.txt file.","empty-title":"No python packages set",table:j.value,"create-button-text":"Add a package",fields:T,live:"",onCreate:z},{secondary:m(()=>[h(a(v),{onClick:r[0]||(r[0]=c=>C())},{default:m(()=>[p("Open requirements.txt")]),_:1})]),_:1},8,["loading","table"]),(n=a(t))!=null&&n.recommendations.length?(d(),g(a($),{key:0},{default:m(()=>[p(" Suggested packages ")]),_:1})):f("",!0),(_=a(t))!=null&&_.recommendations.length?(d(),g(a(O),{key:1},{default:m(()=>[p(" The following packages are being utilized by your code but are not listed in your requirements.txt. ")]),_:1})):f("",!0),(k=a(t))!=null&&k.recommendations.length?(d(),y("ul",H,[(d(!0),y(L,null,U(a(t).recommendations,c=>(d(),y("li",{key:c.name},[p(q(c.name)+" ("+q(c.version)+") ",1),h(a(v),{onClick:K=>{var x;return E(c.name,(x=c.version)!=null?x:void 0)}},{default:m(()=>[p(" Add to requirements ")]),_:2},1032,["onClick"])]))),128))])):f("",!0)]}),_:1}))}});export{he as default};
//# sourceMappingURL=RequirementsEditor.b0e41dfc.js.map
