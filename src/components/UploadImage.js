
export const UploadImage = async(productPictures) => {
  var url;
  const uploadImage = async(pic) => {
    console.log(productPictures);
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "Ecommerce");
    data.append("cloud_name", "dnuvm3yuf");
   await  fetch("  https://api.cloudinary.com/v1_1/dnuvm3yuf/image/upload", {
      method: "post",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        url = data.url;
        console.log(data);
      })
      .catch(err => console.log(err))
  }
  var arr = [];
  for (let pic of productPictures) {
    console.log("productPictures");
    console.log(pic);
    // setImage(pic);
    await uploadImage(pic);
    console.log(url);
    arr.push(url)
  }
  console.log(arr);
  return arr;
};

// export default UploadImage;
// <div>
//       <div>
//         <input
//           type="file"
//           name="productPicture"
//           onChange={handleProductPictures}
//         />
//         <input
//           type="file"
//           name="productPicture"
//           onChange={handleProductPictures}
//         />
//         <input
//           type="file"
//           name="productPicture"
//           onChange={handleProductPictures}
//         />
//         <button onClick={uploadImages}>Upload</button>
//       </div>
//       <div>
//         <h1>Uploaded image will be displayed here</h1>
//         {/* <img src={url} alt='' /> */}
//       </div>
//     </div>