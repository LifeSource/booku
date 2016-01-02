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
            reviewer: "Jenny Simpson",
            rating: 4,
            reviewDate: new Date("Jan 25, 2015"),
            comments: "I thought I knew C# pretty well after working with it for over 5 years in the field but I still have a way to go after read this book."
        }, {
            reviewer: "Jenny Simpson",
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
    }]
};

module.exports = seedData;
