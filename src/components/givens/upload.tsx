import { useState, ChangeEvent } from "react";
import { Input } from "../ui";
import toast from "react-hot-toast";
import { Trash } from "../svgs/icons/trash";

interface IProps {
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ImageUploader({ photos, setPhotos }: IProps) {
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
    );

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        if (data.secure_url) {
          setPhotos((prevPhotos) => [...prevPhotos, data.secure_url]);
        }
      } else {
        toast.error(`Upload failed: ${xhr.statusText}`);
      }
      setUploadProgress(0);
    };

    xhr.onerror = () => {
      console.error("Upload error:", xhr.statusText);
      setUploadProgress(0);
    };

    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`
    );
    xhr.send(formData);
  };

  const handleDelete = (index: number) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Input
        label="Photos"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
      {uploadProgress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2 relative">
          <div
            className="bg-[var(--main-color)] h-2 rounded-full text-xs flex justify-center items-center"
            role="progressbar"
            style={{ width: `${uploadProgress}%`, position: "relative" }}
          >
            <span className="absolute w-full text-center text-white text-[10px]">
              {uploadProgress}%
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-4">
        {photos?.map((photo, index) => (
          <div key={index} className="relative w-[100px] h-[100px] ">
            <button
              onClick={() => handleDelete(index)}
              type="button"
              className="absolute top-[5px] left-[5px] h-[30px] w-[30px] cursor-pointer text-white border-none flex items-center justify-center bg-gray-100 rounded-[50%]"
            >
              <Trash />
            </button>
            <img
              src={photo}
              alt={`Uploaded ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
