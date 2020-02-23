const Badge = {
    post: (app, db) => {
        app.post('/badge/upload', function (req, res) {
            console.log("in here");
            const badge = {
                name: req.body.name,
                imageKey: null,
                audioKey: null,
                timeStamp: null,
                expirationCode: 1
            }

            const image = req.body.image
            const audio = req.body.audio;
            //Create Badge key


            db.collection('labels').insertOne(badge, (err, result) => {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    console.log("Results: ", result.ops[0])
                    res.send(result.ops[0]);
                }
            });

            console.log("Upload indeed!", req.body);
        });
    },
    get: (app, db) => {
        app.post('/badge/retrieve', function (req, res) {
            console.log("Retrieve indeed!", req);
        });
    }
}

export default Badge;

//Post label from user 
function createLabel(app, db) {
    // TODO check if label is already created. 
    app.post('/label', (req, res) => {
        const label = {
            user: req.body.user,
            text: req.body.text
        };
        db.collection('labels').insertOne(label, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
}