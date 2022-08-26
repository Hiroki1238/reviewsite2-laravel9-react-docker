<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Announcement;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PostsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(RegionsTableSeeder::class);
        $this->call(PrefecturesTableSeeder::class);
        $this->call(VenuesTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
        $this->call(ImagesTableSeeder::class);
        $this->call(AnnouncementSeeder::class);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
