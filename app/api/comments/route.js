import comments from "@/app/data/comments";


export async function GET() {
    return Response.json({

        status: true,
        data: comments
    })
}

export async function POST(request) {

    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        ...comment
    };
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}