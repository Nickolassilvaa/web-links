import {
  AlertDialog,
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
          <AuthButtonComponent authType="signOut" className="h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Continuar
          </AuthButtonComponent>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )

}
