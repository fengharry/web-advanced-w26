import { AuthForm } from "@/components/auth-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </main>
  );
}