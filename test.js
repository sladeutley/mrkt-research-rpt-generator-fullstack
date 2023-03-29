import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../components';

const ReportDetail = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null)
  const { id } = useParams()
  console.log('id', id)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
  
      try {
        const response = await fetch(`http://localhost:8080/api/v1/post/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('result', result.data)
          setPost(result.data);
          console.log('post', post)
        }
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPost();
  }, [id]);

  return (
    <section className="max-w-7xl mx-auto">
      {console.log('post2',post)}
      {post.prompt}
    </section>
  )
}

export default ReportDetail