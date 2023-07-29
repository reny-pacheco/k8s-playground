const technologies = require('../models/technologies');

const findById = (id) => {
  return technologies.find((tech) => tech.id.toString() === id);
};

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Code to execute after the delay
      console.log('Timeout completed');
      resolve();
    }, 2000);
  });
}

exports.getTechnology = async (req, res) => {
  try {
    // await delay();
    const { id } = req.params;
    const tech = findById(id);
    tech['version'] = process.env.API_VERSION || 'v0.0';

    if (!tech) {
      return res.status(404).json({ error: 'Id not found' });
    }

    return res.status(200).json(tech);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: 'Error while retrieving users' });
  }
};
