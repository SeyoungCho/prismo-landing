import React, { useState } from "react";
import TextInput from "@components/ui/forms/input/TextInput"; // 컴포넌트의 경로에 맞게 수정하세요.
import EmailContactInput from "@components/ui/forms/input/EmailContactInput"; // 컴포넌트의 경로에 맞게 수정하세요.
import PhoneInput from "@components/ui/forms/input/PhoneInput"; // 컴포넌트의 경로에 맞게 수정하세요.
import TextAreaInput from "@components/ui/forms/input/TextAreaInput"; // 컴포넌트의 경로에 맞게 수정하세요.
import AuthBtn from "@components/ui/buttons/AuthBtn"; // 컴포넌트의 경로에 맞게 수정하세요.
import { toast } from "react-toastify";
interface ContactFormProps {
  formSubTitle: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ formSubTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        data[key] = value;
      }
    });

    fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTimeout(() => {
          if (res.isError) {
            console.log("실패했습니다", res.message);
            toast.error(
              <div style={{ fontSize: "14px" }}>
                <strong>문의를 접수하지 못했습니다.</strong>
                <br />
                <p style={{ color: "#e74c3c" }}>{res.message}</p>
              </div>,
            );
          } else {
            console.log("성공했습니다", res.message);
            toast.success(
              <div style={{ fontSize: "14px" }}>
                <strong>문의가 접수되었습니다.</strong>
                <br />
                빠른 시일 내에 답변드리도록 하겠습니다.
              </div>,
            );
          }
          setIsSubmitting(false);
        }, 500); // 0.5초 딜레이 추가
      });
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <TextInput id="hs-name-contacts" label="성명" name="name" />
        <TextInput
          id="hs-lastname-contacts"
          label="회사명/기관명"
          name="organization"
        />
        <EmailContactInput id="hs-email-contacts" placeholder="이메일" />
        <PhoneInput id="hs-phone-number" label="연락처" />
        <TextAreaInput
          id="hs-about-contacts"
          label="문의 내용"
          name="description"
        />
      </div>

      <div className="mt-4 grid">
        <AuthBtn title="메세지 보내기" disabled={isSubmitting} />
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formSubTitle}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
