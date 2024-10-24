import { Col } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { UploadListType } from "antd/es/upload/interface";
import { FileUp } from "lucide-react";

type Props = {
  onChange: (e: any) => void;
  name?: string;
  listType?: UploadListType | undefined;
  label?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  multiple?: boolean;
  description?: string;
  defaultFileList?: any[];
};

const PUploading = ({
  onChange,
  name = "file",
  listType = "picture",
  label = "Upload Image",
  disabled = false,
  colSpanLg,
  colSpanMd,
  multiple = false,
  description,
  defaultFileList = [],
}: Props) => {
  return (
    <Col
      span={24}
      lg={{ span: colSpanLg }}
      md={{ span: colSpanMd }}
      className="mx-auto"
    >
      <div>
        <label htmlFor={name} className="font-semibold inline-block">
          {label}
        </label>
        <div className="mt-1">
          <Dragger
            defaultFileList={defaultFileList}
            className=" py-2 px-4"
            multiple={multiple}
            accept=".jpg,.jpeg,.png,.gif,.webp"
            id={name}
            disabled={disabled}
            onChange={onChange}
            name={name}
            listType={listType}
            onDrop={(e) => {
              console.log("Dropped files", e.dataTransfer.files);
            }}
          >
            <p className="ant-upload-drag-icon text-center">
              <FileUp className="text-center mx-auto" />
            </p>
            <h4 className="font-semibold text-lg mt-3">
              Click or drag file to this area to upload
            </h4>
            <p className="text-sm mt-1 text-slate-500">
              {description ||
                "Strictly prohibit from uploading company data or other band files"}
            </p>
          </Dragger>
        </div>
      </div>
    </Col>
  );
};

export default PUploading;
