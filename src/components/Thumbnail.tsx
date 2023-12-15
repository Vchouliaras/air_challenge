import { forwardRef } from 'react';

type ThumbnailProps = React.PropsWithChildren<{
  imgUrl: string;
  title: string;
}>;

const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>((props, ref) => {
  return (
    <div ref={ref ? ref : undefined}  className="relative mr-4 mb-4 cursor-pointer">
      <img
        width={400}
        height={400}
        src={props.imgUrl ?? 'public/placeholder.jpeg'}
        alt=""
        className="max-h-[200px] max-w-[200px] object-cover rounded"
      />
      <div className="pointer-events-none absolute inset-0 rounded bg-black/40"></div>
      <div className="absolute bottom-4 left-3 text-white hover:underline">{props.title}</div>
    </div>
  );
});

export default Thumbnail;
