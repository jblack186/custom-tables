import React from 'react'
import { ThemeProvider, ColorModeProvider, CSSReset, Box, FlexProps, Flex, Button, Text } from '@chakra-ui/react';
import {  Container, Row, Col } from 'react-bootstrap';
import {Navbar} from '../components/Navbar';


export const Home = () => {
  return (
    <div style={{height: '100vh'}}>
      <Navbar />
      <Container fluid >
  <Row>
    <Flex
    width='100%'
    height='100%'
    >
     <Flex
     width='60%'
     height='100vh'
     background='#C2BCAF'
     alignItems='center'
     
     >
      <Col md={10}>

      <Flex
        
        margin='0 auto'
        width='60%'
        textAlign='left'
        flexDir='column'
        marginBottom='100px'

        
      >
        <Flex
        marginBottom='20px'
        fontSize='2rem'
        fontWeight='bold'
        >
        <h2>CUSTOM FURNITURE IN GEORGIA</h2>
        </Flex>
        <p>Looking for that next coffee ttable or are you trying to spice up dinner. Shop with us.</p>
        <Button
          width='300px'
          background='#565348'
          color='white'
          marginTop='20px'
        >Go to Catalog</Button>
        </Flex>
      </Col>
      </Flex>
      <Flex
      width='40%'
      height='100vh'
      background='#565348'
      >
      <Col md={2}>
        
        </Col>
       
        <Flex>
          <p></p>
        </Flex>
      </Flex>
    </Flex>
  </Row>
  
</Container>
    </div>
  )
}
