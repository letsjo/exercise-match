import React from 'react'
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/userAction';


const KakaoLogin = (props) => {

  let params = new URL(document.location).searchParams;
  let code = params.get("code");
  console.log(code);

  const dispatch = useDispatch();

  dispatch(userAction.kakaoLogin(code));

  return (
    <div>KakaoLogin</div>
  )
}

export default KakaoLogin