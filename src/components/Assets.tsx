import { Fragment, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { fetchAssets } from '../libs/fetch';
import Thumbnail from './Thumbnail';
import * as AssetModels from '../models/Asset';

const Assets = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['assets'],
    queryFn: fetchAssets,
    getNextPageParam: (lastPage: AssetModels.ApiResponse) => lastPage.pagination.cursor,
  });
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  return isLoading ? (
    <h2 className='my-10'>Loading...</h2>
  ) : (
    <>
      <h2>Assets ({data?.pages[0].data.total})</h2>
      <div className="mt-4 mb-16 flex flex-row flex-wrap">
        {data?.pages.map((group, i: number) => (
          <Fragment key={i}>
            {group.data.clips.map((clip: AssetModels.Clip, y: number) => {
              if (group.data.clips.length === y + 1) {
                return (
                  <Thumbnail
                    key={clip.id}
                    ref={ref}
                    title={clip.displayName}
                    imgUrl={clip.assets.image}
                  />
                );
              }
              return (
                <Thumbnail
                  key={clip.id}
                  title={clip.displayName}
                  imgUrl={clip.assets.image}
                />
              );
            })}
          </Fragment>
        ))}
      </div>
      {isFetchingNextPage && <h3 className='my-10'>Loading...</h3>}
    </>
  );
};

export default Assets;
