export default function ParallelDashboardLayout({ children, assignments, quiz, notifications }) {
    return (
        <>
            {children}

            <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
                {assignments}
                {notifications}
                {quiz}
            </div>
        </>
    );
}
