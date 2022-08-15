<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'lastname' => 'たば',
            'name' => 'ひろき',
            'uname' => 'nekopi',
            'email' => 'c14h14n3nao3s@gmail.com',
            'age' => '20',
            'password' => Hash::make('sio20321'),
            'profile' => 'こんにちは',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'lastname' => 'テスト',
            'name' => 'ねこ',
            'uname' => 'neko',
            'email' => 'neko@gmail.com',
            'age' => '10',
            'password' => Hash::make('nekoneko'),
            'profile' => 'こんにちは！',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
