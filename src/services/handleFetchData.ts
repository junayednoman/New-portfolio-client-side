import envConfig from "../config";

const handleFetchData = async (url: string) => {
  const response = await fetch(`${envConfig.base_url}${url}`, {
    cache: "force-cache"
  });
  const data = await response.json();
  return data;
}
export default handleFetchData;