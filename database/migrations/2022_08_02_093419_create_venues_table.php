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
        Schema::create('venues', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('keyword')->nullable();
            $table->integer('scale_standing')->nullable();
            $table->integer('scale_sitting')->nullable();
            $table->integer('location_path')->nullable(); //緯度・軽度の２つを保存しておくにはカラムが２つ必要だが後で直せるので一旦このまま
            $table->string('address');
            $table->foreignId('prefecture_id')->constrained('prefectures');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('venues');
    }
};
