import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";
import { userSliceAction } from "../redux/reducers/userReducer";

const GoogleLogin = (props) => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  let params = new URL(document.location).searchParams;
  let access_Token = params.get("access_Token");
  let refresh_Token = params.get("refresh_Token");
  console.log("access_Token", access_Token);
  console.log("refresh_Token", refresh_Token);

  useEffect(() => {
    try{
        dispatch(userAction.googleLogin({access_Token, refresh_Token})).unwrap();
        dispatch(userSliceAction.setGoogleLogin());
        navigate("/");
    }catch(e){
        console.log(e);
    }
    
  }, []);


  return <div>GoogleLogin</div>;
};

export default GoogleLogin;