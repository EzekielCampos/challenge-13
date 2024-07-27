





const verifyTagBody = (req, res, next)=>{

    // Checks whether query parameter exist
    if(req.body?.tag_name) next();
    // If the query is not there 
    else return res.status(400).json({ error: 'Invalid Data: tag_name is required' });

}

const verifyCategoryBody = (req, res, next)=>{

    // Checks whether query parameter exist
    if(req.body?.category_name) next();
    // If the query is not there 
    else return res.status(400).json({ error: 'Invalid Data: category_name is required' });

        

}


module.exports = {verifyTagBody, verifyCategoryBody}