import { array, object, string } from "zod";

export const blogValidationSchema = object({
  title: string({ required_error: "Title is required" }),
  description: string({ required_error: "Description is required" }),
  tags: array(string({ required_error: "Tags are required" })),
  category: string({ required_error: "Link is required" }),
})