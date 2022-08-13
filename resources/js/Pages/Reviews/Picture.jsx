import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


//レビュー一覧で選択したレビューの詳細画面
const Picture = (props) => {
    const { auth, review, images } = props;
    // const [value, setValue] = React.useState();

    // const { data, setData, post } = useForm({
    //     user_id: auth.user.id,
    //     review_id: review.id,
    // });


      return (

        <img src={`${images[0].image_path}`}></img>
    //     <React.Fragment>
    //       <Grid item xs={4}>
    //         <Item>Item</Item>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Item>Item</Item>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Item>Item</Item>
    //       </Grid>
    //     </React.Fragment>
    //   );
    // }
    
//     export default function NestedGrid() {
//       return (
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={1}>
//             <Grid container item spacing={3}>
//               <FormRow />
//             </Grid>
    
//           </Grid>
//         </Box>
      );
// };
}

export default Picture;
