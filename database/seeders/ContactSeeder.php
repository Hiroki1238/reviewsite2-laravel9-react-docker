<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contacts')->insert([
            'title' => 'こんにちは。困っています。',
            'body' => 'テストテスト',
            'user_id' => 1,
            'user_email' => 'c14h14n3nao3s@gmail.com',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
