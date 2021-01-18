
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

async function retrieveImageByID(req,res) {
    const { id } = req.params;
    try {
      const image = await Images.getBy(id);
      if (image) {
        res.status(200).json(image);
      } else {
        res
          .status(404)
          .json({ message: 'Problem with specified ID does not exist.' });
      }
    } catch (error) {
      res
        .status(404)
        .json({ message: `The reason you're getting an error: ${error}` });
    }
}
module.exports = { retrieveJoinedImages,retrieveImageByID }