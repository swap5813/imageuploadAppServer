
var express = require('express');

const  multipart  =  require('connect-multiparty');

const  multipartMiddleware  =  multipart({ uploadDir:  'D:\\DM_Photo\\' });

const router = express.Router();

const fs = require('fs');

const upload_image_dir = 'D:\\DM_Photo\\';

router.get('/get', (req, res) => {
    res.json("hello from getFile");
});

router.post('/save', multipartMiddleware, (req, res) => {
    for( const up of req.files.uploads) {
        fs.rename(up.path, upload_image_dir + up.name, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
        res.json({ file: up.name
        });
    }
});

router.put('/delete', (req, res) => {
    const path = upload_image_dir + req.body.fileName;
    fs.unlink(path, function(err){
        if(err) console.log('Error: ' + err);
    });
    res.json("File deleted successfully");
});

module.exports = router;