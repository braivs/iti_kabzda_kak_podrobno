import React from "react";

export function UncontrolledRating() {
  console.log("UncontrolledRating rendering")
  let value = 0;

  return (
    <div>
      <Star selected={ value > 0 }/><button>1</button>
      <Star selected={ value > 1 }/><button>2</button>
      <Star selected={ value > 2 }/><button>3</button>
      <Star selected={ value > 3 }/><button>4</button>
      <Star selected={ value > 4 }/><button>5</button>
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