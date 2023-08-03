"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button variant={isPro ? "default" : "cta"} onClick={onClick} disabled={loading}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 fill-white" />}
    </Button>
  );
};
