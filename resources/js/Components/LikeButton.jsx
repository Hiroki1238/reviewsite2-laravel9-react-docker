import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const LikeButton = ({isLiked}) => {

  const handleLike = (e) => {
    e.preventDefault();
    post(`/like/${venue.id}`);

};

const handleUnlike = (e) => {
    e.preventDefault();
    post(`/unlike/${venue.id}`);
};

  return (
    <div>
      {isLiked ? (<button onClick={handleUnlike}> <StarIcon className="text-yellow-500"/> </button>)
                : (<button onClick={handleLike}> <StarBorderIcon className="text-yellow-500"/> </button>)
              }
    </div>
  )
}

export default LikeButton