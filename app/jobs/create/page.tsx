'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react"


const formSchema = z.object({
  caseId: z.string(),
  date: z.date(),
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  section: z.string(),
  itemName: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  detail: z.string(),
  img: z.string()

})

export default function ProfileForm() {
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caseId: "",
      date: new Date(),
      username: "",
      section: "",
      itemName: "",
      detail: "",
      img: "",    
      
    },
  })

 

  const onSubmit = async (values: z.infer<typeof formSchema>) => {  
    try {
      const response = await fetch('api/cases', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values), // Send the form data from `values`
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the JSON response
      console.log('Success writing to server:', data); // Log the response data
    } catch (error) {
      console.error('Error writing to server:', error);
    }
  };
  const format = (date: Date) => {
    // Implement your custom date formatting logic here
    // You can use methods like date.toLocaleDateString(), etc.
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero
    const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero
    return `${year}/${month}/${day}`;
  }; 
  
  const [date, setDate] = React.useState<Date>()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4">
          <FormField
            control={form.control}
            name="caseId"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>CS No.</FormLabel>
                <FormControl>
                  <Input placeholder="" type="text" {...field} name="caseId"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => {
              return <FormItem>
                <FormLabel className="">Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date) : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}{...field} 
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Requester</FormLabel>
                <FormControl>
                  <Input placeholder="Type your username" type="text" {...field} name="username"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <FormField
          
            control={form.control}
            name="section"
            render={({ field }) => {       
              return <FormItem>
                <FormLabel>Section</FormLabel>
                <FormControl className="">
                 
                  <Select  onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="grid w-full items-center">
                      <SelectValue placeholder="Section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACC">ACC</SelectItem>
                      <SelectItem value="ADM">ADM</SelectItem>
                      <SelectItem value="BOI">BOI</SelectItem>
                      <SelectItem value="IT">IT</SelectItem>
                      <SelectItem value="LG">LG</SelectItem>
                      <SelectItem value="PC">PC</SelectItem>
                      <SelectItem value="PD">PD</SelectItem>
                      <SelectItem value="PE">PE</SelectItem>
                      <SelectItem value="PU">PU</SelectItem>
                      <SelectItem value="QA">QA</SelectItem>
                      <SelectItem value="QC">QC</SelectItem>
                      <SelectItem value="QE">QE</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="itemName"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Equipment Name</FormLabel>
                <FormControl>
                  <Input placeholder="Type your equipment name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <div className="grid w-full gap-1.5">                    
                    <Textarea placeholder="Type your detail here." id="detail"  {...field}/>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="img"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Picture</FormLabel>
                <FormControl>
                  <div className="grid w-full gap-1.5">                    
                  <Input id="picture" type="file"  {...field}/>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )

}

