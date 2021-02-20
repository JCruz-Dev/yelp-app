import { gql } from '@apollo/client'
export const SEARCH_QUERY = gql`
  query Search($term: String!) {
    search(term: $term, location: "san francisco", limit: 10) {
      business {
        id
        name
        rating
        review_count
        photos
        phone
        location {
          address1
          city
        }
      }
    }
  }
`
export const SEARCH_BUSINESS = gql`
  query Business($id: String!) {
    business(id: $id) {
      is_closed
      price
      id
      url
      businessname: name
      rating
      review_count
      photos
      phone
      hours {
        open {
          start
          end
        }
        is_open_now
      }
      location {
        address1
        city
      }
      reviews(limit: 5) {
        text
      }
    }
  }
`
