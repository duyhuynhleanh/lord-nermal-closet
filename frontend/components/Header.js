import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: #00adb5;
  transform: skew(-7deg);
  a {
    color: #eeeeee;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, #222831);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, #222831);
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <div className='bar'>
        <Logo>
          <Link href='/'>Lord Nermal's Closet</Link>
        </Logo>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  )
}

export default Header