

module.exports.routes = {



  '/create'               :'ContactController.create',
  '/cards/:id/addresses/:addressId'   :'ContactController.sendAddresses',
  '/cards/:id/phones/:phoneId'        :'ContactController.sendPhones',
  '/send/:id'             :'ContactController.send',
  '/'                     :'ContactController.read',
  '/update'               :'ContactController.update',
  '/delete'               :'ContactController.delete'

};
