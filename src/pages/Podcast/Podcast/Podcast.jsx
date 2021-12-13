import React, { useEffect, useState } from 'react'
import PodcastElement from '../PodcastElement/PodcastElement'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import firebase_database from '../../firebase'
import { collection, getDocs, query, doc, getDoc, onSnapshot } from "@firebase/firestore"
import { Grid } from '@mui/material';
import './Podcast.css'

const CircularIndeterminate = () => (
    <Box className='CircularIndeterminate' sx={{ width: '100%' }}>
        <LinearProgress />
    </Box>
)

const actualityFirebaseCollectionReference = collection(firebase_database, 'Podcast')

const Actuality = () => {
    const [actualityList, setActualityList] = useState([])
    useEffect(() => {
        const getActualities = async () => {
            const firebaseActualityList = await getDocs(actualityFirebaseCollectionReference)
            setActualityList(firebaseActualityList.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getActualities()
    }, [])
    return (
        <Box   x={{ width: '100%' }}>
            {!actualityList.length > 0 && <CircularIndeterminate />}
            <Grid className='Actuality_container' container spacing={1}>
                {actualityList && actualityList.map((element, index) =>
                    <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <PodcastElement key={index} image={element.image} description={element.Description} name={element.Name} date={element.Date} detail={element.detail} />
                    </Grid>
                )
                }
            </Grid>
        </Box >
    )
}

export default Actuality