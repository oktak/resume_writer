import { withRouter } from 'react-router-dom';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
    section: {
        width: '100%',
        padding: theme.spacing(8, 2),
        boxSizing: 'border-box'
    },
    content: {
        padding: theme.spacing(0, 1),
        boxSizing: 'border-box'
    },
    gridContainer: {
        marginTop: theme.spacing(4)
    },
    benefitItemContainer: {
        border: '2px solid black',
        borderRadius: '5px',
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },
    title: {
        marginTop: theme.spacing(2)
    },
    icon: {
        display: 'block',
        fontSize: '48px'
    }
}));

const Benefits = ({history}) => {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <Container className={classes.content} maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom>
                    Why you should choose us?
                </Typography>
                <Grid container className={classes.gridContainer} spacing={6} align="center" justify="center" alignItems="stretch">
                    <Grid item className={classes.benefitItemContainer} md={3}>
                        <SpellcheckIcon className={classes.icon} />
                        <Typography className={classes.title} variant="h6" align="center" gutterBottom>
                            AI Delivered
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom>
                            The resume is generated by our AI. Our AI will choose which kind of information is suitable for the job you want to apply, so that you don't need to worry about the content of the resume.
                        </Typography>
                    </Grid>
                    <Grid item className={classes.benefitItemContainer} md={3}>
                        <HowToRegIcon className={classes.icon} />
                        <Typography className={classes.title} variant="h6" align="center" gutterBottom>
                            Qualified
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom>
                            The resumes generated by our builder has been qualified by professionals and HR staff of many companies. The quality of the resume is guaranteed.
                        </Typography>
                    </Grid>
                    <Grid item className={classes.benefitItemContainer} md={3}>
                        <AccessTimeIcon className={classes.icon} />
                        <Typography className={classes.title} variant="h6" align="center" gutterBottom>
                            Fast
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom>
                            When you finished to enter all the information, the builder can quickly generate a resume for you. You don't need to wait for your resume for a long time.
                        </Typography>
                    </Grid>
                </Grid> 
            </Container>
        </div>
    )
}

export default withRouter(Benefits);
