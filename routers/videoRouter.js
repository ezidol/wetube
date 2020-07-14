import express from "express";
import routes from "../routes";
import {
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
} from "../Controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// 첫번쨰 루트 함수는 ()를 하고 뒤에 함수는 안하는지 잘 이해가 안감
// 내 추측은 첫번째 인자는 string주소고 두번째 인자는 원래 함수자리 근데 주소가 함수기 때문에 함수인걸 알리려고()씀

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
