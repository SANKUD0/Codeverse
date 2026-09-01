import Post from "@/components/ui/post/post";

export default function DashboardPage() {
    // Pas d'avatarUrl transmis ici : Avatar retombe automatiquement sur les
    // initiales ("JD") tant que le backend n'a pas d'image réelle à fournir.
    return (
        <Post
            username="John Doe"
            datePosted="2024-06-15"
            content={{ title: "Sample Post", content: "This is a sample pffilhgflkfjkgdfsjhgkldsfhgksdfjghklsdfjghklsdjfhgklsdjhfglksdjhgklsdjhgklsdjfghklsdjfglksdjfgklsdjfhgklsdjfgklsjdfhgklsjdhfgklsjdhfgkljsdfhglksjdfhgskdfhgskdfhglksdjfhgklsdfhgksdjhgksldjfgksdjfhgskdhgskdjfghskldfjghksldost content." }}
            likes={5}
            idOwnerPost="123456789"
        >
        </Post>
    )
}