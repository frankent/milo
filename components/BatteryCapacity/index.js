import { get } from "lodash";
import { Form, InputNumber, Select } from "antd";

const batterySpec = {
  lco: {
    name: "Lithium Cobalt Oxide",
    shortName: "LCO",
    nominalVoltage: 3.6,
    fullCharge: 4.2,
    fullDischarge: 3,
  },
  lmo: {
    name: "Lithium Manganese Oxide",
    shortName: "LMO",
    nominalVoltage: 3.7,
    fullCharge: 4.2,
    fullDischarge: 3,
  },
  nmc: {
    name: "Lithium Nickel Manganese Oxide",
    shortName: "NMC",
    nominalVoltage: 3.6,
    fullCharge: 4.2,
    fullDischarge: 3,
  },
  lfp: {
    name: "Lithium Iron Phosphate",
    shortName: "LFP",
    nominalVoltage: 3.2,
    fullCharge: 3.65,
    fullDischarge: 2.5,
  },
  nca: {
    name: "Lithium Nickel Co Al Oxide",
    shortName: "NCA",
    nominalVoltage: 3.6,
    fullCharge: 4.2,
    fullDischarge: 3,
  },
  lto: {
    name: "Lithium Titanate Oxide",
    shortName: "LTO",
    nominalVoltage: 2.4,
    fullCharge: 2.85,
    fullDischarge: 1.8,
  },
};

const BatteryCapacity = ({ onWhChange, onPowerConsumptionChange }) => {
  const [form] = Form.useForm();

  const onDataChange = () => {
    const { battType, capacity, series, whkm } = form.getFieldsValue();
    const battSpec = get(batterySpec, battType);
    if (!battSpec) return;

    const wh = battSpec.nominalVoltage * series * capacity;
    onWhChange(wh);
    onPowerConsumptionChange(whkm);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFieldsChange={onDataChange}
      initialValues={{
        battType: "nmc",
        series: 20,
        capacity: 30,
        whkm: 50,
      }}
    >
      <Form.Item label="ชนิดแบตเตอรี่" name="battType">
        <Select>
          {Object.keys(batterySpec).map((key) => {
            const spec = batterySpec[key];
            return (
              <Select.Option key={key} value={key}>
                {`${spec.shortName} ( ${spec.name} - ${spec.nominalVoltage}v | ${spec.fullCharge}v - ${spec.fullDischarge}v )`}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="จำนวนอนุกรม" name="series">
        <InputNumber min={8} max={64} step={1} addonAfter="S" />
      </Form.Item>
      <Form.Item label="ความจุแบตเตอรี่" name="capacity">
        <InputNumber min={1} max={500} addonAfter="Ah" />
      </Form.Item>
      <Form.Item label="อัตราการสิ้นเปลือง" name="whkm">
        <InputNumber min={5} max={200} addonAfter="Wh/Km" />
      </Form.Item>
    </Form>
  );
};

export default BatteryCapacity;
