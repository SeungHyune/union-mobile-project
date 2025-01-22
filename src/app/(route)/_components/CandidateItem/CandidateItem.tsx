import Image from "next/image";
import Link from "next/link";
import styles from "./candidateItem.module.css";

interface CandidateItemProps {
  id: number;
  profileUrl: string;
  name: string;
  voteCnt: string;
}

const CandidateItem = ({
  id,
  profileUrl,
  name,
  voteCnt,
}: CandidateItemProps) => {
  return (
    <li className={styles.candidateItem} key={id}>
      <Link href={`/profile/${id}`} title={`${name} profile page move`}>
        <div className={styles.imgBox}>
          <Image src={profileUrl} alt={`${name} profile image`} fill priority />
        </div>
        <div className={styles.contentBox}>
          <strong>{name}</strong>
          <span>{voteCnt} voted</span>
        </div>
      </Link>
      <button type="button">Vote</button>
    </li>
  );
};

export default CandidateItem;
