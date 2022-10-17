import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ header, children, announcements }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 text-my-gray1 font-kosugimaru font-semibold"> {/*ここで全体のフォントを指定*/}
            <nav className="bg-my-purple2 border-b border-gray-100 fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/description">
                                    <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                                </Link>
                            </div>

                            {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="{route('dashboard')}" active={route().current('dashboard')}>
                                    ダッシュボード
                                </NavLink>
                            </div> */}

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/">ホーム</NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/search">会場検索</NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={`/login`}>マイページ</NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={`/login`}>お気に入り</NavLink>

                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink href={`/login`}>
                                        ブックマーク
                                    </NavLink>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink href={`/login`}>
                                        お問い合せ
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <div className="py-1">
                                                    新規登録
                                                </div>

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("register")}
                                            method="get"
                                            as="button"
                                        >
                                            新規会員登録
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="/login"
                                            method="get"
                                            as="button"
                                        >
                                            ログイン
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        {/* <div className="px-4">
                            <div className="text-base text-gray-800">{auth.user.name}</div>
                            <div className="text-sm text-gray-500">{auth.user.email}</div>
                        </div> */}

                        {/* <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                ログアウト
                            </ResponsiveNavLink>
                        </div> */}
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="flex max-w-full min-h-screen justify-around pt-20 z-0">
                <div className="w-1/8 text-left text-xl">
                    <div className="text-3xl mt-4 py-1 text-title-gray">
                        検索
                    </div>
                    <div>
                        <p>
                            <Link
                                href="/prefectures"
                                className="no-underline text-menu-gray text-xl"
                            >
                                都道府県から探す
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="/search"
                                className="no-underline text-menu-gray text-xl"
                            >
                                キーワードから探す
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="/search"
                                className="no-underline text-menu-gray text-xl"
                            >
                                規模から探す
                            </Link>
                        </p>
                    </div>
                    <hr className="my-5 border-shadowgray1" />
                    <div className="text-3xl mb-1 text-title-gray">
                        会員メニュー
                    </div>
                    <div>
                        <p>
                            <Link
                                href="/login"
                                className="no-underline text-menu-gray text-xl"
                            >
                                マイページ
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="/login"
                                className="no-underline text-menu-gray text-xl"
                            >
                                会員情報
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="/login"
                                className="no-underline text-menu-gray text-xl"
                            >
                                お気に入り
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="/login"
                                className="no-underline text-menu-gray text-xl"
                            >
                                ブックマーク
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="/login"
                                className="no-underline text-menu-gray text-xl"
                            >
                                お問い合わせ
                            </Link>
                        </p>
                        <hr className="my-5 border-shadowgray1" />
                    </div>
                </div>

                <div className="w-4/7">{children}</div>

                <div className="w-1/8 text-left text-xl text-title-gray">
                    <div className="text-3xl mt-4 pt-1 text-title-gray">
                        お知らせ
                    </div>
                    {announcements.map((announcement) => {
                        return (
                            <div key={announcement.title}>
                                <p className="mt-3">
                                    {announcement.created_at}
                                </p>
                                <p className="py-1 text-xl">
                                    {announcement.title}
                                </p>
                                <p className="py-1 text-lg mb-6">
                                    {announcement.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </main>

            <footer class="bg-gray-200 mt-10">
                <div className="flex">
                    <div className="pt-9 mr-auto">
                        <ApplicationLogo className="h-16 ml-16" />
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/"
                                className="no-underline text-3xl text-title-gray"
                            >
                                トップ
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/description"
                                className="no-underline text-3xl text-title-gray"
                            >
                                raionについて
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/description"
                                className="no-underline text-3xl text-title-gray"
                            >
                                仮タイトル
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-24">
                            <Link
                                href="/description"
                                className="no-underline text-3xl text-title-gray"
                            >
                                仮タイトル
                            </Link>
                        </p>
                    </div>
                </div>

                <p class="text-center text-2xl mt-5 py-12 text-title-gray font-zenmaru font-black">
                    Copyright © 2022 RAION CORPORATION. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
