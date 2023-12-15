import { forwardRef } from 'react';

type ThumbnailProps = React.PropsWithChildren<{
  imgUrl: string;
  title: string;
}>;

const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>((props, ref) => {
  return (
    <div ref={ref ? ref : null}>
      <img
        width={400}
        height={400}
        src={props.imgUrl ?? 'public/placeholder.jpeg'}
        alt=""
      />
      <div>{props.title}</div>
    </div>
  );
});

export default Thumbnail;
