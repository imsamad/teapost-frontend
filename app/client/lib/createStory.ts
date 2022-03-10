import axios from "./axios";

export const submitStory = async (val: any) => {
  let storyObjKey: any = [
    "id",
    "title",
    "subtitle",
    "slug",
    "tags",
    "body",
    "keywords",
    "additionalTags",
    "titleImage",
  ];
  let storyObj: any = { isPublished: val.isPublished };
  storyObjKey.forEach((key: string) => {
    if (val[key]?.length) storyObj[key] = val[key];
  });
  try {
    const { data } = await axios.post("/stories", { ...storyObj });
    return data;
  } catch (err: any) {
    throw err.response.data;
  }
};

export const changeSlug = async (reqBody: { id: string; slug: string }) => {
  try {
    const { data } = await axios.put("/stories/changeslug", {
      ...reqBody,
    });
    return data.data;
  } catch (err: any) {
    throw err.response.data;
  }
};
type axiosObjType = Partial<{ like: number; dislike: number }>;

export const gradeStory = async (storyId: string, axiosObj: axiosObjType) => {
  try {
    const { data } = await axios.put(`/stories/grade/${storyId}`, axiosObj);
    return data;
  } catch (err: any) {
    // throw err.response.data;
    return false;
  }
};
