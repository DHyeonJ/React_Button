import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  // 구조분해 할당으로 useParams중에 id만 불러온다.
  const { id } = useParams();
  // 나중에 select 원하는 데이터를 누르면 화면에 보일 수 있도록 해준다.
  const [content, setContent] = useState("");

  // select에서 누른거를 option에서 바뀌도록 한다.
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* props로 넘어온 데이터를 map으로 돌려서 상세 정보들을 가져온다. */}
          {products.map((newData) => {
            //  props로 넘어온 index와 위에서 구조분해할당으로 받아온 id값이랑 비교했을 때 같은 상세정보를 불러온다.
            if (newData.index == id)
              return (
                <>
                  <div
                    style={{
                      width: "200px",
                      height: "240px",
                      backgroundColor: "#068FFF",
                    }}
                  >
                    상품 : {newData.product}
                  </div>
                  <div>
                    <h3>가격: {newData.price}</h3>
                    <h3>좋아요: {newData.likes}</h3>
                    <h3>구매옵션</h3>
                    <select
                      style={{
                        width: "100px",
                      }}
                      onChange={onChangeHandler}
                      value={content}
                    >
                      {/* map을 한 번 더 돌려서 options안에 있는 key value값을 가져오고 select에 value 값을 보여준다. */}
                      {newData.option.map((item) => {
                        return (
                          <option key={item.key} value={item.value}>
                            {item.value}
                          </option>
                        );
                      })}
                    </select>
                    {/* 삼항연산자를 통해 select에서 value값이 content로 저장되는데 그 값이 "선택하세요... 면 밑에 구매 옵션이 뜨지 않게 한다." */}
                    {content && content !== "선택하세요..." && (
                      <p>구매옵션 : {content}</p>
                    )}
                  </div>
                </>
              );
          })}
        </div>
      </div>
    </>
  );
}
