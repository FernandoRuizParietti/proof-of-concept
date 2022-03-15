const {Router} = require('express');

const router = Router();

router.get('/thumbnail',(req, res, next)=>{
    try {
        res.send('soy la ruta del get thumbnail')   
    } catch (error) {
        next(error)
    }
})

router.post('/video',(req,res,next) =>{
    try {
        res.send('soy la ruta del post video')   
    } catch (error) {
        next(error)
    }
})

router.post('/image',(req,res,next) =>{
    try {
        res.send('soy la ruta del post image')   
    } catch (error) {
        next(error)
    }
})

module.exports = router;