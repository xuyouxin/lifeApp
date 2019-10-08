"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanUpDB = async (app) => {
    const mongoose = app.mongoose;
    mongoose.connection.db.listCollections().toArray(async (err, collections) => {
        if (err) {
            return;
        }
        const promises = collections.map(async (collection) => {
            await mongoose.connection.dropCollection(collection.name);
        });
        await Promise.all(promises);
    });
};
exports.setUp = async (app) => {
    await exports.cleanUpDB(app);
};
exports.tearDown = async (app) => {
    await exports.cleanUpDB(app);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxTQUFTLEdBQUcsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQ25DLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDOUIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUU7UUFDMUUsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPO1NBQ1I7UUFDRCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRTtZQUNsRCxNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRTtJQUMvQixNQUFNLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQ2xDLE1BQU0saUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMifQ==