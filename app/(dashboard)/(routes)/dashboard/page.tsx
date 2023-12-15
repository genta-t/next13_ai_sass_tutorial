import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p>ダッシュボード</p>
      <UserButton afterSignOutUrl="/"/>
    </>
  )
}

export default DashboardPage;