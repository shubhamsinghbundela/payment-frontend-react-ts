import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";
import { useTransferMoney } from "@/features/transferMoney/hooks/useTransferMoney";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
};

export function SendMoneyDialog({ open, onOpenChange, user }: Props) {
  const [amount, setAmount] = useState("");

  const transferMutation = useTransferMoney();

  if (!user) return null;

  const handleSendMoney = async () => {
    await transferMutation.mutateAsync({
      to: user._id,
      amount: Number(amount),
    });

    onOpenChange(false);
    setAmount("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <Avatar>
              <AvatarFallback>
                {user.firstName[0]}
                {user.lastName[0]}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-medium">
                {user.firstName} {user.lastName}
              </p>

              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>

            <Input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <Button
            className="w-full"
            onClick={handleSendMoney}
            disabled={!amount || Number(amount) <= 0}
          >
            <Send className="mr-2 h-4 w-4" />
            Send payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
