const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  // ✅ Use environment port for deployment

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve HTML, CSS, JS from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
