import { AuthButtonComponent } from "@/components/authButtonComponent";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import Image from "next/image";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Links - Profile',
}

type User = {
  userId: string;
  name: string;
  email: string;
  picture: string;
}

export default function Profile() {
  const session = cookies().get('weblink-session')

  const token = session!.value
  const user: User = Object(jwt.decode(token))

  return (
    <div className="w-full min-h-screen max-h-screen flex items-center justify-center px-4">
      <div className="flex items-center gap-10">
        <div className="flex gap-2 items-center">
          <Image src={user.picture} alt="" width={500} height={500} className="w-10 h-10 rounded-full" />
          <div className="">
            <span className="block font-bold leading-none">{user.name}</span>
            <span className="block text-sm">{user.email}</span>
          </div>
        </div>

        <AuthButtonComponent authType="signOut" className="text-sm bg-red-100 rounded text-red-500 font-semibold px-4 py-2">
          Logout
        </AuthButtonComponent>
      </div>
    </div>
  )
}
