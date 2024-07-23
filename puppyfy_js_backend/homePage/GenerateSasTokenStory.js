const express = require('express');
const { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } = require('@azure/storage-blob');
const app = express();
const port = 3001;

// Connection string components
const accountName = "puppyfystorage";
const accountKey = "Qc6ZYQbXvrcSrAbdoxjemt13OTpL0p+OMfLceyp9FN19WA8Ty9n4fevN1c6zxLS7AswRUy5LJCVk+ASt+pGj/w==";
const containerName = "user-stories";

async function GenerateSasTokenStories(req, res) {
  try {
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const permissions = new BlobSASPermissions();
    permissions.read = true;
    permissions.write = true;
    permissions.create = true;

    const sasOptions = {
      containerName,
      permissions,
      startsOn: new Date(),
      expiresOn: new Date(new Date().valueOf() + 86400 * 1000), // Expires in 1 day
    };

    const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
    res.json({ sasToken });
  } catch (error) {
    console.error('Error generating SAS token:', error.message);
    res.status(500).send('Error generating SAS token');
  }
}
module.exports = GenerateSasTokenStories;
