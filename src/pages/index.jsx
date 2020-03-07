import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RollIcon from '@material-ui/icons/Theaters';
import TimelineIcon from '@material-ui/icons/Timeline';

import NavigationMenu, { Navigation, ToggleList, Subtitle } from '../components/layout/NavigationMenu';
import Panel from '../components/layout/Panel';
import Table from '../components/layout/Table';
import Navbar from '../components/layout/NavBar';

export default () => {
  return (
    <>
      <div className="content">
        <Navbar />
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
        <Panel className="account-table-panel">
          <Table />
        </Panel>
      </div>
      <style global jsx>{`
        .content {
          padding-left: 200px;
          padding-top: 40px;
        }
        .account-table-panel {
          top: 1rem;
          margin: 3rem;
          min-height: 800px;
        }
      `}</style>
    </>
  );
}
