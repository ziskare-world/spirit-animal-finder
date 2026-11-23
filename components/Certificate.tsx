import Compass from './Compass'
import {rankAnswers} from '../lib/quiz'

export default function Certificate({answers,date}:{answers:number[],date:string}) {
  const [primary,secondary]=rankAnswers(answers)
  return <article className="certificate" aria-label="Certificate of result">
    <Compass size={56}/><small>Ziskare World · Spirit Animal Finder</small>
    <h2>Certificate of Result</h2><p>Your answers reveal a symbolic affinity with</p>
    <h3>{primary.profile.name}</h3><em>{primary.profile.title}</em>
    <p>{Math.round(primary.score)}% compatibility · Secondary animal: {secondary.profile.name}</p>
    <blockquote>{primary.profile.message}</blockquote>
    <time dateTime={date}>{new Date(date).toLocaleDateString(undefined,{dateStyle:'long'})}</time>
    <p className="fine">Symbolic entertainment only. This quiz is not a scientifically validated personality assessment.</p>
  </article>
}
