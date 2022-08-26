<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('announcements')->insert([
            'title' => '新機能のお知らせ',
            'body' => '本日マイページに新機能を追加いたしました',
            'admin_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('announcements')->insert([
            'title' => 'パスワード変更のご案内',
            'body' => '2020年以前にご登録いただいた方につきましては、2022年8月中にパスワードのご変更をお願い致します。',
            'admin_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

    }
}
