import Image from "next/image";
import styles from "./avatar.module.scss";

interface AvatarProps {
    /**
     * URL de la photo de profil. `undefined`/`null`/`""` => repli sur les
     * initiales de `username`.
     *
     * Peu importe où l'image vit réellement côté backend (base de données,
     * disque, S3, Cloudinary...) : tant qu'une URL joignable est exposée
     * (fichier statique, ou route d'API qui stream les octets depuis la DB),
     * ce composant n'a rien à changer. C'est le seul contrat à respecter.
     */
    avatarUrl?: string | null;
    username: string;
    size?: number;
}

export default function Avatar({ avatarUrl, username, size = 40 }: AvatarProps) {
    return (
        <div
            className={styles.avatar}
            style={{ width: size, height: size, fontSize: size * 0.4 }}
        >
            {avatarUrl ? (
                <Image
                    src={avatarUrl}
                    alt={`Photo de profil de ${username}`}
                    width={size}
                    height={size}
                    className={styles.image}
                />
            ) : (
                <span className={styles.initials} aria-hidden="true">
                    {getInitials(username)}
                </span>
            )}
        </div>
    );
}

function getInitials(name: string): string {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("");
}
