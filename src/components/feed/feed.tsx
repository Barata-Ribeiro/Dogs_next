import FeedPhotos from '@/components/feed/feed-photos';
import { Photos } from '@/interfaces/photo';

export default function Feed({ photos }: Photos) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
