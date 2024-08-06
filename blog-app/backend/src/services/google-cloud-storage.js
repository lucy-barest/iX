// const { Storage } = require("@google-cloud/storage");

// const storage = new Storage({
//   projectId: "blog-app-426723",
//   keyFilename: "./gcp_key.json",
// });

// const uploadToGoogleCloudStorage = async (filepath) => {
//   try {
//     const gcs = storage.bucket("gs://ix-blog-app-session-1");
//     const storagepath = `ix-blog-app-session-1/${filepath}`;

//     const result = await gcs.upload(filepath, {
//       destination: storagepath,
//       public: true,
//       metadata: {
//         contentType: "application/plain", //application/csv for excel or csv file upload
//       },
//     });
//     return result[0].metadata.mediaLink;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error.message);
//   }
// };

// const GoogleCloudService = {
//   uploadToGoogleCloudStorage,
// };

// module.exports = GoogleCloudService;

