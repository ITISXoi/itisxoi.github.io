import IconClear from "../../assets/icons/IconClear";
import { VideoT } from "../../utils/types";

interface Props {
  videos: VideoT[];
  handleClear: (key: number) => void;
  title: string;
}

const ListVideo = (props: Props) => {
  const { videos, title, handleClear } = props;

  return (
    <>
      {videos.length ? (
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl">{title}</p>
            {videos.map((item: VideoT) => (
              <div
                key={item.name}
                className="flex flex-row justify-between gap-8"
              >
                <div className="flex flex-row gap-6 max-w-[826px] items-center">
                  <img src={item.imageUrl} alt={"video"} width={278} />
                  <div className="flex flex-col">
                    <p className="text-2xl text-secondary-900">
                      {item.name}
                    </p>
                    <p className="text-lg">Series: {item.series}</p>
                    <p className="text-lg">Subject: {item.subject}</p>
                    <p className="text-alpha-dark">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-row w-28 h-fit justify-around">
                  <p className="text-2xl mt-4">${item.price}</p>
                  <div className="mt-6 cursor-pointer w-4" onClick={() => handleClear(item.key)}>
                    <IconClear size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ListVideo;
