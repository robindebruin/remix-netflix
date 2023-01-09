import { MediaWheel } from ".";

const MediaItem = ({ title, img_url, genre }) => {
  return (
    <div key={title} className="mr-2 h-40 w-80 bg-red-300">
      {title}
    </div>
  );
};

type MediaRowProps = { data: MediaWheel };
const MediaRow = (data: MediaRowProps) => {
  const placeholders = [""];
  return (
    <div className="mb-12">
      <h3 className="w-full text-amber-50">title: {JSON.stringify(data)}</h3>
      <div className="flex flex-row">
        {placeholders.map((mediaItem) => (
          //   <MediaItem {...mediaItem} />
          <></>
        ))}
      </div>
    </div>
  );
};

export default MediaRow;
