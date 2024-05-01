/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 21:37:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 13:37:35
 * @FilePath: /csc8019_team_project_frontend/src/components/modules/ModuleCard.jsx
 */
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const ModuleCard = ({ moduleData }) => {
  return (
    <Grid container sx={{ justifyContent: 'space-around' }}>
      {moduleData.map((items) => {
        return (
          <Link
            href={`/modules/${items.moduleID}`}
            underline="none"
            key={items.moduleID}
          >
            <Card
              sx={{ maxWidth: 'auto', width: 345, mt: 3 }}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={items.modulePhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {items.moduleID}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {items.moduleName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
};

export default ModuleCard;
