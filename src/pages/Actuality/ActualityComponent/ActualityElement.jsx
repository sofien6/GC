import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns'
import './ActualityElement.css'
import LogoImage from '../../../svg/gc_header_logo.svg'
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({ image, description, date, detail }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card className='Card_container' >
            <CardHeader  className='CardHeader' 
                avatar={
                    <Avatar  sx={{ bgcolor: 'white' }} aria-label="recipe">
                        <img src={LogoImage} />
                    </Avatar>
                }
                title="Generation Challenge"
                subheader={format(date.toDate(), 'yyyy-MM-dd HH:mm')}
            />
            <CardMedia className='CardMedia'
                component="img"
                height="194"
                image={image}
                alt="Generation Challenge Content"
            />
            <CardContent className='CardContent'>
                <Typography className='Typography-description'  >
                    <h5>{description}</h5>
                </Typography>
            </CardContent>
            <CardActions className='CardActions'>
            <a href={detail} target="_blank"><Button style={{backgroundColor:"#fbb034",padding:"10px 30px"}} variant="contained">see more</Button></a>
            </CardActions>
        </Card>
    );
}
