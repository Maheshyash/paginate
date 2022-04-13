import React,{useState, useEffect} from "react";

const PostData = ({posts}) =>{
    return(
        <div className="card">
                {
                    posts?.map((post, index)=>{
                        return(
                            <div>
                                <h1>{post.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default PostData;