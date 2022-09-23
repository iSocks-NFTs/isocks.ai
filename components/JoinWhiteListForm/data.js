export const addQuery = `*[_type == "photo"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id
      } `;
