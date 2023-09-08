import SignupForm from '@/components/auth/Signup'


export default function signUpPage() {

  return (
    
    <div>
        <SignupForm action={createAccount}/>
    </div>
  )
}
