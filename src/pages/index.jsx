import React from 'react';

// import NavbarPage from '../components/layout/NavBar';
import NavigationMenu, { Navigation, ToggleList, Subtitle } from '../components/layout/NavigationMenu';
import Table from '../components/layout/Table';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RollIcon from '@material-ui/icons/Theaters';
import TimelineIcon from '@material-ui/icons/Timeline';

export default () => {
  return (
    <>
      <div className="content">
        {/* <NavbarPage /> */}
        <NavigationMenu>
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
          <ToggleList title="リスト">
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
        </NavigationMenu>
        <Table />
      </div>
      <style global jsx>{`
      .content {
        padding-left: 200px;
      }
      `}</style>
    </>
  );
}
