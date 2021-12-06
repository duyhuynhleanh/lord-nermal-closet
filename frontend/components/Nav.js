import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => {
  return (
    <NavStyles>
      <Link href='/products'>Sản phẩm</Link>
      <Link href='/sell'>Bán hàng</Link>
      <Link href='/orders'>Đơn hàng</Link>
      <Link href='/account'>Tài khoản</Link>
    </NavStyles>
  )
}

export default Nav
