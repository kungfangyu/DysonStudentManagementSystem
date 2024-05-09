/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 21:37:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-08 20:01:08
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
import { parseJwt } from '../../helpers/jwt';

//This component is used to display the module card on the Module page
const ModuleCard = ({ moduleData }) => {
  const token = localStorage.getItem('accessToken');
  const parse = parseJwt(token);
  const userType = parse.userType;
  const isStudent = userType === 'student';
  return (
    <Grid container sx={{ justifyContent: 'space-around' }}>
      {moduleData.map((items) => {
        return (
          <Link
            href={`${isStudent ? 'modules' : 'staffmodules'}/${items.moduleID}`}
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
