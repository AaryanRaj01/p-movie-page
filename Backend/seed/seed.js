import mongoose from 'mongoose';
import Movie from '../models/movie.model.js';
import dotenv from 'dotenv';

dotenv.config();

const movies = [
    {
        _id: "1",
        title: "The Shawshank Redemption",
        short_description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXqIWev_BuG5i4XcVFWBoj5sQoqJDwEvewg&s",
        long_description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
    },
    {
        _id: "2",
        title: "The Godfather",
        short_description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqfgHzr-uAKWRcyAC0bDmu8Ip8MI2KCi3og&s",
        long_description: "The Godfather Don Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WWII Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart"
    },
    {
        _id: "3",
        title: "The Dark Knight",
        short_description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCP_JAnzpH6aIubXTkKK8lCbbNZQrE416bA&s",
        long_description: "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as The Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to confront everything he believes and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes."
    },
    {
        _id: "4",
        title: "The Godfather Part ||",
        short_description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSjcnyxX2rDPqIW7gI2Vj9tXlir5_TAbFaQ&s",
        long_description: "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba."
    },
    {
        _id: "5",
        title: "Angry Men",
        short_description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpu24D0mT2W4NvRgdPTCDkfWiCwvFG8UTu9Q&s",
        long_description: "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room"
    },
    {
        _id: "6",
        title: "Schindler's List",
        short_description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesn-g2JsUUoyal9tQRpZbp1aadgtFLmAkpA&s",
        long_description: "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us."
    },
    {
        _id: "7",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        short_description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagMER5otFmc1rJgy1hG6PPg3oL69jLeThzQ&s",
        long_description: "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign."
    },
    {
        _id: "8",
        title: "The Good,the Bad and the Ugly",
        short_description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gWxAdrjCyXJ6jtWFQGRrJK98dxsY92gIbQ&s",
        long_description: "During the American Civil War, three men set off to find $200,000.00 in buried gold coins. Tuco and Blondie have known each other for some time now, having used the reward on Tuco's head as a way of earning money. They come across a dying man, Bill Carson, who tells them of a treasure in gold coins. By chance, he reveals the name of the cemetery and the name of the grave where the gold is buried. Now rivals, the two men have good reason to keep each other alive. The third man, Angel Eyes, hears of the gold stash from someone he's been hired to kill. All he knows is to look for someone named Bill Carson. The three ultimately meet in a showdown that takes place amid a major battle between Confederate and Union forces"
    },
    {
        _id: "9",
        title: "Forrest Gump",
        short_description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlwcxhyAGFOVIPiZfGVOO-LT2lYMwXqOtnA&s",
        long_description: "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.—aliw135"
    },
    {
        _id: "10",
        title: "The Lord of the Rings: The two Towers",
        short_description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQ3Bym_fkWstR9xMR8m6CAGW9UBPv0KQMtg&s",
        long_description: "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell."
    },
    {
        _id: "11",
        title: "Fight Club",
        short_description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtqI0U8BsEmryjtRS8-JjBbR3fEWo4fnLew&s",
        long_description: "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power."
    },
    {
        _id: "12",
        title: "Inception",
        short_description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the pro...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS783W0mqH4sjU1V7USmGybe8tg6KdAx0ExUQ&s",
        long_description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.—Warner Bros. Pictures"
    },
    {
        _id: "13",
        title: "The Matrix",
        short_description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPecsj3q-SswcJ13h-84FvZv3cduWXflYyQA&s",
        long_description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion."
    },
    {
        _id: "14",
        title: "Godfellas",
        short_description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8m22c0tfVIeUD7CmLzPjxqAxc6FySKhY1TQ&s",
        long_description: "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?"
    },
    {
        _id: "15",
        title: "Seven",
        short_description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bE69rTWsPAlT4I68ceFuehClRpRlIbpPHg&s",
        long_description: "A film about two homicide detectives' (Morgan Freeman and Brad Pitt) desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic John Doe (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer..."
    },
    {
        _id: "16",
        title: "Interstellar",
        short_description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SFLi7_0Jc6gwSjV42ZHECFtYIKOrGTGesQ&s",
        long_description: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.—"
    },
    {
        _id: "17",
        title: "Seven Samurai",
        short_description: "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYMEjJuqH35lgxKHHiCq-5WMLjMyMXiI2zw&s",
        long_description: "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village."
    },
    {
        _id: "18",
        title: "The Silence of the Lambs",
        short_description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIH1UYb6GcAyLTSDRuWZuIjLKnqRxi8b5mQ&s",
        long_description: ".B.I. trainee Clarice Starling (Jodie Foster) works hard to advance her career, while trying to hide or put behind her West Virginia roots, of which if some knew, would automatically classify her as being backward or white trash. After graduation, she aspires to work in the agency's Behavioral Science Unit under the leadership of Jack Crawford (Scott Glenn). While she is still a trainee, Crawford asks her to question Dr. Hannibal Lecter (Sir Anthony Hopkins), a psychiatrist imprisoned, thus far, for eight years in maximum security isolation for being a serial killer who cannibalized his victims....."
    },
    {
        _id: "19",
        title: "City of God",
        short_description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgrSRAYifLwXXk1TK6IpS9vCrIhldpWo5Hw&s",
        long_description: "Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970s: Li'l Zé has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Bené is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. he keeps getting swept up in the madness. All he wants to do is take pictures. 1980s: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God...."
    },
    {
        _id: "20",
        title: "Life is Beautiful",
        short_description: "An unforgettable fable that proves love, family and imagination conquer all",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vitaebella.jpg",
        long_description: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp."
    },
    
    // Add 19 more movies here
];

const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    await Movie.insertMany(movies);
    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDB().catch(err => console.error(err));
