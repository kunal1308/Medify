import React from 'react';
import { CardContent } from '@mui/material';
import styles from './HospitalCard.module.css';
import hospitalIcon from "../../images/div.u-pos-has.png";
import { ThumbUpAltOutlined } from "@mui/icons-material";
import {Typography} from '@mui/material';

const HospitalCard = ({center,hideSpecificTypo}) => {
  return (
    <CardContent className={styles.leftPart}>
          <img src={hospitalIcon} alt="img" />
          <CardContent
          className={styles.leftPartContentWrapper}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "0em",
            }}
          >
            <CardContent style={{ padding: "0em", marginBottom: "2em" }}>
              <Typography variant="body2" className={styles.cardTitle}>
                {center["Hospital Name"]}
              </Typography>
              <Typography style={{fontWeight:"bold"}}className={styles.cardContent}>
                <span>{center.City},{center.State}</span>
              </Typography>
              <Typography className={styles.cardContent}>
                <span>Smilessence Center for Advanced Dentistry + 1 more</span>
              </Typography>
              {!hideSpecificTypo && 
              <Typography className={styles.cardContent}>
                <span style={{ color: "#02A401", fontWeight: "bold" }}>
                  Free
                </span>{" "}
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  500
                </span>{" "}
                <span>Consultation fee at clinic</span>
                
              </Typography>
              }
            </CardContent>
            <CardContent className={styles.icon}>
              <span>
              <ThumbUpAltOutlined />
              </span>
              {center["Hospital overall rating"] > 0 ? (
                <span>{center["Hospital overall rating"]}</span>
              ) : (
                0
              )}
            </CardContent>
          </CardContent>
        </CardContent>
  )
}

export default HospitalCard
