import { Col, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./PInputError";
type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
};

const PInput = ({
  name,
  label,
  placeholder,
  type,
  disabled,
  colSpanLg,
  colSpanMd,
}: TInputProps) => {
  return (
    <Col
      span={24}
      lg={{ span: colSpanLg }}
      md={{ span: colSpanMd }}
      className="mx-auto"
    >
      <div className="flex items-center justify-center">
        <Controller
          name={name}
          render={({ field, fieldState: error }) => (
            <div className="w-full">
              <Form.Item
                htmlFor={name}
                className="mb-3 font-semibold text-text"
              >
                {label && (
                  <label className="dark:text-white-100" htmlFor={name}>
                    {label}
                  </label>
                )}
                <Input
                  {...field}
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-[5px] dark:bg-text dark:border-gray-500 focus:border-text focus:shadow-none hover:border-text text-text dark:text-white-100 hover:dark:bg-text hover:dark:border-[#BEC1DD] focus:dark:bg-text focus:dark:border-[#BEC1DD] placeholder:dark:text-gray-400 border border-slate-300 py-2 px-4 mt-1"
                  size="large"
                />
                {error && (
                  <RInputError message={error?.error?.message as string} />
                )}
              </Form.Item>
            </div>
          )}
        />
      </div>
    </Col>
  );
};

export default PInput;
