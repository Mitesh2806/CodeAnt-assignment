import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center"> 
        <div className="flex flex-col md:flex-row gap-4"> 
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link href="/repository">
            <Button>Repository page</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
