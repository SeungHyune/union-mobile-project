import Image from "next/image";
import Link from "next/link";
import styles from "./candidateItem.module.css";
import { VoteButton } from "./_components";

interface CandidateItemProps {
  id: number;
  profileUrl: string;
  name: string;
  voteCnt: string;
  votedList: number[];
  handleCompleteModalOpenToggle: () => void;
  handleIncompleteOpenToggle: () => void;
}

const CandidateItem = ({
  id,
  profileUrl,
  name,
  voteCnt,
  votedList,
  handleCompleteModalOpenToggle,
  handleIncompleteOpenToggle,
}: CandidateItemProps) => {
  const isVoted = votedList.includes(id);

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
        votedList={votedList}
        candidateId={id}
        isVoted={isVoted}
        handleCompleteModalOpenToggle={handleCompleteModalOpenToggle}
        handleIncompleteOpenToggle={handleIncompleteOpenToggle}
      />
    </li>
  );
};

export default CandidateItem;
