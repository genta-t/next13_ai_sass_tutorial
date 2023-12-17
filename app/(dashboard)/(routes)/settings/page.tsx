import Heading from "@/components/heading";
import SubscriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";


const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <>
      <Heading
        title="設定"
        description="設定ページです"
        icon={Settings}
        iconColor="text-gray-500"
        bgColor="bg-gray-500/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <p className=" text-muted-foreground text-sm">
          {isPro ? "あなたは有料会員です。" : "あなたは無料会員です。"}
        </p>
        <SubscriptionButton isPro={isPro} />
      </div>
    </>
  )
}

export default SettingsPage;