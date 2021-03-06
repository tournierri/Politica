const Vote = require('../models/vote.model');

exports.index = function (req, res) {
    Vote.get(function (err, vote) {
        if (err) {
            res.json({
                status: "Error",
                message: err,
            });
        } else {
            res.json({
                status: 'success',
                data: vote,
            })
        }
    });
};

exports.new = function (req, res) {
    const vote = new Vote();
    vote.label = req.body.label;
    vote.for_vote = req.body.for_vote;
    vote.against_vote = req.body.against_vote;
    vote.author = req.body.author;
    vote.dateTime = new Date();
    vote.closeDate = req.body.closeDate;
    vote.source = req.body.source;
    vote.debate = req.body.debate;
    
    vote.save(function (err) {
        if (err){
            res.json(err);
        } else {
            res.json({
                message: 'New vote created!',
                data: vote
            });
        }
    });
};

exports.view = function (req, res) {
    Vote.findById(req.params.vote_id, function (err, vote) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'vote details loading..',
                data: vote
            });
        }
    });
};


exports.update = function (req, res) {Vote.findById(req.params.vote_id, function (err, vote) {
        if (err) {
            res.send(err);
        } else {
            vote.for_vote = req.body.for_vote ? req.body.for_vote : vote.for_vote;
            vote.against_vote = req.body.against_vote ? req.body.against_vote : vote.against_vote;
            vote.author = req.body.author ? req.body.author : vote.author;
            vote.closeDate = req.body.closeDate ? req.body.closeDate : vote.closeDate;
            vote.source = req.body.source ? req.body.source : vote.source;
            vote.debate = req.body.debate ? req.body.debate : vote.debate;
        
            vote.save(function (err) {
                if (err) {
                    res.json(err);
                } else {
                    res.json({
                        message: 'vote Info updated',
                        data: vote
                    });
                }
        });
        }
    });
};

exports.delete = function (req, res) {
    Vote.remove({
        _id: req.params.vote_id
    }, function (err, vote) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: "success",
                message: 'vote deleted'
            });
        }
    });
};

exports.getFinishedVote = function (req, res) {
    Vote.find({
        closeDate : { $lte: new Date()}
    }, function (err, vote) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'vote finished loading...',
                data: vote
            });
        }
    });
};

exports.getActiveVote = function (req, res) {
    Vote.find({
        closeDate : { $gte: new Date()}
    }, function (err, vote) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'vote active loading...',
                data: vote
            });
        }
    });
};