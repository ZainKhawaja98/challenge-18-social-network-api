const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  editThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts) // get all thoughts

router
  .route('/:userId')
  .post(addThought); //post one thought

router
  .route('/:userId/:thoughtId')
  .delete(removeThought) //delete thought

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById) //get single thought
  .put(editThought) //update thought

router
  .route('/:thoughtId/reactions')
  .post(addReaction) //post reaction

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction) //delete reaction

module.exports = router;