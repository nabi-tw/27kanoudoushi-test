// 動詞データベース
const verbsDatabase = {
    // Ⅰグループ動詞（五段動詞）
    group1: [
        { verb: '買います', potential: '買えます', dictionary: '買う', explanation: 'Ⅰグループ動詞は「う」音を「え」音に変えて「ます」をつけます' },
        { verb: '読みます', potential: '読めます', dictionary: '読む', explanation: 'Ⅰグループ動詞は「む」音を「め」音に変えて「ます」をつけます' },
        { verb: '飲みます', potential: '飲めます', dictionary: '飲む', explanation: 'Ⅰグループ動詞は「む」音を「め」音に変えて「ます」をつけます' },
        { verb: '書きます', potential: '書けます', dictionary: '書く', explanation: 'Ⅰグループ動詞は「く」音を「け」音に変えて「ます」をつけます' },
        { verb: '聞きます', potential: '聞けます', dictionary: '聞く', explanation: 'Ⅰグループ動詞は「く」音を「け」音に変えて「ます」をつけます' },
        { verb: '泳ぎます', potential: '泳げます', dictionary: '泳ぐ', explanation: 'Ⅰグループ動詞は「ぐ」音を「げ」音に変えて「ます」をつけます' },
        { verb: '話します', potential: '話せます', dictionary: '話す', explanation: 'Ⅰグループ動詞は「す」音を「せ」音に変えて「ます」をつけます' },
        { verb: '立ちます', potential: '立てます', dictionary: '立つ', explanation: 'Ⅰグループ動詞は「つ」音を「て」音に変えて「ます」をつけます' },
        { verb: '死にます', potential: '死ねます', dictionary: '死ぬ', explanation: 'Ⅰグループ動詞は「ぬ」音を「ね」音に変えて「ます」をつけます' },
        { verb: '呼びます', potential: '呼べます', dictionary: '呼ぶ', explanation: 'Ⅰグループ動詞は「ぶ」音を「べ」音に変えて「ます」をつけます' },
        { verb: '休みます', potential: '休めます', dictionary: '休む', explanation: 'Ⅰグループ動詞は「む」音を「め」音に変えて「ます」をつけます' },
        { verb: '住みます', potential: '住めます', dictionary: '住む', explanation: 'Ⅰグループ動詞は「む」音を「め」音に変えて「ます」をつけます' },
        { verb: '歩きます', potential: '歩けます', dictionary: '歩く', explanation: 'Ⅰグループ動詞は「く」音を「け」音に変えて「ます」をつけます' },
        { verb: '働きます', potential: '働けます', dictionary: '働く', explanation: 'Ⅰグループ動詞は「く」音を「け」音に変えて「ます」をつけます' },
        { verb: '持ちます', potential: '持てます', dictionary: '持つ', explanation: 'Ⅰグループ動詞は「つ」音を「て」音に変えて「ます」をつけます' },
        { verb: '待ちます', potential: '待てます', dictionary: '待つ', explanation: 'Ⅰグループ動詞は「つ」音を「て」音に変えて「ます」をつけます' },
        { verb: '作ります', potential: '作れます', dictionary: '作る', explanation: 'Ⅰグループ動詞は「る」音を「れ」音に変えて「ます」をつけます' },
        { verb: '撮ります', potential: '撮れます', dictionary: '撮る', explanation: 'Ⅰグループ動詞は「る」音を「れ」音に変えて「ます」をつけます' },
        { verb: '売ります', potential: '売れます', dictionary: '売る', explanation: 'Ⅰグループ動詞は「る」音を「れ」音に変えて「ます」をつけます' },
        { verb: '入ります', potential: '入れます', dictionary: '入る', explanation: 'Ⅰグループ動詞は「る」音を「れ」音に変えて「ます」をつけます' }
    ],
    
    // Ⅱグループ動詞（一段動詞）
    group2: [
        { verb: '食べます', potential: '食べられます', dictionary: '食べる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '見ます', potential: '見られます', dictionary: '見る', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '起きます', potential: '起きられます', dictionary: '起きる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '寝ます', potential: '寝られます', dictionary: '寝る', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '着ます', potential: '着られます', dictionary: '着る', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '忘れます', potential: '忘れられます', dictionary: '忘れる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '覚えます', potential: '覚えられます', dictionary: '覚える', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '教えます', potential: '教えられます', dictionary: '教える', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: 'やめます', potential: 'やめられます', dictionary: 'やめる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '始めます', potential: '始められます', dictionary: '始める', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '開けます', potential: '開けられます', dictionary: '開ける', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '閉めます', potential: '閉められます', dictionary: '閉める', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '借ります', potential: '借りられます', dictionary: '借りる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '考えます', potential: '考えられます', dictionary: '考える', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '生まれます', potential: '生まれられます', dictionary: '生まれる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' },
        { verb: '疲れます', potential: '疲れられます', dictionary: '疲れる', explanation: 'Ⅱグループ動詞は語幹に「られます」をつけます' }
    ],
    
    // Ⅲグループ動詞（不規則動詞）
    group3: [
        { verb: 'します', potential: 'できます', dictionary: 'する', explanation: 'Ⅲグループ動詞「する」は「できます」になります' },
        { verb: '来ます', potential: '来られます', dictionary: '来る', explanation: 'Ⅲグループ動詞「来る」は「来られます」になります' },
        { verb: '勉強します', potential: '勉強できます', dictionary: '勉強する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '運動します', potential: '運動できます', dictionary: '運動する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '料理します', potential: '料理できます', dictionary: '料理する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '掃除します', potential: '掃除できます', dictionary: '掃除する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '洗濯します', potential: '洗濯できます', dictionary: '洗濯する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '買い物します', potential: '買い物できます', dictionary: '買い物する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '電話します', potential: '電話できます', dictionary: '電話する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '結婚します', potential: '結婚できます', dictionary: '結婚する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '旅行します', potential: '旅行できます', dictionary: '旅行する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' },
        { verb: '散歩します', potential: '散歩できます', dictionary: '散歩する', explanation: 'Ⅲグループ動詞「〜する」は「〜できます」になります' }
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