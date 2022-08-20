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
use App\Http\Controllers\HomeController; //ホームの表示
use App\Http\Controllers\LikeController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\ContactController;

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

Route::controller(PostController::class)->group(function () {
Route::get("/blog","index");
Route::get("/posts/create", "create");
Route::get("/posts/{post}", "show"); //post以降に何かついてるURLが全てこれに吸収されてしまう
Route::post("/posts", "store");
Route::get('/posts/{post}/edit', "edit");
Route::put('/posts/{post}', "update");
});

Route::controller(PrefectureController::class)->group(function () {
Route::get('/prefectures', 'index'); //都道府県の一覧
Route::get('/prefectures/{prefecture}', 'show'); //県ごとの会場を表示
});

Route::controller(VenueController::class)->group(function () {
Route::get('/prefectures/venues/pictures/{venue}', "picture");
Route::get('/prefectures/venues/{venue}', "show"); //各会場ごとのレビューを表示
});

Route::controller(ReviewController::class)->group(function () {
Route::get('/reviews', 'index');
Route::get('/reviews/{review}', 'show');
});

Route::controller(ReviewController::class)->middleware('auth')->group(function () {
Route::get('/reviews/{venue}/create', 'create');
Route::post('/reviews/store', 'store'); //postにした
Route::get('/reviews/{review}/edit', 'edit');
Route::put('/reviews/update/{review}/', 'update');
Route::delete('/reviews/delete/{review}', 'delete');
});

Route::get('/',[HomeController::class,'index']); //ホーム


//マイページ関連
Route::controller(ProfileController::class)->middleware('auth')->group(function () {
    Route::post('/mypage/profile/update/{user}', 'update');
    Route::get('/mypage/profile/edit/{user}','edit');
    Route::get('/mypage/profile/{user}', 'show');
    Route::get('/mypage/{user}','index');
});

Route::controller(ContactController::class)->middleware('auth')->group(function () {
    Route::get('mypage/contacts/{user}','index');
    Route::get('mypage/contacts/result','result');
    Route::post('/mypage/contacts/store','storeContacts');
});


//管理者用
// Route::get('admin/create',[AdminpageController::class,'index']);


//テスト用
Route::get('/prefectures/test', function() {
     return view('prefectures/test');
 });



//検索機能
Route::controller(SearchController::class)->group(function () {
Route::get('/search', 'index');
Route::get('/search/word', 'searchWordAndCapacity');
});


//いいね機能
Route::controller(LikeController::class)->middleware('auth')->group(function () {
Route::get('/mypage/like/{user}','index');
Route::post('/like/{venueId}', 'store');
Route::post('/unlike/{venueId}','destroy');
});

//ブックマーク機能
Route::controller(BookmarkController::class)->middleware('auth')->group(function () {
    Route::get('/mypage/bookmarks/{user}','index');
    Route::post('/bookmark/{reviewId}', 'store');
    Route::post('/notbookmark/{reviewId}','destroy');
    });


//S3関連
// Route::get('/post/create', [PostsController::class, 'show']);
// Route::post('/post/create/upload', [PostsController::class, 'create']);
// Route::put('/mypage/profile/{user}/update', [ProfileController::class, 'create']); //更新はput

Route::controller(LikeController::class)->group(function () {
Route::get('/like', 'index'); // ブラウザでアクセスする
Route::get('/like/userlist', 'user_list'); // ユーザー情報を取得
Route::post('/like/add', 'like'); // いいね！データを追加
});


//テスト用
//Route::get('/test', function(){
     //return view('prefectures/index');
 //});


// Route::get('/', function () {
//     return Inertia::render('Test');
// });


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';

Route::prefix('admin')->name('admin.')->group(function(){

    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['auth:admin', 'verified'])->name('dashboard');

    require __DIR__.'/admin.php';
});
