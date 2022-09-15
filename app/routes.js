const express = require('express')
const router = express.Router()

// radio-button-redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


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
router.use('/node_modules', express.static('node_modules'))

module.exports = router
