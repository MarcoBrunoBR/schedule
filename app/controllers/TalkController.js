let TalkController = function() {}

TalkController.prototype.show = function(req, res) {
  res.send('Form')
}

TalkController.prototype.add = function(req, res) {
  res.send('Added a new talk')
}

module.exports = TalkController
