var D=Object.defineProperty;var I=(n,e,t)=>e in n?D(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(I(n,typeof e!="symbol"?e+"":e,t),t);import{O as o}from"./index.a2737cd4.js";import{a as T}from"./asyncComputed.8feee535.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="bdf179b0-a22b-4334-aa29-fa599665f27f",n._sentryDebugIdIdentifier="sentry-dbid-bdf179b0-a22b-4334-aa29-fa599665f27f")}catch{}})();const F=o.string(),L=o.array(F),E=o.number(),k=o.string().datetime({local:!0}),P=o.enum(["file","directory"]),j=o.string(),N=o.array(j),w=o.array(N).default([]),b=o.object({pathParts:L,size:E,lastModified:k,type:P,children:w.optional()}),_=o.boolean(),M=o.boolean(),W=o.boolean(),O=o.boolean(),x=o.boolean(),U=o.boolean(),G=o.boolean();o.object({PROJECT_LIVE:_.optional(),ALLOW_RELEASE:M.optional(),CONNECTORS_CONSOLE:W.optional(),DUPLICATE_PROJECTS:O.optional(),WEB_EDITOR:x.optional(),LANGCHAIN_SMART_CHAT:U.optional(),AGENT_USAGE_MODE:G.optional()});const z=o.string(),q=o.string(),H=o.string(),v=o.string(),B=o.string();o.object({plan:z.optional(),expires:q.optional(),message:H.optional(),messageLink:v.optional(),messageCTA:B.optional()});const $=o.string(),g=o.string(),l=o.string(),K=o.string(),Q=o.string(),X=o.object({id:$,name:g,description:l.optional(),projectId:K,createdAt:Q}),Y=o.string(),Z=o.string(),oo=o.string(),eo=o.string(),to=o.string(),no=o.enum(["true","false"]),so=o.enum(["true","false"]),ao=o.enum(["true","false"]),io=o.string().regex(new RegExp("^[0-9]+m$")),mo=o.string().regex(new RegExp("^[0-9]+m$")),ro=o.string().regex(new RegExp("^[0-9]+Mi$")),co=o.string().regex(new RegExp("^[0-9]+Mi$")),lo=o.string().regex(new RegExp("^[0-9]+$")),So=o.number(),bo=o.string().regex(new RegExp("^[0-9]+$")),go=o.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),Ao=o.enum(["3.9","3.10","3.11","3.12"]),Co=o.string(),ho=o.object({watermarkEnabled:no.optional(),seleniumInstanceEnabled:so.optional(),notificationsEnabled:ao.optional(),requestsCPU:io.optional(),limitsCPU:mo.optional(),requestsMemory:ro.optional(),limitsMemory:co.optional(),minReplicas:lo.optional(),computeUnits:So.optional(),timeoutSeconds:bo.optional(),workerType:go.optional(),pythonVersion:Ao.optional(),workerNumber:Co.optional()});o.object({id:Y,folderId:Z,name:oo,subdomain:eo,organizationId:to,deploymentResources:ho.optional()});const po=o.string(),uo=o.string(),A=o.array(uo),C=o.string(),Vo=o.string();o.object({id:po,emailPatterns:A,projectId:C,createdAt:Vo});const fo=o.enum(["true","false"]),Jo=o.enum(["true","false"]),Ro=o.string().regex(new RegExp("^[0-9]+m$")),yo=o.string().regex(new RegExp("^[0-9]+m$")),Do=o.string().regex(new RegExp("^[0-9]+Mi$")),Io=o.string().regex(new RegExp("^[0-9]+Mi$")),To=o.string().regex(new RegExp("^[0-9]+$")),Fo=o.number(),Lo=o.string().regex(new RegExp("^[0-9]+$")),Eo=o.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),ko=o.enum(["3.9","3.10","3.11","3.12"]),Po=o.string(),jo=o.object({watermarkEnabled:fo.optional(),notificationsEnabled:Jo.optional(),requestsCPU:Ro.optional(),limitsCPU:yo.optional(),requestsMemory:Do.optional(),limitsMemory:Io.optional(),minReplicas:To.optional(),computeUnits:Fo.optional(),timeoutSeconds:Lo.optional(),workerType:Eo.optional(),pythonVersion:ko.optional(),workerNumber:Po.optional()}),No=o.enum(["bigint","int8","bigserial","serial8","bit","bit varying","varbit","boolean","bool","box","bytea","character","char","character varying","varchar","cidr","circle","date","double precision","float8","inet","integer","int","int4","interval","json","jsonb","line","lseg","macaddr","money","numeric","decimal","path","pg_lsn","point","polygon","real","float4","smallint","int2","smallserial","serial2","serial","serial4","text","time","time with time zone","timetz","timestamp","timestamp with time zone","timestamptz","tsquery","tsvector","txid_snapshot","uuid","xml"]),wo=o.string(),m=o.string().email(),_o=o.string(),S=o.array(_o),Mo=o.string(),Wo=o.string(),Oo=o.object({id:wo,email:m,roles:S,projectId:Mo,createdAt:Wo}),xo=o.string().uuid(),Uo=o.string(),Go=o.string().uuid(),zo=o.boolean(),qo=o.string(),Ho=No,vo=o.boolean(),Bo=o.boolean(),$o=o.string(),Ko=o.string(),Qo=o.object({columnId:Ko}),Xo=o.object({id:Go,primaryKey:zo,name:qo,type:Ho,unique:vo.optional(),nullable:Bo.optional(),default:$o.optional(),foreignKey:Qo.optional()}),Yo=o.array(Xo),Zo=o.record(o.any()),oe=o.array(Zo),ee=o.object({id:xo,name:Uo,columns:Yo,data:oe}),te=o.array(ee);o.object({tables:te});const h=o.string(),p=o.string(),ne=o.boolean(),se=o.boolean(),ae=o.boolean(),ie=o.boolean(),me=o.boolean(),re=o.boolean(),ce=o.boolean(),u=o.object({PROJECT_LIVE:ne,ALLOW_RELEASE:se,CONNECTORS_CONSOLE:ae,DUPLICATE_PROJECTS:ie,WEB_EDITOR:me.optional(),LANGCHAIN_SMART_CHAT:re.optional(),AGENT_USAGE_MODE:ce.optional()}),le=o.string(),Se=o.string(),be=o.string(),ge=o.string(),Ae=o.string(),d=o.object({plan:le.optional(),expires:Se.optional(),message:be.optional(),messageLink:ge.optional(),messageCTA:Ae.optional()}),Ce=o.string(),he=o.array(Ce),pe=o.object({whitelistPatterns:he.optional()});o.object({id:h,name:p,featureFlags:u,billingMetadata:d,deploymentResources:jo.optional(),membershipsMetadata:pe.optional()});const ue=o.string(),de=o.array(ue);o.object({whitelistPatterns:de.optional()});const Ve=o.string(),fe=o.string(),Je=o.string(),Re=o.null(),ye=o.union([Je,Re]),De=o.string(),Ie=o.null(),Te=o.union([De,Ie]),Fe=o.string(),Le=o.null(),Ee=o.union([Fe,Le]),ke=o.string(),Pe=o.null(),je=o.union([ke,Pe]),Ne=o.string(),we=o.null(),_e=o.union([Ne,we]),Me=o.string(),We=o.null(),Oe=o.union([Me,We]),xe=o.string(),Ue=o.null(),Ge=o.union([xe,Ue]),ze=o.object({name:Ve,language:fe,theme:ye,logo_url:Te,favicon_url:Ee,brand_name:je,main_color:_e,font_family:Oe,font_color:Ge}),qe=o.boolean(),He=o.string(),ve=o.array(He),Be=o.object({is_public:qe,required_roles:ve}),$e=o.object({access_control:Be}),Ke=o.string(),Qe=o.string(),Xe=o.string(),Ye=o.number(),Ze=o.array(Ye),ot=o.string(),et=o.string(),tt=o.string(),nt=o.string(),st=o.string(),at=o.null(),it=o.union([st,at]),i=o.object({id:ot,target_id:et,target_type:tt,type:nt,task_type:it.optional()}),mt=i,rt=o.array(mt),ct=o.string(),lt=o.object({file:Ke,id:Qe,title:Xe,workflow_position:Ze,transitions:rt,schedule:ct}),St=lt,bt=o.array(St),gt=o.string(),At=o.string(),Ct=o.string(),ht=o.number(),pt=o.array(ht),ut=i,dt=o.array(ut),Vt=o.boolean(),ft=o.boolean(),Jt=o.string(),Rt=o.object({file:gt,id:At,title:Ct,workflow_position:pt,transitions:dt,is_initial:Vt,enabled:ft,path:Jt}),yt=Rt,Dt=o.array(yt),It=o.string(),Tt=o.string(),Ft=o.string(),Lt=o.number(),Et=o.array(Lt),kt=i,Pt=o.array(kt),jt=o.string(),Nt=o.null(),wt=o.union([jt,Nt]),_t=o.boolean(),Mt=o.string(),Wt=o.null(),Ot=o.union([Mt,Wt]),xt=o.string(),Ut=o.string(),Gt=o.null(),zt=o.union([Ut,Gt]),qt=o.boolean(),Ht=o.string(),vt=o.boolean(),Bt=o.object({variable_name:Ht,enabled:vt}),$t=o.string(),Kt=o.null(),Qt=o.union([$t,Kt]),Xt=o.boolean(),Yt=o.string(),Zt=o.null(),on=o.union([Yt,Zt]),en=o.string(),tn=o.null(),nn=o.union([en,tn]),sn=o.string(),an=o.null(),mn=o.union([sn,an]),rn=o.boolean(),cn=o.string(),ln=o.array(cn),Sn=o.object({is_public:rn,required_roles:ln}),bn=o.object({file:It,id:Tt,title:Ft,workflow_position:Et,transitions:Pt,restart_button_text:wt,auto_start:_t,end_message:Ot,path:xt,start_button_text:zt,is_initial:qt,notification_trigger:Bt,timeout_message:Qt,allow_restart:Xt,error_message:on,welcome_title:nn,start_message:mn,access_control:Sn}),gn=bn,An=o.array(gn),Cn=o.string(),hn=o.string(),pn=o.string(),un=o.number(),dn=o.array(un),Vn=i,fn=o.array(Vn),Jn=o.boolean(),Rn=o.object({file:Cn,id:hn,title:pn,workflow_position:dn,transitions:fn,is_initial:Jn}),yn=Rn,Dn=o.array(yn),In=o.string(),Tn=o.string(),Fn=o.string().uuid(),Ln=o.null(),En=o.union([Fn,Ln]),kn=o.number(),Pn=o.array(kn),jn=i,Nn=o.array(jn),wn=o.string().uuid(),_n=o.null(),Mn=o.union([wn,_n]),Wn=o.object({id:In,title:Tn,project_id:En,workflow_position:Pn,transitions:Nn,client_stage_id:Mn}),On=o.array(Wn),xn=o.string(),Un=o.string(),Gn=o.number(),zn=o.array(Gn),qn=i,Hn=o.array(qn),vn=o.object({id:xn,title:Un,workflow_position:zn,transitions:Hn}),Bn=o.array(vn),$n=o.enum(["13.0"]);o.object({workspace:ze,home:$e,jobs:bt,hooks:Dt,forms:An,scripts:Dn,agents:On,clients:Bn,version:$n});const Kn=o.string(),Qn=o.string(),Xn=o.string(),Yn=o.null(),Zn=o.union([Xn,Yn]),os=o.string(),es=o.null(),ts=o.union([os,es]),ns=o.string(),ss=o.null(),as=o.union([ns,ss]),is=o.string(),ms=o.null(),rs=o.union([is,ms]),cs=o.string(),ls=o.null(),Ss=o.union([cs,ls]),bs=o.string(),gs=o.null(),As=o.union([bs,gs]),Cs=o.string(),hs=o.null(),ps=o.union([Cs,hs]),us=o.object({name:Kn,language:Qn,theme:Zn,logo_url:ts,favicon_url:as,brand_name:rs,main_color:Ss,font_family:As,font_color:ps}),ds=o.boolean(),Vs=o.string(),fs=o.array(Vs),Js=o.object({is_public:ds,required_roles:fs}),Rs=o.object({access_control:Js}),ys=o.string(),Ds=o.string(),Is=o.string(),Ts=o.number(),Fs=o.array(Ts),Ls=o.string(),Es=o.string(),ks=o.string(),Ps=o.string(),js=o.string(),Ns=o.null(),ws=o.union([js,Ns]),r=o.object({id:Ls,target_id:Es,target_type:ks,type:Ps,task_type:ws.optional()}),_s=r,Ms=o.array(_s),Ws=o.string(),Os=o.object({file:ys,id:Ds,title:Is,workflow_position:Fs,transitions:Ms,schedule:Ws}),xs=Os,Us=o.array(xs),Gs=o.string(),zs=o.string(),qs=o.string(),Hs=o.number(),vs=o.array(Hs),Bs=r,$s=o.array(Bs),Ks=o.boolean(),Qs=o.boolean(),Xs=o.string(),Ys=o.object({file:Gs,id:zs,title:qs,workflow_position:vs,transitions:$s,is_initial:Ks,enabled:Qs,path:Xs}),Zs=Ys,oa=o.array(Zs),ea=o.string(),ta=o.string(),na=o.string(),sa=o.number(),aa=o.array(sa),ia=r,ma=o.array(ia),ra=o.string(),ca=o.null(),la=o.union([ra,ca]),Sa=o.boolean(),ba=o.string(),ga=o.null(),Aa=o.union([ba,ga]),Ca=o.string(),ha=o.string(),pa=o.null(),ua=o.union([ha,pa]),da=o.boolean(),Va=o.string(),fa=o.boolean(),Ja=o.object({variable_name:Va,enabled:fa}),Ra=o.string(),ya=o.null(),Da=o.union([Ra,ya]),Ia=o.boolean(),Ta=o.string(),Fa=o.null(),La=o.union([Ta,Fa]),Ea=o.string(),ka=o.null(),Pa=o.union([Ea,ka]),ja=o.string(),Na=o.null(),wa=o.union([ja,Na]),_a=o.boolean(),Ma=o.string(),Wa=o.array(Ma),Oa=o.object({is_public:_a,required_roles:Wa}),xa=o.object({file:ea,id:ta,title:na,workflow_position:aa,transitions:ma,restart_button_text:la,auto_start:Sa,end_message:Aa,path:Ca,start_button_text:ua,is_initial:da,notification_trigger:Ja,timeout_message:Da,allow_restart:Ia,error_message:La,welcome_title:Pa,start_message:wa,access_control:Oa}),Ua=xa,Ga=o.array(Ua),za=o.string(),qa=o.string(),Ha=o.string(),va=o.number(),Ba=o.array(va),$a=r,Ka=o.array($a),Qa=o.boolean(),Xa=o.object({file:za,id:qa,title:Ha,workflow_position:Ba,transitions:Ka,is_initial:Qa}),Ya=Xa,Za=o.array(Ya),oi=o.enum(["12.0"]);o.object({workspace:us,home:Rs,jobs:Us,hooks:oa,forms:Ga,scripts:Za,version:oi});const ei=o.literal("replace-code"),ti=o.string(),ni=o.number(),si=o.number(),ai=o.object({start:ni,end:si}),ii=o.string(),mi=o.object({action:ei,actionLabel:ti,lines:ai,newCode:ii}),ri=mi,ci=o.literal("edit-stage-name"),li=o.string(),Si=o.string(),bi=o.object({action:ci,actionLabel:li,newName:Si}),gi=bi,Ai=o.literal("add-notifiable-email"),Ci=o.string(),hi=o.string(),pi=o.object({action:Ai,actionLabel:Ci,email:hi}),ui=pi,di=o.union([ri,gi,ui]),Vi=o.array(di),Nc=o.object({actions:Vi}),fi=o.literal("create-table"),Ji=o.string(),Ri=o.string().uuid(),yi=o.string(),Di=o.object({action:fi,actionLabel:Ji,tableId:Ri,tableName:yi}),Ii=Di,Ti=o.literal("create-column"),Fi=o.string(),Li=o.string().uuid(),Ei=o.string(),ki=o.enum(["varchar","int","boolean","json","date","timestamp","uuid","real"]),Pi=o.object({action:Ti,actionLabel:Fi,tableId:Li,columnName:Ei,columnType:ki}),ji=Pi,Ni=o.literal("create-row"),wi=o.string(),_i=o.string(),Mi=o.string(),Wi=o.array(Mi),Oi=o.object({action:Ni,actionLabel:wi,tableName:_i,values:Wi}),xi=Oi,Ui=o.literal("set-env-var"),Gi=o.string(),zi=o.string(),qi=o.string(),Hi=o.object({action:Ui,actionLabel:Gi,key:zi,value:qi}),vi=Hi,Bi=o.literal("create-stage"),$i=o.string(),Ki=o.string().uuid(),Qi=o.enum(["form","job","hook","tasklet"]),Xi=o.string(),Yi=o.string(),Zi=o.string(),om=o.number(),em=o.number(),tm=o.object({x:om,y:em}),nm=o.object({action:Bi,actionLabel:$i,id:Ki,stageType:Qi,stageName:Xi,code:Yi,filename:Zi,position:tm}),sm=nm,am=o.literal("add-transition"),im=o.string(),mm=o.string().uuid(),rm=o.string().uuid(),cm=o.object({action:am,actionLabel:im,sourceStageId:mm,targetStageId:rm}),lm=cm,Sm=o.union([Ii,ji,xi,vi,sm,lm]),bm=o.array(Sm),wc=o.object({actions:bm}),gm=o.enum(["true","false"]),Am=o.enum(["true","false"]),Cm=o.string().regex(new RegExp("^[0-9]+m$")),hm=o.string().regex(new RegExp("^[0-9]+m$")),pm=o.string().regex(new RegExp("^[0-9]+Mi$")),um=o.string().regex(new RegExp("^[0-9]+Mi$")),dm=o.string().regex(new RegExp("^[0-9]+$")),Vm=o.number(),fm=o.string().regex(new RegExp("^[0-9]+$")),Jm=o.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),Rm=o.enum(["3.9","3.10","3.11","3.12"]),ym=o.string();o.object({watermarkEnabled:gm.optional(),notificationsEnabled:Am.optional(),requestsCPU:Cm.optional(),limitsCPU:hm.optional(),requestsMemory:pm.optional(),limitsMemory:um.optional(),minReplicas:dm.optional(),computeUnits:Vm.optional(),timeoutSeconds:fm.optional(),workerType:Jm.optional(),pythonVersion:Rm.optional(),workerNumber:ym.optional()});const Dm=o.enum(["true","false"]),Im=o.enum(["true","false"]),Tm=o.enum(["true","false"]),Fm=o.string().regex(new RegExp("^[0-9]+m$")),Lm=o.string().regex(new RegExp("^[0-9]+m$")),Em=o.string().regex(new RegExp("^[0-9]+Mi$")),km=o.string().regex(new RegExp("^[0-9]+Mi$")),Pm=o.string().regex(new RegExp("^[0-9]+$")),jm=o.number(),Nm=o.string().regex(new RegExp("^[0-9]+$")),wm=o.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),_m=o.enum(["3.9","3.10","3.11","3.12"]),Mm=o.string();o.object({watermarkEnabled:Dm.optional(),seleniumInstanceEnabled:Im.optional(),notificationsEnabled:Tm.optional(),requestsCPU:Fm.optional(),limitsCPU:Lm.optional(),requestsMemory:Em.optional(),limitsMemory:km.optional(),minReplicas:Pm.optional(),computeUnits:jm.optional(),timeoutSeconds:Nm.optional(),workerType:wm.optional(),pythonVersion:_m.optional(),workerNumber:Mm.optional()});const Wm=h,Om=p,xm=u,Um=d;o.object({id:Wm,name:Om,featureFlags:xm,billingMetadata:Um});const Gm=l;o.object({description:Gm});const zm=o.number(),qm=o.number();o.object({offset:zm.optional(),limit:qm.optional()});const Hm=X;o.array(Hm);const vm=g,Bm=l;o.object({name:vm,description:Bm.optional()});const $m=m,Km=S;o.object({email:$m.optional(),roles:Km.optional()});const Qm=o.number(),Xm=o.number();o.object({offset:Qm.optional(),limit:Xm.optional()});const Ym=Oo;o.array(Ym);const Zm=m,or=S;o.object({email:Zm,roles:or});const er=A;o.object({emailPatterns:er});const tr=C;o.object({projectId:tr});const nr=o.string(),sr=o.string();o.object({redirect:nr,ping:sr});const ar=o.string(),ir=o.record(o.any()),mr=o.string(),rr=o.object({key:ar,value:ir,type:mr}),cr=rr,lr=o.array(cr),Sr=o.string(),br=o.string(),gr=o.record(o.any()),V=o.enum(["waiting","running","processing","finished","failed","abandoned"]),Ar=o.string(),Cr=o.string(),hr=o.string(),pr=o.string();o.object({id:Sr,stage:br,data:gr,status:V,created_at:Ar,updated_at:Cr,parent_id:hr.optional(),execution_id:pr.optional()});const ur=o.string(),dr=o.string(),Vr=o.string(),fr=o.string(),Jr=V,Rr=lr,yr=o.string(),Dr=o.object({id:ur,created_at:dr,updated_at:Vr.optional(),assignee:fr.optional(),status:Jr,content:Rr,stage:yr.optional()}),Ir=Dr,f=o.array(Ir),Tr=o.string(),Fr=o.enum(["form","hook","job","script","agents","clients"]),Lr=o.string(),Er=o.string(),kr=o.boolean(),J=o.object({id:Tr,type:Fr,title:Lr,path:Er.optional(),can_be_started:kr}),Pr=J,jr=f,Nr=o.number(),wr=o.boolean(),_r=o.object({selected_stage:Pr,stage_run_cards:jr,total_count:Nr,loading:wr.optional()}),Mr=_r,Wr=o.array(Mr),Or=Wr;o.object({columns:Or});const xr=f,Ur=o.string(),Gr=o.array(Ur),zr=o.number();o.object({stage_run_cards:xr,not_found_stages:Gr,total_count:zr});const qr=J;o.array(qr);const Hr=o.string(),_c=o.object({separator:Hr}),vr=o.boolean(),Mc=o.object({ok:vr.optional()}),Br=o.boolean(),Wc=o.object({ok:Br.optional()}),$r=b,Kr=o.enum(["form","hook","job","script"]),Qr=o.string(),Xr=o.object({type:Kr,id:Qr}),Yr=o.array(Xr),Zr=o.object({file:$r,stages:Yr}),Oc=o.array(Zr),oc=o.boolean(),xc=o.object({ok:oc.optional()}),ec=o.string(),tc=o.array(ec),nc=o.string(),sc=o.array(nc),Uc=o.object({pathParts:tc,newPathParts:sc}),ac=o.boolean(),Gc=o.object({ok:ac.optional()}),zc=b,ic=o.string(),mc=o.string(),rc=o.literal("bug"),cc=o.string(),lc=o.string(),Sc=o.string(),bc=o.object({name:lc,label:Sc}),gc=bc,Ac=o.array(gc),Cc=o.object({label:cc,fixes:Ac}),hc=Cc,pc=o.array(hc),uc=o.object({name:ic,label:mc,type:rc,issues:pc}),dc=o.boolean();o.object({success:dc});const Vc=uc;o.array(Vc);const fc=o.string(),Jc=o.string(),Rc=o.object({name:fc,value:Jc}),yc=Rc;o.array(yc);const Dc=m;o.object({email:Dc});const Ic=o.enum(["ALLOWED","UNAUTHORIZED","FORBIDEN","NOT_FOUND"]);o.object({status:Ic});class Tc{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const a=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!a.ok)throw new Error("Failed to fix");return c.refetch(),a.json()}}const R=new Tc,c=T(async()=>(await R.check()).map(e=>new Ec(e)));class Fc{constructor(e,t){s(this,"name");s(this,"label");s(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await R.fix(this.ruleName,this.name)}}class Lc{constructor(e,t){s(this,"label");s(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(a=>new Fc(a,t))}}class Ec{constructor(e){s(this,"name");s(this,"label");s(this,"type");s(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new Lc(t,this.name))}static get asyncComputed(){return c}static fromName(e){var a;const t=(a=c.result.value)==null?void 0:a.find(y=>y.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}export{Oc as A,wc as C,Ec as L,Nc as a,zc as b,Mc as c,Wc as d,Uc as e,Gc as f,xc as g,_c as h};
//# sourceMappingURL=linters.2556ac81.js.map
