webpackJsonp([35783957827783],{8:function(e,r,t){function n(e){var r=typeof e;return"function"===r||"object"===r&&!!e}function i(e){return"string"==typeof e}function o(e){return"function"==typeof e}function a(e){return e.split(/\s+/g).filter(function(e){return 0!==e.length})}function s(e){return Object.keys(e).reduce(function(r,t){var n=e[t];return o(n)&&(n=n()),n?r.concat(a(t)):r},[])}function l(e){return i(e)&&""!==e?a(e):e&&e.length?e.reduce(function(e,r){return r?e.concat(a(r)):e},[]):n(e)?s(e):[]}function g(e){return function(r){i(r)&&(r={name:r});var t={prefix:"",modifierDelimiter:"--",outputIsString:!1};r=d(t,e,r);var o=r.prefix+r.name,a=r.modifierDelimiter,s=r.outputIsString;return function(e,r,t){var i;n(e)?(i=e.element,r=e.modifiers||e.modifier,t=e.extra):i=e;var g=i?o+"__"+i:o,d=[g].concat(l(r).map(function(e){return g+a+e})).concat(l(t)).join(" ").trim();return s?d:{className:d}}}}var d=t(6),m=g({});m.withDefaults=g,e.exports=m},43:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var i=t(1),o=n(i),a=t(3),s=n(a),l=t(8),g=n(l),d=new g.default({name:"button-group",prefix:"c-"}),m=function(e){var r=e.cssModfier,t=e.children;return o.default.createElement("div",d("",r),t)};m.propTypes={cssModfier:s.default.string},m.defaultProps={cssModfier:""},r.default=m,e.exports=r.default},207:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}r.__esModule=!0,r.classes=void 0;var s=t(1),l=n(s),g=t(8),d=n(g),m=r.classes=new d.default({name:"code-of-conduct",prefix:"c-"}),k=(new d.default({name:"button",prefix:"c-"}),function(e){function r(){i(this,r);var t=o(this,e.call(this));return t.state={showCodeOfConduct:!1},t.toggleCodeOfConduct=t.toggleCodeOfConduct.bind(t),t}return a(r,e),r.prototype.toggleCodeOfConduct=function(){this.setState(function(e){return{showCodeOfConduct:!e.showCodeOfConduct}})},r.prototype.render=function(){return l.default.createElement("div",m(),l.default.createElement("button",{onClick:this.toggleCodeOfConduct},"Code of Conduct"),l.default.createElement("p",m("text",this.state.showCodeOfConduct?"":"hidden"),"Vi forventer at du respekterer andre deltakere, uavhengig av kjønn, etnisitet, religion, alder, legning, funksjonsevne eller andre aspekter knyttet til hvordan vi ser ut, kommer fra eller hvem vi er"))},r}(l.default.Component));r.default=k},209:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var i=t(1),o=n(i),a=function(){return o.default.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 125"},o.default.createElement("path",{d:"M17.5,63.1L50,95.5L82.5,63l-32.9,0l-0.1-0.1L49.4,63l-14.5,0L34.9,63l-0.1,0.1L17.5,63.1z M48.1,66.9\nl12.6,12.6L56,84.1L38.8,66.9L48.1,66.9z M53.5,66.9l9.3,0l5.2,5.2l-4.6,4.6L53.5,66.9z M73.2,66.9l-2.5,2.5l-2.5-2.5L73.2,66.9z M26.8,66.9l6.6,0l19.9,19.9L50,90.1L26.8,66.9z"}))};r.default=a,e.exports=r.default},81:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var i=t(1),o=n(i),a=t(3),s=n(a),l=t(8),g=n(l),d=new g.default({name:"paragraph",prefix:"c-"}),m=function(e){var r=e.cssModfier,t=e.children;return o.default.createElement("p",d("",r),t)};m.propTypes={cssModfier:s.default.string},m.defaultProps={cssModfier:""},r.default=m,e.exports=r.default},20:function(e,r){"use strict";r.__esModule=!0;var t={title:"Fagseminar høst 2018",event:{date:"19. oktober - 22. oktober 2018",longDate:"19. oktober - 22. oktober 2018",venue:"Austria Trend Hotel, Dunajska cesta 154, 1000 Ljubljana",city:"Ljubljana",country:"Slovenia",gmapsUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.464257241591!2d14.51138181585606!3d46.08172270004596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532e8018ac3f7%3A0xfdd77079c72ef36c!2sAustria+Trend+Hotel+Ljubljana!5e0!3m2!1sen!2sno!4v1537198204127"},schedules:[{day:"Fredag 19. Oktober",collections:[{time:"18:30",title:"Flyet drar fra Oslo Lufthavn"},{time:"20:50",title:"Lander i Ljubljana"},{time:"21:45",title:"Vi ankommer hotellet"}]},{day:"Lørdag 20. Oktober",collections:[{time:"06:30-09:30",title:"Frokost"},{time:"09:30-18:00",title:"Aktiviteter"},{time:"20:00",title:"Middag i grupper"},{time:"22:00-",title:"Brettspill",entries:[{room:"Ubiquitus",slots:["boardgames"]}]}]},{day:"Søndag 21. Oktober",collections:[{time:"06:30-09:00",title:"Frokost"},{time:"09:00-09:45",title:"Internmøte",entries:[{room:"Ubiquitus",slots:["internmeet"]}]},{time:"09:45-10:00",title:"Plenumsforedrag",entries:[{room:"Ubiquitus",slots:["digitalisaering_dummies"]}]},{time:"10:00-10:20",title:"Pause",isBreak:!0},{time:"10:20-11:20",title:"Plenumsforedrag",entries:[{room:"Ubiquitus",slots:["digital_identity"]}]},{time:"11:20-11:40",title:"Pause",isBreak:!0},{time:"11:40-12:00",title:"Plenumsforedrag",entries:[{room:"Ubiquitus",slots:["uland"]}]},{time:"12:00-12:30",title:"Plenumsforedrag",entries:[{room:"Ubiquitus",slots:["debt"]}]},{time:"12:30-13:30",title:"Lunsj",isBreak:!0},{time:"13:30 - 16:30",title:"Workshops",entries:[{room:"Horus",slots:["kubernetes101"]},{room:"Kronos",slots:["synthrust"]},{room:"Janus",slots:["ljubljana_streamin"]},{room:"Orion",slots:["uxunicorn"]},{room:"Centaurus",slots:["cryptografi"]},{room:"Cassiopea",slots:["iothouse"]}]},{time:"16:30-17:30",title:"Open Space"},{time:"19:15",title:"Felles avgang til ASperetivo"},{time:"19:30",title:"Quiz"},{time:"20:00",title:"Fellesmiddag på ASperetivo"}]},{day:"Mandag 22. Oktober",collections:[{time:"06:30-09:00",title:"Frokost"},{time:"09:00-12:00",title:"Workshops & Talks",entries:[{room:"Janus",slots:["ljubljana_streamin"]},{room:"Orion",slots:["uxunicorn"]},{room:"Centaurus",slots:["cryptografi"]},{room:"Cassiopea",slots:["iothouse"]},{room:"Kronos",slots:["voiceuserinterface"]},{room:"Horus",slots:["reason","object_keys","pause","cmsreact","redesign","pause","maxmusic","remote_work"]}]},{time:"12:00-13:00",title:"Lunsj"},{time:"13:00-14:30",title:"Fritid"},{time:"14:30",title:"Buss til flyplassen"},{time:"16:30",title:"Flyet til Oslo"},{time:"19:15",title:"Vi ankommer Oslo"}]}],talks:{internmeet:{pending:!1,speakers:[{name:"Jan Henrik Gundelsby",bio:"Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!",email:"jhg@knowit.no",pic:"jhg.jpg"}],title:"Velkommen og internmøte",type:"Talk",description:"Beskrivelse kommer"},digital_identity:{pending:!1,title:"Ekstreme lærdommer om digital identitet, store datamengder og statistikk.",speakers:[{name:"Anders Breivik",bio:"Anders er en erfaren teamleder med 14 års erfaring som konsulent. Som seniorkonsulent og gruppeleder i Knowit er han kjent for å være utadvendt, initiativrik og kommunikativ. Han liker å jobbe med komplekse og logiske problemstillinger, og trives med å utvikle avanserte løsninger på en smidig måte i nært samarbeid med kunder. Anders har erfaring fra utvikling på alle systemlag både i store, forretningskritiske systemer som mindre, mobile løsninger. Han har bransjeerfaring fra blant annet offentlig forvaltning, forsikring og telekom.",pic:"abr.jpg"}],type:"Talk",description:"Beskrivelse kommer"},debt:{pending:!1,title:"Teknisk gjeld i virkeligheten",speakers:[{name:"Michael Johansen",bio:"A software consultant during the day and a startup founder during the night. At NTNU I studied entrepreneurship, computer science and psychology. As part of my startup venture I've gotten first-hand experience with the startup scene in both Boston and in Silicon Valley. I care more than most people about startups, and it's a topic on which I'd like to share my insights.",pic:"mjo.jpg"},{name:"Sten Christoffer Eliesen",bio:"Christoffer er en engasjert utvikler som brenner for IT. Han er nysgjerrig og glad i å lære nye ting. Han stiller høye krav til seg selv og det han leverer, men er pragmatisk når det trengs. Hans interesse for IT spenner seg hele veien fra operativsystem til brukergrensesnitt, og han er derfor en naturlig fullstack og 'devops' utvikler. I disse tider er det frontend som er i vinden og Christoffers hjerte følger etter. React og Node er spennende teknologier som passer han midt i blinken. Både 'gammel' jQuery og ny React er teknologier som er givende å jobbe med for Christoffer. Flere års erfaring har gjort han trygg i rollen som konsulent. Han er beskjeden, samtidig som han er en dyp tenker med rolige øyne og et brennende hjerte.",pic:"christoffer.eliesen.JPG"}],type:"Talk",description:"Det er to problemer med gjeld: 1) Gjeld er vanskelig å ha. 2) Gjeld må alltid betales tilbake. Dette foredraget går i dybden på reelle konsekvenser av teknisk gjeld, og utforsker hvordan man forklarer teknisk gjeld tli en kunde."},uland:{pending:!1,title:"Fra Lakkegata til Kibera",speakers:[{name:"Kenneth Stigen",bio:"Kenneth har jobbet i som konsulent siden 2004, og i Knowit Objectnet siden januar 2010. Kenneth har sin kjernekompetanse innenfor arkitektur og utvikling av store løsninger på Java-plattformen.",pic:"kes_knowit.no.jpg"}],type:"Talk",description:"The Global Digital Library lager en applikasjon for barn som skal lære å lese. Barna er i forskjellig alder, kommer fra forskjellige kulturer, snakker forskjellig språk og har forskjellig teknisk kompetanse. Felles for alle er at ingen av dem eier en smartmobil. Hør om erfaringene til en programmerer som har måttet lære seg å brukerteste og få noe fornuftig ut av dette. Hvilke problemer har oppstått, og hvordan har vi endret vår applikasjon etter å ha møtt barn i Ethiopia, Kenya, Kambodsja, Nepal og Bangladesh."},digitalisaering_dummies:{pending:!1,title:"Digitalisering for dummies",speakers:[{name:"Rune Storløpa",bio:"Erfaren virksomhetsarkitekt, teknisk arkitekt / løsningsansvarlig, som aldri blir enig med seg selv om det er morsomst å fikle med kode og lage gode løsninger eller å diskutere med kunder for å få de til å velge gode løsninger. Gjør derfor helst begge deler så langt tiden strekker til.",pic:"rst.jpg"}],type:"Talk",description:'Digitalisering er et ord alle™ snakker om. Men hva innebærer det i praksis? Hvilke konsekvenser får det for deg som sitter og debugger if-statementsene dine? Får det noen konsekvenser i det hele tatt, eller er det bare "same shit, new wrapping"? '},ljubljana_streamin:{pending:!1,title:"Ljubljana streamin'",speakers:[{name:"Anders Brevik",bio:"Fra Tustna, derfor er jeg Tustna.",pic:"anders.brevik.jpg"},{name:"Joachim Seilfaldet",bio:"Joachim er en utvikler med erfaring innenfor objektorienert- og funksjonellutvikling.",pic:"jos.jpg"},{name:"Kennet Vuong",bio:"Kennet er en ivrig utvikler som stadig er på jakt etter nye utfordringer og teknologier. Han ser på seg selv som en full-stack utvikler som trives godt både på fremsia med web- og mobilutvikling og på baksia med database- og serverapplikasjoner. Gjennom tidligere erfaringer har Kennet jobbet som DevOps-utvikler og objektorientert systemutvikling innenfor JVM. I tillegg har han vært scrum master og team- og techlead innenfor frontend. Kennet liker å jobbe i team i tett samarbeid med kunder og designere.",pic:"kennet.vuong.jpg"},{name:"Patrik Fridberg Bakken",bio:"Patrik startet i Knowit Objectnet i august 2016 etter 3 år i USA på Illinois State University, og 3 år på NTNU i Trondheim hvor mastergraden ble fullført. Kjernekompetansen ligger i back-end utvikling i språk som bl.a. Java og C++. Patrik gikk inn i NSB/Entur-prosjektet hvor han jobbet med å modernisere salgssystemet. Arbeidet har gitt han mye erfaring med elektroniske betalingsløsninger, rammeverk som Spring Boot og Hibernate, samt innsikt i smidig arkitektur. Patrik er veldig interessert i å lære og ser alltid etter nye utfordringer.",pic:"patbak.jpg"}],type:"Workshop",description:"Abstract: Kafka på det aller enkleste. Gjennom workshopen vil vi introdusere dere for Kafka og konseptene i Kafka. Vi legger fokus på bruksområder hvor Kafka fungerer utrolig bra. På forhånd har vi opprettet et sett med oppgaver som vi løser sammen, mens vi samtidig forklarer konseptene i sin enkleste forstand. Oppgavene som vil bli utdelt vil være svært enkle og det er ikke et stort krav til hverken koding eller SQL kunnskap. Workshopen vil dekke følgende områder: Kafka, Kafka Connect, Producer og Consumer API, Kafka Streams, KSQL"},real_life_data_science:{pending:!1,title:"Real Life Data Science - for den nysgjerrige utvikler",speakers:[{name:"Lars Lundby",bio:"Erfaren systemarkitekt med kompetanse på Java-plattformen og analyse av forretningsmessige problemstillinger.",pic:"llu.jpg"},{name:"Emil Østensen",bio:"Emil begynte som konsulent i Knowit Objectnet August 2016. Han har kompetanse innenfor C og Java-utvikling, og jobber nå som backendutvikler på JVMen. Han interesserer seg for algoritmer og effektivitet i programmer. Dette kommer i hans interesse for sjakkprogrammering som han skrev en masteroppgave om på UiO, og også senere holdt talk om. Emil har som mål å alltid skrive ren og testbar kode, og henter inspirasjon fra Clean Code.",pic:"emil.ostensen.jpg"},{name:"Jan Henrik Gundelsby",bio:"Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!",email:"jhg@knowit.no",pic:"jhg.jpg"}],type:"Workshop",description:"Velkommen til løsning av Ruter-case med maskinlæring: Forbedring av forventet ankomst av busser basert på reelle sanntidsdata. Hva skjer når Knowits eminente selgere lover at vi LETT kan toppe dagens sanntidsløsning hos Ruter med maskinlæring? Workshopen følger caset fra innsalg via utforsking av data til å løse case med passende modeller. Vi har på forhånd samlet noen ukers sanntidsdata fra Ruters busser i Oslo. Du lærer nok teori og metode for å løse et ekte case. Vi implementerer sammen forbedrede algoritmer i Python med velkjente, enkle open source-rammeverk."},object_keys:{pending:!1,title:"A day in the life of a javascript programmer: Object keys",speakers:[{name:"Johannes Moskvil",bio:"Johannes er nyutdanned sivilingeniør i datateknikk ved NTNU med spesialisering innen kunstig intelligens. I sin masteroppgave laget han et intelligent speil som kunne gjenkjenne personer, drevet av Raspberry PI.",pic:"johannes.moskvil.jpg"}],type:"Talk",description:"I denne lyntalen tar jeg kjapt for meg hva som faktisk kan være et property name i javascript og hvorfor det kanskje ikke er så rett frem som man skulle tro... Demonstrert gjennom et case fra det virkelig liv som skapte meg en god dose hodebry."},remote_work:{pending:!1,title:"Hvordan lykkes med å jobbe remote",speakers:[{name:"Sigurd Lund",bio:"Utdannet ved NTNU med mastergrad i informatikk våren 2015 der han spesialiserte seg innenfor intelligente systemer. Sigurd begynte som konsulent hos Knowit Objectnet samme år, der han gikk inn i LISA-prosjektet hos NSB. Han liker aller best backend-utvikling, og har mest erfaring med dette i både Java og Scala. Sigurd er lett å samarbeide med, og har gode kommunikasjonsegenskaper. Han trives med å ha god kontakt med kunden for å finne de beste løsningene.",pic:"siglund.jpg"}],type:"Talk",description:"Deler mine erfaringer med å jobbe remote for Entur. Belyser hvordan man kan tilpasse situasjonen for å gjøre forskjellen fra å sitte i samme rom så liten som mulig."},reason:{pending:!1,title:"Introduksjon til Reason",speakers:[{name:"Alexander Bjerkan",pic:"alb_knowit.no.jpg",bio:"Alexander har god erfaring som systemutvikler i smidige team og har bygget opp betydelig kompetanse innenfor et bredt spekter av teknologier og ansvarsområder. Han har jobbet med alt fra små hobbyprosjekter til store samfunnskritiske systemer og han brenner for håndverket og kvaliteten i IT-faget. Som person søker Alexander stadig å utvikle sin tekniske horisont med nye teknologier og kunnskap. Hans primærfokus for tiden er frontend, med JavaScript og React."}],type:"Talk",description:"Vi ser på Reason, et funksjonelt, typesikkert språk basert på OCaml som kan kompileres ned til native og JavaScript med mer. Les the what & why her https://reasonml.github.io/docs/en/what-and-why.html og du blir garantert med på denne workshopen. Det er lenge siden programmering har vært så gøy!"},kubernetes101:{pending:!1,speakers:[{name:"Tord Kloster",bio:"Tord har jobbet i Knowit siden høsten 2017. Tord har god erfaring innen utvikling av Java-baserte web- og system-løsninger. Han har jobber med backend-utvikling i Java og Scala, og har også hands-on erfaring med moderne infrastruktur-løsninger som Docker / Kubernetes. Med erfaring og kunnskap om samarbeid i team er Tord et godt fungerende team-medlem. Tord har interesser for både front-end og back-end, med erfaring fra tidligere full-stack prosjekter. I tillegg er Tord tilpasningsdyktig til ny teknologi, og har en god evne til å lære seg ny og spennende faglig kunnskap.",pic:"tord.kloster.jpg"},{name:"Iver Egge",bio:"Iver har jobbet som systemkonsulent i Knowit Objectnet i Oslo kommune - Utviklings- og kompetanseetaten, Interaktive tjenester (ITAS). Gjennom ITAS-programmet har Knowit hatt ansvaret for nyutvikling og forvaltning av Oslo kommunes sentrale meldingsinfrastruktur og integrasjonsplattform, samt kommunens felles katalogtjenester. mikrotjenestearkitektur.",pic:"iver.egge.png"},{name:"Yngvar Kristiansen",bio:"Yngvar er utvikler og har jobbet med back-end, front-end, drift og programvarearkitektur. Konsulenten har erfaring fra komplekse, forretningskritiske applikasjoner, behandling av store datamengder, og web-applikasjoner. Han har erfaring med flere deler av FSUM: Kravhåndtering, konstruksjon, test og estimering.",pic:"Yngvar_Kristiansen.jpg",email:"yngvar.kristiansen@knowit.no"}],title:"Kubernetes 101",type:"Workshop",description:"Fra helt basic: Hvordan kobler jeg meg på kubernetes og hvordan får jeg en docker container til å kjøre i skyen? Til mer intermediate topics som rolle basert tilgangsstyring, oppdeling av klyngen i namespace ++.  Løpet er lagt opp slik at man jobber mot en guide/oppgave ark, med hjelp fra workshop holdere. Det er også mulig vi er innom Helm charts til slutt."},synthrust:{pending:!1,speakers:[{name:"John-Olav Storvold",bio:"John-Olav begynte i Knowit i 2016 etter å ha tatt sin mastergrad ved NTNU. I løpet av mastergraden utvekslet han til University of California, Santa Barbara. Han er lærevillig og tar stor stolthet i den jobben han utfører både i og utenfor arbeidstiden. På fritiden liker John-Olav å bryne seg på Java, Scala, webutvikling og annen teknologi som er i luften.",pic:"johnolav.storvold.jpg"},{name:"Thomas Tøkje",bio:"Thomas har en mastergrad i Kybernetikk ved NTNU fra våren 2012, med spesialisering i tilpassede datasystemer. Gjennom sin utdanning og karriere har han lært seg å beherske et bredt spenn av forskjellige fagfelt, deriblant elektronikk, programmering og serverdrift. I jobbsammenheng har han opparbeidet seg god erfaring med Java, Scala og Kotlin, samt dialekter av C (C, C++ og C#).",pic:"tøkje.jpg"}],title:"Lag din egen synthesizer i Rust",type:"Workshop",description:"Rust er et moderne systemspråk som garanterer kode som er fri for minnefeil og race conditions, men som likevel kan måles med C og C++ i ytelse. I denne workshopen skal vi leke oss med Rust for å lage en enkel synthesizer som vi kan spille på med tastaturet. Vi kommer også til å implementere prosesseringseffekter, deriblant delay, romklang, distortion og flanger. Formålet med workshopen er å bli kjent med Rust via et praktisk prosjekt, og det stilles ingen krav om forkunnskaper for verken Rust eller lydprosessering."},immuneterapi:{pending:!1,speakers:[{name:"Jørgen Rognerud",bio:"Jørgen begynte i Objectnet sommeren 2017 etter å ha jobbet ett år hos EVRY Financial Services. For øyeblikket jobber han hos Entur med Android-utvikling. Jørgen har en mastergrad i informatikk fra UiO hvor han skrev en masteroppgave innen biomedisinsk informatikk med fokus på bruk av maskinlæring innen immunterapi for kreft. Andre faglige interesser er blockchain og AI.",pic:"jorgen.rognerud.jpg"}],title:"Immune profiling for immunotherapy: next generation cancer vaccines",type:"Talk",description:"I nyere tid har immunterapi vist lovende resultater ved å kurere pasienter for kreftformer som tidligere var en sikker død. Dette ved bruk av immunprofilering for å kunne skreddersy behandlinger — noe kreftforskere mener kan være fremtidens kreftbehandling."},uxunicorn:{pending:!1,speakers:[{name:"Maren Møller",bio:"Maren er en kreativ, nysgjerrig og produktiv UX-designer som først og fremst jobber med å skape grensesnitt for ulike plattformer, med fokus på en god brukeropplevelse. Hun har stor interesse av å forstå folks adferd og bruker derfor metoder for å finne ut hvordan man kan kommunisere med et produkt, hvilke behov er der og hvilke løsninger er mulige. Hun har jobbet mye med digitale prototyper, wireframes, illustrasjoner, samt brukertesting av forskjellige produkter og konsepter.",pic:"maren.moller.jpg"},{name:"Mina Ravem",bio:"Mina har en mastergrad I Human centred systems aka user experience. Spesialiseringen hennes ligger i brukerinnsikt, både i hvordan man tilegner seg og bruker innsikten for å skape gode brukeropplevelser.",pic:"mina.ravem.jpg",email:"mina.ravem@knowit.no"}],title:"How to become a (junior) UX unicorn",type:"Workshop",description:"UX Design for nybegynnere. Lær deg designprinsipper og metoder, bruke designverktøy for å skape din egen prototype og tips og triks når man brukertester. Oppgaven blir å skape et konsept for en app.."},iothouse:{pending:!1,speakers:[{name:"Thomas Malt",bio:"Erfaren virksomhetsarkitekt, løsningsarkitekt og teknologileder som brenner for å gjøre team, mennesker og løsninger rundt seg best mulig. Har ledet avdelinger, reorganisering- og transformasjonsprosjekter, samt hatt ansvar for strategiutvikling og løsningsarkitektur for store og sammensatte tjenester. Holder seg fremdeles oppdatert på teknologi og løsninger.",pic:"thomas.malt.jpg"}],title:"Kom igang med ditt eget smarthus, Internet of Things og grafisk sensor dashboard",type:"Workshop",description:"I del 1 setter du opp din egen smarthuskontroller basert på raspberry pi, home assistant og z-wave, og finner ut hvordan du kan bruke en sensor til å styre en IKEA Trådfri lyspære. I del 2 lærer vi hvordan internett-delen av IoT fungerer og setter opp et dashboard som viser grafer med data fra smarthuset vårt."},cryptografi:{pending:!1,speakers:[{name:"Jonas Natten",bio:"Jonas startet som konsulent i knowit høsten 2017. Han liker seg best på backend, og har siden han startet tilegnet seg erfaringer med funksjonell programmering, mikrotjenester, og infrastruktur i skyen.",pic:"jnatten.png"},{name:"Henrik Nårstad",bio:"Henrik har en bachelorgrad og leverte sin masteroppgave på Universitetet i Oslo ved Institutt for Informatikk julen 2015. Har han opparbeidet seg erfaring med programmeringsspråk som Java, Python, C/C++ og Javascript gjennom faglig arbeid og egne prosjekter. Han er interessert i operativsystemer, systemutvikling, nye teknologier, og har i tillegg deltatt i uhøytidelige konkurranser med fokus på programvaresikkerhet.",pic:"Henrik_Na_rstad.jpg",email:"henrik.narstad@knowit.no"}],title:"Kryptografi for nybegynnere (nei ikke bitcoin)",type:"Workshop",description:"Har du alltid hatt lyst til å bli supergod på kryptografi? Du blir neppe noen ekspert etter denne workshopen, men du vil forhåpentligvis ha en oversikt over et knippe kryptografiske algoritmer. I denne workshopen skal vi lære om kryptografi uten å tenke på den underliggende matematiske teorien. Vi skal implementere en “lekebank” som vi iterativt vil vise hvordan er usikker og som vi vil sikre med kryptografiske primitiver som hashing, symmetrisk kryptering, og digitale signaturer. Du trenger ingen forkunnskaper bortsett fra grunnleggende programmering."},cmsreact:{pending:!1,speakers:[{name:"Audun Halland",bio:"Audun har bakgrunn fra Opera Software og Nokia, og startet i Knowit i april 2017. Audun har drevet med mobilutvikling i 10 år, og er vant med å levere på de hardeste kvalitetskrav, i det globale markedet, med nådeløs konkurranse fra aktører som Google og Apple.",pic:"audun.halland.jpg"}],title:"CMS i en fei med React-admin",type:"Talk",description:"APIet er fiks ferdig, MVPen i produksjon, DAU er eksponentiell. Du kommer plutselig på at innholdsprodusentene ikke vet hva hverken curl, REST, JSON, OAuth eller SQL er. Du har 100 andre høyt prioriterte oppgaver, men trenger en admin-frontend i morgen."},maxmusic:{pending:!1,speakers:[{name:"Andreas Bade",bio:"Andreas er en omgjengelig, samlende og tydelig leder som siden 1998 har opparbeidet seg en utstrakt erfaringsbase for gjennomføring av prosjekter i ulike konsulentoppdrag Han har lang teknisk erfaring i kombinasjon med prosjektledererfaring. Andreas trives godt i grenseflaten mellom forretning og fag, funksjonalitet og teknologi og stortrives når han får nytte av sine samlende, kommunikative og motiverende egenskaper. Andreas er sertifisert Project Management Professional (PMP), Certified Scrum Master, Certified Product Owner, og ITIL Foundation v 3. Han er opptatt av musikk og motiveres av samfunnsnyttige og synlige oppgaver.",pic:"ab.jpg"}],title:"Hvordan lage en interaktiv musikkinstallasjon i Max",type:"Talk",description:"Oppsummert: En historie om hvordan jeg på eget initiativ og med stor naivitet solgte meg inn som (eneste) utvikler av Popsenterets utstilling, Fuzz, og hvordan jeg deretter lagde den ved hjelp av Max og arduino i løpet av noen hektiske sommermåneder. Foreløpig innhold: utstillingens innhold, mål og mottakelse,  intro om kunden (Popsenteret), hva musikkteknologi er for noe og hvorfor det er interessant, hvordan og hvorfor jeg solgte meg inn på prosjektet ved hjelp av en (fysisk) prototype, hva jeg lagde, hvilken teknologi som ble brukt og hvordan den ble brukt, hvilke erfaringer jeg har fra prosjektet, hvordan utstillingen ble mottatt, hvordan utstillignen fungerer i dag."},voiceuserinterface:{pending:!1,speakers:[{name:"Henrik Dolva Dæhli",bio:"Henrik er senior Javautvikler med erfaring fra utvikling i både store forretningskritiske systemer med svært høye krav til oppetid og kodekvalitet, til små applikasjoner på mobil plattform. Han er sertifisert ScrumMaster, liker å jobbe smidig med fokus på høy kvalitet. I prosjekt trives han å samarbeide tett med forretningssiden for å finne de beste løsningene. I sine siste prosjekter har han fått erfaring med kontinuerlinge leveranser, skyløsninger og hvordan man forbedrer store legacy-systemer samtidig som man også leverer ny funksjonalitet.",pic:"hed.jpg"},{name:"Håkon Gimse",bio:"Håkon har en mastergrad fra NTNU med en spesialisering innen kunstig intelligens med dype nevrale nettverk. Han ser på seg selv som en fullstack-utvikler med prosjekterfaring både front- og back-end. Til nå har han jobbet med teknologier som Angular og React front-end, og .NET og Java back-end. I tillegg til dette har han også bred erfaring innen native Android utvikling. For tiden jobber han for Knowit på Vegloggen prosjektet med Scala og Java.",pic:"haakon.gimse.jpg"},{name:"Christian Linchausen",bio:"Christian er en webutvikler med erfaring fra EdTech bransjen som brenner for å lage brukervennlige løsninger. Christian har erfaring med blant annet Backbone.js, ASP.NET, samt HTML5, CSS3 og Javascript.",pic:"christian.linchausen.jpg"}],title:"Voice User Interface med Dialogflow og Google Actions for Google Assistant",type:"Workshop",description:"Bli med inn i fremtiden - lær deg å lage Actions on Google for Google Assistant med Dialogflow. Før måtte enhver bedrift ha en app. Snart har enhver app VUI (Voice User Interface). Denne workshoppen er for deg som aldri tidligere har prøvd å lage et talestyrt brukergrensesnitt, men som synes det høres spennende ut og har lyst til å se hvor enkelt det er!"},redesign:{pending:!1,speakers:[{name:"Eirik Lillejordet",bio:"Eirik hjelper prosjekter med å designe digitale brukeropplevelser. For tiden jobber han på Entur der han designer en salgsklient, i tillegg til å hjelpe til på tvers av team med å bygge et designsystem. Før dette tok han en master i interaksjonsdesign fra Universitetet i Oslo, med masteroppgave om mobile helseapplikasjoner for idrettsutøvere.",pic:"eirik.lillejordet.jpg"}],title:"Hvorfor liker ikke brukerne redesignet ditt?",type:"Talk",description:"Hvorfor liker ikke alle brukerne at legacysystemer blir til freshe webapps med en moderne teknisk stack? I denne lyntalen får du tips til hvordan unngå Stockholmsyndrom for datasystemer."},boardgames:{pending:!1,speakers:[{name:"Jan Henrik Gundelsby",bio:"Jan Henrik er glad i brettspill!",email:"jhg@knowit.no",pic:"jhg.jpg"}],title:"Brettspill 🎲",type:"Fun",description:"Beskrivelse kommer"}}};r.default=t,e.exports=r.default},221:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=t(1),a=n(o),s=t(36),l=n(s),g=t(8),d=n(g),m=t(20),k=n(m),p=t(81),u=n(p),f=t(43),v=n(f),h=t(209),b=n(h),c=t(207),j=n(c),y=new d.default({name:"content",prefix:"c-"}),w=new d.default({name:"button",prefix:"c-"}),T=function(){return a.default.createElement("div",null,a.default.createElement("div",y("","intro"),a.default.createElement("img",{src:"./static/ljubljana_logo.png"}),a.default.createElement("h1",null,k.default.title),a.default.createElement("div",null,a.default.createElement(u.default,{cssModfier:"white"},"Tid: ",k.default.event.date),a.default.createElement(u.default,{cssModfier:"white"},"Sted: ",k.default.event.city,", ",k.default.event.country)),a.default.createElement(v.default,null,a.default.createElement(l.default,i({},w("","white"),{to:"/speakers/"}),"Talere"),a.default.createElement(l.default,i({},w("","white"),{to:"/schedule/"}),"Skjema")),a.default.createElement("a",{href:"#info"},a.default.createElement(b.default,null))),a.default.createElement("div",i({id:"info"},y("","info")),a.default.createElement("h2",null,"Informasjon"),a.default.createElement("p",null,"Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Høsten 2018 vil den bli avholdt 19. oktober - 22. oktober 2018 i Ljubljana, Slovenia."),a.default.createElement("p",null,"Tidligere har vi besøkt Berlin, Istanbul, Madrid, Dublin, Svalbard, Reykjavik, Palma etc."),a.default.createElement("p",null,"Alle rom markert med 🎥 vil bli filmet.")),a.default.createElement(j.default,null))};r.default=T,e.exports=r.default}});
//# sourceMappingURL=component---src-pages-index-js-14e58cd33517a3ac3fe7.js.map