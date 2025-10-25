import Logo from '../Logo' 
import HeaderList from './components/HeaderList'
import HeaderLinks from './components/HeaderLinks'
import HeaderFormFilters from './components/HeaderFormFilters'
import HeaderActions from './components/HeaderActions'
import HeaderListItem from './components/HeaderListItem'

const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src="/Logo_Favicon/Logo.png" alt="Logo" />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
            </HeaderList>
        </header>
    )
}

export default Header
