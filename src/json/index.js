const viewmodel = {
  title: 'Fagseminar høst 2018',
  event: {
    date: '27. april - 29. april 2018',
    longDate: '27. april - 29. april 2018',
    venue: 'Colorline Oslo-Kiel',
    city: 'Kiel',
    country: 'Tyskland',
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653949.1411731015!2d7.525055213717181!3d57.0627760374479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2560d8fee97ad%3A0x4248963c6580320!2sKiel%2C+Tyskland!5e0!3m2!1sno!2sno!4v1519114376274',
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
          time: '09:30-10:00',
          title: 'Internmøte',
        },
        {
          time: '10:00-10:15',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '10:15-12:30',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: [
              ],
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
  },
}

export default viewmodel
