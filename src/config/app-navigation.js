const text = {
  home: 'Strona Główna',
  news: 'Aktualności',

  events: 'Wydarzenia',
  allEvents: 'Wszystkie nadchodzące',
  workshops: 'Warsztaty weekendowe',
  parties: 'Imprezy okazjonalne',
  festivals: 'Festiwale',
  regular: 'Regularne imprezy',

  people: 'Społeczność',
  instructors: 'Instruktorzy',
  djs: 'DJe',
  schools: 'Szkoły tańca',
  promotors: 'Promotorzy',

  compendium: 'Kompendium wiedzy',
  palop: 'Angola i kraje PALOP',
  caribbean: 'Karaiby',
  music: 'Muzyka',
  urban: 'Kiz Fusion i Urban Kiz',

  addContent: 'Dodaj treści',
  addEvent: 'Nowe wydarzenie',
  addNews: 'Dodaj newsa',
  addPeople: 'Dodaj osoby do katalogu',
  addCompendium: 'Nowy wpis w kompendium',

  faq: 'FAQ',
  contact: 'Kontakt',
  partnership: 'Współpraca',
};

const icons = {
  home: 'fa-home',
  news: 'far fa-newspaper',
  events: 'fa-calendar-alt',
  people: 'fa-users',
  compendium: 'fa-book-open',
  addContent: 'fa-plus',
  faq: 'fa-question-circle',
  contact: 'far fa-comment-dots',
  partnership: 'far fa-handshake',

  expandActive: 'fa-chevron-down',
  expandInactive: 'fa-chevron-up',
};

const navItems = [
  { icon: icons.home, text: text.home, href: '/' },
  { icon: icons.news, text: text.news, href: '/news' },
  { divider: true },
  {
    model: true,
    icon: icons.expandInactive,
    iconAlt: icons.expandActive,
    iconPrepend: icons.events,
    text: text.events,
    children: [
      { text: text.allEvents, href: '/events/all' },
      { text: text.workshops, href: '/events/workshops' },
      { text: text.parties, href: '/events/parties' },
      { text: text.festivals, href: '/events/festivals' },
      { text: text.regular, href: '/events/regular' },
    ],
  },
  { divider: true },
  {
    model: false,
    icon: icons.expandInactive,
    iconAlt: icons.expandActive,
    iconPrepend: icons.people,
    text: text.people,
    children: [
      { text: text.instructors, href: '/people/instructors' },
      { text: text.djs, href: 'people/djs' },
      { text: text.schools, href: '/people/schools' },
      { text: text.promotors, href: '/people/promotors' },
    ],
  },
  {
    model: false,
    icon: icons.expandInactive,
    iconAlt: icons.expandActive,
    iconPrepend: icons.compendium,
    text: text.compendium,
    children: [
      { text: text.palop, href: '/compendium/palop' },
      { text: text.caribbean, href: '/compendium/caribbean' },
      { text: text.music, href: '/compendium/music' },
      { text: text.urban, href: '/compendium/urban' },
    ],
  },
  { divider: true },
  {
    model: false,
    icon: icons.expandInactive,
    iconAlt: icons.expandActive,
    iconPrepend: icons.addContent,
    text: text.addContent,
    children: [
      { text: text.addEvent, href: '/add/event' },
      { text: text.addNews, href: '/add/news' },
      { text: text.addPeople, href: '/add/people' },
      { text: text.addCompendium, href: '/add/compendium' },
    ],
  },
  { divider: true },
  { icon: icons.faq, text: text.faq, href: '/faq' },
  { icon: icons.contact, text: text.contact, href: '/contact' },
  { divider: true },
  { icon: icons.partnership, text: text.partnership, href: '/partnership' },
];

const cities = [
  'Cała Polska',
  'Wrocław',
  'Warszawa',
  'Poznań',
  'Łódź',
  'Katowice',
  'Kraków',
  'Szczecin',
  'Gdańsk',
  'Zielona Góra',
  'Reszta Polski :)',
];

export { navItems, cities };
