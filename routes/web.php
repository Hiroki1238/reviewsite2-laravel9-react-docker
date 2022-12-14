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
use App\Http\Controllers\AdminpageController; //管理者用ページ
use App\Http\Controllers\TwitterController; //twitter
use App\Http\Controllers\LoginController; //googleログイン

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

use App\Http\Controllers\ChatController;

Route::group(['middleware' => ['auth']], function(){
    Route::get('/chat', [ChatController::class, 'showMessages'])->name('chat.index');
    Route::get('/messages', [ChatController::class, 'fetchMessages'])->name('chat.fetch');
    Route::post('/messages', [ChatController::class, 'sendMessage'])->name('chat.store');
});


Route::controller(PostController::class)->group(function () {
Route::get("/blog","index");
Route::get("/posts/create", "create");
Route::get("/posts/{post}", "show"); //post以降に何かついてるURLが全てこれに吸収されてしまう
Route::post("/posts", "store");
Route::get('/posts/{post}/edit', "edit");
Route::put('/posts/{post}', "update");
});

//会場関連
Route::controller(PrefectureController::class)->group(function () {
Route::get('/prefectures', 'index'); //都道府県の一覧
Route::get('/prefectures/{prefecture}', 'show'); //県ごとの会場を表示
});

//会場関連
Route::controller(VenueController::class)->group(function () {
Route::get('/prefectures/venues/pictures/{venue}', "picture");
Route::get('/prefectures/venues/{venue}', "show"); //各会場ごとのレビューを表示
});

//レビュー関連
Route::controller(ReviewController::class)->middleware('auth')->group(function () {
    Route::get('/reviews/{venue}/create', 'create');
    Route::post('/reviews/store', 'store');
    Route::get('/reviews/deleted', 'deleted');
    Route::get('/reviews/{review}/edit', 'edit');
    Route::put('/reviews/update/{review}/', 'update');
    Route::delete('/reviews/delete/{review}', 'delete');
    });

//レビュー関連
Route::controller(ReviewController::class)->group(function () {
Route::get('/reviews', 'index');
//Route::get('/reviews/deleted', 'deleted');
Route::get('/reviews/{review}', 'show');
});

//トップページ関連
Route::controller(HomeController::class)->group(function (){
Route::get('/','index'); //ホーム
Route::get('/description','description'); //紹介ページ
});


//マイページ関連
Route::controller(ProfileController::class)->middleware('auth')->group(function () {
    Route::post('/mypage/profile/update/{user}', 'update');
    Route::get('/mypage/profile/edit/{user}','edit');
    Route::get('/mypage/profile/{user}', 'show'); //本人のマイページ
    Route::get('/mypage/public/{user}', 'public'); //本人以外のマイページ
    Route::get('/mypage/{user}','index');
});

//お問い合わせ関連
Route::controller(ContactController::class)->middleware('auth')->group(function () {
    Route::get('/mypage/contacts/{user}','index');
    Route::get('/mypage/contacts/sent','sent'); //送信しましたと表示する
    Route::post('/mypage/contacts/store','storeContacts');
});


//管理者用
Route::controller(AdminpageController::class)->middleware('auth:admin')->group(function () {
    Route::get('/admin/home','index');
    Route::get('/admin/venues/add','AddVenue'); //会場の新規登録
    Route::post('/admin/venues/store','StoreVenue'); //テーブルに登録
    Route::get('/admin/venues/select','SelectVenue'); //編集する会場を検索から探す
    Route::get('/admin/venues/edit','EditVenue'); //会場の編集
    Route::get('/admin/venues/delete','DeleteVenue'); //会場の削除
    Route::get('/admin/reviews/delete','DeleteReview'); //不適切なレビューの削除
    Route::get('/admin/contact','ReplyToMessage'); //お問い合わせに返信
    Route::get('/admin/contact/reply/{contact}','Reply'); //お問い合わせに返信
});


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

//twitterログイン
Route::controller(TwitterController::class)->group(function () {
Route::get('/login/twitter', 'redirectToProvider')->name('twitter.login');
Route::get('/login/twitter/callback', 'handleProviderCallback');
Route::get('/twitter/logout', 'logout');
});

//テスト用
//Route::get('/test', function(){
     //return view('prefectures/index');
 //});

 //ソーシャルログイン関連
 Route::controller(LoginController::class)->group(function () {
 Route::get('login/google', 'redirectToGoogle');
 Route::get('login/google/callback', 'handleGoogleCallback');
 });


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