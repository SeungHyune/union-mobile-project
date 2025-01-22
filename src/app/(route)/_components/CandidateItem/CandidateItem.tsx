import Image from "next/image";
import Link from "next/link";
import styles from "./candidateItem.module.css";
import { VoteButton } from "..";

interface CandidateItemProps {
  id: number;
  isVoted: boolean;
  profileUrl: string;
  name: string;
  voteCnt: string;
  handleCompleteModalOpenToggle: () => void;
  handleIncompleteOpenToggle: () => void;
}

const CandidateItem = ({
  id,
  isVoted,
  profileUrl,
  name,
  voteCnt,
  handleCompleteModalOpenToggle,
  handleIncompleteOpenToggle,
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
      <VoteButton
        isVoted={isVoted}
        candidateId={id}
        handleCompleteModalOpenToggle={handleCompleteModalOpenToggle}
        handleIncompleteOpenToggle={handleIncompleteOpenToggle}
      />
    </li>
  );
};

export default CandidateItem;
