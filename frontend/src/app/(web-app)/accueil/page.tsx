import Post from "@/components/ui/post/post";

export default function DashboardPage() {
    return (
        <Post
            username="John Doe"
            datePosted="2024-06-15"
            content={{ title: "Sample Post", content: "This is a sample pffilhgflkfjkgdfsjhgkldsfhgksdfjghklsdfjghklsdjfhgklsdjhfglksdjhgklsdjhgklsdjfghklsdjfglksdjfgklsdjfhgklsdjfgklsjdfhgklsjdhfgklsjdhfgkljsdfhglksjdfhgskdfhgskdfhglksdjfhgklsdfhgksdjhgksldjfgksdjfhgskdhgskdjfghskldfjghksldost content." }}
            icon="JD"
            likes={5}
            idOwnerPost="123456789"
        >
        </Post>
    )
}