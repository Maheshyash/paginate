import React,{useState, useEffect} from "react";

const Pagination = ({numOfPostPerPage, totalPosts, paginate}) =>{
    const [pageNo, setPageNo] = useState(1)
    useEffect(()=>{
        paginate(pageNo)
    },[])
    let pages=[];
    for(let i=1;i<=Math.ceil(totalPosts/numOfPostPerPage);i++){
        pages.push(i);
    }

    if(pages<0){
        return;
    }
    
    const handleClick = (page) =>{
        paginate(page);
        setPageNo(page);
    }
    const prevHandler = () =>{
        if(pageNo==1) return
        paginate(pageNo-1);
        setPageNo(pageNo-1);
    }
    const nextHandler = () =>{
        if(pageNo==pages.length) return
        paginate(pageNo+1);
        setPageNo(pageNo+1);
    }
    return(<div className="pagination-container">
            <p onClick={prevHandler} className={`${pageNo==1 ?'not-allow':'page-prev'}`}>previous</p>
            <ul>
            {
                pages.map((page, index)=>{
                    return(
                            <li onClick={()=>handleClick(page)}  
                            key={index} className={pageNo==index+1 && 'list-active'}>{page}</li>
                    )
                })
            }
                </ul>
            <p onClick={nextHandler}className={`${pageNo==pages.length ?'not-allow':'page-next'}`}>next</p>
            </div>
    )

}

export default Pagination;