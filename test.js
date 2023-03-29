// _id, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis

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