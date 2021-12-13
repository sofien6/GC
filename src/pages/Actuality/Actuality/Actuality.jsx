import React, { useEffect, useState } from 'react'
import ActualityElement from '../ActualityComponent/ActualityElement'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import firebase_database from '../../firebase'
import { collection, getDocs, query, doc, getDoc, onSnapshot } from "@firebase/firestore"
import { Grid } from '@mui/material';
import './Actuality.css'
import LogoActuality from '../../../svg/undraw_news.svg'
const CircularIndeterminate = () => (
    <Box className='CircularIndeterminate' sx={{ width: '100%' }}>
        <LinearProgress />
    </Box>
)

const actualityFirebaseCollectionReference = collection(firebase_database, 'actuality')

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
        <div>
          <Box   x={{ width: '100%' }}>
            {!actualityList.length > 0 && <CircularIndeterminate />}
            <Grid className='Actuality_container' container spacing={1}>
                {actualityList && actualityList.map((element, index) =>
                    <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <ActualityElement key={index} image={element.image} description={element.description}  date={element.date} detail={element.detail} />
                    </Grid>
                )
                }
            </Grid>
        </Box >
        </div>
        
    )
}

export default Actuality