import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PageContainer from '../../components/PageContainer'
import InfoCard from '../../components/InfoCard'

const useStyles = makeStyles({
  main: {
    backgroundColor: '#b9fbc0',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '36px',
    margin: '14px',
  },
  description: {
    fontSize: '18px',
    marginLeft: '14px',
    marginBottom: '8px',
  },
})

function Home() {
  const classes = useStyles()

  return (
    <PageContainer>
      <br />
      <InfoCard>
        <Typography className={classes.header}>Crepeto</Typography>
        <Typography className={classes.description}>
          A Restaurant Management System
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>PostgreSQL</Typography>
        <Typography className={classes.description}>
          Using PostgreSQL would give us the opportunity to take everything we
          have learned in class CSC 3326, and apply it in a real-world situation
          with a small local restaurant in Ifrane. PostgreSQL is a relational
          database that stores our information in the form of tables, and
          information can be retrieved or modified from the database using SQL
          queries we learned in the LAB.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>
          Design and Tech Stack
        </Typography>
        <Typography className={classes.description}>
          Crepeto is created using the <b>PERN</b> stack along with many other
          technologies:
          <br />
          &nbsp; <b>PostgreSQL</b>: The database that stores our information
          <br /> &nbsp; <b>Express</b>: The web server that handles our requests
          <br />
          &nbsp; <b>React</b>: The front-end framework that renders our pages
          <br />
          &nbsp; <b>Node</b>: The back-end framework that handles our requests
        </Typography>
      </InfoCard>
    </PageContainer>
  )
}

export default Home
