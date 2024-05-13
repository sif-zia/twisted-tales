

const getLatestStories  = async (req, res) => {
    try{
        res.status(200).json({message:"got latest stories"})
    }
    catch(err){
        res.status(400).json({error: err})
    }
}

const getTrendingStories  = async(req, res)=> {
    try{
        res.status(200).json({message:"got trending stories"})
    }
    catch(err){
        res.status(400).json({error: err})
    }
}

const getGenres  = async(req, res) => {
    try{
        res.status(200).json({message:"got genres"})
    }
    catch(err){
        res.status(400).json({error: err})
    }
}

const getTopPicks  = async(req, res)=>{
    try{
        res.status(200).json({message:"got top picks"})
    }
    catch(err){
        res.status(400).json({error: err})
    }
}

const getWriterOfTheMonth  = async(req, res)=>{
    try{
        res.status(200).json({message:"got writer of the month"})
    }
    catch(err){
        res.status(400).json({error: err})
    }
}


module.exports = {getLatestStories, getTrendingStories, getGenres, getTopPicks, getWriterOfTheMonth};