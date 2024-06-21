"use client"
import { Button } from "@/components/ui/button";
import General from "@/components/Cards/General";
import Calendar from "@/components/Cards/Calendar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { DataTableDemo } from "@/components/Cards/DataTable";


export default function Home() {
  return (
 
      <div className="grid gap-[30px]">
       <div className="grid xl:grid-cols-2 gap-[30px]">
        <General/>
        <div className="grid gap-[30px]">
        <Calendar/>
        <Calendar/>
        </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-[30px] lg:h-[300px] mb-[30px] overflow-hidden">
        <Lines/>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>These are the orders of this month</CardDescription>
          </CardHeader>
        <div className="px-4"><TableDemo/></div>
        </Card>

        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>These are the Users of this month</CardDescription>
          </CardHeader>
        <div className="px-4"><DataTableDemo/></div>
        </Card>
        </div>
      </div>
  
  );
}
