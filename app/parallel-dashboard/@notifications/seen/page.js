import Link from "next/link";

const SeenPage = () => {
    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
            <span>seen NOTIFICATIONS</span>
            <Link className="text-blue-500" href="/parallel-dashboard">View all </Link>

        </div>
    );
};

export default SeenPage;