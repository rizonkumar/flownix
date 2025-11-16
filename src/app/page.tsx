import { requiredAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredAuth();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      Protected Server Component
    </div>
  );
};

export default Page;
