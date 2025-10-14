import { caller } from "@/trpc/server";

const Page = async () => {
  const users = await caller.getUsers();
  return <div>{users.users.length}</div>;
};

export default Page;
