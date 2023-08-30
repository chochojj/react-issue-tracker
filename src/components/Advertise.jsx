import { styled } from "styled-components";

const Advertise = () => {
  return (
    <AD>
      <a href="https://wanted.co.kr">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="원티드"
        />
      </a>
    </AD>
  );
};

export default Advertise;

const AD = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
