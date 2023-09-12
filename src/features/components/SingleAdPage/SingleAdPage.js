import React from "react";
import Snippet from "../AdSnippet/Snippet";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import AdStats from "../AdStats/AdStats";
import DetailedInfoAd from "../DetailedInfoAd/DetailedInfoAd";

function SingleAdPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Snippet />
      <AdStats />
      <DetailedInfoAd />
      <div className="additional-info">
        <div>&#169; 2022 Codedesk, Inc.</div>
        <div>Apply as developer</div>
        <div>Blog</div>
        <div>Support</div>
      </div>
    </div>
  );
}

export default SingleAdPage;
