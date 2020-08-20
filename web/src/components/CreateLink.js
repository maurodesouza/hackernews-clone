import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { FEED_QUERY } from './LinkList'
import { LINKS_PER_PAGE } from '../constants'

const CreateLink = () => {
  const history = useHistory()

  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
      post(description: $description, url: $url) {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  `

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={e => setUrl(e.target.value )}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        onCompleted={() => history.push('/new/1')}
        update={(store, { data: { post } }) => {
          const take = LINKS_PER_PAGE
          const skip = 0

          const orderBy = { createdAt: 'desc' }
          const data = store.readQuery({
            query: FEED_QUERY,
            variables: { take, skip, orderBy }
          })

          data.feed.links.unshift(post)
          store.writeQuery({
            query: FEED_QUERY,
            data,
            variables: { take, skip, orderBy }
          })
        }}
      >
        {postMutation => <button onClick={postMutation}>Submit</button>}
      </Mutation>
    </div>
  )
}

export default CreateLink