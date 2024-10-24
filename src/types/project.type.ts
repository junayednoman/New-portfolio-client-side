
export type TProject = {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  description: string;
  techs: string[];
  github_client: string;
  github_server: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}
