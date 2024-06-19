const mongoose = require('mongoose');

const mongoURI = "mongodb://Bonapetite:650942bangladesh@ac-kdmiptu-shard-00-00.diad5t5.mongodb.net:27017,ac-kdmiptu-shard-00-01.diad5t5.mongodb.net:27017,ac-kdmiptu-shard-00-02.diad5t5.mongodb.net:27017/Bonapetit?ssl=true&replicaSet=atlas-pf99xx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');

        // Ensure the connection is fully established before fetching data
        mongoose.connection.once('open', async () => {
            console.log('MongoDB connection is open...');
            
            try {
                const fetched_data = mongoose.connection.db.collection("food_items");
                
                if (!fetched_data) {
                    console.error('Collection "food_items" does not exist.');
                    return;
                }

                const data = await fetched_data.find({}).toArray();
                if (data.length === 0) {
                    console.log('No data found in the "food_items" collection.');
                } else {
                    console.log('Fetched data:', data);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        });

    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;

// Ensure that the database connection is established and then fetch data
connectDB();
