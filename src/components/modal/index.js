import {
  Modal,
  Form,
  Input,
  Select,
  Switch,
  Radio,
  DatePicker,
  Row,
  Col,
  Upload,
} from "antd";
import {CodeOutlined, SmileTwoTone, FileDoneOutlined, InboxOutlined} from "@ant-design/icons";
import {InputBox} from "./style";

const ModalBox = ({visible, onCancel}) => {
  const {Option} = Select;
  const {RangePicker} = DatePicker;

  return (
    <>
      <Modal
        title="Add New Candy"
        centered
        visible={visible}
        onOk={onCancel}
        okText="Add"
        onCancel={onCancel}
        width={1000}
      >
        <Form>
          <Row gutter={[16, 6]} align="bottom">
            <Col span="8">
              <Form.Item>
                <Form.Item
                  valuePropName="imgFile"
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag Image to this area to upload
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
            <Col span="16">
              <Row gutter={[16, 6]} align="bottom">
                <Col span="18">
                  <InputBox>
                    <Form.Item name={["user"]} label="Name">
                      <Input />
                    </Form.Item>
                  </InputBox>
                </Col>
                <Col span="6">
                  <InputBox>
                    <Form.Item name={["type"]} label="Type">
                      <Select placeholder="Select Type">
                        <Option value="code">
                          <CodeOutlined /> Code
                        </Option>
                        <Option value="liveStyle">
                          <SmileTwoTone /> Live Style
                        </Option>
                        <Option value="goal">
                          <FileDoneOutlined /> Goal
                        </Option>
                      </Select>
                    </Form.Item>
                  </InputBox>
                </Col>
                <Col span="8">
                  <InputBox>
                    <Form.Item name={["important"]} label="Importance">
                      <Select placeholder="Select Importance">
                        <Option value="code">Important and urgent</Option>
                        <Option value="liveStyle">Not Important</Option>
                      </Select>
                    </Form.Item>
                  </InputBox>
                </Col>
                <Col span="8">
                  <Form.Item
                    name={["veryImportant"]}
                    name="switch"
                    label="Very Important"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span="8">
                  <InputBox>
                    <Form.Item
                      name={["color"]}
                      name="radio-group"
                      label="Candy Color"
                    >
                      <Radio.Group defaultValue="a">
                        <Radio.Button className="red" value="a">
                          Red
                        </Radio.Button>
                        <Radio.Button className="green" value="b">
                          Green
                        </Radio.Button>
                        <Radio.Button className="blue" value="c">
                          Blue
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </InputBox>
                </Col>
              </Row>
            </Col>

            <Col span="8">
              <InputBox>
                <Form.Item
                  name={["date"]}
                  name="range-picker"
                  label="Start And End "
                >
                  <RangePicker />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="16">
              <InputBox>
                <Form.Item name={["goal"]} label="Desire to finish the job">
                  <Input />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="12">
              <InputBox>
                <Form.Item name={["benefit"]} label="Benefit">
                  <Input />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="12">
              <InputBox>
                <Form.Item name={["prize"]} label="Prize">
                  <Input />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="24">
              <InputBox>
                <Form.Item name={["note"]} label="Note">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>
              </InputBox>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ModalBox;
