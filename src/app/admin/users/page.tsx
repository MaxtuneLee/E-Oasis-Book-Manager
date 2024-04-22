"use client";
import { User, mockUsers } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const UsersPage = () => {
  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
  ];
  return (
    <>
      <div className="w-full col-span-8 space-y-2">
        <div className="col-span-8 flex justify-end">
          <Button variant="default">Create User</Button>
        </div>
        <DataTable columns={columns} data={mockUsers} />
      </div>
    </>
  );
};

export default UsersPage;
