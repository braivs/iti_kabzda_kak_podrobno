import React, {useState} from 'react';

export function UncontrolledRating() {
  let [value, valueOn] = useState(0);

  const changeRatingOn = (ratingCount:number) => {
    valueOn(ratingCount);
  }

  return (
    <div>
      <Star selected={ value > 0 }/><button onClick={() => changeRatingOn(1)}>1</button>
      <Star selected={ value > 1 }/><button onClick={() => changeRatingOn(2)}>2</button>
      <Star selected={ value > 2 }/><button onClick={() => changeRatingOn(3)}>3</button>
      <Star selected={ value > 3 }/><button onClick={() => changeRatingOn(4)}>4</button>
      <Star selected={ value > 4 }/><button onClick={() => changeRatingOn(5)}>5</button>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}


function Star(props: StarPropsType) {
  console.log("star rendering")

  if (props.selected === true) {
    return <span><b>Star</b> </span>
  } else {
    return <span>Star </span>
  }
}