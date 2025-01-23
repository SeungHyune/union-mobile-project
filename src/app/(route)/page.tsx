import { MainBanner, SpaceImage } from "../_components/server";
import { DDayTimer, CandidateList, Header } from "./_components";
import { LogoutButton } from "./_components/Header/_components";
import styles from "./page.module.css";

const RootPage = () => {
  return (
    <>
      <Header rightChildren={<LogoutButton />} />
      <MainBanner>
        <DDayTimer />
        <SpaceImage />
      </MainBanner>
      <section className={styles.informationSection}>
        <article>
          <mark>WORLD MISS UNIVERSITY</mark>
          <h3>
            <span>Mobile Voting</span>
            <span>Information</span>
          </h3>
          <p>
            2024 World Miss University brings together future global leaders who
            embody both beauty and intellect.
          </p>
        </article>
        <ul>
          <li>
            <strong>Period</strong>
            <span> 10/17(Thu) 12PM - 10/31(Thu) 6PM</span>
          </li>
          <li>
            <strong>How to vote</strong>
            <ul>
              <li>
                Up to three people can participate in early voting per day.
              </li>
              <li>
                Three new voting tickets are issued every day at midnight
                (00:00), and you can vote anew every day during the early voting
                period
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.candidateSection}>
        <article>
          <h3>
            <span>2024</span>
            <span>Candidate List</span>
          </h3>
          <p>※ You can vote for up to 3 candidates</p>
        </article>
        <CandidateList />
        <article className={styles.copyright}>
          <p>COPYRIGHT © WUPSC ALL RIGHT RESERVED.</p>
        </article>
      </section>
    </>
  );
};

export default RootPage;
