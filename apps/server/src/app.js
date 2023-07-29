const express = require('express');
const techRoutes = require('./routes/tech');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/api', techRoutes);

app.listen(PORT, () =>
  console.log(
    `\n🚀  Server listening on port ${PORT} \n--> Endpoint: http://localhost:${PORT}/api/tech/<id>`
  )
);
