import React from 'react';
import { Link } from '@inertiajs/inertia-react';


const Test = () => {
  return (
    <div>
    <h1>仮ページ(未ログイン)</h1>
    <h1><Link href="/login">ログイン</Link></h1>
    <h1><Link href="/login">新規登録</Link></h1>
    <h1>テスト用のアカウント↓</h1>
    email : neko@gmail.com
    password : nekoneko
    
    </div>
  )
}

export default Test