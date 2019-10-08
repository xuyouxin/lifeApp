const ActivitySchema = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ActivitySchema = new Schema({
        userName: {
            type: String,
        },
        itemName: {
            type: String,
        },
        start: {
            type: Date,
        },
        stop: {
            type: Date
        }
    });
    return mongoose.model('Activity', ActivitySchema,'activity');
};

export default ActivitySchema;
