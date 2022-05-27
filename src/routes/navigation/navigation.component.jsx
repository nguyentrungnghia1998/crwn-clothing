import { Outlet , Link} from "react-router-dom"
import { Fragment, useContext} from "react";
import { UserContext } from "../../contexts/user.context";
import {NavigationContainer,NavLinks,NavLink,LogoCotainer} from './navigation.styles'
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CardContext } from "../../contexts/card.context";
const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    const signOutHandler = async () => {
      await signOutUser();
    }

    const {isCardOpen} = useContext(CardContext)
    return (
    <Fragment>
      {/* <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
          <span className="nav-link" onClick={signOutHandler}> SIGN OUT </span>
          ): (
            <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
          )}
          <CartIcon/>
        </div> 
        {isCardOpen && <CartDropdown/>}
      </div>
      <Outlet /> */}
      <NavigationContainer>
        <LogoCotainer to='/'>
          <CrwnLogo className="logo"/>
        </LogoCotainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
          <NavLink as='span' onClick={signOutHandler}> 
            SIGN OUT 
          </NavLink>)
          :(
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCardOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>)
  }

export default Navigation;