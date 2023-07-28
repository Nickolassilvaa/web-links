import { AuthButtonComponent } from "@/components/authButtonComponent";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

type User = {
  userId: string
  name: string
  email: string
  photoUrl: string
}

export default function Profile() {
  const session = cookies().get('weblink-session')

  const token = session!.value
  const user: User = Object(jwt.decode(token))

  return (
    <div>
      <h1>{user.name}</h1>
      <AuthButtonComponent authType="signOut">
        LogOut
      </AuthButtonComponent>
    </div>
  )
}
