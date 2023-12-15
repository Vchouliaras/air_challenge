import { useQuery } from '@tanstack/react-query';
import { fetchBoards } from '../libs/fetch';
import Thumbnail from './Thumbnail';
import * as BoardModels from '../models/Board'

const Boards = () => {
  const { isFetching, data } = useQuery({ queryKey: ['boards'], queryFn: fetchBoards });

  return isFetching ? (
    <h2 className='my-10'>Loading...</h2>
  ) : (
    <>
      <h2>Boards ({data?.data.length})</h2>
      <div className="mt-4 mb-16 flex flex-row flex-wrap">
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
