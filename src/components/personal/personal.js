import React from "react";
import "./personal.css";

function Personal() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="body">
      <div class="mp-pusher" id="mp-pusher">
        <div class="container_psn clearfix">
          <div class="v2-profile-user clearfix">
            <div class="v2-row">
              <div class="v2-content">
                <div class="v2-content__user">
                  <div class="title">
                    <p>Thông tin tài khoản</p>
                  </div>
                  <form class="form-signin" action="" method="post">
                    <input
                      name="_token"
                      type="hidden"
                      value="3LQiyGpUYiz1RZSYeMsy91a5RhkGJGKk4CFzCFL8"
                    />

                    <div class="form-group">
                      <label>Họ và tên</label>
                      <input
                        name="name"
                        class="name"
                        type="text"
                        placeholder="Họ và tên..."
                        value={user?.user || ""}
                      />
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        class="email"
                        type="text"
                        placeholder="Email..."
                        value={user?.email || ""}
                      />
                    </div>
                    <div class="form-group">
                      <label>Số điện thoại</label>
                      <input
                        name="phone"
                        class="phone"
                        type="text"
                        placeholder="(+84) 987654321"
                        value={user?.phone || ""}
                      />
                    </div>
                    <div class="form-group">
                      <label>Địa chỉ</label>
                      <input
                        name="address"
                        class="address"
                        type="text"
                        value={user?.address || ""}
                      />
                    </div>
                    <div class="form-group"></div>
                    <div class="form-group">
                      <label></label>
                      <a href="ChangePass">Thay đổi mật khẩu</a>
                    </div>
                    <div class="form-group">
                      <label></label>
                      <button>Cập nhật</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
