import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <button
            onClick={() => {
              setSearchParams({
                sort: "price",
              });
            }}
          >
            가격순정렬
          </button>
          {/* 넘어온 Props를 통해 해당 값들을 불러온다. */}
          {products.map((newData) => {
            return (
              <Link to={`/products/${newData.index}`}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  {newData.product} <br />
                  {newData.price}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
