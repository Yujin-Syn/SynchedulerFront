import React, { useState } from "react";
import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    CardActionArea,
} from "@material-ui/core";
import { 
    MoreVert as MoreVertIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import tinycolor from "tinycolor2";
import { makeStyles, withStyles } from "@material-ui/styles";

import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
        width: 350,
        "&:hover": {
            boxShadow: theme.customShadows.widgetDark
        },
    },
    cardHeader: {
        textDecoration: "none",
    },
    actionArea: {
        "&:hover $focusHighlight": {
          opacity: 0
        }
      },
    focusHighlight: {
        color: "white"
    },
    avatar: {
        color: theme.palette.getContrastText('#FFFFFF'),
    },
}));

export default function ProjectCard(projInfo) {
    const classes = useStyles();
    const { id, name, description } = projInfo;

    return (
        <Card className={classes.card}>
            <CardActionArea classes={{ root: classes.actionArea, focusHighlight: classes.focusHighlight }}>
                <Link to={`/app/project/${id}`} style={{ textDecoration: 'none'}}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="project-profile" className={classes.avatar} style={{backgroundColor: getBackgroundColor(name), color: getTextColor(name)}}>
                            {name.slice(0,2)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={name}
                    subheader={description}
                />
                </Link>
            </CardActionArea>
        </Card>
    );
}

function getBackgroundColor(string) {
    return stringToColor(string);
}

function getTextColor(string) {
    const c = stringToColor(string);

    // if (tinycolor(c).isLight()) {
    //     return "#000000";
    // } else {
    //     return "#000000"
    // }

    return "#FFFFFF";
}

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    
    return tinycolor(color).darken().setAlpha(.7).toString();
}