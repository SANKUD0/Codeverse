import styles from "./end-post.module.scss";

export default function EndPost() {
    return (
        <div className={styles.containerEndPost}>
            <p className={styles.endPostMessage}>You have reached the end of the post.</p>
            <span className={styles.endPostMessage}>Thank you for reading!</span>
        </div>
    );
}