/** @format */

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  FloatingLabel,
  Form,
  Image,
} from "react-bootstrap";
import { ProductDetailService } from "../../services/ProductDetailService";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useHistory, useParams } from "react-router";

import Banner from "../Images/Banner3.jpeg";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import Rate from "../components/Rate/Rate";
import { commentService } from "../../services/commentService";
import UserImage from "../Images/user.jpg";
import { customer } from "../../services/customer";

export default function ProductDetail() {
  const [rating, setRating] = useState(0);
  const [moreComment, setMoreComment] = useState(5);
  const [comment, setComment] = useState("");
  const userId = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  let { id } = useParams();
  const history = useHistory();
  const Cart = () => {
    history.push("/cart");
  };
  const [data, setData] = useState([]);
  const [athur, setathur] = useState();
  const [customerList, setCustomer] = useState([]);
  const [count, setCount] = useState(1);
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    getComment();
    getCustomer();
  }, []);
  function getData() {
    ProductDetailService.getDetail(id).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
        console.log(response.data.authors.length);
      }
    });
  }
  function getComment() {
    commentService.getComment().then((res) => {
      var arrayComment = [];
      for (const key in res.data) {
        if (res.data[key].bookId == id) {
          arrayComment.push(res.data[key]);
        }
      }
      setCommentList(arrayComment);
    });
  }
  function editSetCount(e) {
    const x = Number(e.target.value);
    isNaN(x) ? setCount(1) : setCount(x);
  }
  const addToCart = (item) => {
    Swal.fire({
      title: "Do you want to buy this book?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "ADDTOCART",
          newItem: item,
          quantity: count,
        });
        Swal.fire("Buy!", "See in your cart.", "success");
      }
    });
  };
  const handleComment = () => {
    var dataComment = {
      id: 0,
      bookId: data.id.toString(),
      bookName: data.name,
      comment: comment,
      vote: rating,
      khachHangId: parseInt(userId),
    };
    commentService.createComment(dataComment).then((res) => {
      setRating(0);
      setComment("");
      getComment();
    });
  };
  const handleMoreComment = () => {
    setMoreComment(moreComment + 3);
  };
  async function handleUpdateComent(commentData) {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Comment",
      inputPlaceholder: "your comment",
      showCancelButton: true,
    });
    if (text) {
      var dataComment = {
        id: commentData.id,
        bookId: commentData.bookId,
        bookName: commentData.name,
        comment: text,
        vote: commentData.vote,
        khachHangId: parseInt(userId),
      };
      console.log(dataComment);
      commentService.updateComment(dataComment).then((res) => {
        getComment();
      });
    }
  }
  function handleDelete(item) {
    commentService.deleteComment(item.id).then((res) => {
      getComment();
    });
  }
  function getCustomer() {
    customer.getlist().then((res) => {
      setCustomer(res.data);
    });
  }
  return (
    <div>
      <div className="product-detail-page">
        <div className="container height640">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Book detail</Breadcrumb.Item>
          </Breadcrumb>
          <div className="box-detail grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="image">
                <div className="image_3_2">
                  <Image src={data?.imagePath} alt="banner" />
                </div>
              </div>
            </div>
            <div className="product-information mt-5">
              <h3 className="name text-center text-md-left">Tên sách :</h3>
              <h3 className="name2 text-center text-md-center mt-4">
                {data?.name}
              </h3>
              <h3 className="price text-center text-md-left mt-3">
                Tác giả : {data.authors?.length && data.authors[0].name}
              </h3>
              <h6 className="author text-center text-md-left mt-2">
                Mã sách :{data?.bookCode}
              </h6>
              <h6 className="author text-center text-md-left mt-3">
                Thể loại : {data.types?.length && data.types[0].name}
              </h6>
              <div className="radio-price">
                <div className="price-number pl-2">
                  <p>
                    Đơn giá : <strong>{data.price}</strong> đ
                  </p>
                </div>
              </div>

              <div className="radio-color"></div>
              <div className="box-promotion font-14">
                <div className="promotion-title w-75 mt-4">
                  số lượng hiện tại: {data.inventory}
                </div>
                <div className="promotion-title w-75 mt-2">
                  <div class="pt-3 bd-highlight">
                    <div className="quantity d-flex justify-content-center align-items-center ">
                      <button
                        className="d-flex justify-content-center align-items-center btn-background"
                        disabled={count <= 1 ? true : false}
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      >
                        <div className="btn-up-down ">&#8722;</div>
                      </button>
                      <input
                        className="number text-center"
                        type="tel"
                        value={count}
                        readOnly={true}
                        onChange={(e) => editSetCount(e)}
                      />
                      <button
                        className="d-flex justify-content-center align-items-center btn-background"
                        disabled={count >= data.inventory}
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <div className="btn-up-down ">&#43;</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="r200"
                className="btn-square w-75 btn-buy-now mt-4"
                onClick={() => {
                  addToCart(data);
                }}
                disabled={data.inventory === 0}
              >
                <h3 className="uppercase font-20">Mua ngay</h3>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-info mt-5">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="product-features col-span-12 md:col-span-12">
              <div className="mt-5">
                <h3 className="font-20  font-medium ml-3 mb-4">
                  O Đánh giá chi tiết : Nhật kí cầu nguyện hàng ngày
                </h3>
                <br />
                <p className="pl-5"> {data.description}</p>
              </div>
            </div>
          </div>
          <div className="box-answer-comment mt-5">
            <p className="font-20 font-medium">
              Bình luân & Đánh giá về sản phẩm
            </p>
            <>
              <FloatingLabel controlId="floatingTextarea" className="relative">
                ĐÁNH GIÁ:{" "}
                <Rate id={data.id} rating={rating} setRating={setRating}></Rate>
                <Form.Control
                  as="textarea"
                  placeholder="Bình luận"
                  style={{ height: "80px" }}
                  className="textarea-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  variant="r200"
                  className="btn-evaluate btn-square btw-130 col-4 col-md-2"
                  onClick={handleComment}
                >
                  <p className="font-13">Gửi đánh giá</p>
                </Button>
              </FloatingLabel>
            </>
            {commentList.map((item, index) => {
              return (
                index < moreComment && (
                  <div
                    className="box-c-user-comment grid grid-cols-12 gap-6"
                    key={index}
                  >
                    <div className="avatar col-span-12 md:col-span-2 lg:col-span-1">
                      <Image alt="userImage" src={UserImage} />
                    </div>
                    <div className="c-comment-box__content col-span-12 md:col-span-10 lg:col-span-11">
                      <p className="font-18 m-0">
                        {item.khachHangId
                          ? customerList?.find(x => x.id == 12)?.name
                          : "Ẩn danh"}
                        <span className="font-14 text-g200 ml-2">{`${
                          Math.floor(Math.random() * 60) + 1
                        } phút trước`}</span>
                      </p>
                      <Rate rating={item.vote} disabled={true} />
                      <p className="font-16 text-g100 m-0">{item.comment}</p>
                    </div>
                    {item.khachHangId == userId && (
                      <>
                        <div className="d-flex justify-content-begin align-items-center font-16">
                          <p
                            className="mx-2 text-info cursor-pointer"
                            onClick={() => {
                              handleUpdateComent(item);
                            }}
                          >
                            Edit
                          </p>
                          <p
                            className="mx-2 text-info cursor-pointer"
                            onClick={() => handleDelete(item)}
                          >
                            Delete
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )
              );
            })}
            <span
              onClick={handleMoreComment}
              className="ml-4 font-light text-info"
              style={{ cursor: "pointer", fontSize: "15px" }}
            >
              more comment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
