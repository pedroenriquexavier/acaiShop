const express = require('express');
const Base64 = require('js-base64');
const router = express.Router();

router.get('/reviewOrder', (req, res) => {

    let str = Base64.decode(req.query.items);
    const items = JSON.parse(str);

    res.status(200).render('reviewOrder', {
        items
    });
});

router.get('/', (req, res) => {
    if (Object.keys(req.query).length === 0) {
        const item = {
            addOns: {
                fruits: [-1, -1, -1, -1, -1, -1],
                toppings: [-1, -1, -1, -1, -1, -1],
                drizzle: [-1, -1, -1, -1, -1, -1],
                powder: [-1, -1, -1, -1, -1, -1],
            }
        };
        res.status(200).render('selectAcai', {
            item
        });
    } else {
        let str = Base64.decode(req.query.item);
        const item = JSON.parse(str);
        console.log(item);
        res.status(200).render('selectAcai', {
            item
        });
    }
    
    
});

module.exports = router;