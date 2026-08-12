import AdminPageLogin from "../api/auth/logIn";

export default function AdminPage() {


    return (
      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-md px-6 py-12">
       
          <h1 className="text-3xl font-bold">Admin Login</h1>
            <AdminPageLogin/>
        </div>
      </main>
    );
  }