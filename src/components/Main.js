import React, { Component } from 'react'
import  {Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import theme from '../mui-theme/theme'

const useStyles = ({
    helloWorldStyles: {
        fontStyle: 'oblique',
        color: 'yellow'
    },
    buttonStyles: {
        backgroundColor: 'blue'
    }
})

export class PortfolioHome extends Component {

    render() {
        const { classes } = this.props;
        return (
            
            <div>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.helloWorldStyles} variant='h1' color='primary'>Hello world</Typography>
                    <Button className={classes.buttonStyles} variant='contained' color='secondary'>
                        This is a button
                    </Button>
                </ThemeProvider>
            </div>
        )
    }
}

export default withStyles(useStyles)(PortfolioHome)
