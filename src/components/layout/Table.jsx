import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBBtnGroup } from 'mdbreact';
import { MDBProgress } from 'mdbreact';


export default (props) => {
  const columns = [
    {
      label: 'ユーザー名',
      field: 'username',
      sort: 'asc'
    },
    {
      label: 'メールアドレス',
      field: 'mail',
      sort: 'asc'
    },
    {
      label: '管理権限',
      field: 'admin',
      sort: 'asc'
    },
    {
      label: '二段階認証',
      field: 'authentication',
      sort: 'asc'
    },
    {
      label: '詳細設定',
      field: 'setting',
      sort: 'asc'
    },
    {
      label: '--',
      field: 'nothing',
      sort: 'asc'
    }
  ];

  const rows_rounded_btn = [
    {
      'username': 'PFサポート',
      'mail': 'info@peacefactory.co.jp',
      'admin': <MDBBtn rounded className="btn-rounded" id="btn-admin">管理者</MDBBtn>,
      'authentication':
        <MDBBtnGroup>
          <MDBBtn id="btn-auth-active" size="sm">ON</MDBBtn>
          <MDBBtn id="btn-auth" size="sm">OFF</MDBBtn>
        </MDBBtnGroup>,
      'setting': <MDBBtn outline className="btn-editaccount">編集</MDBBtn>,
      'nothing': ''
    },
    {
      'username': 'Shiori Sato',
      'mail': 'shiori.sato@peacefactory.co.jp',
      'admin': <MDBBtn rounded className="btn-rounded" id="btn-aaa">AAA</MDBBtn>,
      'authentication':
        <MDBBtnGroup>
          <MDBBtn id="btn-auth" size="sm">ON</MDBBtn>
          <MDBBtn id="btn-auth-active" size="sm">OFF</MDBBtn>
        </MDBBtnGroup>,
      'setting': <MDBBtn outline className="btn-editaccount">編集</MDBBtn>,
      'nothing': ''
    },
    {
      'username': 'Yuki Higashimori',
      'mail': 'y.higashimori@peacefactory.co.jp',
      'admin': <MDBBtn rounded className="btn-rounded" id="btn-bbb">BBB</MDBBtn>,
      'authentication':
        <MDBBtnGroup>
          <MDBBtn id="btn-auth-active" size="sm">ON</MDBBtn>
          <MDBBtn id="btn-auth" size="sm">OFF</MDBBtn>
        </MDBBtnGroup>,
      'setting': <MDBBtn outline className="btn-editaccount">編集</MDBBtn>,
      'nothing': ''
    }
  ];

  return (
    <>
      <div className="account-table-header" style={{display: "flex"}}>
        <MDBBtn className="btn-addaccount" size="sm">アカウント新規作成</MDBBtn>
        <div style={{display: "flex", margin: "0.375rem 0"}}>
          <span style={{margin: "auto 5px auto 0"}}>ログインアカウント数</span>
          <MDBProgress
            material
            value={60}
            height="25px"
            className="progress-ligin"
          >
            3人/5人
          </MDBProgress>
        </div>
      </div>
      <MDBTable btn striped>
        <MDBTableHead columns={columns} />
        <MDBTableBody rows={rows_rounded_btn} />
      </MDBTable>
      <style jsx>{`
        .account-table-header {
          display: flex;
          justify-content: space-between;
          padding: 4px;
        }
      :global(#btn-auth-active) {
        background-color: #48c9bf !important;
        width: 4rem;
        padding: 0.5rem !important;
      }
      :global(#btn-auth) {
        background-color: #96d9d4 !important;
        width: 4rem;
        padding: 0.5rem !important;
      }
      :global(.btn) {
        padding: 0.5rem 1rem !important;
        border-radius: 0.2rem;
      }
      :global(table.table td) {
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
      }
      :global(table thead th) {
        border-top: 2px solid #dee2e6 !important;
      }
      :global(.btn-addaccount) {
        background-color: #5b82ed !important;
        margin: 0.375rem 0;
      }
      :global(.btn-rounded) {
        border-radius: 10em;
      }
      :global(td .btn-default) {
        width: 5rem;
      }
      :global(#btn-admin) {
        background-color: #29c979 !important;
        margin: 0.375rem 0;
      }
      :global(#btn-aaa) {
        background-color: #3bbedd !important;
        margin: 0.375rem 0;
      }
      :global(#btn-bbb) {
        background-color: #f4d427 !important;
        margin: 0.375rem 0;
      }
      :global(.progress-ligin) {
        width: 13rem;
      }
      :global(.progress) {
        background-color: #c7c7c7;
      }
      :global(.progress-bar) {
        background-color: #c15cf6;
        height: 25px;
      }
      :global(td .btn-editaccount) {
        background-color: #6dd3cb;
        border: 1px solid #2bbbad !important;
        width: 4rem;
        padding: 0.5rem !important;
      }
      `}</style>
    </>
  );
}
