var I=Object.defineProperty;var L=(t,e,a)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var c=(t,e,a)=>(L(t,typeof e!="symbol"?e+"":e,a),a);import{U as s,e as z,V as b,d as O,W as U,g as V,X as j,o as v,Y as f,u as p,S as H,b as R,w as B,Z as N,$ as K,A as q,a0 as J}from"./index.45f399db.js";import{i as x,a as y,b as Z,l as W,c as k}from"./colorHelpers.cdff59f1.js";import{t as G}from"./index.3d3f97de.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ebd639ef-f52b-4137-9eac-97409eb8a776",t._sentryDebugIdIdentifier="sentry-dbid-ebd639ef-f52b-4137-9eac-97409eb8a776")}catch{}})();const Q={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"best\xE4tigen",page:"",prev_page:"Vorherige Seite",next_page:"N\xE4chste Seite",prev_5:"5 Seiten zur\xFCck",next_5:"5 Seiten vor",prev_3:"3 Seiten zur\xFCck",next_3:"3 Seiten vor"},X={locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zur\xFCck zu Heute",ok:"OK",clear:"Zur\xFCcksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit w\xE4hlen",dateSelect:"Datum w\xE4hlen",monthSelect:"W\xE4hle einen Monat",yearSelect:"W\xE4hle ein Jahr",decadeSelect:"W\xE4hle ein Jahrzehnt",yearFormat:"YYYY",dateFormat:"D.M.YYYY",dayFormat:"D",dateTimeFormat:"D.M.YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"N\xE4chster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"N\xE4chstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"N\xE4chstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"N\xE4chstes Jahrhundert"},ee=X,ae={placeholder:"Zeit ausw\xE4hlen"},A=ae,te={lang:s({placeholder:"Datum ausw\xE4hlen",rangePlaceholder:["Startdatum","Enddatum"]},ee),timePickerLocale:s({},A)},S=te,l="${label} ist nicht g\xFCltig. ${type} erwartet",le={locale:"de",Pagination:Q,DatePicker:S,TimePicker:A,Calendar:S,global:{placeholder:"Bitte ausw\xE4hlen"},Table:{filterTitle:"Filter-Men\xFC",filterConfirm:"OK",filterReset:"Zur\xFCcksetzen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"W\xE4hlen Sie alle Daten aus",sortTitle:"Sortieren",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden  Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Eintr\xE4ge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite ausw\xE4hlen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle ausw\xE4hlen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},PageHeader:{back:"Zur\xFCck"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ung\xFCltiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ung\xFCltiges Datum"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf h\xF6chstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es m\xFCssen ${len} ${label} sein",min:"Es m\xFCssen mindestens ${min} ${label} sein",max:"Es d\xFCrfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} enspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"}},re=le,ne={items_per_page:"/ p\xE1gina",jump_to:"Ir a",jump_to_confirm:"confirmar",page:"",prev_page:"P\xE1gina anterior",next_page:"P\xE1gina siguiente",prev_5:"5 p\xE1ginas previas",next_5:"5 p\xE1ginas siguientes",prev_3:"3 p\xE1ginas previas",next_3:"3 p\xE1ginas siguientes"},oe={locale:"es_ES",today:"Hoy",now:"Ahora",backToToday:"Volver a hoy",ok:"Aceptar",clear:"Limpiar",month:"Mes",year:"A\xF1o",timeSelect:"Seleccionar hora",dateSelect:"Seleccionar fecha",monthSelect:"Elegir un mes",yearSelect:"Elegir un a\xF1o",decadeSelect:"Elegir una d\xE9cada",yearFormat:"YYYY",dateFormat:"D/M/YYYY",dayFormat:"D",dateTimeFormat:"D/M/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Mes anterior (PageUp)",nextMonth:"Mes siguiente (PageDown)",previousYear:"A\xF1o anterior (Control + left)",nextYear:"A\xF1o siguiente (Control + right)",previousDecade:"D\xE9cada anterior",nextDecade:"D\xE9cada siguiente",previousCentury:"Siglo anterior",nextCentury:"Siglo siguiente"},ie=oe,ce={placeholder:"Seleccionar hora"},F=ce,se={lang:s({placeholder:"Seleccionar fecha",rangePlaceholder:["Fecha inicial","Fecha final"]},ie),timePickerLocale:s({},F)},P=se,r="${label} no es un ${type} v\xE1lido",me={locale:"es",Pagination:ne,DatePicker:P,TimePicker:F,Calendar:P,global:{placeholder:"Seleccione"},Table:{filterTitle:"Filtrar men\xFA",filterConfirm:"Aceptar",filterReset:"Reiniciar",filterEmptyText:"Sin filtros",emptyText:"Sin datos",selectAll:"Seleccionar todo",selectInvert:"Invertir selecci\xF3n",selectNone:"Vac\xEDe todo",selectionAll:"Seleccionar todos los datos",sortTitle:"Ordenar",expand:"Expandir fila",collapse:"Colapsar fila",triggerDesc:"Click para ordenar en orden descendente",triggerAsc:"Click para ordenar en orden ascendente",cancelSort:"Click para cancelar ordenamiento"},Modal:{okText:"Aceptar",cancelText:"Cancelar",justOkText:"Aceptar"},Popconfirm:{okText:"Aceptar",cancelText:"Cancelar"},Transfer:{titles:["",""],searchPlaceholder:"Buscar aqu\xED",itemUnit:"elemento",itemsUnit:"elementos",remove:"Eliminar",selectCurrent:"Seleccionar p\xE1gina actual",removeCurrent:"Remover p\xE1gina actual",selectAll:"Seleccionar todos los datos",removeAll:"Eliminar todos los datos",selectInvert:"Invertir p\xE1gina actual"},Upload:{uploading:"Subiendo...",removeFile:"Eliminar archivo",uploadError:"Error al subir el archivo",previewFile:"Vista previa",downloadFile:"Descargar archivo"},Empty:{description:"No hay datos"},Icon:{icon:"\xEDcono"},Text:{edit:"Editar",copy:"Copiar",copied:"Copiado",expand:"Expandir"},PageHeader:{back:"Volver"},Form:{optional:"(opcional)",defaultValidateMessages:{default:"Error de validaci\xF3n del campo ${label}",required:"Por favor ingresar ${label}",enum:"${label} debe ser uno de [${enum}]",whitespace:"${label} no puede ser un car\xE1cter en blanco",date:{format:"El formato de fecha de ${label} es inv\xE1lido",parse:"${label} no se puede convertir a una fecha",invalid:"${label} es una fecha inv\xE1lida"},types:{string:r,method:r,array:r,object:r,number:r,date:r,boolean:r,integer:r,float:r,regexp:r,email:r,url:r,hex:r},string:{len:"${label} debe tener ${len} caracteres",min:"${label} debe tener al menos ${min} caracteres",max:"${label} debe tener hasta ${max} caracteres",range:"${label} debe tener entre ${min}-${max} caracteres"},number:{len:"${label} debe ser igual a ${len}",min:"${label} valor m\xEDnimo es ${min}",max:"${label} valor m\xE1ximo es ${max}",range:"${label} debe estar entre ${min}-${max}"},array:{len:"Debe ser ${len} ${label}",min:"Al menos ${min} ${label}",max:"A lo mucho ${max} ${label}",range:"El monto de ${label} debe estar entre ${min}-${max}"},pattern:{mismatch:"${label} no coincide con el patr\xF3n ${pattern}"}}},Image:{preview:"Previsualizaci\xF3n"}},de=me,ue={items_per_page:"/ page",jump_to:"Aller \xE0",jump_to_confirm:"confirmer",page:"",prev_page:"Page pr\xE9c\xE9dente",next_page:"Page suivante",prev_5:"5 Pages pr\xE9c\xE9dentes",next_5:"5 Pages suivantes",prev_3:"3 Pages pr\xE9c\xE9dentes",next_3:"3 Pages suivantes"},pe={locale:"fr_FR",today:"Aujourd'hui",now:"Maintenant",backToToday:"Aujourd'hui",ok:"Ok",clear:"R\xE9tablir",month:"Mois",year:"Ann\xE9e",timeSelect:"S\xE9lectionner l'heure",dateSelect:"S\xE9lectionner la date",monthSelect:"Choisissez un mois",yearSelect:"Choisissez une ann\xE9e",decadeSelect:"Choisissez une d\xE9cennie",yearFormat:"YYYY",dateFormat:"DD/MM/YYYY",dayFormat:"DD",dateTimeFormat:"DD/MM/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Mois pr\xE9c\xE9dent (PageUp)",nextMonth:"Mois suivant (PageDown)",previousYear:"Ann\xE9e pr\xE9c\xE9dente (Ctrl + gauche)",nextYear:"Ann\xE9e prochaine (Ctrl + droite)",previousDecade:"D\xE9cennie pr\xE9c\xE9dente",nextDecade:"D\xE9cennie suivante",previousCentury:"Si\xE8cle pr\xE9c\xE9dent",nextCentury:"Si\xE8cle suivant"},ge=pe,he={placeholder:"S\xE9lectionner l'heure",rangePlaceholder:["Heure de d\xE9but","Heure de fin"]},w=he,$e={lang:s({placeholder:"S\xE9lectionner une date",yearPlaceholder:"S\xE9lectionner une ann\xE9e",quarterPlaceholder:"S\xE9lectionner un trimestre",monthPlaceholder:"S\xE9lectionner un mois",weekPlaceholder:"S\xE9lectionner une semaine",rangePlaceholder:["Date de d\xE9but","Date de fin"],rangeYearPlaceholder:["Ann\xE9e de d\xE9but","Ann\xE9e de fin"],rangeMonthPlaceholder:["Mois de d\xE9but","Mois de fin"],rangeWeekPlaceholder:["Semaine de d\xE9but","Semaine de fin"]},ge),timePickerLocale:s({},w)},T=$e,n="La valeur du champ ${label} n'est pas valide pour le type ${type}",be={locale:"fr",Pagination:ue,DatePicker:T,TimePicker:w,Calendar:T,Table:{filterTitle:"Filtrer",filterConfirm:"OK",filterReset:"R\xE9initialiser",filterEmptyText:"Aucun filtre",emptyText:"Aucune donn\xE9e",selectAll:"S\xE9lectionner la page actuelle",selectInvert:"Inverser la s\xE9lection de la page actuelle",selectNone:"D\xE9s\xE9lectionner toutes les donn\xE9es",selectionAll:"S\xE9lectionner toutes les donn\xE9es",sortTitle:"Trier",expand:"D\xE9velopper la ligne",collapse:"R\xE9duire la ligne",triggerDesc:"Trier par ordre d\xE9croissant",triggerAsc:"Trier par ordre croissant",cancelSort:"Annuler le tri"},Modal:{okText:"OK",cancelText:"Annuler",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Annuler"},Transfer:{titles:["",""],searchPlaceholder:"Rechercher",itemUnit:"\xE9l\xE9ment",itemsUnit:"\xE9l\xE9ments",remove:"D\xE9s\xE9lectionner",selectCurrent:"S\xE9lectionner la page actuelle",removeCurrent:"D\xE9s\xE9lectionner la page actuelle",selectAll:"S\xE9lectionner toutes les donn\xE9es",removeAll:"D\xE9s\xE9lectionner toutes les donn\xE9es",selectInvert:"Inverser la s\xE9lection de la page actuelle"},Upload:{uploading:"T\xE9l\xE9chargement...",removeFile:"Effacer le fichier",uploadError:"Erreur de t\xE9l\xE9chargement",previewFile:"Fichier de pr\xE9visualisation",downloadFile:"T\xE9l\xE9charger un fichier"},Empty:{description:"Aucune donn\xE9e"},Icon:{icon:"ic\xF4ne"},Text:{edit:"\xC9diter",copy:"Copier",copied:"Copie effectu\xE9e",expand:"D\xE9velopper"},PageHeader:{back:"Retour"},Form:{optional:"(optionnel)",defaultValidateMessages:{default:"Erreur de validation pour le champ ${label}",required:"Le champ ${label} est obligatoire",enum:"La valeur du champ ${label} doit \xEAtre parmi [${enum}]",whitespace:"La valeur du champ ${label} ne peut pas \xEAtre vide",date:{format:"La valeur du champ ${label} n'est pas au format date",parse:"La valeur du champ ${label} ne peut pas \xEAtre convertie vers une date",invalid:"La valeur du champ ${label} n'est pas une date valide"},types:{string:n,method:n,array:n,object:n,number:n,date:n,boolean:n,integer:n,float:n,regexp:n,email:n,url:n,hex:n},string:{len:"La taille du champ ${label} doit \xEAtre de ${len} caract\xE8res",min:"La taille du champ ${label} doit \xEAtre au minimum de ${min} caract\xE8res",max:"La taille du champ ${label} doit \xEAtre au maximum de ${max} caract\xE8res",range:"La taille du champ ${label} doit \xEAtre entre ${min} et ${max} caract\xE8res"},number:{len:"La valeur du champ ${label} doit \xEAtre \xE9gale \xE0 ${len}",min:"La valeur du champ ${label} doit \xEAtre plus grande que ${min}",max:"La valeur du champ ${label} doit \xEAtre plus petit que ${max}",range:"La valeur du champ ${label} doit \xEAtre entre ${min} et ${max}"},array:{len:"La taille du tableau ${label} doit \xEAtre de ${len}",min:"La taille du tableau ${label} doit \xEAtre au minimum de ${min}",max:"La taille du tableau ${label} doit \xEAtre au maximum de ${max}",range:"La taille du tableau ${label} doit \xEAtre entre ${min}-${max}"},pattern:{mismatch:"La valeur du champ ${label} ne correspond pas au mod\xE8le ${pattern}"}}},Image:{preview:"Aper\xE7u"}},ve=be,fe={items_per_page:"/ \u092A\u0943\u0937\u094D\u0920",jump_to:"\u0907\u0938 \u092A\u0930 \u091A\u0932\u0947\u0902",jump_to_confirm:"\u092A\u0941\u0937\u094D\u091F\u093F \u0915\u0930\u0947\u0902",page:"",prev_page:"\u092A\u093F\u091B\u0932\u093E \u092A\u0943\u0937\u094D\u0920",next_page:"\u0905\u0917\u0932\u093E \u092A\u0943\u0937\u094D\u0920",prev_5:"\u092A\u093F\u091B\u0932\u0947 5 \u092A\u0943\u0937\u094D\u0920",next_5:"\u0905\u0917\u0932\u0947 5 \u092A\u0943\u0937\u094D\u0920",prev_3:"\u092A\u093F\u091B\u0932\u0947 3 \u092A\u0943\u0937\u094D\u0920",next_3:"\u0905\u0917\u0932\u0947 3 \u092A\u0947\u091C"},xe={locale:"hi_IN",today:"\u0906\u091C",now:"\u0905\u092D\u0940",backToToday:"\u0906\u091C \u0924\u0915",ok:"\u0920\u0940\u0915",clear:"\u0938\u094D\u092A\u0937\u094D\u091F",month:"\u092E\u0939\u0940\u0928\u093E",year:"\u0938\u093E\u0932",timeSelect:"\u0938\u092E\u092F \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",dateSelect:"\u0924\u093E\u0930\u0940\u0916\u093C \u091A\u0941\u0928\u0947\u0902",weekSelect:"\u090F\u0915 \u0938\u092A\u094D\u0924\u093E\u0939 \u091A\u0941\u0928\u0947\u0902",monthSelect:"\u090F\u0915 \u092E\u0939\u0940\u0928\u093E \u091A\u0941\u0928\u0947\u0902",yearSelect:"\u090F\u0915 \u0935\u0930\u094D\u0937 \u091A\u0941\u0928\u0947\u0902",decadeSelect:"\u090F\u0915 \u0926\u0936\u0915 \u091A\u0941\u0928\u0947\u0902",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"\u092A\u093F\u091B\u0932\u093E \u092E\u0939\u0940\u0928\u093E (\u092A\u0947\u091C\u0905\u092A)",nextMonth:"\u0905\u0917\u0932\u0947 \u092E\u0939\u0940\u0928\u0947 (\u092A\u0947\u091C\u0921\u093E\u0909\u0928)",previousYear:"\u092A\u093F\u091B\u0932\u0947 \u0938\u093E\u0932 (Ctrl + \u092C\u093E\u090F\u0902)",nextYear:"\u0905\u0917\u0932\u0947 \u0938\u093E\u0932 (Ctrl + \u0926\u093E\u0939\u093F\u0928\u093E)",previousDecade:"\u092A\u093F\u091B\u0932\u093E \u0926\u0936\u0915",nextDecade:"\u0905\u0917\u0932\u0947 \u0926\u0936\u0915",previousCentury:"\u092A\u0940\u091B\u094D\u0932\u0940 \u0936\u0924\u093E\u092C\u094D\u0926\u0940",nextCentury:"\u0905\u0917\u0932\u0940 \u0938\u0926\u0940"},ye=xe,ke={placeholder:"\u0938\u092E\u092F \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",rangePlaceholder:["\u0906\u0930\u0902\u092D\u093F\u0915 \u0938\u092E\u092F","\u0905\u0902\u0924 \u0938\u092E\u092F"]},M=ke,Se={lang:s({placeholder:"\u0924\u093E\u0930\u0940\u0916\u093C \u091A\u0941\u0928\u0947\u0902",yearPlaceholder:"\u0935\u0930\u094D\u0937 \u091A\u0941\u0928\u0947\u0902",quarterPlaceholder:"\u0924\u093F\u092E\u093E\u0939\u0940 \u091A\u0941\u0928\u0947\u0902",monthPlaceholder:"\u092E\u0939\u0940\u0928\u093E \u091A\u0941\u0928\u093F\u090F",weekPlaceholder:"\u0938\u092A\u094D\u0924\u093E\u0939 \u091A\u0941\u0928\u0947\u0902",rangePlaceholder:["\u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0924\u093F\u0925\u093F","\u0938\u092E\u093E\u092A\u094D\u0924\u093F \u0924\u093F\u0925\u093F"],rangeYearPlaceholder:["\u0906\u0930\u0902\u092D\u093F\u0915 \u0935\u0930\u094D\u0937","\u0905\u0902\u0924 \u0935\u0930\u094D\u0937"],rangeMonthPlaceholder:["\u0906\u0930\u0902\u092D\u093F\u0915 \u092E\u0939\u0940\u0928\u093E","\u0905\u0902\u0924 \u092E\u0939\u0940\u0928\u093E"],rangeWeekPlaceholder:["\u0906\u0930\u0902\u092D\u093F\u0915 \u0938\u092A\u094D\u0924\u093E\u0939","\u0905\u0902\u0924 \u0938\u092A\u094D\u0924\u093E\u0939"]},ye),timePickerLocale:s({},M)},D=Se,o="${label} \u092E\u093E\u0928\u094D\u092F ${type} \u0928\u0939\u0940\u0902 \u0939\u0948",Pe={locale:"hi",Pagination:fe,DatePicker:D,TimePicker:M,Calendar:D,global:{placeholder:"\u0915\u0943\u092A\u092F\u093E \u091A\u0941\u0928\u0947\u0902"},Table:{filterTitle:"\u0938\u0942\u091A\u0940 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",filterConfirm:"\u0905\u091A\u094D\u091B\u0940 \u0924\u0930\u0939 \u0938\u0947",filterReset:"\u0930\u0940\u0938\u0947\u091F",filterEmptyText:"\u0915\u094B\u0908 \u092B\u093C\u093F\u0932\u094D\u091F\u0930 \u0928\u0939\u0940\u0902",emptyText:"\u0915\u094B\u0908 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0928\u0939\u0940\u0902",selectAll:"\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092A\u0943\u0937\u094D\u0920 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",selectInvert:"\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092A\u0943\u0937\u094D\u0920 \u0918\u0941\u092E\u093E\u090F\u0902",selectNone:"\u0938\u092D\u0940 \u0921\u0947\u091F\u093E \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902",selectionAll:"\u0938\u092D\u0940 \u0921\u0947\u091F\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",sortTitle:"\u0926\u094D\u0935\u093E\u0930\u093E \u0915\u094D\u0930\u092E\u092C\u0926\u094D\u0927 \u0915\u0930\u0947\u0902",expand:"\u092A\u0902\u0915\u094D\u0924\u093F \u0915\u093E \u0935\u093F\u0938\u094D\u0924\u093E\u0930 \u0915\u0930\u0947\u0902",collapse:"\u092A\u0902\u0915\u094D\u0924\u093F \u0938\u0902\u0915\u094D\u0937\u093F\u092A\u094D\u0924 \u0915\u0930\u0947\u0902",triggerDesc:"\u0905\u0935\u0930\u094B\u0939\u0940 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",triggerAsc:"\u0906\u0930\u094B\u0939\u0940 \u0915\u094D\u0930\u092E\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",cancelSort:"\u091B\u0901\u091F\u093E\u0908 \u0930\u0926\u094D\u0926 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902"},Modal:{okText:"\u0905\u091A\u094D\u091B\u0940 \u0924\u0930\u0939 \u0938\u0947",cancelText:"\u0930\u0926\u094D\u0926 \u0915\u0930\u0928\u093E",justOkText:"\u0905\u091A\u094D\u091B\u0940 \u0924\u0930\u0939 \u0938\u0947"},Popconfirm:{okText:"\u0905\u091A\u094D\u091B\u0940 \u0924\u0930\u0939 \u0938\u0947",cancelText:"\u0930\u0926\u094D\u0926 \u0915\u0930\u0928\u093E"},Transfer:{titles:["",""],searchPlaceholder:"\u092F\u0939\u093E\u0902 \u0916\u094B\u091C\u0947\u0902",itemUnit:"\u0924\u0924\u094D\u0924\u094D\u0935",itemsUnit:"\u0935\u093F\u0937\u092F-\u0935\u0938\u094D\u0924\u0941",remove:"\u0939\u091F\u093E\u090F",selectCurrent:"\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092A\u0943\u0937\u094D\u0920 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",removeCurrent:"\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092A\u0943\u0937\u094D\u0920 \u0939\u091F\u093E\u090F\u0902",selectAll:"\u0938\u092D\u0940 \u0921\u0947\u091F\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",removeAll:"\u0938\u092D\u0940 \u0921\u0947\u091F\u093E \u0939\u091F\u093E\u090F\u0902",selectInvert:"\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092A\u0943\u0937\u094D\u0920 \u0915\u094B \u0909\u0932\u094D\u091F\u093E \u0915\u0930\u0947\u0902"},Upload:{uploading:"\u0905\u092A\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E...",removeFile:"\u092B\u093C\u093E\u0907\u0932 \u0928\u093F\u0915\u093E\u0932\u0947\u0902",uploadError:"\u0905\u092A\u0932\u094B\u0921 \u092E\u0947\u0902 \u0924\u094D\u0930\u0941\u091F\u093F",previewFile:"\u092B\u093C\u093E\u0907\u0932 \u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928",downloadFile:"\u092B\u093C\u093E\u0907\u0932 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"},Empty:{description:"\u0915\u094B\u0908 \u0906\u0915\u0921\u093C\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948"},Icon:{icon:"\u0906\u0907\u0915\u0928"},Text:{edit:"\u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",copy:"\u092A\u094D\u0930\u0924\u093F\u0932\u093F\u092A\u093F",copied:"\u0915\u0949\u092A\u0940 \u0915\u093F\u092F\u093E \u0917\u092F\u093E",expand:"\u0935\u093F\u0938\u094D\u0924\u093E\u0930"},PageHeader:{back:"\u0935\u093E\u092A\u0938"},Form:{optional:"(\u0910\u091A\u094D\u091B\u093F\u0915)",defaultValidateMessages:{default:"${label} \u0915\u0947 \u0932\u093F\u090F \u092B\u0940\u0932\u094D\u0921 \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0924\u094D\u0930\u0941\u091F\u093F",required:"\u0915\u0943\u092A\u092F\u093E ${label} \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",enum:"${label} [${enum}] \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",whitespace:"${label} \u090F\u0915 \u0916\u093E\u0932\u0940 \u0905\u0915\u094D\u0937\u0930 \u0928\u0939\u0940\u0902 \u0939\u094B \u0938\u0915\u0924\u093E",date:{format:"${label} \u0924\u093F\u0925\u093F \u092A\u094D\u0930\u093E\u0930\u0942\u092A \u0905\u092E\u093E\u0928\u094D\u092F \u0939\u0948",parse:"${label} \u0915\u094B \u0924\u093E\u0930\u0940\u0916 \u092E\u0947\u0902 \u0928\u0939\u0940\u0902 \u092C\u0926\u0932\u093E \u091C\u093E \u0938\u0915\u0924\u093E",invalid:"${label} \u090F\u0915 \u0905\u092E\u093E\u0928\u094D\u092F \u0924\u093F\u0925\u093F \u0939\u0948"},types:{string:o,method:o,array:o,object:o,number:o,date:o,boolean:o,integer:o,float:o,regexp:o,email:o,url:o,hex:o},string:{len:"${label} ${len} \u0905\u0915\u094D\u0937\u0930 \u0915\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",min:"${label} \u0915\u092E \u0938\u0947 \u0915\u092E ${min} \u0935\u0930\u094D\u0923\u094B\u0902 \u0915\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",max:"${label} \u0905\u0927\u093F\u0915\u0924\u092E ${max} \u0935\u0930\u094D\u0923\u094B\u0902 \u0915\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",range:"${label} ${min}-${max} \u0935\u0930\u094D\u0923\u094B\u0902 \u0915\u0947 \u092C\u0940\u091A \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F"},number:{len:"${label} ${len} \u0915\u0947 \u092C\u0930\u093E\u092C\u0930 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",min:"${label} \u0915\u092E \u0938\u0947 \u0915\u092E ${min} \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",max:"${label} \u0905\u0927\u093F\u0915\u0924\u092E ${max} \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",range:"${label} ${min}-${max} \u0915\u0947 \u092C\u0940\u091A \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F"},array:{len:"${len} ${label} \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",min:"\u0915\u092E \u0938\u0947 \u0915\u092E ${min} ${label}",max:"\u091C\u094D\u092F\u093E\u0926\u093E \u0938\u0947 \u091C\u094D\u092F\u093E\u0926\u093E ${max} ${label}",range:"${label} \u0915\u0940 \u0930\u093E\u0936\u093F ${min}-${max} \u0915\u0947 \u092C\u0940\u091A \u0939\u094B\u0928\u0940 \u091A\u093E\u0939\u093F\u090F"},pattern:{mismatch:"${label} ${pattern} \u092A\u0948\u091F\u0930\u094D\u0928 \u0938\u0947 \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093E\u0924\u093E"}}},Image:{preview:"\u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928"}},Te=Pe,De={items_per_page:"/ p\xE1gina",jump_to:"V\xE1 at\xE9",jump_to_confirm:"confirme",page:"",prev_page:"P\xE1gina anterior",next_page:"Pr\xF3xima p\xE1gina",prev_5:"5 p\xE1ginas anteriores",next_5:"5 pr\xF3ximas p\xE1ginas",prev_3:"3 p\xE1ginas anteriores",next_3:"3 pr\xF3ximas p\xE1ginas"},Ce={locale:"pt_BR",today:"Hoje",now:"Agora",backToToday:"Voltar para hoje",ok:"Ok",clear:"Limpar",month:"M\xEAs",year:"Ano",timeSelect:"Selecionar hora",dateSelect:"Selecionar data",monthSelect:"Escolher m\xEAs",yearSelect:"Escolher ano",decadeSelect:"Escolher d\xE9cada",yearFormat:"YYYY",dateFormat:"D/M/YYYY",dayFormat:"D",dateTimeFormat:"D/M/YYYY HH:mm:ss",monthBeforeYear:!1,previousMonth:"M\xEAs anterior (PageUp)",nextMonth:"Pr\xF3ximo m\xEAs (PageDown)",previousYear:"Ano anterior (Control + esquerda)",nextYear:"Pr\xF3ximo ano (Control + direita)",previousDecade:"D\xE9cada anterior",nextDecade:"Pr\xF3xima d\xE9cada",previousCentury:"S\xE9culo anterior",nextCentury:"Pr\xF3ximo s\xE9culo",shortWeekDays:["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]},_e=Ce,Ye={placeholder:"Hora"},E=Ye,Ae={lang:s({placeholder:"Selecionar data",rangePlaceholder:["Data inicial","Data final"]},_e),timePickerLocale:s({},E)},C=Ae,i="${label} n\xE3o \xE9 um ${type} v\xE1lido",Fe={locale:"pt-br",Pagination:De,DatePicker:C,TimePicker:E,Calendar:C,global:{placeholder:"Por favor escolha"},Table:{filterTitle:"Menu de Filtro",filterConfirm:"OK",filterReset:"Resetar",filterEmptyText:"Sem filtros",emptyText:"Sem conte\xFAdo",selectAll:"Selecionar p\xE1gina atual",selectInvert:"Inverter sele\xE7\xE3o",selectNone:"Apagar todo o conte\xFAdo",selectionAll:"Selecionar todo o conte\xFAdo",sortTitle:"Ordenar t\xEDtulo",expand:"Expandir linha",collapse:"Colapsar linha",triggerDesc:"Clique organiza por descendente",triggerAsc:"Clique organiza por ascendente",cancelSort:"Clique para cancelar organiza\xE7\xE3o"},Tour:{Next:"Pr\xF3ximo",Previous:"Anterior",Finish:"Finalizar"},Modal:{okText:"OK",cancelText:"Cancelar",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancelar"},Transfer:{titles:["",""],searchPlaceholder:"Procurar",itemUnit:"item",itemsUnit:"items",remove:"Remover",selectCurrent:"Selecionar p\xE1gina atual",removeCurrent:"Remover p\xE1gina atual",selectAll:"Selecionar todos",removeAll:"Remover todos",selectInvert:"Inverter sele\xE7\xE3o atual"},Upload:{uploading:"Enviando...",removeFile:"Remover arquivo",uploadError:"Erro no envio",previewFile:"Visualizar arquivo",downloadFile:"Baixar arquivo"},Empty:{description:"N\xE3o h\xE1 dados"},Icon:{icon:"\xEDcone"},Text:{edit:"editar",copy:"copiar",copied:"copiado",expand:"expandir"},PageHeader:{back:"Retornar"},Form:{optional:"(opcional)",defaultValidateMessages:{default:"Erro ${label} na valida\xE7\xE3o de campo",required:"Por favor, insira ${label}",enum:"${label} deve ser um dos seguinte: [${enum}]",whitespace:"${label} n\xE3o pode ser um car\xE1cter vazio",date:{format:" O formato de data ${label} \xE9 inv\xE1lido",parse:"${label} n\xE3o pode ser convertido para uma data",invalid:"${label} \xE9 uma data inv\xE1lida"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${label} deve possuir ${len} caracteres",min:"${label} deve possuir ao menos ${min} caracteres",max:"${label} deve possuir no m\xE1ximo ${max} caracteres",range:"${label} deve possuir entre ${min} e ${max} caracteres"},number:{len:"${label} deve ser igual \xE0 ${len}",min:"O valor m\xEDnimo de ${label} \xE9 ${min}",max:"O valor m\xE1ximo de ${label} \xE9 ${max}",range:"${label} deve estar entre ${min} e ${max}"},array:{len:"Deve ser ${len} ${label}",min:"No m\xEDnimo ${min} ${label}",max:"No m\xE1ximo ${max} ${label}",range:"A quantidade de ${label} deve estar entre ${min} e ${max}"},pattern:{mismatch:"${label} n\xE3o se encaixa no padr\xE3o ${pattern}"}}},Image:{preview:"Pr\xE9-visualiza\xE7\xE3o"}},we=Fe,_="#ffffff",Y="#1b1b23";class Me{constructor(){c(this,"state",z({antLocale:void 0,style:void 0,fontFamilyUrl:void 0,antTheme:void 0}));c(this,"imageIsDarkCache",{});c(this,"update",async e=>{this.state.value.antLocale=this.getAntLocale(e),this.state.value.style=await this.getStyle(e),this.state.value.fontFamilyUrl=this.getFontUrl(e.fontFamily),this.state.value.antTheme=await this.getAntTheme(e),this.updateGlobalFontFamily(e.fontFamily)});c(this,"updateGlobalFontFamily",e=>{document.documentElement.style.setProperty("--ac-global-font-family",e)});c(this,"getAntLocale",e=>({en:b,pt:we,es:de,de:re,fr:ve,hi:Te})[e.locale]||b);c(this,"isBackgroundDark",async e=>this.imageIsDarkCache[e]?this.imageIsDarkCache[e]:x(e)?(this.imageIsDarkCache[e]=y(e),this.imageIsDarkCache[e]):(this.imageIsDarkCache[e]=await Z(e),this.imageIsDarkCache[e]));c(this,"getStyle",async e=>{const a=d=>y(d)?_:Y,m=await this.isBackgroundDark(e.background);return{"--color-main":e.mainColor,"--color-main-light":W(e.mainColor,.15),"--color-main-hover":k(e.mainColor),"--color-main-active":k(e.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":a(e.mainColor),"--font-family":e.fontFamily,"--font-color":m?_:Y,...this.getBackgroundStyle(e.background)}});c(this,"getAntTheme",async e=>{const a=await this.isBackgroundDark(e.background),m={fontFamily:e.fontFamily,colorPrimary:e.mainColor},d=[];if(a){const{darkAlgorithm:u}=G;d.push(u)}return{token:m,algorithm:d}});c(this,"getFontUrl",e=>`https://fonts.googleapis.com/css2?family=${e.split(" ").join("+")}:wght@300;400;500;700;900&display=swap`)}getBackgroundStyle(e){return x(e)?{backgroundColor:e}:{backgroundImage:`url(${e})`,backgroundSize:"cover"}}}const Ee=["href"],Ie=O({__name:"PlayerConfigProvider",props:{background:{},mainColor:{},fontFamily:{},locale:{}},setup(t){const e=t,a=new Me;return U("playerConfig",a.state),V(()=>[e.background,e.fontFamily,e.locale,e.mainColor],([m,d,u,g])=>{a.update({background:m,fontFamily:d,locale:u,mainColor:g})}),j(()=>{a.update({background:e.background,fontFamily:e.fontFamily,locale:e.locale,mainColor:e.mainColor})}),(m,d)=>{var u,g,h,$;return v(),f("div",{class:"config-provider",style:N((u=p(a).state.value)==null?void 0:u.style)},[(g=p(a).state.value)!=null&&g.fontFamilyUrl?(v(),f("link",{key:0,href:p(a).state.value.fontFamilyUrl,rel:"stylesheet"},null,8,Ee)):H("",!0),R(p(q),{theme:(h=p(a).state.value)==null?void 0:h.antTheme,locale:($=p(a).state.value)==null?void 0:$.antLocale},{default:B(()=>[K(m.$slots,"default",{},void 0,!0)]),_:3},8,["theme","locale"])],4)}}});const Ve=J(Ie,[["__scopeId","data-v-2c16e2a4"]]);export{Ve as W};
//# sourceMappingURL=PlayerConfigProvider.6493d199.js.map
