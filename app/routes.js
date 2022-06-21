const express = require('express')
const router = express.Router()


// Run this code when a form is submitted to 'check-answers'
router.post('/check-answers', function (req, res) {

  if (req.session.data['dob-year'] >= "1990"){
    // Send user to next page
    res.redirect('too-young');
  } else {
    // Send user to ineligible page
    res.redirect('check-answers');
  }
})









// Add your routes here - above the module.exports line

module.exports = router
