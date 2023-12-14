var z=Object.defineProperty;var j=(i,e,t)=>e in i?z(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _=(i,e,t)=>(j(i,typeof e!="symbol"?e+"":e,t),t);import{a as A}from"./asyncComputed.95737324.js";import{g as P}from"./icons.37b6f90f.js";import{C as D}from"./CrudView.ece8081d.js";import{d as I,G as N,b as c,ev as m,f as k,u as o,c as x,w as b,ex as g,bq as w,eC as V,aq as p,eD as v,bO as S}from"./outputWidgets.396f5ce1.js";import{E as B}from"./record.1aff3d29.js";import{A as F}from"./Title.819eb0fe.js";import{A as O}from"./Text.4e180dc2.js";import"./FormItem.a8de7296.js";import"./hasIn.63a13365.js";import"./Form.716e7fa5.js";import"./Modal.c02a2840.js";import"./router.898a5ca4.js";import"./index.f3919413.js";import"./url.4e42e1d0.js";import"./index.645b3e28.js";import"./index.a44632c5.js";import"./index.f0384574.js";import"./index.a23873b5.js";import"./pubsub.06faa612.js";import"./Base.ee1dde08.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="63cfbd3c-29ac-4d87-8ccb-22c69bb39b25",i._sentryDebugIdIdentifier="sentry-dbid-63cfbd3c-29ac-4d87-8ccb-22c69bb39b25")}catch{}})();class ${async list(){return(await fetch("/_editor/api/requirements")).json()}async recommendations(){return(await fetch("/_editor/api/requirements/recommendations")).json()}async update(e,t){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update requirements")}async create(e){const t=await fetch("/_editor/api/requirements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create requirements");return t.json()}async delete(e){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete requirements")}}const u=new $;class l{constructor(e){_(this,"record");this.record=B.from(e)}static async list(){return(await u.list()).map(t=>new l(t))}static async create(e,t){const a=await u.create({name:e,version:t!=null?t:null});return new l(a)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get version(){var e;return(e=this.record.get("version"))!=null?e:"latest"}set version(e){this.record.set("version",e)}async delete(){await u.delete(this.name)}static async recommendations(){return u.recommendations()}}const R=i=>["__future__","__main__","_thread","abc","aifc","argparse","array","ast","asynchat","asyncio","asyncore","atexit","audioop","base64","bdb","binascii","binhex","bisect","builtins","bz2","calendar","cgi","cgitb","chunk","cmath","cmd","code","codecs","codeop","collections","collections.abc","colorsys","compileall","concurrent","concurrent.futures","configparser","contextlib","contextvars","copy","copyreg","cProfile","crypt","csv","ctypes","curses","curses.ascii","curses.panel","curses.textpad","dataclasses","datetime","dbm","dbm.dumb","dbm.gnu","dbm.ndbm","decimal","difflib","dis","distutils","distutils.archive_util","distutils.bcppcompiler","distutils.ccompiler","distutils.cmd","distutils.command","distutils.command.bdist","distutils.command.bdist_dumb","distutils.command.bdist_msi","distutils.command.bdist_packager","distutils.command.bdist_rpm","distutils.command.build","distutils.command.build_clib","distutils.command.build_ext","distutils.command.build_py","distutils.command.build_scripts","distutils.command.check","distutils.command.clean","distutils.command.config","distutils.command.install","distutils.command.install_data","distutils.command.install_headers","distutils.command.install_lib","distutils.command.install_scripts","distutils.command.register","distutils.command.sdist","distutils.core","distutils.cygwinccompiler","distutils.debug","distutils.dep_util","distutils.dir_util","distutils.dist","distutils.errors","distutils.extension","distutils.fancy_getopt","distutils.file_util","distutils.filelist","distutils.log","distutils.msvccompiler","distutils.spawn","distutils.sysconfig","distutils.text_file","distutils.unixccompiler","distutils.util","distutils.version","doctest","email","email.charset","email.contentmanager","email.encoders","email.errors","email.generator","email.header","email.headerregistry","email.iterators","email.message","email.mime","email.parser","email.policy","email.utils","encodings","encodings.idna","encodings.mbcs","encodings.utf_8_sig","ensurepip","enum","errno","faulthandler","fcntl","filecmp","fileinput","fnmatch","fractions","ftplib","functools","gc","getopt","getpass","gettext","glob","graphlib","grp","gzip","hashlib","heapq","hmac","html","html.entities","html.parser","http","http.client","http.cookiejar","http.cookies","http.server","idlelib","imaplib","imghdr","imp","importlib","importlib.abc","importlib.machinery","importlib.metadata","importlib.resources","importlib.util","inspect","io","ipaddress","itertools","json","json.tool","keyword","lib2to3","linecache","locale","logging","logging.config","logging.handlers","lzma","mailbox","mailcap","marshal","math","mimetypes","mmap","modulefinder","msilib","msvcrt","multiprocessing","multiprocessing.connection","multiprocessing.dummy","multiprocessing.managers","multiprocessing.pool","multiprocessing.shared_memory","multiprocessing.sharedctypes","netrc","nis","nntplib","numbers","operator","optparse","os","os.path","ossaudiodev","pathlib","pdb","pickle","pickletools","pipes","pkgutil","platform","plistlib","poplib","posix","pprint","profile","pstats","pty","pwd","py_compile","pyclbr","pydoc","queue","quopri","random","re","readline","reprlib","resource","rlcompleter","runpy","sched","secrets","select","selectors","shelve","shlex","shutil","signal","site","smtpd","smtplib","sndhdr","socket","socketserver","spwd","sqlite3","ssl","stat","statistics","string","stringprep","struct","subprocess","sunau","symtable","sys","sysconfig","syslog","tabnanny","tarfile","telnetlib","tempfile","termios","test","test.support","test.support.bytecode_helper","test.support.import_helper","test.support.os_helper","test.support.script_helper","test.support.socket_helper","test.support.threading_helper","test.support.warnings_helper","textwrap","threading","time","timeit","tkinter","tkinter.colorchooser","tkinter.commondialog","tkinter.dnd","tkinter.filedialog","tkinter.font","tkinter.messagebox","tkinter.scrolledtext","tkinter.simpledialog","tkinter.tix","tkinter.ttk","token","tokenize","trace","traceback","tracemalloc","tty","turtle","turtledemo","types","typing","unicodedata","unittest","unittest.mock","urllib","urllib.error","urllib.parse","urllib.request","urllib.response","urllib.robotparser","uu","uuid","venv","warnings","wave","weakref","webbrowser","winreg","winsound","wsgiref","wsgiref.handlers","wsgiref.headers","wsgiref.simple_server","wsgiref.util","wsgiref.validate","xdrlib","xml","xml.dom","xml.dom.minidom","xml.dom.pulldom","xml.etree.ElementTree","xml.parsers.expat","xml.parsers.expat.errors","xml.parsers.expat.model","xml.sax","xml.sax.handler","xml.sax.saxutils","xml.sax.xmlreader","xmlrpc","xmlrpc.client","xmlrpc.server","zipapp","zipfile","zipimport","zlib","zoneinfo"].includes(i),J=i=>/^(\d+!)?(\d+)(\.\d+)+([\\.\-\\_])?((a(lpha)?|b(eta)?|c|r(c|ev)?|pre(view)?)\d*)?(\.?(post|dev)\d*)?$/.test(i),L={key:2},pe=I({__name:"RequirementsEditor",setup(i){const{loading:e,result:t,refetch:a}=A(()=>Promise.all([l.list(),l.recommendations()]).then(([s,r])=>({requirements:s,recommendations:r})));async function q(s,r){await l.create(s,r).then(a),a()}const C=[{label:"Name",key:"name",hint:s=>R(s)?"This package is built-in should not be installed":void 0},{label:"Version",key:"version",placeholder:"1.0.0",hint:s=>!s||J(s)?void 0:"Invalid version"}];async function T({name:s,version:r}){await l.create(s,r),a()}const E=N(()=>{var s,r;return{columns:[{name:"Name"},{name:"Version"},{name:"Actions",align:"right"}],rows:(r=(s=t.value)==null?void 0:s.requirements.map(n=>({key:n.name,cells:[{text:n.name},{text:n.version},{text:"Actions",actions:[{icon:P,label:"Delete",async onClick(){await n.delete(),a()},dangerous:!0}]}]})))!=null?r:[]}});return(s,r)=>{var n,h,f;return c(),m(w,null,[k(D,{"entity-name":"Packages",loading:o(e),title:"Python Packages",description:"Set pip dependencies for your project. This will create and update your requirements.txt file.","empty-title":"No python packages set",table:E.value,"create-button-text":"Add a package",fields:C,onCreate:T},null,8,["loading","table"]),(n=o(t))!=null&&n.recommendations.length?(c(),x(o(F),{key:0},{default:b(()=>[p(" Suggested packages ")]),_:1})):g("",!0),(h=o(t))!=null&&h.recommendations.length?(c(),x(o(O),{key:1},{default:b(()=>[p(" The following packages are being utilized by your code but are not listed in your requirements.txt. ")]),_:1})):g("",!0),(f=o(t))!=null&&f.recommendations.length?(c(),m("ul",L,[(c(!0),m(w,null,V(o(t).recommendations,d=>(c(),m("li",{key:d.name},[p(v(d.name)+" ("+v(d.version)+") ",1),k(o(S),{onClick:G=>{var y;return q(d.name,(y=d.version)!=null?y:void 0)}},{default:b(()=>[p(" Add to requirements ")]),_:2},1032,["onClick"])]))),128))])):g("",!0)],64)}}});export{pe as default};
//# sourceMappingURL=RequirementsEditor.1a146eab.js.map
