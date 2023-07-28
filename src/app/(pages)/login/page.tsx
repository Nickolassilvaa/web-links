import { AuthButtonComponent } from "@/components/authButtonComponent";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

export default function Login() {
  const session = cookies().get('weblink-session')

  if(session) {
    redirect('/profile')
  }

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex items-center justify-center">
      <AuthButtonComponent authType="signIn" className="text-zinc-100">
        Sign In with Google
      </AuthButtonComponent>
    </div>
  )
}
