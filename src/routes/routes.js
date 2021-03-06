const express = require('express')
const router = express.Router()
const userController = require("../controllers/user.js")
const companyController = require("../controllers/company.js")
const jobController = require('../controllers/job.js')
const passport = require('../auth/auth')

router.post('/job',passport.company, jobController.savejobs)
router.get('/jobs', jobController.getalljobs)
router.get('/job/:id', jobController.getjobs)
router.put('/job/:id',passport.company, jobController.updatejobs)
router.delete('/job/:id',passport.company, jobController.deletejobs)
router.get('/user/jobs',passport.company, companyController.companyList)
router.get('/user/jobs/:id', passport.company, companyController.applicantsList)

router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.post("job/apply",passport.auth, userController.apply)
router.get("/user/myapplies",passport.auth, userController.userDetail)

module.exports = router