import React from 'react';

const IndividualGif = (props) => {

  console.log(props.gif.images)

  return(
    <div>
      <img src={props.gif.images.fixed_width_small.url} />
    </div>
  )
}

export default IndividualGif
