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
          time: '19:00',
          title: 'Flyet drar fra Oslo Lufthavn',
        },
        {
          time: '23:00',
          title: 'Vi ankommer Ljubljana',
        },
      ],
    },
    {
      day: 'Lørdag 20. Oktober',
      collections: [
        {
          time: '09:30-18:00',
          title: 'Aktiviteter',
        },
      ],
    },
    {
      day: 'Søndag 21. Oktober',
      collections: [
        {
          time: '09:00-09:45',
          title: 'Internmøte',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['internmeet'],
            },
          ],
        },
        {
          time: '10:00-10:20',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '10:15-12:30',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: [],
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
              room: 'Auditorium 🎥',
              slots: [],
            },
            {
              room: 'Parliament 🎥',
              slots: [],
            },
            {
              room: 'Congress',
              slots: [],
            },
            {
              room: 'Bundestag',
              slots: [],
            },
          ],
        },
        {
          time: '16:30-17:30',
          title: 'Open Space',
        },
        {
          time: '19:15',
          title: 'Felles avgang til restaurant',
        },
        {
          time: '19:30',
          title: 'Restaurant',
        },
      ],
    },
    {
      day: 'Mandag 22. Oktober',
      collections: [
        {
          time: '09:00-12:00',
          title: 'Workshops',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: [],
            },
            {
              room: 'Parliament 🎥',
              slots: [],
            },
            {
              room: 'Congress',
              slots: [],
            },
            {
              room: 'Bundestag',
              slots: [],
            },
          ],
        },
        {
          time: '12:00-13:00',
          title: 'Lunsj',
        },
      ],
    },
  ],
  talks: {
    internmeet: {
      pending: false,
      speakers: [
        {
          name: 'Jan Henrik Gundelsby',
          bio:
            'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
          email: 'jhg@knowit.no',
          pic: 'jhg.jpg',
        },
      ],
      title: 'Velkommen og internmøte',
      type: 'Talk',
      description: 'Beskrivelse kommer',
    },
  },
};

export default viewmodel;
