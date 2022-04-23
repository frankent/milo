import styled from "styled-components";
import { H3, P } from "../../components/Typo";
import { Form, InputNumber } from "antd";

const BatteryPowerHolder = styled.span`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: end;
  padding: 8px 15px;
  background-color: #ececec;
  color: red;
  font-size: 30px;
`;

const RangeCalculate = ({ totalWh, powerConsumption }) => {
  console.log({ totalWh, powerConsumption });
  return (
    <>
      <H3 style={{ textAlign: "right" }}>แบตเตอรี่มีขนาด</H3>
      <P>
        <BatteryPowerHolder>{`${totalWh.toFixed(2)} Wh`}</BatteryPowerHolder>
      </P>

      <H3 style={{ textAlign: "right" }}>ระยะทางที่วิ่งได้ DOD100%</H3>
      <P>
        <BatteryPowerHolder>{`${(totalWh / powerConsumption).toFixed(
          2
        )} km`}</BatteryPowerHolder>
      </P>

      <H3 style={{ textAlign: "right" }}>ระยะทางที่วิ่งได้ที่ DOD80%</H3>
      <P>
        <BatteryPowerHolder>{`${((totalWh * 0.8) / powerConsumption).toFixed(
          2
        )} km`}</BatteryPowerHolder>
      </P>
    </>
  );
};

export default RangeCalculate;
