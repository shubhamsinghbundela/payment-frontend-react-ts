import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CreditCard } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/features/auth/api/auth.api";
import { Spinner } from "./ui/spinner";
import { useState } from "react";
import { SendMoneyDialog } from "@/components/send-money-dialog";

export function MembersTable() {
  const [selectedUser, setSelectedUser] = useState<{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Card className="flex h-full flex-col">
        <CardHeader>
          <CardTitle>Members</CardTitle>
          <CardDescription>{users.length} people</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-0">
          <div className="w-full">
            <table className="w-full">
              <thead className="border-b text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Email
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map(
                  (user: {
                    _id: string;
                    firstName: string;
                    lastName: string;
                    email: string;
                  }) => (
                    <tr
                      key={user._id}
                      className="border-b transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>
                              {`${user.firstName[0]}${user.lastName[0]}`}
                            </AvatarFallback>
                          </Avatar>

                          <span className="font-medium">
                            {user.firstName} {user.lastName}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-muted-foreground">
                        {user.email}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedUser(user);
                            setIsDialogOpen(true);
                          }}
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Pay
                        </Button>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <SendMoneyDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        user={selectedUser}
      />
    </>
  );
}
