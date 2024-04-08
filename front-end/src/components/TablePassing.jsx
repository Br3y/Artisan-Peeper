import React from 'react'
import Container from './Container';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Link} from 'react-router-dom'

const invoices = [
  {
    invoice: "INV001",
    CV: "Passed",
    assessment: "Failed",
    name: "Fabella, Emmanuel T.",
    totalAmount: "88%",
  }
]
 
const TablePassing = () => {
  return (
      <Table className="w-full md:w-full lg:w-[740px] p-0">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">CV</TableHead>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className="w-[70px]">CV Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}  className="cursor-pointer">
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.CV}</TableCell>
              <TableCell><Link to="/view-user">{invoice.name}</Link></TableCell>
              <TableCell className="[200px]">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default TablePassing