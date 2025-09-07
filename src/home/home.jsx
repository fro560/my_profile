import { PageContent } from "../assets/content";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.home_main_div}>
        <img
          className={styles.home_image}
          src={PageContent.HomePage.imageUrl}
        />
        <div className={styles.main_div}>
          <div className={styles.heading}>
            {PageContent.HomePage.content.heading}
          </div>

          <div className={styles.info}>{PageContent.HomePage.content.info}</div>
          <span onClick={() => navigate("/about")} className={styles.read_more}>
            Read More..
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
