const mongoose=require('mongoose');

const brandSchema= new mongoose.Schema({
    name:{
        type:stringify,
        require:[true,'Brand is required'],
        unique:[true,'Brand must be unique'],
        minlength:[3,'Brand title should be more than 3 characters '],
        maxlength:[30,'Brand title should be more than 30 characters ']
    },
    slug:{
        type:string,
        lowercase:true
    },
    image:string,
}
,{timestamps:true}
);

const brandModel =mongoose.model('Brand',brandSchema);

module.exports=brandModel;