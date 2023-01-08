const MediaItem = ({ title, img_url }) => {
  return (
    <div key={title} className="mr-2 h-40 w-80 bg-red-300">
      {title}
    </div>
  );
};

const MediaRow = () => {
  const placeholderContent = {
    title: "foo",
    img_url: "blalal.img",
    genre: ["thriller"],
  };
  const placeholders = [
    placeholderContent,
    placeholderContent,
    placeholderContent,
    placeholderContent,
  ];
  return (
    <div className="mb-12">
      <h3 className="w-full text-amber-50">title</h3>
      <div className="flex flex-row">
        {placeholders.map((mediaItem) => (
          <MediaItem {...mediaItem} />
        ))}
      </div>
    </div>
  );
};

export default MediaRow;
