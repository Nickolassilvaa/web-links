import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { Metadata } from 'next'
import { LogoutDialogComponent } from "@/components/logoutDialogComponent";
import { redirect } from "next/navigation";
import { AvatarComponent } from "@/components/avatarComponent";
import { DialogComponent } from "@/components/dialogComponent";

import { FiTrash, FiEdit } from 'react-icons/fi'
import { db } from "@/lib/firebase-config";
import { query, collection, where, getDocs, orderBy } from "firebase/firestore";
import { NextResponse } from "next/server";

 
export const metadata: Metadata = {
  title: 'Links - Profile',
}

type User = {
  userId: string;
  name: string;
  email: string;
  picture: string;
}

export async function getLinks() {
  const session = cookies().get('weblink-session')

  const token = session!.value
  const { user_id }: { user_id: string } = Object(jwt.decode(token))

  const parsedData: any[] = [];
  const q = query(collection(db, "links"), where("userId", "==", user_id), orderBy("created_at", "desc"));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    parsedData.push(data);
  }); 


  return parsedData
}

export default async function Profile() {
  const session = cookies().get('weblink-session')

  if(!session) return redirect('/login')

  const token = session.value
  const user: User = Object(jwt.decode(token))

  const response = await getLinks()

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
            {response.map(item => {
              return (
                <>
                  <div key={item.id} className="flex-1 bg-slate-100 flex items-center justify-between px-2 py-2 rounded">
                    <a href={item.link} target="_blank" className="text-sm font-medium text-slate-500">{item.nickname}</a>
                    <div className="flex items-center gap-2">
                      <FiEdit />
                      <FiTrash />
                    </div>
                  </div>
                </>
              )
            })}            
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
