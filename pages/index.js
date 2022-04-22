import Head from "next/head";
import styled from "styled-components";

const FFF = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>คำนวนระยะทางแบตเตอร์รี่ออนไลน์ - MiloCup</title>
        <meta content="คำนวนระยะทางแบตเตอร์รี่ออนไลน์ - MiloCup" name="title" />
        <meta
          content="คำนวณระยะทางที่รถจะวิ่งได้ออนไลน์ จากผู้ใช้งานจริง ไม่หมกเม็ด - Mile / KiLo CUP"
          name="description"
        />
      </Head>
      <div>
        <FFF>SSSSSS</FFF>
      </div>
    </>
  );
};

export default Home;
