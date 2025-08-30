const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Content = require('./models/Content');
const connectDB = require('./config/db');

dotenv.config();

const seedContent = async () => {
    try {

        await connectDB();
        const articles = [
            {
                title: 'Introduction to SaaS',
                body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio, pariatur soluta tempore eaque veniam, nihil fugit dolor, possimus ab sit quas blanditiis suscipit eius quia accusamus nobis? Maiores, exercitationem?",
                type: 'free',
            },
            {
                title: 'My Project details',
                body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio, pariatur soluta tempore eaque veniam, nihil fugit dolor, possimus ab sit quas blanditiis suscipit eius quia accusamus nobis? Maiores, exercitationem?",
                type: 'free',
            },

            {
                title: 'How to become billionaire',
                body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio, pariatur soluta tempore eaque veniam, nihil fugit dolor, possimus ab sit quas blanditiis suscipit eius quia accusamus nobis? Maiores, exercitationem?",
                type: 'premium',
            },
            {
                title: 'This is the way of success',
                body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio, pariatur soluta tempore eaque veniam, nihil fugit dolor, possimus ab sit quas blanditiis suscipit eius quia accusamus nobis? Maiores, exercitationem?",
                type: 'premium',
            },
        ];
        await Content.insertMany(articles);
        console.log('Database seeded successfully!');
        process.exit();

    } catch (error) {
        console.error(`Error seeding database: ${error.message}`);
        process.exit(1);
    }
};
seedContent();