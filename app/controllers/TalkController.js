 function TalkController() {}

TalkController.prototype.show = function(req, res) {
  res.render('talk/new')
}

TalkController.prototype.add = function(req, res) {
  res.send('Added a new talk')
}

module.exports = new TalkController();
