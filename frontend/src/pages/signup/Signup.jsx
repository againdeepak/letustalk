import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

export default function Signup() {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {loading,signup}=useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-green-300">ChatApp</span>
        </h1>


        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="john@123" className="w-full input input-bordered h-10" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="xxxxx" className="w-full input input-bordered h-10" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
          </div>

          {/* {Gender Select} */}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline  hover:text-blue-600  inline-block ">Already have an account</Link>

          <div>
            <button className=" btn-block btn-sm mt-2 h-10 btn btn-outline btn-primary"
            disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>: "Signup"}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}




// import GenderCheckbox from "./GenderCheckbox";

// export default function Signup() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp <span className="text-green-300">ChatApp</span>
//         </h1>


//         <form >
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="john@123" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="xxxxx" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password"  className="w-full input input-bordered h-10"/>
//           </div>

//           {/* {Gender Select} */}
//           <GenderCheckbox/>

//           <a href="#" className="text-sm hover:underline  hover:text-blue-600  inline-block ">Already have an account</a>

//           <div>
//             <button className=" btn-block btn-sm mt-2 h-10 btn btn-outline btn-primary">Signup</button>
//           </div>
//         </form>

//       </div>
//     </div>
//   )
// }
