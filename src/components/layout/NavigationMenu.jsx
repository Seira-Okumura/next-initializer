import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';
import Link from 'next/link';
import RemoveIcon from '@material-ui/icons/Remove';
import RollIcon from '@material-ui/icons/Theaters';
import TimelineIcon from '@material-ui/icons/Timeline';
import clsx from 'clsx';

export default () => {
  return (
    <SideMenu>
      <Navigation
        Icon={HomeOutlinedIcon}
        href="/home"
        className="nav1-text nav1-active"
        title="ホーム"
      />
      <ToggleList
        Icon={BallotOutlinedIcon}
        title="リスト"
      >
        <Subtitle
          key="1"
          subtitle="個人名簿">
          <Navigation
            Icon={HomeOutlinedIcon}
            href="/home"
            key="1"
            title="ホーム"
          />
          <Navigation
            Icon={TimelineIcon}
            href="/home"
            key="2"
            title="タイトル２"
          />
          <Navigation
            Icon={RollIcon}
            href="/home"
            key="3"
            title="タイトル３"
          />
          <Navigation
            Icon={RollIcon}
            href="/home"
            key="4"
            title="タイトル４"
          />
        </Subtitle>
        <Subtitle
          key="2"
          subtitle="企業名簿">
          <Navigation
            Icon={HomeOutlinedIcon}
            href="/home"
            key="1"
            title="ホーム"
          />
          <Navigation
            Icon={TimelineIcon}
            href="/home"
            key="2"
            title="タイトル２"
          />
          <Navigation
            Icon={RollIcon}
            href="/home"
            key="3"
            title="タイトル３"
          />
          <Navigation
            Icon={RollIcon}
            href="/home"
            key="4"
            title="タイトル４"
          />
        </Subtitle>
      </ToggleList>
      <Navigation
        Icon={RollIcon}
        href="/home"
        key="3"
        title="タイトル３"
      />
      <Navigation
        Icon={RollIcon}
        href="/home"
        key="4"
        title="タイトル４"
      />
    </SideMenu>
  );
}

export const SideMenu = ({
  children,
  name,
}) => {
  return (
    <>
      <ul className="side-menu">
        {React.Children.toArray(children)}
      </ul>
      <style global jsx>{`
        .side-menu-title {
          text-align: center;
          font-size: 2.4rem;
        }
        .side-menu {
          top: 52px;
          position: absolute;
          -webkit-transform: translateZ(0) scale(1,1);
          -webkit-transition: width .2s linear;
          background: #fff;
          bottom: 0;
          box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
          height: 100%;
          left: 0;
          padding: 0;
          z-index: 100;
          width: 200px;
          font-size: 14px;
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
          background-color: #dfedff;
          color: #4b72dd;
        }
        .side-menu .togglelist {
          height: 4rem;
          width: 200px;
          justify-content: space-between;
          background-color: #eee;
          color: #777;
          display: flex;
          align-items: center;
          padding: .5rem 1rem;
        }
        .togglelist:hover {
          background-color: #dfedff;
          color: #4b72dd;
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
          font-size: 18px;
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
        .subtitle {
          font-size: 10px;
        }
        .subtitle .MuiSvgIcon-root {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export const ToggleList = ({
  Icon,
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
        className="togglelist"
        onClick={onClick}
      >
        <div>
          {Icon && <Icon />}
          {title}
        </div>
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
        className="side-menu-navigation subtitle"
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
