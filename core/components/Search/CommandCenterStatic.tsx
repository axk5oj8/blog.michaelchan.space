import { css } from 'lib/stitches.config';
import Link from 'next/link';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { MAX_HEIGHT } from './constants';
import { Separator, Item, KBD } from './Styles';

const commandCenterStaticWrapper = css({
  backgroundColor: 'var(--colors-body)',
  maxHeight: `${MAX_HEIGHT}px`,
  overflowY: 'scroll',
});

const CommandCenterStatic = () => (
  <div className={commandCenterStaticWrapper()}>
    <Separator>Shortcuts</Separator>
    <Item data-nohover data-testid="shortcut" key="search-shortcut">
      <span>Command Center</span>
      <div>
        <KBD>⌘</KBD>
        <KBD>k</KBD>
      </div>
    </Item>
    <Item data-nohover data-testid="shortcut" key="theme-shortcut">
      <span>Switch Theme</span>
      <div>
        <KBD>ctrl</KBD>
        <KBD>t</KBD>
      </div>
    </Item>
    <Separator>Navigation</Separator>
    <Item data-testid="navigation" key="home-navigation">
      <Link href="/">
        <a>
          <Icon.Arrow size={4} />
          <span style={{ marginLeft: '20px' }}>Home</span>
        </a>
      </Link>
    </Item>
    <Item data-testid="navigation" key="design-navigation">
      <Link href="/design/">
        <a>
          <Icon.Arrow size={4} />
          <span style={{ marginLeft: '20px' }}>Design System</span>
        </a>
      </Link>
    </Item>
    <Separator>Links</Separator>
    <Item data-testid="link" key="email-link">
      <a
        href="mailto:hi@michaelchan.space"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Contact />
        <span style={{ marginLeft: '15px' }}>Contact</span>
        <VisuallyHidden as="p">
          Link opens your default mail client with my email address
          hi@michaelchan.space prefilled.
        </VisuallyHidden>
      </a>
    </Item>
    <Item data-testid="link" key="github-link">
      <a
        href="https://github.com/axk5oj8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Github />
        <span style={{ marginLeft: '15px' }}>Github</span>
        <VisuallyHidden as="p">
          Link redirects to my github profile https://github.com/axk5oj8.
        </VisuallyHidden>
      </a>
    </Item>
    <Item data-testid="link" key="rss-link">
      <Link href="/rss.xml" data-testid="rss-link" aria-label="RSS Feed">
        <a title="RSS Feed">
          <Icon.RSS />
          <span style={{ marginLeft: '15px' }}>RSS</span>
          <VisuallyHidden as="p">
            Link redirects to the rss.xml file.
          </VisuallyHidden>
        </a>
      </Link>
    </Item>
  </div>
);

export { CommandCenterStatic };
