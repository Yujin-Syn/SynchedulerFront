import React, { useState } from "react";
import { Typography, Box, Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/styles';

// styles
import useStyles from "./style";

function TabPanel(props) {
    const { children, value, index, name, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`${name}-panel-${index}`}
            {...other}
            >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function allyProps(name, index) {
    const _name = name.replace(/\s+/g, '-').toLowerCase();

    return {
        id: `${_name}-${index}`, 'aria-controls': `${_name}-panel-${index}`,
    }
}

export default function Tabbar(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const { name, labels, views } = props;
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.tabbarContainer}>
            <Tabs value={value} onChange={handleChange} aria-label={name}>
                {
                    labels.map((label, index) => (
                    <Tab key={index}
                        label={label}
                        {...allyProps(name, index)}
                    />
                ))}
            </Tabs>
            {
                views.map((view, index) => (
                    <TabPanel key={index} value={value} index={index} name={name}>
                        {view}
                    </TabPanel>
                ))
            }
        </div>
    );
}