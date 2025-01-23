import { CandidateDetailResponse } from "@/app/_types/response/candidate/candidate";
import styles from "./profileContent.module.css";
import { ProfileContentItem } from "./_components";
import { PROFILE_CONTENT_ITEM_LABEL } from "./profileContent.constants";

interface ProfileContentProps {
  candidateProfile: CandidateDetailResponse;
}

const ProfileContent = ({ candidateProfile }: ProfileContentProps) => {
  return (
    <article className={styles.profileContent}>
      <h3>{candidateProfile.name}</h3>
      <mark>Entry No.{candidateProfile.candidateNumber}</mark>
      <ul className={styles.profileContentList}>
        <ProfileContentItem
          label={PROFILE_CONTENT_ITEM_LABEL.EDUCATION}
          value={candidateProfile.education}
        />
        <ProfileContentItem
          label={PROFILE_CONTENT_ITEM_LABEL.MAJOR}
          value={candidateProfile.major}
        />
        <ProfileContentItem
          label={PROFILE_CONTENT_ITEM_LABEL.HOBBIES}
          value={candidateProfile.hobby}
        />
        <ProfileContentItem
          label={PROFILE_CONTENT_ITEM_LABEL.TALENT}
          value={candidateProfile.talent}
        />
        <ProfileContentItem
          label={PROFILE_CONTENT_ITEM_LABEL.AMBITION}
          value={candidateProfile.ambition}
        />
      </ul>
    </article>
  );
};

export default ProfileContent;
