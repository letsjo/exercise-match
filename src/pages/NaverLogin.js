import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";

const NaverLogin = (props) => {
    const dispatch = useDispatch();
    let params = new URL(document.location).searchParams;
    let code = params.get("code")
    let state = params.get("state")
    console.log(code, state);
  
    useEffect(() => {
      dispatch(userAction.naverLogin(code));
    }, []);
  
    return <div>NaverLogin</div>;
}

export default NaverLogin