import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AuthButtonComponent } from "./authButtonComponent"

import { BiExit } from 'react-icons/bi'


export function LogoutDialogComponent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-2xl hover:text-red-500 p-2 rounded-full hover:bg-red-100 transition-colors duration-200" >
        <BiExit />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">Fazer logout</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Você tem certeza que deseja fazer logout desta página?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-red-200 border-none rounded text-red-500 font-semibold hover:bg-red-300 hover:text-red-600">Cancelar</AlertDialogCancel>
          <AuthButtonComponent authType="signOut">
            <AlertDialogAction>
              Continuar
            </AlertDialogAction>
          </AuthButtonComponent>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )

}
