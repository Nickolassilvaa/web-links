import { AuthButtonComponent } from "@/components/authButtonComponent";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import animation from "public/animation.svg"
import Image from "next/image";
import {FcGoogle} from 'react-icons/fc'

export default function Login() {
  const session = cookies().get('weblink-session')

  if(session) {
    redirect('/profile')
  }

  return (
    <div className="w-full min-h-screen grid grid-cols-2 items-center justify-center bg-zinc-50">
      <div className="flex items-center justify-center">
        <Image src={animation} alt="" width={1000} height={1000} className="w-3/4" />
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-xs w-full space-y-4">
          <h1 className="text-center font-bold text-2xl text-zinc-800">Entre ou faça login</h1>
          <AuthButtonComponent authType="signIn" className="text-zinc-950 bg-white w-full py-4 rounded-xl border border-zinc-300 flex items-center justify-center gap-4">
            <span className="text-3xl">
              <FcGoogle />
            </span>
            <span className="text-lg">Com sua conta Google</span>
          </AuthButtonComponent>
        </div>
      </div>
    </div>
  )
}
