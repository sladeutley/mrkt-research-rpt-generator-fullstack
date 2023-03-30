import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../components';

const ReportDetail = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
  
      try {
        const response = await fetch(`https://generatrr.onrender.com/api/v1/post/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const result = await response.json();
          setPost(result.data);
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
      {/* {post ? post.prompt : null} - *****VI-I Have to do this bc the prompt property is being accessed on a null object (I set post to null at top) before fetch takes effect. This checks if post object exists before accessing its properties */}
      <div className="mt-4">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <div className="border border-gray-300 px-5 pt-2 pb-5 mt-4 max-w-[1200px] rounded-sm">
              <br/>
              <h1 className="text-center font-extrabold text-[#222328] text-[32px]">Market Research Report for the {post ? post.prompt : null} Industry</h1>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Industry</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{post ? post.industry : null}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Products and Services</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{post ? post.productsAndServices : null}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Key Market Segments</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{post ? post.keyMarketSegments : null}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Competitive Analysis</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{post ? post.competitiveAnalysis : null}</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ReportDetail