export const traits=['Independence','Intelligence','Courage','Loyalty','Ambition','Emotional sensitivity']
type Animal={name:string,title:string,target:number[],strength:string,weakness:string,meaning:string,message:string}
const animal=(name:string,title:string,target:number[],strength:string,weakness:string,meaning:string,message:string):Animal=>({name,title,target,strength,weakness,meaning,message})
export const animals=[
animal('Wolf','The Guardian',[1,2,2,3,1,2],'Devotion and teamwork','Taking on the worries of your whole pack','The wolf represents belonging and trust earned over time.','Let someone look out for you this time.'),
animal('Owl','The Sage',[3,3,0,1,0,1],'Patience and observation','Waiting too long for certainty','The owl represents the wisdom to pause and see what others overlook.','Give one of your quiet insights a voice today.'),
animal('Black Panther','The Mystic',[3,3,2,1,3,1],'Self-possession and strategic focus','Keeping your intentions too closely guarded','The panther represents power that moves quietly and chooses its moment.','Let one trusted person in on the ambition you carry.'),
animal('Lion','The Leader',[1,1,3,2,3,1],'Confidence and initiative','Leaving little room for quieter voices','The lion symbolizes the courage to lead in full view.','Make room for another voice as you lead.'),
animal('Fox','The Strategist',[2,3,1,0,2,1],'Resourcefulness and adaptability','Changing direction too soon','The fox represents ingenuity when the familiar route disappears.','Choose one clever idea and stay with it.'),
animal('Eagle','The Visionary',[3,2,2,0,3,0],'Perspective and determination','Losing sight of small details','The eagle stands for far-reaching vision and purposeful flight.','Bring your distant goal closer with one small action.'),
animal('Tiger','The Trailblazer',[3,1,3,1,2,1],'Resolve and bold action','Rushing into challenges alone','The tiger embodies independent strength and decisive movement.','Trust your momentum and pause to choose its direction.'),
animal('Bear','The Protector',[2,1,2,3,0,1],'Steadiness and protectiveness','Retreating when conversation would help','The bear symbolizes shelter, boundaries and restorative solitude.','Keep a little of your protective energy for yourself.'),
animal('Dolphin','The Connector',[0,2,1,2,1,3],'Playfulness and empathy','Absorbing the moods around you','The dolphin represents connection through curiosity and play.','Reach out to someone who makes you feel lighter.'),
animal('Deer','The Listener',[1,1,0,2,0,3],'Gentleness and sensitivity','Avoiding a necessary confrontation','The deer symbolizes attentive presence and quiet grace.','Let your gentleness include a clear boundary.'),
animal('Raven','The Seeker',[3,3,1,0,1,3],'Imagination and curiosity','Getting lost in possibilities','The raven represents curiosity at the edge of the familiar.','Take one intriguing possibility into the real world.'),
animal('Elephant','The Keeper',[0,2,2,3,1,3],'Compassion and dependability','Holding on to old burdens','The elephant stands for shared memory and enduring care.','Honor a memory and leave space for something new.')]
const rows=[
['You have a free afternoon. How do you spend it?','Join whatever friends have planned','Invite a friend to choose together','Follow my own plan with company','Wander somewhere on my own'],
['A puzzle has everyone stumped. What feels natural?','Go with my first instinct','Try the most familiar solution','Compare a few possible explanations','Study the pattern before acting'],
['Your group faces an unfamiliar challenge. You…','Watch how it unfolds','Support someone taking the lead','Volunteer for a difficult part','Step up first'],
['A friend needs help while you are busy. You…','Suggest another resource','Check in when I finish','Rearrange part of my day','Show up and stay with them'],
['What draws you to a new project?','The pleasure of doing it','A chance to learn something small','Reaching a challenging milestone','Achieving something exceptional'],
['When a friend seems distant, you…','Give them space to reach out','Ask about their day','Notice their tone and check in','Sense their mood and listen closely'],
['Which working arrangement suits you?','A close-knit team all day','Regular collaboration','Mostly solo with check-ins','Complete freedom to work alone'],
['You hear two versions of a story. You…','Trust my gut feeling','Go with the more familiar account','Compare what each person noticed','Examine the evidence carefully'],
['A conversation becomes uncomfortable. You…','Wait for a quieter moment','Ask someone else to weigh in','Raise my concern gently','Address the issue directly'],
['What keeps a friendship strong for you?','Freedom to drift and reconnect','Occasional shared experiences','Consistent mutual support','Standing together through anything'],
['You finish a big goal. What comes next?','Enjoy the quiet','Try a relaxing side project','Set another clear target','Aim for an even bigger challenge'],
['A moving story stays with you because of…','The sequence of events','The idea behind the ending','The emotions of a character','How deeply I felt their experience'],
['You arrive somewhere new. You prefer to…','Stay with the group','Find a companion','Explore alone then meet up','Chart my own route entirely'],
['A plan falls apart. Your first response is to…','Improvise from instinct','Repeat what worked before','Look for the underlying cause','Map the causes and alternatives'],
['Which adventure appeals to you?','A familiar walk at dusk','A guided trail somewhere new','A demanding hike with friends','Taking the lead on an unknown trail'],
['A team you care about hits a setback. You…','Focus on my own next step','Offer a little encouragement','Help the group rebuild','Commit until everyone is back on track'],
['What does success feel like?','A peaceful everyday rhythm','Getting better at something I enjoy','Reaching a goal I worked for','Leaving a lasting achievement'],
['In a room full of strangers, what stands out?','The layout and surroundings','What people are doing','How comfortable people seem','Small shifts in the emotional atmosphere']]
export const questions=rows.map(([prompt,...choices],i)=>({prompt,trait:i%6,choices:choices.map((_,j)=>({text:choices[(j+i)%4],value:(j+i)%4}))}))
export function rankAnswers(answers:number[]){
 if(answers.length!==questions.length || Array.from(answers).some(a=>!Number.isInteger(a)||a<0||a>3))throw new Error('Complete all questions first')
 const values=traits.map((_,i)=>questions.reduce((sum,q,j)=>sum+(q.trait===i?q.choices[answers[j]].value:0),0)/3)
 return animals.map(profile=>({profile,score:100*(1-Math.sqrt(profile.target.reduce((sum,t,i)=>sum+(t-values[i])**2,0)/6)/3)})).sort((a,b)=>b.score-a.score)
}
