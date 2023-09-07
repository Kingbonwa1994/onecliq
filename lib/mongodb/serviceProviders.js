"use server"
export async function signupServiceProvider(data) {
    const db = await mongoose.connect(MONGODB_URL);
    const collection = db.collection("servicesProviders");
    const serviceProvider = await collection.findOne({ email: data.email });
    if (serviceProvider) {
      throw new Error("Email already exists");
    }
  
    const services = data.services.slice(0, 3);
    const newServiceProvider = {
      email: data.email,
      phone: data.phone,
      password: data.password,
      services,
    };
  
    await collection.insertOne(newServiceProvider);
  };
  export async function addService (data) {
    const db = await mongoose.connect(MONGODB_URL);
    const collection = db.collection("servicesProviders");
    const serviceProvider = await collection.findOne({ email: data.email });
    if (!serviceProvider) {
      throw new Error("Service provider not found");
    }
  
    const services = serviceProvider.services.slice(0, 3);
    services.push(data.service);
  
    await collection.updateOne({ email: data.email }, { $set: { services } });
  };