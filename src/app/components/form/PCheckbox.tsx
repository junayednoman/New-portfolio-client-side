import { Col, Form, Checkbox } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./PInputError";
type TCheckboxProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  onChange?: (e: any) => void;
  defaultChecked?: boolean;
};

const PCheckbox = ({
  name,
  label,
  disabled,
  colSpanLg,
  colSpanMd,
  onChange,
  defaultChecked = false,
}: TCheckboxProps) => {
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
                name={name}
                htmlFor={name}
                className="mb-3 font-semibold text-text"
              >
                <Checkbox
                  defaultChecked={defaultChecked}
                  id={name}
                  disabled={disabled}
                  {...field}
                  onChange={onChange}
                >
                  {label}
                </Checkbox>
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

export default PCheckbox;
