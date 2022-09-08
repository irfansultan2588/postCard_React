// post k component ko components k folder me rakhna hai "post.jsx" complete//
// post k code ko component me past krna hai jese car.jsx me hai   complete///
// post k components me props istemal krni hn jese car.jsx me ki hn
// index.js me post ko 5 times different data k sath use/render/reuse krna hai jese car ko kiya hai
import React from "react";

// const app = (props) => {
//     const { profile, image } = props;
//     return (<></>);
// }



// import React from "react";

// const Car = (props) => {
//   const model = props.model;
//   const color = props.color;
//   const company = props.company;
//   const quantity = props.quantity;

//   return (
//     <div>
//       <hr />
//       <p>Model: {model}</p>
//       <p style={{ color: "#fff" }}>Color: {color}</p>
//       <p>Company: {company}</p>
//       <p>Quantity: {quantity}</p>
//       <hr />
//     </div>
//   );
// };




// export default Car;




const PostCard = (props) => {

    const profileimg = props.profileimg;
    const title = props.title;
    const text = props.text;
    const postimg = props.postimg;
    return (

        <>
            <div className="main_div">

                <div className="main2">

                    <div className='imgdiv'>
                        <img className='img-dhani' src={profileimg} />
                    </div>

                    <div className="dhani_name">
                        <br></br>
                        <div>
                            <h2>{title}</h2>
                            <p className="text">
                                <spen>Suggested For you</spen>
                                <spen>1d</spen>
                            </p>
                        </div>

                    </div>


                </div>

                <br></br>
                <div className="containor_img">

                    <div>
                        <p className="text2"> {text}</p>
                    </div>
                    <div className="img_container">
                        <img className='img_2' src={postimg} />
                    </div>


                </div>




            </div>




        </>

    )
}

export default PostCard