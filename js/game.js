// ゲーム状態管理
class VerbGame {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.totalQuestions = 0;
        this.selectedGroups = [];
        
        this.initializeElements();
        this.bindEvents();
        this.updateQuestionCountInfo();
    }
    
    initializeElements() {
        // 画面要素
        this.setupScreen = document.getElementById('setupScreen');
        this.gameScreen = document.getElementById('gameScreen');
        this.resultScreen = document.getElementById('resultScreen');
        
        // 設定画面の要素
        this.group1Checkbox = document.getElementById('group1');
        this.group2Checkbox = document.getElementById('group2');
        this.group3Checkbox = document.getElementById('group3');
        this.questionCountSelect = document.getElementById('questionCount');
        this.questionCountInfo = document.getElementById('questionCountInfo');
        this.startGameButton = document.getElementById('startGame');
        
        // ゲーム画面の要素
        this.progressText = document.getElementById('progressText');
        this.progressBar = document.getElementById('progressBar');
        this.correctCount = document.getElementById('correctCount');
        this.wrongCount = document.getElementById('wrongCount');
        this.accuracyRate = document.getElementById('accuracyRate');
        this.verbGroup = document.getElementById('verbGroup');
        this.verbQuestion = document.getElementById('verbQuestion');
        this.answerInput = document.getElementById('answerInput');
        this.submitAnswerButton = document.getElementById('submitAnswer');
        this.skipQuestionButton = document.getElementById('skipQuestion');
        this.questionCard = document.getElementById('questionCard');
        
        // フィードバック要素
        this.feedback = document.getElementById('feedback');
        this.feedbackIcon = document.getElementById('feedbackIcon');
        this.feedbackText = document.getElementById('feedbackText');
        this.feedbackExplanation = document.getElementById('feedbackExplanation');
        this.nextQuestionButton = document.getElementById('nextQuestion');
        
        // 結果画面の要素
        this.resultIcon = document.getElementById('resultIcon');
        this.totalQuestionsSpan = document.getElementById('totalQuestions');
        this.finalCorrect = document.getElementById('finalCorrect');
        this.finalWrong = document.getElementById('finalWrong');
        this.finalAccuracy = document.getElementById('finalAccuracy');
        this.performanceMessage = document.getElementById('performanceMessage');
        this.playAgainButton = document.getElementById('playAgain');
        this.backToSetupButton = document.getElementById('backToSetup');
    }
    
    bindEvents() {
        // 設定画面のイベント
        this.startGameButton.addEventListener('click', () => this.startGame());
        this.questionCountSelect.addEventListener('change', () => this.updateQuestionCountInfo());
        
        // チェックボックスの変更イベント
        [this.group1Checkbox, this.group2Checkbox, this.group3Checkbox].forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateQuestionCountInfo());
        });
        
        // ゲーム画面のイベント
        this.submitAnswerButton.addEventListener('click', () => this.submitAnswer());
        this.skipQuestionButton.addEventListener('click', () => this.skipQuestion());
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitAnswer();
        });
        
        // フィードバック画面のイベント
        this.nextQuestionButton.addEventListener('click', () => this.nextQuestion());
        
        // 結果画面のイベント
        this.playAgainButton.addEventListener('click', () => this.playAgain());
        this.backToSetupButton.addEventListener('click', () => this.backToSetup());
    }
    
    updateQuestionCountInfo() {
        const selectedGroups = this.getSelectedGroups();
        const availableVerbs = getVerbsByGroups(selectedGroups);
        const requestedQuestions = parseInt(this.questionCountSelect.value);
        
        if (selectedGroups.length === 0) {
            this.questionCountInfo.textContent = '動詞グループを選択してください';
            this.startGameButton.disabled = true;
        } else if (availableVerbs.length < requestedQuestions) {
            this.questionCountInfo.textContent = `選択したグループには${availableVerbs.length}個の動詞しかありません`;
            this.startGameButton.disabled = false;
        } else {
            this.questionCountInfo.textContent = `${availableVerbs.length}個の動詞から${requestedQuestions}問を出題します`;
            this.startGameButton.disabled = false;
        }
    }
    
    getSelectedGroups() {
        const groups = [];
        if (this.group1Checkbox.checked) groups.push('group1');
        if (this.group2Checkbox.checked) groups.push('group2');
        if (this.group3Checkbox.checked) groups.push('group3');
        return groups;
    }
    
    startGame() {
        this.selectedGroups = this.getSelectedGroups();
        
        if (this.selectedGroups.length === 0) {
            alert('少なくとも1つの動詞グループを選択してください。');
            return;
        }
        
        // 問題を準備
        const availableVerbs = getVerbsByGroups(this.selectedGroups);
        const questionCount = Math.min(parseInt(this.questionCountSelect.value), availableVerbs.length);
        this.questions = shuffleArray(availableVerbs).slice(0, questionCount);
        
        // ゲーム状態をリセット
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.totalQuestions = questionCount;
        
        // 画面を切り替え
        this.setupScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        
        // 最初の問題を表示
        this.showCurrentQuestion();
        this.updateGameUI();
    }
    
    showCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.verbGroup.textContent = getVerbGroup(question.verb);
        this.verbQuestion.textContent = question.verb;
        this.answerInput.value = '';
        this.answerInput.focus();
        
        // カードのアニメーションをリセット
        this.questionCard.classList.remove('correct-answer', 'wrong-answer');
        
        // フィードバックを隠す
        this.feedback.classList.add('hidden');
    }
    
    submitAnswer() {
        const userAnswer = this.answerInput.value.trim();
        
        if (!userAnswer) {
            alert('答えを入力してください。');
            return;
        }
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
        // 複数の正解候補をチェック（配列または文字列に対応）
        const potentialAnswers = Array.isArray(currentQuestion.potential) ? currentQuestion.potential : [currentQuestion.potential];
        const isCorrect = potentialAnswers.includes(userAnswer);
        
        this.showFeedback(isCorrect, currentQuestion);
        
        if (isCorrect) {
            this.correctAnswers++;
            this.questionCard.classList.add('correct-answer');
        } else {
            this.wrongAnswers++;
            this.questionCard.classList.add('wrong-answer');
        }
        
        this.updateGameUI();
    }
    
    skipQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        this.wrongAnswers++;
        this.showFeedback(false, currentQuestion, true);
        this.updateGameUI();
    }
    
    showFeedback(isCorrect, question, isSkipped = false) {
        this.feedback.classList.remove('hidden');
        
        if (isCorrect) {
            this.feedbackIcon.textContent = '✅';
            this.feedbackText.textContent = '正解です！';
            this.feedbackText.className = 'text-xl font-bold mb-4 text-green-600';
        } else {
            this.feedbackIcon.textContent = '❌';
            if (isSkipped) {
                this.feedbackText.textContent = 'スキップされました';
            } else {
                this.feedbackText.textContent = '不正解です';
            }
            this.feedbackText.className = 'text-xl font-bold mb-4 text-red-600';
        }
        
        // 正解を表示（漢字表記を優先）
        const correctAnswer = Array.isArray(question.potential) ? question.potential[0] : question.potential;
        this.feedbackExplanation.innerHTML = `${question.verb} → ${correctAnswer}`;
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.totalQuestions) {
            this.showResult();
        } else {
            this.showCurrentQuestion();
            this.updateGameUI();
        }
    }
    
    updateGameUI() {
        // プログレスバー更新
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        this.progressText.textContent = `${this.currentQuestionIndex + 1} / ${this.totalQuestions}`;
        this.progressBar.style.width = `${progress}%`;
        
        // スコア更新
        this.correctCount.textContent = this.correctAnswers;
        this.wrongCount.textContent = this.wrongAnswers;
        
        // 正答率計算
        const totalAnswered = this.correctAnswers + this.wrongAnswers;
        const accuracy = totalAnswered > 0 ? Math.round((this.correctAnswers / totalAnswered) * 100) : 0;
        this.accuracyRate.textContent = `${accuracy}%`;
    }
    
    showResult() {
        this.gameScreen.classList.add('hidden');
        this.resultScreen.classList.remove('hidden');
        
        // 結果データ設定
        const accuracy = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        
        this.totalQuestionsSpan.textContent = this.totalQuestions;
        this.finalCorrect.textContent = this.correctAnswers;
        this.finalWrong.textContent = this.wrongAnswers;
        this.finalAccuracy.textContent = `${accuracy}%`;
        
        // パフォーマンスメッセージとアイコン
        if (accuracy >= 90) {
            this.resultIcon.textContent = '🎉';
            this.performanceMessage.textContent = '素晴らしい結果です！';
            this.performanceMessage.className = 'text-lg font-medium mb-6 text-green-600';
        } else if (accuracy >= 70) {
            this.resultIcon.textContent = '👏';
            this.performanceMessage.textContent = 'よくできました！';
            this.performanceMessage.className = 'text-lg font-medium mb-6 text-blue-600';
        } else if (accuracy >= 50) {
            this.resultIcon.textContent = '📈';
            this.performanceMessage.textContent = 'もう少し頑張りましょう！';
            this.performanceMessage.className = 'text-lg font-medium mb-6 text-yellow-600';
        } else {
            this.resultIcon.textContent = '📚';
            this.performanceMessage.textContent = '復習して再挑戦しましょう！';
            this.performanceMessage.className = 'text-lg font-medium mb-6 text-red-600';
        }
    }
    
    playAgain() {
        this.resultScreen.classList.add('hidden');
        this.startGame();
    }
    
    backToSetup() {
        this.resultScreen.classList.add('hidden');
        this.setupScreen.classList.remove('hidden');
    }
}

// ページ読み込み完了後にゲームを初期化
document.addEventListener('DOMContentLoaded', () => {
    new VerbGame();
});