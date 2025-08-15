// 動詞データベース
const verbsDatabase = {
    // Ⅰグループ動詞（五段動詞）
    group1: [
        { verb: '買います', potential: ['買えます', 'かえます'], dictionary: '買う' },
        { verb: '読みます', potential: ['読めます', 'よめます'], dictionary: '読む' },
        { verb: '飲みます', potential: ['飲めます', 'のめます'], dictionary: '飲む' },
        { verb: '書きます', potential: ['書けます', 'かけます'], dictionary: '書く' },
        { verb: '聞きます', potential: ['聞けます', 'きけます'], dictionary: '聞く' },
        { verb: '泳ぎます', potential: ['泳げます', 'およげます'], dictionary: '泳ぐ' },
        { verb: '話します', potential: ['話せます', 'はなせます'], dictionary: '話す' },
        { verb: '立ちます', potential: ['立てます', 'たてます'], dictionary: '立つ' },
        { verb: '死にます', potential: ['死ねます', 'しねます'], dictionary: '死ぬ' },
        { verb: '呼びます', potential: ['呼べます', 'よべます'], dictionary: '呼ぶ' },
        { verb: '休みます', potential: ['休めます', 'やすめます'], dictionary: '休む' },
        { verb: '住みます', potential: ['住めます', 'すめます'], dictionary: '住む' },
        { verb: '歩きます', potential: ['歩けます', 'あるけます'], dictionary: '歩く' },
        { verb: '働きます', potential: ['働けます', 'はたらけます'], dictionary: '働く' },
        { verb: '持ちます', potential: ['持てます', 'もてます'], dictionary: '持つ' },
        { verb: '待ちます', potential: ['待てます', 'まてます'], dictionary: '待つ' },
        { verb: '作ります', potential: ['作れます', 'つくれます'], dictionary: '作る' },
        { verb: '撮ります', potential: ['撮れます', 'とれます'], dictionary: '撮る' },
        { verb: '売ります', potential: ['売れます', 'うれます'], dictionary: '売る' },
        { verb: '入ります', potential: ['入れます', 'はいれます'], dictionary: '入る' }
    ],
    
    // Ⅱグループ動詞（一段動詞）
    group2: [
        { verb: '食べます', potential: ['食べられます', 'たべられます'], dictionary: '食べる' },
        { verb: '見ます', potential: ['見られます', 'みられます'], dictionary: '見る' },
        { verb: '起きます', potential: ['起きられます', 'おきられます'], dictionary: '起きる' },
        { verb: '寝ます', potential: ['寝られます', 'ねられます'], dictionary: '寝る' },
        { verb: '着ます', potential: ['着られます', 'きられます'], dictionary: '着る' },
        { verb: '忘れます', potential: ['忘れられます', 'わすれられます'], dictionary: '忘れる' },
        { verb: '覚えます', potential: ['覚えられます', 'おぼえられます'], dictionary: '覚える' },
        { verb: '教えます', potential: ['教えられます', 'おしえられます'], dictionary: '教える' },
        { verb: 'やめます', potential: ['やめられます'], dictionary: 'やめる' },
        { verb: '始めます', potential: ['始められます', 'はじめられます'], dictionary: '始める' },
        { verb: '開けます', potential: ['開けられます', 'あけられます'], dictionary: '開ける' },
        { verb: '閉めます', potential: ['閉められます', 'しめられます'], dictionary: '閉める' },
        { verb: '借ります', potential: ['借りられます', 'かりられます'], dictionary: '借りる' },
        { verb: '考えます', potential: ['考えられます', 'かんがえられます'], dictionary: '考える' },
        { verb: '生まれます', potential: ['生まれられます', 'うまれられます'], dictionary: '生まれる' },
        { verb: '疲れます', potential: ['疲れられます', 'つかれられます'], dictionary: '疲れる' }
    ],
    
    // Ⅲグループ動詞（不規則動詞）
    group3: [
        { verb: 'します', potential: ['できます'], dictionary: 'する' },
        { verb: '来ます', potential: ['来られます', 'こられます'], dictionary: '来る' },
        { verb: '勉強します', potential: ['勉強できます', 'べんきょうできます'], dictionary: '勉強する' },
        { verb: '運動します', potential: ['運動できます', 'うんどうできます'], dictionary: '運動する' },
        { verb: '料理します', potential: ['料理できます', 'りょうりできます'], dictionary: '料理する' },
        { verb: '掃除します', potential: ['掃除できます', 'そうじできます'], dictionary: '掃除する' },
        { verb: '洗濯します', potential: ['洗濯できます', 'せんたくできます'], dictionary: '洗濯する' },
        { verb: '買い物します', potential: ['買い物できます', 'かいものできます'], dictionary: '買い物する' },
        { verb: '電話します', potential: ['電話できます', 'でんわできます'], dictionary: '電話する' },
        { verb: '結婚します', potential: ['結婚できます', 'けっこんできます'], dictionary: '結婚する' },
        { verb: '旅行します', potential: ['旅行できます', 'りょこうできます'], dictionary: '旅行する' },
        { verb: '散歩します', potential: ['散歩できます', 'さんぽできます'], dictionary: '散歩する' }
    ]
};

// 選択されたグループから動詞を取得する関数
function getVerbsByGroups(selectedGroups) {
    let allVerbs = [];
    
    if (selectedGroups.includes('group1')) {
        allVerbs = allVerbs.concat(verbsDatabase.group1);
    }
    if (selectedGroups.includes('group2')) {
        allVerbs = allVerbs.concat(verbsDatabase.group2);
    }
    if (selectedGroups.includes('group3')) {
        allVerbs = allVerbs.concat(verbsDatabase.group3);
    }
    
    return allVerbs;
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 動詞のグループを判定する関数
function getVerbGroup(verb) {
    if (verbsDatabase.group1.some(v => v.verb === verb)) return 'Ⅰグループ';
    if (verbsDatabase.group2.some(v => v.verb === verb)) return 'Ⅱグループ';
    if (verbsDatabase.group3.some(v => v.verb === verb)) return 'Ⅲグループ';
    return '';
}