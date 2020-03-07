import * as React from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from 'next/link';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';

const NavigationMenu = ({
  children,
  name,
}) => {
  return (
    <>
      <ul className="side-menu">
        <li className="side-menu-title">
          <span className="nav-text current-name">スマート選挙</span>
        </li>
        {React.Children.toArray(children)}
      </ul>
      <style global jsx>{`
        .side-menu-title {
          text-align: center;
          font-size: 2.4rem;
        }
        .side-menu {
          position: absolute;
          -webkit-transform: translateZ(0) scale(1,1);
          -webkit-transition: width .2s linear;
          background: #fff;
          bottom: 0;
          box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
          height: 100%;
          left: 0;
          top: 0;
          padding: 0;
          z-index: 100;
          width: 200px;
        }
        .side-menu .side-menu-navigation {
          height: 4rem;
          width: 200px;
          display: flex;
          align-items: center;
          color: #777;
          transition: background-color .2s;
        }
        .side-menu .side-menu-navigation:hover {
          background-color: #b1cefc;
          color: #3d88ff;
        }
        .togglelist {
          justify-content: space-between;
          font-size: 14px;
        }
        .togglelist-icon {
          font-size: 14px;
        }
        .togglelist-border {
          height: 1px;
          width: 180px;
          margin: auto;
          box-shadow:0 -1px 1px #3d88ff;
        }
        .side-menu .nav-link {
          align-items: center;
          color: inherit;
          display: flex;
          text-decoration: none;
        }
        .side-menu .MuiSvgIcon-root {
          font-size: 14px;
          width: 30px;
        }
        .side-menu :global(.nav-text) {
          width: 100%;
        }
        .side-menu-current {
          align-items: center;
          display: flex;
          font-size: 2rem;
          height: 5.2rem;
          width: 220px;
        }
      `}</style>
    </>
  );
};

export const ToggleList = ({
  title,
  children,
}) => {
  const [isExpand, setExpand] = React.useState(false);
  const onClick = React.useCallback(
    () => setExpand(prev => !prev),
    [setExpand]
  );
  return (
    <>
      <li
        className="side-menu-navigation togglelist nav-link"
        onClick={onClick}
      >
        {title}
        <span className="togglelist-icon">
          {isExpand ? <RemoveIcon /> : <AddIcon />}
        </span>
      </li>
      {isExpand && children}
      {isExpand && <div className="togglelist-border" />}
    </>
  )
}

export const Subtitle = ({
  children,
  subtitle,
}) => {
  const [isExpand, setExpand] = React.useState(false);
  const onClick = React.useCallback(
    () => setExpand(prev => !prev),
    [setExpand]
  );
  return (
    <>
      <li
        className="side-menu-navigation"
        onClick={onClick}>
        <span className="togglelist-icon">
          {isExpand ? <ExpandMore /> : <ArrowForwardIosIcon />}
        </span>
        <span className="nav-text">{subtitle}</span>
      </li>
      {isExpand && children}
      {isExpand && <div className="togglelist-border" />}
    </>
  );
};

export const Navigation = ({
  Icon = EmptyIcon,
  as,
  className = '',
  href,
  style,
  title,
}) => {
  return (
    <li
      className={clsx('side-menu-navigation', className)}
      style={style || {}}>
      <Link href={href} as={as}>
        <a className="nav-link">
          <Icon />
          <span className="nav-text">{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavigationMenu;
