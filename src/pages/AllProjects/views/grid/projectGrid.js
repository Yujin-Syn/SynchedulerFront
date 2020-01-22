import React from "react";

import {
    Grid,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import ProjectCard from "./components/projectCard";

const examples = [
    {
        "key" : "0",
        "name": "Hyundai AR Development",
        "description": "현대 AR platform 개발",
    },
    {
        "key" : "1",
        "name": "Posco Consulting",
        "description": "포스코 컨설팅",
    },
    {
        "key" : "2",
        "name": "Lippo",
        "description": "Lippo",
    },
    {
        "key" : "3",
        "name": "Syntegrate Task Management",
        "description": "현대 AR platform 개발",
    },
    {
        "key" : "4",
        "name": "K-BIM Library",
        "description": "3D Experience 라이브러리 구축",
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ProjectGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Grid
                container
                spacing={3}
                justify="flex-start"
                alignItems="flex-start">
                    {
                        examples.map(p => (
                            <Grid item>
                                <ProjectCard 
                                    key={p.key} 
                                    id={p.key}
                                    name={p.name} 
                                    description={p.description}
                                />
                            </Grid>
                        ))
                    }
            </Grid>
        </div>
    );
}