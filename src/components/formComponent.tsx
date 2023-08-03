"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { redirect } from "next/navigation"


const formSchema = z.object({
  link: z.string().url({
    message: 'Parece que essa URL é invalida!'
  }),
  nickname: z.string().min(2, {
    message: 'Minimo: 2 caracteres!'
  }).max(20, {
    message: 'Maximo: 20 caracteres!'
  }),
})

export function LinkForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
      nickname: "",
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch('/api/links', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if(response.status === 200) {
      form.reset()
    }    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o seu link favorito ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apelido</FormLabel>
                <FormControl>
                  <Input placeholder="Adicione um apelido ao link ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-10">Submit</Button>
      </form>
    </Form>
  )
}
