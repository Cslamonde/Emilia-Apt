import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  Button,
} from '@carbon/react';
import { Theme } from '@carbon/react';
import { Login, UserAvatar } from '@carbon/icons-react';

const Headermain = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Theme theme="g100">
      <Header aria-label="Emilia">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        
        <HeaderName href="/">
          Emilia Apartments
        </HeaderName>
        <HeaderNavigation aria-label="Emilia">
          <HeaderMenuItem href="/Pricing">Pricing</HeaderMenuItem>
        <a href="./Authenticate.jsx"> <Button>Login</Button></a>

        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar />
      </Header>
      </Theme>
    )}
  />
);

export default Headermain;