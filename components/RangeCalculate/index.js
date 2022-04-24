import styled from "styled-components";
import { H3, P } from "../../components/Typo";

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

const BattInfo = styled.small`
  color: blue;
`;

const RangeCalculate = ({ data }) => {
  return (
    <>
      <H3>
        ขนาดแบตเตอรี่
        <br />
        <BattInfo>
          {" "}
          {`${data.series * data.nominalVoltage}V ${data.capacity}Ah | (${
            data.series * data.fullCharge
          }V - ${data.series * data.fullDischarge}V)`}
        </BattInfo>
      </H3>
      <P>
        <BatteryPowerHolder>{`${data.wh.toFixed(2)} Wh`}</BatteryPowerHolder>
      </P>

      <H3>ระยะทางที่วิ่งได้ DOD 100%</H3>
      <P>
        <BatteryPowerHolder>{`${(data.wh / data.whkm).toFixed(
          2
        )} km`}</BatteryPowerHolder>
      </P>

      <H3>ระยะทางที่วิ่งได้ที่ DOD 80%</H3>
      <P>
        <BatteryPowerHolder>{`${((data.wh * 0.8) / data.whkm).toFixed(
          2
        )} km`}</BatteryPowerHolder>
      </P>
    </>
  );
};

export default RangeCalculate;
