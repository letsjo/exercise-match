import React from 'react'
import styled from 'styled-components'
import { ImCheckboxUnchecked } from "react-icons/im";

const BadCheckList = () => {
  return (
        <ReviewCheck>
        <CheckList>
          <CheckBox>
          <input type="checkbox"/>
          </CheckBox>
          <ListContent>1 약속시간을 지키지 않아요.</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox"/>
          </CheckBox>
          <ListContent>2 약속시간을 지키지 않아요.</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox"/>
          </CheckBox>
          <ListContent>3 약속시간을 지키지 않아요.</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox"/>
          </CheckBox>
          <ListContent>4 약속시간을 지키지 않아요.</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox"/>
          </CheckBox>
          <ListContent>5 약속시간을 지키지 않아요.</ListContent>
        </CheckList>
      </ReviewCheck>

  )
}

const ReviewCheck = styled.div`
  width: 400px;
  height: 220px;
  margin: auto auto 50px;
`;

const CheckList = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  height: 44px;
`;

const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ListContent = styled.div`
  height: 23px;
  font-size: 15px;
`;

export default BadCheckList