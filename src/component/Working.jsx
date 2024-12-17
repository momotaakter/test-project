import React from 'react'
import Header from './header/Header'
import Productlist from './productlist/Productlist'
import Video from './video/Video'
import List from './list/List'
import Box from './box/Box'
import Riview from './reviewsection/Riview'
import Contact from './contact/Contact'
import Footer from './footer/Footer'



function Working() {
  return (
    <div>
      <Header></Header>
      <Video></Video>
      <Productlist></Productlist>
      <List></List>
      <Box></Box>
     <Riview></Riview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Working
