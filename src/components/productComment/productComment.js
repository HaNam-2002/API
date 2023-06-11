import React from "react";
import "./productComment.css";
function productComment() {
  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher" style={{ marginTop: "0px" }}>
        <section className="container">
          <div className="product-content-box fix-content-right">
            <div className="product-content-left">
              <div className="comment-box" id="comment">
                <div className="comment-box-title">
                  <h4>Hỏi đáp &amp; đánh giá về sản phẩm</h4>
                </div>
                <div className="comment-vote">
                  <div className="comment-vote__star">
                    <div className="comment-vote__star-number">4.9/5</div>
                    <div className="comment-vote__star-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                    <div className="comment-vote__star-total">
                      <p>611 đánh giá và hỏi đáp</p>
                    </div>
                  </div>
                  <div className="comment-vote__percent">
                    <div className="comment-vote__percent-item">
                      <div className="comment-vote__percent-star">5 Sao</div>
                      <div className="comment-vote__percent-progress">
                        <span style={{ width: "94.43%" }}>
                          <span className="progress-hidden">compelete</span>
                        </span>
                      </div>
                      <div className="comment-vote__percent-number">577</div>
                    </div>
                    <div className="comment-vote__percent-item">
                      <div className="comment-vote__percent-star">4 Sao</div>
                      <div className="comment-vote__percent-progress">
                        <span style={{ width: "3.76%" }}>
                          <span className="progress-hidden">compelete</span>
                        </span>
                      </div>
                      <div className="comment-vote__percent-number">23</div>
                    </div>
                    <div className="comment-vote__percent-item">
                      <div className="comment-vote__percent-star">3 Sao</div>
                      <div className="comment-vote__percent-progress">
                        <span style={{ width: "0.81%" }}>
                          <span className="progress-hidden">compelete</span>
                        </span>
                      </div>
                      <div className="comment-vote__percent-number">5</div>
                    </div>
                    <div className="comment-vote__percent-item">
                      <div className="comment-vote__percent-star">2 Sao</div>
                      <div className="comment-vote__percent-progress">
                        <span style={{ width: "0%" }}>
                          <span className="progress-hidden">compelete</span>
                        </span>
                      </div>
                      <div className="comment-vote__percent-number">0</div>
                    </div>
                    <div className="comment-vote__percent-item">
                      <div className="comment-vote__percent-star">1 Sao</div>
                      <div className="comment-vote__percent-progress">
                        <span style={{ width: "0.98%" }}>
                          <span className="progress-hidden">compelete</span>
                        </span>
                      </div>
                      <div className="comment-vote__percent-number">6</div>
                    </div>
                  </div>
                  <div className="comment-vote__btn">
                    <p>Bạn có vấn đề cần tư vấn?</p>
                    <a id="show-comment-form" href="#">
                      Gửi câu hỏi
                    </a>
                  </div>
                </div>
                <div className="comment-form">
                  <form name="comment-form-client" action="">
                    <div className="product-rating">
                      <p>Bạn chấm sản phẩm này bao nhiêu sao?</p>
                      <input
                        name="rating"
                        id="rating"
                        type="hidden"
                        value="5"
                      />
                      <div className="rating-star">
                        <i
                          className="fa start fa-star"
                          aria-hidden="true"
                          data-value="1"
                        ></i>
                        <i
                          className="fa start fa-star"
                          aria-hidden="true"
                          data-value="2"
                        ></i>
                        <i
                          className="fa start fa-star"
                          aria-hidden="true"
                          data-value="3"
                        ></i>
                        <i
                          className="fa start fa-star"
                          aria-hidden="true"
                          data-value="4"
                        ></i>
                        <i
                          className="fa start fa-star"
                          aria-hidden="true"
                          data-value="5"
                        ></i>
                      </div>
                    </div>
                    <div className="comment-content-text">
                      <textarea
                        name="content"
                        id="content"
                        placeholder="Mời bạn để lại đánh giá,bình luận (Vui lòng nhập tiếng việt có dấu)"
                      >
                        Mời bạn để lại đánh giá,bình luận (Vui lòng nhập tiếng
                        việt có dấu)
                      </textarea>
                    </div>
                    <div className="comment-name-and-email">
                      <input
                        name="name"
                        id="name"
                        required=""
                        type="text"
                        placeholder="Họ và Tên..."
                        value=""
                      />
                      <input
                        name="phone"
                        id="phone"
                        required=""
                        type="text"
                        placeholder="Số siện thoại"
                        value=""
                      />
                      <input
                        name="email"
                        id="email"
                        required=""
                        type="email"
                        placeholder="Email"
                        value=""
                      />
                    </div>
                    <div className="comment-btn">
                      <button id="send_comment" type="button">
                        Gửi
                      </button>
                      <a id="close-comment-form" href="javascript:;">
                        <i className="fa fa-remove" aria-hidden="true"></i> Hủy
                      </a>
                    </div>
                  </form>
                </div>
                <div className="comment-search">
                  <input
                    name="search_comment"
                    id="search_comment"
                    type="text"
                    placeholder="Tìm theo nội dung, người gửi,..."
                  />
                </div>
                <div className="comment-list">
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <span className="avatar">h</span>
                    </div>
                    <div className="comment-info">
                      <div className="comment-title">
                        <div className="comment-name">
                          <p className="name">hoan</p>
                          <p className="phone">08678542xx</p>
                        </div>
                        <div className="comment-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="comment-content">còn hàng ko shop</div>
                      <div className="comment-footer">
                        <p className="comment-like" data-id="337144">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                          <span className="value_like">0</span>
                          <span className="action">Thích</span>
                        </p>
                        <p className="time">16:25 01/01/2022</p>
                      </div>
                    </div>
                    <div className="comment-child-list">
                      <div className="comment-child-item">
                        <div className="comment-avatar">
                          <img
                            className="avatar_thumb"
                            style={{ width: "40px", height: "40px" }}
                            alt=""
                            src="https://trungcapktktbinhdinh.edu.vn/phan-mem-quan-ly-the-thanh-vien/imager_2_2949_700.jpg"
                          />
                        </div>
                        <div className="comment-info">
                          <div className="comment-title">
                            <div className="comment-name">
                              <p className="name">08-Nguyễn Văn Hải</p>
                              <p className="admin">Quản trị viên</p>
                            </div>
                          </div>
                          <div className="comment-content">
                            Dạ sản phẩm này bên em đang trong quá trình về hàng,
                            em đã lưu thông tin của mình, hàng về em sẽ liên hệ
                            mình hoặc mình theo dõi Page khi có hàng về bên em
                            sẽ cập nhật ngay ạ. Mong sớm được phục vụ anh ạ!
                          </div>
                          <div className="comment-footer">
                            <p className="comment-like" data-id="337321">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              <span className="value_like">0</span>
                              <span className="action">Thích</span>
                            </p>
                            <p className="time">01:13 03/01/2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <span className="avatar">H</span>
                    </div>
                    <div className="comment-info">
                      <div className="comment-title">
                        <div className="comment-name">
                          <p className="name">Hiếu Lê</p>
                          <p className="phone">09316226xx</p>
                        </div>
                        <div className="comment-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="comment-content">100/100 ạ</div>
                      <div className="comment-footer">
                        <p className="comment-like" data-id="314539">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                          <span className="value_like">0</span>
                          <span className="action">Thích</span>
                        </p>
                        <p className="time">11:02 27/09/2021</p>
                      </div>
                    </div>
                    <div className="comment-child-list">
                      <div className="comment-child-item">
                        <div className="comment-avatar">
                          <img
                            className="avatar_thumb"
                            style={{ width: "40px", height: "40px" }}
                            alt=""
                            src="https://trungcapktktbinhdinh.edu.vn/phan-mem-quan-ly-the-thanh-vien/imager_2_2949_700.jpg"
                          />
                        </div>
                        <div className="comment-info">
                          <div className="comment-title">
                            <div className="comment-name">
                              <p className="name">Đỗ Thúy Mai</p>
                              <p className="admin">Quản trị viên</p>
                            </div>
                          </div>
                          <div className="comment-content">
                            Chúng tôi cám ơn anh đã ủng hộ và gửi đánh giá về
                            dịch vụ của chúng tôi, chúc anh một ngày tốt lành ạ
                          </div>
                          <div className="comment-footer">
                            <p className="comment-like" data-id="314804">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              <span className="value_like">0</span>
                              <span className="action">Thích</span>
                            </p>
                            <p className="time">04:56 28/09/2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <span className="avatar">L</span>
                    </div>
                    <div className="comment-info">
                      <div className="comment-title">
                        <div className="comment-name">
                          <p className="name">Lâm vĩ</p>
                          <p className="phone">09669268xx</p>
                        </div>
                        <div className="comment-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="comment-content">
                        Tết này có hàng lg v40 màu đỏ 95 ko shop
                      </div>
                      <div className="comment-footer">
                        <p className="comment-like" data-id="298747">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                          <span className="value_like">0</span>
                          <span className="action">Thích</span>
                        </p>
                        <p className="time">01:37 25/07/2021</p>
                      </div>
                    </div>
                    <div className="comment-child-list">
                      <div className="comment-child-item">
                        <div className="comment-avatar">
                          <img
                            className="avatar_thumb"
                            style={{ width: "40px", height: "40px" }}
                            alt=""
                            src="https://trungcapktktbinhdinh.edu.vn/phan-mem-quan-ly-the-thanh-vien/imager_2_2949_700.jpg"
                          />
                        </div>
                        <div className="comment-info">
                          <div className="comment-title">
                            <div className="comment-name">
                              <p className="name">Đỗ Mạnh Khôi</p>
                              <p className="admin">Quản trị viên</p>
                            </div>
                          </div>
                          <div className="comment-content">
                            Dạ, em chào anh ạ, hiện bên em chưa có thông tin
                            hàng về chính xác đợt Tết, em đã lưu thông tin của
                            mình, hàng về em sẽ liên hệ mình hoặc mình theo dõi
                            Page khi có hàng về bên em sẽ cập nhật ngay ạ. Mong
                            sớm được phục vụ anh ạ!
                          </div>
                          <div className="comment-footer">
                            <p className="comment-like" data-id="298833">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              <span className="value_like">0</span>
                              <span className="action">Thích</span>
                            </p>
                            <p className="time">17:37 25/07/2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <span className="avatar">N</span>
                    </div>
                    <div className="comment-info">
                      <div className="comment-title">
                        <div className="comment-name">
                          <p className="name">Nguyễn nam</p>
                          <p className="phone">09044945xx</p>
                        </div>
                        <div className="comment-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="comment-content">
                        Còn hàng ko shop ơi 0904494536
                      </div>
                      <div className="comment-footer">
                        <p className="comment-like" data-id="292886">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                          <span className="value_like">0</span>
                          <span className="action">Thích</span>
                        </p>
                        <p className="time">08:26 26/06/2021</p>
                      </div>
                    </div>
                    <div className="comment-child-list">
                      <div className="comment-child-item">
                        <div className="comment-avatar">
                          <img
                            className="avatar_thumb"
                            style={{ width: "40px", height: "40px" }}
                            alt=""
                            src="https://trungcapktktbinhdinh.edu.vn/phan-mem-quan-ly-the-thanh-vien/imager_2_2949_700.jpg"
                          />
                        </div>
                        <div className="comment-info">
                          <div className="comment-title">
                            <div className="comment-name">
                              <p className="name">Văn Toàn</p>
                              <p className="admin">Quản trị viên</p>
                            </div>
                          </div>
                          <div className="comment-content">
                            Dạ anh yên tâm, MobileCity chắc chắn sẽ về hàng sớm
                            nhất, em đã lưu thông tin của mình rồi, ngay khi
                            hàng về em sẽ liên hệ lại mình sớm nhất ạ &lt;3
                          </div>
                          <div className="comment-footer">
                            <p className="comment-like" data-id="293920">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              <span className="value_like">0</span>
                              <span className="action">Thích</span>
                            </p>
                            <p className="time">05:25 04/07/2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="comment-avatar">
                      <span className="avatar">T</span>
                    </div>
                    <div className="comment-info">
                      <div className="comment-title">
                        <div className="comment-name">
                          <p className="name">Trần Đoàn Thao</p>
                          <p className="phone">09744880xx</p>
                        </div>
                        <div className="comment-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="comment-content">Ở HN còn hàng ko!</div>
                      <div className="comment-footer">
                        <p className="comment-like" data-id="291299">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                          <span className="value_like">1</span>
                          <span className="action">Thích</span>
                        </p>
                        <p className="time">02:09 18/06/2021</p>
                      </div>
                    </div>
                    <div className="comment-child-list">
                      <div className="comment-child-item">
                        <div className="comment-avatar">
                          <img
                            className="avatar_thumb"
                            style={{ width: "40px", height: "40px" }}
                            alt=""
                            src="https://trungcapktktbinhdinh.edu.vn/phan-mem-quan-ly-the-thanh-vien/imager_2_2949_700.jpg"
                          />
                        </div>
                        <div className="comment-info">
                          <div className="comment-title">
                            <div className="comment-name">
                              <p className="name">Văn Toàn</p>
                              <p className="admin">Quản trị viên</p>
                            </div>
                          </div>
                          <div className="comment-content">
                            Dạ em chào anh ạ! Em đã liên hệ vào số điện thoại
                            anh để lại để hỗ trợ anh rồi ạ. Em cảm ơn anh đã ủng
                            hộ MobileCity ạ!
                          </div>
                          <div className="comment-footer">
                            <p className="comment-like" data-id="291339">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              <span className="value_like">0</span>
                              <span className="action">Thích</span>
                            </p>
                            <p className="time">04:08 18/06/2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-pagination">
                  <ul id="pagination"></ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default productComment;
