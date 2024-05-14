const fs = require('fs');

const getImage = async (req, res) => {
    try {
        const { imagePath } = req.body; 

        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                // If the image file does not exist, send a 404 Not Found response
                return res.status(404).json({ error: 'Image not found' });
            } 

            const imageStream = fs.createReadStream(imagePath);
            imageStream.on('open', () => {
                res.set('Content-Type', 'image/jpeg'); 
                imageStream.pipe(res); 
            });
            imageStream.on('error', (err) => {
                res.status(500).json({ error: err });
            });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getImage;
