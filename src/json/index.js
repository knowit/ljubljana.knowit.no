const viewmodel = {
  title: 'Fagseminar høst 2018',
  event: {
    date: '19. oktober - 22. oktober 2018',
    longDate: '19. oktober - 22. oktober 2018',
    venue: 'Austria Trend Hotel, Dunajska cesta 154, 1000 Ljubljana',
    city: 'Ljubljana',
    country: 'Slovenia',
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.464257241591!2d14.51138181585606!3d46.08172270004596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532e8018ac3f7%3A0xfdd77079c72ef36c!2sAustria+Trend+Hotel+Ljubljana!5e0!3m2!1sen!2sno!4v1537198204127',
  },
  schedules: [
    {
      day: 'Fredag 19. Oktober',
      collections: [
        {
          time: '16:00',
          title: 'Oppmøte senest på flyplassen',
        },
        {
          time: '18:20',
          title: 'Flyet drar fra Oslo Lufthavn (QS4466)',
        },
        {
          time: '20:40',
          title: 'Lander i Ljubljana',
        },
        {
          time: '21:45',
          title: 'Vi ankommer hotellet',
        },
      ],
    },
    {
      day: 'Lørdag 20. Oktober',
      collections: [
        {
          time: '06:30-09:30',
          title: 'Frokost',
        },
        {
          time: '09:30-18:00',
          title: 'Aktiviteter',
        },
        {
          time: '20:00',
          title: 'Middag i grupper',
        },
        {
          time: '22:00-',
          title: 'Brettspill',
          entries: [
            {
              room: 'Cassiopeia',
              slots: ['boardgames'],
            },
          ],
        },
      ],
    },
    {
      day: 'Søndag 21. Oktober',
      collections: [
        {
          time: '06:30-09:00',
          title: 'Frokost',
        },
        {
          time: '09:00-09:45',
          title: 'Knowit Objectnet fremover',
          entries: [
            {
              room: 'Ubiquitus',
              slots: ['internmeet'],
            },
          ],
        },
        {
          time: '09:45-10:00',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Ubiquitus',
              slots: ['digitalisaering_dummies'],
            },
          ],
        },
        {
          time: '10:00-10:20',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '10:20-11:20',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Ubiquitus',
              slots: ['digital_identity'],
            },
          ],
        },
        {
          time: '11:20-11:40',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '11:40-12:00',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Ubiquitus',
              slots: ['uland'],
            },
          ],
        },
        {
          time: '12:00-12:30',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Ubiquitus',
              slots: ['debt'],
            },
          ],
        },
        {
          time: '12:30-13:30',
          title: 'Lunsj',
          isBreak: true,
        },
        {
          time: '13:30 - 16:30',
          title: 'Workshops',
          entries: [
            {
              room: 'Horus',
              slots: ['kubernetes101'],
            },
            {
              room: 'Kronos',
              slots: ['synthrust'],
            },
            {
              room: 'Janus',
              slots: ['ljubljana_streamin'],
            },
            {
              room: 'Orion',
              slots: ['uxunicorn'],
            },
            {
              room: 'Centaurus',
              slots: ['cryptografi'],
            },
            {
              room: 'Cassiopea',
              slots: ['iothouse'],
            },
          ],
        },
        {
          time: '16:30-17:15',
          title: 'Open Space',
        },
        {
          time: '17:15',
          title: 'Slovensk fingermat',
          isBreak: true,
        },
        {
          time: '19:15',
          title: 'Felles avgang til ASperetivo',
        },
        {
          time: '19:30',
          title: 'Quiz',
        },
        {
          time: '20:00',
          title: 'Fellesmiddag på ASperetivo',
        },
      ],
    },
    {
      day: 'Mandag 22. Oktober',
      collections: [
        {
          time: '06:30-09:00',
          title: 'Frokost',
        },
        {
          time: '09:00-12:00',
          title: 'Workshops & Talks',
          entries: [
            {
              room: 'Janus',
              slots: ['ljubljana_streamin'],
            },
            {
              room: 'Orion',
              slots: ['uxunicorn'],
            },
            {
              room: 'Centaurus',
              slots: ['cryptografi'],
            },
            {
              room: 'Cassiopea',
              slots: ['iothouse'],
            },
            {
              room: 'Kronos',
              slots: ['voiceuserinterface'],
            },
            {
              room: 'Horus',
              columnSize: 2,
              slots: [
                'reason',
                'object_keys',
                'pause',
                'cmsreact',
                'redesign',
                'pause',
                'maxmusic',
                'remote_work',
              ],
            },
          ],
        },
        {
          time: '12:00-13:00',
          title: 'Lunsj',
        },
        {
          time: '13:00-14:00',
          title: 'Fritid',
        },
        {
          time: '14:00',
          title: 'Buss til flyplassen',
        },
        {
          time: '16:30',
          title: 'Flyet til Oslo (QS4467)',
        },
        {
          time: '19:15',
          title: 'Vi ankommer Oslo',
        },
      ],
    },
  ],
  talks: {
    internmeet: {
      pending: false,
      speakers: [
        {
          name: 'Christer Kjellesvig',
          bio: '',
          email: 'ckj@knowit.no',
          pic: 'ckj.jpg',
        },
      ],
      title: "What's Next?",
      type: 'Talk',
      description:
        'Knowit Objectnet må hele tiden tilpasse seg markedet. Vi går fra å være teknologileverandør til partner med kundene våre. Hvilke nye ting driver vi med?',
    },
    digital_identity: {
      pending: false,
      title:
        'Ekstreme lærdommer om digital identitet, store datamengder og statistikk.',
      speakers: [
        {
          name: 'Anders Breivik',
          bio:
            'Anders er en erfaren teamleder med 14 års erfaring som konsulent. Som seniorkonsulent og gruppeleder i Knowit er han kjent for å være utadvendt, initiativrik og kommunikativ. Han liker å jobbe med komplekse og logiske problemstillinger, og trives med å utvikle avanserte løsninger på en smidig måte i nært samarbeid med kunder. Anders har erfaring fra utvikling på alle systemlag både i store, forretningskritiske systemer som mindre, mobile løsninger. Han har bransjeerfaring fra blant annet offentlig forvaltning, forsikring og telekom.',
          pic: 'abr.jpg',
        },
      ],
      type: 'Talk',
      description:
        'Anders våknet en dag opp og delte navn med Norges verste massemorder. I tillegg til navnet viste det seg at de tilsynelatende delte en rekke egenskaper og interesser. Dette var starten på en absurd tid, og underveis gikk det opp noen lys for Anders om digital identitet og kontekst, store datamengder, forskjellen på korrelasjon og kausalitet, samt menneskets trang til å skape orden i kaos.',
    },
    debt: {
      pending: false,
      title: 'Teknisk gjeld i virkeligheten',
      speakers: [
        {
          name: 'Michael Johansen',
          bio:
            "A software consultant during the day and a startup founder during the night. At NTNU I studied entrepreneurship, computer science and psychology. As part of my startup venture I've gotten first-hand experience with the startup scene in both Boston and in Silicon Valley. I care more than most people about startups, and it's a topic on which I'd like to share my insights.",
          pic: 'mjo.jpg',
        },
        {
          name: 'Sten Christoffer Eliesen',
          bio:
            "Christoffer er en engasjert utvikler som brenner for IT. Han er nysgjerrig og glad i å lære nye ting. Han stiller høye krav til seg selv og det han leverer, men er pragmatisk når det trengs. Hans interesse for IT spenner seg hele veien fra operativsystem til brukergrensesnitt, og han er derfor en naturlig fullstack og 'devops' utvikler. I disse tider er det frontend som er i vinden og Christoffers hjerte følger etter. React og Node er spennende teknologier som passer han midt i blinken. Både 'gammel' jQuery og ny React er teknologier som er givende å jobbe med for Christoffer. Flere års erfaring har gjort han trygg i rollen som konsulent. Han er beskjeden, samtidig som han er en dyp tenker med rolige øyne og et brennende hjerte.",
          pic: 'christoffer.eliesen.JPG',
        },
      ],
      type: 'Talk',
      description:
        'Det er to problemer med gjeld: 1) Gjeld er vanskelig å ha. 2) Gjeld må alltid betales tilbake. Dette foredraget går i dybden på reelle konsekvenser av teknisk gjeld, og utforsker hvordan man forklarer teknisk gjeld tli en kunde.',
    },
    uland: {
      pending: false,
      title: 'Fra Lakkegata til Kibera',
      speakers: [
        {
          name: 'Kenneth Stigen',
          bio:
            'Kenneth har jobbet i som konsulent siden 2004, og i Knowit Objectnet siden januar 2010. Kenneth har sin kjernekompetanse innenfor arkitektur og utvikling av store løsninger på Java-plattformen.',
          pic: 'kes_knowit.no.jpg',
        },
      ],
      type: 'Talk',
      description:
        'The Global Digital Library lager en applikasjon for barn som skal lære å lese. Barna er i forskjellig alder, kommer fra forskjellige kulturer, snakker forskjellig språk og har forskjellig teknisk kompetanse. Felles for alle er at ingen av dem eier en smartmobil. Hør om erfaringene til en programmerer som har måttet lære seg å brukerteste og få noe fornuftig ut av dette. Hvilke problemer har oppstått, og hvordan har vi endret vår applikasjon etter å ha møtt barn i Ethiopia, Kenya, Kambodsja, Nepal og Bangladesh.',
    },
    digitalisaering_dummies: {
      pending: false,
      title: 'Digitalisering for dummies',
      speakers: [
        {
          name: 'Rune Storløpa',
          bio:
            'Erfaren virksomhetsarkitekt, teknisk arkitekt / løsningsansvarlig, som aldri blir enig med seg selv om det er morsomst å fikle med kode og lage gode løsninger eller å diskutere med kunder for å få de til å velge gode løsninger. Gjør derfor helst begge deler så langt tiden strekker til.',
          pic: 'rst.jpg',
        },
      ],
      type: 'Talk',
      description:
        'Digitalisering er et ord alle™ snakker om. Men hva innebærer det i praksis? Hvilke konsekvenser får det for deg som sitter og debugger if-statementsene dine? Får det noen konsekvenser i det hele tatt, eller er det bare "same shit, new wrapping"? ',
    },
    ljubljana_streamin: {
      pending: false,
      title: "Ljubljana streamin'",
      speakers: [
        {
          name: 'Anders Brevik',
          bio: 'Fra Tustna, derfor er jeg Tustna.',
          pic: 'anders.brevik.jpg',
        },
        {
          name: 'Joachim Seilfaldet',
          bio:
            'Joachim er en utvikler med erfaring innenfor objektorienert- og funksjonellutvikling.',
          pic: 'jos.jpg',
        },
        {
          name: 'Kennet Vuong',
          bio:
            'Kennet er en ivrig utvikler som stadig er på jakt etter nye utfordringer og teknologier. Han ser på seg selv som en full-stack utvikler som trives godt både på fremsia med web- og mobilutvikling og på baksia med database- og serverapplikasjoner. Gjennom tidligere erfaringer har Kennet jobbet som DevOps-utvikler og objektorientert systemutvikling innenfor JVM. I tillegg har han vært scrum master og team- og techlead innenfor frontend. Kennet liker å jobbe i team i tett samarbeid med kunder og designere.',
          pic: 'kennet.vuong.jpg',
        },
        {
          name: 'Patrik Fridberg Bakken',
          bio:
            'Patrik startet i Knowit Objectnet i august 2016 etter 3 år i USA på Illinois State University, og 3 år på NTNU i Trondheim hvor mastergraden ble fullført. Kjernekompetansen ligger i back-end utvikling i språk som bl.a. Java og C++. Patrik gikk inn i NSB/Entur-prosjektet hvor han jobbet med å modernisere salgssystemet. Arbeidet har gitt han mye erfaring med elektroniske betalingsløsninger, rammeverk som Spring Boot og Hibernate, samt innsikt i smidig arkitektur. Patrik er veldig interessert i å lære og ser alltid etter nye utfordringer.',
          pic: 'patbak.jpg',
        },
      ],
      type: 'Workshop',
      description:
        'Abstract: Kafka på det aller enkleste. Gjennom workshopen vil vi introdusere dere for Kafka og konseptene i Kafka. Vi legger fokus på bruksområder hvor Kafka fungerer utrolig bra. På forhånd har vi opprettet et sett med oppgaver som vi løser sammen, mens vi samtidig forklarer konseptene i sin enkleste forstand. Oppgavene som vil bli utdelt vil være svært enkle og det er ikke et stort krav til hverken koding eller SQL kunnskap. Workshopen vil dekke følgende områder: Kafka, Kafka Connect, Producer og Consumer API, Kafka Streams, KSQL',
    },
    real_life_data_science: {
      pending: false,
      title: 'Real Life Data Science - for den nysgjerrige utvikler',
      speakers: [
        {
          name: 'Lars Lundby',
          bio:
            'Erfaren systemarkitekt med kompetanse på Java-plattformen og analyse av forretningsmessige problemstillinger.',
          pic: 'llu.jpg',
        },
        {
          name: 'Emil Østensen',
          bio:
            'Emil begynte som konsulent i Knowit Objectnet August 2016. Han har kompetanse innenfor C og Java-utvikling, og jobber nå som backendutvikler på JVMen. Han interesserer seg for algoritmer og effektivitet i programmer. Dette kommer i hans interesse for sjakkprogrammering som han skrev en masteroppgave om på UiO, og også senere holdt talk om. Emil har som mål å alltid skrive ren og testbar kode, og henter inspirasjon fra Clean Code.',
          pic: 'emil.ostensen.jpg',
        },
        {
          name: 'Jan Henrik Gundelsby',
          bio:
            'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
          email: 'jhg@knowit.no',
          pic: 'jhg.jpg',
        },
      ],
      type: 'Workshop',
      description:
        'Velkommen til løsning av Ruter-case med maskinlæring: Forbedring av forventet ankomst av busser basert på reelle sanntidsdata. Hva skjer når Knowits eminente selgere lover at vi LETT kan toppe dagens sanntidsløsning hos Ruter med maskinlæring? Workshopen følger caset fra innsalg via utforsking av data til å løse case med passende modeller. Vi har på forhånd samlet noen ukers sanntidsdata fra Ruters busser i Oslo. Du lærer nok teori og metode for å løse et ekte case. Vi implementerer sammen forbedrede algoritmer i Python med velkjente, enkle open source-rammeverk.',
    },
    object_keys: {
      pending: false,
      title: 'A day in the life of a javascript programmer: Object keys',
      speakers: [
        {
          name: 'Johannes Moskvil',
          bio:
            'Johannes er nyutdanned sivilingeniør i datateknikk ved NTNU med spesialisering innen kunstig intelligens. I sin masteroppgave laget han et intelligent speil som kunne gjenkjenne personer, drevet av Raspberry PI.',
          pic: 'johannes.moskvil.jpg',
        },
      ],
      type: 'Talk',
      description:
        'I denne lyntalen tar jeg kjapt for meg hva som faktisk kan være et property name i javascript og hvorfor det kanskje ikke er så rett frem som man skulle tro... Demonstrert gjennom et case fra det virkelig liv som skapte meg en god dose hodebry.',
    },
    remote_work: {
      pending: false,
      title: 'Hvordan lykkes med å jobbe remote',
      speakers: [
        {
          name: 'Sigurd Lund',
          bio:
            'Utdannet ved NTNU med mastergrad i informatikk våren 2015 der han spesialiserte seg innenfor intelligente systemer. Sigurd begynte som konsulent hos Knowit Objectnet samme år, der han gikk inn i LISA-prosjektet hos NSB. Han liker aller best backend-utvikling, og har mest erfaring med dette i både Java og Scala. Sigurd er lett å samarbeide med, og har gode kommunikasjonsegenskaper. Han trives med å ha god kontakt med kunden for å finne de beste løsningene.',
          pic: 'siglund.jpg',
        },
      ],
      type: 'Talk',
      description:
        'Deler mine erfaringer med å jobbe remote for Entur. Belyser hvordan man kan tilpasse situasjonen for å gjøre forskjellen fra å sitte i samme rom så liten som mulig.',
    },
    reason: {
      pending: false,
      title: 'Introduksjon til Reason',
      speakers: [
        {
          name: 'Alexander Bjerkan',
          pic: 'alb_knowit.no.jpg',
          bio:
            'Alexander har god erfaring som systemutvikler i smidige team og har bygget opp betydelig kompetanse innenfor et bredt spekter av teknologier og ansvarsområder. Han har jobbet med alt fra små hobbyprosjekter til store samfunnskritiske systemer og han brenner for håndverket og kvaliteten i IT-faget. Som person søker Alexander stadig å utvikle sin tekniske horisont med nye teknologier og kunnskap. Hans primærfokus for tiden er frontend, med JavaScript og React.',
        },
      ],
      type: 'Talk',
      description:
        'Vi ser på Reason, et funksjonelt, typesikkert språk basert på OCaml som kan kompileres ned til native og JavaScript med mer. Les the what & why her https://reasonml.github.io/docs/en/what-and-why.html og du blir garantert med på denne workshopen. Det er lenge siden programmering har vært så gøy!',
    },
    kubernetes101: {
      pending: false,
      speakers: [
        {
          name: 'Tord Kloster',
          bio:
            'Tord har jobbet i Knowit siden høsten 2017. Tord har god erfaring innen utvikling av Java-baserte web- og system-løsninger. Han har jobber med backend-utvikling i Java og Scala, og har også hands-on erfaring med moderne infrastruktur-løsninger som Docker / Kubernetes. Med erfaring og kunnskap om samarbeid i team er Tord et godt fungerende team-medlem. Tord har interesser for både front-end og back-end, med erfaring fra tidligere full-stack prosjekter. I tillegg er Tord tilpasningsdyktig til ny teknologi, og har en god evne til å lære seg ny og spennende faglig kunnskap.',
          pic: 'tord.kloster.jpg',
        },
        {
          name: 'Iver Egge',
          bio:
            'Iver har jobbet som systemkonsulent i Knowit Objectnet i Oslo kommune - Utviklings- og kompetanseetaten, Interaktive tjenester (ITAS). Gjennom ITAS-programmet har Knowit hatt ansvaret for nyutvikling og forvaltning av Oslo kommunes sentrale meldingsinfrastruktur og integrasjonsplattform, samt kommunens felles katalogtjenester. mikrotjenestearkitektur.',
          pic: 'iver.egge.png',
        },
        {
          name: 'Yngvar Kristiansen',
          bio:
            'Yngvar er utvikler og har jobbet med back-end, front-end, drift og programvarearkitektur. Konsulenten har erfaring fra komplekse, forretningskritiske applikasjoner, behandling av store datamengder, og web-applikasjoner. Han har erfaring med flere deler av FSUM: Kravhåndtering, konstruksjon, test og estimering.',
          pic: 'Yngvar_Kristiansen.jpg',
          email: 'yngvar.kristiansen@knowit.no',
        },
      ],
      title: 'Kubernetes 101',
      type: 'Workshop',
      description:
        'Fra helt basic: Hvordan kobler jeg meg på kubernetes og hvordan får jeg en docker container til å kjøre i skyen? Til mer intermediate topics som rolle basert tilgangsstyring, oppdeling av klyngen i namespace ++.  Løpet er lagt opp slik at man jobber mot en guide/oppgave ark, med hjelp fra workshop holdere. Det er også mulig vi er innom Helm charts til slutt.',
    },
    synthrust: {
      pending: false,
      speakers: [
        {
          name: 'John-Olav Storvold',
          bio:
            'John-Olav begynte i Knowit i 2016 etter å ha tatt sin mastergrad ved NTNU. I løpet av mastergraden utvekslet han til University of California, Santa Barbara. Han er lærevillig og tar stor stolthet i den jobben han utfører både i og utenfor arbeidstiden. På fritiden liker John-Olav å bryne seg på Java, Scala, webutvikling og annen teknologi som er i luften.',
          pic: 'johnolav.storvold.jpg',
        },
        {
          name: 'Thomas Tøkje',
          bio:
            'Thomas har en mastergrad i Kybernetikk ved NTNU fra våren 2012, med spesialisering i tilpassede datasystemer. Gjennom sin utdanning og karriere har han lært seg å beherske et bredt spenn av forskjellige fagfelt, deriblant elektronikk, programmering og serverdrift. I jobbsammenheng har han opparbeidet seg god erfaring med Java, Scala og Kotlin, samt dialekter av C (C, C++ og C#).',
          pic: 'tøkje.jpg',
        },
      ],
      title: 'Lag din egen synthesizer i Rust',
      type: 'Workshop',
      description:
        'Rust er et moderne systemspråk som garanterer kode som er fri for minnefeil og race conditions, men som likevel kan måles med C og C++ i ytelse. I denne workshopen skal vi leke oss med Rust for å lage en enkel synthesizer som vi kan spille på med tastaturet. Vi kommer også til å implementere prosesseringseffekter, deriblant delay, romklang, distortion og flanger. Formålet med workshopen er å bli kjent med Rust via et praktisk prosjekt, og det stilles ingen krav om forkunnskaper for verken Rust eller lydprosessering.',
    },
    immuneterapi: {
      pending: false,
      speakers: [
        {
          name: 'Jørgen Rognerud',
          bio:
            'Jørgen begynte i Objectnet sommeren 2017 etter å ha jobbet ett år hos EVRY Financial Services. For øyeblikket jobber han hos Entur med Android-utvikling. Jørgen har en mastergrad i informatikk fra UiO hvor han skrev en masteroppgave innen biomedisinsk informatikk med fokus på bruk av maskinlæring innen immunterapi for kreft. Andre faglige interesser er blockchain og AI.',
          pic: 'jorgen.rognerud.jpg',
        },
      ],
      title:
        'Immune profiling for immunotherapy: next generation cancer vaccines',
      type: 'Talk',
      description:
        'I nyere tid har immunterapi vist lovende resultater ved å kurere pasienter for kreftformer som tidligere var en sikker død. Dette ved bruk av immunprofilering for å kunne skreddersy behandlinger — noe kreftforskere mener kan være fremtidens kreftbehandling.',
    },
    uxunicorn: {
      pending: false,
      speakers: [
        {
          name: 'Maren Møller',
          bio:
            'Maren er en kreativ, nysgjerrig og produktiv UX-designer som først og fremst jobber med å skape grensesnitt for ulike plattformer, med fokus på en god brukeropplevelse. Hun har stor interesse av å forstå folks adferd og bruker derfor metoder for å finne ut hvordan man kan kommunisere med et produkt, hvilke behov er der og hvilke løsninger er mulige. Hun har jobbet mye med digitale prototyper, wireframes, illustrasjoner, samt brukertesting av forskjellige produkter og konsepter.',
          pic: 'maren.moller.jpg',
        },
        {
          name: 'Mina Ravem',
          bio:
            'Mina har en mastergrad I Human centred systems aka user experience. Spesialiseringen hennes ligger i brukerinnsikt, både i hvordan man tilegner seg og bruker innsikten for å skape gode brukeropplevelser.',
          pic: 'mina.ravem.jpg',
          email: 'mina.ravem@knowit.no',
        },
      ],
      title: 'How to become a (junior) UX unicorn',
      type: 'Workshop',
      description:
        'UX Design for nybegynnere. Lær deg designprinsipper og metoder, bruke designverktøy for å skape din egen prototype og tips og triks når man brukertester. Oppgaven blir å skape et konsept for en app..',
    },
    iothouse: {
      pending: false,
      speakers: [
        {
          name: 'Thomas Malt',
          bio:
            'Erfaren virksomhetsarkitekt, løsningsarkitekt og teknologileder som brenner for å gjøre team, mennesker og løsninger rundt seg best mulig. Har ledet avdelinger, reorganisering- og transformasjonsprosjekter, samt hatt ansvar for strategiutvikling og løsningsarkitektur for store og sammensatte tjenester. Holder seg fremdeles oppdatert på teknologi og løsninger.',
          pic: 'thomas.malt.jpg',
        },
      ],
      title:
        'Kom igang med ditt eget smarthus, Internet of Things og grafisk sensor dashboard',
      type: 'Workshop',
      description:
        'I del 1 setter du opp din egen smarthuskontroller basert på raspberry pi, home assistant og z-wave, og finner ut hvordan du kan bruke en sensor til å styre en IKEA Trådfri lyspære. I del 2 lærer vi hvordan internett-delen av IoT fungerer og setter opp et dashboard som viser grafer med data fra smarthuset vårt.',
    },
    cryptografi: {
      pending: false,
      speakers: [
        {
          name: 'Jonas Natten',
          bio:
            'Jonas startet som konsulent i knowit høsten 2017. Han liker seg best på backend, og har siden han startet tilegnet seg erfaringer med funksjonell programmering, mikrotjenester, og infrastruktur i skyen.',
          pic: 'jnatten.png',
        },
        {
          name: 'Henrik Nårstad',
          bio:
            'Henrik har en bachelorgrad og leverte sin masteroppgave på Universitetet i Oslo ved Institutt for Informatikk julen 2015. Har han opparbeidet seg erfaring med programmeringsspråk som Java, Python, C/C++ og Javascript gjennom faglig arbeid og egne prosjekter. Han er interessert i operativsystemer, systemutvikling, nye teknologier, og har i tillegg deltatt i uhøytidelige konkurranser med fokus på programvaresikkerhet.',
          pic: 'Henrik_Na_rstad.jpg',
          email: 'henrik.narstad@knowit.no',
        },
      ],
      title: 'Kryptografi for nybegynnere (nei ikke bitcoin)',
      type: 'Workshop',
      description:
        'Har du alltid hatt lyst til å bli supergod på kryptografi? Du blir neppe noen ekspert etter denne workshopen, men du vil forhåpentligvis ha en oversikt over et knippe kryptografiske algoritmer. I denne workshopen skal vi lære om kryptografi uten å tenke på den underliggende matematiske teorien. Vi skal implementere en “lekebank” som vi iterativt vil vise hvordan er usikker og som vi vil sikre med kryptografiske primitiver som hashing, symmetrisk kryptering, og digitale signaturer. Du trenger ingen forkunnskaper bortsett fra grunnleggende programmering.',
    },
    cmsreact: {
      pending: false,
      speakers: [
        {
          name: 'Audun Halland',
          bio:
            'Audun har bakgrunn fra Opera Software og Nokia, og startet i Knowit i april 2017. Audun har drevet med mobilutvikling i 10 år, og er vant med å levere på de hardeste kvalitetskrav, i det globale markedet, med nådeløs konkurranse fra aktører som Google og Apple.',
          pic: 'audun.halland.jpg',
        },
      ],
      title: 'CMS i en fei med React-admin',
      type: 'Talk',
      description:
        'APIet er fiks ferdig, MVPen i produksjon, DAU er eksponentiell. Du kommer plutselig på at innholdsprodusentene ikke vet hva hverken curl, REST, JSON, OAuth eller SQL er. Du har 100 andre høyt prioriterte oppgaver, men trenger en admin-frontend i morgen.',
    },
    maxmusic: {
      pending: false,
      speakers: [
        {
          name: 'Andreas Bade',
          bio:
            'Andreas er en omgjengelig, samlende og tydelig leder som siden 1998 har opparbeidet seg en utstrakt erfaringsbase for gjennomføring av prosjekter i ulike konsulentoppdrag Han har lang teknisk erfaring i kombinasjon med prosjektledererfaring. Andreas trives godt i grenseflaten mellom forretning og fag, funksjonalitet og teknologi og stortrives når han får nytte av sine samlende, kommunikative og motiverende egenskaper. Andreas er sertifisert Project Management Professional (PMP), Certified Scrum Master, Certified Product Owner, og ITIL Foundation v 3. Han er opptatt av musikk og motiveres av samfunnsnyttige og synlige oppgaver.',
          pic: 'ab.jpg',
        },
      ],
      title: 'Hvordan lage en interaktiv musikkinstallasjon i Max',
      type: 'Talk',
      description:
        'Oppsummert: En historie om hvordan jeg på eget initiativ og med stor naivitet solgte meg inn som (eneste) utvikler av Popsenterets utstilling, Fuzz, og hvordan jeg deretter lagde den ved hjelp av Max og arduino i løpet av noen hektiske sommermåneder. Foreløpig innhold: utstillingens innhold, mål og mottakelse,  intro om kunden (Popsenteret), hva musikkteknologi er for noe og hvorfor det er interessant, hvordan og hvorfor jeg solgte meg inn på prosjektet ved hjelp av en (fysisk) prototype, hva jeg lagde, hvilken teknologi som ble brukt og hvordan den ble brukt, hvilke erfaringer jeg har fra prosjektet, hvordan utstillingen ble mottatt, hvordan utstillignen fungerer i dag.',
    },
    voiceuserinterface: {
      pending: false,
      speakers: [
        {
          name: 'Henrik Dolva Dæhli',
          bio:
            'Henrik er senior Javautvikler med erfaring fra utvikling i både store forretningskritiske systemer med svært høye krav til oppetid og kodekvalitet, til små applikasjoner på mobil plattform. Han er sertifisert ScrumMaster, liker å jobbe smidig med fokus på høy kvalitet. I prosjekt trives han å samarbeide tett med forretningssiden for å finne de beste løsningene. I sine siste prosjekter har han fått erfaring med kontinuerlinge leveranser, skyløsninger og hvordan man forbedrer store legacy-systemer samtidig som man også leverer ny funksjonalitet.',
          pic: 'hed.jpg',
        },
        {
          name: 'Håkon Gimse',
          bio:
            'Håkon har en mastergrad fra NTNU med en spesialisering innen kunstig intelligens med dype nevrale nettverk. Han ser på seg selv som en fullstack-utvikler med prosjekterfaring både front- og back-end. Til nå har han jobbet med teknologier som Angular og React front-end, og .NET og Java back-end. I tillegg til dette har han også bred erfaring innen native Android utvikling. For tiden jobber han for Knowit på Vegloggen prosjektet med Scala og Java.',
          pic: 'haakon.gimse.jpg',
        },
        {
          name: 'Christian Linchausen',
          bio:
            'Christian er en webutvikler med erfaring fra EdTech bransjen som brenner for å lage brukervennlige løsninger. Christian har erfaring med blant annet Backbone.js, ASP.NET, samt HTML5, CSS3 og Javascript.',
          pic: 'christian.linchausen.jpg',
        },
      ],
      title:
        'Voice User Interface med Dialogflow og Google Actions for Google Assistant',
      type: 'Workshop',
      description:
        'Bli med inn i fremtiden - lær deg å lage Actions on Google for Google Assistant med Dialogflow. Før måtte enhver bedrift ha en app. Snart har enhver app VUI (Voice User Interface). Denne workshoppen er for deg som aldri tidligere har prøvd å lage et talestyrt brukergrensesnitt, men som synes det høres spennende ut og har lyst til å se hvor enkelt det er!',
    },
    redesign: {
      pending: false,
      speakers: [
        {
          name: 'Eirik Lillejordet',
          bio:
            'Eirik hjelper prosjekter med å designe digitale brukeropplevelser. For tiden jobber han på Entur der han designer en salgsklient, i tillegg til å hjelpe til på tvers av team med å bygge et designsystem. Før dette tok han en master i interaksjonsdesign fra Universitetet i Oslo, med masteroppgave om mobile helseapplikasjoner for idrettsutøvere.',
          pic: 'eirik.lillejordet.jpg',
        },
      ],
      title: 'Hvorfor liker ikke brukerne redesignet ditt?',
      type: 'Talk',
      description:
        'Hvorfor liker ikke alle brukerne at legacysystemer blir til freshe webapps med en moderne teknisk stack? I denne lyntalen får du tips til hvordan unngå Stockholmsyndrom for datasystemer.',
    },
    boardgames: {
      pending: false,
      speakers: [
        {
          name: 'Jan Henrik Gundelsby',
          bio: 'Jan Henrik er glad i brettspill!',
          email: 'jhg@knowit.no',
          pic: 'jhg.jpg',
        },
      ],
      title: 'Brettspill 🎲',
      type: 'Fun',
      description:
        'Vi prøver oss på en spillkveld som alternativ til fest på byen. Vi stiller med noen spill som T. I. M. E stories, Pandemic og Arkham Horror Card Game. Møt opp etter middag (ta en taxi tilbake til hotellet), for avslappet stemning med snacks og drikke og litt brettspill.',
    },
  },
};

export default viewmodel;
