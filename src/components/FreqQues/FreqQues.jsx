import React from 'react';
import styles from "./FreqQues.module.css";
import image from "../../images/Image-21-1.png.png";
import smile from "../../images/svg.h2d-63a39c21.png";
import heart from "../../images/div.stylish-shape-icon.png";
import { questions } from '../../utility/Facility';
import AddIcon from '@mui/icons-material/Add'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const FreqQues = () => {
  return (
    <div className={styles.wrapper}>
      <p style={{color:"#2AA8FF", fontWeight:"bold"}}>Get Your Answer</p>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.image}>
            <img src={image} alt="img"/>
            <div className={styles.smile}>
                <img src={smile} alt='img'/>
                <div className={styles.smileContent}>
                    <h3>84k+</h3>
                    <p style={{color: "#77829D"}}>Happy Patients</p>
                </div>
            </div>
            <div className={styles.heart}>
            <img src={heart} alt='img'/>
            </div>
            
        </div>
        <div className={styles.quesWrapper}>
            {questions.map((question,index)=> (
                <span className={styles.ques}>
                    <Accordion key={index}
                    sx={{background: 'none',
                      boxShadow: 'none'
                    }}>
                      <AccordionSummary 
                      expandIcon={<AddIcon
                        sx={{
                          display:"flex",
                          alignItems:"center",
                            color: "#2AA8FF",
                            marginLeft: 2,
                        }} 
                        className={styles.expandIcon}/>
                      }
                      className={styles.accordionSummary}
                      aria-controls={`panel${index+1}-content`}
                      id={`panel${index+1}-header`}
                      >
                         <span className={styles.questions}>{question}</span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>""</Typography>
                      </AccordionDetails>
                    </Accordion>
                </span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FreqQues
