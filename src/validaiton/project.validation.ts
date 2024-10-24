import { array, object, string } from "zod";

export const projectValidationSchema = object({
  title: string({ required_error: "Title is required" }),
  description: string({ required_error: "Description is required" }),
  techs: array(string({ required_error: "Techs are required" })),
  url: string({ required_error: "URL is required" }),
  github_client: string({ required_error: "github_client is required" }),
  github_server: string({ required_error: "github_server is required" }),
})