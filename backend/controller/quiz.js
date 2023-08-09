

exports.getAllProducts = async (req,res, next) =>{
   const apiFeatures = new ApiFeatures(quiz.find(), req.query)
//    hr function mai query return krrahe hain 
   const quizes = await apiFeatures.query;

    res.status(200).json({
        Status: true,
        quizes,
    });
}