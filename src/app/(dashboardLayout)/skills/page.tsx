"use client";
import PForm from "../../components/form/PForm";
import PSelect from "../../components/form/PSelect";
import PButton from "../../components/ui/PButton";
import { FieldValues, SubmitHandler } from "react-hook-form";
import DashboardSectionTitle from "../../components/dashboard/DashboardSectionTitle";
import { techOptions } from "../../../constants/project.constant";
import { useUpdateData } from "../../../hooks/mutation";
import { useHandleQuery } from "../../../hooks/query";
import Loading from "../../components/ui/Loading";
import NoData from "../../components/ui/NoData";

const CreateBlog = () => {
  const id = "my-skills";
  const { mutateAsync: updateSkills, isPending } = useUpdateData(
    "update-skills",
    `/skills/${id}`
  );
  const { data, isLoading, isError } = useHandleQuery(id, `/skills/${id}`);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.id = id;
    await updateSkills(data);
  };

  if (isLoading) {
    return <Loading />;
  }
  const frontend = data?.data?.frontend || [];
  const backend = data?.data?.backend || [];
  const skills = { frontend, backend };
  console.log("skills, ", skills);

  return (
    <>
      <DashboardSectionTitle heading="Skills" />
      {!skills || isError ? (
        <NoData />
      ) : (
        <div className="mt-8">
          <PForm
            defaultValues={{ frontend, backend }}
            handleFormSubmit={handleSubmit}
          >
            <div className="space-y-2 w-[600px]">
              <PSelect
                options={techOptions}
                name="frontend"
                label="Front-end Skills"
                placeholder="Select skills"
                mode="multiple"
              />
              <PSelect
                options={techOptions}
                name="backend"
                label="Back-end Skills"
                placeholder="Select skills"
                mode="multiple"
              />
              <PButton disabled={isPending} htmlType="submit">
                {isPending ? "Saving..." : "Save"}
              </PButton>
            </div>
          </PForm>
        </div>
      )}
    </>
  );
};

export default CreateBlog;
