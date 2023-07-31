import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { BiPlus } from 'react-icons/bi'

export function DialogComponent() {
  return (
    <Dialog>
      <DialogTrigger className="bg-purple-200 flex-1 text-purple-500 p-2 rounded font-medium">
        <BiPlus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar aos favoritos</DialogTitle>
          <DialogDescription>
            Formulário para adicionar o link
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
