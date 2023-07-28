'use client'

import { logout, signInWithGoogle } from "@/lib/firebase-config";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  authType: 'signIn' | 'signOut'
}

export function AuthButtonComponent({authType,...props}: ButtonProps) {
  return <button onClick={() => {authType === 'signIn' ? signInWithGoogle() : logout()}} {...props} />
}
