import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import { BrowserRouter, Link } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import Join from "./pages/Join";

function App() {
  // 초기값을 받아주고 나중에 props로 넘겨준다.
  const [products] = useState([
    {
      index: 1,
      product: "멋진 바지",
      price: "20000원",
      option: [
        {
          key: 0,
          value: "선택하세요...",
        },
        {
          key: 1,
          value: "28",
        },
        {
          key: 2,
          value: "30",
        },
        {
          key: 3,
          value: "32",
        },
      ],
      likes: "100개",
    },
    {
      index: 2,
      product: "멋진 셔츠",
      price: "10000원",
      option: [
        {
          key: 0,
          value: "선택하세요...",
        },
        {
          key: 1,
          value: "small",
        },
        {
          key: 2,
          value: "medium",
        },
        {
          key: 3,
          value: "large",
        },
      ],
      likes: "200개",
    },
    {
      index: 3,
      product: "멋진 신발",
      price: "30000원",
      option: [
        {
          key: 0,
          value: "선택하세요...",
        },
        {
          key: 1,
          value: "230",
        },
        {
          key: 2,
          value: "240",
        },
        {
          key: 3,
          value: "250",
        },
        {
          key: 4,
          value: "260",
        },
        {
          key: 5,
          value: "270",
        },
      ],
      likes: "300개",
    },
  ]);
  return (
    //  브라우저에서 라우터를 사용하기 위해 사용한다.
    <BrowserRouter>
      {/* 라우터들을 사용하기 위해서 선언함 */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main products={products} />} />
          {/* 다른 페이지에서 사용할 수 있도록 products를 props로 넘겨준다. */}
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={<Product products={products} option={products.option} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>
        {/* 맞지 않은 url이 들어오면 없는 페이지라고 보여주고 홈으로 이동한다. */}
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
