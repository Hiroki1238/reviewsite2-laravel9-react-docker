import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import NestedGrid from "@/Components/Picture";
import Picture from "@/Components/Picture";
import SimpleSlider from "@/Components/Slider4";


//レビュー一覧で選択したレビューの詳細画面
const Picture = (props) => {
    const { auth, review, images } = props;
    console.log(images);

      return (

        // <img src={`${images[0].image_path}`}></img>
        <div>
        {images.map((image) => (
          <div key={image.id}>
              <h2 className="m-2">
              <img src={`${image.image_path}`}/>
              </h2>
          </div>
      ))}

          <Picture />


      </div>

      );

}

export default Picture;
