import React from 'react'

const KakaoLogin = (props) => {

  let params = new URL(document.location).searchParams;
  let code = params.get("code");
  console.log(code);

  return (
    <div>KakaoLogin</div>
  )
}

export default KakaoLogin