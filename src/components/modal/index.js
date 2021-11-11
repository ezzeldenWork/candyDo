import React, {useContext, useEffect, useState} from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Switch,
  Radio,
  DatePicker,
  Row,
  Button,
  Col,
  Upload,
} from "antd";
import {
  CodeOutlined,
  SmileTwoTone,
  FileDoneOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import {InputBox} from "./style";
import {ContextApi} from "../../context/context_api";
import uuid from "uuid/dist/v4";
import {resolvePreset} from "@babel/core";

const ModalBox = ({visible, onCancel, setVisible}) => {
  const {Option} = Select;
  const {RangePicker} = DatePicker;
  const [date, setDate] = useState([]);

  const [dodo, setDodo] = useContext(ContextApi);
  const [form] = Form.useForm();
  const onFinish = (val) => {
    setDodo(() => [
      ...dodo,
      {
        id: uuid(),
        imge: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        doName: val.taskName,
        important: val.importantType,
        very: val.switch,
        typeDodo: val.type,
        color: val.color,
        start: date[0],
        end: date[1],
        desire: val.goal,
        benefit: val.benefit,
        prize: val.prize,
        note: val.note,
      },
    ]);
    form.resetFields();
    onCancel();
  };

  const onFinishFailed = (errorInfo) => {};

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onChange = (val, dateString) => {
    setDate(dateString);
  };

  const config = {
    rules: [
      {
        required: true,
        message: "Please Dont Let Empty!",
      },
    ],
  };

  return (
    <>
      <Modal
        title="Add New Candy"
        centered
        visible={visible}
        footer={null}
        onCancel={onCancel}
        width={1000}
      >
        <Form
          id="category-editor-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
          // autoComplete="off"
        >
          <Row gutter={[16, 6]} align="bottom">
            <Col span="8">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" listType="picture">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag Image to this area to upload
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Col>
            <Col span="16">
              <Row gutter={[16, 6]} align="bottom">
                <Col span="18">
                  <InputBox>
                    <Form.Item {...config} name={["taskName"]} label="Name">
                      <Input />
                    </Form.Item>
                  </InputBox>
                </Col>
                <Col span="6">
                  <InputBox>
                    <Form.Item {...config} name={["type"]} label="Type">
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
                    <Form.Item
                      {...config}
                      name={["importantType"]}
                      label="Importance"
                    >
                      <Select placeholder="Select Importance">
                        <Option value={true}>Important and urgent</Option>
                        <Option value={false}>Not Important</Option>
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
                    <Form.Item {...config} name={["color"]} label="Candy Color">
                      <Radio.Group defaultValue="a">
                        <Radio.Button className="red" value="red">
                          Red
                        </Radio.Button>
                        <Radio.Button className="green" value="green">
                          Green
                        </Radio.Button>
                        <Radio.Button className="blue" value="blue">
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
                  {...config}
                  name={["date"]}
                  label="Start And End "
                  format="YYYY/MM/DD"
                >
                  <RangePicker onChange={onChange} />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="16">
              <InputBox>
                <Form.Item
                  {...config}
                  name={["goal"]}
                  label="Desire to finish the job"
                >
                  <Input />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="12">
              <InputBox>
                <Form.Item {...config} name={["benefit"]} label="Benefit">
                  <Input />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="12">
              <InputBox>
                <Form.Item {...config} name={["prize"]} label="Prize">
                  <Input />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="24">
              <InputBox>
                <Form.Item {...config} name={["note"]} label="Note">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>
              </InputBox>
            </Col>
            <Col span="24">
              <InputBox>
                <div className="formFooter">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </InputBox>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ModalBox;
