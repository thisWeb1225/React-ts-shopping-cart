import Nav from "./Nav"

type PropsType = {
  viewCart: ConstrainBooleanParameters,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Watch Shop</h1>
        <div className="header__price-bar">
          <p>Total Items:</p>
          <p>Total Price:</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
    </header>
  )

  return (
    <div>Header</div>
  )
}

export default Header