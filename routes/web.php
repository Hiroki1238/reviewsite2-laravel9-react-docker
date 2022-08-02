<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

use App\Http\Controllers\ReviewController;
use App\Http\Controllers\PrefectureController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\VenueController;
use App\Http\Controllers\ProfileController; //マイページ関連
use App\Http\Controllers\PostsController; //S3の画像投稿
use App\Http\Controllers\HomeController; //ホームの表示
use App\Http\Controllers\LikeController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\AdminpageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get("/",[PostController::class,"index"]);
Route::get("/posts/create",[PostController::class,"create"]);
Route::get("/posts/{post}", [PostController::class, "show"]); //post以降に何かついてるURLが全てこれに吸収されてしまう
Route::post("/posts",[PostController::class,"store"]);

Route::get('/posts/{post}/edit',[PostController::class,"edit"]);
Route::put('/posts/{post}',[PostController::class,"update"]);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';


//Route::get('/posts', 'ReviewController@index'); これはlaravel6の書き方
Route::get('/reviews', [ReviewController::class, 'index']);
// /reviewsにアクセスしたらReviewControllerのindexメソッドを実行

Route::get('/reviews/{venue}/create', [ReviewController::class, 'create']);

// Route::get('/', [ReviewController::class, 'index']);
//選択したレビューの詳細を表示
Route::get('/reviews/{review}', [ReviewController::class, 'show'])->name('show');
Route::post('/reviews/{venue}', [ReviewController::class, 'store'])->name('store'); //postにした

Route::get('/reviews/{review}/edit', [ReviewController::class, 'edit'])->name('edit');
Route::put('/reviews/{review}', [ReviewController::class, 'update'])->name('update');

Route::delete('/reviews/{review}', [ReviewController::class, 'delete']);

Route::get('/prefectures', [PrefectureController::class, 'index']); //都道府県から検索する画面のルーティング
Route::get('/prefectures/{prefecture}', [PrefectureController::class, 'show']); //県ごとの会場を表示

Route::get('/prefectures/venues/{venue}', [VenueController::class, 'showReview']);
// Route::get('/reviews/{review}', [VenueController::class, 'show']);

Route::get('/home',[HomeController::class,'index']);


//マイページ関連
Route::get('/mypage/{user}',[ProfileController::class, 'index']);
Route::get('/mypage/profile/{user}',[ProfileController::class, 'show']);
Route::get('/mypage/profile/{user}/edit',[ProfileController::class, 'edit']);
Route::put('/mypage/profile/{user}', [ProfileController::class, 'update']);
Route::post('/reviews', [ProfileController::class, 'store']);
//Route::get('/search',[SearchController::class, 'index']);

Route::get('mypage/favorite/{user}',[LikeController::class,'index']);
Route::get('mypage/bookmark/{user}',[BookmarkController::class,'index']);

//管理者用
Route::get('admin/create',[AdminpageController::class,'index']);



//テスト用
Route::get('/prefectures/test', function() {
     return view('prefectures/test');
 });



//検索機能
Route::get('/search', [SearchController::class, 'index']);
Route::post('/search/capacity', [SearchController::class, 'searchCapacity']);
Route::post('/search/word', [SearchController::class, 'searchWord']);



//S3関連
Route::get('/post/create', [PostsController::class, 'show']);
Route::post('/post/create/upload', [PostsController::class, 'create']);
Route::put('/mypage/profile/{user}/update', [ProfileController::class, 'create']); //更新はput



// Route::get('/search', function() {
//     return view('search/index');
// });


//テスト用
//Route::get('/test', function(){
     //return view('prefectures/index');
 //});



Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
