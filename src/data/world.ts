import type { Village, Clan } from "./types";

export const villages: Village[] = [
  {
    slug: "hidden-leaf",
    name: "Hidden Leaf Village",
    japaneseName: "木ノ葉隠れの里",
    country: "Land of Fire",
    symbolColor: "leaf",
    history:
      "Founded when the Senju and Uchiha clans ended generations of mutual slaughter and agreed to share one settlement. That compromise created the first hidden village and the template every other nation copied.",
    leaders: [
      "Hashirama Senju (First)",
      "Tobirama Senju (Second)",
      "Hiruzen Sarutobi (Third)",
      "Minato Namikaze (Fourth)",
      "Tsunade (Fifth)",
      "Kakashi Hatake (Sixth)",
      "Naruto Uzumaki (Seventh)",
    ],
    geography:
      "A forested valley ringed by wooded hills, with the faces of its leaders carved into the cliff above the rooftops. Dense woodland gives Leaf shinobi a natural advantage on home ground.",
    notableShinobi: ["Naruto Uzumaki", "Kakashi Hatake", "Itachi Uchiha", "Tsunade", "Might Guy"],
    clans: ["Uchiha", "Hyuga", "Senju", "Nara", "Akimichi", "Yamanaka", "Aburame", "Inuzuka", "Uzumaki"],
    techniques: ["Fire Style: Great Fireball", "Shadow Clone Technique", "Rasengan", "Gentle Fist"],
    events: [
      "Founding of Konoha and the first Hokage's inauguration",
      "The Nine-Tails attack that killed the Fourth Hokage",
      "The Uchiha Clan Downfall",
      "The Konoha Crush during the Chunin Exams",
      "The Invasion of Pain and the village's reconstruction",
    ],
  },
  {
    slug: "hidden-sand",
    name: "Hidden Sand Village",
    japaneseName: "砂隠れの里",
    country: "Land of Wind",
    symbolColor: "sand",
    history:
      "Built inside a desert canyon, the Sand survived on scarce resources and hard bargains, which pushed it toward puppetry, poison craft and a jinchuriki programme it later came to regret.",
    leaders: ["Rasa (Fourth Kazekage)", "Gaara (Fifth Kazekage)"],
    geography:
      "A walled settlement hidden in a rock basin, shielded from sandstorms by cliffs and reachable only through a narrow pass.",
    notableShinobi: ["Gaara", "Temari", "Kankuro", "Sasori", "Chiyo"],
    clans: ["Kazekage lineage", "Puppet Brigade families"],
    techniques: ["Puppet Technique", "Sand Manipulation", "Magnet Release", "Poison crafting"],
    events: [
      "Alliance with Orochimaru during the Konoha Crush",
      "Gaara's abduction by the Akatsuki",
      "Sand-Leaf alliance leading to the Allied Shinobi Forces",
    ],
  },
  {
    slug: "hidden-mist",
    name: "Hidden Mist Village",
    japaneseName: "霧隠れの里",
    country: "Land of Water",
    symbolColor: "mist",
    history:
      "Once nicknamed the Village of the Bloody Mist for graduation exams that required killing a classmate. Later leadership dismantled that culture and rebuilt the village's reputation.",
    leaders: ["Yagura (Fourth Mizukage)", "Mei Terumi (Fifth Mizukage)"],
    geography: "A cluster of cylindrical buildings on an island archipelago, permanently wrapped in sea fog.",
    notableShinobi: ["Zabuza Momochi", "Kisame Hoshigaki", "Haku", "Mei Terumi"],
    clans: ["Hozuki", "Kaguya", "Yuki", "Terumi"],
    techniques: ["Water Style: Hidden Mist", "Silent Killing", "Ice Release", "Boil Release"],
    events: [
      "The bloodline purges that drove out kekkei genkai families",
      "Yagura's secret control by Obito Uchiha",
      "Reform under the Fifth Mizukage",
    ],
  },
  {
    slug: "hidden-cloud",
    name: "Hidden Cloud Village",
    japaneseName: "雲隠れの里",
    country: "Land of Lightning",
    symbolColor: "cloud",
    history:
      "A mountain power built on lightning chakra, physical conditioning and an aggressive foreign policy that repeatedly brought it into conflict with the Leaf.",
    leaders: ["Third Raikage", "A (Fourth Raikage)"],
    geography: "Towers built across sheer mountain peaks, connected by bridges and constantly wind-swept.",
    notableShinobi: ["Killer B", "A", "Darui", "Samui"],
    clans: ["Raikage lineage", "Yotsuki"],
    techniques: ["Lightning Release Armour", "Storm Release", "Seven-sword kenjutsu"],
    events: [
      "The Hyuga Affair and its diplomatic fallout",
      "Two jinchuriki raised successfully within the village",
      "Leading role in forming the Allied Shinobi Forces",
    ],
  },
  {
    slug: "hidden-stone",
    name: "Hidden Stone Village",
    japaneseName: "岩隠れの里",
    country: "Land of Earth",
    symbolColor: "stone",
    history:
      "An entrenched military power carved into rock spires, remembered for its heavy earth techniques and its long grudge with the Leaf after the Third Great Ninja War.",
    leaders: ["Onoki (Third Tsuchikage)", "Kurotsuchi (Fourth Tsuchikage)"],
    geography: "Buildings cut directly into towering rock pillars in a harsh, mountainous interior.",
    notableShinobi: ["Onoki", "Deidara", "Kurotsuchi", "Kitsuchi"],
    clans: ["Kamizuru", "Tsuchikage lineage"],
    techniques: ["Dust Release", "Earth Style: Rock Golem", "Explosive Clay", "Weightless Rock Technique"],
    events: [
      "Heavy losses in the Third Great Ninja War",
      "Deidara's defection to the Akatsuki",
      "Onoki's support for the shinobi alliance",
    ],
  },
  {
    slug: "hidden-rain",
    name: "Hidden Rain Village",
    japaneseName: "雨隠れの里",
    country: "Land of Rain",
    symbolColor: "mist",
    history:
      "A small nation ground down by being the battlefield of larger wars. Its orphans became the founders of the Akatsuki, and it eventually fell under Pain's rule as a closed theocracy.",
    leaders: ["Hanzo of the Salamander", "Nagato (as Pain)", "Konan"],
    geography: "A rain-soaked industrial city of pipes and towers, in permanent overcast weather.",
    notableShinobi: ["Nagato", "Konan", "Yahiko", "Hanzo"],
    clans: ["Uzumaki descendants"],
    techniques: ["Rain Tiger at Will Technique", "Paper Ninjutsu", "Rinnegan Paths"],
    events: [
      "Hanzo's betrayal of Yahiko's peace movement",
      "Nagato's takeover and the founding of the Akatsuki's base",
      "Konan's death defending Nagato's memory",
    ],
  },
];

export const clans: Clan[] = [
  {
    slug: "uchiha",
    name: "Uchiha Clan",
    village: "Hidden Leaf",
    history:
      "Descended from the elder son of the Sage of Six Paths, the Uchiha built their strength on fire techniques and the Sharingan. Political distrust after the Nine-Tails attack ended with the clan's near-total destruction.",
    members: ["Madara Uchiha", "Itachi Uchiha", "Sasuke Uchiha", "Obito Uchiha", "Fugaku Uchiha"],
    kekkeiGenkai: "Sharingan, Mangekyo Sharingan",
    techniques: ["Fire Style: Great Fireball", "Amaterasu", "Susanoo", "Genjutsu: Sharingan"],
    relationships:
      "Ancient rivals of the Senju, co-founders of Konoha, and later pushed to the political margins of the village they helped build.",
    events: ["Valley of the End duel", "The Uchiha Clan Downfall", "Sasuke's path of revenge"],
  },
  {
    slug: "hyuga",
    name: "Hyuga Clan",
    village: "Hidden Leaf",
    history:
      "Konoha's oldest noble house, split into a Main House and a Branch House bound by a cursed seal. Neji's generation began dismantling that hierarchy.",
    members: ["Hinata Hyuga", "Neji Hyuga", "Hiashi Hyuga", "Hizashi Hyuga", "Hanabi Hyuga"],
    kekkeiGenkai: "Byakugan",
    techniques: ["Gentle Fist", "Eight Trigrams Sixty-Four Palms", "Rotation"],
    relationships: "Politically influential, historically insular, closely tied to Konoha's leadership.",
    events: ["The Hyuga Affair", "Hizashi's sacrifice", "Neji and Hinata's reconciliation"],
  },
  {
    slug: "senju",
    name: "Senju Clan",
    village: "Hidden Leaf",
    history:
      "The Clan of the Forest, descended from the younger son of the Sage. Their founder became the First Hokage and set the village system in motion.",
    members: ["Hashirama Senju", "Tobirama Senju", "Tsunade", "Nawaki"],
    kekkeiGenkai: "Wood Release (Hashirama alone)",
    techniques: ["Wood Release techniques", "Advanced sealing", "Impure World Reincarnation"],
    relationships: "Founding partners of the Uchiha and the ancestral line of Konoha's leadership.",
    events: ["Founding of Konoha", "The First Hokage's treaty with the tailed beasts"],
  },
  {
    slug: "uzumaki",
    name: "Uzumaki Clan",
    village: "Whirlpool / Hidden Leaf",
    history:
      "Sealing masters from the destroyed village of Uzushiogakure. Their vitality and chakra reserves were feared enough that rival nations combined to wipe them out.",
    members: ["Naruto Uzumaki", "Kushina Uzumaki", "Nagato", "Karin"],
    kekkeiGenkai: "None (exceptional longevity and chakra)",
    techniques: ["Adamantine Sealing Chains", "Eight Trigrams Sealing", "Advanced fuinjutsu"],
    relationships: "Longstanding allies of the Senju and by extension of Konoha.",
    events: ["Destruction of Uzushiogakure", "Kushina and Naruto's jinchuriki lineage"],
  },
  {
    slug: "nara",
    name: "Nara Clan",
    village: "Hidden Leaf",
    history:
      "Keepers of a shadow-manipulation art and of Konoha's medicinal deer forest. Generations of Nara have served as strategists to the Hokage.",
    members: ["Shikamaru Nara", "Shikaku Nara", "Yoshino Nara"],
    kekkeiGenkai: "None",
    techniques: ["Shadow Possession", "Shadow Sewing", "Shadow Strangle"],
    relationships: "Bound to the Akimichi and Yamanaka in the Ino-Shika-Cho formation.",
    events: ["Shikaku's command during the Invasion of Pain", "Shikamaru's wartime leadership"],
  },
  {
    slug: "akimichi",
    name: "Akimichi Clan",
    village: "Hidden Leaf",
    history:
      "A clan of frontline heavies who convert stored calories into chakra, and guardians of the food pills that push that art to its limits.",
    members: ["Choji Akimichi", "Choza Akimichi"],
    kekkeiGenkai: "None",
    techniques: ["Expansion Technique", "Human Bullet Tank", "Butterfly Mode"],
    relationships: "Ino-Shika-Cho partners with the Nara and Yamanaka.",
    events: ["Choji's Butterfly Mode against Jirobo", "Wartime frontline assaults"],
  },
  {
    slug: "yamanaka",
    name: "Yamanaka Clan",
    village: "Hidden Leaf",
    history:
      "Mind specialists who run Konoha's intelligence and interrogation division and act as the alliance's telepathic network.",
    members: ["Ino Yamanaka", "Inoichi Yamanaka"],
    kekkeiGenkai: "None",
    techniques: ["Mind Body Switch", "Mind Transmission", "Mind Body Disturbance"],
    relationships: "Ino-Shika-Cho partners with the Nara and Akimichi.",
    events: ["Interrogating Akatsuki captives", "Coordinating the Allied Shinobi Forces"],
  },
  {
    slug: "hozuki",
    name: "Hozuki Clan",
    village: "Hidden Mist",
    history:
      "A Mist bloodline able to convert their bodies into water, giving them near-immunity to physical attacks.",
    members: ["Suigetsu Hozuki", "Mangetsu Hozuki"],
    kekkeiGenkai: "Hydrification Technique",
    techniques: ["Hydrification", "Water Gun Technique", "Great Water Arm"],
    relationships: "Historically tied to the Seven Swordsmen of the Mist.",
    events: ["Suigetsu joining Taka", "Mangetsu's mastery of all seven legendary swords"],
  },
  {
    slug: "aburame",
    name: "Aburame Clan",
    village: "Hidden Leaf",
    history:
      "Members offer their bodies as hives to insect colonies at birth, gaining unmatched tracking and reconnaissance ability.",
    members: ["Shino Aburame", "Shibi Aburame"],
    kekkeiGenkai: "None",
    techniques: ["Insect Cloud", "Insect Jar", "Parasitic Insect Bite"],
    relationships: "Quiet but trusted members of Konoha's tracking corps.",
    events: ["Team 8's tracking missions", "Wartime sensory support"],
  },
];

export const getVillage = (slug: string) => villages.find((v) => v.slug === slug);
export const getClan = (slug: string) => clans.find((c) => c.slug === slug);
