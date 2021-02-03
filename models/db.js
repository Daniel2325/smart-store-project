const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://info-user:XLynvHKw6snQZWPh@cluster0.r16tc.mongodb.net/ecommerceOrders',{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },(err) =>{
    if(!err) {
        console.log('MongoDB connected');
    } else {
        console.log('error:'+err);
    }
});

require('./order.model');
