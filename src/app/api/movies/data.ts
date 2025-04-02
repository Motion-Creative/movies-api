export interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
  backdropPath: string;
  runtime: number;
  budget: number;
  revenue: number;
  rating: number;
  voteCount: number;
  director: string;
  cast: string[];
  language: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope. Based on a Stephen King novella, this acclaimed drama follows Andy's extraordinary journey of friendship, resilience, and eventual redemption over nearly two decades behind bars. Through patience, determination, and an unwavering belief in himself, Andy orchestrates a meticulous plan that will not only secure his freedom but also expose the corruption that permeates the prison system. The film explores powerful themes of hope, friendship, and the human spirit's capacity to endure even the most dehumanizing circumstances.",
    releaseDate: "1994-09-23",
    posterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropPath: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    runtime: 142,
    budget: 25000000,
    revenue: 28341469,
    rating: 8.7,
    voteCount: 23456,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    language: "English"
  },
  {
    id: 2,
    title: "The Godfather",
    tagline: "An offer you can't refuse.",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge. The film masterfully portrays Michael's reluctant transformation from a war hero determined to stay out of the family business into a ruthless mafia boss more calculating than his father ever was. Director Francis Ford Coppola creates an epic portrayal of family loyalty, power struggles, and the American dream corrupted, set against the backdrop of post-war America. The intricate narrative weaves together themes of immigration, assimilation, power, and the price of success, while examining the moral complexities of loyalty to family versus personal integrity. Featuring landmark performances and iconic cinematography, the film redefined the gangster genre and stands as a monumental achievement in cinema history.",
    releaseDate: "1972-03-14",
    posterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropPath: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    runtime: 175,
    budget: 6000000,
    revenue: 245066411,
    rating: 8.7,
    voteCount: 18034,
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    language: "English"
  },
  {
    id: 3,
    title: "The Dark Knight",
    tagline: "Why so serious?",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker. Unlike any criminal Gotham has seen before, the Joker is a force of pure, nihilistic chaos who desires not wealth or power, but simply to prove that anyone can be reduced to madness after one bad day. As the Joker's psychological warfare pushes Dent toward his breaking point, Batman finds himself in an impossible moral dilemma that will redefine his crusade against injustice and test the limits of his self-imposed rule against killing. The film explores complex themes of heroism, morality, and the thin line between order and anarchy, ultimately asking whether society sometimes requires noble lies to maintain peace. Christopher Nolan's revolutionary approach to the superhero genre elevates the material into a sophisticated crime drama while featuring Heath Ledger's iconic, Oscar-winning performance as the Joker.",
    releaseDate: "2008-07-16",
    posterPath: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    backdropPath: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    runtime: 152,
    budget: 185000000,
    revenue: 1004558444,
    rating: 8.5,
    voteCount: 29901,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    language: "English"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    tagline: "Just because you are a character doesn't mean you have character.",
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time. Quentin Tarantino's revolutionary masterpiece forever changed the landscape of independent cinema with its non-linear storytelling, vibrant dialogue, dark humor, and unforgettable characters. The interconnected tales follow Vincent Vega and Jules Winnfield, two philosophical hitmen on a routine assignment that goes spectacularly wrong; Butch Coolidge, a boxer who double-crosses a gangster but accidentally keeps his prized watch; and Mia Wallace, the glamorous wife of mob boss Marsellus Wallace who shares an eventful evening with Vincent. Set to an iconic soundtrack that blends surf rock, soul, and pop classics, the film creates a vibrant underworld populated by unforgettable characters caught in extraordinary circumstances. Tarantino's audacious directorial style combines extreme violence with lengthy conversational scenes about seemingly mundane topics like European hamburgers and foot massages, creating a unique tone that balances tension, humor, and unexpected tenderness.",
    releaseDate: "1994-09-10",
    posterPath: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdropPath: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    runtime: 154,
    budget: 8000000,
    revenue: 213928762,
    rating: 8.5,
    voteCount: 24654,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    language: "English"
  },
  {
    id: 5,
    title: "Schindler's List",
    tagline: "The true story of how one man saved 1100 lives.",
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II. Steven Spielberg's unflinching black and white masterpiece chronicles Schindler's remarkable transformation from a greedy, opportunistic war profiteer to a humanitarian who risked everything to protect his workers. Initially motivated purely by profit, Schindler establishes an enamelware factory in Krakow during the German occupation of Poland, employing Jewish workers for their cost-effectiveness. As the Holocaust intensifies and the horrors of Nazi genocide become inescapable, Schindler's conscience awakens. With the help of his accountant Itzhak Stern, he creates a list of workers deemed essential to his factory—a list that would ultimately save them from deportation to death camps. The film doesn't shy away from depicting the brutal realities of the Holocaust, including the liquidation of the Krakow ghetto and the nightmarish conditions at Auschwitz. Through meticulous historical detail and powerful performances, Spielberg creates a haunting testament to both humanity's capacity for unspeakable cruelty and its potential for extraordinary courage and compassion even in the darkest times.",
    releaseDate: "1993-11-30",
    posterPath: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdropPath: "/loRmLlpsaAFIJhDSLmtVnvI3j6F.jpg",
    runtime: 195,
    budget: 22000000,
    revenue: 321365567,
    rating: 8.6,
    voteCount: 14324,
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall"],
    language: "English"
  },
  {
    id: 6,
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Dom Cobb is the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible—inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. Christopher Nolan's mind-bending thriller explores the nature of reality, memory, and grief through spectacular visual storytelling and intricate nested narratives that challenge audience perceptions until the film's ambiguous final frame.",
    releaseDate: "2010-07-15",
    posterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdropPath: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    runtime: 148,
    budget: 160000000,
    revenue: 836836967,
    rating: 8.3,
    voteCount: 32012,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    language: "English"
  },
  {
    id: 7,
    title: "Parasite",
    tagline: "Act like you own the place.",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident. This darkly comic thriller follows the Kim family—father Ki-taek, mother Chung-sook, son Ki-woo, and daughter Ki-jung—as they struggle with poverty in their squalid basement apartment. When Ki-woo is recommended for a well-paid tutoring job at the luxurious home of the Park family, he fabricates credentials and assumes a false identity to secure the position. Recognizing an opportunity, the entire Kim family begins to infiltrate the Parks' household one by one, posing as unrelated, highly qualified individuals. As they scheme to become indispensable to the oblivious Parks, the Kims begin to taste the good life, reveling in the wealth and comfort they've never known. However, their newfound paradise is threatened when an unexpected interloper threatens to expose their elaborate deception, leading to a series of increasingly tense, shocking, and ultimately violent events. Bong Joon-ho's masterpiece serves as a scathing critique of class inequality and capitalism, using intricate visual metaphors, black humor, and sudden tonal shifts to explore how social stratification breeds resentment, desperation, and moral compromise. The film's carefully constructed narrative reveals layers of meaning with each new development, building to a devastating climax that challenges audience sympathies and expectations.",
    releaseDate: "2019-05-30",
    posterPath: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdropPath: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    runtime: 132,
    budget: 11400000,
    revenue: 258670626,
    rating: 8.5,
    voteCount: 15721,
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    language: "Korean"
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Return of the King",
    tagline: "The eye of the enemy is moving.",
    overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm. In this epic conclusion to the trilogy, the scattered members of the Fellowship face their final challenges in the war for Middle-earth. As Sauron launches a massive assault on Minas Tirith, Aragorn must embrace his destiny as king and rally the forces of men by summoning the Army of the Dead. Gandalf defends the besieged city alongside the brave but overmatched soldiers of Gondor, while Théoden leads the Rohirrim in a spectacular cavalry charge that momentarily turns the tide. Elsewhere, Frodo's strength wanes as the Ring's influence grows stronger, causing him to increasingly rely on his loyal companion Sam. Their journey is further complicated by the treacherous Gollum, who leads them into the lair of the giant spider Shelob in his desperate attempt to reclaim his 'precious.' When Frodo is captured by orcs, Sam must find courage to continue the quest alone. As the final battle rages and Mount Doom beckons, the fate of Middle-earth hinges on acts of extraordinary courage, sacrifice, and friendship. Peter Jackson's spectacular adaptation brings J.R.R. Tolkien's vision to life with groundbreaking visual effects, deeply emotional performances, and meticulous attention to the themes of power, corruption, heroism, and the enduring strength of fellowship.",
    releaseDate: "2003-12-01",
    posterPath: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    backdropPath: "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
    runtime: 201,
    budget: 94000000,
    revenue: 1142456987,
    rating: 8.5,
    voteCount: 21108,
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom"],
    language: "English"
  },
  {
    id: 9,
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage. Set in a near future where Earth has been devastated by crop blights and dust storms, the film follows Cooper, a former NASA pilot turned farmer who struggles to raise his children in a world increasingly hostile to human survival. When mysterious gravitational anomalies lead him to a secret NASA facility, Cooper is recruited by his former mentor, Professor Brand, for a desperate mission: to pilot the spacecraft Endurance through a wormhole near Saturn to explore potentially habitable planets in another galaxy. The mission is humanity's last hope, as Professor Brand works on a theoretical 'Plan A' to save everyone on Earth through revolutionary gravitational equations, with 'Plan B' being a colony established with frozen embryos. As Cooper and his team—including Brand's daughter, Amelia—venture through the wormhole, they face the harsh realities of relativistic time dilation, meaning that hours spent on certain planets translate to years passing on Earth. Cooper's promise to return to his children becomes increasingly difficult to fulfill as the mission encounters deadly setbacks and scientific mysteries. Christopher Nolan's ambitious film combines cutting-edge visual effects and scientifically accurate depictions of black holes and wormholes with a deeply emotional story about love, sacrifice, and the human instinct to survive. The film explores how the connection between parents and children can transcend dimensions, suggesting that love might be the one thing that exists beyond the constraints of time and space.",
    releaseDate: "2014-11-05",
    posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropPath: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    runtime: 169,
    budget: 165000000,
    revenue: 701729206,
    rating: 8.3,
    voteCount: 29215,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    language: "English"
  },
  {
    id: 10,
    title: "The Matrix",
    tagline: "Welcome to the real world.",
    overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth. Thomas Anderson leads a double life as office worker by day and 'Neo' the hacker by night until he receives cryptic messages from an elusive figure known as Morpheus. Pursued by mysterious agents who seem to possess impossible abilities, Neo is eventually contacted by Trinity, who reveals that Morpheus can answer the question that has been haunting him: 'What is the Matrix?' Upon meeting Morpheus, Neo learns the shocking truth—the world he believes to be reality is actually a sophisticated computer simulation called the Matrix, created by sentient machines to distract and pacify humans while harvesting their bodies for energy. The real world is a devastated landscape where the last human city, Zion, exists deep underground, and a war between humans and machines has raged for generations. Morpheus believes Neo is 'The One,' a prophesied figure who can end the war and free humanity. After choosing to swallow the red pill and awaken to reality, Neo struggles to accept his potential as he undergoes rigorous training in combat and bending the rules of the Matrix. When the group is betrayed, leading to Morpheus' capture, Neo must decide whether to sacrifice himself to save his mentor—a decision that will reveal whether he truly is humanity's savior. The Wachowskis' groundbreaking film revolutionized visual effects with its 'bullet time' sequences and martial arts choreography while exploring profound philosophical questions about reality, free will, and the relationship between humans and technology.",
    releaseDate: "1999-03-30",
    posterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdropPath: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    runtime: 136,
    budget: 63000000,
    revenue: 463517383,
    rating: 8.2,
    voteCount: 22631,
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    language: "English"
  },
  {
    id: 11,
    title: "Spirited Away",
    tagline: "The tunnel led Chihiro to a mysterious town...",
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family. During a family move to the suburbs, ten-year-old Chihiro's parents make an ill-fated detour to explore what they believe is an abandoned amusement park. As evening falls, the area transforms into a vibrant bathhouse for supernatural beings, and Chihiro watches in horror as her gluttonous parents are transformed into pigs as punishment for eating food meant for the spirits. Left alone in this dangerous realm, the terrified girl encounters Haku, a mysterious boy who explains that to survive, she must work in the bathhouse run by the greedy witch Yubaba. After signing a contract that takes her name and replaces it with 'Sen,' Chihiro begins work among bizarre spirits, gods, and creatures beyond her imagination. Through determination and kindness, she navigates this perilous world, forming unlikely friendships with the quiet but intimidating No-Face, the six-armed boiler room operator Kamaji, and the tough but fair bathhouse worker Lin. As Chihiro searches for a way to free her parents and return home, she discovers that Haku is actually a powerful river spirit with his own forgotten identity and hidden agenda. Hayao Miyazaki's masterpiece is a coming-of-age story that follows Chihiro's transformation from a spoiled, fearful child into a brave, compassionate young person who learns the value of hard work, friendship, and remembering who you truly are, even when everything familiar has been stripped away. Through stunning animation and imaginative storytelling, the film offers a magical meditation on environmentalism, consumerism, and traditional Japanese folklore reimagined for the modern world.",
    releaseDate: "2001-07-20",
    posterPath: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdropPath: "/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
    runtime: 125,
    budget: 19000000,
    revenue: 383397782,
    rating: 8.5,
    voteCount: 13658,
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naitō"],
    language: "Japanese"
  },
  {
    id: 12,
    title: "Goodfellas",
    tagline: "Three Decades of Life in the Mafia.",
    overview: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway. Based on Nicholas Pileggi's book 'Wiseguy,' Martin Scorsese's visceral crime classic follows Henry's rise from an awestruck teenager running errands for local mobsters to a full-fledged gangster enjoying the spoils of his criminal lifestyle alongside his friends Jimmy Conway and Tommy DeVito. Narrated by Henry himself, the film provides an intimate tour through the seductive world of organized crime, where violence, loyalty, and extravagance are inextricably linked. As Henry navigates the dangerous terrain of the mafia, he marries Karen, a Jewish woman initially both repelled and fascinated by his criminal connections. Together, they enjoy the fruits of Henry's illegal enterprises—lavish parties, expensive clothes, and preferential treatment wherever they go. However, Henry's cocaine addiction and increasing paranoia begin to unravel his charmed existence, especially when Tommy's volatile temper results in unnecessary murders that attract unwanted attention. The carefully calibrated hierarchies of the criminal world begin to collapse as federal investigators close in, forcing Henry to make impossible choices between loyalty to his criminal family and protecting himself and his loved ones. Scorsese's kinetic direction, featuring elaborate tracking shots, freeze frames, and a meticulously curated soundtrack, creates an immersive experience that neither glamorizes nor condemns its subjects, instead presenting the mafia lifestyle with unvarnished authenticity—revealing both its intoxicating allure and its inevitable, destructive conclusion.",
    releaseDate: "1990-09-12",
    posterPath: "/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg",
    backdropPath: "/sw7mordbZxgITU877yTpZCud90M.jpg",
    runtime: 145,
    budget: 25000000,
    revenue: 46836394,
    rating: 8.5,
    voteCount: 10929,
    director: "Martin Scorsese",
    cast: ["Ray Liotta", "Robert De Niro", "Joe Pesci", "Lorraine Bracco"],
    language: "English"
  },
  {
    id: 13,
    title: "Whiplash",
    tagline: "The road to greatness can take you to the edge.",
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity. Andrew Neiman is a first-year jazz student at the prestigious Shaffer Conservatory in New York, where he dreams of becoming one of the greats like his hero, Buddy Rich. When fearsome conductor Terence Fletcher selects him for the school's elite studio band, Andrew believes his moment has finally arrived. However, Fletcher's teaching methods prove to be psychologically and physically abusive—he hurls chairs, slaps students, and unleashes devastating personal insults to push his musicians beyond their limits. Driven by Fletcher's relentless pressure and his own obsessive ambition, Andrew practices until his hands bleed, sacrificing personal relationships, health, and normal college experiences in pursuit of greatness. After a car accident on the way to a competition, Andrew still attempts to perform despite serious injuries, leading to a humiliating failure on stage and his expulsion from Shaffer. When Andrew later discovers that Fletcher's abuse drove a former student to suicide, he agrees to testify against the instructor, resulting in Fletcher's dismissal. Months later, when the two meet by chance at a jazz club, Fletcher reveals that his extreme methods were designed to push truly exceptional musicians past conventional limitations. This conversation leads to one final, explosive confrontation on stage that will determine whether Andrew is merely good or truly great. Damien Chazelle's electrifying drama examines the psychological cost of artistic excellence, raising difficult questions about mentorship, ambition, and whether transcendent achievement justifies inhumane methods.",
    releaseDate: "2014-10-10",
    posterPath: "/7fn624j5lj3xTme2SgiLCHfMkU6.jpg",
    backdropPath: "/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg",
    runtime: 105,
    budget: 3300000,
    revenue: 49000000,
    rating: 8.4,
    voteCount: 12950,
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist", "Paul Reiser"],
    language: "English"
  },
  {
    id: 14,
    title: "The Silence of the Lambs",
    tagline: "To enter the mind of a killer she must challenge the mind of a madman.",
    overview: "Clarice Starling, a young F.B.I. cadet, seeks the help of an imprisoned and manipulative cannibal killer to track down another serial murderer. As a serial killer known as 'Buffalo Bill' terrorizes the Midwest by abducting and murdering young women, FBI trainee Clarice Starling is unexpectedly pulled from her academy training and assigned by behavioral science head Jack Crawford to interview Dr. Hannibal Lecter, a former psychiatrist and cannibalistic serial killer. Crawford believes Lecter, who has been imprisoned for eight years, may have insights into Buffalo Bill's psychology and methods. The brilliant but dangerous Lecter agrees to help only in exchange for personal information about Clarice, initiating a tense psychological quid pro quo. Each revelation from Lecter brings Clarice closer to Buffalo Bill, whose real name is Jame Gumb and who is killing women to create a suit made from their skin. Meanwhile, Lecter manipulates both Clarice and his primary caretaker, Dr. Frederick Chilton, eventually orchestrating a spectacularly violent escape from a temporary holding cell in Tennessee. As Clarice deciphers Lecter's cryptic clues and investigates Buffalo Bill's first victim, she begins to understand the killer's motivations and narrows her search. This leads her to Gumb's home in Illinois, where she discovers him keeping his latest victim, Catherine Martin, in a dry well in his basement. In a heart-stopping climax set in near-total darkness, the rookie agent must confront the killer alone. Director Jonathan Demme's psychological thriller features career-defining performances that explore the nature of evil, the complex relationship between hunter and hunted, and how confronting darkness—both in society and within ourselves—requires extraordinary courage.",
    releaseDate: "1991-02-13",
    posterPath: "/qjAyTj2BSObY8K9g2QaZV4kUOQN.jpg",
    backdropPath: "/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
    runtime: 118,
    budget: 19000000,
    revenue: 272742922,
    rating: 8.3,
    voteCount: 14082,
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    language: "English"
  },
  {
    id: 15,
    title: "Seven Samurai",
    tagline: "The Mighty Warriors Who Became the Seven National Heroes of a Small Town",
    overview: "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. Set in 16th century Japan during a period of civil war, the film begins when a village of farmers learns that bandits plan to raid them after their harvest. In desperation, the village elder suggests hiring samurai for protection. A group of farmers is sent to find willing warriors who will work for nothing but food. After several rejections, they encounter Kambei, an aging but wise samurai who agrees to help. Impressed by Kambei's compassion and strategic mind, six other samurai of varying temperaments and skills join the cause, including the enthusiastic but untested Katsushiro and the brash, quick-tempered Kikuchiyo—who is later revealed to be a farmer's son posing as a samurai. Upon reaching the village, the samurai find the farmers hostile and fearful, harboring resentment toward the warrior class from past experiences. The samurai begin training the villagers in combat techniques while fortifying the village against attack. As they prepare, conflicts arise between the classes, particularly when Katsushiro falls in love with a farmer's daughter, and when Kikuchiyo reveals the farmers have previously killed samurai and taken their belongings. During their preparations, the samurai discover forty-two bandits will attack—nearly overwhelming odds despite their strategic advantages. When the bandits finally attack, the resulting series of battles tests the courage and skill of both the samurai and villagers, leading to victory but at a tremendous cost. Akira Kurosawa's masterpiece explores themes of honor, social class, sacrifice, and community through spectacular battle sequences and intimate character moments, establishing storytelling conventions that would influence countless films across many .",
    releaseDate: "1954-04-26",
    posterPath: "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
    backdropPath: "/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg",
    runtime: 207,
    budget: 500000,
    revenue: 2800000,
    rating: 8.6,
    voteCount: 3176,
    director: "Akira Kurosawa",
    cast: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima", "Isao Kimura"],
    language: "Japanese"
  },
  {
    id: 16,
    title: "City of God",
    tagline: "If you run you're dead... if you stay, you're dead again. Period.",
    overview: "Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro's most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all seen by the point of view of the narrator, Buscapé. Through the eyes of aspiring photographer Buscapé (Rocket), the film traces the evolution of the Cidade de Deus (City of God) from a 1960s housing project on the outskirts of Rio de Janeiro into a violent, drug-controlled favela by the 1980s. Born in the favela, Buscapé grows up witnessing the transformation of his neighborhood under the influence of various criminal figures, particularly Li'l Zé (formerly Li'l Dice), who transitions from an ambitious child thief to a ruthless drug lord. As a child in the 1960s, Li'l Dice participates in a motel robbery with the 'Tender Trio,' which includes Buscapé's brother, Marreco. During this robbery, Li'l Dice reveals his sadistic nature by unexpectedly murdering the motel's occupants, an event that shapes his future path. By the 1970s, Li'l Dice has become Li'l Zé and systematically eliminates competition to take control of the drug trade in City of God, while Buscapé pursues his passion for photography while trying to avoid being drawn into gang life. The narrative explores several interconnected stories: Knockout Ned, a peaceful bus driver who becomes a vengeful gang leader after Li'l Zé assaults his girlfriend and kills his family; Bené, Li'l Zé's more reasonable childhood friend and partner who dreams of leaving the criminal life; and the Runts, a group of child criminals whose brutality suggests the cycle of violence will continue. Directed by Fernando Meirelles and Kátia Lund, the film combines documentary-style realism with kinetic visuals to create an unflinching portrait of systemic poverty, institutional neglect, and how violence begets more violence. Based on a true story, City of God received international acclaim for its authentic performances (many by non-professional actors from Rio's favelas), innovative cinematography, and its unforgettable depiction of life in one of Brazil's most notorious neighborhoods.",
    releaseDate: "2002-05-18",
    posterPath: "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    backdropPath: "/1DNjMHcjLG8UX6NLMxGS6VMQNTF.jpg",
    runtime: 130,
    budget: 3300000,
    revenue: 30600000,
    rating: 8.5,
    voteCount: 9340,
    director: "Fernando Meirelles",
    cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen", "Douglas Silva"],
    language: "Portuguese"
  },
  {
    id: 17,
    title: "Life Is Beautiful",
    tagline: "An unforgettable fable that proves love, family and imagination conquer all.",
    overview: "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game. In 1939 Tuscany, Guido Orefice, a young Jewish man full of charm and playful creativity, arrives in the city to work as a waiter in his uncle's restaurant. Through a series of colorful coincidences, he meets and falls in love with a schoolteacher named Dora, despite her engagement to a fascist official. Using elaborate schemes and his natural gift for comedy, Guido pursues Dora, eventually winning her heart. They marry and have a son, Joshua. Their idyllic life is shattered in 1944 when Guido and Joshua are separated from Dora and transported to a Nazi concentration camp. Determined to protect his son from the horrors around them, Guido convinces Joshua that their imprisonment is actually an elaborate game in which participants must follow strict rules—avoiding guards, staying hidden, and performing difficult tasks—to earn points. The grand prize, Guido tells his son, is a real military tank. Through this imaginative fiction, Guido shields Joshua from the devastating reality of their situation, maintaining the charade even during moments of extreme danger and personal suffering. Meanwhile, Dora, though not Jewish, voluntarily boards the train taking her family away, ultimately being sent to the women's side of the same camp. As conditions worsen and prisoners begin disappearing, Guido maintains his son's innocence through increasingly difficult circumstances, never letting his own fear show. In the chaos of the camp's liberation by American troops, Guido instructs Joshua to hide until morning, knowing a final sweep by Nazi soldiers is imminent. While searching for his son one last time, Guido is discovered and executed—but not before maintaining the pretense of the game for Joshua's benefit. The next morning, Joshua emerges from hiding as American tanks arrive, believing he has won the grand prize. He is reunited with his mother, while carrying the precious gift of childhood innocence his father sacrificed everything to preserve. Roberto Benigni's masterpiece uniquely balances comedy with tragedy, showing how imagination and parental love can create beauty in even the darkest circumstances.",
    releaseDate: "1997-12-20",
    posterPath: "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
    backdropPath: "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
    runtime: 116,
    budget: 20000000,
    revenue: 230700000,
    rating: 8.5,
    voteCount: 11615,
    director: "Roberto Benigni",
    cast: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini", "Giustino Durano"],
    language: "Italian"
  },
  {
    id: 18,
    title: "Gladiator",
    tagline: "A Hero Will Rise.",
    overview: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders and becomes a gladiator. General Maximus Decimus Meridius leads the Roman armies to victory against Germanic tribes, earning the respect of the elderly Emperor Marcus Aurelius. Impressed by Maximus's loyalty and integrity, Marcus reveals his intention to name Maximus as his successor instead of his own son, Commodus, hoping to restore the Roman Republic. Before this plan can be enacted, Commodus murders his father, declares himself emperor, and orders the execution of Maximus and his family. Maximus escapes his executioners but arrives home too late to save his wife and son, finding them cruelly murdered and his farm burned. Grief-stricken and severely wounded, Maximus collapses and is captured by slave traders. Purchased by Proximo, a former gladiator, Maximus is forced to fight in provincial gladiatorial games. Initially reluctant, Maximus's exceptional combat skills and strategic mind make him a formidable gladiator, eventually earning him the nickname 'Spaniard.' When Emperor Commodus reinstates the gladiatorial games in Rome to gain public favor, Maximus sees an opportunity for revenge. In the Colosseum, Maximus leads his fellow gladiators to an unexpected victory in a reenactment of the Battle of Carthage, then reveals his true identity to Commodus, vowing to have vengeance. Maximus discovers allies in Rome, including Commodus's sister Lucilla (once Maximus's lover) and Senator Gracchus, who support his plan to overthrow the emperor and restore the Republic. After surviving multiple assassination attempts, Maximus is forced into a rigged final battle with Commodus in the arena. Despite being secretly weakened by a stab wound before the battle, Maximus manages to defeat and kill Commodus. With his dying breaths, Maximus honors Marcus Aurelius's wishes by freeing his fellow gladiators and reinstating Senator Gracchus, ensuring the beginning of reforms that could restore the Roman Republic. As he dies, Maximus has visions of being reunited with his wife and son in the afterlife. Ridley Scott's epic combines spectacular action sequences with a compelling personal story of revenge and political intrigue, exploring themes of honor, freedom, and the corruption of power.",
    releaseDate: "2000-05-01",
    posterPath: "/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
    backdropPath: "/fayJD9HC5NB0t8eQNs4tYDduvRT.jpg",
    runtime: 155,
    budget: 103000000,
    revenue: 460583960,
    rating: 8.2,
    voteCount: 15612,
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
    language: "English"
  },
  {
    id: 19,
    title: "The Green Mile",
    tagline: "Walk a mile you'll never forget.",
    overview: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution. Set in 1935 at Cold Mountain Penitentiary's death row—nicknamed 'The Green Mile' for its faded lime-colored floor—the film follows head guard Paul Edgecomb as he encounters John Coffey, a massive but childlike black man sentenced to death for allegedly raping and murdering two young white girls. Despite Coffey's fearsome size, Paul notices his gentle nature and quiet fear of the dark. The Green Mile's relative peace is disrupted by the arrival of Percy Wetmore, a sadistic guard with political connections, and wild-tempered prisoner William 'Wild Bill' Wharton, who creates chaos at every opportunity. Paul's life changes dramatically when he discovers Coffey's extraordinary supernatural abilities. When Coffey heals Paul's painful urinary infection simply by touching him, Paul begins to doubt Coffey's guilt. This doubt strengthens after Coffey miraculously revives a dead mouse and heals the warden's wife, Melinda, of her brain tumor—a healing that causes Coffey great personal suffering as he absorbs her illness before expelling it. Through these miracles and Coffey's emotional reactions to them, Paul comes to believe that rather than killing the girls, Coffey had actually been trying to heal them after finding them already murdered. Meanwhile, Percy's deliberate cruelty during an execution results in a prisoner's agonizing death, leading Coffey to punish Percy by transferring the evil of Melinda's tumor into him, which Percy then uses to shoot Wild Bill—who Coffey reveals was the girls' true murderer. As Coffey's execution approaches, Paul offers him a chance to escape, but Coffey refuses, explaining that he's tired of the pain he feels from the world's cruelty. With a heavy heart, Paul performs his duty and executes Coffey, but not before receiving a parting gift—a fragment of Coffey's power that grants Paul unnaturally long life, forcing him to outlive everyone he loves. Decades later, an elderly Paul reflects on the moral implications of executing a miraculous being who had done nothing but good in the world. Frank Darabont's adaptation of Stephen King's serial novel explores themes of compassion, racial injustice, the supernatural, and the moral complexities of capital punishment through powerful performances and magical realism.",
    releaseDate: "1999-12-10",
    posterPath: "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    backdropPath: "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
    runtime: 189,
    budget: 60000000,
    revenue: 286801374,
    rating: 8.5,
    voteCount: 14999,
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse", "Bonnie Hunt"],
    language: "English"
  },
  {
    id: 20,
    title: "The Departed",
    tagline: "Cops or Criminals. When you're facing a loaded gun what's the difference?",
    overview: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done the same. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them. Based on the Hong Kong film 'Infernal Affairs,' Martin Scorsese's crime thriller follows two moles playing a deadly game of deception: Billy Costigan, a police officer who goes undercover in the Irish mob, and Colin Sullivan, a criminal who infiltrates the Boston police department. Both men work for leaders who are locked in a violent struggle for control of Boston's criminal underworld—police Captain Queenan and mob boss Frank Costello. Billy, whose family has ties to organized crime, is recruited by Queenan and Sergeant Dignam to use his troubled background as cover for infiltrating Costello's crew. Meanwhile, Colin, who has been groomed by Costello since childhood, graduates from the police academy and is assigned to the Special Investigations Unit, perfectly positioned to keep Costello informed about police activity. As both men strengthen their positions within their respective organizations, they each become aware that a mole exists, leading to an increasingly tense cat-and-mouse game as they race to uncover each other's identity before being exposed themselves. The situation grows more complex when both become involved with the same woman, police psychiatrist Madolyn, who is unaware of either man's true role. The film builds to a violent climax as identities are revealed, loyalties are tested, and few emerge unscathed from the web of betrayal and murder that entangles them all. Scorsese's direction combines gritty violence with psychological tension, examining how the blurred lines between criminality and law enforcement corrupt even those with the best intentions. Featuring stellar performances from its ensemble cast, the film explores themes of identity, loyalty, and the psychological toll of living a double life where trust is impossible and danger is constant.",
    releaseDate: "2006-10-05",
    posterPath: "/nT97ifVT2J1yMQmeq2K9RGjXVCg.jpg",
    backdropPath: "/8Od5zV7Q7zNOX0y9tyNgpTmoiGA.jpg",
    runtime: 151,
    budget: 90000000,
    revenue: 291465034,
    rating: 8.2,
    voteCount: 12958,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
    language: "English"
  },
  {
    id: 21,
    title: "Dune: Part Two",
    tagline: "Long live the fighters.",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee. Continuing the adaptation of Frank Herbert's science fiction masterpiece, the film begins with Paul and his mother Lady Jessica finding refuge with the Fremen, the native people of the desert planet Arrakis. Following the brutal annihilation of House Atreides orchestrated by the Harkonnens and Emperor Shaddam IV, Paul begins his transformation from the heir of a noble house to a messianic figure among the Fremen. Under the tutelage of Stilgar and inspired by his deepening relationship with the fierce Fremen warrior Chani, Paul adopts Fremen ways and takes the name Muad'Dib. As he masters desert survival and the riding of the massive sandworms, his prescient visions grow stronger, showing him a future where fanatical Fremen armies wage a devastating holy war across the universe in his name. Meanwhile, the calculating Baron Harkonnen installs his nephew Feyd-Rautha as his new heir after the failure of his brutish nephew Rabban to crush the Fremen resistance. On the imperial capital, the Emperor grows increasingly concerned about Paul's rising influence and conspires with the Bene Gesserit sisterhood, who have their own plans for their centuries-long genetic breeding program that produced Paul. As Jessica embraces her role as a Reverend Mother and deepens the Fremen's religious fanaticism around her son, Paul struggles against the terrible purpose he sees in his visions. Leading increasingly effective attacks against the Harkonnen spice operations, Paul builds his legend while privately resisting the bloody path he foresees. After the Emperor arrives on Arrakis with a massive force to end the rebellion, Paul must make his final choice—whether to fully embrace his destiny as the prophesied Kwisatz Haderach and lead the Fremen to victory, knowing it may unleash unstoppable religious violence across the stars. Denis Villeneuve's visually stunning epic continues the complex political, religious, and ecological themes of Herbert's novel while exploring the dangers of messianic figures and the manipulative power of myth-making, all set against the backdrop of a richly detailed far-future universe.",
    releaseDate: "2024-02-28",
    posterPath: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdropPath: "/e3SfKu4cUQKcg1inGYe26hWZDQb.jpg",
    runtime: 166,
    budget: 190000000,
    revenue: 711828700,
    rating: 8.4,
    voteCount: 3529,
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    language: "English"
  },
  {
    id: 22,
    title: "Oppenheimer",
    tagline: "The world forever changes.",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II. Christopher Nolan's biographical thriller follows the brilliant theoretical physicist from his university years through his leadership of the Manhattan Project and into the complex moral aftermath of the atomic age he helped create. The non-linear narrative alternates between color sequences of Oppenheimer's rise and achievement, and black-and-white scenes depicting his 1954 security hearing where his loyalty to the United States was questioned. As a professor at Berkeley in the 1930s, Oppenheimer distinguishes himself in quantum physics while becoming increasingly involved in left-wing politics as fascism rises in Europe. After Germany begins pursuing nuclear weapons research, Oppenheimer is recruited by Lt. Gen. Leslie Groves to lead the top-secret Manhattan Project at Los Alamos, New Mexico. Assembling the greatest scientific minds in the country, Oppenheimer navigates the immense technical challenges of building the world's first atomic weapon while managing the egos, security concerns, and mounting pressure from military leaders eager for results. The film portrays Oppenheimer's complex personal life, including his marriage to biologist Katherine Puening and his affair with former Communist Party member Jean Tatlock, whose suicide deeply affects him. As the Trinity test approaches in July 1945, Oppenheimer grapples with the enormous ethical implications of his work, famously recalling the Bhagavad Gita quote 'Now I am become Death, the destroyer of worlds' upon the bomb's successful detonation. Following the bombings of Hiroshima and Nagasaki and the end of World War II, Oppenheimer becomes the public face of atomic science and advocates for international control of nuclear weapons, putting him at odds with political and military leaders pursuing hydrogen bomb development during the early Cold War. This conflict culminates in the Atomic Energy Commission hearings where Oppenheimer's security clearance is revoked after testimony from his former colleague and rival Edward Teller. Nolan's film explores how Oppenheimer's legacy embodies the moral ambiguity of scientific progress—celebrated for helping end World War II while bearing responsibility for creating weapons of unprecedented destructive power that forever changed global politics and humanity's relationship with technology.",
    releaseDate: "2023-07-19",
    posterPath: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropPath: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    runtime: 181,
    budget: 100000000,
    revenue: 976000000,
    rating: 8.1,
    voteCount: 6721,
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    language: "English"
  },
  {
    id: 23,
    title: "The Prestige",
    tagline: "Are you watching closely?",
    overview: "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences. Set in London at the turn of the 20th century, the film follows Robert Angier and Alfred Borden, two ambitious magicians who begin as friendly colleagues working for a mature illusionist. Their relationship shatters when Angier's wife drowns during a water tank trick gone wrong, and Angier blames Borden for tying a more complicated knot than she was prepared for. This tragedy initiates an escalating competition between the men that consumes their lives. Angier performs as 'The Great Danton,' emphasizing showmanship and presentation, while Borden, under the name 'The Professor,' focuses on technical ingenuity at the expense of theatrical flair. Their rivalry intensifies when Borden debuts an astonishing illusion called 'The Transported Man,' in which he appears to teleport instantly between two cabinets on opposite sides of the stage. Obsessed with discovering Borden's method, Angier sends his assistant Olivia to spy on his rival, but she ultimately switches her allegiance to Borden. Angier's determination to outdo Borden leads him to seek help from inventor Nikola Tesla, who creates a machine with unexpected and disturbing capabilities that allows Angier to perform his own version of the illusion—'The Real Transported Man.' Meanwhile, the narrative reveals that Borden has his own dark secret enabling his trick, one that has severe consequences for his personal life, including his wife Sarah and daughter Jess. The men's obsession ultimately leads to sabotage, frame-ups for murder, and shocking sacrifices in pursuit of the perfect illusion. Through an intricately structured narrative that mirrors the three-part structure of a magic trick—the pledge, the turn, and the prestige—Christopher Nolan examines themes of obsession, duality, sacrifice, and the price of devotion to one's craft. Like the tricks it depicts, the film conceals its secrets in plain sight, rewarding attentive viewers with a deeper understanding upon repeated viewings.",
    releaseDate: "2006-10-19",
    posterPath: "/5MlvT4DZIdkpb7A9t375HVoiJ1v.jpg",
    backdropPath: "/nboT8ZbMxnRTAK29WO7S6GXj3Lj.jpg",
    runtime: 130,
    budget: 40000000,
    revenue: 109676311,
    rating: 8.2,
    voteCount: 13978,
    director: "Christopher Nolan",
    cast: ["Hugh Jackman", "Christian Bale", "Michael Caine", "Scarlett Johansson"],
    language: "English"
  },
  {
    id: 24,
    title: "The Lion King",
    tagline: "Life's greatest adventure is finding your place in the Circle of Life.",
    overview: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be? Disney's animated masterpiece follows Simba, the son of King Mufasa, who rules the Pride Lands with wisdom and compassion. Simba idolizes his father and eagerly anticipates one day becoming king himself, a prospect that deeply troubles Mufasa's jealous brother, Scar. After orchestrating Mufasa's death in a wildebeest stampede, Scar convinces the traumatized young Simba that he is responsible for his father's death and urges him to flee the kingdom. Devastated and believing himself guilty, Simba escapes into exile where he is found by the carefree duo Timon, a meerkat, and Pumbaa, a warthog. They teach Simba their problem-free philosophy of 'Hakuna Matata' (no worries), and he grows into adulthood having suppressed his past and royal identity. Years later, a chance encounter with his childhood friend Nala forces Simba to confront his past when she reveals that the Pride Lands have deteriorated under Scar's tyrannical rule. The wise mandrill Rafiki, who serves as a spiritual guide, helps Simba connect with his father's spirit, who encourages him from the stars to remember who he is and take his rightful place as king. With renewed purpose, Simba returns to challenge Scar, whose poor leadership has led to famine and desolation. In the ensuing battle, the truth about Mufasa's death is revealed, and Simba defeats Scar, restoring balance to the Pride Lands. The film's stunning animation, memorable songs by Elton John and Tim Rice, and powerful storytelling create a timeless tale inspired by Shakespeare's Hamlet. Through its depiction of the 'Circle of Life,' the film explores themes of identity, responsibility, coming of age, and the interconnectedness of all living things.",
    releaseDate: "1994-06-23",
    posterPath: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    backdropPath: "/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
    runtime: 88,
    budget: 45000000,
    revenue: 968511805,
    rating: 8.3,
    voteCount: 15473,
    director: "Roger Allers",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Moira Kelly"],
    language: "English"
  },
  {
    id: 25,
    title: "Casablanca",
    tagline: "They had a date with fate in Casablanca!",
    overview: "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications. Set against the backdrop of World War II, the film centers on Rick Blaine, an embittered American exile who runs a popular nightclub in the Vichy-controlled Moroccan city. Having left the United States for unclear reasons, Rick maintains a carefully cultivated image of neutrality and self-interest, famously declaring, 'I stick my neck out for nobody.' His cynical worldview is challenged when Ilsa Lund, the woman who broke his heart in Paris just before the German occupation, unexpectedly walks into his club with her husband, Victor Laszlo, a renowned Czech Resistance leader sought by the Nazis. Ilsa and Victor are trying to obtain letters of transit that will allow them to escape to America, where Victor can continue his vital work against fascism. These valuable documents, which cannot be questioned or rescinded, happened to fall into Rick's possession when a petty criminal was killed in his club after attempting to sell them. As the story unfolds, we learn that Rick and Ilsa had fallen deeply in love in Paris, planning to flee together as the Germans invaded. When she failed to show up at the train station, leaving only a brief note, Rick was heartbroken and fled alone. In Casablanca, Ilsa reveals that she had discovered Victor, whom she had married before meeting Rick and believed dead in a concentration camp, was actually alive and needed her care. Now, with Nazi Major Strasser pressuring the corrupt French Captain Renault to prevent Laszlo's escape, Rick must decide whether to help the couple use the letters of transit, potentially sacrificing his own chance to be with the woman he still loves. The film's emotional climax at the airport presents Rick's ultimate choice between personal happiness and the greater good, delivered through some of cinema's most memorable dialogue. Michael Curtiz's timeless classic combines romance, intrigue, and moral awakening amidst the global conflict between democracy and fascism, creating a film that transcends its wartime propaganda origins to become one of cinema's most beloved classics.",
    releaseDate: "1942-11-26",
    posterPath: "/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    backdropPath: "/wOfzdzC0QZFxjUKcmhJsUVpzkrJ.jpg",
    runtime: 102,
    budget: 950000,
    revenue: 3700000,
    rating: 8.2,
    voteCount: 5112,
    director: "Michael Curtiz",
    cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid", "Claude Rains"],
    language: "English"
  },
];

export function getAllMovies(): Movie[] {
  return movies;
}

export function getMovieById(id: number): Movie | undefined {
  return movies.find(movie => movie.id === id);
}

export function getPaginatedMovies(page: number = 1, pageSize: number = 50): {
  movies: Movie[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
} {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedMovies = movies.slice(startIndex, endIndex);

  return {
    movies: paginatedMovies,
    totalCount: movies.length,
    totalPages: Math.ceil(movies.length / pageSize),
    currentPage: page,
    pageSize
  };
}
 