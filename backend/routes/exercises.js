const router = require('express').Router();
let Exercise = require('../models/exercise.model');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null, './uploads/')
  },
  filename: function(req,file,cb) {
    cb(null,  file.originalname)
  }
});
const upload = multer({storage: storage});


router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(upload.single('file'), (req, res) => {
console.log(req.file);
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const mid = Number(req.body.mid);
  const date = Date.parse(req.body.date);
  const file = req.file.path;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    mid,
    date,
    file
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(upload.single('file'),(req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.mid = Number(req.body.mid);
      exercise.date = Date.parse(req.body.date);
      exercise.file = req.file.path;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;