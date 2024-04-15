import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

export default function PostPage() {
    const { postSlug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/post/getposts/${postSlug}`);
                const data = await res.json();
                if (!res.ok){
                    setError(true);
                    setLoading(false);
                    return;
                }
                if (res.ok){
                    setPost(data.posts[0]);
                    setLoading(false);
                    setError(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchPost();
    }, [postSlug]);

    if (loading) return <div>Loading...</div>
  return <div>PostPage</div>
  
}
