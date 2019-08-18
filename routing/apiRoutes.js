var tableData = require("../data/friends");

module.exports = function (app) {

        app.get("/api/friends", function (req, res) {
            res.json(friendsData);
        });
    }
        app.post("/api/friends", function (req, res) {
            if (friendsData.length < 10) {
                friensData.push(req.body);
                res.json(true);
            } else {
                console.log(incomplete)
            }
        });
        app.post("/api/clear", function (req, res) {
            // Empty out the arrays of data
            friendsData.length = 0;
            res.json({
                ok: true
            });
        });