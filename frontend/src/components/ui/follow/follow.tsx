"use client";
import { useState } from "react";
import styles from "./follow.module.scss"

interface FollowProps {
    IdUserToFollow: string;
}

export default function Follow({ IdUserToFollow }: FollowProps) {

    // TODO: Rate Limiter to the following action
    const [isFollowing, setIsFollowing] = useState(false);
    const handleFollow = () => {
        setIsFollowing(!isFollowing);
        console.log(`Following user with ID: ${IdUserToFollow}`);
    }


    return (
        <div className={styles.follow}>
            <button
                className={styles.button}
                onClick={handleFollow}>{isFollowing ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
}