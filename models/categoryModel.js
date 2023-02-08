const mongoose=require('mongoose');

const categorySchema= new mongoose.Schema({
    name:{
        type:stringify,
        require:[true,'category is required'],
        minlength:[3,'category title should be more than 3 characters '],
        maxlength:[30,'category title should be more than 30 characters ']
    },
    slug:{
        type:string,
        lowercase:true
    },
    image:string,
}
,{timestamps:true}
);

const categoryModel =mongoose.model('Category',categorySchema);

module.exports=categoryModel;