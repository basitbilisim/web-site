const express = require('express')
const router = express.Router()

router.get('/about',(req,res)=> {
    res.render('site/about')
})

router.get('/',(req,res)=> {
    res.render('site/index')
})

module.exports = router