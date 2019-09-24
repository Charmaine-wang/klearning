import React from "react";
// import Computer from '../Icons/Computer'
import styled from "styled-components";

const StyledELearningDesktop = styled.div`
  display: none;

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10% 5%;

    /* position: relative; */
    & > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      & > img {
        /* height: 530px; */
        width: 100%;
      }
      & > div > {
        position: absolute;
      }

      /* .text-right h1, .text-right p{
                text-align: right;
            } */
      & > div > h1 {
        text-align: left;
        font-size: 50px;
        line-height: 100%;
      }
      & > div > p {
        width: 65%;
        font-size: 20px;
        line-height: 165%;
        text-align: left;
        padding-top: 2%;
      }
    }
    .text-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  /* & > div{
width: 60%;
& > h1{
  text-align: left;
  font-size: 50px;
line-height: 100%;
}
& > p{
  font-size: 20px;
line-height: 165%;
width: 70%;
text-align: left;
}
}
  } */
`;
const ELearningDesktop = () => {
  return (
    <StyledELearningDesktop>
      <div>
        <div>
          <h1>Praktiskt inlärning</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            amet, ac nunc cras dolor lobortis id. Dui id donec maecenas
            malesuada. Adipiscing in laoreet sed nisl adipiscing etiam. Mi
            facilisis nunc, eu molestie.
          </p>
        </div>
        <img src="/images/Illustrations/Learning.svg" alt="" />
      </div>

      <div>
        <img src="/images/Illustrations/communication.svg" alt="" />
        <div className="text-right">
          <h1>Utvecklas tillsammans</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            amet, ac nunc cras dolor lobortis id. Dui id donec maecenas
            malesuada. Adipiscing in laoreet sed nisl adipiscing etiam. Mi
            facilisis nunc, eu molestie.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>Praktiskt inlärning</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            amet, ac nunc cras dolor lobortis id. Dui id donec maecenas
            malesuada. Adipiscing in laoreet sed nisl adipiscing etiam. Mi
            facilisis nunc, eu molestie.
          </p>
        </div>
        <img src="/images/Illustrations/rewards.svg" alt="" />
      </div>
    </StyledELearningDesktop>
  );
};

export default ELearningDesktop;
