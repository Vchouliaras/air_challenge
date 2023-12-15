import { useQuery } from '@tanstack/react-query';
import { fetchBoards } from '../libs/fetch';
import Thumbnail from './Thumbnail';
import * as BoardModels from '../models/Board'

const Boards = () => {
  const { isFetching, data } = useQuery({ queryKey: ['boards'], queryFn: fetchBoards });

  return isFetching ? (
    <h2>Loading</h2>
  ) : (
    <>
      <h2>Boards ({data?.data.length})</h2>
      <div className="flex flex-row">
        {data?.data.map((board: BoardModels.DataItem) => (
          <Thumbnail
            key={board.id}
            title={board.title}
            imgUrl={board.thumbnail ?? board.thumbnails?.[0]}
          />
        ))}
      </div>
    </>
  );
}

export default Boards;
