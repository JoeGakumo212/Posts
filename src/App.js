import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // Fetch users
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Fetch posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  // Helper function to count user posts
  const getUserPostCount = (userId) => {
    return posts.filter((post) => post.userId === userId).length;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Users and Post Counts
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2">
                  Posts: {getUserPostCount(user.id)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
