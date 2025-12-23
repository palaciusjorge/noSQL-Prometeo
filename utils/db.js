const mongoose = require('mongoose');


const DB_URL = 'mongodb://localhost:27017/proyecto-tour-france';


const connect = async () => {
try {
await mongoose.connect(DB_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log('Connected to database');
} catch (error) {
console.log('Error connecting to database');
}
};


module.exports = { connect };