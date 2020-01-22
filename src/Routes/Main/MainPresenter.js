import React from "react";
import SideBar from "Components/SideBar";
import styled from "styled-components";
import { Drawer, Divider, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import classes from "*.module.css";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 250px;
    max-height: 100vh;
    background-color: gray;
    position: relative;
    overflow: auto;
`;

const SubHeader = styled.li`
    background-color: green;
`;

const UlHeader = styled.ul`
    background-color: green;
`;

export default () => {
    return (
        <Container>
            <List component="nav" subheader={<SubHeader />}>
                <ul>
                <ListSubheader>STICKY1</ListSubheader>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListSubheader>STICKY2</ListSubheader>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListSubheader>STICKY</ListSubheader>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="hi" />
                </ListItem>
                </ul>
            </List>
        </Container>
    );
}