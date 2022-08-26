<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            'lastname' => 'てすと',
            'name' => 'かんりしゃ',
            'uname' => 'てすと',
            'email' => 'hoge@gmail.com',
            'age' => '20',
            'password' => Hash::make('hogehoge'),
            'profile' => '管理者です',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
