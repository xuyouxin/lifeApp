export const cleanUpDB = async app => {
  const mongoose = app.mongoose;
  mongoose.connection.db.listCollections().toArray(async (err, collections) => {
    if (err) {
      return;
    }
    const promises = collections.map(async collection => {
      await mongoose.connection.dropCollection(collection.name);
    });
    await Promise.all(promises);
  });
};

export const setUp = async app => {
  await cleanUpDB(app);
};

export const tearDown = async app => {
  await cleanUpDB(app);
};
