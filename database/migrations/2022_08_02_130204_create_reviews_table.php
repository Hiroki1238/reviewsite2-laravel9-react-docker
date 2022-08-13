<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->string('title',20);
            $table->string('body',400);
            $table->string('seat');
            $table->foreignId('user_id')->constrained('users');
            $table->integer('star1');
            $table->integer('star2');
            $table->integer('star3');
            $table->foreignId('venue_id')->constrained('venues');
            $table->date('visited_at');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};
