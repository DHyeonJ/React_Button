import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        {/* onClick를 이용해 로고를 클릭하면 main으로 돌아감 */}
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          로고
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {/* onClick를 이용해 로고를 클릭하면 Login페이지로 들어감 */}
          <div
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </div>
          {/* onClick를 이용해 로고를 클릭하면 회원가입페이지로 들어감 */}
          <div
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입
          </div>
        </div>
      </header>
      <Outlet />
      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          // 아래 css 추가
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
