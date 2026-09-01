import styles from "./post.module.scss"
import Follow from "../follow/follow"
import Avatar from "../avatar/avatar"

interface PostProps {
    username: string;
    datePosted: string;
    // Undefined tant qu'aucune image n'a été uploadée / que le backend
    // n'est pas branché : Avatar affiche alors les initiales de `username`.
    avatarUrl?: string | null;
    likes?: React.ReactNode;
    content: PostContentProps;
    idOwnerPost: string;
};

interface PostContentProps {
    title: string;
    content: string;
};

export default function Post({ username, datePosted, avatarUrl, likes, content, idOwnerPost }: PostProps) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <Avatar username={username} avatarUrl={avatarUrl} />
                    <div className={styles.meta}>
                        <span className={styles.username}>{username}</span>
                        <span className={styles.date}>{datePosted}</span>
                    </div>
                </div>
                {/* TODO: Change this to a proper component for the follow button. */}
                <Follow IdUserToFollow={idOwnerPost} />
            </div>

            <PostContent title={content.title} content={content.content} />
            <div className={styles.footer}>
                {likes ?
                    <div className={styles.likes}>{likes} likes</div> :
                    <div className={styles.likes}>0 likes</div>
                }
                <div>Comments</div>
            </div>
        </div>
    );
}

function PostContent({ children, title, content }: { children?: React.ReactNode } & PostContentProps) {
    return (
        <div className={styles.content}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}
