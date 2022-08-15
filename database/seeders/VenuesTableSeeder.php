<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VenuesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() //収容人数1000人以上のみ登録
    {
        //北海道 1

        DB::table('venues')->insert([
            'name' => '札幌ドーム',
            'keyword' => 'さっぽろどーむ',
            'scale_standing' => '53820',
            'scale_sitting' => '41566',
            'location_path' => '012345',
            'address' => '〒062-0045 北海道札幌市豊平区羊ケ丘１',
            'prefecture_id' => '1',
            'url' => 'https://www.sapporo-dome.co.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '真駒内セキスイハイムスタジアム',
            'keyword' => 'まこまないせきすいはいむ',
            'scale_standing' => '17324',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒005-0017 北海道札幌市南区真駒内公園３−１',
            'prefecture_id' => '1',
            'url' => 'http://www.makomanai.com/openstadium/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('venues')->insert([
            'name' => '真駒内セキスイハイムアイスアリーナ',
            'keyword' => 'まこまないせきすいはいむ',
            'scale_standing' => '11524',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒005-0017 北海道札幌市南区真駒内公園１−１',
            'prefecture_id' => '1',
            'url' => 'http://www.makomanai.com/icearena/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'いわみざわ公園野外音楽堂キタオン',
            'keyword' => 'いわみざわこうえんやがいおんがくどうきたおん',
            'scale_standing' => '20000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒068-0833 北海道岩見沢市志文町８１−１ いわみざわ公園',
            'prefecture_id' => '1',
            'url' => 'http://www.iwamizawa-park.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '北海道立総合体育センター(北海きたえーる) メインアリーナ',
            'keyword' => 'ほっかいどうりつそうごうたいいくせんたーほっかいきたえーる',
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒062-0905 北海道札幌市豊平区豊平５条１１丁目１−１',
            'prefecture_id' => '1',
            'url' => 'http://www.kitayell.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'アクセスサッポロ 大展示場',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒003-0030 北海道札幌市白石区流通センター４丁目３−５５',
            'prefecture_id' => '1',
            'url' => 'http://www.axes.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '函館アリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒042-0932 北海道函館市湯川町１丁目３２−２',
            'prefecture_id' => '1',
            'url' => 'http://www.zaidan-hakodate.com/arena/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '函館アリーナ サブアリーナ',
            'keyword' => null,
            'scale_standing' => '1044',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒042-0932 北海道函館市湯川町１丁目３２−２',
            'prefecture_id' => '1',
            'url' => 'http://www.zaidan-hakodate.com/arena/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '札幌芸術の森 野外ステージ',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒005-0863 北海道札幌市南区常盤１１１',
            'prefecture_id' => '1',
            'url' => 'http://artpark.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'よつ葉アリーナ十勝 メインアリーナ',
            'keyword' => null,
            'scale_standing' => '2883',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒080-0030 北海道帯広市大通北１丁目１−１',
            'prefecture_id' => '1',
            'url' => 'https://www.obihiro-arena.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '札幌コンベンションセンター 大ホール',
            'keyword' => null,
            'scale_standing' => '2500',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒003-0006 北海道札幌市白石区東札幌６条１丁目１−１',
            'prefecture_id' => '1',
            'url' => 'http://www.sora-scc.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '札幌文化芸術劇場hitaru 劇場',
            'keyword' => null,
            'scale_standing' => '2302',
            'scale_sitting' => '2302',
            'location_path' => null,
            'address' => '〒060-0001 北海道札幌市中央区北１条西１丁目 札幌市民交流プラザ',
            'prefecture_id' => '1',
            'url' => 'https://www.sapporo-community-plaza.jp/theater.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '札幌コンサートホールKitara 大ホール',
            'keyword' => null,
            'scale_standing' => '2020',
            'scale_sitting' => '2020',
            'location_path' => null,
            'address' => '〒064-0931 北海道札幌市中央区中島公園１−１５',
            'prefecture_id' => '1',
            'url' => 'http://www.kitara-sapporo.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'Zepp札幌',
            'keyword' => null,
            'scale_standing' => '2009',
            'scale_sitting' => '723',
            'location_path' => null,
            'address' => '〒064-0809 北海道札幌市中央区南９条西４丁目４',
            'prefecture_id' => '1',
            'url' => 'https://www.zepp.co.jp/hall/sapporo/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '苫小牧市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1630',
            'scale_sitting' => '1630',
            'location_path' => null,
            'address' => '〒053-0018 北海道苫小牧市旭町３丁目２−２',
            'prefecture_id' => '1',
            'url' => 'http://www.tomakomai-shiminkaikan.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '旭川市民文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1548',
            'scale_sitting' => '1548',
            'location_path' => null,
            'address' => '〒070-0037 北海道旭川市７条通９丁目',
            'prefecture_id' => '1',
            'url' => 'http://www.city.asahikawa.hokkaido.jp/files/bunkashinko/siminbunka/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '帯広市民文化ホール 大ホール',
            'keyword' => null,
            'scale_standing' => '1546',
            'scale_sitting' => '1546',
            'location_path' => null,
            'address' => '〒080-0015 北海道帯広市西５条南１１丁目４８',
            'prefecture_id' => '1',
            'url' => 'https://www.obihiro-foundation.jp/shisetsu/bunkahall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'コーチャンフォー釧路文化ホール 大ホール',
            'keyword' => null,
            'scale_standing' => '1524',
            'scale_sitting' => '1524',
            'location_path' => null,
            'address' => '〒085-0055 北海道釧路市治水町１２−１０',
            'prefecture_id' => '1',
            'url' => 'http://www.kushiro-bunka.or.jp/hall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'カナモトホール',
            'keyword' => null,
            'scale_standing' => '1516',
            'scale_sitting' => '1516',
            'location_path' => null,
            'address' => '〒060-0001 北海道札幌市中央区北１条西１丁目',
            'prefecture_id' => '1',
            'url' => 'http://www.sapporo-shiminhall.org/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '北見市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1450',
            'scale_sitting' => '1323',
            'location_path' => null,
            'address' => '〒090-0817 北海道北見市常盤町２丁目１−１０',
            'prefecture_id' => '1',
            'url' => 'http://kitami-hall.sakura.ne.jp/kshimin/shiminkaikan/shiminkaikan.htm',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '函館市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1370',
            'scale_sitting' => '1370',
            'location_path' => null,
            'address' => '〒042-0932 北海道函館市湯川町１丁目３２−１',
            'prefecture_id' => '1',
            'url' => 'http://www.zaidan-hakodate.com/kaikan/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '室ガス文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1307',
            'scale_sitting' => '1307',
            'location_path' => null,
            'address' => '〒051-0016 北海道室蘭市幸町６−２３',
            'prefecture_id' => '1',
            'url' => 'http://www.kujiran.net/culture/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '稚内総合文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1293',
            'scale_sitting' => '1293',
            'location_path' => null,
            'address' => '〒097-0022 北海道稚内市中央３丁目１３−２３',
            'prefecture_id' => '1',
            'url' => 'https://www.city.wakkanai.hokkaido.jp/kyoiku/kakusyushisetsu/bunkacenter.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '千歳市民文化センター(北ガス文化ホール) 大ホール',
            'keyword' => null,
            'scale_standing' => '1275',
            'scale_sitting' => '1275',
            'location_path' => null,
            'address' => '〒066-0036 北海道千歳市北栄２丁目２−１１',
            'prefecture_id' => '1',
            'url' => 'https://www.chitosebunka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '小樽市民会館',
            'keyword' => null,
            'scale_standing' => '1216',
            'scale_sitting' => '1216',
            'location_path' => null,
            'address' => '〒047-0024 北海道小樽市花園５丁目３−１',
            'prefecture_id' => '1',
            'url' => 'http://www.otarushiminkaikan.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '岩見沢市民会館・文化センター(まなみーる) 大ホール',
            'keyword' => null,
            'scale_standing' => '1165',
            'scale_sitting' => '1165',
            'location_path' => null,
            'address' => '〒068-0029 北海道岩見沢市９条西４丁目１',
            'prefecture_id' => '1',
            'url' => 'https://www.manamiru.jp',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '網走市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1107',
            'scale_sitting' => '957',
            'location_path' => null,
            'address' => '〒093-0016 北海道網走市南６条西１丁目５',
            'prefecture_id' => '1',
            'url' => 'http://www.city.abashiri.hokkaido.jp/040shisetsu/040bunka/210shiminkaikan/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'たきかわ文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1101',
            'scale_sitting' => '1101',
            'location_path' => null,
            'address' => '〒073-0033 北海道滝川市新町３丁目６−４４',
            'prefecture_id' => '1',
            'url' => 'http://bunka-kobo.jp/?page_id=6',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '札幌市教育文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1100',
            'scale_sitting' => '1100',
            'location_path' => null,
            'address' => '〒060-0001 北海道札幌市中央区北１条西１３丁目',
            'prefecture_id' => '1',
            'url' => 'http://www.kyobun.org/index.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'だて歴史の杜カルチャーセンター 大ホール',
            'keyword' => null,
            'scale_standing' => '1044',
            'scale_sitting' => '1044',
            'location_path' => null,
            'address' => '〒052-0012 北海道伊達市松ヶ枝町３４番地１',
            'prefecture_id' => '1',
            'url' => 'http://www.city.date.hokkaido.jp/hotnews/detail/00001542.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '音更町文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1022',
            'scale_sitting' => '1022',
            'location_path' => null,
            'address' => '〒080-0302 北海道河東郡音更町木野西通１５丁目８',
            'prefecture_id' => '1',
            'url' => 'http://www.npootofuke.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '中標津町総合文化会館 大ホール(しるべっとホール)',
            'keyword' => null,
            'scale_standing' => '1016',
            'scale_sitting' => '1016',
            'location_path' => null,
            'address' => '〒086-1002 北海道標津郡中標津町東２条南３丁目１',
            'prefecture_id' => '1',
            'url' => 'http://www.zncs.or.jp/shirubetto/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '岩内地方文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1008',
            'scale_sitting' => '1008',
            'location_path' => null,
            'address' => '〒045-0003 北海道岩内郡岩内町万代５１−７',
            'prefecture_id' => '1',
            'url' => 'https://www.town.iwanai.hokkaido.jp/?p=7413',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '江別市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1005',
            'scale_sitting' => '1005',
            'location_path' => null,
            'address' => '〒067-0074 北海道江別市高砂町６',
            'prefecture_id' => '1',
            'url' => 'http://www.ebetsu-c-hall.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '七飯町文化センター パイオニアホール(大ホール)',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '1000',
            'location_path' => null,
            'address' => '〒041-1111 北海道亀田郡七飯町本町６丁目１−２',
            'prefecture_id' => '1',
            'url' => 'https://www.town.nanae.hokkaido.jp/hotnews/detail/00001022.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '北斗市総合文化センターかなで～る 大ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '1000',
            'location_path' => null,
            'address' => '〒049-0156 北海道北斗市中野通２丁目１３−１',
            'prefecture_id' => '1',
            'url' => 'https://www.city.hokuto.hokkaido.jp/docs/1981.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'サッポロファクトリーホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '660',
            'location_path' => null,
            'address' => '〒060-0032 北海道札幌市中央区北２条東３丁目',
            'prefecture_id' => '1',
            'url' => 'http://sapporofactory.jp/hall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '根室市総合文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '1000',
            'location_path' => null,
            'address' => '〒087-0006 北海道根室市曙町１丁目４０',
            'prefecture_id' => '1',
            'url' => 'https://www.city.nemuro.hokkaido.jp/lifeinfo/kakuka/kyoikuiinkai/sougoubunka/index.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '芦別市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '908',
            'location_path' => null,
            'address' => '〒075-0011 北海道芦別市北１条東２丁目４',
            'prefecture_id' => '1',
            'url' => 'https://www.city.ashibetsu.hokkaido.jp/docs/5173.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '洞爺湖文化センター ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒049-5721 北海道虻田郡洞爺湖町洞爺湖温泉１４２−１４０',
            'prefecture_id' => '1',
            'url' => 'http://cmssv.town.toyako.hokkaido.jp/tourism/art_culture/atc003/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //青森県 2

        DB::table('venues')->insert([
            'name' => '長根屋内スケート場(YSアリーナ八戸)',
            'keyword' => null,
            'scale_standing' => '9000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒031-0073 青森県八戸市売市輿遊下３',
            'prefecture_id' => '2',
            'url' => 'https://www.city.hachinohe.aomori.jp/soshikikarasagasu/naganeokunaiskatejo/bunka_sports/2/6424.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '新青森県総合運動公園 マエダアリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '5348',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒039-3505 青森県青森市宮田高瀬２２−２',
            'prefecture_id' => '2',
            'url' => 'http://www.sport-aoimori.jp/main.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'フラット八戸',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒039-1101 青森県八戸市尻内町三条目７−７',
            'prefecture_id' => '2',
            'url' => 'https://flathachinohe.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '青森県武道館 主競技場',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒036-8101 青森県弘前市豊田２丁目３',
            'prefecture_id' => '2',
            'url' => 'http://www.aomorikenbudoukan.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'リンクステーションホール青森(青森市文化会館) 大ホール',
            'keyword' => null,
            'scale_standing' => '2031',
            'scale_sitting' => '2031',
            'location_path' => null,
            'address' => '〒030-0812 青森県青森市堤町１丁目４−１',
            'prefecture_id' => '2',
            'url' => 'http://aobunkanko.com/facility/linkstationhall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '盛運輸アリーナ(青森県営スケート場)',
            'keyword' => null,
            'scale_standing' => '2028',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒030-0843 青森県青森市浜田豊田 地内',
            'prefecture_id' => '2',
            'url' => 'http://aomori-skate.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '八戸市公会堂 大ホール',
            'keyword' => null,
            'scale_standing' => '1624',
            'scale_sitting' => '1624',
            'location_path' => null,
            'address' => '〒031-0075 青森県八戸市内丸１丁目１−１',
            'prefecture_id' => '2',
            'url' => 'https://hachi-kokaido.movabletype.io/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '八戸市公会堂 中ホール',
            'keyword' => null,
            'scale_standing' => '1060',
            'scale_sitting' => '1060',
            'location_path' => null,
            'address' => '〒031-0075 青森県八戸市内丸１丁目１−１',
            'prefecture_id' => '2',
            'url' => 'https://hachi-kokaido.movabletype.io/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '弘前市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1350',
            'scale_sitting' => '1350',
            'location_path' => null,
            'address' => '〒036-8356 青森県弘前市下白銀町１−６ 弘前公園内',
            'prefecture_id' => '2',
            'url' => 'http://www.city.hirosaki.aomori.jp/shiminkaikan/index.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '下北文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1186',
            'scale_sitting' => '1186',
            'location_path' => null,
            'address' => '〒035-0072 青森県むつ市金谷１丁目１０−１',
            'prefecture_id' => '2',
            'url' => 'http://shimobun.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '三沢市公会堂 大ホール',
            'keyword' => null,
            'scale_standing' => '1126',
            'scale_sitting' => '1126',
            'location_path' => null,
            'address' => '〒033-0031 青森県三沢市桜町１丁目６−３５',
            'prefecture_id' => '2',
            'url' => 'http://www.tohoku-kyoritz.co.jp/misawa/index3.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '五所川原市ふるさと交流圏民センター(オルテンシア) コンサートホール',
            'keyword' => null,
            'scale_standing' => '1117',
            'scale_sitting' => '1117',
            'location_path' => null,
            'address' => '〒037-0065 青森県五所川原市幾世森幾世森２４−１５',
            'prefecture_id' => '2',
            'url' => 'https://www.city.goshogawara.lg.jp/kyouiku/bunka/ortensia-top.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '十和田市民文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '1000',
            'location_path' => null,
            'address' => '〒034-0083 青森県十和田市西三番町２−１',
            'prefecture_id' => '2',
            'url' => 'https://www.city.towada.lg.jp/shisei/shisetsu/shisetsu.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //岩手県 3

        DB::table('venues')->insert([
            'name' => '岩手産業文化センター ツガワ未来館アピオ 催事場',
            'keyword' => null,
            'scale_standing' => '8000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒020-0605 岩手県滝沢市砂込３８９−２０',
            'prefecture_id' => '3',
            'url' => 'http://www.apio-iwate.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '盛岡市総合アリーナ(盛岡タカヤアリーナ)',
            'keyword' => null,
            'scale_standing' => '5058',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒020-0866 岩手県盛岡市本宮５丁目４−１',
            'prefecture_id' => '3',
            'url' => 'http://morioka-sport.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '奥州市総合体育館 Zアリーナ',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒023-0132 岩手県奥州市水沢区水沢羽田町うぐいす平７２',
            'prefecture_id' => '3',
            'url' => 'http://www.oshu-bunka.or.jp/arena/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '岩手県民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1991',
            'scale_sitting' => '1991',
            'location_path' => null,
            'address' => '〒020-0023 岩手県盛岡市内丸１３−１',
            'prefecture_id' => '3',
            'url' => 'http://www.iwate-kenmin.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '盛岡市民文化ホール 大ホール',
            'keyword' => null,
            'scale_standing' => '1516',
            'scale_sitting' => '1516',
            'location_path' => null,
            'address' => '〒020-0045 岩手県盛岡市盛岡駅西通２丁目９−１',
            'prefecture_id' => '3',
            'url' => 'http://www.mfca.jp/shiminbunka/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '奥州市文化会館Zホール 大ホール',
            'keyword' => null,
            'scale_standing' => '1500',
            'scale_sitting' => '1500',
            'location_path' => null,
            'address' => '〒023-0003 岩手県奥州市水沢佐倉河石橋４１',
            'prefecture_id' => '3',
            'url' => 'http://www.oshu-bunka.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '北上市文化交流センター さくらホール 大ホール',
            'keyword' => null,
            'scale_standing' => '1406',
            'scale_sitting' => '1406',
            'location_path' => null,
            'address' => '〒024-0084 岩手県北上市さくら通り２丁目１−１',
            'prefecture_id' => '3',
            'url' => 'http://www.sakurahall.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '二戸市民文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1218',
            'scale_sitting' => '1218',
            'location_path' => null,
            'address' => '〒028-6103 岩手県二戸市石切所狼穴１−１',
            'prefecture_id' => '3',
            'url' => 'https://www.nbsk.or.jp/ninohe-bunka/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '一関文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1217',
            'scale_sitting' => '1217',
            'location_path' => null,
            'address' => '〒021-0884 岩手県一関市大手町２−１６',
            'prefecture_id' => '3',
            'url' => 'http://ichi-bun.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '久慈市文化会館 アンバーホール 大ホール',
            'keyword' => null,
            'scale_standing' => '1178',
            'scale_sitting' => '1178',
            'location_path' => null,
            'address' => '〒028-0051 岩手県久慈市川崎町１７−１',
            'prefecture_id' => '3',
            'url' => 'http://ahall.city.kuji.iwate.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '大船渡市民文化会館(リアスホール) 大ホール',
            'keyword' => null,
            'scale_standing' => '1100',
            'scale_sitting' => '1100',
            'location_path' => null,
            'address' => '〒022-0003 岩手県大船渡市盛町下舘下１８−１',
            'prefecture_id' => '3',
            'url' => 'https://www.city.ofunato.iwate.jp/site/riash-lib/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '花巻市文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1100',
            'scale_sitting' => '1100',
            'location_path' => null,
            'address' => '〒025-0097 岩手県花巻市若葉町３丁目１６−２２',
            'prefecture_id' => '3',
            'url' => 'http://www.hanamaki-bunka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '盛岡市都南文化会館(キャラホール) 大ホール',
            'keyword' => null,
            'scale_standing' => '1042',
            'scale_sitting' => '1042',
            'location_path' => null,
            'address' => '〒020-0834 岩手県盛岡市永井２４−１０−１',
            'prefecture_id' => '3',
            'url' => 'http://www.mfca.jp/kyarahall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '宮古市民文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1012',
            'scale_sitting' => '1012',
            'location_path' => null,
            'address' => '〒027-0023 岩手県宮古市磯鶏沖２−２２',
            'prefecture_id' => '3',
            'url' => 'https://iwate-arts-miyako.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //宮城県 4

        DB::table('venues')->insert([
            'name' => 'キューアンドエースタジアムみやぎ',
            'keyword' => null,
            'scale_standing' => '49133',
            'scale_sitting' => '49133',
            'location_path' => null,
            'address' => '〒981-0122 宮城県宮城郡利府町菅谷館４０−１',
            'prefecture_id' => '4',
            'url' => 'https://www.mspf.jp/grande21/index.php?action=sisetu_shoukai_stadium',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '楽天生命パーク宮城',
            'keyword' => null,
            'scale_standing' => '30508',
            'scale_sitting' => '30508',
            'location_path' => null,
            'address' => '〒983-0045 宮城県仙台市宮城野区宮城野２丁目１１−６',
            'prefecture_id' => '4',
            'url' => 'https://www.rakuteneagles.jp/stadium/access/guidemap.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'セキスイハイムスーパーアリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '7063',
            'scale_sitting' => '7063',
            'location_path' => null,
            'address' => '〒981-0122 宮城県宮城郡利府町菅谷館４０−１',
            'prefecture_id' => '4',
            'url' => 'http://www.mspf.jp/grande21/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'カメイアリーナ仙台(仙台市体育館) 第一競技場',
            'keyword' => null,
            'scale_standing' => '4681',
            'scale_sitting' => '4681',
            'location_path' => null,
            'address' => '〒982-0032 宮城県仙台市太白区富沢１丁目４−１',
            'prefecture_id' => '4',
            'url' => 'http://www.spf-sendai.jp/scg/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'ゼビオアリーナ仙台',
            'keyword' => null,
            'scale_standing' => '6000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒982-0007 宮城県仙台市太白区あすと長町１丁目４−１０',
            'prefecture_id' => '4',
            'url' => 'http://www.xebioarena.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '仙台サンプラザホール',
            'keyword' => null,
            'scale_standing' => '2372',
            'scale_sitting' => '2372',
            'location_path' => null,
            'address' => '〒983-0852 宮城県仙台市宮城野区榴岡５丁目１１−１',
            'prefecture_id' => '4',
            'url' => 'http://www.sendai-sunplaza.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '東京エレクトロンホール宮城 大ホール',
            'keyword' => null,
            'scale_standing' => '1590',
            'scale_sitting' => '1590',
            'location_path' => null,
            'address' => '〒980-0803 宮城県仙台市青葉区国分町３丁目３−７',
            'prefecture_id' => '4',
            'url' => 'http://www.miyagi-hall.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '仙台GIGS',
            'keyword' => null,
            'scale_standing' => '1560',
            'scale_sitting' => '816',
            'location_path' => null,
            'address' => '〒984-0030 宮城県仙台市若林区荒井東１丁目４−１',
            'prefecture_id' => '4',
            'url' => 'https://www.sendaigigs.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '登米祝祭劇場(水の里ホール) 野外劇場 SUN THEATER',
            'keyword' => null,
            'scale_standing' => '1500',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒987-0511 宮城県登米市迫町佐沼光ケ丘３０−３０',
            'prefecture_id' => '4',
            'url' => 'http://www.tome-syukusai.or.jp/2-2-2suntheater.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '仙台銀行ホール イズミティ21 大ホール',
            'keyword' => null,
            'scale_standing' => '1456',
            'scale_sitting' => '1456',
            'location_path' => null,
            'address' => '〒981-3133 宮城県仙台市泉区泉中央２丁目１８−１',
            'prefecture_id' => '4',
            'url' => 'https://izumity21.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '仙台PIT',
            'keyword' => null,
            'scale_standing' => '1451',
            'scale_sitting' => '536',
            'location_path' => null,
            'address' => '〒982-0007 宮城県仙台市太白区あすと長町２丁目２−５０',
            'prefecture_id' => '4',
            'url' => 'http://sendai-pit.team-smile.org/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '名取市文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1350',
            'scale_sitting' => '1327',
            'location_path' => null,
            'address' => '〒981-1224 宮城県名取市増田柳田５２０',
            'prefecture_id' => '4',
            'url' => 'http://bunka.natori.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'トークネットホール仙台(仙台市民会館) 大ホール',
            'keyword' => null,
            'scale_standing' => '1265',
            'scale_sitting' => '1265',
            'location_path' => null,
            'address' => '〒980-0823 宮城県仙台市青葉区桜ケ岡公園４−１',
            'prefecture_id' => '4',
            'url' => 'http://www.tohoku-kyoritz.co.jp/shimin/index1.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'マルホンまきあーとテラス 大ホール',
            'keyword' => null,
            'scale_standing' => '1254',
            'scale_sitting' => '1254',
            'location_path' => null,
            'address' => '〒986-0032 宮城県石巻市開成１−８',
            'prefecture_id' => '4',
            'url' => 'https://makiart.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '東北大学百周年記念会館 川内萩ホール',
            'keyword' => null,
            'scale_standing' => '1235',
            'scale_sitting' => '1235',
            'location_path' => null,
            'address' => '〒980-8576 宮城県仙台市青葉区青葉区川内４０',
            'prefecture_id' => '4',
            'url' => 'http://www.bureau.tohoku.ac.jp/hagihall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '多賀城市文化センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1120',
            'scale_sitting' => '1120',
            'location_path' => null,
            'address' => '〒985-0873 宮城県多賀城市中央２丁目２７−１',
            'prefecture_id' => '4',
            'url' => 'http://tagajo-bunka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '気仙沼市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1057',
            'scale_sitting' => '1057',
            'location_path' => null,
            'address' => '〒988-0073 宮城県気仙沼市笹が陣４−２',
            'prefecture_id' => '4',
            'url' => 'http://www.kesennuma.miyagi.jp/li/life/060/070/index.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '栗原文化会館(アポロプラザ) ホール',
            'keyword' => null,
            'scale_standing' => '1006',
            'scale_sitting' => '1006',
            'location_path' => null,
            'address' => '〒987-2215 宮城県栗原市築館高田２丁目１−１０',
            'prefecture_id' => '4',
            'url' => 'https://www.kuriharacity.jp/w058/201810/38547.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '岩沼市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1002',
            'scale_sitting' => '1002',
            'location_path' => null,
            'address' => '〒989-2427 宮城県岩沼市里の杜１丁目２−４５',
            'prefecture_id' => '4',
            'url' => 'https://www.city.iwanuma.miyagi.jp/kyoiku-sports/kominkan/shimin-kaikan/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '電力ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '1000',
            'location_path' => null,
            'address' => '〒980-0811 宮城県仙台市青葉区一番町３丁目７−１',
            'prefecture_id' => '4',
            'url' => 'https://hall.d-biru.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '東北福祉大学 音楽堂 けやきホール',
            'keyword' => null,
            'scale_standing' => '739',
            'scale_sitting' => '739',
            'location_path' => null,
            'address' => '〒981-0943 宮城県仙台市青葉区国見１丁目８−１',
            'prefecture_id' => '4',
            'url' => 'https://www.tfu.ac.jp/facilities/keyaki/index.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '仙台国際センター 大ホール',
            'keyword' => null,
            'scale_standing' => '1000',
            'scale_sitting' => '1000',
            'location_path' => null,
            'address' => '〒980-0856 宮城県仙台市青葉区青葉山',
            'prefecture_id' => '4',
            'url' => 'http://www.aobayama.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //秋田県 5

        DB::table('venues')->insert([
            'name' => 'ニプロハチ公ドーム',
            'keyword' => null,
            'scale_standing' => '15000',
            'scale_sitting' => '15000',
            'location_path' => null,
            'address' => '〒017-0031 秋田県大館市上代野稲荷台１−１',
            'prefecture_id' => '5',
            'url' => 'http://www.jukaidome.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '由利本荘総合防災公園ナイスアリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒015-0011 秋田県由利本荘市石脇田尻野１８',
            'prefecture_id' => '5',
            'url' => 'https://shisetsu.mizuno.jp/m-7619',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '秋田県立体育館 大体育場',
            'keyword' => null,
            'scale_standing' => '3500',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒010-0974 秋田県秋田市八橋運動公園１−１２',
            'prefecture_id' => '5',
            'url' => 'http://www.akisouko.com/ken_tai/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'あきた芸術劇場ミルハス 大ホール',
            'keyword' => null,
            'scale_standing' => '2007',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒010-0875 秋田県秋田市千秋明徳町２−５２',
            'prefecture_id' => '5',
            'url' => 'https://akiat.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '湯沢文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1303',
            'scale_sitting' => '1203',
            'location_path' => null,
            'address' => '〒012-0037 秋田県湯沢市沖鶴１０３−１',
            'prefecture_id' => '5',
            'url' => 'https://www.city-yuzawa.jp/life/7/59/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'ほくしか鹿鳴ホール(大館市民文化会館) 大ホール',
            'keyword' => null,
            'scale_standing' => '1202',
            'scale_sitting' => '1202',
            'location_path' => null,
            'address' => '〒017-0822 秋田県大館市桜町南４５−１',
            'prefecture_id' => '5',
            'url' => 'http://odate-bunka.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '能代市文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1181',
            'scale_sitting' => '1181',
            'location_path' => null,
            'address' => '〒016-0842 秋田県能代市追分町４−２６',
            'prefecture_id' => '5',
            'url' => 'http://www.shirakami.or.jp/~noshirobunka/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '由利本荘市文化交流館カダーレ 大ホール',
            'keyword' => null,
            'scale_standing' => '1110',
            'scale_sitting' => '1110',
            'location_path' => null,
            'address' => '〒015-0076 秋田県由利本荘市東町１５',
            'prefecture_id' => '5',
            'url' => 'http://kadare.net/wp',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '仙北市民会館 ホール',
            'keyword' => null,
            'scale_standing' => '1024',
            'scale_sitting' => '1024',
            'location_path' => null,
            'address' => '〒014-1201 秋田県仙北市田沢湖生保内武蔵野１０５−１',
            'prefecture_id' => '5',
            'url' => 'https://www.city.semboku.akita.jp/facility_sys/shiminkaikan.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '男鹿市民文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1020',
            'scale_sitting' => '1020',
            'location_path' => null,
            'address' => '〒010-0511 秋田県男鹿市船川港船川海岸通り二号１４−５',
            'prefecture_id' => '5',
            'url' => 'https://www.city.oga.akita.jp/living_information/kurashi_tetsuzuki/ogashimimbunkakaikan/index.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '大仙市大曲市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1004',
            'scale_sitting' => '1004',
            'location_path' => null,
            'address' => '〒014-0063 秋田県大仙市大曲日の出町２丁目６−５０',
            'prefecture_id' => '5',
            'url' => 'https://www.city.daisen.lg.jp/docs/2013110800215/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //山形県 6

        DB::table('venues')->insert([
            'name' => 'やまぎん県民ホール(山形県総合文化芸術館) 大ホール',
            'keyword' => null,
            'scale_standing' => '2001',
            'scale_sitting' => '2001',
            'location_path' => null,
            'address' => '〒990-0828 山形県山形市双葉町１丁目２−３８',
            'prefecture_id' => '6',
            'url' => 'https://yamagata-bunka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'シェルターなんようホール(南陽市文化会館) 大ホール',
            'keyword' => null,
            'scale_standing' => '1403',
            'scale_sitting' => '1403',
            'location_path' => null,
            'address' => '〒999-2232 山形県南陽市三間通４３０−２',
            'prefecture_id' => '6',
            'url' => 'https://nanyoshi-bunkakaikan.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '希望ホール(酒田市民会館) 大ホール',
            'keyword' => null,
            'scale_standing' => '1287',
            'scale_sitting' => '1287',
            'location_path' => null,
            'address' => '〒998-0043 山形県酒田市本町２丁目２−１０',
            'prefecture_id' => '6',
            'url' => 'http://www.kibou-hall.sakata.yamagata.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '山形市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1202',
            'scale_sitting' => '1202',
            'location_path' => null,
            'address' => '〒990-0039 山形県山形市香澄町２丁目９−４５ 山形市民会館',
            'prefecture_id' => '6',
            'url' => 'https://www.shanshanshan.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '天童市市民文化会館 ホール',
            'keyword' => null,
            'scale_standing' => '1200',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒994-0013 山形県天童市老野森１丁目１−１',
            'prefecture_id' => '6',
            'url' => 'http://www.tohoku-kyoritz.co.jp/tendoshishiminbunka/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '村山市民会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1200',
            'scale_sitting' => '1200',
            'location_path' => null,
            'address' => '〒995-0024 山形県村山市楯岡笛田２丁目６−１',
            'prefecture_id' => '6',
            'url' => 'https://www.city.murayama.lg.jp/kurashi/gakko/bunka/shiminkaikan.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '荘銀タクト鶴岡(鶴岡市文化会館) 大ホール',
            'keyword' => null,
            'scale_standing' => '1135',
            'scale_sitting' => '1120',
            'location_path' => null,
            'address' => '〒997-0035 山形県鶴岡市馬場町１１−６１',
            'prefecture_id' => '6',
            'url' => 'https://tact-tsuruoka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '新庄市民文化会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1036',
            'scale_sitting' => '1036',
            'location_path' => null,
            'address' => '〒996-0085 山形県新庄市堀端町４−６７',
            'prefecture_id' => '6',
            'url' => 'http://www.city.shinjo.yamagata.jp/s025/030/20150301150229.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '米沢市市民文化会館',
            'keyword' => null,
            'scale_standing' => '1005',
            'scale_sitting' => '1005',
            'location_path' => null,
            'address' => '〒992-0045 山形県米沢市中央１丁目１０−２',
            'prefecture_id' => '6',
            'url' => 'https://www.yonebunka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //福島県 7

        DB::table('venues')->insert([
            'name' => 'あづま総合体育館 メインアリーナ',
            'keyword' => null,
            'scale_standing' => '6000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒960-2158 福島県福島市佐原神事場１',
            'prefecture_id' => '7',
            'url' => 'http://www.azumapark.or.jp/?park=%E3%81%82%E3%81%A5%E3%81%BE%E7%B7%8F%E5%90%88%E4%BD%93%E8%82%B2%E9%A4%A8',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'ビッグパレットふくしま 多目的展示ホール',
            'keyword' => null,
            'scale_standing' => '5500',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒963-0115 福島県郡山市南２丁目５２',
            'prefecture_id' => '7',
            'url' => 'http://www.big-palette.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'Jヴィレッジ 全天候型練習場',
            'keyword' => null,
            'scale_standing' => '4000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒979-0513 福島県双葉郡楢葉町山田岡美シ森８',
            'prefecture_id' => '7',
            'url' => 'https://www.j-village.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '郡山ユラックス熱海 多目的ホール',
            'keyword' => null,
            'scale_standing' => '3000',
            'scale_sitting' => '3000',
            'location_path' => null,
            'address' => '〒963-1309 福島県郡山市熱海町熱海２丁目１４８−２',
            'prefecture_id' => '7',
            'url' => 'http://www.yracs.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '三崎公園野外音楽堂',
            'keyword' => null,
            'scale_standing' => '2400',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒970-0316 福島県いわき市小名浜下神白大作',
            'prefecture_id' => '7',
            'url' => 'https://iwakicity-park.or.jp/misaki/ongakudo/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'けんしん郡山文化センター(郡山市民文化センター) 大ホール',
            'keyword' => null,
            'scale_standing' => '1976',
            'scale_sitting' => '1976',
            'location_path' => null,
            'address' => '〒963-8878 福島県郡山市堤下町１−２',
            'prefecture_id' => '7',
            'url' => 'http://www.bunka-manabi.or.jp/kc-center/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //茨城県 8

        DB::table('venues')->insert([
            'name' => '茨城県立カシマサッカースタジアム',
            'keyword' => null,
            'scale_standing' => '40728',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒314-0007 茨城県鹿嶋市神向寺 後山２６−２',
            'prefecture_id' => '8',
            'url' => 'https://www.antlers.co.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //栃木県 9

        DB::table('venues')->insert([
            'name' => '栃木県立宇都宮産業展示館(マロニエプラザ) 大展示場',
            'keyword' => null,
            'scale_standing' => '3000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒321-0954 栃木県宇都宮市元今泉６丁目１−３７',
            'prefecture_id' => '9',
            'url' => 'http://www.marronnierplaza.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //群馬県 10

        DB::table('venues')->insert([
            'name' => '日本トーターグリーンドーム前橋 メインイベントエリア',
            'keyword' => null,
            'scale_standing' => '20000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒371-0035 群馬県前橋市岩神町１丁目２−１',
            'prefecture_id' => '10',
            'url' => 'http://www.greendome.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //埼玉県 11

        DB::table('venues')->insert([
            'name' => 'さいたまスーパーアリーナ',
            'keyword' => null,
            'scale_standing' => '37000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒330-9111 埼玉県さいたま市中央区新都心８',
            'prefecture_id' => '11',
            'url' => 'https://www.saitama-arena.co.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //千葉県 12

        DB::table('venues')->insert([
            'name' => '幕張メッセ 国際展示場1-8ホール',
            'keyword' => null,
            'scale_standing' => '50000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒261-0023 千葉県千葉市美浜区中瀬２丁目１',
            'prefecture_id' => '12',
            'url' => 'https://www.m-messe.co.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //東京都 13

        DB::table('venues')->insert([
            'name' => '国立競技場',
            'keyword' => null,
            'scale_standing' => '68000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒160-0013 東京都新宿区霞ヶ丘町１０−１',
            'prefecture_id' => '13',
            'url' => 'https://www.jpnsport.go.jp/kokuritu/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '東京ドーム',
            'keyword' => null,
            'scale_standing' => '55000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒112-0004 東京都文京区後楽１丁目３−６１',
            'prefecture_id' => '13',
            'url' => 'https://www.tokyo-dome.co.jp/dome/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '味の素スタジアム',
            'keyword' => null,
            'scale_standing' => '49970',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒182-0032 東京都調布市西町３７６−３',
            'prefecture_id' => '13',
            'url' => 'https://www.ajinomotostadium.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '東京有明アリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '15000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒135-0063 東京都江東区有明１丁目１１−１',
            'prefecture_id' => '13',
            'url' => 'https://ariake-arena.tokyo/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '日本武道館',
            'keyword' => null,
            'scale_standing' => '14471',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒102-8321 東京都千代田区北の丸公園２−３',
            'prefecture_id' => '13',
            'url' => 'https://www.nipponbudokan.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //神奈川県 14

        DB::table('venues')->insert([
            'name' => '日産スタジアム',
            'keyword' => null,
            'scale_standing' => '72327',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒222-0036 神奈川県横浜市港北区小机町３３００',
            'prefecture_id' => '14',
            'url' => 'https://www.nissan-stadium.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //新潟県 15

        DB::table('venues')->insert([
            'name' => 'デンカビッグスワンスタジアム',
            'keyword' => null,
            'scale_standing' => '42300',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒950-0933 新潟県新潟市中央区清五郎６７−１２',
            'prefecture_id' => '15',
            'url' => 'https://www.denka-bigswan.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //富山県 16

        DB::table('venues')->insert([
            'name' => '富山市総合体育館 第1アリーナ',
            'keyword' => null,
            'scale_standing' => '4650',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒930-0805 富山県富山市湊入船町１２−１',
            'prefecture_id' => '16',
            'url' => 'http://www.city.toyama.toyama.jp/shiminseikatsubu/supotsukenkouka/taiikukan/shisogotaiikukan.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //石川県 17
        DB::table('venues')->insert([
            'name' => 'こまつドームアリーナ',
            'keyword' => null,
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒923-0344 石川県小松市林町ほ５',
            'prefecture_id' => '17',
            'url' => 'https://komatsu-ccf.com/sports/komatsu_dome/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //福井県 18

        DB::table('venues')->insert([
            'name' => 'サンドーム福井',
            'keyword' => null,
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒915-0096 福井県越前市瓜生町５−１−１',
            'prefecture_id' => '18',
            'url' => 'http://www.sankan.jp/sundome/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //山梨県 19

        DB::table('venues')->insert([
            'name' => '富士急ハイランド・コニファーフォレスト',
            'keyword' => null,
            'scale_standing' => '20000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒403-0017 山梨県富士吉田市新西原５丁目６−１',
            'prefecture_id' => '19',
            'url' => 'https://www.fujiq.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //長野県 20

        DB::table('venues')->insert([
            'name' => '長野市オリンピック記念アリーナ(エムウェーブ)',
            'keyword' => null,
            'scale_standing' => '20000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒381-0025 長野県長野市北長池１９５',
            'prefecture_id' => '20',
            'url' => 'http://www.nagano-mwave.co.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //岐阜県 21

        DB::table('venues')->insert([
            'name' => '岐阜メモリアルセンター で愛ドーム 第1体育館',
            'keyword' => null,
            'scale_standing' => '4572',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒502-0817 岐阜県岐阜市 福光大野２６７５−２８',
            'prefecture_id' => '21',
            'url' => 'http://www.gifuspo.or.jp/GMC/100/101-3.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //静岡県 22

        DB::table('venues')->insert([
            'name' => 'ふもとっぱら',
            'keyword' => null,
            'scale_standing' => '100000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒418-0109 静岡県富士宮市麓１５６',
            'prefecture_id' => '22',
            'url' => 'https://fumotoppara.net/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //愛知県 23

        DB::table('venues')->insert([
            'name' => 'バンテリンドームナゴヤ',
            'keyword' => null,
            'scale_standing' => '50619',
            'scale_sitting' => '36370',
            'location_path' => null,
            'address' => '〒461-0047 愛知県名古屋市東区大幸南１丁目１−１',
            'prefecture_id' => '23',
            'url' => 'http://www.nagoya-dome.co.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //三重県 24

        DB::table('venues')->insert([
            'name' => '三重県営サンアリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '11000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒516-0021 三重県伊勢市朝熊町字鴨谷４３８３−４',
            'prefecture_id' => '24',
            'url' => 'http://www.sun-arena.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

         //滋賀県 25

         DB::table('venues')->insert([
            'name' => 'ウカルちゃんアリーナ(滋賀県立体育館) 大競技場',
            'keyword' => null,
            'scale_standing' => '4905',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒520-0801 滋賀県大津市におの浜４丁目２−１２',
            'prefecture_id' => '25',
            'url' => 'https://www.bsn.or.jp/gym/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //京都府 26

        DB::table('venues')->insert([
            'name' => '島津アリーナ京都(京都府立体育館) 第1競技場',
            'keyword' => null,
            'scale_standing' => '8000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒603-8334 京都府京都市北区大将軍西鷹司町',
            'prefecture_id' => '26',
            'url' => 'http://www.kyoto-furitutaiikukan.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //大阪府 27

        DB::table('venues')->insert([
            'name' => '京セラドーム大阪',
            'keyword' => null,
            'scale_standing' => '55000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒550-0023 大阪府大阪市西区千代崎３丁目中２−１',
            'prefecture_id' => '27',
            'url' => 'http://www.kyoceradome-osaka.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //兵庫県 28

        DB::table('venues')->insert([
            'name' => '阪神甲子園球場',
            'keyword' => null,
            'scale_standing' => '47466',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒663-8152 兵庫県西宮市甲子園町１−８２',
            'prefecture_id' => '28',
            'url' => 'http://www.hanshin.co.jp/koshien/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //奈良県 29

        DB::table('venues')->insert([
            'name' => 'なら100年会館 大ホール',
            'keyword' => null,
            'scale_standing' => '1476',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒630-8121 奈良県奈良市三条宮前町７−１',
            'prefecture_id' => '29',
            'url' => 'http://www.nara100.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //和歌山県 30

        DB::table('venues')->insert([
            'name' => '和歌山ビッグホエール',
            'keyword' => null,
            'scale_standing' => '8500',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒640-8319 和歌山県和歌山市手平２丁目１−１',
            'prefecture_id' => '30',
            'url' => 'http://www.wakayamasposhin.or.jp/big-whale/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //鳥取県 31

        DB::table('venues')->insert([
            'name' => '日南町総合文化センター 野外イベント広場',
            'keyword' => null,
            'scale_standing' => '3000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒689-5212 鳥取県日野郡日南町霞７８５',
            'prefecture_id' => '31',
            'url' => 'http://culture.town.nichinan.tottori.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //島根県 32

        DB::table('venues')->insert([
            'name' => '出雲ドーム',
            'keyword' => null,
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒693-0058 島根県出雲市矢野町９９９',
            'prefecture_id' => '32',
            'url' => 'http://sports21.jp/index.php?id=111',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //岡山県 33

        DB::table('venues')->insert([
            'name' => '倉敷スポーツ公園 マスカットスタジアム',
            'keyword' => null,
            'scale_standing' => '30494',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒710-0016 岡山県倉敷市中庄３２５０−１',
            'prefecture_id' => '33',
            'url' => 'http://www.muscat.or.jp/introduction/n01.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //広島県 34

        DB::table('venues')->insert([
            'name' => 'エディオンスタジアム広島(広島広域公演)',
            'keyword' => null,
            'scale_standing' => '50000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒731-3167 広島県広島市安佐南区大塚西５丁目１−１',
            'prefecture_id' => '34',
            'url' => 'http://www.sports-or.city.hiroshima.jp/facilities/kouiki',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => 'Mazda Zoom-Zoom スタジアム広島(マツダスタジアム)',
            'keyword' => null,
            'scale_standing' => '33000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒732-0803 広島県広島市南区南蟹屋２丁目３−１',
            'prefecture_id' => '34',
            'url' => 'http://www.mazdastadium.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '国営備北丘陵公園 大芝生広場 野外ステージ',
            'keyword' => null,
            'scale_standing' => '20000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒727-0022 広島県庄原市上原町１３００',
            'prefecture_id' => '34',
            'url' => 'https://www.bihokupark.jp/parkMap/parkMap_shibafu.html',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '広島県立総合体育館(広島グリーンアリーナ) 大アリーナ',
            'keyword' => null,
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒730-0011 広島県広島市中区基町４−１',
            'prefecture_id' => '34',
            'url' => 'https://h-jigyoudan.or.jp/sports-center/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('venues')->insert([
            'name' => '広島サンプラザホール',
            'keyword' => null,
            'scale_standing' => '6052',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒733-0833 広島県広島市西区商工センター３丁目１',
            'prefecture_id' => '34',
            'url' => 'https://www.hiroshima-sunplaza.or.jp/hall/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //山口県 35

        DB::table('venues')->insert([
            'name' => '維新百年記念公園 野外音楽堂(ビッグシェル)',
            'keyword' => null,
            'scale_standing' => '2467',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒753-0815 山口県山口市維新公園４丁目３',
            'prefecture_id' => '35',
            'url' => 'https://www.ishin100.com/main/guide/gu-big-shell/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //徳島県 36

        DB::table('venues')->insert([
            'name' => '徳島県立産業観光交流センター(アスティとくしま) 多目的ホール',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒770-8055 徳島県徳島市山城町東浜傍示１−１',
            'prefecture_id' => '36',
            'url' => 'http://www.asty-tokushima.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //香川県 37

        DB::table('venues')->insert([
            'name' => 'さぬき市野外音楽広場テアトロン',
            'keyword' => null,
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒769-2102 香川県さぬき市鴨庄１−２０',
            'prefecture_id' => '37',
            'url' => 'http://www.city.sanuki.kagawa.jp/sightseeing/sights/oogushi/theatron',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //愛媛県 38

        DB::table('venues')->insert([
            'name' => '愛媛県武道館 主道場',
            'keyword' => null,
            'scale_standing' => '2932', //不正確
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒790-0948 愛媛県松山市市坪西町５５１',
            'prefecture_id' => '38',
            'url' => 'http://www.ehimekenbudoukan.or.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //高知県 39

        DB::table('venues')->insert([
            'name' => '高知ぢばさんセンター 大ホール',
            'keyword' => null,
            'scale_standing' => '5000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒781-5101 高知県高知市布師田３９９２−２',
            'prefecture_id' => '39',
            'url' => 'https://diba3.com/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //福岡県 40

        DB::table('venues')->insert([
            'name' => '福岡PayPayドーム',
            'keyword' => null,
            'scale_standing' => '38500',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒810-8660 福岡県福岡市中央区地行浜２丁目２−２',
            'prefecture_id' => '40',
            'url' => 'https://www.softbankhawks.co.jp/stadium/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //佐賀県 41

        DB::table('venues')->insert([
            'name' => 'SAGAアリーナ メインアリーナ',
            'keyword' => null,
            'scale_standing' => '8400',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒849-0923 佐賀県佐賀市日の出２丁目１−１０',
            'prefecture_id' => '41',
            'url' => 'https://saga-sunrisepark.com/arena/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //長崎県 42

        DB::table('venues')->insert([
            'name' => 'ハウステンボス ロッテルダム会場',
            'keyword' => null,
            'scale_standing' => '30000', //不正確
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒859-3243 長崎県佐世保市ハウステンボス町',
            'prefecture_id' => '42',
            'url' => 'https://www.huistenbosch.co.jp/event/fireworks/kyushu_autumn/bleachers.html', //このurlは時期によって変わるかも
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //熊本県 43

        DB::table('venues')->insert([
            'name' => '熊本県野外劇場アスペクタ',
            'keyword' => null,
            'scale_standing' => '50000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒869-1412 熊本県阿蘇郡南阿蘇村久石４４１１−９',
            'prefecture_id' => '43',
            'url' => 'http://aspecta.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //大分県 44

        DB::table('venues')->insert([
            'name' => '昭和電工ドーム',
            'keyword' => null,
            'scale_standing' => '40000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒870-0126 大分県大分市横尾１３５１',
            'prefecture_id' => '44',
            'url' => 'http://www.oita-sportspark.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //宮崎県 45

        DB::table('venues')->insert([
            'name' => 'フェニックス･シーガイア･リゾート シーガイアスクエア1', //存在するのか不明
            'keyword' => null,
            'scale_standing' => '10000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒880-0836 宮崎県宮崎市山崎町',
            'prefecture_id' => '45',
            'url' => 'https://seagaia.co.jp',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //鹿児島県 46

        DB::table('venues')->insert([
            'name' => '西原商会アリーナ(鹿児島アリーナ) メインアリーナ',
            'keyword' => null,
            'scale_standing' => '5700',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒890-0023 鹿児島県鹿児島市永吉１丁目３０−１',
            'prefecture_id' => '46',
            'url' => 'http://kagoshima-arena.jp/',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        //沖縄県

        DB::table('venues')->insert([
            'name' => '沖縄セルラースタジアム那覇',
            'keyword' => null,
            'scale_standing' => '20000',
            'scale_sitting' => null,
            'location_path' => null,
            'address' => '〒900-0026 沖縄県那覇市奥武山町４２−１',
            'prefecture_id' => '47',
            'url' => 'http://nahataikyo.com/guide/studium_park',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

    }
}

