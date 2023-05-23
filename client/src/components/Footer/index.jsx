import React from 'react'
import style from './index.module.css'
import Container from "@mui/material/Container";
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
  return (
    <>
      <footer className={style.img}>
        <Container maxWidth='lg'>
          <Grid container spacing={2} style={{display:'flex' , alignItems:"center"}}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <p style={{color:"white"}}>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <ul className={style.list}>
                <li className={style.listItem}><FacebookIcon/></li>
                <li className={style.listItem}><TwitterIcon/></li>
                <li className={style.listItem}><LanguageIcon/></li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  )
}

export default Footer