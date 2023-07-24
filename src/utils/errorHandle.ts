import toast from "react-hot-toast";

export const errorHandle = (error: any) => {
  if (typeof error === "string") {
    toast.error(error);
  } else if (error.username) {
    toast.error(`Email: ${error.username}`);
  } else if (error.password) {
    toast.error(`Password: ${error.password}`);
  } else if (error.non_field_errors) {
    toast.error(error.non_field_errors);
  } else if (error.text) {
    toast.error(error.text);
  } else if (error.body) {
    toast.error(error.body);
  } else toast.error(JSON.stringify(error));
};
