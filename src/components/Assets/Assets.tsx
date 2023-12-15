import { Fragment, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import Asset from './Asset';

const fetchAssets = async ({ pageParam = 0 }) => {
  console.log('---------- pageParam ', pageParam);
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

function Assets() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery<
    any,
    any,
    any,
    any
  >({
    queryKey: ['assets'],
    queryFn: fetchAssets,
    getNextPageParam: (lastPage, _pages) => lastPage.pagination.cursor,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      // console.log('--------- HAS NEXT PAGE')
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  // return ''

  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <>
      <h2>Assets ({data.pages[0].total})</h2>
      <div className="flex flex-row flex-wrap">
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.clips.map((clip, y) => {
              if (group.data.clips.length === y + 1) {
                return (
                  <Asset
                    key={clip.id}
                    ref={ref}
                    title={clip.displayName}
                    src={clip.assets.image}
                  />
                );
              }
              return (
                <Asset
                  key={clip.id}
                  title={clip.displayName}
                  src={clip.assets.image}
                />
              );
            })}
          </Fragment>
        ))}
      </div>
      {isFetchingNextPage && <h3>Loading...</h3>}
    </>
  );
}

export default Assets;
