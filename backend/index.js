// // index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');
// const cors = require('cors');

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((error) => console.log(error));

// // Use authentication routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import authentication routes (if needed)
const complaintRoutes = require('./routes/complaint'); // Import complaint routes
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

// Use authentication routes (if needed)
app.use('/api/auth', authRoutes);

// Use complaint routes
app.use('/api/complaint', complaintRoutes); // Register complaint routes

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
