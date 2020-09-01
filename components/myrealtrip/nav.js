import React, { useState } from 'react';

export default function Nav() {

return (
    <div>
        <div className="nav">
            <div className="logoBox">
                <img src='/myreal/logo.png' className="logo"/>
            </div>
            <div className="search">
                <img src='/myreal/search.svg' className="search-img"/>
                <input className="search-input" 
                    placeholder="여행지나 상품을 검색해보세요"
                />
            </div>
            <div className="navItems">
                <div className="navItem">
                    파트너 등록하기
                </div>
                <div className="navItem">
                    로그인
                </div>
                <div className="navItem">
                    <button className="navItemBtn">회원가입</button>
                </div>
            </div>

        </div>
        <style JSX>{`
        .nav {
            height: 72px;
            width: 100%;
            align-items: center;
            display:flex;
        }
        .logoBox {
            vertical-align: middle;
            width: 128px;
            height:28px;
            display: inline-block;

        }
        .logo {
            width: 128px;
        }
        .search {
            width: 340px;
            height: 48px;
            margin-left: 24px;
            position: relative;
            vertical-align: middle;
            display: inline-block;
        }
        .search-input {
            width: 100%;
            height: 100%;
            border-style: none;
            background-color: #f5f6f7;
            padding-left: 48px;
        }
        .search-img {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }
        .navItems {
            width: 568px;
            height: 72px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .navItem {
            padding: 8px 12px;
            display: inline;
            float: right;
            color: #666d75;
            font-size: 15px;
        }
        .navItemBtn {
            color: #2b96ed;
            border: 1px solid #a7d4f9;
            background-color: #fff;
            padding: 10px 23px;
        }
    `}</style>
    </div>
)
}