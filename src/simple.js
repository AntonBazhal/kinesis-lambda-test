module.exports.handler = function(event, context, callback) {
  console.log(event);
  event.Records.forEach(record => console.log(record.kinesis));
};
