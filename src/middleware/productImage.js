import multer from "multer";

const storage = multer.diskStorage({
  destination: "./upload",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
export default upload;
