export function getMockProfile(id: string) {
  return {
    id,
    name: "Mr. Person Profile",
    tagsArr: [
      "guy",
      "dude",
      "homie",
      "DJ",
      "Aussie",
      "indifferent about cracker barrel",
    ],
    email: "jeff@gmail.com",
    links: [
      "https://open.spotify.com/user/davidhartsough?si=RQ6mG6uhRi-jGia8HpjQ9w",
      "https://github.com/davidhartsough/",
      "https://www.youtube.com/user/mycheesegrater",
      "https://play.google.com/store/apps/developer?id=David+Hartsough",
      "https://soundcloud.com/davidhartsough",
    ],
  };
}

export const mockProfiles = [
  {
    id: "abc123",
    name: "Mr. Person Profile",
    tagsStr: "guy, dude, homie, DJ, Aussie, indifferent about cracker barrel",
  },
  {
    id: "david",
    name: "David Hartsough",
    tagsStr:
      "Happy human, Conversationalist, Philosopher, Psychologist, Developer, Drummer, Musician, Writer, Videographer, Designer, Stuntman Extraordinaire",
  },
  {
    id: "xyz123",
    name: "Jeff Jefferson",
    tagsStr:
      "my man, homedawg, real g, extra, homeslice, cabbage patch, hamster ball, ham and cheese, ice tea",
  },
  {
    id: "asdf456",
    name: "The Flying Spaghetti Monster",
    tagsStr:
      "mostly god, literally sentient spaghetti and meatballs, godsend, important, pasta, a floating bowl, better than jeebu, mass of noodles, nudez, invisible, pastafarian",
  },
];
