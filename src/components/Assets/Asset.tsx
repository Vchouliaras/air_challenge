import { forwardRef } from 'react';

const Asset = forwardRef((props: any, ref) => {
  return ref ? (
    <div ref={ref}>
      <img
        width={400}
        height={400}
        src={props.thumbnail ?? 'public/placeholder.jpeg'}
        alt=""
      />
      <div>{props.title}</div>
    </div>
  ) : (
    <div>
      <img
        width={400}
        height={400}
        src={props.thumbnail ?? 'public/placeholder.jpeg'}
        alt=""
      />
      <div>{props.title}</div>
    </div>
  );
});

export default Asset;
