const conf ={
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL) ,
    appwriteProjectId : String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId  : String(process.env.REACT_APP_DATABASE_ID),
    appwriteCollectionId : String(process.env.REACT_APP_COLLECTION_ID),
    apppwriteBucketId : String(process.env.REACT_APP_BUCKET_ID)

}

export default conf