import React from 'react'
import styled from 'styled-components'

const ReadmePage = () => {
  return <Wrapper className="readme form">
    <h4>README</h4>
    <h5>Bạn có thể đăng nhập với tài khoản admin hoặc tạo tài khoản user bình thường để trải nghiệm các tính năng ứng với mỗi authority khác nhau:</h5>
    <div>
      <p>Bạn có thể vào register để đăng kí tài khoản cho user, hoặc dùng tài khoản đã được tạo sẵn sau (Bạn có thể mua Product bằng thẻ thanh toán điện tử quốc tế và xem được lịch sử mua hàng của mình, .....) : </p>
      <ul>
        <li>Email : user@gmail.com</li>
        <li>Password : secret</li>
      </ul>
    </div>
    <br />
    <div>
      <p>Nếu bạn muốn trải nghiệm những tính năng chỉ có trên role Admin thì hãy đăng nhập với tài khoản admin sau (Bạn có thể dùng được những tính năng của role User, Đồng thời bạn cũng có thể quản lý thêm, bớt, sửa, xóa Users, Products, Carts) : </p>
      <ul>
        <li>Email : loc@gmail.com</li>
        <li>Password : secret</li>
      </ul>
    </div>
    <h5>- Với những mục product backend thì toàn bộ sản phẩm sẽ được filter và sort dựa trên các query trên api (xử lý filter và sort bên backend nên thời gian sẽ có độ trễ hơn so với xử lý filter và sort bên frontend). </h5>
    <h5>- Với những mục product thông thường thì toàn bộ sản phẩm sẽ được lấy sau đó xử lý bên frontend. </h5>
  </Wrapper>
}

const Wrapper = styled.div`
  h4 {
    text-align: center;
    font-size: 25px;
  }
  h5 {
    font-size: 15px;
  }
  p {
    margin-bottom: 5px;
    font-size: 15px;
  }
  ul {
    margin-left: 20px;
  }
  li {
    font-size: 15px;
  }
`
export default ReadmePage
