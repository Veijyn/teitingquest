import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { QUIZZES, Quiz, QuizQuestion } from './quiz.data';
import { PlayerService } from '@core/services/player.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnChanges {
  @Input() autoStartQuizKey: string | null = null;
  @Output() quizFinished = new EventEmitter<boolean>();
  @Output() backToBattleRequested = new EventEmitter<void>();

  quizzes = QUIZZES;
  selectedQuizKey: string | null = null;
  currentQuiz: Quiz | null = null;
  currentQuestionIndex: number = 0;
  currentQuestion!: QuizQuestion;
  score: number = 0;
  finished = false;

  answerSubmitted = false;
  selectedAnswer: string | null = null;
  quizResults: { [key: string]: number } = {};
  lastResult: number | null = null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    const stats = this.playerService.getSnapshot();
    if (stats?.quizResults) {
      this.quizResults = { ...stats.quizResults };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['autoStartQuizKey'] && this.autoStartQuizKey && !this.selectedQuizKey) {
      this.selectQuiz(this.autoStartQuizKey);
    }
  }

  getQuizKeys(): string[] {
    return Object.keys(this.quizzes);
  }

  getPercent(): number {
    return Math.round((this.score / (this.currentQuiz?.questions.length || 1)) * 100);
  }

  getResultFor(key: string): number | null {
    return this.quizResults[key] ?? null;
  }

  hasCompletedAllWithHighScore(): boolean {
    const keys = this.getQuizKeys();
    return keys.every(
      key => this.quizResults[key] !== undefined && this.quizResults[key] >= 92
    );
  }

  selectQuiz(key: string): void {
    this.selectedQuizKey = key;
    this.currentQuiz = this.quizzes[key];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.finished = false;
    this.answerSubmitted = false;
    this.selectedAnswer = null;
    this.lastResult = null;
    this.loadQuestion();
  }

  shuffledAnswers: string[] = [];

loadQuestion(): void {
  if (!this.currentQuiz) return;

  this.currentQuestion = this.currentQuiz.questions[this.currentQuestionIndex];
  this.shuffledAnswers = this.shuffleArray([...this.currentQuestion.answers]);
}

private shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


  answerSelected(answer: string): void {
    this.answerSubmitted = true;
    this.selectedAnswer = answer;
    const isCorrect = answer === this.currentQuestion.correct;
    if (isCorrect) this.score++;
  }

  nextQuestion(): void {
    this.answerSubmitted = false;
    this.selectedAnswer = null;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.currentQuiz!.questions.length) {
      this.loadQuestion();
    } else {
      this.finished = true;
      const percent = this.getPercent();

      if (this.selectedQuizKey) {
        this.quizResults[this.selectedQuizKey] = percent;
        this.playerService.updateQuizResult(this.selectedQuizKey, percent); // 🔒 permanent speichern
        this.lastResult = percent;
      }

      setTimeout(() => {
        this.restart();
      }, 500);
    }
  }

  restart(): void {
    this.selectedQuizKey = null;
    this.currentQuiz = null;
    this.finished = false;
    this.answerSubmitted = false;
    this.selectedAnswer = null;
  }

  backToBattle(): void {
    this.backToBattleRequested.emit();
  }
}
