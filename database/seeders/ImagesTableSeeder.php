<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->insert([
            'review_id' => '1',
            'image_path' => 'https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/reviewImages/CPmIRCab5OG6VSMTQybcTdKmnBe4SxVncAkxjLrS.jpg',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('images')->insert([
            'review_id' => '1',
            'image_path' => 'https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/reviewImages/x2UBJxjzS2B08Z4yRFwTs8HUgZpjOiyT2X1AwzCV.jpg',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('images')->insert([
            'review_id' => '2',
            'image_path' => 'https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/reviewImages/NREdXBVzXhVJsSkUhNKJf40lHTxPNUwjZ5ym3msv.jpg',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('images')->insert([
            'review_id' => '3',
            'image_path' => 'https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/reviewImages/oW1j3bZvCjujZxyu3ITOL7OZkfX1bVQ0yHU9AWnk.jpg',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

    }
}
