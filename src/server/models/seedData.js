var seedData = {

    books: [{
        title: "NodeJS in Action",
        author: "Mike Cantelon, Marc Harter, TJ. Holowaychuk, Nathan Rajlich",
        genre: "Computing",
        publisher: "Manning Publishing Co.",
        publishedDate: new Date("November 28, 2013"),
        price: 35.0,
        imageUrl: "nodejsInAction.jpeg",
        summary: "Node.js in Action is an example-driven tutorial that starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications. You'll start by learning how to set up your Node development environment, including loading the community-created extensions. Next, you'll run several simple demonstration programs where you'll learn the basics of a few common types of Node applications. Then you'll dive into asynchronous programming, a model Node leverages to lessen application bottlenecks.",
        reviews: [{
            reviewer: "Shane Watson",
            rating: 3,
            reviewDate: new Date("March 8, 2014"),
            comments: "Book has great content and the authors know what they are talking about but some areas are a bit too technical for a beginner to digest."
        }, {
            reviewer: "John Darson",
            rating: 2,
            reviewDate: new Date("December 8, 2015"),
            comments: "There were a lot of mistakes and outdated information but overall it does cover NodeJS pretty well."
        }, {
            reviewer: "Hillary Johnson",
            rating: 4,
            reviewDate: new Date("July 13, 2014"),
            comments: "Excellent book that covers NodeJS thoroughly, only con is that its covered a lot of topic but not in depth."
        }]
    }, {
        title: "C# in Depth, 3rd Edition",
        author: "Jon Skeet",
        genre: "Computing",
        publisher: "Manning Publishing Co.",
        publishedDate: new Date("September 30, 2013"),
        price: 45.0,
        imageUrl: "csharpInDepth.jpeg",
        summary: "C# in Depth, Third Edition updates the best-selling second edition to cover the new features of C# 5, including the challenges of writing maintainable asynchronous code. It preserves the uniquely insightful look into the tricky areas and dusty corners of C# that only expert Jon Skeet can provide.",

        reviews: [{
            reviewer: "Jenny Simpson",
            rating: 4,
            reviewDate: new Date("July 13, 2014"),
            comments: "The legendary Jon Skeet, digs into the C# language like no other, if you want to know the ins and outs of this great language then you need to pick up this book. I've only read through half of the book and my mind was already blown."
        }, {
            reviewer: "Karl Madison",
            rating: 4,
            reviewDate: new Date("Jan 25, 2015"),
            comments: "I thought I knew C# pretty well after working with it for over 5 years in the field but I still have a way to go after read this book."
        }, {
            reviewer: "Roger Mills",
            rating: 2,
            reviewDate: new Date("Jun 25, 2014"),
            comments: "Not a good book for beginners and the examples aren't complete just snippets."
        }]
    }, {
        title: "HTTP Succinctly",
        author: "Scott Allen",
        genre: "Computing",
        publisher: "Syncfusion Inc",
        publishedDate: new Date("May 1, 2012"),
        price: 0.0,
        imageUrl: "httpsuccintly.png",
        summary: "Legendary software extraodinaire Scott Allen, dissect the HTTP protocol in a simple and easy to digest manner to allow novice developers to get a better understanding of how HTTP works on the web to deliver fascinating web sites to our browsers.",
        reviews: [{
            reviewer: "Jane Zhang",
            rating: 5,
            reviewDate: new Date("Feb 8, 2013"),
            comments: "The best introduction to the HTTP protocol anyone could ask for, you can't beat the content or price. What more could you want from a brillant author such as Scott Allen?"
        }, {
            reviewer: "John Darson",
            rating: 3,
            reviewDate: new Date("December 8, 2015"),
            comments: "The is a great book for beginner but definitely not for seasoned developers who have worked with the web for a couple of years."
        }, {
            reviewer: "Hillary Johnson",
            rating: 4,
            reviewDate: new Date("Apr 23, 2014"),
            comments: "Great refresher definitely learn a thing or two from this basic book on HTTP."
        }]
    }, {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        genre: "Computing",
        publisher: "Prentice Hall",
        publishedDate: new Date("Feb 1, 2008"),
        price: 55.0,
        imageUrl: "cleancode.jpeg",
        summary: "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.",
        reviews: [{
            reviewer: "Ken Wu",
            rating: 4,
            reviewDate: new Date("Oct 23, 2014"),
            comments: "If you're dead serious about your craft as a software developer or engineer. Then you must read this book, unclde Bob sets things straight and tell it like it should be. You may not agree with everything he says in the book but he has been there an done the hard yards from the mainframe days to your latest cutting edge gadgets today. He cares about his craft and it shows in this book."
        }, {
            reviewer: "Cory Smith",
            rating: 5,
            reviewDate: new Date("Jan 06, 2013"),
            comments: "Want to write clean, maintainable code? This is the book, its great for brown bag sessions and individual reading, if you do what uncle Bob says, you will see progress. I can vouch for this having worked in many different coporates and startups."
        }]
    }, {
        title: "Opening the door of your heart",
        author: "Ajahn Brahm",
        genre: "Spiritual",
        publisher: "Hachette Australia",
        publishedDate: new Date("Aug 10, 2010"),
        price: 23.55,
        imageUrl: "openingthedoorofyourheart.jpg",
        summary: "Ajahn Brahm in his witty yet ingenious ways to deliver a heart felt book which is both easy to understand and practice. His sense of humor is second to none, one hopes he lives as long as he can to bring the world more joy and peace. This book is a collection of Ajahn Brahm's experience as a young monk in Thailand and his travels around the globe giving talks at buddhist centres around the world.",
        reviews: [{
            reviewer: "Matt Ilonis",
            rating: 4,
            reviewDate: new Date("Apr 23, 2012"),
            comments: "This book really helped me during my great depression, it gave me the courage to live on knowledge these painful events will pass one day. Thank you Ajahn Brahm for your dedication towards a more blissful world."

        }, {
            reviewer: "Jane Loden",
            rating: 4,
            reviewDate: new Date("Nov 30, 2011"),
            comments: "I had a great laugh at some of the stories and cried in others, Ajahn Brahm really knows how to incorporate the Buddha's teaching into simple stories."

        }, {
            reviewer: "Sarah Hanes",
            rating: 5,
            reviewDate: new Date("Sep 07, 2014"),
            comments: "Definitely worth the price, short book but has a lot of truth and profound ways to live out your life."
        }]
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and Dave Thomas",
        genre: "Programming",
        publisher: "Addison Wesley",
        publishedDate: new Date("Oct 10, 1999"),
        price: 22.50,
        imageUrl: "pragmaticprogrammer.jpg",
        summary: "Programmers are craftspeople trained to use a certain set of tools (editors, object managers, version trackers) to generate a certain kind of product (programs) that will operate in some environment (operating systems on hardware assemblies). Like any other craft, computer programming has spawned a body of wisdom, most of which isn't taught at universities or in certification classes. Most programmers arrive at the so-called tricks of the trade over time, through independent experimentation. In The Pragmatic Programmer, Andrew Hunt and David Thomas codify many of the truths they've discovered during their respective careers as designers of software and writers of code.",
        reviews: [{
            reviewer: "David Crabbe",
            rating: 4,
            reviewDate: new Date("May 24, 2012"),
            comments: "A well written book that is worth reading for anyone serious about their software cratmanship. The concepts and advice presented will prove useful in any career."

        }, {
            reviewer: "Matt Lorenski",
            rating: 3,
            reviewDate: new Date("Feb 1, 2011"),
            comments: "I like the conciseness of the book and the materials presented but was a bit diasppointed with the brevity of it all."

        }, {
            reviewer: "Anonymous",
            rating: 1,
            reviewDate: new Date("Nov 09, 2014"),
            comments: "There are better books out there. Waste of money!"
        }]
    },
    {
        title: "Don't Make Me Think Revisited",
        author: "Steve Krug",
        genre: "Design",
        publisher: "New Riders",
        publishedDate: new Date("Jan 10, 2014"),
        price: 22.50,
        imageUrl: "dontmakemethink.jpg",
        summary: "Steve Krug (pronounced 'kroog') is best known as the author of Don't Make Me Think: A Common Sense Approach to Web Usability, now in its second edition with over 350,000 copies in print. Ten years later, he finally gathered enough energy to write another one: the usability testing handbook Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems. The books were based on the 20+ years he's spent as a usability consultant for a wide variety of clients like Apple, Bloomberg.com, Lexus.com, NPR, the International Monetary Fund, and many others.",
        reviews: [{
            reviewer: "Melanie Hanson",
            rating: 4,
            reviewDate: new Date("May 24, 2015"),
            comments: "Designers if you can buy any book, this one is a must have. It not only clarify and refined the original book but expand onto new terrortories in design."

        }, {
            reviewer: "Joe Loft",
            rating: 5,
            reviewDate: new Date("May 1, 2014"),
            comments: "A masterpiece from Steve once again, he knows what he is talking about."

        }, {
            reviewer: "Anonymous",
            rating: 2,
            reviewDate: new Date("Nov 09, 2014"),
            comments: "The original was a lot better, this new version didn't warrant the hype."
        }]
    },
    {
        title: "Star Wars Trilogy",
        author: "George Lucas, Donald F. Glut, James Kahn",
        genre: "Science Fiction",
        publisher: "Del Rey",
        publishedDate: new Date("March 2, 1976"),
        price: 8.50,
        imageUrl: "starwars.jpg",
        summary: "Luke Skywalker dreamed of adventures out among the stars and alien worlds. But when he intercepted a message from a beautiful captive princess, he got more than he had bargained for—and that was how the adventure of his life began.",
        reviews: [

            {
                reviewer: "Jeff Wiley",
                rating: 4,
                reviewDate: new Date("November 4, 2005"),
                comments: "I've been a Star Wars fan my entire life, and have read several of the Expanded Universe books. I'd never wanted to read the novelization of the original trilogy, however, until recently. On a lark, more than anything, I decided to pick it up."

            },
            {
                reviewer: "A 10-year old reader",
                rating: 5,
                reviewDate: new Date("March 13, 2001"),
                comments: "I love the Star Wars Trilogy and I think anyone else who reads it will love it too. The characters are described so well that I can visulise them and everything about them on my mind's eye. My favorite book out of the three is Return of the Jedi, but Star Wars, (A New Hope,) and The Empire Strikes Back make it very hard to choose. I also love the movies. If you like the book, it is a pretty good bet you'll like the movie too."
            }
        ]
    },
    {
        title: "The Lord of the Rings: 50th Anniversary",
        author: "J.R.R Tokien",
        genre: "Fantasy",
        publisher: "Harper Collins Publishers",
        publishedDate: new Date("January 8, 2004"),
        price: 35.50,
        imageUrl: "lordoftherings.jpg",
        summary: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.",
        reviews: [

            {
                reviewer: "Austin Larry",
                rating: 5,
                reviewDate: new Date("October 26, 2004"),
                comments: "It is on very nice, very clean, very white paper with a large font. The books are substantial even bordering on heavy. They have beautiful red cloth covers with the J.R.R.T. symbol in gold. The dust jackets are beautiful with a different Alan Lee print on the cover, back, and spine."

            },
            {
                reviewer: "mcewin",
                rating: 2,
                reviewDate: new Date("February 9, 2011"),
                comments: "This is *not* a leather binding: it's a very ordinary hardcover edition with paper-thin faux leather glued over paper boards. The bookmark ribbon breaks the binding. Signatures glued rather than sewn together, not held together by the 'leather,' separated from paper spine. Poor production generally: end papers badly centered, more than a little random glue and rubber cement on the covers that really mars the appearance. Mine is the second printing, I do not see the poor type-setting complained of by other reviewers."}
        ]
    },
    {
        title: "The Art of War",
        author: "Sun Tzu",
        genre: "Military Strategies",
        publisher: "",
        publishedDate: new Date("October 1, 2015"),
        price: 17.96,
        imageUrl: "artofwar.jpg",
        summary: "The Art of War enjoys enduring popularity among readers. It is a classic study of strategy and how to shape your tactics to cope with an ever-evolving situation in some cases how to fight without actually committing yourself to battle.",
        reviews: [
            {
                reviewer: "Joel",
                rating: 5,
                reviewDate: new Date("October 26, 2015"),
                comments: "A perfect book. Cant stop reading it when i get a chance, i always read it. The cover is nice material and the quality is high. Has pictures and a very great book."
            },
            {
                reviewer: "James",
                rating: 5,
                reviewDate: new Date("December 13, 2015"),
                comments: "I was pleasantly surprised, this book is beautiful. It came is a hard protective but also decorative box that the book can slide into and out. Great for displaying on a bookshelf or in a study. Font is largeish and crisp, easy to read."
            }
        ]
    }
]
};

module.exports = seedData;
