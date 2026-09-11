const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let sensorData = [
  { id: 1, name: 'Tank A', waterLevel: 78, status: 'Normal' },
  { id: 2, name: 'Tank B', waterLevel: 22, status: 'Low' },
  { id: 3, name: 'Tank C', waterLevel: 55, status: 'Normal' }
];

app.get('/api/sensors', (req, res) => {
  res.json(sensorData);
});

app.post('/api/sensors/update', (req, res) => {
  const { id, waterLevel } = req.body;
  const sensor = sensorData.find(s => s.id === id);
  if (!sensor) return res.status(404).json({ error: 'Sensor not found' });
  sensor.waterLevel = waterLevel;
  sensor.status = waterLevel < 25 ? 'Low' : 'Normal';
  res.json(sensor);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});