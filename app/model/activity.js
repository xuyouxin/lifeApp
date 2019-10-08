"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return mongoose.model('Activity', ActivitySchema, 'activity');
};
exports.default = ActivitySchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0lBQ3pCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDOUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMvQixNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztRQUM5QixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtTQUNmO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07U0FDZjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxJQUFJO1NBQ2I7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsSUFBSTtTQUNiO0tBQ0osQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDIn0=