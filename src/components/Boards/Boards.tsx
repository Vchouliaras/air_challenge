import { useQuery } from '@tanstack/react-query';
import Board from './Board';

const fetchBoards = async () => {
  const requestBody = {
    ancestorCutoff: 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
    numThumbnails: 1,
    sortBy: 'custom',
    view: 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
    includeAncestors: true,
    libraryBoards: 'ALL',
    limit: 30,
    cursor: null,
    sortField: {
      direction: 'desc',
      name: 'dateModified',
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
  );

  return await response.json();
};

function Boards() {
  const { isFetching, data } = useQuery({ queryKey: ['boards'], queryFn: fetchBoards });

  console.log('------- data ', data);

  return isFetching ? (
    <h2>Loading</h2>
  ) : (
    <>
      <h2>Boards ({data.data.length})</h2>
      <div className="flex flex-row">
        {data.data.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            thumbnail={board.thumbnail ?? board.thumbnails?.[0]}
          />
        ))}
      </div>
    </>
  );
}

export default Boards;
