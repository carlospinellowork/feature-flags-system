import { AppLayout } from "@/shared/components/AppLayout";

export default function Home() {
  return (
      <AppLayout>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Feature Flags System</h1>
        
      <p>
        Toggle the <strong>dark_mode</strong> feature in the admin panel
        to see this UI change in real time.
      </p>
    </div>
    </AppLayout>
  );
}
