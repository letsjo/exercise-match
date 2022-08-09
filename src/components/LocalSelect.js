import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LocalAction } from "../redux/actions/LocalAction";

const LocalSelect = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LocalAction.loadLocalList());
  }, []);

  return (
    <div>
      <form
        id="nsdiSearchForm"
        action="#"
        class="form_data"
        onsubmit="return false;search();"
      >
        <select id="sido_code">
          <option>선택</option>
        </select>
        <select id="sigoon_code">
          <option>선택</option>
        </select>
        <select id="dong_code">
          <option>선택</option>
        </select>
        <select id="lee_code">
          <option>선택</option>
        </select>
      </form>
    </div>
  );
};

export default LocalSelect;
