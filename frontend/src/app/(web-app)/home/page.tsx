import Post from "@/components/ui/post/post";
import EndPost from "@/components/ui/warning/end-post/end-post";

export default function DashboardPage() {
    return (
        <>
            <Post
                username="John Doe"
                datePosted="2024-06-15"
                content={{ title: "Sample Post", content: "This is a sample p ost content." }}
                likes={5}
                idOwnerPost="123456789"
            >
            </Post>
            <EndPost />
        </>
    )
}