export default function imageValidator(event) {
  let {files} = event.target;
  if(files && files.length === 1) {
    if(files[0].size > 4194304){
      return "File size should be less than 1MB";
    } else if (files[0].type === "image/jpeg" || files[0].type === "image/png" || files[0].type === "image/jpg") {
      return "";
    } else {
      return "Only jpeg, jpg, and png files are allowed";
    }
  }else {
  let error = [];
  let message = "";

  Array.from(files).forEach((item, index) => {
    if (item.size > 4194304) {
      message = `Pic ${index + 1} size should be less than 3MB.`;
    } else if (
      item.type === "image/jpeg" ||
      item.type === "image/png" ||
      item.type === "image/jpg"
    ) {
      message = "";
    } else {
      message = `Invalid Pic ${index + 1} format. Only jpeg, jpg, and png files are allowed.`;
    }

    if (message !== "") {
      error.push(message);
    }
  });

  return error.length?error:""
  }
}
