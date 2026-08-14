import AdminPageLogOut from "@/app/api/auth/logOut";
import Comments from "@/app/ui/dashboard/comments";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProjectClicks from "../ui/projectClicks";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/admin");
  }

  return (
    <div className="pt-20">
      <AdminPageLogOut />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4 md:flex-row md:items-start">
        <div className="w-full md:w-1/2">
          <ProjectClicks />
        </div>
        <div className="w-full md:w-1/2">
          <Comments />
        </div>
      </div>
    </div>
  );
}