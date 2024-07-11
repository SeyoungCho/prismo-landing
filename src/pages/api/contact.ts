import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  let organization = formData.get("organization");
  if (organization === null || organization === "") {
    organization = "입력하지 않음";
  }
  const phone = formData.get("phone");
  const description = formData.get("description");
  // Validate the data - you'll probably want to do more than this
  if (!name) {
    return new Response(
      JSON.stringify({
        isError: true,
        message: "성명을 입력하세요",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!email) {
    return new Response(
      JSON.stringify({
        isError: true,
        message: "이메일을 입력하세요",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!phone) {
    return new Response(
      JSON.stringify({
        isError: true,
        message: "연락처를 입력하세요",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!description) {
    return new Response(
      JSON.stringify({
        isError: true,
        message: "문의 내용을 입력하세요",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }
  // Do something with the data, then return a success response
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "프리즈모버스 솔루션 <contact-forwarder@prismoverse.com>",
    reply_to: email as string,
    to: ["support@prismoverse.com"],
    subject: `프리즈모버스 솔루션 - ${name}님의 문의가 도착하였습니다.`,
    html: `<h1>${name}님의 문의</h1>
          <p>회사명/기관명: ${organization}</p>
          <p>연락처: ${phone}</p>
          <p>이메일: ${email}</p>
          <p>문의내용: ${description}</p>
        `,
  });

  if (error) {
    console.error({ error });
    return new Response(
      JSON.stringify({
        isError: true,
        message: `서버가 응답하지 않습니다.`,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  console.log({ data });
  return new Response(
    JSON.stringify({
      isError: false,
      message: "Success!",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
};
