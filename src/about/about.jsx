import styles from "./about.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PageContent } from "../assets/content";
import myData from "../helper.json";

function About() {
  return (
    <>
      <div className={styles.about_main_div}>
        <div className={styles.education_div}>
          <div className={styles.education_heading}>Education</div>
          <div className={styles.accordion}>
            {Object.entries(PageContent.About.Education).map(([key, val]) => (
              <>
                <Accordion
                  className={styles.accordion_heading}
                  slotProps={{ heading: { component: "h3" } }}
                  key={key}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id={key}
                  >
                    {myData[key]}
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion_content}>
                    <div>{val.degree}</div>
                    <div>{val.Institute}</div>
                    <div>{val.duration}</div>
                  </AccordionDetails>
                </Accordion>
              </>
            ))}
          </div>
        </div>

        <div className={styles.workex_div}>
          <div className={styles.workex_heading}>Work Experience</div>
          <div className={styles.accordion}>
            {Object.entries(PageContent.About.WorkExperience).map(
              ([key, val]) => (
                <>
                  <Accordion
                    className={styles.accordion_heading}
                    slotProps={{ heading: { component: "h3" } }}
                    key={key}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id={key}
                    >
                      {myData[key]}
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordion_content}>
                      <div>Title: {val.title}</div>
                      <div>Details: {val.details}</div>
                      <div>Tech Stack: {val.technology}</div>
                      <div>Duration: {val.duration}</div>
                    </AccordionDetails>
                  </Accordion>
                </>
              )
            )}
          </div>
        </div>

        <div className={styles.certification_div}>
          <div className={styles.certification_heading}>Certifications</div>
          <ul className={styles.content_div}>
            <li>{PageContent.About.Certifications.ML.title}</li>
            <li>{PageContent.About.Certifications.python.title}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
