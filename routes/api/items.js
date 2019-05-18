const express = require('express');
const router = express.Router();

//router is mini application
// item Model 
const Item = require('../../model/Items');

//@route GET api/items------>@desc get All Items----->@access Public
router.get('/', (req,res)=>{
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route POST api/items------>@desc Create An item---->@access Public
router.post('/', (req,res)=>{
    const newItem= new Item({
    name: req.body.name
    });
    newItem.save().then(item =>res.json(item));
});
//@route DELETE api/items:id------>@desc Delete An item----->@access Public
router.delete('/:id', (req,res)=>{
Item.findById(req.params.id)
.then(item =>item.remove().then(()=>res.json({success:true})))
.catch(error =>res.sendStatus(404).json({seccess:false}))
});

module.exports = router;