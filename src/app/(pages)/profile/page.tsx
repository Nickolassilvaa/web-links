import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { Metadata } from 'next'
import { LogoutDialogComponent } from "@/components/logoutDialogComponent";
import { redirect } from "next/navigation";
import { AvatarComponent } from "@/components/avatarComponent";
import { DialogComponent } from "@/components/dialogComponent";

import { FiTrash, FiEdit } from 'react-icons/fi'

 
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

  if(!session) return redirect('/login')

  const token = session.value
  const user: User = Object(jwt.decode(token))

  return (
    <div className="w-full min-h-screen max-h-screen flex items-center justify-center flex-col divide-y-2">
      <section className="flex-1 flex items-center justify-center w-full flex-col divide-y-2">
        <div className="w-full py-4 px-4 flex items-center gap-2">
          <div className="w-full border border-slate-300 rounded-full overflow-hidden">
            <input type="search" placeholder="Localizar link ..." className="overflow-clip w-full text-sm px-4 py-2 border-none outline-none" />
          </div>
          <DialogComponent />
        </div>
        <div className="flex-1 py-4 px-4 w-full flex flex-col">
          <h1 className="text-lg font-bold">Meus favoritos</h1>
          <div className="mt-4 w-full flex-1 space-y-2">
            <div className="flex-1 bg-slate-100 flex items-center justify-between px-2 py-2 rounded">
              <span className="text-sm font-medium text-slate-500">Link 1</span>
              <div className="flex items-center gap-2">
                <FiEdit />
                <FiTrash />
              </div>
            </div>

            {/* Apenas para teste */}

            <div className="flex-1 bg-slate-100 flex items-center justify-between px-2 py-2 rounded">
              <span className="text-sm font-medium text-slate-500">Link 2</span>
              <div className="flex items-center gap-2">
                <FiEdit />
                <FiTrash />
              </div>
            </div>

            <div className="flex-1 bg-slate-100 flex items-center justify-between px-2 py-2 rounded">
              <span className="text-sm font-medium text-slate-500">Link 3</span>
              <div className="flex items-center gap-2">
                <FiEdit />
                <FiTrash />
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="w-full py-4 flex items-center justify-center">
        <div className="flex items-center gap-10 w-full justify-between px-4">
          <div className="flex gap-2 items-center">
            <AvatarComponent avatarUrl={user.picture} />
            <div className="">
              <span className="block font-bold leading-none text-sm">{user.name}</span>
              <span className="block text-xs">{user.email}</span>
            </div>
          </div>
          <LogoutDialogComponent />
        </div>
      </header>
    </div>
  )
}
