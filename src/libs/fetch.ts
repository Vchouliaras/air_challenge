import * as Asset from '../models/Asset'
import * as Board from '../models/Board'

export const fetchBoards = async (): Promise<Board.ApiResponse> => {
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




export const fetchAssets = async ({ pageParam = 0 }): Promise<Asset.ApiResponse> => {
  const requestBody = {
    limit: 72,
    type: 'all',
    withOpenDiscussionStatus: true,
    filters: {
      board: {
        is: 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
      },
    },
    boardId: 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
    sortField: {
      direction: 'desc',
      name: 'dateModified',
    },
    descendantBoardId: 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/shorturl/bDkBvnzpB/clips/search${pageParam ? '?cursor=' + pageParam : ''}`,
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