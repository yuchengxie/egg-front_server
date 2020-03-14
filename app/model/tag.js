module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  var d = new Date();
  const TagSchema = new Schema({

    client: {
      type:"String",
      default:""
    },
    tag: {
      type: String,
      default: ""
    },
    add_time: {
      type: Number,
      default: d.getTime()
    }
  });
  return mongoose.model('Tag', TagSchema, 'tag');
}