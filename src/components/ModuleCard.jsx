/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 21:37:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-17 15:55:37
 * @FilePath: /csc8019_team_project_frontend/src/components/ModuleCard.jsx
 */
import * as React from 'react';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const moduleItems = [
  {
    moduleId: '01',
    moduleName: 'CSC8019 Advance Java',
    image: './images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/modules',
  },
  {
    moduleId: '02',
    moduleName: 'CSC8011 Database',
    image: './images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/timetable',
  },
  {
    moduleId: '03',
    moduleName: 'CSC8011 Database',
    image: './images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/bookingabsence',
  },
  {
    moduleId: '04',
    moduleName: 'CSC8011 Database',
    image: './images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '',
  },
  {
    moduleId: '05',
    moduleName: 'CSC8011 Database',
    image: './images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: 'https://google.com',
  },
  {
    moduleId: '06',
    moduleName: 'CSC8011 Database',
    image: './images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: 'https://google.com',
  },
];

const ModuleCard = () => {
  return (
    <Grid container sx={{ justifyContent: 'space-around' }}>
      {moduleItems.map((items) => {
        return (
          <Card
            sx={{ maxWidth: 'auto', width: 345, mt: 3 }}
            item
            xs={12}
            sm={6}
            md={4}
            key={items.moduleId}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={items.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {items.moduleName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {items.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Grid>
  );
};

export default ModuleCard;
