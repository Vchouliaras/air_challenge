function Board(props: any) {
  console.log('-------- ', props);
  return (
    <div className="pointer-cursor">
      <img
        width={200}
        height={200}
        src={props.thumbnail ?? 'public/placeholder.jpeg'}
        alt=""
      />
      <div>{props.title}</div>
    </div>
  );
}

export default Board;
