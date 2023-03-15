constmongoose = require('mongoose');

//defineaschemaforuser
const UserSchema = newmongoose.Schema({ name: String, });

//instantiateaninstanceoftheusermodel
const User = mongoose.model('sysusers', UserSchema);

//ExportfunctiontocreateUsermodelclass
module.exports = mongoose.model('sysusers', UserSchema);
