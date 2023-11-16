import React , {useEffect,useState} from "react";
import axios from "axios"; 

function Comp1(){
  
    const [posts, setPosts] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
                // console.log("response", res);
                setPosts(res.data)
            })
    }, [])

    // console.log("State",posts);

    const handlePostMethod =()=>{
        const data = {
            title:'asdfgh qwerty',
            body:'bar',
            userId:1,
        }

        // axios.post("https://jsonplaceholder.typicode.com/posts",data)
        // .then((res)=>{
        //     console.log('Response Post Method', res);
        // })

        //  axios.delete(`https://jsonplaceholder.typicode.com/posts/${1}`)
        // .then((res)=>{
        //     console.log("Response Delete Method",res);
        // })

        axios.put(`https://jsonplaceholder.typicode.com/posts/${1}`,data)
        .then((res)=>{
            console.log("Response Put Method",res);
        })
    }

    return(
        <div>
            <h1>Component1</h1>
            {/* {posts && posts.map((value,index)=>{
                return(
                    <div key={index}>
                        {value.title}
                    </div>
                )
            })} */}
            <button onClick={handlePostMethod}>Post data to Api</button>
        </div>
    )
}

export default Comp1;