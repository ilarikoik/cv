import AdminPageLogOut from "@/app/api/auth/logOut";
import Comments from "@/app/ui/dashboard/comments";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {

    const session = await auth();

  if (!session) {
    redirect("/admin");
  }

//   const teksti = "koitetaan toimiiko";
//   const handleSubmit = async (teksti: string) => {
//     try {
//       const response = await fetch("/api/comments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: teksti }),
//       });
//       if (!response.ok) {
//         throw new Error("täällä");
//       }
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };


  return (
    <>
      <h1 className="pt-20">DASHBOARS</h1>
    <AdminPageLogOut />
    <Comments />
     
    </>
  );
}
