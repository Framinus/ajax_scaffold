const express = require('express')
const bodyParser = require('body-parser');
const { getPetsAndSpecies, updatePetName } = require('./db/db.js')


const app = express()
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (req, res) => {
  const message = '';
  getPetsAndSpecies()
    .then((pets) => {
      res.render(
        'pets',
        { pets, message }
      )
    })
    .catch(console.error)
})

app.post('/', (req, res) => {
  const { petId, newName } = req.body;
  console.log('petId', petId);
  console.log('newName', newName);
  return updatePetName(petId, newName)
    .then((message) => {
      res.json({ message });
    })
    .catch((err) => {
      console.error(err);
    })
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
