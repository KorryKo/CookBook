import React from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo'
import { useStyles } from "./styled";
import PropTypes from 'prop-types';
import Access from './access'

const Header = ({ handleSetCategory, handleSetDishSearch }) => {

    Header.propTypes = {
        handleSetCategory: PropTypes.func,
        handleSetDishSearch: PropTypes.func
    }

    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Access/>
                 {/*TASK 2 pass the user name from Login*/}
                {/*<div>{user}</div>*/}
                <Logo
                    handleSetCategory={ handleSetCategory }
                    handleSetDishSearch={ handleSetDishSearch }
                />
                <Toolbar className={ classes.toolbar }>
                    <SearchField
                        handleSetCategory={ handleSetCategory }
                        handleSetDishSearch={ handleSetDishSearch }
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
