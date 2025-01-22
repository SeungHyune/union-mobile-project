import { CandidateDetailResponse } from "@/app/_types/response/candidate/candidate";
import styles from "./profileContent.module.css";

interface ProfileContentProps {
  candidateProfile: CandidateDetailResponse;
}

const ProfileContent = ({ candidateProfile }: ProfileContentProps) => {
  return (
    <article className={styles.profileContent}>
      <h3>{candidateProfile.name}</h3>
      <mark>Entry No.{candidateProfile.candidateNumber}</mark>
      <ul className={styles.profileContentList}>
        <li>
          <strong>Education</strong>
          <span>{candidateProfile.education}</span>
        </li>
        <li>
          <strong>Major</strong>
          <span>{candidateProfile.major}</span>
        </li>
        <li>
          <strong>Hobbies</strong>
          <span>{candidateProfile.hobby}</span>
        </li>
        <li>
          <strong>Talent</strong>
          <span>{candidateProfile.talent}</span>
        </li>
        <li>
          <strong>Ambition</strong>
          <span>{candidateProfile.ambition}</span>
        </li>
      </ul>
    </article>
  );
};

export default ProfileContent;
