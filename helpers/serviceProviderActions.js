"use server"
export default createServiceProvider = async (req, res) => {
    const { email, phone, name, services } = req.body
  
    const client = await MongoClient.connect(URI, options)
    const db = client.db('1cliQdb')
    const collection = db.collection('serviceProviders')
  
    const serviceProvider = {
      email,
      phone,
      name,
      services
    }
  
    await collection.insertOne(serviceProvider)
  
    res.status(201).json({
      message: 'Service provider created successfully'
    })
  }
  
  

  