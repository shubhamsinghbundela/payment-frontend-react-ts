"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, EyeOff, Loader2, Lock, Clock } from "lucide-react";
import { useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { checkBalance } from "@/features/transferMoney/api/account.api";

type User = {
  firstName: string;
  lastName: string;
};

export default function CheckBalance() {
  const router = useRouter();
  const user: User | null = router?.options?.context?.auth?.user ?? null;
  const [visible, setVisible] = useState(false);

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["balance"],
    queryFn: checkBalance,
    enabled: false, // don't fetch on mount
  });

  const handleReveal = async () => {
    await refetch();
    setVisible(true);
  };

  const handleHide = () => {
    setVisible(false);
  };

  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm shadow-sm">
        <CardHeader className="flex flex-col items-center text-center pb-0 pt-6">
          <Avatar className="mb-3 h-14 w-14">
            <AvatarFallback className="bg-blue-50 text-base font-medium text-blue-800">
              {`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}
            </AvatarFallback>
          </Avatar>

          <p className="text-sm font-medium text-foreground">{`${user?.firstName} ${user?.lastName}`}</p>
        </CardHeader>

        <CardContent className="pt-6">
          <Separator className="mb-6" />

          <p className="text-[11px] uppercase tracking-widest text-muted-foreground text-center mb-3">
            Account balance
          </p>

          {/* Hidden state */}
          {!visible && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-2 h-12">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-muted-foreground/30"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6">
                <Lock className="h-3 w-3" />
                Balance hidden
              </div>
              <Button
                className="w-full"
                onClick={handleReveal}
                disabled={isFetching}
              >
                {isFetching ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Check balance
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Revealed state */}
          {visible && (
            <div className="text-center animate-in fade-in slide-in-from-bottom-1 duration-300">
              <div className="text-4xl font-medium tracking-tight text-foreground mb-1">
                ₹ {data?.balance?.toLocaleString()}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6">
                <Clock className="h-3 w-3" />
                Updated just now
              </div>
              <Button variant="outline" className="w-full" onClick={handleHide}>
                <EyeOff className="h-4 w-4" />
                Hide balance
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
