import AdminPageLogOut from "@/app/api/auth/logOut";
import Comments from "@/app/ui/dashboard/comments";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth();

  if (!session) {
    redirect("/admin");
  }



  return (
    <>
    <p className="pt-20"></p>
    <AdminPageLogOut />
    <Comments />
     
    </>
  );
}
