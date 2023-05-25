interface CardInterface {
  id: number;
  thumb: string;
  badge?: string;
  title: string;
  desc?: string;
  rating?: string;
  total_rating?: string;
  student?: string;
  lecture?: number;
  time?: string;
  title_style?: string;
  btn?: string;
  isLarge?: boolean;
  mentor?: string;
  mentor_name?: string;
}
export default CardInterface;
