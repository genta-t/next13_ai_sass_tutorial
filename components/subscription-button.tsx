"use client"
import { TypeSubscriptionButton } from "@/lib/types";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

const SubscriptionButton = ({ isPro = false } : TypeSubscriptionButton) => {
  const [ loading, setLoading ] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error){
      console.log("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "マネージサブスクリプション" : "アップグレード"}
      {!isPro && <Zap className="w-4 h-4 fill-white" />}
    </Button>
  )
}

export default SubscriptionButton;