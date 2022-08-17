import { useState } from "react";
import Image from "next/image";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  notification,
  Space,
  message,
} from "antd";
import "antd/dist/antd.css";
import * as emailjs from "emailjs-com";
import * as css from "./styles";

const SUCCESS = "success";
const FAIL = "error";

const Contact = () => {
  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openNotification = (type) => {
    notification[type]({
      message: type === SUCCESS ? "Berhasil" : "Gagal",
      description:
        type === SUCCESS
          ? "Email berhasil dikirim, saya akan segera membalasnya. Terima kasih."
          : "Maaf, email gagal dikirim, coba lagi beberapa menit kemudian ya.",
    });
  };

  const clearData = () => {
    setName("");
    setEmail("");
    setProject("");
  };

  const validateData = () => {
    if (name.length && email.length && project.length) {
      return true;
    }
    message.warning("Please fill all data before send an email");
    return false;
  };

  const handleInputName = ({ target }) => {
    const { value } = target || {};
    setName(value);
  };

  const handleInputEmail = ({ target }) => {
    const { value } = target || {};
    setEmail(value);
  };

  const handleInputProject = ({ target }) => {
    const { value } = target || {};
    setProject(value);
  };

  const handleClickSend = () => {
    if (validateData()) {
      let templateParams = {
        from_name: name,
        to_name: "Adek Trisno",
        from_email: email,
        subject: "Adektris.com Message",
        message: project,
      };

      setIsLoading(true);

      emailjs
        .send(
          "service_g9fgbis",
          "template_z5ew66u",
          templateParams,
          "user_5OXYTmtOqlqk3AlrISml6"
        )
        .then((response) => {
          const status = response?.status;

          if (status === 200) {
            openNotification(SUCCESS);
            clearData();
          } else {
            openNotification(FAIL);
          }
          setIsLoading(false);
        })
        .catch(() => {
          openNotification(FAIL);
          setIsLoading(false);
        });
    }
  };

  return (
    <div id="contact" className={css.contentWrapper}>
      <div className={css.contentContact}>
        <div className={css.contentLeft}>
          <Form form={form}>
            <Row className={css.mb16} gutter={8}>
              <Col span={12}>
                <Form.Item>
                  <Input
                    placeholder="Full Name*"
                    value={name}
                    onInput={handleInputName}
                    required
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onInput={handleInputEmail}
                    required
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={css.mb16}>
              <Col span={24}>
                <Form.Item>
                  <Input.TextArea
                    placeholder="Please explain a bit about your project in here*"
                    rows={5}
                    value={project}
                    onInput={handleInputProject}
                    required
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Space>
                <Button
                  className={css.buttonSecondary}
                  onClick={handleClickSend}
                  loading={isLoading}
                >
                  Send Email
                </Button>
                <span>Or</span>
                <Button className={css.buttonPrimary}>
                  <a
                    href="https://api.whatsapp.com/send?phone=089637123913"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat via Whatsapp
                  </a>
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
        <div className={css.contentRight}>
          <p className={css.contentTitle}>
            <span className={css.contentTitleSmall}>Let's Work Together.</span>
            <br />
            <span className={css.contentTitleLarge}>Drop Me a Line</span>
          </p>
          <div className={css.contentImage}>
            <Image src="/images/portrait.png" layout="fill" />
          </div>
        </div>
      </div>
      <div className={css.contentFooter}>
        <Image src="/images/background-white.png" layout="fill" />
      </div>
    </div>
  );
};

export default Contact;
