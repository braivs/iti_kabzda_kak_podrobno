import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';


export default {
  title: 'Rating',
  component: Rating,
}

const RatingMemo = React.memo(Rating)

export const EmptyRating = () => <RatingMemo value={0} onClick={x=>x} />;
export const Rating1 = () => <RatingMemo value={1} onClick={x=>x} />;
export const Rating2 = () => <RatingMemo value={2} onClick={x=>x} />;
export const Rating3 = () => <RatingMemo value={3} onClick={x=>x} />;
export const Rating4 = () => <RatingMemo value={4} onClick={x=>x} />;
export const Rating5 = () => <RatingMemo value={5} onClick={x=>x} />;
export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(3)
  return <Rating value={rating} onClick={setRating} />
};