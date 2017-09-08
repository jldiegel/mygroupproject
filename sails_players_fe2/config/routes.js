

module.exports.routes = {



  '/create':'ContactController.create',
  '/send/:id/addresses':  'ContactController.sendAddresses',
  '/send/:id':  'ContactController.send',
  '/'      :'ContactController.read',
  '/update':'ContactController.update',
  '/delete':'ContactController.delete'

};
