function ScheduleController() {}

ScheduleController.prototype.getAll = function(req, res) {
  res.json({schedule : [
    {
      time : '09:00 - 09:50',
      name : 'Deivid Marques',
      bio : 'Frontend Developer at Moip',
      social : 'http://www.facebook.com/deividmarquess',
      image : 'https://pbs.twimg.com/profile_images/667464895143784449/crESME2A.jpg',
      talk : 'Titulo da palestra',
      description : 'Descrição da palestra'
    },
    {
      time : '09:00 - 09:50',
      name : 'Deivid Marques',
      bio : 'Frontend Developer at Moip',
      social : 'http://www.facebook.com/deividmarquess',
      image : 'https://pbs.twimg.com/profile_images/667464895143784449/crESME2A.jpg',
      talk : 'Titulo da palestra',
      description : 'Descrição da palestra'
    },
    {
      time : '09:00 - 09:50',
      name : 'Deivid Marques',
      bio : 'Frontend Developer at Moip',
      social : 'http://www.facebook.com/deividmarquess',
      image : 'https://pbs.twimg.com/profile_images/667464895143784449/crESME2A.jpg',
      talk : 'Titulo da palestra',
      description : 'Descrição da palestra'
    },
    {
      time : '09:00 - 09:50',
      name : 'Deivid Marques',
      bio : 'Frontend Developer at Moip',
      social : 'http://www.facebook.com/deividmarquess',
      image : 'https://pbs.twimg.com/profile_images/667464895143784449/crESME2A.jpg',
      talk : 'Titulo da palestra',
      description : 'Descrição da palestra'
    }
  ]})
}

module.exports = new ScheduleController();
