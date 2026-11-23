import test from 'node:test'
import assert from 'node:assert/strict'
import {animals,questions,rankAnswers} from '../lib/quiz.ts'
test('every animal is reachable with a perfect match',()=>{for(const animal of animals){const a=questions.map(q=>q.choices.findIndex(c=>c.value===animal.target[q.trait]));const [first,second]=rankAnswers(a);assert.equal(first.profile.name,animal.name);assert.equal(first.score,100);assert.ok(second.score<100)}})
test('four options per question and balanced trait coverage',()=>{assert.equal(questions.length,18);for(const q of questions)assert.equal(new Set(q.choices.map(c=>c.value)).size,4);for(let i=0;i<6;i++)assert.equal(questions.filter(q=>q.trait===i).length,3)})
test('invalid answers cannot produce a result',()=>{for(const a of [[],Array(18).fill(4),Array(18),Array(18).fill(-1)])assert.throws(()=>rankAnswers(a))})
