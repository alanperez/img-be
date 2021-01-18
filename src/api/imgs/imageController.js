
const Images = require ('./imageModel')

async function retrieveJoinedImages(req,res) {
    Images.getAll()
        .then((allImages) => {
            res.status(200).json(allImages);
        })
        .catch((err)=> {
            console.log(err)
            res.status(500).json({message: `${nawww}`})
        })
}

module.exports = { retrieveJoinedImages }