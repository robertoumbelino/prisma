import express from 'express'

import { client } from './db/prisma'

const app = express()

app.use(express.json())

/**
 * Get users.
 */
app.get('/users', async (req, res) => {
  const users = await client.user.findMany({
    include: {
      posts: {
        include: {
          comments: true
        }
      }
    }
  })
  res.json(users)
})

/**
 * Create user.
 */
app.post('/users', async (req, res) => {
  const { name, email } = req.body

  const user = await client.user.create({
    data: {
      name,
      email
    }
  })
  res.json(user)
})

/**
 * Create post.
 */
app.post('/posts', async (req, res) => {
  const { title, body, slug, userId } = req.body

  const post = await client.post.create({
    data: {
      title,
      body,
      slug,
      userId
    }
  })
  res.json(post)
})

/**
 * Create comment.
 */
app.post('/comments', async (req, res) => {
  const { comment, postId } = req.body

  const createdComment = await client.comment.create({
    data: {
      comment,
      postId
    }
  })
  res.json(createdComment)
})

app.listen(3000)
