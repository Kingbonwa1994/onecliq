import SignupForm from '@/components/auth/Signup'


export default function signUpPage() {
  async function createAccount(data) {

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
    }
  
  return (
    
    <div>
        <SignupForm action={createAccount}/>
    </div>
  )
}
