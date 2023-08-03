import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { db } from "@/lib/firebase-config";
import { query, collection, where, getDocs, addDoc, onSnapshot, orderBy } from "firebase/firestore";
import { randomUUID } from "crypto";

export async function GET(rsponse: NextResponse) {
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


  return JSON.stringify(parsedData)
}

export async function POST(request: Request, response: NextResponse) {
  const session = cookies().get('weblink-session')
  if (!session) return NextResponse.json({}, { status: 401 })

  const body = await request.json();

  if(!body) return NextResponse.json({}, { status: 404 })

  const token = session.value
  const { user_id }: { user_id: string } = Object(jwt.decode(token))
  
  const data = new Object({
    id: randomUUID().toString().replaceAll('-', ''),
    userId: user_id,
    ...body,
    created_at: new Date(),
    update_at: new Date(),
  })

  const q = query(collection(db, "links"), where("uid", "==", user_id));
  const docs = await getDocs(q);

  if (docs.docs.length === 0) {
    await addDoc(collection(db, "links"), data);
  }

  return NextResponse.json({}, { status: 200 });
}
