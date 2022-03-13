import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// check the metadata on a post exist
const validatePostDetails = (postFileName: string, value: any): string[] => {
  const errors = [];
  if (value.img === undefined || value.img === '') {
    errors.push('Metadata Image path is missing for post: ' + postFileName);
  }

  if (value.title === undefined || value.title === '') {
    errors.push('Metadata Title is missing for post: ' + postFileName);
  }
  return errors;
};

test('All posts have valid metadata', () => {
  const errors = fs
    .readdirSync('posts')
    // filter out any files from the root folder
    .filter(
      (fileName) => !fileName.includes('.') && !fileName.includes('__tests__')
    )
    // go through each post folder and validate the metadata
    .flatMap((postFolder) =>
      fs.readdirSync(path.join('posts', postFolder)).flatMap((postFileName) => {
        const postMetadata = matter(
          fs.readFileSync(path.join('posts', postFolder, postFileName), 'utf-8')
        ).data;
        const postMetadataErrors = validatePostDetails(
          postFileName,
          postMetadata
        );
        return postMetadataErrors;
      })
    );

  expect(errors).toEqual([]);
});
