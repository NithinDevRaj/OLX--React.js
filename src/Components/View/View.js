import React, { useContext, useEffect, useState } from "react";

import "./View.css";
import { PostContext } from "../../store/PostContext";
import { FirebaseContext } from "../../store/Context";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetail } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const { userId } = postDetail;
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);
  // useEffect(() => {
  //   const { userId } = postDetail;
  //   if (userId) {
  //     firebase
  //       .firestore()
  //       .collection("users")
  //       .where("id", "==", userId)
  //       .get()
  //       .then((res) => {
  //         res.forEach((doc) => {
  //           setUserDetails(doc.data());
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("Error retrieving user details:", error);
  //       });
  //   }
  // }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetail.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetail.price}</p>
          <span>{postDetail.name}</span>
          <p>{postDetail.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.userName}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
