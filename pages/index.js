import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Tag, Collapse } from "antd";
import BatteryCapacity from "../components/BatteryCapacity";
import RangeCalculate from "../components/RangeCalculate";
import { H1, H2, H3, P } from "../components/Typo";

const { Panel } = Collapse;

const MiloContainer = styled.section`
  margin-bottom: 8px;
`;

const Container = styled(({ className, ...props }) => (
  <div className={`${className} container`} {...props} />
))``;

const Col = styled(({ className, eleClass, ...props }) => (
  <div className={`${className} ${eleClass}`} {...props} />
))`
  background-color: #fff;
`;

const Row = styled(({ className, ...props }) => (
  <div className={`${className} row`} {...props} />
))`
  margin-bottom: 15px;
`;

const Content = styled.div`
  padding: 15px;
`;

const StyledCollapse = styled(Collapse)`
  margin-bottom: 15px; ;
`;

const Home = () => {
  const [state, setState] = useState({
    wh: 2220,
    whkm: 50,
    battType: "nmc",
    capacity: 30,
    series: 20,
    nominalVoltage: 3.6,
    fullCharge: 4.2,
    fullDischarge: 3.0,
  });

  const onDataChange = (data) => {
    setState(data);
  };

  return (
    <>
      <Head>
        <title>
          คำนวณ ระยะทาง แบตเตอรี่ ออนไลน์ - MiloCup | EV Bike Society
        </title>
        <meta
          content="คำนวณระยะทางแบตเตอรี่ EV Bike Online - MiloCup | EV Bike Society"
          name="title"
        />
        <meta
          content="คำนวณระยะทางที่รถจะวิ่งได้ออนไลน์ จากข้อมูลผู้ใช้งานจริง บนท้องถนน ไม่หมกเม็ด - Mile / KiLo CUP"
          name="description"
        />

        <meta property="og:url" content="https://milo.4492332.xyz" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="คำนวณระยะทางแบตเตอรี่ EV Bike Online - MiloCup | EV Bike Society"
        />
        <meta
          property="og:description"
          content="คำนวณระยะทางที่รถจะวิ่งได้ออนไลน์ จากข้อมูลผู้ใช้งานจริง บนท้องถนน ไม่หมกเม็ด - Mile / KiLo CUP"
        />
        <meta property="og:image" content="https://milo.4492332.xyz/logo.png" />
      </Head>
      <MiloContainer>
        <Container>
          <Row>
            <Col eleClass="col-md-8 offset-md-2">
              <Content>
                <H1>ยินดีต้อนรับสู่ ไมล์ - (กิ)โล คลับ</H1>
                <P>
                  เนื่องจากในปัจจุบันมีรถมอเตอร์ไซต์ไฟฟ้าเป็นที่น่าสนใจมากขึ้นกว่าเมื่อก่อนมาก
                  แล้วจึงมีคำถามยอดฮิตต่อมาว่า รถที่เราสนใจแต่ละแบรนด์
                  แต่ละยี่ห้อนั้น วิ่งได้ระยะทางมากน้อยแค่ไหน
                  ซึ่งเป็นที่มาของเครื่องมือนี้ที่จะช่วยคำนวณระยะทางคร่าวๆ
                </P>

                <StyledCollapse accordion>
                  <Panel header="หลักการคำนวณ และ การอ้างอิง" key="1">
                    <H2>หน่วยพลังงานที่ควรทราบ</H2>
                    <P>
                      ระบบแบตเตอรี่ของรถหลักๆ ของรถที่ร้านจะบอกเราก็คือ เป็นระบบ
                      กี่ V และความจุกี่ Ah ซึ่งก็ไม่ผิด
                      แต่จะมีอีกหน่วยนึงมาตรฐาน แต่ไม่ค่อยมีใครพูดถึง
                      ยกเว้นรถยนต์คือความจุพลังงานที่เป็นหน่วย KWh
                      ซึ่งค่านี้จะเป็นค่าพลังงานที่แท้จริงที่แบตเตอรี่มี
                    </P>

                    <H3>
                      มาทวนเรื่อง หน่วยที่เราจะพูดถึงและอ้างอิงกันก่อนที่จะไปต่อ
                    </H3>
                    <ol>
                      <li>
                        <Tag>V: Volt</Tag>: เป็นหน่วยค่าต่างศักย์ของไฟฟ้า
                      </li>
                      <li>
                        <Tag>A: Ampere</Tag>: เป็นหน่วยค่าปริมาณของไฟฟ้าที่ไหล
                        ของ V นั้นๆ
                      </li>
                      <li>
                        <Tag>Ah: Ampere Hour</Tag>: เป็นค่าความจุของไฟฟ้า
                        เทียบกับ V นั้นๆ
                      </li>
                      <li>
                        <Tag>W: Watt</Tag>: เป็นค่าพลังงานที่ไหลในขณะนั้นๆ
                      </li>
                      <li>
                        <Tag>Wh: Watt Hour</Tag>:
                        เป็นหน่วยวัดความสิ้นเปลืองของพลังงานไฟฟ้า
                      </li>
                    </ol>

                    <H2>ทำไมต้องใช้ Wh ???</H2>
                    <P>
                      ต้องบอกก่อนว่า <Tag>Wh</Tag> นี้เป็นค่าคำนวณที่ได้มาจาก{" "}
                      <Tag>Wh = V x Ah</Tag> ซึ่งหมายความ Battery{" "}
                      <Tag>72V50Ah</Tag> นั้นมีค่าเท่ากับ <Tag>60V60Ah</Tag> และ{" "}
                      <Tag>48V75Ah</Tag> ค่า Ah อย่างเดียวจึงบอกไม่ได้ว่า Ah
                      ยิ่งมาก จะยิ่งพารถไปได้ไกล
                    </P>
                    <P>
                      มีจุดที่ผู้ผลิตบางเจ้าแจ้งข้อมูลไม่ครบแก่ลูกค้าเช่น บอกว่า
                      Battery เป็น <Tag>ระบบ 72V30Ah</Tag> เน้นย้ำนะครับ คำว่า
                      <Tag>ระบบ</Tag> ซึ่งระบบ 72V ของ <Tag>Li-ion</Tag> ที่เป็น
                      3.7v นั้นจะมีการใช้ 19S / 20S / 21S ซึ่ง V ที่ออกมา
                      จะยังทำงานกับกล่องควบคุมของรถได้อยู่ แต่ค่า Wh
                      จะต่างกันอย่างชัดเจน แต่เราก็ยังเรียก 3 แบบนี้ว่า เป็นระบบ
                      72V
                    </P>
                    <P>
                      ส่วนการวัดค่าอัตราการสิ้นเปลืองแบบจริงๆ จังๆ เราจะดูที่
                      Wh/Km เป็นหลัก เพราะ !!! <br />
                      ในขณะที่ทุกท่านตื่นเช้ามาพร้อมรถที่ชาร์จไฟเต็มที่ 84V
                      (Li-ion: 20S 72V) ถ้าสมมุติท่านบิดออกตัว
                      รถต้องการพลังงานที่ 4000w หมายความว่า A
                      ที่วิ่งในขณะนั้นจะจ่ายที่ <Tag>
                        4000 / 84 = 47.62A
                      </Tag>{" "}
                      แต่ถ้ากลับกัน ท่านลืมชาร์จแบต แล้วแบตเหลือแค่ 71V
                      แบตของท่านจะถูกรีด A เป็นจำนวน{" "}
                      <Tag>4000 / 71 = 56.34A</Tag> แต่ถ้ารถของท่านเดิมๆ
                      จากบริษัท ซึ่งจะมีการ limit กระแสไว้ สมมุติว่า Limit
                      ไว้ที่ 50A รถก็จะมีอาการอืดๆ เพราะ กล่องจะบังคับจ่ายไฟแค่{" "}
                      <Tag>71 x 50 = 3550w</Tag> ซึ่งน้อยกว่าที่มอเตอร์ต้องการ
                    </P>
                    <P>
                      จาก ตย. ข้างบนน่าจะพอเข้าใจแบบคร่าวๆ
                      ต่อมาการเทียบค่าอัตราการสิ้นเปลืองของรถ เราจะใช้เป็น Wh/Km
                      จากหน่วยก็จะพอเดาได้ว่า เราไม่สนใจว่าแบตจะเป็นกี่ V และ
                      กี่ Ah
                      โดยปกติรถค่าพวกนี้เราต้องติดเครื่องมือวัดเพิ่มเติมแล้วมาคำนวณย้อนทั้งทริป
                      เช่น ผมขี่รถเป็นระยะ 10km และมีการใช้ไฟไปแล้ว 400Wh
                      หมายความ รถผมมีอัตราการสิ้นเปลืองอยู่ที่{" "}
                      <Tag>400 / 10 = 40Wh/Km</Tag> ถ้าผมแบตเตอรี่ผมเป็น Li-ion
                      72V 20S จะมีกำลังไฟฟ้าอยู่ที่{" "}
                      <Tag>3.7 * 20 * 30 = 2.22KWh</Tag>{" "}
                      และถ้าผมขี่ด้วยอัตราการสิ้นเปลือง 40Wh/Km นี้ไปเรื่อยๆ
                      จนแบตหมด ก็จะได้ระยะทาง <Tag>2220 / 40 = 55.5Km</Tag>
                    </P>
                  </Panel>
                </StyledCollapse>
                <P>
                  โดยค่าอัตราการสิ้นเปลืองที่ใช้งานกับระบบนี้จะเป็นอัตราการสิ้นเปลืองที่ทางทีมงาน
                  ได้วิ่งเก็บสะสมสถิติกันเอง อาจจะไม่ใช่ค่าที่ถูกต้องเป๊ะ
                  แต่สามารถใช้คำนวณคร่าวๆ ได้
                </P>
              </Content>
            </Col>
          </Row>

          <Row>
            <Col eleClass="col-md-8 offset-md-2">
              <Content>
                <Row>
                  <H2>ระบบช่วยคำนวณระยะทางแบบ &quot;คร่าวๆ&quot;</H2>
                </Row>

                <Row>
                  <Col eleClass="col-md-6">
                    <RangeCalculate data={state} />
                  </Col>

                  <Col eleClass="col-md-6">
                    <BatteryCapacity data={state} onDataChange={onDataChange} />
                    <div>
                      <strong>* สถิติอัตราการสิ้นเปลืองจากการใช้งานจริง</strong>
                      <ul>
                        <li>Deco SuperAce + กล่องเดิม: 28-35 Wh/Km</li>
                        <li>Deco SuperAce + EM100 เปิด 65A: 40-45 Wh/Km</li>
                        <li>Strom Gorilla: 40-56 Wh/Km</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Content>
            </Col>
          </Row>
        </Container>
      </MiloContainer>
    </>
  );
};

export default Home;
