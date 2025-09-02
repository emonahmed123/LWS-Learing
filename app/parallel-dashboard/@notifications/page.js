import wait from "@/lib/wait";
import Link from "next/link";

export default async function NotificationsPage() {
    await wait(2000);

    // throw new Error("An error occured");

    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
            <span>NOTIFICATIONS</span>
            <Link className="text-blue-500" href="/parallel-dashboard/seen">View all notifications</Link>

        </div>
    );
}
