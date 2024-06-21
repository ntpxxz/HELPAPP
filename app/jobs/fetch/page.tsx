'use client'

import { useEffect, useState } from "react";

import { format } from 'date-fns';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ArrowDownToLine, Eye} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CSVLink } from "react-csv";
import { Badge } from "@/components/ui/badge"

interface JobList {
  no: string
  j_id: string
  date: string
  requester: string
  sect: string
  e_name: string
  detail: string
  status: string
  backgroundColor: string
  // ... other properties
}
const DataTableDemo = () => {
  const today = new Date();
  const formattedDate = format(today, 'yyyyMMdd'); // Format date as YYYYMMDD
  const filename = `CS-${formattedDate}.csv`; // Add prefix and date
 
  const [data, setData] = useState<JobList[]>([]); // Array of JobList objects
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Fetch data from your API endpoint
  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        const apiUrlEndpoint = `http://localhost:3000/api/data`;
        const fetchData = await fetch(apiUrlEndpoint);
        const res = await fetchData.json();        
        setData(res.fetchData);
      } catch (error) {
        setError(error as Error); // Cast for type safety
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, []);  

   // Implement column filtering using `setColumnFilters` from `useReactTable`
   const [sorting, setSorting] = useState<SortingState>([]);
   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
   const [rowSelection, setRowSelection] = useState({})


  // ...
  type ColumnConfig = ColumnDef<JobList>
  const columns: ColumnConfig[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("no")}</div>
    ),
  },

  {

    accessorKey: "j_id",
    header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        CaseID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    )
  },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("job_id")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("job_date")}</div>
    ),
  },
  {
    accessorKey: "requester",
    header: "Requester",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("user_name")+("user_lastname")}</div>
    ),
  },
  {
    accessorKey: "e_name",
    header: "Equipment Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("item_name")}</div>
    ),
  },
  {
    accessorKey: "detail",
    header: "Detail",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("job_detail")}</div>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        <Badge
          className={`tag ${row.getValue("job_status")
            }`}
        >
          {row.getValue("่job_status") || "NA"}
        </Badge>
      </div>
    ),

  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const JobList = row.original
      return (
        <div className="col-span-1 flex justify-end">
          <Button variant="outline" className="w-[50px] h-[30px]" ><Eye /></Button>
        </div>

      )
    },
  },
] 
const table = useReactTable({
  data,
  columns,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters, // Apply filtering
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnVisibilityChange: setColumnVisibility,
  onRowSelectionChange: setRowSelection,
  state: {
    sorting: [],
    columnFilters: [],
    columnVisibility: {},
    rowSelection: {},
  },
});

  return (     
    <div className="w-full">
       {error && (
        <div className="text-red-500">Error fetching data: {error.message}</div>
      )}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center justify-start">
        <Input
          placeholder="Search"
          value={(table.getColumn("requester")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("requester")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />             
      </div> 
      <div className="flex items-center justify-end py-4 gap-4">
      <Button variant="secondary" className="">Add a new case</Button>
      <Button variant="secondary" className="gap-2">
      <CSVLink filename={filename} data ={data}>
        Export CSV
      </CSVLink>  
      <ArrowDownToLine /></Button>
      </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()

                      )
                      }

                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  )}
  </div>

)
}



export default DataTableDemo;