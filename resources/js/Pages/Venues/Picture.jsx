import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import ImageList from '@mui/material/ImageList';
import { ImageListItem } from "@mui/material";
import Guest from "@/Layouts/Guest";

//レビュー一覧で選択したレビューの詳細画面
const Picture = (props) => {
    const { auth, images } = props;
    console.log(images);

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={props.auth}>
      
        <div>
            <ImageList className="w-full h-full"
                // sx={{ width: 1000, height: 1000 }}
                cols={3}
                // rowHeight={164}
            >
                {images.map((item) => (
                    <ImageListItem key={item.id}>
                        <img className="aspect-square rounded-sm"
                            src={`${item.image_path}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.image_path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            // alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* <img src={`${images[0].image_path}`}></img>
      <div>
      {images.map((image) => (
      <div key={image.id}>
      <h2 className="m-2">
      <img src={`${image.image_path}`}/>
      </h2>
      </div>
      ))} */}
        </div>
        </Authenticated>
    ) : (
        <Guest>
            <div>
            <ImageList className="w-full h-full"
                // sx={{ width: 1000, height: 1000 }}
                cols={3}
                // rowHeight={164}
            >
                {images.map((item) => (
                    <ImageListItem key={item.id}>
                        <img className="aspect-square rounded-sm"
                            src={`${item.image_path}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.image_path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            // alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* <img src={`${images[0].image_path}`}></img>
      <div>
      {images.map((image) => (
      <div key={image.id}>
      <h2 className="m-2">
      <img src={`${image.image_path}`}/>
      </h2>
      </div>
      ))} */}
        </div>
        </Guest>
    )}
        </div>
    )
};

export default Picture;
