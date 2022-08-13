<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('reviews')->insert([
            'title' => 'めっちゃ暑い',
            'body' => 'ねこねこ',
            'seat' => 'G17',
            'user_id' => 1,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 1,
            'visited_at' => date('2022-01-30'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '駅から遠いです',
            'body' => 'neko',
            'seat' => 'K12',
            'user_id' => 1,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 1,
            'visited_at' => date('2022-01-10'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '待つ場所がない',
            'body' => 'neko1neko2neko3',
            'seat' => 'F13',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 1,
            'visited_at' => date('2022-06-04'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '微妙',
            'body' => 'ちょっと暑い',
            'seat' => 'L12',
            'user_id' => 1,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 1,
            'visited_at' => date('2022-03-02'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => 'モニターが少ない',
            'body' => 'たしかに',
            'seat' => 'J16',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 1,
            'visited_at' => date('2022-05-30'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '椅子が微妙',
            'body' => 'こんにちは',
            'seat' => 'B13',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 1,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => 'かなり良い',
            'body' => 'エアコンが効いてる',
            'seat' => 'B13',
            'user_id' => 1,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 2,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '微妙',
            'body' => 'こんにちは',
            'seat' => 'B13',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 2,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '駅から遠い',
            'body' => '困る',
            'seat' => 'B13',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 3,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '涼しい',
            'body' => 'とても良い',
            'seat' => 'B13',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 3,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '普通',
            'body' => 'まあ良いでしょう',
            'seat' => 'J33',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 4,
            'star3' => 5,
            'venue_id' => 2,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('reviews')->insert([
            'title' => '概ね満足',
            'body' => '悪くはない',
            'seat' => 'J33',
            'user_id' => 2,
            'star1' => 3,
            'star2' => 3,
            'star3' => 4,
            'venue_id' => 1,
            'visited_at' => date('2022-02-12'),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

    }
}
