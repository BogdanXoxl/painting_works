import fifth from "./fifth.jpg";
import first from "./first.jpg";
import fourth from "./fourth.jpg";
import second from "./second.jpg";
import sixth from "./sixth.jpg";
import third from "./third.jpg";

export const IMAGES = {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
};

export type IMGType = keyof typeof IMAGES;
