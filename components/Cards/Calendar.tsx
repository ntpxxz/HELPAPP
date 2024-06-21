import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
  } from "@/components/ui/card"

const Calendar = () => {
  return <Card className='w-full'>
    <CardHeader>
        <CardTitle>This Week</CardTitle>
        <CardDescription>These are the result of week</CardDescription>
      </CardHeader>
    <CardContent className="grid gap-2 h-[100px]">
        </CardContent>
   
  </Card>  
  }

export default Calendar