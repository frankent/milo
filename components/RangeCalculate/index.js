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
  const numberFormat = (num) => {
    return Number(num.toFixed(2)).toLocaleString("en-US");
  };
  return (
    <>
      <H3>
        ขนาดแบตเตอรี่
        <br />
        <BattInfo>
          {" "}
          {`${numberFormat(data.series * data.nominalVoltage)}V ${numberFormat(
            data.capacity
          )}Ah | (${numberFormat(
            data.series * data.fullCharge
          )}V - ${numberFormat(data.series * data.fullDischarge)}V)`}
        </BattInfo>
      </H3>
      <P>
        <BatteryPowerHolder>{`${numberFormat(data.wh)} Wh`}</BatteryPowerHolder>
      </P>

      <H3>ระยะทางที่วิ่งได้ DOD 100%</H3>
      <P>
        <BatteryPowerHolder>{`${numberFormat(
          data.wh / data.whkm
        )} Km`}</BatteryPowerHolder>
      </P>

      <H3>ระยะทางที่วิ่งได้ที่ DOD 80%</H3>
      <P>
        <BatteryPowerHolder>{`${numberFormat(
          (data.wh * 0.8) / data.whkm
        )} Km`}</BatteryPowerHolder>
      </P>
    </>
  );
};

export default RangeCalculate;
