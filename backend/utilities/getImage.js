const fs = require('fs');
const path = require('path');

const getImage = async (req, res) => {
    try {
        const { imagePath } = req.query; // Use req.query for GET requests

        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(404).json({ error: 'Image not found' });
            }

            const ext = path.extname(imagePath).toLowerCase();
            const contentType = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';

            res.setHeader('Content-Type', contentType);
            const imageStream = fs.createReadStream(imagePath);
            imageStream.pipe(res);
            imageStream.on('error', (err) => {
                res.status(500).json({ error: err });
            });
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = getImage;
