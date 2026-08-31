import styles from "./post.module.scss"
import Follow from "../follow/follow"

interface PostProps {
    username: string;
    datePosted: string;
    icon: string;
    likes?: React.ReactNode;
    content: PostContentProps;
    idOwnerPost: string;
};

interface PostContentProps {
    title: string;
    content: string;
};

export default function Post({ username, datePosted, icon, likes, content, idOwnerPost }: PostProps) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>

                <div className={styles.meta}>
                    <div>
                        <img src={icon} alt={`${username}'s icon`} />
                    </div>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.date}>{datePosted}</span>
                </div>
                {/* TODO: Change this to a proper component for the follow button. */}
                <Follow IdUserToFollow={idOwnerPost} />
            </div>

            <PostContent title={content.title} content={content.content}/>
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